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
    "5trwXYvtTJdfW7nvhdZcCtKiYWFg4F3h94JTzzpyaU94KikuosEJUBmP4AJidFpyyxwUx5S7ggprNUgjZRtkAUb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41w5Kyo9ZN9KCt8SH1QYPyxEHzE5EQe34DwTwYtHoyms9MVJfY6EY6QFrG6TjC9vNPTNjBF3saAFHxc5HZassAtD",
  "key1": "31nwrYisvKDfXEXAvDtZQA6hX7aKKZKEcu8yKNw3FQZ7jcftZdyDVUwmzZi9TwQjuwNKWo7PPGQWnBfL63PwmkAM",
  "key2": "4fShSfvb2LBCi6TweTqMhueRFxh5HRkdQKR7NDtWPuXTGNPUi3fwwHnmk5VsyzNZ5WqCXeTk32wXLRJ6MSMcKy6Q",
  "key3": "3QBYCKc8mu2zsCHfmyB4h9YwT5hgTPBtofcpUMMwwKHjCFMukuN2BZFUAkn9Wjpt8NdCTDcync82oCVzBMFeBddB",
  "key4": "2Uttf7CKfrGqJMt3y9TFPkrQKx35WY8sq8us8aUnWeFb5c8xjeDxxLEy4JS5n9yC1npkmUW8aZkoUzZ6MuLmMog8",
  "key5": "5FLdVBA9te3fxapk5gJjoZEZ6UEMgTWGRc4g1uLk2UZS2E2PE8pymta9pjbu7bVuWeXCTykepeFGw8ssSXk4LJ4a",
  "key6": "C6wGr89m7F9Z2XHXU5Eh7jNJZtB5X2RzqM2UC99WGWdUPu5rAjXfQ7R8bbwZJgzWzc9PYpEudvvnxouJ45vRwDz",
  "key7": "53g4fPAynivEUdoFDq3yRtFDSby5UYr5AVxpfPiz8aqH5N9P6gbwXx7f4eH3TBty1LoSH7oMFhhRSufDKDRAAgSV",
  "key8": "tFdFCF3LRFbkdz63cbAyFnV7pzvGa81EePmJygYHh3vKeMW55XcUTLreUnfbBtxHYE3Nh5Sqc8wy9vVswEoz9a6",
  "key9": "3rsjLFJBFsq6S38PAiRGfjrU1UXuDk3QQGtFJJoQuQ83Azvz99Pn3grFnXeSoEeDGESc8MXHTN8JVUduGWnUzNtY",
  "key10": "KbPCeTtBR2JiDQxCTHgeNtVA93vEnH6z7Bg994Cz5ELeKbgQYaRGoqovpfESthx2xEusn66hgigVuhfUd857jJ4",
  "key11": "tWqgxQ4G4gGczgeE4Dc3YAQvi5fC5ofjgbBZLVY39g18FtUDXQysSM8KyZGji4i1732ac4Xa5k6RARBdWaZxzMp",
  "key12": "3iSzVnRQYKtqXSHniWyuaqfZGZpszewXYbeRgqZeUBDVCRjt9fJGeVnNH7jhVZZD2S76Wu3mCMpyHfGBXJGXp1wn",
  "key13": "4hpxaow23JD1njLVPhhDFuCw8BQfYtEpjSkvaUKUhypApgxxRyhv7CVHHGZuK9DgeWxV1iUxjWtM4k7KHfAxf4hU",
  "key14": "37a7uiyXL6tsYPMVbQJmr6hnVXWjMu8rmzNXqan7qjEEZdknJyET2jU8JeHnChYoY8spCDnRNnztGbNnW6hE9q6M",
  "key15": "8UPNRAezoULMUhRcSt3Mbeggd1PNXVwiSZ2X3Sd6XHkQsAtfvyakZghjjDVoRKffVMKvj4Mr4rt22ZMYPm2KoSh",
  "key16": "1Tn4GtKmz52zz47ebi8s4eZudqjs1pHKYUDx6sg7BXAMQR7JZBWiPBCMDB1HUhd7hGQLVaPuzVLjp45hdoieFiw",
  "key17": "eMZPWDvanfJGReQ72YqACH8CxTsnNLoPwsaypULhd7eT2Yqn1LMgJYrhDWnuR66SsopT3kUPjDVdijyC5qoiDTa",
  "key18": "4SzsSNqd3nrcGaMw6iuuRcFAmWtkkZMqXbRt6tDXuwFADQUxaEg8Aj9qUydj1DBemS7YzrrDoWDbKuNndkhBjctW",
  "key19": "64cxMmFxGf8LU9479YorVVfj8Yau2QeDd5H8bugMJAwpYnJ1DzCmoap712pRYbFu2bfsfo3TDdKsuw9tMjguzaSm",
  "key20": "3sSXeDhzsc1AEheV62nM739bu6BzmCDmKcpGK4ZnycZ3wQAcRm9Lm2fBT4mWLJnaE7UegNhVzB1YfkRuET423xsB",
  "key21": "3ymqUM4pH3SdYfcXedZfhWu4xPvGDkwm7zJwUGgB31Yoncf39iKX6xTFqxuVLwJV3J5qRxfLHmNAaGaSvX3P4MU4",
  "key22": "3T9jg7SMd6wym8evLR3d4Keur22uMBtQFBW9ga5J62hbMieDVFANxhSdpFSjV2Bt1UyrQZ5YFYFmUJeDk9DP4Zzw",
  "key23": "5pzgufrnfERbjJivc8zBxvhrBK7LAK96CPFfrj5vbtHMjjcNamnWxPHVzAWnqd7Xjsa3q8yCq6VurTWrpX3FUHYi",
  "key24": "5fpRKGvyYrR6mWkNeWdTgHJUDCrZekim2nQofXo5CLePPAqLCv3bWgkAbUqz1iccmWCVYFSfcfz7zJ6G4sYFgv89",
  "key25": "3TzfBmj4Ushe2hwep5TuCpTetFLVLDyDv1Mqn2e9M4SbzcGs9m7yL4uyGoxgAbHbDQhLqfn4ZToGinE5bvk7anVb",
  "key26": "5jHJDwvut5Kt2CkRn4jxXJUPPS693zQC513v4PEfbMbNtocJEMZdtacD7ufwGSFg9TWWk6NV98dSaALHVZZLSZT8",
  "key27": "4tiLF8kJ7iyvhe2zDZos7fgE4cmjLDNDQXwQnTFjdiK75e2x5h5ZYkzuP8spzeD7MWCtKy5cuEzyYZW1uVtMSzC6",
  "key28": "53XZrTb81EGdCGpnDGS3Ntpok4b7PrNoKm51qMrEprB7UGzv5swoQZ7TS853WxQJ3Y4WAta5SxgRc5kMvWmj9d8R",
  "key29": "2Q4ECktGcwT1By49cfscbDNbuKjNRAPHkxmzBztEaU5kUDrFSqyE4LjmqSz2sV74RqJSskFwHjMmeZSVGGJVr3Ea",
  "key30": "2QgSjyM7ESsqjKMm8XrGL3jGdevmuvcxPTNAGbn4RESKBbPuhcLVdxq5redQxUp757fLckJcfSkApBuJuUVWPpma",
  "key31": "5T2E6LzKPYZQWUb1Wf6GRujGjmEGXCsxDW9zZzg4Fu7TKGJ1HosGa1AAJwAfcSoGQts9xLjYqLRtu54B1etwoiuH",
  "key32": "2GaaxoxgYXG3Ge73Nqms9pc2vSsiHSQKH7YKppSbjtiE98ppq8cJkG6Q4wAD81XVjr3yVaunpmKg4QtV7ebTZrLv",
  "key33": "41MjwtpDbYxTkuvMHtMS3XsgT49L2V3uoWEu2xaKkaC6ADRdZBaQR73nGuT935NgzdC27jHRc8bG2nzN6Xrvzonx",
  "key34": "44eB3hMqX5mig1cWA2wrjxwmvWRn3GGzbRvQnZ1k4TAZCbx9sr8SFSKo9vmUqR1V4yhh9NWWWAgavGFspoiQygaX",
  "key35": "dErButm1vs6E8qNBLv5yot4HwoohggVH7dA2TN3VYG2uZDJ7et5ja6Fiq5hRMUGChykjSHmKfdj7Zcst3BR8g9n",
  "key36": "3W2PXENR7nCUtkRwUCRYkdm4uXC14ioPR9FcMJeKxJeoMFzVXRjyB8PGWD3tyaenGAgPhNXrkXcTGSLrYYqHQahj",
  "key37": "5PKCUS1674MDxB6assgyV1b3eLXxLXWzGhs7LBJmbcpZW3zUhNMxgHBRM4ryrXa55WQqTBVA8oHyfJKUrU1BEiHA",
  "key38": "25La8yqg33JCvHWgwDFcU1WMw92KaYaq5Jp4kk3zMyesZuuSpDm6SLbdzytyEJDGyQe8yWspjSZ5fXbHtjqBpY6K",
  "key39": "5NMzdaZFVYUbpuUmjozCuDAhxB2C9irVHDpYQ7ozPYw2SujcRyjAWTUrKSAjLcz8gXzVa6CPS7nsCpY2VbGqJkM2",
  "key40": "33vzjkpeymKxrpfvzNS5LoWtkSj3CPEqLxZ5P5GaJx627X8JkqvAkKQa7BzCKjP5cwMRfLinKWqMr1728SZwZBMo",
  "key41": "4d3SVa66J3Me9Sn5ni8zWf66w9LvqwvHyv14oejCzWMKpJAFvP5LYpJNCNwmKtBjndEMcez2G85WccMdD5TrPrLL",
  "key42": "3UMgR7h3fMqqPrFYzxJxae3CWWHQSrXPak37KhKGjcdpTVpeQvCJr7bM5cwtfHPY1MQgXNsnfegHrRLKDmcwkic4",
  "key43": "3XqEmVmypJh1zobDhTLCPvxTHEsyHn5bs7K4bgBrApG4UZaFpniFccD5VbV8CpvnyS3zzuHsF1WWHzxMzX7XR7Jd",
  "key44": "5Ncf6CFxycahYVCjpqz1SjwrqbxnKzwbdaNWuF2xQ6QckhpaLFmMwqVFgo9aLuJasK4XbP9AEUuLuhijvTEk3oSE"
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
