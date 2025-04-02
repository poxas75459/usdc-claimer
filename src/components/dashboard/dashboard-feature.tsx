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
    "5doqy9hoRLZBAxYmLEs7TbJFkRkkLtNyaFHZSQGPNzre48VpJDv5mvWcPuCR3LJj6AEuRYScVLPz1wUnX3p6n5Nk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tEq5h85LBnUwg3mAzTL21NkPh2KZ5TAYa4JPmQWJwtN5QUZEFpXSHyfDEU24jwHTRpn64Kvqx2sMuYUezMcsVKF",
  "key1": "2z6rQ7cmAw3hn4nzGLuWsVr8eN8FKEN9M7XsWdgFRSWkFkUKXAjtRgU4TZwddFKiAWGTudhwwjTpoXZQjXqPN94y",
  "key2": "pt6smkxKxREtVFhcNujUyHJxz1arhGjNRPFENmBPbt4UnLsNDHCfLop48h3xCWTDFBSnPZP4xfSnEntXGSfiQNQ",
  "key3": "2vuUL5i2Dwat3fv6PmMCCfjuABrD4kME3BNvY6wcdWoWYgTcub3hn6cKjx2Te1noSQFpZsNE1wt42G1P3wLKQo2d",
  "key4": "5hFqjSVfwSLU6x758nJYeSAsEB1dQxfB3aezbeUVRDuqeD68NNx4GkWSHtcr9SUpxUs5fu7f1rbPUjrsC4ouKTZS",
  "key5": "2Eg3Kx8kP3PMCEUHoqbWSsnVMrtrAh7hbgvBZArpFAChoxH8SLMpekwpTRzNfZyCg6AE8U5L7WMkjQDz7EFiqa2H",
  "key6": "iT1cArzPMwkR85hmiBBYst2NqtMZPV8AmTiMwtbtc9FTwvpzEdmhtUhwjEGz6DQWf4v6yfrTG4hf5psrbRmUwDQ",
  "key7": "5MTmC6BzVnfcvq7ND1hxrNA8UaxdUX3wH6ArzShLbUSrieQUoA6YQZ2HhhMSaa1vezpsr5a27JzNuMuic3Gmn8Pe",
  "key8": "2qJfnv5yofsyGQrfLVmeYH5CNbR42kiGZu47SNXw2jpAw5a7dbYLHfrmk7c66dwHxRgZSaLd141ZF3A3KNG6HPNH",
  "key9": "5gN3nK8GL48NBpBa69T6YbNsNpSqfYoQE9vvzF5YByD4Xs6qBZymegDhMGfDdpLtZZUUN7vjJuDZiwi5xciNBdhv",
  "key10": "4HM2aJyKWEywoEHNFDtxxi3zRpwypsmsNEyNaKziuk9uZLAUWCi2GYKjBPrGaVBphWUexpsqkGBsibhbXB7TemJ7",
  "key11": "431oL8J2Vk2X9ax6GqEHZJVNDt6CNHGpU7pr6Y6pTBRbJhiMM64Y9DeDSTUH3Et6FxdEJA3KCVrqshckofEQ33ry",
  "key12": "48rrYsHYAFMroCRXs3hqN7kXD8C8QHDTVnV4i8FgztBKmq9Rccq7aHZQThd3JBpAwvvbXDwFJGBvSFEPBDN1HFjG",
  "key13": "4uBFWGVhHUXtbfhXZdYMCxm9QFh8UaLjY71jnm1y144VwYm5zE6VwWdaMAaginhdRPip8hdxXpUQgy3oSTaXGBSL",
  "key14": "364Q4F4G123MBvHwxpov4w82rU9TkAtUzDv5Z8JSvLmnQByM3CGStjRWTVZC8DqZVTqKzCZeKTGgxQay1mjuGPQq",
  "key15": "2Q7CDbW3bUt4Nz7uYGw1EAhrDpGzJYQVH2DuCqDAbAcAXCnM3M3H5sLPVn3mbPmLqVLzDMBfBnmeUWzQ48r9zLSY",
  "key16": "4CnzfRawEBAu43pRBa9uqvdASSri3pt1WgbdWmXWBZ4w2yMQgr34SasAZ2KjAYqU5L8SL2pDdJcri5qGFVv3CYmT",
  "key17": "2smRDwEo4UVMeP7MMKvjLYkrgAaeTmwVPWZsHP3LpboGwpSdtcdaNFgUtLvT8PfZTqhSTcoLjRXouMMnH2i9ZYgb",
  "key18": "41XqtUX9y1urT9zkyktSTZP8MMLcFxUnKvCjzcXg2gtfKHmbNfokdBEPa7vCezVfR4K5ffsdwvcr8Vmw5ZyBZtS",
  "key19": "4HZpYMMee1q6z6dj77iSt5ZdgvhD2TY67msD57sUZTQ3aigwQgsPJUnmp43fx8dvVAhttHnW2ma51ymGziHrrEew",
  "key20": "2pv13grpsc1awSyp1gHPYYTkbBaRwZyMhc88bYB21rqyHcQEHCd32omQHnvPCWho7mP6ZBP8HRFL5vQL9J6KUwrj",
  "key21": "2DidtDmDFgyBfXfQUfEhAb5v1iAeGUXEGtsGfkWkiKeGDa8FMbkmGYdbzdNvmHcijtJwsqR3YnY1EPMJbwVPv2mx",
  "key22": "63GAxwv6VHJwRpkC7iWx1RHNfvEpREkasJ6G96SiW7XCNYVwc3vCWrK7LtkqqbTuZrY85CphBvEdKRbRGgvX4Gwx",
  "key23": "3mC7V2knmyD974C1JormZBNok6z1BVDHHn4CooRkdxRqbhvHvdvG8NQQ11AFrjzpAQQDhXXBmvNVP9269ZJBjCae",
  "key24": "4sD5g1GocZsh8DDcTRy62SLucyR8cFnaK8SQRnZCJYBiGu4V3DprrS2R6u2RnrmZ2L8sUYUbiXhXFrog1SroCo2Z",
  "key25": "4FAMijsDNjkopUyQ6Fp77BuDwFRYfePz7qMasvb95cJ1fuLwa6wLqHET5oRALt5J4F7Lr5LX6zs5hpsqqHJBQd5B",
  "key26": "44GMi9niu44s4zC53WTHpTQkT9cdGjYbmTEmWuQFkkTX4QsrNotTKc5UNCDpWDfAaUTyK6wve8UfgYGJnbVv785T",
  "key27": "5Pix9dCqazxzHURWL7RnMnskgDUjAv15uRuAy5NaXb6wmTbr63UZ8HEpMsFFgkMzQy6J8dhh3qSqJQhVY6PHrN1i",
  "key28": "54vWsMyexYpajdJs35sqEp8cWdTnkqwTxwKCGscMKc6cT8or5jfZbgLSrAnu3htQKL9o54XBHFcti4raJoYT6NAm",
  "key29": "5kvPWP4YMjY714qoDpLmzxrooK6pWw5QXnint6NXtE9Ch7yA8U83dNQp6KRUhgPWbt2u9hK8xGU9JkuBucNjUbeK",
  "key30": "51YdieAViDFUzt2ZtHTuDJ299BdmdJxu3KCLPiuh2fi5pZE2zTRcQZ6SYviYCmLaVgetF2vJmM5zCVg6CpWeoM32",
  "key31": "5iVfSDPoEYLdjQG8NAgq1ZRzXFEU41i8XMVZGKxw8Vu4Pw5UxLxBW8AAebc3JmkEWk9L8zsMYYJg8D5zGwhVYLwg",
  "key32": "2tHoJcVt1d3WhvfHj6hkKfx2GoJh1keMG1NKx51E5QwRiWN37FoDUfwFR15TbmW8KLNbz8fgMrxHvoLK2SzZEuLe",
  "key33": "65jAX5ex1FGAtKzUjj2T6Ufnuyg7icmVnEGcKivY6MVh9y1P55iHb6zUuK2qce47HwoV5EyP2QuUgMRi3RBqgJfS",
  "key34": "4fEZcGxuvfj9qjr5jtG7EtvPf98PL11ApTXq6aVNRY1kkqwjCwziGjd2kYYfiSmuTLmeGMLPnLeCWETBbEfssuLi",
  "key35": "4z6s6uJ9j3rPXavggJVfNWDfa7qM9FJ5XhtDr1NvQLNYkY8SMakf1tnos45ZDNuSv84ZVz15YqzvbibedukqQTCM",
  "key36": "3an7Lv2B8j7suoEwvB8jCqVxAmmW62nUitfVNiAVDeCGdbDFMhNU3FzX8EPFu1nHEh3HQzfWYqhWkY15dSWJP5mq",
  "key37": "213Zd5TH1JD7jauxXfJNX3ib3YstQwqY7EW38yZc7xCfxi3hp2LnjDPZpRG9f5CFDptDko9sac3uCf1bWxdpfyJ1",
  "key38": "5EfVhKutcaQN3juWsJtmnkvHNVhJVFiqAdEpE5wSVJCeJ9xiJQvPpcXW87qCCo8LirL4B5ceoA6iTx37ACvQKCsp",
  "key39": "3NG8ynipAocpUynYfggdfTGmY7vbyK66tAigLTdoEgzEcURyvECnBygiur6SzvgCfqWQW5zeFkBfbAzm7oCGG1Aj",
  "key40": "JcVgN6vz9jifwMgLBqozigFqxEd5uq1jN8tEfcmS3CeeQn3EnJM3VkBxXc4mXMcJAwQEXengvNEHRgv9t1DiCog",
  "key41": "4WgRRbKP16zDesJq2YsaborR4DQi1Kj1YtVVyumecqdkv51W5f1VPHZuwtYgb6QQ8gkY6v3yfuXA5HuPvHLb4nFV",
  "key42": "56JRZWoFpKML95dorvokZvnmqSCFUNu4QEFPh8rWYS7ZVzWbCwuZBpAbYXC5FBANWSPTToT2BcmZjetPWUcYzUd1",
  "key43": "4nq61k3aF3MVFqF9X8aLFyeUGuKHN743w3T77UYzKZzpym3nLDtX6YxT3fuqY3CxYMBLWXjE3qKH2YvDbaiiaXuX",
  "key44": "M5kRdR49okjY1vpg55sSY4W3hr6MuP1A1pX4rPKbVkcHTtmTF288iTb7atD3wwDCUJMVvbGm117vxijTE6upuMT",
  "key45": "4fQDQdSNtjQTizcphBRgEC5XnsjsjshgRK7V7U7XBpZgUQqHqqHPzUFbQ3xR1v4nai2DEF3R8ZRXB794NHhopEVb",
  "key46": "4UpvyLjwP2RUobeRbtKB7NdFyLiPghqvES5J5k5snzX8C9eATiMT6pnkujgrwXa5zVjYQp5Fksz74zGQ6sud2tFt",
  "key47": "5zt9addfY9cTW1T42xBm2HuMqQWJEwwVWrQtmJGBtaacAirwDvgfeRajhXxFc9D6uA5cw5CynVtiWmEv6KnRgbVE",
  "key48": "3mL6dzUapJo62aZL8Eh4Chuv4jiZG4oRG7soD46DSiSK1VAh7TJv4eFwnYVmZHNSYMcSExxBV9QHvCPxrN7U7zc9",
  "key49": "4c2KrA6S9UiAZEvYDWQwrTKpdTY1mDvdtvi7PBWrRfTvXYLQDSwFfvtBA3zC27c9yBz6adREckYKtAhdcg1LCGq8"
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
