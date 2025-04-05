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
    "3CCR1jhefQHJXrhwDXq9hbTdkwsFhuYrFMb6VY8aAnYETK11BdgEX9p1or4uApVYsGMc8UomojkYHz9pHhDwjVw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vC6mUfdq1fh2M8Nhm7tBvpAbYgrwofB3SncJQwzM2huVoz84rNcL2wV6FErvAv1WYMV5HbThsZPkVk4v9UrBP4L",
  "key1": "49LTcXuRrjPVzQDtpT2x8mhuJZpYXnHyYTaS7tKrU9xWcFpHQsPmzhwiFvCRWn7DXr8Cb6pEZZ73yJq4xhkgjaM1",
  "key2": "Km1hPSKbKmcfKbeNWvxbaFXCryajeHMBXBBG4L7QYrjpAUh8vJZ13SosVCZvUREb2BjZiNCc6PhxSZbACWB63dG",
  "key3": "28XmSrA5YRRnaARVvoDp3pPYSGWZYBLce2MuSknr5TuARZAiUhbVPhPnda1cKnHNAyA4rRtrRh3LbZDB8DC7bQis",
  "key4": "2CwRtrgPEhQzyJAjNzJeGEK4BzRUrhvK1tPVx89AqSFTZppCt3qKQEGv5qKMB4JfqgmPLKDJikmnogHSm7XLsCa3",
  "key5": "wqJviE8wvaEpAQv9f8MGWAUfksgoGPtE1GyrGAZnxFB3aG9oxg9qXiFocqcLsrHez9ZrTU7VAmECPvCBYykV92q",
  "key6": "63te3UgtiqzbMbxsuooQDCJoBegZjpEBeN4QgbkemTGLiRyWhC1tp2nBoKDuLZjQUk832LWMUUzjuunFPSnM69uU",
  "key7": "Wtc594Rij8cZ2VKqTXZBsX4i5dxZ55GdMiztRwBciey2Bq5t4i8fv5nncGCAWTMhxJHEGgMHm6JTijyYmwHUYvU",
  "key8": "2qN3GZdX6rfnWZwPcG6ctBW8R7bG8Y8Zy5YGfgLQFz5AEQ7N7sZow7kKQDP7q9diNyWC4UqKTyR64beoD9GNz3Ve",
  "key9": "KJn5r2YNUZnbQi73hGQGP4EaRecxPUx4dUHsCfMk6bdVaQEzT337LtN7WS2HjXLpSJibSGH2yp9yKzkAgmwkaFh",
  "key10": "2aP2faShqAveBK9HuVK38Zpz7z5EHZrsaLyL63EvE54RKTwHvaBPfT79M8so4atjAkSkVQeiohYQ68FsLV7fTHA",
  "key11": "2Na82Pgu5PTshYt7w3a2niu4v62gycFU6u3pjxBYgRgtqJtWcR5Vx8zyZsB9e4TyFkGG1CRQBUdQ2sABRJGPMbqY",
  "key12": "3LDMb3bL7RSVd5dmo3eB44QGLntiMyAChyB3cfKQchXt8sNUuieieQcJChcpiyYaRj1KcQwLudvK3cVmcD2Md7M2",
  "key13": "4PrsDQbaKVm3edZS5YmZHJRijny2ww4VHesHNEGqe7afSK5wPywaPyqN1QDyxfmNZfB2Xbivbe91QdituvYkqjJd",
  "key14": "3NY7HrzWFUsYN1D4922FzHN4yxdHNgcbqrKQBSLtXUpuKSG5QwwUGMweivfkGavdLsSfDvDKAKNk2BmcpiPwpBzB",
  "key15": "3bSJUH2nyFEkCqtHS35id4adsqS8nGi5H7Ne7VZQVg9QkXe9S5jtq4SRnCfxqoXz7hFgXHdaeVzGV5A1CL3PUSwc",
  "key16": "36mD8eAaut9N9sPke5vGdStNhvTEHdsENdKDigBq3uzknjHzFWVtyiAqf5zmWWgDEod6tJ6YZd2vUtsK6F2Mf5Dh",
  "key17": "2Y4AufpNRAEhnWRP9vKMRap1MBqHXQuXV1R5j95VowRrcuj6VvbJErZpyUXATmhsUTM1W5mPv222VbCpbse6Q1hs",
  "key18": "4DuBGPhLGHmLmzZZBof1utWKotJu1zvac2c5A6M6qpjZnNbzFiDQ1RKTE7GuhPuH2o5pxeTYgNJxYpK19Na1cNfS",
  "key19": "b4pFjMBWVKkzQJgKmMjEFcqoJsSQjKwrjajYtGcMQxSvbHKfhPeC4viAUfhTHSPWCp9kXsJt9kkBtLbpFDqxpVM",
  "key20": "3TPFGu2DNbUpb9zLfBwQfViAsrhR9r5QqpY9skZfEcWjCVaWXpSNSTtuxj3hqhT6tiFxifkP5PpuvA84PmfzjYTv",
  "key21": "2RT3rS4R6goMsfvLGkngi4zygWnz7w54GVpVXqf9HCGBPLw3WrtKNH7uGSD1UJvvsezJb2sLv63Hy3W5BNBPEWFY",
  "key22": "h78PXJD2xtvxoBWHFiwSB9WHPorwiTtA3VrPhtmAZdVubGq8s7vTcFyUSjj23JJfa5shJyxdpfkQAGVeLTAhg4W",
  "key23": "4dL59VeArVYLY2PXJnVzPgKMKrRXxxP3a4LRRTZBcQRkTR9B8d5pLFQbfFwridxBbfANzuLa5FGbTNz2Mn8wh9G2",
  "key24": "5whuVc8J3rkeoJUANHhWFCcEkBEfFXomf4v94Xg3tCUet8yqHnm561CWRWw6hsoLV5ps7wrD784JnyJFeXv1zJ7P"
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
