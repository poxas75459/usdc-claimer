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
    "3iK7crf4fmpmavNz3gSmcuYwdRUycYmK42zp9qUBRE867nhQ4iZfTboqFbA1DsLbfeR3mSXmzJZ2qqbtZQaup7RU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56U9vTTtroVSrQanGUcNU8GakTfVqDmjPZbyUEU12FkamKAhVTwCsKRSpHGRa1AmWSRHj3hPnDXkma8YtHBqvhGr",
  "key1": "37TbxnFRGpfGz9H3mLnyDq4WBsqdi1XNoJytpN5ZrAJFBqDsLLr1SSLnXooB8i97NEGWY7ueJjSZHdWLkc8wm9sF",
  "key2": "spsQ7E4D3ATDwbktQ2NZ1P5KSBE3AX8AVJvJJStK2vp1k2KM68assz1KXZtddWufHtBBm6RFFxo6fNPWmQSv1ZN",
  "key3": "54AHrpqCaE4Yjpbk1jR2ueTtH8LBXZdkaJtHWrZy7eskGkDEGEJeQLbPhhgbpjv6iD3S4z98RHtveq3RU4xyUstk",
  "key4": "Vs9698djJw1RZyt2QZQeihvKf6b5xPEH2nCeEed64UWLqY5D3EXgVkGeYHcVMzCoVjm7KzSfwSStFmXnyYuoMYR",
  "key5": "2EySXAa6zR3BWeGXajeCZo11Scrxf9Nr2K131RosRcxKEut2U95vzLjrQJJuLRbnBFQHudPeGTPXfGqbhwMvBf1v",
  "key6": "5b2Qhccj2XjaNmk4Q66ff72jk1ntS41xiogZuyBnuzABrjWRpxSYqwzk9FWVnjjzB57cCypmnzqUQdrqaZn5tuuJ",
  "key7": "3sRhEwoHpiaXUXmKhuxrJvtYCwMswNjrPj49KP8JxuB2cDfgng5dykV1GmS9JmaQZCWfoSzYMf6ZhRzGKwGSy5jg",
  "key8": "65H3RLKfMnnJtPRony6s3moKuz2xSJEeXrYFfPo1aWzB2PMApH4Zg1PSkRQabrJAQPj4qoU9UwooL5CPokVLn7CH",
  "key9": "2hLhfemqB3SpoT1thauwQpSqYCQZvzQLSYTr3ad4GaQc7cn4erwF8oH2D7UXJw8J88gKDUkU19nLLqVfmePaYSuu",
  "key10": "4GeyCcgxU786GM1MnXgV523gLfPCtrz7yc8diWMNjDHWQ6RhAm7PQkW4qPoXRntUYYikYRRV5ucx1aiJPwi61zUt",
  "key11": "42xrSZQTnJn3hMsYCP7PTLYJcNamAY4d279RUXrK66ywsUA6YCogs9cQdxZ5Bbihx55WvManBm2dQoe3yshFBrRe",
  "key12": "4dErB6JguAcDhwiEPDWWGGtDUBgCyvqyV5BZaYs1P4XMcmrrWAMqDyZRqAwa6raW5J6TFdurPtxDU9VNRF81SGTN",
  "key13": "2kw7Z7gUs3NGW3rjAaz9qMEhXNdJVq4M4Yc1wCqaenLH7wJD17aYGuJFpa1YiQ4jPbKE1xEM1oTxEY8Ao2ANdnmM",
  "key14": "2RwjrTqqPqvi2m5TCgoY1ps4WoGet9kQMt8dv4r5hnqUJUEszPBx7hm1ucBKQN8Q6Rvw482ztHzHYYbCgyQrgSX2",
  "key15": "3d2mvSNk1pW2eTaFStqhkDFss4KC9goEMDmSKfUPuA8bhMWhH226snrTYKfKiFhRwd8tpmFtfrMnPev66u1etFZ9",
  "key16": "3PKhKbEenQJ1P9kjyfMFwBKYExAcUFpshjPB8kPeyX3Z4ma25c3Cvp4QyoiGMA2Td8FnYGLLj9GMDKANeAiPqJWs",
  "key17": "PvfoDBCz2HHf6nSK8nVGb52n98c74HoDXQCNpBARh3pC9ZKiZPcq14DjPBCE51gzW3qCxjbMHyMV4WnmQPtfPJ6",
  "key18": "3LuUuLtzFM3o56rp5EUhxNu97fq8pLeWUeq2XviiZBSgjKJZ4UcZTXNJRMEqhLBjET6g2W5zv9meKkuu7PSTWvPW",
  "key19": "44KYz24dZy1J6WSEEDTQR5rZLM3we2SAAC4MjkTiBKPoptE1TDrSqkC29bJNphrBqMN4gm8n2MjJZfk9epMjZhy3",
  "key20": "4CXEcgE2jnHPhqp6bjDK6bV87UtYcWh4kc7cDeGyFZNNbnAMVGsdwnipwqSrbUArEkU7ig1AtAR31mNX3zWYFgfB",
  "key21": "4ZM7aMYpKXZbVSnjR3A4VGagUAqSJCYEj9TdHMNcx1PXPHVDTdcYZJzmagfzk5F4TqvHibgmyDdWDaALrLU6ksYq",
  "key22": "5yk1bejLry9gy9WQWnRZnaEwx2m3XskHotb5FXtbd5EBLKVtHFpPYdVJVdJDR5djBWxyxacjAuV7v8ePY5zAPM5v",
  "key23": "65FpA8qBpi2A8qKN8U7kzqGzRtANa2UHQWCh44kKhB5pyTQ5udLr7eijZxNWQhtz61sNsYSq7y16mVuaVYTS3HVb",
  "key24": "JciZ63R1WE4WD9prj1KynPCuy7AwG1Cg4DSRL2BwsSp5Et6Gt3fdyKgXPLahQXQnGy6GUeZ7vHJsDcPUE9rFfFL",
  "key25": "kX4MTrgL96xAH4sC72ZTcm2ZMNjmDyQD4PF9hVx2pzyEoCiJ1B4nJukYQvircD1TcxyXWp8eBJC977nkM9EFAs9",
  "key26": "5YmNUx1dGv4wPieAutiNXdvnzA9MDiENVdCG6AVSVvvgjvjhpfgZeQ5jSvvANUnb1UscsEgxX33op6Q4g94zvAmC",
  "key27": "22qooZM4ADta3W89jg7d8ZrruSA6smkAqNCri5qcPSYDwjREkZtwVBan78RDGx1zdZ4dvWGXZgUfGmEbZTXHa3K3"
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
