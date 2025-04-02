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
    "2BpAPgk33JqRq9MENXNog29J3dvjzZRnZ4rP5X64UH1TTpYJd1Umvzir91KavReFmYN27CDHiMNAQRFbumsRgrA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j4CTaRoKhtQy3BJSbDnEQEF5i5cPmy5fE3hN7TSaCamrXKeBacg4Db7E1u9vJsJkeqisfCaMdGHoj1ER2HvTVoo",
  "key1": "4rEeS7kaPgaYy8PDXNVR4CpL2CcNDtYjbnNAj2PrGPmbacH2EC84y3XBzwFQtVZcW3mwDwLv6EUVPiVX3iiw4CHx",
  "key2": "aXrWYbZnmNoAEPhqv3ouCdTmNe47jHmPvgKicvL4FAeCgGBtvHTG6GjUFsYBkzbwwVWTHKZiJZdFuJrHRVKDiyC",
  "key3": "3oZJPUYJz9enReFWtARsP6SZ4Qtj7gcCUGohZdNSfbJ5Evq1YhbLfn7hh6PyN83qsmGk4ZWrYJ2XTJSnJz6eAynX",
  "key4": "4hSs7sKY1sLnvXFjbzPTncvsM3WPYZQjb6aD9p29kp65ihgXxwkiPyChML2C7t2aReLRjWazamKDKbaAHaGJbatq",
  "key5": "5YUHuj5hE6q7HXFq5YiQCjDJJwHTtEvLCFvZtygh6tdQoFaMwVmAFvPDTuT2ivssVPiZeLPhawvEmjJ1byzUpqQn",
  "key6": "5f42V6kVNvxUkS6NbdeF3HGgiPtYDi2fNuS2dbdku5Xn3pdVXStmviansTsBcHihJPwDexZZSwPyseEMZ1WDm24Q",
  "key7": "395YrNQmUu1qx1q5nnUmSTd5kY9NrTnGd1TBAcjebJUfaAziyiBeARD4K5Tp1UXngMwzYBcS9eenGP11AyhfPeJC",
  "key8": "4RYxjCWPM4ckYy2UBXSLy3ryPmhQBZJdrBE9wiuEiGyikrniHKxsM5Pb6Z13DjaAgHsBm7GSw7GCCqrESbuTzAMb",
  "key9": "5xPGMFeSytkkVARQakYiecnhvBAwkwCofSrufdjmjm1LMEziFd8ESBD12MCq1FjbaDpP5JPSDasSGdWjU6Kd5tMa",
  "key10": "2WV9nu8BPhFuvcCffDZ2Gv5icVJeDN5fmPLKuGDV8GTUx9sagUibGmEeo2gr9imirkiUxfaKf1zmSZYjuJwwqdqq",
  "key11": "4GscFMvRMmYZK4tKXZo2zExZvrREhEFkPmaTFYC7zo2g8NtQjXr93FZ7ZLYNZqff9RVxLDVSaGxtazZjF1tMjV1w",
  "key12": "42rfx2VjHfFkd7B8fbTAeot8Et2ezLNbUkfdEDR9qQg9VcFnjL8LcvFDW1N51rBA1apJVbQ4CBvQypNxxdfufEzF",
  "key13": "4sHQtjUAbesDchM3KMNgzG56DdKemHSKYTGoS1LVRP9vH8jnZor8jCqr9hSobzpCcz4TKuVci2wwLEwHtELg9tWc",
  "key14": "3G5BzKEe4JrifYjk3gZJ435pBdNz1KZgnWMgXiRwnRjc1Vt5r9XV4AmekmxNYRSNCZ9dXaeLLALkjFfPYxH9TKLN",
  "key15": "KUq8yhQtzeTFJqvvCrrXP12KkDCbetgnEZZmnDRZKrCpHVQxWGR9HF1H5JGN2xhMWoSXwbdhVBGhL5x7DYNXtJF",
  "key16": "55YPdf9qFHhhB6kFFdu8mLfd9bhYFni3p6zVwK661CeQcYw48HrXxXzgrCRfRcCSEYpfWaycFd5i1ajdb5NdDVpb",
  "key17": "34De8q6Yu1fSW3cmPAzG5goVkuX7AbdvzyoW2Qh2uq66gvfLtWtHatvqCfmijmbVpDYysUDivc8MxvutqWjpsQ5S",
  "key18": "3uci86CtWKcMSCzfr3FUHMFgFun28BYJSjdBrB3itU9t1t7V66wtmUVfZpAi61qauNFbiVJdvHB23RpoPeDT89bY",
  "key19": "2Z4GJxgRkLuofsvyc6ffYqBihyXha6BMRFbtVm1ZH3q4euBVjqUqGPq1g1d1TSaoKN7mG9NDLBecFDEZjByzxzo5",
  "key20": "4schVbupceCrkAq6HztGjsxTbbx95P7it5V1w95nKMKAeY3DorJbTdTk79ojw4JWK5WiMhr4tayhrADzJ48iehq2",
  "key21": "4WuqYLD4m1RouoX1ZdoWY8vZNMEDh2hwTqiC1kQHXyWsKef3JSXWp2pAQVtGbTkFcvg1ZFyz6dmjwR85qxnHYdm1",
  "key22": "5w85Y8m3ZrkvMmW5odPTXeVxEcKzMSJH3Ppphe86dXSxabzmhXByfigGeneuttUSa8TdhKr6AoWT1WJtH4rcT3b1",
  "key23": "5cXAwXEaKB9Q3guJP71rPqzHfBSRsh14dLNLKnQVbPw9caSFZJ4AGY6XonaAXwxjw8T5gV3WGfZsMCeN82sNHBhW",
  "key24": "42c9oJnsZg2Nt2nV8X4QkDxaTzPU3vFiJw1uyRUp73ymYafHZ3ApKVBp95ScrHVGcYcrmFhWW2GAJnQSqF4sDgRz",
  "key25": "3eJh6AzvyRZQ7PAphzu9etXS4gxWSPExYPsBS8QLmDs2T6aN2RjNqyH5WekPssCx4pJ1NDJTmhDZmGamPfybczGm",
  "key26": "2wMYVsn7jEgMHNj8Hx3uFjjkMNwjWFkQJQdVEVXTN9uUBbwg3iAJvDX19A26mqBXU8gbWnHNKsJbekxEDnRS5uUW",
  "key27": "LPuSm8J7pDWJ8E49NAwSLoS7aVQcgWtM3YgYieLxTNKFB65ntw4F6oZyhH2nuNAbsAmtM3hEGNHSDCcsDJDKGB5",
  "key28": "18gEGtMkamdGK7695jdoNiUa6ZBoB2EAfZKEyEGBy6FB2Ug5qE5Uts9aYCbHf3J4QuJUUVmQS8FLR8x5aBF1761",
  "key29": "3SBebDbZXjQMtKdCyRXJQFv2u2xcTUo4sHwzjamBrscWpqsZiMmdUnQPeiuymyGyenqDaum3Rh7XANe4kRE4JMeE",
  "key30": "37bJFeyCCqf3L3yYLdYKT6J8GmTWP8M45k7qghacVUWbK4taenPaPDXUBweDQWZ6z97oGtFfF1vh8tciBrBXnCoh",
  "key31": "ZHQY1ppmrxBmyr6DC2atSaKZuL22hMaE1Tcdp3P83obVJey5zis35gPKBArQeQzHQwt3mR4Be5zwaTjd3PFvmis",
  "key32": "3RN3RJrp1dNPFHkVKp3vQ1UyrFFXwTUThPb5BtMocNhXN166Nx4zLDEkVY38MTUQCDaTR9HZAzNnBawkNQtLJqiW",
  "key33": "61ZAQLpYCryC4Jk9jUT6ku8yioxsvpbr7cKQGLpLMYLPBsfPfrfGht1vBCBjLTemYEzXGqAw46ULDHewSQAnsW6"
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
