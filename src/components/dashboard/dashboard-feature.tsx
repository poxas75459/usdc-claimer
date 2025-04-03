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
    "24P1QNj6viShjQpQ4mvWFf7VBBXqsEARh2rvWHj4gDCatZKPPtxAAtNr49giGW7BA2gxWLCgfgJpDquCwV2HSVGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WTvAFDk5wzqKjsiArGzqgTUAXTi88FFfmDct5v62tYksjMgd8HkwWNSNGAPas9V3SUqLQJ3DtwS2MsdF23GCLov",
  "key1": "5chc3UdgjcCam9sox6ABiSa1dMJbX6kKqWVcs1om1hQSabQFNEtKqxaagucef1rpk6RfnytfEqSL8z5AEuA9gKWw",
  "key2": "3VN49RN3rwbkGeYgtHB4n77jRrT7x14UQksVQqMqLWGhqVeBq3oS4ugcqF35gEPH7ZmMiqd72ik7iChnjS51ukbw",
  "key3": "53iHJdKFEugcbMJ7LTMb4hGAPXVZfGKSdGwTTyvCo9cx588965mASbr8yPT7Mowf54qRD2jzf9Do2JHNJAafULo1",
  "key4": "4egPLHRKCECYRoRjSjZQ9yvgc34zKNcRx1XU7jntcWp8oSTgdXmLPoSarGMYVJUJ6jinSBVGBUvxtikp2dVzU7TR",
  "key5": "3eyEXeUPza7ara1fUtXdbZrtHvRvdLy4bf8rELnxCRzvEfbJ4DNjvkmtmyadxWDJr45dJiKi3PuR8Mg5qvF4qa44",
  "key6": "5CrAKimssWGZebQS36FqYoZwjSKCD8rmb2phuwQQfob4RZ5xibYH5JAvyrcejMWsdvcgSQatA338UgZtdu7A5few",
  "key7": "5HbpqDtbbG46T1XaDK4KpAGv8Wxt8Cm9142S6bvirjqZ45SXe5fTgD3gqpnUeLFMba7KUBe13sUNqUgtpkW5XQWQ",
  "key8": "kRQfn6UEpBxqPCzLB25fid86643CKjqTsNb8q6KhnsFjiJUfJNfTVceCwpvtchp2wKdtdnC43SU7YzZLGKmvze5",
  "key9": "394Qzi5mQ2QFohzjyDcZCmfcPEohJ4M8x8MeEsSFG5wbpX1L78tPe6w3vzBbGVMQHdtudR9FE8TDmCkcmoZBtVNQ",
  "key10": "2yYLwSjmyj176aHtd6ZxigfMrY9a3Qc9nGAsFVDGWkoJz91rAcKkNAhocFUahMUcDtY7hN6Sn4HL4ZuTK5CzcjSi",
  "key11": "5nd7zTBGJzvdBvKavv93ANiLsk8KbjNMJD4P62T71AXXH8JueUi85KHk6GYunEN6fr7sJd1yuQ86k2p46k2ic32n",
  "key12": "YJkzgxwjBavziPaeTP4N19P71rrKo14rco5MvMHytd3v7uSo8nCEt3m9ZPmAWBS6ahPM1WbGFCfqYp5m7GXuHVD",
  "key13": "5n1CjAH4egF1vXPHKWCCE2mfR9rwZz5nE5FvoM6BJ4x2GdAziQ5XZgYnfr8DVvxbqU47Es9Kh3P7GR1Gsm18mUFF",
  "key14": "4PRMWAWpkZEWMwf8V3pcPe9JFJetLRhBeenMeAjLDZsgVHdZv4h6M3PWdvU8EygsTXowP7k5j2oU46rQaFXvEi8o",
  "key15": "3igiGC3izM2K4WEHANfdZGYcHUJsbnFmdXTm9DaM6Wa6zLKoF7tPmyVmWbDV9D6D892kcaLqsNvM47YN36y1eQDn",
  "key16": "2ABsa98gFCBPkcjMCBExX3eBjLmjfPpcrX3srqpaFcFijsA29ZFhiDeSQ6vSR4M2WatBusX4z4UnQBiVoKp5DqCd",
  "key17": "b2L1fWaa4WqEEY1gb7fnrgxTR52FW8uquRx7UGe6vobxKxCXzcbRbWiV5pJTpngurNGDZrbs3gd3NHNBy1yMAyv",
  "key18": "26SjF6nxa5GfUUFMAGyV21yBUg4nbM7ZpEgixyzkgXdocrwp5qFnZe7J4xrRfNL9kBCxtaqk3zn9Lv4S1AEm8wpA",
  "key19": "35KvkBJqXxHKZXc2PWWxPF8sqWZqpzh1sU9ajzmjzbVqvRX8AGjYEMKwYBY1CCDGCT5yoxxgHAHD4PTzs7Mq2kyQ",
  "key20": "2UpSG4QGqzRY4ei6axLw37bpPiHNePAqcX1kvMYmhbHvKY2MvFSHDbroeR1PzQDUP7GC3fr3kJcrrTJ9DSPDDLZ2",
  "key21": "2GPWPV7KaJ3xkkZbkJud7QLs2KRkkXpopJu4oUBxLHkc7juXCdsvZ21qjyr7XSv1DMNt9uV38cbL4EwbFuFjqFCu",
  "key22": "3fYzs4ZAAwJtL1915fz4w1N6zmcsgDcRU2sPHnpWybvFgizXgSnM5rWGvRvbQBKX7VHjrno4Syhq5HuYicAaVfD3",
  "key23": "3s3B7LyD6zzDM6zZQiyZaJd4tC9DHRKCzt7a4q1K1phuy2ePjkGAunhUY66oTVexKKzwSnkhh9hjuqoDYK8SodtQ",
  "key24": "5nnetu8Fhy7gvUVVzKMrp3G5SkYHWD1PqkVXPVBujJ2B4Ah1A2p4ie3vhQopSqPjfCRRTapkidfYsC8i55X6LLKF",
  "key25": "4N5uYVQPYxGsCdCgX8sJnVnRmfqKMyunMjEczAW4UQ4gMeSTmAVG9sNQnFrFC9A16GunzZo9JYumboV6LLa4cxQs",
  "key26": "3vVDrQmCnnuPomJmN4SZiS8WTi2HLEBmpoEWE7N5nVyohcyaP24gZr1pkQ6uzuguDK94QfKu7YNiGQ62zuGe9Ng7",
  "key27": "2qT4JF5eqVnA6apYGvQnCSQQDTGkgAzMkAdgWnR7vXi47fKGGNjj5j9w3aqkgiY8fAvufoJ9zCzacrMnVX9WDERZ",
  "key28": "4WejEdNZJ2uNUK5y2sByttks4G8oyGpevuU2yYMinvDChBk2HfmZU65TzNDMYsSRMpr6todbyhXXSraBb15fHJbA",
  "key29": "VANrmVtLYKU29yZYm6m2iH7oCmS5HNMeY7mLv3rVCoa4cMjCwTCzJDm2fR5jayY2LxgHPAbgTXHPnJPttNqPzqM",
  "key30": "4ViopYkaBXD3MBVfUTovZpHiF19kjHa8EmqhzTbWGJ6seBYwvQ69gzjxJt922yXhu2Q3KJkyS8eVJJ8zFsfLMsru",
  "key31": "2YJSZnY5Cr5GsfnBhYh63F4LJKfjeK4h3X48ZZmbYCk9Zs96t3Fe12XfaGMjsH8QfehfzN9ueS1zrrTosrEevWEe"
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
