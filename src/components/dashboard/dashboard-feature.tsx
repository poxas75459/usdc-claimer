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
    "dAsQWeQXUA9G8FKPtjVma2ehbbsy1bGQiNv44EyTESB67e3ZsLCBhu6F6o9uZiqvKF5tPvrw7dv2ARuJVWfcu6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "328bdgnDcyff5RHKeMCsek58qQYEXwgprtQLMz8r22n8aMndCkHc2PLZsSuDu7Eqb5gGRUMKqiayZcwt5HbeCjZz",
  "key1": "48fce33noRkEZnGaAz5BCNr6nhLLivenbGWHHxZwgVPA63RP2McxegAT2BLiwzjUXmrfnG63nRhz8kAS2QCeu5mz",
  "key2": "4MF61ExD2YWiZU6N6bBpWFQE2osW5Jpo9xw8KtR3EJiYJ5UpRUYCUncWAjhjECWd37k1v2vw3moM1EQhRrV86Eyd",
  "key3": "6XzeZ8emy3cNJpRowJXhzGbia6SnRs5vqrX6hUFV9onzyx3LkeCiu7BZ8u27YDmUhycwyFdBu1k5iRr4CNq1mt1",
  "key4": "2cBngotxUAwNT38jkdgdhnYG5C3BPgvmWmiN8LCoBtU7dpNHLMU5sPHfS8HvZJjLwcCr1JTVtM2X9neHECbHuzGr",
  "key5": "2A3KeKMA1VKe5cXV3CFCqARiHNGaqSVh9BapYpvFT1ihFG4TQMy7tT4YeVdqHWPnCcW7xwUeqfwnfXnsNXkLDzQC",
  "key6": "3EPR4kY2R477GVRTYUqwEp2i1FRVF9zghdyUWpeP7FtB9W5aBijPp2zoH8ZTyzRofWe161JA4NdiAtjtbbve4ra8",
  "key7": "4YatkUQwXea9xhqx1f1PRAZixB8BAgqoLsrf4EFN8WYC9SZgChWFjqA6xErvDwnejR118UEhC17EeetoRfPAAwrZ",
  "key8": "4rbNtaJ2Mjpjv5BwJ4ntGbuEYBUG1XKT7Bp79QCVShyVsHo1QG7d9xwJEpsSAKTd5zvyQDVZZvnJcJmpdCJmMj92",
  "key9": "J57UatQShuvx5kc8KYycx9jZwveM32rDueKgqzrsj2qBBpkzTx2G2sAbN8hGuFUtHCQxtBMfeK45kePmD3yE56E",
  "key10": "55jBVZkEPpaGZy7DmkRUZXazaQzNh59z4NhALamPBsbaTALXFU5DBStnMKEZXsc7AHTABTwY4Wdy3mENS41fLHa9",
  "key11": "JDZviM3FFyRkJUdXWkatcbdJ81z9niUPczfCEfHfmL6QaqbK7GKiHV6FZyEP7PmN7szYVe9iSb9iWb7M9oR5hy7",
  "key12": "vute6XaHdPRkLnshLmw7tv1biUCksktRJy2LQsYhCgMH65Za4n1E6s7HJNwa55FgBz17jKevCQXSsXaqyFm2iQ1",
  "key13": "2XoXR3fSoPzWsf7peQydNh9nEYjAotSGEcdLwhSpBxDLF1woEZU27VUwRapWt3a1zVHfMFg1bNXxcuvPC7wv89Lj",
  "key14": "57tJQCF4i6q1HLw3ebc7Qs9G6jcCDoxseUnAF75YcC7N1TsiNY7i4jeePTEPoDytd7oRn83V1ThicfuvLxMzpzsZ",
  "key15": "2eDJWFNf8JhDSRW4cpYmaFYQgJwTVsScYtS13F1YoKg7xxU4f3SwLeaNbPEyBW9QhYjMbZ3kF5yjbbNMCz5Knd4",
  "key16": "tm3yoGExXj7J5nMW9YpBVHMuAuT2Ucu5FjgbFZFwjaProJZef3QGzgaXgwouwQFtYjNkjg5FGMJu22RK8yV54wp",
  "key17": "44JBSoxermTE4xEU4VZVYXKE1B42Th4GHfjhVkpmSogaQZfRBevFWdLDzQmBBQrqizq5AXFkJCSGypTZVJPvgBvK",
  "key18": "51CTg5fenSjHYDj12J4ZXmvV7NrgwM3eJ6rcJ9enVEAubh1BC5sWyDuVBRJykJvsEibWNLen53jeK9FcAJx35J6h",
  "key19": "5UkB8TbzTEBA7BGXdFNhkiYAUR5mEpV5qPc6UQZQZjNbaZE6vuLHtAcVEVS2LcscJSK3GHSD7sbChND9sW1prfHc",
  "key20": "3qQU8fpGuhJmT1xiSYYCcXteq6zTPuvkWhRRFXqLqGGWotXVpRrj6PLrYqq3cap7Nbas7jKYAVjHsoNJJyEr5FCC",
  "key21": "2Z6D6Ri8PMVeD22Piqz6tcXWE2UTv2Kemr75R28wVouyFJNK4LrThaBm4tqeRc1AJQsqAQEtZFH9nCajjjh2ZKUh",
  "key22": "eR1QQjFiA6dqtiL77mVNzxyUQip4RDifVocDSPUdB5prftTxd8N86HdaqpuYevU6W7f8GU2BHfFoX2wZAhGMqJi",
  "key23": "NSPuTBRnaXkFpmMSpxMPaBmgC8WjXzkYu5RP4fr9sw5ymTBCQd6aAa9pyThkFjc5UsX5BSdDtubs7pwyMfQH3iJ",
  "key24": "2jp8jWoKFELiRA3KP4uNwqCxtJhNWoA9cjJTpG6kCjvv6zfJ8LhKvr1SVmvwMeSawXiPkCLygesywwrkaUp15RaE",
  "key25": "2aNTdwc3WspFXQtcNnJLFw3A8dUxyuGZKQFbbKJMT26C42pRTvaEsM79wodQFXoBBcon7pumAGd2wRbkHBQaGWbY",
  "key26": "5AMsdUFNeZT474iFxMrQKHSc3bEzYL2CvXCFLEP1RaW7QeUNsCAfm5iHJHWvK2iFzBp91PSk5spPHQkR6Yn7BWJ9",
  "key27": "3XoAjpaiWJcrFLcQQD4oFPcpHnGhW5m34jWdcZWck5qrCA9XBmiFyvPFf7qaLQER82tTkqemqBK6TNAX7R17k1CC",
  "key28": "bqE6732jpDPAmc8NQ51knKdZzqGK4LJfbnqp78i2FKTNd4PxtNtHHuKnCbfifjzGXsUefX7YyVDcu24ttr3Sxzr",
  "key29": "2r2PfEm9GR3PCufiPGPpQhyMewTR9AZeAZLeMgEfePh3qWwTTxo64bwM7bGfAYxPkdDtfNLqKtL7Lq1uKEyJ6A1a",
  "key30": "2E2LmTfWXseX8mHSRBC43byCotwymFeooWvh3W7TroEQrUggw3hrUVMV4dbGrKepPmFXwPTsn2sVY855CJsPTTdo",
  "key31": "67A5CiHTbW2M3Wv4PKVNxsEAZM3wdzcobWkwQGgjwBZxQxHxTRWU7PPYcKaur5SPzySAqyFq9vLoUBGhhpc11CGG",
  "key32": "3tGdH5Uftswrme4ZN7C2kaCsStgCqHpXTX7yNiVXkDnzVqB35rFB8tFRvyFmYtQw8C48WPkSagy58whHqf6snSvj",
  "key33": "BEwREzTFpdEWhBxThNkS49CCG4SdeWpapFDeYHRMj1TCcEbEE5F9aA6EdBN8yVUbfeitJ9hymxKuxjqNfSjaxu8",
  "key34": "5pYsmAYKGB39TuwepVs3gK3KyGKBwE3n5DUQbm5h6uL9S2EV2AqfZsUpQx8EtE13ABsMEonrtgGf6v8hoW7P37ew",
  "key35": "4NWENPgWLJhpAc8KG4tYPyr8dgVu9yqLXG4YD3cs2Bs9FSuHsxTEEqeHstbsNhpBAGcYBWfPZj1kQ356K8uBGkwC",
  "key36": "2KqntRzcWbWWWgvMG5AExSiMLd2gQkd5BKEQBYuvRxViJ6v9CbgefFfmTNUcryxBNVTrvnhX5nRBYQxMKJExYP16",
  "key37": "55eXnkkSRsTGDxsRW6A5knmg4BTCZdzbmYuKHKEAioqzyajgNBCWRVbU4kiWcHNoAqg6bw4krmZLVcBavEQAHr7P",
  "key38": "5hScvoX4oQB2dBq4Jpxg4XT1nGXe9cBn5eaSNsRLZYoMYAraJRBVVEkbZapV3FjrnqBC7u6hY1bq9dtfqLozqE7u",
  "key39": "2fg5vyzeUB4KrAFo3YVbUfNsp1pFSzwY5HNsbShdre4NhtcQiBuphtWYSQhjcoFqfoSb4Vk4MwzbxbZYieQFXxW9",
  "key40": "2gTYRriqDbLQgxBnUaWtCqLCP97QpqDin8XJbrWTdQkWQJTS3iuuYiHKNX4kYuCwUuyVHhvxfSU8ypwz7TdYfwPH",
  "key41": "3VFhtT9FHY3b3qU7otqcsX6Y6HicACPgPABvex6FmbWiYeZkAko2k5yjsxkFxXq1o6pqq9aG8y8obcJRpY8Zbibo",
  "key42": "5eyJ7danFPf1bwqeSTRLr7uChmcvTPBQieAMM5rt9tQMmA3RyU1VktvZCJbXyAFYgAk2jD7jvNRDHwng2TmW1ttU",
  "key43": "5C3mWYPssXGqPTeSA41gsjsFuva9vQymbJpwhzeXbf9sSZ2XVtzs38zqrEVaiZVpgV3YKpAQBjUsYRgZm8b3djgP",
  "key44": "4GA9TS5cDfLcfwZv1NCteGNcbLvtUxvG6WZWVZCWvqDU8Cua5swuFQivV3wfJtBM3BzVpT6FhkFuhBdX5W9J5Wv4",
  "key45": "527H7eUGcXb6VcX83o3sWffhBMW2kPiBnRCiWFJ3tXmu3tbeRwqGg8G2X6Lyq6s68k73zNdLe9YekwpUtiSsmUXH",
  "key46": "23YWPVm4bwb6cHQYY5MDSyLStumLncNLKCReiS1WPGX9xnY1hM3najWL552MkFgfLR47xC3BwanNHVqhu3QDcUVz",
  "key47": "65VY23WrY6zSaidnMrJ58hpjH7Rx6zriyYveq8gqkUPV5e2mQDhNjZLwoFqymeyBpmwj4z6zLwjT4wHJSYeb3wJu",
  "key48": "NsVYeWwNADEe3XMnSWBP9s44c21KLP7zMhhciCds4e5KfRgFfbhuZ6mRWRjz1zyEmQRcFpbdKCfEeWwnUvuhKz4"
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
