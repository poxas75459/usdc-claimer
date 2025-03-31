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
    "24Kygub7DGZG5sJmKeA3N5GyGnBAY93ohQncGMqAKcuWZAxxjdd2M2qDJHCMdw5H3Dnwh6yQZjgxfndhBxzT7EuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X1cJYbi4FY1VQzMVBHLWJxqJ6mDxMDpi72dC9X45THPCSbzJiH5FiDwiTjVRnQrd26JvbeZDw7xQ57NXWRy4AFT",
  "key1": "3BSFFSi6odtjEvcSzPgauUfxibSoionD773PAnjh2m8Q9Atk9mcy3MBsuUkHuHn7kfxvxaJu54ic71jCqUX71tsw",
  "key2": "5ozoDgHDAMAYmkawxk69JRq7xjKtcLeX3UvGGNhQN6tc3es3eNC8QT9MYd7G6LxaXuYze9gz13JCrdFQsZawi9fV",
  "key3": "5Vdetku1vwrvp587iTnSsCGvruyPoxh4MAvbbeLNxnXHXYgT4pCNGJYdPjvg6cy4Z2KhSZjdVfG8BVnEdfGsstwk",
  "key4": "28KGYnAkXU3GDK2E2qHFPsVp9HXQWmJi2CNVJsBYP2Wc75Aq4qYPe3XEZUyUNqxP75TQ7cmAgH2jFetVQE7rpQUK",
  "key5": "5XWHtsqD3DwX9tEjzE7j2wJjvAUCCai6A5JGyjpaVUoKGFmBWBoxGCFhyaoQrbgMDXGUvcL7bJHrNavvH6463ib9",
  "key6": "51s3ttSQQ11KrJ1KCGZquXehN33sq4q5XXaZ8TU9UJG3DF5BAEJeQeWFA6Bk6zuQht2R1j1SQQkaNLhdUAVEnGk6",
  "key7": "3SRTH74Qjmq2G339LdyPWaPsDogUBrmUXCmtm9qpWSwSVi5FBVNr711AYAWz5dwMuYna4qisjZjGrmhuJPdMXDsk",
  "key8": "61x2prvx4MwdW7ouTupYbUCBkcQYWBJvUCJqJKuEv42B7RPKwJ44Qdfj5xh5S2aw6nEkgM6AovgVF9rAczF1X58o",
  "key9": "zsnzvnfJ3LMpfP6E4SnnjBo7Rmv3S1fnYX8yeopyiHs1aFQEEQGNJq3QoDjG3AHxvSvit5yh1252jLin3SXjYX3",
  "key10": "2NZe4HbNz1UwfMx3tz86AHgQwVAsaKEBbmXsMLftjBQBuzzZ12WeetbWrq6aJvTyBQ7G9nz3Kuk3ZL3Lt1BjA87a",
  "key11": "66Nim3w74jzdWyHdcLHsUwbD5uxb8GR4KmDuCuyAWMzJpqDzKukae82bM6rVhUXqZiCqBX62ZGRw281cNpFS1BcQ",
  "key12": "cbKvqVqonPJoZwRrxkBNpqVvfSa2dPrjndPABEknuv9uuxwYwa6zA8XwN3AEgYop1kVCvHF6gpucECdqRjvywoZ",
  "key13": "9tAQmEDtE9T5HNXs234thxynqfYcwLDJbfbWJyjawgtbYdvfjACYsfsXTJZe89jjvBrR2GjxnSabKVyDDP4F5H9",
  "key14": "4t9nNg9j2zBdCt9sdbVJBYqSY5gWGTJP89i51n9a68M4bKMahhX7tQbC94MLWfC29ecpHbPJMgPwR3S2F6GdpVN3",
  "key15": "5GSsBtB6C3H6EW8pXNRdcFN5XWwJiyv9MLoXBp1e6e7Qx4rvMS2TYK2KzmynKEWcJUqGjsbUFGZ569ugYEWSPCKQ",
  "key16": "2LK1QQSzqBpMvZBX9QQTZ1Zc1RiLttdQnK9rzkBp5SH2ViSHqc9w8LsVutK4BfhsS76VxCrYGZLKrM3xNr89ioaw",
  "key17": "4xZoXoJwEC5fGpSAG5hamakwqxWjDGEPSHbP77ALpDTFWygu4Cad9zDK9fNLemVKACxXaTSYuEMUiskPGVrJVn1v",
  "key18": "2hj2LKxdDLCr966TqMqVvfaQdUve6cZRJntBoq9Fz5xSnFeSFD1gheWXZq11oHq2VFegQnCaMs2BhpEDMjgKSZ5t",
  "key19": "3TmLqXhSRTnkzVqVfE2PYvNQ9sYrYjZA4BFPRCTHJWpiCxLy2GhkbsddqS5B4bePPLwmV5Q93WPCBZR2HtwY5dgH",
  "key20": "57jgtgnKievMrdtH4atbGwK62fmt9YqoRrXHrzqGHD3xMma7hvDhFMjmixnhsvKghLadV6zsZbJGbcpLqP797it4",
  "key21": "589ay7vSZvyCGpKt4hqsgycGLq1c7Sgd5MxzZfUtshgJjMCdB6AKYAArM2MRdujVFU2w5NrmaGZUC1avVYao8Jsc",
  "key22": "2TUfDjvjy1YfLLf3c6X59Wkc7BdB9dtPNMCttsdmMCBiC2z6NkM6j2918Uj44JnqrtRVLqv2szQXyZsurbHfpud9",
  "key23": "4UP7D2T3RqtsFRmo1W5yMXk58Pk2ipzNrmBdFC7VN1dEpAa1Qv7D7WfaYvpFmbTDy5J48Zqm6XB8DP4jRuGe5vZL",
  "key24": "3inef7dQoN6J6r1oEG5DKeWfEeFuRibDDbuAtVvempQiQESJdwwqYHaVyeHyLYpM8bh9J8P2RTxWGuLGDFrWYtxD",
  "key25": "4ergmAcai55ruFLc7ixkuCARTBVwFz5i8FWi9AocGtn3KAd3EtAZvj2AniwQH2U8E8JB17rt3w8BQ4PGAoFrquK7",
  "key26": "2PfZzLjU755dSjwYLH3nRwAtVXuiUEmCoAtosrR2tNQt2zy4RYT3p999HbmVKfUJk6zudvSuR3p3duSauUPepgwz",
  "key27": "3YWKtsdHh9xKw2oBCwKzow18uLJcbzfpWPhNyP9zVTVwGF4F5n45kTrvEMxyqn9GE3VwHyLQ4awA3LL91RAWidf2",
  "key28": "3EVfkUBqJeAzRT6yGUmy2ZHHDBLn6xPKz5dW6icwF9jfN3eAtQHb92VeekrvqvFUx6PRQsPPCryuw1ZAJ6wjyw78",
  "key29": "26eQbMARznvkNbU4C3F3m6M1FKxVwGBZn4ARG27BBcW1ZidRStsCS7peg38R3JFmmjAT8AYzgHMHm7MrkapYZ9rA",
  "key30": "56cEi6yvdnmvTVSXf8Hu9BjVE98xftLcmKRskpKGwCt7zMHufQeGv2AYWRC8NCcZ7kyuNFnQFN38uuZXFrEbrgFD",
  "key31": "61vHzABU6bADbbMnQqGg93N5K9ZDP8DMWuEhDBUANTnBR4BqreT6iGzDdAHSDf6bPuc1magvxoba4mGUDQFGqX8n",
  "key32": "4jAzQVponVuk5cop1udXgDybvyZB7hcrLk6822KX9LNUgZbor95LgrwyXYEv8doKTr9etb5BAJcz4khWc8nj3i5T",
  "key33": "2n6Dc5EmV6bzEdYWteYg682TMsGao39hiPavuLgLfYVWQU6AwZ6n4sahG3NSsabeauh3a8JZqbeThnEJ38V8Rh1C"
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
