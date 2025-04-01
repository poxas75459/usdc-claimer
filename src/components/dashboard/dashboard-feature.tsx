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
    "SUZkuxrtQGc51keYJe2tE3XzKYmLyjc5AUaDMAJbawH3nmrVWC9hwE3BceFBoha7tyAaYTw4UEC8bConVEWCoyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39uLLRZeXoufR6YGQTkPh5xhjzfMDUTtfYKUU5vt1YQfacCm8Vf1Shaqyg4hHAxL1B8VEqTJYW5GL2VnytEfFFK1",
  "key1": "2dCAiAEyhKSFxifziKid2EBUqAhSJR7XE2iikWzAu6LFcvEvrYiamHoJhX7bX1GxoYGCuo5FuX5KzHcM9P3ZqKVd",
  "key2": "zZTiVf1boCK2YRGEMwYcVFpm1iX4m9BaHQ74W6RfUNTs1ZH9FHxQ9ignFHGTt9Vaqdp9mggb718fDqW2wXdL3rt",
  "key3": "4uNySi1mScLJHiLLWJa4Ve7N2rR2QsAH7RhhFtkuNbZ6irj59Zth3nMKkGxgp59c9j74cxCKfoBrfhsyE443u1SV",
  "key4": "PwM4ufRq3V6EKwkBSjAsHpt4bCTto85QAZBwvHKaTsJ6yiYKCN9swFihttz4KwBkkuoGhJ93dQt2a4NwqFbxKG2",
  "key5": "S81JMSrm6qdPFZ29FyesrCSz3rDhXFRsAkajtByS4nnMPdP8orXomMWUPrSsRVh4XMweR7C9vDct8pFdQVinEDi",
  "key6": "4mBsebgHBZxvVRF96iwiavEX8wKPjPDqqnGdqCQeiRU7eBGu3ka9GsBVZiwDY4AZRde4C35hjRYDaaervsWamm5N",
  "key7": "28jEkMviw3J19ya7XaZkx428svBASaDLjhfTeRQLDgKLTsZ27ks118DzxfYWjBA7pK8DYrrvjWAryzYUs2q5St5u",
  "key8": "2xyjhogy8kZot4LULp7gy7f31Xf8KKnGGx8wVcAPYDuzULg3q68MuT3JaSaqFzDniGRvRwmuEGMviVAyERZEAWru",
  "key9": "4dSKzViVs3UZJmHrkX9G6Xpc1of1nkx2CcJpgbZuJGJhcfinWqWigUxs4Qwzk8p6XEMzQRw6Wc757k9R8j96BCnk",
  "key10": "44iNHoZgesJGn5XQMT5UYhsqd1XptED4sggTtB7dbVyXLd7nDzHp3upFuxPHmZG4Fq4xLkRp7wrE1UZFbGcoFVXG",
  "key11": "2zCtcP5GaeHVR4wTUh4yPyt2SAKH13iLrSSV9JCXvcHXcGmiaFnb4xYhKKtyP6LfF9Et5dL6p4DKKoKwPw4PdLFN",
  "key12": "2aycjvtvJXEcFtPcRhnT8f4BWGYyYF9z5xHWiYJ9nMKmcMWnZrKdWZynD7LprCSnjALCWWAHyr8taA5oJV7Y3799",
  "key13": "qjL9nvVRk8v6xQpwghRDuaAmfApgtn9kjjw4jxncMEWhCm6712r8UVAqJcN7bZ7aif21pE52GpQg2Eux8yfDxGr",
  "key14": "3Cyq5iuh7guftyz9e1LPn4kbjQg5c9K2i3UozXxP8mJeF22U4JhNndDoSWyD6FranPyHFm1pmQL2seNZXSyLu4TF",
  "key15": "4Jt4R6T48Q2SJ4DCk4Z2EZp6vYKLZf1vZf3sHmg1JgLM5PZmoUf5DQX6NbUVPZcdsDfvtGpofs9BTeUyEfqBuGU1",
  "key16": "3BqRBzCFGiPFvW4jSmUi2qePioo5advgCtjGVq4PemkrUQDwesASEFe3G6nhnZ5SRoWFVLJDTgdGssMqozrEryP3",
  "key17": "2TfZLxZ4dbMvZwuR1fSz8uBJBGoafZm3N2uYn7vr7yaFsSTVioxCabD9tv5cQcL3mEvDYM1eRDjPmg9SbMcoskdm",
  "key18": "2fzkzaV6f6oRRZMQQatnoPiBCAY3Bk6LbZUtfsAXPmfrqBnQLfzRmMDMRPQSo2utecgmpQ9uXCdVEpGLNpAoZq64",
  "key19": "4R3EJzrsFiFuayZ5o55HwJrGynBmzGdeqdEBVgq1QYPc3Jz14M6q13uydj7NjzDmqTfYZzyJknpbvqq3gZHkjuHV",
  "key20": "4YkSpvBX3NSNWNPVPGgw7K7TsMT2GyLEnmMskHRgmutDFTv7R8FwbwEDUXQYwVaD9xDhQeFfBtXJb6QeQEzwAiLd",
  "key21": "4g5qEhwpzi4fqVLqaNi4naLSfmDXbNaj7pRQZD3Taf9uQzJmTTbun7QWfoyzRK7s2duydBF7v8Ymp28VZmFsGYVt",
  "key22": "49XT48oYxksb8wVBC1gQ6QCwNCc9sPwxjBxHx1eFZGpZpw3gb5MU8YMjwosmHvKQuv3ZtwAk6ohsUSezMmjhYAdc",
  "key23": "4r1Jv9XYm2mqsP8253pG78oks6innuLk8zk944sLVNDCy3XpLaxhQ7223dukhMXGtX1T39FMSZN3RTTYPoVrsyhU",
  "key24": "3TjY3AMJGHYrgFuTdxe8aH7LpyVQoCkkR2Jpynb4K2LTZksYB1EFTEeEVpKkByuiN5EnW1CrAKndYashCi9KswXS",
  "key25": "76j8u2jXY6T35gxzAfYpF3XQzsCaFHVXrBMkvPQXcZo67DQrvdDwsUBS9XoSCjhhBptU1QbMT5Wy33xuCB69sb4",
  "key26": "2wmEb1yjt5681kJfZymcVg3x78o5cgbRSyGVfdmxYyLnXXU21Y5QPi8eB7za18KY83qkpZnyTE2ADwKnDbqsz4Zm",
  "key27": "ptrd4ofYetYrpsFwgUxSybX97zHuHxZhPcFXFMc9DJruUthknEPvt48PWGddWQssQnw94nPMSP9B7ZMXcxq1eVq",
  "key28": "4Er9JTB2mB96Y7CPUrnVEbHpseeh1BZBUBkjrHZCMi8F8GD3sNRz2LrNAE8K44EmVz1r5jPjoMZAMsFXkc7RTfrW",
  "key29": "2X3rnyE2DwVhTJoC8Yj1fgdEHXn4tmj95x1ctrCFF2ceun5tM5iNuK2uugVSDKbLsWmLUA5JJew5RUScD48EYXvF",
  "key30": "4AGgpu2DJJvwKugByog9UTfcyxwHDKEh3se9DgknTXv8TnFoN88vx2UfGy3W8Qb3LUvo8nNuMRaorMwrANcBZync",
  "key31": "247Dgiec1BtxrPg4iHPb5PHM23u7EJo76FtJyfDPdvSp2fHARvtByHsYWZK8zdiUgckx8rqP4UqCmv9ww8NEMZZw",
  "key32": "4x2jzQFf2gsggXTGsexcGNVoBGwV1eQv85JzeHMr28xBkF2bE6vqP2T5PMaNWcpW56CvsTDiNVQJ7tsagDpKF6ff",
  "key33": "3s8DuqnX5Pk4reUaeFhtmrgyGgPhXD6t2NG5ZADycrCoLoapWNQrGFJ5UHku84zKs1A8GkWr5C2wS6PTYu6TRmHt",
  "key34": "2eiDeEbdBzMpbNJzoEmMw7dszkUBT19Vj55J6Ta85N3g1TcmyV8BtEUJKzfrUyzhaMgbzTfQqLJ2EYyyt41yNPPG",
  "key35": "57r9UtRGPMemWhJsPcNDk6cgC5E5vj4m71LfB9CHaKDcsw18d2uVesyKe4VVfkuXw2R1iSDTmpgNhjaAnCrftRa7",
  "key36": "3jJtEERSwLE4zEGugDCt9KyYHNynbNZiVPLKjDGAp9QetDUh9bKh1jzLhdhvUB3sGaoYdS9QfS3sC4PKXrUGvMhK",
  "key37": "5NKvgQGtvcBVQLEaww4LF5UT9tiiVtAVnaf1ixx7D6Hvjun5vqPt56q5vxuypXv7hPXVfhmvYPHnBaKZQpeo5hvi",
  "key38": "31iTSAViebRe96pA86LKonk7PTEDApfk8A4BBHwG57xHFfNe5kzabLegfd2rvggeiuTxixJKE46Utyj3rgBBZtEP",
  "key39": "3TZevS4hkVwx4bb8fVMdpjKhpi1MpJUXJ3Nn9ZMP4b5Kn2VKRcfDrVw7Gv4sxmnfhCRUk5p9FcpoA4J5tfJNaamD",
  "key40": "2M2ocGLP9cvsTpf78bifKSQdbNJexvVNMesstYGYebw9vpkMJwZqR3HpBgbcXi56cNd7giQPUfrnaJqUsJohPthm"
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
