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
    "4D6KzuTwAptT1669VTBGpExLnBsc45VV3mSqgv8b1BVTBuhM8zJxWyy1SCVJQPr17due97AWNxuoVvnMdMakSg3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XGHqvNtDq1BGT6eUMbjf9sJ4NJ8d4UrgT4vu2wjWhB1f4XXMg9jCHX8GHTK7eRhMvwLCNj1JhD8AvztaKGHQQad",
  "key1": "jNwdQq9M3Q8o8pHjWryGfMeHfAgrcnejHUA6GYk9BGjZu3hBUhQA1sN6Go91n84mooHRw55NzGHckGdhyQuXBL3",
  "key2": "2emzziaFvjg7BC1tHFPS6D2k9uPB3BP4vcmQbJGhtktf4y1jaXnLXDojQ2HnWd4sV9yA5LAkBAg9BEkT63LeJwXF",
  "key3": "2zDwjyiePvbEcUub6VLvSqBkxzrVXPSoG56j8eJCS6uw3n7ChvBNAmd1mkKtMX8sC8RZ5gvPhStgUe9vEHfGtBYW",
  "key4": "5ajvkJGhVjWvdeWUoS8twkFrxsHedBoAZobh7TnJQbNM3R1SskCnK4rayTdYvLb5rEsmGwjV4Byi4883SU7HBbUk",
  "key5": "2Nk5saHzQ7mDk9zub96vE8XeFWQmFwvw4WktWDcVLd66y2gehvScGCQedcQGS5cG6GjfbMAx4RiVR8DtCGAxtksR",
  "key6": "4KYooZWXTic8JNTtZ2XJFMyf715HSyEmEGq8gxTuk2f5NSjhzPVMDv3aKpyKgVUJVuVcFkW3Eik3FtWZFBg7eS1p",
  "key7": "3yN16Usjk8EV8mkryveyjt5YQhRsN1cQM3sBXDVHmA6E3XNR7cgQ6eJHkTF29vVn8b5jnbWjae2iAnACAtoKQ6RZ",
  "key8": "3xZNSNtcPx9yLczosuTW1hwRsMdttovaj4oNnrQhfEgRFWAQkxUxGbJPFQWDEsFo7Rd2bZcy8yMWSS5khr2q9F1s",
  "key9": "4Gr6tgWCSi4diuQfPn4cBJHBaHqW8MgYTNR642o3rqApn41q7LpbmuSWV6Tf9g11JbAXCvdvWm82v2hNq3ufGnw4",
  "key10": "3Zi9YHUHaALgav61kYSiwDyxkeKE2Rt3c5PCvo3M2RTpyKijTUVmwGfGeuxAbjanvjUwzftdrk9zw5PmnvwSWj8a",
  "key11": "5HpjZ3g9hKjTwdJxJQK44KWWDMDciAkk3diUMuV3mvbqBeiJB1nD1YDRXz7jRFAWFRpnqdqc5TkKjxsSKDs3vqbA",
  "key12": "4FqEBXqueVLja9K6battUHKNFsuXciMz6YBPzk77rmxTTqCRfDwFDv32bATxreG35YQF824xUzth4NoQ16k1EXSp",
  "key13": "2ynpta9pES6qwGJQkccw5PjuptFqRTFqwRz6LnZ9rMu4ZLDJRFZZ5D6xLDrJYCajfkQDSstKfezi7rfZrniz6rHM",
  "key14": "2kWUJnKiJ1xpth6JqpnxMahmurEAm3UwF4ewXEREufsGzhsMzE4TC9XFXMm8PvUrvJagmDKkRZdHJ2obFGTcBd15",
  "key15": "4LNaDbjkxc91w33yiWwydf8h7fBxUHiSqW6PbWQudxFEJmCaPoSdhW5G7XMarBjNqPS5Tro3srwbbcJDytAooBkm",
  "key16": "2dRAS6rDBDRcJBRFxwnLaT85pfZdnRFqfknSZ8HiXAGtVAsjXeG1LTkcUcaR8JM5oKZB8ME779vf7vPUubSAhCdC",
  "key17": "2zC5AQfwQFBp2Pp6zNxk4tP6GowLLKXf9znWixsr9gaXAj57fpbp4TEYdVLvGG2XvRueQ8HtrJfCsWEERNGwAyQn",
  "key18": "2vLLzDdJR6pfT8UP6W3KTfeTdf9AX6aEh3Km4UUyG66MVbbDoFRCfsxdWDvLZmkjimzm47Gy8ifB1aKpmyD7b1Yb",
  "key19": "3sn2zdM9SkuAtjtNvssJn9NH8TpCuzAJ4GheDHsCFSroNqA83YjDSrZe3CEoxPbjfM38xYk2St2vcL3z963EHtNS",
  "key20": "5Lo9nkSvdp4uJ5s9QTHErpXDqpiEVFUrciHWFRqEKitnxhwvaK8UMhUgCx548PDCFBE5oKRGHMAv8sNXCrmF8N1Z",
  "key21": "2VjkGLKP4kanxB83sPyTsY5xHZQzzDmsLJY4Mj9P2rATmHERKbW8vGWhwhVjve6zyNM3Z658PSTMcKQ9mUzG19tp",
  "key22": "4gz2odGKcrbHNpfo4ne77vQiXAkDkxzgjpDZdhYg5QgwfwhQCA5yN7qLM4v4SfBxzCBVu6cuCtpbaP2tWL8VHaAj",
  "key23": "331k75to7Kbvqc9YZUm98pcBBC4q918ZqtxhhWbpMKc4qe3qQr4ySBVb1SMJrTMcvZKnwquj9rw9zhfw5y4TQw1L",
  "key24": "2JPy9XVEM2gJUP1ipSZwJaax4rkZZz2XdATvuD5bzZS4ESs5vmFBt2toT7qFgc6XSPQ51hRRVtpxbxdewjRyn9vy",
  "key25": "61p41iJEh8KBnTphrFSSMvVHEoooJ9eN6vDddsiHrBHKZjrkRkuQca6HaATezpvdh8FivFxXkUzstkpjT7k19U6r",
  "key26": "3HpTpEiAmpcUjJUqMLVn9WQyMHkv1yLZcteAGtGtuKd5y6ooKcyjU4uBSCMCnPhhGknhWKDa3x2U5BXDrJAGWFL1",
  "key27": "hB2MTnePBy1GoLHF9W2RM8o4ALMNwrLUe2nbPxuy9tGixeZ5qgv3Aa6vCjx7ShJC1FkNUd9Hij3dousSzoHxvNQ",
  "key28": "5vkj8mFA95uZh8MDKJhYGtFx8byFBYFQSKJ3M8rU4Ae7iSfEDop8q8u1vcwDaR2hLGqR1sRNLZjJAM3iwG8d89nf",
  "key29": "4pDDncKrBTjUtpJ4GU7An2HAMRRebMuW8f2sCG2BRSxVdQHxTbibN2PE6QNSnLBu2r2236bCJxK1LWcU3AGRStXw",
  "key30": "6cuqjFTkQkK7pQ3Ba2kUyvwC1WQScSKegaLJZs2V1GwieDvhzYKA57PcBrpeSc5oCrs7hcoj1NB8AC7a38i1BTm",
  "key31": "4PeR94AeFVbTmxJh3aEZhzt4RLUqX46dyzsgF4FoSAyExw6JXV7wmQfq1YNCbhW2JfoTvhW9RETh6mmJ4agVGmXS",
  "key32": "DoEmh3oWwWVVAgPGLrY4MeSzJjQQr3E1z5JosH61zKJbnMZR2gbfpGSHPDDekJKaaxA67pb1We1FVVtYTzcHux7",
  "key33": "3AqnEPcmQnhTUFVDKWEQ7c4HVg2PC1A8mcPMrKCfAncyVnTeE3MDdsLHDLWQAAPPbSJLsvUkTPr69PDukVqSxyio",
  "key34": "4iJPizUWk7ySHUK2MY8GibFHh4siApaxHMcp62QJ8BvGK8Sv83cWHswvi3JiYeGbHzJvz5Cgqdimd4yvnh38J9vS",
  "key35": "2oHnXzxQB4phsvjR6erG1jrvssKYUbLjP5RZc3FAnVvxWHRHR1QPLh2vq5itSYEYstQTEByeRY3QjXTnsZtCVn7F",
  "key36": "65YiEojQog1p86jnYQyCSp7JGSzDdA3ZMf1HrXoNYCygk6umN5ahmAdv7nVghRSkn6SDsCncPdqMQ8qa81Q1v7jt",
  "key37": "3jM4oDLnyFco73gc6Aohh18jNg15mQuTKjcPDErwVgER1RazSqszdQkqSTo3RJRsRoDNaQLkzUUcTYNUUAueTDqX",
  "key38": "5qk2CKr82AvJ4gkQgQqDzqacE2g8RNrFF4d38vZW2GE7w9Y4E8Ds3XLwqYVsVRfvFHkTJPLLGd8CC46wEnQWiLzp",
  "key39": "3tsgE5u6iq2pyAU3ttsZ4N5HXUZrEngSycbtshYhz2SCgPDRrWu8AmMqBeCXXcvacaUSeHkkuHF7q8WzvJ6MZQRZ",
  "key40": "5wvGpT8eoXWKBrvHV62zGbsrQbyqHVac2xn95p9s4gZRzXRFeWQQu9t882bq5C9RDXjve6a3JRjzXVVdKTF4HSGZ",
  "key41": "5Avd5wSgE4zejkUAtTcNcsAuzdHrHspTnhoPzcSkQ1aJaJi59wcXKVNtK3GXTuhu9RfSyC7ftTA44f3rEZtam62q",
  "key42": "4NsKnzrHEfg4e1SCJLcv1caJoge3iKsqrAYsjVUDBLicVNDwwe1PNSHfnbzch3GKsrVq3dMBbZbKWqQg92LCXLdc",
  "key43": "22v8co7bhwthe4Pbyy2E2EcAzjVd6pRp7xRYnB82zHT8Gx5BbiEMyLmJ9QDGBGBbcovNg4HQNuYSsYzn4VseJZ6y",
  "key44": "4LSUBJPHtuc1x5McWCzRiprztdDi9dbyFaKuQkiDietN1T7MwtibpsAoFNVpMhD4r9abPyeMY8tkNf2UtePCaUFE",
  "key45": "5Wz6z6oGq3qzQUfRTErmhjndefh37uu763dRMpRUfPH89duMKW9h4nrduzxk7zLDaE4vqAJpnQ76ed4MJqznJRVf",
  "key46": "65dfyaRp8HeWPqvNYZi4eFjJD8Am683kfvvUGMAuyCUSt9NyY2SG7a2V8ivPKzj6WoAquzLKSHqhZWgTDxtbnAUJ"
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
