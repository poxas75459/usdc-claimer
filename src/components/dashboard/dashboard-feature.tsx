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
    "22f5RbKmiqyjWVcA5Hsrd4h8UGjDwU4DLWdT6bbZaBy2s4JKwmM1faZszy7uM8aHHPXzmpKowi2Au2dnkbAco2yS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y8NocgcRyPTJ8y1B9EtDhKJGz5tRz9GBfVt9NwoyG1y8VN1f8yHTgbHj461ds427E7q1uAHgCDwoaU7B6fzCV4j",
  "key1": "FC7aqXpx6GjP2wooo7wsPPKcSGxzBcCR1fSmqv9m2hseErpXWfxZkZQmv5rUm15idEGMHZAEeqZqazHGHxL7pLW",
  "key2": "3QYSU5fqyNP7JSsQxyRjHVP1XnepszwtYTphy1oX3S5XQzCxb9dTwQDNikKtpMKoum1JX9SK7iAmzY3nCodBrLAV",
  "key3": "4uGD7Y8MFARkcqS1X8kGhGJPfTNv4qy2jqhHYSzKc7z6K8VEXK3Hk1vjeCzKUgjkQdk2E7P9rZ7ELosWK7NwzkxA",
  "key4": "3AJBJ1KxbhvMyHdcpdfM79CMfcW2vmoJbm53DchjkudP5ifYMWcKqaLdrvjp69h21VQcQMaquMwLkabEJfVDtnas",
  "key5": "3RZTtTH3LqbuCZkaJtHNeCYSRxi5cQnGEaACTAKC81YKfTVbqhSVyFg7Jg2yM8qZKmZQSkEw54uVZpjBKW8RgrSb",
  "key6": "4FT2THnqaY2CCrtPZTeeGbfsYYpqapNaPCakLJLaME6rMi7exaCqjQc8cx4adS3AgS43FEggfc8N9cwsBWKbjWQf",
  "key7": "4N5MhXSg7eUChkWkvXuLRAGMmSZXG247c3MDLWU1eFzfmjy3S2HEGPqTet3wYTwhyMcmNebckMuRjvB2gHkfWJzG",
  "key8": "5r1mwjJFB5GKdP8NQyXMxEzXhpQXe6fkmRBA6D5jRJCAoy2ngsrfFG8fvhJXsqaccMor4BhDP7qZEHsTC7KMULJz",
  "key9": "4BcM6hetiLKaK93QMetZB1kAiGq6nWvou9Tykuduzx9d2wHGdfGtssru7F7Bt9Ctvgo8msGBcnCQurcT9QHBWPyr",
  "key10": "42WyzzvQGi2yYnmUYaevMbcV5KeFYGz1AJwo4iqruQJZFQyXHDDEK1KHimbHzMfozNpJix4ehQ1BEUGKwYrigrkM",
  "key11": "3UnKq3tXLyszXCyUdGiAL4WEmoPeDWGrjCj9k3p92CzicMMVtEvzJU3YUJFRkor8v4U2oCJwZC4XmWj6LQFyCd3m",
  "key12": "4YyUSacwGKo9CL6WYCbvvzHCMsaNSDX7NBMiPt7jyEq8PwWRhPzTdBV2JxZTvXvT5SuPURmAKShrf3wEGdf6Y47f",
  "key13": "3SP5dSiJjoHGbVhsTVv1DzvEwkKLP5MhwH9iFNycErz3Bx9Z9cmP7z2e694wRKg65BnTtrBDYtZieuMKYBUUhBT2",
  "key14": "2Nhxh2mPq5UbrZCissTgijy2f1ctMMtpez3BeczRdBt3yF19HqT3oKdKtYFkXkvqGqEuKFGbf8YLdZFPazDjuLtf",
  "key15": "4kt7YMUJZHsbduHMHbXatNRgES394ukZMWbRh5Pz9JjTktcCT7LH8krie6RyJDNjRtGGvpgHqVTKBbg7PC9EJt7K",
  "key16": "5cdfLoiZkPDyn4vUnZUoHAer8pym87DDxR3t1CnACk5nDaHveEU9XXjvjfiBUWwcaq3UgruNPpgY6X95BiP2XrDs",
  "key17": "3sG7DaEMCYTEzncoeyafHPrkTNUHZ9BR36Ctte3Bq4FbchMZytG4bhHEvg9Xwy4xGzS7KisPyDUdnNmZNTqSa8SF",
  "key18": "3QoomDQuERUkXWEPUBq4n1LicZtGV1QH5sKGu55aJsqNrbMbuHE9vQEsj4vsftRpEVo6ypXjqaBg12daar4sYVk",
  "key19": "vDb43ZLh9FBNToyUNAzt9DJD1foy7H1KALhbhfqy7ruH5RBwfWjpw5DKdZLAgxPfdSGJZLHhHH9SFW1gWjtH2tG",
  "key20": "MbaX7aSEzcaoshWpLXHz2LKBtUK51ufA3Z2jnqCDGBFSGQHQiexi8mxM69MjG92P2y7un3RumXHTyWZ4FV1B3ud",
  "key21": "5Ag9mUuKQHq8A9eG5JhR9WioaYhv9VhLc1B3p2mK2EuQuvyhmuumaogF2fU7JHkEcob7W3nc9G22BFPB2WD9ks13",
  "key22": "2EpHXXp37XbWGoKtAdV4Zc4mMAVKah48hppruwQsAim7rZfa9KSBiuNy3BmuMLTcNjL1C5LUSVXQa3gEkhp7dYNU",
  "key23": "2ToHWnLfzgh1mDzeAosmq74GbqUG4UC3qFV47zFwfR8xpANTZVKJYDv3JxxW1CcgdVttYjmh5LLMvP9xEgfQtP2A",
  "key24": "331zwMW1e4D8BcLtAGriTcYvV31eoVE7VMdBC8oCqHvtJVZCzHz9nNYhVDot5pCCdFCnyoXBozqERVnFMzeV8Lkt",
  "key25": "5TCEgDk9QuPPeY1e7KjAKa9v7XLbqg9euuxqCzWax8nCT4vTtd8cBG4Wtc9wT9mejCxapRv8UnhtYQVtBdzw7HMf",
  "key26": "7ZhFfKuGKLyJzCDXg3YKftLqzZiFBaGyHgcYCphhv7x65dNWL89hW9gYa7ww2PThNLnXB519n2RZNh55tmSJnWS",
  "key27": "4vpbp1wEqbivYx3188ZrsZsoqrBYGYftDeofodtMF2r5aqadLmCynRWZ5bP8uwjX2f5Rp27BKFjMumYDJg4X6yWc",
  "key28": "yPSoddrFtEQahVvQbqVJkUimeyFQ9XavwnsuniEEm4gPS1HsrF7udABfmHePGHRChgP11ADw39hkifihdBrL57R",
  "key29": "3929uegGscttBwCMdaehaQSdHGhB72trptvDQxWReyNHzsupz7WGCciMdZfKqqBT48kYFJvbNUeboYK8DH5ZU98L",
  "key30": "2xH8i5tpZBZXxqoSCrrRqUCW8TyHGhVs9eHpaSgkzJLn9Ng4Wvoijo8idkjzLuiocXBe6qmucr3ERx6MM5Geyvcc",
  "key31": "3YVL4zw1W43XVydchPJJE7JitTGHb4jV2DrTJyEwd7WbzmjnEY7yikTW3qx57mtLey4AbLGdxXpruzTZBYtRbCgH",
  "key32": "4TMhVxcvC6MLUG1sAGzWe1STtoZB8b96bVX9tR2hyXfRcU3qtm49BteJ6y9fMstYqu3AVNRHMcZBN7q9PPDQAGEq",
  "key33": "VJU9TccDaH5pd2hVHNCMHUE71LCgcNFmztsY6ZtCYFV2n7rhsLgQDudcNh3DCzFH8QrFZZWuwu9FvgyziU5zMve",
  "key34": "46tAtno5TTxJTtybpvQ4WB1izMXRoKyV5vqGcwKwT2zBNm9VHtuhQdod9uP6vf4nxXgNVyPFdiAhMLjLUgPMXFMa",
  "key35": "pazVFrGtgAdsJCYhDEoD9JCBRyaUgjVaDN93H2apSVErzKyTURBzGsaf57rMCyhVJ2qNiuA7FUAtT2gJbyFrGKH",
  "key36": "hYA3cyyvQ6QshCQbQi6zweHvxe5L7CdfZ8kdakwJSM2aJF8xnWSSjFRfwfZiXLFcXGpMGsbsaHvo7S1kbeaQzrs",
  "key37": "65uCgQt5Fqr2noouv2eTTYFdXkwLJ7kJBQZzpmJrD7B7uk756Xq59ELfKx1ZqkdxYgJai6KTUFtckeeLtKou8nLi",
  "key38": "2ezZS5KnqoEgM2SJfdTsDr4osNaW3VZrHh7RgxNzFiyUmfC92A2gRxwxAM2THMTGZqfJaTyt71pSzfybEHwzNKtQ",
  "key39": "5F7SeSowp81WAEKUzGGdgD9Y3SrQywpRSngq6rUdUzYHDywk5TmQXgmxBM8Dkrsn3vWVsNSMhy2Ly2QiGvVNBYyS",
  "key40": "5JvXwJg6SzqbLA8ZQ5Yt1k6oCHDXWMYCjERwGSm8y7bSev11uda7TrwdjZw2NRTovRgxUVKVZYgGwZPoDC1FNAmR",
  "key41": "3zpC9ZHnfuuJPDJE4DHXfGHXRs1aRGXJE1pyCEskPWpehQbNcEUq47ecDEyB3fScuAJdUav979sPsCDw1Xbu5PBG",
  "key42": "3sPsf5x2xGdRw5LJv2qdgrTekooE2N98Xgth4Nhb9beQLYs6FUp87nHaxjw2omnEhubFbSfRVshmeNPuWpTmZwqP",
  "key43": "3DpsUf1Wm7adqWk5Vcnzo3qXrferSLQM94YCM4ZaAjv42gRrq8Vi72buEp8uWjo4cHL2n1SxaNS7NRmbKNqvGpqr",
  "key44": "tRhTjWzFgvE6SBt6nR6mg3HBP1hmUuEAWY5k8TGdkNJM5qNjQT5hTveiUy8MTgNhjAHSjgyCUnCWCTjCwKPbs9U",
  "key45": "64YVCwpTfDRJ6PV9pfzpnuQH6CZRiwHp5qWRpYURskQAG6Rd7yXyLhHffFKdaeEL45MN6znip1zn8ELpdHfgYGFn",
  "key46": "2FCr3bj1HByA4XTp7z18aK4fp8wrEom5vnpYNv7W7b2GM6ALEJgbQnoaVdBiC4KDZtbQibqZE2PovB1G6GCHzfH",
  "key47": "437FPo4EXc5vG5EmgbM5VVdEHyQiqrDoy1xns2jAeJAGLnKUs45oxYWGpDSecSh1S3YW4zna3NBMG8zJE3rsxu4P",
  "key48": "92NB8aTg2y4YCufLdmt1ceU3cPDpVrgrF6JtTXg3X4HUeBdJWiEXxEPVo94UzqrGo5JmC13Fbq6LGQkPF6SxX4k",
  "key49": "3pN19VocUCjYtRBbdvgyeefPegPjnVQpWdAusJswiEy35WLWuDdon5uKuSgrno38tnggPBFSoSWVCnaqApuZ57Z7"
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
