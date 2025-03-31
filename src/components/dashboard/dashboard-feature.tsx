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
    "4DJW8gK7d8KjsBMLpZbrbX7UqKrLLMza3Lv66UmEkRhZfKq8KFdwkX8NsZrprUdguKENNGJ1ttiyX1V6BS7c8a2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VhtZwvYzF2kXS3A6XcGRapU7x4fuoR3Uxw284gYowF1rS9fuiMPttaDGhDFpZSj4LGAsbKNgt1auWma7GuCuyg8",
  "key1": "3yLKPsqmpvCdjodkEgFqKVkrxKmetJfLU5LEpbK3tePPUYceyKSCHUExnGjMs7zCfuvcPFPRMYG5urB2jpEDPj6G",
  "key2": "4Ag21HRtYLCP8rWQ3KmqiB5j6s2oBqVV7VAHYk5ZoHbRy8RPEHAQAhXw9itcbb32GXh1feWio1vdk8kQuT6uysZE",
  "key3": "5VGqWWra3HTCFotSVmBLLQMHpGd6Foudk8QUiYSA1DfH15YWxZPP97ePrgYdyWb8JMfroJH3d5KCX2KpSZQTUwN6",
  "key4": "L7SYxoZh6SxzrWUHxwsCUiq3De6wPwfLy9vBGF4u13Z6cwJYgk2PZvRnaz4YBxdfSHp25JS2eaMKNQToL6swn5M",
  "key5": "4JRoVaKAqdtMGxMR4w1o1R6eH84Kwvvhs1sqRN658m77XzU6Z5eHKU7P4AgiEb9NQnNToAFouQ5F1B2K6FL3dbp4",
  "key6": "cx9tpPVmwGXwVtpuzjT8CZCAVhFCYhThfSm9Go4xtbbEdppppWwuP2ohAKx5Xt1bAUWs3hSbNXZ2d8kHVuGYZBU",
  "key7": "3oS1h3UPWzH8kLniUdZQ61dWr7yTWjkocGR5fv1MZ6yQH1Gws8cjnx5BAoGJMxLUTAEmLmo6NDTdobqa8eCzuDzH",
  "key8": "3J4XdBqcUMP59Vgft4Z4CPcQ8Zc2TXVusmc9eupD8xbmVAfqAx9fUQtDCmg64L8CbjPmXVZZ579a4ja6sBcX38Ea",
  "key9": "3t6YJJi9ZtMpGzhpWpRRj42B94abC8ZpFCd165PBmPFVxUBq8SrK1xAi2c7UR8wsXViBr2GVLGiM3PJVmnkcBT5R",
  "key10": "46xoGxcp8rW3jy8jZrrADpA2mZqBKyziDfm6NDVJrEtCGTQe7ckJGfLs9eeJfBUjjrwmUSiRdp9VVegnR1fw1RMC",
  "key11": "5WKH3TLfnmzfb7pY4yauDyzbrZWFz3446ypwvqpx131fVXxLeSTHroHwonKvYegUpdJ8bzow7xdvveyEFvsJpZvr",
  "key12": "KPmsuJJkxKcKGbGeP3v4UUPw2e2PxjwXgPHAfcaH7R3zw5H3hmyyTXui3F7BWPki7sn7LTXG6gorQCxhzSZGTgP",
  "key13": "2xfmqrF99qZc9qmmzCeSxLvaoVCrhaRd8Jvseu98M5Zdek2NYk2nmUfQAxUEjtznVScDfJtmaJL9kJRWtofyZfC2",
  "key14": "4vEPHLWCU7Jy3VvPRViuF9pLGJ9EFnrsjgKyHyQNWBVrVnzfb8PBKZkFD63ae2Vsq5deK3zqiefgNhUuEhSroxcG",
  "key15": "4VWkkZYPZAdXawgizB7diUGsBMj9oVYW6FSxZbdfBt62WQ3fDHvtjDwmCZRCiSykL8efwvuNpBnCMQ59HAeqTuXW",
  "key16": "3VftR1NrHSfsQ3pXMPLyyNcJTSdkKg8P3Gyf3EN6bzPp4zDggTNEAv2kzZiEofwSzFMjpquQREbot5ztSMgDXKqv",
  "key17": "5ALptzW4wRr5FNUyAKq6jZqZ2WyXmgzkDMSZEzCCHbt9tf2J47wq2veLEZv316qDC6Vrf4KoX82UqaYekVsQn9C",
  "key18": "2rqNokNAJHRfTaQpj2zt4hx7XABTqoSUJDU73dR4yKpXdpph5ypQ3jPschEEMB4ieEVEHcbtawj1hP7MgXkzBn2q",
  "key19": "5HC1Xn1JabcdEbh33KQ7QaH6Un1bZjhWbPVvXUKDPvUC3bLxy1chPCmdAsDcPYK9Ut569zkiTdUgi9jvvp5NNrEj",
  "key20": "MVBqEDaGCuSpLMBJxpTubC7CtKFeZfWfRMazCwUTA9RfEGATEKocXEViuvVvy8Nk4gJSmHCkUU2MNSwfBhKgLpq",
  "key21": "v4dvQzaY1PMhacZ2zHxKWB5gzbKo14Yj1Zh8BR6S3CnYWhZrfqPAwphBQdZJ2LjzvhF8W1U1rgWiBopT7ynrunw",
  "key22": "4En1Z1J9KPNVoCFdMZku7FvtzhVCFKmQZxYwCmc5Xw8Epb2yW8d6aKesSRFpp7gNw53947A39bYQgecZframPBJC",
  "key23": "4ACRg6bzGyrQ9mQPtTXdJDJHn49tgKBQRbkLD2w5QoV519SaMLPJxviTiU2Xw2mZbFmpZfDUg5eMeEYXSgp1rgt6",
  "key24": "5MGGU86b26RoMGcWc3P6ANdiLWogiycyAuWRvcszNWGjsGHMmgvsKdP1bYN69eXaBywTbk6wQgHDKHFpxT3KDyRm",
  "key25": "5uZ3MYR7vfXXgxbP5ZgiGSLaNE3JpGVtPkAmMURBgAjiMGVXWnJdm7DBr2kLEbCW2cqCSPXmN7NoLjj97weLQc2v",
  "key26": "3WbQxAGWK1fL4VEP1MvcusjEofEPDP2HqF53URezF2jqaJBDBkfuTeowDHFTZiKgNikwtzwXZJraSDUDjewdi1Yp",
  "key27": "4QLFE8yUv6VNvhgj3sPYk99XrxPub9Y64xMArhakFQxAFXhgcPkF6JRgYf1jbohL2br6vjbsCT6NeeSF2btF3XG3",
  "key28": "4n6ghtRZLH2et2Famwt9boB7gypbZDxnr128Wf3cRHZU74iinea2apS6XxYKYq6dEP4ma9k5xW6CM3ZNDam4epdp",
  "key29": "RsjNmf6ZwsZoAGGurGenAVUY6C7h2eVE44SW6GK7PAskCszTyx5kzyZzpjZDTN18DbWVsm2hh7kJP3GgVJedw5x",
  "key30": "5dTTy7vLEDYzHV6mwN8j4hiYbHArxd2xnmvBCAEQbsKMcFrusDrwLvDAP99zbgqQNFiTDyPLgp8xxQbZrfnKzC1t"
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
