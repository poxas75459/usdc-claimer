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
    "3wYzqYyy2Jh5vTyArV2iZguhcDvL3Xbw7d9u4RSMFwGLm27VR3KWgVSGtzq6jCj7N6bnLyxkpvpBgqxUJu3g4UqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rue4VURg6p61J7knyxp8MUbmYgeonuVGJPqhGoodUXjn5yfmiDtg2rJUVQucRb9XHs9Y9Bknf7g3k8SjYz4hEod",
  "key1": "33p6c85yzRnEysWesBJaGgJ1UnXDmNiotBYeTNztUk9tSWrAq64JP6bK3f5wmoHvu8nRy9xRbFHtiqE6XVfXctdJ",
  "key2": "JprMArVHd44STeMHrA3wuGLXjLr7rHgZyzQFsGpKPxkJGVQQJuxG4rTaixy2CnMske1oFWwXrFnxuyVt6hRh1E1",
  "key3": "4uadgNYviKtDatr5fqa5anHqeVLLgK6gKtCq329xr9dnwfNBgm73kchqgbVzR738kmL9Q3y9Lyic1jacgjBmDwNK",
  "key4": "4M7FHKUaeRhA2ffo6QHzoimaEDRTquHbXCA4oaNbxgmt6DJ2Fv6BqndvRKSwszLfHp55VNDQi86qPpiqQeJquLMd",
  "key5": "2zoMpoXPghLzCwTNfa4JsU6NUgUGaoWSrBb2otzyjVT27LQWUgJjbfiVDBkdmHS2K4LjwL6HM6zMA5bZhDotEjFz",
  "key6": "3oCRXu6BUEVYFG2E5nJDsyzznMhm2YPwC8KRFy4XvQRUDAGzRA1ZUUUpDeT1aLAiyreNHcCiXK4MZZy2mXCVQbHn",
  "key7": "4yuEiSP8ainTpTRZ6J7ahFntPWTJzxe4Jvc1Wsbu5DPC6cgPAHoLJiKyKfvyx2J4P2X91Zx8ijiMzcEooS8kJEim",
  "key8": "Nd8zLchMqKPDopmaboTKxbWZSXxvKYkzToPWxQu7HzfdLdgEUwduUTvuYDHHHwLtTUak6xN6JKtycb6kBVLBU1c",
  "key9": "3cHdtcUMDkhA1yWnbktZF8FmcjJmFaTGytS9qqGSGMmdySoVmQTjpYLCS6yZTfWLuwgfL7CE1g1y9J9Cd7A4TpM5",
  "key10": "QDToqqJkeK7K5QjxGMA1awntmfFE4UHn7eDCxRvMgZCXPpDsXYvHLrspbjwgviYm1iDrxqKhQfXCZPWj6xoCArY",
  "key11": "3CByUM5ZQX2uopxs4kjkQkXFGgP1JyaQLG8GomnsssFi9anBQ2iUVa8Aj4cGRKShVK634j52bNUSRP13TiNM4vxk",
  "key12": "2w9gzXejJW7Tp8wgUfG6AnukhC1RNyvK5g5qJK5VZr7dNyEh3q6v9JUDgbrwTi2PWMfvxobNDY5DE2rAKe8652N",
  "key13": "4nWG3TsYuSyjeqp9TBfCRe5YMh48ng4DfMX2YfnE6oXpz2veqCyaF4curTw4UWLtJo898zaBgZmCKHmJtXDTxdeP",
  "key14": "41sWuzWsUi7Ri9Th6chnPwy9creW7KP5ed7avBXxqfBCKPBrPptqbfn9xBN4Sdw3sYwqXLseBvSsjrzAgXPvUCry",
  "key15": "2gnZX9J6DJSdXfRQPUZv6gS39QL3eAqU3QKar2EW97nJ9Fq6kLdcsWxZGqhesMNPuoU2QDTcksV1Bn6Up4AmSnWU",
  "key16": "25T8c1xcySvrtGhYyH71JrkDYrC6GjHaFp251fLx1F91ZjbycBRqv85R2diYkMVhatYrYB1ycpUtmYT5L11Tzi8d",
  "key17": "5ZMAbMAziUxAhPmrjMK3ZjwQuCRdwFN71mBaFyiZPTqz7zraFxgbqehCjoJt1PZRMA6rYMq2k7kA3WnCUXLE3UzB",
  "key18": "3oWnHJQHRYCGKe3z2EKDvHqy9sDeTKBgx6Z1f5FvvmdfFGJHR4mpWYKNaYNM6twCQ5JuXRy6Y88HGWhmqkpGndXg",
  "key19": "5BpmzDuEfsKeQGyyBJV6MMUkLQvZafK3ZqmcdPo4nv6GnRAUnxx4taAwvW64ujgRtDW2Uy4uauyCbSFNrYzG4abm",
  "key20": "5iTgQ3X5EAmTwpg4k5AqpqCPxqbdcSVvi8pbwMXgwFkVi81SPEadksFuWdhvvyCiqHhmCGeqnTotn6sy5nkad9Md",
  "key21": "5UGDz8ddFRNoDE8gqpqVeV6quqNK1yTWEgajZZtw5fkSoZhydK8efqTyPdBXbx3pvSX1ng9Jjvog2Hp3Lq2hnGP6",
  "key22": "5QexERVebvQfCinWq8HTa9EpdLpSRuS5UT4GqY5dwVZ84LpBquxCL2aB7wo7vToRvRkqzLPXPdfA8s4meWmTeazS",
  "key23": "5MXHtTC987H3XSUEKAvwXhThPDN4Vvvxz6WpprMXe67o2en6HQKQgz1te7CxsQqLv13G74UFaDLARCdNpF82y6hu",
  "key24": "5wzzy5WLt43VKjFj1Hrkks5pgCYfMVp2JMcGG4CKQR8RPNZsVsQjSJr4Pq5QNquwtwDtL15LxzjvrEogfSshwanB",
  "key25": "2repb1fAgSpxGDhmF4WwJJJRGea9xSPSyQJfRgUZ5T13TxkzkySBqGvFXa4XYp99xvXNefBPsMDc6e6JWrZYBE14",
  "key26": "2chPLD14AgAMzRgnoYkT9WAhdscaY7FMeshGQzDoFeJQxwYrSTbxVKoYLh99MdMPLKhNiXuM39c2HAqwMPw1JkPR",
  "key27": "3k8gQb2ZzaV1zZB4hz2gH2g3YBUzBfsGkziNL8tnCUqfW4V7qhjV5sWV8oRXyU2ZGQMxPceRyhSjCs4EbkdFUCKx",
  "key28": "54UcywnBFTgDVYZX2uWNzmHDEbze6WyWvbpvYdhJ1MHyZ2sDJQjQnPjEkFxf9qYBUur4y4kYLv1bGnYe59hobNdm",
  "key29": "YMfTZ1fYuWrRGe3NrXPeDZaEQ4BGEFTo7aRvuzTuznD6A69dUXAxbNbmYYzuDidRBtVhDsGrZdGH1b37dkZGu9w",
  "key30": "5GSF6Z1oRy7H6e74uv6z89rT38gU8RzXZ6h9inS6fLRk9cyaidGo3SyfUy37JAJx13WR4cVhiyQajs2RS66FQEU7",
  "key31": "2iLBijtPvopCVQe5rVziYHUTvLdXgf994VAZJYAyQbjLf1PmFr57me2yVaG7gfPo6W7uB6NbCiD9Tnxnfvpuiz5A",
  "key32": "2sr8kSiaMnutdwzrhc9ZyaMaGcZudGEr5f1sZ37B6oRLmXBX3hMC7DkMRLb1c5P7hF6HrWLsx7KugdfvZKaNRP44",
  "key33": "2cHPPYE1ZLm4nfSC5wCcJyCoeNCd2bdWdHBRhvnS7BJQ4ZxbNWKuLidwbrL3QEvoY2a7jkK4hvA3mHDEGrKYvo82",
  "key34": "3GCqoxT2dMi31U5TDZnhCLb6shts7KEvtapSDxLZ7hwqfJTsvvEWtp3tj7nretpPRM3QCxfZL4oxgTWZ7tkocoXn",
  "key35": "2meb44XGYfongN2nq1mrJFia1rJEVaQLvEy4hwmWoqgT6EtioTLH79Z4E3akoR9EVEChxNBLEaEbKJdgCQ1Bef5x",
  "key36": "4xCFir4c5eEGiBmLWCfiby5szyVTFSNGvYCCxe9QYfgkNCARn3EzxrSr9ehRT8ih4YbWLJJUv2UJ6iVBNooF8Ja5",
  "key37": "5N1SG8SPEWnKh5LDt81RfNtyQcuSbpcmZ7gZjktQ5iw5Hay12vM8EhVRHnGEMKfPw8xk4AegxSQM13BmGNxSCoBU",
  "key38": "LUymYoP7EE6nzfUcRv8LkqRfsVjkAQJw2caoRTJt1U2hUfLJTuBDjGVhcTfZGBzJK63ULXUtkjvxcsR9TPck54M",
  "key39": "26V7sQSCkzzwLuwDk3s9XF2Qxm9XmRr1CocTk61TPCTE3ftiCczx2nbmoLCNNKaYx1QqHwTdnzKJWgV5mpbZAv7a",
  "key40": "1nui49MV3RrqKXAEUPadwdV6rCT3PrUPsjNAdTTAfW76ikkV17eYerfc499MjK9W4qkG2BJH3ftxX1d8KwhcDsL",
  "key41": "62mxvWQkfxEYndjetVniJNqgJFs2L2L3SkYFgmRf86dH6Yfe5GP88TZWzGwNZEPr7wFStwbiM1nyUZV32yiovRej",
  "key42": "3XAYjzmx87NNnkUa7DJuH3gy3ujU9ttLx54b9WSVCqNn8XQ1gXPDGDMXcCaWD5Wu2H7scAaZJ32spjEZo4SxvD2L",
  "key43": "5XLFyKxmajUkG8EHYofMo1KxkXnfyp4z2oo9T89orfBa1zXJVKwjm8tYXVQ7qexHQ2jmTAi9C3aXsNMNYwqJkhx3",
  "key44": "2ByboMesfoZV1DdJQHiGZFK6WsSZ3v58ct59KZbhQwMWkzMpgxue1WXfUtJhxkSR3tb4p1zSy2RTkVYtjYCRtFeN",
  "key45": "5JzXw98JN79WhrDnuQ6jDBWZB85HkJFUiprUXGJYjLpdHmWbTBhSHKLoMfHcMqFz4jkfC5J1MLPeC2nt7DoMyix1",
  "key46": "W1HoN6s5Tmwq3Rcmz3aCJUmosgeBA5z2rG8s4KXBkBEaMPXUU6H5ZcTTzAmAB4HGuEQeopxsBCyS16cL8pt2RkJ"
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
