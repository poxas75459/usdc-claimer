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
    "5nCV8dpAsDZyAkEFPEYipXCcuTfJa3C3Yk3QwKX3ZxgyZFUEKB7yj7KTz2k7P9zanm7YpRqVey96jUxm1osjNVFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p9ApJeBriaEzrmWaQ98s5ZbtccjTma1Gdy7wfkL6MjVMP7W1eK8goq3fY7FwaCdp86MobQsx88hxRNkuKUvtz3R",
  "key1": "23EKyhJgfPLkRtW79nMmgLBgmdtbtzVCSvwoiS7ChR7HeC2UCx944gE8NLXeWZmrNGhRy3zuEJ33a3o5EQonYxCS",
  "key2": "2bx4BeieJuTvh5e69FHpvfRXsLjwDSboyM8KjpQ6kFkMqB9XYTDhotbeYHfYJcsnPmyQawKrF4rhKGCHeywBxp7V",
  "key3": "iWMVgKMAqdbr6qm7m2XATKjtYx4rTVscwFaWH3QWoTsw14n1jao7WaTJQ9Gybrr5v9nNTyRgQD7mzHc5q2Gh1aE",
  "key4": "2G2SdgKQDU4NvdbV5NutvDLToWozCEePFU92ZnGP8GTV3pQ3zqcKx87dGQ8SWhz9ArX17Pbcfmguc8UYRYCW15RM",
  "key5": "3FB4bDWMZc3BaJxxTb6sa7q2jyxk88iAqEJVFwQCYW2N3v6VTnagun2191Cavr2xBstYwjxBZrowyZh5dUwJd29t",
  "key6": "517K6E1Fw829ZcS8dnVc1L5Z1MynThBLJx21sYLsrmXJ8TawpewrhwxvVHfYx8RQw72LYsC3jzXtA46TrG8UsT6T",
  "key7": "4eA6qGNtf9JF7inPDuwgWfTtXdagCeCizUN9A9W9dQZeUVyxsnWa15j5cAdHERAZgVUx2jk4y17pN3m4z47KQB7C",
  "key8": "4g2G1dMXVTFFkVgsFo7cj5MBskuquk3D4BjeBc1DLZEH2GYcGbMbQg8kGRcqnyq6f8ZNVUM2WM6jkLwAQeohy19c",
  "key9": "28M2Qa8q1TvJ2oZn6mwcfmA9rqt7x6NxTB9mbdZgDnZ1PRL1J1c76kvEiyLrrrLNteRMWnGvtmWQWPTtkkUiiAq6",
  "key10": "Q8E6kfwK9Sr5CgpY4AvTPajJ1C8tHyesPJH61f8oMWsiApFMwHHELS2UwKKsd4ncrzpbGrMgzfXksghjLnvTD8a",
  "key11": "ssDRdtxipCKcyC9Pm6KHHwLxicoJ4yQyKXAKuF6Vm6P9qeieMoxdHsvLebWY1nJ2GE8mmpwtQGybCm4v23TSSyx",
  "key12": "3uzsRFrQoBDPy7ynsQjwQNMwrW2koLsDfwZf1FHw5DtmVM7Hwq4yrpZTGSvD7CdVTsy3egTze1s7BTJgstRXkdMt",
  "key13": "5i6TuaWovWE2nk7TJog62d7omUPVxNBpP41KKqqLc8jLe4yFaTnHWK5WyRJk77dBbJLX8YVAHGKN4QeASt3GqYyH",
  "key14": "67qHRc3EJKcGdHoACvvxcgw1PNvHGssy2xMVs2vEHTjJGfz6tTNkbnu4HrViuDUFqNkYF98XqWMTesA1DLoczCZ7",
  "key15": "vSXwy5PyG6Ls34oLD3gmk69DCuFDmH4tXdnr3Rik8FMHbw9smg9WcPDVSYDQSZUg7TeQCXUKjKzmBo8fPYLx5u2",
  "key16": "3Vnd1teH3xWPMw2s1BYtYehKJhPsjwzrX4FsrFckV467xL5dNpB3rxr5zJp8AXh2eRCNA2v1ABYntsdkU6AWAt6L",
  "key17": "4wTjYc6F7PmNMc93kp4kLsrp8FAS8S7Uysi37uEBGyQLNJt63dXQb32fQ9rMi6JtzRPcgNLbNJdzD47WFQLNez92",
  "key18": "2YCW61biMhvo1Maks6LhZqFCF6SiYjvp8NQcvPfxV5JjM55bPZdd86q2gsE26UnHQNhkn4jXeeuye4yzy9a4cWjB",
  "key19": "syUbwXeXEpsaAg6oyJBFrAGSsokrXpQ2RNURwQkHH4DAQTFrsq5eYiZ8tDruM5YgS2FYurDLjQ8Kh8D3M4it6Rb",
  "key20": "5R1ULnqChCbAuxu2TuVA9s2DpyD3VfbonLr8c9XXBF1Qgjzvgw87HMFGsgZAusUyRCEKwvgJ4vQy3j38pDBt4wsC",
  "key21": "4eySrYcWDdmsznbiwQxsm3RPfm2udBQxsjV12rKPQVYTXfLFUhJt9FPSKv1n4qELzKDZtZE6DzHQT9U6LfP1oZmw",
  "key22": "63szFUHR2HfymkD6KgKMjbyq4zHYgV4G64NZbV35k5BVrABem5D7CXthPWeLbTGRhKkYJUR18pTVPYct7yksQwcY",
  "key23": "3NGjNvfZqQ7k3VDWhscSkkXi5Davsyv1Px62XrLhd6TEvmZQZbDG9L29rHbsc1hBn1jyjZ1JfP8qxhNivLsCRKyg",
  "key24": "4qrWekyAHmGMgmgoovyPnvfxDzPJagkAvJifibdJTwvEMEkmRQ6cDXYhxGyYHdsnojc5oD2CnsvfUx2XP3jijwrX",
  "key25": "61xTuVPFMBB5ynAQJ4oUZXyMscGET32Ft5EoaKok6h39osL3p53U6AD8jAVafY5XKzn7u9ZJw9FUkZMAZBSjuH3x",
  "key26": "2pq3DEthgm2RngtEHKXiUX9VfdRtNDLrSuWzHj5nguB6hBxDRSAC3kBckfcP4Zi11zJPp1YqU1stbwcDpcerKgve",
  "key27": "2ckBpXuYy5G2xiXMvPGx7nBNRq1nehaEB3KmPWe1uj2Hddcvw6Bj9qS1XEY9JvR7T8x7wVNHHpsNHD6znXaYxFLt",
  "key28": "3ZiPgogvhkNBhaNENYjqLPPGAX9RWw41gKe1ouHSpNwK9vyQtvGogcqNDNv9bfsqEp1PoNT2gRQn3n1E4aDa3Xyz",
  "key29": "64vbg2BzUUnMzseu7eAvSP7t8QstW4v51Y2rd8FHnuuKcKoEUgGJkyBQmtdg4EPWMtxMCBbaUMF5FoELYrhEvVtC",
  "key30": "4ndMydN4JM9ehgL9Fy9aasb34nUk1EJNrtrTdsAbRPEnVZH9ek5XQtukTVfk54v35p29yNgPzEKRw7fCcXLrbYxS",
  "key31": "5FA1pbTMzfncXiPuGj8xZtQeENSiwqawSiNp8S35b4fNt1HzpiDVfP9TyKnjhsJn68W6rAFSgojYmXFRzVa1LXwU",
  "key32": "65vsdmnixdnsPV1NGFhKoQsg7SC46kJsViePTi7H4RMMEBBxoKNRGdTQCYq33XRReLrQaCYXQpKCVBhw89jApmYV",
  "key33": "2P6MY5momNwANRhhdpVyyyctw5pkrTjnDZ7aGKpKGHvzZrS4Es2G8ozCTHVCkCWC1jZFCWWX6HCWqw63BpJ8jodc",
  "key34": "62FXkq8ZtYHzGHkgK8Th35caKuZpQJSmYK6VzVQegWCb69rZApKt8S9qGTEd6xq7YpkrG7P9QaH1SDMmDSEKAmyh",
  "key35": "3y3VbjmM3DBMyhrYZXzJDc7VTGnniHiJiUm6sFVSkkamxLC6yJcshmx3JrdYtvzMMmoJcx9UyAA2Z4TPLYUS9KLQ",
  "key36": "4xHvgk6bhBD9zUCT2F4qfV9iYUTrY9Aebxw6dM5gR2y62v2JFZzvSaqCX6rz49jivppR1h91sKkfSLwAHuQEhvau",
  "key37": "T6CEJKd6wVnejKF7sLP6N8ayx8homBapvJ55ryJz6omzzamWuNEqCYH1CaRwcyNYJwuALpzAappYfccQ1NV5qgs",
  "key38": "4NLj13v86SjeutmVTwDnnQUrvcWvZx4TN67uWUPUa4ekbZWCxmhXSLZWmgyT6WfVgptwiK2oHC1HDxu4NAkJyb4F",
  "key39": "3K1UzqfJVDVZRLFMwoG4HnHLHFFGpacerNHqxN2vnpDNHzgA687PzrxVPwZn4k56SrHgk9BDiwHRZF1JShS78MuK",
  "key40": "5KAL2sgfe7YCdhiLWX6vh1FSFHHL4BDhhcXJKw2xJfFm3BN3rsSLKif7LfRJumo6AzvNLQsxZL1TgqZdceNuMmBe",
  "key41": "28ZhZDDATPiQJV876bkn81Gp9pXPWzhtYrtPXaDML8J1xxf9YRHqZzfu553QEpGNSEF279nDC8g2gTiutxzW7kWE",
  "key42": "3GviXzRirm4uQDWBByA87YYBkxyQPJAkpjX3t6TCMRPeFP9stJCwsYpFbnizhfPqcBEYCPRDXMKWfznLoWzkd3td",
  "key43": "2B62Ngg3LQBcrtV4FWpouoxRTB9cRvxQcfGgezjsqFzzP7bzmTUFvHajkRrYuiiFvdC6rDKHjmStFdA1n1BUPzZ3"
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
