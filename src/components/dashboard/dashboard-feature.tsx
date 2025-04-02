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
    "4o9y4gjdnybANs3EsPg1j3NcWG4ZrDo4nHBsVo4fmcAYoCZKpnbv9CNE2Kz2rMLGBg8Se2jge3RcQMFrXSoirsC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yprHReNqiPEzgAUBzi2TRd2zDZ7vpJ7ZMFoff2d4B2YuXGZgFGhArRGFgV5MyHRdNrXHNZTe8qRduW5CBsbwr7F",
  "key1": "4M92uED2RkNF16tqxnx85io8AsDyQDVc3h3N4iM5H47cRSQRwyS1H4cG3dMpbZybsBRk3BHfEzShDyyPv9Z98Mij",
  "key2": "4WUbQZohZ4F9swjkz2s3kmhsvacXpCX4bXqsEpFTp2dkRyh9Z4LHzGh8Lz5zpuzzyX2rkyNUhU44AFMqCPk5zHNs",
  "key3": "mENAb4PHdu2CQg1NrYPoRzRqwpYHfxZDZhrrCgibJDsVLqFKhcNKcN3uQ8NVJWWcUsnVUBxgfhZH7hXjZ977bbB",
  "key4": "3vmmz6aUJTDrg5sKBULYYUYrK3Mm8KNggeRGMKp3aK8Ns618MqhMtyBaMpvReEyvtpNEPegSQavxeTUUATuH1Aye",
  "key5": "67ZChxWEgByhhfWxEeD8fXAGo3dFj6fzoApaZnCQ6NNWyL7BX1kQbpM4xSRZ7cKNC4DvSZPSwGVkqsHDPQEbwwYy",
  "key6": "3Xb5qGGpBCX3XNU4ex6DAcn3cvza21pJcw1xSdsyNYUMZyLBnSNY3jXvY41iZCJ9L8DriXrCFbAntL4zAd46ZU1K",
  "key7": "4a6UTgpmoAP9nEY13wLvitFWrFf6UxPiUrSLYd8785jocqK1kQA5FsEkhH9he2rhNBksHhmTMdJzzoUW7gq3HYSY",
  "key8": "499dgF4jTdJ6cNPC1UdQWMggAGSRFe9PytZa3X84XtghnbbstoK3KdKq4uNYBS8uYtHqvqVjKXyNaibm6GpgbeAN",
  "key9": "3MWEApkksvEKRw8rqjvqtgKgQHAic9PpAbfJP7U4ZBnkzB6DrCRkVJ2opcHAUqesy9FshEn9yGWqXCL3FRJzUCwT",
  "key10": "3urjZp3V6MC1RkdFa7RYXRjTm6b5ZdG9TfozKPr6tanYu7DpattiaYRQ6fWod8FpXdq3HUCwpt9MD9N53eEurzJW",
  "key11": "5NKMrzUseaF1Yi2jN4zPNLSPxBo5K5ZApoJ9Kc8Gsu45hAPM6SEEEbNZWWLg6dZtKrCJvg3Aso54So9MsB1tADQk",
  "key12": "5F24Ft3yYQgP9FTgA1gLGdSEmv2ZxYom1TR6x1FZrQsdfb4HPwjXnhQYDgrpmKwJmrgiKKDxPjqLLnPHC9HrFdNK",
  "key13": "3epkxFevbt9PWr5hacv9xjTiw6CHnTspdM1eBcQVruytqCXTnkp4ghAEFXsvdjaSFeSdFnGCgJyehg9P9rwYE8UQ",
  "key14": "3BuwwuLVQa6dVaGf6NbUdR4P3UAJtiXhwwHg48G7gy63EZn296zsWjsP1i8Sf8pWBM96KU1PcoirCEQ5g2SUSPQC",
  "key15": "42Wb37ukVGYvUhn63qK5qxzeSBuWrEBy1skmef5eHLWv65oeVGCDLhyDX3m9wd7LbjpRtWPXk5bkYZjDwnDaDNZe",
  "key16": "5y1i75zhGVeWdvy35ZUgmu2Mg3z23vkKR6rmjurfDnhWe5BDNASU8VELC4vWbuv6RiMnXSf1hmjbDEoNwuomYd3n",
  "key17": "B5G3KbMmj7fz9yzwgsUAsUo1wJJQpqSRhKetWhXTQr6kcr4tSQqrVhdzy8dbCZMRbev1eyuYsDizgPr5GqRydCd",
  "key18": "5zmDBZ95kEeYCK8bq8i22A3dfuLSvbweEnAqpw8emY5ifFkvtohTMWdxq8FWtYoKPnUaAUCnn9rprHMwoJPo8Xs",
  "key19": "5GAY73ryuDfnU3KeLngbYiMdjSGhM1a4ffEPBVKiUf9XQdN2jHdSu3dsubXUKHEfXRQkLkiXQr1dbQ3YLZL8qQXy",
  "key20": "2XzYyzLK51mhBBMWgsyWHm6rZXpu5Y9k9UQcHKKWZRcxM4oxCY8tPYouKaE9rYoXTSjDPb233Wk7ZDQtpxxHKUC8",
  "key21": "5tRuLHRsLxoMcmns4UrRKjuwv5yTXhbJR4G5Bd9umBR9XFi2dD8ASQ6PeDqeaCF9PHHi9dhHnhfLENsk14DTUtCS",
  "key22": "3HjesaQ4D4cwnZSVwrqf54iwMSVjo3j5QXNd8xqpve95DHQjwBHS2Nnk8XLwUNjZJ3kk22rmDeDMdR8xoB3MuMKb",
  "key23": "2E9Px4e5DgbEYFdjSgKNPQvqU5HmcMMV1cv4f2n4KgGPdYRhUH99TZmuJ4aoALg7Ay6kka2gBq1jEeJLoCG4d87U",
  "key24": "39wr2wMFKefDNAx9frMvpsZWVbZRWunEv4i1Qj6pE5YcipEQzWMsX6tYCbXyEiebuAvhTRMSULRcZW14Sa5CEf4D",
  "key25": "5Z1zgDo1qwmaGyfPpwQYR9LQ3yk1itEbZY651b7P9UpzzHy6bYnZuLtybLi9DYcuvB8iQZPdcLLNesHTuA5ThkTX",
  "key26": "4sVUABYRFdbPbEQidQZw9WYiV76gBh7HbhyDbS1ZKQPg1LQvNcmRcCWaD94LZ3rEkn8ff4xDwG2sGWKBiDHP7QP3",
  "key27": "2tyM7kggAQ94AJSgrR2R1toDyJS91qgNxYsJ5aYj8Gadkka4C3Voo8yCsn2Jo9bBnmBxBRaEVeZyRSDxYqyGUNE7",
  "key28": "2d3uYNAc4dqVA8GeFqWngu7WztcDSNMzTack5bTr6QE15EzJsGxtQSSpBTVv6ZGCmrzcTU9ipwTz66Lpbxku5ZWk",
  "key29": "Tb6y7aA91F9wjBNUsgpnTwjV2ArgZETz5iqz6ptyoHBFB6F4nmHKQ6zsSC9K5tKpHRMyUFMoCGjUCgJvD2tRCtr",
  "key30": "3Cm62kNbAY4ayTz6R9s1VTbEGAwjQjEWWtkVTJXY36ahPhsfrb8s9aYkAzRuVe2pEi9ouaF9uTU17YNGMnpVg6bz",
  "key31": "2Spd6y9stcZxFwGudVmg7dF7M4qWdRGnBG7XkaCeDdXJfYh1dxqxUrsgTrF55TZ8B8jH7i2kwFVDgprn2CZgo43J",
  "key32": "56BZVUdbNQTDPMxgdvqxd9ZV4gThXnshJynjxQ8aETb5qTmXUA1VsJ52ou9gKUyWySZdq6sth7tFAT8UU5qumZju",
  "key33": "4naQUvNQkcfegkyVAvmyK9B4nc2dLKdFiQiopzxfpFAjnkHFQDgQF19x5c2n9TxvNZF6c2xhPSAZF5u4v3AyQLwf",
  "key34": "3ywkREbEjdSFfFCrBzu9P2CxKJUb5zVm7rkHUKRzHcpHtUbc84fchGHnmTMCmLHdzVTNWGNkUvKXMzRW5hRUg8rn",
  "key35": "58zYaiedputDKvYv1nfUhyXNGSwxWdDA9zsT222hWQdgDj2UZ64RyhJ9bkif15bfRTrJJdeNTNQ7qC8im2UU7U2E",
  "key36": "4pKzhezoipd1uRMNht2atCZq7sWxEUYvgLbHmiEBJCkwoHbfWmtRhHSQ8QbbeetHkeUy242gpW7Y3RC41EKHvdA2",
  "key37": "5MxEefPZu4VtE24AsVePPqLcbHssCpXRP785Y3kV3KWNCdxaUXs87F7mUiyiLVJRPbgabKv9aNWpSxJDXobhWfbc",
  "key38": "4bX46u8F2Cym334vt9x4qKikgyUKoBDJiF46CQhp7xgt7gCmh1oU9CbY2MwnKX7kbb44ZwWBWW1GEfQD6JVLJHxx",
  "key39": "2up1fGt5CKisoy8stRf713cT8vFFFrRaFaFXjy5ARbiKenaEvTp4911dZXeErS5KAJVydFWTbpSxFPmhUY5Jyy8N",
  "key40": "428woMSa6qA6kAfo3pwuFyiyjWEp5pthKmXagb9cQJGnXT5jQsSC519sQqvn7imTfpY5VRBnnDEjVNJ96XmVLHq5",
  "key41": "4F5fk4WzSeHpAjGtaBEwbQmjfYa7QwqTJRfcAi4FDJLomH38qWaFiA5bwCXmpns1R45J4pDQPNxrSHvvadMNRJzd",
  "key42": "2AyzJEFd6TNvNZQwSizxkMcmZvMSHZ6i3dGh4yyL2x1GoAw7XdKBHMztsuH6Lb7pWY7QsjzZ7DVkyNZ3cD3TBgJg",
  "key43": "52xi4f2KtAmucWJ6w5KG7tm4YhDtGw8rRqMxRhaGEi2sn8sKCFh54KBCGZucRrNCYCxbrVNzayxwCpL7C9aJPQN9",
  "key44": "Wev9EKeCidpsTedRahz86xZ1B7xP8uF4J29Pwcn4NcFVHsZwvn1JoX1XqRoXPBkLH1oQUuHKgKnP87XLRBeNDKj",
  "key45": "2CJVRUvQYtZejsQaBJqnmJUkCgB1s8MTw1gpSWAj2bCS4zinACaAJNRYBnN9GZrwbE8kjEqumFsVGs778J7gSh9B",
  "key46": "5wm3e3dAyZdPkbBEFF1LmzeCuSfcNXVWHoLSiiWeSsUKy3xB1twVdHhTP7uSiuLt9iiM3YySyFzbfyUACc7bseyi",
  "key47": "44CABJxVYAPXGzzyge3WUFMYDy8sxYRc86f5S43YwZLJ2wDwhftr51y5WiP2CuJCZGJHMAfF8Pgonq2e4uGPZ9Pv",
  "key48": "5nZMXua22Gnk3NfqkC8SVVkCRqKMXCP4fD1GTHKEzhU2EsfFKdwiiwGLBBkhgsi6SfvdhysotsxViWwMDe9qoLK4"
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
