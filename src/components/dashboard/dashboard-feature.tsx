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
    "528noZu6ouP6rhLshgfYeuGEJRMC1Kck745Rtu8pEsXXEvPjfiyWffFey7ZCxE3HCyr5ezKtvhCAFQeGJP2ydkHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k6Ysz3Y8hktFFV58LKndXcmc3CQrsLsYfmKcbKkr5V2F3txHM91w3TvYFLbAaP8AuxBWMdQcr9ZDkc7giubqv2d",
  "key1": "CP6fMadcubPPink4BviDguLo1LoSLwA4DXmGhu5YMT7AimwLLmzgJXu3Gh89g9nV8iisjRMsZTGcznT35ojmtpm",
  "key2": "2LZUZErTbQThPWUbFiEJq51EVQmXdrMZSvWz1wyeFWDTVxBgin1yCMCNbjxPTuR96axGG2dx1Usi1nhNUWUDvvpT",
  "key3": "oycTJ8YzBmKYXd6rtWzmynMGvFWX4iniJnXBfVsCQew1cu22pGJke2r3zocyCEfwZVjS9hGyNTmM5XbN5mz7Uxg",
  "key4": "5AnVUEdKhmF9ib6pVxKyB38DqG5dtvQHtBsYtVPAacZX9N5jMov6NjL1uou2TDThSnsHWfFwD1TfuvwDELVGWMpN",
  "key5": "3opnfZiZPYkXT7oUNQS3QiWdMfoikTszY77RatRuLNTZF8Kacvgu5AMkMPEnQfhxRozDQBG7J98gGyMRd7nkNiDV",
  "key6": "5uhpstKySi73Cb4ZFvHqYhW56Hb7g2a4uHAt9hu5fq2ag7uuAteRpKruJAxgNVwKbFypCApj6tERKW1roLMKpPSr",
  "key7": "4sqqigLFNBBoz8MmkwxZDMJ5cZcXbjYXgoxgFzqq8dMJvJ536eRMYytm5y5pMvov7QYHVY8LZXbLq7GxQitFLQcW",
  "key8": "nyRZxR3q92M8rUs4kaiTqWPCwBWF2NzdsX1x29XNVyRcMdYbGiz1EhVoiztgsGANF3XTdVezx458xae4oZjqGq9",
  "key9": "5u3Nnwwv66tbRrb1nEBRrGaGqpJH2seVaTynNPnHbZ8mGieTxPQHrZ8NGCT1K7h9gRVvNmDFPmZMdXpVSbBEtvau",
  "key10": "5DBHwRe1ui3frZKWbq1zcBiEf6jJPkkHGxLFdga8fWdfjrFrQCtk4gWP7csdKHS74MizTSRRiTCw8KnCAKAtyBk6",
  "key11": "2U6vFEvovLRW9VW2keEJbfJMeY4QcJ9Fdyn4RmtbSHB5vHLjMJrRfGa4Rm49aMSfZoHAR1Gv5T9zhUnVpFf4FjFp",
  "key12": "vyscK6hsfhi5iW2fznPABccpNyALcm91ovoKud6XSSrXQ3Y96QQGGG1kzE3tu732TgNPoQ98yRaYwqJWypzEyMC",
  "key13": "66zkimmc6D33PQQfsXYzWFccdBSC17fCrDYV6D3UtUugFQSKkXixdjLTbi3MaQkrQukofv1eYh53fPytp3tS8qJt",
  "key14": "MyYvS8ABEq3rSgT3Bojn4SPxiCeg6yx4q8it5rZzGK3sNjMB9nxs2vFm33CwXyocojaC8zq2rSykdFTz64V1nD8",
  "key15": "4ST5bZXFpQtc7umvvPHuSYvbxN2WK2vy3bXRmdeyqcwpT91jsGSccPUesXHi4ximiZvVi7j27z3MMCqWpfHf1Sqp",
  "key16": "4u81LViLdNjJ7Awsbschd54yLGHSGRtaqjA48nwCrpN6B3JEbLMzxefxMmNy337c9oRLVUu82En22AV9JZ12BNn7",
  "key17": "49xFcH37C6kxZ63vBiBMdXuc94vhgdESYhV7SKaiPUqG5k51hpW22CJqkSqSNQVMMDib5PA5poPGFM1366MdcKWh",
  "key18": "rA9gz7Cbi8tjh1UWwmuxoK1BVkkGAib2Lfse47GsaD7PNmDpoubed1kx4e89mX8P8sUcnvr6kaYf45wWkrVojDN",
  "key19": "2B7kJj6GzdMSp2b3YdYAMG1UY9H7M4zwWwVYeY7ttCmGBKHYzydxXVmiwaUhtWHvEej87WBjMBizxzsYMTUU7RTB",
  "key20": "4zxHAmtCgJqCFrgPsyKJozAW8wL7Nk3jPYwE2mtbepzwtFhPhRRscgVTdrJBiuRf9SoeHiiqngq9yKL7YrQSXRSL",
  "key21": "2jZkDLPWYrHikj1jNecrxk7Se3MkpVwPXjMfrHj48w8V7cHXDNv3HKmvqEPg8EcKX86ERUq8872vZKcDwyvuTzzF",
  "key22": "5Uf75pyrSPMdPdv6dpWEW8HeDrfDEC52W3MrhcGsJcGbm36kuVo7BBLFiZ19Je7JSqmV1ZXW6NFm62aTXqqKSVFC",
  "key23": "5NcrvkoghpcqNiPgo4MoyavdvvRW26xyGv6nTFDgq3p95MSvYXfEtXJzoEyTG1FuDEEeKENh4Hi9XoCHzXcHVgeF",
  "key24": "Fif8uEZLR6mXZZTNQbN5bNkReJe2dod5mCXhqjkmCUH1Yt1mrS8w6Z7sFcBD3YuzHFrnq7rGGp5wEU3PZrtmA2T",
  "key25": "bMiYqp5Rjcjd4j73mGe8AJERaqttNAeFN6xCgJzRfVLqymBfZCPLgFKtewD8r4oP2CSgxJHBsZjMzjvaaua15eC",
  "key26": "3asZKXtDF3iKyjCzSyXVjViYp6WLL5uTzQZo2JvVZWJTW4EwQ9krWwDHo3wQtYnewFAdEq9TX6JfLswL3XPFzXYy",
  "key27": "2SsBR7voNqgEhMWBnf52u93EbR9bkfwp9iNE8dPaxhNWWsE3ff857UUZyvAbwBfj1MG4SzP911VyuVt9iv5HSCXz",
  "key28": "5KqMuun5wBMFFqzQFK6EBWXRWQN9fMCw3w4HtY9pqquFZot3pu7YKq2bsC9fSd54qzgiLisR2HU5tNuamxDi3y3G",
  "key29": "2b3Sr11ug5cx7wS4BhXip7FaLdRmq1WW84B5XpSbe8VK8x7U48wwfYhw3fMsUqZqWPz8VJmcc6v53Lr4AkXR8k36",
  "key30": "fhWEHeDeYWj8hqwE5HmBWE3HdKKEwRSUeE9Ff8AhPyhCWFUKNAi796kDEsto6Su38uPrNV96uAZBLPCDb4vF4ve",
  "key31": "2ZSnpEP4cHLKVKN6BfkCvgLTGjrE63rpt5BypP7fZEUVxff8SHenjGQ5iUZRUFAfH7xUs8tgZ9Qq99VT45infkdt",
  "key32": "5y9EVpuUFvtH9CLZjwV3pnC8oatWsCtTa8FDA9bmXMw78oxTYtjyDjfTTWxo8m5TLnYiwQNEeHToKv9gcMxhtC7x",
  "key33": "2N3jcwrFQtiEqKQKdan1SbrS7eLQr31wDupSQqoKy3L5G2DS6Ji8RDdNJFLKTgVovkt7yoVryBHcX9XywPxwWDyi",
  "key34": "4a8fvGCTNCpDg3UCpFEMqs5TJ6YuF7pxDMA5h98z4ooVUDj37QmLBeR4HRWevbJBVDunFfD6SfePPXHDCzxcCDSm",
  "key35": "2EXqeqqTb9oXRf1PrQgZtpC2jqwSbWnXa8H8YWSoeawgMcYwaSYt7YirsABm4LkGAokEMLEJwazKXjQhpZCnKpm",
  "key36": "4v8TRhXurhFfZKgZTpVtwSpZmjKCnZ2KRXQi9LWUDGv7pGrTDNv2gLyh3WjaZam4xMtYzEMSgALsdMv8MsKbkNha",
  "key37": "3SaQvMeiPwRmE9wU8o8pD8C8AQkew1w6wzyXxdrjyhwWTe24tPhuUusjuy4Twx1F4bHwmqoAX22ka8RwkLXN6BUB",
  "key38": "4yvZ9SEDcLmT861qMsJisQaC25NZCx42bFwhmQufPqMWnE3tt8AtNpsAMMGh7QEPQfvRxHKzFgogVRoWcovsM5mm",
  "key39": "4S2DZ9NaNdRy2RwofrwU3RRbeve8ye46x5uT9X56NJ3TuXdqhTYdz2ZzqtrXKCcvT3cZ1HRHipnhHkBwaDHPfiFH",
  "key40": "5qhzBNgSAAnLpHPYcavnRTv6N8tZAcDHxswcKqnFzubVPnKvC4MrqYwGPDTda3CisxD9SAVhPxLCZQv8obeR9Whi",
  "key41": "3RZJbWVrLELvqj6GS9Z9BeXm9f8tA4dVDH16tWvme6qit7UHRKQRR4gQUhA5RiMrqhov5thPugeKRoyirXjF4ELg",
  "key42": "2jztEirHzgYtfjgU3ZS5D4psU8yymVtWM8dWLohH2BvGaNkHZWKcks3QoCqqj8gQ5dzwuGQ6FM7WGKkM2MTR8Zh6",
  "key43": "4GMzVJjrfAVwcq4335tMj5mE1nFDEowHmDFDKKZDPZxWHfQLR9EAg3qQqcHNEVXvuJKJP44gkdzMp9avZFKvtdLP",
  "key44": "4iVJ2sS8wc3viabiQi7RLR1sNr2G7FHqKGrg26pW9YXWKvkgg2A2DZPNUL5zSkjYqJVbjRoqma8dvGJ7ue9APTTZ"
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
