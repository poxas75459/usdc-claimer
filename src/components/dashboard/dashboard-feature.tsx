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
    "3W7R6nZ753S1Fd4Hp5CDD1hWre82HoGPXkTshheTzmkr8aUD53V46gtQjUeYA5qXPsSGLxzA8cz6z1j3z3PhpUwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ZzwRdRxheQ4rBCsJReKE3DVTCbGTUhqHFZcyWVbxo5q5mzs6bZgCgVWm18iuZdJjVd4brSRTvsCfPkgUAPfpmT",
  "key1": "3Aimoeb2nPpZ8yA1vfjhVXuBz67fWNkHv2SqWhjkzjNJv9WGfKjUmERjuGbK8e1xn8A99gYUFQw5pTV4FQWPQ3i9",
  "key2": "3RJ2sXAWXCtQL8d6pEX4aEf1N6egLJpiDhah2GMMCw1Es9SSWpaVSFsZzNx7HjkbY6pZJzQYssmzFj1Qesc2ae9c",
  "key3": "tb47d28PFsH23dhEkx1R4WNK33ZGBrr9p62nowcdiuaT7nNpfH8geJHTDrYHeurPjZh2RvvkVzDzdJZxS83vgtk",
  "key4": "4ZZ2epxrxeHcH3yr9wyxvAFcNcwVuqpDxjc4nV8jCsqh826ZkASdvW6tTbuxs4zmJNPRHP1q7ieErKaHz2RsHL3i",
  "key5": "2Gt1g8U2SMFW1uzKJKFVSiQ5EGwMoziTfKXsooGzPM4zpRCwr9tSxXSGhEMGYAVpwEb43pwDw6ZEjpvt5d4433Ug",
  "key6": "WLAVod4PzcdYHpMyUeuuTUcDdNv8MYKbZjcYo4ibC27TfkVV1MdezzVoudHbVDorGkZ3Now4Te2desz8ze1UBHq",
  "key7": "4yGmxDazpFG3d6pBrkB3yuPmdGX7Fqr4zjEXyDdE1SiLEsKZ47EUjSshJMxrLG7txCrfsfyboXPaNbhUB99GEGeb",
  "key8": "5i1u9wLguYpbuyTakQSbGQa1RpT9hzSFSdbgwQNXPvRVWBsMAKUwx8FBQd31eiawXKAUZVufGQ1NmGvTMLNCAiTU",
  "key9": "3vbr15wjruuHrh1ooNH2vcg9pWNGodi5Uwp4jJPZgdzDkeaAEGvXgh7fxiT4Hu4HFvLQXdXTVrxScXWHj4o3ABi9",
  "key10": "2b13x7j7n6PFzF5Am7sqdmQPkjin5jugUunWKuKVBSs76RWpH8W2ym3NV4qprnxXGrrMW6d1cdYBELYqki4qyCeg",
  "key11": "4Er3g1YjyfWCpxafiejU1x3jdsi6sC5aubW523SJnTMr2oJDL5wHcu2tm2szxa1BGV4a68sgNDFTrsjDeNAzoiX4",
  "key12": "ZXKS3cWSaxSGUG8S8y1qREjryc3rNK7UYEKTqteUzd8z387Wu4rKVFEWXEdt59eaz5EYrtSNSiynwRfokSzbx61",
  "key13": "3cxEmQeshTTH5KQ1xKRCBkSu21ZrGVfAi63kjrhzKbdRSYQ9a7L7hsTfDqww3wo2oPe543QDzFB9HHwB3xKF68FG",
  "key14": "4xh9hGZU4Fc3e8VDbX9gDgY8AEHBAqVxSW9guKvPBsHFsHpZvUWECLF36phsf2g7p3e4EsQdYHDEDTa4ZpaAaXGL",
  "key15": "PkNsPwx65M8i7QRZ6HL2p5C8UkxHZKWn75XjHVaaWb252AP6o4N9sHmGRx8A4joszPoycUmcBvAQ7bvwAm6skKx",
  "key16": "3LUMETwn7VNRA9phF5tPifEjaBaTB38iAvPJBJorSH1tN433GzFHd3bFTpEjzMEvXm4MXzg8qyN7gRReMALutxWh",
  "key17": "4AxGdTL4PpQUcCQcEkdRvvwBEtSXD9kULumy857Zv6bNpGwsN137jqwmiyz23aAkGGJGDXxJu8w7fKanjD5Mdzmm",
  "key18": "zFcNtrrYkMNwi6Ajv9Qa4b8RSe8Dj8peGg4sSrTCEC46Y3RKS2Rh26FCAiaPrJg2vBzVgodtYYj46kGo77iUgZA",
  "key19": "DMmrSNHU2qyw5T125tFwVF2nYf3shAgqBu6R6ujcdBd8rRRZN79KFLRuWJ41BkbpJ99fJ33x9BSMufi1G9F6aLB",
  "key20": "51NqxzeF4HSVVus1Q3rrTG2rzLDC153GhmV5r9ahGDAyL3JLJc9qREu2JU6mAzrM85c1YXusj4srrqqMYChqzqYA",
  "key21": "5fcVE8C4KwrqCSsnmEdGxkAo6HitgfyLxF1RvY2xYrpuWCH75Gxge9D4AdF5CUfzHcaqDcfT2VU4Rq76gzZFSTh2",
  "key22": "4e94y3thwfUpr6CkhvUKJe4xZdK4YtxFCitfTSPW8Z3jTWudf82Dh43QG5c9nx6jig58ouY3Qvwo7vEihZougwv",
  "key23": "4d2YDi8LTcynXYVmXXPQxhaYhDNZdohhEruyYxW3141XXtL8oUvUqeTp9nhSrn6Jcaf6f4iZhkFZz5h3dEewkcjM",
  "key24": "4MMebfgxcpWgzN5yfdzX1N5DCMjSQoHrM4czpfquMfjP6WCdfCQZYujCtNs3SWRLqep5fvCb33jv8tjT5JQuNk7m",
  "key25": "wveMyf5vhSLCiWfa92BBJbTe1J4XCJXH3SNhVgb8tym4HMboJ8rqLew2tW6QNXbLhAHUspLU9SHz64BziqVbLUH",
  "key26": "3UkHpyJMM9C9LdTxkmMgjtN7kocGKM6YmFjoMJ5xC8VWUwi2yVhHqSQvaKBrti3hVZ9ET1YxHLaphHWzv3gfAMvL",
  "key27": "48LYcF5dzugyMywCEoLr7r8Po7taP9WBX5By7w7a6trCaECwb22wk5PvDteyXhC1iJTnHRgWxzWkvvCXtMfJrTY4",
  "key28": "zVtocJqdYF1CFs4UizsGRZziXUSKGeHHQZf83pjncmhsn8dhncrxsVHtKcvmi5bvhuxja3EJtwVD61KQC1Gcyd8",
  "key29": "34fQaQrw6FjH6zpo2byJwcU5RfPE8rHgBd55i2hyDZ5GWPKFhdwm9FzPfJjuCEB79BbGgQJ2p4JrC8WHtw2ndvCg",
  "key30": "4Uv1hBbrYS9a9MzLcp2wKstbEUKaiCSxoTTqwESMPq7cZ9Zu5p2aGGsDd9oAX4jAQTBpw9qupHZuFroey4xnHgjY",
  "key31": "2SJ2kGAQoipWNVa1LURnRjPJUTZ18Gpxp8o4zqBmTV9PyDHmxQYjDAJuiuGK8U7fbybT8nZ8ErhYdbBXvzqEc6kC",
  "key32": "46LQsivRRupPqcvaMu5Yej8JgCuSXKnbczM7xDyubWSXQRZ1aXEsjNbDWNjugPMEsz5JPwHfPEFQHeQP5DqSqh3k",
  "key33": "63bZ7BCa4hMaxNmv9n43AePQq9mMjQ7gt1Xc2wQo9XQvbHatTNPzNcrWw8wW5ag4tTyj2FhUp3ifdXmUtWErTXw8",
  "key34": "xyzqmnxg9LDZfeZh5bQSDAkUGzf4g3FSU8xH1H7QwvbCbu71CXzCJ9jvRHyrxVvgmv8fEMvfbycePPiABkxboBe",
  "key35": "2LbYpaxcCTN5FHxKgogUnN1yk9iU6c6ZxbBsBZF5WmViBf9gdV8zYkR7uypgeef1mpdHgGXWHg4LkQbeVtq84nK",
  "key36": "3ycqrdNLiBiubHAA6g6u6pToZQGSUrT6WqyUZ2718gxwzKK8FnbS8S7y3N9gihREGuCd7EdHpYFrBDxSwpDAegwa",
  "key37": "53ra1rmzLEc3jhFeAuVAFALeRWQTbyRiNLAGR7FAsR1rUwHVDWumkHipmh73DqLnZjh2iqCLHuXsVC9mf6m2uAmU",
  "key38": "5fkrnjX7dmHctDEjK9agFUKAYpgTcdjvQwb6Ntq2kFVVVuc2WmuD7u4UYPvtz81ExUER7JEEbyADLA9zkPFSmq2J",
  "key39": "4iLjyBGdsUamfZNbo3h82tGPr9eVXCRh1xLPYyP3SUNrM67qbMhejZNC9v8PXC7uqu8LnGcFjYK2RK88atFXjLcN",
  "key40": "41f2BMj3LP7qL7XexazB1AdgphKWteJbgiahQg3DNYsoLmFwhQri8vysvteYAbiNBJG8hGkzeUZLVnvLDL2AgtqE",
  "key41": "27DHh7TG9QP663dL97KUZMVH9BmpofC93tv4tDjdj1U9THwvVoVwH5TmHJoFGQ4yxHFCXUuUJpghkrc4ABJAYArv",
  "key42": "5YKMZophYMpVrHb4qecdRttWbNhqQYn8PfQ7P4TJk4ZrBCK27w6AVaWHNXRgxYn9ujMv2EhwViDGWiYRRVUoRxW3",
  "key43": "3JL9VDhSHTfcwdpA3xALufKAMGZ2kpuBLzHDZGtMtY8zHRqf6CCRSvuPQRAMkEUvqz45NJdq1ktRsCCoZNUcPcS4",
  "key44": "4d7oWE4Ai8SMkTHBDhqrxiagadraPw58kpMNrnS9JG8RNcLfiPSby9tkDL9ztfKVWwrG2jLwNdYoYpmphLm1ovSS"
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
