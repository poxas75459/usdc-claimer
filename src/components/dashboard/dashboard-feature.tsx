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
    "2opAXEng9iqoPQaYTRhoGhyUfvKRsP6LKzqk3J2G98yJ3ACHnp2TLx1NvTDL4SUEaP96MkK1YLsmQmoHfx2TwSTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XNXki3GPxEayneFCk5k31bMCShtqTLLZkVi42u6BuwusaKBHkho8oi1zzWG2d3FgmZrHBqxyUS5HJZoTdRtjSCf",
  "key1": "2PrQPqiKX6rWrcKk56TJN11Q9WDVBTZ279veButwjJpXn9PCn9FuXSkxREvEKgkqWkKTPp8gacrTKnhCceRXuaGg",
  "key2": "2aQmySNrDZFEGVT2n1T5zvEy1RDA7DpaxSjFEUsBDzXiLM7S5J5vKabu5bGUBcc9jzK9jt3oHEF3rovb8JGtmybV",
  "key3": "8PLkZjdsHKwhEsiHWxHhzXT2TEU4Dw2PkxjogcQepom94jaQY2aDqWMcAq3a4pZ1ME98TFStfK3xz7vX7XsbuDr",
  "key4": "XpwXmyURgFN2m4WrZNYULxXfQKguDEcDtiqJTYQMChZCZxxiwdd1SpsuWRGz4LHaF1GBtqd4AWyXTTsiaWbeFsF",
  "key5": "5MV2q782j784ofNK4N6gqrxxVP27jXQNfnGncfccatmz1A5JYfoaUaSaWzqezPvwfzJDsfuYowEVR28JnpLyo8Xu",
  "key6": "2ChAogvzy3LXnNZSfRS11zRRcjomN2HrwvnVmM7PrJ1YsQf4q8MKtmK9ynwMsjMS1ggQuU817pVNEC5TRMACRKmM",
  "key7": "2mFWZ7GAhmo2yCsRWn9tYp5uX9UPuDvHRFYUSLYjCygYS3kfJwWFQ8wSHp1tcirqrboLxoatytwhaJLVoehFJq6G",
  "key8": "3PXahvnJZXRFx643nfqp2q4GjQtFecQwrQbCEnGFNGkbvhgWCSFpwDX5xtXsXdoYwxCY4qsAvUzRSiysvx3GZsfJ",
  "key9": "3zHJUujFwWzpgweRkpH9KtD6dSNaTqu2Ypg58udkTdns54AwS9UeKjXrC7jHroVee4NikGkR47nRbhMWZ9DjeLJv",
  "key10": "2eKCtdgogprmyGbsoLckhC1iUZjaMovSQ3kB9fuKXqAurULhC88pAQd1n8g7vgZhuK97XJiC1TGakAdCWDdsneZG",
  "key11": "2QJ5JhozhxjhcJwKZUdY7xjHu8YJpz9CekCHUjNsxpcC4F5GYP3pPoseBUMZd75pxUsTSjch9QNbN5i1Vvf72t8f",
  "key12": "5W2vK3iH1iXjZyNH7DLmhLHg7sT3vBZEsJSkbcJ6rLZLcBDkoUZocVcJrYD8AdTD5LgdjUwaCYqDotNQUkXGpBEs",
  "key13": "5NUXhMD4UYeGzsTwe7xEsrGSLoGPc4ZojAZ7BTiUrqFAwVQNkP3CZDiUXXRQmCLz7soQkRZ9NnxW7vLUsNx29veV",
  "key14": "2YPwGvz54NuqXndCsFEf9C4PMW6rxUrU5BbRzeLYyGcMM5twdf38HkVnWdFBVum4L8kNS8dRhtrVGn4Aihb8J1MQ",
  "key15": "4MmgkrRLEXVWbXveuabKbVPmeJ16QnovTGTWRWa51EtsNkE91cvqSNwPqTm7KGhhvynnDcgGxahHVcT1Z94VbKtj",
  "key16": "2jcUz5cW2dQWGpUmuPhjLw7XYm4p39HT6FRsYc8uHYRzKNhdy8jUzayEPaVHFeJ8PbFSTD7tXYRVZQKZnbeTSBs",
  "key17": "4ahnLQge8yqxj7rWBM1dGuiiALrgMGqa1HotyQu1uoDxQq5cUNR8rS48DNo7J8zb37sKToZwKJn9M9RySzWwXVpS",
  "key18": "2QCUCNLEZ9wEARhknk5oY9zRWCdnFMVtAQVd3FEBN1kii15NNagmEPctder3UrdKJVryessR7ddTKYyKxqDk9VcB",
  "key19": "4b9rXrx4qEpyF5vDTh3cCwF2LZbmTpqsy8pWq5GoTWpB5xDZ21iaWb8bRWW2BVgLii1ChAQJReVzb9Y1e5iHsbuV",
  "key20": "2XpvKtKGatDtoXvD4ZdnxUGm3fEgSBF1S9LAg3yCs8xedq4VptmjvZNvNUbKFkxdyCw8rQYdowpCeTWXbQfbNRXs",
  "key21": "4tSZw7ZMEywV5wkzU5uKxpHXZsnUf7YPPHKcKYw4AN7KBcCVCHdBDJJYbNRk1vKuczLrNDj4P9XT47mrsiRi6RQ5",
  "key22": "ZUD9JPdWkhyuCM16ez6xaJ3cUH2ovjWPasyE7E8i79dMrEwfNJhDEEE9X7wDC9GbGammuDLzpQN8NyD8wGAozbR",
  "key23": "k568TYSV6UutLvcJftUGszHSYe69c2AzvNf7GiMWPDD6SnmmU53TscjBdpAqpQSgQZJbpcUgqUFRvS4fyFMFhi8",
  "key24": "38Q55vGpBuYZDrcee96PoSTJddBk3L2oxPeSGH8YCNG5eVZkePN1wpEeEY6hcArqWWwSVxvrDb1hGX3WUatrCjLG",
  "key25": "3XdMAL7AcQEXLcmK1Eox9hvNDmiC5brRH8srzhvoqZwpxgqfkqCazhaxzojHT3mRdviN9UrQP8qc3zqXpjZ5CXpi",
  "key26": "VAHXdTeQMTEqhtaVSLjrPimJ3UQJ44Vg6d5NcsJFo24ECiY641v3jeAiuNuSXrJkVgoZmk8tYoRvKzur7axmGxv"
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
