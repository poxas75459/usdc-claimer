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
    "3Stujro2DJ7bnzf62X8RAint5wxRbxBresVjaMhkaLViAChBSZLkdi2fYPPJuPumakzipopoBAv2aBMEW9ZoAUNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pj6HiRie2vNrtutUDHmf4DKXm9NbwVxjtGRaNxShHs7hWxJRk33JMpwkei8komcx4JegUPPGCgDM3u1vE6ZSnMj",
  "key1": "65pbKwp9YAyjYUPGM8eQSg4xJtv9wHBH6KQPFBduvLhWL2W9uVjGrEa8L2p4e9DCc7vxdSpdegQtMAWcofSCCXd6",
  "key2": "26UWk1CKuvsaXyHxhuNFfGujsAtF8wXjyRAEg9Li8n4EAWFx3XTeqbGd5LDSMDqCjAgzKd8uGdmSt3vX7qu5U2aQ",
  "key3": "5LunfeN2S7Y55rcg72Pp6TPewHx5csJd2NoF8teLKhpWkU6NEfQyxgGYtrUd5V3vVLZLtFU4jLVEesGFsNMDeNUo",
  "key4": "5AVRRRoJnbPDahD6XTnCBiyj5fi9XBJdNWHxWz9ANJKEeBxptYk6jQRjz6sBFypeLtDTeWfaMrLw1MbhL5B3ihsL",
  "key5": "4VTENr7zWLHdMt2YrMd181vBN7sJPWpyu5aTNjn9Hq1iqXM6gzFSiACiWLoELEyrpJw9pQZ7hXdb2qCm1j3D3YMN",
  "key6": "3GbbV6acW5efDHsi5dec9PFREwcXTYsmLfXbyooNaC8U7uc9ThNJ7LmwjBDBhZJLS1zhyRSMFcoHC2D4mwLB2owE",
  "key7": "4dKrdFmJX9GgLVAUMpH25kVQt6H9Xrs4ZDtmxtbp7sZRsZsYodTct55FmTo2ZoyqN5qvd4vnZBjsYRanjf5A9Sd3",
  "key8": "4oUr5LWzcF4z3qbMV26ekTeh8XHqD1R36XBPj42cesAoKa4aD7hLgpYVT3CGCwK4zdYXCU41zefeCiKywtBzxAKJ",
  "key9": "3vBSV4XtAvas3RuGo9JdzTvGeFpbxpuU4cDnvShMqgR6uknxQD7LUtJdtqpTyXYEt2TxdzYhpoST1iprfBLc4g4s",
  "key10": "XZxbVT6budTMaqG2Kcp87s75htdM7VV1VrwC8F3Yw1DXuBZ3LuEfVRvuJDgHS3xmQr6xYrh1fbZwKYd616sXbMd",
  "key11": "2hVxB9uKn2cFXDjUvMHXt8BYvkytbHURjeRirqm87fqkEwmKUA5SWeozkkKbWRM4gjsriF5Bp5gCzSEHYedRKLWA",
  "key12": "3y8x5P2hU6ofFexW8PxaTFeZwJVjwCWmMUQxUNADBtiaBo92yqMrKMxbWr9YPkoLjZRaKKsSVDaxi58fosm32WuU",
  "key13": "4qWvf73LkYAeyaSqxfbHjh5Q6cZuM8yzGkWv3baGa9m43Wgp5r3J45LjFBxbrFJNZfjnYKncxqQKEcvPLoAwDPfg",
  "key14": "4bTfAAhoowEeGWe9gkjnLPNNBRqMMSxYFeK4AhEMD9UY2U2mSmP1fbrmKatNqUax7Eqw8SohP8NgkYcCvxCnn4wN",
  "key15": "5C7bSigkDaHwFw8psp2RARChG1w322doHPTUk7KfcFsNeBxUXpUj5PjTjexWieAnobvXg4H6ikjx44HSnZfsAgCT",
  "key16": "5hauLL58kpu1DA9Ctc7VVM5yANeyKeAUxar1haqCbvP3bgfH6GZkK35R3Az2BVVjYHbCwFpBYoEGCiUaRuCyWwqq",
  "key17": "52w84SgL671SuAQEZgDHgByyXN2wkTN8JpWSzrrwKbCX1NCUoPzqEqE7f375guhqxdrn55GQzVgvDp7huWc1bzUs",
  "key18": "5CNiSusXxLog1Z5gSQfenHeBF63kn64v5A3A1EeiydDeSXb7ycrEZ77uBrP7XGUAAcjXh33z47tY1v5zSp116kG7",
  "key19": "5o2yW8aMrHqqAqs1ZRWZGhT9Eu6YBw59CLGLAyak9w45k9g9vVsrtBfZLJ3DC9SekwtfyjsYSdn6aPTRF5RUjNN5",
  "key20": "2V6ucdURiJeXDNAQ8usBJc4Li6PzLu4tByUvGNFzrcDxARCejUi4txQoXH3MrqdAy29hhdBZgYEkXt28hB1CCMkk",
  "key21": "3pubCeeJSKxPKnKSg4n8MfUYMLCyX6mmUoEAHNYw4381ZXFWvbyYrVoE9tQq4wPTzWcoikHvZT3st47hZGSYDzz4",
  "key22": "5J7BrHxG3rXHFhy9tq8XCBn5P7DFgLDqDay57BWtUZkUne96fy8pZ7zh3wmNyhyHjiJAn32Kn4JthNijiUoeS23N",
  "key23": "45tJrT2WV5bfnFMmJnB89eEVZw4y7i4SodAyV9RN998LU8CevAJZv17RWcs7L2G9bj7xv3Qf5DiL65sGfR3fGUWB",
  "key24": "wpspNT2LSbZCrw4zFJiWB1GLP7Ukqs7qHF6AyVndzkB4wAesZjredXdDDsesyVBb3kBkgBcC9b1micXtHuu41gG",
  "key25": "5AowUQuSimzK8ecJN1vXMEBt9PXUF7rCrwiwJbtZbEbfeShUsy4QeHAzUSUUEB5nmesVopQhkhBsgGkaizSyHwiR",
  "key26": "asW8tx8SCz9zZ7P9X7kNhYzfd8eXZT3YCGQEpVcSPLVow3gPPFFEeEFNHLks4iEEAKd7SuKDRJih8qxijCV5aT8",
  "key27": "2G7gPHEFbwEc9uCNLojmESuapNRScCDKQwJb1ocZYq1gVLk29o8xDXFW69eHdLzvnc386o3epzoK1ttXFAV8Ai1V",
  "key28": "48B1Jh4JRQJnDRSac7vjajrKefbUXm2QfSZdLLrCz5hvXuCdzuHtjE9LWX7BHTKfeJVcNZJFYBheBCsrQG2vTsxV",
  "key29": "2idKcrvY8wsazThQt5hPGkjCtdV6VqLhfbRG6U7UqUdrQ3YvDyV4PuWoynmJD8xS97UvKLsNEEgyn2bDU9MtFcb7",
  "key30": "3pBHYP1Dv5xkfUYBJTjbzH1U3e7vSCiUcKwE8Cy34LGtDu8Qnr279uUYTVa331aRVn6oCyWR7GzR4koVXnFUXJfd",
  "key31": "5F4a3PTUrchDfsxRHm5FY7zNH8sVP8b8erR559DHQeC3dcTh4ycJEGjC77Z5pb68Zrd4HAeWB8vyN2Q7LwYwF5WM",
  "key32": "37RyunBQsHCF2NhoTBZYC9NVaeLGo5AWWB946WtHFsrfb6cDJBR6WFtfuBCBVe1PsVqhKz68FydNjQgDamJtA864"
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
