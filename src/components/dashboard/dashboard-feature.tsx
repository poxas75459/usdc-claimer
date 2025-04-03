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
    "5rnaTgjWK9fihgPxtpjUJSo4vszUnM8AxhAD6t7AWa8szEA58NZ7UvDPXfomyMEF9UM3GNREHRdfUe79UZQzH6y5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JTj5vPxiztCnUMmE7HVgccJSmanS41dEXLrfvZhCazHv9DKRE7HPBQiGtNa2HBvzrsiuw4rjbqrWjFm3p3nnBy2",
  "key1": "3iyT9uhff3ijk8uNJSPgiJZuQtTdh67gEkqUXGhzsRBEbxKKkHXX6Vhx3xXBA4ebED4prgduDbL1oW8X8fpg17Tx",
  "key2": "2S4g57yyavxR3UydyotM2qbwRGYtELs6YwyHtWDP3cRqrQYWcYTyPrbXSCrhkCZ4c835f7pXf5kEhQqfY2z8zNNR",
  "key3": "3b8huMEV3MgryMA8BcFuJpeHfnzZ4VTFNNo6TGfvyMQjH1oaf34szZvD5mQpHy5cREgTh3w7YrvaeFy8HQgNzWrt",
  "key4": "43kcHzuwBmXkh64pjcNmw2L1bpeCdH7ZyKwVZScHPFikEzJNapkydXVTWzDFnBZqcybP9GxPpjUzht3Tvdvm3HrM",
  "key5": "5KD6Zjno4PsLfLpQDUbejNnZhWb4kywt5RdCt8btUQUxUyBtfARjDo8y3jwgNQVbi9CLXAFYChhMqFJqjT632pmd",
  "key6": "47QAeA19h4AVYx7oDH7wTsE6HDTfEFiqo58b6zNaJj9TJ3SEskSnr3bwQsrXMzK4PwPGr7EqrJG7g6uySohHRhtt",
  "key7": "onqWFErf8NfZnhZVhagebF55E2s41uB5DEgJrBEPhqAfV1S4xQAvxRFawYEro1uFuvePd59fKaX4jzyECH91GTf",
  "key8": "2cbKUG5SVrdFCUUnNWttSXwupRBmccutiMMbNf5mBA4nqYgTiWTLZMVa3oXhaPresaRysyMPr2jdLppooz7njGY",
  "key9": "4foeesk5CFFwTLUiKgnwzmyEnHqxCB75HqtGRPtCvdgsf8yfh5kZgmvQTtsfjWT34SicRLERAvhZRLVkLWd7QgeY",
  "key10": "iXd8dMogFa4bW1Hr1m1hGgtv3MnFLcwngwb4ERbyBQ66haeqYzjutunVBn6m29kNxVxKNpJQnKNXoEPnV5C64Hu",
  "key11": "2z9KJ3cZLBqk8KHvjSW8423VFbeap3SQTW7BVafHrU3gmGpxmjvvpqxRXnLFtNHcqmZkhPXodesVJnrn7pqL3rKm",
  "key12": "5iuhsSNexMdk1iAY5EHn5V2B7zmRcVHukzFMW6EPbwoz6nMUaVZHv8mg1J9oHRJ9P3EQ2vmQjWQGEFmiyDhSKH8W",
  "key13": "2Xt7etgb9JES1pPpnSb7w1yseVf8NovXefu6L7HqgHNzyz5zNfsSTifDLMyzNKcYvdQdchzfrBDKA3cyQTdegmcS",
  "key14": "3UbjL4drnajdgLmwYu6Vrn3V4wB5KeueyHMaCwTRbBMkihpxfRZbfBs6L5wwGZarUEZ4S9B7rcvXu3vjw4XWyFzs",
  "key15": "7acKC2QHzBd6Z2kQ8i75zLYcNDzjgDL765HrLw3BDnDp2i91Vbd5ZWVDLQ5JF57TiRVW4iFkF8Be5v9RnGf4Wzb",
  "key16": "3kwLKyR6YAv8W5qXh6mvhPSXR3W32uLZQ6gzjt942RVo8YWhuuAPQymP1HvbcDzNwFkFX1iiJKzvtoDTCk2o4WXc",
  "key17": "3PrMbA5fPEbzzueSM4Fc17LUXiTMonKugn34G46k2HiYwkEopSV6b4xfFGkHKpEVprhzdo5Nkmk9cJFKXNBkb2m2",
  "key18": "4TgX4Vvgw4zESnESWXwUm2GruJLEPH2MUXvSKrKTb4s6WzbRxDVfFjt3EDXcZvFEY1J3ojHdKgJSHhQ78Qwg2ygc",
  "key19": "3PG8qtbY3WsajNjbZcNujU4WHUqeuXvtcuccgPMJHfqwsMZ9VnqmJ9KeYx6j9H54Yab5STtpm3pxwQTiYpGQbhCS",
  "key20": "4QwHW8ny6apWyU1XFFarsWutbTr4Exx1DxLhKLSeodvVdxRvfQdR9xiYFExkfp6esXsicNzzxJSZNNRaddXNfUxd",
  "key21": "4vj3ByxZqZWQpbVtPKhta2cDZQYnDEwSbkHtwqezAKi1zLXXtrx5dPmC6ueCcHrH3Cjutr4aSw7avox6p73Rx2K3",
  "key22": "uHqrkB7iPpYtN2qKdGSNTCaK89e9EVXEGPuGJBRNwCBNEScrUnoWSJeCduN2V1HfYnZVKb9DnQMLAgiWQvPk8rr",
  "key23": "51WyG3Wvvfx6JUAnHRa8cGXgSAt8DX3ZpNLvbYPU9QgaDHe71LyyG5KMjeEFQHYpizd2wiDMKcLxJmubaD7KH9oM",
  "key24": "ZxNaGKrVGum3orniHUubc1zGCeeKY9bNh2srvkfTh4NQroisoFqyBRJqNKBn4P5FxAWCH4uaYG33bemv3pjC6Go",
  "key25": "4dwjqqifXXGXYLnAFCko1rgde4LPtswL4evrXVLecwAGcxbgJr6opmJV6zG4ppUTGgJLzSvB6xWY7hTbpuG6yEMK",
  "key26": "jUNG9FsdfMLSL6D5qksz6Wio4ZHsWsuczRrF8hE93YQJxpRfAtCCCQDMHdo33AZ2wWyX8WYE6HSTxR2skjfSdh7",
  "key27": "yaqUfRzrwq5yizM357Z25JR7HbGA9jpuXRfzeQ7wb4LAt4NVJb72RNLZx2eSCyAWYFCiBqgbzJQu1NxA4M2HVvu",
  "key28": "66hYfwbKpcWUecHcgxqVgXsmuKWHgCaFxR6gS2M4cwJE8wfxpJ8CSYJc42CJJ9CWAmzbfCm1qtZNHuLJHg6y9hDS",
  "key29": "FQQ3piRGLyo5YKRAGR75GhefiqC7cFRVZydxrLU7gP8W8f7XSQRFmB3BxEcRVyCVHjG2MZ6W7H7so7uyULjajpC",
  "key30": "5wqdbUUKrpRC93X1nvosajVvGW99XTVp1eSVrUtkU7wtbBTC3fnodXmbpFRBkNJBj4RC87ry1s4odT3jF39MwzV7",
  "key31": "4saKxgvXHKm3esY4oBpVYk3Xh8aS2qkvFg5qEx7ihQPq9bij48NK3HK7XaNtXMR6cQYxHKbX2hMrJxRy2tf8KzyH",
  "key32": "3RN654iWio5jEniDZQPnw3nscqcAffAfKeA2tWm3Acqt5vLURu6DeKyJtTqNUHLGBJDY33oJsEscsnFhPaDqt9pR",
  "key33": "ahkWApsFJf8rvwu8jPDqSALAnwfhb7eTNVXpR3PBQTpDNXbsqKoC5vBwrb8Lj4diAeq6Afy7F3mJJiYbnN9289K",
  "key34": "3eRL5H5ZDq5UdmgeidXi7KLoFmy4GqnVhx9fCLgzVFugp4vFTSWrVDFHNrt1aUBCWthyM9RBBycD69kGWempAa3c",
  "key35": "3WjxniaD77RbTsN6TLy3ZSFfJ4kzLitXg7yDftJ6vA4d6obphJy6rLDmLE7TWbNnuXWjuxJpqe2ZVE86t9caDxoM",
  "key36": "3qKKTAASHNefJgeMHzqmmzEC5KceoqWhqwEkyw2YWAHUgNaQnkaz5aWgrpojmiFgc6cUpqsQmb6FbKWKKUwpvi1w",
  "key37": "2At62D89NVkwBKTJbyrB6tjELjSM5P38gkpXb5kJMAiAibAaYziiMh7GXxRZ4BHSPBFyU7FSX8hokknVWRSg8BYN",
  "key38": "5yyqDuHA15P3NgAU1HbEsp3wk8cfXBEFbTYN43zJAg2L32NZjc8pMXx4jrDjkb8tnfQxjuCz4gXYsBoSLT8akfZu",
  "key39": "jnvNomF33yWD72DWevh1xEheGeLrN8UCnidK1Xxz6rgkEiMbrj4vrAhgiUzrToSKKocJ9H3eWaRwsXtP8t8qTZp",
  "key40": "3DLYXDc1TYbH8ZBJXwGU5zcXX43o497wBGGVWXW6sdhPEGdPr5ffCAbVUdfE1M51jdUfXedkMrPUAZsD7Q2pVYVw"
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
