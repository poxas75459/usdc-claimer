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
    "5rdGmD1CqPYFM7msRiMJVRh6oVkYHqwL8nyt2HjcgoyS4CLsoHGVHUnLjRq5HSAX7batcvRzKhKx8de6hJfZFj3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hE2Wh8gU5X9bZc5m9wzXC9amiXNCyJuU5pexWSdvFVoND8g65Du7sPerwTsYpAPyqgTzWaLTzw7UPAQP4gwd5QD",
  "key1": "2CmWf3B69vYzGFkv4KJ5DoHCv96Ki8G23sVre6s8nu5ddzxoXqUqhNKnZiBGjsmSQgxeBqdvDrmDYEoAo4BVThLE",
  "key2": "4uqPRJUHRjko1QmP4NdFutsapJfrBpfKtSKcnxWp3h9yZWS3oZ3A2SzkJ98P6LmaBSbwnPzEQzHuNbn4PRGVFAu",
  "key3": "CTD5pdSyiKXeMSJTAcyKMQfECiWFuttzk99gAoL7GBfoNbaACFFXJXtPVLxX8Ac89Y48TCHejLwdvR7N9oJDPRG",
  "key4": "2PzLSQQGSkjHNmW5scc3tkr5rg8HJEeVFevjw6F2jYJizjjzYFjzsVquVeu9ay2NPvY4me2WHmwjTfPEj1VpaFn7",
  "key5": "4ajfhwydzbHXAcCs4nk3KZhJTDUjEX1wbHPvSDFRhfNxLJLHh91dwZ5xob13jhqEPWdQaqqeSxMm5VfppjoBxxLF",
  "key6": "3g2bzC4X4AvSDL8AFWtcBS1oqUzHTw8zZLeg3ubmnLEeray4MvsheWGfkVAcbwnoCVvSDopbGgwiweFGWLuQDA6J",
  "key7": "4CahL2xG9SCiujVW5Hfu7aR72jwNqkQADkDuHk6XryW7hPR6JEM3LFY6Kb7DMgZL6EHXFWmCi2th7MeR3u2fpLFw",
  "key8": "3b1SgUgZppJxwpLDf1FX77dMnXM7gWdvAXabBQr5tzbtHWGQ4rasrRfZSPCdUZ4qcA9DRCxiM7rbatvzN9g4aqGK",
  "key9": "tPPzPmzdymGwFws8Avt5CaeYT8ja2wZ82X6eoVYTP6uonSoBRtTnsKaKdENk8zGv9Wok7yZnuB9dNtf6A4SaHjF",
  "key10": "3gtGsJWRUZT4k2EbdXaGLivQc2dxizirdjyDE4jh6sLfAe6CUHkCTwZL2NL4VZDpvwVGEDMHueGEqQw97ABg1gps",
  "key11": "5icCTd4NqJkdUgoAgLbmieeGzUp4CCPjZpL152gxNYt6r6wiUyJfsAyvCdBJqRWiQozsWHRg5Ym3dqAWq7CUGDVf",
  "key12": "5H46ewGGBCLhwVY8KHzJZxPH598hNso2WzibCX3RNGm1uWcQhhXN37TgEvNQErTVmt6okBNYWL5eeAoJyzALSJMV",
  "key13": "QWLRn2WiwvWgTfXLUX4PPYY2TjgWvW6P7voDN6peqYioGjDtj7U9tnraeLrmc9yVgSuPbepsqnDPbZuzxb6PsXM",
  "key14": "2Mk4MXrfQCHuCrxSEbDiGRuwBrWKGCh4usumxrGyHFQq6nsVfcw5CPgrkCDWfQYyKmQAtTU4YSYBDYhPKgXC63hp",
  "key15": "QR8NhxAXVDEF9yk2Q5ZWZPzAUf5RPGmwzwHNsb96KxpWVoyo72iRLbVvJHKkyoWKkqHboXKaPD81PSdW1byLC7S",
  "key16": "5nXnn9N6ETXaayMpQy4hmbUtCe4UhQ5wXRzqv9UQJzEGeTnqUKXiKYzCVJGFToNDw24CVBn3n7VSeZ9fDbau4yVk",
  "key17": "3UbAnooS268hpGn9MocATsAuUFEeBEq73d5iZ6UPuhuiBjjuEbefQLxc47FFtMvEgpuTzZbpoe2nvJCe1DrkB1Y2",
  "key18": "3BK5dVGFwQbZqMK3MrvNSG1AkqyiyMyq99GzYmLw25nzuMEpjzHRodeYsHfpFWLXZrMzfGzJPe3KgiNdf375Q7C7",
  "key19": "5kVxhd6b7SaZMW4ZTVkGwo3otF19HWFpYWgZ9SHBpDZd6Qd4m8qhfmG5g82eo8hLVSc1s1nvLjT3oi6kBuwZiQ6W",
  "key20": "w2uUCwm3HmhjzKtCsZgL7eCPo9nUo9p9mXJCwjNaWwvFzfhGqvPBuZRUyoXE2czReCB9BSSXXE1sZAHYze14jsj",
  "key21": "28LA74m8HFiBN7pYvpKHYbEK2naq9SfDf4mKAPpmKQYcHS7tt5JdJBVVnUjf848GXtieQuc1CszNxSYEtvbkmb2V",
  "key22": "25ge5PwyzTW9m2gXXxGo6M6EombuZGzRawUNJfcDJhgQhSD29VRu4jfT7BHxbKwB8Xi5eGbEspPJaWYLJRYohhnN",
  "key23": "4C2taTBZHCXKLwsxvb33rkArTfiHy4VAhTQ9VFkNzNK7pxZWs9oRLi2qa6hTsctVGvPmgYJCE71QNfYJzTXdzeRX",
  "key24": "5ri8ZAuiWqhUsDukGqk5UMsPHsXNVT3q9CTdR2Q3QZ6DvpLu52b8m6Hd6yv5k91VcQd71LSdknzMHiWVtQUvPdF2",
  "key25": "65tvrapU3jbbw1XcnxRNY9HXCj1ZtcNhS5mtDCSVRUUTmFgC8d6HQngL6Lqnm1CJkbYX795Dwia9kD6DXWQKjAdb",
  "key26": "3kspaGWDKoDrxGzzGDXdkudttLrw8WeEXC8xfB5UDX5t9W3VmfccUD6hBYQjtQssuk9mgMekbGCninVArVYETP9h",
  "key27": "39ydfME18i8WnDafrUgy68TeVXzzGfGcM1uNxnQfmKzKtSgqhjoE7GRfoX5vdCJzvN4C4jXD3YHS4pkEoMD5BQiX",
  "key28": "5ejAismWAahMBTDibHykbGFRycY2AXx95fKy1DpZCrdzToLBggfG8wPhXzwrydRJBcnXYHGvFfTtrcWzU2mP3Q3L",
  "key29": "4kLaD6AzGcJ2qbZPdbc3YLjJ8q1JEbKNtGeX8yYHKghauz6TaoUY6mA26mYSKXp4NUKtmakcq8rzmbbKcTpQwPY7",
  "key30": "2S9FaQMLCkUb9x6jMnrEeyNE3iXkxzj74jDdkddN93jEAowjwNbyfZxGX9EaRpT1a27cwFEbgHZRU2fLUC765kTD",
  "key31": "4UEBukuT5LocDvj15kQ926pU1PabuiXonZTeK3gzVv1vcy77UgwviqLMxpiFbdqmUhkWDGuknfUWRqUbPtLn7BAS",
  "key32": "N15dUYRDjndhFJ8aYUuaTE4ktkCyMTNtkkPVHm91UH7121M2NmQxSDxXipv4my9PKSs2PPjsrWXxkoW9NTHCfQx",
  "key33": "29xyy45EUngCFyF2W7XqHSv5A5Ph7jxRHsZAusRB4aWfeGAemrvCn5LDmXzArYMif9ELjhcvYaASZf4x4sZsm2nY",
  "key34": "Rm8PtGZHGbQ72X21KPxApy6k4uLfD9ExR1UvRq5UcCbScGFmcZM3tPNgKXDvs4uimGr1VrQ58hoxYAHxx8ykJwG",
  "key35": "3BUM3KLmZqyUrXG1dn6oTiwXw76NVXFjYF2txctq6cjSKmQNf8BSePHrwVrtbfRFzWMMSW24kikae9oMj5gR7gZV",
  "key36": "66x1TwBptCKyhkCzwY9tqVg7gn6H4QL4Q84tMwTTxPMNnmpQtVfcefSBEKv2G8km8Ex4fjQhNsRM9bj5w5WzoqL6",
  "key37": "3WixCt3FQkAzYKFXWAZx1DmVAkHK8XCqumujLgx52BbzrQBMTrgFv1W53oqWRuoijZcUXVLzUUHWmijnK5DL5R3g",
  "key38": "2w3GntHXskLA2JzMcmhj9rqkp2BPyMRkxTgHSN8uxRrqpp5cVhvdR85GqToNdK9URPqgsrSfDiz9V8ZdTtDfU6Vz",
  "key39": "45QVnoMSJTgnQ1f1LffMPE5GjtpTDBBPWjqzRiSa6FVigFjksjScfABHdBuDExpp3x7wdd6p9NEoSBaC7NCwC4tz",
  "key40": "ybinPLF5BichjNSaMhsoXePsqpJQf87eBKKfWSmupUp9RsT7YRqAR4FQRq8XGo8yUiKF6thU5Bx4bL86PGdLdC1",
  "key41": "2DXUxUZju971icFbiMiQgAkwG6U4zh8fsqQudPNxAwJchfimURo4QfoczbBV81pVC7LzR7K3XsZKTUGpnjnALf3q",
  "key42": "4R9vwn6b62mo8m1NaKvUoySDi1PCWqkAMB71VhV2C8oQ455c61Y8EVEyaMw8hmdKtxwHSHdRiQgrVffb7d6AzrYN"
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
