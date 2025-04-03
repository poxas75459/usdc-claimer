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
    "392U6SvF4PVnNQ4qfttcfRQDuSKSniTg7AX5GSVb71LCj7JFHUkB91vYJWbbcnwyMGBAH2TKyHGmnGRYDhnFvXih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZxDXkU2dxyaUxxbfm1MFye7nECss3J87bRRBknF3RTbG9ACvV9Y52D9noDoihAncdxbUZTW2Vwg1N8JxAW5EuXj",
  "key1": "3gYQMMBUBvp1nD783tdhCxXiQE48QqF4oQYevu1Zz53F9UxXGnNaXerr9zJDrThkPBVyJfnCyhji6pbLwZ5Z6nVz",
  "key2": "SdHWH4fgvUQ2qNXWy24qcBULPgkVVQSqnkvuGbfV3XyDnQamLa38af7xdoCmBm7h5TEphpxBKaguvFSb5bSQzJT",
  "key3": "3hq51BxQE5TiC9K2WoZP5dPqY2DecBqowHBpVVpnMpESZ1sv7Ez4GmZFFcqFVMcerm8udJ6bAYX9Fm2ZnFjiVDty",
  "key4": "46AvMYq6dU8aPjAWwR6zx6ZV9zSJDt1L7eTHEsn53Yx3pFAE53pB3KoUsrvpUtumDVg3TbByX6dEseNpPg8AeDtm",
  "key5": "3UatSWKXqnHx43SchzWBGRbubSbxWw7sPGReHUprcHsyfJWQnMZEJJJBnX2MaAqTRJd4vAwXb3wLSMVnvA1X1hah",
  "key6": "crdU8mSMqJke8GpwQ83XsvAeSZBGqefWKtERgqMw8tAMqgdygSsVPmSCmyEbAQyhPRcMY1SDHRJV9onzWjUbnCu",
  "key7": "4XxNzdtjAfkfmFS44cSodzhonEA65BUYw3nxKgj7UbaFChUEF14qfRiPJYnwVTVSEBrD1gtFeWW24d3gxYPy27Kb",
  "key8": "4xShAmyr73AFUVixryPZNz3w28oVka6iquZPSzYZ8pize64M6bhUWvYsYDQM76LRQ2v24EBbSimDNjAs88pc6imo",
  "key9": "67GnVmXBt1XvaLsCLHJnbJSK47XBKtgUyihHx9EwCamwMcMmzFWPnsDFZsiyF2s63kPC1Edw5gHuzozYaNupDfRJ",
  "key10": "A8uwzSaRaDxJkQUQHyMsa44EhukzjYighrvwqFUt8m1u5KwVnQ5ugjyZZtCQumNtbYBEtUNde8q6p23qF3dS2sQ",
  "key11": "5SEctvSyDLnBV9B2dCi4TjzQT1Uie6hR6iwMBfqurmaTzada48nQubQPC4F74Cec7yVDqRHQRAqtR9SJVjyoLYm7",
  "key12": "wMFX8jqkxavURaeSQ8d8oTwdSLkXEXyExfPBeBohhRmMjW76pdH1dcxc4qfSL4YnX2iEUNsQqkeLAF176vLSDNJ",
  "key13": "67cyqX2EAxCbmwGatfxo6ZSVTMmQEZMan5Zn1vFripym2xXzMcfNVaFTApMd59Qs7GSmUm4gfvGgVUfVQu784yck",
  "key14": "62kxb8aDCAH1WCdVYQcKb3Fhevx8hD2ijqDXcLunpWT6jvkEBcUwE7avYZaxWawsjqTyQipCGKM133bV2KueuKn9",
  "key15": "39TBQ2TkFkP7jHwKGmFADUnSGeBWeSvWb1MGUsifk3deGYAJ4ePtFTG9LB2GKBPnHsGaxzu3FC8ttw8HmUPYAML9",
  "key16": "63Ca2pptp4bjBgAMwZrfYLxiYutzpQPZkSgA47PaUjQHEoXjEPGj5fd3CeA4Ci2j94jzTtESSdAutVuXBXQzcPQR",
  "key17": "5Cyi8D9W6F2LRuKYd2tebJnR4LK87e9mvqwcCtem2dkfzyEHejboEQge25NHVWM6zo4qaxqhQ5H3G1hPhKZ1Mhc4",
  "key18": "XhHi7g6zfX1QnCHmhEhj13UUqkHGbUVqcgCzgex7G64V5Su354w8MkoygKUy619xGAz3WbGhWuthRTRNZbu6qeb",
  "key19": "2mJkyx3WDUJ5Hm5xHvazTFkofK4kZez2sKh38onhWagMSP9hdAAon9dWNzFmaQRuHCuyPFxkBxMnmY7coe2Pup3Z",
  "key20": "444yXXLoA5C6dTC19Uu5yfEZ8rmakDZSbJCzSmaHs7aZLAZWt2YXziqkbYojEfq3E7PGvb6LFZMkRRGpEUg13yBy",
  "key21": "4MYLRUjgWUihLeHDHmPswE3u7rtuim8saQVFnSN5s8f9ja8FFBEyFJGRbSRDtA2zZc5BPx1kZJkEhaKE88tGuZeH",
  "key22": "5HEpWNBjgLsEry9FgrR7SUbfCydPxM3umX57JeTJFYzxhpRyZADo1i8GUGzghd9KeZjeAzhnDA1wNxiaAhgeBxJV",
  "key23": "58KpMneHrYJ4fDq3avxU2pqCg762SL4heQLPQZCD4aFKqF7fpfPHnsRwdTTcMdCU2uUiuHgESwPDLTaHDsDHJhJQ",
  "key24": "3PbuNPwvrw5woH4aCKGDBfTX3JEjkVe8GW6s3cPkHM2Dy6pEU3sCUPeGZV4CxSSWnNprZUJj7jKTZaQRCRtdeogA",
  "key25": "3mEQX1gxaYxkPRoDj7qjrpxPA5mJZH4F9W8TwE7A8xS49UeGPFJemd1DH9H7RmQUE8SNGHHinxQWDGMt7Ghza2p8",
  "key26": "3XFMGSwgZup2KdFu2BpCn2zEug81msqyCXLmEpnkCKSyQ5V4AjBqExhvFLKU9fAuwU3Ss4NEev85FCdDbuxvKU4b",
  "key27": "2zsVmxhtkD6njpzvg4GQ6GDFcbmwhtGsR79hRKboAZtFA1j3hNv7fzzxrvFoU4vDyD3XDnmpUQf4yX7j22ohTtQN",
  "key28": "5qDiKwom25vUq1KiFaUhGsKyAvKjisrr71e7QT6gsY1cBgc5qykbXsX1XNhtuFQnorqSb8XjortEXmdjSNXyZTs6",
  "key29": "K8zExaeuxLntKheYkirLrYdgXb1NzG9VVqxLaTYtTwo26wH1QsEAG1owPsHzBns2Ah5QTXZJt6FxEB11Xf8qpEB",
  "key30": "3NHA5BWPuHu5v9geG5B3iSveqBwgUtxf9k9LaDrhphmWbcP4aCXpFqYPmUgctsofDRZKDEx6Tt98tyrw6EucyiFE",
  "key31": "5C3akFyRQ1AEdeFv8SzWbPGaeAt6NXy4mKXx6R7jFE4K1S5eF2sGkGWq3TETNgrb7HQmP2TpkVNNkMcf1mpg6ZDN",
  "key32": "3YFkzvVev6jXv9G4jBUJrLo9wKt6sxfQhxNxW6Bud34V4F7yoL9HcuqnZgAv7FtqPJMbLCa3gUMTjipFRRw6VmtL",
  "key33": "4of3wrbMyNPZbYFNLu8e5zz4rHv1Ne6J1bSCQ69LXeCJGkiyom6H5TeYZgndfZmM4gE14C5nYamJATwasSq4kjet",
  "key34": "3dvgByAYebD9EaRcCtr7RMHSmtYhYBhLdJxNiKeW7g3azPtnUAXEWqpHc9jaepBUZ7AWRwb3X6TeBtoP6DSqrXvG",
  "key35": "4Va1nhbFjUx1oYu9F8ZUofWjSSw6yczavRR9PPJMgJXR1eCbjyg76HKLjXydLG87wy58r64g9nzPxVYX7PBN9bkR",
  "key36": "3dmMpUqMEGKXcrZivu5kQAWz9cjZPaVsNWa4m8ZeqeLiwYQgo95AEEPxPk7W6AfV7Usvd8rKyCKq4uPLpWsxbktJ",
  "key37": "4D7aWw7qkkaukUZSanQooDygsHrn4xpHJXA2WdRSHgk8R6Z4PcuWRFWqpemUX995GkKrYCosuN3xSP5Lnirsy8Cb",
  "key38": "5ZzwVgqmMG5bn1Q11Muh2qdYf1tWQenqWHJvqnPcM7TQD68w3GVcvVrRBcQLHaXNDCBY3bwXUxZsjwttGuxMsYjL",
  "key39": "545JcrvxspbND5KLYPKT44RwiB5KAgExqE7oZNpeiJXSg24xmuZXcZEDBBgWHK5AxhbvMwRRDP6jL8smXX1qTbki",
  "key40": "4Dj33atS9XtyiE9aRnKVKPEbLfxLmLgTreqmjsj5BN7VCrgLXmB15vKjrR6CHY45B7Ro2Rc6ZQoJCNK5PcRVscjz",
  "key41": "5kLkDbTbUG4sBtRbPd9cw37qpZdni7htKnM1Juj6WTXTNxzzULiXaSjXpDqJauLHrtmGuihooF91gAAfAXLNNCuq",
  "key42": "u9UpRVkp2ZaxFkDuoTbp3z9eTzwUtDrpDDVeyp2EMDWgBBziwtSgGMteZZGe2zAyYzH415ZWq4i2VeEFWxU7KWg",
  "key43": "5FtuujGL5v9VHMxuaRhznz8MhWvgTrDxmJPsDRYqC1htkyNtZe3F9sQdkBpL3x92hddvLQByU8Nnv9u38qigzkgt",
  "key44": "4Bf7xXCZK6htcrugcVm7yqUXvdYxEKWxSy1VBgSD1oAwVfuhSoWKHaRhr3P8LXNQe129ezEu4ZPPJRJYch8bta9y",
  "key45": "4PvvYMbsAJ3DR4wF2yiiPaQtxzASyy26h95XGDkBJgCEs4pLhhngthSf2bTXt14jfdBrQz89S5UkReTaeyxzVd8r",
  "key46": "95N6wUsXJAkgZPBJPpSrMKrbZYtTou2gVnzgD4DKWMMqtkT3H8DpWySnihdcc8E2NYWc73UHJVFEGWzt4vPH2DE"
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
