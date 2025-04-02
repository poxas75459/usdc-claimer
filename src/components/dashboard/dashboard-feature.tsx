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
    "33V5BtYstANXeoVtd88EdP4Ck1NBrogR7G5zZWX7ZU7hX7VoSYC9y78JJk2toifYBPLkVLjX4ZRWQJh6sy9ddvRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65EdhFP6UoCWHZFnRmCHpFigpMJ1fxuHP2rSfpBcGhvsKkAwmJyA4tb46jPwTEctJtvbGkQH4a1UF7MHcDKYy7mE",
  "key1": "2GT295wH8nBhEYiS7iWPj4eg4ys4XL6caUjBZFzexL9i2GbdtjCqQMMp3Shj6ggDkMJkHxAVFFzMrvrinbieEaS8",
  "key2": "G22dw5jNqEwWiJsHQDZVhLmmrbbAQLVBAY1dTQUHHunW53dFm8jfV2eX3jSmDATEctGThaTHY77HABTiRDyQW5M",
  "key3": "4Fn9zePQJVrtNCm8vvYHEtjCqh6K7UcyGBzUN9XtZc3eBrdAagFbnNSmru2aaTz7horic6yLajhN4ae4UUTgMPA3",
  "key4": "49fuGaAQBLpi2fWUC3yXqnNWs6EpheCCMfVeMc8Tnr8gDxjcSs68dZ9Zkodd2iR2HTUWQV8oJuygTRHjjg7YULQP",
  "key5": "3mAwrZonwBodyEoFo24LZYpSnJrMYrZpYLT5or2iB6iw75jhNCSZnYsiPEQ57iHwVwurc7ai1o9tQchNgGzp2gkY",
  "key6": "3gCxe3r2uuRTeZ82Q32PHXkMTXBXAS2LKxVPhowHwiJH3U3VSGUVWeTun5LvHa27N5pHrtTmHUkF46JJVUw3mgC4",
  "key7": "45Zgy34ZPsQ8mrdbrd5xhymknfGbV3fGSBK9g5FWpsu5SBBy1SLCw6bPQ2SGe7eqUvkPNPXCiwAqkjf8bDMhrNrM",
  "key8": "4BjCw6p8a8vf5e46mYiSU92w9EmFmknxcTYJyzTeUw9sG8G8rbmjSx853cuysWcXVaA2g2ipAFqsbdh529peaVua",
  "key9": "3rNJKAswnzA8VNqzRDtstb5ryAZ3dW8kaqXk4vLGoXhgPHUn1tZNNU12EfWJR1kNbd6vYnb1y1KXhLcJkfDjirWQ",
  "key10": "3pHGzq5qJd6Jf7hCzcYAnaw1AF3v6CnDSaAnMwZZn9popJuPVw3rQ6Pf4V9Wbk54sCbKvgGiBVXvWwZNaw5jsfmc",
  "key11": "3eDvBnQiWgBBrjxtXAUrzGUGcJtZPWbQunSbZW9Yus7tfY4JD33ZCkkvTtzXvhDqd1E1WLvmuLW8KeR6nxw2etKG",
  "key12": "2tRVSFiAZxo5diaZGxC4uYDPui68rEQaRUhznHqgD4cNGRnV3B7BKDv6xZnErNpywMt5VMx4Xs8aMFcC3MFVWaA9",
  "key13": "FWwX6561r52YU59p7aT8GCHRbR96QNWUiTGK4vgwnqXEubYdMdGkDrfeXob1hfEWC7nwGwvo1hRarsTYEjR8gR5",
  "key14": "2i31avApeCSLZ3JSBQNFzS756iUVBzKGi2GSof7tXLp8Zw5aLykudY2xYkwSB5kyKA9J7YgcPHnAfeUhZ5idyvE9",
  "key15": "4xFgtMsiqNkP6JtpBiTwDqWvEeKMZARxDAhBWfZ36nk5kqmV1JwVKhxwaQUuYKuce2BC6h9AKH8ux5H6kCJTCS1Z",
  "key16": "5k8k9haepvjMsL6dKCcJGjfmiDwDaCDwbzJNDZXB2m4CtwjbsmMQhPx3AFZ81nLa4KSj5kA494xZTcJNGxNMn3zi",
  "key17": "Lq36ymcmALP3yznjkQqZPrAEivcisGge66s2xv4wi7Xb9Pa2Pi8J86o8LhFWW6z1pqooLwKQybFAQBDwzo9k3jo",
  "key18": "4fq2UvjUo7Sz1T1CTHmogFtn4WXFMXfPaVtFfegSTxxMVhUMhMixQ2yg7bM67Dt76L3d7dQCypjQ6oTvUMG4nTNS",
  "key19": "2T7YwsSrCPthMaoyARfXiPYxo52R7QSzkCaSqUAhhFts96cERfvXaLF9HYdfMrw7TbicamL4YjbapdbHHhfKGnNh",
  "key20": "5p6pPoo92UXHfD6VjfRVTgHX6yw1rGYQ8GKgrZLddDZxKg9F4w1kM46UWPMyigBZptZJb7buRkq8V31VyFJg6guU",
  "key21": "5nH4YPdwQYD3E8Hz7At9w3RkMjYsg3WL638xD8vJsGEXZ7LM5XBEAWKodWMAPMyrTj827drTcuNvtnxrpbmJP5nU",
  "key22": "vRiFPYEf8kyPMrwUfipQcjQ1nWejgQU7FSzyk3XRZ4zPEa4NmNM4khLh5P4KFELpvP52isedWhcJujV4AQM2drs",
  "key23": "3wpPMK8KWR6dsLKS643gjrMchbufotZ1XLzPS2EqJjy9MGfkHCjp3wieMJVfupD8fR1xvNqksyqAGoqFUZrPLHsW",
  "key24": "3vDFmiJL1pnSuZ1LfgJspBXXcQ9PR3c7qhheHuv1UCRmfyz2UmjrL272tLYK97LVReWnDvLbqNsZTyktb56M4aZt",
  "key25": "2xjUT23Q5CE4HbMMqhXJqCMmoJY48YUoji9F54ovr2Vw73HKYKBCWEhuHcPuTYrhjEczCL6hY8zhjRi2k3TRTf2c",
  "key26": "664eoeLe41RESmvqiapoK3gD49XfFn4TH3jkeowZrYygD3M2rBmEbVUrmsZwMwDgnMJf5gWTr4PUv4NsAhAu6dVT",
  "key27": "3oYZqhjqLYDJ38dtArRKzsfwHJgX2xbvpAAHmuNsxgXTNUgxAsihh6ykVnYaaDaTrjGPcN56eoQJ4SAzFZ3Q1Dvq",
  "key28": "3Yb6G9nRzwTube6M8HecZumzJ6t9Bm8y3DKWPDaRRS5Hz2HToXQHLR9vEVjJki3yva3djjAr83gT98YQ1VphogW1",
  "key29": "4tLBdMfbBzdTFUhPDvJfhL8EsUS9Mdb7hQtwZLjFTGbeg8TgzqrES7nYmHTzevagAkzmCnfZouALUFP3neHCrXzd",
  "key30": "4pUAKPrHkHm2GvCqTSZrdfwckc1NE2Jhsea2bDrcp4EcZQkivnc4tkCgEcKDETCxDgvq8z7ewKB8o4TSBB8dJCLX"
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
