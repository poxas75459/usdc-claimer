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
    "2uu2Tkf1qwMnFsvJUYTVNAb63kcurF1n8YR5Brwx3HqRUULvzWfDYHVZaMpxrYpvniVCfrzxysycCZpQeHhpFB5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y8mGG1b7t33fqpE3QY5tTPAXFMz6D1Jx5KDmyK58GG4hEuBHVEXoQKVzNmt9XKKuNuBx7MrQuyoEc5rsdsz2HHH",
  "key1": "3xLjSVjxX9sHko3vwbVapSdvb2tzE1p2fMDMWfYEJ5v8SodN3BAJY8ZshZpioZvNo9iKziVGq23bjpYtAUKGKSk6",
  "key2": "28HWEowuTnMekGMNfnwvkSR3cnSyhnWoyYvrExvcqxqi5Kmtx4PfAig8wgzJvcgVq8nLhgEhSWDQTHV3EofcXw4Z",
  "key3": "26zUuSyycxhCw83khG9Q6LdSseV5X4GHetnuz4AXxzp74jVL3xKA62spBW6AgWmAXJWrj7YUJzosL8XWCT9T6eM9",
  "key4": "5GUhkgNLuuEvcHSJi8vbC46Z6H1wCtKbyGhd3kpbZW16YYAoMCUiHnVaW1t7fJbSpHrCLuUZeyKhfbEyhrjgtG5G",
  "key5": "2acfGaivdbSsCSC6V7vhuP6snWLj4YPaXBGnNRwNyegXqaWcqCg7qFvgjbtXkugxF8wMLkXY9TFSDs6AKKNEgkUQ",
  "key6": "3BhFquJKcWeGHvY8pHiDvUfmddhgdtjq3jBu4xrM4Z9a7yqZSa7GTkvaMGAUjEB4iz6QYCFwBJSvBuib5nvy7tZX",
  "key7": "5k4q557RdZ6UymZHEiZf1QVYiw59pEHdXKpDhf2gnGoJNAGXDEGVeiTHX3g2Bjhtm1wm7CX1XHdgy92FCty2Xuym",
  "key8": "3PnNA4Do7twTe3WPXXw9yMXCvZidLWBM361159ZsZ5P77RjchxbjPnpnBX9R4cdwazcbDrPRmMUaVFR7ePwCSea8",
  "key9": "33tnp887CwGaPdXvoRDwxT7LQR7Zz2HwjVuiQMGxKegJ1pySK7ALcFE1V81oxWpYY3cmiXjZoYWd7wokbEmmwwsY",
  "key10": "5sfE5YBVEmKaa1m8K37d2XTBvWH3W31tc1YCJBVsv3mK2aefkccjQeZ69vRXZxkUQXgyboMiBBBgYbWeDW2UpE9z",
  "key11": "4NYLayH3cEiV3HrsqPWczr9DTUVm1K3sq7gPzYvtG6UEd4Z7jCkVCE9E5xEr4HC75R3H2Tsg4zjB4XPkdC1oiyjZ",
  "key12": "38mHSGwRRJiwowvRfJU9Le2LF67BdW5J6k3DUZBJvB3UJNTP5knjFxFXY6ZDp4qW1p3QF6jbLdAqLoSgFgw3L42M",
  "key13": "2L6TuVeFfVHE5ybV6DM89SqRt4MetGztkk8DJ3wde2kQSvbha5LnbNJper6jtuqL19fT8paeNDgSCHDkNy4oRYYv",
  "key14": "nxZDZ7uBxnGdWLLJRf5sFvHNMNqPhhgEXfyrH7DeSmSy3sV7UU8RDqz3RvwAwkRanqkuGPNqGjpMcq7LFQXVvE3",
  "key15": "5g3rEvxEqsUN3kU345YXDBDHz55BNTv1SH5bFMreFrXc4XLaeygikqJ5sosgQezb4989182SpLsGGQgciQCwXf44",
  "key16": "3cr8MvjBhn84xMKc3X2ve8BgtdK6nQYbHLDpgeJaU99qrxEncZvG4fhtSrLQjnxozga3J9yVKxGXEskcLvhPdMon",
  "key17": "2YB1UZyjBk7tCczAU4nbH72GQkqUu6dCF7UpvwdDes5WyimbMwMSfCssVEcYtaG8ftPxCLvpQgeVSSoyn8fRPymT",
  "key18": "5rKyaAEQRst3CFVUZKKzNGJjVVALi1N6qe5maQVaE4dcuSZfFo58VVi68qQtF1hvgq157FwLrX8unLqNtNPY4SL3",
  "key19": "3GE3JJbKQxFBf9rGezyAguV5PBexsdqZ1Wx1i9YLThgw4arrCXT5UHkTrvRV8nxiCmjrQru6NrWpxnQE4qU4bFfN",
  "key20": "3res2ur548kPWdqkEVWsLtNBziTEiV59uChdj3nVPsiZNgaLUCSq64ZPWt77LRqMTpbaaqv6tCFV6CJdAF9JjR3j",
  "key21": "5Hq3eW1iSs9ccgE9wALXTEBK5QnCRe2XEMqTCaXWCYJDpaFBJMDG3vuzdv1Hw73FNhBv3frukpKKHSNZqpbBwoPd",
  "key22": "m2vo3jaKE5rRH7iubTbxJeLWm3sU25nz35wWDLrhdSPDQgB99g2eGyRf6QnHQXzTWKSPqbCzjUNUt8PYqSz5bDg",
  "key23": "3N43CV4DBYmo9fnMUD4Jso4DCWvxyTZtia7qiFFQ2Xa4mxEJUYxSAjjshkYyPs4GXNebipoK3a6V5nJhs9Ffx1L5",
  "key24": "Qm1Ew65X2fo16o5iANaHGKW6vEJ3YoxtN8xnQw9QrewC2M9SdFKV7it92oMtrXujBTeSe9vAVUqSfhT7gXMb7wG",
  "key25": "2KKxzyDiT9D6VT59BV6srwCRzivWMmeRtLT13NuhrbfPxtHBFznRUvrobfBMqMDxGMebKDboqw1xamPV18gtG3fb",
  "key26": "66T3D9L8ppowom4aKhre58TjKrTfDi8AtVn4Tvr7E4VSCy1emAEsGf6BFRTjfTVJjijNDyQKAgry3VKVrmtP1wob",
  "key27": "3aiV1oCDjPJKyV87ggDgwWkqhN6UMoN3uggeyCV1yQzZRn3tn5AfxeeB7CQ8Pau1nmRmEU9sFZuWTqqb6paNVmH4",
  "key28": "5dCAvnMiaHnnvWnJdJaSmK1cdTdy92pUGQWBCseiyKyc6oSRqumnsrg4g8EFb3of93mWRFx2tD8viNNLXz7CVe25",
  "key29": "3bKJFqMChCKcLChi89qnVyNGi7W95QLeLE3YJuwhhgw5vbui9st5mZvKwvgPCVZPAaT8eamxCYej1s82fbmi4Dpq",
  "key30": "4TUhG1gj9Y67LRNrJ7D1HPa8M6jEVE5jBB7RoheVT9zFVLA2sJ4fTPhH3g1q1t4uXi5uK2ybBTsZybzjonTgYQFU",
  "key31": "4yDjYwHeMKGmKUtTDbKVDbDFP7DEeYNVriNF1dJzZgPgyFyrdyWsFh5dZx8c4zXM2e8kfUP55Cy5xi4Z4sgFcuQC",
  "key32": "58H2vpjd3zpYF8CHKEY2nqHsyMGURgpVmMChdZ9mavnhqWaYWK5dD4SkMytmxxfPUPCSvsm3n4uGb6t5DSyTGWk3",
  "key33": "UAoNpYZ2A7cMX9tj1SdND7FjX4LMqSj4azLyDcGYDaZFbDifydnRFWnxbvCXSsxvEfC1hhjtjyJKizmwgQqebh8",
  "key34": "2VSgFH75SUdi75S1gTbxSj6odTwCxRgYukE2oUHjbHrxvYdxMX31vRpQsUChsy6AG9RZG8L4wLm54sGERBJvwwV9",
  "key35": "3wQb6472Cdwe3GK9htXer8JcaZDJyPYtk526hkL23s9YZASyrwxtoVg7PiH3e3xMyzvdHC9yxAqjhGxrK8FUzQsK",
  "key36": "3RnsnnyHFkcLRZdD4rnwc7y2HB1X4mTqdeJEiJJqm9p1WdZmpJ3nJhE4UMuC3PfQ2BBuhQ8d7Sj1kyP5gLpAi8YY",
  "key37": "5mRymmpFXreKe5g9zMvYfjrfVayzCd2ruuSwrdofuxcdjFiFuEE5bKs8MnWWhWddQXcSJvZzmhqu3EaMnb4osvFm",
  "key38": "rD6kJX3NuijN6cFR4y4o5Lk3CqjkCHwWj6QfRxf62jLNKoZ74tQ2AGD17T4EReZ2LoHmnb8Cb3qMZLV9jm7Gj6R"
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
