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
    "2XH2bj9eLUcTGVp4xRXgEUaCv9SzimccwsifR2rbx3oPPDjvaaWjVE6AXnPcTSUmkvAvtYxJfj7geB5SkmANLsYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sU9nBfWtoKPysQdATu164WUasUhmzo3n4oTFjDkcPKwrVCN47BcbYGpbEPXdmyHzaD4CaRBj1DW2anm1VJmU7eC",
  "key1": "ejjTyAeoxP7yFGWwGKj6svxsCvUngA2T5XU7gxts8uKra4AKcF5Ge5V6AHgLyF4jzgWiPYazXgEbKhCgk9ivppR",
  "key2": "4Lw4mUNLjwaymk6awbc2P3z6YoKi4mhRg7SYmwvpKz2VfnSQnZkGRvCcvsrB4m2jScPpkm6qHBXRQAQTTcFKQRXY",
  "key3": "2q9WG48SGKPpM6J69k5QCSC1nKtzPcvBo6kAdfUrTNZHU2sNMxL4MKbK4mEVD68FPeyVMu1i2fK8iNAhpcE5mX8t",
  "key4": "5th8ibXf8tXQgNX3L2hS6cbqVJ3EsFSvDMT5azXcoLVBK1DqpXwNTqiYqwZeVzSo2k9sTuBpoFiEmgWCSbejKAkn",
  "key5": "gFVAiBvPkayKpcE8CF6BicEd4scsDkJeJSYtV98QEdZUB1i4B4ncaMQmDxkJWGuVL54YDwuKJWMrkjhNwSNJ69n",
  "key6": "41bfLS2yKiiYPTqVbZXsHfpcmVa33Fs7UKapgUWyUfDzmD7ePpTVa2DGdaoH3YTFZ48JaRm7d3sSKTqwzRvhWFxc",
  "key7": "59XcCVRqAbhaSFPsyWPw1p4nhubLUXyA66vh6zzSnRP5i2m9XrfztxiNjZiwFruHDKSjbtnVXXgGuERTU6PrxFhf",
  "key8": "x2n9o4CfGpkHNftYD4XemMXAX24y1DfvBQSxUk2XdLimSjArgXAQWNsutG3XY4x3gHZAbek6RiVK71SqGAB97ZW",
  "key9": "5xtQYfutrhzrpxP5RqJYaZzLhsKLWpZvzusw1LVXqZVxh5p7LBaqjJcS5n2Rh9zWeNgdBnewFH85bUP75eTi7DPX",
  "key10": "7UHspeGjcddowKaK9GQFoPsjGjEUavvDB5rA8c4CZWcybhPWAap2EpNWBiF1bqREmKqHqHMdipb3txvyShKfgVe",
  "key11": "5S91WhHFArKJ5eB1pnCnvEEmNi5WWh8druhtdPF7ALVvbmSDRHsBSLTGbd7Duszu6eWzz1gCu9v39JzJqFvfNDm3",
  "key12": "4Zwmrx9EyCckFwA1o3doiABakHAjEbEft11ukbXstAzrDMcd4v6wLSf6aWnKhmxEpqt51kkukJkgVDyM1ix2VgdN",
  "key13": "3YCvygAYMWB2oE4T6r6VMDHpub18y48GdC5FSsXeR2uw3QTxivMfCDnVJY33FF7qptG4sH8e7RtgUDVYNf9UhFhA",
  "key14": "4hMkUW2owbeguySqHpCTDScgxgvTEzJ7N4Lyhkcx1E1xWvAEJmimwr1ujbG2nNxoYGTij9uG4feB2azahAE78EGT",
  "key15": "2HHQEuqMz4Sy16uDR18uPW45y89gvcfdt2qoxHhqr7dMbyVZaMbwMRiu33nsXSprHZGV6W11iBUeGh4eV7XdkULZ",
  "key16": "3VejQPb8FBT47F4PAz7NnJ2zFw8rm6EZirkijnPCw5sGQVQpUzxeNkHcvXw8DtHs3jQDuEgSBSi9ksZ1oFtuFY6U",
  "key17": "rD5LG4Pvdi6j8KgLCvgRMJ92xmREj6tqCNwHbR9kxfBPzzLviQ2yf8C8JY2xBzRxnmaQWKpLXpHjpdHoEKXtfcN",
  "key18": "44Wjw8bGbbnyymX2eTqFCZaqHBPZnSZWTuyhmexLZxLgpRDnYPJTDz22zyb4wSiBnPKA1vog782dNNgWVvR9xMe8",
  "key19": "3fb5XhBQhRY3ACPFn5SKogLMY35o7eYxzKPH6XY6vLH5ug7RNLY88Nhqy1GooNMn1zJbLUDuSke8ygYunrGM6C1N",
  "key20": "4g1M8poezJh4x2v1gd7VsRPMX2y689GdnWrFYQMFn4zAMAkbJrjzZGgAqguhbGe3ZEuFNSfqXhkqfKHc2YSeX8Dv",
  "key21": "2CiyCoBR6RUBUtUgmkoQTN5uDqdwnNKhaMb7GdWo4yMDrfVQiro3XLrSVFCKkYzMD6jepFoZMW98xu3AsbBnPGBQ",
  "key22": "2fQr5YhSoAbuxCZDVpV4mpk1vfQBeLyuzGK7NWCt3ScRshbNvH3huZgMfUjVVyhkt3RKb3JT8YE1z3kBKM3X8Wkf",
  "key23": "3be5LWH4TAYjUxa8xVooAvr1WeB8yMKnb8faC47yLSx8nXqZFepXWpS297NKgbsW2bXAaWQXrQm9rmmRqkuTPDSQ",
  "key24": "37qdF2wYSFfGLP9ebZKPKqUSYdLNLUkJpLxhc7LhKBnyEiFHhHGeBfHSWS9FERhLgKUAt7aG3T9vee6ptZ7apV8r"
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
