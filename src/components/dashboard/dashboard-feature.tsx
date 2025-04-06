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
    "5a8C4gjfB4s4GoqsYhAkg9EggWJooNQMEXSGFstoFVWGj1twAPC31XqdbgWLYGkPXWvjzwf2ZL48zwA5s61npH4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DqySWnXFGTSvsTuBec7Nv6BSmd715H9RTUW7bGPGZu4mDb7NweqMRDR2ACAYSQkCgeMLPwknhMc2haMToFNSLuG",
  "key1": "4sySEVgiYjnLJSmDAftrQPXxFexW2WSbDfqf4k7JaQcG21rSefLSttN3J2AUTwyxeDjb8wzxoJqSEpeWLeKXSfAx",
  "key2": "5gMkyEbVDnpmYf2wNTtDkUsxAU2EZuVSH7122u7ADR2bApPgKyiHaf1ravy6eQNzfzAZhiMC5AdXnsvNCpvr4Cb",
  "key3": "668MPuSSS1JWfYeM727Yp61uG21WdvxXRBNQ1anoUYStf95Y1EayqSEpgoyPwjM5caDXnDa9rXXeA9yQDsNnuLJb",
  "key4": "5pCYBzReYzHtPKA1ehrFhFS8QXDw2vRonBvXSF6DaU9xhTxpwt8T4SyuXL74JFpxFmmY4SEF5D3St4Z86WTFcSnk",
  "key5": "4YmTu8kiGgk7kqvaqyASxsqt4UnXMKJCcHYuxUo5xbMFQM5eAWzBiuEUrMfKSnfVwkUo1GcxqgCqHd3dXfG8PKcP",
  "key6": "HG3oSFix3T81HQ4TZ7VzzXPP6U3wwazX9hpH4mGFxzcQrLZUFKvxsqNohrNjK2exRNw3swivMerDQSWzNGGZYno",
  "key7": "491RSE8SFPMZH9J3kgxn9a2LRJTsa8Zb8EnWXhwsh131AXgenC5ioDnAZT3AeMNu8s2aiYjsXCprHoYonKcgGqTD",
  "key8": "2bmjbBZyxxH6vmnHoyD1Qb5pvhRvgsiXveUsZzRuiGY6JmihrcetbYo1HNZ69MTmpfvEaJmUSQ3BNDTY1STa5mdL",
  "key9": "2SNQKEFLaQJCkknei44ZxzB64q4hAxv1jPMa9zAjNNH3RDvCdH4u58p2nV7SGW3q3bADgzaARRj3s2HJ1B82hW61",
  "key10": "2DCuA7P1hiit3y5Fdx4F28cVeqAmn2hXFhawHwV6kGfGhCev4bJC7YLBwF6sxaF1xpwx9VKiFafz13GVJ7iPoCsm",
  "key11": "54PzqH2o6hmgCPmkbcAA8eBuDJekgvTUXXtxfPWsbWB6jX8Q1VmSUhxr66znueNhLBMrUp6kuArBTYD88gh3rTgH",
  "key12": "3a2XdfSjq15ReUh9qpcJq6HQFoBsbkUkhZjuA8BSy2MPki7TZyPimYjf8321h3DZkV47gRZYSRxgnLouhiRoV8X8",
  "key13": "3G5KPXmVxoQxdu4WuNsDsLFFeSrm98BaP7xcoLFR77MUkg63M24BXFiLAKN3EhkjqcJHkFWVcNBVHmn34z2W1wVF",
  "key14": "3JVVGodi2bdhguQ769FgV5fDHcGHVxYWKpyojdm3ymmpNdiJs71L3uD4UPxJh9rpobS1vqMjmJQbAKQF5uf1bbq6",
  "key15": "55ofpRE1PVxkBPMKjExNjygKnPqFPMgPeAK5b5N7Ek53V73kEVmpviQPuphghQ4VmyktAzT4WhVBPSHA53XAPT7h",
  "key16": "3BwaxC8VKgPoS93Jz4YRoMWSM1K5wfGdJmrnTHYDVhWexN71b7WEgREotabqkQ77qeVPHBQSz4oHQGjqZdRkUgkD",
  "key17": "4EtGcxB4kdwdC9MdNZkabdMPyYKbfXRpPoBaXbizR66839zTQyNxLzM45uhG6kxp2gqPCv3CoSeTD4kRBe123PiR",
  "key18": "2gEkCcoBurwQoimj869Kh4bkBTS31q3frKXBEANvPiziUaKeFCuiZD5TTJGkkeSK7JBV595M1LxfL2G7EzMPJiPh",
  "key19": "a5WT7VKVBxtx1PJ9SQZF3QNZbB28Ny1KMuKGMT5cdSG6Lo6eJrxuFtnzzpYZvp6mJRxaiUEiRy8Ck4E5ACxV5uj",
  "key20": "XZQrDtmSxHSMcEa2gy8ThDGaAmMKHM2eyR9jF6XEEsNg3Z32aEHeWecSCWcTeQZMenpfDZTqHoAeZqCTDXDCwFL",
  "key21": "3hazhDPykTG1ph6WNttCLVx6SnT1n6w4aRRfoTjQVAGQAdX1DjELkpDMAcBPeNiKYEyL41nY3Qo8ctYenqmG6Tyj",
  "key22": "GZ2NRJP18b76UxXbLavq91TUVW3A7zwj2asg1Z6hQ3saRZ4Tae9Cvf5ZCRajpnXCY9tPZKyHBDtNKbqpf5T8gc4",
  "key23": "54T6uiiwJXvRtd5HnZgcWEYXigSRGAqfUz92GjLDuKSefsB7ePywnMs6GcxJR3XKsH4e1cTMxvgbb4Ns5FbK57b6",
  "key24": "4SrgLcZEymRzTFWg2BXk12ZNcU2jyAoJFCq437rFYqZ5NzGUQ3yKYPE57QYrhy1Y4PUHpEYZ5rcAcT2wyWYR6CPu",
  "key25": "4sP9hiuyoJJQbjFcptK56iQX2VQHmG6Z6JKcFpjs87eTtHhXWUNqDgB5WLzoT1n5aXEpfZWoN4KypiutShRiPxjq",
  "key26": "5sc7YFrKMxKEFQ3c1NXN9n5Z6qRQWYWrirQL8EVjh8fK5XcvzyGTG4LYrboWz3g8zw6DGX5mR2J8Y1LeMxKiJJiV",
  "key27": "4iLDgbzrY3nWqcxqPunuLjQu6iaEkxWqgKa6nw3d7zK9pZwWDc74K69aqFyskKmPERAcsfX6LecurYMiuBHvR4Tw",
  "key28": "385JKjWeSKPTHS9stjLdUAQMX4XNC2UMKvRSyna5pQyYrvFduUjukRVrKuhDkCKidNEfG4nhBRjKy9VYLCpDZScZ",
  "key29": "3dSJpmWb5TtRwagJrfBQ5CMqGr7pbKQemkyCfjnYeRWbdfvJgyEP5fcfh9TJ6EhCWJkzguDcomAaCXwwGZXGNTWo",
  "key30": "tgHU421oF1sdP7ChJUjL6dJ55HXbQGBd3tYTi8eRiskQvthAW6BCU8Jr4VUTsQYKuZyBdYERxw1tQ6eziU4XdVk",
  "key31": "3AvePasCWTbL4LoF9AfCq18vo2HCM4qb2kkaMgsCQpEmfintvobD66dfANHDNhTJgU3LT46JTNMqjJuKEVGeY8Kd",
  "key32": "mUK5FZiFs4zaLDDF8keZnFBnJ5cosYEabNvJ7H4CSTaLY1nVZRuFNHrsatdYUB7wC1mu9psiKDCxwwLC2G2FAEe",
  "key33": "2zDK8ZMtaPRiRVbBBwDfNFpacMJ8FCRdzhirEAVpMkyLhrmrVTXSwQMHumiJQ8iLJ6uAAcwjTZdydzKvNiY2Z5T3",
  "key34": "3jtPTgc6KfyZRrqwVX6dKqqYszQ7u8WbkKA39ennbewJikZ393MTmt5gD9n6SKSoWw5aiyX7GXFa49tt3EyFmgLc",
  "key35": "29N12kcnWN8r8ZbG1iGL25vN9MxndUhYs5FHNryizgqzTiwryQLmFvAwtcAaBHLmMaC4z32GVJ81AdbvgwHpTQ55",
  "key36": "3tZPT7QwEMqgiQaodFkNhmV8UoziRTHbXPrBQrsG3ZgMV4tHL3yTTKoT3DfVrUhPJKyY4pggXuEQKf19c8M2Jcxm",
  "key37": "3pNsTHY1sRjDzs9TmnyKdX6frep6wKYtooSZPPUeZ2PLa9u29TUsgfw9jFACgnXmf65u9vzkAcfXj3EsWLyvLVzB",
  "key38": "2PX81nvny7dPnAQwoBVRGSynAypAZBoyjhejonZgzE9pnfxdBiof4ksH7TsmuuCVK2reYHxSBZhinW8Rirn7QYkD"
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
