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
    "4zXpo1SP9SvjSqq4aUcTvEXA2miXjLcYBhK4Wu8MoTvEWityuxhk1NbRzWnQrjTFDqqhL7M7xXBdUBXJksxFEVUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42mHwVVK6cDvWvBqk6Ah8nriai9iPkh8gDTQZzV8dqc5YAzDTbN6AgP7u7oLMhYhr6Y5VtPmXwbRvnGjNCs6NJ8Z",
  "key1": "GeyCMjKjTdoHYh83tfhC8NDVRQvZ8YhXatRN6zLZrqN89zhkxzGxExHXEHmwc1A3cojxs5YLvQFN4wf1RaGBtNN",
  "key2": "4s3md9UWMzCmWs2djEXLgWSKgm8vZVkrxeYoKwGVdCfECBFt41aHwTyvywpZzzR8ognivGVYiUEvNLRbE7p6PLrn",
  "key3": "2HqwqqTNsVrhj6LQRjKLV5VvPui8WRVa85EDEkvZzW2JWiGJKfQ6Rt1s3Q6xHG5XzB12iruT3CZtw5qzRersyTRE",
  "key4": "2wzpu7BPZskyHq5x5EggEXeqeF35a1ZySYTR36nyg4D3vPmUxK9ad3GR2yNqtjDjA9LDwZJGtJoikUrDpByRDjSJ",
  "key5": "5jfnYCEZogSb5vMGNkF2PJLRfqx1F2HAV9V7H4GcBBH8Jeje5pNgGqhuiDPDmVpFUxLunHL5iRisifA51nKWgy6B",
  "key6": "2KhnBy4Pms8E8zzuTMkRCm2JSp3ypRpRdJAaM3MPeMyqpn2dvawMrxrsCunhbP5TSijJ4bX5dS2Hbskdi5gte9at",
  "key7": "UsYsSevFBs72GXX8DK12JzbG6vyzqQTDRfsVHX6jAkgP4wrt66cYySu9Qr9KaG5E8kqqvkbj6jpQgjdfdtwE2r8",
  "key8": "4bHqMRJofWYN7tVLSDaw13fn2BWr7hB4Uz5WRvkyYoo4gmhiWnHBpvMCkkUPUkjjE4GA3e6H2m2apM9cbBMMQfhE",
  "key9": "ccZAaCdcxx9LjSsubdGxf5yEg5yTdHqrngi2o442Cg3Wvw6v1DrcE5XDtbbAVgjbsLr9u1LUKCYmkNxNYWRnHg7",
  "key10": "3dRVX3rcuBji2ASfDJEusV5p9z1jn8nT9QfemshjUcywmBLgLKcHSLaCvfLeNe2AiLUpodnyXYnYBx3Rj92vQaFo",
  "key11": "4tA6Cgw9Dt2xSuDb2VKYxLZv9zz5kjqYze4xuJaN4M5jsSd25vua4cdhpoURFvuRABjXdkyKvivjvHpFKPCUrt5j",
  "key12": "4EqabecY6HLAAJtX2rSmfT1h9gX6Q4KmtpvWHf3eKrJnEYHiTQ8ZLedkeWip3SgtW6GqdHKFZunvqN6KMjrAfpsZ",
  "key13": "YessPikgh8pVZPFSPWmUW7gWNwHsfKVb8ebjnmFX3DBxUtVDthefQ5Heveqi99XttYFVR5rwXPCSvBLaQ8BYNDA",
  "key14": "UovcZapYHo9CRfbVr8j2tkfgAdisw61Y3AXGmjLsetEExjPZkkEQQxmnYRWGZ3WoY9oaCuynmqtYzVhnod3AbuX",
  "key15": "3UqSYwrTsPiKu8pRvoTnWJ6ndo11wMwH6cpQBbeGQnE4KUJpP4RH8dJsiPCB3emBWmbpWH3PN3YWDQk7tpqLgUV3",
  "key16": "32KKqZFotgcJyfjFeriJXDexJDmvM25gJAyZBKV6CY9m2t1MmNtKfgigAdX6kkkHzMM5EeU3NqFd3KaFh9KEUnGP",
  "key17": "5rM1fB44biUJXBAJV7B4XRSv89ACfknJfkySzmShMZmWkj7wSma8Q2xxagcHSgSZtif9qDZSAaXafxb2meHvXzLR",
  "key18": "56QNrH5ewvCDg8JmCcRG55Xq7qdHD4FuJZUCRJoYnNnSFka3Vf2tBEkhzQraoE8ZeHVYth13DbecEhpexx94nJE1",
  "key19": "3qdMiojavKo57ME9BjZDQ95Ea15zBo7FJmCxkrdNZRW7MUEbCDc2x84wUPoisDfXfThdyqrVcbNMaymNRfiQ8pb",
  "key20": "3hNfkcATVnft7m8TtA1fFeneYaWyF26vQMRUpUU3hKQeqpEh6bxKzptgsdS7BRCptkhWsNEbsw8Yov1KzVvX3zWA",
  "key21": "58xs21PV1d8NPnWgdWEPk2NcZjh1pydrsAwWBHwTNu4ME24QaRuNBvHUuJQU2nPqUyon2P432QSmhU8yYFA8DZ5u",
  "key22": "d1M4eCZUytchjE5tz3jAxUgnYe39c9p2mPdVfbf3itVutDC2zYgdYDZ8bR8TWHMnWpoXur8hWeXhd6oAsw3zyCs",
  "key23": "4CvMQfse4nKzgEWze8qFLbRVMCNZvgNt2dsXfiWLyHMHxajD6u4CHYgo353GTc9eNNXKzJXVbXCUJ6jyGD2QaWVQ",
  "key24": "4RqjicZ8suX71jYeAVq8squ4zJ6QsPZq5FpY3vvhELcrgaYtVxYfrhmqa866zxRbfaJys7VgqJBSSuybAn8zCHLG",
  "key25": "3iibAfek8T4Au6o5f1AmugKumrnidbxuv3ZmY7k8vKsMNp1Stkf3H6q5iAkeunbshjxgoYaTGTSz96uvVwV2iFvY",
  "key26": "2jfYZtwLp5Mo9pq1BWnduc39NDyhCTjMDfHxRxVspuoGL7qqmQcUFiYdnqcoXYXrY8PyFrTNmN5wAyaQVxBtL2K6",
  "key27": "5sUBckgeCJc2tYTdFNkSp3bAnJpD5y41KyigJWqBC4EfKWpbFx6v7S9okNptKsEAxpKWc9XxXHzGx2TCYo7GM2u9",
  "key28": "PaozkmtWnAfprcGWma2FFrSWcaVqeFJWv1HuMVge5nSubk3wiEqWYDa7p3vvzA7hwZqkA4AYnNw57K3ZMgaJMi5",
  "key29": "5fHeG9ShKaCy7Wi93c1cuRkjGrcRF6ZxEbT24y22h6msgPoprubB5eVKXm17B3EGHkfWJ7xzCfJpzzgExbU2E96u",
  "key30": "6SHwytbV99R6jHnG7VHMsKbjPJFHznPxg2MS4ELWdvJypj6rD6RPbN4LPz1AVvQ5Z1ip89ZfbhdJpey5d6rYjxe",
  "key31": "LpDBYxa4zibjvDhooLESze8poW5MPLg2sdLGYqZCTup2N7CaQpfvadrZwzQDrGVotghBhLsmTKSSMECeDU8E6j9",
  "key32": "3KjiqQ6b2EWno1797RvEzPoeCELb4Qe24qtCf7hRLbXzbbRwKymib9TtakjFghd9gB7QFvXHLqxRYWYsXet1CfVV",
  "key33": "2qhBDkydLpb3VpcxAmeZ6Rv3EFN8wmmZzNKBy8JsjHs9aUUA4dHH6SZYvJAeBCcnN7WiqyiH1QpcT8Wp2ikRMBG6",
  "key34": "3CvXViJm48AkdLKFCzpdFsLvmmxmF9QkAXkJbd8TpXhpKc4A88qzCAF2spLY5Xsbxqs8ywUPMqBDQGfSa7NuSZ1E",
  "key35": "4L7azWXKNtcg9Vj12qBBSCwVxZ9SdhEPAFjb9Gj6w2gtbgb3wXh7L1H53MRuA2GHRRSpvbLhM8PWTVqNmTH3P4Ky",
  "key36": "1EcB6K7FkMemNMUPkzPBqz4eKxYnW1zpXqgApgbHxJBBSBzjatCTwFsJ8kfiRquXVVrRiF6mChbn5v15x25zVM2"
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
