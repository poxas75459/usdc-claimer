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
    "hWj7gWWKFQwbeLAbZCnisVHNb3i7vQEx9DdB2XPkauYJ4RQgsymXLAMiSrbd118rxUkuKB4dTo3Sraqj7YkDpcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JNivt9HdFxU71SQE18vXL7d8MMexeXgEpCtRv7nfddWRyJ3qn8DyxXMVELVzGcq1aq4sTXQYK2AEZ7CwYReF8wo",
  "key1": "VdovoZ88BMeYCxKa2VL3TnkAN7qY5zNQgWuLuqvfyeGNf8fgi1KmpLjShDZZMJpaxSHVXWsfRhzAKyuiJeSNWJ1",
  "key2": "3rqtmXT3gp5NZNz6jQUnTpXUcDLecbCSU2rMQpVA6k8B28SmwJQdDf1yeBhdW7BkKiNTK6Dr62XmvHLrmpgmuRz2",
  "key3": "3gFWUffA6oiLP5xxtVe7QUXPHchus7ig1TgfKJD5xweLVh8fcnAemDbmYVpzaQzQvJHUnnbUomNtPXtyvkR1nWcN",
  "key4": "n5HyWhojEdQc4z6iiL9qN5fZScYaaGwqT9LzRZh8Acygetx5mqxoHDvR2RDYEHsULkkx9W2KvRcvSqhT6SqEFmm",
  "key5": "gZuFYk3MJqpXUPD9L23oUT8Nb9D2juV6gbKH2C8zqXMvRQMLKmG23AzesYsva8Lpo3KmJgseDqDuTAQmJt5rotq",
  "key6": "222fJJhvZEFRxEMb6VWUnTZQTc65uu7jqixonW1vuh72sjV1v2hPT9ww61rzoSnauzcvTKcHiwaxgxFaim7Am3r3",
  "key7": "3Nhf2Pgs9AnzmHXpiTeqsveazKTDFxptErTLTgb5HHmVivYEtVrdVLVRPzamarirKXreqDSpxEeCqiKijZV9nUDs",
  "key8": "3TDXWJYCJhv6g7oEQL7HZt1odEnUK88zEQd9RNH2HHZX81q8jkqvyd4DhCF7gzN4zg5cFWFnAQmWZhoq67W671fr",
  "key9": "2XZ5XXMcxZGiYLH3ph4PEuJZkVEqybRHwyhEjVGXHWmcdVS2nH2ReTGWavVwQgGLHrPBVaTXMZkVTLnMnvnYScEf",
  "key10": "5tWdGkp2mpSQpBreMT2HK1XCwYRgnfvcuXQ4VsZZPtjgbSHZKZeJJDn5rT7ihLLKTutYDXSJGxb6zmw2ug6MyibR",
  "key11": "3ouCJ13eUqSDmEqAb6dM7AHy3BQfx55zqvT1DeFnddRJcx4ij7snyzMgn21np1e2ebEj5LJF5QauKbqro15zaaTj",
  "key12": "5u2q6xyyGnsXHNoq2DCYXUzUgzGmEaD9d3GJxDa5mVBsexMGZpWbWBbsGLn2BK1EQFN3AXwcyeYT8LU5aAjhGrjV",
  "key13": "2iaPRQNcmqwDEdkRp7LxHDcai8NbM539gyLHoaKHVuZqqkdVJ2A5MywuNFFUzF8Eu9Mis4AzxHAWGo7NeecT5RcA",
  "key14": "5WHEPJgCrN3JQAps1EhHaiqmL6xf6zgKhMNqrksF4nx8LwgZentoQX8Liv32cheMjkWap2n6w1E7FmigGP3Gw9Aq",
  "key15": "4qtFK6XBYaSE4M1MFz85KdaXHwphsdsD2SfDdEL9k4DMtgqNBhm4QTzaRD4tpn5dtWxTs8CrMD7LxskzV8zuLNHv",
  "key16": "3PZx3sH2ggGUjUsSMk7hAux7r47DUvNiLahseo2xkQWah1RQBCLbqzhUmNLTyLWPhtjobU2iFUytFRDkTTzhbjie",
  "key17": "4gb6BwzTBTZubCSdftnqgqfWpZmMaYcHNKYag7VdYrjSCDSRqAMkBckuZiT5xX5XgGwM6ryM2ZPQ5rdEH7Mzv4UE",
  "key18": "5xYBURCaaeFD2K2fLQTuXMDkGS8JQt9GeKJwa6Q3B3iHfJY4S1VmMyzPys3NvcTGGtSCzg8vYFt3EEaFFzR6F3u4",
  "key19": "65m3bDYEWhis4iUxEyTeLyJcbrV3daW7Hguf9QS1zp3BrsSkczbb2gchhv8dkktm7N7TGYvBCC2kTJiVAacpvwF",
  "key20": "4tTHUUkASwyw66m393kqcwMwnSwyqgEYHoVRSY8xynimohA4Np3ht1bHKZoMrC2TsmVo727CmhCbK2kEbvZejPut",
  "key21": "4ikhT2k39bfdutCAVw29RHSyCJEsF2nLAUQ4wxLNkRgBdyyYgbobDNHguAyayL6xoXzRtoH3CyQPnuVzBB2k1ork",
  "key22": "jxbVDvVbHEhj8Tgmdx5HXvm46214NC6QoAL1SJsZiMbE9v1qgiXBhH5V3AMKtPkd1SbLNjFoM7YuHWkK2zDtcoa",
  "key23": "3Bqska4kedUkJWTH4afkpkBwwiS535FwRATrGrgvRDY3R6Qm667cbyFMuKqVrbaEtYPq79JdVeNTVoZRoBJ1Hmpt",
  "key24": "4RCbXYPhQh35kK7MdUqgTXarTAffS7ZYTUMDpJdNPTEpfg6u3g6aAUnydqjrGSiRat7FbDBuYSCKMLTGui7miLM5",
  "key25": "5wuQdnYXHCW5D8RpfCen3jA5n7vMgi6hRWVKHwLBU71tv8bi98heWH7BYiiYJUe9rKWVw3MW1GBUDuUBqk9n3R8R",
  "key26": "5x4uLVAQ7aL859rdGxVgxtCTeh86X5e4RHABkKmsCJRqDLnwj4VWXEogxZM4r1y4VGToTP3R5pWVWoXcWvG63AsJ",
  "key27": "2tDx3BW9PWjK9VXU6Tv83xpxjbrXTiwKFyuJiRzLAhruSssaxHjiPyfktA52wHQNygETDtnUYs74vvEZ393Kc9SQ",
  "key28": "5AkhxRxboJ17yTrsjNfVLLhTWe2MqBD5jfry8z94tjEHkXZ3sXTqcE6K8QVp2c4Ci24yQ4yb59P31aEYagHoTsAT",
  "key29": "2ZFTX91MPzD3pWUshT7wBJYrTYuVEL9Wm8Rmqw7UoRhN9HjAf8g8BvGL2hptH4jVM76w9SCToDvWuhuqKXBp4kDZ",
  "key30": "23H2oYmcAUNXccrZVGbDYc2LfERXo7zHrshzRBBW2pbb7PEGZGTyuj4qcvhNW39KbHVmp9Yq6SrtPHyDwoPpXnv2",
  "key31": "5EnFr8C9it6XdE8nQZXcmyLgbbomKJuD393PDVwV2Vg5wPbNyuWRQrqHiWh7haPRhNhvvKPiTLLsWDymKxy6gWSr",
  "key32": "43epoSnqN4tRsVN5dzkVyQ3uRZpkxnoCRmwtnAw6nbQa7hJfHq48rGzrRVgwGVomo5trrH2tJVZTs6tayJF4p1m4",
  "key33": "5yP374nbzVb3m95YohWfaNWy1k7VrNciizUE1yZupWKZw363rNt8MQusPZLamwmFtfqvvwLsJ9SRhpfB5B27tNHj",
  "key34": "2cqkPXQbtxq9mhfcZTj3AH9mMiKcL3eofcF7mapZoMUzgDsWYr59toYx6Bc4TnWqgCqw9ZubHKXtG63uHoLJnrnd"
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
