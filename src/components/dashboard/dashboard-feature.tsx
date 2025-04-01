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
    "5jKo7GW26g8AbWkUW3iAR23dFi5Wqk1zgYKsKL9bjhwkHvoLVxBZVVLd6cdgjLh5qV3NMn7wByVXM1UTQGKvKnAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yNJJmkTggzYUZ3qXxtVJRFWLq2UEmexuVX2ux6BKyHUaQC1JUgbWrS3cM7eCmK9Lwh1P5ePeYQsnTJhBjKmdagJ",
  "key1": "3QurFgwo7HX1w5hLWEnp4o1FcKuQTVqt2QFVJj3YNvPfYg4pUBtNrHW7ghfRpwjrxpFH1DTMLV5N8CPCaeRiJ9sc",
  "key2": "5t8QGBv9o8ZGDvBNkMJUvnkqAJPNJf3rjXMU4jiSb4JqeEG5yXSV1c6ESfAcKbj91pdbTQhUzMnFFH4af5Vg6A4q",
  "key3": "5C3mHAc8XKayFRWKDhPNR9mAvNUYyuHroz75V352uHeYdWp3795vFasUdA5rDJJJ7UJxfQ9YLpH7aQfXvmNVhKZF",
  "key4": "31FP4gaL6tcLxws4VbNh5xSEYxheuyLBWsiuxmiyRoPashPxcinHW7cB4qMT1ZyHi6QMdvCJRGQPNf53mH8rubtA",
  "key5": "4FvHt96CB3wMWypXAKaocwYkouNViXZrPubagPirKzLYxQzgBbMqBbehYGzjMnDFfjWWsQ4E3k35jisWaFWi48Lh",
  "key6": "9E5beA7kGmqUbtAzTp8mjyfXDbtJiTrrwvFTrf27T4CBE8g67hE3gbtd2rv1RuGgXnMyLKqaajRjYG8grWeMGKh",
  "key7": "4pE235sNjjqxAzgoY4wCfztiTatxq5uaXzwzJsK3ZWxSHWgmR8F9HKiLEEXnYNXPRPAGzcAEm8y9EgjJnHWPfT6d",
  "key8": "5Rj3PprbxnmaEhGNZ38ahRUEf8NY8GJoMSg4MkBPSqfg5vtmTsCJrL9Px7AgKefSPQan9aPaT96WRQ3BYBCzNxHQ",
  "key9": "4iFKwhxxoQdWNXae7vfVfC2vDyDVVUSRGut22cKQkMqMqMDkkJVsLRmeMBa2gTFJhAAL8fMBe5X87jCYUNEAKV64",
  "key10": "5NrmvzudYEBUhv9U2Y3RCLEGeog1cZd78kWPLCUK4LdypeUHnDbeNoZMLVxufXK4xXPx9BCzp8bLeJbmG5qi4ayS",
  "key11": "5pro82SxwwoCJ9CsETj7X4N5foqLYCQqp5MUWrmq6qtDE2mPaYeby1AXuFrnQvmdRaFkCERqzgbG2bsME7xGECtW",
  "key12": "5vmywMVKBYX4wZjQhwoMURa96Kzw38a6y1JDUn1x5cxxYRH5rGY2yi2Tgn3N1FP2dBpY18GNTgkDTvsTuvaC3j9T",
  "key13": "2pQ4VJy1iTKkRkguTVhw4FVQieJZAYcBWfgQjRbjZJhX1WBzwxVxHgsgJMg5UzvkEdDfKxvAYzb36BxanLPGT5tf",
  "key14": "34tAcmjk5MuY4zMy9BAaF6dkRMSuPPDF9kNZbHf98pkaLHbiBxNWHtFuARcCk8TZddDwD7zoTchJF8j8tv6JkV4M",
  "key15": "2as1RTDJnjCKxnooZeas2w86HYKmzQoKRF6GekGephCu7HfFvdaeH3zGc5Xgs5KehAakzPnvTqqHwfeyDsgfqKGr",
  "key16": "2F3j829qT7C8ynPZgTMEXyXSGnWtJjH5hbshPFQxohRRHmWCnft2dYdyRMFB3sNMLXt1Z1iqcRZNDHCapNDgVRr",
  "key17": "37trxAd5wxWaPuMcgSPZuRfHRrpt16X9srCqAvY244AyTTSQwYYNCtjZsPLNeNTHvaEShoUErxP16939Ffbgqofj",
  "key18": "53r7tfp6W3m1e22WCbnbFLf6Y6NPwZJCmHr2gBo799G7xS8Kv47A46JFNVWm6V96XMcoknzQAizM992HV1z5st8A",
  "key19": "3fxHQZfBwYgaoozbfJnEW6wEPEH1PXuJifzSMKWUjUoXCggbtst9Rno6ULivz2Vf8UdK1QN1KND6R39yZXSeYNC",
  "key20": "2xr3gjgUCgyeNK8RH2Vuqvsohzowxag6ABzDrUdFufm72SzKTxMoNzQXapsi8t2TcmM3TAymGRxTyeYJZe9Ar7ri",
  "key21": "5Q67QJZ4CcyvZ9UHPMGqFLk3k8WcFoxXtjTqUTRwMDmVU4Vk9gT1us6ZcKq6Sp7fvNNrdEAWneY1A2u6YbRPzj6T",
  "key22": "2GVDJrxRBfd2pDAdbQXYFL8Kd7zxDPtsJztbjsf7cNCRkKykydPGXcuyGLTChk2YYhzCZPqZGur4B41qDsUGVWVf",
  "key23": "63y3LAb8zfb9GtZVGELmXoLTZWg3GPfmr3dTkXpKiPNmxxkADgKZgnHkZ4bWwDG1ZdFefPssYugfhKmuUBMDgV1S",
  "key24": "5VdctMRJvTSrZg6os4KL81s7CSt69K4AvEXN7bNYHewNSVcoG2SQ68oHur2Vc69xS5rPGnCVCpwAcFHCrd5oTEDq",
  "key25": "65eMpRryAzgoL3Dtv1ddFVcZ6gQReW8Z6QH5NQHytqDtkoybkBM9hjmg8FfZWrdqn4ws915exEcbBGNhoboxRLFP",
  "key26": "2cZgFVhHXtkzdffA691tnkkicTAjZABMGHYm86ibx4xEu6QENtjNYvFCrCB4tMCxEHP9FxpLw2J5msS7F5nuUuA5",
  "key27": "25ZSvpQYUxPsgt57cGLyPcqQ5DceYB4W8TwYGns6evxRrKGLcsNDzpP5tbseN5Sc4rp8eSkVo8NQtbspVwfUFuNi",
  "key28": "JSkozsMEtWeUfHGWGfwEZGxm4x4HFY5oF4zUi6w1Sp94EUkKxjNiC34gso8x5em4Lpab2zqS7grHAVdBTKzjYwH",
  "key29": "2UA18HwYibgqxXgnzJGsLSUdPhEDaEmxBBPaBuzi1Q9ATkjfu6SAUKy9t7dDmZPkZNm5q49AVYuLdTxANYPH3ute",
  "key30": "3xSVnV4RnpenQqaAVWc2fP8Uz3BxToEQ33HB62HLLn8Jj247h4ma6YPwThKZATUEToV7vYeagvXnNquSEm6XtmEb",
  "key31": "4iNkQ5FUXw2uVZsXfuYwpovNqmMWFYwak23WeVtMUBBswf4j4qYkZdv4bQBqfYaauvjHTdAQzXYxmtpdWiLDgtvX",
  "key32": "5zVnuAp8PJVNVUTxpuNFgfSKfHFiYBk6aaUhLqXoadQ2qTG9it1Jqb99xfphfYEqvwh3uHtkbGexgBScnJSy1yDM",
  "key33": "5ZDmvWasuKnQ3TRcubaxuYMS9MPsrwqe9EWw5Gn5N6XeVZAN6tMNGtBqVbic5DG9eqyxMXfV4SU8agBQmBryxwjN",
  "key34": "44XeT3SEFv3hCGGPdjUdohCbhyiVMBChmfmUAsox1KiLnELKgyUXYn1MoyKHVK2rYGQjUGxVS9vN34d9QhcJ33SP",
  "key35": "61Y89GgXPrNYLdJVp7YhQT3emruVvQsfFZQgadsyLjieFKcxUyMRJKEbtWqxtYdTi3mprkb4A7s1pkdHQRNA4zfp",
  "key36": "a9AwJZxgbkCmWZgQLpVSEjNk3Fg3qMWZHgv1oRY6ddQPcSusy57wUYc7zfTRwUEMEEH8gAQvxDJHBDXkR3F7sJZ",
  "key37": "gmM1aWcpaX1cBCRPFV3dj2R9dC5kKFwTd23AZ3WNnTYH6dSGfbHhT79FmibhTsDmXNPXdGTQssEh5Wg31sZPDbt",
  "key38": "31r1JJbNYmcMuc7BGycJQKtRHu1ViTVw8y6EjDvjkkkAT34bSSAmvdWqYpnNzhkfQfNumrp7HKY6c7NhqKYWvTKN",
  "key39": "4MykVhjhTfrp1nqnMhwzqifgusAZXQsdobZuPAmTD51GTpDgMFc38eBNtnbnv3afGQkFg7DtfiTvajMQRfyWCtbB",
  "key40": "64mkaaaMdXZvHD3K18CUXnX8ycTdUW6wAE5JJMcMiNNHmttvkS6crEbY7gydcnJ7cafo4yWptX9E5A4BtSU7GMWU",
  "key41": "22PEiRC8oU4G5Uy8UdnuworxLxvtX1TdUXJSSKpAvm3NrzKwPrm6VNHV2bt5SHzfL8E68yWKyAQXGZPQuc5sNmhN",
  "key42": "2XJv6pNLscofu5QgB3ADVu67vDPCNJZLeFrcpPZ1QrnorkjEMiVgMWMSJ5ajm6E9b2oBgPHr3uyNRHN9VWBvpzpy",
  "key43": "3r6T9F5cA2H6gazq6ZtTPXJGMVm9W1YR62XKP2FnWcRaUtJv3HQrDVeZKDZZ1nUTv6SzE6rmxL2YZ9N9a3fdxU3k",
  "key44": "5rnRsco9btmZKeUZXvyYR464mXh2bxpLcnotymAvhvhM6peh4gSZw4qfdQ7NNhQT7wwtUWh3yzSCt28MkZ7Fveev",
  "key45": "2Xj73K5cyzw91njqppqBjzx9zEhzkiGY6uf7TUcrQHPpqd3d7wo4keT8Uf1r2j98ZxNUdQAyjXBjVHNRYWZZVPXq",
  "key46": "2hiaQCTyKSPB1LYy8oELqsxY1MxUsUv38Sm2v4jgWaCq7zCwYtqjKJGMmog2GPoYhoSVd55cb2BnGXno3teq8z5P",
  "key47": "2HAU8jyxsdGLWzJqWNgq3rVThc4jysDJgTYqchhew94rwkJ5xLX77GPnLrCoUaNkR5LZZhApcJyGNjpnYAsHtddy",
  "key48": "44zpSLqT1Wcu4iRSUY6XVATwanSsRpoDSXrnxbdadd4BZuhZwcoVz2msLs1D8jnAWtngYcq9yPoxws3kmRfK7YKe",
  "key49": "2Gz9YPCLnYLoidAGvRHx7P4Vj5JPpBDZfpNa6hGL31HouFX6whj96GkzUghDAgxbQE2VxMAP4pXUaP5cdHct3qY8"
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
