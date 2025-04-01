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
    "3jf1Vhhe5X5eWfm4gNa1Ht3gS5iTVKw78oB8nwR93KRNU3Ts3hABzhSJhB6NE3mNqaTUom8An2iWEN6uxY77oM2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FaSJd9sx3Zaw1FYW1iqd1kDBrrQvRXZ23azq9jeFJuEQTzGMaDxzhcBLeSq6d1cyZdnrt3TvwjgENVyEodkkPnx",
  "key1": "2JxxTAQSBT2vhVwfAi32fZ4ptN8SaLYZo84v8nfm7x5pAmcb23Z3sce9cgE7THka7mJk5umnKAgh78QGgM8f1yoq",
  "key2": "4MYQB45r6ctUAs6D9JqK9C9GhvxxY1jVZZHr4gnV5rBAm7SbzKPMVLuwAxrXoRupVY7JPa5ZtFDA1vZDuQwHPTAo",
  "key3": "ZntKuFM2svAdLK7Q6KkqiMtXQmjqJX4WkJJyffaE98Eyk2fSrvFJiHwWioVWEaeA3VDjek93kg2oNF7AEMnX3W5",
  "key4": "z1cAP79GBHeuhgrFAw5ubYTbjEJkgwgWoQBzLiP1ofGNvnoyoMUvZ1BxcTV78yRkNK17QUuYdoJh1rufKc53gcx",
  "key5": "2wwu2fjLCuscf3EhiMjScG1ez5dW83eVc84DqThfQogS8tS2qznBz68dTWKoPPuUtjUcsi6bvUzUytG9fjFVFHUJ",
  "key6": "4jqCA8isEATQh9Vr7ByLQgZo4dcMJWipuMj5LEd8JfN4hgxXNbyGE15URoFNURBoGJ33Wff1FuQikwLCbEJr5p9f",
  "key7": "1oQKkdYyweMyWkkkwrPq9NPw2n7RTSpiyV88vfreDogKgoHq1qPzYCDX2QcwVwhdELm3KxBSzLDNAZbYo98c82d",
  "key8": "NL6ySjn7SVNF6GR2aRsoowS1L1aM3A9fjzy6UhpB45FYkMA8QRkfS2CdkU6CEapcHbbfRetD9XWif4PSp2LA71L",
  "key9": "xh5fGEC5yCv5CDqn3uHufPmUzMcaqS7myLCW3F1kniAXDj5ZRq9UiSEgUxtAESNRBATQvL6jkVRt3jXG8bx4LR9",
  "key10": "56dEBX23aq4fNDuowass8wmaTHKbaUARmk33wjvcTgem1GtSUV8kVJJSM18bxKnY2CDmLqEpxeZM1tpdNyxu8rKk",
  "key11": "vHntrP4pFbv5nZPfzBRGP9Pbq2qo4zqk6UTk179fh9LQQDzLJkg6HwMbgRM9bWXFDs2jb7iEdhiMZpZPNuuCRAZ",
  "key12": "3KCDBGhu8Sx3qWYnr5CU7XRdCJdNdtDPqxGYb5s7G7eux6PFwZL6o8xTnyZKuzXbe8njYZYUhKAS267X2cawuaD3",
  "key13": "Q6i1B1Y8J9o7c1teAJn8fv7H4XAXRzRfw7KyJZ65ch2JxMr2bVTfM4J3v1eNdrE2nGea7i837BbdyuH2Cfc4a4F",
  "key14": "iVN4bdgemwECRKersqQD2FLeVzVrXeFyuZrwFqwc9uUcEQJE4rqDGTnA4kuZTRyqoKAF189ZGPSZqUiViCzfv5n",
  "key15": "59GJvLfrRDUeKDVwtMb5yTWJJgy5sNVUMgjaBVSZNVi5VmPChCRXw1FwtSSP72C6GKf5pbgkRKhrg5xUGwaJ1HWq",
  "key16": "2ft5c2UpuqKYwwYsZMuKSaRP4YCpwBp3HjubHZ2GrSXh1sgpYSNjPtz8syskdkpe4XTtDSDfFsa9fijfqZXCkVE6",
  "key17": "3ogKtyAGSP1tptNJ89EPB4ED7gzEQXBWgShfFjZEBDhZFb1VmRX27ofbv1DkcS2BLw1kvZKSqEr5Cv7attbyX9QJ",
  "key18": "4WmH1zyu9RSE3sQgj8rCvHiQim5ZoJ7NJVGSXUnKrm6u7LLS1kDz4PwydaVGaL8GFJsMi2pMPDX5uuarghADukGe",
  "key19": "4kpXEis2Jwi19BYhYrFX7vH8wPBHg4vdvnEaANacwPx2SWZMcQRivYi4qEzBumdk3APd7Zpd4CrpEumEsdFJcSWQ",
  "key20": "2B8ckHByBxkd6pkQRsJ5YvKXiTcyziMJLGGzLnfMr2n9J1nGyTNd21Q3mZUQoKK4Fri7THD3WMGGXfiEt2AnJjwi",
  "key21": "Pxz373cvMfBrrdpAUpnfMwpqFfMN3XGkUsW2V1E6d27ubKjM1GPvrEUhx5C2H8xcxAfxaoFRrJ5vAupSUQ4G4z2",
  "key22": "5fwwSM7umHiepVbWghhEHdLqNd9yZK9gecoUzKdtBJaNFPmHG4nus113aQGMNn6iNrWtsr3i5x3SVrFfT5TFekZq",
  "key23": "3y1g5GfnFpjwRqWWmXngYTZLkFXQ5yWWiJChDEF1wKhz9CiALer85zNocXuKXyyS7JRt25HLC2Ep2pbL23RvrDDF",
  "key24": "4MwRw1evLiTtjQSP5wjkutZ4dYUgo1YnFcnoc4ptCHyE9Jdv4MmyCX5Dk5LqsxNbe9enkTQTqHxUKHLJFfukpY77",
  "key25": "eSSgpj5sRxwXzsu7ECwyvMRJCbsgCYoke7hp2pNhYCvB61QmvbnK7Eb1BDSbL2Nih8j6443y3hprgSCZj7h5EAg",
  "key26": "281Wz4TRfvHPpdVA6XLHhLzT3cp7t99N6ctPpTf5fmWXFSF6uCeuU3x35hPPgeLaxAbQVi1m8UvM4HZwdwZxQu5e",
  "key27": "3n9oP4XH7Mt6AUuhx2pkZRy5a3inRhY6LE6uZhZhLZVL3Njsp72gF6zcMkKWRUsPVHa3ycfA9NQ9yp8GpUe122GL",
  "key28": "2y85EdiddspySvJCm2m8vhwYEQgDQdfCKSzkuzsiAohdEHXbwSdJ26RVVS6oacLZGo7TCfdrELSzdczsXUj1ZsE",
  "key29": "35NrXaMoCvHYoTnu36D7LAAMniWe238GiN6kda3h1p8WX7YF4n6qC5tvHTc7mVCuP67przowmrceWoXNkbHTiSou",
  "key30": "4sAPJV7Um7LLiXLtenQ19zHtqdn9JcmmfEdWcCvGXRPCiojboobg6Yg1tityR1QYCJTapuoJUMBjX6gPhGgGxXse",
  "key31": "4ved6pha2V4mxynbCcT7NMcUqoPPdsF7JDwXdKfm7dmeqKqUzKRWjBKktp2xEQWRVGaGAFF6FnGDT1tonjPY6p41",
  "key32": "gSuEHvw99k4e9cgvWGgp2VBrkPg8hLNT3B5GStKu96Grm1mHRkMKRgJesdAgm5BfSp1jYQzbGL6JpP1dPhWtWfW",
  "key33": "5ojvkfQ58AYgJtqwi111Afbyzi7gLucgiHyZKoQSDLPVJGHMLzkK9PSJXp434SnGAgzeNia5SiQmyvNKYKNQc3vx"
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
