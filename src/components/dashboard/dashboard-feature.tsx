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
    "2L6bcNjRTBrGA2kaaWeag2RYWQHqCJnFcLjc5cWKa9d87zCCGv4KkjW39pjvA9mjpqQKbN5PWVC4FmTbTHmuyLpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hWV6xfeXwSQBgfhN8x5MKqqQ4PbYoHCytnLFxApyDt9GtfafXMPaHHVs5UdD49C6GAzF8UF2dAQiUjcWcbG8prt",
  "key1": "3R55EdcoiHUx9TvvCA6oZVScqzTPNRS5iziHBmBsxkyEjRmdozbKdGQgCnJhSQBF1cDPu4sHBmbK14RqMRobr3h1",
  "key2": "2uKfFYoDemPs79tj9r8LXme4kCYHSRhFsNbWvRSR8MWTtKW1zYTsYf3K9WGqh6aGZSduUKWSqzqpato6L5nxg5Mx",
  "key3": "2eowbvZWgBnARgAGTBTLDejJTS5MkD2vsqnx2D1FEMEnVWRHXmoTxxuP6Q7tTdw2e3CCkbUjTaBw9AdtySjGXimc",
  "key4": "4cPe2yWejwkqAJuogdbQQ73BNbaAuFKULA3G1gUdrBDG129xh8Y63d26i6PbujWSbyutaVBmaZXzZToht4acE4wb",
  "key5": "3H44gndePx5UQi155bSLoxM8PAZrspKTYcZKAAnEWHvAdis8U5iRuGZd2DHj6qXJC8A7qrKPwn1izzD4zS9Co98Y",
  "key6": "4omwp88a1GSbERcohW4e7GbpeVCYsX6PkvvHBYKWdtPQ328w7B1pi5hpxyf7K2XCDEyUNLPptFFUY9Y2srFjHM6e",
  "key7": "53awb4RTqnK8YuSmouFUoC5MrYs7z1HuXDU1XEPcsBHidCWnsL1UyPjeMfKSJri99vB1RPEoLXzXNpjn4Nwiph6G",
  "key8": "4QNYkZHcWqgoxYz1ZZfZG1WsnjEX3fELKpXXdp2Gp7gMkzTyx76rvPKK4H9DnqYUWpjTn18Kc5W32PrJZbQ4zPs4",
  "key9": "4KcTCVbCd7xBz3M1zvqnwGQh9Yk765Tukitd9UT3weKjLdLg9FLQgyW6Dgk8cAZy68pZTKoV9sFg8BKspPpoxPWd",
  "key10": "NhA99FTT9Ktdv4qbEALBicUoqXCqpHqKyvVHiKd6e9LWd4mozHLSc524tqynirNB15i51y3woh1uSBKUuTja88P",
  "key11": "rY7gwNDAU1hGULCGyzgE8MStvjBNLHjNvvPYpEueSHUy1VRkyHw5DuqsrzC982FTCs764HaXLcJn4r5eVnttu1G",
  "key12": "38Qz5x8aw1gvHgSWmt3ftLJKzUrLoMseHAKcwVko3uL3BZcWg1gAszjK1WTbg5Nsa5emPR1j1DWmDA8sevFccKYF",
  "key13": "5K9XZGKg6Cnf4tNXS8pU5VsjRKLNpUYMJumDcQj7JL9V9oxp6GxvP9Xkz19SCCFgJ9VqRrVNe8tKxMtXppbyai9x",
  "key14": "5JeqErduv94SYjqyUCrRb7yW4LiUCvE2hrApbT8qLjFZdUVDdEA2oMRJQmVcPRKN8ZQDRTWNjZ5yDbGd4TQEK3qi",
  "key15": "3KcJHr3iGTXtiTBH2mfwZ6CozWPeDCnPJkxvjhc9gGdsZ6k9MjNPJwrkJhbbnLq3dJAEK2YydFTYmyhTBddsQyJf",
  "key16": "5yZzgN5eSzQWyaYUsGYWDxuboawR6a5y7vsTSjDga8FPdAwPeGTkuzAiTgfP7PR43q95eCDXgEPEegcJxpdsqZEp",
  "key17": "4koR9pM6VaFbDW6UUnkDtN5DZW11gMTY94jns6zEuvfDbvqEhF2n8uNK2NF1CH24DXwWaUazJ1DoaFuF9Xa7tTqD",
  "key18": "4Au8uQSAoSu9oFwNhg2hzMjLvshNmfFWk55Z1cxedi2SyVSbfKUJxr3Ufwi3jX4qc85cMNcix7tUTbVTJL5ppduJ",
  "key19": "3sQMMSn74u7FY92GyDxPEMnZ5FQX729yXohY1YMgDYgwxZYDkXPsQdx18hzm8Mm6wDiLb4mTsCNQuTHe25q4mZBN",
  "key20": "2nRDorvBVNsda8HUh4AJmPwXv8tRvwadpJUpvnX5FQ5wWAn2nr8GDVCSyEXnC7iGBsxqaPLieNjLRH2yiifRgyvL",
  "key21": "3W6NPhCNwbsAa4qBNF9GwjU4LAdG6j8B9KVpF2wBPvUgTRGtSeSfmnoDi6gMXLavxVxqpQ5GWB2iGPVGEVMHikhH",
  "key22": "41WcECFaADJ5Eu9KjXsAh3EfQFh53tZX96jTVnszCQyyYGSMtQ8NjpVLLbfqVxvMjQLv8j2fXT9fwiFvFRtmVQDG",
  "key23": "2ahWEVb5LpbcvbLRMnSeKN49FaZwLhLXunJbCNQKN7JG9hAUTRhbDCW4xFwoVPFMMpVeiY3KcmCR9d8q9jD1C3mZ",
  "key24": "2M71i6Ms4un9oENjS7rMXrmR38zkkPVKMCn9V5t7tHFz7mqcqEKqw9XDKub2KTo9E7PQhs5umeJHfAx7NsSwhLMy",
  "key25": "5xd5SgrE9hMjc1HwC9s6NHtNPPEJ5eMGPXhceSUbavmUrPfTWNETK4ZdhbUFvXv7ZPowx7YcQzdmkVKAUf6956oJ",
  "key26": "2PUhCR53upuYfej3MpEGPb7U7KKy5wPDU7iWVN1i59p6S1LWC7FXcPwQAYGzh42rg8QJ2M3DUjFWtSjahMC6y75P",
  "key27": "2SeKj5rijVLkGJZVTsrbeysNTE58DYkYoem46TYPPHGASbwUSgRcNG1CHJJrxXtF3qMXP8WwdT7nm5m7QHXhFjaH",
  "key28": "4Wa41YzquzJhiW7mfXt1cGZRGrbpRhpX23DG6ZmzDt7hVf1KNn4qXqG7p4KhzgfhQwEGZ28HXEtpagDxXuPiVRqe",
  "key29": "4eivcgMjP9hhFagZF5e1UnKw8YgSLCcTLY6SsgK9sbjKmKxJPWfmAH3DLLvQfkygXVbDVM3YvUkxXHvHHozVrfFb",
  "key30": "59kmBEEfhjJQQ91jneSwW7VkftouJxLj9HvwwNS1vMBUzF1EaRnRJaSC4knuaUuKiPmfBp94mJN7LTRMJVPAFRaA",
  "key31": "kq78opQBNYB75vXXeHbgD7ZUDvucnZZVG6cp3UjC6sWREcmVNVdq9ayWTWo5oDhaSSxj61v9GKbskoqteYjY66z",
  "key32": "yX7pZUEqPvBSqXEGVYm7hzybKa5ifu8oHcNFxsV8MRz8UjK7ZUbLNMfzXFgh1g3dzgtDjxPHVRSS7zmnt6KzgsG",
  "key33": "3eSTStB3j3VhdNuC4nS8RSR6dkUbQnThmsRtJgiQJShUnCNkwuACTDt1KLfmBhmAzSovUDBAuYeHXXSZCAnqDBuR",
  "key34": "4d4QpABmyHJpefdJapN7wLqyjBjXqq1DiDKGF97aS1sjZyr7VtShdKJGxzumM9D15basAorEEVfKbemFB3MxcL1U",
  "key35": "4U73FMSKMES52Kx7G4ux7LbFweKXcbiEGtfFnsbg76uZFuLzVqvjqZ3Kv2DU41ngeopYEZF2EfZhAHRoxTkL1MmD",
  "key36": "Yc6seAmxx6nNsoWH3toaqBFrzZxArxSkwDLCyfWx9PLFLuTWFSYKnB5BYrEz4H36q4Gtga4oV71EQbhhHZsoMY8",
  "key37": "maRpHMQrc4ZXZxHRWz4K3oCWpMazGKoTqwGw1knPYLYJukTnxbvU9jMRjX4yTKy3C3BJzCshFSEKqSLZCFZfpbJ",
  "key38": "EHGy99mYW2LpvTfJ3HY3iv34oDQ5RNx5wa4mnyJP9vUEuGoguyefGfX21TfvL3r2nimNAY5njkWvWUhJiVcWYB2",
  "key39": "ckb44ycMVdFWPRWsmyWePy1TPcVjjhp6E4tnahSuT6F9b5P1953uCu61syEnQ9Q2G1BCr77gCuq2c9xQJtqH7Uj",
  "key40": "5Fv1MKdjcwdwRWt1YHcwW6AqRVyboweVUoKWQGWQX4YVqEApQNiwG28rLChu34P86JXLBG7wb3d48PzXiCSgpekR",
  "key41": "3BxenNRYfweGAjjXKSTpXqgystJFnwzxFYZkFhhjrrx3o2eWeS3KHghS7549UDfHbuG4FqVLetjFBMnRtTEcyyC6",
  "key42": "b1ysD6sAhwY8kV3N7JmbSCWhYTyRmS83KzjnEKSmgU7TNQod7JpgAGFiTcsKBuBDfXeYgXH62bbvpj3z8jJpQA8"
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
