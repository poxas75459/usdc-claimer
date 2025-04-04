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
    "5tFxvytJjYAgGBZ8CuyEHjf5CDt87DToJUbgZASLp35C9JzAgiJZ1Jbc9gtS4YABD74PWkXmDJmqtMS4XfXmhVsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NeNh2mQCT1wAoWF4ALFEc11eJaAbfqsj44ot4zNqkgY72srhScv8dz8tLLoa3ECHHvrDibHfP1RS8Mq1dfH3xMD",
  "key1": "42eJGppqiG8P5nQuwm1SpvvPsXFrRkBdYnDesnq9NKpmurdFAvZ5p3smNYMJP1YpJ8oH389Mkqi2QdzRd9Nt5kfh",
  "key2": "21P2LqwcP7MmsTmgV8bVzy9uZYtKQZCinf8DHFcaHHRpQrPAvkJ4MsQp5DhB8icc5SHT2Ewg66SFGMpheGuYuoAa",
  "key3": "3THNN7fjhFYtFtp8PSfHBhRBmyVCZqcCs3DiHpmuHpEFVGv18cq3p2xnBxDkYMwuhJq3TumuNzXAt82KHycrVXJt",
  "key4": "3wThRfHVsMfezow8LQbVLaLCKrv6r9pYsv3WftPiiHiSxp8y5XzpP6ZNejo2TGFbeCiKvy3VbjESdTKsXgRrg8Dz",
  "key5": "34gdYBXYZ5Jir57FzPgUywmXuTmBry8itsLFBsvSwXREdBRrpAx9BAJQZR2Hg4jNJr9NcvZsaEpjybVn4cF3skJh",
  "key6": "23JB2QXbWLLEusKwqajngK4i599jhufGxcrHSs38kCVRS2hWtqXms9jxypE8Da4GzrXtrcFtFhv33u9r8AsSKQEM",
  "key7": "b7JDfSdhYWVfTa63mM9iDRLuGwuABC6Y5wJRpnFmHXFZdphbrnWCNhko9GZCKcUJNQ4N8U3RrcmJKhakEAiPh5t",
  "key8": "3Vj9eLuyRWe45JcvsZvTKxcd3CKKcFqLeG55KvhkinPvx8kGUbYqZbvbU52vnHDYFc8TEYH8AqEsQKVQUCo1UnGA",
  "key9": "3dNpWz6dXTE4EgFsUePFCCbcnaKu4eHSPjMYsUumn11pw22w8j2uSgF5wWJ1VPqH1bWGPVwZfL2aifBjKNErjZEs",
  "key10": "3w2zgwwsQ7VeMDMAcYpUcYSRiKofRoYKHLL1dqC1R7VGhsVNh6dqJhPXr4x2xmvc1xMWcC96dVzabqYLitqBqSs7",
  "key11": "droMEJVMxwJgBcKepjVQi1yMBvxyhtV1oe6oHZZ5aWoJXMiFAMg6ab7yfRnccgxZMsf3ZRndWb9nkpX3jqLe3My",
  "key12": "7Xot7Esax822rRc7PuaWVw7jPShebgjDqsz16AgnCRC8B9HJkoqZYZJRufcCVpibtMA3XRoBqnhj1pUou84aorG",
  "key13": "4wqBJvGDUsA3sxcawkZda21YqUPoqwoa4QbKyiVyZvwyyc9hQ9rZVNLy35K9XNGZnrKN9mMg3duw5j8gyVgqpf4r",
  "key14": "2aBZJKAhyPBT1hmPsWBM4tXUmLHfkwZGf38AAw5zzdAEFWXVJXp2jRNbyjgszVtZvtdDRrmt9hKdmLpXUEynFMwL",
  "key15": "4N5JJ4qeegURawvcHGZ9uj3bJtpQQMnrAzcCarkWfJUZhscbFx3jKeWsMXewnohkE2Xn26Po2rUhXTwZGpEuNGqN",
  "key16": "2b9zcaWfP5Zzz41f6JkTUtPNLCmRdvWH1w3AdM4eNDFNRGNHxN1xxQA1ALs5pzUnQNz7NeMb1kw6tdyrbpXKsGp1",
  "key17": "ChHe3wFsMJasndNAft7rrhw6GCUEymJkkXYaJah2M87sfmYNf5Fd1EkLAgjeyJnZ747TTAsSHVzxxDSW42C4KHo",
  "key18": "5dPTtNKT5zJgp2AUevwQuVcQ6pZwGMFr7i4YtPL4akeYVyMUygxB6NRX1B7qGZaZt1BvAp45pmjJ2kun2prBpHpx",
  "key19": "5gesW5yiVkmKKJ5hrpM27fnAyQZV7zZQa4CsZb4YABifx8PtwQ2EnwzcSnvsHYQ4tPmCq1iQNPSSh693RtPtKT4y",
  "key20": "5Hn76YcYEvcWxqTzMot9UDQakMr5WZ5nsfWtGpr9QQ1YYCuTfBTSWNpEXL3YFN26nERGCD3FJ5WnQgEJYJpRixZP",
  "key21": "52neL3WMjp1E3W6Bq2BV24bexHQUZU33BMVTTJYJaCHb5E8LqBCokRD7rhEzkTwK3Gk7xFPcENYYRV5BSt4KfKgk",
  "key22": "LDPPjCp4iesT6xpJhKFCbrkuBrpsZtwfeyVC3vR3svu8RgY3wXrcqX6NqAiPP67q9K8b8USRhxtEQyhf9JjysKZ",
  "key23": "5yaKJ2mJdESoKVSb1eTjt9VmpKjReKsVBd4EbG4BqfbDBdzPgy8myTcyY5kF1JNywbYpsrXspHShcea3baAeDCxh",
  "key24": "3Q9Ar21cGSsUAKAuZ6GxcsjLZLvs7vx2xsQg7ArRjktT7Tn3NsHWUaq4gZdaLNJhtZ1EMrbNZe2Pzc7d7eCHfGPb",
  "key25": "GUpyiP6MLnUYiTcSFCHUTiLQH7oEZUATNXLhShnLGH1QQxXmfaoqbazqzizEew2KscmY8eeBRVHjJoizUi45GuL",
  "key26": "2fMCqASmY735SmaDb8RU6vmZuxvfQvdsG4E8ezKC4EKGeYJc9wpdootjmPvQuC8UxNb6rzP1pp2wY4us8SDggY1p",
  "key27": "4gRuziHZaHyVh8mWLLpKpcbW4FgSJYeZg2i5b34gXWtwUSeM6QHE1NdCwDmAozHtShpAcDgSuzosVEWLrp27SfSd",
  "key28": "36t6o7MPCw7GubhrBBUDcD94Ym5exTXX7F7BXTraFaSh2PYvzift4fuJw7mtoFbd1j3oAbGWYmjYFY2Srau3yTJA",
  "key29": "26CVGDPhTFeNZnqzJCMgQsXToUTfJ2bdLe5TRxPiuoLejHGR3qja6Gss58SJV4vzCEy2yrTQrMocsjEbmkfAEyGp",
  "key30": "LfcEpURe69igAtgPDvhDxvcqW63Q2hJ6njgpQmqPh7pWGwvFWesWbGzXTdM6BNNBqETzdPXsVw1ZYu2JehPJL1n",
  "key31": "4mdbRqAUiF3qVA6Hqf8SQStVCjAYd6HQhcvHykur76sGa2kfk7HpapzeLSxvugKuvpQaAe6RQMND1UoK3y27y86B",
  "key32": "4cGM7NsrerCJ2Q4EbCWFWXEKkoCkbWPVh3vjX8bwkRTrgGzC1f6UbLW9bARbhSBw1C7igfxkhJTv2xanuY7DXqwX",
  "key33": "2sSoYp8UgBC6g7HJFszyHPiXNQHh2vtsAbHSvFVYuQqM6kHKjQr5K2gmVDrZUkm3EtAeLsLq1YxnUV8CYX9vqV9h",
  "key34": "5oo981kjovmHYgiEvptJQdxhhSXzJLZim4HeXE5YakFcGqBt7mZXwz1foK36uuSFkJgQJPtGvEvQ2rfovVhnyUFV",
  "key35": "43dvC1JR3g3xWGBa7yJV2PSzRmNzK6DJ3fvNPPfuYnuUN5BSvdx2WezgrFpn9rF6YhCCAxbtieJnBVV813uy7jX2",
  "key36": "3zTCskUiJ2BaBPHPKuLoSA2Aax1BHQdxogdde7QCwRD9NLRKnaXAm2P5wxg5MnSAD2NMFe4ZzmoJZftKop72PoZT",
  "key37": "2vuH8LCrwZgFma6YBs3CTwrZdrWcwW324YVWJmzimMBbtd6QnxNTvsCFBwKYksV2LXoRRwgUvGbppkFRjc2ixBzS",
  "key38": "3cuDfp5nB4vRrbaAFYG5uEsthH9gwwAtskUApnVTizeoaU9Bu1URAFMFq5edJ1HUDuKCTeXUL7LVYyz5guVCjdyd",
  "key39": "2mVSD4JkLa6NfJXwdF7MLvxL5QF1VokwGm987gGaEMDcBTpuMk1CEEfAgaC9GUszQ9XzNTKGMu45nMyx9tchVfyY",
  "key40": "52X35sLgvDKyBUCHArk21WQQfKVPTmdWcTcxtGnW3ALJfcKnqmx9aDERqCvTSm17qQYWazwiBnVDq1RKbKkyuHC6",
  "key41": "5gAW6VYqzXpPuCexujUX6iQ6w9U6Qcsuqm2tFs2svbHqTpZyNixWGcCoyjuRfumeHPCJ6QB8EVHNHTwFJWbJvjaF",
  "key42": "oU9x7LQokHTjMuoq7YW4WXhnFRrdJcS8bPEf63UcCMBgDSy1dexFG28X3V8aCdAQa44JDrEAS32NVJJEr4CTkAJ",
  "key43": "3CpHdB5VuaR3MckxXsGsSt9yjq5xKcNRGh98MfCDzBgbUtnYJKyS9Dtz7ea64UiJpp8DkDdW6iJLgMuPw8t1xtwX",
  "key44": "2V77XNHzz5Ho2RcKcBXYZUTdxWzAQ7jBCKfua8pkRaq9HNpDWa35V8wMzGsuvQFu4Q2ojSQQKGtRoi2bUChRCTPW",
  "key45": "4fvNpofmauZxPSJrZSk2Mf9sehsAEmX6PvabutmPinrcEKubPUMF3xRipF71rgzxaKKCaySDtCLSjabd1zsmy8NM",
  "key46": "43xv4s9noi2rTRDiWGdi2zs2T1Bjq69zQHYauvmo9Tm14jTufRr7s7XXhHQBUPSWaY1P8hpSeQpgAejoUqvAohTX",
  "key47": "sUQkKpmp3fDwJFEQHKR2BhQHcfvN8SG84EQWcTDMHF7XGisBX3nBJnEywh9tMyPKe4LJUjUmV8G8aqn3bc32tTv",
  "key48": "62RjZhyPM3d5qqJgZcW86BrrgK7SaLMGDMWY8GEJTcNvbkSqc8owZELDJQXb6x733MaAg2rcamF4RWY47nfQASFp"
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
