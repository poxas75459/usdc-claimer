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
    "3cKYWTnqpqwZoFPEEeYQiWX3i7GR2bgoNouvgKSwdSqqNZZFMV9oHoU8dqT94cZygN4Pdgf1xG4rr9fP7fBu6u3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33eLsEgxuz79rwZH9UryrwAdvMJnTFyczeM3F9QsnAFDhGLDTffG6tnA1qMay8kuhYFW5axdBY8YTn2UrzYMP8aS",
  "key1": "NxZ6HeSWQAmcHPK3gdxK1zSEGGGrKzTyeJJSHsXhevLGm9BJKVW3zk3vmk2bLQDJ5R3H6ve7nRzqcPw87DxS5Hw",
  "key2": "3J1QR9zXUQd6DuQYGqTwFJN1ijDcKUXJw8aUVrDU2TGyC7JKm5pq9HrohmJ97skC6zKtJ38cCf1vt3FqHeQoAESZ",
  "key3": "3NbqhzcEhEP8cBVwZVhsK4tCGJgzTWFYSxjsnYL5NbSoqKwsgpkc93akVmFy8FEGBFyFyhfb3epdBrY46B5VTqve",
  "key4": "5qV6McTw28y5a6BUJanRk2rGqvnQ2tG66zcUGakZJwU113FDRCJ236yC7GE2mBBfmxuWU5tc2aooQ5hyaMZBFZvi",
  "key5": "5zBXVXMmpYnAW745jPu5zcLHqXAjX4U8UN7yEoXmZCZt3WGkBpHLgUVZfEZHRtgj9gPS1kGasChKDVFfNjtFj1sW",
  "key6": "4B5zZawqshtexQmMVuEgp1A5A1nBnWVPXuLejM2pmNt5mY9DhsUBHZcMPLHMya2owZKbQqexwLzX1FL3Zzie7vX5",
  "key7": "45GmY1vYwnpoVAszhSY7qb3ohBuYD99A6jFqUoUjhhdN73D3awRN9EjNrRWkv7z9HQU4BDM468zV5umKhgQu3b7u",
  "key8": "4YqdJRCD9Bkjsb141Zf1SAsRgXMoKSaYgNBy5zroWxHLKeVP3NAFiiqannLjrXnvcrKCYbVvYRig6pFAGPs1ZNjT",
  "key9": "2o5XPXCKVLJUVZ4F385Pu4aUJnrjfEJ5VPQ2cMArZsJvEUvuARt6V7VxZZYZNefGYzKt4icH2P7Mhx9keukjKsGD",
  "key10": "2CoztyiQg53f97kZ7UHQaEhf7JRRiAcEzbqkXa8D4daLidmgYXnr3mYWy2Hham4Hg3THuKHELhn8t8mKDyKTJTDu",
  "key11": "4UZZzBqqvPQ6oawRASqjPTWNxQDJxuSHoiY3mRRhFVwKcHxY2ud7JDGNAwikgnAm2aH9vPKhwrGz4PGEjrGKT4YJ",
  "key12": "2VpLeiJKYHNxqwJmAr3pvHX1ytfaCnPnDNdVKQXU97jPw3KTG5oEfMAYq2efZ9F4U1A3TNdamWZPb6UTrbjPhsnX",
  "key13": "4Lj3s4yrDkYfCoNNpqHnPU9Ez7rYmy7YpLcKXJ9JX7VY14YihENVkfGeXNsEeyseRyB8e8RPL2eMaHWrhNaGJR9E",
  "key14": "3w3SPPqHJ5fEwzgRjhnaNpmh9Bo2LMoARsV6MHVsGsZ9nhC3RokueS3tqF7QvaR2DednQVg7JbvkLTVDbwkAZ8nm",
  "key15": "M4Buw6ns8PVV7dAfyhcgidqjKVKTD2Mqk62UgEFur5CEK9pHFtcZ8mPWxdTLmm1Q541GayAn8jEuWhxNeDVxigY",
  "key16": "4fwwETT8DvcVsrPFnnQmM2Es7oP6qAkDPiNixbnuvaHz7LEhZcFQhxnUSu2MLKsT72o9gdFfMA3dUgSm2f9fBgad",
  "key17": "31JLo3Xs46BJxYmWsm8gnaffoz2t15hEQNCNoQjEjv7bWYfarDnUqWKsNSw2HSFGCa13UAJgMUpgeDBf8StEYTDq",
  "key18": "44FzP1r8EqdT4UVL4nthN6ZdQAKz3ZtHa9CxFrv9y6SgJ1UM2WUGHnX2wkLadx3MCnB5iezPb6Gd4uYRwwNj2XSu",
  "key19": "ufy41M5Pn51PTbiDQDykfraZJrdhhz7X7GxvdM2tsc782jbfcKfoHmFdHzX3TYxiuvc3GnTGboerXPHHES2pxyL",
  "key20": "3tJSui9R4pUwVTE93icWQ2T3gieAdMsYbGS8HexeV1ybmXWSKPzeCRrgg8B4bZTzoRpVRrkQgBWqgk5njpnLQJgA",
  "key21": "PXzaF5iRTZRqr9NgEmVUXnsHdoieuMZf8yBc8fM8tZmuxmvi1FWW5icVsXT4djGgon7zVvDHfvGg9y6ArvYz4yG",
  "key22": "5u1KAyvndCeCxn2Yhy6Jh7v6o8UUtnmCa5KVk9ikoACpbuv2dkZbBqbSDh2Dni3BeVVgnpQJTQcVqzEKdXjEfvos",
  "key23": "CrQJ3RNJefPiq82CeBSyyYdMHsiwzUWk292exJdp2SP9wUndretsaKUAmZRBw1SHhoTygAvjcEYcqvLXvrzjMzL",
  "key24": "icdtjkPKYT9SKYbccnRcJVp2wu1KGrxbxuLBYvCnxv7ZqYYrQpWyYCwPeyQ6CMjuoJX87JWVRbxSmyyhGPkQXgQ",
  "key25": "YGkFDQTGrY4DpT4wgpEg8J825SYeEVsnSd2GN3ssHx2vB2bi2UTnWW3QDVg92jLVpZCkL4rrXGPe193M7oL1LCq",
  "key26": "5Ceh4RRQmELDcRckVu7LaXva2wAgA2tL3hfKNCASh2V9HLmsaEZisbtuWJBVAdU7MiTucVHFxAJGeys9uK22K1Vt",
  "key27": "4Najs2r2QqktmsuQoGkbomveMVnsSiwQALaYRe7urci79qium2rciJWxcA7BKND6c4w6543i2HfKnDaTpa18LTz4",
  "key28": "qTkmGMxWpQm5g33zU5XkhSAQN49ZGX9qnU7ajBvwWFXvm8SwCbzFVEsi8i6GBLxzPV1bU4cS63MtCFPA9uKySCm",
  "key29": "5EbNm5SggtehwUwqYPKjD4DxLBmfH2rUExbucJjNRmNcPRYV2oeVLa2eDDiSEsqAMEmAh9AR4XmaPR7nUtSJbvDy",
  "key30": "pU7bfZqw4PryTfjWVhrqjEADKsvMBMkqr81ZPQVkJZZAMDtAoJE8YmwcxeR5PuSdDxCRekEFJ4vm86Qev3A17tK",
  "key31": "bejMbmCaL8KeH21F77DYGq9qYcMrthpHUZBeN8G5y793CDLoDyiLZ3u9G46pEeCrU264PRTbmhuRb5QTuWS5E6z",
  "key32": "5F3hDePhQCcsD6XCua5Gu5iASL8j7zrzEsJoFto1VFjj6aDmWosmvH3Ljoo7YbwgCvN8ndqV3aAfACYdmqoATuYg",
  "key33": "51RjdG4f9UD95dm8R1wfhVhrHNhKvaqNF26y5HecPSteTgxouJgkR7rLYhwsDRfUBzra9n5Cqq2MucR9ZNnkTRPc",
  "key34": "PGFZjGmKBvZDVaewWtUkWP8FfeSGCkiEqSSWNyzyNXxjpnJmx2Hr1PVCdPv6wYNUjRma3DQTx1WZMAxWyWmRXuk",
  "key35": "2AUtuSHKjRhwSpn8z4UYxKcqWEAaUCG196sfS4UWvreNNkt8zTaf3HpJjNPN9D2KV5TySDPUeTTFgPWwtw5t7BVw",
  "key36": "4DL53c6Zs4gMNNLCAos6dnFUMhMpu7hj1jEAs2418uw6fr9gwWjmnZN4qjRLUDiMZ6j18wmkDYwAi2YXPXNrNYR5",
  "key37": "TYf3bRQcshtsKh2TzV8njkzLEGHeMZYasmjgesReStbHAunq5SsWkCRdjcLJk8Ns8VWxdww1FKKqbwxhypNF24B",
  "key38": "5C3dYDbWCSnXJnHkoAEdZWdkQDtMPTizfcxzQVxDRP81PhKoQEq2deHr5N1fSt377Ztf7SrPU5SXCuqDTY9ZstnJ",
  "key39": "44ZNskHcDWA4st9XUpQjEfECiQ2uatyPEVHyvXokf8eBZ7f7DSWXnt9j9THdzmnQfwXoksLQX3zTF2fhV75gb6nA",
  "key40": "2KfTQ9P6aRJpp3xAdbVyU3tjbcBbNGiyN7yT5j7xy5kt5f8LaEPV3fCbttMvJAxBm9AUHK9Y5oAcsMoTJUKJfd1q",
  "key41": "4oG8GMrYBVFp1eMGBiA49wGrPhEr8Pg9YoR84mYNArufNFyTKUkpmCXQHTakKNkovGXTF3edTh8paQdR6DxBxda5",
  "key42": "2jYLAD5VY2V1MYhienXttampZXFJQqGpakWLNZezY9iDqdXpwPsxxAuyZLrXEkc7AzZpfeWLGtp4cRVikgmc3Pw3",
  "key43": "5UHQ4FN61ptrYyYvy2J2nSNaRGwSdLJ89VM7mXCXTqKNRz6s6VBXCTCRYK2J2CDFt6njnuBnhMahW7DEvGWbRNgb",
  "key44": "4xVRrBgoFQHJTGzPFDXGjWdLLS1vLGLpooYot3Vtbzd22UncdeqrJWKxK8XB8NxcHag1sb9ZqxJZ2QqYybPHGomL",
  "key45": "39ViWkauPgtsrzsmTUhmA3hrW2zFo6UtgjrGrHDRcvG1a7Rh7MmvgsEmepsxwVnXqPZCBRG8WhaESvimc8ahiues",
  "key46": "5ktVSdWpXqXSKrKJtoXWj5YTwA4ggZ26f6ks25WRCu7DQfkJ5jc5JzffvEMrA5Wgfbvuo668YWXKVCSNKoucqtQJ"
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
