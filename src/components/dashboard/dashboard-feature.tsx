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
    "gYypZ2GSQ19m8aAQtrmBBYveycVZ3sf6YmLYfucx9sgz8wJGG9UGG16eU1oTdFYTg1sLjUoyV8wPqn4pJQpBnU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o8R6cFjoogxfP5aMHcA7gAipZHvbLGBgxx8HvkBGjAguf1VysLEYwgTgUEK7BGChJzyJK5EVN7DrLh1w8RMDRSL",
  "key1": "41sNqNWyEW2L9AeNT2viXhzUuawADH7zwGrthr2kZCfrmC1U1dzTeStJ24KYf1keUMKX3aLtdYMFbYiEvh1EbhYS",
  "key2": "4J5Vdnj5LnWrFRvFve4S6QhzzjoF3a7gCYgfDaopwo1BpLQPLZ78NDR93VJQCPmjqJntgrG41N5njn4qB83LEbez",
  "key3": "5YRvCcqL2a24rS1qiiu5WqkrVwLLRMKefNWzBcgEDcvCq1eKYws3Rrjxk7uT2KqQETiCctEDTEaHcs7okFNmq8Km",
  "key4": "5bqZQFTVQRriqZuZ14u5TDxzvgK39MmeBzjkns12ZKzg7sktqe6miN2GnFpgFeDr32SQnUqYkLgtKBPzwwzsJBfj",
  "key5": "67RYA5iimcDZ6itq4erSarDuPJ2zhmjWNd51iTRjLjnCfshaVXdDqfqanrbVMvCspPwTUvTh3LmtUyFRUwTJd1mG",
  "key6": "3g7Uoyo6hTPHzQ33vr9uZ8mVG3YJb7iW5S9WA9r2ZH62vbri1Mp7F1VxbMguqCGPKTa51cR4b4YWxrEUif45Zh1v",
  "key7": "5nnaxbo2WF3vepiGEJygwhoXD2uwCDZs4K2vKtqyioQzikmpH28NVzZdQA6xMohh7QHKyrBLezGkLJg6cdkDw9PD",
  "key8": "3ttufiekNw2z85XMQpkGEBHm7gTQBohDTcB26bhr38q8w61Jm8d3dKZxiRyvZvfxU14NAa8uQqD9sjwRbvr2YiUa",
  "key9": "3KF6Wf6iRBZE8FFo8hVDkmBNKePZXFRJVQWe5c9K8KdcTkdFu7XkLPEPqn71JXJUq5MooCHPJ3KvT46vYZR8gRH2",
  "key10": "5UQ2ZADVnZWoAQd38QRAyFj5Toch2dqT6Hae7P2hid3rpU71362jEfdGL2VZpSKAdtVTXFnVwyoP2jeLRYSe8UgP",
  "key11": "3Set325PPvxhFBepruHZS8iGibJzxmSy2AptJLf94Pe3sKqWjLy9Se6XaaRTfR25iYp3xA2Z3JioaqWVgYrkJjAn",
  "key12": "52x7jZMMvKQSNFMBvjpysgRMSBBN7P9Qympthd7TnWmWRbBz6dUqN2hXHBZPJLojF6ZGvKFtComwqLPG5GPB3EpY",
  "key13": "5VsMEsEoKgtQMYJV9dbiHV6GxuwjGc4kPQCXA2Bk4U4hZBmksmJBxWNcuApt45Rc2c2tPByRUXdWgJ3GsFRRfsnJ",
  "key14": "v876rohFhq7VZbGPmGQBBPFNkxGMQ89GsKFP8a4KECiVsw2wp8SokSB9fg4MKToaFpVM3dtJEYqPtZX2bgKb46N",
  "key15": "3wvVKRbMkHVuHrErhQ4qr1A9MGeSnVNkSweGQk5ahYvBY21KqjUaBHPRxgXij2hKx8nxzirDdbYgNRE8K9MqSCw9",
  "key16": "4aQKM7acwhnrYaHg7WNDDUpocZqGjsyF6q6JSYtKFtN6kmp73WHJVwXEPWJMmVTXCaDhT8Vvw25KtjC8mYvJ6NPx",
  "key17": "5U94LstF1x7hKEEyC7oGeSK77fu3FMH8Hor4c4xXKhj4oFT681DGLmsAFxd1SEx1rn4wug5hwL1M44g9Wp7yYcCB",
  "key18": "4bZKZM5hhV6jkkyNCWf1NY8v6sHALUoQQjtxng4nxv68wirVC9CDmCTobASwxPcx151vh1JnYAcWCDiqtqegs1Gz",
  "key19": "3gq9ZHaMWnTkEuq2mHc4vmYAw4PuAxUrLJ9cxxMM5H9XBouxUKDfWazbh8fZTggt5aX3gCHp4YAW4eKRC99YZABL",
  "key20": "E3RSMBQoK1GS62Pi4gFXdYn3fR1wXjU3dxmZohAVUwKCVYbaH6H3aZBNGJKQZS9C48qPZ5qNdjMns76roj2xmya",
  "key21": "3GoRKadwznzGFC9fsBGEkX6QUniV4Vf15wG9oYzke8pE9htoY9nMozR49uSDrZXL9XGADXmSvHsa5J5sPyMx4NZN",
  "key22": "2oCKqS5oU1WLjPdVX7z63eERpYnuv8zeSRG2zVcUMgyen88rPtTqaQK3vY5TdMMQmHkgLd4h57UjWQm4PRpAiaeX",
  "key23": "e9hBGmmMFYYhm5LiAgnUkKTnSdddihTGC4vbr8S7vKbqKjdEMMSTki67ahNKLDA9FuJi2FwdXzcDE1pAvqRLGNw",
  "key24": "H66gk1tnin1EYFsnpkyrNLNhhES436U2n8EwfawooL6qvKVT1PzYovYsgxGZUnD4SQK4pvWB88pVFQ8ijGaioau",
  "key25": "34dBb6qXJFiSBt74xCrgmF7sKFepT7XNRn1Rd3QeBGjRsbrzbmaD6rVSzwBohmkyD13XR95gZbZmDNershLRiajc",
  "key26": "5hLUYToGT2Qggv6tNwJXS95n5MbpXsrPzDazHrwovoMbqmFsZ8VqLN1sF7m8oDeeYED1mECFbugfDcivtEW2vp9o",
  "key27": "2Qpp15NV5XT8MDNiBUKoY6ThH1dWvYAUEDZDHjwvvfvdRTcfXV5P5oWaNmvw5n33gHrYyrSWKbmUuymm8YM8H4Ke",
  "key28": "4nDCXHsTFLRoczGxG4w82Ra4HXApu9pgqUCyHU8ru4raub4sss41i3mD8h9n99A74bQHwca1uQNXo4u75mH9xFWX",
  "key29": "347Qh3ZewTTzM2bkKRR6wPpSNPvg8zSkVV9Z7QCk4k8Ey5KRoJLVKHbqWQZ9Vjrxi5uVXqCTXgmYKcLGyvweJCfo",
  "key30": "3s6bnPSyN3nPBLN4Ag4Y1o67oewVa9Usm5DAFbayL5Vwbg2HwrPW8A3ga5VVMWqQpt4gT3ZGMZpAJ2xhb3LA9ctN",
  "key31": "3SNxs9nWgJPtBzUzBJhgtuddVkkyBteA6oLPsn5bsF7VVZUg2BQdwTQyJCognuXPbSB9P5Hpi1aDZjnLU4tnoTTN",
  "key32": "4SEv83EERgfd1rgj4tws4G1LZayy74UsWizujwVUZZ6uK3CfZVuEsPeUuiHGCfKLVHF7ggzVEiA4WeDXwz4HZ6Am",
  "key33": "3do1FSNhzT4mKNWceBtYAMKtg8yS1MEwXccPHqHcKLxSHB2v1pDA7RTmYWYyQoJJC2EZ6kQ6argZzUg9ZpVgVNrH",
  "key34": "3iAWUaYLkjSqJgo9Zf4ZRcax7U5SxMswkvM6jGumfBpBn3aWQUrcKpAWTeDgbhAZ3GjdiKCKuftDghbfpGnt1NYF",
  "key35": "5G8Fmhb8K6vrSeo8fvgTDqaiYzieieNpasJodDijB8DQEXvu98bwvMsMZsoord96ohms2Bz9SEW4ADDpopxHXHL8",
  "key36": "3kKuvWuqr2V2mSEnFTJrpYeWmdJvtp5br4TEKHd7acpbX2sVWwzYAC4BbvXdvKg4dnFr8imanrhkVXkiSZp19fCW",
  "key37": "2BmVP42jP4i6YFZWZaZnb7SKYDWkKEEJjv8RWXEoyjMFpRtpTqJ5sPuHStz93JxNqJmRzhvoF9zzok8RSt84AgCj",
  "key38": "4G9ZTzmLVQWZLqymjVzRQgX7yERaWszuQbiPVp9bXT6zSyqLxUdFb2GmB5S2GNHnF7MCUddFSgwyQirmGCPxRrND",
  "key39": "5F22ovDUFmwTN7bVXid17vtJePJDzvKsYKTwta8AGXcYymf8u9DsVamKgvJU8S8SPK6nGKS798V9HRRCyPCFc37U",
  "key40": "YUxWJ7xQf2MrBA6q3YMxCKokqVuuut13wEsHsaSYZW9FcDVNc49Cze4J8wp7FDuimzQV7gBRx4xPdtbjx68VZDY",
  "key41": "3ubyyRVLnrghsa131XWnuQzgHjWmdeUayJuctJgQXjSeP7k22J4GnhTSCF8v5Mi49m9XG1YKBLXPWfiYEgg6i77v",
  "key42": "5V7LgyG1VhmYebw1NfzjCeVvRyj6Y9toU6LTRW3u6L7cB8GTxHnMxBxReRFupP2N6TwWstRKaimaiUt6LCiUkBrn",
  "key43": "2AruKBvQ5uzwRbuutAtspVAaSHdMYFFBf5LazcFRB3qMGtQEZ2G6eDnyZKZhcJMQSvHgwnEDyLZbDaUFzAiXvX7b",
  "key44": "39RQncpRnkNHf3HLXeTUaN2KjJT4EN2yHda7KXfoccLecyPGT4vHmq8GXSGndakUBrdGrPvjYUzekmQVuAV4P6Za",
  "key45": "52cx8ifHWzBeXfmQFh7Z4Z21aj5MKE39xeJiDAbgbtdZFHW2c9QKPcVF2VZDLb4B7v5cLWi4XAnrLzXuoVG1x41F",
  "key46": "4DPYVhBnPfzWzZ8ygixymuy2xutV5k2csQ9h6cCqqs2SpRF4gAjkzcEEnTZtArzmFtpe3LxRwQ3YrJoTtj1XU7mp",
  "key47": "4JXhDLA2dUcyyVgMfWP9gcHUJCM7k4mdpc7Re2MkvxHs9CrjnWA7FMZjTtfc1MXvZkyqG7tDEkHBmPpeZwdvBbVp",
  "key48": "4dymUMe4cQbjFugLYkRFjnAVZJHLSutUReQo5vYhJV3qVRiZ5SihSCvz7C2KzDcU5fst8pRs23EMckbZahAh5on2",
  "key49": "2mtnudK6UeE2v6k1tbhGvsHR3epy7qtWz6ky3FqtFpHKs45y73JzJUQMDRd1EwWkrLUiWPpkgemcxcsxbJjoWepZ"
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
