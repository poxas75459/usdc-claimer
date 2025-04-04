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
    "NvFjQerAN3UXyR3pNUjyk7D4PQnCerFLbnRRh5mtgFJtprCXyYfKmwMyX3hWtSFYueiuVNDNyriN7s55DcQvq8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p4yXEcEpJm37guU9p1nHRLdjVc2m29uE4AF7118yf3TSsqr2r4d1XC6Htd7DpBVtd9PmFiMagCw2CGQWDi7gvJr",
  "key1": "5EbZC9R6kkk4Ge6wCki3pmhGzAA4Gn4dkgPo8C2no9No57QvbuFL1EGYU586KZM9pSScxBPXDGbiHDKa7Npjpokm",
  "key2": "27UGNGGLT6ouMUuuXEGXpVV6xa7L729KALreqA3skr2KgejL4zB5w8BS1GS7ZpfeQqk6j6486s5aGmAfYnXQmZfX",
  "key3": "45owjHhf9ussEdXnuNbKZ3P2dEYnvbXN3t8jCfVENEFgcjNrPDQ7Ba38PwZ4kVDDbvGUe3qF5Jc2qMrhMA5bJpHF",
  "key4": "mh5JiVyiQEZeeb7b5FynoSrnuCeVQrb7zQyaXa9BmKafWnWAuCqd1dUqr44QTzWv1Y9M2GGnp7BntYD4u98oyPk",
  "key5": "4bmDPgVc1hoZczMkzc8hcz3BGSV7pTsu2EQUy9AuBJsWVjHkFqkxSCFHFYtb5tDDYD3dSqhW7RJjG9jQy1httM5G",
  "key6": "3RAneUuoAv14GsYi7WJe5ZiEs4urveVvNrEdZn5SAp9vVdsYiRhxYKwh4FhYuMte5dW52LLiS1GzCbrYeb99Jmn4",
  "key7": "5bfZoHVLNDrCmxg93da7Tvj9KaMhqSoJ7vXzo61MVRV8j9biz2TYxxV9HZ9EyKhZ9ZW13WtaMjvrHF2Rhd5cnF6A",
  "key8": "4urQ84yZ7H9ZrJiSE4WB8gJJSbTiArY4xt1u2DBkagCndb7m5rMjaxznHA24Gx3rtP9nhzH24rRMXAdKiVWBJr2k",
  "key9": "3x2LMjsKdCiEBQfbkzJsbAiymdMUBAKX1GPzTBKivQky9LiYARPkVGsJMuSf4zei1J4PVb1hfBTmRu3iL8bH3ucE",
  "key10": "2m4BgjGE9KBk9gHt39V1TPARqJkoD2JQWhonBJ9EShQr8mmwqo1maGyNWm78kwo8Af4XErkTeNThxRV1RCfu5LfD",
  "key11": "4RwfJV9cHYeEarvbCp2veR1qEPkTud3GmqXsisGXNRV3gxswHa3dVg5uRYgDGHaRrHAVvGmZcemiJnzMz5QUaSts",
  "key12": "3654YET8eeNitBkTUXEVTZ5wbJgnhJF3h1BkieYEiAfkCAHDpRsRZzUctBs2i9h6soAvhYzga7eKCqzTgxAG4PDf",
  "key13": "UNyviSweP9jeSFkmm8R7tLdbRHdq9DvKGep4D3heKszpbGcLFTxShf9XZgFYsYydACt3wVg6w7JhbkPwVxkrxyM",
  "key14": "iFzw7XuMwgcWmStat2ovPE22PnUVjerAozPMjguxCCJUQB6acpCaeF7L6x413xZCfcbXLnsxrrK2xCN2pQvRxpe",
  "key15": "2jVtb68hH7MKmV1P4gCC4uKwm7ATJuHBneRaAnrLktbtGth7jr1R3XQcPdbfdZnBD5BtVgVFJQr5BHUUPeSua9js",
  "key16": "ZeoaKPzc9mPMtHB3QcLxH6FV1B6JTsi7ESJAbUYfSWnNSxeFZ4hMcpaWNUjmxQ6TjaPPBv4UocQxBYo3xH4dfoj",
  "key17": "4tkJy6Ju4vHBw61UWvkyMQXchoTaSwS9RGR72HWQJmRAFrqphCDmdNpqtx3fbEM33uj4ZSWd9Ap27xXi2jXBk2Ue",
  "key18": "4V2Kbh3qcies3RBsqmiAv4hxmTZKCR2TeYxY6Una2PVKLLgtiVevKNEuR5BZzzKpxxLwwU4vzPjGkGF35RnucC1V",
  "key19": "2nWozcSZRo3BwaVwDbZEXgBiTTiiCkdKFmfjrb7s2ESRcbczEtPpJetcJBUoWe3P1BXFj8ppkGwDPLcriGVvukEQ",
  "key20": "cjDWTZEXfFkMYusBM9tRHTjZDnw81GSzNZKbNHv7B866GDYGZiGdy5asvm1F5PPaqDw6thHMotQNjrMFj5yqj3e",
  "key21": "4EkaShrDcGRLDdCnyF2or9Mk7oPKm7cCdV1H1mYWw2BAMMoWWw9zoVovp3aoqAuu8K9vz5TWLWWZBB8be8v17vFp",
  "key22": "3cv5VTifQGH2ohXL8S6FG3oL4nXFfa4iHbCuub5zTmxHkWEShPYRtK4ir3Ns9S9QFWMfeNmjjagZY1Uh3Lg3dVMx",
  "key23": "3wtq4rcDx738E1YZm6tYWxBToSTEujrjRtTCzADqVCPiYqySS8ehkX3n8rT9zfxnYZdz2fcaAUUJefWKNq1y69AA",
  "key24": "4s6VJH8zZTrFMw3FEB3AomZx13Hq8jrZZhWxNbcwdPDw2pzTutVZR1kzDPMooWxY3SFTBvR73g6ea9nKXiAVaZWS",
  "key25": "3pvHy5qBBYXCGEGNxrY92GLUxzNeqSfq2zNhzgUg7ogt5XBpDgGDNg5pavS3j8APLxvZFNeE5obziLN3Cz1r96gQ",
  "key26": "45UecN7DtyP1Daxnu8Vuq5p7xNWvUCC874ozvBKyyTxevq5EFZyozNA6eERKqkN1TTQ3ZhRoFwkXQvUeRZoxm4c",
  "key27": "3wEQrwZXx3dnfe4YXHSYuSwvHhCHuedgRL17oFWEN9jG4pAK6aiFmniumpNuk3weT5aywWPTQGTU6kqajTsG4JrE",
  "key28": "5KRJ3A9XYCmfRhBr3x221gJ95ZsARtAd47bW12vtV8U2upJFhMHPi211P4GdwfFDz6B2z4F6eeLwWiTt4QDvaULT",
  "key29": "2aYZUDBiUd5C1iyqAJJ3ix6CThQMn6oAbqAxBpNSdhrwYhWJAahBryq6hcYXX4nde7A2S4YMr4fNMmGk87CSJcGP",
  "key30": "3HyLK57xAwBBZk5dYFcz7TQc4q4c1xJPJPdZnyV6ZzKoxBDp4SiWz9SxTFczGRcKgCigXXNKeH1uQXRHFvVJR7MB",
  "key31": "818rQzEhjfKj4dHi2uwMRegyU2rTym8M9fsfB4FFz7dqcGdwigcoYVucdRY6dL9mUYbE6kkx19SxncaVNS4LjJD"
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
