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
    "3nEbP4ZRTNyAibekqXE5TpnjykgdhyiSW3Bb8T1rzkAAE7RfeQSFMdJmJkq4p8MSNbHBv8oF6ZJcnyoRrET4ALoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wVEu8Po6Y5REy34b15yEwU2Zgu4rJU4S6xx857KA3EncyWSb353Gx2n4a2ARPtR5euhRi3DJkoy3Zkq6zy16a9B",
  "key1": "2a9ojqQhgVZZQ16KuzU1UJdkA5SnuAWx9N61g5VFqwdMC5kxRodygzv8pxWduH3wCmsrKG9QCcDi6QnNHEJCrsFh",
  "key2": "8e9aqciRwDpBMPmyuKvvV3iqLEmkmUcyQpkSe78Prr8y8pZkbcr9VVk1GMpy1T7hM9dnkpkjqG3RMrmL3EMekLc",
  "key3": "23XX5vsVFkaBQX4vpPEZDXTK3BrtbTdfuayAJJ5o5W3c7XmNyio9Wa5BzbptspoM8WntUrBdSXyLaCzzW5H2hGQj",
  "key4": "26RY8EKjR17uGHndrz81rmYsZmW6b6P4qwQNfCKWkhS2myBC4LPMbm8hmCtZG3DgXc8yKkfHLSBcFLG4p57Tb3x2",
  "key5": "M8gKDaoYuScyEy3yefKWqFQBk5mRvZqm4NxS7AmvoTtNgtCJt4SbXQsGdCxz3p8kCrB2cfNDuxF2AGk8w6fZdwK",
  "key6": "59JzEXRRFaAUCFZexV755cLuZc1wSqDVvjNod4VcUtpJ6eTFCtuk7FTTgWUhVUJrUHeGvVghzHZjkkuKXQEUSz7M",
  "key7": "sY3dMKuHUcu5HqMHM1AJjv5v3GabkDzSUXVU7ELSfsDDYRTZTfvvqxYDwrdZwbtzFk6arrB6W9miKSUzTbX7SW8",
  "key8": "5h8aoxgAexyvVjekpGi7foSAtpVmWv22xJFJWT3mthrkPGn1pFV7mPkKQM3H7YPZeqLMgVVvzVTixRpPYXuWLKRu",
  "key9": "5iqCyGgNUkvKakgK3nnQLJeRXhaX1yTcj1hPJ1gnJYTrUCbZh2ZPJ4wdAVBFZzvKr22t6gvZo5AScxDeteJoYwtu",
  "key10": "51YiGLbCanssC4MX6FcjS1JgXUw6FFDnvkUjKfa8JPeg1GnYioiQiVmMEyCFWMVpBB2RHN6MAXM955pJWQWGwhWQ",
  "key11": "5WSpmcSN9GzcJiQrEHeXVNkm9nSwpGTPhVUv8SxDkpmQnQCYmZvzHrKHByiAfnYoGLCko2TYmUccXYVPrzTTXrj5",
  "key12": "41mq6nTuNUscfHTBZtDh6QrZdqXPzQ6uBZ16Z9VyZsSZvoFdZnJ6JncgDE3y9xXCG9GqzEDvjYrq8yTRLaeAp3re",
  "key13": "2DPa7yTbgqdSdCVpXtmaw1waAoj3HhuzkECdB6Vs54CVMHGNfpMPTiH5H7Q2pssWv2LFSgJatAdNA7SMxuxNRXPx",
  "key14": "3FDsbHGZYgzPWEa9H4bUMzwQsstmPncwjemHMGckpDzAjK7wEvc9XKwDt7TknW9w7ED575sZTGYf9MVJ5ay46gEs",
  "key15": "4y9ceGPvRrHR8qt8RdTZ3Yz4tttZN4PTwJnqq1aTEuyBKMcbybTctiMvyGN8Jv3c3vx42dUumsRA9WpFNjrGTri5",
  "key16": "sKYBAmiricZycyCFfxTGGBnhcn8dTt9SikFgm2ifvnxUaWTStVE56CVm46Fpeu9RGdHHE8mgZnYfjWX3pK4fexA",
  "key17": "3Nj6VBcc2gA9DWYP9NJhqUUfdP4etvBmNmThw9mtbQXsbfMrwpFLCw9a5HTwtkEMY4uRfqAB6ZMujxriWGFH7yuT",
  "key18": "5gvtVXMxHKMwbtQVfGCMUJXTCuwNft6bXtyiCiyw47Xhtrs8ajJN9ZqHLBzaFe8x3HfNyznBLRFBJtYxvpNi776x",
  "key19": "51LEast7KeAAVtAwEGy6bRFvPGe6b93M2TN2MWAAHswpZRdYcqf62ezDzgDpjEmCXrWgXySq9X6amtGdBZ5MXTTT",
  "key20": "3bsjEAxNaZcZWdiqTbRvmeHEkkc7cECQb1ZyX7yMao4gvxniADR86tp56FVwYGpdKvhU34iv2YHpWjm7Q7QK3ZGh",
  "key21": "4g9BGAUN988DRxaMNa6SdmQZHGisF5ykX1tCLYACeMqXm1YygZWqaQtYXJq5MA46Rnq3Bf2nC1cZsrMekHexUzkZ",
  "key22": "5XspTAWnWqq7irYg3qeAZYpGqzAUMyejeacEoiCer1vFWszrMq9iWCKSXpnjGdDLeYEHdEhmbjt2oQCdKgDQHq6V",
  "key23": "5dG5eqovjsycLFt7iVSa6phMqpZxT5hnu7JXhhj3smPkMzyzp6pFrhcSC8MtP4QkeULnQa9VXDk5ZJGSihxh1iwP",
  "key24": "B4xq1KcBywyPKuZQCzfuZxwMLHgoeugHcZNiAj16TWMdUjc7qeQZws1Qx4hAq46FVftexwcRD7ypoKBYYkj44JJ",
  "key25": "5TUPwNp8WtdEVimdSaAYDas2BD1Acdgnrd9f6xEpurMwASccviEAZ9d6hwQTomv3ovev9k4hqCHVVSWVzCeK2vNu",
  "key26": "5P7oqSU5b6aYqAz4UH1rRCLPJjRX4gqjkXpVeFv5FDmhU6d9ojm9mTYs9bhm4KiYTEmRRk7iiqAVRoeB2m65Bit9",
  "key27": "MLDbEEFrEp3jaARXqxGN1HeyXRNmfLvxGL6ea9AuaGBPH526vV82Ey795WfGjxGKd2DQhwu1DvPQASsKxzs1k3a",
  "key28": "3oBmbUYrM5hp1TDnTaYE2hhCk8S4P4ehkAY4UR37Z7YdE46swt2rQNk6Fu4R1N7CQ57wT9Pb6yJLmEidmSkB42HJ",
  "key29": "2rY1aBDdeHGrkVvfZKDDV1MkNPij4HQqFV2gHifheJkrL1oto5Y7CBri3L8LYH36ksjvXVdKQarAgVW4P8DQuJ7r",
  "key30": "5RCGA1EMDwfEws7kHWv5DXVRHBGDPWP9X9esngrPcUECB3vVktHTXfQVKZw82zvCzkZREpwGrnD8FVh5JiG1rGex",
  "key31": "2QruDVg2eNffiPuh6Bw5zHCrhtiKPUZ8txHae7Q569WVHcEcc7p17cqyMgpzdL4XsRjpDn1FtmtWHNFEBxRR5bSr",
  "key32": "33fBeKbFYe1nFTL7NgKZoaPpRRrs53XJHXYU1iPMii5do7h3VzsGGm4GUGjUFqzigDYtSuoWtnS9rB2VS2Fh6Wnv",
  "key33": "2nNSCPcUHW9jqoJqLQjVKCeJv2EfZ3NLTKfuipJe8YnmP23H4eV6ijvbrdfxdVAdud1DTaz7DciMHv8uiq1gxhsb",
  "key34": "4KxaKa2ZfjAhxqtu4sLp6jf91GEWmF46Yz9dUDUKdMwEtuSCFwnb4upEyFaPzzAr8Wq5K4FYyHqHevNvMbDUuWEW"
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
