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
    "4krnwnghzdm4bSsPeNMDWq6VZkFj4YFLutdeqjUJb21Wmxb6dGk3DWPuRKDHu8itPhdLiEn7Ha7hcmyN7qXcdsJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NTQR9gLKdMbjD9Us75zphmVH7CcpV7wdpr6fLEG82z6LWZDnFoxnxeX4eremF5JmnjJrK6rviaUPFssLWXGVCb1",
  "key1": "36NKGzLS7FM33ErGK27QReGdLUfvG1c2jp47NLj6EQHyvRWp1N3EMrzVtceYyYaozUhQRoH8U1w1zbvpyRBCxxxZ",
  "key2": "ndmeiKpSPx86u2V7cyy95xY5iKQ8y9VXmmS2MmCMmwJJaKXtGwq9s5iGHgFogBjPGDbJmqpsTdbCKn6wKhxH8NC",
  "key3": "5fv3fp6NFkaNAKkKh9jmUsUmz69SwfvWuoTm71vbR7PDJ4rgt3eRb1uRJZN69p2uG3hAAtAHCEpw7mvzatFSDPgz",
  "key4": "2YaPjdMKEJkE9s91V4Re2QGx95tGKs3tbgsneSwwigdXdpbJiFSv9SJLNnvnKV9JW2kT6VpBFwSBAoND7tmchFnq",
  "key5": "67dvgEmwX5nobAWSUu3KBoby6qfP57ekn3TSWXHGPRWikGKDWm7e6PwCYDmzQAPDtJyL2AXn5UeYXJ68X5jongjU",
  "key6": "2EYsbiaVpsWyNs5Yu4eK7RkWKYN9hBpkLoB62PgqKZqoV4NVKK8JmHheV2NnTNsyjQS5kHgtaDLyHDEwQ4SHimJ9",
  "key7": "2VVfAnNtBN42xzgSWPLt5yKNd6cMsxaeT1ugpgc14KgE1L6JeU6TB4eNkvUyhkWikCxXrpbbyTJu7ebdTbfgcuQi",
  "key8": "2ULXVxsLHm5HUFfyb35pJB4BEm8rZPVVnXsBgPs6hQFNoBjdwgRWVpg1LEwKK5QyzkjroTapy8VoqJVgu9iMxWGi",
  "key9": "3STEhFnu4EyXgqGcpnew1hPQrhbntFjcdT1DvgWExawgfd9MHTXyWWHBhBU1jAh47Dj3mzaFQH94qRzh4SHs8AK4",
  "key10": "wVrE8thYEU1NXqHnAyTzqNq11hQc63tW42cTzPsANRhwtdede9ikMBWGU6p4HZG2PVwHHkzsxW17yhdhfF9eDeS",
  "key11": "46HMhMniABhpDWeivoPDae6jRw55wVEQjK7QRonqKkXDSeFTGWQgiYjajQcnoPLP5u3D1tBTjRgyF7WaJ9RW3wmG",
  "key12": "4D2PwYJ4jdXZxcnRnM9xhTRZ2jq1LToyvmuVTRjjMh76KWhk6rsrhAu59Bo9yy2c7TJdzqrWVJqpFKUQ8C6La3xk",
  "key13": "4c18fAB6U3KdHZX5fsp6VQDisehvDZUa4DcEBc4cpvguHeDQzfdjNdW8nXfTLTv9oAijZP3SepwhcEXS2vgWVonH",
  "key14": "2W46te91LYdGFrBGa88aGt7dtKiwzzjmy3W46nxXPrNAySPQksv67xpnVw4EQDj82GDXgqgvn4aQc2ZcePMgqj8u",
  "key15": "mCr3sVr2m4EGRqKEqbJsaHVm2moFP3eDanVoKXCnvXfUgFDLwaP4aneZcs47j2aKUSMUzWjf26BsGYNCBury7JR",
  "key16": "5KvFhYBbJH62rXCfgaHL1ix4CiZWLm886x7uspj4gn7CmJtVsaPgYMFDdc1iWYHMP1TYnvyrUWsasg6oUmPNUbMK",
  "key17": "2przxJRPecw6EqzxAEeNxwVK7EYzMDpfmsHg1sShH6YkTf2DVFToLigcyt5JrjLPPFmbXG5nKPPL8eZ7dujB6YuK",
  "key18": "62DH8mmaG8qeNaHzkmbKKqkg8dY3GaQdFn3kTneoE1HH1qhFLFK5LvPgABP2wkfwCGnJLk8V9KQmWDqYGihjxmcX",
  "key19": "Fiski4RFv5aQBEvACcDPdpoNNV5KU5qaNSKe5w6ipbZ2Mr7VF8AzUBTqTnkCcKH7B8B1VMXY3qDsmqDRPLuPWKw",
  "key20": "Jj7RcgnTzCEdzFcUL2ZhErfSYYwV4EKFDLvoCcCn9DcjNj66gq9LgTXSqh31QzXfJLJEUuvNz1Eyn9mPpeKDwKk",
  "key21": "37qN1iHsLQhZK112YkgJP4RHDBtm9oiFyrDc5zBYP68vCHm1MBmqnC1YhWpjDnFP9c9CZeceBQ5TFwzhNoSkDfvA",
  "key22": "2kxdyRJAcxHpUY4Mtw1ktrKfG8kLhY6uMkm53g2vLCpNyy5P14fd6wG6nQYsGEFCmaomi216uevsHETchwNgKJfX",
  "key23": "6beQA2iYbvkNaSMWATPgNWZkP3ijuc6KAg9phSKbgxCPF1AB28ff9QxZaik1CCcPb5XniK9cMr8qiwSqu63cv3L",
  "key24": "3N9x8kuwEmmzwmZa223amdvED675DwKZwuHPXm8hY4d3gSuMdqovB77VAEoj36bKsrwtXeC2LUCFaMFPRSzg7uCm",
  "key25": "5TqQAHQy5Yx6Nhs187BepzmTVEKaRYuawwPKSEB4GbTyYadctHCEMpjRxXMnKQfVWpr5gNKBRcubUKiopmUdqNBS",
  "key26": "2bhx3h7jvHLHpMsq2xmcACoPHBHwdJ8RfTHcYFnQcMQApKQ49JNQUGL2vv8CTfLRnT8GwPr1tRwby7GHMzzEVmnh",
  "key27": "3ntbVVKzQXjSLEjYCDuVmbrfY3dS81qaCbbYNRRZ5ZSLQawDYghuAmoVUchNSaN8CyZhryafDzTvJ4FEso2Asurk",
  "key28": "5kcWKVq3mNikWA9rJ2T9j8BcnWLJNgK9Yjc1hbaoZUSPQdRqGKdZvSN8aaCgfjMkjbbYrngAhjqKSpoPg8m4VKND",
  "key29": "2pnDggzCLBYeiXoaxZT5MWv5B6oC2e1LyLiCNxreoY7BV6VcrLy41oKScKKyKPHwzo2cDXW9MG8LGDujpDQHW5zG",
  "key30": "weCCzL3jHvzKCCWseDr215JTPhFrMW4n8hEPVoYt7tCU1CZkx6SRz5UYF2TVh9oz975fJKDPBpxStFi2At3CdYk",
  "key31": "46usgEV421sJw1fdM7522hBcmLfnRcVdjefQTxkDhT4HRUFxJaKC3MmEvF692hokd59vdzaFzQYzLu2uHkNLRs6d",
  "key32": "4jizcXyaykbnPz8mhoiaFC6QVsyjfiZyngc6XSD6y3KvnAwoQ35S9V1zEbQFJZQgPzTDyKFM78TngBBWzEGZutN5",
  "key33": "5E55MU9mvqUNSWHGj8PzxdmfE85SbV2K1aUd1mKDBm1SyzNqofGssTqAkH9tCXXteNTK6cJTR1dNrzCf6qegwD9j",
  "key34": "2rgGMA1JcEMtzzKGnPuyD2kftYLYu7F4W9fc5T8BXjfPP25LhecHCiW8N9Q4bJYMh3vuHeiQ9EbVrvWGqFeBqqSQ",
  "key35": "39mNHSBVvkRU6JfciPrD9tYPP2Z97UK8mq7ewjztEFHqnQvZj1AV8HyFEQPvJcsJ9JGUTbowceYAxgVKrPxXKghm",
  "key36": "2Md7bDBpYj7a5WBReeU3qkBBSExu92vG7429ibidVdVDZyHU1Q4zH3UYSoDHTGjMFFmrBxqv2PFdWPQ4wWqyA3LQ",
  "key37": "RH7bVkQJDqmPiiyUgyhh4MXZ4p6wtpzjU3c54BqRtamukZgxd25HGxnoAMwdNiGyV46suHZSMfdM7NmyUNqhomf",
  "key38": "2UB1Mtt6yNhUyxo1E7xyZok85HY5jbAaFid34QFfTeWtDPXMY56AtJVbWLN7dQheP7WT7Kju197TMvu7Q2SjNGrx",
  "key39": "4AasVkJXRzy3c4h92PJb8Q8pYGzaAhhoWtpQnikBh88TApacHcEkWHCMBCy53CJ5Z1KVjktFiwT7MvAF3BVYSMSx",
  "key40": "4aTcmPFbqG6jQ7P4B11WuHpoGrhAARuWBqPtxhVRFypjjEghsViT46sbMzAMhs63B7JqJxUxvFVBmhPNLNM6gBfm",
  "key41": "3ZMG8eTEJoZtjU9UxeQtHRvbysgNLZNBPq5C6LEGp28fo2eceujty5aWVVNReM9jCU3CM79HGk18GdijDkttmPHL",
  "key42": "63PaiM6d5vGH5AeQxJVWS6tq5E3zLV8rQsY6XTDw5YrQTYPaW2QkY28eGH1hMeediVFU4TeyuRKuAWEwaLkXc3yU",
  "key43": "61PRJyCVZBM4fVRGf3baZsrZpuGnFC2jRJgVDoqBe1qYwEueVAqpzyGeFwyN8FvUKd8UdTyQ79XbPgDbMcsXzwU",
  "key44": "3sdMF1E7GLfyCLtLMiGfcvyPMfbcGYS4vaPVsrDJNnbYpTPkEuzTpWgN3mBKDzqur4tMMhQYCbE76tfyz6DsBNtY",
  "key45": "48yPuwzt8rQDL5zE5wME3XPCg5cRjm38ZemCmBX4CTKpCHoFcWC9JQBs14y3snuroG1iDEd3L9YGCZd2cAmiheG2"
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
