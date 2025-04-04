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
    "5GD3E9TX4VYcaT1yuz75USVdWSD2V7V1W23XkkNTJkPd39ZD4R88VWfK5ZLJ8MM86MkegBvg81w6r3sHox73mGvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AD2qQv4g6141nEPSYEjEv3gBHAQiwNjZ12PcbmaWHm1srkS3ct8Xw3usD5WFDU98Fi4xeEsRDT89UqugH6S3NR2",
  "key1": "pqnPL6uYYdAKFUCP9PyuRwpAvZHqLpxG2UxPBvdq3KpfRTajfWq7ZDsHrrBSnCV3DqtwN4LndRuiFt45FjQtwAU",
  "key2": "3eeQ3nrYFwmjJcZKGdZd8jE4iMExb7foujkSoztBEaxP7E9PuVoRE8sQhVLpzzxUmDiDmSP34Sf9vpSjjQ6qR5sg",
  "key3": "3AiyKbfxsRTuE5ipp1B72rRuRaaDB8VBzf86LdkrU2y24ggry5BcRFVD7orsFzahAtJyxFKji27FWXMpvQzQYM2W",
  "key4": "54aBHZAYus1A7HtocAT21d3tcfV5KKY5MQXnVnbQhK1khYKAqhVPZhfPR2gzvBhuUiX9tt6VomqKp3XY4TjeM68W",
  "key5": "5g8WkaDxHkssYZpAr8mNZZsiPRzHQBGtWSi2h1S8p86PxBVEetiyqoLUwDGt2dpbGX44jcXXF48F6WyYdfqsdjDY",
  "key6": "3onbg2vYjRPMi3Si8tLcm8xhqrz89uCXh5GKz1cc9F6Bxwvuz5C7JqcByo17Tz5M6Rn2MjK8JEYzRJnzcesajsQZ",
  "key7": "2vvf7wV4LSxohTKPi9eGqMXeF6GMiNyNyMNqbHC6JvM4DNtna9oXR9SLwYebQuGKi75C6GTT6UyGgqDR683hgG8s",
  "key8": "KDKaKoNJ9BTMfegGWjKGq6qsm8Jkw7nTjw6uuzUYjQMgorZYhRwMjVYSD38NPke8utYbZsRQm1oNPYg9oiX4maV",
  "key9": "67GjpmddK7ppmgXSU93xFeFe8fB5YtikLexKZFxZRvcQKWaDvUHtNypfsTAAAx1GuYZ6C1Rqd5jpRNupZGR1N7Cs",
  "key10": "2tMEXcPCdj7naz3NKceivJZQ6gUxQdhr1cgHdMh6fXStakT3kPG3emva1WgNwXrnL1XMhUMd5bFk7BGxfd4auzEP",
  "key11": "oYYmvaVuU8kP7c5ZbCpvKqGWoVj88SVhEvdFD3zJkGtcpmbs7339ryxn8Dt9CnLhG5VDnko5NhBa7thnxFQoF9P",
  "key12": "3Prb3ramixrRh39tWEb8bQ9ZHY7pjidFdABriZkCTzBcpqmCrgrPSCa2V8qCponWPdGjQu2yuebbHXHF9tC6obv4",
  "key13": "ubM1FF89ZvZmjdFtijQqDEPmfUHxfMqGMhYoMLwSkWLhhqfXB37TtH7s6QLFfY9fSHfSqkHsVrFdMLdrg26YGzz",
  "key14": "Nn2TA6FqXHeDYfJnNEqtbkuYozemrbgXoPjC5foC6FbdJBrGJDL1BfhWhYeVev4dcYYtNkDCZZHrDL5zJ3VLnug",
  "key15": "SUKrMgTdkhWBPxv9rZuEjaCHVjiTYhWpCHiyCvixc9aqXkD9bkkTc7dNjaS5yGKnWBF7kJhWvAoWaTvehSRKtjE",
  "key16": "51rkUfFEaMCzRHwEx8xZpEFQwL3uXtN4XLh7QfKL6oPZZJGz6685MbJMxKhKmerwDoVvUJRPC6YfMdaGYNcmMZhw",
  "key17": "5Hk7npqKZB6dqKWXExigKjMyojDECnH2T3HFRvDLfEgcEaafwF3mDvye2mXLySNxUCMwHA6YKQrWf1fc4wavuC5D",
  "key18": "62bzjt4grjxkfaMiZ7pmwhgGZQT9Cu5UKG2N2A1hTSPTJ5roLSpg3rR29P4MVqBfCPbEqUmD6KPCLKWZ8t11PfcC",
  "key19": "TQXBaB6Sd6qW1Uur2yxaBQrjfwqasyX67p1v9E6ajUrfhGWk5kBdhK3U8y3Pkg41XeF9auG5bvYhGACAKJ4Ggzb",
  "key20": "2gc4vqsysfRvMNxHnyTwtEW4vYyXpXTqeMJgq9L5GBjxQV54hfxPciJ8Wwa8ZPD6AiHry5mMQG7Qkkip7oskU39h",
  "key21": "56co8P9QsTtQ5PpnNFweQ3B7tqeJcVjC7Se8Z8hRHPwHqB67uKmeq7iHFV3RcVoDEgathCTsMWLvqYngacUbor8a",
  "key22": "44dE4CSG2jgg4mBEvje9fVGZH4eNUxBhcoM1eF9CiuhdaEwZw3413GRZMVL12W6pvKpWAxqdypw5ePa4cBD4fgcS",
  "key23": "3x9R6P88Qn8FfL1hLsuHqgZRyVGfLRq5TmUHueAdf5wAB1jBeSrajz1WK7kx88S6yh6ZEZbr9vnYrjnhcHHUPWv3",
  "key24": "4Cr9y6QqCtAHLeyZ3ykXUg9kMUm21w2MDYMGWADSUbeMcBe2348zMFeDPi2VdowgdpvVzQnNtE6GgYnEm8FAYJvC",
  "key25": "3kKkkcNVt2qrjmhMdToEU9BsGaGqPWPmUv8uyjWqHxXA3srk3Xf5mqk7MYD5gNEiCFu2oiNASTwBSW1UidNaCGZx",
  "key26": "5kaaiEYhWT5JpT6QFo2umSCWkYtnrE3WDSMZT8mdgCVqDm8yitWfckSF7Q6QCshYk5WNv57iXi7bQbBCWbksRvbG",
  "key27": "63QKbBAXd7PdkfqjXBgVHc4eVLv8EMHhDSAUzgV2JYpgagRyNVQJHfZjGnB3ddSzE7gS6fKp5GMHY8DDKgos1eaC",
  "key28": "4Pp8rdEptZ61dsCBx4Dsc2oEtt5n7T9M5T1dj9YKTiPK6RLpG4rPz2oKDmfpAYtARiQoauRyvGZo1pwEfBkFU3Nc",
  "key29": "29LfkMKzCvWDoRdB7wxP92FkDbnLgCzhVynoSpJ8juTTvudhyWsesnndaL6ig81mFJvAnaZa1cxhjj2buGLfaiU7",
  "key30": "5Qe55AatJymCZUvfPUPsvcPEkMXetUF6MsHTcpBMJAQvmwUWv1AYJaCvt9sP1BF9zxVjh1TYcGzVo4EZB338MJuR",
  "key31": "fFYVw1Nf7ZVNYJWYB1aJmRKswFcTSkdpaJxG9bvFcJJB4ggLTNeTXg41iqu5vNiPmybfTdXt3k6CdYik3uxiGBz",
  "key32": "AVYiMpAeRGK7pa8JmyfZME9hhRGzxk56Vh3KePEvSVocSTn8wNBR2TVjx65k69u6MoZHRXhWFp3tUUzEZoJPFLF",
  "key33": "4ddobZFbH9WDQ4U8HKpZnB11gyyxz6D8N2GcimaGXmRWJPBF6Py3mcZKjmhEC8weGGUp4chJE8p8j1ymVAqGEmBQ",
  "key34": "Tp9bKQd76qAE6uEd9FncrwDUnr5kigBUTw8zk4gPw63fejD4ZtUxnSkq6EZPFW1DZa1fUM1UUQjuEPm33mCr6zZ",
  "key35": "5WqLPkjF8HHRSekWoBVFrkrR6BMyYJYABS5MaJwNtSVprqVLLrSLqBtqQEvwuvwF4fCmibaZeVUdBYuQLHpwrXKe",
  "key36": "2j46eJRqCy19LY4gaiyKKpbXVwYvqtb2gJtGPS2xNjAbGX5VAfwefF1gekw8z7Zv8zTEEx5yupoH7GjUBXVa1ABZ",
  "key37": "mD66cJUBEPhMsKNmvucsDVqFuyscZ4hqBbVNm5by4KpvU2NgHWBEd5wHCytXDaqJ7gJLEYdELggtZGwGXe3vYAy",
  "key38": "2PZyjF6YHS8Z86GiZZVs8j63tYPEuDjaPP9UW7hYH92SAGDFvNwjWCae55mJvetLEB21nJ243WUCQEmHWpJfqEjN",
  "key39": "5ryccAgz2z2TEp3oVorchRSUhhZsUC4iYy7ypM8egR62VYBW9d9EHWuvzRfiT8x3P4PhtVUVcQBwMgTGY1oVsrQa",
  "key40": "234HYVnQXbTufr1e1BNir3njD8VxLBCd5mvW17vv5QRthWSZcZmZuoLZazbM4Az5Qq95AMeyK5xRns6N5wSULKwp",
  "key41": "4hcSPTfXddF59avYvpqSLAMdzJrRWX2vQrgmzyN21H6Z3zYLmiELokd3Zz4tCqzc77h8pTEDHpt1ymRxFKhsgSrX",
  "key42": "3scpEgZ9r7FYaAbXLJPhWsamD8ZfL523ih2EQ1FGf56dbL9sgQxLsZThSJ3pDc9aY6vyHqWUM1GXQ2Depv9UCy26"
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
