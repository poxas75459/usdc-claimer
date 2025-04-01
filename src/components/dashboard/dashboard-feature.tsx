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
    "2FPbkMsyKYvaA9gYJGKLCihr8gpE7upPCrKhUc6Ai1s9HWXgSqFhL1bkJg4WxtNVTG6Kgeob8CGfRVFMe8h4AA5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jitUFYpNZE58jpzmr9PsoPQAB51Ews1btDBpaNTLxrERSPLvyPgR9iwdnSbPXfUHiMjut7apfuHZm5xEHfhtNoE",
  "key1": "5L7UwKoiVryFz7xMNecL26n7NpafWCLEKQsYYiKLeH1kfrwPsw1p14F4DvhkdNZQnDD3UXSLnYQFrhZgeWBTtD14",
  "key2": "oaeuS4XPzMmW3Wr9VkMZJzeUAUR84G663YXNSZqFoF7wAq188oXxSTkxTp8FPRZ6bNmojXhsjuSopWNVEBKtM1W",
  "key3": "5yR5JJ6ceYAtmzPDQuHeC1VkuXLFsbFn2H2trNxbvHj53rzejRHydNNy32i8rgfUvu1FQkvddn1QDDRQi4hwWXhy",
  "key4": "4ptuvP2zFHsPqZnfSWAy7hUVjwJa5PRqXGWBTdcMvH6iTSszj7Ak6LYZx3moc4UxEgMVpo7L3agE7i9PsrndYv6S",
  "key5": "5T88erbthDp13a29Npc1JQ8fdUthsiV2e7XKV4YSBcEQ2xL21e15z6AaLHmdzz7anRLA3gstkreVvBdxfxNz21wK",
  "key6": "2kB1wrJjDWtR3ty8yv7Qcupu2Z48U6kzuKKqUp6rWCdDCZLtkmYQdpxit7Q84mxytWkYg6wdBGYf9WiJcZ1kv9hS",
  "key7": "3fWzvQX4RrAvJCWKPydJX5c4w2fkZj5HNsqzquw1MCTKNetHCw1e3dotER9yg8wPSoq21efrYbPV23qisiTEwR8H",
  "key8": "57eMZTECG8wChBn1N19hCTFkctgDpBA6yPqNph5JSVnm8aYX5KQxfo7pmzBERBrZEKTw6z6krUBoE8jCULd1MKud",
  "key9": "5dXXpj2CZk9Zm9qoKLqtgReVy87iZB3h5EBU1wfnTRousD4ht9cGwwDKZWgMaXns3G5gzn5zZiNz42tr7J8r1omh",
  "key10": "4AaeP8DNBp8YpSL3txkuEnxnVCMwv98LpaKPgCbg66oAvcYGsbCnWLmYzhrccEw8CXcvBZr3E4cTnq6avNqMD9Ms",
  "key11": "3LzoWBPcSsERp1pL3urURXMbrzLQsno1c2tnD9EVnv1axLpH2zsQ3Dy6DkMsvr5Xo8PVFDAxahi78bXL9cjePy6c",
  "key12": "4DsGQvmXodfQdgXLK55N81TbAGbXimGiAtK1wgdwrR3QDB9MGCrFc9eTPsutLSBQYAqNfjpFHRJruD1TqRRqv9bX",
  "key13": "4ZfLfAkPLNzkwh7GUcaj4K3d18gQBSUjbNdwH5az5yPzH7uqFcNGVfUtBgFo3JUVV8a3tCkfQ6mtAvv5ExUx1pgs",
  "key14": "1tAkGwN1QwWPxMBjUXhhsyGKKfp14jCrAYzWouCFPX4GmkgnYveustgBTJJPWCtu3G5VGd3FUuPoE2LhxPdkuRN",
  "key15": "55aFF3AFJ6pSF83yqth7k8cmeqhtBmDiqKX7dniwfWjn93f7J8TfwVYKa9mibTH9FgKRToNUZt5zvdbMGXjKFghD",
  "key16": "2T3JxAMMTQPPiVUy5MARFbt7Cf8GGEuRc6vyoBKw22etMH2WqrJLG91z4umdBiPtreUAzCb6wYu3ZiCXCN2U9g92",
  "key17": "4kY5S3eVuw1QXMinwoSyqr5idhK1ydGdvypJdqZeE1zmVY78MSxwPdZ5AGpcAVBrtyvsUJQoDbpHYXGiGtNCb5o1",
  "key18": "5MkigxyRbmTVtavqLHBPdoozmekLfoxUCcqLCqpFz1zKffQidMTDQP1CqkuJQw5fdey4QsM4baCjS1aSb26jJA5u",
  "key19": "3HkCM1PdmP8YMB7QzCSGdxK5hPEFPTy9zg6d9scVSyRGecmjiQtHCDk6XkC8PbBeDpKNHGbG5b7zGx76aZ4iva5H",
  "key20": "33Lm7DwbeN8cWp3ZfEPHdn3LqDjgLxv7zhCSguPrMFK8mPyw15X5q9PXroL31LLMjxXaJ1jXrovKLjwxWQW7oDrW",
  "key21": "3mfERW3Qi3ytZHgcumJraRwnFnyxE9sK4uSCQjfU2gkRpjyP5vCw4rnrPtKkBSTB3rBAdhR8QUjw7aZiFGLoWRQs",
  "key22": "4XiwoDwTmqds387g53TRec9GSjUbVEh3phdsvGWLUw1bpz7eGzKETrR7myrYyUaZKrszPiaEWrRiuFBFQixze7xU",
  "key23": "4u56ZhXsUJ6SaJYzMaKsjLV54TZCVhukQGPbLYUVbtGD612TsrQ2RQCrVbeS9P6qzYVBZrwM64UCTCzcCAfXiCjK",
  "key24": "3dfh3LmWvKbZjcRQ14s3hebCu5peaQ84qsqfpaPAYof6wHtpyqkpZR92wVzgqzbdazev5e4NYLdDH53XeX6D1yc1",
  "key25": "5ycVE74dLrBSLC4M9YT67dtA7tHEf9gX7DuGAoVQHASQj4yv8iWxQZsjZtjVZMuAMi4paYEkzbouAQfgsc9ANQL2",
  "key26": "5rxq8FZi4RxnNN5PuNnkQDbSm17fFRDhCXx1RYpGsfSFwWvfbKR1ANYjkhViRSJ4bbew5RhEBtu4r4bWSw6oeb98",
  "key27": "3RdsbVvF886H85C6ZHoopR3pLXrDU6KsS8zhQViaGSzz7Upis5qyRTj1EQFrxtY8ZSY8nFo8s6uEyq8cwU1izfLf",
  "key28": "4syKWTT4LmgG6dY1Kj8Am48QTPJgKnMD5sywhLDa4Wv6stPqxGmoycZYC5jtPoRAAvH97Teorn7XPBJavFnGykb5",
  "key29": "5knpBEZ4DZgtPzStw8AJxnLUcWvMBfW4XhJNNCCEyvhWpKr4hW8YkSCAuNqJtyUKvJ85vW2UqHLdVcqouKWZE9yA",
  "key30": "2eGkz3feGbBcvM4uePBwEeXcJwcwdEKNkMbgCg2mLpBWChGexbrDDPD5wdFTx87dgRHhixp321XusDM6KX3LxSE5",
  "key31": "rjgWPE58kmZyTbwj8q3HPynSQZNwHjggxU4trPbtD3kbVqHfyZ6Nsv88AV1CQrQhn29j3mGcgqvypiJQucF9cS8",
  "key32": "3nR9oqWuqbzUsMB84unGuGTACBBgjA6PuYiiLHoL8cmS1m9vLLVUrwNp79RyhVeVNFfpXrt7dEKeLNn9F19EdkWW"
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
