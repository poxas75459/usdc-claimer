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
    "4CEeLPBAKAWChptQWY1RyArcZp7As9BXCjAP7hS873oZuz7GTFcvfVi34T7hztonu9K25Pc48ZWotfQ55HP6cF11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KW83et4eTCRhHboVGDyHUrnafPug9FZCPuiqZPZPV7SWu7gUzjCpPALgT6khMN68PFRZMaGWZeNixCSeJ1wakoG",
  "key1": "2GPQYSmirLg4JAULzSU2wA74QxyeSYnvwQoKFqBhzGYYVgaod6ifbXFUEWkcuARBiVQGdFbUyEqGKWWnHeimyXQy",
  "key2": "5vkcGk9a1zU44e98uKcKdnYBiqWVgb4vhs21bRN2DXM7p7CYvjuzEFSuxTeXA2mTihWB3zgdh774MdSFHKFoLFAL",
  "key3": "277tz692kVuqvTENKRN8ZwegE8NcdvZ5oHz1FgcSGucR8HF8TkbXtq9f79LegC3a4PX2v3Tqqph59PEkeKbjEsXT",
  "key4": "3kzTnKLm3w1aRoewTGWKe7gJ71Q1Pt4g64T6v8BB8y9UpAN89YfNMmJHUiZPyS48VkSkqniyyrDHhudWdWxcHUro",
  "key5": "2DSMK3dtsFSvHQAgQJAuiu3S23cBEosU6MrH9h9WwDDtgqjDR6zt5LC3hBsBhxWEB7QGEiTUCnTnm7n1LZ2ubiEM",
  "key6": "3d7eSAwFgqJk3SHjFWaosFuvjNw6DAZPPJpNL8E42u2TxQdGUee78aFwhFNn7mqjBYmi4BKVHhD3gPAuRwvQCgQD",
  "key7": "2mUnmVKoq3KWXzhbm6yTVzcGaeNtey4YxSJw5ggFncEEPQSrFtnERX4AwMsexLkSNw3bUv6Adao2n3tUFjmk5ny1",
  "key8": "4efKGCDTiS2vK2pgnbEkUbxSszKzPveYao6uhik7ffTVa7hgTxP6vMko5oBPiohGLMoXkgsBavGricyKQ5Qs278z",
  "key9": "4f8Vs4A4q5yaAAnBAfXB8HKDc2fUsBWnAkJ2wwjPypVAUk6FRhi6WM5raUu8QwMd3bpPcqn4EpmMX8Di3AUTapfQ",
  "key10": "SCPBGkT2Es78MhDCC7j7EBQRE9AzuECjxBuHJCMja735Qnu33EyYPMoEX3Jk5Bf6GgZXe3XYXS7ZDLqN8H8iiNQ",
  "key11": "3bYyYsu5cWb4yJihSJRx9DCWckCarWgUFM91YYrjcu1qa61LPWDKLFH5zHLtRYNjdpeXyx5SPPdNoBgPkKVw7n73",
  "key12": "2DBuT1CakLRBgwYwEfRrJoJbZ6Yv88uBnXLiwWoXX6qdKjykdQkGGp7XwM3cdQgmZEJrer5sFvXZnnFajN7gPVB1",
  "key13": "2KV7k3rYth43kU9UVDFGgc4UxQQNcC9XphD9zduF3o9Mz8upbdNZZC3s92Me8dmP7d8mBdxFp3jXo1Q3s9tumzdy",
  "key14": "5QTgexSjoRzR2V51gZfRBN8gMLLXidoh4rFtaSmGLTeJjCfttZysDQYziGXBB7Rohkmag2QF7gyBiunYe2QWQa1p",
  "key15": "616NZ8MBJPqhhAs7Rec2BYmrsTsrUYE8qTzt5HUZYzWwFXbSAgqsMFSY41SwcZLQ6wkdtPCrheQqJh965aW94jtS",
  "key16": "itKGVza8DwJLcovRmqc9omTRNEFSmmG1Gg7E8aVTsjoRELaeAXqbnjY45jedK9AmeCcuvjHiJinWoEZtkesbKC8",
  "key17": "57qxUqhRcueHJMLjm8dazBSyDUPKzFKmYRh6Qg8jvHHi2F4TBLxdEjix7ScvRd2s2ruhqSGCFfwQwX3EVCqSshTS",
  "key18": "R8LcE4TpM4ygZ9udJdrTAqqRoyW3cKFDhYTfNeafBgh9ZqeLVLKQrDLRMLk9VWTJdez8KgqMFSixCKk1Z6FpEf1",
  "key19": "5Akqg741fbxMJSqeMRdRAMVP4W3QyTMXZx7UCLU4xJDMntRt84Va7U6BHAVCsHL9khjoVcDfQQ6Jh6YXuGAcegYZ",
  "key20": "44LkAxwhNP38V6BBQYfTUUGpdvXmzznwSrbhGE13BchAhZ4XUEkxCvoebTVrYdUw8EZDyPFBiSL5kUdg1FjzU9i2",
  "key21": "2xPcxNCPvMjjBEuSBL1Gdyn77sWu7oaNtftZ2k27rKLFsqHrETgNDv58svGJ21odG6bLN5N2yJ4p1UmzFzXB4H7k",
  "key22": "3jf9fSYrP4NZAu3d8XzgLscb432Kbz2Qs9uBBLMKcYsUWyBQqvc9de1UMD2d3mGxtzpDxboDzZc6CXHcswRtuvMC",
  "key23": "p4WM3WorKuLagonNXufmXmHAftkw84qZMpvaf4Ui9JNDuLKtQSyEBeRDK8umNnGT9KXXi176j7dLJHyvPtvqMYE",
  "key24": "3qeaZRKXuaLf1YVMgqmbaNHdBpdVE65SnTAuLuoKhjjYQUwfC9pSXqXxYKgCsAq3rf9TB5jiyYnPaAyzFAwJkdHa",
  "key25": "5t1AnrGZPkiagwjcYNU8NTjkhGgw6DsYLdp8cvEqxRUnQwM83RxH3KeQWZKoofaEhAeWt8MrZnVTEScMhyqfwAWb",
  "key26": "2jr2CcJJszaLXBFcNT8BGx1GHmjjzxACyLPTr15k22ahLdpuyFUfW8JobXDxLakqw5mdoDYT73zfLKusid7TRSKz",
  "key27": "5Do4WQhYRiVetzmYU5XVj1DESptB7GXAwDDbU82rV6dcVcdUyj5Mmrjrqx2fM675TydR62eCvrSwdvAK4jwYMn8g",
  "key28": "3zFpFagNVFp5qTDjJsSi5u92hUJqPzjMLdsHhiyGhfMUmGaURbVPd99CyqBt4r7dPqEhrx4Cum92YxqoBdQuAgMm",
  "key29": "4rbcrbrxbdZgMTiU5mkBxCv6uyXY6ZY2ccrNus8e366jFRyD8N6MpJCEpspn7qtY8tBedBg2wv85vePsuFY4vAqh",
  "key30": "ZHByTmmxiRAhST2to5CANVKK4TtBr1muhrSoSTsJ68XCWf3viN9PW9scMMkL84gaJetYhHJSe2f2B4DP4GLHUvu",
  "key31": "53239xydVeQCFy2dfk64uoX64z8Tu1XRYug1Mxoq1hubLghU7BazUWHTTPozGMYioev3A9dYGx7eMFVrLag3g8vp",
  "key32": "NQi3VwUYgw4mprCZipqUnXn3T6xoPFkpMk9wyL19Z2C5CyfiVrYALuBYqKNuGDWAeQ3xq6LnjPAX8cwsuCeWwFC",
  "key33": "4LMHmH7233tA93j2bx1kuYHXbb5QP5r9RgMqNS6JfR7nEwurkBpYyivtWjq5kGetmsS4YFrNd2DJgizfsTkFEqtu",
  "key34": "3KaqoBZB7YQfQSnjbTnxufWbLJBMvTa6Dfvne6dn1RukCB4JW2WUnizBqsHVmuxuHX5mAraR9ZyMS761jAxcYBAF",
  "key35": "2BQbTocyErBC8CqDE8d3pmN8nwCfeesPKdP74v79QeZN15AfKb8m4S6AF8VsW8QRpK7e7CQyfNQ4w4xkAq3x4JrF",
  "key36": "5o7srBVLS6DpBaq5Pcxx45YxYpf98Q8U63H6z3uyvKAst7NBxbQ4pdA1xosuiiZDDeeSHMJKiU7ehpVEFPev3DPQ",
  "key37": "2hPXPJyCWG3nCxAXJBeYmQqca75F7MhPmn8J9hgiVwL7PLDwMpG42KxQzd7oPbi4PURDmpP6okPu2iAe2xqmLsHK",
  "key38": "x3CfbRgWRt15bmpdH86tribFhHRaK5ksoSzA9qfGfmPEHjZH4YxTzMSfpeUMufeZNA3iG5nXEzitB7SjuMR1GJU"
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
