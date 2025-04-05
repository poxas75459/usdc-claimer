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
    "5nEBKZ19mGmE29aYCjTYpoSbMYANMrjAMS6vXxER9mTHY5HVVDBHU94Mvgqmtt8oFWTemcpHAQoZf4xbhQ2Ye1xY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RgXqomiGYxHXyNJisC7UVeXp1GTQzMwDfUVGQtKZDxeNdTgsk338BV2V6qS7YWuUAcY66bUS6msedAnMPiZzyAF",
  "key1": "24Enr5bHucUfGZfJqvbj74tc1pPjPsLrg2nVRDeKevm54fqr89Pa9ssvTSkfMcxVnwS1oVttDaREWjJwmptmef3k",
  "key2": "4YTsE6H2qQbgEjUGumQN1RUVMAdkKS2EL8B5yuC6JuHE3H7PZT4v14C2MDonyWuNJWEa1wyuE7KuKva1iy4sdMbK",
  "key3": "APqdKoTXoNebX7HGhJCsq7XKEDwq69NyHTzT9fKFx2e2WRPHFFxcmp8GrUDPRC1Mq1C4SzymxS8mRV8SuWgBsRM",
  "key4": "MyzLyqDCbmtrGc2bhJhiHdj3Wa47yLc8zm29vAuWLJHf5A5WTj1dbgYbwENqxhyWm6ynSUvFHD5hxriR4uJDtSk",
  "key5": "4eWQTFEEJPRJJ6g86PyBmrQoaKE25BNrwar65s4riE5viXhXqjXpxxhisac5XvNhu3LMMuV3E3DpCVgctH8cGV8E",
  "key6": "iYc51Nb8PbRoi7LyFG6a4xBANsC8dDuS78cZn7AwhkJamp3c53MfWrrgwQXU461hKCYBjeQxHem2PZ8RRvfd67a",
  "key7": "4tBBW5Wm2UhzJwaEyuLLLcNA1SyXSMgna5VuvwEhCTdyiotmxCvbhgkWcY8F1VmV7X16bXtHDD7jhjvui8wiuamR",
  "key8": "MZEprcJPqaRTjJ2rafqTo7zTU7xtxYwcV5UwGZsqrx7gShQ2e7HX5J2344X9zsQ8hpTX53uTkxSUP75KWf4Gu97",
  "key9": "4hVeY1KbihuyNMW9icgi3FU7ATf6dYhKCJfjJfnbDFmsa8mYgjSFfcSDKn351hVwz9kCCGqB2Bz1G4TEyDbkiYtY",
  "key10": "2eqbnDLVThL8W1KfswzKqk4A5bxs8TFoF88yhYP2bNMcoeTjquZdChuvsF4Ws4EB2ttZJRNzvp38DdfR3GFEAUVu",
  "key11": "wEAWYfWPuiGMh3GWiQh7o67UN7BgrBtvPDjAjf91U5vGD11qqYLcQm45twfb94ZV9aDaifYmJtDYt6YaNbyAbrD",
  "key12": "4QuxKfXUnXJ5JG5b5ecsH9UxpczZuSSXzy4LKhwXvSuYcEqJ3EgpCLun4BJ8soxg2Ex4xeBy1pJDTCaXWLSK6VJy",
  "key13": "3oNHgUskYkS34kDLxiTccS1mh8G6SLiJduPeSgD1GxShyn8jdcczup2D7PjaRstPczNByULaGBVa1aG8JDNCBagH",
  "key14": "24PonVEX6JwotpoGGodiPTU62UJ1zWAuNCjHjWK9ot6yjTQrYyqTUDdhbXZzJgPSdD2Mf84iz8wbXVvg4zNNp5yC",
  "key15": "491m9GhKWQvToStQcukvR5apuFJMqwSYReuBeECR4vCmEMYY7eAtCBYwbeCsGButFQn3Fo45M1yqKLRGEqhVuu4q",
  "key16": "5kTUqa2Yxxy3nM9yf47ioDuSAgWP5GRqqp42uhWBTu24JXREeaGH8duEoPBRxnQyVCmBnqm9rbstqcUADX1Lm76e",
  "key17": "4WJTdF8aKFhYDNT6b3xQDDaGwBEwv6NVgujri1vJfKaN9aFVqqPyv5MjHZqdUa8qpcE3oSCSwRfbS5Bq7URF4U5s",
  "key18": "5fNRWbak4jNWZ4Qo217DaVCF9C3cS2sdjLEugeK6MoW3uAMwmvZuqv2thXWvBPmTasuQKxnDz3EDfgA1xxAbtPBn",
  "key19": "55RqUTjsgLzitBw1h31VzaNJVsyHQ4i8aHZmoBYLvjp4bjCxw5ARwmFwQHAas5T8JjV51SvNCDRAkRue9X4mYR4i",
  "key20": "3b6D6Lz5Lgw4g4VuHu9TeBpc45bKdd6dpSB3GnvT7dMXLG2JBeFxAZwi4uvDfk1vWtQXZQ7tbidqfQLp3VRPczYe",
  "key21": "3RPPL6BHK7QW3C4xPhwEjS7ydbPauH8r2AqErPf9VNUzq2j1QNB7erXLhXgabWXLJzWvqCPPsawYtHwWHnynsCbx",
  "key22": "5mexQ4NpGa3DEKhMdWQBzFwq4SWyRcztQHMcEZh39Y5WidqoYPPjBkB6uRCF4Mb3svvgqJwkZkv4wMUFdkvKHvfZ",
  "key23": "29bHejMXE1KGBSRjm9ay6ciTD8UfKv9QZLHVDzzU9cwxKPoU7jk6fXquiNWM5VvLqi84wjnFujZRYNNzQy52BLWQ",
  "key24": "4dc74N8EeoGb6phyY2XEitsRvxeo7Y4SCeFQQVr8rDsZ6Wa63cA5RigwewdKmHHCxQS9R18cKSEDHHaaphawAm5p",
  "key25": "2sE4GPLPCCjabEn4f6V9ZWhC3QTAoPYhcEWvBSH9XFX6qAAbkH63SB46z9U22d1DGHiuiRVwy4NW9SM9YQs5hR4u",
  "key26": "5keQHMDzmJs9GyPmaHN4ago6xMShPd7BJNHMyzL34xospda1XFb4NqDn4yvfXAG8Qm5oB7EwF1dt3y6Ssc3pXgvy"
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
