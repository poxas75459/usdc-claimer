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
    "3V1MvQMNMrXABGQ7EFfnyUdsT8ctWQgoCUo2tVmxyFd4okya9V41TvSACcaSruEGyTrRsurEKCx3eSdyByfGVGvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Lb69FaKvzn5e4oTStGiigXt2s9QjJvVcMbhx6VnBmP5n81GTWdEEAvzAM4sK7bJ1AJTAJQkGfVvZpGBrMcBTsR",
  "key1": "3PWGaxywJrb6pbKtJTMhgEaS6U8ZfVkzBBEnZxtp8PvDTaggUWnsDpTdB9K7S4NhNvfP4ZwcUw9SsRE6jXq6JCrT",
  "key2": "2vMJRjwoDNoi8GBQkytYSv6N4Lsybt5GFMYbu1ejc1bbv9CKQVvjhcX9Yf1WuuAvfMbdJhTH2P42XFsKTfRRwk14",
  "key3": "2Z6XSLmQGuUt9k33e8ZXPnFxgBDpAdRwuJKGLChQgTry4r7z7abHD3ZbLFpAUEiFkL49zYdBntErMde9ogv74sUe",
  "key4": "g3NsVa15deau7vVowWPiS2z7mUBw7iRrqFNFWvxRSnDvMHpAEsdznSPrnjnf3VFh14YWkTwoy4ADPn9YVP76be2",
  "key5": "2NfPydSgXfqxwmZ12s2wDfg8z6Uik3jxMS1P7aFKKsQLt5UXiC9uJ2usABtQZox4Yfkpp5QD5dmNH6JxVhET6zFs",
  "key6": "4dSNbyQiCW4yXsnRoizo98TkE3xJ33ZcX5ukxsHruv2Rm8BcGpgyJoJ953mTyVCzv1vd1V5vTUXV92djtw9iAD4w",
  "key7": "4Kjde3XbTkEPHegtuyPTMAWAe4SWjaRoAVF2ke6rmrFakYtELoK4QvVVdAYvhNKhWQgXJMyuSMbWfVMCuMQTqb8S",
  "key8": "4Bmiee5ZavQiGs3C3G2T3NcHwSpBGUoUiwsuVqJxwcYk62VQXYWuctRumSWc3d5C7fGigrA9mzbnjZBZpKQ1TPKC",
  "key9": "2w6CvHcWxGcSWbNbaBpcmb2N84YkHkEsrbCZPktDWMwBsLTEjCC9Bq9b6T4Kaa4DNW5cNCp3wAZ8YewzVyhBn8Yt",
  "key10": "56G8S6UNbHE73jP5E1UTD2Xy1uMmYdAenjwd2ijux2GWZ9eSRKTZgNGcAsbajGiBMP45aeY7CyXEQbdoEeatup7s",
  "key11": "5t1Lm7S2GAZQ6Lux38c19AmTRmzcR4dx5zKjwkzMF2GFz3msom8EqrGMomD4ykExTqK9syi2rsG9EE45pn1qCbCK",
  "key12": "3xVoYzDGntR2eq2d67Z4iyci1RixDFfdoF23oNQGRxYFKHwNREMS5Yc9VHtHytgq3SPMnSev999D5LnwvJMSRfTr",
  "key13": "4aK1ZVs8KegLqYxv3BHSfu4wLEL8K7UKkxDWe8M5fdhcXwJ2xo42xwyGdwiLk4fHGYYW4NKksfHqkY1aXdJ7VZvG",
  "key14": "2daS7RivCQEs5WiMXPLRJmErT1CPDq19o1uUYHsmrfWXyUWw1wqs48hzU5RiDvFvGvynyT32Qo4nAWn589JShVmx",
  "key15": "4ZSLr3n7nYmGZwKrRgzgD4ENqmqaMu6Q6zAYuf8dUScyajk5tfTU1Z7k85VB6V1TRq32dmjqEUXACPNff3QmXUsm",
  "key16": "2BHZod1ebXjE76MU2dNf5NwKAwB2ALwPPkNt4Qzvbm1gpS6rGnQgvxA1MDZgRFEfdBGcAFgpMVRYhmdx2kchV5wy",
  "key17": "5kHByicSYAS627CEcmDFbb5VP8V89YQF2kT5y1XnMFJPV3x7A9C8iFjUV7CuAPfnFJWR3DYDpMAyHfHC4EwERRGq",
  "key18": "2GWoSqLKdFjaNKD46FQA9VdaPhnUBsA55La7b9Ho3v2jshsELz3dceJjqGBpAx1sBfJKdcZsJ6HdgLPwyWwuMtL1",
  "key19": "3GoX8U5LxDgG2q6bCH5wHp29vaJ8oNBT1fbbpbUXeWLs1ToBQnxZ7dJHYzcYdanw2mMgHvNEjkpiW8Fu1v3WZVP5",
  "key20": "3Qq19oeazs9LBvqNS4oa8ZHu9YkAgNzjfLsTH6PyvRWJzkiXL7iM8o8kNXFGoHV2mMruPzFar2euhjLfMuCqKERw",
  "key21": "4Rkq2jdUD2pWQfYti8xpsjNihtAfP8WFyKBF6oY2Qx5oP8pbV8FwDwPWVWbZyxWpU5ADGCs2HAXweAS4yMyJ71qr",
  "key22": "2y4ZvxAypivA5AWSDhHUS2yCDAQQjCrAJKJUKFrASAU4Hv4PqwZAztJHp8vjKNqJV2YT9Uskgf7Q2pNaLuWuqzfD",
  "key23": "iZQSeVfQnqS7E3GY2s5ENMitjJnekoPcJBXLNq2uRScyJ9WHq3ykaZfGNXVdbZr4aQN37hDjDpCpzN3wAUxWWnN",
  "key24": "4RybfALY8jZiceFiSkwLyWBC8D3osaQBBfNhuNURPxNrddUtDYudeK7DTJjWrVujaC8io2Yc2HZJ3Lfhmgvvxq9R"
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
