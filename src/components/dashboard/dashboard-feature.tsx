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
    "5ELn71NbB75X7pvsj2V7JhzH5sTWajbsVFNk1mGeRmjRvH28YSjuvNhuErxoDHSja7ZQrEHXRzcdktfiPgiDJoz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "478ZJ7YbbPcSA5YoaGaURtXDPedeiZtHBY96tnek1K7Af9i6pNiHka9GJ5CTGNwAVN1S8tiTHNZ8np2NbvmFirfM",
  "key1": "54DgWVWMhoJdRj21Mp3XcMQv1QDfJp8R9BYpFoaiWsnQDbn88pQRgJ418K41FNQTAmTpwM5yKrsbLEVokbTYqA9v",
  "key2": "4zAt53vXPpTj7o753WfKs1Yq6z9spaeyPx9Dfj3nCJ6GmfpeYhLsEiwuo8fGKcAvLnJABboW7td4bdjjBx2zbW8F",
  "key3": "4fswZwrkeHHjGCE1oz27FmS72PNwLrKhujXYZ8QMgL8CxCegMZdwLYDDun9fv6tPVBx1JuNJrxhwgEkC2UT6HbAM",
  "key4": "3yw3xyyx6xxppmN86VS3r7uJGqKoyENadubxPpgjcubGm6KbUDug85Z5RLZVLDazmpXN3oMUVfDevyaREdQEbVXm",
  "key5": "G2rKw17NNTt5kKGNTqf7HgVRKptVgnK2k3cjybpqKZuFjYrSBfDmotfa1uMMAj2TrBDbL7MTjV6qj69HQp4gWax",
  "key6": "2Vokj5TPDMkAjmH3Wjx85RyyX1MTgqzdR5X1SLa8z78geJTVwakGDs6bAQckRHe5YprcxFNVwTCs54TgZ3aVksMv",
  "key7": "31BrHoHdcc5UGCu8DjgwWGtm8x9xcS1xaKYhDuJRysxNHt4ywbTk8Wqg7e9W4zuKz5pCTZHwGLgnVHhhwQXTJyxD",
  "key8": "3gxf3UkZE492rAwQFo7N3xHbfk2tycZAhhRSd3pQ2ZKfLL73MazyogLr38i7jdrqSqS5qXEeEJ1Uvi4g9WM4qje2",
  "key9": "4TQNB851jUj6p4qXsDRi4y7HhS8SyqRC37rZ9fJ5gjSThHrqWzgqdsQVtckQMrdBzBrGXvV9bxJBxpnRzjRSFjVW",
  "key10": "4HHJ3Dn1Bj2taHCV3dGTnXbQHSWhLUKgR9h5o3DFxEQ76Xp6CM38b72bhNpNoopFRNiZuTZhbBGUQucd1i4sYAmr",
  "key11": "3wtHa6T7CKRihWj8dHYiGstthEhZgBzurkb6KFQi1QGJw1pFrSbTbzxgP7gnK3cYLnmmqKDb4E6yMKnoQcBQdeER",
  "key12": "3dXE4NdoJ41LsqC8s1Tds4zyccGGSR1sqWfRE1548Wb7bzcWXdF6YEPSMyi3qvPqLf2NNhGYVMBpPfU4YSNWdLFc",
  "key13": "57ZKq5pyf33XzX93ZBN5XpyuYkN5neLFW2bsG5JW2zqCx1XuBDNdffqJHhtUYrUAftCJ7zCq45XC1eV6wxxzkyCR",
  "key14": "mN5DGbzfSAD6KnmRQVhFx3imKRRvpbc67FKaydCraUPAxQRChHbDuDwdeUa3AruvhhSNVkcyrSsKsakxy4U28RE",
  "key15": "3gYgn5cV35Cfrs5r2FS1dMYkATpXz8tDdyVdau9ZsfZY2H2MwiGDek6XRcqcnTnxAyPTyfc6KpgL1yLf3b2Nanbf",
  "key16": "4ABsmtfTMCB5QzV9nVGL4xxgpg9D5rwxV8JwnxsW5MRSYZxLkyy47m7Fc7yP5j6h7WkjpvQ2HEk3HeP74HXHmxzL",
  "key17": "5S1Ra7vRHWVMwHX7KNgEZdDcD8TRQcgPKDHFSzNSnX6AR26LReqAk2kWWZeivhFbF5SMCMUgBJyNgqCuyWY171og",
  "key18": "3pQfD4BfbmKS5UT8DUG4mWv2DhHzFCDVY88XTqvY91s2egVwt94azyvxE3KzYYkzpTHC7ny4BojmfXx1EuACgHUE",
  "key19": "4Ym4UNowyQeBB1ZQzxBAbWW7FLoPauuYyARwQrhmunAUwuFpqs1qfkubUN7h5HXC88RdijqKeE5d6LuUNJZgoxwL",
  "key20": "4zCuW4JmADAT1GcKKhkSqouVGBesJQjBWUzPHnV63MLvvSmXnesYoBvq2FCSHbapiRhBihUYqcRboN7R95gqZ8HE",
  "key21": "X4HeioNgEru5j4HtZqYptc8TgbMY4YS2E3EjpVNzGDvUVYzeMFus39gCKcwsZzzL24pakm4gbo5tj7L8JMHrVfU",
  "key22": "gdfXnwyvwTqt8eZZEQeSaE841J9c9eMUHAsqNtrJLZL1PGM3DetW5eyRDe9YiKpDRPo1JEd8cePZ7vcF6F1MVUH",
  "key23": "4ubUMfXu4qPRe7hEoBq4g78yUJi1f6tG3kt7tNLqdRbSH7akXNzgrB7LhLkwHE3MFQZsMApxz9WiCDxNYhXM1z72",
  "key24": "4wW1GYyAkeQKhYmbqM549dhsrBLSz1Eh4yv1qtq7ReXZJH4Launwqus59AkDJaVu7D8YcdwF2FSQbmUkF96anV3M",
  "key25": "3CPFUD6n52eosYh2Kitc1WTjHxQtbTBskKHkY6L2fTeWg9j78WJ5d19Q5knVswXkPUqQ9CCLkDzfsPHwTRw9ZMGu",
  "key26": "3SgaVV2SwAcoJUsqgjJWAVqNqUNjQGyrcqWfJ7f4Zb53TrupBVgqePR9CDgSXvBkqUuWdebesqhVtRoRhAnFZriU",
  "key27": "ZrDG5FBmDPy9QAQ9VNokfX2KmoKRKoh6ew94pLTDDsccsS5YjfbobfiUhtUGGtiMNN2kB2Mjuv1EkwANGSqmfxP",
  "key28": "3VEigX63HyP6wvbi3bjim6t1sK7CHzMXGwzMnHXkrTax4vRWr6DnTvtyPfNWDYHiiv8DKA42phsB1SbFYeBaNTPR",
  "key29": "5HHZx8o1e9Nr3WKd5bLGCKdPxfanzMQm95nfAePdfseJZ55HPnU6MtqSxBQA4HyYD9kpULQpDWBSeABtcudz7gr4",
  "key30": "46JoViVHiin9V546inKxJmK2onJtJfuPe2BKNNrAt77RKD4dHmaqkfdydKbBkdF48koY8viSeih9GdRmBEgm359X",
  "key31": "fYH4jbqeGJ3r4i2vQdWCMDnGvfPC46XynPFzBRLt7391NjoarTLEQWWCmwyqDpmDtrygHhHb6hs7sEX6A3koJR3",
  "key32": "2UgygFjsd1mtipom1PHzJ4Dr9jY7TX17WMUSrKVfXUk4hW9ZgqE5PyyBmYjmw7xih6sgpjfSBgM8EzriLC16eru2",
  "key33": "ahXqaMAaqjQ7QRLo2cVDcwRmTnPAJwSBZSQNTqHtczh1xLnDLAE56rxvL3AVMQxK2Y8Ad6v7Ud3m9rG6VYdJKg8",
  "key34": "32VuzdJAWQ2UFM75fSuN6ketT8pPcs4dFucHQai7fun3haeEBKHY5fsJwoLYubNzi5PU6ZEa8arGo9Wr2WDyX1LH",
  "key35": "4BCEwJ4PEzrwzPcHjNTvqMGAUQLTpm4faK47Kkr2WJHvtTkVBowq2K1b826tEuoWyVSEX2sENZmaM5E3QZFJvFE5",
  "key36": "25eDBDiQttPqLPMxCdgM6huVzqvLuJdy8m5CwBFNpmdWJ4BnwekxwQW4FmzRk5AnSi8md5849wYuwVSXWEDfeN3d",
  "key37": "1YU3Wmio9EgUFxnrXvgThvmWEqncW1kqNf2XUUTEYeBHYfHsndze2EEjmMFTEGKUtMCc2i71FNa7ujG3SPbyGb9",
  "key38": "4SoXreHE1Q7dAKTQ83E6bM6fV5qHmYG4kxeMX5iMSUhhJX6afy9EnAXpwTs4BF9r8LmHRtHSYidvJPsp8152V4rj",
  "key39": "4qmRPaPQ4LAupu37vpBRqbFbP9nvu4vK6NqChjtxMTH2nrNsVCghYxhznqTJiLWTm9c4bu4EFzHQtnmxcTfQYfoK",
  "key40": "2X77uaXbrntUsPNFQgubQcviyUDHxhz53Sc8uK4JLkAnLTKmKBoPjG93Z2qyBDMfbJKMsLjdZD2CURqN9gvMb26i",
  "key41": "4fTBjBfBTXDCPNwpUAeomvBSdfgQuTFUbXQFKFX3RnGZ13ELvwYQCrKayaSGRQcZaMjf79KyB23pEx2MMkJCafG8",
  "key42": "VgtyNipDmvbmLD1DC86uDaG92kioT9FzLJ8T9PDGDjx7HiPA8MD6EojSCWvBGYN38mThvZPn5FgJpBhpjvwkfsu",
  "key43": "Xg9jia5g4mK9Fs33g6d4n49HE4YtnEfjgrqTNCZMDBJBKaYnXZ3rkbPdh4vT8RPCsF6K9jWAkP7EjhXTGdoyQYt",
  "key44": "2Rqtsg6M8ycAzi3aovSwZgiWZKEdSJSn97U4cxQSkubanNwbpWrAYrQbQGaW7dKjgm45z9fHYxKWp2672XVMdggn"
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
