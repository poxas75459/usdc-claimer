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
    "3xGX13J5iVhjpCZxroBEBnmPck2X468V8AAftrHWnSZjZosEbusHFUBiWZ1nx9QTuFfAevehBW1GaRDyEJFzMVui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63hixeutqoRE5pbTRNxhj8KWwgfvnvLigysvCrZeVUZLuec4UzxVh73DBxFHWWKDLcVYgiML7KSbidJEYMaEnn7c",
  "key1": "2qS8PsPLnHUMGxFwnCu5CrMRAQKhWgMiL9M4tcE9TK7XQxF3V3qsXSeDVL1nnYzuDCCskqVgr1VnqujeNLhpBYQU",
  "key2": "5MyQ4xmjtxQLZwdfTiPA9nmpyZpo32ysTRqipaPQZDsoFstFYVKQZr9hiXBKjYWyBgBv21G5SRbr6jNVmSDWnvox",
  "key3": "6hF39gGvgYipm6v5fX84ADXXWq6nyV7Gzf5Qp58Wuacy2UXs65XxvYE2iUDmaNqPGpc4N2bN2VU9tdbic4jLHLV",
  "key4": "2gcGmuzH2frqcTbimSowX7oCr7RY4ehTYJBPEZPQbuZ9sqwwzNBYFH4YAgrjWqS4GWWw58mRgzy6BAGTQdZ8XLcG",
  "key5": "TZxQHCDgFuvXPsDJqX1JjxExusobXJhqx28fpFvnK3aCVnp5NN88v7xZ1gHxVP33vecTeMVGHqdpmF4bVQ9DEpB",
  "key6": "ajXLnBdQ9nLcy18dH9aMqcX14tnL1QgJQuAHjLWMrLUdckb1h7XAMpBGH7jGx2Tic9uiCAp7vvvDwJHMcPeEVk4",
  "key7": "5s9rLYb32epX1JnHxWwTmSZ5WPHXdFYxsYUDMXoRqedRkSeAhb1iCdtS8XmMuormLZjm2xwhUEyUJveWCRfwZAxP",
  "key8": "4JwsfhcdMwcBqHCu2aGPDDz85PCdpo3AG6DqjpZzHBevqyt8uj5MZ8wa8YUrrcVq3G8AdH5hU3H5wzzTLBTm9PjU",
  "key9": "3Ub6oZX4ZSR28i7wWmv48ZKgzvBNrAVkehsZht4mtrZayqfsP1xK5yv2hQszJACQG2qr8KBq9ktDYReNdsk4pteM",
  "key10": "3xCtKu82w8iWNbp7C2bB3K1xpyhpLCab5g63rSBmS1sfKcwnZwUunkUjN38yKaeVBSttbL1fQTipGbYmWE7LN9vZ",
  "key11": "228VtSqxSsS9nHb7Kn6VvHGc2twfsjGL5TdxXZcJBTNAmdCYoDRxK2qpFxjvMgZN7T5U81eYng2uUyhVvpDg9vxv",
  "key12": "2yamHyp5rgdfWjFgq7LjacHstGYHfo9sDEDoHTx9fnVhqfEAczjZ47W6DGVUMzAVDhZFobcJ9MPxhu57wjVSPqaz",
  "key13": "V5tbBTcdDvPhQZ8qcP776bKAiPGFcBbBvDyamhU8M69dsh5EJt6XwKhVzsVPqWTxe3TuwfmrFs1P7nuiKNsxSYA",
  "key14": "4yi5BZiue53uY69dwGuKHHhQcv4dieNcUkYZ8n7xv42xquiETbVrSKfThdtB2Nj8T3Y3x7V8Awmr7wFjVspJAYLS",
  "key15": "377iGX58MgDbqRrmH5PdyiFtVVoRhak8qE7gTxVG66ygaD1ABFug8wWh9kdU5uG3mXea4w3epJcjVQo9i8YG87M3",
  "key16": "j8pf5xGWQm9xSTr5Kkzp77MMM2op7SHGR1QgC8UVq5G6MD7p6W11UEWYMLRcAci27USjsmuyFRC6UZckiMmnUFe",
  "key17": "2Vxh4hiJ6qgZSovUjNNt7pwK6iaGetc9ML3tyUEe1nkrHpjErCB57ZrLGT31dDMwv5ndR1GnDHp1ojdjpAXuB6CA",
  "key18": "53A7NskpU1Sn9nRz2Kg6nbm6TdoudGrppUbU463Gt83MBXeo8xS98RgkXDpDHkTMb5X8v4GXKogRrcsKAVDvxBLS",
  "key19": "5D2jNpH24HZ6MT5yAUMiajmz8bQGJcSX1UrALgk9f55nk715Br6EDGvdt9gc2tCSRJBoZ79t8qCTapjZXWKSDuej",
  "key20": "nN3vm6RtJBii1JSNQYWBxKMFwFvcufyjXVAKr6jCXkdgwHshbU8HXAp8BuYSts5bN7EA1tWYLTVoYZ7B7gQGUxZ",
  "key21": "2dZWfADgnr1otSb1xqoNMQ9F5Ge6A4tRq9J76WFc5a9j8NeXa3rd1Bwa27faQwPVX4LLoHGvJwpmH7E2sas4ns4S",
  "key22": "62vx5kx1NRhGeDrb8Q7nAYDoeUakCEMu1zdR3tBXWa3QmGWjETLjXwML7r92Y2LSx2WA6H1ofyuqXxnPQ9xqAmCa",
  "key23": "eLebna8gJNUNNsjqVEywXY4VusVBU32ho3sHNMQwZWUdLpRHZGZRfjKWZa3uWgc1Aw1SjvaxirXU94P2YJ3RpjF",
  "key24": "3NVHzb2u9GNuTfbWdEhGybFQ4svAb9jccMKDF7WH4TGqk7P7gkhhTxav2PxgG1LCeJxaSpPVwKGPsrPTFAycozBg",
  "key25": "cyuWVkdFU3cGAQ5fiaEZDjeoZuzgKd3r5NTewJPXeWnbgGaMNVaEQrtCT9y4DxyYALovcHLuGAAkdTw9uHDeuyy",
  "key26": "6393bmw7qnkivP3FTtHG4HdabZWvgqvfzfta7Ajsv78MPML8AT97Kujk49pRQ5kKFoZwh36oHHFFtfRQeFFutbHC",
  "key27": "Ardbmq4er9K2m3kR9KMoFwbe21HU1GorAcAHWGNFRSGtkhPx8Zj18HbvPqtdCFQHrF13xiNBacN7XceraGoSNnH",
  "key28": "58jygYZcKHfQaDafRdeUYYqFYXmaFcGXZ9qEBWhJJt8451UzhP3R74mduGu6GH1t9k6F8sAabnCuTRaNLYdxaPjf",
  "key29": "5d6DgY7TVuHLrP9kwNNaVzu7Mj2W3L36Ms263p4HZ8JXPptgB8uzASzVH7wbPdaZyQYMaNKhEe8Q1DuQx9qNdzRV",
  "key30": "fxxD85ydHZbwsAgVLsEhawibvvmYU1i4mnE2ej5FKvYpPgKRSB6s7ZBEAC2GV64vQAjKSA8GXbjz5HHyumJp1NU",
  "key31": "Du1tp4NHsxFQzFKVrn8PiXg4Q3kEsVdxz5RjU6MneizPeBEozUEbJ62g1hJodnPHrQQtNayCjx2cV43Z3Gpaxji",
  "key32": "4q5xqX5PA94KPCWZDYqpfMCyC1eqa17fQsEBFj1MiUWsk9V6zY1YqkPA7n5SZEku3ufDKfWHAX1LpNJJt7DBpFN8",
  "key33": "5p2ZUo6mXuvSPRLQkqzXAWJDB4QMQZBTPp6eVqKLJu98zZgpZvD6UTXgHGmCjZg3Q8a6EztYRYnDqENMf3mkwfsz",
  "key34": "4j89HH757esuer9Mh7spjCN9x7JwX4kfbZRvcd6PSxk7pC4nEzLpzFoovZGnzkQLSr8F9NFvcCaKQk5BRBEhXjWH",
  "key35": "3u1zvLztv3YKTCR5EHHKxhqNvzurfNPoWvGYnsnF6j2WqEcDfR8TETYqBjYBa6DqsX6B5JzHUEPEcEXuj9XCw8p7",
  "key36": "WrhMCxEQmXPUbENRbQMohZCPWjxfJYytAZv2c6SmiPGDgNqZPqg1pbdCxcYtKtqLkYiACeevVnTmmNd4rQgLfRj",
  "key37": "2v29sbFvunFRUybAkwp79A7RP6VyGRwzQhxTxpq6Yrw3GtF5s3qP93gByJdDq7Ut7WohSp4aBkZrHc5W1okSp3q1",
  "key38": "2RkdmyzUAHQ2X5vzWzv3i852PCLnDrGqEF9XAVyQLTXDvU4J79oxagdDYzBiGorCj9otUaE6paGpxGpUGmksHqEZ",
  "key39": "5FzeesXSAsg2dzbK5rcPecXCmVo7AGMJZbMgpNCcAJpiKzzKjGLHPSoHzjeuWcQfPF8LDVAt9U88Hgydc7VhUxMj",
  "key40": "2bEnApYVKMLnLC5HEt5EwYHP2Qj8RCKLRwaP8XHWhebR4X5C3WmaSG7nUGkqNSpJrDKhe12rX43H2KivuDnBret8",
  "key41": "5Pa9cCt3msTL9E379dbrmVj7wsrPYxYnJ5LZXPE37jL8DXehSRYh7zzDUZdPjTwSvWY3KMpJzcC6rxPgcbHTMr1G",
  "key42": "3tZY934KdhksBW29QfbwLcEkQiMRshV3zTWpCzW9AypDK2iEta95s3pm21QQG1HGvkK64S88PYXTS4fVDy4qjEfY",
  "key43": "eptRWfiJoZhb8ECjXoByahWPbhcuub7ifr9JFT7hhK8WmeE4qSoWi6PwcegpN4xMQahqUoeq8iWdrME42j4TtDT",
  "key44": "3XKKmn7rT2TrhnzBUp5BMWg6uLcvmxRFAH2QFUCjwhNkkcr9BC7WctNMNm3fxHo9ScZPUbyH5KbTFssMa8KKmf5H",
  "key45": "4kKENT8heev3sLDXcrfnqo9LAQMF6EFniAR3tZkuJeBaQ8SYjco3hy4um6Foqz5iUWEbBfrV1nMLxhLriBTCU5t1"
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
