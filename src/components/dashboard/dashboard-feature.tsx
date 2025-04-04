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
    "5GTBbsPkMMD314Azu8x2buxRBHoueej2c1xLyQs4iRz7weCQkrMGNVKnxo8C73y6so93BbuZWG2UtjbqFYRgNNvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B5fdtxggbCm8pJrG8DEicUsNny4obL7R98Gw1CrtZMnk83yozky1w6xhW9BGQQ5qLriEDiVLMnxvx18PAxa3StD",
  "key1": "5ykvZVnY88xes3sxiJPvBT5Wwz3g4Jped41W119cT4W9jmJ5X5XqbGzinxjR6YGKS71MgZDGRR1bqgbKPrb49Lps",
  "key2": "29mCRfKqNhERUREA9c29Xay7bXbSURtA27inYMRfa9YHnrjjEo9PLXwRtJzZtJcfeCK2Z19vLMdo7kcE4MMiSzpN",
  "key3": "3jbPmFbZtTV65uw3XWyEbkTpN4NbsUBSik6G881vgtgVh5BgpDSAFsVWkMfpus6YouPeJwV6qujZ5VpGXrbpvMHd",
  "key4": "5HKUuUg639fiQPsUKRePnAattJKgAfFYirwJRBQrDkW34fVsK5MR7SsTCP3gYvwzYhMZQgoxGCPnGnk4f47GsJ2v",
  "key5": "3tHDzm2nzsRdyGCXeyWxiJfecTLvgANUqPpDoGVkpg18aRfsY5ktex368314eucDZu6yEJyFjAiZkrYCRA5ADtS7",
  "key6": "4XQfvrPcKPLGca9HkeQpVfhq3v7DdZAZnjWqx9GU8Pf2bSHHtC2Qd59LHnuxkCwCwuRPuLLX4Xr57Qet6iM8iguN",
  "key7": "4gEf266dcdniniZNpfuP5RDAc7ZvDPdt9zmZtPPyq2Mu3tys8ZypbKHpMi3wz7N4yxariTLc7u4h9ZiPCd2ahaqZ",
  "key8": "t1VLPCZ4avuJJcWKhKnPoLxWzhYEWJo2Q9dnaHbkHnsrWAFxj5NqZJcXvC9fFwkSyACQXwveyE7pg1rHMgYVXXW",
  "key9": "5LyXjq6m3fZUDjCTBSRdzVzh29EptYWFo5q1TWv3pNXc9pMYHvPnXxYkQ2kmM7MgrRGcsaj6A7ewcffCfba8LKQA",
  "key10": "5aYbxDn2tVPUfzhwiZXaXnSmBZbGnSphaDQLwyVonQcE1XYZRKSzVb1JkDSt4fCRTks34M4RUzEbciPoTAntuLeE",
  "key11": "3tQpbqvan3hFrGorGG2gDGgCZVKespGds7m11PNjHzgLwgCS58j2thhTGG5vu7PJvk4NUvGAt83JxsHWnR4HaBTw",
  "key12": "kRmWsGyqS477mevTLYMjT1Q2mMLiobbY6tdE1R6MGmXYQPGt57zgypsvEmCoVAQeRAm4APGsw8Y9zWvyt8eb1J3",
  "key13": "AyMZPxVQSaaXhYAZkV22FsMWScY6W6KzWjWiTvoWCigN5FT5iHdV638oUm3KevhmcLqLe7PULZJppwx8eXjDaMv",
  "key14": "3j5w4bmBSZw2Zaw9QBSS4jPdA9cxtQJZ98bmwsvmB4ycP4bqAcoYFee1pqQfFNK9C4Mv3jn1cCyDefP7MJ2Z88Zy",
  "key15": "2HTBrwo6bZmjhvdrhEgAVx964WfiiEnTwX7MQ37Rf8YACjaRciJWtWd7jk88vEaeKPS6bTwy4RH1RLKUHYVkUaGt",
  "key16": "5qXMujRsYGAdxUMAjbaAWUh9TEijBZwYXmZfXZw5dGj4Ba8LnETrigPJYWPZk1ZDAhu6tBeUZ68zXB7zXy2eKjvk",
  "key17": "4ayTk49bMi2co6KgwLrxHcTLN9hEK31gzSFWi1goun8LPg98tmPXxLcsRxMst9Z7qFPE7SJ4AKhEuUZfz2j3keR7",
  "key18": "pVRkqp6WPETKyG4qN8HpjvU6HgAUpJHc1hfacZUHMmozrV2E53wSoULH2qEUGBCrfyqcnHCc5twsARQGHudFCaN",
  "key19": "5dKWLKqXRq5xoZBUYjGcpjjugbzGDpDHHm6xfz1tz4JhwpMkb5n2d4GCpEbFttaJV6wJnqa6JqypJTd5zhGSMJCA",
  "key20": "1z2ocMeuo3DbigPvSrbUnTNfzJ2nVBWUUQKvtLUEgeNAgcNK3aKjhkTeYbJKmm887vxZLmx7xBdjb3i2u6ZNrAd",
  "key21": "2nqp71JCrDuhwVL2AgVtWSL6oey8PGkbaCLwHzdFSwevhhBAyv9mjWJvFDCLc8qXM4yNP4G7kjsFtzBJnh5fXaYu",
  "key22": "4eJ6XpctTWHLHrqSRXLs1XD54GcmPHsbZQUnReHCcXBjcFCyt1UhfppiLPm5R8DMv2t6RW2b7FCcTiw8ttTk3MFS",
  "key23": "2ccevkzkCXuo7Wy7uThtxAbwer4WxTtLXHsDp7kiSu91MYqAA79fYCKndc2TMQCXsSyE3EPiHqL6TUvr1ic6vzad",
  "key24": "3bJuqnNapoh7VyUWyUWT8Gq1nMACurj4vhv3BB88cubpyoMrfmajU8jLEC98bjScWqivM3m6W6BkwJ7jmQNufZYp",
  "key25": "52uXgLsS5yjJHtyp389k1zX6xFEWQKNqCV2dp9W7PdMJzQir8xUUdKuYf9TMP1Yh3SXAv3Anqh8GgKqtp84YD7Fp",
  "key26": "5z1tc3wQDWFkDobw3qaN4nJh6rkJ16HGB8wLejYRyG3sKQ6yMLxuGDNjJVPKKYtxDkE8VFnp6Hq2M836xguy2gfE",
  "key27": "53DiPDhEf9bMy6YasCFfbsV7qZwN1cNJ8xWWYpG6MNuzYg1BpsAKTfCE9HwzXoveug5t5GgaqF89abgcr28RBGqR",
  "key28": "3jSUwqHVTr8vyKH7Qe5j4Tj2eUam8ZVjPCx4sVoLg1GuEHncqZxVPbeGEsSN78pnyhuqVD9Tij4tYomYdR8ixmav",
  "key29": "U8dvtsxhpRERvEnvmRgDsBEUdatQUpdu5k38L4xs3PhMNbDcZ74jEkNpuhFWfnQxNby2uzYLqmEs7SFSmGbit6A",
  "key30": "5jXkEjgJa4popfuYs2bwCN7mrjCkEZT69ThcptbQQgXL3dY8KgRhCwk9q9hP5c1ZSNBKkmXrfVYnRzFfwfkvxrwM",
  "key31": "vqTu2ZismuSaE5uyjBzo3v6YK6TcjeMAfvxsA2teYayLa75VRm1nGXMPGVAyCm7BjHuLcZsRXrftuJCeGvhpd9h",
  "key32": "44Rf9kYngKib6Sk527mg3LPY37rcTkjULdBFDE5attN7MedEtiFi44CECqpvbAixuXkRLWoPYj9HEexAaorovWvC",
  "key33": "2QuWPxqX2RUoUZjF7iuJzAnReC5WVzJFmW4fut53WiMELUCYnathabZf7pCPZpn7VeeMfbm3sMzBRtFWMqGTZzEg",
  "key34": "5MJFuRLS7tKo4NcZAjUarkGor3oFHyTYkn6RPVsuzykxS4JsX31PkFPcyUK1NNBwzJ6QoskSu2bHXsJz6Qjm4SBT",
  "key35": "5bdff26KB3RVe5fswsCCJmvmpRFUizHEPcfagUY4rBNFpGbjZHt5yR6fMs6UHTLTvVUdfs376gJaGHv6nVPsU1GW",
  "key36": "3gd9h1pTBzTJU4w9smqHpd1ND9M6LHxUZyTDcsL8iUFL4YpbXrNR5c4CosFSoWm7KwJL3tkP4uJUeoJb1raL58by",
  "key37": "25iTpCDCJqS5b2zXt9gSaX7Xww7Kdgr7t7tApAQFKWU7NQu2dPBr1VzDvF3k4iqdBSPQxGtf22TKj7WqmGosRQZd",
  "key38": "5Rrhz1tXGxd8HqndUDjCeUhmShjCDJBTZeAh1rUAq9sA7kK537UB5AzYgMrktYK4deqxaVQ56buBNpnXXxqgA6x5",
  "key39": "3ZKjYZusSdAiU1HsqeTyGbiBDrZkTYzMYS8zsapbGaL7CXLmgSiNWEAygRWo742s7x23q5coC8AhmTVX82SD7XCW",
  "key40": "38KCD4AwHXzrCPmUwZifq4unPY99vrkrwYCYqNdQxMcRNT9wkANuRdn95g8WYgF57q4SgPHrmnBbcpA8gQSJkS1E",
  "key41": "mGjVaaGFKepTywDs62mHbYH6cUfFuSPNVZuhjwPogPTgbricsgq4uJdaDnEYZvNx3ram1DZjYFvCKuDSi2h4mqg",
  "key42": "5BRX7fHfMANb5bEfffM1dsY5NjY6DtrercnKFRxqWJT1JS3zd7krY6iXQFdgcuuKjjPVueh6yhRFHCZUkuuwseo",
  "key43": "4pbBr7ezBp5eMrcu7exFkc2j2usaMXzdBKMuf9sisjY9RpHK723ViPZ9xUZk3CyWbjXsjUJoHyx1odUbvQzbxAWr",
  "key44": "5NuEQw63W57cwpsZYgeRAAuLWLXnY8pr32tnFB7jedUBDwfWcziJsFa5gcaLVYTCWuDBVFZCNie4LyiHZqSdDpbP"
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
