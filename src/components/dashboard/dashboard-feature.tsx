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
    "5nw85ZXHET93UbEdbkZMLp6tXEcSiaL5januxsCRZDC8eTcMq25NpMUhtJTo2zkLKgxUvxbffe7t8QDhP9MrGL2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53CUBDNm55rQUiWqBppkR6VAmoHWpnmMqU5zgjRmr6qVbYVdN2K7tyMSFDWbMnqn6T3bHM1hUdpWs4kx2tQkmqRq",
  "key1": "3sfF6A1wjN6hvsanukUfM3cGGt1cbQaHLQxEfU6T4baYCf5A7AxASfRKMvJ22y1Cf89LDYRbEHj4sy68xTUfeeCY",
  "key2": "36z4PU2z65DPaGHocBk4hPpQQWgtPEHXHS8hGd7iRQAF4HzcD1UKQbVjQKu2PSYDffCAWM9mVZJFYjjS53eRabVM",
  "key3": "5EKjKymmZ2djBFQutHv5ZQdATirEFd3NmVr77gmGCL7tEhQcftdQwhhYJzfvefsWEPFfgbwSzoQgXad8DaRMeBiv",
  "key4": "2h28TcKuWCWN7HcHJmx1fzoSGVjWUpA773xPom1ERw9st3RL3xy5DUre4CdZ2uKUn4Bicu6qxtBfKWPhXq66HX9W",
  "key5": "3UNP8fmpMPBF4LsAHQwTjaWUJvS1oG2kMHy79fk4tbzcwbqA6LLQ3kJyqiC6NJmygjJBqCAw8N3MBjq4qSKpuRaL",
  "key6": "48dz6b9LDUk6pbdRZ4736xrpAiTRydffeNygFMU5d2U4cVbrAYfzwSzCXbDtb4eXd6s3FdBtnz62b1xSXY2v1HDF",
  "key7": "2Xf1V7WE95zx6wwkw835yPWVH7iUjcLncpPnAt9aKAU9qRg4jP5VSLhc1L43hdqJfnEmGqF1zBodMYjDMBQXeBjh",
  "key8": "2QCYSgTR9sAAKfrJ3Auir7VPVbJ8dTuKQDBXubjRb4sCBqnpigNZLTzuFK2QsqGsStdVwCzc6pkyyM1gna9wsuc3",
  "key9": "4GxHhG25Gn6tKWsDi82jcDruYoarcVvh1WHjZza8KB1yFWkYu2MNmtuKrXv6CfPwRPjA4dCk9NKq9Xaq6vBcjxsP",
  "key10": "5JtjPjUED5gtv6cfbZZ6zoJH29n8gCu3eZFmEUm9yhkB9W9jPGqBo9ejDpHhAhcgz3VqDvkn2s3VW6i3A2XF9SXe",
  "key11": "5Az8ghP8nvtQaHMSmCm8rjEwYXCYLdFy6JK9RnPct6kpGAWFFhNLZHFNcHjqh6FfcFt9feaLWVu9v6WEFBufkPBj",
  "key12": "2E9oySELxiYrfFtv1rwahWxfQVoAnu4FR11kpwjJK1Cru8FtZxwHth1fFB2aK1ayTiYcVXkwjsDuY1qFsoNjqYtw",
  "key13": "1LNqE6NbQZ3srjzPpKTRFZFudfTzok4i41jZ3h3hsVdRYwmbjf5RmhuqLG5Vv4sgh5h7ZKTkfGrvDD7P2SNqQoR",
  "key14": "2bkAiUEbSKZ9faT6vffPLKLe88pFiZx4yVmDoE791wb1awf3xkBaUPEqgv2TswcgpNryArAViTZjv9D7Pt3qXqcc",
  "key15": "3jq2TSnFfokmnEb2MqcB8moKk7x8wHxW6zq87P8s56qb9uq3dz5YzvprBKpzGo8RuUsf7jVJS8jF1A9rn6LxqooL",
  "key16": "3cUGL1wfCKtwewruPAj3bgzT1D9r9cqcHZm5w1nzniJpke7ubtVwkcY565PN98dHKCPRbxAUxtjXcoSygirECbaD",
  "key17": "Mr74vqFJ9NJVRp1Gw4QYu3XYda4XeKMggnw2GWdi5pLsnE9KZJD6ym2pRiQsFuk2rvH1tzU7Eo3y3ebVDzEqRhR",
  "key18": "43Vh4e2BAGWicKSnR7AG2hMEJGn2HyGYwrroQLoLgMUTg7T1YJV1F69zaJnABN1wWJyRAow4NYrB68Ttjp8RcWis",
  "key19": "5x8uRABdLJVEND6vF2ZqB1vNCbz9jH6AURfGEhu5fGZEVpnofJU7s4GYR6LBDATYtEZGyhBzFhzAiYkVngqBP3N1",
  "key20": "2jQG3oVmWFf1HqE9ejkReJ3BBxUjyoYRiEgT23111cYQsCxkvTPrJ74yFU2URoVKiVjivDtC3gGb1nteRPA6LZvw",
  "key21": "23ePpxcZmd5nfLS7GU9EUU2LDYsruNyNbKDfRmYNKAWAPvZTV9XBX6P4HQz9qsJupjE2A57jc66RPExCDeBgzSGd",
  "key22": "5iA2GtGZdgwcFeTAvqZ2sCxaaKbngyJKBMRpLfiyTjtb3JfC46y3mtzYMjC6Hnk7i8S4AoNfAw6zmacuG4GuyeLZ",
  "key23": "5jD6HPxPrZb1KAQmXY1YMW99q96RB6ZgiNRqJEn9cEAdgHWMVFbvvk976wXDRcf1briwj7YxcQCwCujYDGUYxXgp",
  "key24": "fzTTQxyZbmYhMMVbNzbic3d3DWDf65nsFdumHETKZYrEBBPAZw7JMT2w6ZgJdzbaagJ1gSrjtvbWywjuNTJRG1k",
  "key25": "4xS3LQLnrjmopxKoddWDDtGijr42ub1wrjGEgKf37gCwsQTHLW3z4fPTTYhEXD7fT5RknfGSUHwpSbKGQp3HeAZ5",
  "key26": "4u1X7q62dLcV9zyektnHevttCJZ5eZJRP1wRhQg3vTuhXEta6k3641afANbLoDW62dw7Ak29pkja6nLFC7Lrud3a",
  "key27": "HBWZK1acT4RNYeqmqhR6e8Syhh1qu9FAf12ezQwnmTjkSNWjr8Fy2hSSCNnpayQraghyvY9TgkNRK3uQfGid1WK",
  "key28": "4aSh4M1UHCGRy4oRaqM3kFmkepmzwBjSk4j43JV9nmQ5rBt7MBrLotCRcHxwby15vcv5shjbNTkgXcKaoDw1DV6h",
  "key29": "5tbjchfXtW4pXXHkHnhJTXkYyj1cykrt8rW5VARpPtsRPGZNTqPNVDdXYCbLmtGdFpDZtQMjHnmjWHQCEtq6A2wH",
  "key30": "4Qs4JKr45nR4pToigeQM6ewwiQhPsvawj8FNLJvypdcsruHmf2ae1BRP9xHkshZnUQSrBFNu8v8w8x42Xr31EmAU",
  "key31": "4VNxeVt9MWYUKrAeJNoUGXBiCphbahxJxdNwWiM6tE6vYXDjQBq77XyNujac43htbqQYss1t3Eyy8tR59TpvPaLp",
  "key32": "3WQxVPXNmBTQjSB9W9fKFYB5PaHEEiHCmLKE5XeDNVa6A29Jg6nExKCTj8Pkk1FPufVUmtXEQxFERv7QKuxAFHc5",
  "key33": "4f8eqTvM8tTfGJHYPQFW3Rd2kDbRV29gSnmDvfFSR5KBZMuSZ3e9Tsv5KvPwrG6TLYDY2PKUGcobPUMs9YM2wDdL",
  "key34": "4pZeAkD4HgfBYhvRyJaqz271mG8XfGYhNuT8w4UrgERjb4imWFfMMxUssrX5S1UKKFb65GF21GpWTFGHFfQqZXLB",
  "key35": "4oWZKpkNqngTtchbm1jgLPS795snJGkvBK1177HvLMGHhTDSXqF4EyzwbCwdJccWbptMXFRbMR3RfMvmk8mNezX5",
  "key36": "AAi5aw4ZpSKzBKfYjptFSG4DaBtoHnUXd3cAeZx5L3pp4EmgXZ1c8T7V2BFaNgSqwdg8HH5dgbb7Stqe6Abj3QS",
  "key37": "2XqN3HfpZVzPpqKNTcEgbkHC6qSvRDU3gtvqY5dLnPCm5egRN64hXHZLjQwT7pBYju5KtdRBF7Lgo7PCPoBWQP2x",
  "key38": "JVBWuTt9Z5b7HxAxtzooReoVrGonLhKzFxNcEuNnaZEwuB7YpC4qJLnJdDMVwPs3sFoxsNhzaK4dnz4CWGFscQv",
  "key39": "4vT676EPzDNtQWCWzWVwhGACvUtmpdfz2dXwsyX1GrytgXBMKsPUkyNLeBSZN8NitffE5E9a9Jbh4QVac1W74Grg",
  "key40": "3LRRsSDLP4KrrwNpfvnkbY7THqSqqj5qbcHS3i4hZoqwdkLxb7XNwxYPEktdkjuqDSW4VPmGtyAyrCNqDF3BWzwo",
  "key41": "3XJz5gE1tEd9Utfs3nMxQpcWjV6z6Mave9ZZgUkE5hRvngfy5d6vhzytF8SvbKgG497iQCAuiJmsdHq1kyvjspVV",
  "key42": "611rJDEy1bmifGFUkatshifbg7sBbBKRx8WZ1BLYyyTTunnBkyqt6qjKSBXYxjVvDxRnRrc6RCBhjVfm5o2ZLohn",
  "key43": "5QDffW7LHobte1LRfmcU8tb19ggbJFrZ7VFjUTa4mCNCmNzFSiwmD1pbGUZZfKmcaGFqDpRyHyPvcehbMuyQhdtq"
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
