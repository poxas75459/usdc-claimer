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
    "4SKgVdmhzt3g3AQiinECkSu3qarAG32MzFYXh8qVJ7bHQjA1gWbdnuZLt1NbyXJcsHnLLyzvX3n6aVaUFeadTaji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YPrKpWMcqNtHKrdL3dbW6Le3HRgdrsxnDcL6E5ZMgSNiJ1yorVfoEYHM4EhG6UdWcacArkJ2bGDDbnfZBhu8KTW",
  "key1": "5nDLrCXNgjGbr3eGfhBsmG39VwBR4y2VYEbTFCUxBVtaPM6LxTwESvqkbQhi4bzKYKmd4jX9a2PD4HnCEFKsCWEE",
  "key2": "yHkUhWycAxJifxcRdbGwtdm3fE12GAPn6FFUbu87XxJc59boyCKenpfJ3YbcTuPivMTP98MMq7pnvDE9ucwriiS",
  "key3": "57BCLNLxT9bwCrJ7zermLoSFQp95TWs79qUiBcYEtane8cKXjcwc1v4wpiq2Mfzmd6Yk9V8wrHLdV9bgb4z52bUj",
  "key4": "29XxaTXAyZhsRkhMHJDEQrFoGh9eLAdv9dcwBwM7oRQpZF8zXyhGwskTRJCnUVeRtsFpnbv4HBHJLfQenPiTw2Pz",
  "key5": "43s9XQtKqD8ixk61JezdhxKQZSbr7NbGuwXczkZKjxa1xHCfMTQLydvccZMoAdrm4K6FScdFyWKveRcpKrfTD4RB",
  "key6": "67ji7M5zREjygE3nSBXF8iPyL7bZXSAnUaA2zszFTnA43mrBJssDTjQ2bbKXMujnZXCpg9qLhG27Vra1RPWCSvv1",
  "key7": "7VfJubeeKq3iFcXo3kQ2Lv2NM1itzv7cZp4Zjr1VfAZVcHt8DfDK5mpwrW1wh9CCWoMZ4RpgUysS6shAcb9YG2L",
  "key8": "4ypsxx12yVN692f9sbacGjCfR8CKKrBZ53wkUXBDehdyo5jP8aoadvps5F6T4Tq776gLWdszgdGDZLCWrwWsfaAR",
  "key9": "4pxe6Mk2sbVtypzF3xcx9boYBQJjGy89gBU6uU1huGpsWvmabeiXn98mYXv7am36H6hZ8mcEv6oTVWyn2rBNcfU2",
  "key10": "2zEKo6XTM9YDCLc3Le5CEjHaBX5uAaRDswsaokB53kESesfaMbeBe1XBbGeypBpZq5ZRiEWpUY2xtXA2X8AVoD1S",
  "key11": "59KqVYdwCnH7d1tr2KUYzwDPTN8urZUVtW77zVJs4WXoKTVaRBQB1LkQW6gGo5aETFf3KmUgzvptR77fqPn4k2yN",
  "key12": "nD9yhXNhQkS2kxWoeCysQybXLWHNVpmXsgVXXafVrgNNdgjVubTTuycywy82TP3jThY4ZKHJHMbvazwg6THpZ7n",
  "key13": "QdcUn2jNcgQQWZoPnFasuZ6yKyuFQUpyadz7PMVAjFM4BHg2Lafv3Lbv4TEzVTzZkUpfxkbiLYtY7MkwQUQB8eT",
  "key14": "2mh3isZXkNJZCZ2MtTX3HwcWF4S2croyyPJKj2wz9NPfMmYQJxtuoSq9akvmSTa8D9bXGAHte9N5kgbr1EiZ5ked",
  "key15": "3MfgfczjbuUG7Dmv49bTwhcYp3b6XfWE9rEkxhqu95CNxrX8AnBJa5VgCn3EunJd4TJ2YTvwk3mycxCfB1akkKFs",
  "key16": "4qKfK2b9u2QAbehSNjmRsx135Fu8pQXE3fgmvSUtjWRDgQtvcZNrqSvDouqZKYTiBavYUiqgQJ6m2NsbyeTN4MgV",
  "key17": "5tDpbVwmdhqT11jtNHQDZkVPM4P8A3omHo5oaJvwWcfPm9w4qSj5C3C7S99FYgQZ1yXnt4M4zjTV23vFcEAQzwM6",
  "key18": "b2jQnfMSeSxr5eKUgr8PRNtz3dVzwm71hBpQqaxKGS7oGTTTUsyF6LtTiwuTh5SZ9A16ZoE4PWqt1Ejzrb3VMJf",
  "key19": "42B6F3H4DPF3N41W7MQcAbysnSiVc6V9Gb5Zy5yrjLvA3zLf8UUawahZZzNG56yioNJpKujpnjS5xLEFr7pdWBMn",
  "key20": "3rmpqGnoX2ewuZM4KuyfAz8d3orVATGxKNsjSiCz4GrMjnRWrhaoVEPSYpFyCCyvU9rbU4yEbC6DNnd3CACUtfWv",
  "key21": "3hYvR4tDGpDz9pS5w46XBTtiPhMZMdhDRJ55KAEma3JgXbrgEY5ESCufFu2CprEoYaxCPzTHGwoV96N5eq9TpjRX",
  "key22": "3PXLtk9Gpn3xiYD9f1BwBd9JbwZQnii3cGDyhos5i2yP1aE5UUfsF88GjBxt9okBDupEqu1WZ3UZek4jH9S7ohhy",
  "key23": "23N9mhXtnLRKpK31ehCvzJ7kT2e3ezh9J7xa5DXd4TpqPgFMUxBgXzPcZnLECrG4L7RyKnBiwDcqa5HHrxeYfe9J",
  "key24": "oRhLpikqHVGx681dPRD4196JuS2X8W7hCqUcBFs9AR45k9YF7WC1EbYCDD3o3o9x1sypR3h3Hy962UyTobNBmxT",
  "key25": "33eCtaNH8LPq5hUMLaUhUM3cBBw9HD9iPY4MoPR4QruxrKttH7LmMXFpaedc6zRxXz5uzzNtMFEdAZezUCLASnV",
  "key26": "5sbN2h3UYxvrt5PxADNFGshTMt7eubwtXpfFGsQe7gttrqWGQrnvaAfg82UyqK1WocGe4AoN2xbQwnTsoUMPvkxj",
  "key27": "2WufFyHwWJ4TBTZhaikXBGcA9gsWe24vvTKfn8iLAUtDZmcSmPn5dvHUtvToDTvWtkFvKmPx2a5Cyqa3xixyjgPT",
  "key28": "5fzZEkzcqTbiMB5fsthfDUC75z7wEBwpZYFYoP2w5JWoU4cja7CMKVwmHo6yoSDyP3ii3XwCcjCAJnY4B5WmRMwt",
  "key29": "3Uoy4JZjmCeN5WCXNYusbsPA5MPS8uvMRCVb3VAQ3RycnR6KzBeeeDgUHBBVci35kCe7BFerx7FX4wA4J2tfGix1",
  "key30": "3vB4GrAp7fcREkv6FQx2e1DXXKcJvto9snnvREFijPMmVo8UErxkKr8ksxG294m4roYNoLFehy2tXLQ1AKBmh7qY",
  "key31": "nygtmcHGqmPBdZmJZ5adHTDzdLCwubGdgtAkjq5GVVxuqHz3VDi3GTp7m8tbuL6sj2qmoaypJBpRaUPFsBvgcDc",
  "key32": "2vbWScTvn3idmT7HDZdmhp4p2utt5sF57Roq18BXkN6tzpzs2ULtwxmjo3N3ULRbfpPYuoZ5oA5iDxZGuukofeY7",
  "key33": "3Uvy3YBgM95K9LW6EKCugfe6Y5W6yENNVegkVHM4azXGdMNHUgg1erJjuRFxw1SxYnpFgGDFYtyZJn9y7fvBaU6Y",
  "key34": "3fP2Kb6JNBrixJPtwyDfN91yPkkZMppygihc7emr7JaesQGYm89q8XM25X9Esn1rd9896UJpCbz7tTRoiEVPZB3B",
  "key35": "5Md5zQXDX493sucanYSF8HNscnyzcK2zwGyGtWJ8UztNxvkdnLVrSBLvYZDX7SrFEZXAzFir3tryP1kADx7gNZp8",
  "key36": "5Y8sfKvctWtdP28WkY3C9NKXMWJTuwBpFtvttBsyBWdX22uRLMuqw4FU9d3AsqzVkesHm2GTtRV7JCQaxdDmcoti",
  "key37": "2EU48vUsqAxb27ozjvEycDsQcV65drWZhzqaMogPGGQfbYGT1r1BY3ZsdFcRmt47Fi4bpxHR8NHgKGVtdmeiMRmR",
  "key38": "3VNN3cV3Rte3vgreVnAp4m22P1VQ612sSa7GMcKtU3mJSo5aYFgFVKf9AB6VGtuhahc8HSbbHRu132v1fb6BvMJh",
  "key39": "5QxGxtDbpRyZXxdwBDYCLvaDd9AgtJrHdTSfT3sHsnJy8VNENCyAcHrV16dFZG7ozey3q1pA4oyw2WAUQQpKFYQo",
  "key40": "3s28LNyiDnovKHspiVWHg41u6mesoXjT47cRPBeHjVRoMAabxjnR4DGMNvGCNSW8Az3aVADD5TnJEuKut3M6fYtM"
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
