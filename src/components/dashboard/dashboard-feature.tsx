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
    "3t4dnzPnqCrVJrrMwjo1AUyXvop7KmAVcg5dkL48VP5DWJ6RC4YxxkKV4TEe18Av7GFJ7M1AyUiFkvyBFXvsXUbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pDs9D96iQstGTwgdi3r5Z6Zd6VSWuFieXawqRQpCbgeQN96Ta1hddZHgYGXg4xDdES9yGZRqXypQZYJoMFK71iH",
  "key1": "2zREvyg5hHCdt4UQHidkWrmoEmfPmAW8pUyj7UAwwXgpXgxgwdZimgi6ojSgxwq2VEyKFtnprYABXWWBsKsEJfkU",
  "key2": "65ZnPQUjQQETrGVggxugcuCobfe7KUZocboqtdCL3JjSdtd5JVhmNND4d1MbKFnuz6bQwmboUL2VitxejeDERgyP",
  "key3": "2wRNTjmE7bJPkBppzDqSqh1FNYL7pD4YCkE7t5rz7FGvbSq5TCBRnPR2F1BcTmniQYdwGzYakpuffSCTAyXuZiaj",
  "key4": "3iTQQF5cq6TqmMq5PSoben3DVwKjXtBWtov3VvuQtoCCK8hoFcW3FT8HWB6UqZ3GVcDTNheUA6Sfp3jqGCcYWVmM",
  "key5": "2AoaNazzC6MBNkt6KzuYU6oNkWB8FFVjkxZ1DLVgqcmz2vTkEsCW5u2Tzpo2m4o9P6P2R1xxe2KeapxtqgPi9QPd",
  "key6": "3MsZ3pwk2kKccDDPMXfGMrPS2WRRNWwJ9ALLnsJfE3hX431wpdudzpidkZLLtWNpZbB2WrhqeFnvScJBxase4jt7",
  "key7": "56QoBEuXkt3zCFZkWNbmHqHM7FGotT42nSGuFpdSe4Wshn1jkCPmGEUvvMWw8LqfHw9zHTS573McpRYcKp1ryV4v",
  "key8": "52hxALka2PMaDc8vYw73DnsoVurvQVkCRCTp831Ky4wkoJ6f4JtAFZGyrXL8HvWeERvAnbVnPuoQMJ9uduiP9kt",
  "key9": "qno5axzrUYH4uyr1BkA7iBiH7dC8KsgjtJsme6M6n2uep47R7eAe94ga1dyRSyQbJzw7nkudJyLisxBL9JharLE",
  "key10": "3vhtfW6i7qnjSAShxzyuxFmkNEtreAX4K1i5sz9AM7vxH5e4jKCiDXhPXivLEu6doX5RzCWfaqiqkrBRpQtrWJK7",
  "key11": "XeePiNJ1seC4awG9vfNskvmSK6fhmBQi4EnusNJkYFZdJtev2tqooiVLv9TLd1DfxDciQfaLjaMZpKARnPaaaG8",
  "key12": "5SSCBTAb8dqKxtVLWaKzHgx2p5UfGwRwE2HCxVQnJk8jVKTEa5VdWgZWz2AWG6o4MxyvaX1ufdiVCFo9u96VULLy",
  "key13": "5Psg4EbVNJXE1ZYf4E8B1Us2wgoeNd8zdci9oeG5Q9ZyuAGK8GwaqVR4o8GR5JozqE6M5TG62zTGQpA6D2zhrK2e",
  "key14": "3cBK9MmRPZdY46bKrP6caeLbEebGakaFyYzxvTrg2VTp5BVaNQobE69d98fU95RfCwDyhZ5erwPnwcKUjPPByUAF",
  "key15": "3229BZnQSEh9N9bbtM4ZdYq3AWUdqBeWq5jWmR14oEeUtZsYLrAp2QoXVgA7pSZbnx7NZwBLnQH6b2g4ggEsm7oo",
  "key16": "38FXUaFo1WpsB9meS87xXhyiiSjMDhBndC2ervBUzN3XztHgTsgRYtVUtnLNXhS2RGQG9upmAwhuSMRUvnTz3tHn",
  "key17": "54zghnMZBJMW871zYZrTTqEs63YfVjU9HS5wnpszWufPYwmaEjUFTDpLMzCZJUTYocJxLiNLNRt3GSSxenpC49Ha",
  "key18": "5LQfJbUujU8MiszKXc4aNtPi9NwvW3TiY2dck8X9nXxvRBUZKRzUuUyEE8eyVw24sKcRJFR5pKD6vHUhPARdonEN",
  "key19": "3gHD1tvq1tmPgDmmXGPs3SB5cw2Zv29YyNeooWzjUSZ2XTtp7JzsNFMfWhTGXE2bEtmZUsxSzGQjZG6mVQFxGwxq",
  "key20": "inroy25LY4WrYCc4z9D4Tk5EKEy9WzyWZ6A4JuNhEbaKiY6exD1CW3x813Bhme9rTceuXK6ycvoGazh2YiVhi6d",
  "key21": "2zneCZoAGPFrcPpWqtQ9PhTseomnMQGg4T6QqVCqEA2tdnevU5XxuM4a2uWN2p7veH2TrZpGbDyKAknjEi3Vwj2L",
  "key22": "3YSr3F39qWQvLKTGVg3a2z7qkQxAMJrD6RGdsuefSZSXAZdzon1dXEHYnxMbbU4nYpvxfNKrCrDgz1g7ShHxo1Dn",
  "key23": "3ZxHSyzxfwaLgSzc3vFpJ6w4cQuTKQqysFzAuo8qNoiXRLzJ3PR26LNs8xYbtEihyafH3UEuyfyJuCajucMpEs2",
  "key24": "5ARt7ixftpCByFhacGqHcqcii8rYSABbDLswkZ1v7PdtBzBkDuw7ZpahU4VKaKS34wetTkm4kqVQwvrLurdFCKPf",
  "key25": "3YEaszCrqZMN2byvQTa5UpmvhbmmAqmGpcp5J9QwaWu4quxV9axCtSY8RWfUnPw1isQxEPJXb7uCtwLY3jKAy34E",
  "key26": "3HXFGuVAwsAXeWVfYsVSFTX4oMv6MNHuzcLo993vT5fCXRvPT6A7vA8x4WWHuoF9J6BR8zYrJ5cCfkBeNrHqLhAH",
  "key27": "2fjHvAYwxwZXzFTgJXqnA874DxCRuDxC53eJbudvrMKLbgUP8yjBvL8uXQXop7qtZZb1udLnvgVgkeBX9bxSUtcX",
  "key28": "3HDnjBVkYBpmKiHFWTU1nxuU1gMx8w8D7sA17mG2C8hzjD5R2VvBdqTuueVp5T16JVKzNThB7R8NEP3WWe7MMYCT",
  "key29": "4UetLtr4N7tpCf94PdN5CiRSE62PmvMfHG3H2oGspPzZP1nkA3m4BEUonnMTkHDp3XJqHsFpp3DL6XNfmo1T9yTJ",
  "key30": "5gWweNeNCvD6SaMY4ziehewvgrJHip2JBaxLxjfZp8LyHnVMF1hNmuuhUcSpb8fP3S8V8EhAcnT5twa8zkPjM12Q"
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
