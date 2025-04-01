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
    "5rGAwGvQKVhcusyDx3N1c41hbtCuMBvWzM85ZcgpVRenwFeuRiCSidHxhrCNWjKivN9ZZdaurqofReYVZp53M78u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h6jAoatiDm8aYKmbaXmyidUTyfq37HN5XMdmoVLwF5XNuHYQs4DNmbjLk4EckbPhqSQvTioCVR7vKCTT8prV6ZJ",
  "key1": "65iuP3ECeV5FmYA2RH91zoa5pp17LUkkK5PdGcCnbAgEdG7gPdUQPhVuKmcr2bapr2snrAUXX8t8GBChhrUAd17z",
  "key2": "3RdVbjqEk8qR1cQiJvMYqMrn1SdM2aff9fFKL2NqHVdbAeYjri5J9z4uMNMAosa61yjM86d2LvpYucPtcwx8nFsZ",
  "key3": "5ZjBcvQVfVxtLJW6cKSwU5wJZvGRXzQAQzJG31eZJs4pMVGFx7WgK1EUZJsBPXexVLKJYWDwVmLzMjowvQXdX4bN",
  "key4": "4aE4rdRcPGBrQCAnQMUXkSsHb5QmZGeNTp25a8gp9GF6AdmqcUtjWvyeKT9wsS5qoG5XX5DpM84Xjwb85fLN7gKj",
  "key5": "2n3u2KFbtLNV2Zgf4FWiA8eJp8nVSYrrbou4CrWcGU48gCaM3fFETnjjeQjEEVTR5Ne6tvCMPDFmEMhajqqK24a4",
  "key6": "3fwEEtfjwCX3KL6oNBtJyFy11pq9hCRw6cZ4kqxQjviNFsLGAYTuhY2vs7hahxFaMCo32bDRymbAXKhd4yM8WJRG",
  "key7": "2W6TAcH8xNp3oGjampiUqcGvnV7xaMouWf2W5HQtVcVY88osGKf94ybFmnUBLpBFTQDwyLGc39p25ThTSivw3fnx",
  "key8": "4qNfaGuUM2NybtpNUR7akvxk98iQMLDYgfZ1XQVHxkwvF3D9h1yaBxySZDuyuHbit4V4yDR6tKXnKUSjCnkBxuLP",
  "key9": "21nKggjytHdHd6toBeaU6ad7XJyQ9kBvmHgb2cGyGj9eyH9VYZzhczBEjScEmqbMbEmCJ7nTW1JFCfJgqDYJ4WsC",
  "key10": "5NWnaMT18EHsKTTjrrH62Gm5epTe6ZtdYckutt7zdwEkYuEt6h8MUhbAGkHYrw2VXnvsqSiCJBjYB5G2j4aWyhjv",
  "key11": "Xecuwk29o1LvuaAvpYUK8b6tYYvoVSWxEDt5Yy6hLwZHvKRu1zUie24ND24qAiQevVSvL29xAYUfnRfbWm1GqqH",
  "key12": "5DZpFoaxM8gaAJunrQsuTxR9EbKCyivkEQcjdZLumqfrEa3hqL7KT8qbX4kfrKXUjN9Yr5FHx9HkRdrN4mLgChKd",
  "key13": "4pJqLnDP6Ks8QL1yQVMxrN5429L2iyqWfvsMPfj4PbeXPXr5VpcPXpkiWQBA8GYFiWp2GuYP7f7BujpT8Ee2Coap",
  "key14": "CP1pBQxSdnJuVuDG9pcRrvwppoDh2pboUbibEQfhhnw9AHwyw2ZGJ4iVyAnAJ6Kc7FYkhjd6mYG2SRuJAt4KDTE",
  "key15": "3BYcLoPQbbooPqcetJKEvfPhzT1W1R2pdRGnD2pyzn17j1AifP8izUoRwAoBta26HZSC91uVB4zkvVn3CNnuvT6K",
  "key16": "2xKiq4ci384broRFLVxbvNQJjN3TbfKH9PAjhyEZX3aAXUY5fGHt8KhwoiGYGuMxcKXcvSiem5ZhvUJV7s6xXJy3",
  "key17": "5rNS2nmLru3hUnW6hWi9UrhaEfqmYVLaviQDUhKm3SYXuFpVZBZ5yFaYKdtUP7ARG4RuA1bftUCd7Y28Gp6KDrfN",
  "key18": "25GJPRCjfNZ3RK8rYgAs6fjMMKD4B3W1DKYTqJ7Ywmm9CsFtJ1zF1w92tbNt3hNJLcmsfpMAQmEMf3aiMtNFmLjq",
  "key19": "4HpRbhr5w73xK6d8zFLWsU75W6JV6X8ZRY6xcH8a1WDBQZvjPoJ2RH8qjTUkKVFgDkXeUx2YxDRgez2WkcqyCeA2",
  "key20": "4m8TVyFcpc7r19NCJ89pUyspAXcqnCx4TYxmBNRqky3dgjQrAE3CNiVhc9yiTHkHLUfsaDMa3oGaSYQ1PMj7hc2u",
  "key21": "2GPjFc74stfXdMEFUu1UYr8PXCGANouNr5GZY1sxu8xjYeX7rB1o3wqVNe37tCgePmzxbQouHZDQ9L4GrcogsRh4",
  "key22": "2TanyaY4GuYTkR8bTkaSV4vFDxAqA9YkmpDLBeoTKx1AWc9VhCBej9ZyWGLyn451jacxfDmvx8GeeoqeEZ3FjAMf",
  "key23": "3yBy8FqeP4L4kZsScsEkDXoSqPsuENcH8takacpCVMU3hhAHb8BJYjaRbNa8BY3UDGizeqzm3rAzoDP6M4RyZ3tf",
  "key24": "iewi1ZK19yP3H3fYYFcdmrPYcxbKutBYaQqsnLG3DFPK5Kv7aNKdr9GNUujy5dHTPV1TJtfJysGDuEx1jZ4E6iV",
  "key25": "2PSToDstonTJvsCK3uUQjUWsVYknVwVAP3Fe6Xa2FJZ9YzJhmdtPqfnJ2BnHguyenaxpSCszaPuRRFrqzwbJvT2H",
  "key26": "252cZ4PDBSTgWUpsUPukCat6VZJqGVB233HHU42HtDV5f29tttZwKohyQnEP7D5Wz3LC6PhKFLezmiu2UpL6PP8c",
  "key27": "4u5sxtGKMt8QYMcvNxijkydkSQoiYcKNdkjAkMVCVfnJjQLg4ZZqFnsij69ooa9i3hZj8f9W2LLkJnEW7JSwYY5K",
  "key28": "3WU6jV5gh27GUJA4WYp5EC9668tDAjG6NBJ3fedsYf2knVVz4jzSQhL7dzd8HWDgjnvtBLn2QXQZPYEbwEnS9oAh",
  "key29": "2NvtwM65VjFdBWmxzMGT67HucqFkxonvWuXeDay3YtHwTYE3WABhVa4GfhmZTmTNV92BzdMdK7a4i17oDQfN9vd4",
  "key30": "m172hcNum22pQrTgXYrMDBsoprJtGcka2WQCQgr8oVUJwzbN8Paa7ewVnHQ7gKma89WHxDthU5kkJddcHtMSL5F",
  "key31": "eGgyC7QBxfYxDXpmA841uLxV8kFdx5Gaw3FJrmF7pN2aPjA7TmX9RgHQvyfqxcT4PoZ8XC1s9F6WD6QemzTYJEh",
  "key32": "4KEFBaV4Rw4xS2bQjCNzMzBvLNLr36UVMtXfAXbmA9m73DojZTrCriQqJJN9pnwmc5obLZ5K7heQVDTVd7RvCn71",
  "key33": "3zAuUUd59VzBTC1eDwiVG61HbGaLVFx8xqCtEMXGGEv4ddZp54wS9D7VWCcMNgw4JBCnqjKyL6CqNQMMEYDSxPDo",
  "key34": "5FSFvGC8jgB3aiJR5AjxUfKD2c3duzVDCswyULydgU7E7kj6Y3tSVcbGJkeXVT2NbDaCVZA2n172pLtZoxar2oAH",
  "key35": "5HCKZKN2nn1Bm55RNQEf5zqsk16TjVNwkBXsvuByNR2EZUxrTxvDnoaQPAckPcLf31nx5G7GdPuL2hUgv3ffCj7S",
  "key36": "3eRbcjJFMCHU7amNsqBzQSahofcS7mZyohjTyaAz7jR4iVFLE9jXYmyi8kWUSfhfgdQgCgjKix7KhNi2PyEWcFtE",
  "key37": "3B2KiKKXjpQ6vZRVxGGcLzdmvx84GLEdZn9YMqq3ZAYwdyBLjwMqF9q7Pt7NH986S5KhjAH2ijY9rCaRV3U5jAnU",
  "key38": "33qmASKzracNH964kaJuvMLKc4BMkguvBDBDeVZUtFqT5uk2EqULxoTagwnqzJnBmjLzFjGRAQjUoBykUtQvPGXr",
  "key39": "ebbExFABMwe9unDrz9D5E6omoKfAbwYLn3amspQ94hEsUQdLKWDyw1sbe3NF49zJSQeVsh2br8prR3YXhrfV3bJ",
  "key40": "1xGBQEiy2VAUTjd5GsJLqZoTwhVGo2i5UBVZmbQqwsTK9WScvgpFMLwjNBXtpgYrFhRV7q9464Bq79xD2RT68sJ"
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
