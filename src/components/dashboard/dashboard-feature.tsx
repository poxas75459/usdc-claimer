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
    "4PSf4RGGpMzcwPNRNCJLQupMmapJQZZ9FFqkyo512Qmb9AM4QRjrzwd7t8SBXJxDkGyfuBrPVc6avAxKCudcXHc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wQeRdTbpZQ2kaUuxMarhDirXbCRLCvZKU6BvjUvTEqj8SuqzAj8qGFhvYa2nQvLSzjQp4dqhpJS11hJg98DNg4L",
  "key1": "3brPRUzJ2r9Bpzu8v152C8bjp3utWADq6Cnnuhsr33eJFdPcE1DMmdq8yM8EHpXYh5p5X7xKNxoDeNRzci3gwchP",
  "key2": "4KojZquTEWfj5ExdQnRQrq3P1ErpcBJ3FzwoDuaBVupGGZKKzM6HvHF85G5V6NGLSZPvioSAejkQfFmSagNeRiWd",
  "key3": "mGLBfAM1AsSkUKxx5fZRJfow9RBsV5dDp9Jcy1b9pah36chLT7QAtKW19tpUGZxrAm8jsznarT67v8HM4bymjXH",
  "key4": "4uVNbNFGpKD9HFRNNeo8E5G9JSLGhMRkoC8MY5jRMAusqixXMUH6LSasiRm7UqxifeuP9GzBXRZQJhThE6DwUh8",
  "key5": "2Qz341fDrHMaR2VDvDQfkAxFvktX6cYRPx8Exnf38j5PejFdyiyMgPmKt6rFeQadSRERJ43Afa55SjgfvLkAbN1G",
  "key6": "3Qt5H2zjzGAqFkHhJEDieAcokNx5PQigxG6aZe472HHNUnCwySWshw77wbW3jNgHQ8mBQp4zDYWMUQNwrYMfV8Df",
  "key7": "29cpKetAqbVzdb6BgjQgDkifu33cbadnZPnECUeaj8kEfaGdK9RTiFK9G2vw4PpKMEUHebyLzsmXcjrX5DDGLtCy",
  "key8": "xmPyqXn7AEBRZSRRtFsszypnKK92i2CJrLevu8cmd9c6gpcCPNWXv1RMcxrh6h8VP2QrzNxkcajgdECioNN9c4Q",
  "key9": "3zm94sDeo1jvoQRa6Lb9BU6Zc9GcdHgHP86Hy6H19wuigDsTVM5A1EZCoqswrDP5Eu9Vr1HXCiXwAHmBwLabsxmN",
  "key10": "37A5g1dCNamXhK3oHEQiayfuTQyBwKGn4M4vN7oRjny6oV1K2DG8oW8nPdouJ24tGh3aNJp21gyUYJNFcQQ9noqn",
  "key11": "2SQe3gsigbkBWQq1WGCjutryKbLj7Tqcryp8WLPCT7zmLdBezwVjYycxxu8PpuGKEGE4sK1jFzE3ZCaKqLAkoe36",
  "key12": "2sm8fD9stHHEFcPQ9M31DLBwoQ9Q5Nk2sniscacj6LPsGE5XVCEeBJhvuoaEGijRNYyfmk56kWnqLvbUvtx3dKqd",
  "key13": "2TuFopcdRPgbRUzYfaMds1cfGek4tUKRrxBEZzQvQSqcyH4a3MhpkAMpDXqn1nonKFRCeVGDaPca5B9ecoY3vA1h",
  "key14": "4tYCkyhuXFEHTW9EBNh96J4JLC7d8eU8gYoUVxT9kK3dzhZwVNTcCq6mXKZ4hzn1x1gV57qy5EU6UMJhsgZmk4Ap",
  "key15": "3nguUdfJBXto1q2c9yH3CBa5bkRQtdguCH9bfFvMDq1qSiyz9xGierYJLTXtVS7aywkh8tEo5LbY1FZCLS9F1yxF",
  "key16": "645TPe2EWGsmvK2Fa16cV3faeAZKfiffEMAv8QvuTf9NRDq82evrVrSm8YPo8wyewrHHikKsupTm9jgCVhV213wj",
  "key17": "YbLBFQJCL5xU6yTN77KSnHC5EtwL1YEoGZMkWX7wYnhPMgTHG2uUpG99J1vYnka7DiYqcgEsz1K8oGjYKN2nkqF",
  "key18": "7nBc5xthsURbzAkHDENNoCjXjpLgSQuNKUob9gJuZdEi8tFdyrrWvkDC52eXvDfDkLjunmbY8yQN4Nf9GqSCPAh",
  "key19": "Xt8Kaw5MTqg9U8knccqMTDLAZYbmpJtyPQFpwbD5m5KgHj47QHeZJ7TwHTvG2ZqYgjiiGAE8QWwy2X2sNZaZvTN",
  "key20": "3mVDfU3467KGYpx6Pxm6r3edBHeGc9Q56oM3dQJ47pCXRpckD2LG46xUX1uryW9cq2UjZMEvmFjXSxEWtHg7xqCs",
  "key21": "VtfEqnGJBd3yvqTQtSY5SLRxSQ43LaqnvPUD8ejbTciJw4yJX2Lk56RJzMUdUX2CyW9fdSy1rFjBrpRtcSF7jPf",
  "key22": "4utvbxaGBN7Fa1jScuJxfX7RZPPe4DzCLYPbYQwN6qed7tsc4ipy27swtGweAMz8TF4irfd3d6UvWYSR7wNhWmCm",
  "key23": "5aVJXTSExa8dQsEhkTpDqestV2Hbac4md5Qix62U8DQJyZ6tHiHuod2nDUASbgWTWMQtAjD9qZDbDC485tWDQt2f",
  "key24": "57mz1Ns6LkQoX5vsuz9U5AWKRcDUTxf7RvwQkxBKJihMNvAx1Jz4ssSJpenZBMMZRxfKoTqvLZG5CBAkpUDTokmj",
  "key25": "3JsnQxsnGRzh79ZZGZQdrv41S5awgdN31K8j82XyhJrh1NY2YtZgaaAVVginX37HdbT2V8RCeEm3WPW2VLMrGQgo",
  "key26": "28ThBALTDDVDGKkCrz6rVRQNfTnhvvsCtQgW25QMBgQF4dhhgbsDzokhG47xJnF4s6HqYGRo8jGWGyvFRq2psQVd",
  "key27": "442cewnPRYM4UhfXnNYXEzBxwoNLfqRjzR8iRnQkwbUH4VTfdR9XCtd6HatV1ajdBQg8rawHyTZNWJzTakU3A7Wj",
  "key28": "ogh1nqJVBr6KAh5dJTpRmKeRjpC8KfRFrAcU5o3i8AJuGwxq8QmEz8PkDZTUDgD7RkjnxnukRvSac3joJxXLTA6",
  "key29": "MDfTThUmGfHrhSMyRRPqjtf7XkMsa6AqfXAYvHFvgcLa6WMYdQQsgmKRtHV2hb97CB7cZDq1X3yEqKy7mwMUmts",
  "key30": "WKMK32dh3YcHYWf4KLQoWh9V18sq7BiDyVTAPS7Jw5PAubUTV3imiNFQ4cvHhJuYAnLdzYApYc3JW1L8zuBUxJA",
  "key31": "5Eaa9gt9pjhWPfZ2HfLYu7TBbVL4tSEjuUjDPpHmbhbJeBDBZh9XWmu69pszmPoEquRx9BVfDXKPVrNuCVaRzndH",
  "key32": "5R73gGz6kzUCLq4B9aisDVmAJbGNt85eFouJo1qMXrRx6FsEGeK491STu23FVaCKFmtbHMAmoGB2g1Q3P2zo47Qf",
  "key33": "3HDJSrgTQF1LrsEe4bSiaT2z9hvJyRG5cRapQ97eFuTpcxLvFyS1i69YdwH7X3X4W2md2yjPKYEScnc7wsvTvJdG",
  "key34": "5j99srdHyjL5vR1eLnWLASeKWnQNd7XTL8oSMMR8s6gd5pj7LA6CcbFtziUpWUwFRVQd8nL3hrRSfNHjKLLyE1e6",
  "key35": "2KNzx6F161cZdLyoLkFehi71uBnWfyUotGSZPkaJuaqKqKwiNmxyYPzHcT1WdEnjr7pw8Jb9nXtMYK8p8TGQAhMC",
  "key36": "5GYr1WPkfU4BNikzt2whZSPqHgfxDk2h1f2phgMwjH8SgyKNvr7N6mkPf1V3Ngdm7CYeewqHjBsgHyCxjCif8Tv4",
  "key37": "4tyMk7DqvwPCp8Da8MXkgRMfUyrxD2nBPmDCDNvrf1madagQry2VuBAMsGY5qaRP8f5SJNgHw7we27QkAbb64bCq",
  "key38": "5NSNsuCQyBK7mBMDUF8JsELdFxNr6xWeb6WF15L1pu1AD5nBW4t5fuDSgTNPgpPYP15YzK25WR5QhvfemqyQgfDP",
  "key39": "sC2VBe8LhPwPaCYFjogKWtSpWDj3kp98G2MWhomuiiibGGLTx22Q7yP6LGdmLAFQcR5gwzW93KTxiqCT79vBVDV",
  "key40": "5b45cotqZgVAerN9ESLaDHC4Pi1HX2CqVwofCgAkM7fQjj6Cd4JfN8WvWJSMMFVRXtyzZkBRRCx7g4okk4JPrCzf",
  "key41": "WnWAUu8Tkv7VRTod4NLRqso5nbxLZD8zna9B8zhPQDLdr1urkLCzGrmPYLmqHLZ8sBZS4MJP1Ur7emWVQ1pGYKK",
  "key42": "41dpbEtw5RjgqC7wHVPzLxTWWEccFASUhmZhXKgJx4gGipuWfWjicrYm875rzGAa4yiaHNQRB9gwyEeVug1SBMq3",
  "key43": "35niK3NLVxXPKby25whkdDgvy9gNe4dV9sVRiMbBRnWDuqh7WqqpWAf8X6aho37hQjcv7HkFXzKdE6YoEHzfSkW7",
  "key44": "5ucYZjYGZoEsGNgzsyYVdq28PqoAZLvcdnPjViJAniTHv7GSL1XBhWoT1eDoFJHp1DH215Zgdc3ivdbzi57S6qzu",
  "key45": "Wgg9jwAVy9JGnMroEZeciaddkx6YqTa8WcwpewGLVccm4sgaaiFCqZBnYpsJKxY9Seu1WweL5ozkeMTBJ2Dvx99",
  "key46": "4oNC8Qa2Q1L9YBzRb3t5KKR6G35CpsQrERicJQgkk6emBUG61wDPQLNLGG9UhxxxBXSgPQDEnPj2M2SD6Ht5mGvg",
  "key47": "BFA6qcB9wPZhSkSkLBi7EdsrDKvCQnvs9WTA26Jv93BPLARS3rFdW6FLZpVyBQTmsBNSwZzgP5M6AKWG6mpHdNP",
  "key48": "wqFiHuT8WpDZPNC2SEW1TkdncKd3dzjkCSj87nqcnvuDdrYnvkvLsAtvPY7FZkS18Ye4Gy7S6hXa8e3uuS3yGAn"
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
