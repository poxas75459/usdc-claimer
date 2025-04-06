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
    "5PYT5wtmdbaPxuiCYDGZXh9qCat1R1w5A1AkxQbZotDbrZBakK95PEGYfRiRsCVDFB4yFT3TvieWAVihU82rwsFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KiaHzzeunnoaDahcvRzfi82CUgCxgmKkPPUnD96sAXMztE3YZDBM1oNnJAgSSdVMkSQEjZzaK3w9PvVTDGrDMJU",
  "key1": "32jfn62Cj5ZZZLP4Kj7uR3c8nBsuEJqxYpaKoHjSCwPE4JtY7RY8QLKkgvs2oCHQ3L2LTTjmYrgUivQ226PVZPAp",
  "key2": "4fjJh1UHkwPXmo5KCRnfa862vwCBj5a5b9Tv1rteaxM8qVDkzMw9c411BwhxD48hMUZfjkLMrDoUGpxWmFQzBUjL",
  "key3": "73sn7jX8PoJ84p41pNEkcc8MyeVHVAytzvT3tg9fZhKyWeYs44ShhwHdKbnPzJ9tuB1NzHTDpxqi5Jv6CVfbf4U",
  "key4": "22SdvXu6Mwb6vhLsrjH7Suzid4ezjCFb3UBAMzNVD8eAV2W5TnFgHv17RNsNdQvJHQjbicR5TyN3otArDsxZvckk",
  "key5": "5H5Dv8164W9qdLoB6wYhcgiG8iLW7KSrNXZMEGwf8gF72wjk9GuR4Yimhpr4AQMKS3dp5Er67QSzu9YVDJE6ktQR",
  "key6": "3vyeQBWfwXYEfyyr5zqpUMkn59C3Kyib4KH9fH5HZcKW8GfmTWX9AKDxHbnmcPKGSeJXPbJEfc5rDCerYuH7JqE",
  "key7": "5Xfa5afzB4wAx7wDhm7gxaLNwFdCaFc68mfeNnLBFH4uzHe45qRfhS68p5Sart3oMc99y57mqpZu7CwfeavdApEU",
  "key8": "Ehz9yLAdEXRgZTxYBsb9Bfq4721ZZGSPXLv1g2AUkRuoBiNv5fxVYhJccLt6h9zCsvsT2JLqsz9pS4BCxrZZfDi",
  "key9": "49Qg821AjWsN5DerX8hrSCNx3zpuDNjnBoLmhyYZXta3cNaxgdzdFjXwcGc7YeN6AWCsd3CzNfsYZZVxQTBpFek",
  "key10": "4Yp8PayLq3ao13ZkTyGrWBi4MrpjD4bLsMif9pwQh2RHeKLj2EWnNqMnSiXujGh9jdY9yqBDHxLogFPPf4u1Sy24",
  "key11": "5VimUCgtqeaUQJZdCTLt9rWrnK7ETCK1Pa43wg1hc7G4i7JKWAAdXyMonBiWXGeJuySKMkkNEDzJVCqFvdPV9fkC",
  "key12": "N6T5gxe591w2r5di4f5rofjZkKvntvTDza2b685yTzwWQXCMTVcyuCVX2G3TNaB8PCkyMkjZzXaB97Ap2P2kaqE",
  "key13": "3kG8mJVSvLN41pUNqoNGU5jrT5N3VvpYXa1mpmFniAbkPGioTBvZEe6ZXeBB7LqVFRwpvh8YfsikMrvFLhMfBWgH",
  "key14": "ukVJqwMpBwvzVQn3yYXZjNhprqvNBP5ZwMa96fLd2E2BX5pSbbb4QpMvNLiCTucaTKQYb1xQLazvuYmrZyDnN8U",
  "key15": "p5nSv1zEbHrW6mt4pyni8Tp8THrc7FG5EvcYwQD6VkEAER2jX2KnSD1FHAaUfoSijP3996fPQFwTnkmmn4o4EZj",
  "key16": "xVBHpJe2HxboYW3xmJBDsKEmWQ56xdkQhZTq8L3bCJuLDSTX1C5SA9RNhFFXrZSDwseynBJ9yCF5M1wDDJvHZyN",
  "key17": "4zQkfKqvMJS83odc5dNFwcSm8mDCTjwayhxsWzDNeBYyBS8fujnfKuQLDiDR7iThznpAf3X1rtbN92NwSwrzKZgC",
  "key18": "34on9AGkSXH74WfXEjpD6XTH1NzqmHQRQHg3bUkEygR9yJffZsrBASrWSW6hNeKT5YroLMDpyjjhs8rQNiYfWkXr",
  "key19": "3uvESxZKNgENht7hi9QzW5sSsc5wD5PhVjjYgMZNeFtAiaSSvoKtTHmDs4mw8fbHec7sNm2SksL3QCRGL7qRaUd3",
  "key20": "5N6ALwfBALtTu234H1kcp9rRPppb5h7Epqw5rdP4Tna89Dg5hr7c4NsrD81ktmFx9iG2uunKswciSttLyLoFLQJJ",
  "key21": "5DG6tNqCyu6ZL7hbkgo6oVRHaqygjtddEXTbw6fy38Vveitv4wngNMWosP3DieEpiVV3bhZY1yMFfxeZicAuqoaE",
  "key22": "3V7RUMPuDzenvfjFkxC6HdP3AbEwpwE7zPkCC5RHaRnPVM816QHhGfEccNc2nvuyQXFCmWaNi8ZDXYqEAuwbaRri",
  "key23": "56Fufq5T2nrvYcFHLU5KXHiknkfam3jLpHvkxWSh2jumrDsYQUTiyLfNqWxymvkZMBz2cdik5Nc58veX2y528Gks",
  "key24": "4VY5zS21HU6VMbFsTRagocFvBaEs1cA2i9M5MS9CDw9GTEG33pdFk52qgEh8Z7d4XM5KQ4UpQ3rRuHm4uQbb13xw",
  "key25": "2wzteZvVhbnNQbWAmAzZhmhHNJKVP9p4uc7zeh5w2BZn3icMnZtLgC82GDKcjcTUxihibY5R8bYqo8CDgqvybUKt",
  "key26": "4WbuyeNCXSSXUhmYHCm7onfuh4GWzePuQTq1wyfagxeuwaaZCE2Z7pdEu5nybbZtroYkxtJA3b6zsXK6AF2DMRdw",
  "key27": "ar8EZf6J3bqznnAm86eusETDYRmcKgcHQ9mTeKntETABMtDAJLz8gomi7bW9NdxhQFbYsCeX5b4WyYXCFzEZ67P",
  "key28": "oW83PN7UhpU1XY4PGzdTKpqEVSj1nicTppC6tKBbfBWFmHSvkeVxRgiyE6zFBEz8o1wEX8VEVy5BJ1QRpHMWKZn",
  "key29": "3ko3V43uvKvLHDcS4y8B2yHUcf5mTHeRBiEwTdYydJ6HYuMNUkdNJqbGEBbxiPLAtcFqZTyA1EJUNvi6VS7eQiSb",
  "key30": "wnhXsRtZpo7W4uNSDfkD3agcZpytkvXMr5HkmpyJ8rmrqwgy2E92P4ja9iMAdQANy56czdwDB3nSuRRow4xbLae",
  "key31": "3nn4JFM8NjtYs4P2txyF112GifszQ3z7exUUn1VDPforshhfswnJ5MjbGXvJNwRBCkxtczXf9nxFMRgaKyzkb2Yw",
  "key32": "3Ckp3FoW74WPA5ZDRLy1kiHs1d1gF4xoNu2NM4AYEP5SyAPaEeGwvLQN5ULqYP8andyJGJNSjLCNQEPaPBaeGg6Z",
  "key33": "4KLCE7u5PDPjHWMvBQrtKzWdTibQvygHxDsqYdtxF52TS63ziegfTw5ZyrZkWmTgCgSPjDhLCKzpDC9wpk5ZwMU2",
  "key34": "4LCvWtMkqKZfB7DjHxP6ZZjyYqhsTwbjhAQf9JNy6WbgGak9xcfwehLs433b7fhrAt1a3VNtmseq3J6tTb6myhKA",
  "key35": "2wpyGqqyTxEBVqGvdSXu8wXzthAMedKEUjsRc5QA6Nr2xGjd5fpJo53ucCvTMfDoTcwUHHqY7MugxMxR84huRKsJ",
  "key36": "ecn1JYdHvM9NXe99Dz5br5untmoiRpoiwMXNCuec6wnF2RzXv23DmxQRfcGGD5AH8ecK9NfgF6bJef1NLKqEckP",
  "key37": "51TFpHdRNPnUvGQi45mD7giKrRBx1TGBUpqe5v87xoTmFRRCmZwmrfpALGgPEZhgqb1MynhBBiDmesRbc2BLVDhC",
  "key38": "57RAcVuaoztrkrNUGLXvTb8JUCiSU7bJGBHjwnta2FjganUuxjErXNMyeRsbJqaJtnxmLNxiDr9Tf3Mrsvb4Qkw5"
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
