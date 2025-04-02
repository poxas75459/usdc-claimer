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
    "2MHScoA4XPef3u5vfJ7hRNPwmjfWYP1qftS5wLkmD4qZeJwM8n1y4ZwquLccQXJVo16BhpZXQRyEgWwXLac8oJ9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xM2CkoGXnpukcXeGgT9owsUNMf6KnYt3wK85UmkT443EgsHDtmMjDEqzaQCbbskVss5LszRGLuT6f4EP1V3CpYW",
  "key1": "3pXchQzG979SDigiQSephxMiw5WJ1PeRwjXGD5qucoheu3YEzgxh49pgPkQQFmxeNR1Qm7RD3KwnE5AqcmiChywc",
  "key2": "4D8Q31j9kPM1GinYgdVcokygoMBxhbLH7eHMBijoL2DiQw5BhvuS5df7YnWTAQYsx2ytkzbqcfNZFhYnuS2oUPAL",
  "key3": "2xcEBozCaaxWob8zRGceL97cLweHTbivxgBjNcKJQpWWfVnuARRTDS3LESEGatWTPbVJxJkP1f15AFZyNEBrVyvx",
  "key4": "CfekMCFjYoHs1VEm7ePhSLReeKWp6R7HQ1GVrLFRKR9otHVW7Z9ehA27xY91xTD644PPSAqAKJ1V5eSDYxhsa2P",
  "key5": "2TeozATqdRQgPi1RfaStprXE4FDjPWh3WGnTH1uNakkZwWcg4aM8VasfwQ8cfEoa19ZMW1pVfRCwbHjkVCnwx29C",
  "key6": "61pVPixpjTccuMXgeuFsCqqgVGWwsksrfBMGoNRLfhRJjzVWd3DS6iHb8REYHcQ3kDkSe5haxVgcvimtBMT5KRBg",
  "key7": "3Jn8sTG98P6jw2UDT1EuotgdMvk6dKZbC28tW96FoqR3svSL1qLQB8s4uXAtZiSqgyATGPh51MgjAgBK6msZHonS",
  "key8": "2AUZgYQ4KT72Y7HECWAuWHuZuHGg1ghgeJLtjt4pVKgTvfdwC8fMobmyAbJXj2L52eHSBzkEZXuQqCpzJ7Xyo3Wz",
  "key9": "4v6i4unwWYA55hmBacQrEgf694kjy4ob9gVotLeQL5o8QxUcGubXeuWthu2tTL3qfpYCy2oieTJcyS27itKseWHW",
  "key10": "4JrbZvsc3rDQgkKSm3n5grDyi4Q9Hu5WTqBSd5BB2oVN3YDYpaCghxj9aspWj3M5oftkDHNw7nRTNti3AikFyomJ",
  "key11": "62VkGjEuP6t2RFGYDM5oSv82s694XsVsJ4Xyf57SeSQgapnhk1oXe2C6Vvfyz4WjfM9YG4MSfxVJAXvjQUAfD3Mr",
  "key12": "5HfQ5teJZxNVQtfNHLK4QPKQiwmamQLKnUytnMi1pnKtmVYbJv8ngpBPieFmu9VqbzcofJmErjtnBopN1DPy2k5g",
  "key13": "3i5VBnHqRUh1JFCkxmGdMRp9waopHWVczUrRQa4nngTUJBWyPqhG2dLuhtHRXE9nmgRs3GZ7iNbrjWgRWkEST2nD",
  "key14": "5ZRNTbpcMqJjdw3oqMqk4rzoSiWgMCNkzy68FD3mKHpV5EoL12PVScNHZbZmuvzWdSd2RqGVyBu474afgHDPUNvs",
  "key15": "8323BWJ2YsvHhn251MrV4BsoByK2MpFNC5tpabqnZxDhbzRJ68sq6usAzLT7Ny53fLimsjxsPRCUkQLDqruEYSZ",
  "key16": "3TLxHsPy5FoGNeBK8piUyxWqCve5CGofnMve9MQu5sUSPvxpECKLdxQBi5GdwYfSavUxQq6E4BFVjqzb2HQoh5iT",
  "key17": "nD89ZUAyipyRhASqCgGzMWiwCNpVQPcex5fWrfD4bq2sM5oHphgmPpJxbb4Utep219uHK6qazRaw4hyPTSbkUYP",
  "key18": "29ZnU83k5vRcV14SQMfh6Mxsj6yRNxbxtZD5Yt4PH1VPxa4wuwhLqFh4uJuit3WRGwkxVdfGMmSFu3ba6Pn7DP6C",
  "key19": "44ngBKT8Je3bVXnXGij233BsDab4RZpZhgkBS9CftJdeBEDF2ABAZquAzfSgJCssQjut5isxVPGKbBHJV2ByYSkR",
  "key20": "sChYHWSShqXuYXGY8vE9Rqf7S53LK19xLH7SWoXsjPNEEygKtHuGRth5NthUhPbe869cyKHAvBVkz6z2UfBUC6o",
  "key21": "4XuF7gXq5DjbAFZLKPp9Q47yvgdMK24gg8Swkp4u3DKHjsvtkacqHDN3MMu6n1TRYADYbGacR21LnTwhFCYwpdcm",
  "key22": "3pCn5RQKCSyRn6XWaserJgGwe9bY1LLGWh176bNet4KQdoozzn95oP8kMviDjFw4FyWFcvySWHdgihfaQfoap2Hz",
  "key23": "34tifyThMQZDorZWW3rCnrWKmUVqbfbZGgv7N8X6RDS4YLbdY5gxdQbdwAdCZHjXw3EaBdTofArfZwSvB68Lyu4E",
  "key24": "5oxHgcUcwj6EESNqm5HaFXr9Dddm5AWsywUT7iE8bVWU92XGTJM7btK8y7zLfqq2Pt8R8KEgR98HaUVXxBbumohc",
  "key25": "3xYmJmQwwaABAZkEjQ4kgQqCBk2RH9N8Czir3jkb4VgLthDBc7emKrKFa3gTXptCNHq88zE13xPQnUxqQwdcXzEv",
  "key26": "4hiQmk892eN5SKr2YrxKyUjT8YBQ7JunXbDvoWZrVu8zqFHcADfyP285odoSN2SaCWdSvJV8Mzx9k6up8T2mTvJv",
  "key27": "AHS1o2S1RnWvesJsG6HF6p2ZFqpsWoHbEWBndneZMs6xJWt9tieF5ZpX9HwGK6TESRh7kuhw8FKBhvFJmYvcVRy",
  "key28": "jadRpLaMbcPHp6RCr6PU9yMEp3YXGC6LMYce2SMWXznMSV5nTcbMZ8LyqtZcLHLxJ3eR4LWyTn9MoVNLNp9eiMo",
  "key29": "3hCAKtdEPGPR4KXA6hrmUKktj3MEzTmFq2DYXQQTDGb1a53rbqZ3NGTVpbHcsrsL97vbQxZMRfud7Sscg3UDDorY",
  "key30": "hzXXAQn1yukv5YkdqJkTwPhHbk7h1MxFcHhtWzE7do8qpy1FHi9tXo3JRtDLJCSYDbYhfMG7Xs41ZVWvhpzNiCC",
  "key31": "4YjhRVFZwwoYbETspTNp1Dy6p8XjFPGkG641L99QmQEccuXRv3kumRrvFP1XJjQzudmspQQ3m2LFchziYg2gfivj",
  "key32": "2Aw3R3uXR7NgcBNW5QqzUxqeVNGDLVDdnwAec3FgKgu2sjf48mmVzRQeUPEefEfdA7PG2362gfiWe2xmATF9sfnj",
  "key33": "WK6ixb1bAiZVMPvuXpUUrdmJrG2fKvdcc25e6W2VBByHrXkAEkBc4tvLgHiVYHxF4wXEY5Vt9r6jvLAHPp43Jxa",
  "key34": "fpC3FSNURG84N4Toz3WyMALHfi77G7oh78uHYHPhUw8tCsQwX2ziWHDw1oT7ntM5FXnzReDHrwbBYhDpoVzB8uV",
  "key35": "4GJZtHBE7GEF9KUzhqyQvhC7VtmgWTtJoQMHRpiB4YYLmvMPp2DHpYEc6FLjVQExGM3fccW3tAnbdicUY6u2n4CZ",
  "key36": "2CFfRfeNe2GovXu4XoY65C1NvH8RLyETd8nwVJi3dYaCHfrhAgFi6FyRRp3BGKtHzi37VPmqaLCmBfBXkVtcZwPZ",
  "key37": "oLN1fBJ9rXeoV1ndB4m1SbomwQCjsYYkYH8isSCuszg2ogKJ4ME5MSAiW2VDnzjDyAG8ADqYMi4WybSUEZgVFbt",
  "key38": "2ynEKdBTKd6oKzRnh44JP2gV29dXRjeGqE5KFxNhVWAo6bSsE3vRd2rG6FXKr2axguDKj3J2bLuZhdXhnN3YYsoC",
  "key39": "48czYwrkgnUpKQFCq4Z1o3VNW7LRL5LWYnVqFDNdsswPTQALZMQ7wEz2uhmaoT86AeDdzSvyBT1TXe5gcro7rEdy",
  "key40": "2T7T6K8nqTgFhpCpnM5jqe26oJ62BDKxD5YFQgYDa43KAhW6ALxPeJvAhFrwnUpWNF4e5VSBrAwgM66e2k3xLyoz",
  "key41": "2tsk1LZ1uCXrLJwLQ9WSQEH2ym6k6VjQWZsmP1gd7BRFLe3bVXZpzw2BZwU3bJSLbLQDCLQEqihpx4iDnuFHNdkJ",
  "key42": "2d1jNSTz3iDfnmWKDK5ogRHG3RPabjB4UBtuMySBMGXNEt2MF5wzqEsyViJucKizqphekxmdUexsVWLsqPfLtAt5",
  "key43": "4hR3K2rhf7nKXZSptBNuDV8azcv8chwG8smHX8AFSK4E21QPvoitoQXeRGHs6djsdu7qATJ6bWUrSH6F5P4R7ZFX",
  "key44": "2uc64WYU2E3pAYkrV4JaZBgn7ZC21Tdf7vCXuex6SNj3WGkbFHA3shn5iDegzHbfftQbGSkmfiWfR5kBZnqsHL3H",
  "key45": "tEg5w2Xyr8YWm2FhGEtvwrpaKGokZ21uyhZ75DQs4b78fRGGsh5rs5YiAt6o8mXg6PPmSZwBGupgayugXBykSHv",
  "key46": "4UaLVt3xsCv9SeAC5FYhVwAqq628rUrYQtWq59YALAaoHaqPMs4TncLMg54Wfk9HUKihyr1TanYrJtvECARJdwrz",
  "key47": "4NDbF5YrU9qbMH538zDD4opwQx32F2bBt8ZkWLXgc2Qcrdvdtg9Xrot6cMcrzBTd8ZoqDRddEYGqgWAiRAgyLLoe",
  "key48": "Bxe589YHgwiv6pqMV55fZjD6xLzcWvH5w7DvErVuWcJfGV58fSeKzvVy9RMmp4Fr7UbyVRyPbW5U7aapET7nsJU",
  "key49": "5xn4izeRiYVhjAyfmXLH7ksaY5LUYd8pkUdJ6eztpRFkFLZnXB17fdAFfXxYLAbXosayYHfaNU2iVQWFG1zRxSMk"
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
