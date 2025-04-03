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
    "4DkQL6WUdnFWCKMWVA6U2V5jWsu49xBasBX2Z8YM8uoc5w8q5TF6wV8kwCAcw8YE3UnScb3d9WiRAyk5Kt2sZ6tE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tKqVRockGX5NGfs2C34SgqQV3K8pPniFN2PDzMW72PD3qtXDZQBr538sxPqFCniAGmSZMGHCgYUsNUL4sxsgQsE",
  "key1": "5m2Z3roAVJBidyk1y7aYw6zwzLzyLnV4u8A8MMBL1eVGZa9PzGwrqghd2ZdzBaFjYF8jitXmqznts8eqbWL25x7u",
  "key2": "5JCJ81qAymR3STh9zwp5ZegWAiSPS57M2x7yaf9tNWWqdM15FArAT5HydH86NzgyDQBDpZ3X2TSAMLidZSfKscJ5",
  "key3": "3iLjeJadkGEbDX8bPzym66FtMkoSd6vMWPpPjaMrdvLmdkmGQTUpghgEUXpjPiWF6nMsLVziHovXpqkKTkftUxUs",
  "key4": "5HLwStXLLPjRFP2GQfbNz9ZGYmmos3iKyC19q3jiVRjr9VNNjqW54GJZHXE38HJBhz1CrJi2Ntfn2gy2VgHzFZKS",
  "key5": "ktDa4Byz4cPUs43n7RFngXQvMMQF2jDcjdQe1BCW4nNtqM3C5TppWQUfEA8wHcRJdE8N6dZaWUhkfq49tVNwxLa",
  "key6": "Jr7dRx1vaNBt5G5e5dYM5YqFykZNn9yKaQQtrN2oBTLSQWdQzYuJJrSLRgBf5NtHuJzsDkoCHkNYnbxGsdyu4bj",
  "key7": "3ZdSmzALyZES1QdRVFNJoHgzfrwsB9BwYinN7na2TyGmMwkhwj5WEiJRW8mFFocWZx3AEWqu5pFw6CscwBibGx1S",
  "key8": "3v58k7Sa1L72sB8SF8Z7ANx1VhWs4MkmAXddRoEWa9CWV121RLGVzPLQapx8iqNNMCFmg8CPz3bdR19aux2wpDCq",
  "key9": "2FSEV2NWaSZs8d1eJCkTKFf8iSBGXUfxMCTEJiyqrPxq6UeKQjfzPByUxUWDPRpWUuNJmGhDesqebmSBaHXKFPTn",
  "key10": "2X1ut4oh6x9fU6mXSYT8AnGQdSu7DGqqQqL7x2kctjyzVQdzghmr3WpWZBwNqMKCfZwECWi4uHMDQYSob8jftmdY",
  "key11": "5FnBN97J9Qy6VSmvgEqTLBVZmNceJp8gLcpD5mZQzEu5qFGz2imcJpdy4DYJxgfuDizmbEiA7S19xJXcJ1wpA7YR",
  "key12": "3NRHn6eXz3MgcaQ67yaXrwpfbEBmwrtdVQzVU5bQ6gzyZhcfRBnsR9kFV1gpP9QqHsuaTB2fDsTDYyDsHjvGGh9v",
  "key13": "3xbCaXv6AmDWSwQB3oyX3DSaZYga2JA5LJPbV2E2g9psNARVFP8MpJkVT8ZMdQVuy124z2MgZnp5tsqw6xrMcZkH",
  "key14": "5r6AQeMfrXM5YB6M3p916F1x7pzf9GWXARLxiCu5ZUj584V4oBKXYkXehwdw69DzEQxYmgUTncJtsa9uZzSe1D97",
  "key15": "3k3ty8X8jhrf2kr6id4Q4DADkkHE2j9dm1Am3CUffeNMLLVbVLgXuunc8tcu4Xi87Tt7KHYS13xtpELRZKqSW9Rw",
  "key16": "5xtg8XpdYNdsgcwaWRH9XkxfWEkYdt4sX6MhLHkc2MYwQMF68mV394BbeQKVEkLpG5WVM6kAds2MP5nXvFBqzumJ",
  "key17": "3YynsRmsKsYwSpcP8TPMY1tszf6qV2JEsa9bS4hwWdVxN1NiEWtc539pyxaqS47V24Dqx6JNvrhHWtoU72emBUNY",
  "key18": "3ZCCeSEtGJoke3V12xv3yuiCH4BmPTthFGrXwRPeTbE5LpcUte5kCvZdGhaMPNj4cErLdQJFHLtU2wxVzZiRS8Yf",
  "key19": "3DDjQqTXFvvWR7CEyrEu87d5WTcdZxdiepUUxwz63ViJDarV1rQpJmvJCysjqzJZMroUysztC8Q4E6ADcBHxXZWW",
  "key20": "4mR1xF9qzeMWARwvMURyHcEoQGLHzskf75JvUNaWnPTUxn1qKJpRxxLHbr39nWExRiUTt2aRFQEPYR8h4qvLijxR",
  "key21": "3HHLbimhs4x7M1QWmcHUNNsiRPDALB1P5Fz9F7Ms7gLGyE4FgreWaJjMFmxMTtRsn1ugYMJ1dfDsypMREHe9MMuD",
  "key22": "5XWFdwC2uvWVbnZ5R9sNsFcB7498N41NRknyysn5i5NVSeLz5wasNR76cf4UKBoEvCLFhsqfgo9d23ETw2zSTqZy",
  "key23": "5d9nuWbE372MrHbSdFsipEbJG5PyfmcGm2y1ECGLQWB3CzhhG2WE2Hj6vPdKRsnkLgMf291XnBRSxdU7vGTM4LaM",
  "key24": "2ZBz5j4XixEqsdLVC9FAMEGfGTbn3ax6aFd71VrkJ3NLZ4E6WSeqGH3krUNQKukjuDGFpMY25NgrLDGNva27p6NR",
  "key25": "2sd7ajRpVbAucwFi5e2LV6bXCTZQXLziDFn2zGT4JjaNMUrFN6hFKnNAwCTPjEtRNiX3D9wATE4nY57QStKjc1fq",
  "key26": "4L2TpQh4xfvQE7XyQkXUDBJsiUaWGbeWcLF3VqGDZTohbY16yJqz4Zsh1QyT3zT2RdbbNMWpLhiNRJfVHFnnzWLJ",
  "key27": "2iwqRYgjF1XuUArNMNeKgbiLom23em4NJSxprhq1a7opSxstP4Y62qy998CLYi5s8eoCVdjrURinmFXy9tKMEmrf",
  "key28": "3Zq9wkH83iY7nTbYFS33eQJrdTtPN1grpDcYaVKL9GJkGgPDdqy6xz3zmPJmYeNWEYiH8RvswoUWxKnJxTuq3wRN",
  "key29": "5Dqk8KFkdnrQUjLvcYh7PQJh8S5rrndJHHo1ErSRs4beFKq2f4TojgQWFR75Qk5NcfdTJtGDpgorbUBmXP5grtK7",
  "key30": "5qSqdjqBERySXGvkGvMa6StMpkfeYQ7KtdLDgZHprwCXioGtHcyR5W8xfEHekK24kgZ1far1qUMba395z9wzhy2N",
  "key31": "2kqx1DgyJXFeWaCiEL1TS9UzpxMdk3yXYDPQtEBjpVQH3xGNpi8xriwr9iNKHdZVHYYA1YkTwQoLT12WHEzeaWVL"
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
