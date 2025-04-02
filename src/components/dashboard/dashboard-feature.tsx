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
    "2ADqWWyAuUFsRSphH6iBCgWKerS6FDRC6rcCv23FtN7pmyC6khXZeTxY3pQsc7ftE13yWwJPYU7mFEWPsPfZ3G4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jp5WGW5YGpbuoFusCZft1uyc2yNMRLC4nALTaLBnTdd66EknvgrcXivEqdmTrW6yV9UJVcntgf1A4YXoS86mXs2",
  "key1": "qWT3sTQKE29nvjBpptYAtFqHhMEp8E8cmJs1P82azvbGJZ5itycLc6Jtqii76Gu54keL8dhzaqSSX3zbqXoAu7X",
  "key2": "3rsNNDLiJc2GFj7MT3Wtia6mj5r9cLBTWYbR8Vh39kEGdGm4YKKVa7MaMSXGANeVT7xAJELL4ZyFacb9vvK1fSxQ",
  "key3": "yufQGoKsWT2tGY369fPU58WLb38boZE8p91a6gM1ASnX9XtKoSsJdVAxYs8o8XkLiinbWCjBuLRh3gyZ9ygAwQC",
  "key4": "DYEX8j9nfDYTPeJJgsKmyaLvWnU8YLzzuo3Eyw1gMUvb58aHHP2nnj731AABGdNkhRSpV8UGiNejjhjxQQGPUVR",
  "key5": "Wh1qbkjADECeemY89HEvz2jhsFUVAmBhFEXs4X9m7wasvpJNH7uqRD48wQMBci9Es79UqPizgG8kRMUXeZ8iUY9",
  "key6": "2aBVBjC2LcKeT6tBf7dGiRsqqhFFimfiT5ofCrMbxFzB68tKBms7R5maA2bYRogq8zYeDiT7jDKq5ygE3nhA2Pbu",
  "key7": "vt4BgwytBsqAqAu6aThhQJpsvvBRK22XzBwfBZ2QYHo5cFtg6KMvs89L6gWjcfLyfQvfDqFQU39gt7gwneNJStE",
  "key8": "5kEy2u2L1oVePanfyeQA2dp144eE8jiXgiLBciqgtMnDRfTPE55J74HFnMBNmHPQHjn2mHLATSeCPByDia2xVGfn",
  "key9": "AEuzbE2Jt4hUHXbJFAP5a4Lzgmdg3hMgJ8R4Dod8b8LxprFqfzwKvg9gfsbwCHKJ7aB98feTbSPZrL1t2MguiQJ",
  "key10": "5BMadTGgsE3DGVqDjiUsE5CbNRozkLqBWySpQZwGxzfjFMoTrjEVR644YEe8gFvgLqj6TzZGc47Go3kAPHnsDKhj",
  "key11": "2Ca61vYdx8hgmkrBKJu3kfqFiubUeDQiQxV1pQ9SHdcJJ4vxkv6vHcJmta7UtsXfDoUZxDoWtJriiVm87adNXtC2",
  "key12": "kLGjhgrruejeewAX3NAuz9D5RvzPVoD2ExHchRLitBCFrA7vjo8rx52Fg1TDyCAxUKFKNYVmRYonWsDsEaybThH",
  "key13": "2wmZiKufNXAAFtBwQ3ZNhTZAkhyXATxABtMgtV5JoRd1pUL2bZk34ZYEoebGjctKdbphN8ZTQG8eqry66r7rN6SQ",
  "key14": "Ek6GkTb2FDEpV8mE4CdzhvdksrGst9GD1NSFzjBdEBTUauRidiGwe1zaCvR4LVgvEUDt2PqLvur8vgGMjHZoFNe",
  "key15": "rytZf5XdJ9sRPcBrTHeYYeuHB2Wzk8s9GL8qBqjvwjFWAhdjL7eKnoCmERdJMpi3zW45AX1pC6YQC4DzDEsM6qF",
  "key16": "3YsRN6Z2mdYVEw3zgVCYnbRhA11rsgSKX5mim3dWGvsxRQmvVadeas8vb6pT3AZyH9AD8UcJRwgnvwt3QU5ThJSA",
  "key17": "5uRfMheJAVW3YLhstvYzfdvYLv9fHqENhDosrt1XatZhsWqcDPGPXw3ThkKYTHLqTnsDMVD2DQq4P7yDBSCpuHRL",
  "key18": "5an85P7RZCNJcyEYJbUsCKLiXhdR3CqZpZQLGcywpQTFtnTyhdwatoETMGhGVpDjRkfqJx4YFBg7X59XLPMnvBpW",
  "key19": "5oE5PR6CoG7QzanrGa1fqCT4FtBPpKxdJ18xj6SCBmn1v63LzJAjHdqhBPZ7T6XdbNC5FboQrP6nSVs3oGwEDWor",
  "key20": "2DfWtCux7kDSirGo5tbVZ9d6fTatBzNJMF4pWCJTvWjoCMzuRTm96pAhjqPdTLSKvh5oVdrTqEShibd8qVMhV9QH",
  "key21": "3ef3DSwvu1W2BJqHosVdGoR5B3U2gwXifsfA8ssK5StD9CAkxrHYmemqSGxwMAtumgBE6wrixtTg6se3bvHzcMcg",
  "key22": "26JTFnfjzS6ZKNmoVYdhJSG3dzV1Nr9ZD9U9gvCoFh5qVqhdkcEubvjawFxgvAmADiqpbeY65g2sk1A2miCmnGC1",
  "key23": "4wnEqKxNqYiRG4emumgidphYd57ZQkyPmFfSQiDEMa5VQnxmVXbaK9SXDnJP22C9EuqwU5fk9ucyr99dFWxapbTn",
  "key24": "4cxobH2JNSSRY1XCzBLYQUyxJyijFPbKQqiGeq4cDWqTWxpVLAnTWzo1JxhwmNEDXVAZaZyBd6FCDgfzsxN1R58d",
  "key25": "47SRh4XHNQyB4dgXU9W8vffAQcgVFMj2DeS9AZkyNtYJ2jbCvpQBt1xqbYPLvcTEntX2itcQKvyY9EviEvja8KFU",
  "key26": "BLCjoRQMSdZztWZ7mzRbfa9SHnfYhKoS2uyxr31gmTWyEEGvBgYZyXfNsERbUFThtCGVFesypuhchX1L23CQLDm",
  "key27": "4zAwUd25paHoVig7mQ7mHK1h1QfTmUEUDY4CSLUbjNHu7XLgvV47LANZTNkN677kPHvm7SzYreaDCXhx47X4Srno",
  "key28": "4DpBTvW9tArPF5VMyq9He9HjaigwVtaxLx1iKqLBmF7vzTAwjrGJVzmUG8moxTd9UMo2zFzkCLMVNXcU6EV2dp24",
  "key29": "3sVVt7kPG8MaCW5n3snk5rvRXjmVCL1qagzBGSBBdXNkjNP5NKWp4Khb8VLwkrVYhRMFgftgDKBuLdogMZbAxY5V",
  "key30": "c6rCP7dcN5uHYRUQmgaMkPZ4XEdMFkKTtWHXyb3fTLFYuxBi92qeAmhU9PbkhAtLLZHBaBXXUs3kWdxBwjoahWr",
  "key31": "2XbYFpsj8z9EWssNcFpDCNbf9eL9JNL2jC3GGfMXCDJEV6YSY12CwLPGYEDzVAEevup74m7FgezyjJtviWWAYc2j",
  "key32": "3cZ2q4RVjrMurBA9pAD4vPw6HtG4Lv3hjzfrcYXExVdEFvX5GMcC2yg1zPQmb4AsovCqfcgtvK4d34H31iiFkdAd",
  "key33": "5ZYyzJDEHms2wG3xJWggRihhe5TDsnewBJbBv1btMY3XFNSyjxMC6rBbXpHpMbH7yH2Mq6zYqPqFPGmLGnxRGM7c",
  "key34": "yjvYkSLUabKtU9JBG7eVG4bVzhwqbrJXY5DrToEsC158N79JpXtMhgW3Fzh6jgLK3c2uHdigLZ3SWtEzYLSk2Ta",
  "key35": "4RHUBxHbNDaECc8gJXoXdZ8d2Cqd7SsjHYRsJZ3F1PhZCMb1YC7sZEe4WwVEAxLut4nZ15Df5zyorsZz9vATKsWy",
  "key36": "3kQDhKR6SVMsWzj8wGiAFEvhtyX4v5styZsMvBFhX42uL2pHDctxyLPKHoRBUHhsTaS2ErRfCs5YN2vf8W2EVvQj",
  "key37": "3tbSKNnvqL3qHSwY3xMCgUcmpA77ri4cb1MsWba7Dsu9dnus7Khk1PgaEQYJQbJQGjtxWxhaWdJT2pR7NVfua7gW",
  "key38": "3EYNV84HHUz77QpaxBBZMyDm63ymqPU4b3G8SBfHjH9BQy8apnWWjbvj3W6Ab25heMyWx3xUrk9MSx6JjZC9jrgP",
  "key39": "XVrTYv6sa9J9VUKWwZgy2UGEcH9uWNM8W6Q5Rptf4zrR5h5wsZEEJw4ZL1eka7tpd2jpEfCMebj6uyEZ8nNRKTm",
  "key40": "4XPbCNEnmhMQJ4rJ3EGY6sPqu5PdHgEcjuRBj6Thw4fdEnLQMygUv1EYf811w2LhsTDkAVM5zxCPhc56mrE8Gzwf",
  "key41": "bfsZ48gV66XeA8bKZpfbubwo2mY1czmQ2gF2EHXAXYE2sTWWpsSCih8kcmNBhGqo9TN1K2JqfjHXRSwt1MvvZ2d",
  "key42": "mZmSwfoGed4pxJRsYsaxMKEfotMPMto2pFPDc6jbRK6Fcu5nF4Zg3ckbd9QCiksFfGF9e26ptbDDzSTu8ydUWMY",
  "key43": "86AYo6khvrZ7v9vctH3Sw6vTxtG9YyHFokpvoGqAQNpUy6tYCdpTUjfo3CtQoqzpo6xQXHK1DjJeuTzV38MKrfj",
  "key44": "22dWc8cWxsEgk4tmSKDygqkw7b9x6fBz5drEZS1MPMN9Ei4jBnRbPRyVdxpwTaMNVTfKthAwgCJvuBJPb4fXg4vB"
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
