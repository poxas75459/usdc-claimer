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
    "HufQUapDWQXyj9uVjjQiNj2zeXLu3WbXUSnbifCAfw1m1o5fnuMEobFcWKmQam1ZDxRBTEihsv5bJfreoYtsnUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sba2GVcbnHzsVRiewAzV8SQxCyHQ2tAQdFAdXHsiN3uC58Hp8PV9pCuUDhTDRwcVa1QJsg8dHNZxrrR2Q2nMU6b",
  "key1": "39PmyUtKh4VPYKp7zBKgy78kV7ALxAbRpv71PbXsdi9p9jtyFvRr3xcPWQABo32tWn47ptgSm7ncYQQbn6nvQwgF",
  "key2": "5YzRTPPkdk5iRNsDEqbhvqphhrL5ZcYKjUPDYF4UqLBh4dtvAXfjP5iarjetkcHA3bBa1CJKRn2jmUgrpgVxXHjB",
  "key3": "LdNQ5Lp5wUY8dAE3gfvBuLnYFt2AR5ZyQ4yUCtmgBTWLtLuqCLREA341c6R4qiwp241mPGBBGGxQBZAHXJaH9nS",
  "key4": "5nqq4x9VZLdkuaipMZh1q7TQZzUMMF8GDdDnTUT3vsktcwBAaK6YU49RFC366KJ4vNmLdt44dhRMRz34dgbS6LKB",
  "key5": "3PPTkcG1DWRfbfGaCWiRchoLwErx7wHVRBc7YWt6sSZk2T1EahJ5vSwQx5mtYg8WQemuRVz2emL9689iHUGMu2F4",
  "key6": "4tmPrrifDNtqFCszwQ2r1f3LZ5JxLKoL2Aj6WuVWYFwaYSLVVqqEjnMoxDCRKsoUjHAVNg1fkPjeANTF4TtStC4p",
  "key7": "2QaNtaYnK8RD3XtUrW42vyRrPF6LQqDaTUFM7DXFH9bQAm6ByL6RWBsDx5xR4wnW1ycDZmfBixYDg9A326rwtNKL",
  "key8": "4mcf2D5qmFUQjCLMq9WKhtvjjWj2biJStZUFzg6XegNpx4ierJaWW7tMwvSNczgSTX2f6VcpPbngQRwnmjm7vsAU",
  "key9": "14b1mHenHGFmwu1XjzFs55Weyr2eX45gBCXioZBkgaBNuDpW4ucyEZBRfRE6jySb9yhDmV16tuXMHvF1Ruo8EWm",
  "key10": "5jXj9ASYKYMVQ4bZuyhwbGkCBDv6JZgjvqtBeoXuiWACtgnL8kpAuRfBt5E7NVSBNWTgoHbWs7PPeHbBuz65eqtF",
  "key11": "4qZZwFAwiz3KLhQM2yHHgKg15VMyi4DFiWbqDBqyskHctezXTokLGhKg24CtEcS6rwvip9DNj4H47MUPzCWmGn87",
  "key12": "3zmVBrgUMe2fsqmdqKMghhAPvwtnyp7JebxCQx23ZpSgHJB4sZuhaPyM9JpNfCyU74n6SzJMGdvWKwBf32U8w44Z",
  "key13": "2i7Da7mwu7jBH4caSvK7BjaWEXbwLb9P494A76eS2T6xwRNSMUkrvJHbPo2yMfNkBrNu2ZUshzySzFV3GCakiWeS",
  "key14": "57YS42Zx5TV3fZz4oiwyzUQwAozJKb3ptJY5g1g5MApWjgnttZDNj6akQqWLhQbg5zJbPDQW7vL4MjogWiPq6CdB",
  "key15": "3MJ4d29rgvbj6nUGdRJLmj799jRvg2Lwb79gcU59aTfwX63WDUE1Hknx3d7M4oqaxu3pDKrKN91JToU4GZtaXCTS",
  "key16": "4kmmbR5uFVxQ2SwYfHGMRAYyzEvybo8tcXdBEX5kMQ5LjYwg5fCfcQY1YiwwRqjf7oxbM9R8GcGLeMmZAdNqxNwW",
  "key17": "2ZQa8YMYjrUNHY7yJZS8AxfNnmFG2DCa3W3TWPWeBKVS2sfTVedBAcLb4iN6piYX6mQhLRgXXtr9F2LzK6AwDgQr",
  "key18": "AyqjjnZc7BNHuCzg35deSa5UMasKtktQbERPgaCNBissPtf5weQxRFwC6XzqVdMxEEumgzkSHkNnjiyfD9CRT5P",
  "key19": "4uy5qmrxMGyDXmgfrSEktHE2XY7YeqFV7BTopiFVLo4aCHssFcg6M7NrWsqH6QvJYM2M9Z4JXriv2haoUKH4LNrM",
  "key20": "4ZLzZpTdCNDkCE8DPT5zTSkpMaAAVtnWYLK3SPNPUYyrSyDJveC8EQ2JAjmpfZw8T3LFo6S5M5TS9r2oH7eT1MED",
  "key21": "oaa3gLq3Tzhp5GQ2D1YWPXf2kVBEmNhEEZPDrbWVmmC3n47McV3E1EJ8de9Bgdo88CbC66gXwkQzVnrcBpvStEJ",
  "key22": "4SsUpVdaUECY6g7BTt4doaTu2vH8hZmbwk7vEhzcW59bn6NhBKrr9rdCVzenDRkn7SKJ1bWUeMZEPsC5oHrASe9m",
  "key23": "2MsbZGiM9XkZDcrkp15PYS2UEogzZfqQ3ZDhmGxQ9ZUKobBq7T5tgG2BRsX9ySCjmFhRbVaDxJmm9waziRYAfkwm",
  "key24": "4B9dRNEAg97H6TxH1qojJ7QHoJYXD69Xqaq2rTssxsS1tN1Kx9UdaL3q4J9vHhuqTkD7n4pApjex1ksqaSk4BL3w",
  "key25": "2zig8pkT64uJoGspxkaiBd94esZEgmqDX3NcLdRdXFFdZhiHb4oGDdyqRhw58HAjP67FZd5iu2RTLKoohk4GhPGW",
  "key26": "UEenNaePewHUNiqcMhRbVALbtBKk72epVeoyeH3FJQs5n1vxyer1DR72cWRinfpDwVXxSr3ZbMGpqFgpYNW3udy",
  "key27": "4NXQe8WBcak5XKU5Zai5AGD9hGZUHQPByHn7xipJcsCqB6CL1SRHWb6UUUfTy4u7L532n9J1bBDxHcwqVPbYmcxv",
  "key28": "4ooxp3FM8pH1jMmacu9nAKnybNH9Gvd9UkDj8mHkn25BrP8TA34aCWesvajb4FVVWX3sS74X886HgcA7NaNPhKus",
  "key29": "34p58EScB2VhTs1QmzKBikw6agZ8i5oU2Usmp6SWAuq6EkaDRu5pDNb4mTP7Q8EPgPcBWz8XXTLHuP38uM97ng1Z",
  "key30": "4QSMBAA5AmKZrs1V8teuLe9Dbq7PwENrSjxfidF5qXSDQtbL9e9jQrRCK2DDMtWt1gjvnXyz8PzEtiWYW2ucdM1c",
  "key31": "4JUPL1cYgq3TU4uH5uP2hzMAJeFy3M1xiKLbAWfF9oLcNjTocv8Qie5Lf1bBcBk4Mmb751qBapvVjamfLLghW88H",
  "key32": "5ds5enJzoP7n1FGPWLD6R83QBL2B1KL9zaZCF9DdpX2jyYcimk1iqGia7KNFvcTb37oFjQHSnyAVXmSZHBvJnAVL",
  "key33": "5aYXvXneTW3GyCK3KLV4ZbnWor5hwSpCfqXU34ew69EUm26rEe1mzA5ni1dnr8sXT5J2BDakTmumhcgW1aLnMGQd",
  "key34": "4y3vbpxM77P6ZNCAhJGLcSNMhNGTmgMtG7j9oChScVFPRsRpEhFFtXisgkK5LN2DNkCnnb5zY68jR8VfDEHjrrzo",
  "key35": "3hkxEBfdwy9mWW6ebnZXkWwByVJozznjRmFNCuUQ21GpCkydy4wcV9YWxAPeyy3LN2zbK1yaRyCQYmVZ6zdAK7mV",
  "key36": "3M7MkyEhxftEHNRYniGmVhSwrrNkHef8r3J6AcwNDxafdvNXfNmrRNMuUWVhf77qfhXdMnwYG3xHq9qQpDizo5oG",
  "key37": "32e67JjvjZAxEmQrx3pnaY3tXEwKLMrcNbt7NuoaxkwAXcSzdAySWiqvbN46gnms8u9Bz9gue9Ph8Ex9kmeDhEUk",
  "key38": "39gj18VRexqeTDpjtjdr1L94k2WGu4uFH57uCYduYtxLZm6j28Df1oQA7DAdfWfnrGRreZx9KSaQeBHCMtJpmHZX",
  "key39": "4G8ywmDWuJiqh1f9xiQQZzwfJP6Yx7Pteb6RmPpmrrkNZRqrvJMN5K9iXswfT1qsKhRHJhDTTKnW6ysmY9X9HtJR",
  "key40": "2d7wRyE5TnEAagqzKhspLn17SFUehF8jBHd3A8ikibq5f2Tbmbar3hTzpdqok4Bgz4wbxsXePZadwWB1Lo3CQ3mF",
  "key41": "ANovgBw6JeWnbk3meuiVHsLYyJX6tGchNxKVMpJPf9JrD3fhSNQfcNceo9T4emiVzEDPE9zYe1RNqa4BgJDAv97",
  "key42": "5G9bgNqssz7DGrbDxsehmrQU9moYw5gQUDk47qd9Mixh2n8JJRo28BzwynDh87AYRuymnL8Hc7MFA3qd2XjA1NbU",
  "key43": "3661UREuQHfyw8GmiA23jpKAwig1mvsUi9z6wKtEetwdrLcQtcxtV2wk4vf7vVMRzQMYbmWsTpURw1Ah26KkzEjH",
  "key44": "4BTABCmenjEg2CtJD3igN5VELEDyxwzVRJfnZcnYX9LC37roQ285rEu8seHWp878ydjQCBZM9vPsJYTXtafpQXuE",
  "key45": "5VMmsP7dRtZUHG62k5zWDMSvvM8uSHwawS317zB7rG8DR1LnN2xL3u3u4L9YUdm2YAZWC8LFXq5GeQ518BBMwrrn"
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
