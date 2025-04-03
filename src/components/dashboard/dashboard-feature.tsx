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
    "5PAZzGE1tuE2z8eChLCyEF7HZT4tviQ5yc3WD5PG1pdEX2dihXycboYpj4AXFFyhD9fi7Ts4zPRvzEU1DBE4kzz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B4ANGsWacT3iLfdcmTmGjBYCuAmk8BWpJhGm1dFMxcNw3cK16Li4Un7R8KUEtzs8yUKcdBcyT6VY9aw9EgfLKv6",
  "key1": "4zTC1ZyFpJnS6sBetmz38Y6z9LkeBqLhhNC5TjQRzcPwtAmWdBkeuUcVeW8VeZTF7hkbWwmZzBJyn84zj4NXWNBp",
  "key2": "4QmyxgAeh4XuRp3g7TjAxhDvW6KhZZpfmQRBX28Fx6RqPPGSZGRpAxetnmCFuCwJRcVUvJgGwu8AUNZiQxGCTTYn",
  "key3": "5Bh9TkpwQ1Msmh5GmohdSjE4p8nTN7v13aEbPsM9NnsqqPLvvaNExxpHAMsWX8kbd1c6MUCyx6VoWJfF2SyeA8Js",
  "key4": "2zGKChMg1jThFF9VrfxfYNgkYdFySdHBLarwmbds1pVyE8sNowvSdvk4qzXhhhiZixscYmHc9xMTKSRyLPZcTGPM",
  "key5": "yVeY2wvrMTYj5rjnbn7ANjxvdpdptV2auQ9PKc9TFMeMV9itgWEogRcSSBr431WLacuo5cU2my9rUQd4p1Ri1pz",
  "key6": "4qdKhrX1RgVYyQGTnnnmV2QkzDfi8HfnEH2hqC7sAHzZrKRxs2NiC6T1gF69jerYTh1pVCZLWLnNFeuJVh64Qubi",
  "key7": "2Dn2tWE2sJEfLP2zm1LWbG9TxxqbRe1uqbmf1sHrX9rmHsH3KvEqWjpCnL7X2PyN7eBPUUJgMM1EspUkj6bP2FQT",
  "key8": "4q8yexyxCZdvgV7f3juroRmCDo4V2YyzyWpRTBcmuH8QaMMfvnRSvUtx3zrrcAr8o4CYaux7ZmC87QM2ddm2SzFy",
  "key9": "u7Mc1cashLJm5LVy75jRNoB1gBfwv4LWH6Ceh1dicd8NvsKHpzyKka8Zstvi8J5DjyNtV5DLtA5DeCK6dFcGP8c",
  "key10": "2XVcY7SAFBRE4xuXgC1SKSNEo2wQfhPC7GHGCq1Z9DE7qR168scfh1fjrd5J3LgheczkgQzCn8qBmQH3fCantkux",
  "key11": "4sXdVZxJrvkxbVwnCwnqgun2Bxt42n5RyTdqJxvJxvka6WxKsFtg4ZyCALzAa2WhSaE9LnXscPmQhXdBDJgoBUNW",
  "key12": "3FdxofC5kJHEmx4pwKn72d4C2Qw4WxuRjLbP7ZGhhXDstxiYVBQ4K7MrWgMoxTBPaSYXX14zgpvGUNJuYShCzwya",
  "key13": "3j8kttctMxhG4d7jZxAUeTKTJQFynaJdViSKXP7juruQgDEZ7hyXu2KYjDYCD4gMxZWMqYf89dYRzhZwekmGUd3k",
  "key14": "4tbFp1DTmVekDHwdUTp21F32Dw8b3YhngHbVibUXs83EavEgTeRxbvSiSf8fJL8JFUbCH1nnzjokftq21KPKWrxZ",
  "key15": "27gkXcn4s2aZZcrJpUgmtBPXAQmBHZpEdyMxMUf53oBievTLruB7Zy1q3SYH59eYxGFX2KHhGjgmUhSRTPexgou5",
  "key16": "36NUK8VbcyeFeV9RdK2uJ6JbfLHDUAsg1HcMvZMxmNxJ96xP6Vg4u7Rz6EQHhFB7cnT7tT8StA1bS5AN9KhsQ1E4",
  "key17": "bbeYBLmPpBCKNgAQkUsP3GVPYHMEJ37xWqsxVCsTTUAUgjEyfLBcKr8hG1g7FVMoj24DWZ7eNDMPPuMvx6t6qAh",
  "key18": "4cocDRP2igWf1z4SHTJDu1GR5nw4gy1rwQm1sbmECknQuinAwHaibmuCpkPKuEqsNK64eDmCg4rozhnFhHRLZNuy",
  "key19": "2LNkFKVVHcPVnWVrtqhJy3MhX5kZp5kC3gtJoe4eoajr5v1XR17snuhoe2Hc7qGhkmdDiv2WrSvJ47qgGeTRBFZZ",
  "key20": "2dcQvpYBTcMejKvmKL8zgKuAdwkgwBu8cHdaCMTPCz6jMMPCjneWDa7HqNW1cTjrvRoxRapVM4o4z8T1nSptrXv5",
  "key21": "Dy5snrLmQoJYNDbk3szV8oQmWEx2K57WqcXPQQ9L2JhidSZEx4Z6wcLSGu9MJFNzAf7w2mbzM7wJUFe27cmAPNn",
  "key22": "5mPGYXPSzU7piMecoSSXPx6DEVV2GnaJMBDfcfJYb2PnhrfWZi4NkBT8WbR2iNBYWfqHamFHQynMPjJ2PuDPRPLg",
  "key23": "5pazZc5mr7HL5zrRnVfmBP2itVhaiUJqYUw5LwWFLDNzFuPKUNLrhoSY3hWbRQKSsFcx9h9vrErJpzYt9sAhhgyi",
  "key24": "2swPMAQKC6zHz5LKj23AyauTTCzBYoNSwKomjvkoFLDGBmmPcGwr4K2sAeTF45qUHmajwxXLzD7Rrm3N7yiGD5wS",
  "key25": "5sHbJJR4dnYkuetg98PDXbrAB8bJ4bvFAfL6MQD8AryqvvfVSBsWZmQNWFzoDUvd3TTcwZDivRzbqGToKMyBNdhd",
  "key26": "5LPmuC7bfD7X1g8D6E5AUvYRLQKyFwX9zMpAjxeCn7wWT4uomf7cFAevKzCJTUgb3r8JqVYn8sGtadxyeWTvytsX",
  "key27": "3aPenkRjGsomQYTYEkbDNJd5QNoHs39XrkmzBnup6fGUXzBFwXni98SUMqDhq1yoZk2oxNQ71wbt3AtJ9GjFExip",
  "key28": "3WdXESmX1ZyUiqyXQuf9bk4RdgkMSqBHd2YjGicrf6Aght2Yj4dWgYvgkcS3vm7ihXHeLVB8pCU1W7Mq7qXJnkeb",
  "key29": "jZ9tKvtocQBvN1QZ6r5zWxaJJKZTaWN7meoACvBrJ8d9MZWbpzwn9nhRJAjrneh62tVcxKJhKDYCJAYfnUbgqPE",
  "key30": "2M2BCw3HRJ7ERZ6z1n2D9YJUELEnDqHJfjgxGv3trsBETGNSdS4ZScn6L4ypDTFzC6PXcjpKM3iAV5eWaeQTCdQN",
  "key31": "4171DzQnLNNVYxyVMDgbPSNBX7n9d8rnsG4oiQV2Uo5x1RE4rPbaAhHvSbPWPSaQ2Eqdp7pbsZcDtLuQHDxgVXap",
  "key32": "2r3Ssh44yhfZJRsV8oXFuLsZHdKp2x3g6f2sFwYHXNL5igvs3dqwip438WR5nXaLEPtxAQjqZ2FMKhiMm5V1uQ8P",
  "key33": "3skbP2JZHTY9nDxNG1cViJjQBih3ZiA9KSx3gfERj2XCo1mPVXASpCjMfvXMbks8t92ydafq3suXJcHbZqVGBY9e",
  "key34": "3rG5q3FpFF2MU92C5KMgfX8xYodeVy1S5h25YQje4kkWXJ8Q8R5j8WY6pMM3JFk5bVaHBEnwG8vjns8ZrfFJdPGs",
  "key35": "4NhipYkQ84CMKjkGKyhQJbFqcyHkXKMXAyXdhAmvdGV3PJJWgA9bnH6ntycHjek8TzteePAdAQuhusQ46sPaCLso",
  "key36": "2pFK4uvJpHaTxcXmirJ8kHXqbBLqzZQeSM1NFYJfpSHSZYTU1YbNcdrQS4nGhCsgE4Ay4j4E4mJ8F7Z7q6kmJ3Cw",
  "key37": "3bE3cViGQEoqNisXMDy14nuKkPkwHB3GnRuRtrc2BZS6KTSYcsDe2jgJ1NjUWgMxu3ykYNvkomXi1uBTmN5nbbS3",
  "key38": "3EfnrziFmqJn4C1q5BrJLnC8Rgtqa1WvnZsMHXa4jENJhffeXUpDGqxps7KEak5vNimwoPc1HBmSFKaorzCgv5DA",
  "key39": "2G2zwARoUedTEhmWNHbcoNDgqtv17AXkUMg8skpwVzm7Lsqh3juGcMUFJnLTjHzVwZ89pin1nuT9khUoerbbpwaX",
  "key40": "2wiqeGw7mWCnEVS3u3hD4EoV664zESYT8ZRwi5QvkKrZ5ztqQvdxQcWcEEHeL9hGAM5Szy74dCAMRTP7ckqkmTVn",
  "key41": "2yQ8jUFs9Gdu11uhg4pxHp6PWzBo5Y8wKU8AoWay7Y5S1YCnHtNwY68W1EzA2c5sLeD1mJbcpmrcqFCJaTS2qVyq",
  "key42": "v7cAc1PSTAAE8KAAfrnLC4JxwdvckCuHuqWGfcpxM8A2arrKXwtSRx4RPgq93vgeejvPNq7nx5QcLQiZ2Ug3iUw",
  "key43": "2qrViMYQEMqLEvm7VjTPtsKNUot6RYCqAZF2uHLoksvkhmUcqCTTqTiLJF5R8eZnaLkksCPefYTFX3rmKpaP1kyo",
  "key44": "2sbMJW2Bqu5sqYxsBj7gTurEsMmomEqp2FfJDzf5p8WetP27EmPVVTsq2dVm5JwuZHqc2z93v2v1sppejMfFBhti",
  "key45": "w4kVybzGFgsp9KkFXaRDdpuhvB4JQ2mHXLc2w9gg2A8tKYaoUVem6D8ncLXhPRyqjUCc2dAfYaiUGrJjWQYgeeG"
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
