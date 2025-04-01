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
    "5snSTK675w1s9XZpTLVgSNpP6DfoLY7VbkXeU5ydgBhxuVRBwtMsYL5DTnG8ECM1aXMReHUMyK6AYXka3NbBdGWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CYL3fT2KZLg5gtidCzBLzAZ2FciJmRN2jZM6zVRJnzFDxwpgTbVh1mPUbibM2ytGxCHcnHkLeJZVvBUEZP5jdqx",
  "key1": "5BVU7iZfeMKB2pnbg7syqJr8eXyxBEh3KXdVxBa5tHvybguWzR95PwWpvB8TPufwNKe115DQEBE5ck67Wm9pzbxp",
  "key2": "2UN2qwqRu9to6572w4gKZR9op4TdjAqf7gA4Z8a4dKzne5spw9QFrMsN99H9odYnxJMvmSQcXCCTnjgh1wkoL4Hh",
  "key3": "3bK6dZVce3dDm29PppwCJY8qeGvPCRRNCRLDBx4UpMNJ9ChAMKzRM2UaMQfMyw8fGog7Wau8sRyC2SUJPgTuVES6",
  "key4": "2TfaBm23xF3hLjQ1WyZigs8QgDXzygXZ9GK3gZc9deenjtaYuEhwiHGyoBoJXYAcDkjXVVuN4ixTfw7vjrXDHuJh",
  "key5": "1cBGrANpzpYB8XHyzhPY4pJxnbtLMMrLGwQnTQwazAEAzuAdFN6kMPC6cbSQ9s74M82VHqD3Dy9WmDkrkaRbtcX",
  "key6": "4nyfXpYwogopDeScFna8MxoV2NaLokPBEA6bz5nXrNyubNiMNV8D1cC98zuNVduinzB7H471dKP3auQ3mRYykLM9",
  "key7": "LdTKaGaL8jbDBbmk8EmcahJswArkG6Xo2DuYfXAFfn7e5okCYhAiyrNULCPrMFwBwPBBdRb6n4bFoDweBdE9X7t",
  "key8": "3LUbwJEtfwDnBRMTkE3toyA9fUcXWBNTbXcA973ZeVwrvdiWhrJneRcPcq2uhbWqDiYG1Bfn59uQD1Sha1gRdiqy",
  "key9": "2zZK58fTgURTtjbuRPgd63r6vNsnYvUufu3xyetyr6eegt9Me32FY7iP9TE7XeiDqdqE9Bs9WcTowXe952HZPhj2",
  "key10": "5vX26tByJaNz4y4fGzDtRuWNvrneXgirBDHe76gzmxz5azm593XXbMGKyrVQTHGRczYL9gCUNY3t9QzUCSoQoJcT",
  "key11": "RCfMM1VNbft75azB1U7rwsHxJv42RGGvB5R5Ss4J8xAgLjB3QMcew9QdiN1pKP2emnshGDGcmvWCkmoMMFcZbmE",
  "key12": "2nKdRRNjrDX8Wfk8fru1fvMNFbCjsSQEHre4zHc2ogrSk2R6pb6xN5E22QuhK15dcAzhT3CyGXiNvbppU2rYAcT6",
  "key13": "329oHxpNJbyym5uAgqwVTRShyfMwg7tFbE4rzZn6aXUFCKzAZQ42wKu2trxc1eBUkv1HTESvsTvMdmrzni6ywSmT",
  "key14": "49sK2DLjagRnWjeGTz3yoWN9LqCsL6AJ3bYwGdmD2fRRboFdb2KoQBrjkewnGrTtzE5feN6ZGCRoTyWd1RZBnokL",
  "key15": "5pt6jcAQ3FUxDNeaPB1Eh2zR4zJdStkvJ3ceiwpVFU9QaFDozNBHm7LHrqJ7fiey42XdmtvSLvHVYvj8Xv4xoz2R",
  "key16": "4QQD4Wa2KTzRVCcTq86tNp6FWbvtW64nFfYvkzEAviVdEAAuhHD261hMAhauomshVbn2jVVLJt5ocvTBe9NwB9jw",
  "key17": "5ygcxrCian3z4ENpszhbQcWtpuTPh1bNfgZpZqAL7dbeVPFaxdgEySMi2wwAhPrrd4XsqstBtFw3z6iWEDewgt8k",
  "key18": "2PyLTrmmDQ6GkCueBNeDTupA5wD9iQK73WsKoe8fNq5ZcRhrrcywSjgHVkZ4KanvAVhiRonD7H27GJJJDDndj4cq",
  "key19": "35Fqf1fN7HBiXSiQkz3qJ1AV7JvjKHhmVkPV4HY9oqGDFQc8yPfdTMsoBUvjddotX4hWu7DeZM2pF6JzL18NNM4D",
  "key20": "56mZJRaxjzU4pq8dCtpvcPjppWgZgRbhj1wCKhKYHDvDg4nkmBLywqupTXyQeUmaYjpUW792LbmhC6TT7XHLayom",
  "key21": "2DiTtvg3dP6E18dGq45wj8Fm6SScYWU3tTuZD5EkrEe6HtBV1DYwHJaHNKX17vm5oFjPdj9167jedcuA5PTRyC9w",
  "key22": "64LCs3PZ8fvQQ7b4xVgkgUFBrZs7HwbNHyLXRaNUXddFDuWkKhciiRd8Yq7V8BhVqGZ8LnNoZtu9sjiHzw1vcovs",
  "key23": "62iZv9BTgH4nQYoopXpypd1MLqj6vc4JEyCHfGZZJHdHtYQyndRtzaveZyBsYu1b3Mjz2NfvYsHqmRtizpUjGpmU",
  "key24": "31yAp29TYS6bUPJQ47pgjfyPcLCrHFC5hiKALyw37pxGF6sZGanCoAzCUi1KfLCJ36U5cBpKg6UAvotccuDDycWJ",
  "key25": "vV5xcsS766vAdkpXj6G9w4DwHWEeYP8ia6ja6JT4KsADR7uA18eVJa2dRPaMzogD6ShsySXgWZEVCzwgZUV6e1Y",
  "key26": "3E7Ti8mQAHDWadypCJHQduvpQNokF5YLtvP2ZtPQghFtD8RGezRLPhcaPxMV4SY8936vgChxJho262d69MSHBVo3",
  "key27": "1QVuMkFy3wwmwSTNx1Gvm7o9CQEFxPMk5Gi1MmmhcdsxFMNrPmMog4H2HsxUcvKXH6C7wz1s3BBx56uDW8c91M3",
  "key28": "5kKmB8VNYM8TQTsYSFm1u5Wj1bLrmcSntHWuRonCTmmApCDXEYXXtp8gA8tb5po2GDyud3GcuRJ22UnsqWsRmp6B",
  "key29": "3GySxARd1RoAZjdzmhaPA8NJwh3nfhcddwyQRxHnR8bqksX2EyCHBERMKSMqnDxUmsvvAbQW2hSbc4eCY8UwyeAZ",
  "key30": "SacNRsWfdUj2pueRo2Sn73jqY2jPUjenQAPuyhvhHUPK3PdkprSjMJ8WuhHUbk4i63KoYs8Q6WmVU4poSdPeZiN",
  "key31": "3RkVBdHinVZoq1yccPS3se5yigpzpdS6xF3zJxWd795XwQNdsERrD4gtmrNgavW6okp8LdG82Hsg3z2B8ER6FUsh",
  "key32": "CmhN8JujxbSmKaVNeN4AMcJaknkcNf1q3S6rbFpcJmpKHmYvYeAkJAELgPAEGvPMFUr827XSm243mQZ4r6tg639",
  "key33": "66UMWkzwv2sodsNTQo5at9NUffSZudUmaLLkymhGFPxVzkH54c5mGeW6KpvaPWMwWhpvZ75yRgRWAboZF7hyjXTt",
  "key34": "H8hSi1VdhCUQrUkSiAoXhaLjNJGgVPNTcNm66eRgpeY6F8x1xZzW4dC7bhaVK3fSAKWmARq9NTRraGEZ6uYpRgm",
  "key35": "2XFsMDDnEsHPzR658FVmUXUQk7MApiyCBb91nHMWg9E5qHRiFKD5ZkvWJF1FNEAMDZZShpt9FSRRCoRAE6bKaQBo",
  "key36": "44UrVpYm8JX4aZ2JFqerfsoFVzEPeN7CYfmLzAedBi6rDE7rTN4D1pqJ1W4T4QWoJkBVJED6QZeJTUEHhSmk8ofx",
  "key37": "5JQzFpQvQifVTXgAxoLsjtEz5GCzbZgPHPTaPmqVZuYhEcSya9DuZBtqkn2rkja4v1oGR6yKXaMSKKBezxHJPvKz",
  "key38": "3Wg8R22vZZZKydbESsnh9xiHdxg9nxKHPSBGrgHmcAAPJZ7CDLccDdeKyM4AuNjC55rrkghcUn1Unq3EpYL4rpux",
  "key39": "d8KKGXFRKAEvyYBW15JBhJ5G8GVY3JiXowMKWT86qVqfFEBpKqD95XC9c1gUPskdCexmZPuQnwHyDyqBvNyWxvk",
  "key40": "4Z6GiMJB31pcajXdpxUhmVayu4hK9Mzz6zETw5rqc5icFMySNtnkvYeNdaxemtrG37FNzpvy5yvK8HmETocKpqHk",
  "key41": "2hch5rTPR7xiGFF5gzjiwfhPh3obWpPwU5Eat5TW4zniTTgpfw1z3f4unzyUvorsGehb8Vm9eZTSBHPebzKNnX9v",
  "key42": "5n7dAEMFsM4bF4Tf2EG1QwnjeFAWMHhUaTdi1UnAp2umeeLPjDh5ynCm4KgsbDmtzkKbDMfSbrX4ry2CbGWbFaFy",
  "key43": "397wwMWkHpzXcJMSEuvSXt9gYWCLdNVtn7RcZBBhpR1aFnQ6H3QVUzMtErsiUPJtczEEB374CExpgK37yR1NWt9T",
  "key44": "5UC7qxAqVtFZR2USyem7SUA8Uk8Lzz4J5xv1Byn6pvvChgfWGWYJGHPfVTPC68UpPUskfFHrTd7ePZSMnu6hv9tK",
  "key45": "Adh6SgtbyYazs9wYwTvTrgGDeUEW8cKuHrLzX4iMhFZHYhmyMzyd9WTZTgNen2UTmj7q1HaWQLzc518GJndqX73",
  "key46": "4QpVzSsmNgDv4KvDg63iHBDfRC9JCFVPUAXdvJSrKrbutYPvWGfSwAY5vRA5CrWB72edkFv1YGEGCAJhWoJHcnDM"
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
