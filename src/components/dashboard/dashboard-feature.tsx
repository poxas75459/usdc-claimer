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
    "NfNayGpY8jLjxB88zXVR835BGNbvP8QFHCFxcR2yukuWXzEGbcU7iWmUXBidm5xgRbCCw8odtCvNyw6k3kTgX6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QxkhHVeEA1EFZ2DocKCaeXZbLRkoiu11e8RkNPBQKxkxmDrAhp7iz9hH9Tj6RTxzGp6tULWd6i8FnFvj3j5kFsk",
  "key1": "52o1o6u4QEAznEXaZExADDuECVkHg7B1xoJWQpdcrto6uxHhCk2HFF7wYwQQ2nw611nG6aujgoKVmmfwarVJAhDu",
  "key2": "51XiogLB8EFcXrLGMjGxasYGcmPmrZcqxUaadSPhGNozAYcpEw5HPQJygsSC8ZwvShAjsH8pqKBTw4cqqdyGwLhg",
  "key3": "psSQuj5gKhMQvKFpUinMtdcytLqqmfXdWf4Rcve4xk8SSmxFKFVEgQgkQPPgMBzS5G88L7rH82yG9ZodeubwYqj",
  "key4": "3UTMj3CfzyM4RKy1rMs9eFBYpZcQqFDjGk7zdUSLH2gCQ7vXR4RBrK4YXWUX1HtPcttDW2TKmTfJiF6782xkqYfo",
  "key5": "4U7C4UqfwofXxbAAssgoJjoqCcF11oAgbvX771Af5BAUuUsaWfp5jiEow2WmXPECzY6xCSZMVNVAi7VCY6iWr664",
  "key6": "4CqR2nyVctdXX8W3dJZMA7ceGhtcaN6BsFE5gDG6LerzabqfGwtUmER74TgiuwAXg7k6PjPG6dX5m3pi6uj8FtCg",
  "key7": "3V89VWzHVJXGURhBC7AezWps5jJ97czwUzEqnSQMNqTfe5c3hJupv4pXXCe59GLvJnaAigTxbMM3Aay2eNw9hR7C",
  "key8": "5e2NbDKimSFs46D7Vsj9WS5t1yH4Fu7YfSnfiFfHHVyfuQCir5WzZedKmGtFtZZzJNT87wdYqzmcD96VDq7Fp9A9",
  "key9": "3EYWPXCzY52qhbrKh7z1udEMVbnKkehc4uhdjSustZAgKs5dmhnR27RujeB7ys35SDsPCahXF7ZuU4pngcoPj4Ac",
  "key10": "4YbPNogmHEgn1cYBsdzbF7pDwLfW4dTJyrXp35KCFc7YwcrBiaQf8d31sxoMpzfpywXbXDUiypNKFhQNkgX3J4EA",
  "key11": "3BP1cARFq25CTtzEMJfHs6B4uP5aSLWUzYkEsZAqnGUzNSQHAtx2aCdWxeeV2yXYq4ACvjg6rPGgEFMtJL7bwuv1",
  "key12": "4nPU8Br4HxkBhsdbMFfPyL6BP95a7SQ1qtG36k3ex3RswP4proY8TmeBEmepncEem1J6nkQ8mChg9TcNrcGwk2yn",
  "key13": "MxsSHhDFnW9da7rvFW2K2a9rfwJXCDNCsimpF7tH8LxeRxXCp2eXyUrdK8qQ6xgom6QkqYJcBR8NTFPmJMJj7cq",
  "key14": "5E3qCUp6yvEPRSyXEHP19ASRpWvE8VoHs16ug4789ix7fzfYQYFTxHvhWHUyCmnotcDptMpmxuehr6aoCTfxJ8hE",
  "key15": "49KqGGrP7fUDvRgq61gJVwFHPULRvcc3hRqhbKXeaX9mGvgQmHMs7RGuZLh8bAkprePP4tdqdF6Qun2vDNb7Fako",
  "key16": "3biYJ4tGk8A58zxYhYPrLNHdbGUS25Tvf4tAJuWq4Df17x7xEm9Fq4pekNgeueNQYZMZVZLr9dd9GGvdnjbbKSp",
  "key17": "cWJMpG8WCWhBiHy5Zo9BwoqDQwCKhQQCWF2zvyLVQpos5aWcNwioSuDyLZ5KoNoALbbc7RKsLTNhixF7Uetoimg",
  "key18": "4zJkytNGkCdhAWjYMS3AhXDHHLnfSMWc8DuhexbPv4wwRYauM6w7pysLuzEAAUJDnhSCqJexgfYY8yekog5ZKhtS",
  "key19": "5M3VKscaG6Eqfbt5De7F6f3Hmk1oZAWWf9P8P3YY6QHLgiyiGYS58m248aWA6WCEs1bABVvqXWFVnx5tHLSWbhg7",
  "key20": "4v1aBtUPgaNPkVdvv4zUe9jJiztkEG3UARfuf17ZYcAALAMSNGMNsgSbduPbWBcjQxb7xQBH6mg2Uxp3VtpEhnpU",
  "key21": "2ApTwxS7tMHBECxRnzynQQymcbatRGC7ekMu46fhzDJGA6F9L6VEkgnqYm5zXnJ7fWMNCkHzEM6annd5LmE5KoQv",
  "key22": "3b7331ptJebNGWmadwyrxAM3XjNberSbw699MkKtdbLyj1QX8fx4ufiTVE8ZbxseJGPy9y41RZJB9E7JvrkjDG3h",
  "key23": "2wVD8Q5PrNvt1Kf7dwKwWXpJKtkejsjtBGGH1MHFzx15hmteqtfKuoVaXr3qXZaGJnbYNHAEQppmbrniwg5ADYpB",
  "key24": "FaJnh1qrXyipfnsnEFMSd5zeWbfPcW8RfdKouhbiHMWp5W5DxcPKYpuuJ45g1PgXwBo6EKZdwb9d9pDJuSLcSh5",
  "key25": "4D27zSNNzhWaSfs2ptMdxxnQb8xLP7QdHHXZfBhV8BmiNA7A65uMXsMMwVWQmQcfy7s6RfQ5Zv95aBCy6mzvqmvU",
  "key26": "MQd2LaNcPQUMPBRTu2csD6rVw1vMzM5snEvLBYyr6SUXAXyUvmXYLSSsgPXE1rwif4GeHUZ5VMXiPPwyoXTTDF9",
  "key27": "233uB2eKG3NqDPf4oeYyuA22nsLRrpTd2L8u8GcuaU3N71Gb58JtSsPuRzZUcKQLWipepCHA5d9D1Yqje45zYbkV",
  "key28": "4oUzyRdzF2xcwW5odRzh99XD1LCLcxz6asqqHNLL2KVJu6MyuHCVvBvWwj3u3V6rRfuDcEe1DymrysKWcsnhNCUU",
  "key29": "4KzxcXUdtWcUEABcXsm5NFWYvgn5sR9XcSURQ9CRwopw9y1FjvSvo5ccU2V1pLWML3oYzMs46h7tnLBogGx2AiTZ",
  "key30": "5wKCEtDc5HaPQBxJHM7tCsezhwVRagMK4r2kAsKThyt1WdRyFqRAtRDXuoGVpJS4MuyQzhRBmfvNdsECRfQihcGx",
  "key31": "L5yjMmorNpubG1aJhUCDnuSUeaaKFEPGnRno2qEg7b61bv9dY1Ad5me6MTgfGEZJBnCTPa7gHAHrEqT1cKj6A4F",
  "key32": "2wUAgfbJU2hkRfgSzr7AJYXgPMUwGt9tUTyQ1GvKRGi2MPV9DF3c8C9VneQK5WJb5jRJjBTnusTx3bhHUhLAC3JY",
  "key33": "UgCsi9uhjnTwgLbSpoVzY5iLcwpRmCrG7MB4243ogVQLefSTzfrne9Mtd6RUfMFuZ9RaEEuABXMzmp6oTmSbrmT",
  "key34": "4UvQdiqYNNnQiL5b29s3fJeiBT7NS1XFrqZYn1JqPhpdQkkgEZLe82AEJiWvTvbtCYMUtfXWC1bymdiGGbyezfMD",
  "key35": "CN21Khm8CwU54cT7KBKsY44S5s9cQ3CUY9Pyv1DjiPpKmkDoos8YUmUG4NKC2AV5fPArUzVV135JxFR5DaqukV3",
  "key36": "2QBPBDN6mpzZtTL7erHoehD464ToKBuH4WS8b5vryTf1DENqksqFLuyqvhYen8awCHxLWEX31XSudK7sxuueF8Tc",
  "key37": "33ky7XvexaypYnT2epkCSCnY2QpBiT3Vpuej9aYumbUg7LLQ9EV6L9EAKcC1y7HFWQdC3AxmYWrBjNknU4gvt2Z9",
  "key38": "32Ns1uKwr9BibFtFB2isg2VqFzpgoro8BcQ7D66c1oRu3jaXrdKyaBQvXxcgwRVVTK1xEDcX8rfzuXGKXJtUQBFa",
  "key39": "3RfyM4R27jT6PWW55MVeHfn2Zi1v3pV51Ro9KJgRNMnKEhsvqeLQZ8WDTcNYpTRzE1ccP6XavJ2TSkH16RDBC8Yz",
  "key40": "5sTzU8ihQVEY1dsXtTdCdfmSFvVBdq7DdTFqGgBv1M8hkPic69AbXjGr1RWPKwirggsCdSQWJvhHfgDie3uSpL1N",
  "key41": "2z5RwC54Xbisu89AaRNLsyFVacdbJvYVSUVmjW7i8tzJRSxKe2YuYhC8yadeYXCiafiko9xjbVAW54HTE4H7pQmA",
  "key42": "2KoJUr9wGjFof5GiVr1uMHmSWZWo5w4kpvt6pKx7kzkvCxNX5P6xkSBE7R9nY7Gkn3Mz9oYPHUFFZjpTXh7s3n8g",
  "key43": "5PQdjeSbsQBLPfEvxP9QL9Np9JLFSLMfezHSgyQeahkKeUhtYTo4ncWU5iJdqeHWBYRaH7bGHfSNBTgc2LxyAbR",
  "key44": "2xiBVGRuHhE8Yz3fKHnuCXXPkQCTKZ7RCdnKDh6iD82oC2nqodGBf8UNRaSvSSd4XLgdVXj6jxhKNa63MdE8JRAz",
  "key45": "5iSttZWKQ7CQ17Cek1zN8hziyRVT9wnGGsSJ5Yu4txfWfn56PmPR88Mhd1tqnEqtKxSj86uDo5QKPmPANMC2ZJgb",
  "key46": "xieCiyuV8GvMSLPYHjW1gKRU629ijuY6ZmkuBn7QmEvotivHQ5AHfbQs1NRaoqDi4ithNpuNKMZ2y4aEJdpySdX",
  "key47": "3TyLqHzujQUNEpjTmYUjR3go1q2b1nRH3i7tebgbAJrChCHPpK12jkPTjpisCDUkuDfHMqZWWoRNSA6MJjMDpooX"
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
