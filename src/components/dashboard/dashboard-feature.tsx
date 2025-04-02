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
    "MDbTN6jvXvXDwutwpj7kbuzAK61k182ajvFcMXmqzLyMvmcPMr86tkFS5v4DJ229bCnpoNnsXYfWQeZYDyp34En"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xd9uMv768JA2R1EwAUGgZLkywtR3ENKMCR8suWnXsDMDCS5213FxsXtTGHAksXqWnS64C32uVHAusUhf4xfDFdX",
  "key1": "5i8pp37rdrNmGJ3V7WZRwm4QNpdw3R5FrjNKAuLruVhTziPXXHbqm12xdnjTW2pGyhETymmPCMi8CVNpg1HUMzNs",
  "key2": "3M3jViieZ99jKaeFo5uL45zcNQcfBD2Kiq2taHs1VNDmhoZ96zFmpNdCEJ4jxoHmwdcE51r1CrzsoSm3QukWBeWw",
  "key3": "2yqRZCoQNDiRx8hRTPzUcba8q5x6pUpeTRxpwGrvAfVYSe8KEWV9vd4U6xs4wZdt4DeLPjB71zrWvcGGwVRrfSgd",
  "key4": "3L9qSemMLphsvyp1ZVuGEAmDycikatBbt5uY3y2KqhWd2TEXVmevUVkoEUH2RwTcN3E6TxLZAFXCnYrcVBYH4jmN",
  "key5": "38AFHC17kxYh9DxxBZxt3yZJEHF25KkCpuVKBkxSukLo23qUL9Dh7EisXFiLMZ22v2QWDvbGiHmrDNXd41KxM3qC",
  "key6": "2zogDd9HAM1coA1L5jvtVAhTGe2Bx8MiXyGaeSnTgNCf3E3MtsJ3CJsW4nuHrVtCxKyQFYfN9DCdqxUQVHt65n15",
  "key7": "4DWnwSWRueU1Nai7T5VswjHUREWzsHK5magPgEM4tfUEQy8TqkGoaR4TUoZZxG2MkFXDNp2WMYGeJMHWVV5iaWkN",
  "key8": "5Q4PPukTa4dJ5o84hoboFsBMmJ4Dip21Swj8YA4ex2BvDhgmoeJF3eWeL8ihCSa3q1tjcBp2Sq4vbU4GgvtjmxZT",
  "key9": "3eqGqzjWHSLQeoCxoQ1wBdcrPhac87Uzp85FsxjRgjPw3ZDvSecRpkBBzkvjkLXq1RA1sapWh9wUfSDNCPHzL3oL",
  "key10": "3vKJC6TUjPa3tCTBQT1onm3wArvc4jmGz2dkfnFXCykTbB98UutLkMfJt8CvGdm3tLh3nqfuQXVxr1fgAFc99Hsu",
  "key11": "nt4C2Btv8ZMjajw5yKkQjNTKARYN4eUhdRihJpZQAPWV3AVK4dccuPbThrkpnH9pHjjeBZP4AykDognZ7KpP5bd",
  "key12": "ufCoVWEvyW3QhazvntaYupHsFRBybrPtiE3dvxED1Bb1WBfH8MfQBjFFkhUdqVLaWkaK8LembxzLHRCPacgDv3r",
  "key13": "53FANzXrUSezpWMcGkn9rgitgGU8a6vCTVGyyN1PJoZAoatDaQVfPeU6xGYjpBexuf4yecJ375uUPsXCn4sSX1u",
  "key14": "3fE781oFariYNzhH7Bvix7iNofgrbCThmcFnnHXKbPjkGunvraZAEfJcDzoQx9qbbRxBLVdxyUAeNWNxbW8AGq7i",
  "key15": "5joCjWotE9jB3e5LcjDTAnJBaCL2c34wNRG53MFm8QMCd8AmqkqHCyDp3YvJZmtTDWzF5W2mSon9ZPUekCPtzK46",
  "key16": "5pum7rZquipUdqiMGUWsiFYQKyj3Sd98UCrgEmpKsZazn8oxeq6iHit4oeR4QbbAJjHxnf8MVYcUbUQYXAKRPQ9e",
  "key17": "MZUxPhQrfS85Btw75f6WzReR8bPUJuqKYKyEHuLzLgTzPRhcBMuxNdPDAT4VLerggt5JanFp4bnofA2SpktGQsT",
  "key18": "5fcf3vqPpajhPMAQi82p5RGsM6iLUCLyKGuVKEqy7KKDH3mjophePLPFYAy2GVR6HXVa8isuAHxBS4HKadtjhuci",
  "key19": "5AbD3g1eqGReZAm8sitqC2a12H6xNMLN9wuyUt8aPEvC1FfT4ECdkrTogCQhX9siALMZoSiywjbHF9YCVVaLN7Yg",
  "key20": "5USP7ZBBmotrWUQSwECwRY2KDCHyrJBziewqYC8aoHUUCN4ZDWGD2pe6NvDXEjuQpDwAXHMvpUAwyzrESKfCq55Q",
  "key21": "3ZzWoYKb8UvXkuL84MvCZZnFWuShrhMYwe5Ckty3mSjG8c4rW7AJavP6cLog2NzCftnm9ndB6mkCWqYDEsWvgDAP",
  "key22": "58tJL1pPt2XBFxdRtYwn3UcQksNmdyPeBig4gpjkcv6Sy3sFuQpYQx1o5m5GfQ5gYqxYHXbi27eryo8EKo42bEPp",
  "key23": "49VzToQfZKgvBHN3VmAU6jCh4htuG1cA7nC87u2LakeMRbPi6gUv9hqQWzgzWdMwWJPUaPsL1Dtr17873z5BHUiA",
  "key24": "4gHQa7AJK98VDdSL2F4RSx7cXhsx5e4fYBJCre2ggAFqQHfNVk4HJqLLrSCMrKXBYZG5pxpP9FKrNpsFd2BUXsMC",
  "key25": "QvTJJtLktYpjGEKPUpP1FBBQCLSGxBs6FNtRRQHMwhmUq7rx36NTtRXk8YZ87A2odfqLFQo936TFqfX8HN826u7",
  "key26": "3Mr1nCd7my5PpD2kMSymxG1j93ckfqWFwNxGx6PF8WBJXZZvQc7hqgwFymogBgmM42yP89tF4MqiXiG6SXtjqqrG",
  "key27": "4n2BtgZdz9Ts7EfPkKW4UwQKAVPgYVWPpgcS1iyvpCYfqFCY4281rEyGgtbdz6EKEZrr4Ck5YyYRiuBaBAiFbFem",
  "key28": "2KXRuhwdtfgCXmb1AytJm5nMUaAvYivTCevntwVFzYndCnj8UB28N35xV66NWqKDdTJHwWbYoQysirS61V2QofSv",
  "key29": "4A5k6vAJyAhhRVt8xshZAFo3diKBQH4WtqxijJ8CDHBiyBWeEWvegQxdXHyPpTXMfyjmyySvFn2ZFwquU6Z6hAf4",
  "key30": "3pcwZPDXxKtAqfVE2qKddhWnx5Wxy62jx3oDLc7tz2niFEeFAScQ16xDnuyYj461QefmYYjaxnKjgMQ1urUpbd42",
  "key31": "WX6KznFFniMwccnJZSWYkunJ9JSEQW8dBxPD5Kb7Co1d9o77Ap59KycSqHTbYu5KvaeUKrPEVcF1JZBNF6vnpwU",
  "key32": "3ff7uBf6u5Y5EH6ARoHk8e4owQBhwKLvrHoRaAiYj9fnQtTaR7ttSdYofasFwQyFsTHWTsMxdMuhYyyorxkYq9jV",
  "key33": "4bwNa28QAdLCKgU5nWpyKBYYU9239WG6cZvBpqfYcPmcm1ixexmPAV6p3ktGP8bfUtHx69a5CYgVrg38sUs3JVc5",
  "key34": "4h4tkSkg5joeAJ9izY8bSbZiPeJGfNhTVuob11V8HWB29q95BzPXYpo8YnDZyM3NSp9MK9WNXabxxhwBKsbgYh1u",
  "key35": "3YWKMcmENtu7qSptWs5VYDBWmQpXye6yDTYKaZ5yTHXkT4GtFA47e5BftrLc7dfTfbQjzARfDxWuManur2tek69f",
  "key36": "5J5XEL5MX4MSxYEh7BbYw5MkHYj45hmanPPjfUYr2GfkkZBnPXj86SHoAPspacUrTfQnu7xDmWkRRuH64afgMftT",
  "key37": "2DD96s7e4GMTx2zCeaM97ZY7hq5GqyBYBhdkgJ6gcsUK2CaatrUDdUuXwgndPGuFqvs5P9eBUjiLbSGBDF52CZKr",
  "key38": "225nMgB6NvviuJ6MCVyWBSzmuQWURRLdvfZSdu4mok9TaiQXHmg1PnBK7abQhZ5NwjcbCDSNTsyNFRjRryXG5Y6y",
  "key39": "asE7MsntcAcAp37JKzKmfJyG5QAATfqo1GrZsdnFVxUA6G47FMsafHLgVGG97J6CqJ9dZmYoMJs5Cn4UJRf4znZ",
  "key40": "2f2v4C19NLE2onE4unVpwJpnpmv8ibcFVaGBBA7K8tEEiM97eqL8c9n2UviuTdzyQEZuCumCiWgQkmMaAAdY7ATe",
  "key41": "2zkrCVGdU4xQidFZznqUq1PFFiTQjTGyaQ473VzEYDMZd2CPUUhUooEws9QoFS6zHi1UEf8oY5pmCXXHLBb2jxN5",
  "key42": "49YhLeiZbYKhyTGRhX5VaSd5ZTpJFTmS1rtNAcuozdGymfrpgjuTi7qXKKk6zzwRcocU6pgARgW7RiHyZGZyZ27y",
  "key43": "gbnAuTWZ725jaVHwdgAF192pLgLFsXewXwDcr58dhwRotqPStUf8vmLh1a6mcGdvevmZL3YsyJc9HxeYnAXdRXf",
  "key44": "4fuCYh5KN6LZ2tyhL3UBV3GAMv8bpgprbQa9ugydLFC4tfrcXoWiyHt9DUqXybbKkgfcDZxaiETQ1gseK8nzzZWT",
  "key45": "5b24n85itCsx3LYE1WgDv4TmfMxX91ne9rSqY1REF1spV34vsmGCJzb6TkydXz8Ce2voxPXrWXMUqLhVW5hyrgp",
  "key46": "4qUdWnNjpJPmodiUKNUxvJvSV4ta2zNT2oywPafnKX97kTW9nNA4JygovvS8fCZoqbXZVpvgcg2YZjN67KuMRRbk",
  "key47": "AjUVs2ttVuEZXLcnMzN38L8hph7uRrwkgS3DqKLzSsNeuw2aMXrHQZGPqY22hAfG4Q3fFJKhoDTYRafDcnhLvta",
  "key48": "59MmDykAsVkS6pAiYTRXup1Ux1nYVXUzwfNuMPkAXDiHk1a2f4yFD7TiNG4sP8JwSYbS8NM79WBBchTpjqpwcXFn"
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
