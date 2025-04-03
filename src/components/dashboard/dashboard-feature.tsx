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
    "5quzy3MPiggHzSsq559UgrKKYm7vFv6B563UJkTvRVCn77o74v5HBYBnMuXqrXeSrxqRzLFjjhvk2oPdnjzhKGr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uo2iWpMRbycntdVFNJNcn7s3o2PmQLsAT5Kxg3Nfs4rJwx7x6GrhA14QQ7csdFiVAzLiGw4amm2CxUSxnkLKbrM",
  "key1": "2p4mxR176kio6LhLGtnYThCrGszTKmS3EioMRjdt8E8UYEMLnvNbd393j77VTXvwaYkLCNpX1bXE31FS3M9M4cWU",
  "key2": "2iQDVFaVZLX7TrpoVTUU3PCtquAbDp9Mga6iXu4dD59aob6afEjbxMq8xcNDYtReGxMD1vKjYT2YxgYa1NubFA8V",
  "key3": "23KgCDd9VZFbLVdDQbiBjtJGWJTJBB4rAQfoYtgiaEumhjtcUx4faH59TUsKqDZce6ozMHkEKZs7NENnjD84Czm5",
  "key4": "2iBbWzcvpqJpPCG63dicSZBm5Hi7joiKbG4b5FWiLqCswDtQ8PUXVTthP1ERRtSeAgSY9TSoaAWWiAfR5y8iktD5",
  "key5": "2XjLB5qKKP3smVsC2qNRLn48M2RskxxTw8k9NEmw9VJgPwoJbjugMf1JBUJfPCHu7nbaGgQtmnikCoDThVu95YvY",
  "key6": "44kvFSwqckPhVUA79uGwFqPjKSWnAZZqo9Sqofv9JTsrfqiRMMoc97Cyr2CUFPFegp71qhzu66oAvLGnY5SRMfhH",
  "key7": "4BVhdWpoM9dAfPMrUvBqvZ6dtKPBS6WKjttnwNTGMqGqJLVwYPkUBRQ2ksdzukohPfYYheCzbCWr2Tw2h4a6tEZZ",
  "key8": "2vqFqUX2CVthRT1X4k7P8BkWaHbu6u6YqusM926tQepkS1pSVNzgSFqqAYMMZejeLyLeiCWxJaTemqzkzeYiL1XT",
  "key9": "4KMYEp3MiXVzukHNESwYFy5oLQ64bWcNgZpjf1kk4kWX7DMe2DnfV4MqHnMcQ9H8dVssrt1SEyGBxfeFmMu3UdDa",
  "key10": "57aoghTW4Sk6x3HPyGgmP2Zjm22FiuhJPNfgKMDGyVN62UpADA68tPx1Y3ZtvoDjM4tjBQ2zEXFMHLHPjGCta7mF",
  "key11": "34krtLvoQwzhZCCCrMW8Ctz8CBF8oSsDr258GNUkD8uvJrbKScA3DzLvY8YAZUz9QiKATxwU64RuU8S6H8zWzraA",
  "key12": "3Q5KkJdU7WrXtfYkvTPNRW9jvTpqjubvCN4FzqXdSerVM7aFu3ppQ3GvfYnxo3hjV1S4WADgab9mEwd4qqj8CGn1",
  "key13": "3MP5vyqBnGtbqTSUsX4TvUCkEq9WEfAwdiZaReGnGamnEyJ17KSXnStymg9Q6WErvoeSvN8iCP8Z8aztsG9t31Vn",
  "key14": "4ED55QV2wg86WxRnnUeXNHwwiCd7iZBEwojFQXLm1s21fbf9MgyAkaCAWxX5Ar4aDeZiqrM9ss98DAsr7pASb74T",
  "key15": "5yheLZLcakWwjuohWU48kon6DcGSqMBinkrFtKJv9UzHFPpPBUihcyLMUnUgfBcicr8UgrKvuG9uZnwe9ArpmmS6",
  "key16": "3uo7a5GxprKtv2kQzWpsMG7uKDxvGpUXfAPwJoAxUvhxPeRcRLYtJeaoHPGaA8n1jMdXxJDUsMZDuvK3xwbuzwti",
  "key17": "2wm77u9VCLKNV3Y5nfX89PC2nsHAff6CvynKEbP68YV74gTjLDsw133eyTprfbK4U1hYZcYQxNFchGmpxze94UA2",
  "key18": "MrnpwecJpb8R6cxdvtVLwkpKRd3xFnPyXx3We6G3KRsgLn6jBBFBMKQtQ3e44xGpbYQh2X2X4Q2QFrkcFEt3Mqs",
  "key19": "5SkxfghU4c8ZtiFtcoKdauKbpxqKWdevZ6a9B1PiiozoCFRoDT2QEyiNqTPiPxm5qmZVLQMmJR2TcDh8Vsijhb3W",
  "key20": "4deZm4HsYvidFNrwc4vncmTV6a1oHoZ8RCgyVq5rqqYzkAuyxfQYbkDmJu2Xx68AkGUviSHmXPVxoJxhc8S3Sn7u",
  "key21": "2NmnBQGyPX3ffq58nZxkLywaacDfqFQZEjdQSD6FANoDibrGyiDbpDYn4S6578XPRwGfRKSLomLpbFDixrMULyHe",
  "key22": "4q57kozg5TTH9jEQPGyoADfFZMdqjSzAmPCxn7vnurdyeReTreEv8qbgqh3CZCRc4a36eiqc4xvMWT5YootWVyLS",
  "key23": "V7VS5cQmJwaGELn86ADaTBKFiNgSD9Wtj86wqC4PDehvTmkqd82pyNuTpJAS9Z5pamPa7MkLnz4mchjoUik2Zz8",
  "key24": "5Nmr1mGaEBtz2ccrRkPaL4S9ZKCn9omy7Edb3kY4o5psjfgZa51SSAHpq57t6jvreeBgs9n46s5o7x5gFNRUNFxD",
  "key25": "52C2KQuXpuRGx6NGzVFvEoV4sRFNsKMNRTVuaC8cfLBNAwJd6gJpgjP5gxJC58KDGx1dxKVVDdEmmSNtYhirUDfq",
  "key26": "3jEicheso9amAU1aYAXzELViSoH3qYHYxvhmVACve4xz71XWVZScon1kNCJ28RADUJvPCerwffQCsdXwapyNhCwQ",
  "key27": "5Hh6XrMi9FaptNgAMVb7kX7obFS95p4tfYvBRoRUZvshF84Ex34pv9emvbWQGLcS6pfCo2r647mpCBqxXgpD5msD",
  "key28": "2r6gEn3djKQW3S99Bihfg3BWswa8xsZcGc8w1sB9teKXULordjkzufBKzUKsxRmo7X75jaQ6wmSBLNBBrmu4hrkc",
  "key29": "46q8cTbGnNcT1AmCiaHU8ue5tHoTEYsySzzB1WjHj8AkxN7XwA8hP9LUD2ZcKYc6dWfFwVQm77Re92uGekJJBWbj",
  "key30": "3b2YRhmTuxkLHLkxSxhDouHD6rn7btvw5Cu2XDPcF5ERH1DMkCHG5Zpq75HMTmScSRXXuY3mr3JHjpwp1w32K2BY",
  "key31": "3YmY8bZwFErEcy9tnPnR3AoCLnoB8spovhHeeFBu99pquLWQGc2Gv86hJ6oaR2RM9tJm6DT6UhBNeSHckbPdBe6W",
  "key32": "37ZohQznvLxDt77iXvgTKaBvYQG5uAUrQ9jGsnBM7isU9tqrwJQGwBQYEbHEzeGfjq9fvjqFAiV2QuvoibSdJzxA",
  "key33": "3SWA7B878K7d8iULGMXy2XqjCkoYu4bSxwBd5UbyEAXw4QQKZW3BXMe6AY1eQPLdakLeT3aHbL7613PpFWmJk4QG",
  "key34": "44vvHa3rwc8pEF8FZPgnHvHYatxMTuwkCriqFbyx8AJbAbcpuBD61qjXhiVg2TbJV34J5CAsaxKs98fArUtpvJzR",
  "key35": "53NqKSq6m5ipbC4e5HWMSm6Ug4HbhuUkhrcFDTEHpEnK4xFDr6bfcJZDNFmTzp8oBhNertw75GzcYJyqUPG2SUoq",
  "key36": "4hWFaT4iDj5KhVCYx6ADAGy19E9eyNHm188XFPkJmHtTW46WAMpVKouUEKbiQuMvcVUpHT5dBZGUwKYQ4NsF6x8w",
  "key37": "51nPxE5htHFu9bHRHCbqRsL3HjzFjUCus8PFGk7a739PHE5Y7kzrwxpeHPKCJT7jpJo8SyHuHnhrRQRH5gFSQ9Hv",
  "key38": "2GH6zUC9C9WBYhVLY7pMarxv57CLUjwDCSMqdd7tMfy4LdAc6oEu72FHwv8JYan9MSBHeFqo7XAzbEWEFhJFG1b3",
  "key39": "2hPSqJatofdea2CKQBA9puVAAHrz5FkfN418c1Pb4VXhESTUNXUXn3eKG5UzCMiXcUrRUZGDv2P35SPk9cJqYFC1",
  "key40": "2HUR8uQDkrvnTpZideerDNYc5PNpH7GVBYtNu1i3qEtmHuziPbokJnNbkyYGKfqbh1UBjnupzZCrDzHmLkzvUD9k",
  "key41": "2sK7aCAoDXDFUNb7gErUN5cH4GqfardSvPvkudbw3bdPzkr3vQo25VCLVtF3fn4atd2vprBnMTDgQ1gwuPqEW9nV",
  "key42": "5onsGqimKNjCu3SVqJUj6kkihdedVAdb3qa9vbuBk8HKw1JAsoyQYYnGqLnQE7etj4DfqBcmH1AUNUrZ9XyaQXnu",
  "key43": "4sG6P9YUhHyNtjxiVS8x84qii6gKoRfHpPtShFSdPPGcNTURUqS4MYijFHV2otVqM1SLCRDLRKHu5FCZaoGNpAt",
  "key44": "4HHoRjiSJonZ2xGu7YMYmrq8JSeWqWT3bhQJh8rHANaeAPTHLu7sUz5M5cXCTpcy29H5L4c5BJT4QCvHi9XNGSKL",
  "key45": "4Bpm8knmgSrsczA6qoK6Esg9HAbhv2pd9XGc6fnTEDU4f1Ek59vDjoWR3Pgwgi2eTYzdLNBLXTGYCsLcxS3nvdGj"
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
