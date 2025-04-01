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
    "1rX3XwfePhZeqLVzxBr3BR4CfEbmZvNcY4om1mY5SS682Padhxwmb5VpJ8bJ4dPWsdA9inF39P8M6rRi838yUmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xkhiBXPjzogX6GiofHLfFpTVWBq8yPsr6Dg59LphfPDpHscbhYTbYbY2TrcFRQbvHxzrRhSmYdPTkCPBwKgQ36s",
  "key1": "4LpLYoH5qQMW6L4XMbiknjjbvuNm1FTAMVoCikymz2sNpDewoEj5kfoceR85r6tFj8MtJoH2RH9S81HPCvmvFzWE",
  "key2": "3vzGL7gnSmaZ4iBXtZ33TUjj9WpjrZybUhDHv5bdyvo3ky3SVa1XCBTEAy31zZUeDRUR88EkhtGt8zKbX6oN1jck",
  "key3": "3KcmJTLCsmWJWsqKPVMxsCnbfYG3gqjgSEKu6AkgjuPyoA8tAunbD72Ddm2NVqc3ixiiayMDyxmmkmwABWLhfiG8",
  "key4": "5YZF5VEUnFQ7wwJbej8rLofUnpkszaK7b2ZHh5vcQWagEbAsoxcQAA7nWSq9kZQqAXYyEdE2eWbNk9BPPJpsfvMk",
  "key5": "417kZ57u87wAfXLTomNh5XPRe3LpZMy7ogA9TgfmbBxRTzXZiGempeB43RwL69EpBo7PeLX3p7qkqhJNrFsdfU33",
  "key6": "5w9RFiWaFjN9WffFna2YPC9oSp8APBF5zkPEgkchn2NFYczTEMD92RvzEoHxCZcPwBUFLC3ZEZZmfjYo7JVsvx81",
  "key7": "3ofcxUG6voB4Neg4gqvz6hSKLkUroABgj9ZMTKTSbz5AnxWiwRZm1i6hDRMSKzQ9x4wfZ99rK1UuggCr2Z5RaqAq",
  "key8": "4LbRELmeByMHZTxXsaxRJWCriu5UGhZrPUrV2qjdqWoNxYcQVZXtL4hypGkBhWPnMHCFRiDvUcsSXAoyjWTgzkCS",
  "key9": "3GyVJ7a1C4ui2CbijjGXVkf4r7emQJSuXq6SNPwmGk4258SZjavBnqnWok2M4pkvSHahdECiumynv9dVwQHiLjnw",
  "key10": "1JpDGmJfc5jrQV3U33oayWKyRKa3KmDfLp2reu8DfVho5NhSCtfib5Z8M5Zyftqt6wcK8p1zjk743MAP3WaDtFG",
  "key11": "5viQkY6vUgZq2LnNDnFzH39jH8Q8NZnhUzKD9Txah4Cfsza7kMj4fR6oVeoRC6Qt2wSdaaLoFLM2PxhoCL7MLfeM",
  "key12": "r4fAvp2GXhQxDf27eZMmsndQKhvcfChc2hsj3jYsm1BgtTCsPAsj9shWHtXwhQkEpanbkGP9Jd4LGT9V729YZVs",
  "key13": "5s9zgjLDAzbXWNERtBYRXeoJ4qCHswP5BKr6crRUVbRe3m9vmEGfMC1yTQrodPeu7cVDuLFFveEaX7L65SrV5ebF",
  "key14": "2uoUYWNinzXHZ7nkJk7e38G3nKw6y57KhvkfDwGJii4rqXKDFSUftoWespwTpiFGnbiGK2TxL8bpLYrm7yd1XXFR",
  "key15": "5R2fzxJcp6cPhD7vu4nkjPusY7dMfMd9EdBz5XbSbawfAvpHPGkf2c4nreN3m15EbkqvU25gSf7pymkMRcWwTKEU",
  "key16": "4bDrZZFT9KZCZDN2WMybFwMt7ksh53bwmSq8iJbRzYqxg3vsBqdwNwunWNUnXk8vQWaV8GFJC9KgkxZgGY88qgkc",
  "key17": "3LhrZAKdT3e6ovqa7GBDkJTsL7ThDKwcgmSkbFNV6Sw7Gvhi5LHzLfS9a8tX4Czk2XvnFa9AW83ycXUp419CBdMy",
  "key18": "kXmup9t5GBXdLoymoMZe8XPmJvgpE316f3UC8PaRYotPT5BHf8KiuAFnfoz49S8fV99iRHPAFcaGesdVRrdRcJD",
  "key19": "4jUzTBD9JKQS3c2kM2qp4AeSPUEfUuCYLKjwsUpdd8iDsKaw5HtvH2BRgsPSre3QAEcG8AitgmNtXfgFVpu5ugz2",
  "key20": "5coBmj4GZmV8RxQjxqE6fTwFZQpzFjMDCs4nJ5NYsLYMhikooQhhV2FaLmnnftT1zxeNYiMHCdFHQiBpKt2bP8DE",
  "key21": "3ijxpkTrh6KrDmvfdHfpDL1ttg8kjeYZYHFKJ4Z7SBAiLe5Wt4oJb9qcoYhj8SsQh98DyW5BpeetBsVKjKNfgm5J",
  "key22": "26eXmZUTf6o1qzheZ6PSPetwSzL4F3CMWMVmDLMSBaWpdsV3Hd9vV52WWarcvViz2q9CX758diqzxMrAaPA1FS9q",
  "key23": "5pngjETg5gZb8yrPV16k6GPHPAfR14GLcL2HXPjWXf7mCHNhWW6jbhRazVtTjLiTiupuNF2jfn7pAEBqEvziaLYv",
  "key24": "4zEAsmEvZSYfvaYXAuAu1q1u5T6djBhdwquJApjphPGqTCWVMFrbpEwhUaFHcJ2GkcoUttM5M2Sbp9BBgJbynqxr",
  "key25": "5cV7GgMwmbK8CZyGzJVjkJjAZwFdMvnnuYjki3sAhPFRLSCkJn94oSDyjeLgksveA4911vmxgFr158xGnTsbLPP1",
  "key26": "2f2maGUxtceEU2dxEELWREZfDbCn2k5DAnEMw27tJXE9H1Uv1uhuvkJTenMQmWLy2ChoRe7MzJhEX2JTCzAJdcVj",
  "key27": "b29RkawNKJA7nqVQ5hjthHMsHB9axNSVTZEXZfzcZz8oNDkrEEUEsaX6R59KR8MwHz8HYfo5E7ksXt2zczJ2Tsg",
  "key28": "GuvcmwTMHsnJDezh5eEopxxgajPFY2bUsy2fkNjmHam4mRQTbDJpUM6E5BvuqADfrhM8ajcNiL9c1ZSX9xwmqec",
  "key29": "31XmE9Fr85ZBQqbjUTtE3Qs1YGysKXiVProS4brQuZYRpzeCAg7VC7HHCEXk4B78PMXMCvSTKkZzKBCyPhdhSGVC",
  "key30": "GPMwxBdrXehk2JX9aCzGnpYegLUFdgyWFiqfikHesPve2UhoLZHBR27wLwwNj8GE2DjrgHHSenGNKziW7WTe6y6",
  "key31": "2PfQePiiq5YpkGGDE6akQGe56F9hf2S8D6pR4TRw1ksfzpS5XS8y6epTFDFdr4x1h8D6bCxGu612BJCkyP1y2WPV",
  "key32": "462VoJHXCepeYrpChtedu2BkqiDmDYJfLhaL1T77jSMFCAg6XoyAPReZkxXcSSfTnKVTo8f3WF71Uo2exXeQumPN",
  "key33": "5tMdcEZBaTLJmWHCKFkku2u5Smgq4t724KQZjkkPZDYhLhsVB8aaWB4PiZih7PXBQe4fhZnkWiZomssrw3KHc5JD",
  "key34": "5imrWcfNpJfBC5TH3v4nDNy7GusvcENev4oa2NQYQd43XtKPfd2ovPRuHYKcRX1bcCWaY9w7qDjtLxFdg9NKCSJP",
  "key35": "5n7VXzz269HTdVEqpYmszR2f7sZEfNFH1zn7WmtpdVwGqP8zJei4mWj1sRcbjXsEuWmrTDePqjiMU6ND3KEmGUHC",
  "key36": "4Y12TVn7Q5x1RfFVHRrB3nBoxxkDT7aCocbA27Pw1sSBTE8kapL4APFG9HumPqiVE6dASPKrDPeJow7idXJn7hN5",
  "key37": "uUvE8Lxy8mkyxp6E3m4wR7ixPeojgGFxWTCXgTiTrWq9EaChBMQqGY1KUz3znt2hiSSaGcaBh3N1BwzCYhzHF6U",
  "key38": "4gfT1n2LePagY2FNNgGJ1yCfdZRSxkW7JXu1XDXgW3Zxoh819sYSMfv9G5aZXsAowWELp2hs2dYvFtYKeM6qcD2j",
  "key39": "4S6PnHAZMZtet8X2Gp8buEN38NpuXY3MtfC9E7ZZbnqWf73ekbJwf8JH5x5LRSDnMekVUnzhTjjD4H16ZcJ2BFVi",
  "key40": "5KD71gK6oQ5nVpk7x2GAxq1j3UMqpNTu47NLN5L43mGudyUYfCgsN2RmabjFGLkrfZXrpfW4SdRTJ4BQdpihJ91j",
  "key41": "36XBEvAnKoqSpKEQCjyZnv7rKymKWVTTnJpqT8tLnWyEeMQfn5pVFwUTmKUkcFgfMKDKMwy5etHoJM3kVNfNAkeC",
  "key42": "3Xv4qZLMx8jR96RXwVCC8oiA4Vki8PDG8BTAJn9R9KkpAYhubkp2ic1b33LNmjkvcZAPt2sSHG2fuKFQiBVMkZgX",
  "key43": "4HuvMcrYtjULVpP2HAma4fih9zFoAEx1JaQF4ZxtSVLgJQXrBm2yudkHhZpEogABY7zmpXAcyrURqNYSzfPhm4zn",
  "key44": "WyyU6U292Rt6ZzSgqVFPBW5VNYNDmiPYhdCRsqrcq1eUAZLu2wQNweBmRAYCuCCLxiHDmocKh3qAuCG9TFxTffF",
  "key45": "4TAwhHrbaqp7zGBcF7NvcEC1YS7YMJKND9PVLY6vZGFJnq2YZWdxxSD3LSqLjqTF4n9xTqoqiZi6jxb9Pba2jmvQ",
  "key46": "uJ2tRGqTTPXeQjCrcGfuGg2TxFu5N7cAaWwhrgPxkH5f7VLGFvGhY4nwQAf3z1oZuP8rrPtPtcS1P557r66R4rX"
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
