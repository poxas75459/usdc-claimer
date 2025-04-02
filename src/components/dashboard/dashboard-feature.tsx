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
    "59eHDJYabNhYDPp5g8hwS6rxPxyUFFQGMpoyjhEgnoBt5eh3TfBjwxcUjgrUTkbZAHVGAnNEBAKktk3HrnVs8C9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pHuJYcBxzu1BAhxTPDbYirj8tWZqK45QEv5reLDov3EdQAarWcK8EgieHFSjnM3QeDkLQtjffSxgfjR7daVwUjQ",
  "key1": "49xLKKGg2GQ8LtE3Be2qcaEDsvycq2WuL9zup16SJKDC86fRoDMHYMuinEEUaeSMuoyai5F43JofqEgGMKLfVAtQ",
  "key2": "52BvQu4sHRC2kvazt47GkKDeRCPTACei3nsXcCQNK6vob1rGs1GfevDaY2YPr1u2tWaEoXVPLoZFkKDZ78DqsJdu",
  "key3": "K9S5QqyEeyiLsKDCRvZsNkkRp9oDMo8YgLL7pNrLCoAvWaT8VsDfaZ8mztaxbzYN3zZBhKVKTW3SLXbT8uAad1B",
  "key4": "543X7FJhXxwBbM5bhPxtsRCRUnCMndfvUhAom28pFonHTpBqiEyBkzfYbF2npgA33esGdS46zbbk1kFm6HhcmKYc",
  "key5": "4P51aAGFA5cwqeWJY9BPVDopsAMyMPaDA6w7ozRrm8mehs5XpM39NycMJoJM3RYNGfq4AmXvbJfjaFG1DMuiwQht",
  "key6": "3oeH1Tqi8rovmrH8nchGfn5o88cufTvA9rwWmJ98UA2w4Tu3ejc5ecdahjq47AyTvS41LJZ7mbTFgfPiwSY4K9jT",
  "key7": "5Nr9dF7hWmFLq91qwGkojQSjjZeneysLjEvK17ruv8e7VKXCPpV26pQhcSUziRNczvHnnVsoG4XiuLcZBu4YBJU3",
  "key8": "3YjkEKE5B4zWD3FEgBDjqSTBW1dMA2x74gZqEoYjiTigk4xfdJnKna7x65rSLasCyGFKVL1PKmjptrzaRZ1dtDfC",
  "key9": "2VGNeGZG5LUqZSdwL3JuAygcma6ycZkqpFpHxsALyBkNUK1eJHthrv3pi4JuNpVzBpRQkneLdVkFuFy6kpXkFo2",
  "key10": "4MdoEi3H5sVkM289ur5Gt7mDnrvGwyarnDNxWTfy4CtRcKqxF1iHstVuN1yTi5a5fKMHZSKHY2wmD4Pq13Ger74y",
  "key11": "2MWwVt37U8D5PNjPQ4htyoDTKd29WsnZFbdh7K4L6pUYG3iUHKnSEfWkhH2TuNfhwphiP4jFjpuvrZeEK7HaZuek",
  "key12": "5C2KN2diNW1JTAavsVca9jN7AjUvMwXLvwfmUH5TntsYNLfWoFk69zRqDf3UBjsjCEwNrLdqNwrcjegsXrQzvp51",
  "key13": "3BRL9xdr1zYu66UQyEfCnZgNxSxWTq3fUFN4fsvLcSFXQQJsca63cwyVAnXwzNGerfetqfpLWPZtY7RA3CMyWTW2",
  "key14": "5ZR57B6G8f53NuGcsmWWWiLaUhghoYKE2B2JF7XvgWLPFf2C86tCtEBdPTBtZJUEB4G2E7tEEWXearJFX2avNAVw",
  "key15": "EANQfiv77387BhLAecLWtZdwAC377f838HJmWwmn8DNAc8VJfMLtjzSbuBczEpD6zhiRD3ygeepukk2h1pusFCJ",
  "key16": "bguktrcJEAWS2EGMKe6XAcRcaZarp7DksZ9mDCu3PXbAK7d1cNTaD2YAfEEG1Wd8eEgtuRbsdzZxkUqC5PE2adm",
  "key17": "596HEyAqQe2HeMKvcFE4vdZd3zDfUiwquQDUrQtZ7ikkfQtG5aib4zDR13SWXJA57vco4WTkRK63Rj8ABvwCvdgS",
  "key18": "22FXhhv6RcXH4HVBopjnfxJTnAaNJtn3J3WJszNePwzZw51SN4Hr57SFEXt7qRtVmFKJVC3axM2PAmxnxppr1cyN",
  "key19": "3pG8xLJnvvTJpHSDePGjgyDGDXU4NSaN5ru5oXRWa4Ud6S1HQTyKcqCT4BeowyDUFQTDD7tyQoZhdaiq98VjyQ2p",
  "key20": "6rKyLP7FqVgjtW4he5EyULbAAd8N4vteM6Cxaogf53zywBx1xD4YJs9wBaYLspS3jkk5JCg4wipiRwY6wQ6c4cX",
  "key21": "1dRP5q9ViomzSXNXB5GBjyKWHEckt3kGUoZPnWZWvWmkirCa35NosYjLf6K9CpehxBQ1qHJwBKs7BZxo6w2qZvj",
  "key22": "2CxYpscpV9hQENuZ9y9saicmDBYzQxxu717c4pDqpGqj4tGf8PeXaDbSxUfy9suhBRtoUxp35NU32skXXosYpmTR",
  "key23": "EXLaNF2oq8Kn6ZUEEFg54fEQ8FUBo1jukYPuMh8GCHC42HfTx9CBcVtWRagB8qGuiXtyVFNgsVTSwHn7KHZ2JH9",
  "key24": "4qWoCKtd6R59zYu1y5HPg4jnev2WwE7nBQk72Fw3e8cLbdsmhVi7TeYJfzJ4g46sG1B3FrSgausbvDN59Gv8VmsF",
  "key25": "4vNGWzUmvDTLDJkiKZvgnDuWAGRaLvaj4YCbEHWS73K7rjiDRD3KZ6X1WLQNCwyh2u5FoNTLEoEgq83NofCuqdsp",
  "key26": "4eCbHnKzpScj4J5fsswvBYp8UWoqQbT1avovRWqDM6tayU2VP7R9QrjNXyEzs8XQFHnUygkfXs4XC7NDaA2M7jic",
  "key27": "rqoYBSgJtPGZBi5SmjHVXYhDaVs6uk8yXcajamr1duuxThzZcsB2uGTvyiug6BSMhgxUAgyfSqv2dokVd9hbe6S",
  "key28": "5SNxiFo3EB9jXFc4VbvBSXRYBLvHdAmt9Y6yHibmdP4w8rZtGTXPb4wR7BeCyZW69KzobKkB5cB9SLYKrA9q73Rq",
  "key29": "QdupYfYmFNfzUPSvu9Kq3JPp6zh7YkLAEPBNM9eSy3tyqKcmPRR6bmLwp6xyRnNVSiWBYzNCthDp5u2NZ24m8M5",
  "key30": "3cp1yqQ3ZqWvaWfVMhZM4A97c2nwuyfz6XgvJ8Smt1Lip6SELiVWDxM8fBHGxeU5NkeS72sGpXGP51fFcsARngWW",
  "key31": "31ef8nuQnRah6yKXppJfrvUEFdbPUfyxxpGN8bPSKhMVeUgPCUiqkxhRNvZDmzytnSk3mzSKDLkHpqhsjBf1aGAr",
  "key32": "5PU1iBBvC7iKNfpdrMWFwXHncb4So86Jm9PwoAStQkeBhMY1LJgPWEnUUfPWzqhmvA7PvDntCMvmqRPgKny81Fkm",
  "key33": "aG4nZF3txiC54DRU31okGkWuLiKXPJD5B5GbuqwPR2YsTonYf7nE1JPsKZ9tYeHafCY8oTFAB51GahqZMQRZhka",
  "key34": "bwEuFyo7N64U1gSy6tE8kd8ieACfsQbEqTr9rnp3zpq6fJukdUJjN38yhgMktUJuJqPoLqXwaSmmyG1E1Fo4Hns",
  "key35": "RseqHTqAAdW4mkSn7tD98PBNLBj3mKHRtQYtRb6RC3igUjtfSokU8uTgrYoa3BhwCB6BqUh9Ls9QrnKjgLThqjg",
  "key36": "5QMvbgTxR2d5UH7Am8ks3EHeA3m9DAmb52oe8H9Wv1Rgy8GMGLq8YDiUVLRGT3gpaD3jCQESqVwFrTMXc6HVRJqt",
  "key37": "5K9a2EF4HdqEHHh2BZ1sAYqUpWaeFGydGYcEsobq6hRLEBrwceHWzgUneKY81erm11Y5YrjHaJ5KmyCtucxFgyKY",
  "key38": "5j4EV78zBr9WL6NsF5rVBCD8JCGXo2BQcquf3iFDKZQRFr51iWYQD1wC89verxvAxLsZEptVTkvm8TehbnR1uXQq",
  "key39": "4pr8SfxUQ91Dh7kMdrjYmdbYRovkFMPMYvt2emAUkpf4AHt1pAVaWXidaP5x8bUKvhNcc4Lj81v6USogF4yJ1BNy",
  "key40": "3yjGKntpLahTJZ9VMJv5TnjuBTpJoWkZwvxzrJqbq2kJ7rWNtaKaFim2NjL4ASnMz82eEprR6A34zZE2nc1H5omj",
  "key41": "4Azb1JctJPTHEX2aHbQiMr8nhJnx8zMXNWeiLWCwqXAsuAY2UWyrCDtMriVjopAY82Uytz8FuY7wbycePM8ejA9k",
  "key42": "64ycZXM8EMTFhY9wwE9Sppmmfywom8hWveWN9DZQhaNwTesiAE2JWZsab3rmVuPqyvLm7hhp3JJhqbzVR9DtgCoE",
  "key43": "3o18ctJyjzCDyupTAcoQidvcqKUN8ntySK1kwnxX9XyLUxkoWL23teNSHUiEZuD6zKXjWsu7jn6a4C2DiDeV2XuB",
  "key44": "5w1nfYsh19UCK6ca1cq1kbQSbNR1tnWUH7RiBrhj5K5UKkq4UaxYYq1RBCxUMPbfsPyatVwuteyusXL3iA75LBhW",
  "key45": "3iK5qi3AvhpPP66gomuGrCbMiSJ7k95AaWrrrEkrNJwg832qgMYxTqpDrqYLRf95hf5jVReZSvGsBfnX6dqKGzyx",
  "key46": "3PuyJn4BKuDda3RRff9hnnZp42trneuKaoq64cXYgt8rKLssDCBL9dRrknKQSef85QsFGjR2iDQEp3yUpQbtbiXD",
  "key47": "4H7PAqVvecYoLK74V3Ms1zWH6NLq4zMSueJ83w916kFabTYeCaGWe8gTceKpjj2pNjmgTi7z6CPUHbkA245GykcQ"
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
