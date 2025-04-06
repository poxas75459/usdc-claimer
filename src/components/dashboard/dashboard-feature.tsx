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
    "5jPYPmbwgaS3FvmSFmHLizeHqNsJiLd6aATWnicAa7XNKrFqKfbyHdv1saGbKpPVzqVSVhsxLjq6ubEsqie85X6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K5RUhu4R6MQRoNG8LHXeSjw36Wp4CkmDECdmHDqLcxuFcW6M8UBRugvgA75A8Bu6YhD3SNhEm1xG9M7ZZAQs5vL",
  "key1": "ScCHWbPtyhiK3Sx1qNuvwoegHEXoaNeAMVSpTX6Smx4uKHL1AcXygQ3oKAkVjbPdPehgpnbWMDzY88nGKVcf9JA",
  "key2": "2UFaGkcUpTWmNvNRc7msyyLE5P8hNvuwh7eh38E4kwg1PGHum9GXQf3UiBFCc2spZiqwqKRFAwZLBo5itRDBH252",
  "key3": "eec3mpiyz8sxdpCsBSujRofGCPtdgFqnoLn8qpJSdrebr1QJg7DQhV6PqqAsAEtaYtadybA4fSNNGiNXegYxpni",
  "key4": "5dusnWzcjv9ohFGG2ZnRfmhdiw8MqXK4jBuT64zCK3yWZd3oTJDPupLqd9rbkCzh9qH1mBPbzHCaFtkY8m4AhTvt",
  "key5": "3tQJAaggWRd8SHUoPM26Jan2JdyfB5rJ4pR1N7GUQ8CvfpzNBcpau3YYT7GpJHCV3CUEB4pLSmVMSQqBT8zkaFnk",
  "key6": "3EWzDRx3BGzXFVoRC9uySxENrxJ3s96bsPoDySFgdFpt9CFELtmjabjTNFpkBKekqMoMCwhLd8t8ZC3QDHFFZ9gJ",
  "key7": "58znZaUZpLBL8H9KodNPtQqbTfb9PA5jASLvX2CsgFP9EByrAFKAen3iqaXnvjZsxSH4yVytN8zrDwJPLwsYQZwY",
  "key8": "4CJnAwg12sBv9ARvs9GXRuxLDB6q4LXAZ2UFt1pU8FfGKLMGLhUCJQX4JFhUAtB9WVCAvNxsK74ae3MNvRwuicKS",
  "key9": "2NY55Tfz75hFFw1EP6iBmpkyKAGtu94sKWMbvd66gKgCqX8fVbun14HKCqB5ZSDxf6xkhA5FwqZ73QJphj6yiFHx",
  "key10": "3hGcxpfy4AMarrxzBwhMtDBsM6UVxZFJSxi2UCLVJBvCYSLJLq7q5D93JcTxCRei5SFJxUC7gsLH8EX1h6xuABfV",
  "key11": "5uaVwG5p3RZ3vCX7V9qh5DdLjpFmeHsVnk3tzYVZnRbzAcLFd3r5FUkWXhu2MqUHUdA1ieZgCzQ5QevCd9VEaaSn",
  "key12": "nZtEDn88p6944bemCFDwd3rE7NwJ8c6VAt9Cv14fnBixb8kc4t8WHyyhcNaiXX4NYKjzc1zmgxCwfLhC9NuVFfQ",
  "key13": "3X6H1CkzubwpcE6fQrgdvk2EEuaP3ZNzZBHvRRddW33VWnnWJPtkGd4AvrQ7NYbZFHiqszz5bBYvHkNyrismQqY4",
  "key14": "5uuxG3CtBxnZXEye1tWHqaUXVQhhzE8VuTuiwvEBe2zKZCdhQ94ZMXUuCgL6yVqZpZj5KRY2UzSq7mN6DzEo8dwp",
  "key15": "27gULrueJHKtXTDkeALr4Ede32YprZ6fQPYvAuC23CthHiNJ57WNqCH6e5mwFxy22wXtXVAMm4U9Vf2gMieBGRME",
  "key16": "2NDn1jXLzCE7xNQt2NUFBWW6CumJJWez7tHE3YeZWpiyoNXLycEGSFdKeVAZhCs4wYUajbvc5w19jDh3tsMwEpLn",
  "key17": "ZxsvZndSFJdao1ri9ArQSVYhBz7kS6xs9KFiPyWVWPsfpjECKVFZkZU1tW9uhT8NdvxV8XCCRqba5YERWeNs6Zc",
  "key18": "5XdwmxgCMxyLgmdzmanPVXHLMHgBUqPsBErpBtCZ8D7UHtJZNNXLvfSgis2PXHzdwCGTEbN5U7i4EBpcJPsoHX61",
  "key19": "4bC5Tc6YFJ1d3aQV3JKZz4qSVRCqamjhZ2nsf49LwPUAbVio6KZM1sMDT1sFxuP8SxT3v6oqBmTZWuFKzoAiZYiv",
  "key20": "2fxdAZmdueG6SejJcbgHuDs4v7Q69FJPbhAGupZTaRgcd11m1GsTYzLfPsSRaEYozZZ4ds8kEbfQbdHbLNeTyQTP",
  "key21": "3vwHyQwbJvs5zrK7d2vtroA9Sb95Ka9qmpi3z4RkDwJScBf1exGYo6WVPrwVeNt3YsYeq8ARYJYPhFbUrAMEiyCR",
  "key22": "5v17u1i9cLeXYFCtAfc5MSghfHCBLKJQuHWiab5sS3Rmf7gRnsGMEkKTcx7gK7oHJG4fzpz27rBSFKVPoXRfjL8U",
  "key23": "4rdazLEy8Q5a4iVqxip4Ay96nF7eWG7XWVX8VnyV4XjTDq3ZXpf6TDGZU82z4kKZ81Zec6saLssoWyfjoeCYq7aE",
  "key24": "3hT959YD4eqEkbDKH5xnBZwwZKhxbZtLUay5VGLjJHhXd4jBEAVG4Gq4dcV35GoUCKtJTi44Rv7ZatiQj5Pwe7qd",
  "key25": "4VYed8GanurksSjnt5dAuZaXBYLB8KFZdnm6R4MUTcAhvTYT75TAXcY29A5SXwR6Xn5dt1FVyYTFSLBxRYZk3Bch",
  "key26": "4T4nrrThG2Ag1C2rAwjZKk827CGsiRZMcPyKTfp8S4eMu4dWryTLWALsqxisGf4XkFk4xGRFpb1K72X7L91c431k",
  "key27": "9R3vnFF8x7uJPfowXk8ZKMbWHMYnRUVvB7ppNyATu8u7Qa8p4wYBoyzb3JToFYLCs4EYJmX21yomG3FAgZEdiWb",
  "key28": "3KnHrfe3xvnKhVCUcJfNVJudwuZr1p16r2uHibzBYsPAwmPBXuZVwYrbCDZJycmwimd48dH6WtnszbMHhE4ZBup8",
  "key29": "3hQATUx576wuUjKfrgWmnXBFARhSdxbXKPdmyFFzdsoL5hryGh13ESmqcBtSDtxY71unyt4N7RHANGFpwuppeAk7",
  "key30": "4BZpFFSXqQdsaBmRkHfuj6PWD1uMpYcgJM7gqaS8zMmwGRFhQKxTnXtPP6JUeZwurMsRHRGXzhwoZR7srCtCTEs4",
  "key31": "9ewvSF5ygpxNXGvVxQsdXA4mbJenpVBM6srtpyxuT1udaAMELA9SLLJyM7HQYcun25VqKbw5TygvDBdzVkF4GAY",
  "key32": "3H1qgw2iFRZjZmDe3BrJiSe8McNcqEtJrxkEWZXRrYYRDSrVheZzW71PCmV9Xg6dfzEjFT8SbzBpaS2BimYGaXHn",
  "key33": "4znvkFsZMPyNxfEY1LycFYzE2DyMjX2zypQAjuGJhFhjaumXcJPpn9AKoVA91JVytKgP3uz1PwHx2oB14tgNJkLg",
  "key34": "2uhZUt1rV6TCw2sTakZBPY9GsevhxSnbjEJGD3dXFKV7LyHBH3Hbo3hwrJDbuyeDr9YpKsgb5DheVRq3auxU7kfj",
  "key35": "5pxB6v2MwARrxXvrit75nzHrwCBd3S7tUg3KVA2Y9q8dWyWdQeb5qBSCkBcrQKjZuNK8DbfSkNjCqaWxLxA9Uu6B",
  "key36": "4ad7UqeqxTBTwJ6gQkJHtYXZR8aAX1cFTMY5HCALrFZ6GQ4FPPqJAtDSRtomRnTiNXEkkKq5tC56nS4yAzmCCaAJ",
  "key37": "5PFCnoENJ5s5VeMWtsLnMRZLMACQGwv8pyo2KczwkwBGDxtov23CGb75tUCq8RhL5oq9ZXhxxWtS6oqwJuvxYiNT",
  "key38": "3t6KwbEfZQZtW1UiKTvF16HDy9Gs3pH8RaQCWVPAHpwUYxN12SpYGPxvxy9dNJGhgP5FgeCSskjriwvCiEsLZkaE",
  "key39": "217DEMwk4j6RX2omX2gHhqCvzQa394YHzNtxuvuBFQR5AtoWVbo7c5ZAbFBX19Zjto2efv37KcAfhpSNyDoYfKcP",
  "key40": "2NZv5g8FDdL9poVqVN4vYyz3etvxnJuJEsaTb3tyjjYmjZBey4KUhYAXDDHS9LCShk2Uis2YsnZjkGSiWLrGEzRS",
  "key41": "5ePn2KMkWuPsuHm7KRLujzAhcA9VaRTJ7UfUnbYMhmwARJ5rKPbHUVXJVYAdYA78efiKERBiZhEBVtwnqGNkyY8r",
  "key42": "5Lv8JijXaGkBSGQwjuGvbXhHBZoDYhg5rM6G7W4SDbqTRts8RZ3ZzAhkYrc8jh8xFQE6pwxD3wkgUh2kTdHAef3m",
  "key43": "Wjf1opWcoMGBoxS6i68RdSvyMpvXVVr8hyHKifmSv7sDfTsbhmA3iVmnzt85e7BTLbnxbTuytSuCSEpsfC8MV93",
  "key44": "3Wwmirpo8oQXbAEPaJssQfpU7a9gu1DWrUucp3udNnDoKuRVRAFp8b3jhLSPpz73c2YDxvg3QdetKNLuYnvHhWPc",
  "key45": "3FLpuUFMVF3CfoT2bpVfu1XwA7HBhMHWCL1edR9MvBDrWnPVJJY7MnEvikXLh8pLou264MCFBqUvgFamDB6rdX7d",
  "key46": "5t9HLDMiTRzzL5agtND8WxE1RXFYFTYK5pYrpHbxKS1JXnung7vcF6voPrUrp8zwSQtgADcKYVKabpg2KK2ouDj5"
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
