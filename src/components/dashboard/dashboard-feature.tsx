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
    "4x8Ftd3DEuj8qjC1Tx8WxrbPw4mgkLSc7hVVCqE1yXtp9f2FeH9SHAYX61CMFm2Bvt7LtDJBed74WTJpHoNwNKsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J39LQ1TNDDwKuHjVS7YStdDeLJineRsV18hnetAxJt8oeE7N3eJYWEj8RouJ2QYzWZjraXtoiXvn95KZpUPdBwp",
  "key1": "FP29MMw7sAM68ep5Zwn2iovD3kLpXTQkQ7a6xUx9qfFpJ5PukfkCpF2ZRAwLGyx39eWyWm9G31qJzMQkiZBs3eE",
  "key2": "2VFkezNWM1TnG1SAAmYC9s8Vq1yMbN1uEqa7KZfFkjxhjpoTChJ7sWM7zmQ4jkkkg2P7Stvx2MKquhQdzuchbiab",
  "key3": "3bAEgsXdpwBC2xSJp7D9C65CdqrVgPNHTBCydT8HeGdsf5YarThztC1adu55BYKG9T4paYudDrgaQyxBFFNqmQpT",
  "key4": "3AjMdn2uiCD8BeVvSKCDhSzs6Gwf29fQY285Jtpt2DnY3Hz1QxHaGbmJ3kdnQyD5VzUwc4so51HB3Mz5JR6MnbUW",
  "key5": "4nZx3MpRZG4ejsRFM8isvuBJgWtkAv4RnjzPvCuN4PuGYMZheFLEywwg4v7Gexh1JzN5fBZXwTrii5KfjF3jJUJD",
  "key6": "2J7MSMKbZVUtyszEvMb9S5tNxHSuvu1w3EWXHKEF6UTSbRqDnhdTh6hmjGxxmyoeUsnjaYp5v5bAJfh1K2MSo3R5",
  "key7": "2gznewRQs4Bgi7jUfnaJwvn6rrM8x6JtyCgukrFJtXJi8RJfbdPkWwMQTnwTVRr3Kwtb5tczbrcemiq2n79abjZr",
  "key8": "Ggz3vcWkN9WmXTBXNkA5PXdQr189ygp3Rsnd9qyWE9g8Fhkz1fWwbx8hFhYiBYrbppnpj6DXe9FTkDoGnro88Zi",
  "key9": "gkQgXiQ8zMegFz8cZoJYbr2SNmUbU7RVCmV2uVpCLZmrrHS3zFBX5BkwR5jgW3JZuTCefnDAEEwfhJGwoNvv4Xt",
  "key10": "64xBxfhLo7rw7yko3DpFEEwM4EVRJk4MEdZxV1GxChASk8cuTiBjQEjFHQrDwnuST2SWztyfYCqGmP3nzN3AgULN",
  "key11": "2nyaDU3RGSMyYxEuirYeMrVHTYV22B4CMTCtj1vdGU71Bo5KyuveMWuzQmh9ApVqaS4jKiecpF69KZuZt5XXRraL",
  "key12": "H9ZGFQ9Ko9NCVJ6mdPZksZdrP2XVVmMaNSfQu1HrSCGMMDNSsXUadq7cuWdLJvbaKUN8eJyp7T3x6jn7KLF7y2K",
  "key13": "CobZ7iiqFhXeAdetRfHjnaV4wtYewCQEasQqPh13ScbYCCW1jf5FcYueENF1GMpeS7FEWkQmrRMECsiMy1waqiS",
  "key14": "4CMRr9Epz6oDa5whJ63q8E62MsjUErrKBbUzrJkA7KuyboEn6jfTn7U4BNJ41NmLEaxdgB11r3qrzdzzTrk4oz1W",
  "key15": "3zzt4GigSv6cvWrPNYNMQU3pwpnqHXyxSYkuo3oRR6UN5F7giNXohbCzbb6XgTytyJX5VgqkuNAL4o6ogStBh473",
  "key16": "2GGshj8vQvh9C6ESi6FN9wti4D8CotxJ2ZtzmX5J5makRh9L32u35SZf5E3uz6sWe1nxCHvjNKnTthVTi72ahedD",
  "key17": "2dQnthdyfJLxAazMfyk7aXtx1DG5Q1EMf1BXh6BQ8LeybnmgJ3dWXaQND8NX7L5Y7VkVtvZxX1u6XRiJsjfQ7KWg",
  "key18": "4yj8M6mE9dEqqWybmSSTnb6AddLeTrWNvTZVkC8DuKfKVUZ6CwqVcgf1HhKjQnVMb7Ps7X83FP4p2gC346BjGL8W",
  "key19": "57ZdV6szL4RfW2kCZEbedDtYWLhmGuKxKg4tjZaEggZbT9xZmXEaHcKFQMHiLP4WwvfMGsmT2oUnuwmNgUPtTDGp",
  "key20": "KVpurkohERfHkoEPA1thtaAptD14PrXmdZeoKgXrsjZdpUBPK1YTY8o347CpB2BEbStvDoftvyASM6sEYqRuMuB",
  "key21": "5ufBKnVuMKkDU1bvmWBijcfNnHfF4Q51ZfiDzzbT1y4Q37Uhzr6rRTgH6FBzBnLRNjmmbzWydubdMARbGULg2cFb",
  "key22": "5Z57G7VjbTDAQagUp48mJcfSLd3tP36HF5N5RDRMe6tS3zpLZsptent6K4oCNApcSftpzDPHWe7RqMxCZDDCfwcH",
  "key23": "V6oTniZXx8ua19bKaqbAXsMLbmxW5FJnA9biQHTKezABs8oEbLAGmtC9m85FDUiG2BUdKJRENXzFJi3EVrLd1Pg",
  "key24": "2BzMm6N5zoo4NPMP63EndddXHNGcPDwh5Ty8rRC7mF2N9P19RCkMfvDiCTHBFNm9PFg2c6zzKJtCH8UwCtRfH9jQ",
  "key25": "4Zjnt4Yz9ZvDgjVQMWmojkGmrg4DWzznQ8y7YyRj9EkcnoAtp26yjas8P6QsxCXhWLjDZrZJKuXeXvv7etSs2awD",
  "key26": "2cnjUg5wXWiV4vQbV6aLwfPGm7wHTmbAchBZ3tWuSMpQftxwmRpterbAXwWVK7JE2uVy69erMHf7HQhWzvVfKWjz",
  "key27": "38MxQbnTzjjg9CXLRzzwnjTEggfJrGvHnRH8BnLxfARonWXhij4WJqxYctWAtXfzPC6KdqeN5WKeKZMbC42WBaCn",
  "key28": "xaoui1KP4vZo1yb2gWceeaokjkWB421U4ihRN79TuzeAJma945knHL2Cq7RFNb1RHVFHmjuSGhi2x3ZkMX75GNQ"
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
