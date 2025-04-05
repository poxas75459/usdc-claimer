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
    "2gvnNX32P7xfh8qDQrFbfUcjhs5HXfHj3MWjaPamoRcMWARvfPdYiacbGPPwqKKhSJKHQbjv1JPF4dGoAHdSmLch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57F5aNpCFFCTvE1gX81YPMEfAM6SjK7HSbhz3jxnZsSRX32vu1EfxoZNQANS6459hqzQbBm3Lnivm6fqMDGk4puv",
  "key1": "eyik8zES4ioBs92GHBDZP1inX1ihTiGwGWjK84MK7pKXGeW8ECBZWhrnaRgeQqrfPK5EmsQkaf8U78DHW7LCeQ8",
  "key2": "2VXMcdXNh2mFo3EdYa7LbZbJNwM7MPxPLSsjx6i8P8jB9xwfAsu8QQLxcf27Zk96qM2bh9LEphYtmTehay7RiQdd",
  "key3": "Lh5Yra5cUsUfWobxMaGQeZQoPcigK8nQJgBExuDx3TAbigVSKcQ1CjpVFo44n4s1jrixQ2cH7ZDBWjcpZCJJsxc",
  "key4": "2rCMFPEiM7P64K7c28gz8y3Qhu9GnEVWyu35FN2omH5iMVNJDSibngbtta2QbwcsiE5nfj2tpukqEsK9mx2oFNUv",
  "key5": "42LENL3WzN7M65Br52o5AbR46x3ZS6PCFp9LtU1eHyQdGVHLCGNCn4X7eVEp7J1WPebfi6THrwLFGSMfNDXjr6Du",
  "key6": "4BkoWUJ9vZJGv9yH4Xhko7ApujimgFdpGBBSYaz1q1UZ3ESDEMfTjrRLkbWpzjuLfNMbmZZ9kYXv3E1e5gZpYoJJ",
  "key7": "3mLvPhncDWewfVF4rWTBYqNtMtrmCHYGrzT5qVWSvrpwU3DE9FXkdB1SzZ2zq2EfQSXBHkcMqC1pTmZxBKb5AbsB",
  "key8": "2UeaMpY4ZEWbwToMRYry6CR5Hrr1pnMEcyKV5RbCpmXsCAjeiFVsz9EiG4kEnr866s4ec23w3WMF4xqw2izD1Hdf",
  "key9": "5jQG6qt3KCeCA36R2xxSejR95EJPmu4MfC3z2P9TCbjbPCGCMb1H3d2SLsqMDpP2xcpAuj7WUyRHxCoXGhWXy2Z4",
  "key10": "2sYo4bgwFVn6ioByAgqh2xvGkQAkjBCTdLtmRiHPWCbKe4G8XxqdwHxKi2Hu2A3EjQtgqjZLBaudBVwGYB2q1Lxi",
  "key11": "5sz7eL14gYVYzYcvL2TZLBoW5ATHEYLrkF5JPZQhnrrc6qFzUcwQA5YLneQExBmhPvLi9gz8CR7hwY3mscY1qXRB",
  "key12": "3YGUBHeqPWfYzzeuZwB7HUjBon5sRAUjYhr7Ettd2RNESm7jE136sv62JSTPFebtKtJUonUqeTVJwqqBB6wt6GUw",
  "key13": "4FVXGoecD8Qde9J9Vh92yLqHZLLBbQ9r9Rxa9fZ7NLCUUtiDNb7V3qXCCh8tMzvi3hDNJAh98gvS4fP6x47Hxeec",
  "key14": "28ftVouLFwig9dx7Vi463yxGi9nuV1zM3gBLVdrQhseDUpV7r7kB47VQ5MC5te3b6NFgwzVmWAMNfDoY2Gg53Yer",
  "key15": "5mcwVapdSfkjfS1XujzRpEUV2UHghVVsJkZ6Zipxh5HMB7a9vyVmTLEKck5voLy1tbp779NsMb2zUmNaqBn1ZEmC",
  "key16": "3R9SGYjRTAGo4mLhLvjMpGVsJvAS3Y8SmfwGfYyyShhWSHgzHMp3WTRWXPGwj3a2mkYKSAzoRMJ2XokS4MWbU46z",
  "key17": "yN5bUNSECFMUzMeen2su9nZ6oG1UcSXHBFEekp4Wo93Hu4vzqhj7QpcNo4buu7tUH8EyUcz4PMbktLmwf6v5v9K",
  "key18": "2CWruz8JBWfX2AQKEA2VULEziRuk1Cv1yVYWQ6dhN3HuSkLDwp7HUxNreHM8WLUqZ9xayEw3SwMyM29oBeeYoeTV",
  "key19": "5vMuCipwHu3wwYVSLoW3TA6FvKdd2cjr6TTqUCSKfDS6XsNnUw9WNKvniHd6xRsYNNQfVhjMWpA8WgjUsRezFfqh",
  "key20": "38sSTVQmotfnwrw2RociHJMVWP47pDzwZ8EAEy4f1yQjcUfp9DcopKA3GT2yfd3XiL5QeEggXjfgKQYmXwYZPbf6",
  "key21": "4Hw3HHtFQWkzkCb6vG4HeWZjQzAZ9Xwm29QAkxbCBxMdEyTDgEuAL1QAWnCAk7HDWt1PHQTsmWiE5mjZxdyJgQ9U",
  "key22": "2hYiGML7CtyBA7ZAXfpEgGz3oeJzpk3LCh1wNNnoA7dp6F5FmLKEUCdccjZjSgjbujGez2uXTttJBzogyKsjm7Uu",
  "key23": "3pMPWLYdRJyGr78HxrvRYHbUiViDU79DMaPUxTdoiW8q5DtrWPLWupvYuuexkCEuxvQRDAsGGznX5hwBjXLrfty2",
  "key24": "7JBbeiAwNEmj64bfTzZpXkae6CW4kijT7n9hWY5T5Q4z7t8SnnMpdHiNiLjqLhQibeAEE9gqJdzxNYyWWCZk2gr"
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
