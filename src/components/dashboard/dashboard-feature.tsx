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
    "28LJDgHtCGwQGRv8rjvsUCtYCc2MxRwjtBECdfjiRJ7p9GgiAd6iXsmWVGJRnJiNA28mjxAiQdKjULC1B1qPdafX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z2nKgRCdoDEum2FkK6gCrrXxGLTYuhTVydtka8ndtgTj9qXe49teuqBVYaLCWsoZEtRdWzZLXF3V9WvLo3ozvuQ",
  "key1": "GduWUEKbkz7mDksHEppx98vwKfbuiryn9SftnkGoqmgFfMDgWfzCrjzGhRrXoGE5TAmeAwM2WULt2pzRCmdbtZc",
  "key2": "45XRzo8PuCbYwjxDNGp84fSrHoeVULb3WSQegvS5UreNHzNqpNxVs6K2SUUv5R75H4p4YshhjBnewRKkEHkDUf54",
  "key3": "49Pzu9rXiCfj1W5vkZaD1JqnKCm9rN3Ss57J21wNX4sUtyqMX4VU9X5YAoNSNFEaQg26SiF567cHZMoMJMm3CH9u",
  "key4": "5zerRFeCxniZy9CgEyPWn9csqhdidCbmDtSAZYhpa9rVsFBoWG9WLbskUX7ubQ6GCcjYeJY2bXuo3JQv23ytYWgR",
  "key5": "HEK2iAAUZ4uJWmCuU7ev32aTE7rHd5DrgZkDZNibZPNjf6PHk8Lf2zQivfoYKmzTVhuJkuX41WJf5n3Wmc8iXGA",
  "key6": "45CBg3cWAarjvZAg8jk2BxWsBypuRUZH6ZCenBvgrJDNvWahL6Uo7FaqtgubyJpkzpS6hZWRoK4orx2N9KJR7wgV",
  "key7": "4jJY4bNhtJ4WbYs7oWrYm4zLgH3MfazPHW9hdamchSh6N42GNVnTAPvAvdei8qbT95PbSpK9QZhNuJCs65gAzzo2",
  "key8": "3mQKXGmaQyfNa5KtJmRoWmPt9Hrkk5QDHy634XBkuc7tzxoRqBrMqp1A4rv3pyEfysD6tBGbiNVxZvzGuvwELT9L",
  "key9": "4jDYrLySP9ixdkaTc61tmQQjtvSp6AKuX8EvtqT1xTEZzX3MS46dRmYXcDpwv2VAtu152tyqrB4fhE5DsiPuSXDA",
  "key10": "2Rnmm89wmxRvdtGmdawNsRziLWmiEGKwqjFreg3PqHhMRrPteWL7Ns8EdZmHwEcxnyN4eV8wEZfm9iwzwpAg31m8",
  "key11": "4PHuSyUgyhQxs58dybMeXyz8BP7f5GDeh6gTCSTsCD595sp8Wm5u6gAm8GrFZ82j3xWvT8yB4WVsunucBL2ZK2qT",
  "key12": "4r7K4CHeYGHDBxwnPYUJ7JhjDALFVd4nXSRJAe9MmyshTgqcbwKFNbp3TkpWDMaLTMUYr4oRUnVoVg3HsdP2nMRF",
  "key13": "TJ3dtcDakgjNnF3AgiT2KcGqedSTrggGKVxmzr3y3mYHcDZrFxaKcLjpcC7b1kkBsYDWNCkh1pCyyQBp8SRFVCc",
  "key14": "5YJavhX8jxBFJStZbBmqB3t3o9bHounx3GsKeXiMtsuX1JPdAyQPVzsGoSjk3raLSqE3rzQn1rD7kGXzPggDSH1U",
  "key15": "5TGq5sKxRpVw3ESJzUYdbmfyks914xoJMRZN4agyXUQsNQmWu6EmRBDCUvgzr78kjmn8zamjSu8htBfMHqY69JjT",
  "key16": "3QazdxvKp8mVfLzZ9Sc8QeiacdTEXTj8X4Kfx1ZFEVrG1g9CmKt5U41zVSF9Rd4jxejhSwALHwX9YEpAUhyiM8g3",
  "key17": "5xnAjvUpF3o2Pah89Y3ZZvpZEmJbxM6V1N6GGeSK5235fPnYUZTRZ8Zg7AxuZaJn6JfAuHq2HWVXMX9QcDN2HdJB",
  "key18": "3pWTaB8HLMWgho1c8fW4zW8XEtx9KtGSrJmhbB31LSVCT1T9okMYX7JkAiq8XiovpZYXVZcgB12nQRxtkSR26jCz",
  "key19": "2Btegred3GjgiE93n3KwcPP5MzcRXXNwhpVHWssRFEsPw4x6X3aCyndhzjsuXQdSSW6J8DqsJ2U8L3He9QRRfrXS",
  "key20": "5JS5CumJ5isQPfaSoArNpe58WHTXSjqz2aeNPJpqxhNuum3Dt2USMwwHjisGdx62SiEnsWuV8wBDf5TDyJa3wmky",
  "key21": "3BsuzfKHmi6Zpsv5VNXpLNe2ws9y563nxnnYVhUMJDGbN8jnMEhL9gbf6ChVZuCKMGtCUk1qXxNLmffkfQhSjUrq",
  "key22": "2dtAEpvZh4eZD9r2MhhBgS75hZkgBu4Pfjw9hgnJo7HsmN4srdbVWZntR8kZ5XNW3EQcovKw28Bpf61QBAs994kC",
  "key23": "32skQ6pnaBegEw1d7amj7XDVYUTB8NPqCBFSp5HwBMryB4qFivNSGDdhd1QmrbwWRyn2hmvnFhUFDWZm6uzrz3Ax",
  "key24": "2FzTe7kW51UmWHCHMSrusxEkoRfkWdYvin8dBUhj4y7NyECHKmwigi89KwKMGjKmZTafhFWQ42gUttdkLbSAa39S",
  "key25": "5q9Nw9u4CEYf41zf7kn938PcfzFAAPtpTRWZ1Qy1Qft1hcLJpBDuQeecKx7bVRJ3hpMAvtpo7xSK835fLc1kz7sf",
  "key26": "5HyhiVBB9zYGS2mRC6eGzbSRBbdox8RqG6T2goDLZzNvjuJnyDNQiA9MXC5gk6sqpociEZZSYqrGoEmau5TY3ckJ",
  "key27": "3Yi8BphaL6522JA746VtGAsUWKKVCYRKXKNuuwLTU8bhvQjJvSYZ6pcTsPDku4VyTq7GPK24ru8fpB8qKCe6zP21",
  "key28": "4ZES7Yb2r5UiDYC414oyjRSwXk69grpGyobMcFZXDEzDjQxkXdXEYcCtreSSAyemSJdDh5evwQA8LiKwT3dVvb8E",
  "key29": "JxdZPFAocdThkryKuDEt2j2RmxDPgPv7AnrN8CWcVJg7d3a1Ugy68ygHfaUr5ekmN9Byxg1S3i3iuAKTH8fYBKc",
  "key30": "3DRoT5r13wW9KejajJUcMiJ2AqujR6aLLXcx66QYHVSpLhFERgQhr3v62AGGwyCpS5aQbcqAdRVSSy4QvuZjzsGq",
  "key31": "56p3GRUmHikfHSB2jPcBUdGrntLHj6gZ2zfftQzi5w6bkV5JrjZUUzFQiLz6m57kDeeAMLdnWUCZWa5VX6r9VEmt",
  "key32": "5LRZMJzQGHdHd4paVuqkihHBMjuFPxw5aRRJNnVk1R6YWJv6cFQzf1jVthDbYbsPEjVpvkDBZEwKWFHdD5fAmaHQ",
  "key33": "5y1fjKtxYmPmfimUK5Qx1uChJLWrcx6idPXnaphi9Hzjs1G7en8qawqBDGsSDFTQCMymRmp2msH2x762Zv14AkbW",
  "key34": "5ut916xPYwvMVX8Zk5XsPktwZvdFaEJKi9K29Ar6uvkR3zkC96CmqpSDH7RU2GA9F1zaUxtQm7vq9qG649sKfj7h",
  "key35": "4223A6PkoZFy68So535w7acxzCkga3QETnbAnF9qVBiGookvb34JZohw2tN3AsX8hi62jhsdTfR29rbp82Eoaj6f",
  "key36": "4AmcssHUuKi6ZpL12hPSRhJu2nW6W78HE5iF8ZFz3TjfGonreduZmPPSRkkZoLzT4gmhBpEFLKvycCCF7CzBpXsk",
  "key37": "35M2Sg85MFSLxfV1uZGbD9kGucc5bVo46iJGNhtrAV6eEsYb312NqFQ7pBrA2ieASt4HsC6hcMpiaeiXPpNbYqGs",
  "key38": "WrRgR3Pcb1uC2kcrCCEpYXNcruQuDsxzKvP1FDkR5KtV8SeH8U4xQftcEUXqxECYVkGPaFLXeXiRBPhuyW1ZL3u",
  "key39": "249bZKWGWvRcwUNT6QKhRHni6MfCknpTxWKKzjNXE5igZ4tjWRsUvbDwH3sQF2XjKjAMhFpjzwi4cpWNb6AzTjez",
  "key40": "3a5B6hMyrdJwdWbFweJ2C9LGTfFXMRBBvw14neDJUp4pSYpZi341SRgrtvR3UhjChyx7dToAEPfAQgAXqLhWnVTF",
  "key41": "4yQmERBp7MZEGZoqUwu1pi3MfNPF35cRWnD9DG3EJwyURVprVTwGH9M28U8vrjuRoz2wwnGSz65GfHNfiZB2YZKr",
  "key42": "4bCYHMquJj7pscwCdvDU5j2Bbi3LAEf6chsg7tEMGv3Uo4Y2EK8pwg7LthnXPE26X6EqNpan5Lwxy1B3tJdKZ6eC",
  "key43": "X8Z2TGprvf4EbRZyE3hGGxyh2FrxyhRLUF4JhmJvRsothA3gdmnLBi8CKVkiiKS7RpPcwtGEwn1f1v7FmEAQ2Ef",
  "key44": "49W6ZpxT7zdG77tmAG8JTyv4nodRui3VZ4ESvvwDhh6AXsfpTSUFYqmzZvDNzR7msFzNVYDZRpcRBaDGmmP98rVD",
  "key45": "HD7K4AXqm8mCp7gTEEQe62Z8YQtZVLder9FUgxmtjRrKsTZzTNxQG8qV5Qi3QGcZXgvnaiQLEobYgERHaKiE8rQ",
  "key46": "4yQJHZ4nKg3UFucC5sYD5y63fWHpVdYq93BMMuYhWsQ4TnMBiJEMh6bbF18uEcyCnkwvRZhWBd11NHJgyUeRvZTD",
  "key47": "5CJFPyRoYcGXs76nU39HqDn3vGC3Btb9g5hVG7ACZUC1VJUKdHdzA4aS4KVHNow5Tmu4xnj1SxhexYcSP8PFNRC5",
  "key48": "5n3MwjQoe8TQccZsgVfwvuF7H6FPtRzjjBtcdGMN8VPXBdJKUN8KGBxgJ9A7XsmN94vAMPzec8HfPn6bwrQQjmvv",
  "key49": "5SMxusnG64SgqrCr5V7h5kaA5AZ1zhDw4TRjgW9r8TWmVLQrNmfanxzgnEWYkbtt26tSBFco9Sakn96Crm6XWPRg"
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
