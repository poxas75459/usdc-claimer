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
    "37TJKMddxUYsSUsvKtmFLj2e6Sh9KBSrtPSjqcPqjkHYzh9ApZhLfhxD3TZyE24W6zNfxf4C77cNTcU9vsUp41gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25KzdXQEr8ptxxP1qTG5Cw3QjHt4Xv4cCiQ1EVr4W8SJno2Ap5XetA3g6iwQeJioXDtwc4ecKUS8jP1dnw7FRar7",
  "key1": "rWxyx1RbigdLnJoBtAJ79Z68Vu7gHns5JR3NaRo3fXsAVhSaSJnDspZVNJhwi2WcKQ7hM7VTey3HGcCWTzwYzx5",
  "key2": "36H8ZEwGnumy3iUCnaNm57m5fwiHoyA5ukSRUjP9DwW7FzCY33RKrYW4uLJjjt6FsRAxU5GS2rfAfgpmKFpmX3r1",
  "key3": "4JZBU85VBchw8w8umPp9VNz8AuNjRtKznie3cVwjh6JPZsaURpzU9z7epkTVvP6YDTkxbNP33Rgjr5dL6krqe5kg",
  "key4": "4RPRPet1pwrLuGQtvj39enmdYmFzVbqk5X7nMJznHepjpDKU6e9SdwBjDL3eAXhc8V9TPMWeDWwkCdn9HF6pnMhw",
  "key5": "5deL5YmXCPpHZZYX7MN87APhcyvbgdCBpxT8TBDiKfQHFWkohvRnuufA311v7WjGKRAGZt5ZTQV5v7jcKnaFtGzf",
  "key6": "3yjt5XCrNJpsHjyf3rskdNfEyvj4sRhU29Qh45Yk5ywBkv43azzdyAv75WVFcQWajBs3vJYDup3Q1Yo5RNX9aavi",
  "key7": "4xL7sfbh29UShfKjguGfXxHpre4QiM1MeiX18UEXUZVj8dXbcooMPaC8w37er8qtb1Lw52J7FpmqV4wxZJt9c9Ww",
  "key8": "ZUpafv8qEz4TsrV5E5uUXBTy1CuQXQnDkEdVCP38cSDs4okbkswQqMCMM75BxJErX1eEJDoqxyBKQKNk55g3PtT",
  "key9": "4NWkfx7rS4KdMDo1BXywYrif22WdVW6132Up46R7GxWX62E1bYQWbRkpzaEU4VCVRGyFJxoxZLxYz4GujLcBgNhT",
  "key10": "5s3NnBUTSUhjdWei1J39i6hdZ6C6dXvGY6qRPJQZKHw9MSfnsj5N1DXLB9EfNiH6v4kyRAyg9xFVfCoA8mDnNpT",
  "key11": "4jyttvhyqj6fawkqPvZbVaGiA6184KzPCpC8dWTLSbee2FyEPrB5yKxteWACsnRGHvzuUZpHAmAL9CDByTwpqcFz",
  "key12": "4V19vfpAv4smGFtUVCgdACawo31pUj1kyTKFgXkyPkKpcBmUgcmWpELFZcSDf73KCZVY1kiDJkhkWaKwPqxvFWnT",
  "key13": "4CMnKwfEJSPMFHcfXu7J3VTAJmeUZ7G1kzNUjWY9eLz6XaZ79V5Z5NDy41gm8WdZNLBnmRJfsbnHma3F8qcACEEA",
  "key14": "GPE8VETrk3CTnGvC9TSP4bGhuvoXYDbnzZhdr6NB2jctPgRh4wjN63XKAy7UfyV4Yv3t9MSvX9NVbh4qAHjLohR",
  "key15": "5DWhVniegQe4jRNyKeudit9ZXLiHH7iKS8Xvm3V4rDYyr5a8M6mPdRTVjTz5xQDCpfEsPcm82qkFfmT1Xdicnd4g",
  "key16": "3ESNdDky2SXkiQibUa1pGUffDFNykmBHvFv8h89fyeMkt5FfVvy7f6qYTu4xn4ULGoa8cyz7PJBYm13QVjDR1DtP",
  "key17": "225JvrSc7ZhW95uD1qw9Xt9qFC2zvdzdMjGGpMXgRvtG4LTUPXoA4Ugzd7KMabdStDdt1PAQrUvrE4WYa6o12EXk",
  "key18": "4LzPSZXX93vhVarhoGFn8jCBvAT5dJNCCFQn5Ns3WX4xaES9Fzc6d1HswcWn67TPdByVMRp8C573qTe4yAUGbggF",
  "key19": "Ya4uEh9r5KbcD76i1J2sXXURstS78GquK1dR6tbKrqv47Bb6aX4uxPUqoFBa76PDFiK1Usnb6sQDGxBYREgoeaG",
  "key20": "aGXL3MX27WQYXrk6XUJC6GW8zKSDkBVytTK9qmmDZ96bVFs4g4dmFF2ryRkXHqxNZdNYyr7iWRN5HLjAuzwTnV3",
  "key21": "2yR81swP7FVjScrChXhDZaVirhE6v9zATguf474WpT1KRFALHMmGTukgYr9e3VHtiqWNg2UvHmwdSpv4Rm6KrcGu",
  "key22": "5BhQxAA9zQUshuNTUnHoFr6rXYbrjpJRVNu2pD2h9D7MpKUWXgKcR1SRSah92AyPVh2A23UmJ3JWRLQxx4K3RFDH",
  "key23": "27N5YYYoqA3W4ABSToVj7nu7njTaEH7obSJtx11JybRzVddCk16eVLvU2h9ZJaatfqCvCCaeNEp8cLpFoNYcart2",
  "key24": "3GoXH8c6w2fpxTjmw87MAqxs4oSXC51WN8ocD34fEnX525r3DgeLXYsHvGC1yCv3ftMa6RYfiTjrQ5FUozyJxq3u",
  "key25": "38x36nB1MGhzNJfe7tW6YH47AmB1iSqC5ABjgMm9Tk4ug757H3eBoEBjMpaXRFZAD3CkG5WNkoAL9eDkvFrdkb3Y",
  "key26": "61KQPMj1tQej3jRBMRBfEeodJAzio5aG7Ph6pBfxG77yhNkyDaQ9hESHhVaBe1DEw9QLytFuRvXXRK4BVjP7vWQq",
  "key27": "LviBGDGEyJyxTzCuiboKBuRX4eohYKVu5kaFg8A26EsupNQEgSoQT87gYfjo7LFPuWgeuQJTNPMMvbeqMhekacF",
  "key28": "485QUjceYsXpWfUWFCgSz5UFNcriyxA4Z6Pkp6WrXYvbUPto362bSD5UK4gacevQyXXF4ya67FndHQYUmfk8jYeJ",
  "key29": "4Tkj3DVBairntx3J3EekNZRqLT1BEKCc2bAmgm3QA8uzpd96iHH8G59C3DjYnGbuYVvXNGLJJn79JVb7SHkdbrrm",
  "key30": "45TmcoJ25Rc3aFfuKVG8X3srsjv91nxM7T8CmL2QUpyQFzrujc1Yy7sgMkbCb4rCRy8wEbDmRJ1G1E1eSXyaf5Pc"
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
