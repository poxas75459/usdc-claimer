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
    "4fXfRMeGWVKdVhdc77BqFKw7fWBJB3QZeQQmNoFxZhvbEtEsxtfeLT9ZWTuNACrGR4V9f6YSJVnATs4THbqBssiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5beR94SkNSpe5zWQVYt77Jx4iSUnCnd8YfSSnWmnu4oxPUnR9VN9DPkonPDPPBzAdkD37o1bj7ByjEHbzSA11ARt",
  "key1": "2Pcp1YKPNn8Rg6NAVoqb15ErgqmpiWZLSG8Pzk1HHqE9q8iBQaGdT2vYNvhydpx75JPpKqTBETjSMQRNQaAm2HTx",
  "key2": "4X9UugccrHfy8sAzDVysgjjKpaVS5zL9s4Wb9ErvBhb9rBQvfKHerEeFuZYGAp1uJmV7sUCkkv3m8hNwXCr1jRSL",
  "key3": "4Vp3nCrUVCDZkNmH414MCMLmGtMm3PCokq1151foL9E76KyExr1f1iKe6xpDzaGjPessMR2SX8Uv3tom7FMJNY8X",
  "key4": "5yb21oG8XPNH7A3yvCkgha4dqz481a34VZUHDJCDUGcAir6UNQLm8S9pw8PHuPmJV6BAwkhp4xUcHFCVwpEnynEj",
  "key5": "3cuTr1xeSQTDPhRe79KyCuPaptM9mzy9HUskvZtHBzBXPB67uPnhH5q7jY8uMmMKpEzx4gwqGH6eavpWrcZea4my",
  "key6": "5NXYGcoZDUT9AabJdenk11XkYWKC9WGKXM8nFeeCRVcsxeJFdyf6a12BzArbS5gnfX8vqNWjA1kN4Zj88so3XmpR",
  "key7": "2B79BtGY7Hy7bFW9YWw2iC1ewz674HbjL29tgqXD5xQXNCVHCFuzeLtU4LTRWnCcCPnR8u7H3dyWpRYMuGWQVREJ",
  "key8": "ifFEDUm4W6VKGHwG7K211uGWa7NTbyaTfuKXGvLYjGhK9dqbiwWqyA9oNPMxscmYrUWa4YLSMDo5EQvgKv9am6q",
  "key9": "5frSrJueJCLNTgpwMxekvwEWT1dr16c2viaCaoEScHeZK6ABU1wHxXTe5DuEApmK9QGEqdSX9ReVzryqcfKJRBmC",
  "key10": "244mgb1d3kj4GULW3zeCFK8KviavuGsR3abhVHMZG9B4WPyQegLz54zZZdFyuXt1fegbe7HsBKjzr1HmigQZhJGs",
  "key11": "57zKNbyXca7oJHF4iTU1aRDusv8HLvEo55F369B2MN9Ushx9e4DwN48SnN6UQ9g1ZicbRE9Tz4aGGxeo7csy3Rpr",
  "key12": "WUNAPhgnBBUZgqcjA47H9ThH1PMCDTgUmXymDVMEU1vwGWtLzW3mLfDcJGXk9KDBLNvSVeLxttkyoJcSpWhG3E4",
  "key13": "3qTS25yKQAYHpsKLE3ifs6E8ka5yx8MbXqPCRFdijMeJm55bLgU38b2wFRgcyjrwfoNvihhyykUdMY6nY4CsGBJE",
  "key14": "5TuhGpqUKEBEfft8bNoodNFQd5iEaBUbiciiDhjXtneX6J3FWaUsn5Zzwkwsv7UtQ38C2M4L7FXiJ17gggAgb6YL",
  "key15": "2RsVahQmGjrsmeCQy4nSbesnrq7R3m2BRGveKQeNzn2RBQcVw9maoizzswGUsqioQkcfsi1BPdge5y9umcKUhuKt",
  "key16": "2odfGDEXsXxjuyVRKXYjA1F8MXANPiCXHUNgcNFHWGcCeKBADkg7BcZX9DGymJuKXbyhdYcy9rSqUwyaYQv3Zcw3",
  "key17": "5QKULc41FERvpRkNpZ713hjmwFyDZqGF7mjxYh7nV8JejYoKthj1P2sg4UGjcgbnEYo2Dd8a2C4HdTxWKCrecYvu",
  "key18": "59BEERMHBSFmy2Rcxg3uXc98YXkZTnjF8yNrdcsir7WKapxTuA3gjfG5dur5oCFeyhkGdYoKNrEDCSft9ruSivdV",
  "key19": "3Xw1SwhkZJHzTruKYnFPMWjpeNQhuJTmXWHUyDtyY4W3JMTCXDk5ak6vGYBY8FyG7yQ1f4PvoUw5wjybmMioVBxd",
  "key20": "5CfAFd59D3Np38Kd6bRMkSqTikXigX3oreLUZSZ1yzX5oJ5a5jGKQf4AwvfsMUwKfqhLUvY4xcQ1CPVPWrAdcfH1",
  "key21": "4oF1huNRipyG9nLXgwJTebMdyo1G7La3uS4rkygPnwBiYYNwTwSKzMYyTQSF1jRwbHDpAqwsXdqDZT3URCg2zzWB",
  "key22": "5s1W47wsXXmaLqhzCJ8QhuWRRhA28AgRN5UVTfBzpYSDZZQ4oZhEKRCnRDx2Zk68NTSsngNY57azmrV9qw7yr1ni",
  "key23": "3WLKAc9RxTuKvBNFvsGW3mZDTUKPZWfSH4pjMJpmx2uVWvcWpgrn3KpCFwG8hG18aq62w15jRFnojti1bYvmFq2F",
  "key24": "28dnM9RFBiRiM55ngFTa9mgb2xP3B2xd5euJRX3f5kwiuNp5cuKr4hqpMctkmaiHhKPUagSqetmuw2ZKLpmRS3sQ",
  "key25": "5SohChJJH84Uea9phhxQpECBxEr4F4UoLRwYAmABtCiJa2FDF5JjKZRGchkp8VwsbQC91yz15e7tMKrwuNg3LMmx",
  "key26": "46477Cx5CuVGL6Yh1piWyR7AwL4U2FMvRHiZtj1zMEMxs4XSDdiVrZoRC3v3dM2cya4R75qS18XmJzeN5wBmk5Qt",
  "key27": "4C4iMwUU117Ky9Zw1XPfkWXaBbTLxrZWUPSYEtovpfJn2PuactAUC1gFFExeHxVY6E5W9MoTwvNyiCTWxAQqVSPx",
  "key28": "3HuQZTqhcWQr2wvN8wmTLAW7QeoH9poU8bPK8z6TeNrJbeaYY3yfKcajw1vSknU7gPrVFUXj463VnPnTVsCVrxX6",
  "key29": "3jWPhynzjmbzxn9GTCtyRiYXVQgXt94Yi9id4g5pABEix7mmkEPNfirju9bHJmNuNCsia8pVePfscwtsAB8rv1zb",
  "key30": "8mC5gTHFEpx8LJtph8Mc8HZG5jmSVvZyQT24jtTq7sbcmvF946kqt2c5NBBu2jC77oSynmTfXiEixp2mgPG5Xir",
  "key31": "ZZGkFyHZnVNVXFWtXYWt8U2vYWgBLWxah7nFZ6eoGmVJf4qEmAkjseaciomuwqix4KtPdrzCeXA5R3NGbiUgvTS",
  "key32": "3PiYKvhs6T6htKe4Pkrs4xrcFGi2wK79WfZEPAB2Jwm2iekiA4TuAN2dnwoNuy7BUcwr5b5W2b9pfXadyAD2eZFq",
  "key33": "2PYdJaAXP2yMfiVv24BuWEji3iFAuiWHcqcAWG7TNqeTkzJq9QvvipQt8qEYrTRpkSwNgCWPNJbjMbNWPA5vjHHX",
  "key34": "25PVu2sRiiEJjDFrS4gNXDmvHtwLzuv7y9KBhs4bhF9bKrUw4dmnPCjbeWcLxA4A265FB3vjMeYaU1u1MozMCRED",
  "key35": "2ASiB29xtTijNejcXNVEhnqVJdHM8AjpN54KVg3Vo3UacvmsgJanASkujjijb4kqT1ifeBQtLGR64Xvr899PAD9Y",
  "key36": "5p8wvxciLw84kyrYf7yVTNMAnYDfxNcTN1cCgKRkoAEcVCXdiru5PwBaDsfRSN7jfjXsPyi5K3Y8UHcktBcNBRfk",
  "key37": "4cmzRtrmiEmPR2ujAxMx7Qz19uF2ZNVdJEEEezjR6yEa48G7Sj7PbDydJAVHBeN7XCV9iybto7At1Lf8eBLPpPsr",
  "key38": "4xhxg7ddY9Ct5XBngyoVXAGqFmEZzgW9pdVJL4qDfjKUxWyB7615t21q68S86eLbH94KaDNpMrf2btxSoRZ9JXfg",
  "key39": "2ksiaBSEYA3wQDpBcotaCBwNeBpmHqu2235BCopAbAS5uSfL7ZpxRzbJ47ZDGzFwjAEXmjNnfyGY4UVk1kvmE1Gq",
  "key40": "2Zkc262nW5hTsDJ9iguKDGKUnaAS2k1nyEbpo9tnsk4bs7T4pjkwEnGqZUuHZswH53dsRbuEapbYFefKkDdRUsxh",
  "key41": "2utMVCQ7bBesFziFh1RNwtQ1npwh8APen1NrM5yTAQCdXsLJNNiSx2keQtUexBZwVcqY2KZi4zNqKSoLSSQc9H9B",
  "key42": "457sEbsbtZ7DAJ7Y55EpbcoGueerSTh39cY2f3svtwxNXwmX4zM8Tfa5o3bWfgmkgSTci25Frg5vdnfsmxm4xGLb",
  "key43": "25rBndYxcZ6ASSDqfZcSsYFbjRjeSW26q7VQaQDSHC3j6FWdm1c7a4rpu2HV43CC1aU5zt2tEbhzvtCgeMTEFa1Z",
  "key44": "RGtcFKQNs6sY3AGcN9NwS1UewQ1pjoutT4o83Li35YTz7boPM1bzXoeqEYpQZrj5GvRAJ6g9pgTWUz9eM8jJjAt",
  "key45": "5MEoeokMqgBMRUiqByWQYBUMcu9YEn2CazmhaLotgmMkVFWZPJC8nEd2uyx8GSuGYS2CopmNSFZ5YT6tSaMbepFp",
  "key46": "qjwEHCYPednQxENxufzqKJfkq2gpWN5vpFr3hhdVHGWWqYxeuYNs5tYkWqex9kXPRnH2nvGCrwFQTjn5aobjf6L",
  "key47": "Au3RDkZgutigJQtu2BrDprMLkGaND5fxA6pUB8UujF2nHcG4Y5iSLZdCfEFmKYKJXPUVJthLs3ubsMucq9Ywrih"
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
