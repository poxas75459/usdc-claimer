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
    "VMX19kuujsL68tLSF6Ag73xpPZtntQCh4mAs1kUNc41z4pZte8o21coZ8hmaPWeXZ5ULX73jpjs8aVDz3wtcb7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eJjjooZNUS1B98EmaZy8Fq78gpm18mXJ6BEdkZ1icLkRQThHGdHzUekMTGGaArBJZanEHny2Udo32Meq2GNp1ts",
  "key1": "4hexSQ5cVQi83utfgXK8RYPkUwT7jqJQ65EW9otrfkHKDVHJVUyGb6Thdi1WDTiXCSyfjtmFZd5JRKR83M1XRACa",
  "key2": "4hx89zgf9tJmZNikj1UWxJu1eWtBaZW1NLXT3rBTX4hA95zuCckqkKGH5YqUmg8HQg15zKarrHh3mGRFxj2Yvrkt",
  "key3": "5uoXZxprb1QiQ9oUQhRy5G6NpeFFbcbqkwg2yLy7Zh7VLN3UKYDm2mnd4vusZ8g1ta34BePSEPna5mR6d6WY2Pco",
  "key4": "2PBghRH43kjFvknPyzyeZsqBPYQGWGvWnqqsvK3Bq29crWFYfPZdsYoEEa5gQa5SP2jfDhGvR2JZCuonZDTxQtub",
  "key5": "4hzRJJba66i69L5gmTbUXfBoodd9NkbaKbK8DD3mKAZe5s1pHcgNVoZjt1pq1ymKSyRqda6HdMJP4uRQyqoomQzS",
  "key6": "2nUAfnB97Y3KaKxe2E4uokjHsBZ47bmkZbqk9s9GjJ86A2NiSGufMC4bZpc4FNS8o4iyy6BQW83BiZsvabv4L5wW",
  "key7": "27tS2L9dzbrX4GCN1ojswpe2sjf6NvGCpnV59w4r72K5voFCMiVFEer39QJWDUgiuYk2YBvo8V3bYiH7AY6mT4rF",
  "key8": "FejriuJ2gWJsVZ8DQcsN4BaFpgJvM5hE3ihWjFNiRWHYZKTiSc8qy4YGt1CYhDjiNzeR5qZJtfTbfAfVuPW9HKp",
  "key9": "4hkdPfXf9PzUwM5HCoDYpXh7C2ABJvZNi5MQU2ERXn7DaqLETA4NXGSSGAL1mn74yWUqrEBHAjXDZEptbK1dJ3Ja",
  "key10": "5UxgCgFGgUZQSuJrChF7uBLn3c4FkoP3Yh6ppFQng2YDgWeM3kG6fYnKub7HaP9vgUtDhXeJqT7nvLaxWJVu4Gze",
  "key11": "4b6fu2kF4XzUinhjHXC8WNv1PmyDcoTYNe3hmRzBqV8ZgCGehqtziaffUzDqLD7LQUjLfTTxCJNNqAsPPtdBQVbq",
  "key12": "5xuJtGUBkryFDhBc5vSz3TTbTzQEKxPGFnWmnGhcYcGrB3dafvi4qdpa9gJU3imUZpak8UAU3DBTerbdwE2g1X3T",
  "key13": "2w3EdViP2hJsSdBu5JNmVkvFkbFKfYYWgeh4mei3rDZpDJHfV3mxD63BeJJmvZ6BbCoTz1tuQx3ue3QhJyk8KWvh",
  "key14": "4VgbcZr8PrMFRAQKEZRCWgzCUry9AoCV7icbAdBUocpG3kme7u9Mm34YJRhWiysfjb1LnRmEVsCfPqoqEGnab6Lo",
  "key15": "5ucui4TtesGcJXWkGcWXtadsQmu6md272uxEX8zEgH1XUNgwAWBbq5q4H9uERWXWZzLDE1UCRajaWXB2RdtumP6J",
  "key16": "dsPxSdk1SFUHDQ79Qz2ZoybtWNWqorM1Smin4UoMSHSyTxxV56zUPESaj52x7XHXxpSLrBNRrMfQV1W338m3oHP",
  "key17": "3frUR3FkiBN1Qzhnfgo92hqKZULMjG1kfDviRwR8rtegU8CyE7GytrudTV9SYxeQcx88m47gatqzSM7niS9H3q1Q",
  "key18": "5nNo1CAJZnaw5sjn4YNsdyPUhYZE1F5UNd7HyfqKQwvx4efC9kJ2wV4LempQugiJKg1aj57YguwEckvjGJ9hZg5z",
  "key19": "4GpRfKvdW8H1zp9AULEonWapcJZaTqEuJZwzBrJfXYnNAaUjTcEFJMkyrroPmwxbBU6yrQSYUJXxWsBL1DZxq7Rc",
  "key20": "2mVXvre9FzDVJH2HaYi5MDxT1NAF5u4zrsq7dbjPjGU4TLHyucMg3sq59zEo7my7miuWjNXYz3cd5DJddKegnfNY",
  "key21": "3omLtwgyVeix9KYvdTQfXF9SAhYYcEyCG3EQLC21ogNnBKpGFiQQoN8PX94wz5XFW13RiS3zPyxUaDrG9HRpkZhz",
  "key22": "48AV3AgpJoCNP3TBAYAKRD7F7NetRuZ6VCMgDBQWrvhem7nbXkoCVzFCAFBA4fhjiK2mBn2hEGxAViT8zJW3rgTy",
  "key23": "Jg5uNQKuz3GAtCoJiptXM7m5oSg8XpgVLSkkGnm3Fw8mpca4TrwnZWofvYjaTE8zPnT4tyDffZy1DhWLfKWgJ3m",
  "key24": "3Mx4Jwg9bu5zwsSdbqiaD5qwdrsEnUFWirwnGYA8z3VqPv4NoeT9fsFQ54NQozfqorchKM21jofJ3qA9a4Mxg26A",
  "key25": "2PUJeQyrqMLNvUV6TbgxC4h48LtDyd7oYNHEgT52Rt8JRMp8jN8rNMMJ7A8yCdF9WGEjb6vCupT8mA8VvDBU62bj",
  "key26": "5AfJTgnaGvpQ1jhQDuAp2FMra27RRTjmaAQ5Uf3DM4jKYUnp7gH3T6LMNmvNAczL1D62C7gcBEcumc5a8wPsPRW",
  "key27": "4juNfDYA2d4t5Ly9pqMQvJmNx6trKYmy14dLZnuB7isXPZbZUtBExMsgpqxc3mqTkS4a2JVGnj4gQtAMDGP5sjJb",
  "key28": "61ieGVKQcivpqTALM5sHK31DXP2PLZX2Wdc38fcYqKbnxYtDU5GSYH4SoobEJTenbhWYWj2Ybkst52EnjjuPiCDa",
  "key29": "3oux9RNCiMkeuYNDcVskWB91hDrp2mn39Q9L9kvWc45jQNQNmFjVmkPBtgkaqbThV3vyrohHQ6uRR4oWASqQRZjx",
  "key30": "4ppnQvoqGD88BkGPqMLhWqikpTJgcxxpB3Y6e6CjFoxtmYPw29j7ZwVCdzP2yL2RCeYT7pHyzXzLujnV4boXfZGE",
  "key31": "5kFk96G4cESngFdnjk8FFLbyiazaTGbNRxobVT9GpEmaQXKzD9jY4nPyGNa7zPRSeSRFbLgy4eu1cPyanYANEarK",
  "key32": "5mBczeQZz1nGRoNg6CoLCxf45XZ67wczWgBhzNrR7sesAZyHuLLwt8MyrQwye2eoWmMb1FY3ymdYFQ9BXE4nZGwJ",
  "key33": "2AzvBQjMiaxwzAh6dHYMdDFiBjZCDufFNfyJNcfTHj7NhMGvrLw6SH3Ep99DQW2vFnCx4iNDYz865j3RmoZabTJL",
  "key34": "4eNCi1QEQfQxMep6FFgrcmj5F91G1MUNe2wC2JmiNCRi1Gseex3cJEJXgaXcZRgxthzBMmTTobL1gbsNVwFQ1Viw",
  "key35": "5vmxZMLLSgnVq2Pf8cGPHDULLn9qx71dQqR9EBPdXCDCRsuoCoKFoUu6mBSzMAc6QHZCjo1Ntt84WnyYrgqrwSvZ",
  "key36": "2WQNhsutgrUZBg7r1sbGVQnYj5FxFuQaudotWJarxGGtD9smZqiA6sw1oZgtztp8tJVkZWCGHD14eiVdTqETjkmB",
  "key37": "4JywuvKvGMUunoLLc9QP64h6am4AWzN1vpUXV2TBrstioQAMUbVbNVLNu7XV6g17Bt4QKknEuckMR5pTNAcb9bcS",
  "key38": "4AZBZJGxqLsw51YdkxUPpyBVsN1r9dCjZ6NVeiLBpZJiKL6Ajep6Esn6PBGjFCWD1GhfWpbwqXg9Mp6qMK2c5bSa"
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
