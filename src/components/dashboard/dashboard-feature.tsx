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
    "64ESm11fAG1gJe8cCybwHdBjA2ebj4CCGLL9mucLcqqk9TLTDQBsKynxmt6RYYzJcyA3Arvzg34XobKUxvaqzKgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j9Hx3Zaepe9WcCmEwDvHYXUuMZs4syEnNXQLadgGisuhLBzQuB8JWiYwydHnq4fwn46mYfSpe3wDLA89eujVRaK",
  "key1": "36q62h9Z4n81paT4z7KSDccU2KCXTUtrAg6Pbi8KqcMZENYfC2o7snmyfSARmKXWJH7XEVSuEz7VSY4B5QB5jjmK",
  "key2": "5aekeqHZhJzQeWC4YoZMUnK24c38EEYTRC2YXuqUJbTy6jQC6rk32stJyNbPkRqZEmSiTK1EN7oX8oM5qdg88BGw",
  "key3": "65fJHxNiPgn7ndssNC9DUaau3Tej7GcZxsyD9uuTpStbnLxUxy2wvT1G8zAdVJkyNDZZK5zSNkvEmrUBcxvcUhNS",
  "key4": "4Q5LPbxNGk6ic4EwVNg8R245tkSGvo8xAZX1punSaBPLjS4Wpi2HU7eRZYmzjBCwmDoVE3p8qZobJMYuwGhmwVBa",
  "key5": "KZ7fWZozzwzsoQi2TCxAzvinPE587jq5cCRrFcMeoWuxgY1Gx6tq4izSTZjayNYN9TeJdD1tW63teMK67cvgRkt",
  "key6": "3G7TkHFsuDDcTjrJBe562E9GMoMarnK5wDSeHyeocd6pDSDPKVrfZLLqeY8oGPP4BxnEFRfH8FRfpSJz57gywYDj",
  "key7": "3ArgF6ZjrmqUngamsGj7fVdLKTNdWKwL2euSuaH5SgJ6SgSwMfKmwtvG1iiSxC2uCT2QBUMHtPNSdrkpHog29vNx",
  "key8": "4AfMTsTHtjaSSqyAHX7B9khVTv5XoHieoXpcJKuVpP6qBj4KhSshG9awaXGmY2A4YKvPH24APJccrLMes6z8r3jX",
  "key9": "4PyHY8djzaHbSUwRR3vUD8MAo3TGRJysbN7SVj9hxGpTr1vE5XCfScUhSg5LJJaCSTntynhK8rmo2omqiRgXFio1",
  "key10": "4W1NoB8hMLYmamZM75N9PbgCxFWYPSuf7FyeJsP2bZKn9iQwmZdHiKi4zY8Wpp35HLFrzN7FesSFJ5nMgakRTnmH",
  "key11": "R5Vb5euXFX3xSCDnweyGZvDCUXqaAW4kGyLHaaKxgi9gqU8T4on3Njr9reNoUuKZwUZWLxft28EzGTyjRkUySzA",
  "key12": "4T86mKVvFX7rWa7vAKz1pkNFkQp7ccWQchbKseDvgWUbE7AEHjLcbqc6xLUWPr5tm9a2iXD2mcj5oUKdPVUFTRhD",
  "key13": "5ep8CxLqLobvXNRg4ogHJsst8kMtBdTMWnfLiT6keW9oUsQrsd1kfsDBbZ1eQRRS1EuMZJdH1TE1e732YoiUz4NS",
  "key14": "4dyaiwFELnkYkqEHKoSZFKbpZAuEHnFQsitQGmqw1c7R1rBvWd3W1ovfCrUWU75BxQGbNWbNgYf5WEqZ6YGay1of",
  "key15": "2moxsqdkkVE3M8c4N5Uwn5EbGR2T4ouFAFUYkhrRBTj4AUkdB3mThx4nQFSUYG493uahY9NuebDw3ySNFD4eTdDJ",
  "key16": "535Qb7YZi6oMZaRDhF9kVAKThE4hkrr1YHKeJCErcmBDqSYoEYybk3dd6CcDqqW6bbbVMwn8AJk5LRsmQwkTURYT",
  "key17": "5SiHvSqAbgwqsjqp8whENXexLA8uovz2CZJjctmoaPmiY46As7eb6E3H2JKuaGtUmVDmdn6FMGc9YZF2kDBqTHPr",
  "key18": "3TvN1qLc3kzH2GLEsHfh2JpdKeWaPcxrBEjusbJVWBYCeS2oMmRLYcSMw9BGU7ZDb6T7MB4PEgxcYQjovtYSmFUb",
  "key19": "iMtxk968J3kcj8n4ZpXepa9hBapNeqjXX5ku7eFZAbj8gCqihRza4bRgcrKMuPu8JLGAHkZFfcsGiZcNbRcrV3C",
  "key20": "yJ5ht8cBD6nreyKC2vEV4iRRu7CRXqz4QnXHoEaqK64RnVidJXaJqHm9dxmvj5UprSwbpxmzXwUqHrtrgk6LAG7",
  "key21": "3MsEZVgYoN1JMzgRCFaa7RdC6wYLktpLrpbZTzWVoN4tGHDMD3WtmeRQP696MypgNZpHcbkZcUuoCpWHwhidr7Zr",
  "key22": "3JgTzg2cwc86hBkczcE25HQCwmHBifpYsMuw3aqt9wAKc45NprbtKT71TBVBHki4uKjTorfXXivgpQnxXy3HBexj",
  "key23": "5vupiYW7obr6aiuvTryZQt5YMCahgYG1u2HvVd6Q5AAdppo2hr1YG3vJkM3JwQLvGGRY599QVc1ThHLJU4JzRVL7",
  "key24": "2XnY7QvTfPTXAdQjM13bFrC132i9cu1ud1sALtPRf4tkiWkM1RrJ7Y4coNPdznkTES8tPSDz2MBjCqEWXJTtYPXF",
  "key25": "5AY7jGgPpkQXmAQD18S5kHGgQHH1h4prDcn9cskMAjdvPxKhSEMByk6jmYCdwn6RXULwfMPsY9yh4bJMGaPZM5s1",
  "key26": "5NFTTnY3uMjcc8pxPXhkRdrdA94LcKeEZFfu6S8ebR9pXuhbqFDoHKNSBbqtirCVGHdnCpTbVrx9QwkEvXZZx9CT",
  "key27": "298DJdUqf85GoKG9S6XfaPhrQ5epbr9y81W5iiMRJkrAwfPfoVeXvKjkYycD1t9SZYYiYvKgWkuMD6KnxrXQZ7fu",
  "key28": "3by5GpDXZ8wPgNYzAmRw2YRbiCzeM58dN6RKyAXxbYNK7dPHN7cuh1wn1Y39xj8pUSQaGPA3TsJDq3KcabvdyrVm",
  "key29": "5e5sASGvUtCw9jVgYE7HSjQ44TA8qA6HGh2bE5sTq7GrJzoQQb5V4Bw14hNGuowrq2i6UdK5Dx1NMFF5BDXrw61k",
  "key30": "2d4As4dP3mRcDTbZcTReVCaoVvhiSxBrNS1A5NfQnV22nD6Cj2gHsghkcvpDAhSzaGvifKcHwW1U3xZkL57Jse8a",
  "key31": "2RHXrcKMDddYSRRHKeB8a5mXqjD1ck839o9d4Vtci9LJWq9rJKmgboFz3JnHfhFXmF7ADYY262zC8ZcZVtTx3811",
  "key32": "4BMdM6iCLVD8smX8ocgusUP4FgAnskL4dz3uDnJtpWuKyEhG3nTPrVFw7JsFFaLNsmQt4SvSXao1QCzgKm3whbTi",
  "key33": "3kmUv8KuZxxU7VPs8SqwiARAK1tUwQP2wsmeQDVwB9AHkfSgaQY9zKRM7BYkDgwQeCjcSspZ4Z6naYD3QfPPDBUM",
  "key34": "5RJmqszixBccPZFunFxmGCHYvx5hCLL59oYocTqnnsfqFusF422sFc1wnJGTMBMo3AwQ65XaQxgrqZkHoefdh69",
  "key35": "3e1Yro1N1QzPEMKXWDR7F26wg8TyrDNpooBzqrKRdpzpVstWtyuKKbSECtJiuodTwh2WrcQzatBc3551M2kbCiBm",
  "key36": "46rZEnqoGMxSFwyk8RWqY6xvSXrtj6iV7zgJY8j3zQ79eDLcnVTEXLcLVug41Gos86RryzbX4JvFFpVLcGaj6yBN",
  "key37": "5xHXWLYr6na6F2iJRMHWfcTFpTYvswa3tnJwfgtfhPSxE4dYBwxjqmmxGio8nZzquZQ8Zi14ru4EuHJvL1DaVFwx",
  "key38": "5CUCd8ZYzfwmW9LZC6Q1BEbZEB8xSTcd5X5tSgeVoCH8bt5oGqRKkVUfYb6dW4WqS8dhdc74mHwCJaMaA9DropMm"
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
