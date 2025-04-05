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
    "5Jx9nfyzs8J6ejcbwqoHFU5kAohY2gNomCuL4X3dimff1fhNWXFTQiRHrbPaDTW4R2yHXJ7UQSRFERMGAdx6ZwtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nfnv4uwGXZb9ii3LHdz7SQKtUTyKbSo85tLX7oP8JfcsKHsb69R6fKEDHNTqeiWYudEjvxEuWqY3UJtVRedgjMc",
  "key1": "3JxQjRPM9ZfTjpgA4Rrdgw5Heky2xZ2xRcLnNPkw7aTC6W4entfHDndTG7h2JriAi84LZnCMXLSYa4iBiM18zqoH",
  "key2": "2cFYzZBydC2GM5AHg1PezKbi4TSSRf3vjg8W2B1kS6BBWLX3FnwfsJQ9v6dJi1WimM17vv74m7qNvpX96w5eRqe3",
  "key3": "XdFG2WVtaFnj6VcYF1oaTVz7CjZEzm2Jppfehs5jdzw5bjQUTZpua4vRqM5ZoAFMRtAqRtUmpTHLCcRExo7PJmT",
  "key4": "4kx3Ro4jAE2wUZpgXLbQVnPjyq6Y8DvLzp6TtNXz8qrb7nKar5cMPLUL2hjecKynfPjNzyJWtrAGGmKbZ5rPPked",
  "key5": "54NzqwdDLJeRQDfZ3x7cQgzhwJQJzT8M9R3D2KNa5G8y2bvTKiQ278GFYP79cty9xNQRfj1WqiahWJ9x1frZ9ysa",
  "key6": "3Syx6LP4mZ7vqpHKdaEUWH9xKCvMkdRNPKPN6CoJ8GSqhdSp937BTqHUqaP4WgXpUsRPJJJj6pZTiSewJJQpuHD",
  "key7": "2UYRURE7sPZMexnjtpJv2h4UnCCCC4nmZQruhhNS6LKQFsT1tRm6JK323NXUubz6WN4S8ZsYCyPGrRZQauMo5Sfv",
  "key8": "2NvJ5nLcGtChFBhJBtnAucbB2mVVye4kbWh8JESMnnvo7NeLLXiFvHpC1cxS9KD8aDTdAWMgDFwuosudEjyMQK9J",
  "key9": "4gK2a6EHH7GQrG3EV9W1gVygzNSo2L5H2smyxdhar3pzb3u7sxLDzDpXvWmERi8JD1QbKaAKdETRho3qhDatDvbg",
  "key10": "2Fm6mTQ7nFuHDyw563w7FkUc39rAEDs19xFxUNUc65qerKbdg9LsHJqhb4s5o6warer1YUC3Qq4YpDR8YQ6kdcxK",
  "key11": "4M6d6hobWDNB4fvXKr3indmB8SawBL4BJLkwzqV9npgnKPhseXG1nYZ7EBxDMcFpVeeUSpFnG1GsY19Tiyav4Ecj",
  "key12": "55hKaujjf1rZJQSUxK9oApmKWcQEXWPURqYwZSUyHgvyEk2ic6WwrgyqHw2G4ujAyc9USYVFk8Dd1qD95mPjydYX",
  "key13": "5gxKHXuRbtFiGJwCyf262ew3BRq63Kb5Gz8YGwdBPykpEZq8kyq1CpWgNwgCbWpokG4LJqrUApAojxGrUimV324a",
  "key14": "5TNniniTGxXyUBNni7ECpvKCYsY4UFtiGm2GSmsjAoHzYCLWrq19vDcUDKrr2hMormuwgHhWVvtaAMBJpoWEXYaN",
  "key15": "q8W7Kn4eQHy57Wq3RS5Yz2pUw2xo7whxiqv2YTYWwX2xQDmEhjvS51bSJGqAzN15HqWAPe9a1euPn18Vj7Bu3Zp",
  "key16": "tuUHdQGzrAj2fBNaphJsQX3WzhEm5VzVguaZEFXYeZqJs4Y9oRg7giSFZ2oGz8MyLC4Qc6R6WfKmgzeQh1Lw7vh",
  "key17": "3Jx6ugzrM4P697ZbnUpe2VZjSZizDVNCF2wawXnRzMdasT27SoD3LZ3qXT4AiZbznKDsJLLb8p5zQgekJFbsBdGy",
  "key18": "4BaHk8jQdhAZH2y6z1s5CP4Ni6FTmtv9ZkR18fFrEQwnDMtJEBqiuB9CcbAHpiQTJgRLAVqsrfZfgFRcTHjpDQky",
  "key19": "36BjoK3tFsHZpskpzufVPmjZBY3Thz8nbjiYXn4a3Pu3wmSDTaCviA4468b6KqbTjXVoPeXjXWBcxbtfrXfZ44rB",
  "key20": "5L433C9b3ZTCQCGDVDgjow3t88SGPyhPNNv74gvT9tFu2Frp8PmADPnyNcx4UpC48RqCJ82yPcNyW6DYSjrNTMU7",
  "key21": "beaGwmNyjupSsGK6MzERTXFc1rTntT5f1PxCruRtaUpjTDNntARvrZXxTrfseNKJayVuRtdB5pKvyKkV3WqbivC",
  "key22": "4JUwKssPrLLD8q5x977BAw5Hf4uu6AHbh1s4gEM3g4MiNV82FAw2wQNud7Yev7ByWFwRDbb42d3B5KWVy3YAcEBG",
  "key23": "5PqHXe3CiuBAHPG6KA75hWtvaDMo7UAnEkQWePiJvtBRJomJMehCwc95QgXApUH2dVRXcQnHj88CzusD743KaKrG",
  "key24": "3uunH8czWYfKxp1PUgfqTho7zZcTSgbEqaS6gPpHyGSknYns8xQuMZRNmKHB8fkHGk5biZ5MFdHsdJp5b3kJsaon",
  "key25": "3rzGDq1XwirVmKAp2VdZCT6izSv7dgWbTZ6wDFWKM3MaKJp54MgdmqmWMTqdAkzsjm9NaF3PS4RGu3ctiQmzFQvy",
  "key26": "3q9KwhTLQUZnJ8TcopPN3JfYGeE1WbHUcbM5NhkKm9cvQGgvPmGyE1Gow3caxkX9pEKd6YgWVJcU9LGPZnyuKURg",
  "key27": "3kMyhkEHE7Xcrnn8AcytiaPnPgtkncsHQgY2T5fR6V1gLoiUjxrbzEkcuixBJ8RNrZUoJrvnDdE11EnfCMMtHRUn",
  "key28": "3gH7kqKQhc2hPakt65u1mj3MTZ7BsFbVS8qKUzQoAZTu4vEVRCGFy8M5G9CECDWiveabUi6JnvHLfYejaT4sGD9m",
  "key29": "3XcraWiTfYNYpJUuwpsEndKwCaTVQzvoM8XGFaR3sobmhBcM3rhMZa9ZDaEMufwnALroGnWxe1L5Qxdk6CDaAWaY",
  "key30": "2XfNECBpnjZRcBmCNhWbsPMrmsuEqZYCL5GauzTN1tsjGczAVHYxkFZ2j229if5NnRBCw4H3BVgkbJAUYQF2tVKD",
  "key31": "Up2dBuTy3DU575MKFiGjAum638jtMyUcBkrArZPNPG5Dy12BjB8NeKis5kMWSFxbgy1tgp1T2cLTUzE4kBeQQbt",
  "key32": "65GwZWb15UTfsx3tRhpQ3e7VF8gqUcf1pMhkLrByfakHbgBjfF9zqmcqitfnmrbmCGhcTKCvZGfqyeKTGY9RqAdn",
  "key33": "3nysVYNaWDCs2vzQgayyUxHRTchTXuGJ2v5w449z7VBPAqv91XrPwEVMeEjpCq5FkNaPKGhSUZtCtNttkoq8PG1o"
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
