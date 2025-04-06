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
    "4m3TMrEYhZkXpVd9fBWXRJGWLwDXusKVUxnfo1p4EqvXwVnZ6RwEq6K8jH6gYLYfHKPixF3sYgadxBgspjEiFbZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TaZzZ3bANaDbiX5HacAMBsQ9V5z9ACuPfvtcmc37MmgMSf9gtCpd7QtYQih2K7QhNnMnixPXeSisFebnpgZa3YC",
  "key1": "5gtn1s6bsgzchQRpPtdQxtFzEz97aHBTkQ1uiLH3DygDdxivR9Kq2dTtEdHh9Ft1KC8pD93fjGiee6jBuxmLSX8h",
  "key2": "5AXfvkUdKptxXNAHCna2MpCaMRNJg4Vu8vqkDJ6GC2xqWSQoqKyxihMEwoSRqGkTk9CtV1UkppMrojyyjBt1fNKh",
  "key3": "4HndzsoraA9AsjBFtrnmTFCscNQiUSNw3EjncuKf6iVhZpa6uCgKNXbdujNeH2gp4Nf5Y5ewa5TRaiwLo3oN1rVF",
  "key4": "5Z7WM1dAjb9kxk23zFuGzjh45vnorGQptKY8HmkD5a8mWcvvB56p8H5iWN4wBX7PGHLyhn9sM2vACsoE7TZsDShT",
  "key5": "sGB9xEUdxvBpcmhY2nzNcJ2cBEiHyHSiyUbXGmg7Kz1dev2LUX6QfHEiceeQV2qR9y4Zb6VvaxdziQhXpMbq9pw",
  "key6": "4Gr7ksXVGTa6M8shxvC3XspXde1HjWNb4wAGahJ72XgNoazXjPVVhD2NkYZK5C2ck1oGeC9a4UkBNjHH8jddWCGn",
  "key7": "3trLs15Ri71nAQMrKyX1bDzgbKqfsuMDDGyA3Rnhd5yT58cL1eayyKnZXWQTD6EdC7ASNZwkvkfJwWVRat7n4kja",
  "key8": "3fLGJUNSqKnt4VeBUiPLSnN8EzuoHLC9hybeC8oVkPrrJXQDhWnY34J5mtUf5zYpKe4jaK1Wkiy8sutWj9sZCgXT",
  "key9": "35ca2LSEHkDdDc9TcnwmiyEdH2bto1J6cczD7L2mWL5pmNsoeGLfyTP2nzSkK1w8KEkpKViyY4HzhjpV9dEaXBmG",
  "key10": "MHxDLi3R7gbnaUew2jp4r5L7iMtfoqe7TbyqnQHCe3s3wC4momRCbqiby9KdbuR3a3fpLUMH8nx8zLyv565Hspw",
  "key11": "3Zp1NuZGiqoYqhRDJ8YehVxwbpGRbTjigRotskRn53Cxibqz3opTNra2MGebqXouGMvf3ra7AY4yS1q88xokjBFN",
  "key12": "5cZu8zGbrZyjq3DstLJdbYDd7hZURtPVPwXvW69hm3Mc6AoHDzN4arWdDrPDjiQ7FYRJuhPKW8fkfAqgB2zdFMmd",
  "key13": "Mf13uSqpkDbb6fEroxh9dGJXUDvNvfm2Em2TZ7EfEG71Y5BkkZggG1JSWfe6ZprACqJrpRiVkvfRLytiWKAFhzP",
  "key14": "R7Hj1F3t3s1g6iz5VdEzHzvGpdHHdorWLdMmVwzabT4kQXK1MTZzKEKiuTajbN52eHyPfRLmx9wyiLuR94XGwzm",
  "key15": "4sDeUQNv8cv2oXmpde91peDun6Kk9Fqc7wa7NmGDBdsSNmYiPMDnTt3ZbFQcJPfipS7CJiaGNCYR6tQMm6sSqCyC",
  "key16": "4xtPQg5Ny36hqkWp4ELySWUK2t4nV67vCj3v8afY45PtNYiFSiwk5WUtAzhtXJijMSR8xBR1qk2m6g7WMiNRCvHJ",
  "key17": "4cuDYpQUaw5Cje6gq7CZ9rFMbeeNBavv2ZXnbawZWXFBYtTjZX9R3donoYGBbDfw4UpFm567ad2uqJgwDtNLFYQV",
  "key18": "4ovvtrkNhYL39CiipS1R4Gq453TRYN4VtB1pE8vB4PwMfrjua4BEcNT6x8uXf2esLom7WAv1LGhHoG3D4V6phmXZ",
  "key19": "qkVzA9MBooc9UhnHKrow8sna7sXyigiQM2YuoRcyEgevxvxfdn3jwm7BzeEPpH4bmvh7mbpgSUNmG9qsmhEFYwN",
  "key20": "2owHmJDrzy6G6urPYv8Ht8Hu1DFxHTtruzaK34bGA51JgtsA67pDiQdapGwwEHFKdLqw3XgJYYjpNGTfWczfiJet",
  "key21": "2CafJun7WDrkj8ALLitTwTDv3ivUC32JgqR2TSfztEVpc5iQFokCFYE8j9PVY34aHL1qdjPGZwN3jg34RovFSNXi",
  "key22": "4Ed1EYjq6t4fRZ6ivdx54vpNj2yVgegJFnc1WCdG8YfNzsYpeMQovWzxTJKZxmhS3tZC264jHWwwTgqHpsZzpokD",
  "key23": "2cQGbkyorpoCwYng1hMxUNd4bxA8of7oCdDzQjaJNdzWutiEgwhgLVtaBkQddG5cHFT5KWP7x4Z3vxHSzFuWxXtk",
  "key24": "4nhvraL1YifCs6YDAQNUPg1KiguZhUKSq8nWnG7XssSQvY8h24CXyWHfYRjCZTrspzvvYNfVKQHxmm5Kg7G4WoVx",
  "key25": "2wF5TtFQgUeAAEvF1QBWDz1Mh2kC7xKVvYo9ZHxnzEMzwgxcBkBpFoCmv39PEgPuY46YCk7y9Vt9vsSfUTMQJDnJ",
  "key26": "9P3XNtWqDpMpB75tZLspkFaENDSUWG5JPjp6ZwQFe9oU6NQ5VAneA8DVY516QerrG94jKEi2WV2NUFC5puaC77a",
  "key27": "SA6xaR5GeC4gcSH2QJ86wDXnbNu2mERTirV5fjwxxt9dneWsPxpvTdbFXtDz1JVYCBiD1PhCLsXHTCTjXacfWP7",
  "key28": "5BZdA9ZY2JLWcC7D3JYxGu11eYtwheeAFJp3qLArvgvDgQaJ8PJaabPQbSBsx6RTKoCECZT4VwksKfLeoxpjco4w",
  "key29": "3Txmu46ZyfvJ4Nhz3q3tqcGDmmbe8KAcnT3f5MuSjSQja7trwVk81i49oGBZREHdo9JsMn82bKQMnwVhAddPgMBD",
  "key30": "72yoBwiNo5V7wuzSXLzaQ13GtmZUTvx5BkpHEPbbQ8LicJ36afHQ9dSEjEy3wjCcZgyq4qNQmFtDgPBgSovak92",
  "key31": "48ZnkvT6Re9Gi8QPNn23wB17xXCttWALRHEHWDkhHqhgA2W54i28oYWV8LVWCKu3ZLJCAM1Lt2dzLKysPThZ7LE9",
  "key32": "5CWTB6t1LEyHBfkPddYWVXg8ycvy1JUeNp5779QVkP8im3U154iUUiZNvVYjgDQQz6TXN7b4wNStiX1H6NRECZzd",
  "key33": "5Wf7Uy3PN8WqmWzuceYP3hPqRCK7ZZ3zxkSqKnBQRQFud6SoZzQkkjqZpeLzNAEJkrgCMpbzZ97PDbf7G5ohUif3",
  "key34": "5GRqD7PGjcfJzAyVK2HG5RLLkSahhG9DyZMNFUUeB6LZkc3aDYb3t7tXjGjDhPcBCJU2tkoC3JhTTqrySqqNw5UN"
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
