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
    "7aBCw6DP4zsnHCpVWDqqX9KZwfJbR2mck5419wE3fGYmfq8ep5xkdk3FvrNkTkqc8KvF2G1uriTEcoEtZPdYayr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LLPh5HmcgShjsmbFkpAAMqU8RyCpqjtEr9WjE1ezN1FChMcSNd9jq7KU3kR28Zm8hwGZwViNjqrCBURiyqgKwFa",
  "key1": "3GPgxz8hDWcdguVtr1ZzAEpuQW6pxEMw5LujK8aLWgjZhftvpABVdHLSK9uuSwNvPubFT4C1KHDvBsobSp36egk6",
  "key2": "5gAfBioe7FR9wt4u7iNxXq61D1g1KeLNcmRrGXo1zftdszRXQE3imrXcmeRx9jemW1HWgAEmKtSWvcBWkW5DvAGY",
  "key3": "51EH1KyNLerXC8ZGjboqWW6CFQqmXGc6BmChHUU3mqLY3oGGei7anf1s4QmXpnYmthjsvBPkWgJyYwLgdrAWhJ4J",
  "key4": "3jhNXKL9T6hcKdo9RxSifqQbTbChx3TtUNSfsxiWFx61wMXSgiSCkyb2r3VmrJT4HL291yDXhFMKNnSDu9JZBM5o",
  "key5": "5mn9p1Uh1ejCCbfxAXV1u1rEfy92c5x1F7Q9ygRCFjgERjCLsn6FU3JxbQoSDQsCQw5y29PtEVeUZfuDQKZf6t9q",
  "key6": "3w1YS86hk7oM38w9uAC6BwBEuxiwFRporQsAJ7P1VY5ThMzyJMjA9if57Wuosj2oH3eXsSupL8HLvrnLnnB238mv",
  "key7": "4vs84fvwpQUxHXr2f9uufmXFdm6Zd37EKXBZHiuNuUt1sTNMhPBuN7ssTk8Pf2DzKd6qm5APtZebFPBC6NQXC1J6",
  "key8": "eUadrVN6zLVYpCqcZLCPzUphs2a5GQ93gn3hS5JwUv5QiB4Qnky73zhcVUtzFaoH8QNGeHGg9h45Gexw3qEuyhh",
  "key9": "2F7KY39MqVn4CVwewFBes22bfQV9ADKkXUit9E7eVYPv3iq8ryY4V4LXm3PLFT17UopGW28YhpxtUTmRo1NLgDJC",
  "key10": "sipKVng4EknMjMSScbocRsqsqcoD3uVdbHhLSezD6RbkSGNhieXKwpdbJck2aFZ6ev3dqWPabm5wuwYmXmrhezV",
  "key11": "4gvEy9dYVwqc2FuiieHuhqbjJJsH6CjDGMDEEBTxu6cQT383anhtVrbqm9eDLgJ4v5tJKQZbuhk9wexB5zZz5fUS",
  "key12": "426AFkUpKar3EWq1i7uH5LdthFuGjcQKFbidqJLNdbaugZqcYciqo5yzAEqmfhUQtfmKnh9b2bB8HVsBLjiutY2q",
  "key13": "cWWdTWPVgYsoBDXz6DwUnVLjEskbvwpERxbpXZy7aBhdCeUr9mMpgmwEmJL7ELD3FN3Qh3dTGDLtH4ZLvmZ2mPE",
  "key14": "5TXYH7gULUHWVYAUtueoY5NBtWVKyetVyQ7f93ijeVxrWfCHehXgPzvqJYS8kduo9rNxeiQ6zZxE7xvQwH2qkmgq",
  "key15": "3Qso8CgU6L7c7aB4GXX3uVYmZas44yjm5qcAqJvuTDAZfTmHNbSyMHRhGcSgnbgbuo4b9dzMwtWSFu4KyC55Ascm",
  "key16": "n8TNipDP2jX5W4p6Wyzg9hV7m5rfgKJks6kVtgCKruxf16mktzqBhmrBkSqyJKShKcrkC1BmYy1zFmXQKopJsrV",
  "key17": "4jmXnJA668vuhzd8msX7GPwWe3WSutGSULm8MFgYSpPcjvBhAbjqVdzF6QfxhjJffsZwCkKBDrsZEiHcjJs4diLb",
  "key18": "4wymDiN9emRV5iudF4Tofdsh4VG2g9zvY3DxenJi82wfxXHLraX5xM6yvypZYsj3AwdjHBQHxP14dovEH5zem9PR",
  "key19": "3tkTxqzB3Dtu6rHrX7ydK7kDjDX5EdJkjJwkGS7gMaWTpShzfbfkNBFEC5muGH8KABwmucQDHFLe5VHqfDdmdqZp",
  "key20": "4VwvAAHBUKZsGhY4CXX5k3tst7caVrfjenAL2JGEFt81X1ELPm2kQbvhCwN7n2wnorHQEP2ZKU9c66xcEWkivH1s",
  "key21": "CFs8WtacoBm6yBJ9Vk5CnGAYkH9BrHTmNjiYZngd9h2pxr1zcyroYvNvpKhGA6zUejbrhb5yPFXS6SHZru3C4i9",
  "key22": "529r7hiH8aEoj9DgJte8mziAFifaVZKASwGhFUgfr67869ioiDfNRFyQpgKwUF4e7cypqX7DEe6pmspHTRv98wVc",
  "key23": "61g7abRdxXQQE7szgjfaykfNB2raGraroSCJon2KrnRewggi6Kp1dCiiPU85fVnQB8sCteE1gJghuqniJoy3rRPQ",
  "key24": "4gCet5J4PVyXJhU2HLPkqpabzpeFF8PkrxBGEjxTae9WnpKVAGbkJ48dEVs1qiwqGeKti8zxKtDMnL9NgcTCswVx",
  "key25": "2ZaUHJz7eCmZ5PgZGSSnt46x1j9nwHzsi9fxAYsVEPwxZpPEXu6Jdr6q1jvCs9hwmCg6hwibYs2kHXoi35SBAwyX",
  "key26": "4n36kWUK4tR8rVkY7rpFYZGnYQwQknZu6pzT9R8wFheuvejTnNgar881XxAasbxvgkEHdXpe85sYmF2P9ugAMURS",
  "key27": "3Z3kh2PmnDFvTu5vL19Ts6H7ihzTEtuxZ4TrsU3FsVr2ovzwP5u4Ak6vXXPNPNsNz9tkeLKguwjA6nHffYg6pc8M",
  "key28": "24mHkLe1v6qfyrEE6YYVF1RK9BCtPPwv7H6q35ve3CjVsz7UobzYwPdk23MmM3TFUcuygfSeW5omVrV1ufcTfEhd",
  "key29": "juezTcqBQ52Jfvo223Ey3x2YCAzxNxVUZDag9EQ3aVsLEQteUBAkDKYrHe7AwFjiV6FpNs9Rv8qTAttEw67pAGy",
  "key30": "JNVGuRwwm9ie3PPU9TMLmnBwXs8yrA3WbCFnDdSZkmB9zZNM65aCd7ueC9eV1HuXByaPoo7jR4jyWq4j7dKuAEM",
  "key31": "2bHwBmrSTyVCCzcWk1RVowLUxStUZHJHSQhkMH9U2SFHz8Kkyt7tY9h54FyC4UFRzTWovNonBeSbfwnyj88jMpyf",
  "key32": "4T6uzRqqdwBXgAYLmVrUTxLpaCqqV5Atycz4MN2LjcYhVc8YDY4SkAuhGfkyM16KD8LQUWs3KY6pHkqXCpSCGPVe",
  "key33": "5iDAFZEUyfRRPLkpSeuwAFiKYWadLqh1ZwKpYipGmKQF5sznpwmzm6CysUdiM8hAWVWV9fTikEFiXgr5XD98frhv",
  "key34": "4Wxx9GSUiRFXZnrfvZ6BM7oV4F2D1QHK68z23DhHFx4DVLYC1JxWAkP3ViPjQ9nuvHdJZYf8ftekvXwPCEjDLcY9",
  "key35": "3HMoLpopb2bMXk5HYGLCJy1VzW5EnoVVPhAmtXauUiHH8pgRbkiP7bvZ8xyQxuwjXBhm53hqLTuP5WqB9gUQFpeA",
  "key36": "5dvbyFaV1MaGAY9mU6WkZEPYYA65iu3D7RpzeZGqYFqiXE6YWQAno7MAK3hxY2799TNw7aDQd4u3Wvrv3GAAc4sJ",
  "key37": "22hEaTFpaXSCoavizQW6jQTa1RbX926sadMDnQfRoC74CUFDofp36QoVqcwYeoTNRofHpYBw6q5C6g29m4easncG",
  "key38": "33JSAJeDaoj59RUVGai8niMLDupzVSp4nV9Q4MeYe4PTtxJZB71vZxh6WePSVPGpg6xQ3y2T2UvBNroP62pZ61c2",
  "key39": "4tpPpYMhVHDbHZDwc4KaWP854ieW8LYTNKQHyCjhvyFZrjLdJZxMS18NKtEmwmABfofLsLJ36QGahbcYGDJfxUVt",
  "key40": "4YCjHh8F4rehFhBJoKiwdaFVJM5WrD161snuRUUSV93T2peSE94k4LX1h9MStUvZnb1AjiTXsfCqZmpfXdRfKFCg",
  "key41": "33wiKRf6wRf3ibpvDZ32epXHiGELBA5EDTFi4eQtQxuvbsUNTRFegTTcRZRp1DSAWS8QpYv8HM8oVnRwQvtugBEW",
  "key42": "5ENy2YLZKX3qovQdPR7tWhzv75TkqVVvihMZ2v5AkjVaD8ZgpsCnGRgVU6bSAFNTJjHfaLXiZgNLYQBoqbc6b6E5",
  "key43": "3xgNZMDpLBa3C1BeSHXhE2JVo58W9szTFvfb77amc8KVvWF9KkdXQ678keeb2k95hbYfsVHaTNEUbg5Ph29i3MRp",
  "key44": "4pt1eu8LdRGRApdoft5tRCprnApLinBaRx7VyUixtAUNhvcmRDHnxCRTBY6tjfgL1fEhpNn2otyWPnGWBSio4VSt",
  "key45": "5cz6DGHacNAdtrHFt1d4ahRm1yLwQXUZqNz7jdbeKdTbZNJvK4uTBFFafax3xRkDDUHzVM4BHr4XkiPR7w3AWV9i",
  "key46": "4bxbX5uNzywNpYhTcXDaBdJhbDSLBS45tZXXVn8E4ER8ow78PhoBuA2KFN7fa6Z9176uHcuxyF5pwFwCZGoALBHL"
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
