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
    "2SoirerpJgfJWtt588XU7gHqLNZMCndMkEgCyP9kDfSpCMGExyzv9cq8KF1CTSAvAhzPF2axRuR996zhp8SasNgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G7XB6JHFhWJy3BXE4yEKYTxhaK2fgF6u7VY3VDfMAAtwkh24x9RGJKb8F4w5cgs4of3adzA9Nzm4jVCpRkuXzva",
  "key1": "252yucNRpDpUq1JDD3djBRuB7Whed2McT7VswzBS79FabtpGMUvHoisQsdkA8yxRbVVUiQK3y3HXRfqiHCpj2F1H",
  "key2": "2qAc2MAMe97sqe5CDrJj4E6ZyTRb3HW4cCeg7q98QC5uLjYXesf7wovCJgAojsH4MWFPDBAZ3d1HFA4sutVudr6s",
  "key3": "5CMGngf66GAJDcveZY2u9SCQU9rBcAGyF4b4Cv7eQiqgxXAmTFrPnLEtxk9xqWXcSmBWdirMtu9BY2CxpaPrVaJC",
  "key4": "2rjvewvvL7CtBEn62VK9EYybHk9oXSiSPGWquf3ewc8NSA2tAvZaj4rCZ559QYKiZJuGptyoKFCjPWUiUm5LP5gi",
  "key5": "39QCH2mP2M4QYnKkphkCj1Hx4ivt9so5o6QV3CujgDNfdViQvyxPLnyBav83BQ7YnjZim6aAr2xZoxqruUJYEA7c",
  "key6": "BduBQezZzpLnBSFUcXktQsqFPbnPNe4CnV6rt4MC8PRnKsPeFXoCDdvd8auZpuM96nrLNYxhZXjZ8ftZxB1adeb",
  "key7": "3P1LVLWdLMvMxx3UuYaUwssw1EBpgBfkC7EPUzWAYeb6yLB6cGbjbgbgrDmUVSuvaFEK8pJeracsAgyxN5DkNcC3",
  "key8": "2hxSYRAH7SPdirBKgZ46WU6fxBzCDqhrAk8ZiRLjnMCszrijKMWrqsnXD2ZazxgPnAXXiskBvQRxd7JPR1JvAVPd",
  "key9": "5Hw2ZeknxbuGDhEJ6x6hyvogdSFco1SgCMG7WiwJA5TNAoZLMjcdnLiactBE882rGqEUMMBk8j9Qi5DtyP3JtTuR",
  "key10": "248z1L31cVPSW5RGZanL9uhSNcQYve4Va4R1X5ZvchbcfY9udEcaYnLiStLFTEmgmQ3bu3aSNX41XYt7V2FFp5Uu",
  "key11": "mJK5j22iyx3ChJHfVnFJonpso5jM7iXGSgjW156uhSjgARzKr4WJEtxmrjM9gQL8jx52jDNXBK54f5axz6cU4Rz",
  "key12": "5gf9tDekFfvsc4Gm4PTJrSDvANxP3g1t2drCngNRNg2g5c5PfqAAuSgtNkCkhNVBA1QMh4xiFzi4DYTK88Z3rdu5",
  "key13": "53tEuRSufnX18epWPw3Zy8Ufr3EFMkQSKrBDcQJWnQmwkNS9jAtp1WYH6zEDwvGdvaMzteCKtJ2WPWzJwAHJGYAa",
  "key14": "5BNaa5hsN2TgwNdpAnp7ESevshb7bADzqdCjVrgMU7tVyBajgL2k5aRrrjAHbmxXVPCp3XGoqaZnkpTEwSGUFnPu",
  "key15": "5BCMJChQwhE94yTuGRb2Ar7jcUWMeRpninbuw9cY4HRCXGirL84bkBkAdeSKak2d2y8BwCNXi76iMS6ZYM5ZN1cC",
  "key16": "5VLnHSxopndvbSXazXwnFgBfhZemxxqmVGWS9fy1B434W1sXCqK6Z6PNEnDnP3Sd9pn1VwbUp74u5utrEZ8tCF85",
  "key17": "EoXtc94R2fSGv3GqfVY7nbgkXkFH43T88eT1GFbKZRPMqGM4Weradvvw5vnZ7gTKaeBgvMUsTZbd61tcWKsixaA",
  "key18": "2aTobikEgwe2kb6RkjiR7FL3mvDE4ji4GohjA8Aa4w7Gc3gAa7g7NLqu8ykVrdD4pbQBjTp5atjYYUJYwsgLFBgx",
  "key19": "5TZxd2s4dJYKxHaURcaPPWLvZ4xRwxYSwBZPHQzEK9f9Sbw9D1U4hrYyw632QxEkmudtnXfd9gzVjA8J9vcPxi1Q",
  "key20": "2aWVHfTkySEAwuSt5xEL4tdzZNKuhaNgB56HKs6zxZCC1yobGuLMbgxYuqhx2vtDrgGXnDCXWrgZtx6MmG4uJJV",
  "key21": "4ebSY85F7qbL9TbbLbBKP6XXfvCtJGEapTsMLndvnnhh6YxB3vfhX52wt1nv74R4EUsqxSCqGQLthhE2r9wsh8vn",
  "key22": "4RNjwVe3nCK3cuMSZ3g5bXZ8rfncTpitUmGbHDR9SwEbDuABkkL6KtDa47bSvWu9MG6gdwy9zkcVNpKNJ1AQHeHv",
  "key23": "4CEJjRu913RtwhDAywNfLternVvkjMgG23vpS9mRAT6gSucutBmqLjRb8YdhaDEPASc9XrtdpBSxDno5aDgpo85P",
  "key24": "4EpirwAUN7YhnpEpy4FH6tBhNmWDimtRBoL3oDtyvjc2o6srfuMFKyvYe9SACDpbgZRHAFmUUkPK6fwEvZEnzxSx",
  "key25": "2a1p2zb2tqvbUEd4wDANerVG2UdBU8E9XkVEng6bpjr2ToSnph4qL3jvY1g7g45ivbDUsjRyGQkffsrUQAuUgW3t",
  "key26": "2WxNasNkzkn4gbFLEvkKyzocEe2pR7vwSp66nv1dxwFk8Y3Y7FzUD1dyHLSqktwpUtJHbpAQ6mZNrQk6CFFdZEKQ"
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
