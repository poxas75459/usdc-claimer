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
    "2bLhKq5woL8t8YDrGmGjF8NgwUx3ncxTRiwL8nzK8pKErWJoLpbsf6XRtFcqUwoizPcgeuwmZ6apgUdbfkCAbwBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dRtzr34S6kkUtta3sv2tK6spQWk9E3wbt5dpdNsK6XHgwnzESaDfMj2MxvECn6BTffA13Eb5k1wv7yJ2S58sBUq",
  "key1": "3Anu3WAA1J67ex99ehz7Ge2bWvAjt3JzmwrMDhQnHTjANRdJJdkvhZwB6zycvE28rSsdZWN4uoEUvr7C1NV3Yyz9",
  "key2": "4iHAunaNx542i6J4XeKCYF83c6WX7FNaWcyAH9tjJ1wnNfJispy1JrYkcj82zZwPJjgfB6QCvEEo3j7z3Pjg7QQS",
  "key3": "2hFrkXAx1wt8CT7jmgMDncULeykvRW8gEBfcYG5BweLCs4URC4pVgUXrbAgPZ34kD9Zqpnobd4KBbWp27a9FQmeY",
  "key4": "YbiCM6tWPhBau5ngundb8qAcwWhiMoCoXjR42Bw2pbD7TAtFZhcRSjsfvcJsEaBe8uBgEax38GEH6yngMKu3HVG",
  "key5": "2cDL3SuSQDu4XXn1LkFiJq3bq9W7iEN1HntvxFpqntkN5VabP81iVTkY6sidSwYsXfRTHLsMsBVBFZtutgwTYEmn",
  "key6": "fY3kksLzfwyvUACXF2CK2JpeM4hg875QPemD6ydVTw6FmPk7pyDDianNCgcNcv8529NZaCWrodEseeLWEwtG7c5",
  "key7": "4JqBDuGV6s1QrtUArUoBz7dcieppKmdJwA7W4bp18u4M6H8qXDv2nsYTJXRq6AygKcJH8aTCUbPRDzbTra6ZvwoL",
  "key8": "669mh4SRJuBAEUb6bNv7iN2tFoCj5REiViKuUkoydsM5PwctuJC6CiqCMLX1ujz4hbfGL6JfcRSdYEMxY9PxzsVD",
  "key9": "2UqwVpAeEwbJZuPXvJHRc9xuW6jJUxixLrmStBzLMn1bs3wehsTB1hF6gFEQRfpwKvE5bgnZurWquTNo6FJikTXf",
  "key10": "5GFbG6o1Zoxj5Mmj6op8gvJHmW27DkyZ95UmujeWJ65uC7pU7XFWV7Bqg87Rr4x53RrgxJ9pVUYwKf2sGsq4KcUU",
  "key11": "4wi2sTHTUfP8LV4zuN38HYRFvSUfDiAsfE3uNtjAktrjtEQLxzHqSWr67iVFVSrr7VpY8Ct7KU2GL5D9AyomBic3",
  "key12": "5MGjFjDTsHyUkEpjNrt3kqA4nSPW3v1K3kxns7RBtpWA7BLn6LgeseHCLxrBuG3DJjbiA7Ej9bQArmYwQYfLJikg",
  "key13": "4dP5FmDbgxMGpB8jUBhQDDNnu6n7TBWbJFzXLczbkeK2F2B6wtjSWZvCSeauqtXiPi5doe44JzeUVXEhwHNAmFSL",
  "key14": "56Rj3M4BUFoFK2JXtKtEt7QrJ1jhcQTaZ9Fmv6bNnPs8gMnYPcctAPuuX2XgBTnNM3T9zfD7YmJRBPwbTs9BxhqQ",
  "key15": "DRc8LZxGT6SZhDgotieAuCp3X73RbvaN4qQJqMkT2h75ZGMxKqLARHpYRdDfAqRM9atuptvBRkMR5gAWPX3RBco",
  "key16": "4b6qwkCWNQBuEnGEMUVkjbrajBNRZH5nEcnwGHfVuoHdg3LndLe96vpcoyE7q9WEqXBbj8fCqodxVwWagUQbUoFC",
  "key17": "7ob3N5z3nhcAcmhSesZDHpZDCwqXLayznATCbTpqtZem1cLby1QJTJeXydVBDXRV2DZz6WbupSGGEYYGj8LmKVa",
  "key18": "2oDnbtMnfZj1ebZgZ4EtMBHeJaMUy1phiZXLUrUUgn5PGVtAAr21B6DdDcxivVvaotfbLR5BAr2yi2XjcWsS8wZv",
  "key19": "5StdMCy4R3WZk8SJkQncrkCFtjThQsKjK5Z2wZ2RyJMAvh8zGWGJXoUrGCJ8wzEYyJNgcQPp1B8e7ze86ftgpxcW",
  "key20": "66sNvhPjuPkkeec9b1M31RofkoKSJxF4GaSKEKpaFzbQ3XpmHyCXRPc7W6rTwUT3eqSwgSPU6HhcqNRshG7Wh4MU",
  "key21": "ZYjmVyLjzMhssNYj1uswx4xKFWJyTQeVh1j7QrHUgoZoUhMLScwLocwJKRGUbtC72qUeuAjXCiUqiDhkQTNCxNa",
  "key22": "2g2M6eW1DxnnoZS5qgyomnfF5i6uUg4eDLmBQ4NNyi8UHwS5pZxbsBssGaaRZbPgLRU52yufefUqPvAmxbSwz7fZ",
  "key23": "5mkQGEFdAzcJv4s8b4cX9dEo89WKVZ9ByFUqT3T4cM94txM7twhsreBi8dZKnVQasUMCwkUF9sS8AEcDNYB3DYVN",
  "key24": "44PCxyniGtUCjFQhBpJewQCLEWL1AhLKoGGzL4MdtSZha4c6rSHhjGWYF8Wupw7YKXaifgJWwiMF2KkcUYiqsV13",
  "key25": "3ujAkfBkm3Lk2vFDM89K5whg3QPFywVR8Xb7tE3hu5xUUiAfRF4YkVeuqCRSRdVZ2eHowrNgKYEZo66E2wL7dLNs",
  "key26": "KNLYyfXSXZy5ZwsPM6HsLQDEfcnBSfotnfur8gewHLu1knfhs9WavXyBondtZxGiupQ3M8DX9UypoL2CqyZuCxJ",
  "key27": "CBXqUBEKvtLWaL5KByVQ7jo8iLoczgLyUbdxp9U65AAWzF4BT6VphZy6rqqcifFkZeuzoSccuYEW3LXteLqQLSy",
  "key28": "FitVvayjXbNn8WQ9ABxmqk9CFannKZwqqWMHRhMGdeZwhitU7MSfQbzhJaTR9p96umrJqrisuC5Cfor8wWvQwwS",
  "key29": "3LxAPTnmB52KuzNFNkTmoYgZA5mh7RkvqcLQspZHeT6zQktzJF8Hj5DanQZidyz4KPb2buFWsHTq3KXFyekh8G55",
  "key30": "2NTQuTDXx8BxLYCiDXGMeyLRTW5wDEcnCbqJYN28cKmh5uJmtAE7jsw7yfeA3u2ytPt9gXFBmvcNXgG3CNPxhgrU",
  "key31": "GDiyR2A7beF8mYUfTaXwi6QGXs6rPmH19urYuPtaCHuTLih8gqJc7R72ppmUE2PdZb26o9wU4mAdkh2ErgaKqXj",
  "key32": "6SGbZ2RWFBBap7NrWsCQvtLvyYo4z25Rdbx9kkiKkxwH8yFca3RtNp1pN8N2UKAj6HwctoKrBn4zEPKaLZGpRmT",
  "key33": "KbxD4SmjnQZFidhYQtF6aV4764yEBHgZLvaND9uQcjYhU9zpBHj6UEvb2TbGfbJdy4mLQ3mvCW5YFyc42uevz7Q"
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
