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
    "ng1HwLSvi1uWQ82oB7GYaeS25tZVRmwNdhjuxTayd4de6LjTvAhP2MaiWtp7RzTtJyotYMfb2RLkcUiAGAUC2TJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24AgcYCajSYaXpV7Ymrj3CsMXsgXLcADRE5EJ5H8jPhgtn2RLGqkgzZzGLx2BA4tJPp9RNR87j6vsTBhJvf9ffAQ",
  "key1": "6zAJirMNTiEXrJQzzuSedf7qtYHnK4SjqkqdTLUWXjBk8jNvpR4b8rJVCfUgSYAMuZucMMfMQ1EtRbHEQyaHy9u",
  "key2": "4BWkJsuomV2gaSCkLPLATouVHvTXMKMtxmBpKURc6KuHjLFjYdHkSCAuqDSNyHfSdLfRDY6ELYanJKhnrQKE3UNw",
  "key3": "3M93ZxRRkAkX9rdFmfJyHrVYFxgtTxF8dDq2riFT6qn7cRAHynEgCCN2rScHr5qDCDFYkhTnQ4q2Bqr2S3LgMfAE",
  "key4": "3KfXPAMpSDxKwiEC92svZ1VUNRht1x4TDdXU74j1qZD9jknGanSdNZAimPVrP7ZntmpGDU2AVxjpt3oHKk9gdx3g",
  "key5": "K7K88EoHdj2LgvpyKin88kSstEZKciikqQdLFtqToWhoRTtKxqJSgEtQU8L4qLQJYhNee9jsB2hdBUgSk6ftcgg",
  "key6": "5HsMHyL613v4Z7WH9tNdFpQQ11SAuy3PCtjSULt2kA7EJpAzJMYGeA8sXhJ4kixaATdpW3gfwtha7bk21t4VpPo5",
  "key7": "qJ7aFweuALNyMGGn9BMURfq9HDKr6ZqeKbKruvXL3Dy1uPrgzqf9UQSX3LYz8Xri55PqHHUExx2gDFxLu4QWCv2",
  "key8": "7gPouSqAZiLPrjs7j5t3zikFXCjURpdKzT8vRnrSEp3GVPbVWpgXEqNjspBmdyA2cyBTgJhkzBGYAWm1sxxq8qU",
  "key9": "3CoKC8VXfRP2NaSRZs6mjh8gdryK8ZeSaSwUzKDuYbwYbtGLQi1tmZTbM1K3HwsAnr5ec8B5CbvWyxv1iYaopJSw",
  "key10": "5oqTRCB1fN5XtV1k3runPoJg7Liod9XKZNJohrtJG79BtPB21Dctu2niZEX3vwJJNQYr1ZY4quds4RitDkKTqisv",
  "key11": "3nmGY9sFVmpFquJq5HM8KKHco43izjiHLnVs7AeRd14EiZonxGhnuynJ6Fxp8EcPRko4RZDSc6p6Dsz24WikFAi2",
  "key12": "4FnCrBLsGdfw1ZJmhh3xR76NL6YD6WccdQNfTKkGTQasV37XwZ1cPTTnF3xP5982YYUubUmPUv91b1NNB44h3DoG",
  "key13": "5zCZ6YAnwWzSSYzWfeAw9H7iyEsYh4GXiGYkJg68Hzr71Vr4GjE4XUDHVpYJ8FpdPVzHQYfdDRKC9E1deXm5Cbqq",
  "key14": "5UERrTaNkMMFVS9nRC7ADmf8oJRMAi4cNjgpquXtwvkSGzkAfgvWKkhHceAu7YoGgChpUy8YqWQVYT2jaiyx7ZRM",
  "key15": "4ydmvTLjbnY31LUjdL7HR8rXAwjMXm1vhdCTyGBi66cHztZuEqTzEZkCiYkfyinsNQ63c7ePspyypAFZ2XfgAxuE",
  "key16": "5GKJkyn48kV171vf6ukiXzCcwXY8Aj5P5NifmKaWeap4JD6Grj92xMKv4yWy64hqXTGtochiQRdod1hquEPmkMk",
  "key17": "4MMiXmdrZdUuBD7QKEg71uk2Hy8kDUjBF7cWsVp6dDiGLfUTvSNXhDyHNDXT3JDTpYmhfnFTG8AQBiYYrB2TLFW9",
  "key18": "pCKbCMVzYDXWv73RWJnSPUj3mgfJM5baceXxJfZZjgYM2vNfxY7PFtcib8fcEjV9FXapyCdUek5To1PeFCQLfJc",
  "key19": "ULihvCRLDqXj1sxaXkYEWKGPxoMtuPvAphuKNHUWmKJRN9qHpCqBjGjRt1VUXSRKSMorSW7CwViFbysfGU3QV5x",
  "key20": "3asUH9hoqrLKLZqMpigaBPgCjpiBhjSj6tvh1YtiU2Bh3FeFzSWThj9EyBViJBgALh8aGCJS6UZbmsRQ1pTzs72j",
  "key21": "2kXisvbyvi4A6ytDqCQRWtbKWezEbfSr2EpRgb5F6EWzQzyJ4dL6uVdHKCqigMrPxMsu8kBvH4Qg9hSAZkQ11zPa",
  "key22": "4Lfgpx3P1C7ULte9NAGEpmsAMjmw4vaon2TyXB5GsetRqqJzz88AdTAShcNuDoJu7iJCAJHswopzmBLzXb6Nc1ew",
  "key23": "q3ZjtGiCCmHJSeUaxJyjVUnRc4bcpF3nXQCQWQbMAn7pTjbuX7VQyPmZ3ty9qLMYJDpPyAQyxBdUxJLrMGonkn6",
  "key24": "5ZsFgw9tC1LRjZsT6BAdATX56zEYMu51GaXi5RfwXQicb3MEewJrpAndGceS8wnrZ4PYGtJVCNtdhVNa9XHSFGrY",
  "key25": "3TtD5MpjF4Hq1xmM45LDKdnkuuKK7TEezTB8GvZ9Fyw5xqaGGHmrM8CwuKNLkg1eGVmuQoJrVjYcX8pcf5LbHWQD",
  "key26": "32nqWMfgCVv3aLxoMjQF1tRqD4ps6HVjyrbwk6ZEzVm86euC257FUUZNEADemxPM3HYc4mCygag6r4ujXWe7Fpe2",
  "key27": "4WgktfkhpLYfxzysi29tHBdu2JdJEWDU9A83CEpW8NQXPrmxomqQrcQYAMx64d4MY8TxSQUEjXqeU3g2TdGaKfeR",
  "key28": "42A9UeCuYx2NSGd52Lyoz3j58TWitoqd6h1GkkLRtoEBXm6JXm8QWuGvxKuQ5EhnuuJQfBv9hkusjNcmV2qAeLtF",
  "key29": "5gHYB1Wp27x8w7FrDtUJPYvdwwrkKenkXWDczor8yADNZr9V92YavinENwADao327EUg13ZWjhsdmyg1fQqntAZ",
  "key30": "3grW8c4K3iTHGhjpTCzxKM2orpcveBpmWRMMeY5WkWzDaDwKH3J9oE6bntXKSeExfGm7uThFnnwa2UmRAKsCW5s4",
  "key31": "o8AGXB1nw9H7nbCD1nNeitBScmdEDee17MfayJminuQTqfmt2Symkn3sgmacwV3uPSL7RTBuJgc3BN1w9uvN6wF",
  "key32": "4LATDr24T4EbGVDox2xjboG75Nc9kEAMcJ5iHWnsz86hGebNez5DhDTYwguZK7mizy7A7EVAiRrp3Bw3n1WLP11t",
  "key33": "rSWqTPtGased3SHURrYr5SyFPHAUbH1D3nQZ87HvP1GsVApGw7NYbYgxfBMjQ9VMJKHN16HJmpbfxathGX26z3r",
  "key34": "2bnuxhfKAkoSLuZepNHcP1AEEMRdSBS19tUmnSBoab7DjFtcVRYwvDY5RHsnsyonrkfT3wweCgawaeh9gMDKGB8o",
  "key35": "62pXbYpNBainYSmJr7C4sUigKu4brRK7MMX5MymvXPgYyGrChrq23mP5FRvTxnXwD6aSTEiXW1G7XtKteBNhR3nG",
  "key36": "3PMqT7zDUfcLtFzYd8kGrxgdUgrJhME74vMUDyRgSrX6AK5kkLhjctr84mPu2ZSSKgJXaifKL1VbhmKpd8qpPU8Z",
  "key37": "5Jov7j21UoqCUuMjCt2q9cv6krcnpnVtciiqbdRx3hD8fU1jePqttPE4LvXsF2bWG9wDhU1XYJrhN3ZU9ghoXEhz",
  "key38": "4LRCBYzJnK6bWqPBgt2n2QGRTmq5eD2H4wvQ7wHfLGMMDJbn7vGsp3XGvhFYWpuj2LDEQ2Y2Zq77w9yvPwLj2jrT",
  "key39": "u4ey5ApVsbXbcAU9bWuEan8iNracXGzTLrtPqsENwV6KHkmAukGTWLUYtkkvj587trahwVhbc4xS6XA91tY4WXh"
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
