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
    "4fEUgLopCp2bgjHMk7HwWCasaoW7DWmLCwX2sQCE8JuQvEuzdNgwoN7MkXfsxisHrrURWA4ipdxVJfgk8WAQ7VmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BuW4vpY6pxFWrrL14b6UEZFrdLrgwuiQ54ngeqQtAPhQNXSxmS162ZrJ3mF2rRsKJnV3eoyYwe3QXc28g82XSN6",
  "key1": "5nQuEiq7JYqnGBN5ZGh5ifEJPbnyYpiDJfLKSr43hfNcwmFtHC8YdEbFXgqMTbbdY3CLB8bqkNckFN3yNBucF1nG",
  "key2": "2nsS95k268a4jPSJvaTHxWLLdGSEea2f5KLSgHgPFnF7TbotnTp5WjbQbtc71fQ5D9H7wjCjBwGpgxfZJANxFeQj",
  "key3": "3EwqsmYU7Tze8q5V1mmgw2cwYyzE1iLzGHASvnEsmqCTU4N4xHQDHaW3JVnYNGJqcYzfCbhGJfZF6DPNfMZfmwxP",
  "key4": "3YA9tcWraiF6qnMs3ar7iydfTaqkZ9975LaKgeEvyfrxfgVM4rjmNJQcrfY265unXt8aExrTWg1KM93Anij9PqB9",
  "key5": "2w6hLkJapSHnQLSD792U5kbegs4JnnWxMwhm2AD6VoWKpMJJvnkiaMhzYZfLYuyubn5jtsv32tzXeoVAYVZTzGJt",
  "key6": "66sGFh499a14U3WD7NoBVSCeJ6ovcaQuLvF7PRpv6paLy3ZkqisMPb62HDBgf1MdZ2dyNgtFbB9yynH8oAnpJg6Z",
  "key7": "4p2VkxSAxovozxcPbeH2fPJ2cZLj5Sjeef63Az78CzkAQnCvsHD5odVb9fPExn9sChP71r2QHRjcWTfYjuzMgE2F",
  "key8": "4ZUjxMsYHzEFeJaagCcvKMwaQXAdN2FbkqisMyeQ38MCDERzNHSfrTaDUBuX3Mx8qydak7wHDLgof9PBKSiwnB57",
  "key9": "zTTUFVz6dtsPNz3exNkkGYWTcHDWy5n9JMuSiMcKHq1JL4eChCwS9QBJ8VhGwxg3WywiccRHEpTnoZ73usQZmy1",
  "key10": "5Z3CadXswhRdJgvu1RoRDt4LJYrvp7Sj3Z5ojyg89zmiLRJKCPMioxHnq7Zmss4h1K6Hqu2gAMRikUKozo5UXc9n",
  "key11": "2WMHwVqAXUkfxMcnfKQU2nwmp9PeLocTrVrKMkR2eVQTBMf4UQovjmw6L3JxFr93NZg6qNAc5tiVoFDZFQjzcHWb",
  "key12": "2ZJN5U2SpLtyL7Frbz3Hgb2wowyS5Uti8Rp33cSp8oBaNfYprA24GXH9vcHd2zbFQ3N4aCS7L1Lifsgnkrepmyzu",
  "key13": "2iXCAcEGQMiU2PhKuXprn9vekofGGmx7tH99DMdHM6WRDGHwKz7A4WuZX3zQddPvcVH3Y4tHgxyt2tWgBWuUAhfv",
  "key14": "38r8CCQMbMFsicp725JP7u3tYtnML7XJj81dj2XWa1Q2s2uSPgfSMs1nGbJcFDodDUxPGY9PsekxJkwBjjhHeVis",
  "key15": "5xQAf8HbmKMHqR6ifqJmBEh5sJfjFBd5M1nhhVdegQoEJz4j3k1nNkSguJR5RwDwUWaDKDAwaTBvpVNFhqcLphir",
  "key16": "2cKWS7aqpe76FZUQ1dCK7dMSNLf7xeS8eseAqVPUHJ6nfNsqCEPjdduFu9gQ6ynmn9t9EtG4QuCuk3wWjvUjoamv",
  "key17": "38LADodxp327KpCZu9J3v13ureUwEetgKyDDMVLX4QwRANQghzzwvLEXzSfJae2YSrumxpVmn2RAevvxV4uVwyoW",
  "key18": "38uBBT6DDXW1eYD9dWxUgx8xBv8CsryyA4NYAAsFeYNHyb1KHpoEPjgWkrVQmVZWcA82VLVRKATC3H3mBnMzvcCK",
  "key19": "64EJ6Dqjws9o3YyyGfa2ykgCuXFpLaaRsvzczs62o4BBFeQgic7pRvTaex3jWn2Swp2xw29XRbgP5YxAQjFscX3X",
  "key20": "4d5Eq5wAsJ7PJ5ECYy687ncriwSDxoeDwPSQ1eV1dvrv7KKgc9aBpNy2EDk6Ga7U1JygfL3DdepRoF7rdVLCdzB1",
  "key21": "3QJU8mLrU7x8sotYfjRT1wHNBzmiSeqtUry3GzGAVYjDNoXNZeJEP3u6Lk8fcFeEMH4s45NLJL1gae9jArr47xuk",
  "key22": "YGW3W2HWkNPySHxGWK4oSNNFXW68uHzHfhLJFYE35djEi1215oAZSmr645JdS2b2xw9zECpBik3iBpfP2HcYMrR",
  "key23": "5aXPDaxXAMq2J5eBKoooJ7huwzkWfYG98ASZj8icZuYBu7awQoAscSbwtN12HdJWrK5QuKd27SYXruU1xmz4dwcN",
  "key24": "5sQwWzWCFCsBdCNJdj7gd6av1AYHaGgJpTBkXxv8WPNdDuq8n9HZaevQbw8c2yGtnQBoL9ueQLnpGoW3EcG6NaY1",
  "key25": "cturhK7gUgunxZLjmsshy43YSpR3SQS9y3mk6FMCehZoK1YUozcUxf8c95aEVAqQQ4Dj3k5P6mNHL354dXSCryt"
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
