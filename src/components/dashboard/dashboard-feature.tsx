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
    "5B4UCQcLUowVfpGWidcQ2AnJFutCT22YcNXkrfK1sSxMeMpZujr1DGCv9kPRNDQJvonPyAvpEfQVN7wJZ432toAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54PeZvXaXutZ6Pef1CP4ouP28jG3PPotw6xweazh9cPS2ZiUiyEzVvsmonNsuyd7vGvbqSrnUoBYvAbAdKQnFmy",
  "key1": "3QVyKD6ba46d3FrtSBqiphAmAod6y1eanZqm7fEhU8nUC7DhvaDitQSPPfVvN6ZDwLjcUN6q4Af3AjJECXWK8BvU",
  "key2": "4JfRuAXAZcP9pS1gLENXyzdyWB5EaVH2YJStXzt8ZBryPbQD3hAbhs4FyyFGmfo1F7guMuKQVrYbwJE5Ws5xbPf2",
  "key3": "2QuvHbzHYvGs9HeCWEGHPZPJhPapphM7itcn48kWHLjF7QqoyW6CCvizRhoSdqUaaB561ErHuvUnxH6srDfWF74U",
  "key4": "2A1rZUzpLSW2wCwMab7EuJMF7MSkDc63PmDdZ2ewyzuUfWhT5p5mTGJbznXvGX9JSPukN6bZRjdj7K58d2SdoBEc",
  "key5": "38uQBSKVcFhDHKNFv58jR4hSc1YU14SKeuB28USx95bCPF2nVCuaijBjKpXYebyAj1125r3LGgVQkvz75vxUhne9",
  "key6": "2aVYFTT24XV1LAhGuTN7KPiqiysJqo5YeKyjtTfsr6MpHXQ7Ffx6BW5L1YWQiW668xQDP1B2jMoUDM8kBQoK6xTs",
  "key7": "62qdtuGEn2Xg5X2zc1hmz8MWgdbDz3D924DyCgmpV1Wo5kVtBvVdohYqeMMHmTPe6E7UCmAe5YnyBBdhpZ3XcsAo",
  "key8": "5jyTz4hRNauZf4X15jBKaqRMM6QPgDtegQQwaitzRDU89yMiPuft2tFxuqvWQT8Dmit5EPweGrq6XF4uXAc1AcdR",
  "key9": "3SzxiRPJpbKHF7oxthq3P49qBK8s6RqFvBw1siafVHBnAzngjKNmFirJqEfcAe51eRECtJpmLrzgHZpsiZfUeryj",
  "key10": "2nBmV66zhgszfVP8SNP4VMRpj4ACxatmhJbGRq6CrjAB4PKUktDttikmMokdswYdSjtEo9VQmmoyomuVWQEbTHWN",
  "key11": "3LLM714dc79vrkqZdFT3UpRGfRxj99NgZpX7g2SeR2UfSDEQtwSnoqgkLjsUrX9dYE5acxA7mqJunXvDhPZwSLRJ",
  "key12": "2bj6N1RF6BEbe789VhfQUcq2xemwHyeSAAgekwhoinBGqFZ88PpC9TA7JkGBNVJ1rotkxJkh2U8TE6xLtF1nw1q1",
  "key13": "drR6AvBiGhjbhTynuxdtBoWUA4YEQgwztxddAQkZhanhSwdT8QmvgEUFp4qkUmv41S88JGerbmSZNCzTmWETCQm",
  "key14": "3ZrWyw5MidaBkwNUHdVqY9C7ysLt3GE5oTfT4K2f1jYXbEWQkuzypKve8qTxxBVPrYBZMQb6CcLXdxeE9aaweUo6",
  "key15": "27aN7R1syCoYg7jcXvbsoCzopGw5He9WkG6VuJYbepScEBxbNKjMszvyUXdW6kwhp5AixMWic564ZyZzBsaumuQg",
  "key16": "2V28pYRu5ymwKi8JhLXqA1tfoA3vCS3z9sKXSowF9V4iU6vrFDcDN11fGCEVBAnFY9oNXN3DAncCU5wWLBCyp4BW",
  "key17": "3GLx89iSHY2nNBAwHWuvseb5VXvseGCkq2jfXwLhPsVLtveJt1u5JF1wFj2MKn3Lojy16H9acJfsDWgfXLv3BYPR",
  "key18": "2TTRDi3bxaBU95SsR419DopAZwThbci62pvQmKz3pbd715xiaKBHm9MbHyopJaNtJw65XKSqBVk6sPd3DUoaFEKC",
  "key19": "27YVzgmemHEh9Y4gSFarRFGwyVghYo9dNPhPYt8CeixZ7uyAdYDX4YRdXqUgKwHySKpA8xKNm3Y1GMiJGfejsYiw",
  "key20": "cKXxm3qsxMgTcphVJWuhEUpEMAkBKAboqrJbWTayEuB1Ti7739qi2DMqGM5Vzc5G13qwG5kZwpyCmkP4bAFQgVs",
  "key21": "121t9PPd76nxdeHNeHEGi32wgh7sQvERNy5HwHyHpQFdWUXbJK2sgdMDEmjhsVdvq9mzBZWMs6FAoimiaVzrSdnD",
  "key22": "57ZETSwheJhwEJTBze83C4s1egaMpqoCRUKUEjgMP9XKCwTJ8oR4Exe256zNKdHvri2y38ggyjVCfwy2sWMuXkJf",
  "key23": "bFD67PxHDxkuJKTsxVQ9CjRXgt6VCopSQ8w665JdSGve8obdhCe9YKQ3qdVTTUp3HeJ3NDtzAPf97FZXV1pzoyr",
  "key24": "4QrYAgYrUfSFR9EjJuww6KZqx34maimxoEu4amAB1mCdUTfZGtdhx4qrWoLg8DmQ9zbDRh98Q2Y5rzYc6y6jvVWR",
  "key25": "2TKJxmFR4KTbAcpUZKqYAEWKkRwb6NpXKYwm9BW3TU2Xnbk3d1cogLUjzEwk3Z7qy4TFXpdGdDUbyMkSRAhktcgt",
  "key26": "5UrDjhVrEDVcJb6eLdJdqEeRa7EAQDJjB6bf11ajTuWEi21kNTA2F5TGowuXTgF9Hbbc9NAGhmcSSVJWwUSemT9h",
  "key27": "5n7kY45hXSHixsHA79osrH2Tgf3e6bjuLZVeTt3ZSgKsg7CWYqrjyLTCn8Rj2DJYeq75oNw4kg5hxHLq2Cfsj4FG",
  "key28": "CpNn3Qov877JEmF9RkVyH5mS8FvxdDA83VAWE9ST6nWEUPZ7HABPTgU6VrLH36YPsBiKrw1QnqZS64L4KGyCYoQ",
  "key29": "4pw5czJThaj2VWAcaufnXXqs6DYKj2bq7HaqjB6yd75F6qWLQidGGp5uP774BsAfZwaeVa51y6GhFj3qnD6G9jWa",
  "key30": "3xtVHUTtozi2pcgT1S9xRW5kyqKfZHyiFYGwStvkQP5VLQhBoBhapY2PtmfzTDsrdXvNYUWjW9YoJ1kqVpf59FDW",
  "key31": "43JjUyn1kn3eJmxuw2HzZqmbRDiB54BLh4wHJJSYKnbHRBUMBEzGCYzcJVuNmAYBUjxAdQCdTCqP91j7VK25BpDi",
  "key32": "5oAMA12ncnAwjLbQFPuDSvdPY4CrhTo9gtWJ42hc443X8hBFi9yH4sPajiCbNKMV7WUQoEkdb7a2t3jLUwyhsEb",
  "key33": "5NFgdatC69Po2rFRUVVuYotj45uUbezDk9Aifj8U3i7oKnQYdAb7wVUVYBbTj3DRUvrjJRjhskf6GKN7eGBAst8H",
  "key34": "2LmHwosV1aZuJ6pRKhaGfhnZqkoM6mwtUyhJrNqvoBfNdmXJ9q4uW7V6m1K5BqaNfQ3oqsx6t6jWLZfcVcaGFhNS",
  "key35": "2FEwYEWYFEZa5NLQxX9eDmizqbTj6cvgjsxj3Rqd9ewENWgbso7AYMvCPyPZ2WkWKFbntTRjHZywp4uRQnyYp3BJ",
  "key36": "3GHVD5JiWvBUg2dJHwc25b5mb9dQJoNMpf9BacmvaACQAvNWYxHrh9NGUGJsguzvAvWVrNXBdK7sq5fWX2CGsw6j"
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
