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
    "3WiWpEU3ZzwDCw7pZptNKHN3z5jVjUYsV4kJ7nQZNV4aZuR9qCvwobcvVthmQg1wehscRqeBUYAk7VNeDd6xz2ZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M7jFaRjUMTbQrhyEY78hiy2vSuY3jnLaqpxAfDa5FwBgrgZW6fZqox8dkaqgHkBkYWBtGVUCACe3mzyRfzPWhdE",
  "key1": "592UHKdNaDRGHBTJnvaPcChS3MfiBgtd7pKJtRYE7ZvddYxW3DRenjdVy61t7Zm94g5jtbqyGHHsTJKenSjTCciT",
  "key2": "458c7T6hhw23Xr3zx5uZj6okVj8S5TvpAut6qHm9jrr2bWXwXiRFy5SrgihTVgAStwFBknmbuye15gZ72rVfsqiV",
  "key3": "2PxamQgkgqJ8wNeSGntWSR6GxzkCu33T17mGjo1SqXePX2HUBuYV274Pm58pi2bEq6J9SToEiuXGxwSS3mEQEnMd",
  "key4": "5Me4nbT3aZCTw3t1g8Eg3CNu4kejhEpE7aRwv8oRc6DfCnwk42jcM7KDCJxSjPTJ5SK9ox96i5ctKDm8vZrYUW5R",
  "key5": "5doUDVDbj4RnoExY6jKEU5Tp9d7d2rmBdiu7cRNDhWrN1hYn78SRMEK7Dh7wX32n1BdHtHga7cRWi9H3kShVGh8h",
  "key6": "25LAdPXZoY2pgvkiGdYW7GhQj68fvMEUeqKhxeNA9vWAy66zweg3qKQbJBsFQat91DfLRjjykXmBjBqwum3vQwT6",
  "key7": "3nCR9QB9iMAfHwSDxKZBhtfPjFi1KzMotdMApo9zP5GXMNX3XKrGJPvGGVZGdu9Zhdh9q7Si9w5wtnuJDH7ZaMzs",
  "key8": "54zdt3w1CkpobADNF9XZhZFvKkogWQXC32FdKXz3rqNwYJkvJ1qA8jq6XSzdZwBTZLgkZU3wtaz9KLZXNEKPcytE",
  "key9": "4765dFe37VguJCuiEGX9Vy75Zj6J8q3q8cawcjnbcbXKuXdiu1LgMbByi77xXtqa1zdwmKTJX4uLoRWmrQ5mL2Jm",
  "key10": "3oWZRMZEjwPJfWUhR3CTarZDvGxqnazGxTEiqMNixXVXC6bEVTdQyZUbGz8JUZDqnyE2s2z7NGN1JU1PyMkarT4U",
  "key11": "mkjnBLNq2dmNwALUNMtRx517M8N9DBvMsyoHTGTNMsa6yKVwg3bX5hzVDpcbxvkoyMrvGTEMdu42U44bofckpkG",
  "key12": "4EcLB5xYaqf8Ao7dYLKup8fEgCe3gUZj8EtS2H46ArjNzLdN8J3BerbWNdxS4hpnoQs4SGU4U4kgfzh3R1dksXQo",
  "key13": "XhMCLgvrsResuNqHMQmxKZZZNjb5Wy7N15VB1QXsEXEL7wr2xcrKodYXuVkpjCZ239t9ZQLMypFPHKdpTejWQbV",
  "key14": "4Zzzq2WB8VSknxAn3K7TyYRj5MFEhaCw83v2gsfEpA29oxVCdFpqUFbzgQexJc3Kd67x3SxJZPZZmpEBbVVxKMHz",
  "key15": "493xyEqwp23ctZesCVUqTCGCpCkoyeDYnqCAMiLYLUe9dpnct8xVvbuT5WJsHfQXPTGcR3y1f2UkyPiirKdgu7Rp",
  "key16": "4un34Jc2F9FAX48FYXiMPUMSVJM9hEaGZoGZLaeUwZEtruRQbCksJxBS4KZnGcwmGRvZ8M8pPtiUPgi8nabtcnfi",
  "key17": "2HRNc5EviWVRNHrwHcpoS15S1FbSu1SH6dueLKEv3EVZedAgzWuVWBZxU54sBi3phBMoHM3GCe8NEpUb9yvD9NEz",
  "key18": "4RLb2QdqVywz2b5oB9mnYYvRVn1pxkT4oddJbAAXhYBKQDh548U8jY7mVHZQwQC4stjYqdokMMAysaup7cKouw6Q",
  "key19": "36C817B2wFra6p4CG2yjPSPvmmbq11ApTxZyhtQKrt5YFtS5dhmbSdYWwi3Cia2qhwdMrVpAbLwFofAVNL8UXaFa",
  "key20": "27eXhvBQ61Ls4CEhJ1YNFurQtM5xSoBT3qwmukCPbDmg1kBVKMFey15oX6GuU8TdryiWYfJpnc7jbrmprk61PwWe",
  "key21": "53Kr8MakHYd64UMSgqyFuBVK8kkZfBeFBXZSBgVz4N4nooQ124uN1GD4YAorARH8HYxBiwdMewAcim18HCWwcczP",
  "key22": "5gBBy6apUYLV4stpNou4NtA2tLGihUB26MSywszpbXhQn9pC9dzxn4SkpFZ2GmLzcCTvqqc7aHAb2a4EwN7PZPMV",
  "key23": "AX6qeMtb1gKpsfxipkQzAuzeCRiAKTFREiPFmgVq1pWYNMGXaWxEv9Tn4F9JkSKPSVNthw86XRqzS3NVzH4imFA",
  "key24": "3bNvt2ZX6dFqHgZwiUtonFmWtCQEd36wJ8F5W5mx7jm4eWKkni2qoBkXGLUaaHXp7pEvtNLD9hY9jtPUE6MQ3fNP",
  "key25": "4W228gW6whkocveSjSqAHMaxR3eWefk9yoUvswJNAk5kEsPi7typsxk86qzUXEaq3CjhjqbotfCLnHtX94gXyHVe",
  "key26": "3nMQfiBvNk2WHbkHxFpcdirVdCUeCRNyBiiJnHFQPUQkbU2bDoKqbGskLD3e3c6ravZECTrAY3937JbAujAsSVNP",
  "key27": "58K1eQFt5JxrTtiy2xXuKE4srfbrotEUki8wSZJANJcmZmSGQE5GaKF1D6cb7uXGGRE3iaAsy3MLZididsGwmu1p",
  "key28": "5ddJo2XyASZP4VaWYaFbVQQ4Et3E58cbTSvxyHVH5mcJKraTp9bWf2iXar1XKAx6JgmqpsJ2jNWgToLNbyt3Naok",
  "key29": "3hm1Y8YcRm1PwvvfGskRCtNes6CR1uRky1Th3xmjfnEV8Vp4oRuKQ2cDohqZ6PHzbnWCR1UrjnMA3A6tEy1usMSH",
  "key30": "z3CXCX7gLJ4oUo5Bzqjdtk75LLyz9FmpvVx1peUVPWqxbSCQnzzBhTcfjr8NvZF5ZeHP7GG5rKt4MQZVzhWC7AY",
  "key31": "a1JNZs6udDGoNihXm4SLVJT7N5T2s7jR3RgTSFvoGE7hkSnVeWykV9XcGYfHYabgrFnD4SeZrEeLksAyBEUrvHH",
  "key32": "5QfAaUidQD8DLmixaZ4uwUjWTU4cKwZimxTCbGhiF1aq73SqgwJFHChnfWxCPXiu4k6FCiw6LG7adhyJnaKdZjsp"
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
