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
    "4cYNsSEGkyD6uhSCXBqB8A1xXGeHEd4FVNEQ42WNGoXqnbcMQaFGRM2V1ckKmM13Hn9XUDcgHdWfFsxwKcmDx4TP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NVzd8ooRHUUUdG9ouSTMsEbutgpBsZ6SqiqbU7HRsS3vd3kCd4KukoyNmtWpVaBh3cWGKABsNAaPAWErzTLFre9",
  "key1": "2Qnvt4GLnC3Jw4YQmoHHkcBSBNjRad9NGKqakxSnuwii7sZvFeQ79E44wvxsAVvin3mZv8kyTWro7JLt5918RTHs",
  "key2": "5Kx4p8CrAUhA3FgTx8qwkYS4rskKV5L1tomFde4VZoRSUfzycWboJofaPiTQqBsm4bfnxBUVoic6rinjPq87qXB5",
  "key3": "3BThdibv7X25n22sSpN8n23dH6LeQctTnHGL5mwBhQnoMfFAGE3GAMBJwzEMjQXA6WFqr7wA6VP9usbFPyp3yp1r",
  "key4": "3EVsnEbhR9dDtckrmfYmorYMYyukFuBh6sMSnCGSDwPsth9qCJHM7HZuRqXPn2kb5oNNQV86NUrU4tii1gKYtVP",
  "key5": "LLZAi6tkEYqFX5XaFh9rMK7uNh5z8vxPdqq7iud7qJjoxGBAon1MoskdT4GDjp1LuppF7iCvC4qPDPjSvh5Y8hu",
  "key6": "3ySAFVTaypcEdoz2KFUFueafVjME2zA7LaKR6AgtmVkAt6XTJMi3BNdnTUPMc1GKszXNkjEQkukS2a7vsLHd7Q2a",
  "key7": "Bsw1FZvPR4mjCAGk6UKgdLk6N44g84RTsQGEnpUKMYfWZDZhGYeonKHeNDDgGTKJYc6jwkX1iKLZkjJ45xinZtv",
  "key8": "5m2MScajG1f6Za1LtGyYKh9fYgdhQ2UEKYKw3P9G5SSF9UHjAqgNHjRtpMB7FwguRh4TseemPgGPbo26CKJeJf8a",
  "key9": "2m9SvgTJtPMDDN1aMmHKvRHqwiLgY5miH6JjJ5iGNmorXWsHUThmN383VcKcVDbvqZHW4L6RFT7paxyPjcRqGGKS",
  "key10": "22qBr2bqh9pXzXk57bdUfNkbMAJxui9YivR1LHDahSTWwUzvWDeTGBGYXPCiP9v5T58yx9VrxbGcHmvhY9kPcrsh",
  "key11": "5zLc9Cen7TzFVyDUttUmuXcjShyf2zxo29rJZVGFyw3nmrRgbtMQtLsGZA1SfQG9NwhUuZz2oUDsv25cTjCU3AhK",
  "key12": "4BdZ5zALSZ44KyLz2k14UsVBnLtEa518zRoith8icW8ytTtvoMEDCrNUi6APJpSN4dcBYHCQoBRQqPpSRnAZNoT1",
  "key13": "3WrbP8q6S45GwahjnFxQgK3GzX5Z1Z3A3vhGerCtgTrwLXAkWHoMofewtZtZbioRXXEsDzedHrAcHk2mKKetRzTT",
  "key14": "58uAxZV9zzE1mDYd44vMSiVjx4Tj4xuWA29YnCryhoxYeatkw3pYwoHPK6fYBbWxWKEjyJ1P1mUDXtp7cdyHjEbU",
  "key15": "5SkDF6r7dRYhNvNJ7hHFsbvZkbk3cqvT7JxtCTWbCFfUMQWGTd45BCB5Y9fpJ4QcrTL9JrELfigEcS4pK36VU4GL",
  "key16": "5NDQNHQg8CQuKcJVW3LxUzNMQ5qcBpKjXiyovtHYkEPWeSS7tH8pJZNjXtcxxRb9wXPa6yhTtC9sv5rymVV92LPT",
  "key17": "16YtdndYiMfMenL22C2PYGNsaKJY1DAKnvj76bEkPKiJqFJce7QRWkXoSZBLrXv9hf5hXLQXPjqPNYCh3SzTk6U",
  "key18": "3UQ9cTfmEv6P2vHSzH42Bb4tAqn5XaySJQgwesfCAD19on5SQoAzoh7ZTs73YSEdwzwWMFsRiqwX2RR5odCfk4T1",
  "key19": "CAN5yc21mAJ9Q6FnjRg2dsvwiRDmUcg72wJtVE4McGVYhmPFZeR6RBPFVcUNgb2gRnGL5k8vFFsxW4nqaicaEdM",
  "key20": "5qERBCMMoJFdsPiCFUhFXbqgv5TaucfCdYD2mZLv57mkP6vQGjxFGA3zeKFgBjXMND4c4Yp43NYPARJe9n3niTYz",
  "key21": "65bmCHwXcZ2L4MA8n1m4wAE7Dk8NaWKwv2enEhRXS7VvseoacG4DsYMak4HPS42Kk9ZQCUssUSYE8oGR5RYeF3co",
  "key22": "3Z5JCTAgdbLvtJrqanMuKjxFKPrbkWu1QqrtQhTbt1sMCp8EB6WzrQxKwKtZp3xNZgVkNVU1wpeDzog7CTeYMrVJ",
  "key23": "3CMdx6UgSDu5z11o7CHsQ7jm7EqnQAfrNe3jRGWxUWh9puX4AjBMvyDh2FbhDYc4DVQoWNNG1xG1toW6zoSovTUr",
  "key24": "5xk2Loajj23bWfAs4t7f5E7JGNPhYJgsJ6XHoXUoGoLsFhnJnB4JpmT7dNsA8ZKU5u55HunD6gChRMSSpq6E5TzE",
  "key25": "5PrYbD1CfGWNi3wcTGjD4WXWrJjZtvH4khektw5s7q2JJxRNGAjeNMz2X6HvHVKHmbPGDFF3K72GasyreYjA2Z8D",
  "key26": "5HAMJ3e1sjJNBxMKW6CmU8KdqGHNm7yAxQ1RvaPNtAj9USZ77SLFMB6mXfvmxw1L1vba6mfWw5LNgfmQ3BpPxMzn",
  "key27": "2xRv2Jf4jdZTxVj9o41ndaU9HThnJFurKPsASJVYge14FWhdZXSzE1eRUhGN3vxs17ZV5r6vTce6v4PRGeimMChu",
  "key28": "5Ny2ZnYaeAX1HAhU3HWyNFqu4qQ69pCoji5CQPPu1PWLEJ7LeAjjXb1eyGvd37oWk8YMsWEpDJ4VmxQDZSYqAhq2",
  "key29": "3UEkyWc9Wa7mP2WCEF5Ug7aimTJdJctadU1TXdaZ2j4id9623RbuGqK6jGrNqFNz35Hfg19HV52dnSwr6owuHwb4"
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
