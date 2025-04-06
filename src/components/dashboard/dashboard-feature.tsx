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
    "k8gUi1d83BbSjJ4uZ6Lt9W3euMhrBZ46AQpD45LVTaZaimEunTBWKiQQZSgRNd8KjzMw37jH6V2VGQWGxx8tCdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J2ZkXN9Zue16zLUFDjtcKdtYPHsTbJSRfWdbnZM6tRmyH9oxvuY38F9Zf996S99noDRM3gSSuWpWarNnHkZm6du",
  "key1": "5rFvhEamMWHeUkoN4aZGNetQNnCRadUhA6JBddGXijN3UWjSnBbhmPngFff1mvQnxpKn9haRBwwtdZiKZ9ziMUVU",
  "key2": "2kY6e2H57vaXd5JrhGpdniarv3RnE4VYY6KsmLU78Pw84Dk3dmMosUXhBiyj4J8guKLy61Gmy7HXHL4p1fLL7ftj",
  "key3": "4c5YDvzhPeppoGtNVXcq8ibLYAoPf6UUJGRHjEiaDQ5H5fSHzR5AGYDn4GB8x5aHVm5M3NRSveH1MGwZ4fWUUKDs",
  "key4": "2EFwT2h24vteij4grLeEarag8Yx6ERPTdVZVn8hg3yX95EfgdPYbju6H9UCHvDfYchDujUqMWDWMMb38g1kEip64",
  "key5": "fSbiNVo17qhCZL9mCK4HWRmcFuuEo4s5Bhm8kSBbduGWGGU4t8hNYbr3QijxfGdLudQf7iUrQ8ZjYNRzmscbEnG",
  "key6": "2QKUF81PTS3ApRtQVB6P1vD4ioBXnDgBbFJcquQp3VV8572dkz1mFS1Koh4CN4pKoYRssipNULY2tqFczLi5cyBB",
  "key7": "GZC4q3WpiJjLqJuumaHqyFrMPAjxW5JRuk7EbPtJKamBG1utNLGncHgkWA9AQ3DDQiyUrPn1VYEQ9LhJkbnNCMr",
  "key8": "58AqGuZ5edfaX8YquSFtmMnoW6wPm5k5hejU6YrUCPbdTmxVAh3TnCu9gwoFdMr1wD6JqMQU4gVqhUnTTHnxojjB",
  "key9": "3vJ4bpE6yR8EQtXXkK4DFiPWUZouvsmZ5nBDcUbFBUdDJMzqqMRsJQGzHMU6DsxZdPzvqqb5nB4L6CoEyKfh3Mru",
  "key10": "MYLXso3WGCep6rDqqyqCpXj6hS9fYpY7h5fKY7w2NcNhHxXZiUH6PB3T22eonH8bk7rerbvawfokEVtPHFFgbuD",
  "key11": "5HqrQ3jjMRgyWfDgG9bRo2uuqAnxaRz8BtVAdcMxwFD2s3QRX3TmyccP3GxTgSFVgWrmY5x5RvtaFju6uFbkmzBc",
  "key12": "5XDmFiPctPbayPzgguAo8DMh3oqGmjJsuGENfXjPc1FTrPLemrkVaCWZAG3jqi7KeQnG97xEF9XhGq1i6r7avPod",
  "key13": "44WfBBrrUVAD6qiL82pKeA1cjfZpN4tJ9YjhEXcGYr14UEcDQPCV87mBq6vLAXBex4creySHyfRL4es38hqVMM9J",
  "key14": "5KZPGmMmPpZiXGt7Kb1eoojfii2pXPXcS8PRcL3yX8gGtTG56oZB5b6rWRU2GC1PWyxN9TVtsmrLS532D6s23ETw",
  "key15": "u9iyLcphhGov6yv79ur3ibKYyZEiCPT2zRWfmGuaKhD6nKa7zJpPcqCXpVkU1UYoNgdBv5WNfNHGGm5WHxtWioN",
  "key16": "3UAZUAbvvq16y9uLKsha2Vgeuu4aAETUH3gpQVSQpSi8397TRBS2ydFXiK2eJZbZ96mFZCdXGKQ4VigfKqw3GdM3",
  "key17": "ZJ8Yg4R3TTDVpwS5zVUyLifnW7AhWQxk4Tuk3VL1hbhJ9Q4RPNWRz8TBd4miNostkF1kAEnr4mMxWWiLYyB24X4",
  "key18": "5d76nkbQ7MZHhfVAMNhuq3gwE4XahMXsMZNXtQM7D72eJD3srSPv4i6RZUsCxkYMt1pNU6Rqmd5XEbDv8BJSNvNx",
  "key19": "s5EoEmVLqHxEdksjGrUfcEfQTfxWJt82NcZX2qGvcigeuKBg7LNdp11DY6V9XxgsvFf5tMToVB8qBSgx2VwPw5K",
  "key20": "2RVJcKRFoNQxjX4oj5QCVJDaqQ1ZidYGeMQ9Hm4hTsSSJGd2USrmRp1VMTDpBrar5q7jkphCfpnQ3HZz42pxYyEa",
  "key21": "4GtShM8eJEmPfi5U4G1Dq6xDy4VCbWABgX72KTndbeXZ5aGB7ssFE4YyfEsj9pSwMF6adjE4jh5Zg2gbz3Ryw2kb",
  "key22": "5LebUwxAkCRBJBb7grj2FD3Mq3Rb3EYXN2sk76mZoEJ5fZrNGjgUoP1VQsudBspddTgC9w2LDk7ZwzQcJHwdJPQL",
  "key23": "2X3rda5XVzs7pbHX3FGtAuovZx14RCkcQWtckaZb9gjYbsHX2TQGf2GMFk7Be9ryLP4bE6WQZAjECqTanhYWCgpA",
  "key24": "3yvY3My7c2iy5Tw3hrGs2u1ymTqSa7CAV93yNa9Eu2vxxpy9ZJakrhJJCaFPWa7WfccypwjUyefCyJAfmCcvpbkE",
  "key25": "2zQCuioKoBFUZpMNiPHx9RbfRdLoJqz4FeB3vktCL6xPWvExR8vWNViyCYa5TdgyhZCmjJhp3tPiuftzsPXuZxXx",
  "key26": "3WsKZQGnfckQmNJ2GczXfHkJJc32QZCyRnKGj1BimxUrw3SvwCf4FRjPWHC8FipF3piVPNbNXnsE7hz6gvpByhDA",
  "key27": "4riNLaE4wh9S7apuR4TDJgXzapEvsaLkybuWnKGJQ8zkjDvTDhQdVzxteYdTsWKgrsX4F7VGBfybph2SauoRYvBw",
  "key28": "3sVC6cpcZi7wUyuU9QJJRRDn2czJqHw6im3JtKdQjAW1MyXh9yry4AVuyFjfN34XL1v1LHVqN8JN4uH8ycmgdzZ5",
  "key29": "2H3NmbX6QYUEYAGY7t8YwuZHBeshcLT4Vzm1mhtdjsqQ2QLxTu7KrqJ95uUafRKsMp2ZdwDsvYpMjsjwnz2i8N2Y",
  "key30": "HgyC1XYj11sHivf5PuW9Y4GBr4Zk7HXepq3PxF66fuf8KvrzgtWcB8BuFZbzzwvfC8HjGufSZQnPmPizGvgAh2i",
  "key31": "yuyLQdqp4cjd7DAL84FhctngRkfZMqizTfGQTKMsZ5LX7WvJ9e6e73P8L3SpknRQNSEWwxm4A3ZMqEDUJQZXmEs",
  "key32": "eY35HPQZAtuBCGHrEUZiT2YWV8KZdq6MdrDfx7SD6nWkMgEySgP8LPKM5PUSDiYkr7a9ND1xYpY6dqSmN44VZrF",
  "key33": "4mWPVXAizmqVus4VuRXETrD48SpaMMSGMVp3LaytYJEAisw3nr5tnetYPitUVoEfFD9976WFucjcZsVi8ZoNtFL"
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
