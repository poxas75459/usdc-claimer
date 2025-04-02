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
    "5cFVCvhNkPS7AHjUCTMTwpjtmadLFqULYURBx3EFbZaBg8JJKn868MqbM1qj8UybuFr9tgdLr1DR5RNZsTHYeYsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2neu7qKryjE9GaWQUMocH6tDGMfW3km6jdps3tpQtVSULzakAtQ58VL4LHYMA2CBaukrLQKzfCQy8izF1EimRCfB",
  "key1": "5Kh1WRffR56Ge58U4Ur7d1Cs5nwVW2zsMQQfPBbZnVV5Fm6pseJ5jRKVkqsbfC7Zk8M5De7DW7S1vtVswaHy6oog",
  "key2": "4MfUZpgrMwsti683y3Jr4nPLEJ2p6bCtMwkrug7ZyY4vNNJkp1y6ZwM2d96U68WwgPcjHsNEWiS6A5WTyncZMZrw",
  "key3": "5HDNWsqZrQqNxaYnphHuh7Wfubku9NHg8XMtD7PAYDjnk7kYt5Xoy29dm9VxRWJS9EFsaiZ2bRGUD8JnoQSfmBw4",
  "key4": "3cRErd5iFcUKUMg5NLE6dJ1CsWkbUGfeRGQvjFcj8S5amEsaRWXXboydCKktDCqWHVH7KENHVJpsuUTSEtrudo7e",
  "key5": "3eXWmKfd8hswNxT9jXR3BBhBXnjgtR1ykaifhKoaicrNYBDLUadJvrGDpB4VqjYttzVpQR25oKcDiaZUfqmfy2q9",
  "key6": "4Gr36uKBoJZHZv1m8pLP7QiG78fCAzAeYdQGbEMbwLqHCDr3V3Aq5uT1NKrgG3p2EL1rfzQ7kJaMCp8Q9zQ4ya9q",
  "key7": "2swpTJmAFPAtJDajz17cFehMQDc8nRqWrLZLSwqNSbGMm4QeH6hPafX1JUoKww74s4HqfY87EyNTKjfvFjxPxwMp",
  "key8": "2LqfEYc9zs92HQjDjqvFPgypZ7A5VUtwap69FZYBYhn1EPX77d9FQf7rNRqDik1LskCRPte29qw8MLsMtksfm2y5",
  "key9": "5Z4dbvGM73SJHamL8FhZvnPzDxCD3PJ7HCncNTaQmLWTGMd2YqBMNbQvREuBZ1c889zP2ro9jjooj3nVX8W3w4tJ",
  "key10": "4EAVYnKgHFy2DKosweJ7oeqMA1NL2wu33iLRGLayuGWiBzp7zowAc5wXJKnuYh8UBhdGUGqCTAgLh55GzHadchex",
  "key11": "24wFS5Wmnp2KH4WYebhH1DX2PnVEJE3wLTwMQPeFHPyionYuwNbcrQrKuFn7pe4K8QdfACEtrgR4JG2XeLqx2h4q",
  "key12": "4NtdFt3LaU6CDEjAE8sR2y1JCMuS944r85ybFHHnp5fv6ai6XymDCj4qtpFa3h5X8e13WVx3AJaSzyfhD8LgtduV",
  "key13": "3TH9wiVijmioiApcDRzuDPrmw1nJKvADuyw3iAi98TzwgQeME1Uothxr7kdvYqF8tRtRyPomW9QfRZUqseiriemc",
  "key14": "5PY48dw4dGURg7fe6xsJ2KkzaLSzqyNyssXyfohPPpVgUcfBbFA7jyK7x3YA8w2jSeGcgQfXM226rYswNJkptDJ5",
  "key15": "2busxCmACF41RDSHs3rEUC4o8SLmFsWoUHQBnmsrLxiwCnsD69eaJf7JgDKBtyCNuTcWF3MC7haDBt7CUdzVTLCN",
  "key16": "3Ctdi2G5zLEeozQa8kCCGGSddBjQEkt8WTSAb2uYS9StKizS7aZzaDHKEeoLfsCLoW8epduU4n8p8idnSd4q1Zvo",
  "key17": "5zKXup1m8NxA6rrkmaP72t5A4T4VE1GjCZ1sTKCbkmszF18mqQgHaJE7P67FWuteMXKdmsHiJSLbktcmfhc6Vz13",
  "key18": "EvVEP9E8tQ6VM4xypdeT7EaS2TX17dRqSbR4pz1sZDpGoySrViCipXyyu5yx6sJpajJi2vt1XSJpFh9ANtTKKxA",
  "key19": "XSZvkHqSCorFDtNMMSiJD2m19HghLiUBnGbZfaae3uwnmBXh7DF5Vk1axCXQwBspgb1EiNDJqBu6UWJq4MRZeDY",
  "key20": "3rQWySiqzwzmijpqirsSXXKTqDLidbdZmUEEVMaqTzkAG21Xq6qDv2Pc7KZHUzNLm3wVohRtgK5CqNYArTgshFNU",
  "key21": "ruY6wRkKo3TMoDGJMgqiMiAVkt8FrbRNKz8siFPN62AQgyfjTZoj3VfFPqv2catFerJbeokgU57BNWFNDT8rpyC",
  "key22": "4uDAaPaAtuJVqZm8sdzu4szAZWnWvURxUSZeFgMrKr34TTHDERGkoeBrx1PstAcraAehFsa4swsMr49vuy1PZNQ6",
  "key23": "4Kndb1WaSnFeHDdhrayaJjPJaj4amQudNhBkasyXmGvKPdRupY5C2jJ7sChH5HNeb2zU3HmAnNQxi6Yfnv6vdVF3",
  "key24": "3P7Q2NuYcZyJM4gD48wfxWHFku4ekKn4i5o2QkbQfAGi63DCyLoUsrr729fsUtTT6jLEfBL37vWeFbc9nNUJLTRh",
  "key25": "3b5MZD2ng4aoDq2qZovqA8JwjF1qVimYKsNSCNwR5EYDqe6CTcZhSsCECziU4fWWMYELM6NjUUjzxQy7zVNcBFiG",
  "key26": "5SGnE6Zhzp6Hd5rLovre5V3cmSDjizWusmBeLz6LnHWfv54CztqBNNoJENFJg7uXjgy9eKy7wpMd4ZYV9KsuWPCk",
  "key27": "3Vp3RNi6gfuG6dEjPF9EPJBJV6jCf6X1pJBTXHrTrUu2LS6cYwS79uffjwKrj6mSh6Wt6E4614f6SaT72s6NfDiw"
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
