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
    "2DKrvjD8uMyzmvAzB1bXCqD8L332igUZnXomFY4rXxbvvv9bYxfDy2Me5pdviQ3p3Ryjx6kMErjExNRMinyFx36D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GnwQhUFo1pn42kra9Qr19iSv3Ej8aLJcEuPXm43xfqwneupKbackBdiKGp5D2fVLsZQBVdL1r1JjjsSphFwc9uz",
  "key1": "3jruZ2LcVxzV68mFdW1WwJAv2qqd1wpsjYvUQD2kxsjQuJQc4T1MxdKkeVFVx1jZr7uekryPugk6SsWvM1LZjpGy",
  "key2": "4TLCWa9Z1j6kgLs34dRT41AMKinMeVXgkz2CPCRjho2hPb75P5PLQPscjBxiurwgNT9PZ94mpFiMy6nAPy7Cgkvt",
  "key3": "3z5BTDstycF4arQwwf9sBPGV2ggYvoZ1WsSF6iXfaZgXxwtWGXDUMvpcrSWCcRJR5HTpxk93Mwayc9DLrAsNz5EW",
  "key4": "rve7iKfsKe6aAKGiHugC7hvTofe7g6qkSJDHRzG6m9Wo2unZfRyqmp2cCpqgeYJxvMJED7m8ionGg3LU9LgDbuj",
  "key5": "5szoSDRVVyGgiqHHqRbpp2KPMA7KBr9jKtTywbttDdk7RbbGokjCt27WXfmyGmBGbQ5hBtabsvn8k8tLGk7vvdxN",
  "key6": "4wJfpkhUgvixSDvWwgARqcd1ifLew9VZ95v7isje4oaKx36DnfhP1cwsSUPVoz3mQGkFkL2yUHUe2fPDh6UTQAFo",
  "key7": "49Rrc1KWrkJEqvjwfXXpPEEpM46jDYnxQBv8RKQxuPxUmdo3PMmohAV6JbVzhmkhGi1XdYGhDGVC72e5ue4E4S4F",
  "key8": "fwgZnRnryDTqgsL6wHXwtfcjyq7peHRW9NGW8tUcFkH91b6qPYtu5Q4YXaB6FymDb8r7uSmAxfpeXaMLuhSrxRZ",
  "key9": "2tHduvxXLsdXYEgucsrGQ4tYESQ5Dd2roKmMDft8RyUyjTV4eiEpNLE2NEwwkML9Cc8fqog4C9V362hvqUqB4X3x",
  "key10": "3XdfpvtJ6p5BY7ZSfu446cvWXDeREtFzPFPYviY4zPkskWSN62ucz2YBJkzvfFdP8WJe1epjnAirkBaU3Ko6gN4v",
  "key11": "5Rr5bk8qMVDQQuQGGiWEYri1reZn2ood8nKcaWfptCifVeR5UUrmE977mqCzLJyF3U9UVrCr2QX1dRkXKqYx2gLP",
  "key12": "2WZwrxGfjpWbsrgyFp3AsubnrMuX5nSr6hcf2A5CJ4HcpegEbwB89437dXypfkmjr66mut6dsN3QAS3g1VeheCsJ",
  "key13": "2PPPiu8iYPE4sdWDqqD4sqwAe15wAXfn1UBWF3wMnjtXinvynPNtrLTmwTc8RtcDx1qoqNnkj8FVN8kzRUm69iWD",
  "key14": "32PMmWmDTJnLK48C48juWa8yDmEf4oCS8oELNkw6QEMujkNhkFPHiCcKZWZwbfrtfbpPsrcR2wMzreWKdXMoDLFH",
  "key15": "2y5Lop7iBsrEdKqa4LYBjCUfVcqoqMBdokKx85zLVfvVjGcUhpsysuBKUU2AVCNR7nVJEfmfreZYmUv5pZvVj3uW",
  "key16": "5joVFJdD9LoMtruhVtEsRPmCyNXq2SnsDyBrwo8aPKavECCsvnqCnUNn2brG3JCyRCoahDctpyGP3RpmmKEJmGjA",
  "key17": "2qr25Cp2Zzn7wUYNWaEQA14zd9JdvRFmpSdWySioSf1Gt9rMiGqKwevF5hcbeWxXttWufmpyhmyfm6PnStWg68Vt",
  "key18": "3rtGn9be5s5UUtGGZzsgm91RxnJNAoStuHikPBTU4mr5woA7ngMTH6uoPZeVVY2SqtKKdfgXBS7Pzg6FJ5phxxZC",
  "key19": "46XrtuS61oozBkN5iUmaesPrJQiNA2vhtDSLiAP2AdUrtzc3UioZGa1CNAheDuqf6VHxj1Adb7gB7Mar4jvVSRE9",
  "key20": "56wdughD3dbDxXyCb6kvWUbBt1kUCkjr56cpNgJkGaNr8PEKE9kgZM5kG9uftuGTG5PMje5EBLXmnzzfo3GqdzdB",
  "key21": "4w3BqsexRmceLNWUTSvdtWffBKt7MgjXhZaWnPAby3owqzqR7xKomrTKCQXsm8Hsb66RNtFdxVB1QBxafnkoPPSj",
  "key22": "2FDMkFZMTUjNtvjfHG8Q4ueGqrhNELXUvQ6HqXk3vW6z3LqLG4psAPzNvEfsfN9Egu3tn3wMipBkrKkGUbUZmaR8",
  "key23": "VYbNsKp43GyGMtztib2TymYyQVrQN6C5fm1C8LRMzjDMVRfeemAjL3YxPucJMLy9jP4UXxDF5HVoaHPtk4sVNBA",
  "key24": "3TnCj3JzcXHdzqQ5HHGozyP7sbqyjdMzUuLFQB5BrZBxYiNB4LPoyGh1PzLCD8zvQcCNkfBGkYFLjSewbCmmqXet",
  "key25": "5NVp2J91SuQQhdppndY4JZ6xkmVPpkACQjUARroZA3A5FiqefKrEKDGxfix4RBiokWjs1rbxKQK2mAcSNfVD3CDC",
  "key26": "EESdKD66vMdyN3YkXhdNB2LnkY8qN5s7RXAEQAxSyWRCWyjP99eFCYGc7cFD2bwYYFW8sFwCx4CgN3tgfT7G2Ev",
  "key27": "4EfK7C5vuYWpVWFn6shDh7oYCqjc1TEctkkFtJSdvZagi5W3HdsChCKtj91wZ6abSwj5ZEprRALNZtNGr5dhEy6T",
  "key28": "47JbJpp61PBFBmb2MwTNfAoXWaL62YEwnM8v86X2z8idp8Bk9Z5KQq55gTAn7Vvk4SM2WVw9cxY3TkRurvdq4nds",
  "key29": "239b7gt5MKmc1zqdGT2qN5FxNCEQcVTCH8WP9Yf8VcjQrtFWCSgCa7cS3nKu6U6nKmMUkoHqB4h2dJ9AeeTxEKb8",
  "key30": "5dgWM2kBM3zGM8ci37AMwQnd99CEHyNHXsfi5ftvt51ZGEFbZbHVN9nDEt2UkPSLyGKFAmSbGpK9FWX76wZu3nnm",
  "key31": "4qyfNAbSUppKCtKNZLV1veCYGPNGye2EiFXPiaeFsXa4hyukPncS7hjaBuLfWLWGhJsCjgL96yeCSQAvN86p7u4W",
  "key32": "4c9PYFohSLCpxjT2ZebEbnYLr1utdVbCkyZsQJzL5Ry1wwrnXB9oGgfpbwTVSenHXT2oXqJ3JiF85zxcAKpyHbh9",
  "key33": "3xHtPWnpupgoMGoPZtSUFrKPy2MwgybeGGeA7gPCBPEm7L5gtDTCmp3ywGJj31yCdxWSjYbRwZp5H4Y29d8p4j7",
  "key34": "5sdnCKseTpPSuz8isMn7ZRZ3tkvmciQo13YUL4a7gC6XmWDdDaAnrGpRx5Jf4jPGyiRs8xF5HpAX24LrQtxyBM9N",
  "key35": "5VoWnx2NcUn5Y6vfvYUNXsZGevobrG6rboLgh5LDedcWsfRsZhk2KZ7egbM6rqNvmXGcNzYzFygem4SKa5sn5ixT",
  "key36": "47bEib1zxTdFDdgWNhU5et3hntTkYvLXxyjqM7Y4Ys6dani3NWVJQ3QZtthEYMrLd3ydAoZToC9XzFoastkHVE26",
  "key37": "5D8N88y5oEAPbS3X91QSHrHjCgmeo4C8tnebqVTby1sEieodZPFJ8kUtyGGFssmNpM4URErQXv4W19SM1jju6jbb",
  "key38": "2C4jkDJZoYKwy4THAEgZT7zVRVhBrUCi6evbaQULT5ZVFmgrfV6rCvjHvceEFEseZB9nVas5jdH7xsjRYqeDeH3V",
  "key39": "5eJKpFstTk83x4i28qwupHEZnTHhwgdcLWx4JnkRQfXFBgZhybcW8fbs5zg6L4XPHJ6EsFVjwbYMmaHCtdvdVQ9m",
  "key40": "4rXZzzZscY9KpAvXy29Bbo1Dkm8XHQujgqaAzirsCvHq42BfgBrSHCadiBMgSNWhpRSjfSavWZJJEr5wEtY4r7Xh",
  "key41": "2PgRB6u8gW9Zi8uEL1UBGq4A3y4Rm6FdQuZ8A2xfDFfDaXJjUxY28yQsPQ55A9AjCmiyBSdEHwoMm1kbScQqJEyi",
  "key42": "2UEgqomo32veZNYRBrLuW5Jqr2nKXL2krTkT6zHm5yfqL5dK9MvjHffWxfF393RZJ85dqiGMAMbHQqKsS1NAuN3B",
  "key43": "3nP6PivTD9ZpcfCyvmM9FWBCmqHgHNaRSWQYSS4ycFZ89HBX5QqGpgWrNChgRijRVW2QWyegEUxWe7jj2kwt2jw8",
  "key44": "3BCwjmTjMh2LF3arCSQY6Vq71QkG7o6bL3zCG2F6kSWxaHJ9V7XJ3tWUzrXUfTBXqzvhFUoq7PPyNbrzPuYoDP8a",
  "key45": "41ki9FKdpLqCDddjZ2U13A59WvMcYkdRJNixFmA6mBumWSjhgoBri5hTgoSLBE3ePY95MKo59hKFijv7iS3omyDt",
  "key46": "3cnth8pTnr9Hy2g7eVPD2Htnfds9NM5zpCbLFPhVGkTSC7cQFmYU43o2cAUTEfDKjGf3DTgo6FRb3ciG5kHoWDFn",
  "key47": "AuCj5DojBP5GiG1F1c8YSqEL32sH76sr6GK9fza6digFA9Hx4o8T6EeoMvFNbrjJm6CGBrvE8XTURMx3ZtbeRV4",
  "key48": "4UKQPW4ABY5QQ3He1e75SspNq1f98nbpbMNcejsWyHDPguo1fciYiC7FKxcmsfgnFv15Vo4EGPU1aK9s3dfKs8fe"
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
