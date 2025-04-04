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
    "32SERB6Y3KaahKY64cjA7c5WH96NfixNYgeSya2P6KbnwzJfXxedasW7nsFBfPCEx3Zu3ftpB3xK1UPGmH2L5eyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AKpdRLKADQvW6gC7ogdn2qkVgK9GQQbDGuorjJ9mPkY3Xk9E8ai61y7MoasbwSL9GWs3Jago9qXDQFdo2ifkZgn",
  "key1": "5WMY1kCZq35nzk3EqefK5BHFDS5rn2bfpFyz2B8Gc43eLY3z8JrmseGZx5nwi6BSG1jj9GvtoEoqotmdqPSm9o9D",
  "key2": "gfnwgTvng1XthdHYQ9SaDZ6SoJ5wr6M9skzCnYgS4DuyZ45efewbdhqm1VJF6qTqegHdyrw4cCnquKoJeCLDkmp",
  "key3": "3b9WQAfGjx9q2cBJU2fbn5axNPTjmguZtXDmh3eSLdEXvBHcQjxrRiz62raJDXSeWXqbrKKAFUxKQ8R7CHh5br7P",
  "key4": "4KLB6nzaGyDMjwRZLk6q3SKo2CMmHiw8PoyZFahBYuaskpfxdrmuxXXia3SHmUzYnsnZr5GsNqA8hg1tEZhNzNkx",
  "key5": "2Je2wMGVQTkgQJ9tTVMimosXwJuKNYuHAdDLdXo2XrK4FBQjMYPiczCoSdjPhocANLJeJELKuJZNsarzYda3QfF1",
  "key6": "2gfghkc78GqQMwsPt38pvJvVxiZCuwiCfcyfg7XttchiG7hxjQBXnjdv3M2WJZ1DXqn5VFuQB6uXa9mbxj9cxqzK",
  "key7": "2RkD9u2TsN7TkCLcqvke5BLjha8bjFSVh8LPwosDaWcJRSG3rZM4TbHs8FCAdPqQeWX69sm1t1yNihZNEBhHNB7r",
  "key8": "3b8MCwMFWA7xzgKDhEdHujgF4p34ZXqPb5YVdRGxq1tQQrmdYZfNGkhXJqXGjCUxMH1eA32deHnivSXz9CFxVVhq",
  "key9": "6HGAvDMQT95qLZ5antCVXjt47Lz9U2dJCostyEW1m9QamUHbbUq84droBpdPvN7NaqDyP6LyacNyDq5fq24gcqW",
  "key10": "evx95mEa4dvA8o5MqnVqLMSoJ8hBh9zz2RwBdMYvWTcAnzQ9FqhCLWWmJDGiwaLa1PD1aUeh5uPrNSQmLLmamFm",
  "key11": "2EdREUJLwMgNTG5vtD7pUPNom3UZoRBfAwKWCJ2TQDDagNrXXCZmJqGoDQrNBs3R7e2fJnZn1fTdWu2es3gpafLR",
  "key12": "KVkfLtK5WrcCCJpdKNLMef3NG6KnTFazATCijtBsi6YXr9FCCsw8w4vVwWFJQn6MmhYWEVsRkgaV3gnuvkSiL8M",
  "key13": "4mGhiRaSphpLWiqf4tiF4mTGmTKWqjGngYhuHsP9akrxXAtiiuvE95kP9GaowqvxAdigmz6rpSFKpy25yLwS7NX2",
  "key14": "5RrGPdiYZd5hSaGLNsTHYcjRVWwkYJLmS6x2qUgzL6zM1ByUqtyLTHrPXDbrbd6x17AZJ2oMroVw4YR45Pky9g1N",
  "key15": "2CAPEaGKqQmUcHDpwKTVGs6d6pYC7D7AeAxcSEnh5te2HnEX5YmMAWUhswhincFpexiHrDgzDqsTP1VDyqSALx9g",
  "key16": "3RKb6Wps5bhXizQuLcoUAMY2M72tYwqxHw4uTaX1w3iNc2oF33j1jdCdZxvhfaQpqkoYewDGU3ABwPmuErpon2yS",
  "key17": "4vbA8r95hP46YVC4pTACT8BoonZAg1SXnV95mDE6io9rdptgKJixE23eTkGichzJmiXNQ4nVxs7GUG2GGafAvri2",
  "key18": "2WrJpNXhi9N5FSXxen5UL75ZUsKL14HuP447jr6hrub6ri3jtigpbDHdotQmX6CKjH6YUGsxVp7mwgF3QEGAyYMq",
  "key19": "3t4XUDqBy1sydb6rjhM8zGhP6ns3YUJf2hpSbPrvfvPw6nw49MS93y9gvJiJsoWwntLcdkWwz2U5NY1NWQ9NrNnR",
  "key20": "4QijRtoxDfGi5E9HksakC5S7zWp5KrETjEtn7XzdAVc77RkU6abv29H7bpxitDr5TQLNH7n9nzyqaJ7ALUW5HLNs",
  "key21": "4jHp6kABGMVQrmTN1R3vx4m4jUAAdwX2FT8RBxsudF3XNrXzqt55pyDW2JWeXic8XQdaJLyxgHVRgD9Gj5QtZczq",
  "key22": "4HHwc8jNgHBDLVJvVSkyAgHhWwRjyHi5X821G8KFy1WYxcH43B2cr311ydtxv3ehrHSUBJ9PxtcmGH2KfmpJgTET",
  "key23": "NvM85u6n41aTwYi5yGocZLNh3Zs9K6rhCZoGMG4heuDko15hFgTkou66UH1vLEUU9mBLdu8iSnChypJYk1yXi8F",
  "key24": "5dTHMoA8D8CCXdoC86QHEQgoEsPPem8keKsFLMYTvezGhCQx3BKTa2c1hCoJRcTFditDF1mau9i9HRGbPq2xWnJp",
  "key25": "35MEW98BNbpjukS4bD9moKuzQt8dfptGpYeKa7NKgABLzQ9fX5f44xgTjELWoc9LCkYorbBZyEjYnJmGH7RpbC8D",
  "key26": "56V77mSedXv7eCRy6mgFPTaFZp7h6kxnXKQvh9m3Qc8EWcSgDCejdC8HA9NEZoz1VHoHT3dgvMTMgeoAwu8XbrKu",
  "key27": "3Pi9qJhSN6HcGY3DNyfDBsXebCzUoaqsTuReMACy12FMU6GLSUB11wtHM8LrsvcMG3621eQaTYv4U6n8P3cmsq1p",
  "key28": "4WC9FLudH4sBzXompjLqz5tRRXnUPft8x7czGCHaiWpkJybXcLUuZpUrJPKrtFK9zjy9HQMjEhmjLbfJiwirk18u",
  "key29": "5BppKv1fkV5nKy7U2yef1EYenQbCFoHbxQ4tDMy8NrU5268SA86XavPoC7FRV1gRPqWERLsSteSC6jXxRpNmYSVp",
  "key30": "3dxZcReUcCHXbUtiv2qfRBJ5KgukUXfa81kXmS2gSZRurRCE33htESfeBoEpiZBk4gCTTsKbPicSJXDombh9xfzR",
  "key31": "4FYqPo4KRnAu8TZT4BBan9yLxGQftMLm258UQ6DYGdvZ4sY296UM2yKt4ZiZgXszfbncvHPWynPViqNSgAj9jDVn",
  "key32": "q2vBmw2ZTwRqAPKeZ4nz4tYvdUympQQLbnaqkgJbK7Br16WsinWQN5sZdLVPHEBJbVsMjd4sd8x3quQGEHdQgPw",
  "key33": "342gSaLhyvsppUTnQPcZ9RarXmiVLHL6VaWMUxhLLmYozU3KurugCBfF9TbPtB4nVEz1puawmkbu9BBTRvGuzumr"
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
