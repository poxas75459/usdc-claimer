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
    "5uz5LTLJqWWYPXHfdr9EjaPFLCbhsBRkSeZZMg4jJQDViHVuUHCa44uA8JQ7ujGnYkpiPHEU6mFenyaBjt1KEkX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38MsCtfNaKA7YRpiruY8NkrcqvfXkfj9oa6DEMR7uHGmXeLXzujc8U8eeXbgNB1X8ZmNohNE8qBKgEDTMGjnWnZy",
  "key1": "677P1ZoVqZhepLqAdMheWZigpdqhaVwCD7fxegmYtVU4TKt5GDzqskQCZWh7HsrxPBhnefPiGykGp7HShXSwDJdp",
  "key2": "3ApQt9XKMY26Gfy4H89ja3in1dfhPvezNH2PCUyngMPjYZX4TMHVsciAbVMw8ajKR91nkYgDYAnEHGLFRR3dZAb2",
  "key3": "AudemgyRz7hwhk4csWypGbnV3CLr17gxowhdmAjHfcf4LSGaVvxE5iEcVf9TBXn5RtXk182djJzPoU3Qdd8gC5S",
  "key4": "2s7NNrY3FiQVvfbgtiBB1jMb3wyZBztkfSJFyisX18sthc9tm2eD5bpSSQkP5JT52mCep5QiXjFSzci8H2faXrL3",
  "key5": "5MWD1eBNEjTzPd4qCk3WfaJpn1FuZbd6EAwG9CfMQdsnZpfjTFYgiM6Fsc7atTf5Q59mwMBWxqJyovcLfStW9fyb",
  "key6": "U1jpGfoFxUrP1LPnwabTnrGooyKW5HEr7MpNe6FgC14CwT7ExEVdd3iLBdgxfdA9SHBDFdTz9tD2pymruTX11Qc",
  "key7": "39f7t6pcU51kY7L8MUscj89KtQfdRwFEvy3hiADgcwyKsRdnSijxQZtNA3Rg3VqBNCuAEDXYApz9azJttfhWCW4M",
  "key8": "46EtBbaRp32mRanm7yYvdDmWacBsjFcqVLK7Q8gG65sTCDyvpRhEaKzUvxifszATA9v5JDrofYWtn7Tw8QWhMU48",
  "key9": "2kNbmCqVA6vHveBDhqqegYcGgKf7viEcgGXNZxZvN5YNFCPLeS8UPLfeNY4RnFasKoPEPkg9QyJasjDG32nk8NMo",
  "key10": "Zp5CRrSyELH8zdZCG62C4rVEJ4yiftqKwoQJtm3w4LrvKrqxTerQAeAnHjUbXdJfMp9EcKFrArA9NaoSnAJza6h",
  "key11": "5dVm8TbEnQEUZAWh3oeV7mxs1rksDj7gyrFrTpwGpkmsix11TZVYVsDyWHpNYi83K8RGxUiyq1wPvkstxKuyrvZ6",
  "key12": "5bkStqyRjToA4qYqdPB6X6Ud6uoRpp9BXgjxPjtQgk9ZVQ9Lt7kDJkzEarPWPtw7s8dutVMdEJcxQUEEv5mSCKKk",
  "key13": "Xj3WLJPh8njnvWkAGXuWQXqwhD63KCGTMbLAef54NXtb4THng5PEWoYLhpMcvHz8wSmKhNRha8wJSJSVZuHhYwX",
  "key14": "519j8HuUuYpKWuRGSkLbg1UZKtrMLtCC6gzmWJFwNDJgSPPPXyVG9qaGeNcw7Pp5f2atybKb88zgMzdw6Q5XbXt7",
  "key15": "3e2TfQD9n3KdfAFRuviG3xPYtetRKn7tavJjtmAtcBbRC2CV7UwHou722B3V5rAcckRup5K3zBcYnortCpdNmtVB",
  "key16": "4PLu1ox3ALmQNmDzxYSLTBvq5ehQFWMN8brvTr9zMEiy4PJZM8vMkYZUMrmFwSrVj2F4Db4VWBbWcQLLuNmiqmiV",
  "key17": "5mRBdh6ZgsqpAyUPp2B9xF5mDijVoAhZM91auGj87bWDF9Drng3uuoMidWD4cEaeKodx5K8nuYHEFrHhcsZD273e",
  "key18": "2VismgoZh5wpd6WQnnUk9QgQQbd1DSE4KeSmWZvgm1EC6DqcDVrxuhc9SrRatityLJcTEkMNyukvk58R3vFjagdL",
  "key19": "ysbxN7kHWq7e3m87Y3MGj4S7n3pSdps3Zi6oy5i1wKzzEUpEm4BJb8noAgEBmtg7ZUma6gAWj8XaKgJL5nvd93N",
  "key20": "31nJ81RUDmWdhRc1wYUj3sRG6VxEXLyBRa6PN4wDibYaeKSbjADmqXbGPQpdEkZYY9tUqvb6Mfcct9hGroygcCb8",
  "key21": "3zLVGJbJQWeitY1NsCFSCashcXY7BPQ14NQURkc8TjZV2b8rSsqThPG7pCh5tpaCSwuwgBsZf46qpMuYJK9VdZVF",
  "key22": "43UXBEPXxpkh4NLvoKxQydF4jH52yYw9v5mnN4TVfhELygDtVGkKAkxPKcm5GdU2mCX9ATMTwPzYscepYmAWhpSJ",
  "key23": "4GbJySAaovS8g8VsXew2Qe5otQBJ1hqqmhSjyC55baWGGEVtrnx3AjUbo4mgcbzCHMxU3xDhERKujF2m59hpH7AK",
  "key24": "4s9CbwKEJQSFqANDdY6VkXvoUY4NrnDaW7PSzvDNjYMAZ8GfSr1keMNPDXdKdH3LcDaQCWBCwn7KtBoc1PubzJ6d",
  "key25": "4p1w8UTNYsqKMUkLfzk8N4uyazoj6FtW5w6QbSfHhhSiFU2ZbGmgK3SaN41jmYKWHdJM7JRG3nLfywbUnRkVQTqC",
  "key26": "5t8DWrsVogxupc15sJr7frAJht5D1kn3Bc7bqfEg1t5ZwGMM51dPsuJJkZhzBbKNzZ5br17ueMmMBy3KECnEG9zm",
  "key27": "4bzBXKLfKV7TxWBL8jH9eWBRLAhpCGTKHKTa5ZdCywP5k2D8YoiNiAWsAderUH2QVyrHJD612DP1bMVwFkuPHzNX",
  "key28": "2J2mA9Aj7aAyxa5cGiU3yi8ekACfLJZdxj7785mYuAc6sJdPjx92dhSZbd7WFmBdQDybqeDjfYmiTZqizt2DJ4nP",
  "key29": "2NaGW99kgGfKbZCUpZS8UjmsBsNmcVQi3fhiz8NhNLAxVFFSKxLM6aXJUJ9ZtR1PnkSwxc5uMDFgtJtzoMLerUuK",
  "key30": "MZHETSwYHkvRX7LzoLxEkJSTJc88V2zwpkWQpd5g36y2ou4LyqXVv7JnrdApu9VxnS85MGpR4SZ6Nxiy6wnDyir",
  "key31": "4vvi1ctEoxuiuMce2pfPnfkqKRcMFuQimdJqPV72s3hU8kwsoit2b679UJLc6YtnUVSojt5Aoz1mE2u2WoCqGfky",
  "key32": "3Z8TW2HmGhZkfo4VPY81gJvn2ZN5ndju9QLx82EiZJLsUWTtcJE1Y3bncf1rPthpCFshQsawbhHkAfBRQnCX62t2",
  "key33": "5uFJFw4r4DaeYn6rYrmEak5L1Swo4yPEd5uqhe3DbZY1WDLnm7FccVbmi9xCC1CbayRuAEuCuMUw7egpXY7S6gaC",
  "key34": "5efVW5cYJU8XmwS6e5pThnZB44TcYVUZ8F9tnLu5uaet82qo7Xs4gF6MLPzSwTwA4vFW51T3NTkT2XVYGnvFgK8Z",
  "key35": "3DARqySj2JMk2HR42dNURm9E5qrrxqKHr8qVghPjVDDAxRyDfuantGtvq16UkhaKEYZkWdwNTGzTbu5xo6fk3Dyt",
  "key36": "22C3ghGd1Z4UL2KDoBtLsYRFxP643PV62aj2rUH4tAcgCKnqE5KFPYAiBprkTAUipNDwv834d7XXynLzLLxa3R2b",
  "key37": "eW9QPzftKY1ZqAUy1uC8TXPvTqTNxNbnjKUZiNxCBoRi3NbYyj8wqAm9Gwt6Wv2qwh9uN9mhq3Ay7rnxngeNmo1",
  "key38": "5S3Y6MY239rHJ5HbSZV2JQKp4fUi46EeQYRMhnxjfuULVRfA19cuyhy2Yma62gVdYBVgPC5NfYZU2S5KU5dd8StF",
  "key39": "2zfn1y8bJCEtysYBkTYyFY5cz5B9gwZv21earGU8qoFXLLBDwtJuVJbNvou1SQF8ut8DB9SiFvL9YSeAHeYAzZc",
  "key40": "314zLAFVawLTcQ6rxzdkLubGBqb5pgZhqtRjXAjRibYyvV58FZ2h6pkoM1Si6zNPi4YezqiFT4At2FPKiqewkzps",
  "key41": "5ym1d5SeX1hb5XjbEcpYDhomajk72RLE7817idCqRT3oQiXFA5dxzSPzRnQk5xJ1FQKxcSy33UoJJsFWysFXcgfZ"
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
