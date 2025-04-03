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
    "5ZvS88GE8aawQAasRCYTFGLNUjJrJhudrQYkUJndCKk5T5nZYgtKsW5yQfWSdo7EUJcmaAP6BDfzNYbckzXQt61r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pr3drQwQFkFhjmty9aGncRWZvaztWWRp3hweSpt3CA43rWY7JYwBGCeh8w5iGtzxX8SGA4UFe8HkanSqsoM7ZWJ",
  "key1": "4597q4doM1fzM23BUbahZALMnLaAyZ6ttQHmczvbwAa6coUhXtB5AqRbGUX3DR8LJfMdDVhmXnU1HtfYtPuuq7ZC",
  "key2": "5vhcCcCmkA1F9Nz5AJiaA38pgP2295N6cm8AxskEpbRZjzqFgC4s31FskzdxNR93o21doRPKCUiM5A9FCcP2xohf",
  "key3": "53gk5ZjAdujN4RysRnJFh9G4tytzaCD7apAeHgwfMFRQd3L5sepj4DKMLyNRmu3f8GRaGo4RRRU3oowcJ2wcs3Fa",
  "key4": "2xSfSLzQJwQ4Syu5LXyGNQBqvUvDJM36sU7ijjVzDqj7qQuUFXVX6s41jYpeaDVv7LCTwjfTiUc76Rn1ovww5eC6",
  "key5": "5UqguHNtHeESSDdUvPghYEjUmFyWHiYz8GdDz6j8ERWfCHDwaVFc7XwpetE7CKk1QBxFXYX2DZ1kW9Hg7i7UMmXt",
  "key6": "4jqiTqowsVE7DS5De8dkDm6XVbdcG2uKFBUzGKYHicPoqtKroR6QYHDiFJ191qgaPPnxcYkiRFcLVSSSjVt3AwCT",
  "key7": "grvVpmvdgkgrM4aH1qF4GRyytiQ9b8wq37VHxmcCVXcRUNqa5PbGAfkcbgTE1qfsQ6aQHgHPHonE54fU6P9CFAf",
  "key8": "312xUkDPrwT75Y2PFTJyGKKPLiwNzjqEBcT5ZK6cGEffYXTGnsh2pHBnTbcJ93yrgn5Wghg1wL6sLs21ZwNMR8GJ",
  "key9": "3qoLFYkojXuNmMroSQCbswbj4QGRLJxiv3mqRACqGYjqB8iYTkUQBYHqkJimCPD6ysakUwTkAQkpSH6ZY7amF2er",
  "key10": "3YRUChMRTA451Z6gmFbXaHacWa28w3mk3XjfayUYcDHsQkuKKPrQfXkvFkhm3rw5Vmtzx7vtQmeRB3MDFHschn9X",
  "key11": "4xg4off9VkdJGTzbXtyj35XyjmVEDTHm7h9ZSF6yMzgCX7grBBKB7giQaPeHWbVfqyZtmwx77rVEPfoh9Jbssa5A",
  "key12": "4deTTCq5GCdauf295TzwiRqkDq7r2Ho67oaNHEKyvybu4Hxq898K8vCYeKjLvPecti4dTiuQaxfL3yDVBdiyvdWw",
  "key13": "5o2zwN4gzmcDMWtG7UZAqi8eByQ5VXCrB6cyzKigRMyGAPsFquaUBRMe1qrYoFPCZTdWo9NuWoWDFUNkVSjSpHks",
  "key14": "3stJG4HL25rgLKyyxGh6JcFuero8Q91XrHf1ethLw4t7cD9382oBr4ZbsmVX2Lcmiw1wuqXz2ZQHXoskcFWuPWeQ",
  "key15": "4zQ75Htv3hNoh1YYXPmvtym3xNEJBCjqTsqaJrTsZ7NQLo1WrJe8NpyE4UN6N17LMRbijNz9kMDUfEsyNd5E7TwV",
  "key16": "2L9Lk2ESy3iLxTh3VCPUhpA6PLyKudtjPhFA8orNPmAjXvZjkhf5zq8fRocc7GUJLWvkSzdT4AYzzZ56pEL7Tugr",
  "key17": "5Ppa1egPfegQUCXZD5isBGVY2atgjg8Bh4ZTws7K8T2EVmLafxbjswg3jJMDXcAhCvBc2Qt1wwNRb16Fvq8Zn276",
  "key18": "33fvXnuTg9dhLstryhjJ9UFbUwkVmgFp25Pv1ax5iQjgp3TikpLSEGxdvhySgKecqK6YcJSGPbSkopbm4BFs27SH",
  "key19": "5nspXkA5MxSQgz9n616JJigkFU6FSJvHDCtWZDn4pQi6TzchvpeVumYZQ9Z4DnEaNMRbzHVad6a66M6Z651EEoG4",
  "key20": "5GVJHpZ16mPD95LcWDMavnEV6GpJ7aPVoCJ9rWvY9RPsYe9zMgTphke39xYF6KuArLTA92t2MiS3VTpoR12c9hEE",
  "key21": "2RGQFP3cT7XPGe6enBopSXnEDWdnTScDE1j8QyHsdCb2Huswx11g5EdFPeHAUyyYe4pf8WgUL5LsTqwnvbjvt4HC",
  "key22": "ihjkDWPyLHYwZbGJLfdebvHDeUkMWwxFxj3NDjcfyeQfYo1X14hAt5ECz1RDeSohZLSoi5Ku7rRcdNmLUD7xVjf",
  "key23": "3ehAzMuwybPKaQNFQJEhvRD3Pzxp6pg3ggrCSoduRX8ztvKBesbRRgQ8pb3nHSp9oEuyJoz37RQSBYS9QuqA2Ygr",
  "key24": "z8z96VyjuCgeiSMpmy2VS6wHcj3nVAa526WQ911dfuNRNuQy1MrCWGKe7guGUTHsDBPc6PBTzi3to8WrEUDkLDX",
  "key25": "4dL2LF7bhLWC3bVjRa9dNpd6bmRSaPCzvn59oyoJdELwx7xf1YZX4wbDfacLTim9pRDT8DwmgRkP2ro2muGYT1Xi",
  "key26": "5DB14cn97izQ8TJPmPxxkCWLfn5iYHv1gEKFexR182mnfbAckQUUzwyCJuAq34A4m2aytNNZjmoa6PBwj6yiJ3hf",
  "key27": "2Kd3yj4Ag8k7RjJxmJGNqVwEuBd1E7RRxNk1dmoJpGLAqqYykGLkuvUJvujLdnDjTJZ3vTTvgwVRmhetQ93vM7DG",
  "key28": "TZ39JCUvjSSdNE6DZDTM55hWyri6KLvLo1EzfBMCLmcWEXoZmXtvMLHpRQv3DYSCg9E1K1gHqQpHYsJVjnzV31E",
  "key29": "B6yFvtsj7UgqdYEQxcsEAYD999idgWzdqiPYinFyK79vJTTYtTB67P8pkbRMuUurvbFqEhLrybt1SDY6XoGRELN",
  "key30": "4muYseySqnPBdssEZ6CDtVX2GA683bQR6PaLqgwdciBMBtotW5uMojZX5dHBAXuYxjze6DDVLu1J2MQrgmXxYtJT",
  "key31": "4eqbvEPLSz8KXp4WWNWdUPRiGNS4VATxVt8dzr9HT9v3kU9ctwXiBUd4smkVGqYeNEQ7VQMkEAtXqsFsPvCCQXv",
  "key32": "5MTWF4c3wDb4RdaGSuxnxcvuKp35Dky29oj8THYa8NYcrWu1RXmeAHtE3NEWrqsFZuH4iiMnvnFcdb641JXAPT1m",
  "key33": "k4pHis4TsAy21SmmoGTHcYydDEjEnn2irPz9KQjmaK79nQB3jBaQLwW91aFQ6TB1mc4ADPDzKaLAguvrgTRaAMZ",
  "key34": "2JgjfRXKo33qnyBSAL2679bWnUenfMHDGho6C7sQKUiFusQCJzFGV13DsnBUfpyMsJ2JbJqX5APCr3WqC5zMT4YF",
  "key35": "62bvg92ZvU4EezHqYL28pK9sHnnpEurcJTMrnapuaD44VvD6ArLN25uLteiFD8R8pwei6gd8WfiwSKJuppktjuqL",
  "key36": "4SbAjaBhoaqPHudVwYwwx1CpXKiD49Yb5XZpXbkexn954chkSXgRjEVxHz4EVRnfyMTYWdGWKWBFQ3aCgh6Csuqw",
  "key37": "3YzUR1PuxvrcGcX8dgouwJsvwZbLxQoZz1rh3XDFg2XeZQTsK4rDEN8ZsNz4t2VYXSg8GVayxhcDYexpf2PsX8Jz",
  "key38": "9o1fyZdjmDMryMjAesVKqcUSq7hgxzUFdi19XYpP5C4eKLXj2fueoMbgC73gcZMX68zx2EMnHLkc1vp5UdheL7H",
  "key39": "52JqCmYHPy1yoqxS2oZt59vV7WwXLvr3jexCvwCRq7NZLVj85Y12fSUoZqFu64SjmX26qaVfsSwzEK3s3NmRXgdT",
  "key40": "4Dk6NB7igQx5wYfWNG6qWnaSy94t2Jffdw1ud9HSoQAHTCdp7Gj7F4oXjB6tyGR8ZbJg9dumvjTJkU2ZP4azYJQa"
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
