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
    "yZHvdoJwEVTg4PfeK55nuAd8hbcgP9C3nArE9weUJab3AnMP5CC24rqwZgYj7iQZgZLaZyNCga4qbKGvs7ubuBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Us41GPZ2rGKquBT6ZSvZBsaQ5iS2EKMNxWdyaH7R4ejdWijxnzTHgn2Rvx9XLnwzjFmzS3Pzj6318WgH4knTCmt",
  "key1": "M4q4kyyyBrHJF8aU2ZaHf9dJXtW8K73wD7MHYLSSfUo9VbMKX62jsf1tfybsTL4apzNYn7X5mDxDrXqZ5LA6Eh7",
  "key2": "5GR42F7VvZVNQekEVQXCCbspMM1HJcup7eMBezx5comDxmmM1YY6t5MbxezNw6fzNZqqHo6eo9uoCKgZr6uoZKnw",
  "key3": "4kh3HJx3q1yPPWJMNsNY1crUznXMYaCyy8ALoMQ81STgoMLx5bbqNNucPsXHaZqZGcVkoprDXMTVKreQ855sQuSi",
  "key4": "iLpfAy6uookwJdYUpQQRKNcsnGgoWDSFe5Tz8nA6jywhEDwxYWGPxYr2XThs32EXLozbFQkw1ybQ4G83WTRPQyk",
  "key5": "2VDYD334ztAT8ivVF6Sx8NGSU75A3SnbCErDx4QnrrhN2L8rNyBvKAmRGkRuQdFqDVpT1FccA81SodNhDRCPDRBH",
  "key6": "3zsDhg96F8VGXbTCGcuv3hsqw9F87uUEqkrJ4ih2UjnqcS9v1WiZzPh7JtQEqYM7CgFdijf51JLUJwDyJKMtPC4o",
  "key7": "2nbd9kjojgPESXuM3d1F4yHFDN3Ef5V1M7PPkqE192WhCosahAehLre7bqb7fp8nYyFXzzuGw9k9CXNjFmTjr3eD",
  "key8": "2fw4HSmHRK4NCpEXbzT9jc96dEfhqGhSMHm6vZbrG69VCrQv7oJRFdpx3TiNAyGuXeVXLte4ZXGo8ScQ4eDB9Zoz",
  "key9": "4AGHk6aggHEQ2LEdBA7jq8wzqEW2sjSyfkP4PMdHVnR17Wj9hZhv2Q41tDvSS1dFYx6wckVPwohYaJFR1c4BLDJB",
  "key10": "kuMK5FxEFvmempZuUtdHSHvfHkE74PWLxEoG6zRzvcywkm1Se9SpGLo7MRYi58TKxqjxXtNxHZFaHg2oaopb32v",
  "key11": "48VPn63EYp7moBk5T2kpUNYMKFzXwS8CUk5cwWrJcMXWwuBP15f2JExGZodcFx9rdXZhMqmUcc5M2bX8aXGF3C8V",
  "key12": "2upXd2ZXDnHGxKaqN9ZAHiwVhfx6F7GXjB2gR3LADTMa3CqVTuG5t8VFtJUZ7N7BPZYtzuyGR8ErbZiuw7Cw3ReB",
  "key13": "59XJSQUTU1w9Rp54h7L9hTcPMLyUdy477QvCbtPoyfCPxJZ8PRF4Y8Ym2gcapPBfnFmBxVsp7pZC3q2Py9tikH46",
  "key14": "5W78qgvMRAnJhE78UvocgTwySXRAvSXgNjMVdGyZzgLxak7RA9z5tbbFqdzTdzffbEybC4QLwuGQTGjbVVxxfwBR",
  "key15": "5wso1HxJup74pjQUvcnkcUp8GYiqHh9dF3LWF9NuiBqpYiafeM6FL1S2djGx8kYKb5cg9PU4FAJvk6YMQgrnryCG",
  "key16": "5x6yNJDHRocimYJCTnFvrJf5xW3k2cvnCz3CMYiprZKCxca5gePoeVM5XguWYMeoNqHSGdJ4B3Dr1P8xEEZ2249f",
  "key17": "4McGC2qP6SFfJifZCLiuRHrQ8ovxuiGqM6kjnhE3EruxpenHRmiG89yJfakEkp4JJatzB93D5UUc6pR7BUjLACHg",
  "key18": "FnMBvsDBBtaG4EKiY2wRtLEbEnnJRHrdWVBFHHdPzLBxa5JjWAgSdqUVfNxdpezcg8z9bQM2czG8AEiWHgM7SE3",
  "key19": "5FhZRes8F7vojFCgJz1LuqYCjz7hd7EwYPHev1m8sqVk2ce6QT5NHurgDjGQJJqr3iupqd5kW2fBTr6mxgvGUeoJ",
  "key20": "387bGLqw1z4eHFZ1Ut4mpzLjegxfREy4Gr1PSGPmeTk8ursuehfdmnDJX9V6adrM3ZSF9XraTHgmY8w68bgtMu5p",
  "key21": "2efLRmjJo6g9cySjdiLSfZjJNLBPF2mBJHnVEDtnjxT1C3yawPuVts6KMtqES663SyoupfisF1Zt8PE3qpu39LV4",
  "key22": "29BMR35tGCV6oRd54SjuT63d8YgNwZNjHENTSyvGugxadp9Cdwkq9UjvjGqhUmGUbwuparhMNWLgDpLsuLdN6QuN",
  "key23": "3MGzDYJfXYt2Zk81B1Zq9JJNc5NJ59hUrFk2itDEceVX52jnw7hLNvLUG68TMqUfJYdbRQTV2WcSRd2qJKuKukch",
  "key24": "5swJxu9GXhUjaSEzVy7DXZ9JLUhfZUcn5FkyiGcsfUPv1WrYHFwvMqdaPzfZzZfA8NBht2a1TyB9mCZR3BT9kr59",
  "key25": "5Xg3fe2g3GiDyAFzrmfr2P5eJkEV8NXeMSwN5dJLAziT6kJ2LqEfBREUNSi82ePVhSaRWkWmUvxGrjKiuv86BiNd",
  "key26": "3ztacubw5YuApn2NHNaiQfdV9CJQeRyrWPVDQwoe1kTd9cZe5bMPasPfbwk2hEm96qevfKJ6veNaakqRZeHUwS2m",
  "key27": "3ugjSJ9tWEwZ4PGUWqG5ZdVWUWnC3FPcDBCJRWKAcFCE6owreSBDDrwvjKrUD49ZW3i2Rv23r7AdqFnBEKMcekwZ",
  "key28": "3hMdZvUK5YsmkkiHA6RAReFBvasiFK1Gk8BsNWT1k3z7aoUd1jtQzJpToFCF8B4FcExnvn6Dw6Esk6FD7tU7DTNN",
  "key29": "2vzrSjUjETMbwqhM751EaM1CM6AeWn3Buhx8cdF2JCiWB3a23TZB69bjPCt7Lqifua3wx6Xrcnh86vA5F4sWjW2t",
  "key30": "54rX3jxqEowshbh1bt1YrjvF7RTAEsm9bcETzGh4HeTuhDVnDbFkmD7koDipXdskEpKX5TvJ7nb1AZWeBPee88Yi",
  "key31": "4maH5b7YLBF7YvMP6B8NQYLoGqPT9Fn7V8sgBrbXJQ75BxrXGs2qzqoh7pRZkubcj72U4g58LAnZY2oQaWrW3u9S",
  "key32": "2GoBrosHj8KydigxqwA46nEPg5AVXsBVwZCwx914AtgCft5GJSp7TundYd3wxP1Lic8vhYzupNscyijzBs4PADLk",
  "key33": "3r6oEkQgxFUiQz7mxPpDMyPm8zTFLHvgYrEd69YzmNGR9MtiMUnKCyU1sHcJi7UEjazm2Mw2pXEyZiQxKnuU7QuE",
  "key34": "3vUignQTdSSGtCQ1V6RY9h6gZ2odWDD2Ymvv2j5WqNxHGDfktnRkxS7RY9UXfUSTFyURzpU6xTMu9H6R3yrQfNGH",
  "key35": "466zGaXQeqMWXEuXZkgMAP6vuXv7tFwc2xSrWEwrytXVLMgJhe6Y3jJmo16JmuQeusrUW31SN8DScxACBhYjsY5r",
  "key36": "5SGfJqacYPhP2S7u26r7PZtPE7FTCGPWTzwYERRJ4Gj6M48mb3UPmenMA2C6AoazuxKDKcqwhsDy3rfd2dyFzm1q",
  "key37": "3gQi266jYQ4zttsKJtMoc1KpwhXsBPPSkpuasJaBavHLvvkmddFppjzc7f4MA3k7PK6P5o1YGb6RJkxewBQN7qSc",
  "key38": "58tw1cUAcZuNdoJZSL6JPoyBednvTgNzzfph7duVLZV4C2Gz8Uj1qoPaPn9AU758GZX6yLdjvAqKJxGnQKZYeH7o",
  "key39": "5xZct697sHYQxMgB3d3rip2p5r4sYPECYKehbmZsqMDAUE5QK6yjcW86EoPgSt6DP5gkgK817umTwD8NnxThK8zx",
  "key40": "66xncpsYF7LmkZSGUkiG5qAByhYYbDkiJFSzKFtCBNyFPRYPMxwHYPsinjgAmqzEVgt6zWizk64eqxhXEkbhBCaV",
  "key41": "3GiDgY84CPDrP5KqFa5yZU1j9Vr1ox5kbPMzqdDSGXbozgi2qsFkQVec65q5bV4uyob1A5LdioXxCkqrobFSGZ8b",
  "key42": "4ULRJ5rvJVk2zJPSPxMMr3XPGxHvH7PRZyuDesqfq95rHS5seqhWhfErFPkrTVMD8LwowKxQnBecbfEedMZrAATz",
  "key43": "4kRA5eNBvhXp2GBokjGXiQ3vLqmbs2YXmvCPos6Bj4j9cfsgo5EjfnF93o1h5ssceycHSW5YXNkPeEMDsADBP9Lc",
  "key44": "46wWVwCrXYHL8c2n5RqWQYnmiukwiRhU2Wb2YhttQxd6SLEJHDXz2wpjD4e5jsaVHVpqZVmgFmBx8eL7D68ZcUCV",
  "key45": "4V5z6LxNaM5CzVYZ3xSkQ2VkRTJrcAZe3DS2xHwTEy8zNePR6eMSVZtub4CteqaqfbV9xX5h3A66xKeTXWin5SpB",
  "key46": "5AwLsPatVnoTVBoZsHXPSwiowGiT17Q2fg8U8Ah4S9X2jsh7ULoVK7bJfxVXPKxUTnuTf3Tm5p3uq7sYd5W494oc",
  "key47": "2nnBn4Jh3jZLFHRPucgZxF4dsWqCTNG1iet3i6a8HPqM1e54GNiFtp2Ys8MjGSRFZS6h6LN4pUkBeJvS7iDtBTRU",
  "key48": "4ySbhNJaaU2wqfx6qvM8vxEpCKREeM2bs1ZKacgXEPrxjMxdMsYZwfDdF1w1NPHvZGJot4abZDm7raEr95SjGzpW",
  "key49": "sxJkoCxX8Mpo7joBZijg3ELcphscvnDyjSEEQRM4pUvU3vCxixMvBfPirHjMGGn27uFj1ji5UEeB2p8WXZe1Jqg"
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
