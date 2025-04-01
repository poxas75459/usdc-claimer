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
    "3EShqfWk9qryw6ijzA7omQyZJneWAhRhCsw7KztQGhL2WL8SS6mEzCLiRWDFyfqmX2phCgMszmpBjvgghqukjF4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wcnRPiEcVjgrmt2kMetLRnHNmBh3oh7ffPmVVqNM5j5ZqdBtuVmr6ecx5eDhk7qEjSDh5Er7J18246RfAe4UADR",
  "key1": "5nmXkhdcQrPAL25S2w6PWMGfmGF13YMz6uXPRRd6Y3W2aoVVguiH1dFd9GCWbtpmui9CfQFQrAtdBebf4qGWHiV9",
  "key2": "5DNXAhAoGjHAgEQjGXmfQuoHr68sVgJ7WpDFFtFHfK5wsA7C6mK58pWotcFMbVWCAMJHPgNbMTkjmqf8EziJrwaK",
  "key3": "67iNtBFksZRSma1m9V76PSBZWKGqWAYxDH6LWA9KPQfAGQPtsZq1ajscpe8GY8gixvKmXorctt1CW3m9PncTxZ3L",
  "key4": "67NxJeYyEd9v5gWTxZmdBiMSTfrZMFzyEXzSeSRPymxHLJzYTESEAxT49EMyFYxbci66jndMtc1idsffegq9K1Pg",
  "key5": "eVXk1GngyZoKUThoMUEnXUTqDLajsGu2FoySNPjTR8pfCZtKvLfcw1W5R9fdwcyi3r5njhpJNc2r6MkFzhbdmnE",
  "key6": "5L5haQSm1kdxq1NLgZsAgwUgTUJWbFXJuXTkear4ZtSRXnWju9obgqHrG5JD7gwPjWRVC5WHfjMacDEatejk1Y9G",
  "key7": "27USa5vAQ5PymUEyfsjY8fbfVZYyBPrS5LyoQjEAX8uoo5H6oRHokVAgt3v8Mg8jQGAH5rnJ3F8L8PBNw9w3Xt8J",
  "key8": "31z9s2ndH7yLixrqeGyBR8sQxm3T7sAM9CuDBeoLkEZrtb4N6yhHzVEexzptgMC1LuevCB8YKdJQSZWEthj7RziC",
  "key9": "5Jdh3K1dVjzC7jmK2zAr38aKSeFyoxEwDgNJynRYxc5WQPtfja7Rcjp7ajTuSvoHXupBHnyvJi1HnXFUepJkYRQG",
  "key10": "5jNjWnEq4XkpUDwatP6CgaSkGBvMURBoz8c2ngKWNpLL9HZJf3TBZdn5h5n8LJjMDB6u9to2T4mXUY3dF9CfVNGb",
  "key11": "52rMUApFxg5YJTBDQnk69gerSkG5XFVwZdiDWXr47Po8pLLWYGFFvtwG62jby21fJRbWc6b9bYawmwHW4LoYGL4y",
  "key12": "4coFZzj2eXgszXsoZGLomhTEk5LDGgGaAD9L1aBVW7wD6XGhmjb2FpGwTQHL1B37i5kKb9CuB4eGYS1VChmwgxd3",
  "key13": "4b6iNLyJnzmcbZTeZcG4ZxXB3HgazVZuXtWvEzQRuYUz11E3FCpMFtx8SKcubSB4b1KVeetHKxtp84cFYa6jvtJt",
  "key14": "5s32fvocd17tja9oybXJNHZ99kVy9fdEHbeJMVGYYjtiUCfWuTxX9tGGmE6Ep8wonTjYtVBNPfJ1FjrZSHUd2yNE",
  "key15": "23fgLPMRTVDxhcshERJMPMpzBhbYAuPrQQ2q9c7uYe3VFYyKcT5GiPxpTetg7nx6tsBj9SVrVEbKqCd4evTJGZJa",
  "key16": "5d6SndjZjX4c65gJxNHDTLj4eAdn1mcDuZ4ohwoPtWgAi3qYVxcTxd82gJ9S2KsZq9fnM36TYypdiEC7syXJY6jR",
  "key17": "cd3ngtNi8ZggF9mKXZ4s3xqpgLsqP47pDgHgrq9bkE3W63df2ZBHSSXDG4jgVB6Ku4TSrmZ5CBr3jpY7wdz4TGK",
  "key18": "4RjB2oVzQzRubpgD6eEVfarnxj7HjzoBdGRuLNK6RFXPdnYknvGiTgPyTkBDmJVJJwQbFSHFT9Nb6MfW9cLqA5tt",
  "key19": "2vkQpSx7UaBJMnmoGYpAEiPL4zYQryxJKLbHom3y5rUTrjqEqsVnJfYYfj5QW7xzj3QAduQYPgycoowNXtzi6V5D",
  "key20": "2ehtiMweifJ4H7UPwN5ExpR1jNy4eHJztvKkCRKocmx91aAjfF6iPrkUqwhtLgtsCAULcPa5TJcffVyryffGJ81x",
  "key21": "1V4QxdGhYVZsXQbsAJGDKR4XHBoNx7GwF8paf93nKnX6hpLjvcSpPwLyrqnd62hgRMBKkoaa2QyURw5zTy7hWfb",
  "key22": "4LeP1pFtPyh11yda13AjA84EXpNFmM8ZqurLwKvLNZegkppynTzvCuKAsTYt7mvTnA5pEFMQSddZNh3PRv8R3YYF",
  "key23": "48JEoAGoU88SA9ruByWM5bt2wtk5L6iGWVR91h8JJeex243SPq2dZJeXFgU7UpbRR2gMiByXVw9CQBai3vU6ydTg",
  "key24": "31cbAVmf7bt8vHPyz9tJiShxjk7jPs2AZkJV8raDeGxMUgQXMM828Vp2nB1SrWz3XSZ2uZ5zr7LZoPNmj3G6BJQp",
  "key25": "4SV52tUqAr86bAzhxk4LNniLcVG59WHPZcMkXzKUJhkaLouGpBWXnnSgAMugFu3txXgQY4weXr1ZvZyVGweabRvv",
  "key26": "eDnCWv42c2bykb3uQ6Rz8hdNo8WBUKZcfmgBWiwdW1SbXZAvzXeseGuz3fFkkotYQTzDm6uoCDUJqDwPx2wt29b",
  "key27": "4EgLzFHf14m6Dcdu87ZQ3EohVfDvzin1ugnan5kycrodN9Dv3SDzxPbkzMSNjj6bA2Fq5pG3W93kJqXSDbbnbhxX",
  "key28": "4ML8sLUrbSLt9Scngf2xx21K474ScdaBe7kMxK2U6t2QX66WVQTaoscXzsaK2oK1VnqWn7j8LS6uBB1vYoZndSgE",
  "key29": "3xrGzdiSskQ3V3arnHsqNQUznoVwjj1DHbkjtXe5PqSNSMrdLRtoofmSWeBJkRxKaHQfm2n7JCG15owfyaCEG9Vy",
  "key30": "2dQSjYvDFSvZxMZwGYYff9psYtFXNMgENMTgY2tjhdyvkALahcw7N1WnnMUbVCZK4b89dxkqeXQMSozSdgg4rbdo",
  "key31": "5jqjEhb6cjTGDarczxFCprwCXxjKSH5Xpys5Jnvq3gJMU1kxcQ6yjwfCAVm1mNuoj1W3XanhXqgrTtbWd72eAi7L",
  "key32": "4d55HeVitTqWzz7QfDAMiLNPJbeV7VaFqFJmAePZjJrEhmjWKFZ5qQGToPVyHDLEKU6eQ7UDHQhJsKa2QXebH8tD",
  "key33": "315bpF43gx55cKD6trCP6TwaCqRVkPcCFgQmUQ94G6weHmLgoC42bWr2oeK7XpUy8fBzRFdJrRN8tahTiSkggXtN",
  "key34": "5H3ULGYPzE24JHAUgvoswj54ZmhCH674Dquhh1RW5zKFCXduDRUovJYP4DUmQuxyHYyBK3vvQQ6pvdZVkxhtxXa8",
  "key35": "4J2qJkpne3p5KvQFDGdmM9PQzG59zgvbjpKFuG4tkPUiyChxT6JkJ8CFHhgPKYUiDcQGi4Z5MrewuzSTgWVQcWpK",
  "key36": "bEC7rhTf8ocAc8asYQ1huupc1fRSaFpe3jwJiLDJZVgK9gLMRQPof8xfTyJdfbvhvZi9f9W168e5c4q7Ehc9VGc",
  "key37": "mcJFsp5zsPiHr3LSW9deDyJJz3UDgVksVpHtfe8pcSyNGi3gRUAM91bXJaKLgR8aDsiPg9drsFfWy8BpwK3agJd",
  "key38": "ZLKN2RNCPxkAKCYYeHLdwiVXZfUmR7UXReYeLzNQgCGfVrmLrHG1mQPsmgczWgmNR53JWACMF9r9Xb4YKjN582W",
  "key39": "5mtpTkxcs2x3dsg6EBcEvMDHbbW6N9MVuCKyuYn55WzxXEQcHzBWwCabyury5gUD2KZH7fkrXqKU2jcwbkbyEqn1",
  "key40": "5Uyh2PccfR84a2ZtSVpsM9edq2BngRjQsckgcyEVNbzaKu7LipHqXD29mq9g3863aoBNtsXHWeV57UUC5Abyfqur",
  "key41": "2LJhbgU3VW2NXNTwPswKGsxqtR5NtaQq89Gzo2hFJhCrCXBaYrdVxVP3jWkwSqpLuDigsRkVF7SWfFMEf7AUnvqJ",
  "key42": "5TKZ9aVFPjEnJMDWy2FRPoEwCBCZvBgnmZEupwC8nnBujnL1X3HzziETeqBP3Qt6g3Ncwa71aZF4zYkHw6WTqaW4",
  "key43": "5aFDLCjQUevHp8amex3B3uywvHypBNtks5gMB5VHSb6rxDMupfBc3zPNoade8HCx5BHjMvUnN37mYpmjkebkvMhf",
  "key44": "3PSg7e7ohp1e6SXiDropDe9ZE9YuJWPtSV18hSVhkqfk3s66EksSPVDkgWZhwLsCeUNjHiZuYuhyCBxJDkjZmuyG"
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
