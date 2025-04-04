/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3im5vggRQfDj7TBfzbPQsy1JVQV49geTRDVuMew1zcbQ9ccfURSC4bLAs41YcoRYW59bH1dEHuBcg4KeLL4pj1xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hwxbUyi42YpPmM59TvJhYXMaG1N6SxVydL6ofqZuKZcpBDHetMLht8VUSCBN48dhfqdYyRoYKwpqQEXiWHEozHe",
  "key1": "26modVaauirb2EC2aiNCVYSbEhURJpWbDf8bAXeLUcoQ4pcvMpT9CQbQPfDNCpUPFD9jb1rFbXqRNjqRkvTshSbp",
  "key2": "4yftNoZDu9jCRPsuBBBG5WCAWqLcb9G7kCwoYp6oPvCmiYWBYkiXdj99tVYC8AvfgVKutiWg8qQUaAtxxojj8aCi",
  "key3": "5zJHhREf3bFYtjaqbkQiopjDKJ6P7Sxp2HMNnkNJ6KRC5uNQ6nqNsEZT4fWmDAMeAo6naTMhDtw955PQoFjNicBo",
  "key4": "H92nYKpH2PjbB7q1xg32ospSzWhJoFhBrGuB9X4sYDSftDamtRDE9t2V3MsvKthMCb4ESJwKt6L2YkgZ7k8Q6UN",
  "key5": "4MKrNRwQ7XL5nyiggLZbEKg6D7q8LJyLgBzQPxybxkx8fNRWmd2baVJm92opZ3ZJJHLKGQk8PbRatmoDVsx8XyUg",
  "key6": "3EvdovvH3uAhdUNay1gAacDb7C7XoecPezTmffSbA8d8S6y5tEWins6A4AUtDXBcjxPEuTZobrjc6y7Wv1MCbhEh",
  "key7": "3Ekptq1pkDece5U1Gw49fPwUSP7hAJC8TgwMsaF6qGvMvrWUQkjWgVnoXqTVYtXF7SztdH8YYqTq1eujsvdVjrgH",
  "key8": "2tK4k7pKtaukxWyUYmyePyaVqZeUJidmd5ZRk3tCmzKtkpzeQhHu3ZFj3REaE2qCDTeAnpbnzfg3PpUEj1iNFDrP",
  "key9": "5EULQRwGktG9Zjb864JMJez5ksbaCHF962X1mjp1bKcBtVeJCeGnv9Q1K9x3Xp1cjG21gAGKYsUFDdGVbv47bsBU",
  "key10": "42u5RCjMp1F4MNEB66s5iuF7deRdgCVjKRt6bzZL7vfkqBQkeyG9S7S4SkDYT1CZsoVcBEgkELZSSFojFVHDEb26",
  "key11": "4h6UvD398c3SNPPxjH1wLETw4Hh7tkRZzrj3vWKZPtupa2waxSkST6i317zr2fhKyMVyKG25SsXNRJqF1tUMiPTy",
  "key12": "62hV2frbELMyi5HfkxV93n284qGGxKwPZhmmYPh4uZo2TzKG6F8Upu8ehiuPyKrJ3oHkyKBAbtbNf5tbBqkG7jpL",
  "key13": "5CwwbXuJCVkC1XiA8Fa6MsVuUTMTApXW5vDgHhZ7XKdm4X3pLHUwXF9JBe12ecerQfHi6LowPAVu8E4S3qk8T7BB",
  "key14": "5xAvfcAvKJZkwdfCx9qfrwDkCSArPeAxSBY6g6ywkQBt9Ysjk4b8LQmtRFfQQVjBngse9Kc4BLgJZStJg2jDQFPi",
  "key15": "3VqwRdUuHYBPyxAfs2vFgmyfq9tGyPkns8WDigk43PzQpf4kWc7oTMc5ryn2MZqNRMGHDNHthMCqNa5Km5SUc1xk",
  "key16": "3u8vCyaTtJc2Ehp1EMradL4sHy1EUppWWx3p8Es3nTbRxiNPsPz1NH1dKcrTR9rMmvE989zjrRLaRZtKEVY3dspr",
  "key17": "4ZAWb9owpgjUskZ3HXoE29mE2gJxCyfuGB7UGwygqNSxP1XszJJUAefdwLnJ5Mf3K9BnifWSKbqn2RAyLHm1LKxN",
  "key18": "37Na6TchxvGHNT6od1RGRooWtNu3rcG4ztkbGRmmLG6sUSUiXdbMpFBPKb9ARHkBLrWNpC6D3m5px5c2aD8Td9TH",
  "key19": "4zxxpaq8p7VQkRqGx5ePBap2FWjLfgxgo6XNg9uYCRpyfkqdKkvN152NE7mKGXk6nAVaufZekSxn3eMNWSCg7epw",
  "key20": "3rtkbaThDLbtL3P2vsTXjB3HX2y7tKhtuhWq3EFTgGz9behJeZihiBYNH53rimq623JY35UYrUVkHLkkJfcQ6d56",
  "key21": "2owfr3tKzmL8ChBvkZxZ5T2Ng4f6sWJM5k2iUT4hxiMAEisEkdKf3YduSgVoJDgfYVCBt4EnBx3ZKkyiFFJ75me",
  "key22": "267B23kZ1ERFMPiTT1oUySaGvSzz6GYYLbctsG8QgVmLFpxy32gwT7HDP6FogMxRk5Uxh7csqJtgtMEVC16Vyz89",
  "key23": "5731ExQny7SFyjSdLsQb2qyECk3bk3eUasQvf2At5U4YgAubgoxksA8z9Ey1pQ5LCYRK29i4LPPLyxmrM4eU5PyP",
  "key24": "5iuSBj6w7NDms7VfrcWRHfLbPMziHgWc2NnyJAPTc2mbSD4KQf3wP6q6xjBtJ6Jks3frfECx3SnzJzsq1bHr6ypp",
  "key25": "4XDZ7s4o6xodPAT17KJfYYAYggLn1Qz9qjUieYmjjLdWuGTa6du44askfmQ3Wt8yCJ1vaJKe9PAopnF7kwURHFiP"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
