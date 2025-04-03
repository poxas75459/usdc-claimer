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
    "2D1SzJSGDUeeiCJQ67Lwnz7sUcmNBpfM132Yj6nUib7uXMmQVJCjXNZkujp374E7et5zVa26LaqBbs9eQ9w1wzdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AYjfRst4VfGADCViTTkURLrKHZjGiHPTf1dbpTD8AENh4UUwiqPvWQpDjcYYDT4uPMRn3BxsfYEygL8FfXN1f8W",
  "key1": "W4BBJWvD4JPWqFpdziYUcVkVBePPiPv7hQRBFoSLDPgGpj2apGekPtxqSeVuHwdUrSk4eJjUUvqQQJsxy6NUJ8i",
  "key2": "MjCxPTAav27mivqcbAJUPiTrKM8c1YCTHRtkJNoA5i3ejwKLc13dYkcaUXTrrtSRZxZVMSv9wSAuCG68PE9frNW",
  "key3": "23PdtxSVeWyUAWuKeb8oL8i26NWtQZnutzcFoA3SeH76REN5dnZcATxhDv8gAkW7vHXVBSU4jEnEwNcdRPQSYPbi",
  "key4": "2s5E2uEQY9BtFFcFpAMB8GX6aQncSLNNGeLZg8Uez4GF9sKQKZE2iybM4mQcYHgu2cq5CbwxJJtfrEzscP4y6Vwc",
  "key5": "3M4b9eKYFsGWrSgd1kE9PdPYaAxpWRNXd1HZb4XcqUeRYHAS89iGbiaNjTHMmCdBEM7btnMr1Q2emR6q3qMwpCme",
  "key6": "3vkvAEfAsCsPW5uZTqobB4KcDDF9kuwYsU1P6U4C49KETvrDwpDtCPoPoT5qttmkDbGjy5AUVUiy8v3Mbr8a9RmL",
  "key7": "22gpaeibrJjTjZiZhjdu1PpRz494xTs3rjFLsDkwZ9i2YqS6pJz2oDow1ApjoLXZzHQ3EHR1BKNiohHwy5TM5zD5",
  "key8": "5ykzHCX8NE1EsgversRmdcPigEPJiMo97MNXW6375NQ8QTqY8XgtK9WGMdiu8fLGzuHU5QmveAMeKhvVdDLiT6Da",
  "key9": "2Cosynz3xb9r2WVmQBzL5nZKgJeeFrJtVagHecmVpqwTiTaWwVFkC9wqEUwedrHpXntLqi7Cw6MsuVqSNabPNvPJ",
  "key10": "51EBN5smYPjCTjx34YsvaVsyjbzPH1ZF96fm2X3yDCpJ3k964Bh99LcBA3HPH2SJPeSWEFVU9pfbugvwfdwfPbHm",
  "key11": "2PF3kFHXgJDrLjsogtZBLcK1T6tLG7ZBhXsLtoprz27Hhq372BxvaPSb8y9ufg5TzH1dR4fqxcFXKNY4xhzmVE21",
  "key12": "5QZ1Mwfnw7RnPmqUeMEbjhEHtMk6PuhL4A99yXp46xzaezS1ZWmWMbJ1U3drKoAvowWidA3LjPmmgumRSyX2TsKi",
  "key13": "22mRuzK6996kAaFWZRN3dYomygPBQiTdi3BVstE8NmyLDrNsUDjk1yjta9b7zabErMkpuyWX1KcWtBJDfzJkSUpL",
  "key14": "FQKNDQHTNHemrWPBT1FdiHmHS6uLNcA9ybz7pq16unwph6UcM8fJcfebmGWPMrFbnpYZrCvs14aEwJowDzrtbS7",
  "key15": "64PFwzeDpmTX5JfsFFwLUQ2QducoUVN2vkRVF1kpFtRfagH8PKMjZqPeBrQUGYRbiTGvjFnesZCqc7PhLtT5DWVc",
  "key16": "3FZ3xermAmvgS7Mh1Ap3eAXMtsbsnXowwYJzdpxRUHwj9ebuU3tgBs78cNQbMzREHEY1sk5iPsD2rkq4g86DKAcT",
  "key17": "279bKT2sXqCc5ba5epC7ofLNUmcToiXjRgSCWD9iaU5TjdhxTH4AhWqFpMuZvsTZjdpSdKSGgKR5rDCQtzG11QDm",
  "key18": "64k5akbh5suYGTDGYo7rhmGaJMSsP9QtrfD2nfY6U1a6J1Hy7nLfn3Q8QD5Z4Bt3CaLKeYkzHn2vNoVJqx1LrZAA",
  "key19": "HgBCMHF4Fb3pZQGpLswFLMH78nd8Ef6gC1aH5uEvtNHzLAWbsrwndCUDeUcRxYLCdEKPuxeJ8XC6Zns1fyKzJJJ",
  "key20": "JR255XacHRF3wipsi8jkBessnV4SJXa5tc7355MggYepAEgvg3GeFW6NQx64ASBW1iD5i7uKysYZRFz3qwUYgiT",
  "key21": "4aF6W9NqWJDj6rErynJwDt4HMn4Fbo5giCiFRobegNRA4zLxPX9nzjzv3G2YzyA3HgeaixP5yScnhzBQa36E7xmS",
  "key22": "3ARzPpD52w764gqXw4RZFqVRXbEycFMVXxcnqRBQo517PaZZgTdKpCQVXhSd5znvPK4hpLU4icv32sM1CVCPmCPs",
  "key23": "363rFaz5iL8QqrZEtRbU3v44dLWvUzZ3FhJvYnuSJ1WHB9x3rhCJoC4m49pMfXUeEmeRpd7z9bhAd9cx2JAwpVEL",
  "key24": "5U4D9RB2Rv1YPEDbG1w4YtSS1MLaAxHU8F1BTc8gyFPRs1K3heTrT8B8R82tWiXrMV9uy1Vm3362gUxwitszDgMC",
  "key25": "WHXj6xPj61ygWHd44HByFXHE3jYLuHS38Pqf3LvC2L3tcTiACLiz6C3P5LHomXi9qDJfdpjaDDpppek9NjFnWfG",
  "key26": "4Lo75YNXbxe66HGj8wZszHmUED1B7SkMecHjvVYRYuozamRxFeteJVLvuF5c8m8GY89NwEfNXM4hJWFGFdwP4CL6",
  "key27": "45JcJ9nhdpv5hDKi8XP5KSAzSrbWnJJN2PzMMgbddaXx6qE9K5ZRo6smha52LiwHws85dtf1YP97yznzEi7aRFuy",
  "key28": "zp4Qed1ynJkiETNe8A84Hh6YfJ53vZYu4N8dv3G44P7Rf6dcwye9zsuVvwKQJpU2hsyENDY8JC2JSq4JMinW32r",
  "key29": "2L9tH4CarVWgDnHcCSjuGwMrtVhUEPGg7EhJKXPSXrAuSmmisLzdACbirhQhW8jJ63s9deW4fT3U2CDoM4VGcJD2",
  "key30": "4Dri81qTqat8bdR7gt2HLdWgSjGRPGVAduMgKzedjvSBi4kuGEsAm3HhcfZBSz5M6A2ALebxSmHneN9kuyc4XAju",
  "key31": "5ZARcMqwWT3jvSQLTH4fjxdcKW3fbcNfuiwAiYn5LuUvrJNw1ieKSVqji8Chra2QUXK8wPbq6yvJSwiaCpUofKzu",
  "key32": "dymvceFLE1cFjhgW4ESbGCv6nsU2P1XBXt7Rdx6JsZXFgtMseAmGA5M4oCpVGGknZNptznXEpMYDRo24LieG8r5",
  "key33": "4y7vdfdaELGggF6Ve5fDALXUBTTw6i6TLyHnVpSiJQRPf7FXNEoP6fTfKipsu8TPtvFPHZmMAhsUNCNeP53tPuKN",
  "key34": "5znssqWbGhBMbPSapsdB2GCu9E7frpDTsufj25BKaVLpcKmQpsjB5XRpv5XNRSH7HVtkjVxpx217FKWyWortHnV3",
  "key35": "5ndsZc3MNkNo13CMd5bdcrv3WNCrdbi7HTvUY2omMmuMKaX2KYTUFz8P5gJmM9qsKTgMGszbm4Us7HA1cGdF66mA",
  "key36": "4HtJVZn48FgdZqjzKHMYzCJBWDoMC6i3xHHL18owMf5TE67qFh4S7KN7WQPStANf5UzdMYfLs7BiTrGWsoF1VNAk",
  "key37": "5kaAF4MzLnCy88jvT3mxosk28vzkC3XLpEybuDkCtz57zCnUGBSSPHRG6tJZtBvKzjPnTTtJGrpqqZgbJLwfcJz1",
  "key38": "5Bwue4b8Ce2FXVHH4N6C1hpUYbUGsW6ehQAtT2LhfUDnLGENuiFtK7nFsfSaKuRnF1Yb2S66iENqoRmYqPEwq1kV",
  "key39": "mHaUw2gkewx5YCyMJ3TVeR6WrgFaUdVZCSMnsTpuNnd5NSFkFt3AVqHdmT274243L6WhJmr4rdtCFpycx2321Hm",
  "key40": "5tK2i3J57AUANRtq98fQxCn1k2nVmWmbaA4NYvNWqmmHTxvxhpCQboKht3pJfMRthCevuGEG47pEXVfTWPcM3v2K",
  "key41": "4s5fCu5gpfSSKghRJmhYXLgFdoxPe2Bw4cqUHCXmAW3amkXeRapHKKTUZyddpiR6AjG3ypNTgvcyyfs2Ngpso1Hc",
  "key42": "5icqRSm3ycVvyhq6CNSYHs8E2zUz3CZPHieUpT3eJgF2qwE4ycErFYsRiK96pfrKr1g1xYHu4hLk2AfvgVgv8R42"
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
