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
    "3vgUh4UtEMFpjRZdQLUAXEmpcHbzKkdGDgrVDeGDbMMUixbDc9CidyQarfHtMUfMgfzund7yyRGwUUtk7L6YWn7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ySkvzUWbnZbjhWUUorzbQLZ8f5ZfnnC6fU7GBPL8Mmfrq3Uf8X1dutPuVnmhM1nYUySeZSpseVV4FZNKby46Zc3",
  "key1": "269bCcpU8xf4hPWtb75245irz6Jp7JspFTuNmG8nVLN6359J3xiFBC7B2ZkJZEoSwcTYqeuGYsQrwDYAdoYEFxmL",
  "key2": "P8CAF4MCcUDgkF4KBHw4qST4pxrgTZogvy2PoRGJfYBW6hMKuFaZWJ67xd7atYcyp32LLizuzwxb8bqw8Ku3jkr",
  "key3": "3hTL6hdfHwTpFUPgpqGz3fjAXo5rXbyftorajKBnk8R3fkHgfbHohXQMsxdofE21buv4ZbYt1TAArmMUauRxCUQZ",
  "key4": "5Ng85m2iUTvnsXpLP72RzPw76N4hibnCSt3Mz4Wam2FmruGCaR4adGA3YG3gujubVAnupptgJqoVBAkp6UDPGX5B",
  "key5": "ek7xWME7zwr64makC79DZ7kKQsCiy2uvj1t2vNx4B5JrgBdq1iQQphFyKWZ9ofQGFx2VcGp6VMfDBDud5Lexr3Y",
  "key6": "59FtE6Rcem3nM6VDXpwwnA2psa8womwKZo9wMcQ1fJhk6moA1dsLiL7n5qggrxaAa9fYSCvPHNR1RwWT4iD4RjFG",
  "key7": "5v5FyftTPCLmdxppkwvAN6mmYRxqsqhRgaqwNZg6kAzEcsHTsnYG6VnLgfFnzvc4qRCFf1CqSyL1qh2mWkDbKHDP",
  "key8": "2yS2dSpAq6RxLRs6ATZBZqBXNLVFKbWZyqshaDRzaGXhQgSeeGHbWabi5LbqdpctuSrd9BSLDdbrXptdKwQH43xX",
  "key9": "4sEgNYnDpjaSHDhWfjQps6yKryfDMsmSkdFWdoAEx32JnWvBqiZBK8JmteT4r1fdxqaaWPaQd3b6kiT6wMkLFj3v",
  "key10": "4yceGkBP2CuaHpzQ5Z5iMAWZdEgFbXdcee3sC82bh3TzryaSDt3j8NZ3KHYRc6K3jsRNmvKZffbtupQaF5SwauNu",
  "key11": "26bAYts8y4rF82aNoH6VFjGGeJmWPyNPcQGW6NYDXi1hbT6TXRawVZKRYg5aHDChben3TeknQMZcYkLt3QUb3oQu",
  "key12": "2Gk44Y4ksPLm3dKKSHVeprgCjEaLSceRRtPbxGpmrV8o8j3VhYroNutC7GGtFQuv6LigeAGgAJ8p3Fy6ovfZXQyC",
  "key13": "3WLQuoxXz2HCHze3iP6Mh8f46ChFj1ryzzLHDzdnUQQnhWJot2uWgszq5EwU9uVaSEkv825KP8qFy6ceqYAZA2TP",
  "key14": "3PeskcVwypDnFowYt1TQ3tHuZ3uSstxS6yvHQ56ik1rYA5CCJbQzGu1bJSjmaNZxBBHu3pHfb7guaDNbfELWaYFf",
  "key15": "nWyrqk9bKFT5QqraWBcCe6jHUzh9nHqwRqyBFfqbe3awxV9XqFBkJeX2UZC7tEhLv6R9rRcJ1JSFrQwCDtpaSyJ",
  "key16": "3wqAhS6Qivx5rvdDxUxRz4EoCDiR58f5AAPn4yWhVptNLp16aPcEsQFHgvqNF5d6iPcUzovpUWSrvYdsLsN2qhz2",
  "key17": "4aZgGCvTMF5md1fcdJa3i67ca8HWufipmuwytL4bRabE5ycJVT14DSQ8dQqUpArcdawt2UDgDknE3CF3WZ1BY3Qo",
  "key18": "jHewU4DTcS9kARKAMgCWMqFxmA32nac6xDvxnx1yTvYyKJvBscjxKMfGxPxeoZws9MYz13nxZGZBKizgvyPMdAk",
  "key19": "2tnb8xY96vRfjZiV6jUcywCEQNAdAu9M1dQKmixPqQiM5mJApDWmZjpaFGoUyM4DPDNfcjoJcn1YD2VxjgeR1qqf",
  "key20": "92xRffRfuuPDzFjSMpQrzY9MvWc8ghSY9haki7xC1tr6bL6tJkQmaKWW4rh8qaHDfHS4iq4cdxALYy14yt5PrYu",
  "key21": "3kBASxPboy4Hna9hbSzPBimKxE48TiaTPeADeNBusd7PQ1rcQynkvC6GL77hsC2sYDCYS8e5rEoxAf2G1hrbdYyr",
  "key22": "2Ztdad9bDcb1AczjMtXRc3DkhASANuZR6oRRDJiAfvPnf7E21Hj11wgERfNFUUDikhE5SrAEeTmke9EGGgDajBNx",
  "key23": "63CfRkYfyAXrrCEjcFzfv29fvv4c1MsxpxyGSLQrk2Nctd9GFvUKCVXrsdguMKfkKqK1G9tioG2hV6bL14XZAyJ6",
  "key24": "632z7eGCczL6Z1F4z5SCGuHSWYb4AVxwdr4cFzAWtpNNxWxaku5mp1wVvb3qNa9bQLZriJ5AEmoj63u9qsoTJsyS",
  "key25": "2vp6C4WkNbTMzTsF5WdkzJZSEeRrE9eJRifydtKPuMKZEeGzKAQofenA84mbJx4ZXpJFLsmhsNsKXtTmWNncYY6P",
  "key26": "5cX7XF15LhmvymGKKxksk1Ev62DteKGJweaLWbravio2iiEGwGN6PXmiYhej3wgHwBX6LY1HSwqmg2ympZP5eXpU",
  "key27": "XqmdZguHCpTB97SfegphkkDmKyrzG1M8kvmkFu8swXnCQULhR9wrY7sncgyJxBr8nrg8ffi7dqcize3yja7g1cT",
  "key28": "CMjaUuqXi7Jbx66cPF74QogXN4cw5rGnxAJ2itEV9ScyN1KW9QRjwkJdzTWWr4nH5HqD7BLiuZQzhkegNq5exmh",
  "key29": "5zHW77ANJ6RwgGFMMBzWxKWUsCwv3Rjg9T6rkXQXJ6BVvicWSUj4EZzDJZausHDdsPnax6M6H3AJsuQ9h61K6KoA",
  "key30": "vRVUai7D5hKbJeuV5uRXzUczdg49WosMqiJjtXdhEdC99SGhrSq5qz4SRh4FUXhW24QCjUKw7zKN7PZJ7hM3iRH"
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
