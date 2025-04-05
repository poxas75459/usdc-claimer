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
    "2QA8xGxE3i9Na3Mjfhq9772eMuaB4bG3RqyKqnCRCnk3UX97C1hYc2Aicjm9VELgcLydExuyTJfU8RTbRZhRsAnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "317tFQZq21LZdXCdrRCAuhFqp8zoP7M2ArXWKhJsfTinkG7c6yhXF5Xqpoay3ym1hMBU9HWQ4y2cjZie4atABAQ4",
  "key1": "Kv4DwHpHxjkcXETdGZi1HE7d93xSXzCiMV2S1orNLUtiesTfcTvTsdKcveXq5J8Ves1iSqHRAqDmA2YKfpZuXN6",
  "key2": "712p5QhAZoYP2FX4DSE6aBtUJgmsPGGf4Xez8VWMwyhwJXRbPiet4QgjmwfEWYJTQbLopQYXY2yeiMgbf3XZeqs",
  "key3": "64NhfujCf7WrSwZ8TcjbQrMqNLmMVQjNLivNt2r4Gjr2aYGBG1cUfUP8y9TQnxBn2wqSRqBJUEorchYY5qAFpz9a",
  "key4": "f1Zpr16YfmaTvyzLyJ1PBk3RbAVTEuW7SFLPonWtEbYn1orNeavmpFFbXBnYhuE1GNqKKpMUHficwo6rcJ3QCaS",
  "key5": "5iA7dp435nJK32BngLux7UK27derPvdL6immf8TgWToNL8VogCdmxNz6bXpu9d3hbryz13P7GqRKzxEq8KU9dV2G",
  "key6": "5frSbf8nYv8tVQdbp4udge75dQvEsRpZ3AutqfU8KzAgmYSNsowciGKSpDWjPYy9MbJ243TKmzYAbFd2x6ndPo6e",
  "key7": "2wL7qwH2jHziRnBeZozKpTJETUxiAhnmdXCVV5ZunFaeVFQMPpnEm7Dh2oJehaMyrQG7M98qsNFe2Wt1e6tgVNwo",
  "key8": "PwD9AGtg4AAMt1p6GbCk9tAKYnkeS8o9gyHeQhXBy67zhRyXCRJGNfqqjf8oo4K4BUTMKd3sinkfiHc2R7JQLGb",
  "key9": "2B7t18avB8ft4FnRF29xz4RrXYc2tSuFA66299hzoWwcTtq7wU1Kc3V3Xut88zsjXsT3Hc9daUNv7auNDEbsrUsu",
  "key10": "4JA69EZ9KNLFCYAxgsLtyd1TpqBrPawYaVcZPxoNBE2oe6XtcNRbPSJb7m5zEkY8B1cNP9SB2bAsiKwrtaVk2iaf",
  "key11": "4PnkxX29c8YmATyx1TDoZJLkfwbFsRW7GkQ5DFNpMhZXJ16nwTsiMsR4iqRsD7jB2R62cQKr17cho2AAQuv5fdf1",
  "key12": "2pXSvH7PZSz99Wgb31KexJRgRu2sz4UQBFg5j58BVE9JRKXfFTDGykmJG17UdP7KcAZBcYAjPVajsttos42xXP7D",
  "key13": "3cDZjBqcU1MDMNgXkZfNk2ShjgiBFnShNw8BrXNafDzJRgjgSs4pC8D1w9AFwZFhzrHfrMg8DB35zVvFf3CPJh6F",
  "key14": "31bBeD93uHRqF3xRNDhdsFASxeeCSN7S5xy6Hz5UPpivgcVQjfJVHz1s2ix9YbWgrggs9g8mYr9nZ82buLUufj1G",
  "key15": "5TpGf1Fxpxojc8Ma2sPnkaF4EtDAijLJHhdyD64me6KJMBKV5WAfDmrbGgr5u5qdARdPyqMvaUkKAa6HtbiJGxxC",
  "key16": "2adbCX6DMkx1uuqEZTSeVv1rPJTSsQs6op6fQxi9RxpUAxGh3E99UNTySKDhmEHcyCVKSiWy2vEPorPXAdz7ZfpD",
  "key17": "goGhwApgLGXYqbQrGuFbJt5jrTydfwAbMpTQUEhUAHXLLUAFA9xCPhx7RoyJyEMwQjgw9refSsvhkPkAKTKbEue",
  "key18": "4ENcr4YUXrcZUrZPvpYKGtKTDDd4ZovG8or27pAk6oajbmxm3VqQ9oKzCUbsgLShqzyzYYg9MtZ1uLyzJpJx6B9b",
  "key19": "5wTqsLA2hYGfxhfbdQAsSjVcZs8EaA2pyjvNGST4uy8sALgaNQ5zS6TFCQfTMThKYBnnUnR5k8ZKo2jEhXm1ghHs",
  "key20": "2v3qQ9F4fDg7URro4gwpZ8FwDZm5woWmaeczZCAMupEh7hRB9sZe1bMfZ8Jhuf3hYZ5JPkazGnEwxKkPZduD6jFv",
  "key21": "Upr2mQx6XsLHyrfS6rEwqQDqoPeZegpDRiz4EGJzpY2mwnHA17oQyDaMPpYwKCveCzcuBuj8dtxhBj5btCoWfYy",
  "key22": "5yAq3r3arwMGacb1dSzTEWbNkjz9RUwVMaj82RC6P9XtJzvftofNwVDcKFD9Ktn68tkNz6bGz6ZRGwnYqvWYs2Ax",
  "key23": "2JDjka2Y1J9YV9nfYGza4azE5SqeQXh1KBEm2qci5jb7g3VGj19r1DNydASXYCFTwDY96LYzcQKX18k5CLCttPcu",
  "key24": "4iRRmW8QFxE9YrStnmQkmA7w4KLcXu6PENtEugStRpPkddfmS59Pi8MFQbf3Xs8bzFXbA5n84Kc9Uq4oPxoSUmuC",
  "key25": "4XGZ3dQBgAfqYr9tES5vDCN5yKkhXLH5e5kRf1v4Yaby6kAXdyg348bQbzsjd6YsfHj1pXCUvUCgCcR4ExCKAe6P",
  "key26": "4xADcM7QUTeShmvRAELE4ohzsg6n3F3hmXF91c8eA5VaEGGCbrUE9jNY3CCpmgtrYV3gDJUFxYAPx2EG98YgSBfg",
  "key27": "K4sTZy3AZxBTGqrNZwSnKvnHNsajq9Y4J6MtBXWtAffTTNTMjVdHVjEXhL8xpuYD9GS2hCqozyE6VsuhM7Y69xy",
  "key28": "67kkE8HwSFfQQcz4bBpqHmZh5VrckCeENwDKng8F5ReE9rtMcazod5i7foXZDQk9efNSVUj2pZTsSjgVU9rCx2VP",
  "key29": "5VBjWUWKiPT98KuDq9RrTJnDgd848PqwMA7ARBw6fM4HqiQnhdxrbSAdxhs6Y6hzPkEfN49RZyU23TRdMFGYhojj",
  "key30": "66NN6JwuTsXYo7bVhxg4MWkzfwuvLyxZWkErcCQ8duuFpwroL6m6Pak4VGEuJ3Nh8K9uPuXebmQwHurmr1iax184"
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
