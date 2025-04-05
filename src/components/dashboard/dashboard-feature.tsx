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
    "5J9VeXi7ouDUgBhpf8oyakKGEVxoX2Mm79cLeQGBectmW81cCqpzndUhXyydzouEeN84jwi2D9xCjjWemLvJ3TwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yYs8gSzwM56RGXt3wzixiUfnWo6vxToMuYXw4mrL6Z2UNK1W5DZuzzt17Pi6GhE1TAKx4msx3hgzeU6NgdKAPb5",
  "key1": "3tJLdAZGTwps2sW4YgYRejtZnvqpziZ2Vrn5vd6xPwR78HwTSSjnWkF29verRiQGqpjk81v4a7aNngkSVRpjvqyN",
  "key2": "58EYfysQhv62RL5kzFXxyzFqVh5wF4J6gVqd6e2NtvcUUaQowNbCXfeEnBtcDsLiaF1fJxp5YhMNmxZCAErVgAKs",
  "key3": "Sd66XpzH9MoeCFExgBvArHAjUVrWmS6kpPoxbnQyFtypSy91EbeopijfDhnziU2Tyb2zuVVfByGN7TjggZC1uyC",
  "key4": "55adnpak85Jy6o5eL1MQ1nhc1uAtpstXmVygy1PofzcxkMbciH6MEss6EMn2A8wWfB7y6AwraGn2xAPXKvTkzyu2",
  "key5": "4sCu5oTgYsDEWmXhRPzhJW7sBu9HiWENxEF6nDMHcFK8fq2aWsezxQwaUqcUjVNGnEh972DCtKCab2pUtta5R4wg",
  "key6": "2DfmEMv8A1hMPmgTxcdH1Qd2nWHD4K2eyeBuFMRdiu2WiKkS4kn4i5hkPx5sWZ9CSuw47NVaLmpjdZDkGB64McvW",
  "key7": "3MykfsDjDyTQBbB6Nci6grPkkDEkkUGZ8gvGvRRsfRqXCAwxowjcJ1XN9bqTASxL4CCpKgQdwfhoYH27cEKcpU3u",
  "key8": "5w27qvzWBYDzweiBktgVU7bTdL6SKF548zt2MMbjn2gphdSSLgrzfZLvV6u7pmXWs7ScNkV2dRjKcLJofgzuW5Xh",
  "key9": "2Scjh2YJ32gJYxxYQGt1GCRNWTGBiUTXVsBqbT8xQAUcSWxHGpdZvos8t2RhoYbw8W6HMGCAmTX3JFNxceHjncy5",
  "key10": "3DcW8mZWXmhiX6Ts9Yps2dAU7PdZ5zbgNZAsKq9UaMkiZe9TC7djpAgUmJfnSE1AzWVXMKCiH3VBFJkWrRJsbcQU",
  "key11": "4guwHXn6UNTrE3sANoyprPRwQjnZEyHMHYbdN2zG5dqs8qncqqLczT4eHWDAcyDAzYNFAt7j3U7LNra8pLtajoFY",
  "key12": "2ehwhawiRbYNmkWKwaoJDrS4Nb6T7f8QaBQfN4C6gaE8iUemycm5uhdPjn4CoSmAJPSFgyVuEN7eLtWnPyiVAiL2",
  "key13": "3WFEEL7B8jH6EK2iFTmPXtNWYNLSeAgPxZWnksTFmWfufpdMkMJE2zfPSfQKivZtshJFb7C49BGNJGf8zxiuDNQe",
  "key14": "2qDQCSf2qM3jujgqiZdQBqjhpiRfCReggo15Axgs279RJ4Sgdz77QZB4EXeT2cAZLkrB7xrKBzdQNZDDJ8WFW3Wv",
  "key15": "5sNQwfnuexb4Vv757oaiWBce42EtvbtKPgRhjy2Lu6K3RFRQPHjWCJekZQ9jX4N9yEQaYQKtbALei8MeTC1XPyni",
  "key16": "4xUKSxEdHH9KHkm2AexMRFFaZUAE1mXfA1QgWeqDgwk8ffdyxg6NNm1djwbzCziFt2X4nw62xttdEsavWLRmLLrw",
  "key17": "CyZ9JF99mHMzxJ5ThgcNhgAmfkaLS5feue5mBw1eab31d2GxnfTL3NNuxGX6TXGBqimeimzLN1Lp2E96v3VUpKo",
  "key18": "51MQDHRmgNRqqpHApx5yRLtZ5DchSLjE4UbM6hj4rFoQmvej2cfDFviinxC9Zw9Nq77Vn7KqYvsYA1gVVCAkG48U",
  "key19": "Ca7HF5cktjueZuoUEPdWDUuMLURPk9k5oFSy1ryWQ6mp4FkTASw1pt3jzdAceRC8p2vPxxUUMEdxZuNeMQNKway",
  "key20": "4vT3U6sWeFjZ1oigPmCsKJF6BygSZbPUjppAk8mE8QFq88pe4mYSyouDH4TcusRgmyqLezGyyU72FWZ1HoMjwCgD",
  "key21": "64gpv59MLKkmq9scMWo9VrpkZjuxhie3pJQW4zFKV9LbMVfpwqSP2CjT8BvqjJ9dH91WhkUZYoedmQx888tpviSC",
  "key22": "5Q8feeCazSKZP8yiHw824NktaR3xAjpvVE25zJNWvwuFqyN8ncUFkGEU1UTGSPbVo8DPKMUbXWAiCBx72pxpyseg",
  "key23": "2zo2nDKwwRJvyDhCRup1G4G9T1vPTfiGgsrs7hvC181Pj3HaYZ5UtLk2mhBZphcEMWFnQasWhqRpTk7JMuBzy8oT",
  "key24": "4RiRPQoU4iZrXpTQ6Ua2j81kA8hVeFNfFN7iJEnXna5dmBVYkVyuVTH7u4KFoyvxAf356FHxzYnkYx916qyHBDxv",
  "key25": "3nysMut8c5pFCjmXKhfJGzA2mFptiD9Wjasas3wGGpi6Yv3ea5QxEnkNxfsASDsL23bHaeFreQdVocWyKvzRemfj",
  "key26": "fQWEGmSKJxvM6TUBdmKNZWs4cvg1pFpYTYLTZkfNFaxRudZCVWySfFHqq4Ac9z8aoAENgq8LkmDuf1dxEKpQ8g1",
  "key27": "339ty5qNtkJgSzEoq9RYiZRYvKzf2RqeNBdtgHgoKb3xETKqBaTv7zeYSy5boy97MctJzizdaAYFj1ePm5mDkqb6",
  "key28": "3gfw75GFRdGZnroRWpouufDeEASeySjqYCayko3U5sWnCs614LZJaHvHQnx8rpuBs6ke86i89E6NKPx9YdycrTXt",
  "key29": "2iKc4A5Ce366AGnSjBUUePDtQf7fBNuzYy59ZMYyJNxcAJGQtgc933xX9JqfcowY4TEcCu27ybkBWcdhJVgjd5kc",
  "key30": "32u1GsZB946BueiwjAC8SDjVUoukeEs7JsMrbXhvxBEB1GGBo6oqxWBgPitKWPAUcEHAY1rNhR7Ny8MGFGiMtmue",
  "key31": "38KZPCv5sQSDpdpWRkCFb58rqqNGzbXnEhSrJ3LKmNz38remyfxqdeGw7Vz8CjqtvTvKnDbXwXCs1mpa9a3ZwSgQ",
  "key32": "4gdHvDaUQp4dPJgbnAR3FsZB6wrbkFWF4Z4dCGivujP9NvuRkM35UZmhXJVhruJn5rpRDGE6eVuZT3XhF9UrVk8",
  "key33": "2PJfpn3vog5Z8i4CoaHcC88bBkK9TxCyETiD7ygDYWSKaSBwrmZwn6eSJmrW64qD5LzUFYF1o6gSrrhAXEBrMHcW",
  "key34": "49F5YjqSdEwUMEXGTK17BHvRJZy5F3x2afj24XVTmxpnMJoL4A9crMVHGx4kwMZjJT6rdbCoqMXuMV1razWaj4v5",
  "key35": "4wjxmhWBswUPBCpgo6UaqA3KNwVqPw8U6SXTAzhGD6yNcZqHv39kjGsun2LpQodaUymFbjFQ9yjuTrq9QYnzVm3N",
  "key36": "iPUUH147X3khPaFsbPpQwsaWJvUfh5EtrnLydmrTn7aifLtzW2nYbEKypiuUgQ5yQRqUixqRa7PYLPvjUFKnVWY",
  "key37": "2xtvEhsHX3HP9tW5SSrcziNZJjK41tx85ynJoFocn3KNMU3Z4esuAowcE14d9qRGMbzf9Bfv1WbkYjfsFMYzz9oD",
  "key38": "2MB4qLciZsf7oYjGdt6gixooSrZwkhAKXZ6ggHcVhbE887GXz2EeBtxk75sbwZvJtikLZLMgy2buMsviZhB2whmV"
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
