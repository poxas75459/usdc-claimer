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
    "4Q94fps3YhsKA7eVBc6QUDdmveunzmTfGzaEoHVh3FgSYUACjNpCt1pRh3q7bu53gs3HEHacFG2ncbBMXGQdsgjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P6Rxcy7zHUgtWN3vVeVdLkgXSa52zxffQiZNjrAvoBJSCJLm8PCByYAVrjmbdzPFd4pfAqW7PdpzgcpG3XVc7GF",
  "key1": "5Bqw5L112TgUhWPB3nJAtMdpfB1GFpX98r8KZ3c1eVAix1sKbtXHyf3VtDo24FFnfPmRCdEfkv3XYRkKR3TeSAVU",
  "key2": "EVQSBFwot15Dct8F77FD7x3fHX9dHR6j8JVo7BYFXqnsoWVU1cwXbQdFD9HcfmCb7gP9bPgrzmQjziDRLqURgS7",
  "key3": "3RakZ8f2uH7fQ3PcNCLcELXWPxkpP1ntXUsgvR78kAebrQ4fWq6HSxCaJ7xHpkYRKHpqwvAopq1od7Q2ytEiqamR",
  "key4": "dNyTDUmgcPj3gchgd8JzfjWmT5NbQd7SCBJ1NptFS7wK1jhaD46ML9MZVwzuaXf5prLGhH4vShkSFdfSSPuCyiM",
  "key5": "ppDhbBQuRyh4LXVfMQ3E5mATi5ffCJrfVRDoiLbqufPbmDpxuaoLBxqZ64oUq8pRZAubsFpLirAY3jdgxRRQRTB",
  "key6": "4jQbZzDRQGjvu7Fj9ynSocwC8T71MtgHNvcs6Bh1uNisw5q65kkHc7N3oJpiWzdRBnpykwdv13WFhUjrgpykZZky",
  "key7": "3tXUbb2H6UrP3MLC3kM6tCH8BU3SGfrAo2rdhv24SQot9BzxA59pjAkLqUoYXNVWPBTB9Q5mndFyFYCgcPWDi89Z",
  "key8": "4bbswPFDLJUqkK1SjYsjuioxR85sThjhwgTdnwkiCLcuZYpUSm5tRQLFnEU2zLwTTDgsrtpwLVESsWyc5v1YRUiZ",
  "key9": "5BRzVoxmHqmtfYZPTZ5CdzTZmjdCS7eBZVj6iGHcVp7v3GnWYpbCXCPNzKr2jrQDskAhXNEFJK3Li4NTnTmk2BvJ",
  "key10": "XbvBFSfL5iEATgYGbCe6xLKmLYMiuqAqpqR71H5Fc75CKuYfR3xWzS1BKTJWC3HK71DCV88JsXnpgPWLkoC67xj",
  "key11": "Rgtd67qzyEw2LnNozRRzAKRWb7yiSbA4EARwULnttqWa8wBhvFMyLigNcqxizicqJCkQXxtZ8fVYGwx7RSyNuDY",
  "key12": "3JP1SqnKaVV1ANy4bGoB2oB2yBCzdHwdwn1zrEJbaUdvRbkqAofGiEbYWQNCrgGQyqPvohQpkYJKZaVnB8evdfFJ",
  "key13": "2ewTsRPjVbcqH8RDzhoLFnEBf89c4DgJQMREg9hRz8NWFGeniuSENdxZJYn6R9GsxgCCgN38gSPLHpejtXxkKnsd",
  "key14": "VJjMb7B7CKkcy1dfwAYiAsKaNWTwz26DYEtXUrrxJoS6GLuhmLgzrruYfWc9YJpKQQkEAv6niowM5pwbtc9PA7P",
  "key15": "33wNRhVyc6ujCCCxAKjpV6v1ogja4mcxiHfEgDCHYsdTjqKHYnXxKvzq12kTa6K6PvKGHbeomvJ6JrNVPqufaYCw",
  "key16": "pT4fNeVDuK32iVnsLjhumE1LbqU6XbUxhXFxUixNWEXZw3GWN6UhgXUwwEY41u7XYeKQJA7BPe6hKJsGta4Yqfq",
  "key17": "5z8D7Aq7Z5JLcfwLAuF39h8msQ71c92HxuBFAM3KukZeuRAFkTejxorEATox6TWxYTTKw4EPhFEuPr6qA8dvGokH",
  "key18": "5iWMvDjEZn1MGQbYiD9KZChLGL53eC6AAmZJ4efSJDdAWcJZ8eduavioMPK9MdTYUzvfL5MUU3KusduLjGm4otVE",
  "key19": "432fYAJwZh6LkYo4QFrzSVcLmjMqAhzhwcHvKaCG43mrSFaTWVtWunLMpgGE2vKRiRg3arZ2pP5sWME9MdTd26xB",
  "key20": "6dzBxEs2TN1rrRpBYgDN1aD8mNjAVpCN6uxZdudacbjKJHTy1nLbqL2fb4vmr6AnSNq3TuZf8chctXCcjoWzBuh",
  "key21": "3W3j4qiwKbfsgMvxLMUFrm4L3GEiUuWvg2VQUqfqRJV4YsyWYgwQLvHudL18ZWSy11GrRzqS3rTQLqidx55LVmwr",
  "key22": "4RDWvLcr6UFkUHQd685GvDEat4Q7pKgUrs53ru5ZoZti8s25F3epRPCe3inPP3tovfcXc1Jjj7pKRQoy3ZfwUUnA",
  "key23": "2MVUYsy2Np2mBg6QUeWRMQtW4tfF3KZU96ob3oYkQP4fGuiPf4TNCziZx7nCawjYqw5v2kszwYa13h4UvAhT9AbW",
  "key24": "4NxsY5KqvorfMYiqpvX9DUTJgKXWs8VdEhTPA14jDv9kreYNmLng2e8a93Jgr8LtJBYjz4dgDW77KMqBrjxR5kzw",
  "key25": "4TBNu3Ck5j6wrnXmAYRGTAyQPDFZ7U6ebLFombE5RnxmQgwKJuRi7jV1hWfet7eK1QWscBDtq6YhnDW4GPCh6258",
  "key26": "5XeZdUMSDLFiBXc3mddvijDG8fP5uxPWm6jowumWHp1vRS8hhHruNBWMHzEk6Jgz2fZeeRj4ZgNNKtRLakJRhGDV",
  "key27": "5g6FFd9YPTxK6aB2WCcjTjmbBbQppwhek9HzMMpNmLPBqLwK7zQaD7RhnLuDrLeafPxMsrVxKGQk7m1UxJp5G4Vw",
  "key28": "kKPgtZiee97LyD2zZvjrdAf3zSt3jG85TGg3jdyJ2t8GhwuoR5x2EsR9V5EGLsS18SWTa7wvtEmCQUXQRaaEuSK",
  "key29": "3dpsL8VcG72nqzGiLmPmtBYXWiLeosjRu17wqbJiixxR1xTvhjCybHGdL8qoCxKFbAZ42PLSXhziChQ6tJxgsbRK",
  "key30": "yGkmm7h1Br49pFBLTi6mS4Fzb3es8MXLWeGzJpfqNbb6ihonzJFU7Pz4F7ZgVpDZyZ5UELjbXRmwcdvzX4nzqQb",
  "key31": "bo5komoyPLW64hZcsxmLAB1E9Mjc6iHdAaLagm38aQYa5gKX874ngR7kZNxgLb6dtw6YMAqrkm6VRFswUNommVC",
  "key32": "3t89SC2tjYU7Ti4Kkk2iVLf3Lc6S1SjTCSBQMchCRm1irdcmLcmu4HKqnFxhqbYQVBxtf5cGb8BwtsdhDnF8yvJm",
  "key33": "21HrDbU5SAbDPHP75P4kMKCqETwDHJyYipY75kgpyAAPLa7EnELJy5UapBhpRrM5vhGv64qvcC3ouZxqK9RXbJDC",
  "key34": "2HRomucpT1QkCQSv6XqRw5LLVgkdcjJH2Q6E99J9YhpTCx6ZbmK3ME8ggmY24hS11bhJ4PMy6Np79RHtVDG3v6sK",
  "key35": "bi5aGtKZHF8vss3zrRteRDWh5Ysk36npvUU13SwUu7C7PNRCvzz7Rqk78zg6y1FEPrjWzsPipmQozPLUd82vpQz",
  "key36": "3S6yqVyN1i3QiM7mwk269UHpbPP3qpwsm6EmW1YgQaGAHtKvzvRZJy4WKNGCsHJsQfskNHTWrViLeCvQEiMiP1gf",
  "key37": "5hLh5mffEhoPbYWgxvkEuZN93D8eaAdZ4Nt2bEuX189fasoqAjT9iH12hfH9BPf4bmB9GEMUrCWXHHpCnNRURyta",
  "key38": "9phGr3tAWfMcbHN1YeTxn9PSbcGhjzNtyPo8fhGxmpFW7KQqxH4h5F42cSyk2juayq6GJqHqGAZEvZ8S5FQ69Wf",
  "key39": "2v1mkmTgyP3kZazhvo2Xm2YPnvQGtfkUtqvaVZfrztLv9GGzP6VXcKdScz5TpwYwokgeXMsfZXAjG6HYaR1FzuUL",
  "key40": "bZUaxJEMW7Xk3ESfpnCGCWsYPqN39PJh6wDqwukBbE4RPKeZJRxZeUJK2bvJ5NnT8s3SxxcQRehKtAWq7CrqD81",
  "key41": "33dLtc9M4ASHUe3DzonDqqghPGu46d1oMzBWgTpuFkPQXwbUCYKPQo8Rh3vBRvJSLZcpAyv2QEH3dB9EJQQWQuJY",
  "key42": "5nHHwVNty9Sddi6naAaKYdk5rfr8YvVvQeQ3QiguZwpkrPAAz9sruYzvMyZWEYpmdwRnG8wUYK58UkKReDPy6Ev4",
  "key43": "3YWApdyUTUbmag4Krtpp6Jxyxs1Qeur8Pz16TX44mBmi2KnrTNuLfztyd6ogwDdFN6gDUV4EAMVjp5jCwPXCgZzC",
  "key44": "55T1GsU9CGSpLjeXSCiMu9uvnr6d3J6YNtoM6gW5wwsA6USq1uNgZX7UmBtRSNmhe1TncmvrGHQmjamWMHpJVGuh",
  "key45": "Z5HnhzLWg8jPFkxqRVknxCSwEZ6aqdnRqgDsTrs6dMUvUKVNPgME5xMHPNo5RnUdxSpywAibrYsFYFz9uLx8KUd"
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
