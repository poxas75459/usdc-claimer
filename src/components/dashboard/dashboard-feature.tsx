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
    "3GvwWnhjTfchU8y73LFsfAkGeNBpJPHzL6QrLDZibFwzijSz5GZc6ACig5FCAfQ9bzsRFg4qVH3f3ftfWzShcw2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AE6NhR5RDo8MPPHHLtTntVxd74SoAQcXXpZsDo8QvMwWuZVfpgZQzF2Q9UUaB2BmRp8ySaKaCommpSgpfvN49s",
  "key1": "5EhJeVR2wuFJ8bqcuc7aCwZF28GF4SVE1R6kVW8qh3gnXabvQ8s1C6Q1VapWQPthUZx1zXXDCtN7VUxrvMsmcRyA",
  "key2": "5TxrzAewn2CHEs6fcnjywETStVeJo71CbKVHiXnFgbdwBM8KPjaekTQowTcVvPy638D6ZyTSKW7p4pQVRKxfPGNX",
  "key3": "64TCJyU1EDy8tDvgRaDxwSJ99TW9UzhVda5YSH8Xntc6eUcFsi799ShZRWJZFsYdS85gMus3saeC4n8A4CJRMFjb",
  "key4": "5UrWYJL8HbdHb72TJiMg9Eg83EzpvqQar4fybdo3hDA34nfvbWAEFkzcs1KfhUPB5dzAt6v5KVVhAWP68cXrMZmK",
  "key5": "3xDG9hB2h7GoetN6oMD8XcTgxuE6ZrUosrqjNUK9bYW7sgu8tUQEcDdGgGikDhJ1sUdGGUse2spB9YbrPsMk3vTA",
  "key6": "3uS6TvXAdVpJwuw5qXUo3Qtdsq7YLacRkU7oc1Jaow4wvbdJMD3PmWVD1Yg5B9NcpKwtUJTBK2V43aTWCRkmDjVt",
  "key7": "2LqKaB6qckjH1L12Cqt5esNR7kuyvvf98M6iXHgRmTBasSvYzovzUJNbqUAi7RC294dfJwQHdhJH7DSPqtMncwBN",
  "key8": "49bMiDbRFrq1R3MFuL8Bu5CvXDHhXy2BxtRtskQXGwtj8VntyA9dYirtQcQP1C4ss7WSCmA7cHxfKDX1QNV5y5H8",
  "key9": "5SmzFZYvyX3tD1V7h6woPW7ANdym5Ar7kHq1PTho65GeNAxBBZytfrM3RyeZ65JSJmU3EdtkC7F3xXFJNpWPE8S6",
  "key10": "3i2b4EJk5XEuPnXKaEezNb5oKL6jxoKJDSbPL74NwqgQyCxZJgfAbmxuzWDRxgEGChQyVKn7NaEst3TnWazS5wGf",
  "key11": "RMTZYvMJrJXmpcFmTEyFYCAjyfVWdwYKJfB1Hjxzcf6mb1C5AeZfmXdTbGjZZnewzBfCA5Scv4RJ8XccSAVZgrm",
  "key12": "3mjcDKt5YDxBnkVNuuKCG5xUjuNDjrP1AeN46oCfXifLA9cvSFhPaX9NFjDR11DQ9s28F4gxNTEGV7ryr974EVki",
  "key13": "4HwfXtfH668bm2rqmsFUwQiHLEeSGyMCHYAf2tWvuHMYpHhwEAvXW1AMW9Fy7eQoaeadEGiLnTi84LYiAHo5qdR9",
  "key14": "3ZQhqCw3DjUePf5p4pv85GwBZEVaNcS483hyp1APkYSkSEjBje2oUajSHypqpSfNdAS4maHXCz4JVGnDQd3Kf3JM",
  "key15": "5TLPAKPzfz2VAmaYgszZ3xQkQTSqYL4BNVE45VVs9yFyGUd1CRqSQVgAnWx9yXgjdBjasZvGz7ksiNMfWGZT1qoM",
  "key16": "2UGXpsPbV21HCxz86xyWQcZhw61GJAGA2oULRaLSh1SRsUq9NuFoyouoKJLipQBqu9suhrsLDB7mjmKFiAKutKD5",
  "key17": "5Ggfrm2g8nNpCWPNUoxw3oihrdJo26TPAM9MAxXWZSfvSidY8mrZmC21SQsbLUzhD1BPk1u3j4QuNbtRsKyZvypb",
  "key18": "5ipAX4i7SHZSiqTh2mHAexuPSaiXdkG3p7ydoAzaXwS8t33LffG5G38Bv2MLjg7u8r92yxEzf3EATtS7gEKYtPsW",
  "key19": "YX9aUhBPP3eTDZzNLYqfzDTpuCNgPX57NzvwoCvLVCD9unp3okQsLetBdcyvDmA7eKEZpAhFyj5zvoLU5tNUNtc",
  "key20": "4RAAnPa6JMzUqdriMa9gkv77GGkFNqsRbrp9SnBhrqiGHt381dDS5qaNCJ7ZquM4rNKN7q4KURVGUjrr28nVt3wt",
  "key21": "2ppXXQEXMEh641nU8WR43Yk6t6FHovzDTZS4aq6vQiMuh8puWA7ZCPFMHxjeuqCtaG1LmKXzTEziembsMLYyAxQq",
  "key22": "KAA5xD33mB9125SpWbWGqwGJ1AgjL7HkKb2f42D8YH5uAN3AjAMzT1dTbpNfXALQV2vue5G5CpaQDkcucH5qqnP",
  "key23": "3YmHK4XhBWUy4ypAJkWQJmrePLy4JU2TrTVvYJk2TApeHJPnbpTH7HnHiDVgbrcDaCNn6amdFiVzdXb3vbYcS2aU",
  "key24": "45jraggyUdw1JmCREVUt2aRCEMqKdYL17ffCKmYFoM7js4ngY3K7GmTDyxzQwUW8qqW9eer1AgAoJbGLTqAyApUh",
  "key25": "4UkDSFy11EB9E8TvcWvj6cuEdgxgDUy4VjCr7jADUwsF5EbzccwUy42923Zjfv26H4q6mJtSsKBu3EdaVyzZdosU",
  "key26": "m4V8TqKvkaPViBNno8WtLREsPMHkxyDM9X66iVtjWoEAws7X112bmLzmABt4t2sfr6DfU3EvvBZi72myqLYp4su",
  "key27": "VQozueDUFyjVfctqcQSHgSRwcNvuKSMh3xzs6z34ov6EDVTdBkXfFTGA3anmiUwopW4igCakFdiGDo6xqnZppcu",
  "key28": "5bjPu83CEgqW7tS5fbkCxmJX5TYAapqoRbHhCW9saBfHFkXioMTpAMNofdNh5LQuPFb21GuB2XvcbW9T5CaXJR4Y",
  "key29": "5P5wNnB1acxnWxQB6F7RCWsLcUyUsT3dvEP2MM2ujr8dMhpYycZpPAsDNpQztoF5r5Z7w6jCcV5X2XZAZ4u8K3qV",
  "key30": "5Ats1rvbajmegNnCnViaVJdPNCzJzLers7ZBd6RWCARaDj6PKFcb1xUSvCaipKe7LjWTHZDbXbCnkokG3EP3VZeh",
  "key31": "tahoTCCyaZyachBbJwBu6t5XqKS6rGemWxWr2zy8gR4HgVKqkaVT362A2642Vb5qdzmsT4JvYHKB9m6FHDArcae",
  "key32": "1S15XXRHCqv3Sh9r15BTEPoyxYnwaCbywYKd6mPLXhpB268ZXyrfeXkwW4syK4enQKPnxB8vxwzNfYgghtn6k7U",
  "key33": "5mcznVY3cRWRxWjRx7HbaWDNiSH3sjamBAJEyeZPctT3Sn8eDArNvrQcbSRU4jXt1aZCNxvTfSLEabNgbg8h9HzL",
  "key34": "3NNHgVi64zkKTHzQ4gwkB2S2fRnpvai3ScKc5UJdUbEozeBzd4TW5YCCbrys6rSaDnc92nb2ckvpWgdQMFcPoXAD",
  "key35": "2XBeK3Wk43DdVMdxkqKw4zQGsLG2Yvw5QpEj6VGqkvbirb7d6DGkmjkvbpR4CYkpF5RFr1xMk1bzSNFgDEeTt4Bp",
  "key36": "46txWyM2VKy2fWXGi5PkMLPUu1498KRgTvuQ7qj7rxcPrsugRABjQXfav6ZP8HV5SA8X9Pz2ZDkCVX2YfTV1Bxuz",
  "key37": "4scV9oi9nETtvquWRQYmYFkq9Gwrz7YhDTmSbLvtQLwpidfP44tLpSGmbPGKahrAWxbKwXTZXAKCCiiZKgvGMthZ",
  "key38": "x3YuY3CNx8H5spGAVmAYDsW6xYx3X5GQieH6vRUuaf86zq9ghaSUqJfaytT1n6ezk4sq9VWqjG6nrtid7sAobvE",
  "key39": "5t4PxV9QZk15nBCeKSgU6pvxPNWB8E9tT1qwpeWGAWkfuJPZE98q75QUPvnms8YEeHUeG8XCr9qMjhRcfkjiM6iT",
  "key40": "3BgcF4gT867hZkRr5FEfn9Z7DXX2ERSEFHVFgPbVg9xhRKRrzpTPVthbRTzvXebocFXKJDEt3R4zxumJsXkX7rec",
  "key41": "4KmMEF8VnsrYiVBQPUBcxSKTwkAKVZyDbVUzww6LtxqEg7JGYXqftMnmnZ1weeHUzcLuhnv8ucu5xhBExzXVvjXC",
  "key42": "5v2pkFswn52Rp3gYHoRuCvaEwD1wjuDkswyvDKC6VN5wwiUEKuAaAYyWEBg5WyPZwpAEdj5XPsy79aMZfRar4Lej"
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
