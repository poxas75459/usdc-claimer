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
    "3JiddD6HUJ78ydYz4iTqn68Fe6juEsocUMVShgCnjoc2a8C57CYFmvZYjBaSNQ68nKayWnSvCuFpK8rop842fXur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bPtZrx6Y7V7zc6GtBuWKdnyQ1bF4JfKvAqebUk2KjGRWEGXtz7uSdAjueop9nfrxGhugPLTuRQvpHx8Z3tWVKza",
  "key1": "3YGsTKc25czMcRw1tjSkHVnuGesp7yMHasLCBLYwquRssP3GT8AnpzC3m3g271U91LKFnS8NctoVitz88Ft98YG8",
  "key2": "2sTLwZruQ1SCgzoze44e5RQfMRqSEfVLxR9ZNsFFoA1dxV2YQsd9BDJapGrGsyxhvtgnG1Cb3e1LLoGTAjppSUQo",
  "key3": "4VnAmH1EPQACjRJAQkFFNJGXeKADDSGkjimoxvD1x23JBgW5Enmwq7MQBKLAtyZrw4aGBVuxAgxRGgsjGVwA28KV",
  "key4": "4nNWY5GStveZJi8f9vTrDkkEk1zfPeDyy1MTzSxQ489e1a3MuACqWneabgXj6hZwBW3aM57NeHdFqTHFDR2H6pVa",
  "key5": "5feB9xFmLVYFXWLbk89uzbUmQsfYa23aadVXb1qAY1LfaQpmc4pSpu89Cci8ezxSu3iP9RTueTJBpz1mgyJREK2i",
  "key6": "5QJccbYgsBVC16vsFTNQCHnD5FyZxpopEUYi3jsBJabEiUaGGG8K8bfsxoBTJSrfbRbFaMUi8D1L7QVZ4jUKw3dF",
  "key7": "3G4VJXWUz8toR1qux23Rfsg9VyV5UeBYxd1u6rhmWVf85pyRYVRynkrGB57RTDwsDXut4Wz7yvfpuK9WYESMK5iV",
  "key8": "5ta7QfVxAS1dgEC5sprv9pKJVUFiDsUBqmWi1FFDrwsw1vjSTewkMXAMYhvp6oWHGK1C2PtT8xTFvijJhfvFadrC",
  "key9": "2dmwyTgfNE6titdjMEUCz2Awg5Yuyag7fnGBwafJgR32pBYeJ8h4NL2hUuNpFM4qFZuKayJ1MopQDhBWghSPTL4v",
  "key10": "595KNyhzjsTJLisPcY7aJF9J9MQdT7yRtYvGQmGs6xhUsRXyg8qqeD9jWFzkD2bwMi6QUWvqJL9zG9rgWkU5Dwjw",
  "key11": "3vpqcvyByMN3jJ3MWd4NhvFiPi7xk4VcnzrYvP31zau4SZthNVm9HwAr35tU3Ean14WWqzEmHARYEQMfPxynCrmz",
  "key12": "5ryAc56QH54QJMBgKXibrENV5j5Vgqb1318452eidaaqo4Yp6NfM1SDoJfthRB2xghAJqe3fmrFTt1mSNviWDnLu",
  "key13": "39c5qRPc7DwX3TjUrumRNM3GSGBybBnxrLfSKTiF1pYnvdZBXPkaaCGBrJ8bzEWffHzZbrZ7ZQnjv1fSPqJKQ5AX",
  "key14": "61bUVXNwk5bi8SeajobfRRz3Z92rmmdpbxNHbeCQftxk1n8waYWhSPb6eNHsooLQwYjTBR8NMGAJJLef3XjA8cAi",
  "key15": "5CvMZwpRNN3PHJkNt5oV2vBK1cGZuoVV9hYpkT391hMda21adZraugt35qPnH5t1GDjYnPAUXq59sqHJNQvfQyXo",
  "key16": "5WigZbLxcuFDzmBSxPDMfGqfxryRSKEp5u9LunidnWyNQG8cajfXsdPMVsjs7djtwEq8GBYaAPHiEMneLmDyT8Mw",
  "key17": "5ofuszfQsUCkgNNVczwq8VY2z5o4kXonbxKGFao3Ywp3YUxL2kQnGPc5uBT3judaq8JtXD5Sx1JNnAp6EktRVha5",
  "key18": "5HRZxZUEUyRFd2vPkHwWWGrZDCSwXwo5N3vvusX6X3kUz3djhv1ikKx2zc6qskYfjmQvDUzL2suyZCkM6KrvY9Z4",
  "key19": "RyvgyTTecUoUpRyDybcrtka5nuYpDK79HAdM88hUUfCJpGhEzByvifMP99W9iFogwWofUVxzqsLp5bRH9EbvBxY",
  "key20": "42NRAerpcJpdAyFYsX15AgKacbcAHoDCwPraTySc6LztSEWzZHn19G4EJcwvp5ncBZK54C2cosUkVk3Axow9Szpk",
  "key21": "WnCCZwnqiZNS59ckFtumAWgFJPqX1U964WQN6PSByirfTpjTYsLg976JJRk4smhaaSoZqMj7LNdRpRw3kKUAeCc",
  "key22": "5MHZ65w6V6vtMRKZtx1YkUTQ34Py21QWrMy7K11KUzy7SAXuRcgZ4eR9DpxNkKd7U6q1dDCbdv92dsYJ7FDL5obN",
  "key23": "36h7HkndBWR2mj69CFfcN1DUze5Xv335niuq4NRPRccPx36SNxqXtuFkFuaFvWSADGoearVqeaxSFrAwbg9NBDLJ",
  "key24": "3CeiujrdhDMdZvBo39TMF4jsdNQrKo43a8hfQouzeFfBXYhXQa6U5eoZvs2y2csZprS95g3YBkiQqvhGnM7gdB9v",
  "key25": "2UZbToVGFiSeMUTcc3ENzU6hF9GLj9wB6wyw6s9u2ERQo3RswpEzhXmkYTmsboov5VHWV9VqDjs7iqKM4YLrfkk",
  "key26": "5P32WUVE3ppwWUEP2nC4fujwc7dPMXjSj71zsgvGc9UTeVw1tibX4bcASkUZJKUzjrx1u4neHFH49EadPB9c7iL9",
  "key27": "58eKDQRkfJKAZVszwrW4nbChmSpADEoT9vQaXDVjgLKg79SMeUuWCZiygoipCKPEB3mwX5HvD9yANE4eS4RWL2Hx",
  "key28": "5wAtaoLi7AUUuYiVTJY7zvwEfxTELExUtry7qyK5q2AUyfZMYxNZojjkTD2rqQ1VQEadhbCCHALPhY1TXoA3KZu3",
  "key29": "3WeebC7ftXyBbaotnVtKmMz6oofCDqXP4SEtwchsZEnUTFQkeT1qPhqCZfo3fdqWavyjiGQb3YdJ4pRcFTpD7Dk2",
  "key30": "5aUPjesY7pdTrKU3jUhs9wBiTGj5tC6YTqhABnD1FLFV6bna8bocRUDVy9s89nxHD9vxpc7fnyFt3sMmYCHvBeJL",
  "key31": "2AFPodPYNYsgYYRjqTYpiLWKyr16dFR2p32ornvHd1j34r6vmx3XS4hmx261dbyvY4K8csHaNiDiaPZh3WwiipLt",
  "key32": "4yPt96wdC2L6VngiG44psVRHzemv6bNucWhJntfZ5zdhdFm1aHDnHDgCBWNe3JShbAS9yJcFMyK6zY23LrZAFn3o",
  "key33": "5NV3uGWpdBrt2zS2aDFnoz6GnD9HNAXjUEKsF17xKFVfyzWGdqHQy9aasbZHehkWMHtYmDoogxJEcjVkVLpe8sxW",
  "key34": "4YBfGCc2REb1JNcmpDo3gXbNUzTS72i1zVYPqBLiarYiJ5rW4JRBHT6wsELwvXGAxv6FSPaGuwxAiSzeFDoez3tE",
  "key35": "EYhLRj2KzAcLn8N2kQcGrevJm5c8594fiiGTTKKUNpFe634JebQMWMRphM2EVtbiBJGx7BhSjmmPaQgSZRWyLJ9",
  "key36": "2iQkGnXJRCkgonPX1kktHMERgHb2nC1a76wNSzKuDdaKYHvhx47P2CUijhcq9Ns6LYQ8irRhJubCVF8DqjhdGVMe",
  "key37": "YggZjiCwNPCiZb64BQwd1oR6o3mQvG5ASMy4Q1j8Rwxu9zta2S7oR32xG3D6NY7v7JsZK9kW5fvjgwNCU7QVSd3"
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
