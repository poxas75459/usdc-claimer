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
    "5YAori9mBgPuFP95T5RcFF1qe1ckodh6FiZBhvLTiFEkc87Fu61HCtu9kXTSr5VRMHvrtfmLCUT82nLudcbJ2Bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cy397Y8qaTRySMgJiEZw1PYvvpCfWEtj9Zy1wwBs7nmCLWbojNTmu3GhNquskdG837csfVfhjHNZ3j6q6RfMcYJ",
  "key1": "5ttPsUJoVdN7RUQ4NHtdeRkW1cqdiaMWwh7iWUkP6wNYhKjR684Xp8TCqPfdWWCj2ET8LgmUQ6AYvSk3wwtpDQ2H",
  "key2": "2GedxNAhKLuPPe977RpgRZgKsNhcBnw58JC2SvrFcDbov4H6HRzc5pAQ9yF774soty2rdzV1yZ5uR7RDbRVJR7f5",
  "key3": "efA6kS8maLC2SUuRatnSLkxx6gw3ZWGJqNHGoU1oVbd3644aiK1wYDSZiCNSYKggoJp16bX13ZxqPSb37m3P7XV",
  "key4": "3xR52NBSCQY2oqHhckezHpXySaVDQ2MjyGFhoWnaL3twKrurjfKG7RKF3ozPBadFpdhUxM4AyfJqdysfmwRquhTQ",
  "key5": "29mH9N2Bo4qB4aWtcWWompiaZXdPCDLgb6ehJ3rqNaNDekxaXUX2F1E98duguYUHbgeCQLxLWcqKnrwAnGTZ5MVn",
  "key6": "5uoNXU6crwLG8FQPFF3GkPvDSmnFoiQfCpErRSM6P9DDTVfELqk5JCLCbYQGQaypz7c9HgrzJbxnqF8ebqd8Pe2o",
  "key7": "2tU9eixsqKKqGBpoZwh2UHtJmfyUjo64aSKJVCyv4dhpwfmzEA4zv35qtowhUyPeCkaCWNFZQe9Rz1Sopn77V9uW",
  "key8": "33b8TV3TVN3BgCgawaME2YUjE9gZvtU8AQuwXTxUJk5TCxpXuv4oEq7ieNR8sxFJLvSDERiFns3bqFY3HfiC3uE5",
  "key9": "3JqF2tUJHCaNfD3Fwz1r7VGLXEmXqXzQ7AP8vM2gUX4ANyhda8ZS9YDvSHnvpLNejy6ym6B1suAifyTAT4MkUYux",
  "key10": "5mXzwPNE2haQwgP83iU8m7xhNu9RbbWFQ6dQbHfEGCUuppL24Eiz8xs9veEVrx8Ek59ubb7e1PBy7Vhx8b3V3Prz",
  "key11": "43QrWGgL9rmNWGzsAWdjPMtg3JJ6YHEwARQJg2LM25FvBt7Mjg2Kb4UV5F2U9iExLbhVNM4XomDdChez9gt6z3sg",
  "key12": "4sZx1HtW9cGidZhwGRwB15qTc1MgPWfH1QF4jgCaW8keYxAgmQFadNSnnYUVYz5pe6cgS1kkBgSoxVme54P9P3BX",
  "key13": "wgfLmJg8QNrG6jRTLjzDjdTe11MbwKxmRsAa9E27bGGQT86G63Y75Hwnd9pcFRTb5oQhAn1EoX3w6J4dy5TyUyP",
  "key14": "4L1DKMj75Fd7B7TTYVbR1fouw39k5KspetTzb8GsYR4E9ZyBczq4J4tjhmEv85EYExNEJeWsw8s8Pvj1YDA8x9aD",
  "key15": "53Ls9uz9yPwWVEBr6DLSTe74t2SBbWFBdqDaGyPmompTifDC3BnSrnsHi4ucDgDc4nuD6u5kvMwaoXc97onzd5vW",
  "key16": "4QbZ69zjcGRPz6KTTXQVvHqvZXchP9NFZxZ6R8Q6EnbsNYrA8rpzhwQzAXcxCyk9KoJK8bGkLrRqudNdFJGy1AXj",
  "key17": "4FRxbEJmwrDVkf9SpGkXaZcFAHQLxfxYeCkTeHtcLZR93k6Nzz262sN4EUgWSo7KocauxsuW9Eo3FFAJ7w8c8QB9",
  "key18": "354CVBbFX2JB5SxCGQCvUUCCedKWdaRHYSQkKBpTNtcJqCToAviCAk6TYxmFQ7dWep3VKxU58UiQg7JhR29bkzWa",
  "key19": "3yp1dwy5YV6DPo4PR6iqFtScpDCp6qkeFMUxoxVV2ZWHP2KeFwQi7GoCZJTB3Jdea1v5Y77kdRwPP3bqYxScSrLg",
  "key20": "5KAAvXpBJfWqunPo9pJPNQWdVZFLBERXJbdv2Nqu8aHqivaU82SELaRurTrD1pNzGy3jKQuV6rmZZFCjvfimZUpa",
  "key21": "diBENKUrDuFfAUu8frmyrz4TpcBc19z7bhZ7g2FKSnN6CGd3RBSvofTtSsLUTQ4mg2QYReC2gXy5Lenkn3fcFVc",
  "key22": "5wVJaJxCaDx3kyA6b7zT1g9aDwFULms5oFQSYM7xuTbXcCjca9FnkFGtwufELAseyAHPgZh1aQ1TDbsSKVsUHwMn",
  "key23": "5okta1R3z8UfDYR2DkbcLZzxHLqxxorRdPPyx9gFSkxucuLBQPAtrFmyQwM6hZ9g1gs4BDmUGEgzd6zD25GifRuz",
  "key24": "2dkRBhWBh3aiWwMa5YHGL1aSDkXa4qW3HTjcdsyY9K68NDaSiD1rwEGNQ6SELLpDYfzB9TZg38zY4B1YP3A7g5U2",
  "key25": "4ErgPpXctCsrXp7CGsRJgn51nESCYLJDWm7Aeef2FAh9HeMYi1j1QGNcqv76bNRz9bdd7UCzCimieP26bFMnkP4i",
  "key26": "2xouBje2qv31PPzt6MttgVWx83fjqWLcZRUR5f7qJFnNcRVqnMmQfLsfWM6GSZ8XyVb8rZTMQLJ4GEXwbNiLpjPi",
  "key27": "4XovKjEGMjoCnk26iK8Ht7cpwfMddQQdUmciZgqrsCgqrZA4qqCSnmSUtwH3aWtjxqzFeBJtcqwgAQbqUSiT9DmW",
  "key28": "knzxdjbiMwpAcEdJrrr88DYvKjvbi7mGtAYsGGS5HaX2X5SopPLxre1ciMTHiur8iqhbFP6TStAbNErnQbAR3fe",
  "key29": "2518J955zbQvcnS4gNevu7AjKV8ZRSb2butqFtXtY6Mg34t9rPPqtaTQjMg5eFxm8MijbNhDqNiE1y6cwJscEh7C",
  "key30": "4UyPVSL1Z99EM37Zrcjkm4HdyHfpBrS7SoJtLkg3vbzWGy6rVeYE1nfLF4wsM8xky18oJfXjKWtShJQpD2T6HDjh",
  "key31": "2YZ2h1hNzkrZhbe5x8wWQveakvsGgFLZLJ4mCe473PTL6VupfAFH1yj4X7TbocpNe3zXQDE2aJk6jbHLyxBkHHfp",
  "key32": "2FTwb7DmgaSpZy95i8Z2QSZwQPXydsT6TmZQVYZAnTrzDpRMS5a1yvVdiRiXmATRtnFgdfBtcm6CcyYNZgbasP8h",
  "key33": "5vAFHYY2P8odU1XzngRjJKtjyXqU1wdrDpnbcU91qDkRgangtDeawZvrczgNKNWCPXVNKAeapmKAC8cZ2R7UF3nt",
  "key34": "4Gn4mXp8DguLPRAqPfdPJzQ8TSqYAx1WMLC2cBJBsAun28owbdUoVZLN47xDLRZCgzLYtPxv3YuLhSTeCYUv6UpA",
  "key35": "2BGEdgsbyPYNTHcKmFNiTHhdjthF469hKP6eDjkyREitbe2K1kj9pPZ1WX3VMxAjMsjfkFnJT71pmei82VzUEiLw",
  "key36": "jwPhf3sT15k27Bkkvw77MV2aQPHE9ZTHWimuiXZmPTQqDDDssyTgSc5ZFGQDJfcPwEhmAJsXusQDBxfksWsvY8P",
  "key37": "33pi9RJ7Epws7PdnvHZ7NRQCJ5ex5twiGuvMHAunK9aCs2e9RowigC4GKEsXhJ7J2fJHUQehsscNfiZUWPNPWcFC",
  "key38": "3uZyQZopvBTjmrbS6a2Z34X9iMnDfHiVcoZ1dxCNcZxtQ6iK1Dgfv3w8cJZv6GgKUjgiVnR3XL7cnMvCL8nxMpaU",
  "key39": "2fzS36oSMhw2zQTRnZpAenoDCL8C2YqV1M64W5mLziNdifr3uvspDTCRPJYMB7Q5updgjEX82pFEbiH1CjQHehmr",
  "key40": "2Lsf3Y4GffYNVLstVdFAWsyaLsA7sjrCGybxkUEsNrLk97psLSsQxnmMvX6dnnYg2XBTFFbocCYHu4LMv7atveob",
  "key41": "FCx4echt1wgpE3QwjnhNryV7fVTDZF5WaGtKdNPZkNKqzXrkHFVbKmHQ8pBhXAuNWJjgfv6iCkvSoDc8CeKZABK",
  "key42": "41ASYpqbD7zx4W7fGBpMMS5CBYEwsLhhrSwasFvaWCFnsCAxUMkrLEVCcGD6nWm7aasa9W5weqftoqwFjs41FK4J",
  "key43": "cd17qHybYNx9xvoUFRam3gnvBzFJF5XkDcAhE8KSjPYq2Bwm1v7u2NgZC2Anj3rRFRbgWwNfuxFKNAjyTPqNQ3U"
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
