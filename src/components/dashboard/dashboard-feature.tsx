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
    "3abC4P5SH51h83t7L4Ps6yVHwm7QzMfgPLAvCjmAa4zs2JvFsuDt9YrDQfk38fBrCqumdfonFmA4iZE11oGAf47e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g7Wboiy2Sx267A7DLzvuTtzi2hSULFVSnmx7LqbVfhpxU3PkHVxMrjAayxvYmcVBoFqsXUdJnPTQy7q16KuUtEW",
  "key1": "3HBoo1wY8su59b9kFiNNgSshTN2r5TzFjwHZR4TMhcBWdnYEhBGks5WjFXj9e6Mu1Q5yVXj6o1QtHv48LmB2jX17",
  "key2": "2xqY4TTLDhjcV9WxMkKhSvT3Ry4mofoRiDeEftjeZqahuqWDwNVa1woBWKCBdJKak3D6afzLLZVmNukZwNToLbD5",
  "key3": "4Pm8YvfeYtN4bp74cLjiK3YNS8nrDZpdnqKW5qBVrB25dtNsBw2knSGpPYNoSc5XMcBw4iPo3XFU6jgnExxV8ZFN",
  "key4": "3vGNaxehSimNVmBqkCbeerAMRgAoubJVMMnBY7CyLLWahukCpepmQkLGew8yyHgeqQGZgLjzEtnUArAo19SDURKN",
  "key5": "24snxFZrnSDENdRt2Yekzomv6gEBrWFNYD8fCEpT3qsawpuAC9KdWNumVUomQ68WaS7yTD1iXeLFvnFJ5NcoM4AK",
  "key6": "4aJFNMk6TS6KRVvePDfLevsMZjV9gaK2FF9BUpSwbXHyRUdJiuFL7BF81hRcS5qZY3H2RhrE5T43XSFGjmz68mpq",
  "key7": "5p8obnsQMCSF5mriQzB6aDaYsUNABFY6SeATSPKEqPP8cy2arHJ3E4PM81yFYqP8icMkViQFQMzYJdf2qcCkbtzp",
  "key8": "34rSLGbEoqwVY5Sam4pMqc6mFcoFKnSdt2FzmjCSDaY58MjjbepbQa1zYmeNfFCRMcSwEKZyxc7ag86dXDwPvW1T",
  "key9": "4RcNnmtBBJRJjczyQXu3emHDk9WAdXEAfC9YwDJcKMPjJ8wWurN3ZXKLpu7iGLMBYZAnSChPAdHrovkmUxCWBZb6",
  "key10": "Dx6HWNNBo7gt2StSzyhV2zaATGdrHjiS52pU1UgZRp1LQt3VPwFZVG4p1jfM6mUSsZ2txapcA7j469WeGEAnWJa",
  "key11": "4Czu1e6GVSUcL9SK3bExiCTKQM3Bxx9Ts87of1XMEtgdFJffsegsb3cgVn3hhaBtcUkkJeTRyU3PkGPKrPXwreES",
  "key12": "6134CaVmG25H13wjNGpt4eb3i2fbhJGGigTSCTDQQBFUu4a6KGsWZLaKmyM7SLebjNHZPRHVmFXQbaXFr56G8eZb",
  "key13": "5jKibAM7vB7q589ug9zD9VeoFTFdmzdwSDGnLJzwVRHnntfBLL2DuLSqCqFmdAq8vJJBFSRB7UT1wAn2BV1ET99",
  "key14": "3e3Bg81uwe36zqB3PxncVTfViQ1XoW8FU4ofAA1wkWcsoEoAegMrVHwKQ2JaFdDGJH377zNHkTAJET4Embj9DLap",
  "key15": "iTb6kGiGZ8vCowwoZm3dX9CyqzXk5csH6zAuv8qP8zEriLF7qbhwng7QXQhoJgVoHu97XJzGHbVvYPJojXaKYyd",
  "key16": "zxeS3Tu2djxtqtoFCNSGyQXF1XyXZYpiVL3v3AK8FbivyjhJ5SCW4AKXGiTD2K1E13vpJiFAukRAa7xMcmmqUUB",
  "key17": "3UQmksfhoY6rit3C14y1do6Ymm9SJbpL4VymikrT9RKaGa2jgTz3rVquvdqSuj5g9tXY8Px7yiS5Lsuy2WuML14h",
  "key18": "5fLpR7WkUoDjpFWyu1b6joGBJ8JN9XjpDWA1BW2oXjpFnfXzDSQpBc7vDAx8TU13f4L9NvZ2bjHJw4chzHs6fhAx",
  "key19": "2453TGkSQpmm1PFEfqcYTBttN4xwMhgwUVvhkww2nZT12JPSxNTiyeMJJ3GsGkxAQzpfT7o3YqfGiP1aZVBYbi33",
  "key20": "4deJF3V2vwMMYdhD1o42S8WcMbge7FnsA6dYvt2QpK3igxg3UmXZ3eedaoJKYr9DqSxfZtm4cCt83VdYN31MBJFi",
  "key21": "2wBoCEt8pHzWE9eBrxxX2ZtwU3BL3JXNA1Su55KCHFhxgp2F7zvatSYTvmz5zZXV8n13ZtGhBDsmqSLoKPWik8sm",
  "key22": "7DRKQWhxxW6rAKfM4Qr1xxNHtJmUVADZjfN2N1qQ8PxBZwkTf8EPx8dqtkvUgsVxhk3YHE5g4QRRzftxxAn9GQS",
  "key23": "2R1S5QwDx81TdMjdPxBmxuRBgMvcYoCFq2JbhzLduV9h5u76jh2rhjXohsTBrgHMKFQpJ7WqW6RzBZxffaXgH3Hm",
  "key24": "ymTmAiHSbafDLgr5wjDe9DjWXkQW5W4trfaAKZR3yma3iXRzeMpdo1zENg84bFb449oUNeeXr1sQzZmdfe25KaD",
  "key25": "2rQNhwHxJ1EZ4PnDRgXSgdvBCMmNRQanxrjSTvpW4kqyYNYRxkihSkF7gbHGQV7gKjQVMq35f3uFKqXgD2DHnwkc",
  "key26": "gTUXsCWXEED9i66HStqHcwQrbQ8VVWw7RZi3RkqTFLp6DpfoR6JVjFCtJDvf5E1EHoWNT6ScHGo6pQJzXu8zE7y",
  "key27": "41975zAQmGYfYdJSMxGbev6AsS4GCWQBdvmpWqQgc8m4H7ecBupCUVWudtLvbxBfejz7Hy5r9Aqz8VC5erzSSg5b",
  "key28": "3WgpXyHxDjB3twbo3gynL3TWFWhST9Re7yfuXoJRoTf3Nt1NtyD91926dBXbPq8Yyuxf435dfthVSfSbySQ8LYnS",
  "key29": "4rWLpLGLNP3ZxkzDFmQhVFrt2vBMeCUekBy1znNqVyJtVgcJnYt8CzhYRZWFvnKFHXXeWacBvaTF4fomoJbZYLYY",
  "key30": "4Qd8u48f9MA9tAdoJbNnSQ6qXGMg6wtjYJ178hgfeWy5JHqCk9Kf1J6fg4ks5tRFWNqfcXUWdwVucowt9Lu9fsuV",
  "key31": "2Ep1Xm1dX7wqQMr4K1R1Wnb2uBy25eHhyNGSKd9g241Bjen4Xr9u3r786QpMMVpNCjmBrTxmRNVLCAaD89VT1abK",
  "key32": "3qtzmm1jBzcX3FWQJycdUH3BUUa1tFU29dYiyq1Ap25be9hVf23zGXn8wU1v44sAqTgpsApV256SEbyAhLxBCxQX",
  "key33": "4Dik83ND3nZpLGUSHV3PBnmRSM9KgfCrUxoLNv5UTuey4Qwktg29nwqpyyxdSsQfG6xCn8fcRZrZPwmEL8SQj5Jr",
  "key34": "3LH5XhmS7R6BiV8qnbYVxwsQXERLmdrRbN3uwgqAUhDVNTvfHE7SQYQXXAQZQBSSMzT9RLwkqGbgVXYQX6bC6Q2C",
  "key35": "3HdvVzgDoJGp3mpYuSZQeu3u5xNpFMU2AS6zoRbcLnzsrzFnwr1GKwgFeoXHWtV7R81KKM1T35xpQy2yFGLPgdja",
  "key36": "5fwirHts3kx664inh7kpwt4VMeUE6A7H7YaToEMVLwU5YxPjoe2hjxsH71CsVGcjLGxADrTTqSttXa1Dqk4GAvXk",
  "key37": "54Cyc1c8W4xKp29zqQCKwoogh14eFWskLnWbH9LnpddUEtqaFy8odRb3jM8G5Gk3Km5gFXA3wW98xA3GMycN4fn5",
  "key38": "GR6SYZb3vh8acV62kQHxNF9aNnu53LjVojytVpV39BPaq5yPZDXoRuLQjoXGz8yK1Ka19yHF8KZhJdARPVG3Ea6",
  "key39": "4y2J5CVEd3eEKyTmwCdNjzKqBahsLi6KeLkLJwEfKbQHmeTyi5sFp1kpj3xh3ksuVSydhUB1TmWNBqjuWy73EYh5",
  "key40": "4XqZdACAk6Juk7Ym28e3B31LzQu9NB2SJgz55byjf4a9zyjTqDeSZGhTf91e3MfC6sYb6e8j8FwXG7pEEehZhvDS",
  "key41": "RZapLCWsgbPyd1QkbQY23i9h1eRpReJ6zKJ3EYZd7CbdgGJAyGUSMzggLgoBaTdFu3dnGoChXGjK1K8qLjitVcT",
  "key42": "4LVeY6NTmKDgctv54VxR9b6ZCKX3fnwKNe3ijVecMktxZE6cdeY7vct4CbDizpRzQ3QZnH26x67sFJMSFVZNEWXG",
  "key43": "37ckBxYXGQDZTYdnEfLPVrjZNnrJZWWhU1G8ALcfW4eJaBkAeQsPQhcvk4skbRZyhbTYukM2a4ZEq7UrxYg3LVhP",
  "key44": "2y8GJrcA9NL7EkWJJHpToJgAttTrUNT4E3PAo2PS8fL2fVtCxfhFfKrfAZtUjLH82Zqe6thhi2awXQDVY141F9Av",
  "key45": "2Qp6HhxYFatuGbBk44MKftLipyprtBYezcoX8vjZ2fvyJwFhAa42uBY71JArAKnDFs2WufGfAPg6LJUaK9WnYmPZ",
  "key46": "4xQX7RrkxRnbbW8U997uE6kkqfat5vtKWpRdjxoRTL3FYHQR97KipvxxsvbJTLPrmaFF9iQek2ZR1qebMUo2qud5"
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
