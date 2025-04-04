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
    "4cRxgGqR262H2sdHAbj9cjKvwbZovFWja8w1iB8wPhwGnhcm5Yet6fRa1kjtJM7ZFRvacz7Sgqm42ff7rCfYhvSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yMLBBgMbYSsB4YnfpMrVEgKVhxruJK2vXPMjKqyrFPM6hytWopr3fMLak7HajwauNNkQ5TpiSDDySGuGreMAt8H",
  "key1": "3UTotZEebqKaYgnex5tq3xbTf1MBQzBwayTQNPZJA5QEriyVcp65EjjmmVXBUBr14RGbonBxXgcmcC4aCfr4QoYU",
  "key2": "2sgfdrF5ms5VLmCcrs5vp5nY77HW3GgY7gbbgUzXL46s1S2AuM14yAmLJX8RBph8ZmYfZCLak8jsvMVDemvfiQ4S",
  "key3": "2ecHa4YZeCKYbrmpdA6xkhYEEXhtD5u48uCsphYzDoNJq6hSM8rTCh7Xg26yUc5rkQLjuEGVdCcruRp9mmP9AcXY",
  "key4": "24en4nh84HLfYomGyWt1TwR6Czcvexy4F3W9mH75Y65LcSnjU11nLAc5kGa6STvmG5ysYqf4PkJ26a4xuRpWdi3S",
  "key5": "3CucRrFptyaE85BjuT6SrFtgjq1ncbiAMK8tHKia6XwCTRGG8iKS6J2kYDmTsrjXk77YYoyneYm6D63KuBYM2h8J",
  "key6": "3PJHSVmVNDtgoh3Azntb9PLxKBg7khtYHCUUqmnYiUVkDwiz47q1xkJbAcF6JshyaLSnJSzwrU1ZadTRhotyJJNS",
  "key7": "RKnanFjaGNXGmwwPLsWSWTYGE6kvxAeEapX5SYJFLop7PTUoRppGJA7fHKUFK3Zru4Cww1H1uS2QppQzNpAskyA",
  "key8": "2NmWf3qNkBfzUBUsiM7Vk1Kf5YnUjSDscoXdNTnDdt92ZWYQ9cvcSNeW9S1tH5NzPM2SD3o1xfND3E5H3cLduh95",
  "key9": "4N3TGCWjDf5Knr8Qb46hEDkk4A4hxy7QtRCQTmYN3u4MMfwocwXGvoebH8Avvf1bUmmmMhBYwMifVWL6ysGy74p",
  "key10": "54wuZHC1fKQd6eLTs7ShVDGL7yPQc99ssudDVuEqheqPiXjKkErqSEYkZHrE7ihdAjtWDPGvi6nzpj5Zq5j77TPc",
  "key11": "4ggdG4y3PB3vxCX557vNC49LDVnkuXGhmxCHXmiHtkWsUiKuXpPiWFCnT5t8Bf8PDa6r4QSjryqKzVbzV23YyGmT",
  "key12": "59rWEUo6F4wxw6x2vWBWRktEsSr9bRopzaPn9os2YLmwZkZ75vHmuh6mgYkNGLdUW46qkJf7wjnQ6WKyPFdhMtRz",
  "key13": "4ZxBMD2wUNhjtnb9VubjxHWBerogMEnbMXa6CKrLTyq28ydfQv6EqZudd16jUgPgcERKHanTagwx2JBxGSSa5HEc",
  "key14": "45L7LwiWmjDNtDrf5JGEupAhFohTLWNdUqLGXNXFV78MdtHsgkSGEEzgqRNYAVLjAwSpK38KHDMcuzNsZ7QqKL5F",
  "key15": "2ihxbFMySPjfqb34PQJhxFC1QXuFXGCB4KK1R58RjNM6HYoK16FLW44CgtgNan3oHe3MNbSYG57QUQEi5s7jM7pP",
  "key16": "LAbbf3Q8rZi65mrP8Vw6ovwL5dE5SjLKpXHY7fLPVQfyT9KM56DALZFoysa4QDfd6KkmDBsQjuPpgA4rGuthZrm",
  "key17": "35Xjm2ZFbHKLNyaNDRD9LuEmcnSjJG4J2aeR5EtLPLMzuHLnsZKw27t2D35CURieVnNuahEpXUu8AaSugFvunW2Y",
  "key18": "5VERvYEhhxSkNQZsLgw7V1nqr5HoAkdTaVi8QdLjRH8Cv1aFwPdmPziiAuuSXNggKwaLAaAk2Tf19Ydu3qLPEChw",
  "key19": "5PPhpBxe4LUJxUfEHagCLor9C5MgqrHAATn86d8p7stwfSFVyUHVk9Pg8Ek84GX6VVTmoyqY5dpjhUWk5iLGbvzG",
  "key20": "5b2kX5DjHiB1LuvSxDwLjkq45LUoqG4s5hPV3YybabhsBSRoERQ55VdKfhTHxq8L1v6eanrDKkTpeTaYon2NgMNQ",
  "key21": "4zpUYCobKjcPT6rahXQDZG5437a5yCFBWAycR3BDVugapBpCprv4YuT5xKYr5aoKHsoYjdsLJTE4BJTkuCa4VgDE",
  "key22": "5czRSsZAQhBJj2W8R1JBA9pPc8hWGQAnRree6uXEfyKQU1oQPNML5AaSniVWT52LqsFP19xGSAd6WY2HmRKEVUvA",
  "key23": "44Wojak5yjVMdnxFhVcbPqcDDoz1X62Bt9Kz6R7Tgw5WzBHyzQp1qMKuoq5jGESimA16FMSZJfwNxeBm4TeimnRM",
  "key24": "56sWz9KY1JNVPGpdJnH9AeMdtrgQTTTLnxXd5cqibCfmpJ9Qc8ScVgfvMCX4x4yaYkA9TL5ToDiZd2XYbjxGKToR",
  "key25": "55SbHAFztGywvE5mVTPDotFqH9Gm6zi1Z7RUQdwyKHSp7kN3wKDJbghsaiExRPmMm3Z1hyyKXtsANujNSBQnj11C",
  "key26": "3aNYPgGA7cvB25HaRigDQ9ygRFQeCaSkyZNULJUgQfDKZp5Mz2w5RgQsfYxfcTEf8xyr38zAgap1LuuVLBHht5xH",
  "key27": "3YEciR69UmyBLWYioqmkZzeiiHWa7uYUMT6k8xTGmYUbTvZPF5Ryq6Vgcx3afKMiE8QDU2ofMTYgXyVkKtbSwvZ9",
  "key28": "3Hp8L4g42dupBdDiiXMiGtpXn9ZmrKniDopspXbHPhkWt8HdmqSva1mypfBZ7viJ6VuqCMNYbMeKcUBdpmZXpfX",
  "key29": "3ThWJLZg7CWaw4ifFeaud4RK8wjoTUbWRwT6zCuSypwv1VzKxVb9USxkNuqeFso5bqBiZSf7MfyrXcVey1aqZSiD",
  "key30": "cavtJim4AbKiaYKEPVj2uxT8yWLp7xSzQKSh2jD2DEum9bFxgpmujguxEGDM8cY1BE5zYbyAKhGVkcsFK4p2TgJ",
  "key31": "iN3TGtFNPmoA6JRkpVfqqLgcpdrhDyskB8j4UivZrK1x8VQgQDTnxAUbbGN4HJeGQhRM5iFPtZSqLW8T3kfPdLg",
  "key32": "22sMViP7iwRFfShcDdo5UxjyuqHBVtoqs9Mzc1vw9cxGgUrbEtqJD8reN6bx6pjpv922Tgi2DJsKrzujfdn4cACq",
  "key33": "3JSvUnpNhTMqd6joZdyRaciHtWPtCchnMGTYoGR1wAW79hHyJuLmuDRoJyXyNGB21thT7QKsgJ8AHWR6sNUW3zKf",
  "key34": "4Ej3wfdAaUzxZaXT1aoVczApWtXVssLZXMmwKTS4zBopD1tMmRjtaueLp1z8xirLoeDfRHLLZP1zSUKZit2kGWUa",
  "key35": "3KA2RkBbSbmK3drqWskHBVXLhoA8dgBEWDcVNLesMQPJZzUYiV16T3zmnwCeA8XBNRgwqoJCsPMXHrM5k9deNm9L",
  "key36": "5ofA3tciwz1PtgkurMfDs2HKNxRScngDMYXpR4mMGNmpPqw76kQ3EkdyQuthwh6tpYrSaZux8iDYzPA8fMPsEQHK",
  "key37": "2PH61HDCZBGV42RPJEjMWoqd1JRoajcBkhLbHmJfBJK5gJZP6oYjMifuuNUKczk69UTTwqMnLT118T25KBSwz6Yr",
  "key38": "3Qjp1mUi53zhz8Px9hSuXLYEuM6QMiu4U5qEgUULtn86KBA716gk8k9iHbBBrMgnBDansfHR3TuWenwt8kwZSGq4",
  "key39": "4TZwsbD7ycuL2bxpWgrAGfp7aahSb7VcoNuVcH2kNwZthjrTB55xtp4y3js8w9rd4LkQQniPfR5wc8XUHRKAmcdi",
  "key40": "jzpQD2VAzgevCArDwRJuwAG7BxTt5X6RZMDctAtAqo9HKfjW26CWucpbL57D1Jn3mCUQjGvQNKNkSzPZKTZDpBF",
  "key41": "5hCJxoAXqcaWmt2VE4F9V84eDj8qfKnsxhYZfuaxAvBukFAYsXsuACmfKcobvCrUAhQmXAQBscuavdqbvqzBx4WN",
  "key42": "7CP4aDY3oMeXQYrE822ooy24x11sfCcxitXQMvZHXkQB3EXm8E7dFNrrnayhSo6LgdT7FAJgHQPu4UBJK6ctsfq",
  "key43": "2GZvFUS84cPfCRcnzfxUDnacyEm8bSK3LoKrq337eM2ECMWYLBNh61JtHitLsnjAmG5LEw9ziMvVTiuKqSBEahdz",
  "key44": "5ZzYhXDiRcvMS92YACzPtGuns7WUBR7F481Gtt7PC4LTXd2uRKWaBRMPyqhrxpuZdTbWQKC4W36FLY5vDMAH81w",
  "key45": "4cnvbauXSvw8Yzz9E8J5HTqKNBFi8Cj8EMDN9WfQbjikN72MzAxLVtxDu896UoNG9ERMv7jV7uUt2BvMxk4b2VDr",
  "key46": "2XnLCSzysSSdKWS5bGcU1Vuneb4QYgxhqWz7SB9z5vTc1gmLe9WZCUhrzkEKqLZfmdn5JxPCkMtm3GQPkM6vxKpf",
  "key47": "RiLX59qmPG5X2Ls3G9U4iDNRt1ADEQQp1yxXynQqpnE5TckgcdaLKUJVeDQ6rUbbcABT9QeiCLucmNuZ7meKMHT"
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
