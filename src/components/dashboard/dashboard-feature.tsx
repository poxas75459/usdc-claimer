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
    "2bCtVqdGD928WrMN4oqPFb4EPj6ZCVR5CbKsmeKT9qvo3UBpQ7tJoAuSFBvPtHSAzped3wdzffqFhJBZEdC9kEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oahz1QaSJ9vyE1hqSMZrDkijyP1fBb2MVjAYpAFpjbCD6q4nZ3rrePpsZSyranPp7nUhRWjv6UtZW8WzdnUkpbK",
  "key1": "tiCCKhiTtHXzYaynd5EXtj5WeNjMZZHzE2w69m1a3EKMp3Je23JjfGAD9g6twzYZ2aameDFgiXS4axFiCi2Qpux",
  "key2": "53VStBvS5mAH5iRYsCakfyLoGDDzu3CMvYkDFR4ksAbbdCwoDzQQzMS2fpMtxBbjUrnLhYW9Mffy3a2z37Uki1Ta",
  "key3": "4SGh86ZHmU5yEVGcHd2y7Wfy2j8STrLREDhQGhWj5rxGq4LavpXV2hcPGEW2KQXAsaG3hQ4SsHnKeDmuUYPUZZDF",
  "key4": "64drMQi6Em2HJMkCHBZ5U3mX1HwsvAr3epN99eSSGNQoKvJnyMGuJPSu2bXVcqMFvCak4Php6YtGrv9QQui7mkMw",
  "key5": "ufHC21Wv6x6JGfCcxtXcFwqr4tzksaNaY4sCkH4KavzaHv2JAPiEFYrRU6VySrg8PkUhHn2C8BjTRQ3Zxpnrbr7",
  "key6": "638xuN5wtA4D8jWNgwkXMctVSiMh4saKNq6i8NkYFWZB7pGzULysozP2Do7v9nWpf9x1u7GtLAUHMVU7ax4zMZXh",
  "key7": "23wqY8MBFN8RJA4dziuUr4qezdVew6zUnXXgyBFy9xyMhWLpt4Gvh4QJUGsUYbZcALLxNfZ1MDsWWYSkaPYQ33Vk",
  "key8": "2KVFCEUdpsA4UAVB5qxvtNuSXa42JxrfYtR4bFj7xeeGub4jiv5CYfTQjKE5sfb3VvrS7Kqn6XMY9zrHfKB1VdFy",
  "key9": "Fdr4NbWDa7y1T2DSUnerWMb2wivxK9RDui2pAKc63jTwkE3rL5RajUfwotKWv745UU32Juo4atX4MQkQaahJPKB",
  "key10": "4Q6Ac1JvG3CSqX4aZdJxhrgE1BcdMWS7YC4udawNpNphL4sSRAiEzVVQXs6LLz618J1pqGD2qAAQP53S5i89i9w9",
  "key11": "2viWMMjpidkjZh94bS27BfyGLPdTYiRv7pEsPRnSh2pV3GRGYMSivHaDb4GM9NnMmN1kzRMM886wFPzTbXgisT5H",
  "key12": "5VqX9ovVcj3drqP9HEVSxomwrQuJ7k3VD7tA53ywLQcktk8aokT8SwBTEp14vuDQXGNUZS3oZyvnC4bdFFQEXQHR",
  "key13": "4jSe44qMqof89EGKdTLKzmxKdFhjahfiuacKKGmzYavTqARZEyy561yLRwu4mJGnGCZ4mo2iHS3bYgQE1JN4vHyr",
  "key14": "2fCvfEFntvkeSq99QeMvTvtZazFH7sYBMKx4gacSacnfN1WKnBPQCX8mpj2Y7BU1G1iBMKjiyoG1TJ15qkumwxHU",
  "key15": "2k2W5cmMtdxs5bNdFtyVnTYd69wUDFwC6vc1t7n2VynAAFH8HKFhZHVa1Q2uWxvRdJEibriM3wVZvBpaTEpqmk4P",
  "key16": "4T2hVGitXV31eBhhwNtfmyFoMSsd5jSqEhGqXV911GEooUjmeiMpjrBJErep33NTF8CbMajAEeinSgoQJUBuySdf",
  "key17": "4PzKeds3SWdJqSapfagJtqPU54E27QachTVtnZu1g5vjBvFCrnFzAZHxeqF6XVUQAY6ASKP1sEJdQiLqRoaJr2H3",
  "key18": "xj9frrkwbSkujYnjYgJogBoPmF6AZtbGSYBtJygvJBAZi2g5NBUSqB13vWJeSq17QV6Xc4v6XmFa4rtWL85ynZU",
  "key19": "Dx4kW2tsPYPfktqPBgZSrwrqEobM3BdGkkpcge2zvd3j5y2D1Sr1kf5WvkHsBY3fTexjLchKSxH2wAnAsgQYDUd",
  "key20": "5u3qFBt4XAGRxyCmphBAk238X2oTDkFaBDHrXv6tX6SezjX6ULUo2MoCfxqfTZ4FbppYVbaKr5J444EGksgfCcq8",
  "key21": "4SKLZzkzABD5jFJtnihFQBqhLsJ4ndhpaAhRfjwCca9W4RkCKng83FpGNtcb8Pr9KJcL4EHCTuTT5rXkX97T4wvA",
  "key22": "MAemNKcvxKSoeegWXb1C1jtfdHPkHPmM6tC3bz8GDyGFBvdkBWVcgUuvSaJQqTTtujCg4rkUkLc4qdJXaDLCzCn",
  "key23": "2fWZwdaEgirZZHAJyvkXviANKhrc4zRtor8cPzhYGrFxgwRr4a9RHqy4wcfbaWf26AigQ5curAY2jBgPkZ7gV95D",
  "key24": "4fsLxFBHThU86zyKB7rsxaYXw88KYoSKpJZfhkhS7gXNVaJ62JsV3WzqLebHAntAkQdaAhanxjh91YESMHJyoxim",
  "key25": "2hYVxQ2qMPcDoGBZX9YGLf5kTic1Xmo6xUVUrTVVzNroadihcKUxk5egekQy3sjWxCxvsYtd8GKNLjZURzS6ofzu",
  "key26": "2dGBa1objV51eqhXpVVc2717Q7TD9LwZQxMcFCswC7g21nQB5UkeESUFWtgpGs9JxvTxKQE1usYxG66eBu79i7YJ",
  "key27": "41heti1VKAPtH7zUGzTfM7ieptDqWwpMFLCoJc2oxpgqdFswc5c8dyTbh5Tjaf2zFz66KwAu39SbCf5fUrEYhk7g",
  "key28": "4GiH7ywQCHKXBm7jQGkttRvFAusoj9rS12XeaxLEvyGUytb6JwHZgjUxao5b9DuzMWkEfy9WRTVGf8CosarS9Gq7",
  "key29": "2MXpD4mgHgtCgmqjjVVD42bNbNFvZCD1zZtoYiePHacDDQzuaG2v4RYjGZpUMVfBVRKBzef5y2NTPthk3k1XVrTw",
  "key30": "2K1f7YVi7zbHfqzPyGd6NwcyYU8GCzdCnJhmmSxAtZu18LMWqs7WmrQZxFLJRqRXPStt6v8iyeUQhnrMFFi9t5dA",
  "key31": "2pB4nW6drAu1Ar9knTtT3ArgfF9XXRJqouUCc82vo9fxZ6gsU2rkFjzyE5nLkmhWvr2hCJBXXEgTFo5Yj2niq1Fv",
  "key32": "4wzJX8YqRPZQxCEZsuy7x6jKwkR6iQjAvULm1siEsLgNayvDALFHuh135mN5sXQUzQ248DjLfUDpgnmBsUr9bNwv"
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
