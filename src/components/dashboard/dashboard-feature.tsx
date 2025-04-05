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
    "59T94fyNnkfozyXNgxyGjy5GSdmjygkq1uNnC3UNhEhC2McuC2Anq6YoURC69cvhxTt1v1BdUme2YR8QhhbGFfw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kkKr1oFEof4AmmqMJqawn1rGvoZ9AtDVY7vY13JCxHfKj1QqRnxggg6HdAWRejPSWM5Na3pwidsFnZCghAZESgj",
  "key1": "4e5GhimHCVd7BU5CgK84Em7cxpEmbpptikAwfhqykaJh2idaGbTeBWoBMMkgCf6fahGBdJYPP4D29x32r1RiAFKT",
  "key2": "3Jx8CjqzHZ2hGyNkqVcGA4tzw2n14kJwyXfMQ1nghKAk1XmBhVq2wtUj8dFjCM3MXeW4gpnamh9BJXjNQARCLpgC",
  "key3": "327E4AYpMthWqZBH5Ya5pzpgqRWTNMCCgv5miZ7ZK2rSawP4HNcuYEAf8kbrSSUmdi91c4Uk9GqbWgZortrFso8t",
  "key4": "2FDj9UdCgEgDoLXUG68PmHTyyuixtkUQ9B94Qu8i2xL2P6JK6SdRHSwq3nRj8CANMEhJc6GU8B93AQApM1Y1VMNv",
  "key5": "4DBez9srke7aKNVUMjcZd17bkpscvT8KPcPpqK95t1nAsz75H5iW67PrBn16BNnQDvhefdemomJtnpTw6sHvTy7F",
  "key6": "2VfEGvZ6d4ocWAYVQaeYXyrCyaa8jS5CfFZ9bWp47m73Mmu9w8WtUcteKrZZedNh4o73RfNLULyw3tsvssPU3uap",
  "key7": "3s8u4pzx8sKsHFaqn32xYKAJgnLqqwuu88A47CfGBu54yDUwZsqW8LVezvKgysN8eQJAWSuJc12DfvWjENUETGsT",
  "key8": "5zbj2Da3oT2UkarzwAuUB82qhH34cWwVDr1fUCVyePTfVBrjj2A1dDerjhuWybxbjvBkRBeDvcQtuLWYRfBUx6mT",
  "key9": "23279EkYYNwEF2Yvu2hZrn7SBpHRxcCU8DfCuXXNaQJ6yv3r8PeAv2FoQrmizcGW6Xx44GhT6scC2cN2Nnc2V9rw",
  "key10": "yPmHyNaqjGqmjgBpKLMpyW7SKtJ8bx4DL6Yt3tHo7HCUkZanc5tEeSA6YrPmCNfjWJNQU8mQDCwoUFyzKSBp8kM",
  "key11": "2gtHw5NAF8NGQxkdErphp5mjW5VcSQjEGyQV1uKoHkxRQK7MoEpBhsE4iYgt6cvoTwowHLjg1T6cs6SLnCyhVp6z",
  "key12": "5kXsweNXuQDM8hkcWndk1hKKjd23qHPqikaFBXSTLbRJRYzScfVAgDNc4mDZQq9D8RyzkUpUXFLAGKjZjhDh5QhQ",
  "key13": "3BbKyUBn12CBgSqa3X3Bnj3TB9KAC43nS8wSxhSCfipMYXyXdepPbpwKgffeUp7eU5qu5Dif2TPh36ij4AFrBRbG",
  "key14": "tmKm7Qfx46gy4GmqN1z7wUqZDUtHwopsD8a31gGY5eEeEF38Vx3TgdgZafzjmk3PX3hP2T5fq3yYR6T4QxG3gzR",
  "key15": "5VHTG9m4d2RuZoPiPsY86X5HBcz7TittGzVwyjAm3Qhu1pGie3TN1rPQ9bkBAzApMSFG2rHxfx2cjRU3BcH2uqZD",
  "key16": "4GJ9CdRB7SB8VgPGgA2LuHwzFoBbCWCUQcJdommdagA23YjDK4ChzRVjjm2x7x59DX4rNBDdqRPs2kgrV2BqhmRq",
  "key17": "2p2kRRPfYgXRyaLqyKkPxBKLdapaK7y2Nc3JXoHiQe4RQ1M8XSHmfQhg3f4jNWfwoqnC4ZAAJ1s3cpDBgGPmQ6PZ",
  "key18": "3eFUaoumDfoTZCTCu5DJALjMntPGQXaMQFRay6fvzY5kW5g6gswedUoDNbcJwjHHeL5DhAqjunSGMCz8mXEkpHtW",
  "key19": "2UPetvKuRrMEXDcWKGwkyBERNKFk1j69c9a7CQbowqeMLMuAWXysSBUtkzCv4eR5Xe9ZKHRzt6QYgeH34JZphf6h",
  "key20": "3tnJCGiZb52ddd6fLVhzYdHPaiWzZHFUnSBtaZkbqvNFB6SARYshnvMkuqvRbutVSnzLbVcdMKskZiczMshAfwNF",
  "key21": "PyKgWFvbYkbdu567QeDgWciSbuRnbeB8b5QPiUMRf6D9ZQn3vq4n3Hu8Pb8SJQbFjxwKiYdq2v5MvTrvqsyQHuE",
  "key22": "4f4iXEi2npcf9wP8R2RqFxHrgcJ6YvEMvCa8azeJuuzGhJsi8BrDLDhepXR56hc2xfPR4nuHpYqGtt1tr8GfyHrH",
  "key23": "5eWTB7TR6EGTJitopDso4ay3R5uLfm5bkxHLiCsaHMK2zVF852iktJoQTopLZGjuW7MmeuzLBZdwzRbteejwkVk6",
  "key24": "4q9kzbp8m3dU1nE6USomaVM7Hg6vrGxgcvH9t1wg38Gb3aLMV22c8jfkfeu7FBu6a5AcrBqC2ZDnqTGbXD79CHUR",
  "key25": "2wjMjFanAqZJoJJhiVDJTEnpaAtqCV4fE5sR4EG95G1nVfUie5GYKxeNn8woenwBuro45EiqosjrhfAKao3xzxGV"
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
