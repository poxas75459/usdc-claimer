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
    "3RUb88v2HooHtp2MXaxrnZDUN8MwzwShjLGF3AK4scF8qJgAaNsxo8vKbvix1dnuVJ881PY2KvN5kgvmosoaZY5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qrrKepqcU8SKJgEPVfA6qh36EJwp6f8PhmCL8UaF7fk3ZpDK9DQwBpomuKXHZB8GuVmZivzjWyg7LEMda3Q626t",
  "key1": "BJeRsoTtGHMvmfi1bcgdchTwnpWDXAx1FSMH45HgcuEUm3akk8ufsTXKZyUxjp94tS2thdVmti5hJw21SKkrNi8",
  "key2": "2bCxW18QZ3EN7WhgxvVd54v5PVzLEfai6tP2soM2VA5icX9eD6qq2mSLnkGXiPvftNiZ5RZdDQccTRa6J844jo6H",
  "key3": "3pu2JajWxjjheM1TAvMwPrCy4tumqaSwAhSZaawatM34a3zjv2vd9iUGu7dGGP8VkcVTBUT637ToZPC3BCYmXDUZ",
  "key4": "zZUGF1eDyRwu4mkubLGo6x199sRQXBCLcp51Qa3ygPMpb5BA3whFg8pvv3TaJNey2gdpRQ8t5uK7kUu2NC5ivMj",
  "key5": "5FjcY2HokPbPtNtf2QmSsJW3MbtQyQtB8MqYNj1yQyDEGM8cttfvAJzpGGkVk95KtNUBk3HLH5E4tty5R5zZRB6H",
  "key6": "5KSb43Zv25WdcHrYP51mWKPwaj1NZXbZKQXkdDdd5acze9VQPpEUoMdheWCojqmcaP1QY8eQ61ARW2QJPDvrvQWZ",
  "key7": "5L8HbZpbqNS5knvm9GbAFo5VhVF7faybks4VfqUrKVAQZkN7An93ohC5VGspuKhfnnqrTeLLUuifyrwRCsG4BJMW",
  "key8": "29LpyAvLh61bMkEDphXaWTFehy6ksDa1wAckhBbVBqrxeYdWFYAPwU5qW8t9bqcdHv2PcdF7BpeqjFEQ8qQNPDDj",
  "key9": "71e8Xzg4xMNRjHdvKYamjmtQPZR1WEbaeEaCfQiGXcLdJR6MHK6vwQnevzVjnqLK8j1z722iHyeo2iqLqskShh4",
  "key10": "3f6EefRjDoZCRAWwMQAmsgwuK5Ln8F4njbCGu8LP4Yxrh6mRuLXCEFEyRFd6cWDTxkovWU8TDMn6DdjM39iKwxry",
  "key11": "2rXUcjz3cB9rd3o8AB3xyWzNLh8kcyRz4XCmdZBUXJJn4b65r6fik46y66y9ChXMPU6bLEAwqFk81Fr8YHccbeYL",
  "key12": "3BZxX54HjZ542uWZWJLfXUCRE9gyZVp6PvhdZ9HcnLbRoLi3PLjvBCDierSmU3qqVmmkUxYLCnNhh1XCa4uVLK7k",
  "key13": "4XccvuNoFszhUNFyq8Qk7yWMW4TDM7aY2MCyWFM8fJ9SEDeGqBYHMqc2AhZj3A8WSVhGGq7EyHnJWsJ1bVPits6n",
  "key14": "24zpKTtVK5wvnRihQpzoguxDCXFZNb7afzFVfmnCXitkprZNzxsaWPNv5ySyFmjb5DJU1hqJvvNoKSiUttdNSX2Y",
  "key15": "4G3UrPyJqaiPRwdYPMGjvBrNZ5LnwusDZYQyU6ep7Y2KoZWEGH3uLP8AkcK1nzASxychiBXWhM8RqeseMhWD7BRg",
  "key16": "3Mntxs6XR8KAzUBMmjCncE1KzNZ3M2wz45ruWS9PB2LkmFvak9JzooaPoCx7hGrwAwKipG7b6CCq18nVdmvQRbCt",
  "key17": "rxX6NiqzK3VSx7Go55yUaXGiCyjQMf1Gn5rz4GR6PiUFWKz7fP5v77evQ9XgPTuxLyDVrdeaWDJbSLPz3xXgVyB",
  "key18": "xfgrYoiGD7czRqdeGJ9hR7iq75zU98hy4bzFrwG8MXUYpsPESAzwYX8KzcdY7CASfFuhnoBKByJY9u6xkyPwopj",
  "key19": "66a2TcU4xCmUDppuKVYRTJxSJf1aGx1LwgN74JjPBLwrveQ9PThKiXwoPG3iBBDxggtKYZk4Yi7FWunmbQwKg1hY",
  "key20": "YGPnCvdqhaPtwVKZ9WirY7aVHV7zhqGjk5sc43U5nHfMQED9Xpc1uDp5rZRQzKSqnDhxh618EbqjubrvRpKkHXP",
  "key21": "5Pi4vsMj56SPizybo6bRm8aHDCQQrnDLKTff28vQa8Jb1QmTbmZSfVxnjapu5v1KdaA21KA42c74wKk8owcYmaWU",
  "key22": "5BHpXDHBxKe9Ad9aCGNfAefSqLzeFd8JMnSg6NovNYk2MmZiWTXMnvHZagBLmso3pTDDBPps3CaKKCrQfFyDNMpF",
  "key23": "34tb4R9G9YUvE2a9fUV1BRQuKUmC5CrGUQRi7V3jFf7T7YTjRAFxKvD7iX3dZTBCWwzarqvXCBCEmcQUiYTwPB7",
  "key24": "3J3LUeVWYDcQd8iK7GCoyN5WuBFRsYHipytmk3YqFGNnEXoFv3KQju6JJYQNZdqdHnAoFzxFB24RciuVLRQBrS1g",
  "key25": "92TPyDjLi3LnEQGMSsxQPsdUgnKdnbN1BakY3rSVoZ76uqnhAFSeGwAYB5HnLnMUQhwgumP7ZSBfKnM15X5LEBm",
  "key26": "25jizWoxEJoRYzFF1X5QHkzJRvvW4StJnum4PKbfjvWCVM7JQ5CRw8VDwvEL285NngnwSDZFWLADvz8LrAM94zY1"
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
