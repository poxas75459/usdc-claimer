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
    "8Q79ahck6KLijK9p6MRnXomAMMuiZkqBUq4xVzsnEMK31XwzH5s7VKRTVMzoiyu8KNoVZaKMXf8w1dpWGqAZkuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vmV5BjQo7fMgca1YSNPbZXrdBNXLAbaLW513iPVHQFmNNt3PxNT5STCSFZ3aSzdJSGHYQtEJ3TnrTxY7fBsLDvA",
  "key1": "5tHqNejxEqzHmtMf9R9Zta8tG7RaUibS6K5FdWgFsoEyKqvPg4j86GnGPvm8Y962RfKgryiXKbDEwTnP51BA2n2E",
  "key2": "fvUnaSx3XoMRsWDBwCbnpjsqWDgibjNYgNs5nBE6Kg33GcQKm6EB9tsxrtuVW5WQxfZZqqspcdKe4aznCjsJnAx",
  "key3": "2Kw8bHG3HjbVfR6CjmNAZtpzhRMXw8ZCVUqNfHkLo9Z1yKZg9AGPevsXbFPQBLcKYn9yb5Ao95gUTaHwmJJqJixr",
  "key4": "LTqUSpU8y7L7XNidBoTwvzAytgUqhgwyw4gnLePT1t6wRLWYAjVHAzxNPxq8RRC7xARZwh135o3yq57fDgWEYhJ",
  "key5": "5SnsomKCK7mfFCt35cSNp4YRg4PEutt6jubmRL2wcxph2pgUL3T52dBoQbdR3mHzwBULj7Z5yikgzr2SBkS1EenA",
  "key6": "4yNrdz1FZqEEY9EaYf7irUCcZ7e6UeQvLkzF81USSS8pRcVpmdjCYWxtc7iBQf3tqiVUVWH9xJwu7aXp16qCwfoe",
  "key7": "2ec18cBZCTtvh6fT3EjhQTG8Axuo7keHhfeicXM7LrJHeoRTBBNjx4sVteCEAEGLW5YDQBkKENjXjMFZvP9NDxyp",
  "key8": "4igX9MWAYghaqQnqjBig2CT45CpNG6XsuQp2nfYWwNPuCERHBsejyEvbWbcanK93wrPEN4ZMRVNDzon9wRpk6gB9",
  "key9": "5Kv1MThWK6mA2cnmdxu8jpBSg9gHtVa9NhqkwfwJPxYVxWbdxbPrv7T7oo9MCXkECF98yYsVdEQNpRr6hoTv5ncM",
  "key10": "4j6Us2Lr2xJE4od7yPZNmvhmKbCzR8LKnvNwLaVU2ydQY8VSfTiN4S6Y6sdTtraEkhjpZJyQSape73jSsssAx94V",
  "key11": "4TWEYqiVoK74VqLxumsmXmfCepdMwxZYT4Cx4qyAfR59sDFchv9CqA2byZVDPV94XLCdyky4uSt7xbGXoyvS2Z7g",
  "key12": "2dX1YCKejytHVb7dBhXydQjeuiaKWcx1eyeHcPuoodRKDVCZc3YA5cA3p4EpCni9X7NWbGh437xDVZt66vZiA6Uw",
  "key13": "3gtMU8dY1gZrV6cxT9LfSAcdVjxaofRLitJHQyjpmRw7GMiQhRnbmLiT7PbV6MfYe9pZ2C9h46epbqe2bNQ2834J",
  "key14": "41GbzkzDpjxdXtUsmSawHxapnRX8UTHVMPEL35dSx3ybd8DvQo31cGVXU4ikvqyfyTkikS2i6ZZVbE64AY6E3nxT",
  "key15": "2NjwdS8jrW4SFc89fmUTzfSxia8F3VnJ4WVwyAffXkyHZ1gCgZ9deMsUBoVE4oEWdiyNP2YtTPzdMdmCfGWdvoKe",
  "key16": "58zK1sHz4YKGQpnJMdaSpsr8yL7xUYtY1M2qE5D5HmTQB4Rq2sVddme1RpYAP5WwNFc4xTThf7bEYUqhjma4PkmD",
  "key17": "3kAEs9hCptYkFPvYgQPyen2NvQP5S3F9v8D31pffMGMsFMiAPTDm2CRTLb7sM7Ea8kNA1CSGcLka3FKuSmwjsHvH",
  "key18": "28TivTz5ywz9PSnJDDEPnwT5NCFPHytGLkAqa7ayuQDuM3iNH13Bap67cAWkfe2ehmps3XpzFYF8Q2Q1JygpVs9i",
  "key19": "2geAAA5jC6woZ4u6bFHBzJny1eUeUvbMrS9SFzf7XoSV8ZMTiNdUuxhFN5u1AH9GSRP4j8QMEYnAeFuqxveursUm",
  "key20": "5ZDycJXYNaF9xoH1jo881jA2wtnkt1ZhAYVMjKbwHeytqtU2pPmiEx5j16tycTQEFgBfmWbnsHEwG8oKy3im3djd",
  "key21": "mtxeeWYchrH19C5SDukJtPGnS4jN7XhRjbnAMzgSPyPNELF3zKDbhktKxgVkc9YorWZTLTmXLx9qgQapBrus9CR",
  "key22": "25QkJC5jw2vWuKwQBNbJ4hEH8eBSRcAm5ZT7w3iMPHJ5h1j1w2TKQZbLSDgW8GV9cjbRgdKimVDTEqKGaKSFFbDC",
  "key23": "7SPmgDPScYRXmrJxs8FQoaQyFZAFyuGw61SYKwXChFAnrijyJYsnbV82kfyWofk1fVzM2qYsEweXq3RUKNHCDTE",
  "key24": "2i8LVEHGPyhVz4LRmWwVD1d5FTqXC9fM1Rf2o8dHg6D4xVz8rPacHjmdmWzXrFqwqe7Ztkz1faKCuJnmnqDqjKNZ",
  "key25": "cDEVykggwxUYVUav4jXRR1uHNDVMhkwdQ8D4tfXxhBSSbaLDbxB5d93XSJ5T3NXnwGZLbXwf7buGaRA3wnZCYjN",
  "key26": "2oXBgVZSfkwdUHjL7cLh7UWaAgW4az6YUg6knmXBTPW9fV5sW97pFwySxsxkJJaPerkRQnc1BXfzma2MFfUCcnoF",
  "key27": "5U2ZJYRNgcB9CiVRgem87hu4G8asCKCu3n9RZXcgDhbeTokM9R9oXq7P3DEaK1GjfSPa9WvsuaiME73tY9x24SaB",
  "key28": "2EavCadiRKr4SwtdadRXtSYWGXZkzrp1aRVLgpzCWbpqqpu2iRzAz1r9f1vrLpGbZ25UhoJLYdqXVZNHjQmfNPhN",
  "key29": "39sQqHEXEAikciCqPtW9A4F2hgAD8hNbpBvNJZ5wZYzu7r69nKHcFKsEcJBoDRkv7tR2cmiMu47pUMiu88S7JkEB",
  "key30": "4PzoQRcJFRqPYDoLHVZgoYyWCpYiahsEfKLJUF6hLzhaBAM86oB6ofDTV55roRBqsQaLeojppe6wa4TiSgLSdD5Q",
  "key31": "XdAWNmkLQnQUus1yinX32rjomQ5Zkkdw3A6wRZLsiw6eSjNQcvft2P21wa3XXbpYcmnkuQeWZtgm1QV46bMJeem",
  "key32": "2sErLnoPGC9AuXfmociYiShtx5G7z2ntannbZrFjSitLKPs2ungPs37BqTjZBA4H1gD87VJ1L98hYSKN4SCzTEdr",
  "key33": "3Qxch351S68nvtAhKQJQQZ8mxgAWrb17n9fxW1CQasA1fdaAdwWjCcn9tZE6EScNSQ9Q2ALc3FasMSd5PELJUDh9",
  "key34": "4XdZySa9inoAjJ7xG23rdRmwWUauM2eFgDLf2fmamy6a1rp5P2rubiB8kfgJULnMLXZHb6sH6mFNrt9RsUoq2riM",
  "key35": "5xxA652EwEksf4BSymqrasd4RH8QmU1wCzmdBYJePrXMt8CLSmh8sK3PsNTcm4w6FZyuzWhbDXGdurM4jENK2vUS",
  "key36": "4XY6s87pdZJrx1qHN3DZLyGNDKhbskZN7aY6c3QDPDxSfrZ6dWqJM5K21d1NGiNMWWYM7rXvM8baEDcGPFxbiCUW",
  "key37": "3TQPw6XmVYpqRHPbtLARowtkttWgnd5JouwuxXnbSP1BBUGzijM9Cm2m1ccgcpmCafefpZyfXHuTmCedDAea5ubh",
  "key38": "4fVegGTdvvxpcYDgGvyKZMv4VoBPwZVsJR5MVUMEsByX9Bs2RLZja6NFj5Sb5tkz2x1J9DkhbzdPu27mCJkz1xgg",
  "key39": "2tKRBZmunj4Ktd3YpazAnAq9zs2LURBYWX1F4YH8p6f445PAfNZT9NfEkSwVwmfHqfyuxmnX68Qc6G4kQ2bpR8ma",
  "key40": "3dedPDWg6NqZ9P7shLHxRDhQJBuXHCq5zr51Dqf9fxaSboHHo7aCu5snqUkqyyuKVCVPmRWVgwN8VvbKjPnAazkD",
  "key41": "56U2Eq9CrZVF2LbSiNp5hUXcxmB4RTUi3esQb4YeCRtHjcL3piMkuhfziuv7cdzP7tsfu7n9uLBXt6ex4ynd3hNv",
  "key42": "rJj7G3AfNbdUvj5JAqkrWDrCxXonRYcWyyLCyJZQRhjEFm3UBLu78B58FX4EHYLECAPdZohvYnPqgoQZheoXHYL",
  "key43": "rCQLA5pxe1tvbmPsNSMpJMVnvSCmH1MfrQaw5ENB1qdGuJqJLe74xALb7S6Zd8Nmoxt4dbZUgvkN32DrXjbZFyx",
  "key44": "4HZHj7rFfnTPC7HXQX9scJTGVgZj9uoYVMyucS1GJhUHWvhYLxdoB1YFLb1idwxtDLsEt2vt2f4HdKiiVX4QMNPx",
  "key45": "64MbA7DP8jWyKuwVvVp55KJGpKpgE8UHTTDoXKMAMrZxsStCEmCoXg3RLWuCiZ9kJb8nCQFRazTLYUYVeuWKMCq8",
  "key46": "4X5jjXNzdU2ppVeKs2TRwPvHPQLWMvpYgmjvWb6NuAaV7YTkSSAbmhAEnzR1xMp2QAZjvLic8sAz13z9W8HM94BS",
  "key47": "4vhVAfzh5g3Gxicoirs4njAGKKwCJMDDNmuHy6EFVCYR16uG37ottdaKCurkdxDDFqwdQy9YTud6zx9rTtnxb6S8",
  "key48": "BQ2BD6RugnuuwmHak6xQ5sZdzc9o97wsSeX7mNy3CR9q6muGtHTevzbMStubsfawdaWn3DwmLnvdrjQagyNGUZv",
  "key49": "28RCSfoGNzHkGqeRdsMALBEem8JrYiUzHvk1vbwiVx4PzDCnuKfT8u6NiVCGzD5sLfqoxC7twRM9xhfE25k5inaj"
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
