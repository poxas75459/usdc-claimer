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
    "5A1HSxJPfJThWyGSGKLBd3cBT8wyxkWDz1bpPsMN2hPxdB6HNRQCGDhf8NJEqpyscSA9ecdwNbYRiRhGbjhi2F49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExuFTXTEgeRthEGTTFKGp2bWfLqBaeb8iqGRRMdQE1TetF9Ucu7reUSEQRoh9DTRYUBKPxa8gh56JqntYbhu11S",
  "key1": "5e665a6Aw6YgsfNCpe3VKJwVfTC48JTV3VdKNYJZoqxZ97VimTseTcGwkAPUChzK6MzsNbkAMXjqvw2DSX8RYa62",
  "key2": "5pLvXmfDV6KTC8ZSRZekEm49xR8wm4HcqpddS4YoC7mWF72fATUjLMjw7sbaE26xyKMgJDj493CTEPG7kn2nGhZ7",
  "key3": "4wuQG8AmP7DnjC2R9pPftBp3s8P2aNJ6FMfB6dyNevtB5iAaK2f2DG95xTF5kmfyQWBz2iS4aNbYapWXSLMYxq6C",
  "key4": "XL8sKVDRwYM7yhR5YZDgittvuGfuhtg8mB3u67XyyiDqUFUAyqXvjBNLAvrVFanMLqaeHxhxNkuAaZHGkRGi2Yy",
  "key5": "Fs3x8EwhPwcYGEHpCLTcXZoqw33cM8YR8RmEgTh5UduGGHDgasP2GtMZHpWNzj1ZoGDVPFjoudAELjZzYwQz9Ju",
  "key6": "9AJNYSzmt8deyxPT2imR4konPgXPhpc1yTY6g9Zxr8hUxXzYuAthvUMYXMGLEQ1CiVLuFVUiWvdGxiuMJaAffhW",
  "key7": "2kTd8YRK8jSruQPmdcRJoDm1Gr64WpsFYgnPPYrEFGktREKmHxQuccnESUYF4CxCMkdLqkCu5WKxAbT9mmyjcXMQ",
  "key8": "5kj3kk3Ym2hDa1bgoKTdWZZinY2Tz1cW6SpXoqHji9fBSqMtjvyc3NS3U3BmyB5WemoVXtCmiZE68YfZVeE5fWFM",
  "key9": "mwQFTLRMrEMjvczw2gzP2qnTckNLmF2WHcGGzrFi8jCZiavEhXuyAhDmyXEEBZXBqZLXKZRnxeELcUyQVdzXzDV",
  "key10": "578H82aqkG3DB2nAGgbgZ7g6ZnyDMuppUsp26AGdBtLxEGZwjHHMGRvni5tFBmLEVpU2V9up6rzAU1P4sBWtqmZG",
  "key11": "4aJ1pkAW16pbju2Yi44fF4g4Gcm2tMsdwwDr3srsTncNgkLSLRPSDCNiyMSGoBLv7NevUMQeNyuzUuTUFo4ewEQ4",
  "key12": "2mKSPQkouAHGj1b1fYcUMGd2fKh1ab8wozyFNqRYXw3mggZXZUcc1YEbNiuWga8jjvjuGryy2BV2whDgWxkRfqHM",
  "key13": "5myELBgSE1PUWstP2VMgA9MfxFtQY3vVXedh5hYEF5ifb4TKfvrEpzeQ8didQ3WHzTm4HMyibxPS9sfCVL3gmxJf",
  "key14": "5iGAaswacNgfUajCZGw9grQi8RkEMsKyhpTSGNXzCBC81iC5DJaiJFw3KfxswAPSrt9nL5FVuMni9YNEpZCitTzc",
  "key15": "3iWkR2jp3kqRk22Q9gTewir6yRdfJ35UiSaEnsWDvj2aiekJK3oqA1yUAPnRHvEhL3YuzuTV8Z93Ncjo8mASKbLP",
  "key16": "tn6FGua96o8y6wKRtTJUG9CMAaoz9f2mxBhmiZVrHQGh5eaTtAAdJycqxncMhBWphvEgBg9C2rWJXvJh7wBhvK5",
  "key17": "5X1ydPChnHhyBqrHx1uxqL1jwTo6WnseaVoobvXgeVoj6ZvwfHhSiTH4EviJyzGCJCwKX8FokEyMGgM9MqtNi4BW",
  "key18": "3BvEPXr8Ht4pk64xibbbwwyVmoUofFMBu6zgLk3JnDESqTnz6ZrVSu9YQajt23vSBp4kYN8ByC4Ef63RpbnKCZUe",
  "key19": "54cXzaNEXS5tLLqndk5uS5uacZTsxfqjYfeSYrS6uo7aSGDKqhy9tBcwynYhSbwqRupjhsQxnhX4GwUbADW7HTMM",
  "key20": "3fiq7uG9hJxVZwWvE1KmtkAvGaqfBErXDpGzMs1ytoo4z91UpJAak2ga8vNrUAZaeczNV2RSqNU7SC2gksh1FppQ",
  "key21": "4HdMPTa3iaLu5zKrRvGHGaSred6v7j7G2SmzLXn5KMUgfu9wgvqkJajoFNfVEQsNWesUTDHR5uPjFk7H2LN7xE8D",
  "key22": "4wcAZLeD9Uk966duY7Pc15F9hyDqE8xC9B2FqwbuWBVok7xF8TmDrJgDZ7tUNbmcr9CQshaoYL7K495g3xJfwzhB",
  "key23": "2zcCjgrS5xmon1GDj2NZWH52YZWWU4mhQbWx6S47kLiV9TnXwsPT4YAEYaM2eGQ98cjHMfjSmEmHDNAiMdbXkkdf",
  "key24": "2D1WD7jvqaR9txLA7dn9wdXyDawacKvLty5PseAwSTPVNUJomuHvoSteq9Wut2j9w1ZK6zRqb6QrCkpJiyRE1Ls1",
  "key25": "5N9VeiZsfJB7LV1smQFKqN9KqQYMpyxusFWXoUbT6HhmJJ3JNGTkTXUEEtvEzXZ9xYtxqLrCeajCcfykoVB7h8Nc",
  "key26": "54mvdv7wiSiei3EmnWT53Jfo9DUzaxDHGX4b3bcecX4ddUEwDkATbGwPGMwfr6sT6oWReE1t83HjzwpmbyyJCLQ7",
  "key27": "4k7YHwF5wieQMHoBWsB6FEijRoUUPMim1LauU8sVvkETVxWCt8TiT8nYTaCTujfUquxPtzBTHQiXe5gR6CrE4t49"
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
