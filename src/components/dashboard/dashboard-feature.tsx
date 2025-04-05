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
    "4sGoB5HcEW7uTgBQDHWdLihBZycAoNDpeAbVpeTWk4KksQyX7CDUNzJ82EXpAarBkWBDsctUmfxHegu25j3bdST9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52PAzjwixaoj5Gvu7LQ2RSU5w2UxWVxrPKbVG4poxkrzmy7qbJRayNzMcEU5zzme72RwuGTt1qS8V6zm2repwHaa",
  "key1": "5ep2peXg6BbsVVsPajXKZpj4vtbXytwBkv8j7r6AAjybZ2Pjf6hMuxusYf9yoJQ1nRnvhvJL1UxL4kdi29biGKBS",
  "key2": "RrcNmW1A7j96Gp8bpYNjD8kVhv3av9vskZsUMuaete8TYBNH4JfYc1jpB8KY6dNXT68TWpZG9xi13cNBqrUpSRL",
  "key3": "4UWQyZaxrNMh7x625rSPJyLTFdJ8BMpEdwoNh8an6xyqYN35oU1nFffr2ETARq5CZGaDH2vjM5vTBUx7eeFBxJoW",
  "key4": "4cMQuyAqpTNgUdXJwP9YrYtoG2o7kpjwGvzhfbomq3XKozwgwJZABajsHaHH9CwJQiNLg1a7uSNx1TKWHa6Yj9B9",
  "key5": "dSVwqTYjVigPZ36NhWRDo8pjG4AvAHgSFHC8NEoSAgeWMWcwnHrtYT7NdPWfVg19hvNVNLeXgQBA3gH422Nb4YS",
  "key6": "33RiW3xsfZ8LQ8oCn8pJxGomduFmWMhxPecnKZxNskYamqzY6TmzQp7q7biWQqnb5rGxGUB1K8EQGEn75hzHw3Xe",
  "key7": "3nhXRPDd2QnFxFjwSpEpdJXziVE11anquPNMFxE7zpGJJBLNRvcLMojDYRZ5oBkKHDoLdyTMueWiwZD7RGEg1PCy",
  "key8": "iUmUZjaDt9r1oLMQwLxrpaiQMLFTX6G98qwJxoKZnARt2ohgh1hZB1r3eiBMFH9TDhN89TPMZzXm5PwxnE9uVd5",
  "key9": "3cur2JWWucWvcZdGbBxzeFkbud12rvjf5dgK7xZKRZ2bj6Zoc5YDAsspLRGpf13KrUpEjYc3kE4EmmoRXFWayfh3",
  "key10": "3zZGiBVWtLboCoBNkDSEJyWMVDfLyKwfKhp6GZuMcUQkSivUbuMt3B3HGq2epSqrjfADR1VT29vbQnUGdmu47WYU",
  "key11": "4A7JSVGb63UjHtk6UFPuekXoGCJQZuQs71P5p66gSnqZJBS7YEgtWMauExTYJSRZXjXRM3g6TZjc5zrLVVQazaof",
  "key12": "26Vj3gqcZdWFvU8EdTg7oB6R9U3f5UEHE8vU9Rao7NRZgh8Zwvm6oqFPpmXHqytqkeQGWKK3fs5iKnXeRTVcUrfT",
  "key13": "3dKb3fPM9m9xZZWYJb56gtUBYHq5o1KA4XqURfU3pUof57fG8yhS7J8ogrtTXEbhgDL1pSnfvBwHwKz89nsJUxgz",
  "key14": "3p82hW9SNNrfvqGHzfdKgebov6pJDwS2m6W52D49idCDkfiEpr6EzbKYNRM5e5fkwgraFUweAUxsdEYaHzNCQFV8",
  "key15": "38L3UjeRhp44Xm9qd91Xs3moZ3AXMHEimkf3CCBXSDRA6gBr8bnEoS5U9F2JHRACv6M7oMcWaWDUkAtFJUdcZN4E",
  "key16": "5s7LvZNCT5DCXdTMDPzXYfJ241XAoiZoy9pQUXSzbvU7ZXif3HWite2ZadU6dNRC7C7wvdXFgssGUXMpFp1zcbm1",
  "key17": "4w5E8aZZYSTuUDr1Aas9Spx7BpTfaw8vFLHXKbZ8xnPoKMhXhRbPYu3ZvjNgXN13rLFnUhkRf7sWbSjpTenVhEwR",
  "key18": "5uRzEyHJ8fE6Z7ykNCQUp6QojuUf9dEEVybTQTQvGQCz8BAZVozW7Qymhnbziyw3Q6FFxug1M8yU2S11ApbQH2ze",
  "key19": "Wj65qX9RTn2gC7A4XLebJZKUbFTShJfmzt3pQ8SBJuexQoPZZcRahitYu3xVHFbP1VStNQREw1xorCgmUeF3tPW",
  "key20": "5fscv1NW6Ch8ux9Js5Lu8LpZy5unrv91EKTRKG9dbcNTYkYWaoEad4WqqPAjjp3Qs7sUfxgcJKoa8b3pAtmenAMZ",
  "key21": "28xngzAMwEavHT3jTHXmiRfB3Bugm88aKcwBcSdxby4gzg7W5Zen6ukvCRpMjtAAVbR2j4TFfhprKrZzNkgu6qDU",
  "key22": "59dR4Yqf6PxaytzM6MooCJ4DAJ5Rsrw5iK1zwock2FGo961zXoFMwfwpYz9efCxnp6tBvggF9myArgD21HM8nHeX",
  "key23": "5vebhcDyDQEP29ruHJzqHwhKCYZooVwwKwqPPvNAWRQSvL44thTP3ALXBm4T5SnVGA3HWGpX3AvAn5m13rGMSjqp",
  "key24": "2ZRwqrBMHTkTmQRHmPGXmqRhhJHMAZWr7m7vfRfrGEXyVUXaF4LpepTENApZSkGJSLGt4yVJHuGjXmjgC2kmpddT",
  "key25": "5vVDvvTz6Ktf7Lc2VSXPdhWcvDSKtTZUfFdv56WG9gp1ARxnY4QYBydmR6uGv2MZa1Z9BVzTS5uiJ946GRwjWdFZ",
  "key26": "3Ktwkpfxe25XErkyviAiMp8zpsoXxu5UkLaLp6JiESzFvHdaJyxH5m8CWd5Gbgh9be3eWf4WzCmepK3feu63rNpD",
  "key27": "27nfCS9ZqmEUXDB7fBj5DSJxMxermbFKrD5P8Cdqxfp9oPLjB7G4HgZbaYwJKBfwSPQB6iBQzVfCkv7ycTPzpA4a",
  "key28": "ptE6i3VrUKRLLWt84C8XdYkJCvm8Daf82NXRTDAH3NivQp95GYuSeh9AEwN2SAF6EfEVWh78XXpwgp2fdUYNoaY",
  "key29": "3pKmn7oUATBJQ65QpgXg7zN6fNAchY98Z7WKH3yf6wdn6kpm5QBoqGKoLi5inj5VVeSk4zqCbLnvpANEaYUbbHWx"
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
