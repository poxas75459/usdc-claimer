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
    "BN27ByYGc1Y65TPWdYE4qPn4LFspkPSSPJF2293GMiUhfXSHnrVT3hwxxd4wHfwrjjFh7stVuj3Zkcfdpg2uZkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Et46pUTP4LQU7TDuiPJTjRydUyhuwWBjrvocmAUgmPq9jSS1bffkywfLRDjmvRXbbWpCKQXkKj6cRUBAMzBQwTp",
  "key1": "2cz2AgBM9hSMCBi2GePbWxNhTVJLvKahZtdjhcezBxe3Z1bwUkzAWSUnMKoQY1N2YSW5brT3Sbh3TesKnyZ6DWHh",
  "key2": "7H4FL7zhLJZdw4yBtLzUTk3JRAqZ8Cfh1QYMp4A6aDUzdhAEk1PBLuAqSS5nSNyDiVQyMZzwA7a7RWZtghjY96L",
  "key3": "2CVCxJKc2PC4oMKZ8GdgjdeQ5omzDpJUBXtawMZ5d4HmBBjzuxNjZskLdjifBNPtUS17EMBmXYrkrGSGuRj4jykM",
  "key4": "4Mo6vz18iy1fQJ71zmvM591PVWvcCXKQTFNv1GCogwsC5qVojAUMfHcBNha8FgMa9EnZPbbGFjcibAAEEZ2MwoRV",
  "key5": "27VWoLjP4b1PW6FP582BnCBAvhcaJdi6BQ2oMgVU5MX9CDLUTym2jpx4PzV8o2DWoKij44NAPPFciwn6duRHqzuZ",
  "key6": "2U3YMoEwLnBEXca1BLyo1D7yrMXsNATkRJb3WiFQwJ5uUtJhk26NNryxLKhaSdpBLmuz8wqwLFQ5J5B43CVY5PWu",
  "key7": "5pSeEaKKwqWVVh39UA37Kua9ftRjkCcEXLwJzKpEA5u88FQk51s1ES91kmTk5QGDM9MpLbCcetvJXHipd13Mkb8k",
  "key8": "3yDvMFuaaP4uPBTWJc4g3aXuyZuLywa69EdeBPvKM1jgkrM5ZC7G9sZoszRR8paZ3wEtNPfG6oacVC1PAZ69Yqf6",
  "key9": "3kWCLkwaZ8EoRbrgMTHj5E6q4Ti1ifqtKeBqjTXLuxc2n3e8bMT8pjjc4AQrypiySBbHVpSuZ4K4Mb64EJFf27CQ",
  "key10": "3p8brVJ5ibNyVfn4RzEjkEJbecgWjvWjwM1rhRCMhHjUBy6wRX9ndSDeuvzt6as3FVtVH1GHhUstperz5hPtUren",
  "key11": "55LAkrN9xVZutqYy2GeNjgMXMHEftj1zkrYsMPuUwKfYEE5NjmMsALJvjqRxfqmv179zezwzQhWnDyYyoxzVsaVU",
  "key12": "AK4v9FKdtxmznf7rdx7x6bg97SjiL6nC7y84Vi2wHYVhGXdLYSFzwD7TtfPvY329gHDAB5NE8Nc7fygR59iRYiX",
  "key13": "3oZf5xdwzGam7BJ3QtEinBpL3ZTdY13RvoM3xE15ZJfGgXwuNJ9EdrZeazCRk9emLKTeFVfkMgDG3HMdaCau2v1f",
  "key14": "2qReMAewVTxk6QkKfnZmSJj32YLy1FYaWu7PneFFRkjKHuWgpkdkvzFspfCifdnrkDwEya6Y6UJGCMZ3FJJ7BU1q",
  "key15": "2mKPZgjk2GY6RnddRSSrGbPvxw7UaipuXNJRbu3YGVukwXp7kkG2woZyjxFMkjnhThFe3DA5Jn2p9cYZUFZAUNmy",
  "key16": "4AwRFhQt1oZ2XW7PfCAe32Y5visQ3ChXq2eY91TVcq8Z6kkUuwegxVpsAqhcQzJWDhDu5rYURdJhiCNUjNqkMh3S",
  "key17": "RycxbaV1Yb89yZmobbtv8Skd4HACW1ayH3ifnPpvGUJtt14zyeBJU1itwW4kFZ2bjJY5Af1dEMMTgSNdUcctBEg",
  "key18": "2VhtnbXb6eStPbLGRx9uhZbergJyXpShzPDfFS9TQu4qJLTHLEbQCPZzAh2p72L7McQpXJCbcbQWLY8iQYtRSZnY",
  "key19": "4oTq4oceMn4yYg2io7RMvj8tAQoqfktvPf4WQByap65K8SJGyhan9kKi9TiT51UGN8SXabBQYzsKC89AYzkzp7Gy",
  "key20": "5H3KXwKNVNeSpYe5uMqJ5to6k91dximcYK596vXA8GmxZT6fnthoSNZudM676TdALXvsj2DuCjY4WLstsyxgXETs",
  "key21": "3kMSo6Xr9hoYMcpG35o8WnE1SSQk2jtNehTxNNsScp5CuPsrH61JZimcCUKvfsEnsgeRUhYJYGMdbatzo7EXhmjq",
  "key22": "43qxubiksKWd8mAqPFT9Q69aL78dp64yof44PeUkf1FCHtFjg2nFkC12b8kzY1W5UdDGqrbTXdUTmLAtDmezJ1zV",
  "key23": "Sz3KvpNouA7nFhwuczp2XrYuVCsxY9zKinWdfBTKs2yBW24NQqFNtgMMapTwu92BiW2TpwZKLjzL54DKocYy2eT",
  "key24": "7M97jajxThru9jrfD6iTcXvH11iLLrsC4BvGF6BmU9rDEjUZmUj7yo83TtxYXXdBetFqJ6BS1kLDKFRdbQRuarm",
  "key25": "2fQGc3efykhBKNNezDY6rTPBF3JEX2GddxgtCEmQtgoLnfb6dWtj355igLpX2GdkQdAm6dajSUpqd8dJTahUSN5W",
  "key26": "5aZY2fdCKdFnQz1R2odwZBgxQEi2G1xaduV32UZjbXSy64cK61Z2qNMMrdKR4Nx3Fge3ZFHMiqDmnrawcC8SD6D8",
  "key27": "1yKJeZF3ow94BfJrM7Prfmw5QfeJXwBQo8qQ5ZWA85ZRe1CRQYFiCUMXjMGT5iJjgzEsHGPqZjiTbxFJgKk149z",
  "key28": "25sTCFzADFjxEavvouod8xXmmkhHPBMhPAATkwdjb7ADYFPcbLXVruSL77McgCYEN19YpU6Ag6SYvDZCQqD3yEcW",
  "key29": "5mrdmpoKJvHJ2CWeTHvodsMZA7n14Pat2hu3KZ2XWGBEnQbiZQVyySpWuzUyRe6WphWRquw6ovRkvpVYENrHx479",
  "key30": "w7GhaJ9Jgi8DwPmr29hQKxLuSSoq5FVosDjZygNNG2e4ZmaRbLawbUSpGXuU9BD1z3LutfW6VxeHpj6ve4JhDbh",
  "key31": "5mBqY11uj8rP2y4o6ixUn36bKT41cX2kmaa3cmt5SshYkek85ezVuNNB2AgMt9gSbuxAHk6BxtpVqfgWNoXc97Nx",
  "key32": "9kN3qauouU38az3EqyzRWcfuMk2nBaX27Vef8ew7yRGLKnPjxF2HBRdgWXAqyWyG5BcqJSuJj5jk8QhQDBPfe8Z",
  "key33": "2XjVmWrX4xheeExBgvNoq9H6HZpyitmzBrVYHJd2tMQ4zv3c67hFpstwWpitqDSDvKbRCy2PBoFPhJbE1oT7qPcp",
  "key34": "5iRM9wvDFpJ76Ebh994VCMW4otco644sTBGsmdyiCibYWU8jk4Yx3uBPZ6Rspa52GnnWgVuonoV8ewhtvQGJD5FW",
  "key35": "5Au5pQoaKUAkt4xpWodbTaMn6fb3nhggPPWSrw3GJ8xM5Tf9mP2svexrXDgeDsorhgrBNJYaQ8qMPeBhR5SqBJRh",
  "key36": "3ZeJBuimSikWM8z5nYgQ7xNVcMrh9k2BVqqm5H4MNme7q4qoKTwve5ScCJ9KjQnxGD5MrXhHDT9xM4m9tHwPZgmH",
  "key37": "4xUNkAkxNsiRYWA27frLBrup5J3Gg2s5Zn8QMj6aXi3CVDWd9XW8suXP1jo6mJ2qe31WWSJ25z8CTKDStAYEDnWW",
  "key38": "24yVW9dVWWMFfEsBsSYorY2RT7uFXwsjW6SXo6gaNekjF9MHGfooc2JWH3VcetH9j7VAm7NMYLvajwy8KbsRNWdD",
  "key39": "4hmeaGBiGJf8iiqbSnFLEsscQCyJPMeDAGve6FW55zPLUw1MXnALWgbDVxrGaHHVPj7F9z92epxCao7N8Sjtf8AL",
  "key40": "3H51aUBQYHhoyt7jFYEo8a4q8GARJDTdGAQb13e4gBFWZL8jC3xJ6kgyFy1uzC2e92DLoVoR4R51HH5Fe3CFcHqU",
  "key41": "642HS81oXwRf5uThqNrDhj7NHbEnxDZVHsx2rqDXiMBc4nEnTPiTpzZbrKLr431A2pwCP7mcK12Le8FpDK2kQjHQ"
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
