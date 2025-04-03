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
    "2d6ThoFbpwtUsR4ZX5YEf3TnU1PrJwdH4YZiHt1797xVzGxbqwHh6G9rcJSZHFYMA96VWnDmqUPtypmfKvqk5Yyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31VnbUmiHnVVsPwqMEZyERD988GRrE2hxscjEC28j73cARyumo4qyokyJLmDQK9AXjDxtr1F2hnY8dkJ25jATh8s",
  "key1": "42vfQLwU1RZqhPKRerULZu23z8W5BoB55BC7eDY95F8iBQNY6Bob71BjdpZgYFRvDatn6VoYuATSQmxQoXe5HKdM",
  "key2": "WnoVDoH883yHSTah7RV6rpESKkGCBakCR3ipUzrk2uQkLsAstfpBWeHCjtoX16g11d9XeDsLstd2LCALgdwpxan",
  "key3": "TwQVtYpvgUsqCGqyUHQqqPnGjFQwEm7CTRHfwxCoaYXnqqsPU9DeJ4K5CyYNio11VNavH4javFdWyy3yupouf9D",
  "key4": "3zhpTVFYpiLChoAqXe7ref6z1Ae4y1XkZZfNts2VAkNiLNzGDnXnCxpEAq6qXSiPoEv2w2fARYe5CtChMabtRzBz",
  "key5": "4xgHXkvcspkJHd6u3N8UjoEr3UMCw4j7yKxEex5axj7rPKJNivt4Lynj7TeasAqbwu7zqbmRhWNFu853yFZvL9RP",
  "key6": "3VsVyLryELsLbaNb7GWHJPPLrrSFBEW4Yh3N3juS4JVgit7adxg3f3WB6fo28Bz28pTDybsP1F4ezK26R4dRiwkF",
  "key7": "545bWHFmQSZvDATbLdRDoysr8gHoxan79fSuyMZgKREvFHT8bVdWwtj4YRxEMibarwSbtp2385GCxtKV6gvDWqEy",
  "key8": "2FZJBAwTsFn2R9bAVmi9vWNeKREvC5ksQGtzJbdYPHBfw68n5A3h9y2UBpbb4U22KYqrbC6dnJ7o29Q5vTxTfeuF",
  "key9": "26kV5XPZ22iWLNcH36o759Mcf9x64tJoKQezKANMrCJSkvbppUNb5jSitM7rReQmTuJKqLV79GLePy1soGs29eFh",
  "key10": "2XKdCsR4oRdx4CMG1kTDdRhxXc7tUbq4a14uMKm782vMHe6hXgnEGScUdf9Xgf1PoEHhZG64fsWMkX7TG3JXGLgy",
  "key11": "3Z3sgjsjtUsqX3jwYFY7AP75WD8hzRvg2QFrJCPoTxoEbMH6uVEseM5kQJPtLo7EQVbspYZY48EXf9p8Eouqqhyw",
  "key12": "t73fWEJSfz5tbeeoc58KeRP1KCkUNgQBiwtvyWEVbVcpvabzuwgN8YV2r4L5QrjsvD5tpnVuXnyR9RF7GJ91KWD",
  "key13": "4Nd4fTd8gc9anbjcr3fgL9UHwLK9tDPAxL8uxcc6PkZvNdi7wkoZKms8Yywh424VphL5A9voJJPSHHSYwrW6f5RS",
  "key14": "3y5oVuSRMbxH5FTtySkT3mTqLgpeMsvk28cpq81H7Heup7PsqmnBp84YcJ2c3qHKhPSXbeLADZiJcMoUqZ6cC7sE",
  "key15": "SqVbovEhf4mpW2imvXXoi8dCt5GiqQYbD4WiAF7TQJ7LomdiF83tNnqfAmYvTTPGB8tsQALMztH3pprj48hUiMj",
  "key16": "De2xyMQBvXJDwkhFPBvwC7XsFjtEtTghYwyoBxvWqK3nCe5DqzKqr5DY7jNqH5EXDzVS723cM1q8RfEBm7VobKR",
  "key17": "3nTNVR6qEC8SU2wXBCAchYMgLxFTAKJ5FHRnfALRAJi4quummu5vFGqyjt4bfeTSM4CsWyAHB2vdkz5vRd3fWiNZ",
  "key18": "3LWi1xRsfjG3pn4RB3SBzExV7Ly59skmE4NVv9ffBEQvgRcjxKbW42UTv31aGjUwv2kAdjwEijbfMAbGrFjJmU9m",
  "key19": "3VrEjXAD7JK8HprKmm8bUHfwJ3MfjHVS5pM9vPBt4bcCfLp82h4FGivQqt32m4TgZiRSTA5ZJqTfAHTzCxPWccWn",
  "key20": "2sN4gRzXdKe8Ftu3JZChno6Xy19TAwzugXwjCbUKP56rYNdvBzvbBsLp486R2SA3fm6xdec8pin986hfGVp4ojJq",
  "key21": "4xSjeqvQeuD4CmXtmFKG9NrckKqkaPSo9zKRMZuMCPSZzgrz5cTxHDGqcgr7BjA5F2B8BcvbzxpabJUqHxwfurwE",
  "key22": "2VSL7pRuVXQRWuPT5XrckcaBq6diRm44uDd6HQY6RPPahFRFXQvjK7MALKRxTH5tRzafzMN1EqJFieDHQVz1uzL9",
  "key23": "15jJdkhif4rps9VygthhhW5QKBSAhGPKMLa162CnhrgttipGmUR1xK93wMUW9xfZ8xFhKwzZo3FkmDBYaXxAnFN",
  "key24": "5N51F3YnxahbSeSrf88LdSAEnDn8eTDbpZfXNGnjKJW2Y7JSem3mgj56zYiP8KTGVVqtPSYHnX6YBB3PknMks7YM",
  "key25": "4By18M5TKs4N7FyREssZnFyuh6HNj1HFBzerTjKH2BQtUTRXZ83MtCpiGK4RareKHRhpWufsABgs14fC7DnRDUHz",
  "key26": "3R5cCgeozpdqUXzXVe9dohC6TGqQJnhQWXhMhJogMzy6o9k1qVYiA3nMbQnFS15MrWvkrsiby3kD1kPQwJBBfk1L",
  "key27": "2Xz3TDiPnHFkWZHY1CXgC6Hd8BRGHx3WQEVCnWbREwcNaaUVewjLxjrdcKWFt84x3uSWYHUoNVwx3VSuANEzeKW6",
  "key28": "41seh3tNW9BgWDL4EpYJ34engQFwz8FrnKAx5qgRs3AP9LWnaMheRQNnxQZYkvsmghtXLGpTMbQgjyppXLm2cJcz",
  "key29": "9KaMEUhKw7siVMGWFUqiMCFxYC346XmHsLHPGjz8zj2eH8VJyLyqTZaaJ3tVYfjzpSdYt5kmEFBBgSiAXmo9d2z",
  "key30": "QsA6EwDVHvWDJENSN7nrQhrNq4RdH6Q1qqmvUJBfkJkT8NQSWdsyhbUsuNtW3jght3VDaMtr989VYu1CVMPSz5J",
  "key31": "64uUdMvzy96C4TgWKf2LnqgfZyB4CP76MQ8XDSJbUK2G7LgZFQEG2DhgRD65X3sVhiADckzMK5x6QGjw9zHuEB9v",
  "key32": "3evHZQFhiZ6QpEi5BdKw52n7JYFg1xgfxuQtwXVnknCiu9WrocDDQo7bSy4A89jtTvukQvBjCYn95MrrPbSiG5nm",
  "key33": "4Hsvnaatu3wrgrtSLB1MAW5rp4VZsFGsjyFdQNgviwxf6kvStVG493Ej2BPqaXoB8zD5FYpSs44RLELPg63vpwBK",
  "key34": "47KKry8dvkqXqEULbzZDsioymyFHCnhzvpixnGRtXsZres1qvUbKPQxGSqAEDnCgSRCY24KwbAaBdFukEQEyhrWv",
  "key35": "2mKZQsSqFkf6L5U5926ViR25dhq18Bz6vDgJGcp1v9SmCKVRcXkzqW1KDd9z4aqTKd51FdMZU6ZSLyrtbQY48Z13",
  "key36": "5vQp9UQ8H5ZyzfyqQfHJa64W7BnK6ee3Dj2AGw5MGp8C5tiDUm7FFPmA7oNByCyyQqsT2sVkDS1bHk2rYFvG1jF8",
  "key37": "3sYW9dkeKmnHXnGgH7B9eUCYyHNXjemxG953awQmzxhdyM7ay579SGhLe6ZYZ2DGoUM81MQ14jvZmMWy5E5ec1RP",
  "key38": "2T5CnkJzGYNijHqUkRwrS2UZ4QaHcgBRB7gxxEa7tugj68LY6o5PJ1uHsT4WvhP1TqVg4wYjXuedXJxFGNnHA3dt"
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
