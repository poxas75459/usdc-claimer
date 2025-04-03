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
    "4PQvM5ujHjjx8RjFgjHSVXn4AyqJifEM8WZCMHD5PhVYRmZayRA9BRBXhvZVYPpRx5atv7F3R8BjUGzBzjPZDRhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v6DRLWpCuh1rqcETVCYcsQvvyfxPQF2hYAWorq4C5Swt7GtXFdoz6Hbc5BYqNaVzj9tkJXTRrKedge95mMm44ft",
  "key1": "AvevLioWAwQpBp6WhxHS3Bm9GjGbqPcX8vrUyUZAE4qjYU75R7KS853sWCmvXLSFnjxDky94rMwVc5bXFDuFW1L",
  "key2": "4S3dRrMv5TMgAKvjC1LUseVviYtqLnTiVjERdCeUwkvRSWDkoczjWtp26UrwxKEH36HepeZ1eBk8BLycrpyMR7kt",
  "key3": "BHFWBYpgPspstDQE82Q33j1Q36RSeoVj6FqC7U7LocMt9RXyt51WW6kZiHME37YNvb8JQhkq6RGNc7eQNUjgqBk",
  "key4": "5xj7qETntoKYna5uDzCapRP94qJ3x1df85aDRnwbdRKLhf7gvWUNur1S4aK96uRpiyh2KBYKSffLXeneersuwkVF",
  "key5": "2shAFZUvU6Z3fomxL1ScrL7bMwAk6P5z4zgSKM5dmfFazkfwd25BrWqqNqNhh3aNmbGzxdLgvL2LixfxJQTvtya1",
  "key6": "GVE8QZ5RpZUESzGrrEcJguKaKDv3ENeE7STt64LLiL4B5rSGeUHUX6FpviogcLhor9Gac41EscuP8bMYh4mP1jC",
  "key7": "5u353f7RiS96HdQviqVzzSkhAdpHGqiRavB1hEZ5antHWsUuF4Jh2Rxn2tr3zohVyMhfzf9ybqkMNAAGuHUtJMZU",
  "key8": "42jZYLpxcujt4bXVszYdidsar2obA8epiC2fQwXgihsiPfQe44ouY7dMhaL5bHDmGUiuU5uwHbSs5HXnCp8eQ5ZE",
  "key9": "soKLDEsrKMHUrt5fMm2S1FXGvkv8th7tJdDWxbbQ1u7ydBenJK3ECH3T2nZUubkgZEs3ZHTDXPLV7545zruFTeU",
  "key10": "2F6rkP2BfX9gv35gri93bNRP5VkZGVeki6GGNjeNmZPmikWfamARDFWiLknmPA8j5GPr2hLvhM91wKavYnJU92qy",
  "key11": "5kmfzV8LwjmwVr86djqgBARANG64rY8WpLFZ8e3T5eFM5eLLzjE61fMHMJsk9zwkgYaMeErYNfkrquhVmqsU7FSK",
  "key12": "2dkfeBLfAzifnDFLiGHmmfJh3VJZaBYVX6HX6WaFTNGvFfNeDqLt92hWs7CZiDMM38UPZxCtNpteuNfEiyRRNLaM",
  "key13": "26ZNGvsWkn8d9E1zyMvrW1h3KCQWrgZdSPHeocLJ9r7KXPGqfo7SbKD1fokTLTHBjBHXyruztLjBuE99bkkWtw7Y",
  "key14": "2Uwdrq6PkADUL1Cj7AjdgmpYfVjzQptuS6vHgKJT6UNhPEqVLgHT4iK4BncdVaRjAySEk8UyagB7j5R7wcWusrma",
  "key15": "5K6os1eRbbap26F4ZVwwNizFRWgAbqXovDUQqbiNmhnKjA5DBPY4rqFgcLM2ipPFp24FS3K9YzoFCf18geeA7nkJ",
  "key16": "yupWVaqZrU6gAohjSShzPu1UG2rbwGnNfnHTXyscGNRPrJFmNN5FwmcbFefsUv2SGcwqqPgdEPVAhTNjp1gsLS6",
  "key17": "2BQHFcJw9trJHqbowWBZdV8oHz7mUjEjRCTgXT6ptXCYvYYB7gDESKmPaBeBfXQESC1Xpz6uuz89FUW3LaUm83k8",
  "key18": "N3AgNNxjwQdRxQDyAtgJtrS7X8knKJg4gbaCuTLeixT8LjMZEQqFrgV8o5bjoMaD1qbLgtj559faGTkhNEAR3D1",
  "key19": "GHLw1izBbgJY1qrzh2uEtWZ9R6q53NP4FcaF2s3w67RLTgwD23aTQHeRHcvivuweAUKxMbH5srz4DMrjAzSNAJG",
  "key20": "2xFcGCqBiWhP8F3BeBUJa2yBYytYNd2atUJH7f8veHBE5eFcdHvvhtdXqXUBoU1ohjjrkAq3k3wu3HSLvKYLtLBh",
  "key21": "5681QBDbN34jyhqYpgu3wSo5pvVyToVaAMGdXM8NELMGsTjXAABSKeiGqNbdoZRrXRZTKjLdbVnfjjVY3db2LjfH",
  "key22": "LvY4aqC5k2wxUgNBAfHpdWjZuFHKoQgx1zULzv7VoL3RxkRd54WpKW9gZTQrrqvhqUnEjaU3ULJW6SFjYF6h5K6",
  "key23": "2v4KgDJKyJvGQtM5yFx8NHqMPrDVDDJPA2dX4UAMueZ1EAqgHKbWd6pR75JFiJKy3w1CKDn9ZFwxQN4iyNmX4do7",
  "key24": "4mYiDhNSMGq1HsjfCmU6V1qGbhkimr4j9nZ98CbBjpH6jJEaSS7XLeHo3sY21kT5R2sF2jo8nfxjC3gdjwAgnjb",
  "key25": "3jKMB6wVRVgNbNm8DAzGb3VZsx3LCV6gFQogrXo1tEQ75WD5vmRya2EceWsavigRkXqn4fJe8vMi1Ds4UgkkdVaN",
  "key26": "zF8BdTtRkjSXp8Tvu51SC6kKhRYtgirL55A1yoo2SLNGN94vP9oQc7uvbU7Vfztst6iuXnZbnyatH2aq9d2Nn2A",
  "key27": "5UY7MipkzbgWM4wGLzxX3GBm1khT4pguW2WLzH3v6Z2QocpJFSmjrK1EE9o1K8cQy7THyy2wmWK9ADZvHyyd9LaF",
  "key28": "2bsUGRxbEvSJxdhCuKZV2XuKduQZaDgwLKP8nWsDsjhfZ92XFDEuBrDJ8aYnRKtkWgJrPfbbJqGQKoXnxPXZHYp",
  "key29": "3ZqLPDpQstf92VNVniZTA7Au3iD2khhThTTbXXUxu6qhSPZMSQ1piSAGBnWAjotTCUFpDWRCzkzCh5aoBThMgE8F",
  "key30": "5iJXDTMGXX5tGo9mGsg5oPeYkDJTtkWo3p8eL1GoDJLXRDDTTcyWcqwfdsWjvWw4gBpZjwrg88nneh7Fv6aDsmRi",
  "key31": "A9Pro3zCAcc8y13tp2V8ERZYzdYrHhZy7VE4jApEkXz7WVg6JXGK8F9VBu5byLF4MvcubrvqiQidd2oz5iyYkU6",
  "key32": "FSKexBZcF2YDhAJ668uaDx8THjwXtrcScfiqRRRgU29736r33FEq3pChocFMZKk95YMRoRPruHjr5FiRi2Dap8q",
  "key33": "2eiDPbwcvqbDL3NqyjBVA7KqopkgMSzCPRUap4UXVNWnU9DdekVfGzWqkdizRjE5sZsKUHQWqYnnCS7HQj6A8xk1",
  "key34": "25DjuphZp1svoUCzX2ge3QkveoobRPJZhdrxv8dELNLTsKBcB2p6eKbEc6yXeEfECrwdCPJstfhkU4mjx3o1BZbT",
  "key35": "4AJ7KPknABRrMN78BAH8PDzyHXAWqWzvyutoEawbPAmWanNgbaCXWRsLTXW8KWRxxsbCRHw1Z91hxw21pjcdCtSH",
  "key36": "PPy2E4wxsFrA5NohKSK24J3jEJsLWY2ax3otvKoGpzzo7VHGoRRYvSgA6Uge8uFb4SqpNyUTLkKRr6GHMTdrKPg",
  "key37": "2kYXuoVBHUSbkSoSXDduZEYFyPis6NgsP1Mzo7iKdmCctDPesDmLsnACbUXXGntRL7LsuRgSWzwm5m3wA2V4c6KM",
  "key38": "2fwj1kN9Y3WJr5KkymxoLm6F9guQYAvvqdytVM9rbAV4rH7uo8CEW3jibDV87D7mRCfiRUEpiaDtCDaSwmB4jumb",
  "key39": "2MU6xW5qgNcztKhTjMBwkEw99eiACssuxhp8nYyKX717zMA5yUgmm89e35eUyurNLYekLvojsVSabMBSyTxwaBCv",
  "key40": "tZUmHmumLZuG8tfveGKEiwjxsSMyeA4de1ahCB9L9xpQM2TpxkLrE5GDhdeL5pEJeoyrHoQRaa1w31dQo12LAfo",
  "key41": "2WbdFjowEisFLtnAhFxA4kBeVzmYCoaoQWDFVXiS2fEVj3c2MoPaH74VP6uWTukEr9Zsh2BjS2YmJ3PUHZgCrAXT",
  "key42": "4LBJbTWCjgzkiDbdqqAn4j8bPuXREreWCumZZiHELsWLxMgoR1wbmNCES58Jw37qveSZnx2gd1e9PGg4KwW7AVhX",
  "key43": "2TY7nYmCKdyj4RY7rLr7VhKtziniioega1x4oGWL3ZhejCMT1NHZ2yPFaK54Z3oirdEpuWEsCU9xmwRzTUxG2oxG",
  "key44": "3cYHg7H6BKjtqkx5KAKqzyMUDoinyoH9UKDRJ4znvZ6sT3itCk4Cooo4sxr9ZUAwi3bepy5QC9h6j4u5L5gyC55g",
  "key45": "3Qoq4tWKStHXjvPSRQsjpqwH9GNcu818BBKjhABHmX9RFNDrWW7Ss6NGw7xH1nkrBugavHo3SqtuTTSvMrxXxqVr"
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
