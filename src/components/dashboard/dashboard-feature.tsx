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
    "3xNUcXwWhdYhgzTAggmCSpgJ73SeQ2M85tWjqhjvpBeNLotkNMae1jxKjDaXUuCgFcb6PT3Cr241j2TyBTdbezjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gwnuLFmxMcEAjfmxhH5XH7kpgjSUzJB88fXZiWdHXawCqqqLBDGXcEi478LHbDtkXaT46MzHKd4oNMG1KiXnkTq",
  "key1": "3PpEp28Sip7tACrhc2cB8ZMAu9UwevMHJAMwmUdAzbFWDjPVnHD7BhwqVuvA9FjAz9GFBrN2rxjjVQb1CMYEp2ye",
  "key2": "4DUmZvdpeHPyMHSr9fX5Uaj4soRDLf3A9Hca3QmoUJDy2D5EdLGQA916kuC8ojRjw731q3A8ZNbCRdASbEhJ1fFv",
  "key3": "4jXYkwXbJZKzjEBz6hRNWix3p9dW3c5L3C3LQ2wBhw7Xa7d2x6yVdKY2AhuBHgCMzY34X8EM69fjjVMhzm6FpXMG",
  "key4": "4r2A572w2KhrrLNTANSj9YBAjKAcFLsSSpH85JVHQRnqFkBc3Mtyqe1cjCBNxEekNmPn79BpQ7VukyrfLRaFPAeX",
  "key5": "2pJkBeUBRDHaovG7YgQp8Abykbtf4Ppoh3vsdJvksDKKFAQ98b9m9HQABSsPTfzqq28WJ2fgXrZU7ms62RTa5Pu9",
  "key6": "3JgpH1PcUVPAmkNFwjL6svQy23pYnvK6ZhxYPJ65dBXb1CNfimdZW1DpextvDfTJDWVjAqMhF6tcFX1AFq8ornwB",
  "key7": "2vycZwRcVZ7cMwyBp2rpM5W3Sf8yn78M3uwMuKuZbfzoMG5zVFvUYF9597XXTy8E7bRKvXnKqZ3ejf5eus3F69WA",
  "key8": "eYsbdkWppVu6gdyBeBoo8Wz4mJbdm43JRHbTc7Ud3nDxBawBTYhYVNgG2Yukp6e9rW69r8JQLiHtNJ81ja8wUr6",
  "key9": "3XU7DAVPy17XKKNeEwdoJCfaW4fL8LcrCMxP52ovERMmWquiSCtYg7npGFaJ6aQxXj9NAsnh5DdvTC1RQG9A7YwT",
  "key10": "2f4n6tysxY3kbaJK7pFXMFdrRa2yv25yEoSisEuLuA52mLiMnLRUtA5tTe3T1HnvrLrkpNrgKgnHZnbykTkZ4WCZ",
  "key11": "63iWXJ7Z9CXrMK7VFbfEmqA8bY5bNwm1w3MPFoJquASGKpcsUc2aGgNVwRMrRXNa85vhkqHjd8jFnsABZJNVoaJM",
  "key12": "4CpjyK25kmtfTeuqA1xbw8SoZUBQbYPJYdCAQ9nNtq7cMHzCuvdYmd4soR917wLhu2xEzEQLqeUdthsFyhmptHJa",
  "key13": "57idWLFMQvMV2DvXRyX7Xphp431yKYuLMDgDqhfhmezFbv3Acnmah4mDHXhBy7JofmGsUWU83tyXJ1iVu2QhUwBh",
  "key14": "2UhmftASn7dVi79ZNFA1NEsKKF2p2PNkJ3JBrvhKP5J3Fd2SbAbKHaCck7gcjE9gtCBjHZc81g5vkSnWGuvmXHgr",
  "key15": "EdfzXg6szx5FX4CpB5CpopFssEQz1jDJ9iGGhS2d1mdD2Si2DQJNc2oZd4shUwkeHUjpgXuwU8tFnxFDn1ChGfG",
  "key16": "67anx7Mpp7oyAWpvqdeARdSrvaSBLtbxdSVrA919edRfFhYBg9vgRv5BzfFhAbnUXNEefy8cncDsSdUh9iFa3hEm",
  "key17": "44BVw9bjnRsFKfkA5Gc4YuPvE6dsdoGQShXasQFF1h8j7HE9xcvXczcnBrRoWxLibV1g1SCFtuFE57LoeAzVJbDQ",
  "key18": "3vWVea6u3Lu75xydMYpqZu7h2LBdDcvsjYWHUMKFGD1a6ejpUUC4L2efb5CgkMpdnLmYu6n4GGgWmP9WghZpF6Dx",
  "key19": "uY4jSrQmw9BnjPB4WATcUW92hG1k7BfReq5GopTKGmSBEVoVnBFFQeyTpt4Aijzp9nHQgenHuDupN4j2VSDvHUZ",
  "key20": "SFwHh8HbVvha81D1E7JNX3WzkaR8gmPwws83YomumSdViRw4eKqoRjPxV4x28hkcafwFe2VwTp8TzSkGanV4rW7",
  "key21": "3vP6bzKFhWXJKqEePrhb6Xy5sq881GBPXvHfv9ntmvFrG8Pw64D4pyKExEUyz5iAo27PAJqFS5Hme2ZgkgYzzJ9V",
  "key22": "4LQgbF8AdmJhJavUuSsRSZSb6hFgBfNDv8ChtM4G4G5TK7YBfUMXB2f2eH7NTbV2xSRiogf4webyTNYiYUYFsqQE",
  "key23": "K4hF5W4qazdmu6P5qjDUUycQFwF8P23HJ1GqzsPahpYxHvp7W1CEabMVFsRs9kS5ZpM63aNaH9DcUf4ZFhN5rUm",
  "key24": "seKmbK7GZmoz65yfYai8GhsQwJFwD7kUHzj5aFhwgsmyHvxTXjiA3Yxa9sSyndesZUh4jLFZGdVmtvwR8CjA99E",
  "key25": "5kf7oFuJwdkepApL8NShw9Qs1Ajsng1X5iJbULXpDWZXr4z6n4TbQta26NZ8axkMB8SxViUcBK3ha2S4h7f19iUw",
  "key26": "2ZQPgzLkWY6oov6NYU154vYvq49aSFjSrHVLJMsLfi86nLSwUmUL2yJHk4AHCCU59JQKnrhnyTt8HnBZZt4RMKYu",
  "key27": "2QVM7h4KGv7vRNpm7GY3v3KmYrnhYeAbzR57DjB83EcARqM2HWjLpQ9yWg6jZU8ZViBh3LYTcza7bTFxyCYsq1i",
  "key28": "2AAA65yQ7rujc4UaxRE8D4rcDTmkQ15QdZN6ErMFEsnqT8WLUQ7YSdrA5Y9fHSiYk2jMfGzJeZtpag4Z2HKKJcHm",
  "key29": "EZUmY7Hydj4iiYYsYriCApeYbBvHcQmvH9DJr1rFDrHMX3z5wDqmsASA6d7zmcB6bdn4vY3ca4eY3rbfiTDGxH1",
  "key30": "mhEQfCqcEw8TMGsjDNSMiVLTK9XripUgWXxSzHz1Z2HhnwvHPUdBLM5h9QhsHkMLLqrP6a9k4W6Qe5aTjCLGse2",
  "key31": "3LKu4ub5XMv36EzftDJVj59t9XR766Yorqf3vT19zi6goKEXcxzSSZe8PgzqEY2Ws4ecGsBXxafyAkFnCAiTz5nJ",
  "key32": "3cd2wi9pnK82c7HGQjiubkDHnRvEeAJm3TbZKMm6zJxjGQeBtNrLHruhihuXwZYq1tnYACs7FBwShPFGDsRgDHpq",
  "key33": "28Vdbrh8rt9itjjEMiUG1aL3TUZNvFUjL5H6upUaZAY1oMjB2JgdPJbuhW77DsVwPo1RjY3cjR2MUQiYvJwd3bQ3",
  "key34": "4kJB5jYErsabG39KQ11aFYqv45AMDCfveU14y7vRcvnkoma6vq7bWbEgsanR2Nu9uex69ynbGqox5rwuEJuorkXS",
  "key35": "4p9qhLsferHrKdFVFcTmNXKqwpFkiUNvR6RmufKL3jdvV9FfHwTPdHuzwjHtEnksPD3EnMN7D25n2yfuby4h7PZv",
  "key36": "L39DRyGZHLvkCAtY2T9QdakiPS9AZsANNZ3TBModjpeHh8eUVSmZwn7G4wC2eHaZQbcf1KCLP2gsZX2MB6ZbUqx",
  "key37": "5NgbCbHHSRhZMGC9eTWf3roF8mV8BVFLVffvEF1tKcthBw6qmr3Aq1eLJkWZs9teoB7WoHrYvuFRC5wVtSvSpDuS",
  "key38": "25sJeSRf23QfW2bhzW6PfbhMTZjYD3BPPKW1MVppxCu3hxGmkKHvgBekhUH7BjYWYHAG8uPMq93MYkDCnJEVm1Te"
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
