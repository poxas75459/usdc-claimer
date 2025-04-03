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
    "3Gri4Q15pq7BhoDyiEBbfXjbyHwJ94zVssfahiQ5SsaTvqyfzVWh6GLSscFF4erXoKKt7m4xepBBQ3wMYcvNtiB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VAksLLe4WDshTneFenEt89vYi1Rknp1Dw6L693vEs6FJGZ46qeKWVzbaBL6SHjhFLRWsyAaZTk1sKzohnfkXLZX",
  "key1": "4q9Uc2S3iraMBRNWmYLJpg8NCP1eALYnV3hYHXeFWozqrmbMB3ALe7vuz5ZhQEwtscVvDTiU4SHe5XpRFCBBoMxj",
  "key2": "2xzQC3EyCwjP2dwidLQw6GuX2W38awYCJaof1dkxQn53SAtHYCeeK52LGooHssQRU4FpaD9RzGDK5SYuCL1yDsZu",
  "key3": "4XKszQq8Vt7PmPH7vdio6e7y2fSaGRWNtg7LJrPjqTv6GXJeLu4nNrdu2TcYqqYi9SY2srGUpWW76hb6KSHCxATx",
  "key4": "2ZJdBq3BPMazKLWfN6jQhmMQrnCjpkoU1pvMxyCoycBtuLzTY7yMAYaL5DmQkEd8EHHEVUxFKe4A2XmyGMbZV7at",
  "key5": "3fe3MbvQcc5oG6W2DpZXpbpBx66zjhKSNR8THjKkxpwi4bMa43SzxUY9tFoWo9ZQhnnjZb987vbpc6E5x52EozGv",
  "key6": "3NTGwHUffPcrXj2TiyrQEJCbNG5UCKx7ovykHNSfx5nqxQw6exEUCs4fgaSH8d7XboB7a4JQfuuHbA4zxriGgwFE",
  "key7": "4ZdHCnMjS7kwLQs5GUZd3HT4g6DwDdXSef89DWh1v4rGQ4byRUWVGG2SkGXENg2RXqRkUJz2Fgeq16xx8LfvhuW1",
  "key8": "123ZoB7Cv4HXC2vis88tqAJmSTtrhNiTUXAmQq7Xi3BVzSFdvmpSbJqdkXgcSj6s6wvadxcpaT8STpx4NMZoSeda",
  "key9": "3MCpZsk8Kw3eo9sGvJiZA3gtVRmu4ZT1AV6KgS2PEUDB7ndC7yShNSHJwVojFtkzY7AKzVh1HfJYJwTagjmcCCvc",
  "key10": "4XHmexR25MJz4HoVNvNHuW8PUpCihpkbVMPB8AyDzVxaJ6NyNzJC8qQ7NHnuowJrDvVFuQB5Dsr7LbWQhDWCKQni",
  "key11": "3soRZ47Jfwdts97CocSF29wcKhmspnKGykYV42F3GhY372G8cTvZyjqsmWj3KYMRoZEhSj7E1uDjtDQw6xUB7ZAL",
  "key12": "4G36Q9mMnDD1DhQXaaRAorUcbuWMXy9AMEZWX1QuqkEDgyyqTkwhUQ8qprKBziDompN5bWyiAWAaViNNPUcZv7dU",
  "key13": "jy3BK3UohuC6M4yfDiFzPTJsjk4pts45L1Rsj7ggk7BsAz5V3rQFEC16sULseqfoPsfNwKRYVGjAzApChKrQmAM",
  "key14": "2Xx4Ey28Pvvcid1ZLEe836kZTNJEw7D74Ci162cU7fVCwEWienG5ockoqEDaSTBzEFD5CDCt4vcEkZEk6AVTmR59",
  "key15": "3kRe2n1TyebWgGKm6fDpZ77fgJXaxgYF3scjKv5f4Rj6FLFSJzDVq9RCEHyhdTCyxaqWbD79fmx1pidDUV292m7G",
  "key16": "2tywNGydmrGq2ygHEaCpMWPSQ1AYv6ndGtCirkN4VxkuPaNsxBt6C4Xr4qQfrQrj3WfXkueD5PNDPKgNfUTeQedb",
  "key17": "3zWDW6ahcPHqEgPrs9aPfEfC35CMBsW8PrsCkKtcDzKgio9uMGLYigVgR2Fudi811HZUBXtWBMqBmVYT4gnfcpPc",
  "key18": "BCT7pqSyZWmN3cxGd5mXupFsUx7p6NxfNAn695zWggTFvwQAJK9MPSofyQ9F7iBbv1a43cs93rBB1CZsuzPbDRW",
  "key19": "2MRXzdvaFyg3Mbp5U5HHUCzwbqqgk8yhbtFy6NvmprQgBHy3BfL3vB98UWYx3pLWqHfwpoFcqEYrPQSpCCqLkbRN",
  "key20": "3eDwTHxdBQzvQE2bmz6Eqrsv6Ye9nLWAZUypBDKpjn9xcMbMuzdiiE7ujd96Xebu1XxDv73t5YbrGtCX7tjhwuy1",
  "key21": "4CuqpdkL7JroqHVqptcdxGA4251SaVVesu4K31jZpza6aoDVGxFE8ygWXcavWp4RJXNRNhwPDzavZRZrqRtNnpCk",
  "key22": "dJGKeuNJe9GDWATsL26L9g9pPShWuNGhvNapkkncYv3mdJsEJdbCD2bTHXcMmcDHA6A4rVhYsjgQcA1vuw9ferU",
  "key23": "Bk9QTNP6zSAUrxDmWc5cAokV2oennnJREZqS71KBmSgQnMKpPdBqG74PGvBTjg5Vp5n3BHgNfAR4qV4RfqoSapW",
  "key24": "3JepWmveHMZ1hxBUWDikjA6pGVv7SGSgXcaE6PX3jmxrTMMGGNM4C8MkSxZHfWjfTBJvYP8RKMi5qL41wYmwAiYU",
  "key25": "5FSFKnq5cvck46QSDSGup8cVveULpRw1EZFV3KdjUmZdsTwdTF8jndA8TrK97FMr26mMW3RS9QgqgvMYGqV3DNnx",
  "key26": "5qX4yEoAxbFXaJ5Rg5G2gBg7fct28FVvMPfimf4XDKpf92cQLswKgFabSo7Ax4XBUMnYEXh6ggKrM8gCRSrXYNBD",
  "key27": "2zHvDGoUqJviZyzj9Mwos3ybN6daeFNWgmLFdRY762sZHBS44pyKXmkJpPLUmDS4UvSf1Y6qoJZq1QpaSgULtMEn",
  "key28": "5CY9hFipeBaDFeSfA28U4BeorLKxWrComJQfMa7F17ZRmFLX5CTTQMP3Cs5jUNYKg1cJtfYqHiALSKbppda5G9VN",
  "key29": "3PQgK3VmWZmXLZFDEsf8u7jCFHenVLj1iNJvC8i2ZUWvGh9rxj1wgzKkk7pGDrQiNXzYELrKbMx13PGcTuWthNwa",
  "key30": "4w6DLdzWao6ZvPxgk9YJe7gJcQESdRQPKKjv7knQBBXZdmmgDjLCu2xAJYGn7svgCM8W32yhQtgSQH1HBo4ibWo1",
  "key31": "4SFwPFVvy4wn49rktLkqQT3AYusGtorTVNKZ7rDVyzpz5VQ147invGjKBrtds5VB4u7Q7XXWCRJYW2MbnK9E89a3",
  "key32": "WFXBbMu7EFeejTn4yuc5rKW631e1XgAzHAqX5TeUJtpnc77kZ9A1yNcZ9274kvyjiYt4Cu4KTrJNEUNkYqtku1M",
  "key33": "5w791V3mq2AigQU1NLHg5JpprzfFj8aP8jaGWrsfmMjzMVPaXBCtnLDDs9Rdkg45WqKHexMC4b2gbWw2Cf75Lt6b",
  "key34": "xsgmy9PiBfUKPszrTZoZFkYiQAkCMUbLiFDUsvHssLxc9Voiozx139V1FnLz5QwtrbxFcqGGvgdJXbWUpFmsR3h",
  "key35": "21HojG11spAF31kw2e4sPut2vDgJSAbTbmdQUCHg1BspFpxTzFMdUX893gE98HZdYkvUwJHC6DQTVYnooN1W9LBi",
  "key36": "4tf8gbzTuWFsRXfZv3JJSJWWf7RfwqvLwwcsxGqHULJcwmgQobA9BYtv5w3eG1rZnBdrCL34Li6PtB59vv6HPTbY",
  "key37": "2w3BmELsxpzb9FQQ3KqKgmDS2eXToJ5Dr76KaZXbxh7xLDC7c7aRrni3S6Kfaq1gNe6qGwxYRJrEXDoQmaoqAdVt",
  "key38": "xHqorrabcqm6evgRvFa4n4sLcsFEc2R3MEECviuamXbznp78GyWnnD5DGjexGXhbyqrw99USq83z668FcS2wecX",
  "key39": "44LEoNFJuQfpdYTPsE84yj4vXv6VcCmM88CCWXsMhWQiqeGmDs8f486pGA5JTcoZfHTbmzKkQxSBEV5cmGX4zfCc",
  "key40": "5AieBfmoE1Z6DpZeG67zi1uD6Yn6jL6sn3gwA4qkfjVmGNz9o4B81eXQYXpJenfmxS1pFooVTE9MzMSYqrUrZDPx",
  "key41": "dZaiXrQU5Xs4WAW9yMdtLuuQV2buvPLQPCoBSLkA5x8FFjFoCFA7UWfrXqYysikjtWMhGczER8XaDtor6nyXHSh",
  "key42": "5NBTjysLNbJctmoRoaBpqwekbwt54fbxeUbdJ5fczrmz7eT2dnY9QHBnEkGK6Ud4mhU1VMbtJMt4mWyRxFxUr2vR",
  "key43": "2KSWsw5BqAa51UeSaUPFq4w6EYcNpZpTgDMbUovWuN8CUEh9CsvekvztfHcmWWWUW937TXqmS58CoyE5NYdk6obC",
  "key44": "y8Cp9hwGMn8g9sKMPDBc7B1XyEeEhF1izLhqQ8HGDbQDgagdwEYx6HngNGqehSbUrdBpZ3rH8CCi8BZJ4kKCiMd"
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
