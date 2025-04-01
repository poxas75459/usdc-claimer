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
    "66JoroX17btk93w5SRoBNwDGnDVmNoZqfWrzJV5TeJwekDFnZFf5cUUFYWv4HTHDnWNvgzSR7wzZ68nKQWifAdAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MvaT3zccbFdNJaoZrdkQ3gpxYFWG66p6nuzSXjyAQ2yuauZHKKsvzhNrLRdaDkZ8YLKkGBRuetMAVVJyDNia91Y",
  "key1": "5oZUM57NvgS7PxYQj73oo5TtiKVyVfYB6f3u3tLCqgeSNXx4SuWyi3qEKF38MS5JiigHV14nSUiC1QCEMMv25G2y",
  "key2": "4gMbGw5sWJ7EFnhFeTdrjH8F41spHdjyDoRKE9hU7n4WBC4bGevqBaWKy1pSd35aiXTt8y895n4Atc9YZmR6Nm61",
  "key3": "3xitz7nHtUMhULue8xuhf5Es7X57Bwz4ZrtD255dT7ySW7wnsFYWcGKYJFtdaRU5jHrsZYK9mNRoC2SsBthCjpxP",
  "key4": "27y7TvJBEnFf5uMrixeoaiQ3krydaFVHBXtYqfbcPkrECno6M96jQZvfzjGTk2BJgb6dhXWpx3GqHkJdj1iyiKUN",
  "key5": "3TxWeCgUDxcs33koykYw3sRed9Ca5hkcmokTqhnBuFaBz7DtnRhP1LbX2iFv11QfXvosPaMQjjCMs2LPmYHVY3bZ",
  "key6": "5RYvZYPGhYT6rBJQnzTZr57tZBpPMhpZL4mnbvBRAQbny9WZ4qWq8gH5sf4j6E6njQsfEHv5ef3aX6aoZiYKVWuA",
  "key7": "qGsoph7wDrhyjdEdZq2QCqZmbPdztNkLR83X564n8xaTnxkT7Vda63LPZuuBtBMWZYXQ1PFom5MQunq4zgF1Rch",
  "key8": "2wvdSqs4dETC5fAHGreN6AB6f2mBnvZzHND97SjFQXJascdoKfW8tK3en3eFsAF6PSrpvV3MP5rKRmnB3aCmnRC1",
  "key9": "2f7Qsjj4TeLeUwci9YRNJE8sADRac46UKvnaaCoxwcvThjTajEX3KQKFqvFeSBx1D1buqc3GnWeo1ZQPSD35RvYN",
  "key10": "4QaJz3J5XNdLuZNmgmBNwUCtNqx3ogSn38p1UYaBfzY2EjMPtp2fB7hBW76B4MKhTA9RDCcEF3tci6RBret78NU6",
  "key11": "hpwNdkNy6fG9R1NRxfZrtKmgVsN64E4HioKXQxgfWsemxNFYRtAqfeYeomj2AqTUT1JzDyvbefH4eRrVWks2BTb",
  "key12": "3HewKTbsAWte7dbRsUL9oGUgSmpQvTxMaKA2QkprASB6YE6hMaXJ9HBQHeXhBt77mL4rbM9J1NUbvmcidVFSGCCp",
  "key13": "3QAoAs8KZGEAXc2j3EaxUtKKm7oWFc8MbjyzbAiwDTbD8cD2cScAK4ADu3CEn9YmAoNoFqQQXRaWnfGiwgK3XcEH",
  "key14": "5bXUJSqAys2cwjHoY7B2ETHrFv1Q6bsi4oc15xgvxg5bK8HEAaBpXYSXtyKwrimtg33MJH1UN155jkAT5gy3j9NN",
  "key15": "2TwhSuDWFcTxGzY3wnn52NZvH7Ss2cQJzCqhqbrY9RoYfTmmbRvRwUyKkrMP4tSEqF3DQDYWPJVsQiW78h76zJBJ",
  "key16": "nzJ8N3bHLGUzw4iz7gBGSYvXoD3zt2E2y2sFtRcVcf7V8eGdberV4nYf1z8NGoJ2ueeEj9Wz8evmV7cQVWHrRqR",
  "key17": "3hH4Moq9g857524GM4k5jdoLKnqFNP1gRKmsrSrn5Aq1Ux6s6Dat4rk1Wnk77VkKZAm7AHkw8tw4roDbPGi4jt63",
  "key18": "3vGWxVNcTeATYxxi1nyJrpUGGEqqBXehwyum59k3jYjnB2eayVuQeSVzFrXQzCq3nJnMLDjp23f3US5V135269p",
  "key19": "2SUFRTNPtmFyoogXp7end28FswXFv2LCbLGj5kGfoM2iCjKmSerYyj7gHZ6EevTcMxBGGNzBsFbZERhXJEGEMFWy",
  "key20": "cuuuCS6Ud4c4nQonjF1ANVSVy1BVFwBrN7spNu4cAAfR1gghStqA3uHsApvtuEHmXYB3qJT6CfAboTkqTFb9Cwn",
  "key21": "5KPA5tav531C2V9P79iUpAFWn5SNLfKHbQn1vrgtvvN4dsUd8b3Gq72kWKzxnRnbgWGdrFGmz3NkHgDUpaNPPLS2",
  "key22": "4hz8C95s3azCp5sTta1FQkdmPz6UBx5b9BKjDA4PqtPRhKiXBY2eHYPDvBcysddEPad2C7EBAodv3yNBp1H9MBE8",
  "key23": "gRJTGTXrsQLW6GU8UwEAb38QrfzFHq617W6EL8A3PWonmguTB4XqEavb46eQ6jaeMJg71HTC6WL5rVkuZDs6KTG",
  "key24": "3vrttYCnXsK6eGbSSo3UxYGUcLbmS5GtR6NwtAdyuZSgR4i2Z9WSppZWtop1vGwvyim9dNwPKbqsxTx55m3FZ1Sk"
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
