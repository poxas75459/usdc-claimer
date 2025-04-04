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
    "2UmEtcAwqAezvqk6GBjagQEVRNiUeSWwc5C7kWyCaF6zacjYvYscpq9ek6AQqYiz1tDKpg12DcrVp3BHqtM88rmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iZ4Q3Una1h9vw3fykV1fgUASAQA4FUB8Q9VnxLZF23UVuTP9A7xAhEK4TXRi6DRfnTyUKo1cr9gWeequgnYDpF",
  "key1": "3h3FJgfZ6t5VwxUGUAZxcCb72LVBsaZLqK4oeeWZhgWBhD9rmuDjirFugJFHCFAZkPXpYwY9467tznkxLyxLCska",
  "key2": "4qq3MVguN8QqMunsQSdtoswq3Mzt7DzXkYhWFJdFYcgrotnNmRZp9okXjPKdGdrNq8HPZ1P9UhyMtqUcJMvk1zXt",
  "key3": "2mkC3WJc8Weqj6Dx8rMFEKv8fYNRo1792evo8bpkEJnhxGT5ZMsEbcZ1XdhtHjKLg67X6CpVHK6K8UaUC9eLyC7x",
  "key4": "5wAvgypXcAA7bSRfD3MxXTkoLMNWNQKrihdnd8hwdEshkxvuPGSwS1uv89GPMNPLUj9VHrYV8ecGXLkJtpA9WGXt",
  "key5": "5QEVNX4poBLpZQShwtj2tTqXfVhkqbw3cm7VyGDNKKu33GtnvW2noC6wRUxfYspFrqojkibVxvftaZoPoD3hvG46",
  "key6": "2agvRYRnQEuMqvYMM8TCNJg2dRLfiMNmEhjSECTd29b34CM8sd3ZLE26khS9NBNw3KvEUmjhFTx9Q49ZREafhLor",
  "key7": "2hxg8TqXdY6DqDRS3qF14yydnzJBksoDkrULjK53DCJv356SJqNUebytA7eyEr3SP4JPhMurbEKWbv5HeTNzP7g7",
  "key8": "4kz7ewyHffGDPJqbBnpRSukGhuhHHm5rwKadM3EhZtJLrkJrS3h9M62rBZr7QWUJRSpkcHEVidndYFhNv1R9GXd9",
  "key9": "3yuqj5hKarJotbENCdsNNaBz1rWJLPkGmZhvVJ7uUx8s5dasF3TXQzTG3BRFuo3f5Gh2XYCSUMTUdhvqFZfaVshR",
  "key10": "2eCyNcEvcnoErUqCsmrmfPKye5wEW47XVfUr3HrVkt78brmaJDQeqfX9LGh5xaiNeARxRfLx42Efotrqgdkqx1MR",
  "key11": "4qe7fHGk8EREUsk4dYmT8xxJPir2PtLu4m4wDhjKAnZYJ6esBPwcstWAC1uWJDB9LFTCDmx3Yucv6F4xiU1FmvmX",
  "key12": "eLreRDXELhrym2wtKaXpU3BFE1zqbxMsWFd5w1pemYg9o2Yepix4ANDm2eCZrZMk8ME2y3xucjaQ35fQ4fYPvhV",
  "key13": "3my2jss1Z4mHZ3mtFuUjy1U54T2iDj5KJRGGfKpRzZLMAZErQb6P2eDvdDdfbF6ExSQC8nMaw4zu39kF4cDrPdAq",
  "key14": "2bBri7cWFkfphUkCvxGiBsQuKWF3i4q3ePNuuSJu9E5nZVh9SUrQBLwV5aE9EcwXmqrkh4bmcrChaMGdtD5yrDR5",
  "key15": "5NdEqFNBzeB747GoL5axsXaLDhBRzp7JNQcpNVZwD1ERgRCYnTvkVGiytjguM5hu9ZmGVPR8KjsuDFaMFoWxmZxR",
  "key16": "33bDZRTo5cXemADGKJMvrEGXm5g8VSNrT3zWAH72LBCZA2XWFjd9hKsafdLrugBb7a8Mi3pLdPK1XnS8phMiGvU5",
  "key17": "NwdnDh2fgMh6GiPooNDEtpvT7FRQUQuN1DUsoRjimy2vfx5ork2MJcRZF8qzQ2ZBszgXBqVgR4VM1pxHp2sGPL2",
  "key18": "5T2ZGP3gRuyW46GBYcmtinvAGURHvuAiW69QkL1aREv4tx3r4R7pXVR5CP5hvYseTCUq6SgrKCJCGsyGxihNWQJd",
  "key19": "2ELHvUbsczGqb2cpCafzRPQSfznN2uS2yygaNF3x9XCrYzH3UC5BNVek3z1nfZmVsJGTp7SbZUBGjUuPRWJiR23T",
  "key20": "61Kqf2qjy67xUkzSVSLKp6Fb7JnpKcfKeApkUpEnv3s2jTRfkPjwtDqDwKjH6gBRjXWGUkmJReCqLZJXvnDmwDrX",
  "key21": "3seCh1TnfyVDpxnbqZv8P9FL5o42xZ8oLjC5pFMpCc1tg7KmgHNVioUfUoreL4Ses1oTAQfDW6uF9b7zUpybpuaT",
  "key22": "24s8H7w1N8rpxEi9zwyc424bwWqYMBMCiQV5xBVhve4EX1qoc4BkdGPoUd2j4G3jrJEpvsE3KUy8cgHMe4twqJ2w",
  "key23": "4Jc6FKUuDqX6ifbZuid2u22nN1cjT63FKvzxT9M4Awd1epsK47jBFQnVRVACVFjCTuKh3bGNkBD5eFcNtHyMsW76",
  "key24": "XPEqkAms89pPVJKJhC7ugUWygi8aBWTuBbBnEh6kgVEGkpgDqC1F4rYAw4Ctu7Qv7kYF6KkTPSE6JnRK9N8pV6u",
  "key25": "2KL5R3XQPhKwu8iuDg6ZRW5CJN3LJvYqDwPmPdtymZcsgXgA9jgPxFkuPby9xfYDm58xNv2gkc4eoDp6KKadq3nA",
  "key26": "4mSPYMBJ836Cz7G4zFJTBAe43wNQwXfD1mXDqN24KkSzAHAHTfCG7SvDj6vYHvoaVvqSpbgZm4w9d1J7FxtCMPVD",
  "key27": "1aBX8SFso2rPFLMYRyWER9h8c2yfksRqtnSvkaMXjzG28PZPUpQqKTcp31YCQuWaeoWaaoJ1Ppe4pKzaYXFM7iW",
  "key28": "2QDW9uuiv8EB8rDPm71Fg5XmWWrTVz5Y5wf5ppG5Z6fpFpsyBwy7JgbYty6uEGWYtjpai4BvBSWw4vbNkgxzkiKy",
  "key29": "gLTsJ6Pdwxyf1AyFaBvb2RmotXoDQFUEm93cP44uHnTrfumUUrVocmZqF3oZzaPoDiiFVuCRA3VTTEXkofhSJ9Z",
  "key30": "5guCJ6q1mnQbV34hjNjVncCKZjnF9fhTPZGJhUDL6fr3hRJN2mmvJPWmAH9VcvFdK67kwh59RWzMYfCfHzajti6Q",
  "key31": "4zdZ59ZSYarhkKFcWQzGR1AzC4FmwoSk6L3jnNJmvNc3GumYRMUn4dPHPqkrh2sNpSrt3j8uEStH1thPPruW2ie1",
  "key32": "32QWm7pL2c7LBp8tAm2nMweKdPAhDfr4tWFLrr8BgnkqpVGoNj7vAmhJFe8abC9JU6UDXkPLKtEHSMdBbAPza7vg",
  "key33": "3DzUZ7fTQzehBbH2EatPQJPqMSEXTtguQc4qhEvwAL4w1oN524mmKrMjNfqBZNdE9LiKUTubHQ9GR67dkDganF84",
  "key34": "2sKtCgzgWSpPFCePNViL3XTzrRwnq9MFzE6Hog1uRXo1ATcMnz1jsQFTXqwvQybvzUsDjw7VEjcuYHLf6iSLP4cG",
  "key35": "25kLoh85WahBretoK2S44QLiH9qYLxX9PMAd2FtjWwRbSc854K4Cp2PtdoqD2j3GHRm6WhnudJS4n6a4hKuk76vj",
  "key36": "2ZSkwP5n3dyhNMRBNC3iUpVKYLJoLWsUJJXYdtvnnhNSHsS6TDzYKZVbN6SNLY3Go57qw7pZq4SA1Z8nJ8DeZae2"
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
