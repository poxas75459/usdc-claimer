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
    "DRbCej7Q981WgtpyVD3cxQcp8vLHdeoNTmHKeAArHpbm4f4i51zwBBCSKxFECjX67PRXF9HSyfdijX5r5P1ZX3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KzyQNbTc9xcXbgmLe9GVCbqGVkZz742rNthBSDnSG3htQf2ev1KKAKPYMPqtGigDJvcDvvbTUiA5LknHNDhbN8Q",
  "key1": "4rJCJEybBPH7CK8YBXFRLiEL4RNB7geWVRMB4KhvuskcsQzcs5Not3zcEr5UpfAd4Fmdq2WxCLt2vNiSqcujtk8P",
  "key2": "3AfpxzMz9fiUTVSJcALeizS68SgH2X1VVbH2QeLvoEzbayRTG4chLkkZEB57Qn5NFxmVDFZDLAL2mVbx8gqKggMs",
  "key3": "s55TBkKFJZCPTzWcG8TjZ8WcdFSDcgkeYc7rWVcbF8u15hNZseEvMiFEAhDsMKbG8ojsCia9gBrNRCcBRSHLxdA",
  "key4": "2USyoe48aV8Y5SJkcR3xprNgZzyDCYDmL7dpDnANdGvrWACK6k4C28GdBk2RKff7tKUmpcrehjeXQDBb1zNDqS9s",
  "key5": "3hah2Sjtw1baezWwi4NzSWpoB32timJRXYxh13WTEKaLtGuH2YvcEyNZFfJhDHu7Kc41JfAs5YvGqGghXdgngSF6",
  "key6": "2BjgjEUH9Bq2PWCVR7eTjKaBqS9c8tbDX9TKpA9Eij3J92Lu78tWDeNTaYKWcv3DHSdSuM3cRiyFX8gzF1BtoC3H",
  "key7": "32JRzBLbvCVqDd11mtj7ZtVznnt2wEUcP2TrTtU1EGYDPy2ZU2YSRa2K6ec5QQuw8DvimT2yEsLvdYfF5XmGYKWC",
  "key8": "2iJ2vctWyoEQn8kgxzsgQqwxUqGiGLFB4pEfFXL3ZGYrbV6FuHhfFAw6AUbyw4xkCTreRQF4d7VXLv6AmZn5Dfiw",
  "key9": "3TRNFzwUP9wBSxUsjd1No2eRsXE27RKQZwogLcm9o6iJ8dMZMSad4s7utTjD6vWqBi6iBjg3wUnP9JvKPUSDcmp8",
  "key10": "2xdtv4oQUziZc85ZFuSuDjxPfmCzMJqj1zTU6ksJZBv2kphHzAhSsvSMx7f4aYp5rcXX8Hmx5Zqij97Gy2dUiS6c",
  "key11": "4yNbgudDYHjpTjn7yuGvK7R9AfSYMpvpsCmenGCdHfubfdxsgUBrgmzsYALJV3yp8PxWzXWdAVRYtxwidEPeMqHH",
  "key12": "k1AtN6MnCAd7PT3uJ5RqzkA1PnRWKTdotgpYukvXUE2hh1aJ2PjV7yZtHSppn7rv69Qk6eViVYn5R1CXkGWeCW7",
  "key13": "5gQmaP4oyTYF6GyMLQ4gJM6zGiu9etHGdLY9Rp7vNsseCX2CyJJPyEVR1wMiwvhVg26u2gSYyFx2wbxnQdMQY3zR",
  "key14": "3AiVW5gXGkiCD7oZSpeoe9fg6hXcwWCBrfjkfYYQ7J5848mYvu6wKMR731zG4ggx5GSqy3wnWYvomZhtQTRiNd3n",
  "key15": "2svyDovtTHPNGSHksyWaX89YokB1Lnksy9WBBDcRDUfWzUyj7ySHgT28UNuyPeAnEKasUFPZJMhaPytTPro8kkgM",
  "key16": "3ubTgHATLRZJEKNiKdpREwtZbLrfe9HiTQ8YstbUw9WJGUz7wycsQdkUMKFWrg47W4zgyoeFBijG9WG7Zyoas3hn",
  "key17": "2zBNsRbzou72z3jgvTWbS5TTsXqmUHjHyRF1DnFYfTJn8JGryjPES1qQRC1GeQT2AdUexvz2kTKbNzHWz7CP9qdX",
  "key18": "2kjX2XDAA4uEsortYKVbN44SdAXdYbdVpqXCuL1ULDc7VyJ8RE4esntQNgjMKyHwtGwGozdCPfqCh4qK9JSLCXdK",
  "key19": "4ZF6bUr15UMFsGsPdhSVsZuAZgXKah8gKpW44XoVkDhG5jY9hd71eC9qcuBYwC1RKVhCejQvAD9kLskefDE3mEdV",
  "key20": "LkWi6JeNYWXGDgESeGUEzkj8ThzGJrcVtyvojU4YofMcRx1QS6XS4gJyiQhvKCxbHTGCP2RQFqKWkTd7RJHrmAF",
  "key21": "3te8bVGf5BfvqruC4F43PvuC3kDP3TbEg36bXHeCJJkHsA2FnjaxuCjN8f596icz9mUZft9SBPtnaQFkPCmSRpX3",
  "key22": "51S31zQP58hJgheJ3i6iP9x1ZivksPT6GxSy2fzRYaHzhdNfybX3TQJ2bkYpaT7i2nbh7f5kjnqCgP864JqMXA6Z",
  "key23": "3Ni2v8cgm7sBp3JzAc92DvhvMcUaktMbNEgjfJNBJWJyYEtDvQEJ7Midpx4KnT3jfcqCt8xMh67EhK4RaHtR8ifx",
  "key24": "qFNYrP6irk11QqycD9QnGdCBH6VCweuU5CYHJE3yzhbhYugKxkVTcRwzXfYFAGV9zCgwJfhMTxzZTvR5td3vMQ7",
  "key25": "425mHDrFikogXt1WnvPSdwWaMz1HxjjpMcEWY1maxgN68vbhpHPrLjMgRtktReFmaVTmPRckKty4RJ6by5eQeyjN",
  "key26": "5pomzt7AbB2y64VXomPtMQaaHx8brk1pvfyvoSK8vKdrqQBoidUMpNSdLMQiEM7Rdx3oK8BLYSD1g6WFo39HhLa6",
  "key27": "2e7yckZPBGeCsmBMVuTikyPypwwtuA9tgXiDKWiUVtmwikGr675Hi6rWhHwTb8tpprnivhvR59MuBtZeff3SGzJC",
  "key28": "2CJGFi6zbP3gpFuVyVZcEZ2ciwrXytNbyMgWPD7oH9ExnfUHYfa3d2iNZboPg9ZEqKVn3Bxz9fNisvTi2WJdDY2J",
  "key29": "37PWyDqnC8zkRUoEzKivfnoVySUUPKVrG5aNGUyzxxvS4Vm3bHGDDtAGUsUEX1cXoA7vDMxNfpaA9S4ccZqB1zVk",
  "key30": "3vQi2XY1vHfqQR5o4XFUc1BsY44rqofu6EYV2nkvsMngg4SZ2t8HtvpB1FWybWF6bNNfLKyigEfd7QjSGng1o7ai",
  "key31": "3N7a1SKLDaWkz37YJxxBTAh85EUw7jFefw8uajf9rMTZk3E6Suyov2FfHqrb4z1pWrvjuqqEY8FygDrcnzyPthMp",
  "key32": "3fqjBQ83hTagK7SGrdMGaTteV8ggkd915HZbcfuKM7g1eLr6THXFytBg8gWBsaGBqAW76zwSoR2to5n1RF2b9BYS",
  "key33": "3azFotn6eBx34e66grKoZJzvjfPbpHpCbgQgv7HrzgqP1X4b1q6c6Lx2sQSWkopniw6fQbNa3YFzdkzBqq6Afepx",
  "key34": "KHKap55st3aFMHzfEyV3wpHsQmm7Trxib5zAMgMZEsZm5ZN7q7QXxydsfjmTufyzrrEUT7nKFafgT7FZU8vwgKE",
  "key35": "5sGsasQupDSq655NaCKnBGDbp4PEyFK9462GcabddgGPKurieVevE7rdxQf6yNqjt7HoCaVbaX7NLaMVog1SQZbM",
  "key36": "2JteD9kKGAZNEypUGoC5fzLpnAaY8K8CG6vEMatSxhmzWinfjwG2enuhujAQBf9vDNqykotvZMeY5SPNobykDzVs",
  "key37": "4sC7PxfH5brNBp413CDc4QJGEXrBYTUbvpZNXdCbAt6U9aidsnMBppKeW1BwwsyRspqYQJCHmALHVgUdSkEWYA8a",
  "key38": "3km9tk9eyAvoMhtfq5nCh4u6QjwBpDQPPAmYkD7qbN6WNkzGTMqezx2o2XY9y2tgb3dvGQdyF8Se8RC8d3kYXaHc",
  "key39": "4xMf9DvmimuT6YY1NxYVoYZ9jXaGiEhfNJDSixUvj1FsVgdg2e6ahq3Eu13ZDkBuVetRjdZfNizTckcY9K12KfS8",
  "key40": "3iMJZYLo3rXLCejf8BMd3pjeq3GrcmBBnUWyhLZ45qRsRDhWdaP1TNat3eBTj6U9sGXHVzjv68QUxMZFfhRdCUib",
  "key41": "R6Y1WsUv6Wm1Xof4aiKaRbEDALTkuzDCdVZFRtB9PwE32KgvnJafR1Y2hEmcVdi2AnncnyNY5pbXBsjdr22b3dT",
  "key42": "5r1fMcM5SXqP4U3mb8RxMvRU8ppQpYM4KwFZfjoYXJjV3TURYo2kCfEgWRmpnyHgnqkZBPPVRuZovhjGtLzEFRMN",
  "key43": "2BmhC3eY24Za1TAgd4tM9jGA25dMiqandW8XiJwK7LfESeSTStYB7LwZTuuHhXsGrnDzMEZu45fSGsthZA1PzVf6"
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
