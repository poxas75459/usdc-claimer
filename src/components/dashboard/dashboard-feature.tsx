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
    "E6qzwjYnNLdZ7QFcpFZ8fbRXtGtYkDv6zSFRqCnp4ZMaSHq32mCXCEG2Bokpq9AQ1jnq2ajQTmEPDsAk3fko6tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LMy52XHdy5ZRF614KBCxSYuPQrRxk7cuV5uJiEenxYNdBL4FvwtvwUz5SSAYvjb7WWUNQgjhf3XTv5S9mjYNEJW",
  "key1": "2K9wt4qeCRQEcKy3R4sPmkatHVtaRqYeQCSPW29BQgrY6ZtvfBuDAYySJhCqaEYF3bQTBHRxXYe9swnDkJiYgoBt",
  "key2": "3NR3mmeApWS6wn1by86TGe4h48RgCk5HYqwhgcnV9t9NC6GyqiA2RWWL1wAj6NHXSB1uY5K6j1CvK3RtLCBYr2fn",
  "key3": "2sm5FnX6i1f16AXj6iyhS3gHaNCxoWpaPuDBbpBfBpix71wi71wCppqJrpuQZMczd7KTAxiQRoRJr7Q5NaN9Zyon",
  "key4": "3iGG8VBDy8XTxArfvS9Lyx3NUmoPW8b5fSvsWbyWKxXxtofcwNTpGAFjkQfSmaHDBrKCvnP4vHjTB5jgwdmsw6BT",
  "key5": "3FZdNX6h7GAwUtc5sxDBB46zmPxJTsXQRmQ1zXg8S6mzkNMYY87vpuKVuKLxTJGdZXxatpQTBhVn4uiqiD7uEyKW",
  "key6": "iApCNz7tXtrhozuGo5av3JaHPxMKZdtBGVGsxXik9QJyEfJuwCsc1N76P8URuTCKh7zF7JEQR4RkfLLxGo27vpW",
  "key7": "2Ep2Mefu3i6wh6CwsZDJxX73zSJShDYbqRaYshH9cxyAeNuwtNkb7dVrpmuG2CVp3shvuhnwDqpNBAVSHWJ5AdnT",
  "key8": "3tDT8W6YzzHvAcVhkiFkZSUWintq3pqWUonjqzbZdXRA3jnFciPEhQrY4VVzwH3oPeBaALLxogU4ASL3PV9vtZCe",
  "key9": "3CB1MQioT7wzP6G7BuqQz96nP9EKyaiU7RNZrXjNHEpSn1gDSZY3AceYMz6tjYZQU65ZuBd5sAGMFGbG6TTjo6A3",
  "key10": "29ru4uowC1yqqoxzQRS2FQFBZ26MDkbT6BShEJ1CbfiFxaAYahXLW2tzvvW5rRAB65iCgPykjsdZNmBvidYwDvV8",
  "key11": "323dCqQvtBXrMxf9LzfF91B8L8Bmk5SWDnJtGGqDM434fUF5qwyRXp6R91Bs2AKhVnUyDsxJvpeA8MtjYjzWEfid",
  "key12": "2aaNJfjG6aSUEjp8grdKHwxPScE3Q4Ja7nNncVxaMAhEAKtmXEZu37peKBZMvujbSuqB5g6JVW8DvZhomBWyPfqJ",
  "key13": "12471yjjZQ5i2m49uTxHy6JzkK8pQzcy1ii7ZtfAT3Aed1EaDXCEY84fg2Y2HD8quZPnh85SGZbFAHBSN3t8tqfj",
  "key14": "XUCea3yf7oSv5ioDLdyeEhkC3d6c6pkhMB18YSRZQAgLMKKkdtR5bMgS5po4GEHnh89LdfKVPNbXp1aubGxNMsj",
  "key15": "KZfQKx6TtK5FgkaB3bi3HXSHZegxtfQnQdcXK3KEZaHSBmpnBbSnkPudqKRejVHNpTsXHHquBSXzN3qosz1BkoK",
  "key16": "4jLAGcrTSWNrYvpYZstyLiLbfqpbfpNdv7ixDo1syZKjqGeMix8LfHHBfMD1qopiRGSrP5eTSbLmFubcDYrDztsw",
  "key17": "aSHn4CqW3LMY1ovDnFTWdGPqHTSaGGNGZXJJMBvBKfAzGDQSNZVdZcysQAT7thhAihZ68YeTtH2GCoeS62i1rAq",
  "key18": "5217KA9neHriQ7Bqmz8bhz6za7eS7LQF6nku5WGduQ9QzthbhEL6muy2iT4UQ6bmbV1HQoeMm6D1u4nxmHWDdfJD",
  "key19": "3noLhAqiinZTbz3YLYCJXkGkjGWa63HKijznCdUfngQJwrn62gznQNv3kNRZgTCCKk4j9jh12ToLAjHJjk1VKW9C",
  "key20": "358Cnu7TzpPcLjH5GYJLBoot3Az7w2PSMFnEY2YwMQ8nvpqGZetUkTWaUPJy4qwiEfQ1LZzqc9eq3s6YXFREDZ9q",
  "key21": "2XgQMxCwb95ku9JzxJZgo5PhVYRj7mjzpPJhCfvnbmVgmZg2pMZP1bUWGCUkok4cJRSfh98tA8ktbwiz6N2xZQdJ",
  "key22": "2Ni92hx91Ecym65BNY1vTJrQVL2uDNfeGcbVD6daVMtc17foe7Sz836f4sp72n2vXzhhC8tBhkvzaNnbQbKuUwNH",
  "key23": "3NPCEZ9QD28sTYQLFLzizRKaFLk8CBtygCvoBuLGVFd7CtfqXj8KY5yefuCvw9dCcuH8LMEsb2rnSZ8i1ZMEbq98",
  "key24": "5K9oLDJAXb2LysPBBovkWpzYmUrxeySZoarCVyfvQiyQPsUeYyMJMofdFcZGGAzG2rzKBZCcKsfZpSSfN9B7T92y"
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
