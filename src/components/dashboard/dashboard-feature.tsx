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
    "61FHpNVBccawW1prAUvt2wuEc7NjXt4LVi3FKcTeoDwjFuCwUCtAFRgH6ee17P3baZqybARHaTsBxyqu17A5r76B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65wn7DxJ2eV495AammPjjmrAq94Ej8yB7ojAoJ2JtXqNKDnVrEEU5h364bm9YoQFyid6g5T58eEoRox6XHRuqMep",
  "key1": "2sjJZCREoBgEkiy9avDQrff37R6e2y3TT1wpRqkg2hLbbGSXHgw9xv3brEi7jahjeWoo76Dc8Xy7qhoJKpXvNyiT",
  "key2": "4aPp9rv8kexAX6j6MdxJARFNkkyDH3y6kRNwiEGA8MCcDtf5pzW55PCGKThAevzgnb3QLfPomv8uPwhuJXTSpYxw",
  "key3": "2o97GA6Taxeqoj2zMLbMw2PstVHrD3M1DjYsyY2kbLFeHzw5kbuMEdA3n3HLjJ7AMMZgzk153xcBUC3pHwGoTBQb",
  "key4": "4oydShz5ZmXpEcRuvCdZ25ozuL2KpeqRD61PRyzGwJEbK5crm4A56LkrCyDgJaqRaaKSE9cpBKNoXACMqY612TLn",
  "key5": "25smzKZLnrgE8iUxwYW7r3ztLkJLxGZQ7cZcNCJhM6PDKd1QnFgAFJGqvKfSBi69HuTurbi8iZqNJgK4rqkPpibn",
  "key6": "4Ve5U1NuJdepZES5BEgGwMf7psxSPk2FXSjkcaT2ghRf1RQt5WNkAR4PUzhJirsUNY1NuBbLnSzG5Wc1H8ex1xxi",
  "key7": "2cXv7jnjwwfChkHXFzxYAy1EGgfrXFCfWSemzn9kBfhYHzoEc3h7Ax6qeZ5edBzERWSYqme7qGAM2rSgSpbVx5bZ",
  "key8": "3oaXos7DNnhuhdkm7oL3byxdWCvsGDsde2YxcmBcDr2JBrqpcsrjZHKWp9Ck7gWDLDgD5Q3TPj2u8skuuZLHfPtv",
  "key9": "3CppdXRQrqoM3fJBekyRZj7NHPLnY3mJHbEj98BQY5dPZyGMPQhjxdERw92WQDsfqk4YX2rWUUU3b92Xja8YvYaG",
  "key10": "3ZpJSoMBis5pf5PCjaeRfK7HmBQmwemisiTBi29BSkL3eyQSEPypaLA4LXMjLziY3bra6Nu2GaZjhiuHmtPyVgRe",
  "key11": "3rv5hseQBNLCfRNwoAQQC2r3aYVQgFesBxAVLzWEDGC3CrwUCUsTKeyFi2htgfmFN6bdXgxM8TVexUVop1SMeiUQ",
  "key12": "5DoLjFkPJa2TbFzc4JDohthPMmmMQb4GFW6DJYLYY8RcigsQzEKf5qvSiGpRWKJpAoE6fHdtZ3PDNkM17z7YVoMY",
  "key13": "RGcvwmscNXTenMspxxKMwGPKthyaxRZTw7sztRJty4Fn59suq1q3PQYao3rTFQqhJsiyYAyTeUd85YztbZo8pZ7",
  "key14": "3ofvWK4ZmpBgbrFUjbf2iPMdTrhCvqpFNKp5XXHzhdBGbZiQwW4Ur1NMjAzcQHwsD95v5GCnLeYToxHvn8frkxqc",
  "key15": "2mGvejnygmXagtS94xmUkEhpAi2rgaBEzkuEvgkhVdnhxjLEoYPuWRqMgFKViTwBo2btKUniv7ULDpZe9kY9zd5r",
  "key16": "3d6vC5ovxMpWMESim9jSTnJ1JqpC9jVR3gbzbKZarMQY8AEg92DW6mddxhigE7cABTpRTfv4mBcuiiA7xGBRZWZc",
  "key17": "KsbF6m1nd48Xqh7F9hQDzRSb2oRgQWnaFFnGYe9HekqAD9JeA6TiE2NcxTpWY2DyoTC94wS55XDpF35MWL9Vx55",
  "key18": "62Ces5iXA14fe4YUNzRnbeStEcJekgsTxUiL9x9zfzS4tLMxmQMpTUKo21mKGUPR8JXVs5BwswknteA7KMMDJTtb",
  "key19": "2Z4QXWT9vxBev61qKj54dZq1dpd44GWu3zRUueckBsMQdv8gY2dx5a8gbbfcndBthCDrAEUEWvvtS7LtqYUNbps4",
  "key20": "4isDQVzPw2gSqpKQXGsYfMnzajCRVNGAmEkgAzvowhkRjwViHLnuPAvRZcViPkA22CgqQBFQgJVJbdE42uhGhmMD",
  "key21": "3m2io2NkU1KiHRHh92YVKNxcf7FQaLEpvyDZf3B5hQd3v3PRKBQFEyYpDkQ82NRgNyZKnz8XSE9MwmBsMv2yGR2U",
  "key22": "mbR3roaGEYxvPqGPwL31YCLXSUPYnnQ7VFVhDXejcFngqJpbnH2v5Doj4mKNSJZWbiThUp1b1NEvix66PT6fxHW",
  "key23": "2vezjfi4uYCmWueREJHixqg3tJLaxLAw16f3iwKWE4MWtdbVqHWdnZ2k1RZPucYEGPTs8piWwjAk6n81f3V9bpUR",
  "key24": "3SJagidotogQbk7iTghfDYpE4Yma9ET3YzsUyewJcjb5s4KS87MYvdoNFUG3N44yon3NDKAp7PSVn2sR3tieJ1EB",
  "key25": "4etxdjMyf9SWLv6EkVJEqQcW8ChWQTUxbZgdzeNHK7yMhjN8NzoFAgkoDTer7M9GFseEEEgxXNw72EzRBemyrbop",
  "key26": "356qsfFwqHWKECERnqS7yYY8qHkCZomuSWSZJvXqda7zF2Q8GM9maBbmkLiz9cP4K4CWEMHGGttf4o6DLKicbAqZ",
  "key27": "f9HTkgzDADiWCMFDB4tUNy9Qe5L5vkyXb8oGKqevDyy6sSyHNGbr6QDR7DPvMtsoy7CMMmHk5gjFz6K421mGtHn",
  "key28": "3p9d3tViFYxYnXvS4DNXscpiC4Hhngt2Ei7zCTafqg8z2G2HKPUWr8DeDzMiVL7VbeEpGJ4vMcpvUgDriSJDNjgB",
  "key29": "23hiWqMe15sQF2wCWyuD9jKVtstGM2xMFCX5LxWd9DieKrBzGA1EcjxB8NBgmiqryGrNfFQZp9CPbhvPtje3yD2T",
  "key30": "fbfEVib2cDf14s9vm4eKtqUR7riEArzMJDQV2SZZgikb3c4WdQofEznjQGSiQDpGN2Zhk597fJEUuFXY8VFjWFY",
  "key31": "3xwNqAFe5R2P9q3aSUpyZCEwNwGZYd5GRi54Bo6SN2JLXVgoi5zWBGYbovZ4uo8Tmb71Q28NRgm685MWfrX1d8xR",
  "key32": "2GCksbZ73Qz4SHEB3bJs27wiBYWxGNs1y6ApHknhRUvS9bHGqqyQ6vriw2QZL1WPmoMGqn7ompMpoxfhzrMtNpEs",
  "key33": "4ahpXWiqLKzW88rBPpw4roxb8AFtu6qpW2MAfZpZKMEbRcMaqz37ufvEwp4H5uc3WkCVBDjCKZZWxRyEFTw7b8Ri",
  "key34": "37damGfAWiaN4DgUzYRMmeuHWvy4iGRjTC2ic8pByBaW2H5E2zXAnizNZPxL5dcjqfe8ax9dtL5bGa91UYzG7NJE",
  "key35": "5VLMUwPd5nzZGxd5Zb9bHNcdhd4zUYJ9HY2J6Zej8dZK5QdDonmUtiAnRM4Wn2AZQq586PtpePFQZt16QRdwzw7i",
  "key36": "4ymdDEFb1hXSZ8uLqs88BpCaHKhvd6e833f23mav3jCnb8KfuuDTCMzBZWcaVGGxGy3RrPT9Jrx7Lsm71twazqLH",
  "key37": "23cQDMVTtz3R87ptYxRfEghgrXuJ8gGgL5n5L8N6L4C3PLQy4nabAAfW5xqpQBffzxULigbYP5zCoJ4Rhjnktpam",
  "key38": "2eusNzYdS9RzC6XCk5ChYK9hhBMgNvq9wjZDMjgs13ntMzdJ61qL4GdP15r7e2sjHDVCDvz2vYjvuYYysLPTuXkE",
  "key39": "4mRpRQmrHQxo7733SHrXBGL2iCUNYXUXH78Y9pgNutYoXJ4Jt1oSm1mBRJ1Vz1tSMc2Cvd2zYBgQ2NTiKsAmzuqW",
  "key40": "5vheBLHGTce1Y45q9ECvmXy4o94xK8TPAV1SJMzEBedTZ7swC194Anz31NHN5qsBQhuJCNuwwxVT3MxCHB3BVuz6",
  "key41": "36yaifk4XRMbZFQF2JhLJYYPzQDdjiK2ecHKuNmvxtmedPeymmZYbuq8jnjptDaNArEPAFKAGpqzdwHVFKPVrH3Z",
  "key42": "xsSQpUhMPWDTy3uxnmkC6aakiwxfmH8sxkzQMnEdiLAAosTm5vkzUqEpRUF1t4o8h1D2NGWJcFwvyY6eC5FxxiZ",
  "key43": "4mX8FDWWbCe3KNRLezTGYfCDHWq66CaUzXWGzPxM4MJKat9SMUrBVmJuq6hzQqDEC5KJrUSLz2q1zHyMRKEXaU1B",
  "key44": "3VCuYYtDj9LHtRzWhHA8RpZcj4bso4s4yqzepeLcmit6caocHq6rVxybNV4wen8MpTo7xFC3viKMyRqasQmQDrUK",
  "key45": "3kJJ8awmTX1Jtkf7v16XHDDY1c94amHtPjPnLJ7dasXem9u9snsPURWbe4yV6UCCNi7W67hSB2ebFmtahaSMQWP",
  "key46": "5mdRueK4DtZdUQtjuDxkpBCg8kSJE3VUu95JM1rg5KZc7LUozNdvqMoCstrvDnovSSiKAmNjhJ7eRtdBqWhozui5",
  "key47": "KiHtxAQmwYhofqymphoWccBosp2DTyTRGxneGC9KQAQqFrNbHcFWvaPqx8rMHNuiVVxpYcantp3iZjPyG9kFmhs",
  "key48": "4BaGSzEVMJyCrM2pUkXE5o9NCJnRKjX19vhiVnUt7onRjzCUJu3mdNEJQ2WW98T5s6X9v5BgYmVGmYdW5tFdiQjz"
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
