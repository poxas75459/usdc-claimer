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
    "3o3u3PSBvHuXSZeyi8czX9ZzBB2YVYRfUVByEqK7F2mDdnum1G6VuZxyR56wx3CqcA3XqsdPU2PGxa27dGzniHdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KshNYjWhVfKRCSz58sjb3i1wvv45ubq7YhHizao2R8o3rbcs4zjvE2kZkEyH5khaebMfgMh5g7r9xHjgvrqmiGB",
  "key1": "2Dk9Cme4eRUE4tDzqFtLbqihNdgR4sNbMnnuKyXoqPFjB1b1d9ah4CukbkqVbZ5tr4nyGc5jegttTLHjWtxVMawy",
  "key2": "47M3XnVGyQhrdSqz1tV7rFNwmdb7924ZdR1ZbHMJXSxZVhP4yuTHuqbDPRMSaVefAtBqVVMGGVTdvgiEPfRzDRBn",
  "key3": "4d1Cb8imkXUgqauLJWigMG7aqW1AJ5JtjMS7eyFJZDvGxUJ19M9YnNev6vc2sC8twRKA8bux1ak75FrLS1wYiX4p",
  "key4": "2LYSMQEdvn7Sm6UFpnoBcZ1BbMnjxxX53BV4Am52pAoApeDZsL9szWyobqrVwkkLPbUp2RCUPujQqpbAqm2XfzZ9",
  "key5": "3cob6jV3d8P7AKcd3nfirawSTvmAzsXrkzXWpbRaBYcVFa2maUPkN9qDUmpKWsYkuyYvwAMVsXQ24swQDvxw79bJ",
  "key6": "5x8xcSM6uGSZBM8hYTD74VXJS7BbD4Jc4L3iqoCuud953S9PaLJs2Mhpd2w7Y3hqXVKYqYZqeBsNvNAeMFvfUGMY",
  "key7": "2v429gUvSXWc21r4gTsb3uh6ZQWkXE3FvqsXe67oGMupvCWz7cFZUWcL8apadXsTM6xQEUJayAFFv7Yy5PJStghL",
  "key8": "3812gbK3EjJ4Udv4nFiKk9jWdShdiyMHF4w4MHvPEoNX9FLZqyBbNXNRWHXgF82zkfFMyg8pBv58tSXrtoFwwUUk",
  "key9": "4MmM4BCM8SQspoQrtE8MHqCeddRNYyJTux5hLE3fPevF9butxMvzEgxrtZbnvzFoFMf362Lup4Vcn5VUykDRnofn",
  "key10": "3b83VYDzMKmnhiCr6ychXspJYsscK7DXksCpU5CNU89CTJBKYvYxi2nuyMypF3NLowHu5mPYTFWttat5wrwfJGDk",
  "key11": "34JawALgA1cH699FcQqBLpAuhUNWitUmGGvWM8bGC4vA2ZiYHzEQWtkA7Va3TGZvMwhrxT8MZRr2S8U37zABZMDa",
  "key12": "3gXpcm7ZUGtUtFx9U2ma3nT2eafdWq5Aos2BBT3NKKG5BJwS9AXZrX6rmqZ4VVXpzPT51SnWZHFc3TSpZRWhbvha",
  "key13": "5cjcQAW4VqXbrrugobX7f37a4H2Ddqsp9ogyV6PuT6iGwC9ptFpwWEMKMykqfvqK76nzxBx9aauzL4ycCexEfvZr",
  "key14": "3qABG92Q88XWFDkKKfMgnhmS1CJ88XWnV4KbPWi5jXYeqom1rt1tCo2vyZFKtvm1VRpSk94bCD3meSnbgof5U7s5",
  "key15": "2C2268uCqT8jCDRzs2z4PeBHVs5xZPFE9qaRVRoj2L5CQKbuMpVYYVDa7qop6sbcpYsY4UBotQQzMq7q898JkWxU",
  "key16": "4U3iSNMUgD4PH4GVca4HzUviuVW6Tk4kQsSRt6bNoEStWCz79eT6TRPYW7RbatrGsMHNsCjn48Lc3QtQZtg7jWz6",
  "key17": "3nLUyyrSeogb8Qmz5ZRF34v8naG447bCUbiBXid2B3tX6jYy92JXMynV63PSZf9CuJGQL4PUT6FzmhLRorDypJV7",
  "key18": "2tpbAbPqsGiPG2aoDwSSA3rWmwkSZnztmYskd8f1MaS7ZMVr8DFMMEg19G6QgXgBK726SUwS1Yh2hE6SSDetcUT2",
  "key19": "2CMjHM1wd3zNVf1Gq2ktvf26rCzcJo9sfJAAbVKFKPwjPv6hUY4RSgRpTiCzMCs66V5cwB7VtemnAzj2MNYMdBr7",
  "key20": "GaRx4dZTh52CH7ZQGGSvphUznQXQMSM4r7ks2DEU6vysVPcDHns29FrVaoQL4U3tP9KriYNByHqCdYg4536L1Pv",
  "key21": "5NDXRwWxHFMft7TX9pRs5ezRhAwa7ifbwdtLo4NqQFBYNadRA3kek2jpvHTXVEsoHRUTBk67mg2XPYRTNf79mLyU",
  "key22": "3sFT4Z3owTta43SFZ5EhDUkcG3U6pAv8nWNKLiuXpg7698T8uAKNtcyuiPHz5KvfokbvbwcV6oV4MKG17ytPQDqj",
  "key23": "67FcpCFzKt4ZHnQyt4ao7R2xZmufATZ5UyXik7Ddy8aNUnvJGs7BbKkj9cFsjoqgyW8aHf9CrMcMxZ9Pq5PDffMc",
  "key24": "3DqfYJdE7eqo7wYbWyT75PzT2jHLo2xhWgvwoiLLD7e8rJ9SkR4NZBAHvnzSvfPp9SakzupgsjXxeg2LgyDPuvgZ",
  "key25": "3hdhQvGXzcgTB1LvZ9SpnyaLcRJuj1kHysw2AMYS78LrqJx7nsowZHWzuaJBKUobn69PNRszejnGY2Xiz338zHAm",
  "key26": "5psxz1U6QUua8omBZo31jvBSiuWPJG4b8GYgR7x79h3ZyHvsy9hp6gJu9tE8CydGLxFoQMgmE4m6SXA7Epd7Dinf",
  "key27": "2b5up8ymwX5bveLVupnFmSk2fWmD6NaV4Wf6G7T91Z1B9dZxGtKgjaS735Xjs2cG66kKK4gdgbidWXeHc6y3QSuX",
  "key28": "3DdLT2BAupS9ze81nPePvvwLnXQtey7UsD8mrWFj6paoF9zD8ep3MCEAVXXZ3M6VSYC73n9gxxMy7D8k9cUeSh4j",
  "key29": "2Ni9XhWcFkHvTZ7UyxF1qsoGQGt5BQTzFzM9nCsWuMqWja6nKBhayrqQELtZuGquDcCQMjaLUUjY8E74DhnrGKyj",
  "key30": "uVmEqF1DLTqRJzPPJQjWu5Ne2pizX3Fem6WGHrkDwvN1GffzEpiTYqLEXyhVpyeipQUrg18c1p3QwG3YBwvR4UN",
  "key31": "251uDiqZGHUzs9dMeJ1FefCxSbYMwZF2kZ6R5xEK6QbuZ9nVWvA2UD2mAmjPowbRF9uiHcHY99hHYCBoy4fTt3ZH",
  "key32": "2SrxT5K6nSSfEjfZ2NZ8FQXjFB2dTiDmYK44v287VTiihReFXovGHxwr5RW1tvSBZJwZgvz9FbWPEJ1Pwo2xwmCJ",
  "key33": "3EUJ5d3McmMtAWMYgeEq2CUpJDrVVxXwLwLrzavpmE34HEbMTTdTRhpDtKWQKLEiFbDCFnzuN4Dh4DQDoq3PygGH",
  "key34": "YXcinWcauWjf1wc6Uo4MNmfx3CBWrNeTqjYmG13aC19DRS1yurw1xoXeQExJkF3ztFLLia3uUx5XMXL77N2ex7J",
  "key35": "3rrSiWouCre2Rzph5Qw7gxtF84c7AjA2HT2q2Jzauv12DwXmA98JcN3bNBpn3pH7pftGxkJkFEP4L4GBtPJFW2uF",
  "key36": "2uNiuri64BtADTTwjX3UR3VoRY4TC364Uy12UFL8vkUNq1ZpVgUfM1QBWXKHaNn5wpfbsrVfoBJ4gXE6RqKu7ejk",
  "key37": "3yvdM14rPoaEPx9nqeKQTY5opef4ST2dteCRxWKARvEziSAfpuaUQwdgUssMvJF4itMRHruAqCsygVnSH3NhDmQ6",
  "key38": "4mNnF6sFEjNF87campCofgkvP4NjbTUZAMDd1uFqXzGaeiptdFPTSRJ1cqtKFxcoxmRziV5hQPYLAB32gFjvnish",
  "key39": "5QaA8GT4yEBK8sRP73723WKXxs5fFEwEHKHc9HEBvWVunZobRUtGfhGHw3vEqLim1KJxDDZph4fAzqQr5J2pBgWH",
  "key40": "3hCnJiMYrURwer7L4Gb5RcSwPFxmkin2KYFxAmv7DKJtBiYNPjTipMJtRzjEE7WhUg7DEwVFVRV4EFfEGhmwg1BQ"
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
