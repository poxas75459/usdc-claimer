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
    "4oVpwGBfkLMW81gikF89M7vbotwJ7GCt7svfbSXJtH5oR6WYDGG3pCYvZBdXVgRXgd7vom3V3S5EXAmmtdFuhrFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cyEH4gr5zKWUp65Y1RPptjB3yWQ5KaE661KW3NrNPVA5fbPU6XfJFTbAbfQpCovQDb7WxreUcexWAcDeikJnUW3",
  "key1": "W7k5jjuF9Vpa8NXuTaDXT81LmJKecCSG2foAikQGKP9Vie7upGJTzuX9zaKRbs5VDcuCR1Tv3f9aseu7ZmggxWR",
  "key2": "34h9WviBTJq8ko9iBifnei2KE2bbtM3bKUwrtYeDYfnEGSCcQqda9SzaekQsHsrCfB1o4B5zmsQgdVQ8eYz199yg",
  "key3": "41aLH7smSChhUSJMr8m43SnKio52KDyfp3yt4kCA1iZh4dN3zQ7ohUdBdkYVGKhsGMtj5AvbSVrynq4J6thWwVxS",
  "key4": "2XzB8Gq1Y3CVBBJUZicsm1AKdyvHVEED55TJrP434ZqWAfjn4aQ9fRZLxm5uYzfGmxN4e6sZoVJqEfVKTYwFrFwF",
  "key5": "2TFwpUYA91XbHoHWhjSQRZw3KV12oGhyvbo418TzSJkX5ZQ4neMJoWL57Ycpm4eRfszetUrnhd2KUnEqppNarGja",
  "key6": "3Za3Es8u4Dt72doh4dtnCFdSZjRqB3xfTmec1S7pnSVrpJ8NZRzsdn2ywc4n2fuVnXfZqiLaPfLZFfUAzDkyHeST",
  "key7": "3w4azLJnwS1WJ3HPtRNDJY4rFYBqr5wGjR9Qy88AnWPgqcpbEorFocxTfGwNcZtsAGyq9yqv87TaGP8m3bu2QLJN",
  "key8": "4FdKgLaHGYjgVatwTcLo5hjv27dWX3Bv11nxm5AygZYbMMJWyqwsnY2afuTYvwZ9zWQQx5AhgF4atkDeoQzBtXs7",
  "key9": "2KPLeDL9oJdbtHwtSStVFs4icAvUuzEa72RbkDqVkzzDNyC3P3xg8gioGNBhKsC5yCpXDpq5MxsB1YNwwUWFDuFE",
  "key10": "2t7vBP4weSTRD99kU45UnAnZcBRtdSVV2PJRpcDmr1zAqmMYE5CrAGERc614Hz5DXD4ujGSWZzHg2uwWfMkdjB3K",
  "key11": "545r59n421Wpmtnthns8QGUfq1mfTWLLY6382Bi7j3uVpuzXHqonaPNkQtz7urY3EGQC8fjYDvXV81horyjvmwX7",
  "key12": "2b5Nh8bT4aoWwGqhic84iruVifY47vwHaBvdh92HZ44WpXUXerBuXrjbvzcSj5YWeEEXvjBH2nMACZZRTxdAvKQZ",
  "key13": "51M1um4FKMK76t1ukHiqdD1Tv2ABX9gku3eLczdmjX5E77dSDMtGgm1LeJ3qPUYmChx54UFYs3Gh8f6pwDWLnaMr",
  "key14": "3kmK9Nvn4d7twfYQkYGhpJncg9fvU6JBYLAvDAve4mSK3nyVeDXeBZC7RbQgS6NzDYLD7EoVQAcE7Hp7uVhwh93N",
  "key15": "56hirPYnyiVEE5yFBRqtffypMdPxkRu7YPJsH6mkNHHvje8U3zoK2W96u6jaR7RzGDtxuQAXiCdyh8bK75P6B3yD",
  "key16": "5WBAcziqKqKJArJNzKzV1cGv6qvYJsqwEfkxxxU1ssNhNrJdt3zRJmUzQ2UjHRFcMUvpGcTZs4o1w3JJa1sNv9mp",
  "key17": "3iRYebLJuvrmoDTXbHUaBFWJU7JRTHr1ycgxv6d7CwsfMQCbgQqd6onWK2jkHM53HLDH4FYBP5cgVgCgrrKiDuvb",
  "key18": "53zzQNgb1SAoPWovjonoMsXixQeNr6tX68JGB4kzBoF9Wt4otwUUpxLskZJTbKVuZhLA1jv1vd8yd3CqnYyEqJRQ",
  "key19": "5oGrE8Be1rxRPEzn6KuV8utu9poe7DMK3qyP3XRtpsUiKfMrzwR9qb4PUgYqyCUgkrAdHi9xjJWvikjnXzVPKF8A",
  "key20": "22w3ZGSXviQD8bi1G8EuDX2mckReXCeCNVseGBZ7T2mozWwznPHz27oYbs2WJthe7MVn8WVPWEKnjSWoiUXSXZqW",
  "key21": "3f5n6oKXgEk9P2EcVDxc4oyZARTHBFfhDKdY7gZ4qrAv2UKLx9rqDuW9meuvwbVmJC84UdmYvzsoaK38TUCmxkR1",
  "key22": "5R78hGC8tHFf9LYq4snLqrQeXNsQm6rNomvhmGVVk7m1i6SWXwBJrJgkhY2eFKXXoQoWs8Ke6uH57FPkE1m67nXU",
  "key23": "3h9X7r4DCJ9fLAsY9dhAPrxttVFuHvyEYKXZ9PfYCZB4QPZD4zNEW2mhf5rzmTtooNrsKCLWb9mJBQTvLyhJcbcj",
  "key24": "5HaDkxhRbdwM9oykXMrmvjrg1SH92sPoCfEiYCHEjZQYomioVWbcPLso2VGDP18m95ahJcnEYxHpgYwWnX8jZgxP",
  "key25": "4pGZ7TmSyHyNEjwufLYG8xxf23mA41Kemb4HFXRkkGS2oHZMEEBVvQLBwRRKbR8KKHpNiidt9UkZsQ5hnftaTF9y",
  "key26": "2RNaAx8NkQCNmy8B928cTn3dKWCro4kfmJ8ChuZnQRYNCSbxnMkSLf8ekSh8v7E9XxjAn8kToWoy8eKNdZs6QF5L",
  "key27": "aUk2zXRD6uUhfZ3f4hNoZj1nsyW9L3WYPsd7ZvGtGtWWtzdU5ZSdd4YxnM3MDSburhsopwxoW9ousXbcc7ooeN7",
  "key28": "3bqcPXFrd3S7CJpne8c5pCHxMHG4BQSMrbipi7x1RP5PLgVasHW2d6N7ggM4bKgzZpAaZcyQiHM8NS4Y14wpD1JP",
  "key29": "25RL1oYwUfaCvxdpR19Bbm9bLYbSd65aBHx4L2qMHE4VBcERdHBctGE2JUdVZx4UouNSBBhdKJ4uwqm33YCbKFzW",
  "key30": "2pyvmCPRa78HQKMZWFkonvg195z5Z7y6FdpRpLEysJC5hbnbgbWhDTUdJpU9M1jAs61ecAqzB2BJ5Lakn2uqDf4x",
  "key31": "28aviWGUqycXaPGpVDysPZoUQL78qbaCWN6XXhcADrHDs2FuxZjn48UApXX8iGVy6emt33tip8H32ZgusofBbHPz",
  "key32": "4yY4k97ADd2JhWuh6DTazraDmddrHst2fZdMrDmCTKHEwgxYMHhFVZcXRHnW1sPvnW63GERoscnPhpTyRtKvi6bD",
  "key33": "4FVyKesGWoUPfcugGG9RSqFWeEe9h5uXLYXHE31SS8G9ojvaERFezYPCdJwJN7qQnLSFTa2k4ghpjVkmLvSCYKPG",
  "key34": "z6JyxR9ftdc2L6S8j1apnVZ5sMc7UTG3NYVaVsRxjDvRDhrqz44uS3jvw79dgqi1fkP83QBgCgDhWVnifDATNSs",
  "key35": "uVo3AmGWBJyetkRCzc5kCThRcuGfDoYHK5oaCnaH6zcwdRKFydvwVZwBJqCvVdS8wMmEuksaSLgWh48mjH7pvHa",
  "key36": "E4Fr43zT4u2SAtUCR2eaHiadkVyXtfGioD4eAXf6AjLhB7cuzjxpor6UT3vnTtMFbbtP1xeGv2bSNHnBu42MPsn"
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
