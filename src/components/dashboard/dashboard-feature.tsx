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
    "65LfTTqbPAGrFGBLwgfFwJ9Hikug685LiudMmzgnBYWidWXnxgq8dQHbaDQZgNfu82YDfYeWDfmMSGvzyxt3yfXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YEDiBoootEhkXnA5GqgveMMBdxcKq65NmPM1YatFyWC9QaE4e8Z2dz2dqWfZbHj2jEm4dcVwkom5k4aM2iVDpW6",
  "key1": "4n8pxFDrEwsVcFWvtXmKnHW2pXPftefRtuNLcz1iMrHVMd6U2jbf2w4D43nfdeshXi156GX35yT4W1aCbptQZqaW",
  "key2": "5tX3fr929Qkm7C8MwoTQo2XgVTqbHo9CXUP87TdW26aw7QdiNR9UUy3Y8DNwfVL14jJi4RN59wt3hJSPABhJWBEi",
  "key3": "VgZuthTCGe93qS26ZSPQQ7uU18Q6V44XqScB12TQtGGMxSDNALrCXKmF1i1R2gTbNf7rUiRkQDaRUP2NNc4epHj",
  "key4": "47Eq3uJKv9VDmgdLBgZw8BdMPbXh8wHTzmnSUoMGweBve3idAdphf46VNhRDsG1YaBCvURmM2dSQXFBm4oVRguP2",
  "key5": "4VKwQFvhG8UxmMsSuFShBDeC7HVEo9CPCoDRCJuUQXYdYX9bbYN3qBrxXTYYsGTF626KnN73HzgAUWWzaPJkkPL9",
  "key6": "2towimmsooSKkWTpWMYfNruqXv8KYopcWQNsh9SFvXqWenKH6tQQYuDiYhejYLUiwHJYsa9Dx7fTvGjo8mCypqqV",
  "key7": "4juW3ZvMHhKw5dTwqHgNyoDRXobXCkytLLZis233nNfzHtrw31cPTJyqnc8jopNCZKUjSrPtorZFEfmqZyprmnYs",
  "key8": "27bzPx6JYAX2AJYsRZTrsgS15vQJ61DsJypNfUuvm1jJTD1CeLWEvvctGaxq7uX97qNeJAJBhd69SKrY59jpoYFE",
  "key9": "2Lp2FHBe1V9tHE6Tbtpnycs9ZY3TBPr7eexFsih1Ejtjc4ueQ5Xkndx1GAUCTwJML4Z3RGV9MfkUGRTTTce13abQ",
  "key10": "2pkeWmHNA896jMTjo7iw2h4RAGg6Ub83bPQ4pWVYijJKtNbNnnbypc6UkWeBfKMuVKxrsXtwvxJyJGqQ9oVYHcB4",
  "key11": "5Fvd12G5Vj5HWnsiUzhSncSiVfVg1xZPtS1T8K5kYDpCG2ZrtS5ZZaKJxyWtn1YVT9wmBeapYuRYwMNM5Jp6FgwB",
  "key12": "B6d73vwBbUAeypaVJyPF2WqxnqRuDnc3VDnJxooU6bbHTnFULEyhwjSzXUQ2fPsxfjNUqGrRaJiJAUnRUAWNYNc",
  "key13": "3MEd2iDa7U96sy5qXKE54Umxc6jGK4GuCEh8anJkDbozyeauUd9RYuANGHH4vmAL6uiyN7LHsJYjXPbxnQntaKuY",
  "key14": "D5j3rQtkW43dyZ3XZgejdgTFsmrnzkkGDiXNem5nohGcBzmKwViS4ZXhtz6xzWvEnVDSgVMsrnXxQdnjbkNCZUE",
  "key15": "4fqSoLpJRRNtP3xz7UAwjL6cfVQ9o5bLWwQvv8ct4PPj8JHBmS321xroWPenfLZ2R8LqxPcEaNuF1PRZZbp389Hk",
  "key16": "64PV3g1YsCc6z3KsrrKPWfoBwx2xwAc1DqzLUhDYw9WNvkDnLm7UzLmDN4k2H32j6oEqnJJFVP7iLCm9BNyB1JRY",
  "key17": "5i1Zf7aoUdKQK5YMMCZL5fnRTbs3y69rBQqK1519pYbmdkgF5wWtX7KnWVgWfC6xGCvfDtd9bkGWVJaa2oKxi2MK",
  "key18": "k4CJb8EgJBBh6zUiwy8jTctM5sWGTnSUqpRD5hTZSmxPV3U2vFzE3hVR6toHaiaW66zMWfr2JBx7dhhmPwvtVBc",
  "key19": "65bMRM34LsFc35bPFSxKcH2kHuPgc5KVYzVia8VQzkfXQLkec1PuiPtMFYMBwoG8STVadEhKz7inFpcaoB734DvG",
  "key20": "5Sc5z8jCgnkjYtiG7AemmkwoLpVsVjnGKE9PENHGBrLRHFAoGJcKw5Ucb1Tyu85jfhjiCXoz1S49hctySxJKkL46",
  "key21": "45tnY8wkAuwYxrB843EBSS34h8STLSC4ZGUaWRMfneQoB9JBC6179aKh8U1FRSy6a8uM4XGN4Mpz6xWj6tdmjjLW",
  "key22": "4TdPYCrrBWF1Z7mBwdS2UUuhG5s6ijYqMjV97MzgYwanvgA7Yd7pmgzEUyiH1ZnXhVNPQREWJfqgA2H56mQcesQ1",
  "key23": "L7e8fdFmkh7nVrKwmZCG2mZUoBF7zMdj2mBjA2594zM9RTCF4dpuQXRKDXDetegHgLUhrDhDxe779x3V1zQ29d1",
  "key24": "2uZy1yduwmXXyXQFck2QBMmAUTpLqe2FqBvzZPmusrKBpFeiKHchG7DwEYmKmugyT6NAtwAMcawsoBDtgF9wmKxv",
  "key25": "3mbFvzFGQSQJULakY9SezaQGZkj8hZXKMBe4bTHi2udeJ4ttCymVJHMTrKZEhmwXMnrEiVMvhsEqXC2bJVn2AyAQ",
  "key26": "bTAZEPMbHXb3L9nrwSoQrfLfL8Q1dvJC3TEKCWsTdcKPTQjBdNkkFDgzVK3RQtvitczZSJ4Qnr9k8XdQS7uv7ow",
  "key27": "bzJbxj4pSezgixaJn7ePQubcxGD2xHvT3pPYcR3yKPnCHtCS3rAKeNVnvagz4tc5y4LGy4YBb1KoYvoCHSti5yQ",
  "key28": "5nfbBPmhBHrdsSamt9EtnmgsVEr4VeMMh48S9mv2gj7cxuovZQfq1NnBUfpkiECTUbsXuuMj3NbbFoXzvknBAud5",
  "key29": "2MBqcLdDfQR3ABqVvWXbcz9TujRD8B2cct1vjq7jkEtnY4z5i6qB4e9udVFSo5XRqjmKV8t9mAhU94WKiNV5rZwj",
  "key30": "3hBukw79zmZ9UTsvWxStiRH6dbRdufoHdeKhR6eP6yb4he1gKpmBwB7pqKqWXtWAcmEM3wkGJWjwMaYZZVPo4z3z",
  "key31": "4tFz2EbizCSSspJp9YDvbMnHi2XBmaosx8VSGzLkAXqqGUcM82bbJ1DAZG8kkLJqTYgivddcY18FWpupnsNZZQ7Y",
  "key32": "58bvQDm1mP7Z1XZ9VEjCvspXPgQU5Erzp4Q9LEYyjUmzNA1uj7ktM7NgfyUFbK1fXhudNmGbyNJJwfYTQct8t9uh",
  "key33": "3skiCptZcwbaqRwy1S31MvPXXK7Ek8tUjtM7gweAvvQoB69ZuAbWMbvHKXtVZPwhAU4rV7TRt8qixcz8DHNdZvZm",
  "key34": "4BZZMedQRiDbFpLtpaosJaTMmWzW3Bqn84nCqxtmrDWUJzxh3WMsZHgu6UcrThA5kXyk9zD6cMsWXGqSMLNoNpNe"
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
