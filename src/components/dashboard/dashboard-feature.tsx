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
    "5YQEerQGpU8v7Jp3aaQMB1TVnCEq23htpMNp1uoVbm4RinCrtdDWgBhWPgkt6ph3yuJf8cYgpoqEmkXgk2TPDeDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xWgiPeMX4BkLEsi2F128FebcWY6BSGeBABCJa51HQpoChHtt8owwRqQGk422nBVacfV47NsSpVmCss8m2VRcmeh",
  "key1": "4AAsQ3tRwuyvh3xEfgwy6V1ZTF7tz2B2UCcyRHKdZkZd63ptuzSw42HppJ19M8ihbwmjbrB5B4HQcomMQsWYvScT",
  "key2": "3sJuxXq57NXVN92VSFVd2xfhuaBUjvpspWaXyVnzREG8FjECVjYbGcuqUHFJtKkBwuNYyYbSBC5JM2HB6dEybacP",
  "key3": "26Moqz3UojFeHPWHQzs4pV9iQghXLH3rSy7G4EzgYmW59t3nLAqexckiz6Dy5uHwjpQqBujB7kAvZUiqYjaKTcNy",
  "key4": "5hEPoNthkwJgg5mkaCEGAgsqQ2pitWvYShbj8xYL5bEwx3CcvS7JhDRyoQ9mxxgyZwaea716A7tLXnJcnbu5Kuo9",
  "key5": "2qLNT5iwEVnYMPKxB7dAkFs76DWHzidUBaitdUVZ47QPi8mTTnGiejPgmucHv7oeY4gBzXZ2dSfbqxqk25xJeBZt",
  "key6": "5jUkDCMrVY6UidYNj14xJmHiic4n8fPRJDfvY1qQkHcX69Lcw8ZS3ogqt9GJaeBVsC7K1yKbuzkkBi8fFfGRpexF",
  "key7": "3RCAovEveic3ELrxve9YWFiRC4gAWCf4Bxd2DD4RvZsPFegH1tBc8QBs3qUggsdKoEmFwpq7pC9Vbsz1XczNQvZz",
  "key8": "49k1sz7FxK3mQ1ZurBhwkro17fXZAk5tquFmzgCW7YUTvYUekbc9CkfBeA6fqbYsoA3JjDWRWDS97ELVYjBH7vco",
  "key9": "642ZH1Qn9AHXpZxfEhK265s811UhrxHMSctC3hBcs1QDhe9tPuzZWRScmJ769ok29db8ihHykytQctEnXEL8P2up",
  "key10": "4ozMkisL2UNSPw41PAmecwqprkWztEbjHaW7bcYaYNGPrBiDmntQLDY9fcLsTCvyVtcrX74QVRPz3mcBrvkxMcM3",
  "key11": "2hcuf9r8kWU8TouFUtwW16rPVuEFhUDbbG1chVhLs4EnaaF38UMX5WrEez9uWx9n2rCcDtV3NoTvr99E3HYmmF4Q",
  "key12": "64RjaPXWxwZer4tRW79gFjVptY7RArUQsYHthhtaXwwqQcU4ZaqEB93HC17tUGmzbzP6pF8ieEhnEVB32ZgzoY4B",
  "key13": "o3DgNV7dxx9U5oqSDu2yCpWUJjH5iUt75GJCK1DVioPd4JsUZ3T8j1Bsaoc3b9MFQ1gJRqHbu51eRxvhsuV7Xzw",
  "key14": "645jKz3yqmdXbnJc8Y6tSuhze2EqsLRiFLjPMSFvA8op3dKP7naw9sZtH5VRVVPGKd9wHKoMBDZE5cUBt8kwZXVb",
  "key15": "45j25PddDiCkQhCta2nenfYHFji1DqnhFn3PYvmAY1PXLUFQSXtZPDyY3EkmVVdKXNvaYDuYKFAPUkEsz8cGpdQq",
  "key16": "4i3RbKunR7EivsPc6Pr5FmVdMT3CKEGezquqqZBjA14CyY1MpbaT93CD6QfQR6rxTiCeARzCJi41rN15FfN4ujBP",
  "key17": "5367e6nea4cxfN1pgZkrLdZPfqEwacKcavKuWfZjS7miSdV3MBjwrZERiKquGVQSjsYCD2HvGkezQ6GT3hpXatuC",
  "key18": "3auud59YA6fAnoPhQZhCTunJYuNkCvcBMasxarZAEMrJN4Q1afhrPUt6FQxFHLQdkJESC4j9PCnbByYbBMKruG9",
  "key19": "gHsP18Tf3jAve1vcTb98GveWMiLm7m9LC7jb7zP6WJfByAwMoeBeXq8oTaAC1VzMasS5gxExCpny4VNPe7hciJ4",
  "key20": "2QwK8YLpK5TYWGnXekQs8N6HA6hLQv24JeWP2k7ZGGQmi7VYXWF2aUGkundBS1AHM1f7tAVNUmAdWVpxcUWm6LC7",
  "key21": "5fH3DW32auVpZfUzkX1JC4ZcEmuTyFL2mnBiojJhefBKM8Vce2WB79Dqjzf7SHVaNNC4wYdBissLMVy1HDAnZ1i6",
  "key22": "K54MSJuMyJoZUsmFJVcx55LGTN9G1FwjhBE2N8YBVKnaHzrDStDP82QqZiyiPEKLjv2Kis4WCK14eje1juivs1j",
  "key23": "2879GUi2KEjvREmmsNjxgSujukL6vTjNt2wNC7cCsWN3WDuyhP2ptyvea4zomM8hBVnPH4bZs8BYtTFusRj5Pv6u",
  "key24": "xrjHcLpZEiKcpSunBLFQwSYnggfeYU78rVcfKVtFmCZgiPhDXEx7bzCVHcbaWAU6YncMMQrFufyajqSLhLiCamX",
  "key25": "5UfhuxaW48s44ojd9Uuj77mrby9394s6F5ngavMSmR6o8kiKbUVuYYKo5tkwMq6VuE3XYWzxj7P3bMqnNa1mQHFy",
  "key26": "5ixdxiXA5Skwa2k4zkeKVQ1qp94BbuhrHkkeTo9TCTRNRgTqf5DSy8kma4LShZ7vhHFg8sYjoMJ4DHvEEdVH525W",
  "key27": "kE3fFZ98FxrWqt8qmPQGmceLxbbxzWo9RCrk39J8b37C6URqsTLhMY1poDnyEG6khiuqkPnXFWsgxEBZjFFfYPR",
  "key28": "4aPxFQCXWFGUBTzZuhJzDEPRtqQURf75ay8kDW4fTEZSGQdgz6LFkzFBQXsb95qf6mTgwygPCBf6ADU4VdJGeBTz",
  "key29": "3MacRedqqUSiVoYWjCub2pXS4ao2o895sHYMjn8knGgV5dmSd5g1JDNfgZR2LtUHmYRoBvw3pLLyfxr68QQhEdhu",
  "key30": "25kyJCat3hTVFn6ngwr8mxu1eN1e48jZLRumdKTREzuQ5uXCqL2VCYaUs3dvj2jQgHrXjwteK5CtRHYyYtPay6AT",
  "key31": "3y47ok2Q5HKnPN3JmMCUKyBn5NQnP8SWeRS9q3EQeyQHbjsVmXWL2Mtwegf3aevi6F5YVryuGnjZLu8cwwLwZjQY",
  "key32": "3nhLCAwFABbvWFibV2C8uk6ZeKo1kycrJ9vwJw3chmZQHrpoPQbWVkyRXWi3eDKdm3qbDGtJ12ZsjGWqC24b511V",
  "key33": "3M2ZtZTsCTxViVTCjGLPryfacCoXJ7CXsWMvthDbYXkt53KdqaPPaQccfC6kUks4zvXcx9evRsRSSmapBXDnzLPs",
  "key34": "5EBdjsDTdqeTesGmLBkqmXDCBrMVpHxTJBc8yyjGgAG7x6TEm2e1K1sHW2caniFz2yD7T4rDbQrHy9kCup3B7K8R",
  "key35": "59c5hTVHrRK2f1QkAGoRrSS1zrhHfZ39qnLhtPX6eRJM1isSWAP7dftV5q6T76GDxESafqxMVSpzKJF62NjX5hbx",
  "key36": "4Nqm3eFTi8ChjHEvN4iRpwirCNaskd6vtUwkZB6KgFz5y2KswdxtAfy4vKzk8CzzMzsNFjRqyXJcPK36f38XyU6w"
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
