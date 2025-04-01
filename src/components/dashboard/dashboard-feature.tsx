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
    "5bH24m9ECDqtyfgyHyLsdxg7jpQLchKvFuG35jRcrHBtjxFKtVH3gQSPpJdp5v99qTkExDVkZFG4rMM5J8SNMWgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eoGSpc4K4xPqNb7n5CjTxqanqEkUisLKvRKMJJUdiz6iN1AbDxfyd6bVMtLAfPitd2pqhtRUPy8jPjDmBUa4BTx",
  "key1": "4mpwKPTybtRKLWmBAw9UjoduQrNg6RK4ZciFiDfQJEZJPsqiYCj1C2mih4VXYqAXbR2T2qQvS1riHUNd1PnsyKJL",
  "key2": "4who85t8c6XPPw5z5db9y4PexMTEaXifbQhNm5cHQmEC3bJLemy6ydkvLioWCuumaLmfAD8y48nDrDUY6mBnFDop",
  "key3": "5BfVpjQjyZr6GY3h8zg5527ZUnXnqZW42hTeBi42gxDbiXWXuUPjkg3TsX4Mv7M2QX7yMHFfS5mrXPBPAvW6QpVU",
  "key4": "3jiQLgnYXs9bQAw1njscrHfj7ZQcNeY85NRNX8YbJpiHK5osMMwCzQ1twLg7rrHxCLAn7xE5PpAzAYAniy8pNdSy",
  "key5": "62gn3QCLVJRedn4CTjVd9A333nUuZZCkm3tnH5ZBpTTkuDY3B42z8LagwPWRkTJSX8uknX6kAXg3EmZTRJjNuXAf",
  "key6": "5MF1yZe1Nz87QHf3mdAewEEySuoHGJecXRohkF3xXQGAUQmbk3mib8UbzTZhz9to7JKa8DY5pc3r5eDb9W7NVw9",
  "key7": "2odu7v46JPm6GyBpvjPR1ebN3iHKdKqmog2ju7pezN7GEBTsJ4ca6qA47DRoDr4ET6RvpJ8TWBE9W6RXukn2W4iQ",
  "key8": "3xrnNAAbm2Ln45CvBpuk8s282iCXKUPAVoQ2BuTaE7Kxh6gkiLAktMc9hWe1TKhWHqvPkPmBaZfycqXEFuVM6P3b",
  "key9": "GSTEQaHcNRqEDF5nGJHj9wv3MDnwHjHTMUU9ZRAFoYD1yngV75CKzVC97NVXQBSoeptzAkP3tEnmhm4whp87AGq",
  "key10": "612FxEXfhej3k1RdkykAy1Sdxx3ik42KSg5oogexJRdYJ2ntrsXW1J9G7LyHVcbenz9hkNQefzCfbugSYQ8ZYbCV",
  "key11": "5BrGf8VbgEbkGNt6dXuPhkZah137XzYaiKyxoGoewCPs5DEpxmEZVuDekmt6HTk1eVCTJMRhsZrsPcFwKQaAGkTG",
  "key12": "exYssvtgk6jVmh47iqvQZxDZE3bQRddpo7vkoT17Z5E5s6y95VZniVMhsns9tiQ7giBh1gyMyBebQndy3WADEXJ",
  "key13": "67Yokvz3M5AFLYj7tPNkAi3Tjrd3DwGENPigzAmYK6LExnJYSf5GMsn3FEwEwpJdLYEv2CG27qQEMmgdsXUR7DEN",
  "key14": "5941RPDKPAUKMk6LV6vK6ZbqNwzEug6kDPbb4Dh6CKsAwjSfdQ4uPtBYi6nDyqbWxN5rDqvTZseHuEwvkEP8kCnd",
  "key15": "3DtB2LXjfpM3TcRooW5C7BEvi2hPMH2QcEtZUDMywdhJFKGxiXz5Xumi6JYJ2ysfwmLgGnJDxvWSb53zZPrrqQ5N",
  "key16": "439T22JqfZcwLmHNciALHD161F7HN27DU3pbqEsvL8nvYnWmprT1qTPi8ufiAvh3EmA1YWNUz2BcPiR7R6cDB5F2",
  "key17": "5wPCz6d7T5vV1kjF6zEHgbe3s5gakAHSFdsCFptUHncJBfWZ2x9huex9cNRpN2mNiT7gzKdmBzqCrNCM3my6a4je",
  "key18": "4KyWjTXnvCH7vtxgddCAme3ELpX4DKB74ZKoUhTcB6ijUDsycJrZydcF71CmcUKNLUvZLzR1AwipC95DJFHHeCYz",
  "key19": "5n983DkBFZFjQwbFGFSwvdvyKsjSuP9hG6Jt8GWyfzEyWtqssJjgXT6dJZX3pPm34pSNFZqq6RVabwZinUgUSMfs",
  "key20": "4AUcXSDTeEbNhmotNYKnhU6fCqSjnnGMy3V8ymCA8pTqcEmchPjKEfToKeNDXjJNaYVM9fqeqbmJusq9m7XsFYyt",
  "key21": "9Gm9TxhBAAouhuVWoemi54nY7PU4dsWC8XMSn88Us63E63EQfaSj5yyfjXTDK66reWYvBiNPT5iuBdXqCmQ5SXH",
  "key22": "kTM1PCVNWqknHgxcu8sAmgLXpd2jMzMffoYmW5c7ws6aNccjEZGf2CKnGYJJW1ndDd6gmE8cUXYBaqmvQW8EotB",
  "key23": "4GxndP8Q2k9dG5HzdffHB1azf7p26AbwQYex35asH2drUVh46C3yWnevrMdqDPdEpADntc3Zo6B7d3qtC76gkr4Y",
  "key24": "5ye835bwDnFtbLZQL3cNza6atCK2hvWEbNGcRA41iYTLKKvNVYcV7DvAbxL3UEPa3iPSJ2yMSspVCLKdvA6Qym3N",
  "key25": "3SYrG7WbZNKqz3aKfTqKQ3Z57j41V3o8rFsKeSdvemT5CnX73Th6xV4g2ViK6takbJBC7u3G5xZ2wrk1Z93qdDn8",
  "key26": "4NDnEnfAatcFDpHqHsJ9Gk6gVPm5qrQfgNV911JCN4RTY1KpryEgGmwAZi7y6pAMizDFp65qkmQyU1KJBsgAqgtH",
  "key27": "2GeMVrRGe9WXsto7sNnzmn8can7AAYdQTF3A7kq5KZU5ANqFBTqejFssq3AzV9r55QoQV9KSkubJtNWKrqNhmxQ8",
  "key28": "2UkQCS9vGac3cagfQhMB94vg6rccHurJTqka1i6h84B3BcjSWXgkDPukLVpTY2HFdHFdva3q9jpdNoKYk6FxwUot",
  "key29": "4AqC69ptsRGSTzvL6C1fMpixwBBDvhuoAyFhKbdZVb5zNo7Ka5wHaVYtKpxwMoAAuAdgwYhS1tCrGcHqamediZU5",
  "key30": "4khLrVcehJJom7WL3GgBnt3XFKUZQgqGCx5fkZ8YknUENBXMyBezUBKX6QPH26PGMqhdu6amCnvQco6bFBsc2k1f",
  "key31": "3J2oPa52DtBnpthPcq5YjPuYpr11jnzikAs3NkW4Yern27xC4HxjA98qXAaEabUXXrYMoK8772HjyjdNAVBCJ2Yd",
  "key32": "4sbmYx8pVpoAKbs179tBdu2pNg4sPdT6SWgCZUqmeFdHbSnJUwr7kvWcM4rnrQciAPF9WbzcucFQp7fJzFxbxLXp",
  "key33": "56ABmxgPjF5skUCX99bzNWZFUiFmPaM5krKZvwMDHCkJaHHDrnS8A8g8vdju8YdbxJXWVztrHmh9nNGKPFtYJhAU",
  "key34": "27VoJb5wJmWYSgRSvHCXmJTVUBrej84ZoA9Xnr7YFzb3J3J9HXPHdz16qcdbnMkTvbN32UJQpMTcMRiAr8jrBDs2",
  "key35": "56qzBfV1RtwmYvojh1GJRji2GETszB2Nesji47A3kKg6DFPtNBprfvv5CnmWaCXqJBV3vFxqFonaeudxvTbMZ5x7",
  "key36": "4NoLgiVps1Tevmoqt14XDvXRf9ZiA4fwVEoD5aYruxZxSmzrcT65fFuwu5TirFZ5idyks5A3JFLUYuZSwVmuG2oh",
  "key37": "3wG8XSU38MnRbVjFccyLJAEocZTrCtAiyrfz5JfQX2Cw6mDwAkCFtq5wpokX2Ka28hyiQ8GGmYiKfYQtZjb1jRy3",
  "key38": "BcpUdzoiPuja4bicLSLC22ac9dciEEbVK7DRrP9Zjnf4LWiagNR25dJQVA2qZAjrViKz6h3FG1jNh8qJiKV7zpo",
  "key39": "44J3XG1hjFDbsGij4JHdWdJHcHuSivmKDMmhzTw7E5G743Dnt395GQtdW2ECEVsWcaMS7KsbBueiYcVBZP2nksL1",
  "key40": "3sjvajx3PBbJk3wVEFkL8GoPTMAYgn3DjjxgLpAqE1NoiLvxHJUHn884YMon4XPFahuepsWcT8F5uERz36GBps2F",
  "key41": "xJftxrydcyJaFuCPpWag1MsB6uBwormLHPY2CKLjJ5SE5uu1UTkdnw4W52Jq5vEcjCnVg8R8vN86mTvM52o5aDn",
  "key42": "7QsE68k5soAwkv2DwzsWZZhUgYkyGpXB2AiWnL9GG4hB7ZDXHu7quxPaiEXrG8f4zMEKgoCHpY8HeB6RcX5YLcD",
  "key43": "3a6qgMUMUS9UxTinVVQKU9hCC8GkCnP9re1msQPmqSRtcMhH1mYMZepkyWZvfjBBQmgN5CTrcDaTjYJRp4EfHqwc",
  "key44": "3GfYZN2bccsgNBBH2eVXDfzNzK4NMYX1aqfYZ9VqBkJaC8Mv31ypbJTMjNg2iFBMrDsEXLr2g9kmnvxQbC5LJ5Lq",
  "key45": "5pQw3vVqBb82tqV4E4oyxsTTFkM8sQrVktretWB9XVVxhP7PLiDBXtaQYWUtrraxSGCHDcDZ2L4Sv5H84M2w2hw2"
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
