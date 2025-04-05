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
    "f8H73tSmCLxwn9KgKSxcSRAw65a8zBwRhpx6324kc2ARcGxAzFsLd9Bs91EjtfFYu6i7zP1gDcR3g8TJifCUDbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x1fZtXnMJ2QCBiPQ9FFoja4Ex9fQyuv1SxUvBT1EbFUHngY2GygnJuF9bgvSwoGbs2rVKtK3QhWb8jNgyvegosk",
  "key1": "iejJgA6dT9ZL1BT9wwA8KXQMkdSX6UqoTPS8vdWpHNzcrrwi8oLSYn5oeScs8vhsyp5WyCwxvWMinMGMKavKeL3",
  "key2": "2uWYZHgYC1tBkWLk1uNMy6mGkVJ4faftzLTGRPtbjTwQAhvSmsytDyHEzSAzfA5sGNkj75AbRANjQFAqCjXDhyHJ",
  "key3": "3bqyWGf1kVUegdz4DQscqgypM9J5Muu1yJjwVbioGE3v6TZjGkpnTsiL1pAGMAY3YZV3ybCoz2NchPjDjknPVEDM",
  "key4": "nizJXBNcyJNtsCcYkVgrRqCn2DJWnLgkAjw6xs1uks9DLpYQh46E98XGPLEa25CvG7R9GCzLksWhNVRJuL42d4c",
  "key5": "4ZQnHHDUoKuUqgSpcPvpGsvvms1W1ciyqzZWRSKi1YQbzwrVFRAXH7a8jxu3any9Fif54B2vf9LT6HXf5Z6bDhAo",
  "key6": "2viuN7wdMjkXnUqbLFUE2n71AXduXj1beVDq7oQXUahb2MdcFBqYFUYQbTMGaDMxk356kUipunfaWkMX6eQDGh3a",
  "key7": "49jhb3uSpBNNjXfukxRZg3QfFQaGZctRCEgAGUn16VN3p4J5bEGJY8b9ceZsFEFuufSGe2DX6zu6ZHeJFvBmsAZ8",
  "key8": "5mu2xt5FodKh4TVX1swpzg6pYnqdKSLVkZTfWZ26xcArG84DNYWy4x7doYGE4kGyiM6zS1dw5Aw81o4ApArYNkdf",
  "key9": "UoZr4CQQQv1GujWP7eaHmBe6Je98pB8sqzCFV6EfVadwGGj4551FB99HqUUpQXNxZB5f4K2TEuRgPewUYij19os",
  "key10": "2LiFUUt61APRS7MDnZnrcR2of8cH6VvGZ2EP38tRHdRwcMpjhPWUSYtcqSpWK4Dn7K28vr3i1RUTmYt4NPGongcq",
  "key11": "3AygPL8xe1oxbEMciaTTWwno3FkyfK1mKtdg24CJ5Hy7nWfqkRhRcfrJgnLrT2kfBbpTmo6eASeMzwXUsbjtfkWb",
  "key12": "2unMjm7RnPEjoKtXaR6yAszKsPWLQn5Pg1jfwLLLSSMSoPNohRieW19G8PBhd5aNVsGAh19rhZfWy6MuvdKesJQz",
  "key13": "2SU1dJS7hUuN4jgquNJpAJhCD2d8qGYh8XtARXcPGkogYZ71PJtLQi1tTHnXxPBZJiGv17Hg6NvDxdvep1zcRsXM",
  "key14": "3vtafDwUKS1BmQk8tEJ154EvZMycrUR3ZJDbyjnYN47Cbu8nDccHT2XAkYoVh2Z52f6xV9Jjw4reL7G2Qff5Z6ww",
  "key15": "61L3uj7gTXYNLdvdr2AEjcJ4p6UzfT1oZv1HMvf9WgnrfEimtuYqKFRdWeAyqHLSce7VibxwjnEP3mv8rkdq8mAj",
  "key16": "AFG1zdpggBntLdCyPhmwybM29TVDc8t8xCEbrxqYbmcZh3sQb7HwNe5CSaw6sHcAuqg54EaJCDnz7DdHKNJPuqk",
  "key17": "5Ux8BYvmP5JfXxBoXiB7vQi11dsDu2Bi9RxmsMnea4PzNsmv5wChLVDp5QJKzKtdRR2UuMRYdzTjvGcuvdjATrFK",
  "key18": "2AbtFAp3MTBVHcpD8cK7f7J5mkSTNpzHzh7YLLi1yeiSCnxo4gYKApt7SHseLJBD3bAtwgHoyMXxwsTvDsCzj6yE",
  "key19": "4uenB5xjG12N2LYhokzgPUG1PnZjBsGt3UJ4iD1wL3i6BPMB4kkCUsVCKDARjWFaEcM1ivbzeSAVDYrvp1bBTgq7",
  "key20": "3TmA43Ge6QWYL24wzF64gteuBLAuFZ5fSx1r4mMHaVUdEiFU7fU1KispKMHm4XJAnBgzNvEqtgGf44kW7mtr5Qww",
  "key21": "3ET6tx6HJmFcwhrgoNLnm8KV9pnMgGGjHCtANfxhNDccdDbqjXnkaLLK9V55wNR9Hzrz4gL6DqejVWAX5xQdosjs",
  "key22": "5hWX3KKtxYFCfJJPfbH23mhR1B5Y4uJop96EtrcDsGhSUCSKaQb7SuRhgZZrSD2HBGzBV7PEwV6GPvHMWNr4yfsP",
  "key23": "5g2CJhzyBqv1KjVhBpkphAxRMcVhaNznkZPXboiqQmZmXcHQHuZWrPk3aqsKRtuvBPif54TZvxTRyyhcwSzWrzvy",
  "key24": "2tMSKfRptja43ee3uKZJb8UetoBBNnX8FJeRgnYdCwM1p6HaqEoeHci24ffnLZpRaiMVZgEuPPzXHuyEtNnB4N3Q",
  "key25": "39Tqi7z9m9REFX3LCzNc9geD4nRNaeqFLeTPbVjnJJJdKRrVg3f3vK48CgxhPRqsh8jsyRqaLZSKRZirFFimguEC",
  "key26": "5myyYpsp2xmJ63MDQKCEzfyc4JaUPzg6ru8CXoffngWrpYHRfAogRRSBt9EpezXyVQP2o9kw775nqgqJVRPmyn6x",
  "key27": "61vjJYDLx4XbozyV1RZqkBGux7tFUf7voDbyG6oNwNiUTQhVckoNS5zgGYsUj3dsi45p729CAzUeFZ8mgCm86CiR",
  "key28": "4N8hSwdY3nuvNxY8wcKqV3skE7LBRW8oYJxkk1jeKjameY7wM8cpXwWDGZm9FhsJJeLmLNUaUodxpvS24RMqU2YG",
  "key29": "2DhWK56QfqpDxVtcSPEyJVR1bhWswhRpMV5YDU8bWQAmgdfyqF7cgGP1ZkUj18vu78CYPniQFdPFWmKhbxwauao8"
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
