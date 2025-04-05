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
    "2bn4bTQdpUg6iyHVBqoSvszgNymYAGMbaqgeEY6rrhctKyHZy4VHNM7LnUrzmEsaxqc62huiE1bo3adRBkF23PAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gqeTeeehBRrAtgGpXrznAeHbeHuc6g7GgSuePxeKeM3hokGnwtMBZoCyEyZD4MmVG7nqJY8xVL5UA1kTE9wQWWZ",
  "key1": "5ayiVsYtpwmc7q2U9BwEVp43aKn2G4s9y2d7dP2SmC3Eg6yr8ogiNE6UhukNtxsccJwzSzXpZxm8a6frZfGuqQEb",
  "key2": "24SmKRN5w9E2Vw1wBWRZTPLoBmXPt4wufuQv7HWkp1o6QNzVpmMYkj3p79mvnSabecWmtpsKy3hfjgptQTcUUmFP",
  "key3": "5ufbSzneEufQaGRZWzZVuqrYKoJL68ukmHgaxFboiv1ZM35KD187FZMjnE3RZhEMZW61s92VEtHpyh8um7jrsqCi",
  "key4": "4tYNUrLqiHY8rGzJjMHBxNKAVmYJNU6UYZMfR6w5DeCs1NdELBnvFs39RhtTbgMmkG7gJ6EcN93RgZR9GsAvPnKW",
  "key5": "21nzwotC3C7UkxHFFEAJxtNoosCY7xYwSHuSLXCjH1JTf99YCqi2cWHf3Roj3Wi2BcK2fHa9LHGHdKyx5KWmMK2y",
  "key6": "2ed7vTKLRERhPNRaErn89d6Ub1SAf5pGrmFF2c8wK68s2dDLpFHPBNFmLVUouw8Vtrr462n69zyBGGsGwNmRmX6Z",
  "key7": "3F9wdPwkxqMGTvNWdPrsLyV88LYzDyxGAVMKKFQzw3CSMGDSecZRUMyB85CFgk7FsnjxVsRMotD4soWtgwRhtemD",
  "key8": "49Acfq7QMy9Ec6Tww7dCSw39oPm7WUS2emLixe4PxGXqSi4GSTgHP8YfL8rxW5Bx7KdKQKJn4uk94gryXuspjqtu",
  "key9": "3u4QTEDA6XsCKSH25NVKuBAGnwZe4RNhPQcE5zsScAbuS3fBVGNgA35vzRYeNjSpU4cjqSbRVAY231x5LrqyA3hk",
  "key10": "zwQGgY7pmDia3LCdPbYerhR6BVhUskrcDFTf8KnvKYw8FcYeHRCNvLCwYLxsMfJEVdKHG3tqUDKn4kWNfg7qwiH",
  "key11": "2hbwyxwTjnbBUb6oNLnTRE5MNy8ebpmXF7AuiCCZsqx4dsDUwaG5BCJ24Uu6UcRqAc1bSjqgm4YDq4RJKXCcqcVi",
  "key12": "2mtNzCMg9Wn7HJiCGbsTdjFYHZpecKxRTbN1NZ7CTcq54vrHbCvC1kjUUBb2jcfuk5uwEsnyQ3feHkGK9bQy63EZ",
  "key13": "3bmTnKba3bF6nsAaHXoLCSaDuKyAap5obyFNAqbrGFcqh4BxD5VDyg2ePhsRoB2748zWiMDk5uyfsTCRpoZ6DxXS",
  "key14": "4UdXWMFgp6c1naaBaLfE7uFuTznpFG1HSqBC5k4LBx8DwV3sGSmeFax4Nn9RyRH9ydeK1ZkuT5iKhmAictiPm718",
  "key15": "4gYZVVLppGQnXqmQsLbcqDaXrqaVirpmRQPasvBv8waCvA4PmWHoym78vL3P4R15zhWVQ79GVSRWcAfStYmmdX6d",
  "key16": "29jzzpGggejeN7JwjY3N4uyuRctvNe4Ya35z2FQJBDwQKmNESxrnArqf8PJTmk8mzJ68ee3CFLm6PdDgL7Z7SW3g",
  "key17": "4CoBxA9D4TKAHBNdAGMaJAa9pnPzmLqDxiEWWYp6vK7sUuvwaUL6MKp7Qfm7FKaLjaBMkDfwQxxEnZ8PyqtFTg66",
  "key18": "44fWqFFfr3JfD6U3StXyM78mt9GEeHHEQ9vkiuSmcvU3bYY4uiisj1joFvv8wDfNocipdGLsucLpoXg5utyfK2GZ",
  "key19": "2zfFCSJEXqFTrqYaDLjarR8SiDQLhRV3KFXvZ8fAQdsVZgN7YdXeziMdipU166ApBtxnuqaLAcRZuYeZdRvn4CTC",
  "key20": "2aTX4HdBYiRRXjf5t4cdbTgRQLEDhEaKrWJoCxjdGBzhgksouxGWF7uAHU76GetPoLkKFPE9XhhdBsiKKBXjzjTy",
  "key21": "hak8JAutaFkMnnv1m2pAqfPR8URmjpbXY4pEArxyvpBykezkWR4z8TjdA1f14tieU1Zs4QAhZ9C1opgjDzNW5u2",
  "key22": "PesTq4Geo1Y1f7inY83PNzoJTYUfsU1J2AzDeh6JpNbcQRkAU795VcNacgsL2rE9KQsSjtHgRycjkUfuLACC9Le",
  "key23": "4nJKNYCM4bbCgHQTRh7ai525SM8MyUtNuZE88b6B5EfU23a3QvJn6MVJwLkNdBkVcdeD8xXMZNcDBWf6TNaZCQga",
  "key24": "3fa65APZT7WHxYYpuYv4kDeUnkrTF2DjQmfUiZH2LbLFQremm3W9RbvStmyMxeEoBbVUbLL2BgcByGp5Cbg158MG",
  "key25": "3FCdYEi8C18L13jrc42y4R56CeRCFzTX2i6n32V7ggKcetdZ26qVA7m1T4zJ7kxpToracCvuzTvqSaL3ZX9KfzkF",
  "key26": "2e3EUQQqamyeUm8bLyB6i3L1C4STyxvcrZPWdXPEtHoTLYmPs5XyefEmpGuT6SzTqmBPb2RnWFtAS82fhjmVVczG",
  "key27": "4SKJkNeRN9mMinqLdYa8uAZQ17Y4Hj1vdBB62TtjykZAq5soaXgVf2WYJ2LPdDcotJcHEnjt7thy4ig7h3VEufwP",
  "key28": "5PNR1Sxbjdo5vMkZAE5F5efyweqGhK7cDQpVsvqWrwcT8gBMCV4cUTdg3YsYDoBhaUa3oQVGSrMkdjKkMZJMnBGk",
  "key29": "2qZ1U2k8UmLz6Las67EJXgCLHXiZ5ey2dJvtTfJkzZ6n5MU8hZuUyYz5Wp1K13p8uY74rHzXnboZ8PwWvuS7xh2M",
  "key30": "2396oQKBPShLNPG6fQCEctZsdM9ibv8p9oPz8rD8iiGNBrRPYtvWzYq7tV98AjBFPKiTd4o6kLKrszppfYbWCnnn",
  "key31": "4au5qGsKtDto2uRScWBuVWWWSBWJrw9VjjXB2VxzRSJ8dLXzrMowoFib4DujTY6KJWgNkquCEeuFqgfB5xTZb7WM",
  "key32": "5WkUo9F6HUSx7TuA3JZQ6vkt9GtZLWBXWNJ6iDK6LndUzeSspLCZLAQnNvykrv3W2wsHfYWc2Uhk8QSWUafgqraY",
  "key33": "3eSJfg7yaej5uq9LkaKjoEGUNsWGshZX2TUkMQnAcSc2PQr9rimrqDJSSkgvx6UmRqWarJZ7KHuSo2cc3n2P48Qi",
  "key34": "LdKkFjGQjsYERg6vGVJcRPZYNybb8Ayr9LNtXBCkdbeVALrCyGQ5UEd1aQbWU2QtKG5VSNw9G5PKduVaEZR5xVV",
  "key35": "3b7EArFMLMerhzKPvqHpCXNeSgEaiea3g9KNjeN1VxKroKbNWTb6jx6JbCqikSchM9Z71AKUVrshdJjCeH3NrQJg",
  "key36": "2oafb5aWgM5YXu1NfuV4m7DLDpUAMVDgh6W8xZTa8T5J3wvFvztA9eaoHSChgqkqFVbXAL1i3LYJ67o7F7dG9H41",
  "key37": "5pzWR9EgzPowWeSKCZWFh8sFPC4iST73aXVYoYmXzt5Fuy78bZ5RiUoCGtoPRruo633GJUD69HrWogBcdRjD1xWm",
  "key38": "5zexb8P6fQieR5prqRHHwhBv6jzT6cwX949HeYiZzTmsCBfxzXZcH6xnyKiHG8EVUBYmAJb7rrSPGVdrKiLGtTvv",
  "key39": "4NEFngzqq1EEriozn8swovnpnqHspirYhfdLfvaPL6Me2vfhAYU9U6ivTH72hcLeAzq3xUBytYaVVMUz4BczDLJ7",
  "key40": "2kCdHcGsLAwf1YqXMkjjoZQ9t3iaUKKYbXhmYLWEt2XXrdGCkWnM65xFdqeisnbkdrNiXe4Qf3Zf34vKXrj35FDj",
  "key41": "64TykFtVsnQyXcuLkz7UnssA7ad49BSWUjRiBWDuiAE8WCd7HibXmjiRrb22xxhNeUiCa96nvnaJApBaF4rUfxak",
  "key42": "3PAnQ5SsxXp5qGAVJ6ZPiJinBQUHXmwzJJxEBaRSMAZLKWMJyycZQWUPUk1g3csgn9VUKYrUi2U9c4xArXe63Vtc",
  "key43": "5PfYuVzWwLsSZphYk5ra7ko79Jquk82XeNDpwJpug4dSJ3ab4KwYSxnKbK2WJnxaB8ZJ4eKbMHF9JT6QbhmMUeR6",
  "key44": "3S6beU4kWSGKdHeqDNyHtDMPocjvnm62rwyBqr5ZgR9rrm1deG19NZ44Z9rw6K4rfWxgnkiFhK2aQPmRZmhJV8Au",
  "key45": "2Yrg98T5zqg7vYjvKNLpK8wbSru6EZcZFuqcoEAF7dYKfQtV8VtvmpGMNDqHKp5UdMrS2XiPJwg4uRhpSTTuUS7s",
  "key46": "4PrJHkvTAQ8njvETuK1YuBdLtxySefTjdVQ7bB3CqarnEzzKb1q5rGfzqQtqDVFgsmHg1f4doSNuvzLsQeo56gm7",
  "key47": "438Gp6caEhJQwAMvF7bKTnkf9LAYBUUjm2KJjtZ3VJzAYrNrpTseuxAz2R9855e8CbRV2uMrEt6j1D7Ftq72DgD9",
  "key48": "5itZf8ZLDt4w3oFFgZcjEpXpVWEiBQZCBfgpJo5GyZS4WXDcMfTQLuQgSGKnGhG6dXnxDR6L8UABefZXQdbT7aeQ",
  "key49": "2mVVTbmHJdRVQm1UzPKxWYec8ECDPnfyJjgustSS6eGNyudo5eGaSgrSd6KTaHxVV7xrAfZXVUE6C4r2s1Qwtr4q"
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
