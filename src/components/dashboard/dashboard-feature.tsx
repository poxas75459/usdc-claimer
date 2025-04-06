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
    "A2NC65kjP1YMq2CmuDMgzw7nwHhYXvXdfNYRegJRrV9xZCJTnG7ybxpgXgKV6w5447oBds8FbYPu9ehL6yW7PPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VZMkfgDgvqk4A7Aat3meQqByRF8GBMXn4zWab4YbwDc1rbgqhEsnh9aata2wXSkFXVJymCkYDG51GiUFBFsPPPE",
  "key1": "5ZU6JUb1zGwhMYXw472U8ghsScqfc36VUNmTGemUFYPYjw4GYciSR7hCMzXRwEbWHCrcRdcpC2VnV3cnTJxQZXpr",
  "key2": "2KSGYHWZYBYqaZ3vrUG5AMZG7oCWTWwep74ykvyYCgNXvP3CDGK2mto77uBkHw6xr4gabkZFrBV7VbvHsySe8Mc5",
  "key3": "5NJYvNk81VkfLJ5615rggKsG7KwHR8exp4mPrP3cfUMbk7NKrkpMbkCCdxbAxBJQ43z13b22YcsbBxyswGY9vpDM",
  "key4": "4XkUneB3HzDxo75mr9zrrVT7RrXnHN1ZoKSwh94az7kHjupkAXB9S5BD7ax1e49ZCCjYCNPwSnmmzJ4NXbLFgTGy",
  "key5": "39LtMpmLBJZpKG88KK6yAE7AWutaAPxFoErHEaxSrT1FLUJqrjjPzDo3AYDwGxz9ufShTV2H8sL9d8AaKoUNLqDG",
  "key6": "57UPnuD5KzSzyscbHsVPy2iKKuL4HCZuwo3MkxdG7HY2AJFwvnkw42xyrsC9gbwg1QJyv85PYjYLn5oJWCDjgFTw",
  "key7": "5oT3RgQKxZN8N7JZrH9yCikpPARJUQ3oCAkmttWzMFzCBAbxoKnBN12svUwU1hAXAd7EkYeNajnQEkGUtbRQgBbq",
  "key8": "5e52GdD75r8ENuL8J8nmEMo5X55NcPZGYyQ1KZFaNTgyLVTD8Bi9o2Y4MNbshddDjbGktPvU16b6kKRZPmmnK8Wy",
  "key9": "doKbxvJMKN93L6LQ2sJDG72bKQsKbb9V4eWQBHeMhXju424sLgcNKAzCgkJWcSpyNDc6uX5CDd11MbR2Jnfftg5",
  "key10": "5CaZcv9pRMbetxFgsadDgqQpC5LoWrqgb5WeH9CWwfb16bv7XxkbdVTMAYdszsgJmVct77RVc7gAgyppDG1xvY8a",
  "key11": "zXSFnFr8iTPhN4EWxjsJsmKjXxzwSQxArDWs43bWghaHfiqPyzyKV8mWMxLjNafBkMSJTFHHtsKEmV7pcDoh29U",
  "key12": "LxRYhi1u3imdhDJjZyDrrUMLZXehGKj6j2BB5xSCZGr2GGf4mRLiHQug4VxpyUQaAYx9y5TR9TC1vmhvcWsGvfB",
  "key13": "9NGSk7q847TQb1haJYx3hpccX5ZZffRaCQtbbe7v8gLNViHmZ5zaXyHV3388oWGwP1SJuuZ25xJ1hfX1gWWEg9r",
  "key14": "JRmVgNWFwsQYaX9c3EdGBHdLyLc6q8RHVpinkzWPRLSS6aEMdbqgmjezUgNrLdz85okBZXkXDvRuVQNu8UnR3wv",
  "key15": "4bsdkepaj2A6PXL5Jw44XRUsWPTJNhzisiJ5revpyKtreGjvv6SecMjB5C9wGecaAm6buyqDSmGLMnoiQQ5zVwaJ",
  "key16": "4KLEwHckFmnBvubJr3t99iuRwZiV696imosNNiuaAdwVcZSjkFYVmnNZBgSeytNMRRXNc8MC7P3wFeZSCJVAHrJp",
  "key17": "2zbdbQggKBc8xqdVkhFt9mJDbawGZeuFamuNTTmJDgzc9H98Mafs1q416geUsxbU93pK2YK7gZxDdr27T46PA3QA",
  "key18": "47PbktSyEhvbg8Qyky5S2cbd1RR7XyMJt8jGFwBkDZXzxYCNt6w5n1tTeEG233srDH3QpfaLg4SaNF5zYpr657n2",
  "key19": "5CFbY4jLToStUAgTtiKm7UAPkDZiW4diYiRZmoouDPQzvmgPs7ojCmoqJf7ZijrZSu9vQ8RWxKPnxs3vMgWKGw8p",
  "key20": "3qY2Ct3a7KZ8Nmh8P5kgTRKeif1vL4Zd8nRk5fwJbCg1X5HmWR56VTTjwsyy51zUnkv8DZ2a6L31ASN2FLjmvk9g",
  "key21": "2eJCoNH9QzZPrhhqRWgQTeuhMPk2QF1G9cMCVLdqcpskmw9XBppFbHbjB6CaQmTtAdh8a5bSWFiCEFvD8wcrB8o3",
  "key22": "5sQSbAAGNNGHNux2CC8GNxa1NYK5LUpanowQxVs6a3ZpJMSXwnxFZcojiaaC5p7rvtp8rwo9WUkNM14HeK9ksCCw",
  "key23": "5arzwZMcsejxfs4wJLciNzg8kG1GYTevzE4HmE4pe2vqt1ez2FAmRwTUkNCgJvQY621xkXw6aqn17NsQaqCahvhR",
  "key24": "3E8yxnZiUQtM9WDUNGmND1iFXQ474UE1kzSs6foc2nsZjwAsRbRh9bo91ua9cxauFoNtybiz1h7cwm8ctvrZ1qcv",
  "key25": "493zb83MJ69PmZTkNoDxnR9dWqYP65BvWmnpqRamWQuTS2ZbfazfJzZBVPhLYpC2F93mT4B6gUsfRF6CUBWqQ31",
  "key26": "PgvjdsutJPzEKcgaCyeZCyF8TczbZ3Lc7wEiwAyDh4yJQVPEZp3VRyoeUxrgUAFqSQfe4hcc3Y5yYjYxL6uDf9b",
  "key27": "39Rks4F7uG9ceFmwsCtHahsVacL55yy1SUjjVFHPDice59iWVEwezePsKZf8hydU41NeiSZfJu5dVZhL5MadJSAt",
  "key28": "2xwaJQMPaRzYcWYNKFAV9skap4vGUogFKa5EWk68Boz3t7wrkWhGv9m75QLd7ZLhAmTH6ezvTyebjXEdjqQN4dZ8",
  "key29": "32WCM2vr4K4Pafcz8C8MYQNq38o45TebCzzEieguf9EN8W3PV6dJiRvmPbdvWfhX3c7xHWjcifJ9nivSGHMC9VZu",
  "key30": "2wpP2kYPWCeCDF1gJMtaMn5CU1eXdbjzM6uZGLbonjGzdx2bLbH5qdzk8Hxazx8BdkPxZw4EvEsnKGU7WZcENGL",
  "key31": "2RV68ZDN9esKJdEwcwCnx4Z9Ho9CyVsdbqjtDvmfaBqpkRjXEySNtctELerr4SU31bxaAMwN1V1Sina2FmDQw6Gd",
  "key32": "3smZm7tfzGApcnYEQGZpKpruQwD74EwWX6CUb2JXAMaf4okQtSPnKzRtf86zdusKDY7njLgkU4YKZYcM8YynS2y3",
  "key33": "DfGr9o5n1Wa5tdAerKxrdYE1GaBfadGi5dFpS5tituv6D4eGRwTsZSPG2yDLAfckg33Efiqy5NZrPsfGtjkU63W",
  "key34": "53PQD9aK2dE5KqVZtzK3nbHpYK7ouEAL4tqidCfVmkXZdRfcSw9xPEvSBwN3h6gZ7oNr8N3yjq3Ygs5UU29A9PNL",
  "key35": "56TygoT8ENpVzBZHK7GLwVmNpFzx5NaArYQViCu8azLRdUAC8ihSqDc3ofB6JNX7KwFHAWSXHXVtKmSuoYGNiKjM",
  "key36": "5hAdTPNZkoqAN8JuRGGpYz7n1ngHuZD33kWcWkSWdYLU3BXvH9SoQGxQ2PMPTiRQnp74KARPagMx5LrpoqKVrhu6",
  "key37": "cGt69PQfaGn1AgQQ5RdSY35EcKns7TsRWVwiC7bJFrpBwC34cAguAYxGyQ9NhJU2Wq5ujkVy79WyLx21kkqVTEi",
  "key38": "5RHUawLz8aVmqVMwT8tY2esfYezKu8ERgTKBFCjGTanXPxMstMWp2KD3cBL291jqFJhC9uMjSBZ5KY1wPGLhPsZr",
  "key39": "4s2Pg39BiHth6efnQKPjjwVSjHTJM8r2eSavApzhGj7oecARsu4GqhoAiiyanRLd6YKGfUQm4StmggSk6caPpRZh",
  "key40": "4uTRMKKUke9m6TPQARUC9UBBGL85jDpvpLF3ibtPLD7VQQx3zFQZMyhjpTxXmpJs5yUVLCVSJduiWbE9Qd3k9Vkq",
  "key41": "66TMdg3b9iUmeGTroJn9fKEFr9ZookbNFJEo2mP2pvera6yf8YdTWo3ZgEhkoCiEXJu8fo6EwQTJKZBnpjDKugq1",
  "key42": "4SyUH9hi3ntKsAjrzACiaHQtEPLfXYkrdLccB4JmugTwsfuDw2sH1KqyMJmf4ZXQDPgraFkufvXUkiHGHq4xieGi",
  "key43": "n8Bt4vhapX23atPMP4ajLRQtCMgDkJc5q95CeDn3FKZWzqnYa1jJySr4Jn165d2CG6P1bKpZCMG5GMoMRK6HdYm",
  "key44": "4X3BLs8NRF1Wcdk1nT2J3GF1X9gs5FXKVU4nqLAEaMudXLGDHbzuZUTwbJyL1RYq1W35dyvGjJMHQfa82Gxcpjju",
  "key45": "3aFabYLqY82WnJ1fw8sw5B64P6Pco4Vv2cF2v6q4T4JYm3ruz2E3Fpbr2TLswYSwhrutLtGvDtLVJgkKbmcLh9e1",
  "key46": "b2hsmEt5eoBzGsWWwGFA7YmVidgACMfK1FC8VzEVcsqw4ektE24szueHQtZMf2EkDo25uyuE6PSyt2jEhcnhHZc",
  "key47": "4VUEYgjUiymPybLDDQN5vMLsqEF2p9LNhp5T5BN5ksZ2bCSMj3ZkZqxt9Kefnu1E69r3tyN47tzQ8PUr6eePnYy",
  "key48": "2C5mJ1SbdX5LCQ4Sgq3RWyiCGUArkVRNhJatVxUHpeagEXwScFpFuQaUwvZjizYJ1q4U3PNy6CHWC4yHrHY2BHrD",
  "key49": "2dA7ieZiPuvibfkktzE6CLh1gVyq7o4fUfwHcJ7TC3uyJpWeqjbESsRp9BH8J1Y3ZiZW9GPAo9ybbebKabvWR83b"
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
