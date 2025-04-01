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
    "3KZJETnBVXM1T1K12fyjWwXonwzc3hq4G9HqdSWBbXsy3jySRTB1YCtXidm4Hp2dBnebnc6qbQ4hCJKysfXbwjww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DuSnhoaBxMfJsYLo3F7RyCGTxUMBfCqBdx7iQoD1LHZACNkhbiguETeynzTJ1x9efeVKgTMEar8ZJLG5rHy9F1Z",
  "key1": "5xFPqedWeimtWhdbG81GAYuTpdiYnitYQPEFcwYRWzb182d8bmmLhiKnBmgJ5Ak2FqpVWCKrx4PJcgM3qhf7pHn9",
  "key2": "53fiEwnfH6XT6dsajsWVJGQqPDZ9oqx7DARN2rVvy6YoTfWvH3YfUi7nch6atmrYFjWMfp7mLTP3TWJwVcx62fLK",
  "key3": "CyujdAtkCwMqww3peKedM5uoq8DWrR3sBpfqdcWmLBNiYGHLAz7eyJ7t7yn9VegspQ1Xn6HnfjU7gkQb332xRB8",
  "key4": "5CNPrsUh4r8QvZzHGjqtGF18V1TMMthN2rbBCFab4v1hmMx3nsD2ig6LdpX3ZWFGBvnn2LCua1aat74E9xUyAQ1W",
  "key5": "5rauyVMU7f6e7jbxBony45pxS5dsCj7QnL5WRvNqqHDXQ5q1jCnMZW2ibkp5VH9toUg4eRHa7uLNAAXF4EFQUQ6E",
  "key6": "2uBggMNjt3fXg6DcFvQSeWYsStbs6wHr1EJDdycVfC91QwxAbDdzeCt9LJhyPswwbEGziexSN6tvf4onKrWoNXi7",
  "key7": "3McLDCmA2meyTMYz484x2ZXgaBqqS5EXkvyApDwrMEVZNMjPSDkZjYV336JaovWkKAGukNCdUFkqMn9QFe7EqBtR",
  "key8": "F517RBRQRRFAddxG5zwCjyg2Qpnt15ABNqBGMw261VLdxhMdLLTxjgz1e39DJkosh7RjWcoRKNAi2cn8Puhzpru",
  "key9": "4vZK1gPEFPamtuHf63xh6M4ZCobZu2E9woQAb4CphXXNGmRH5uxGaNuvMC61PzGzftzUM52wxyrLaC5JCiPN5aaD",
  "key10": "3w3bd6UniDvka8Z61iFPzwe67PnW42Cg4UX1pGtuA7Ef3arhqGGmoyrLaVk1mQ4CC8fi1cbiVkTQHEWyv93pjLtB",
  "key11": "49ewzW8mxqR2NXV9bGNwLyrsTqo2r4RtkHv4dVGzWHdEajs1bZBDmfqXYsRxwwvPF1JQaiWW1n6j5KduXkNK6Ah7",
  "key12": "5utZh27YZQQX83m75oiUg6vBGW9LiuzeY4cgNyjut4ESAvkgMtJmxhPQf7LURGMGhwiK4NQSsctcUcKoeVnTaY5H",
  "key13": "5BEW3NHDUYJbZJ2vqGZwuCacNky6BDN24az2jJh2r7UusCGNL9wgHh1SuXF86gjLjMRxk2yLvTvHR61igMWPhNc3",
  "key14": "3XTqZ8ExrYMB78wgUw5HFsDpwDryCJpL7wX3sSKzMb5v5CYWwXaGidQvMEbbASGurjusWHj9MtC8y4cMPbXxKzWh",
  "key15": "D5ok7G6XsZZvJndmUsUvdvBBhQhfWoBCcrbQ6psm5zZ1gHpYBUNjWLjSkcba4X6HRG4JesTfYMmcLLcMbTH2okd",
  "key16": "4uQR8peaocMEniqYEWfLYuCj3MhvdccSNf9mEBivf3FJ3y3hSurVKakRPo1P17FgKug3khowoNqsrzBZbiGUGWoP",
  "key17": "6bAiM75b3FEZZoWb1EeDatHLgwsCZNyfLxSg3LgwZ7Hth1nPVDJpbwK2uCcdn7H3HhWX8B5i5U8qFT15cjrsbG6",
  "key18": "c2nRLc3Bs5m4kJYietizBZytpDVPweAzGvqQ2G3qyPw5uNovAghAfYjbV9kVkWzwaYvDS4ERHHKYCkUAVzymRak",
  "key19": "fxccZje6PQVYXrfsCSrs6BbTjD457ZRZK56via48cX4MoLBc9kauY59uGx25AMT7WQWtP1LPejae3PhohhdcNmq",
  "key20": "2Gz2VdCi28Jyo3TnK6Bvxs8D7Fbz2QnAg7gNDN5MDZZKPxexsa5bTVdybKx6qX5iKrdHu7g6Rsh3zCoRUNmnW1Bb",
  "key21": "3Cmas3nr17L4MyVLr7a6DWZezQMMvSzSE2KdKZ88oep4m5jPt6mui57nNP664oMbaWoHVY2Er1jNj1WTwjfs67nf",
  "key22": "3ARuUVdantHgNViy14hCYa2zh5iqKEELvusF4MxyUnGbqU9er6xMqcKFw6ALucYi9dn4BoKG9utLADFQV2Z7srez",
  "key23": "3SVMUdujHcDLf7bUayZu5V6BV81rzFcjDaHp8y3TDYuRC5TKckBxVTNE3EopSH9Dgzx1CGzwBF8rUQatFop4cax5",
  "key24": "3n7sU8brMXQjSTzMpCcRBJSkNF6HPkumoaoc2ZjMEGSHzdRw3c6YktamW6nUHMgwdeEZFHMQpCHfnYXQx2qvyoKa",
  "key25": "5qMwr7r62ztVyEVymvA6R11KTnQMVqoXTD7ip83WWFgKQZCBmpDsa4Wn8xn3Forhj1itNchzjiskDJ6GGihUBZnj",
  "key26": "3tBHhDRT3WXBnMZWHmTTUwE9cd2BGAp8HqcEDUvktFNX18cn7LR4yXJXeHd6MPUZde5PczNLGLXbXy6mjsSxt3Cd",
  "key27": "3PD4w4wFXinLqWMxy5YV8KUk7CamVz7RDEjRGbhVTtGjLU8aWzVbpVkjW4oNsEmHuFNZKH6PBP197auHsGsK2RUv",
  "key28": "5EuQ7FVRe3PEsDN3r9hzBa8xgjHp5Xo2k2hMqPQtGoHi6QHosH9RyjusZXRy3xyctMJjAebahX5exnF46179LKLC"
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
