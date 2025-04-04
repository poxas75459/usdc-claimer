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
    "2mjZ7dpY64ZECEHY14jcR7dQAdhygUPyQY3m19FvtmuDkFSuHtwhHNyfA6n8FDgEKacDrC2eUtWmcVynYhTJC5XT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35fpXjCJ3p7d9UDQnGTmW4q9nX9KRjbH7rdUNMMKFmHf1dmKspWrey1i7iYaBRcXXEFYzETSrgCwjXv78SxfruB7",
  "key1": "34VUX9BLRL5gPqfycoAVBD19HXZMcx7ajtx6TSMdHsRCpgu4yVTiPwrPfDCnrwc32uKTSqpVnvhTN9csh6XtT9DA",
  "key2": "37RrdXx73K9ZvkNg4A5KRc6zZ4ZjSfMwcBxSSXj6Xgw8rNug2w4kqxd6PWarCuRtkvxDNJsezWMLRL4mKNtCGDAF",
  "key3": "bDqZemazVruRD1J3KNQcW7uowrLgP4pKoeJyuKBWQgm8nyofLkfG7Q52k54tkTrhpcRttPQUSa7J493PkRLURfN",
  "key4": "5LJNoWmwt5ShrSNn7LXfG6cPMcdpYAJ8ZYnQ1TQptmGm2aCDzrfANS2g28iAJh6frr3Lyc2Y546qPWg8pb9tuWKj",
  "key5": "KFa3qqLmUwfQ7uftry5VV4w8UiJnG47RfV1GSwwnE2MGYVHkXW6N6j5762PvATwuGinjTzE2aYEqFn4djfjD4X6",
  "key6": "5PUbbe9PPJrzWj7MmrLNEqcmdNNRRRavqmtXfgL7vpAp8r5hFwg3No1vNhAWiACcQ3L2zyUfC9Ss3v73TtqxREm3",
  "key7": "44eqw1116HE3H3EUEKGZj1XmbHaB2C5My32r2hSEZovcFahjQMyV3HxxN86Q6AFiL2EEvnPDAeMqENR3u96HTeCF",
  "key8": "tmF5fhpM7XXwTVGdqjuJG7qHyi8ukCxCR8EDizDeYS5V7ympotGyXc5D3VBxfeLVi2Upm3UKaCt47CorScZsuS6",
  "key9": "2S9opeee91RRc6VoEtdKjWtsBAnCFfXtCZajZg1YpNnaVMpZ8nDAiXgBzgX5vyCFE7JuUERv1gnMRE8rgFEtjF71",
  "key10": "3q2x17UX8dLE8c9AnXmxbqYy96ufG6jfzYfQNrCHxotGWgzWznbNaLGVCudAnTHKujUHvKHDgrX5BHWSW7TnR2u5",
  "key11": "8sj2L91L25SWaY1oGuPv1YoXGmzVnGovfzM3D9eFzacq3P1gYJ334zx5UBnvEnfNS79p5NBgxBDg3nNfjMgeWv4",
  "key12": "wVnNiw4kNZg586oGqbMwfMTc4mx3uHcJbM4xa4T2nUbzGqWMihmzbsjm1tqre66hUdC55jNk8EEKAVwQYXL2YnS",
  "key13": "kBpXsBh2HZxHJuJSqbs7buv8rhshfw9bUgVX589FrsewjMJKvN1ThbZLiusBYLa7QVe2XNhLFALhNApm3C92QuW",
  "key14": "5B4uCPqbKsfpfmwxauUi2Eg4ALeMSiq3SsTVntEnk6qfTkwcyMn5far4dzkXGkQ5fj1ehA9hFrgDmLVS26FPtLTE",
  "key15": "61QPTAhn2jNjL5R8tDS122bFNv36qkqLu9wQrmALhuTB7gcn6J9eBeRjL6ZVREbSgrWmXryyVgdoXaesKN7wEYxn",
  "key16": "4k7zkmFb98GxwevfFBM3pqV1BrFQxDYX1YTWvG1Kn63MiJP4M53nKV34pXChWixpp37PHeC3Nw5CdTJm34Bo4LkP",
  "key17": "5SX4UMJDqt9yVk2g4MSXAwT32St2mW9RWD3CoE7Ras2BLSzkyfiLPJo6ENh56WRDd2LSH1W3HGBFbMHGiKNoQVB4",
  "key18": "2VEYAH38EAuP3zcRsYprehrTBH284jg3ARRzf9g89pdfVXV5i5ZVGVpsnC8Qa6xtGwGkvdRzfN1MUTs8REV82KhA",
  "key19": "3Sb3xfmwYmHBJ67gw5SCRkKpSiN1EDfU2ghmVqgq4eooXfzoXBb3ZDx16LSiiKBdaKpE5jHcrNT8aFSgw1mwaWCw",
  "key20": "3SRvbokYikfQ8NjMnPQYQC2eUAt9ii29yvpPHRJ41fEFCFYsKKrPAnRAEqXUnPJPKz5jZYziTXGAZjACxSh9qeS9",
  "key21": "DyYkKo5BoTXVwdnBP4ZqzMgh1AXQveUs3n8rNvhSNfwFjTmYPnu2KfkUuL4NHP8z1gVurrTaHFSxaRASdnjQkgY",
  "key22": "5hj2j18WCWFbqKVzjqq9gXokcSWbr6VxMXU6QrJ8QGdEsMXX7ikXvN3kQWgyu1jDy7rapLhf36TK98R2VqwzwP9t",
  "key23": "5tWymnTE7evtJzECjDxiLi6kAVwRCizev1jKxh2TwZPDJPPJHg1Ky6dc1QmUCenPbhSd4Amk8kwG8hy2RfgBogkJ",
  "key24": "3eHusFdA5HNWdXEiuoUDrNPR2FvopTJN8sXsmC2TB9xcCYXiHWJdQv9ZExDVWezpkssMdYk3XuGYqVw7YRDsxPjf",
  "key25": "12179dtrg6cmiVynHDvakih2iHybiqyTaoSBfgnrJf6sDbKrZEyhn5gjbaKo47NeE4jwc1zZZ6ddNeu1QHhQ4vH7",
  "key26": "2D4XTiPjEgyZ6BYorSdCtMTmyWvxQTSzzuRAZK1RbfYAmmrbNMCe5vzttLHRhVHhHRtbvLbRuqJn9T8u5RL6QcyQ",
  "key27": "42XZvSxE3WA7mrNaNoGkW8uBV8sTqAioGszw3TF9eAkmFfCYPUCSMdgPzhw4kbp3fCEkBHqWprVwXWmtbYUS12ac",
  "key28": "59t5fYa5Bfw2deuaKQzM7cURqX8383MkKVAnmcLuMVsYYQvHYmFPFh6M9vCzN4iiekfHx2kLQ2YUzqNrrJMfkS25",
  "key29": "3f2ZYo8wqspSFNKYqr9PubhZquJLqDXFM7khwwyvrfGgYQmGzXKz1KLwrnj7LJB9CYnrJgCnaNjjvEG42Vcergfu",
  "key30": "2f3pdxxYcrQhcc71MvmQUYmWKGWqum7nLKUTTZ8CCWNUobZFMMKUfkme6Px11YphEjZrvUSFrLoBcaNqb4yTZiw5",
  "key31": "3N2Koux3RYtsgK2JPq1ah8GWfp6orJvhPrUm2D55SRg9CLL3BD1VwUq6CJaHxJTRVRKC87PXjNXTGkWyVUEdtEmg",
  "key32": "3vYdXefSGibDj851R5XXAURWgVC4mHjPz5HEpenaKpFfsyFewsah4J3ACMpVX9m4bKVqicJC1EYd8iA6JiQPspw5",
  "key33": "2WEpNpHaNHaiRMaPnzVuvpeSbHeST5ADUxWfFToAgrYe9q3vBTU9CeaeYLNYqdeQJWhu6SyxPqeRX4gXTpuEkC12",
  "key34": "5SGhssEp3MY7GvfREBf6K7GyX3ugKANsBRzBDzLbpTsd2HUe8TGvpF3rPauukbwEPSTn4LutYQj892Vc5Y8ox7JY",
  "key35": "VS8v5KMBvbcbAmFMmLyv6b2hE5PueayKG2jVpJhu9VhsyCgctbrgHePvokSav8KANZsAYanUMzk1sALJBgPyfDn",
  "key36": "3BWBGPzgMw7XgSuAJJuQ3EqwfBrpyvg5Vj5yKhgfn32bKvXxKLh7MTkimSFbV5qNTBnFFzsRGseKR3HdgQdd6Rj3",
  "key37": "3XfZi4oUWj51T7BQGEC4c5jh6BivkkYk11bP9aHoAZQAhYRt8m593UikhLyS2myNQf5EVEe8ro6U4JmhaAXsiAD5",
  "key38": "EDwKremt4uQ6rVE37ZGQVv7XnJtHMARJDUztsmfPB66mykUZ59ZD7uARDycuQTCCTeSK6PkwggRjLzMhjCo36jN",
  "key39": "5rVzF4VgE6rJfaqA2JuYH6ecC7KSUqKus8Rcct6ofepM7DEEsmKpxhPK1eFLBpDcmeptoaSHfjEpYqtEVTCZCY3h",
  "key40": "FkijXwkDzZCLjzPxoLjW2yGUsZw1Q4uU2s3fbDyg6cEuYViWe36m6LsB5ttpbTGkHPmvcKqu78swa8m3afDm7Bm",
  "key41": "4djcNcqbHmdPxTpucBnqXBTYpFDu2zPRKRPz6kKpDosMtuHp5PJpETmbimSs54wfPgnPsiUSeaAke34ZNVcRSXua",
  "key42": "4b9upPEFbGfS7nKS1DBeUigc5aTUgHw6fd8ZQihMpRrPXbUpjwbVDCHeWhrwEmVksy4uXEw9yUQgPwJFVJ9o2x7C",
  "key43": "5ubuC7ZWtqSJy83NfpMhMiTAunLuc4xHM89K2MZB9Ahvu1216rSrkFm3wN7fMkSxUuoQJ5goT6bNHh4XMDt1GPjx",
  "key44": "jhvYVzJAHueoua4BA3FnN1gB9YktuvHNnRWSHsmUeRrxLT4AXBScPu1evHLGnYH8Fcah87GGd2yjsTGqMHETD2o",
  "key45": "45b76cwxrB8dNZ3pDR82DrSLsEEAeqFfgS61dnsAYM5pg8Hqw88k6Yr2jYf4eVMZnMFaqV953MBH1DkKAV8wM3Hw",
  "key46": "5iAHXJzHtHJAGMNtF65fPM83xb8HHHAm5VW4mvxYMVjvuM9dXANsGQV9BqkTSbMyfnyKXXkrWXqob9esmXEZ2C7",
  "key47": "2NMLw2BufC1kLivzkWoFPomoUiNFzStvFWAviWbsoyz1EXY9kuDDqCbT5yhgCUJs56bYhCmCsQQrtK1ebHDsXkac",
  "key48": "Wx48F6oSXJaK3G6zEvXd91gA81rQGbZ7Vkt5hvMzWSWsPA1hsbBQKTTqmvBK2KeCVbcH47vMJYvbA8TjXZ8jnGr"
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
