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
    "3RqQxVKqUuP1727KmsnvNWMd5zrCUsnZb2uqeg4qkm6iaxQjQ2vR4KJR8v12nMoXWgJDRUsSwMHgRx3R4txWCqih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n4LDfp2KFt6sUSvTDUwyuw2rdCV8PsqTUyuASbFNicrvpRVQcWZGxEHsUpcdEsBS1nibuGGgAW7QMPKcEZ3AS5o",
  "key1": "5XwwGFGXMX9UiLQtREuZAYy8G7Rvbquru1ECe3MasQ1AcGiJX4Y3p7BQuj4fbFJ8oLvWKZGjK5bqKPnQXTTWdqyt",
  "key2": "5xEAXMyXGLvCw3gGNBJQQz95G5vb5MgFHX919m32N8Guf2Ls1CEWjXSrRJNn42ZrzRsceDX4138oD9zVSfHZdPyx",
  "key3": "2nJkdWPUugxceY4QSNeH5S68wdaDKAk4gv8Sy9a8Yi5aeE11BHPFtswx3kQu3MBJLr1zDMCCCcaAQ6HVHAXz7LBf",
  "key4": "2t8btUPFrzAy6jponXdLfSjchLsUjgFWAFD5EzSZYAc4cch96dAUAJajKXgt7ySZoxet9vhWfwhF9MijMsDGrRa7",
  "key5": "3yL3YbpzYmgERaVu3khz9p2o5XiRMPYcoFVSttFLY5VzbUmNcHsS42RFdmyjG8pxdpREf6RjahmSMcm9MMY4eefS",
  "key6": "2htcz3dvxdResWGw4UxuNZS8YjkP1AaCVtEMextK4puqe9zNnJdunELZYbw22xMoFueYUXBUyNsEvfwiCMkDxbHL",
  "key7": "2X9PEKcVzvUrsL8EH1WHhCVYv4RhwYEpqKd8o7YWtauVS66tN54t9tfiRZyk5PwtAzoQuqiRePwLiDtGorG8TQtN",
  "key8": "49TQWvwLaH3J139gRkDZ5meFVTdDKqMHTmuWsK2khfc6fe1ZND3uX1DPWbNiXhyVWxAiGeneAwghKpcGeqmbEYvk",
  "key9": "4AS5RzWP9Ygb8Bu3hotz3ziuWEz15YKaYi8XsoYLKEsh5Ey6EYYWMx66ZPXHFYWXLvC9y1DiDmpNBrWv4cNpcJEW",
  "key10": "4DsCpaFWCUdpVET7xitWun5Pxjq1ND7yHKUsnTSui6V9MS91Xqj2P6cFhjzLg4kzDQrjNpGAzX4ytH86RqG3q2CA",
  "key11": "2ffPZjuHfPfc8afEHzStuo8PBjTTF5CmKvJvU5AawDDMzFLoWUVUaAGD6kpxegWeveZcRCzg5iCygg2qPw2xNLs2",
  "key12": "3q7yeVLbh9k7xrsuPE2sKD8h2KuroPaqS5ULs62d5d69rqdPok7cNi2AzS5qUCBvjxhmbvRRm95JmFKD4fvWGn4W",
  "key13": "49FYYQFYQxE3ExZLXLVNF2UjDfW2VtDkQf1XBtBjwdhmhReo6ZQLtVVqg7fNs2iGVkHfzMjyrVnZeRZ1vrDi2dR7",
  "key14": "4wL12F3PvnQJmdvhNn3bW1e66m5e1wTXJLPtwCHbYtT42diRk2AmD4x8wf82ctQzPBcVBt6Zh8mSawjXZAMJ1Rst",
  "key15": "5edvDotCv3MZq8pKq9rjWLtivLTxxJHyZMHtoUSKZAprKNGrr4o5BE7FCscwEDosEdg412hxnwL2chrqsz1uyHQL",
  "key16": "3KQ32EYSuyjVCycBj2biD7JhPjDS83fXtEhSPE9X1s3AUDhjLv9x5dDPo521TbeuC5JwBXzTKxnrsAvccHadZJgE",
  "key17": "NRavGvXTLxi1L9HiMdoFDVJvYFdqYya46WLtCVt16mS5bVi6p1ttp5BH1eF2agJsoMhaL4uVvuaeHWDwb7mHvLP",
  "key18": "5bRqBRW2dgRQzkyHJqTFo23PbUTMWCCzsvHNqsuLiCbt2Z6eDznZ6np2uK4gHWAjAXGU1pFAGL3xNC3Pm3yG7D7M",
  "key19": "ZA9MBxhBYWL4NKwfm3SQCvuULFARWSHxcENeRy1abp7Tc51nSiwUkie1FgVQiNnxMPF95P9VwbrZXw4fH5WyEzG",
  "key20": "5R8WNpu5JdA7wuNLfdREMX17ouJ9Xaksd7ykvKrQt4mBYU6jSGkvGJkNThkKU9XtApS7pfPcwAuAwQcCBFrUo7wB",
  "key21": "5XkNt86QM2dG8PaapYpenkfNXEYqXv6rZDyoW6MSgymFwmo1P9ddBPv5tStiw9VGovnr3e89BxSAfV6hUZgLWGWx",
  "key22": "5gUVdk7ZQt96E9pHyosrhcvVJTPezd4hpW1UFsN5hHxDdyaYnfWtCjg7GsNr1oEy7By5fKbFLjoQvJP6hToizxR3",
  "key23": "3226hd7USoVffg6exQq9dX4zjomsjTZJRhJjtctBpYR2ArZFoRXkWkfSu5G3xmAjdtVa6krjut4xbNZXmLP6VMZo",
  "key24": "4Dj7H9tsy6jjubD4D4cKzET7bc3UtHvHN9MrLgKfb49srda5N9r22Xrm64kibuWvYiaULNeVbvCC8Vci3AQZcA2X",
  "key25": "3tc72VAdZ2nhK6KLU5BNUAeRDmQYpJNoogdZVqcHHSkLuMQu6tTmnwdtyxr566tHrT2LV2gqJyWHHZYHh94mH1Kj",
  "key26": "3yw6RFZ3YWEfHibw8dpBD13Yngv7iT4QfQNvKmJfp6ZdYUaDdQaHdUEdqJc7BcnQeRgL7wprCinzje6QYKL2dPeW",
  "key27": "4zs4nakzx17qLNFbtLgjSvVJZzadE8fpRxwBHun4Vkk2yHXejafNV9d2aSrNtJuF3HmxKdXBi5B4W8hHunaA654F",
  "key28": "5L1V5bBHFPRx7ifRVEAyYXskRCojyyD1tA1ECYhm25Fp3BJdTPhbXdgyASUMKzQxw2dPutBaXdEic5DCou6BhPPi",
  "key29": "64JV1bkyUx7LgDdP54HvQkkuDe8bLjVnZmzW3uFxLjLFUJDm1xCV6Jf6X8WKn7rg9UUGi8LXn8VkiXhHaRY9otGM",
  "key30": "2Dpgy6HuyxLKg9pSUbEFDbYviofWCbf7HBB5tbXrp3Pz4TwVZmsX4RvFn2qmkbXhUT7vgSn4Yg6s8W8Hs2QfoAxQ",
  "key31": "4GPwWHqujoqgvgoa2tYsiSyppfzLBZkNs3cZfJrb1HKStwiHasoGXXPLRXYPHBiUou8VHLrMEFx5YFv7CN5fwAtr",
  "key32": "3HkkqVDCY3XREPfs9zh5To9RGiCn7G5hKPsx6kMWsxAa7ugqnhF8KTKRV8FagsMi93DiwEzt5Xvs5jQBVEGftVDy",
  "key33": "Jp7oss6MBA8Mhw8gHvapmhUwMSGNJmyYyGVYw3Mh1QRc2qnWFEVqf9rmFeszdzxKjyDD1Cjs28m42GoyQ4xqXPs",
  "key34": "228Uh6d4MFrA9eUM4WcQpAkZTbRxh34qNnGhA63vqDtEFvu9BbcfpvebShMcr7WEjVznrex4io9v5C58sHwMDW9X",
  "key35": "mWDkvVL6VSUXJnHidUwhsjah7cToxXJhpHAJ3vWqf7BQXVXbcq9D97nHAQVgsawbUizz7NKZdfrWnjHkcfQKPTi",
  "key36": "5DFoeN5EDRTF2YhPVg7xWRoCi5ujxnUxHBKXPzsnefXd6vWjwbiT9Mo9wZraGK64yBrX23w1ZXsaGS4vwmB3ah7h",
  "key37": "5B9KNqPvocoKZf12hpEfJvdXaXNH8swmkqTBzuRXPk2Jd5aGNmdjgsY2YK3SHxxKh5PpxjQL78CHoiSu6XaGqEwV",
  "key38": "5odZxVm1JUfMFUofkeWrJJimFKvjvTGAHJqXvFEwNQNUSmLE4TSJ8Uv2SXsaqc4UnQof3z3Q9bFEe4uqEgPaB4zo",
  "key39": "ZTu6PLJ5GGicH1TTJXLkWYyHCZ9qNrToafiqYym34ttnm4XZGSV5qY2kRZmYoTBNdvxMqzDf4fddHeQ3B13ss6Y",
  "key40": "46YNTx1HgyL74kykzLNm9FYiXLLVHhhuboro3GQ97AH43oMCdmUboujVtEj3VsYzFnsdVRKdWudRs3vEhpj4pdce",
  "key41": "bAE9mwfXHmFKpawNSir1y8vZVLi31fyYxyH7KqWfMxDsLT4wVAGJ8dmSkLYLCUg5bYcuk2Y7w2HnGN2fxS9LfFG",
  "key42": "5MTMWqmLqi582iHovrHNqyCsYeUV8w21dEjzhdB9Y1fP6B7gCAD72HCDQcwPCoGVEncxKHTsHRXWfetzJthDjdU4"
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
