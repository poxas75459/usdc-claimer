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
    "PK19Un3cbqdvTv6ZyNCxoqPcWngESPPW4Jbs9HSs4AimmV3GWpSCWja91Z2FUeBK7VgziUc1fW3YDwmUzieE7qt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RdSjvwyKuEFyy1Hd4uf8Jacrta7xJ1L4V4WtHSy3BHX66aZ58yaXyboEyhn4tQRCukVdbFFZhVCQmoTgWHd9oYy",
  "key1": "57rUFgzMcs5FyJsANKWB7BjfGTC1qhUoRotjcYGXRr1u2S9C5HMdUdo4buhiEaU6SbCQr4hVGivUmA46WrW9m4rv",
  "key2": "2HVDRfMjWvw6NCqSRKoKLfMq2XJ1dv6cX6wPw1QyGkcTZsu8QtqzbF7hK7irygwcWT1pnQvoBJADjCemqY4H9YdZ",
  "key3": "2KCdo3vxySpWeHvyK4hjXtPDXguMKgSyBh7FY2wANTGUK3GAQif4nubMBw1QXr6WRnWowb58SYdvVE5jFUtLNWFT",
  "key4": "59EREGYp1vrYWF4ZVWrWJkkA8KRU7W6RPJorsQj4NLH4RhpQbsMb5K5i5e7nKMJusYPA633ht4B3htw822eiwn9c",
  "key5": "22qp53B16YjkB7ejrSrXPSusthwoQsFTGF9fbhyXNCEap1DwJ8SHC7LAkrFf2RPRn6mUJVvuFHbvhVJvbj6QHQvC",
  "key6": "4rF8TPkos5gTrsY7drB1dLiRw13d6ZdEYrggRHHuYTF5VdfkGVLts2EuyQvi9qhJbB5GrrQr6veZZR3GNKrMPJiw",
  "key7": "3msQG6nsuTQfEKWDTaz3SN6ctgoDGLAnTJBPGBqM1k3BR2RpUtAwR5V8zavoc3MQqK4hLz3uz69ArxiJb5UrTuQC",
  "key8": "2RHUyznaVLNSaWJki3um6vds2tygUij1qUcofNxU5S6Mc6XwGrgBeb51mHm2KNiLVT13YXt9LxoDBJHCMZadvkkP",
  "key9": "5FUUh4cbXmvt79JHgqj4ya36qQadDVojAywFMz4fvNqVZGyBGehKPCwgEf6Bi6Sj5dS3owkcUNoyYckbmwPekB5w",
  "key10": "22Uq37aqt2SgyD2TEWLyAqwDAweT3Bwq9oijtoTaEJYr4TNfHdANjV22DrpwVE54j9qv8LnSMiKcwpG9uv6SPKmX",
  "key11": "5gnU7HdhbB3okKwfVs4awV2eQB3s8Ms76DLNAnmv1cnQDZFQztbosQz1BVxNrZTxwMnenyvJKVEoLa8GHpnCvnpN",
  "key12": "TrRPhWVW6SdesRwav1C4EUax5hwXwff1mvb1Fr9hXrXBxiDbCV2G9L1ScgBWRPLZTL6bgmityfjDveBc3CxfF59",
  "key13": "5mr3SZ6PUpQJ7rSMrTTktB8ZoZRQurZQh4jnaH4mBx4bpM3UWsFQMAPoGNXQWAdPJ9MbfM4deZwbHTMLrzAaKxXj",
  "key14": "2eTbQfsEb6uquFakDW8peFopoKRZmXbBaBaGMFAhNgFL3AScJaS4mCsNorg8uZ32KbW2gAUxh5q2Wy8YQBnRLfzK",
  "key15": "3FCkA9bMxFtLKsV9WLMqBepLLWo4Wf1k1gzSb3YXzCS9yjD8CEwytjkxw3pzDrRVSwGyD546gCkHU9wVciGZeCMe",
  "key16": "3SMi2xY1Q41ci4DjHCjHjaRHW2WMDc8eyWL2ivm4G71KjRxoKmmUVx7xwdw6YWRyPhjK2kCq7Xhjv9fJt63AcVso",
  "key17": "4GQZDEyMHvzYwwAhU36T5b5NFFoq9JbAqpDpWrJc6wCtg7jUywnZL5au7fCPw4bjidMTW3n7ndZq668WoNsjPd6Q",
  "key18": "2RWqHV2Pioe9Z5LUzxj8qDvLqy5R3fKuHzsh7yP7oL5nH2Cgid4WiaRqLQNCJCStNswYW5oxMngFvDaD9vG7KERX",
  "key19": "3KLAJL9H9MRwtZNnjqyXtbFtfWe1qGEsGjcQjRT9ju5pZBGRt6yQBHzHdzymXutbBfZ7Us1YkH6uSs9vVgGen8w9",
  "key20": "yQ1KhjaFBYRNcEE83g1eXW7V7LjFAzFTZyDUmRfAFJyCbfNAtb7uk72mYwDhytWBacd44mcJEnmPKA9ytQXJ4Cx",
  "key21": "55wA67dvr4muNCaTUsUJnwKc3eAKoHRsf3ptiWYh64B18pSyfkj66FTsLNS4nQmnS14A4qnbFZZ79CuddzMH843g",
  "key22": "45jPtqwq4B2Q4hg9sdmKxr681nw6wE9aUfPMR65oUGjwneo2FtRNRWn1c5xutpxxN5mXWEn72jRgCgkRbB64ffjZ",
  "key23": "62xSbRX4Qtk559C3Ktnx2kCwVyuzPsKDNupnPMZMMvM3WnR4emq3mxD7zAbZfhZqKaMtUf14qZ94EVFYfnGXR9uZ",
  "key24": "2FmkUdi3eitXqWmAUwMM8a1CBrjbZUmdWMfRfhRWYem5kaoZM1WJ9hHUrZa4zvWw2hP7uYs9hNULF6FE782uKuHQ",
  "key25": "4QbQMq6FgxiGP2ZmPrvKycaH45AFqw3xVxrK7p9V81G5xG4LzRJX9f2BP2hSaPXXa9hNzqYEz9YGekiwDq7xWVuQ",
  "key26": "3wELS3QVkMkutM9g5aFVG7XQtdc2sQmS2twysJM1w6VWjqUb2xtQhh98gMftwJXvgLxCP4jWE1FoiJwtPspaSHzG",
  "key27": "21BerDBwa8WzW85iN1oXKa4bSwNLkVQeX4VBH58QxSMRcWCfGaB93maGmRDcW1kn9QunDmBS8VzdYoiM1aTShr71",
  "key28": "5wvMfDWPdv5bUKayVEP76xc4GxF6pWXARZStDPeavrWbXUs5WjGWRbZHGccYSZqysxQYfc3BQaFAHEuiwC2NudR3",
  "key29": "4ZwxaABRKQgCCBcVE2A7AKi1U6q3VNWVkwXhzPn1mziapavboW6xcJmgEs8VqDQ1HFu1pVEryUfB4V4Yh5Z4wZGL",
  "key30": "4YUieUuDF2dfU84Te9TzXDsCCBJQZYviWahAmmqco1STXARWeJqpKxcCHWk9MC3YbDzCoY5CP5Y1fR96cCNA9GVE",
  "key31": "2YLQhfyaA5gKZASfSX5EqjbpupFZkGD3DZxGkZVfdDkFQty87wv8UGqpWEaGfk85D4i69764rk6DtCrGCAuxiyQ3",
  "key32": "5kZF8g4Dcnhkefwgcp5D3wzKv8vWKFbfhjVWJVkuXt2yHLShC7d4BXrDvh5y66CKksZZgZB9C55KP4wFrWd2MAYX",
  "key33": "fjSGZE9WvTWE4PnG9FLxfLQMYfhBSRJcjiMepLqVbvjyRre54tX7ggdxq8pL7jRG6C8YT7D7q7zvT8jcM4s1Q1V",
  "key34": "qSFUUfxBuzSzD98qr2gePrh4aAGFbMwqT4n12wMRJwx4rXkgr7HStQZiUzqwc7Ve4fTfPM1EgoBzT3L9JgtuAA8",
  "key35": "391HL6WuSB4tEssXhR8qJTBM1tEaSND5VC6pYP8nu1wSWfpYPN4Pj936939gh4tdbUH1qJukW6LdQzW1AVUDRaZ1",
  "key36": "4VQchRvC1YzUCYR9UfjBwe365y9RYSC9SoQ8H5VRsM2T7Kz5rEmKh9FRAm1xon6g5MBkVYpKS8NcAFQcKbzGRNt3",
  "key37": "4vFeDcUfKUtHTfW24wfZRT4wTCDZMys8Bwcyn2arJqBA4kEoX2hV5BPrpYoMZn2FoJVJru14sVZR66r3TfScxmoT",
  "key38": "3F91ozGEBUHyBcirxmHBjTb8ouyQEP4iwd4u7fZtQ966aom55XiwzQ3hqJfFmnBLGAo9uwTYv1EcMJEK2iC11Ski",
  "key39": "4yoMVurPDENf232quWzK5bqna23FwLeU2BjU98sBSoTP8YXC6jT3ihH8R8XJET81PDthveq5sTmjw2R733FcH2tE",
  "key40": "Q9XdgtqKXB8RPovm3Z57fDhCWdv5MJhEw3vf7BKJ8iKx9RAzC4Ssx2otjxsn1vjQ9sZTXbs9ynBb1zzH7kAMbma",
  "key41": "5owNvKeo42pEWQPN6MZSbXYeAhYJbGR4pQHXqwngNh9ar98TQjB2zdqNRfLajGTtJQggYHnvh3TJYk1BQyAXFvWr",
  "key42": "33APJVbg91q6hGLcig7hjZipCbtnkpJLhE1h7DT3EL7iPVKwxLtHMa4eZDBBE8hcsT8fFRzWhrLWVWSHCTjUqdxz"
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
