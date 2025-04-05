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
    "3MTw9RbvboVWAyHVKL4U4wnjS5SkUBWytABxCN5TcyLi3jVSiGuw1kBTKidXhrA6J7GuyHMmMjmbyZTwc6UrZZ6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sBJiiU987qiaRf9QgGwVDbSbADdL8QY5Pmq13Jg8aafTfgSGwFXUYTW8vqnBQLUpgCfr9qddteiyHrPbtpkU3Mz",
  "key1": "5AQLX4yt1Zxvn7Xq1fJvAVHLjfKTBiGdvGvcJJXagNPsqg7MmJNKMcNKHaptY7q1kqdcUWaFExickDk26TDWxhoW",
  "key2": "3zdzm9s4pqocjzH83UEmyapnUnNn14hGj5Cvmbf3tPM1zJxwWNwztG4FhjHTsozdWAMApX2fm4mHLRSCXHhVBgTd",
  "key3": "W6AxaTFegYdC3ziuL2XgXArVPVN6smocGEDkWUsXXZMnQSZyvnxkDUR5wju8476icrbFByRukH3PQ5co1B7FsBq",
  "key4": "tVLeg4nBd6Y1fxiubf7LcijxewxFMUXyjoMTVCeRDcjo6ZShGeU4297gusYg4j79u5BDgxe2DDcKaQp1SAZ6FTb",
  "key5": "4A96uTG2xgJWKCWoVnG23xyzMjpDdpj1ZQftsPwtDJ6utdQ9n2NE5ZL4dDebkH7JJcsjJPqTvpizzXGPsXy5vkVF",
  "key6": "3FayGHZdXtEnBcgWh8i9bhwypV5YAyPpmLiGQvm6KJWJjCzX1sVy7E16icXGyB8mxwWYDu4sA5Zhqn1v8SJe5SYv",
  "key7": "2ZqZRGP7WDXYu4k6YeWNmaD8vJrHqbWGw8gkLq9vMdDNBAHRst4qkY9HmAjPr5rYiMZgjpDiPpxGSjjGRsZSGVCA",
  "key8": "3vMbfhu9a3rUBPApeJuPxhztCAPxkSHTNhX6YaQxBdJU3aCiATPnpTY6Bis7gLiiGdbMCrTa2hRNDq8uL5kNJGyf",
  "key9": "A7q2vHsy87dw9RqNvLgUvMxWC2AgX2xTkKvLtGFCpb4GTNu8KWhxDfX2n7jTtMJGse79Ks9CrzRwGLMCZWgb4PL",
  "key10": "FNq6JfvZT3mFWiKi8XNGbCmfhV586cEStEY2enbQT3qCa7MDqTPvG4C8CqEoADvfximwoCQM7wwpDKNCKafuqGQ",
  "key11": "4mBcFzfZ2z4de7M3Sk2xM4jmUDAnpAxvjY5bWh73Vv5bYXVAmUWRvbLysTLgftwR54h7rT6a1pRWnkQSD8Hu3tAv",
  "key12": "2wub7WcyQ58F2EJAGY83s8UgXnmncJU9As1vueDeDPs9Nh136QVT9h9DBvHHin2QbyVvBSjJ1koWEqDM4SDwojcR",
  "key13": "2YhikpEkE8Xaosw6DqDAbjcmmRHLs1vG5rp6TmEjYNxVadAhodhtGMhJvTTq9RoDJuqH3JNocyBJo8QQvJH2dhQk",
  "key14": "2jerWXEcJQJCet93A8gzzdfyokFa4UBCD7LcfNbBrdx6zz1m3NvEXkKjysNThcFJJQXc9L7w214tDwck3qwZjqjs",
  "key15": "5rbspkdRv7ZzJ4NV8oVpiaaxHnnMkvYK43DZWhumL6PFCfA4Uibb63H4KKxDjN64wp9p5PZjgA83z42Sdy3SH9Z5",
  "key16": "4qqQSpvJw2d8MF2FJFWepvahv3aTBGdHmGqDi34eJWV7rqUnq4FJdGJdAbgAUesKS4BV9SZ6ZtPKC4mG9vcYrFfg",
  "key17": "5pMfgtffCaMgsadqqKtMP5sWjCAbRva7WJpNgApue7tKuHczNsU3Dr5qgY3ajRk84wq41uE7PokWEJqTpB4hEwvb",
  "key18": "2bp7cEj2KQW9p8jPGrwfBEL66tRoCG6Ffhx7VkhW7QQYkM7Q2K2msred36TpGbkb2zb9iqW69m8r18WkMi2jDoRL",
  "key19": "4xqQyJd49SaLyugfUFmhD6j76o6PJJg3zseCiZJtFQQD1GT38jjB9osr52PS2tdK63XrBcW9wC4FPnkYqV7x1iRV",
  "key20": "2F5RKPKLfgDtLox5RVzm6DQ6cs5saeDeZH1cbqWjkzsP56d7HGzhnii8AvVXsyECbjdcfH4CH6o7uqA6KBk1Aj1M",
  "key21": "39vHEy5tVH1SbNAEega4Aeman823G5d6xajrDBBiMJpUBWPQ5bmVKvkp81i7daDgfcPQyRjsc1xibRyqjU7ucCVJ",
  "key22": "x9Chw9ADrCXRUd7NrwNPwSSF7WBMC1vaZ7w1McdasYV3nxxetrXQnKvP7tYbwAv84dHLnYq9bmv8cfK5aXMVtyR",
  "key23": "4jBR5aghPDtWH24BG46wpUaoXx6kWhVspyYu21KzZi1X67JVrxFQrnEeRGaPwEFtEzaRNoqsmg6GGw8NF2k4dKi6",
  "key24": "4P2keWKM2BLy91FFxRuYsb8zj7QhbJmPRZz8TkQhzKeXSGh3TM5HQpDPitxkYv35k38sPN3JyZfC68oAMW9bnKvz",
  "key25": "Gpghh1Mzy5CPHssHkeDdP14QZpoXRa37Rr7RvnbyLmD9RvSWC9oLdVJojeYAKovA6FLtG8NNpxva3PPkvs3p7wL",
  "key26": "27kqP47iDgBot1CGcZ66AMmtp54kUq9o2NcU8DbWHSwqyhxfAtQToUjSsT7GmmJJEbpNiwbdCop3bM66LhXmPp2h",
  "key27": "wRR7RB4jrQczhyDfccPudyZMQBc5agtpE53NK7FdTEtqBPukb8gppRQadBiY98WuEQUjh9r5uGTcm86hGYSr1Pe",
  "key28": "Av89PS7EJakSh7319gt6CUz1Gh4UuEx79feLTPKpVknBsrsgzS9865JvZFzfsSmfYqmp7EUGXVLD5dMWnJQs6fN",
  "key29": "wxZAMjc6MYEQ5Mwtgx4Y5AkPmm2gAhADuQKkjtb5pQ6BtPpF8Qgtj1WijytJLPRwsLMbBxm61Lq96V8MM6AJTeJ",
  "key30": "43s1iuG4ytyiPpa5WNWt9ZhipdJBffAT217d94Zayxfi3TZ3gftjfNMniF4nnmcVbVousXSMHGmL4NoTrPPAuFHG",
  "key31": "3WWHkS3Txmwz7FGHcAXeeLCoNiKamk4uoTTxABEEQA8XPxRYme7RW6Ep2JQhZT4k6iZ4yQAor8b3Zt2H8jmzfwK8",
  "key32": "5HcyVYs2x36pPFoDGcpN7DCmZ763aeJXdxXcMGveCQ4DxsEDLC6ff7orcYnLU1u9NfM7qkWC6PHDDev6yaHGY6eA",
  "key33": "5AfzitdNhZrksmtuB7d8YEDSU1PLkGcYJw4SnbL1hNNLZsQZ9oe7XtkbCbT4XfTw3Xxe8NoHPDYveSABj6jaL6Ha",
  "key34": "eCz9gFe2MZrtxwFLu14T4geK8U53LnfSMSq3ZJz5K23kmFwdgmgepgVpqSNh1nFS378wVeQJc3MSS3vAvFp94T3",
  "key35": "JXfJTMxftEFTQHsPzJeTPuBeRV8ynEC8fXf3wyF3UMN5t6XCCbfsTpQmzY9f6PPmeukKioSEDvVbrrttVeMVP8p",
  "key36": "3VzKK9nR1rUF7RWG3yUUD8RDAqYHnc5GK3qrZU42y9DMJ4zTNWEvEyHMGBtZkz21u5Y7fNWpZ5FMnbYjGUYUTxB",
  "key37": "2qpU514H8L7R64AqN2H1ERxi11jxLM7zw8LxmTgRJMqq3ZJofWSB664uDKdqpgAtuZowBUVRjGs8DM1GgCPhtceK",
  "key38": "3Doi4S5YQruGtcgQeTPfdG94zdUgoTNxxKvnZk1CGRqT39dQxmo1nzFLnVENxZovy8Kkps3YWFoeXj1RaYksU4m4",
  "key39": "2rYQJygV9z11ME2N3N7FMD79574tDAMSHkeFE68aeE5WmkMnTuFc4VoNz9MppbfZ7WMgMTi6VyN3ePTNRDiP7LQe",
  "key40": "3mys2J9acmJVuCNdp83CegyRm8gmNoyjpF1KmsbRU6byQJ553U7BhfAhviJThfahGJcaTNvGSbb1URYiEdXcsPTE",
  "key41": "4h9cGhMacPrCpNous8BdNGcK2JBqnFoSB6aq1s9SYfZVt1xEtc6kfTpzcEeeoFMZVpzuD55AXpLbzYSjbjdwyRVi",
  "key42": "2tXhRTGkpJ6rXVMSDDA7mbbq245HuUYNH9hXjohC6uqT7c8RNMP6Gn4D77DCcWjVJRrt47XMPcc3qFbDcMUzRruD",
  "key43": "46iL6jtz22eVPHmx9Q6ZrqXqdefYTdhGVC983A7g67mexLs3bcnQFiA51BTxSPz4CodnGsBmW8Hcq82Yikz9pJDi",
  "key44": "24XR2VVdcMrxx972SejDdV5ik5pyXdWKqZjbAkCmog9R9UrbXQiZQTLrrJd3WprmczHMGCHn9cpdwkJLjcNnMihC",
  "key45": "4tbWQKoSKAmfvA9WKnZr67ZXpnj93tHCNZVwiwmPeFrnLyTdr1sJef97XFEe1wgjMvhCzwBBNkfWCjmEzr5dVi9C",
  "key46": "4eWvrWtiEereHZBRgaU48TeQz8gtZDgZMx6pdKRp5d1np3JpTnZ2zHKQexZG9DEXQGzfMZR1sAEYBmzi4UDUzDwD",
  "key47": "33WRX1aKDXHcNGNTRHEGPxWmMYZE6Lr7QHJRSxsxWBN1ovauyAw9NWXRevxE1n7Ps9jnGibyWCrmqfHRvo8imP7H",
  "key48": "5n9ySu4oBr88rdUrcKN4cXCWike5c155nfkgVtFmbfiWA8K9ErttihukzgJ3Do3WVVeswL5qjgBF71Zu4vFW6nBr",
  "key49": "3BmQT3MM2NPdzcysffGu3fBhkvYG2uzB56c6owoQQVMxcLzMmSdJzhF3TQVzThjFwgEYVAnfAMy6LUrwnsNcnx2C"
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
