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
    "5awna7iGZAF2DbpNikDYUJ9KcNrZ9Nxz46k6VtFm8XyQATMjq64B4W5n6QrNMZtB8LTxwd7aBuvnUVDYrpVw2Bqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x4c7SPK1AofN6BwVao9jZ2Q5VZJnADYKspiCL4mzHNArmxD5fhKgwHHJic6GVdotXrLbGXXKKFyJ31RLqDrCzDt",
  "key1": "2kwZXrRbKMfhKy3jKRqwFC5Arkm6WqNQ7cAtjoR32HgToGZbd7jd1AAKZdmuVWJLejdLJToM4ZUjnkSKRcF37ihP",
  "key2": "UWgznS5g7sRnBweyi71MtxWYBN99X4TKvzFfJKnhN8mKcLwaUK8v3rTgxWVwoc883fEgcpjjnskaXtM6vcn8hDv",
  "key3": "2dpePs9FpqSHUSddgnFuaogpcNGfQUQJACdk7ExerhsumnaStgQqEdy6t8BNXZE4fWnt7zTK6L4Y2tNsveE26WGK",
  "key4": "3r8Jgc7cyC3SYsKHhgoYt1Ny9cvFy3dgymVobnHxQKFgGbaF7adv9mGmufn1hn2b2QvRq9pD53GEe1CzsLxs2Uve",
  "key5": "5USj5vKuR7E39jRuZmJAGac4tXVze7YQUmzS5gM51ke6goAV9ic39zk5CLq6rxsirNoXtByTWWB9RkAxiVbzRz6r",
  "key6": "3wxjCHkdgfW1TePd9BSKVBPgSMo1h6DWCdWHVvdembkhZ8V1eLNr3FM6j62tJrk8rQYbMUzQRkPNt9KYuTbvKcEp",
  "key7": "2UetTTGxsMg8VVJBPHVKjjwNomFHL6aWhVUiHZTg5WWia2TTw5tixKHjGG98FQsHiWTMCXeqHLBDtdoZpb3dW55Q",
  "key8": "2d15yxLsUcLJZba2Hi9NRvB3u6nUHLHBRu9PhChhByHvG91NBuRB92u6D3xoLZhmDg6FeBQ4WAKXHHXK3CWoREgQ",
  "key9": "VgD1sm95eYyPAAJa9Wyk37Pzw1sxnpMWCpi5AVz5JHsRqcknmbn95JB2YF3L6pxNPft1DozNTAQbqsr9iKm57Ev",
  "key10": "5ZCvxF1BSk7yYk6VPHnRj4FDbPHstzAAWtPJYC1itXT7jkLdK3waQ28C26ys1tj1RgBxmv9TLzZmi7L2N99cZqrm",
  "key11": "2Q8ecKeKdtFMkYL75vr5puysg8Y6NPL2nHJnwg2vg9LSQDRKuem9KuaAE8jsJkBmzLp2RvktLRsFJdk5jUo1azsh",
  "key12": "WDfgXRSRA1ZB4L7mJ85LBMXBAKaK7THf1e4B44Rx8Hsi6JbxeuKvenrYVzsiLXHHLSjLtx82SsWgfTG5yb2Knet",
  "key13": "5Sg2gfxqdhBwAAgK2LmvqCxzTBDkmV4EWiumBMLpKcQFnDc1WGtXpWxdsBbAwTqeRsuny45FgqayVA98jWX4QnJR",
  "key14": "4A4zsbz8wudzZJCCmwGQDebiHG3JXBBqAMrDbhQUCmGctJPWkwF8gWRANkAo5kGDuaD9k8t9V74kwnYBxpcmxhGy",
  "key15": "2pXrD9mGgNWAG1bgWEJSxhPtUNWqWvVRRA92MoytqDkq84Z2CP11w8rcr1hZZ4E7yMQXvjauXDF6zzxVEw3BVGEe",
  "key16": "3rCmbtCT31Hxprw9cu1StjBW3aPH22q9wGjdyJN23LV8NKdC95fpgTffaFSfQH1D288Z6REAFDBPwG4ggLysu8Tc",
  "key17": "3JRR1aXGU3FkZoazLsuHBEGzq6N4hxvicUQAwgMHv4X48km4D8cFQ1fBzr2eJixoKtfQNZkYGWAjdjeJETBp7dBr",
  "key18": "4Jc6gyUs41zPJeWzV927KFRjLZhGqB7hf3pZTJNcfWzQ5rD2PPtPzBXjP6xHqs6wt88kcjdADRe7szzU6h5mGhaC",
  "key19": "WyDxfV446PeTKbLxjyPGJfa7fbGMGbzokPju4Fv4NFsZn7bpT6z9vzwUr1hWDo5gsbHuQmJ5hn6Zj3BJryvDeNb",
  "key20": "64BbMzCdFBSznQrqDjPeG2MtGPAM1AEymMMjvCVMm3oGghbutY59pb2PxiKiAkx5y6Hx7CVGEMWJpEpCcuiGbU3c",
  "key21": "5oLVTU1JnPHXfPqnbQCR3ftQMD43RXxrKQ9XG1VWoe6kpoZTmyLNJvowKHvJro6bHz2nTfXxAjFkkC6PmeQAG3AC",
  "key22": "msHicZoHdHVhCWoN8a28tfff83AsrgAhFH4iGQLwHdsKJhVndzja227ibcU2w9n8Ke1H3RjaNXSu8jmcw1caCYh",
  "key23": "4MT7F3HK5B3ceZpX4x2nN92HViPjfWNJLf5U8EYrzL6Jz9cxhEFTiyeeKHMSNErDKcjSpofeUPZkWjMCr6XHYXSk",
  "key24": "3sn5iG2ZgapNSqn3ik3U6vP82AcvNDVDb2eqVhmScAqLJqf7Fpw4EuMbPadK3hqWDWkPFJEsLZCzrFx72mEdUr85",
  "key25": "5VW6a68zCPDtwKrhhogtiMd6MhfHnkBhEa1iKeW3GEigidjpMpua219zFpWHDWGgBp5DwD1Mx6LwrjEecdBqgDrT",
  "key26": "4DZ3ie5Ktfq6AvUfryfGQK1mERUGRDNrezxjnu4oTnsvZbqUmyHn4mdnUgA3jgKeivMeM7Vt24qMmo5AD28VBpbD",
  "key27": "z6miGGoebopeajbthBht5KweJqNYA6YbJfLXUqwC82TTkQYkzg4xqAiJsBykXNmEjfYbT7aBiXP5Vnf88j5FeLV",
  "key28": "CpTdESzd3dLWkqVy13rzES8AAzdKdWabtBN47EQGWjNPYLX9frYsrPiZojz24BYsmn6kVEiVYxaKrG6U6cnNFkZ",
  "key29": "28CbEZvvpCftcWbLWViLmqdqNgYeBUQy7Wi9Q2XCJj6rupUSUwQMaufuoYDEWrwRKM88fyVzhdLBsGba3fhi4v4x",
  "key30": "MHKapraQdeW2Yi3jkT9o6NvVQzAq31vzxqW8xD9Q3qJYs1R7T4j1j51hbD4Z5mARXsiVnGysmwsVs3RzuwnrKyB",
  "key31": "4d4KnVNQ6YBBrQDGmfLw5NHucNcu4pM5rDaPGgy57EVBUZciJp4D1Lif69SuwoDn59bpdvS3fVbDrZbz8GixQwQt",
  "key32": "3ys5bAAh5Lskucngv3LAwx1xGT6DX89119UWgDyMLsGKEPzRJ6mjm9xds2LEicxVZSQHPGrsL1s15dQ1WfqYrR9H",
  "key33": "5XLw4TBE3LiBKAgHV7Sa4XQdBnsMGwjfkpsZ3uZVsZ6kDNqNDGGKkiDMpeQQxgsgbkksdfScqR6Gbr3sK6DhaoAJ",
  "key34": "5qbhJzcJktRP96Ype45KgTivcqSx72du9cbPTTDn141TGVoLPFhWTjHC1GuEnU1AiU4iGJLn8Wvs8eVJ6u9k2DLH",
  "key35": "2wqRT7S8WCDCfuUmcbZyRXQMBGRrTT3nfApuB21MHHLTBkxzVKy38zXUv8roNAZQ91oWhbRFwGnrP4wtHj87FA7q",
  "key36": "65ziBR1NjjRRxSgwKaZFPWqvjDMTQyVm4eephWXdTcgf3pQMorEmbaUw4dbYUdnEcThEnVcdibz1xPhViiAy54xi",
  "key37": "5AwA4LcZ8gKmunRXL3vJvsHg4b2cHWyNrGZp7QcDoCihiLS9NVEydsVaxc3KiFfUdapKqiYqcpYG6wR5sb2SkPmc"
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
