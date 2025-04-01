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
    "sc6RZrg6LV1BqmH3r6LWz3mVkf75hMT5665AjKgSytWF8nkN2mJHGyZbQHzqXwSZnTgxEV8swqFJdjha78Wqu48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wwSc6b4wBtzz1VnWK8TU4ZzPcXFSMfeA2zBG3Pt3DxVoTqoERaiu13QnPsxvoBqktWbaTWtkPryK6UwWEomigUf",
  "key1": "5AUcTt8MbZr9cxD8yZEkgeCZKgeNvXWFJpq3BKazkK21vHbpCUSSedBBedAxMsytTdqygef6eeuimco7nFRcddzh",
  "key2": "4HSQEFz1yvPivLYTrergG5S86gbf23Pc1fNerZBKsrE9ZqwajLtL6dxCDhvXcBgXC3PZeqXCoTgkSSGTPyYJM4Ss",
  "key3": "3zHtRSCNs6rtCh7rUkVV1Cbhr4eD8yrKZE7dhfdWAXe63C5vsABGATRFap4MdBrKVmbMAkPniK6SWVV5pKA7tonn",
  "key4": "3bdN5YpBKcSeKuSpfvkgpjjiEQzeMnpsBBwizD5XHfESvDwQinU5BErG3WGywaTibvwk947iAXEvWeNfZNQ61642",
  "key5": "2XMxqZmDKbKdBizxKmwYXLfzPgXxPMN4gBJant57b9KaNVi9wAGcMs8MvZFKBxdHiVEqDYw45eB86KhxQmXLznbx",
  "key6": "5AUNxy8321FcouiyqGUeiQctQPBJjyyX6pGt6YKtL6Ys3Rzo5BVs7RMeFo4iVu6spYAxkm4eWBtBqP58sNorajq9",
  "key7": "64u51GchTWQpx7Fa7fUNp7SRgiN7ehvPsa9ht6YVk3yZuHi6ovHviXSPcL9pnUcuzj2a8PeNbrdv9HNMs7wpwwFC",
  "key8": "4pmoeYKU3TPLZ4vuNAXTBMeR4X6oyUEum6AZn8qM5zAvKkPia1ZKTG1E6XCq7cBzHXLhUvPYPZBM9yWGiykJi8S1",
  "key9": "5EXQdzg2pUHVwkTDZcvNrWxdkXWaDNU5dHaw4TgVNTyEf6WKuLmsbhpnFMm2s8KdSHqty4gRWVvBCfrjNWKy4qEA",
  "key10": "5AUDVwMyZ1yrLNuMz4e3FGTEYGAW5pfc4vARJRJC5Ym6WBKyDH1kcZ5Q7h6b4ZeiamF5yLsA6qRVzunRpm4NNsEd",
  "key11": "4AXVkTH76XVtqJ9KygQ6bUh6Q7sq234EZEV1SYdnm7jfGwE8yQtA8HVRkpyW1w89yoJMcYMB6U8A6aA8PCzNRgVL",
  "key12": "3wMP9GthWojSYmSzHqwkKTiNq6pZy9Ar4VLpYzDVCjf4751UDSyNuxBYagxtVxxvvyJBKgxyRnAoEDjPZGLaha8b",
  "key13": "3wNQQ3gv8MyQodQ2uHnnNt9WYK1ETYZtKy2oECxyhwMaKVRmE4vpbspfPzeEEm1i5AeaMsF8acHYoW1QULSP7KLc",
  "key14": "5CheMKWcQ4BMK1gYx3oeoJUm4XCrXUU2AUqiL226zwU5vHKeLLTvCpgTad7f9a6t2sFaiKGN6qNcFVSr2922q89Z",
  "key15": "2DBqQ4rNhSAS5RXKq7ynD3jNxyBWUxhKDP4iP74eSmepakBesJkzL5whht7kwS3D1VF9GdwZ4mCQmgXeypvPMRiu",
  "key16": "4PBx8H47eC1GVpfYZYVhz3eFu9y5ctvy6kaE1XRd5DHQGLgP6JFXzMQHR3TcW8Yxgxpgh9GZC8toT7L4N4WfMu2k",
  "key17": "3B52wYY2FD96wx41ATdn3Ypmc2aEm6szmCDcLdXSsSPWhj13wasq25ppuTWzCoB7qMpD8hTHDQvUGeBZQzLDiNhZ",
  "key18": "4xuWfaX9eohdQ3DdZBqSjbpDQEib3sgctC3qAKQM7iKrq74Cc3zKNVaa1pL1mJMPRe1bxGVRSoEsssE6GYZB4dFb",
  "key19": "63trX7SyFo3G4YAmEXydjt6RvRXpKTwZaLzmfv4rdA21SVJnKDi9dqy6mGxf9A3hecGdxvAWh4QTFMcUsTMGZUpV",
  "key20": "2syKxSp8qrk78hHKVm6d5S84TX3FHz7txSQ9KhB3dCmgVr2tFDYePB8uycKqgQnxZZn7EvY814x7Yo4cFwrZg3Kp",
  "key21": "5mhNBWaKbTNzdwHTnecDJTFT1yXkohDYXE8yR4YZrKbveDTJjTSNMvzKbVksEQsbNmcfSQfs1MxKjAR7WD7MKi9n",
  "key22": "nHqjVXz99brwqtMa2WBUS4BddfczweZxLCuTrwJnyVBHhHJLJJVfEz5YDaSV84rD26VhxcSikDPDAterjrPiB4y",
  "key23": "2XAAyVt5obqP1LPRfS8TrNzZmJZ5GCP3kJSbB5tLm38zj5kxH98sbshkcmbXjHLzju3nt8yxZbuLVJg387ZFHV51",
  "key24": "3xMDNUHhAzpjq4mzLDhJ4vhUxVufCec5j6H9TFUJ4WKSPWgBBpfZL4iMc1VR15ds16rZZ8q8TTmPDMb5SqzZxxx1",
  "key25": "45ixEJqdJ2VwAU8mwCYcFEdwhrTkmQ8wUFT6p7HruHCry6CUbLFFm2VtjagZkJbE32g2cNFsWWY44sJBxbDpXn4B",
  "key26": "5cMWuL69X7Dei1kLZy1apHVVNxXT4s3K1gwikgiEsKXRkpTcqVnii5vn2svRGeFBsoMkM4zfx4JsVMvQamqjFeDp",
  "key27": "4yJtyjfSHNbrQ9JpJzg2EzYSvsPBkXriTg3ak98QqQipZVbY8ggiWojc56aSbFoEtrbwxKqaVdqitkHv1tGixPuA",
  "key28": "2YSnehxnDk3sMzDwvZvNCyRJkzxq42krWn3KWju4aB6GGLbDsDg8cKBAAXTE6ko39SDFGrfMKrbyCTb9rpgCH2Fc",
  "key29": "5QHyesz43tGcLUEvd2YQY7uT9WJUqUAvRTmzhWodsxzr972esntpYkpcaYs4m8zwpcn5b1ogd8penLjT2miNRrJW",
  "key30": "59mSiT7SUzakyYabx9pjcXRKT5f5hLnTj7TrmRfyAxGouVcuE3vbSZwiiyxxrTebYSWfHfmhL4seTh3BB6gnYpnw",
  "key31": "2FiXxS2YtG2AHcsZA26VbSFDns2wkHtMk46EYynAxeJcyVGwycKCu3NY1XbKMvrTidg5b8PSVQydsHwU5EzyGJZP",
  "key32": "3zV5saho9cdbUGXiP6xpCErtPJ2DWVNzweej924bRAQEu2djCJCa8pMrgUBC5HCCHPSTzrK5AQ3L3iavRvFR2YDn",
  "key33": "3KappRmj5gvp3MXFVZJyNTopUmZymqrJXDbDWR5NA2Zb8nbzQ4UegGa8czi7Bxyji56zPHCrvE7Ppz22LwbMnpmp",
  "key34": "3uyc7BJsCfXF5nx4r9kkjrFRpZmS6kTerx8pFAwPpBoBGxFrcJf9B4X4dk5ZkBqK4RkogYSzNcjrZVy2GqureDf9"
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
