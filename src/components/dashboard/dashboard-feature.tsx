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
    "5g3qtJsJdci6YYCQFVsW82EUybTM3HLVBuS58cyMYtqrPgCvsYw4d7vAdBQNJkVsgdkf4M37xPv19k6r1AyjZu6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Um4u2oWmghougt4QpX5xnGv3aQg99T4YXrNHoYUV3xAzTcs4D4VL5Do7fTxC5TKeSzoHv4e48vDSxKsVX1ge8H",
  "key1": "5jZYwFVtazG5xDrSqh1umATH3GU8KkEn38pL8FyH1kfrzg6fe4mRZadJuf3qL486Z5oaEmFpWdf38qdvUZMf7mzp",
  "key2": "3twxZPBphnK634RKBCG8oBE77LHExgt6Lta3ihQcmmn8j76kznawMd1R1aSW2WqBK8VA1KQos7Utz2ETivLxkAPm",
  "key3": "4EuiuKfr9ZCJNSHzChLdbPgvoHYGxwHD9d2DQi3ziYXdSWU46yxRsnz4bG4kJ6hy6PoNEMCamtNTmpwYrzbnVKKw",
  "key4": "4jvFdRBUynMe2mDCHCzXhzM6kaCZnGwhYPvCZupNJwpZzc9uZcgFWvWPf5pNJkm46aLUrjwsyajB6LsjzE3ouDCi",
  "key5": "5HwRg8c87oCijH7o3Gg2UzQ7M96rjpCQKeXUNMenawDb5Zd1T92K3Cerx1eUDAtZsneWthEriPsM2oc5vhT4op2x",
  "key6": "EidFqCNLCw45gvK42rDTUhycsGr6Rp4G9RSrBFfZb8dyiZJD8BGAqFPhmpWF2ZstC4mJ2PRbiACkzXMFLG872sX",
  "key7": "9z9TudxpcBBAmRC8qEVddVnjzzEf18ZpMnABdZ2DycaQaCMDhv3m13g6bo3X821LukFvEznttZhxuWqiSPdGStQ",
  "key8": "2L3n77Fe6Nx6ffZu1Pe56pViw8wmUL52sLffQdwYYKuxKM7pWip1KS8xZETfW4Njk3sjg5w51B7RTG1FCwP3NMaE",
  "key9": "3Djd2BKQt4dHL8cGUvmQYvDaWqipB5wVR8haVZujAUFdiZQsoTPu86ZA91EWxiLdUZPRbo4b2QFsU7tig5r19a6H",
  "key10": "2uqgwhL8YNNcjsjZ7yHip5cGH1t5kHDWzAztphvwmrPfdNbeaUT2AfBdgo5ySQtsTV5ToVGW15AuWSSUHSknc7qN",
  "key11": "t8QHguoKNqNVLwak9fefDmyLMSbTAMV94c7RApCBfs9uZQuAt1sD1cGg46YF9Cq3jJiE41kUJQdvF5d8Q3Wmohj",
  "key12": "23c9bDqLKtjprirQEFCmhB813MF1nJSatoDpLDwS2sV8GSn2PoYq1ZKzQYN4HSM7ckAQm1dDKzhSsrMiXGEQWNFQ",
  "key13": "3WtSMynC6SGZ7aQLQCerQ4JN3vEhD5di5kVtDCTjWKJqm5v2ZZsMR32qWtE3hoLwqehQGiuaJvoB4oTwPDNhhaQi",
  "key14": "5y35euxFNDFaFRCohm2FZKPhMTTm8LguDbQfwUbeodMyoPgfiynE3m4JL7CYagmAwdQEUTAPQK5CS9JhfQgbbqyp",
  "key15": "2GTzouRs8m6zRw7YZm2LSa8tEwHpQMDrJZoJAkf9xCLoYMqN5gULWzV5eUXCqDXzeDomqG7K3aN4mSimyZtPi81o",
  "key16": "61BoYK5JqdVVdroFdgBjr6zp1amxLagaVTc1GmrKA7S59YLjsCQVYmnqJYWNtNYV1UqBxwJChw7ZxDk5nqXSLUs5",
  "key17": "2CeYeiUGhScU8VgkskoptvQirMb5eBUT4rVf3CVqTvkMuRa973jjc6K3mTHMsaqGbCU4utAnxAoiLS6aMVYAkxME",
  "key18": "2gx1LMm9gooYuXejmgkDMmeosVs5YtpWsj8m5p5xXcih4kw8xJjQQpQiD3gdqzLr7SMyzZKDGpYF8c5h2CnoahWv",
  "key19": "2tXnMkniKDKocmf7K5ybHkxdXCjAe8bmaQbSJWRKNkbNoEWzajMfYEYJhb17uuTZVXTNxvu1G8TGEwVSyoZeyae8",
  "key20": "togtLeHSRNU1L6zgg4qMdvk94HAWzETk3tRTX8KFCP6MapU6qrsVHrgpFtjfY2WmJ3dkMQ4sxzj7L4ny9afb9ma",
  "key21": "5xmN9suMvC17e5LXXH5rrr9XT9wZX9Vf9tB6W693mXqRPJF4Wek2n9bcxE94nk9jJy4wTUatudhZ9VwWqvByPcgb",
  "key22": "7UCytZx3AEtYGs7ymZMKHcguwV2w8ZRtJgt9EFBBhTnszPSMiHuuqGLhwwEysJAJ658ZU8i1R2pm74NtVrXdaks",
  "key23": "3eFPAQo9ERaydq4Vw2EvRVEkA3mJbupdL5gjdbhstyEvaRujg9pytmNn2GyH9ThH7SiorVGtBnF9wrz5mK9VnzWM",
  "key24": "5EaswonS4EsEd5drGqdMx384Pm9dFNwfvnaSfkUbFemfqKZoUvxAqB3tCFRWvXm248nz4haE6dQ64MnAMVucisCW",
  "key25": "5WDqZKB9mFgNWtCcnWMNaE944gRBUtjPsZTRGjDqdDBymv42wC4MMqhwowCtbg6MbCeddYxdSXf63dVvEnocBi66",
  "key26": "3biKcawJf69H6G6rx3BK4zgCdxKBXWz66SBtVq85UvBE5wXrGiQET9DWpAaYtRNGkZpqwJynvaTBrWUvomzVsQtx",
  "key27": "52EHmZdsoRQyGEJtRKA67tSRWN4vMj6SxQVGzM7Em5QpwHNau532qC3yT2Tgj43ZQNZCDnviQXqMyv8c4NfCzkuB",
  "key28": "451w3LYj2sGgYGgwESKsuJ3U8DeaGQPvWz6ppZHWjMELqv2vmUynAbPvCCVC43h4kHkGk4oedCjM3uKGEUxNcVQo",
  "key29": "62Qeq8wAiWDW5Acz8D4ZRYkXtqKtipKN5ce3xqBwYfVy1yyM6so5R5s3AweyurJrTQ48BWAhhjJbnuFM1WRvTqy6",
  "key30": "4nvWV66KaU7UwVq1z2iNQ22F3cfn1TRQTU96aHsN7hYRXCoWyjo5WcnkEtc7P15tAsNj4TA1BkbnPGnz3o7it1BZ",
  "key31": "3grGtZiSv9obgjHZnM8BMgTKsdJzADbCVg7PoCWawJYNczy8PZXyTxoxCXtqCTEqvt1J683vbBuKW4tU671LXErP",
  "key32": "NhmR7gYw584ki2LF5Wi9oVUYtYU1qgr1fACqhnpDFKs2cv4grLrfwuV4rYYGBr2rRVYDhhfkr3bzr7ksV1hk8uw",
  "key33": "3zhP6ZL5CqjegmZE17if3C58vEX1GYczbhp6wg2VCfKfoxnwLmcPe3jZnHZLak9Z6XT7vYptbbKcSKTdX4MGY1NF",
  "key34": "5i5AadK2dp3MVh3qAPQegHE5BJQs6F21N7PuRgZudsX5a6w9hYCLcimYF6SWzLpuFGc8NXxgR5HL7BL212h1sGZi",
  "key35": "3XwgngQRE1rSDhNYYdcg61dKW59umdokwbzBYMawhDxnjGpYSb6evn5jsGzksFiBddv4Tuqh5dipsHWvayN6DMuK",
  "key36": "4dWn6HZXC8aR8De1FtUoS63FQzYURhp98GpxwAppqGgea2w1fXATg6cAeFTV13Gt6okvbNV6Z3BgYNPkZWjr8HAj",
  "key37": "53KS7nkhHScCvjP8Wsrvc7WQjFAziopuPEQjYLzqpHDABkthMaVUnpwidxh3ScWXuUuqfNPcKr84wij9doh32WCQ",
  "key38": "nP4mKa71zGvZPbLgJJ95TXRnCzfdkZ4MewiTSunnCtKNnccFDxAFEDdFtz7jXec4UMB11KbdzNoSKY6X3pMRS5r",
  "key39": "8fH7ojKQ6PpuM7tnjkgSnKFBqRDbGtzZb8nHoVvWJhV3CH7s8WegqFuFKWKW2kWuZF4t5pyqBZToibjS6fUvdx6",
  "key40": "2buUArYT48gSAirSaG2CcJiDo77JvoV7dKBubko6VAosDPc6AD4C3YJYtJLm8bECLiHcbY2E1jvR9mHZ9PS7Jnsz",
  "key41": "4HQoe4AdoXREmYoMkj2i2fivq5WqXMEuRu1Z4PRjSeeULM2hV2kDBdaLCwWyMkVGJ36eNEm3tuBm5UaQLi8FTjxd",
  "key42": "2PHFXhT2YgBbMqCnecA5BYWw9AXfTKgmf7GoJmgKNAsS55WtHkbTGrzUTLEBdYC41btwZpCSh7XFULGWxFZrE1e5",
  "key43": "3jgJ8W2tCTrPBksAYLgxKtGBUf7SGhCaq3HX8dXonLAMWfNg28BZR1Aq96rE824Yu3tudnSSyE5Dco7cDHNjXdSV",
  "key44": "3QqEFWaQJdAqCod4kxvGMRgWycxfbBFKCzM1Say3LxJUCFeXmtP3ovcZRwauJhtpvYcSQ7LRy2S5g6s8ZzB65Jkt",
  "key45": "3skL9iWiXaZUgEyjrMGboDB8Uf6sVGuseQXqAxU4GYvxBqG8b4erPdVVXwRGJVS5BibWDm8x2L8pqpcZ2h6HDbgQ"
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
