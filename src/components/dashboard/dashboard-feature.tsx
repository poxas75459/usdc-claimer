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
    "3FW521rKLNXDNgKeAmNXQW1TWhGHZn8KHUei4gKB8TMjF6TRMJLcXiMDm2y8FtHfHeEC8hTznuagfB8qsPgqWK4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EbUoTM5VtBcWSMkZLGBFXfh3WbAiGz4xXziMfNLqL3BBEkjALQmr1iCJ7pn91UJdYJXMm2DLk53gdcW9dVFNnma",
  "key1": "Na62k8Lrri32ghAKfgbNmZVqmUoEJ4KBy7KyTGqvA4qZ5esP1kLBsvRVacrjHRLd7xtCEMraZWLyKY9d9KP9JaM",
  "key2": "4UaYRW8esYu6KzoAYiLFheLxAiFC7vyTdw91SNF2pi19rVTsVoJSoNSmsyn7Vc8eguSFPcTb8z3zuMYCEe2Ujrcn",
  "key3": "3einytPBs3qK3y1PRQieeyt28d6vzmBE5UKXgXPKFMMKLSrUbSat543VhQkk5Lg2knq4uexLZNARXMYgvjCLSSFA",
  "key4": "536V8KEERSe6VDiU8m3XegZNEdj9fTJAuC38HyaKoudMZTiFH79cSHpYLTUVmNQaGTaAG7MJiMu6MRAZdMLrX3k5",
  "key5": "3QcVh3qQc2KUY26Rv4m522iR5yvD2zDGVt4yJbf4vkkeANn2efGTT3dmey59fhmykWN8PAtvkB2FNm3yuzGNaDVb",
  "key6": "5T7dwfC6a8wJFEmUS6jxfXZxg954Yh7J2KWb7fpBpLp3f7WWfXzBrLkbVx1H7UR3nPNgjfWwxYLsgG4rdyqJkPzQ",
  "key7": "5SSyAVKkeyw16yVG535wewhJTHywwSstbsq8kWBJQFeasKkWsYNwwGoBrXcWWGR1R8xBxsxDCAa9xHziK4juikBf",
  "key8": "4ZUnsMxJgMFEBhNFSkRepTFxmGoZNj95bykbz8kpvXtMq4dGaJD5QYJR6eFxsWEJQ7nahJyRUhea7DcsvYGTStyj",
  "key9": "5ximoX4xTVsNtSrv5wqFUp6BnzraaWBdVm82VdebCimcAp6yvaJdvrUi8YkQ51E265xhNc8iKqcQoYLZZe3Q3Axx",
  "key10": "5jyZYV8giJgpVsafmQhQ741B5vPsyNPCdBsNDiVjCRbb88VP3S4YKJVKvDGbXwqCFhVWFySpCTzDvqMRDzgP9pXv",
  "key11": "5r5b4mZpVqguaXFJ39WDDe7dXoFdRHCmZWetzeYR199Fw1jbvPjqTvi5kVdgZAyHKkw3WfXebLhHCqbXFoCagpaK",
  "key12": "5pAJbcX6Nhsrfb15yHikMxYZZQYytJnXmUPHgK3LvhzaJtqXnuSxVKFExy7pj7a6JSqurtrP3VzeemYJpYX2mXJg",
  "key13": "3KXXTH2DFPStsvGqTELSiPfpGjHGmgZ2rV6usQ5VXGFCd4Ne3iddohds4gMDA5cCcjJfawBCFMdrVRTzg4nUeTBV",
  "key14": "PgNJ92DnCiedCg48NrfaV4pjdXtJEHxZWamPcoVXPLp6W6wH1c2DKS8K9C7PP28hMf7zfoxojh8G5wFjgMheqXh",
  "key15": "3LXvRsBdNLjkmDgua5KR3kfdkaBo65F3HGE9DnYK8Z4N4pF3LBjE8KSBbuLYHNtFYpowDuwMJmVw9opFrYPzDGKb",
  "key16": "2gzqDTR9nqnLdRtY9McSN74zVrB74TCTBNCjPjdBkmoBcHrfBvQjQnN5CsUzko29cU5BqAfrYaxethCg1dEEnSp9",
  "key17": "47WEW1XW2def7p9wLbsRQ3Nnp2WtWnHMxPjF18JpaGZZrHuEtyDkt1AQ5RST3uqtCADi3H9TxUaiFvKomEGxtr4N",
  "key18": "4jRmpzhKFgkjgeaeRs6bhArEZz9wzUkPGevnUeykPMfGuqFHnqX9bmhHrngc713o5Rbvhu9m4n4yQFHfv3AsKtbC",
  "key19": "575n5QjzxoAHdvC7rhF1Fj6ENiCmSktcQy7skz5fpwFxmMzLto4eiFQPHoHwagwex53Smk9DAgcEGfANgaF3Xkxj",
  "key20": "42RZnwu9mqYbGm4nj8Ui9AuKaCKBuGwXtC5Zf53JhPd73ZPmSjXG8Ff6QgWyfCczBJj6gRKJiuyX5uMxerNBjonj",
  "key21": "oVDxGHkEUHLi7RU7PboipFoRkhPKsPRWMyXYHeAtRy7neuXtucBE963YhU41h1N5zDEGbDE7kA1JUHf77d3RdBm",
  "key22": "5XtEVgmmaVnTS6QsirkcY9utUWFVVoRgKXGaERpyuzhT4e2zyWz73ABeseGSc9X8K8a9XrwxkoQZJzxSWyxvig2h",
  "key23": "FtvKgRbMJUqgcqXfZnWb5oMKpCHrbRo92updw8uKabuZ9YEQBs1BuhZh4irfc3fDUHwEzQokstuUCohWGcngLZb",
  "key24": "5GLshBBMjN7yCpLmwWTKH8itTi8phTb4DpVt8o5srGTjUY1rwfU4WqtuENeXBaLx4syyL417UUBLsS53Z7oWPYfo",
  "key25": "Yj3nQxtyULwLt7SbQRJ7sMYVv47sm5D1uHvWfz15BEE2CqaRa9gjU8TF645gAqH9ibUPtyBhbvK8aHMk3LyV1Nn",
  "key26": "4zhxpqp6Za7vfdZAC5TmvBp8JtADfihDKAsPAMEaXQ3rLXgVic9quEjPAVxhN31J964aGhekgChPaHFV5AwzD7Rm",
  "key27": "4cXw28M6BCELXZQPN8jWkL7o36W7NFsgAei2kAMNZMYZpTJRizJurFn1eonjyP1HUziFUcuieu2NFBMJxAqj2tfY",
  "key28": "5duJgeNtxAcz7JpYiaLhKX3a25KTVjj3sVvPFoSDvD6x7miNaokQjZfd2TXq68m8yYVDcHapgRYcsmGa8JfmZW1H",
  "key29": "54jhiKpu9mUfemjjTRyaVo2XG9mZqZTe43sd6BqUJcRdPja7xYucY4ncaKwirUcyP35WKpChaF8CAU7qiKh2tqs4"
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
