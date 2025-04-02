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
    "CVGsNsmArwSnjskkAckc2a8jimVEUGYsFtcYTE6aroGqXqJApNmiTCYMF1bEcuhvFaZpusUadY7KBp8WVVSRVbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uqHcyYnbtrUdd9XgHRj8jxXxeLG1BiLcwvVWwmRcHMRF7Gn6tALeprVC7DRh7c3Fz1BBXAbc6ZaRuGSFYnc9cGi",
  "key1": "64JGo2hhv9eXaVxCqe9RGHagessYUhntbHLdupB8aLWJPNQV8Xv9wDfvSymNaCYU1AFuvsXt2guZHE6J7atAEFc4",
  "key2": "4znSWENZvNHPDyAxmJscsNVat4LGZQXKii5Et9A8hHFSzGCbiZB6ZwyKfQint6XPuvH6EDC2E8pUFDoUbi3CnSYT",
  "key3": "zJPbH33ig5cyWsuinCuAaRyViceb7VkrBQm9twSDRjo1Hk7LbvHvC6MWebtBqabFfGNGWMbjqZR3SZ3ddDJ46aj",
  "key4": "2r1VYhrHnqBDkWddGbTRbDkXFfAV5U8FdDzaan4WPosa3f382HmeTpmZEqK8eYtriKQZk4yCpQdXUPVrX8PyFqtU",
  "key5": "54bSowWkQFwo9Z3F3uX7VVEyyFQ5tg4uU3htjGSzsm1RtsG6jUCLHZbtpy29rKM43zoiyiZYPLd2fYav1c6N28zy",
  "key6": "5xhuUkYbwcXPZMjFFYnaW4C8fd4smaL4MkfkQrC97wPXGAvL8W955TrwWRRstxZzMSUnNRX1rbMVtdkt63EkHchq",
  "key7": "4Z8U4KBjLXrzhXtTm8TB9vbMtWfHhMZcao6Twsd1aX4r4GKahSWscRm7DZPUxXjGUnuDqD3xNZDhFXE5ad1sAzLi",
  "key8": "d9yfUZcmhExv3CdEo1mdgroQ23zRf7zLDbMTX7p1dNXXSdHXs1daGTeK8gbx6ExtxHZJLSq9yP3sUhNL56oUBbY",
  "key9": "3a3nauU8YQErBEh3JhBsVFMh7GpyYrfFC4iFQS2jr6CucGHjzj1M6FBAqnKGk9R5CC1bX9kDzxKc6QuaN7dkpxcB",
  "key10": "3MpENWyFj6MkeEqYRowN1iyJYwYARRXGr4Kqz6CokEi53BDTn1tk215xdk6Dcs88LS8iuHXGThEMEESpoRkezcJ4",
  "key11": "31mH83dayb3xya4bFFFy2wdQt8p5j5Gm6vJH3nzonZ32uAss7GnoobjZFNivvSnjhA4uQaBhvwTLjBa7kbgthUUA",
  "key12": "3qZ9Jqq3ySwNPJgFmJFJxkk6a5UhRv4JCuQZYeqW3W1wpYSHVQjMiXWWA4zSeFVhR5MB6MGxNLDhiAzojmGrcYEd",
  "key13": "5KzB8WEpd9EFfiduuvjuqJQVXGigSm75JPFsV9UgZNPardMMrq2tSDhkpiQqn9fr6tWE2hbDcfWadQksfTSevoNP",
  "key14": "28DvaXGNykdyWcK6umcLziv2gFNC5dWgm4dfWS9UpLKEWodNTVD3DCWH13VV39CtsoLn4zmvVzabAkbfaPEctSCc",
  "key15": "4TpgrSJTTvpwjXd4WPYZ5gxEqsVaSzxF2R14uHmmTZyusnhmzwB2R7CbmLSyhkJzsEuag1Y41HWfYrgwfCaxRKLv",
  "key16": "3SCptysiyZkfbKVpoyxLB7WAGAbyRVKSgMyJZi5hV9u9znMySZYCrQ2JN42A3HJ4R41k9yTb43uV9d5RyERmJG8r",
  "key17": "4Bw67gnW7JpCrb2zmEoTVpQQkTiqpjjHHCDF1wpCGBcp9kF977RhHgjDhEGkF87DbCnEREgD9ASW3smkDe1JYzuA",
  "key18": "2MdwWjwDKsjJ81Uw7qxt625TpHGER31P2dYaRf4nZu3wUC3eTfbj2Rfk4CZZgGeasiLytnMDPBTBqjirWKfDrrBz",
  "key19": "5nPrGEkur1MedBFQjY1TJ11DcKs4LFJDq2dS9V87WAKCYBdRCvwrJ9KtFoSFX1HVVQN7m5AVMwNj6E2wxDLjJmWU",
  "key20": "jgHLkRCvbnvdgSn9PwbhVcXrLrYFkMqavoNmeuEXHjWK4Ni4muEXwGAwmn1sccXewxgCZyV8gbXKjngtDQtSL7L",
  "key21": "5CvK2M94sz1Tb6VwJGYX8NXVWiMcz2GbmzgKt4paAE3pAAgnbxaNa4G6EA5TEc7yaETjnj47cY2BWewd7DudzYh",
  "key22": "36ZtSBNNUE9NrJzAGizzfmhP77nDXaoSwz4GnJgd81axdwdYWFjf8SGSdU1pwuXZXRDLw3NnkkgipVJ5qnoS1HYe",
  "key23": "4ika2uuDVFjR72Jz1zMuN5rL19d35xzsep58B1fBxrbLcv72QuZvNwbR69cFZGa4AZG4fs1EocJRWLvKgc9quUqd",
  "key24": "pwR5F7bqAC4VU4gRN5eVqYGw4JqhKR5zqWF7Gxfkkey9cJdzY9mArFe1ykMnUJXZYjMYjn1DeY8VyjDZQg6N76f",
  "key25": "43WTfJSyCkUFDChmBGzuvicHnSxiM38ZHjv2tpH9A4ZsPo4ACX1pH4dx5N3nfdjsxNNUcjueRag2KoSEhK4tDrPX",
  "key26": "4cxUXqu6kkwT5iDzU26M1dwQexu93o9Yu7cC6gXybtHmWBxsgCDyHfTvQ5yLfvrcwDMH3bXEAtcggew9C8otsbnZ",
  "key27": "5DwjZKfxNpRt9wimsBNP9mFCxCNSP1XLLtvadQBVfaqzj147eiQ36syP5dCHjnDtmGME8do5DTD6A1T81wEwJGQs",
  "key28": "2oEsbNrfAoxeyfxdnEtULFntZEAJENB8Mne3e647niKjQyruzoGq2fEA3KxssBRyX8fHSSUD5TsV8xjbVQ6sfxAx",
  "key29": "3G3ek6CQBPciDREVKRUJtidAHPBzkdqJSjTeNnSTj9Lje6zixttvmc9j8EdwX2BKBgb6xTeoCuRuJ9DbcfqsGznV",
  "key30": "5baxNChHsvXa5QRJypxfHLiSpBDSygwoQeKnysFc37rgwVBPyyfaYcGX5cFNCT5XButPfhLNr91p7TrEEnHC9UKX",
  "key31": "2orJzYnt12nf6Bu9xWfmgw6x1ko1QvNWLUvf15tPvS9ctymMDQZ7hJvVs3nMe7jE2xYUgVSkrxYRqsW8mh9sgVYo",
  "key32": "3NWqpwWpLjZiYjuPHWhStCozDH13mypRTftdKkiYhqokJJVmfSL44FRHY5c3xRj528iDDoqPhx1X7d2qXKwJEdXG",
  "key33": "LKDo4kaigrPeKcgt7BjPFXV5dqjt6v5iWLs1BEqhNcXcKhEW2LGmNskMgoTPR44KVCscKSG4CmzCHzBEBUftJKC",
  "key34": "KTuoh4gasCpArJmXquetYnbfzzNRrnNsZuCXuRhsB5SF8bYSZEYTErjsYontbusX9aryENoPF8jH5hLiUgBFWCy",
  "key35": "3cfzGvrLHS1t3SpByKnkoDRhkdN63aJJdtw6zCmX1hFsTVEEh9hUSctGuoAZAgnLxjSTAZ5E7TzoVoiwdALajp1X",
  "key36": "2jrXt4bcmRURVbipCcBc2VX528YnTfSYBVjZTEboY91Df7VR6vf9WeKWLVJKyjhmH9bMQCT9yyZo8Xdba1cTKGiP",
  "key37": "5J9rF7ysknHyyCcZgdhFK9h9B2rKsqwyX3v39GqpLBPi4KhKEhYT37pcV8KDdtaGkZvAwMPQvxktyZaraCiMZSCf",
  "key38": "3MM72Eerciqi4HzU4SxLRQVNZLWVmzMrLj3v9G4c3kgs6Q9w4ru3iEmjdC9SxQNCRF6KYLrvYmk8GjrXbiJNRBnj",
  "key39": "24ConugqnBN4MMpUU1KwThZ3g9ubkcXEqozsSX76M3nyuSyKa2f8r3MvawQtHQvNcQpcsNkTUVKd87RAL2bBPpbi",
  "key40": "3V1MNy2nAniSF2dwhA1o1RbCS4pyB9yjjSCN6DsDAgckJCsp5WE9SFAzvM6egCDhgg8BM6iyPRJcaHvJSmAU4JBM",
  "key41": "3Yamzw73xnA2vzUHgY7ykv8nMALy5VbLETxkfVdN7NYZbGhws7stUk6PJPLKLrDCJnTjXbUNeMvfipkoH2AxBd8n",
  "key42": "3aYSgHqBtUggsy67R2emn8T82JeJoDNiDNsouCCYHgsvooegQwuJRqn84qaJHtU5ab2sM5iVveQNRTZ54Qyhuvq8",
  "key43": "2kZNDt3G9NrueFF1ZA2ToCNCDSY5UN8196ENZiVqFQALU8VHtqJPWYdKva9r9HhKvJRctV1dnGWSKGMDHbgYxnpQ",
  "key44": "67Pp2nypwr51ANNnnEYLiBQK3k8LL74YzJM3m2ZSBSsxdEHTsNpDn96ZBFTVJ75aSfGtNyECeEBdoq11i4UMVovp",
  "key45": "4m9pMchPTjDyjEtthoCM3bb7V8SPEVYppG53cBDT9wgxH4tMQKfixgcCoJE5LwxeQFCEMxKPZ82eD2tvsddCRkT9"
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
