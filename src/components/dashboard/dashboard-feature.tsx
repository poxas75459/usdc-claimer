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
    "5UGLtmHvrF6yWUVDLZFCJyyCGCe1N6LdnXy5jmUtp2jaRfvs15ghZzS6EEuXN68Rz7Xxg6bevAMTPDgD5EAeueiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y8UYSjomas4b9qK8idsisH2YCSPXEvSdAT52wMSHkE26h9bah19M97BzRFM7Rk8XXcCbWrwmw3gNPBRG8L8vxmA",
  "key1": "h11x53Vfqs6kp7wxsuYwPVTK5tj9LSTMxqfJZN432k4Y1yC3GwxM1KXCLbsVswe4KNzykYEq49HcCZsVx2Zfgz6",
  "key2": "2EKuGJ9p8xu2NvWGkDK4qFimrEJVPAYVvbbGi8LiTqvPuFX6gYTNjdnwQ6wUhQLWbxBjN9f29vusMQGGMTGHhtYx",
  "key3": "2Wovxo3p5Qg7nAPEHTpwttbK2Tha1NvjFWw7KUWw59ygK2cUof3L1eW1n8mRmwGFVH9cmFdRbLV4e4XKdgUDvCLy",
  "key4": "4vUMCHZG8Y4Vk5GxGDzMNYTVcQ3kwu8Utf1KQdowQcRczc4Sv5HEqTzcT7Rz928aYmX4G7JDHpb7NUCaFLhA4H8M",
  "key5": "5sEZC97dVo2DATSQe1SZXqsEYBd5X2tmLgwV1C1KixBt31wmmVUhaN76VZ1AbW93uDqVVQ7YVqKqeKzSkYBnDVxY",
  "key6": "3M55MvMKbuKbBLpK95GBHqG4398eWDGX2rWRuN3hUvPQ87igkkr1bmgcZD8deBhHZvmpoq2wDjauSu8sbfDGBa9z",
  "key7": "p6Qom8WnXLZWzgozZP8gtyVynDzoU63kp5muRsTJ1DVShHpzUkr8vTV13LE7hJdQtWHYWEjoNTY4CveSpmbsUWY",
  "key8": "5x1d9rZyjXs2ogVdFT4e3qKFXB2Qw3ktsEoFwFq9xZmDAfErHBFyy1iVP8SUQNpwWHFAhLuacurmD2TDsLeiv8N9",
  "key9": "58XscP7aRwnEeQzEGMyoLobC6Zto1cHDMV5kVH1rAPmd36Lke7ByePzMWPC1QoZkFTPEozvzMVdLstXJBR3JnuCp",
  "key10": "5e87tYv1kNcZqiVupraXFEYJiniFKqWPg1W4WaqHHq2c9ijAXhBLahrB7rZ4xfyjrTaSxvyntVrVUktpJKAiC2mc",
  "key11": "7BnWBbkB8kPA7gQkkhLEhTLHG7bfmNFRs1meE8cEypYo47Tub4QeLwyfNDZtvVYd3xhtzACWMJq1EKHPM9kcEP5",
  "key12": "4yzimENEfWLErXwfyfdg8Un5pdbR3EQbfdyQvcZMp2Hxneoju2wrarkcdyi61ChrLyMVYYXRKC157jvMjp453nQ8",
  "key13": "2LkMvZd56jJuHZVVkoPAjcfaLcrWqe8exSvKmxawx2EsKLUz4XgQaVG3fHjgEeuFpAMQQQ7NqeEw44p1At7GdrYc",
  "key14": "5ohhS3GcPk4WQdu8LGewrGKt2DtTbnZG8t8DPNhSdzsRR486bAT9nQRUt7sp9WZJCB2ieDV7bGPkwvYv9ttKZBEi",
  "key15": "5PmasGhYqNmhBU5N4Hh3KBQDb2qwPEboLcH74918Y59Qq8fMiqQE3EXBzXoxDXv9Uu3AhxSZEB3SwjA6a7my3Dsd",
  "key16": "3YYdBZnFqBKgRyBeaJhzZCyUUr9NHwPo5JEnseUaiPWFVBvSnvB6H3W5phbXM3YfykF3F7pJqiq7YWBpP7XgAgPy",
  "key17": "2nyndP2Sbo3FiAwqwaEijr2VKw5V2piBVyXtTxCiTFjvnDXCfi1pJ7H8iv76BmZ4bGdhmZNurjb7QFqmPB2hibQ5",
  "key18": "4uYSevGmEfCjWkgNMRJyRbzwpzn5Eup1i1HfM2HysSHRqkfENphXzRg2LqHykMJ3mMmbRyzRV2uhYpkysUfmgfMN",
  "key19": "3TComUqZX6nE2KZiRwUQVvvAaLtLZ3ud1X9HBhwuJsBSHS4x8NBs5bKAWTVS3qRUuJVYaywwKM7Uyg4b7pKYWmfM",
  "key20": "5uGmuCLFkjMzTsaU6Ah8mBnWx9x4BJUQ4EcKr9DMr8PW9wU991VVe9Eiv7LC5CfSTuurtgpxTwdPLtZcK6H8fqst",
  "key21": "3kHRZMpNdrH8Ko7hSqLespXkKTXiiGA4F9K3hoNzFaWbUjwASw4EkofjBts9exQns9eqAsnAGo2BZJBLdzWBS9Yy",
  "key22": "49MwrMJj2vadE5qoR9ERLzzZWhRPuD4nCMCMnd2yiKE1PrDrVuVLLJhnjm4oKKQn7fSYwQh1mKu3La6WMgEXVpbS",
  "key23": "3249STqMwXsPFTA4MubwSzMTVYG1YxHmj4RuMujhiAfWhfDQXJCB1neyL6oKHrdENHxmU7cNj3SKSezSZLTyYmVr",
  "key24": "3yUUcKpVkGSjisebWf8hTgo2JvKXBu7vnRSSHcBR4sWCKxS96ZLvK8pyY6NGqAzPyhBueTQQ4u4Denwf2yZsnPGS",
  "key25": "4h8ex9Z2xobDfkP9qzJo6VTn8Qca4q1LpYmWhYYL6sWqHq6oZxeC8fCbpBqfmEryoijrtQqVDmbyggcBYRez3TtU",
  "key26": "pafffgnqh1hfm55zfRPFgp4dUW3sVGac4ZXFi6i8mt9hmp8thkgZ4RQx7MsGBBLUBWyn95YaQYgRShzDCK8Yt19",
  "key27": "29s39rSG7tgg7DWoFZtguUXEdrWa79zn65VfhuBQbnecH8Quac3nCVoyJnZaQu4Gxy7XZnA9gm36zRFZecoKrJsF",
  "key28": "4cSMx7vBDRfZ47euFKjkuoxmmALq1L2s69GRhbqat5aQ4kemBS4XFywqYv5MstfVKxYCsUrnrvD5YWJUCuzE3iSs",
  "key29": "61yHj7JdLNCwguADJttZ99AT7Hd3nrJDU25QDUh9b5ZtxGdaok3kiySFbiEv9qyjUVtEcRhwzxdCQf4eHctTGMbA",
  "key30": "YpEKwzwhCxkJgmkUaA3Hy4NdP2S8AFKAhNU5XceLV9Q1WysES5WNf7K3E9n5fuZPeXKierXQkEXHUZv8TNMMR1m"
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
