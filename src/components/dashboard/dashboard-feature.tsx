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
    "28cqE4Rpc6VPSKedXmjZsyB8c7ZLh2bXAAxJFjuVgSjx8JftqNMj397hu7hJzerkP1PsS4bGk5GxFVyE1xpTLNBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rDC5Zmkw8ecGkwJe5eqsNn89yRWBL28i9krfU2wvW5ZfveAETRPh1vNUcR3bAfAYCo1HR8DB1ub38KxvNfMfZgZ",
  "key1": "26sL8MKv3fziJZzHRnwUvbLdqoVLmCvvo6ZwktyfN4xhja8EBLKwhprYYztZHdrBbjjRqCXFd3ve9yA5bmWCEDDf",
  "key2": "oh66NKA41Zatjv4SKK6pEfCMY7nw6F5wV9g2Nb2DYX5ynadb1oGyVeJ6Tw4aN4pbjK8ERCSHDLDjyJgftcRqXvj",
  "key3": "3mZ1A7eNx7wXBxnFJMKKbony1XvpRC8GReziZJhhNkCF5zjAYWejVurtNSGCCQERXxAXswFM7fcAYyg1jBTCNTCA",
  "key4": "62gnnFovw3pK221Yar5AudJmC87Ae8zojs6uAvpxawouZcgTDL1ez4FPzNjUizsLdeDsu9soxudeX1AaRA3Sp52c",
  "key5": "frWGui5rpyxegYQ8iuhCGoQbBNRcWDngKHs3N1mFkdQmvqxy8bHJPtxhH2YqQ9J7aStDnnFVxmEaPzTr2vdYGDd",
  "key6": "3iXDANb3Tx4AhFe5W6Vi7C4mExYQTpv9vXSFD8n6GpkGDmDQyshitrTVRnZxspArmD9QASuwW4hFpBBJR9SZR7Wn",
  "key7": "2ARDxD5BHVQE8ndakdtVmPJbJAUQL6ANTWb41VRumS4JjbzLaHBZPmvju8mK9hs53m8goUb9354B6geAca1JeNHn",
  "key8": "2GquyxZerDaQjm6qQqHZzczyfh5CZT7463BmEU6UH3dnsGHpeGe8P325xUgkfVeEvwAaETE93Evd6CA39gTbjVT9",
  "key9": "2G5bBbEpp6tTjvvSXFrnSFVi8Pqn88wVuEr9XUNmWiUzih9bdeVLZmiRMUX71H99QD5MtYzNMnmuNUnmxr9niURK",
  "key10": "237ZYyThczzJeLQfPaJevRRgVxXbavqhsNcyeRSiHJxV7XQjFixwHQDQmLzSdSuiepnQENG38DHfHf6PTEkKGh8U",
  "key11": "3kNJp79Pj8TLsoYV1AmskdbkqGPWZHkZVZfpx23FgJEmqchRYZKc4ApU1QzfrxF5cEzag6xtR4oZMatbic2aj9rH",
  "key12": "5hLMkq94eTe469NLmCXgr9ejR1BDGQk4DcfreSSjG7W18ZET5NUpjWwGhGd7P8i62BjtSjpNMEEJmLyBnwgopKAn",
  "key13": "3j6JBECT81vJM7qX9yc4JZJ8nD8K4B44mhJ457mnA7d7DqHtsE6qC4PYy7KAHmZFSjwa4LNEEETkiyfCTPbGiLG6",
  "key14": "5wacUmJ5ADBW2z4osCRygx2yRVSNVwRjJWgQ8mnErn6jxAuA9bZJ2vMWsy7n5kTdgbr5vF8NYfr5UAeWv7AtJu2M",
  "key15": "4GiGpX2zeDCh19KspbYWwpx1HXHBoBr9HnTfLMjoaqx2zJE1dFdHM2QafTPVCBJvMPZmkCYybc25o8oexBAeJEL1",
  "key16": "jvdzCm8WE7FGaT4cNQkRUcbmaFkrcahMvEwYobns66U6XpdaUwkncgomuBRbRgcFm7P3jSc7GV1pPS8fZRw92xw",
  "key17": "ZCQUTtAHXaSoPVy5s1s1kAezhxLQ99d8CUYFP21YcGK2ThJmidwftkxzEpVMXufj7PZ254rprHEAjsvMqZa1bHo",
  "key18": "3cZjJMD5NovDp9mNZGs4b5241nzmi4fJAt94EK8QpPJfqny9euXFAhScN8JGwUSAvYJzrLjiYyMVWbFomcafnoML",
  "key19": "3BA3sCPspUTJWAjFsMQY4yPRFcjWegD2nhEbC5HuumWzXEfmmWU7kYXkgFxfKA7XDhwtogh9chLGsUhKtSSEsNPq",
  "key20": "BWvPAWaFG9S92a2gfpEeA9M9tnDkdzq8TMAHcYYHo8nZcszMFUot421QZMA5R7qhRGrpmsbcL7Tzwbp2jbD3VdT",
  "key21": "tdUNJy2VSV1vMzKaBq4NNmXYtqqq6CE9BU3Xg8T78oJPApjvS2dW4V5CwRybydekmSKQEGrSv25xsqFECX4iHiE",
  "key22": "JKqGc6nV6TwDbCcmmB84r1Q6bPt9v9Vw7e9cCVJACWJu1ntreJ8RegLRBz79zFgXD8kxb6mqd4KZJiqC2JQxRcH",
  "key23": "32GfKV7SdgkM4y4r4TemzELcEkcy3qZRC5BkXPzfphteeHFg8NkQugKZ5WmruS3Z9RZczLYoSxdn24mSMo51AAQJ",
  "key24": "5QVZB9hmzxUgQZRsqjuBKmvmtNYtmZDb7aPRabpAAe77sUVi4b7vnnNMyhvyYF2XbddytemmTRVxoVfLZRf41B7Z",
  "key25": "4Ztfwk5zUmihgChGQrmzRbVQaGKFFNojVNaxF6kyBvAVHYmgmJUnXkzGjA3gziEvLS3Fn9T8uEvBtABpoKYMKRQF",
  "key26": "2QJ2H6cz43VZANm41NwZvNqi7vQGwaT67Ro3T87KUQbWMa5THbFhC5bZ6fsTJu8WKQ94UN2uQ8hmeRwGRX54u3r1",
  "key27": "27X9PuCfHvcnuu6NKmowpVoRjVakrWwoDJeqqjAmXaLopebv9Prq7uA6ZTTbnNKsUFbiGzjmimgZT5tqfj1eu97C",
  "key28": "k7v68dWCeWVcGfkVwwJKcDpTYjh9kCPMMbomMxz1C7w8RbfpXieGeVjq3np5q9BBsug1BLhcGEdiZ9s3zhpv6j6"
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
