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
    "5UXmUiy8RxuVR7yrSeDsxPqgDcN56mFFUTHpok9KV2vCvUexpEx2DXWiuVix3JAib4YNRQCmp2QSBtcaG3whvsCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LoNegr1bRHPDkEtsRAmTAE1gFksDkiUB2pmYXuWc3NzsTWt5EaJfq9TgDvdeESnf7cz3gQyfz5CcJ1i4j6chufZ",
  "key1": "VyJSkzNjtHqQnJ14bxCHtfp7Ni9uoi1E84jgTjXYZQtptAXRiRVUFWuNcEULkZw1e7WRcZxe35TT6Fcr9Do3Vo1",
  "key2": "3iSWttJx6odkXAEzf7s6E7Yu9AvumP95ci6i55wWWU7sJNEBroaWzNittfsWueqaCFp63qp4yrjeMnbBQFMki7jM",
  "key3": "5q1XoPEVvHgjxbe8vno88GkZP5DMzgpvZMwTaZqdDQwnegRjsrf66CErszUX7P2GQowsn5MkGxkstd5rcidDMJvm",
  "key4": "oKNvUN14w3h9Rb3j1yy4sSmjyyjfSdzr7qBYbVs8YSGhxwsZ8cuPurAr1b572VPMHRebge3vT7s33iuTwFhDDut",
  "key5": "5ujF9ePaUudE65icBwQEyEdpxUUKFubbctt8piT837UnmJ22NRF9hLhiu6MsfaFsjCTHyHbbGQUywnyG4ffhgQot",
  "key6": "5F5cNWdtGFYFYD1DCkW3iHKkYBZ9z9ML5yAPyRT7qPKdTHTLzG4gxoAdXXHJSUjGm8Hj2USTcxGC2gKTBUdCVVGN",
  "key7": "2HP4Y9dFCvS3VW3cFWscXvMLDMmt2KC74b9A7pp3y7o5oZy1rKTrskKMmaoVKHkETLFxECzyETZx32GUkfuJrc6T",
  "key8": "4Sb5bkxwSFqmdQmswDYsjgUmgE5tTwtkqQ2jC2cSv3thA2DrPYgAjm5wBsEGCSxyQLF41czDicyHmtsjx3uEDCm2",
  "key9": "5ioCZVKMdtN3fQSWNJdBiRGAe2Pb71BtA6Mf5YCKjhAMMFLXUeg4WrNfbDpnpv2ut7XqnKGPwELScByugFy9pb1g",
  "key10": "LnELLDF3gT3tZ49V93Evh99ecVj3J7fEwKwkV8TtvuGUnXW2e1AT6aw9ifRX5XkBBqj59ZZmTb6SrWX9dr9HAZ8",
  "key11": "5vMquXS2962t5kFfZmZwK8bSVaD2YioDwPDihUy9hz1sBgP7txT2r9Eu5gd6GXzu6zLWYtfpTmCWJydXBw7HKQNi",
  "key12": "fsKEykfYZRkFqd9MzgHYDe4rrDsFgzE31KYi2D4JxHUySomWpPBQXJfW28A38cfnm1Qc1nM3rCvtUmCCeauRx33",
  "key13": "WL8ES4QTP7PrXzHyJ71H1CVguh6XjL6U4njxRh7qwPT3ZYBKCrgBK23i51eFNt336kHdWpHn6YWGdUMC5VDNvxe",
  "key14": "5ZqE6eGo93Qw8BpwnJsTdAr8Xwk4sSsEo84D179hEpiVRMz9vcREAPYAoFJV1pJHi7cSdGMe9bE4CajM5swZtWkZ",
  "key15": "2hZWTh8P1Ymho5oYsNi7HRnsuALPvXTfZnm7YkePXPVCgA2veYYD8nt5uNwp65CmLoUNU7DQWb4WUWvnkAjtELtc",
  "key16": "2bYgMhguXK6E1FwK44TbxuZ4W3eWx3ztQcXtvfZ5FYGKfh3NdTjcxULRsTZCZYAmTKjKXhEMLaJMjsrJ5ER6QsVV",
  "key17": "3ne4NMamqDuTLHVkEJ3yWg7zG1aznH7CbjrCb9w72jFnfQn4JkXh7fdz4vgC92HYuAgoAgiJoRF6tqsoSs3dsjFY",
  "key18": "4h56wfJjjDiphBTXSStE5fBksBHoidHMJGmHUAMmZC6Uqe4BVAJzoVqmZ2todjVmchsindsCWscm1Ln14LrFvuAn",
  "key19": "5xa6mJ4fJQF8Kmqb7r3vnqBmHp8792M8vfyBLebBBkX2w9H4H6rJqVqTX8U2C6GBasujxYZWApU79pDZaCbWeDMm",
  "key20": "4xYZpkcHn5VNF8NeWf4eb3THWUk3ikGvNjQRrNobMfV77bM1j2CBS3fVXjcfGb1mk4rc6TVxQ2NnqgrNbgG5TQgX",
  "key21": "MLVJfVhviUMNwt6m5PqEK57Hsc6jcPbgcGUeaxrFq3x5WPZisZUbUHWek7JK7yJ3fHiGEUCvxkyYcCseU2y2KTN",
  "key22": "1GJV5ob8sngL6iKKJHV4wMyacw2LEdiSWbfxmGrpjdjPVX5DF6wzpphTvNyMFG5EYAv4xszbBW1gQZRky2CZUgn",
  "key23": "J82iFCCMMgt45ZuzuThJs8oc7eJbiSp5EzSLXnTSpBNdxdzCh8TTXARSzu6PLQvP17kescbXCtg7Da7R29R43JD",
  "key24": "4hqWkbJ29GymZvDVQG9oBw7piHCLVsAR2WwsNoHL6c6q4Qe5SmAVn9C1f1qsV4eG4PMYwr9fqJAdJtXgfaiWCW6c",
  "key25": "4w9sfVsQrCSiZeXeNEypmqBxHhW1ZFtaedDqcMQ66anwm61jw5XCyxFa6Awei8AA8oemVMusNiUeT8FLxX2KTR9L",
  "key26": "2qwLqBdDVWbNagsn2Foxez1RVueNYzBFZag5p7wa7eg8jXaJUdrPy58S7wrN3WvRhcJX5jfGe9N6mTxsfGbcPZHT",
  "key27": "5qMCSwvbYXTZb3tTUaVdFx1VvCczLSB9mt5qLa7a179YqCEL8giG2xU3uHZPhmZBEAUEe4VzjXh5wP4YDk8WoW7Z"
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
