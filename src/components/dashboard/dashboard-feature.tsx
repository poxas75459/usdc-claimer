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
    "5TXc1aN6ft5zE7A5T1Py86Mtq1cemjZJKHMr7MaLTj1GZk864L2pLVXHX2RpSfbqs81ijnRKRDh52Be4za8LFTYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mhUGqR9xTyJkbuaCJpV8hf4vKCgKfpkM9cJcrdAeBE3THTa6dPMnK1dxy8c3UaMzsszC1BkoqXQnoRwZ45hz538",
  "key1": "2n1ecftowmdk6tCZ8GzBPAsnYP1mNqvnbwbEE2z5XpJPLMPqydF6ssB5zxwqJY4bvCgECr7TLjvsXPQKiyUcu1b4",
  "key2": "3KmpRBw5R2iCqF19EMtqF2YkUywopN5YfAA9XMxypJA9YKQrGSAEF7bD4uuksd9QHwp9MZXwfukqrec9HnTUmiLr",
  "key3": "2WtnRNUhkGttm6nZP3rYZRgLj3h9mmpGoLqhf7Ph3mjowh2XvxtYAK2w4wDK14X8wJGVZGauKKyK63uyBRwWpCoF",
  "key4": "2foUZC9dUd71o5KzAN4TXu8wvj1DbPWmWXvaJ49bRsMatW3TX7v4zbz81GQQggYUBJrejeSdmtbM4uyJZkQ4BeRT",
  "key5": "64RHNXSHKmpEzCWaeBy7dJ3FSjoEofuEEDmJxy16dSgyXiJ9jwqTnyt1TzcFGHDLDUG1RApoP8cs8YHQSUrVRfdg",
  "key6": "5qXWUnLFTGD2mvwUYCgkxBeV1DJCaf18rT2TSXbBZBKw6sUjTdu8EfDmEJ3qU3TJQCe3WbES4b7tmXPCApSSo6Bo",
  "key7": "5tk2F2RTHvY32SbJAhqJivn3juFXVLE2oYefU4sPFB6qvR5H571Rs27SS2G4bQUYQ1qYLNzi9aCUtZqr5HJCaZBZ",
  "key8": "4MtZwbXDgnxuXdwhfTZLg2SGRsznPytATostF86dVbKbHeyBVqMhLE1LKPDgWuRRGtWPhebas3wMxTQuXvPRy7ji",
  "key9": "2xovoVdduiWcDMtkvo3eQYBgLFu2sAywZ89SNQ1GYRsifUFSuZrNBPKicttsu8vvRZRfYFS9L2o1ZgZbMusEgCVe",
  "key10": "4W33i593QCxPbkC5XUUbv1NJf7PA2AD5N4GVuqdRpHvWpCWfBSAQH1HmcEVfatb8mtomriW6XVJTjimfmgSt8nZP",
  "key11": "3CvZgjj5AYf918fBgWdv6D7jzPUuBHNc1RosZwAv6WueUdUF5nuQd1YKQtBkHo91o2MoufjG7GzBhcJQa5cG4j2s",
  "key12": "3gR6jJyU3Arjfs44GTdffskPa9zzJSvb9QyPkLqbEEPeH24uJjsMh7VGRsHie8rLnfPVjVHRGMnbzupksUhzrBFz",
  "key13": "4LnXY4HSnrxFR4xTAskxWkb7uXbmuoKMfBFAG1WocUA9cuJK4NgRwPZN3KuFGAYswbgX18gaJszj2hR5T6WigpvT",
  "key14": "3Sz6e5q7abneJqpVabTLZUXhFpTXa6ya2F6nXuDvaUkVTRATniBYYuhQhn28HxTyZBGNhgf62Cp2EHnrRpJzf9ka",
  "key15": "2PAJYrYAVp6Rwjf8JWDoXc96TA6AVobPZECM2kNBvNdVBMCszYXZtBR7t7qeVCouvVJTQYPfG8qa29SvaFykmRRw",
  "key16": "4ZiEaazkc2bXFZ9pikyNH9NAeSfgQQhEfWPjqdyqe6Le6exQb3TphVgoMVVX75ngASSLrcDyzWEQqZ6mau7kATHx",
  "key17": "64Qu2PUYCzCZKubN2YSqLw8kE4Nog54jhn5nkeWcPVj6kRs6L3K4FwXg2hNr27X1zbhrAEuH9i8UvWPXJzq3XUeM",
  "key18": "57YB4KAGR3vPSdFBtEzWrDsbEn2nWmLNsdmszUQ4jHAwvmowYBSuuadkknU5HDe8EbG2vJiLhxWvSduL1Dbq5tYA",
  "key19": "3ZhU5k8FPT4v1xxe5pi6JELpehroQcEK82kniDDPCvT5C6qpjzdPFqUKEFd95gjJXGmRNq6wNtMXrZFf3bVYADg7",
  "key20": "5S1Mbh37WGG1j61pd9SDTc8vXBzqCqPr6bsgd5XvoYSBaUnKZ6cX96ZPKEe2ceWdPou9rnc7Kbj6mY31aMqFrpuC",
  "key21": "3Eq3WyGuxeCCe2bSSPp6ZEfhr1Qq6ds5uVMg3m2hjG1xmmeafACCzvoy52z8PduL7ZwinWBmUBRZZtpfwt7hE74a",
  "key22": "4cFY1o8vHiL9peUb6ywSVJhpP5G5KVYMtYcBCVjQCGTNHfXJR7FmibYQRfERFNMMixRgpfNiNCtDNjDBi4hb9YpX",
  "key23": "65hRmBwMYZPTVwCX1QDPhaL6TDPTm8FaB81S61J6uob7ZUweqxni6EzSA1NPXjjUT32qsT72ZCzciiMkqgeGcmiH",
  "key24": "5jbvH5VHfXNoH6YQHRnhzedTsQTYskzaM2bwJtrJeW3hjGLVHJ8a19CUniKz4QjtTp1ucyNpTetfn9oFs1zQTU9K",
  "key25": "AF6aK3o1W3Gi6p59PbrykHS4feCiKm75k7kHEjEdCfQugzbVAXdZLXmrpnBUqEYGCg3Zohe3vxG9VrcskmDQWz1",
  "key26": "MZu5s1dSzMdtg3doanQytU22nuRJzb9aXYtsEcR6PahWxy5QrFmXSztQPupZc96baz8gzgcfjbmfCgWDDX494Ck",
  "key27": "57JVZJoFvRT8waQysh9MvhpJd5yMxP5B43QCESuJRKobKzpZDySkF5YMYiieo2xzwUkaQ4f7aHh1KXyg4Gw1xJkK"
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
