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
    "4MxQZAwftgKAQYaUYwc1zHiKvcpNqpStwjR7yER3npKPCf8QbBG4cgR3NAd3b2mDmaRdqHNymSLjQUGYyeCthB3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64QiVzXnEFznpZkRTPfhDU1vFz6zNTFqBHrpEfPTMRkF2FmcfdmvuND9pKZhQKCxGFHVZewu5PRFB7ZVbCX7CPQx",
  "key1": "5gH1Z7ihxgcpSQNZXsAUfCi7HdXpBCs31hfaspRwwNDN45KHKEY6dkb2air62pa54GzR7yoEPq8MxzimsF27dE3w",
  "key2": "Y57jPCC6Qy7rnke9PDzRa6XQQfozCU78XLvCeJEKVjhBBWS33uZEDyPvecHoWwgxbX75jK8jFMvwH9TCE2qNFTP",
  "key3": "2m7qYovxyKjQT432DKMcgq6559kX4yafPCf18iwt4J2zcrq4JERjeY2z7fRnxqQQafnfy7jSG5hdcuDbYnT71F2j",
  "key4": "3cjiWG9rofrDUQ6aETNhGBQeuSwtfmNeBcfyYDw7yZgMpBkWDBrM9dmNfqGEjR7YazDcrWvJ1YoKQAN4XTWpCgNn",
  "key5": "NckzJGd4zduv6tBLQSai4xdw5f5L78V6Fi2rSuLbZvtbiavc3LF3m5Jp7omskrmPFzDRX3osWkfDV7PXCq9FCGX",
  "key6": "3n7JzV77tvejGBvHLUAZYzP9trT3raJaxY85VFar5HxGu5qzUduD4Vp97R9N2VUqZfUFPHQScrQECh1Ms4dY5ZL5",
  "key7": "4dUsQ1qizaBsp2Z7UY3N7f2yBsFmvzULQ8mMvFYJykTUjH5usTShJwXrkE1YtYwJdwdgkfCEottMTWA6xwum7mrU",
  "key8": "2Fc286bTLVefJgVzQhVD5tWGLr6UoNhJVRWb828PhrXAkMnB5op5UeERdBMXJznZ1gvSumgnnnbrocr6J7TVngBH",
  "key9": "iDKG2vM9w79ABk8euWfCo1M5Lq1LPD4eGss479Tbr7cPa4MPoS29ut2FJMtqReRNEmXyhjUVcPUNwumntEKgFc2",
  "key10": "581F8eycxGzhhhRpc28tiQG18fxw6gLU2kRGmKLMvQ8fwNGWbwefGWdJax8u2ZREQ6XpNAjwxkyCCsaiXc2CsAW3",
  "key11": "4WmbLdyG1AmAMxUQkMWUL6DPek2m7HPQeydCivoxx5eMvsW8QemWbDA9ZfjES8RTmzzzxgiEFr9qobnnxjjfC1sa",
  "key12": "5jaDcWmoYozmWgj8sXBXHg1s1ze5Tjb46L3QhNTbj3xiU9sfsq7LbLmCZVeBqJmqw8BjwALTHDmFvUZMmQNL9HTz",
  "key13": "4Bh1WmHfq3QNsWFnQvpJH8W3C4KEusdwx3sGaTLesoaHeRSvbYJB65AxHwUXtct3Fs8wdgNKyFUumNm7Eqhma6Dm",
  "key14": "529g9cDxGAHGFs7LQ7kzAhz6Jb6spJBPiwyeNmgVzrurr4r89JLbFcerUXADegDEjmWw2VWGQhCpfw1s4jp2ZKkg",
  "key15": "57drpQjDNDBXZptdqWP9J64FjfNzM8jQNd13t859VDZUsinoHjE9DenmeRyBcmKwxVv4dNpekd7yuhXJW7Duh5qb",
  "key16": "61sedw34EaMyjiJyfkU89evd6STLcCtsWuw3kBoUHqkcvuVtsPgr2cFTrvaRwjpym7KB1PT5max8VxSpXYfvciQE",
  "key17": "3Qj1WBBABoFZewSdNkqcXdktJ1TWZS2N4r4xCvrJgyFXqqgDbpYatmTJQkpLY856cLfnKMgaiiUaVHXp5FzFiNKt",
  "key18": "4ry55216ffGK5A11GikzKiZEvWyQ543cYSJRuKCqeV6XDfhiwUoniyqSA1LQJ1mK4mEu9WSyweEeNR4449sm3Cm",
  "key19": "2J5JXNXRaTUYLqDdgn7MoyhtUKZtEPdGj1bPiYEjmKXMRkxnWkCzfWeDVueHqUCWfZLLawdhh9BAE8kiuLrWrX1W",
  "key20": "4KEfJoCx6d7xcB3zqcFTVejUTjMpNbcuKm1hHVwoxxrQ14DXve3h51DTdNSvXurA3A6vGQRpEkvEEvcGCt8gkEot",
  "key21": "3UyNG9vxAxJ5PySLZu2Dfa6e6w2TWCYCK83N6q9kFa19KvQ5DGxGsDn5vbEwkAdTuHtivX652faHQZ8kw6kDQRwb",
  "key22": "uVspo25MbnoQQv3SrqWsAm7DdL6Z2FwJcQZ3z7JbnBrBwp27YSzSVpQn7tc1sqk27siefy6EPaGte3jS5FydjZj",
  "key23": "3twqniLQdNxQ3gQ1eWEA82p4ozogHU7kBnrUA4iiZtVCmdzgcsEJWfNELMGRKJqp5Gi1sAnXGvzGT2x699ZF68vt",
  "key24": "32eYPFy3DLWDNXTmwe5LhCuQGtwYpwSzajyYbcAU4L9QLeiQ5hwK7BKeDPLanxgybV6DDwDvQxcPANKAW4fBpuUh",
  "key25": "hbxZBBKrF3Ud3cBPQWmQm9AKhEaNqzRHqZmwoHFwsiZS9uYdP3mCKbUHm8xEuq4EFhdJt4RiuhNnbrcrHj7HzN2",
  "key26": "3ZhaujFfzK3rgwfBEXH3NSSk9fr2riKgs8pLfadrU4HRoiv4C88N7m8oNBWEPhsxmF8DFA5vFCYeLhKaiNpK1WoE",
  "key27": "5sCys9WXbCzNkykzTutWHZxr8x1K3FdtwZ4f6dwY9821Xvf2qiXZXpYcAJPzjLopTfgFT3392mp9jN62ZhDvEmkr",
  "key28": "29ARG3vh2LDTJchHMxwWh6TWNCKiUZajeXBYb4BTep4yu1pvor3syK6RUFtDUfRzATrg4HsDDnPXcLnpHLqmYy8u",
  "key29": "ktV8RFoLSSGYuqCYWcaLRHy2HPtALX4eM8M7u55eKRzwnJDoaFKUNzTzLmeb4GDNrup9ZrHF2DUcYVR7RVQduv9",
  "key30": "iWdFaBdcQCHscV4LDfMWnsdw8mu3CQ1HsQU1peGJ4mkGQ7sZHeB2EVsTNp1Th5NuFoUhn4owJ4cpbXApgNDr86Z",
  "key31": "4Tbb35nWsqbeNUYksW1ugiinHjrya3Y6LTRJTJu2krAub7eqTjnRoQDVgrMLj4m5Jwtm6nZXFdQdQhiBxnB7Jqj5",
  "key32": "3uHDmZG9amVXrHQmfhGGNCdXXcwcMYteLeCrNnYJCyWsXVeTFriMbEZypSQcprgEoMqA84B44aV2s9HmaN4jPH4y",
  "key33": "3cCmnDMnPQpmxcNusskS4ocD6LCR9AngzzKHuihXzC9X2KGPB8ZsQFtna8GT2YVm9Sjti5tnyW5DWhvFV5uc8UzP",
  "key34": "4H47EwpjmYbprkUmEQgfKNNg1day5xM2Tskcnyqu94g8uCnfmBjMjrF3eguAr4Ts2pMzWc7JpisJARAHcF2yoBnU",
  "key35": "GHgJAuZxmbKmEb4BhHGwEX6z1okUJ6x7wGGceGE565VUiCQefteLMd1ieD69k3akhmNWcZqSPvLbZTWqWZUdJdM",
  "key36": "3LP8FP4aXXncMNAZEHZeGzu8vQ6q4y6x3CkpgSNV3hv2aWZTWLH2uD9NDUqKhiBDuc88sLqxAZydnoonR165LK83",
  "key37": "4Ki3TvYQGEWEDRgmQYujbTMC7DftkqP3cXfyMFSKfxzxQKVz9oCTvytaZgmBo6TB6gEFUCnhwikWq2ReV9SSmWKf",
  "key38": "5AxneHh4pTTKFSW3RRD6jDMGD9v7qDXeDwTHR5vHfNxv28AX8WaKDysrTRZwjxfBRg67fX5FtsJpRFHWQMHBUo7T",
  "key39": "5533UzzZTYAruS98xeVdK23YWmfHQW2HYyNo5cPVFJGDKGMZfeLvzz2xju9Dijbx1tsSvqZC4Ubcqbrrs8Zzad7j",
  "key40": "4gm4xZMPwpPSiPvq9MoRwmHwYUcbpQtRK1RPmTfpCtZAmNKb1UjXo3L8zyAwEFxyhx7iXjD5RLJYEqw8bLC8SpXT",
  "key41": "2U3ofw3rD8JsoaRFSsKBfk2q6xpaW4fzV1rrs7yzziFnT4U5tqRNXSC5roF3dgGoZoQmXqvQTvp9DwMkogWu7tFj"
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
