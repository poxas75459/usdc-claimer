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
    "3gVqC2Vafa6uAU6UB8J4Jm1avuDA3cKACK47pxSuCStSFziiXHvoWvafC61ov7yYK9EdoHr49jQnu1c9avTPQizm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XPzKY5iHXUaeingHktdeceZGtmGndf9ZM1NK9bbsaLNxJsbseSRAqR4v7Adz4y9WMTsxDy4JNGKMFhkBTveekWm",
  "key1": "4SmPxuioonJDFdxFotpiiHXLZWzQ3DcuufxPbMWzS1pvhFcwyXCo6u5jcUKMyJP74hRxkGxXj12NeyHwjNth4ymA",
  "key2": "yd52Kq2F9L9nhPrUkCUm5WU7JwYwXsJBWd6URfmwKADW53rDFsKkMLABJ2YZjW45tHKGd5uxMQ2mj5PPK4LfXhM",
  "key3": "2rrpLCiPeAVmdzHGC181ieByn1d8Mi8qydWeU72AGuoYXjSoQS1tPzAw9eqXWTFTaY7yvnFv8mk4aM7Rf4z91Xy",
  "key4": "5XwByRx6TUDQBrn8rKqtEHkwTFCYWVe6b9Y75FrYg11juZ5GkAX5HXKirdE8Tuni8F6zF4x7undybbcbWwcFgqtQ",
  "key5": "2rRpReXd3WHt9cmbYgVe32eZsbkoWYR8u9Pzxfq3WpH1qZVcnHJwcSk8cJcvGTb5BMg96kDa3Qw5bhe9sBvnWZsE",
  "key6": "zGA7xFEifNqmyosde8g4tnw1zFd3xZFN2qBeKVkXDvMmA6AMvro5wdTnCDqY5eKgTbjft8ysjPUaAZdTJWEqSUz",
  "key7": "54m1yAVnkCsNJhF3euJqBMjuenTXaCLZhmqNM96EPZ76DzdXVwhyqBm2DPjEv75oqLQAAEWgUvKfr9yoJKWRbath",
  "key8": "5XiUDDGDyWixDkrXMGWaSyZDDhfJgdD46yHJSzA2Kth8vvkmBokuzTKxgBu3HwMR7NggRkZGsYKFv6JnHJvm72Fz",
  "key9": "4ZVVtDmRD3NUFoVpSr4vBFCTd32QHsC565iDRbEivvKBV6BCSHZ9awNhYZUYrbmzUfbCZXNvTRz7Hn3qFGA3ZfkC",
  "key10": "5bgnWo62G5mMKs56BnnwrADwBMArjPiUGEDwKjHZzcWiy7USdzaQYaZGoaiK1nyVgFaRPRCQewoSm591ye898pgx",
  "key11": "aTJhumUZUF2rtn2JsffKxCJexaRvD7M9eJJzjdns4ZeJB3F1TYWHzzW4TG3wnWVMMpQhBsfnbsE8fJHJqkcfdVN",
  "key12": "3tmj24uKVHc1RwcfPLSdqiZrE3eJb6ccmDearHwxxEZ6C2Lh7RgMWU1K83SXEgb9Lenoxgg2DkMVaWM4Rz2UD9wn",
  "key13": "2eyhhyz6hNMtTF5efVP7eRRDVCAnWdgLDrxjs1iY6bPCXF24BabRVuvVuxTn94oi4UxdF4yftKe3QaoSNAMdWeWk",
  "key14": "2oLJFM42P4TC5xE7oyVgHtDaaj9AuhERcNq8cokRdnm6AzCeWJuJTeDNSPWvpZxjqUT5nSY3NHEm1aqiE3odPBTX",
  "key15": "2zVKTqetemNsrqj6R6t8TdAJTwP5z6qgepmTCAPx5kZp9zuG4aVGXPkGkLPcS5hMzvWVJNwT72rjvP5NogV3FcLK",
  "key16": "4JGspicL5t5yhnb6uGKinezxPuqoirmqSPSAmUEEFpz5CPcTB2yNZkvknRz4q3d3ixp4zUu7ZA4oCeQyP2Qg6oDW",
  "key17": "3RL3fGyydc7nuMUdLANdwbeTJSkSzS86Rmwyskj6W6rVd672LupVQfbeHnAQF35NydB1arPCWyC8n4uFSfX4Jvpm",
  "key18": "4ApE6JjDEfwTT9MNMCKmNoqAH2owUxgwDydcSQwP77jwRsWbghXgX2XX8msC44886qzPYfVYdbghRyrbUmvDKDYP",
  "key19": "Gq9edm5d1yZfb6Ht12t1bK4Zt3FafUS7N3mfTdMk7QXPSHqEhMSCPZpycXcVnPNiegLJonCcvWTJXsxwcrobek3",
  "key20": "33oUraXMRAuW8o52N7NyxQJmjgJynuysqBFzRcFA66qraAacqCZuNWH9HH8pt3MX3KVQiKAcd3zcYvCcstzYHQzs",
  "key21": "2FEP6S8jyEwTg8jg9f7GXahRqHjCXCpK3uiF3BZ4qeezMhcwUwdvWUgnBMo1seXGmedb6hBT7z8j7d2PP7cHgQ18",
  "key22": "5QwpbwNCPKdeoQthEL4kjQgsTokeUVqQhLXzsc2VLpn4k3o7ySpCTCviDTXtKF5acJADagvYss5EGyHfDqdLBEcU",
  "key23": "CVPmiPcr81tZWbi2Yir3H9ca5jR4W1Liv4kuJqjsUHz2Vda5r8bde5mHeHmriNkWEz2gMehydLSZYH2bfFMzhn9",
  "key24": "4c9KsRHX34QGPQg8wTPB2we3pa9UiauXYX8t2uiNxj8XfD3wDHXRsks5EvQBEL8LrCMb2kS35HLzSyxAkJPubQMc",
  "key25": "v4Yj3u2gUX38WgeixJP93BHBFNpRUHnyc4YLkrUjbghJZEkKZoxtXierE8c4cZx6zMm1JaQpbouLwYLGVbyUuKV",
  "key26": "3YZ8yjQ41CCBCNMUCtpjzK4n58oAnnuwvY7SXtsZP7k1dWdLnBWuTCCxZnqzfv5ZHBGXGRyKoUbTU5nEEPdH4V2S",
  "key27": "4KudsWS1Kr9JCXQ8Dsr7JJHzdWvhdxx5yJhSx3vknUD8Jgkmz5SsP7J4gs4fv22jYgYNn3Ucdz4BNJb41a5qnV6c",
  "key28": "2dhkYLUY1FTcvihHDF4X8JTPG2KYBq6W4tqxvMZ5f6CKe2BCtRxtNRN9YoJGyo1kYCXtm3eKUKVwWL8dYowANUcd",
  "key29": "gHfJFnAFCEzMLNN3unu6MF8YKN5LhumcnV7RqQ1ekfh9AZ3PDw4Uc74UD4vf9kko1KvCxb7ywo3oVvSPViHA6zR",
  "key30": "31xn68E6JLnW6waPa9SmXnk8dm1kTnWUYRLKdysN9MpP72rjnbQaNLoAU4UzPNsA7z9unEWhQK2LZv1mSFNi4hKX",
  "key31": "Ww9wo5GTmaoHvp7BuyG6W82oCqrZxaCeLJ6puNnJcsXodefYfWfFqQthnbh3VwQ7X1wpwYAFtBRqwB3JjH13XCU",
  "key32": "5D6vdofe9VXLeWjVpEDwxkf3fKQi4f8PzMq4zAvAMnKN7wVXDJ369CPJR5sYxxKb9jBWXPm5dy2xE8XYH4QJ3pzF",
  "key33": "5LoyHX4zUqrrTpzAn7LwgWTy2hsMb44cS1XizNA5FNYVLyTVP8pyvFMcj4GqRXy1rSBK3Qs1J3navTcS1WUoqe2D",
  "key34": "3iJXVwhfPXy8YdTXfdLcQmutPcwDD4st9tRpQr51BVhT7VjuABjwkVPNWahi84e1gg5TsK5zBoaCNKCLQapMNbKt",
  "key35": "2PXRZkBvKSJ5xC89auMiuj95CmtC2RjzDRkBR7b7QbTAu6FJkHZyq6upbitEgDDeEzkG7oaK1jkLWBb1T9ZEjNGW",
  "key36": "4ZUrAHGHxUNusSUNmHAJcUyL6fGR4SucaWGAfgdDgKMZDYkaSUJtp6qAo826Jb9S2b1kXTiKkBBbdQfcGofp2egz",
  "key37": "5cMRNnADNnohz7ncxj1eseQM2t18zKQHXvyf8zyqhwYGsRwJzea1eEhCbrZaB6YMdx1hi2DVXu2nAvNatuV9QpXE",
  "key38": "56n94KMA9JARN7R74NiLXQ4jm6g4amTpVnpiS9987KifVKFpsE6hoWKFvLNXfA7nSDKMoFGcyTPUcNLxkDL6PJHf",
  "key39": "46UMwykAG2ssecm4Li5PrE3qXWE72sifu7Cz5EGe4DQZYBF6Prm4ymJHx1PkenyUxaosX64Md8wicWJDneeGFKs5",
  "key40": "pSk8JiXnNB21Nite99cUvPTyBZfE7c8HiPQ74PHDNdybebdFfzEmnHtmmKQXxBQQuRTEB3sqbqyGHFvE9xqpATQ",
  "key41": "1B7GyzLWnHXguQyqiYAi6zWTb4N2PAsWwLfXxMfZtyMfuuaeSRLjRyuqjMooRV1DJFxSpqhbgAzLm4BxmoHSoo9",
  "key42": "5WnouSXTe7jLXdqxV5iqn6aDXvhmWyKupUtzXiE1GpT7PBatezpXW5yV1gd5j3Pk8moTzCCKv4382jLDwpvCHnsu",
  "key43": "39HA3pPEkqFJUah7RiDgA4XBLuBEmsnj7H7bRmSrAVkuFjrqJteqHSGgsZVWciA8WD7PdrrzybgQ7mZnSUz2covZ",
  "key44": "3tzquHsVjeCB9SZEY5Ci7CwKnoZCx3ph6axw9s15m13iLsWaA1Bvqb5JiLmhzK5Y7rz7DniqeAEqeuHmwMNnSNQx",
  "key45": "5hSKNHub7N2h5HF8Wg79EqCzyr4oNS9cesEBzi85KhBNq2BfYESTYjf96rRHeaxfhyduSp9sEYXLZawNSy4seyyW",
  "key46": "4jTvZXi4V1f55sg1UgDxyqabo2oty5QKgqo1wo771XvdqLpX1kTP3maxiemC5LeCdDzkJQYuDd98qUtJ5Hc4rETm",
  "key47": "3P5dVyVJugocar2a8YCfPX3z9cuJTcr4kKFqfYEinVLW4uBnipsEDrBYEz8VSYUDPCdQc6QBms9SCzxWoF2fh5fe",
  "key48": "2k4h43ykqinku6GEdhr8NcLTnEPikNQsY1yJdDfE9P6rXvCyRQjCX5ef8yXKJ5VRserpsHCpZoZEWxp82wewe6vj",
  "key49": "8cVoMCQeKisFCH7CYdxXZagorFd3JG3P84wArMiMwHz7t1kp9xBiDW5kwjkTrh2ikdK5DoXiqEgd3vGansV4ZG7"
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
