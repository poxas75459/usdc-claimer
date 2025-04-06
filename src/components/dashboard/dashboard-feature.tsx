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
    "43MjA2newqmZBohvKiEf1eug6XntpFfUoy1NmT7c3XoBgZZGs4CMpPGF8JHKQpJLVzBf6dCkZyF6HotKpsxMAFAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m4U4wajeyVXLjWj6aGBMtfdGCw3AwHqyENZsHU5Bpigifk7cufiyLPMVDib388tKPEN6CiKu1C8xTakAWyRevmU",
  "key1": "4AhV3HjnAEB8UhrnFwgoPvaYLw5PV1ybELoLYaVkfCczBeah2WNgaumjKnprxCRvXXa96zxnm6R6oxX6tHnKMAh1",
  "key2": "2GkkKRFJn6zvMxT2xd4MkYzrDhFYdSVSSTE6bV59h9AjEK3terNhxQ9Gu6AXsyncYtsuDWARVhJUQ3xhFBeUjWzm",
  "key3": "62EA8KgRD1mghGyLS4eJy2bqgjwZmgS2nWBCLpP9ea5UrmKbaoNbrSFP9BoQnTNxUDojDkU1fUpqQW7HA2qNQrxM",
  "key4": "3Jse99ahfmtPyM37vEQe5Qdv91vChFcDJ6DhGXbVYWPVBUyJ4SQPNfoUuGA6D8idESvvjFWa37PjToRrtSMvL2j2",
  "key5": "2h21R7spjvUtACkZ9bmPGVf5bCByrQTJw7qbXUSGRiFFK9oyk8r3LvAxft9MzHBmFKDi5Mxj2u8JJDz1QBwSkzPi",
  "key6": "NX5jjphKAiAMdknNZFijMrJs5nARwBTjtgfnmJ4r8yyFR5xhs5TpuW5Vr62aDk2iCbmJkRqVpXCcwNab8hKiBUx",
  "key7": "2GiWXP18zs3Vgckp8ZBJyMsEpAGH3UHajXFRTRyXe3kfGK7RnRKYPYujJvGsNyBBwop1LfDPGesa31RqBVMzfSqG",
  "key8": "2D31eiFPzgPZh25hNsZJ6aVjk9JNsd7DvKvpu57dj9XqBBfngAZcP5oF2CjorvfRoHN6TWEDynJgwZyhBsrFFaY",
  "key9": "mPjAgBb1wyWg5KfHHmdLr2Mhypm66CiqcEPeyjkBNJaZCpu7cPY1pZprTL3rtZGw5rVwzs9WTDVyXKbekD29peS",
  "key10": "2phsE3nPfNpjzRFSz5SraxBVhXMR2wwwYFYesnPfTQzpXtUjgtVgPPWzSzqUYwnYvdowKu4deDVpmpaVuuQ3nuVB",
  "key11": "3vd7UeP2ffNCzoK5yXvdbsB2cBzc51Ucrw83mY6eHfxe3BudG4fHvwvVc6XzvA4W7q9MxLNcgKjW91cPVajpeyKY",
  "key12": "4fk8bCGnuBWxfRmLuWyxx9DAoBwtuBYEy5Jk8zDzrDKq7AakjTc9PUwn67hevjoriE6GdVzkun41vgNtUSJt5eiw",
  "key13": "8ynsnA1urQCxgLnWirLHksUzMBo4T8NkmrNWEJzvn1noFybKwSyUW8B8jstFjoZaP8cs1AguokR3yK33uM8ewUn",
  "key14": "5RegCbX6CPvVdz6bzLmbyWuWrLGotWUgWVNB6zc3ebyonUtRQMWUxCRaEA7t78gro8FKhFUg9PEkfuDgqiZRS8zD",
  "key15": "49TD2Cyeb7Uu9N8rLGr6zNm7ypcJPZrBqSW1xS9frKLLA91G7r4kqmGrLEJL66qtEc6YuJGYQTwioziDGcyG93Jg",
  "key16": "4GKzYD7gmCCBP1zJHgSZgnc5hwjf8exk3y2hM1wFAXkifJ5gyvWMvFGFdw8DKBzEJkA2fpYxseaN7xK3bVjuDUU1",
  "key17": "5URD5cmDJ57EHrUSC6VFhmy1AyVKc5MHCGrtMwXbPtSfPt6XYNw5SHD8rKXjJhvX29hueSGQor95f8yNytDM8CJz",
  "key18": "5Lh5R33PWVJ2HfwV5tNPpxHNhWXhHkuG7kVcspQB8K24D1SK6BJGfqSvBSvPw3F5ak6gudw1Bh5RD4C2LDFtBHPk",
  "key19": "dq2BSwFNhWAmR9x28iewDCv1MsdLUaiVo3BkfcTMhNGDDSzve5nPY59a5A4Uwq41LHw9D2Hq9hmPuYADZJcrATE",
  "key20": "2g5zZvayFRsAgaqmm36Jxvm3VBVxt8NL7g9i27MPfkWEFJE2FBe2B8weNRwgL7g5qBiV9D1ewK4XsfC34u1118xK",
  "key21": "bzxVcuZWxxwT3PK8WdvfH3oceEipEx4fhi6BVqpXTxZs8pQUQ4YZZ2VAvdWeaDFT4z55N1Aib9mYGS53nSR7v7q",
  "key22": "2YHJBas1jzHSYQcDCB1vVrHCffDagCjA8jHf8oyRe1BVFoVWmy5qemsAvprCbDyWhnpiMqej5hHveSrsJW6Uboa",
  "key23": "4WpPrRS9SByqRcFnhHPSrfmM7jHC9rtkyf2XWUwLSY7eDiNcQPkRc2KHAGcZWeaFUTHJiN763aYqVCjoD75qKNCw",
  "key24": "5qGk8r9DodXKF92hmdhwAx6YYcUMS9tq227TWUFemu3eUVrUQ7KRGwdMVUrGki3DTEHtahF7zY33ATQZY92H3zyV",
  "key25": "28HxE72shayQY4AJ6nvzuMCAe6Afx7yq9brkNpDHoSuNHPMDR8aDrzVAdZqNZAyeBg2MktwbyvKD1oJtA9Wx6cV5",
  "key26": "5xGZHvSTZXaWddHHhP8jju7TXoWUkJLBx8zdnBx9aa2dADi3zoom8jwwgvjaeWDwPpcnR8xU9dKAFdYqSdi7NoGj",
  "key27": "2RsuoRgqNstpDoZTSRyWS36ZxXT8aCyyuy6Sd3zgv4mjzPZHa4Cxm2PbqFP7N6jrNtjugQNcq8guxB9VNsqA2Sat",
  "key28": "41nezaKcdGFbaJt4UJGUkwVHxyMWdWxe49RWQFxqKiJyPvfKq523Yq3PxhDMuKbq2jRPczJayaww1PvMGmjrJZSd",
  "key29": "4VA34bwX4Mt3Z5k6qV3b5fmyCUxHY38vLAyjbPbmfuBfd7nofMYPrEGBexnQgvBYGVcc7mVWw8SzwLyztPW6Kmkm",
  "key30": "5rZu7ELMqw8LFx9V6BE4Dy9jVC3Y57e5taawG4XEnYYd7xqyUK3UwAci785KENnYjWWFUQcFXxncPr8HgtqqxMzU",
  "key31": "2VxBVmcUDjZ9NKxPpg6smDfKEwJGj8npD2j3YcpYhGSFqAfswGLrCizWm6aR9D39VjdUZRw4QyZMsH8VkPYMNgCU",
  "key32": "27JCsx6v6grG3SNomRULs6Ywv8sLiR63xVeyJqYykQDuxCHGzouP14BgdxDKCUoDCZkds7zhNp7GEfaW3HWYyAGY",
  "key33": "4tSUVL98qZ1KkEnMB5nNZamkoqPAGYagRQTyDAxAgGQGfwVDuZKJLnzfe2jeuZGQKtNJ7u2xp2pQb8XUkKF7KUn6",
  "key34": "3Ja4LvN9DttuSyvHtxFjgYiZKXkuYTwJKp2WtswXiYPyZVxM2QjngUuAHRNP5vrxwj2XDWx7FRkg5SvEmitZFUua",
  "key35": "2XMDVZcPBMS1NaAzPSwcgDoJaudr35H7uZE7b2m1ZwRcX1ESKsSLG9gFb9WbVPWP4AQfgDowCaboLDDkpc5WmoeS",
  "key36": "2zmsJr2JsYDjk8G4FdPTpi5KWymkDnR8r14wGwiUmoTDJPnwMxYYMHKh7DMFe1t8fqS1xLSZ97koi8dgiFGFL73P",
  "key37": "m1sWpgVoawC8trRrKmzbN7GoD5BmcSgjr9Aij1yBaUYNEK4YQUCf5qfhmFZLVEea9qZVsq85aqHVkQeirqi1t8H",
  "key38": "54gy5EQmiJ7hB4NsVWkoDisd1U4tePkTX1M91E4Xch26Z1iWSnGs1FCC9tKhR1GmSvFeEbBnuA479Seb3f5NYTth",
  "key39": "2qGADPwkyBDyYzgRz7WCFp37graeHjiDr6j1VXhk6VnUsnL6wzTbJDsMLtDUeJmUtCTT4Z1hDH1kZ7kXekSVFH7H",
  "key40": "2FjHM9K7HXjV6aZbvaGnngoaGThw5cX5HgYs1SdZKEnFbtvqz7x5zLaPRYi6w3N1Sc851sMVgQHh7U4EZESiWQAf",
  "key41": "3CHMZYksM2yfVDeUHv7tB47K9maTW8rhNufy9vcct7J6U6XFJGVaaQHp8WXAYpHr9LjvQ7VARS3zXeoBhwZVKpY",
  "key42": "4ReFuKd759Qd9o6MKaSN1SRiXxUh6myZw6QBjKtPogNTVFXh4U9KwoDcevEFkZjcmSnCJBGDDiCXMxMMQ3SnHpdN"
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
