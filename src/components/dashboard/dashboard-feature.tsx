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
    "2GdiGjYHrJYx9j4jkviiwkqYj7LdsFcL38S167WJtpktqKgH2yBrNHt8rwDWdkf7ZechDphcJ7vca1s2JqeRohk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E55PTt6xw3bEPE48xnsS81P4w9VoGLCjhFnVdyb48uA6C2gYUYWR6eMPuJegqx6u5cGs6DAmU4w6TNWJUckjNj8",
  "key1": "56EVucJtuFwsTgjZ9nVwyEFAqHgDrL8eJSosgZabk3ANpkTqT6AFCKaUqx56SRWY28eXDWfMPAvVanAiuRNsULCV",
  "key2": "s5AeU8zD5tYGwV4NCXqZmviV1TfXFzdJvd8933fo1GKj87iQWYzW7GmDE4grBicJbqSCdFy1bpawoXB2JuRpDGH",
  "key3": "2i3oZCjB7MUDXdi1PGwVnhCtF4EBPayiBSnvoy5UoMcLteWcWWb9WmgapztqsrE8zzPHyni61LFoYgxRXGeT2Cx1",
  "key4": "4tZhk7HYEXCj4un1VsNteW4V5ywEeGUDfZR7FUdBit45YoZ2Wba3d3sooiyJ9NwgDimL1NvRfCisSwYxDsKeqZAm",
  "key5": "4o1mRWXnkhRtzxWp9fUfjnfBFsmA6bxTYXD8CaKFX8XmiBwTtSAMeuZBXQE9fYiuMgPzTnt2qsA7HCmAyLYxkPNb",
  "key6": "2Wdg3waGSufTXA4w8X8CMhrMTSDhDKtdDLLdxjXhC5LXuStu4nVsDFctyR7bejG8aCQ6kmXRojeArYFDyuYDUrhH",
  "key7": "5oMEU1oQLZDPxnqfb8JTpQEmBmttjjDSRjyC9m33sQ838XAgPERKfmmyWter4B5DSNhitqZBnxWNMwKirDK8GRvU",
  "key8": "62qSTrUADBAknLHCUUd2s7PLKz7U7NAd5T29bgv3yk8otG8MsPyL6D7R8vEZXM9n2BsFu7ZUBnNWSwqF2XgNAeyS",
  "key9": "471L6iYFNoqf2pL1bS7ZXEa2HSTbW3fRDtE1WZBtSf7ZU681YChwUrgwr4xSfbAFKx62xEXTrzUu3F54rjcqossr",
  "key10": "48sxNk876q1L2CvCpc7jX3WL8f9njsU8mDPwEuQaYRVqXz4pnYdu6T2uKLE9jJ1D3MUewJoSDnkXVhZxeVunWNYQ",
  "key11": "5SYeZjwMZ6ghx7QCkXzPLdSVjnjygrS6dC7d9RiwKt4H6GiC4PUGZTBWB692oLfEfaEr8beGeGuNEQtnp7ikuNtz",
  "key12": "4UqYyxQXVo3gSj2mTZDXiEmHLm6LvcZXn6fWsqeW7yw53YJz8iE3REZJ2KHu9rUNHxRrZA8szxF29huNHZvnT1cF",
  "key13": "4fPs1HMLptBioNn1ELjXnLGXCA29reaT8sB4xh9TuShVqtuQCUGvN9TvFeHyKSESzvmkWtcrzY7KACM3vSAR5wmM",
  "key14": "2s4mgTEQxTqFTPKC26pGBJ8RHw2Y59RaFJsCvFXfneChFnrWoBzSfoGT3EqF1R56khnRi3sK9jHZYB59FeVytv8d",
  "key15": "5J2Tu5DUyqgDu6ZNtzKqTJeoqgw98V5Go7aL2Vydfqt9HYToUGBvrbzqY3Z4WYLtRbEPq4vwJ4wJdh4jW84CXvu8",
  "key16": "3PFVokH1Jh8RvpAZ4yZpvyUqWkKPedwvYDeCSf7wNjkPVEa4SzoUMRiQBWv36vHw2v8BHqB7NdFQDntbvTdPQbkj",
  "key17": "4rbG6RcfVo7pqdYWa3YSjsHxMDBFyn1zNodiejkHZ1UJbR73yPHqdMoZnwJnKN4ZRpMQqyCHPLkV6nJNUej3EN9D",
  "key18": "2RUx7zGFQsfHBrj7EmCxShbAp819eVzpCBg7XBuXWeerZJTWfWtejLEoExjrJ2fudpWNYJgPYhxC6fdEE9UEaCV9",
  "key19": "4znJtnbxnHY6xmG4NphrzPDTm9ZVNtbDit8hqp8nigiCJBohB683WXtmkkpT6nR55gJwfWBn7VWNHejrFyvHn5hT",
  "key20": "3Xk83ttV9pYhdfRYtnQsRAPurKg7tCFVP2jUa8muXSwpFWBcWPrY8RxkWTsdhe43J31kQgnxPwB5oe6jPBt3rhUt",
  "key21": "3qB2Yva5248oU5Dh8MRjYZwjrTjtfCC1WpSHKsvRHWKfbxsgzA6D6DTx9S4HjcM8eyM7Fa2aTgYoexBRzyA9hhti",
  "key22": "2mLrfsUCkZgepLcRz4Fwfukh2wqiwsqSaznN7B86ATtNtQnS82YKioLJ1VX1iNW4vdYQAY1UcGVVsLv6ZPBqpmfV",
  "key23": "2fwKW4TwwsQwCWub2vjNXYKaiSshoPbY291xDxvDgxZZP6gyAqevLFXAdz2rBfUhUEFHrGBVrEaCBUBmaJr4ZFBm",
  "key24": "2cPHVbXRfYuWi2bCqM7F4DcEMULivoB1YQ3DgZHiEbd3SWxT5uv3rCTkhXRK3NmR9zSeJEbUia93wk42kkuX5ouG",
  "key25": "4v8EuFyynRnjX2GP1qKhZJbHsXJ6Q1WJ57MYcn7qWpWFiUmwvj2HDy4trRuSomA6jW37e1HEQCB6qZsjZJHHqN3k",
  "key26": "5py3StbD4G8Bg9hJktFWsMU2BbfRACzRjXPDbSoMCipucWd3AmLWVB2RF4EWVr3xweopP39QBYriuVuStJ7K9LCM",
  "key27": "4CLXQtDVCMw7mfj3UWzpWDnNTeaT92rdqHGurpcP2rCV2a6Q8yVCjzBQhJgVP1jGdVVs8BXG37UmCWrwrEkVAYKu",
  "key28": "3ELp5TmXj4nAj69cofssaW2NES8x16kuGTVGT32FAUKmuhVLAtFKVW2MZnco9kkCkGjg6TKwv2NGhKepehWgE68e",
  "key29": "5DC35p9uTmu1JcJRsXVdeNiJaLEEBk1qKhfNcWXi5C38x7rZESEiBFVxPEfHXkK8sbdBjFADDtj8RpfPRWQctJUg",
  "key30": "e9uqXBbh413jtUqF3SNPpnKHAY9Cdy5pZgHfYDmQRNWUpbb5mavY7pmTRD6y1LcBCnSSUxczFvhQo4AWiCoEwmh",
  "key31": "3JuUhRYathFAGoFi7neCguviJeG28tMDg9sVRvQHCVwMDTCfTsuy4EQCxUz1HzqKyKcs8CcNxMBNF8dXUVx7DAma",
  "key32": "63iPLSjiSjVBqMtZRcnrPmEJwkd9jAH8ggNkREb5W9HgNC6z7yQQFLArGAQQQeZhm7ML1PngUnPy27Q9Bwsy7FBq",
  "key33": "3jGdRAn6dzP59t8oLVzonfyoS9D5NRp4MNef2Du2RAmBs4womEXmxVtr5rtHyY8wM3xBzGRg8oLSWZg3ueSWzSM9",
  "key34": "55FQre5M9L2yuxMAbWFQF4u4LxVekWw51L3B2v65tKL8fvLq3fiAzS9QfBrZaC1orc8XArt1wy7NPUK7Ej3YJceT",
  "key35": "5636HHtFAqKnbvuzSztM9jYXrvE3XUGc5fhFCf1J526pLKtu9EeLMzv4cytQmR1RnPwKjfo3qU6Sby8KKPpuHp9W",
  "key36": "558TxUTMkqjRWYTg99FszzMsjjQQFSY4Gad3yZv59B9yhMt8R1xmrwAswqwYmvUcoamSNF4nzYJqQjrwoeiYaSYm",
  "key37": "2dPMtVPiKnmiVd7bMiuSP1z2dzqdPxFwJ7mshrrQSdaMkY1uCYxgMbtn3rTVEycN7ZUdsF8Ghhmiy9CW6tDBgXdq",
  "key38": "2KZgSEMeo8hqHktaEPf1cm3smXmDWTL1viayxJP1zWRH6mg6PtZdNSHXBizBKKKkj4BrzXWs8VeVqEToReeXZWRv",
  "key39": "2dth8Fzzg3wyPKfq7aUoMk9n5jpn4poaz85N1VCnZhPSRgXFERcsNHPN4FhATWhWjrfETCV8DSfZmxdA7H8HBwcg",
  "key40": "3fAHopp1XttM1LuJNuqCWR5crsmG4Ddnzj51HKcoCUsvz7sQDFS48vkq5VngRmH93UfdWnQV6XpLkegq48YtUto1",
  "key41": "5PBtySU7mCPoquhsGg4BfrWVqyhB22tEKMHabf12wkjJ6FbBnQzpUKyub5zRieSHWQgJWaqJKC59wcHvWg1k8EZT",
  "key42": "5BXHyZge4UD1LAsxW1qG86Z7DvwPb99rjTjsfLY8TU2cxZjwe5uJdhSiL5TYjSddFMDM3o4rB4vL39KgA3hJWcsn",
  "key43": "2uakt4Kd7oXV6PGKeQQKQ5oasr7ikr3cccP6VDuqMvKGuvLy3jQ3hhgrbNaF8vBYesvebXVAhLn6ZEvi7PzHwt4u",
  "key44": "62qQJgNNaXVx4DJ2hJr5uHNujh1jzFREmSbvJxXfntBc4cpuczJi8fWcRCAdC6mqjXrqUw4T5Vdrp9nRw73T6nmK",
  "key45": "z4oLSqdVWKWnHJo3Z5csHQDKvkXWJo53tQBJq6HtxEtdD44eqBv2dCkU1ePex1XuESWdUrWfrx2xJyGd6wWEeKC",
  "key46": "4p9TTTZidauZ6Kq8rLT4eVskM2wrqKXaNfKLK4uAQfsuMoxrJdwM9ikA7nL2RYxWEpCGaNv3asdYYFVVCHcDjcKq"
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
