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
    "3Vbk7ZUQdPnBfKkQTYJKc1P2u6usxMcUQs8K2aYR7SzSjFMQNaBWY8GG7kFFYVhDzugeRaiKuU9zENBjYvVCgz82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43XXK6qVZF5qMovTsnvm3SuMRRb1r2iEQRcXgxDLEaqhcgJk1J6NATzr735DCcugfe9bJnA7St1QtMbfMKq5vmTS",
  "key1": "2uD3pYSnsgBmx8tokx8ZXcBTvLPFnSxfVqnepoCkJfe63sn8cNj3qhHqVc1tQSYFoUhe6knvtsMTSkNNTDK5F8u",
  "key2": "5591rLxEA2orFt7iWWRJRvatczK7FU7dG18iHLKc6oLurqnq3Cgct1BBK2YNU6MUnCoNRz6Whq7X43UmNHEjm8hc",
  "key3": "4RrSYKpexRRqv7QB9jFd6nS6GGrQnWZ8rGpWSdhGYPubQmVQHg1bUk6e2R3tA1MG5azsCAt7VnTwNh1ZtoWUtSSv",
  "key4": "23AyN2QxewWrDsph9LwuXnKexb6E5qBiAGd331cZGUX33cSHBxKKwaauaHcRwKuQwiGtZaPxoNphyK43est1y6Ub",
  "key5": "3e6i7CrVzCXDpVmUdmE2ma7tZb6kda6EdALUJdtr72psGc42Mej2cUtA4h7R91QkkQ2gHZXGywLZvC4PSv2VQTPV",
  "key6": "4KwVqjLgmeVt2nvcauQ9u7X1k6ku6EBtEsN9kmZGKBKubAuAmRJx9JoMxqEop1VCtcVxwZzHkh4EGNWwCFsp7P8a",
  "key7": "2hkxwiNzkwmvXyGA8jtkeEnaQoWxLxLyQYQrWvuAr9cFx4yrYTrykFudSLZfsk9oHB4gTRbn1YHJpmsiHYf6nBYi",
  "key8": "29GgFqu1T7qTPDjyEB2iDydYGCZr91e4Z4sQJ1fC4rYHfdGyRg2TqtBSLC6DGMr4VdsYGAfdGDengnHKEEbTWTdB",
  "key9": "3JdzbhPzPgTvwzx9SrBsvoMATrwkziLwFwsD5HZwEYsxSqNxciUAYjXLSe2UGyEqswjALRb2mfkv3K5DQGWz3vCd",
  "key10": "4zVhBRwNNyYZqcNLqUTrJD1HUWMoufW2ZnW73QaRX2CjvHwuLkk47eSRgiyzDuuceiLGFntyC7fAwSVtTxPQg3gS",
  "key11": "7Z1gqwt9umRT4qRev34gUmFLT5AGaTvRQjSrjrt8MhcrMEzoDgdpQQJtEwbYBcmSHKxjZe5b4xGG8jZ45SsH5vN",
  "key12": "65Q4Eh6NonQWPPBqK3fLCA8QuetkxB5H4zH1yjubAX5dJGFk4vBGksW1PsdZdkh1QnBNng2EqK8qbKLiSo8ZEqnf",
  "key13": "5uYP9wpS1qdKue9vGirRQTMCgs4sffwQWGxwBy5ZNG7cizFunxn4urLyXeraqk3xCsEPe8zVLn9cjQMVHbYGsuyC",
  "key14": "3Tj5Mnwh7vED1JEWX1hoWDzxpaZcJGQNPq1KFyqzEuMvR7xxc8SKB3FBVp91xR4fiqqJQAmNp2a9VbJMhkGzhm8j",
  "key15": "5RFZx5ACoqUwzdPiXoUXU84gCzMESmgFgwPibwFXLr5AQXfCTUcxoVoxNs1VMUM7L1rxCj9e4DzrViWCN3j9CcrH",
  "key16": "29ZzQE8wr3Me2RQWPuwjjSfDJFKZ9BXhau6b8b56FQvQwsqUFkwPbQWjraG1kSzhQNG9iCNco9GNHgtmFmYtrAfi",
  "key17": "49FHXtRXMPPzRjFK7HFxED5oTyG1nAuZ45rXBWiUHcAS8YRdv8SiR9B9zGTiKNoeu51ZKRn2k2R99CyFv9QttM1K",
  "key18": "3N98dkpb8R4Svt5nJxgx1r6yrBkUY4pbGEbNK96hRGRjJSG8qv8g27Te48k9bx1tfG41RkSRizfJisNK4dS5D74j",
  "key19": "Jd1dAqW5r9duF1NRCuUBLg9t1qtqXtdTt46E2uzwXw8qwrdjLUj9JcoegKAiVjEAw9e2Moapxc66yze2G5ioR9g",
  "key20": "4WTEv7Rq6UnWYwh795fhMGqsAfvLDKDNAbuGuACuUkdDjBokknmy1gXG7TFpzJNF7FkQQAFYXvkFW66kS7ES2Lf2",
  "key21": "2UprnRqEGVnmKTJus5t2ZeaKhNLpd9z7Mw58t2HT2LiJEy7RGqHyiewoKFQsap87J3ZWVycsAedFLVxKyrfXXUaS",
  "key22": "5CW1Piv1Bkton8cPU9cr5CejmUapzPsYUhe5ioKoYETt5MZ9VHDT9KFETti5uBrLH8SthvvrtDjVXMsMeJcxVZqn",
  "key23": "4CoSZrkGgUbpS1QwTZZcoABLpohBEKg9oHtAkWcUGTC1a4oGgVcMjwXmCMyBtqoX8SsqfgzsRw1otWAcrkkYBvHU",
  "key24": "4GL3W4nqKTz7TnUgkuW5br2KoKjiKyKqVQcc25aiUuUwciujkeDZh97xwfd4QADhjZSufU5AsrX9QdpGoyyZgzC5",
  "key25": "3qQ9terhnxsygEL9KQdeY8Ghw7zT4Sj3gX5g4HgZVUmbUoSLLrDWvD6jPfxHvWMAVSi3mUSLLbjs954Xr39kXcM2",
  "key26": "5YNz1DF2jYSrjkJE3UZrAp5FjmUNEhSvEDRfELrUgBk6WyKSRs5AYANTxZhEgidJzd2zfuahZqbWzjs5UhRxkLKY",
  "key27": "jLDtfvjRr9fBM9eFYK7XUWQwpaqxoEDKHUzKe5cDzsroLZ6iGXi99gtikTuuwqgis5JeQ7KVxaJjtAWB9YFgoNK",
  "key28": "4FdaXGWZx8p6HJ53fX7natt1Ysac5jR1VR5Nm4bKE4tz8u9X7mj7oWrGq6yq3q2ZTrvtcJsFx9ERrBiaYusbvZHe",
  "key29": "rPWBM3ikA5EVqByNeJiQh5gvfYmTETdTHMKAZtUnhiAJkKWj3Q6A55NH42AN9Jtm4axDppM6xPeXSeJYuMBkRCo",
  "key30": "w1Aih7TYN1vYn4nMCTR1ZKLnef3fiBZvt79K8FaEzrmZHFHvM5qycUQTpckNktoW2EFMopAzs1wGt2MhuSkgWJr",
  "key31": "4XDVTTBTkPYtV6hZcvaVQ4tNnzV8Ti8WpaqKcr43miq3tSXCdU4Mstx8A4zEgd6aDqZfWt14ydKD5cnZS9hvV7Ae",
  "key32": "3adESZoZHLfLY34UVDZiTrUKeqM5foEm3mNcLJ7f4s5tJctjNpcsr7G41853qGZkrgYofcQ5VFcFtMvaxJLjzXzT",
  "key33": "5KMc53kaegyTEA1QJ9wNRbB9iekzgVynXG4585rcQRwVybUFvm8ZnsL2e8sinDDbs3aXGB2mLfADgk9M3JKqirP9",
  "key34": "343Dsp6cgi9mZWd3HKKRmFCPiGnRUSqT9ndVTZqxMv5WvMyA5szsUjLoCu2Jatg3oYmusxtmtAmHeibtyEnCWMFQ"
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
