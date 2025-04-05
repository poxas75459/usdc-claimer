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
    "fXcdtaWPJzC8mAn8XktaBGv1yGztANub272pmdhupYcoThVaNvyXkP5vzphGRrxFjjTRrNqRcYSnbYodU6h3RbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VqV8caEtHFb2sxeHR7z3JHQA2aYwm5dZugeToaCNcmrBmcR5qj5wPxWbrjRofCrksB5C3PacKVMekcGwpMU5Sbg",
  "key1": "4neSsPTiyPq2QZjCEKn6WEc2Q5Z3LpLRC8sTqHcNgvh9sSdpBnidqW6sPDY829WZUnDfNbUM7Lugx2fVkeoxzUcA",
  "key2": "3aKQctgJFgkLQodVW8VjyFV7xpLhGcnj4YyRR2oY1soq8x9EG3RhoWM5Vt2nEsPEti7Gkwbd22TQDqpJJnN6qiL6",
  "key3": "dHKSSjcSCz2tCoWTVxczDVsqiG3zVu45iodZuyX7ZfpuPrkdShSMmECJpY5pxf9SXZaJ5GJHiQgM2ymjuakAArJ",
  "key4": "52izTW36kYQVi2Ei5heSiXnHza2iNNsL7dCCBmMox1hNyNSwPrFZEEkrv6mYTgvN1xbXPctjBPz4J4s1vu436KZ4",
  "key5": "7bmWZtaPWv1X5hZaDccDvuMrdKyrbbfEJJbvusgFT2vgdPS9XfCCCxJTgjWwe167bu1U3iwPvCxr4eVSihMjkYH",
  "key6": "25jBXugWQhHfryXDNuUVPURTJSNnfY9dZDQRzfmfvZATv1LLrGruWM1EN7NGELxcLbypA8nU8DxNL7XbfbX5fNuB",
  "key7": "57DLMZnriXB83CwsSV39HxzULUKUNtjXYna4FGBHzKHX8ZJW6LXeG3F6ZFBi9HUYDLi6BvniDhWUSF4mNnwWPoPN",
  "key8": "2TGSrKPpUMkrjLttSFc6Zx3hHd4cxto8gu8FgXoVixLTexe2TXwZscnEEZsXpHuS9ZtGhQABMrLV15qsWSLR7Tb1",
  "key9": "3BjTxF5vRAtJBX8vCbkofa8DbzvV3tpa86Br5w4kEcUdJF6MMfbHUcfBzbf2ZbCGERgiusBLnkou8G8WXAe1mQpJ",
  "key10": "2hb36saTSFSWK6aGJ6FgFcHuMCMRc41f6f2kGtfXAyWLNdbAn6EFEGMgRsBqf2ABY4whcaLk9U75q4kN1e7dpZ61",
  "key11": "3fGqEeJ5z2Rw44SSjb6dw8q1QVer8L2KLRm8k4AWFLwdcR37TaRo2XzxSCSF23GLnTMDirbqHucwf7NphoP8czR1",
  "key12": "33oNHn5zFuPGArbH3BXyGPk5RT8qYcyP7bs7txs88K1A3bGtQGwcJS1ymEDkUxPWTNw6a7u8QiXaswnbLc3jhZrm",
  "key13": "bBqfTKGuhZXZTYSo4B6CnL6W16U7KRtcbRVDyxgxZbc7qEmbw4QpU9yXADRwyAYbtScKm2FuBJjhbarRgqMqQbr",
  "key14": "47N4fUPESDjRhda7enQnFsgsEqbGvKzhrvjVWQaNv7rayCGBNicUeJbzy75UWNabrZZjFp75PNgBisQeXzE1pVpm",
  "key15": "bC5rqYmQ4TLozQQ7fgtoz3rSdBcdHjsU2Rvf1Q3NeLW89Dobz9ybs1td3fjdUPYkXBqgeqSkQnPWRb7LJyBcdig",
  "key16": "41WBCbczBbuB5De1erNGDmRstFBZ5nGHwt3dd5Jkg2PaMoJSUsB8w8wGjaujoqWdrqd8T1jVfW5vWAeU6MzAmTgg",
  "key17": "ScerM1tQuUWmCabLJXgNDFqU7tepDhS1W7VYsSsHDtGKDLzVmQbuGrw2P2cfTbR2bKTeB1szH6GCtnBUxhv7T8d",
  "key18": "Nz8iaJ5HNtaEBFp3uJUA7pTpEB9QkcQb9pQwLgWiWm2yyayv4mWzHnwT7aZs63vJhjT3KYUHr7a4hLg787LJhg9",
  "key19": "swrbj1gH2BDACqvDJPDfHKgpMpZAVt1FnF8hqj16ZSw6eWgWn7nAC3e3hA4vx5nJ4HvrUU8RbxY7vSEU5hHA6uF",
  "key20": "5ea5Nf9Kx6KGcFDakmscCee5AsZ6GhyhdaXp8ztkpZdD2mRDu2a1UKDxTPHxZVQV3UV6rkacCmQrUqGggAKbrAF8",
  "key21": "uQEu6rWi2kFZR1Qf7RwaFgYKNMR5D7Vf9kQ64hHNkw9qyQhAkg955SBPQJ4fQF9t4GQZ83qebftyerkiiWy7eAt",
  "key22": "5wMU6afoQ8dTsgtBsuMe72xNQWSoxYs5n76c6bsWBJGNMT9Cb7mw68DWmbNAHjm6gx5JQsuMvvUj8xGxwhVfx4J1",
  "key23": "2nFcmuXBw2z5bqtHnd6GBAdfWCMQrXFuL8RHjziAYgXxe3GMAeyiVvmkxeNDFPMvGJNaJJCP1o2Mpe6QN76KbF5z",
  "key24": "chrx11i7ejGSbWgoUGahzyZkfSbPFiJCz5c1S2VTv4U3qiDpb2QfAoj2ydz6uS6TyrRAKyxBFR7VaJVwTQkmtfg",
  "key25": "51NzzkCFUqS2bJUwE4VEovSiR5gG4wmyqpfX8LmRDTz8ZZfE4WixPkEMJgVB6s8kacBt3hbtm6sqQiLDbv7FVV1F",
  "key26": "2RZLFGi5EnKVcGMUUgmhDp3QooAFXJgwMjSATUnH9XnEpatKcptgH6Dorua5CuKvWctfXsg1LSieox3DEgRuokCy",
  "key27": "3cBLyVVe6wyWAxAby9LxW4RigYwpyuxc6zrFnVUEAmkuUYjd9XZr3UuY6t6XvY9Cd2ax1Zsr9PhVL9Scfp5PaV6y",
  "key28": "45f6vD3wsAx4nyqDPF8JxUHtgToRaMnvLN7zScKph6j4vti5zdSq6VwZoq8jJpFZRQFfY1oc3tZURwo487vM9M1s",
  "key29": "371aNJp8PiBCZkF1JENnCBkUgyGM77A5fdxCxop3xuAmokRfCzouhPLfUwwH52Ng5q113YQmfY8G2uFcRS1LZxaD",
  "key30": "2E6UCJ2e2Cqhw8qVwo9ZFaHCgMjNVkt4Duzt1xPuNN1XhV7ae4Zb2s5Ea2WnvbX1CzCTeqPBvr69eCE6R6qvoFuQ",
  "key31": "52an2epRAfpsTqdafrPvZWoLUdKk7urvQ9EnP2UbdQekAdgHY7PPtHVtabc6HZzb2GrgNL3ZBjDi6SSSFRCng9MT",
  "key32": "xC2yAH6aQdSfWCQyfif3tDVq7rHD5cfPwuQENPEJTSiyXacAvZRzBTB21G82H3KJTZj6mobeRNfRtufmBqm9ic7"
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
