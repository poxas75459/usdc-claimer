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
    "2z7oU1pBtL5P9RmWsHgNKnFaq1RngHgiZhrbendXt9geersMYMzUeokqEGWPBuMyub1FnD9b2ZX41MMq2x8xap1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SsNyPq5oqDebeS2ttefYNwJdbNB44jEFwZzdqibNMqyimADZCB4sPSC84inu49Tr26NASF5Gfve5b9viEow4rYM",
  "key1": "3dEhWPeWmThbwU72iro7KNUsvoHC6mz6RLDxSzH6whjkWMMJAhpW9RAqjks3ovy6zEqW3Bvre2DWkQehikkKKGML",
  "key2": "23SMEAJ1rS7GZzevfHShupFAS9rxM1Smqu39uyKC7o5svpxN4vooF6Xi6SZrPmKe7B2FbHskcmZnrKByZ7hXH8DB",
  "key3": "5T5moqaP7SByBWd94ffUNWXZdSKNSN2Xrr6LBA27UzGpV4PZbLKpGQ23txByaX6PwoSxoBGD7ecUPsUTRxwhmFgX",
  "key4": "2Qg3htUd8TpZHmXwTjsHGWqDCcMYo1MdRuy8oTwaGCWamHuepbaqYn5EY3pXuRwcECP9kPNvULmKUrUTM1iMcivu",
  "key5": "2Un5BJBLmxXjMF8mjWMBpvBHJUe1QYFyBkBVA3xYU9iZTTdjPYtd3BYczHTqMyEaWUZpYDBZcbdKxGXAmFjr8XLa",
  "key6": "3gUD77JMWPBZtZh9mtjWCWA5piqUSvryZPnu6PxMkX6ZDE7V5eRpbJGNUUvRR6ra5SkfBWuU4PeeXcbZvKRd6dmL",
  "key7": "3VE3uJxqhDp74MESSQrhEbL9MCrMnyWzaNs8EwgV5nxPKM5BMFer7tC6BTju2Ni8FEgR51GamUPXiuSUJe518pno",
  "key8": "3DYjQqo24j9T4cmyMfr5mNcJzX2KC2AXbQCxFx8WCBGX1TKWYREf7YbesMbJZRBFoxEPFipyCrErni6D31kUFSZf",
  "key9": "5C98u5MUhRi23iM8FWwz6fkZ46QPudUmtXKWAzQjRZNmX4Gy6a678S9ZKvoDpAadHLW1UveqMqpZ82xgVfDS8hEN",
  "key10": "2DUiqSAemAths5o7dsTZwyAp7a7i9zB6rpBszyGTH3QbgbRWwyC5bNGiUT9jkrFViqsK8HoYgEW2mCDczwkd6DKt",
  "key11": "3t4y2yYMWqUx8S97zM2GmaXbfahNAXvCpKzqZ8kimr8bZbHMwAyQUZ24wJWLLFPtS6qLd5z2hzxpMkB2CVrCdpuD",
  "key12": "58wV2p7qyYeAw8PyRZ6DRpzkLY7D9jbPk6wCtAF3cjUPYKP6bmyiE4N3RNUvwdSCV18at8TJ6eSUv6hk8BakDvVz",
  "key13": "Gjwoi33ZmGFBvwcdJrP1emWhqfXZX2KRccnv73cddbkY7Hr2DP2fdx9poV9XA1DkWrVirh2yqEz9sYm1epWQZbF",
  "key14": "2Y5F5YcXxZ3z4zjcwCXqLQKKrHP2eMDvXTer329jt9brQidvMmjzvLNmy1jJgk6GzfTXbGuZ4MVuWz45vkaucvHd",
  "key15": "21BFt8D85MRARQvKD9pjqVAiDYAR33GW9MgHang48zLyR6dkBYoRdtJgPaAnVVVvPBzC7ZaxjLzJXdPh4ohEgnPr",
  "key16": "58WJ8ujtvwQaKbigQBXTRG7HUkSYL2yszNADHtNB31xZFMnC9LZToWEGqY7deo3tfLSVgijZCba41QLKFbHmk3Qo",
  "key17": "5tdHbwxXjUYqjeJ59kAmfAqp52y7XPnSnscWFdsfebwMeJhKe6cRPQ26VpQh6n6PLrbeNyuyDEm7sQXb7pY3P1a",
  "key18": "nukimU6Nmws8n36LHTnzeGC25VSQrHLYwEbAACuuDLTPJdHEifBx59UhUVchN6iNLm3qWgbTks5yQKHVKuoPfqC",
  "key19": "2UdEbB49PcwQDMFnSyyEHkNdjWk4jeCfruvtiwhdfPFQPUeXGxfqUdgMoxaYg6bqhFuQ9pvtDUgBVyPbcAEU59cd",
  "key20": "2qCYcUnCYwfd7PC7GAdoFq8EJQf62uquxh8eGZUhjDUaKzzbhw3CA7ZFvFQTaLwVmywve3Y4Cj9VxMhXcm8qt85e",
  "key21": "5TFvUMD6y5JdW31msuEAiR7SD1DHgAwFXq81GCDEA9btJSoTba79n3osVM5AFjVT3kjzgszRf8vNhiM7hHvQDeu8",
  "key22": "5AN2VRqANzYvvdjtDKmsXAecEDXrpR5Mfvp4VY4A6pcNcdcJyt7KfyH2TQCcRAV4fgn9y93YTiXJ5ViXGsu786QS",
  "key23": "4mq5vrqBkaJEBHBzr1qSHzoEPHPk4qL8tYfcF6g5oUjZyzzNTcoJMsgDKqgRcvbBMUhrTUKv17DpxNgr4qmryhbZ",
  "key24": "56hPXDpLMsbTtiSAseGsNRFm7nj5D2mXnbC1dptzvLEmnxeuT9Q8pSvy22ZbTPk8t2fx9zMEtFK33Wcv9XVJBJRM",
  "key25": "3gMo1cnfdCFqpZKK445hmxS8fTpVeNynPBi8MsYEv5vhs5mEzhN7tAhGiDWg7jkNn5QXkv4ebe87QnEUVDo9XTqq",
  "key26": "EGXhJBmEJdJBuQ4FUp9G74Ea1dCBzrnJLt4RafFTSAUxVso89VM7xkQJtHdMZgGXx1Jpo3APKiPMDhbC5KuRTRv",
  "key27": "2msrMU6vdmxUFf7E8dBtGpQ57N2zfgvGUt6WQajUsw7ME4sFbWMpqKRYX3X84mKjABqLjehUbW7Tn22B9yrrRUqk",
  "key28": "4WCXkq4Ppn9xiKxXTvrHT7wooe9UTQhSWtNmH8UKDtdNf8LYkmcaLh2yhpYKw1FKdHy4yBMt2APd84qeWZyJzF8U",
  "key29": "4YzCKkjuXfobjQHyya1s9gtG1q3WyACm94CX4Gs2x2oKvdHN64cNfiMtrYUKCgJXA7CMtHADJj8EA13z4L1py57e",
  "key30": "27Q1u8Ef3BdbKaAbn58LrLANvNtyTNdzUdhL8VM13ue7NsYsh3qoRmqvNnsqtWbWh1aZRzyXhnLsKFxwMFyaehw3",
  "key31": "5FUtBEMzEYBjE3PGmmCHHVTA6RHbhdB5xdi3eJZeWcHmgLiUZk4anJDwyYAL51mZEUaozYfW3ut67YaUtVPt75V1",
  "key32": "WEiRr2ZwFM7WYLhegZ7gw6CQA66RCEZW4YFzof8Kn39d7RD7SLd8vaYtfpi53dcitzmBRR8bNdK98ECLsR7iDoK",
  "key33": "4UW2rCPyNqtQG7qmZQ5i2WtLzYc8TMKh1Gdv9HhXzpFVgmLM69QiEamX5vf1m5LUrLfjr4ygGfBVC5nPjRpmYEeo",
  "key34": "5YtTfEomRfAFD31W41uQSYKH8qVF2yuedkwiEDr4egkTNWJ1EBZjm8JJKxcJdoBAM1Mnn4sRVFDFp7PgW7Ge6YNG",
  "key35": "4mRdgWb9gPE4avKw3FsjbH6FZrM8TmAppQR2CFw9G7BGwaofddTMwpJoYnh5cFREVZd3zhb5LCcRjaz4PDMa2Krh",
  "key36": "4N79MASyfxhmk6J6aY7g4yeqBYvvWGfYgTFiaQimzcZvNcSbLELEbsQjghX4BdXJTUeg6dBnwYmN63FcJK3eSFk2",
  "key37": "2b93Ew3NqFpEkgTPiXk3kxX25twtyc62WGjjkoyz6itvuUA7qf3Bo2CQKvN8hMZBUB7D8T9jhHX7ZdJSD2J8NJYw",
  "key38": "5sHBf7CLTH7ZEU7r6pUeTyDzoRDCa1pLH9YT6ng9NciEcZizMT45nYWwnbW2iWkaTXRvUDYA6AYq88mGe6h15NhU",
  "key39": "2pQhJHPjfiLMNo3YoxYEkDnSxRznPg4qQFQ55LJNYx4opW1psh4XgpbnvC3sBfnGqLjXKxe2yzBua9tfYrdKp8jw"
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
