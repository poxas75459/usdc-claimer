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
    "56zei2zo5s8Qw72dx2ic8ajZm7sm7ihgCotkmrBxw5tNmtMMM4quhGdFyzGSaRDUex3PDiCBAXnMs9CGAnBJWhoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jKmtzaaiyQQKtLyqCZGSB2ZVM65iRN5XT7mBwDP2DVqDNc6tZer6riNR26KxL9sohPXdci7ysN6XTrp2Mdmmmq2",
  "key1": "3JdAcJYnGN1kamUiwL1b4E1GAbMcerpH3Joi1QdqjVZ8jpN4URntXeUx1NgtApkabXhfKAHvEaSRMUeJCrHX5zF6",
  "key2": "NK2RyH8E6gHyMHbLbJkj7WRE762xGVfSHNqWJxZwb6TNo5PwpoTGxAL9cq8s7wS7yrt7eTfeJojhUxqokdEaP8E",
  "key3": "3nfYm9cwb1XAuVRADrPiUwFfdgj1E8t8dcXfoVRU6hzMTS9nYnSUeULsUeAzmSQMF7kBSKMbvczqMHwjnZRtQ3sn",
  "key4": "2mkubsJZWcqGfhwiYHqjUi91qqb2gXuXzpaeHaViZdQDrCjTxXdTDdTBrgUo65Mz4AN5eZjZCujvybtt9PaEEpe6",
  "key5": "2r4KLDghmBJjkr5JC3AwN6CsiSbAvm8irtuHreWYWAm86fmpP7jrWfiEG48D5hoSDWC6pB9YwqtvRC5LaNaD4ocu",
  "key6": "3etR8DyQdN1a8skT5SSKxHRWbapeE8NVheMsxzZWYRdgheXSzoVWTPacDDoSWYYXz7jjfBZ1cViB26ATyanHSKaB",
  "key7": "5vrwoYaqG4zPPRyagwuVP2aqD72mhevgWPq8r1kP6yfnGG2KyJw4xBhNLa5pepVFK19esBwLpbsmWQ1dcSPrNAbE",
  "key8": "2Ui5HcpeHk1pa98BS8aRk232EdYLunZMLkjyjgWqKoZcXhEeK2qtfmsFLMLTrtzmMpfUFd8xUhoXwhLnC1esehaJ",
  "key9": "3Txa8JbT2L4VQTYYbkcx4ckJjFRo9yh1JKSrzj5tYBBErmt3c5zPDyx9kug7U8W7BQBYBo1d9cWyT3HYXwhLL6RA",
  "key10": "4y7ZtUrMLZQ5WTkwWFuEnZxMRQwM356FEzj8oYq1zkFdMcHq1kBENYVE8mZxsiDLDfHzmhzxgV8f1wKDYZRUdeS8",
  "key11": "5BCi6CHW3mZ8YWtNFVoR7nGM45np61VyY1RREQFU7E1NzFU7mVzepKQsJptdAhDGressBzqBGAmJWcwEvrSV5tr7",
  "key12": "46nGXeg7eV1Y6KQfJbMjFUtixqmptb99iSMCy8XG5Ah7bo9v9mF9sZJKLq9FToHg1w6bTVxFnnqWDB2i42NpJhVj",
  "key13": "5VeD5KhC9UxBCUbYwjdMkDYvCFy9zQY6ba6SuDThCuCHPbSA9BQPn4CfernrbgWBjLkCryNgKvCMuCPbBBYY9d2m",
  "key14": "4Voevmtk1DWp6FqdB5CwNRo4idK9o4M7RXLrH53z9qAgvpWSdkGCHQUHRZfiJjhmY99rY2dzMNEwTurLSkj8ZAnN",
  "key15": "3ZorEuSg8VcbyqqKxdXQngNsjKdG82ViAQGXzndk4x5rQUQgjttD8ALYzv2X5Aigm2im9k7FTzpcHVtr6ee6QXqV",
  "key16": "46g8C564JEeQG4pbgXVzTGvUN8KAGbArDXZEzhnxVqGFSr9dD5BsUdRU7XshrsMPTN2E3Mrde3L6cNS5ztsizCw4",
  "key17": "2A63ZJ2grPEqsS1Z1fVRWrytbYB3H56huHQcSPf4daXKtsUx6uUpsMu6XCmUzawbGeZhdoY9Kna58j3jR37QWghq",
  "key18": "2kwGzUUVqD1W3faXLubL7SRzgEm75E2YBq2AnJoi9QzzN2z4mE6CgrRuuqXiTvbwfxtVXFXjUasbRStEVB3zspVK",
  "key19": "2VVyWXD9VK3fpWEQ7egRTSrNhWX47weWbW8iHCdba5nDgTpUcq7esZNfqz7gQXip11DvZvSJ5A7tWRSbmJDeABqa",
  "key20": "2H7qwFZMPxs5FqK8fatorW7zHcZ67YxVShW8rYnqtr1c3ffT3jyRbdcPnYeCPFck1PawqgBDGVz8rdk1mskajR9d",
  "key21": "3cndXvjcQG1Lk1iHhhFax6bwg5bWPx5btNSP5Vv2LnwDbakxB6h6q5x7xEq37vXtA4VaPtjvWR1sdB7QpbFoELCh",
  "key22": "2YSwHk7XphzsXKrjoacJTFWVotTb5enCmD4vWJdYRZqBfTVnpG5GsuHq4C7YWeEpEeZsaE9RboqWd2fPxwRDeEjg",
  "key23": "H3fbHBjin2wkUT4u3Qbf2FF6CzKbbWsjmvP242TLj7TJzBX5SkLU1Wa7f772jm2ZwQVV4m52JVskuJDX4n5dN3f",
  "key24": "4E7Z3Rh3oXMojKY28N4muTfBzPjMKFVx1NZsjA9cPV7Lj4To8Kxgpk65t1gPSAFnycNpw4hY4NsQwLjsiHo6Amky",
  "key25": "5aM6xRnk2fFZpkdCfH3f3NmC3gwK5RkePNT3Zu8RqVAFKJhrUS9UscJpXqpBs67xE8TE6ziJTgZdVXiwdihsiofD",
  "key26": "4PgZDEVkaw7ia5uo2T6BzXCCbpHiYzVNL8YvTbf518JvJw9FYLvGyvrTREVmRLVip1k3DEBHtQ9uB22itPxhP26b",
  "key27": "4YTGtB8ydycd7uttFYRXrWWUcjPd6DthaGpa9ew3cVJ3i1GjRdz3scU7nHwQ8tgF9yamRJMdpiaX5FLtQsx5xkZb",
  "key28": "2ZKb7y2sQqVHu4LtpyReTCEGrwiai3MA3FtA1MQqC7oLFAi7SAfFaGXUwurW7hx5rFEeVqEb9xEbhgjekmkeJAxs",
  "key29": "4FqgEszWUG8o4j4mFnkBGRzpiWYPUPzknDv4oai79Ducpau2hEeDQzL2AYhDeb9QQH4HGCfQY1N4kRxvHG8zEAY3",
  "key30": "WL2qRJr2qg9rWDb3Jgn7NBypGLN13sUNqG6pSWy9qndFGuYEvmETwwtnrYGzGPUQkboekthtDAFW4WgzqcV7Lqv",
  "key31": "4xDTK88Dj3X7HAEenZGZLSEwS77BVZbKk27eRucFvDHyGkPfv9nj6WRn7szwiqaAanA7HsVZsJyuBHUNqKemvh5V",
  "key32": "2vtRC4bcpraAhEijJyvDJg3RoRWkH7r53zDBww9eQmJzd6psd97mnAaoyBSgtkqy47GXk4VTekP2zdk2saM8Mssw",
  "key33": "55udNGLx4Nkr9Eud9Qso3KMG4AhdFsR6vGrkuSHf52YCnhB6Zqcr1ifgHFDxwHZRDzfUPnT6kkGnzG31AA17REgy",
  "key34": "33gM37EvSK6BA3YrMQaWo7kM7sXGrt8JgyZ6quHstbW6G3w9HNySpXPhD9a1MurvrgDE4wXGfQLDkpxSndC1aE4c",
  "key35": "3tpc9KV5XpgiPoMMtXtF3g9u4ZZKhNvAK6RbeVj3rQcm4XitgpbXPKrcht7yQA3apqwZBna3KdKNcY8roAZLxwyY",
  "key36": "4ADiQh2F83uHi4CRphKb7VHd6R8wMRDmHs4JUSGDTmKhuqacJL6A4TpDF1WUpkRBwEWA2tBs2uW6GuamTiqMRkT2",
  "key37": "3Bp7QV1HvdcMQAspRRsTtk1Ld2xa2Gutru6MQoMftQYKbYYfNYRNFR9L26V5qpBx7X3zjKfpumSW8PK7pYYmuXwg",
  "key38": "wHYuFWjnCZ5VDktpSjBRwMA68EWCk7Qn5MJeWNBv8nEk54F2rrhA8kbTckf8HHptsw1Vg1jaT1Ac1dH51cfdqCG",
  "key39": "66ozxnvGLrqnq4uGuiYM49TyhWcLRC4PqNum6qZGisbA1VJoQdoLbNpP9bSBVJPjGJWdkSZdK9GJcMGyMTnzysPT",
  "key40": "8dt2xpMEjFGrb2d7JPyXt8zan1CpMz6ghxZMpK1K5wQMwaTYPWuEUtx8RkFvKoE3tkR4bSx1UbuWSNcfHSoBzf8",
  "key41": "2MyavxNYFvZUtJYZqxAtJ4D4XQ3TdtW9VRaYWogYMzcsFJtbyDm3o1wGweKUWpqedozoEFqEacy5DfdJ1VFguQqx",
  "key42": "4Lba5bR9SRUjG3i3RWpAZ3Ks6b3HeYL5XqXCZyAeaXCnmf1GY37m1XhCpGF8REne4aPDE5tdUtP9jvhAFyHc5JzN",
  "key43": "3j6jgWBtaZB4sj36L1QSqTCgtFd8fkUw7cULxKYHPKmR4hBcmBA16RAXWufLthnRBDttQoju6TbSdqkTDGaBoJXE",
  "key44": "2j1aAf5qBrdBtHTR96zbL5MwpU9VvS7zcgdMdkDwRD1oQENL7R2dCULDchFnUbWry2KCHEfTFjhUtEw9NHZj55Wz",
  "key45": "4NKw8JaCAusFaUM9QLLJ1H1qNMXgkJyDMKANqqvAYtKvyPWVxKWo3UkCxCwyLKsLz6bL3UoDCXyZxzDJ7yACeRet",
  "key46": "3PcygrDbLUkjiphC2mNp2K4cNAA186RYHwKmuBoksR4KccbijoGLrRpdBvP7HRDnR1RnYvePLpisW8MC3i9DyfPJ",
  "key47": "ZvYAbu6kBPfRztN19EtV98vcu3pL1hWTAEjTUntq9LXmncudQnSkMo21t4zbBYrB5NDA6F6WLYD8du6NNrPQZCw",
  "key48": "4xtV9erfo7wPUq5vpEFRy2b5m92BjgCrSBVifGm1L8fHVH1CCH4cBxKgfEKzwyUAs8qyRgGjWUmqSjiJg2qhHGP"
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
