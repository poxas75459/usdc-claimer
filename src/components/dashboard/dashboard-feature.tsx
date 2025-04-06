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
    "4jE1UxbLbBwekf496RLgxNgFoi51gCWhUNCQLk9rfdtSeGnG6ooCxd8otR9uL7UmyaHuVwBKSqbYaaYnx1QAH2Z6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CSSATPdWBysXhxzq44qPRpt2CUpeG5XBK4U1rgQyHBwr6Dde28PNhvmaMGzqVCcYYG4rRogwHj6CcXMZVtzqr5R",
  "key1": "5G4KshAzGzeMcFd2d2416r4x8J6b8qAivEiPqtR7d7tkbAeW2by4nzUh1zFJ3UwSAYDskyd2pTuRx9qPp17VbvaU",
  "key2": "5QmvNUWWRZYscQhohNYAHyrFHdFiKFRcdvWUhrgGVvAqA3fTqAoJ1wvj2qnkm9LKzo4zmtgsYThUxW4XpsSGUVR4",
  "key3": "DqLF2oGCy4zS9NjVRLZcuZp6zZCx2njUAD4dYGubnUFogmn4mNmUD5ePjTNPqDFk3tEVwx3C47tNnBUfgVRhyCL",
  "key4": "2GRYD8rptUduTHhX5P9f1rGuRXJXpWMnkqsU1fRr5dtA7NYUzK7kASZ2SkiniKcZPQ3pkFhvoEBum78Vb28Br3WP",
  "key5": "47xSxEo3x4ijVwivRaKfRRc871J7PC3zGqvYA5k7r1koTVwk2yhvdSdr5TsTG6Fe1V7NNaCXmCR8Lwy1Bggw9Bej",
  "key6": "2w3WfEz13DwFrmhaTHMqiQcmp3xya2zWcvpBujYGSM7zv7CWF3KSJgrqhcf1m1m2Q9N7J7FU9WenACFQVFDBcAtd",
  "key7": "2B88yCzsNtMMrks3QcB2ATx2PAmQjnSTDRJBbUhttwmcDTBdPSqzq9DGvXwPHCZZVLmwfwq9kjkbDSyvqyicbN8",
  "key8": "3TaMsVdoSz6HiZZCX85datajA6SqTj6V5YTrQ1B5wjQhw2tdwhk2KzNL9p68oV9AeMhkksXy4YxrSJ2U5chpYWHV",
  "key9": "3b1rw1EXgwaNHCgTUSgSyV2oU4jE99kh7Go8rQm8KF4PTuYBR5MWPist7swBHyLP57JVY3PWw6sE7zzjJhaey7vz",
  "key10": "3Afwk8G3LTWsB5XDir5f77nR3ncCGuWYEDyQo8VY7u1kLkWb3iYJL2t2eXvgopu6txG8J3HQR6vFeBTDqzxj9Gni",
  "key11": "22PGpp8CEcNXcSFNXJqX4mYmXkWQGwfgbwGxuHf1YdYCaQgTM4zJaXTMCxwJ8rKq9EFFhRXGTk8RLX88SMdpgWyN",
  "key12": "3AMioD1ECGjkHGX7DFqwdr3vkihbe7rGi8AZp92LFMsUhJg1P2Dsm5mJhRCZUKjAcfjBBWP2toiUkoBbCj1Xqhsw",
  "key13": "5PaKtgQpjwdxTy9sgdH15aQsJLVFcGLxqa8qFvw2ZZx2dKdmhiE2ij3962KYWLrQszPcNVA7BHiJeSi246zGD4K4",
  "key14": "2mQXsU8dtH5jdWG69wC4q9Dzx1mofsGUeqRprKE57Ynto6UVv4jJjL6DpDyURtAUfymxzRD56TjpPwhX7MS7NEoE",
  "key15": "5npxyGgSV61ELyrXJrGPBJNSAFNtnQ32dCLGW3qwwbRYy7anmSess3jZTcmch5DBb98sF9Sey6sYV2jAoDHY8k7B",
  "key16": "2oVd9XafZhNEY2w3P8N3EBEXnnSpf3nSZf7hT8UEP9yATpUhcGiQ57akutGKysfJmUNeftVZ7By5jmujVSzFkAWe",
  "key17": "5YzGJCdM9Uk72fBBvqGocPxAf1ArHpjmzixUWUnjo59AccsTFZZi35duSjBkqvqQ1VPkXtWGoVb88AX4T6qz11DR",
  "key18": "3RzudC4cqYZmNEW4MVvn82XsDHfSX94o5T9xiRioTR39iw487zM9gHeznJaJSYCY6pnsjviddRJ3qfT1RgByJuit",
  "key19": "2wi7gTWwpeQvuxXRZS3n8RGXCbCiypF7KYVDVNb3px6iSrWjCsmcWvfRR29ebsZiB1L9KMRAnN6xNXrPhHeqndmK",
  "key20": "qoPsPmufzcAq3RUYJ8mA4Fdhy8wmJyRR7zYBJeg9fbXS3HT8stSNv5Th96txdtFQhDDNm6wt7Ugbi5f4CuEGsXx",
  "key21": "4bkMVjvkRNwkJr3dCVK18Cwhu5nMkLUxudQkfXy8RCT7wpH9Mp2AN3Pw68vNHzU7B8EmujKkxPLhB4F48EqTcGFr",
  "key22": "2h2WMACPtEvGNZ2YYay67DaXF6sSxpadQoD12ej9VBnnSadETqF7rb6F83oAxRReTFq6AYKj6Fh7r56iNbcw2Axu",
  "key23": "5raUwZPupv5FVqAkzcmQ3pdgPxTnB44hVhYELYwSZ7v4d9dVWBACwcrvSrfptN9tew1daFnkKoCFnAqB5FpknjNN",
  "key24": "446rDGHM9qSpdJfp9j9e5TWMCsweK3L62DDMxcnupFpWrMHUmMHf8TkxS3oLRxmW3A1PwLLtrnKW2hzJXaT1fWVc",
  "key25": "2pUKuPewgutbinjAcvb4TzuqZAY6YwdiAABvm4BRFTQSKtqmibBfW47KjSKKYjVSVEqP3nwbVgKYuvwjWj6CuR6j",
  "key26": "Ep6bET5fwvdkzTuXRsB2PWG1LTSm1Y9tg5LRUcxob9d6er6ka2DDdaxzkmPWSrPawuETje6NgWJnVGMWrAK5YzY",
  "key27": "3r9PbD7xBPjrsDy6Xh9sy9hmo1fmyDv6UgG97Z98QhtSe71JNoxGZgm8oa6Bw1pqkUFgNo779m6d88NBx92m87Ff",
  "key28": "5V3GXZ1mfGnSCNGis177AXRp3Mj49kHtyVx9XKYBbXZRMn3vYc7PJyYRjBBs57vWYUxBhySk4q67isbQfM3yxC2F",
  "key29": "5Ffgkanmt2wLTbKwYESSmdRy7L8pm3EFtmHcnUP64HeK5vDs1oC5UPn6kEwtNLNFapwEc4jPSJSap7dgoMfLQWcW",
  "key30": "4beWbdfwPNj3B7NysszPTpRHDURGXhZym6PWyRK31wBAYzRGvXdcdp8H5KHdwnT6ZqX5YAkcjUF9BDeS8LgxdM35",
  "key31": "47gmCkvwJq3k9bCNDgdWatRuiXZwMWsqi21i5sgFht5uLtPgUg7n25NdHQA5kLmHiTSYCcqenGzjBCWfvtqV6tVM",
  "key32": "pCMut3Fju5vPTwNoHHEHNM2axJ2VSdiZAX5ZH8RkYibYWiqBS4sG9cmsC9y6FX4fvLrJ5HU5Na1qVP3EX8US8Ma",
  "key33": "3J46xhHsBy3YzfMDpufNoFKZscndvCfB6jtxhVbr5h2c5zUZmBzHzgoAhFVPL5EU8nqWHRNhqqEeMGuVrn6HqLm4",
  "key34": "5YuDrbRKgqK5rzZY6o3CE5XDm1ans7HsJxAgYmX79SBpLPoBjzHjARGv5YQn49jw16GFLh2sSXwUpnQUaKupimC6",
  "key35": "5pmfhqm7HXxdwc6SrvqtSiN8SgJiAWcHNfFvw6HVosfWajbsULzHpeWdktiX1uD2tmmr1QggGGXTdTtX6uXJg1wg"
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
