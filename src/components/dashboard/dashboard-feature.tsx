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
    "3Le9FJhgPowKNPQCVGLRFpJ2VwtmRP92cGVaBijLUD72uv7hdS1c4oVgUCLhHnEL2K8nU261zxfcDTQFDPJcGTGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s5TvDB1jXzeMYfPQZtkWsbLWbM196bvKebuKdomPypfkQsiyZsnhLzs3eW3CoQgPxjR8tGJrpNACzPQQgNSQ71J",
  "key1": "3JZKE5NGx91VtwvB1DDQSUdEGCrxCHKUY4djNn6eyEB6qLduAkMgWYDrQmntMVkHoBqAhhK8WFAMMhNaXpEDDxKt",
  "key2": "4Bp67FZpvebZvriqymYCFcYY4HpDLs3mCAFfecLBvXg2kWJMB9MJWeXezSxc6upwahdJFxsLpgDZq3MTEMbcPHru",
  "key3": "2zdxd492Dy7WhuyxRgn7PsqyPAqJwfcuLwTUV6pBXdm86yk4Yff6B4byHvkNhxGtU87vd8hxkYDVvcbZXaTja8Zt",
  "key4": "KXpar9HLgufc7z5JUyJpYpDZ5bstSgYoQLx4J9C6pBZbuQy2dFsFPVztvVNMijKkZuUMyZWmmEaEH38hRvjviCb",
  "key5": "4vXVkFdeWhqzVRNZsbP1SB69GpasKNg77BHjGrYGZLxsQjwPjhb22qAP8irg6xu7L53HcBDdo4VEXzAyBpzW2DMD",
  "key6": "3C8hzc3dQhAEuVMyPw8txNL4xrf197o4ALRb8rbJ5WvxBLygsqcy4kAArYMXp1i175EtEDNYhZvarLZAoC1hHyBF",
  "key7": "oeaAmKRrGogcsAHhy8dbvCrfAkfNVD596gmdkrwpEMNjNkSUeAGSfQw2wGRBHahabz8oVZ5TdZ7N9GeGNEqALMD",
  "key8": "5ofpUp6CDMbHMxqCRAxyU9YYf6iRrqgpSzW6Ru5DD1FjtdeCXez1a2JK5A2vwXSvRvWtGgv1WYjNUS14xdwKpD7J",
  "key9": "3mjM9yxgXv5cmo252Z6CAYiZp49s6vtxamWJV5EXW4QkuBNGrBDZU9FiWkvdN7S7pDSqErNdqeaB7X3LL4eTpgSm",
  "key10": "61ixFpc8PoMyQgz84BcfezBJcJ6Kd36opjcsDtirTdFhULe5MEvKuXHfUba6RH4R2N93KG7jzVNBDH6kDBEmXfpL",
  "key11": "XhcLaLQC5FhDZ2pkXwN1oCh9MbrhLuUyEH5AZ7dVwwk5h2SmBzbUarBEdniHwwimVmVpy9qXos9mh68hyxYW2CU",
  "key12": "7hVFyvJ3wiqeajGJDeQSdHgYDNMh9UtfD4fe5NBxN4kvXmo1qv9xwsRHXJdgG1mVu4SwBNSJFhSaQ6D4PsHGoxi",
  "key13": "5EBrVyA8uap5sQKBZjbS7Bm4sFi2K5SdCedRKVzJvQJtxHLV8BUAVtwrwY7bAtfbkpWjwJRcK7AH7vVV25P7wfeM",
  "key14": "4YRTk7EmkuPEFmquKXrkZNHFvKmaVtTNqkZJNgbEkRrmD7ZeqSwz6mpxBaixWThJwNyWMw7rZ6E2dANThjZb5jqU",
  "key15": "t4gCpDXx2x37zvkbkr2KfRAwqdjPjouzS2Fiwz7f9waNRHhSYqgFhwoTMd1JC2aLM3EvzbUtfNiUQBaui9xiBRB",
  "key16": "2CrVi2wPKsmw64k7FSaL9RK22qRmkBTK6JCFWWsAZrdcpwqHfoipesmTQJJmmBkAFyJtwKXeqtkCC8jLsSGZ8VrM",
  "key17": "2jXkxar6s729R1t18yH1MbWuYCXKfphm1oYzWhhybo9rZa4tWLcMDUBs4pfFqkwDo63GBTyTPkqSZkY5g4AU5rog",
  "key18": "tXMscxpCxVAmfuayvc5EagbfWBoBXbqNCce1A8Z3L1RYdVmmYrxDM7KDgfZV4Uc4wd4mwrMTzzFEDeY9Qo7a6Pj",
  "key19": "4ktfxjUP5B54og76Zo85XBWB2E9odivVY8muzDs9AWwFQ6sm394WR6vTTqGkTPm8rZ4zARdvNXxsbDZziyVUknef",
  "key20": "b7GzVYsCv5wEEmw4LHtAGkNNssNnmPuEaUXXhjhc7rDp7SoZN1nxeo1NQG53jDHmzuwiMzRh6zb654nCJq6vZs7",
  "key21": "4DmHBjTy3wCkXnY7XS4Gep49MW55pvzEMKV1Xh4NXsjabb7xJGKRrZkdXJdGRRs7MzNsvxJXCoDcwCkJXPnUaTzc",
  "key22": "29yDAWBBM95XWhkssieVASxK6sPzDuegSrwgC8h3wtmDr31jBdMm7thnRPeBi6w7JWQcprAGd8637X4uXMDC4pLs",
  "key23": "btVWGBfuHYtnyW9L8Px499dpa3gKn2ut1uQ1pyfxNZAzys9YbhqDCU3kGWWYEfSToCg2P9Me39o5TGQswDQ3HiK",
  "key24": "5EbbYenS5gGkr4CUoGkXpJ3hcu86bTfDSafdwGtCRAbXGEWzWo7hj9AJzGivcW8oVazE7XqEAsbgfKNnN1yfuh4",
  "key25": "2JjZakLq9Cg7CJ1HbpuGgHH2bDUKbbCgTPuA5np4C3EMbkk9oNS3eRREAgA1oytYPAgbyUZMTjTeoC7sV5ygi6oY",
  "key26": "osJvb34ZWsR5BFCcLwQnZHYcFdz38VCSChjHcE48bBdWuJstyrctfQUKcqTipzwUF86Ee1bMZ3sqXEUJ9zQ8SAL",
  "key27": "64jUh4zfvsK9GfZ7MHTrXG3oY42syct92xSiJe1akKch9no3keTtNhZLcWcjtwdm9C8p279kmJ3EpoRXsWKjLt42",
  "key28": "5Xhwmp2Hi9RJd7evN9yvhfHyp2tgZgeLTTypHLqr3WciiFaaxjQVEcsavp5EbBXoi8U4FniKfUdaCEdiMJATfBS9",
  "key29": "Je24YrHtzJfHag6VFVyuUg9aNCa6Nnx9T1b1kbD28tjvfvhGmeu81LMjQfpofXeqVnZvn4cQESZ6pup3GNCRaLZ",
  "key30": "25kxEC8ftf418bTubLWj1YRxvyvfkrcoo87vN65BKXCtNG5qXAPPbovVrFxzpZ3fqschPcsU1V3nhu5iWurCNkwx",
  "key31": "4PTqZrB2nUHWjPLRXijcLRTK3XrfRtCjykZiGuEPKsRxPjxzwoD7himJjkqQQjEqpdVxnSQVh4UrGKRBHBdSkgwQ",
  "key32": "DWN3GhtBzGkz5QZvMjaVmfE67FaxczT5pFJyNz8L3anpKWiackrp3ELBLMPf1MzMtWka8dtT2y3ACcB6i8mwbVK",
  "key33": "w3aQ8TRUxhs6CQNvUqSJhmz26pSJi5bU5zzYTVes4Gws7aa8Wf145sPqBNVSXmEDKU5P9k8gsybQha7u7FxLjwW",
  "key34": "2gbwYHDgGdeMTDhD9XXFZBQzrMJrS8hBPUjSjkaw9D9HicM6748A3B3CyUZUVRe2UcGhn3h57ACH3kGTNhdqTQcy",
  "key35": "3Pw4728tWh9EUYYhvBeL3TvqQrPqPVxdurEb4dssg2pQrvw8DT51X9Zts91aSjG4xX2vNB85YRdNLPwkerWYqHRJ",
  "key36": "25MDM9F6RiZy3Ldxri3CKGoUrJpk8Nr71MCEW9bw5hD2hcn1TZmu8ym6kDu1W1Vm2B5ioAfjpFALGhCSpKknBESx",
  "key37": "aSCZKdp9PxX8SaUaVZV3NFBhftvnnVodePZkUgB9Du4rRr2pYy6795hLx7dzhnkbkJxNizqGGhXwPgPQBRHomB3",
  "key38": "3ZHLvXyLebSCsAKktbvFudoF6T3FKU8YYMHr9GigFaDpsRMPR69Hb7PfQuLme59BttgZnKnDWDiojQ1Etg4JKp87",
  "key39": "4MAwMR5ZfRCA23kYXebnLK5jeHMYmYkVPr315Saqypb4Kj2KLWNrwaEKc39bKLAnGnuowUvtUmze9RiruKtJhLyC",
  "key40": "2QfkBx4rPiawzSmZEbudiDAoSJgd5dJkzvdC37DJELqqnpK3Lp6e9FRCTiUbvT6qTKKbRy8Yro2zNpUVDun9Diyd"
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
