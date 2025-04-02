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
    "5RV6oWSuD1g8fzJTnFN8iYzPdgTaunh2QwfCiG1ct7WrLqqUvpXJvV645ZaS7dWRwtB5ukvzKhPJ1iYSBcqnNBtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xeBnLvH8HRQe8vpquuQTTj996UhzzZWnRCmz5KHJcZzbAReSgvGEBxrLb8KVUuzQSzDcKsj3ATvrfSA4juUiEw8",
  "key1": "Woc3oydRrHLSwykfia9corBh1qkrvf4z9U2YgjK7hcnMa6qja7enNUJ4SUUy63MMKhjkVBMbMzZtzZSu3KEnzy4",
  "key2": "2m91TMiyowfgvFkgHtymoJYYH7jhEKfiZwhQtjXGp1zYadmvjL4FAvqyTCnYryJLTaM45h6TFCpxhqqDJDiGoNom",
  "key3": "561P9TTQtNtNMCEcGVm3e7Q8ASbiKQoGi5ufM6rd5QFvw6xdmAhDuASnCeVoWcAQf4FLi8mjy7WmLcKKKcLyLCyo",
  "key4": "CcxWB2zK1XFkqD1f4Hg9bmUBBs1S3FfYMX2Gvtugtkvc8fKqTioTMktcL5ZjchS5DpxsardcPhtK7VrkJFrfWrb",
  "key5": "3cc5jMvW1LgHtZrnMFtkUPiKeqqHFQRsTPHtxLFexmVJmpTPuRwMpK6Uo8iRZwczVpLfNKftd9B75hi24t3kGE6p",
  "key6": "5B16agFi7LNwPb7fCPp1mpnrbDmZ5wxePVCXzn1EQzzDPXGqkuJCF8ZemJ7wg5nSNPpfNgeHXQ3PDot3AVx1dTFT",
  "key7": "47BQkTfbw9YF9XVYUFYGY7jAS6MGUV3wV7RtDJCa8eZDkkK2bfhk1uDxDL7XrU3CbdCNvqwvyBFimUWEAEC1fJCp",
  "key8": "3ctg9YMxLsRdcF7vE328dm58qX2cBJKKxA5XYiCNWx3DkjERpcNhe1v2HNWezvjJujUadF1XLiFX82dZ9fwFCNhh",
  "key9": "3NLvzbSTZv1aV46kwTGnDJWU3GpGM8uCePdkg8KNNA7n8m2FBsFAs5GcpLLod8vAERbuFZVvneEzWooqHeYnGSVL",
  "key10": "SVeeeNUbRCCdxt54BAreQHyzxX5C9JPj7mtJMfCRX63KSv85qmwC81eFmj31VnVpBgTqtrTEp1k62JQXB12ym7Q",
  "key11": "4w8PXkQgaAQdAJ6WQt2eJfKxD3rGJ6Gs7L2Ztuttnt1pVsQhArZoEXWTYBeBYj3CUTcDfAeyxYP449gYSy4q1fda",
  "key12": "3HPn9VXmqcc8qstFDZzrpRhsnpLP6HZRfYdjTysdiAVM4oKxkNZo59MFDNYhUixRwBZ5LGt5HfQUMgQRUEek3g4P",
  "key13": "4vs1xuPivRTKviGBAwFobx2axJ4hZZevy9FyQVuKJG7EW5kvnka7hjk2uV55X7jRBEK9nGC5w8vyHhHuWf7JkmFD",
  "key14": "3kLQyrnMf8YYUzT3bTgomfLwWyHCQsdqrGFXFGhw2YPzNy8XgVE1qPN2RBwt6TfjhCeYkBovUukPzayS8whwZjn6",
  "key15": "5MDj1B2E9EdWvv7NXPgyRdH1sws1uC2Ci8wdYe31qRggfRtAK5EAkfvxm15CzpKkoS1oENmCnFXaDke82YrBJEo4",
  "key16": "4dzARRftXvALmoTMoeirrvkF15s4bUH14FueimFQjuw2kn3WLS87aEgbBszuyTvLY6YqDYai57j4AraACrrNomSj",
  "key17": "3gaWnmw999Y9cWyy4VEt3XEByc7LijdPoDCz2NkAHtbDYXxrve1hvVktGUxcHAogmXKrqfpHpV6BykAezeHzNKMe",
  "key18": "4HhkuXgBSnd7JU6aBpidZh89WSxR7ix2cMxuWpL9ZKAKeVEx9u56U2eX1gxrNS8vxK63hL3gUWZPCrSLDxP7ud9m",
  "key19": "4wvncmWsi9amWWnmvakRNFuGVqf6GcmT28UmZ46sLuVmNJFpEyhx1fhitjJyrD8T1ktSsMypFH4JCBL1aXu14gLX",
  "key20": "5cF9fzA8exV9aCf8Z21DLJGeVH2uFZLAANfwucMtJs8a7ySGTeZWXAKip5No8xD45AYKQV4xtfgg4T87YuxfVLeX",
  "key21": "2nsFSVVN3iQfLsg4kub85GHALPy2P9Zcy3V9zBULjm5LD35VpNCnfYVfkdKdoBX8QQx3mZrB97P3K11UNhReV2qW",
  "key22": "PTE1FtbMLymtJBybe1unWuURVG7yzxVwQ8h8R5xLSrNwhWXRTe3G1quzrq6jKFoSTJbxCDYifpCkvdn9wUNjgGQ",
  "key23": "3qkpmYVkSXqzHcGsx8tL3ZGZSqP7sJkfWxrYcUtKTQaQsCxxN4TdTnhqjpLJKEiNogkq86fzfBV6SkngTCPt4KwC",
  "key24": "z2bqvWFrS26QzQp9TrXtMhNFaapbjtsMaFS9jmt5YCGMYLBbmojRFnADBkUFmoST2QVxCjhKuXHQp5vLLSDKXcn",
  "key25": "229MzUV4vKJCqD4HsgbWhP4c75MoZNNLn5tNCpuVMYYc6KtKKRUJkutZkHnSSg2yQ9bBzVv6Ngc9Sj2LJ5t6YQwf",
  "key26": "2kVx5SWWrshP3fqSLVurg4CLBWnDUtS5SzzcAt1MYvZEdBvtQhPPM68VLMwnrRQr2EtoXtAmsK63utxX99e41iG4",
  "key27": "4iGyVUvYhPDi7fEoZC9vRmzpp4go73GdcBEaT9TrHxe5gpQM6SQE2cxni42sdKPf2gJiJfYBMwAm5v4eaBAghdUr",
  "key28": "3oSj9Le2xsUiDiuCrZjz1bNBbmPxVamjYcTayGMDw1ne78p6jFvv8Nu4mMXNzNbQ5nhvVecAxF2TFK3Q8Z5J1eKm",
  "key29": "4eupWRvNa4tpuMLBQgp76Y65S4bNbMt5PBD5fpoAFZprWTaUR3XdhxJXRX4WeRkN7rV1AQJYgPm61Kf7B6S4JjTC",
  "key30": "59AVvg46QaVfpu2BLQQnrGpCe8FJNxXgF8fVgNdgrV8BPBUc3TZUdWxaNKHC7ZR9Qu2EFWQ4k7XMRxGSroL8LNoV",
  "key31": "EtBovAbLrosJCfDF78Y7XJPs5MJ8r2S8w7khM17Ua8DVW2wdF5SNvcVTxU6ApktiwwwfmNnmSKdUY9TdZ2KjedE",
  "key32": "EtNMDbkEsPLapCmW4GmGC5LRWLZcsn54Rk64gZ1yY2ideaBQLJrnzoRTGz8kGCKTQc8Z9dM3yPZexnCWqgLQK2T",
  "key33": "FQ1RiHpp5h6snZCDtSS8R1i6h1HaePmDjEJH5398Dy75AQYHTpY52cMdXj7i6sxLpHLw617BnMSX2qQk7cMUZ1o",
  "key34": "3PoVYVWbMQyWV4nWHArJEpY37cJVTcjkuWPkBSwPNM9XcockPGak325WNezwfoaQRGUhh36NW8JzzECtJFea7HNi",
  "key35": "AcUaqiwErhamkkhsLNBaSv4GiE4KFJofz5uiXWp918knnnamvA9KHYajb3B6REdRzgRivZbywVmJ28ceDMy2SGG",
  "key36": "3TnNxC2Q9kdods4dqxUbPUD1GfRvHz6DpAPcBBorU3KCDXAzqS1nbziKPZmeQPvm2aaYVaxyLhQMsdjmkden4xZH",
  "key37": "321f1Fb9biYeHpaNLWxmfrc9ugKaJJru6Qd7SKWW9mixfpN2tDyiQPkMrhHk1QaJpJiAue7y2wBJda7M4kDM9Gas",
  "key38": "5jF9zhP8fVszGveHvsF6nKEsNPSboiQwdpbirr4Lv7efr6se19z7WBhTocou2qVyhbn1Pznr7DYzVoBwDAoCkAcE",
  "key39": "5tPPBJwRmiJwyXSjjD2cZ7uq4E3Wd24w4tJPbW9CdS7r4oPdvyT3FoFoYEKuEorDw7JokLCcPjTpkoDYQ46e2cax",
  "key40": "36a5w5b1byaKuALYgfLiosnfRhMFWSWhzGswbz4J32tigyxdYy33sepSCWgrf94PcrxpVQmFapSKFSRzPiYeqMxy",
  "key41": "5VUCw1WKzTYQfzbazMPxnZajZTPHtce231BBz234yEbxud6MhVoRq8g7eBjvemuSxZPup2V8NxR2ghpWPgermx7",
  "key42": "3poc2k2TYrwocMKWGyULx2YJjjVKmnQWJwmsnEGLqCiUxnkcRMk3yp1CDQBNm8yq9Qr7mVn5g9KrfvNbYdKUpGoL"
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
