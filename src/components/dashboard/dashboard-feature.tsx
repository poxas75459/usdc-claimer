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
    "QcSm9bh3hfFZ4kY4aa73SbxDBvqAvKqGLnYrnMnv2PyKyZWsT3FBsQn4k9sv2Xb5iADAn73EwtTepxViSjFr12o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LnaM1K7HowYW82x213tfgba8Q7Q4cipa6NiFqdJvnPwRA8x9xAj4j4UcuAxbYVmguVyWjBZ4QweaFDSD921fNc9",
  "key1": "51UVH1RKmk9Fk4R42aXBgKZpN8iELVvWntYJS6x4PYe3wc74nqGKB2jJEXYSXUV4xMFq6p2SCsKyp97G8p4bZ4M",
  "key2": "KZzbqL4h7zZaqAbvkf6iUK6zB3f8zsr67j4x7m62m84XeSvxjpcbFTNaqgWQY1WnZiPLMovAEZdZ4iMxxody9oW",
  "key3": "4P4VKtcQkf9YFhoZbs5q7SXtNppLrxZFBZSY4aPRGJYkzpuKhDQFeM5o4oqRnsu9qHVQTejToFo4pRK717wF7WGG",
  "key4": "vdN1X8KkZ6xQotzcoQurU2KBrQm12PoSszsEHjnci8sr8v6o8Zu9EXQKbHJF5wENgeaKVZjAUTcrnvCHJk3t6o8",
  "key5": "5GEertQqFwkfGZQJEwNcbkWapXTSUCvmFPixzKoX5NrhWcsQYQKmvMcbv3nRsCwsq9a4Goo7NtGvBSqit8BbvTKy",
  "key6": "5bc79vmkhHAByRWamLyRK6e9rpUBEDTJAtxE1JJCvmMF5Hn28UhfR3gQtLnvB4LZ3N72fkMcWFEBS3DXJDPVNg5d",
  "key7": "54ERsXZy2gZDuUWSNB8jNVPTEA3LLsvpxfPBN2MSZA4QD5FTzEeyjzahvit48jEmy5XBzPn1pMpFiyyKB4s11XXw",
  "key8": "3sW1D1ydT1UHE4hZ68uVxbNmhoinNFjdMkte8xyMhyFvmGnFjj9Lc47b6mF7DKtf83oqoGTUohwFJ1JhhWCtEJ2o",
  "key9": "5CTGGnMeruhkFakoPHi6NU6H8kF3LzGYF3JETXWmAgtutneYjHiutbWVAoA8YMALNkwuGnwnWztUXjKbkGbCP9GJ",
  "key10": "43kHiVV1ugdn3X6SZ14K4HCq9Ss51VNmuRqwDVs72tg5gdbkSTHcS8U9oX2SZ8RUwSLj1i7NcBHS49cp8jECrsoW",
  "key11": "S3TCtqAvrEHVEi58nkf5WXgG4dBN9KrDxQZUNrhqAoMmgFdcN4LmyrXFo67iJggvE5pkCXWXG6ABigGZT7pRhUV",
  "key12": "3xQtjki9898knG3HxE8RupocrmPaypdxsZoYKYnkr2XKLB37LjLbv4aaxDuLRp1ut3fseuB2RzyqjYyXJsUKKd4H",
  "key13": "48oKxBJ5xaFnvCmS9JNfeGJZJkggNU87TV2L4LSAvztehDayMKTWqkaUshCQk8uMeNrRjZKyV2nGGgswBYZT4ut1",
  "key14": "56NUCk2NgwAHR2bij1Lt5rY6KLisTotQt1EvwCjd66vEyjTB2AFoYukSQ1wE3k6SxpwJQo2gMNpK5c6UG1rwkkLv",
  "key15": "3jynvoijS7dGdB4B2BthXmsevhTParVfRRH5RxzvfcvGJSjrF9rFE7VbGGhvpyVccGdYyHNR8sTjTgUVP3Qzf4mC",
  "key16": "3QJ7XiArjfTDKfBeRXtTdd2Np8qnUwzXpbV982NHbyXwJxbcC1k6HYHpj1naQP4oZEB1bY52W691XUwBSGS8acMo",
  "key17": "5LiuZkGAFy4LutzqLUNCgQ1EfovSgYo92rLtmG6ZsTMekxZ1zUSA6jpVGzWEKi9911QHD5ASNVKAa5q5mSSaMDaz",
  "key18": "czcbbk2REnF6hKeKZdqRSBshDQZhjFT17PPJiAhqxp5ofww6P27W5x9K9k3xDBCLb95fjCf8ZySim7pBSS9fBe8",
  "key19": "2wnAWtpJcnZ8TfUfXh7KFZHovYzZsw1jCU3cNUEW94jinKWfJSWSheNXu9qGQnFNRiZBeAE8TfMvxi3aHzw45XEA",
  "key20": "2BPfQQ8QUQkab5XywzFZyPLJT776D9qS14MJCfK1LPF4ZEtLZENq7TzCTc5dGUf6ahHt8hRnf7UnnL48X5bGtfHw",
  "key21": "4wEdfGmf9zakrk3zeCXYcKMf9en5RnBwdZcQ93U59d3tKHxMTiSyozd4yXo6quiiJRhYWJV4uzoHjWtHFt88WLjk",
  "key22": "3jFsJh7nVp2DUNjyDu7atqbV1GrDXT6UMVnibggx4FcHwCXXHi93BYEhPsxGDVRNPJbzrwTuQic1dsBseoKeTWT5",
  "key23": "3jhZPaTVH15KgB49BXgZqmMkiJEi2eZ77VJhvKUeSFqNbcN5cyzv6nyecJsfmXWkTvvwahCayjkADLFWHvtu1PqZ",
  "key24": "3V4dGSGJrLbKGU1XcTxDBsVvosCdRmBuwZ33Nb9dA7jSxsxY55WbBFwFNG5p7rjtJqqywq6dLQ34TKKJGAqKszHP",
  "key25": "zxg9SfL2bmoSCvyjXdn3XEE4SJ17YfY4A3Qv85ppiDAGR67ruu1cJvYzF5nQqCyyo6r4mGhN47xvXbiMBFS6Yvk",
  "key26": "3f1ocY7Ws6mbGLWVpsQCP372uu3mFgtepPRDgL7WYBSyWUDSWZuUXT1rzRuQhf8pM8A4ijDXwyucFTXsxg9P5XEX",
  "key27": "eNAfMaXSHhDuoFon9p3xus7Aam5DFQZHx5oDnDTM1Me7nAYaqfrFwe7xuVRjahtbSHwJ2Xc8zeMHFrixTt3M4kP",
  "key28": "5pUAwAgSHMmLyoZYigBy2h4DHPyT6ceEjwoLtFXe6FKeR92aTA9mors5TS3PUJqxR2dRvMrxFnDbBqAoERsc1C6j",
  "key29": "55466brunVpGfN9gSZVHug849E7bQgbadsfNQEKGqiXLq2UyN2DXrSeVjYYaZjXZWHpn9KRYCVi1KpRJARcF5EzC",
  "key30": "3re3z3VnFyQEryJaSY7q1a7BxMXxuukpyRjMPL6gKKRAYvGyuJotSaMJoT2y5hbmsU8GhNjM7tC5CpZYtZeSJStW",
  "key31": "5NTqz4Yy3FFX58sMfroK7E7f4s6xXNKjM1nWNeqZZWEGaVcLw2ZTY7f1yDo8wfZYSHZPY4H2TfWTe8sfusFVfxkQ",
  "key32": "5WKYfa2cDBabBxaA62Kx3mRRLFieYT5YoFzqLgXXWeA2mT68on9mTi12KY8G6iraWgEBfusVykkCjEoDsZv1Pzn9",
  "key33": "35dKDpUT7RhBBt19tM4aBZp724QQbmgPextWTN5xgZQ78RLcJcguGXxxcFdLmCEdRoiiTg2geHDrafHXGGRWbxKT",
  "key34": "44vm2twPk4o6TwVBVUyK8DAaTLy6wfhA9hwtULaea2YWxuoPsXack1uGBjrvj3ChzNJbjMkQZy51Y23CK3PkMR9o",
  "key35": "2vsguGxM9i7jBHqeBZ2tcGFhdfisQR8K8We4W8D8BfZAtY7M9ZNdwixG7v1PzYN5ud4N8jGW47SknXzkrfEqkZ2D",
  "key36": "2fDGtQvFwQj7DQ8s9Rj8QygSuyEwR4kKAKvVn19PJhsvu6dxJyWu1RLWTNGvdEbNcUxPAQWW6qgMo4xn9aJPvCC5",
  "key37": "5Sw6JggyQwPGdiz9kb9UYYd5SQFqDvmxibqNg5pNY7h9q4cojmSgzfXR8mgZcKS4yiPq4GZ4nxE89RZ9TN838qvu",
  "key38": "2GeDQFRut894GHRtQJVxvWbowUyHuk6USewHbYtYwjfxc4VZqizgQ3rD4tLckraKtig8io45AditQSGYPJCtEtiv",
  "key39": "2gi6DNGFKVFP7AyBo5tqg2oKvKPEBat52SKa5ff5AYvTRFCdAhjmXdVEqcK6tUy5p9wAPUDc6wrWPN8SzBEwM7Bj",
  "key40": "3E4dB1z2gx5eREopPd8C8nnQophZmXSez76EzQSngWL7XKEUTx6WbmopJ6CjdYicsn17Wkx6mXX1CBmR4bQ3mqGb",
  "key41": "4XUyTiv2UCSj5XvQSukcPtozEaqbUfkYab9ez7ZkqttLE5pxWL8CQz3bCaJXCvmmSQyFZvmtQEJuYAj6jSh2vhM3"
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
