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
    "5pYLewpGwYkueHnGu5uQ9oSmBK66UbqqTnJLns5eVqcY1LZtedL2HKLZ5hNsHY11K6FRiVjYtgZKnNbkmB78Q96B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wXPNsdFXWQM3jafue3KGVkf831eRMQoHfoMzqvMnQQi96sDfjksNCJc4yxhZgmnTGuwHfkw43m7Dgz5vhAvVHry",
  "key1": "QXu3sTjney58rweSmqr7rLK4215MuJwxccS5XB4H86TFoqYGfEQa2fSdsQVBLYwzt7gJg7cDrYMCyGCzifWaJsr",
  "key2": "V7Cy7pE7mY18jeyo2odMnHtLr2tzRWCnWBeLC52QvAN7ESFff9LRpvvoMYBKKtTbon67VqWNLEdYLpa6aV6XWPy",
  "key3": "2jvhLRN6W6fffr4bo1W7g9Nnph9UQHeJVAbkxFDge6MSuuBMTZDkM27KzZfASQwNJdfsRGBrh39oV8BNGyS5i1sb",
  "key4": "3N9VzGQgxi3m4GY8Ki6CUeiLPqFffi95jGKzmwuoBXA1ccn3eia7X35pZ3bD9btwEUkQxaNJqGjvvKYPsnypQvMk",
  "key5": "5M9mgMGR1Wg2XAAQS21DgYny6z9Wm2bbHHif8RYYVzxyy368Hixv8UWgBDFUkem5sTT56YDd83YaYr4jv4TrWDq8",
  "key6": "5x59dziFtn6t9LCEhy4amzVvWF87Ux8fMu8RZha2BaW8MkHxs4Dqwt5LxDNH798FARpiozHizZv8ikR6Wuo4gNJn",
  "key7": "9twuPRPFy6hzBiav8rpDPo4MXXB139o1hegfQta6UdrYqGfrrwSh1xJJrJ3cxSUVDeuj4nb37HzaRQkFbymQZfa",
  "key8": "4F3ko85AUzqNf28fW8CRDt8vmrwyaYDeeeADP9MNnbXRCX5HHX9uyKgSQyeizcHJkTQLq4bo6R27iPkYdFpTVnM3",
  "key9": "4oqZvv8bRkhfBY7nbVZhsE4pExgSvFi96nu8ojvMVvXHzkqU3zFNgQLKVM1NQbxonCFBRNtpPVvQvw5hmmgLDtBr",
  "key10": "4qUkNcb6j8gt5q3FYSRYXaqijLjBoDDMgRdU944kfnYMZLKhnauyDq8p2iJXxKuadFoy6AcTh4pjeX2HgKs7JvQ",
  "key11": "5dfUVqE1FJq61vygY2c1HAWJRSY3ncETWD9DwPCGSwRtvL8TcrCm14WqFWFQaDsxZC2spb2JSzEfGK96R9gV3VG2",
  "key12": "647nE5vyYyNVMUx9ypSLmTvyuKsuUNb9nsdqHj4XecXCBXaCZcE5VLWvfeUeikCFSwgPQjrTgMUoDzremgTThawA",
  "key13": "4TAcat17gfuWdYpsPABR6HQZUEcMfF1tJQkVPRmEZZKuA5igVXEiwuvkkqWEpMyKNb8AjLGvFxkQdSBFCJnR6V8s",
  "key14": "5TFfuuqc2zPWtmeXCbzNhiUBtgfotm6jxa14UceDnpdsba48gaVGvDMEZXhMQiHjsZTc4eEth8SucvmjzLRYuY8L",
  "key15": "4SZK78H97GSvk7ZJ82tShhkLmgc4hE6gtkFbaH7unhMC5NC2RFtAcDn6K2DrYA7CENA8Ct9qDVxWZxiwvRLXDPK2",
  "key16": "4v5WHW6WZ5P1EqvMuycuVVmhuAhz4ZmDmiSFQD9DgPqwX8iR368yjEDfRYnCrv7n3GRWCZ3Jt2xdtS4CeQ77CTMJ",
  "key17": "56Ma3H5EVL8zR6otuHnrn1UPUK8dSPWojxo6xAqtmXhhUvBqvRdiRThrLtfvcJQEe1hzUKu6xkoqybou4ci18taj",
  "key18": "4HmkiqoRRB4ic5e7KX1pouCWwcNajKYDc9zZmiC342V3wbNP7dcwtWJuN7q2FuNF8NDVs6h7jCqzLvJPrP1U8Gzw",
  "key19": "4NBx2gQfMbcyoU4u7c1NyYhrqpFbLyWoZdiFetX2a38rWgGnnpsjZnnCCRrgJGb1qJJowc3qAyV62nVaUsm9gVdj",
  "key20": "kf2dJC2N4Adr7s6nvDRpudAVFPh8h5xyFHbHREfJ88RuYbRURbN2ph1Ae1SZPyqoa4f5UU8WhETRh5W5ntpw64U",
  "key21": "2ftBBou4c896YiVsHdTmCiBLa4k5S3CuixASMW9AgvnqaY3i5vo6sM4ZvvLRt6Y1TV3EcQXNNcPeSgUzWhf4cDBo",
  "key22": "4LZPSgUjFatSEjNwdATiHsMK84G2qedHT5ZcaQWESa42VtUrEhF4N5yMSfBUnyfnYQ26etaJhQn8MpC7oQG1Ud1J",
  "key23": "29dXKnrMNyo7rmP8Bgim58RT7eBVZNkfPuQBtnyeaDKea1XriAerTBGRbBjg49ff53kvFhMnU34nobvv8SUCWczz",
  "key24": "5q71uS6C2y1yNhvvaG78QDqoHwB6T1fWuqPkXB5DMyNWJa2wjJohxAFKH4PjeL5hkDtP51P4WmSsHjAj4HQHjh7b",
  "key25": "MzJJuJD1oN8wD1vW5F1tNSKu6eoVvnbbc8ok4jjCr7sPHUKRAQWQSQCKjBG49KbKnKLCQXxq6U48B3PCgJXjZPA",
  "key26": "5VoDLFzEVhZSwJ7ZZP687bVmjRTupqvwPMDBRWyckChfmjbMzVTKfZEJQL2v3LEGnnBZiSpuNuUp7QxwS25BQWis",
  "key27": "3kKihCrHxF98fJqToFCik8LPQPisPKkqKB1KYszXEby9uectDKHrSFSX1i2Pr2KKDQ3oasLLTdE79eTQYAjbQRia",
  "key28": "2ZTmECNuWjAuJGSMcJhmLp5wsvhMYyqvhX1r7p4HydTABVDkFDCrXAMtjsmhKZrkWaVnLxRGgyWELuFLpoVUnJEE",
  "key29": "4mDjhfuscVnz8YinbNYY9jQcdGUNZxvR7MghjFco6nM9tfjiXxodnpCAXaD6RFSsNavonsJ2HQhgHbaMm8vxJpjF",
  "key30": "5gpSowP832wc86TokmCdySjNtTeBuPFqNmbWmaFWrdReTwRUtwjT1sBsU8xmcxSYd6hXCSWB2BCJWpUFthGLf27x",
  "key31": "4UiuKWFk7jqYxb1a2RcQkKSVF3ytFWPEb6wro8HqejXc9hd29bxFWmi3ej8qagu5DRGrfminaWuyP7JGjgcSr8Ky",
  "key32": "3aUixqkCAaVXYHE8VPMcMtnotqxoY2AFpT9p8agnaZ7GX71vUgXKcvXNvg8C4dfuqYpFbcZRosprmrzZWWjjHtnQ",
  "key33": "4y5AGmsrCL3VqVg49VpRnLmALjKh2TDriGMR5eNCkZNMysTFfkTEaVGux5YR8EmawyFVYgoW1ncQKyux6QJCmEqZ",
  "key34": "5jmjn12VfhSmihmQbn39ChodAoHXYVhQsqeSK3p9cd5rwZeCZrJq2M1mETLmcc5vy9hCRwxMJkSXEt4nVkp2Dr5C",
  "key35": "qN78wEJX4nLPAEQYJpMkD8K3zqi2SmgDYpJoVG6nL5PAw6UrT3a1RDwxtmnrMr27R8VrsBF9MCB3m6NV19AKyvF",
  "key36": "5zpWv5tux8wpp1kR492zXkPoZknaTnGd5SL4uZ1wPuzTWcwtdJTtRSnfCfJp2C3aqxJNn35EP4H1SB7vuCe2YHm",
  "key37": "r2CCh8b97phVA3nBkJaop7AuDa8aQwozQY2V8oaX2uaB637X8VMGTmPKLfkm5RHJo4MQLFx9CGZGUnyXDK44w7R",
  "key38": "3jDRrARXqYnLQUmZbLNWSVDmSjFqTSk8Vc27yNCc2UN3E8noTh6U3PLieCsuswQAvqoN3qSJWGCAK23bNzpaRfkZ",
  "key39": "pVLauqFKLWaWvtodmJUq5ogS5d2XKtSVaLNaisrG22HjcJT9MduuNHugmY8PF3jTLnAEuUWShzj98MW4CpT3GyA",
  "key40": "4FgbsZPmXuhUZsK2wrZa7fuH7gtNUJgEpKUeErdjB2PWySm3MTiN94cvQsotYnBti2owDa2EWCL2LBKxcBdZGh58",
  "key41": "4NPByQ2SDTuxzyzVjmNy8ZVqc2m3hnybbxRspwkLgJMoPczCwmJcJj3RBRAPQSvipEavG5DomG5gA2ZKcv96tuKf"
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
