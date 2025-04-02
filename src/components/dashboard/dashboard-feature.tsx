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
    "2WQNJ2LgGy5VhuC1CJ4EmiTUtfiVybmmWAh2wmY3cUYXTqTHTQHgcc8N9hptY7YoJ5riVGhiaprc5EfHREeC6KWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HTN9LQHqFnz82RfRzjW5w26QCdjPXeCV7zBQYTrbH1SShjFH3yxFCDdqFgwXK8W6cdKjgdcXs5YDgUayiXyvRBF",
  "key1": "5H3ksoBxKqw8u3imj4DR8fUL5eudkq3NK2JcvjYheSdnqFTSiGbtUHJuXfUyVLwQTJDs52dKd4uSV5b1m7BCKKuW",
  "key2": "22sFnXVqx2xDfxLRMWKkcjMShs2Wqd3GSa56fHv3sEp94qS99zagVyqYAVjgLNgsW3ahYeF5Jp8cWiiTkPLbmNJj",
  "key3": "2hzzV6p8exvuqQznQdq5zMks8CmMcezJ7fzEbjonJuniZXmpvJDjNpp7Mmg9YogMHhi7ywtXiZFbMotHnEnG2E5a",
  "key4": "3cFakVqojzddW1ENHvAR8GeL19NzkuUerKXBycGP8y6kYASzMUB4BnN5HXahtXzkZmKLujBnr3WdSQKTLJwDjXEj",
  "key5": "4uyoSymVDaqf1tWxeKjv45x6MKdq7MmpEXtQ8WCMq3cNat7pVVMKzsDjd4mLz6beBcZVyWsc99Wh6vWo1yVhVMrz",
  "key6": "k7YtzjaxWx2qoeKTUUoLqf7LSZByXidoSaLbuZiHtf4JoTHgYF4ornn6qZzrrkVbKnLQ4A1pXPnUTu49VKLMTKB",
  "key7": "wojn9kW6GHHzuS9XAWJbHJum1eMNQgjLfWXHqWG4PyLU8jaretZsSphYaGpMheLx8SReperqrFTHbWrtwJJE33f",
  "key8": "Lv4UzN5p7bkV6Lj3aLiJkkVxrnjX5vAqcD1k44nq3epGM4N7hHibTvNRzxpUHga53gztsw6WvLVRXjv9f5o6626",
  "key9": "5uPycU8nHMSiSsUQDctxEdpknd64VaB4sv26cC7vbEabLy8bhrEnsiV4MkGgm8SaYNsXgr4eNGJHEVZUwjfGHBxi",
  "key10": "4XhB7iEbHeW6Cm75XDo8dqFiW6FoUwW4jiesqoEdffSJVAs7SbEDTmiK23KafGYNkc8RvkJdRTMSJ633UdoHfEaW",
  "key11": "3jRPNAghX9dnHc8R21sWMLue1nnoe7pXCAyy1AaSarcPELrHN9waWcH9e59ERcoQBioNFKshg3bLfaprV83gC6oA",
  "key12": "3bKVELntG3FcJvR2xCYatPvdft8B8td8EGY1RjiD3qLvSucCjgwizmUZP1EenHpCg26FWRenNCF61LJMCR4zPfMV",
  "key13": "4XLknMFSsDjbeZR7PLFAdj7NVqw6iR1zm8gHKkTedtcBdDgK42ZxpBnNvX5XEh2iQ7in9JdceFQuKLwoeAJjKr12",
  "key14": "24Gg3KKKpXZQzKDBcZUD9TGA13BWcsa1jsubpdJQjdT4hKRVVEwMQxT3XA3SAjkt7YQt8rZnEX4513ojBpEqczt5",
  "key15": "5UTG8QU1tjCjsnSkv89VndFQaShuzHAzDb3p9Xed2dmcL4K1s2cXJhb8KeumfeMt28bL34Q9RGicaYjZikM2rhd8",
  "key16": "5kvZYWFNUo8LdR7P66aLwHxjgvZY4TnKxnezqFpJomTz1iKai5X14xbcQxzoXs1gEnTqeyF1cUzsn9cuLmMvDAWq",
  "key17": "TRLEe8aquz8jroH62nYPRfvjtJGeYuKACYaVv1iM6vYtXGokrCcu2f1huSrm2pEnAb3fZM44cby4UzM8Dses2kM",
  "key18": "25XMZS8oYN5zJuD1ThknvZrtDJrCgzfWMx68bsuBTTwryiRNr3YG2DAgzomP41db45Eb2728HovyRfjadUNXwc9A",
  "key19": "3FqQ16wsF7WfNYrWpzoFax2C8NrYTdvcyV55PgZKZe9j8aXQv2nsNGU6aFb4PV7vpdhX3GLH2rio45TCPXkkCCJG",
  "key20": "hggAGuXKgfWEiyKvN6oSThWygFPTMzW53RwixkU65i2TwYzJoFXFSQGrwrsupvaTqcRehAo466qrAE4Aj2nenoK",
  "key21": "2aqTKWthXebJmzsfahTJkBMqk9HscVQisB37QNzpFd9Fa2Q7rNfFXK7wohh6wLc2gJmMzrK1taEFheGZf3cFNdaA",
  "key22": "dX9LNrcCvtvLHcmu9TNR2Nks28DrdE6cLUTdv57Qu5EqXLazXqvvSd2MpUk317DNnzt4pLbaQwgYaVHd3KN9yCW",
  "key23": "2QvbEjEYw45bPTZbbtgWSC3CSz8mu9VztC6UtPNQezpcJV6XCzw9xwogWwbnJkhCMABSK1k1eV4hNd2ncccDNAYM",
  "key24": "3cEHhys9GAoTHnZfwLKyEj535NUs3Cit5h1QWcoVjf33VjNMenPcHbX2Mn583CZcwrov9oy5JVHB7rfDxj9m6ME1",
  "key25": "rufCmQGgHzT5sx3tWyEE8HDebBdJypkxjhPspQvCPVwHMoWrWrH4qgJNyu5FD4D6M2YtnJBTHyAW3npL7DKuSB8",
  "key26": "3X96VTDmi9BWHgaWe4SHhqL7QFvEHNJaWvZSvCHg5f4pZ63JexHXsqKXyqD3QCt7AWqbQdhNLyYrYoYCmGgS9HAY",
  "key27": "m3XdZ75u1WVTNtBAJiZRGoJSka9Jw8Nw6d2yCDTEQ4ckb3tSyi6hVQihAHkdqLcmD3mKzBxTgFR9GpxrVKv8wHm",
  "key28": "Wv1DiEpog7KADfba3hzTQ9J4R1Vx6MX6gy2uU8y1JUtT8EdugPXjxQdDb4Aw5zrfAZykVvJ16SYProosVfeWcgV",
  "key29": "3mRpnK3tfd2rD1eULyATvVcJyrMp9djNKYL2ALwXH2tDjchGY99eGzp7s7SyQyjVkZ6DidhYAsFKxcFVLbiPEmoc",
  "key30": "4jPofgUnxQWJRCVct3L9fV9mwgQFGrYxqLmKaaA6P8uPa5hiS4c48x9ZrPXTi4uHHzA9Wxv1XAhB7oggVjktT3JY",
  "key31": "2LyibBq8VArZfMSRcRTqzQNyDQckLmEVPDdCNaCykLAdxPMJwgF1EseQeX428e4PiaGTnHAmBfpuUAskKXVKjKr7",
  "key32": "Hb35ZM4iGTeZuMkLivSpgrSq9U7Sh2hx9T27HKjSRbWwXDYZig7zbfmkwKCdvgjxGMKd8RL1LqdyrR8Sh58YiUd",
  "key33": "2PQwUPTj7AUk1UtbkMTsfusLfq6K2w4ABzBGiaCwnG8D7x7w7d16KLwwZmcudXAWPfXmMPLAGHRj1rCtkeLc3t9v",
  "key34": "DnSLfHCjWXbFGAhhL4riS8bZEKFKpJfHJhX7mff9CzygcYYSTYCwq5MZcsYGi82d14y9BHZV9UioGkja9W3B7wJ",
  "key35": "5tcforh5HmUYfFz7SjcihEoN4kMXJpvRcF7ygjExscJzDiNbPnaKiccYFGgi8LsGcTQWS5tPaAo7bzqBXDHy65rH",
  "key36": "3DPXxctioV4AL9NWdoWbAZpJBh1y23X5xpSqhhZkYKjU49bBhwedkmPP1oaPzBeefw5HWj7iUDnx1DRpumDBHhnX",
  "key37": "5CzQN1mHyJXRLke5fXK1i8E78hHDZ54qnPvLjH9apXcxqZbDbtpHuA5bbggEMeaXmwg6sqkEcVkWcp3JrCJU2KtB",
  "key38": "zkDa5qXcGNyDtYxQXHep2SJPwRsSae2JacMdyxLXsiwxjLJjSnGCScVtSE9QN4G2K6efqFb6S2j4uYwqzdHJsz4",
  "key39": "4GEUZtJF15Wh8VvRQuTkUEa2j9mWcsrbYuK3xjMb9fCb6LRg5zY5df5gBsvTZkhYp8KEu3aig3L5Ri4y5nS5x5kG",
  "key40": "5sJKTz4wGP2dpmNRTSD7DQZ12FanQo67LhP9GEbufRtTMDh9zvdsJNuh4gv7deRHpxE6hUspACzcjewZy614YKGP",
  "key41": "3b3mzSePfDwpJSpddVLZNN9onx8xoF2vqaX82cmHknSpVpWwvbNTa8ApVmvZr5iMZfYeVDByNpV65AbDkR5G9Cex",
  "key42": "6ucMUm9V8kwzME6eP8oodQN8kmTAJy6niptZD7Desraxk1mhXMqBKWa9d2QiFz5BD4H77q8irtcdmm5sC2sv9J3",
  "key43": "EGZnknagv3U5ZEhpHo7B2NQgjZTzV76T2Sto9cspiTTq53M7johZzEKAqScTs87hpH1FgaCvdR8MBdyrb3Ush4L",
  "key44": "4GkiVRbZnbkU3JD1uMEXRkRQcT8PGUzWXYS6sNzuaykAtjQa86nBTf7z2Jna1yVCNzCPMT9zLmJEGBGxaPevpMDK",
  "key45": "XF6wTaeppVVeYkReEJ7SPWFfAhDc1vVR8Lnn1GQaCqNyKEcCAbr2oiSdjFsm8rrQe6d2hrWeShg6uhamh3MVqqD"
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
