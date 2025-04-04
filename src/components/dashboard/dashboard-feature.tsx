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
    "285LYjmhWuhqCcexuy2PvHJbxYTbQqgtk7dRTj6ymeqrhHAe8oDK7F1jBdQ8oN1Kyw4nV3oKew4U1Yjw3GtuAPyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NCWztiMvUsbzr6HFApyK3TMoJdbmYGb9uzs3FG6pntUTcqwuXAaWKegDpUbfnSq6gQscWoRw5rdosSCem1crXvL",
  "key1": "2YuvkX9DphqXg3nQWRGF5P6uYub9QFJSGLEiCoCXRBLnHWaF55JCbXzyhcpaeXZ5868Mcxh8NkrWYDYozk7LwKBV",
  "key2": "2xQP9Zve3xESdw3TAEodC35pnJEZNJ1vghiNc8352xqkoyeNhuK41yHZJmqtbC52TBs7KGSuYg9jh5P2ULR97X69",
  "key3": "1aUvd6AvyVb7DpNxsdqgGnB356CdiXoDoQnUzgqbixNgcso6T9MzirZSmDp6UjU2t5X8x9SVEb8zzttaiyUNpHR",
  "key4": "3v6kYJ8jqqrZSEvci6CVk6MNHRyVp9NuC4z9JXXw3c1RZnE5kNVN876XAWtBJ1QuF9FvpKuSvznt8S75gtyuRyzA",
  "key5": "2SND6mPrj22ZAgjguZ8xLQfhy3vMUfoncmMV9LF6VE44ec1CGL4e5kLi4Z7Q2CMee7Vj9e6MjxF9Mu9qhrA6PxkU",
  "key6": "3MAs71iRkNkJ2xJ1j1HxrwCUGfGDFtG9Cu5aQABZVKtz7pysxgpuNhpUbdkESLTp8781geBF7JZ1Z2idvsGABA3F",
  "key7": "583A98SP6RkPcDgivQZTDhhrYBW81HppSBiKXCWkQTDGcjw3q8yC84x28xsftGyAwRMvabqTA1463VzKYPAzhmGz",
  "key8": "4azhzkAadSCnoGgDNdET61Wd47DKrQYuvSrBNHw7L55f3BWAhvxc8RdFSXwKJKTSbgnVD7DykeceKibio8g4eSyK",
  "key9": "CprcVUcWBerM1275SwcaheKwP3mj4iHD8TKyW8t6X6kYBPnWvbz88ZH5QRrp6C6TwwL8E8xCt55T7ycuMRfv3VJ",
  "key10": "AixDmiLukgTBfFXENAUWNC1hqU8JaSuZWVymZV6n74Qn7szjDPdsp4nijA1yy8BtaqN1mLNRXmEWQtbevabhwbx",
  "key11": "kPehBdpevXMgd2SsNVVMatUyZSToNPAM4WDFUdoEi2DqVw4AjJWuYnXXtWTQQ7oyPJcLjYcWpKcfTbnMoJbM2oL",
  "key12": "2uahtvDpan1BCtEsUAfHKCGsB352C4NTG3uY3LukraNNELKpGvk4MrcXHaz6RxbEuwDfkRL1eDyHG6E3kmXQE2g4",
  "key13": "bUi32pKUuJjpBjyzkr9M9pVhB3mf34HEazUqLtaPKq56a5py1ww8BVFAntQu6Qu2zmfFd5sBYxwvrn6qkHotvJY",
  "key14": "5FAkXbEZQgnvVgT7LvkfC4HziHgs3nw4yiiS36pdiSKrA9VJAGYSwWmfVg5fU4TH1q5FaKfY5HvRMkdbhko3aYTe",
  "key15": "QYfBMNZsD7Sxzxd2XFYKJfFBc4i2PSDFviahSBtvdwFgwhM9aveT8hMBWdZSLrNgH1EwnAhxmLJBhQC1ZXUJX68",
  "key16": "4ZC1L59GnN4d27rEprbaxVeLyfQ1UZssatLM3smt2VLWM8AJguwBWB4eJx1XfeRjxTby7un3NEi5wcY5U1wbusSj",
  "key17": "3jMzdchZwd7UEfL6Rd3VbRkNooCPFsXta7p17PGMD6fERpmn2uNTC9swkJDHDjYpiyKE5DR5qMbHBGghVNeoAPnU",
  "key18": "5mwjZ1F8kQribQnahjzp7j3aGGo7s8Z5QuQkyQd94qY4npkg47zbmt2iJ1L2RyE1pf7hzN4wPw1MbTX3r58NbNzS",
  "key19": "3NWZBaDJwv9JbqRv8dSdEhMwWntwXcH4YMRqTWXc49UE4WYrbGwDPJC8t9tnsgjHM7zvXrnZT4T4ZnZjvkB6Zmhd",
  "key20": "3HVge1Kr68KyrtuBU5navNCCfyk5cpnT71aqFCYmoKvgfULeDVrZYSmV3ak1s5UNH6vEoteSpaRFv4qD1jaNEqrs",
  "key21": "34dX3dqjYgXDL4A1BwppAxycZ4vVPxBYEinQRUVGSFBExeYmpCaRz7p7iKKqRGLqV6nKTvaYqKS82hBhitxaBDrD",
  "key22": "56PLfhU5CVJN4DP96hEb9ZYRKMawCs9yeoM82v59FMt5p9TYFv9EitW2qENuWTgp7j13Lf8BQsL7orSXDVdJbk9B",
  "key23": "4eiAPqsV4suLJGhELFck8wFjbde1pejuwpkpYCavq3LJGgCWWjXYEhcxXZz5on8Q2RpDLsXj7yz6iiwUfNxx5PVH",
  "key24": "2P8yf4DthoajGxCKHe63kgsUNPm3YNhyg73yGq2xr2eZ7E6VRjug6ViVhz68JY5rfZMZZkpP8q6WAXhomnW4Rbfq",
  "key25": "opMiw6K5fk3nnq5UdXVGpJecMCG1AsSdvq9UvFhDX8LFRWjqzrWxGAaXv8TiADP1NW8SQMmKjrcwJUhSuWBVAng",
  "key26": "5Mrjpr6Ryfp3mzpa6RXP5kn7YN3roV8BR59E9ZxX5fWzzGx9ZCyDanyG8zeMagNoo5j7geV7FquSf6JUYdJ8iAL1",
  "key27": "j8t8UeXXZT3bikVwDXniYaLJANbDLdq8Fwy2djb5RFHj1o5cVEuq4JUPein3mjm46pURJgh9kSyX2LvUf7RP9Qi",
  "key28": "3MhJi3ipMrgyEdmfEHz3qqLzbrRJ6MRk2WYSqAVf1xTRKG63ELdyH1E5NfkaMHqeihgZVuuYVUwNNNAGrmCPBMZW",
  "key29": "2uYLAonQn8GBx42ysEjzYRW5Rr4RePTUuKP6gvaHw3ysjhNHQk4JmcSAA7v7cTkmGxvimkDhDVru8eqfxK4aEFyR",
  "key30": "3bYJ7QXJSiEDg9G2KVM4YwvC9T86k5xj6u3JWsW6wCEPYfi8j3uiUp4bBv6xU3jkzPmpoYuDCn3WGXkjssZLjxMs",
  "key31": "3nTsyJD4gQnwnJwAxi9TkdPW2h24CbfpJTxKY8TCPsf14UwNF9QtgwV6PJ7H7k2NCSXCGKj2rBt5b5m915e1yTVN",
  "key32": "DexJE6KFHZZhXPg4gWkxnAqZQ3EPkSn1Uus81NJieaYdtFuWjkxkCTv5LkbAKiceC1oTNA9UMhqF2KkZF9AtcXx",
  "key33": "LEgMCrjW1QERGTuRVVM6NXuPxDpgQ7xg32XpYk8hcUxHMo1vUtWCFQDH6bRPm8srrwcRTzNN6kToozsrVjKzW3Z",
  "key34": "3WyTUffTuZGv92oHXMN4KkLUEb82xbWVwABhotwrn5b7reWxr2w9WnpXcdyJMeCtTGTwLyx4A3p5aVKVRV9Vb9xD"
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
