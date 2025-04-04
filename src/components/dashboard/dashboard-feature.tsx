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
    "9DoU4TUCDWbV5P2FCvf8zotEX1HxD9TmT73PjunshzkHJGoNiWTgs9gdauaMuijLBXPia9n8cvFCFAj7r4XdT5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FS44qRXXqsvNNrziifKp2Aq3dCHWBi2nGATW8dyKJgzGgq3YWiGmqiy23pYrAyQyUPdwMbmqUzGjBySdTBpuSWs",
  "key1": "3gF6NmdrECmrw2MQN6Wee2ehcLEU9zcYdVoT7HZtaRmNDresVtQWEJdJmJJHuhyJckDBZB9F1fVXiD7cmFkbk1Ja",
  "key2": "52J9aJSzSEfTbVEfJeAJY1sGLnkSaF8uL6W7UdwDVRHFeMH4Pca7rEwVVR73GJCLHfdpjLDToo2tgHPsEXoA2WDp",
  "key3": "2LcEPfJubSHhziHCC7BkaNjmBvTAdRx7HANzM1jxQE5u3Q9u4aYeUCubUvZQnNSBHHdivMAqBibdu5qjLTraf8BJ",
  "key4": "2CCCUXAcmmG4PnHfqVU4vRTNoVEaiyhUF2NoZbw9HDDioK7i7kSwpQAq3965Pbez4hoJgk2J1CmgX3AvEhBNpGPp",
  "key5": "4kXjNAe3wjjyPKpFXJ9uAw8HSBCyDYs2fYPRzfzLxAynKdWU6s8SNZTMTiTtDEma6k8Kipw338AYftpHPRfvR8pd",
  "key6": "3ABUabXCUQ5nEZ82iGfpJo2Pvt918aftN2xrz6hSFoYQNyiVExSUUbUbCC6owCKDV4mkHvcGZogY2wbgj13FThM2",
  "key7": "2zncr8YCRbiiHnkiQPbofWWQnX9b39W3Dr9FC5Z5tXFpqTovLK5WK8rfunMyJ12HFdUbSewPehypvUqRydaAdfzY",
  "key8": "5G4W6b6GWys886sbdRvpWmqkxhPYoNrawXUky8r8mvXxt5VdDkPZ2ApnnZvk75271yXutPBPiqHaVJGcqaJhvFHo",
  "key9": "3tjF5DhjaxYRYGBPeTNxUzAjnxXg7PXKpwDqq4wQ7BW72xLLqE9ajCph8HNuKhh2qD74oHZ8myEHwLZs1QcpZVod",
  "key10": "53Vy8LtoGZcE29vsAGW5kJ7dkffyeW96bFXA88TQZqUtc1rmL5BKexRNCnmA97cDSUrSdrCDrwLHQijSXSamgHYe",
  "key11": "4ZGW251NL7DNhXSnqku1Aigfg3SPga5t2xFZuiJ1ezLXTPGbKTqiBqLkLWXdpmibBZ2tf4s8sHruU9uYy7BvZ52X",
  "key12": "Kp2fWeKANRTqp5Cauv5YXWsn7VfYRWTPcp14TNgZ91n2KN89nGhecfgSyf412batDra9L1Xu7qfxNhZ4qf9jgDv",
  "key13": "367smNPGTJQkH2hf98khW9tJeHs5tLc1FNp9wA7BgrHGghAFuze6pVNpnHpeBrDtLhEC3F1pHjMEvXCfFZyh3piT",
  "key14": "3yDyA6XQ482J4375cdAutScpLyQ6TWU99XjNDsCVwYrTm16g4qQ8M4C2RNMQhF26V186yQLYncMSDngpVkGWaJwd",
  "key15": "5tnWysiSSEv13Lhgi3o5d8WNT7P7dXPk6ELz8kt3FBN8MgDmzGpoTeA3RnE7aqMd5vXXiJEg2NwkgaRDiwVx8A6J",
  "key16": "3yEfqvtyweXGqAkSHsUnmgZKP34JzyXftWBLDnX4Zk7ppaUWatP6U8XZr46VRgQLrkpoAHCSZ99vqpaEf3uQLooc",
  "key17": "3b3sTJeSBDDg2zjf8ehKpbijVi1NDCD8TwCKaEiyXBAoqMnz5CifgXUFzhzd8ZVQc6iaZx1mtimiask8R8j8rTVe",
  "key18": "j5udP6z8sLb2g8f7oSDx48APMmnqbg2eEzrxppAGKv2HAMpAzzjijKkPwUhSDdvtu9994yeaWRqAbAw2XVjJVR5",
  "key19": "3P5sjjbvKwwkdHwH77Sj2VbSESVX3i9XFrGub8j57JXVQtASjG2vAcyGq6gph8ho7NneHoGwo1CdRf2oqCd7K8pa",
  "key20": "38hNGH86T5Xb99UvRRDPtcrBJy3x2nwKXUMnts6s1STca3madKqaDGv2iRqqMvY8Ltyk9BFnhngTszUNqAr3hXuJ",
  "key21": "oLzaZXiuVP7ym27L6h3nWD1cHAhHp6WDB4tAohyZuyJcmtuHqj4NCPbShxdPqM5f6iESq9CrqNnV8ccDtCMc2qw",
  "key22": "38bYEbesUhsWYAY8FifZyrd2QqJdaRqKz4a9kiurfUqFLe2b72WbGxRW4HKH7fu416gVqE2E9mCszLUg3QYpdXG2",
  "key23": "3PbazEeCppurjCGQuX17Ggq6cZJaAkViNw3TbRQmHrF9bQUJBvPAST7hVoC6BVWhxYJwYSFKyW4yyDJMjMqWMkBN",
  "key24": "3eAuDGTvm2x5U726VqzMDNHe5nXUdgZ5YEsaxNawMDTRWJtcmX6Z2FaLVYPd9GyaX7qxg83LTheymi2cCNC6X6Ef",
  "key25": "2TQr7DSXQoB3xL5gjHW7Nb38QG8Tw3QHGEPhKcE9KvCvJCYZiE4JcuXEevnTafxPGJxGNjKw5gRc1dKeELT5ki8a",
  "key26": "5jnV2L6vVSn3mxFWyMMr7SffRRgDukZZauH1Y85BWZ7Vd9Nfua3g5nQxVirXyKW7dvrvANzgE2k58yhN5kMAMSjJ",
  "key27": "4cpGafqvXg3CdpEdAJfSG1GLmXk8AtUyBRd92dK3HghxNxpwYLHpL1qSxxRYfSatrVMwv6KRTjTaqYQ4g39Tz8KS",
  "key28": "5C1cVC2oSPYtNTFghnbVpbN9MP3p7c6xA4MzMzYCUKYYX7Z1wR3hJg1VtroDCx5agdbg3TE9dxBWvfC57ti5VoWw",
  "key29": "5St21UV8AJCLbuePvgJ5TkS2i8Eq1Zc3JnACe5UMqE3hqgXaCPErP6UkAwwPEcWUBACicKSXpkZQaDp6yq34i2cH",
  "key30": "2QdGmxHbE6AfFvfYE3sud2678WWMHRa1UPsJByw7uHgBJWsqwXmXDhJRRWoyRZ1wwTb31PdZWgBTtB47PPbg7Aif",
  "key31": "62ZYQrC4AMQNegYP2QLhAUTVnVHsMKKgGv8FdM49pU3Ms8bwz915n3eAXtPeVGiPp1Tmeiaxq93zbh9R3rrSSQx6",
  "key32": "5PR3skwenFVsWfWZKiqdjZkQciddGYXPQsV7ttxecu4kD6EQJbjQ9UQU2aLMPyQkxh2RMLYYequ4MWRDb4r5FzkB",
  "key33": "2KEGNaTcMPJH9keRqfzcF5mTU7kX64ZiwVL6xLSMLWkiY5etz1Brx35Nn7z6LusWJKxBir7FCtjSvshbXD4ykz2m",
  "key34": "2uczj2oUVKMtchh5K8KgHihvLDHbDMF4szoQUG3ohnrT2qqeoSBJXbBfKuHbedJarPouu4cfKxEA9VwmZSuRa1Jg",
  "key35": "afdrwDtHFo2gcLiRspH9iEp7awRGugRfc6udcD575TMWLvAwhuTcX19fX7hPKuAkWKJjDQsHrm4FEV6VAjxW4Ar",
  "key36": "5M6fRdoAkVkWhEguyp2zqsJNjks14cMwYBTEsq89jKYJwCk84nVinAE6z4FQ3bWzgo7C5ho4bLVaF6fF6JhNV77v",
  "key37": "3xHTJpWvH2EBQK9Lmy3DBpkm99XqPKmLQCpqEFn2Z1zbN8LD2h2SBkAdMsAdbBZA7wyR2ugGKfGwjjhkPd5UmToq",
  "key38": "4S61HVcGakfyYmUoLW9zepTXo2ACT5EPMMeAFxG3h3xUjpkN4PnZWJ1xPhBPMbcUuTeqkR9NXrWEdq5p4EuRYRCq",
  "key39": "66FZRaxT7R96DhJJNHgww1zDcgSfTSB4M9hTj5wXscu2ZXxTBpKJFA6XGgztyMVTEsUCmQfMXtPrCk8mojHeHUQg",
  "key40": "44sb4CspytNkxe6HCvMcZFjAKY3Xe4ifPjqwi8NmBa27MNVS1yVuDfFEuPVJCWad6NovmMnF5ppVCit6dQzT1Gd6",
  "key41": "rVdciSsGXRLE5MaVGgRwDctjjT5qu377jADKgqdCqjcnTgVY5GzArk5yz4Wuni6zxZ26b7XUWEpH8BbyBajPd5g",
  "key42": "21CBVYurYoK9mPVP5rGaEcXDmeG7YMymFr7Cu91Eo2K3UWosyKJ4Y1K971nbV2w57ijafyNY8F3Mkw6cXooDBHa9",
  "key43": "FN9p5FEqtR2bwhtRSJNvPaiPQMbaa3PxZkgovjnheDJDfg5Rj2mXeNhYmgfezdCuac6m5Dz6EVCSxBy8cHC4SMX",
  "key44": "2xh7EwsBwriK9J6ys7ACcyZJSb9rYK2WB1Bx6P3WZPNHFHgXH7fxFyqfQccZSd5e4qHytDMMvdRiENLXadSueu3W",
  "key45": "2HFHWChDDZ9oDSw5da975AGovQfYygEUqGhPvjLt9ATSwQ68GBH3Svs9wGUWjHs1guavZ5XD1WJPCsHbsHncW38B",
  "key46": "5g9tFscGbXnGXSNKWc9WnjKNcZwAkdYdc2JwsMDbLHV1wc5pmAhCy4fgjsNDt95kyV6uJ9AHXqhtkdBa5JPHSXke",
  "key47": "3j7D1UNGmxKw8nXnH28mcxh7Ptk7AVgVkFCwB3ZuKCdN7iDuY8GxvkVTx9gkkoh2LcTiKSmFrW5uXdCYM8pDkp7u",
  "key48": "5Fn4CiJA4XJ85osTVhWoJjMkDwvdLikYuVRwPESN8JAX77vBAomxmU6VGaF7W4CNTy1eGS41NG3S33dsVhePFPnN",
  "key49": "3gYSPwshjcAcRVTsqGoSQC8DpZzxoBiFjjsTmJ6Dq1vn6dFGUY35NzvczMdFRFtH6dFxKHVSKLwyjKqXqnaEME6G"
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
