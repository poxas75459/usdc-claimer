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
    "3ZUWFaRwA3Xy23TReGvmvuSbVDMU8dmmzdE1pEGQV5A6tuVqxKjJh2F5wqhHkpSpG59z5PFeV6uPxw9sUXvJ76eL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29f1FpYyauvYTCxNrKvzztxH8eZCesZivmM3Kchqbt3CjvPNZKyQecpUCSsrVtaVEpFmRfHh3LaHK6JfU655z9Qc",
  "key1": "4q2goERbXpVANPFvrdHRBB43Rf2cizGe6ha3U9D79UoNX4j1Sw3sgbWi7atBMf4zo2DiWpv2wkdfbzf1iYKKyF49",
  "key2": "3DjjroKJ7bC3YsVFQV5ZrMC1grD3CTr1D3gyjKb6Ru2rwiG6FSYJ81mWjebS4TFTX7cZ9KGr7SAzkpeXg8JTJnE5",
  "key3": "5sn2Ey86HXvkTWfNHfTDdrJjn35Lm7shL3cHXV9QdbBKo7AuVQhRfrKAAiLZJ73EJi1zbHLTdomNCQSmPdCBXDSJ",
  "key4": "3tTaQvJ6YMLjZGrBz37CPyBpB3T4nsmXcpy6yBy5xN4zCW1vGsNZLJeoU4RAzXbme3eRAgGEnx3nYATuMAJf8gnV",
  "key5": "4BVGvi8nhWmp4hWY1b2tmjhqRBDxCRXv7eSPVxvQSYZm127nr7wPkEQCo3ymedfZU9rGyNXV4p4MsE8H9LJLB3qA",
  "key6": "2jdPrtwb9AF8Wmj9ZVTxtHBc7yktypQQPrYHpq6bD4G4GAhRP8XXCA8ddNXW8c7bkn9sxdMiaEuB8rU4uziHH4jr",
  "key7": "27tc1oMPqrG2HfzXBjpWREetEJrnPUpkbKL65ehrWDMfSoy2uHNsjk82q3aq2z2pk4mBCVwm8BUtoPCe8dkwp3ia",
  "key8": "3fT4hBddsu3wxgkvbYfNjEULzcAScNsXdayr2yi1VCfH2w3Yetkc7KUXGW5MsabSxMhZApBR3jKq6Mqa4wEyFhpC",
  "key9": "V1cEn5F6PExE8pNTj8YXqiLH1LMydHpTjV5ChREUHLvaGYT13DMj7Nqa5dQhp5jXdWcz4G3MyGfJ96fRj6LZSJm",
  "key10": "4aoXUc6zuVBRH89WdESkSRMij7Z9KpaFVAoUdgfAxjS86b1SHdFYECeQLdW7gjcycebQLyrkxzzDud8wAqXV1vkB",
  "key11": "5Wjhyn9KrxNf83iLaktTq9cDbMMTbZRmzFM7MiaDnQA2oHmB6J9nVJPWuLXCSyZfa3XX5Wob9pvEqwU8f7eS1nfX",
  "key12": "4z2TGnhx3oQgMPahY2JJpB8UQwzDnuXNjYeMhR1DxyVobxrYcsLEenabpiu49ijfJ1JUVfpdubKWW2Jx1oDDhfgb",
  "key13": "64fHGF7mpXjeDk9DhPHyRqMaAtPseV4tZwmjjKyNdwkNz9wQJZgZ1H5xAW16JJHe3c9d3pQ1rMnUzSBqeob49fg4",
  "key14": "3DHvUj93yks5hbWzW6qcZodH8TBkzXXPLZpuT8yjSnUXzatsgfD7Yaqe6cTLjQfa2cPtBNJvj8oRHkTywVy612Sx",
  "key15": "3S41T8q2BmYKmiEJi9mGjmwpCNyzddkYBK8tUZUAn3L8XJh9VvnQM5wnp8mueSmQNWunMJivGFUqrJyLzfyZdZDf",
  "key16": "3Xqk8qESke8eK78yBZLvZJCoYWQ9gxKFtf1bEFF3rQtAwjhWWQWyeYRP3jdFtDMSdM56M25JN9hcDHuYGppQTYCM",
  "key17": "5yeBzJuvfY1uWaFH3ezurBqGPrULKQHhF4R8ZrDC7pXj8GffPhxA6bKmnupaFK27Tjb4ZehHR4YNLZrAHJKezQBT",
  "key18": "4jSy9Z5Sz2o4zYT9gz7aN828gjWb8BSw79UH9rWtxHWUiPfXgmsCtHqzL9iaFE5u1CZYy6to6FXmy6RSafzHz12c",
  "key19": "EFtAfvqzeHghzPYVfZ4mYQwyxHNPFi7VYRdcEGZmUfv89e7arzPfxzV33taPT1x5E5s9UUaihtFPEbbPadkzF9X",
  "key20": "4FLbeVzFUBeFqbZErwAp3RWKxZf5gneZdyT5NnTDCjoE4RUEdQcuaKB13wWWMYX6xJ4SZTsEbcfTDC3s1rtCp2J7",
  "key21": "2jk9hhuutkKUMdQ4hVGPu8mYTHNVbUcV52tUink53hPLW329vTrMs5RBH4uMKUmrK1kGrJ6dDAMLjpKSXqah9pZE",
  "key22": "58Bpx7pLTV7d7QLCnoZqtWMRa6X2wRtCCwa3qk7SR8H3cF6xqpeVWQsxqGiCg29ZgQbDQ5SetvJss2ArH44RZhnK",
  "key23": "3nDj1aKcM1z9c3Hy13UNRgH8XN6VAbD3v4HHa8Rst1ydkzA82Eq6rrGNhXY5TM2cr6KarKT5WFhi9SuWkPqbCKds",
  "key24": "5TKt5EWDSpHTQuoDGPSyMLNgPENaYvDo2vAY1Cpr1AQHg2GhECjNzGfPguQgToSoha7DwJJG8Gw6oMgkvoJPKJyp",
  "key25": "3FM1G5dQy6tEGviKvbomgy7v4YQfswLMZgZhyKecN5N4QBeYLU7NJGqMXPjxhx1DERJM5dV8FLkjYruDTwRXzwDY",
  "key26": "3UKcgfJzfk6q6gtVmYWsgL8LxcBwPAzoPhAfTANYFHqJwJYtUQMVzRvsWcTvHwgCQ7J4bjY7H6ZfRDFD8GNXY3Ha",
  "key27": "PoAUgCULbQJgH4RfLzRT8UVRkQXV2wQiFwEz8KtTtQaCM7KsC6WL6Bg1xh2Xb82C5UGH4RUaxf8utEAR1BHJrby",
  "key28": "2pCVqJ6vzeVWM2aZuPecxMnGFW5LZsJXbtJRd4srQycYCwyuGcNgpDmFFGpsThBaAWdTK5pDGZuVdotEgSyAvAp6",
  "key29": "2C7PS9nK531mDcQkbHYyNHJYbTvC2ZFnzVHoqpxeZ2MdkzKgeZHM2KJmHMmESv5RCNPtz5iQCpreVgicP1fnYbiC"
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
