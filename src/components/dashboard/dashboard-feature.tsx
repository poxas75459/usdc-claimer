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
    "KTqfUh2psbFzST8zhQiBFLMriqGQRSsYyL3qUyDGkAYmWQc68eBghrpUxHFkgj3ZyRM93FfPsXtYHMkUgbauF7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4txzgYtPFmWqTDRyPfUX6iir1DmqEymQAP8F5bmhpV3LsjioXM7LFmefdG8w7pDM4evmLvK3BWicj1UyVFAGLcPe",
  "key1": "5QtaD2LXvnh9oq3aAWc4DSM3ersNiD9LKoPUFf2yrNnboRSQiNMSbCyHRBYTQzmX35PJi6F3yJYUTuLjzSJEkCK8",
  "key2": "5pSfuj9oguRzWZqCzN2T2wbbgW4SJmvWGs476WdksxU1LjWkpGbdxy792cR54hMgxnp8V5YMYveLv3YkB63m7P4b",
  "key3": "4SkAy5HcA2Bh1gpMuiF9MuNMV6nhmcreA8Js4z8ZzYJCBjnVEkPAZ84t4rNsNxpLyfZFurWyEh4rypKsaqHN6Nfx",
  "key4": "5q8RJ9KjYYxwQeLwJF278734P3hJ7eX9t49yphe6kv6RKafXDDBjrjYJ312qxrRDfAzw3DbD6B6BYEdUiWwAEqfU",
  "key5": "2jHFbraABkX6LAdM72QdiowqJzCaM4Gtu33hKQwe2NPefeV8JtpotbVsGsx19pUnszFequ7UZFQQjiorQvTrbJNV",
  "key6": "62ZwYSQ81ge6xYTV6ueJnhmQzoFdL8QcbywcQsiWKuVneV2k5iQZkmJG1NnLtgkmk4Wt3Tpgecxz5TZXZL1KgxPW",
  "key7": "uCMRN4GU7Kv8aYs8QgQ3y7wCKukE5AcykqX7oACWWm7p1kqramnf5msBAqAntEofCDnqiSQRDVQ1pvW1i4MdEEV",
  "key8": "2Dw2p4DzT33trfUcfk6GBc5DuMTvcNfu4Uy6eLi9qzU6NHJiH8jCLctS8giXYkhehd1UWD8ErG6kiDrWPGEDPScW",
  "key9": "568diXR2xrMKmuD4XMuMFiQCtRLafYmRd6qEe9RgQXb2oNAPT1TU4AXXoHDjbLVZQz2a41CU3muPpGMA2yBvghg2",
  "key10": "Xz1fuYZxqAM2UrS4syVVa7tHGWXNLJLgkvCS8ZnSgHyq7a8FMgsY2bgVFLbTqsbNmYTucsDpN2gCmnmPnVwjgBq",
  "key11": "dTQmjHBB2VemvLRbntxcK7LibeLv786nQ7vSNY98rfYbButKLJUUoY5ML8kPwrNyrxLbEMescGniiWRnzzovpqz",
  "key12": "2Go6AJC9kr9L3edR6z5Zo9tARoAH36sXsWLptdn4pe36Wm1gkb87drWgeNFJZJFxVvbtUTf1ooAxbCoTwCDJ5VxL",
  "key13": "3ebeWGC1F2ktwddVXCqeDteunh2TcrsKXhDQtdYG9wVndb5yywn9MTnJf2L44BcvzVoi2FjCxPxQuEp3Q3ZC1cyx",
  "key14": "BvgWaQ4X37ycmNSKQJvphRUvP6UxDY5NbfKZs7uU7cGvac5xsyTdss7jXa6XXkFgqooPHqNLiDjrrXxLEWyuz64",
  "key15": "27eNCch7nVa9BMHFT1LiMQdVFVSHzPMeiGJmQdJRV4GLGRiYwuqMNkMHVdYd7UthVUYDig4bNVb9jdaJzKoN6Q9b",
  "key16": "4niFpAbHj9Js4TSFcFY74uJp1jx7vGUp5ZqwKp7kgwwiBSVrwm55c7ajXqAj9iUdmXXQhBbMMCCbLgMEvcdvXsJA",
  "key17": "3RhoJR1zRYqtJUHmpiBX9MFHYkCMhqBcdLhhbqJsyoqqQJRWKGZSWhtbW9C2n7bLTy2hPDJRXmoyMpixymX6m3ei",
  "key18": "41Rv1Ee6UbEZ6njrzXUoMpj56eBUs13oGqNGwYP4EQnHoztTUR5MngQ9VWPdsc9mssJ5h13LjwcNVzpg841a2HJ",
  "key19": "4rg2D6PRDC2hRX1KoYcG71CNhqkdgPzabCsLkUUyzZVkebXdoFjkx5gfeV5v8LzBMqi8BaV5joFFeGZ8xxhW83tM",
  "key20": "2yB3dQRKZjAREHoCb1kLB1xrF3Rgbpps4aj1L2Xg6ugNmLVNJ3WbqALU8sgpjKATsdSNrFP5quM7iw5dYJKnkjTr",
  "key21": "5zcjeRnSDth4E3a34QAjR1SQUMWpMuLDGXhmfM7a1aTZFH5tv7FetHk67cPEkuc21UYVy2RzL6gJt7Zj6oRkDpoA",
  "key22": "5Mh7e1ymDgZJH8V2hjwJiBCAAKLjEmhRGEtdaQSzJszFKQvQJhiN5mXRC9Me9oiHRNpWY8AKagT5C2fzbMLihrqy",
  "key23": "2KSaQjmHLFjN1KYuske1XN7DYJhj3PR1uZU8pztZh4oHg8ajt7Pcmq51jBqY1XBgn8tonqpWSaJF9pZP2VUEiGB6",
  "key24": "4rXqzah2d9xQxGq7ECmTDqiEcD7hebE8U6coEPo9HSg6Pt3QWCZAhcDijVr9F7HYqjw335tcE8JAfHNcji4pPpx5",
  "key25": "4zs8QkFZeU1v3CrCd4dcKtRRAsK4HbVN7PKN1uS56kUtLZyecZnxyztcaGYs2XJ9WSveKtda45KZkfhy92hcp7H5",
  "key26": "55RE5kzFEVZz7JUfUCoFKFmuRmXEaYJf91GakXTsYKNP4G9rQwmdZUhYNfhunQocJv1m7mfmChvXzN8MMg5PERbH",
  "key27": "3VqHc8w2uxZBGodL5gz6DKQeuia1PZWCSecYLD9pWFnvaf3VwsDt53b2xoGsQzVaPM6fhtwcy1dMBvsAS7degbYY",
  "key28": "2G4N3FT3JkZ4ANhzpvVDh6rWt1UnpJu22SH1R7iETByL77gr48m7yjo59voMrh5QfnusGZhNo1k1HPrPHyHC8DDc",
  "key29": "n8CLv5o6KVs1d6EXE6VLXMkNAGwfiJgv7Nz2ZpvnGWGVA6pRoEZ6usTbHs5aYKbsPEnLEn29GyAQxZvBRCFfDu5",
  "key30": "66vfJEzBn6UHLYi7MsHeZpuDJPGG3FoBhMovCVmVZYsHHGnAsmmxEHcX9Zu5qCNrDNhauq5BKJ6MEvD7MKsir3BM"
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
