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
    "2bdT2qs4LV6bWrbudpUhTnVNwR3igyrtGvvjgpsdAuCnc5dAyJeJxsuTqKzMiQ1FQw1zLh5AG3aHKaFdTg1pBUH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XbiBQKySyoHdpcYiDQ8uttCC3rpCva6sCaVjphw2cYLow1awkUBDAiptCRvt8TN79xqMGUhuE4AQKRT1rW3RbXT",
  "key1": "4FxhYQPMAaA88JxaoN5SuwuDr8nPctg2UEo2jZgBnyRoQh5P9cCeaWYE99v7e9aRmAMKaxKKJkPtkiG4DKcn3cEp",
  "key2": "22nNdoGeKjYHmYwgHKzXp9sHDPvkmhpayreVgsMKvs3RVJd7saAxLRJQxacCArgnMpgUhtNiRqnXW6YRAFUyE31T",
  "key3": "4Fm65NVPvc1RnoPNMFNMjVsuagjFV1iRUuUxABd9dEEXiwkuRHD5GeAteJD9az8WbiMnfxU4UZr8hNQhMnADRpwZ",
  "key4": "3dkA9wJ7Ab5CZE5bP3vYbX8x2nMf6hckHzCpQGH1yCFDqmuNytNFw82Qjajiqbjtx4SjtSArZPFQ17fYTsjaj4Hi",
  "key5": "5q6AYZnSq9Q27YGCbaLrmLdTmUzcEDQrnRNBh2E3hYeHFi1pv3LvNEWjsCA2VJgMnrumrLbgExANMo1QqHrs4noK",
  "key6": "4bs6tfGL8MduhR1bB2LMy1EkW7ir4BZhoRvvUuqmzcMaQ8X54t4XFwotkpHLjMuwTDrteyvyimwi852ZNryB6Vpw",
  "key7": "393xpLLbdzRQcwED6HxpGgRUrsRZfjJo8V6gRDT4mK2m219eL9Sn1ViXhdT4Ntuazp5p6ipny1L1GcLPqk3X7sU3",
  "key8": "58AuR99zv6XMstom4u6rGLonDJorZTioHGkSkWJi5yKsfAyf4aM5FJtFwh2TBYYUfvjNVruRrPdoALEy2tQpRA5Y",
  "key9": "4ZUWWFXswLt8B4zJxvAN2rG8wzp9s1iBosQkRnUNspZsuZ8uqYetagFmgA99YF6WVoh2f9QvCLXehGH634NiE6WX",
  "key10": "4eAGopsiBgHFuow3vXDUy4o99UYYgaA3jUjntajf5SuLxs5PUuo6hCv31ujYveVad82CPjT1RD9vR9UCkVeDAtiM",
  "key11": "3fuSYQwuWc22C1bQuiyWs8xx81uVAqbeKjKqZ4Caw2EGPtYf4zC8DQ7sHvbjmCqbkedogS5ZxfinR54EfURqszJz",
  "key12": "qZ2B56oTcFTbhpCqtVG6xD3ujPpqvVPMmcTCgM9v41BSDzb23owXbwmNGNeL21R6Qr7z12xpt3W1btqTgirsz9X",
  "key13": "2QpV5ojn1xKEM8oVJzqxnau6XsKoDVxtYiFndME122kJAsFcrK6xhfPk7XzvSnGHXoESRWZBkvV52XtyNWytw1Kq",
  "key14": "27tiXDwaRmcUuP4LJkK26bZdNPyvW6tBjmR8H7QhEEhGrFDFF5edJKmTbTjawHyTt4SpDSzfVBgaDJtechDEjudR",
  "key15": "5PNa8DfXN4z72WHvGJNQ56HYEbLWjRm3TVnJuQgXM6B5QHM6t2F7MrJ7r7ZmVHPvgwqDb1jAUueT35jD7Xi1ZGTV",
  "key16": "4YG8p3yUs1pt5ga85jUtDvXwTj8JxaWmPJ1ixjzwF78BTCwC4WGtrMP6qmq7aghMs9Riq2Zx6rmskHHASejWHdfz",
  "key17": "5MMgAY9nmveH3ckBzWSxJUotcvmVmSRjRA8zErbUK7fS3tZqoPGTvG5vsZSMT5GSrdv2SBBV2Q94RsQ5SLwgV16v",
  "key18": "5R9WrnzFAuhmRVR5wAzxh6eFNc2vwxS9RsYuafL4jnFhnjNrWoT9ykb3HWYZQHpMtuPYW7dY8UPCfGmH1NLi5sig",
  "key19": "4PzLCiVM8FW951dhofgrK8iRzmrzQH7x2cxUmE4qZSaZSNK4uCcGrBdRKJn3CuZxx7vSK5WpbXaPWKmhgxeWMmW4",
  "key20": "483p3i79AUr59DBnJEjWaW5UsiQmkAcAoW5o6nXrhvsdTGFyug5xiSgzFyZxBfhvbkDGDRjrbPkSra1wHd3hddZe",
  "key21": "3GW3d28s6W4p36PoZDPSQkxgiTbMXrehTto2K37MniDWhiTXS6Y9xjVb9sUmNApP6gSyA6Cn75M1tuA9ihN1DFd1",
  "key22": "29kSptjHrgFB2sn8RFBm6kG5gsnFuGLp4fHtxq5vbmeGxyB93Y6yVLW2ycFAPFkBha63aHu5EotVTvSdkxRdb8aP",
  "key23": "2QT3wfo34SKftHVcafW6Yyu5m9YoS23duD9cQJwwq3Kq5zxuif4kyPYZi18741fWcU4KEHeXPcgqR4tTTSKM42MB",
  "key24": "zbA3i9KMqKrYcvtk5kPaYuBiaLYKeq6EoRUeM6sL8TqC2jJRi6QDCUeUaS8C2EHZCyb7v2Gh5PHPo8zVdVFd9QW",
  "key25": "4vxLp6BJkNBCuaRofSxyuyUDE66kqWrfPvUCawZci936wc4K9rszyRbfVTPHpRwyyThp2K2Kx91V52wydWeeLhYK",
  "key26": "3nvTJ72qeA6ntzjDjQhBnY3LpGbpQbPH4mBmsbUvLRuukSqtCUXZbuzg9r91hXFCNVWvT2bnnRVtNP5dtfyY3Ybh",
  "key27": "3LkerrbmrjwoNYUUMWNkRHnqX3ozspXsDhNsUge5mTu4ezSqt1RL6HU4NkyNd1yVnmmu25BqeTnvhXhDD8kpJg3B",
  "key28": "4L1QCw3SLybPrQNLUWSPLkyJP9YGP2trNQbUcPS89xo7L8A8m58hxR4dcMaVtgMEkMNXEkNv3qkr3gnrjZiDoUjk",
  "key29": "SJsg4WrzXZCLdGG5miQ47YzSqZ6nAqhMVF3Ya55ARGWscCe4WWMdJ2xn4c8eHqfhMXhuMLAyvLShaAdKSr5w9i4",
  "key30": "dNRpyAPpWbn6FNtSetWZ2Uriu6cgAs9vsLmqu3GECGV3tpbYtGMaendz2M5XivGeNbgsxZmf2qXVhdD3EdA5vTN"
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
