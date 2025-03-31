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
    "5A2uYuDtvYDtDGMrC6fLMKZmnVhDTuPDRGSjqpBgDruK8XKpxdjUCZxEyoxN8cq2UZHdnTC9ZKmBSXM8WC6KquKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RnJie7n53ZsDwpULwfwQyhnHZQSwpUN8uDJFGb5joAH6yoTqod8LfThXkY7DptE3uAXpgw9hWXWyYivWqTSzYHc",
  "key1": "21ZyzAfpZuRmG8F3r5wXrnU2suExaEyDykQeQkm7EzXFivXbCUPdhLvgBAq9qYuXnbUsEm6pkWNRjVXbN2BrSZhW",
  "key2": "2LMqJWxMWu9a12B374bjAsDgLerN8efHL9uQ6NeKdW5qRbnWJR61VVgwYHxihexZfNzMBY7yrJmPpoqQvKnM4dnN",
  "key3": "3jCrathcnMBaw2Cwj73NHDB6zNahegYpUmEFN9UB1WDuauNKUo9vNaA8HmDAM26mkWSXZoyKgDKWYmvXoAbyA6uN",
  "key4": "2eNCA48xb17z2dkSzQBp2uv7JPWMKYTVjPqAWDFn5MFdAFVJrZTJhVez3amyi6D5AanWJ18VGVj9LJ2acsoZwxkG",
  "key5": "4dNJJtpWvKomFNKemjYAYPdfuYRD5wRdnSrL6kCkPVUn4B3kWLwTHTLYrwE3cTuHMafBp2QgFRVqtsuAuh6ZAMCJ",
  "key6": "udN7Y8x39TJCdL8vKZG2yivnbhRCpJCZvdyto3opTfSg55ZUiJ94SNRnuBZn994bHyXDiAaLSEPf784BVrPA2TS",
  "key7": "25QRAZh2GWEq3e7bdWpQiMMiUdVLnTDKhn1zEqiAN3YMrtc4VLyhnEi391oKBCFh2nSGUPEreHmJkY5PxDPAE9Nz",
  "key8": "5iZ4SpVCMQ7KnybTEd68dydCrJkSybB1Z4kf3Rbo9xaz4qryomwb8tR52o8D3DP9WiKv7aCVxBrRPWnpWYu2ZWCn",
  "key9": "3a9SBuEuzsFjb8BPP8UnXg7GGQXQ3XqLt5Ecfdp8KfDePkEGR83pT76aSs15BDpMKNKdjG7wGQJS9NkhNHPHKWPf",
  "key10": "3fEhqo3tQqfWT4qwwq4UJy41xAtWadywMudB3pVWg8aVBR6CN7MzyimLEhURyJPJDmEfEj1iA89Aeg2NDCX7Zhf9",
  "key11": "3jcs5tCvju36rUxyPmmTNhQW5jSR5AWUhRtufv9BXGydqrQx9feiKL72ZrLqQfFukUj8K7trv8dgbAReGT4d885Z",
  "key12": "48Ry8ea9BiRPdeQzQWVrR83MoLRhNVFSekVYgPQEdzUHo28N8nmVrV7jYGtrQ1DeqfqRFLHJMVFkJXqU1TatFicu",
  "key13": "3jiLQRQ4paRD4Zqbg5cXwupu84Jac64n4JT3gLUHZnrQ8vr9ser96LbiZJrW2dj4scMwcMStRT2pcVtRWLaEzEzf",
  "key14": "4J8kt4thq2ja1X6RxbUmCeTSH3nVNrPeCoStx7EZYE7ywcXTeEdCr7DVeumW541nS2mNvWhrxNgS5Rm4be7dCmuk",
  "key15": "42Cef7e9hqJRyBscMnbgttDPXCo9TVoSbtTCkj7cNLPm9kbjdTcFxBPKgbJSKzp4up9UxfWZDGN2sYiNZ6uUXEi4",
  "key16": "2sX28Zv4s4qNzrysi5fccgQPZtQ1rSmw4H7coNRDHNvvb1nrE4dJqkwpXvMDBypTrFQD3oGmjhJEQAbsGu2uWjoZ",
  "key17": "3NEM3QSs4y8mLMCcbfWbBMgS3vBFzpLdAGHgBABeQ22wFKieGqSRsBRWdKPEZV7Hv54SEpZ33xVzmuAMXLgEoW39",
  "key18": "37dBvXmyBwTMXxinu6CwWoe3iLrhwid55kBLyLYFHU4N5NVp6AWKEzkbXcXWyuAqpFvnUUkwP35xay5U5TVq6Kve",
  "key19": "3ZrQ4zs5SJvwTtvQuYnYrjffwqYhNfkkV4h5raVb47BJV8DJ5poi9hWtvsq4mDaCXfCkvU1NfF6Z3qSjh3eyC3om",
  "key20": "sjY1N21PvaxnZMperjbPMVWrLyZrzjPsW8fUBVLkjJ7r7n9oBiMd7G2PqZCMdN8g1JU3f4Kwj1uRp1FGi54Wdwd",
  "key21": "5WHcCn931qxyA5ft2fWXaMh9Bt2JkkeaPNQaQ9gf1DaEhbg58uz7KU8u6oZigDbe1eYxdJGBvhFD9PXarHLVXiKR",
  "key22": "JFfWyisjn6MpqB4WRmojVaN84wDGeACSvAQooE248rRxhG5mPQYf4w1Y12FGahhreyXMx7CcdNnQvb7C3JP8NJA",
  "key23": "2k8jKbKTPkPTL88uMtYqASgde59FEW4kYneYnqXMWbqoVFX3328xXoBFV7V4zU73qnCzADGMoAw7xiz9E8cz99y9",
  "key24": "3rx3pwSAZZYQHJDxUuTQpfn1sPA8so5k1HHo8ygk1stjGA7B1nF6R9YWvpijSnpnPDNa5Q32Zkc3xR6k7qxsfGPn",
  "key25": "25pnoYbT17MczuA88rQEDt3TB9Ks2ghyZ5Hw8C239Jshkr2v1UPZmSkW3wzG6MTrkNXhvuSu8aSbweU6cmwLoFRH",
  "key26": "2eaVD4ZqYg2SyTpyFLFfWL1TnJ6kMEfyHn1FeZWFgzjvYDH16Fao8KSusfVCmvpdjgxYNoxicUKcffnW92YDi8ce",
  "key27": "RpUwcc9e7BdNzSJ1ABa2JPkYCMPUsfwkJXLcDRXSpwNz4mFsxBYyovwSnQEU65uPsFgBC8xSRiPr4qJ69d7k8vZ",
  "key28": "uN9C7QXY5WVcoyocRfoGfMabqnZY66jo4HuqGrd1bWLMkfTnbRH53yHH37X5SnisnTgX3phPrzB9XoB7SnNCkPK",
  "key29": "4RRp25B9DVRHzcyVjBKJCniEfUwbxTzPFcitxuvNYd6irFe1b5smbcmQqMAvxMdRDTaB8zVPw19pQYvVLQtZj6BN",
  "key30": "5CrZXMbMm2hozu58uY2jZrysVXDoYJtxHE5pUuzwEedKdnk5zxuBHGYYUg5FC9UiGd4QK4m8DxB1FyRTDBwoNYfq",
  "key31": "41Nzn2c6Pon8NdTam2FjTdaQxwU2u5QPwUsMruaP1wE29WQFeyMc3yVvGELwaCGEoJdoix7UT7KMA3kkt1T4hFct",
  "key32": "3gC5TZ1FTuWsU9Xm37r1iTs3k4sUnZDuBXMykcGQqjNXrfcUYoquvXXFeyq3RwswZRUGcS5Xm5qt3c9naEwSXcbn",
  "key33": "5SofctQqyz6QGgxNTSKpi3X11YYPwaVTdJBb9mgJfpc7D7WUj4h1WQ56RFSeCDmALyqueYUpdRF6xCAaTELTgYQD",
  "key34": "3ihUSSS81kpuKEsx8isgepYJpUdLaEHgGCiJaq9qp8Nvijqdn9FgFb7dezFThHq9qvA1j2QwK1FUWxefAzw9zCZR",
  "key35": "2UnvD38rJR8i8cyx9ig2aj183Peqdm7K1Pimm5vs3xk5FT189vRXjcQwjcokp8L2Tgn8pdaoqbuVzMcJ2JS9u5Qk",
  "key36": "3QyHHk1UJcCvyp3br72TdHhKNNvyK22m7YUizC8wqEkwkimaSd5o7HiFkpMk5tyJDCLiZtxpu1qPTHHUUH7FKLCr",
  "key37": "4V3f7QnJaojL6NUzqiKWE5nJv8v4y98P3oakSfYgVpiJ6U7T1d4WjYegxSdr49kZ8qzfFhUwFKSq65CeTvShAJ2H",
  "key38": "3dnBoEiQQMeM55UCagCrZaGhQT3RfQS6nvwRyQzhE2hUDU5mB98hj8QTezpEWNC65wnn2D8UW6moFfjKp5RZH7px",
  "key39": "65de67711iKMzuDbpdg5UHgE4foMC4UjN6rLoLymZc4ovh9Bb4CjqyqUnUcU1rkCMBNsN7BaNxXXKyNsWQ8VPANH",
  "key40": "2yKcxAZ4YR9BszUjgCbzn3xbCJDzwRLPTKJByoj9zn7Q8VjYKdN3Lh9VQeUmgZPMKPypamrCmi5bC23k8h2kQ1JV",
  "key41": "3kNreQb3GN6WLkiFbyNkMDy6CoADKyfyzPpm9EwDucbsWGLXca1biRxykWEcBsVg6VmKoc3zcVRM8gR1cBnPypr5",
  "key42": "4eze5xwxeM1bEM4VLLGrFhAFyevvo1HPUXWo6DwjCP2b8HpBPu1ELJ5MmegyXJbRWnukdjSuaMXpnQkYEUSYEnax",
  "key43": "3GhJZPvCpRq3icgDqbEdRyxMcxvmWrFZ9V1edqU9P7g4KhbVss84L4uVX1rM1zDs2Nur2LWdsZvwHiXtcvEcshkd",
  "key44": "2REqSrwegrq6fBXojy6c5f6bCTScddMbxb5FDRY6bgXs5KfY2pUyvJ8KaUbTDGBARuqHyB58SirJGS4C4PfZY8AD",
  "key45": "4UZ7V6dhgJHAxAoykgYy7vYx1aTbG1LRPcUYnrSH1mxgL645x6ZzCXNBex13Ybn9hzbpRAdtWo7UXk1zb8pjy9rQ",
  "key46": "4vFHBoJZ9jC5iRtwSAtjuYQCarekWSFRE8ehVauqBeE1baRnvJzvPoYuNc5br8GtwdL45Dx8jUZTkxwSoE9wtKz1",
  "key47": "jKG3NdcxMbiksdvTzhF9L6EoCB6bD5QR9CEKEWi42in7EAVWhjYYxRfhhLLHgUMrfabXJaZTxH61cSfPG68wChT",
  "key48": "4KWSYZFjPyhmM1xseYsSe4LTSsPC4ftU9w6HJbEBikXVMkd5kK7FnPetdxEwm4LB7Z1RR2WE7xQuvZVR9CbL7bMc",
  "key49": "5UXCZnDBVh8GgXXr9ij1acz4fwGux4ZaAuSUrtkHJDrrszHY8582i6wduQ9Ps8PBkZDzuXByziMKVqNeWbr3Hitg"
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
