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
    "5LZLCFGBFub227mbGa2z3kjkAQJrCbfoq6oy2qySAJnvhAW4yXxSBWwFKgGvxpyp5cNzAt3kpvqfawpWQ9suLBcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63M1HbfysUTjRLNTf9eijK4cCNLLGMwBrDNZC4UYB8MsHU8ohxFZA9HmB3hX7YUANeEU6W62Kky2mUAPc7q2pH6G",
  "key1": "3N7iB6fuSvF7s9d9QwM3zjhYbGLWzYzJSjpdgXBDKH6jQniPecFKXRahfVNPG7j3fKuw88TyapVny5xLHn6Ji141",
  "key2": "ogUqgsn9TXVkMJeiiXwmUwfQ7DRzahstxqo5zZc4tQSTbcLKVhDCXDmzwAHR1iHTnJD7bvnthJnZ6cnrcyREUqN",
  "key3": "661frREhNGv6ps2TF16JbPvvwFgekxwWBWXAK8BupL5WLi9tcRsKY1raPqguBP1wjvYrTGWiaiQZddMyzYRHAmWj",
  "key4": "4aVeWstMM8ijafvb7JqPK35AduYQTE2238Dpepmh2duF7yfHRjSfydJTV1CAME7GoovP3fgsYqb6waAaCVEiZ7X6",
  "key5": "3dyupsyTYPhoTmGUzsJZZ6GP9Djy4KfkvoLbnQYAYzf1KaumkhiVw8MzAAxH3rqxr9voFyjdMEGvUuaSnLb4HX9g",
  "key6": "3TgGtmrpqSz9cfUv4zje2KodwixQXShq6Tx938xxQCTy4dCpPxnCZwX8ZwBN7c4BnXerAYKy3TPx2BaAaZqFrcQv",
  "key7": "3vGGefTe5hn3W3nwgZH9k6uGvCdZP4QaMjiNMYLGF4CreoEP7PBgJQ5bC5JH9Mc3784KU1tTR52mHrJn7Q1YLZVG",
  "key8": "3sgs2sEntBtwDmPEnUNpKEgwmP6WqHY6pQQAbME3EqGeRXEP1jSDCch74RgMLeBRsfJnvk64xsESadzYgUrxoLM4",
  "key9": "5b74YwBo3z2i6Sm4Ri3oyeWvjhj7RidS1spgpqJ3brMdzHcjKZLaSC4ZPw6o7snzP3YQYxeWQfYz7s4A9xzcnpKT",
  "key10": "L2bL9drgY6N1Sc89Bk57oscRSUzPNBchLpyhWw7fjUUUD2nQHV9c5mGQ5rDpVAmZCsmL9fabYxpr7DnJw7FAKVZ",
  "key11": "35tUxhwkEqjxLHzbdSJmbEWzW7geXJBLdmS1FzpoJgqRzmXRNhdbkDmoY3VEDpobCoRigJNbYjsPV9Tf4Mw1MxLE",
  "key12": "4a6Y584phuGL6Jn7M9U5BS5h3P8K8KGK7yGseaWxTWyLnF5nGE4hRGeF7KFoSBYQQeQdAxgRE7VzFezK6sRMb7Zx",
  "key13": "4xY9AwLYzF6XPuX42t87g3adYszM2DDT26ebZx5A7EiHJqn36KAV9pX8dHoeRc9tYYKs25YbCb2fE26rvSPxPcen",
  "key14": "57CygKeiC5JWuFNNVg5FGQpnU6Ybu8V6pAxvtUcG2UC8VxEi4jFPuz6bVn6sWZ94UiRGzfXkDKVRk1bfv4VizYMU",
  "key15": "66Nr9N9iA6w29abnVNJbRhHpjuxsCcrcqjJnamgbD3YUJQNWKkke3zW2g9nmCif1s2CXw9CQXWdG51HQbD9EVK6k",
  "key16": "4DWH2VakqQS815jep9XmRrxkkAGCATfPEeJhi6ELLfBfCXZaHNFP9BjvzjSBi4bLVZ9VZD4vw7ENPDjuu8yZQmqs",
  "key17": "2tbddWGgPUh9RgqUAjUoK3Cmxhezz6tQw8TRxbJ2L1SmgyyJ3ebv4w2ckvRdu8NUw8ceP8cLbwDb71CcUYkTmqDi",
  "key18": "48WXqRkH78DBrvM9nwwMAa1st8X9gRKPcg59hMyqLvWLaMzAdfpXxZMs9wEmJ6ezpLMVfaC2of1H18s6DhGsTcrh",
  "key19": "4Q8viF2WVRUN8gYAawdHrp5MJP8XXTaJd3UPFRdGs9qTnhtRdv7XhGY4cAKwtT5XcZpMRtTeSRfV12ZAdt81iW9U",
  "key20": "5zmyEJAdZ8484NKRNBjSrrKdXJDSMJrGDBpffpkTZ6xVULNqMZPrSczepuv6YaD5ME5MmAPw6bva3yNqgHgDgpQz",
  "key21": "2vewTKPMZEUDWEmqS2kZWiLrBfSn8pjAQF8e8UcXhxTdGr6t4RA18TY9G8fYDauS3EUDJNhq2gDGjvvpM76UMZGj",
  "key22": "gmQGmeeEWnLkKHDJHiSNtmkzGsyXx7FLs35Kq8m367VA738i7fq5DyNp3KRwRjz19eVza5YkNWZn1jeef8UmZFG",
  "key23": "4SCwVUv5TNEW9pycSMhenRnfBg43pdQ3B19eN9FGrs1R3aTDLKTqmAA7aZx18z7zYquvN7pjscc4awDmEm52GAqs",
  "key24": "5wzSfUcdruZA9JWcgHEL3Nkku3ofpq2MfDEEdNWsrBo8AVxtYFpXRUHEK7ekCcDZRvEGJeUXTwhEimrfNYPPpNqR",
  "key25": "2KRLeUbN8TgSN9DMKrd6D4YGfeJ8SQBTaTaxQtTjPFMMFDVWPqEcNufYC278PPUT3GxprNYWxRadsxQ2V8EXCGvq",
  "key26": "4D9G1xF6yRhAJPSASSFYVb3ua5Uktsh2fhumTJDVBjYFnNmRzEuWnChKanmhHk1oh8XtbVg24D9epyCURxXYaS4i",
  "key27": "2uqS7QZKVg8S9TYqcAVAP1Zj3QhPwpBwJDz2ZHLCWaNt4BfgoH4dxRrAQgN52m9mGeQWMhdkD1RMkA3TpBv8oVVk",
  "key28": "5b3ALKn29y1gsoBUfvnPEN2RhcBiDcSw1Neo459UcBSY3eeb6J17yt3Fb2ogeeqqUAxo2MMyqf9uh3XDaW4ZUgXh",
  "key29": "4S2KEgjADWYLK92xmHCZKDjpDFBGAnnabWPs8GRap5HCu7RLBmz5QAqJKXzhtdZQhTbmQpnT2th73swHTMxVgCdb",
  "key30": "4fUkZECv8Ty3gpxV32XTtR4HeR5aVneMVKxK5GtNk7dcALguocxoXVvmA3rtTPExKGAHBQwSu36bxF9Wxrs9Z296",
  "key31": "1F8PE3FxpjCzf6TvHDo8Tr6mKBdh1p1vTHXvPC8JPcCPnuRRD59WXUBFtjMR5s1ALGHz4Z6Uc5ieQ6B5sz2PXUf",
  "key32": "4MP3qUKsQCxn6w8KEVY2FcsQxNiBr8avzbFP1PWP2mLrBpFFC9QXQ6vKFZHxX5MGQRmnUimZkHJnkHBSs88AwuG7",
  "key33": "3gatu1mELGpieZHHyWEo4j7AzEVzYv9Z7s92bMs6SHiUHgxiNsMiCdSKCY5jB69Vi9MAv1WCRYKE7yJSUzTT5skH",
  "key34": "42Np3BntvTjiR9MNfKjy4VCHynCRCJGFwWtuxjSNZderYBe6BRcwsQnDJmNUSCDRUaoxz4q5RZVU7Fguaj2pL6nc",
  "key35": "2abTt2PPG6UhtVxmjA6EzhLgPCTLBaMmHgfbioBogdAAKrWP4oK4saLnAPCrmHDGSGKApDDmMxMtEmrsJDVAL6bU",
  "key36": "5baY74N2qv5yY3GWD3ftLNWEek5nzGTViCF7Xi5Kfdp3MAix5pMdoUbKxnhNHYQE4r2MCTY1WQpfjZGPQJm647qZ",
  "key37": "u6CeJSyXkSmYm5FckCi8GyLPcb13UB7tVsSdUgWBrBWKnyKtX2WX1oLxHcn5C8nUZp5q7eneFwDjNtaGKiyJtpH",
  "key38": "4RkBdvtRB7GjBWc9TSQkvSUxHL464A8fepKBSmjYKYXRshKckYKpAxiYLLdsr2y4f72WmSWRnv7wLTKHBGgwM7HS",
  "key39": "3XKkkxnUkUGZGVBYmmVvKXEMpjqjbaSMBiWMVSYtscJhzp8Td5ijUWYrvFJ23fpeA3PAsbtSFJ5T3u2Qie71RwXN",
  "key40": "5uqvVw9R4n2DmAuwR9akWyDforaYDN6d8toH8igrgXa4NpwyW9XeRd6dhZjzhkK41r24AHtYM6LPonvVp8TWvAYy",
  "key41": "4dtc8MSEV3Gp37i84FgSzifSQzLxbMVW9U2QSXKnA8fAfF8qnxpT5znxE1p4X9hUHcVs1ierFoYV16jRaPvd3doS",
  "key42": "484SfqfFdJcy5LfXMnxZ6FjnvJSrTJzw9nmbprafS9oSMkbrYTD27aHj1GYsHRtwyLX6hbuqyRKXCMNw8ecB4nvz",
  "key43": "2YY7HXAFgtjveLtyYh4C1Yre7jcWmeVUKkvKW2x35pXBQdL6yQXpYVUhgnyHP2FvYVGogaKR6nUBv6uZTGA1iVYF",
  "key44": "3PGM5p771N8mLfBRC3nEHPMHRe1gMz1BJmtBHzXXDKzMmHmL8RkMZ6649YZV4mGs7PdwxYB9UtBTcMQLzHqZKM3m",
  "key45": "2ZQaL8gFWyKD1PYfTiJMiidknRsM9Nq99rqYN7KpubfM3iNzfBnXowYfbCbqWMbJvGQcVF1W3VdKYEPyVdhdAexm",
  "key46": "3XsZboqBYjsK8GvEGGR3TTrDZ7GsjGMxyXpFEDgBwCSP1TY1zikfS3x2TXLqMzxEJkxjLYGHevHmXiUQka2dNfPg",
  "key47": "2EwTZHy38C5dtWUaL5pwXSfmcXLcfZABtwi8oYjxPXnGbE78Srv7tsRaLeearP1XLhrYzPb1dMqSDiVbMwj63AiZ",
  "key48": "5VirL4CzNDR8KHKzZwLPEfmzV7s69r3skM187oCWnWkZoP6aNwKp9nGMjgYyp8UTNXUGxvK7yyEzxjT8achHtw4L",
  "key49": "qL2Rhi8Bw7Ewi14B1d82ZVeReHHMKSKK4xJ7yfySqtbhxZNDLYSt1PanSBs5yMW5ADaJRsrMPBLfVL3p2BjXPg2"
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
