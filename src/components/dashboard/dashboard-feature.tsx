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
    "23BCZbnMqNVsmpEUn6LfiLz5omx6E5hEjv8hjBNgUUhRqTF575rdmbb1R4jWPYdZ6QBsDufYzKVLSdYs4duSo19i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mjupwGbNJeciSwnWyTWr7fqxzERSw83XJwghGqCS77YUx1zcroHKc7jkh4kWcw42YVB1PRHMuGNHF6ztgFqTo3V",
  "key1": "4N4wCrK2rSEsb1NTFqnTETf5Nkiryt2TB414hxVrd1FUHejbtGD5WyEakuKTwkd9J8Djy5TrRPCD4JMHAcbfjhzG",
  "key2": "4FLcmEesf5kYVAJCZDdPhHb35o4tJ7bAt6FiWXQkNcZvGFdcPkqFobz7p2oiQLxkE7kKweCyn7qJGJPRcPhDU8MM",
  "key3": "3zp7HdGneknZzvVy6kRpZXyCoLe2vjjTUsGoDknoe2kjnHeaHypv8VK5QoVXWRDQrgZDHV2aegz3EDtb7EBcqRZk",
  "key4": "42V5YY7Jsf5yfTa8Ze6aw4bCtoM5acVPLcsk3eyrNFA4r8kF2FDRyjJgPYsqbYVgrajxiQULFQnVcCvciLf8X78w",
  "key5": "59JKC9EH7XR98ieqYA38xTkurHbHfGGGBE2gPw4A926dAmzhjimjh8vVsEqrNUC6Xhrmbtojhbv2X5NM66ANeVX5",
  "key6": "5op8LykWE7cxmwPagJLje3XYCCwErsFwAkeBqQqpCXtxkLFVUw9ssE9pFz4ev5PDXdPh4afgJdkovZgkHaoSxyKS",
  "key7": "3xLoJmAA6QsgELbDaYBCPysSZzQxmz7NyFZMcjDWxGQVMejgVujUUfMz9sBiGFEus6pZzrGcGVJsNXvEZ7id5eMq",
  "key8": "5rJ8BjHX28oHJzYYkgikJyZ7adU4ocV1yWfTfUS4mETdfEtCdLxhwE3FfpgKnqk2qe8TB1JcGGi1AyA6wjo3YbB6",
  "key9": "xhMdU1roWWLbQmuaYkhbnwokoycKwUbvW7chm3Pht9v62gqy4oD9acWHxGvuEx7U75scNKFMppUeX7FNgUQyT2e",
  "key10": "4NHXjpZS6v62AEtaspHPabphCJNKsasR9mA5vYhxAei1Qr2madHhhf723v81S4ePxnLi8d4b2BNv8qRXRmG5dSM",
  "key11": "3hhYV68ZYntjDpgev2CgQeBnPa93zU7dTNsptgby3N6rqrBwotPaQMeDuKckNXzUp97JCcm3BybSzAUPgbLax4vL",
  "key12": "5gfvWUgW6RpQwF5xPmwr4qxjKHqVAbfM8ScGFUDVvqfMZZgWyNV5TeFN1yodNYdjunEvZqTrsXFbWdaomtMAdsFy",
  "key13": "2KShYHNGsUnBtVmouBnokQeVvsardsojfLgWFrWCaDTxWXkt5adLpVeyoZWN7ygeQ5bScE2yzH7o3xu7wPkVQaSs",
  "key14": "3FRuQLwLM5qLvB3rwE67kfkWCcfs8o5WJdKXagMa1XL2xsrT19EqFkJr821bC62m8Swvug2xJ6TqRXj4zXkbjeCd",
  "key15": "35AssxATzM4QipHxy16rnsF8vamwp9y1ocJxuMFau5pTuV5dDv35HL3G2cwih2Bgiocuqqf11HcFLdYMxNanBASb",
  "key16": "2F8kJXTXnM1k1zEyZF3NHvQh2mC9F76z1aRmPZ6HPQa6gvsSG57wavivHsFuTCVjsfDHbm28SrKcspBCe9H866Kx",
  "key17": "T8cdCYPb7jUCjjuTUEk1hoeiiMMok6uZx6aQQ1ZUxeqRbxh18Pco2DKaTLh4P72QJ7ta9CZCPTE23q48PQZ2Ut5",
  "key18": "66tEyvNATXiVd4DLnqbWrxrEP6BSfQGbY63YufNrAnSogkmqc4DpdoRFZCivd6Qe2a346tXFZyw9x7YMEe3j1836",
  "key19": "4hY2R4M1NWhX8xDZHewNJ3KtVHkoUZwqW2hw2J7HknS1zYXK7cYUnDPCswsdEfA2YQmcAWWAuNYTkcQnmx596zHz",
  "key20": "27wKvzB214SfGrn9CKoHuBpugVUNZg4wWN8UbqLgV5Y9NKVXeiYhDy4wo8PYZqEvPD8zAGsSeJZMKuHJjwYgFbxE",
  "key21": "Cw1mqKMwHiFQai3THZmnLJXdVt9HfLMMvbduwb3eYABRqPW14CuzafffZDxtSPPPehEUkS5sDtcLVtJevY3KE8i",
  "key22": "W9s9tM8yWVL7nebVLqSeaNGbc7tHYp4gPL6SZaqvdsR7eq39yyXu4N1wN69A3rJz7KiFbo18okZMCZRPF5rJpyj",
  "key23": "aZtzARsGnsC25Cu9fZxH5cJUJpFUwCJEmo7mEsAeifmNVvmJgkakY8Bt1Yr3QcSVf59u8fzco6sNA7cA82o2xnG",
  "key24": "31EE8aKhVcnQiHu6EexGs8fpq8rmaNSP2VubzspJdbNnk7mN6Fq8JG1BG9nXkDs99wBRjCwQ1L1faT27KjBGxcLi",
  "key25": "4VKwunGKSGyC4X4PuMrtKyuGP1EZC6xYMKcsuLf7YR5EZodBi6dExg1QqCWDcuQPRsZNbeugupPDvXiiKuXLnYYf",
  "key26": "3donRYp9hKP1a4abww4qYkQh3dRPMywZDH9ZcXaQHWg8mWdXan5xaRS9TBtif52qgGWie1e6ahpYzHc7VanPJfQZ",
  "key27": "3Z1tLxm4ZZ9VmZnDY2AUXyp3doFQoJkPJDjdvaW4jayAsbavCBKrRXbXPmG9y277spb8UakdowQo5fpYbY7rpkGm",
  "key28": "42HJDLy4NBjRvGkyB7DGCCr5MaaV2U9nv6MSoxFcL8ndQwZykWiAMMh4EC2knY3uQVoYiGQrp2ReiPoY6AdJ2Get",
  "key29": "5ezbw7CuVQ5kEs5tdprHxgKLLi5euqUjx1oK9RipqgY4EWpEcmDc8kmzu2JN3ijByBsBT4XD67UcGRVnhpSoj53p",
  "key30": "3Q3ots8QoKd5CwRZKeFhT8zCkB8ckRyEEdBv5NZ1iQxGzhhWodvDHkTkmHouipHdYxvxBTAC3JFAZ4PxAVYkiHh8",
  "key31": "iY8eDrMGPmSP1MYZK3xSoSzhWSsem3NUQpXZmmzt5YfuohJZknt5KTS1uUqE5zgN6BXRpkNMvyL4yzGQkcJBFon",
  "key32": "2BDjiYuRDpsdtQjSdwv2ftvSWnCQHjuLsVYH4XqcTyB774qZGFqUNNkgVxPmRiW3TNxsVbyqjzmJVVFnWfh2qQVN",
  "key33": "5p9VzgG8isQtBParPwJB8MiXXBJGWp2FWrEcwBTZtPqdtcBF83tSiwg2K9iwCiagWLMHA9s2uQHwPXE4k1JYCSZq",
  "key34": "s8td3hVFQKZvNphVyjypJnMpQ1XR5AGgrzikz6qtfdvs9v3z6ftiSoK68f3eqBiYbqMw3CMGbBQhhhnvC8iQNDv",
  "key35": "2aG6qHhmSZNPGY3LEGBfTTJot5hEBbqAMd5YY2es859VcTV8vGByUYpxPiPoPd6fFp4kPrxHjLRSukMjcXuWGibi",
  "key36": "55URVsyrra7PhNtBGY92iZRZ7Enw2v4X5e1Dop26gNvzWGARzL6uUJtTitwa2GBXbNJwK2gWMdBwrehRD6xRuwkw",
  "key37": "29JdJHxYZFAT2pVCH2ePgfYGxt1cdmNmALpC9EGngMHPpueVxwqY9FrkuCeP6tLYeDhh355XBKbGpQHd3FnKXk6F",
  "key38": "5mBGEWxsvp4K6d39MdaomKhEfVDBgBD9eZxDfm8t4xZSBL8NBG8S2cZgq8qhNUJQ7pQ3QEgW1rxTCEXmHFrUZTLo",
  "key39": "2Lgr2GkELw8K9SEesAt9tiaQjh3eb846nmj8y3wE7hwTv8SpdnXQzhdvVb67Pe9YEjV9E4JjzFdJTKZ4ArfW7faJ"
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
