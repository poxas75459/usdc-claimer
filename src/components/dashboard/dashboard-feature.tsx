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
    "Kw7B6wNN8SJqZJiUpCYmU66AVtDfFfKJzBdeJUSUX835Zou2mZ4MKVe8FGzd77aAJWe3qYjeBvsxefyWUzwShBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FdZ2CYoGMWttwVrggJzSTNbJHcYNXUXvVTC4iCPjhVV2Lj9JeBjAtoVbM2Vc5ZAwrcHL8VXj6PNEZ2aiXD5eHnM",
  "key1": "23eGhMSLmjwZRd3BsSUqPCir3ZjJgFBWVGPXLAd7eprdYgzK6pGQ6pk3heJg2Jz3G1Vn1G1u5cM97pahSidDBSmR",
  "key2": "3YhojZVJb2TiZiZbjgS5p8S9kbDCrcU6DZhHWfjVJ6aKkoqM3R2FyWEEh3b18VGN1n2qt8BqxrJvGTHvyYaAXmYY",
  "key3": "5mnujua9cMSbdxPwiwnHusLRtAsysUUFwUKP9BmJJ6MFMFXcCMMSYiPiyJVvajTe9kpbVR4FCMN8wB2cJFr6S9A9",
  "key4": "57TgSrV2ViLpozhvwdQVRrti7i7KwV7PByYnkhgEdQ4uhhYQZWhAyyw9L3aTYbGFQ3upt1bk1ep6ELhmmSvLcsUB",
  "key5": "3bK41BxA37XJixF47fJNf65y7nqXBL27tNYeLrXFcdbYJ3sNKvf9PvnibCdqWqXH2jP6aqz12coCzdrjBZNvuRRk",
  "key6": "3EaXYHxG3HAGGYW59hoEL7EKh6jGh2fSaXSLhqf2GeSGF2w4MRU1TT6MLrQGQA225HJ7tuQzyQWWomWH8t3iwXH2",
  "key7": "3nLH2QvtpnvqGpx5xZuVew4XwVaB4SExgBUQhYUtATkMLfkX7C33VN4omVD1f2f4ZAL3DgeyB4Vkwykq9Wjcrfpv",
  "key8": "5iUVanHb6Kxas9BNuJNGng61ENiBL3SCCvsnBu1q7ugWU5jrCtfHKLo2t4B99VQVdSTp7uYiyjQdBx4c3drDPdHY",
  "key9": "5yRDiq49gJVbqaXHYYSJjdQLrTHbcUjcyVyWDYzv4GhbDY6kPQsK3ZmptPxpid634mtXbEyGVSxMenjqt3JxSz2L",
  "key10": "4Q4qWen8rMHx1L25fm4gWX5wVGtmpVXc1hrFziqyJciBoK8hv1BouHQHC5iJ8DLEDf37zAV3ZQMVpNExTo3K39ka",
  "key11": "2rvm76q5LQe7Sy7sPdGVP7HACc3XP5HSbFgyZXyyVszCBfwbY5YC67ygLugNmM2htvxpkLRomps4ALbL66yzGhtm",
  "key12": "57krzrqhmVjAB9BAs4tE9H3xzg1dJ99ictHmPGvMYvHUMsFHkHafipB4Yqj3tBYLNcQnmKngR3gpFCTMy7VA3Q18",
  "key13": "dXDpdMe4Ax4gWp9YAgrqsg1sWrvcHCyZb7Ny1vBzg9NzJnJkyhMrR2tq2sExF13ErmcnT4GWe4r9g7Xsa6EdeAK",
  "key14": "WUUCwUdUMNkEwtwumaW1kTcUUxjs3Nj1GpEXahj7YqJrHQdY9f2VAYhsrEnwA7LSbv2KEf3RsEJeFLnL8fxUcat",
  "key15": "4LQKb58qKvg8egtwswRA1jHe3WSGY1nKc9y75a7kYC9TLVVwU3UWzrYebw4i8mFLTVVCPvwRt33ULvSaKqzQe2iE",
  "key16": "49BgFav6Q1uGcZRScLQnqRdFQc4zvqdMJ6pYxgFZiZf4BPofFwqjvuVAQkVTMapLNqsXek1Re3gXZbGruYMpofGR",
  "key17": "e9E4KHfc9Zu1aMvkNCPrEqALmcBz3TTuh9ujZ4GadEXFvAfcr2Gb3nkaenEi8562ohozokdiTs76nGeTrqbdsXT",
  "key18": "2YUxLGffP5ijZpTjPQHzrFiZYHynm5VzFToqcxqqWrYHxVPYqJ9U9b6zhdgHnDxi6LTZHAjC6Ww3ZyJYh21stZkz",
  "key19": "3zHzKdezdtLHY5aCHGpdXuaC25iocjKuZE2Q2od1rP7qonkWBAQJxENbR5iWXBLKD4iDWpZ3QFvdEEjbA1wiDNRK",
  "key20": "2dZ66oYwieMo1sa5GbkH8Quxhenf9WpBSXQkkL3ghFNVh4xFtHKa84t3Uj3r91y7fxJASZYH3Aixgrx4QVZSX3jE",
  "key21": "43iHPiqxq9VauypsRVG2H8dL1TUqqKSRMGXBhgNdvcniX3hht5GJaNDKU8A37dYNEaeNNveo8B1ntHtwFCeyWt9h",
  "key22": "3RevuMbFnPcd8XS3nX3pcbQX54YJygEYaES5AZazpt76zkvd1Z3HMiYzjmX8CnuUg1wowrVXcGJTksae6DcBPAYU",
  "key23": "3iMgKshM87iGiHMmaKBinhXnbQUwdKrKA1P9rzAxJGQ1H85APAxdYQfmCTPpxkgqRP7xt4fm3NiYRFhB9Vb6sfkp",
  "key24": "49rSkWv8jt9iEvAHuKkgziv4zd6t77fqXf73nAUwRzbDzHwz2UiNfp6kd5MG4NQKNmmRFeUPMS9ncNHeeNsqBLT2",
  "key25": "5Uq55DowDLJDdV1ajpQVEKtB2h4Pw27BDMBC2BfJfnB5k2ABuRFzA5jfUa7NbzVUsMTGrmdqLwzTApLUnEu4nHZo",
  "key26": "47enZHJnpEgrwV7YvQ4U7sz9ujMNYTw7Mc12B1pBj7g4tE7GJjLrtMRFrKv2npe6adwMQt6oNughXSagqyN5Fbiu",
  "key27": "FhnKA4PWtKFYGQNHRSdTLh8fbLprBnevw92gKgif3tH28AVn5PmRx615vv3dzxQj5Di8aaDuadaPYhFY9oTJ8Tb",
  "key28": "3Y5zUd5idWpkBgkwq1cdfbtLwwT6L5d1ZpfiS3isfNACp5feL1FaBxv8vWL7Gba29odDT6KUCZbYx6Y4m77GCqr1",
  "key29": "2Ls8Da8vsMfL5RxvW1GGfc3XQiF2MXUVCGWxXm9oCBWrrSKWWDxtRs8MPKwS54QGVv5z9GNFf4ZyKTiaq4uywfk2",
  "key30": "43bCsp1XbBMchYHric1ZeX2Vqno6vRE2yLbx8PvAd4vbnnttCfYqb8qYgLcgAHxDxAu2if8YHdMc5vJV6co3LDHP",
  "key31": "DYmrTvShzu8GH5JN6sUEpf99oUTuZDpXFENjAeSMfYCiPTvZBHQRdGLe9ijoGoTTYSvQJiyDxFHVZfV5U3bFrdm",
  "key32": "3mkhxp2So2MooixLdf7269EjNt7UUicbWXT5MWTgMMH5g4c8xj9iGZS6DsJDgikQfvLzs51ivrTYq2r1CcSgU36A",
  "key33": "5FEJQxnxafFNsttEEXdh88TuuRxcmQeaC7hKVc9PkMwecZBtfFTBoJqfgB9L8BXknigXnG3pQYnrty2bFkfyaSwE",
  "key34": "3CGiSyq1w1zXDxQ5CyKEmhMnbbf5pF7zc8kC4Qf8E4jpRFPDK5XqnEiZBCNzFy2W8i2RshTdXFcU4KAcoETEkHR8",
  "key35": "5x6XA9o2DVYAh7tad1p1oU7mqFfgrg51amtBRUvwPXApYuRjt5CBsE1awuVkWf3RGycnbt3MUwZZoSJ35QUbqfsP",
  "key36": "2rNGAz2FbiJQnddAkRT85GYAavD7DELR6zT7Jt2MhQyRDgMV8hNQ3xrD46fTArEsoGGfP8skFgL1mYsiT5CCoitN",
  "key37": "2A8Tk7udnMoSDoAV82bgPwBGzHkk5sB5sbPGVtu9df1WEujwa2Lcv3cbkzB8WNjEdjkbNw4DHxJ28x63c23actRK",
  "key38": "5ZkkGmQJDjiyHDCNqu4r3cBhf1xDG9mJFRnvqt8prDxs5iZpReK6A2Y6ntSFCbpBoARo6EYe2HhqaMNnwEomRnMz",
  "key39": "5xPNtdZ4E28zhzwq3NN7WqkhWA7TNHh6uyKENK1i3BAXQsp8Sy8V5ao7XEWn8F9s3dL1sfUQpbursZJXGySXwnvt",
  "key40": "3RA9zFTpUwBbg8xEaWWikKXUgMYZEmbcsnsrWR4q7NX8k8u1SdxUQU6HiWq1MFBJoAthUg8GrdsMzdFJxdYjdaoT",
  "key41": "5rNi651bQNQKTupdQgSHC2XhwoBXTUC7QRXsNAJvanJW8sR6wEEtZLJzECxHyjWB8hMF5mV8Jr8ytQFD6Hpu4oSF",
  "key42": "3qeGcb13yPSS7HLogwiAmp9gSbzsUsZJkaJ9xUqT3sBRSpHnzZUstMpqaDwUPaMSWpf34QJ7Um8uDZmRHFNSRVHp",
  "key43": "57Tb7bf2wq2zX4HdbUwhA3Vgo8G6EcBz9pJiUejx3Raxzbktvd9RbGLcQmiS57NQtDw9toDz2BiMcDFhuwf1LXLa",
  "key44": "4CSQAL52U7FUKEtUx9PaqS5wJYY9iiAYc1GVdbNXDJUPyv5RzG9yqzYvTVupfsTT4uZJvbxr6q3b42MLNp2b4EgN",
  "key45": "5mozssVzWeARdVtkM3EvJW9vWEFmg5FJPPhjEJ4Xm7bVBBSFY3kzvVC5YrKDY13eGqpBbhNY3QJFU2SwDstBwUQS",
  "key46": "35ijtd9LjEhVnqrM9Uu6goL31QjDcsjrBWEps7XMj4xdR3McsHN1fSegVXnV3b9JHLSvYeJJdbF91CjNy1C9UPwv",
  "key47": "uUsMYVwdBA7KBKk9VB6jDaprVYSw21hudeLUu4vGRwEy7T1DhUpPLSowWiycBv7ry7dH2MRpHycGF6vvaujiCZr",
  "key48": "5ijaUDeNcpRWbWdN4775yNVcNvYszpCt49vFSxxdfB3VsSUgCEtSXbJnFEWbQPjYixH7V8b1TyAbrPSFwtiJJX4K",
  "key49": "66ratfMTXvpdsnxH9UKDeCUsHsmTptoKYRP53U1JadggCvNWgwPStXLoxj8DcBCuN1C9ucADFL2R2qqozDyQPY23"
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
