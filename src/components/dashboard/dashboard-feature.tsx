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
    "2hr19Pzitzde2hV7qmJW3WzcJ4gPmxKEbyqV1ASsdkM8BYeSuHBc7PwGTfRDKuBLyboQkRfAixcViuZ31ygbrPpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XsCLxdxFmPxNWFMMFLHyrn6JRtxWLuTPJL7h4to7oEVquaN3a42GTHfjc3Tw7z6CQbomBs7dmYV3jHyA7EJfyDU",
  "key1": "3xWF4KoBWu9Ug4AEWDyGHzMYiYimGq1wfTqfbQTk6qp1VJgZ1zAEioUbCkTbpfiKgEMNoUSfbVYJ3K9pYMZhVRLE",
  "key2": "54RdBxWHakdu7au4di5yoEsvYnTpoX9kDoqM1tvrWc5kC2DiqM4zQaKupnHEEAMPWBJbJJRWNRnfQD81N6CPYtZG",
  "key3": "559e7uRn9t2sZZ7eS4gmZVjbri5XDVPurxbxXtsfAkcyn8N96e5Bt1d2rd2SVCQuTvLUpMy3tAqUfj2x5itxe8wX",
  "key4": "fizghuYGk8MPugs27Xdj9cVKq6Nmj8H7xgGdk8seBy4LaXoSZy2tKnwwL5VN137NNDDf5bozm8XDRVxr4HL792V",
  "key5": "2t3bDAp7RrsdozQVPTpgVQhRhUFiNG7tuQk6wvkrsQHEMEbkVy2grF8dJq9Pfav438roKuoF5CRqMTddnThkkj8s",
  "key6": "icsw5CrLbdiK72xHKA8aMS2K81NN7Khdn6fkakbyZUu4yUNBCUgKcfj8uupEE1M7ksNhMthqN8hMvZ5h1bto72c",
  "key7": "5kB9tw9Eajwh2RgBwFAd9bqUNmkajBZhjUCQ3jaLC5bq3Bq6iUzTvYmk1VsfQhbFcged3xdKH9iK8HGkCUdw9TdC",
  "key8": "26r5wDyYHz3S9J1e7w35jnTJuronsntU1wDN6yKmLXkuPDGMM277vzHcdEew7myL8tXPFNKB4raF8yfxbMyGhrim",
  "key9": "5yfCFrWfxsRoRJVUb8rEB2ycArXw7WeCEwQX1n2eSUrWNiPYpRijL348JQFGQ9dwaqpK5yYMuYS5esfExXBqCEZc",
  "key10": "5Wu6pbmb4vrSM1NVnNfBwbtMntbFz8F45Ep1v127MUcJcejaBf6Vc88DQQbFkZqqm7d8UWBPrLMgwAu7s8vCKtC4",
  "key11": "3Z2swEaGAnLH6F8JYDEMxTKEGExTF5KoewWKrgFmY7kLYRKv9nMWjHzSqCxaJjxEcQuyY8PTcYqtjfQ2Nyf1ECzc",
  "key12": "2BEhPAWDYwqRZ8xowqo3LQqbdfkVf7Lb9t5tR55kHg7Cynmib7DLzQZPGsH2UvE3v8pF65Di412RmGz3JnqzUZMf",
  "key13": "3TnTYJGooXZu4Eum7RBqzmaJEehUnDamMhZWS4WieT8xNQNPsvR72T8XGJAwE6LMkkncbiqQ2JrDvojqnVB7GY5X",
  "key14": "pJeEY9yU6Z4aDe6QYqkghiAUn9RjhKYMcEGLC6dGxkCDVRrEBFFH6WUPeXKCEURXENkePsGWJYWoALJjYxtRrv5",
  "key15": "4q4qcMsXuKCpfvpt4U5FPHK9fxdsKfe3rUJRpGxDehFRU8H2T3FbMbQpTYRKJCGeJGgMvMCpd8Z68LuZRcEwGkce",
  "key16": "4LeYzn4WvoFWsM2Y8cQbmeYVuak42HHmb53yuKdoJqYmP2tADXscs8phiY62ifWpwvRup8yAX46QRGHjKq377dgJ",
  "key17": "4ozKe7LFTqSFiL5MUC7JqaeMe6zRgrZHw7bcinsMQPR2vRsRGBwevNjs1AE9wEx6Qazhh9hWqUpJdt4Rh5T62F4a",
  "key18": "3jxvYJ7gtZMVNEqSapsQQC4Y5fjYbA3zHbCmSbm1GE8WJjeK8DvGgUcjsn4KNCG2uGxWSSYsHC8FZSntfyN6RA5B",
  "key19": "3FGqwLu5zNuJMniCtMCRff33M6zFE7yLBiTEuGMhukuP9ppWPrPsazg9rdvtZfoPdM693ardM6c3yh1A6Gy2MCuZ",
  "key20": "4SLSzcyuAjkeYRKwvPu4G6mD8zDao2EC5sj5SooHgZmZFwWUHRCSp8XYhXoWJXG5h2Q7Jj9nV4Nx7z6ghs4vRzEY",
  "key21": "23qPgzaQAzkiq5sUMW2q5XKRaeTrMYUvJD435shqr9BmhjL1Qo52GCxi5eqqt2JZqKCgeVfb8zHKvLuXE42W3PwH",
  "key22": "M4R5GR173UFtPTyqGec2NQseHHWRnZ6XMzASp5z5Y7GuycActDcN1kY7K6CaPXXxxPMnD5Xzb8F9wreGHdLXnyM",
  "key23": "2KbEJUE7nFJC4tpqyHWU3WWtuVLnX8SEhGXdJntq8FJyVHRmvDC7d5yLAbS6qVQVPhP74xJUzP8iaXxwpMccEL53",
  "key24": "2p4S2us3MZRZjnFjyRAGq2shtLVVMaxpoksXXQ3W5DeSSCF2PNC4rUB6FdWBPsZrGeJ4w5xxKMmkcBgGZG8UEKK9",
  "key25": "sAieQoCCcskSMzPsLjugYP9AwUKpvZn9xavR5NiGq2qkRyT4Me5YTJKv5uXusPr3Hi8bDnLmNdDKASnAfFUP8tD"
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
