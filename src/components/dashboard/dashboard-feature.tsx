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
    "2PQEoJRyN3uDUjjvp3psEjfHLPqRjTrVuuGJ6kzsLrMLALVbgV3KdWWmvmSuKP2pcZR9iJUGKEY7Npb7CrCqY9eY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mg116bAQGQYsfR51MYr55sKJnexsdC6qEJ8LkWKd6KDKVCdrU6GuBN7o1oNdapAP4yi4eQDYdyzPfgAuUrFfzoz",
  "key1": "67N29ZSAyKBRZPuHziTuB6LZovDycYWXSvKnTJLx1RYEqtSwevDtNaTJJSy6xt4cBQ8vbFxkG5Ns7FVmUtrSsSay",
  "key2": "4iqUiK6x7xk9WWokn9FxNonH3SfLus1PVaq4KegcoeBuuLpnNiJY5JYpJrpmSkQzZ7NDYYffar6sY8nAai35HLMr",
  "key3": "5WBK5Cu6GQ2heZxc3LbYYjw4tYYpiLXrk8FZhR6KHiHrXGYk7rZVZfofkTcvs53jFBvnXj9q3HAMQsadsaukiBov",
  "key4": "2wBw5nMS8qTSjnJMx4rrDYJgGs2CzjYfgC8i6UqGQRbdZ8GQr1Y7FPykv3fQQB1ANWgyr1qgNjyQ3k2Xxtofo65D",
  "key5": "4qZtwD96KmFucE4FVHsxdi2mk1XfhXguNXMEhJGeR6xZsPkbtz5Bykb8KHEDzobMPEU1AWGCJk1zAnMphS3WTKWV",
  "key6": "5rSEiX3Pm5VZw8vWrebgeWFpiDAMtZm1ZWVPqGMjEXzK9b1uBxoq4mQ5szJ1c2P6QX4dNZRqbrBFyGcLVDYFuJ4t",
  "key7": "3epZuxUuyieuvVuwFC4v3JNCPm6GdGopXRbTHA8Myhe4DXfxhDGY21TJT5tKpRdukGWwrMCZxcE2ksjMzUCanXsy",
  "key8": "3RWFauiJUJ443Udm7VfJsSz4UyGmxHouLbdxXaD2DNBe26GTn7qseasbtUmuJthW9S7cFzJSzkophdLc9yU5E4Jq",
  "key9": "43JQYLeEEtVrmUp2gJJXpBjC3pM4ou6UW1Byh3uFKhL298339nvnhCLj8X8B8VBkvSbCLpDvNjkHjZSjxqv6w3fn",
  "key10": "riNtP3G2XuTiUbubEmP2EgHQgthxvcDg43nfQgEf17XYA3Ynj9DNVKi4U7Mv9523t2SBExjBuwAP8A7r7HwvFbi",
  "key11": "4Hu79vXohdaEYpnwzwz8TJbNLHhzRNdztz5owMu12peG9o2sTMrPukByDdcA5tv5eiGzXytViPmNnyLeNa4Sz1Ma",
  "key12": "3tbxgwHnKhg7w5ReJR6QLL1fHsZgfzqu4QVrEB1vCXZGMRF3SkkXLSsYJ4wmpLhds7YZ94naqG94je8VYKTW5Y8R",
  "key13": "3GLNM67fLmWSXphDH3WTeo1jTXdEbrcqWZEZtN68C1QQKuJtqxwXzTba8BcZKqPE75HugVtyxW1FMnxC4PoJ54T2",
  "key14": "2yAEvDXEpxVVxxQJNp3NbjRu5LRwhfcVhSTZo81nabKWaNgG1tk5dYENTmWjzuJ4oxzdNDbbk3pY3ckzRuLyi5ZT",
  "key15": "5J8pqqmxF8BbDX8pAcvHN7gYuVfeBe46SCsoU2W64zLp6zgsZthfvgqrwKw2NpBpX8s7iTFpKnsusfVK1mcoBqXA",
  "key16": "BzSSaUNJx1ezdLsi3uVNQFGTE3L9cQtrCM9j896yQQQ6BmYNA7APMZG4pCSKiut9Uwxmp8WcRAiuQSyeNCnRDyY",
  "key17": "3qiGZu13yVa3GSjJAYH6B4iK814uEdyHntWHwTjycNCouLZguKJqRuRBS32XSqP5rTa2R6Ahq4hhZhknWy742eW2",
  "key18": "49Nnr5zFS1mQqX7m4Ze78MUL2dthzw9s5FbM3Fw7W7PPWyxPouBdsAy6Nbpa5Ruf2t5CLk1comZfGq7xBvT9d4t4",
  "key19": "3qwNvJmQFoCLrRqrRbpUwHrJ4dLVeAnkomwtBk6yRQaykMFFtUfAxtvVvoKyGTVagqgqRHDtR2iRkBVFUogaPLoE",
  "key20": "5KtvCagNNQYZ6DGV8TAD3him9RFf1vcW1TTzYmCuG6RkqB49kfns5uUBar4KAMCM8nGCtKp3tsNxhM7DnqvGnQ7g",
  "key21": "5upz4LUdGFNTyFeFHCjVLtBVnhmvKKeezgpTcxCanwj6MYzDW9jzSfEhWtFsW8YRjQTbQefQP3WcSgnSWEr3yCa4",
  "key22": "2wdv4uvMigQ9Ma2qu1c6jHcUj4TD6zDSNevkwXjqVfYAkkh11jKjRkSvQypznPCktRPz2pKnHh2snQXbktQmwWGE",
  "key23": "469cunQNxfnh3XxbXbCJ91wdhcVuSzdLGoCJhnpfLLLvKFdkaJh4qoutEZaeBe9HcriENuP8pyoa1dfktXAQ7gwz",
  "key24": "2qaqhyNUdAftHE3rrqdK4GJqh3j91hMGDHcRstMRWe75BYz2pT2SdgdpqWokkc4hCaz5qZpa9TnsmGCYYhrvYe8C",
  "key25": "2KRM7tKMAttQEhJEZhebT2iq6HtzkLL58jDjS6FeSSkN2ZE8AXCxqaNK4cZdRoL8XSkDT9Ay4muJSjgAzUzpjNZt",
  "key26": "2gw9WLCX7CifnihHkAJw28NUS1NBgBZUCbygvjxMtHjZFWQrznzjopDXwsa8tPX9dJNvQhKMnbxUbsSEYR944VF1",
  "key27": "m5oEh3YMF6evjgBiKTAs9FRdgeFvhm3NXkwAFY3ZXNZZjidoZgchFLUkdVAJAjpHRma8S9xfRm9yjrw6zyHeVL2",
  "key28": "4cZHK3smBiFweU93RQArCt58xUkrCKZFBTHaZhZpJuJSRBRMng2pN6x2mAZd168CGJqcyoThXk1ooEmm2QjAdzn6",
  "key29": "2hiQZqQPEH24Pq9Y5GPS7aA356c9YDLeQcE7BSyWRLxLhPu9q1qUqsVv6m7aBbj3wiQ1XMqBADB2VKhmbuYqfL8y",
  "key30": "3WVaj7qFZYBCS3SEHtGM32bHQdvaZzxoGJCy1qFANzYv7VdsdUwsdHza3YnuV4Bsy6VSMNNZarVe36gFpbMGSvy2",
  "key31": "2T2jdVKt6XAJUq9eeGPVSU7k7NcDQUSszqxDjksAUXFS6GTfa9VNF91ioLtoVGpXtR1rAneWttiHV5XoYM6jMw7i",
  "key32": "3V6SkTuZtwEfsG1b7eBUPdCPoSvF7PWD3XhdUgSLfrA4F7ktkMYtztSQxMuL8oJgwRnMDKcC84MT4RbiXQYRj3Xq",
  "key33": "5YDFgRhacuw5iQkVmKM6yHjWKjessNvMoGxwqxUXVfJCHtZSDLyomhcHrRK1zodXp65Jef4gm1HWEWgZpUYCvEET",
  "key34": "53ZMewscDrfZY7w9Hu6DrBS9pS2oo8iRhW5xZ7sonFEKbjCHsCDtPN45xKSgd16z8UfzuEYv2DsRScFdwRV8wXhr",
  "key35": "2Ro8L6isDDLU8Rp5nPaQ1NAiXyqLfADMxodhn9ZNLM2MLrG8cYTsSMi2rRQ7WPxq5hvE1jxTjXExXbmVsZ74VY8v",
  "key36": "21guQi5adoJW23RogVUq4dz6Wv2rMtF7xBa9rZEyQ8p2mzu46fiJkK3sRqootV4B5Bg9SqnY6zB5yAQMW3GDXMCW",
  "key37": "pCegMhjpqaHD62qVNaYH4JGC3cPavJm6mJwpVaVYVGJF76EQCYep2UFydchdLAkG53WgE3hF1WL9x4kCBUGEVMr",
  "key38": "2HLGaZnj42zfFSxmqA8Ra3x1yf3WLrsYi2H6tsH3nF7BoVXXVZtcCQMRZNRh8b3Droh4J2xN1oHoCpCYSaorGFVr",
  "key39": "4idGvYKecepzUCa9drMd6oD5VeURkSaWo43B82ggfwvHDHnDoQD4NtnnAok6qQK2sJVK2Qd6exHKoHpu8wBZAuFH",
  "key40": "bAumYu1cD4LUjxWPGsKdJhGYYaVtBBEzXXMpD8QgKADQvp5df687oBNwDfsSn5DAJKRgw53xzYgnCD3YMXfPNmM",
  "key41": "4WCq4CVwDaTuHiAXebaR53ynLK31Tv2FnaP8p3gX4scruJsA9P8eq8mBaNR2mP6obHvchzhsRorR1FZmNLqhuCLR"
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
