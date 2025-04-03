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
    "3XiED4C1uhD6hWisNL7UbYh7XyhdfozLo7qcJebWJmc9L2kcJjo7ZWQ5V3WRg1ubcJn5cB5i8DU6VK2h6h4o42Pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tabUfmo9MGeXDQspBzUGkvtVGRii1J2Be6CCMAmm9p4wpb8kLUvSJjhq1FMLv6aD9BWdmD5FdunKnyu2i4poFGE",
  "key1": "4NAGJ9nBzqMBiXBftYRN4iREQkodmuMFKK9nWT2iYBJ1Z3oskkxSXrTDrxQFbsyzwkAC1VKkS8RV3K44WZ5zKuS4",
  "key2": "3cCVBYm5HqmwFcDFZURwAF5p4PE8RDZNjquuM3zbD1V7uZzcNdeC46GTbLMtkRD24P6Xc7UMiDNWsaF73Reca9s3",
  "key3": "4aKwpp2d23841R8zqd5GJfbW34Nx985LrawU1r9GdwWPnVBtFDZ4fbaB6dDCrUgqpbAdEefCs3w3YUPrdT8QBivB",
  "key4": "iQnZMvHbg1c5rWsET553rk2YSsbSoetuDVURCpktFGgNuYiNYPaxcfx8G8USYhNYntUNRWWrGtGW3XuFtARjs9n",
  "key5": "vZiiL5GL7WDnj8z5k6NUkGx9XG8QPNPKoWMcKSQ6Xj9QA49Q7ij2uDVsX8QY45oLMFXmjZDCNLL7SVqf3tRbwww",
  "key6": "fXZqfnpr1wSiWgCNjCpTYVK18yLbaFRZVoPK3dWAYhK5uHXscFP6eEdyBTKKPRQ8cpB8mVbTVNj1gb783RkUyBB",
  "key7": "33HcGf1vLAKfnfp69SDEpmPzKnxcP2Jo1nmeywuJKDVaAs5un9QXNBDWopJ2HPfdLAG4K1JeJAJ6Rk8FNRwjfzzG",
  "key8": "2hoMXMaS3FBZpoAtJo452i2HS8wy6bK3mp343uHXr6nyV3fk44umMdiLzd4HtTZaLtDQepFbJQ3W3x6qufL5Jcgr",
  "key9": "2cpKC46Wz6TWGANSyXDAsL8miDb3ozARtt12i1mX7jetYUdU4mkD1NXjGFAXBdJrMi3aYfUM43n1fU1CDHFi31mS",
  "key10": "2i4XVDjDuFbP1zXdXrsKoAzC3Z4EW55wquX7qVojAXiFQ4mGUenH3aBG8TtpE52JpcQUGKGDniSgNjKBHuQ82tj3",
  "key11": "4EuVZ4vu7v1dYTe9Gzo4oDVEw17TyWH9rRJqz7KQUFuWRmoTXhqQYx4WbqF8ujdT7WHKk4FdDJRXha6N4mkKNwuD",
  "key12": "B6E7C9JTbPPBRKrLituaS4n4DgiWSte1bPaD944SNLdbJ2BaMyKHwQuWx1Xg9nYBJ7WfXhNcHLKLrQCvEE4VDua",
  "key13": "4tjt3AS565HxzESXSzeatxt7ot2Y6sk2vRRKAgwaEFaFi42GPLz21HtRLRizFGZjhs5VtDh64Ydfd4gUUYCoW26F",
  "key14": "5tx5VFSqTnB5ctkdMMy3GkhkfFHxZtmXPSAVfwCQVt7nKAaLrGVogEXiTEdpJcX1oesDXWaEFuUNiYJ93TRh9J2T",
  "key15": "5MPVj6DGKKQ1aYmaXrq1wCEUHSYzMPH7NAJxKXDUGSZK8inn3qY9E4xzA4zDzKsrLDFTWdGbvhS669wNE1H4o2qf",
  "key16": "2u34NNfs9XHHGZNEkjd9ujyHMaDQDnNG4BNYCZt3y1b7WUENJLtEXhGtb2sugKtKR1k4v8KUczdPTwNP5NAzTV28",
  "key17": "23zN8c4WpSd8VuUWfcLRJ9e8KYrtKVbGpFwc9sMJorErxdg69K78SThsvVjve99MSxdPMdNqmC71ksVBBZKdL8Qw",
  "key18": "2pKHFwhko8x7e1hkXxhf2L1y3VryGpHE8KfVTGXX1LAZBMwHf4CVoWqqjWTw3Y27dfxzcpJjTP7xgXZorch6Qc5b",
  "key19": "5L1tdDNvKFPhbUXuiA8VfHW15ZmdcsqE7NLUA7WCiYRNLDE3o7C9UFHYwoRpYe25aiKrxsZVNZsKeX4EtP5wSBDD",
  "key20": "KP1w3ngqtKNgbXBxymARnBH6tD4NWTJv5KTe7BB6n4B3nWLgQ6FTFjD5ic7AdYXTkFHmk9rdRn7kEFLQkio1Ydb",
  "key21": "4UB8CBftew1n7NWXVwqzSfYfzdXmxFMb9esBSUmWbzCzfXHuv96QCS7AgdMkPuxviC7LbpVmobSFjPhAq8USwpAc",
  "key22": "5BpJAivkfNVNGsnM7tg6EnJW9i5J6M55btajoBaATVFRJ7AuvUPudiDN16oGbgfdu4ontmBAJ7eKa86KgH1hXdAj",
  "key23": "3iTzN5paS6YM8Dk12X7NN9mFTpnaG9snqmnn6P19w5nt2bytMHNqkCHaUBsr8buFz9P5ZsJ2QY2EHAiYARV4nymF",
  "key24": "5hP8aWUAKMd14eAwmd5ctqoYEWkShiM75PCn8rXowixkRvi8wVQjpKFfKiyNgvXu1zRQPxxtxBmhiqVUf3VivicY",
  "key25": "4sGxENCU4bpryQ71sFrA8Znqfvx6SvZtp6xt9u6R8MZaH9RDT9SLeSEtNErUahcRVFf6mearYbwNBf1hk7K1GyHc"
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
