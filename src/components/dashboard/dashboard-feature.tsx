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
    "59vD4QUbqFnk8RMAkr6hNcwZjSeyipNWCAFT7fny7eymA6S4Cw2BSJvSh6EBs3eLhjNhvQm1DydfviXehjfRt561"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gt7dfSniuWZEi68zGwcteJJK4Qjk27k1Z4ikGvXxbhT9E8G98Y8DGM7BvNfWSwUaTKAaE3WL8YSiJiLSPydS3vE",
  "key1": "5NMR9tqjdR3LfE9oSTpLpZ743A2EukYKh7xtwKR1uyy8FzwPJDHjtPCan6UM3ne3WLU5JhT2K6X5VMsjDvnzDzHd",
  "key2": "2vJAcaVVYD3RAvQDnG1JiBjbR2FgahBRAdVccridtPTPkxSMU2Lbph8m5aRqc63jyiBq55CdytU5QGxiu5nJ3Htu",
  "key3": "3g6bEeSij2M1Sm6m9jjUGzurgjeBKxECvCZrcd7Qsaaa4cZDg4AbhgZMdUnUM8DDE5yY1KE8jDT3FavP5jEBM77v",
  "key4": "HWT5HxPv4DTqB182s8C52thgrhd74s7p4icLbyvLCkoVvGM9GQd4BhXumdPPW1scZRX91HbVd1cQZN3a57WVYdc",
  "key5": "51JqADdwcUA8urjF8JUxksp2B5ztaEipJEq4P3YMCdZVSmhtCoKsrh4Uh9PivwGmqKH9dN8cu57kU3NoL8aeYH7H",
  "key6": "38uEBPG28w6eu88do3naFVcdY7zGNfWDsHJcenXbcXUnfsWJ7mugZ27LVrTFKDSftnxVGA98uam7QGFLHW51qQfv",
  "key7": "3qjVBVsiuYA6wydkvRH4boeGtuARyVXfePFEiXwKfvRwv63vvGAREpUSoyJFnutFW7dN3rQR9yQ8ztzTg8tr7Vkn",
  "key8": "5PnA6CGXca9g5Un727hdovpSvMjMLh7b3Qoq1dM4h71KG1kuLRcfPsEW12pc92P7UF6BDbZSBZ9Fud3Xb5Fjvgyr",
  "key9": "5MGjeZxJmfivqNpJz7rMjkQWmV4GJ4USyiiCDBBNpMQzFHsbTbWZ5KV4ToAL8S1FPF8vp5jiDV4avQDKtJLRXrD8",
  "key10": "4VwwNDUTCEeGr9Lkxk5q1hSzcHC8RWvYP4vcPSAneKPfGddWzzR3qNtSsPsGa2aw7TUyoWvxuNLFjWoMQPYVdqUE",
  "key11": "3GbCM6gVfS7qwBzqiMyS46AcqTsT1NgYvn4nezCYGfFGRN45L54A71ZtcSVeMERSHPQLy3wVdCu7fbBoHNmm9R85",
  "key12": "56JbyQa5XNEgvPKVx7RkaBgRPY8Rv2FtbYovKcWtybthA73pk4jyAqLJ9ja9AtymzxTALsnPctwz1cvQ8D6W7tNH",
  "key13": "42XFNHHZ2MsqSN8ELXLvzjmRzAu6zkVk32qZkcGwh8tJGBZUMX67bNnfSYHLQWLg3VNqmAYWtR3izKGfcXYNNP1o",
  "key14": "2rYMt26k58wYRoKdm4DvRAt6ppCSy9mVP8TJrXio9Rmbb3uThNeLwCbx2CbBo1bEDsR7jdTANoLTfU8F9adFkijt",
  "key15": "3JTKCMB7hzgRE3oCaZ66j33ghxNDaQ8gR9HY3aNVJkgAZ1gxEqpDqcEw9MusBVUbbLZ6raQhoZ7n2NUcF3xu6TYW",
  "key16": "5CEPzAhaLKv13WdmVhgaMbDc6EhPsoBH3T3LL5VrBBCaR9pMDEV3feuG9JYv11uq9BgQpuJGeF2EbSZAf7p4LDJc",
  "key17": "TXsHwDQ1c7Gxf1NsV226wy7nKMzXbEuSVME3foocNCnLcwcsqCWvje1QpMzJ1HvuySCxVfxeChRYm4jfRd7XRPW",
  "key18": "5sc5dg9YweWM8qpLPeo1tyfWfzPkcNVj5usSWeapt5KuDc2xg1gawsSbv7x5A7ndrt9LdJucg6apocBLu7rV6Xch",
  "key19": "4TqMzKX35TocGNsRaP2yGmS134tDnN9U8UFQfQ7KADoDWRMcg37Su3nD3gDdj1vBnXGKvH4jVsmRXsT5v7jX1U4e",
  "key20": "5g8vhYsz729j2TRRCobaEkDn8JvjurfJqA7yHFeU93J2tffuaXUpWTspEiQn8KEmCUQhkCxxUkCvyVB3QEKyN3uQ",
  "key21": "5bbHGYJoemVg1X5kBWRtMfAYGfFfUTZJVLru9afweKo6ogzs1QUzvsyHH2xVAAoXPH92Epxye68PXSKoUfxK8NKp",
  "key22": "3b1sSpmfwsSSNEcjk2faHdApuXascibWnBBMJmLHf2tq6h6LQ7wp9MBN4ypYGHV2USvXfb66PBEZXKpqNhTLsT9d",
  "key23": "2LbuMTVAFcRxBVkkDoTdroNN8ffWU8Ri7nmcv5PSokK8w86bU43ysU2a2R9gvE5Zjnc4DTGCh5NAZ3wf84G3k6HV",
  "key24": "45u8RQzaVfBcV3X1ecEJ3zYV6tDPAnCDf3p7RVu7pgVXf4WMEecqEfKm1Gsyg2tZwMB8KZh51zqvNmgmrd3Ckq3u",
  "key25": "3YobWWroSbLbJM7zPLizy2j6wbq1y7CvZC3fUqJJxMi67PC8XwcpmPmG4rWGntCosbdYyJa7o4zmjTvCTRdydhPe",
  "key26": "35uAYeu4VgcgLy6x2G1R2JtSg4ZtXc6zdGfxsNiH8FwTH5jzb2zKAJEqwjDEJAyztULyvqFCrpuV73szz8vh6xxD",
  "key27": "5TcLXs9N14mt31g2mrozdZpyHpajBHHU6y3u3LmafQZLWzL9kxmUVibLh9aUmPWV5P1MPcTmPVzB9KsfDPsgUSeP",
  "key28": "RTGmR87y9asRvDhrkcUZEaKHAFB4fB1Bzm4GzYjVSjktg4rKJHcqmNdEUYeuL412WcpCt99Bi1UxjooKPoMzjPV",
  "key29": "5tvHp6bU4B97uYaWYQmioD7ypqVdqSyprR3TU6dtrVPhUcC7jQTyJqqUDEmqRYKMqDatvcFmBsuGiD1LTrF2V45W",
  "key30": "yWZrGbniKDbXsxvGdnYs6gU3Ww7Qrx73zfcguFHrkSpC8dhtSq7w8FeXuGjEButirN68CnC4qb9bi8xqjxH8Lvh",
  "key31": "3dj2Co2YqBFv7TfnTKTSLZcHmmsPNixX2RyhenrV5NU4h2U2BNt9X8vr9nAYM6dqNWRbwAViFwrXyJMLAc2kcso3",
  "key32": "3ZMynKKCEumbJd9AG5gBWJZrYMhDpkAgpr13tYeZcy71UTVSbyVyucyV7TdBRvnrnPFmr2NXrkeQSRnsvUBJy4Cq",
  "key33": "5DZ2LmnGDarztzQVXw6E1JuudHCUknpJ3ZEQkphNKqaHNi1RmwL38ErVsWia9sBkaGMU2TjsBh7v5nKyN6GQZ19y",
  "key34": "2zYytQwMHMycVoyLHY2FK8vV5PH6obVQCw6v2WUeQ5QAPiLfSXzZSwKGW3RP7PwCEmpsaXoDtNkcypULqk5q7wBF",
  "key35": "2hQ86iUNGPAkGyydYY5KzsB6F7KeJDLHP1NDtZM2atzLQ1CkX7vmd5ny3Xuikh27BW5aVH8NNZBqgC14x1MjkAJN",
  "key36": "4TdTRFojoYRJAhP2bGoxB2jZQe2qRtcRRYLb2QWmcGVSrEYaZ8cKcXEhnqtUv75o7n2HD5CnfhnxPfgk3yFesbmA",
  "key37": "3CjnWXhgNnY1ybkLqqLE9gnamCPSaLShH4eF9S63W3xDamB33AnUMmAaFZoKM7AnJ2SEpZJyFXfqgscS6RWi8PTM",
  "key38": "48DM1TnpsD1shR7Woxt71Ak6XEncaFJ7LLL5LXqze1TarwgwDHUguADbVkdKcjmVxLDuLYasHChYmXG7ZK3QPqpa",
  "key39": "5viKrjkfD5kr21cqV3CgFFLAB3chQiuD6T8NrqLf2zv9jukGAVBqKH64cDVNQ56VJGP8z5PnqyG8sy9PVnmCoBhU",
  "key40": "538w5wVR7N1FXRhEMf7QvggtcQqte2CQaZhmPeYZfu3S8XCu4dymdYSciNVPyVkVbGrupHB5kZRFkdsMssM6aZfw",
  "key41": "58URCXRqTuxUmtEdXnsQvcVBrgVFFVystBohaXc4pDrhwh3ybS5QDpuR6bsF58etb5QMRz8mdzECJFR7krQPBgcP",
  "key42": "5ijiBCeeQnkRxjGVXQmpZ44dFTgu1QG1FSWyQbB6mp4Ws3qzAeRP8fqJveTg6xGDB1Ka89WWLAcHtMoY4c7mP1LR",
  "key43": "4kZAKdZ66y8A3MPX8GxmtWdSqcN5Tt1rtxxvhKQ1sT2knwknuy6wbLj8bDhF7k929kmmghRqKDfYGBTkoiVVNora"
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
