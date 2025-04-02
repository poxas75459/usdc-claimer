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
    "5AgEBLYNjuxhMF6yqgnu12f8cD8TuExWNHPkov6zb2sWMecNEHVfqkj3zN1woAHZnqp3fc7LkT9ZGLtQgmvR3nZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Czq1LxTAUimGDsmjgMbvJB9pdHrU2NXejWEhNc4zRpz8FSjQyWhFK7QyPRbLWmX3vzNXdYdV3CBNMPPdZ6aYxKg",
  "key1": "41Sudiy6sHTpnjGQYdCcTtoJHSiz84YnScsuwxpVv39GvneJ4P5kNwGcfYgcoDMXGjVscBvEaQVdqHcMPHv9WZbr",
  "key2": "mZFCeaLaKBtbqUkyF1rif36qJGWvkcjSfK966DGjx7HFzrd4rixMJ6MvbqLztXJhmZhoMpm1RB4YsbH7Zv3ai4o",
  "key3": "5YZGAvFWCbH6HPeYHDPxZJb6JWruSDUFAbWHb9ue5rgZQqTkvGsKJMzmsHxNt4xvGwv2Kvbm148m9MSZeHmKKy75",
  "key4": "2w1KeBQXWkhRFrxsjxCwczSbpV2CK3ZvARcfhnWrJzKir4cLAUP8TL5hJy7GzJxuDk77BTkJcYU5HsC1acuqM71N",
  "key5": "4RbHeVbT4HUzW6vjPqxxcJ4YKxEZhtrhz1GEbacQxeJXyR5EHsQxSEoYeo1Nydq2zcfzbJeuxHH7Ztod5A8c8Wc5",
  "key6": "4rqxR5ASr9JS7W93iy9N9seMCnTB9YCcG3ukKjHgUFUmjZiQucc8AcpvPezmCf1Y7hZiUF5ZhozuyfixMjwDCXWN",
  "key7": "4Z9djitFcvQzpHmBy7ZfPrJ3jZFSa4WDefbzg7tm38YPmVhsh2QoExkgYsorg3GbGvMiSkNeXmypKz5qtx3FpAfq",
  "key8": "cYWWUkjG2Ly6ucaUkN35FwzdUr6RdNt7Mt5hPVti1Ke1sS2B1Y5aUZV8YXJSWgYRuQ6xqVs7gAhEnEjZSxwz1vA",
  "key9": "Fs8UaNe1aCx83CBpAeNUURE6Lr1azsQB5RoLikRjmJa8owdaSNAVednEWNVYpEawGu7tpdNxHHqaSXob6awQ7ps",
  "key10": "5TgYfrjXHg6ZuTSw4TQf3L6juyKAafu1efPuUE3VxM4hGdeqjqCifvfSKB9hJUKgZmY1gRqFsJBTYho32oFT4ytJ",
  "key11": "5wwRqmyPoiCaQSmNhpHNjhhT1KWJ3tfAN7PV33NEviBgpxKB6Eak8wAZLC9s6T5KX6SBLaVpmeX5GWwouZeDevKx",
  "key12": "3wf32MwfvVtm8L4BNAXZpbNmf4kvtHMghYQa8uPWqZorBWjZ1AoXzXbHCr991XLvt9RbywgzsLobaBMndagiPttD",
  "key13": "5wTzWZnDzT8qvE6EM3aP7SD83SEiepZNADKKaAHQJq3FfHHziXBGtvyUrUQKNMTmUyc9u5LDNZmRtnWHpc2uXSvC",
  "key14": "5xhWbmJopkpBSmVoNvRnKJHua2oif36uKV12ngS4xeLzAo9EyARzgG5C7pZvTr8kgDKk3ap499Yyz7ZBUHuHih7w",
  "key15": "5UwWVrNLsaZHZxNuuKrXAQJLkVdZ51KLNUh5ms4NuWa5LGF1sQTHk6keFybpvZVrzuXWtrr8aKyHEveQYMgkT1oP",
  "key16": "i3Wdqubs2D8uJwMoD78hn3qU5QhKMq76drynBAfkP4ufCLvBAHQnXALQyAddMRUs8gAvyaqfMSayHKWkdSn6esL",
  "key17": "5JYs5HEmQrEeeheJPxfYNW8Y4Lp5hMnLye9U6r2MZtzUnkmgaxjnKiYXKEoCZgv1bsfqTr2rnDb6Au8XtY8Rvh1C",
  "key18": "3ULxbsFZNhWhvUcX3zCGtH2ps8Wy4hjQ2M3kx1HjirMR8bXfzxBZVPeUeGrCYfDTkFVdSi5DtnUYpErR7JPcHm56",
  "key19": "2MpogC2p79i7UUbZd59rnuij5FGL3xx4FfZ3G58a8Eaebb3kYmfV76fjsiNZusLDz81L4Vart2TYPzvtdTFckvE6",
  "key20": "2jRFsFyDtQ7KsdXG7NnFSLfecWrSG2Mo6RBAe17uH3TCjpQFkxKiH6C8H4SKCcMkPpeb9zqTEfEz3bfKvyaxcnzA",
  "key21": "44XzyHhRfmfFx3esQM3gbhiytpz1rmfuwB8YWqUumbTQHEB6goyty17tpdztVr4RQs2nieyCjPY3FGiuDvu1b5vz",
  "key22": "9uC6kZzB54xrAuqUjvdcfpxAyzQZmvhCANGA5pQR4T4Antenne2ETsbZEy68sTPQYi77dTwz2vgKWvyrYKbemyD",
  "key23": "3bn4ybT1Bji19nErJrXoCnErnyEgcqxhWgM9a1vA8mCmCp2r4Y1muHHbWYwR7AhTMRyqwWUrzobn4wVddyZ165xd",
  "key24": "47P2RPeiV4USbBz7xwNGMCcPCH22KeW1PrcqJA4uc4bpraD4uvLXek5yFfnVw4Z1EtcPW91rofMMb2FwALeHoCqz",
  "key25": "3tVcbW7vWDgiSRLoJqHWP1V8fxdiDZ7CBw2VC1GZ5rpvspb3bCNb9wY9KpWccC6ducwK7cmcAZpU8n1DzBgF8Xgv",
  "key26": "5eBCYNCP84B4K363soqBAzuVhfjytr7K5UpYd7sBfANTDrpgYtqd6YM1q57dMG2hBktmrvjzXHSa1dzNzdSz3eh7",
  "key27": "4zFPN7y6UmZPuMqiqUmCqQ1Rj2vyLtMeMs5yMhzDzYBoEMudMzpY51GL4kFtbyDzfkZwUNfRw5Tcy8cYFg99iN93",
  "key28": "28rUpr1VgArbF49WuYB9EMHePZgetwF4MRYQRQVEHLvSwqpkEjKuxEHAAZTJNtF8d4bqeSpX3s31Txe9XPqhbAYj",
  "key29": "5SYT8H5yoDQYhSxX1kWTQUako9GNzRWdbgBMo8jmRVcw2unQAuigdVADPoix4fXMBbnRtMJAXXRS3rJi4Gs5F7KY",
  "key30": "3EkPtpvNhzzvyzTkvbUDpunTaGv1Cop7prn49fcUQ17MWMxz5DFLpBBjoQ4mpMy5f91KVhWNtCUiVKMztg1vcGx7",
  "key31": "4XYeVtCnCjfvkvKGP1xXJmJy6XAFLC2rZYAKifo3qPp6varA4qvQQoWxPpPsZwuJTFs4euW3yxnzRpRMJcHtASue",
  "key32": "492eFMNzhr4JbtS22fDu3JdHHP4aefXmeotk3DRVYoizd96AZiz8gbqZJZKy3PksprB4mpXRQEkP66bUReEau8sA",
  "key33": "6StQmvwQuDs6ChCYjJW7Msqpbm6FZGusU3aZREgpG3KZuACuKJ6v5UZHsFArZuoMGEphR3YhAzvJhZfDkPu7Vvf",
  "key34": "2Z9BCqr8CUZ9Eb4zEriN6wL4JAUwyiQoxvnTd854sgZcupMTwkdvAQaSQHdzKbzsege67t2AxFZtfrD7ttuDh9QZ",
  "key35": "4nZ3L3cTSDwvcPMtW789pK9kMvmirWxi56KwxiLMM8cLFjGy1x3eML2CRggAg5moGNwDEMuBVE9nwSQPmkU825Eu",
  "key36": "2oT5jKxADLH4GcFHeZuxf4DmW9QpoYoyRnhzQQz5FaryAi7rMcUuBDQZAEhHozjWZCNT5HWLxcu4P8txyuP8ZMVm",
  "key37": "2YkjVqgJKWXScBeM9keKG1Rcx5CtARCR997esmuEvwiYASb4y5W4HHaP51T6A6AGVSEMfCnzm4WvGqR1aB729L56",
  "key38": "24BjjLunYEFAs8QioBkxhWgjgTcbgebz4tkSi6YjNBoqfb8oFmTBp3tC8kJVJdtL1rKVwwhA85YirmrJzreFYeTj",
  "key39": "4vUU87MUpPQuunE7mUTeVEXeGgUM3C7zShmbZDWTqzZ4yAofRCbF4mMyXzrXaMbDT36dLbFXjAXXvW1vxRMdH6r5",
  "key40": "5qJWdAT39mon8h6Zvv9zE3Z92Np4G5muRKQyQKnZ71feh27xvN1KvZLDxGCLVWpmeb5GYtJc8bZvKbPxRnNNBzZx",
  "key41": "5pTChimAYLDNF1SosBSNcSaVnERADAEb1TKshJ9ruyk5ir7ws8jL6PmR9wr4jTipf1LmLVUCXeZpji5G53Pr3jUK"
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
