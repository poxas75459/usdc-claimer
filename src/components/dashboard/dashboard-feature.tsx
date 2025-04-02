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
    "5bWtTCF3mXy4eK6ePEkXJugAvUAJAmwjgf31Bes8zAaNErDa36brmC9nSzTbDYLhC8wJbQdWVfS3HoHQkgwgbGih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "evvWbvW3cRcYgVnNq6sQ8W1M28iK1ceieBLpTy4GJ4WPqER4bfDiTTD4pr9UP6qCRpuM2bxKMU6vqKv2gquN15T",
  "key1": "QUqwzeLS1M9qvropffT7JPvHG1xRDPLbsqHAvzzMhecdkfMTHmkyCX2PUWD2NFMpcTobZDXoQWhvywsU1pyeYg3",
  "key2": "4iRmZCW2wQuZnpQek7gN9R9bshe4F8ysUR4CrQDnsg9gmpoqrRV9no2Q23iTitieHh3QUAB19zXLuhGugRqedNeP",
  "key3": "5iCMnHnVva7fisEWuHsv9eMcWaMJnfS6T1aq1J85TwmeSEhzrg2HR15FbxUBRfnuXGFjCFLND8BLJ5EAbja1TDji",
  "key4": "3HxPzs9Kw2hRn6XYoadJF7fXkjELLxLWRCVrFDHtGtNN5kWUTpGEywV2DeHhDZ9dobiqELQQXbQRi139xk2L3s3h",
  "key5": "33W2xZRZf5BoM4QBzMrwkB446A9XfJVm8B6SGrLUoEGxwzEwD1t1oNt2bLTym5Ng4n4zzroV9o4eyjTmvR38HFBW",
  "key6": "2Uy6QK3ZQmaJ6DgSrVrkD7UV8tmgKftKvPpLGowAfuvfato4AP97gYFvcw35r24PSGtE5fy2V1SoFoDFDMYDACSS",
  "key7": "56Twknfm1NEVtgFQ4GjGdh9DF6ZPTQ3Pejk5qRmVwVfchot84YvSmgmCRUhYeQDYvirhxjAsDMuANP3gEeDZH8t3",
  "key8": "5GBN7a9rLPdVBExHCUeQUPaarzFfyg9fcJTA3tx8p43CqsKs8ps4uhCW7R83zEuuLAGYUanD1SDzFxVMv9do27Te",
  "key9": "9hxbBYtfeaTsHidEM6d8sLAyvFKiM31UVRtEkfRMcDFz7x6qyzm1dgfrzPsiEcwhupmhd6sj8nNr8e3kznMTt7g",
  "key10": "T6XBVabEV3RCTHNVRBifaHiZgpmEXuqmL6HdCkm5zkioRzot2M4cdcvb8NTjceCDTjWZjvMSnBLYpv1pEpGE33h",
  "key11": "4TZP7pdkh3GyEkqzgckov26UssBKKkmjWbKQdYohTVdyvLjLRjL1gJ8R61cdimXkvLna37uRHS7YnaQ1ysttiiFg",
  "key12": "3qMkvnfex7ksfdcmDcqYfFkKUNm1VEKHPXqVbAJW2UaMo3uYHALQH2Cn5je3Uc4c7UesKdmndRwrWKzKQSSwGbbx",
  "key13": "4t99puyicnXZZYgXqNVUtw98XPJpL8y5XioQkZsivCmyykvkCod8nkJrUqjFRd6xFqXwfcnSmGKXDoYG5R5J2GAE",
  "key14": "2YV2PggqgNsgbVhM9TcC9vN1h62CZG1dmqpFdfNQL9cZuSffYwxgVf3uu1S2gkQAgJMpinUxFm2VZFmV8DARsyUH",
  "key15": "4RBuZKZtWR57L2G4mSWfKTe5GJovZfzNro9Wtx5Q1KMzjRZr5XRq66YFhcauKqrCkm2YUyCaQvjNz79JcoP7uFyq",
  "key16": "416FbQWvjTh8dTZuFPRFbuw76CHb8k4XkkvgDLm8VBiSQLoh8yr1uRoYrDgbbCFE5pLjfMa7vajaBGkCMJZ6ysz7",
  "key17": "J1WywKinb7CQnaETLpZ1piNs1cdJrDVT1zPG48NhTwiqJU6ZxTwkgEcMEiFbcWe5dwTqzVUPnyoamevPp12ihmw",
  "key18": "MHZPhYHc9kw7yCssVP9zxbsUQtLsh25dT9oVT14N5VAhQ2g869KEp33AgL7dzsQXDZAzfvJ7gMPFBmMT6QPDJQw",
  "key19": "3VUqSuRwC7izsCyz1mixtWAoCvFnZDguBjRdZa9ZZLq4Ftnvty951Yh2WK7f8MBfRQxNdr879SFHYFR3CYqj8D49",
  "key20": "DMW6hJw62FT1V1QWHizGxLSW8B9xMA2inB9vN3x4MbVNXy9ofrdFLqf55pM89WpxSoTXXTijBvfrYcMiKdAx7YM",
  "key21": "4YiGaBjJ4Ed6SJfwRjctqhvzu58oPRvHJdLYqcW5ivZeL8FNXia5cy9ZnjE1uWALMvDuQrtMCpGBZuKgGTdoqyEX",
  "key22": "5jWWFbq1jaZDcinLdcxHKLoEqMRHv9gKBXVq2Ty8TazCXjBafXZAYTpU3z3YK7jWESY9mTfc5mgBHEpr6XBXteBH",
  "key23": "4K7uM3QGLFY2RiKmFALZ3i8Uh8uaUvXvW4g4NqkA4XYEmQUZsnmH2yu3vcRpDDi2cuzaFsr21aBsMUQ18VDZW1PN",
  "key24": "65mZ47TRjbNvMMiPpRAZ169acebbcG9zZU4NR2uMEdX4VwTwaeQcYUitnVCUXroewCf8oBruR5nJapbVH7uo8oBy",
  "key25": "3B43LeK61T4b7WrD4bJcYJi6LPNXJUYKkG1n9WuYEbY3wJHsQNzv4pU3LaFr5KSYk2bGK9UqmTHqRBxBioSZ2aEm",
  "key26": "2VrF213yQPg7eH6txTa2jsRLQwagjYtKjj4ayHmE3KX7XTg7zRWyVs5y5VPFCEf42RXhfyPgbo2VWPDoPB4YvGQ6",
  "key27": "4D4q5CMbj5sXht9tf38sWS7xbnW24trMfa4eroe2B2hSv3bviQvE76XNoX3DCK3E6B3sbwcFYvhqZHLJWz1vC7eo",
  "key28": "36K9xjQAu7U6ShzeRagxEZTj6UmCpGbV3KoxQuS8sS5cNPXzXbHWD5vxoZasc97LQDGBsmEif5tDQ3xUJhk9V427",
  "key29": "3taL9XpMPM3H6xJrXXxt5KYxd2ZzxMT7NMUiTowCXbYqw62ZL8LzTsGst9ZK7hR6F7pxVVKdxyvXi2XMktu1j1hd",
  "key30": "3GcLqnHSahj4Pmanrpo2TAvo53nZG4cBGra7dPLzwb1AVWwFYi5uLqR8cTUwHaRtKDKQZdMT7BEmLkpFf1JW44uv",
  "key31": "4NZmghevPA2vgGLaYeDnSWCdA6y3P4UYamktLsnFD1PvyjPmiMXLGv4H73YPhwVqa6CqUhBFGXe7zsBR5erfy9Ek",
  "key32": "4r1QyieGTRSMP8Gm6gkxuZDUKMxyFRnTexaYkNyReHdturTzncNxgLe5GGE8aM5SfRdoVfqHCFQq8LgCF5vEbrcJ",
  "key33": "3ACMTauHtedFZyBARUFCTnHvSb3X3H2vSvPmEgotNZQbjjy5gYrPuAemTfncxRoEtAxUz3VZXcXLLeVE8WX7RGCU",
  "key34": "aG1nY47hUWrhwgoJBp5w4R5PxM4TtauQ7c78gAKX8W4yzwGkiVJuYX1XM9zaAMXXjm6vnrRJGqNhN94n5GxnX4r",
  "key35": "W8mxHXCaa5dm4o1Z5SL1s6GCx8YR4cdbKhfVazd6oTHUckYjBqtFKHJgcGUavmdBaHMhZ6hWtnJgyxVtQEw8bJ6",
  "key36": "2LsJb4VkmNDjPsMsgZas8SW7YFRp9bpAB6JYoYNqi246j53Aabz3xgudSxh5xWd7KCTwtAfetfKzAN1SsWWLWE8J",
  "key37": "5ZomCPyDKX9C1GetA9P8LX8uJWxJsg1e1D6rFukAb2paff38kUZ2KjJxPGnypQrGjy6n9ZerVT1fKnw9zpvu37mu",
  "key38": "4dvd2FADEutJaxNv4DkEbcj24ex4YsyZpJB5YEtSj1D4UjBHfk4BqLHaMrL5fwmKK7NXNpTqrRVPL1kbUQhFLrza",
  "key39": "28WEGtEqy73X7wCpQbz5L4N5ANwoafSLWx36queJaDC15qHfrxYiymUccd9J2jCFfts19BEAgs8VjJ3JYgo4sdtF",
  "key40": "SZMYJnLHmopF3APA8kh7ae39U7yvnWi2pvsxwjiqMtv6jKqQCT449B2zWv4XqDHTkvS3FJLpir5j6Vy391TjuWg",
  "key41": "kW2uqyXrrA6J13GU5eaVpSNCiiLTEqUUATcuAwaizcZmFVyxNDJjp1ShinS74NwyW7gxKoFgDW2bMQDbS3LUwLS",
  "key42": "gqKJm74VNsF2PfoGamWmvkCnieivqwSLr9avJyfEVyNu2JhWhipAuTyFv9DxaeExZMwR5otuLsea6yxUNaQdD7r",
  "key43": "2M4KYueyvKKSuXouUTithc2vXRLDNnqKZ86NAd5ZToWHBdHQzfi7LKHvDXz2xKUM8MccyjoRbMMHfi7dwBq72vpY",
  "key44": "3Y5sQ9SDnMRX16SqVdWmop9DMNER1iayybzQgZ36kxKdUGHXimzJbrBo3Tx8qYAgZxrKYpyPuVM4Q4RnvRxwGpta",
  "key45": "5Fi11BrQhND7P5x2YiU2DBEJ9iFGBfhJXWLtDB97Yhw2ypp5adszdbrFAHM34oc4KTWgc6ZtxP5KiKxtGjcNyhZP",
  "key46": "5PfthPUuXPfNkgSrCVPZfw8g6QXTcwU1A7yg97jtTDX6pxDR9PzneFtwEddEZdL3AcK8YLVLDZjhBCu6qQ1ML2d",
  "key47": "65bT1C5HXVvpixWHrqbn2snjzrGFHC9kBU9DKBkvCH9DhRP1epYRPvBqAZADx73ZF7x661FrvSp2XBvgMEpX6Ns3",
  "key48": "afhh1t9TewFHP2GFas48scn4D4gzM2x5Hjna2Bp2qwXP2JgkqNmZa6Dtao2gsjvt2jq6XB2kFSE64pbDdeJsnG8"
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
