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
    "3Q8xsrVEc5BC8QrxYR8ZurJW9kfhtB1fqzf2kunwuwUZCQqiHyBwgSttEVmHJ4PNRmfuDFwdDA4RDJJ6sGm93dEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E6iXDhofpjFS8jaGDZ4ecof4fsKyXYA1uUra9DCtfWUmRzJAHcRTJvTVcZoRUJtWdxiYFWtX9FMNJcBqG7g11mw",
  "key1": "4cftwMoRWnUDkXtyYCcyfGpFCNMm6EYRrT2T18jHjkjpF8XTKGYuQ5e967kSQaGcj7nWTXPJ5b8RVyQKEcKQP87b",
  "key2": "33bJ11ACSZNjAZjyFEq6XXiPccX1gojNvtXufjfsG2vxLuUvHivZKnCXabA7oy1YWZQ9iWHsiT58jthcNyKmjWfd",
  "key3": "53nJFo4qpi6jyko4g2cXTgaRxVH6o99FyvgpgNfgkJd4ULTMGdXjKfWuux8YHdBUV4XtDwhrS3tNbyPza837k9Z5",
  "key4": "3uMqdxG4XkxqHhYDayYQgAp5MREVoiCdicbc8M9fDqRMko7yizuk5qbfL1pWeUJfF1VPYtbgXAqUppF9aPJLEZpF",
  "key5": "9FkaiBNw3eJa7tcybyxpfBSBpWvL44GZ8ZXAbfRrjyLZXTzoZw2425JrKfV5LF6PXF4YB1mDfhzkQyi6JobLSYj",
  "key6": "y9nvkPKfKiqqb7ZqcWDLDVkSWbRVfrq67hXBvooW8e7XqSM2bRmsfqU85NypwL91FHUafH9iE3jb78EtSudXJ4N",
  "key7": "2ooC3eEg5YSokYu2kZrRpThA2C4PEp6TFeQ7cgRsXDapZoD3mQvGgLNePHEriwPavFPUAefmFVcxVGjuEmZQ72AR",
  "key8": "4LukvqJNt6b4sfHV7E5CtWEQDvcWD9jfNzCr4HK5KpAWWY2CZm6VJNpg8XoFkoMsKUcCMa9KzByFMRpGtSH664vW",
  "key9": "26zRTPswQ5XC73KoQbKdvWC4yGdLgbKS4sC4V6WHGbkWk4uwHovestW3ZFwUYkEoA4Eatw6UNrjxwtGk198th2QB",
  "key10": "3JtF8RPrnExoZ67RVRtJVzdL5UmeHF2g8bh7A3nNWFznYz6e8kKLhjBopfBxR8JT8sgr5XaZK3P75VteKHpTWzeE",
  "key11": "265kAXUokqdXMrxCsg1o4pZvCTSWdQq28vG4hqwdcqDMWaNtGU4jJro36CfLLFLdvnmqTrULdgaBzZ6AAbqwf1bz",
  "key12": "3X8f4GsuFMUFxQQofix11kWNTMGFcJsZzxiQi1cWnquV3Tb2HVUsw6rWZjaBJEaY5UF7hatBLmnXwjG6fJpSpg5W",
  "key13": "2qfYkWKeUJXaQREjuAPH5rsEfFCQDvxjrsT6FaTtJtr6xrMbq3Nz5UqxK7uKp7ZbiyFF7cLLkSqgWgw6Am5Yax16",
  "key14": "4jFMyQkBimGZZ5MbbGvSRtEEvbXyMcPFJgN9u6CHNkcHxc31shmxTSjsXnQHkhLwPTixVYdFStrs1wjEyStGZaej",
  "key15": "4KnQKVmnSnuPPyQKuwxg63yu9cDpGkzSYsiuDbSCRuwFBT9h4GMGae79REvkm1no2PFuQDwDerQYPkdUtSmEgiWd",
  "key16": "5vcyTL9rD8UMWeYHDow7XBB9PmdzAphjduZZ5Z2sWxyZdfGCQeQ9MBYGpx7uasuLE1Yaey7B8SQX1u57pYDbKpSP",
  "key17": "h7X4yM3paqwiDjWzWbXgZgPP7bUmLgTMY2qhjPWGAREVjyw9RTgzEftMdzCt74MRpjUkiw4HyLBxh74iCuZ5yRf",
  "key18": "4A4hXz9gsDnZH15zb585fQXB9vktF3pG9hhz5R4MqZyKdXMVry7XEyovvnjuVi9o1kj7P1rXFE4z6ZbMWnkhDSge",
  "key19": "3RS5XDbKfrrNzxGvGfxf5ocvGM4zHVDP7HekpkzXkwJYLdYCpnMbMcEJLrSkfSS8sD6ZygAxV7vjKhp6etnU9Wjp",
  "key20": "3LucimCCCF18s1FPFMSNbbKd3gnRhZiiMpbgeRejjczEg7U6wL4YcCSPQF9n57sqj4NqE6qfDKZSnEcJAjxh1fdH",
  "key21": "3Ek5cbsxYVUGnpYbn1gnVJe11bX4YkSnrnEXYLnzFQfsbNEGL75Q8BszFwrUrQVN6EB1u18MCD7MJikT5KvYSkk8",
  "key22": "3gspbR9XP7mPGJRb6rrq97xTFbP8LUwq1zauSFRzjTsS4AamWHAqWdZr2mixWVuQcMT8WJrXaQ5YWiXwfko7aLYL",
  "key23": "4J1TBbhEJPHFvDoFfJzhc5FR97Zf5ZL93wPYzazasAc9iuzcJHwmpdH6VmPeMhcLVU37mLLXW932CetugmWXEpvs",
  "key24": "3Pr68oYWT985KQo5VaayCGnetNGwRwvn9MNtT22hoZr4xGpYNvW4wkmNZMUL8tU2DJNbEoy9xoCsQu43qLUjEiAf",
  "key25": "2ebHyiFC7iNcA7g5irVc9NYvgrx48TwwwofW6wfz97iVVh5i3kFTEgz9KEajubY7kKpmg99E3FGkQesibvSMdZFV",
  "key26": "2XR1v97ZxJ7jYcYpBbnFMVKJMBiaUQNrTTfPYDYuuuhkc2zC9QbGtTWMudZaHdZ3yyYK66r2wptQeVdTcaDpjScv",
  "key27": "4AYkNmsLTB8Yf7Tt6sQ2rXBdeAAdnDCBcT8D185oMYEmyEcs1QqhHdMk3EE529e3Nh6NotSzoP9c2BGe4WmKNsTr",
  "key28": "23gwxJHKGyRvq6TktXd3uHpYNFp24Tjj5Mgi73qg96hiQ7cbC2axuxTFeFGTREWn3ssp7oQXE4obMnVTtqUiDy2Z",
  "key29": "3jtU9NoEcCWy7vjHC8ksxr8qozgLeaciwv4sy94oXjSbtvh19SUMBJEZ6eabvuvwkjsej5zKJEhnS8QXg12kkigi",
  "key30": "34Du7kjLrxJMiBR3ZFxZRHgZ13TvANwq9bbDy3SS8Kn5ULZ6XcA98hYzGyyd67HRp8dfYQQg8jNH8WC11GfgHeBT",
  "key31": "28F9Ya3AtntjuevpYS1YUtxYB4wTnKjQXKhyJ4ysighD8mvcu7D2h4az4p5gqWncpNncJ6fhm23FNEUaymbU9uCh",
  "key32": "3Pe5JpVRQBTP8uqTzSuL7fouD3hrZQmPRiVP57KUyVXozXLTWkfuJkdgdVJ6bSQh5mqxhxQnBWoMUJAATrZ56xVd",
  "key33": "4oPCWR1fRaDTKWxjRXhhrEkBWvxtuBP79amrnmMSAtqMkenyUazvvs72jMfrQTJ9hrqGbbwZXybh2Y23a9f4sPLp",
  "key34": "4WuJgyENQYyCbvDN3ndjbPgoXAzhC7cU34pNp1kDB9DyYi4FzZesG57hnyHcWDkYbfWHMEuHubLuGhQFwU2cPy7e",
  "key35": "4H8xmX9uj5GL4sQAc6A9oFfG6p6fhQrzpm9ZJMiMpWkNHcAv6JEJEbwxEaEWDqVQUqVfTW6FjqLoN63pHpQBcgwx",
  "key36": "5rMm9KWCTYtm4SoRFrnFuY4gM2vyteDBNicTktXRh6DqGXqyqtDfv8ksCTWKRpN4RkNrVgk69KNQ8p8cfZG1yePj",
  "key37": "3oHY5wTh9fvnsMeMCRJD5P5YBxrxdSdvpPewdkoMnmUwvYo3AEjZyJzab2eTrRbnekeEnZLKJAKMD77afmTAQwcu",
  "key38": "2XNJnFHWKS1CyanT3SjkvJtgNhoB9sm7QmsSaUPkXhhsdiMGNcu2SRRaHDzMPnPv8ib5WPRqfJnNX1weuMrPcwXJ",
  "key39": "5PLrYtM3R1jn97Ehe1aqw5byyUxC7QsdjD5F2mu6RxBqGsPnKAHQ5LnaYpQykPYLymfem3FXXa4pzi75MX8ST8Aq"
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
