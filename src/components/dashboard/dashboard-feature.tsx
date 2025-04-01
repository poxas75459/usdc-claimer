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
    "2A1KM4vuXurDnu2JLZemoYTTB4bY3xPWtWy6AoZPzE2ZAzPBbGJxhJc3NFeyNHej5Rbv9sUhe8m87Qdmtz54kgjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Af7skZk7RuMwEwzjLKn3uJwtnP9jE9WhKJwPjLSiBhrCEbwJQKdRoERatGrhzkwY53SZcbmPboeKkeZQT28eMb",
  "key1": "2wCJg6xiReoHhticsgc6qevUQ3eiQBHX1pL81yDJzNtD8LWiuZWPqYhmiibF6kQHAmA6SFtK1tYMgEi3cJnkg6Cq",
  "key2": "2isei75BPGSZ8K4VDPBsqHLAkoLUenB7wJvtuMjN7AzupZdLmpTN3vVf9he9eNoUbfCdVzXG3yRL6fnW8SdN2xUZ",
  "key3": "2dS8Cw3VCopxfQsTwTREFr4FFoFzfW6iEqJpZA8KvNX2Nm7ihsCX4WAJS2QTCGDPeEqkqUuBNz99FsSoXF531ZBv",
  "key4": "3WVsXCfmbHbz36htJ8T9ZoGVdj3ZECYftMT3YAbAC6ywbaUmHMD7MXnhogH25qAoi1zvC4DnkZTCPKWJa6ZmU8PD",
  "key5": "sJfYK1rqAqdRh6TwDfxBqErSULHN8wXLwANGvjZiGnpANHtNP1HEpw1WPMQGtDA91EdjByMns3AG8MwajKH5pZ1",
  "key6": "3bvUmPe9bsRUxpWaTG3j3EGLWsMLbZ24CkCsa6A8XcwYaFhF9M3uYqXshiQ12Bv6iRnqToU2Yta5XEmug2nugkVL",
  "key7": "3RFE1cVgP9sPP31X3ScZfBruU5nep7CS9b3bGt4rS4aNC9QPLsfysTWrY22vCV8WxCTAY3dqmyf5NyNtku1hAgY5",
  "key8": "4nMptV2gtWid6rBB4dsBWtvLL8sU5an4ADR3f2Z2hJuBwgyhJW6GnPTi4V6RSvPmGVscBhiJf3qEP99Y3cCLbmdn",
  "key9": "353gDL3A5rysWGxL6nAs6NQoC7wxNm59hPiNcNvTkiZKBoJuDw8ARkwE3Gf582yziQaPvfwNVW7n4CPWRaqw4LnQ",
  "key10": "4kyiJkQDLngs7Xdbz4DqY7ohVGwsp5XSJCWvXu8RPzWktDzk12bvgVNghhYyEVuWdHNC2xmLYFRNzuxyNNNBpe5U",
  "key11": "5syMrY3PEtg4ubVrNfVJLhdxDW8u14SbGp2VUTbevaHYmqHy6ToeG7tgYxbHfetWKNkmx4HVyU2Thqq184FPLeC6",
  "key12": "3ffJUYG3r2Ka5ErXJDZcF3zEAQxh5WWhQGpyDsUXgpgGy22bbWtsHUGV38Ga5KpuRPVmNMeKJiLeVW4RKEXJmXWY",
  "key13": "4RXzsu2x1VUeQY7gSmRJYLjGTUHkN9nKqG646j9BmXeEUjQYqGWs4CYspg5v1jqqvGtCG6Xw5FXhAduhbHAPVujD",
  "key14": "3k6ivvky2FNPQP4UgteNZdo3gZ6juVASavBJ9RCnZUq41tg2FUWsV5FuGgCa8CiTgjJLfEoobnXgKarJjZxENQwB",
  "key15": "2zTzRbYBRJs4w6LeMNTvbsEY7GonteWTPyTE6dTncz4dG87EDoN1aeWoKMi5TPRMszpUUL8zCf4SeA6nFV28uh7S",
  "key16": "3AzbbRyBVFNXmYq1ECsthRXWmaH6pBDKhhnsjPV6KHN4hCSGm5Sxy9KYBvi1PXG3iT4mVdhxk9zaDvE23nvZfPaV",
  "key17": "5hmGDwoHZekPZ6giyapoA2zyXjPQ15TjvtzadhSXNmKQJ9qA5u9ZcNV9gtqvshyDzjnb2EBeMRtqA1wxEqpKxtN7",
  "key18": "VjB1D4dBedj1b8R1RHMP1iS8Uh9jWEpmz9mQAiEK3FJCCWqGw3mKUVgzvTQksoy3snGuhwoVExsRKbgZd2fMTYC",
  "key19": "TQvmk7PWLyGUGpakUJ4rcoPg1ZtgW4GgCWDSa9EV3EMWJW7LH3M2UqXXeGKgD8h7yqNZKQVLRv6aXkHuERFXUr3",
  "key20": "2KH8n737vzmKC6XicNGs2AzjWA3FnCX6XBeauQ5FjMSEFLdHpryMwNuaiuYvT3YBPoAKtwmzGqxKhFAywmPjobJk",
  "key21": "2Dtr5FpxWJNLT9qsQmoSXL2H7ywxgvoJE98bS5i7N7gm77poB2q9M2JbnJsWCtS5SJfNJkNeVAsD9YFH4TjpyfD5",
  "key22": "2zHWEbu7PH4t4wGWawXAagkvAbREjvAJF67GmXXdqHSPQBsCw9zx1zSmTFXtDio1nZU9xawn6PGeeqfMf6Kfcpra",
  "key23": "5unmmTqvuTzLg7nxcvJi4B75JLFqgCdnjiV1WEeJ5Hf9c9mTUJiCwRg5W3HwDNYE8GMzNUjKBCNqE4JDk56sBTLx",
  "key24": "5mAhSEuFrZdgENQRWEbZQ2mr5xq3CZkst1uCSYstoqR9WT3PpQGRWMDTyGwmFeVNE8FXt67WLM2McAhiwsjwJZT2"
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
