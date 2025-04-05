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
    "5HXwQvojyev1T2BC7P66UmMtxcqYDTeShmeNDo4jd4KfkE8PMAgL5jyBg6rbKL6Rh6cVQmCMAFV7s6WAVsYdbWE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ATQv2x9xcVJgDXaKmd3te6PVbHU1SUHA6RAPnL4mgRX8QnCqJ99pdwG4xEwQcyK8kWJt7yqRY1ZUK6XEhojq1Mh",
  "key1": "4N6SkrwgdqzpGAVB49rujypVtXegFfL5g3KC3HquW8rjNRAAhbBRudmA7gkDvRtd1dtYx261aFBHHYDF5Pc9mu19",
  "key2": "yZS5ZeJdrRzzpovkFgmdC8ixyHP89DKUUQKsewrJZdhGuxBGhXXqfehpHkb1hgLdGdbcSAc2bNujf8ykGfU6Ng7",
  "key3": "385ghqeFXeWLmkcZSLgvfnA3j6tea24qLacf9vCVbRtzA4GcYvHULA7FSauwEve3vyF8J1NC9483TH785Sh148FG",
  "key4": "4McFMVQP2yCXZv1gx2SrjDfW3vh2ZS6hk2VvgD9H528HeAV3ef3qBTtgVC1n3NkbZgbwXsxjUCTsfM83gk13bzbv",
  "key5": "4eoe8Z24eDBwW7MEzfWGRJt2DQQP43uy7WhhExq2SzfQfhJWeMpMng4SRvMJbJcWcyCsUeDMbgWeZsyezqaYMfY1",
  "key6": "2ujDpRkoti8PtjvnjjK4hXkWojArqK6xFgYXzB9G5ZRpKmk91m22eEcu5ijkmHq37rnWyRXkJAFEu2KzivMRsGNs",
  "key7": "5zii2QkP8hkSjC9HLw1bvLrsvqHzjWLjfeeBNcuPTq1TPWYXa6d1rfsG58wu1sz6ecnnQuLrW7BPvpB4Nurg6FBR",
  "key8": "XzY3f7Wgh2bNesgc46jseHhaWvUX34uhyHganLhT8P57aXc44k4PnHusfHF5KJLfgd1R5VpXiT7nkWqnUD1YHnq",
  "key9": "3q3xEwXKYnSXPHuQHTx4U3uQMuzTZG2BhAEc9mqgY8cYVTVa1J5t26yLgnNVjqzuY1q92MYTNz4doVefLE7nTfLU",
  "key10": "3AtLMk3Hieeo1sn5FVswq5uNtZMbtikS44MGk87sGhWW2sSdS5tr45zH9WQhpzc3bbBuZtDWDochhR3EzkGpqL28",
  "key11": "4pXpVW29SgjgVPsDtg7j1BQyNrKRRDqcsexLC9iTwtZPFU54VUPJapirQVgmKyYjkzWfo7kTerJLTt4TehCrzzXm",
  "key12": "5VACzvMffL1BMLV1PCHXxkf8W6QiRon7hY1e3BAtM7YMaY9cueeDin9wAMpJN82T1ZhtYZ2vrYz1n5DneAbMuRb9",
  "key13": "3q4kDaGbyA9vGxA8yrRnzmxqXXgwfVdPZy4WLh7FUJGbagPceJx9vVW8DrrSV27wjbkyw41ZHauLpY7TAQ5RKm2q",
  "key14": "3YFeKUMYB3Znhf59ftXhhvJN3As3nn59EQhN8WWjwPBWARQi56aPaY8sQUK3j2L1989Gh2ZywaxGe5A3HovxfKJW",
  "key15": "2DjMDaG3h97Ds1Yhqms94PjqzDJHQYJ1f5p84Hu9DHv8j4f4oWWzmFgFAQzcq8Zm8F8FE2rcLvi67fzP2ExMtRN3",
  "key16": "4VRDFWtbfweiZJ13R2D3N5qPUVSAgLsAtv7P5ZCUpdyM3fMFQVcsmwLD2TfvPvxrFEb3byGZ9K7v3Ugta2CfGTMi",
  "key17": "2iYF5zYqAidqUpVURQHVo19N54tBQJwKf2yusm3QtiXvsp5XXVxck2edGWWZkUoAYRJHdBeKru41oHt6f3eCvz77",
  "key18": "239zYTHLhe4zifLX1AtxedaEbe92sCE8kHAbRLBnXsuAUVVZBCS4wkknqUTXbnPkPp1ibpBzaKabjogzEHiL7Voj",
  "key19": "5h6ijYrBuypEGrRvMnVrsbC5WsTZzhtBLXq8d9h7YV7DjQhNPCHQMhGuSMqGaLvEKGDsrbokmroyu41YHJf1QQch",
  "key20": "SX61wHktLaEi3EUQxvUW7HYbAYudBRizsYi2jf4K7pdzYEHnDhFsDGo3yrVXnR9C1VFefFYWHU4mvrdz7SPo19W",
  "key21": "2Mhoo6qFdBmge8rXcPJ5jafTyTjrk6CnomHV2P6R5SkQzSNKbyvT4hF7zjsiGtxMzg4QNd2ypciRoCSZsyLjP36y",
  "key22": "26SdHpSdZ4YYAAEZY5buBrtPEmFW3vvVZQLVApzF8zmPMsxbQJM5fjppKSuA2JsejbHezsTJBsscaRshL5H3JQej",
  "key23": "5LVuQWPFCtjPwy4KWcNtMQUYnb4FdtTyNVnSekDZhbWBiWuu597KXko9QxYkr7rxbKwu4mQYypGvfiar87CNDQ3q",
  "key24": "2BxTJq7TLCqCxZ3Leh7zqjK3AjL1opR5Zy25HMwhvDU6V5aExT8biUk6hBouRdG549vEp7PFrLaoiWfVA7d6WoPD",
  "key25": "4wE5M4nRudaMiNwybSbusMP2fTTnUjwxMSRJpQoRHVr9EzoZGNALc8NbAJvs7SzgAt7AXe4taQ6L8hoyxzhpLpra",
  "key26": "2QBPQSghNHxCB7wt7ghecridGhHSQvk7xdaeEBXwiU7wbbU7ad5sYBoszTu1XhsCbbnNjaqa5voNA5vBRAdCixjg",
  "key27": "4PkMYCPTq62AM3ttrNprDFThQMmi9VVZEz9w87uyoswsJ3CPLQ7KL1QjHkU5S5yDkVYtmEXfCzpDT3nCjtQZ9rxG",
  "key28": "36mcVjcCTCZ25YgLvaBrLmsTyiQi5MSrFFLfkKD9Y7dGLkJdiwTpverXouZRPyzBzLCsYSrhkBoEsreknZNLDmMQ",
  "key29": "24k35CVzkCKWCLNZGjb2VGxVGRr34MiLBTUMXxxZK7Lk7JhmPJMEt5vbtp19J3YVHTgURK7xARN8Fif3UpXdWkTz",
  "key30": "5cFwEAwmubphwhNsTNcaJfed2UJWm33c4dJv9PeX38t7yjHMEJeH4pXAHTtpUuUZTKYxfecfhck6B7xb1TihgBGi",
  "key31": "2Zv7hLVzn3RQsua3QEQK5rUR68UHQ5KPpYMGBHvF2WKGXuWxDeqCc54Ew8pZ9b4myhibbZ3KKkoxubHubDZXiyRR",
  "key32": "38dnPwfMcEG7FSGW4BSELBQ69dQgEhfs63NxanLhYzrSjjUJaCm6p5x4Kj3ej1sqTqKrHtjkiRLLLLk5TF8hB7Gr",
  "key33": "JuDRBhr6ZrV2iVJJUWVjQCoNfEUzjULvQNmbuzDY4Tg4hCuFdDBbZt8VkW6EeEVpSc7chZC7PKAUHWv9NaAJWEQ"
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
