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
    "28Sth8C7F3dCy2A3uZnmVS6BBNvyW2p8wq6X7CpuJmXnkSwD4xvoGSAvPziQ2YuAed1qsX6u8ZkCvhf58fvbMgQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2riPc779tHcghjBeAET3iowpgY9PTDssv9gHs7Md4Q6L1XVigF8zDGQqh45Eri5iKTJTaCHqjyByQ499yAecGb7F",
  "key1": "RcSF2fpznum36UMY5ZW991jYF1ZySvvhR3p8grmPRMbQdJuQaQqrUAJW5Xb7oDx2NjHBWRDzVaA9ARTjvSTgtJo",
  "key2": "4Udxag9hT34rb5LHQWhHoGfTkzLP7YBfgfuwtpkF6cc7eHNsob1v7pDdLkFukUFbqDNQHvdLTTyJKfRmArwvg6w9",
  "key3": "66SEHvJPMQmSbSHczfyW1RhQ89vKD8nLdeQC4K45m4RJGqrX1xsTbiLjPZfTpQQMr4FqMzkYjZ1LLTUGwZoAi4hK",
  "key4": "4Cvn7rtQsC2gsuBk7PZHFNroyv6U7d9hfquQ193xV6ic48HFu8rtz8CP5PsdvKKU1v8Wo1Lya6r9nbue6rexfrzU",
  "key5": "2CAMYU5DQtR2VpGhVfMg6U6FrDre3FAxWYMJNEcX71EtpFoqjTC5qm8WUx2HTvFFy8HiE6KaN4bAfVftaJxzkNV1",
  "key6": "QYmMUKtQy9raqWvqUK3P6MASkfvmv455B4mbgkRDCimcno7fzKAXHo6UDV38QdazRTLhQd3YSnqnbhBZUbVF9me",
  "key7": "4kNV8eYF2s1DWMyfeqnCMEzFwqykaFCsA9imQD8iZiNedhPvDGSPVEZQXo9kEQiaWNCiHCYRxV3LE1YZTuQaVJCX",
  "key8": "4qKuBv96T72jz7HA9JUV4fuLG4owZDSdr62Hc6BoZPGEnDYnP73C18KpDs1nQ7gzagECjm4XTAUohMySs9gkFTmf",
  "key9": "47CrdcjJve89x2PU9KFu34cYJgrB7teUY2qsthUYaRKof9vtjjLb7UGnFcmvyMtQTjusmFJfQGuhFFD2THAaD1x7",
  "key10": "3xhmn8GMHMPNcFsdY3NBCUi66VugXeTiffvpQYGcdnQL1vLNwsEe8rxi7HJXkE9vuXgwLzNdAbAy1nyV9fkUoHLg",
  "key11": "2XvHh6x5FymdcV4ctVDjTUozipQWieHVXN5DNhT8RWwNj29XAHuGTybYCpPoazzosbMFk3Vg4toEkSFhyXF5ZTWo",
  "key12": "3yxxTFja26b8HzNPgzCDRiMMqTr3AJtDYBPdQPqfGKqZvQKEetdhLX4CfQ8WG1ejWiBbH9mSrGSn6E4Kvy2QfWA",
  "key13": "pHr8pKLK8ybFBYPtPdSuw2cgdYT5ULP8WAgJMPw2cCsqoB57dF2UAM1nd8dmomdjR317UvPyJ8BqfZVkP5Bqdbb",
  "key14": "29DT53C8njE21ZuSxPFDj2anRRYs8ma7S48uvxFWZ2qrdACqa3pDNiFfK8wBP88N3cbbs5fKWp1BCXqzXALUW1qU",
  "key15": "21La3Aa7RrVxKZnvoF6Ybat4SAfziTayKNzk7T2BWDuL36ibPutKyNyfyxDiDRWDJmMAxf5BKrywPoC3EFP1JFWw",
  "key16": "zQWmDC3fhuzDm5d87fRkV4pSD9DGBW94EVxRbuDhKZgsvmEFDsvmbyGNfzGnJYaPQ9ZgRUmWrZwb4tZr5L1UjqN",
  "key17": "298WEanPVanGWpeA9kgegRWiDKarBhMbahtExarRUpWMjrqjgpxZm9QDLHkbL6mhNNYdCHnbVJBDaFf7t3KT4QX2",
  "key18": "3tjT26Z725CxnVGa4DubzNn6KexSjNP4XYjKCSX1viZ4qXBUm4QkhhxbfCtK5rN1A6stVeEtk8c1JoGfBMBNWrfa",
  "key19": "5pb4ffm1TxE5PVx95zw9Sbc1HAgsbpc1K93tkW1XZNrn5hshkeHDsvYqTkFp6GWuST8uJKsu6TNxPxrZAMhk21pJ",
  "key20": "2ffzAner28PDeA2VhrVX4d5tXGSFyGwZZGTBw6EKfADwREuANhmztd2n4uSZgU2c4sGQxMsdKafxVUySdGtH9VAv",
  "key21": "NEkvidRtoaw8wxRhssnSUJpRbj36xaDA2kwX7DtbPNhPM2hQP1N3iSeNYMP3BqSM2Ss2CgvefXiRpSZEoEgn85F",
  "key22": "42MPFM1gyrQnXUaSnhbTAzv5HascYAxAPpN3crom9ZsCRLZ8tfotzz5rghJyei5Lvd8X5U5Ab4TmcBi4UBd7gmR2",
  "key23": "4KyEdrX8vWbYXM9pjGe89zU5d2skEFaW7j52vqvSzLpPVknsbTLzFbPn6x77iaM6pP6cRN3YJxYd9gZb3hk7EBPm",
  "key24": "2S2fR9pJPA1PRfeDxSY7H42S36X5AdEUqmYYNqYU5m9TuZ64YSPgsZs1LCoaMiMnza4qSLZqdvQWT5E2ARUh5NKz",
  "key25": "5RfGXN7zL7iLveMe7sNMX4mXR9gtNf1MY55s3NTkbW75jCNXDLwspRJ2c6rZ5tx8UqetJTZpUd4PN11YZYTfFLwX",
  "key26": "3kQa3xN2b6i9V5V4w8vbUaCg7mcqtqLYbsnmjbEaErM5bcPWH9kJY8pCyVKynzmfyDjCFz6gkEfeunYNtvm5kLoL"
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
