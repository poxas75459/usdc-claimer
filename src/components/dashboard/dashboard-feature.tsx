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
    "4v4C9FehdqHai8wyXJoXo3awcpQcshCgZer36FZRdcPFAReGPM5cwkHkpgKPqveTZqfATx6LJBrbE77SV1JsCZyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RjjG8N3Pu5jWW5Pr1LRgHvhd1hf37DKEhfpunYBQhJCm9Ws97Yw3Rv2QQiKPmyhRXxRD888UvJXVedvyfejwR5R",
  "key1": "5bKp8uHp8FKqtN5u2ed7CDGPZ8CTtKcLyKsEaSghxedxgayR3qxhDAxvn8uvM596nh5ERwiURgHLYjz2e9XW4jJZ",
  "key2": "65P96d8PjzJHzmw8JAv4AiqFNFHYXNEP7Ec6hPmParpvwoMxgDMCj7AUb79m9Ahu1Ae85U272xDeiFdHF7xpXx1d",
  "key3": "3DPiYpaZbo1AcBbxz15qwcqjwPgmZdRU2qPEZm4e6SntR7CHrPk4dAextkNoDDyjzedJoUqFGyt6UjhuXFxaxN8q",
  "key4": "3mFLXJwVQmuq9dgNFvnQXT9Cp3BvaYPameRcwucmrYcWxCqj97JaiTVzeoJdAs685UzNN9yRCi8bSa7Pv9b2MQiq",
  "key5": "3kfwrENpHhvMdWTHSR2zi7XbL6fDKCJ13TkYVcTuUQaE38vKyqvveL3ayKBXA7CdCLqsegcZfkSmBpGeKf9AKgVo",
  "key6": "3zCK3K6rpRUxNK13QpvrKZaEG47CdRJsHTbGAjfynXA4EcueDxrcfFjxbYVu2eghTkuDAD5vRB5L6vdqcuGFaiSn",
  "key7": "3Lwi7Qxx2PDU5qtK377ZFT1icVZKbhp8htfkQ55cQdKkRMCMTAQaRc5NimtkVCvwqLftL62CAPLDXsw6VSGAMmru",
  "key8": "61QdkediFSojjxePZymGcHaRNPa9i2nnXnhPTRcrgrh8M2HCXgUquX3NptTjh8y6Gzimxxn12h6YL3jZt3c44yNc",
  "key9": "4Jc3uLXoUET5gxTuYLUkKKHGQMhMibG7r2VZpbjLWkZWw7h4dpHtqmXjwR2erUW1bVf7wKpprrwGrywgt6EZ19jh",
  "key10": "3Te7v7habymhd7n9QQRaqc23EYUCVv88CA4s36Ja6YuexxrBd24bpSj3UFSWNx9WyxVWp3eyjRAUCRPg8NXWhXHs",
  "key11": "31SVeepboboNP7c6cgMBoD2aj4xx1ZmH4bDH8VxjPv8Z1WiVhsHLjyZAEXRr3LkiahW7yQPCrM8isZJuTvaRyK6G",
  "key12": "CC6JQfwaFHUPXXweNFnuiYdLEuXaKvDDedg98Z1NTyy2D1Yu83wNitevknReEjXykFijc2q3vJh3d4hgDV5LRaS",
  "key13": "5iBAaiosMChCVQjgHf7nFBbejtZbY7u6c7556eDeheoSLMqqwUu9qfA3aFUWxy3otYVmBn6VWFBrVhkSx8cSfjT1",
  "key14": "4fZUjosdGPMPxp194U5eyT9FXjEDPm9nnVi1Y8CxwkboDj11aWDGYYyU1iARMfss5hLuBsACSeratg34w5ZSpBp",
  "key15": "EXtvHGKSRryK1S9GUHbtVpjvYmMUQhp8HwbdMSZ6sTLNKZTUTZior1z7ECeZ6Ncn7xAqJikq9swMf6LGPiimjp7",
  "key16": "5hh82QQchY63yNeaQZ7tGM1noUcxVX4S78kMNF4HctvZaLeDFrxQbNZaZznjzmGzKZmFCWwctVcCgoABHPkDyiww",
  "key17": "2RkEku8DumHBP3KQ5Q5ndeYgiKHxuJgrcT7AAoDqxCxndhSDJKNVdcaR4BDLoh1qvkJK39wrVoGWFQamYiq89Unq",
  "key18": "QgcdXmzX3Zn62Wn4rpPtRbdCyELK8Deu3ACcw9rbLrBx9fNL6ewTAPUaYudqJxhK9BvVcJhWg6Kp3MF3tS6xFdF",
  "key19": "2LLcap2WddTKPPgKNBzo2ssjb4Dx2M6ZmiMnGVoX9cZtqvhcYzFCDGRUByMS3AB1iVezo6i6kjKAaPT6yjZi7rfi",
  "key20": "ZiH43uP3Ji6LhHhZTKHmsvuGMg1PhA8dDqsSGeS3Vx1J9fvS7iF39SrpiSzphrFcWjp6WNpZgmpoyM6zXgdBWcY",
  "key21": "2ewhnfJ1ghKmpEojSs21mW9ukK2ZVkeJKU4UtG8szxMw1QvcUL998iKPtqchiXggXZLkWQdGMsVHQtHQ1Cg5D3rz",
  "key22": "LumEFFTz1oRCyXKdKHw1PfLyADLk9jEQzPqr3AD5gmxDfrBTLNeYYCBu1pr8LgVwC5YKnyw4ot6vUm5TsFqFiZm",
  "key23": "2NnLq3NNhtqMa2SVovZ6LRZ2aVk5WmSgUYTy81tTSK8BbzVqXJGq2J34HTFbDc8J3bCESCjLzZAPm46udmzJNuBC",
  "key24": "3enZjmRMpoxdpsqcWHv9pNEwKbRedgZDQSCFpD8CPEyfRvna8tr4XapVXy8WGHdssKQ3Wwasax6SzrAEWYxRNuBK",
  "key25": "2usC2ja3cukZCf6QofhRTvNtFZMvDMdGopZpv1R3Ubx9Uv4TQJNHeLTeW4C95Phh8TQPFZj7RM6dERFZsoHuVJEK",
  "key26": "4Ux4gWXJ9SVroyAGqaXBTBo9zdaqGc5755MDghMZGy1bbqz7ncyn6asmrdsbfDDmcTXFGtc8tbmoRDAM2Nd7EfTp",
  "key27": "KkxQ1EMETHhB2V4jHwopwHAi9zxjDJBVJrBWozZmYnh9dtfVfgvnsSPTnn7uj7juEDUAvJMAKGPdNnbRCdTMidf",
  "key28": "5BmTtcWuHUyz41YiRkUZMJWirRCVEtWPkdhAdBjg6ZEthJvp4sjxTkfMBJo4ezeXPuNdAZ5QG4UNyzZVcogPrbDv",
  "key29": "31MGxz9RWqKQFQefXbndAPWamMJudwTN6d8F1t7Z6tkkC8qPypDbGYM6uEcyBxtSuUCxn3PUcg9vHVArLUwFM8Xg",
  "key30": "31beBQDnzq4CTiGLtuPC6D8kGxKmMpUJsyXH7dH6fi7h1n6VRbAbbJ86ahiM3AhX11pnCMygxPd2hNwvkA6EdDDk",
  "key31": "2yWRMSXKB1NnrB4RWsfKnH2UWf3QS5bgjNBMDjwsm4DXJr4m9H8p36nGhfZYR34teubxgv3odisUi8wR3c57Y4RP",
  "key32": "3xunhunjXX4BQXJgffTmdTK7SQUnvVHrxgbvqTB3cwZhH8Z1PPRLbT9KHnfX11eRXbfGoUJCgvfqtDnswutWnJT4",
  "key33": "5SWBkhvmwTRKHWsFpKK72od44ti2qoKJeHn592Py3ByM5cqzzMhAd7Yh3KfpgQLqcwfqKLYE8KzgHs9b1WCTFtRP",
  "key34": "5Ntf7PjfDfcUzBA4ZS68vSskVzJqaJUvwLge3Jdr4LgoH3BRG43SfEKYxrrcQVtEUrH9scDzCdsSCpi6FjP47dE",
  "key35": "5UQmkbwaz8a3WNAjLcdhKBfuxmZRmFkwfRbnGbRnUqqENhKyvVNZYwX7UbTRGu6a72GgEAVdY6j9oPMLWLWJ8LD1"
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
