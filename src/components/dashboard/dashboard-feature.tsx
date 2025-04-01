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
    "5dxnXLvczeZy52ZQLszjFWx4iNpsqk3ax5v6sPcWshuyUAuKALhMbjeDWQXxuZnYaUru2qdHqXbWLpAVgSRddg6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pkAFm1rdzC4qj9MtepWo2wfp5CvuEaaNbKdERNw4axVkGwYeQo9R1rsoZHywV5G7y7jgbs4AdU1mb1Y3Bks83wK",
  "key1": "4aKU38yYgbwZ7QjEXdpTQhcP6fqhUB57fVcL9aR8sWpaxCjJha2bygQCcM2MDTxDt6XTdFWtxgLiLv8v9xUjdiTV",
  "key2": "Qsh3AwEik277dBDmqjSQfjb7iTxpbcRMqUhGfvzp734Uua83M7wdaAnaDTMMnDGPFhNgMLXsY8D66XceCxpG1Xo",
  "key3": "2bUMsvy5PitqgHhuEhmSED79acbTzsJgkh3StK7KGiFy8RsTwMSSMJmu7jCwqQk3PU9edsYi1wX4GjEGmSKhD4Z6",
  "key4": "49mt1KSuHwppUB4FyP55hTEZLN4D8ymkYnTxnPuBnZRFVQHhdfrxQHmcBsS8CV8sJnu8YT33Tg5wTau6DLZaMXFo",
  "key5": "4RGQYVw46a35Hkeqi5YCWpZH6hNXREQG8wvCvXKP41ZTeMgJwPgSy4RjTf8nJYNdL2H21ormraHyX4zV5Fjo6i8y",
  "key6": "5sKZMXSCRbSfsusKFuoPFkgQ6ob8cPzSYtxiRndRCTHVhNmPSHP72pLJxTZi98ktBn8zZy3CsZd5WF2qV4KamjZ5",
  "key7": "2TeZmPEtoJ6nyzGXvZmAvVyBb6ev1YmKihAckLz8YMscCa6XA2ddpaqw2EsE3nM9BjWeN7373HgQaJWpopvuAtqM",
  "key8": "3xmmNV88UfauoYhYEFXsVrNZ5EY1CiSkNaRXUZnz4V7EX5NrEjYwHLbvEUuMfTJHiHp31Zp68pdpQKZcCn6NQCTs",
  "key9": "wpLNN9CdMJqZENq9ugMPZDYuNFP4MRZVjQFZkgvxWKFcroMRcY8Y31NHkpPrGn2mkEBFv4XQMourpewUMfvx7AR",
  "key10": "sKQYRz332774BdfNStwSLMME7oi4Gm1VJVWpytbVsRP6BUtxPF8GqEyrNpcjj7emDRKUmgRfazwCp7HKecTMDmH",
  "key11": "3ntsNdwoKqcufi3rkugbF9bSsNFtHcjMVBSntBoFJdsigSyJYE8MHmMXYHJdHQsZcwtkwJXJnHrt2QkPkqBDLpKe",
  "key12": "5a72QLU3ySCwySNVht3T7g2L9QLAPWizXjYYo7AZAVDUnpoHMqHzLTimdfbfaGUpvjaKn9d4Syg3stSBoqqchMaZ",
  "key13": "54D2hoTzghhb4qGnSArkrKFYh9GB9k4D46PzHoWeniLcrCPHbzxaksAW4krQiJSaoVr6fkhUBPGsfFcfo9QzvJ8q",
  "key14": "2SkGfkLXgiR16kMCsDijqZxMjaS6XsUMZrouAqMRPwY9a1rmHT9eBQnnGax3qBys4gHjoi7XewuZ7nK992pt8bsY",
  "key15": "5X3iRu24zNdAK9WAcE72u3mkTVMMqBcwnrkzTwixdsoj23nmWUsdsHUgi2wxKdFv9A6HWNtXjHjjtJbWDKQKbjqd",
  "key16": "3rfy1gHTAe8waXwfbt1PzZ1iUyFhmDkUEzwaPspLM3rQ1RUUBCvm7s4Rer2cFZtD7soNA3etDKD815Lr2YuovejN",
  "key17": "5QNgdfxKEdLf2U3YuDQRKZq4tmJxL9nkJWa1RoZq9rm2RN56KbYTEbmcDFVq3awZk2xDojwZC832KbPpbrMTtY6J",
  "key18": "2vGFz5NLhLyJVMajVBRkCFpiaHkEQGRvJhSq4rWm7BNv9eVrE2go4ezBxpTbpigE9dByrXwGY89UcAV8qfHrjjGJ",
  "key19": "uF52BQ5yfLLkK22jvj8NKsg6SLeD7ST5n1uHtsVoSDMBtGsSRicp85im3NFhuitKVNJvY1SbSGUzxhkAPVMFzgg",
  "key20": "5tpvRe7hfa6HpYVijgamFdjxZ9rtPi2h3ovPCGQwWsDzTgiX81beiy4UtCiXvENnWoeB5VearhZRbcgcMq58DCy5",
  "key21": "CP9iFvJndEXR57Howg2udi6DymCD3RJVc9ueN4yUV9Z6kSDNTq13pRp55YZjwB9BqY2EEM8CRX46KjYqwMMNqzg",
  "key22": "3qupphFUbsvTfagNbx57Sm9ZFLhnxEmsvTGEvXT4wy5mx2SXDxCsRqrPj5w9Rvg2mF4k9L29ck4XmubFqdhJaGEk",
  "key23": "33MHUuDYWBdnBem43RdmoKEGYMDLrmTPcTxHvgukaD2CmSz1EMvHMDAByy4Z2V4boL6UtQ1F66k1Pfe9YN1CsDhB",
  "key24": "3xFxg1ZyGDuKa8CK2NuGGcqusqypRApTpUKScTVZ2ttLarW1u1yVEL6Xitov29ukb1wWe8zsBWdXHyam1tCtSf7H",
  "key25": "5Wwf5NG2vwPUS6WnofMXoXJcotTCFggvmCE73rfay6RBDSm8fuRJpKEJ49ubgHMAJi9fYe2crQyuaZff7YweGPdY",
  "key26": "goyKbwcuQAri1i9hzfr4AvdEsggm9TeT6gXrJMup7xMAdshuevMnxd4JYU9XdrHXpwSKTVcxxnzNTqqvTg9SckS",
  "key27": "41P7jyoNE8emoJ6W8mCAPo3j1rvZULvem7PgWNkrHYZTVXDmRXTzEVkLiaZZy1YZayiBL3viz85ydKzgcJmRpsKd",
  "key28": "4egdKGMHmgBov9x5yFa74VpsVJT6u3vHiJxHrddxvWDrTMttrQpdnCyvUgMtyRWHJBGy5EVgr1q9x4Wp6J8gK75h",
  "key29": "3XLdH3FRJchDjxRJdziamFFhztPK8o1upgcMbT1pCc7N6obhZ1gRY2w7Au42QKVmhxj8G4FpCZTdympKVk6oSJHd",
  "key30": "2wMX9Ub1aunV3pw9bShF1DyXMvmJih4pjnqGj7P8KeitiuwJRTEirteAj9YxAT1k7MvGQxGwQsSGWRqJHRhorazJ",
  "key31": "1se1U1sxcAghyKWfbsJXQKTgfgaH4pBu17BoNUPa5T21ZzrF82kejaHGTno8wtJCodUcpL44RULASgLsYgad96y",
  "key32": "3DmRdzdKLerriyrtwsFxqrfm3A1tfJHjii37pLZKso2hVhb3VRTqAY2mBLczPwvukKjunhqWL1hXqxSpA3YLVfZS",
  "key33": "2qdhE8rJjk7Je5x2FaSkiJW2H8XtvTw5PqZDMftGKPyb7ayUSYpgw2eVTGCb1Ahe3ZAnSaJKYNtbSGhZyKjanNMh",
  "key34": "4uW5eHv98m9q9KD4GFNCSHxz36gUT8JepGdb6PnKeTa274Kqhf78jkW6PLerqsM6Az3zqxMTy43fzbhhWTHGo6w9",
  "key35": "2KomfWDV4PTgfFJbc6KqoYzpFox9Ci9Tf7LXfTEQvGxRdkBJT6X9bsxyvKFYKgQ4hkrn1QEibTsYbw6zuFaFp2os",
  "key36": "2ht2nuzj1T6dHSHV3AzTYHo3ao1CdxpUfVp8tcq6AMLRhJvarS1dqhorJfxQaxG4eUNEfudbctTz5RaP5jNoVGVW",
  "key37": "27L4kuzojT24uT6Qgc8cDfQTCD7zUmQDg9Ef5CfeLBDF8GskGWVfqfuru156xw7FdFwDdWWqRZ1B5BCtwUjpNqGi",
  "key38": "4L9QTasvQ1j3txP3UnWgWHPjvTZrvfdsabCFKdQFrvGq3tQoCRjeJ8FhGTfga6cdMusB6h2XT7FtFX6NkkApWuEQ",
  "key39": "xvzPcWPT88JphtxVJpSP3GYqLdJt6ajAy1RFYNET1X3Zp3gnNChZG4XbPneuKNCJ3aSfFeRvxdbinbzueTLxWvy"
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
