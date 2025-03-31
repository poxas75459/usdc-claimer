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
    "4FD3HwDJt7vHSz685SCYpJjRwbZiPfoywCccfFDVtZP4veFtJDj3Yq9BCJ5qD5A7zWGVPUfkmxkCHGmDzB8xwosM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pmx3HRzsz8r1NdnijU9Vumknpk6sTe3ZFLu8oDccq2FFmEGN62KeP2DJkocjR3SnqWBVXYgsoPZyQR6JYr21exn",
  "key1": "3VCWm9eGuaiQsQVAy7eCdU8AT52jzoY4MpYYgx2Emfo8yaLQ3QE2e4SW24nwbb8aZ4GQCfTcyPy5pnUKuHj2B4MV",
  "key2": "2ccwXjpTNGyDpVNy4BZswbAULt4McoH5fLxjHfVqHjzgBKmBfiWRY4MszMYEC9Mj8pJFvJR5gbGqWoSusTYoq58d",
  "key3": "5t86a1gJHoC11CuyowJi3VrvWbBWzFt34HeS9LEGfke7N32spqauHzFwuy7Zp13rzAxRdy5rAj11Pxz22nHZTKKy",
  "key4": "3x4mAAoydqvRJRdjmBQt2otmNVGvMQjB41ykoLz7wM34qf8SgMmP8BibMt76L7kUehYtNMzkZi4mEuYu2RPrgCcE",
  "key5": "3JazTXhW1UpnCcsX6ptgn2NuYmawsHMDK3xEFTp2p86ygzihx54yuRghvgByuCx7GWL9xLAQUQGgXtE9kvcfN47o",
  "key6": "ibukrZPACMgyexd86gLGfw6F3M7gEsXj9ioDPyjC88PB7s9KBc3gggw2Si1jAEWjFGv6JUyFdsPF6T29B5C3bip",
  "key7": "4VNfmerm299EREtqZaRrCuZxycxD4wxTsPg23xcwZFHwx5iYHd9fd4TtpCxzZKqNnvB1AAj915cYSH34RP9pkfGe",
  "key8": "5evZahJB7v5AQou4A5tFGMh6yneDHikqDmSUwbY9TWpZP59tGNn48aVR4v8nPrSH4KqstyvnRBULypih1VYvKJ1k",
  "key9": "3ebwzmvhqccEGvTsaK2AYuCr5JGhe7PJu6YE13rtoaVZf3CbRyFJtBMxr5DRZNnw7SCWr32QA45MXfKWx3eevg2z",
  "key10": "3JK895HxdeB5qHEa1KGrDwHgRkoEASH3KYGNSMPoa9SszQbsd38YjBZ1Jssqa6nDeCJRLWrx66mijYMK7PiFk4h9",
  "key11": "jQEyoba6fjhhBroX59BrRB8FCPvjrWaFxFweyY34agXx3LL83xPWDntApP9oL4QWjRXT3KwDfFzoxR3M1UbscYt",
  "key12": "4kUuLVKZqfy6JMoBfiU2tErgdtvLkGMgiPBvX96gs3Wn8mGmrkVc2MFAKS6T8wPfVaEeQGPbwG4JKuJuxJzhUEVy",
  "key13": "3agzPxm4Lkr39tv1DN6knbdehHfCN6mh7DNF5Haqt7DseJgKF1PVJPqDyrW3LtMDY9bzc1EUiAN6FxEMFNcE38FC",
  "key14": "5fsAwJPqxNCTj7wRhwcKLAHevM8dnpAsM2PsDqNFEw3cbg211tAbT4WAZBcaggfnobXLXJkc3F8dxVFC9WdGbzRZ",
  "key15": "1HqVbNnJAJHyhGdrgbUvo25VFYv5JrEde2PMhSeTaZGjCeKs9HmPgywZRaxMEBkwjYepDJtGx52i3MtyiDwn6PG",
  "key16": "3xG1ETLhRRSHuXCLpMmHPWVYrnrEnHXWhYAqoyiwSn1Np5uMXMefrvoUN59xKh8J74vJvfNXFLh6rHRJwDfybeYa",
  "key17": "4qwnz7d5UFsJnBNinnfv31LFaFVEfqAdXvKSoaVbGsvKJMtfPuNy493mNjhXxjvZFTFh8P1A9AgGKYEiniXRkEcn",
  "key18": "3dCXk6RBcKHr89caBjPZt86kbWNh66BQCe2EKtacXoTNru4nqPQDgR4bSiJNZRzBXGLQNJathAjnmmHxnpjCbadN",
  "key19": "5Z9KS7rw3Za6K95TrzYFL2hdUCaYhfyxQ2UK1X2gqAcHyM6HKcMHGcz2fn5532fCF1wTHwqu7S46yPXzw9AAEJHe",
  "key20": "txFnLXALjr7obkRo8gQut8uAMjoA9h4PXqGq9XFyxpTyeqckq7iNACnZAv42sKJKsFeBUjjdHNorUf71BF3JspZ",
  "key21": "4bvNKCDe1oDZH2NNv5K6tPuVSWsidS6GGDZ8jUgLv9uEbrp26SbGYFS4yBvZC7BNzkwjiodp7txwMe6nnWq2haji",
  "key22": "SLrtiPMV6vNpvahJ5VketKLJM2PsFjq6B9vnYatpZUcis7XHtV4WpnVgXa59VMxV28PvjNRbLFFkEePrQF8JLGb",
  "key23": "4BmGAwkJWWA24uEEhv1JD7ShjGVWY4DGrtLTTJ7NCzR7ZFw1qjia6bfD9XJVRMtgiwJKyQARAwTgxe2TKdEUHYd6",
  "key24": "8dM1mk8GratszqyFT8KDgAxwd6arPbCMqeUF7qCDiyY3m2scBTcUsvKYUSnmYN2Tkqyv6bzDUgTwwj3xxTBBGbU",
  "key25": "27oDszyePH2DNFMwzfLLDNtY12qijs1nU3K3bPh9GAmj4Qe28187jeHSKYejmAt8U7Mp6N4EYE9ZA5LtUQCQ4CEm",
  "key26": "23a33XVwyFLkpfpaedmr16DxazXdXoUH42W3R3rGV5MosD4jeCpzyRrYwm6bBk4exwQ3gTF6aGvpSzoqbSdiHrcb",
  "key27": "2P9o34W3BksTNXknTAnH56XoxBpvDHnBCQYF4CXr87wCCWBHKnfdjYh1RqC8T7TjXdAgxyo2KoJ7uqLsCzLUfHDz",
  "key28": "BVBJRntMxsx7XfB7wzEejYhv7o19enyM8YmXZ7S5temVEC6QUwzPsVcsiFc9iqanTpBxwA15bSaWiNuQf86SGpK",
  "key29": "Z2HGjXpZx9uvELGiK6EpXPiu9EBoBGbAdUFgBKZwhkphN6WMWDyf6vipN8SNp3eFYbBXrYY2rWk255VEXhwVqSx",
  "key30": "2418gqPkGeEtiryzNTDVAZfSumC5tBTgK64cma3RYjvJHSbndUjcdnp8AaGuUjUif1cj4pL2rH54jGuM4a54nBvc",
  "key31": "2jFiKDaBwwZ4eFdfzcRCVwSrvyczDEyKjkKNHTfapEU7YgKzHyizmGo2LXKdRHDypNtHxwUY8MtWt6EFmtpd5uBi",
  "key32": "4TUcvP45HCnwuo4V5Ra8Ek6DMxjXoji4et9VfhqCdLhahdUQnqGwYu3sh8ZGVMZw284ioaDpf6pGDXDjjt96bTzA",
  "key33": "2dcQdf7Kn62mZ2TQeBgE5dWQTmbjJb1kkQsp6CZQpQhjSozY4x9bpujTfPBkYdViGtZJrZdnGAENevZP3SCwpwmd",
  "key34": "3AagGs4y3PoGK8eEZGM56Gh9grxmqNUqwzpQdDTCJG2BqgtgxyTFLnY1iNREwkw4YTVmach3roLwX5VEBMnV1oXp",
  "key35": "3uRP4bu6oKwZ7bSTeT2qeyzRKHy7uo7a5k2so5ChXQmHrRKqzpNpR8jPBQXuTpdySxfH6Nv3ZEHh5CEFMrEewNdv",
  "key36": "3aa8CHLEavPxtBcwKjP98sJvJB4Q1RGEqsAMabcSdVxRZEcmH83aczL977zssvwsfW7Zrg2BXAhuhVN6L1D17YMy",
  "key37": "5aKc9ETAufWQCmHx7VX1MxoAkTx98nkGiWnRSHogZQ9MRQ79pqsMhKvzLvgAZ5LFr23uHKFSmyu5cWTWemrmRgeM",
  "key38": "3fQtCB6q8MuC3LhkvyF965LSnqH5iH6gDKXVyUSkukkmA4wLgm3uaV9k1VBV8J9PeNT4cDErLbQzfjCSJRnWWvvN",
  "key39": "3CPTMKRHrJFJvLw3vgDjP4jgJiTQFZ8BDbQXFmtVrCmRZGZTy2pstwKg1ibwLaU5YzfQk3hQ24iYcxBEkg6e8ZxF",
  "key40": "2zqjcSqvB2yUTTAw6xBYpM7hYok9sjhKcYhY9S5YhqHNsab4Cbem8r6qoAzsqgnWGhbKwSpBU5mUF1tt6o3feQjR",
  "key41": "56ZcvrJjbks7aEjMFvUHZp9dEeGrWNQv2y26mYAAbL5BfXmsdZGV7KcCBWsSRKUtw44iZoAvrZ9dpMmQQZ6L5uvF",
  "key42": "2mhjtp5q44jpyh7cy8Gy8KDKiH5CsPJSe8zQ5zytL73w3PueNpJWE3H8a7JFDDSh9L6duvVpaZgBqkJanqs8F53z",
  "key43": "3DEZFS1yzxDSBmiEk7m4Eqhj8swvfBV7jBDM7bNGusigbfxBCWfe7YGB5zk6JnMz2r9ezSrsqUQYoWCp8fXpAE8a"
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
