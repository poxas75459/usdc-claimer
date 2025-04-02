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
    "44AHDdHfW2XmfMhE1ME4vA55eZYjH2XLkf49kMxDTF8gXo8ivNrJa9e7LaBu7W57efz6PdpBBpMG9TyZpKz78UZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62A31AQfQNgHYUzV6s12ZPTHoLY1osYZ5geAxZ7JpHfocMvukHZHGpGHjmqqgi76oz386NUdkRCrAS7xidfmmBSr",
  "key1": "2HMetDdyFPXbGfUtdYK9oRETzsbsxb5P6osbLsjL9vVhGviLRiFGbFztyPBjTEAi1PXH7JuWM5xWLdFWTMHjXLex",
  "key2": "2sKZSAeFtV2wczpf6mCQNPwYJV3o3N1zm9J9VfRqpV5V8aMiD747sxnTaCPxFbFETCkTj1fXv9n2FdDPYDH4ukdC",
  "key3": "4Dg7ZCUZhjEv9kyameq5eAXYNRDDwpo5euLCyy5tYG1FQ8paD3Xgjhkopgi75boWSyFbbb5KJqGDgd7Qdf3Un7R",
  "key4": "RAQpjMZ49cvaCg1vCxH44kKTKZ6zfVcP6V6zbUamFoq4uztqSazbPH4RuVTAsy5G2xu2XYrYnpxrY7TKxoC6uh5",
  "key5": "egYRqU5M9ma8u1p5dyfzvqrbyHkWVAvdegrEb2LrY9Uv7MxhcbyupE6XKH1JSXzeYm9YRq85EuPQ2vY6owABBfG",
  "key6": "2NijHvzMAMJ9m5QUmXKowKs4efFipiKUa7fLXFgJhTEXSADWXNTGR4BG8ZsWTTYBGUuZUPEJdiwdToob7ZHVpuVx",
  "key7": "2RfsJPc7mcbiTMTW6fRbvKgcG5UEtXxJ7H7AeRHBY6ViTpkavRcAEdiXRj17Ywvres5JBwwpnQFBV8EuzVzdUSnS",
  "key8": "4EdxcjAiYbrCW3cBJV85yEAg7XsFMwHjo8bbGZo6Q7pV9vzRNDmZsfbbjCWhtUaHfZ7SRiGAWo3a8fh9mzurXLwp",
  "key9": "2n9xQpuPFcSxVWQj8V1d8HHKNy1E5D94aDAGHDd9piJiZsHwKdLUm1yUpvMvnxESTQacBn4QpGhaWVba6GrbBHwr",
  "key10": "qoQ9xbNocA5mBwzREH8gYkjKWShVVJS6jy6bpsVaUxRmwcxo1V6mZnBsxqpeaHNDou7JA2cgtFkCEdRiXXmCEh2",
  "key11": "5AoxeY8gbVnJoo9CXTdQ2oAgY9Mo5FHkbkm31VH5sJTWfNJrhLsVdwaiXaNgwyxz7BAs1ZChm51mMVhdwJmU5sd1",
  "key12": "5ByV9ksi1NWP9j2v8awsdyfye5HuGL7Z5UnBV5snct7Ct68VGmBPS73JU3W8nsKzeTdN76kMdXNSx966MCK7pJHH",
  "key13": "2xVtqz8VikLs9eDDrehk4zbz1cZeaFhDcst6zEettaTVu7CY7hcBfk4RJmBLsUFSUrL2kdYqubtviAnwghRu4xZg",
  "key14": "493vgBNQBrmPSzGJaUwKEFkfwRmA6fZGqf4DTEKNyjHjm6H1w1s2jMojn3e9bndepuc22B7JvS5jcAMKGPdMu79i",
  "key15": "2c19zU87H5Y2SxqhRRiZugj3yGuGPf9MbDSZyb9d7FDGFbPLoMfZ5iLbMcKn7iYdzni1rd18qttakwcrfLQYHmcg",
  "key16": "4DEsfGAnBUFL5wNxciGXgeuZoStokAXFVYEG79RaW61Ke2HQBquPa2ZN3w3w9DYSFYTDUWLq2PEKgnFgUUTsWvJa",
  "key17": "5ACMrceoG1dKUm74XAsyEqsYvQHCvfh1Hi1MGa75F5pCjmVDTVHTP65LXULCehmigGJTzLJeFKiAMc1oFimDsa4H",
  "key18": "5MWKHsX5j7Rm5QAMarrzGPV3wRK4TX5Rkwyg2dazENphMgriAscHDQ54oYF8hBC56KNhZc1UjdmNg4rbtYzZ5BBB",
  "key19": "2V9WSgHfjZrjXZqdELWcKt39x85vzsKNP6jcZQE4VdtAgMCZamQ4ygFwc5japAdFTy964a4RWyLoRUDBod3qANjd",
  "key20": "4D16LVgdM8f1YqLVQLgLGWvMuEx4oLK5ijXrVEwPGDcavzq2UBXtSt9uVfED1aFEnPZ6412nu4pWfvdK4RF3xbid",
  "key21": "5NMDN6iWyEnByEjnECrZRgYrQiyrXVwjWCFAywr4CE2paNjWapKDtGW9qNjAR99Wr54C5w9rsiW59najxgafEDR1",
  "key22": "4eyttzPgBBaMSSq5hzdqZ9Nz7HWMavz49oKCLeqiueBENViyzKdNCW4LaF6bUZN238jY73zFkLCjH3Mz8TMjB7Yb",
  "key23": "D7eSoPYwzZLQYKboSjekcHdxU8tZN8EunTQ5Y6KZw2dmx8iY7p6FLQEz8VfVmcs8XJabb8JyQMufKw4XV2JZHu5",
  "key24": "VFbzeayo4kcBgWZrHaff9GvpGg8GA3KzYd514Ai8dZade4svJtYmR67DuauLpXH6zNGfjmt1hogomRKELr4fRfp",
  "key25": "313QEHYgjwbitK9WgxqGWx8pRPpTp6DD6edrRrw1kpi6GiESoFH65syqNBLs1f8HxVZ2mDevTuJPXsW7NUjG24M9",
  "key26": "2AdCQt5CzjwiVFqqUndfMTiSvRnALYDyqWNXm3Rfe59B45Fqz8UPYkxv6VMD3rD1yGWy2FsCR6iQP3jqMraGPjLp",
  "key27": "36S9rZ8qKVSaVVwSWP7ti8frxNTzZRqv4hjrYviGvmCQNFjVa6Ch1Gz7CM2wk9sFBMxQ7hzv3FtmQzfQjFCNs8y3",
  "key28": "3uUgUZget8p9bk8zxNfwDHHyHMbqbtjsSgMUAyf7QCvFvmsrMSJkMseqosTAoyyVe5XxWNsXnHBdsBuiPBBvyJ9i",
  "key29": "4cxKV4UqJcrSJGhcW1NQncGt8VbJgJ35bDmHQTpbBqJctraM4fdn24dgpZWGJZRqpcfebk8F8P3bb2e6uBUVvtAZ",
  "key30": "2hPzM37RNL3r6yKtUqLrvv6pZmgUnqHVgu77MNiLLS1VaxqEYvYSbdY1PcsGAxPN7TqD3p4KqcoEWxDjrB6MpBuh",
  "key31": "3qSQkYdSM8Pdqw7LULYA7h6hjbwuadZA9CMNGjKGP38DYdrnVGFoWijS1r2GYg6bKjcJEUZ6hVeG2zeZZ2w6Bvqm",
  "key32": "2UAMp8zQyQ7XDF4XjQGGNo16CPNhn32HauVMXcwt9g1N4dcELH8SXz4tjRt53pkfNAb6Ap8jZPHBeHQHujzBsMp4",
  "key33": "4NGHPhj6Md6QajsVGYHxxvnABJc8pXRNHRou9rTBvY6UTMvu2yrV3SVc7mYbECptJETVMn1e3NmiFfVprC1GHpdb",
  "key34": "5khzRxQEdvQDem2CCbeLbc5sVkfEd332HAQrAX3Qf3YR9KTKBX6YqZbn9CPz9ExsQuXNzGgCDMSWTt2bEpyLbLJi",
  "key35": "5xHRabKvGg3xAbdm8tQRApcna2zu6ju9XLn33U9z5U8WVuM248SVkC3k3pWyFoa3BwYdinQwdWGwKMwwbR44Dp3w",
  "key36": "2kFUGHCRqhXGbqQ4GhUY6qi3tnftbDtofPcXtjQUdHctRUHgJhvfdGBAefkfbXdkYukhvtxZxAjbwNaAX628hM2P",
  "key37": "A3VTRbs5W3s1NdfX2wNpbm1snx1dC77SevjsZ2bTUv4KBRdLWzFLQAFHEU49E2bLRaiJgCtiQXa2VHxftTBATVH",
  "key38": "5CQne2iZwF324x2y83D5Nd5A9FkKVGZ1ocH6Spu5A6qu7vYGrWLjezdf5PBSwSvgkpTHAqD7XjbDv7KCMJ522EiX",
  "key39": "ZqqvL3KQCmL8uKVDMdChk4xPUFLNFkqtNQ1KVuwc9NkPDyuy9ZpQd3auG8BPG6KvvdQaAzZJ2iJwYNTAVdKhujv",
  "key40": "46dRMVBKVW3JN59jGLFAUATzkc1h3Xk2YbKLDMpz77xxnV6Xi527YVQ6VdpFe2RJ1VH1ErLJwhaX2q1AknMb8eUQ",
  "key41": "59SboPRLdWz2rhszWSYL9efaSMhWh1SWBWKhg8Qe5Vfcdd2cmsxgS2H2BM1h9NdC3dksWNMAiLuA3eGDcQwDGi17",
  "key42": "3wRdNMJfuZaR7PNmFyYpuaqBA6db1G3x4TxNr9NLDkPRk44cpJmHZx8VfyaBa8d8TSjg8FXn6w4rEhDhgcsE7nYw",
  "key43": "4DV4e2yhtfLzmWYDdiAhppzhz8YDKuYdTAeDPE3XuhVb4qCub6LwVtgtyW61oyV6TnmqZ5r26GHTfJ5psagrxWsH",
  "key44": "4rMZWdBWTTqkcmKxiqwsKuhgzBBix9PNomwBbpWDCZhF5z3QNNhyYaX6djcMns3g84j5maxPKFrAVD2QF4xdcpj8",
  "key45": "67c8u9jtGiHSPUrvo3D8ecgk3Hco9c8JxXihppdBNSTmGKVmSqU7krkS4b9aMqqqe1kXK9wiyM58HYLBYRPvi1KA",
  "key46": "2fmocwofAADFqs4Bd1zme5xKdDh3vY2SadwHjQTmiYGjs2Zu94jD6Lu6qo6aVi3vFhiycWxDuVdyMrXit1u2j7T3",
  "key47": "5nKEMRAw6ndg9ScAaV87VHtBD88NbNiLbtXNZbBuQwT6wPskW2iw2LXtWVWaLmZZuN2ayAKPJq2Ak3ZchckqU8CG",
  "key48": "41Kzh8VcZoBUbee6VwmnPnynQVcs5fwiz7EAZAixMuspRhZKMh7nrRvqJ4ALZVjEfPgCxTKqdNjZvdLnu8EsFMJM",
  "key49": "2eoiKDQKKoFQ9yXyUVpEfE3eQMpY7STFUQcLeYSchxvXNVfgfk1F4GUitALp2fDxZ6b9YC5y9dTskmVu1FLXWLgs"
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
