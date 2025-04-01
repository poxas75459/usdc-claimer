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
    "5E21VbHf9eDJ5U3q7k1KZEddo4JP5GPDhuJDghafh5K9XAir1R9xat1hLf51xRSzNd2S6T6cx8RhUrvBcimURtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dgyvrz4h8sndEBAPdXybft47kvjAabto2kfBYpJxvYdkye9RP5BzijwkPYovgdPJJz2XZ28PugXfMR9eLo4ZkJJ",
  "key1": "26p55jw8iyjTCWUziAyU8pjq9V6g5Jx8S1kX6cL3S54dynaMwcsRkZ6WSn7fNRbpFzy6avcgVeNz1DFtcvSkJq4m",
  "key2": "2ou3QqUmdt7FMRxWubbGvRNLJG9yXYpwpWR9oywuPCE44JpZkzJVAXs9Bwir3AVFGtnk4iWcTfKxoQ8zz86xJXqj",
  "key3": "3vPkGXwgDS5ZCHnDV9bbvNRpdwqgrdFxxb1QVKSmVxpwAeaqHWTEuPMM9hthp37R1TwUmR2nhXDKuBT4sxMsk5C4",
  "key4": "422stVPpUuMjptfJ4rfxy6mGcqVCkoRVzkqvy1nfmM4RDERMbNF5bqyp2imEKwigFGTdJvWoHaFGGagkGYp3H9Ni",
  "key5": "4CjVk4fSyDCk9iX9QBmp6KUJNicojq4xuuj6ZDGq4tYkrjAfYFpraPSi18VQBoy2UQi4cjgXTDbszT1t1cKWczRW",
  "key6": "grGFmhLr8N5pPkJDidAPyKbEBpo3G23TyYKUpQZjh3FLwLiR7kz5YMwKrdch9ASjoUiZNip94iTcxp1umjY2He4",
  "key7": "5JL1ScD6g6jLXac1sqUUQqAwtpkzgNwdXJX45WUgRMnPZNx2ZQKwqr5tnSNzbcfmsVEfNWLYuz4VZNcWf72ZttmF",
  "key8": "4TPkSNyD2szg1CaK3gYyYPoTULx1Ujtm6hx47EkRaHwgqQpSBAASp3XMkwmZx3YF2pq7A47xbzD2vfqTTfqoxboL",
  "key9": "3mcGXh4r3T9NVvLnmFMAebHLGbK6P7zty1d4sJLHqBj83nU8ZxLTtWU2wBbrgD5H5SLrvmHuNXUcQBdAnuGtVX1M",
  "key10": "DnyC5b7xdrBb2mQgy56YUN54Zj3yP3rmEj6NahLQQiWJkh7heUZn5wWR7WfMXv3byBrQoeb5qVccrZsy75L39gY",
  "key11": "2nHBhu6trCMH4bWSrXJr4V24dbUBckt7XUoVrju3TxxRM4uanMNqT1VLGcYouy8APxzH3RZ5mFfign2EgZegAhK7",
  "key12": "4jwv8MXDf4mzmz7cck1kdwppdaNcxLneuwhQe2BjJ5AiBiSyZSfBWECKXkqBwxyaomJ86Vc6V3UpP3f4CCQS84UJ",
  "key13": "5t682is65vif7t2E9L7UXGrNTck1LQggGsNXeGABo6ijo29CXWCqwPhjjfHtziC88eWNx2jerF69uiouVb9QH8Uk",
  "key14": "hFh5LoC6CkX2YtHQ2SXRuUF5bBWJdU2Z2L4mk8iEHwaFQvsNWzFqS3Y5rYYypSUiD79NRkTF56CM2bLjoDE1Prv",
  "key15": "LgJPQL7XWEUpkcXea9GojWLdoNJBHe58qW3vSEtaZY2vQLMp8vUrRd6kuyDGLeQTavPD6RmtMQGakPf5mNDFvJP",
  "key16": "273MNWcJRtTDG7Jz4YxqDSgQrcQHchv1J7WrUgMQ24DRKbFV3DKd7DiwTQGfyJeu6VQUwQv9ssLbwqVhftJKeh8F",
  "key17": "8QrvdA5BgWMaMaoadiAR49rcfWZEkwHNy94TiXoMKbswdwBQEtDx5cUNSRLj91NRq58zizJQHhAhVny9tuKWQni",
  "key18": "5YoxGvFHJrp41Hr88eSaKSfkD9Pwgq13ABFFGzmkSetECDkQkYAFH3ekUziR518aV8v87RLTr9GYuqix6dMMAK7m",
  "key19": "R7CtdjueeHty1P4a9wnUSm2hscasizVZQyP29HpKU1fxsr3zLYryxX4rpYv3AAwMnTnDaf56YTBk3RwNK7erG3q",
  "key20": "48DD6BnMj5YvkYj4p1mNq9k6ezVRSe3cvjX9jS3BgnghnS5NYCEwHM9J8UWzWJ8xGAVcmb2J9SvzErxp7GUQ3VfT",
  "key21": "3QtgopwAc8anUCJPURzSyNc2nusHLJwbsZ73ZtPQz5aspEr6E7EroEq2bsreN8qNRrYLa1Bwx6EwSFLK5nbVsFup",
  "key22": "5jG6DUYXUT6LTbC7rhv4oYhacoxvzmTmxabxUNfiwicuaiZVeqjdEbt5g2v5ZzE7EiU7roL2EnWnEdDwVoqa6nN",
  "key23": "6kPf4vTHLS4nkCRhpKCBYVKGWrn1aTR3QyE1KEebwQZ4CEj5SdEjfJKUrzt38igrUaKapzh1gr9Q2fbkmzmJQcH",
  "key24": "5bSW9LW48ofWM3XKA7cyjwtXZeUmASVrx3NqWcH9RwpjL9JJshGTUS6RbqwLnDr4swSbjUS2GThkxtt5dtbQLzF2",
  "key25": "31Nb1VW5abKf2u72e6KfDsSuhGo4QMbScH9C3rK4VHeYT91pSBe7NMQ91SXjNXzGbLfk77w5HiqJeXb7RPJVmZrr",
  "key26": "4JfrYG78ijYoNgEuSG23u6qRY8Lv9D3jw7P4T5cUW5FQwhEjtkSHHmo1Fu9QJvjQ2CYSf2bFmfAEfiN9rCQoTjhf",
  "key27": "qB65HHzkuwsax6cQ8EEr9dZd9enex6uhU1xyNwtsg4VoRjgHr7XiFd1A2BMyHrpJ8efpmnNEjDcPdpHUMKkviLX",
  "key28": "26iucD7L4v8oN9qt3BAyNoshYQfDBmeiJ6RamfwFSgqSGUxqx9kjh3VF9tFggnn2vS9mHjNtdP7CoEr5ZMsKTftb"
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
