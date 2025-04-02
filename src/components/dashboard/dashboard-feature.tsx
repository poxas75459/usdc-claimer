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
    "5Q2GjQod6LJ5aHUS4PTrnZtN8GyinhLc2ejzSjn2f73VdK2pVxSGdHUABqVMm6BDGMU8TZcDDPAHFQ2JgT2BeZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EifdWDM2oZ7SCkg16Q2NYmoQM7dYCD3vDg6wkCdTS49s9ZKA9GYz3gRAyXxFBaasiBcsKiE7jjUgox6SGkPnD8p",
  "key1": "3Yb9imGNP5iD5hDqEjh6hUxmP4D8WSv3Jj3Jm9xH9Nrc1oku7N1Dwf9m77BF1HjNvd62RdaGpUC4ZHasjUH1oDMe",
  "key2": "4R2o6LsG7haiKrtW8sNzbKWrjJbTzUu2DtsAy3nBbNaffvHTcDpMntb6fWfYRXiUb6ArZaAtweT9UATRSRXcLUbA",
  "key3": "55m3Pr8dtBk64NAA3jnG4dW1rJCarh2TYYXRJYDGsC3BH6qCbXnF9v5yD7y4dT6Qq4TgU7izBhRoQ8yx7hZGB1dL",
  "key4": "hdimHqjmRQWFcWw5NCQez6oYktF2vzqjCUMmX1reaDRZJPf9oQugb79ZdwQGSpEaSpexUCTaeAUB3waUo9daEqm",
  "key5": "2JSsuWZNpRFpmZdLUAZCbCpuML51ZK1RxDBPSEFdvGCzfCWXDAPKzgGTQY9HQR2xUcodxRcxijoEgT2q97DkwqGN",
  "key6": "4C5XMJ9aoKjP5mgHcdzWUEu7k2gWNh8m83AjBw6FR8yXMgpuysemAXs883MG8YxEnnuDJSVgAPCeXeBbctE97FA7",
  "key7": "Gc8BqqXgNGHExV5p3hNxkEBcGteGo1iZTYAUtgbuYiuDiZZHCXqpyERN2pNtAErTGJAX3Gyk9inpmQADRtYS4aV",
  "key8": "66VbRBbqz51rJamtFr6DCHnab7i6HEktZNSeiA7cssG8rn5RsrhzqzWh4Js8eGfbSmrfAXoyazrvS3WxmAdf6Fwo",
  "key9": "5sn9H3wUFr4dPy6WPz7bxo32uwpgnJ4irBTkUC6bUfnotqcqdJyyiJXYcizKNAJuPjCZpnZqee5B6SNXJhMqt76y",
  "key10": "5EtKrqy3ZwjEzFH43tbC3WRAxHnQvH4G7owrdeBWwjjoe8ospZ5xuNnoFQ1WnA5a4GFs7P9kFn6p9yh9GpwHN75e",
  "key11": "4UNzEf741Z5NGUBC7vTqcUF7tBuHpdUrZyRw2JYG5uDevjgnpWw9pe4owUGN64Z7HdqDZySm3ippnvz82WJb2F52",
  "key12": "2VQ5pxwoWtVpQSwNv4RANqoea8EWpFin41iLwu1E6t3eVMZMAmnWK94fuWmaDhwivf5eH3KJ4GMqoZEyC6S1CpDL",
  "key13": "3ppNe9xbdgYbQZPfyCt823K8gCwGcAH5smC2KynpPXirhrRizUen3xqeXFZN33T7zPupTGZErHMJHznfqLYnzsna",
  "key14": "2GCAR3Y1epNoYekmNe9G4jRcwGUbyMj2fMFS9fBz49DyCupx2KDqGj4YBriZEnLYBZpAdMkPwN8zqEGaTdEiu7Lp",
  "key15": "8ckQTsE2XP7brZi6NRaRooSdiedzgip147o32kbvqw5xKKJV5BjN54fdDyGNQUohgBZrKSTwCX785yGwQpLtRdp",
  "key16": "5TaJUR5d2Dw4UA1jT1gPx9Lna3pU8xgT3qhzhtcMLLGTXYjATEDBHkrQvkJVRknmaU5wUzUmq9ggS6Qrag36UNwT",
  "key17": "4y3yJ5DMLDPcQwr1Psh5DVFbE5uu6fP9ZkjKfnLzGQgjGndp7Pq6zbzrrKJKSHpJ1CT88asKPA6WCEfDn5Mvq89J",
  "key18": "5UorpTYAX3yzPJ3tXcGR4ThWmjjeki3uoKGPdeVgeMUxqMHp7PhWp1eDp71akdqnBGFCzMDdnZHhVAu2kyAzY4Sw",
  "key19": "2HRE2VG2kEyLBUjrzt4ZGqifrZ9pibvJoiMZpaYD5sB5oRoT1m1WuVCYuanYKJxwwEr2DTWkkuGjBRbuXQ1CiSNU",
  "key20": "5Zq2LDCo1KBp4nSAH7KPx4qgFq42Wiimi81VyaRMKgpfmNU5tezHXgbTBiAcNDXidixtECNTYGVrVsP6Tr8viB7Y",
  "key21": "41s5yza38ZrXaJmm6cZvK3Y1wxvnvagukgBhMXU6yk5FNK7drxo9tnFmv2WtCAeAzMiqDbvnXk4wLfVb19VwnQok",
  "key22": "Fs699GDmVocuBnaskX8EheRA2dmTXcrcHAzqYNmsHhD5xatRDehu7xp4m5iTcPMbwLjWyWYG2kNW88QAy6MPKVd",
  "key23": "3mbsXBt22fDiM4PEg8dGnSF6D61LZjRWmhXCQDWLzBUjCJaxiaA7WnXztYMbHy9kqqr4rQy89vs4QhcwBs8av6mW",
  "key24": "Dyt1xiqpUc5Gvvv4TGJkMg2opk1uzteR15HGvJFw8DGMQHNBPAWKSuLPSHywn7pNEo12Q9MmRLLMC9ZCCh2F4xJ",
  "key25": "Xuq6xzbwLkypBos1jrp9JTAqPitD4P9AALHdpVQB9AfYguxePzXuk4kj1ngVGnvXmTJyMj2dBo21yKu6BjV9A2x"
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
