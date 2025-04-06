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
    "5mte1vAxCqiegQaMpLsgpVfA88PPNgop3vJEw7BQQLTLLJ1h9bSskBbJ7rX15oAcAqzgKmPMj8ZjtnXiBxJvvEDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KCWVqvTiEokERswYdoT5BpyJdeNSBQtBKaN5JwFbxsYj2s8cdR4jG2BUAUAoX4mBP5gncusF7HZSTWbswEwcNAn",
  "key1": "3KyZYNb32SRPprsKxSQ4FZwkcsDRbAFAn6DBM6wf9j6RHXzbJcEuSpXtjTWtigyWpYkFtzGxaL6PviiP9hEuMoDt",
  "key2": "4nJu15v9uEThGNv9k9JrMPzv95ae83JugTmyqAhpPHEwbHvajK92EJdnpEakJozLEbg57whcQySWFdKoGmpds4iY",
  "key3": "3t4vcf37fUwY7iPXHoYzGaChytNiUrK9B9XGAFdJ1NXJM4Rz6VijmpAVG8GR18fRDG2iRZUE7ZAPNjeh27djer9g",
  "key4": "3jVL6pV7Lpi9om28hXViXN9zzgKiAF7wwcgo7egkWKMBS4rZ9du5o2uHjvhN5e2UDtDxT54GVAtwdFmRbEXbwzae",
  "key5": "4r9tMf6hH7TTCLGvWU9doqekevFDr58cSTZprWPiCACGBZEmmkJDbrNyr9UqTsN3z2zA89MWrv3KWY6EDUy39FQG",
  "key6": "5YmPiunPvfvHmpGERkTk6XaGboo1DjwK7LtEwVep57JemmHY2GorVSDkKUc2Jt9erVngPnjPpgnoJNRP1gzcWPAz",
  "key7": "5gW2rxMLJzqvq1SJhdYb8xHHTkfs64CCmEFcrtBXuGYS5JMxNs4weVqSkAXtrqRrwaKwPWyT7tW2VoDvTtAz7Bj8",
  "key8": "2VGoP1MtSxSGUoqzHVZ7YhbcV1jCVpCPFbHuZpPmfDBb5QWwUVHMmw5A6XfzW4PWEwhXxpXzTdcNMbehGtJnkmwL",
  "key9": "42YqwUcaPcDjQGiDWUZ345QgLfqf7F3hW8xsFLnAxBHYn4Xg8UQwyS95qhwe3DELBj5dDmDENUyxmYdfTvNdGdxT",
  "key10": "5hhvYBXP5N77MA3d96iYUwhSL175zeR7EsSqJBvLrYEjXvYrC9YwP3ng75WnCa1QRE9C6eSqWsb2us97yyoLmL6n",
  "key11": "4DFjF9rMK3Hr9zqz2FJX267GWsGtiBrP2HAZ6AgZbEP9AmJCKtwvoQD1boEPd9uKJvD4jVf7y6g9dcsG7CDft5Ko",
  "key12": "53dM8L5wxPZXKmJcxAS8sSR6FkwS2zFRbAXmfNNZURCiqSiWaNDFy7sAfNPC4cdDVYzoQbnt9GMenbZs23RsqbzK",
  "key13": "8Vycx57D1T9DDyQTJMDTSDaZR5xqvLuBxEXqs7Jr6aLLwJZ3yyFyKYLwsnMMES5eCRkS13zAg3yGVfLQK9TVWhb",
  "key14": "5k9qKxFS21ZE4gE2Y5qPGreyQvZhhCEieWmeTjjMQ6ZnSvNaaGZJ9vxmMTkLAd6C5Dpgqgfz3srsfiP8JupRLYSz",
  "key15": "5JNvMKNpszJfhYDGiWjfqTh1sPnpL58pgPF8U51nxpBqoWekUMMho9bVWi9pv7rbErMmuKzcuqGtytFSVmKw7Qyt",
  "key16": "2CYWBQhzwUXjbrjWW2eWdyj6WfM2zqXzU8MN465v5UpPYnZPnAzxTixp64d4PNZ3mWzwDvQiw6hwAHnVgtDjVxGx",
  "key17": "25ge6hpqpcA9SVTqSKfW6AF4YiSKNQCdxyBErt5uUd2aEwcFonxbxJaJo8barzzvEaKCyFTKcRfVcpyq6QhAAZPU",
  "key18": "514vh4jorvjpYef4uVFcCcN8c1HziqXphuDJYg7bWStgijhJzi7dhxMk2LKfarCCcP4mPDdo1dfYHCWKVQ8uVQ6u",
  "key19": "34V9uacaiGEZY3ArQCcB4P14iWS9wsfa8J2Wk3ioww6V9Utnw6mSNWttQ9U9pGmEXyGqGY7v3FVWMk3ej5G8Kd1",
  "key20": "4RK2kyump1HWBZTstiqFHUFeq1QBKWHsaxTRBzmSzfnyBk6NSv6fB6XD3QLy4UNg8nvpQqyhf5mn1YRMccnjnZMU",
  "key21": "v7CaXhkARrM2os5pUrjQBC4ANach9XMvM55L98AzmPoYuYdNpYwDuujuWxj4G5DPD4EiDB8gHfbuDMFvnSe14WA",
  "key22": "c69HwwY8rg3hsMRZtAip6ThVKzUR88uWHT6EXhT5MhEf7NLwFX3srw6Qw2eS4rNj7xpkCNaAxHF2gSjXk1P5BZ1",
  "key23": "3Dck7M2md5hahLtxFbRjH68T1YCcD9k7gsVnGFbPdeJaKNryxt4eEAFj6Q6RRpgcbzczoR6cjkCT4Tvcn6HkWibQ",
  "key24": "Kvsw5vgvpZzyawCSsWwEHF8J4dx8EocJr5cNF9RXf5XmmNjtjjfbdVvAy89J7mgwJ2H1HjtigL1xqJtoXFrqB1G",
  "key25": "2mbx7d4cVpHmM1j7LHSYrML9FRU4nLxYyogdd1aZAW8wCR9i5BYCtSMcKZ4CvdsYEZymNh3knbSR7K9BMyummpLM",
  "key26": "3MeNX4YvYVBgXcg4FrrESsPemaHZhGP6tm524NTgcwZZKDmcnVM1ABw6NJd1k4ydqLZCGj2KPaNQJyz98ibtC5nx",
  "key27": "5FaroLA74cfmRs2vWvXbYzCHpkcbWF87KLRkoCBAh5LCZFpKZd19wwxEKnx5WNUk1H941Jvy8Rb24s9wVbxc6qkb",
  "key28": "5Bg8iscbv4o3XEwPheEjj7s97YD7jLoqbFK5QnsRiKikz4fRAdXZrxyvYuNt7tHLyuxuYmsefYQiUJE2pU9RvZJa",
  "key29": "5aVYtgqczZggQbk9hr9prqd9VeEfRnwrTXhqjGdfbXdWvc4wCaWSajd6uYkPf6HpPLoQtWjbMkUWFkEnYD92KYpp",
  "key30": "57rVdg5S3qXAtR98HjJz3pYRjrBmWQ3rdJcQRg8XkBjn1nUcvjZ65Rtj7VcMbn9tADZcYnCPh7UKS8fkCpBcTR7q",
  "key31": "4GxDQGJNEG2uHd1izeapPne1FiotYJfVSw7mbdqqy5AM2v2gAHnj4MYLq5d5YSomnba2CZXuKF9ius3yawbHNLqB",
  "key32": "2owUGPsKZKg34KtYbtbcncgEfmkwrYXFACoVEAvq5f7PjdX6EiuMnQx964RAQNqowVPTziJU2X9CCA1siTzAB1aw",
  "key33": "DKBorwrkhMUBFYXjhSei1V6KtCZqMYkpwwWfTueqcu148k79XvKv1Pzx4URh2mXibMz95rRw6XYsjvhAzZZJqPS",
  "key34": "2K7qfR5BzPajgXi75Whx1GpnToiMEHWAcy1g2zASp2o3YAp7yCteqh5XbhZ6edQaEtmpnRzXH8W15q8BoiDrnK3s",
  "key35": "4N8gqE41etx8LZjCX9zFNarv9cNqV8MfJ6cQxGvEz8Yymvvbx9npWH5a3MZh41RkvMQeGm7XvmuVV1CfbQoxrSZT",
  "key36": "1racHNC4veeJZPP1At6wxsp5Bc7Jm9uPg9kA9VhsFyFDLo3Qt2249etYLpS5VX1ACMCJi9czPbKKLi7pYHB91vV",
  "key37": "5XvYxnSvU8moqzSYKmuG3JHtsnkbSgwECSVur8PJyZKpdrczeaUhevakQJfuEqRfUBq6HGWMxLHMN6e7NeDEUjVK",
  "key38": "fTWJUhQGkYTks6RC5HQiuPEhXy8uYbQ4jQmXTnvcMhjk1qWgUJYrTVEDtZzeyeutN1dcTQsjoYz3v1hdqWbTZRH",
  "key39": "41GUu5kL5Ba93vDKsRYNxUr1VvAr4xZf4Mj7cRNLCPfFVeLnpgjF49iv3PuiDJzzr8qeACDYEp8qVFQgyd5oazbJ",
  "key40": "4uCbawcTv7Yjsro14AtZBwXKKvE2ZvFxkynJtFL95RaxGxM887PhBTmqCb79obmYetok18nu79Ugc3nE5MbhN73W",
  "key41": "LvbwB44jrAZ7SvWwhB391XTSK5qDywEhrqfR1zdDHdwfKZdaWMdKaJj9nGrXMhSmwwcP9Xbjgdz5RCx9BTSmQzj",
  "key42": "5naNi73sKz7oxTSkkBF7q4nHqbeJZE1W8hWcfhtW2AyfWXE8wjEp4X6FiRtkqcWMpBRB3aW88p1Ap9NmKLbV3Gko",
  "key43": "GGkWM3ucfUX2b2NtWk9J9nJgRpjtVjaBkk2xj1TQfJZwWD7gU5XfEsmFLZp31jbjskQQ6VK9xzQshwG7Bd1MXHd",
  "key44": "eHTPMsuPoXTnMpKvCjJdgUKTkwkuH4hfbMtUYzcbUcTEdAXuH7T3FZUGgzZD5XsTEKfXYAXNYRSuWeXwTU7m4xB",
  "key45": "4CgqnF9pwR1oEmUprs5p1MDLEj8HCAw9Sdjeh2M5WFmPkoFfssRCCTK7h7gkQHYcUfdFZaZyfrzgnwxqAm8kV4QS",
  "key46": "4Rk4oSaeXrP6s2p3FDgSBmR7n9kGRJqrQRjyNsJrExd8HCKN79EXX4DxMQ43XiayehL7gkpJxokXUoQJgHXydfvY",
  "key47": "37RReCHHnmjyacdGTWY6tM1BtszwGPRY76Y6bvRAqguaYaSfvjuoTZyb4zBtaj2K3YVG64SYDQD8dc4EQkTUj6fL",
  "key48": "37XAM4YCJebpemtMHRYPZHFbuMjAfX47tEQZVRSoSjKzrLBkcnbvoeY4fTipwfVWtp2dYKrio6jEnADcp9xxjbRi",
  "key49": "5hh3P2VGzgcPmoTkEb6LD1EjtdNvbMVGtN2WvBhZmtKGzEq55FomN1x75MT9u9WiBpt8LYLKn9EqLMk1b7jEucMm"
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
