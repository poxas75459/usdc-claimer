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
    "4zeQjrYt8V6ae7bksEBK6qq5NcJnG1uZaCM7BF3HzDzSnUCEQaGsxYb2US6uNwCmaSCcrrmxPSBK25ghY12iNNxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X9NhU49awnNdCKNZEcRsQHeEtkpee1tzNna2CzvwFVJSGDq6PVkMUnevxUzE9pFKdm6Z7WDxbaMsqWiEAcEfPoB",
  "key1": "2fBkSfW6pyf56GoMsu4uY7RqS57BJZ8EVpXBjywHAoBim18ANy4ckvQ7XpE3X3Uj5DYA6d44D381jE9aN9e4qZ3Q",
  "key2": "5eFUwjQokj5tXqRH1SFsd43pwgUrhSrHHvvwoAd9YvbKvxeAdsKiqvdST1AzAGaozDJNGBRumNpssRWmcrLQcfVT",
  "key3": "3657UBx46RZKSe2iJXtencVFgX9j8h19Qa4QxhXcSWXYLBmNjDM7LD2NSaN53Yh7x51ifDVFBwMJorVcRTKpcotL",
  "key4": "3NrkyW7QnTExy5nSk6rFt57oWGRxcEHCKJzHpdez3WozSWfetLV1CDfigKbX43M3y2n6mDqHquDFemKyKqGeTQ8y",
  "key5": "33bxiA14NjKp6ssrYWyemGveuE6nxDdwgn4HS4ZmdUUbm8Rawbnw2w3zmFkQFLH5RECNujaovaMqD8eBQ5kMXGgq",
  "key6": "4hwGQWpkTryK4HUsyAtP4M7Gjkui9YzEUbw9e7jkdVoBnRrqi6EVfRpKL1ToV8jACHTdtdCWrfp5jaaEQaiUiWv6",
  "key7": "5hgWAKKC8wRaQf4TYBviSv6GDtMUdBN1utdLFNtQWxHYKqATtY1KNCh5h95E67A8BExM5kExKRfZFCkioxeXuhVM",
  "key8": "5DgZv7ogKzjce7QZxkMCXFL8rMkVpdAWtDP7wq72e8M2NdoxtA7xDqfGhFy1Nx1sbke52iiXV9PQgxVKYjoAUKuF",
  "key9": "2VV8BJK97qsGBkoxQanDoQTd9UZRWExq1fjZGCYfXaRE2aFhWeZVYpYqU464xdzDJPdgsW5Fsjqfiy9Fnxi8qVv6",
  "key10": "23Wpmj7KBSMw76EBnKcLfANF5u76w2yL9AQ7oF9PSbjXQkFhFsDkrCxCwaeKGcMiNgPFeCWmPz8WLJJP2aUT4pYq",
  "key11": "3dFNuNQXcJFeeJe4HQGYBy2Yec77crjLgPYZY93GsGCPCJPyAYGSwz4T4TZNid88s8Ua5UW3Lbicn8Fh6cjXviBY",
  "key12": "4Uch5ZAfFEjxjN4mQAQKPSWcNTZz7egjdpLijTWdnUSyz4boKyt2ALhSRckp8eAPCMgCHGzoFP4Wb58wW6US6Mjz",
  "key13": "44msD9c5iwZWbttEViMcGfAno2DbFvPWS9NsHybx18814PbGjKATGbDpZiJU4qc6VmZG93qpPuePKsybUTPuCjTE",
  "key14": "3aiFZg9oetre9qth8N6j38sU4XBfwmZkzKf4yq8zZN6B25wsVfrMtGJr18e9mUQJPHcDHnEGVFg6kBuFvFZdsdQo",
  "key15": "4dFQWt72iQSXaQeCWzHdyYt6zrX3LiKs48z2AwNUj21EvhXngMBrK18cxas8FHop4fQy6pZ7SiNY5xNo9k7AM4GB",
  "key16": "WVhCgLd3xEUh28wUbpCqd9LuQ3jLnoJ2Ub1aPb7QhvNWqDdisqs2bE4Vxf6wJ3sht4tssVjhm7KA94FrKJamxYg",
  "key17": "LjFRkG8kbQWNJT6FmZieU7BVnh2SRGUqdQtg1BTc6Fhd47D4JuStZcz2eFEhSkVWaa6kuXUeCbfFQbfMcMk4GdX",
  "key18": "s5vZra8FdxYqk2fx5X6TNn6nSNSfG5XmejfjqtHDMnLQzn9EZSX3DvTUDHUHzHdATsRSdu4Fzu2FqRacznupVGn",
  "key19": "9yuqtLzKuZvQ4PuU7KZfj1xi5M97WxP8pFHKjpo8FNTxERdwLGxDKuB9veprYxGnSoMRrLPqrhrQZ7D1DpcFdqv",
  "key20": "4BZdYactMD711ctxxbXi3AHfAK2c86dNeMXWF6AuXcEMt545gpqe5EtUTaT8x45hoRUTbWBgtSqERq7jN7kDJVtk",
  "key21": "2U2Byt1Qp4iff4uByNszZjFTRxfKdaocC92AUkGnaabhPi7KJZitRpHNDZuEKhG4dP6QyBtoxCKcJN8BrqeEMbPc",
  "key22": "3E5sxmHtDRVPMEHHK9wd9tcG9EkHG81d3mGfScLQyNQc1ekdNN5GW8sw3Mdk5HjCegPtJ5W3E9XRfLnBdTihvUXV",
  "key23": "3BAgENGe5cJgDdJfw5YBakgh7DsMirjvRoMckx8Ws7CWUqUMTT2weLZD1eN6eGpsWMvtgkjK8HibBRx9oSwExdUf",
  "key24": "2kjwoN75CwNT972GgQxUbfGcoYUheBkXGaDHgWQsmnikBMQQnUdZh1wNebKGz2vmjYagN3fWypYH5Bo64hbJ9hnp",
  "key25": "4b9zyGcJ9BnrRXoywqKxpZd4qA2rWzguFTx3UnZdXDSzB9UsTuF9GjPTjZY3J88mZfnq96ngkujUy8bzY4SP8Ahx",
  "key26": "RvqAmnTwZj52qysXr5YYfSoGvpEKC9S3dHprdbya3QGReh4TZKYgEPtMzytCEUgAfEVZQmC6McQC3aW31tKbhza",
  "key27": "3dzNHwzVh31D9Jb1CUqAmHWmaspPJWHr5h6jZm3oDydtWQBjWccc9Qhbu1MPooGRFQmXopD9FoC624MakSPUdQSu",
  "key28": "5UdN55281Ed3bpwKBFQyZeRayZH1WmGvbmgUaZYqMkV4tCmud12HryZNfYw3WeQf8b8m2xEPFfJSzAMXVxpmstnm",
  "key29": "4KWyPMnLUkjgjHjb3QQxqhkdxGhkepQTRZQPHr3bFeKzeWjFwafQutWg19eBijqYWC6oeEALNhGEx8yEw5L4FFKw",
  "key30": "52FoQEnP17zAnVNUpv89PMXzLzjHSoRa3vfZwT5zxziRvDSE7bySHsnBpjgTz7EjoQgHDxYTq4evzL2QSn46xaNq",
  "key31": "2goUtMMLY1NeYaDTkvZSXoDA1v1NyczzxpY5p15etGWF2CtBavyQr7XBsWLX9cjCLf5YC5QrLAJ6mRwHWNhD8DUg",
  "key32": "3x2Kj9TM8oMsqPfcuG3nKYmxWf8NiQuXnChzGwXTkSUyNymoUrHjascTs9PXDrNmRHiRiiHftKkxf3nDaFe6Q2Eg",
  "key33": "5DcQbpMpXWtmMVLt7A5sKkTy9SzaUBoS3SicXuRKzBTEF3L7uEBGZQJU5K1tQYZXVSx6iF4aEX9MBwE6k1CCNsmF",
  "key34": "2rhmhotqeGXojdbPMcxUYrPF3fAtcvZAhWbBvfUgY61jv3t87DBQbjbivxtFLmX75VkvedM3G2rjQGyBNLST4Agv",
  "key35": "55b32FLsR1c1yiU9CejNVrq3ezbHeM4iqhHDfgwTDwdRHj6ZY3JjAJsLZQBJcs6xWPnTkJJ6Zwhz4xDDTJdTfnNV",
  "key36": "XNc9EgbmFfUjTFnZV6h4BtcM51nb1kjstWX1edRvu3h1zGbLCcmPfHCnAgn7kZXSsfzX2D2Gukxe68s5GYbkQ7r",
  "key37": "2tGsmeDAYfkYrXdTis2vmExFx9PVLSLDXNt9kXvsYDwGZ8LBvenQHySsQ2vUgWJqDbpsQesgSDwxUFuioFLmBCY7",
  "key38": "KVJVGTqH4n31sN95FZjTq866d8gCbaXPECoE9679oTQtKWb4ovhdcMsTUka3FQBsXPHon5tpSpdw8wSgqU4UbCE"
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
