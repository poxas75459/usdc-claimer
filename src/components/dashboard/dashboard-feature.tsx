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
    "54fbmfmuzhxjJBuAmDAbe921Y3EoVzdLWHGNUxwkGFfywZfej9W1gPhDvUP1vC7k4GbKTu5TRDYioy6Z3vPoYG6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JQLDPZaoE8NcugzVPeLfPUgpcWAzbde7MezkTC48m7FdmJ8DhYXk3ScD9vjNLm16FVN6X8crv4bPAikto5tNnkL",
  "key1": "4epwyJ1RoAmBpgSRQxVoNYPwReFqekkzmBkEhKFqiwU3ahPD6Nx26UVni2srsmEvPJjqJzcm5CtedSerqYYnmHzm",
  "key2": "57NNGEVN3JBm45xEp8vdfqJLFM2qpWKgu2D8HmGKDxydbXrTXqUBhMtyCBqu7DQmoTxKYw7JNkb4Qbqu5nwbK92s",
  "key3": "3tA4aRd6sf1NY5M933VBoXXSEZ279Z38u7aaYQy1H6fcRQjqpmeoioehg2HghJo6GBw6CAdFonetf4rRM6JRzxMh",
  "key4": "eSwGNb8NG7LfZfB5p9K5zceTkxnE7PyGtTcfWcPTVnRuds8WGba9gjK33u36P1aTeEo9MBuQ6kGh7ghWxu6iqR7",
  "key5": "2ydoUngpCa1Kog9JeeLtsaGBScuZPZLMRmp5bkok5XN73yFyjH8E7tfgGbj9fJjWism5PVvaSkmrwoXPnGCrAgzr",
  "key6": "3ESNTVKaBCtz5ZKkLtgzMk1DZh3MURu2oRzC4VQn1vDvjJS6KDgQLwBxwvGxJeMDWBmyKgd7BjFptBnYB9F725pB",
  "key7": "vJf52n1ZSnVsefW9zhHq2vhpD6Go64Lx5R4H6YkwDu5eC2tutYwggFcwEMpyHJK8TmM7tFWzRvCUNV7z8PZwvPY",
  "key8": "2dtfSTmfHnu6Kis2Rb3Kg1yJwT3349LzsdKtiNBosHAH9UEwMFeMCbi4vTmqHJKMQN51x7gN5fxmXWK8Nw1QZ9WD",
  "key9": "3F5MkoKLpo7442r6XDgTChQbnuAYVNjb46w27ji7sA1vvgd3NJFSugkQUX21VPgq9S1MT8PVw6DYaFrNv8E9DWaE",
  "key10": "1GXqGssFmpWwZpgmhcgSdH9pd7oc6WULLsyCyXBGik4FJhUE1jkWz4mqKaU4TVbYH637p2B6HhuVndYaGmqBRw3",
  "key11": "65GHT52bxETEJjz8ov1B9HxQnKeJj4D8MAjvRRykVbWd43EFfBuuqPmxP4dKkNNz8fw9kbsV1WemN7kcgNfnsgp2",
  "key12": "2YW3quMH99dQ8aksBFyfcvq1j2UTZ3FZLwuJVj31Lv7ZqHmjNDZhb5wBoL5srmmZwTPN11tGZJqWj6Nb6sQTwXBa",
  "key13": "22xdLLdi8Qb2mHG8jurkJPrQTmNxg1SZmrCUtqsTWBTDoEoCqvm8gwG2RPYU5xVsRUJ472MxgkccT31x3WFAtmvs",
  "key14": "2FjRnQBggvc1VEKBEtWdTW4bQ2EuCfoyubQBEkiMoWceci2SHkmUYeXqYC4tvaLePHAkEmiZaoWBG1trGHeZsQmz",
  "key15": "4zTrXwyy5tfYXAzWMPiTBZuxSyy4k1cwKPLHSChnEr1cAzhdYb9ZjBbwG6296J5ynfnuYKhFeZjCEgvSbHLZRkAi",
  "key16": "3ZuJNif7EuSkDvnzzdbzDZYApZzqASJDSEW25rJyvk7GicDiNhS4nvQTqkm5iQgEgSb7iY33DEGLxVVtQqWzcWMy",
  "key17": "1SqUgqbsLLs56ptnvnuvzpuSfqfdreCZhjEU67zTGfU7KhWre3Sx45FwwmpaUWe1rWNwFEcxEKfeJLz7o5nRpzM",
  "key18": "5k3AdHbanzkpu6f7pVdNYu2RHZu2BzAaVRn3wUDiAMWz4o9LoKEiUVNqtWc3svimVHTgUnxCcpQgpDFv5HBMkGst",
  "key19": "5o4WNCzDa6hccbeXAaFNTZWVYZbojXMWhBZDg9ZxLn39tXYrY1nMDRXB7T552RZuyBm1VwtLJac5sitfN6taGfiK",
  "key20": "6eW4K3A4AT34B5wY5Ac8wocjNG1vWHjeeUzFhNipcgyfP8dPnT3vqCH3Xdeny9qUpYnxaYCRav4je8AyzEg3wMn",
  "key21": "3gqbc2s3cTjj86aumKMpmTmtvwfeSm4bxZfSZ6LdNhjLQZwH8kYV7saab7Gw6PG2nXHtDDnUGJr6SZp7zaZKTRdn",
  "key22": "uuVaWYD93JtUN2dptYNffVMtjarp72MmZz8AS9Ac91HqkXTJWjXV1thR2uPTp7eCZQz5DpKAhNck3Zt26kDKtZA",
  "key23": "EJ49vWieas2Rob222C3cnaVFufzLt9eB8S2sxpQCQmRuzJL25GgFE6ATiW6dBntUSm7z8v1p2zRFsPbwkogaHTC",
  "key24": "5AVBnpiSpmfZNQscTkS2DgC8pv6PAqwU9FwsTXmKg9ureeJds8yPa6sVMj2FHrEYZm4LEc15hYqitRBFZTXaxFzq",
  "key25": "61ehxVVj6BunSr4dXoR6UEvugcJ56d3Zwu7smMHv7UNJo5FphvdbnJwDWWyfD6uozoCaorXWgoqVX76GkP7CvvA2",
  "key26": "jXU3SEZDhixHhTjt37ThPtGdBTKhjMCRw8gieqcW2cS3F6C69M6XTyutYhoQYVU9MJjS3ar29HL9vtsi8ZkADGq",
  "key27": "66QjHcd3t29iQv2Cwf3jrUMZYuiNTDASCbGhJz3Fan6YnAhVpSgNwevX2iDhnLzMr1z3YLmMWMc8Wywf9emch4Sk",
  "key28": "5Xcv4mNC4spNt2C33Qu1kGoyvFUVwb8QR1jRxP8mjZtKHADVry4rqVKPYGxhXc55owh31sw3WmH1bJweAQGfZg16",
  "key29": "612PkaUffCeFLPokCEQDro8CjnWJMZZ72VVj1xm8v5k75has6iAGZ3mvqpkkgY8fh2NNxzXJEAhKjUG2FBhYhGJt",
  "key30": "zQo8dxJvHxwwbEQnVvL9XEA45TuWYGapJaVxk71BPG7hpiMkC8uToj98g15uE6yEUSTEau1XnJhrQzeXcSHvEnX",
  "key31": "3tmxNoCTWti39crVgEkHPcQhxDbKDdpcCYUiZSq3bjJi11X9Y8qwUkFBwmvSV5DJ9DqG4RPEw8zh51UXuPQmz1Df",
  "key32": "4zeUqFxVvfdYq2NAWsEu32HRZzUcEQPNhFNbRcbiZkDHcXo15HudGkTsPu1hr3pi4ykbvDffJKie2xxJE7jmvQg5",
  "key33": "4rEcjLc1CoCnzbUx2wYCQaGAtYd6opet1PudsDxqyzEyLayeRRnkZqk5EnCb3RTcBpFmv1otpM4KRgJ6xXkCHzCN",
  "key34": "5UfgzDmBrtNxyRfiNXsJ5a8KbwtmRx5ngM6uKsLPdCUWk5TasUTbhYbsUtdQFnGo4L2pxVjwwqMxt5hFtkhAij6i"
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
