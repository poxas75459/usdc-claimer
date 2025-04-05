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
    "2hNDnisaqkc4NLjzKzJXnbmovy3VtbyegVApqvGTMgekc3hQViKX6zawZoRriWTp4tui4uxRG1Y1dwzx9RfNxysh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xChJYTRgaxpgTAgHb237iAkCAYBUYY4QBqhczzwLCsqUyuXn2ZeKHLCV9RVvbDF1XALYC8bitYihTPnK1mzK74D",
  "key1": "2TCaJE82Hzrc1YXyV2Lo9xUBqEwJ4FrFYtgZ5dtCzdvUnDtogjgegTeMajLCbUHP4Z51f9gD5fXnYpJcHK4UtfJj",
  "key2": "VnVB3ESjtnMkNfKLBz9xr8C2aLXa7aeDSPATq5uqgtVBMXYDVU8Dr9Hc6YKPFyaMjnLBhf7B8ps9fgj9j8yFtVq",
  "key3": "TzWhyiwNjHLKqzKzYwQCMExo7ECbKdSxPav7XnKhwGVBicMMvdaPeuzd3wCYXZ5js6L5onh5cYbaf2ywrgMAYkR",
  "key4": "5TMS9w9bddxAY9ufYiCkgdDK7u9t88ULoWxNrWmA37zsATDPbds85GDWbrp8AdHsrn6KFiUczKAKz5FswkYL6cEp",
  "key5": "3VJpnh3QqtXiMN2dsxQB8KFbZWuKpXEN5mXBh37UWMQ6i9vewLAsf7vwq3yoYkAXEaARNJTZSm856tNxwX7JBzh9",
  "key6": "5yuHUAfhvNBTjovgGv45EzerncQz7cvoVY38L7cq7SJUsa3hWtuveiypVW7d2KCywR4ZWogedudkoeEb2u4LooCt",
  "key7": "tLEmzD2kdJYJnnunJWRkaKywWCzjnPnxWkbKfcYTUhpwF8bk56x92Xjvu8SFf8H91ZLMPbJWUEkRk9Q4DJuTVto",
  "key8": "4FHMSjRuoM94GLdE1P6ZEbXDEV8pN837D4fj76vCL8n8LtsUY4twrMoqWyFfbjY6kbxM7XSNKAmEu14w7F22YpSg",
  "key9": "oUWxxmQmqrBTxVYzc9GaahP6QgDpqUun1d5EFcD8VS1aX3uzUDfENEAyVtLmAAJeXjkE8A86q9f6LB1ypZukFC6",
  "key10": "2zKaS64Uh9is2EvR315phX9sJmx45ita2uRhieMcPoVYtJtLn5j1mDgX6mjwBnE9PUGDEZ3UBW76FNojgPy4RVMN",
  "key11": "5K4DN7Pf9GC8WjTCz5aNgkhnLGm6p9LBs5xyK5JbcsSE6xx9XmfXR7ZLm76hEdSnaxH6x8SpQ7ei6HjfXZVzCnq",
  "key12": "511rrkoRMEyUYh6nh49RZ2KPuvS2CkP8C6hn2Z947afUxaJTAQASmwTFxV55rPzqgRG7tZxKNNXfDpHasAF6zAYd",
  "key13": "44ddymF5NoYf4gNQWU9EqvHr2azSBzGX6mhXh7EBBL7gddgpt3soU9298APQ737juHRR3N1SQAVCqw7Bikoa1yMy",
  "key14": "51FGDNtpgC543js3jHm41i6HGvv32t8X5fADowM8w7DfV1DFmh1bhbMssKLtkw9P99p4uRaua76M3Ax5xMZqbxzt",
  "key15": "3TFUPrSDwP2eJ6i91KnnGpeew2U5gMSeTJrKoNzfiDMnZBkSed3WAF931nT9tqccUv73GohVMz5pvbFLsaK26jrm",
  "key16": "C5c6CdhcfJcfcp6zpWRs2Ad5Tt9HNvnvyhM2R4GqjG547ccuqk2i5k1HxZBkrx6xu7dUf43v5KVPQcoqdqoyaiz",
  "key17": "3VYpkNvHEDWxgGXMttrZx6o6ABUcxAQEb3BELFWJBXKcG1jDfavtwbtsGTAaqxKMum2YEbZjTNHutY7W59SpKQgU",
  "key18": "3ydcV1fjjfUjVgNwC7Ys1f2kCPMHAHVKpEY2tJbVVVx8XYju7SgCECUtFhr3qz2AfVJ45tRVnMKRNZv99hVyYAg7",
  "key19": "3boU17ARtLEEuxnmG3edr9uq5FzZmbYPopa9nehwNdZmcPM2QjSsQXnuPeeLR6yJ12768vkVkFT231nviKkV1SrV",
  "key20": "67HiuHhUgyvZe3fA3CWPRanxev17Wk4dUHkjBVM5V5YU9yYkGMivSGswGLBiitsXkZVqf62DzpDBnj27XnNVuDwL",
  "key21": "3PBgqNXaii9FLQhQz9AuGWtHuVao4soTQW6pHyDur3nrGjSFhKcbqn6UQ72QNj7qLjC5LHnjfPmageRUudTuh5zC",
  "key22": "21CuktKhXuwQXVS4aDXipEXARc9LaErxec9hfRHRiGR1qnegM2W5oBrEQPnsRUtBeyN8drKqkgvUdda29VviCfjK",
  "key23": "5TkDTRd945NJpXGPXYKbavccXCxMTx4hip6coAED7yup6bSFDAz6nRz2MV1aipKjtYqG9bGPNcZ3B9A8anCR6Wv7",
  "key24": "5ujaT5Dqcr2RgVdpNGHHAgfF36jewdfKT7CtskcSLqnra9tsAPwmdsAd24Av3yjgSeZquFRV66jLseJW3GDM9ZhX",
  "key25": "2RXU4XceKiDST13WZasq5HtnMhhBksqaJis2cXMs1fDAnNvbHiWz1YWcmJAvz3THZ2kbBk3hwvRqBBtt4BsuxSEF",
  "key26": "5cAPiiRGpHhbcXnarwaKpE7zhx6BPLHgfo3AFWfYDR6jsQ5nSykudCJLrW6E4N885MmZ4s6wuvubcNnFbTo7N5wN",
  "key27": "3HA8Fm5dvJDjeodb5HFqtMvuJFUdqmYtrqYyGyVceMZ3nvGpo1CNvqjnZGtksqV29yRwNXkGmKciX5rEx8vedNzc",
  "key28": "2c9CyeH9aDzncmtRcbYRsi5brB1oTQG53cXBgEyJn9wsJcV4emgRYVULyTAGoutD8fg5joruLbrgEek1x3VDKabW",
  "key29": "9vrU8pLc2LJC7m6xXK5AeefynQGXoLkyGmzaeeLviPZannnNsvVKGskfhEemGCsNSNdFhF3nyrzRdgnrpdb4RMp",
  "key30": "5Mc3jdFEfZzVySg6SdSZLK9gvZX12QN8dkU6jWy86QySZH1dkAzrGo6VqZPdE4qAJUebxs2XCU5mfKHUwoLyysu5",
  "key31": "5fhv4Lq4bpAcTSe5nrDbX2ujx9wmP6aMe8H5hPmG7PdqZfhjQoYRTecSD4PLvAZRmu2bu8VDeLgLq6Jad5adnWSo",
  "key32": "5r1b3SqNPPyVo2TetEamxANxxPecbdctoLdgpqDKGL2QKfCzj7nQpp9vRisvSA2LZ77Zxu6KokrM9dZJ1XrWJ4pE",
  "key33": "3ZenqnFcsLChB2mrSKuTEAEdPuZAstBaFJ7GVhDhuAyDSF1VmBjdyaXEazvP25DQ65iqCQkWkMyJPL4x9PpMjLX9",
  "key34": "55bKcZjRnpt2L1Ne72tp4d5camt3kQLkbEYUxcFWxkdMpp7ojEy96mSDoqjTHUbe6WM4BVZ7R9fq9QXPxp7nse2H",
  "key35": "cE6MCkgYv6RG7D4mYTgCdXLr5Y84Jy7PGh5ZKdHj4zw4btKUTyFGcHSayEZsv7ypD4KsGjW46WpcpNdPfhNPUE4",
  "key36": "4Q7xKNgWmZj6k5jGCu77obWh4js6xs64shZ5fbWiTiv1p9KwZm5QivE8bcGja9e1cpLjNkp7sHVRkDRKYenXYwze",
  "key37": "4VV2vo13HLgT4PNEHzYrWzhiRundbQbcHoUanFzDP9qs2QcFUVhh8sBbBgjk5S4WfTUHpmtdwgaUWfWbGJFYzGKF",
  "key38": "2auVn7pK3sZN5e9AmWWjdtgVTCjaCwAk3mQir5jB7KrEHew5CdZ81vZhzJVrCiE18fWWWE6K5z2gKDafmfRVcWat",
  "key39": "2eAHj8BPXUCgg1DWt3zPRyr57vkibcryWca6fM2EJdpxPySJuQMytCuuegJKoLCZ736jkBvLRHqDCmErTCW7kWSg",
  "key40": "4w7XDpiDsMGKdu6dNnxmhMzBNw8jE9JtiBLkjrg65TxX6tQFyNoTw6eZ179aR6wb93DcoFFxy9gpreVdGKcPyy9V",
  "key41": "5gyLzycnBXZm4Q4zxL5MJXoQmxeaCNRR7JeJ5Fp6r8QfJfyGVzJ2uamZNQgaYNnGzsX9sKuVR2EckY8WG1zXKkfS",
  "key42": "2opy14dyts2g7QzaaeMd9yDX78PE9NnQLYD4vyH6GsmPxpyLBJjf8xDyJCvHt6HwsVbr9Cea8NYQeSM3uQQ3AM6b"
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
