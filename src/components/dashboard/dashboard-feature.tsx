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
    "3yJEPW8XB35DoxzCdXTyLNGQi5VaanSUV2FSqJtJvz4LxK6AMWXLACV8YJd9Kg1AQqPN119Ca2zVCCTLuKtHqA2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GkjX76u1zsgXzcACjTXzg8yUT9bVayogxyViFeT6TShgvSfKqPz6s7VGcjCfkjffU6dm9N55RrGsmsNjsjeiD2V",
  "key1": "PSUGzdCWzmG1PvwUwY3GyMCsjtVAaDusJ67epkNjeCRmFt9L9uePUngJY4JKw5a1Uo7DqMJq7HGKgZ8o8qhUGve",
  "key2": "2jD4HoMG1jKRLNXp8DktUSmk6BnP7cKGJRLU3kF46LnauSnbNcjZVfSNbF6TPk73j7Ri7L9LvyeKkdQ1XQerBNPE",
  "key3": "3SToRY54FhUPbmNt4KetdXcWziqk2NuYeZ1VKPBDibzP4JJgU2hWLSN7tZ77eNBBpdThLur3AuuSiPnRipLM5nyU",
  "key4": "5Boy3sisfKTTM1ijRMjvjAjtbWiyDgCLmqXXbV4qirVvphEiq26WYhZUx6KLgezJ2eRs7CSgtJzXZeDFGdpoXetN",
  "key5": "4Zw2HAUs8NH8kS2Qk2KNCTVhtUKq5AYdAo8XwMtzHD9ESwiPpxyQL1TMM1oXh1TyJHQLqDEG9FvbrmkFBsfNLmwz",
  "key6": "CKfxa4XWb589GufJzTeAxHKBnSbw5ahMxUKxgcN6YvvArQ9MGcWYsnkj7LBQc2j8ryQUCnRVT7jToh3iFZa8SdP",
  "key7": "2QaiACun38qsUSDbYctoexQh8c7yKueTwMttnyKbVJG8UswA7B8enz4dfKbbUVyuwGk1DCern2SWydaVeMpwoxgU",
  "key8": "MM2ePVt1Hqwwp41vb2SW9v4Dsu35kMyw9U5eX9VkjXdm4SSTcL2BRN89hmba6yp9MHwmX7Axni6r9BN1hbRXAVv",
  "key9": "3CQjztEz72P2JgUAQj236b4NubSq4yzMevxayjiRsmuZQw3dsuZSenBrtxzc2AZAoZAnnJZuECpo45DvrKB7rR2w",
  "key10": "4ccmR9dXKfTiatbig6R4HPL2t3YJw8zMjF9G7jYRkbMT2y9KEsxU5pFEFPqpLtyTrYheT5GAeSwwNefUXNaJspjT",
  "key11": "HtiGPpNus375ZGtyvMs3Vi1ZZMvMaEAvpGL42P7i3dnQY1kHnQDhQzdYGDkar4Qe2hHaovTnFhcYLLPX4sWTiBk",
  "key12": "4ayN5NEBb8QnPoDzhzmgBdA7gvPAowvoxJ5TkVQ5u3o8sssvGP3ckMuaygpmu8jKQoUU94JVMB9cZz3hZ3CYhwZP",
  "key13": "5vA5iSbx4vTiV3uHtTC9sEsJjR4BUXkwstGxf2DbUpJn52ztn9U1nkMYTMpt11AieZpkEyp8pr9vmtgBDksdishe",
  "key14": "U4FFBipyPk9WJjaXvQhFtrJiU2BMjXUdgpyTrrULG2sdQudtjRxUo1xfb3EovhUWJ2bbNXF21bhnvFWVVCcRhXj",
  "key15": "5JvTQ9rXt8WBdSDZBCRRbEYpeEhN2rq8c4DWEi374rixLgyKu1AFMBv4yg18YX5D3xYX9geEPLgLuMNyYvmV8p13",
  "key16": "61LuFDHfxnLb1an69yyyDaHZbiFpoqh761st6vJXCh4HQBjvGzTDw1N2MB3Ybo98b82biH2W8q3MPJHurjaN6fk9",
  "key17": "6BKXHVqLsYV6gmYzW8xgsNmPUaeGDauQgXnd9ViqrW4PGSfn7HF6my5r6tfca81ZnPf1sFJcJdEpqgacTZm3jDa",
  "key18": "7MQY4eG2f9YciBK9vtfW21wyndJ9DG78eHsV9ad7Wa4wff9EmRVry8Zh1ERbHMtR9NrGLj2cRohAuiD2kGyUFSS",
  "key19": "2Dx3opz2Tvoa2oLNnS4ZQn8ZS56ywJ4SHLxE61w5hp7wgRwnd6TY4TTkadad7dPnKghyep1K7WGVu4rN6TBRQ1Wz",
  "key20": "5zHLfn17KSxRDCm8vWjiNd6McFAhQ6LFqnbhVDGWoTdZD15Kn4c2XmKFtntBnVNH2fJ3ZnrHkNw7HTxsPgcC1raV",
  "key21": "5tVHa5quLq3cDhZSMG3neV9UyqZKMdtaeaLZkteNtdsjyJsA5gbxFAKhqVroXLB2oFK3R6hUeXRKwb4evhq89Ahm",
  "key22": "3rnbCBieCSTsra59phZAaZzsSstndL8FfWijyN3YTaUyTNeJ5Mmx5a8R6PvXRwphxLiftdvU88k3LJgEBnG1Ws2g",
  "key23": "Uy9GmemfjnZ1Hg4KXNNayvv9tHfMGg9Q7xeRngkV25KgrkPuFiQZz2CH9eFZTUZKfjP78RJQeAxXqB4k5gz4b5i",
  "key24": "3vBKPdwuQFb64ry6Kzsm5fFZBd8n3qV8VVi6SvAzBsU5ZV1e7iE6xph9Jg411wqLDbUUxz7XR6PaZWmb8S8RLWBz",
  "key25": "4W6CUnwPcFxa48Kf1HPsYvg8vB3Xj7D7o6umbxs6wNJbuE7owWDg5mDujA4tmYYRZ7ZAGdZAnzHtQWoUFZu8oewi",
  "key26": "4DX6Hke8iLRdZCa7QqzPiH48aL9LwjJiJauCYMs825x5zXdk8LtWcTM9oyLY4roULCZX1zy9dUyh2NiaKG3a2itQ",
  "key27": "3TskjMJnY8LCgBtPU9Y33zvv4y6XygtDsfSdxcfaeib3Hx9KSP5AH5AixqHUD1pDLDCKM5159snFjHJgLNqeHFcy",
  "key28": "3rjhnD11FFydoV9bVRGU4tXCZK6BF4bniqNnwCd37vsVCKMPqEqkkqc1EakBL3XZHvrEEVN62jojdKm3uzC2ZKLR",
  "key29": "K8UpdGHWPyBTrWCuEDcNET87CTCpZYXHsYjpBuybJ8aKWA65vQ2qjuSCcJ4Vnm842xAksh4v9QRLMegDWvakkPm",
  "key30": "4kT71DLmMCL11MRZ2Zic776CT6TbVhbMJbo7CP7X7DJL46nDCpp1secr5ic6rAMJW6zmp9DPYv23NbjxvWGAfgT6",
  "key31": "zpTcZ3XE3yF36i2onvVRj5sfDrbYwuGQLFt1qRiX9Z49bmWPjU1GgdxJDS7BFTycvqjDYVx6U3vgjH3BiXCY6MX",
  "key32": "4QXJfs2UE1S5sKKp4kEFe6dAt3D42bJoQHUVo9UsXTzJd62BPwnqcXkJMWBi9XZkm8wm39pSe9L1fYiPi3M3mziS",
  "key33": "3GLsaudEwgtPzA8dxnaHCeMbpBdx7hacbPWVirNCvDPC6azFADAeAWuVHGHeX6bafbgzYsiBKUWteewd61P8wmwe",
  "key34": "5G8jPKKhYhXnQNUypyVKxRt5XpAZmW81b7KwZdZknEwUrqBUzwYCGFvhqgxC4q8w5CLQcNGZ59PHGFvwig6k4UxC",
  "key35": "659cxNg9TSVJZeZm3XA8CbF6c9k8eyUNB954YBfBPHAyUaKtT17YrrzXBpoZwJCuGWNY6QVVqbW7124wJqnUXPQk",
  "key36": "55v9ygMuvo6yfxG4g9iGnrBDNPugYr4UHeHjBeivLHXkZM6ft37ZTjbAcAzRFdcAJo4JVJBEMmnyaKdHRL2mtTGC",
  "key37": "2A9YeoiFkANCoFNUUXmKwiMebtUfHxswYzcYkfKsxsXGbWbToh88rtJsA9nkjTNjDr1Sz3cRySQgCfucwcEGj4H8",
  "key38": "2C6Suoqz99YJMcitD1Pt2G5GR1R94qHFm1qrfgMfZq8Y5FQPuk3n79CoQsMD9ELQQHkbLgJvXDij9EtxeB4V9f52",
  "key39": "TnnRFSARqQFRnFuyBS9xEuHjiBd46B4W9tEB2v3CwpUeU2uEEmwhj21Yqu5tppsM23WxHTCQx7yTpXYFXrQC5Ke",
  "key40": "27e4R7aGJeqewDRcXkJehVtNyGmnWsVGSCTyrPcsTups7KnTVBCKvk2oqY2idwngCcbWtT2eSiwuigmaztvGXPRu",
  "key41": "4Y2MgeB8PdQwFpNrobdosQKe4ehK4LsV94zCTMfATmShaiVVVc6MyvE3eAxrjjE8AbAxG6JRKoujsTLsNeMGkSCh",
  "key42": "VJmfFYDSyavsbD7HeThEnRnwrNsBxUVxNNcetCdUfUf73evNewh8W3s6eFJFSdNZQ2gRiM3HVcpxdse6K7ATLLs",
  "key43": "tMo2VTn287oJz3z7HBphyVrnopkFjL32MyfBhYNPwdMgVCfX7jv3AziUYirKmokj5dULUCHMZtJiAkY4vzdobfw",
  "key44": "55U6C8sLcQCaiqJNAuwxtMpkbp4GmCb4cTWCfuUt3HdzawZLtvWyu625h4jDMmfrG289q5GKxAtsFSWKqFf2E6Fw",
  "key45": "5LoQNviKy5qdcvpmZwdLTChemyZHsBgZpGyX2WfbWpEzQiHRcpW5mrFdwAoDqgVZLEsAjUbGwPymiZ8apB9ysbon",
  "key46": "62AvRcsAKXrkvBMox82VLWpsATXLRFu6S16tDuTbs1FZJhYHvgxL1d4L7T7rTRtwxeny1dZCmn7QQQ6C9CvPLP86",
  "key47": "5zhuwj73hc1dMuxhgW9oWBAaxQKTD8rE2752N2SziDzsJEiF486FGPR6diTENWTZ2358yjckzkZTsLcFeTaUUC3u",
  "key48": "4XNTuBNywEpRa6ToA1p9gt337xED27dK4n6xgzefte4oGwh8AtR7csqWMpioFn7hKnCHpaPT5V58avKN4PUWWG8d"
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
