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
    "57nJVVzfiLLpDBReB8UbgwLFNdSKNZqcVq94YvaaieSgtGin6jkkknMpiGtTeDeMEwbB36wLrzL8QZVM9zr1fV75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mPp26LChxATHHvrXEpfAtCdUuuvgGNG5iHHvk3uUN1uNGBRpYzbz75S3RrMmiPJrCfM875AZNrkn1c4t1giCybF",
  "key1": "4BGedH5bzxRWQMeGFX74AHcbzESUYyPj7YkoybgdomtFRv57R5HUBjqrWYf2J3gugEy3LCVs2sNExwWNRL12bsVb",
  "key2": "vcqJ9116hmRcsVRjtiHWScyEdwMe5PF4CgnmDCE2eoD3tucJP3EfGb6suDGB5a3yMLmab8DHeQZwzDgqZotG5oP",
  "key3": "avvwBbcjcwdz94roWXXrNpHPmthR7qLk1tRoVji1fNVKCBgKZRKV9Rj73Pk5CDLEKSs6sf4A5ZybjFpRuQkytTv",
  "key4": "54ejo9jrAYzYm55SR4J3rKVEjnBgA2DyvdnaQ9vZe5Ktw2nRhURLGaq15im1MknxbXMzjSu6yQWEQ2bJ6bDZimT5",
  "key5": "x71kzfWbf7r4yXV1kE9VmjMyQiczanQ5bdHpWpTnJxpkgKbWKdu61mjiuKhHxxjDC6mxFFdzR6fWvizG21LHyn8",
  "key6": "3u3nMgMo1bMwdxM53JLj1aMYBYoxfG3xuUmXGYpRW2BLp58xuHS5pG5q8V6rbyMx97ESKw5qMbUbLDvXRDgtXWy8",
  "key7": "5uj8E9B71jekR1ugZt7FBfc3uHYGDNweXLPrXUk2QFJtVNcSeL39eJAGS6boYYtsBdDrpUwNUaQzHanbMjE4GJaZ",
  "key8": "5XyiuH9bmFb7fwCH4XRLuy28jYbQeXZxNbMqGuAeKEompge6L8HRedrWWkJuschdeDD83Kn4LM1BWLFUtGuKnkK7",
  "key9": "yw1yr5sA8JFa4CFK86QuJVVmF2iTWmLtmJYkN57qkEQJjjYKZvuRkHMhaD37hi2SACQYtjvfKM5FuBqY5Q6hRaH",
  "key10": "2ty9PcTsCiaoCRmZEj7kMDXuFAUfTxdPHQZcVk6meaDZc5zZbEUWvgxMY1ryD3XbqoxEqDLBFJtx9CEEX52mYwwi",
  "key11": "5D9UZrwTpzwWVzKBfFireaTCy7DRdswEwGS5dQDkdq4cTqSroPQZpMRsktLFvYFusMfobkVYdsRRjXp77PEDPv4W",
  "key12": "2rrwP6uhY4e7phNfAC3B9PWGyKwhqzS14eSkNDDZzjmswj9zUVuQPCDmZHxYZipQC4kJV8QMw79xFL8E4J2QGFD5",
  "key13": "2CGe5EmsJpnwcPjNdtcd3RSZg2R4qUhLPYCyY3x7cctvHZd7tth4dsivKqLtHa77u1d5qMdPnMUA8W4y61QBDVz6",
  "key14": "5yU2LXchEASU2UsZN2nrJL4wYfvxCvnen2MwqnGN4N4HT6QM7qQKpPzwNFcG9PRZUXi9Qw5pEXgVwMojeKcqBmsh",
  "key15": "4jyzNio3YRdYnCXbow9hMLZiKX8ao4pKvKBs9L4UDeoMAJJ6kLSDrTDm7kmiF8QqE4B2scuDwaNkcYXCHpJzMPdn",
  "key16": "3axRsrKXtiDESfVGBTEWLw8qpzK6QXiedaNF3ojsd5DwGpHmQ7e9jrMRfZeLSLuM8hnGwU5AMnTYkx5nzYBiKygP",
  "key17": "3vgrMFPbM43UGKLY5C7ZMWuJkXLB93F9CSetv4LjJKCWs9pnSjgJHjVpzThzPe8v17zErMSF4EWtagxqtmVuZQas",
  "key18": "25rwZixKtYnFqFFdCFm4w18wSfcAp2uayAQ7Lh3ohTnsB1DTVvAavPTuw2m6Pt8hBcSPYq17Pg4aprppzH2zM877",
  "key19": "Nxf6k6BWDqNHt8uBR7sR3fnn7yapNwDdXSP3TUDW7gqkt3dTRP1P3YXs6hHvvj1PaAPkY98XA9HqGAyGYmMrH7G",
  "key20": "4jDUXVb2CNom1qmn9h1zR6ysBgFv5P1nn4qRQEUo4M6Mfcm29M2NG4Dip1pyfhCG4J7Km3XouFg2y52R4GyDTPt9",
  "key21": "4TTXLAMc4N3CsbE9SV6t8ZqgEwq39GQW4gNVWjZJSvQX1gNPcGavLRKMkVUP5QprYLqSHQG49BNHZghUFsv5hjZb",
  "key22": "4wvzikHMNQMR8B6ZK8CvuB2dpHrv232gL7Hnj7gg32qxVhMXQwzkJpxiVJCJcoAtqjHT9ufcqwxXfqy9NRFu5hFF",
  "key23": "cmrxBvo63WWsWXi7bbzddMUiXWT7rNPwC3ZNjdzGbRE6rk4uNkscy54FKTbUZ5SmB41ZzVkHqbkMtWBetpTuqhh",
  "key24": "5o4TvYjn7kjc4DYV1RyEPkz6ssPiR6mecFBDVg9BzjhWskxQNm3vRQ11XYRwdBzvrfPAWyXpxhwVCTxS31bQ49LY",
  "key25": "2HsKBQao3nmuzebaFRJXyPgeira8dndjcHAf1GgPwE6F7Msmjm6RkZgm1A5GxHCzRJRSuMLh6WPmE6fxa9wNGn3Z",
  "key26": "iwFf1aRFwymTM1tFxgS9G2wAGUZFUAD1hd2mt8ejPwCYnHCZANMVgkbjxMjirk91cis5YCQxXZnLWxkP9dt6ZWL",
  "key27": "4gUMMKGZrEZozzPnCLucShQ8uvpMFpS4G9KABtjhq4jXGgfNQyoNoCcUKeoWohB1JCHRaLhT7B2ue64rYNvscmHg",
  "key28": "46dAFvA5NZzcfDtzGPB75UTTXEhGMebAH8SuUyHVujfguRvxjS5tzEZxmAoi5Udpk1Exii868rYYzZ75S3pEHaco",
  "key29": "1XdqExRwZDb6EzPP6zYgb8vhCZCGfPkzVqh7GEnV9YjhLGRE5u8eU58UuqSt5GsBYxr5Dfs4R9uG7ypxXwhnQct",
  "key30": "2E9dPWbSq8wwkLJtFhpBNg7wMdAf5Dq4tR7d9LK62xfPPX8gsEa5KfaJownorhhFKsEkR9LF5N74eKdH3uPFKsPK",
  "key31": "RAf1wbVhFUawaGhfzJnzJEAvfRmkD1xiQH4DeTMru69bS2zvhaW2bVvr4zNTySS2jmQgPgWnk3sG5cnc88fEY6Q",
  "key32": "3Gz2wX7D5pXKqHD8UUT4jYgrcyduXucci88uDucEw6HJEVUmXEkAGdLbTKXSZLUKf7Gh3kXcMgTVDuS4S3gUiLaY",
  "key33": "49N5nRjk7kZxF98MqCRpHc3onMqc8r6MXv6pYCiJvnXqoNTNvmKGhJ6XB6S6HMaXaZaG9qupjnarKDS5ofU5d8Rc",
  "key34": "3p6BQzT6GWBzot9piQZiB1kUGdJDsZS9PdhQhCvTgbSscxde47Ub5qMaF664p1sb3ySR7m9z1gEGTbMbXLLwFoUZ",
  "key35": "3tfYQ96sovHQWkMCoBuc3yRLwSUDYoZFkKzvdtQfwNJjRhTRf1rgAgLkmdHSnmgiDy5NYsUtvnWvYGfRysBfCTM8",
  "key36": "2ZHwCVSBnnwQd81FKYZzWFdBrcExteJRAwQMVS5gL7mMzGcLopMyoGNqpH9sKLkjAfRs9iHoSuL6gFpg3nNpmvZY",
  "key37": "ZTDGd4fbWChuEJUj9m7vAwmpFjH4j8TpnLzKovMboEL1oQrSUMCiPoNLB1xuyZdGdQF2VbsUGJUChaZQkv5cvah",
  "key38": "5kyGbkRGSaRywLt6KpJtDq7SRMUjLvXAbysnwgE5xaAEkwix1ZMgNZQmmGNirvuftqRXxAoP8w3TVXGLTY9Ant1",
  "key39": "4Deo9yFLrvuw1nMbyNdAksZafqUEr1TqnZvgsgRAVhbadsfdyidzTDAUm84wiudxhXQ3kj4Ls445yYgd9j2BbyCV",
  "key40": "RXq8n26WHocVgB5Jdn4jFnVFiqU3uVSdd6PqcdFJDbhrzHC16JwWB3nEcMr5ezjKbdjiHVJi1LspUdJ1rmiXSyb",
  "key41": "wdrxXFBJUAiUfcFFhgBbzNSefBV2h1ybHytm23BUL23zQpey9Tyd3G6MBPsVh1nSPmyeKFPELdmMfWo3G56bGJS",
  "key42": "Pj5aVUxa59bcdNdRmJHE8utGNWexkuAekCfv5ffGcz8moN3H39kHe42pZ7bDvXvFHEPgdFRNYGG4RTFbdWxDiE7",
  "key43": "3uwSWWJywptb5HL7QMDTuggZn8Zr4hFXm2gtriBPzr4v6BeNiXLw7ogzpVPGkDW4PVepU3qr9S7Aah5fv7yDrGbz",
  "key44": "KrXDfcSUhCDmm6sr8J3aWmkPyW8oHCN2Es5Q6xZrTnqjr9UpxG3US7AWNto1gmPey9Z6oLjiUXUTgXEDgKKh1Gg",
  "key45": "4nSQ99qc4FcB8dbux43gtLJ4GUNeNc6M5bYzK9fyVmLcTDDd9YRb98GpZC1xeS1WReLuap2KUGZrJ24KXrHNMB69",
  "key46": "5hgrr9bz2t7vnwvRRtxrVoh4ssx7wvK6CBd4RBUJ2vrckd4Gdcwf7RDskdzCcReGmzKAV7vkJgrppSL4P6LktjAv"
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
