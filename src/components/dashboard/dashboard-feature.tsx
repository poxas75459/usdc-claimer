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
    "59po1UxA65TWz8P6dRqAeLtfCMyG6W9ubNHyQ9cYMempTUi2CTMCWwPKKn3e9JbCL4yj9vEr1n4TRwopmaeeVqMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oi4QtGb4wjoxDQFzZzyDK5cHnddqMicj3UsF2ZmPtygoKocqB2zTdygbaVNoAGFEJNnqRP1n8FHky86baUCPdM4",
  "key1": "2L1aV7ms6RgRrYdztjxi2txqdXKRRMoEtnVUnDcC9rKNPA39DG9k5rULE2mAzKKwgdPQRQAGcjd5xQths5aQbBS4",
  "key2": "yoCWbZBmK4Gv7Ea9z2ww61tf7yezf485GjTFRftBkH1DS6svCZpmENxvwiHmKL5J9b24E4g2BwsXMJZUVcqLxZs",
  "key3": "3VKaG3TQcQwYtxRVXsLTHRFviDmcS5mZGQtT42DQAuNaRWytXgd9xpRWtPzT1AuHRbsFwksgwKYvAoxNKDa3Mw8g",
  "key4": "3GjR3eQDXPt3HLzPs2S6UccA9MJeHbHiordtJAEYa3JiZnRSnGxuZFkk2ZYh5QHu9USiMAJbrSe4wa57WjM6KyQQ",
  "key5": "2bujQa9tNuRsVqiu1UVigsGR9NFMZxqBa1e3faJh9913ggkkDryfj67Ae2DMLHpMLgragvp43Rf8Q2PmhHnyQzgt",
  "key6": "3TX8qeFCSPAsA4eRcDRReqfeeCXTjaZjAHDLWxJcX7ioM9qE2YS4cfXtNwWsD63McxDcDx2yp8LRa3gUL5zLuEjQ",
  "key7": "5WPA1GywApU9LM7cjjnC7DPqvMtczujYh33KKpx22gmiYSNUENrpiiZ2Ena7e7PDvoQpQvF2Ndkb4UwFMe1NZ2JU",
  "key8": "3XJN7HNkFs4dcJLvUcEZNWe6sbum4KCX1EYQ1yYzZMFj8oBF6f6BZNRep551z4hqZTgoMGK9SQpKyJp6iwWX4nZ",
  "key9": "4M7q44e9ipjWSrZESWHppuUtTp5yZFTQg2HDPxiR5VPje4Xi3iThS1eUGEKbHvreLR2KoW4txt5EJTTCoXLihRaK",
  "key10": "5wJRvqB29p8knJkWwjF6gku5gWTRRsGpA4x6Pfg5sS1k2Ei9ZGiFWEq6ayXQKbvAwGG27Xsjos2rPeorGCHywLHx",
  "key11": "2kGkGC6c1wMFt787GSRwuM4R4VVnEqHDYM9NKr6nHYsV2dVHV8qSZCwXXTu9zi7pbTUbRRu8u3Sfr1hG2D2S1w8D",
  "key12": "4gBuAh5ZVVLtxascWJyDryk7STgay2vya6kcnqE3MfiGi12md28ZxjCu2pgiXuTZSrDm5Uj36boDtx3dUrrusgE1",
  "key13": "4ayLXrTyzEsovPvdMMu8pnRBUjrt9AyYnizmvCpVrGechL7kq9Nnn1jdmDiSgX7wqN4nvAeCaKDkQLgQDZrbd3zX",
  "key14": "47ZrfCwxLuE4TmBscdyjAgJgJr2KcQuS8JZT9rnuTxuSAwNijqnpqAcxc9867uz6GWPgBqjRVnScWq7z1doRHxQ5",
  "key15": "2EccjXFRFMgVpLvCakPJWjJdspubb6geCFF4PW72T4n1xCj7UuZpRJDNzqPNmzpoC1LAeT5TBbXHPW7udwyPYiM5",
  "key16": "25qRTPGzWVcD6t8BciMiYeDBouzgHbNe9JWpFrj3Rdsy2k5hJCVu7pTeKysUmzgk1mjVyvq8sbmfwBhKPvqfQXYu",
  "key17": "2UZBy87ETYv2aHgGS9G8R57218qPHtcGKUpu39f3MGya8CWu4ZZvJwCa7BtYeaE6w3DSVvCJUtKKo7x5QLxjeLW2",
  "key18": "sZo7TarYDqshst9D19A9Kc98B7WysdBVbwD6SCBCCxEgidVM4WTapqfv1mizpfhKmL7BLyoRsMHb89YHx8Umbsn",
  "key19": "5reUsUtd9EQ4KBBuTrU1ybezwBFcrunSPzhZy52oo4Rh97YSuXDSU8KWD9JNVfYiYq2XNMnz3t1151rCCBG55m2e",
  "key20": "6bJSQTCWZYxDa6PNWJGDGjKzTkhbipu2QjzaiLYts7cgd9oHcyVGpJSugFmZ6eur4rerS6QkyoZKiXKWhQTkv8K",
  "key21": "63Z67xxSUdwWWcsqP7bFVmngDQF1NqHxBwYarWM8kjRu2GTft5i5QZxz5sCdqfqPpF28mGWpYBfH4C7xZbTomMYF",
  "key22": "DRJBoqd68TJ1rD5uQKsoJGpb49acKFyp29Ms8pWM8hW5tQnboViSQo1njgLKUCUNGnRjqbQpgoRJmq7xYYhHV4W",
  "key23": "3rSEJTm7RB2PjmV9HTxTsA5ztvpQgWGkZS3CriyHE7BjEtugunrWhFi2rp6tYMy7Sq2R5WAzwVeXxSXDChKuvqwJ",
  "key24": "2QLbRDzAaXDbVPU5cgExG36rsDo9LxGxb8B1PQTuGat8SYtkf8Y1LG72g6b9h1CQjKQJQtrLJLWeFgSvM7sp29Xo",
  "key25": "2qRKoK6T1qGhkP63R282SH8V4bCATvfbHDuGYfQLEkR3n1Z7QVwLumcMpiFw9hmt4mp6rU9wUCe1ED9116uDCCRQ",
  "key26": "5yhxpCR6QeArV7sA6rDSw2HQhxVDmmgytsCLjA7zNqP5HDgQWVEPtxRxCjPDhzetsRXcTAhjY1kJjkbnQcLsUCsf",
  "key27": "3PLEEePgi4CXLPtkC3x4wawCczHsmxdZb5p74L1xnRyCZEC472P78zEHyj5ZwNLFheiSEEhTxfELTikukcwTh45L",
  "key28": "vZp4XTTXLsbTs7LcMgSASxcSsmKg6pzLqtuc9iorLDWx8fhKU7FNQtK2eQv6d5ETUxyBWpSmxomYd9Pvp4YbiYy",
  "key29": "4SrbTqZm8y9KruYP3HPjm6qxKw6ts27CkehpwM7bPH9d8w1gw7k29DFRTwRU1nY6NunuwGEw3ZB2RJRGBLtZdx14",
  "key30": "2thqU3FUBvPTAVmuDYpJi2AqFZPSUSrkbRBpR69m6XAdv9V1SoCj7hhymio1obfqAkwuXbbzwB2c7QVwq4xGYHig",
  "key31": "2FSWWgsEZzZw7FZre2JPH4cRNZMbpgdD9QXFZaBr5tfYf7N6DuGfSn2vM7rytPHenCMXbdUQhbsbf6gmuyU2WM68",
  "key32": "3ULZZYVJCnPfceuS8TesJ1TAj1FyjqLNDhKgSA7G8JWC3Rs9zUfpG3a38CA6CPfWD7vRWwxGNMXMG75WktJKE7TK",
  "key33": "24KF6vT5T2aeXKH9EYQRdFpjjtexD8xFY9E15JqwkiuvBvch35LEUwm7TnhHqWogeVDUUZ2VBJarCXvGdHNCbC9y",
  "key34": "ddkYkSy7PBLG3FB44eJLkvWCedWSthFjL9ehbCyUj3Ch9Hrfu1t24qUHhncFMmKxhFeyh34cngkm9DW7oLEJ7CZ",
  "key35": "2WR4iTxDtq4uX8DoT9te2ybN3AB9a9ieUZuLzL8WqPGSMTzEvAmHmtWJcyCtCzqkNeSVMR1JXvpvAWdqKD98cwVW",
  "key36": "53vG2fasvAUDzachrRmtQnqD4xAiNVxdMWtmvLxfWr5ExDFjgC44pWU9WC1LfKHRh6WC1c2HmXXtrLTFeAnJx9Lm",
  "key37": "5Ut3bzxLeBVLMrugZ3iVYxFV8ygv1rticj3iDHAxbcTWbzCQp7Mx8AvFib3TBMoXEataJaj5m1BwnSvQLAWNZMXn",
  "key38": "395EnKxZfAgAkR9kSmW1vKdp771DJuhar1vJGgYyv5AXaWzhAuLrkZsev9apnwYDL9shZ4zBT2DvgDwcbi27fECE",
  "key39": "XHxjk55abZ5XocYcU6fzNFjACmqmEK9GdAjmSVBCjjjtvcgqdSSPSHDfF5HSg7aHpAFD1vgoi3G9b2ArgZkRUG6",
  "key40": "3zqB3bh5wKWME7PLBV5F1fyjLdRhnZziE3vhBJJxwN9saqYrp1vpsBmEP8AQCbMHi7NmV8mUcEE6JZxsKsqJ8ke5",
  "key41": "wPa2KZ4rs8c5KzRekhEtTScaWvidKSp74awEVmtkahMRmgiSEQcwrpd3K6i8Bqm8JapB7w9KGixEsAFVCcFQHkF",
  "key42": "t9mksjuoSDBCw5gecqnWB7o6aJYGcDjFGLkGckW4iCKQq3vzVjRTZnZ1apv2Rjw1NYE8y5mb81LFqaTiwudgSLr",
  "key43": "8QT4JxczyTF9QUqBdcewucBj5xGnYZQD5f7j718hzfBcwrBisKNt8hY12ePDQ1gHQy25MyhRy8LrH1SP7vpX8uy"
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
