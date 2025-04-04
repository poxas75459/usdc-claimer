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
    "3WBYqtp1yd7cZL61rXea2yh2cKjGVPGQore1Qv7qfugLjsUWEbeEasbZc5P9bBdE5JwU7RvzMWVxKuj2EE2VVmDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bJHdWmCzZNUwuNQ84EELxAW6AXKaqdNutUMhhA6xcTEyt8X542B2sTFwWPZjqv8JohsaSMZbY5saYbW9zmoLQoY",
  "key1": "48eQCgv7oagupfaS7wvb8oS3q2kFia6UxDP3HR6f3twncTgyRtYfnKBaa1FAka84e9SBWsK8paErjyeHTct2M5f7",
  "key2": "5uz3nR7aMnnv25bGcaLKnmRHj6spy9Bg2X6oVqmSS76BSjEL5v4Hk3fdpktgEt5SuKLjyTvig4tCSbCgTSp4LmQi",
  "key3": "5Z3m3dAr6UXSuWbTcnhJuamHzFcE1ksvCFH4NBxGFVkE3uZiPgAygSsR7Ew5R9JByX1VdKK5M1L4ytouP8CpWfK",
  "key4": "4b6xVB9Hj1n29AFQWoTxuVoR8QkJ8TbEij1wGdb2nu9vExHnxStoibvjczWQzysi7s3xLMdxS5CB7BdRRGC48umW",
  "key5": "3bW3bHbnRtAgxYDeLYKjyLxrdVMEKHxnvV7ymBGVnb1DMgKftHTEBj444tLRsW8CCgoNbYS8g7gvAe4RSPDUnZFa",
  "key6": "3fiaeVjEPFcHLxcQt5urCW7Ygbb799MStCuXScgHKdzU2ivpYQNxsUDQ6KxVhCKPqQPByCRqoXVHFuEwmEyMgReg",
  "key7": "2qDiL2sup4hc4vivwntp5rovAiBYDvDBG7LiSceZCE4iMYS77dbogh8r7FZo4wJfnNxseqirdZy49YZ9djRmMLGs",
  "key8": "3J9k3p5cUGk1p3W7fjNdwXG8sbbUC9qNeUvaS8k7KSJ9Np55LNLEp5UyyzzNfGZbharaVgmKobmv2oafxDxyBTvZ",
  "key9": "vN8DWH7xwudUH3KtXTwffec2S9S9dze5dPmarz2EjAZezEVAC6SiF7rBEdzM5LCvtvoiakJbVZXEShuJdrfDs1Q",
  "key10": "3bC7UeHNzEfjpnjm7L7RioVoAhmBBhBnaGcVXri1gq2eUmP4VpbgTkVKRJAgmVn35PuK6dYSHXVaMfiqFKahLUdY",
  "key11": "4g9oqSyCA711XFQYQ9dGL192sufSM6CBDLZ1mCrijQ2WD8i38ZonccRAdLNfeZBGQdZNHvKPvYtBuFzwipiL6cPR",
  "key12": "Vw1isar791zHKjE8yu2AoeDL1DmJWJf8orupDaQ6bkNcRdqhGU6e7PgmH6iMzhyD4FvTtvDZxg21LbrCb86TXxy",
  "key13": "4EzPitRF3k5WAonvojgzvuc33MWm9ykpDWcbjJQ4Eende36Qn48kCvoPBGCRpkrCj6rM5hSfKCkgDcLxv4XBm8nS",
  "key14": "52viaRBWCBg3KUFzmeQZU8X3JEVv3bMPJwMcuekB6AYQLw86wStVjuj3XQEUcTQWdjw9RvfYGxqAwxHxafuwTVSK",
  "key15": "56DwPWkjKFJjFzasuCWbysqAa52GL5LZ8caj3qcKHL4rLtuRk9FyZZLJtxWTz9Wz1qjugDun1F6jUpqEcrjP3fUA",
  "key16": "44koXGNum3yD11oV8uZ32BYgD4odF8a56kAegMtyEAVU2pej5dVxaj1jQBrgMLBaubUjzMFSvhudbFzhsdBmChzA",
  "key17": "4swni8T1u2HrUMQgQjUrZhWUK8W752fwjFSe6HACbaWRA2RAN8Gk5foTCcDr7tSmP8TFSuvv2u112d4QEgg16fTV",
  "key18": "5SYk1oJZkRc4oHcjdrRv9YPsCpqznA2m4JG4ia6uLz8gL2XSc5rooeBWAaa93MuCNVSK2jWQQSjBPpTcRJgEikBk",
  "key19": "45jDpyc54uyaSJMJSRfUpjfvHq67cUugCu7uwy3JsF3aCQ2Leuo27AimneEsU97fuZVgCh4MffdoTt46KAtJHaX9",
  "key20": "5cUpu8UpRgs93bqvKueQE9RUDuG3a21bMCHNUsBdCkzPPuixkx7gLEWuKhusEZXgWSCkVXK1mDz21n6Ng9JbS6Ht",
  "key21": "2ge8z4CERDcUBQWzEKec8zzMEaDQUuSPfM6TSWP65w9if5pk9HqTVW2332qKgdXr4U8pUnKCPVifHcSbPZoejXdc",
  "key22": "3kZsp9n2iPGc6yHU8GG44YUkckPASXXoNq1TbCEJmXPz8aK33zChSC4km1eHHbhFAp8xa1ZebMHU9Dh9ekmeK2C8",
  "key23": "56TYLMMVLBPuZ87PtdnoME51w9Qk5tamh5iJHVYzRwqnDr8iK7UHvMgRZoZseAw2SsCeJjZbfH9YpwaeyKKipS1Y",
  "key24": "3snPmybX9sT76Yni3ydq1zi5oK2RqA597XXohBbr83d4eaTJ3tegZ4ixJsqWPH5hszKnQii1ZD6oEEzweS53Ekm7",
  "key25": "2N6YG5MMyxScp5ZnbZakHQLuMNLzr4xL1kX5RCjAdG7kjwDyYduSuSCST9m7Lt9hGfe9Qbi6C9SY1JDon5uYus54",
  "key26": "3MP1qcDQqpbdp9TRjUtq7DfG2K2stK6FrLGWRTqsXNWvSeefGuhRfzg1UmbDaoD5aRrXuPKQiFqW2dj7DeExtJbx",
  "key27": "5N2sGWLS5pLFYmh6Vrrh3T1zaBZqV6Te2hM3ESMxAC39x7WFEx8NebqmQg6f36Wzgf7CP5pS7bBRamnsF4M14N4o",
  "key28": "Wi3rcywTBp8iFDDp9S2BDybiEY78ioRUcahdW5oknsgQY96eP1cCpzwpyPNRbHCctYqrD66DJw8pwjU8zddu75u",
  "key29": "2DnZ3EcqfuEvNdtonvvzT6be4cskZ1pZB8tskB3DNcYYPQPvcbM5tU17RkCRLTANS1XqzeuegLBm1aFdznba8e9z",
  "key30": "2jq4MP2bZpZAcguQcCLSuL7ngYP4EpRAMckaXydhAdtFA415UrqsducC5uRAQonvvNQnvpQBEpDyJLeRDemExCL3",
  "key31": "VnAqxu1YcKHHX2eUCMyGzX5tRv4T1RHCkwpD8W99a2DdYXDxh51psvfcDDheYQABTTzrHtLUVUx3kLfqeoncnMZ",
  "key32": "5WTym2wc3ZQHaenb3kojQhrwk3ddMvNZHipoaEBM3eVxDkhTJHgKGZcPeH7EecVxH5WnG8xnr6nWoJybTHB36iDd",
  "key33": "5oSw7TMwGEeVPv4UVEj53BxrhXM2JqG4Bt1p6kiWwjGiERfPkFDT39EGdDXk7TJbXjRzc94xRL5viHJmHJvtg36i",
  "key34": "5d8NxyW8iRhndbZpDtcj4KjQynU8vJmU7YSwe5Z9GwBPXp97edky9kQ1uG3NyHHyCxHzF8wDR213KZ4smxiyku3w",
  "key35": "4m6m6xwLd1Z4djwruhY1ot6FtByKHKHkHa3B8sZMMcqaADpN5iuCuwFKmn5epCxKijZq5LwXW91anepxS7evUxBT",
  "key36": "5Mtg2hDyvYaV2sfdGTzz7DECes5EnJ8gNcq7wnBsZFMkfNJjA4UnTFK21Wbim9jEmAqfmwctAwwKQTDnWoCogtdX",
  "key37": "r1spKKSY8ih6zoLP9tVeTv61TzEdjRdjNpikc6igw5VuD9ULj85k8AvYm212SCiHUqsQ515Cob2BzCv1dFrdwgN"
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
