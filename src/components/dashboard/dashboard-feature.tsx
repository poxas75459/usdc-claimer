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
    "GFVbfcNyVGsSbjgsLaEmb9ioxagWmXv3LRdCTff4acnB3g3byrVYDV6qLDGd2GLCCdbFxvNJYeL5YDo886EVKYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BDdj2yJ26iZ4iP1p153MJmueAULELAD1tZWJVYKT7n9ni1tzDkSJHm6GSZXC87cQcfURALGQoyaTyGZKCdJcjgf",
  "key1": "4ofBVvSTe8rNjx58HfEHY5nAmB17j7XikWRYSoEfhCmh7BeUrUvMq2fPj5JEWug6xjwTGFWteSzW11j3BncJ4cX2",
  "key2": "2fPnUXRZq2SQa25KX7v7JgU6AuhHwpyCcYbmyhdZdcFoeJi9uCGq6MuTGdPrm25ZmVWxBH1eaBf87wwutAMgo6N",
  "key3": "6uHqxByphAcUreJZ2rSUK8YvRWVfngaTu9af5EfRLvVhcKfcq5PeFBhzwx2Ji9cVTwFdZnzZJgoKhDJko2i3B2Z",
  "key4": "5CMF6VSXipxUhsrptJtjzN1mZBnkVVF3Kb5435TWd4CdYr2QYpUyn1PH1oYVe4yFGMB1U3hQghVQwhAekez8uA6N",
  "key5": "9omt8wDnKRQYD7rc1qUsonVQxCbU9xhKASbv5iipEeERAx3UV6jRGMXwHaVhL4H2ecSxwXPkTpxM3Pnxf812AoK",
  "key6": "cBRBBbWfKjth4pkhukhVwdCxYM92uQRJP89KuxJ5CCeSrPRrpygSYjkXChsfWnQxucAn3se2xSSMTUwm7W1cck7",
  "key7": "2zktrzbJJq4LcoatsiUvunYxY8DkHMjoPcagCP5RQKSeXTVKR6Fnw2bhm1LFrQtm4C2xmdG2TN4HjPC51HCHkWAr",
  "key8": "5Hu6PVWJviwfaoHWM4tRfY3FQnJTkuGDTupEKg5yqemLsmA5XXaszXwpsSYoUUZUa93ehNJfS3qqVR4v7Hs3ow9R",
  "key9": "3rbZg6pF33zRPfX1221YWkciK9hyq3f4Yx4HZ6mXCZTWYf22AAinZZpGmFzhRBmTH36851uHeFA8Gw3DeZnowUmD",
  "key10": "C4ESdYHE4cRB1DSLRouz6SE2o4wwpfT4fNYWfWx9HXWc9hxMFh4w5u3FWNPmsG5U7gptAo95gQjthbRKA1KTtcD",
  "key11": "2AEwQr71Ed6fRqt3nFX9B7hWgGJFvn5uHiwa8a9SRH2ZrN7YhZvfBqAPoT7XY2m4iskxiwht8BK6MqWd5XsvK3Jx",
  "key12": "4MoRLYHhbU1wXWXZ1FTYHQZQLRDeiVYuiwrbu6doveS2Bv2EGfrWFBQnBvZU525xEzVuFp1MJGJJWK7fXh6y5nnv",
  "key13": "5EChbCNwdBDrDFDd93GbWRMieB6uvUmx5dnwfc8hLoYR7ctc2EZdW6T83dREexxk4fD67Z5sSmnKa4kvKjaS3qzJ",
  "key14": "5o1YxXBHUdrRDRY9AoAh4LUMiD15ZecxWbCDVH4RGMACLWutEgGkrTPx1Jkrqe8HcgtXLqsm2Qz1FkujQZzQnbMp",
  "key15": "672K7DLiK6u4UNyAZPPvUCesPd95rWPHz1fAMzCgmAeMVrWuK1n9TFvQqoqd6ASFBksT3L7xfVxFq15P8BJyYnwV",
  "key16": "axrpHN33YHSDfP6dtT3XXJHgU3LUjkkU81Y9j8P7coRTBxUiNAm9xspbKAVWeQ1eRMxxK8LF4mYUWYbyKef9GC8",
  "key17": "5WmcyBAkwHVMLKc4ArDCRtY9kZRPGmGVrp65Mag4RxUsBLunji5Seomk8LcFHysyX6q5r8NZ7rFdPoX8enAZgCJ1",
  "key18": "36V3D3FeD6ZNc9K8HTrCjC72kzMLKLoMnm8rEPB7PhiriTFukPnCGrrDSXggYRXaCQCNVtXjNpjd1Qcsc1Dzy58d",
  "key19": "2uZvxnMfS846ZFucC19Egpk7UY8iLPpXJozx9StBoxD2gMAg9ZQtzom3zWaoeciuQV7dwChAwhqz9KRHuhrupjrr",
  "key20": "3MpBGXCHaaq9VteZtGN2BV82wk6Jfbhh5YzFQdCLaNbdBdtysHf3SqtZXGfARQ8vzrZRbKnnZ1G63KCtzBNTZGXf",
  "key21": "5eV3neSEH1Cixt9Y5kExm4rLAbxC2iKCLAvPwqyk7TAmAPypHouCZzhBXw38qvF8DX4Xbvk8RJD8B37EEzJjdKQR",
  "key22": "5R2JjiPXw5tBJRUnGyQPk4sb8P9eHZCKpEkhB5QQNV2fnyuz4sqDzmAECrFk1gb1N3UNr6gWn6nbU9ALiB1f2ZWC",
  "key23": "2V6b7jiJH2gSrMwkhLFRsV74ZKieTMSC3FMxdE8RRD5X8LAUt7jbJrUTEjy8NqBRJXWAXBVTvBgJb9ywdgmjtebu",
  "key24": "Ezt9H1vQfELZK6JcXWsk6XzbRigoiKMX6Ngt6sjtAyUQJS3ZVT5CFEyjxpaQgg7yLCxFcQDv9PNGtsMNEf3mcaC",
  "key25": "3DHHMD3LrYKrsjXQBWMPjYvGrMcyoSXnxr9naUBnabqbPd9LyRiPnXqzZYvzKusynAxfd4nKtxeu5nJ9Ue6SniZq",
  "key26": "3mtjG14RW9aEaKKy2J6XPyo4P5yE2Qo9qD7QhzzX2iEVtbL7Tkqquztfd17obKSUN2U5AUAyWozKWQCZ99k2bHjo",
  "key27": "4SFmPktehUc87HxmpwkWm5RTjYJmvnV5PAtyAVfQbKLLXEdh9W2LtDLkz965eJZ8q4ZCF7zN8VbhSmk4NB7p6sJg",
  "key28": "Jmi29Jt3Pfs1Y8sBfDFkv98XyHZwb3NC7x3tYF814Nf1i8PZ5YfE9ypRN26ZmAAjfCpdPdZE8HRCHgzYKFP39mB",
  "key29": "5CzHViW9sqF3ZyB6JpBEw8rT3MA2JErvNpkt7yy14h4VLyaKtjmhPk1o7yqZjHnVBoVThfTQjU9Vs5cq237x1Sga",
  "key30": "3t5oU4YKgo5RqugonYEgmmreCAvkobiDcS1RaYitkb4LRBLh668QvSftnfjg8qahjFCgW8YFNWm4918KieRXbE9m",
  "key31": "5P7kYsFSHwXaJtQZgatEVbgJLZsTJ2hCCvEArLw9HZweFr5YrEWNkYKHHQEuAbiR8Petud3UtgWG8iYk7GGCgL4i",
  "key32": "476w6kTfZfrDo7sug6sUVhE3C5Zi6zZhTDxZbMkBGPHgGbXZTowWztEnNBRFdVhDYNkn5wkmE7pDEaa51VQVEdNQ",
  "key33": "54Qh3PEk7Jqin46ULgjRv8DWYAmUsLW1i8GWN83d5tjRKkKgfNAviFYXphDMRNGfT3DshRpZ98AP2iDWNJRRMixG",
  "key34": "4q7UBuqJ6FwJ3RBdpj69aANukfK7Ei66Cha4wSeyuo1SMaE5wj5Loz14mHtonADynj3E6fa4oFpu64meaz7n8D7F"
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
