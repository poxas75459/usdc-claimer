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
    "2uUaGR9yvNVYXdtAVNFssruBgSJXgnUzbRyG5Dkh6Q1q2VYA8cTspydqwwCsC8CSYVDaYZWqKn8qj4G8rBpKF3Li"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EoWv7RqJqCP14NZWoRg5y5zrSKRpv7Nt4Vx7ahEre1TtoeMDyqP2TR6iVpuYqtwEfgzmCTp2bnhbRPidxSg5fiQ",
  "key1": "5iVkADsSVedMw73QnhCHezDhjLZStE4YSiPLMbYbJMsr1PHkDrkU4TcRwJFNptgUDxB6tGWR4RLacB9pvtNckd7u",
  "key2": "5jgjkMHD4BtWudW6n72svpbRpjrXbKZo2XfqhvQV94J24X5ZTrHN2gFRGVEYjMPnZ3Nawb1fbamuyCSLGECyZ6Rh",
  "key3": "2DGMZ8CvtWeVxRwZbx5tVfvQSR8491MpSxCeRQsTGzDMMcMhXdVMc2nWDQk6bb8nvsKFtXW65V9zVGZhD3MmhSnb",
  "key4": "3AhmpgrRB933n4RBiCHieAzFQFTvzBkTsGHjCbs6vtvswnCuBYcz6Mb1v19joorGAJUCBLBvhPWj44o4T2N2ucG4",
  "key5": "3C59mpc99nBqCDMN9Uo1xtCkiB8RWCx3RbC87WWsvGopSF8pGACBx7SqdcyJ49mCqkFho4xwV2Bf5XohKbUJWAfR",
  "key6": "9bQFL6Fi5RyfcaH1UZuztvrqRQvAvukGf5fjprTKaRzLf4fKU5MoT1GvtfzWGTSrtqZayLogSEzJ3mkwKERFEGi",
  "key7": "2QjiiiRLmKS3Bn4jGtGnPngif6tFJLgZuthURyXBq2yVvkEQJFNVLeBtugnqPvhHRtqfLz9ARGdJvmbCYjqkyudY",
  "key8": "5XUvaVqTTK7DsqyeMPv4a5v9bofJEyaLf6vYbnZ5D6zKZePm4sAQZbkgC9mF7p9wTJjPdk5UWD5vt2QFCqvKb6yo",
  "key9": "363hT6qMtiPqBAJ6fsFBSBU4rGQbghmVJtuTVPAKE56e9kGhSLKZESopnZ9uRY9FKCnWVGhGCojejcFSKnxbdttr",
  "key10": "2CVpgfi9mFptqyeTDh8rbbFZDqp1BRtkrkGijDiM4Q7fJg31SYeHKd81JBeNJhaSpF6ozTbCikCP7zWLRDBxQuqu",
  "key11": "3S88mah68bLRgNtSsZQXadwiM59EvTgyF2AH4zYcPXiv3sPcSaPYWigDsEt6fddDhohA4TLSMBNxbgWNCNapma6h",
  "key12": "4yyJ5pL2uZxEy9mH5S86ikkxvsbgJgdUq28UQZTty7NYyWpsLidZcRjy7NjNJVJ9ARyHN4yL6JRTmLaSo4dmzp1X",
  "key13": "hSQyWYNJKGHgJGSytzHNDXiNt6QHj9czkH8dQM8ZCmLcfb6r7UnjfyVxaRzoAX3czwYbkPNKNVtK6XswC7s5Ewg",
  "key14": "5vppZtk4qedRzdwgWG8RjKnhPmGnqf2VWye7pBkWeQWyZUSJjrW8ng6f3kws1Tx5JQ1Buzrfavu2ntNFTHdsc3TB",
  "key15": "4aRnysXs1ceTcbB2p5cGJUFffXoVpP6fMXoNdD4DVh9yD57zPDt2vAcUagG4dQGNManBTvFExxhyQBCy2S1sKzNN",
  "key16": "5BXMVFtZZTUao7fAqry2gXBPMJh3tKpGtE8WwLi65byxHoLZDJXJRJu1WAGU6gLc2iNXLUibLSDGhpAXqodK9SfG",
  "key17": "4r5dAAvpv7t8PRUxUAL8mkb2nX8Yq9jYFRvezop1XEeXLP5ChYkkgwUDqy9bV3pevekv89zEByfZ9TFopGRCDXrk",
  "key18": "62QmcMTkKorNmeDPJq7yFPwQjooLaUBq1w1hqbUrmMUexPqCrB6Y2xzPe7HsAtgwi1LGXFaL1yToLuXmrjbihCx7",
  "key19": "556HVKsi78QwnwiYxE7kr7MBWH1dtf4TuydWwGvLVwUYH6HmEFG9UrDc7pMxiJaU3cnyQGKmfbNnVJXgxJk11avK",
  "key20": "7Yy5yma15WppnLUpHckRCR4G2XvWaGpWypuTg11Dk2EJU3c387xeAh9WAe9JzqC6aEtk5eYYWcgV3ErjEF4uYXS",
  "key21": "3L4aA1dypeery3mdoJiEgU3LBHUe9ttJByTvb6eDiw3ihxUka7wSZUXatD6wB9HnKPhZqcdXwyERtJFTkCwBZmQJ",
  "key22": "3JGiUVyWmYJ158ZGvEhA814r2yw9F5qEqPoXWfXTcPHd6Qf7ihu7TmNvVBkJLAHq7GrNbWDGdhpM7cLFPAR7SGCT",
  "key23": "29fTkA9gvwx4QyQ4kpex5652qVQuBxdFxQmhSKxDeoK1f2yycTfzWbQi2DHpdSSE2FwjHkQ5GYVtB4gSvkyHdz4c",
  "key24": "4H4Xs9RYLu3vXzf5Q8VRyVeooRWQvTPiVcCWfWSYADm2Wfz4SdAKzuV1ea2KzgxZ9VTy7TwHVyiKFtUEu46KZygo",
  "key25": "5ZWSjb2oPtLUWp88DEryRHsWTzkVpnRcsTBvFJXkTvgXSwMefEzDN67KLKW3Kzdt3cAARqT5gj3wQRi3YoHPeKgT",
  "key26": "3WL6mLat4GQBRAKuGLFMM3DV72U3Uoze4YXzyjRgJSNVDZxYiZdugrpg5p6MFe3P7bAu7rN3K7V26Jn8gMoFYnxy",
  "key27": "2R6wCMa5HZGBWWjeuuYhTLz3Ly4jgDm52yan8GZetTsqMX7jZkCF6gec7kHou46QhLsxbrJ2Nrg4tJevcMFFATZa",
  "key28": "66zc4qVzgxPNZje5btfcGeypyeVphNWit4ZTK2CDXoyWqJuhc13NSJS6o82owYmQdqWbCrP6CH1ywTGmTo4iPoTt",
  "key29": "2FWX5s2TdUXcxw72dA2EQXJQ7sSzHAs9NUaVzmRdbckPu4EYwny96XEqjpYGmaWUWSjqMQqpjLsZcwEvQvhiwJfK",
  "key30": "2FFqYvtVFiRYYc5BehRZJLLjiwd2nGkLGhoa7N5wgQgkm7Q4UJbWYuYAwfoWrjMv3QQUbqpbXSgzWrCFsyo2JMS8",
  "key31": "5QrU4YXdtJQSkXP1jJbcKAHS3jHDzEhQDHXVm5zZaaqxMJ1TYUGsfnhMQeQaDHJJHswfupFbjeRSH2fwxDpeuBaU",
  "key32": "2RxTWjn3gG3v2vDPnVuFgiXaBBKXpufaQKh8NnLUQub4QnG6ji5HiGB2DBHHa5MDxUvKbVFCnfYcm1R8WwJro47u"
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
