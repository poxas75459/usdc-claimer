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
    "2CXjSawSyoaAViEKmrSu166PfeFtVby3otqc6iMj3P2756W444BjpVGA8k67ePbNH3imKzLDu1qqH9ZwFXAHAx3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NdGsZaHQJH5SNtPAVoyFSqpV4UfZVwy8v7vd9N37YCdaRDkqVj3gorhTtepWasr5pywwUzunXcZrBWV8oSmGesd",
  "key1": "4jw3CnoPrPKLsuY4ebvDo52C5iVtqWLKXjHPXmdfTWnQ7EayVSHzkVyujirNQfSFUTmgWKU42dF63HXNwiT8kc1z",
  "key2": "2igzPVtPMz67yFSquv42FhVEwoZjH1mvDKgwDFBUxsRkE6XxhiFgiF9aS39dk2WRUDvwjyrV5J173CaxevYWTCcp",
  "key3": "61WpDnAJpPiuHKcJLiL6chF2Ym4hArNm1gQK5pG6S44xT2rK2Fq7fbzDqdN6jtef3u8182f1F3hVMhPugi618NGR",
  "key4": "3KUTD1Ke2YasJiL8cDzEZpjxYwyPgeD6kSy3qTt43ZGFHkJCYVqWj8ySKTb9rSb3aRkeNg9iqRZ8TFWmR3hbGxGk",
  "key5": "2PTxWRtca12EbwEA6yCuAtiZxTGj4vg33KW8Po1UkKLyLHV4FZ88uqCkHe8w6qovMSZmU7QoDtx2BMAyh1WLnhc2",
  "key6": "2MncYooLXM17YD9u5Vw48huhMDwqBMK6QAgTAmQyVkbgYDz1jHkU3irx2SgGNhBLn8T3gG8kWeqkJmeFGzgYQZrM",
  "key7": "4jVGDvPUo1rGyjzaai271EPVfQ8QsRmfxfuFHXVE28xt92i2GjfLruWnCoT2iFex8NFgwcw2PSX4Buqs5Yp6AqfC",
  "key8": "3EXJQAUe6G6hVaoy4dA5kgs1CJkk1SWDvFb8KSsnodCEKRKjPcRVshjJr7JyAmC1dvXQDAs91gaSoCVUsh8qeQiN",
  "key9": "4Uven6ZqkpfEhtwuLuuXbadsYWg5mtZ8KZyd1sXbtTL6YYoxpsKepcZtBnGZTWWcF9xyeKrGNX4j5ikia2uSjf4M",
  "key10": "4rkd2pbSApaxFfwFGAA8aYia4VkPe6oxBfMWiX4M56zRHQd3qBDQefNTFuvaXXydiEXAKjDr13Mxhx9wAFAvixqU",
  "key11": "4HzWDfiLt1ALGXEiPDQs4JSLGkjrW6FSxy6R1XCsEkXMcuGZcRFXHrBGxhqw4K5wRXs3oCMePCfzcx5YrzTxvZor",
  "key12": "2prpSrMyP8S3PEdxAPpUZDMVpummbGCaUmDXAUigxDHKXTeE11wDVDUExkxk4E7w25HvSoK7CUCHmSGgwbL1XND",
  "key13": "Wr3DbBdwFG7GgJ2s8iS1prVWpq8oS9LjMg4qwQZJXmQovAj14zmQTz9XfLhMkFRHyxyYNt97CTPPnSVry12Aj38",
  "key14": "Hjuf97sTP74AsZXctgYsne74nAQhhtFyuLW3UTCZ8YUkAiSUSvh1bjLLZAs2WkKcCn4UGU1bWF1Hm7s1oTrowou",
  "key15": "XL9KeVE9vCNP8VeBuUJVJgHP5rkVFvJjcMARahrZjWqGX4MPxLdsndZURTCU5kTvTWEcVnKvFm3dUocP1HEVegb",
  "key16": "SVGzmHPoWtdhDvLNMAgnSHWKpMRnHoiKaP6B7cziyQDyBiasurhUwZew9ndDe8ASF2dPBMmiqrHyjYMRkCJnoJ3",
  "key17": "jthjSJtDhmRQX5vLrab3hR8hro7vX4FBbtMWCWdSruNqWdUVn3WMeJNan97H53i5Fv6n2WNC37LPjh5yQGhWrPB",
  "key18": "4oFnm7m1Aa9tmsYiLof7JoDvE8qGiC5mBqaFVvFYrSRL9zb66zh63r9YaJPAQ2UpdzjLcue2Uki6LQTxucdPSfBF",
  "key19": "2Fd3zU1ejz5UfaKhrhnH9RZPaCYXZbbvxKzUaBvdPLgKKSE97Aw3URREk1nvnk2EGr6TFPAEaiSJDdwj9i3HHVFZ",
  "key20": "eUVTnd2yBYDaHzwji4UiM9m473JicsB4vdpKdyWpnyGKeVo99kaDZSpSE7QeXprw1QarN3QnnMzC5ZvhEyPUH6U",
  "key21": "tTupxNy8rv9rDLPJnfWaK9onoGtbQP2RZyR5cxyNmjCBSgMrq7Lkyp5uFCdPHnsnSY74MsMBBEUKVqkXaFWvnSb",
  "key22": "Rv5aJ8Gv4jR7No262uVZscroGQmDH5o1781SPAGwnxPTWrpSP22o2ZGDFQytSS29aQYKjBAP4R1RKH46tqvo11y",
  "key23": "4e7c2XAmmeX2pfnw7BG9rVpqjuBpECMMwGub8nufwfAKX3C78ciajNmfGWACCR5jEDrBoqkvZ5Ehtf3FSYbFAkCQ",
  "key24": "54CcfTR1t6GT5yVb3UdeaAqJ9H8QN2q2TpKwtMPcYhHuGHSDdhmdko4TmAV9X57D2pNt4PGpJ7vE93kCeNbzXT37",
  "key25": "3S879HjENMH6brtNeRDRybreQCnPwQGn4nQybpki49tddY5vuDry1QGpLwRGY37Byk2QfjVWdLt5RWgaVGbgrAMT",
  "key26": "47whqMN4zg8Hn9pK9XEWzorGwkqAwJH1L2wVVSzNx9xkV9sC8itHyisLyXVWaEpSPc1FKtWuKz3HQM8sPHAuDuPZ",
  "key27": "2s7WddfGgccSc2uNmRRKveVpWJxuhUFaQA9c235B8DpZ9WGi9UfLqpoe2h3FSKXH1f7sFqG9B7b5PuuG18hcA4UR",
  "key28": "3kXW7raZgjzE4dLURHzddq1AZcizsazGnGrsGMXbuzsH6eadkTMwZBtWBEAoKGhAWz6ZpBKq9kJPiVDTjb4GAGCm",
  "key29": "2Tq1x9w3B96fxrK9vXqFQVWZq15qtogyao4dyjEzmLnYQWP4hs1fVHg96Mun4MjPoMhK63V6sWwpNMtXmF2WJXCt"
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
