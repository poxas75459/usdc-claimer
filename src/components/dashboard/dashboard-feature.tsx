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
    "4qPSa94dZby8MeiZXqTuZ5VhZHA5q3EKrmKUFp8Hg6jmaWfvL3hHfrCBJXqRTimiiiZ276Mbrqei2eQ1Ayr7or9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ViWJTGhVckv4NwKqUvbqvEFddJRXCbJ3K8xTo8Axxptjg7D65mXB6VMZUrAT2f3EaD4aVk6HXz3WMEZRUgySAdx",
  "key1": "5VCTestEaZfKrqtWsbScA64oLyeH37qKgtheiiqKfGg2vNZHB75s1aXgLAvhos6HoC5dWJz4BmoAZ7BYTNbnYzMB",
  "key2": "4FUaFgDS8AAu3tLFYS3F7VrqkDXMZ2Y9cHSLE9Jh7uooqqnMf7T9oRxHAhRaD5FSmkvKpzEqpLjfnxFcwuV2DJyc",
  "key3": "3vXT9PG3aBz2EYDaNZ3S733TcdHLADoHbxMC3jjUPdz7GP1LGsiyUNJHpfnQcZTgYRqgTwMe7smeohDjevoQQAPd",
  "key4": "3whGVKE6PjGoTJbTD4oXyNgR6CU5Gk5a6Jf68a9Zx5q9Bb7horECTejHQN4xgKrxvxtvfJB6b9nfX1bAQodCtqG9",
  "key5": "5zfbYXCjDW4jJ5hF3PSzsMEPb2bPg5EVFL8WgjE9Y6gWJrGjHNc9rRT6yzfAuJGjnj6V9nMxFeu7oe6cU5FU5Abe",
  "key6": "VoXgBxXSV1dWNMFqiQYTM4dBUXppf7XuBMPEmJJmLpY6xyHgGjfd9qNswmZTv9c6oa1SLR8BLqrLvdqgnvVnCwr",
  "key7": "4NWYkPkQbcdddErm1Yg6xFjUAUvRN7t1Eah9wVzE22sf8HyGxJy13Cbny8ThVZC2JKKVBM11WaNnsqPXzbV7HYcK",
  "key8": "5VXmbfqsVcegbc6NtisFKXcVnY53H9ockKedo22iszqhYDjLaD6nq6eyVMJrgcvpCjnh2J1DFyXZUguWmBDsDnv1",
  "key9": "5H9wpNWW4K6aDXyJCDXDmcJTMNFofwoY6o6zFAs5oZ2XRq7fBu1v4AZHky3GbYM8imobDvjeaT7UWCwZencUjeuN",
  "key10": "5cuine3gEwsJVztsCgz2zN2YPPy1NmmLWVwbfHLzFyrzDfwxC8JqkPsNa64xiCJ2Wo4bh1LWN3eR7ooUvrq1WGqc",
  "key11": "4S4nZZQ9SxaDpijgbmWEqwoaHZ3KBEc3iztN4in7fyT3yJRush17P4xH1u7ArQkcvEoDgBZ79st91SRWQmFibqrp",
  "key12": "caS5QxYbDHmh84UJADVP7xfdaEhNsTWdDWQkYV1pmw3GBZX9bUjFgWB8uMBu4VzyLZGpjwPdP3oC2q1LaZVUCKP",
  "key13": "2ahmyisbLUF8tVmyvJnVWf4MgYYpBKkkvGRcDHTix33e99ic3EXtTHvv5ri39zqe7SAcAeHnU7q78toMZqAKDMQT",
  "key14": "QCckdsZYFBmGDfeVZyYW2CJ5LBHNTtvmR7YFWFskMRs4CUh6txYhMYbRnRcGV76CUwMdTdcJovXLA7ToKzmLUHL",
  "key15": "3dw3YXi1GLYVBCTLvAyRpFxUbtz4At11PACXfpkPPB5hLhUiCiZ6g1VPX6pZW2my6xPLgoG5kFpku2NWFNtgFyZQ",
  "key16": "5Bg86R3kLCNpJaYW3jFnks4e3k77TaysTH5VMDrzNMwx1Kjb9tTnRUcWgqajqTKhiPcSi9uAYBobiqMYvpSjaswv",
  "key17": "5uFak3MA9zV3JB6ijhrsficUYkiuZGWmoCi5VAWkqe1UzNEc2SjAgFUKwGbBaox9BqMrvKpQtLHJw5Z3EeoJM75B",
  "key18": "5JJ6kPuWLZMUndCZ6MJbYYLB1MofoLsyD1Wfvebtus6CQ8ZonAAAfpkbfi2bfzb8YxmocTpU5bgno4FxqbZoex7z",
  "key19": "4RQWvSpSn8YsVmY5WRa3vqFRaPDngUKaGDqVvx8eicjhP3GNCJBguz4eGx3vEJCoxMKwTZdsuqBMZrdWx3Eb9qSZ",
  "key20": "2jz4yePU2oUzh8qJcCwLvUw4QAa4fyyEfyCTDUoJVoarCo7Ct11XscbQSY2ZUjzzELrF6MQZGTBFQpDb8ByTn9cU",
  "key21": "5rok58fiECSRGUENrXUVf7SBiqRi9BpMGJGQTx6m7aQ4ha6XCTiA2k8gTp3MBitNDQZ4nXKuZMhPRZLbUyL9t1nt",
  "key22": "2ZQpKEw6GewM983LqZsL3zfEQw8VEMVvW7fn6GLr27efcEyRsQo2PcLaM4fDkc6DDA7f9v5n4y7yBZwTocyS5Fbh",
  "key23": "4wmenAh37TxA8b6iqjoByNujqGQmLgoQo5fkDmt5kxd2ZoGGQU8PRhrw6xW6ERrpWFqCRRF2ap8TGo1XabgRokcw",
  "key24": "33WmgByxQuLziAh9A4X5MHEVq3yotCe7WAq6tAcu3f3ppTsC9ipMMRf8cp64cZCXd56FrQkAnqb6iLBUo8peTM92",
  "key25": "ST7MeZRNQLTwjBXrzgJsc9zEdJhb5oppJq1CkHjUhLPtA5xQAhS9MDUitfTnUdry4Zdd31RVhsSTNjKHRdBKr7Q",
  "key26": "L2UW593oJunk7LoaUNSxGzLeGt74jSrLzBJfegq9at8cr6CWUj87v5V5o12Sv64VRbvCPvU99w2tsbN2jMjYaxp",
  "key27": "4A93MxdVhZjtGAqktqUTCgSHXAvs6rBUrbUfvVdVCSr5Ki8sot8neMy7nH44TB5w9gYrG892S31uPHGXyLk6stRe",
  "key28": "2qDX46j22A8hBrE7Hh3SDN7gx96nribnZdvWMxMXPEr7qt3ECqZD5F5LMr66eGzV7yUY5ksESyVk5nEA7reuEVmZ",
  "key29": "2qtDsPK9u4jhLR2BMVD19KhVoakadNy2iRZna7c7kVnASiPxyjzkXWYnZVjWQMQRtkRXru1JFAw7SwBicHak4hPp",
  "key30": "2E3zoi7j8tcV5CuWtsmUhB7NAdZcN7iccK8Km17PeqxmMDyFoqpt6QPQG8EyYqrdcnLBg2eeMVbUG2oRJ1uY9ijo",
  "key31": "3uxJiPv3X572SawA1CxYfbfNdbsi7Bj5bawU29LwW6BKQZz57wiYf51oags9aRHLcqPjvKYauN9xtybJnwPgPQ3F",
  "key32": "2Z4WxQKGG34BxoHgNzkeQ5peoz2zcxaDFJAuwBj2cszuceACUphaAP5g4pVF1XrtYVuNLJaLxeCDFTwKH5Fv83fU",
  "key33": "MCyPg9kC1VZ4cUePa3WbJjasPmySfPWDZgTZoXmFKWeUgpV9dFvXaMFMp5AroBBgto2WPXGxb8KwSrYZCVJXgtR",
  "key34": "YW3UmMXMx5mV3npThnC2bHFV9ueQxhBa4HZDzCtcBMAgxfzDYKZadpKNV4poBnTx8XxKz5mefnsStbHRvQUvD4W",
  "key35": "5VkHX7B9kG3aErCNHPD7CFMBm6erqkfotEgSewWHW4qs6sXJzLRkf9uqW3BEq411YEDijuny6JnQZD6AggQom9Xw",
  "key36": "5iRS36SujCrsj6s2WXDZvbBckmXUu34DFMDwRreu4K23HSFnpuPQacqxLgAJNWDqbpdPV4VkvZWFXiB1ucLeM8CH",
  "key37": "5M17jfrATi3XRGookJki3KseeBsuyNQv5sWr5e6LMWgZYb4Pru8emHDobWs2TVi4ELJRxYKYWJbvqWDNfU6pv3Tk",
  "key38": "hgyTfkgj9XFoemKAZi3G2Hfm6inTFdTUUqm1UEMRJRpEypVkjc23j7bDLJiQZLVmaH3qkDFDWrTNmzAsJhrT9YP",
  "key39": "2L4sNa6s4cPxsg2wr8x6ntgAFTy3TmpSeWGmrcnLcpbKyPv6AquyKyQEusJbxyBKXE9LpNRBEcTj2mSQLsJMY32T",
  "key40": "8afPtcpaxhaYJRCHzmi6WCvzGgVBomWJtXZDsP2cmhVDxkTjVXKfNEpFWBQvMAd2HQuARg8KFsXrxf3uud7KvEA",
  "key41": "2fdb9DMGUK2TQNTgdvjDAgYbDGhNoSTvMC4csM1xRSKx1V3stjn7Ngc1pkSmL4DdX9ug5geEecXFYXk8A7QoX4Cw",
  "key42": "VPbu1bsyn257edbAyBeBCALZrzQoPjFV6dt53jQkCwJKAoysLHdza4yNmPmLeWJpyFri1ZD1WRRut6Y1WuXLDhQ"
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
