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
    "3pHkHn8oeEtRyZfx3u2qc21jSpMUn3xBKyfjMWMdK55c1migG4tBz2DQMgXN78fnKgExyqNLAV8N91Wce719YooT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hDsYLy4sUHhqfhzKw6RvgiDSzXzfeWZ9DdMG6ueeHMpT88Tzu5YTfMi3Txtweh2buZfHnR38r72VZDHFPaXyTKn",
  "key1": "41t9ktpb4Phd2zKmmr6j98xj2B17xDjYNiqHkEaW1q5iDHqnN7jzcFEh6r72zdHAg1M6mZ9kpRQgabUq5EVoP3Rw",
  "key2": "3wQzgD9iiLWcjVj1RBKvL8LTkVZSXp12dJ8Xtr3Tf6Wjxrtv9PQtMCRZxqGDvevoGRHcMLSc59D3jV1o6KmVFnxc",
  "key3": "2VfmUWRb7apywyqUWiyp3SWZ4uacQMCYZXCNSin7J1tWUut4U2KvRvh1SjdLpuur3pezBEXMFWMMDf9Tq9eVbWGZ",
  "key4": "3SpuNbEp1BsZpDXcxBJ3oBagkSGjPFJoc1c8rCeJDDeAeTB4VsriARbpjdkZzecnQgF83GGQNsf6QoQJ2Xds8TFH",
  "key5": "2xLYrSLJkMCN221s3AX33PaFS6HwJp2ErTy5b3Dp954USG62egsVenfQXb7nwfD9M6rf7DZVqudZSLnnJJxuUjue",
  "key6": "3fS1R75NuYWKdGHHMHdVHTGG7mnAdV7ZUWz97yNfBmHzDjxaRTnsb1YowozcMs76qrgQFmFop8YzKE1EiwufuKvV",
  "key7": "3t4zSjMFV3EzezLA7XPrEz9VR7STCmyn3socfbisT1DEjk767ti9Yh9ACJTM2bjNtJF8Hm8M1nEEw3Gy8ognPCuo",
  "key8": "5vTWAUN5Sn2CgW5RfWudaFb6D7w8TfTrsRTmRxwy8gU6PwetJkW9JptKqEHgzH823xk8DH7QyyKx7q2CBhFE41BX",
  "key9": "3BZLHiNHZusEvCzHEeA5vnfkJTaFG1LGqCrtcT5sqc6VT7yZCRNNW95nD5SUi2SCtezdzWCGLxJqHXLBfW1monNa",
  "key10": "5AHDAmCUmLwSDX8B9L3dE6tYYyURCFnpwap2fb9hRXDz1ANJycnfxZJKYbuK5ai7iQnVsENttZ6AcrwsGZwWghT9",
  "key11": "SbvEytCc4CrmfRtHoUMAKXjxjHm995BLcnQiBysJnLNLWdCCWxw9u4vdztPrU2Q4orepPwKRvvAMwd5HdQBmbHX",
  "key12": "5HYS5qXLkkV8HfkKsuwwCrqrSaRLYudzNe6pBuqFGf37ZK8xeuhg3VyXgn3p5Hw76RRXPL9ZiRMczDJRpXKKXXA3",
  "key13": "3kjWjyt532UQ8U1EArPPi69EJ4uy3iUDaNBnoWPtYZwcaNuQJwzGpYdCwrN4g1cNoJhvyQrMYY7CZhSJmwwfTCMw",
  "key14": "3YwSsmVwUwBEJCyaHcHrPxLg7CwPZPNnrALCpBvuLbPBsuB9rFtr3Z6CmAp5mRK1P84asYJJQcqxrzv2qe2h3p5F",
  "key15": "2LDcAKyoXDssipoxyzvcyw4kZog1ikhvxx2CTVX6xvfQbGFEHkaEDYU1DBzY7w1sjtxHwVdNtK1RCrx6Mhc3acm7",
  "key16": "3JjaZNPqgY3J7AkhfE3AVfjshdybgzM2HujX4ES1KrRHFjieDGssJs3CYwE9UMo4y99V3begUTFyxffRREZ3CTQP",
  "key17": "5oafEjWsm7vs4HFacUipy3f8ZXmhfD8dHSiA5a88gcxAMtTX9eGotDVRp7MGLUYaxSXreVhvcXY56Fp2kFNKkYS",
  "key18": "2k5fXFMY78KJ6DjQ7Jva6jZStoJnJoath6viJNpqUFH6C324X3Fx38ZKa51Ugm1V6erUsCrE2Tt84J5pASD3aW1z",
  "key19": "i3ZXZPs15cqxHr2kj3y5RFytk7RTCEwXArJQ3cAfQcpkjSfhpxzDpTdoWseK68DxD1oCXdkNzyt9Mbmhnu3x2nH",
  "key20": "4mhx35w4ybLX8dPDqeoxKMEaAjvkFYYjzsPE3KBmEb7LsmXjKCUKtRfM79GRav1NHH14SHoxwZCPTjZBYp2UnEBz",
  "key21": "EE6114aDsRgcNeD6bCqt3kTj7eBUVJyPJM3B3K6dhtirVyPceKbTn7itpVovwuCjS5wweXndczJ6wpXGCDRwz8h",
  "key22": "26136AitVW4xYMssDBKu2bG16ma2Ev5VWr7uWLeHGidaRptMa4G8t4ZRBq7Z2XkPRB7Ss1nePKyJgKjzjGNNghgP",
  "key23": "47gmRNaH8dy6Bs5GZ23qoUN6UVkCexdfhZBHrPADnnT6RSt7q4NkoLXqed1hMGCw6N8NKK7jDJnj1CAfsLFcow9P",
  "key24": "5zHpu1Mr7DQ3PVRndqZ7MsKGaxrtof9ixNXZX5misDtYipWJK8TdvAmz3mNyVHKKfQ2tbW1dDB41gHryhuyjZoEn",
  "key25": "42Dde3R18wTDG4vT7kkKxk5vMJGgSqnL8g1YKcWQgmr4bpykA6V5AS4w4NXtroyKv22S1VNtLZnWs7ovSmQKtbZt",
  "key26": "3vM8wUcmKa8L2DuAKGj5H3x8h69tKehxUbYhPeoWjAfYp4mdvKrtsuSvKsGFSkRZwP4EzY7UVyipY7t3Maeat22J",
  "key27": "28KRtV9wXARYRpFHDV5riy1Le1EihSAp6frVJ7hFUZXr2g926XgoKc3JHN6a9N9kVx3yEgpG7QyzgyRmJPfV2VeA",
  "key28": "224vm2AszDAtc5PT3ztDZ3xonAH8yqcFhXY5T9EcmKiLfyeSti9qUWtyF4r6o5jHYtP6FFSD3SAtXBMZGb51ofWe",
  "key29": "4nuz3wqwqdN3LyzvyYubnotRCqd7a1GWUvTvMdfAmSFfkD58pxwadvJhN3nCr4oKU8WSw4HGgmXffjCsXnmZnwT9",
  "key30": "2b4TQu5ZaJjncqchSefuP7tX733magxUU9gi8go33hjBUUaWToPXXKw6NA1hTe4MtK1zpoqhkm5QFqqqAcRg6HYJ",
  "key31": "55SJscwtrGcwFe5SuSN3H4pfgvngCvVbnNFq1CQDU8AC34cGLea9QB3cASJpAKXHE48TEeh6rKfF5oCUNFH88cWa",
  "key32": "3YxEe4QfVh9G5B5fgMVEBRzSBz5oA7JpFjmygWKWQjzqZTJX8Xxi31kJbcDvBfrXwaNfEZNcDhP3MJ21ALsciDcC",
  "key33": "64NbtjKmd3XrTnZiUtunc1tFBD4sD5iqdRerNmnJ7w7gHsNghXkhuSiuJidDcWZJUmUaGeaikdhUfJrLh8PKqo9E",
  "key34": "525F6KwptqPRVWz1msCo2KVpvER2yfbk4abh1WkEnfJnULXfEEsbAGRf4nrn9z59TXJ74ahXi8hPs2toc3dxHHvg",
  "key35": "5AFCTH9kCcJeWHXZSC6zzZdm87gbcLcBnxvzqUmG3N5eYZGcyuzeV2oBoUUcb7ENM1wtBcDyDBCX9ieQCDTkq5cz",
  "key36": "2AjqKv993E9gK5fbePFRKR4NqwKVDvMfJXN3Qe1w46d7AhHydh9F7M533ekUhhFJUPmopaGzKcMGLXdTJGvjy1oG",
  "key37": "3UnhYraE8ERnifktESzUwQJfbP7yNHWGZCYuBwErsQeAok1gRjUJyVjiC16TxXE4gdtFiaVh8Hbe2YCmyAQMpPGi",
  "key38": "3qGUChyXGyGFoyAJC6Vseia6Q1AkE3nopiCJX3YtyDNUnXZBZn3X2fbY8ruxtEBZGuhGwWDFdaGxRvTXSRSthrP7",
  "key39": "fe1gESuZCGkXqDkUvwQJw5koYu7VqCVqbZ4zgEioxCEctv7nBRfBx6CSamCWtLn39a1z6Lr6TQv5kfKHCaHPKGE"
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
