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
    "29WXsua8CdupVCTZrcwcsYxdbK3q8hSQoHsggr16kwWDLZMqoAg42xgJVU2ykpPJdfbuEyBgpCjM67Qau58uFscX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YWqBkS3kEBCdfjN5B3pbkK5iv9Ec8gj6XL6cDhBgg2sfLhEzp47Gn9C7pahuPtpYEM1i9SVZzkiFb9JByaWZRFZ",
  "key1": "3zU4KByii1NDbQs3LWhcpHPx11KWWLv86nTK5TaUvPRLS737yurDyL2s2JekM2PXNqHyUAx8KwSQmwSgzYdCdCgg",
  "key2": "jPwmUGex5FFnYHatGFFko7nb4GaG8tBc5ULGNnisxHcKGsZ13EAu7oYUgycMzLqAuW7LyAsR2bHtt7KGuY7CTKi",
  "key3": "4rfuEN7AY6wo53J9ZKe1TJtVYMthG42A6c13nnmfAZ26yedPXrTrDfE3jQMw7Fmgho4cQyEvsbaHea8PzNZ2DU3J",
  "key4": "51P1SwTmeXEevx4vMePMXepn4kg6h3iz75WxVCJCKGE9f62wzpz7b7vmrU8FZvnsyCYKyhQTWgzdRVZ4dSmBC5xX",
  "key5": "4D6shUvAPpziZJfqvu75B88hhkcgkouQeyQhRDSMP4YrogvtdRZZ3o3vDMGaTgc8QyjFZoCRcxHFpzCPiSbWFY5R",
  "key6": "4RH9CyWfmweT2qRV2VNu4z8mkU92iLAjUB5p6BE1kkTJefEtUTB3o7DtNrLfL72qDhC69P2YTZjyGme4YE92t9VV",
  "key7": "V57VNcdxxzegGkmDnWo8PhEof93w4FMLTh7os2oV5rU8wD58EjsHK2SHAt5yFAsMu2MfoyVrim8f8egSKs5XCYU",
  "key8": "H4RB3ks8gWztA5Fn9r6VnTP9GaQQw8nAzrjqcBrePPrfuz9p5NrLpawZ3CApuRdEBzRJzRZo6tmfMydzb6muYWJ",
  "key9": "49Kj3Y5ZYzyU1kzvTH3WcFKrnJz8kHiN65Aq2eWqNAnqHv1Y3UhkBNufHyNnS5Y6DmwFNZp6HTseiYVfUHXPAuC6",
  "key10": "5Ewfu7VHEBFH9RT3ER2mhHRLCo4fj2GvMEtxTRaNup2YESyRx6Wfm1Z6Q7pJKuS1qmypaPpjd2tN4zy3gFh9ZZ1W",
  "key11": "4cHmiznxsQCSQW5dQxedLfWLSY3AJQxwEVdBhCDBDGSBfc9Xv6d9SKZURqT2RJWPsDgvHkNosphEfVqwvHq5Qqjo",
  "key12": "3zaRg5w7vmR2fHkj2f8kHBJSWVc5p3nenTiW6ninnxsRGc9zz6ydS5U7naK8EGEGdneS4PkrsygkzoN6pP4b98yn",
  "key13": "4rsj16CwKKiZz8gVGTsVhQJBncZpdKcLH5MxPLBc5jF95mQpuvMzTR4WXMLWcM8L7HdSVnZSaRk69XvagkMq16TU",
  "key14": "21RDMqfMXv2Nzw34gEvBfXVJFn32sUNhaMLj9Z3KBfdtiixRyJK12817QqmTEUUysH83AwV1R6jqmozVwEn8APqz",
  "key15": "4ym8mMmw2dzQwzReNhM5b9ebopQR2UPy7RenzbbwVRkSyUF1No5g5QkQg98vnvr4vyuGqGtjEDK2dqJGCER2ECs4",
  "key16": "4MurwZMkmiA8n35JvDE8KF8ECGAtMCBYUryKS7wkz7sqcaiKrfZrXSLuJ6XXz8CrPSa4ddAAaQpMTokSEKBLRFmG",
  "key17": "pzk5kLhW5MvqJcdZ6T4F2Uyzn2vtqnw4z2MMRm36txpYV25enB8GhmM5sMzcmMKa6HYYR9NmjTbxqR5u91KG6dS",
  "key18": "2vZjAaD1htNw33S3bhpxEMmP1e7yDKxGbjCpyEZVjNtLJveAxFcGx6CsQDAJbLy7GJtkg3iJabxiakppY2vwwC4d",
  "key19": "4Y4oM8qRfZtERrSvZSCoZr6zLhVQwxfwFMysAxZ4JcmtEJ5usGHEof8YE3FPfnuMCyzAEtF8XRf1WGu5DUKw9Waf",
  "key20": "49vEgudjebv4opEthuEYEteyoNJKReYRb3ouiV7FumRHvZLiGBjrBPNose9hJgN25WfGrZR349vZgr35C95Ctuwz",
  "key21": "62EvwpWKQEKt3yEuLd73vwDvwCMD1JwMsgkAQq1yWVPL2hpJWu2zdhZo1NYRNHr2miTzHoaH8mMF8isvtNrMK4US",
  "key22": "5fFeQtqnrZ2B2NJfohvSiw9LDs1vCJBUjxibpBVtNa8f4KhtF8GUNXyLEERs9xjwoBwEPquUkTFVmJdnDfmVHH16",
  "key23": "3jUdNcTLT2bZjDrhSi36WVcCAMxurpfesbaLRMgS4v4RGjcAP4ZENRKmJTgfzrs3EKRkyPxFJCf47UFxH5xynqce",
  "key24": "3a6sFxSgBHK631aCxFvXEwCSTqNfEeczkQj9s22cAygaztoYoSY9mLbiqp88X48pDix2f1yqiAg3Db9piDnH7hvU",
  "key25": "3CVXHcJTRUrRo1fbQwPL2chGBrgqtGyTFbrN7UMffwJjhZA36QABHtDhdhrKZdT8WnpPdQWjDhQpFXGYhKLLxj3F",
  "key26": "HLqroyGSzrmxcPr9CYkC8r1m5vyYML83Ew8z88jAYUZ3hwCHsvpuRNPfTw4CeE5k12PBEstr6txCVs7cSu1CiRo",
  "key27": "5RafHpsPPfWhRw6UrnRxipAkSm8gTcMtc3czChGPLjbMayaTpSDAAmkzqSuzWgLi2KfAvF3a9AfyH3wgJeGTSheM",
  "key28": "4RTKoTK2p3sprKK38PUKoRJtLB3kAqmDMC6rsyofixduQffgxdLnpJVXyDWsyLf9ZT7YyC44RNBqvKTa3jwxhbYZ",
  "key29": "5ZyiMCRMirhHtrecSDwSkAaRuMR4LDEk4KibCH928awLYHqakWw22boA5XoquGqBq7qpVKY5XHfBvuLZCWfvExjW",
  "key30": "3NG6UDPUPSJ3r9PrVRgDKKBoRsuNCbBuaLcdTwK4GzFBhAoKVPQ6UHNAZiYF1L7nZeSXAPWau28EmQU3LcLAWxDs",
  "key31": "eSvsT8PpjnfiFEJ3ir4Sy2whw34KaLLbqxpp2Bo1dHc8UZFnu4SbGYErRgdYs414XaeMbohBytcAeQqp8NTTxhu",
  "key32": "Zxppxz8upafM2ag6wGnGeMEgr7opFUS2dMmNGJaBPGCjvXu7uT9s2HQtSCvbP35gzVgi9Dun3W84isRwh55Lzbf",
  "key33": "3WpVmjqyQonnvvNCfDooHzBr6Rz3HC4FzzZyQzzZhtUXNmkEKArrNjQ2nXeMg9VQGvcGZWePz5mpP5LwrNPx3c6b",
  "key34": "5ok8ZDnoTg1D53QwgtkGp2ZuphVAHWZs5p5wdqAMS5XCh9v5wdCadr3DGDDBssymqF2Z646sLhh75HhVWAnmHiXi",
  "key35": "4jEaYs2Xit3h9FBHYhnPMQHgXBETCjTaZQRoXJFCM1wPQyWuTsLdSch9AVkQiEtfLiUJ7EcfV7CrnnUrVxpeEGqE",
  "key36": "4jJLtXZ1wbrh34TS8ANWNbfvnusQbjqKRFct8WADwNWraKtC3YNzV8FGvZRuA8vxyyccDbb9cZAtWZWyCAwYidRm",
  "key37": "2hFpzsF6RgdNHGSdzzVJHaXvgWVgTEpcnrM4EPrH44Yc2Wgk2Vg13ct7LXADvaE8sqLYnSsUcY2L5PUuysQwpKju",
  "key38": "4yG8DYx4Va5JEQmZrTUSSy8n9cpcPSvTFAVJgLBhNAADqQ78xRuHN5u2VFbu5szNk1Sc5EvF9H73PBUDqKsvoJJX",
  "key39": "2K6siAAwZrs6FC98t4JC74qQzjjLsJpaVWJH6Lfn5vuV4DDn6dzRzVYDnJrwo7zVwj8comi4zwQjEZmxsfV7RJdN"
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
