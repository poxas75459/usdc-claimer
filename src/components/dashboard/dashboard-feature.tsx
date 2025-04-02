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
    "3XmQPWgjXUnSfWM8KPCbUXBWcUEF1vAGayWDeRfR85ZxKWYmX2c2eSRrcsXSVHkFRYuByaSNCHVHgwYUiVzuYcSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GJDmjj7DhW5xKdU9SzrDSTSkn2Z5SGiZQbVqJMti1Kr9KLgjewGFbJUX7mQXRsyp5GyhK5do4EBmFZFHQcoU6pT",
  "key1": "NHsvWqEr6tkewAvNPbfyigfk8XsFvsY8k5oz1JHA3daaxrMAQtVaxY9FJWRrXFgawfvCgHyquVxB8xpGG2914m2",
  "key2": "2ukrXkH1Ec68YFBeVtPTBMfwNZncuc1p2n8oYkd83D8zw1snijcbHBBqywXPvRqZLVi6YyUJqZDwVK9xuGNE1mDb",
  "key3": "2r57XRXsSUQ5To1KvLL4f7EqV81hNf8wSPxrjwutR8ues7PLdsjEjjwf8rS8Se9gAK4ueG3hrzkupPczj2z5SbvF",
  "key4": "5zxNa85w3yf2mGQ7r1T5ipNFp5c9BujB8VikYprfXLLomKyAz8Y3HWKhqriFyjMrMT6EA1nwYzo5Ybeto1RW9ri3",
  "key5": "354543KrioXMPPegh91CaCAT1eA4t2GxXP3ZZ6jNPXTDYuM1oraJ5dcAsaehPPhT5j52ADHjAZWNLiSdpVXB2QHj",
  "key6": "tFS1Eo7VK1hhjXv7LpNkRdMZfLJrNL8bXURc6Mvkk5jcWeEjBmv8rPdzPaGSxEgd97rCKXeJS1YHWhKFirFXE63",
  "key7": "4U3pa7VV2JNvQ9vguEai4WnQhuNiA6mkzmpMTg4EHpMwduhgVgRyELA8eWc8K5HKxwKHxpBSxg4cwT9qiAqL75J8",
  "key8": "5ETi6uVqYqQ8DxzAbqVqQ34joH5MgBhiifbuLWUoJ7suEstQ7aYhj7tkxvhUiDasLJLdP7S6VsqWgwoU27fPNUVP",
  "key9": "22tMGsnoKmKtRD5n4yvaZ3E3pHJa6kdqXm9DQv1KcokCz3DooXCSvDxEhyBgZZWUewH8PrvWBBoF64XYfJm6NAGv",
  "key10": "fSwFEir7MqWMt8VWpQbD3b9fpGSxDpitwsmfWkRvYsJDsE4BMbkMGKocT4VigpMxcB88oJqF7oY1xGo13R3vcdf",
  "key11": "MSTqn4okVkv6brNHYsSXNJhhELHz9tUGCKiXR1y6PpEXecd2Qd5nXvz8N4nFXU1ZYwe3Yr2RHoMgUPUqyUubRiR",
  "key12": "GRty9f5is6oBYjx3NZFEZzaJXeYN8zPQFPbNc8QgHJn65FqoRknTMhDVSW9Yjebzi1TC8NXMKrtv3pj7P3q8pZJ",
  "key13": "wV2FCRdAQQVFYXDiQwrg11RWQoyF6GJ6wq3xyaBq6cig9Jr5U9D2TZkVF4MmZHjEfGkc3ezKmz69j51hSTqiWaE",
  "key14": "3igvY8q5wLJnmKdcQDKDe5u6y87GhS5ggKy343WkXjJF1yp1Y3CPgXzm8PgcYzyAEbGfW1F5fAKB4SnHikWeW1t1",
  "key15": "YU1RRJxD4JvCGL5FaFFeHwdiEWByAkKvZN6BvC5DYtrhWqg6dm48u2mXaFe6VCHUjo88xTtSnQKFkVh4td4HYJ3",
  "key16": "3YWVK9FXC4VnHwKrnzKg6R3HZJXqsKVPs9KqoxEQpU6FcmnpnEewWoWS7ZhNEMTyYENZVVNAQe5JrAXmNxQGvGJx",
  "key17": "23uR4BsyqTAwp34jaVgFvn4jPXrqPmD7uDXsYZgYzBnstj1mpXbPWqUQk2orLkQ7en2bN1PTw5F88UbdZx8ux6yd",
  "key18": "5UQJHKjwiSW9CbnNDozHUDnfJ12xyYmsEozSGJhjLmT6NULH28Gsm4qCta836NN5YB32sosy3VaYZCzc5UbrdLJN",
  "key19": "46WmHsPGGi71BLPYi9S5gNKufjNeaFrpDEiUhXQSwTTJAWFdQAXzN9kXNzLuPopwpLWR2XHc2T8iNHM4SMP67Uu3",
  "key20": "Zhy1kBbXBbfGgGyQbsCgHimJNZVrHhHixygtQvinJSS7rS1KjPvHxqNE667iERURsYHpp4f25fQkZCrhBrXoPrJ",
  "key21": "PB6QiDAAbpqk2aaANZ8fMkHLpjKyxXCYcWJhC7Jzde7pW4KFZ8WZjJVwm9sKkoVG6KGLdtSW8hH2NydxtdqpzJZ",
  "key22": "5pmjDCee7dme88sY5aabv1AbCz5wR6Dnek7VQ1RAEjEwUVFSDrYUna1zXUCSeLB73eXA4MLTQ8GMB8J4GtjpsaNN",
  "key23": "4mmnpvAr7gfTV7Dyr4nikDwhHshYrKgB3LW12eCRhhKyecc6enYADCqkFvBgDFjMmGXmxNcGdKB1R3Ca8KdgyWKh",
  "key24": "3bfTNFRxRoofn4C1A7XwM7WyZ7WVYm5EJoVpf41B6SPvyBGiMKHmRaYrPUyfEFup3qsLuJnRLEV1QaajTLGr8Ydd",
  "key25": "3T8VbVoyc7zXh6FmVxcDgjWqQGbkf6pXcbERVM9n8pgiqjKsKyy7EeuCTELD1etAMnDeczGA8c9vdfuoGCjDAbth",
  "key26": "4opd5nAaMGktop1qhxS1tt684vJekexUVWvuq8pYZjZvWKn1Sp4RkDARUuZSYGA4RkcLm4QAUCY2Giw52TqrFdaY",
  "key27": "21AhDoNwmw3KXpNPSLoe3cAdDYzD2fNiuJkNuwGDPeCiPiSSbR7aDwNKrwhKJmFF9Fpfz29Sot1C8fnYULjKKfdA",
  "key28": "VtuwR5iNsaDEjCgT5ABiHNhF4TWxwP3WPZpoBvdyQVtiGN89prw4zZC3Sw8HUJbpcvzbbGoomfuRFa6aD4GA2y1",
  "key29": "2YbGqH1vB6Q4NuMpDRPPBbwMt7J37rgLrNci5Sk22dbbHTwDtTDCCxzag7dz3BuNVAKHbtgPGqqUrpxy7PY3r5MT",
  "key30": "3KYMh5RtneBUtFMPkE7nGLDhbHkT5mCCedwgy4wGJtoRzQLSzsT1oVfXhkdYGG3tNkVLd2q8QK1GHXGZeQUJPrVp",
  "key31": "27bMeYWHWLuLEbEUGkMwFSu42XSVFn21Pv6kXMTx5CFbR6sWP11Ehppu2Bn5nejtGmaKDFRHMPGqe2jH6TDGii1a",
  "key32": "3KoFVNhXd5CRytjBYfGp3Tf3RiVvVZWcA8GZkP3wB97z6ibYXU7cD44CHbLnxo6ipKBiVXQzJvtrWCtqqjq3Qkcb"
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
