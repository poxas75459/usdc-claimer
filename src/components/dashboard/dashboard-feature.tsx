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
    "pn7vJ86Qgsr7ndfG1v978n7V8DeCo5pWmeBhCK5vaJMQJkFyTGrpwCdkieLz2XTcXhDQzJ4vziTDnaHwMvEyvar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fbt3iVSGvz1o1vcyqU4xdNa3PT2oNmhU8gf6xyKNHDdpcpnBNmiqh5FBUKkUT77532MuDT3UJm2hn2mkgwpEV2Q",
  "key1": "2VKs1TnPoRp5oQhL2qLhwyFXKqtJTfpGfuVEAxXhNaxnW4BXtfFXqYfuRU8ciRNRC7eZiQwJ1WcVxfsGU3YYejPH",
  "key2": "oAroVtA1YpF42SCa8wJNCNezYwnuZvT9PbqE25ZCJP539j8hY3cqmsjESahRhcT4TX66vdQB4ZXLaAgtJLemDdG",
  "key3": "5NaFjZ1BDqVu4pVVtHW99J7gvQhrdkAELRqZPPwJqRXX2SvwzEmXhWqzmoxuiLATinNxJyv6gjLYjgeWEr9vNjVE",
  "key4": "4U662MFtxzNqeCi8rZ6Va4nFuCCwor8mWqEu7NXNxDKRU18Gq9eButrhyFRepkcLu35Sx4jC5Yi8KFr5CZqrEzrB",
  "key5": "3vtsnXUzVpHkEJZcpz5j2nJ65CCfRXYMpfWqNFrKMURR5hMEaD6iSMc8RUwGT52Xfg17ZUyinhbSuWYaqytGmQsx",
  "key6": "2aJ5DbnruHdoHEwhexYfyswLbcMkiBXfM1eu4z8VL5FzswMHcQWvt48c7uM9RLoe8YUaBqRYT6pCNGurdYdpcYVu",
  "key7": "3bhvA7m65yEzwYZSyWaE2cBp9LuLJ6PoNpuuiLkGyydaY5LBkya2KAadT2QLqW1MZJmLQHL5PU2WF8ahWfa7NJ8K",
  "key8": "4RkrtdJmY14M3CqzonYDTtBfkbBPuitL6oofDnc6WyREEM16y3JvoThymUAZWAgH28fF6oukovzCUs9cXtB8Pc2M",
  "key9": "3pwp9Q4ondqdAFgzkDunLL1QKWRjTmCfmTwTT2BVjiCDXCLsL71tDd4wsDdBDV7oh3Wpgic6hhZBk6c4jp96tHL",
  "key10": "KwNoU5x9Nam4fPffPHJxZC8sQcD8jN9afrZscuarSNrEqVmjXo239PtzQhRUZpCbjJmbZsadoqXkwFQRpebuvuZ",
  "key11": "GMsACBEo5T8zhard8G46A1HxM3LicqtzKt3RB2AnLtwbz41Cb7xckrHTt7iNfAAiFCnzHwSYYMUxZGCvrDETqfn",
  "key12": "5qcemDFxAJ1xHogsjTa2FEdGeKchu5d6G8hK8HMoJBGowNqq6pYG2xr5KBCmtX88WcuADGAXYsHk9NLZAoASnuBH",
  "key13": "2DoD1UA1Djvp2hE5gFeQAxVs6P55P9FwQrT5svbJdnFJmzgcje5T5QLu2GKMRh5ZcsQGpbHvaBGj8Y2zQ5M7Jf9p",
  "key14": "5jcTNMYyk9sUK4gaJNXJuNxfX8BhLHBZ1sjaggPya4a1ofVesPspD2s7ocUYBUxb1M8c7RWUvmhLgnDUcczdYKfG",
  "key15": "25w5mtjHnbw8vN8wRJ63bNGXxCAkWvnVcmgeZSjjKSzXwGxM8UpHKbpnxeFKkWrom2vBdkECgt6aRaw5kBF4hR1u",
  "key16": "5Ma7Ee1ANsSqdCpjNnLqMwTpctgg98ds7v6a3wxmnoSCNyEStrF7xvhP9yWP5HHoP46GHZgpzenKrWm5BrD5iDsy",
  "key17": "29GTbKkzyphJvKSDyRaTYhxiZvjWpm4pTCFHYG1w5Fxhq9GpbYzLtmBd2zDPYxmGqVPv4UfQvKj8irqTTt9QzjXT",
  "key18": "2Z6X66Z7ymTFBd5X82UMaWUiPRbKNm4BxZnqJX17h1c6GEP3SEkgW8xntYt1kuarn4MdVF1E1hP53JTXdKGgwvE1",
  "key19": "2Uk8SyaTbuneBj6fx12ooAqkDUT9MikcmNJYWc91tX9T69zVzFxJr43kHZDKopRvqLP5pTbGva8CsTJ38daibdZH",
  "key20": "2jHHiAgGpLFLTWyxEVKdyvzsaVdqVMP5uLUL8hoodrw4YZnSo24ZSjxtMfY7ErgzUEeSiFwPXj6bnxo7HKVfWm3E",
  "key21": "3SxPNXagGBXK2k84gx2bKFR2oY1w9kUkP2X662k3dQLMeZC84dHY1hTn4ZfibTEMH1zVLTNdd6AeiyDPdwWQxKz9",
  "key22": "f3ch7PwaFh3VZENKMoF6ge7Ya3zr4ieCjyUSLSwBsFwN8V3okjxLrncjocm6D21ZRqoxDxfMFLSyHANcTNiVenS",
  "key23": "SMSaPcYw7nJrS4Lxk2iLNfb4SLEaowQAdUQMjwZkK3VFFR2HYKLhd57Cp1TFY7sedbbZ5Y3XeXstSeQdeceC6EX",
  "key24": "485gjbxnBHQwuzs3f8y7eDcpDGgczPEpLhjXNcXRNoX5n4wW1MCbf8yy6aEgAsT9pDCsdzbiVbNnpe84z2kZDAjy",
  "key25": "5UXRiUx3URpHnDZdTuUbmAPH6sBZFmzi57r928R4nREfPBBTuDU8KnneZf7VZRHtgLNG5jAqx6is95UcPiPneBSg",
  "key26": "7XQe9R6s9iMMPjRbFEo1vgM5dHffLSWU54p86Cv167HfQgCXLbHjcs3Rh6zMhtCWoQ8PakX3JTSmgdozVKxkrG1",
  "key27": "23L1omroBi9zLKuSuMf7X2GTkF3YzRBBQXdT7hNUJKQJYPGtY6LHrT3JtQVMMFx5yJX5UTadaq9qkGJSQMHp2Juy",
  "key28": "2Jb9veU4zcbViQvvcLgTELE2mjBKmTtsNprkokU3EShwVfvipNTLV3M8Y3nJTXUw3QzNK2ogFRFdFVz98r7fmLqC",
  "key29": "5KHTrVcgxtWViP9634jNmEA8u7VVeEBr4JsDTQsTzwm7ubiwNikCCUt7bVNBGmGyzzLWvxP6ovCpCVrzVjo5aVuP",
  "key30": "4WgaCR5WJckazeqkbT2FsceJrknZDUGCeqEjxKmYi1135vwMMDeJfN76DhPSq5MsSq7LzBHuaWiHjwdgm3Trquck",
  "key31": "61pEHrwynjWo9zXCCm4Q8gGESJRrGCBzmqDhiyuMtHraEyb6PdQQrFNMtCJ1p7WbUPkYrEM36FXFMRxPwRrD7ERP",
  "key32": "4yNo7zrsMnEKuQmU3YQzbUNn5pf1Q3tSXcumZXWoeb9L8zUqJN4SzR8x48fopF4Kw5FReXpkVp7J4uaR1XLiMBtY",
  "key33": "4UNcpA8hV3dVjcuB4qLZJcpkE5tNMKZfhUYxhwMhPtbRHNFTHuVJ26oPNd88obX1jeHWcWBxfJPkULGKhyj8eMn7",
  "key34": "2X6tFjw2znrv6a162NRYAoRerhPigEa45iA2x7hxJpZrUBNxxbXzdDLtCXh34P174vgmjXyMt2m3uAVnqCXJkJ6j",
  "key35": "2DzRrsnPtE3EFAzzXxGmjRB2YVue3L4WkoPc2PgaNWg8wHFHxz9iYX43kqFb92tX7QVsf57Dy29MJsVAE2BdGXLC",
  "key36": "3HNDRYSMWqSPw7HeB7Ki9gYw72q7z2EyV1KRxzPTVDw8RRNGgZEgev6FY9TycQugYvuqLVXfB8HBjjPcKGfJqvgn",
  "key37": "3ernx2NopyyvCpuxGFGyKuSHSKdq1tVn1y5gNRr4QE6s1Aioy16VhLBSc2CaCoXXuaXVj7zeuUabWb93vMFhd9er",
  "key38": "27TCMj2TQkW2jo3XXyuhKMDyDv9CxXE3t9KWmrybhjXLgweVNnJWrwVu8786uPeqTKt598SvEjdHcUa6kA2mRywM",
  "key39": "2MonuwAsKUtCfrsCCZBBXiM13XrXKAZcXFUWfQ2K8etfLsvUp3AvopNvwAbC7VZtQTdktufDU9vazq9X2r4R3HDh",
  "key40": "2NAuNfC8Rhy5N3f9jDvRfyFhby3g7wJbhP48VecLiNe1pMXzLTaayYiN7JHzczpEzFeMkBo7JsVw48kDb4zVkA68",
  "key41": "fgHWCwaf3h1VqxfF8DYQhNkQeubWTVftfcdpSkxR1EBeSkySFrmppr57sXhZBPpEznXgVGcpA1nE9i1w17ri3ce",
  "key42": "56bZqpVH9LK2ugXduzAjKLPzniGue33q6j5JLX1SgDUsRt8vtgaqZapx9D6hZeKTTxBb7EzikBLPS5aUMPQ4U4xN",
  "key43": "5NxNFDjwrtrGQ598tr32WVeDc4a6UEHFkDSEM542gVshMVquqs27nuP94Vo7waYJd2SNxSAVDt5GRoJxbpntBiTk",
  "key44": "3soBhq9kvHybGzo4xpaPxHieMFFHMFNjWu6J5m3j8ahtcttGMEqt9JHiKSqPkopbjWvVte2noDpEYpnurtUXyn8W",
  "key45": "4mxdgCNHZkm7bF55DaBGaJgynCcetib3mDZzMAk3dJsAmxiZNq2Hx57TuGJ43sM18XX1Wz98dLoeiNjCeKdNPJAf",
  "key46": "5JawTnDJPa3JUT3EzqBn3gewuWukp4eza5JNZKQMou15VAbxaZ2SDRbfJXUwVLNeVfYLBHKmZmFeAaJRQ1ZDK5Uy",
  "key47": "3onEgkHNtVWDdmB8Zo38nNC9G15YDj7FqCfCL9ZD9oWmT8MQKAFguZBKVvekg22V9GvvDawLpGutTCFam7ZWefnC",
  "key48": "ycZYc1jdm7qEf8wa2DSR3g9Ho4fLbnnMjsQ1zCW2iH24jce66xVD216Ptv4utqH7u9pfxsQeJ9GBGxmdZ6kdnxT"
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
