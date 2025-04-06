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
    "3W9SpsHqEcPY9M4fenSRjenpCs1HTEPWKKHZ81gPqZatyUiA3gbaT6dHwKwWbaUqbJ8ALDfYaruTKQ5zNK3cuXRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jDqhW62ysLgucSDAvCMX2VEyEPVgKLhDPdPyat3sxk4fJgKNmKHcRLcRA59eTArkmexYqr8ENuhnhttrVaiXQce",
  "key1": "3H6dk31ypyTgQtp1U6xZUxXiD7EcMJyT8nFEbCm2GyN1gyodC77TiNUipjdSujUJzNiLobBaXwHWVU2RHFWyoEhv",
  "key2": "5ZWUE672icgymBJ2Y9APaWoyX1KAogqkfJn18MJmyDVRT5HMLL4QvDz5HjLw9RcteavAp9LuUwkGjhbiBFYro99j",
  "key3": "T2zfKxR63iNRKdoYJxu2DCRqcxXiUsUEa4T44BAxC4hE7qkoJWC9tmRkHcE5AJZxpyimz1oY1zMfEerErbqADv8",
  "key4": "4rjoZJcM63YFBwaQeBNLczwh2wDub62Fqo8BrDHvVLuQeiwUxcsfKkhFKYqgNKs2aDkHetQn54MeV1vQYnjygQ8c",
  "key5": "74xY3dEMW6uDwZjukirvsHx2bUXyucu3T2Zj8Xid18fTDuES64a8xioRmjBjwhDoL4bvxEuYEQmTr5jFyoHesxW",
  "key6": "2EhqwzssugjuAiE8JKiKoXYYQekWZwPrBRBgitnJV9df1GDUykefFxc62zbuxG5srqPWezqHX1fUroShE1dHEG77",
  "key7": "3Vcb8dWK56enEyJJ5JYfTo727FnX1aE52VM17x8QjhcnyrhmLg8Z2jEWwybEpnsFpjuAz2mZPUrJR3MzqwwWBWAR",
  "key8": "y1fSGWDBUv8qF3JKP85qVuRX8wnjM2kxQz7pVUjcfNpX9qbp44PDErqELG58roF7xkSk44qTZQTS3sSpSmVH5YF",
  "key9": "3nxWYvaweRx5YknHJxs29Yi5qHtAkxYb7D6UeRMcmjy7pFGNBQeieLy4o7Ti2qVGaaLwbzT8hRpBd23rAqqgoUkH",
  "key10": "5RrWvZGEL3MDhpL38JgxSTTWXhxKLpjJdNxqnKdVRh85UztKbSiKqGNxejnWZYWUJB6mMiYfEcqPi84j84o23if3",
  "key11": "3vTtafTBpxZXX18i4G6DbhnyXgEy3SGz7tzVwehQ7K7fdbRUM5cXixcrdQr2Zj2kDfiGmLQaLqRirHkHaVgFPKeE",
  "key12": "2Dy3HiGS7ZjVJ2TENMfRGE6fJHMiqyWhyp4oP8pUTV1uAB3WPhwXdovrXNJZyge3pC4KuTU3EjgRuf9tt8HUWa7J",
  "key13": "4TWNqg4ZMKVUqRpdasb7qtvY6ogqRYEWtV4rcpbF9YMoMpQJCS74eXKWbnMQBvombs5hLokTVsqM1DoawbR75UJ9",
  "key14": "327vyBUL611bLHHkpMow4N4GCw26DifkBWfdqW7RUPXmE8pxvCik78sdHh8kSqTN6fZ1qYAirAYbRigzQLcytRoM",
  "key15": "3wqm9ntmdnnG6Mynit16YUU4Mxtgk5Do5Pu6aH775tWPxraSbL5qsQsfu2LT3ejL5Yo7Fp6YMsfVYAgHwWBHDdJ6",
  "key16": "5j8CUupUhJgGLK5HAamisZdvSSbKiNRebFvQUgR78BkTPeHMtSvXjFKajg8EnUKEuX8pbjeofqAoreCdvmmfPpRM",
  "key17": "oP9XKtyQoSi47ixvkg25bHJwydGjs7RVQT6cy9T48u8mHkpXYhLh73CM4pKm8ProNeVNLxP1xfhkkxFd9SJ65Sr",
  "key18": "7BueyRFxjFYjihJmvGLT6RmVQj2B2WjekQWnbvKM92hwxK7ovdqdf7VXL6GyQ9JnAw9tEoqLALSMtwFeptn23vE",
  "key19": "2sbCXAvKUCwU2yoX7f7E7Ayopo63TShfHst4hZ3BWbNVKNX9vyhnZnfkS2cPoyMPGUsaQpsAqQg9J9KpNKkjMwQW",
  "key20": "38VXT8UUrfQ8sTUgfidh29q1MGXpr7ShVhxRsrcUHgiJXMRNcPg4pLryUKbnU2kXgZpW9ckTvGaB99vKqfiyGeTP",
  "key21": "4VaSgZJd8VVHq7X8f3FiDMb5PBBQ98yhFDH5dYus8hrhCNoy9WvaHcbf1yp47ZSfsxMJjuDczvqgUzocZ22kTPNA",
  "key22": "ALP6nAVapiPoKFo397PxQ4bYmNnRUy1XHwSgmwrRiGUxQJ8Uyp1vPPJ6etBYcMKqp3Wq6PPFVWzp5yaYnJQwzSv",
  "key23": "5uGy8ymKHBLhbxbkaNxGW3VUam8fQGnQsjs7aq6v53A9gt9ZmL23KhNSQ62hEVPMfrWpjzW5dutSgNUPa99qncYT",
  "key24": "5Gx7bGhD6avQZnwCgmQbhtiB1a1LVXmSY1LsjnHkYQFbkkTDQAmLYoc84ev8w5ubYojqMVXageKqXYwrmAKo1hVW",
  "key25": "49vE73DEq3Xg14apZdnZqVYkViisQzLqtujfY1K1MRq7jxttKHQ7zRjtKDHYrVwKNCR9sCzh6KgPfy6HhV5YSfRi",
  "key26": "3LWAAaGxQZE37WaBu8yGUwZfz8VFNQYwC2wi9undi2WMZbbAMRW13ePVHehvv2BgZuYb4oA34xnh3ae5nG751RGN",
  "key27": "3xJ75fme6w36VRWobHUAfcrQonWj8KeB1ADm9eRViktGJikm9W4UAgHDjsvDRj5VA3urpRzP99aqgn8jc3s637AM",
  "key28": "4fL5Co5prZaoJ2jESMy2Pp7UJ3BekPUJYKLfuXcDWpTeimoYk1CyfDFXseqHHbUGCr8XhVGg7HXyfhTbocaXRwoW",
  "key29": "3iVmQSprmiit8eBou8LJz3WugQ4BfcRC8DCTonv8LvrJoK7Qjv8YNamkwxUbkxpEtt9LsQEhewmP8fk3tJkBzMxE",
  "key30": "2rBXzHx8KmXVG9jERPLb6np4hMkVSytVbMUhXtqehEYD2wQhZcJh1wvkH4extjpkWez8S33F7LMXghEFz1sWNwX2",
  "key31": "2bBKjETknbnHsfTsYj1KqUEqkuQNczMwCdKSNV99CMWnfdRG78UEv4KX92Va4czAjE66kTozrGJoLYDgmV3qQc8y",
  "key32": "3p5jMUTodK2CgZpRreH7ug4LwsKHeojrGiUKUHfAwu7hSWi1SjEGpuyoRbYbiMHbtKwSf4XPJDFvwo5L9jUzyDBL",
  "key33": "3UHgK63emA9c4Tygci4sXGfiAAuEFSVqDi2jTe6PxwwnLRxcS4YL2orgJq6t8q5dGBjRFAHesW6PYr42FthWCsEH",
  "key34": "4ewno9srkW8MdXQLy9xJ1261uUM9zr1QEQ9FbiP3J9zgQYdLMNErEY3XNdxoHLULyvJDkLziBL6bWT7WMozPvutR",
  "key35": "2QqtMYoS6fKWToNPfs5cUvTnRET69H2ssScL5kALMUqC9pgvAFrtKpytW49hqcPjCZ8MWrt1CrNyZFCj8kyGFusj",
  "key36": "5xsj8KCCbbMDoZ9DyG77z7Undgd2zzp7NEV5qfUr6JArR654h386Ah72io9nTjUg62TwNoTai79tBEXQXyUoMrsd",
  "key37": "4YFduzQsisXvQVTrfnrhAdFbWhULcjxUk26gznjofvNtKs4Tqo6HQduSWi954hJsFJTPfYWYaV9BjuUiTNJLQBGG",
  "key38": "psh5xZRugrky4Q3hW1XkarsooqQs4mqra5UsqQwu7z2Mi9yPA4HnsxSWFtp8JSh1jxRzPnatFyKvEGQmShE6DMN"
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
