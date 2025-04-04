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
    "62AVbbSemHFiPDEpoZR6u67vAtRdNkGHkCV1niMUPwv78iDqNXtcXsunCNp5jht9xF26mCDPt2kc8ByBAyQppGMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AJwun4hQjHsfqmovmZjcWr3pz4KApwvRAt6MWTqfN3ELphoLq6sUjju9HwQtYqTBfeEcz5zZxnoTzZ2orw3pfFv",
  "key1": "5P4aHJLHjoF9EkLoSptRa8CX8t6vWoJh5HcM3L2DaDziXPn33Txoo1K3NbwrDF5Hz6iseLjsneCUUvf7fAnxgC81",
  "key2": "3E99vLWWhw4gRQL1hoscfYt8rRj9RxjLQmFmHe5WQzXPvHvRUYTo4GbHVY1cN9iaRsXtR7479rX2YaZgBGxvniRe",
  "key3": "3BisNTM7YmnDxmFhCJURKyN9G8xryaYX9wFeATstQpfpb7L6Wjsy7zRiMg2bkEEoKt6oAVn4v3p8S4epyu4J6eSx",
  "key4": "4y1fbjDX1i48jKofZoyyZtVBsuHot8SB8rvsNCo7PwChekUvXD4jirvj7F2MSRQPtV4WF9x15e57xVdd7YzaUFmk",
  "key5": "2e9oQTY7SLHKXeBJzbJ9xdwdkLrn4zVXRua7MstKsVBavugeYT71SncujySNBkd83mHXca2CieYxrunDMbQNkE8X",
  "key6": "2z4eXZWm7AYYcGY9B3ymL8MkpJoHQng6LzxVLcdwGE5hd2fVEtsvDMZta5NKgS5mxSoNVReLE2Re4dXokJ4NHuhD",
  "key7": "VKaPm2ZWUHpNN9jzu5UoCwwd9w9toMwZp6YLj5kCw53gTsoX1Ft8VHSYPwxQbNxymf54YHpQ6ydUa4zx1FtFesT",
  "key8": "3FSw6E878kGiYQ8eDMfEFcYc4of3NhqnJUxyJkpm7YgLeY1TgeDCo2zEA1mVD2dqYNYZuisHm5B7tYy47f5SDMj",
  "key9": "4A7jEAU7ktWdtg9svmRJZy7dWXEs1RBgzcxuBgxLEEhyfYPDv7hx1SDxSs9qyJ3tMSHRugR6zu55Hu4FvWeYDgdT",
  "key10": "PEnf7nbWoHSrNdBN3XodhW5qxCAf1mS5zpimjSxvmNrA1MXXR1BLWUDg7AffYNxGY5j4ifruaiaXozqCn9bALGC",
  "key11": "5PzqmdaNWoFD5sEyp3BE54rLXUJMcAhPyZWZMWmeZtdTBDh3fRAQTTTb65gugMgEBvsgukgSstfFsaHDczDEuMeF",
  "key12": "3TLEwT3AJAndzG2qH9viqqFmomoQcKGrXvD9QZDXBVce5hyXvWUfpQ1LWeD1nq1J8k99w5xxwUbLiG8KdHaCU3nT",
  "key13": "51V2qy4QWYYqEV43Jru8UwV7GTeBp3TMfLnvbsT6dZJ14DWgxpmmakPusR44xEe8Hg8yTqwvCRokKqDj1ySWcqa5",
  "key14": "4qFDq5jCYEPjxAii9CSz7HB2rQgJEgK9m4L8hBTt5sXvEBmjr1nFFxhBPURBsAt5dgofKzaNBMHhhQE3f7GZBmW3",
  "key15": "3n6xtUgNMwC7zKdRbRs3x4pkmFVZuqivRF24xDpzQ4TrT3QYvTVWhJb6Y7JBaHuiZ374LoSEsVt8f62eK7tMGpW",
  "key16": "4GQuBY73zJxtRx2rusuYuLUawpV29ARJztTjKi8g12L5oycX4tTco4h1oQUvLjRfb3SfNFpjZNfkG8jsjXgRyXyM",
  "key17": "2WUdkXEFZrVr2SfTkc4wRaUGTJMBonDCPYy1ww4jWCNsizKoKet3odZpxkw5u2ZdgXiT1BDzSihDUBwADne2TS1",
  "key18": "45PSoCqytwLcksEKFJkjYq37ghxtBdB1tshf1JBne8EY3C9dPfo9KAYgx31iU1a73KRZmCSRVxohc4WDaKbignKY",
  "key19": "2qdW7XnYXz98TYwJpRKbtMuxdj5QQVSdDjxKGRLBFWZXYThoq5Sn82T2qansTh6wRQaRafNBXv9E7g5SsrFGGoSU",
  "key20": "Sb44AWHLTgKqoxvZ1FENpJJu1QpPAbt7rXBJY4S4nxmHpjqDYJMG7f8EXZiRLeZj42G1JogwCit8jzHkchzwskc",
  "key21": "46snQoW6HvS7Hx7GLY5xKaAiLHvGJQX5MrTDR3wgdAs5V1fJawQyjkNiFBBn3vzPU5Gi4GDcd5Ng3nFy3LXnjVFf",
  "key22": "ssudKhaUo4xUomqnus8nEbcchW9tLbLcRKeEJowKmqmgSGY2c7a7bwnhYxyQpgPwTUV62cZjG3zcUCGrzE4FjPR",
  "key23": "63XFBJQxtLjjwVhb7t37XUD9zFNq39yH7FDeEoBmNhhCNy2VFEJ1S3WKkKZ6fT3mzWnyErA5EWHjYsqswNGjLFcx",
  "key24": "2XxrnQYswMa6MemgVB4kwJg1SSGPnhevFqzcN3AixzKSXiPdrA6YthW4ZBwxC7AyWn3cx1WsjJiA8695vjt8AQPA",
  "key25": "54gUjH7ZtENbaAnX2GoBMwFPRJSXduxsoS7XaJg5DjEgqoYK3tCMLP4q8UzAxuU19NvKQpEyjcoGemUz7LHB117t",
  "key26": "T2m43VwjmgWzL3Y9xhxtZNWZ1ey1SXQXsGdEA51QF2WCX75emiCrVwDweusn6ZKG58mNqVgwQDUgMrXjMGP7djn",
  "key27": "4P4tMNvDqaJcVWXjVeXP37vSpoyFfKMxtNc976PwUdbd5xKcBNg9c4L6gzg4DymMMYdDkvpaLozypuG1vn82y6E",
  "key28": "2qb3YFwTYegv81fuu422ChvLMW358YvkGh1vF2LFnaahw5b2jW5BEzc1SRQQ93GhFu4P3njNsS44YsxGJmizufaj",
  "key29": "123d9mZxwADokBgTa1QwjsFre8UzYRUL6rRa5N1FNxz8tCtAYHUxCokYjGAEUHu9FPKhmfYKsER7zYjK4Cmn2erx",
  "key30": "3u5N8PTv1q3HoKVK5MTidrBDp7Ag96m6s2cireoduEJmRKLGYEF5nJad2aqi9Sj5AebtTFd9ix2Uijv3X9ANnp6h",
  "key31": "59YeoNTFZd6y7GGonJKxPVWgckJXDmLdkzXD1FgYKVcFqsfnuXL8ocd3tbjxs1z6aCYPEoxYtMstwtb1qsKvxYHi",
  "key32": "2d84cSPDu7MXAqRWd9t4q1sXBq3hADYqezToC8oWjf8D3JUra4wnW1yzjZJVoESwnD3rKjh7FCU8kEZ3XTGPGSNb",
  "key33": "44jC7J2jvfJB22Jo9q17XRsiDD4K4Vow7iJjNwjakr347LDALGHhzcs3Lqj4VY5w8FFdbgeeiJVvxKnQqp8XoULM",
  "key34": "2vE2fWT27tdnxEfXaVx1PKzK415SkhKXwycYHLd8tMUBv7LKAA7eYwnx91d8N9mHryEo8EhZb3RzdrpKqLXa9uNC",
  "key35": "43TLeriqTTdfE1e9RZLX2gxerSmzEYvaXDapMn3EwBztjg3jCrTQrdMzSd8ksU78Pddczg64UMe445Sdruk9Vxi3",
  "key36": "2wDXVfR6R3TrVFWK2UiJAfJf7S1AhMh51wCW4FTUTAKwnyo698LmPDcguaKRZgyFazQA1EedGVizmL4bcVZwzeXA",
  "key37": "3B5aj2htrts7xQvLjNfWSHVrD2gdCfrJdShGWGQA1wLr1DR7924yTSupahcqQk2dxb5TdUM3EERbWuDRbmQ1tzZG",
  "key38": "2TuZTC9Hye4RCnEKqDjXJpeMGu7JSNu9txiDuYYqcvCuaUGrgvGHBLP8RwohqHrQ8YjJBwH8XRR3AUSkhgQKyMJ",
  "key39": "4bYzeUdKbf8zo11fg1c8aBLqxQs7UoXmXvaqrXJLXfoZYPNGZxmRhQhj5xbnKHTLiEprLU24SWr2tTFjFFziRCjW",
  "key40": "3hJbsG5UQUxfBHM1VZDJwP8njmsfcuVkE6usTQkm4yZhznNSUPzkgkmZet8A7Yy1kXtkT7ZZezbMzM6DPEaaDPJg",
  "key41": "YWs2aCdkLMtCBQoZwapHd9hQUhoDFHrGQbRs2fLnjKeowpdkycZ2Pa5K5dwBrxZT2dSLFo1QYv2oQyGBxScimbK",
  "key42": "3KpLiAzDgoefhmRreNfY9u6VrPJdCBNBYkUZh2dEJx9BHMedcTe6c2oKb8mC2ghotZorXVogBjqUWLnyeE1Q4PeK"
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
