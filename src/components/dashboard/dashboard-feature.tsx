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
    "c3sqagkmHtsQRTKovB5fbLCQ9zBTHd5ax7EqqQSV3CjCT69nHNH49mPYxnYtTSKhi9fK3ZvHiCyVVsW41cgAvxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eAGiDgxEmbAB1u328gEN3DeviAPHP5mZMakSqMpuY83irhuXHmJYKj2dHANrJyM4XDn6vxqfezZZwvk5BZhQ6np",
  "key1": "gu76d2W3fPnKdkrDshmEmqhFpb9Mt5zm96Y6SaWrfUgZvQLoQtESya16f5wkDQCkbgCwXpzhoQ2X85FNTH5WkJ1",
  "key2": "4XtYHEB2wVaNb3XcpYUR7hbdTpXuw9vkpM7SFeyB8pMCwezD7jC17RARHm3dn8kVqJjV3mqjw9znbhUBYura6Hyk",
  "key3": "4MWVdw7bsDM2Sh3wAcNzVNHvzvhPccU9sEjLo7Sieif5cBxkSUXgFKMziyXY4wmVVgnex8HyputG2yDuQzurbcJs",
  "key4": "2qWeEp5RniuNvnuHyeogiwpBADhhKZ2JbdHCDPq37e5NxSzyqnkTcR36cAKoGgmJsBE9mVLgEQgsyA2YNZPhZv5c",
  "key5": "41SxGzEbUDS2XpPa9JUTSdJjrTMuDHzH9Yd13GQGn3ZdKNcCqa9CgU9kwNcsb9DBwAgChkb54Fr8EwViTxBv5ebn",
  "key6": "2UMWW1ysKHhN4Maa96fkQZ8xy1rPRLHdsAXfst4T4Sm7NBbgKFJRt7AvxiCwen53r87LNBHPAmhchjhBwb73HdRb",
  "key7": "5Sj4vQHNDiyAkvtDsWErfoMW8Nu8D6JuMYvh47SAqoCWyUw6HWApdSTgm1gLJe53N8xdrZTfHpUU5Sq7s84RwBzy",
  "key8": "BP123w44MZ9Tw75KhRCF3rDDj3pRx4HAG1cNpKDSATX5wFmJ4sGAxADAeBAh3LoSSUGjWhu5WM17nbjGNzSwxMK",
  "key9": "5DxjVvPJJ1KtQf7GVZrhn1AFDoh1unoJKFjSGru8Njjy9kkCzJf28c9vea5UwQSP5WanPHh19HDMeqVJhK26fbdu",
  "key10": "4yvLYWrWVHmTPU5B7wZaC3oJUbQUUW5NKbFtjW3qqmbXETsHAu3NM5XVJeaoNrERinAiDTcqU16wtL4hJFVyEa4q",
  "key11": "2rSVNfsQNfEKDpjhn5zUVHp8td36rhXX4d3b3A9ThnzkjqSju1J48YQhEWCJK9yuvtqv56JyyAWy6qNkw7jaR3xf",
  "key12": "3SFvDzWQPygPxew8QpnSSCP35UP21hECz51c2uesViZ6pxVJ87HzhtYiDPvDYQH8ZUfA8s7Xp7FXKqmsiYvQncz2",
  "key13": "2bzR4mtyjMwYY7MMFHZAuBfv45LTLXCJAXYfWh9A5gXDHfwybVL3LhFAk1nBZzgU5ztdwao1hEvvjj6pry5p352P",
  "key14": "3cqxF23UDNVGgwPb8geUgasJBwvrdVvXqTzCGSsFwgXagGz3zDsxGyvDJzbHevwfz4FxzLo5AByETVQyQwjpoFGC",
  "key15": "5sAYoyXrPqULdfgaz5pyu21GrsRiad8VkjAyDGy4FRxvTmBN2yqiRxm9qWs5GQu34bdi26zKiWdWbLo9pF1HK6TT",
  "key16": "3ZYEys42L42urDt6UQUqTSTQaAW5VJ5B1ZKAauw82gRgnG2gyfxMELkqpf3Ng8CRYkqgrpRsAbcUrtThEVEUuKjR",
  "key17": "3bFuDXDDes6nvKQDvvvvmRHddCzmNjnQGfJfamabxezd68uXcoeanaaVNcTaeZh5Gxcw17dzRCDTAGaD2nCzXCQR",
  "key18": "fRagFEdyyVD4XmexLJPSsY5CjnumftGScsqYan78JxzyiVbPVaRxc8SHcYVLJTGqyH6Lt7fDJXsrJmUnKfNKYZU",
  "key19": "2bMU4ECieqHM9NZb3DG85sKB663KK9GsnWbJtbzm1DTYsA6ErEZRinKHWT47gNpRykwB3NJaDdsPds7StH3WTYG7",
  "key20": "4jpyXzC2CMweucRzadLjuFHUc2zyQFJL5oez4EtawoMnghCgt8isWonueiMXpjSLx496bGJ5XxvrJnsCbXmVVk5i",
  "key21": "5nCFs8bFcYgh7PjYaPWDCpkzDU5J1a9CbUATGvoEV6T3JX4V5uAoMrpTe7vU6JQtwkGdiYL1uuJjGpMxEN9PTRTP",
  "key22": "2UW6inDTthwkQKLcv1JVckYGhSctUXn4aHtjnb7cXERC5AX2wwTGJU1qTsAA7811oGCPB5qpwztH8GAXaCpRT76N",
  "key23": "47XBP25TkWvBTrp8hAhuGXRVaVzvf4EWePLExXvABKCSk7sQAZeuB93VaNb3FCNWJoCnqskjEQWoJdBAZKB8moZn",
  "key24": "36H3UDf2zxjreUVtAfqUJn6J2ppgoL7unjHe5jnti12GRjSLi5pfM7EVZxERPNZ9aetXwU8UzGviUWWkwACFNhY3",
  "key25": "21XMvx3skspEmE8wvKrzJ5YfYzkEFGQCRvZvrEbQtaam8PMUUoyU3zsvHjxFaudgJuSn9fK2NvHBGQstuLwReiF1",
  "key26": "5YaDi2NWgk7k2ftN4e1JShz4QFgK2o8rpEP2j7hPuff8MPXTNYyFVVYxas21rUikYvTLPXAh7aq7KmxAdCQ8ZA91",
  "key27": "5wz7CToGUzhkpVdhu7ZvAwZDhkpkvMnqL4hEd4H9HJ5FQ5FH2SDbFA8Zo48EgXmAVhzQkmWFVRmUR4acXJUMniB1",
  "key28": "3YoFYtb8XehznKizemVzGM7zhmNEGaZr7Z55e3d521qLr3TsACem8zmk2kAVfEfGaHA5Fkez68UaKWZdB1cMXh4e",
  "key29": "2megPV1YApkQzcTDscaMExt2eNMi4H6syCsw9rHa3r4XpKMKzDCU3DhDLKwiNQ7CgGYyG3zfJ3Mtwyc7s7t87bdP",
  "key30": "2HYcadSjjDdX4jNWKTyrtm7qZ3PrTeueLnnwkXVyqM4PfWizXvRc1Xp1hoqyuQDACa7qc56FGFnxzA9aYgHtd6fu",
  "key31": "29MoKCT2hZtzYRQWqbxZEB2HTyoyGMJSFgMfbQiWW7CLfvNZgNiZyskiUSV84s6SzFgeL8x92vo7RKfdzF4ta3Ai",
  "key32": "3E6tnhmnF7HhUJFiJVWo8vhHCrF5mriu9zWi3u37HRG2VvHtTjf5NtYmhLXY54954xkrrxQ2xQxQG9ShCKWEsg6z"
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
