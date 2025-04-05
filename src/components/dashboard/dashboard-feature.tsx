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
    "fPZ5xb9tnDgJwYYTrSnQNnDWospQ6yyNbssvFXYR2tcyi5maWsC3U7cRTuY8HDACrWQcky72znu31EhdoCP4c2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VxF4bXff4CXY2NKNwrEsKvaQiBi3SNE4C3zWLuMV1BY282bRqdpQegGqCqh1kqSEXQ4ESrQKh1FwyuRa2sQNpTe",
  "key1": "21QXXrE2GvuHEaSTCFD8CSjAo5dLE8zTE59htryxUkCrYwHX3zxJDaprhG1L79Fe6Y2rDUPJ5uvVxjt4CMo2UzrM",
  "key2": "3zA8ht8isD8z1fgiMBWRFhBSzvczTxmmTsPRxkrDUhb6WaJJkkD7segtMofYE9zRtgDpCoeLRRcjsrtvDdHaAyCZ",
  "key3": "4ZSWuDzz3sUgjJirSpbSvBWz4kPG8v7Bav1iDUGTUfLXwbFAX1rCgpfTDoVovMDi7aWuc6Tr2FToBtUNDeEMvodW",
  "key4": "21MdKxVz7khYULwfeta7WRPTQZpqRJthex6knKsh1epX4kZRujhmJm7kg8RT1N3hSGTqAHuL9LhxQ43bRaLR9tpy",
  "key5": "4mYVrmxShEnga3wx6zFkkaXZYevhTu8ZT2Eg2hC6bdZwDppyWpUaQQ8kzF2WuUCQW897ua5wHrR3xqd4nqndqKD2",
  "key6": "PKGoNeN2noLDquCrgLxUYpuypYePzNkDWBkMQMZJcja9U2iKMP9cks4MxMe9ZCmSGesEtMrYbDfR85pCbm1PLhV",
  "key7": "H5dnd2xrxPmNdkuuFWoPnMA23VyBSVF3t5gGUuu1o7NyYhtmix6D3kEZw7ba1hsRKeoLKwiJaUtPnBTgnrWDTsC",
  "key8": "5qfk1W9qguCH4R3njTUTrJCENpudizphJ9T1P9snkbaMoyu2nojPfLeo46xkroRaVaGFYSsQ55kAiiT385ALy3bS",
  "key9": "J2PuA57jqiSsECcnqJ5EkeqnqTFHyLVG7PKnKgRN1aQ7WqkncNumaouXoXnQQKbpPs9zDSsvA2N9F9VNxvd8UGR",
  "key10": "2SiE8okMtSmVdEF4a733fQ5e4B7qA7FqQ81xFE1N7aFvt5vHXrGPLGdSJ4ZB3GwqwpeREMgTWVueS9Uv8tR8PNES",
  "key11": "rXtTwb3r3RiouguLbUpq6uboK8VN5EgTnwYegkcSfsqERy6dzTBufeMd1Mcg5WqrAHW9svQqwRiHuPN2HMtUwTZ",
  "key12": "5oEP8s6G789aptApf59oFmxkgpdXiPna7NxKHE27HCvm9mh9EsrN9FAXL4tjHxxsUJub4oSrB6hmf5uhv4aFA1qN",
  "key13": "3DFoMxKW5Jzt7Be1wytgS9N41CeeKHB1goLRiYUrN5fRF2e1ET2ak2GGdD2gFDxkPsxgpBuA1MYVXaserASbQqdo",
  "key14": "gkYL9iy1sQReqDwWdGJkgjHh3hnuUu5SGg2AwwcWkpdhE6e9bjEw6EzoyNET2mR5g4yi5ww35cdaEauSKsFF8WX",
  "key15": "4wr2ctb89jF64P5cXBoum41dM23WZC6tV4qywNkqYg2mJVwQbp43wiKMtdyx7qWmtxNykDcG958zDW7fMkDbSLfH",
  "key16": "3WyzmQY7E1aybk84wfosrwZnfCdLxdqdpq8pEkWwtJcGDeHnQB9fjYdjcrj91aSzuV7BppXLim54P9YmYUnD343d",
  "key17": "3X21FuSmeALuWPKPU4S1z8qPjztxHkJBETUEtK7RpkcsNMSi7hQBU6mXQvbrFcANs4VHUT26DsdfZEfLHgQ3PtjD",
  "key18": "5szUbD82tqW42Ee6gFeSTEeh27tAt4ww5ao7ibL6RBXPQbENWdM2Nhg49XRnFzhvUe6ZTUxkAUzKeFUWzHLAUpZX",
  "key19": "3u5KnwY6aYwQaDrn9XMpSiryFZ9xW4hysffoA5eFwHVHQRiuVGXRnLYb7gzJHEE8xSUWUzS7WhP5iShUVfQBA1Fg",
  "key20": "3EVFuazPoVpF5ZW9MuHdoHWvhydVH59uG7SRe37NiHkx9DoXgSxhBkahLkLDwBuvuwrfde1vRJwBpGaM9NnndzDC",
  "key21": "3fJMZffLhSBNkJUAa9PMhEuE4h9c7hotr7rrqLBNSn92LWYu1DnNPAmzpdxRLa1miFKfRBSyf3jB2ojGZcrzrZAG",
  "key22": "5FXWzVCzS771Je5qEWVH9oRfZecd9mqjARQ1YUWMVqGWdQW6j6gEotQeJXPPBt4nheKHL2ypWN6jQqwn1nKWUKf6",
  "key23": "46RyqtvTvRRf9DcyNrrWN2JRceF7J3jp15RcMu1x9LotJigXyvWn8JMrGfHhyX49m1xL4xZiDCnLWpHA8Pwyd3k9",
  "key24": "48UC6fQojh3nRj6Eri1Rgdk6gT9dibL4bPS8ckQxQqJqe9iNifnCqmsce1xrePa16shbTubwVEeHC6dF1qMT5Ewz",
  "key25": "3CnrMhkEAtGYpgDwBKcesvG1kucmnHYj3YKvwwQ3nR7h2LcTNM7n7dbc4XuAQXMb7vAg8q1qczYBdvGBgDmumVaA",
  "key26": "4ci4rdaRCZ4FVQuwwKg5EWZoZyBxfQHaTkH6TLLRT8tT3piHnCv9S1HjqfybXptHRA68eeWJxJQcsSrozoPbqP6L",
  "key27": "5h2GhoWRVFPSiAzWZLMYkyuVUANtUQC7A7RwUJ79iM7XkKJ4WkP5bENNN5vW1xbsVeZZgNw9A4vuS8Vpd8PZk8HB",
  "key28": "4DTML3XJEArRcsvTTJvseT2oM6pnmv53uV6aXqjoVqwnBbjYYgKDbm7HfKUhsNtPzBSxRD1ZKGHHAZ3HLsqDN3Se",
  "key29": "3TY2N9tVVKKz2p2E1RNFJe2XFKvzaSZeYcDmfpTzLK88MdQPKKwcZNZjZzf5EESdyVLMQpD3W3gQiMf9Y3knVWBQ",
  "key30": "5MFFifQ3Ux6vhz3TQqjEqj1anuo1uNmEs7u3GHPCMUNy6DJp86abKGBXdWFUL1HGufoTkWshCRAtLm1KZ9ZVboYS",
  "key31": "EUEbmckUv89uQQVoJM5JYo5nBLJui3F8AhG8XUJsh8Qv6x4u52mPZDE7caFU1iAAjGvfZ3DapXRUTJGMyvNeQFy",
  "key32": "5Pt9zNHc19bLtD7YCHAdR8Nc9tNugJSp7Xg1vBTk3dPjFLFbtVUoyrz1ZbUZFmbskaPC6nARybz6mbYABLxbmu4c",
  "key33": "3czu371LxYBY83t8TaLt187feNG8a9gfy1TJM5qrxpQ7FTkeED8nYodnRKDSxMX1fvereSKQLWWZZNzYqTHZ21L7",
  "key34": "63bLgGA9iWuCvck49aDW89RFJoeaTea3SpRW4QoYYdr95KBupADmNx4ConmS5Mg6yBFFUfJ8r7hzNhzUPVeN7oh3",
  "key35": "4eajwGv2tyDds9qtGrEDRvCg87kx5t5Rwnx7m6S2AZq1839moQtjofLsf9e1ZGgVn8WH3egg6oQQsxosXRVPzvmS",
  "key36": "2HQwy3AwmZbcncFh8K692CGzww47JMMpXQkAy1SFL6zE52g6NPA6SVjTT7VETKKFHW3aczD45DNNWqhaCoNPKxmT",
  "key37": "5V2i6eUmK5Y7e2umdzZ2hLqynjxXRoVvqGxiJKQ75jVopH3ZzR4QujmmHXGLxvFb4qz2tpGzPzqTDTHWVTPynic1",
  "key38": "2DLDzHbx3gUkyXiU59wi88Xen81LxPHTRJPmQz9M5sw8Z3k7A6AJqVUKiYoqAThK1uKcZ7U4nyp9RUJKmJjtDf5F",
  "key39": "62xdxVADVbJ1bhb9jWUT2Wjvyx85RqbsuAX1WiZX4vHZ75HAauZ1bxF7gwzt63tutnbi9tc2VqYvUko3xkHsaFoB",
  "key40": "4P3kg2xGpwYZ8h63WGy6XxxYA93SxsiC9ND2W9WFxanazwJ39inMehdPcHy77kZXge59faMse1sfCEE23VQKShdj",
  "key41": "8BAEJCEz63ZWPUc8dTZssFwedK1hdUXr6i6KAme26PyXMAxb8dWLpKRjEPN1poKusUkyRoY52d3ZCa79CY4CSPf",
  "key42": "kGVxkZYKC5813iFWsvZFYYr6tZVc1TwzoTHVW6MmsrxXoCzAbBETZjbfpMQ3qNVR54VEoxxwiBe1PVhbe2UjUwJ"
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
