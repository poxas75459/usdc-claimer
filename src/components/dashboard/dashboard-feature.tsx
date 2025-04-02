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
    "55Py6EqCGpBppREZNSqT7xAs8NWiXp1qeF72Z4N2JXNJGwfQF6NNKMRVNDPEWXEewgC1kdAhU6BHxmRA5yvzgQoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xAZ4LCtLY1RuNPAg3JoyV3cumD8NByuHT23fzjG8DpvmHActp3VKvc81JSo5YCkEWuxS9siyADNiYF7ztEoHM14",
  "key1": "4QXobymfymtKgBu4FKGSZ7VLrPmUp6UUugcJ8Qq9yZGzzDj2kCprY4Zk1WVmrJCpSZ73cmVVUi5aU7hHzbXqafA7",
  "key2": "4Nj7SGr5RLGcZmL4Cc1qAWJN11BkmtWbjTZqywQToNCfbP5b3GMrfCKtwHsi78fmD7QE5ho3Hqt3icXkBjHwFWJ2",
  "key3": "5pRYcADm7azFh22VtJDcAiaopVeAF4P1iW7KYFKDxJKYkuApsyCPdSBqHShXnGgjW5MQtkNuNevU6rV2uK9kRKgw",
  "key4": "5kDDgcYKYCNtFdxgijUqcheCqNzFG1vG6tZ5Rp4xpazV4EZrLgoos46qUauNPD9FC19UfMtCsZnpCoSnmVpEqn3g",
  "key5": "2Y65fvBcvwmGrf96zUXvghXPPntF7B4RPBdt2xe9RJiCJCbZvWN8oN8rMmLPYeAfpGrfRjihuWZRXStg73ZcBwWa",
  "key6": "YhEjmr6Ke9eZ1mtLX9W3VMimt7onSznaE8z17n5WX9TwFvaMcBtHkRPVr6yYzDCpoEccNJu2UwoZWrjp5UJ2uYx",
  "key7": "5sQ6zhhShNTRD1XHpHjwrdYn6grsXqaxZRfmdQyhcp8ugQcxBApeo2RaxEh5ACqfciG54eR4PjXm1FAvQ8SKgBSE",
  "key8": "3EbcGySs4fyCeQqc2kiSd8XB88iU5hiP2Jsq3Bzs79DQryHB7oUDBPraPut266HeTxLQBBvwaaHNBK8BnQJtxvt7",
  "key9": "2P9GJASREaJLKrHcqCCenKw439hbpg1bkqvwZkBST9Y7Cv62H9LxUyemktzHo53jyCY2vWCnECdXgrnF3r92iU3n",
  "key10": "24gD1R8ENonQwgfeo27aXk89Utmy2kCH5xbaZNGFvmrTaxGuCHLzZmuFXebBxNbJt6rMjoCmNWCiqteiXkNVbB9w",
  "key11": "2fK6XxZGTmRJw4e419xN685FprTgWb9c5743kb224zVyxq2GsEjVqZZkbUyPm6CgNs5nrAEeSPh6c7hgnxKG9trd",
  "key12": "522Sune2tBGjAyCkpuwtUR7kgtj8eqfxHvoWvfs7A5RuPK7CTCSxiz4jhJAukpHdUvRrWU8bhsFHmG1wgDtfmV1R",
  "key13": "2TDFB9rkYMeYtXszFvqsATbufWYwqXsGLTsxSpURdiAHE1EcmsvM4yKsVpZ8ND5deGfv3reHJB2w51zharQp1u5d",
  "key14": "4UF5cen7YFKRgFg3VQcjutEsR1QdXCrtrV9nZvSaCrjkaE5EQEiw7cbJobBiSW6GKAJ3LHRengYjbKeWNKmcQYaw",
  "key15": "5WwoZvJPn8wxJbMxk3NqehctBdS5Pd4v7RmvhcfeJk1BXphxP5Hwc7vpysLvdnSE68bPmZjXoCiTKdb1MCfx4kTU",
  "key16": "4UuZMPyrTSiMWBTwPvcmB4BVKHfYHNDN55A2Z93woo6q38BPTapETpEsM8YDPKF77j4W9dY7DcY5SaiRUxXb3FvQ",
  "key17": "9tPHEUqziejvhAwbFRCyhWAaBTEiYiUrndJKGyCbK5NsrohFVfCrXjJdpj8XWqZUasSApt3hB4s4xWyE4YFxLQW",
  "key18": "56weWUZ3XTMMbBjtJhaawGhXREENhUV9BViZrYpbVk6Xqp7ZaEDZ45YYaF2EyTHSj1zyDudifvuuBZVv5UYE11an",
  "key19": "7sjNynVLa1DdL5QmMvf3BwiTK899nEGQ8stEoiz2CbatJggaN21FkiNNrAjZdPcjT5DL6hyX4fPbJcauzEZy6ze",
  "key20": "9QkqU93PSFu3bQsXy6vPC8wF8ZAsy1twKxNWBEoXcUNY6cqJCMnfkEWvPzg3qY11MQsPgXmCfH9aA55VgkLo7oi",
  "key21": "4o8qV3g3dny6Kqxjuy32gjUMMAbTzmGCSRGVrnnqcNkU97zZym7ZxJFzajgCdkRxSyA7jn1bLrF1UWqPJh2YWWDs",
  "key22": "4LqivVc4rW93pHBxqQXQbBu4hN7n38f2GmNUu8xFiRMZhD2EFokdqTTF5QM8cJkq52zoFFBPSAiXY3FpPBAw2een",
  "key23": "Af8AASxpBdg3SAZmbgfGa9NMUjknPzSn89Chh8p9b7xPi4H9JkEyzmpFMipk2JEs2j2q9Gmaf4FLQ4TeQDQcqab",
  "key24": "idufpVcwQQ6AeeDn3DBrdcgCLkg7zqBPAshkHGdwqi1XvKXVjfyZVZDzpdRAf1xq2qThz51jaHnS8S9s4M5a76T",
  "key25": "3rQdPQDgyLna6y1iXMciu3sY16PxudmStyBiSMZsaqcrj7VkzRG7kA86bSNKdNFjkm4BhrvVQNDCYd8kxABeDiN3",
  "key26": "4S9garBQ2PpeJ2npjh78mTAuCFi4sMnPwibgN3Avnkv5Ugtig7wrKwEZAFkSYqjn9u9SriQpKwrZswuqzmepujRF",
  "key27": "PvQQVi3sry9ZHJJkJwEXhBTmA4By3ssuAMNkqSgxLmpi1VNWengd3YT82yyXPJq9RNcAFJidamPHo7fXq5TzmoZ",
  "key28": "24paPRCyQfbMnPP7q3wzcwzLW8kBDmNi6GbShCYZ9Xgk7EZPptAsnHW1vhovmkNUXpUoe65pqc964cCkMCgp4NTZ",
  "key29": "24KaA9zZCk19MzEHhe2bp39Nv9cNLQeeHpbcyGj8ZfSLM6iczt7NwxLcjEiQZSazQhPpJB8j1NfRrFD1gd7z3DCf",
  "key30": "59qmLZC5XKYYXh78P37nbA3ehMwNtTQk4T16GwBFcnueegnk4QxB41QREocv7fMAWv8MYBBWxkDcgJaRh9KPxRpm",
  "key31": "582c6WJrwqBzuaHyH5wGFhNG6EyhAoRmFTV2jepb1sUGvdXFhByKSmXPeYioAU2DSBFBdm3FJ593CMT3MR1VuLwV",
  "key32": "3fHyXJBXe47Giga1r1Ex1ZD9r3jaiKwBbpRpjU17v6qRxpbMAej6p9auS7TULjGqmB6LmwrtrGRWThQ2twcmNpFj",
  "key33": "4GnLLhUoxchLP42Xj1ZPjR2hWoA75EedmMxuUaXYYGDXHnJQT3GefNZVQt9Wyu7tn173DJphCrQg6ni4J96ToSyE",
  "key34": "3gdVEccXiEazMm8RhDEfMJdMVvuqC1wQ9zb8GhnBmG27KL3aPEk9WyEsFFyEPoVuw9r2rE2Kr827Tx3EpB7XTfVQ"
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
