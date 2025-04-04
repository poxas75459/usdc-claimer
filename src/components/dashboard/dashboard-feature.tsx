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
    "3jaZXaPwKqjY17DwtAv7DirEZGHESKrREYe3zTpgsZvGZ4W5mB27kvYsZvVvdzLpbMfoW2q2o1yCrBop2djufwsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JvmEVEhMedzuh4u88JprQSZqhqfZiwGwW8z5p2EhHcQgYiRgeJbLEE2VhVHQwvJG6SnxmMZYG2UXqJDa5YVHhid",
  "key1": "CroB8FJiBrttdfTc6Vp7gn9AGWVfqLDfPZqQ6XEoZAaoJfzpFD9GyUNKYb6HmJ1KsifXYQbMhZn5Q5oUD4ZqwuQ",
  "key2": "2o6BSpuzcP9DzfuFEyNNrcpGjSJHAEbKGeVK4uQueSky5SpstnUESev8qrSgY73SZknE7YESZpMHjMQs1Kr5th8C",
  "key3": "q11KcVncPx2K89jXgLy3UWp9zqXk68Z5fyRBBEu2bM8M6MCyLcmU2iJbKRoCDuxFz7xFVCCanbFPVZyzheEFjN3",
  "key4": "2JMmVfYDMxdKoAsg7sVTeAhpvBege9QfoaGCgbdmkTkEtpUtDtEnirJffr2BE88q3FvGFsb2ZneYmtPNWt6sD9J4",
  "key5": "31xigJXkFtVek31rspPURoKw5KkHmMYCE2i3ChaJpvFTKyKXmKEV8B49a6sKeMka2582KebojBjjbm2ZnsQzpvPu",
  "key6": "2JJgZgQroju4GGedh3cmVG9rDUtPZAdgxydXagVfMo5Y7u6ZFwWg18hsixT1qT2HVySct2YWgbVsRXywcrdYQtgL",
  "key7": "3ZyzZAMdN8U1dBKnaCjDKj6gqGdHg3uZU9cxT5s7jPtuGWXqxwWFAe9QuweVQMXEZssWGqvR16PM21w8BcAsDhFi",
  "key8": "4YcsHG84tRFcEoYeNcGB1qLtAiPDYuw2F5FzttNAzn2GXVQeZyVP2F9C1soiazCqApxkiaYQ4HE7GZTiBnQAABWg",
  "key9": "oYMMfbFqyvhYYKt331zLst3stVqvSik4itfQjCGaEAH2yBC741B8scRbtJXdA22DYfikMCoSfYH7oJAHvtW1iXM",
  "key10": "cXUHTdfCvmkpB97WG6YsoY1JXFsz4y27R1jv7LqdXtwJe5c3B2KUukjfoLakucMoALKDdYWp899rgHXAdgAdCH9",
  "key11": "3Faoc4phTh6a9xCnv5wjcEoAePR6djBRyifwAGEk2T8mjFwjRaGu62u5YyZEMJGbD3f2vn2vx6CbLqxBeqMKAgRo",
  "key12": "66jYbTDC4bQRDNkzht7SdXTMCoRsGsui8982SUQKGQFHE3cm72g76Q18ShGuAEepr2TGJKSWN1og4Ujo35pGnPSN",
  "key13": "3LZRM1bfrzsqJUZg5EaK3ELDkRLyF5qhgXwm8KBDPdLRLhgDXh89EgfHDLVY9PXv3c4XEeyD4gjjHAoR48F339ZF",
  "key14": "2YVzctapKvLCM6g2YVjo4dL4adZWTUAySfNYgemAe4AwLe7Lp1UUU8DAJbURuDAteEir4QN6XVhbWTPWwE9EdPtA",
  "key15": "5GqiVrnmjAiaKBkSb1Bf3rSsFcW9oyv5uSCmiSjd9VaoF6npuQCKipjnghRBJ94DG1k2an46yrLEksrfF3udUxBU",
  "key16": "3qzUJek2emsHFpEY3PxYNvdUWzXQiDxTbYuxdrcXb4CWezapwkuogAETKcfYNR2QGyjC73Dq6smuLXs65oJJ1i9w",
  "key17": "29qTk8CFWMHnV48sM89u8E9evxoG5UrYrhVRJCyDLaaZrHiLEFBYgZ7ctLsTKc85cUjese8vMcJPLjT3NggavMPV",
  "key18": "4c3J4euXzvR68U6L9514BmYD3zk6WbJmVhpCEyZnEsZsaCpbX515RzaNRRQsRHSgBdsZE32cpQ91ekNs2uZfbkRm",
  "key19": "4jBTaxP7QxpNdG4hghDPLKbgcbe8V5Mb1crFNeuKJmQHtrrXQmKSH9fdc4jyvpcun42Wf8aVafRLnbC4EhSuc1Ly",
  "key20": "2GmCULbHCPrHGvYh9eB6UdeCS914FRhn4tEG2Ha1Mw8azufo1EVQ1VpJZNwM71Yye1wePBar4aaYLMPK3pd637t",
  "key21": "2cp9Z4PL5cTypSdjnpNhLgtzrRJA3VsQvMo1HdT2G7Wd2bkiChN5UwFfGeymnG6Cvmc3NQF7nkgBpJUML4rTNC9f",
  "key22": "5JfkKPF8ddEkSK36B9MbSDxj1huXm4DjikKWGfCJpDa36Kb2zJWN768qhPjQ1d42GeqfHP3mb9CWq2RmJ1C2z5UC",
  "key23": "21Ji8FFHrhF55Kb3LtRendkmwbAWE8gPhHG3sG9j4KFDW2beWQcEovGgRVTd1P76ozF7ZmBwdoY2TyaoQGG7Fscs",
  "key24": "5DoXEHwax1SfzZVeFRihHxNtfRRYb3ZDF7jznY4bPzqrjV1LXSRPXSyrVxe3jtW6TFnSDNTupASPyUzeT5Px7N62",
  "key25": "PLtTpLPJkzunA5M31R9mQbLgJAkGNb5g4GmxMVkyTWpNMhdM7yRLP6LejszRSyH1rDjEVRqE8nNNR6i9Uy4i4xB",
  "key26": "7YHdV2E116vZCexvrLshpCsrviiGovfMLXfq5UisdNAH6JbFGEFvEv4ZmB6tSaa3iCtE7EijbvuKf1kRfHRMz1f",
  "key27": "5igfHiFsm8L54pCbfBhwBH768df67t8pGhLscSmBTnzWkaH89GxLon8fTqdWDRw75jmn8UwGNoPDX587WPSjGFmd",
  "key28": "4Uymst9VyiXfYykjYTrL44M4t5bJ8VCGzRud1a3WaoBqVQArdkEHmQTQuEekF9wVxj6w127DKAVtb4bByhhet7tw"
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
