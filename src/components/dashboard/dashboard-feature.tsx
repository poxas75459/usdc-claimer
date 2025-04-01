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
    "4cf9xUgg4gs7KhSus6FRJqnnVBzHDt9wCfdNxvuKUkrrQrkbQnpVXMmsPxtrJr2KVa4N8XMdZ4EVCjcXFUwVPpFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S9Ho5irMbRpCx688pGxHbARX3XCoGRgPGZtw6PLdESMCLy3eyPGCCit4YWUiAWMhc1tY3ghJkKLoZEgs5ZMd9em",
  "key1": "58HLeGyM3pnmPodm4H4eXAeDVSGWb1zAAHgsyrwgRqiotiAsngkttmWaRdw2YWWQ5YPeLZGNmFZLFwks5z6ak7tj",
  "key2": "bsyzjD7fCfoVgr3tHyyDMduxCHfjrdGivid3HUa3kTLgzphLQYScS8U1fzrojmZKCDnkJdLjobqbBTboeGSuuyK",
  "key3": "3ZK6QGnuLaoSSk7PQWXEYBckVxxhLWQ61Ftga2mshgCEqKqYxotWxybfEFUnXzchmGDVmLpk8SXCnPKwSmDnCnRj",
  "key4": "5YGeUrVEhz1iJUpK22VyosqmXVNiJuH8QFuZNE286s61hjrTXMmYzVJ2KJA1y7VaosaepMi9kYJHxVmbY2cjHcuy",
  "key5": "5rBUsMfgTbpNVcMUrBiuNRb3ty4PotrxnaPuqRK3DezN8Lvt7bEZL2Wjt2NHNQZ6aayFoWHHojPBVZY2KSZrYiWu",
  "key6": "5JddGXKZ3HJVqTE1369NkCiiFVbs7Nb2BDK8ffhBUKL6PSsKd7nHMNcjN132kZ3zY4eoAnshEgiETzeXzY4oAtZk",
  "key7": "4EvNhFKTSMGS6xC4snEtboUi1b5TXsAZDWKZvgTzoszgMJaZF94FMCugh1QmmRgYzxCHSzr4Zay8LYdF3B45baic",
  "key8": "2w1DvcY1o3JeYb9YRGcdQ1cQopatXoNp25513raSfWSQ9o6v4XbDEYXnwzfypc57NEWMvePekX2T169Nf65yp3Fx",
  "key9": "39iKipQqDvniG4x19KAADM6EJ3m7Vha9XkXVsV8q1r7P9va6a1Cq8jPsPuHPujZSLsATBtuCuVX8bamVthx7Hpe8",
  "key10": "54z27N2ynJCyVX7gWkeZ2P56koCgRBfAWJEd4zna1c47K3QYMu2zNyoHonh736D97NghJpYGGpSqzrEb4Jts9d5U",
  "key11": "3AhhRZNWy1MjbUEqFuWh9AJ4veZg9jzxzchD2MSequj1wwDC2ayNjVr7vsntUbKSfoVJwuWmfzntZMopWDcFdTpt",
  "key12": "3okuj4TDWK9AnhcPcGWf4otR42yMx84rrh9Hf2uwdgiaWjQwXxUfYyK5BGYf3z3baZLqrj6dbudJ2TwPMozZpPou",
  "key13": "3HRDMDLowsJCYQik6NYbp27gZt7VhiYWe6S2EQycRK64uupQ1YU6SSGnH9mdo5Y1h9mSazbYqvpEBb5Z3wMCTMg8",
  "key14": "5uisZR4VfgaAHy6usH9dfMy7FW4QE5FzCbegWbxrD8Sptg4VGG7CBtxfTBQrj1Lck9PyC1iXLWJYPYK516Cr2NMn",
  "key15": "2622xt9Fw3FWwqU7QsA5s5HEZrvUxRu33stRWLP5LnS6wrsvpLunFPWnwGFxR9muc37G4SANB5zRLgQiHjcpNFgV",
  "key16": "2bFJcumVcwsLUWwsxJrbDaj1FgW7JYY8XdfnAdCQC2FcGTzkciia1YmN6GiWGyZduy7HPJfGobsJNcAPV51zhACH",
  "key17": "63gLqja9GDrhTiJxR6ZHrWwqTZFPpZA22xmpn8BA2pw417tr6dU1dCE4K1y63d3wdT7JyfEVs853N5LwpPRUdqAR",
  "key18": "4jEX5ynaMVJEpdfqCSAaiMGZG5xYc1Y82Q8S82aPFYjboWkerBMPv7GcXyoEE1QfFsDobTaG3QbAKcgHGUuupne9",
  "key19": "4ukRDpbbnWYgft2sVwVGduSty3G9dBuDUBrMyFezZJPQUsXBeQFoBroGzF6DuHQg8NhZyzBcKPhMgEMqjxAL8iqK",
  "key20": "3eomzsB5MZ1svBE3EPvAZuXf7F7SgzCJtUNyb1WKGPMhygr9d2qK1M6YjP2pAsLmC4cZfz9C9C4sspxD3gMUi9yk",
  "key21": "4tfp79Skx5CiiDFKCMhuEN7AqxpE9wS3vMKbArGeGyw5ZHuujK8KSSQd3xYApHZ8v3pmTdN9NR686pm4QMuhvafp",
  "key22": "65kX3wJtTtJJn35pfNpKu1JCVgYEb1GqA5rrjNF1A3Xv5h1YVHhiTNtJ1zhg8CdhY8GBwiGbrHdn2ZF7ikvGMvhT",
  "key23": "4G9a2e8U24jQpb8Gy3ZGQZj8zQ5s73r5jfyWFMiFhHDkHvZe2r9TLEGFPwVRVymZBQ1WkNXKQQLi3dYLQ8TcbR25",
  "key24": "3LosBMXYfSrQzTUtybBJ1fsJ4VSLXexKDYgHbg1WaHQ1pWy6FVTDGB6qqVbvsc3CuqrPsgadqSHF2iDiqjDhunEc",
  "key25": "3YMXiv6WTnVoF5SCT4vinFSx4W7LB3S4uKyuEs6V8LNjHkTWCrz5vu2Jn7KmGFfKJUAQsiY711XLunEbLc2qCg3B",
  "key26": "XAh5J876LAahp95Y4Ltp9kzvFngnhY4rM787NioC8VTbYPpb4NPxZrw7VQprypMd7qcPRsBkJQx54CzJiA7nTzu",
  "key27": "4VkfKNAnPRPzLYgUZwoVQLYNSjDHkvNBCj1N3hqfaE8hWqUtDBqowh95LaQG68CUuLMt6qLHnnhnPyiu4RhDnsm8",
  "key28": "3u7k53R95eWp6SGLaHm5uj5Ex3LhUoksp8Semrfg2MWGrdGFTZmQNpF8aZDNRVKepSZTz1LoG9ejnCoH66GRcBLA",
  "key29": "4juU2kTQSBEhcwM86fokPbVb6HpcZ1SvsFopimECVBQS1KArVwfqhppdxVRyS2MkBNi6ymLCxEExhGxVucSW28iq",
  "key30": "WiwVKw13sLgaGQRnGzWspqFPZDReY1dDJrv7qudZn5FHLVPn7NCGBZXw8BWXCFLqUxNT9u7ePVYMSJMzxYYVzS3",
  "key31": "4jS8BWKyvT3AwkhAmTEQKyzzFqK9BV8HubGQsGjnycUsrGMVFaCCnFHN3Pe2bpGZvpjyM6QbmvTiB7C1TCtU9EFN",
  "key32": "5GfopQSGNvsSMVdwG18jYrDwovyNQhuv7MkpocLWqvwGwckqRKKT62FffERrrcKqjDEMomqhrTcLjCGP4Ki8tcix",
  "key33": "3vBXsD5c1hqwDgYpPNeoJVF8jJyAPs6C4V3JK9782nz4SwPfKD8F2tkkDKLtT8BMxfiNGdNUV8LjffG1ETw781ts",
  "key34": "5Tu8MojDVvqyGzgdP327Y8RfTMBoCmHYoQ1XRsVtt9HwAjN1BsVSr4BR5WJwbt1TjpK7De8mxa1wedGoiw2LZQ4a",
  "key35": "5AEFwFkazMmQeDmvLaJZH2mUgMbaRPERAo8z9LGNxvQsaeeUnAqCTw7NmbVT75Yr2ovLTcUDM5yPHHGh3kH3PmFH",
  "key36": "2nt6ysFCPA6feZfwJDr2qCAxFopswjanVsRX6ytd3pFGq9vXAncmVyUYPPkKHc7QCKGC99QgcinBnd2tCTTnBzaA",
  "key37": "3JMuwWXUysq5VSu2k8r5wWpJ4nSiyguu3LXt1iiNi8tTVhcNB9F5k9Q7Q32ubkVuLfR7uM1JYy4rKyWTnL1ZLzDW",
  "key38": "231sBZ89NiX6zpdDgHhZx26idqenQAtt527WzYAWiLL32EoYr31uyNX5X81fGsa3pJnbBPubjYmrjRkiX9nXiLYA",
  "key39": "3QXKH61UPyqnvmyZnHpQt9h6eEnh8LsUvgH4QxaNvDwraR2dPinrZJR7GBSm1GDvhpxmGdt6KdZGRSSdbGG8Ew7h"
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
