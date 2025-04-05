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
    "5hv8oxRVQdcwWDAh2DRPtpBDbKkaqf7A3ThVoEDpTevKzveipf7Xp31auacoUWUnULeKE5e8x8YABzbwuRmjV5kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tuaUs55wabGrpkno1bwegZfJHPSfKhVGwNsnM4Msxy4NpWutZirQeBehQi9jidNrrFc1Kthbnt6j3HDwVieJR3X",
  "key1": "TJD395X3E7PfJ5sWW6uHUZKykL7EbcwKxkyPx6DLtTdFRypZkeVfg8jGhN4GVZS3hs2gA2PCWk5cshw1uLH4uaq",
  "key2": "5ava7YL7382VHSZ2DS5dGBsWpYgJmRxS845dixbhPdyug5CJwpH2X2X4FchvGH2qDMunsCWUT1nPRbd6Z419prdL",
  "key3": "2hZxs2WYkuCJDEZEA3comqFoMuhifXAwDpv3EnLmQmuw5e7bQFa97rU4iqwXfbV8pJ2voaUzCpadKuJUXBGAfDaq",
  "key4": "5zyE86KY3npTmHtjKVazJXtYEquVnotJaTERK6EdxTtJs64CX9dshpV54bRPKEHFPQ7z3bBRzsZLgPKbrL2tRrGi",
  "key5": "k3iVmm9Kgic4oHMAihMY5rDSs3ibdJ2vT6m7yGiaFUqe98VaKhZLdu9kp5UTVZiyWwHgcBXwfRcPEkgiib4G6U8",
  "key6": "2cahuu6XnJcvrmH4JdWmHzVgsc2a7fpvDhUcwrAZ957zCWBYNe2n4edTd43qvp1RDVHKejrEfiiBVAqVGYiL7Cc9",
  "key7": "yKX8MY7r2LmfgoJWTiG7B8AkayAJUzouUwDz9txGT8qX5AzPmNVpKHk5BjvvkTPqxvFkjd4L5eC9J1Sjqf3zu6M",
  "key8": "4QvNHGZ1Qx9e8Hdt8EacYjtCSrt2xfkzuApJMdNC2irFLitcTxqnDhumie4n4FhiKPz4dV8KGCoR3FjRfRL3oofh",
  "key9": "2PzAAMCm6ufM1ppE1NBiY46ooTybq1oijQhuZgLQpiibdnRXmtTw6zHzrkBdDJQJUxbrfvFiJkhqch2fZVqDo66m",
  "key10": "5REJPmGKeLhYYXyK5BVn8VDe5cRWMqvF4NbciX5L75CSytAjBPzx4UaG9qUpDRFCitM8Lx6hrWLoCCBDU2TVotXS",
  "key11": "3eVy3uoJraNkTQu4y94hseuA34LCWsJMwUe6eHCwzDzz3Fvww9Y4YEZ5nUp3irwJpgRFGVLgaYdid4wavsUxdSi9",
  "key12": "VbEFV8AQvtErHZU2gwUtjWmx2aHjaSQZ6ou1Fg2FXUU2GuxL3Y3YWgwgJBJjRxHB9wqPugzxBdLuxRdYuJuGnUJ",
  "key13": "2vbswPRUqWKEcxGTKuQvUykDTEq63tQ6Emyk42dJEGaRA6b1mzjFQMef6MiFNpaPMowi2CbcLRdACrbWDPwTmjhH",
  "key14": "4AEf1jdWufvjHdcWnTKFEZGqKUTWmsMJbrVGCpCxFzpDmXcRVMqnb7AoXtDwE8Qcc1sKkr9pfmJvdE5H47d311eL",
  "key15": "33Bbz5bR8MyGuyMAYuq7FyZhsYuCNjQ3bioUMqrigMhEQ9Bnihj58JwCBp3DwAMZRjNveyNTFP2VLQSKB4zYn7JT",
  "key16": "5Y9gUSYSBFvTFPpg1CguGrUeaNGrc3VmmfPnt3vJFYwZVAK38XN8XrodCDu2Ry1tQNRj5VUNQKD5iLqPtxT5bNgi",
  "key17": "3Dzuq74cYxc1wbvEuCD59n23afoUcDQCD8f6iTYoVocogTErRACKz1rMZH3LQVRP58fDM57Bf5TGdMh2v3A1btYf",
  "key18": "5g3b6LQUCsuzdZPdekyfysPuTGvAWnYGq5jZbB8nbYNBubdksag76e3hndYnYzXthQhrzfgeAW8MLtBNqVb59doi",
  "key19": "3sE4AapRZYyp48XSCwUcjHapozgRouSdevtoebUCHKenDJiXdYPivjDfzgMXcag8YFFv2KouhHgtHDpAn3zSyB1J",
  "key20": "2aWLkeqFpm4j7XuHtn5dZou2tzZYZ42vgD6PobLzV695UVMEdMGRSsA9yt6bHNdbQqu92Avg56ipyYqHC4bSApPY",
  "key21": "z4JA7Bctsk3KBYSWt12oaKJMc36HkVmeQsY1KyfrjMGyoxCbzdbnLDGNy2XEXa97gtn6vXihUvKtvQioN8TpQvd",
  "key22": "5KTqy9e4fBX3PsDoFtJ7wivKUH16dtdeWjcTjhrzhtwQhWaUVFcpSQtBfitgnLkLSpdkkEKmhFQbheq2xjcpfgfC",
  "key23": "32vZaikWhYj7PBvoCHHmNa6zbbLY1q5WRgvmubRjveTZuWeyX7Q8e3LSdnE5goiJP5tqsgU4FYQj6ipEoZwTm3yr",
  "key24": "ZKbf6fyawJYdYmBjW8xMcjq9LA2vyZQLsyeRyqMjZx8qTa3A2UiN8Hho2gh5LXF89PcKyRNxxZyR8Bs2MmmJqHs",
  "key25": "2EFBjG9kez1QfgbxQigR8Ju77Yr7gLFN8iPSxFQsSY5wK2prC74CMYDcMU6GNf8AixwSndUSBecdTsRLx5Dvau5P"
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
