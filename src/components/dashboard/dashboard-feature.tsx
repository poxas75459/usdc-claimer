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
    "23Kthqm2EpvtZu9hXg2GuMRbpVh7RFLYfWGnt2R6rLkjJfx8iuRypjRfkwVZnnhfMZhQqxi3CFLywoRCrMBzECEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ZkuL97JraeGAUrfWuccypy7DRohzYGJNY87yGnUsxwqgY5GemvxfXxwSMNJK81ejBVPZj9vu8Jy7LQxKj5AeGQ",
  "key1": "3sEfvxa3T4ov2yTm4MEi7LL1g6find7feFwsGvFmbcaMMxxtGrTJvJcNo1wM8D6YsRTEbR9q3i2pyX1Ku2peMuLE",
  "key2": "2t7ZkxCR2fG15HTio3bqiQim8WqsxvwbGPDfHANFoqL8BfubYAHZaezryDCixcGtbQ1w16frQ3SQ4YFU4F9KFyvN",
  "key3": "4moJ5pLovEczmnnZ5xNEn5eLYBv6HZJnZZJp7SkuDTxFwhUQwXZiNCwtpiDQGQQzNFaADHTX4qPd4mdQSj4P2q2d",
  "key4": "733wegTz3d2efXuoiyRRtXuPZ8QJVP7owXzN4Xd1kcDaydLH6QjmKKKZ1yAwCJrfLczJU2hyM7jvDc7kqn1kmGE",
  "key5": "3phGeSvFUEe2RmH9qEHhjiA44w2Y7mC1qB4avsGTkobc3iwik5YrtDg3cjWj3PhTyXuEwNNVzKqVo1sGPfmoJKmL",
  "key6": "3KBuEx6uAffTd44Lm12PiWCaUMSc8hbQKhv14jfP2dCPBkdnd6Xi1AhXg82xDULHzTvgK432ygCzoMy1SRKCrkKx",
  "key7": "5qFepzVGi2QnJBYS6QvXcpk3wkEYxWfkqaVB4xfw4TvzdMdjpizx6qNxh9dRWBygfxBqMcpPA3BtXT7W8FDrcLnx",
  "key8": "5GqVv6QKbWBRws6kFi6osmuMg4jVbrDcTy6xCNaSb326iZFkykbf4iZEXJsFZtqKDBavBvmp1Kf6k8M7m6N2X5TG",
  "key9": "gkQWF7yz7AYiS5pkt3t8ri5yHVdkKbCLqAqMCWpMuwuwSBSJySkHvFJCopzU9eefcyx4XZpjJvT7sovm8PLNQwN",
  "key10": "33TKxG1TZRTJcndvrwzCWXpYQhSDZ5DzvHp2Y7gdE5Pi3UMFXYuZiNFnnWVtGLMpMKYSMxBsv1pXEnzN8BnrTB9a",
  "key11": "4rNpRdD99mrde9CygEVR5jPdxpJU7RPQhTzMer4StnbGSmFaHXap3ixKeG5XyKYHEZc4buywX82FNoRTCxwizzQf",
  "key12": "4sgZi6sfu4pw4Sm2w54CTAqQpk1NVhn6LxM8f3v3rGTWspeT4xrWxiJQQx4Td55kXjgWFbw2bS7QWuMiPC5Qu3j6",
  "key13": "5hkPFV1q3mNdkbpF65vJ7LnLz4NCz5aeXnmipP4pV2Qc6XE2DHF625gymPHYU28Ak3PZqgDBTYi8bRkxuPmKa9GE",
  "key14": "qYv47R9KrVrdgb54D1HURcxoHJgnrKsvEeVbA6am2x1xxsNJEKv7v84vmDe7AqkBq6RHaL45joQYBSRZ7k1FkK3",
  "key15": "4YF5vwZJ3EiiAE1JLESEeG89AMRqWhBPdtvJd7c1cdjMGKjvgSnvQnC1C1oPiFUNDEhogsi7NSJ4hWBynkD8vzcD",
  "key16": "4nwsVvGd7kKQeLWtjzrvLXxXdcN4S9UFcQ48VAHxJxLgSBgqvqaWJuJKztpgAuAsRHNGayxH6Bn17oEmXnfdgU5J",
  "key17": "531g8tbJ9hmbcsKxVYJNdEeVmw7uQ3Xsf1jQgKhGXmaEbZpWxB9Ufw1kfzCqbSqK9mV4FitovVLFNGZbYJcGBut4",
  "key18": "5K5xe9F9n21JHhqUzG8itvwiwntbaNTxQPwGHZwNvstwJUKDpkp73JGRvGP6rRXzTeKe9sTA7uNdw5raW5tHvbwx",
  "key19": "4TxXypFAAtomdi5Bqcf5qUnpFYyF1nVLLDNutgJmEc8vCLgS9SRst3qXPfMo1B2EuXfmBU6vUzcsZ6khxpMZARKv",
  "key20": "3XLpMgxkmnDCuPirbg2tRDRvcuYWvfWXCtcMtUeEMPAeDJ7szmZamsDpvidW5NJbF8nKfwMZGZCnJpUwQdRDgWFA",
  "key21": "N5nuVHFLjgaiqpe9MSK9whmoCf3wq9q7Bv7vBLmAdVvuHSMp97NXnkkrH6DbkqQDrnGMs94kFm6jtxAr42qZyAW",
  "key22": "3y4z8Gq8P36CzyBDdGu7CpoR9ZZDbSAy5Tz8CRS7Bge3XqfFzDb1R4vHcgx2FLxoybPmdt8qh8xhGu6G78PtmxTd",
  "key23": "3c4gR4v24cTFFHFHSbEcnmYC3LCTzRtCaTUiq2zCBvFQ5Vc7saFdP8gXKkh26YzJHGQ4VA2TQcgq4sacJposkgJ7",
  "key24": "7ajBy54sBNMCWcmLQuQBupVfYyg91p1ZJJSSsMjwC4w1Rb1gw2deP66RmrpppxsfRkSEnZzYgf2ah1mBAaH2e8y",
  "key25": "5hXCMToHQoZ2u5gJGKdE6Wm26B9kHQBShcgq6k4ZoDmT3zUmiG9bCyeLiM2znH9nkRFD1HH9qA4rqjZTzixPmQvV",
  "key26": "5fUFgAeFq8WfvzKszU6uNerVrP9ooCFmUq54L1vttBJLdPEjEuuUiNfCikpqAwFD3gjwRuNSTrZR6K8YxZAL4VHj",
  "key27": "2bYfMGTmeRPc7DH1VrTXCz2PTHCDWSiu4U5goAwDNr9CtLgQS2WbWCj65da5bc3j8VGxgegFJMcZYYRTxZTVVpkm",
  "key28": "3AjN3qrJ2FxsJA2z5VZSFm2NxbiiyBJ5i9oF9w6cb4Pas9bLH9fdUcqLTmEH6DcMQCxqjXEqRySfqWkHd6FjuGp3",
  "key29": "4W3K6s5h8Lotu1bK3BpAMTJ3UpFZEWadmDeTjqQuZVYbvjuZ2ddjLM74LooDvDBT4MDzLUA1oXZiwv5VB49gGwQE",
  "key30": "3HDwM5bKzQiaxbV9M4EruW93HzzGtcXZFhgK4Gbwnd4BcCqd1jxYvunSQY82GFmBKKcg3TZ9NQss3dfxnoKDoumz",
  "key31": "wHHuxJA7oByKvi6UkH7pyXGssF9pEWisPyqqhQzUDVPq1Lh31ChnGgrgFWFWiq5mBnBTDWyy8jtfmW4sA9vaAu1"
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
