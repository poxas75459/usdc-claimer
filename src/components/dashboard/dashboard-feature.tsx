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
    "55nyUQHPNcbDJBNgWMM6FFnkEqNDnY895yfN3i91hrDZjUc1qTT728AwwvkVeQG88FJRjkQFNcgv4btVhsrJVzmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fZppfnrxvKXNsk85iq5xjb62qHCsZCv32TPJQwKdjTpw79DvKdTfnssRiVawgrucSyRRbEPMEJUJAGnsE8r7A1P",
  "key1": "2FhrB5RH4GkUZ9Ac5Bd9k3Su6gokMAYP2sJskty4xLnUGZG2zKmHBwBYLq5XBSvnzxRFthNmHK3AH9gSBidTPRwd",
  "key2": "5pNUb5KP793K8ULDkqFXtWYTvyeuw98FtFTas7qfUUeQrFcMegZAgyveWMH2WaYS985mdpB9kMBuL44gm4riKEyC",
  "key3": "7dDvu6Yso6CXTQRuZhXpx4PaXUEsMgjULEeeDB4ZduvybVf9w7WXRfgnUm6UitBi2dAiCntTa5Vm4JJRpoSg28T",
  "key4": "3Jghj1G7tykbcw2QXEUAJ85SffWjZwDzFfSeVvXDu4nCYsGQioxpcu4zWi7guMSau2c7NpCBd5rNwhWgMNjvbXmf",
  "key5": "4FU15U23Mv2dZRwKDcBd1Dr27RBeUWJ5NBkGbfxY5pWfVWkLTyBvt6MR6T17bbyAXkkPq6ZHvigC4ovHSbaAtz3Z",
  "key6": "5f7JBrmNWT9RSDBnULnwSvDVSYjgdTDtRiJaQMFyFZrZUP7CFUPAeLN2WryJtu8D2cCMbJ7Yf11DAMNgj3z69ix8",
  "key7": "VjMjJ2xmG2mj1LgB5p2zXHycDjShGgkXbS1v1JQw8oXg96tricPvhrrajYasE1rnTj2Tgcya71gXM545UnXvECV",
  "key8": "4qwiSK9B2cPah5vA5ZsgdvBxEsWhsse28MkqLjwxSgjWZEeRHQ6bjfvgWHGhMrGkAD261ganjaqLGoVWw7wdpWEq",
  "key9": "4QgZKTV1UGxXZa7RdndGM6kDD7rSMFhfR6A6wpeCrrVPhcddg4qFn7MrNqXB1j3CgXv31dLz6ArmNaEX9iPZT4WJ",
  "key10": "4P9omwEj83LNwTKYUr7aJ1dtDBddQgnqaQDnD3gGVPniGt1HfNRPi66zkqJWLSHqGhPc5s3qdmz5JtDCU3eSomN",
  "key11": "2fd25NofzZujfFsnCe8ottZSnfj5vm4FxoHdb27KWua1b642PMfXK7EmcojnDtSyLZnS6aXaCJayeHn7kfwJUPjH",
  "key12": "3v57yTqoEVXDYVMDiryH6wyoA3eT7KA3Zqr1xkFgHjtJ7oPrmQ868ZcVoGs8QXj9DsRdfScFeJbPxaVX6UUow8H6",
  "key13": "3GXW85KxreZuVtTMzQ9qoXAS4orT113PztLSdnyHSxeXMX4tegQo3DP8bM9koibs8Z3nkfAJDJyXSdgYy6otGHky",
  "key14": "2ourUWeSiC9RWNzmi4xbiRQsjbLbmbh8DDgybmFMPkzcDwkhJkiCAiT65DJYQcYaaNX4mSfocVknEDUbVnzSYJ13",
  "key15": "3TfpcWop37A3oqQ1vq1FNAJD1GQWVTXwxWc3fJDU6ZoirFwm9q8rX6HAjeXqJzBWXxgPSGEHvV8NhRoaL39FWxky",
  "key16": "zMyAbj4TV5RNmfiyMzzgHy3knjXCY9FqQ3qv4u61wvTvpNnYgr7PfJfSUk6f8bLe3R9a68f5JVJiu2vLf7CiZq6",
  "key17": "5WrBqG4AcWE7mb5mVQa9kphWHDeD4AEoAqzFaysxmWsJ8LVzRuXuLgXYNuijxH9vCms9WJnCsXZ1hXmMn7wRszF8",
  "key18": "EGfTNJrfsg8LeMf5eWRnUbzzCmFV3GETivPYb3Jz89vs78JkLhGCXe56JK86YrNgY7xvyBjhysDMbcpMSs1wCoP",
  "key19": "5bmbtxsZDZFFa7rCz2AerPsi7yRhHmm4npoM7cezRMYmFhRfMkjrzFGnoXUewGrsC7cCRKTx7MB7v8Sj6ev8n8jj",
  "key20": "4C7cGSnnFvfrakxZZAU4RPr1Y8GeAhqkSSVmr8mTG4gwzrvt4HUJDYLqT1i9F7vYj9FS994sFbsPB4tAqqXZ9Z7m",
  "key21": "31FgSgxv1VK1DHzbNyrA42aViQPrQQRf3ykVf4xLQvKjby7zS2ioGw1Yb2Dug5yJMS5ppynSbNV3GkfjmhqqeDGt",
  "key22": "2NiGm4SgAn9Axx8P9ep5DBKE1X54W8tiWvcucXo6yLXrz898Kp1KuC88eq3eeeZWFw6s7VNytMQpkWPdqmwUyvcP",
  "key23": "64BF5bQHQzYJHjherK37DerD7P5tdwny8STBYDZVxvhsvjM8rFFQnqRHhSgt81UyRj4izy426oQug8w7C5iqgj8G",
  "key24": "5hvyai7RkaPpCZX3LtFWuQuvMpGDdCgCJfR6knBp33evfPHER3gd6pUWApPrPuunaC1B89j1qAKnn1UBudJArnwi",
  "key25": "2coaw9nPUpqaD74mKQJ6afrgKNv4CwuBqMA7tqJrZwjZgBgptGz1t28ub1wexhiCehgVqA8PzusGRABqHiJgeVti",
  "key26": "3QHALdZoSVxai9Hjm9CSEugpp2SqS2hNjTa6CD1AWmf3A8GfeiaTdDSrsVUaxFauLKZjfMEczqsqJH1RbxqQqjj1",
  "key27": "4k3HTFtAejePUN9Wqsqe5a9wxyuaB74NPG2NRT5JcNQYMJUQUGfQbLRgtLDiqc5pqqbk9VdQPZch5mzEjtwcQLcy",
  "key28": "3khMp25xu7P5t6xSJdVwvV8fUccXpZ8DMS9EUtGGp14Ey3e7n7EcMfsvEyYsVvPDF3DGvmTWrCCtgj4bXktsY9YF",
  "key29": "2zJ4n3mCSVb6XECkVUZLbmqLJt1orPnA197ECHq2HKke2arxLThyNZg25bRtBfNrCA4EECwTE6wxoY2DPmqanSq9",
  "key30": "5Ckqh6am25fMbVutNSMnGcrBFT7ac8jBTFmgR9UB2XCb1Z2SKLyGQWxCiQfuGThvJdqGtdbyBuzQdifScCuaCC8K",
  "key31": "4DUtkzsLxk4W4NAvTmpvAEGRvFwjsCJ59ni4jZmTDeVeoeJ1XpDK48e4D8sEuu63rGTDS1rhjjTxc1ouC4TnpGb8",
  "key32": "V4ZCUiiYVNQ8F7wCYkvhWh5YvEnFV38nECMyc6Ldgt8ZGzeop5UUvr7VDBr17QHisJr8cHLw6iczXwFcqRUHSeQ",
  "key33": "5uvocxmF8EeW2wT7qQ1DpzYras4ZcwtewuzF3S2RN1haVXhCZX2keyemTAEbBbEKqKy1kWva8f972FjhtwGbopAQ",
  "key34": "4CFZ3tQfZ4i6tFbAGuSC6tfXXtq5MjNoBKFPQVayiHvNrnPXxGZmU7gFpWceTadrZsBNStf9TqoTLXLEzVfSw5pf",
  "key35": "3CJJDAfcReWgcH8MAVD14JqxoHGXwCHScWwGX1DZNp2xJP3NHCV3WxUjXq58y7Cx7bk9iieSmb3dhEtzTzim9Wtf",
  "key36": "3pzPKJ4Vh1si7x2rYWJauLgU5RGb79vYyc2G5ciLXp5emhtbQHwRLMFS51fXPHYf9Viwt6o4hDofZDP98L4W7EPt",
  "key37": "5cDmw4wriWZAPcrdpb4id2e5vNf1BPwBhMKvjhZJEXaxwFVUqyL8VEdmiwrkKuZx2BCBEY9ySFoFw1uy2gtaZP5b",
  "key38": "3F6Z6NDJ7jhchK79piDzQfMG8vpmJpF8nN7jmEskzEeZK1ZHPzFXMDXYZH876gHG9QEFGDLtGutSTNnLfTNTKG4Q",
  "key39": "7JRZCaGEFo3nSFL4y3WBhrZtq3gCkXxmbtavixj96UDRV65XCP5J7643NipmxmHSVsT4HuXdNaAQEfr6hKpg5br",
  "key40": "3FfQhe7bjqbpwT5ob4rvEmcLbouSofn2a7CtBgFNedHmxHhFsCy8P9DqzvaFxrESAutDnQWwa4D2sXy5Zss4MDJq",
  "key41": "32DJY7TYGiN6hSZUzuaznTuTZExqcvUi73EvWfHu6wwmeekbDysyBVUXnTcg4FbkgNgN52T27h8VvkyA8qJFFcFb",
  "key42": "4Mxo4L3XfSBLcpqMV27dHWieJ15ijZVLrEauxFLaSboLAYLCJX6DLcg4MdKmqJU59mksd8BDeSsLYQAFJfbAsmRd",
  "key43": "43RAWW3xa7nC6Eiedi3Kbv8eFEoUSCWYPx4q3rduSeq9CSijctrEZKiyLQHS2QZQvXvb6SX92gEovoNkGpeke9oF",
  "key44": "2xNi9Qbdgw8HtvXMyVJfVdqiqCiT1dVQihqnMemAkETErxgR1wjApGJMHQpA4TT8Dvn6FfuwGGZV2Z9x2ZeKBXpT"
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
