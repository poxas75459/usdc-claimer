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
    "5xLdAw7a4Wp8nubUGL6XbKN2Y8Zb25zpyhGHbbpZHjPAGFdy6QuJ7PTAYQsvGTHkzJ5Sv4sTkX572iTsjEiiNriK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21xVNRxADpnJAtUUnYe7hfhPijobHMkru6fuwTCRkwQPPFk8cZHaPh6n9nPHUxtMZrTC3uVV6n41zREKT8rVaX6V",
  "key1": "3GGXkCZJiMGFYAP7rEyzPnBoBoqBdqz4zXQUb8d1aonewfWGbcseUJiUEbn3FoN5RvzNnhpJrygWif4b9gs4PVWn",
  "key2": "292Zjk6NMyXvp5E6fWabh9MuZN1dqGfRGn69ZZEKEQw6xztU2PY86Cm7yg6DgziSUe3DgbVhsTYi26L82qTSTJE4",
  "key3": "433YqWi9j6qEDqmogr3Y9rKQCCaK1L9KL8sH2x7uS7bRz6rHKbYwmcWfw5wnuMyUbxxQkcFsStDorTLSfSd73Q4r",
  "key4": "45RJUR1LY8tiSiHziGTYVMpi9U9rJGNARG4SB8PdHjeVtKnt1WSKHP8ax5KK7BzabSztM8WNHEWx16U8XaeWBBtE",
  "key5": "5tCcCEK7CC17V8aM6AJt55yVX4obYrLmt2nn5Pf4mCDwthhr27aiZEVsQv2xUycZc1T6bJe9SAD5nPnoKcZBsnbh",
  "key6": "3G8tCckmwgfPxkxYohczsGVUamQVJbaiwMZceV3oEv8ZCJoJW1TDLd3aF1C8zKeyn9j39eMSmMCoNdkk1JF46RPZ",
  "key7": "ehG8Mk751vRizWCfrq2PNrz1fLX2cBw7nufvAsuDzKXzkopqSr4DT77zZevV8m1zeLrvYZvDehqcdPbJB2oxrJF",
  "key8": "5E6bwmzrgTQ2j3WjUcMsCM4RFqGQuawG1dVojQH25Ka58aayDKFbpqs2HzA15vLK85vh3VRKxmbUkkTT3od14Ptc",
  "key9": "2akMJdgFDLU1TyBuufXVQpc7r8VcRgWbY1o57nh5obhjT4zaWjRHg36sgdQ5iipoAeq9xGqqjHvGiKJpSvPaJnQL",
  "key10": "5Fc9K4M3Dq7jm6n3cRMK49dff9Ydm8qFpBYNd29sQGzagenvuUQoS4izNS4rmKt63CcYCtwThBVYP35LBaJHwzye",
  "key11": "51mkbjU8AYEDrbjtwTYn2gmNmGuf46u9JDL1hf9erR4FwTvKad5vzcg8srwXUh31SoKE9RCvfizjoEVNfejnYBzj",
  "key12": "2QmvokvUN8QLHLfC6aFZGq71fScbkbRGDhU9h4PzdVte3ewyxURJjr6MgiKmu5Jni45qw8ZefYyYnzf3BUxZ56xB",
  "key13": "K1hAyQC2d8qyStpUzEsQvrAU9LcaMY9hhDmfMy7jDNtYNbob64jA3dQFFgL75zonUUqDrfehL6KG2vzAwggqus2",
  "key14": "AEkpfU1ooyw5szJzBkX3MwXsxVaYnVqkEFC8dGVKDrKZePL6RAQjstc5BTLSoSBEmkU8fhF5HFg4LZD62XYzVf9",
  "key15": "5yHdbPyGEW4N2QoQK1EEALzp1R2aaqRMqRdYMMhDJTz92kWrupnSdcrLGiXSNrAR1RSr1H1k68SetrGhi3pEvU33",
  "key16": "Ukq3fPvNFuo4rj2Pn1JJdGkSpuHjtamSMNrnaWxLPh59snZjvqrU29PvnLbJT4Q3Qx7bSnNgtV2Kq4kwd5nvN2G",
  "key17": "FRXtpEqBie4kUq1hmpTUxRrr5bWRewmapxXaHYYsXCckBKCxCejXNAqwHxiCtaHpom9XZgqSu2BcBfYokbZsTNC",
  "key18": "2wQEpfhGViUSahSHMm13jaUoLb15T91VEUEf6j1cjQMNzRM8P3RMLTbpdsuVR8NwREFyu57JdHd2nNe3A8pmiPoG",
  "key19": "31BjPo9vZDmb5EVvLyByrCa5qEg7z2LW9f8kJx3Ndfm3S3z9iwo1tPACvdemS44curr5LSg7z3jnygHABTZkRApP",
  "key20": "3Uj1YU31XxBYCoSVusNwzpswVJj9KaHptm3XpNFJnBZZDZH8UgXnMh28JsqzaNnv9WqRGLFEJQWBUpXu2KD8gBr2",
  "key21": "QRk4fB3uq1Sv1hU5fugazTW5QVg5DEWYRaQcenCzq8xyKZvnLNGTd114beJi569UyzULw4JGaxcuUPPou1DqvnF",
  "key22": "2NSg9tpd3PF68Dt6xy6pYZLSku8k9prypbcyHpnPvguKMcvLAJmkUDeQeRgq8HpM1z8pRaRiiLcrAXkALLTaBBoe",
  "key23": "AgydvFPqpZQptCVKvhRDTeDcDY65EbRdc7dqXHvkGndKoDWcQVF9ByPA8N2SfiYqjPgTeUgtLeH5CUUryab4hTX",
  "key24": "53gJAWEzdzYmjVsQ8CcMvsvFp9ayZjcnf7Zxh7kHQaTtnKKuD2F1hF2GUC5z5i4posykYJuTxhcKg6p6BYJ5LwAH",
  "key25": "5fGfCpjKZX1aw3TrN8W71XNiDC4rTYgoK9TDXDZwGiMctCY1wAuRnguk1PWrcP6KwxsxbVrEyij7m7hZUhcXJB4Y",
  "key26": "4Lu6fF17khWWg8qCmVCggdhi1amRNAkX9HLn2rnBVfo6Dgfq5te6WPCBvuZumGTkCZKhArDjawJq6gwxXymLX1qJ",
  "key27": "ByccinY6UVymh6hsetJ4BuJiFRkqB1aBPZoJdPbnHqtSZmtXJmm2hoLCj8Dcy5QAXt6AYYerpGM8WfB5yhu5rzp"
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
