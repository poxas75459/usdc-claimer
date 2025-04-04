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
    "QXDvwc4TAoQ31ojRTncPQ836WbUfhq2AJSDrr6jwvurgmN6kVBgc2nxMeh9PYgaHSpeCe7iDpVD9AqpKEKGcYjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RtczqHhS1bqwadkq1CGeyTe9LDUVoRGYJfd9sLUcEPpYCRuxdQxBMx1fkBYd2b6YT7utGL3XWtag21i7bcmBrFP",
  "key1": "5QZLb7QwYYGxPZLqCykQt3trpVNWcu8FQNNh8ghR7Pps9W7HHTsrYCEqPaCcdr6Dxi58wkY3oDyggLt8LKJgg149",
  "key2": "gfY2FpkN1Ksbju3DnmG7qQCUZx8fptR7KpW2Fb4sckpkVoWSPuyeQwnE2dQbhEupvC8g6Pd6DW6hiq793GB3HP8",
  "key3": "4i4YAiaqrxRHwPJzprrHdhGfvgdcLPikDB94MvWUjpUwqu8ZYWPH29NAPX5Tjrdikod2Vw4DJG6Kdr1cDtiQLRx7",
  "key4": "2Wzm5CfMLccz4y5U5nREdxzEroUAXtcmGL2sNPiQMaoRf9KvqWsrw332CSKC2jJB7DUMSxRzYBpJg1zFX9Zv43G",
  "key5": "5rtyyvgnc12cJEFCHWrTJWfkbsiPt4RuYwadAhbDgWFxuRutWVuqaWfnh4UMihtDSbuRBzAeyYV5L8gx7qR4TLB9",
  "key6": "2VJARwxkX5GBmQF2JWezMP3gDmNhVRLnipbyMfc2u8tYZuf48BRRPtLZPFG1myj49ddCBzkYJgFL4ZMBRZnMvYRC",
  "key7": "4pDMwfjdRSBeVy6v9DTsNS6B93G5wg88KXWF5g2prh2PgF7YL1PbBCTmHNnXGNJuEwgHJRBuAiv4XZujD2hpsM7p",
  "key8": "aXQhfR1DVL7rYmZzvhBwJyfP2Wd4u1F86Mbpe8kBLnEjnQbdaeFz35JdTQBhCcqnQYhedZSX34aXKPccWiq4K9y",
  "key9": "DskWrE98gyraKCZCg1ZcQnUVnuxJo4G1gQb1LVgPwS6BD2VL2FKK7bcepQAnExd3dS9M6fpDuqyCUtFgXFTeUxU",
  "key10": "2se7RFZSpMZqkPvmPMjjjJMT5wMYJQFCkNCyfenWcqQWbvDR4DaRkKzMHUz3phpvo57jWLHQmJa6N2VVnEVZEdQc",
  "key11": "7Ke1itTNdF12E3PaFQEHzStoFYv7kgwTc3LEveKNYLcRED1fxXJ712tAEbUmGgJY6WNnebEqT2NBMxSsWijetLt",
  "key12": "2dAKCdNQay9KUJYQk51TNzUDuLrAkU7WFaNu1s2vN6uTx4cQywDGacnRLzpJTvvHr44QpsKA1jLQKGXRLybMJfqN",
  "key13": "9WAHcW9C6GwK345ZdVQRDHDgB3CcFp4oNbDBiAhVWxsHwxdN2wwy9YxR2R5W16wDFWP8XqZJ1ivLWbzA84TrcyE",
  "key14": "3Ge9jPCaaBpS1pUcAgx4FFriX1t9Q8DyaELg9Lzcakn9W2EESkjURxkYwYiCRXTY2HY6zHKybDZcbZ4p9ASz5FrA",
  "key15": "3TodCcrtuwT67d6EsuB2GJYSyud6cCRVPw9xZ9EacYyn1up4KTdTrSQPJmA2tyCqgfvZdsTX6TNLUo1EsfXHpG7G",
  "key16": "iuLB7Tnxv3G8KJk9iLoVSpKCHCeoZMAgshj7xdCL9tiys63Ha7eznMzN3D1why4eD1KQGUZsBrVCdAnx2emTVPB",
  "key17": "2nZFt4XBwJ9VWg4VVt8ed6hNYmm2FCmHq5A9EDRScyBq4VN8gynYnWLjQVyJW1wMUKcpEbH1nnmKTfJD3JrKGc99",
  "key18": "4Uy21C87s9EibCBR3Bnp3QBBLMpTEmkBQcohUXpdpu7W8ZA32JV8VLxq5USEtf5H4Zy5GytDEbDv2KaE5nwXse1R",
  "key19": "3fe3b315nPNHw9D3Xdur8ivzBTcZjeFNb3vhSM25ArwAkaKMG8mBzmkTTDbcLWY9YrCR25cPRUK4NuhA2ZxRWzUT",
  "key20": "5GjnUwgM4MhpxNJAMQb8kEFRwNQUiFqMA7ZuV1cLwtkAhaiEfpcAMWZ9jvRPpf6wiPPY2BkPYBG4fXcDYgExKpC3",
  "key21": "3ibUdaRdSDetQM4YbKNTcKyEADqEVsBeL74ia3UkvSRQEFTz27R28bjUsD4U5AFKcmJWEQAN15FmvzhyUk9xmufA",
  "key22": "42VKymB4qPCk6VYCrwFsmN192jgRWJmjWdzrwQbhWa3K1NF8ndFCZGYnJ1BmC4i8sKcdB1cJERv3jXjaXu1dKV4b",
  "key23": "3cWMr7Bbzhfe6dUKCCTQH7QCYgUWG9htAH2gJbvDa9eq58kj2SN73RQJxec6Mccc5xXCdUNL3DyEWZG7JcSeW7bF",
  "key24": "2eTZFYy3nvQMvCjMfZ2iGY32jKauNdJdc1HDuVF9dxtQg3WJSesT3ELrfG3gbiD9N7oCkxrMGnSfhFgjbGpzKjFq",
  "key25": "5aCV5zAkCAHmg5LQ5Fgk9x3pEuWe8wKEnsKGaYMxiEcs1nxrnC1fZ7J9pntNi2modB8MEkbueSXSuAKr3T8pJ3ED",
  "key26": "42drJkuEELaZ2jKvet9rEqnrxyf2AxJvR1tXgMqJNHUNtpm9iWG9Ud2cnPY9ZTdTDfUtZ812YFG9QRLu7zFV8f8K",
  "key27": "2daVUrqDrPryLVJgXjc1NKH7HRimaf38uz4fy2U3idCThj4bgWEBWUAYXpYP2ciXWTBHN9EAERGnMiHwZToy8xEV",
  "key28": "5JSPjtBbq8UFkEsD8PRdAUYSMeWCkWaaBWzqJSLN53xF514QdBDYTxynbPwAABWrgY1q7xaLMuzPqSWmYuYWoD4i",
  "key29": "3j6U2vK2GZp6EyhTwcrAYjnka63DxFWMwfnsiA6fzodV3c54C74xMhtPo2vwUYbY2WyRreYRNGtfncsMNDnAfz5a",
  "key30": "34VCGMVYtrciY3Ya3iZZ61qBLU5mQzrZi83gKz7feY7ViY4YKiUPUDmBjzujKnRBx9xroKLofv5Ck66dopeqsaaR"
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
