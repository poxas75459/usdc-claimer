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
    "gwLTcGktD4VUKtcR5CLNj24ueqpEKEX7cwb7ANGXjUbpwwLSpGR69Qam1tPuhWHB7kQAy4152cTxjWqtb5i73VC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SThPuiX7h5L8jPAvKAZx1rNomue9FEv2J5VmmbZozNPwq4UGxeYFG9kRuc8TruryAxDmKMQBjirYebm3CiZTwFT",
  "key1": "3PiVZMXWxbyMxgCstVPkG6xGY2GnyBoQLayJEQxZNvaYvRvaKXfYhfLpNTUtmZ2sy2Kp5ztH33M28EPQ5YLSkKVU",
  "key2": "2DXCWhUdaZ52RuCnrG9ZJFvfSV6cqHSN9MKj95dgtw7256uYkfjZPi69d5NHLoRcNKTKdzkQ9C3W1SD7aMvfQRpn",
  "key3": "5YxKYd9BhcQjn8jkkA1wiLt9Hbe9gpihX9q8WEFCrvnjBmbyUsqGYnuuC5yZZSFkpkNe7k57TPyaMZjj4oXJM13M",
  "key4": "2zmCrRQEd1gZ382bTGKfdfuz44voxaQvtbm1UUPVBFVLkpD7pwte35xiVzwpdWH9DaEApKSRhXGjMUH2hrxayaNp",
  "key5": "3boYs7UNhVzaa64wTtdvePUs2NY8iZg5gQBRhSPXKuZ7KLe9tj4mAgw2wjzygDPMisDskmqJMDdvKek5w4auuCHg",
  "key6": "5w8o5EWebJmunQDCKAGutMuNUaEeXjztxyvRdKPBPSnWWrsPjoY1b5ayx5G5Vj6q6j2PojkeLoPb6oNEjwBx3CpL",
  "key7": "5WekfcWGTDs4SwMTHurJCz4CTBUbUeNecWTKTA3z5iVDWjc1PRXbPdnKmA6wt1bhnV8vmkkZJ9cXqHxHHfaVqQGB",
  "key8": "VGHUw3M3HKG7HSbX4qCMs7iCpYWv66NRrkBJW3uF3KrmUB7MG3XSSVZ4tP8FGLxnEyV5BmxczhK9r1Vhs1rhk4n",
  "key9": "cC6zYTVHxSoeZyKhSXtrymRTsRFTWE3EQreXJLQgt2vr6rBKCbt2cYoqqFSpKz5ga1GVGEg9foTonJ3bx5vWb8R",
  "key10": "2fm1N9c2A9UTvo984ufmQwkM3CVYoNY1AXWeFGuPgJG9dj3gRiD7PjzzNgusRBr2quhpv34AWv4urkpy8B1DDPbE",
  "key11": "4iRW525xqGRVM3qbibponfyxgEDRGJivGGTALeXwwYqKN1yrudRLGBMYrexECnnpfpGJDyQrWzR9vHEWHFABYbod",
  "key12": "4ZwFn1Dm13vTCB6fvTPEJHJGxmdgHWdVPXkrjYf4B8ANYght4GmA3wufHeVtGfZtRX5dF8MMzV3HrgtTKezJcShR",
  "key13": "3n8n7HADLgGuXwiAjw6dRMWxGPdxL4XTAjXRP9wmDqtHEc6sJj4jY2VEUBLQRVLUX8bXhEeyP6cN5jv8MYRvPyVh",
  "key14": "4LVCwcctQiNrHHDfhBRDGeS62bbHewUyrUE2kCDfnH4eNNqjroF8arGhxpF7G4GU4mMLiMNKUV6WNM8MRpS5K3W",
  "key15": "bzTcn8QYFX9Avtn8pBpSJ3BdcMmiaytrYSDJBSvTSjZjcZ7YQoYBjGHqd4EmatZYNwUGHLgF3R552dsD7bcrbR2",
  "key16": "5EL6qoFD13ivY5CaMvigvmdPTb3t8ZaGwd95sZCBZspBUYQUfQ7Nsr8HX21KAFkwynS2qwKV957m9aNVsjaYdBNx",
  "key17": "PuiKf47HnhaNSg8VKzcmcXiu8vq9JAGpQ3jCmjmNqQ5eisR4LBWqSABjxeq3SjAKmGCk6R9HJaRSS6QkxzcMvat",
  "key18": "5MQMTVGpb7xBxwaQ9BNnESoMZaMbhGoTYyMA1C1QUMGqV8KPHh7Xe8k6PReEQghh95CFQDR5BHGr2XrdLEfoUFyS",
  "key19": "5g1dYDRr7uJyxWpybz8bnJ1329yotH8FysC39uaziuyh427oZ7gGYbLCjz1Wxh9nMsGV6RUoHURohgNc5gpggF5j",
  "key20": "4Cg3sNir8igoTDvT4XBChVKqsrh1UP3MAHw8ispVQcUXsJkNYA2bEJ2VL7hF4ScTSwMDHPXcmQohoxCyHrifGJxd",
  "key21": "5J4uJR7E4EahTUHEMCuj8ARUs5uDryGjXWtmWtb6rXMmL8FcJksSnrCSSwFdFThxkta72zhxWeRckztMDUGZSxxe",
  "key22": "Agu5x82X1BcB719DQxqqUkmLGLHGgpV4wCN9skk7kKw57vHfma1H38D1Cf7vEZp9Ybe5HqF3hjwKni5rHNuwQPb",
  "key23": "5jgVViUwhb97aeubpKmAWyHvYx9WGNymX1LCjPQVNiVGG4h7NmfRVKzbj3KnLzeY7cKCVGgYcWJuDbmeGVtM35G3",
  "key24": "2DTEBfmR2b6CrgYF3zdePwRwMbuwJB5tGZ6LPQtNDNUk2cNVGJsYK5hG4WDLg8yjJ93fiZorMwd5peeYwKZrkbVi",
  "key25": "23ucswxuBTQZ4ZuCshraB8fC87L6FUrqEjmymvUjBei3EXD4sw2wR2ax49wxFYwKaQAL26u84MQbAwUVChX2gi6A",
  "key26": "V6uC7pxAFZrkD91irtZbuTCJcUVomK6SJVcxjyPSvkHvFfWujjDgvbZu6k4oisbmrZVgbEYw5Vb8fJvNoY2V23s",
  "key27": "2pXwxq6RErNAvuVGF9NctWBBcgVEAaKbg8NTY1enH6y12c33ZYaF368JYPasduzgWPSTCLSQ6BshcRw2XkSfbbqC",
  "key28": "3h6xbSbksiXU2bKpK7Dc5M2FSSCeDoCnJvriVmHVV1ibeNB76yBVSL4sXr8UREBYQe1hSqbByPNqjRbtnTFRcbKY",
  "key29": "4Yy5FBbHXuMG1DdyRcTbp98akYE5HMj18LDVaeuaFjW1cF6zScXnVF4bhKcY3jFFUeoNjXpxNsLGDme6jgisyMKv",
  "key30": "3JesdtyGzKJWCCXmynHCdLbpRJdXpTehvcqKJ9gindwgvwtKKi7s28c9NJ5EgfXVKKbUuU4Dh1inPTzptRJXx5m6",
  "key31": "5CA8TWPdgy3D2BrWuaQhcbM2DZSx39pGBfeUP7X5DMUxBNH4AoCUMBMQBYYPo3V5VFeyuJumWKcMJL7WNMzjp6De",
  "key32": "22woFHMybHvEZ3wL74PZFGdzEaBLjZLL9aVEZTvby8SvuRmiCtVEMEakwNBLyNnPSyVmszbsqWhcB9fQQS1S9sZE",
  "key33": "dLHL4gQYqdHRFsVASBFbMaBhWuoxVUBwxRXzEJJFLpXk9Y2wFdWpFeWeZSVbHE2aUwgRVkb6MxHSas9tZAenLcZ",
  "key34": "LUXqHjTTwQyyX6fAy7jAvLjY3JxPgnJjRYwUgSkHPdvodQ8K8fKCTAygJQt2n7Kgwo385sDQZkk8iBCFBLqHrnb",
  "key35": "3aCZuX5QLm9hvk6u9GxjnfkJTPzSLRTTSBs16x3Zbj4SpxshrePkPGoCr1M7wTeuyH6mvAz5aLoLFFNsQrwMdGjg",
  "key36": "5Mk4GpRy5XLnJnEhUXdJkKv195PtJDPJDn6QEQWFG3C7Tjf3nBz8pZCgQALjTKD2oZWmjrwFfLYygSdBPLZVHujx",
  "key37": "4nfKxDa7hwQ9Gae575fCJbep9AmJVhGQBxoY2sRRyc1VCqZd6ew9ykjtviWscDHqikDFPymt5XNkEtAJofcjgGip",
  "key38": "4VK3RwbsmzJhbF3wKTXpP4CToCmmWXMa6hCoKqnAJcv3Hyx7HEK9oUTyvyhCJhJtV1XdSkpDEhRtaUW6KdYnCSJv",
  "key39": "PxmQvzy9L8tZqEFeu7NZu7cafFF5RfDY9v4McmUzU4zftVR345qpuJxrkvNkxWvW4Vp97b8pGYKy69WaGLdvqZ7"
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
