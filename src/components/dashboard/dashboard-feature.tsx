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
    "5QjA16NTQTRwgPnbgW7S5twQG2dDaVapcZyhJ9Csxn3xrPyLiZhXXuiM7v4vpxj29oj5TBo1MNzLAbEzkneEG7r4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3evD4QE952yMP3h9tkyctfShCzgqMTCYudacLrzE2QRTaL9rhWRhajCPRa1TqXex4FjdK817tH7uWsG5rUFZRGwm",
  "key1": "2uUyEAfhcby6W9YAe4Z91Z1ZBYWVnse5jiiEPRZ1kgncGmxxnSoeLyB9c8BuLHZLBZDRUSAbPbKrym2E22u7Mks8",
  "key2": "5mewrVjwGrga7WxPgvkbZYFcWK42Pkwxb9xss8nVkPGDPBxjC9Y2wP7XCMs8rGga2fBDiJCzmrVLtTXsY922xGXM",
  "key3": "wQL31Z3goY6WTXXg4UMrFGLAiwcwKRqBp5C9ZLnpoU4t6oK8EPBRWZESGW2qN75tupFGszc15mKKyZWs1zWQfiQ",
  "key4": "5QwsSiWmrNs9x9LfuGc4mo1iptQNy1siUiaSP6M7mAppKdwXm5zmqpq7g63JeUZ7FZRsBvNMA4wgxPaki4XuQtjp",
  "key5": "4dupAAGDiAgfM5W6JH7WEjqGJGxHpL89bV4hctypjF2i1v5zQkAhstvAGUG9D5Q9LuwkMqnRUraPhFqKtwmXYrhi",
  "key6": "2Kt2kvkoVRSbmKUUHcHBDihPyoc9DYYFUYkDDUsohZzdqQRZR1vBcytsdUj4Rs8P4wetaq45jwAEykRzrnDkc8LY",
  "key7": "3iyjVKvRXjtfa7mXz2ToizFZaF1QEZ6Cr19NYWdj4PFe1RBm5CmMMQMDEhtbG768Xr6tRXPRj21gfVKFk7FmUtFe",
  "key8": "4JHbwmGSe9zSRDYAq8J8PVqFrKkm1apACGXoXFsePU7QH2uqkN6pQyMmwN9jKw46KAMdvvjXubHePJ6xDaG7pYzQ",
  "key9": "56GHwdAW1tHRSSkZx26pYaVvg7b7cwAcecKgp9Z9EA3imANJg3XXwqMBNMe5xLkqC66wmigzmxiAqKkaESrEJnwF",
  "key10": "xX7jCcBgsduBcUFceuKe9kqtUskmKmi2aMUnXXiYgztmeUyEPTwQwv2jrc8EeXF7CyhStZL1McQS8ZMnu6iT2t9",
  "key11": "eM3RDYqcDeHUDqeeZ2j7kBffVNo7oam8z2Cq2hPLxah4sAR7UsvWrc88krMEZU8FeJChEox35VK9j1XZAVfMxkB",
  "key12": "yVzRQxWnE3826o1EyPcmAuhiQNzCnCvqMXwfTCkNdjeGzfqzPNEDcdmAzFknQ8yb3uaWTju6VY3SQjuquWFbfxX",
  "key13": "3HVesHn5sCQQTS6J71mZDhWdWf8r9Yusyuem23naKmcETcz7hnnhA5MPqkyv8FAyCSd6Qrp3YjitJdGB3WzP4fwK",
  "key14": "4iz8DLifvcGBwjYZb928HCG1x3AykejNTuMvgNjuyck3Z3YMyTdwuR4SeAgsbDFYB6EtgXyekniiTQafJLXGdAkB",
  "key15": "5XyQsMptVeQ75SGrGxH3sQWKjr2Wx81uWvUwuW9qNpyuGGRoVMGd4QCXmPtfWKoD1LudeRGyEhejJqcqsfB1SFjR",
  "key16": "2FPmcYV6bvdVP6c2KaafFLxcpSsBPyRVJK1qfW6N3nB9Y1gisnbX21Aya2unwFpWmHdMxdxMRZQipe4fyqJYiNjR",
  "key17": "5rXv3j5Ayx3QispoKtXVgK765B8uXRkD1U7fwqqLUXPMxjWfCDxBLaFuiMosv89BXv3N94kz9m2jAU4WTDw82zju",
  "key18": "gEvWyHRi6kXihLzvuBmsNwXCucEvkwfZo9GFtTktdydW19zpFJxy8M27RB3SfdTLbMtX96vsZAK6jnAGFrWwLkf",
  "key19": "5CfxarnGVK5x7aGFSKVQTTUJzwWeN36Z9NV3KHozJvvj3tqNv7Tn9T1TNb9yoaJMNMHZtRpM7N2kgs8TbYybQNMz",
  "key20": "mwvjfQnzQyTJa7QNjC17498zFNpHaDfUVZoc4Xio9w9gYMgZueDyApK1uTUjRHqxJh8Emb5vugSzAPREPhR8Zwo",
  "key21": "3JxoVXm1wN9Xb2BJZH98ty22mh3kV5Tg52RbWtzBgUCC6Hmztra1u3wbyHnqpU42226rsVESXvyspTCyG99wcaWU",
  "key22": "4dgntMz2e3BvdKgERpkKkt3EeBgb18TbHEcoMgpKvEXRdA7bC3fa2MJx7KZYncFYxH5NDE8ENwJroXhQY25dTnuM",
  "key23": "3P6Y4DaLvCqi5M1FgUU3zFNTfx2eGWEvPtnu9L1DiEp9qqFVC3NY6fP9t8ATh9crfuRFPooFXHhDEJB4kwPULkBb",
  "key24": "37CtBnuS38mGUa14hs1g2VYnFe9Vkyt8wF3w48vwPKjKmxY3qs1EuHJ3nSqavgY8KpPkMvGGpZJbARVghBYDPrGF"
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
