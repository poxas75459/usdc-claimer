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
    "5RVhsfXFNpsAr4DD8DQzzvBEAA2sTaqikvHKUYwcaESZgMtsgozh1dXkvyWHebmccWSvdr1vfuBuvN5KQhEVCGcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z81obfreX2vvNWgX4uRANWCCAUJxo5vDyFQcVaS9CwEPCWwpMwFdAfQpVTT3knacZBZ5cvkMZc3UKiXE42yrGtm",
  "key1": "DTjfxmZRHrBLUbPB5L64sz6dj2MHiGaJ8kAmMvfM5taCXf9EYwJzK579j42mvbkLjJoz2BgiuBqJJNEDRqBcq6y",
  "key2": "58ByxBvRj5pnWfnN1q9JYzZgntmC62qUuvKipkWHNQsi6m8KtomT6BRFmYg6c5nH6niaAfnxQKpqNCJKifStuZqz",
  "key3": "5ZvLVLq4dbg6kadfmSr7AuzMDAaJLg1Hj5JnqNaPEZeVW9vqGhkUo4KDfuy3rJ715BRvM6FozXAtyNYVZGBmJZC5",
  "key4": "3PrmtvXVavUY9neiPydxmv41WbsMp4JcHHiinmmUbsK5Gk3QGCmQuevCc6ReVYBn3g7Q65kVPCaGi9X6HLMYq2v3",
  "key5": "5ZMD8QZLwDmB7fZeh7rUxwoggzrJj2XScMbWK5RnwRHc2x31MJ6ha4j1DSUh7N1pBvDNTd22D5N7C1rr5ZgUxANZ",
  "key6": "4fq4LbAX2b8xjZCcryk4BF6Y3Zs8gATyeh9JWsqRdf2Vcr4KSWvmRMaH7wt9bXEgmf9g5P6SBEUM9TG1wXtZ7znL",
  "key7": "4gko3j5qkb9Ppk17MGMfEje9ynLyyrVo2GDJPr1QbjR9uPDDH1hfbh7X8YndE8iEj4LCzZDZu6jsyMRefUhg9BuQ",
  "key8": "355gz8dwEitq4K6fwvPMTCG9Vdoosfgb7DmHcSU55hB2iz9yb4wzZYQudSetkS6kj6DaimprKumKrgZULNfcsfKV",
  "key9": "3dvQpNeEs1DW8eDDLFYAmckrviC8zQm4ezrpPjBWSigbmwY6DnYBVe8awbh6SnxAcnC3CHeNDcLZkmm5hoaeoo3Z",
  "key10": "3uRiPKgJTxVPZBSL3wYwmypzcpJUoYX3jWSTEJAn5RuxQSNhgg6f5cT4HR74ipaPBV6qsWNqnRv6fwrEvfv397Fm",
  "key11": "4wAh1XBLAzXcNRQ6tK3ZLpQbaoHDr79uu1xR2APMG9w89aS7PBev2VPPWFuh9N9dH2JW9YSqEL6RxqFia6ksjSe7",
  "key12": "4mNfg8YFKktdEFb71K1ymH9gRXDhQS2Gt94EgZ2iJYQqwWso7ZDMgv1ao5swBPUbME8btgEervGX5tw3J89bo1yY",
  "key13": "55FCLKeET9V1WxGFLUcGCn4tA6qtwmegHZWUtrfAQdDJJEYw78RZSbR7VvF8UgUi5L6uiy32ZRE6vjdnGwfAhHS5",
  "key14": "4v6t5twhK35VPXvrK24BoQ4vGJioaX6am4YeAymJSk7EWjRUj9ryrMsJrx8ic7N8V5ghUEoPMQdQ3LbmGhY25TPY",
  "key15": "4ix5MjksPzZak7TyG4UpV2DwevaCYJv3RuuwZ5WxP4wRqPjBhSARALsrGnfTvCEtRKHYD7uX7NXzk9XrhfNfjWFd",
  "key16": "4LXjt7HU3zoXPvXhUgTWbzU4kgyjHXBLJNkJqbfTtcCARQnrqvjEBMkh2WsTbpUHtVv1GiBByyZXyZVTBPJR13hL",
  "key17": "R8w6okFbDgdeQKfedxeqpEcmz8eowCjPRSAmzZLJB6PY31x9bJdwMEzPuGJ6SKTcovB5F2nNtEMwb7Ym8mi3r2X",
  "key18": "3ZqyNroMUBVrmPw7EaBdvvuEWasABWHX5kn51F5kzDaMXW9ifm1Gm9eYCSk5wBV6YxR3DTHXH8mX9ggADR8PJdQn",
  "key19": "LRqGQ1bgxPio9Ftuu8fm7vRrdWbvYfYD7tSCvLrqTznPFQ7sQgzxdSsXBQJDMXdgvGtgBDszBYdjG61qnvp6ByC",
  "key20": "2WBQbeqmVvSR9Fh3Sf27Y1g8KczLPbQdg3Rjyce49zGrHYspGhYQD33juriZ3vn5GKPvYJK8xd8hbebSg98WHUhF",
  "key21": "65f4wbzobv9hiZcTHSX6TknTvmkspW4wGrFnv3zLZThF57owrRGLWPKzUKKtiJtVn5oLyF2rdnqXLCVzxoi4Wzeb",
  "key22": "3gutvUUr4JN5v5huYrNUjoKW4tRBis9MsyYKTVcvcmTS2ZYQRi9s4ULDuCLF5UmwNxD4CN2uz3mYpMN9VxTeeWXg",
  "key23": "2Y5DEC9Vu3FBUsF9o6HAqQ2LJFRrq5TffHDU2pG7wExhxHLm2s117Rdvh2aVibAuC3uJpr7uTBLbnaq2npgzN6Qz",
  "key24": "4gpdjTKQQjyL8zM1nCCU4Xxr4kQhGUxM9gCTFGAuHd1ZjEuooxx4Ds3swfV2xCrZpg3AmyKBJuynEF4YEQrQG7eF",
  "key25": "4aSE7ikUZXz8doqUAKQhosZQfo9HucqXjv29pmYYHBMvNcibVjXCGCjFt1HSpBU8afgYpvexJXh5digSx8bKbCEu"
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
