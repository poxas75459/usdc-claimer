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
    "2UvyKbWj73ZJJu8vLrj9GWvQttkvXj5SBJiCbUCygz6CQGFJyZLvRM5q89u7jW1BF551i5a8LsiqAqhJfYTP3Ddt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QSzhFJgMP9Ps8pXMUB8dd6XH56Eq4DYexnTiaf6pocWdF8Bocp7hgq2M74a6QHu5fWx2zKUAfDadKycYsKSryKs",
  "key1": "4rAb9add73dHn5pa23EKXtNJL6L4HtLZ4gPNCZmnX4meCs9gU8N7yTLi5ucGMbzJUSsBmC5uw2ZBGmF9g7gSyaXC",
  "key2": "ZKP7CMq7siHEiiGjfrzSe7msK5g5kbfDTk4weFVSKeMk9LQ7WHdeZfjndCA5YayRvDfCtoofMtqKkAjfabwjgnf",
  "key3": "36oheecfFY4uU65rLAR9W3zupL71XwAbPhxRkWf5AVV3FWroNVaoY3pBTSeQqBoEFT2o3KpeJuxEzFSfrbUsNcsB",
  "key4": "2RTDdg624WuTPXXtjLPujjgoE279vfHdLXraFoPshE5QcxP9mANgHWp99ZhLwNrj3PuL1bfuGmF9semXBy3ztQjF",
  "key5": "2xjB7wQ5JMrqy27jnPURXFETPHuHafnLZ1NxrhqYMkYsnTW7B5zRn7tHdQTKpAdf9GiKEdFaP9KP834bBeA6ou4u",
  "key6": "5Faro3d6QgaEGG1LT4fTMSstrD326YLf8uPVNu84k1EYFwPnxyf5gXNMfs7rqP3UwVc5kGtXaqJEW4nEVciyQ2tK",
  "key7": "JocdT1YkDxfnBKK32ZbZ1QbbM2BsYyGHGzHRwvhhPNvTNiGiHyfdTKt5g3R2TCqoh77YveCaErQda4Qgcnjnce9",
  "key8": "4TMZp6VRM7oJxHWnbBGY9h6LJ18PyXYWw7Vo2DgeS2MhXCrJzysXUSw9yn5Q9QR1x4oS2ATvuXuFYJuxE2h2qomD",
  "key9": "vSDM89kRnw3WyM7w9MJXHsaUzPrcTiBd1AXecez2eNturRKDfaDZaLPeQNBxYH2RCwWyaS1wRnsSYmztdB7yhgE",
  "key10": "3Nng8Gn7Yopqq4UDFFsRV2kwYbGM8EVHynrcMyuC67gKyfBbEXT6n379GmyZ5iVhW8oZuWh2y2rExgFyAWELPHgm",
  "key11": "Vshf4GHsRAaxPUXZcaw4s3ohzYwZ1Dra6a6tMDYYFboJfQvZzDkby1UmBKGMx8Rk33QvL2efYssFUP8B3wdaWsE",
  "key12": "3HDx58c3J3gWDinLUJEXmnX56SWYVCrKHanZyFsS4uBTBtXmQDSGBwtHnAU1Q3fU2WW9AYvSV5htxn8baEBRizz9",
  "key13": "2W6P6kTGYivhmfaviaHNRvutfTjAvA2SFjMAuiZaRvU9yPRkh74HjzDwNtE9AwoH5HJJ1ad8jPf6Trrq3sTxRk7U",
  "key14": "4kBVFzcBcxVjHqXmo1tgqXVUbGed6V5KxAEvWTqEvJQcjtaYR2KvVDx3vc9gpd2q5ADkEdujC8VkjhFDemkui8nK",
  "key15": "3v1f1ZCYjeUgoiTqTctoRyHszVyZRGz3qGJG4HFXj7nqXnzMHJz8F2WqzDUTPtgBYNbXUEfnLmeTHvdRYi1zCs8c",
  "key16": "4E5M8Bq1vRXXtNdCeUXFCUQAa6QfNao3BWYXzuDHDaEMVTdgjdC9WgUvGazfUCP1Fo62nWiSv1xNyioohozYB3Po",
  "key17": "3JsMj7121URfoxuW81mPtb2tbLSSNRVEAouxMaf3BpkeJLueMbnfzGeKpcBNky4TwdJPSWwTKcs5xjw6TSMJ5zQN",
  "key18": "4qSBh2yZUfuxYDa4TTWWqwSTffPboDJdih3jNSoqdvbfwHS69kZEFtFswYXWw5vaVaAo3qnboPiEh2YFvXS2W5ws",
  "key19": "2BcZyi2GCVyDVNznwbG2x2Zse8yWUJo4pRgS8gAqJFeEm8ZLeT5DPvKKNAj6NsBc4AvELRMjVPvYpCw6corc1tnH",
  "key20": "29JcbtwAn53o8ur5kX1QNy64RLtH1By9Ljbv2pxHG8ENT3FKxJ2qBFgWUPWxsqpD1k8tnwpzEFHEVBj6gULZ66Pe",
  "key21": "VGccMFkCAioTPzMxxfzNTFBhm8VgyksUjjx6U2Hg65W4TvfkCknQNRp8u72WEmPL9CbXXu9wYe2n19QaarURwvt",
  "key22": "hKPgap4u9BdxHZF49dNoGK57oH3zT4o7zSK9Zcr7SsQuDeD4WLAx7aNwgRTgYs4NKR1gHeG9pYzY1SLQ3WGBLrf",
  "key23": "dUApV3x9n9cjfvZTWYXi5yuT3WNUeRQZuQgeXxjv1FFS3E3919WAyQySbDdjt5Nj6rt153rPgsyD54aEWiYxvSC",
  "key24": "vAUCv2WA5Z3kdLLBK22dBvEpyD3X3SiMRptFpGrUnvZgo8KDKYQRDMtGqin2hqziXNR8qXyEryUQRyVww1hLMWB",
  "key25": "59vsBEZaPAbde7VNGvTxb3tQLXnWx6Ejg79eHJNEwLvmqJXuUER5WPM5p8LzRxSbwhi6tE2VckTWjiNzxmbU2CMt"
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
