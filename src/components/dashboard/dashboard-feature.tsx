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
    "3PdCACtfUM1NS4b8e6WzNPLhtT9MRxNdKBmpABnKPXPuq4VkNodRvWywps6QEvYA7HMriKacnFvkNqqtAs6DRWfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Mj97jb1YVVcVyXu1zpKweW5gBqiPAGQnxL5XsUti3Answgo7WsXHJRScMq7UZK5KccJ13E1bqRBjCUe2Fs67bF",
  "key1": "5qZ6xfDtnuvVcAwQUy1FZVPkRV7BnDJ47G74zehy5YdtipwsxthbMnqt8KkA7PdwWWNcNFzTbZJZGZm5onGucW6M",
  "key2": "5WmNJB5x6eWqAv1F4d3z86ytz3a7UTuwqtnjPEYrr43RAfgRRekMyVe5esRsQhPu1TXJ3Eeot9dA6DrrJYZRrzmb",
  "key3": "3jVpiqaSwXUgRkxsuKwh5vX8p1j6TdGJpCmqc1Gbjkd8W685ADsXZQSREFwtHXc24BN7W57v5vwn4QR83WZt5Lsb",
  "key4": "5sHdubWy5KfvvheENwSvEcu26ZNbFXYFzNXRwtdifgmugueVBgCNd82sbrMfqgXN5C9WQp5NCbkybyGmQficZTpY",
  "key5": "2r97ejYQeYQgcFoAJTNd9KgAzrfdJyzWt8BQWAx2LsGzeMZSEw1Lw8sAUNk7dgGasF9i2NBa4BL2XzDVFRt7adCK",
  "key6": "4ScEns1WSqKsQkew555b5nNCXpNf8ZwwrbfrPGv3T12pL382jopU9QxJ4SAcdG99PHse2BYEu5R6pVrdj3FGPK4J",
  "key7": "4WRVPV8qEsBMnd43ukPdy6dx5dmL8pE8FysgA7ZqKuSK95M32EtQwtmWs3yDH8xJhZ9RfWDEMbfCTj8J4SMruCg6",
  "key8": "2NMkL4wKvhecrZEu33FvuhPPEhqCMQhXEg8VTJ42rH8kKB6Urh8q4JRkWhNLPAEThgrkYvWwHJ1VcAosFp8HYBcW",
  "key9": "Tjcw9RsoavazHm3ThYBokbE6s12Fh7w1q1CPy1Hj8Afep4ySXMDXinYfqMohfVru2aUWx8ziRYXme1xaLMDc9Eo",
  "key10": "2C2XTy5FGe8bNnaPVupaU8TbZTWozkn2ajQpm9tc8TAHG62YdwCJaKeRupCMrbNqE9Hq4opBw14ut52miuR8N4s5",
  "key11": "4Xw9tjw5zwMV9qDRG7c7tTmH3yyPymBa8YqUNNZu5HqPWBa2HH9BvSBtiHo9PgqubEZjy4kNQsUtiHtr2cYk7Ydh",
  "key12": "5E3bhSpvXuoC3VKsFjgQCuqhFDNaYXzrWKD6fGBnmP2AUTttoS3H37yHo8QbXjpt9gr8M2mnVEyawbvexNG6VvsH",
  "key13": "49nGneyWYENUU6Ln1zT5Rmw82bLVD7QszfKyWeYBrxaZWVjxp1wZdwws9RsyG6juTfu3FiXG3kZmjiTe22Pf4G8A",
  "key14": "5Wo3cDFxsTF1i3YBNjCxg4KwC1nxsWqxmzzoFYNRNYt4gkPTkQBtZkXtLLvpcEerBS76f9tTzjN5V29A9S7fkmcJ",
  "key15": "NY2dHfXpNQAXXacEBRe81NXQeP2yeUvu4SFrFZpF9egQVsRrernCjUcYm7kiz7pNuYFNxgH4U5T9nibCPWhuFzY",
  "key16": "4U46MHyPipg95oAJAAQMq3C81cofHojCKm3hDDaeHHz4qCzSSZroXJEXvUm7feETzbKtEMnr54yrD3f2YX44L5zm",
  "key17": "2jwcqh1R6fDiMdizNgRF4ph4DSGKjQYyWTMiGQHifgQqQyG7ZuwwqWYgZs7UH13ueBM9dcPdNXbgSS5MV5C2ZGwW",
  "key18": "4r98f5CFba4krJHEWeNvChwhSG7eExa1JBGQgeDmm5WuJXv8pvcw7VBz6wUHaJi28VPTBHYyFryWurmjCEz7RYJ6",
  "key19": "4THVkwtUNhMbsH7S7FfY2P1PPseTnSvrsNyt3PwtHCRmB3cSSYBC683a6F1LStDMDmB9gZVHYswamwZhFAFLj1Vy",
  "key20": "5N47Au2Fu8rGy15qapqCrMaRrFiKC2qGwrmDCi6y2x2PxhNGi4Kmr2def6ZijRwL7XoS23RDLVMfwnqLsEh7xNHg",
  "key21": "5qztfgCgxxPKVJgDw9BFEJ97obsNcYLWYugRJaK3gMxAfZGrs83ajX3QFb23VAJ18AyhdnyXzaJKDk7iSfDMKWVc",
  "key22": "21nZdVXiCrLJXXuYZVH7gcHpHueHmgQpxRHqToDdYU4KmYTDuEfKP7X1b115FT2grJr1VZdiiXJXjHdDkqVboYhE",
  "key23": "3wzAq65g5yC78aTC42sdfQwFVqhp8Yr5oLGaWTLbAK9amZrvaVwDbp58kGq9DZZp5ro4m3baEQswMYMYHn6ZVvQH",
  "key24": "yYV8GnD7xhg43Bjtfe6FB1cqDeQi8zcXMnHxACQjscRs8ADo7AP5TgEZn4eDAMTjPRMohL1XgDRazGirTQ1cEu2",
  "key25": "3Mu3EREK8drBtL7Ay9GQZdhm7UKEMGgdDpT2PcKFoQJBLkAUCJtN6SE6qU3trzrpWUEmUwvXEPekwWXRqompwAfi",
  "key26": "23E6FDqbM2c5svMhXYhNPnb4RwM6KVbiJsrv7iWRjQpJG34R6mJ3TL65CUZqDyd5WUvxARrRpNbeHinxPXvc19Ys",
  "key27": "7ho9Dn5DitsP335zqveQVR1TvFQuTGBPjJzqfVvQqSkSDpvvhQe7vxQgPaV9ZhRgfLvFez71pvi8WTTMQuUsaRi",
  "key28": "2wQCYAwPFJC5csto6oyjujoRuMSiuNcP4TbfqFCundec7dcij2uvZzVdkJyw9jmoFdrvDSm8jeN6chum8TbZY8cu",
  "key29": "3gA8yHCtQNcVxzoH4zDqu9vsprBzkB2VAUf7AZvCYJkmFfq8h1sDnKqZfNaGEDG2z7Wt9uBzQ6W9EYexXjyzKz2U",
  "key30": "3D8x18BGGDQmUJGBxUsDLLtgFL7h7gYBeLu2SE9TXcYzi3Lsy6aq7SRsTYrnC2gSirZzCUSqwJLMHy8yJUfcCQFt",
  "key31": "FqsNoy6ZvVLWWpr6pwiNranwy2KKMZ2JZ4CA7cgzWbtkrE5rErMSvS8TLg8DZss2R4CuRnG8nS1zyui6MmSRMMV",
  "key32": "1pRHkDCoc2efK7F7nFQ7P3tNSiEgeH4AL9DoarotkQU1kqbr1ZkoAV1aNkwGjDS21HFpNZWEP6YmqBNZiYrPRFg",
  "key33": "5btLN3LhwV5AfrB82qQYSCAzGAwZiR8xuF7kcBZt9aaQSUsiDpchZEohoY5WoL6qQ4CoweaTPdSsMwBuXJcCnwmT",
  "key34": "2KxWxivEAYYjY9WmpwYDiaxgYJKXR7eWqdnP3Y8qLgQbaAWM2wCGXVu4SXYQ72NyQLZTsqcadr7dGJQEg3gU6tzk",
  "key35": "2BnLEBX22z1gigfYL4q3qwaEhvbW3e4LukyUrFixhuxrEMYH6v8eYHNHhDe435zwzuiWqd8Hp29DwJD9R9UCq5Q5",
  "key36": "2q7xN5c27YiWYh6RJ4RpW16S1UzgFLHc1Na6j1TwJJE2DVnaRC8kzCGH3VjJnroQo7vWQa7twJnz4Md8UZwsNNfm",
  "key37": "2wgXp6QWYZG3hqJKwfMyK2j4HQoeQkKLRTqVcEjfDtJaQXwem9n9hrpnQqhnH1z64d5n1deQqvfRK6VUCDLxmzgK",
  "key38": "59YVpAKvd11peA2yGF6VBBH6PDcAEVtwwLGrSTM2AgomHDmBrsqrCxfXP1mG6iKQxkJL2y6dJFsNj75VYQL4rZ6c"
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
