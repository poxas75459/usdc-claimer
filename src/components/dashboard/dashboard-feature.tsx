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
    "2kTFdAwzN5cSJ37tDEqJg7EHTAmt1deAJcss4pSm49hBcdUwRefCqqsygUH4gJVZqqCmvzhbZ8Gid93JacEkncAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cArvGJthkqFP5Wj486UFGQE84AAf1yD15RJPtqckd6nQpdo6hURagCafe9ekv6cu3qMJ1MWxrdgRUgrXP7F5WmR",
  "key1": "3wnr7xRBMFsiDJdvt8xxR6tC7d4u9jZ5YY43xyV8syBqSk8QrKCHWUxkW3hghiZq8V1JrBtWy9QdWN65UPBcLzhD",
  "key2": "2z2x8jv4h6V4vUBmdQdUadaqGbSAuSnjLbDb83nf9TVWMYwNHBK2VXK81tN2LW9jsKRCC4e3VP7wnLHYidbfrn4R",
  "key3": "4oCH2wdXqMtkHev2E9G3gn1eVf88XCkszdnESkHEK11jWC9EfC2daF8hfeqWNhAvcmw7TwMjrTvG7TxybFgseDgp",
  "key4": "4m8qtTKr4fj5c3zqozLLinjoN5ebKaNR5ZzTC2ExcBS4mGgB1BGeacRDbXsC1tEZiiQgLo3uNaFvpoV9hKFHUyYw",
  "key5": "25ansSTsEModiHzQGxwWfvh8TAE9jeUoUypicNfC7ZpnVUrVuBCU4HRvhHcGdp6YwQQxUBFcrGFw23PKJr1n3bSL",
  "key6": "57MYbh1yoiHYnx6xHGxwry4RkC6F99xJmsg7SoCRizC3xc9hhnAHkRSCiuHj8FwK7eV8ZST1kfaqaqiPE7tGivtp",
  "key7": "517ye8Z1iqsPzBKVYryDWWv6pmv9PdV6tpWhLz8LHfb2iYzyMH5rRDHs86Fhi6VDwABb1oah26DmKqrcK3F7ykqs",
  "key8": "5UQCjYFJ4VpqqtgWVY94exQXz2XW6kwMBqW7qajXo869qb8hciCXmR312fbYYwAxHmprkVCBypmP7kKL8FaThMb6",
  "key9": "5gX6B5LZ7XAj9Sgf82qoL1fc1gKU61uFqxjdirARWRKR6TGTTQ5k12N11DeSrvKrAQL3dZUTXfpUnkUqvR86ugpY",
  "key10": "kw3Hvz8atRnPkp8aHyWuTswCDQsQzdADKkfRfnWpSZMsTvaT1UXqgPZZQao78iErX1QG9XMHYgeufJN3xrz7XB2",
  "key11": "2CJn8Dj58P5bdc494ycScvBudhYf3SFnVDPj6y1f7eJ3D4F1MKwKCi37WedCNt3eJHqzPuWYf4CFXZKNpPHyecso",
  "key12": "52tykVdLzpjZ3qDLbd4rNVZqkZyavToSVQLTXFVEWUVaKdMrUoizyE73xXSoQHAjhKzY7mnN5nCcu1rhy3kcCNvu",
  "key13": "4xQgva8C52PuSRgQgsRK2ALG9zFowvzp9LiCFqAYUcNLqC8LkkNEamhtHCCpXfrabihyxxLsyUDN7EZQQVPwGJzm",
  "key14": "3GVsLEfNVsnpEsVrkSUBKMie6YcGnc8WK7LhWKQm7ie15cZSVx1NzAQkUu6bY4U54V2gJy6jXxtzbfuhTLL5T3Gk",
  "key15": "5jA9CiJMXnEUMsLEmFQHszF9foTZ8c9NSvTVmoTwa4VxFBdGGcnoWYiqvC1j1Bgzvciguy91wbfydJmdhbUEtBqX",
  "key16": "3tPJHR8GxqwMAEDxVHQvbchHgrXSogUmenqEggANy4gxwBvGmYZHTzsCCCdjL5nS1cr1D56D4AfBwopsdw8KEmav",
  "key17": "2VkD8SAPEnAdMwds8swNQie2uZZ87BUzSdfbnXMWUbbJU7c6T9jxMJv7FdjNaPzLcKHDYd7bQ521Wkb5mVsFdTzp",
  "key18": "4swQ7TQEaqMJGjVR5gtUfx6JmDBYq8B5ggLJhmrtkZU2g46DN7CrmXecpZ8KgpcdcwGYfNgzAFXgLr1aUqQrZ97V",
  "key19": "47xomUPMYdg8e6hV3AMRGjDNqrQ2qx38cfRiAnjkX3N59TdxbLWJHyJeiqYmPcHWt2GWLGhmbgvLaYAUVovEzakS",
  "key20": "2jeW3SRo2mjyGKviWrpvBCtANvheJfztTfFANR68dLH5QzWVcS9Koy8KwtrDfu7BB4fJgkvjKZ9g6WxkdMPx6BKZ",
  "key21": "43QiXAU9Ghf3SemFryyvZngoKchLvN3vSkUS9psxTwh5MH1EVBk7PR6E2svko19mtKjWKnfNE4DviZP6hZ2tZNUX",
  "key22": "3K3QC6HaAY8royc5c7N3nqLGGRNnsAPbsAm2zX5Trdnba5YYiPMejm8CRV9Wm9d8Zx4c8pBpDZMH4zaTkngsZ8L6",
  "key23": "4kqy29zfGeNvkF34DzaA7uPcLWQ4L8x5Dhugjuf7PzyxQHaXUmhoQVuFBSKFZjJzFAujXYPx7y6a3vyASYPKe9pz",
  "key24": "7ZHTij9Fmb8aaoumKYTUbkToiFvdMGKhWLuuqZQTdBb92DQZ933S6bEPvmtT2MMtdDKCNo5aig6FdtP4kYqMM8W",
  "key25": "2V318dbSyZWwkScmFSYBYn9HtKwUrUgxwzwNs4tVJpH29fd96MM8pvXdFAF6ACMdZdbvBDYfgGXNq3b9vXaRNurV",
  "key26": "5y9xRHuXKfvnqENYRwrL6EE4siTYJJwQvM4jZ4hdDHszb7Wt9dZuJNZGz3nmhHfXi7rJd3S5koPNeTvFwK6hvMxp",
  "key27": "2YXWfs11xVGRvS81vCxkCG3jvZHEfvQmzLiQV1pVfw8u7dv4K4NTTecvj3T6xVpzxmfH5xmq41E1th5FxK2EYidQ",
  "key28": "Z8FBBbmsyuaaCscaDA1M3YxRRXaTZa4sv1MjvGEWXaf7jNRKHdqcx1epR25fY8jGApW1iz6Evod1zu7u9jAhmUS",
  "key29": "2Qts1AsP5YXN9yNhNMT6qJXBrFQa6cQhMeU8uvseZwH5P3FUo72PqzwEWLYAJzcs7bnCYFFjcxUPfaEpb9VtM592",
  "key30": "2z9CjBXxUcg58Q3vqCUqbvzEtPP2wkHZKthh2ao7icPgNx4jaB6QB9BMzPHfW1bWxACE3ziXkf86zvLhv85vySw4",
  "key31": "4aQGhFAi1mkuYWygW7oCLtppcDJmjjTfk2GN4zxk2d5YWBpGufv1RuktEQZUDN8dYjCpCQcSm2QnMYqcY2RoPDNn",
  "key32": "3wd88ug9S6RL9J7NB2yH8TphVmyb6e8LEowqS6m7yiKbhnP4w6PtgKegEbDUCjeNvKJBfvY6CRqcS6iZAgrHUiJp",
  "key33": "3tBUQrc8Gvh35nAeUnvqunsit4ien65KaAdGhcod7XU7NbqYHtgNvmQedBJTy6QHsA1UpeudmqRdcy8vy8Xypcfa",
  "key34": "5zSS9ZDCRe9hb9wnZhMr2G2cR83DEJgMontiz6jHYu2MdBnWX2yG5VJ65WpMC2VzpDxn8p4QpEYaNSxREHjMCzFJ",
  "key35": "3HhbdJ2gXiSCYTq7myVTpZpczMGJzRxnJYFfsBU6hRaq3SMLVMv1zjwjCQqTG9xyA1Eji7wwF86xNP8QkqxhURVN",
  "key36": "2ZQgJGZP6zwFQZLKntw66hr1zwhXLzberoJrG8RJN27E8dvDqovRReLtQNti4ehV3yRSMo1oAT7pm67Kg3fsucQ6",
  "key37": "4MnM7Vrw23eApngVceiyecZQvtoyVqqEer5uHAroQkQ1fegcUd2VCv9QejaVmDWexCkvd7fL9acNg3mSdhsLWPax",
  "key38": "2sYTpjGPMAVCaH282T9fGhdZwybE7bnB5s9pdsSW1VpBYvLU3VaQRZijN6eEGc2Wvsh8RFntPC71hgXquzMPUSm",
  "key39": "4Vvf5WmK7wuw63UC54nKm1WdibfDCVKNfmxJQhQ9bx6uxuGYkiskVXg8jzuW7ghJgQMpzE9DPw2cwGFh5vaA78wi",
  "key40": "5UkqwP5XoVJ7KZoBWGkhkYg2uvgpm17sDzQD8WCSbEWQKTRVQTjSjn8TZh3JTAVeGnxoz4GXai2UB6K38Q33TDMq",
  "key41": "5ERp17CZb42PuZnioEwy5FR1K1CxaDntsdnmNj8fLJiz5zAJFbhSmKqsVUTM2jhC6gopGYeN2RcpdcWvV62gQ36y",
  "key42": "4irMkW1bmDDA9887uEahVJAiRut7bNVVriDSTYk27ZE5XCXhfJbEEeEBstUjPUgBcMRnfq98wYReVjoRGWPGLJzC",
  "key43": "4bWZhdzw95VD2RPKg1pXMDpW3Y7ED9EG2rZGe6uiTaEwpk5N1JkhYfuHU9tV8Pzvc1J8YfbV7gxZxM5oACXPqWtL",
  "key44": "3aDa8y52XQ6UB7Zfxe4oST8nESkzEHa2kfxMdu1A58iYANyVvrpVSy1muENo6QTQmuAkgkJe8pcsZgNUbq2poyrP"
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
