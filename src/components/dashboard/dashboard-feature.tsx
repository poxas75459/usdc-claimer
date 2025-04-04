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
    "4FUU3orKYSAWGmDqS572RJevzgSAUmY6JN4ZRjJoyKqCNsFFVYyZ4Cj2NFqnNqW265DEwQuwWbUkjQPWNbLZihJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27dt7XQj26ysutoipVzsCBindqbEFE72QTCo6F9av3eAAvUJQwBr7NihDiVKCXdYZjA8Aqs2fzJrUTucimaJNwTF",
  "key1": "2qLtTugYycpm9TU3kGtV2trGWAWKRFkTdrHESK7g6sTkqNvCu8Hom86UoavCDXHJmeKxbz8eQ77rLx6Xo2eGv7jc",
  "key2": "3C8mPuLAQjZwusttibM9FiuMdmtFE9YSPSM2yrv68vESKDqBG7WQr55oyQRicMsy4iFhwRXjeuPtHzzc8Vj8pp2e",
  "key3": "3dogBmjs5eKu51LG2uZ2JzNNHDNDEbLGipPbV7FiUGDmi97nWLs6yNqST9j4mWQxd1k9NALfGrKh1GadhF6tUbt8",
  "key4": "5uwHuV3BBo2GehxuLCRe59Z5jD4PMHcQVEN3znk9q895KowUSGxPwqWiPWcBjzzfYx9SV3PpfESE694paNdHLW4n",
  "key5": "5zg5fmiEKHo1jCzV3xNPCKY8SpLMcXfZvfEZ7UvuhL3sQvMLDnS4QfZufT1PdXTC9r3wcmspb2FeZd5ScNyhAYtF",
  "key6": "4dEgYRGYaqD8FCioDiuQ8b4cbME4ircYiqrAb7faoj3Bp7WDLiTxrGNKtzTsMHDALHVknY7XC4foLp2Tg8Rhqc5S",
  "key7": "Xwipbntt5CeexofWeSQ5Fujn8wejFQyZiK3xmGRRbB1yS4RHWwTF8iPBW45WvsGqCgEMRtsqDf3EcFJTNkBAmFf",
  "key8": "MbMe7gYq8rVsDUg59e2EaoCphZcZGgN3655pPDjJvH1C14vpaxDnLr5asuszRPRyw4ZvxKsgjzruEJhcjRHAoPZ",
  "key9": "48cDKzDgHMM1Xh7WDBh2A4ZY9hg8jeJWjcLpSaRHbJgDPZ4qiH9PFi2ZZAQYykZuCtd7xtgbnVmABjhXdqvLdoDH",
  "key10": "3TGZqArJsuXdD144oP41agGreHSqPqteopu9XPqhvmx8CTgb9HAsQ5Six8gM79HaGVWsXk8BSZYyUv3Cf91XxFYC",
  "key11": "2J14dmch6nsQ4D3RA4BTLMTLs7CKvN1iK4QtdHRRDCJvPB1Sa1PQYc6ZG8Qm8wmdPCGCB9kkUoJ2hNQoBpgmXgJx",
  "key12": "25AUNzPDJRZEYws4XmoBMpSopNdrmkzjVabWFmwoNYcrLx6SXs14niY76ZNg4qrf5f9kbjfpAULFpM7XRKjzy2JG",
  "key13": "5o4oQuLwZuqZ3vzvtRvkJK2Vb7i9QstyKCVatA9WF5sgJYoLF2xKjgrBfuFeWaNU9HQZ22pbH1sttTS3upjSUr3s",
  "key14": "3SZJRKLr3q2fxA6AkWYJPYfL7ATaSuCbJ7xMa3af7T8f9fgw46qnUy2emVWSDBCTeU3VG8drZMYFeEdCACGsWgWb",
  "key15": "4CWJPWBkgGvo1VYN4AzK2ESodxZijevCgbBQSp3Fc7eE5vjCyZoqp39A2f3KSVQ75zbo8oWfUeDfDWM3Uenf4g9J",
  "key16": "3Qpf96Ruqt4GGfKmGeXnaPvzGjvVu7TfE7m7GVs5PeVXLTxfQ4ATnrYGvgbLizrEA3TNHb4dHwUc7v16yYQ8fmJa",
  "key17": "5xkhXEoFWMP2a9uDVermbuBzZfTxBEAtoLAY26somGacamfWHxzcU6RSpsXKUGnBTXLLffG41A4r6iXrQy7dR1Bv",
  "key18": "3BpL2SMX3c2wJzLTfd8LknmFVuyE9RYqyxcLWTvjRDG2c4bDxesweZGRxFfn1XtKz1HygzanNFMdHWfxmxgxJxEh",
  "key19": "yEZjos1PmwRdSy4YkmbiXDcBaqiTp4Dmwhtya3rYteqqWU4TwpRF3vhvyR3W8SNeAaxYbnsy8aQAVXDKjEEoCC8",
  "key20": "4Zx6WwwZGm2AXtKa3duYBUpU7DLn99aaGxaPUiobuKxGLAdxiMdFEb4M5JccgP9ML5hnr8oQ9Xe2k3hu3FEN4ny7",
  "key21": "38FRj74iwQqSZY75SyK1D9kg9649VjaRcc4jomKRyWefQYfLPxWvrLigxVQD4LQDCTN8d2w793jBDLkx2xSJhTDY",
  "key22": "5XfZsk7z19mjghCg8V2jPpx3Ys5tnwsqGBNGdqStB8qEsCHW4wdFCbWxy97nSLyhTH8DRb7x9CZBAvHvDiBrSKj7",
  "key23": "5BKY3ubhyoeAheJ3oqjB5LYMP117kKxQw2XN1CT7m7hgPHKsKGF1ZxHUXcvpQQ54FzBP4D4EdtgQFpMkzvyyajPp",
  "key24": "4vtoATZxKeaoW4K7654gkDwR4fSXkZPpLWYjHNzyFxhuH8iqw6RgGS2T8cebriatTQZK2by5BkmfHBUccNVt2V2B",
  "key25": "61Szm7YsXAj2BfyCY8sAu2nwsBSA79fxQ3CHde7tYJtXLzu9G4NM2wo4miNkY3eDFLaz3TjcczvZUdMWuzBXSAJb",
  "key26": "2hSsy463s9fLP7BdqTGWEL5jL4u21Frrwed8KCwzhW5agArPSsatbpreeRPb24oXPZ6f9s9snQCFm9dMNQYwascQ",
  "key27": "48TCoHZrEQ171siEEijRQW1a7a2MMQpkMcNPQTgoBxRNtMVkoaK77HJWmX6Ge5QUaG1tq3ZtezFJo4h6wd84qrVQ",
  "key28": "2e7LL8jgJnfV323BoxVY1WQdcYt1Q2upFZG4gj4DhhbrAZMdQNbnXmPkcNkSjtUVmcrEAKbgQwbNqiKUXWJCo2y",
  "key29": "CKQe8Z6x3fUMQJ1dMNcFbTwMn5pkzPLkEgTU3ifg1yoh8ZtYGBXwQvdHjhXzbiFw7X4Krpd2L19bGYhhxGwABKz",
  "key30": "T1kp43NKjrMF11oLbEpZ3FG1B7VvbQyUaMT2MAJPeKBYmiZefHAHFeHHFrVsHsg2L3w6QtCL3Ls59187BwqwDGy",
  "key31": "4uraQTydShsCyQfaJHCLPZaarSfKY6WryrWFHX46XLMWDKHfzibHVyw4YjSSGjArxLNxehtJMd1TZA5Mb1Qw91Ue"
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
