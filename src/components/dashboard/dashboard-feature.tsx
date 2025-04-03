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
    "4z9Y5L9AYmf2i1riJaJ25BUrp2YZX4NktztoyPX8ihoatNJig71MD5vC7mW2tAiYE7Bm38Mom3cZA12WeXorc4iS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DmNnxfU2Js1isWbutP8MQv3j8ada4RrYjNbGGnhPV5VXso9iPmkHibbH9xoYui4jg7VwC41rfB33U3u36z5TCRq",
  "key1": "5B2TF3cYjN6JMsv3p5mvezY5Ap67DRAcYKw8NSdcTn71dvn6jJesyc6DNKeRrQutyksTvRfo7ExKxCQzJ8ro5bey",
  "key2": "51FAC4FWUArEQHLYpvfZhMXF14dfQaqSFB7c4sZfy9Sgbh96f8X2x9QE9ANfvn37Qct3qGPkiDXWpftvWqDuZbHi",
  "key3": "4uiCT86o54jU8rqUyqcUMa5E2tedyZzojoC1ptq5RxJntW2tRPNJXVtAWbJ8fd1UgeUzy8fNqYQghjtJA258LiDV",
  "key4": "4QLoPhHAndYL3h3izSSxXApTzdWuTscQwAPe5fbzpHBT7j1XLvoLe498CpvSuewxEsUgmB6WpzBxVcQF9bc11Kju",
  "key5": "5tFhvbYMgqZ1zNc6gMRN1tLaLBkPCAzDCtezNKUpXGhZRLfa5cR6iUVEZVtNZKSFuL1eSFqfJuStjnJyVAYnAYfx",
  "key6": "4mxat8WavrqasPuFDwuwV6MczGbfYzt4PJ9QGCibj4fSCDdMtYntm4jkeK3VUP4yDvSs2DeVDwzkByzhthMBbVzx",
  "key7": "4uiJhWpsahARi3m8f8SFQ1D3kPV6dy1rsYHwuPoxh3fsKWgMwjTaW45i1bUUfPHfLZTdjWcnd8jxjU2PE9utCwVf",
  "key8": "4jy8tNaSn4ZJDRWkh6abyCygcjPPyDwXo46eH8aMJZbpziXZ9MdJYVPUWA6itzbcBned8HvjxknHXwL8v8soACkU",
  "key9": "2sZ3ShbYNfbHZwMxD3W4Vs3NmFxBaqCdrpsqjUEXcmTFaZ915s9kd7SKhtV5ptZEao1rhZeYYBFFpCszrtk8tr1",
  "key10": "63sUL61WrubfCfTNWkiFNRtgq79xyz3Y7ZDADC5Pr4bdEPTBCD7NcpR4ZA449MKGuxkq4SyTU6nwxUWwMeyTW1bS",
  "key11": "EmN2pk8jNgffFKKDnYziunzRbC5SkgVU33sVFFo6GpVkppr7SnGJR4UnAPRFrC19bPgVwfpEtQCXERrF2n9rAhE",
  "key12": "2chSDPFE98nTivFYbVht1F8jzLhPqi2iWFYA92CxZpjxPd6m4hrbbJvGTGjSrYo6qxTQHZdJGdkmmpud8FKQ9Fa1",
  "key13": "3EZvwwUTxeTLSZshyAmRjPDDrkas8PeQcFGFnYb6pqKgHv1vPZBoHfyF6KwLrvybbst8nPBcRvd5LaJvjJM5rCE4",
  "key14": "3UGV2cCUqAtJJgUMGRHHvA996vteL3c46Uo3EMniVFEM6HXayqY1p23xMe93hngsXJ8JcD5LPum7dLe2A2rkMDnt",
  "key15": "5vZNDbMY7ZwdTWkAzDsaiD8ohCx5nshXvS6pX37NYpu62GrKFypzZEeGxj4A2X3zhXeWrmBJWxKAC5JmySyuCRw5",
  "key16": "ALzgcnU2Fpqn5w8mprJcWpzcDA6SypfYLoNPw2JiaVAeWEaFU5ezpUSQvkV9QhDaWzGdmSjZdvZ1MGMtFFnXe3N",
  "key17": "3yR5sXtwLEFWSRHM9bjd8kkAWFd7NdS9PdZ41iGp2AGxy6VYYPFcNgpaUXCz2f7Z6w4VjCrz82zxC3gyZFQSRsri",
  "key18": "gU6XjEsnQV29nM6uwA7o2jumDzQzCAdiiXDfYG7MAndu9Z2WDpBzAcgWDHMnjuAX2FgTVnGtyYkmgEEtmSB8AhG",
  "key19": "5Gbzrv5GVozyXrwtwPDpATpkhJeEz4hFLYGcAbDptQRbtoA9d2mjgReNDErdyADH7TKeqQkEHaSEJgpKi6P8iJQP",
  "key20": "2XgYNm61awKegdMZdYwoYkkeN9qFuwZHih2F2mSSc4PkbF3iqkFHtF5Lj3ZkKsKgL7puF4LRQtEBnTQumJCbJXRc",
  "key21": "MQACJMS3D67fBaGQHNUXV9GWnAofwTLjpNAqJ4a8REHC3BQfdZSWgbnRngLCqBF7hdQZQcR2J4Hn3ZTPFz8MVM1",
  "key22": "2g18A34PUiwwhRHrPGWXm1iLLv3Yyyv17sYqQvDeHio2Fwfbn7C7SAKKyMh5Pu29Zsj4GwYsDeM8sUdLN8Daqcor",
  "key23": "2LzKjGWQJH224LTBp7fKuw99g9AXJnYsyNym8HFeWu5faWNejLZsDDc9X7Q9MhQdCUYLPX9as33iovegrXwuaGnW",
  "key24": "3upDH9kce89ztqugaNUcjpQ3YzL8qtMpMKsKn6wBg5hP7H8br9ixRktwRX7EN2ZcZvS3rqcWj7cXJQq4FfPzEwzx",
  "key25": "2m9FNhJorAYiiq2UcoSyg9fCtrJcYTtXvnDfB6yUAwzVrt1uo4P414MD8DFKeFWWJjDQusFypZcAWjMjUgPmxLUh",
  "key26": "3J2trXuNRZAjrs6nrByRBsqktk2aMwzmKAfRbT2WyVrLky2UpYZVBrpPh5ETfamTCzj5yumD4HQFWCyAfuvPThC8",
  "key27": "4NJDJ3fzkAScx1tcmRJy8HDwQggKHG2aGtfMpiCsCqWve1DMzQTXGuEy9iTasjyMVi1Pi3MwR7hj8UYQBUeL2XxZ",
  "key28": "3LKsCPFLto2PPFNnFqorUdFEjWFbYwSG555b5JXsxuwznJBskx2uDrXyBX9txbveeaeh5deWkKXCwLSEddUqYYJp",
  "key29": "DE8RNVBKXMcDjHZJRFqHRsT7QLNaWVhJZ78jyL8b5Lgw7naKKr44qZzvnygAvAbwy8XLuvQBiWEVp7mnENaS9xY",
  "key30": "43PaYum6SsdGeT1sZ87E68XXsC4tJW7nrsZaiefzBC6E3sqh9nTqjjERpxSFq7S9kCSCZqsU98r4bUbvsiCRgXc7",
  "key31": "ETqcWNxTJrHra7L9Vsw1dYMw3TkRtWZFeXusdoyVxfhr6avAW5G9ePtr46yi6pG3oRb8FYNp7PPE4a6YZiFK23V",
  "key32": "4t94McYv5LSeGXkxg7urGbPCk9VhaxfeFGePUWtkfCVKjxN23RJSbJ5ac5QDuvJDWbXuop57oFUDwa1kbzeCtL2j",
  "key33": "uhXY8nzATB7gNaDtxFKBCmAqviwCe1RnBakS1LFzjdGoD9sW6NooZpEGBzCoC2L1De7HfkHLk3u3d5JXbkZwLGW",
  "key34": "4kiL1cmrhZ7VY4mW8ogJha6PASmQHnZwf4MzuSwrQbrRmV5Jnze8dpWUjScVoLC3Y9g89z4haHxRhEqYnp4iEBrd",
  "key35": "2nLdZT6jLtkChY8zMQeVBSqzmCozKnuWMPwsR4zYnQtF5pgRe6u5PdJY5eKAZqstFSQZdVjqx83YHsfP71mVC5sB",
  "key36": "zFToerLFSi4JQQFksyzvq9FuqFUhAEdAeo1coWMwoDpD6zL1QTWXMgmoaDpJwyHoHa24DXs2K2xynXtDYnPHwDN",
  "key37": "3su9KEH5TeP4FAFRPD2EVoP8caRNCPudxsCm7vGXMtRKGa2NkaQ6bJKgSRAVqyYcXctP9bNBnVFMzUu2vfV5jzvc",
  "key38": "667uVzLjV6jgX8VqemctLLkrHq3vpfdenT59X6PmdYB9BtqNBo1bmC5cn6zrrQgyGctp4tif5PytQN9F1RtQ2wGW",
  "key39": "3mECcTjr5PbmkeU9o6QiFzfr686nZCmjBtnTVGejsGRoYsYWBWrTTdFX4E6TUjUDNHyrLHqP56zf5p8oJgkcW9wu",
  "key40": "2rkgPVe3gFXybQ46BWqFDLqgcoDp9zw5DGB2ERNFpbzMUhWHfepykNTB6cmsziVrxY43b6LJhM6AtVdPujLxYLgr",
  "key41": "26zYXLfZtDRw18Z1NaWhVKLunRKGscqyY7yraabn2xjmFtWUg6Gn1PVuukFyNp7bUwUMNBME3UHStxmq79R4yReb",
  "key42": "5f2RH6hrR7HenYNdaunGbPNEkogb3u5PtFahxb2KGqrNTcmECHFaYaUVNtg6Xrw2xYs75dpk8sHiKbSQcDu7mDfn",
  "key43": "5A9R9ELF5RdSbniyb8krNyUoGRLwz2DpeC9LzZWUeTB7VHG6Jqcd4MRYYSXt1vYLmvMtPZV9Q4Kmgm8R5TmWJSNT",
  "key44": "5HHb6r3CcE8m58jB65funxm3hiMYAbGTurpAMzYkiywCGu1om7kS3uHwvks51YdEM896eeVvWmXxsT2JgngoYifM",
  "key45": "4HTv5GtGLPHJ3BVRmkee3qAgfSjGaaCqLxwnX2KUoEhfgFgTTAWda6oRp5QNQy13pjy6t9F1RqGWkAfAJnW4VvWx",
  "key46": "4wY8WhsYufc5Sw9ZUt6ZMLEjJe9AZsDUhusFFE9DEd5MT3dNFLC1o25DgWi5ozFcfsmpDjXpyppN9eWBi8ES6pYZ",
  "key47": "21WGEqoW6iihwTxjGXDqhBcjcA2pq8T5mmmWWcSqt7gpezxP4rppX9mDip97fLBfmE9id1pMwy65HjmJWYcGebgd",
  "key48": "2NPFsVnayqwSfcTJ9yWpYKuKuZfYykw4LfqPoCJTfn7WnYAbLXCbzhXnj7dvaA7PhW6tkvAigqGY8K1hoXQHNpr3"
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
