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
    "4joUtT8aFEyJYBGnSZVhyrDe6nDrBmt4FEf2p2y2LHdWef63D3vjYcteUpRHwZsiHgSBBgBQsnFm2euzau4wrjRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YMUkSMdfrzkNC87xkteicLq6q5mpj6TpCmdBR9iFPv3numW9HiAhPQH7N9xhex6rYxH2sn469wVo5zVbPX1XsCG",
  "key1": "55wvNBmiysAQqhQtM4BVXhWvKowaNCys938GEqtQRhyk5zZBfX5Gs6d3AnX3JpL2xdhwR9ie6vyKoZowzbWHegkE",
  "key2": "3YFoN2JWsXgs1ADYGBSrND41D98ZENT6b1vqKsp3Qjovuc9TjwHpCeSYAKxMW9TRejZnzUd5PiBZVkihvG8qKW3z",
  "key3": "hwjLNCx4qQyXKEcLFXqb1yfaj8FmRyVsiy2eZWzdBaY65h4PRxY3A5b9iB3EWjg4DizDkdERjiLYKU3vnt1mEPm",
  "key4": "3bEa1bHNDidBJQvVixV9RpWdEc9foppfCz9AQMSFsjCQ5KjjxYad85n24MmhCVxYkGgscc7QAc3LKPZuxDpeMUKw",
  "key5": "JaLXyBLjWCV7uTUunGmY5hAsJuZ7kXecEB7WTctWhdDe2pCUMuoY98uAbTcVRpsPguGzDE8y6MMrpgiod1vjYag",
  "key6": "2qCg6wqedbfb3hcTsjjpfXyaf2DZBra5ni8ZL1xA7cNuHqvyqQevK4MRDZdEhZbU2Vka3Pqgbr2o94tyfhBfN8E6",
  "key7": "2QeZoMrXciv6LRCbVDvNRhZAQp5shmPmrDFEzFQ6787daeERzSPpXoDVnaucrzZyyqcQjZzcbdSzLGqkSS8oK5NQ",
  "key8": "35sdobW3BBS2aUcitrBi3QkS6rBugNABZEgzcYEnitVh7U6eWdA57o1sQWPf67QaGt2iq4fn3ETN4bytWupwF3dL",
  "key9": "3bxFUpbHhp2s8ATZNDQjo6obP3dZMdkrfkV74ye3HFcPMF5bBoCdP9d1mtQVuEGMs155YYoKcKr1GKpetdaXw4nk",
  "key10": "2YH9vp4gwaxGSon1Wj8LsLVjweZEjZJvtxk7Kk2jVBPASFLg8FL778Jsauqb5CEA2fZ8h9S6WCmF5Uta2Yjrh6kW",
  "key11": "3Dhr7XKpYsLFxF21fT18QcS4cURVf47ZhSWXSHneuDgRXim2Y2LR8mqDprPBn82RYMx8DenEGKLk1Qg7rM6VpnVX",
  "key12": "Xf7Lj99YqirWLyMi9BkP1SLi7M5BsnTNUwTeYvFKAdLDiT4K6hWHRhjq66AQkxxjQ3s5U13pn9a2o7Uw1sSYMVt",
  "key13": "4bHcPGu7PnWCxGRAx9Q5LWBcwUV6iQhBoZVF2KMNjbZJvHQ12VtfXpEkg9md5krfvDbFrdyEmHta6jyfRpGRewd",
  "key14": "sjtsuhJYtgwMZfykS2or6ax7EaonuEru1GGXT6Y4jDAJLTsUM7T3V43g7Ko436UHcb8CfHZt3TTZe1H7JKgq9pu",
  "key15": "2LHw4wv9YQhCgSaTVVnPG6LdgA1C2hMJwHiBBUkq1Pghub4e2tKR6LGUMTzbfEq6i1PBCUks4Xy3yY42SVzJfTfU",
  "key16": "5uydx8r7y9NwVQNWHeCBufDz6pjacxJLj5BxrkchL4u6ZpkRnzTxr6vu6959JuuZZyjLzdb7ViD52nq2F6v5vms7",
  "key17": "3tz2CR8EhAREhZZqRzqfDoEWh1tgWpSPeAVsrBvbnSpfqZKAW4JXKkrVoQwrWqBZUDay64wWFFoTLX4W2jqfN5Gb",
  "key18": "2AeTzYV7nQJN4y1zBP1S4vYrFd1mvXarsyZXZCfhh1SVLDA7BxFBu7Y4qfyKVJArAmavDhLJUhyaWfroc86MMN5Y",
  "key19": "4aqW4jf5mqtoKYMjyRdNWYh9MoorVPMHc4QFtjUwcjha6m9w1Yh9W9WjX7S8AnBayEdwzttT97Ym865JtP4BPCs8",
  "key20": "3LrsRach7s6EXT1n4x6GeWP8NSVZRka3KqdDqDkRxR9LJniePVj7bFRFcHWUBuztJzFThs3dxbpWDf7iXMYH1nZN",
  "key21": "4CzZkF4bJ2mjrxGp7gVBTn1Vh8nBAUSQvzWYbyTbgFPD5VyhpjPXe3NRMbu2TEqpMVeZ9o7YL1evD8ngeqzDFuJQ",
  "key22": "5dxHaNNuJj4mcQU59Lj9xXgBoD9J5qzYx4eSi3g3XgoKJnqdCPpgPSR4382Z4jeGPKPS48o5oi89vKwDsWV1dxPP",
  "key23": "3K7YEReDiMipWCmqkrDUdrWiNWAWeFXbDLLkgCFZRjYTLZgZmkjMsRPj5iQrM2UKGMcJXnLWQpH9a34XHNTG4Vy7",
  "key24": "24DJSrZtEVDvbYjZvQbde2cjojNqU4yJmDiumjBTuf8auxXwcHzTy24BuCxyarqjUjx3JnYhhctHkodAEmAMrCYt"
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
