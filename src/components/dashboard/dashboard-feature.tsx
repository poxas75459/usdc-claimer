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
    "3BPwTNraUAPdN1eH41FZRopHJSWpiUibHjiggSHo3mZBkKVEsHoSDNKcXhmsY856wgRop8uprimepYH3eVxhfnMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oAqhtJugoVdrhgFXuor8TNSMRwvyMYaEBJxsXD38wjbYnCPVFmSj4xMCAbyxoptdxLMLG5f7xedrbm2WmYWDAip",
  "key1": "3quHcdP5UhqFxMWFaDtdxqcu3QVzHcKSEquEPkCwFBJXSNwGrwSrF69iAVsX3uzatSSZxuJ7vY8feRnQ6wVVVNuW",
  "key2": "2yBuqnNqom1obF4Yp2wmY3MpYQfNU665sETFeRVRVZCAWQvDnvm3iXmmTyzkaCm8DYCmJqDur7Ea5Gk3W8q5Bbro",
  "key3": "23fEtXUntdo93YHDZGVju4kMk1ESW35Ht947hdyjwotuxvKFop1Py3db27h2vBiVNcFpfLYR9M7873rsUeUtuwC1",
  "key4": "3e1dQA1Zvcfv7xVRyuS7QkrCyDpEuHG9byDjmaMz7o7MwiVAqYafcNLXsx869gUVNaYavLyeW9fxYw94LWo4DXqh",
  "key5": "5ZkHArRnfaeLD7hqz3cHu4TvRNPqk9sGBcqgrpGSCU1SJZeapRxiSSMifjMPMSxZQYUedZB215wQjud8Rd4pDfLf",
  "key6": "qMZZJdLFGk4cuNNDjjsS1dMo7rRpQnvgJWsckUzxg7cvHdPi68hFbCppothrYb6cgdMSTJTnQQRHyknEqNMXWnv",
  "key7": "2V3ZfiFfrxU5aXSS8XsN2fp5mJJZfsWho6aRXGRwWeDJ2mEV3q6GCoFoLXYsef3pGY7mUdkmrJpdeMKD3QXn3MBh",
  "key8": "vQJ2Sm67ates6srk6J1tKsMFWzk77MKMtLjrTtWxqMHqqqjf3kxoZvqjePx2SYrLgDaohBBGkoQizX7TPRepsdm",
  "key9": "2f6X6fqdvUzjPVfDtyWEBHKmfYu5bUQnfiJWcVRAniapHfWRn4XpkeqopjJmBNzQEDjwUnCR8uaw6aXYLwZxAfv1",
  "key10": "5k7tDW9bL9auvLwBho2BP5EjcnNzfPqq5Wm6ZpcEyo4yRr8ettG8J7SPX51x3B8qGmxkwJ2PzAtZ2NNQCzkVsuE7",
  "key11": "cTpNzzgejtZ4BZd6P4mLsi1Xc7N33Xv3Z2Cyef3jHZ8coPvKRfprpbpWwGtjR16RXfXeoaigWGt9wKb5eWP4uZe",
  "key12": "23W32bygzk87ELQTxT32SGCJdbYFSmSyRDGhzqMcbf9aQFH1DLRqdgp7XWgbsM1U28EG4RFM8aiCY2B3p77yLLWr",
  "key13": "2xZTtsHYaezczR4vYWucs4kmGpW2LQut2prZfdpczg5VtvbgsSbHHznDZApRE1o8JUEM2szUzZbACwKmDvtegCsB",
  "key14": "217Z63CEzywqZAhBKaQCsqrQbFSJhpsuRgczewdKUUgi6pVJw8oBA8nrdYKDxMaA2CPtWXTpR1maUqC5BGJdQ7gE",
  "key15": "4CvBnMSkiTyzLoLZyJ8Bhj6U9UkiVPiBswDQkWwkmJQJnRwCym1e799wZJF14NFodZLz8XUaS29xPANsszoVvQtR",
  "key16": "4cadQgUm8Hc8fombC3ZbjMCLCDxdjVZpC1HZpmfYP3pHf8FkD7pRj94dYxwfBrd9XfukqShCJfV4RwNcZkNv5uAf",
  "key17": "4ip3gMkW5DM7FL7QkMFyNW9TfJ7RtpwTsUDS6iaFjN6e1NsFm9uzk5xb31Vr2868Lk6XY6iFfErMCB8xHwwPDkP1",
  "key18": "vqV3poFuYSrbr5ape9V7cX2qUE3tRSE5fogf8hsP1w2bUnznGRacSjkjunzuzvcpnoaCKxtQKxzzTn76h1X8CAg",
  "key19": "4KyEMnEC23R1vb2LmPuZ4r1ePgMTQbab1umG5XyjT7A8aTnmBepo9JkH9qmVnnmcmajGRyBXHbKizknsnLH3fjDp",
  "key20": "Ap29t4wX9V6bVpbewytFJwGkJZSsiV6URSL1fqmnca39RDggY7VrShcirDooJLwN28qwpEcPjaP9fqgATD6vxtt",
  "key21": "4TKz8PMx8QiBwnTJahZgoqcxcRfVSZEBpDzPh5YNTx8c9J9jnae6dqCtqjtjtTb68WKijvJ1p6L2LqfFDGHSY4mV",
  "key22": "5NeDCVatZP4RrfXaNQMbhA4vffRmTyhbjRBowCq2Pwp5nYjBA2ujmSuheH9EGvHs8p2dxy2YJ1FQ1tBBKgDVg5zT",
  "key23": "KgpicKhFjDXSii6gVVW8TfFPjvQPoBh8d84svXy6jPaspU2HoqfpFrFwGNTJmTkf5USakqSCtmExLdHAeqNYiAu",
  "key24": "2EiJbjR4dathUqrfFWcuqPvX4gp3uzvJb8oZEHSApB7ozYJj7UKjXy4wG19k2Gg64tDfYNVsMng4SSbYpYrUUz7U",
  "key25": "VckJpaJVxswtTF1RGJHNursVVAM3N2rmy3YunwPq3MAAuNVp74GQyUHX4LJxM56pMrSrF1dZcC25deuQfMw9uix",
  "key26": "38caPiDrEQfBZRoqB8M9J8KfyNBBTDPZMJu4PBLzEPf93ZZqogQzRatJdAbQKrbpXAWmZS7szHXpuABQewdCjV9g",
  "key27": "5AhvQzs8YVR6XDqhv6TdEsKJfwbAs8vqSM1wnJGdWnThKuaFLr4SeAzHNBLHjSTNFuJuzfeHPUcA1rHvYASpdj8c",
  "key28": "46eFnCQokmFS7EwMfwURxWHDVvUWEZeCbbtViUpmL9BXg1hmJ49gpZ2mXRFroTBLkQkcQNPhWTGoLUbpMj4a2dmL",
  "key29": "32CCtgxSjYjkSG9FPjGW5wHrD2Vfvk7QzpvWMy7jRYTAM69sXsYXzqZxBrMHU7GxLRCyW3PeN2tFeESDxwjoXv3X",
  "key30": "yWixV1F54sB199fCdeJzPm1SgMvjtqitX6KAeeztDkbX1LWWvF1XRsTQ2j5L6E1PoLorj1J1zJqBgCk8Cz4tVry",
  "key31": "4cWa8iWihi5EyVJUzqi1AESjEehFxpj1qRGyt57RYXwZKiozWZPd6WWWEm1t1k572sJ79R9DBHfPi8L71inEGtkC",
  "key32": "3DiZVQzVNRCERoZmW3amnA8aFkf1k942TZCNLTMGuqQbueZLnEbk8Gf6qYLQ4CDv3m2ta8BzyfzkEYRTuModQVEY",
  "key33": "venAACxnG4t23Zf99w5dc99ZBD99tPQaFxqS7ucaHzVTsxW7QqgJF8o3ZkLw15kg8CZeVszCAgHLseDic4s6hi3",
  "key34": "5zzCHt2f5QsxnYZxcue2f7tAdWvHeP29qd24iLmU4NzEPsJe365Be1mkPRVCKjGD1aqjagvAjm1JvN2RJcP9EhoU",
  "key35": "67NEmF51S4TtHMVcYbM8RBVksokHK3oFExQ6kaBfZCZMqWiLfgT9EwTLZPqodGbnMwfmD5kRhitqcJuphKEVVKe5",
  "key36": "2juSfrLVj71uGgTPGHDi4s4hgudfxxeKfu9pRkiNq8ujKewTiyxBjrQPRBonZZJqBQcH8NFdmXSonmCpzshGSySw",
  "key37": "2ADFBo1zv6QUHEYc7vGLZ2CNE5TiGafqeRWiifuYYGZNFBJ5HWAy3ELsHyCQvKdGUSLDivw9XyatPqrJ9iySFGTi",
  "key38": "64yengvGYHgWbettrm7DJfJHSfnA5yVqcioGufQjUTWUegiybFrAWJPEwAJ9QfcJ9qC6pQ9DbbQMs1YQrkGPARuc",
  "key39": "2gv1ePP5PMymn2rLVazumKCgDPtT6HL2s4EL7XJopRgtq54ao2JFZt8u5LYDXPDvhXSrTqPBQdWYCzYTPCSZoMKb",
  "key40": "Ly9Lmt1siFz9Gz8CVHxAuMpUSHChXMrKPyN3E1BTJvJrgBh9YrzMCEXaEqNbJNU1TnGQwv1vM1xw8JXTKutWBxp",
  "key41": "2yz5dvHYbCY2BGii44USJTFhFV1a7NWD3dCJCDyfLCwSAnzcK1m5T9XNkipUNQFbrBZgiyEdUShpvqNzq747ioTY"
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
