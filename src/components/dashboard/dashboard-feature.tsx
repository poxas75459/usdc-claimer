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
    "CWtEoh3yHKTWJ5dmx2nZ572pchFiZMkGhVTfSjVp84zZw1tnbWNptFti8y5LBGAtnwykzyh8diKMKsx7FGp9As3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jEMUXHytJupiyjPtp5qqFVD8LcVo4u4W9YwZu8yCB8YTU7QY6ucUmZ3edSZRzmqdupjWumDwGFCq6bNU5BkSPJh",
  "key1": "29qdrdgjkuDA2cqzUny6sDNCkWsPmKZ1oqv6SEU3zzo46zY2titRGWEqpUREeGAuzATKENGjonrWfzXpRm9BtxhB",
  "key2": "5DnTPaPySXacbQs9f7f6SSVtru8KB5JXT3SagJXqW8ZYj1Jw8AHgv35QkMumT2kNKuxoeswBhdXgjM6fTF6HRbYJ",
  "key3": "4pqk2uXXvsRDePZCY6Fraqn478x6EmrYQ2nRmPXtZxtrUhqtvy5tUGRjbPwqjqXyEUqozH3BtnC5M4o8JJBJUeCz",
  "key4": "2q8ztttsSL3HvdjBp3zGTP7PxT21v9uDjziTxqxg9EQyWGM2pPQ2ktnYUFHq4nr33U6xHphS6QfsidgrsuMfrtRD",
  "key5": "34uNxNe3csHR6zkRQfzEQeoQsNcANu3cD7hYgVcPPimB5EBC1XGHAN4jdxwPUr4BcYEf78HwHJSPzkFhfLMrprgD",
  "key6": "4tSPRUs7qVu5TbW3jYvoQuYw7Mq7c5r49rKm7DyLfC2NcCNu7jvmMniuvCGNHE7SsaGftqqXuQAem7hHiieCYB6u",
  "key7": "5jQDEMqebtWCEi1pLTWVLN3Txdhc66DawZnE5AkGoRadEzsg7KFhxPjkGaX4gk1iC11jaH1tyzuFUC8JAMWdhx9z",
  "key8": "3QS5JoWftWhRYNMi3KXMaqzAtzmrpdTF7ovBSH9FTwDig7dVBHLZJ3FdQCfK2VVNTufJX5qzuaU4XXDTTa8j9Jct",
  "key9": "3Q4QkoaBKmAFDdLqH2EDNKLKKTUALrkFBPLaEZQU8nWB4PXE8kG6s3SFb5a9BWcGLudcoRmeASRDecU2KYiQS6E1",
  "key10": "52boNFgni2zTgftBXCWEVeGz48upcCsxY1ZUfqrM7J4gTUw6zkxCcVKN2EAnR9A4etoXAwzoFfN8qEua14q5c5xo",
  "key11": "65aYwMZ9KmSs19uuyUjTvkeyHPnhZoF2tyZX5ocW2bAYyQaDkjx11p8CqWpCEdQKSbo8Lwi552qVht4qdYnJTVag",
  "key12": "3XsosSeQCFcVdPPbVGMRs15twKDqWDQYRN8TPjPhWNNWPeDtMLQWjddcWJjXPWg9wycHEqbqin9N6BbsB2e9UVEZ",
  "key13": "4JxtmKqkRGY3XVScrncE4rUcvmttBvgbL8YxQGyeXATKNtw5FTGWDgZ2viWqNmbbp6uWWwiQTnvFUifpotBcTUGa",
  "key14": "4gfRVLhqZwZi3NTBrcGwKyG4NagCtL3MVzKnjnFde6Wf2WZgXk7ifCbt8as2A3xuwKZ3C9MXGdAmjivAnuo2U5qS",
  "key15": "24aiBgpas8F7VFwuCKUeCHVpgDGz1u4DpbCT9Bseb5SQLwb7VzXss9Yid57tGJmzdVuqu42Qzxh3hMfdDDLtRoWU",
  "key16": "3sfS1hev3cU6D1gRQ8LgxVphxg2o75kj2ShaSUkJG3UW37958xJU9Wjnv4exKTQQy354mqEkeehCSzRDYPdseKNy",
  "key17": "2L1wAVruP1DzT8xp9ZzKrm3SVqJBVW79iDV4y6ySeD6NNxSZZoeZTJoKpYxHuJay9JNXwDWpSAca1pm3TAahKUHM",
  "key18": "o77MVo7ecv2N826amSTia3b24AZfLiPAQwkDVDs2dNpgYL5yTSHHsh7jW815z4gf49zyhXD463tp4Lf3huzFaxi",
  "key19": "2GhMonmwgjCo6tSnxrPYQSsVP2thy9epCY7iqHZma8NBjt1BGJhaRDdd4eGhyN7p8iS82RezMYyB823dvPRWyFV1",
  "key20": "4ReioPugi6b3ZrjEfTmAQbXTk9nyQH6tUAsqfyV4P5dyZFVb8nsERCXeeSogSg6uKQu6kwPXjxTQgUm2zRzoEPRj",
  "key21": "42PctHAvZ5hQzPZiJqneAH7z9LT2YuU5dSCQKFCgfhFWYbXpR2yNfFVMHqbNQquR5cTcKqNGy9DRwLH7C1TWurYF",
  "key22": "4CErGW37k5JvBq2csiuNSGekguqo4YrWXoEZD1N3P1gxMuYs6UX5wcor5ctPDSN3QQ1BYUtbjXfkco5eW7pR8ApH",
  "key23": "4z66Bqyd5fzomf2t7MDPB5iGx2Tf9nVbjDxZRuxgnWxAZMbiLAWoQmpwP9PEqcAVmeEUHHSFaYexAraDd27EkjSt",
  "key24": "5jdxkkrXRS3GapgWgJCJEPHagi442J6sTcss1uhaoEv1asS5arNtVfhrpAQzYjTpof4eTDL9v4N7443kUehwNGDN",
  "key25": "5GR5RNkSWrxCXnbAxhXrGnpDs99uMtAoSeXLPykJxYvGiAcaFQssz3TG8Bu352kvthz9y6r4cV5RNMuQjwmj2EK6",
  "key26": "4zett39mDv1X58xSrDMMDBmMYYH7weaSpwBTPztoHC9knCJkEMS1wqqvHkjmB9R43Qc5J2wa5w76jHbcW8js927n",
  "key27": "5ZetPA7BXoCKsXAdT9s6TH9EktsdiB9Q6Fi3AsuBP6voWCREAyg7xWwXKEFwBJpPPNRRskLbN5Vm7zNy1dz8JDEY",
  "key28": "4qQCpTmS9ZgwoKJkvQxgvK92bJCFNd2ycxvRKBn18f3Pdu8Y2KJsMSjgGG6U3ARWrEESviY7yw5pgoyADzSRyep3",
  "key29": "5BDzX1r49WgyfX4NPmveBmRRhDGNafgKCGvaSfvxot571Hsev8RaLPYif9AxBsUwUfBCp2LegWpfVFNUt3vU6qoH",
  "key30": "5xMJuJ9e9HLkiENJFkEZJCHLJgM8MJU3sfzkmgFzvYDP9dicgNjW9HBRUMXAptdk6Yvf9QduzRv2WEok9EsdnzA2",
  "key31": "5KeWQwL3uQEKUxypPxXFmfChsR3PNUD6A695aJSK1okKFxRHfWG7hjmrNrqENwzUVNSZQksUcgL1oeAdpqmZJ5AJ",
  "key32": "3WfA25MP4xkN1yJcrq7vrUeNyhDn95pvme9d89KXD3ywJfM1dHQAXSmLcBSGVqy7ndo2Z7dtjZRZyxLPCyMVnABt",
  "key33": "2ihv7mcFQgGKwNtWTdGfarV7MpXJnUp27TKKXeVpNPvvQHP328VpF3Pvr9SUdYkvSXs5vGjf4ofCWXpjudhMuFg8",
  "key34": "VApeQ7WDejEw45r3jgtvAk2m2oXLasjdg5PeQBS5E4L9LSLa5pimbrpR7iEyDEeEQH3ivMW6XxkzRydCA4DVbM1",
  "key35": "2whv6HNaHfi6mAVRSfSAEpNu7U5k8Yt2isG2m2kRZcgAELwtr4QMAbqZdDtFqF5ZZqpiBKkd3196UzZn1EwGyc7a",
  "key36": "4JWjGSDhziQH57vzoCRKUReR3i6dDJZ9GoVRbRx41TEjf6u3iRqxd4EoMJrWcY9mSUziuJexp9Rq7vh13wSubPqC",
  "key37": "5WGHWDHrdfUoQicseeaDnrkxCmBwKeLVnZYKyh3GbbhULNhQsaGwpeir6y5zQYxh1KXihuuGVm6AY9wMVJRTxjFQ",
  "key38": "XKFSHdbPhgRWB42zyqeTQve6K2ifRfsW5kNzfV4ASjdRK89tP64F8KcWE8LmX8aaGnsiJnBQkyy98UmFxQhr8yQ",
  "key39": "3M776jNXonTmSc1bAkh2YyMttR6UpfXJA5ovi85THRsVpXt6JScgPSohfgnUsjMQNudsVprGCf6ACPjUBP6DidPg",
  "key40": "2rfmNpnAEaRzHihuZm1AGmTAMNE4Tj41obU8E1RhPi8ptc2fJjGGaX5Z5rYujhE2ZXd9XT7rcZBoBr59wLfmqrNn"
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
