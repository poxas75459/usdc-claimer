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
    "2NVbNEPgsd2cNzoSMSsg3XEsGsqWB6vwWtCTm71MzCyNhtpM5ffUKfDZcprwSTaUQtykjHfViS4sZKdJVGrZ5QhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hYSVYRncsBzak1Yi3jrBDCnhgGQwvkQ8so9MG4urajWkTJgsca77uu8kxqyoVd6Vxjcy5PWtSs1PWoCyy6A64Rx",
  "key1": "5TYfjTqsYjw6ipmef5JsubW7d432JSyL9czjk9RJCQfUbtVkxARu63YsSRBSmCQnWVjpF3kitPoUQPewXA8orD8m",
  "key2": "4hbCbNJvakiSchwe3sQEFUPut8uwDXb5cakWauceG1xSfFaYrM4jMBpzivo23rN7pw95XQLKYvAbhzof9GWkfqQP",
  "key3": "29Co7ZJFWuW2Mjx95QYfXaBU6v9sGPuqVkWKYC7BscDnRTWxoRNFfibDoSmMrCBmaBJ49seGYidkGHa74E3ugHdN",
  "key4": "54AqYd1CZDjgxTR2f73nQBPjBSyVbSF39bmSwmA3W57VZcvd7yc7kF4vsBBSb5R5qfPXJMbNgaQZQXghGvbFDL2b",
  "key5": "54bH61eLYzenoz4tKqoDjUkBm8TJSHuQua8sSpUKgUijP5GREsy9g5MUXwnce73D5xWTFNKB71FD51UiNotMT3Mk",
  "key6": "4HvNaXjFwtLG9xM32HocFf8vnkjariFCuF3bQKo3n2mZSMGdjRvAUdyN7nFxbAKnM7Vp8MeU61atqdDwL2TTpKpJ",
  "key7": "5gmaJdqoRGgAS4MnPAs7goqdWmW8uA8AX2MurFHCZTtrErM25jz4xiLBNJSXD6M1JDwpg2N5zCXdQqrqz7iMG4j6",
  "key8": "3jQ7WDLoKjsA32tADhxN3E7yHT16NQrDNg8MMRRU12nUywtzb9TEYerm9P9b6fLnbmKFT4kRT1smWjbdBz1M19uZ",
  "key9": "JE3TK18KgRqVSxbXjACv9FJQ9JXczLogLGvkzxbhHHRZVbf8TCKHzpsx5W2Tcm47LZFHwxssA9sHiLJXec29nee",
  "key10": "2p1hY1TicVQodezZg95yJuxiwFRMfCCeD5EfxQs4BL1crWNahpKe64cYApsiSLW57dPNJt3Kokk6qihHZ2gkEivi",
  "key11": "4CQgBPaSFpi9LBRMfeZtDDDGvbVvzKfLxmrLKfcsPe4wjuERZaSgtTzicCMXBkPZZTNjwuknkiN8TEKPsZtqGbi2",
  "key12": "5TKAqRmvA2Fmv478aPEA3ptoGuMtU8gFb7DQScq3cJRqrcgC5o2KhXmAsbALBu6rGB39SLo7XtNEp5fGpk2iQdaG",
  "key13": "2GvNZB12airGPVzUHcAxAcEELH4ZejFzbv8J6gApsj3esr7ekwqJmR1XLhHJWTzTtqcd9wR5efLTuKsyHaMxjRxK",
  "key14": "vanYiRCbihspAF1WNzTqYnpWHy16ue5EcpQPEFaX6eKQzrTLmNm9NvHLKHPNiJSbX5AGyECNnX13Luj9WGDcwG8",
  "key15": "5WA9f47cDaMPyFy44m8kb1ci2ykRFvK8547kaao4jr41ATCm9MewtafCqbk7SwEce6emCpdXJweBAhsuoFtodQHE",
  "key16": "5aTP3oFZxQ94Z9etKD7eSf9YzH2VsdfTQQJ85dfXmRwinw5u5wUUAuuzytSLWyayUHLJP4QfVZVCRsERNwJuHcNt",
  "key17": "2P9cyBd6o6HWptpDoxp9CUSgaRp8BQHpjdkzFvBny6LLWytxh3V6YCS7AKc7iLJEGbEiRqv8j3rbBwPmw5UAK2mQ",
  "key18": "brsRpF5VHhe3eBsNG9Gw4ASH4ukCqeUso41KH4ACmXoLnDJ4S7G3q4vQrC3KzFa3xsza56KUpxQvpwvb1J2tVZc",
  "key19": "5Dcc9fw8k1P2J2s8yGoNK5Ey3GCsGxnAaBhSNdfe1fgtntxzBrDxkE7Vscm1hpXfXN76NUMZwp21ACXaZkrEXJuj",
  "key20": "36D9P67brTtT93KDVXQ28jBurrVHhukhZgX14XjFpsBFtjuRytfiYMkUW9RJt3gysGt7mGPVrMQtAKDsy8zpGzzh",
  "key21": "4GE5MJxD1N8fKYnLvayhgncBzDXKaA6JJpCPciAqvDEMogYrwtdcycJWR48sapLDhXvqxcR3XmdoXdzHXzfqUay9",
  "key22": "61YRpqwkZ3QoE2hkabiL53MqULUyT65XZ9Y1ZjCzQQwxzRXcY5VYDUAdZF2Fp9XWeUM5XaezrNsZxawjCVaTDTin",
  "key23": "4VwS4Z7GUVvVnBDLKxV3JfnRXxKChELXVJSYfv1XWGC7NT3EA15hosbf7FUg5jxYxCXmpLkHDuvtexJ33QxLVX75",
  "key24": "tJouFsZML6pYxVziZqRTAD5wfyzx99QdPn8EHRt7NegmycJ5nEcLR7PLvGH955pvXxygbUx52kXLRyKCwzEvPmU",
  "key25": "5edWB6hdX5648s5XEC18SZtYV2ntQXkxTrzvh6Rgmf6JqyjtscoYZbJBxspRA9BNXNfdEz9ypFWixR8hwMKBZT4H",
  "key26": "3nc93ksPbwReXVX3gsicrQaaWY5HARFhUoxguJBCrdqqFzGWBGbvKhKLYXnN1Wjz6ganQW16dg3TqfsgqK22ALcE",
  "key27": "67obFJvNJys8PfrBVTw641yjiimfyoHSJa5cm8Bd54tsqDPk8aKupR7d7n2V1AmGPycxJskaqmb5HGu51pTVfPLX",
  "key28": "4fYTeYnScX2Wci7JKBSS4nDg4ZLrS4pBi2TZxSyW1p6i1eJ4AQcumL1FLjymB8ezoJtZRj9c6otae6JgeLbeRdnN",
  "key29": "313nsvzZc859PtKrwXe2cJBaz9tpNEhPkn9Fta9kBHBsTvtk3qUGUbzLtTwcztjMnrntp36aM4u2Md7YqguHuBHP",
  "key30": "2q2PLTFNHTD88ou6qEddyBUznp9xqo3W1CcozHBSbHDPnxVszhyVschMq5HwA5rMPDnr3hn4t2dmvSrXXVWnigNB",
  "key31": "4gYoBAhEt1n63o8GCDM9Dyqk7jE4yM1UpMEXnaeCZSrVZqhaCLDJ3MZmr1k9f2ze6h7YfdX47TFptx81sUwi3fZp",
  "key32": "65k7vdktmucKBEjJsqRtuHrWCYXeavCuyCG7BpVVikshNgQ3AFNMFP9JWgCdDh6mvPTg81Z8Ldsu8cNpbnRTmBmm",
  "key33": "4n9EFpHqcRLndkvUQy4dG2eZtnvunyL12nHBv86T5nzNT8MaXchtUk1ZLXey4Xwh63RjXmp4Kme1qpJZ69kHDMQ6"
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
