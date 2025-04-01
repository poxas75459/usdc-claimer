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
    "66jeqUnMMTjYWRb5hoYZTSW7SaWbaXGH1V8dnwetMm2Eim2LHw23kezp2kreKC4n7idPUGsZn7VknNdsxmJeFZmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZEaUVfkjYVgvp3rqNxtUs1c7BgtLuBeeWX3Wj1jxLry1jhWT7F6WXGUeP2gj4DyNvpmLR8myYXEiiXze2dEySsV",
  "key1": "ZajGZ5vhmczbMetF2CbwYSuDbKazFtakqfXFRLVmB4U4nnqawjFn23zjfntkxjfQoP2c1MhAt2uke6Tbkkgc1rK",
  "key2": "5MUoW3u9uCRx4F4yFgGpdrHep7S6BwFTyNs59kipTZU8qrpspGmqeQV6JoYSbGNfeQAjPc2n53x6zfzkrgmqNTpW",
  "key3": "39TPpMot5NjKzHC3s2QYc3wY6DSzm4kYVmuvY9mLY8X452bUDY5QAoJCCPM66buQoybBJ3pJjYTtyqP2BeBXzf32",
  "key4": "22gVvGNbazdyxfCvybErphE92pPr3CrRi8KL6RSofTut6g3xqVPFwiFje9wF4q99dC3Y2yy8RnD3XjZjSGpF5qsq",
  "key5": "5hYgWTBoJF5vyKbJrHTHNFuWcsKnXFpwU98uwQ4YRV1Q3uxMsrkhU1akkNuM7iMrm3KW6tvosDZzJFp7e5t1EYbr",
  "key6": "4BDYo8pfuKMjxkVpHJVCHY9FhmT3FhoXR7rrNnYGVCrsPa9iAGzi9TbRY4CEA9Kct3ceCpMusoGtjU1UTrTiMFns",
  "key7": "Kn6iPX7JT1dAGwd9dKo4F7fAiHHZTMXPLzPGztnicyUcsJjMnRyotZq2DiacMDcep43LmdBjx7GqogPQXWiQdgr",
  "key8": "2r9K4vGmh9UqEUhNNdna9FFKm8hkyeuJUxuPBQzAq2zy5HFyLFJsFYTdEsXw75HRRhm95p6g11kWVsJvzc8bLpFM",
  "key9": "5xYDXYfGZ5WEvwN4wFb7eRqVSH39HA4dDpBty7S31z6KRFeqZ6SdbaCSnJ3sWwaJ4mnn3NVH1JBBp9PNLi3atabb",
  "key10": "xo69TkU5cvDYpMVqKf8A5MpmniQsCeeU9QTk6sxTSiiWtc5MKKKkV62Zufr74xFABvvDC66DSiHo9LTv3JuFUXJ",
  "key11": "NEGic4uTn2DBcdixDtWLjYS8wMxZfjS2rE2Vmw49vUKTviJ1KVypbetiY8SehBQkMwu5V2NXkUaAaVbHNmtK893",
  "key12": "2XTNMCsKxFg9VCjJv5fUXdGhFek6ud2jCEmv6Dgqboyg4KPfSqSpqwCfu93By6gUCQyD6pHro8zp2sociZrGZq2H",
  "key13": "7x7tnPZVfNnWFExyGeJ99gJMfjhbrFYQW4FqF48VHChMNGR8STDHoPaPFnVmsDSQ9zR1q1iYLrffL4W3s3HSzGp",
  "key14": "4thcJJYUy3gPDr3FhHBf5m3U5fWL5tJsTWPzq6vt773A9hY8V9EFjkS6eabNZHzPKzh2uJp6e1mUvodSGvqkgvRg",
  "key15": "jmaKdiFxbawj6Ng7kr6hmgFtfkWWL8Xj1Kv5TPrTNcgSWVLANd9Aq2oWECJnqymioCKER3GNe9cPNdgsYgDsj6m",
  "key16": "2XagU3gGL3NajzvGtQoQddiFB9MkP3dLCdqfD4D3TE4TDFze38hBL4YhG9Bu4RQViNngWrJpSoDifsHXYpVS8QjS",
  "key17": "5BSCgALrXAN4rMc5yHx6nyGEu4TWC8oBjMy2NYThgnbpB5i4tWBijvxv1inMBGYaZriW4MLgGoeQYDjMUe1QghVh",
  "key18": "2dDoHfwACKyoNUBXxNNZYHcyXkeS1cGpJvbmjZhLR22nkjXn6PobXsAVU4qPmDjDGU2hSYEkpKKYiRmkkbePSRX1",
  "key19": "23Gub9JAp4TzfJW4gTtvRxjMfH7ryELnGzRZA7FXDi6QAuS4Mvishfq8h4H1XLS2HfARVdYrag5X7XjcoAK2GS15",
  "key20": "s8gUTrVjkmbQYtXbe1tKK8gJHshgD8raK1sLNJmTz7Vd2aJuG4Zu4JBYa25qTwsCChZyZRLHdnBXc3DmkPxZk8b",
  "key21": "23k1fgeyTK3rTBRFkoMGZvBPPk7NrbiCfSr9cHHoAX8yMizznXVL8bKUCTZe7HxqRW5EQ4Diqbhpae4siHn5gkMJ",
  "key22": "BxRXC4egQjJhedLA3jH7ryEabnY2dzmKrPPB4yRqNRcE5ci9osMxrzg29rnwe69R6bYr44qZ8whuH3DECqE5o4q",
  "key23": "3SkaNVkoMqRdukpjDFkpJTfJHT2dFPBpvCayLbF5R2oUx5ByUppw5zhdAAyrAqcTb8HS85jbk6wUqLzZTLzQzxkw",
  "key24": "3mKB9W1C1cdvrKL9CqKHTyCDw5t5JjnQHHKS3e7FsTVHfsKFqC3BtZNk63gWNdLYrEh6L8T2MjtEywBPK8yWmjQL",
  "key25": "4Mi4TN9ZoxaWjPjEPD4wGvJXHRddpBdtHAQQAPQoR6mG3w8xqVZPwu6HsCif8QdD5r9WkEuqqf2sKJHjYTLtEhAy",
  "key26": "5mtVbZgz64MUj4iMgt8YAD5bjeGHcm1t2gh1yxeMXbpPigtdjnKydNALZ2P4jyaBs1KFjmCFN95f8r67vrb7W3sB",
  "key27": "4owfZwTpgorXAwt4p7n6Av8gUg6nq7v7opFbi8iXN9fchTbK5r3GX4NMty4QFJK7jR4gsKSZ2GqKWtMFzmQQYUNF",
  "key28": "5mxSvCLuoaUhB5uBX9YxSEjdZE5nzJ328xZ2KK1EFJbCMbUBwampPV2f59vetJXs4rBeiRLY2KoD2iZ7Pm2L6joj",
  "key29": "5bdc5oBbAz3rHMjv2oVHJcEqyP6QWBZa9Edkrx5LJKtJySLPNzELPyWdcNZ8LmLgdsWSYrgezSmUWW3SFmYTRWsF",
  "key30": "59ifu7F7wv9U3ZmTBBxnn85VSKNrh12L8kvQYQwU2aHuYK24qNY9z4tMY2GrghJ71M6kQWHRge6We3xSij3oZmJ6",
  "key31": "4v1qmN52YyPwvEm6af9wMiW5Jysqij8vj4ZdwLKCRfJP1TD3LR8RvLETZ44VkhCarGTT3GxrdsLQVG2qrc8SNnSH",
  "key32": "34wc82GoxUcVPhuK5rvCoycSaBuoK8fu498FUedmKBZ1a6NE3gLekbJaVsA7UPpXy23c5gYkLqQD58H123acPZ4u",
  "key33": "2B3N36epBQUfGbFFryGj21Mdx2ZSywS9y9akrmTtFbT3yvXhZpjBvcUgNzqSrMR3hi6QVPdbD2X2T8HKAmsRwDfG",
  "key34": "5y3D8PaafFGx51VwK8Rb7ySTcZYaBe7pmnk4jBbw83VMV6z6B4F4JjccpPYD81FP3CDxYnUiaCTQw2nGVSJ6r1Ce",
  "key35": "2jNuJ8BNf8npwyRe4G131XhdbW7JZgBbFkhLVs2Gf3Zxjf595mHxqJ5pYfEdTeZTJaFirPT2u2m2y62qvqWU4CQp",
  "key36": "5RNXyGM8HK6j2HJRUfFYUa3g16FDUf6Ch9YpYwsFYwiioaEtagRAbtpfrsKUvpDYw4Pinkgatq1T9KTYuEVLJKfg",
  "key37": "5pa24tQWFtCAwKNx74MBgu5CY4388Cb2xrhRL9gR8YNutpXvbe8Ek3NfNC6dGbT6VGQZ23BDRCHifUYxbsCqRFie",
  "key38": "EoWwKc2K4s6WE1Xg2dfDAFyqfbDXmsEGxPn1VvuGH2qFD6Dbq2fSgLmro2ouJ667Q9ZEDUoei1A7HNjgtbDs9Rd",
  "key39": "iqrVvrYv1XGTR929pyeVQqE79dUV6fiC1XikPdN9A8QgWPw3PFxYUjNcKmRUmbNBb7hT3cSQGtecVMd54eycJMG",
  "key40": "4Rf57nfcwQcQBbW2Gg1gVeeV9G6PVMRPcoFrvN5fRSTPSYwnqQp4Nwr6rweYoQBXt4fbMPn6Dkz14LGkPZJKZbne",
  "key41": "eJBoGfVKYzoSWQN4QCqcpGfM3r7P6X592Tb7SLfJ4RLHfBRopXdrAFtN1DPGffhktyKLyi7rGrs32am48dbZL9h"
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
