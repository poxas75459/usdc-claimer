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
    "5Mof5wX7rUoKAh3gYuTXTFrSQ2n4YdRCK8uFSXvu8Wwbr5Gt6CHNdLZQd6gu9dPN4JLQtsQMBdapQ4tHvm8cBZ42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23xZGqg7jdnn26Eizs7thkvSNmkVVBbnbxubbpjM6iEXTRkh2yYxvy2nHXFin65AEBFm25WHiZ4edcrFhQqRTbPC",
  "key1": "4BCyfuFdnNhrhtVYeRByhQhdrFijedE9irFrKPo58eM6XGaQvi3tMBH7pH1YBVtSduWooEF4LTchGiVipJJPN9pw",
  "key2": "5xkmWfa1f6DnU429uwvbbGgHS6E8kLSswsZLV1kDk8LyLFJquSdEQ2hzJ7qK1S8rbHZUbWNZ4uE6CUKAopKnmC3u",
  "key3": "5P3qLANRzDCvB13muCtHrsqzg1h68HS9BXsvV2UWSmbEju5knE1bmM763nYymwsqgLSnkdYuPgWt3L8mB6VgZJxT",
  "key4": "pb39JHc8Bhmg23vB3y65i7TpK6Up4gH8XLBSsv4G39k8u7UWYPSZLPGRTZif2EL2SyLhZ9yuqrUcGu8eUsVLxsN",
  "key5": "5DcLCZtuWnhhi7dgWQSvF5urAYgdo3HtcvghGhG4SQJN3M14zYUvb1SLAH7oEwvT9f9mB6ttCyHaJG1crFKVPAZe",
  "key6": "5A3KtbHo1NqG5FMHuRYxnupB91RRXmZ44MmH9akp7bC9vodRtg279rNWyyGMN4rVhMQQ464qqfobkACREyM3Az4N",
  "key7": "3vNYCYPvSMDDV5Ki2wsJV921afG6kaZ3h4oLv481bmMykkyhTqFoh97Zaec3aZjYho3WqhVyz27QpCzVwKYQfqpM",
  "key8": "3p2ytMhEp3rsL7egmDe99ZV2rctLb9aDZAfmqaEejzbGtYrgrcuwQ5F4Qqi6DdbSHaR3jpQNGagxuh4eDZq6Ka1b",
  "key9": "2aeNQrSFVPtA9rPGSvKpi9Wj1dDSwhV9gLLYeNafdbejLsHRnwoZaFWQ6cXrmGMe6DxV4rjwDJWkigN7X7HMYZxv",
  "key10": "4TJKuJcW85g5JHvbdZTNvKM1JsPAY96FnxHdvAG5Q3hBtFyK6DpMZWu1GNAXHt1SFH9Mp1igW2Xa5bcNGiMYe6en",
  "key11": "52ankjYue97XVziaQGMFFPmd4xcyHrJUpPQDXkR3BsihpZBbaM5bKvudx7oXhoQxHXPAWj4uBEom976innP65J1k",
  "key12": "3khdfR3SPqLmqisuTiF3Pc22AMZqJdh2vAH5UC6XzEUGborECUWSpcvBSWUtrx8jPoAiwhGKRoDM3NhyqLHspzF7",
  "key13": "3NRrpEJLjFaDEk9BR25BYYgWZ3tvQ2tdUnP3NF44FPQr7GopYcv3mQWxtFvjykx4AQbXMMMQJpz4PTrJw7ou3jL9",
  "key14": "5dPJK838RuUcNR6QJiqzWGdKfPFFX5BxbvVQt5pJEZLs7mrYPZikxdBeHGg6LGz1UtLuw1oNt5AQ2wQ3FmmRWowR",
  "key15": "2EW2QPUZ9NGQTXXodB258BjrazesZVe94vrq71ctADU7tKMKsd5xBLgnvQvJBiUvExQQQP6GvWmueW5CAPQuJaBZ",
  "key16": "2BZ7bB6ECGJWnBS3KVJEFUWhC6xw4FrYruoewnbEkNDdfHJ2ujzdCtmp5Pf5LZVsncUq99tNZe7kSdQeXpahwoqn",
  "key17": "51bA1Dge7bjw6ofhHpQQzf5o2rwXa79quhPa6DM8MSZELjasKihthMEpdzzpQVKj8XjnRu8YbtqTT4aYrE1aLCeT",
  "key18": "3whs4vFuoFVAJoY8mNpHe4Q8ENTD6fvFQq3JLwfQ85dSgEDBBqGESuHBNNdb8qQwwP87JzYwSMSu5T499kJxnC5K",
  "key19": "4XAsVR8V5qmU9BgBdYVcnYxS7NosE6uL4moqEjEKwdeYYLXp9Pm57gYwfPpyWGKQ69UDENKgM1N6orzSN3rafv6s",
  "key20": "4XJ13oF1V88KEmRtqjynxsfNYNVfXtZg5TFpUnXLcetP4rV3xTQAemLSEZZ1nRjXQS5LaEsRDKzW9ojqaSwxcJVN",
  "key21": "4F5xJ2M2BAqMvnTfpb3hGxcPnqQ9iyxbNtQ4BVfJBeVArjGjhP2purA1nRAaqmBqidY1ND8SYHMMWBWAx4dS9RvY",
  "key22": "4cSDoMYLG77RW5Q5u6cRPiT6rnBxk9J3rmbH5NezQshKBBhFt9PDRqrRtCemLKgzRSm7y5GvrCjiagnNDddvWNyh",
  "key23": "9YmgXQMuQ4UDSvqvFFFDW5A7u2qFRLGso8RPLZPXZH47nUzdf58jbz1JD3k9yAVedppn8kjtTWyxBN8v7LpdE2P",
  "key24": "2LJMWXZRTMWQLniWTRPx9Rnx2rLa2EshG4fTG4ybNNoZNX13fV7Pc8cEzfWBKcSZ6bU4JYpA9iKzzCgiXMRhFcT9",
  "key25": "93ucT6E8omZzPifepMM6Gz9gvkWoj1Dfwhv1ybKSX8rYkEMQ8PKKSFFa7HhdhhXq3fRC9WwcpdKrn217Godx1Pq",
  "key26": "3YovRmPoi8YBiw5EXLuDygm2mGektv9NXDzPzWSgX8seVhAftYogzmnMuhC7aJfHJ5pbcQqaTP2zjPkRTZ9PqAaK",
  "key27": "5PnyRgN4Jz2kgA3SckecKbjtXkuVNfbnqSj81pUDbdP7UwtRpswHaotkRsvVzY9sgT8jNKxmPJuhZmNB9gQWPzRg",
  "key28": "4XcWSZiuCJa8gUm9j1s8Kgw4XLsPg2RQXXKnrkzwmWBPSrU9PriehnwWwyLWBTpZVXtokbEeHwd9rizDGNTq9PDg",
  "key29": "4qYYi818zqiAzvyyarRFJKp5dGAEkEMvSfyunTFsQPA25cPwxoaYRoW8CfwpuyxXqYXeXvkbDVjDAfV7hkYayfY1",
  "key30": "3cn5BGr5ws8rGvQ4Ke3GPjNLnZCRmAzhNgazCNnh4QJwKgdJ1xqa8gnLnUnM4RPLFnRQkxaeN2fM5K66mm2mzwBe",
  "key31": "2zvZ7p7y5kJMoKqGoxuysdMhUt2Y9BaDm7hirowtMk9dZUW6ViGwDN97hrNRtXSgz9ABZpEkZ6x9jTrLs2KBgBP6",
  "key32": "5UV4j3j9xAKJECixG6XWr9VQCeYjWincvmgkFiHa73NRgVNW5pg9hNJy7AvWuNAfbhS2ZvQoR6kaaJo9tub4wjkT",
  "key33": "5QuHQnohoBr4JAvquFynU4ZQjdhBuYWYPd7PiUGdxWF8ZJZ3LSKFXLare9eKasRZTVqpqCHNbyycfgqDL8ufLhwT",
  "key34": "5gvnPHWArkZDJq3ZsSNUW6iXF5Q6G5zZ3t56GnFcsxzQMSREZfwc9SgXSUzVb4916h5byPxhHBtSsmKq1KxagTkv",
  "key35": "21GfzJrqBUVNBEBqWUMAuzDfxQ78dAo9GTrqVhbZbfQ6furv5Mf9Phrx2JizW6dcnqzyMrUvwBHjuVbuKUpUbqex",
  "key36": "2c6rBRbUf1eRN8iMV4Xy3KbFiNtMw6srAeRjQ37JFjB9KvcSN81pVZ1mUgoqYGPSMs2t4CX2KhY8fYSWsq13tZ11",
  "key37": "53rk9AejB2Lcvx25MdnVYkfWx5rXfQzxRBtugseVw8XE4zvE5f8Kxo2xhFTXuaufcbV7ubbkCtZQYWUTpwf2YpfP"
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
