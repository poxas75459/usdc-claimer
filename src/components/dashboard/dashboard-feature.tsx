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
    "5UJCcdRG87XnZ8yGg6Fx7oQsbpM7cDyueYrmJM2AL3BxsGeNhmaDd5tCtKFVjicdaJZCZvjEowe2ZACh3dcuxDBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53UwG6GRK23UEFniqQTNR6WCz6VdkBpwVqKKkok7dksZwcxp6vCtPMJZoPQwEJc4qd3nvezrw5XD71Dc8DFQQrpS",
  "key1": "2NSRiTQZrDUkqgaxbFCR4nf5qX9aGPGpAC7kMc1idgShvHY3ai16CoY8KmZsavbGZ8qZvnKrywTVT4TsQAVXuBCj",
  "key2": "2T3CMAM3Y8B99ySGm4bXi39HpPXJtxYTvmsArJrYxKqV3pkWDAgmBRogQSKK8UkcQzFb99BnuktseFzMk7xWfDS5",
  "key3": "zhzg7NPJvUpR6DAD3Y5maiG4JVFG6KUjd5th8dLND1KwdVDeB52RMUCuSDjrC5nziTHnGvD7Eud5uvWoWYPLxPw",
  "key4": "29mKowUZcshwJbtDUDyhTJ2ZEsRBezwdEqmaLg43LyaBHRrBWX7V3rb7JAQNqCVq4KeFQgpacaJwpLcDSxPAUZb4",
  "key5": "5RoHbY3taGJe1KDdi8uAxhWkXT7rcnn8gpyNy7sUrcnY1W3ZHeEceYKJC5MtTZcDDJ54TPvJ1DRwn8aor6fn4hK9",
  "key6": "2Pst21t82BE8kXrKvCVQbmxkeckDbfSt5hhtugw95f3tKTo5kMb4xBZewuUtzUqsEjuh6GpKpo7d4FRk1FxenRsB",
  "key7": "5JXuCerWTmNN8kbSpmnKmjyZp67U78EH2hSPm1Q3TWkaGTkBs1UUDMaPfQSqWYqjo4VaggY8LSiyMbvP35XsV3ZV",
  "key8": "2n3uomSa6GMrdaaH8hSVDm3w943hJX6g55r6rWdgsvZcAsdykWaJZ6WsqbrVRkikXYaYXf3gvvQqUrhjXcjivTye",
  "key9": "3xugzvP9mWpo9SNPGkfNd9B38qsZHDsK8U4Sc48Nu45q9ac7we6DpgnX5jYdg7pcGxvNarK3VQbzNXJXJStr8sGV",
  "key10": "2jfVZ5nFxgjd4UdhRoj71DYziPxAfsZQH4aC83DtPskJyRuytSpXU6yehKRajC4LZTxyK5ZGotxuMVgrFjjK1vCX",
  "key11": "28vM32ZcmVzygDGB5HaGysRZ2JbFcUVD86y2sEek11RN3C4eUGmXHmaCkASBeMmzkJaaDj1MefDf6WRpjCbJ24PK",
  "key12": "4pwyWtBKsTdTVE4grk9hf3M1y2ipp1DxHjjbx9yqpACufv6C2vBPARADrpAECu3No8EUiRynt5BjqBqG9BH36FrF",
  "key13": "3RVtBQsCTFNhjuAFBjZZxCKARTPtxbY2jwQD7b8Rb4DnA237q5BZzxNMKFbjXTC1ze4kRWA6yQjsKE1eKh5948eW",
  "key14": "4NXrLY9qaoGnPHQpegiFtiQXMArTsvEse9WUXe4kmfXa7VKw6u9FXvn6e714ZHp6nYQ1UNfZAf7dKbPeqtRnUCZJ",
  "key15": "4QLqRC2ZEC5RYAngAhpoi2c59ezX3F6FEkTwm3DM8HUtrE6c6CxgW1vACrCFJCwZVSZLYWJyYSVbAsUHVgW77zdN",
  "key16": "4Bd81MZJy4ExbsJqmG7KSmqQQYXgbP45tcvqA1TgUsiK19fN8ExTRUk6oUzKK8bDQq4jdBbFpDXcUkDg1WJ1hTwD",
  "key17": "54u4Hqh4iQ13YzWpvbcMgpFzpy5z1caKdEg886pxnxZHi1aaSdobJxxPHiDZiU5hq9DS95zumFTBNsgJqiZaW4mK",
  "key18": "3E9VSyYTZsT2xs1tieQiRYGsDrFiWXzs952S2sYTybM4nZnYqmUh3ZYMQiLQuXP98x4Zu4xLBy2mf3Gbi5nkR7Hd",
  "key19": "5S8bqein8Vy3dNo1PeRwDCV6oBfkfCbhiKLZ831Feve1ph2WUVhbcHJ1oUWxiqWXcSyr54qZHR4NqVTzCCLPKSNN",
  "key20": "3JgG8eT6bAUoKwW7gRpBSxRPxFTjbeTRp8J9VCEDyXNYRbzWVPUncuVfeJmxy5ge7VUN7sfamJzNoSTCPinpHRbV",
  "key21": "8FBRnXiz7Pv6q9nNg1CnHqzG4nTQVZHERqLpL8fEjX1vhRFG7vCQEvnG25ru4351qYqS61JhGCwvM4a721gqrHe",
  "key22": "5PP8zjH4uhsJocVT5z7hdcefUbYBwuLX1xJeQJLBYhNGfbcZedDrYjSnCq1BkwhCq9vxqzvZoYJZ8wE7oNMSUyhS",
  "key23": "3SBVPNJhdDbUfuKs5YLZEu9Auwr199jEgwihn7EqLgrpHbd35JnGHBtFHn1xo9HbixUMX1XUUTh9uSLLfeqvpCmk",
  "key24": "Kf4xMYcDfbPkY7ZhCo6bJ2kMXktYRULFRAH2QuKdQQrJvQGornwQ12GsL1eVQdFYc6m1Z7Tg4mHUTUdz4ac6ue2",
  "key25": "64A2j7txasaXndAvKpM47KwKEmMGRQpfUewrwdQe1HxWdS6osM7CofA14WsBXZueYEDVUXEgFm4tYvpib7Bsdoht",
  "key26": "5PXBrSyrFL7HKjDbMeDzHvagfCYP44noLjwWGPNsVHoGLvUd9ieNqhtztysKHSFidFgcKuZSfZKKHp2M2M8VzgUh",
  "key27": "chtqfU1YH88Q8g8wiK1NBwGEtubpba4wpffsT5N5zumnUCg9LDquFqcpUu6gAkLF7kMNi4HNh9YTQFGZZfbei2c",
  "key28": "3yWxdxDApeFbzPbo6T5zKofag9BPq52z4PgpH26zmhuFEitfD4dDBjHLQnMkQCRKg6io8uWaD6N5zS4T9hFaEdeR",
  "key29": "5sDbam1zaeTQe4MAuPkTJzhFySbUc3oYSVmyEC8x6idcWHHrbjyf2FNX5akE6GiPxB9F8bKCBsLvCnrHHcFrr5jL",
  "key30": "43h4bhZ7Za5b9AkFvxFJPDsp93XhKNQeACBDSCNpE2sE5mbJ54pj3Nj6YmVwiQedSqkEgyDGqJfHGMwGgA8A8CU7",
  "key31": "YCkveuZxkhAerZEppjnXSeVJGvmzdAELLPPFKwmNpv9r9WZjHt189jhm5MBRX81cLDwu4iaxQb57zFGu3V3ZKBj",
  "key32": "SbRtjzp45kU99474PcuxyvkrgRRExWnstinJoDGv2nBRLMxdDT4UzNhv6ARVPRxoabvwsQJHp3jRRRXE4bNfpT5",
  "key33": "4p7h4vizzfBhnMQ6TKJfwBDezu6yrJPTh1BgvnB7JDvQStvcStA9GmbE9bD82jNSdt9oKSW3ZiSAdvhxTL7jUJRt",
  "key34": "2tUCvnPi2dQoq5JREySXjJNhqjmBJbhtzo4BwAoEW7BzvikVoGy3ykf1zVzA2Y8LP5HCqNkK5AkbHVE56AFkSU34",
  "key35": "3riFoJjnsLaJzJSCZck5kEiXBsJFZmdGDE7kCKeRq3oM73RddBXst2G2Vr8DYuueCuyD4RjXe7yAk2ApkEVrsCHK",
  "key36": "5uVdTCk5W3hCUorf6gg38K3puDcogs1VTM9TDzoTJJScweYxua8hZFYQ5q5chG12Ug4y2Lb3U1E7Lv3buLEDooqj",
  "key37": "3rtdhHsqD4LJyFrcjtgqT1XhKBnPTL6UnNjAGyExFNk6n5kBLiYtbKUUge4XXMGV3ZLBCUNrui5t4nLWiCerpyw9",
  "key38": "hbgq5TujgsRuWTFkekkq98tHYRSV5JFsnz9VSaBx6uoGSS6Tv8ufJnSAi9fSCeTZpCC4n2zxDG1H7zidCNt67hA",
  "key39": "4s3YJgDdMZdV3wUDGWWcbFFV1dNUH1T72C853woW6B5Tro4thauYjEiKj2XD8bU4rKfpbxHAkd1Z3hFsgAnjAAQP",
  "key40": "38RyCePxPFZ2EkUn1KLseV3nhH678YzhXW7WkaPaHuKCdt8BL33f3mmrEKEUyJa6s124ywB8h6mP7BSDpRhhMds8",
  "key41": "5tdCevKBWG2uqF2QDx24LYEPa6gKuiYyxWPuKMGZwfXCoAM6UCuxwWPJmFDM2KjmjtZw94PCcJ9YQicHU3jmAZqT"
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
