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
    "tnN2swTRRGz58qBLPbkx1DZqrqFh8W4UhwKmz5NpE3yrUskavwpVkFZwGWWDPWBBfxwex9EzY6ANgbERJfATBzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tCHLpAbhNjUVnK9vWJR6eCSf9Y4V98wuY3XnAbhj9y193H2ER4NuyzSNsXcMVC6e48Wc8wPLYdzfjZqG2okbySH",
  "key1": "4bzaDZ5k6CCjz7ocGUVaU7cogjqy1imTCL2t5dBa3mgoZLuvsMUnj2mwcM9prJgvtfmNQk89pTWn22MuzBqu2dvB",
  "key2": "2Po3oagaRzELNBqcXddDPHwLs8LUsuMb4daH69ZM9xBbt2y2A8ygqsLLt1Fqn9LJj7qgy9W6M7D8nUbAQgZqF9eA",
  "key3": "5K3hfcFVqn6U1xNeyLT5iABHq9swnYDVXagHAEdkzpKuoKPKVTqRZHmiAnbMePBANRTUajDjjoHztGdQP49y69No",
  "key4": "3mdEow9RNkp5vaa5CetwPwX4XWjNEppno4uxiHiYcJjPmARSddbEcZGgtX2xUbA3Miuv1o4VeHxXpg4RSa9ugCkM",
  "key5": "2tUe8hP4MxfZntYqvtaTa2gBVMuGijEzNZ2nrpL2fgE9Mhn9xPRAeudg5A9Ahg6XgipnghnDJWJPw3P4umFxYL3s",
  "key6": "TLXZWEGo3Jx9sHqK4UmHD31m7qTowcHwNomLcoQ9nMjDZUxytzsZ1u5CSrBU2kWBxh7ELddLnt7jc92mh2VFSu6",
  "key7": "JhLvEWfogsKneSkD7ba2EqGQFTGq2uHBnDUNidUnzoKDHh3GMTzoTkPgKoLGjA6EuGELVyZWTtU9U6zyQtqQq7d",
  "key8": "Z5o1U92vAjhfdydYv1QzwtCNkHGbw6at1R69peqZi5jCy8sC4XZwUQewUsquXjncnzP1VcFkSrA7sbD4rPgAeJY",
  "key9": "4FBhUXfntPvtP5DsV8Vj9qQ9izwV66aciR83CPRRu4rrSZ26F8EMfEBXRs27JkwvhNghwiGaFvwK3oMymWjY3xjk",
  "key10": "3dv9GhgXbaEkuHZd2RNdLe5qV3LZxmxtkafeVjEDLBveosn6pprgdeu5voUvAJ7NLwpFVjGt9DBsG9W1CKLAXqSm",
  "key11": "5rKKqT5kvq2tvtbvAt33MMSFdpwy7T3Z9mkQecH3c5UbKMgSHEFqwU9F8YVPysoZNaeAbHsi1AT97ovM96f6pZ2e",
  "key12": "2LvSJKvadXniuvZcAtXZXX7uiaZJ8qek9hghWu5ut46iCbs9Lzjhxj24eTCHjYE9aPYF3xpTbXDSfc241rT3SxcK",
  "key13": "33RDeyytv76vwiHMn4SXZqyUX1Su2hDaM7vzJVx3GrVh4gCfKgc81u7tg3AFvd8kbr5yfhnevm6K6EEpvVAMoYik",
  "key14": "2Q1FB5haZVWQMaW6KSA1VAnTyoybLxXhAoembKiDfCLveeMHdJTLDkV5QaNTAxxrYYoXeFXe2K8a7HbYT6DVQAu8",
  "key15": "49QMDZbs13TvBzFsQKJCo2kTbVmzBcSccaJjF1JHNYFsCsj6FgS8W1SuFgN7pcNf8agpy51tNaWNC4AU7eTULKxE",
  "key16": "3amtSCbJXQ2uZ7Y7cdN8wHMUs6Hiz3YAmZge7LoemntD9w5FKcR77eFr36dcLb62j6RppZrWSzcUBJjKypNj7HeW",
  "key17": "2ezCNBMfvc22spvTZz3VpEiYJ2P96ccejt4Udzp3xtrAhtPKfZurL7pCs1ojqVGdbdkVUULeiYAe4W16wX41Rvn9",
  "key18": "3cVgdX6CW7qYBUhHVGF8cTCmzwZzNQhrQpfFJ4GNwJFCeTWriDVZkyBjfNp5pJPXJXnyT9eSfktqWbGhxqSLkkRX",
  "key19": "5JPDa6NKmq2ifdLpdprwRC1rRAidspxo9WPvfDuSeNUsZRv4qwfYt1nCSvN5kKUfaNVdsPwxTf664NY1RxCw9DmA",
  "key20": "3iqrKBWH42RM8yYAvxeZPtsottGonG2voh9SmaM7h59ETvJ84iWi9fmytXRaugvrAPZ5MhAP8zQuY5yFrfgLq8Up",
  "key21": "tUxE45xroWT4YCxp62ZHppZwEx2DgkV7wzBbYSiimGgm8KGnN6CT81K4wxFaedQPVcXCRgFZjj7WAdywkZHdpff",
  "key22": "4KLd6q9Knr9D2GJquofpkQj8ouQ1sGabKGp8mm7t2bgShzjHdv2NzPEZNaytRUUTfFQY9FVMZaVWmspQ1jG4iMac",
  "key23": "4gUEqFjk74zdnfQHfeLP3Pcs5W9icsNgDLUYhKSGfHb8kQwMZAYwLoRQ1vyVMDPKGdKurcMiZ2Jp4Dmf7XhgRsJP",
  "key24": "2cMtYLD1zHDQ99SVrYNibxrvv59RRsEjEBPs6A9xWnAuQuxnydr7Yo9pEwFcJwrovv58yAhr5g69EcJCuwoaHg7z",
  "key25": "4E96iRpWiHm6igu9afiXcyM8ZAqGmRpG5CYXhpLjf6NzfR2XJYXZBbrWT6GLbRnG2CEgEAMP3Nr4yzd8e8DcTkDD",
  "key26": "CQKHSei3mNn9F9FY1rFxe1Tx6zAstWgiRrb1NTBoeZ8n98hkGgi6U2x6FsN3Knvsrd6saZWN1AQJmbhJKNHHG28",
  "key27": "5DbAkWasACT4wnwWo3KFoJjrCMoNz53B87tzncVqF9xzz7ucjVBugjrwrmBFsmr5GxEh8SqeVdU9KymTPhW5knmd",
  "key28": "3JtaudogYDutsmRCT6hRnamNJnd97xywhb8WZouqqBG2ShdHTPQDJT3Y3kB4ohttXp2XuhZNZ3rGoiLyTxcZdcq7",
  "key29": "2b9LJqBtYZ8Uas7BQpsz1vYHaojStN8KpiMMQQhartSkviHGrRsA8LD7VpQigRCbjkAkkSTky5xFS9B6aWsrT9vc",
  "key30": "31yVqD9VenPBEyEbppmgFh9NrF11qc63Yg41NQAaL9SVYJiWL6CaNqhPbQhoBsXsi58KbQbF3nTmz4C6dc7vyDML",
  "key31": "4JmCUvRtcLokaUvrkiY8uePTwoMWbt6TNwxR6LJqm1fm9PZSHsCZPaaQMDY8MuNDHJWPheELfRS3X5tdLTzRtAJg",
  "key32": "YTzYU2ApsYYkfdhnLmZ27qWd3QXNSmz3DHBkxsoFptg4uY6ecsbMN48LuneT3zHg2FwQP5A9W4kVokUAx8toAk9",
  "key33": "3xYNtMuLSxduzbvnyZHuJMT9xcHcVhqTF9RCNjjVqnqYmnuMkHWdxCjCyhgS3fvbFC3VaeSLbf3mT87KLdiVJppr",
  "key34": "3CJqNszCUsnci4ZVudq1WtpTCqwDHWVr9uXVtcQA6tzcj5YvaidTg36UCfjpZtFqu8zgMWyovkWTQsPAanh7XoXu",
  "key35": "5PuJn54ueQD7VvnRt2euXg3hmk3gDsWkfZJEhWFMkoXhD1xktNHGD6RcyZQTWqhWWxTtECcrpLJGMmDqgA6GBxt5",
  "key36": "56yCt7WtfUzGdjE6zhXNhEiDTq2m9YzKhCy48cQnmpBWGfd39QcBUh3aszvdPJD7SX6qHnLEsTKhaFx6uyQ7XV1F",
  "key37": "2NPKxL7LcLnUFNmCugTGzt3ntQuTG7WXAFADoia2zmYHfzdETuCqkvosNWc3dnp2eXGmaRAFojzq8cqYAQY8PAwz",
  "key38": "5M6H3qXoLBq7RpwatGTSX5Kn4ZVbbck9n3WPXG1nVN8Jc2aDrSoxgNVLn1d2GyMhTi75YukGghmeRN7NoG3vAVfQ",
  "key39": "63Pof18ZKAKTayavnsyWpKmVGHSu9HK7VAwZJQ2YEZvd9bGCDdLyn6c7A6huXVRgBrUEURPV8s5xdGfk8icrHnTz",
  "key40": "2JZn2WUcS38MyoyTnaihU2ej2fFpZCYvrB1NgTBHbRn1t8ZCqAtNCBG667iBLP5L8XzLCr1MfvoEazxRA2eH41Kd",
  "key41": "3P8rpBMsZFtfuWkfvQBukVVa4ViicP1HeCuVUww46ZGPu2sLGM1365VCB5zAfjAb9hy1YMr24myr1wU73gX7BCjb",
  "key42": "3Eixfdqn1WMFL5XJKXzcQ19xrbV4Wfu6eAqtbZ4zv2ao4wJTtT5YdtDoF8Qpt3w76uikVazEWEXzpJnZtms88fUs",
  "key43": "wPkewHHd3N585fHmw1sp4eETdCX9bNqLz21sbconoYCCTi4oA4xrWPG3JAT7baPUBsHAuT3reGfjHPc4Ud9X7kZ",
  "key44": "2FDgd8iMNXySoNLS461BXsjKkwKcyNoxGHZ85sF2KmbYbsr7cvg7Ch2ui1CzAYPruZcNsJMswFszNR4ZdCAMGi1A",
  "key45": "6kqTqo722474zvt8soWSuXH6DCzs1b1w6tv3gmQ2SaMnvU6cE7x8A8CeZeqYGHL34gqhKsSHW2vakkgGwFo8ukm",
  "key46": "4uBVqV9BzzSHepxaXN9ZFfBboSsd7xdQ9ZDpUi4fcAFqZVKiSXtbJgWQv1GKjrteEt6Ku4yZPubve8RWmsUzVbea"
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
