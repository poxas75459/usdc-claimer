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
    "4irprJSWQpfaAFdpp2woEpjcGVis5ciPiSZh83qTw9TToChGKLVr7aWQycnJb3hA8vtMnHX4D9FZNBYb91cTAm7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bbka6NwVKtca2CnKT23T61DDZ6XZrJcUm5bd8m5AL1HyTSdxNEaDSYba2hq3a5LQbcSn3En46HS1gRgWbgtat2m",
  "key1": "46XRfUY4PgnWXoqs8fZKuEzvzfn7nLFiNFHia83wQVR9w9YXpNVfNtpQvUWvhqao3Yy6Mwi6hevAJoaPadWvpPGR",
  "key2": "5HrMP8NmMAvdzV4w6wvufzwg5bwXjNha9YABpSTz111nnEwpSVyd6qtjwodXSkBaNe1LEb9S8K1o5NacjhK6vuXA",
  "key3": "3jrSQm1assTLSX61wW9Midh8AdTWZVVkycmXiDtFmhYj9GZHEgLWyQCgPY1ALWaFR2SUXpf2CviPgFegdnTpUbDc",
  "key4": "3P3pyRPnT6yEwCJCfodhsPMRYLvtEUeZ9e14s1Bx3F6kyNeYsEWev1ezjgkuHhTQea9cDRUMYvJt1AhSfTcogz23",
  "key5": "2Y828gkT4Ty8HfXuwvmgMQdk1KHbgYvTMv6oDRwJXQLQ5BvpwryhZpZwpsbF2E8CqfwYXXEWaK7yZE2jsY7CkfZR",
  "key6": "3iZu6qJnyYhVbszBv3wMLmpchf45HkZPmPRWES5RHNGPGXZuPgvWzQzmeNb6u8V15LnCHMTEzMPEE2y5JoDQAQLv",
  "key7": "4cqoUfPReBYbSPhqaSMqi1vtUjwaLm9BptwkKLoEgecpb6u5YBNdXP1SKRCuEtc3A5wsfyuACsj8PENWaCChskWj",
  "key8": "4WXB9roavjTs2He89dT2RUXdbtnKDqQFpKVDFz4AYGVingsMwcyKccNwciQ8wcQSRNCehjxpHGEVV9YrMhp5m7vU",
  "key9": "5NjzKvBbZVEWC6gUfYPvhqgG5AnZWMpEBCBJvt4yqTsH81SJ5xV1Y59Wadtfd4SCdQe7myY59qpPnxWuQwCqD4wt",
  "key10": "2mqSpoAEhBCqkSaotbWc2gop6smGVjgfGS5Uvn2R84i6rgoPfhafqoXvtrPsnoetNmrdLLPj1tGwVNA3knPcS1jg",
  "key11": "3gLm6fKcei3BmFZtor5PcFit3bJgQ5WZ5TgcmMbjQHHom2ZYZH1byZq3BudPiatoLpLa379SveaGcVNFroHbkfKf",
  "key12": "3WHcvZ6eG1uKj2si8uBuGi6T4NjzBZwzgWmYWx6PtkTtZt2w4ZiJ6VoVuUU1AsmEgNJSBhdddPvjWTQyeyYeitg9",
  "key13": "syekigseLcbWR2jFsPW8PCqD1rAhSUD2FZAAMAyqwjeFp8z7maf7sJbkN57LffshE6gPQh6A8CDgfjiNNcb6vBu",
  "key14": "2RNmsK1XVwPwvMd4DPbg62PLJNGNAFYaV2jZkHQbjyYa7q4be3XsVBEF9cEGYPTQowbAWSkXJkxPmyzrEwMwpfLr",
  "key15": "2ZvQdN8JwSaUk3kHSQWfCe6PejhpiWBZmAwrdT5aZDEkTzB4f8WLSccmfms7cYNLD3f8Neg72W2SW5jM3qj7bNwD",
  "key16": "2mdNdWrrTv6n2X5dh9XSnEMSRxnFcspo1iEQEn3wAQixEd4rF6gN7nxJ3MqJF5nMXosJkHFTrhdr4D4nannUbq99",
  "key17": "4TB8TF3CHcWnVHarbzMktWoPSbpa6w8sKz71SCFgqhj7aiyyx9H3iwtJuCoY1iL9937X6XMxvKaASVxXjcso7beK",
  "key18": "2y5ez3ND68Ef1LzqCJLWAyj4S4hBnd4KkRQM8CswUgABiWsf4VFGMNXgyn4m6qQGxwdJAeSjv3Jxw5SQ8mZhDoGz",
  "key19": "BA7H9Zr6dfpG46RvPNiVmGt2bMQzmHoPcFQWmwDCoXZ2uaLsdGHpWtLSy6C5ihYKuCAbzpBhh1D7NJjigywKjag",
  "key20": "2fe2BdzLmvHBJHLW8UGS37cbNcsfUeHMS85pGEYuoM2ag4d9rnvgyyr1ci2jvsKSEW3nnF9poUq1CsEM3beZPSD6",
  "key21": "3L1tMpNaTPWEEhDL4qKXFiVKYBQsTafjwo7wLEUpCWrJY41SqaKs7m2UWeNnqSAEUqByMaVzq9emThAznMsx2Wia",
  "key22": "4iSz7JvxG4d2te9regAZ97SeXg12eP5V4rGDCtKwDXQBedM4rC7dASXHWHpgBZTxEjVMgp5Xb1gszqKF4Gpt6bwq",
  "key23": "4bE4Hu5WpbJn15SDt4PLV1afKQqmnijkUTti8E2ek5aiAFwnYSikUDezPs2Ub4waBfVwLMQbB7naMrTzHKRfejMX",
  "key24": "4QBdEbX8jgXxgFRDhvPPahWgTF2HJ7wb2SFf8s6h6ETTEtRSYaHMH51kWbRLPev2Cxf64WDa2HXdpDSwaTfVx6KZ"
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
