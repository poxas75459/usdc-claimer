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
    "2ufbcWun7xM1NTVe3hX8yrHAGzUKTCipuuMwfbTnuzRxFM6LnuRNtnhp9o2Lj7sr8NvWLoD46qTMrk5JnrgkZg6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NGQgE67HV2Zi9tTiwGVrv9eJWFmGtm74zSGyLmTPYgEf24Xb1HowTY3y5TNwvZ5UPNyJgDs8c2oeCm8Q5gycgrc",
  "key1": "2KY5ecddBFVSx4LEr47TBUGYn9tLcvyRBKZ99umAq1KmNmRYQ4VNuB454p9HyaZ63Q4KQZpuMoHQbvTpNzueYDGS",
  "key2": "2JtyLqMrPwSf8Z7ygRa9hkCPvfz4CTUTvHW51rskGeiLRTga6aeeMMAeL1FsRx1TxWENmx4TWuFhARKhhDev1zBS",
  "key3": "5ddnzAAqoLoZL8dUAX4qkbfC5vfRgfLWz2nAwSQnYioxuyt8VpdKG8qDSudKh1XvFciYfAJizFpRaGis8CcYuA97",
  "key4": "2NuKrBB2fTQ51AwvDYbLi1CodzGmWyLigdp7w6Ga6QX81ZFP1p8WhaNjDyJpwgfDCm97SVo7rcBXvGC9gHUJaruc",
  "key5": "3XEt1DMiocsaYBbBDSLpZjEQjbX5ougTH4AKvSgCajgwvBPKRj3EbKLZDDzXBRLbxy3NzawyoHV9yKzdah8RB8nN",
  "key6": "4JztcS3DT1VpBDwDqhdbSKM8JGuPWPEo2fCKE1tveYmVzSE28HihsMjE4kxbRvV2YcFZ5WbsUkqCVsjEy6zzdbs9",
  "key7": "51hQhugYPVt1f81M8q6NXPcjYvK5dnh8QcfGT5GR81HzHMeteUhKcdaFmUMkaj4Buh7b7u9z4dh4dWW6UCmr8Rw2",
  "key8": "391UbDjtaFNAxET97xBJVFVX8YKmPLah9jQ5eJw6ssG8sEaSnPpu6owfHoDmkjEtFNfXaaJuTQmvvmhoHQXp6m2E",
  "key9": "q2sWgDLLFNMLCdwqU3VaPoX5fApghxtGbgtf21EqLfHV8ipWW5yXkfvS1jv3KkE18JPBdBT3aER7vYukuqFmUNt",
  "key10": "4WSYSDqCybiP92TyXhg4MLbVdbj95AFUusPmTX5XYo6JkN2dQMisXuzhjYa9WR8TuwfabY9iNpj9pn7WEoqQcVys",
  "key11": "2H93JWY4G7eP8PXWtoX3RPNcLrWEQi1ZCvGANk8gnG6GFthfdezJHUNnSgi5Phd4X12jjsjKM6d4KDPeHD1AAp3L",
  "key12": "6KtHnBU4hd79ZQcELPr1VA5MbxKyKkinqQfWgGx6jFDtgRTDcqqBHAmWmyCjkVDzuQ4C8mpPTPdWGsNhK5Yhzpx",
  "key13": "5YUrkayBS8K75N65YyMotWtv7jRJ8C39rx9BrcU2ecVAAd6UdyaYvLGZGTU1uWV6GqAtRBqWv4KoJYyDLuXuQTbU",
  "key14": "45Yp8YriJfHm9zoqhUELeTzTdPJReiUyZ4uKWRLHa8v724atCmEkMuJCgNjXKMYvLQry12w2Xx6YViSFsgrdsQ8b",
  "key15": "2jGFh5abDdZFg4R7iAdieQpHhzAk1bMxewRS8BfaXXoZMLfWV9n43SMayGGGeE8R6UJiLG2mUuMLzq1Q2U5Ciz4C",
  "key16": "5gvVufsd1yEzwXsdN4ZRBbf9wzuHiQgsKmYB9KCJvjcHxLfoYpyK8tDqj6HHHvZR4jQsTyqhAK7JM98mJF571TEW",
  "key17": "5qXy2FFasGkeJpmyPpRTKveVu2JecfVAbpyXexkhAshAbpphNoqJrTkuFNtbAQnQ2mWFmHJ84PieHXArsJLWJBXi",
  "key18": "3Bzo1Wnd7dUob9L9gguLzgoQt4HiQU8Ssv7TZ7vznXWuwMNsAeTWkxHqtFtJRhYzRRWvx4nprkYMFSPB7gXUemoe",
  "key19": "5wbM9JqcAPutD1XhGJdL7sJDxQMscZjLufJVNd53eHobdden8FGtWRHe1Zsbv2YqJmpz6TmMMkimsvBriDL724jZ",
  "key20": "5Lx3Lgn4kmMaM2ohbg2hTNpyz2MwAJcLxiD2jrCW7s9j7uXc63GjP8vyKRbNswewjhv7DgaMuJAANLvMLc85MuDj",
  "key21": "5Jpy6oqcnmrTM7AUdQDpXSNsUkrACDPzdHEbAJXRXa4BdZURbW8sgJgWYpajTc9TRaBJap9rsWmbn9PCp39ijxQP",
  "key22": "2RRVcAvWHXeYRi77Y7ezGsSXZmBRzxj3xFjJR84YWmVNJXGbi9ugMp8aa5e4W8hUfn1zSyh8BEkwsdmkuXTCxgks",
  "key23": "4Sy99Q2NpqRwhJUhNqMEVxFY6Md2idRfcPpqCZxTh6SiMyVfQWTeriZcbxgvNZuAkJhYtKuY4trCeSppPpygpXB4",
  "key24": "yGvv84YaiXfXfR72Ssny1CMTbuEsku3sswCUTmtiptJvyGXVBXeSqDHXDL5NJnLjdREHmHKc2qATp3i5haGKybz",
  "key25": "rAUksScM2BSgeLfoyZ4c3hYbYbckPm6t51PNURaUX3n8ArvgBu49yKEbVcKYFFRY84npSCy85tk4bfBr28eQJAD",
  "key26": "25yyT6uR56Jg3VoF3mcvTqyP9abifCTuWUwzX8uTWajsF68HkRDgDybpYSpMsrtZpDKSMH3nMWRiJ8W12HUzoRUn",
  "key27": "2eZidp4aCAGK4t5QAL23iwntbUSY3wsxyTW2SpfGu3F8GTZ2xdXpNKMsoAzi2ijmXs3fVLcf4V49dKAQkof8RbvK",
  "key28": "3jcLP6Uns8KcXKxFeAWRgipDN6h8PdUKoJLpAM22g9paGis1pzwVJxjWKJZN3NZZF2c9QNN8D7fDfmR6wnFwjbRD",
  "key29": "5BvLuLKKj6o2RC1tTWSi355RpoF9BjKPzTGxeAZNZbpZS9w8XvPojCsnXTTcqDeNrjt9HnQhQxsfaoL21yjSY2VZ",
  "key30": "4gjjhVU83LoNYpH4ektEpxB3Y6An7NSgyh7AC64oM73rDG9pVVXWcbzn5i8nb7kKGTFtM1vcgaxMQWim4CkyTWN7",
  "key31": "CCEP87ZUnymVzjKgPKKiERmqAqL2DTUywCys2DSxUfraT1hPRMMVEFPRCt3bsnX1jLJoApQ82rgUEMbdZ982LK4",
  "key32": "tKouKsGxau6C82iMSkgRy3Do2eb8ytHV7VvLyruzefxzZhnoL6VdsFQRVVGsBfik7EroGLnk2YvWMWtVorhiXbz",
  "key33": "5Z1yYrUGz2DjcN9YCPnsrfLhJjNKzWc41SwkwL3pAMrkLRwLBnVWmrQpjX3QhTxGv4rmKU2isF1PND5TjfeoJN5t",
  "key34": "25AHMafcndmEwV96fgYGvqzT4Z1wt3tfRh7ECnZndYqgjmSkcrkWWjVx282QXe9tUPUE54E1fdnHy9e2wtgaZnWU",
  "key35": "5zr4wK9CPQ7UBbuP1Z8eTJePw1xx1jAiodR6srJaDXaaEX9bcxgMKx8UYLMUkJDAamQb3Us2vohcSiiC4BBpLMV9",
  "key36": "mYg2KF7WAR4yQj9GBAPSqtKHaJGwzfcTTbLyAQjELH4jJATDhh8GP1ntDhbcB9mmEqwjmhc1hUJigjUm6tjaEqN",
  "key37": "4igt8NPcJPr4acNXRR4HDJK1aSmcPNfUpECcBJu6TmvevNkgikfSJYQfnDUtWgHU4T92skhpnEecJSx5CU95sZx1",
  "key38": "sgcG5rBWvcfnTQnqqG55s43a2JbooCdvna9DNQdL6e7yYi8sXM4KuvidDbj5VsmnKUsFFHviWsczEUhCsjYziUj",
  "key39": "4ZUC9qdiq2ouP6n3TpmPncb4PD5UasqxxbMPz7Ao6bqSapmkHXFoh1HXUVkaMfnpeFGdFbgVxQ7473GQEZe3TdqV",
  "key40": "4aAqm1i5d7PyE3Rte9Lp5r8yjYZkSuRe1KHpsZh89pL5tvSamNcMYkC8S1g2R71nM3uHNeXDq3FgiQwNv6gmJKuZ",
  "key41": "2ywJjUDxAxbrQaDjSaS6FmgS7ddGigmjXpf9pLKwpp4x4QWSXpxQS71qJKrY3BG9buypzgjNGURkGvxQghSCfZsL",
  "key42": "2V28A7mpJWqc5waFTMyWTsNwDZ616typ3Nu8rsjo4hax571sizLh9LzTZc3QUEXuoWS388VBzPCNmKMGxcqqxkTS",
  "key43": "4dYwU314Yo1kMepGTNCEJDw2PHcgvNUMtaFzjjfftn5PsGhaAUDiBg9x6jHHJdgY8QR1dETsz3shiwTGwfUH3dCv",
  "key44": "2ypAYUgZzR984a6dGJRKfuWrdasLKkBNFPiJZpHzgE9MCqFZrvcxsBC9VNjTuDR9j2Jf9YqWATghXsxyUFWptEVo",
  "key45": "4yBnNKEHBzB7Qmaaim2FDdE2UDgvZ7vgHRh3BbhVJARGnkQbR5riGzvsyPpWh5o66Xe85x82Tn5M66NRuz5emGor",
  "key46": "T4H11oDejPqFQfNt8rV2UwRSU4YsdscWYDLsqYSy6ZPNiB68H3pWRK7hTceg6pPraSiwBC71QZwsAFSJaozNPbj",
  "key47": "4yFUW5cNnsUpf62WQkPxsx2AxKK2B9XgJsGT8QUTafqiZ5Q74gitj3fAQBRJ1UGCHwxJPqG8CKXgEr1JzhAyHatM",
  "key48": "57t8rFBLzXdSVDgw8kp8UGHWAnzCt6Whg6cMxjzrJ7DCuS5D7KFZ2ASVxGWPQYid1kQ3Tm8t6yqNe2etrf1ezYBW"
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
