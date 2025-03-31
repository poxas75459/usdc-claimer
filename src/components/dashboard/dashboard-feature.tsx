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
    "5hjQoEcTYzABE1tmwrYEq2XmYzbGrdoaD1eecVvcNcoE3jqRKcCABDs2m7W5L5zxM3NUA9NUSRQ3RbXGPHrEcBff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aAp8uE9nPdEWreyxXF7dn9KdyzSuwiGvvoBjNtofoZ2bPDbD5XhhFi5f5q4n4ZMCyNhXmTWGBo4jLvQHttq8Gu8",
  "key1": "4kbA7SxVRUbvvnK7Nj21uKchNMnoci2uti3YTrB9XJ1zK3mLkWs1WxbppJ3toTuHh1RKfh4CfsZN5QeXezAub76S",
  "key2": "42VghVM9YfwawySHzTLX2Hhzq2nSSWUi2gLbJyUqXuD7wWB1sGUvFEcpJw3zV4pAv668s2fet66w6XzJPqBPW97C",
  "key3": "5SMTmWc4EzgkXY2Do9VSDiwtFWYmUVyVASWgfSpCWV7d2LDm9JVNcdVGLKCe53zZt3Lgur3D4KNNSdzehy9pAV7B",
  "key4": "4f1m5oSqfmUs38Hk4zQcXGdUbpSFpW4J1QbovW2ceCzujCSTbyvtJgJo7aeRxC5WmLCg2LjkX2i6XJiZR418txty",
  "key5": "4yC7YuTLQW8hgQEQcaKamSQQkjJCdGWYrx2cYechjsz715yESbMoMd7S6ku19xdrP8qXR9gkxnoXzR9LmjyptpqY",
  "key6": "5QDg2e3Sg8szRZvXxZcAJnmDBPzd4exYZeKVbqB1HBjiCRGMhUJAsYkbnNdVeLBxewsnWVL98CSBfsBcjT7i3Lgg",
  "key7": "4auwQg2HvqhEEdiPJYw7zWhxCUvqf7QsTKk45JsD5LYYBfRjyAB1aRsWvwRSk2sEtsjsTQkW5pBX9fhokmB2yv8n",
  "key8": "5WW2jKV8rwTFwrnpWfz4HpYkhvyF1xfpZtgGQPoN4eEqEmMqAH5R6QoPf3DJtYYj56RFsmCv2cGhVtG1qej17FYX",
  "key9": "5yGTWgACchHLESJPa6ZSXVaWPZHRTnzzmQcBturmk7UWykDEQKe8qwesacRRYQLTsgWD8WeAtnjUbcPNVNvshgWi",
  "key10": "3bYSyhHv9s5b5ZzSBUFT7PvH3LDsTq2F9UJMB2DFSE6NuqYH7eA3TFKVNR7wjepr1VQPBVzgV7YhxAsTLBMFo4DR",
  "key11": "5Q8vrSz5SPp2jyrg92BZrfJG5YCt39KU9wppNx9gwrY8xXNeD7teACwY2C1PrAygNUuTeVyLHzZfYCDsXh8FgUSu",
  "key12": "2jb8ctknZLeqSXiDXAhFNrGruZrKFi8tR5CLJfkpxbei2adT3Kmzg5NsEwnsmRAMuaVbg5FTosoUokxrBRhAFZUb",
  "key13": "5MAvySE2KyXakEi1WoUQPVA4M6EJUsFvrnyXd872Uyho2n7AsnHMPfjferjfXRww28Wjop2StgjhyozFLjXNi8XC",
  "key14": "3HUydbSDqft98hC98DJFLhBee9iLUQBL4vQ4mvfYv3fkMzE33P4rimyEGZDrxvwjkYr1QDuaQMYuPbSkVw9erpP3",
  "key15": "3gvjbpxeEhojD3QaGCd5pkuM9TwBkN7h4DKuYZAaGxpUzE2PKb3RKWFQDqtBr3xKMLxnvMrtqLGQ6uhM6TWkmjfY",
  "key16": "5HGeNTi6TP72oQQV84utQnuyc8cm21YkFBv2osWJZ5BCrLK8imHdrHqcNVnScbMU7Q43ZfUrhPZa4byMKuG9YE2v",
  "key17": "4Q77C7yEAeFck4gwmJdQAmSLUAZLYTKaXMp3xaHDegHahSQRaHZcaEuzfkRQF8Xjf5XvYK1gx8GSV55ZrTqXNoYE",
  "key18": "pYdWcTx5xifZEWmTF5vYn3NgddcNf9vpQLeC5oUCd1JPLFiFNrrGmQhPZ7t3S31uoJesj7KUHDToXPegjaUi4CM",
  "key19": "4nnTUUprvd2nPfVMHVZQKND5mKQ8pUYFNCbfFHJT2te2bPmVT8x5sWkcHrGPdCCZiitwDWHG3V2nFivRGaN8Lx3p",
  "key20": "5Mr1o4vcoKuTyf3veQwoUMrhCvMcjberKyMwaED7vLeYQ89NtWTrbVDZ1hgsToTtjfDZ4Tm4eMq6rgWrkjDdVWhy",
  "key21": "CqFqZa3Rf5Aadd3Zk87WxCwdzm9Q8PYwuC5geiUns7ivoDQkqFA3rTu4t3Vw5f2K6HY7KmeLULTV9uTv5CqJTBA",
  "key22": "29ZMW1epocsGmvdFdaFqbCvAXvFH6kFAaZgpKhfVWdrE8n9MFMZXULX7PwstFBdiAzRMrb1xXPmHpghRduMV1QRP",
  "key23": "2XmBtGeRXhFvqb62NXtrLrG9uvpGh5snycM8DYkD72R6EE3UQPSEYgtxtYuRqiguJM4NDU14Jbh7SxGN8AdPRcZF",
  "key24": "2GtMtD2XZYZfyZHnunpyTRC7jCX9W3gUozstr5kJ8CPgUDWDVuVJxBfYevPFHmVwAQ5F6SbQywZmedNG18Pu6rwT",
  "key25": "59NmCQA1pasTkCKcMuEkZ1C6AbdpVgj86rx2jMbKnK83KVTjryPQLKcSaYd75brLyeayayNb3cXHr5iAqZLVUvea",
  "key26": "3dsaKGQVHzMsZ9UHS8H1F5wfg9ETnefD1qpVyr8C7WRjUfQ61NkFhbe4TTquDZRe83sd81gtumN1YWGcTWRqzZ8W",
  "key27": "4usFjaxPGGr7GTGEgCXA2ahmxkkJUL64cfN5urXefmf3dC66GoS7XPv81GZYH7KaUohFYPnsNipTYMRFXGv2uWfQ",
  "key28": "4gAyEyvwH2TfrcSrS5ft6kVpEYys5x45RyfYCidxybw5qZCHCfWn6sA991dSZda62SkiBtJQLg3neWBJLvzkxeu9",
  "key29": "EGw8kDCSxFoSQ8ndZsPnzzjgnFPTb6AUGPo8zT7rDPa7tsza9nan9CnBQKZ6hv39TWaHz8ixvJPkNvRmrgDpMtz",
  "key30": "3gsRbU2u7Q9HvoDBJ5E8oo4A2xGTybxeS2VdQyu693EdAtU6SFeA7a93ag3m21pzkwRQnaFtPcwMvqvBgbz7rhCJ",
  "key31": "R1sekq9i21rwgVidWud2NHqhG2LgToopVzoYpVzUgZLVsnfEuj7idtxVo3DzCUSmtFEu9P1qn8Qnmwk2W1t99M3",
  "key32": "5DLsP5ujZ3Hf283YQt5GBmYiepHsmv1BPhaCBumPyMKMxvUWSbuKTKLZ1TLmG3b6j7hDCEsfMBaP2jvFsA1iyEqK",
  "key33": "58UgdcwXdG367jEiXcYx1UssQqTCD8snQRX1AFXGF6GiQvmPN36oEkWVFgZwcVUrFLrjU5spGqxYjN7Tqk4pnJq4",
  "key34": "5WxA6EKXTQ8GzJk3oextYtaJ6GFdxjDxTP14fcXh28Tx9zcH562qwir9NSpRHjzNG2QrPnq4Bka3ZyDtUzAHNjNE",
  "key35": "5NB275BeJMJpMTmHX6FyLPPzGufFVp8XULFtREKqK1vEG8D8gyzuZDnDktB8DtVF4Y4ud87jmz3ts3ssPDg9mxW5",
  "key36": "32SLsGSBd1HCkN6qFm57JixwspSRsuLh9sL6YYrj2j3MArAQMXtPRj95jNZQkjcuc7PG1kcsC5aUXXBrbyCTazNt",
  "key37": "5mWE5UBHfzsAdo5DcYWi7x1wE3EHsV8bGH7RgofuuhSfiZvXnXenn6AH33UjqKQo7CMUFy6AosKLYt5sPq3afrEi",
  "key38": "3hDQmWeoyhsr7k1fDiGRcJd7ie9YcRsABNncRo85NuBh8LMhVfgTpfwoQwqRB6a2W8w92NqkNbo4p2QWEveFTWjA",
  "key39": "4oEMavFxaq61BjDrMaQHFnF1abnrVBqYXMsbc2u3xMy8kHdvmW5roKDVghYSoe6EVqZ2qjhg9Xac4VN3TGJmuNuM",
  "key40": "4E58mxvWm4aQcLfYN5zQk1PeSF5Dx9KDx1dockx8yqrwTSo6fSG8hVfSBxZ91LuMXtfSGr8hQkH67Ut8gW3VrAp2",
  "key41": "8R67qGNDtFqr8Rdd5dVQ5jDjbYvygLvhhUP7ABVfvdEHPEspCCSWBidiFCjiogzKzMuWp36tVvPbc5bzA9MgRN4",
  "key42": "5hXFtqVNFisJVNUDbDdFUs28J79pX6ZZ9AhFxfPUVNqbnsUNhexMszbFLwc1z3xyjZBiXSMoUh6meiRzqi7Xcw4C",
  "key43": "48UaZ3n9DSbwBLdgZRGwVvBRResR4BhZY4wJah5wdaXmEF1Ug1gCvdfFzpKXUbbPieANzjhRc5uQapKbsYetV5aw",
  "key44": "dwnVmwakExuHY46cYy2XuBoQNKA6q6Ke1tXqSKsegsnFiCBLW7hGcBn6Ux1Py9hTgFweQC4Kbzob9nYznMW19Wv"
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
