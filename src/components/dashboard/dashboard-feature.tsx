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
    "VfiR8vagoC8Ui1L6t6chBN5a91mfG85SHywmbfqFzgmAHrs1iTygjTrYSbMK8SH8otjrzULDhH8d4S8Q2knGbgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4afkbum3E1ewEXVESbpegMRXyZbh4k9ovQ11JkrUkwy61Xr24EydkpbdjDyoxzDtpWFAR3X5XV1jDnEfYt8bk8Nz",
  "key1": "eaWbB8QuGeJ5AXhy4gmEJiDYVfTgkTWPxJ97CzLHAEJpRgByyFeTSCTLMLUzM4dhTUuH3RxJNCwdfkQc9b2aMLR",
  "key2": "58ka5HudYfPRZsazhNjSvifFMUuXE4o5hzvPEUVoJnW58krTQcJ4bKBFg66pvXJntsiPRBp228twwAESuKU8izRp",
  "key3": "3TBByPPdWe9gcCFhBwCNNCJTCZeTLEmKAnywgxBtPSD8pZBAzoYX45ehmcvLMAz5MVfWcW2nS29Yb17W4XEgHSmY",
  "key4": "5Zv53zbhp2edvqKHVpczPMxWE3NUqUTFpnhQzYYh77aGX7tbSRwk1CeL4jdVbsmaSri44kpHjvFN12M1d9yJNsmQ",
  "key5": "52AbmTo5CZ5hFtxFdJCCWF9SH7ZU5cG5HzYqmN95v48tuuoRqWxa7e4x1kHNibvr126nioa6RUGcdC9nawWKhiaY",
  "key6": "rGJvWBfhFj4o49h4g2QxB4ynSmrJfcG1qb9AEaS8A7EZRXExWfV7PVDUQUsbRyrfXpoRXxtNAsoFdv1Fi6AQBsv",
  "key7": "hBibsH1iFPSWrPEfRKdAG5jtzKn2hdfX3Bwjm95Pk48ZymjDT8buVSLpdugKT1FzR13ckdveFgkb9Ychaq24efX",
  "key8": "31MEKgjEVd9P5uejtxcfvSxR6KsTytKNgdjcBE3kz2YMM2PVWvFzVQ1dgepcvmRz9GX8mxovsk3kwuGfLjgeRKy",
  "key9": "2nC6D3UMY3c1NvQJg7atFaV561XNFBsvtXanLYkLiv1SNkbRMCPrTf2Mv9prqc4LeA78NXCyvgDsCsFMqoG32AKi",
  "key10": "ohXpx55hCNs1xMMaNwSJfNTTLWsfoNkFXXAsePo9mSsUh7U1xReQKUhNLbbBSLkhwrG2iBcNNzUEkitCvtEuaEU",
  "key11": "2mJgAhmEssvde8QCnpnKmUKbE1fH9qMiSfZAdDCxySYFajmnPQkXWJWQm2Zwmy8kwemCju8ZH4XSQjB78wPXNo6F",
  "key12": "5ryiGsK98kMykG68J8cxZJC8RmD8APQdQ8fXMxJZPzqPG9VR27H5Puvkcs5bp55N7KrUePeAcnAZ1SueaaAKop2f",
  "key13": "5d4kAPbqXJRXyKnB2H4gQDfcyxv9sUoEaTDXauVzWfSNZR74ET5oERSUCtw9yEYMdssfKSBQpxXm8WJomQqEoy3x",
  "key14": "2CoheidxQwE6wogBLuo9T3keuw8mtCB1Jes4FCZfoTbNLSz3gQugmjR3k1gHgy5NNJqGLzg4njvWy1dGBFvvybKA",
  "key15": "CgsNoidfM8V9aNuNa63zHeQheTUBiwsNZaphSZgFRA5fADUqpox7r4aPwF5WvYv1UQRi4MuybmoSZY8oXAHkAXA",
  "key16": "4mqCFHSzr8qkax7zRRDJyvmkuwgcovxmRy7Um1LA7tmzzbdcpkzNT5RxRaVCvqz9wjfuuT4jhpQZjXVGxkk52jHi",
  "key17": "2qLCrHbV9L2bMT5X3XJxoSV31WAb3gtyp2R3cmF9MGWhUwaUrH8ND1AfbHemfFhevHgv6tkamcyWsLNALPxxaEzg",
  "key18": "cx9vsxNY5413ZctEqH2s9oGYyPddD8zSFxGFb8ZYbvCDqavjCBVhEECeUjghpV3ZL5nhhoYksNeQemtRRGZcsBY",
  "key19": "2gZJgD6GWQMY9f7Ms5sko1b6xKtFbMSqh1DE2EPn3MmjX1dzD2TLndNSDoPY97z7xhd5wRhFZ13QkMdQc6haR2w9",
  "key20": "5tA9QWLWUQ1UGYEpixKCPFzgcttnVRMJkTJii1aFUFzfygdRvG9obUMqUnLnKhHAAsjkebX4KcmL1mg4FSzYxC2E",
  "key21": "3ionP4j2HugVURrzEqTW3okhVGBrnMrZP16ebykDNGmYeYQ6ku81qCEfCf5TdPkxpuFqsi5JAhnRxvn69TVKSTT8",
  "key22": "4nLhsfU4zaoM6nGN2igpgMASiJWbdr4yBsJSMRTDHdaasWmBKse4269d49g9okqRYyLrq2FXdpCWhorWcKLpeNeB",
  "key23": "4soKVgzPH145NR5nyXtJHSxBhfK1aCYnwt6v6367rtQMNAJGv4NPVivCHCwrZTsgumELchpmor8EjzVsvmiwTQQy",
  "key24": "4w24R8aCbb4EkySB3Px1QBaAQLZWbC7gEQRh1VJLZq7JCNQss1z9HrNbtKLZbU1VGgF28x4x7JpMN1caNQNq7cKE",
  "key25": "2WqK7CA6XzaLoCYLqYzPoGEG6Q3JKbYekDni1SBScyF78HPQkRwPymHoA3Ent3FQUcf7PH3JRsZ6Q75wS2eS16AP",
  "key26": "7Y59Qu8NDPih1TGdHByM2xycTjCxKdyooRJ52cZWtZVhEY9wDhE64FpPdrFCyKdhZbaFwSED3kydgf4xGw4ngW5",
  "key27": "47W4h5Ltae864HtLqBR8ZvEnaXMf9w3A7GV5HqwF7fER1xoV7FXyKxevkihNZpTdRpttSgmW7BjXK6zN4Q29MYYR",
  "key28": "5DTjcEebABTLALEKovfFi44XXnf6QHskusxbxLqDadjDX7ux8e1CepokfXpFEZfM37uq8VXLQzXcsmStJm73k192",
  "key29": "5Rd3T2jF9nh2NLevyhuqCggCySNWLuBX5Kqw62AiWnSWvfTJBPET1q823kRbKoeT7kowJ1454GjeMWH33pTkqrnN",
  "key30": "y2Ndvm9Cf1ERkjTumiEqmLVj8uqhRgYRwhRv3x9FZS68QQ7g8fQEukjDLb3kET3RrFCC2Km4CWopWUAxzaL3LhM",
  "key31": "3foKKW93aMH8wozp8xpnF84ozTF4Jc3U57FbDDMPLV7sZaiikC8uiFC2buKnz9rwkoz2gYLrnvkHEa6pGxCCc9Kz",
  "key32": "5hpotL8SHDRV4rBz3T9W2dQRvsrLkZ8TfFsN6NzAQehLxAzgVFH383MnCy7fFWH1ndQHKbZ51PzpKn1cunE26WRG",
  "key33": "4RXXKME3UV6M2P3TZMu3tKLF7xqdvHXZoK9nQ9gdhdzdmJ4ChQBFQNgzNY874fjpbFKRPYvT7HdAiUniawMjQEuQ",
  "key34": "36XkV3N3eGsDbivkzdZbFrCYRY4jwbYHnU5VKM667ZGuHjtffxxGdo8UgWn6MzuM7FF2DEu5PCVxw4YBrFZvEQii",
  "key35": "5adfD7xZmDJMqfDFhwgjkgAbgyQSvTuMVxsEopPcXkQpTDUbx76bDzZzim8yksjzwPrHBTCPLPPotA8uLDT3FLQR",
  "key36": "3S5jWS4LW8L4j89DijaGrYWo6KTD2zSym52G6SVZdFbxdJqStS5sHyi9shAT3afMmakr43XLkSUsg21N1xNbGhw6",
  "key37": "yfNC8dHnQupwHCeiRte2v4h8EjqKbwVDvuj7h3uVZcB4Yk1AjzdymTVwr9mUAaCAPiPt7C9WuXbHwRRMrXpHeuh",
  "key38": "3BecWoZ6bMpr4EH9qGkMmxVVyYKu4dxCAYyLAhesK6BaVMtWp543uAHt8xTtqoDh2tsADp4yJ8319E2EFdxkTfdb",
  "key39": "uZVHAK9Zr3D5q3iYBDwV6ZMWFT2M1v16v4wGDBawHkw3uAJWzCBKkYBLqjDUGp29pE9JLEYXdp355rHPwC4cgUM",
  "key40": "C47gwTpRJnDZQrgrJ3kGHooFpgkk9bo8cMcDxZqcR9HxJ7HDc5Tu5qZL4MSQdyMjfdNURJajdiR2mHibvW5rooL"
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
