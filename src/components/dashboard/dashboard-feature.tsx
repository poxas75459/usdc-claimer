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
    "3nP4rTxNB6HCLSpU4HjeRPdeEKZ1dET1Z9d4mE5dbSUtCaTj8itDN3fdKuxC2GSoevYeeJUi7fBLZ3qPHTVj2et1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HWW2tKUVYXF2qapzWGdYxUrojco9BxcjzaXM9oX86kc2joT3JFaTCHKYg6zSGXw8LsNhNtKDHxTFkd3rV8c9qFH",
  "key1": "2faVydTH7jG6YdfVfPo6Q22iJsTDauDWLtDyZ44GUxyWvCn3NFbN6ntNkjdnw3pWXxnmDRSeatuyi3x4x1CmuDVt",
  "key2": "7oXQNbH4vmqQ7i86WDAefnbMVu3UWcQGLtPzcL7p5bZfit72UUoFR1gQgo3DnYeYxVsVKzhP1PdxDnkYPZ1TqFn",
  "key3": "bCXFaeopUp67Gd9GRse3TBak5D9g9GhzJBEtnXj1qvhmdbwT8y3oRwwYFiimBRduux6LN5MECTutHhfUDpHUoEd",
  "key4": "3nG1ktr5tPb9J5DVHVV9s2YKNX2T9MzwWt3MdKNN46SPuRbeyi2enyUwJcEM7prbjENMQhg1Ro8oE9JJCWrjUzU4",
  "key5": "dqxK3UypbkE3u8AhhhMq5zV7j7AAN1U6cwu2qqofTcxr94epkYR2dBEYgrqxj9bxN7pTySWxULrocuU2VjRUeiE",
  "key6": "66gRiwGZg6TZfdfZ39EGjDHk1JZAL5dHZo45EfeXc4uqcFcBEJaLjp32exZibeSGNHPLuxMoq7r3DqU9t9UQXna8",
  "key7": "N8d6qSB93xfkXMvPAsyfqU2EPrurURKHmMxeUWBniYsUy5z6EowTarStqTcHJVHWALJ4NVggSKCnGYxmjgq3yoz",
  "key8": "49MdTz5t1BKqNVQoxNxdQizSe9kiTy74sSaVbnfjQcgvgxgWfXtyraCyyKXpcoYkeckb453FnHfhWUqCLoYzsyhq",
  "key9": "41Q2dPCSfa1srETqdoHUotVHmicyFsSW1TvLyn67n3duf7dG91ubsK3q1Yo8Rt77ffwFWcjzkTc2qPHA5xVruUEg",
  "key10": "5RJeGXuLGN8kmFtwt9Ch9hpDNunRzBnXyJPvYveCEcbPNLVV3HpkvCTmiSycsnwXA6MiySTwymr3jPFhkLvagarF",
  "key11": "4EGqg2v496hqQwxkgztBKNDm7mCTUurWBoRCfCkKyf2VTGMb8VveoUKcWTCGtxP7NVXxTqGLj7sgavF5BkMfFaA6",
  "key12": "467H6ws5Kcqfzk2wZmweK5csfXuRSyQ4Hj5VnMNJbZoaEw38gxCqm3EUh4c59vPKvTE6jdJPeod9CG5MmxXkZAr",
  "key13": "2SpYUQejCBfXVXSqjSYZEuvDydfrhjwbptuJhdbRbCdoo6ooMuk4nsPfcrBYBNV1Mt6uqJrEPGJKY2KLsKc8ANze",
  "key14": "46hEhyig53g6RWGv5EpXwyRUckXmecjahJLmqFPkzoTQX5os4CjtDp29Wvi5JhfsEv1ToSi2xxHDK2W3BiSs1FYF",
  "key15": "3HRgfm17fkeRjUouUED1BfXKNEufgpoXWpsjrJFi3i2tC2hfogq7r3Hg8HwnTqTbjHJKkrFpE7kzo7iE1tjcN2mk",
  "key16": "247zUjYLmpwAUMr7JVgNKNqU9CcwzMD3vobXitxCpMLewXEP3E7yFpfPpTUhBi2wTviJyfgozehe8gHtDnqY1SuP",
  "key17": "2EzEZ4qPgc3wFiEEcJGPuhxPWt6b4FF68mzwz2SACPHoA392N6wpv6ReKBHghWWhHEqg45nmdsXyAZTBRfo9RgmP",
  "key18": "4vtbmUhuzic2V4PBdU7VngfXm6GispWbKKiUEBUS2YJ6y8YJQwuk8LN42cEEZPXZyvbuiKuRV2oV7HyGv5BEVrTi",
  "key19": "4U6VCrGE4d7D2nXxafVb8zduUJ4ssf4u9Mxb9SgRR67Ut57VdbJFhrkkjNXndqmsgz4BpB7EAWrwKrNAQrS8TCQ7",
  "key20": "5iSPh9wMxhSZoLtKHkPiiPsReASp8CByb9yqnjjjtgawkCkV9RCztNZgRYR74GNUyjMHwJPazyD1oBZxHwecxQB3",
  "key21": "9mknHVaYCf9K5AxWuWQ8fcBc8qm1zMP6Jp9KwGeyAFGwofuGYiJCigsxbkjXU5Jpr7228RRv4xrhPe9dUJFTdfi",
  "key22": "3wwhWKsfTupkAjBnh3Ko1iX4A5rK6TRMPzdiJp3UqsZiK31RD77XNB9yd4zCjWW4mPSxAuBjAYSB5RNcu8kk97Ff",
  "key23": "iik76p6io6EuwTDVyRCsSWgFXe35suQ6GgK3AgNDrM4Xiu2C2Y2VZpUKykGyGnNC8LoptQHJQ3r9pNjDUxNBjm6",
  "key24": "PesKiBEsgUiwVMYYV5jFy8qzGtPtFNTL3ckrp6u9Wi28j1wgFkfyTmNEKL7wpo3ruFPadNCwhMff9zs5VD1eRdN",
  "key25": "FfFP3sTq5XpGD23wwaGVkAwt3GiWmEa22GVT4g6QzQqL9mPGr3qf3J2dmhjzAPKrBfZwrLnptkWh7M2zfPuMiuf",
  "key26": "3hKYgLUenp1KhMzMNS54jubDAj2H9VDaPPHYNoGeuLM1Wd8RBtHt62NxqiMcpyC3ThoHbxF7WuCA6oLxD3kzZfgH",
  "key27": "31yDev5kQ7WUDgkKMv1QBjKNEDgZ1uj6WEhJvMcfZWYxkPZEx9fZFx3tEiWxFNGP3SQvgD5DYe9zGhJoPxxEm9Pw",
  "key28": "2h1BBFdjBgdxxHmCucJtkLRVT1HdE5XZ2926Xcj4YHWNiXtPTyhQanmVSAm5X9KhizEPTcDorNnPMkzbX2nwDZwd",
  "key29": "2LVXZSTGS7cF96eftiEpSgRS8fMJDS4tJcTHHVRA37Wrgpj9N1Q8S2P5GNUjcLf51fSTwfw1uXeMFMgJHPiQfW9r",
  "key30": "3745Y42mKtbZomAUHjYrYpNB2TbvvFss4rgBAmd3e9SrnrfmULRzk237zeSJn2NxacCiELv9skS4WVTKRT3wPrfH",
  "key31": "xyXaDQF64PRfafdWaaAXqM5vJu4bbxu7udz1pWG7aVWzZ84A1CQjuHkrCvgwAyJR75Z3GGRXb8dXW17pAW6saHX",
  "key32": "55R9EUyuK4P9KYCebPodRApnqvqwptGNgt2MWymwfmCX6UjpnqsYgZskXC8UWYCk4mcmXqonapdjj179C7E5x5iJ",
  "key33": "syaoujAXtUwm4hJtPjGRrw2wNtYiHcUMjQ1EqNqbMLYfsDxtJxhSwRQo9p2wftjrx2aAvJgTBZQNUvra4n8Gh8p",
  "key34": "49ZGAd7GaNA5AkD791ivLMLFqA1HLPrki8QG6VCJoZzakWRvkChDvTVDMeXnkqbbfhmHhCWRoSZbqHaJnUidxEc8",
  "key35": "29pN24vNc1QCKZVHfYS4H3qgwcZWa3htH75JrvtxSo1D5PwWj3mJvUCUCBHY5Ai82CsrepWhk79Q99qq3tXBWvTM",
  "key36": "3vg6gdXnaHyCCuBVwEwyaLMgifBB24caDEunyp9d9kgdG1prXjeTktP7zSbzeYHvMfGXNWWgL5WTkxtb5yCi93mE",
  "key37": "3pVc9YeRALpfH4iE7ScJKWjxARVTryP9HNRNE5Ty4wMQtkNKtxowZRhe9KSbEZpbj7ScLoJFSeh2jrDsAM1uFNwv"
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
