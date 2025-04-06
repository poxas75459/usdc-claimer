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
    "4PCNge9sUBTNk67spUniE66gXnnScnrVtJ2dgbGdo492LJBzpyeH3qz4dhw8LaPW9q4QyLP4EsqtPEHvxYXDSsZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AZEhemhQWCQy7ZSeUkP5awTy3AWeSnpyZaXXqX9CQRPfD8CYJKHHxeUixxrTr5drYHBwABXBHakfD82LRYtZjd5",
  "key1": "2CgYXzMzuduRfV6w3wsdLQrdm7Mh414P6GEehsGsmNGrunmcLH8yxdHZFSmBAcEXxZqHKcyQReXyK2YTKFDYJrKW",
  "key2": "32QHo5QtywCj7cfX3ceqdyZqxhmGK2TNMfYD1CE4A1UoAMEBDzQyfsUYZYZH79FL7gWBCeRcodcaXYqZbqVnajym",
  "key3": "3wXM5qsRzRxUsEdypsxNj7ZyoJn8cFpGNNEzzesADbCdHT2SDWxkGqDkzCrHu64ucs3e5WJEjqdFZzB9Ji2QPNcq",
  "key4": "riQLuSEMoXsJJcMdQYsvy5HGpj6Z4TUD7abDrVgGJTaAGefL29RMrXCX3TSDtPH4fYut834CzEpD12GGmUEJreA",
  "key5": "4LM2U1Mrk6yfEwBJU7QHA36deu58m1WKBqCdspBPi1HDrr6bQwhTnvE2m4ANpptFQuf8dV2cNqXNU8213WrqLX2Z",
  "key6": "2ytFkAW2Zece4gu9Cv8nFnPVXM5roELc2fCR9NsEcNiu5Lb4Xga2ttM2UQzkRodgosNQPHe9Lb4CYcrJR479Wupv",
  "key7": "2vvprM7WmVeSc15Y9cyDRGiuEhz1JHe35GY6y9hhkMQM5mRyq21TfZ3ETSQZWf3Y7brhMrpbkKwbV8Djp1brthRa",
  "key8": "2UFbRDgeZZpCRKtqwtJWcqaJDqJi5fEeuMQgoB6GEhNfExH4U2uw3CHY4RkN7xxRV8dqYAJj9M2Q8tV3ac1npPgE",
  "key9": "2fAiRQY7r8DXYZWz7cCwquzx2dsPaoG6mxN57Afe4NDDWJcbcmfPDurrbQx1kAUmdPp1FmspdvVFcUvubYg2enyr",
  "key10": "zhkhFt3dpXNZekZH3cUnD6f8ntvzZpvNADtyESYY8GsEqe3wa6Z5uDfg8Sb8GZNksaxXEduUyLKdubEeY8puSQu",
  "key11": "Mu9dqXTD4DJHDe8Ttdv8jN7pNZfG2cjXsH9RFiEFPyMdh8zyN7yrsyxFHoAPotX1SZUGCYKnGK3EST4TvSgQneS",
  "key12": "2SajqHp35PzC8TRoqf6t23pgygUrGPbUN7LfoxhVndD3Qqn2Tqsnuu98ptfp3v2cSstGB6jnAiMH9QzLWfYN4Fsz",
  "key13": "2PYh86cnGnKEmL8XEKvwZnX5taaeFnFp6QgZAZZ5ZvwQdDHYa5nub1TPKmxgmzBzXZJ7yXjESmghsi5RCF7yMdPs",
  "key14": "5WYswXNNXtvcpk4hbAw9FNXhGUED3rALE37Py1PAYXWeg7yjGBShhCt5p8SsgHjDnT6A543rakkAejfghkY9hwJ7",
  "key15": "3YkZRuZb6ULta31Nc7k9VPuodQbJxi5ehKLRJyi8ud6EXCyujbYKLkzgq7n9AF1isCSr5NDFPRvNCF7jEaoFCVpw",
  "key16": "2cYxHSBGfw9umTxaGEJLCBHYYpQgYcNT1HMBjbbBuZXj1PAB1QRWTa1nxTiYGCptfDHPDEQ4yNfFPfSfconwz5Tk",
  "key17": "2tw1kVHthgApvZZSb3TxPA4nkaBP7i5MhnhTozQYni1rL6TzELn6QGDLPVL8YYFhLGW7BeUovogDwB91BnEqesfv",
  "key18": "4FtNqRVmX8Js6mavvjGDTGbNvtQYafJdAG1hVvPAXomkJwKPFbouYT2uCCZxPdX8pQY2JyantyDMCpnuZohagEXL",
  "key19": "4YZhHefjtjXYc5zGEEYCF3uBvCpbXv5EQeZAw42yqFuxggNDX2x82cByvxDUpxNtJXTtaio4wjMdKCApkuo2JRCK",
  "key20": "4dJ9hPy1ocosNQByWLTHGRN9V45YM7tJ8NABq1iDiZLRiMg2AUsKzSGgbEE337tjnsRr88bFsgudFds5izj3cKRG",
  "key21": "3UrKnTDEfDU8rDmv5erQkCMygMQHkioG7QrtUU6DfMbTRdtsEprhKGK3C8r5Y6yHJtavSPMNK6DxcARcWu9QL3zF",
  "key22": "2hQqKyv52oLEHtHJD2iNxghUWAtHsBMQeH9BXFzw1rnh79jHVXsgsxq9kHbLE6iSGAV1uNShmjUQS2YAxvLPJvyi",
  "key23": "4jqf6vPftpcVrPQxLWquXpMaCo7wBHYRyxAXmT5JJH98QjznVMjzLJYSYkE25kJyDSiLRABBGasfTZSNsGBQ8ksp",
  "key24": "nUzEGv9wyocpf9JbSG3w6GgSeEgXuZNu2DJPLsa3P17mDX64y8PMv68uBb5zoKBSQdgNVFo3LUh6LKVm2wcVCFF",
  "key25": "2SY2VpWfzsMbLqeRBfrcJDzPKZSKRKMDHtDHVWx2SVDJwHNQbjGPoDgaDSgJrmaRmK42dqbJ3yEyTZ9Bcm2etU7k",
  "key26": "ueABk9z9WbArG4PitVSW9FTi7YSs8fre2LpZUnViG7iBeGnEkTBo3yGPZT6yRXydn5hY2C2BaddCLEFkaWwRb1v",
  "key27": "5cHF2rs8Lqe1Ty1gWCSWFWBRdedUMrBxVkZa6FaQcYw7b42D6mqog7VhX2hd16tL9sUo11AjcyGomKCM8EeLFEeZ",
  "key28": "32zgTkgfmdeuc2P2T35FZQu58sGnDSKFidLBhUJxtezwQMYnVRZgXqM671f7H24wdv2iF9Hn1vJVMWvLU64b9ETo",
  "key29": "53gfJccqQjrtRZgfeoRbjKqhUvhTYMJj9tU8nDGJSF2JqT2Hxi7SSB91nMmxei9K44591Htwybjq67Ko9UivQVqZ",
  "key30": "2a3i2AB9osyDnkQJALXiRqEAGCVDUmzHi1RxtUmtUjLhCFsiMt1cvgJJ2iu2s3B6uyTZJiQiZCKAPZQ5xEpX96Jm",
  "key31": "2ZbVgWv8Hs42p9WdE9YZgJmbVgUHpBNyvw1GW3e4N13e1QmsV8gFuawuXmn3turskAbakhaC3Dgb9PJ2DE9dKujE",
  "key32": "r71jfGPAv3uQh1PCCVevxShoZqFmGo4ZFTE17R6NaaDSoyYCS8xzMMqgmsSYUkEHmrNVQjAFXyjxU5JerEPXUv8",
  "key33": "5JtYQrh24SPW3DasubRAwLAaWRXy5EQTWoTC5tWSkY3fZQkjNxu6gXg8pDjxYAsYF6QN9WsYeDEFM6XGxsMs72uH",
  "key34": "5t2SW7xKcR7YntHD6d7M2oPQARXUJamtc9DbVGUMBqt1fFuQbtnd8tfJpe4Kz9qsH2jW1Rqb8C7iEEyJY4RdcjDn",
  "key35": "5i2s71oh2znLRdfjY4mZ1YVsLKPmVxpsANkLGmzDP5rsu4K2B3L42TzWAEryQohGrTrNtJ22rnLUGTPQaTLoaF7b",
  "key36": "3PQvMNRXeGMeN2uu1y8e5Fw9tyWtM6oRa7r4oaTkJgCtoxYzVHwpRxqW1KYrbq84CrCcUeQGjuLPGiASV2Vjv9gX",
  "key37": "2U4aoq7h4WpkLdqbtTxzWHACxwY3cWFrGp2ZFJj9KDMdRzDe8cgQTkGXQgSiLNr6m2W6nFV8bvKtsWcCdT9RVbFM",
  "key38": "4mS7PivGeZxyoqtxKJd22Wb62D3WGYdGyRxJwF99pvNyfHY4BzdDsGmVZpZhs13LveuDzcQdRzshnJTGoUSivMSZ",
  "key39": "4mRaCg6inpKtAHkAKNN31GaEt7rh9RGxBt3BN314isSsNXdpAid9igJjXwmwR4dGhxyHjgNNFRcdwSqTMsV2rtQf",
  "key40": "3rEmmQYLhaPUqMB9kPD51hjVzqMzgizpC3wQwrx1EzyLvna2KvPGBu4HeUhY1qmW38rLP4LMQBGHp1r6j1DDQauM"
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
