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
    "1EZBhtVyBusw4cMwkFSxezkWURHxGFV2ovHVVZTHUxTAouDoPAbALRgNewXCENW2hdFVH1DnWmwuna19V66qQut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b1GNJKKNuimAaFXNiJQeeA5oadGtNUHmmUQLoL6X8XktJmZEidU92mZv2Cv5LDYg138n7hypdvYrnyQpffMvsoc",
  "key1": "fuiYLGbLPRM3SwdEjFJH45sZ6z8ph4fiGpyhamZoWQZR5kqdyxnQen65tK4XwnFzWQ71pKTeybCe8Uw6KipJ1Vp",
  "key2": "42NuD61JD2idTuWmNVsRPGuyxGYUyhVD1QxsWvDbeTSjEqg4ZyXXcAp35TzGbhfwbBvJc8kGm55bBszFm4G1gKAc",
  "key3": "4Cf1wtABx92afzFC9kawunaU7r2Rowmp5BvEc676dUK1X3PCpP6PFEpKWrVD3BEt4GpT68bF76HHQWP6h42gWb9q",
  "key4": "65U2aY9VWGHrF5Z5KavLKKrgrEHDAGW7QohcFBH76sVaLpHEQnd9iUkoy9qq21uDzpYsgsdpXMhuHXKESt3SfWjz",
  "key5": "5gSP4dKRM7Yzs1xtn7KhmkRddhKqigRcpZYBN19FMCsRjUGACdUgob9vxNkYntojTHvr61c6afLTdY6F5HH6ZyfQ",
  "key6": "3pf6qaJSfnfEQ9RqUcnUUqxjR8pKPzVHpgpFDNWw5YFyh2D9TMbaWdtifoG7AsejZdoHPMGuYNtVKE5q4Nwj4o7g",
  "key7": "5b4umccn7Wm4VKxqjXruw6m8vxxJhNSZb8jeBAk8tAbkhEu7YXsjs6yGvsYurJRShVsfRYGiJk9nCmrEY7Aapw6G",
  "key8": "23iRRtSY6LD1x4rKPNVBJaYm7XGn1LGKjtdsebHdG51nUTtoik5GqwRBkRveMCUj7VoWeL58nNAToj2mcPN4V6ae",
  "key9": "4CQdP4XkZQ5Xm76yfjSUfBthLEX87q4miWHUwvLUoFvDa4xhoGJtpJAMxjqXuadkLoPcGGn122vohkC3qzz9BbNC",
  "key10": "s8dUUE7GUf56yQQwm2S15NkPacGY1svgZneJ7cTSEkNARFVHTSSJRpf8UNUGoNUQdiYZJAfXWqCTn4HbRqyAABb",
  "key11": "4kpZbmncpAsfNQjzmFzRiQUMzz3g6kRAxfNKTSkJE6MWBqDkmfKUYLRLqVy3wj28JrBxLKaEvjJX5GET6QEfeXh8",
  "key12": "2UDgjvwc8EHQLpeERGcvETaqxFTMqkYhvWB9AXsEncmmtHbTcUcfV2SJxbEnsv5av17ZJHo7vyV5cz6F3k7XBpT5",
  "key13": "5wozJzrev2b5tqsePE5CExfozTMe8MDQppt4A5ZSWYrdC4ef4SFEHhr6vgUM932pZyDYVc33eEerA97FNNbXyM4s",
  "key14": "27WkKqn71aW7VqEdvMQ9aWYbJ8MRWmgQ64JtSjfqbAk8YEZexBsNjWe7AxoPyprE7uxYtSfxhi4P5j9ggbdHzV2P",
  "key15": "4v8GxWbjhSeTxpeMgxTcA146sZs8Xgu2NzUtkCpgY689ApY4C827rM1zJ8vkVYYqXzPuagdx2Ja8FtjewMxv9vMZ",
  "key16": "59dRvXMvB8r8S4xVNt5mkcSrwYZVaj5r7YmAuaKCvwwirB6hMTYHoW8g5WJMSUDDofVjTpBKemczrWvd1kvWM9o4",
  "key17": "35AHDMwvLXDNd8SoWAkN2EGyaZHFbzh5XnTmB82WM6E12rwWQwLke3eEaAzGiMihWDBDEk9uMYXTfkTSy2AtRDRu",
  "key18": "477CXayMwgWXApaXWMp8FMLUK8qL2iY7R1VyB8ASW53UfnSbuFzwyNGT2GKssBbRmM91koM6zJTxAo8MEjEF5ByQ",
  "key19": "5UUBsrkFWaweGYBJBMWhJyw4igMSaZ2qDUvGTjTSXSC9ySFeJvMQ4URFNTnxQYGoXo3myupcu7ahLhbusopcbZA",
  "key20": "47LsJS25WCJJZUCMPnNHbybiU56Suw1TfdiLopM2YfDbTdhiDLt8Ppcwik2L4khDzsaTurb6zsAWS3Dmn7Uk2FkT",
  "key21": "2c7CN786QNBWS7tG3hQGhyDpKg4BHD1dheTj1DEDy7kYJ4HhFyr5UQSa4N4jMrKXbdszr4LUVedbUQHYAtEE67YV",
  "key22": "2E3hdgG7M6HL8jbGLpcBhu6HCZab8saromnib9ZQWqJ48B9JZEVdXBXG31zBjUSQTY8WyUCAHALRfvYZKtuKmJwU",
  "key23": "5HyEyERJbJBR9VQM3koD6Yy2kFgorvpPtPi68UPBt2rpekqKboFZsXYvoYDVvNjusJGALhUqnPLp6QKh3isQesWn",
  "key24": "2JEnJfSN2GpbNSSUBZ74eAYqVZTqbV3eSWKwUXDax7F7bNjMGjEWiZW1mv1y5GPPfkbKycx7uS53pG9qr7ZmG8Vt",
  "key25": "5eQFMZwrbARfpFWeZUhgvpUhx354GHZrfzEaF5Nk3tM1DQUWPRKPsiGisbBhsYr8LVtUgwwVg2G7wDVZNDWvL1bC",
  "key26": "27AFCfa9XD7W7N6EJeK5bZAPmNo58y1w2WGWb8Ka8y3mS9WMcc2y7m38zCsvCs4vaVU3rkb3EXftz1BPV4nsLx3T",
  "key27": "4HHJ4z3vVwp6ant34H29dojTkCNEDiRDTcxQmdnm2CqwzvuN6uzX4jCGpyjkec4K9HLFVYsyuxnYeo2zFacb2nAf",
  "key28": "3aGUo1ojr71hivtmne1E4SQswpiNYocqrvpA5nP8tLwQJrNzBEdF2pT6QQnWZXHKtgzKVKMBeqw9F3RcE3tR2j9K",
  "key29": "3Ko1wALGZnzRpvxhBpyVzVoVP4LmsA9nqJrQxbufGkesZrv2GLcvSbtyivCtGKGwNswAHcJmedUwJUCNggr1PXmo",
  "key30": "2DSmEZNNMWTmVkJxEj593pRsExYMGmTzUbNpgSPr4k76jMKUoaYQpyCvMHQNLzw4n6umLt8JgPiz3xj5D1RC6ncD"
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
