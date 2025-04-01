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
    "dW6ZW1TcXzanSRDCH4g219ZinGRiQwdg9BYzGsTNY7CYpdGtAg7Pf8osqjPXv6NsEhvNohggtWiZZrvy5SFed6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lkwo3Xpzakk3vi7HWqFDqA5skvw2rzMQjcDKxDq8v6h926szNjUinwN4BHV66Bs4CWzVCw97NfUvRVQXxGBp83Q",
  "key1": "2bxf84aohkexgWqSCEf1cJxHi6Z4YDmLYzjsvT1Uv8X3udTnF9ECY3wHzexzoE5DgsavC6v3btDkZDySYS3ZDKLa",
  "key2": "3f4oFPxj8WT68c7juxN4h5s8fDrfx8p96sRWVY5TukCx8AxdkuewDHsyQ7NWsBcaSAGHTJeHYR2nFNZgNB9BDVLu",
  "key3": "241GRrSxm8ALSFrsGsCNWbLcbfhg1JYUXgXPYV6CQn1bNySfpHBKVLBce6DudS7cmWoDbdjwH2eGv6m8mbb4Vxfg",
  "key4": "evGd64FLWU44pGzabpBKB3VKpHeNVBZEhTDnUFVZ7mbYEnXT28qPvgpM82hAQgBjiYingjVT3iSsF9jDygbShj4",
  "key5": "3NVsugXXCiY9qwov6W6kG8vvFkTPdszXUyi5m6VUUfncB3svBM4aGoG5tDCJi2VhzCHMJHccekrfdMX5PF3maqst",
  "key6": "4ZCkHpg1kMgE2hdzoY4R8FucpUSkVHTDJq9NnxyRJQtgV1LmeH3Pzf25GYTmkVhD7MfDT5H9NkN5x15dJ1u32q2Q",
  "key7": "3kyo8tyNAN95NKscnxA9jAjQ5Qcd2WqKjFY2RAYLW2DoX7rRT7kntq1fJYLQHK7GhwWfXvey2sZMfMJKq5eWDH49",
  "key8": "66BgG6cuTCD7w41RxZGzuzjZ3c2XC6nGxjrN98xiDBqhsU7QjMecZhykWaWwRjuebCpKEp58xmyyHGFMrbzrR31Z",
  "key9": "54wM9LPrnhTK14sahuvdkEZRMEeh9S8U8uhRF9xvpKNWoeLeUMKpNpmNjmvYo382niFScq5dYdT46V7ZtHiUtJW6",
  "key10": "3r3wbpyY5Gn9whtrm6jCKhH7fFNqP4gPTpJDJQPcsZMGuAbZzA3STbAsMme4hz3VPqh2nHAjxWWvkKrd3cPgewgn",
  "key11": "B79fBcCpaatPnv6Goy6oLFRndZ6bwLL5C4geRC2EujuHTx8qjhQNUzv2zQqLsA31AqZggfmvHrmQiNL2nojucwK",
  "key12": "61XZFmesvqPP8fsAscyForBby7DGzDJRqnB5XRK6qErETJ3Qc6KRmtDWRPyAQ8ThckkdHgU3Z95ZLYgMWLWQ5GbH",
  "key13": "29iNd2NwtDyn4ScvN5iYTYpkHiYa6KztFmeXYyjTYUmHGMfVF6yURd1fuyakVNMq5AA7ML8FnJHqGk2e7eT6MRn9",
  "key14": "25qGntzzibK3MK5XNJBLEX8EvtpgUKDEmtfAZFueStCSrJHzKAsmiGY17aQGU5gYjkae735ZLL1PmtEizapjSQx5",
  "key15": "4sTdTfp4ZKGotgcMJDgphsK6ZWJeBgdUnWK53jny36L4CYYd1nAsJKbeLFUC2HbZ8iaahDzi7Z5UQgWuRir5UvHT",
  "key16": "3uFmFxdk6MS35jVHqajHd6MTsgbUv9mWsJqmX3bRZjC4XSCrniKHu4gCqFabDv73Cx6Vpa9yJ8BfRf64fLfAyFaX",
  "key17": "4XyRnWp6eD5ZL52PQ6Ac5hBgxAt5zdDBFdQsNjk7U19cyoLhKanAvqg8qJS8uKkyiqK4QssPKCFUcY5bsSL54fMQ",
  "key18": "GuydpZJDReLmBR5ebN3aZ7WPfd5GPDGb59mCqgVWUbtEMQetMY2UUddczCWaLuEJwLHNYBbKN29unXhqi1Stwqz",
  "key19": "2wJWKcd2xtvJdNdNZsTi7wkKJ1UejiyNVQdAx6CBof7ggNoofNCiYXvtgcMuqAtNktESofbNb2mepBNXUbAk6LCR",
  "key20": "2tER394sw4bSfWrv8LjD9tp9q8PmgtuBjM8KH46waE1tcC6nT2HEbZDpanq3q3i4qC9tgN2yaJdNWuPDjAPDnqN5",
  "key21": "3bkNwa7WHo9G9dnTAJbR3RMHESrAdi6Upw1R9LdB1V5TJSjYuWgz1AW7YZ6Vy6ZDF1rpu8KvTydGN4HRNe32siSc",
  "key22": "u9oFeioJ9RknsQxsSZy32CBV9je9KNGvPHKqvb4c6414318qqLvdBPhTiwv5pi3Qte346y8h21FWS6KeSqKcYX3",
  "key23": "SqtR6STHDVbafXijZyutRWeqD2AVFbxs8PShGsZxCYKuGRutr8VrraNC7ETxvWoBwRJrTZFah6Dv5EnmMQ9yubk",
  "key24": "4FtCTWe2acfLCaFbHgbnxLMJF2yJf7BeQcSGndgLS1X2jko8FUfT27aEVrcKNLUPtkijqfEGkY976ofoCGQGTwW8",
  "key25": "3GdFDogPpssiJK68k3JDPPvnBQbSRRdEgHFP4VfNdQm2ZDV6pxXsB86x7cWw4thEcNfhd416Jv865sXrSbKVtVFR",
  "key26": "4CGUe1zawzPmStdcvg91nG6oTWjkbWgZL7PNhFvhhzrvUNqoVqfkgsb36XrFRHXDabD9vguavoSSrvyWzAcjozoA",
  "key27": "4tnhAtANZNKGy8ssJCXvL6BJAkseru2jH1f6T2WmqaiHTFycodFn5c9AUtxDH7dMK4qK6qJWVViwXfZQQUJHj8hh",
  "key28": "3dktP44xEF5Tk4oiQNCbvsjBY6f9c9mio6n5qkF7JVmJC7Nfr9ChMtLyrFZZxPupBzWstfAFG6Rc2RbmD4gWCbXr",
  "key29": "2RpHyFEUcsXTrhvSjk7Qx66sMeuZbU6Uj5wsyXiXfYC5WhSF8tk4QtFNftSmnpXkqLToP6uGoG3ZKGNyJuMZ2qfX",
  "key30": "3cvNysVsDZbxYS5BH9raQoXqhCKCNRv4noxA3h5v8GG8mefRL5xuojuSTmM51XAjhR2kCbUNxXQsTzhNrHgNpGMz",
  "key31": "2amEDP4sbLAhyVG8XACXKym7wNugiN9Y3wdrc4V3JbbWonGVbL1Z7XWR4tysLfZq1PTLfZP4s359rKYiAGAYJDb9",
  "key32": "YmHtAEjPW4wV9P3e6PRAUFkTZDjZPsi8khS7wpNwCk9qgy28F19ABZUVmmXwoD7eUkTYZxgWoitLtVuBjDffLB7",
  "key33": "3MNFqLyjwzu29HfvKZt3d2sSdz654BJiqsaA6AcrVUjFR4JhzR3hExZnTZ7HiBS91yAkJKKCvWFSSZcenonj6Lck",
  "key34": "arhvq8q75jvY2ms6cGEpUFSwFp5kD5LAHFCyZpbuq8CDit4D8tARgHgGrbqqsqWXaUXqSuvbXPHCTcLWWGiqce1",
  "key35": "2imfVhBpQanNMptXugchKDfFCU7DpQKHdm6pqpUjnr6nVvTMTLcGgkwzpgWoLiL1EDEizbd7f5X9J2icUmSpnteU",
  "key36": "5x5V7UDdi11MfZvYDUbbkHcjjTuKT6aVsbnPG8hPYxU5DL7Av9AAHzXjwYQbnGkYSSqA8B8TUS7CdYC558xMH6Ei",
  "key37": "QAexKaHjZZvXNkCTbJWRsaNsXz7M2rvBjNHvtPTA9wECqT7jkZMt9cJYabZyT2wRbfzxMvfAkpqgjiduA8QnXYq",
  "key38": "4Zuex4qHsxhSd4cR8MHcwFkSf2jpLYbDTTkj49SupYTdSVVihDLBFvfCtPWnosaEUdP2ew3ToiChVdxhxUkfFTR6",
  "key39": "aiN48r6WApBa1h7TFkjmuSE6HXL9JyMcnGCxkX77ARPHUTLHxEabXkF5gENToFBFvFK5vuXP1NoJ6Wkqt5B2FHJ",
  "key40": "NjJMVZw5jWDDv5XuwUjuWE5oaoYiiqjeioYwiLV6SCwadnd8H8pa5ygPKSLXbNQQY6zSrfnxXMtHU9tbuwBPEFK",
  "key41": "646G9AHkU7XckTb8BrEnn4tZ13pNyJhahY6jJUtG4SCoB3qhb7JHzQieaX5PvjdjZu1TRJfNrcrT55v295hMww5Z",
  "key42": "5Jg9zjYQ1bBFCkuVZEzTYvXaAN9EBBiyrhRvPPegEBWVqKfMuiFEk5uZUMywzW3n7UcReQvrvKpWyaeXgUWXjYAt",
  "key43": "33Zz9hePcSuZ4wnUFzMm6ojvQ66qeiyRjHFCPmZ4NisiTKqUbAH8jMU6G6hSqdTMfknpbNUruU49dB7uZQ1JMKUd",
  "key44": "56me5zw6BR2mfVgfz4PnDdXAnfAPMcxzYj4WeabgHSUbyrtEpQxRegL2P2Q7rmqFkuPbKtKLhbBm6bFaiTEMN233",
  "key45": "4jCpbVtQbhY6yXCyHDeq38GbAxFz7BxxGh9TcpHCKjbRRpZVt6EWAMUk31oqA294HmNmih7Yo5EaWApFLvaYgd4X"
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
