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
    "x7HeLqvJeSCQRnn46r5R9coouF5bBEEX3sYTBaoUPSSoBFZFaqmxDGgSjZKi3DK7t7rBfpuCsZqwZVJbSwvBwK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XDr3emziN9zfNzmqFFaDXBuK2P9uQpDYajmhRJcpmnysrUr2ewzvaFm48S7tXaaJbxJkd2kwbyHfzCgdmhT68iQ",
  "key1": "5MSVm25yoUabVe73eWXgWUvDzhs5Ccwa5boiN5v3b2cFP36PpdBazfFPNubRdhXRG2WJmqbCvyNdJmF4qWpu7tDb",
  "key2": "5jDvUieWtx6Fwoky6C38oRLpuauXtnJCyrw6Z4xsD1pp7waPdvsFHb7D9Neukt9zg9vwZ2emigQfuKV28s89FXZq",
  "key3": "gwuHm7dtT1qRkAW7Qw7SWEdgNfQpNymDcgSxqsP1ZpZoMLDc6yzJp4y4nmR6dokjzyrVr5Fa7JR8awEXmcikddX",
  "key4": "7peLpNBXzdgZek8h5vvXSvLsdx6rxbW5rxvWZrmE4M33PBhB8gbMbb7Bo3xZzpWysSHicQe5Mx9PpTu6c4s4xE9",
  "key5": "3jgPDJdcWTwS3QEbcUqd5fCSbeY42EF3Hhu7xmFWYZWc7PUpkx9Nt2K68QjCqvsiH7eJPv5b1y3TrxNwNZwVY8rK",
  "key6": "boLUYqK1837SYQTFPEBZyqiQ5aQ1tnwwGYGRTGd3f5KwtPHVkzhqobbDUrurES1HiNG9oNHQY64sycW2StfrkeJ",
  "key7": "5hvXcoZ3U2nWg2hiB3so1exvFeK7d9U7Ysg49Yxs92LmZqtxLaD8wrgG88HPNvwVdkCKeX89t64ed1R6AaLyjYJz",
  "key8": "55XXZQSeCY2CWPaFUkqmcURRMJF7Y1oEKZH8Q7g2fyTCy5f2zqe5pj1K42eLc1NyAD8B1WveMQbQyNGe7tuHUUsQ",
  "key9": "5P4hD4dq3uHx5r3gUPrQu8qfT97pbQfgj9U95i11pLiArJPwC1Fb58P72ccd4DDmFJRoc4EDaKrk7W7wA1vPKvh3",
  "key10": "2Xk27WkHH5XZ8RCf7KvFJAUbhMcKEXMeRhSWjYs4fwnUXNuvGN9prAjiNeAkjYKMKR3Q8SNsnJoYbeFeBSnMRLjt",
  "key11": "4ZB6GYi7gRcenWsPbKNVei5ZFkZTCzpLvjGnBv5P8wZiuWJmrZ3B25fWkNSPtbdYZP1LGapiMvKMpPd29ZZZv8Sd",
  "key12": "5HskrBgNSwwkfWBb5sHFFCXg3xg1TzMqih8zLhqhyNQcESmZouEd7C3m2VDEcLCchT47zaPb5whehmadnPZ6MfDd",
  "key13": "3v79psPF8dGUd4bGMuid4yBG1aF73jGKRZkLCkVBfJTv4VMY4FeNKssarCpiEo2QWbPJbVwFGR9UN7PdBpRC37Wq",
  "key14": "2dtCPv4WCMjHAftdHmrXW86v9pBT2kGJ1qzndDHZhDVRHyUqFRzvASH2SpM9hJq5NTvwbv4gnp4VvmUcW3QQm46C",
  "key15": "WiVaw6K6rCgHCdkdStrCwwJqcu8UzWULojymphLGjagF1eMjvf8CR4xcAxFQ9qDfmVYamEuJhE7i1kHhoq6BkoD",
  "key16": "3ipwk1VeHGsWmYtTrweeS7LWubcnLx91VZ4zQwb3WXizk4X2shDqBFkLvHaCtQFGbH88fyveaVJzuo5kyoYaDgA3",
  "key17": "HSTwQMxb6ZprKqcaCXnJ5ke1GxUJ12pq15xdzr13DC9whs7o1MiiCiixp2NiqmtAGaudpJyC1skEP6dhLd8tpLi",
  "key18": "9sSqP7BhjmJiP48TBS8JYkuNG8TjkCLdepv6C5SSexokjvFHvjMyNSP63xyTfYESo2yd2DL2Zj4ismnrfSnLyz7",
  "key19": "zFJ1ghzvpGMV4QuKnuHSY89vAfnq7kb5TKzAwqrEBBNewaFs6TLi2JRhDwKRy6jv3WDDTT3vEn4fvdhhMUtuPey",
  "key20": "RYpykAieXw2BP3zBrKh4E9aimQ2twEqGZ7PNXgg4VkwvtSsDNRnmmT8XTzBZUn59AiqnwSYTJAnc7uR92nbvtdT",
  "key21": "27aURjJYVeBtCEF28X3t8cLacT5jWU3gzZrMvjs2nPkNek3EVUVZFmPfM2VjdbZk97DT84i4GWKcE9WVuTurT6H9",
  "key22": "2SdywsX67PbWSfdSXdt2wAjJmTg6BdHahaoPSkKcuE9AybATTojvYGiBTkz3qVXYWicWh4d5SKr9iMnsoSDS47Jb",
  "key23": "5v1CrH22Q8vLBYgA1cTEw4AJ9VA65t5i4oqCZSuYxHwe6TdFZ5STYyQd1kpyPJsWBJMNFJd3TtBHUc97PXtXNcAm",
  "key24": "BAjYaNir9TJGHRqh3wRKdNL6PAAYQtPx2cDZccMHJewoz5TXRmS9b2oVa8JMVnts9Cv3BM7XQCydXdRbTCMX2Xg",
  "key25": "apBgdhsgbRYH4Rw2i5vxj4JyaEaC6SdeM93kJkeNCvtjqp6Evtf1cxQrn6s6ZtrDBAVEZWFyoVULurpNUa1Lfgt",
  "key26": "61rqbwLBaxruDTegvcoH5eUtfgT78YazX3ZT7NaauzEhsd9u4o9enXMbn57cEBTJLhu5EZ5tHZBrzEdRSgw9NVRA",
  "key27": "3HMxGmA3Np7dorEe4RtHLm7dHNtPp1vfmgH5HSQGKsVpQY54MmHi23de8RY3oX36Ud4tCxvqoPYnituQxAUALPPR",
  "key28": "5gmnX87PqrVWkbHCuCBbq9pnykznrzyrVDSfLL2j31jm1mkeobhfWEJj2NkCaGaxvrMQDZ3CjrHjARw6Wf6uLda1",
  "key29": "2PFbERb8wuxACegTuojskYWEf1GugYA12MPQKayjRzVKEhqCAzXZzdHuZ7vQk29rLnRqh8XCM9j9LjKUPVWPVDRU",
  "key30": "Cm1YkAHzybUARfKmfGunaYfFdywkTLEuQk6rrcDntJfpxC4oiRsp4KJrks3chznPoHcTY338B8stU7X2tNVUisG",
  "key31": "3HyGXY8mg8KdBXB7NqcgYasZ8fJwEGQ4APeZ3uuBzJiC8Pcena5pjAkzh2n23E6BbGecQ2zsjpu4Px4fUx4sWpv1"
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
