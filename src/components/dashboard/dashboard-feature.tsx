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
    "2dYRWEgf3y62tK1DCJCGAZBcVhY9HT1kKMJgTj9RGNakErggp2aPygpiXKL6nFRRL7whUBY2AmhviLAvGS9QHxxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cvb6gm4WZgcma6eEAUFoKTS4kNJTJ6CqyBdSweA89HoXAU5wF9RYnfZmRLnLEomW8ZrdwCFSD4giKw9opi7ADgo",
  "key1": "4kedizKuWZ52PAyG4ZN1BEtJsMQjUTW4XTPmMc2qpVhiRERxtpBNX7SAiJsfYQ2nAUQo9diESHhT7L1NkC73VdUB",
  "key2": "4A96jKYNYCBrsAx7fZv67zWsLa2sGAL6Fc864PYKzVuCmB7AZpGpUy5d6ZXNsPkJTnuZ4gFcevjv5oR8VoGNmADw",
  "key3": "3M2ziKq3CF9tLT97NwYQ56b76WXBAaX55t1Z7pkAZcVw2oVJKSVx8CFMqM8c9MY11jUmo42w9ZojcMo4Cmf8pXbv",
  "key4": "5jKtnB4R6XG1GtoZNBbSojQFc7hUgXcK7Ke4PefU3eQaYgLo42qwrSz63xvgt9hDoqCuVsrrsMJXczGk1bFuShSp",
  "key5": "2LeEb8UUHHWLJgopjh13GsGis8qAwHQJVHMKqqyJuaFfSLifKoSjyGqEo3d8RYiR6BH9PgPTmFLDFsGz7iPXb3Tp",
  "key6": "5HNF3VrTsuXPJgSHNR4QnSJwMDhMJ9sWyXVMsrzp21eK1UqwGjGM5CqbNxZjMrZ8v1WdoYBQoixg6HQTwgB2dUqC",
  "key7": "4A8tpkzsM5brBNMrZ2uu2UoSpCMCiv2HkH8zE2ZiAX7EHsSM5GrmBAgpTUUdM3znxBTS5erEingEgFAR6uzyvhD9",
  "key8": "4ioNg3r32KzdXgiVVyLA8Zv5Kjb5Jf23v8Vb8Ycb7oxTWoFrmELnQrA7zCYL8ipAv4Z3JLpZ57rWzwNmuYH3cNXF",
  "key9": "ZYHiVFapGHidvUzeLeNJUg34pSRH2uH6TdJMJukrmTLLMDdTGfMLZtbnQMXfKi1o44w1Cyruo6XiWUC1yxR6JeW",
  "key10": "5adZR5E9CeTnd5N2tLzMAxd3dxnQuLZSYCwMGy3f1cRTKDgM66xttBxcdgyRkfUoPn6XykGnnKSLThYKxovqRuEA",
  "key11": "3mBazBJxg8axh4gwhDdhoMQ8qkqcQHsf4KTfgyVjUqbz7ntkWj4Hb9Xo4LM5x5PypS1e933y3d7GByZoZFRJm3AM",
  "key12": "53Myguj1sVHUo4VPepRZSVTcYiYNw1ArkjA7quZZFQGFrJsjHkhoUqvFAnB6J9aTR7BCfgtBvBHuxNn7iaAQv81B",
  "key13": "64GHbHVjfdyjxrci8npjgrJNXgytN8ZGcyVaR8JnDRtraCXB4ECZfWNv4ka5WizCyoKiA46dCLWcn29oSkgzWpp8",
  "key14": "33EuFJyUSgh7ouVq458wxbPAKPMazbHJZv3XNq5BoHenTM6JZxQELWpcXgh8MKfLLmrtkSdmLCvdEQrXUTZ6aVcJ",
  "key15": "3EEjvYJrEqBBqNVmdGXtaqfjmgTaU5VPKwWhgNV7KJN1af84MrHbJaemjv9VQjwfCB2FR2NjDXcFyXvWsz1bBQQJ",
  "key16": "2xSfP6nxsDLJwnjuTnhiCcJ4mZeHLa2iFYzgmwqsn7JZZXgqptkVyEo137tuwDUoV57CqkvvqgfK3yiZ4aYD7wRX",
  "key17": "2zQz34gPLRYiYo7MtWXiMfg2menD2kjoA6EpYhDBsdBBXjhwjJfgP1pKGibV97tcBD93RovrbBK6RgLf39dXmwoU",
  "key18": "xPaKTxjZdKTKs3xeaHShKnuHJABeSLBrTahyJUZe3M1yDwH8NKKEendXt5c123h4wWJBne8jdn8UjaLRpN484vi",
  "key19": "3svaujTrfYtKfMe17PcVUpzvr8S4DKo3BudfpjcmHtkaome86qgr2u5e4sv2zESs8YooKbEo7Qu3fv8RNZqFFZPb",
  "key20": "3qxuu5Sp4HfcrswK9UB9GdjL6PTefsqEB1PkRZoofA1fRdogKxECtmDbvpKC15rhf3jjbjwZzbvv7rKmYN6zgqvD",
  "key21": "2b818crWNbdR8x33Axyz1WG1aQoNhyfSnEvcV8ewrjDnwecKhfip8ZYi86GrVMuRt878qWWMKwLactjgo34yQj39",
  "key22": "5xSnu5YadyajCHtWQWyP9rVwXWSBrSHMk9K2c5R4ooPU4NYR19H2K2fG8ANn2CAaq8MVt2RAXHnq2XoC3Yg8cKG1",
  "key23": "4XwTjesQHhPd4b7VVi5LbxZTGP43W8C9Yu5jYxcR1r4ZbCBcQz6i6kmhKXtiEYm5KiwHQisBgc2hmdEmzmsPaEHX",
  "key24": "3sHGXaX9DoppwbhRJRsbHZ49mGLpyVoAnrax2tQN8k9CiqWWc5LLZffzdjdsa6pcN3A8sfagPCMxm85h5PYZDB3p",
  "key25": "2t5vQb3juyMegcQk6UatERetrkk7KJescEvmvtdAZ3EBcuRPijsuiSQoPdkvHVRgZLF3jSkvPDxcn8Aq5v4h36kA",
  "key26": "3GvpDLdrH5p2mfVfj6RNCJ9XJbswNeP9W484SUDofgzt2PAVw5bB7VnzPysyzeBATkn2AocsDUAgBDKAhfxwHznp",
  "key27": "5aFk61nF2FpbxGaESwBbBZJ67XNu4VzvxLxHjyYw4pKwWiF7sxU7MhgzRe5PwfB46W7w4tTUJdgFSd6JqW13m6F9",
  "key28": "yCXnNtdpKj1uTGBerz1NtQn1FMfDZSxqMtW8kLJbeh2EGrxb5njDbUgGjyYWo6rBnrttnd9xeTsaBKyJ5w3AQwC",
  "key29": "5CWPBcS5FXVSQfcvMWQyPavVx3PuMo7umj3wVN2ggShZjXeNN9nAfMVLJc1RhmQ1qCvm1P49BckgqT5HKFd5sZoY",
  "key30": "5XT2fg2omnCjsd5xtzKzV7J8DvYGuw6DFDt4am2LAQKLBLag3YyzjaW1deiUnevxFwFs1cz43oym6F7Mm1GgRYz5",
  "key31": "666xaaAQssMB37dvPXnM1BzXhMk849t1jqo6t21ush62dQtu6hc6C9iUob1i9re2ipbkJVgd2QREJ774BH1GSC3Y",
  "key32": "3FMT2J7ZMcu7H5r3j67G7nagWNeEjRqhDVSPmMr3gHq61TA5FdSG7EDuJEE7LUe6w5wnRUufHgeKvt5Xvfz3cmD4",
  "key33": "4SNqbpvPtDAochVNYf7s2D9VjchawqibTQLDhtTfbJzpGg5ey5qrfG6JUiHqsfY6SDyibdekCVAwG6yPKZPbi1ye",
  "key34": "2Si2REnCsEGmjLEQ6xcPi6QBx5xPYKYtNAa4GGPpiAEtbAxgaRfUELQdoSfyZvY8gM98pnJZA4etaUUGhAv7zQ2m",
  "key35": "KFcvLU3ZPxzhqP124mCtuxaCv2Hzcrkw23yx6LroKDV21QJtKT4cKi3cf2SCqu8vhownzvCKFZMkkCMYFMKegv5",
  "key36": "TXnp64gqXN8CP2Q9CQax89MNwPts76UBS3oxajV5kEHQdGmCrMswYzAhTgUJci4UqHEeX2swAyJUxktuuY6V1up",
  "key37": "3LMLiUsCi6N93DEB3QG6gagjvBPMvAygW9ovbv8Zn8AiW2X156JVVx9Zgb4CkRnN7AnPkettv7Zdwtm3jXtiD5Ww",
  "key38": "5ZXSsMZzesxfoCBoLVHyb5LDndJtRzTx42S8Sdv18XvMaNkCYgZ7zpKAvAo1CTxGMUv2PznLCscJecP7rps4cxJi",
  "key39": "HKjgGtc2HfUwLVHqnYiEmz4iEKTz7jfTSdPNoD1KFYceAZpNgZAkUhFMosdsqPpVXEiuixBFzzdxbzPn7unzAct",
  "key40": "3RDcqzXNU1w7eY5kkZhQRc2cU6j8NXMN423QvBE6K2wZW4ewQQs2h3UKv7vn7DUaUbXMMss2QZm1amFVwztmQ7hh",
  "key41": "2G3ck7DKvoyd6AXRBApHbwc3Qdfg1sfBQ6tMqR1otmmKmtDLpiyNTxySsqci3nZZEaW4aYb6AVxHHiZGdkPVQgQP",
  "key42": "gkGFdjGGvaTWg4dRzpey5DVCZP1pBkyprEoVFr1t4yM5rPHy3oHoh2FBjkspvgvr6JaWtHs9sBLy99xGEBukvaQ",
  "key43": "3SMnqeTjLwwXRAGnyfmke6n1foYFp9k5153uD8RaAhwPaPDBYB9SeBNdT6yibP8MzsxpRSqTZqfrAHbuEkwxJcxL",
  "key44": "2eMVCa2TYtbtjWe7rwNSrowzB5YVXW8Jgi2FpoXeAAjbtNW7V6WJG3mFvws7X5NiUg5Ft4m8sY3BcLeUWJzLMYrX",
  "key45": "27pvfLtX6hKtt4crVmExMe6xat5mCxgh58WPpYfKB8vmDR39fo2phCVzWoioGjrJMVUhNbwzKiSms3pkEHgryLDR",
  "key46": "3YhUWRCLN818QWPa6DYVtMNvtgreiGvxc4Jievc4TBiVrCqjQNCJq77JYUeMQ9eGnQRD47tnh7YyKuejTF1x263P",
  "key47": "3Xj1u4N3vsjVKzYWiEpYy2i7rdLH3TCWFJhHLNqLG2n1wsbGs4TTYPJAmvxPKNE5qQ4dHvnYm32dPTeRRG4heULD",
  "key48": "3UyZq1hyTU1p6MWoa4ezb324kRX6832MWLd5rDYEyMgpb1uqCn8VFVYrgKL6HzsEhARiD8ewLojcoQBhesqhae6P",
  "key49": "4tTusV8nvmUKmjSSR28fr5GioYhQTZCDNzb2VrT53gaKsP3VRHZY8aMcGWjB677hBGVTwqdMMDm3HQe13tdrjZZU"
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
