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
    "5of9n5XhHZLaY4NQhsJB5qzeP7BWSksvYe7Qpmj7cLTVM472611ZoWUXbaV5sGLN2bAHJmK4LrR9qupNUYp5E863"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LuXQiiGZw2VSDf2yAuxEyBimyCmgwVki5XaTjMibXT35YA5YM8JBKQB1cezYbqBVcejbt5oDbTZxUGWYME71tHA",
  "key1": "3HnaVBkiiHKBjUWRcY7cHVXHR3uJFoD5apa8toux4J9YvXHRK3L6K5CvMnYrxLFu1UcA5SK8pEcY4zxN99Crahcm",
  "key2": "5TW3f75EuWLXeZQK6CV9ZMXNoxHDXMYn1yAb7n5H25md8yxJ3Lca8Y52BuYWDBeLNABDxx7yekkms5QpAsH1ehKL",
  "key3": "54k3MFxVBQLYgiCW7yYoTg74y1actK8sB1FkT8cF1DN3aWAccdAQF6a7btaZV3GLEbpRQoDoemMSAC3BqC3KbJz2",
  "key4": "icntDzYgfhtQQ5ovpoXGCQsizr9CKgwef6vYDRjVja67vhiCy2b6rAkynj5fKdKSAmQ5BpUKyroYjF5iU7mtXZb",
  "key5": "2o3w1ZQG7ftwZkJCUEoQ84XnD7xzJcUbpeyLvDqb9fNDNPAJAfir87a9oDv19kKcea4C6fntrsG3SqqqJhWN5uVX",
  "key6": "5vrmCyCdbkcPMvhsgy7KU3v6BoUWqC3b6YTfqRMKgm1ddd7Q19T5NsSwrifgzwng3aVetywcY9CAEwQBEwxqVX3Z",
  "key7": "61ijfT2j5ifnJhqERNCt5hk445hbmFP8qjJAabehsG5bhJFtTYyLvHgHomDVtuCJL7UgCJopoJN2MFgZ6xwNQTgt",
  "key8": "qaEzSKSyCozve3MMG5ndFZeVmGB9vXGewa2TwfTkMJSb6d5He5REAm8dKRLe5PjRx3NJ38TMpbLVJA1AuERKMQX",
  "key9": "5JfoViQhA5jQZYf5CL283NcGZYPeacW94FqCkEkJHbJetHy6rhEs8XViRaiC4zdknUddwNnuuQVhLJiRkh5rvBjo",
  "key10": "4ci2ANJaHHx3nppzZCFM75prWmaAB9dT7qM8JW4nLyjHXSxQgBEGY13Zy6Ug3pmMz46hsDfQBJMEiCXNyoGwj3w4",
  "key11": "2PaNeLQJ3S6K7pRWQT1XTPqpGg4QKL4SsB4TTFCL7mh7P21YXXajQKRtJVcMKUxtcJf6f5WUiaFqrnJUw6p48U76",
  "key12": "1dhe8EwLm1m7ge1sPvSAUbH6Vp1kHuMHJCTR3QmGEDMCHXDxHYX9oCLDfRFKJvaYvrXZzBUDHHuGrBWzprJDAQK",
  "key13": "2vSg9NFSXQRraXnQKtJZhhuwpgYiXX5wrgZPYU1RVCZJyJZCfg7wzzTxG33sf6aeiEMPvkTT2cLuLRBvvfwQTmYZ",
  "key14": "4KzuuyP7WwTQ1skWkch7ZgCbJZgd3yyrpx4c2rL154iuDqBntj8cJEjhc4HVSBeKmAr26T6woMS1JqRftJ5Xnvp7",
  "key15": "2fBQGcGvR2f9yEWrZXnHNCuo9WcDP6ZfhjHCb7fDdrcfVkbcsao4fJ1mhhDPb8BZaZYZqXxSxH7ZM79nQ8KNEaCJ",
  "key16": "3StvfsqPkgWF5kX6fLnoik8gvkeKvioUKDMNhqJcw32hVDzKBoCE69v6G5sWyT2RYn2QtYE3TNuptRDWCbHBzU71",
  "key17": "3NH2fhs65DpP9i6NBjmNKqATre5UzZxiqkZh21fPH14Q3ztTjnLeNA4Td1tvDEX32DYmHWp6ppdoojwconGgXeCL",
  "key18": "UxNC4tH2Yvvn9W6gxskDCd7UxwJQGam8L2m1siErVEqfKeB6xm8u8fQ7mMEU9WEXYMG2ZpkzPtLWUq2FkAfToKN",
  "key19": "41iHvrCSJ18ptfzbFxs3sfzqX8Vaf1pAaes7WjzGgtjy2EH1t6FuWuu46yV8JV4cMLpJ5VrDV3BEoNGWT7ZJBfPv",
  "key20": "5YemtCyNFoWYARAgv5w7ZTVRLJT6kuScaa2TamMzT4rNVDjBta2pL8q5qBda6K2nSzHpStQozA1DZtrrsZHLnksF",
  "key21": "3iv7gowwzpjhKKodxMHxBTnihNx6PRgGmcStCJqL9eXeoxyhcEMvJnehbpAaxK2CvCsgFj8wjY4K2FCZoxzDeugv",
  "key22": "oSbkw8miGXbJKSctJHhCR1RN4vKvbQWRbz6LHnc4deSyUVKVyowmxcG1aLJY9HAF2ikeG3iRrid5YNCGARR5jwW",
  "key23": "2N6JaE5enoq7cYWbyhmAkD4KLWepGXVH4pXirk8HPqXs1geGvTQfoca41dniKpX8G3idK6PQ9QzQ9uoFtXo1NnUD",
  "key24": "37Av2gDJHoC1ubBAvmyWCatZWzq6q3SmsG5QEdFZjtRofqwRs2GVN5wMvnyLCYoH6ZGNfcxYV7cNY92NeNXyy35o",
  "key25": "78xpcAVkpT827qvQq4Lim6121akqcxQ9STpq8RpFDhoAfumC1ZvTVAqqEt2xoeNxdxmr3mz7teaJe4K68YpMgH2",
  "key26": "3aG8yDHCunNtwoFSrWi5nFnZeW3U22gfLc6ZogFRgb3d42fLQcgutdDaAMszopRfoTMBE2b9pqeVQUd7DHofjQ84",
  "key27": "5oMC6tVonV66VSes8kfDETv8QycT2pmXauBCUTZ3FossS8qWpTRSSUBxhEMG7qaoAmFpbcu3QhXK7jX28kU3TETR",
  "key28": "2FjyYASh6duSSt9e5HA75Rqt4YNAsCerFSW8rvPA53UCbV5L4DRDYGgV68Ct5EnxLe3bETZnb9MVvVeKhuuR9Y5f",
  "key29": "4tLAxxGvkswX9m19jussqSdXwU64fWT15YfVj9TZa6PPVq1QDHZszfVhDP8UQhvfvmQ1ed1XabTDrphEchpmoimW",
  "key30": "29cVFjSKWuCP29pCmKXABQLfcybsBX9AsfEjCLJS9ddh7V7AAisDBXALVqGLyeD8eCuKgzpikCPUTkqAVG1Yaspp",
  "key31": "67Ko4AMukt8PJDV1b9xaCM8PWwWp6sRvPXjJi72wmrXGwkjsrP3U1764esxGHrowmVBe3f7QVUNdB8HsUU8Cqtqz",
  "key32": "A2gR8CeDQRTbxsWfci17ewdxmH5jZ7noPRPBWXeYgZb99eaVdcs6EcEejABwfaLCzM5NPVPUexFqubBSjxepqc5",
  "key33": "mVCzszXcEWjg5qywVk5g8YrBvr3XHz6NTVQBVNmQ1p33Y4byrattkCa5of9bGWsHsNaiGRMSo7XTTHUpY8tAGm6",
  "key34": "3GisQ8NNTASJcupCg2WFXo9G9abFj1jCu5Eje6HgYDBGRAgtPh93wURyN1UEbBbY9pgFoG3sBf9kxMhgPhHMwFqb",
  "key35": "btq3fzDEu3RaznWsY8NH4mvftRXXyGnobybSTqNxjFFTRCD7Tz6yVBNLzW97taSBMG8hNyBHkX2FTPsar83AmoP",
  "key36": "56Y7rtkUjfVqprmS58irUekKjsejJbamcVHEu9wwLzj6jKqwRDPAPjpaHdNhJTRDRxFEGtcMVrkPjWbopBT59fpe",
  "key37": "4fo3MgGEFwqVxZ3rQDYBopzKAog9i4EUw11qX84kXyaeuAmQU9knkFVLfV6mN62QUAkPWQH3iGvr63rUiwJMBx8r",
  "key38": "5ur34yDjbBVfHCmxuQtDHBazfcCdTMTADKSFNnmXPCoT4dQDmuKiKzWk69rCTWf9qLVCzwhoXH2n6JYDQ9QBrRga"
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
