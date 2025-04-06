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
    "4N8yH4dbXqoP9N2c9ByhFZ85o6RF523eGmh5qtTtQY1Z5UVQY6WVax2RV5GGDESGBcfjmzEjwE259ADyekNmLmQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53F4iTJdiBJB4gYvCnSXLEG3pbCfujVnLZtesikmGRDcU1r6cneiRkjPYMXAzUhKWeRRcpjEifcYhkcSjM1L4v5T",
  "key1": "2bynkm6yB2UJRfD6hPPw3sXPusYpmwBA1MsvdLXxZfPwqvBEb56b3JMB5SrA1NyTZqcorHvCYPwPndsQfJESJSNn",
  "key2": "45K7MbX7aEDUz3iiVD5jC6beYG3JzdHRxCxXgqfhXse1SnF5u63g2CKkXJZTajvMuq4gYvJkw4fNgwyBsB1LgUeV",
  "key3": "83N7TvkmB6THKXKyYj4XBwPYctcFKropmGiwhVfmk9S4ucgJBvmtACLLgdPYhyegeHuN5mr7MYGUq1Q4n48wVt1",
  "key4": "3rWap3gsQ3SjGKuW6nmtHBuwrnPafTfiU1CjKr8t7UKMF6WGDCHcCUamTx7Jj68csmczYuMfPrLCfEaXDpMuCvFX",
  "key5": "HcZ24UoxhJLDMKm3mqMDr8AMKhvGmPjLTV4rto28iBWzEnq7hFvx54Y9zxxWsZCyF7YRxQeATuUgwT7UCfiNHAx",
  "key6": "46Xc2woktFTr86WYJkB2SAwKqiX9nXNw9s7rVihmxE3gRpsxTPwehCKtGashLeoQx51HAYgMVs9Nxkht6DmKKVcL",
  "key7": "fMkf3Sm8moXECezDcGat13A5xf9HE93aCHHpHn9tcbTr5tcjBvcsfUcJ7ipSAsxJVMh7TgZ8KrJzPM6dWLBNXDC",
  "key8": "4y4h5zb1hMjtu2H3HBsfdqCfayeZRPc3mj5XZwV76AivP9mgDNBP5AmS3CVxzqenhwcvnBt1bi3RgjrxnhwMhYkB",
  "key9": "3BZX7hUoJAtm6utzFq1Xob41XbS4WygXuZ1UUyMteoJx8bTDMeUrgHw6uMYeZw2VxZ3cfAWmS5s9h17A3dEtsXb8",
  "key10": "3pxP8zwBmXhYaHrZHiVNKi4KnVckSW9kqigwCVpRnmqBW7GC4g6eu5EjSV4PMBMQr7V2j2hJPpzo3VJnaaaazGy2",
  "key11": "2vWqyxpGedt3VueqHicpeTCDioMqNguy8uuBDAKGouzEpUNWNEaTpfT81eqPjtz9MQguZcdCnGLVwgwRuct1kJBV",
  "key12": "4hPA3faKFP9XDeEHn174Cp4SasWZy8wPvBLgAwQwBDMdLWrpDwSJHG5S7caTxHF1b65oMEdgeoBtDZLvUk8ifgi9",
  "key13": "2cAaD47RVCvjkpEe5kJBeHfc2fayRkuYfXjL7mfT7kzwruxtnbMWPMRNoC5GemqGbPGaGq7xneRrKwo7V5D13Wz7",
  "key14": "5sVH2tdC41xi7q7o1VP5oZLMGdVERSjkj6t3cETiA5EQt2zEWU2PyVdXfmDE9biT5hnv7xTwMLRzDj3HvGLfw9vz",
  "key15": "3tofAY5qFejYd4fBq2RTos55tthAP4n4HCy7vWev5BVyS9SbrjX5np12rYBQiNGySXZvqPz5ToESDDtFsQYbCwJs",
  "key16": "3bmxcFLGSzVUfUUQjv4Z1BPDi9oBuEDohJUsZ34wzEVjtEWcHprvXjd7i3GKzF3dNawQ7tjqRtzArUzPiagpghaM",
  "key17": "4ReYxsjx7dppFyrmZXngvQDLfSyVhtDnKztUKd3PYfc7vcuCLjvfPEwGQyN8hJ99QDmU5qesHx6Y2PfRPHmbe44j",
  "key18": "4JiQZ4ddhKaoV239o7zqiT3aHUiZAZXq7F7XyGkoABdxAs7bAoXf7QMUaNvzCLkXsfE6QHrGsNT1jNbfW6USbR1z",
  "key19": "3taqwnb2Mgm7pesnxBFozcReZaKE2Lez1bVVSEhudb6atbXo9q2xdkRfsWdnceRxgEUQwdVmnX8awsar8jdnSaBT",
  "key20": "22Jv5RFyZZPwLs49jQuZG8oMbhj52h7nemjxWrPVZckZk3gM45mYA4YEpuj38sU6Gp5dDNxokL81LoKd8o6QBNKg",
  "key21": "5Ng95o8SRW2nhstDhJPfAmLA8rh8sAE3gx6kmgoLHgodUrkdfGmN8yhzYjXxMYT1nAugyUseCsP4cxvh9GYmPQe8",
  "key22": "24NnMrpZ822LJnTu5LXpX3iQ3Dko3EkcwcsjFLNeMrwzdjEoEMbAmE9BwJPPaBFsvVsBGzfTskkBRTvDPeZS14fe",
  "key23": "3SKqw1K5mKDp2vctoTvgKWRtgWmTBxyo2mmjFzXoAgdgQYvnmQEoCzrDdrBNKUEDBraG8pEiHzJJ7cVXmQCsKVvA",
  "key24": "2bQNJkaTPfrJu5Q6DCbavYovR2NQYk9EtG1FGsVGMngrnaAAL2x5m1SHuwNXFvBvutNetUYYyc9gfsnNwQtUKWYV",
  "key25": "4QJA4uCuHgXaGRzFhDsJNsoK8X82SL5wiefks6ARJgofHAZY6tCYdubDhFpWAFVRdxMU9vAkcCUcHaURgEq93SzM",
  "key26": "2oajeNK5pEPr3wVDQmqCHAd7wwBiWNNor5qHifPQqHgoXT2AWBhJKSUmxtXJ8tVPPgCp8T4pxhJdtxf3v4hUEjwn",
  "key27": "5zewpF9U9bk6LqZnXGdLP1XPF5r621citEdwaV4U5qDx8XjmUrvyQfL5ffkA2fnhvCCnE1J7iySsL78PoXM9tW3b",
  "key28": "3k3muQUboZ6MAorYCw5agtEsymWYYf3c9n54t2JJdGFnkxc2zLotFp2xV134VCD2iuC39UfevnvrDDo5pVdmqCYy",
  "key29": "5QwjAgzLojQvu8Pk9TM1bGuHbtTikKTSF7HuMMBq3BnQP39vg7cx8ev7KpZ5Tukac3ahbxT4Z2LA9fUBTaAerKLu",
  "key30": "Fh8JX7suTMQ5Ht6WcTVC8s3PkPrYsDXkNXXT8KoV8XDbCU9Q5qcGMPQkwGdZbnrgdZ7cuEzejKpaJXBFZGEB5J1",
  "key31": "uNqz5p9yDYW6gPqS4oA8guCrtEFKBFFZhxn8C86xmjLVt2KAnFie735dswhcwxWduKD791GexrEz6K3e5ZxSk8B",
  "key32": "2YBvrw7oQvkMXSWhpRZk23sGcuwqkPmzuTMHaTquV8xPU7xML4di8saCEppPRWgrQjQxuS92ep9MMZ5co4pFwiwm",
  "key33": "3dLbKNJDtNP13tuBLMjNHY8VQDBiGuJnLmG351BdTDLpAHmt6XyhHrwSjUT67Yxi6idnk6G6iieB7RA1Nr6yHjKh",
  "key34": "2pBhANPLTZwPrxWoW2zNHnzQJMzMir9LnhE8YhfFm8opC5U5cr63JJApE13jW3xt2EXek1McDrCdwH4qotdAgWie",
  "key35": "2syHWCqNCmHTwbRuMoM9XPJjzjvEW8bvSr3w71zRpKiSjj2Wziws5yDeMf6iSWf1Pki5uPXufhff3nBUgQETtK3G",
  "key36": "5UEhNMn2izJnBNmb4ZZkns1En5UhBioGkNRUoShLH1aauQK7zNPPDWbeybGx4zC18FKGnqEAR4tELqGZtsyc1Rn9"
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
