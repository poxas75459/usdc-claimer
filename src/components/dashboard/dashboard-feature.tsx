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
    "3bvPE3gubxUPKLz6qjeAGGAheLbkkCRD69ouTPLDa1GVisdKK9ez3QQGxtL1P3fd5A5EvBCP9o84iLxPUPjzEikm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GcczwkmRNYsqczcL585AGjF5FKGE2iaz9vG1xwHczbEMTQ6KURZ7Jgswp3PHAG1DPctqVtFuAW1CyEtTKNw9gLa",
  "key1": "3Bb4ACKAM3TyJX8daVRdempXZQ6VQLkuL8kbAp7XvzkERHb27e2pTxp4XnXL6k3Kcac3sghrfayfEgMfpGkS9JNe",
  "key2": "5CYCVuZ51vKbKzfCkA5vew49BVCjRkRJArGC1v56SFmVJ7qtLxWxkCmRYQECaDUdxE4V9nbG8ZrC8XQCcCMWaLPN",
  "key3": "2ote2NoFHRLEbGkuiF45L3Eh59Xxrh5XUBBpY1H4PWq1wDw6hD7ChVKffAPmi2qrVXY6BvcPN5cc3XGkNdFNYJYK",
  "key4": "7QZpA3GJZCPVDYB6nbL3kTFfxXnSeUe3eRSt5Hzi5pjjCMgQs1VRds16f3jeyekPzMjnnMouX2nogvztvf7Q7wQ",
  "key5": "4dD4gn5x1D87QFAQWasnjmTcutxe3PpHM8Z14bHTPJMcAEkyuMf3F4h8hdj5XrE3svBKiaYF4e2eEPLzyV7hnRqN",
  "key6": "3kiEYVb4umVgUqkNLgKsq6rrFdNoLuhkVgtJYBkrUygzjy2cWcZehTWjR89kq1p4QH2pum14JLNqxJbz9zfaE2Mk",
  "key7": "5HowBZr1PrgPajiRs8owMYthd2XfdDdj9RZNu5FpPtRJc8No5ES8a2z61N4HS9siAocBCzPWoGtdv9scXmapbsDp",
  "key8": "3hnTdcjvq5n5WJsQv82GyivoAFAdfahCtrxczNsdjA9uKhm9pJGEzY9xpFNrnX65ZTkbMkf637rMZvaoNJRXaQ7L",
  "key9": "3QqUfofhHxKJEYs7nR9Z41Hmqy3hhpUJDhhyqTJrodb2EpjM2HJsEbG9hCAqDptZAm8ZALLiBcJ7x358YFQjPTh",
  "key10": "3fiLoM5YAyW5nXS8hpYwtgX2c3XnUzGcaLMQz9hFm9FgEbs6B3x6EchjR9v1TKR28SnpFbzRbS7KoE9na2Z54YyP",
  "key11": "5uorQcX1GcnPUMij8aN3dVSv1A4Un6KHNQmu9H1H24teFnH4HXVYEQSGrn4fEnHm5WNyhB2G8wQAs4sXpCo2MiDe",
  "key12": "47RLkuMtS5GkZ82KtBbU7wmGn6HQgYhSEZo5Ni8ByqhvQYJ6He6L9Q9VaSBs9RXAQ8Tdcf9mNi2meYExkd5QZzcC",
  "key13": "3dHvk7d6bav57x4CxCcAAQJRXD83hoWPcYQBjtFR2EUK66ysRSUMhk2KTCJ6ywuhDZf1zW36TAFwePLgb3k312fk",
  "key14": "4xyRbwUrmvUTVLSCUqdyFKyqRWbCS7D5Mjan26hxKU4ADceMqRsvLtYkG3kvYcuVzW5S92v8Hw51LaBRjQwRYGeC",
  "key15": "5murRSQ9RJuxSMmq8UxKuanCwNoVMoMqPr3D8UX139i2EJ1VdGYNjEj6aBXgXWfvFvDvLFTt5gHDj2Z8uwnhFPj3",
  "key16": "2S3z6vzwyo9zRrgVitQwE9wRToNUG28M55EQowgZdyKMhNDZEURFMEnhBucDL5LQ1exUseGXq2TAFsQczun6deb2",
  "key17": "zXSWJ7NpQZ7eVekRmyLWGrf9Co6FuUwcJPXUHEUEJx5WjpH1RsrP4vyF4RggWcT5NWXj7yqyEXWhPXDkGWcydsE",
  "key18": "5spisLYFmRVMAJ8uHnBDTHhaUwR86nJzVEx32Q1TDmRHokkRKX2boW8GVrkswuKBX88mEfTSx3NKRYmEKpcqcNo1",
  "key19": "5DEJDFV32eoD9NgEbLqFEB8AS2F9mCqnq4HEic2EXQVwgu6T8o8sAE6SLE6E4bkxjg23oQhApg57w5V3r5Q8tuvZ",
  "key20": "5hxNMSEv7MHFPEDCaXBrsV8wk4CiyyyESbd19XVY5Zu36UoWsfJ4WyivsHk24FFjoGW3UsmhqogUuPxUko9yp7kt",
  "key21": "2AeFJiz9hUrE61EYwwicTo5yXQk8Pn9mN2kSN5W7s389Ej7Df1AK6SLxA65z4CUq2YGjfVbGNseCjkJCrUsJwJPt",
  "key22": "31zpFg6m2uGkuofXcXUUSwRZMVX7TbkDiq4qy1kd7x6N5ASAFFsDZWysdxGvPzwB98rNvzW3M4XoPGJF8aUJ8a7Y",
  "key23": "2vJDSrP1ZJY9w2EFyKauCCCJ1AFAMeHwG7DWLupTGQRUosbJra3vhisKC4qgtf8CZhW5VwyDFCcsSZSxrTE2x9yy",
  "key24": "fnFGLfw1bqoNneEuCuPJghk6BUacPNbUN99fWFUvXFAevYjU1DmEtYRB9dAHG9ozCm5zyUodXVC8J18tyX19jNH",
  "key25": "2PEL6oQkZ8nH5f8DbqXiUWCCbqWC7MsEX3ULdRmRUKnqQqVqEy9tWmEWR62yLRpHDWUvajqknr6bpaV9Cq5Hf5xy",
  "key26": "2LBCr4Gv3SPV5aVw6bt5wyjUm23eUkwgykvi9g4SZ4zviZr4N4DfL2pnrAvS4e4cMARUeuvTkfpifxW6gaweJ7an",
  "key27": "5yFbiBPgfLS6teGXudkkAWsL4bwJyF3Ji6TbBx4LffERDyB7NKyS8DToL9NP23mfv7aFXdDxKUHjr7Kz5ZC7TTeA",
  "key28": "5h5EoGxtBcT5rSj9dpb1tCoj5thGTWNNgFWbsaJZREL3vWwrHcP8wo2ffQEXJoJGi1Rz4h9mwwn4G4MRKXsHJC9c",
  "key29": "5mo5CMY4xZ4AsnASruuAzV6NhT4yFrQ1PdhyaJezT9kK8jPMsYsUg1phmKCT6cdNvK4yaH5coBtBmLS8V6WefTPp",
  "key30": "2DPwX8jSgpPKa1PGjfaTKfpJ2jEw4B7DE6JNWfuotNpUa2jcqtc4i2DZbcmPrWaZhXH9iQjy88MCLVJ8VwvQswrj"
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
