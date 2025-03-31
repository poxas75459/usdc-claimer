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
    "CG1LMbqp425g7LpCCwXSakzKMFrhFt9uwyr6Lu2Nnt9GgAQ7L7MTZey7hGAhmTf91tCcHrQwP222ippJHKcoMoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p3GcA1CGWiiLcXk92NEZXPQXndmBdmHsUZFqFDmZeT1PfUqd7MfSeRhrjPj3gqiGU1hp6aHMfFdZH4cHXwgrdVt",
  "key1": "4DAh2TtgnYjLmZQrFkYD3oebZraaDie8PdbgLwEmgV5AaFP22WcstdydGYrUQbV7DH7VEw2auXZaNicC41rpn8Tm",
  "key2": "435HfPZKuN2Ywm8SMoUcU8hMRGCE2nH5gH3L16p81bjUkfbS4qW9eafXnhdqasekrhkR3nUxoRNKXgfjgLdAAE4q",
  "key3": "3Cq7z12Y9V6vNq4FVP4A1auqRcM8EYphimbzRrwReb7Ks3YsCpFEfzEqu5c4PyczYkMzFvt3EHdZgGyQK4KG71kM",
  "key4": "2HELAybrVPrQqUFNrUBzCL6WyKckEZ9KrgShaoP9ZirxWpNywRhbsoNnjFh4W8Dn4yynbPDXW6k7pr2YCZLSMyKT",
  "key5": "4EyNdfZZWJsQMEwfmCqWK82nuztZforWGmmUfm1UXKN37snDhMRC8K9MwRzH9BrFCeEUR4qaGr21sARyNFpbXfWc",
  "key6": "42mojarHjRem8Q3srkucPYGwGenEVWRd5HVtniH3G1gHzHt8sAcMXk8cvfLEzyHQjd2mGHy7WXxkbvzjgXwE8j2M",
  "key7": "46DHaZX2DQd7Z9uo7SW2quq2c5gybSDmWhrksWsH2o4L2xrVKmVWjCUSjfG6An19rF2bETvbWx5jq1v2BhhN13U5",
  "key8": "3WGoWxTiM9kKydTf2HSWotrDyE76U7u8caMdDQmSNreDXVHRVjXWpnr9H9knN2ftG4sjNiGm19sX1FhdeakKXakM",
  "key9": "4Q8WLSGQcy6ek8e2LiTC9xrgjCiBBFCKkcr8iAYH9hJW2wgd27fQSGbaMu6FJJKdsB3aq9LXSfRy1skiMJ4MBCBN",
  "key10": "4rLHoDWQp6FYmujmw6dACvf9MpCkRumro83isvKALbBaTJwcAcgdT5DPQNoPAbTEkJXEQxH8vRgCJTL2PwYdsZKY",
  "key11": "3VFX318UzAbRW5rkpipVutsdW93nexvxmc5saDNsCGFbeNTeGZ87rrp6cXgxuQgMnYnQLunYhrSUmifA1prCTucg",
  "key12": "V6BrDGV6ixbgYw8oztKq7EaujGHpWqCPwFpPKnZM61NXGJVCCEMiqnAq7p4iUTGsCaXnMjkzNPsrFiQ8p1HeMYo",
  "key13": "5dgkQQdvAe2iVQG3WtSVFwcfbJyKBYCkDQK1Tr1zNLkXw4m8PYU8cktdb9skguDKCeHuXeK6DyBzUGtJqyMmZecR",
  "key14": "wu3etmxmp1e25e3YNCshcntZhM9SC2g5qSKZnf4iwDfGDm4d77mXiYzEDqHPAJLMXJKd1tXkwNyvX4oVBpTmu2c",
  "key15": "5Q1jSHhwrdhtudvmWrWfMibR8wiatLU467eyLqiTT3tsBYLnavjB2NHyjoxvEHJM2zahtEQRYve7rTR5rQ6SsFVV",
  "key16": "zeBi5npiD2fqRQQD4FKhokJ1eCfRPdd1ApwT3roX8jkSTtUcCj9F4nnj8uwhfvR99S3ixsvXJrVHjyR7xVcQg2s",
  "key17": "46bwE7bBVsrgaEQw1Kh9yKbZZMTZoibRGcJW5mwLMkwimCWahy5G6ztf5AQzKMVWUp3jBeUTWCiSechoNXCZkBsz",
  "key18": "NXDJVUcNG7iu9oDS3QFMP2EkStEX5qAmUWd1KK12BqdAccV8TdNyzes3g3PPGLtxSXsfm6tt69tkryiyc3UgfB9",
  "key19": "QFQyMVre6dJvdWfdbWKiUUZzPDhGD7S1j7CP66MTcm8rbuJxZ2zQrdoYbFViRJQ6W2yWR5BW4Cug587Uihm6Kbp",
  "key20": "2dhRWe5EbRjzEfaEDhHZLBQBFGFN7FvLkMMVmLotdpv7SWBbS8i3zG4FTo1yG4boKR8oAmNaYBQv8b5cgDezL4Hd",
  "key21": "2mxUbeupuedeHRui1hLhz1HKKDFGxGa45FRKZtpqkAePxL6PLYLpyXrCHmvEhpfzATUdkGNUzBoUzcqqg8JQQVxj",
  "key22": "34roc7oiLaXSPNsYzMNbBsWgFx2R1fP2eZp4dH9feWdVh1KAAWqqjwAatWvXZyebvzgNBxHYhFTc3KAfY9ZSzbpQ",
  "key23": "tSeheheCka99yJhmPNef2jVrgdSsNcYmzMoDRyyuw2Q5b6A7FFJyES4txCjC7vgeC7Dy5uW6FUs9JNq4EzqCB2M",
  "key24": "3ohTedNqz1G9dKcFrThxRLh5ZS3BdATTQGv6ydxsvgkUJp3tTAKf75A8zaVEaojKpqVW4zWwSH2dYmBAah3N5TD7",
  "key25": "5tH33yFKgxLpYuNuazhjKdPmyE4TLEf39JGkxsDJE1KVZW7nwfyAXgTVAkwacyd8fYLXdVxi9gj5NYcQHVjGnoxf",
  "key26": "2mav6cFfJRzC9iV4aT8ns9JzHCJ8HHR9A9hq8oDibDj15mxjQGxtREEjW4WAJWF5EC533HQPprQP7nQXhD8eZA6U",
  "key27": "4XrrrVsNrhssUQgc8pzE2mrssE24QR6VF9x9VG4hcaUXPkZdfEUtzzC1tbdvVnB8jdRnhArU9tWUYAZhv2Cix15T",
  "key28": "52bkLT2p9u38EXbbjpyP748eVgccmadjnB3nia73ArrPRLSYtYuMShKK1XJzgNekHFKrSF1D3TmTbtUHmqqLJVPb",
  "key29": "3uCTjqjMCK5AuiTgrmuKdRX2gAr5XdTxeSnyqDLztw4vZ2Je2kWhXcyAtNad96Ne6j7v2UkhJ1K57nSLsUvECZdA",
  "key30": "3WDQjvaYSg9D3tgHg5V49HXdMHH7z9zSRGj49gDL6YXLPumu6hEfndHiMAnM6Bs1jZAn9sqQfmQs5uCgZPuJ9Hyo",
  "key31": "WRN3ikqYMjvsoi6gcDcUGUFL9fa6aAAzSoL27jo53RnQsngQd6BBvCmhWiiP1sjCur23fb85ihpd6onnLkAbBrZ",
  "key32": "5qkfmHG1wUL1cnnzZfmcaiLtcVCLjBuGKMpWK2c93v3JUFV9QsiDaNtZ7ankW7vVksyWRbdPysFrkLtQj4tJvtwz"
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
