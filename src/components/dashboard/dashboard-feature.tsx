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
    "kgJS6i5ozM9TxSBDAokRWTFTtJbUDZzaqhrPMpHv2R7hvWxNqDzkKfdxEvmoDZE8XnuqfD9eHcBbXWW5mdnuFNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3np6y1bEayq6tyDB3gGizGboEVJ3mJH58dC4g93LkgBXg5ng8C71Vm5tawYGSPFD2ZYsQrKDiTG552tLBSjvfE96",
  "key1": "3UMmxuKNSARFvPmC1ksSZSFPpRs3TMfNdSzUyWAhiRGmrBeqaZYkBq5yZWk7bpTanGqPo1cipQdnYy84EAE2Z5ak",
  "key2": "2Fr9vy5WFF61X9FrTX7WHEfFypy7zCNxjDEWwVBSpWKaKAYLzMs297Hy2HsSNLMsxn284antjKXYTiXiiAxyFqqz",
  "key3": "5VPXBY1yEQcZy9oPZBRXmXryxspyQW4qvvjptbmZmkNVUEftQgJ8QtjGeU6vpZ9t75cp3u6u81qfBzexTjcjRbzM",
  "key4": "458e39v9opymgFpQuQCY29Uc2fhdb1ooLhaZcRzZSJQgyH29SgqUeArcSnvqTxqzfKRUScVdV2E7oepy1NgmiuUn",
  "key5": "5dMrgCLs72guUe63VutNmhaKmYdyFrEeDFjuuTS4Ddo7xYr9UtX2SvKPkXdVVHi3AdVfiRzpWUEGoCaTuyDhAzYQ",
  "key6": "2ixqjve9JnCe6zjAbvNxFriYtuHM6RwUb2xnkwR785WCTaXY68yribwojdyVBS7KqkzbwgYfqMMh15Ac23Dm2vRF",
  "key7": "5h5P5MBrRdooTY2GFgdRo2h8o29KTwUA8mkckUdcYsKkYJSYndsK7y7Jt9HqMAFu4iq6PAiNBSA8HYSkrJ1J36Pb",
  "key8": "2nszTozZXs2cwAxSoe1AvF2EX97EX5puuDTMruAh3MLLPShnaduHPB9vGye6naMp6H9UJDZ5pPeHqFVTvcQdJ585",
  "key9": "4GJJ4KmQdAeTYsitsoCcKhS1ewreTaXUeiDBrUmnaafx6VQa1eSSbBkUy474JFRJypqxoGuxCCrjaQWaduyxeBCM",
  "key10": "3rKTMCtQeJseKNnAKtWqU9wndkoBRzhtTQ69drKPk6EJ1bJNHGxHsgQzV3yMsaHHmZihnpAgiE2s1xMnSdEatgVH",
  "key11": "4r3WwNXAgG1AKwzf3nRjVd7KKVVj6SufbH6zyobrZoa21XBjbvYfM9YijB8THzStpm6EB29zyBb2gvxjfhRfSZV5",
  "key12": "4HZSifGMXjhWXEBF3v89WFYGt1mrhbHko471E7XwgtiyBdQe9uTGK2fqvw89xqmueKtFWfTgeAWPT2UC5EZ3PyNN",
  "key13": "33GmYyaYnvbLfgq46FmH6pLm26zXFgaPbVwrhe9xdVk8GsQBBJye3GUXZG5DgwC6yYvsdj5TRXCSE9uYzJKQnMZq",
  "key14": "3YKm2HXtvafmkNKZraCKzyBxpLMBwGKd2WThqWrxaxpbQHofhfgaJzTbR6X6z2J1csnYyUHrAeGGhY8jG54FanQA",
  "key15": "3YEfMq6zNaVrpAnV4fckARHaBPzPuZZNQw1WnXzrv41LthAWgUZGcX84WFztdSwa1cvtfivmBzMur7TXef9Ct3Bb",
  "key16": "jf9bNC3mWm6LVnAJsA2uVehVx8UhZgfBZL5jUkyCPAgyVoPHMXK4DZUMfGNycwtdT9mF87Wc9TtraSpkjdpZNzm",
  "key17": "KA2F3bqrBVREEU8W5oWjdkHwufcFP7LYMwPh2Zne9czzuyg74UsMPseRRhyaqbQSkySqPiFywDK6AYuuoe3Bxfe",
  "key18": "3n2Be6gafcALbwYnaYAdeVtDPErc6FQw82Uau6x2YHKzp5fwzX189oZA4fbzGshuCA72uyTQ65e5u2GoAKFBWq2L",
  "key19": "34zwn22o6T9ymJETqhoagarEy2fNomKQ3JitNWuNfYVktH37uetqbDoPZPnUe7LYYMj9xBjWN6mLEfkw9oEu8yB4",
  "key20": "2P5aZyzYsvKn3svyEqHmnXwU2QbK75t3F1782dpEjWbnu8EC8GemWfzJ4HuhZFhmPA81RPCbAc53YmWKAHbkFaBM",
  "key21": "5ML68v8LwG7qkAQJhTgtrwPLb1KaNKqJzQ3uR76b9uuKzsJvGjaydLmDomQrmgCT4XoLHZBRkoRu7UDpgPET3yhP",
  "key22": "5G13nYLtSWfWSMQYkEyz1FZTPkwZGSuisW7y4kxzUkLHuU3bcP48b18uGRvgiEbbsvisKz9uKJMRYkDsa5QXCmES",
  "key23": "4FtnrZmF7kA2SpmaTxEQBNx2uQ5E7c4cB6T9KabqWWwdTmqWUEZPTW6S7VafYcPRE8Tb1uRboBuD8Rjm4Fufjg4C",
  "key24": "282VQvd4gTpSH1QASXgtFcgzyGEHXrZe2ojmmSszRvsCZWgZGs2TjyUW49uBgo61Qg9rFDeriVYEGdd2HNKfiJLg",
  "key25": "26eoj73MS3WcCTyotjkkyqprDZK7TaYkAqhwtWqHhpFzgzBkyRaDZCifzK9oUCmucXzFa7VnXdSvUFvQwix65S3d",
  "key26": "3wP2iTmJqQrUezfuFGpCRjXkwVHerU4uyWbhmDeceWNSBA4G2ZcCq333SWJWxa97JxXbckSk72FN4pWY9H1H1PMk",
  "key27": "2z5QPWpkN5atRgkQKdjoYHMTjPkdHUHrckHv7rWwnb7ZKg82FywZfXxgwFzfFcsvtEy6edVFh4cks4G8TAuzVBXW",
  "key28": "3rF66QYKyv4RxWzWjLSKVLNtWtM2LyX5YgjLHZc7TFJRwvGqcaNzyVxk4dNgWXSfxGZsD2ty9ir7jKCeTanfWKFk",
  "key29": "3fHXzG19cYxTPcdfv6HcBriuD92VHTdqKQQcdyWTQrsoipr5TiPtj27oqWwMqLRHy8ryp3u5nyPMqvN6rYhLomds",
  "key30": "4ZUDA5dCQFj5SxnU7vZcrKgsFvFP2Hi83jjg9hNfj5VG4JXvHmawPKkjGNAtRBW7zWPZZwzTkU5D67LwXx9xKdVg",
  "key31": "VGsfXTFXBBPXmYaMZjoTAxcuEKo8prkqnKTrKczCbbFiNiTDqGifoAeMMBKQbau7nj1867qmVmQHRUNn7t29ohG",
  "key32": "2t2LjneZYoBaZMgLAAvJso8VEGHuoGi7kZypGVFQwK345Nhdzvkh3qyWzGREhtnFcYF44xHKxBsKbHmtR69nEUZR",
  "key33": "5DC782utr1zBKsmWL3Nk4t1SRRMSu7seQhGYyT9AMpBq4kTwk9Mjbm1Nbu1hM2AYqUNy1VaaEhjmd9srfhG96QqW",
  "key34": "5GnS8ViUYowdJAJ1cm8t1LSgVGwWkHH7P4ZZVZheTpP6YyzXvMKzwkmBHxtgQ9a4UvU6enfMbTVPKqwnPBtwBQKt",
  "key35": "2GVayQ8TVk32JqW5rr5UzPbAURJLwWyA6Vix1oRyWUtp9MY2vTz7Zb69AB3wbHaizLzfRf2jYyH3AuDFRXPQ2F7N",
  "key36": "3CUeVjzbsBTznRXeMvhFJa7Lckz5K2KmzwYzYTbBE6rWb4d7u22VQE2zNvjYXTKbwxsN2vX1Tekhrg5sQNLb3xcs",
  "key37": "2FBDynN6JYJoh9Fpg4zaCcRZYrncnpzqpexJi6DpfsGUMBunDKUf8yGoiNWK9phmARjSEFM6DYoFwX3ZjRxwED8M",
  "key38": "3hfbod4fNTidb5kkBU4RecxGpTh1pa5W7Zv5D6XJjA79nPWmkMQJJrnmtMTbbLcnjWJCLJZ2JefNWCRzZaS6V2tk",
  "key39": "3Pu2Sthx9L9s1U1ASR6mS3GZPxnajRyeyk1kGB14HFTRRT2t4XpRzkXNmmnkmXdPXembydTKTbJPLtRQo2C6WtzQ",
  "key40": "oVfEyFR2R9dfaeRJCzShDAqBFPED5rKWsMce1MfBQn7d3BN5tjEYSvdegdAzku1NMzrhFYCJkEtVPR3kH5sDwi2",
  "key41": "5XRGjn2GXXXGM8S85fAa4iqDhJ56S4JGWoHe3gUnNzHNnJAE6UJd3gwnEhw5iLBE46Bpk9qKgedWNKJGMY1V61u3",
  "key42": "5JQTCGJajxFJHV2B6viah65Esf9mEX5L6AeAxyffE6uqZcSJg1FvFdUrUWFwCi18zJHr8pUNbEYfoFimYCyiXRz5",
  "key43": "4etnhkEMoUVWeR75Kh18K42aTMhGgHx1yhSr3JDHaSyLQbB9DNu4vwkrsZSb7DaopKQggMdAiGtv8qfYUa88kTJX",
  "key44": "4MvYh6SRXsheNyBDzyQZAA1chZRVJNWVi2BQoTFSP5KL7Fz58BRPw6j73v5fn2fr24XRqp2ehyZHcat2knw7otSq",
  "key45": "2fj7BEsxj2ZvW5SKGvjSa5dQHfK9KQBsd7YywQoJ5nWVaVvBAuWrh2AAQ9sMm8anEA4waKVDhCQaqkxojrZF4Kbe",
  "key46": "2TqpQv9FSAVAeyxtcDcZbdLpGCyictGVUReDqNoqSPNxcCaNY7bqjkx9GbZ3CwumuiCMD2w1aEzUHNPFVHD1eLoH"
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
