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
    "3ooptjTC2DnhEzC48cRSDjanq8VPrpq5Zi9t3RhZdWmWc2JjQRLFMTuySv1SR1pmwtFb1crfwuur9MTBc4jssE6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pB4qWTDGeMatF9mWG5cmsyTWXBcRKDrhuPso5bzJFyfNGMgtQ1BXCWPSJ1qmi6mNVizGzZsPL8SbLvs2CRsZWDS",
  "key1": "3c43gae5o9zsiqNcGNHcumBp3rbSxJ6QhZA8zcC1apntdiTvbNefQczVVfcj1u6dyvhKh6SA9qtmwiFx75aN1HRK",
  "key2": "2o86EQEHQXCuatua5rxrRsoUGNk4KMf4xVUvrS9HFLKYZZvFAMKsJzrduR4jEWifZfWg6dAmGmpEGXs8SWn9iYng",
  "key3": "4fK6eLDtFkbpvr14x99scNbyEgcgfV6FdkoX2y4fBpZGDxcjierD7c8od8gi3yP1Pga6dTmyTCWB8H9JshjBNBm",
  "key4": "2DPA8tcFrh4htQ5Qye3fsBgXBUCthUapYbDQshUTx9jVahFbcdVqiSY8oJBgJc93cZN711wBNd1qqjZz4QbJ22fL",
  "key5": "64vj165jtjjmh1Kq4Q4T8nJdMrT8PAr1vKALGMk8EDmDH51X2HbqWnck39xwxryCZDUQcEfS4LnK4GuG2aND8wW3",
  "key6": "2sqijsEPFxdmKGw4Y6C3zENzEhoiaz5RNfe48Ynm8R1ibUfLu3fUAbDsajgNviLDhivnAsvcTzE9wSy4fxqzm8oV",
  "key7": "57CKfqJhTXzU8aDmUUAVTEyWGnSUtxXi23pN3sRbCNiL6XgrBzujk1PWwyaR81HfR7Xs4bBWcuKXLZgCax5Yj6K3",
  "key8": "33ZwVc3QRNhVUfioCctdnPXaxRKxB95WejASLj5oAUbrQmbNMdmY2FhR2vzu81uYEW1sWYXGtN8gHeqZWRbCaSuf",
  "key9": "4hJCqkZuV5wV8cqcEJZU1rVUHbpVdNV1N5owpCuwA5UKR7W8zmfcCteUZjUBqwRwTdat2LreAw9Xuz7H4vPyrkuc",
  "key10": "4uLGTjqaiyMCF9FjX4d641hPi3UfN6yKdQRzCfDaMESTFGMwULcqsiZyKqBpuMUHySjV2jkwkLc36NNWUFEhyxNM",
  "key11": "67Gv8sJGLjhFjwcuZ625mQFmChN556D8eY2r54FdhJFvfVAhCCFfJrXHo134NMBY963ATAfvLX8BApCDnAo6Y5vM",
  "key12": "2njqh8JFQkykSdEJWge4bNjLAQN6ZHUwTUEs5FQRAwn4tTpz245nkEqc7LR3ZNfVF8rYQyytRMRVvcZFJu6HKqyK",
  "key13": "4b9r2js5uYreXtfc5Hd3Ec2L7aXM5S2MwJNNBufUXErJT3G4UW4Rz11nxQ8Ta4Hkub6J5a1ThuBbLnmgZnAWnJxs",
  "key14": "477royyKkXiTsf5m2ds68EXyPCMdc4v5s6mgWwn6pJ1sWhd1oH6Rm1X5GgibemvSNSALB43kPNKc5VWU1nDU4NZX",
  "key15": "3TV7NsB4Wej8YtCb219kp2eaW8L3mw1HCuRSwqTW3YzM9G2VfPRC5SiGSnpnfPzjwpnarwWszhJGrvwA6jWT3bMm",
  "key16": "h9PUU5qWSBaBdC9fCjQTjju5QyST6maPRF7dsa1eUo4Xignnjg7pFTPTsx4JYs4pWsSxYGas3129PXNJwcB4nFm",
  "key17": "2bxWvfNimDmqV7QZQNZDkumbvfVe1XNt2BYQh8KdNPPxrLuDguPHCqZ2cjzHM63GbictHrtLMxkKjC8Asvd5NLZx",
  "key18": "4QNvAC29ys5LsVPnoxJnX5LTD5F8m1WSwi9ZdpMsQk2LeX9NodXmQwxtLaV5X6ZdKoowwKdvhjJMoWchi3gvvwri",
  "key19": "jzqNuKsXoqSnKd9RMLSie4w7BB8cBnpynz7caNPbkDamavFKjvT5nDStvkL1oT5AghM9ZVejUYhAJdr219j9aSm",
  "key20": "2rN6PCj5m1mAPaXsoL4Pxy87RLzAp9BQSZuH4mk3Ne7tJ9NR9SsWZW2c7rupmicRN39wrK3xRwmsBQBSeTkNoKe",
  "key21": "4BzpuaP9njWJJK3buyu5vUgDbMRCh55SbB9JZmn1FiABs8ju2p5fEC8mvXzkbUDqBUvWXNCyJLAi85epVzM9ZXMN",
  "key22": "2MM2adcZpuoxHnqtBHfkyQ6kgCC4SUpuovKAyd4aQPGfbCkk8fWJobTMuW1YdtY6nKWv1DbrqfwMx1ZK3uJk3bn6",
  "key23": "r1DffpqMFGEDHxn4QMaK3oMHC3k58k3worr9sVHTncDsPdsBTJo4f3zbqESpJz5BDgXbhZeia31zcgbjD5dG1m1",
  "key24": "3hr7kWnV8oHbksbwoVKZ61jfJA3ZCeKRRHSpKWzXKmhrL8mb7uPcjA4epZK4YQsmG4X3TdLyDqfesJevKtVjMAHE",
  "key25": "dXuecpZUVW7RPJALwhXP9PfwNCesivFDgkXvRwqUQgnz9wj3k8p4ucKZMHqny7mVMgaiEck74Fc7KWJHK1emcJB",
  "key26": "5kfV2HfKYRgAmCXd4xxKk7SjYaGvRDdByeerF6XvgbDniwd5n7yBqGhSkSeU53sazRdoG8nTcqAcZn1DCB3nAyW7"
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
