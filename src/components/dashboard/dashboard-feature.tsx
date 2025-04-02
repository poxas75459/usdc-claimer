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
    "4nTm9AoUgYFocNs6Him2qh29MRqmybDSXe4iEQXjPdLeSgztDBEw98ZZWGUTehr9WCCJMoNMggTvWLBchsGMbRdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CqWZiA2fLsULgmEJfuoNceTU8NzDLNtye9dGhWxcYTv3eHZ7USbNhMFpekUup7YH8zk8oySpT53qTs9omBCM592",
  "key1": "4ihTxVmmBqNHkLmcc6ZN3BNKds3Z6PcswiXmGScSbpaUF2RoDZe8gToB39ya65su3EhZeS1XwGeX4j18DhkHnkfF",
  "key2": "57ev8GdgpUSatc9b378jNg9176UsDkrtutjPNFhQxcdC6QtYPXZ6yC4ARZ3o7WLEZ6Syr4bmFdNgNgpeVH7WMsys",
  "key3": "4pSdgRjMSvmwhenHzpQNAzwP8rAWVbuFabcjUxs7JePTwedMqw489WZBVrkLMPVoZprawT8cPCHHTNyrLPK4G8NX",
  "key4": "2ZYJdUNShqZSwgVrH4Tn3owPzMKY4tjUG4p365Mvpi9DBFbHw5ceyW3SYQ2K8VNGddyJ4Qe2E5Z8nMRVYyvmgv77",
  "key5": "5BHm5uc7tfatidDwgD4hWmCAdPEfBZDxaNnYZKKEHuXjh9uk9bEd7jMJXvbsdVRFPZbF3HiGqEf1CF93TaeE7zCq",
  "key6": "2gWGbrE7utSyqby3vVyS5j4du1MBxUnjCFT4qnHvyKxUE3mkJubNuw1L1g9DCVMWHNGg9xCqj9QyGpEYQ4WkUNvv",
  "key7": "5BxZ4bX6g6XhU5S29fJrZZUTxLnB2mRFoSHo1iEomSfaPBPyQVcrR3Qt4QKVW5b25BArzxJctDeBrAxxVXyjhBBJ",
  "key8": "dqmeHxbKEDKJkUSe4JA1Ct65o3cwbb338XNhEMu2nzMJSPabrfGRc89WrYK8j8MyEE7ke9EEmG1ngrFUket4yGM",
  "key9": "41ZvxMs7Wve5fn3XiRoHd9ZtieE3CSwU6HBHdCCZhRnF9cRJDLTbpXU824378G7oKgvFiis5V1EcieryzsYzkkYR",
  "key10": "4xDCGDSHhZJd8BYoRLZk8rWknvfwe3VUyy6JYACvWGG3drtfWoHyZBu14qfwc5xZDFfh6uKhKgByRq1NBvAnRy1M",
  "key11": "38D2QWQpDCboiZsfkRhPNjGhe5nZ8jkpEeBeLKpcr7vrbAY6TUpoUjeTPDwCjDobA2Cq4LZwbtL8VEPSdnv6BhVW",
  "key12": "3DuDTRVM3PHAZ2Y5KcATs5w1s8MnEujTS6fZWWq16zn4hEetaKoxBSNQTSa4Sr9go1d77gwDFaADY6QgeBd6MriL",
  "key13": "2pNmpGF5MghH7hBvYCyX217KjYiwLFPivxrn34AnxkrkfTFKe8L6dvnArTqgt545DELB99zWfc51hd9Snu6kDQtq",
  "key14": "4xpmqNUdfQTsd6HraCtpQZN9vnxdiypLTE7juU1tNztgXMn6j1dfCHXqJ4LnFewNh3Kgt9WzvRGQHMXZaT7UHw34",
  "key15": "5Za4V4tMfLo6fRjzxwEARJUKdHrU7r826Cc4yYct6z2Vg5Pmor4SRrrJFUA1FYKh2SX2s58DrrmLnVxJLr4zNTk5",
  "key16": "46Sx1NYZeTJjiNBcPdgEzAVjxt3o1xYPiZRARMDLVvqAcpqUhvS7ws1Hikt9UwXgPd6MiJ5x7KceFeDH9ZF6zrPq",
  "key17": "8eCusk3K8KcXEdwFx1B6DdFUUZwpL3WZDvzxX3989AoNFUCbU5HZQLvNbnzqENCTkbwedA4g9bGPWkYodB7WaxF",
  "key18": "5ERjXNeZvjf6k64PLuLmnwz63ES3zucMMGyFJWVK9uFBffCtTYUCs9xm7FFz4HjFj26o3o4ye4KbtgvEEtpD2Jx8",
  "key19": "3Z3FJJX624YxzUfnEK3EtwTPDwmoBWro77cMYhH7V7hyCW5Jpt2SxFE2YASTZx8a4utkqU4jwzR5unFvuiJhsSXc",
  "key20": "L3yCziscJuXZj2Btg3J8p8gA4822cxLiZ3w1RweQ8eYVm17f4tCXSCeR5X25r4WyrQJ4C7mx3DNhBPAhjmtvgpx",
  "key21": "4sdwnab6jFEMy7cbYz7W6RvgwxyiReq6DvFMYxp4Az1AgJTBG9RavNoFLTZptt3D65HypFGGJSZZ235wPWZqinh6",
  "key22": "5xLPUgaWbN78ud4WJersCx3g7MdNUeGicZfthymkwskfgtXNSvkog4tCHeQQdgnU5MAdagvzoAYDuXU2HEKWzfDp",
  "key23": "5MF7zCbCFvMhjPK2PpT1tJB1zCmPJSrt443o2AJTp68Vj9Prrf4xo1DDPF5XAJ4pH6YXVmPpah1j6yq53mXrie3G",
  "key24": "4CkPAi4UYdM47DVxg6Nhw3J6U4UJd34T7YT38dH7aZ7ov7su1nM6FL64zazxkQLZLd3k4u1ERrht72AQFSsUqVzd",
  "key25": "2UvWQBCFjnWbWwF1NqemJqPHtoiuzPBaMKrFCayqcBQNGXtJeCUYur6zKSsufFsqxBnryEa3t4YwgDbGKmLXfiSW",
  "key26": "28Wyt73fypnKarQz1FjXEtgdt53MrDWDFyKXmLgB4cZZjqu2cre2j35vUfDeTWh5tf5r3Fq5SEuBE9YMUrFqGjsb",
  "key27": "2Wmu5KnVVNj9ifH4MAmXWT8qkyhh7JS3QiWjhXCxRHaUPSDwVaBSK2nmLSge13RN14kWDGgsPqmwBRiPeYUKHngn",
  "key28": "3UVG4jkpBDpG6haXLhJvErBwMFAuD18XUp667xs3gGcq786F8cWCWhWHfxv1CVWwfTxMAHHkmy6aaBEaxLKrqGg8",
  "key29": "qT5QPEBJr5SGHYAZbhgfrapVgVCYdub7aVZMWmjmwXs7UJe8RmwCz3trqDUW3JUPu26J1KGU5igoYoLpj1tbwVQ",
  "key30": "2SAB6t9G2v7GFtn4NNfiWQGNZjdZbowv2AVhq65bUKJ7WRGvAcX5CE4k3AoAUuusU8W5QNi85nGjZV1npR9Wy1vN",
  "key31": "41b89etEb7FpRTnkUJgVtWGz6JkQcoYgRYsqPfD4ooCn3ZT7G4MpVM7UPcERBwQQPp8s5MGfDKb6LdQJah8KbLgV",
  "key32": "2FKG1HM1KNHK1TGCqxgiQpB2PtZNGwnRUuyt6PzwEpsh4d6TnfyDjBuyjTudfJ3VbQGCBish5GKDesVbnsgdTRWf",
  "key33": "BotxfXN3HzcEy81rzRkxLUYwEMLZQiWarBpvctWLqieY6hQCGi9b3yBVbdxmmSrqzpf5g9X366qb8wfEXKPV6LG",
  "key34": "36EjX9uqGK3P9cZDFaAvNhGde9EvDfSt8qp86XMDuWmrhCeumnSMkYJrVSk3jwJFwQQJ7gXMsJJrgcy9fS5oKj55",
  "key35": "wZp6CthtpspWmdMSLim8Q1ZLCTxXjJxmsy9zSCu93AYMtgaNmWnbycFDMSBKiRNVMxFwehsaunFqXkXFUWs9H2t",
  "key36": "4rTKmA5kdbmqPhZLsYnJK2qAvRm9xrd31tebK6BrKnc8ZLoRSKe6xRB5aGucyDM52koayZQuUTFThU7Zbct6EW6i",
  "key37": "2RFeyxsdNv1semDisYesN6sw6oxg3ffWUxk1P76aTKmP6HqEhLK4LLCHT3UYrwi7ed4Xtzr8cgNk7Gh98ex1v28d",
  "key38": "5rEFnCrwBpd2HJL8oJSVfQKSvLzY4beF7LiuNH18fyVkEfoME1nXJWtQZduGqfdBijtMfqNQ23DV9btNbSzfGsaf",
  "key39": "3MnFzpEmd9vxCwLbGCSBR4TRyZwJhJbtUsbmfw4UPa7fqZXpXG8TbxS11SwYaYzBdwK9DoGDw1NXzVeoizFxN5o8",
  "key40": "4VNfdVJXVyrfYzd18vYJr4uGr4CKFzR9zoy3hzdXXf4mXnBMMvFktwQ7xmB6u2ekVBqtfJ5VVZa6WHxDseQzyB1u",
  "key41": "EKVi729LhoBximvMsjBC6TBzHq6rdm2z7Dgp78qLgceSva9twoodmHqGr49TEgXWhxqSQoo3d8zihkXXMTHgpBW"
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
