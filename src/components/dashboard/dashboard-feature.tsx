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
    "7uBGpc6Pz79YysFX3k5Sw5UgHjkK3xSfNCaUZuartUV1bnJsHdXH7jNg5ikfJrKPAutAkhM3S1Y8FE9MfyrhV65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5msJrjxaDDHJcxZLU7iBsnT9PpTYTfhqNDfKjGtbv2YPbc57ocpz6rpPbkfy4L8qYXNwBAmznViT4qGd2ufysBmT",
  "key1": "2Mg5n4G8TSuj62pxCaCfZTP5hYWdHp4LKfj2as7JY2otDVg73ozgWEBeaKS79suNGqKg5YZhvnyeM3DviMraKHDL",
  "key2": "2a4B2JrbvkdpUoBge2X3mukKgaCjf1TfBv4T1DQZqkN3ScYS1KTY1CKmb1XU88kCgSipBNvuGn7uADC6vv7W7sYH",
  "key3": "2XJbqFS6LwxK1EeH5p75ueKSMa5wBMSPVPK8aZTg4D6y43zjtBAnNNLtfY9G3wkCcWpa4NY8N13YJpfYWLy5Vqqz",
  "key4": "2w4pAviMLQvCeKRguzoYtcwJWbqv4DdpXmfnmDajCPqjvxueUHu68XwStta4qNiub6TqG2f3ZnGi8z6feBgum6nJ",
  "key5": "5Ff1fuzjb1K6XdnrR6s1eW2VpcRFahtQJPT8Ct2Dkavd6maeVwZRSPdy4j1fE7YJ4tANhRBRdLDVWBaKwyjVCKZo",
  "key6": "37d8bRtmRavBcFqfsjk8yKmUG3TEgA8VnE8NBsdfpaeQE6QGmDQg4As5T1pVC5t6gm9qQ4j2TWqtTCFxkHTUG9BF",
  "key7": "2bDJsUf8mk9ye4jY6kV15kXYKZTehqD8odnQTrRQThv5WaZEsqN3HSuj3GVxQpwiST7SJhDQAwUtRmC5Y3Fk3bk1",
  "key8": "BTGpWu4YRjxwucANY818GFRvBnbFyk5SzKA79kT8WrzySVa4Q4HnuNtiZoBUvb7hofgUxuTsTDpyVvzzH8t8xQX",
  "key9": "5CfRS8zmpQenC7JxD12f1XJDkpZHpp5nSmtqx6h7uN6s5fR5FX33Tp9MW6JGae5foon8c2Vw2iHgauG4hm3mYrCL",
  "key10": "4NtuDqa5A5EaQRXGcWdCF1VXqkGLF96a7nqW92sopPx3EDLC6bkkmsVEnLsmE4Ji2aSPXDcSYYnQvhVFTY3NAZ5T",
  "key11": "4kYCBprn8fLXZBGPCQtptZFJDgVTixK8whTV9HedQu6AjoXrB2bwnkjyDGDB2RnGCpyPyn9PxG6iYgd34ZHGYenW",
  "key12": "4wFV6LmXuPQGmw76UY6GCfht4imYVRCnfpueaWuNYgjtRgbRFsRFqGk4zx9oCj3RebaUtj9fGJ2fyvi2Upp1q3EQ",
  "key13": "QNfrM5nbdea1jJicusb4WztGb6mZfWyo8gKQaXnVX9NmiZJDHvURGActGVULDoBf1Jg9XHuRSmZhVFgcaqHMH5f",
  "key14": "FnegbgNt9YYRUwybdT23TxtWyyrkphihduN8SQK9PA4huRmZhTs35sbUoEgnxqSvzXapJ8cdxxVw89Qv9fH6zY6",
  "key15": "exBuDEmqYVaKqgv4moqT4XxNLemrJcdtLeAD7ybaMP1B7LNfEfYfAj8in93rspeeRL8C3pgPAckbTMiVgLtHoPu",
  "key16": "yiLcZMivbiSDcJUsh2Ht6hfJF8CCQhJjxvEXowXR6ofAA5PJxYLdVoBEYoyAon4qfWwrLT6TFkKJn81P3QHnfnQ",
  "key17": "2nvMzNvD8zn2drWsVm6AjuxRZUMJFwpmjZfDo55VpiTsxL7t3BXGAKBUgzbg8oyBaWBtSq3E1441gpHmGoLy8Qxi",
  "key18": "2diSq7CY6a5jtzyHGGb37Hk7M53scGQQYgfD5g8iJw7tU1sVyQoCMDNuJGTAdkTA7y21nG9HoNDtWt9Mg2Udi2Pd",
  "key19": "3AHdyWALH4MKL6QJRVZkYsk7rCc47cDgV3Me1vVDcdaqMDJ2zuBya4gTaiDpHU9ycGFsU8PitHt1cDUd9fN9dqQf",
  "key20": "3in7YnqgZppSa3N9g3N8QgPzrSSf75FAFMrcwZYtXzznMnryAg8rLWgxepMCno9dx8QLzwoiUfCy9SRMKwET2wdb",
  "key21": "5Z6W114HxsMTYcNRVTDc8RT3uCYvgxNiR2Ns2xfaZf1n3fsGsJ2WyMhWx2ds1jNCWNUHyq8c81RVAeGJAWZ45EuM",
  "key22": "3qjKrgoTSdz2YRP1uyXoWL8HQh2AFhUMEKTQjgHQrRAN9vY3kGFhKLevRchukoUAacjd16Kzsj3159FkHzr41FHg",
  "key23": "4EuVDJh2ZeabFwfP7MZiTjNUpdYPjdayUBVToWs3YA5ihuFzkQhH6Mp8qvQvpPmah4eh1XTTNAJvLbqwKZMvUWLR",
  "key24": "3C8iP1ftNtP147bz7Rrmtj2A4bXpRq58fuHzoTGK3VfmmyYv2o3pe5x5LhLnrFvHMQ9YHXzBGadY75uvvUDfFiP6",
  "key25": "3aYNGZ49cdcTLyrGpnCRagGPjKs3Xrwuky6ePVs4LjJGNHy7nSKUU9SNEKW8Z5TNBWAbjf4yFWxGJchRK23VNiPs",
  "key26": "633jGA6pZRqoiyMruEvRn4Xu7rsiDyrV6eY46xLPzY1a7wGiBt2a6W3oSihXkMHxZTu4FPsdt2C4pkPAK6SnUnKK",
  "key27": "2Mmp9QX6iwmy9xC8fcB2XgPtRjksbkuHFUBajJJ7wv9YbKhR2BTkaq4X9B6rCve34oVWA7QLotL2o1iy4ewccrVt",
  "key28": "xJcuHuLBUwTzAqjWLhyLVcZhKhGau4yAQ7cb4Y6qM8UzzTjE3rH5MdrYsXT7UgeTrVtVaULzDywir5qpUYQxFcN",
  "key29": "3BbpjZptjpwagsSY7ttfBCphUH2fhPGH9S17yDCJapJyRwSsiSEwTKE95LhwBXSTMH9tgEmzsZA6he1xvjgZbW2L",
  "key30": "36AL5KGLinvSdWT1KeLP6tFMLALEWj42sFcprtZFPRfj5jGQt1sbL8wWdz6TH3FR2q61Zze8qh8pePdpiLC43e77",
  "key31": "5fQXzVQAdbxWK1FMSLP6NReCesAzHbijj3kEnmK631RC7TxujA7nVtSeCitKqQvu5aXua153Gfr3YhbX3Zhp3u3Y",
  "key32": "3j2xNCEFSwNBhXuH2k9wnFJB8d7zZaK8KRkdmTm7rjhAftTMm7vsXAEaBFL9BxySVikGRHLPP7EsFYFU4UMtJ44d"
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
