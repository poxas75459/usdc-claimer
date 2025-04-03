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
    "q2eCx7kyhxC61cLA5YkeUQZq3QAbSnGCr5DDBK36PpNqyfopkk321unwdZD8qLSLptmm9hCn7tc8c3r1oNhmTz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ueUDmphKcccTHa4NthR6g9AqNK21qs3pFhKCEtcijNHe45pHDJC6bVmD3dL994Zz5URUw4Mn1UaKgPWDvhjoSqZ",
  "key1": "54dTfcyqWN4FFbDxK3vDg8VGTGwZ8BKHoVt3BCM7HVQjoZDW3AfVETXkesx7e7wKTPtyaPUAn6sFzoH62ek1YUMD",
  "key2": "3fYMZSpdXNb4qvvbpBLRTy4T1PJzefQiBEmZZniA13YGtEzdfRenjbGgW46nj1522NBitPu9Xb1PhCx92zMXsJQe",
  "key3": "5m17j1XwufLeH1XsVjRJMDwffEoCBdHKGUZ5U58CsxhdrhaxcTPdumcYxgyZsrzvengtu1noU37sCPxhWEiWSsHj",
  "key4": "32RbYannVCNjRNoKsbmodb2kcQXAqabcEzE5zRmb1Cuctwzu2hwjqn12yGEDecPiA9SWNER3rXqtnCHQvBSxtAyy",
  "key5": "4a3mAADwfEMUtcjvxryjAWEigyp4MwHKC4oAxtf3XE4gfptRPJCkV6qZ9xNvqHNwaXJryQrPcAV8bEjbKaLSGVvc",
  "key6": "ZZemQrviat2RWL984Mwiio3DnHC484qosfpt1Gwb5UtoR37QEcd3qMxTLHqtZwK5tUX1roLh2oB7cZVHtRa3UJw",
  "key7": "5ATgoUPKCT3Z6A7hj7x7ww5gVD7Ls5WiuMyaqM2ehSEBKCMWgHsg3ChPbaCm3wDnAAJFgpnhvviuEjzbWvHFPy7M",
  "key8": "2Y8tXnLzXHHzvkgyHhW2Bp1AFvHscHib1pt4TGygkXnxQGcb19VLkxNUU1u4Uu2B6dkAFLbtfuWkXdUnF4MF8jCJ",
  "key9": "61dMrS6oz15ATSmp9we9h678eJtBWfEdRERLMTdFWHaNTBqdQsCVkxHPbvCqwCJc3rMhJ5jsKdazZZikda3gT86z",
  "key10": "3dXmQyVi9gAhEf7xc4Ua3de9M5Tuhk5NNjUjDyb3AmNtR7KqjJK9kYRa3EESj9T8WzTyjeiyuN2hj6jVSTNwsohP",
  "key11": "2amfrsZtPoqpJSoocU9RMqQbvZCTTvZeXq4mYhpujWAScBW6ttriGXo2c6RRYKvqw7sH2YoDMDW9qSG3L3y6Nxzk",
  "key12": "5DeCxncvCnMxNF1ntFPSaZY3RyY9HYWwBZFLefdJzjYaA5HKuTWhWxiXQD8SQkTYjaX2Tk1KuYAaNQ1bDw5B3rpX",
  "key13": "3oqjWb83xER1BZBYhZucFJL6kn2H543kvQCAfKLPn1GoW6fSqWzdjjQ5wtiZRkVSgDsAk2umFNYH3mqgevwfi9SH",
  "key14": "4MGAaJFEPXb4N6AypTaYiAk1fobVc7BtVESmcNW9VGWyV4PiUszq7P1Gi4Xb4K2qbpLMCq2DphiL8FQoPtbqNrco",
  "key15": "G3AavkJ1dnSV2oiKhgzjL2dG9K6GQQ2q8S9BEk2qDvG75qEk7m1Abdxh2h5hmXBavzyiUtJRbqHc5C8e5rcSGkb",
  "key16": "nSwrgrbP38YtSwA6GEkgMdP3wGHZMvut7R1F5MowofztfKLqzM1BH6pv3vkkSs8To1QAR8rjgYwMYrvv2J4trRZ",
  "key17": "Xi5wpgZzqatwzf4uHPkt9cYyYTnzZdpY2jbDoaByMCQkE1b4q9Vkmf4R69hCMBHW8Ta8Gdj2V8W6pHuWcM3AzWV",
  "key18": "2AB7EKSSvG44PLnyxrKSL6pr7qV8eYDkSsBxmmgBG3Kf6JKtEcbg9Co33guqGEL6Bs5NDgVvLRUx5sD2sYpTRMUg",
  "key19": "5gQai717zaaWqK4tEmwjGzumKKEsExUpsveJkf5vYFpZMvfBLpEkCEM6vTnj1vFAjW8VMqvzZr7exdmsmX2T7UPT",
  "key20": "4bbpHB6a9U96XuNtmNHQVwZXQrjxKNbSXHZkins2iN7JQ2KYZreC4wDc7GCrsNVomoCgAePHH6BpHuEvu49rBjvg",
  "key21": "U5n38MGKJLSU5GGdnqzhLQGnBG5KxFec3vhXxmEtGhSJwfHeRfSuCkKSNotKu88vMUJiC6wyVgsexjk4V4zxebA",
  "key22": "TXPhNS5imDp8enPKFYSJq6u41XCCCvCtZzk3jbps3XuwHvyDBGYFUBU8xfbUY5b314GzPB28WyGrXj5emTzkZJL",
  "key23": "27xeAAd6q2gHqNBT2jAGuC87AQRverrjD8V7rHCkA8fkqPihjouMYKw35abQcAX267LEsaKLLCsFVY4ACJ4T1Gdg",
  "key24": "3cBn3qoWvgoymmLQHT4prvHPXCxKwZuYtzUvDQuNZo7CdmenPsE8XfZQPH19CC26PCk6jKKp3rHz6wu9XbrhGJtR",
  "key25": "4f9LuUMv3LijMWVF1EHqjCFyBWPQJbpP8vneD6QMuPvb2hAVS8CKxndmBaNnacVce6Dxej9NCoVzirXdwREtqGLF",
  "key26": "2ZpCTwhQCbNADrsmDHkqA8GUgFywW3WREVTrR62aacvwg9Gh166HHiLLek7Z5sQVMjqwZgNriX1u3muCUJrxwk37",
  "key27": "3LyDmytdYwDyXnCYUboc58dgiDBhdYqdmr1topc45UwHqQs5KX1SUnDwDAX7U2TvNtQhAeWtHpYuUHmitELg1UoC",
  "key28": "4SnMMHowsKCLjiwn9123HXVWpf6361QRKMS2tQw728GtWNz3EgQ8cZuk4tRESUnFvYVvJytgqPLZd6a876Dncf2C",
  "key29": "5hpku3tpM5JLVJyDPJJiZrscFGEdkyeywuLkkvjwCYZaSFdw2umzq6s8E7Y2UcudoBs2ytTbNJMxV14NrSu3P94N",
  "key30": "5iv357Ff1JmpGmEuZN5PKsGVoR8YQWxnUAVJxCVYcL48wLhSthvMLquLd7uEruKM4R3kJ31UdGv5zb9AvqPH61K7",
  "key31": "2bGzVp31SYYEAtqKMr3XdCHuPfg3eb2f22sWJFYgo61wVcSwJPvqKcepfJvQeThphUyLWEmHXtFjLbKaPEMPid9F",
  "key32": "3qXZVpsqhZBQAqJQ7qn1KAkhJ1FLRuWcinwcRtTWpsq3eFFtfetawLVXXVkzNEi7WYianiyd37mACgYUbpsaKP8R",
  "key33": "2FJKTY3f3srqd3v3TQ3Y9nMBdamReKgiu61SK96qzxJwmCVnfqpH3Mymzk1GkqZb5MMZ7sveafYLMJgDgtPp8zyK",
  "key34": "3NmHY3HQo4ANGwX4Ti8WGARNhrD1eXzHk9Ct9mgxTW9fuZbsHbJioxT6YqsqZWCDTVfSBdFNvF7mUNmPUrMYkj8Y",
  "key35": "5neN81BaMWmA7Gaw6AeE3uQY5iFmuRF2VeT7TWp1dxHjeyUsmFHQ3G1w7CHg9aoJWeFvQdkVShn6i8w8PdgVrb2s",
  "key36": "cNCa9LiFm9Rd2rsCHqkemvh1DCzpupaCYuFMtfN2RJQfLuRFasDZpfbKbMFLxZC3dvTR6zGfHooa44R1JPFmEJZ"
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
