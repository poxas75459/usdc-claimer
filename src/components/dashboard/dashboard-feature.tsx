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
    "2KsmcVJf2XeEt2AnLVVTd4ppcQrxsm8FxRiyEw4bGGatV9NebaFsFw2guYP4HjdACRkWpef9Ti8EK1AfBmaZ8cmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dGg3jDie8VBJRQDdK4Vond7cBaoksZtwikezuF6uPyw79Xu5YECHRp38VVPBABZN2jHmtw72DdvmD9tNVG9GvDX",
  "key1": "4UggRYRqfGBEfu4DNrCP9j4VYfmRHrythEeWghizWzUYcgMUSkhuXF46BdrB8SNeKNGMvW9FnuUZDCs6T3xfgQtD",
  "key2": "2NfBv7DLxkt8dfkyXPKk9RMC63TNsM2U3mvWwjvHhvUT5F2nkNj5g6QWfcWbyoGzLFR2cx9PzQjjEupLifkjsQ8i",
  "key3": "GAhnAuWq3YrPLdKE95NuGacQk5bxG2yQAU4f4JZAXbagaBwtXYaKFe3vHEiBqsFD6kBftPjZ7CznqDdPbtqf37T",
  "key4": "2pDRce9H6vNd8zciqwtAZZzzQmLbUFbBa8iFLVMmmi288fBgq2fPsbYszx4A22cYLTj1eGudynSyZohaLEE4qiwN",
  "key5": "5okhNKZx8ZTBvuyByydYut8wgW5qHtmcAofK71B7C9QtfwX77AgNxoSAMcdE76fw6Qa3MhhVxv5gis7X9qB4HBdk",
  "key6": "3q1nPcsBeXcbN6eCuRUYtAummTbULyUTeR4MC9kmFugBm3QUiX493RFQ6rZSxJLgpSzyAZpDHZQrLqRGFQrZYdL8",
  "key7": "2yHLBtPUxn1RBQ1S7sLfQyyPr36kCGSKL37bESfV1gnsq1PHcUnBUjZV3qxzBLoFmVjLeqkMnA4H9jZzWi4JRdHZ",
  "key8": "4URGYrfv8iPGGsFBW5YNXyJDE4uUhLzUH2zisnUYhqkx8Ftmx98Kh1jHUXjj8by3eSy3f7btfRKuhmXqccfEsGK1",
  "key9": "3PNEXjHoP6a4wPLSpgg9yGvXaLX3u3myECepFFQjEvJKYkyreXfkwXiMFF5e62YvUiRg1guLwfZnT1GsmF9EPTy6",
  "key10": "487r23rbWZRHveFGK9zy4qiNGHDed2hzYJ5P1uUhM9ESpsC8ZHkY4s6DS68s3gQXDnFkBzngkgM4wbJwuDiFSrrR",
  "key11": "3oMd98JUQ2dWNbxjtY9s1jHYfA436Q9JgsC7vmq3MbPF2fNrpPxA6tMtW5PfJwfKkPPZj4VqXnzQpLtTw9xKBDXj",
  "key12": "Yv6UYAgE7YBCYLMU4NvgvrncDVbTTyH9LoXy8sX2GHk96GQ9J7qWNVxvceB7oyX6xjm58yruP2EEBwtKmHeZbUr",
  "key13": "4DGrBAT4EDbGjAo9CvVSRhtFRYqyavY6NqAyPYbvnYYS345uRd5VXYmCmP8o5b8LuqRwexbyT1LcnuPCEnEHqive",
  "key14": "4RnHFzJgiBVbZEjjnLfjDYvA6FL7AbzkcnsDcYTyyKbiTs1AJrnDGDPAn8umCayqFuLbqBmmotVEwCLHayrtG8TQ",
  "key15": "5Z5PPsJL51oCWW62jriVYLdzrXebWKbC7eKEd77dxukZsfYKY3YCZUyvJQGEW4VgA9TRmiYVnTjG6AkRBv2HkgVx",
  "key16": "3VVeEZEoQ55dr43Bf6z8jWQnTrx6HsXf3y3DVTBZQUEYjSTTuRsDu9MkNX3jF9iQfefe4TaTQA44fq5LMjvg1Zjm",
  "key17": "2xM8cMKPux7LcfiQETuxCPTwxrgYS1kpq9AwBoVLLtTaUjPqmTiaFvtDhnSLZgiFygczFWcN9wsFSJQ8BVL4KhAM",
  "key18": "3SL4S2wA4BFTyFCK4x9V5HZKc4H99e9x11tP7BH2YvptwWLHmjHdX6ookxGKYH7oku9cWBCNtq3ecQQYKJXgpnh5",
  "key19": "26fu2gi1Korzm4RJygZoBhwXhvPLBAfDk1kdWiZMPpvkV1gFqzcdDfQoNb1JWanNXji3DAehM1zMZDGtETSsY2UK",
  "key20": "3scm6Uv2qTQno3cBfF3VotCmUyRtjhnuZ6yCq6jACfDQxWyGTBs39jBePi7pRsrNP3A6XKnDj1hbLCjqxKpa5UJi",
  "key21": "C7UBA3s8Pf6dhUDpKEP5uak8gX4s96bXm2DarFss5TA4HRibHzZmWnywFZsMsNXLh1C9iF4TCE5W5E4YY8bZcZQ",
  "key22": "5oER4BH1UrAgJ3SGYDfrCDLxYxTUsNJLLokPYdcaLvQKaR2FRVBsgk4WvzPyzWgJ6G7rcZa3DXTgZ4SAdWz5RDVT",
  "key23": "3mWyHaapMHBiEXoMcAtqjNWcvwsuNFdV71M1SE7DSmZJ2ESLUEppRufA6e4Jc1ZCEW9AcoTsws5BQeHadJP9bG1G",
  "key24": "3boDRRbF4hSnyMT9NjLkfTV1n5YjayeNaGQYKvq7gFb1CCD7x4LEyieezHXckouoUjJvChVQx3aAL8q6BaEgnFdU",
  "key25": "3LtKgicHV6TMazzgyE8v72KQgjRMwZc5pCjD7v5KvYwUJHYxGrYD2ZYgSngakaENGzAJywyMzE8oXZ4vEgW2aZFN",
  "key26": "2fyUKSxhKZrVBYW82wwxfcQJRYdZAWdyqpnshmCABuNmGRetarshqYqyVgKkFUDxZhWb3NJGXVJVTEKPPWrdLu1d",
  "key27": "2U9ToogNCX6QfTMtCCx8XJRk1NWXuLApbJG8sX4qKNuAMYvQM6Aa6hiNsRq2U8vVz3ZhiRx52zzZRyCFsRV3tuyi",
  "key28": "55C3ssUyVvKS1BKq398h1Ww876gCRCDMmg5fYMmSevjFsW297pZ82Gueki3pMbuAByMtXxJGSKTqGUHEjdeFjTNZ",
  "key29": "28wSYVTUZzCT8GwWkpRZZeDoo1SGTHgooW1tyDzvhwbU3DamFHxwNWNGqXpYG3ZMwRD9Yb67QFKSeaQkeP8iuXXu",
  "key30": "4LPco6Bt5N3bvPzVESFPEcqz5LvH27mve5ttbGyEHgGD1Tie7Gdp78poaB4LXstHFACiexd4yqy8s28gXsVg1Rgs"
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
