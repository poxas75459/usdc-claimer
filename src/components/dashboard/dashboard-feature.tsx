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
    "5BrCWHskko7ssDBvwrNRuGYoVz9GXtHRaepEPiLHG8UvWggruv4TB1TysTuqDSjwFatt21kyF3adv2C9SQ6PccQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "363QVXgxqGyL6NAVCvrE73SX9V31XvpZexRZiGvkcKf3zDnnELqj8AtTJAqitTz3VvbLFh8Ffq3PxwxFPEFaaeto",
  "key1": "29NRFpjtrdNGcJY1ZSTHnRpVsz8RzxbsgYi8EBarF8zWpwPbrUEwzdL5sL26YWHs4fXjFEGbrgxxZQNWMuXivyZs",
  "key2": "2JL7Tba7eVu9YUcfUzMhwTxYaXQahGSfjjrX9mfxTJUW6G5ZNprn2XqbjR6S1znDQ6J22toZShnuNaBecKQMMSP4",
  "key3": "5cY2xLxJPKhs5q4UsMVRyiPuWsfvCgfBcoWFY59rpTN92BGYS3GAsCXqB3tHxJqRBtmw24wwr4jteHGKD3tzebKq",
  "key4": "2Thj6enk564bpUsjFRhyinMuKiHxtS4Z9DJXJSHdCGnrES97AXPPFBTnjxp4SasL3YKa47sWtnW2YERqB4U23pQ7",
  "key5": "4udVda5Cm9SBh5PCWR4ydEADM1zwo4mrt51Ugjg15jm5BjXCpMXRsjkA9U4pXadJ8D6bhNokT4FCZJBgi9DWtwmZ",
  "key6": "5zsUs3sQzHVDMTTfoNNMNqaviBqiBAZpXznsA1XkiyVea3GyiTwSTqQBSCZcb7dYNqAAGHdAQyzhyXqNGSkZBNCg",
  "key7": "4Y1SwFVThPG21LrYKzRWQDKMUkkvYyBk6S4eRNQzaeBDbC1MaJcBKK9rKDnpxvZ8gGzN2eg52XqTY3WindVac1e1",
  "key8": "5YpJaoMz6kVMUAPm3UAjS83v5gQTevgRW6bMxY67g9VpQ8p83Uw89S5758v5r5pNFrgETW6fCUpLpjUkNeaXxLbp",
  "key9": "23hFwqsGoGEkbusgT8YEMcwQvFxsEEV7WMgVVrmmMMGA9YTqT8atcwidzLv38Nsmethti1TfbwAeUA3cnLAPwMp9",
  "key10": "5fWJ7oc78Lk3qc3vUfNShFLiot1zxdAVGwRa2VJ8tZGa5ahvNqMHWAgy6pyJQBemGPWP48fwX7qbN5wftHe4T8pz",
  "key11": "32g3ZgUhD6DAzy3RXGmFNkWEz8HwVgFo17LdkaE2ficN1iLXhTaSpCVBwnhXybFAcLyrMdthemadHqzuSxcye3xV",
  "key12": "2x3dZwFnz7dfaRxGTkbk45mfpaJtK6WGThPhTwDMMyKK7yv8VXWSMskNjfjnWZGm9mtw2jjwpVQ7TdozmxaEzUoZ",
  "key13": "ZGbTSQNd5D6WEWYBYAd9B9LgJyunCwg5xsTZXJzgbaUsfdzepb1WtPifJEyrcmRi3LyDyAMGeCZ5L7vz2DDR6Fs",
  "key14": "2Nyb8RJ3ADFjcxBTX84G7VQpBpGHFULshm5tRRXne2ef17fvCBMrYNSrPPHeWkXWggdjyYYBcrJCY3tfTTeQFj2s",
  "key15": "3QyE2JnJHikncUfZAokqBdtf9Pudxa9j5N236mhMKrvwEEE7sJ32izAtuZMDeKMHf91WH3wBSKvbqJ5ZWzKHU6E1",
  "key16": "2khoNDQw2LXgpBaXS8dRrvn52NUAvPKXEBCaARSm6Jmmk1adhdwS4W1RXyjuPbyFTW3Xr2g7x8n5wLR39FaJL3Ni",
  "key17": "4ikA4ZQBtkLH1p663Q3dBGMV6fzbMansMmMCBeqE9khyGj7bqXZLVvfV1YWEBcTPmcxGFpVPJppMjY8JUysnS8Qp",
  "key18": "4APCZRyoivQvT6Y9kbjnucNUqxsMZoKKsBEAHaJ9KCwTSsWfMVb5FvDTypj1DBsMmDPjdv4BtnnQv14psGQmvwmi",
  "key19": "4Q85WfpKx1vpTbusvANx9P7N8xjvgzyWTC4A1soHUWaFkNYrZTgSg3ruMVXumwxkUAWTuyGpcs5b5KcFmxXsZuZv",
  "key20": "x1pTtW9EHXDEa6A7FiGXhA7oY6YqWZ3bne4oLYSvHEd2zJP7PZVUA6vfwtm3h7A4nZfriVRf8Jj78ihuqBxfikg",
  "key21": "53aJHUR71Pjej6oyo9nBoxyLEBMyx2EY82HJNkqAUY82oJ2THDMtwv8XYtvTNkmifMjgkfREnsQB3Rvb5UWw2gAr",
  "key22": "5sPhtja5JX2aXL4xCDhRRGsWmYVqPZTmmhuj3dDowtN4JQ63BEzfJfpWKQG8yic5pMawcoPz6ikAYvTWQLnJrf4C",
  "key23": "3zN7BcM6os421WPQL5phT47nMRYq9MqThkQfm5D9hqT848XnRU8QGMPhiz1kLS9KTnov6KMSpiwkbJCEUVxPWMyf",
  "key24": "2n9qUJwd6eTNvzfWHNmt4x2dm1X5EUPEhbzTwqJuurTeQJihrAoLx3VaBXAFmVKGh5mLqQzBWTEbfGqTRsMfYSG2",
  "key25": "4AEGAuz7JdpjByk8NDFT2Ji8bSe5vHWMGHKekYtD39haxbb5sMnPaxwsqfxf4D8BLomMiM9YLr2gk5zqd3viTbMP",
  "key26": "aB2dPKjk5Q9LRkjQhQF2cvTfTHmoc5D3Wuc7kz2RcKAvkzDj3PcYaB2CGq6FsreRdaCTK3qiSqqDE1AYJLVthzf",
  "key27": "3a7MwnAXCS5g2KJAoWkpYb1juaLoCjTkHDvJtHbTNGth3PySTsjAhA459EXZSwmcZ8MHGs7VH9C4R6khgWyhGPRv",
  "key28": "3iJjUVG3MVAVhXFKP8PBr7kSTW61B1NU26zVSU68DcSmTtsPZnKKuRsKZ4MT9vNyqJNABDpZvKcjEQ6WXgb1Quzx"
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
