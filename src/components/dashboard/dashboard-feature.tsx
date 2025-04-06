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
    "5rpoT62qpDBx6uY7aEaqkRzPSHoHcupJKBzqwyaFbbSShzKqLtB5D9fEh2HjwrsFmtwB8p8ZRhU7xSQYdaZxFzSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RBN77TYnsXS7MQDygLDRNNwLNfKQ3EeKq4apJfqBdj8G8DW8tx7ifrX3s2zutu113zzk8bVdkmanJbVz7BXtu1",
  "key1": "42PJN54AMPNF59PLyYWskTdibvzE7aHYKN9fEbrM1xwnhkCa1TCLVsexNS8emgssDxSXBHnqQnHJFmzEMEVUhm3F",
  "key2": "vUzW1T8PF4BfqtzcYEtfG53GwsExp4KQBJ4HRqesJs6s1wwQ1X6dcJJJ2k6YVPaU4DZXxmBFXQV37YjLfu9gdjj",
  "key3": "4DfhqNQudcyERTj2QepDG95xaNudiYMPyyJAe7oMJYM2TwF2AGzZ7iWjJzTEzoaXt5d6ii3tiRbHkgF1kq82pFFz",
  "key4": "4Gx2iVqUqfeFEjLy1fnJ8PLMvFd9jSfN1JsNd46GN1KEdRThBFMxCuE9N9ysyNYRcQ14y7LX8vVnpWEgiQ96qcB2",
  "key5": "4ccG742KJy8mw2NBT1oTFbQTVzhbKk5NbuqF9MhxpcXUQS7LVfL4uTb7T53JZq6AzHp385FXQKesmJcsQpteSs3f",
  "key6": "4tJCAEqp5VcRNksB2HPW6YmP9ubDb5eeUt3PEywEdC2P8zCtB9kyxuAkFqQjCjy7jgj89SFY15dTAW2NbWAD9MG2",
  "key7": "NwGdkDDkYiwJr4MqJNGmQC9UW9QHkbwhkjmLajeoLV9Z3uqjhd8NTZk2PMT8CHVtvfTrosh8mn62GSn6agd7q7u",
  "key8": "3WGzuQEWdkNjiATq3fJxhEShxTuAR5AhNdKYWdAnWXfFWjvZQg72xzyCYnX7zgB91YLEw2aHHEYfxuthys6FuVFx",
  "key9": "2KMKuSb6mSFKzks8JZbJyhVpJuYPfrUtobW3XPp46pkBq137VP9C8CV3SvKD2pHbV6TTKz2bCLF2Ya2Y9Ab6RQGZ",
  "key10": "qTRvYsAENDCvUtRrjDJexpKFZwxApC7de4hUGGooLTnM9xjpT5L1hiknxyz3JxCFei1gHD5YdWubbSGyYkuAevB",
  "key11": "5FnronySVbgcrB8MLssdxnXfuFhxCUFUaW5dQGm2bs2TnJhD2e9L3fkRF5Wg5p5FBiSVnGCZPqjGbMNesioMU1BW",
  "key12": "3qe32ioAKBKprK99rdRfMw1upm3AwHYr2X3nD7G1ddJ8CHSyV28qEMKwLHQa4D1SASL6yZrvDKAykJXJbMqNZa7d",
  "key13": "5EAkkTsX3kLAukL6FhGLWRiS9vLvZgoZcfJ98kMVzvJ4ayezxB6qdtbZ3Tx1YUqcrNXNhuyqYhieDnA593qDaMz3",
  "key14": "3iarArHDFGrmtHw9FvN7DYRs5Hr6JxPp8qhX3JxmFLGyDrYvyQVWrVzD4ajbgD67gEv1chD2eUVCV9epQWDi8NCV",
  "key15": "2CvoxR732eM9tWV6Xpie59tAKM2i4YK3uC6mVD7mRvxt48x4GpEzJZq912zTcqRNH26jj4g2aus1FyHmp3cW7gDo",
  "key16": "4q3HaEawcs7qMo7yvmL16Z3sCFhdJcUF1fvNFyLfXaJ94XCw8UqpwFy7fqMA2rcbK8yoqKg5sQNwF2C4Y6eWf8fr",
  "key17": "3m5nV2UhpQ17LpzC6A7spMgVDNayV1oTCPGLSinP6Xm7XAn5wy3DYEQt8mxWPKapy2hZYGSiC1PisZtriVNFPb8s",
  "key18": "QNdyEG1D5wc9BNKJ8L3DCWQrP7eMFSFHsEkfDatSvmSiyzvnfVweaa6UciSuA9iS3oUW1n2NA8GpijKEzfhgKMC",
  "key19": "7rxVnXyq9uFXtJU89yrEZDfBgcQMMhdL3n8ZbkzVyga6QkCEU5pggNKngZUMtfUJPeDLibKm4ghGjQUWwBPgvuk",
  "key20": "2gbjkaJAg68csA8cCAcpVs68iuEWXVgXwS3zEDGVrSft3oDZXf62Cz2ZGqcWQsc6B3XTYBCkGsTVukbGxyvZHwX8",
  "key21": "3ku8AgKkRFvqz7tjdY8en4d6dRi9LHqcXoWHCYKB1u33VesPkMWrJkA4eg7GqGnDi8WApDosJDS9myC2HGodVEMi",
  "key22": "4sxrwutodS4TxwacGHu5aLAMjdZEu9aD4rtmdZi19PzQV66L6sAheUZqnHQH3YDgPgM8qVZ7oiiabeFRd4GRLPUF",
  "key23": "4Hg9GBRYaLs4X8P4A7TBAZyWKzdnLCnYvjzaQh4zzynMQFf98Ea2XGFSvNooHVdAng33ofWoii3BZJ72FbGX5ak8",
  "key24": "4BVxCYhgouSQkhSPbBfZDC3fsEgUFfNFuZkvZBXTgfmazRBJ37TCLCxgcpFbgmFcQ6Vf31gBXmPLAzwtHtqhN9BL",
  "key25": "35QxvuTfpD57GaTm3EwzGHPj5CLaqeZBbFri6aiZP7vgLYqTCBnnWaY2Wk6Bc99EUM8uS2vcg3o2NvwdkaQiV6Jt",
  "key26": "4RgtS5NP8sytMm495PYvLe95ziyCFMBTDP29WyQGfaVoRG7XdEc9YvZJT3qmoVU8de1nc9muDuGT4DJosAjqZgGN"
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
