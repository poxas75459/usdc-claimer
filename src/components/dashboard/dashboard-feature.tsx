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
    "3aeMc1ZEkbaUxa7vQF5cnwkz3TK1AEJQvjdMsrUcXPRbAfuYuW4fkYDBaykkPruwjydr8psArxuFDJLWy8AAkY42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33JJfgkRxpt6G3edEau31ii25wHYXtzo6QvsKLADW3s32dNBNwkbDKCidwU1N4WvC2eM8NdcQshdZdkPPzwDK1Hj",
  "key1": "3FpJhLEP2uEVHXw6Fv9LzdnuzbSSwEA9tVUETc91Y4TD4v9p9hVTT3UXn9tyYo52uAPM7xDGQiL2smHiDbunVbor",
  "key2": "2Ps8ZDEP1WQdP8pvu8VZP8RUY8SXS6YvX1ATiFFh3WM2RwzPPSJvniYk4juGBZXVoh3GvYefejoiDcGPoh4NrxUH",
  "key3": "VoSYHMGd9nRg3Gjcw8wWN1TmzbejN8y1ssD4jhQdgQnY41yPUUHCe5hYJr9ZLkqcMUsVN3zkCJ4A2KyQaDspXCb",
  "key4": "65JvuXjNSjjzSiynb76qF4gfFjxUPuituRaN6kR2wAj4z3Hpw4yhB9S8WfKkfuWU22QnpGoHppcGVXttLQ3qBGYP",
  "key5": "5ZwMwxqY64ZFVvH2EYa9MmW11KXncXePWRc8jQuyFGeq255MD2mo6ECj7WZLWkDxNPmJGaJgExET8RpBkoh59L7a",
  "key6": "5kNtaQ6N2qvPDikeQLVh3mPXa58nh7wwYSzY2Eui629vc1X47TvLi1if2pVg37LXhf2h3wn26bp7yVbpqHDPXrVi",
  "key7": "4XGEm85vEMt92QGFwUA2fSpouxmfw8Jdx5tJ79AUe8n6aMKXemJw3vFKdCM2dWoadnnfq4QXeNwYZayXiL6qqtYJ",
  "key8": "2WuXmZyzeiKwMJbRNSNnTrzzQ4YP8zzkvXNajnB8pDYNdJiRpAb9yE1QgrR2NwZreScmHQYk33KGwtsBBTp3PcXL",
  "key9": "5GpyMEHiAR1jtJG9hASDkEPv27Qu9EDyvgxvr1M5h5D85zTD8PJxJ7hEEURBF6xBt3PjnrU6gd3WM3gDoNVWiSx7",
  "key10": "2M9LYn1txfMj44cpodNY7J4RjLHC4Rb6V3ue4PYGuLbF3vbQwXXxN3pR8nLR75pNbggRqaaTudMhfHe95uN3Z1w8",
  "key11": "2tqksmsTut9Dd7DkZYvuZ77zCKPD3jQk5j6ehkhDfenZeKt5WpgYWysJ6GXZazi2pyCfHkpfgg7sEyPe9Jp26qEJ",
  "key12": "2AFayLsgQvEFQf8xrCREQ9uqVR7fjyVdzpZY7MhMm133fkUqpZeLDoP5Y9f3XyLJxXa22hpfQoD3KyChYw1xvi5u",
  "key13": "2YGND3BPhfBPYy26CirQNJzeVzp2uxufnJAQjxnoLJdGAYGqsWiMCWzihsva6hxsSF5D23DqqouXhA1FRrt2mfVT",
  "key14": "58VJEPKkFneyZGTSPoRM2ET74vzbAQnUbqichXbCDhCx7f5pwKANgGnmc9d3p7nLMXo9CLv9zgQps3egyPHRBoW4",
  "key15": "2CspiqWMmnC15EE6zAswWrL96owJaia7hAgN2pvnqDyow2cqBi5ycs5rQwn9NVHc4y5Za3tDuDZY8BoXQRD9JZGo",
  "key16": "61UDQQ8AUxgrPxBvA1YhstQAjp6Cu7BQTJpKFmQjd7DhQGbqFnBLvyVMMNpNU3nQYtgQevhVfqdV2jRb3yoLL81U",
  "key17": "3wuVN6DTWyE6zG5fyqVkq4RPHkg4rWTSZh52vM9eDGdmV13aqxUQT5TJrtxKLNyShS6TxmW92ztJnYifynfuimvx",
  "key18": "2P2Tigv1drQCnJTfucgeb5xdgBWayhHirfF9qiTRwhS93didtQu6mWzbGeFEdmvWQ8JroJ34DY25teJA7ckPQ9jA",
  "key19": "3kZgRkbmVdQugpzhQmQA3AEzri9fNc3sGpwvm3zsZi49QrBw3AMaQS94oXzTcy2oSzWH9sk1bNjo7eL4znVvLsAS",
  "key20": "46wUtikLoPVSLiBzfriGpUgPVNbm49tAqzt2hFVxK392XGEXbCywTyaS7jJ19D1Cu65bVSHpNHPftBxjEc7e4bkV",
  "key21": "257a93z1hxVGUgScRoM2ThdUA36BdGJ5tXK4hjDAvaZAdqVHMh2XmhWetY36RAZnAeqETfBTZZQJoHLbewy1tURe",
  "key22": "4P858LPdgQZKweRBwbBopDiMyL3UP6WyUs92PaQ43jyW1Fv1tWb91mA25AqveiFz5Rq4EtcerbCvd2mQGu63Ki77",
  "key23": "4yxEMeY6HxLDaQKsRKnpBBTPYRB2aiKdpmM6yNWqZCGouYEUbUprBe2fHWnj2cq4wzdTWUDuuKFFHSn8F3GhECVw",
  "key24": "51ATWMci9d8zQAwyAvtdvHzGikywkoqwHxLkq1R3cq1ixMhhroviZP17epX1qRLAoVsaRkV81nHuLvSv7vCVqUeQ",
  "key25": "4iBWi8iiznk74s3QSb35ukHq3EyggcjW18sfT4SM7ZhCUcnA7bzMu9NjfjwLBmjS1b7Bs8kCpNgU7Kjvz2u9TR4J",
  "key26": "4fSDW5atsbY46oix3AaqiL8biLC5dqH51n63zzz4hkvJxdP1UxBsdkDgZMJukYimhfQX1LQJFn1LvPYrhBHqYY1V",
  "key27": "5pAsnptvVKDishEwhrbTAZcprxYNTTfDUShEYRdYxyUVyAtaZnUbFj6JNwa63RygFxPtemdcLJheCwdKQmkNUTQE",
  "key28": "2fy25Xbmh7wq7SusxFRkvAyyJn23S2VGZECaw1Vq3vDHouT5wRo9kiSsC43kP38nNt5dddsv8fgFCtShZGiUijyX"
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
