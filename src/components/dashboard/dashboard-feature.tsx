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
    "2Dtv6ef4AStiR8ReqpDNwW3chDtUcmQB3R8B6m2E3exU4qTusziSmTMztHoRjLiEDuFpcWcQinNpZb35puARc7CY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MZzjJRticWWuTudYLM6LBV8WR7xbQqmQLFs4s9PbphRbJEYt4ZzqoJJEQzM4ctTpooL8sgnF2CbEgCuMwBRiSyE",
  "key1": "5cMjWU8zkbnLwbUNoRCvf5qL42r5vRr4oXjVJj8NwSKpBVkKgdSjnQiwVLdySdtBHfgYsmEWES1e4w7tDmPdiwKy",
  "key2": "39dA5KCLmzd9zc1pKYvhyeqy4BC2kUAZW3efrQsy4ichbVDGW13fuejx64JkN8pUeyjNFdBQMq4k5W5Lx6cXjDqa",
  "key3": "4TstEZ8PWP8cSdJC9VcWKBnQmtNtLzPJE1e37nK3gTX3YbNsDLNzP5bQxiQ94epGpVT7bqLDQhos9vKg8j3Xpot5",
  "key4": "45RYHNZRmBGbKeS8VLGk6yGXRuUrUyygQ2VNiW3HH1rr6DZJfstY7FaTngSdoZ4MitFa3kah4j4U6z1SbTXKC6AC",
  "key5": "5LRYMxsQBchQQzmQQBfPUVcbSwMHFSmLrzVStwFXbuGZrd2UsYB3vmtuV5iuZeE1x6XWqcQMovucJ8MfMneaujWg",
  "key6": "2oXcQjkruBbQnbRVYU4ENRT4uptbAdArqBwbu5caAu7D5EAVg4oc1DsMYEJAzNiicaheNZ3uBunc7n7Gn2kBTuzV",
  "key7": "b62AYLtrv12wx2P7hqhqZZSrxj4NwxMaKh6BZ1D3XqxuWyeBS22v4UuqVBST17gfDdcK2nftejEeEXeu9hPRE6F",
  "key8": "4rHWaT4W61USjAJYyRr7mC6hFLAKZws6BeT3j2QZivR6VVYrqWaUtQFnYVJds6tZWkU6RSkJSh7RW7vUJrvng4LP",
  "key9": "41cNh9w6J1LeJdmTmMks9A5WdJddAmg5CucKNY2nsfHxJYgtZUio5fsgh9Xbsy9viXDjFx45dpSmi3euhgWcvjZ2",
  "key10": "5DXcpajAh18dJKNk2LeJke1YqP9PpUipvt4e7ksakUogRsTopwXbwuzLTB2vsMATw74iKa34LTUB9y6jG2cWf7HZ",
  "key11": "3H6tXcwzgvWiYm5aqX3BQnquhw4DtXwrxkHN5s18X5WJASzwX4CLjQGw2SFXRh73Sv1UNBSnyjvKsQTjhsVkuXWx",
  "key12": "5Abs4SUsb1MMFAtCsh2Twd11G87pSVgpFrBd6Zvt6KxeShfY9LHoSccssen4RCEVPAtDaEsAd4y8SXwryo7Yjwja",
  "key13": "39uoAiSFBRKotuwK6CnBVhZDHuLBQgqrMw4d7NTEXNH4YZnY9P9Que9o5fkAt73BFiJDE64FTnKUbDHxrYpFuhjK",
  "key14": "UDHSPLGFtxrWWLrS4PkVwkF7KXNHRqbdW4iw42xWtsdSv52TQazxTcasA62GtbVAhix7TdDwtKwXnmMb7D9oiBq",
  "key15": "wianvvTWgMv45JsR3FKcfysHxCKAyCvJj6Lgvb9MuQ77HRoGUMrj4FuBzMghyPZJxkq281Diswr42oMCDLjs2QA",
  "key16": "4aeqdb46pJNqFBZbhVgHLG4LLafDtfBD5n9HgXtrfgzMcA7jJ4Li1cpGCqxSxz5tvzikw71562bJw3oBG8Ttzutn",
  "key17": "C7gsFqnmwvTzpma1hUkVzZe1oHuf7DgYzm5Ua6fP3p32KGZxHe9jjJGZS7aJaT6d5SyULaC6wpyikmXsRMkwyse",
  "key18": "24V7HnV6vi5z3rsja6ff7WV7Tj8zeB15ScmKij7TZzfbZ9nQyZgtWgk8r85j8NCdsyku4FeVcQ1PNPspU7doVxyz",
  "key19": "2Kv95pZKin4QDTG55gXVAkoYMSP5PMnUp5ajK4co486fzqWFNFLMsYW67MkL6MXCrW8QkQkkYdMrAyGPte4QnsqH",
  "key20": "5qjbom52wYBfm8beCoosZ6LLvEeFwoyazdrJcdKvNqgxDzXfFGR7LuwYwcu44frAyoppZvjFGiPtc6HQe5taa4KN",
  "key21": "3cNvV9CQXAbySU5pzN1aHtC7qjYbpYx48uUJykaeXzYWmYGK1h5XG1WLx69sfqTUeRr2GN4arVXbNNQ1VrBDR27x",
  "key22": "5hdjVSKsaj6Pp6e2XfcSh7866bzy3coZ2ikNTpDW95gKYoUHs9XxC9Mug7hdkJPReG5fiBWwcQavanYwXs5P1cUr",
  "key23": "48swh6QyrfDZ2AHTA7dajxvnD8vG8xHjw2ZPkMKNX5gNnEkfhGLZWNCJpRBNnXFkUfkyYeYwpA6PF9FXwwdGEnQ2",
  "key24": "3c3ruahamagHzEerPbAmVvGJJjxRHV6cPShnRdff8Q4ckJ4DULMi6epmjjAnLUVpj74vaZ6XUyE9MeJ1X9Zad9D",
  "key25": "63Srq5U9Nvs6c7k6NucuYaMH9RkKMcZNa4BVJu9TEPxuRb8XfQ8w9CvcUCShBpw86Zc3eqXpPNtEZcki9Kj9Hvgq",
  "key26": "2E4jpM4GJwuVqtyLNbfw9sruxcNeHaWe7GAKJ2Ndas2S2KowdR1qbyW5Uv6XafmLc6uL7DdKnKofpvGsvw9cagox",
  "key27": "Li2jPLcDgnpWiUPUmCXoxDqn5gc7Ex4KKGbspDPHZ1mP13SQFzFmaeeMbCWYSqTmL4EVy7XBD3sivFDkDs24swb",
  "key28": "5RrHjat48RLbbyEHskX9duuKzhZtewCK2UC26pnmUKxSr82a15m9wYqMtD4FT3qwr3yJBcpFAovbDmFae5KQkwVb",
  "key29": "2jyJnobrMmr3edv5knc2vmNTsVe26ZKugrCwkakiZm38G6UaX3r5D4gbh36orYd3CGTuUWiKVfp15XYkpDYDtZAb"
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
