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
    "5HB7gYu7htht9172FxxEnD8fBarQtvwkD82E6Tfj9YRiME661ZLzXHJcimNUFHZJ42xAb74yaaujaLVkNR963nrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XiRJnR2sbuNHbG2j9uGGvZw7djx342DkdkZAnXZ9hLaxEBgrvPyKhbz7KeSmV8PRZiUQAVAgnBfyjvmtK25G5qu",
  "key1": "5Dt4gLCvyYenioSsNNuC1iwKVcZmUMwQrH1dc5J6o6uNpgRXwTmXkKPx1NBcGgCWnsnP2tRmmgC9ke9zn8RkBJgg",
  "key2": "4N7nHB7xNzUEfqnAwqt9NeewsY5bmTZZyzfu731WpZAcSF75Se7djvobp79MKzLYPoozcqKg4CPA3ooea3U8bUfT",
  "key3": "4QBBRYfZhJjEt1j4wJgcZcNbMrVeYYvmgmQf83L7CmcsS67XGaTrCD7cMHtWXEigHaYKN1CnSA6ApCUsZ14RCJvd",
  "key4": "52xHSk3zuTcUuvfMMFFJEgSai98MiMs8VhSxeMVB4wzcJMHYR6M5EWyUYmiaf2ruxWYRW82Mw5HA5znT4Up3LFr1",
  "key5": "5W1fUodTGc2XKuVJDaKT9B73R6yTSvR98joBPPVG7xN1BPmJ7dJe7NtP2ncuWWJwo8j6BoyS3Nz4ct6McYQiWJpB",
  "key6": "5uSEXLRnExMroMxgByGeBHmyT1TGFZwxZMLuF8R1f2T74uPneb6cHb5gPRmBGHXyCTTWJz6A7DCezibC2RKCYpcF",
  "key7": "31yp2iZvcxTL6quuMfUwFG6fz6xocnVaXPmpvRrL3Hi8doX8YhqzwrTMdX8G52nhYi42NYMNa2g3qsmNRaHfoVM4",
  "key8": "24nSogL6GY4c3echmGwCvB7rrycWnGgAHfo3uiC8tjigQLnmxoob5HmpZQbkrb7jNmX1vGtbuoyi1mCm361YNTUW",
  "key9": "58zpAeFnZhvyv5xBQ5YiQ2kZxGN7pGnChFXrN7T8yZJt2YfVnHscK7GEWAkuMuLo9Eb9WTrhhXBXbbPKFtcVHmWG",
  "key10": "3ZyhcPDoFjQ6hSNwvZxxMasYbt1J5FcXFxf8VJPdhaeEwTQN8iCYDibBJtnBc1xmPCebJai1Z2KLBhXpXYrUikg5",
  "key11": "2z6L5Fc94w94VwFRa98XWxcsheMMxwCLf6jUU7a6ytr7zyLjLCx8YQXqDdRBZL9ByF1eYap2omb1CyNxVyh44rR1",
  "key12": "514hN92uAJUvvLuhQZWzSBhqqYwfPBH31UGpXWBTvQ6QCTSrmgZoRTGAPXPBFTH6MFDTAMSBM4UBSRXs3j6utoq1",
  "key13": "2utqj5VHzTYaqL7WfVUtTEiii5SnzxvGmxg6k2arsrLmrumpZaQpFj1Wj94xegaNxWZrH3FjMPnmyZnsf9bhDDzQ",
  "key14": "2abv6ToMVG7XUxc7mQtzdfqVwdL2uYyZDbfQfiMmi4dniXp39cCkFHZAgcwfvfrX9obH6FrRqowwoWXzyKhjGU3k",
  "key15": "3iDhV5aNKaYgMWWeAA7HMS86b4WcpE8K2CxxRPM6euU77aaN4KJebJykDC2jgvJphYVBDSCCdRyWK6X1ZpTaW48Z",
  "key16": "bt5uZ27k4yYGxfi9vKRwf3dF4Kv5B8JSjNvBSVVTULdcF7AzbAt77v98j5P5xDEz9XdLmjUVrJEUFJ7Z7xLzLR9",
  "key17": "5LU4hcGmdyR5yay4dU6DntxueEM53Nu5j6HrPLjHnQB4K8j6S5GzZSqqoYk7YbuDWwZCzpocTtnr8Yni59851m4Y",
  "key18": "5SoRkWYuPQ174UnJZYGbkPAJ34XMmDrf2m8CYSF7W5975C1kA5vHXwyGy86pihkXmYjQyffMghxf8dwaF2qqEJtE",
  "key19": "2cspDx5CkiXe8GGbHc5gPCyp7ThfHBRbauBGA4JichyAkem17wPmibPoJzGYPy17XG2pL9hSE3pAPNh2v9EWHp8D",
  "key20": "57KGtsgBuaJqKZFU9omv1Zd5FPVbu3nbHuDkGFVyrEXPsCEuXoZr9dc4Ncfs5phZAWsyocHWWpwmQ1dPCz9zr7A4",
  "key21": "4MR1KjXKuq4nPUb5iAz1FSauGfhHFTTYrnoXJJQpFVXawDx3HTV1wGoDcrVHj6k5rerjGYzThDnLNVAwHM82aWsj",
  "key22": "41YUB56c4sxjs2LE6szsT9brNAw2p2TL4Dg2Dcm52B1bxz7sf6m1NY96Tj6fwgf21owuZXxxiNB6hgrz4mrVQNLZ",
  "key23": "5RLFFjWQXe7z5cnGknf5totYemFvi4zTDGciibESnAzLduVsBHJhzDtWeYkDxudufxMYkHtWgP4NupFzbX7S6ezA",
  "key24": "2gPbqDty6A7aBGdg5M99TLkVMm8bSJN1ZeoeciAMJqeLxqZCGek7XgFiJa9PKTMNJWLUG28kADfGDJ2CwqVZQVnH",
  "key25": "2NWvobX5efuzSVy5VTLeqH9hZGrpuu4DpTG4PVXRzLsnCiZDtaygZFxaTxgPvy5VEnN9MjXaKoLCN97uGrpronaD",
  "key26": "3LHZy2cxbPUyUv6jNfUuJcf97BvoGzerspJsEPyH1YoBabuTCR6bGgfVuVtDBbZ25xkNZU3UMQuwEwAW4o4uRkwC",
  "key27": "2DipSMqLXkZESx45EDezVp5u8kbpJc8Sgj13CYsWmDsjFWXkoETqDWzpR28Gd9VBoAswY2cqLFtQWo8L3P3bULmy",
  "key28": "3wpDvXkCMfcS8JZde3EEETcb6QsAeAXiukQ5agsmkQMz7XQMNwwqy4T2dR1fzR6V9PPLsQJDRHaqFwFyR15bGZAV",
  "key29": "2VStH787dkR8VeAsbshPZh93UmKAwAJxBNw52dVbyxspt66kkKyU1FVPLKCjD4Ge1PxBHLzzhNJygFvnuHGgXPMY",
  "key30": "5vUizpPDX8fSYPuH17fc93qFXUF4U5YMDvwUt1vSXjVYoKmNiWDQZDn2Au3jbfr6pzVzYtdzdAGvzw5hHei1FxKe",
  "key31": "5gcZHqjrz84zavgDjdTxiiXzwAgPu3kVMnP8KgGuQi1hZFeG8cA1x6vpPJp2WF5rTLg9e8K3mokT7L5zBGqEQWpY",
  "key32": "2qVAi5j1ZZgYQg5X1q5LfehrRPzjf1b5t25d9fs6kRhHv7fg24cbwwJA2s8XQWym2JHChGS8cLt8tYfwdyFsap3P",
  "key33": "3r2NXdCLzN9nNDLtsLKmkiN9w22ppLMwuDomwYSL5YXpt8ETttRSpCC9DQrof6VeoYMdn7Y4BJJnnjUvrzeh526",
  "key34": "3gTQ3EQpNGyfZtKsDn2EazdmGYVpLjwczjo4RZpbn8wLZDT31d1SDwRvfYxvYaYtXMTDozcv43S1RTVHbqXtkkEf",
  "key35": "3WpnVYd1DSaoy133oRqdSnjWL82Tg8imyhnckvKDo9m62ot6ph3j5Gg8rRPXfL1V2F66SgcAXsY4eWz5QXGjAgd4",
  "key36": "2RW5au5DMRaKuxfXZXd6hDzNEDvH5doruD6NzwbhHdCPBKm1onFAwd4MaN2hxBNUPiin9TggXqx8dmrXBm4ZDPtc",
  "key37": "4stw47XfKyZzvSRodS9KZzjafuwhfLqn3duM7KuJykUw7FUNXdx4AitfeqsQxzb6UnKi2FpxHg5ip8y5C9iCGjTU",
  "key38": "2uieWRomLv2f4nvfHTTboN9ftfzfQebnhoru5kvcz4MmvptJE6HUETriV8yaoa2iBTwDokABZHDQg3LhYHo1BSLM",
  "key39": "2bq29sA9v3Vk3Q7WTtkabPD9RAtDegXyHpjR6PHwgM7M2sSjQ8e4udrtR2UuxKZKddjNkJUzP3hE5Rng3RtMKcDJ",
  "key40": "4YXg7ty4RRnuV4mSE1U1VTphdXaF6s1EEL9ZDAvssvwaMfNp9HVW2ivD7ScHwLCeGw77nQfiQSuNs3Jtk1gjDjKV",
  "key41": "49BaoVqUme5rKVfsfMUge52yWwYEAfDBXhz4AQcqvFfQCD58zhkKd2GHrC6HoNn5mo9rAMYafhV2tyhs6MMxXbwd",
  "key42": "v9temTdAPdfiGpuP79PQ91sj6BGWrKR8ttmYdXPqJf81r6AqhhvsU1v3is6dZtvRydQ3t45byf8TbE6KxaNecxY",
  "key43": "3Lp9nN4oKvDny8rVbAkckPFYRtD8X3eqYWsTZwq9S8wHRCbC8FRZZ68wn4Mip2ooJD85K13pEVapEps6BXtBp9Ns",
  "key44": "rgje3kjro8bZwGtD4ZSd86MPBchhAuCpj3Q4CgW8yd8zcszsBEsJUa2wZPnHcJD9VSxNkUTbCY7igtvtLpJeFtp"
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
