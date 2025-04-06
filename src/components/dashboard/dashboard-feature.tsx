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
    "34DJxpDDQuz1sm3HQ5B4CY6eHEH2u8A62xVcvZwdtDVzLvH62hNXqBaLPMh5YeSV2cjcfUtLXN1J96qn5j4N5G4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46hr9ftjF7X5n5SxcvAqYeYGcVFzfkkGcA3CDpmCvdp2yQCiXUQ5evLSBbo2QpoiKPPWwN378ffr5aDiAk57awne",
  "key1": "DFeYS7gdduozGWJ3epiXTSHpRpXrRc4Qvv4a1CMk1QgdSWHf2Un72Y5wneNt1oRBxNsCp7xZ1949yEfCLTQq9D5",
  "key2": "hqfC4owbW2QMNT8EQTb5Wx7zaKJKT86FAhVZmaUrp5vXTmi3VNP3Q3mTAeDjAe2a2cFpkMtzK5XAZvwCLtYPGzQ",
  "key3": "64YYhLkwNWDYYvPUq5NvYA3f481NYmreLALZf56J1SiwmKwm978s9y5RFHCwTp699psMVATVP45ARTaqK6dwGScH",
  "key4": "283FtxfS9DfxAHuw5CU5spTsPxpxhd116eX2jRG2SjeXXgod1rhwbHgKHPzseBTZb4XmbFPeepTdyprtYvqWEdxT",
  "key5": "2rcPCQbn34f1RKJPXEd2ruLR5XrMjwFGaEEsUk43DFNRnFLg4E4DYQDgCE4mkCh6yEknwEb8cHpHrnXzHfE17gVc",
  "key6": "61m3pkDvHszJgmLDku9uPJn7ctVPUay2NkJmNhXdnaQMeBKaFC2kUeLtpg26D9xp9oG7mF6423Zf3nNnXR3Ux8wh",
  "key7": "2JKeAN1Regjg3h1MWwReoeTVVbSwKmQ9DtEhWkQ6yfzB6qmGzZvvYakpHZcosGEYYbcgAiR8zyjPefWa7FrmMPwq",
  "key8": "56NdEYfzgUeo228GJNR2HMCVQ56oo7en6jGG8ZpTJRfWpXAQuumXukS7yV5KncvK88huvkjjBRvzC2iYvC2n4sKP",
  "key9": "54dNhNLU3cHWQhrv7c4aFYMsmpRaJWQZhbDrjVTn8VqEKZbi1ns7Kg9ZKvYoQPMP3b7MVE85WspTiNpmgsby9dTg",
  "key10": "3LSfsmy4LPgcQZ5iptJoP2WweZFRzNcEBcWAQwuVJjpy18X5EmPCk1nZYdPNk7xiXU4bzHggzCwQXHGm7RdgaStW",
  "key11": "q9EuTXTDGyxLgzr3c8Cq4N9PU2s68ag15MJg3aiBQGgC18qN3TqsSYKfyTYvYZP5SxFEum9Dp93srF1kCAktThE",
  "key12": "2Ku3JBvJqWfJxMvBiJogtywP96KNc6KEEbKHpBQxnuDvjMArYxriWGdLg7NBNPZHvN5pQmuHUuVNY7uYaQNWjExG",
  "key13": "JUxX4EXcsfwh9zVtqvGPGn3Qitv7G9rZyhVwF5t6MZeZ6ois3rAGDisZtkefd9zkVgipRB8e59gsH43m1ScVoBB",
  "key14": "5ay5BfmVfc5PfkZYTvKDe8GdSQ1ZFLJhA6DHHSdfQJ3GpyqsACm9RYM11kq6sXmP8LeSTgJqUCKsQyvwKRpLnF2s",
  "key15": "4eVgzXU73nAMbZ38dTNzhpNJW67tW9V7Tbeup74EoL1Faa7RJWRZBRaR5ox21Lh41YJUWRYbWJaWu7sgL8urEnc2",
  "key16": "3C2D3jViYH7sbdbYZDjjxzXjUAeXUWJegNTVA2cM5TtVFwbcKoe797NyErBq1PSmFnBuCUPmPowU7wwJJwCHSLSJ",
  "key17": "4zFm6Byboy1WCs9wTB6xASALVfHGKbZTPNkiVxCA7Bj5UfiCCJBtmKUPLqQcSiCbAP48Kzheb313h3LR51Kp81DT",
  "key18": "5QjnA52BU3DARunfBdNLdgPUSWS1YZ4ckEmrWEqfdc8cwKnf3bdm5D3GynAd2V4P3HLsBCk3TpPKrmivf63L7hVR",
  "key19": "2mvHHdEMLjwk2KRzuZvmUX7tk4Qb2JUPNWCwGSVdaZwiFfkdwHb9gZ3HUPoXyipv3iNsE4YoYFvr9FRuV2rpd2Bh",
  "key20": "2WPwdvYaTBKtWnbWRqti3QjtAiBcemAThSqB1Yovs1Yohjk6ZR19bZkWh48Qayh6Xm1nTewn8fH2EX8ubYaazaRC",
  "key21": "2ejxRBErBWEimzVZERA3VXHio3kbsRLx1sDqeSh8VJimRuC7vzBNRtoVT6CFSTwUrwKPgH7hDEv4cxE3cbECjPn8",
  "key22": "22cZWp2R2122E6DAHoWMsHpDqYKp9rFfpLDMGwuXg2DQjxQtxqR1chrCd9rt5eHcoJPZXAZfpXTRF4sBEfx9uCrc",
  "key23": "3nMdrT1jFqgb44CtUQLxw3uT9cxWLmvyHhiZb3DeZ2vno9LDB3KNGEnMNc54FTuFafA3yXQVCMbcYhRWd4S4rLkH",
  "key24": "3s75tbiNsJExTQnWg9mm4K3qQWJqwjGVDz3q57Tug6j5ijpy6qnQEQcMg7KL5ThE9YSgW4XUKHkbheJjhbBGUerq",
  "key25": "2kMGQbCwS1W6syTdFw8bek6KjKPUkvCibcrM3A7uBDjV3k2TrcRLzEDFy9QogEegJgGWbEZYu9srQMTjC91ECqkD"
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
