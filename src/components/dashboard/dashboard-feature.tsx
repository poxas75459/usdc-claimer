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
    "4dCAVi8vHNHyjGozdwUdGTXTphqDqRD3DaMMRZbH1qrxjtnEDUwgotWDEhaC6kGZ38rRtkFdVYqdxYyKnWKFV9Sp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65j93BvYA5DWiuMYi5Pj5s8KUjv3qExbfF3vSfmDi9N46BjytXcAivFGbBgJ93yoF7foDyWNc5iZrR9tK2M6LP5g",
  "key1": "2ojuYMK2JGFm8dYAP1AiKfqyRTYHC8o4QH9rNM1VgtsZ3V3Dk7TqVXcXoiqgfXdncBg2yvwJtErxUaxu2ub8MZjN",
  "key2": "3ScdtjDr4SLQWCLF1VNE8Cofyo7f4e9EVw7T4wKYytA29RWFhaAxbWupqLTuCLArYLXyMgfQdu6cRht3yFhi6d2C",
  "key3": "7b7tY2G3yiQuWX9ty3yPv9TbErkuSzMVgezHZ8UzGmgwfhqgL52TCCcQ41a4Am8G5UYonjke7vHUV9sPD276UUw",
  "key4": "58v2xXpkJKjXwXZnUNkkj6YMXnHWP638xYBTm38a2PVoEnpHiobS2nztbFHKrAsqR6mGeXX9erYggGaJXxbKubdx",
  "key5": "2u7DURc8XYDXmJY3yRK99NJyVP7jVsctQCvqs7b5qiYidFLYKQmBqzWDjxuVDuD1B9XkaCi79M1fZdSku7sHZAAp",
  "key6": "4p8LABttFgLHt1SEBoeik2ygtG46DNk7xmYmiSEvqDfWLp75BkgmMeUWVF5mZyhpSwnHUAcwtm2gdELWKhoQq7qY",
  "key7": "5zHLsa2DRa6rHNN3jQp1aeUggAYsmQgGizLvWJF5wKcoqh2KZCM4wWHhdwf53q7kgVQheubiUmcWfzME3KGukWp5",
  "key8": "3FHwPK8EqU2tcvkiNw49jBoPBys8e3nhWBqhMW99q2VKUiXg839vtwywb5RpWBRZ9xYZeDHJ6gDcCRM18V4raEbo",
  "key9": "5WPFnrKTfayyXgmiuBC5DSYKaKdPjF4SviQEUdaxP9o25cuG1e2sjfkFyMmj4hLP5xtiNvFueGdX7QnJv5D9PX8d",
  "key10": "32GKF9mP5sSMX2NgRKXRYwDM7QeHNVyZLyxECkktKKzQzXAShs5yQbjVpTQauC71vkTe9rudf2euYCBYgq6tSRDx",
  "key11": "NT2miUcqqbs11fERaiBtayaKQTwMenvPvTqjhYvLD9ipFbb9keYTn6Tbb9HuF1ZpSitRS2rMtqfvNGt6ZK4xTy2",
  "key12": "4xgAJubdcRixL1bqrtn5rMbNsvhCoduQLytVJuL5r7UGjqNHhaVyus21nmyfJ4Lr3wWzW62g63PA8p3NxkYRiaP4",
  "key13": "DL76ZhiHv6WquLusJjQbEyphFimxspPsLd8typ8hko3rsT1oQZ7KZjb9citv8rw5eh9UFfg9JsjHbodSJQmoC39",
  "key14": "5HFcNG7tESqz8zR51brW3opoSNEQXpYoMYkKJzQpvdtuVhP1xHQha9N8zgvqarm9tJ6AMdQLNSXWWFw5pd1pYapi",
  "key15": "2hds1UxW5yc84rSFhdpqQZtC2MEwphYiaNAaU48RfUiZMoToAQdbJ2dap4H1Bgu3v5LaAxjZm8Yv77LumEHZYamc",
  "key16": "nHpZpZd4PHcte2mxn1KgG2EjsUQ8u8i1tPY8eneL6CuBUtdVVJgcrZTYQiWU98uE3fKc8GLVRPRVfy8MvoVeGpk",
  "key17": "3kWN42rBWfpGXaPtCckL3MvaxfdNAQ8ch1brRNd4iPVnEXvnumzrqFskGBCLJg5hNRbCayhUPPr3vSS4t3jeBXBo",
  "key18": "QvP8qcYa7H3XUeZsS9xRiKL8u6d3QYMzSJiF6HiZDxtuFVvHaESxs8XPdi2amZYGHRbKVVDFJc7UkQ9tpcw1aiU",
  "key19": "4AWYJtKkX9max6HUE4FT7stZ8q3G45KX5f7kuKVXRuesHGFrVnAWGMGRkhVgNfXbDyYRq9z6ySHPFVeZrJKk9Ytu",
  "key20": "4n51T9fjgQ1sRknyHYHa9aUxx1zBvkeZZHpdYyzWcZhBRtXPtnYX5G6tj5nBTP9W7M1UHJGPq1URjG91AvMjv39i",
  "key21": "2UfYNtuXGiu5SxUU3WKn8EJ6TxakTy8aekuo31PojGBFHmCVgzToKZoWCLG8GaCAFzQM8UTe7jqoFEXiXBbxuD7W",
  "key22": "4njT741MTwLktCFLcZjHPHo9T7Na9LAanf8kVYG8JvToP1xNYDBmn6A3wTKmt1TVvvzEkeXTZU56x4KsiepfVjs9",
  "key23": "3NKjhwGXjNCxfX5EA3YEBGSxUYdEAZCsH8vpJRApwgyWdy2ZaUMaZS2zizBy56vZVPENigqzVp1hSFzTqZREbzJ9",
  "key24": "5ogvcaw2sSCKC7tpkYpDK7hLyywXa4pMrhhM17aDcW57tZALPmXNHd8i4dktks63gNKQRcReWtT5j4SnwY8Csv2H",
  "key25": "3GvM5PNwwRcHJyhJ7RHj6UzX9KdurxFzKjEf5Cva8yLqLabdwe234bNc923kVdJDt4BVy1YdpeLMvWBRcQiQeQrZ",
  "key26": "4iTHnXTmybQbDyezCpiFUEj2hxTsuaBpFtG4NgNX37Wtc8DmQRfA2WPK4hvMoz21tVpSqQnhC8UEBFo7kznp5DkF",
  "key27": "WfNdaqAEtSAq4Bu6Ze8jERmqSeVEvM9AKKC9XVbarFUfuULEhX8Rj5x7efmWvrPQ2WLhVnQDo7LuSXnHp7d4nw5",
  "key28": "5JepuJ76Jmq57iRTrB8jtWy5HAUXpbaYzyN5qzH6XiEL6b5foiukwUT8d11Q3yTGS8RQDd71WUJSNQPAwxp6AEsC",
  "key29": "2EjVKMXagzNHC2cyJu3mtqZWSXnb72F3q55f2yLVh7xHeUhUhoBQoZeugnCzgaoTEG787KJjBsb7cpxbzYFRfDJc",
  "key30": "4zZztzDUB7LBtTLmgpsG3BRym4oQvc2gTyyeSrhSw7qTrezUCKFQEtFh6uYj6KWev56vKnduZMgXmkD5AwooRvV6",
  "key31": "Hz5huXtMGaDXjinJDWx8hFV1uf981r3YvxSafGpr6JkouNyCygTMrNitHfr1j2VzJSCUTiECMMAHCmefSVj3yez",
  "key32": "5KRS8NWvkKbYmAFqej7CgBymDrB3PMV7PVZe5uTk7sFXUE6ubudi68tj3fvnfeAJZ9opdTwty433RgBtjsxkGexU",
  "key33": "4fofAdxFLhCzc7N2Zects7UnJ55R6bea6NhpayQ7zRtsqvXKWUa7V515wU31xV99ju6K5GE7nVbbk8E45c3f1mG8",
  "key34": "3wNguqz2E29cHfdmThNNbrzQ6No1Ts6BthJqUgLTyAkVWWbwg7X4KesXJteNTeUbze9fobmh1ySJ4LMFLE8gaxA1",
  "key35": "2Jw7nmz5cKMMxYd8kYwuFdavUQHmqqWhmmb2MABXtzk3veqxRb1jJc9hSjCcVFMBYSWUtC3dsQ84pb1oo6TwC45r"
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
