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
    "32sg79ArjUUz12JfVb4qW2f6qxECVuyphiPuPrEtLDcTYqQ1Pjn2AgqHbwyDZVHWeH7FhqW5gVYtaNYwr1VW2HMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EoyZDzTGtUrH8XdupM7XHiBhKufmAupME1VqiGNtxF3b5kvT4JGaiabKsWa2hK5qCuvWRYwvEwNHKmhQsWD6T7x",
  "key1": "3Wkx5wdgjaQW5tcajMtejtBFuPvvZnPh9wUGuhHe7NKiu2SP1QLRCoQj4BRHkavvTTMNfdRh67GkskYju7z9iXNg",
  "key2": "dx8gNGJghsyoEJp9iWrnjj6oa3Hyj2VpxRBe65h8WcF7EZZy4eQHdanLMfijXkhnzc8KLgpNbmJgh6ggWXRey25",
  "key3": "2Vzkckpfnb4mQCbjbvCkXahf61496YfzmkabYESDZJ59FWaW6v1wFWZmBFVKxYacw13MpFFS9dHNJ8g24tTdvaNt",
  "key4": "rsdSv7us3eCSr7948bGNxf7JuPcgRYPn2Ki6s19tC93q6hZ3JhsF1NWhCcVapxSQBLuw3DBVdhqwu4kKpdYJCU5",
  "key5": "4DusJSksGsjUSfsFN9RimNd57fmkmdAVzagmqWYySV7vLtTzuLWE7mvrJApjShADQfgobU3FNTyiJc77LGEb3piU",
  "key6": "5gh58uzPjJ1KLcAFvh1b3snGAJQVYHVEnRNWdmn48oeZ1aKUj2WHFnERshYyUDYJp17To87TWNcqAgSV3P6vqNs9",
  "key7": "3Jzo7UJDsQq8BoHuaj5zFWTjJFewp2sACifxoyfg3NAje7t3FkwbNDgJFFBJ4CBc5sREcKu2sucQnQzrxC5HrJ9Q",
  "key8": "2hX81MKnwydMAH59TEu25CPW1mnupqtqM7GPa4kGEQFS9URPQsqYnP6kyxbcKtm8wBKbaRMc2cCUoRN4fg7u6MYD",
  "key9": "4uyHz38Ki4AQ8Ex5UyQmDxZCifcrfaRXwEoYvkZ9R4Q68xeBMEVewaSBerNCg1TLYj58ZsNaHDhGTBbrkyGPNhYk",
  "key10": "pa2MrhdyQeWgntX6UnDc4ehF3svJeG8WfhZpNfcs1GUQwcSEP8aeHDfqt3gNN95dukmvLSsbYENZUuWwSwnGv9T",
  "key11": "4TypaQU7PyPdQdqzcC6iYAsRKsKajBcejkW7v7Z1WPuHibCADLL2ZMALyRXyNuQzVRYftSGKmiP4KfXUhkAfM6UD",
  "key12": "3juKXBQTuZvBe2y1Em6iyYoFAuEpSBV3JTM7RF77zed9QpBm7afu1P7iCvKCLCoPS1sXVeSsT5DTKRRyyXPmN1Ci",
  "key13": "oyHgaCDiB9HkxcPgUddJfNYYnZ7kqnhvZN7tcnUjsVnsPzDX9x5CvADNDJ6hBnWUXUbFyyhoRUgpJ2Z9KLgcoM8",
  "key14": "5ccgZfdLmr9PRMCVhtgNxy7jNbfpdLaHTQmTunXR7PuChXGy8jhTif5S9gTKHAW7DY5dyWp2aqufZnB1dp1D9xnt",
  "key15": "Bto5345PL8Tp5k4hWaQJjoRXnCEeJDBqCsm6bvqp1ji5ZLvNck8UGcGdUJa2YU6TPJfye3VjQ1NkiPivmcqgKUK",
  "key16": "4H8DK62NHvpy14DN63Aa6fmiSofYBa7eG7dTi92zrJv2H1fUXqoqpi7duRkjTcszeFL6JARCkq8iLZc3X74TCrpz",
  "key17": "39VV8H2Yt6z83A5rDxwpufTvfM4juS1hJ7vCZ467UQekTBG99vmqkv5bQubxP63xnEFKrAPCAZfqj5u9ADh3zpHy",
  "key18": "B669ru7qjGtmm5npi6hLroHfJRMrG9bZP1KTwvZUxVF19HMxEnUewBxSLNKUsBeygFCLVNuZ4Fkn1WJGkQBfzjN",
  "key19": "eQrKSMwAx249nxen2fFXRZWjkXc1JMqCP11gF2cWaR7bvMxRo2DjVyhNRaxgPwzRtQg9e3P4kBf31qNrpk19WTV",
  "key20": "51A3fH7VXu3EqQpRVPfiJcm4ToDLNga6w2xAictJMt2bzXuoB5AskefdyxQ6NGPEGVKr5WLuQwK3PFps88FDnjpW",
  "key21": "gg6WUVQWLcNS7CbCQMkPmqrRfbStNdbspfVr7QedoJERDquZRQ9eJhBhoK6diZyedzT5D7DEKs3Q7RVv3PkcxXT",
  "key22": "2HuDUpE7TQs7oReCirQ1t3A4Podb1HpFMRh1VxcgDPJ7JkCsNitZjjSuGCsz9Kjj2iAJmx2RM9xZhyLP9kGstoGc",
  "key23": "4Br2giU3syJp2D7d6CvTyUFoLD1EB3TRBqqywDVZyfrSYtjbdWaHU8YSfL6LfiR6ticCXs9Z6VzB4yHfXXoqtpT3",
  "key24": "XmTJyYYei4XnShgoHsxytAVxRjzcYF3bT7q4ndzVZsMQoPW1C9DvTN9jzv7sPYGUaTqwvF73EiP6Y4fSekC9Ukb",
  "key25": "4Y6nePHvxRSL5ma15nJ13iURGNU2UcXhR1vEot9hPfaa5prhoG6e4RZrf1zC7MoVSnUKcZNBGHe2fBe5s3NYh15b",
  "key26": "3i2EVFBNDzydapqwB1FWJQ1NfpE8WBnHpbcCRYDTzm5TArKsinTBWoPTJzo5x7QHAv6m5RbLKTRpf1LZayWynVdC",
  "key27": "3WhurFpaKWmZqpaKySgwnAJuWVkY9oy5LYa9GXrSZVjq9oBpE64NqjX421NY99umTvhPtbgmVtzAFi3YDqDFttN7",
  "key28": "rS7WYvzZh5mYmn5zbPRbeE19KoH81AG2ocXMTYxGA37vG6mtHHq1hmdAvatdxUvQ3fWC47L48CGPSWqDFr9QAge",
  "key29": "YAj24RteRgpNQ9PWWpNUKvUSuTbuxf79wMrjNvbrXBtSiVfdxMGcVmccCWZFxsKBTz36Gkho2zwS2W7qig6XAdk",
  "key30": "67i1TYKodhKTVkLaf6JjgvTyQytvekGTQySdaNLbd1LfCh5Z3kXe5Rfvp9kxgze3zjCA5AjyKw18iYooBbuSPP5P",
  "key31": "3VLjFyCFWNj1hRj4u4ZnGL7AGEYBwnu3FyCXQ8AeGSXhqSDjDxAmoWDM3gSTjtW9AgXUnSqRceemS6rcyLag7z3s",
  "key32": "kf4CC3o1kigtSHJktW1Wu9ixhQgnrFgYzPQdMHdBj8PkPbrafgxhgx5zSuYPDLRPPEXgSYqZ4FitPhkc4notZr1",
  "key33": "Qu31aq2jqRMTFwbpmZuXrQMuTjMcbSq7eDFikmx5ae2tY9LmbUuV3h932Sii8stZXeF4tqyRUEmvwk6CBs1ueev",
  "key34": "3ThphmofGyrQvubKR8Tm12URsAE9GfQCjZGcHxx87KQuJeq3W84J1Fn5nLgFQwZXdmTfHrhqrw28crkKWrvwR4Qn",
  "key35": "36CofqXvYfAa2DNYnk1Hz1HvpkpUyDeAGoyqbAM3V6UHREaGd4f7vNCB3W5BDXstZBby5icyvW75aufkyZejU6Mt",
  "key36": "3SpArhPS8qXJGH7nvfjnz87Y95GmCzeGYdp2XfyPRuXbDWnQRBYHJmzJhEkwoh9RqoRSmkxX7mBECjYwnnGKxLgz",
  "key37": "3gUJq8ecgeb7gG8uDgBWkrgKU7cJvv7ibAGepzZYWoupGfhGnhRuiK7TxrgZPfCLawRf4uXCrAX1btYTPVn66Emw",
  "key38": "3eDpSzk8mFqrsrK9MCh16jVkn1izgM6hAYbSWYcrAazkGXBdkj7MhjoCpPe3bFZ3wi53j1berc6BA7pBxLgWfusy",
  "key39": "3DJvmruK55Z9MJzYrELVAwWJKmSFdjSXT9HvxLdy6JX1Run3Mjcymd7prSjhLCvibraunqXbEcW1dxjg1YH7NjAH",
  "key40": "4Tvoj5P3v8FVAsc4RvL8LGtKtk97JmCP18XmKrvRd2APaWMGxyfM7j6wX8faWbj2tyaQpdadYHW3iDxtVQjwkVie",
  "key41": "417mVNQhcDGxsNFDn1XRUJWhSBv5CdoWkje9EZTAqQLhzBeX3B72ptAEV9CAo7nFue9AW5nC7Jkg4hRNfTAqL6WP",
  "key42": "521C6o6bd3fNw3fb93E7wfuontBnbX4Kyu6g8LerfgTLmt7QSDA4wmmqUB5vdjSqkVscCCWNxJBT5dinTR4GZora",
  "key43": "4cRHZ5sbcj47ysrpihRGLGBr4uYWvtcEqhWacq7BkaTDahgDe4kDE87aCDLEgQdz3UaAVGnGYBKYjNuPBWR6U6HW",
  "key44": "3UtUQmWQzeHQMyWNn3BG6D1PrKNihcC1ufQtsMDoYw3STEGWCEJqSoFjgxTUZ1jFE4dRpTgxsu6bSRphmMrvrqjo",
  "key45": "5KfZrgtDuuoQdiL2shGg31CgpRjVE7i68qyoVLCNcFkCd5raPzyfkwSWr2vqiX56xkjskgBVdXnpRkyb3VcYmf9G",
  "key46": "2oU83W3q9bnFNaLe2mGonNG6639dTkpbVsGSF9HADZx1CVe29mxafd3chSdrnEC9SXEvVG36jr4jLAPBGy9DvdXT",
  "key47": "5nRnCVzQ12Uc7zGJTNxHQswXSMHCQg9icWkjHFCgFfpMtxrceN4sZoQKUPYn6vvJ2ptGuVAFGyG6NuWkdr7X8ck2",
  "key48": "3YgHtUyaickVr6gPvYef5bX67bUnopmJGtjp1h7jHW3kSu83vp8FNQxN52TUSA2Nxds4vzk978AZ4NWSKH1gjn3a",
  "key49": "3TT8WxVCwJMidJ7cS8QtQvTAQp9G4AVxEqVbgBNPAV4mB91Dbc4VCErHbHbKw9AbZ9cospsmTFCrHc38qsqt6iTQ"
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
