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
    "4E9UnNbxp1PfGBw9ahLwfUYPJuRx5QVq68LnvY9vXcwQknYt1CXoUkEu3snFYpwZFz5XiMirqDGyiQMYBUboGeWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dUmyYwWXfVcgaKx4N7UXA1EFnZJvzacydiotFGGceTS8cbqDXPnDjhnvXTHhKDJ7Udw4ZKJ8LXEUiy7o58mByA",
  "key1": "2rB6Kpk6Xj1n3uvBAwpdaDQsHTugxpYwtPZuALU73oQYtbNJchByJThk2k5i6AsmK9Wxs5hNLphezwHjZCTo13aw",
  "key2": "3FBwhMP3SVXq9uXMumBp7k5T5xsDKC6vxTXosdGERS7ADejzsUDHbrLo6b3X3w7jUvHxRMavwdEksfNEpVqrAGFd",
  "key3": "GaSXtJZMgVPyst2wK4Z5UzVQW3ExMrnx575TV66f49BZ7SNDXRFEjJGa3615i5vZCk4bJvZeirpKbeCCBjGTk1f",
  "key4": "3CVaY7zhzGKfa1W6U1HZqCsJyyabEoPVywsMeo5ve5sUxVKqNof6Cffok7V2D2LLqRSk8ifqQqsSUCtK2U56xKB6",
  "key5": "4ZjwAonehihCMgFmXMzCTpgMZY1DC3B2pjdgEkY8YC1tpguwv3HJVVygFUZ6zstYMwLGZNuGLQWvmFVhR8uizH8h",
  "key6": "43SdnrSKd8Gi84UqQ58cng1Xu6NcVe5wwQJAHggR2AUUfJKe2LvNWcTs6wx6EwP8aRb9LVUokC9S4ZAdpZ3v4eRd",
  "key7": "8a64ke4ycWN49ESSu7tgR47apZA81kqDsRMKGcqtbJ6z8gV9tkys3Rmtsr3H5TxPdRK9PEH8cC5B2WbMNe8qMfv",
  "key8": "4M7B9PAXQFTtCE1rjNK8QrugUb1zqgZChazPkGqTRQ7nTcnxFx9DTpSqPXnHPJneT63SNYcCfVWnKXcvYQRYy229",
  "key9": "EATJodevRZ8CBfGBs1TVYvyTqX7RZYCm8BDtpbeBRxqa7Fgpznsq6wBWbKcZ1qqG3mT2BCqAvhptWgQM3Fpz2NX",
  "key10": "2tSEYwo2dwzB5tgGthmpnCcsjoBYddwjtnp3MgxrteJZh3faj8ztCxmiDJEdFds6GmVzhn6dsa9DUvbRxazR1Nq",
  "key11": "4rXq9AMMvUsfChEJ7MicvaU7yK8DhuPuyThCzZpEikbc1kvaWNuBymYMRDmDXgYToxCmLdddBSoM4wYRp8GYccum",
  "key12": "5kH34LCy8CStAmFyy2hhkgpu5GSjXdK2etvQMVrBF1XyY4Z7foA3ERPeDtpQFxX2hDYcu1CZwF2TCDrA4u2TAWS9",
  "key13": "fD4dqFMnqMGRNdGiWQdvhCLAk3Rn2ha4qGJWAfPnPJG4tNLYLVprTCWC6KFQkCK14oVvULcj6VfJ4PmjQB4J8n7",
  "key14": "2dpArJcvWGUfBerJUvMjnDiGyekqrbu3Nr5z9ku8hcpqpSCJvAWFRVyJL1bsuDns2jJiP8yExSjE15gq4Jd7uNhM",
  "key15": "3M1YWLjhfgjWSvHdMEjCdMzfhjayJoCWaQQokmoRHnJ66oxiq8oMjB6SLyuZvpUBagmGvZmBS8wAQzaGXEd3A4L2",
  "key16": "4fkEVgVxYwYSJQj8veDESez15WG45j1hDBZFyZ6ghEmaPv7MFiPfqypNSUspJT2EmhzjpZmKv6Ha3KLGsX6Q6b4E",
  "key17": "eMv6aRc3SSWYMEGUwVk1sLzTu3hkcVKLp6oPNPALfSpqtDuVPYejzFHSxxJKFJ5sHPfPBNF2xgRTc4KeDkVo8rL",
  "key18": "4vTAXp8pFNYqqHSPSBxF75oeYDapExdt3J132DAc2b5dmBMYDsnAkNSG5Xp6K1RZKvBgfhLa9TGSzyuWLgGrdrMm",
  "key19": "2aKkqSTdamr8FvQBmRk7znN9XUp8o5N8YwhBNM23uGVGzb61wfBQYuPH1hcjbhgkP9BD9Nk5FvejrVBvWg34zy5p",
  "key20": "3Fqfh3dkqLXVxKu8vEmocQNY2pn5gXVVHjHeR8B2bcfiEnLtaFcrvaC8jcjZsv8EErRJLSkWxeSHduBpAL65kdfV",
  "key21": "5y2VcynoMAeUyLH4tnzKGNJN1v4vwYhM2Hjix1WFJQp5ovAjZiNucFWt5gXmyEsebVruGkmdw63L39Z1dcERu47a",
  "key22": "33bwFyM4X93jDuEKzLZngG7QaspdAkSQJgkPbkZj7F9ZS9XUDPptvmWCBdw6AEBcQuYCVS7GMkQTgjjhHymqfs2d",
  "key23": "4DVbTVe9cnrKFxnnbVx6aMz1BxCZ26WEmjDRpWpApwqDchsL5cmLjDvrwiKC7jEbGDemp8xDcRHXMmwUN1YvVrec",
  "key24": "2y8hWDfFUdCwAfJhZtXSoxs75tau7wA5Jo6hzkx6iQPiAeeQnDGVTZKXwMKoptVQe9rNmxajoyvqsCNQqYUBtuW6",
  "key25": "3zWyfm31GZHZPp7cEXd1W8VBs2DPenjiz64g96pBbFy5e3oFFWvbo1pJDMvHYTtYjQayk3cdmbvaSqJtn1U23tZe",
  "key26": "4DsmPSnarabC45iTyDCH9diXXAUTep3Zfo6tLthnpx818naUa9JmeR2hvayVNVmHiPEyxBRBrAZmFWiP8XijC1J2",
  "key27": "3V2vAd3uLtHi96SeZk84UAM99XixGkmg3bdf63wF3iGQtdATNmTSqR2MMrKCvvQatxYgi3VD3FfPFz1cqzoVrXzG",
  "key28": "4UcniGkwx2VfrfmkQ2yXcLuoR8KMRtMpAqHMUHVce42khdHJ3pGh41MoMo5at3ad658ydcMqYMNPX1HSUSyRNUYa",
  "key29": "5272QBFfz7iA1oFbzA3rCLkNGD7cCSbTWBXpXuVxsXUYm4dqKzRjxNBuHvmd5AGgXaZ6f3o8B56WFbEGGQFreTWa",
  "key30": "4ppHa2o3EdxVXvBNZ31WaYsaxTn5EJ1ZzhHAA6wDa2tMcQsmEXb824PT1KrMxc4TXyMbrVBbWMrnQrr2DxCjxLvS",
  "key31": "3NetovHEugGp7U5jv9BHsGn1aEhRUDAuwpSRBsgLvoRcxd5QJSfDKbRHGLBs4hwzve5ZgWsezvtRU3t7YMXhc1V1",
  "key32": "4dp2P7njVnSvbLJ9UnEVT23hMrkwrAKRiwLVAKtTtAEwX4qimqxzNXiPoDDDLFsrz9pMGpA817Q6fDEKQ31bPTRL",
  "key33": "5yPhU7KxPSXvEsuLaqBnSDtKH5aJRZ2kJmBqZnFvWLQ8zt3vSZJi2nvjRtjy3BZaAc47UZrVx7XrvaB9EiwAJZ3w",
  "key34": "2cUXXis3xKjmw7doEaJLbqaX9mEdma3kyWPSVNPDD4bMcHHQiUetR2AVCQGSxKrDKAYy3kfZjsHQovmwCSMgJKC9",
  "key35": "QMwe6tbRSyxSGV2v7U8BvTpZLyEWvmDNZqgt5P5i2fdSeSz1dgBK872BvNSLgXFY2fi3gCMUEN5mvvphSQrJFyM",
  "key36": "5iTRCAieYkegx7dEt3QHwMcGmvrzT1SEUpPTVeg26k56Pyqdfk2d6hLiFzr7Y7nD3uBP2TugJJ2RpK6TQS2hvV6A",
  "key37": "4hchdvMogc2udrZD37gkCmxaoLcP5TNxv2MUCVSfUXEFodQ4HmA2ZHe1WjvtiNd3AFg1R6CKz1QfvrnbXa63Luyg",
  "key38": "rEddRZzk6DwJWgEZx5Xbmd9jDDt2opF4Uv7enFGRUKwJnVAmjR4MKuP1jYXmhPLNfeqZnEaw7kdtUM1XGGjGtsG",
  "key39": "5xV2RKREDPQiT8jKWUhXHCGWfhzzmp4s6pvzW9YR5UZWsb4vswGozk6VFMUmGAWG6XYmJ65M4uVLfDiv3gB1HEUw",
  "key40": "mhztmsj7NnsqfEHcfu7sAouDPk6TDPHAW6hFjBJQgzYQW3VANtDGj6yTiozRbKg1vUyLJPUoV9K7Yorb8C9zLCd",
  "key41": "RzXbtrN2icoKkxe45PxncYdHC5CQrQTsaEvsSuX8gCNDx1yU5e865Ej5FGL9Qt2RosiaopY5BRFxdE6Hf2A815o",
  "key42": "4URgtycyCzWuifE9HYdFK9kWGFh3EC3WoJsJqy7MdXkfqPKBS3ojaS2moLFXaqf2x38fvj6DbLXY6SUircyNeGPc",
  "key43": "33yEqR66gR1sAezYRR94yvXSK7DdXBi6Bw7qAUFy9FYCFzHCkR2vsKwgrx56PZGyPh1eaXmbeG7Sa4WpQS12sFxt"
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
