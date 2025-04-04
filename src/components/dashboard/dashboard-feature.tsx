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
    "5Cjpx7bAtqmZadxX2dvFjCurWUyUhKx8ddSXdGGMMvkFCjVvmUr2eMeqfeZ3pYKkchjNZyXktv2bmScyjqHd8vGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jc6qJiAqqnskRojokvqa7xbFPB3oAL9V2kFFsCU9GktiVkRsA5XTidDeCCyTQFyqNHiBUWXBMQf6k5qAEHrtL2D",
  "key1": "5YjA1ihFYbBaF1AA5K4r4UtW1RzkpGYaooj4hKK5z48TGWTsNqFe5UgtjMtQv5oxqGmvQsFoScnPrr9Lb4dMTYNH",
  "key2": "393NBsc2X8AtYGvLw5L3bLYoRAXGeGHWoMaE6nYwcZA6rbBZ9eGKrEBz4G81Kn7bTRvx13QMzd9C6C4EeDWDWMaP",
  "key3": "2Z4aTQQReAcHoVBts78fJcFDJRqLWP612gPHWnuMDTQ7x9JTqB8cbtih6nAsDYQnQGsDZX6CaEUMGSd9HB27gSgB",
  "key4": "4Mwzv6hUtdJmUJjheEGfGJPhyiGuuLUx8PMbcatfQki1j3RjSx5xPQjHnB5So5W6XkjVAcJpPqtEj1nkBJKQej7P",
  "key5": "WMxSkVG81VQS6DEXndNSV1jCFmH4a6d3JV6U6fpUmbEdZDnV57DA9xFeEt68CS4CY7FaXGeDxpGMwh84eMySRVL",
  "key6": "55BbtFYQ6nmAj15xCrYve1zCVaRexRfLxejNRpFeKHojFy9uTbezq8v4fwTBdskVNdFUeS4R5ZSeEA7aR8aVGHbx",
  "key7": "5Piheeff7GrLREspgopQ1B1tvqWxzgyiLEvgL8rtD9gLNCTL55qDwSLYsoJhafTq2nyWpqYoADfLmD7hJVV9v1Xo",
  "key8": "4JUHVXnRGdua2aTscr3aTb8xBuG2S177kSBEezq8WZbj8KTV5mgJUhNx5PAZ69ok23nMLpgfkjGm4WKAe9pCV6U9",
  "key9": "8hEFLe1KfwxypB7Vx54Tgw124WPKymCGGpdz4mqy1HRJw42xPaNGmFwLdXwvAepJN7mnvbnhLrhz8MA9wFwZuTf",
  "key10": "2HvPux1mQ9f54Pb8E1V5aVXgd17jQJQqc2GmnY3Vm8Jiqka6pYD5cUsxzD1WT1pNsrji96YgofWSdzqM8ZBtxz7j",
  "key11": "3jHuS8N8Rkr6hKNTDDEyA8RD1AS6oqSWFEK6YMfdBWQCGez5PySCzcUNMRYX58v7xBGDqP5jjgcWZsHcodpsSUXe",
  "key12": "49m3X9DmPbSQ9GaBRXgbvs8rt1WTktuAjAkmJXHXn6npNV44YVpYoVEzmSbjx6s2ctzsNA8F9G1T8vY4Ru4SFhLa",
  "key13": "2JTA6ha6X8CNuYgKwrimwGs7mfQfqAmRhezjBTbYeirHwvDKEVaiBtGZNDpALeSMBzgBLHsDNT1M1raw7TDtvEaW",
  "key14": "38YbX2Gbed9Hr9xLHGECJSzBgqcBAAcsEpBuZPXZVW8QNzURLJEbWpPD7YipA8yA3iFdHtrdSjKoD4sm9wT239tU",
  "key15": "38JaVGTTFqpp6AAKDJU7pHH4tCEbQdstQKv637UCintbYHxDxfSguWLCEN2yid58pZqGnf7vp3yoExZW7YoDtKmc",
  "key16": "2djLdySWjxDP2odqwpuaaYqaTP7oyskQA3K8g582ny22FbZvmZcUTg5dnPcBGwhV6FP8onbApU9tghcgVPFXJh7s",
  "key17": "iTxxvVg7yqnMey79AJ9VJkyAQX5Mzk11VzZgfJrtXnZHWDusR7XCj71diAu8GDvM3ALgyDqDkCD9WN5Babb1ACj",
  "key18": "441xp36uureuuCynG2T5ykQjkT8wsntAvVDqW5vp3VQcU1mXJJFWHueiESybRJ2HsjoP9reaz5kaZAFmmGRnfhTJ",
  "key19": "4sKno9xhmUVwYKeeAzTsqFky5cnyagzRj6J8ELhn4G9dmvVLzvKrUg7JNtS3aGDDYJHxSwR1jAJqJSCwuNeGaSks",
  "key20": "4PzkHNpTkGbnxPBsH9rXmagym7jXsJc9HcvbbaoModVjRXFFCEEtYMvsgzeUEvB2YzaCrzkxySquHUDtrMi4amap",
  "key21": "3SD2iuHt3z1Z2DRAUmwRvB9HwBBRTAUpeSvizERKuBf5uw5vVzcx1GAk9E66a1V7EbcyrQ18B6EtTtXEEEC2WMZ6",
  "key22": "2utYLNuwPtRTUfb9oWVf9F52sKWuxcNQnGUdvhpLvi9mH8D7bE1DFgSmWqiwVDMset8x1nebXQuM1gsa8CN62tkb",
  "key23": "5UjZTtfQPDjPJu2YVcujuPUjkeCaJ1Lao86LfAKTmR3UuYA37BQEVR7W8q68nxuC8W4AWkGgs24SYnuwZYSi5f3z",
  "key24": "3ZHRAbgtDSp4G7qvj45KwvHsBgBBVLMpEam2qP5gxvXRDGN5o9pK2pxdP9sTdHccZwQFk3kaHc5HP6FimosdNvm2",
  "key25": "35avjb5KPRHvyrwTSDnN1zUzoXQFWpkHDVusQeyuB31MjCqKPWdmDnyHjfuZFbmr6zt1hrLZwAjwSVXkUXBFhEWn",
  "key26": "rmheuzLSdmNbWjUfZmoZ7HMhv4Ea5HMZo494myF3EzNPSdLXnrCCgSXoAHzVVFeqoD2S9v7XuTymSjiyzy3oba5",
  "key27": "512E9YUYn5viDqZ3CVGDn93N7LCEXRZ23gSDo3GScxpWwmHatk9nSihQtgFKnC6sF6tfKz5whBVeygjAthuDZ4wN",
  "key28": "2W3uWm4YeJbG6vAnaoyxEkbtuzhiFVHLRyXaFnzMtzhhR6Um1ezLzriC5ZztzsoXmn8aagMWyVBRFqRQasdUmWpX",
  "key29": "dYRugZx8cqTrGhB9HVosrDz7F7dukK75qZYRSP748ALXLLuQHhgmQvhYan5peX2YXSFkZjT4P18tW1FHDL8cfSE",
  "key30": "5hHe7aYSwWSwFJPcYBgYh4jEMAdExp9w8tAruJuxmXJ1RVeWJJ1pA6bwHKREqEzGmMW18eCoqo6bHZ8bm3vhVyr2",
  "key31": "5UWzaEamMpSgyEZoiK99L4QpvUpxTmW5g3gu63BqHBRr7EPS1dFp2LS4cyZixpK39hMLVKv4EHxHeSDpXen3QrF9",
  "key32": "5dZJ1fLPqstwMW9hMh1feRGzSDsEt8JMPEEBtbCjzCfe7eFhnfszKDLXDPE8P4wL97njDLvWv44htk6a7YzpCQ3i",
  "key33": "3ftrZ1jejyzFnDHneQevgpzgAHKXovBTvdVk4ii12qoCS3mR6cYLMcdD7phS2Yxxu15S9H1rf8QvHJxMTvzamo1H",
  "key34": "5aJ1JdtVwVT9RdzgtVC7f9uDrnRk5Tdbr2xNEomLTb3YiJms7fkDxsV75tvD1XrMGPuFjS4D3kZp2Json2oktb79",
  "key35": "63GC6HFrdzA42kQ3BrkGQ6wfbyiBMNTbXz7sqG7uK3SnfsrP4mGcdqj9puYKCY3q4uqCStoL8FeB5SDRXcx91STi",
  "key36": "3sB2deGQQcVxucgNEroxMza9HM1qf5X8fHiSkxmuk1ZLTmrGu4yZoENu4JG5788kBk2eWYQWqo1g2LmmJc5X4nfq",
  "key37": "3XWBcNqkoB1hukgJ2LsV9M33yFPvPvRU9pZ5U8MU9tWkSo7eer18YdRcEKdM92CZ23syMcJjTWfqxGUXy15g46Sd",
  "key38": "PdduizV6n7yzEaYVRxGKHGHf9NphW7sh1antkVBWyguoTDajZsXn3rUAGodzKkDr8yYZuyCzFkhG4tBNe8TajyV",
  "key39": "4qnBnotamgNjo3odz8hAMpr4z4TunkuycmUjq6v1CiMj9F3frzLKaLi27fPvpaHwBjSJdJfYE4Q63fqB7fUUJtLq"
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
