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
    "3h3p1crJ9MK4NR3gsmSDDzVd9MzK8whgkeKf1swszMgVaDYcbBy4vnuLikQLyKXut1N9Y7cLQzgbaVqLzU1xhzed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HqrNu4PqgSi225mim1CjzHt9JRmv8XEMtdrC1eWzRDWkH48bRFhTnN52xhAtQNiJt5S8yxcBbhy9PEGNnD4BMYH",
  "key1": "3cDeP9CRRN4gvTHx4LQaefdZn1CUwYRLZAt5tyqFJQYVw93FH1UsygVhiGQfGqzmX86S4QvZ481Apjcu1ae8Jn9i",
  "key2": "VBSKu3dmb6rUr7Ruj5C9gCrvn9VVbm645nti57wMA6D6s2dWHZjMXGnnpuccS6X9fofHMNxseeT2KaNDiRLJUzs",
  "key3": "3oq2STxQ6wAoZVcm9FwHwkLa6sR7Qr8pXbpPsQiL26vnmZh93RfxWTdH3ABPiGkgWifPXdnaAcTTT99Z6xJQg7QS",
  "key4": "3bJiBDNWrS2nML5X6nXXFFUdoUQWCRAHmLtssd4azUMDz5kPs9DDnXcHdonJVaEifLvwpViUBsX3tSyLMWoUpifE",
  "key5": "4i9rhtPhbKfpZXVSspevyda15JzfceqwswQiugZU16L12MJakjJ6Bz4XzNe2u5n78hqaJSCT1ivPB2VmMPvZLABu",
  "key6": "2ZSnWsyD1KDRZTngMp6DCvnUiTfnSGE9Nw5kbzk9Mu57RWkMj5iXSdAUSLiEr5bCMpoQj85N3SaS84XHEweR3242",
  "key7": "5Bort1riEq3k1qHt2NEtWmkrzdBYCS4YtUENpZhoYDpkR7kJwAhWDSMirqLrHkxyuZ9jMT582YYLKSH6c6K7q7Hz",
  "key8": "3k8chZbKGRoxoMGvy3Py7pxrHzjLoseGSHF5TijAD1n82hbUkCDioK3PqygbqEN1gLpB58Bo8Y4njAzxKqrYQUtq",
  "key9": "4bbHBrfwFmfxn13UD4H2ggBjMvVG88LFfB2umTj6t58VPn9gsYAcivMuUHdnwUahXexeAMTSVuonSeKyuQmx1b5B",
  "key10": "3V28kB5xxPEmLqnN2DHKCSmVqcwHfTP77E8FKu1dBwyZ8PxZqJuT2DhEEMRYEcxtpodSh6mEprzebtFCVCT4A4Co",
  "key11": "NBobmgpkTMwgwftz8FkiRQSghk42Ev4yNwiz3rMYxoDuogfFTqRy14wQWUn9C5YcdU8Rh7EwbQPqFbzPkm4JXAd",
  "key12": "5DLPNJqDFc4x54KN9Jn4Rp6C8Nub4YFKf4QXAji5gQTi575TBTSo63LtSGQrNWnhYyY7WfzrEkYJVPj17MEFRco3",
  "key13": "2XwUsGK147qtnw9EN6DnB3czicsXqF24qj2h652Xp6RABtmHZEUxQkjuGAti6QYJrSpSSxTSYCsbCYu8HkaXHHbo",
  "key14": "2mMnLGjMGL1xfuJ5rQDh3UE55aWxnU3Cjpdh6YJMrTETNzh71FrSvb9x3ZQX9fakqiTEDd1XXEuwWH5ye6PYZmZR",
  "key15": "va9mAmfV9eq1h54pywbV8isRqq3wpJ9uJVmL61isK54oA8GC4NwTayWXPxfaLX6d7oZX9RGLhYemfGVZFLaoiC6",
  "key16": "3Z1AqHg32R6GVHHWrHW5VGJLgGUzJnVphdD6cc8zfvcUNb3ND19HZxHGGAq6aaMKjmQPXMB7sgvZKGKBthvSxXBc",
  "key17": "4Vhuh3UryLjAa6ifTThpH5civ7Xn8YC3CXehHCLBqRw5JT9uWA2kdXTHKq8mgP67oXboJ5oZFeR3H1tLvMDrFpg2",
  "key18": "27rbuQ528TFEsUvPXBDhzHpyD1n7WrVKM2N5dzdyFqaqkCaXkLQkJJ7WR9MzMvAXcCTuNsJpSw7bqUwVyFPwqYqk",
  "key19": "4iyBkpxy1T3PRzoy184YygDDcWycpwHhbTF8CcucXLzqVH4RE69uFvJKThy9MsuTBWct2y3y14UqFK2jDFTsNG8n",
  "key20": "JRXJovqz1Bx8L7NRbeRwEYE9AizcG1rLBvKfWzmGnHEiDpVNcYVx4HKBYVhh2a7PwcrX9VzPW1AaMNmiwu1vHTu",
  "key21": "3FrKgLAZ1rK1oKt5hLuK5becUdRdQhCHmom2DzxtVLcQZAphp7cuUEWm11eKpPD25GHU9MyN7qjno3WAtHDmRWEe",
  "key22": "yrHRRuRJxGmPd1GekWjvAsXbfRvemjWLtmpAoKsVfKz4k7yjnUUDM7isHj8k5TQPy8jCKyiqUqt2KdyGRHMTmP5",
  "key23": "5bLyHLwar4JYuvJZCndVeVxguDB8aV8JwBfgffjiJNWg8bEP75FDhC5XWQvy5KFMrDqxo8YLxjwXMyEfeXJAVhXK",
  "key24": "54bdo7CzwRpkBMnUfzy2SvJkP1CidL2YfDggHc9w84ZLEDKc5pm65bjxAcyMhiwHDYJDLaQtqFJgjAso5R5MeC5C",
  "key25": "3J5ch4UBeqwDgP957LF65XAcpPM3GGXMTef7rx9g5oSA6fxAEJkJwGJFNnXfyWd9QXgg2FH4fyPeTDw9NPxuFXRy",
  "key26": "4c6eqG4H1gzL4WP3Fhuf9adJLQ73bdedBRNnrNxicqWHDD67qaTM6K5Pmb391fobjMJL2KXaivMaiRvRnobGL32S",
  "key27": "2wf15SLKJWjN2qUR2UKYeGnNzXe6vs3ueXfQSZNKEdBMTeCjvbEDpiNfHbik92bKju3TqZKRWfjTfy9DtqhxcqPK",
  "key28": "5V6jLuXPzYUsrGnwrKTob931rL6LpZFum7FWoQwEwvE2QdDVjLs8yGiEAqJxWJc1zfMPriubkCVmG4zTpRSL2cT1",
  "key29": "434XyFvaWanoWQ3gLbQvaT7ZSWGUK93BFcXt5Yso5WZTvEMcgFdcttZzztPUNy15w8GGaVxHXXLzjjZvjoEAf1Kq",
  "key30": "27LfZ8bemnfztBdo27cWWtB7e4PAvdYXQ1aXqr8UvmQM4xq1v72geALBu5v99EEQjFtMYPHHDW6iit8RiGwyah5W",
  "key31": "djRhXvf2JN4FQu2Z2ehv4ztdEkGNM6sBxNYergfLt6Adm19aqWPjz3Q7g7BjFK2PERmTnEsffr4MhipNsgz54uo",
  "key32": "3akkvyX2D3HrvbFLWeyY6uUognHEr8E6YipFYHhDeNiUpCRd3dcS2ntUYa6TMa3YdZqpVCUjYb5A255y1NUNBwW6",
  "key33": "42g9YnCHvuWqBFYej8rnFPdfKykY1hTsACBx3YgtqY5UWK9M1RYTPY63MhLqSE9Yebgndoo6oyPaZ4Z6JcpyEEpz",
  "key34": "2TPtJE8wv4RSQBKeUe34U7A8NbAKpqKt6Wa1bmfovS6fGg717LVPZBj78Gy4WXk8MFGrgtvumNjBVLhUWGCR9oz6",
  "key35": "3Nu1cQ3N3diZ1CdRyNY2nfaAtit3mWcs4u3T6dWMbCTJYpMs6kx9RznsNH4K4wrneiRpEuFZQXscHKomYsjhbH9z",
  "key36": "2Uqjk7uGUvKr1B5QQtwQVqyjgedy5ijuX4UGLCwuyUadXTjRDHwNz4QvVCkEbwF9yPdeg8S6RV5giRgZEndV34ds",
  "key37": "2DVffFw3x9U9LupjtfRd6hTCC2STHJWoJ9fwtJ92FMyBM7vxt1UXJQDqsMyjbR6QfqbYEWv9G67fX4as4v5daLVZ",
  "key38": "3eA2ufQnwgkgvXPdSiU4gtAQ8FJAMqzq1iGVuCt5Qb4xyjAY6iDcexwDiFLroG5awfzj2f48KjxW3Qwqx6Nr7F2n",
  "key39": "5Ht56nzLkEFD5c2wfQGgDjb5u1fhfqxhMMKKidd9mxDaqEkT6KZBjKr3aCKFdYL5RkyuG27zHZtJZ6vPRDi4u8oo",
  "key40": "bqk2e4XSxXHEY2JXBkxV49PooLHokTJALPrMZ5ZzccskD2uYfrePVBQzHmd12Bp9PTz9x4eXtxtkVU5rwCVxiza",
  "key41": "44RiTu9YL5aE8zigHmerG4RrjDpA2TXyph1Tsavb1NPea9wtacV3MaCWY6E6ST6sYY3nHMHSjb55KaZ1Ssae1wE3",
  "key42": "2j3NqHtMWeVseBcnvN2xy1aKKrhVbQRNFhfWVT8FBexR1pPAPRfQFwWGYdv5tFoZThhqUusLVzBHM4r7KzcEsoYr",
  "key43": "2Z4x71XrZJimrVApSypY2pDyQGK3Vabe8TNGJSZNtUQiNwAhF41M3gdaoMHgoL4LonsbVmSe6uH1CgEWizwD2UVE",
  "key44": "32gH2qZSEYNPA3vffxdqrLCK63mJu4K6xCuF5TZowh8ZNHrmCtA13ngV19TF8f5ywMrxUye8nstdFXXWFhf6iJ5k",
  "key45": "36WSx2sf3DSQikVAuKHQPHrT6Dh7PAdm3fvhKcgsbz8DZs7KKDcpwe61gAHxiAHKTLRkDVYzRA75CtWnM83szCtS",
  "key46": "41EWP835xZeMPeyRy85JTdRj7dXq5sxxxeaejb329oBSVXQykEdJQPf7ZNj6HLn9THMH6bUNmmXz2K1Zv33DK6yg",
  "key47": "2pzeYqWsmk8SiZYXBemq8iFR2pQy6xCDx2duUbiCKnghsb7GU7gqkeHky9VnFZU1WAFmCyN9aSRVRY8TUQFeTKUU"
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
