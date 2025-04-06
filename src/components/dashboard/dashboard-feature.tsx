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
    "4s9YGK2mG2MjYM11D7RnmupT1nCQVmw7aQt7KMazf3eigjYs1Zpue4zgnJo2rj22UmFsoZGpazynsrGncPvrkgcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B8bBnpqpeghePpqZaWjyxzTLkCCJoRZk31NPGx7u1c87yYShVSVRUKbqSsEnjp3L6ezXD2zX5vu8LWZbxNgPDQ7",
  "key1": "3koveBKV7mhV2jyHrV6kwfRqupdnKCih93ZSpRkgCSuoCcdzVpAQHhsRUgpPPC6Kkdq4uCc8YkUMdPctqQb1DLZH",
  "key2": "27xv4XdhFSh3MLgBoKXgYnWTdr4eUm3Tio5VaHZpeoRX2a7N1koR6z88rJUtzsmDwNtGCWZ4t5DAigLXevEhCsiV",
  "key3": "3ro5SrYJRBGi7D1u2wtsNhqwk1P4BNFAYYmcu6oTSGgEEvzWAF5W2jgazyducvBKupaqe5GhUDFFiJ69PcLX4vkY",
  "key4": "2He3d9erjoK8EaWg9R6KmHzGNvb4EhLDHZ1BZWnAq3dEQFc7aJbo5TH7py8C7PGPstXHLVvJNkPGJJtWmsmpQmqv",
  "key5": "26jysFT4tHxrgHsfeQ8tDLekoUPsGvP5AeUdn7AepZXvfA4G5ZDxuMbTcgunmJkroDKRwCmVr1muzHeTxgowv5s8",
  "key6": "3vKFsd1ffuY3fL9xuzHDDogj6HUZmTLA3RRg2kiHpZJw5Gs7R4WTeKMQuW1MG4YTZW8EPexA4NW7HMRVuK35DCa2",
  "key7": "4mYYcc5SFhq4WMtwgWxVxrUNJ8QEtzXF7vvKznXcRpswsbykzkkySBMbfZoYAgHmmopiEA6G16g71Mpwp1uhYLLa",
  "key8": "Ztvo4rjx7aRqFbAW8UJxzfouCgHsygFnHGvUCByx3TTNWtresnW3xyyiiyjJqXFPoicS9k5xigwdRxEMequ1dDm",
  "key9": "5xRtH3AzEJcShkx3Qpdoof7aUaTqrZq2vgebNmJsbtWt5qkExntJPsaZ9Pspos1WnKoeDkxg2BTnsALmJEQDF4Y8",
  "key10": "32yowv2BAERMBCjjuvKcM2c1Eczw3B19FPKoEBWv8ZHBGp7xWsYhcxcoAc8zm46BV6gSe8QT7yoXNpduUj8miFGp",
  "key11": "48Anp3yZvjt1zR4BNSUF9qCxjzWuKzLkvjBW5uJut7cw2CxfGQgMw2ocWSGUG3Kx4pzwsGH2y1ksoLW6kqrXNpB5",
  "key12": "NUDZwbHTYP3WKtLV7hw4RP7AD2pphRFox142tEKoBs7bZuBaYMddpMwmpYzUQDPMB2bdUjP2qFrx9rhRqKRy9qZ",
  "key13": "49BsVjxKmUYYbWFr1SuPoUoAzKMBndhSa5vfh51ZAs5JkAg9aVRn6mkwoyA5VvVYuRAeu1xdkDNCD6doUf2MkzLn",
  "key14": "5gtx9m4uDTfVgHjAw8dDvASKAsdhb1Yx1rWEDMQ8EQoTSE7TAfRBk73j5P85toQMEs1hcHxB4dA61BVdQcjv9cjV",
  "key15": "3qASEJz7uJMFkx4xHvfPfh5RkGoM5W8FKnDxL7cYoEMfBrrkNjTwWCLBQCzLUWg7e38fj6MC3Wsq6dHxiYtUcW7w",
  "key16": "ZGSg9pHyjgUSpiSVLGEvuhS3XfrNHuq5rJ5hRyVSdJnPZog4EzM6v6QC1HXQfhuieuT1rqGqbCYF5q4MowC9CRh",
  "key17": "2kxCV9uhGxrAviyhKo8G7QMMwgq7vPw5EXnmS8V3deSaPCs8rUZ6vC79GS7mJMqrUWHhhcw1DKSEcgsX7WEKQPve",
  "key18": "3jHCsZEk3t3wC7XsTGKZNtBmaF6ghLtv8TEuU3vcMMisqMgzfgpcTkb5bB7AuB1L78DJVZbptMFNuFyzHu1KuUZK",
  "key19": "64MQuXFMKN9qjJT9paVrBN6CztsrKdUMvtMEMKpzYqEFUDMkGqhF4WMNZeS5d5d16MEgLPaVcNNYQcHrRQPc7uo4",
  "key20": "4nLqwQWjbxrHudq7UH38L8emiNXTzPq1LB5madPcBsUPhBm5YUZQCfzBehbQEQ2yq1qDZx7Xa26UjUehcXeaAcfV",
  "key21": "5AxdYAKpo7kUmgwZou4VJySKScwrEgKmxeZnip1RWsvPGNitLXbHMd3SeSktBQTPtStT1Gh4ZupvWyT9Dh3Ee55G",
  "key22": "rHXgEzTcE721qy4NkMuWn1g3PPfdC3gmL2iaZefVyFrtRTouRnbP5pz3j4yTK4c4qcf3snWqaEE95rQU48X2c4d",
  "key23": "JdzFWycB2vF3oZDjufLQ6DeUifFjvZyx4iXaxYDpesEBF3JYQPuB1DJXZFAakxJWrhZ9aM6wv2xXUnGU7yBCbhd",
  "key24": "5uQaZ29cn6qNt4xwuDscDbXh43rg94PaS4xbj4ypeUMMxjzTW8dwEQJeKjonwZDK2hLDrdEDqVfVUBQp6ERUzyHx",
  "key25": "4cpnJsbiNGMUnJ4EJ76sEha1aVBaqtuQM9R7riZLUhnHH9FSXYaYMmHoAazqYTdG5EcoazyKqdFp2UrKP4QvWRfH",
  "key26": "4Ue54QpMjSBkbRTVhrdS1f5Tzt9UQ4VTwSBsXP4LjwQ9c62mFbkS35geq22mD2wLGgyysiqJLN3U8SWyrmdBbu8g",
  "key27": "5sKsCDbVmwRcN92LVFVpEsE2M9RZyZ3cZ7EKPNyPjPQHXJkURR26r7dSxG6VUAcWbWQfJDxHdezRy2tUMqDZbavP",
  "key28": "5HSg2ifgzVj2jMP36bPLMy3ChvLUQM9wEYvjAAMZTs1ddBvF3P4x6NsSRjNicj1SMzQ93jAFTHofiUAUVNmP7PYR",
  "key29": "2xasyiiK9qmWbqjBgBPRtJGNpcmZhgsaqRb6LdvL5RTsodAfmWjuGR85vfhhmheB731WwyJafFzGSiU516jMVuAY",
  "key30": "24MpfZ5d6BfsJVi8Lmfcs1QztrcWNXo8pSikJ3Mnny7Tg5qjP6TKocgkxsun3Xkn36WA5LpzRtR19S4n2BhRybq3",
  "key31": "4M6JLPo82GQfu5yqDEpyfyjmrczfnhBRkjvSyN2LQRNv4zM6HRFJtgZkV5TeyuzDBi8as9AcKbC1pmHYwnGwW6J6",
  "key32": "59T5NvooQdi6Wcf1sSWgwxiZT7MPDE1SHGARr5ErnYjy4GdaiPp2ARipXqFNpeFsqXZsLxdhxorL3ks6XC1VYDTg",
  "key33": "CjCBFRkybxJ7L2q9hEAHn9DPCee6MNr5hZB9maifrfYqegx66TH8WgAKHghdMpKQkVEfCDAVuhkp2eUVQfeiYqG",
  "key34": "4kkL389Lj2pJHP1HWmNPnTQBbEcQ4vJRcNw4prPEfkHuCBPJvpofj4fMhafdkNiBQWADzrBAXnf2bbMkXi8mkwCj",
  "key35": "33iEW1Ppq9w5GvXMbjDcSq9aWQynMALVgJu6XGpMjeigfMyeFd78stVvxD7iaBt57XMc7iXvoKwXhD2wwgg9dJta",
  "key36": "3qfHw5VTavFcvhe2kuZ4qjkPcvEqbV8uMHfurcLHqDyhZcTqQeccFc7iCrSE4RuCMoWkoFfGDd2LymAsAHtYeJkE",
  "key37": "4fiFmN8ynFvTEbh1TiChV5iJdsj9G269u9S5maV3uxoomoZKjf9FjYKXAcAw55xutMGwTBanu6hJCCHuTxCLZjgS",
  "key38": "APPWRvSSRztUqdMkL1kxoDXxxx32yU6oDnFUMyEn9QaDYJfsvBPyY5Am2zZfdtrCTN4VoasNovTcTuw2CNn63ny",
  "key39": "3sDBJj5oGPMQX5T7eE1hi9ASW4R9NecwHRRKbJpvYYE9rmT39unSzBang3RQEYiSv7wDtpWLtDJg6ioFbasCcVv8",
  "key40": "47LTJ7jrZj6fUKCCKCfG6b4pf1qLLwgLzBfeDUmRvwq8vr75Rk2Fo1goz25RKyjkBXQbEWHHpccUwpR5PmGtPMRP",
  "key41": "gxjV2rpMcSN8dRrjmx8GyzeHQzKsn4cxcFbvMjQaMjuChnhoSDkoR6x7nPe6BxDtqs6C6ykqkzPyxNgrmScTtne"
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
