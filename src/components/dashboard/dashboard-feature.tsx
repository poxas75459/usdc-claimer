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
    "4yDFzkuEZY6xxLdio3aytFxVnSNAEtUgxCPX1kBDsHDznDVq8ULHMSJYgkDr1Sfuz6gyXF9VxFyY2H6Jtufo93nH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46WN3jTMRZ2vjfN6CsJvHw1niC3ShiroKbLDKxqA9MV2zHJ918uQifkyHYxwCdHMWznEBN7k4DpDts58mPPqTpZm",
  "key1": "5YcExWtuRcswD4m5MpHXTLKRzH4Ct7cFxuDDiNQWUAQGpNLgFQy5B4uLYF3KBzJrmErsRoYg3hE3MyXhLqNPGhFV",
  "key2": "5vy5ffiknFWhzLg15LPGwutHf69UqVdU3wcAjxaQ1VaD3bmtdgsu4Wr1LaVuwCPi5yWwTwsrHFCJFz2HDdn6w3QZ",
  "key3": "52fFqnQJwGnJs9oaNXqzsTgWMKtqrSZ3FDbaBytgCEzCASni3rU9LxBJmSWbExNjkJCrsweEkFQJUWPeDBFPZqsW",
  "key4": "xfMWeCkR7RZdWSsHeMyNfjwTNZJmmvSQHvBcBV43WsDMZDBrtWGdDj47dTKTXyDNbR1fuxwqyCcMytiCpY6jrf5",
  "key5": "ZsTmMU7SMD3hDYzbR9DyyzxVZiSZ87ipqJeVA4PPXriTQ12tm8Um2gVWLUP5txkHVw6Ry27fx2XDCeSwsZbnWq3",
  "key6": "5QFHvmcHt9ci3hSwVte6ogpQJm1XctoSoKf6tbn2GAZaWGP8it73EXYfUKC8QRE9WiSbTtqcMspXSKFZ9qvTdBxT",
  "key7": "62hoJ6Ycydfv78NVH4mdMfQDdRLG1hmnXBnDy4t15Ad7qFt33rGaXxzrViVXuK2EsmzNVcZtTRXxkkkxvxXnKjna",
  "key8": "541ox4fXLKGGnUFFhWjx2XAm9EA7ieu1Cs25ijDSKy2iGk6TyoMW39g24TzLjHn3TJhEAXC3A7Z1CtEYqWXbLZzQ",
  "key9": "2gZeiiAgvF9U3TFQG1sAxJE4Rk7U6UPSWqTdjgkR33HDzmoJzeXgegWxTBozRaxzPDV3oHBfPvKVL75jVT7Uhu3z",
  "key10": "ixgSsLZggWdPtsw9EXJCKvXgNZtyK4hy7KDSgiVMjmiWXAJBPBBke1Cfw25yhU8HXeUkSX6zPB8FcF8pL1fVXzt",
  "key11": "55JhNaS3vviZiDCB7CgpboDd1BXbn7SBn4PscZRiEQHUGMLA27AFEFkiBo7nBz9rJA2SbEYCVGdhaoZqSLjQPK9w",
  "key12": "2Ge3VX7KEVkTtDpmnPXxA5kePw2fggFQcKLkAJE1Rb7ebErozmwTG7DbT9wV3s2ZgaWA1ueijgPP1PEueWU8BAtP",
  "key13": "4hj9d8EzFDL9A7ATSzYZA91mngRiLBLqyQ4xnQzjye4yDzNr1UsTmfxGMvAmTAxgLDiobvsb8hKqu9dsCEa9CdEZ",
  "key14": "ovPqHwS94ys5fK55HFyJh5YkzrbPBqEEVekqf5AhT2DyQjqRGghzGsJxBpPBVePEZph5fq6NvthKB2PhaTedMkL",
  "key15": "3EQr9wqsgdpGZwZ8PSdQRY46BSpveTuaSrCsi2EEgMfCZGBrejfcftC2yyZzBzykUNJs1TPKDa9rh46sZP6B25NS",
  "key16": "7veVdqTYfGaD1ga1bvSBjFjzzV4SMiWvA8WcWZQMwFj2Euk9DWx3MQvUSevHze2S148pB3t1utrMw3XfG78ja8w",
  "key17": "54kAoEDKkviCBzWmrDgvzULzNWKEA1FkYKTSppYCvQkLfZXxsmm3HrpLjzkjnHXDVdx6Nrrb4LgwE1DqZk1jGcXh",
  "key18": "5dVJm6ywbaUxXeUoBhwxyPLvmMc3jh9v5WXeetP1myYZgUzE7BKd1tUdtd6zi7d5wFib79VxcztPUfvCnK7JB3kJ",
  "key19": "44ZKQFkfCxt31Z2iHjNHePCj2wSwLMUNWRsKkdKfHACQhKKd2bbPqLRJiaDTBdg3cAu4fG547guTpfKBzV6x3Lwg",
  "key20": "BsBRTS5nAp7E5qTsXeLQEvjj3keVDE1Xa9SH9CkyoLps2YgFBrvBjZNThErWMvj33kLh4gCcvktEGH76W3nyNyu",
  "key21": "5d1SbHVBRtvZ5b8X4JAnnHSQrvAdjACFAvwZjA8QC4H93nfAv9wFqfpbzBB2B4Ahav82m3KotwvbdeNFsDMoyLgb",
  "key22": "RGmrBEsgpFfpetnuanP7whvvaoeW4dniEYREpBb3E8BBEfD3K5egcf49ggVpLtpw3mZkjeJXHyK4L8NZAJjVzf8",
  "key23": "2m3t7Gm3BwemuS8j5oSTbsT448s6sRm5QZvvcpAk2b9ZfW7LENiks5QtbFxQcTSVjnpVaPf4vw87ZKvLxT1DPYb9",
  "key24": "3wBnbRYhJsN4RpU7QREbDtyKaNbDFcLMzmBz42bRBktbDB9uKGggBEmJg4Au27mo8frE4uBSgsVKvPY8EE5vSz9T",
  "key25": "ZCSCPVMhRw2W25JM4UxYRDwR11uoqJSuXeokdr78MZ8wEwkYutVRqkq4eJu7F2mz8WxoejMu2CTYuL3ZpvPsVSw",
  "key26": "5tjYFfTs9btkis6Zm7Rkrmwum4xru3anXFeAcE2hsGaD1HQ6TnucHksgW58mY7QPfEbp1SfAFpDHEu1JokRjqeuJ",
  "key27": "3X1P3pm2TgWhJQFyfzdQ2no83AamTQEsgosS5aejRLkeX3f4NByRegq8xCWFdj5oZxdjAdSayPXRTozRvajgvJqX",
  "key28": "5aeZsDi5Q2U2a6CjBmRRHT6abB7HmZp6CVRknH1irQKQ82WW85HnZBvtXFLf9tyQzTJyfsTXn9ZJwRE2c4nqmqnZ",
  "key29": "5yR2MNwx78oG7yZ8mH9nuuiHiDbGvxUt4HNLdMrd3h5peerzyCzjjiqwWctAjnJiatnRpoHJKMo2gidSPNejoXv3",
  "key30": "2yQVzrUNQfgu2TWWzpk7Pz5SkHuF7zGf3khjG1RhUUs4mWhKiphT9LfujQmUHpsvMmW2UMmgXyLyTN7wk9icCyh1",
  "key31": "MFQs7ncB28VhXxDi252WEZQ5pZRyH6LMnt3RpnrQiJFi3wMEXGdPrircfrBkBU2KfNpyxcmNQ2FgDpcF743JjJ6",
  "key32": "5AMUUXQKQmhuwBHyBVrwMNScNmhjWAmwMdUaT9h9u71EhrBo2ZVjCFUhJrNc4dqP7HEX96kXUcKW46YJSpYDBucz",
  "key33": "mZgQ6vTLqdy4nZb6jBF6aqitDVkHK8gRhrondAJUfhxk6EtnUaVp9eeGzWBrEkNEGCQ5P2crRHKTpDZBP6RuPS6",
  "key34": "5ZjENrcMUcGkCTHSjqBvYdWnQQ4x1ztDjyKwVU1dQcsciRWSQhUxqKdBH6XLBjh4UB58Nzp9cKG5WaxAJ22h7eLd",
  "key35": "aftRfNbKsmhRcM9BLpekF99aTWiUpcmJWLopi6bx8NQmrn36L8wHBuP8KGYSAyq5Z4ECnoRdoYvo9A1L7HrX5d8",
  "key36": "2uP28CuLSJzkUEhugcaPeVW6op1tYQmu912W9zrC2sz8GvMhndCR1hTFAgsWnhcTugGvUoyjKUt2Ej8GRAstPCAJ",
  "key37": "5DNDpVJrtnG2QeaGqBV8pEFVD3jCcqHnsuH47QL2t63WzuwLoDhp7qyFMz8W7hQ6bbHQq7CHd3FB2K2bHuDU9Eqg",
  "key38": "2shJdrrj7bxfRkmhbeR7i5trSxxPL2HEoonPH5rXyeWWaQGKJ88A49SQGxAcW8Ziv7U6CaeAEDQyZFe5WkczHvPT",
  "key39": "2f2EHdiYsxHrCAijEMYxvLrDSgHuiQWQqMbmw9d2g1A77cKSJ5DsBttWwdY5TUSrVL4ZxMpmVkx5RPmKiJipzX8W",
  "key40": "4oFwc4NWEHCBXMZnkHoDXpnaZ9QU47ZKXkUE6Wn16NYicSnJfPnT73SkbXfvwRBQxWzkgZvS8PHXbWjtW59NyS2Y",
  "key41": "3HLoSYqHzGkX2Am3gQX3M7ZNJnEom8S6gdojByPkQLwRaRhrm5nMpBLmT4YQpM8PkRHZdE4bdoD6bfbX7pS64Wk1",
  "key42": "QLnPJFypNAR4LLDKFG13WsQZ11WTEXdfMzwpc5vF3VJhvFAQyXN7fPFcrWSQZg1fVAVzZddVkJa1dsEgLGMq5Hw",
  "key43": "4ccwwRd81VqX5Hos847hJeMCPLtZ36jA8W7QwMvnyZNY14LsW4qawPcgzPeXSAGYzgrhTte1wp9YpkKUwfAdCY93"
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
