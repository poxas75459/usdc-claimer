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
    "4NT4fHwMxUkk57nxohfhzJjASwwAEoeiFew6RXqu3C58D3UamW5k1PH8MTL8GVteDhcV2BAgC6AkQtyttgeQbPfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mMxiLaV8dqWTpNiYg5maJ6CsK7wHr8JQ1din7b3qqn5W2kvz4chEo35o7dkQymAGKbUzPvDqdt61n2N4xq6P5Nd",
  "key1": "4eStDQNQBXLX6DDamFbDsTbmodaAaFKPJEBKDnsLdUfrGaR4SzcMy8wgog8fVuhvY4ZmTPuX3okQX9uypz7e7WWp",
  "key2": "5viQJw6VvesssYYCbhW5nrrHT4swhbhM4iHZYSAr47wpsP7v93UCW6F6yH7z822uuoRZgVMKGQxi6fXje8GR37eq",
  "key3": "34CodK7xC7cBTRrYCr11PF8KEtBM8FrP1EhV6Kqt7XhgDHmpzdq94WR5E8W4Frhbi4cCDHx5DKgBXWbo6vbmnS8Q",
  "key4": "2YqZAVRHo3aVkLQgpFGeLMpzs6VoFaGjMuGzQCMjNrVoUpJ4pBTuw1UPNPYhxkzcjQQoDRDa7oAKZ1xA8N9hEPqD",
  "key5": "4wYEvzxD9WgfKVWvWPsUe9A6td5SdRLy1iSuDYCmmnU6r1zaqqmr4jXsiYqV2ddMEfrUAnaZep6ViDUvqmi7KwaM",
  "key6": "43RGUhUsvVXoj5HYqWy8fPyRP5siQijASMZ4kmet72QFQLUvuHiPCdzwMV94MeT1gpcwHrNfpahMjn4YHWrZ6o3R",
  "key7": "hba9q1mvQj7pHVSpmBdiiRb4CmjTU3PGby4eLaFthaKzZ8zmXLkK3HZNRKrNGXi2xefnXEpAG6TG1nsG1vPLmGc",
  "key8": "3hM1Qw5fAP4hsGBTGeik7ZdT7EbKCPdhYpxDobggrEiEppMA5ve6z9VxPG5km4P3itbS9ugXQpLQdkYFhF1q2Bmd",
  "key9": "2X1tGunGBD94WpSqffaSLub72UTVwWcstXRWP8mBP6yrad9tFKoKD9e88nDYfaLRLxuxHHn9LubpHHDLSH2VAaN5",
  "key10": "RDVC26s6ufKYVn9v9fjh6R5tfMfNgNzdJa2Z5G1BcxunMbLtwXnG4c5njP2nKNuSisunQDa2VmWfPLeYLaTzRcW",
  "key11": "4vJu6Dqd6mEZNxmvzaFCxjmXaUMbHhzGqiFRepUenAnKEbXSzq2x4BuRSGvvCiCGerWj2eDMQksCc4QEeZGqsz7q",
  "key12": "4Z7geWK2bGz9H9AUkg5YFKs1G6mDJJYcE9tAj5Ls3LujEbsdKvpEjMy4NdPGTxyjTnzFL5pRUP7LAsVVy4QDB5JS",
  "key13": "2KsfnQzC5Gz1twH5hhkm2crKRhtCE1vdesNPuEU7ujHX8C1m82GbHChnTFaxoXcna46nrGGgcRNYK6K2xYDibJNM",
  "key14": "4WiDWM9JhVLVDpxKqZUv7iFuV2pu2BGby6J8EQFHcU5M9gWr7AvYGF7jmbynebSWzbg3RwTHiQqUpq5vHCn12iW3",
  "key15": "5zHyXigF9JCKZz6Ay9YK2QYmnFNhTiCQa4K8douED8vrVKarPBvWjYh22JUoka7oBC43QTNRw83N25QNfvmzTKLt",
  "key16": "to9QpBHrYCiBBfEeaAciABLdUjMqwxTWsNxkFsYWzD9N8R7mUWhmjtxFAhZVeJN2qSgDa7pU1EGojUso9vnSgNp",
  "key17": "5G9WczFNke8nCbJmtbns4eV5J5ZwGWFstc7NHy8XcrL3wDvpNfAZQXG6MnCmuhN8iprfyNx3Z4oPaCA54tpjteww",
  "key18": "2Q2T8kMBQeCPABcSzD7X5AwWepUYQaVpmaM1CwZMA96HojP7n3jUooKfhquC8n37Mj7Hd9mef62Ky8r25poJNbAC",
  "key19": "3nNJFJCqFwDRvGYMbnZeEctzJCC6JYnC4vp5yg116qqfWqEk2TEQYc9MdzsS8Urk42BLfsr6aG8fCNgv64k5ghJW",
  "key20": "trWLKFvavXcX9CkmZVX68vD6vhEDc7BAxnxLrmLVApbaA25hbH1MNuZAXXNZdGtzTASwn69MBNAnC8V6Zr1Waec",
  "key21": "dnU5WszA5zrmcGjFAnr5Koi153sJJRbEJ5jRAy1PiqgTkfWBCv2NVtxfq7bag2U37XCGACfDtvtWt8WaByXWJLA",
  "key22": "5RsSy9BDuHXMgDhDM3xbKwn8ufMJM91YmihkSn1Q5K4urpuxQ3LCiU468WyyxWqu45AiTruWDryddwsEukPUPT9j",
  "key23": "665VMNxSc6pnUBm2qmRsxgMzroks4tPa67QXSCQ1KNBriwodSq2VCBBENXpzNLxrnWfQNngGzVYXbZLW8x5oEMUQ",
  "key24": "3AcicmRNVoiwQEm61GcFDsenktETtfaB8H2azMKJvyWy5JuQHwUjnvJ9meoiEFDYbDY19e2BYfgkGQXYoLTx172p",
  "key25": "5mHsgbci2FyRREcvjkrBvpTnFJsuVYqf9uBoxZn9JPpUYnYUrLD7beeGj1FAaiNtfMzhDLkHf1Dwgdkzm68omh8E",
  "key26": "67Doq2DQFQwsnJuykw93yEbdy27YTsLiHZoaBG9wcck4aKaqciCcgforRUEjVffNB6zvxZnbppL4JMz26X3HiwYG",
  "key27": "3butvCnuVQuuzHcs7SMp3xaiVmq4TW6LCeu7fKZHk3nGNucpA9rFdUY7BjCDKDMUug88w9xEzBQD6TtrkUT6eecC",
  "key28": "5stJFGj7hPVprEgoc7Zh1au6ExAgTFYq9XwevTJEEcpHkXvC7CNWAnbTjW9dU3xtBgk6N1ZtRo9Lk4fpqMAEhLWD",
  "key29": "48grqriAe1t6NBqoRbVgxJvsqwd6VKkofS3eG4fEXZqzPxXjtmgwPnJfKUa4ZLGcSGGoFAkqh9kyBoCfnR7wvtUC",
  "key30": "3rELqiCCuZguY8Bw6zLJ5WkpvQ7Nps1qFU3nu5AWjARNGTbqtD9iBgjLsd36EdTHvUPXNdywrQzMew4HK84hY2ok",
  "key31": "521kjK2HZzSZVvvzVgE9B5wkTLrNFE8jBdZAFj8UKHUX2ELQZBM4Rwwzwx3yJNSVGAYsW4dJxZKPW9giH8HvXUsu",
  "key32": "3sdZMDaRZyd9T8otnagPbTEBNyFLhqC51WNr8jxsmA3RzVxGBjnsmiEkWpuC7yMNxYVeXXqQ4p8SMHy9i2TjaPvC",
  "key33": "3MYCHuLGLnRk6FS2WwTt8nFRteYjzrx8g5WRvhRUjDv8RVoZAnpgDbACUnyGNDYZzPxXyDoG8Bnv5tiER2BKh1PP"
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
