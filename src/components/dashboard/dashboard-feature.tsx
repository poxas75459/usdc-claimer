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
    "3WZEoJYtggtwoHBQBRaTC24yPZCgBdrurreDjYV1QsqhLn3bGqnm7UEyL1y8UmzDXKwV7DX7BMTRRP8pGxcsMHRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L733yUcRwmiotHLw63GA2mUYvc3PiXJSLifGb2wLcBTFaX1hQYRN5vP1GSm5sSGn6EuQfASBGZNG2LdTtyryk4k",
  "key1": "66xYJSBeaHDtyr1xxUKNN37DZNPFoMAtWiut92hQb8sF5yjNWj61SPTpWVub9A6L2RCPTd3HX64P3hEBH2JqjoWR",
  "key2": "31KEJoE7NLfwSU1z7j4ucehLpP9hbPn561YfLrg2cS7WGuJrcbVwDze6yAx9GtFpvaJTU1gpqksS3r6RwVVGQMvV",
  "key3": "55s6k9J6gh7VezBn7R2vdrVKC5Q7H5X2WCxYeFuD8a8wnfvYumcHiEAiJSMq4WAVrT4sTBeR9cFMAX9BhNGGMjm8",
  "key4": "5hq1f144amhJvqQKMiwWE9TEJrvoutQwwEvayKePeY6h63CEZyup1CJjF4vUgCdcJdsmZvD4u4CQ2jXs5EYrsncY",
  "key5": "65HhPxpYCE4dHMTp3G56T6Jj9YpTuxnhPNXq5nEwa1gQLVP5PUMLwaHzkNziy9Pt1uz7TpwXS5NKNtuQ2tAgSngD",
  "key6": "4LrtZf7xEScfmH6va4eCRCRXxQpKCep4T4jncseth3mK3M48u2BFghka27dXgxS3TcQn1mkdgxS3wyurVNwY3oPM",
  "key7": "4Z4RmmedACHgcpuF2bjFxf3NzeRPc4omgm2LX2CB3vMhyk3X3Q2ZtYJ5kDaN9m6gg8p8AXuSqgM24s9zDaPt5kLA",
  "key8": "2oPNA67k2cyjXev2XCieW2z6Q9tvUFUGKaofCfhtkLE2tjfmkaS7QjQHrikwq6K8kSBJnX5TXSBW5GPxUrj7mQ7e",
  "key9": "371nkiQaQZLRsVfBStkQhYZ45NpF2K6rFx18NzhJDBjsMwtEczzZyVEQKNZaDmDamUZSxPRTRik8w1etVGfbBbiP",
  "key10": "5SxN6CAQ2dMrH5EG7wCt5TFKTbSdxcC9QxjTfyXgdJriUXBv4QV5q7p2q9S8qRfbYgvNmUhqCvCdcrhP4fLUyAJN",
  "key11": "hofYHeXN5VYEfB6hdRqBCK54jdbRRbcaTMatMEcs1bE7JY9QX1eaCGsUZxquJEXGbmvcgiyPMqsBEtdegv5z7DJ",
  "key12": "c5jyBdaszSo9wxx8NnP2jUDR1jTtAUJE49BHcDZd3viBZEwaSzoUkuKZFhmahPgUBKGJUWBuXwLP13PmAFSvftV",
  "key13": "521v61e3yn4ZoAT2QDj1ZygZ1MUzUcErapVqmhc69GdeWeE1TsFW4vok5RGHQCbFWUtmuoaw2JERByk5cakjB3WQ",
  "key14": "5jPwqxSvWNB2YVc2h1ECDwaT6WXqm3jcBQFwZsgJjUCR6BqkQX1v8BJwhDVEfBXDK8fR4HPqN7ehm3TNiduLz8Ld",
  "key15": "4BKyueZbXcHKqzkJ8WrRg1XEgsNQoLVGQrW1R3p9tmMJr4pAUTCV3mn1RyKMWPDH494pGzjHqaxHd5DQJtHEXshB",
  "key16": "2EBniJnKLTPffTYVZysNR4Rh6ET7xBzfnEq7Q61fPVRu1hvN6d7sPwuhLGdyQiQ4fZgfVRTJLNzdvxAWnd5NA5VF",
  "key17": "3GGfsQgbKjCh9FWfLZcmeApvmePksxiXjCafZBLHSTSBf2fdmFQt5ym5sFK39i8E7unGVZU64sV5d91uVmrTSD3N",
  "key18": "2CLgmyG5dFT8C5NbxF8FcsWuqDQz4RYZJmAYBy2qDrdyndmRHc8AMT1CYDtP26bTqWXuYz12rXNKqVwVKJEHKx2W",
  "key19": "26bcaWBixvvLcri798bSBZGsEBHQmsdeksJJmDMxEWfQ2BXuTAnsNC3R1FuLK76DcP8AuuUfumpsRfvBU4Tjdj9Q",
  "key20": "4FpotRzfBZ5N4PvBN2nEc1Eij2g896u6H9BK4uAqjacropmBM29XVZXc1HuzNjH7okroukQ9xJ5B4Lhh5nx5pPCo",
  "key21": "3LrkabpKCxiDdik4CUsz8kYrHfQLsN1A5Ak3cd9qGz8ZkKUc323MaP9idHMenpcVx2izMw3HT6PTbYuRxDigiii2",
  "key22": "2XRDv7e8rvrA4seFxb5VkTay2TvUF5QRsYy2rVKTkRR7MQCwqneZu4Ha9Hsg9DRdLNCYjTHgpApcRDXaAJSCBmgt",
  "key23": "3EJ1DRtjPcrMmZETALCCeLVQG4HTRJEXkZgacsKHLVbjyajakSzRfwfWMdfrfMnURE7jvLfyRnTzN847pVBFbtNP",
  "key24": "6DeZh76EcV7D3Makfr7VQePzARSs2WRPKGRoHZ9kcngML74yxgygAsRkE4CkmCFBxGwNPa3EwyyPQCFwabiAEVP",
  "key25": "4RwWfBLMBtBDNgKEnSYoKC9Qwo9xyEqgzAYvxK2q5iVt1VtEoYtkqoKyJPGXiSj14fR37zUQEb4rvtnVHfyyB6cF"
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
