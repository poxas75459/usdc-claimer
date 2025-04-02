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
    "4dAWgGHnMnjeYKu3DvJt6RQx2WAp7XpujckCUJcfCtafW5T5tb7WCVwvRNbtaJFK1TAUq656eVvYQb5hcx3K8apd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zzv8nyYLJirZyWGT2dXgHoyuGXUtxx8zpuAxJVLpFVo8nKcfo3U5GofqLXHfeEqd8rUEHN6nCpy6yQwpkkhEFKA",
  "key1": "4iaZbeD5d9KpaiwW4GvAHeYwEVuTdmfQWUeuk73e8eBmTPi2hZRuaXW5mZou1aEFgthozFvnAmv3E2ZiYcsFid2K",
  "key2": "5w1kVoVsYGKSb9s3Ei3bUzVgksUbHyuDTxxWy2bvpxcWV1AvK9aXgNWxqYehEW73gtzVm1tdBHtv5uGJMj6wcBVv",
  "key3": "64f8d4bde4McYdUHhEey6dJjnueHZq4y4t3Z6TGc2uHD4TLFnzTzsGS9z37kQtjayLNKFPCSTPPV6RhDC8G3144T",
  "key4": "3r5LHCjgVjreaWfEgv5SiVF32erN22tS7xyQDxtfHvqe74RqrJBXYTCX8kgZVkju8kwSxGL9iuFkKxUNw4ZTQgJJ",
  "key5": "2orKn8hJtVr5bsVw3uyfPuChsDZC4YCwXh4mgAVHUw3GJQaxvgfmmeL8ieMFqQRQS8PqbpPytj17hbrfvLTmXow4",
  "key6": "WHtCNCGQjMMpjchoAC2wWuDTVBqBAgNb2c1buNBe7p8xzprwL61SRAdefaRt4g7G7pdLLQKJxt6N37EofLjAWPx",
  "key7": "3uNoie4cpoFByXhpyoiDEdM3Mm9jGtZQZfgXgA6WXSzyVmnDm9xWE23R2UX1YdPsSiD7c9ApvM3h1FftGnAhgRtC",
  "key8": "EFSwxJHXj8nETPhXAtMU5sCs41Zty5yYrn4NMsGnX6ysevx394h483uYfL1SAiVivfKG68NSB9n4UarqMi15LRe",
  "key9": "gWQHoBv3wPFGNjd2BUq4aDHizxMBUjPKBvxHGiaZUJe4UbnVH6im6B5eQyvdWarJzmnZHrmCKam1MBXwW9x1Ysi",
  "key10": "5o1er9ZfRKfmEEmErVwNRAk7hY5Qo66rf9MoRjyHnth3NwvYQhWQDxvfFrZxHkPV7sT2MjTxRPyncJdrxY9xJ2j",
  "key11": "5xpZLNomimLfmhcKfhgDJSdhE9w3zaU6S4woR1CPBhECJ9AangUgAQq7XqMMytUnkr2NyjY33VQkzeHDB8KuwYD",
  "key12": "AqFM4jvsHE7qdJTmewrsjEgPW2Hpw6AWZJKN7qXq2yyDTozG9L6W5g2g6WmUNqdp8gwidGe2uha9HccWYC1do63",
  "key13": "2kxaYJx5GABPgPDCPeydwQaw1dp5UmLVbwN629JxA54CZy47BKPiPHKJ3Ty1fmChuG3SszEDvNrsZry8BHBhHwV",
  "key14": "28tKReDkk9JPkugQngg1zvmwzje2bfonjbwR3vEyxCY6tjeyQ5AiRqpreyx683fHQXqpaJj6ceNifAVMFYjNN96A",
  "key15": "DgxYsZs5Vk95L8PQhCi8ac23jn4XGDWV7vQhNhCstBmVe9TNrJctjdBCrS37FevdDyN1DvJpTtouwPfxUKNbKPK",
  "key16": "4u8fqWbMsvRXwURkEJN9TeK3NLFoJVvYJiZC319AxA9eSXChCRw9cWZRrtBX3zMevMMi6afyxR9rb2CKWXhMpAZT",
  "key17": "2HaGf2xSn86DmYMMDD1PHfsDd8vKFobuuLWBsPKZUxVRJ7MVtmsL6utMRNgf6sszoDAaC3Rpo6QNaNCzsiM1M3eV",
  "key18": "5Qxn7Wy6GMUrTcJLMXPZ3u4byiqHDqiJD3Zs2MQ46XuiJb4cjtngFrkDuwZeWKpihXfimTgBzPMWbzGTVi1XoLo2",
  "key19": "2sHErA5qWqghAGA9NZ3MRr69xjeXB5kAJQxqynJEtPYFwh42pY8EZQq97SGu9vAgckZWdzUCYj8LaHEkbi6fA8BP",
  "key20": "5AdGXZvepkSibXbcewWBLhMKGHzYAqydrTYMJSEgkxk4QLCrqGjHT1wyz7s5uHjAocE4sFwszQSContYkrY6Kea",
  "key21": "4mZwtc4gH9DYtrDGXSjeqekTQQapxXN9MJVrMfYhkvv868yYjr1Drpk3A3YVxVEt6T87LtoxMj79bRZtsXDdvc3y",
  "key22": "4HxHR7pZLqZXMWRtEXSQAQRaRXmCUJiyxL69qTmV9cd6Zq5zhhhx7y52vh3HsABnRhxPXj9Nar71SEiU7oVzobew",
  "key23": "5UzCGSBEzbnkPpXddTcN5XJfj41BzWVZVa9hYMtgXckkUpSAxhjC5d7i98afG9R66g9iBmKwyRdxcPxUdRFXdHBA",
  "key24": "CAvWmfqe5BMmbQxiZKhy9WzL96URDNN9LBBtq4NYX9VTpxzCtWejGUSLo6E82Z35svkFRoQQipnoEzivXj15MjD",
  "key25": "3Eqxm7e811cQB3s1Nv8ch2Qj8cCZLWicGBtEgT5jBM6YdgvH3kXGWNRC5x9TMfyWWCDBkRhwdd7ZZ8BSKgkKgjpP",
  "key26": "EFeWuTHTwmhSfFxkcAUtZxWXPnBa2VJS8jbdjNRnxtTbaGbYeX2nj4STed8kbVinQ3NpQyVNdMrk5iigrhpk1o3",
  "key27": "5tSszAPzLJra4PhrN53XwTww5etTtXRW4F1R76tPB2pyZoRWjtT2hgsncUtZLKCxtRDTtQL6SsqAYTrYtGbfikAy",
  "key28": "3P4Nt4yDzYqrY8Z6vfvcQea42u4xkc2tc7PfV9HUq56brHW9P2DRTjPyxtwhdjHpYrTvUfLX7bEJ2tgCmktQpXUo",
  "key29": "4NfU48GGGeQK49XdeCcXN3SLXLEJ3ztavJELFUuTxvRtxhffBqjWYQMcGgKkRTdLKf8xtJPShi38MVt4v59ExojG",
  "key30": "3Vo5cfvk7D5piqmdg5ocWWCAWeo5s8bkuoseRoXWftx7N6JPjCq2EHmkfwWGQEiYbEeSyh2CjxBYARMSUGiTEUn4",
  "key31": "5s2q3SKXqumkRJxNxLpc3xCZ8R8a3iX7FXFFzNUoFN9iyQXmD6vTPnUcsuMMm2tewwouzSTbvrAvHyLsjtr6eyW9",
  "key32": "3hYnPdHx4cCBM4B57kCPsJnujDRDH5t6oJHqcZo46Bout3JzVty6bVtALmjZEVd2H2BtGGzCt4kySVdr3KVu2gAV",
  "key33": "8Kp74wrpQnt52DRn5ykK9CxJFKvjrnUZACam8kq2Yp6YZeFWf83HZbsPXdgxQPkKGH1QcTSpU4ojfBrHrfAVdJ1",
  "key34": "nBcJfXmMctmsGJPUxDJrMKyLnCXSwjZxQGnvoeYinhyfrZh5DjoubtdE9ry8TaRceSZd8nVncfEdddBhHWyyuvw",
  "key35": "5UcNChKECqfcFLjehhDJw2phRrRQh6aHZxY99cSHDZnXi6EgXhBoohKWudHUdWGSdVfm6mTdx1opj8GiUdfyQvaE",
  "key36": "3XHYJ3JoKn7fz11o7K5xZdjLUKiE9btPndsW4rK8j5J95xV6FGZsVTexetJr6f4G8k6s8DKwqkK5YNMr7a8h9Uxz",
  "key37": "4yCzz4n2MM9W6K5At77YCnCbDrarfPhWfY9QuP6yykKKpbqqKDpLVMaL7Pnqa2q3drFVpDH4ic13v6zRohi1Y8BZ",
  "key38": "4SJf8avR5BkWVVCMnaABMwb9GcF5gHUNaLAbtNxzGNTA5kgTsq6k2iomRnjn9pfme9v4ipYJFxu5pE5etgHoYAH",
  "key39": "3k3dHx3rgpS1qXEQLZHKbHPqkbXM3hDco19i5xLT9H1jWSrJUmxeqWuZnfm7XWLmMyUXUPcDo3aoAoQn3dnFDWEV",
  "key40": "53xiqqnaPL22NJXGegKHLeJdLS4rpcsGgfcoJ24FHc3c37wBjMC49M8E7m2CxDJoZS3MrFq4JZBdPx3FzaATCxPJ",
  "key41": "5KeYF7C83Gphky19ARN5kRyKo3L8G2wvLDqMtRQrj1gTgzTxAc8s9iCxjnWYBhJi9aGB5bLhXR1TvtajS8evGAhr",
  "key42": "5GER41Qxk6WDo8R9hk9HrgE7ef6W4YX7u8w9qmms4hNgzgSoCKozkCiYMxpTipozpvLL8buDtPWnjrMV6SKiSbEU",
  "key43": "2hokpHqsL96DcvGNcaRmHVE25TCikk7vgvxiE3r1dHU5vGHxuaYp3ce2792nS572kzPm396L8PhpANY7PdrCWZgs"
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
