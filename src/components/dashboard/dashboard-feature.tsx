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
    "3pX2FFkyejNN95x7wUbLtrw2HVsFozpyTCkjvPzypz3wbmLzQnueVZhbJrLjsi2k7cEfuaYz2xHBmWdtgUsADnqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Go5KJmndkTijHTqXeCPBNLJfA45iuJMCGJxeq9q2q2Ga5ngh6b5V6VwnXS1bmuNTgd9nVt45kqjLf7sfTMkj3Bs",
  "key1": "4GeJnaYo4jgDigcnCAHpbRAevzSoDErbLCVkZqZ536DE24BSg4bXXih18zJY2u8KtrRWeWNvBZGzA8WWSSQ6QYRk",
  "key2": "954JhAg1irnc7pR6QvNgsfd8K6r7VwLkxREmrY7nXF7Gpbq5YmkhsXkhwg51hEk5bM8jRx1uUdorvaj4LyHFWjR",
  "key3": "jxWBwKYDf6sw2PRujTpgbJxDg4qy6s43iGGbRs8sgei5oiyPQ3cevWymKUCEhztCTVwS4bitcx7utWY1cs2Km5C",
  "key4": "2Cq64Xd53wEqgJPPTZ8yDxurfvXKNkLxwwPCqL9jpJd5m2r1Lc38VA7Sq2VTeiTQhkf58CVTYeG3ZDTqoz6XNBKu",
  "key5": "uBrUiPA9Vn24JujuEL9bA7pqzoCmCNMY95cEBaNretu1hBCAkb9T9Limj43W5rhDwR3Kabi52EXhcskiWSv7jmf",
  "key6": "2FFBmghuMeB735w2pCsRQ57tW1QamhVV2wpBsnLxYsgiwd8RpBTtRjKWxCSpJczvU3kTA28ShBz8z7W2943bHJZM",
  "key7": "4767WYUwjSPc2UwBYAJwKM6aVpLaKNrumZHnRuD1hMJJ4oyYmPqv721yiC1VCf9FeayavB4C5RPDm9XtmcXmAARN",
  "key8": "at6bDgwosdCgrRRtXUBqRBU8CetKuiCVCEaWRayw6saqR9tni7zJRafrwLEQHZANLCPL5MiAMpkGvrE2u23gZZf",
  "key9": "49kMjHyNa7sHz9zzCkjei46ToMpb6W6i8pDWq6pcJEaeu9AWWyYD2XmNycSNjSyAxTgZiEYV57A3z6vnz6rmryqJ",
  "key10": "4yQ3BVxbQQUXezWs9ERueUQ1791EmcU4JaoMvfG8bD3LuF1AvPvw3Nwt7bAKebQZUd2HGM1eS1FwP15Mvxqv6Fj6",
  "key11": "3CwofNs892BYTiabS7ZaGth6ntqTgrfypD9AyELRAVNbSybZR2rCrZfhaH2cYjtrCDC39YaW8kNCQuRMhUNiNxk2",
  "key12": "4mbFEXHhTe7cD9j4zqgYBPD7irzuAx5pKuNTFmEbBmdYa723WBdrdac5ovEaRL1TMAfPGyLsNgyWpSQp72gCh7yx",
  "key13": "66bCyTcezKNSG99iWFhTpmuubxYGSRPRjtBapDuKt2K6ECDVmPbszgeoBve7gE6mMM4Wra2Pf9Fh8uCsttjLmXXm",
  "key14": "2mN7DxhRYDG8UiNYoXRLkw5Jxcr8ksZ5rnQ7gmQjc33YjRrjN6iJvnNBh9k26ZC4z922siX1hFdUXxQg6cxHMyUE",
  "key15": "29VSsHYAVMWdUn7SjuS9FvCeBnCreX4b6TFBnnJz6GYdo5GiC6K25ncan9LAQnaCHsyRLoDBzPRyuYwYAwWc9HGA",
  "key16": "2aWEoQkkqUW7VTA2pWuGLYxpWaeQQvcNv4UiugaLSaxEfVLYK3XJXxtnTwoX5sWoAhSfuZQ7Fnsct1auB5VnikA4",
  "key17": "4rzWhuyNi1mR2cEci9J52AhE3RmDZy3ToCSyAkFYDGNXbRTjFFEpby3QrJBahorPkDn3REJkxAuyEBDSGAsHahRd",
  "key18": "5wmf1kjQhFdxUj93Ly2euaxK9EWy8m46Wy3QAWryeK1tPbQ1QTCVoB45fBJDqYmQu22qBWqpmaLAo9z942QPQGL2",
  "key19": "4RzdzK6DkTtVys3vQ778wbp29r3FTkPyYR83akGsyDfWusZRKv77rfVyhtv6ZpTLMkZLg1Lvnq8tCLof7EfA11Tz",
  "key20": "RwV7GNLP7pDPeYLZ2tS4sGLdYvJRcZjp6USTDw7tXL5CnTrmffSX9xitefPbsE1HX3w6ZUpsu3QY7J4n1xZW7Sq",
  "key21": "3mf8ZZmT524nCo6AVrWBfzPRxXNRZ4uP19pMPDQoZq8EQ7jinXA7NWAwFpMoj5vZY7uxCUfJPj4K8FxuKvZWtgqw",
  "key22": "JNBsJ4EocwQK1x4eaMffP3UnXz6mgJeZP6Js8vu55MvypKdwwKAFfbzCj9oPbNViUsq6YiAJtaPYfpeHyEt5JTc",
  "key23": "t86bAcCEnKfijWoYXGGytKJpRHkVNe6YFwxfR3aqA7mzo6zxZYSAYzAPHkWJZGMa1MgjSV2KRv9RGqwL1GM2iUo",
  "key24": "LtvtVeDQKnaVK1WTZwL6FdY3K9HLWAfcsLVf17Azx7HvYd99kqcVZtU71J1g14ds1o93hgAeXL5bGjXNEqmpdVN",
  "key25": "2tUKSMBZGKuBnrEv636pC5GtHWSb3znWKnBaqtHXmdsYtSw9EDTt52ED5uoG6fCT9bzm3xWvu9uHMgpWsJGBKkwu",
  "key26": "4W6DfS9cbf4uksHScJMgLaRxb8Uc5CY4WbvDPridkAaX2wMFi2jAFVbiFmE8hy1T41etPsAVvQFhv1MM498n7VoL",
  "key27": "2JSUm5ZUu5RbBnfBdGihWXuBSdvmHiSagc61M1DjcPqo8oBSDgfRpxRJcUK9S9G1EKg3qvBT7PX6PWWGnqnV6DS7",
  "key28": "47c1avCi5kJ2Jr9qCmUGe7bHtnVebHZzx9BVGKCnPWncPrmSasWsMSUzEudRRKtXcNou4oKUkhD1Y4B1vSWuLtup",
  "key29": "46UZdhHoRL1nmYwhf6esPhLPPsx7bc2pQeTx5zsVsL53KMhBkRoE2YTxAMM1Gqee6BE3L4LLaJANFNWgULJkuG8J",
  "key30": "5ut1bivrvUHu7KeVEPS5UBsFC38jnvRy7N7ZSz5Y5BvtbUM2BV7UNVsboTdba7udDwa67cjU6BtMCZRrE4T7RV9o",
  "key31": "3QPww9Kxs8xw8h1REZmgJTMtttBKtFbkM6ypT9KBjYZ4K6UrZY8UYV2HPpXtpEKjDdy8eXfVoWBwE3eykg6YAe1f",
  "key32": "26FcLbtWLM5zQomUAEwj143JTCNNJ7rxAhnXpF1qsMc4NC16RWp7CKKk7mJuukK8tsqLNNAtqMT8K6iWdnj3GGoZ",
  "key33": "aNCuinJLsea7Ed821WqaeTL8Ta36ZF1bA2sMztBi3i1RGrgWYKL73fJwewcTSW1hfWy9A1DHKkzAjV763mW48ue",
  "key34": "3JZ617EW1YfoKuKcKsPN8pjhkFER12dBW92ZcRZcA5YnzZfK5uEAidVQCVJcGKxgpEYHVVQgLWmYgyx1WVUMPkRD",
  "key35": "64XLU3JuSaHgS5ZsbTQAJSA6b5XF7ec9uRU7ceFS7HsQ3mCrgqWGq7p7Qxmf7QpD3QQaHXNzD3NJtiuyKtPRXpsr",
  "key36": "qzcB2pzAHUg4ZzSXkhe3Lt2xhfVDDmq8PDxatN3ZmgaELxgf2d82vpX521wjqKtEiwpTiSjoFmU9YL3B3kKdPG8",
  "key37": "5T236LViEv9N1Jc7UZPAqTV4aTomx8SSqULX7iXqbxDf1ADJfsHf3AiXeVaWQD4JTxxQRDXAsY63MLpujLmRf6uJ"
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
