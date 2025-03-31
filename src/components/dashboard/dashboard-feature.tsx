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
    "oJaocmrLr6VV68vQxfVvrz48CR3YKXqTJgvfktgYcm4HJ4reNevrF8RJx2Er7q2tK3XBdv4uQkUs5HTTHNu3we2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nu8Lgd7vpskc6QLeWaeDxwHkDvxwy1ojwJRmyyU8WshFQd4NHwKtLSMQDuX7EMqmZidzTNYEbK3uXmnn9SXkyTz",
  "key1": "4u7vBNCVJMgJDSrE73hfQWw3Kpqw3vHHggxvRCYVzHCZSvPAkfyZpqJidFkW6H82agswoE26xRLLsmaDqFAsph7J",
  "key2": "7PtYcPU9ziTbAZpLEA8e8jVpqZjqutUh7E4SpJFedrTUtEuRQRkkMx9n9VacJkc6tr8wGMoo5HwoMfN57APWbne",
  "key3": "5dSsVpU84TMBd7GJt8ZQCqY4tGqTio5Wa7BKKhbfJDntPRVUpFzftMb8CDLCES718p7EgaEkWFPCVHyRKnsSA8PE",
  "key4": "5z8UWKhTEHwz5QFuHNWedwK9SSEHyq5XxM7WRfFGkmUDcY2eWdAVZgXgEtsTV3Bhf7RAerxDhdTKq6KTn2vS9aqg",
  "key5": "3E3Qfh82KME7PdYHhPq99DiXg8jAGvKo4QJdGS1qb8tPXuZqmD6UzxcEhweE1BMakhJEiDg2iZRxYZtnhfnUyHcn",
  "key6": "7XT4j53BuFv45BPnWBobC99E3N6Ck3cvLZq7zDQfmavjMsMD3SovL9hnyrjWDKK5c2pAK3WZNwM5gzudLpY6vGc",
  "key7": "5Vn7NuPicgVDX8xWGixj3DmqHECqTNk38RYp1cSCTyNUt8poqZehgcoFYf5vDR3nwWQDY5VjRcw34L14a4qyp8fg",
  "key8": "3SQP1GU8ax5y2BybDNKKJkett8Whe5upqcmDFCjrNJQws4TmF2tWEABXre22Perrx17qZtQzetoy35DeJdvxXxKV",
  "key9": "3s8KKc7B2caeBFr6SL4nSzakgJzbZpjnPcY7KYGW63oNFpgUx1gcyGv3ubohoobsER91nM2dkBqzcgzwJ3jQyqZC",
  "key10": "3fcYitv3s5NfKyKwgdR7dPLEeirJ7t5LNrA47EAWa4DWmXNCdXTvWPqCiMsktLS2cVbxNqi4e7xXNdgLpE5j2nyc",
  "key11": "5MwTdqDBSXMa8F4LmaZkoZk5kH3gNnPAMht9b5ZvwVYhet2u43Po8mhmAVpurHrzccSf62SGM3Ny42hsnL7vVfoz",
  "key12": "p9N56WZ84E3JhCeNs9yvQKTvWqnifuCtAS5LM9KWhJN5RFHxD55ob7jj66A87gMvw6fz3oYCFdQKT4gWcRbZ15X",
  "key13": "u8bWARHzcJXajD5QBhrn9oxkqFZt2L1kuJ8GyszFofypPmp3Age7EVekB317pCJ7wV4CHkRVoyKibYwByeCu6yY",
  "key14": "92JsAerup7AnkmDongdqk6H7qeu3JKCvtyz9hyvGCfTkyXXW5XKGBs8EXdjpphG7VHL8EsREHhvBXd6ReVjTvfk",
  "key15": "1fbJ1b9ZY7GjnWEp9YkSgxYovdooqjiyWp1SFcBGjbwR4sQUqnRN8bPMdFp4kxuinzWWnUvMf1J51nXy9e7diNA",
  "key16": "5LsYQG3MpPZsZW6beQAG1beT29upaLxSFLAYfgLNDfz5e5PhfZXWJwaR2kQNPxyT6Q4wQxNqGqmGwjG2QR4UMVk8",
  "key17": "5pSsWsL3Pq2UZzNYYLe7qic7B1hXNTH1RhjrDr6cm8PHhA3QHRn8by1M7jYZDgHCd1ryT8Tckrg5H8oqQeywSLEp",
  "key18": "UrwW5X5Gyy1KiSP7sEb2RTKBS5nvKZ6z7sXG72JSstpuD16vdvTWJuv7GLpQpKnQKpXX2jL6bzr3yH8aPvmQCFS",
  "key19": "3NeknYpJisCcs1Qv2dKPkparrttRTQkjHn2JgZJDLWpN3NKKEMnngguLksfgvtpk7oxg3GWK8EbkBvXL14VnyQSP",
  "key20": "2hVq7VG9FKiMaaXFrJc8Le3uGRW8bivRGe5Y75tqvcmwjBVZGrw5JrWf9XjXv4JwpFq4Lyp5qkhcooqxd8U2z1wS",
  "key21": "4iVUH4ZFHNjy7FjbhYUqNN6AJJX3k4JxDChyWkWW222mbSS9jSwFhEpEYhVQQrtrqyhZTMSa6tvChyXkgw8TiCQb",
  "key22": "23fg8d7FmejAiJLiLKkN35iF5sPAcp3imRWMgZoaV8soTFycJYfv4skLFrTdn6BgojN4riA81LovXLf228s5mzVt",
  "key23": "2Vu4bgRtvy6nw1uejc13RUWZxsDVS1ymEVVnfXzDqxKc7hRCkvRdHg8oL7qvBMEomNU4jMBT9x6vKLqHPnykWVUs",
  "key24": "5dGCoRY5ZUc4w9WaBj1sUkabbJBxjpo5wMD9C2ptrPh9Tso89yVyyE7E2LdVoGrrkBaWBxHCCcKZKcUFLpBS6KH8",
  "key25": "XSuXXfUzmS6aPUDSXPuNeKwPaiBxWSbDL7vPZ5FqfQZWzw4McuzCKBBjiCBVWiYhTNXb9TU626E3pmxVfXQRP31",
  "key26": "Gq3KL1sVLDoEJXu2FfpwQGHV6bi2ggUPqvLEpSjW87BEzd96sbqi9U1YbWzp7oHq5cnwJ4pGoBaVv9QKaApqMf6",
  "key27": "4LHfSwnDTbADPY5T8PWMHZHNXfD47xaeqZqSnEpY1Fv7wGG43o4U3xTQGw1BDYUewRZr6C5rruJJEraWYFx8nbrV",
  "key28": "2yGjrxw8hqxwGxSgZTjFU1hs77xAxip5FB3BFsgz2WNC375kn5gbjdyok55S5wdzKdp6sKV7QoVhzhPkUdBtiETm",
  "key29": "2XxpFDEBaTKVqi83V2qwxfEuVoXwKjBmqkrPSXVcBqy6WwMVA5L6sZasXMN8sVV6QxaKCgTq5x9EHDaA61roqc51",
  "key30": "5orGTgV1NZXus9uTApz56qjc75h3397ZQwm1z6jkitq8drepez9wLmqTVmHbz4UuNXdDRpKUy3QzAoevpsH3oQy7",
  "key31": "4cmCHrYkqi1fDeN7fQGxKS8jhBiT6VNn9mdUQmn22M2gCWCmgLcWVexsWzFQKrDNHxCsVQwxEUTqHk5YZARYwVxD",
  "key32": "4kj3xmvd52uHSFHjVMigzWtDVuMWaNB9Ex8KnVA8m6sAwFZnndpVEBuRt4AWMFLJeqBGUb6n8ByG89TKbvkgM4wq",
  "key33": "3MxBTEextshW5u5bwb8LyXn1Jz1YmhRqz8pGAeuTqzzhwvpWd3RNBN7WRM7HmchFXmJSjDVLNCRjMsiCBL1jiJA8",
  "key34": "5fwvDE9ENypp1uaMSCUjtmEJyfQUBDTaWF7uisBfjxZtRnNHkmqSaRh5ZvGDxL31GBZZb4R8GwDuKToJ4ygpFv4R",
  "key35": "58faCt3Syr2Ptekqn13c6pVRkgKuJU1ANJEVSLxT4u3vcAVazsCYyRtHk1drrgBNxqygJ6ZvrpP3fB6h2LoMVCCD",
  "key36": "3XF3rBgqgQrLGVJPr4Sv1MGSJLtYjud86DEQsvLAp4CGCJM1gy7mmJCZfZBLNo6ESTpnjTxCRkjAV9BawcWh1gYz"
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
