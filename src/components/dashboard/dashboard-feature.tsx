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
    "98orrdLNCtBXx8d2i6HGySQSXESp1srZtQfdLkx9pYr2siDZa9YJPNKpzY3P7UHJKwx73is4FJWuJvmL1taYwbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4unpVMXEej62EToNF6W6oVVMPkc5L8BJcFfXMAyACcEG4FDVZcKXG2XQJ88taKyJZY3EF5AKUKDURdChghd8njef",
  "key1": "3GLe51EXMbNhsTuH2TBzYSFuSLLQqVy8vXgW8SMNp78W5e4EDHbCRX85bn7FmB933JYsgF1ApeHzKadTcuNwWf9A",
  "key2": "44PB9FZDfxhVBeZg6RFDKJZjRV1hTrK29YqkaeQbjeJPzVi9qFTw21Z1QhtBD7susrezSuMkTh1xpE9jdVq6eeuN",
  "key3": "2hqjuJAgKvoMSRAF7omVSd1gF2MRqh1eTQXPcpVvJNazzua1t4pVRUochxEtcunME5im4an3Pm5wz4vLHQJEzA7E",
  "key4": "3BWvsKKrBm1dU5W9UeRoXMMuukVbqG4EmvQsLniJtQVkuxo5J5DZPuENVrXSQuK3ab7gS5BMVuntVAwjjbEf3fkJ",
  "key5": "3ukfMpKwtb5Qvt7TjU9x1hMB56sktbyevbtQNNBzkMF9h94P7641P9DiiDx2wnr7B7RPQLGbnzGHA9HCV41kGGew",
  "key6": "fmR7T4GuTmG4Esp6ZQW1FLJJp8NSMxxVvU6yana7miLANkif33ajH2Y2tXZhMpYnMTkrfnbf3YytdFQ9A1rLvAp",
  "key7": "252a7TqinLcMZU2hfFpEUUVQinafVJGuw7VFyMpbHHY2hVUPJrhDrdRzuiGgzkUKLod4AkJQy9VDdMYcLAjQQ68b",
  "key8": "4EDDguU2RnEjFTx6gVdkjmyM3XomCE3U3Fx6HkGePvQXbkNKZBZ9Sd6oAHFhXFM7XPryrXmTzLy3wQdKf3gVKyyF",
  "key9": "3DbKfjNwr3XkJUUJAJthuYUtjqxsNkNTP3vtkYGxrww5dM46zeroyYMG6gWfEWuW7yKv6QjRJBXRhTGx68DKW8pb",
  "key10": "5mSgP6oD8kk6mfGJKEgxJVpGmrCvD7ddMX2ym56o6DSaowAKgW3yQDobEyiugX9YSDfTXZkrxqWYRKA67nnwb5Xo",
  "key11": "b2BL3mDNzEMDeMqbp9jwDkn8HaRvL7rJEPv1avhH1urmSqfx9pjGgnc4uDsTPYnztWgtNS7Z72cvzYaFi6uyo2K",
  "key12": "HreyJppAdYTnXz9dVSVyfRbHe69V8XdQiQ7zn2B4szXLPgXavgse7oTuTtkHKc5g96ZbyKc7bnK7taSSf3VwAjN",
  "key13": "4j1BeZH9xFQz7TgVEj3NFyMJ6GUxLvwNy7tW2qnjKd235tyiT8WJzJ1qSYRX5A1UGjeUo1Nge8j1ApNxospCHnZo",
  "key14": "4QgcRYM8SsSGNukZr8nNWLdR15txkNiJZpymEMKBoL7y1rZ4GL7spELVFhXVh4WjnEAbxVozek7VZRbHTT4JCFmf",
  "key15": "44PHQ7QkfnoRMJLpKsTN4tsENthKQi82BotNgNS8Gr3DAKEf9jxV56HyXyVh5GNduKoMp1qD1WxnpcohBqdKRtM3",
  "key16": "5huRRviqZKifH7qedgdHoeeCpQgzqCynEPkp4sGSUm9TBL7AHw4xJePnHXtdoiEP6skt8Deoy6R1HUjf9etzeXTt",
  "key17": "SjTB7raNgRsy2WZ249p9G5uQrBxU8EnMeUFLHabNGuCbK8YnuCTr36yioXzuHq51aW2dUmK238Z1CiFCum2CkeN",
  "key18": "DiTdnRT396RfTqUjumZVAT8715jLfSGUjjn5dH1FvaJ1Az9wDyeNKBrfMYjDnbLHtc26UaVTfSB85qL64L8oYXA",
  "key19": "3bTXmCttE85yZvSTvYtn9YuHZchMCtRHRi9KYbDnJx638bY4ao2sCDubvJCgEyerf52Ca7FdHHh4YFqAEqxejwpG",
  "key20": "32aZ91BhZsfhBJpBG1mAcVmhwi3HGAmQKCh1tpGm9NTorawtaJ9ne79Yjxohgm4T3NvGR6PJZmA5qnYeAP8LmYie",
  "key21": "3JCoitQg9bk7CrQQToRBqy942xEQydbxEWCmPTigJ98cF8DKYwvzB43JmoVjzK91JfiFsto2J2M2HHMrZoKtbx3D",
  "key22": "5gNysM1A6VipEbTteUhmKrj635xqzZKGLrMUm7c3RZf4Q5P3HuLaD95qZHFgTYAA9obbsLwPai8ZFmbiYo5zTT3u",
  "key23": "2aatYXKYxs3zSEvhzecMBdxgjm4UNXRiR88CHFDcDAWTKhvy2LePtTMxpz5Aqq5BAMc9QzFh4C1AcsQQMhqw46zF",
  "key24": "DoGrpw3jUhcWbAHaJESfwmuDgWKRBqjUBYHu8gf9pDzJXRmKBR7vgsL6sEJM5oCpEhSZwJGyf8xosLg1zVWVcAK",
  "key25": "4GZgLjJtpc9VVBC23oa5Sodbdj4zBRPvke8jn1Bscwue2peUSftu85Hg5ZWJX4fJdZjZVHSZr1de77ggnZrier7C",
  "key26": "4jApWYJHfjJeLoyeSQBugNNgYRccwk9cLQdHdahGkqfFqyJ2unrWbNbpBZyCJc7c4ns1ooBFGbGwziGBBXfnSqQQ",
  "key27": "3vpveFAYVCX1JMMdyouxcvAuC44K9MtT4cMZv1wzQ596uTSQGvpuXdAPV7dfhBfRLqZHQiGarB59Xqs6WginXhci",
  "key28": "3rU39eEEtBr9Zzk8DCd5hxdyBoVkhZZAJb1h7Ux8kTjNC9373p8KNg3rcrtS5iDCNEE3YwMnKiEAfaunditCpdvV",
  "key29": "NYyP2rqRtFVyAupUoREGk1Rq6WTJ3mH2UTyJw3Pncx49NgfaHZQcWazpDLmHNLUnUEwNDa2Vko4mZbPn43o6e2p",
  "key30": "2VmDikUYmwkQdWytsTLUreTywBXomp5MbKQRU2iaF19C2T7q9R2JQbNpvJCgyvqrrHhQn9qTz54TwHTU2JL1AgzT",
  "key31": "2qVm7SqtnYzXxvBFz8riejgDZdfXDE8oTT7tjrZNhyqHb1LCaqkDDz52t9KMjaQWYsRZgkL9CrTn4Snj3kaK27ck",
  "key32": "vEvkKy8VGHrGDBEx3uJAwMmE3L6zZ69wFXQZWNVwjF7gW6TUZETVSfJVx7JkZ7RGsJyc35vTpPUinCqbspxxYkf",
  "key33": "3r2nXUcq5DBhUKVotyXw7ZFH2cEDdqsDER39tidfofpupK5ByfCh5Q9BHD1LziqszonhNxqe4SRA6DqXGCPEbZvP",
  "key34": "54MVPsiGwddgC7mfmNW3LuTLKFsbdLSN5WKB7teiqWo85gba9zTeBHrPS2ZmzShisNAwZ3XAc7MZcWm3QGC1Uy6E",
  "key35": "XcMAsQtGNFCEbuhfEB2hMU4GF44c6bXEMC32h7Md22qkfdjh4vQhgJkYcfYZxx2eDKe89uogreDE7g25VCo9WK6",
  "key36": "367reYAwjkaLnwkdC6Yg8iRd59G3MTZzA1TtymSRuBW6oXRYKfBd7ASKqFarahJyRz6mU2GEAcPE96QK8QocEJPz",
  "key37": "2MJMoTkGndZSa7yBDaZ9AXP5dh5J6pscveum1bANLGKyERpjdJhbBX2NLdxCewYFvq8CXBZzcPJng5LfinRKLRFs"
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
