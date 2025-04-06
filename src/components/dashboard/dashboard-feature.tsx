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
    "5FUuKhkJ5ijNcNd5jfVuQcYv4dDWQ6ZyikBmhsKuxXG2hbgSDDDAtkqQG79cT1US4DU5uqjWytH2FJpLn9dYCDqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HJjWFf469Kd4nRjjWT9xMenLEPzoTbMfADzGFf8izMyVXBqMnHSZA76B3DgYD3tAtn7Zcj4YUG5F9pxu3WKXf26",
  "key1": "3ztTY71LBEZ6BC6cRXNPdUUxq3Jexh1sJBuUXLC31eVdcPShZrkBrjgz3GiyZnrfX5czhezKMvDqSsvhuYCVBVPh",
  "key2": "3ZmMTup9HJv3SvfZJc61hnqKuphze4QJfWQxtN361k1E9ooi6WZsxpa3RkLBfd82S7iTvWgXK8zooEvksceeevrv",
  "key3": "3i7ay9fUBBQN5a9FGvfsiKHKG3aiKNbia6iKDT7ZvEFGa7xE5P8jLCn9MUuwyJG91RaNmdmmej9yHRvpzkLnpXG2",
  "key4": "3AWUvHQu498mLHrWF9tk9uELjei727RfyPqDNs8c97sUqMQsNrbXruf7mnGXJL1k2hKWg4GYFAjnemv1bZx5t9cz",
  "key5": "5KzvSYYuURccNiRxmFYoghkb8HdCHV7epCNhCnA57eFKJskUf823U34NK9vCfrM2HYkXfsGHWbCnUQk5avyrvjyD",
  "key6": "22MqUth8WKC7cMyZuMMskk1aQSqNNhQM5KLMCdaBxkNf3G6q7J3EAFU7deNGATEvtBFeuK3YqZVDDamrvqb3sFZH",
  "key7": "326DWTWn79Euf544fw82U4hKWdSzzfk2qAq1QWx9vL4dGywAwyvpHD3Q4pPfuFoExms7hsT4K4QoDBWFQWWDdQpk",
  "key8": "2gvNdErgCBTWW8dbRRwJ7H1PS1rqmyqvUX6S3AxaJo1yauy3mUGsFSZgCxFHV1ZwX44YQBi54psMNJLRjxPkFhC5",
  "key9": "2Xu83odtLqTGoXQfAmTMndDzxKFp3Sra371cv21zftnGc3zxtxJa7rrDqTQhf6mbM7m5rHTg5H5a6trq6P9bd3YM",
  "key10": "3ouxXPHFGesGPZ7viZkpX4jy3GZuzFVS8KmGW1RWNuJ6D6137V1a73gKuZe7aRxSWvf9CdUP49CMJsDZUptVYVMK",
  "key11": "5GSdvuagFpXagAfGDfXuZVb2zknHRWGhZhSVHq16HrV4h1heYmssQrYFsgEsgWUF4dCiGsHs7HskQMU96WTczj6w",
  "key12": "oufxvRPV4BSUvDrk8Zn4Lkri5mUPAEm7iasotA2cYaGH1uvejELN4VKWDDbqRqvmDKZYaY9s5qPUYrBBwbRFYh5",
  "key13": "5hVitbSMMExBXzLBJPfL6Ew7FyZMTtWUuPr9wsqSVtUhSxg78NH7Et5Tdjo46Um52RuiDxsU23xcVwRThDRykqpd",
  "key14": "5thXR3BzyNxwxAoksiKLkmMreLhuSW2aUR3y3sMgdvbpRjjo6KKd3UB5WMqujEWKkwb4pQgRf9zt2S7YusjuYGa6",
  "key15": "4zA62ENXhRLwwPb9CZyKr2i2rQNL5MnD5jQkD6tsoBpmsSGMd9prCys77bmu97YfHBYKy9KmppBdQFj3dcmXFd1x",
  "key16": "4J3doxVK8NTxacgmpNcDGhGZyS9rW2PbWZu3dxqGhzV3Ff54K2Bmt9WCFAQnKpA1uJgGHKN5J9CxqgPaAVrryR9E",
  "key17": "3EHcYbQJt3YdS4w8MagX72irBgHPn67TnSaMga1WUoj83U1SRCsn7YHHiiSkEN2pBCa2iPfg43if97F9Pjeguhor",
  "key18": "4gmeszXS4CjEC4rKDrZxjHdA68cAA7LKyFi8PhZTLWSLfFtLmhs77ZD1ScXeSUDJva13oWuh932heK1m3RcfG2Zn",
  "key19": "2qBAY6gMciJ2sVGLHN5BnrVuw3i7p8W6xyqwHKnbiLhgGeMgwZS2v9jYGqXrJcKpK73NAuq1QnGo2913n68qzTAJ",
  "key20": "jpL7b73sLzAV8VnYqcYagvg2b7xFAT4E6Xe4ox6CgN1NmzLCiXX1X4epGaMc2cjbEqKYKENP279qunaCwkAMqXd",
  "key21": "4RozEmQJd6KZoRbPhHRDNU62g4XwGggVbN8iVYtBuB32SAzudvBfJncK199Cvy2EoqUKM2kbt1aEsKjKpoBioZ8S",
  "key22": "T8GswgTdjDHxQUpGEMaknMHFD9ATt2Z1CmxdVkCjE9gEtn3J9jm9kucMPMxovFeoKL4a4DTipFhpQYK91c9GQpd",
  "key23": "4P5du884n33R7gMh8Dud9Ag4CAbxoKyNRkmjL6iE9n46hpqCh6GJrdakTopCdsKKCcYPGnUPHDMmKQEKwcTgaARe",
  "key24": "3M7RXCHFqKvwCvemLVKkXhAfEFL3B39DzXvbgiqmoccuiVKYyckrYk631z9i8CNko1UuquvSvrN7AVuSjgWr6UmQ",
  "key25": "4FitgKvUqKRv5V17DPVYT6g6fsqaJtiv8ZB6K2Lcv5HAqoTLr4GPLZ3Zx6Mubc4cQ6nW4KLEvour2NgJm55sxev6",
  "key26": "Pa2kJGV8vCa5tA2owkzG68bmiysNUQupVF9skDQwT4HvmLPtq3Y56bjMJbhCbfpbgGfbzGqr3o3mg3BeaaSDWCm",
  "key27": "5X1ZzHnTaPZtq4ZT6hLAZn58eJo1Gn8YjuehSxhhgKb9chquQweN3FqjAf3RsWfHgvW5xwSqa6ix2ULkAQA1m5sX",
  "key28": "564UaJ9DWSDNdUeED5CmjHsFovyFTtjET7yiLaJ33LtwitNfpHok2WGVfjdxtT2g4VesWrHUyny4L6UmeEaSMDcE",
  "key29": "Qy9WvqPttNNoekDH4XQd6Z5ad9csKdJZ6j8s2wuHRmxDoWzd8mZhUCsQePqgtNrn78oEEeg3kGioduG8Gt3zieo",
  "key30": "55G6uAYw2Qc3uoBKYpkZgUuNndvm1HH1yvwxRBRAyuFcQuo3ocFwdJAQcaRDRuTZ8hETVAKzcBAtLmPoFSCFGs6i",
  "key31": "3JuQwLV17ZCkLPrBQXmtk3vETF1zWx6JjY3RQsBh8FMLU8Lg7KKJs3uHmsJLpZ3jumm1Bxh2sfUndGh6YhAEMdVD"
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
