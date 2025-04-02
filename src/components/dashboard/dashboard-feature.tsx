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
    "5ZjDoDT8waqnQvGAG4hJ5ciyek7qfGuRkMebx2iPgyvofTJCmHMd39LryVCqviifDR6EGcMv78UrQepCzhbzs6Sd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zwsN7EaXiHJdE3mTMVFT5nuUu4t51UvcWcuoB4BuULzi9wWGnuByUJM9ST1n77W7dsJoMUZ5sfx9ZfAEWhzW3VQ",
  "key1": "e9q7RNFTrrNcQ8y2ud4qUcBxkWieagjDgbnuCqt3e4u2MpMP1MJkTJaSDGy66LiwQmdKVQHjD7drFhs2mp76MsY",
  "key2": "4SyHdSbdAYA4uR9DzRaR3x9kf2L3YfxAXZT5UCPvaoEFhNuQYQZGzShY8HQPUTrU7uFbwzfzNtAorKhv4ChS7756",
  "key3": "3ywy1GCgw3z4MSEjWfgQoToM16kz7iCzdDwbYLk6RNjNQ4GqEotVVJfndddKX9H1w1Ck3rmsJWUK1Ru7ezwpvppj",
  "key4": "3gWe36tzfYDbZp5hndcR45GJRisj5RzdiSetdwbAipmp99r8PbiFbhsqqhzCYDQKhR61aEcBDrudB7rN5rAY7Zam",
  "key5": "5wLZxGpZwfzBPGePMWZvAJzdjpLyVbfjmw4zjrd6unFrAkojEp6uTQ58Lvr8cjkPZPHAwGwLpGsai1m2bkpdqoET",
  "key6": "4YphWZb2an9RQ3ToxdeZekVCKC63aEyURcHGDwyNFfTwh5e5RxSLztyQGDXdVhZGoNnoup4cwKPUwutyyJdHiGnu",
  "key7": "44BbmZqvPutCLSp6EFwsMUZCniyL1GLRKErt5n9hhKXh41BejfAbkNTubaVoavyV2omH4HN612Vstc1FdesReaHd",
  "key8": "4ossQaEGUBwy51SXh9ts8GiSCUKVyx3LiCbEmNVUdyBWcW7SpjUEvF8pfXKgjwHJ47u9DQzbui8gHsjDhhw4kWW9",
  "key9": "2JgX8tu3Rg2eZaB6T9mUUpK8aEBR9gD7oTeovo3WXaxMob3aQHE55uVdnttWpVruyV55TSFSYKFPNh7HdirV5AKz",
  "key10": "2KSQ84U4ytffZ5Ah32MUbc6NFVWUHasikEoetyW2NEBHjeJb9W7QQMYDaudHd7ia1a5GxjVnPXrqLWvF7XvyZo8o",
  "key11": "4vYwXCeeUGYQF2RsPJnzqXdzRr94Ey4M5GQmGmkEG6aJCaKmrCwVvUPYLGYtdm8wWutpTKFHApSNfSTJhdQUgWep",
  "key12": "23ew95cd8K5WNN824fzqGpaQLTKVjKyERKGmPs1ovgJRtFiZmn4kxZUE6rembm3Uh4KBEiBahRmF32GUet57yjyp",
  "key13": "27AS8vkdEe3S1sizate5pjbrV2Luz37ZULKXPczFv4o7uZGwypogPiuEJNzwuhFrVF8AXbQgRrdTZJAFt8JWCjBw",
  "key14": "3ADEftVC3CEvFsRZoCmtBv1Tfe7iyKURe8fwJWCRN6CdV1ngYhajru5TSusj29ekZxPSgpQp8YZnK3sG4CSFGVgH",
  "key15": "3J7AGyFvU6oz7dC4cUHkjFgonT3uhWKoegQvff3f7rTF5kQ3DfD7oJafgAnTRqMwhsqzuqfEVkPDXRCtd3uiYfcW",
  "key16": "TMVjdfQDm47VzmSZ5H4Fd1bJTyrHk2uyv7PwnVCAm1RQFNDfqmGcrmoZFyKBhoPzp4ueNZf1TwdF85STNQwHZuo",
  "key17": "3qLYGfofXG4Msswfz4kWLmNwjJ2xCcV21qfLKLCFDDdVzy3J34DxnuD5K4nHMoxyLJm8TacxfRjJKqBe9wAZmemE",
  "key18": "5cFsw1ZgmBkDxTyVsScV5bAN135Xp6NuGF1SeHLF9XHj3XCDcoteAST6REKpDgWf85bC7cgMRccMvz5JcXKz3BWQ",
  "key19": "4Qw1tcXB8DieXwUrfp39kMJirgaitqtx5A3bj73iHNCoGdXd5zvQvgBHmZ5DsyeMu6o33gy9cxJY1iY1tTGFWZHK",
  "key20": "32NwfzBWDXYtxboDMG6qeY9UmDUx7nESgqYdNVZU28XPztDsMiEmdp2UicAjMyPH8TMo381Lg1WM2FohYhomPPsk",
  "key21": "5Wnw2LY2AJUGLay3QJUYzFxqRDhjhD1ufkWvmJdsZ5x2rbfmXySZnQvnZppGJTtYU2LU5LEBAzEkyHBSqbTs44RP",
  "key22": "TWGkw7ETW93TnJtCH7dDNjajva7XBfoYfDnDtbYfdLPXcN5jnGGQAed1DbrDWV4JtcMDEDjdjp5omHRTBED2TsH",
  "key23": "2M2Tv5Us96J3Bwy8pLXq9Ea6B54PZfsueaS5v3CkcXZmmRq29VVipMAx3RTkyDcYukWFu4mB94QSi5riJYX8qvrP",
  "key24": "5dSDx5VAcr2wfHBchRMNAcyXMkBSXHrzLhq7XNPmDZiDtNeuyiQr7czwkEoemiwJiVA3TxjvYcJSmNyprXcv157y",
  "key25": "579PhkWir5hw2XdinUAKCJCCR29u7zuu13Bdck6PzeQkHxhxay27W9Tsth6xT9JS4Wi2mtyxc7M4tXdHUqwFzxH5",
  "key26": "2frP3fJan83fB4EbgwH1Qx1g86X75QEhqnyeK9p5LxMJAth6kpSRfw3wPku3F1NFPt6LPpG5oP7vuBhTc7GNzGDJ",
  "key27": "4oNqZpNEh98UneNGvJ9gon2NmBR52YU595BSYbyjJrP2cNVZTwEnYmXasBzNzE1kybc1wJZh5ZsCG37r7rtBYNA",
  "key28": "5KgvxkoZ7SddoTP53phGvgfiiu6UCpLCFzmGc41AFvoaNjNXdrpkf48fNdtf2CPZXrDLwACCHfLX3854Vxc1uqui",
  "key29": "5MJmiRp5GBwH4mjbk7C8tfkx1caAvaLWfBHmUmSt56cMzFB2Bbf4DTrgLeeB6v3uarx8icZbVdCMUGgocGWqecaD",
  "key30": "2JtRejB1FK1fjGcbBbcLv59nJvT1afnF67neUcesKNDfD7rgqBTRtK5c7mXRdoidNqMSZeiB7Eq3CxKVtSxHPokh",
  "key31": "5LShDAV6Y2Tocm58HGjD4kHnGRzQxTjRZbvGkXAv48wsfsoo7S3e5e2LfbReHJ44u2TwfD7CzaVAbdHjHT8GKvYm",
  "key32": "9em6FtXedsuFA9Yw4cJ8SYBYdxhwE6UuGqVQq7T2jEsBuhZWZryDLAEeRyDAaD8rMvqfbGdqWqgDmQZ1WvywG8p",
  "key33": "K2MrnqV9gtrMYcjm6hcnn45h883bdrYRyLS9rKk339CfZn6tpN9aRsDg7PXmbd9jVAmM8ANxRF14jnsSj3nX6BL",
  "key34": "22uGeiFgPNv86wcQLtixf5VE4HgWriHfHM9z3iWxqz7xpAsWPFyPfJFNoGUk8QouRWY9DRoFcGqYzM5kTdMkoDCg",
  "key35": "3m6tN1jVPPHymw1n8UrAfyx5TmZMNjrHnrxFrrXX64DRWFnb3TLBag9Wc5DxjefCE9KqQSH5Nt4mpaBUataVF5Dh",
  "key36": "2Vh2KeoSRSKdbeRBVqUVCbWMva4ED7Dq3BAjrHEWHjVXRWE3rZbJmv8eoJCRFi3TbLGTA9AmdVh3BPcuMk8VpecW",
  "key37": "2YGLisxBBrdwR9f64qWVmRKsjsfkJ2dSoacvhjBZJaZg2cc4k883XXAQaaQTH6AL9qs6EhPqdWJD1SV48cVszfr2"
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
