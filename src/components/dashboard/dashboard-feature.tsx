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
    "2BT84FdRz5CWrdj2mJ6PWveN9nHAHBfg7BfqfdGBSG61AkPBMWUuyriZEB2mvi5gVHcuVkzhqa289pk1rs9PJ31u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qRXNiTZhAyUdDQoQ3Jjex3RyAxLV2LTML2Su9UQSqztbAHJUaKmw7td7Bf6Hn6k5srpYGs3NwBrAjRbQsVrRWXz",
  "key1": "rJE4tjtXprCxeMv3Wy9ZVu9wZ3iwvJYUPPQm89DTimkom9Q8i4Vpse9eCDJUaTr5WdpwP4CX4XRKYby5DCR5fNu",
  "key2": "5VBbD3oY5LLX4bVznbAGSw99ZSwgmrJK2S7aWm6ZeohyEeiPQXQmWf5AdajBF1DxyehafXXp9o5hgsRYjwSXuerU",
  "key3": "3J9fYW82vBy9r6zbJbdiZEwrBLPTZyvkwfWUF1JdCymQrpS2YcV2f8RhGPMPVwHZktHnXVbB9HefMtoEssYmv8XU",
  "key4": "5tiKVovfZ5oV7Kc7YNVioA2XEwPGNwqecPuwTujBEMecBH6QUkeoACawnec5ctaCZK21hitfoMKvXCvga9vZemEg",
  "key5": "4f9rs98ys9jJgPhmUcGWNr32aWEHUnVAnL3sLTUAN6qZTBrFNJNNW58k6bcUAjBzHtHC6uxPaRkey9Npt429wYGK",
  "key6": "5UFV7Jbv2ig1opVt7Ng3WokQccomi18bLu8NtydgqCGg9vVLhhkYKLr8fW6HkQirBzkCsECyY5Lzszm8fF8SRmfC",
  "key7": "5GxZULMbnUXVG4vm12AFL2kSEkeEB3amV3asHzTCA2jMSr7dChmWfYhGAbLx8mcQXVSRkJ4sN9ZXUPqtSwCnWWED",
  "key8": "5pz33LB5s6jbAbyQjYdS55FY9inWkqrP6zyp3LGRF6y61NeRVteg7Snt7Kh4vbi8jJ95TGnCXzkFjMusEaZcnwMs",
  "key9": "26Hsfw1DvP8Ltr2dTAcCaMLpkU7XBwntVGoyncdCpZkskjpSqvuAZTda4mVXAhVWwr9xhotU4Wgqw5RF7nNrtro3",
  "key10": "Tp7vHmTTg2hnNDFvhAUmz5Lmq8q4Bo8tJ4baomdgAmMFjsA7oq6naaWQDQGe7cgPwV78djrCWWr6dJC3AE85Dwt",
  "key11": "65WZ7GkDsMmXhLjuPyuqBD6DEoiy48zpJBBTwxWSPPdD3dQpuyfnXtvVDW6gT79UYspdpSSDbMEpaHawCgmkZTK7",
  "key12": "dXEiMRGsbZYZfeCbxNMXiJYx7fhQQCPxdQ61J6Cbacs1pgD4uKk3Xoh6HkNSg8NFA1b9HYbbcTZoMxcSreVzK6A",
  "key13": "5q3ufz3PW2cVS9BggcbSyyMeX3si3ZUZEmg5iuTFfsaKU99hgxUwwNZLLxzPDUTWkeKgk4sb9dsEv3vVf98qVFkM",
  "key14": "3LPGU2xNsDESmSKFuPbZD7gKQjEcPBYzSA34pxJq2MFNbbVyBC6FRiQB5NqAxxKt3w5vhWsAJ9peJQq5AffPbeqK",
  "key15": "3gAUSuov9mV1GnuVcJdcVxkGgDFwUUXnQjQPk62vpFuBYZRSiWGZjVuj8ni2NiVMu3Z2EiAxwWQdovwBt8FxqAKN",
  "key16": "4Y1eyKa4D8QdbYkNBTxAoSunZRZx41obU9NEwV5eTuKBBijmPzpi32fGHfbEtD2XqKjMUfQ2K89SJea7FQLnfX1X",
  "key17": "3f3wavcWALqMDJcMWzvugfWaciYNUJCwYkUQoRNcHcgbw14o4STS3HyY3KseMxwG83t3LPin2bnnDy3GmRir6hho",
  "key18": "3yYF6nPbE27aV58mpy9ETpvf14NUeruBRVw9yu9FxxuWroXwT6etrMUzmoNpGnZ554eCkUbdUBVCYVLm1tsx1FWz",
  "key19": "4WXshuntievveEJD4f4BZa3QCa1MEHhrUZt2o2hc6YUWcAj9iFrzWWvmveYK1vHq84QCFM6P71kP2urdP6Ktu7Mo",
  "key20": "2Z8brB3n4XiQLKGrAkMTRouGWQRY8sH4zJ3UULv1gZgnLerNmbhHg6vms3RPK9RaBfsUSLT44Ae834cXv5aSonV3",
  "key21": "4YPanokQuULBNUqWypjgDnugYD5ZR6CBv2a15Lk1LGBARRaXAebu2JuQkTxZhByEkxANVc1QEh3kgzZmZr2HozGd",
  "key22": "34BrDz3A9w24EZRk5HaHgBbXE7x2iEm6MSQdaG6iivkDYkzahFT2BjMjwYpj7PjkUdbrTueMwUHpNtikFXLEWMZ7",
  "key23": "597rZ5t4BFxjoVCwV9YKPnakTwq7QwKpNjymWxoQexNNM1Dx7ehvVnWGG36avnej9zgTiticjU8na6PQx9JoJw9E",
  "key24": "2eNDGQSkT4Wh9x4pB3TT3B9Uqa69gxsTG88L2zQgtVY7XgL2Tj9FCPUhPYWtshyzz3jBRqvFvGyinKmfNhgfW125",
  "key25": "4LWd28R2mfECZPSmhi6S8GGXiSpG4sw4s4jsX5Nq6Kco1dF4Zo4yctdrnHCueRy3DM9FMaSTHeqDaY1e1cdRWyvG",
  "key26": "7n2JTSqo4WhtYDKPhbdejj1bg5zWDAcqW1MnQLny6QwHb9NRQZT5BuVftA9LPCm4G5tAMqAKkdkWbFyiMS8atsa",
  "key27": "5bUqgR5zpQzo1uoErZQKjYn615FPwi56aNPWj7RKqGA19Hqf3ykPhW3vUGjpP3FA6qqRLb6ArJf6NVvc9vNTavYt",
  "key28": "4q7K5JHqmDxZXPpBsetNe5amb84p26qA8MrvkfFYYyGr37QHY7MjyQ4MPqXYRm9sSZB4Pc1MDNiCU8iXv6Uc5MWf",
  "key29": "2GDWBuXS2ATFuJHAp16g2NHwYiMftrrknSD8DqXpaRs4L29a5yqd84NbRnUobecpHHbZvWRLKe8PeGe9kryUp2q2",
  "key30": "8tNGyGwXxaNTeryJeyMkW3nuERZBZHEFZDYdYWtTXFZaaSzdgDnBDqoug7uTJit2sF4wztAn4bVcSGC6YCqkFzP",
  "key31": "2xwc2GEs4o9DnVqt1KhA2PpXuNcb7rEJGiNtysML8QwacsCHCvvgDkArLxGHK242ERU8xZjaLV2Z5xWpuSXf7yPL",
  "key32": "aP8YFef64ComSnttJN3cCMMLT1ie2iaJKh7fwcptA1TH3dQNipDDngJS4cJu5zmkkQ4yiodW4bgC71oi2PeWQuT",
  "key33": "2UPjSnLqSR1zVAuhJ4HE6ZBa7UeT7TF2Ln43Kt9vG3ZxvKj4j54EttRKbfzSMoYBsMZ1kN6npXwzi1uxM2fdEqFN",
  "key34": "5mGKL88mJL75tzpd1UVBZPFuKQyyQoAP6VQubeGUGkd3cV2D66Z1sTpgdkDqRy9wmEBLtn4FGPDq3TuFAkscRqms",
  "key35": "4iVCV9iAQMcTZ6wLTq3i52Gm4KzHS2dFAZFE85ArFGnGeDXXU5zqxYJXDy1gtRGSs2bq4udg1k8hVLi8Pga9dkNF",
  "key36": "4fR8BisdwnHhGAMWGEHJxGPSKsymRyTSdKNeCzjL3w8Bf5VLfdicHmZudAS3avrYoFmbaPaULjzu2jvJYpA9fAeW",
  "key37": "5mrRjNDHspBdNZxUTR4kL6oSq2vg1srtAetrGGv5RkkAX7qgdG7rtB1RpkN93oEVVXWyfWnzL4VLLX64rhjmZoaN",
  "key38": "VwVWTqsAwThzme3P6PWfdmtqWZ1CLqikcuLz5ZTtm9aw8HGBwcoEh6xno5rBdwY2djkFYNnaXzDbB9gtBRVNbUp",
  "key39": "5mqCmviteq4aY6UYZTuYWo2yfiDC1diBoCDnbDBByE3q35Fsms4rG362nb1Nh4eFtMF6sbJe3vp9VLrRSif69cpC",
  "key40": "5kU1yz8saS7Z3NNPHAo6VBD4GJVMcwySUWJRbdps293CQcP6sjMQVP1Qt5BtXd6db12rZrmEvGAm56zBArbvrN82",
  "key41": "4uBhzb9PVWfzLt3S1N2wtA7osozbjiXNVCGSo8RZVRTZqKX8zzuC7aZecQ3wBi3shGKudDfaMdRAYMuRdkZnagG5"
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
