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
    "2YK6xXWm6YApB4du7EdBVFYvg6r1iMY16zczaU4g7FA3GrezzyK2FBkE6WSHUNRkk53TVguNYXQhPNsztP4TdR8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o1v9sLqg1ETQeYZPq9E1jebah8saD6AzvzqsWB7TVw3Vqb7W2Yod2at7e7GcqdKH5gjG9y65zWiJkinoWufopku",
  "key1": "4an7bpK7xNzRHhocujaz28Vay4L7jtCfXhkP7Bt31peHZHnNf67Zwpz2CXJmFGsDTbvorTMmNDRc5idQ5AzoTK6c",
  "key2": "5rny9zMr5T8Akt7p4y9K4gZU81ZUfYGzv9Jjo2jmMsVEhEipDKL6uoE4gmLKpFVYKCr4vfD6QLgDhRULbhPs1bas",
  "key3": "5LVmrudGH227E4nVFhM1kKamgAEFPNhd9riDU379oLMtDA3ahTLASQmRVo6F3LNs5nJNpARqoP5PBgxvrRzvtTMv",
  "key4": "4LRKzn87aTZdVTBnovtzJH8kw4S1Y7UdCVtFyTz4DRY2AFa6TV5GRZe9NiG8SN8Rc68PBziNfX6RscCYc2gUQao8",
  "key5": "3SeDCdq7XECNQZqxftVPXLEa4EHhCLX1WWdk54Utcgh7Yxmc6CvbPsBYEgvjWnfRNFcbZm9LUcPgMSAYwdkWVUXo",
  "key6": "4xnrYVaKGkcWhqq9tsVpzBsHXGnBKwAy35Gn8Vx4eGjMKkGzDf872kCG4PJFQJU4EyWW3uViDWidhr67jrigX6Gc",
  "key7": "4wo3tipjq2w2GkzqwsFsi53WicP8dymK8ebQJJRcRi7XKzx47hcEY6X5SJuCe6nE9AoCqjwffx1cW5wwRzJ6LdhQ",
  "key8": "3LSkfPB8x8rxUsJ6xHhJfx66FEQYk2kfmz1fzfGFcDztdvDeRC7Gwk3FCHjkdSaVEEHGF77YS19R4Wxs8483mNMm",
  "key9": "2gsRQpFo2eHjVz2vZsXiEd1NCWr1bKe7hPH59ykFFy33A8e8Bj8LYo2H21C2dDcgomhdLN3u8YyrzMVpBnmPcS74",
  "key10": "5ZprcpDeHwQvUGRyfzjFHmpMxyDwMCQbHB9dnzBnMkQXwsoN7qmAjXR3ZQUWt1PM4xkU8eeRyUHT2ZGNRJGK3mh8",
  "key11": "gTs4iMeXJsEcsdAV3Hhq29t5nVfMuGZoSXyFd7hqZragUXd7v3BMWvtcKeZq8oucyLZBWeuToKHBRkJ7G8zU2KY",
  "key12": "44TdoQX5GbKk6T8LBNqj4DqvmcffznXmMAny7T68visQ56Y7N2XkSSgemXiybeFAvHkz1jiaq4A46FY6qDY4XwaY",
  "key13": "58SptDmCNjygGXVBxPGcPfTHrA1ZDqxuL3kVk5GKnybZSv5mKxPEo3unhvy2byicGy1SXbY5xrhhQJ6jturBse7K",
  "key14": "5nAAgfuZgiDt4JRBD2cdyYVciZjU8sVWCqH93Sh6mAGc1akYnFtpyXtGGeFYENn1mRUE7aiSDYT6UErY9fXkuuQ5",
  "key15": "5JDFvyHVeavWhrndsN3QkWiMQY7nkhAbnRshRQjACSUWwgJZX4hiWa6cM7AvocJnsceD8JawLvWHnPNGDchFDUe",
  "key16": "5k98GY6uP4a7rrMKUs28TxRds7xZ2k4tyr12dANhAL9FsVvZyYzkk4MyWKdydQcEzsxWGXXG2cer5KtnPVvahsz9",
  "key17": "4zGEHW5s379T1TEDtKHBLkpNAmevndHCpyv55EeMDXKfvrhqpWvWzZnAfgb8EwTDGFMQVi2TM1jRL7eFXaa1uLRu",
  "key18": "J3MUge4AJW8fkyaHoNMc7gqnNMm3uj19cXkSCg8QymSr7fXcE34uiwCpw1ZNNG33hjw4Sg6MbP85cCH9366M8Wx",
  "key19": "2iJE2D7V4fQf1EDUTcChDN4GFd8fPLpBXvnTDG8figtKj7RMPLaPSxQXSzZhrHxQxaPq4hdDGBpsoZwq3mdWi6U3",
  "key20": "4GCdPXxxEXo83sX6rGptpHqHgTfpzwRZdWyH9YMRVwzGaRKRe8vvdufHqUg5DdNX33SfQGkQkokNokRR5yjBL8W8",
  "key21": "h5TYRSyRo34dZTcsj8LeZ4jP2WxLXmFzetJBEGM5sYGhARstFozTxmYnzqsLex58GFsoTovPorhJHyNnZVfKXBr",
  "key22": "45Xmk1MXCRoSP6BQ2JoFfU8S5BCQXVFnTgeNU2R5NiX5MWQTWJLP9hP2jnAAW3w6Con66m4TDJDHJsDW6PfzsuaV",
  "key23": "2T6ZRw4N4VopZ9xAQkeSZs8HAwn7YAU6hTiDeNaUyMLptMXwDg8wse7iXoPkEyDn68tWf13UkmqUyEyTibGHTTbX",
  "key24": "Btmr8urxtYViFJFg7EdS2tH2mEq2Yki19JmcnHZnqv43oa7stocEYDEBCA5D9QmY2og4DBWxGstVvjZCJdm1vqx",
  "key25": "4TG9iew4e4H1CeaTG1RYgpdmzJ9Q5fqmqgpJF1T2qMs2so2uNwvnWJzB86DAg55GzjGViZ3FhKEMpgrh7SKEygw5",
  "key26": "5ehGzD6kVxNW5xf9RRLtW7AJnWDe2FVMEeQX73yeWLob8jaKHjajBcwP9nMkt8umuE8QQs9NgrZZB3T7YA6pmDSd",
  "key27": "4bafcvn4TTEzEGTMYxmZHg1iUYWuDwH9yAHmbttnq6ULKknyrpZvNRArJQ42z6uwQBXbcGT1p4U49ULDhe2FmUEt",
  "key28": "4CrGQNwcbsyE8wcmFSVSfFd8kXHFTNKpxdFQ11ysVkcnHrgQ6goBQ7phwqF55hFbCVkgkyJ8WS2LeQJv7VVWbL6u",
  "key29": "545x2nT5mcfxTnd1tuCgLxTG2ZH5nKUuDWftexusNFeKruVFX78Fh6zAXPftvp5jgVUUy8sF9ToaSreuiFWp7q9U",
  "key30": "F1m3LjtPW5Zb86qgdMcj7iYVb8Jwr9GuK1ewmrsAtygLh5bNHpYmcwzCk49pQju12cQiQy5mnZBtaEmMi8nJgFH",
  "key31": "5Kc5yrX3vWD6dYwLwdQ6uzMa48PJgQSyD9sr3u4UVmxWevufqmobBTLsqjnRV7YVowEhgahpqqsY4YDrW42fS6Z1"
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
