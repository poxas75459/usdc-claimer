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
    "41kQNAfyqwqoSuGdt59WZ9GRjZqdNA94TLiStoUvxa7FMXfsVQ7gPnasncb48QCxEhfKyMvvCZXEsxXNzrW2WtBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V32hapJeK7V8pQ1yRaQmwAzJbczST87H41P471fA9pcCorZX3PtzvrVegZQh8Wc1oFCdWNYWMCwnLhuEinSub5J",
  "key1": "5ofPAYGGeiL8cxm5DaaFgtEH15bnaxsHufqi3d7TDterxQKyVUhzzyFXNAV8TRr1bXdvrdRzfhQBSGYcTvL6tSfp",
  "key2": "42LEqpZgCggaHHCcnTEVdVHUb2ynXxFkmQi2z6gaRC92cRvjqVsPHGJpjhuvwq7p787YuHDzzcmaxWCXuhNPxirv",
  "key3": "4rgu19gp5bPqhxYKVGiyia5wG3KEBuPSqZcCNEf3fPdop6uX3nffyshYieGZJapRCiw8wC5bYxo93Wqw4KgLYppV",
  "key4": "3XGgCdgFCGLKkunPtLtkXyP47DYgtPUqAfV6QCb8Zxj9Mh7aycYC96vaBVNam86YXenFRDLTywCZMWK2sw8izsGj",
  "key5": "3daZni9eaMc2Bwnk3RgbyZy8eWL2sNYwgNKg6Phw2hg1yfHJcEHLjVKwFdq72GNLjVQTM92aBMjLY5yZUmUpzefy",
  "key6": "8KyaxV6ECGCnZfxoT54EFcbbVScuFPrgr1U1r4LMxhN71gaadYcU6qTbN9i7uBdp7qRriqU8tmdfJXmJmHEqH12",
  "key7": "2UM1wt53GSqAGKL2czZwA7EviuAhLi9W5WBk8Qn5XbzP8wTzU3pVzRKj1g1uNiGG4c1m2yvjbmnwZfSL1GDxQX39",
  "key8": "3LL597TjdRCdtNgabMxsYxvGffC8DkeL5nJNp7FKyhgFwA2tefep9BBsXVPv7kEmbmU1DwtP44m1so3yUaAHNwEn",
  "key9": "3C8TTM2zvc2jv2fQoMzXPtmiXPJFJ8ZGqdXp8uyX2aMyuDeCWy8Wt2vDWS8VpmsmC5jUzHJNRjXCjJWB85FJLwd8",
  "key10": "5sF8AwzQpWct8BgshrArtMSufx3Yc3V4QrkgoGHLUAYr24aEmsQ68FcaSQE5k9M3QwB1Q1Ffum7hgQvTNouJ26fu",
  "key11": "3BkiAN8eXCbgtJKhApRbo4vNJ6SddChLd7zMndtXTtDzDeUwiKBUnwkn5A9XC2L1nCvE2mHkbdjbBmmNNqBQKS6v",
  "key12": "5kw4i7p1vKUWomyx8KeViiGopiCa6L2GyUV9phbZGXY5PxnECyQQeF1QHYSfdgYirg7DhWyJNgGuFcHfdL8Uou5U",
  "key13": "gFdXh2XK9w7FZz4KeP5GjxgnXP3hgqRuQSWDTZdqotUowsaGwNUL4wGsqmWPFxUsqdcdqheiUtUGQQu7uhQdzUx",
  "key14": "2ovCiHDuH1k6MLfgzsp1Ap6u5CZDfzobHPVbH142K6AbVCFcNaFLpaVuGNWhp2dNoi3Qoeh5gL57AySXSunweVBt",
  "key15": "59uRwJDJt1aVk4PurpH4uvZwAAeTz9C6UfVtE8mSa4YFV8fR3Hzac7KfF6i7MJyotPHdAGbW8BBMqTReo7EjuDnx",
  "key16": "4CcznvagG2qEzHYSQWtWgutoCProPtLaAb556UkyHoevF6sGYf8ZkgainAmpgFbvH5J9dAYmrEMJ6S8YxTY3kBxL",
  "key17": "3dUTxKtPBM7qXij2gMMSeCsWNcWYEJEBQPY68bQNfgYDTkteBUgg8F8qWcbZMZUKe2S6MD5oWWocE6So4cJFvbgv",
  "key18": "5nHh6PmuckKqn7p1xQsZ4XJSFtajmJ2hnrTf23SyzH1ZKrTeGnsTnLDtfMF1aeeCrRKn98e9jwMpX78L1krXVRnF",
  "key19": "3CJRnNNCdBzEpnk3TMVMCtazP6iHWAP9jWDPqJYfQGoafNKEy6m8M5rTM1eeLXrfzZXmChHpRH1b6DQinx7xbdk",
  "key20": "5aQ59AoVA6jWoqsJA1L3oTMGiiHpKNGj4CkVihL2g7L1WB8sMo4AYWHe1fRV6eWM2D6PcVK14qrjrG8viCH5f3tx",
  "key21": "43X684dk9uEMBtMca7KczNiVdQzkp8kikD7zgP1hnJ8TBHgmz5HjhsdsmPv5xnTtyu5z9tPxXGsSr1ETntQSHrVW",
  "key22": "22rEyJJMeowbTeMAbG4Bb4gx9bTPypfLFfySvcaRGGjUnn6X6T6uLPVcTjgYryQvSmkxcCBqxWunLo1XxRPjVjdq",
  "key23": "2xS7me6axZpxLxWrZsi1GmENf1Lk1sv7hnBGFo8YwH3gM7SQstf7ZeUn4gBRsVTpe1KJ9Vr3TvXpPndm8KDFZyWg",
  "key24": "JKZXoFECPazh8kbJc7PaVyY9NAv1rejEgwUW2Ee4LxpGaieZMWVp4UDvmVChJqh5QVfuGTWd7LSSLrsVWJHg9cd",
  "key25": "5qjzDb6bcFpLiEWiV3Tik2RFmhjvFTGGAn53VF6cKbyWrUABX4bXtwN6JgfUdWnyZMuLmBgctimJ183T5gormnJs",
  "key26": "38sGQgt6LTJsPfSwBXPGBBfW4t7uWbkCB8AbwX2bVtyuH2dkkyrZQiJVPaLbf9fsTjt5YdAZK3Dj5o2A6ThxPSbW",
  "key27": "4Svswobcik5x8gWoREKkdTM5hntikhLRoz8ibHTwYTnKJEH3XNCShsPf7W9ayD3AfXbqCNrrDYmjX3UWniCVYsNG",
  "key28": "5rhtpMUowCYigh9F2ACNBrRW9SBZ8jB2zSkVtJkVhq88s2QSiLQv8v8KsUPyFXeu3syNiRcvxibcmaUT1KeXMtmK",
  "key29": "34WLLojgsRSywKf2eskRPUduFSdNA2vemEoDjuv3pvAcX4Z35Dne66c2whzViR8K2DYZRsbRqsy891CcVMf14VNg",
  "key30": "4nE5yfvr5f1icu8Ap2vYCExftJhcVB1Dgz3koCrS1yW1Lw7XprowogKfmwvjmWt5skJKR3kikJLBLdTUZsRczMJu",
  "key31": "3V5ygVNKretFWqQXZ6kXN9ZEt6RHGywa9xtXKgGa8U1N3dfPo9dCXEKGdbxRcwUg7k2aUe19qAT9r46fc7EfCEBX",
  "key32": "5wX2GecYkd9oAvTUQLzV9MK1zsqaN9nxRFFSTi8DmAqnu7KqKbZisSifJXLiaXzRT1tQACTHDs59vPXxUozrbiw8",
  "key33": "45s4iiZ9TAaSSWfm5kKAG7WYGf71Y8z6yeUrwT8whLCYK6dFQgHtVCRo3qiX9D57xc9piQ9MLAjCNMpcVkRKrygG",
  "key34": "5FbUL7oTVvwXLQM1uAdDMY91sW9rxf5Hp7ZzkXQ4G8hDYvqY27GZE8J98X533Ui2jbPqWnyofNagLng8uGFBNxXz",
  "key35": "21exiaoN16fNPMKu7sFbRF1BzvLeVXCzV7AkmQDcnBLAjYsJsWooZiNnW6J8xGjt26iDdyKLtJkyAXHZDu7RDPUa",
  "key36": "5VxodjHPZqLvgYLbZaEz9HRpSyrF2taP8k2VCLhUER3MAJuKmfGgvbw5pHqm1Aoo3M7uS3HsuhhiA2QRP1SYyci",
  "key37": "4jN836n5UzJgzrkwbDK4covHR23Zbg6ux39Xsgt32S3v4vbB687Aen66fJWiXLUu66KbYtKBG2mZrGKqiWDvKf5w",
  "key38": "UnAExGKVAeHk4S2NYh38RntmixZcfXBvUks5iu8B316QajP65CbEtY7EZsnBfXmDbGWMCb69jowPRzZWriv343Y",
  "key39": "3ZP5fFqzTAFDbDREn2hbPUnHP2eD9R5smNE3GgQkCRZ1YaiNprn2r6dHbHz73CbVV7KmmBwb7odr4syz6ukRfiUd",
  "key40": "18xx8PooWetfCcySyxgMR1qncPrNmeuBGHLwBNKzwvVdYn5oryEJ2H8oKMUfTNyQwqes9sNcyNGXGh4ri2hqLdD",
  "key41": "2esvUomQJfJ3P7ApnfYp2hVPwK6rCHujuEHFXz8aUhBQ8GAQ5exmT62AUFWZxYqarsGHDBkPoAyZdN6tQXuhkmEf",
  "key42": "2jJ3TRovuaKna3iULcwv5i8CCghU19iqtCbxkAcMDr2DQSLY3WMZVMjuhUM6vWc4CwCAzsY1jbUJQ6nPUH8ojBnR",
  "key43": "3bn1mKyn1cgs7Tfw7zVCGexpLPgsDdtU3xeeGY6NuHG9nM8Xh8iitPusFHVYSeyvxtHewmEt5Mc4FB5daojmMdvN",
  "key44": "3wxfgN5gB9vkRA8qx5BNGRNUxVzU6FPToW4kFNkAQysqwnTUAmAhcVfHrR742hUvHjzDvwWA1L5rryJAaeo9DVAR",
  "key45": "zCzjE2Dbjj5fGsxn57YS9cYaY5zHSXrrbPbp1nE9Gn3sMCmLg7Vj2EZE3Lr7XYMbqcv6x92zZATJmLC2sxsY8TQ",
  "key46": "CTmHGfbs5G5TaxFF8irLLyY2gFXjioNLQi6Da6jf3RdeBc2yHHbShjAN2AmMAC4R5yP6Vmq411aDkXCr6XdxDjc",
  "key47": "3MVK44NVq4uXtFihRTWtCKwCZ18VtvmsfmKfgxMrkhbQqXao8EdLAUT1GUmvczSL6fzQT1QjcMJbu8WsXGZNV1sK",
  "key48": "2Eg1n3yzUmmfSYX36NLrTYi6228cZymvsTendvoYi8Z1Wc5ACP83ZQbnc9WFUoazchPe33fJJbNwg4BuEwjVMmDw"
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
