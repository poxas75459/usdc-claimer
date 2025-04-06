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
    "4rzKRRwWULQGDrg3CRem9uoMMdez7QG2XwJRa4TswAdjnAMJKyrZD7bLgqbrHFDhmwZqACm96doNgH9PSQ2fh6tE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Ppz5QtHp3qUKedXpTJhrzytK4SLRxYHAyCsLNdFjk2LcgE4JHLEVwAoQgLSgoRssu7Kd6XGVTc2n3fGra4RzmU",
  "key1": "3Z8mbkfJUwTMuBZBZPc69Yyi1tLPGrKRJpbNRDbbKHup1yfZcAxArGxMLX1HW7XvpZCN8MfSoKkygVYT9BYej1H8",
  "key2": "65pdAtargvfDzmRopxNgYYJYth3PADZrrr3eQp3kgXKLQubmT1ciX9G1HdAms7fBe4hY5Nb2ip8xcse4sViZ8RUt",
  "key3": "5nnLFA4b9r2mqUfCBMYCgyTskyq8QucEtxHc3hLaDk7niZSb5bjpK2BtqGuZJnFvRbc1U6kqaDPmmHqUTh4xorie",
  "key4": "4mKKDCD9wpjdirtPZZsFxA8i4kHXHGzTQrwaAw634XrSr5XuDHZUGdJPJAJuyuePGhCCskiswi94YgQc2EuzVohW",
  "key5": "7PRQCZK68QdJTbi1VefAdAXjStuyHtCadvk7jY4efe2hE3LTWRsephKx5sY2x67F3Te3AHLXXm8S9VgfSaroXSi",
  "key6": "4txfRc9uDZA3qNg7nZJD7bzh8UB14hdkrw4Q74w37oP3mXaHS5ZtuAyaWhkQBctJxB543cxRsGeaxcf8RQsCc5qF",
  "key7": "5Mv3goHpuPcF4VZtxpgLNuNHq22H8jDFHoLn43q9yctfoHKesMeHTa4wRR6QCpC54AxDtKr2C4j1tb2i7dTjM6rR",
  "key8": "CJwMw4oKv4NrTAS6pgFeq51XueUYor1TaiCPMWunApQth3UwT1NbugxMTAdwe8HEDm4nSKfdKdmTfX6ppbrytxK",
  "key9": "5vx9igeHa6RgXiy7pjEYbJjGzTJjfQ6Jm9g7zPUbCKt61MKoPQCd4Ttghth1j7p6mqQnm6Ms61oDEdUNSnYtFSiQ",
  "key10": "3XtA5XCMjxPf5aGv52troZYUZ5zpBnf6hyk6M7QpgftSs9aUy7V2frFWRH9YkyZ1pgeFGK9BF4Ydhh64BSs3DoPV",
  "key11": "5tkbpHC7Ham1nbh9oHfhBwJpaY6qSjGWMbddFaYmNsCDFU1HFEK1ujifAtGPdLcGhZZKGvw5cbR5JfxKz1UVxFhU",
  "key12": "5f65Qvs3PeyABdCvkE7nhgYRBKoe6JoR5QfBVyC1NZmb99vRCtmbttBkpqp45xCjDUcRvmxAAVqUoAJgdS1doYjD",
  "key13": "56JQdFJ1drSyeuEqhmyFTJzeBWERrTpPpAbWozcBkScyTvy7s2bkba9TpSEXb9cBJqTNs3wfwWNe2VTmAHDJGA5x",
  "key14": "2JSnPhFQYZTrDmijgfUPeXPQWa46jeoyVmbMw4ciYbuSNRQChMg51hssNSZD742HDBQBEwwPQhon2ACRPqu863GZ",
  "key15": "4b7GqTUAYFaAkM8qnYnKabviuWGVqRaBRMsVw5Jq2Z1mfRRtVNs5fdxLDyagiAc2pENStNKcY83osgEjWBYSiS2C",
  "key16": "pDQ1HrCtTuZrY5MHSk9zYUUb8TgGQyNmqY6u7jWGDdWzyEyW4PrhF52uijGPR85SRoVVdgX5itFkMEV9MinHNVG",
  "key17": "5f1xZeRfgSpkjsgiY8E1N3zREwpUZCFvbEY3fEEsEx2Q8E4e6HwYaK784w9pEBbpf82QVDQYoYnCqq75bmr4tued",
  "key18": "4y35sr8iNRucn9M7KD6kTpjsCzBcC2XvDHbFZJt5cBsqrrhwaJJw3QDFWwd4uPZgCsRcNWV474eg961XxB9ySLgN",
  "key19": "3UmpPZs5oL7JcnUgSnw5AotrFHmVSD9vswbzemYXfv7XM9emsCkDvRZeXVSxyuDH1xcdmXqc1DF9jKUzWnjstHQj",
  "key20": "4nEfrdyeY929k7qmF924m9ArQGLWj1vskqdeSkvrHqRaeEAGyChJHa9iNk6UYfpgFVMTik3cuBFhiCqvSip3mfiR",
  "key21": "41GxgxGZeyNHESw4mcKr1JUpYDUiC1A52QKDwwVceRx9viCkUL9WceLYn45j3LSg8cZreJC1f6cGEY1kwj49rNCP",
  "key22": "3GT7RBgD1QrDNj5L1U2PSqsiG35Nns1f36jr1P71ynswAqAnbVYKAbpbVKxrfc37JYCMwEt7GqN9LTWzRwgE31Ca",
  "key23": "4L6gK67ke6dN883BYZcUrHBpt2rLhAqU7ujSQxi2uQqRYFLv5E5kaV6bzC7MKnqaam9k3WA9HncGRBrUMPAADnhq",
  "key24": "3NNLzGDj32KvVCthKugxhmGx5oTeJJqoTt6ua2iM6Gnorx7cvB4aWr7fEdHdKkhMaD5hrWuyVnRZGc9pRnzkKLqv",
  "key25": "fL5LLvNFpyhJpa8ymVZzGHrMm5F8NGqzUQA3TgkjWoTMSagZ2UW5MmPB516pjgVKBcuCNkSfRzz7dawndWAdX29",
  "key26": "4H6XyB7GDK1TqCj6Mh3zgRW6JLuCuQN8cts9TYed7fAdTrs4xAXSjaHXp5Jm8it3DJJsucAcQur8fkkoMjhVFVyi",
  "key27": "3hgBELdFFhfZEWMxx1c58U5SZsEHBUSMypss5Tw7cnVYUCSAa3uh3EqZLvRXKQdMjrmEevcHTqoaez7LosiWJaAi",
  "key28": "3fS6aqMryG6mLGhPyJC8cuYMRggK5wQjrMJwTdiR9k3ZN5kBGkurr5XiHD7Q9MX8fg37umJjeFPZEqJHkEm1U56B",
  "key29": "2weQvJH6jGG7zj7FeiaERZzVG8Njhh5j3twMQ7MEm73o3wby7UH5QChB1JyvWujsdKJyzh3gLNJ7ddHN2DQLLL4S",
  "key30": "4FghJNNudsGpzFo1aCCJHeSuDCqC7E7ykRTLmfQgY9sYR2gYTxVpjaoCwQKUdE2cpWn4yfkPVPJJL86zvmcz2F1p",
  "key31": "58U46ypChpa6AHefgh9LbvztGwTQK5Bsv71SVF44oJGDN5Bc8dvLPDxKTdDtHPucqm3C3sEZ9QGC6uRKC81cZkEr",
  "key32": "4dLDwSq4zNb8M8KiskX43AwCDoSsG6ZZhUzeeobibSogaivJYG5k7L8DFq3wSbxxAJ6WqsWnKXYnGWzbx39C1SB4",
  "key33": "7vSDQQ2BWUf8jLJSxrpk1aEXgwgCy81Wpg2NoowxuV5RdvX6zBWVwZapY3ezCvNGH5n7gKGUGPTTP6raorrzexV",
  "key34": "3BRLaGDeBjyC2S4Xj1DqfgqLXXyMiQjzXK9mBoKBYzu2CrToJfdJT5No4L3zktvanmP5PkxXdNQWB8kd8TUD7rpU"
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
