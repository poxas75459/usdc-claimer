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
    "4gCPDL4mzakdUU5fupjJxPtfM9FuPY83c3S2Exn8Dg5RmkNGaoNB4Ux65RsYzWm3KrTh1jQ6KjyPaW2y2voGpnFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i1UafheSKxVH8XLLgYeGFgSUuZ1XMxyFyfARVCrU4VtSTGhi5zsUqHs8ryegJxKiF8ruX8AtDrUqr7SVP9j2QMX",
  "key1": "4bKyxkqXMkhTJfEAp6YaNiM48gFumK5qhtGwNekTmDc7LZekzrc7Xoazq5PQZX1ZYxp8t1dNsTSxGs6fFnbrEqKQ",
  "key2": "Q3cj9mXJ27wLQAjsZ3sg5PmPgYK5CyXBC3UJpas3CMXAw9wgJPkdDaPbB8gjwbv4BP642BDx3vPVzCzZQiZ6Enu",
  "key3": "3By6TigPyzK1JLBzwoXrn5ZxXC4jNHbPvmvLJe4Vr4PfREJgSSxBdc1eAqzrDNssSvXwpiN3Mov1KDryP9JtDYta",
  "key4": "Q1DQkUJQbaJoYVsLT58gAA17JjT9d4hdoqLwR8F8GTtQ7WFBWfbHQPiUaAwdG4qreKaKcxjsLq9T45PhQByLJF7",
  "key5": "329DqWrmPYj7EhZ4J3MGtdmVXqBaNwnsqN63GPCti7v38AHgxGe96ppTDJadSz6pP1oDhCsFQ7arinGLoefnsVgc",
  "key6": "4pdvnj9SXPrG8HYF7eoKWNptFdh92okjif2pP1yWFY9GvNyWfpnvo3UirYBxVSSzT47oR3ucWQ6bsWBmFqg5NDqY",
  "key7": "5ib2XdoQtMoVBcsToERwFGUjqB1M2ib6hPdSrwVMRm36auHqoLmdHT8FZaq9WPtoP5J29cz6EJvWzP9BdJPqA9TN",
  "key8": "3wuC5BKq96EYBC7frBybYts1Dpm7eu4oLxYWFuYFCjhH44SffoVZMaGdP5a7FDQKDWNJT3CkGc23PinKL7xQt3iq",
  "key9": "AbfQf4EDiRpBqNGm72uLDgqT3Zux6w1b2FVcZNbxp9EkfsdGh7US1jJwM719zhiKoed7wxbkH5LWtLibhqfMARn",
  "key10": "4b7zcCMJN7Egh2tY2UMiVRhJkKrBuVg3vxdDqj8SiRb8D3zipWGGKNruNH8yS21WSzM5uhZdJ5PyCiynn1k6S86A",
  "key11": "2spW8fiW5n19p17QfEQbQRTaUAx3ecYQfX1MWf7szxkNusYgDGQhM2Fkx5kWvaMGmNkz4U8AptRo3vv2LGQYLWLc",
  "key12": "2JeN75nStnrhLh2jfnNR2XfT5JEzrPmFYZN5WdpsgFHki5sNbxzwNUw5nvyj5gNuiGXnwTFxdZpZhyoH3beLh1ux",
  "key13": "VQPynyWm7K6KhwV6DCwDLZE3bscvbXPwQaSAj9EAbjmsNJiFA8fSZrakusJ57ajVYcUyA1Pqdo1vdJkUGkUtVix",
  "key14": "2B7cWkb2f2SqTaQSCEbY2h2JnvwkUBgMEjRcdqt9B3FcbnKFVzngRrdZSRX6oXgPmQJRr4Cg4JWVLBjnDN21CvG7",
  "key15": "2cyyFT7ZEDwsxpa1Phk3CNPbQToT4nzRDnnF9Seuwiir3birwtEyTN9pq1a5cREqBBi2XWEz1xG6YhQcjrVsU77T",
  "key16": "31DM9g9A9GobmCGqwFVWouEdfD4J9CFyBMt3Uy8qTzsk1nqCSiHDbjmdW4VHxGc7kDoh2Qf9DBwWYsP3Wm1SpphX",
  "key17": "c1cH8aAKstGERk4N2WqAPSb1FqswnxWGKDoK9vD6cBQ5Ekqfyfkdpttqqp4rb9VmEyBSN92V66x4GF1ZZPmy6ZP",
  "key18": "4y11qkXh9RRzjxV5UyYpSBnnxQW1xuGrJEm21RhuLtQed9BWi9nYSY5jWATH2Ji6ZQF7US8WLpAj8DAUK2JDKwam",
  "key19": "4bJ43ie7Zvt6x1dSnj1ZWDYa3W9s2W4ZSXd1AXnFbGyBntqS5YEPu31ZGoTYyxndKHJdnaNdeFXUFr61QDW1fYFx",
  "key20": "4xWkohYKddfmUZwPXFAWs3tFa1BkLJSUbV6EWG3fK7dde5GuvdQzQaM6NHuFvdeYRjJjgNVXcMyFGmiZPfCQj7nK",
  "key21": "y1WjEqqxZZEbwgeYPE7No5j72432AiAMYVGEfEVAhsbFBYMwvACkTgf4N3bu1sNVZmuLuLFbFqTMYH6SDpckqss",
  "key22": "4rpArLCe5aykw6mzBrmMLkNHRVyF2wAqsDhZwu4zBzJsTWwogLRsh3CGHbCrrH1kaAWTAFh3HkWTgmo9NTZGxPHP",
  "key23": "2rKzFqyLpiWebsowgGbx72VvsTaB4y8V2yqVm8poeNdst8Ls4qhFyo77dJ5eNt5t1RGwLsKqvBAAzpWeW3mdpYHC",
  "key24": "3ASwtr58gx778qdjoTqxMGCNL6zXaSkUCwCFjwCyJiNJZfpG4Jrxvjfm28VJAFtgGnkJjHfoMzJ5WFS6ihnKDYu6",
  "key25": "2AqzPt9dbTQpp8c1ymxrj27XsudA766woYt9tGjPndos8exvQ1H8WPEKwDQgKQdo2UkoxEQbbvYGzE9PMskQysRv",
  "key26": "5boySvaBg8xc8bjGg2JXqxPBkfBcBB5uT6RhFReo4ZSGx8tUyNP6FdmURNZJAcjWrok653SqqWBWE1LLUf7d4oj6",
  "key27": "3o5gYQRsGB9UC2724ZnF6265zkDLx7iLu6CATFV3KdW1d49i3FjULd5Pptb2Sq7LK32tGmEX8MvPYYdPjwxPwT7G",
  "key28": "2U5MRHw1YSNhwHMkskwPKZXprruXpTvJBkwQyXMQGSRqhQakbZ2Kjww79C38g8AjrK5rv37En5a7Q68DZzQM9NJJ",
  "key29": "s4yvBuentoSCjkcMhdFAqXyJBuW7WsQPbFoNmhRD1DxRq2jMdncxsn7BFjUc8opUAaafPinPXUyrCy17aVKnJnm",
  "key30": "rLSbdD64F3ya3165NcfFeW75aAUJvYc37TiEg1Jyp3HfuCfHdTsqFJUmBzS2r8FkgEhANi1ouRL6yqZcYtY1Ba4",
  "key31": "5Cw4q5Kymma91pf43Jf4cJXCTdbZoDMJKPJYXx7eYxfEvTCXFDVdxXSBUbeSf6k4e8tdLmKch4cg1HFJSpx5gpSX",
  "key32": "3Un7w2msSBGxoVjnKo8KbotmaLLQv4sQBU8fdagc79SwWPWqKTdms5smP72p2FJ2bTdKFEgJaQjbgJHQ8aNURdVu",
  "key33": "neKWB3Ja8vxr7a2XFJ644u5yYDXFjHYFTHrfo6vkr9Qno38a3QNQHykYgphPTNrHS4SzcAb93vq5c7ZeCndFzdv",
  "key34": "316dNkg1ky9rCXLw5o86mG8ZRXY38rDaEG5FAMfv1tYbGMMwsvDw6Xaja1ZEw2Kc8xgZgEFPZGqZJ6y39h4zdTSL",
  "key35": "5RtcrCfNLSUNN5k4btJjwGfeoCaqvnkyBcT25JQFEnggobvQsHfRbLdJ1c2gMDU76GoZmmiGeL8XVgmKQPN4W9xw",
  "key36": "8XhMrfwBCaiMKMQwfBEHRBgTxu51SLuZqyAjagkKwGxzbDvzZkWDRvW88ymx1f7XAs8HiFVbLUSHHgYVSZ11uCP",
  "key37": "3iURDsvu8zUhAxezSvHGe4uMx9NnTYx8MKfZuP8ARMHkpXvtZfXupZ2h6x1fWUFM3zwEtTfxRYnsmXG7QKZSQ5DF",
  "key38": "2JQ4mjPxqu5AswUW4sJmphxvswXtHAXanPAqyzAozNjZfAKo8UyQJmnCkeY7mBdMqmFmtN2v2SVmPkYqkrqXkHkT",
  "key39": "yXAwAuPJZGvKKPtv7knHxgFqc2G2hNPdmkepjCfk6g1H9of2EjefCofNQnGWAf2GKkvSk1X9tfE6sNr5vC5TjYF",
  "key40": "5iFb8agEzkDofHNmKbFabsEwvGbVL1iHSrz6YGsT4VmU3737jgd1qj2YbJHp6EhtuGTuCfqWUzvWnZiVqX8VJHS4"
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
