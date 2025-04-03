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
    "2BCrZ9om3MTcit4LYPUUDxRmAN6jn3npbZo2nQJRCgUP12V7wZJNPriDKjy3My366pxU1Lh16wU6qqqJqCdMof6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BecsubA2ZP5569BhuNGVbyTrE91BvoJ4ZvF5DdeS7TwCdJ11dNFN1ura3AhCuuQNX969iZy7CKbruXJaYKd5agm",
  "key1": "2Dde7RCH4hf9mcqRTGSY1knRtotanRye7rx8fTrNQMuKq77BjAgy3bnh68jiyYQTN61A2WbY841qVTqw5TqDnapH",
  "key2": "27EB8gDUkJQkeBfWTkGr4JkewUVi75GLU5RTangbogbSTaKJAXzUuLPUPng6SnLpxKDuERd9ZNGhqwaYkFySWKLa",
  "key3": "4DLAUirvw8csBvDaP97xrj67euUj7LH7MbbTGpwhffsTAWQmnJWJQsQUcvNgKkz7rBJciXRcVATXSozaJwQ2uAAR",
  "key4": "eEueFgoYEFLaHzCrQDAt9ZMqmFDDfCh44eRhMR2k6yMuiiQx1oRP9KxNp6buexmGYEnauC25a2suGwvXK5DWPcE",
  "key5": "5WugViNzmHuvLzAJsurc9m6UeXMA5CN2brJQYoTDPeLVQqgHxN9uQDRwAX9574UrK7QvDYLk8CrQNbbVJFkuN1p6",
  "key6": "5Xf28MzRZQLAAhCHVJ66LMBrTRqfJo7dMNTnKjAfE9ztW86HpAC4ZWB4MZT3jz6CQyKbBJuVAMKfxFFACVESfdT2",
  "key7": "Ad1f5n8f7dmJj76bq5GmRB7pkYRxADSHtjLw3cyRx7zk4zrs4w8M5h952gf81Ej5MW1Ky1QCSXeZUn2E3busSVc",
  "key8": "5jMVnyPLEfxRd893gqn2JLbkmpbpXJ7jSSih8qA6sTWAFpEt6uUbDd5bfuyWesH8Ad7c9SdDQUAEfoka4WMV1sEa",
  "key9": "2n7mMBariZwZmkkfCqFvmzaFovm9Z5BMeqkEhjUoFHjbYsUwewtMBjXC921D4GDzGTzXSS1fUVrH8eogiXLw6GLF",
  "key10": "aLkeA1NDnD9kAB8m3pjgbViDY3Km9KP8j9CArDfWG4tuENT337H5pukpvSWiUENPUhM3TT628YktUnGT2jU9j8i",
  "key11": "NjbhurF8yAbKWPHZQnH6XyEUtEtiYjuFiBmazAsJUJAeasboMHDosx7NQqW5kQTCNB4YQpw7eMreug6dhcARuN6",
  "key12": "4ogtbiPJuDHrRWCsrLoLXo2uw3oE81PNcrMUsYW6Kvr3J1MP5yiDFTRP2WBE9SXC3t6KH4y3Xvzv8kiTPVMMv91a",
  "key13": "4j36qbXnDaKWb28PpJwv3jcP9kMk1oCerDDrmhQvPha9qzqCeAWstVXtJhmnhpNL4tLKAy2FiWiSzaWct6imd3WP",
  "key14": "5T4GLhjCHAQjrz4KfzVfwxEscRV8i7TpABL8LDVDg7dxfpRcbWyqHFMQGEDKDhNpiebWMbab6jyz9ukTeagC5Lgz",
  "key15": "3vHcjBaQfzi79r8icDDnSirzaJyvwxza82kRAUhs5MCsvdwxkVTUjeGyxQH9y892NR6c8Z6wLdBz4qLn65v5FdVo",
  "key16": "5CiyQYotnvD5UWZNuKAyRVENZQdy6FzSwogApLz9ZZ9rCrgVBmEYExzQfrRE5umvb2LoK4MWmxvu5ZMdgdmWRKqC",
  "key17": "3eX2pY3DfjoCmdtbSyezTGk84ojx3nckJAD9ZB1kLnWp1jacsQazmbKmSmsyyeP5GKUrrnpSeVrMnbNi432WVhay",
  "key18": "4PdcwrnLnqiMMTHZY4XMj5PXLWrbiELE8Diz5wbUpoKErG5iLw3jAm3WSYguzbPmb8XbupfzFLwXiBUYpoRra2xL",
  "key19": "2HzcNFEALXXLpHJmM8s9ZzDEPj88mFn8aMjzPmPfeDUfVPTiGHBXhrCGTKZCpJFS9NKEvs5oruVuHeS5xpAdbvCs",
  "key20": "4bBBEzUpJ9XVKCt2cFvqzieP42u41b4F7FC8qkwYfT8VFggjwGHiY2UDAToThfZnNo2PCvfD8GCtVgn2PujsqbHF",
  "key21": "3squH8Aj63P9B8BZDjEBozQwjHmGGVA99uhX12ZE45eJBYZuopbaffxrGR5LttCMSWiNDefq3aYT9FWpaoZGiWVk",
  "key22": "2Tfu3cQ9zdWh9FdPnuYfHgCV8MtweU2LPM1Nzsriswj53fyjzZNueCLphkabJMXF9phXN3r3x8DNv8uKLKH18q2R",
  "key23": "2TdHpRUYKrzSzj1xvkBxvnyQwdgQ1qku7BdpQGnPioa9kShd4qqDZeXu2NuvZskp5uBsV2tK7vTPe24q2r6DxLf4",
  "key24": "5NU2qsFRS4mji7TdAbPcBVvyEMW1KAfUBWexfDTJnVNgCxChu8FQC636ZTni7UJNqXobPC7AoQ9ZE6nPGsBBa686",
  "key25": "QqTRnpjeD2u819X4xjULhMvL4Ps5RzPHv4Gh1QAj4bWQy52GCtdzSRGkWCptmJZoUztPdW2BNdp5koGGZ83XfKK",
  "key26": "4JfHuwxsp886RBvxkAGxfURzXfC2mEF7v3EoiLCc7oDZ8Gg6GC1qyioUmu1GZyTcryYa6d5xbRmkKXmf7jwnMuRm"
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
