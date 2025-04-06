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
    "2A1qGvHrW2zj6PEqusVb5wHiEhkAeKMR23RKFbe2jveTtZQcNbxnKUWZ4Te5dKd9odZwd4cBPuRb8EiaqNtoDf7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yhAn6FFuu2ERqS15txHC7dAd74vJxqAfuHMNfkLGsehHyAsEYfBAmDKBGYiWCH1tvsiKjDfehsMvwSxr2MDf2xd",
  "key1": "5XAF8YsaUSk63FGS2gbujEZZ4sDVUaEwoEXzyPoG7NfEyjUyniWTDchSxENHYRVAc1qYoq6WeD91ZqyovNuZLZr7",
  "key2": "57Eqtdc2yU27FePA6suUyD13MysRbSoC33zcjJwoR6xUKyKYWPPuMwF2bzrJnwJ39rUAF3Yjrbn8t2K4f5VdYRvG",
  "key3": "1EQXpGnrX8XJ1CP16fafnjYzCTe4GcjBvqM9diWKHchjkNUvvyhZ63f8x2Bnm9TLAKq5eGkqMQ7t82K6wZjq63Z",
  "key4": "5nzhK5jgogtYYn2rKo4SWNDi8a2sHCkwwNrBK5KAPaSzrt9tiUzqgVFqUPqjXiwCuxKapLn4m6YpY4FuqgreEo6p",
  "key5": "388JvNqmjG7N27cNwiSjGXzM5tHQ71bzLMC7YYDoDRTff9p2UbyeS4eTpcTGHuGo7kMPAoLqoZbYPWtdFEgGoecU",
  "key6": "5xS9E5BjWQZQ3JnhGo3txAHs6nWuTQ1tVJoooepGkt1t4TDgSVbFLW8EKwg2wRM6rvUoYb7YxnUcLTDPSJpjuwZr",
  "key7": "36hzuGbFMBqJ6T6ZUpisPJtdDPn7DEzuNNCTe9gYvhYFKmriEZvJL6NvZnuCLPBjxzxEkDdVWXt631ma37B3sYDA",
  "key8": "656FfsRMY81abG5S5LgA6vjbXyLoGjEwVQHuLPySRd73PBoAvKto2vms7hBbaH1R4ivYPacpNXKuiQFXCsFeAoqH",
  "key9": "vGApQCTrgiP2mSLAzubadqeZ3EyXYZi91UWam1mrqdekyaRMTDS6dKuxMpjvaLYozF6QTninFMWXEgHQLpWcNaJ",
  "key10": "nzBvNc4eWQ3gadpxRoNAgY3q3hRGDWJUM1df8KUqLKRyjzXmYZXgs5j3iX5vyizYzAe1XCRaakATq61gn2yNeFx",
  "key11": "4t8hm1XXX7CQrc1pnMzsGDF5WNw9YQZcSRPkJ95xfxVALLehSiziev5KijdpRF1z7YzNjSKNryV1PqYJLoxoT8Mg",
  "key12": "2fAvujUMmYHEEqo4kGdNNm5QZkkVNBvUc2JAJt2TsE9tb8Kkvd8xbSZMEnrYEXm6edz1oZUqhgirEq4cAG7koYRH",
  "key13": "29sCas9wmZXjH7Qx1QWu8r9PXxgJMrA237ZQLQjBSqCLwnYPRmE8D6iNqQZjdp5jkXCr4YZz9ZyzWm63EWA86RAb",
  "key14": "2WDTZkk4iUtpxof6PK4H9jHJ96ebD48bAGpiCPmZmvJa31G8XmFLKFpNJKMzWv47iufRiY59b2bNjU7aKygZsEXL",
  "key15": "4bU3zdiKncWmnPxEaRrU2gZevB9LZR98FcuJyN41N6A4Kf8fCafUro76iunJxxmSfKJGK2oJVq1Lh3CP64MbTv2M",
  "key16": "3YXWYAwdXFJKfNdaqd26YrijeV9tevonAzCoFKdgfmz9CcfhAatWSjoG2hEqB4EBjbnQtVuQD5rjuoMXkphbLHmf",
  "key17": "X9Qx9qetAJb3DDoXKGJvL5TwspyRi25QYyThnF1rD2WRmCJCQ5jrtdVNEBEVcN51FwVwh6nACoMWefQATDDxotN",
  "key18": "392GW4WdyckomfMZKUAyvMoqmARNAfV86uxDnm9jscSn2EyUJKv1m68FL2PWBY8PjSfFA7hDL3LzAMCJ7bBpuCDT",
  "key19": "2GQ7HugTcehNZSf6xvtNJu6poMAfVzcVCC4X2SjcuT4jR4C1YXYhq8CJ5x2NocrQb3KGqfUVws63MS7qjVvyMWCr",
  "key20": "2wKTTLeVuAuJ1REzqv6oBXwt3QvUuLfxLG2RnfkWycSvRuMJjM3pTyXHNbwbeuTFtdVPvsaBNJmgsnMU3ecoMUYp",
  "key21": "3PiF5uQL6FH1bMcypE14Lf9udU6xdCCWHC5DnCuf8JBPr3v3Xu2fBWBNqYYvHSA5yc1aCqFP6dF2VAzzkYBdArBq",
  "key22": "5U5qKk8QchzG1KJfBcckVtwwdYqxzxnSRcTfxN3LwwVKKiMwbGzHBC5PePx3pw9GxYjvtUdskcqEaFqVFMpoFz15",
  "key23": "4igXF6unGeRnK2wGBByuPjWS71CShpA6reSSk9rYcgHa9VDnzfXc5pPp9N2menqvm7LFMRFsfZvuRosZB71rnM4k",
  "key24": "4pi2GMbsnQ8acYDhdsorZ6cXp81wqHgKc6xJysokaPq5w85X172bCCRrn7zQPdovRWATVMD9NktNtjQCNW6HKkLd",
  "key25": "5q1msBsrpkmXjWKEQRWLMMDadPXGcY7GiE3myVCSGbA5synALZ55Tnr3WNcd7NNpGavR9qZz5ZGDhQZXaWgDoHk3",
  "key26": "2K17yomZwBTP3B2DDn98C9cYb7HBjEKNdUwdS7CQN1oBJ2wfHn2rywBLboGhR6iigJu8Lh9MY2RN1X6Rv6Xhbj4B",
  "key27": "2iY4TnTwu8Wuqfzz3vDKU1qwTUPokEXxW5cUXKMyZgWFioMc1YvSVmrw7S925uLwJ14Vib2qCT7qXDQBWyfDidjA",
  "key28": "3BYZRYD14gV5h9Bxh8ywPYgYkB5Jy9bfWHe8ymKp6e5RK5W6SgN1CVKuRQtnssGkiR545Wr3knxymN7rz7YxgzGR",
  "key29": "4XzGRbypse7jGDifnmLFBcnUREwAMRJCRZKuMCiJ3NPPZJxvVamvva8PG8Rvjpm2NPqgPSuVxZWk1qhjm6XZDobY",
  "key30": "4ZcymVY1LmZXNkYZPA8bME1fmu4WL6a5yVdJuMSLQbztVHYhhQURH2FwXGiwYQjYmp8a2rtigAkzT2deubWhy7Kk",
  "key31": "xqGAXorYTJHVnF7xtXQHUNkzHbRtqXCoftYUoZccnCsPuqUskM4bjj1M19482UTRtdZvF6zuAH8YFgTeQ8dtHPf",
  "key32": "4ujuwfaSrsdArNLX2Yts5cRBW5uYrGmH6JyamMc8j8AVDZnbqwsMsZAeiibPxs8DGVD1VZBSXG63oYD6GNeKSC5o",
  "key33": "89BuWqbFSdDTG2Br74uc27wEfxa86Ffmk4TqK829MFULQhjrdwAaCwpJpBg2zTZLcD5e1uXTisDzzWGoBg9jjZ6",
  "key34": "5kPiDCz4WtgWu1NMeCuxwVCZrEowTrTPWy1zNwR5ZYyRrqhWBsxchpqdwbg3JEAq2kDCqFvL3wjEAxwBaY728qV4",
  "key35": "4uJzTMsGdMS7yZcmf1KX2r1Ki4Hos3kpXDeVcV5acWxgZ2F6GHgnZnv7ZwNVz4GNwYsqobLMo3NSkeUE8TWGATS6",
  "key36": "2jWU88EUDC3izfru3WS7T5yuTAd3CRWmQJXKZaLfo4mfA7wnrcrQGoXJavrNzkkerfk3H9EHnSVHcJbUdmhY7f3v",
  "key37": "aKL3Hr1peBE6aaB1JYpAukvGhnhM4WvFER8pnxCm9LhDfcuCePSyUeHB3VoBo9GqXttcp2fE67oG9fbea7s3vdf",
  "key38": "5guzjkdBU4vTo5tkfupDefXokzcNswPWkpoFouwitKudcL5sZQAozqQ1WPThCFzGevWo8mYfQ994DgVxqogi1fVb",
  "key39": "2JZC6bPJ6GJfaGUwnz6zfwBisdXuxm2XJGp7u1E487Cb2oyYFsstXUoqeKry8nCVMoYUCkJvuanPwQMr7Zwo27nM",
  "key40": "5MJsuQ5tbQZ3aRAU7JdQydXS1L26Vx1Ju9hbMMjQpQjwYxJs9UHzB9k9awc2Nok35EnQoxANEM5fJYqSWfor2JJw",
  "key41": "4ZQKt4jEqJM7uo47MT3JDLbsFcLgTrGNqdvxjjmNQqLBwygh1P56onKwGbokPrAMH6voXZCRBH9c7Guv7LcuvMBY",
  "key42": "33y7FUufQwJqsgbVKcNfaGTqUVAkod5nZ8G1AzCnQyq4rmdR84GcwPaznkitkjWNtJ4pUTN9baYRxJiio9H8X5AR",
  "key43": "5kcfhZMZ8FTxJTGPr45VG6wMATiPhwsN5HAAopaBgdYwxDdEMrKCLsAdA11LE3Pv9sPGvbX6smtEiMXoDTV3bbk7",
  "key44": "ge9icPfErwGtZmoMTD7zUEyUS7fVueK78r1f2GGRrNaPnNc1knzLzdX6zuED7e2HT5LkeMnyFgD4btU5gKTxfX3",
  "key45": "LZrHqdxnRp9mwQBNSzZuUzR4Lx2hcXJDvLfB5ZexTKY1f8TLcibUkzxYP14fi7V2bY2MhpUxobmvmoaQaBFW5ik",
  "key46": "5vXfBwBkv8TSeEVAiiSBfwutN9zWZT5HSfH7jg8KzhLkxTtMzKFw6TYmFmFsHz3freSXfDL4gppXVj8mYKmooF7v",
  "key47": "2oH2knWv9TwDAaetFeZu2smJp8cTs1pPT45k4KPaX5ckYSf94ojH1Sdvw6M9zYDxn6mujBKgdJDBk7is985PeFSo",
  "key48": "3Hwp4RsnJ6nGPxCKSzSfZunL8MU8PXaXmy8dFbcTUBGJBxJi1mWtHwxpepcEZAXTvo6Ei5AcjRQ3xULGd9455PCc"
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
