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
    "oQAgAjznLvw8FeiKbnzBmFz7JSuCcMt47k82t55bywRkmFQcyyMXrKcnviqTLwV8zei9h3tiVypYAJgJLveG5DB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5turXYHFKj6PKGSqj92MEQeNydQakQTiXj7MtahL5sbK7SfZeSw2Si5MvGK3BFYNtoadZn2kL3rwrKifKiWRcmv7",
  "key1": "p34n95ZFSC7TZmSAKwebh7A96CeQ5FCyTeMpQHvafAdq9yrhaF5svV6qEfpt8ixVtKHu6WYwLaVWe4QFT25YSDg",
  "key2": "4dtBZWVpBgFjmts3DiW3qBqApZkVo97zdVQg7jzLKQsGtACWjXnUn3Hq2cjfkRwW1wxUZmfc6CEvbtBywsnTJRQq",
  "key3": "3NgymBTb239RM8Rw3sydEdtoiPUjZr2zXwVDa9Mrf9NWtMWWyiGbYadH32StbSbVWPJNsHA9pTo6dMducdVhABWk",
  "key4": "65pBAGYYeMS7dA8kLN2c8MT7mvjhnbERDgCSHX9qxs3Be51RXe3riuLKQVz2EaHveG2ymVMLjtG9dQhonprWU8YR",
  "key5": "5Gxgr88gZ3DYJmDfQptaKMsm5FR8h7sH2ZYH1YSdCJpdZNJSfkkY7BHSr9nwJvZzxyFgPH1WbNbsDQMp8kTKY9oj",
  "key6": "4MBsLMmagKHDe77RcrudJaFYNhQ84vcZKxEGXYAd8yCY8RCuFUbRDUcQxftZ1DhbfcrWexzrUd7PGdxnDL9DcGBV",
  "key7": "26k1Bo2C7AMb52J6KzjJMccVzFcCZGgYVMPjJBmdQjSRFvdZcgCUK9G4kbvkvoh9Joah3V9To849kV6ZSBug6v3b",
  "key8": "5pnE1zT7N3sBMUBir6hhfWiLj4sGdtUGJDEo2eYzgbFuiYTAYJLV5gEZK7s4hCo6RcQMMg3GGXNFJNPzFvbk21gL",
  "key9": "27VqFqWXUBKsBS35yreXK6rJQJ8LH52pjNoJY5DpR2nAW2qJpSorYfmSPdT7iLCypkz3Q4eKXUiGLgeGb1Pu2xnv",
  "key10": "jbpo64u12SU2Esce7ejzSQWQ3FjXmk3ojNbfXYX1C9Tkx1d8XV4XxfvyM7wcT1H6TCuM7ucMvkeKLsCyddLiesx",
  "key11": "2ZEH6sKEaczhMv7bSws5DYTAh15parAqiav4MXjz2xcMPgoqpkxLcdeio1NVwaAEkdoNZ2xXfyZ6Ak7vYrdisTYU",
  "key12": "4A83HKgHtXDRp6dfwQHXcdGZ2dhT8erZYy8gsUPd3f6NkxhM1NwkN8maXUepN4CcrsuuhNzn4hMFQdiEyvcnmDxq",
  "key13": "3BuXDo9mhe26Pav7i7Ubj3f1H85gyPuiT8ru1Qg64prsKXjcShB6rcgg1A9D7N8Yb7dghtVc3eUbNT7ypZyPWsrn",
  "key14": "46u1M5JTZxrsP4cVq9FHVrRBhuw3gubFXfVueoRChQwNoKJrrxCK22tFNoM3bZuENXSu13VUHrZ9M2LMckAZb6ym",
  "key15": "mnvmxKPaESCoTmpwuEzeJvgQsaBCBCNpFGRp2fYXYGuP7LFvQVNYtoJpgaHRaouv98WtnjQcn6SMRhdYrdK9pmq",
  "key16": "2z1HQxV36BHJQLLsm25vvcHoCU8W2u1NQAox2LoWk6LasauFpDKUDiTB5nuamyH87DrUjFWcJ9ujiWQx2Rp1zsm3",
  "key17": "2X2JrL7abt1b24oXkKfpF1yXbX9n6sZ2vmtngM2bYx1EAPegcgG4a75U8VctMSTpx2FPEp1cTna7o5yWr9E1vevG",
  "key18": "448WRLFPU1iqudvjVnFeipR53aFCxHmnfeZLMrdTysuSCyfwf2gaeF7yKrupJVis3SjbEiT27A9aZJSUeGoVmfZn",
  "key19": "49MKM7UrdGxDczMeM6AyT5GZ4ftkiHJRNgQZTvWDkqzY5k42HHnsyXHUMRMzCZFABprq2gvKmCfuorPCLrHW3EEe",
  "key20": "NWArM1oACHMukacnKYzDtzoP8XStgQvwNvEiQ9odumjNNRFbNm4piqQ7WSf5Wdhcnn2WKKup4T3sYMHCgtEeWGm",
  "key21": "33ZpeQXJEmev4ozs7YhB7tYJZD7aEwyTidgo2YFLAnfkGfCWgdvNaqv3y8ZxYs4YP121EWLYYrq2h72TRWvKHJUb",
  "key22": "5kSLxij9imGCFS6Ehg4GZPb9utnbW7TkTYzRnAeYH592GYWbZdbqmgbtrQjkEEVaGD4cLyCwJiEMgzSvAK2CJf7Y",
  "key23": "5PAUqwV5gCypRAbQENGn9kMSctenEwYkjM1z8BAMWCSbFbZr5FPoBCodpxuASMcQPewJKAwxcWmy2KABVyykf4CJ",
  "key24": "5QSGSxGhBNzHJT9EudBRW3MfJCCoXESrxjWTL4tTXyTkEnDdtu3TxJ9tfv6NugrFm2MQDTv8R2LDhoBGKctr7kSY",
  "key25": "2vGJosaYY1mPdhKpGL5SNoS8MZZzAWLmG3nYXocfJ3XYX9PjHXgMoAjKHBAWR8CBXT7zwSsUkyoMQXD1i6oqMDm1",
  "key26": "3q34QqBkYqgBmcg4c1cN2GYTHW2w9pQ7o4go5esxLQEyCuH4CZYntsadK2MPfENpPPmRwANNdsFaP5bHufu7X1R4",
  "key27": "5ph1gzxVn2dw185AUzXFE6FaoPZBkUcRFDiFRs3FYNMCGoZ9h7JL4JKkzdeYjF3d3dgoMUMnpX53f3dUGST8MJwV",
  "key28": "3Z4Z89BDwkKHJbSVHXUUVfc8TyzztJr8WJAWbDQU7zbs9vrz32MMh1oaRjMqx6hK8i79ugoMVvwFBzNF5XvsJvxA",
  "key29": "HwcfuLm2QR5UrAaRCYwU6SginDG6T47TDTG8GmSbTZJDPd4MA2iWoxcfmKoccYepbhrWhb5m73iQycTeNFHqETc",
  "key30": "237kL5mrdzz1epBEA1RS5Y8hopTZGwPbjcA4AnhyGQLGBgpAu9stCQP9D8T59Ry1jqxq9Jt1LbNzcb9u19EkTFse",
  "key31": "2rqkmtrS37ePWdVW8sMAPdoPMsqN7euUinEFoEyVD1inkkMAj2dCC9eCgv5e4C5xTtq2HRH1e65QYa6CDU8RvwrR",
  "key32": "2pUshZjCwWG1TVBrRWNZm2ZXsxRwGhnHYXER1Xk6cDTfiEwvQrhtURjq5DAoU89jSACygNCKFyZmoSzU6e8qYoo7",
  "key33": "31vrHbKgFEaVHBQeSLm1Jdtc18kKgMK4iRSBJRv9sHAVUk3ztEs3LKgEVnPA7DsjvqxLhDu3bVwYp6SgDgEAqTTo",
  "key34": "f8ErzJMD1SbYv6vZ7eZ3Cw79vmnHF5QhtmH4kefCHCXeJXtrHwk6QDz3jk1jhJbNV8iVxo6sfh9rNevc2FyUb9u",
  "key35": "3evbebyGSWMXE7btavqxHY6VBQT7rugUYQ8wgsmm8Z8BrFWSKZ9ZP8hWAroppCdELAAQrRpdfrhdV33oeBHR8gTp",
  "key36": "5LWan6aNfX4e3G1mEUKqZ8rGmqXAXCbJehncSokwYimGjdHPxxCRdgUcTrBHBvqk81rQ38NTbHAFmXcvrKZK2TFo",
  "key37": "RsVdh1mF7LgsezbYNCbEChFNgMqtHAde68nBM7X23i5VFyhraJM9Ab42hvtY1Tnsw5bUVWdC9JGn5cQhpa6iZs1",
  "key38": "46SNzXDu5iFR6JNr48ECbHnnhnFhoU5QuDFgEEADaHXo86nh6aFmBjaBK3EDrBx66tz5SCLGyi6KW6rAuxjG58Ds",
  "key39": "5aPND2v8VaxD5EQCcmadsdQALedEGbzf8asKqs4w2d3UqyARH3gemzcoNzfr7wj7dmtteyfQNvhUjj9wFbDdUgDY",
  "key40": "5UqvSeKiUyWsVufjgUtAzXkWpCwzmNFGqAwUFYspZrFuBkGBfRbPydJLWobjjHTCVZqKWoZABsaqKB1E4Q5x75Ef",
  "key41": "26cnbfDf5gDs4npe4xtsUS7UaRbpzsruKua4rePgZJ7AbfL919KLXrWodMtSwrpyeRunNEfiFiGGCm1yf32YGeiU",
  "key42": "3TvxcRdRGnVBGfbjauUygiheDfESHMYfsBCcsF87uq6XWFA9uZWX66NHfRQ6SrhafZA1Z2aThvxRorjjDsFd3Uoa",
  "key43": "5hCbKiXDeXonZVhziVSsVmf8vKh47ShQLX6iwmAcQoJmCVZokbgxmyMK97KfdHZ2ZVrsFxmnMNSjFrM5M757kkdw",
  "key44": "AEkcvXyySA3U8PwY5D4Dobnj4waW27JcmL4hAwrxeAKsYxLfzLVSGiyBYaeBbWu4UnjMzJJHicjLQxz58NiHPCG",
  "key45": "54aRm1sUVg4p6EZesndne9pBJocHsQLXjbTHn8Jmre8sb1PUsXYqEmCLaAqFG4FbGMQgpQQz7aCxCKxPpYT8tXq",
  "key46": "3Ucnf21GMMTXuJKhgv61vnZBErVqCFBFViU2yxnY5uzrsSMgrhxt9BhGWjXv42sGdDcjA3ujonq2YgRRrVYdaTSr",
  "key47": "5PFnsQchfBviryd8hyDtRnDkfeKgrmqd3JuWMduG5vAyoZP49gwU7Q2VTggQhbnujjgcoP69bqwb753cYDAugtjA",
  "key48": "3ukVKhdD6CKmgkptcKs9pNV2smQF5PLe7ovxY2NBhYMF77niqKPPq8vQoQr1AFC1mjSR72avYRFshV5rK5SroSrQ",
  "key49": "PMJ9Rt8VbDJmrUDRMonFzG976Z1kTdbwdGQVdhaPxBALH8buVrTQGEBMbYBsdFnNm8aUrxEJzudLidRAEG2e49k"
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
