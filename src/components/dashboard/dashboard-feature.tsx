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
    "5JEguTFeUuWg8w92rL5DHZ8U25gmdVC1B8YA96LQHevpmb1YjcxduCG5FYUi3VoNP11PX9ViYThNMnahHoeXhKjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cAoHjXqfFS1N1tawsL23YT1hUTF1QXjCsWyX5ZawqTmLJG5U2ChQKk8v3otFYuKMNbfqsnoQA9rYixNAUrrbrSw",
  "key1": "3Xw83h8v89Gme86aANUMcz1TmjcwQvXFgjDhDx445MioNbYgEWuYKxYckaaHGrHks6Gid5JCRYLFk8e4jkTrvmPe",
  "key2": "5Y9VDPpqjqaBMeyrYY8L4axZvQ9jisfoWv5PjxMEeWEa9Rsh1aqoJxF9q49mJdc1TBsmJV4d4H4H19PKzp5ZPw3z",
  "key3": "3teg27dZyneK6L8vT3mXRi2vJWusfn8pfWkgXZPR5zJyqV42PsmDQYgAyhtC9HMQiRPRoUioGMpUaGKzeq4wmrB4",
  "key4": "3e8aDi2CwQiGMcjdwy8vGuR1UscmvbFkPJRMMNYnwoYR3XvR5CNN2HBwpRGTfCGHuXACLCs7nNGDSj2YCWwzrpmi",
  "key5": "2qy4dYiUMvaeStGxbRkMRCyxnexxU2hu1opcQUkZscT5tjJRyaZh1NuahewQhfrCUSKNH4CUvTu5Z83vY5ADZdbz",
  "key6": "HCgUktmfEx56VWgHRHSCnznMAJGL17kAhNEC1mxN7zE6QFVApfYAWVS8z8y1mQMK719vqVefrzPKYk6pZUcqQa4",
  "key7": "2zSkXxgwsE2QYXPPNi2SyPyrUE1NQwd2CEt8cgV9dxLk6jCjdKpuvgxXZkZpxqzH8rmjuco4KnHvown5VywJxp99",
  "key8": "RSXu2P1grp3kbDABi2aqSfhQpex35KSg5YFJLb2FAcwvCiHzhoXFMV2PTqoTihDrmdMVjY2bZ9qALc6JYSvG1J1",
  "key9": "zMiDjBgZWt5kpWiXgAJKV2ExbLY2GMEayiUhhFqtStSkEeE5T1Zmbmnbya3iUrNG4zm163mDW82rQSKtrq5zWZY",
  "key10": "3k8Lhp62DSqQqpVn7JzWhm3aQTNNzq9Es7QLrJ8AtaaseEGHUYr1bTvxfDEXeWbN3bYW2UMN4f4mXMns11EHUABS",
  "key11": "bsPo2RgZrEBeK9qBCcNNCHPGgvH6hVYjf1g8JdicSskMcirHMrAiX9dMSWNjbthtZYDg7CfqUwh6cmDJNRvTQWp",
  "key12": "43hRkzZjbK75nFXPTbU94cDB9X1c7Y8pcYphEAWDM58MNUe1wrh9kZ34Wr2puHDT2JvUKMq9SN4KxAYAt8sB5Qx7",
  "key13": "YvewgvkyhBFjVtueoqRzUhZvDeM4Y7mEvNwGW9rHkzh5rvt95PLZWPDn92xc3gYcWhD2TDi2hbWtgPp85WED7oD",
  "key14": "58ikyTpvNCk9LzCj8jTQUWf8Cdkq387wF9wDtn9nVP4677GKRCYhcHNMQtuSqfNZAfqrMDYKxvGYnHpdPkSAypQR",
  "key15": "yCiXk5LDYJEHT4Gf6YtCYKVvvp27cHHjtWrQoeippwDp7CaAnRuxYpn3ZMQChW9VGrYWcgAYQSLKoPN5zXPFPQN",
  "key16": "2BHQaRhyABDbYzqpT3FbFLMYxe6NKYmCx8gBVESKitaVSUCjKn56BQDfj8vFUVUgu66BqbAb5RoMtyKVL6ACibfs",
  "key17": "3LEz8H9xQPp2FYJeWk82wSeg5LcK8RUkgugWyr2JzbGwamT9Sfsg1pEVJpudy68XrH5RWTVT79DXK1RushL1jLLC",
  "key18": "LGskNnufKdyANhUV3Gig7kKq1NxnPDcswYaSJm1jiBtcq8VMR6VW5J3NkVG5KSU1QE6rVexTCG4pCGeoBs8rXkR",
  "key19": "4M21NM1rzk2miEFdS9K9znKpTH2yfcDryGnXdLk7s8AV1L56HGvXf9jngrwcw9AzfjSueNvfyqi71tNRPF8sToZP",
  "key20": "2Z4U947hYJNF94TB1ZS7QBz6fR35ghpUGayuexgdMntv6wymeqgQ8qUBeKEWWbJxhmPYqujMKvZu5voL8LfZmhGA",
  "key21": "53hpGB4EFwPpg8R8y9CMJN376mBesyqWQE2vAxBDy45Spg8iuB8hiXxxvVXCmRjqJaVs2Gjq8kjUVk95kANC2SJS",
  "key22": "4YyEGwwpvZ6MYdfo4q9ZSiFxLXzoe1C8XoBFufoFp3PzQM1i9YQxodWfmDVDJNtwpgZZTSGb65dfCCJ7a6UWmVrG",
  "key23": "fSqgSeojDxzyQGY9RmW52ZEhczDdgk6LZmAe9oqpEKEGAoswmBJDD86zMHCmjcNBKFp8AYZ12hSvBSr5RUjQp8h",
  "key24": "66Hv3iJ2j6Cau8QRVokLkKNK5zjR1NksxDoUMpUAmUrCzJ1NQPkEcdyhPeb8t5XRFTLcjphtUSkwE5B6F3GqWjKf",
  "key25": "26avXNXBNt9eivNc7RZBaSAHvxcnbtRvqrwayRW7secXs8KFW3TpV4Qhpjc7xwCcrJYqJE5Lr9Mq4i6oktpARXM3",
  "key26": "SPPgF3pP5Yan9kaTHJDfJXXuWYKzLBJSXYeibxsYthyJpjsn7XgZYyoWuadpCvPUvM3GtVfPxGFGB4WvFY6dVuk",
  "key27": "2FvmwHkk9SgohrGBtNnGfBcrDb92MMa8jFMyWAb4XYJSGkat4h5cn4fV5o9PzAynYopJMM6LSGC8Y1U6LKoLf3S8",
  "key28": "5VCkyjEeyF3sHEd2W1u3RKwWdsg9vHvJxQppY6CSAhvzLqDUkLLNbDDghp7Priag6Wy9UbabDhCDbvtrNsEBQ2Wu",
  "key29": "2kFH1vAT5GMFokVjcYEW6Xorcq16Tvt1XL4Y5RHXrnQGu4FdoZmVNDbfv9DFJZAh743y2EhQfvrRK8jyucNdMkdQ",
  "key30": "3UcL17GsP18sGfRHkWzVUBosNBrqRogZ55x5DgGm1z9wKsH6D2NxAra8cNgRN7vF1zRhMhhGFkjEHWP7oAac1wqs",
  "key31": "owXg9vg9SCjD4Zi2xJVCR2PNJipDAXc1LnL7QpNTNNzq4KJPttNtvVrCAU7EG1HVqtxBCcDYbtk3FLUK1KYTkAx"
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
