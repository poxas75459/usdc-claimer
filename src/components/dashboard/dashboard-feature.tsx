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
    "3YQSVg5hHMevobBZqahGTvZPsKaZk1eog53LQcxnHQMCJgHDcQcG7Safa4RWTSsmB2MkvbuwEk7ESVs9DwFgiR6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BARevdYgZDAzVSzPFsXqrjBBcAzp6XPyMzf47zQSUaKhomUvpLKYiK1cHZSQyhEmqZ53xBmFY9RxvTnqDPP9D7A",
  "key1": "LNrjkaPRUUAUcBLySNqs76kJfFSZ9F2smMo5u5tF9LKXdmw3UuRDvMwXhdtyAXNLySAaigX6q7BzGTfEKMVb9nx",
  "key2": "4X29SRq4hzQ3L9PUo8QGKFALbuMK71rot3BFaKD76qWTu6KJKYPYB6uzXSEJM2xs3XZ8MteszzbhcfXWbhTmtitX",
  "key3": "36q5fYLcBDDNpZQz14m8ky76XM8gQXbyaP2iqJaZBi4ZRn1m3KkpCddsQpDBEzpuEJrNKac5P9eYwZFK9hq8mew2",
  "key4": "5ZtT7Hv9yWUxYuXgGPXnne6BSC4YbmQBfQ2Ysp3n9AFsSRQkre1p889EiB2y4n2Av3uu6qvYJEFWJWCMM8AXXMuv",
  "key5": "26MgzjVZXcCMPqerJZiEj7cpKg4TZE4hVnrsJnetkk7DG2eoFTg9Bt5A6jYYSu5H7fHiXnGbpiuU4Bfxow6diLZf",
  "key6": "1Z7QgbiX2LdskdK7SbJLMkDnsTqqwZbXL5LDUC2YiECVi8D4PkkcCdASzwixKvSKSaPNPyrjZ5uVXc8Z5MGUy1C",
  "key7": "3ucMzNV27pQnzXdxbRYik8cq3YSFFY99dNno6EEvRMz6C47b5SRadsTBfnLXTMvjAJZ2Mbd1xKZquyTKKHmRxXSn",
  "key8": "5d7WjhpaYhmyUCV7FcvG5UoaMtE4iEjZTJky16QqoeWHqTRRFibVthJuF1b3gNJbou6wD6fNbgv7TRpKhdjwta2s",
  "key9": "tQyoph3HDLkQHSXv3ohPS4GTm2EKvquxjjyoN3Hee7xkgyYFfwCGXrojCovUCHgWgNDRPRFhxpePZxQmyPwaEtt",
  "key10": "3V69rrSpCe52BQ3jo2VoRw6jBLESU3NxE8rSfykDf1jHXn47JfHfsjMoYfkKaPuujsguNx9yESKnM8ETM8CzDGi9",
  "key11": "5DrFeBgkBDLLQSE7Xe2fdu9hnVi8f2Bjb9ukzed9poU6Je4ugDJmB5Qc2BbgzjbB4JzRdfjd2nuU58UKyftuC5h6",
  "key12": "3TPwozifBRMoZukgZu657zYnmwS1Yqxkw3estDNdSaVpQW983PDRfkW5sKvd6xzGHdukABG9xhx5kyt7QYbDhjSd",
  "key13": "5b6Lkyy2Qer7N9a4et8Fz3TQsvP3iwhoZHNB4jrxvsn42YKBZCTWJVUhNDCGok7HuhPGJaFzgr5FWyHPC4Ng7Gzj",
  "key14": "4dQNoZHFo858aP4c1Jvb2Tvz3RtF7ogrrwiHrpoWkaJoBKuw2NGhQWH21SS2sgMFWcBK3StZVGcPDTHvBASAq18T",
  "key15": "r7nhFyxgP47anscZeM2mZfPqb1Artas767A8bbRN319zN3QTAvLEAD6j9ELxuaVYq8fLG5c8ZZsojQq9YsjGwsR",
  "key16": "2EPpmSaBj7pAULb7JSmpYgLzvHETELVhZ9U3A1zqsyHptzLDjuZ27zgLUkZ7JbhhKSLQbMqARMEcr3w1edsqx31F",
  "key17": "5Y65BQjYmcqNf7fp6tKGEcY5jWJwkthWdkqyeTsaEApS77X9RjynvypkaAv6fSnXJB7zWvhrT6AQmCa1QFSAkMC8",
  "key18": "MbRgETvWdD2monhaNJxxRdYXo4Mg6wk5LxKxRPWPSfTATpnPecsFRnWQrhDPMcBJkLViXebNTrQ7vyrFkZeAuk7",
  "key19": "2puDRQzeGF7xkDXLyJmo3BLpcDNFjVSCyVpm8afYiQGMG27sM9xjSbmTa3AJfg78ZGTg9su6EDyDTz1JLguSm34J",
  "key20": "5NjyVDoVyCokd1N764H6AYsaQMWgADqDXYxEvnMQbcQvjUomGzbNj1pjxVfVLMU7ayD3qUC8L1SLrWhXAp1P1k4y",
  "key21": "4Dkai1jj2oZLjb7f5CRRwL9X1NVVTZSNHR8yj8rQpiLwbfvBGvy5KGzHhN9tBctVeNdWofgS3gGSKx9bL5YauNgw",
  "key22": "2SQNdwJpdM9JvCCNnR12WLZw7q4HHACULA7Np8DULwGEekfpo6CuocVBJhxhJepMcTrFj5EVg8D9qdHYqXYENmYy",
  "key23": "3j5u9XdQyqAwg2dwejuJHua6gPPisEg4NK5Zj4iPj3cvwuVFcfquw4rXxY9zKdMnPBMKV712xrjPxdtY1bX8CwJv",
  "key24": "9gAVz681xGepc1Gejytq1hUw7TKTShnV4GbyW3QgbLL1rE3oPCT9FnKoQ3bjWq91NMcNJUDCnZ59aX337TgR456",
  "key25": "5jBU5caqs6L4rimuJksKM6BvrfUtVJZkT3QHYeNxTjFWn5WGYL1G5rSUp6cVfDDcUFYWisBzjh61DbzvdnpTHKCP",
  "key26": "2hD84ZMsn9nYCAJdi3T87GJzwp9dxApW1JQsokBjVLMzGZxga1wk1YnqpCmUtemXn5uLhkt5h7p3nq5sB5BW8JkN",
  "key27": "2QTMWTRvNTsqvhKfMpuPMaBA8NsJHz7kyehvgPNNTDhYg4XZjobMwcVtmsiYKJXioj6a6Yvk9Rty8NBRzzqqvSrS",
  "key28": "6bHXoDBx5wZhCxC79owjfxqUpff6BNUeyPPkC8CabUEuDpVgc7XtFq8kbhpz4poMUvuyVCY7YwUVy5sw3cVZUZs",
  "key29": "327y5HV3ysLihN5QP4Q6XsnoyEukFHusZ5PMnHVpKcb89SQYP2zDGCdUKJXX9v8CAktTUnSdLJXv9HKcdAKvoiYh",
  "key30": "5dmFuBp23BgWyE4WV5iGcGjHHgHJV9URdAFX6crWG5ScRVxndb1MVwkukS8LvLGNgC1Jb3tEvbsaMADsznmWN5Ww",
  "key31": "4fU6zMjYN8K3RNCewqn7BwnZXjHz2GqWh3GZEyEHYc8srwGvYyQ6ajxm93n66285wHtVsjHy5PAs7PDKcv66KXaA",
  "key32": "2aEGZDVn8sEGPiTNtwPBnfRNRALTDjywTLbkv9P7f6pguiK31rhNctjhfKns9ZYc7QzEWneYiXqsXM6g5XAGmiYE",
  "key33": "4PxeJk4t92N8i2sR8ZRWWX7bqSg23RVv95sPvmgvwse5ivxVemQUY48JL4F5tSY5rP29zyhxpmFk3YCsNT9BX2os",
  "key34": "34szD7BvNztzo2FqHShVHCpwsepZSDc6wCtF9jxgNddGmKLfPgp4EodzryecugFPXgiF6XbHjnnwD9YrNr3CpxRi",
  "key35": "5cR95LPxYF52v2DpJRhRRFVPnscN8pdyvYq3UWC86FPmFq4GWb5BtQDu2ybPmB9qfGfudW7Cn1w81aoEAyraiR4T",
  "key36": "5etXPWHvVhGKkraNhYBNjW1rpwvjxxuVBuf2ve438znThnAji22BLuYfD4KPM8BbJsTJzuNAac3wNJD4LenQtRQo",
  "key37": "wqJ4c8WDp8Jm3TCP2NQPZ5S5UwcSkve99s3V45AHhWFk7sH4mpPsUu57vuW2GfxEoBBd9HpXuL8rhoKZ2FJ5BW1",
  "key38": "5h8F5Gz3vbZ5yRxguuaKjS5BYkEUJaT3rGeqMiC3FGiCNXbEYWUDgLMPKa4tZAqkmn8LAskRke39BqBEHC3r9knF",
  "key39": "sSteoaRVg12htFQf1FXL9f67wxydGHMci3ijBG8hznK6FaCBfWx1WV8gZxJFkVMbD3NdBEbSrP2ZXLnbHTL23oR",
  "key40": "2ydLE43fNZQGuu9WgDc1X8nFP1ead22rDBY2TS1789m5zWECewiRXvBeKsos2jdNTD1kdqnqHci1DdVaG9ZoP6kU",
  "key41": "5YPL6FECpfYAa3huxaH5ddTqE2N8VpFjcGAXmVX6E1aAk9CULg6dC2cdrVQxyiGRm6UX4d4ThGnsxV7ZBLPf5wEr",
  "key42": "P3taxMCFYzPV842SCBAfTf5ubqKW9SVpXHWnQJoLG1PAjTHwmRq8tqaydgfEFswDC9ZcRRGDAfdLHMRVVebJT2t",
  "key43": "4kYxrUn3BRDK5h3wE4NcWe6kSL8J4pQokchJMZ6Sygt95KW3eReL8LKQykBRghb52E5uS8rgF5MQKshQwcVTk16r",
  "key44": "5wK3VdDQQdcYLEgHdgYb5WNZfHiX91kytFDdWfN6AjZE1DHHbgowaqhdTzRsbULTXNqk4ZnBMKCd2QUpsLCvKrHn"
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
