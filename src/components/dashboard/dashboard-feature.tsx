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
    "3YNa6MHhqiHkA6g57hYMMViWWxNe9bAWqg5MZGrZMqvdsx4NDUHFYMEjniNh4AUYtnsRrvAnz6wgKKWmf1Vba8Bv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZcTTjEAzZ3nk7okXHJ42uvocd93QTu8ps8B7s3C6utMZBaFaKLZXJsVrKeZg9JJ2N853mKJNQ6rxiXzh38dkNf7",
  "key1": "48TMKZPCRBv5r84oQM5pxXX8A9szhuY1vE4VnM4rcM2kX3HMSBVorASdDyFs6yehPUo5BfdzAxzN3aYcSnA67EcM",
  "key2": "2Cmwb2W3nG3U6WqcZPBAJPFeL4emMyL2cnGGmUmmUHD2VQkYsjvokwT1skb92edGjKSnuH6b2N9mnNxJzwpCcTz",
  "key3": "wf1Em1S9v7k65aKn9ePCPeJvkG2MWvmRDEoZcHymUQ7w1ThrkC9YpSS3kK7vd8skxtteZX6MvYkydzPQVGhuzgQ",
  "key4": "4oj7J1dUmhpJr34QVF5smR9iBeX4VTz6yN9wuuakKfownTPMsmodVF7osrj3BiLSMjfsDoG1UaHCT6F5ksJnWkaa",
  "key5": "hqY6cLgGej3ftas7526UmC7MyfNgNTbH4MBt4JASwKqyn3AEZ3SDb8jng84nTFEv4dWAGtdUiCTPGJHyd1jXAwU",
  "key6": "5qLRWa1oMamKYddo4A5kzETRodHLnENgmY7Ztxb8kyrdSgQWHxcjuV3aJxvBNr9hm968HSohjxQkzMP21c1BqHXi",
  "key7": "5ZGvRkwDKdb3rxxA4jGpco1GQZM7WK6Yn3LSHTNgAFGwDwe1J3NyNNVKiyxwPRpzXZ2fGZf66NS4ADmSmCXSvWrW",
  "key8": "3jZsHeCAhexefkFDqNwHtFoFpGRjMwtmeqDZoMKeVvDGV6ZQiJra3mikE9nX7fT3aRKLNJteNBocAPEBpoGCQe45",
  "key9": "2CDvUwcGacBcssH2H2XRVk8CpjoDHcfGseifuBRz2hCZ2gkh7eXE1StmTofxB9o3HgARYrejifgqi2sEicnApF8E",
  "key10": "5JPBLkLwnBJB9bstoi11ny4yvDNxZtt6vsZLtQR9pPLSsKj4WkQvnNihJ4RUT4ZAh5yQsx4nSj2KsjrNgffnzvVi",
  "key11": "hWXsDPpWRV5iSKe2zQNjcjBrDZkwYSNqEWj8WA9pcto9C8xu22xdNAWt1ce6AVsd9DDQbXw3j7bdm8dhAMt7EiU",
  "key12": "LMp1bYdd6NfWBfkPHTp2CKShF1BkDcsA42yAdh9eda6EUPD1mt3mAg7GtRwnKHFrkSToZsf5BjKYoLb8Xc8i4cq",
  "key13": "LNPkmqCBZzr98A8BfrbxwCFKu9JecjJHgDfKc7JXmbfyBfX7VxmM3XAAYL7WeDD7anGKp6fbGzSk9uSkGGwGKGi",
  "key14": "43fsdmdfLtpGofqCeQFfyHx88xZE1HsADSTAoj2cfX1pMF1nvAPLEYWzRzrGQ4ui9yoxPHcUdKQZRX17xUobKv1p",
  "key15": "au9f6DcDpUu2YGCxaQeYy5jc1cHHhQyJwD76mcyN7mN8rEHHvYQ3jayoyDBcnEnXW3D2EhQynstxbSohQkF6r6W",
  "key16": "4MZAsu4AvmQrSdTDbTcSegMSrBTH8eMmdmSs7vju4LYgcRCKuZQBuEwYVj9jDMAGaSoDhSTfUbzKnmrgjSLus3hV",
  "key17": "4hup8KHJJgHeE7uypUgyMr9KRKUb4CHmNvFyQiJn2pWjjrw2aFRtUAo5dpLzGcPdnTFNrG44WzRXfZ3k272YLuBJ",
  "key18": "3cJurYroLr5LYYKijxHGqHNGGaBRpCAbnrPYs3CXs8Dm4iBz8mqJyWV1y8RgLg8kStjEKtVzQNjKRRz5Ur57Y4Bm",
  "key19": "2ZSRnyetPkEd17ZkZndCZ8oyRqXsPcXSUhLcoUMKx7YtyWDVpfwMBXrjjGk9yqwiJN5JaqjtXz4dDsPSJP5qQw35",
  "key20": "4eQEjgnVDg79Boy8PUkSykw9HaRo8GDnaZ7ftmw83esefSREaCeJxRH7CAxCRAchUCAcoL93syKzwRPnCAAgBxvn",
  "key21": "JTCbWgPyKU2L8VeGMHBF5tnSMAsDfVEbokP445BMm8Akd5yTF2bXruj1PsHduLb6FcnYFpddWUuJeCisU9EAs4L",
  "key22": "3joZYJw44qEARikJ9TbhhrD5CbS5uFdveUPVTBwbMkwGDU3bNXSQBpKwY41FRX8kngsxT2gHngadLFjsoDDWCHog",
  "key23": "mDQ1NgrtbAgosdEiRdabbctrvLUvvBsQGCvSc6xJUeW1662BaRufesNtd8Wx45iMVcRP6Gs7NBFgK6JWUBaMNFw",
  "key24": "3iRqV7bCQxtvihDFCHRZX5A6L11sn4UqyZGdBmvKsTR7oFEMyBDLwrVtHkdGzAY9GiCGzSvLJGtm1QCvG2anpFsx",
  "key25": "3awY8XvBNv4VkxaRRfmvqWH35umuddTaY1AhRZk2sR4wxPLyr55JR6AExB65JgtQYo2gXVBQYtxjx6anfJ8UYtmC",
  "key26": "yyfsVvy83tQWLUhbasq8c31YyiqsKrRqeaNTnhwAQfdFAkmD5a7SNEYZbVzTaVa7sQHkqPsciC6tQrkSsHcCPPw",
  "key27": "2poKGVwoesqrCDZaUyNxQEaRZ7UAEJi6RuK7JCHUGjULH38sQUQdSQHmNM2nN3oBYnKn93ueVWFK5JdvWAf6Bbjg",
  "key28": "U4iwdzkavwbxK2G48Guzb9NmXyN72Ngt3qHbmmjuGd4RfHrDRLvQe2usNJS1ZweWnW2kags8LuB1JHyRZUAWU4g",
  "key29": "57QTCHYXTQYWcAqQGofxaASkJigo6oRCp1fcCssGMUzkhABv4Hth4KuZMinSG2ottkbi283yk5xHQ4KCSDPYvzNi",
  "key30": "2romkZUwpxoP9hoAAz3iCq6DYoQsNY8wBTKVJn4TUwpGBSQs5VaJiQvVfeps9fFHWSWnpWWRjyJEgRn9vyPXwuTe",
  "key31": "4zoxgKZY55bYrP9DfztEA8KLpwNSa9NGrKN7YewHpe61f5tL3qstQo6jsa9Gh9LeVHoGKXiKEdtx69qVGgyALBXq",
  "key32": "RtH86EyQot5nD3gc8vcit1h1BLr7qK1ku8R8MXMxbhaLVEKShEgshDbz7oyu56fHngqUFnLzK3nQg6h24gd1NA4",
  "key33": "21VkwyVpLHqULHPXMFjT1juBgYsxab7M68wCJ41LPSVbAxbsqnejndTWUCHtUJXTQEaLrqGq7xFv69HDQ4T8TsQQ",
  "key34": "3bU3QvtoYRAoYNhqbcwUPQPKrUZgvLJspn7uv6bbEExELfvCYWdcmxnbUzwkrrk62uJW6Lv1QG5JsS4AUGs7TFB3",
  "key35": "2QHvdMBb4A93fvtggG4693q3pvkb1wp2wEnQ4ovRcWNnn9veWtwzuh9dc3w4b133VCKmKMTajJeHsmmD98MMWaJ",
  "key36": "64U69Hp5oaSaF8Yfj5nuy9oRxE4cnJqdCjFiSV89uvXQTQtBKMWWoNEMBEP4Ak5J1fMQh2X8uPS9FSQZgiBdqRDS",
  "key37": "2M1NonyTtCA5Art1L6Y9sZtv9KAszThkpm8LgdgjnVUJarCanDHakEQbyVEJJ6rsWR2EHVr5CCBs9iJV5neXHuU6",
  "key38": "4X9RiusQRi93DZ7YWqW1pySFPKMVsyfJXyLK3p4CY6H3JbgicuDAR2WgybssJMBv6jnLFUQLsHwrS6oHnzRtFd4s",
  "key39": "yMkdQbXrA1kJ93mfbiZh15xSe31YGn1tHZpGcyUpvFgECPQfeJQ7mk1zZfeAeR4AJLRLQ3E8ninLJoFCFMshggA",
  "key40": "61sUT8NQWin9gVkfgCXFE5DWhpv3KKKK8JPJKAz5UcngP7yJRRCW8oGdwt1pTtXp5zUHWnBcwsHgArRKmC1D2gTp",
  "key41": "yGAmYPdNsii2QcGFvuMDRHErJMp9qEJaCjLtQejAegqsEkAEmtkY9Rr3A737JC4UJ68VXsg5ZN7GBc7eHxUiJBv"
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
