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
    "4Gh4kBTzZEkhQy3ShrCawXxXdzzwxngUbPD4ATap1ifdczXWr1XwujfpzLMacm53nCa4YafUMVCTzPA42fAkzEUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aLQMU8gJ9Zn2MP2xHMGUjBhLDbRa8JRhLAoWawRAY6bViYbt3hXKi2btQKusnoxFtcardCjgeANHxfPXt2VEQo2",
  "key1": "aHYScMbfDsiVbF3A2EQQdN8QMHTL5xFTDdprD7woNb75V6TWhiyosKZPW6DnrWEtWAj2agtpYMMjNKyCe1v5yVm",
  "key2": "36z6B2rNWAQSix1eXPQkgKiskGz3jyQvsapwoz25qoM9tLHhZc8pcVtJdDDrP5YWRXvPLTr8RhgPUry7s7sFFuq7",
  "key3": "2ArA2AfJ8y3xFHuoTz8sou2SBMRvLekEmWDJ2LR3CT7wM94rZ7WGJUrxH9XwW9qW8xRyh3B5qRjc82y8dAyCJPCd",
  "key4": "2rcQrKuY8YjwhqM2B7ofymCwxd2BRb6ScJ7XhZuHDcsXZTFxJJrG8paFbz6bMDAwyv1pKLFhjmc98WkChiBYKWWN",
  "key5": "5fqDrCK9LcfEMYvcx8MGSamCGWhC1cdN7AQkNS5gf6oyXFzNHcXnKrBR9WdZYENaF9PWu4BhamnEnHBwCMojPh1X",
  "key6": "Cej4ebzxLadxEqgLqUj4opEx6zeQcXZ1Xzi3Z3QpSku2xPpQuM4EKVCyiAdT86MWSf78FwgorbygWTiK5xqqfP3",
  "key7": "5uYce1mikjpb3WQed4b4W76KyK8aSYaxSExrUZE9yTd39AiSaCU1bcMT37YduWJ5XR6qrnVdaUxqWtECME7FZPth",
  "key8": "oCtbfPB4pjVoA3oGv6BfUpXmWy6B6h2sVsF42PndN5wHpsWy6YJEAD3sRZMHx6SBWAAw54tvseNy37UtrevFwfe",
  "key9": "4PyM2hnx5AETQtXm7KfKdjzHkPncEQi1o5b1MjzrXuYS7BfFM1i3GYYWPwR7uARkPEptCf4cUpS38zXpeAEa7Ghx",
  "key10": "3zEAwJdg7CBztkQTBo9b4qrNATzjkhyR1Va8v7zAM5AfXjbpmGTeB23m2Gu9bLMY7gVY97aRUCJ5XWRMWDwbDf1N",
  "key11": "3NuFJUBs4AdMMLW6Z3nez49GdFZjG9qurbjgR4pqTejxsHLPXwiLz3P7F4tzpHuYzMr1Cbc25LtgdasUkvFNnMv7",
  "key12": "awJEHaCfRZMEpeGbghjaS9ebnbXs1gRKBX1gA2iin2WbpNeJ6XHvCK81YePHg6xnkBPpVECrjmo4WvyUKp7w3pr",
  "key13": "2T76mMxp7KhHAGRi6bENtxmmqsdHs4T2bEqKjoAG6mFNf6zgtvGTnjbBHkRmLY9ggDCiyPn6Yfpf5MgmSZm6Biff",
  "key14": "47SuRZGouQft1ZFLFaFbubvYcLDga86mWcZ6SksNCE6J9F7DGYxiSJe3g5qZ45eLqyRMcrMGFfKkzY5e3Xp3yBay",
  "key15": "2p9PoDYreS7sqKZDc4S8NjSjDMizANenyVuueLGNXv7uAtooVsU6skQdTwWjcZrwY4Ct5BKACnyi3DP8Y4A5VjTP",
  "key16": "BMbGawQVgtK268uMfNNwBow81jCwJEkK3gerGpZcip74zmzBHmHzMCAswVjR1E7H2q9jn6hyDG7jG1jU8feuLjx",
  "key17": "3qr2Cp1rkq6sJ9buATsWcDcP1hAQrCSqtbWxJE78Co2jWSncZuTWX9rvMyqQfMZKhiJ1g2bjzYgc4hUW6PusNBdX",
  "key18": "krLkBKruJDmcQ2gEBZNvLkabAD37Uf1HFPh42SHmfejqCgNLKruXrkirJvjyNRqd39aRHiUQkgQRo5CeDvFyXLV",
  "key19": "34Z87AwvMnQDDgintEmCD7Ks1YijXgC3CFhbpCjMRNSkGywawX7p7qHzs6nmKqii68qBkkLPHQjd7pRPZjeH3Byf",
  "key20": "3VB34hZhhbj96xGH5tbp99VcHseWYihMbje2zFWktuutmqVow6tkYkpa1G8YmfWGbDFmnUmETsnPUPEoPGL4YQw",
  "key21": "4GZNw6rgUpr7qoSommwsptXN1QdtLEDix8N4M4QW6xJYqeGM8VWsbi9au42V8M7SYxEm1ZbuA45YqpQQGvy7GEAJ",
  "key22": "3pcYYcueQDNMJ5ARvrmFUQRBUFSB4swmn9odh5mjuAL8YNd11V9tvKsVqrhST6PkJbvHj1Ft4Zua3bBcbne9xQUz",
  "key23": "2uR4CCS5x8jWFBZXcw3Gz4L2ZwRTCCgKBG7Mj8UUs911BbugPLx2nj8skAgFSaxX6cinXhpyWU8a8rjLe6tDdLdq",
  "key24": "576sLGzftTtLcecaQyzfrncnceivhPcPcmviF2LhtxaBiLV5JmR7q3yqqXC41PJhHsXuz79DSrcWCDgU6LUhjwx8",
  "key25": "71mFmMY1AmDyP7duST2FukPKCVgCdyj1rmBCBTfKHERNJRN8wAW2nRm29cEGVWPMEnPdig9KJRCEwVW1ctjr1hL",
  "key26": "5UPDA9ZagqGympsVDLGUuxFHuBSsUvct2ntXonPneoNQFNTv7ozGEoWLoiHxF322rC8RJXHGrypXT2Wq3DaFnNqV",
  "key27": "3X3q57reE5wmdrtzQqGbrRQZkTggLo4A7oACLPp5i3tJhocammr1aSVu8MUGaaUaN24HJVCPPDox4tTJrSCLx6Vg",
  "key28": "3yaocpAXqJcfeTi3RiyoyaHvuNCkUNpg6eJEGEZSvqai39jV1wMWb7m3MxcG5C4nPk3KxQJBJJS7mA7JEazRNb6Y",
  "key29": "4yyt1LuNMqp87DX1zzp3idTWsiaN2yj22iKgPovrKHb7AmNenfwTZ28y176Wfrgy1ZqHMr4fTLPMyR4yETttJAKe",
  "key30": "3DeYvQCz7PZBoMUiaggKnLM1dZigjsJJkzwC6qg5sGUbY7FJY1g2kNBskc81YX1ghBQk45aykLPJeK2pS19QgYR4",
  "key31": "67Q6p5kR4AwMNFGqkyn3SR4CfUsEzYzFvLXUUUL86dU1XemzDXhU1tfiwHfSzobCpy8WoC7FXHEhsfyUJUs644P9",
  "key32": "4ek9SKnxoZfHjVaYvErwcXgTBchyvpFvZnSLmmhvN392GBfqcpJpHTTuR9nNRXWn1Kr4aP8Rk92cyX8dkU6W1Cqh",
  "key33": "2hQv9od5zNPAMT92fmSRBTeCkQ9u2n27vxq6ZZyfGRRAuyZpqBRtNBLbCQ297VFC9kEKX2n3UkzU9rdayNNpUZNk",
  "key34": "4cmQWvn5K5xBiaYb8YPsayp2Xbgo9MoLxMSyeiDoyZHz4NtHQTCGR7X6Wu1CpY3dqhG792JT6y5mEutYhGsWCRit",
  "key35": "4MyNQWZEovUgh4RTyVnHcKPkbMYhjKEjfzfXYinxhBxFNqrb8KMQ3jWkvgEQcAqiBSiKnCwjkR9g9SZwVkgMKZ19",
  "key36": "4uxooBpcoNWM2ZVz9T8CQ9KKV32t63JLybnh4nG4dsq8qnx5UuE91xXr7JYT9KYVj8c7Ugv8KvMX2tKkjqoMrTc4",
  "key37": "39HZh3dVjScHVsSVGiCWGJk5trUg3eJ1eNB8DxL93LV8YFmtcDCk8oknxSMtsdZC9r8cqqVKBzBKcBVeNAwtWqT6"
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
