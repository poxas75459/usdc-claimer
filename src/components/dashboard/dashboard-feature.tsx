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
    "2EDB6kJ2GiwpKr3cENDEwzPvAWadUGSEvefekSUe5HhjZVdrbqK8fcHtGdQB5d134qkUbAUDCvQw2kgtFYZLuRRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pRUbyQekAvW8v7iykysRtbrTYyhrJKreEGS2PLZLR3GwL5dNxANukgKizx3UXByDPxb8XeEPaZ2jWwQgzQ4inT9",
  "key1": "5z5bpWLAw6anxfch5o9qCW4wkifcbRxK4qJi3x9ggP1cWJmztFkRwUrx1VbJXdLJ1FebePz9fMi31A5nuMHczoTd",
  "key2": "3CSzZPAFLc2T7MnVCN9SjNf8Jc5TAHN488jHSLYCCzubt4hTvhAiUF2jk3bGpHRfMTD456kEqcvXRXas2ubpuHKK",
  "key3": "3wrLqVXo92ogkvMriz1mTp9kq8Fhzc253Kkn2Y1tSfwPmkUcH8VavpL9CZTspmFpcqZxDFfwtbefoxrGc49BD5Vc",
  "key4": "4UUNSiFeuLYErwMdeTDRSUbUAy6QUNjtirjcS5TuZjW3u48LFsSHbqKZtCaMYqwgXuHWPdML4HnQykq32fZ2wM7b",
  "key5": "43r1sQ69KAFDs8ongWGZAGJqEPVapzf6UhZULxWLP8gticksonY5GbjovLYhaC94tzuNzUqhafKdXcmFgXyWTVCh",
  "key6": "5rAMJ8SVm6DJ1Rf45VDn56xuWbuhFFm5KmzNi1NWgKVEr326dBifYdVBMS9C4EzY7PFL6KETXFvqzQeDKKe4tBTZ",
  "key7": "NebJDwPhaHivusdKUv9e6FR9taeCXQ72t2VKdZ1UGesrK26sBwNsvQ29vs1RdWi1apQ82Rj8t8oL7ozTnog96Lt",
  "key8": "2Di79k7t2EmqKs5G6DSgu4ursd6BvpsmuEBkrCcDuTq2MvFrUG2pBtSBgrYvaX5B5AuX59M7ov7xpyH76dws1vC5",
  "key9": "4YfCjD8qdZGfy2rRtpJ8QArB7zqzYhfnkH33jorVwunN8JFLnehkJ7he4EWfsdWuBTqXu8rTw2mmhgepGDABffZ8",
  "key10": "McJLisGWYdER4Qqa3fCvi3tiWJFsrxYKjzV3szSypfFcVDx6khh8g3o1vAWh7qd7KddcJfygPQVZqgYFAMYqahD",
  "key11": "3My2hadm84Hbgfevr7kcrrSMUTSVQp25wxWFTKNNHtKnZWHTWjUGrm2zcLDsBokfke9655PL2dnYtQuvYe5uxB7J",
  "key12": "24L4AQSneKV6iUJwUfGrMdD29R3k58hbqNS5UmFfkPyt2Z8pJdGKUWjAKBuWqYaN2wpDkFLGQytJPuuW9TywkyFc",
  "key13": "2YF1DD81tpJGKvast4e3j4MAt1jaYwiUFum2CnHV9fGtdRkBmTyBWb2DpoNmKc1H7Sdbq739W3ntsBmWqJfvfBQi",
  "key14": "98Mz7uWbE9XVVKzHb9S5mRDkcmvvxRyhcivqv6sxVSd8fHt43pCPyu73DRUgu4p3mwqspqS325kUx8sSvViSzbD",
  "key15": "4DVZLFhg33x1D7Dg8FM5bpmafBgFrweume3qjY87iWcJPQShxG7zaAAybhurmwg7vHeeKfGGz6JGLwGtRhNCmT1n",
  "key16": "4mjFhHzTdWr26eadksQd2LYbo5u4jmoPUtGXxkRrDecDSMbUaFsr6j4X2TU6UxonXZcZyLnpvqeWsKbUU7jNhKaD",
  "key17": "4fWbE3QrHyDKiqc76TG2YE2Dq1qh4Nq1zEkc7iHLeut9aizHixmpsf2qYwGwcPA3BvHnsB2WPsgGTVQZihp26F1Y",
  "key18": "5bmBQtq1R7zbsHtRXEqX5wbGxJDKSySx7VNLRJ2KRKj3fWpMpFMRe22PYXPDE8EsBFVtAp6F5kugJaMg8wnQddmy",
  "key19": "5PWvz4K8BDYPNVUhgBLXsgMhGsmHfbrnuz6RejTdDh2eqaj7JpuQv6TzjNYEZhFHyf6ZJoTX5Xw4bmxfmnGdWi7G",
  "key20": "5gfGFyTG2zz3veGPahpRLLTYHGiwP3Mp1uvaY5ytkmaGxim6oUuRwm2z9DfBMTj4PoPTxksokfqqViaN3QZn42Zi",
  "key21": "4XjQonVLaHmSGYg56cKKJgLrF7P3yM3Jy96EUDthpr58FqLd2To6mP4fwGzw4emsqJWAZRh78u78Db3ax6USppSk",
  "key22": "3ZgBUGPjTB4GjRm5trmGWXzNGX9MuppSjt7WLtxfYgeUsYYWs7gNKApfq2yvPqzJC6Zq6KcKw2Q6s8mX5vgpNfVb",
  "key23": "2noMTJMwbQmSUJqA7whD87Uk6fi7GDkhreiJEFuSXaLiXggh99QizemfTFrrivNnyWXCXeSo4gzxfDG1zGxBprLE",
  "key24": "29eVqM3mGP2gXikWc28ZYViDkegkjKPiLn9ynri1cU37ySgzwjmPB2wxGqoL5QcPyDRpzhSWdPz9rhnSxEgAtA7s",
  "key25": "5YRdLPcWquA4Hznsw2HQBdjD8tXX74EQnpkeKA6FcTvMSiRe5wLAfEaHYdGLJVdFMS8ZdJU1ZfH1Eq3uVHDiRWAW",
  "key26": "5AXBWC9KVfZVLoTQCidyJd1Wg2x6oinu88eF4WwHAgjGsqMVVkpmAgmV6ZdzCcrYH18WD1AcsfEoBCmapU69zr3r",
  "key27": "2c7XjzySjp9mM2XC3MHaiBHR5BhLk88dCowPLEvAYLPXFrjoSysLvTGtFSUYAinrppoWQ26bp99nowQ4YiQgSz3b",
  "key28": "A368fDqvRKUVs8XWm5devgyipPeqZ86b4zJGhJpxqkwnHH2GS8tq38WUMYYWUhutDAVANwd2UKxL6B29E9kra6j",
  "key29": "3SsFfVWhwEyPkxmvJVV2nKpnQrY2vuumNQPioFqxjJyYNr5zi1GEFo82yeUkCppuCcit5UzvhCDSpmeYWngxEWfu",
  "key30": "2FVfLV92r2omZiB5mtiWHNkGf8FAuszu263QfEQ9Z8NGZUpUEfsgxiViSQ4NYTa1RFUSw2D2MDUMU1V127cbi6KY",
  "key31": "3L1EziCemPENaJT3tbhpgR7m43UngcsE2GHkRM8LRrTe2DhL5tziRv5ArwQxhyCLL4aavvbEypifQ6aqwjnz2CUv"
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
