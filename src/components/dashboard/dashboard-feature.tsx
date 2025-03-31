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
    "59h3AE4yJMD69G8mqLbeKm1zCBC9d8YP9fShSkVSEZX7ps6Yz1dex1XTv9jqaoa1BPDeZvWTs5MfGnHySKZbbvcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JgyKnQRtk4j9vKxWRUGDaCVbzx9TvVK7AWSba3jKd3fKkrwz1XRWHJKcqieYb8QHwqv8oFzbng8AGicj1J6fYKr",
  "key1": "4LbfmTT82wo7MMvBqVPqNPVKfcaSYwSyrnWaTFx6RSTy1WSnfJ5h22L2Y1ZmdHSa7wkWnrP8Z9UB8QhZFM7qkA2d",
  "key2": "2ut6MAb9VCAxLmwJk7C9SGS7PMQR7RhLDwi6mP4NScDXt9sBVmoybLfiuZXi9naoRPZKe2MhxxpKgUn3ENovs8Kt",
  "key3": "4p8d3YtW1vHBNpzYBr3CMeU5WNnB4YdxXVt3jbxxeyeZXqbkWQx3h5A8WpnWzesTy8RGdc2dSTqbsS4RhpYi6iZz",
  "key4": "2yfSLhTf6D3AkUD2eNbdwvt8VeE18ujKkkKTqpd2GYz1o7MZ3ziH158dhnmX74i5DhqzP94NNN56ib571cKL1XDD",
  "key5": "SVBZXKX7rNwGYhbQBhR2vYLNLmCkpWqJ6yxe5aL1PWfC8zgbcP2WmoPx11S7664mmNZqUUvzgcBvDb9DGD81x3E",
  "key6": "4WaMQWSRruXiEwZqhZykXw16ko1yFyzCTtjqQrCzc2TGVAW6PVyFTK4ZxzNLzG7Q62qDicyaSZKCw9KMwKefjxLU",
  "key7": "3yX1iR9tTZVXKHUHqcnWLFQmW9qkTL2hoCh7V13WZRWkhokbquwJPv4S6736izJMu6jBfGnhzQGz6bJgrnUmE38m",
  "key8": "41kn9kpYd9pnb7uyLu4amHaSD4FEKj1QeCxkf9CiBuhxxbhsURJhxHHGAKjamc78qHsZJmysQs9P9e1NGTLJBqyn",
  "key9": "eff43GznHHapz1cdtaSnSYKnHvy8x4t5wsadw4wfLXEQCG7jqPkK9YtyNehDpY9GLUG2qdpSmKHSW4udh86VU4N",
  "key10": "G5znTXBW88h1Znbp4RzVqLjwFC4EwNi9z4GKkcEph734idhzg8XrNJCjhE92FWQervdLf5TSLMBAbdyzKQRGDbR",
  "key11": "5bpGfHbGFQc9hpQy7k75zSfhrsW4BcxTNayG466NBTinDLDx8AirZ4kSXkQmE1ko2Yy8Cn2NY7WvHseTjCZ5dJZy",
  "key12": "3r6tL5kCFegMXiMJ1BMhb3Y2u8ykMxuuYgE2TEaM76DPYi5ufbmrq8zUJG87VfbHbD2eEYWguvAFkhd8bSpvemmK",
  "key13": "5iFALbctWfQ3kWGaxEnPVfGJwmXvn1gv3zcjXgWyQojNJgEuq7paCdYHjsQxPcXcDG1k9FTzxuvCjwBaUFZLMQH9",
  "key14": "TXpzzjE6DE5XWngyY9wqRhYrtuNWa2DZsEEHKSZrevYXSPh8ZxYbwaYDBHSTfy9wkbYoebuf4aU3577j9fsmUfs",
  "key15": "4v3VfvEUkD8fuaHSV3LV6P8jnWSpkn1GDZVb3KzbCnYPdF8Av2UjPatGZWLzSpHhw94cas29NMM5kXdP84ppMDST",
  "key16": "613fP3X1BsN1JN1ooguwXq4i2qre6bUHG88zftHiMS64UzvK3h2MwRY8t8ARB9geyYabEkqZ7BfcnnP7ii2u9GvW",
  "key17": "5MuqJAN3y61nCrHf2cQzgxejVQ6uQxCXjae5oamzMaHEpQrCJJtgrKp4HdmKquvcKXqxTihtE9BwcTgMAFefRHWG",
  "key18": "66NSXvqpZaLfHe5Z2ZihmBHcV5NpEqihGBD1pEWtTwyyysAYfuqGgHCB97ii71do51Du3cdumoHL19cqFJwRxkJf",
  "key19": "5QhCEy6r2LTyVQTKupKqaZBpp7HvNPdKuXaa8RjV4RNKQuBe5igcdFKAJ8z5oUw1A1UbZcXMdM5VxsHJL6i17hY8",
  "key20": "XMqp8pCtKzUm3vSbLzaqpZMx3dyVnUULGyGp6gxriPqAYdJVok1WVSpFunRwfxYnhfr1JLpf4Gndgs1ew2xJkPA",
  "key21": "3SwLcvPBqovDzWTWjGHzBPHnsG4VQRhHAfPFNegnRRG5ruYE4Q1qrECg1tCLcsCaUcUSCgbiaBsqK3n2L92QKRLd",
  "key22": "k1sKRRF1bXZvaQCCN2TU4oYJ2qZJkWss7MH1kmyB87y3ePwyxoBxiQWHXXcaMPZmasSEJe23PDqbTq4hsTtWWdm",
  "key23": "nEbgm5HE75BDzn3cs65zSQQyxLykrce35yrdnhRRtyoD4RHrFPEoh9foZGqgqaC7b9PhmLcmBwjb2YB5YK65tpZ",
  "key24": "4KKmdWxibU3c5voNVvCPQXgqqdTnTEwGaTKdy2NV5eifFGY6G6TRxJkuUQwrDhqmLYrdbBkvRNf6ZA8AVCF2QTgu",
  "key25": "21JNBpPE1y6pRX3qmKdDjK38tdzNsTC7sMLjaJwu4cy581V1BAqerweFt6degtQnVxNsSkYCo1o9EsWL7MYXLmSg",
  "key26": "5fPhEbvDCaLNizRmkhULVgYYrYS61FHNzAiNRUabqSsTEQFYoR3UAiPjx9mgi2FmdPfjquGhukBk3rFyePKMiQY6",
  "key27": "5167MSUaBhcedLCFYcddgN3TuTDTfzyd7VUhr6zw57KMK3uxnvsSMeeeJBRAvjgsc1dss9nY5xzu4cWBMm2PT9pE",
  "key28": "46RiGvTdDxaKCT6k1hU8dVnr2ekKXRYkV9oDshYqspcp8P2VPHq4uzedTG1UxkKg6iWBKd6LzSFSe3oZkNMS5cp2",
  "key29": "5VDwthPvb4sS1MbXJu2XEdzsTDde7KPxnYmee16zpy2QjpeiTF6sD5uss6Z6gb6QuokstVtnKBowqbveiT73cxjB",
  "key30": "3HR5RRV8wghDmcTLqmSNteG5pQkqWigPoy1WnQpuNgtRhUK5kEfsZe6fHRxBjHi2z6osKw7eDqwa3ubHCBTZTRyv",
  "key31": "4vqmUZUp5T2pni5dzYzSQwq64GmU7Q9xy7nZNjRVeDry2yccXyLSBetc6VycDNNxQM6kshGmsKmjLeauRtgqNQNa",
  "key32": "47YdZCpKnJN3LJ2viSz9ptifMifj2RmgkpLbgMZv3GFUfKZPvfPt9uTUoutsUJhbWtZbtxvHsfj5rJ3eUL9kJQic",
  "key33": "XwzsmYjU9u4YJYYxdzhrwhpy7YXpeaJNNb8h9vNR2ux5QGjfcfiw3eyuyp4zfRPRKPVGNhiHN6SyuDPymcPmoue",
  "key34": "129YiWvLPuhArEDWfznRyXGWVw6xhnb4cY4oEcmUxjsgJeZxVWd7LWVvHBzs53mzvoenpw1vTHTdNbPyER1zko42",
  "key35": "2iabTzD7D2UUUiGTV4Dm3BVtZHeohwbEjG7hugWJghGpVGpcCUWM3iSnpN5bAJFXmQV8jGsTKSEG1rCC9ETMUYVQ",
  "key36": "64EU3Crjw1KVoTLQ9DCkmSco6hVm1iG7WWThxbdWNKDyQ6xMhorpTGx9uwmgWxf3tWMwXm3iKc23wX3LDBr65qDg",
  "key37": "qFGFFpDYsXx16j4iNsGoKNcJFwdfgudAp33ApuaPLpuLrPjQayyRveS9nYARk2wL1uRzZJGBFuhsq3MzRUkV9QL",
  "key38": "5vq5jgfPEFCkp4p9w9tQYoXte9VK6LACqAqZ91FnbmWtnSu5vA86xbjvCHWTqcEM3mwjJwQDpVBT5wHsW1JsgvFj",
  "key39": "Qx9ESVZasimecamyjs9ZRroupiPivdkFV7bms9qoqL7Ua1FFxnM1faLboDEVgxSEH9hnrcoaAe3GUvDwpLF2JMs",
  "key40": "5q6KeBNgAWY2sSh1qxetbvHpPnvaYBC6ex6hDqTghx4YusPVBoKrd9dTzqKbXqxyKLxyXDQeBqDkZ12bSGPN1fM1",
  "key41": "51vY7ingkuPav9tDqkZp13uNcLF2PoAYREVYLPCoAH75vbYAdLpMhCFmrqcsQku6jbmxD785jqMqtY1CeDq2XPCG",
  "key42": "53kPPHuD5QTibcGznjxZMmonuurPJWGQptABHnCjbNeRS3xxjwYKhqnjdtcMYpfVniuMXyzQU1Fqoakv4sCKQ6cS",
  "key43": "4NmYRDqJDPfV3ddfzNZJwxgvntK5e4ar7nJxUAcQ4oRf4TBqLRXToRH9fndQ958sJNLbDaxTw3AJR5DVrajx4JUg",
  "key44": "5AmYKtj61LNQC8MDTz4AaV8BJHxkVjNkQ8i8eByQbf1gJSGJciijMLYGBpykx2EDVHwQdV16hmmc5uPGeuapkrkw",
  "key45": "5fVZ4Pwx1Zsg4MYiFJNXX89FgZWP9KkCp7CmTfHu22DLb7RdGSLcj2vJLsuE4z743K3PEqE9CrtRmsSTcXBhA3Tu",
  "key46": "2wZ2GTpXit2688J8suSkGj8Ckdb3JYHXigkBE6YZKMG2fG7fCHeSKA9aRo6oK3NtcKFF1Lsjk2LRAqaFfvLxeuxF",
  "key47": "4HYa1wV456qhHRtYUDK14uyADLqVDSpbnbPuUxTtWToEMqAtkC1ZpKptnY8CSUw1HQHEd24nztyxqjMxMUk9NmKS",
  "key48": "63g8UutMoktkbgzTPYjYc6YUGvFBKQjtYjntB7PbfyFfDCQxTCzcWXjM13DHHRoz95TrLUCUPFoTDGbJf3H8gk8c"
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
