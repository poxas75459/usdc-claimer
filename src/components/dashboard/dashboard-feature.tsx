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
    "45K7MGUkjg82jteke15XoW7PMREs1VULJUucMk46UwtjXhtUmxunWm33pzyaE5PqarAU61wA1h5nvHUhRuW5M9cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vdyvpyDTADT2RGW54weKYVZcvHGAE8Xvj9nd24vdscXXYk7zKigLtHL5qA5QYHVHbM48Qk3n4ubLENQztVMz8bH",
  "key1": "2UBRrHni9BVG7LbN3xawX6ziUoWNCxjh9cFPqvoRncLNZU1Ldm4ieTF1FgNziiiPixK5qQh8jjvQo7bJPcfbHWAU",
  "key2": "4EAYyqiRppceM81mJLSWCgdWQ3KzurvnnXnbuvjuhf7PSQEvU1LPDPTYwtqHxbtt3WRsmmAGkf6t5ezFyxXBkhvb",
  "key3": "3o9ftL98NEhP3ZXTvFyLTg3FM7pkDUUttjcMMQ35Av9uAjDfvVweAcXhdg2J3CQ8wFnnWjT4WLQBzhsVKC5KKEWE",
  "key4": "2FVS9xQVLXYJLiG8rbifMphSHdSe8nEJ7rhqF6e1Ndd4FXRaKdHNdX5ASz2rErHrvGSUW2o7GvkB7v721sjcPPxZ",
  "key5": "dSvr9pd6dnK3dHidKwksdyvbKmefqAkKmFYmA4jpwc5sGwbdDYLngivfLKLXdaLwjtvA76QMG4QVwvWcaBn38rP",
  "key6": "5HMwcXmPSk22BCeY2sCvt6woveiti2gMJ3TVDVid3AMY5rVT16BC5VpFVtvd5bFwVUFF2GLHKNmDJ4NuqTJLHc7t",
  "key7": "2Qd2SKXJ3e5FNHseAe3pdcHakt7tD7TG6YTWBZXNgwKZePfCbJog6xeHzMRtuy91dZUa9pbwTYVcbTYHwcvkoK3B",
  "key8": "3agdtNHgu7gQLCpqhaArfGLYANxA8axzAE6s7kkEVCmGso5KuBJFUzWBPwq3Ve1VZC1waRQPLrkCA8wdp1DTrDXo",
  "key9": "4K37q7H1xBA8N4NkDNZz25sRvRkBpjo3GnouPBMZrRUdyuq4gkYhBZyZWPRFQn4wuvwMeRUujZYDjx2miFxfARSm",
  "key10": "2e1SeRkGUJp3WpMjYrpBEpW4TsJDMtS2JrvJRDDMydzNeD6K4xxBN5M9q4fDcgQ9pviWCdiP9h3aeLK5F2djeSFi",
  "key11": "2qujy4EFutNDwwUN6EnZaY4xRFku7GpUeKw1Ja4yZqg4eGkd4FUQyBZfxxfrJGf6rYDe7392hz5o31hCDiN4qZWb",
  "key12": "4AWVFfcfRBo3qZfLfkhL2YPEXqnzdAeUL9tSvcpzgjTNNhU4Y3upSe5GESjVqNnX4vcsYYufPvVkNaiUc72LL6cp",
  "key13": "2qXKHfFGkdMhFVT1Eog8ioPY38Ev5XGapUYkh78XX3GWK4XnqyJRGihk65zc9KEPBNfMt6YJjoodFs3f6Sw65riW",
  "key14": "5d8V6DViJGwQAJVu81AL84kjJPk9LCe3sscg7mQvrz5hMYBHzChNgSVWbtie4wvepoqf4UG2Fs3b2eFjYxqcMSXZ",
  "key15": "3smeNfkf9ZMyXwJvVyk5hXFDifqyQu53NnmfJR7ZjeHYaCBZe3rNieEZcc93t3phUY9cVVLJWyNxJbt1NmcYd7bC",
  "key16": "2MFdbowM6ECA1KVzJ474YecZ276eVsbtnu5EQn24gqr94QfLEJGrs24qeMGGjLqTJ8EAu1jHDtM12FZ5HqCdBu8n",
  "key17": "26BgvwQrETGjRo6c4gMJNcukhWgX6sSBG9YA1tRpXk7LhMLoTDafcRKVMY8VThfEKf7sL69ErcrosvNARxWCENWx",
  "key18": "e545YLmYtjCLwRYXFUjp2cw3754AX5pmisyVJM7XK2ohXjMu6CHovz8v6Rq7AYDUz49AUJAswSR7V2rs71ZtFAs",
  "key19": "Ni3jVamDd6pLh8BMXXZ4Wf11aJdB83y3NuPfATYKjq6DDmiB12PdAxREgnEA9FzxQqx3RLp8TPmjGUxiy9gmNfp",
  "key20": "3cXXVqTMTkt7hp23NjRTeCh1SWDb2t7EiPns3Xypcba3F1mjcv4puXrKrC2enb2irRxdmFqn6ShGiBiaL3knouFk",
  "key21": "2JadZWrpLxAbjG1vaGHhzXFibBowHkFzG6C78dkyrHcWTWaj5jqAbSNBcmwjVeD8d41ANaqyedN2cRtpKBUQFD6u",
  "key22": "3k9uD2C6u9uRFSk8pUfhDj1tSKdFwRJsmMGcUtuE3SWZqhk31UVd2pg7qQxCzbFdNZwV4mPabe48EpmZZHyT8zpE",
  "key23": "5yC8BGjTTHvs97zU9S2WEYuMvi8WU6N6q4SH7SbR8LbCfapq64MGB5psLsnucYV4mSjHPgFa8EP7FwNMbRKrzdyY",
  "key24": "Aeeyq97pGJokonna1u2ANyjGvVkeG8UCVvME4jPGJ7fPu4HReWj9AnGzWY9nfoZowtU9HxDW4UoW7jHSKy8YpkS",
  "key25": "2xiwW8AmpRzntGqdCAExa2tDNd89b8mkEBWPUFRxtPoX9nuSnzWjcVpdApbJnMx6KRRgXHm8WZtTnHUo4obK1UXh",
  "key26": "5FxQTXdDfk1NFfhyU9Uivr7gUQ7P7xihHZ9AFxaUoVjpqMnRWdoLTApZ6xi5KKaDWZYx7Vrv1iEhYdT3feB4zcwX",
  "key27": "544VZpmvhENmFWWwR5hx9ZsJhgxDSA1D7vsBYSy3SaEzqjGeGg9cBSoFfg6oBKGr3smdUrm2LCnEAbyFvTe8PwnJ",
  "key28": "4SpUmBJDtQ5TAPShQHRwhW2oR9yfWbmLrRgq7eF7fU9uXMjWYKcVS3LMQj6VjMRM1maJfXSK9uHxUHp1Wbz7kQ2Y",
  "key29": "5XrBDnNm3w92xXyCLqaqUqqXAzZ6f4C4ATimNXHe9iHgDmfEr5ZWpxQoyHEAR7aUuXp2K8goxNEHyYbqaUPfkoii",
  "key30": "zm7112imTbYAX7i4tisBsYgod2ZDbPpSNotkVLRFAdfEeUenFjSCkpdU3HyXCfNrFjKXDibsyhLRBVyzZ7N2BS8",
  "key31": "ZzuU1ULmzFVihu3NLLMAch6h2sWCLoSbnbUHdy2BmdtNnGRa9wPwBzYtK1SqyAwRYTVytVSVHnsagDwRcftAqQf",
  "key32": "21N6fbK4gPEGuVv837pjscp9Y4tYUVMJAvTodj1PnAT4cVWoSBeVCySx9V5RQp3fyNsVvpLhBfTuk5yvibKWteuh",
  "key33": "2zHPd1Tb5YLpPFpdybXhwxKKdFaDAcfcF9xDwLyA6ovGneRdyi1aSCtdk8zjCa8ghsqC8qqS6pb7ci7XCGJTxjdG",
  "key34": "3H5EEDcbQVVAVymSYZtu1SREL4h2f74j7rfpPLFg8wteFGEgRezd2JT2aNrEhc3BDmtC1RasRuK51gv3nw7vbGhB",
  "key35": "5kWwKKPE6hHF3zPE6kWTzcfBrYirLfGP37dAZpiKBQXuFgpDDqTYRcHSBtosgdkUCmZeE6JiqVw8mq29LdwU6yxu",
  "key36": "57YQ3xaJqJewQ87fbVnVVHBvDeSChRsE2qoxBYChYGTNDT399HHcKaTgFHP3dXdiXc3aK86hQ6GUG2XjrpnKten5",
  "key37": "4DXTtxNkpnV8pNWDrLdRKUypZkqKK8VRdVF1Djur44gySudhz2774dX32ZxN4J7r6wHweyMpKbeSbgwwFY8ynboV",
  "key38": "5ttxc8aGhNH8at7GWeUASZFMAW38CSbA9teGrCTbhB9KVhZ7pT4afuvmWy4VCJgsSfYfbjyMjtZCkmaWmeb2Q661",
  "key39": "4QbMTGUqbFVzcXv3NzSj7pqspGM8A7csqNh6wWV63yAxAr1VR7NBN4qY9Bj3LVQufNquZ9tfDBnz5WGXgbtakW4k",
  "key40": "fgSVNTjY1CdJSmymR7KPNRFRs7MjTA6vYnjLALvaSYd3B64VeYJey5NJfUQqGvrSFn2t7V17pg3CnHSJfUkVKbg"
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
