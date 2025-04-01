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
    "5s8RGdXow5nwRKcVbb9uErMdwBsMXe5dru2Eib6kT4dEzgQBFG6LXJCnTqpAUtSjZ9GGRjwqFihs9fDHrsch9E4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bvJ6d7v7WHeTUgaq9Xjcie93BXfD675k9oCVjcBg4yLWgutQgZs9xXGBQn9LkWMEAL5TMCsXq1o2xrtgyDXyaCZ",
  "key1": "4NjpTDNGe1hxTDR2FhbnjN1oZYHmrNT36zn3b3MHbfHGLTM1uzXkKY4rFQ1HwNA1qQPtVMMNxPaD5PWj4L7QSa1H",
  "key2": "2h3xa2kMhAeCpHQEoUQLtR3iZMZqofvhD4mjJR9z8AURbf51sUaj9NnAouD6EQKRi6x8wWa52XjCk6YrqqT26zRo",
  "key3": "5Pc4PPMrJT2Y5iBiKEFEW9fD9SsGWqgNj9sQSSz5uVXd7so2BXGhKyCfCyr93xaVZ6bZg3zayjC8aHcmCPPt4hoW",
  "key4": "2tzExzUQD6zTjsfKV4MRgbhYEWxbaorntLLxHXa89vMRDivnq6W6bN3F7m4L6RkxPpXV12fnbuWT83XVSPWHwNJ1",
  "key5": "sv8NBW5ziUcfrz5jvKq4kHActdwbuFnBiPWBjXy3Jowna7pnKZ8yZKDZLCYmKDetqfhKGeBcaGqW1ykg3v8Mifm",
  "key6": "2NCSEVPQbF7Sk8WxSuXw9Y5uMFxDBN7KE1gvCLf5VkcovheyQLQ9ryYBz6d9BxULJvidA9UfhV8n7g3FJ4oKffjZ",
  "key7": "tEtMc7AUDe5jxSYFAAmDRkcyaaCHhS7oBNPgMzK1RGYfae8B1NHaA3kum99MeLU3Kk2uwPon4JcSYszKVj9ZCjs",
  "key8": "2Uc45Mo8RRFHBuzpmR6sZUvsUVSsrCzSpU6bscAU9f36PshfcjKUf4FBN429wRT3adStSpJJ45BAdXwQXZRdWRyF",
  "key9": "3CUmCbbFG9DoyFNLmD8nUrW7QixYMTshrzx1aRwpge4AVQPHKKfBJUU9zeVN3TdTcEjes5wUrVU5KdYmE6sDynm",
  "key10": "3SPHSZV7bcX3x2EbN1HJNSdRByqdrEUuL4qfg3fCs8quScMedzqZ698kNDkgsGcWmvJBLRfwPRWsVuQomNv72vYP",
  "key11": "3s9rZUzvmu2kXdrWvJVAGZdpHhs3vJxWWe1mCxSX6RXiNAjoMQxv3sN6vqgnWfvHBoqBfzPiVHfXLXUcbVbbZRUN",
  "key12": "2tG1AsePgnQW1PrG4HvbfPfxxommJsMDbzud6zZ5bJyCKWdcqFs8LDSxVqNe83oazjpti5KaqehbnxgfqCfWvvXR",
  "key13": "3LcbfFR6RhQseGA8zXMdtNHXYSwQ9NCE7cMc4UBvKMsrUsf5VEiqtCSyCHn44BPNoWqsyKcmwV7FEuusZb53KKCa",
  "key14": "5NSv6A7edWY52SUHEVfkkQni5Q3qg8aE6YCYujeq67uasoYi2ks9xkV3neM84JtBb3DoPLPTmG8vFXdCwRrpNo81",
  "key15": "46aJkpqqDz7JtgZbpwZwetWiWwXCjQkJFMpFDfuhu1CZuYNhqVgmhzAr5WzVJF6xdwAarNJgZ4v17L8HmkrRsR4T",
  "key16": "65z3U2R9ZmygBrFLhUJqDTgetwqhet163w7gBzh4yxYvySLrMkeYxWc72NwK1y9R7FB2TLjApQrpLdk1A4tPfxBE",
  "key17": "g5WcDgAcsWfYQrNMTyChaWZ1jHyH72SeEDRg6gu22AzwSrD3ibJwmaCCrAcfgauLTJTP4X2xjcGgaabMMVaVJZv",
  "key18": "61K7FGgnwQjWiifeoxgRGfkzCgAJhVqKmG3q5uTCfafvxo4qSdstPYHxqZLCB9bZPSZm5etw5smahuFHfngH1tcT",
  "key19": "2gupmgf4Dq6PPHZxs2m5vLyx2PneZRupTUovV2dT8198AbHzQmN6vtXz31s8eC3ZjgLZF5yWMf4J385DW7RstHyn",
  "key20": "4D7RS9xji1HfvWY6o6HpYRXq32bsLSLiqu89xky28UkB9QWcgNsNL3nURJnKSqrAfNeYToidyCrf8P8pB5FvcFm5",
  "key21": "2rfpGHG5WwvypoyfT92dq6hDxBa5C7ayFpyr1wyY2LuZKpL5em6QkKuJC2YiFV8SjWrt6tMdLN2FctXGwhXBb42t",
  "key22": "vJDQ3yHaidWb9EAGzzw41N6y7nEMgdDvHXzc1BMPSUaWsEkKSwM7toZontpUwYMrJMspjKLqKfMppELLV1B9PBN",
  "key23": "2qFD6s9ziyQMVnnQ17UhszWxGzmQF4cDJisMkjhBoKB8KCEgyC7FEVvwajNKhdBLJET1cQE9CBReRDYbnBsj6bAm",
  "key24": "naME13PX454FmDsnuaUrx9d5FrN8H3uhMMgH3NkuM61WHiTcnmdxSKNHLfBoXyFo3MPCd3HYMtF6eF5xFwCbksN"
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
