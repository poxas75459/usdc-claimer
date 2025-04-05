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
    "2YRUBHcMr914PH4SkGAjgkKfyzoQJbE19cjUFTF8sNhcXSRLaCHsC5D7Rh5YYtYYEPiEQazfm2cTtWbP17YBddAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7bm2ajSAKGbL1iVDnDAzRHAPQq1m4NqatCD29VttngFRQ2xwt31hLwn3RwLas2wKSAJMZHAEABUNjz1tR2ZAe6n",
  "key1": "YHAMr6dNzy23n5DEz14qYmMy3kKSiSMfVycPaMtwR6Zc4gCwmAN5WFLm5AVWKPb1vabW5FZjqM4zZ36qkQSaf2V",
  "key2": "2QqgyYg6acRwL2g8mGa6CbLL58VVce3s2u5d4q94JUXQipmGnJhxuXkGMGqdfBFV7kRHQzjCeo2fJoqBvrN9CC96",
  "key3": "5hSr6g9uPDTbWgi2JoXW5tCp7DGCqA3Gkxtou9WFRtw9ktyiASfjj3v2fDas135gPFhV3pkNhe2SRi5ZZpvuqprh",
  "key4": "HHB3xiGYi7JXr3AwjVHxAdt8nznXypxBYLjQSwcnXWNL7gW56Sf2Z6uWsW82Qa66E7Mp5WyAYw1XkoGNzgZJtf3",
  "key5": "3H7CR9Hdb8Ph3vp8mdcySn4G1xqEq4voHN1TZHg58PjEaJUtPH8GaPVA7Nph1vHRr1hdQtCuiC2Sc3CaMrsaGiMm",
  "key6": "b3aRvYMPNLCUtA2Fm575WjNyxpcW2kAVd7oAFtUCxNa7i1T52aRGZXqcoYPb6Ae47b9wXaHqzvVYdu6jESXKgDa",
  "key7": "2rKyLJVkkQxuR8WsgEqCbzShWrxS1HzkNMjoGi7jV3Uw46Gtgb8ZY2sViNqWBL9Dbvx5s8oGRbwqH3PqAhw2Hq4z",
  "key8": "4jXnbLfQRCWqNjbWTLGzwu47yMaGFKu3e36ftpRhGQc7vDDLJn1naLgK2mxjSBXXADTBC5nUbJ2dVxEDgxGUtRPM",
  "key9": "2AoPcQhPq6jZxyEqevk6JucH4Wq72kDixDJRyHARAqeTN8MHeqxmdvmj3PxiBWiJtUd3dsaGVAJi9oAEmXGcGFCA",
  "key10": "54MCMoNgdBcZFQY1NFb6dawQtNLiGwH6DcXny1b1YtJqP1CqTYbF8NSBdPghTrgs9h1rVsg1JancKzHBeZDcDHDJ",
  "key11": "8SDNC2YeddgyEZCFFYfro1mwXJv3xgpoTNvMgNCYFr8MGvhzfjBFeGdgexV2qVxev9y9ZL4VL5rM7AFNHwaSkhB",
  "key12": "2TjEtPVcLGSS5kbC2uQ9dY9gAUe5NJszBmFVHZTr3DMA4viQ27jE1HePxZk6SxmpgQrNpoDTpcHpAY4hx97J3HdH",
  "key13": "5LL1hr9AEGZFDHxxwGJWGUiyyUMr6efuEoEMecRgER5v2q9a9NUFUsHz91AvNnAS9tZMdSacG7snHp4AFuiqPj8",
  "key14": "3zNnvshHWQwPfGYzVycbtfsmhVNVnx8Jarx5K3CezUUbxFsfNye1UD3DeL5vNFxmCo6PG7HzKZDky6U821ddMADJ",
  "key15": "2iUBCNtjPG28Af32FEW3Gu1ghQdFZHqpas3V1vKHCk1Az5WV7twH8AePWigsun8XvfmRtxxLYALeWXt62T6K7cNr",
  "key16": "5GFDd7s8Hypz4AVRTRWzmWNwBn6xZkQP3U15Q1D5YH6pYEevVRm1cv3W6YPhPTfyMDYzvn2Whs6qFbPFTmMDQSYN",
  "key17": "2uK1xBcE7Yb5q8GNZH2fPkFVe7P2bEmCzJhgtg4eCcoYFre5FoEjPtQfmHRo9gafZypgdtkdphAB8evDvNNeRCqB",
  "key18": "5PRzQmDpQESL67wx4KkLvESKuMcRNuNkHcjbjhHRTNwgQqFyvxaqiPt6Yidx6GHymR1cQKXDKWasaKAvqeXiMUPk",
  "key19": "4tYarzWjD6UnPQk6oi4PvJ1dDdqaBE4G6gTdpDWUD6Jm2q1ZPTERZiz1r1nXgrjecMNVeqYtw6eBus8mhKkdezng",
  "key20": "3T95VLWCfFZB6fHvvx3EXRVe9Gj4qCaRce9wMtrkQdt672QC1cHTNJWjNBzhF7MwjeiptjSn3xPR2UgtNbAQ5bQw",
  "key21": "oSqyrhThDh23qAkvnwsW3EQmF4Ys7NxcPAgvdQrqCDgDEDz8SCxaQacWbb3fgD1VXjwJS8cQhukDNrwyp1GKDnS",
  "key22": "4mVJBU1w1r7rXJrUfDXVRrgLT6u46kHuQ4sp1W9DVa7BtBvhg3WPNgb77AAHVx7qxNGAaf5GMtxQx9cGZDT412Pr",
  "key23": "RLK4Zo8c6RGQwdFVCPNtR4yKh1XH3PFZuM8n5ZaAQhuFzZsZaBUiLKxL6rfdaeUr8FN5P8VLzvbWPsKLUhmgsyW",
  "key24": "2nRSRmh2AtHQcnzS7YTjcGn9Deh7iBtJtj7zaf7BGJnSPRc5GGSRtAmM45cTGwvztubzRks5AXMbphEdTe5T5kTy",
  "key25": "2xhhUURvT9Fj6ouYyXbGm383ZSr5qDG82V5A7qxkFjg6BdXGFGZoavtrVmdv2j5mH5b6QEisF5FdQLGUr2Rfj96f",
  "key26": "5LAwmxPbbqXVmigySQGpomDqURnpqiAWKWzn4wojJyX8CrY3qAFsFjTYPkDTPc3sYgMqxCep1ZLJKYpoad9X8Cih",
  "key27": "9Y9FsgoAU394SfZStQxaCaHDmpfrQ3Hrt8PFFdK9DqELa2hT1iJKsU5HRbibthfLBa994zxWRhV28e25FyiedhP"
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
