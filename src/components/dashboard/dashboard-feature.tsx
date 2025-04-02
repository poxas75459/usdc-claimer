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
    "jjQz5Aj7W8QWGGkSFJdRVD38KaqM3LjjB1Jut6a5R6GxSRCAxBShzXb7q6qAJdoqkRf81J9hdvu9jSuubtD6tcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WXcVTPgR4QeT6QcGiEYPVjhmQojohtAksxGcvsatXuVRN9eBnm6fvLzVXsADvSJvEP7UHZAiquTwLnKb1fhjkW6",
  "key1": "4CzdE2XjqDYd9Lx9DJ35CWGUtzYWoZbC127KHzn25JZaYQZ4DQJz1bQJMzkequwpuiPpYAeNLxBPn1XdPbbZHWYR",
  "key2": "3F1DXiF3Xb7MTRXXdfqWQs66kdHEzv5TpptLdVS5FwvcGdB5dJW3bsEx3AxgyugLF6tGiMtiW548ty8C8n99trXF",
  "key3": "29TW2VAfsE1cE1k3XRqRnfi9LFyzPxinicgAs9rpFEVHzFmM5euvcURuzBb9KNSs3VburA3nP8uakcy6QyECoAgv",
  "key4": "4igLekxyaohfBfugFjqc4c8NuMnSCZ82Pfu8NhHApWHVMV9844UEGesCvZTYBS6AyjKcjcVQurDwLptzLd7Fh22k",
  "key5": "48sYi7Kh53mzMwPswoc46dzxT8XNZpiCsZoZ3ShDXoLupAriBh6cT5yCmomVki9wY2xDDUt8PHYR4TP6KCyYhLGw",
  "key6": "3ZLRnRCVSrCuArx2z1aKJYzMfueasHz4EHBLkmqiusaHeAirnDeefA7sYnj1tS8zRyfRf7qm6CAeP2VaWYrFyVyz",
  "key7": "55jydSgh7qRam9ptgKRgzHvEfwWb6cMMdQV32f68xg2n39ph6WvWcMh3brkGfoa7cY5m2mYbvuuBaJAV7XS6cbQx",
  "key8": "2fL4xvrv6VpW8k5EDNirVRBzouH5qgqUBm78wvqUqaKKNQb8iKs4uCu6FbEnGHZj6CfwUuW3bhjKaEBFfFdPpZXD",
  "key9": "3TSja2s6GbcAWmN7vUdUiGFxKJTuzu6PYRvqcR1xX6rJ7cJ6B3y3CysMRxfZ9CvYHD4BDNQruhPBjfKBuTf3GVam",
  "key10": "3HDaNk3adTfrgxyQ4Zqmid68oQcPosYSHALds6wUoHvzzYpLkzAcRTsRK7tPxAffQtFuayYJeDrRPSN5wWWXGZ13",
  "key11": "uzDiTzchJU3pufNPJrXhdkR9Cstwv8YhwctDxNhp8afVY1bGXZ3RQT5AzzPSS3ntGxG8fNs7qtZk3LdyFf52eJG",
  "key12": "4qwzUH9WL6s9jPAgMxB4VoA3giyzWnRjhZvWihVUdt7NCyGCxMMACEe1sAonPttXdUhVxL4gYLcyNkqfeDiMMBj9",
  "key13": "31CwKzk1JVSjwG6inPEFUm2NnF3Rvn61Uqdo9VuS8KF6YD7kvjduaE8rDWKNGBB3tXWAkVbVet77EBLzRX4zS2Hs",
  "key14": "5zdeFwp3Qkv7QFbLuHpKaFEVDSioQoNH3nA2mzyebK9gvtPSBNeHakYUfSWKC2bHjaFWYNxJZ4xoR3G4LeTRKN9U",
  "key15": "3xwChaZZjH73YhgAs4uVFoxBEpJzHE5uexqJDKqtkTxMmA37sWmmqFZRPHFyfKhCYPEg3Ap8mQa7ECrJGpNFkFSU",
  "key16": "3zFtNe2Hwv7vJUJNdaJEDdJ6T3HaNLfcUVsUoBzrnkSLF74BHVxMryLZgqVVvHTGeN2ceJQBPb8LoueHYU8d3jwb",
  "key17": "kMNeuEdgtx7LaDb6iz4kW24c1vxUAwatyNGKRXZGokjwzRnHi2M9fDbxVedaeAQTiuHf6ay7kueGZSjCEVAGkNL",
  "key18": "5gCt2PuXFNemMEhpkUsik979ai7BBYF1oqpchSsWp51f7a6zdKCBTbWrgKyfV251yFyiJuFNekf2dEHCDxQmL3jS",
  "key19": "3tQRsgrzCwfwsswzkj7BBLSZuRFVbrXA518TMDCajnsdfJTu2Nh3RKGHAGNawRRkGr3TFwzXcN4w4aRmzKMBgyX9",
  "key20": "2eWyv7E5RL9M7GvZBYZU9EhA83CCaJyoK5V3mWBaeYqgBPDG9DF36ENh1jzxdzUixu1TNS8kLvuRH2YisYhyyirU",
  "key21": "4vvW2nZM87BpYZTb32YvX2QiA93CTRKtLJxWHMDKJYFqehds7TkAjHvKfMeQRA2nb9xzh1ExeLjjeCmzfJV9i4WA",
  "key22": "3xRSvASqzAXizCLjZS9ZvkffEqdMzKTxunMtkjgRnDxnzA5HwxtF9QCRKY64bZpR4ygWvTkpDgsSkFfhqAGbuMSx",
  "key23": "fthj2qLwXnYsXx341qcBXctx1yFmYVHRR4uFujThvmUyHvsqohfHjdn68weKVy6CSoFDZC4J5cqa8V27v8hZuLC",
  "key24": "2HdLRAzBYkvVS6DHVExze9hP6y2ndBgT8fiKxB9V2QqrTAGTnL49WsruJW14TDvK6EhZezzohH4cWLcAVVw2vS85",
  "key25": "5g1fMX8e8hT6m4mkaSVjyVhP4StG42dK4WADuaKgXCotevY8YLSSnsYoZeJkU1KyJCqjJVNp7TQTn3bBRbtViV1s",
  "key26": "3Qav5Kg1D5jcHAGjfj573K4XzQ1ZLjF9UEcK5dvW4L35HovNPkQatdwtejGppqAUykfaPDopPQp51mDoRmTtk9so",
  "key27": "znrWCDAtNncqMsomtG9QJ3Vvt9ZAoz1hozGaq3EhH8rJqycJc6NFEYo68bjJRoRF1zXQLevXQnW3EPSDzJ2VqtH",
  "key28": "5J5U6H9qW1WhCuQfAwGAaQfn66EnwLceKm2kyTbnwgCXUkZoTCz3uz7TxGsYGF3G5nWAXJx1Je7eFCUN2JxQxQ6k",
  "key29": "2V5pGdJ5DChXnzxBQ7mR9uQg66L74vn3uBgcMaTPWd5iYB2TGxuoLLALMG3qc191zDPzsDBhhWanM4q8sCpT8k7z",
  "key30": "2pbRXV2NbbgWojNPq1bfQ1Ynwa5KpkYPkmBUkyHfPvUAFPSLkKU2dqY8hLn2TU8BQvkt2ZJYXz1kXTknj8uTssRg",
  "key31": "4dkuvU3rWbfx38MQTxRPS7U1cXj2eqQ54myNrTy6zmBiXofEXLqxWMe51qLss69y6Q3g3S3jUd4v4fkCrcUthmh3",
  "key32": "FooLCFUevY6ZFj5JCHTKPjzr8VGNKdbUii4CRA5HMVnEzmHDa3UizK8pMncBFmUuMix1EkdZchDgkgU49i6fwbk",
  "key33": "5hGCYUvPdueU37P9CoTYKbPPSz1XYa1td8Gtfoqs62GtCtBE67VioCL3tmdHHGvvn2QC2GVgHq7XYVwUptmMqejF",
  "key34": "2TqrBkPMWn14yvV7t6ud5od3kHTV5FHHUWtQpVAhFLyRj9GpXxKbyJcQaRV4e1eVeeNHrmpEu7qoMMPhPNhSauHY",
  "key35": "3yLFjQrUozvcMrRvTUaEYUqAmqGunAbM52rQCWbjEA8U9WCfGBMfAVqAr1PhnXEYKXqewA9f73ySJ5gTZTkSuxnD",
  "key36": "5oxDwcuiVufyPmjqjdCeQsSo7FpWWY76jPY6zhG4iY53jgLKAhgeUdDBjjQV7gxUy9EVXro7q1bDA2Gb94KeyTqr",
  "key37": "4uJUnuHPCYJkmefFfp7tHLiXVzqCRWoyHnh7v7fdm6twKq2pcKrPWBkJrqJFuKX7ar88ynXqHkU1fVzqQTmowYbA",
  "key38": "3oLGogo1k5hfd2JSEbKvM4j4WzPW7ZZpVPNGyGR89dTAtVgWbYHXDEkdwhFPUZEUzvYydAFYP4EgZ3cRSxCdUo3M",
  "key39": "4Jjh2tv8SYxvsgnLHaneqsdop8VWnLaG4fuNHfabCLgDbpRH6AfDgxaxBjsMGJ5n5cbdShxJavWYMzA2yEmaCiXP",
  "key40": "4cb7TTd4CdPAzo4DPnvh8LLpqyMSrCnJoRkqiJfaPiYDupv4jWdkG3uGXPUrbYjL3zXvGpaYridn6FDkm2DLFT1z",
  "key41": "2koc3spSuu2hgEK9JoKXxXcCXRmJDoosDyYyvMkckLhzsyTLNb9jY3ke4XA3Yu2NwLGehkVf6sD1Y1s6mh1y3jAW",
  "key42": "rAkphLYNoKqjohBTcsFPBW5GxARxg6MZQZGk5LAQH2NdTfEauq6d3xtSyjSrZTrsbYLp3dPX7WDEbaBLmS495ar",
  "key43": "2AW83QBouFPXBmcQYe1MUeeYxo2ssezpz2B7T7wMTFJiihqRnevFrYD8vRzH6Vku4puL82ctb9ofg333CM8tY3pB",
  "key44": "65Xcp7ABvB1pZDXDnAp92C4Pwa7t3hfG2cgG4JRNKkWndVX8Ghh8ZLnKqNbgBwBzcYH6UHKs2EZvDAnY7VBHragW"
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
