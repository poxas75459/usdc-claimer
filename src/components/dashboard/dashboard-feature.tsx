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
    "3YJ6gBxDdVoGBjuf9y8TFh9ikVfnGUsW244hiHSiz8TRmD4K6xL3PGs7srWx4sCVsmHGt6vZRZYjH28dexpCbrR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CJ3ine9SwfEheY9GGViWCNGXxgnPtB1S7ejwKKZ8rjL2yxM1x6xz41YoitiRUvvJyTvgcpPseYjYqj23z5W5Z1Y",
  "key1": "3JzRdzSEangVnTU7MTb4tbJRuGZbvXAK9253NoaiCHghH4kumdWRtdrgrJ3bmTqySsrKJb8fRkGGppJhiaqSkZgM",
  "key2": "3oPhxfga5NWGnd5CW4QCctrknnmeSw3Nh3wQ84QrHDu2AxeSBEwecNGCeNdYSsQBjAVXXBvjBuDu3Y6AE2oRAiHF",
  "key3": "5KbDfa2fXENmSy6Qo6UwPo3FtrFVc3QovHfQ8McdDw3EqNwDypGzLBWabFY3gKQJheV8asEzZKaiTkfVb22e3Ldx",
  "key4": "2Mq8Tb6q8VMFpmApjb53z6AZXWKo7DYX5eAiJCrmS3uQYAE9yDr77nNaGiciXCYB5QSLzFGRT4kpVCNxsdGh669p",
  "key5": "2y9ahZpPAMqyjiw3ZdDpMv1WmCzMjMkdKtmN15ojE2xHrcfK3dUieuUYxWm227tZKkNwV2o9LLaKUvJf7a2PvXYS",
  "key6": "5ybvXLPiok4hfWUyYuFMGJwzRpAUWFGGRRZEanKz8wKNwTVLavNvL9MVQ9t1K2hHuza7RFEeMgnkMqwTR5mX6UKk",
  "key7": "2wCP2f6xHBy1Ww1pAAnVJSyN74TqF7oWEwXZ6ofKfeWoSwVyg3rzg2ySPmM4vTReM7ctejfC89bVEhfTb26XyxpB",
  "key8": "2Gmpvpv7B7SxwLDb75z5td6ydbUSQR6R56GmqT5Xu3xXpWkmwB9tCzDBKP34TgWGCPYmscMGEa1aA2L4DGZ5oi57",
  "key9": "3bKfsQRXYwxnWy8kGYpxZHdfpto7d95UwM9YndN7LpcPycK8W3dBGJBfLqdjkpRpJXGkpVzzPj84HK72iznyNYjV",
  "key10": "q8EhqRHMhkkBuQfcbQbtXdMybECKhxvk8VwYjyR4TiDREQLP9LJ1vpbXvNwBEFan92dasuCzcaxt66Ex8bWQbDi",
  "key11": "34tH3FYFhn5ikK634RzQyygDPQ3mCFcPYZLL5JQARRq7KzQnesZpyDWC3kEt9t8fN9fetAHxLKvKEidd8Sy2rvb8",
  "key12": "2GPrbXYtLKo1xtKrKFXGEU2pinAsocDYnFYLxkuosAbQQ5rcWKR8GrcMTuWfGqsa1HhkX2z4TwspEL1z3zbaSedW",
  "key13": "htX4co13UQkn9KGSV1TpxFCgdCkDzUJJUm65aUGXXas1NJAaaPFLjHBeHx4ZwD67jpxSpNtVYvWW77ZaafD8Kuj",
  "key14": "4mS9kUC6H97Re63bYuu3ufVzxcgkH16PTyruhaXZuQLNFLcBe47aT2e5AHpNxogcHSDiAJCxNNCJ3j3E9sti4GHR",
  "key15": "2XVrkZFxWj8acbbAmkjgkPNGPTGW5wczhjaJk8VsKosYDWQpiCSRRo4ibC4qDMsNXPoAJZ5fCvkcwPgnhTABErnq",
  "key16": "2mb97JXepM66u2LYtw7VhR4tJFZpdkYbRF8yL1QyA4R5BBqLSZMnrU4RBmbP8XpXJPPHDJLSLsKFngN5GjHkKn2V",
  "key17": "4v1KerdobzkkYTXFivL5CwgSi5E44XCxNsyxmfhPXk6xsqTRv1yRFRRHogGREmWMrCbG4YtDy2kdUSHNma1gmH2q",
  "key18": "21pRuvdPrYg83Jk2A63KJYJHPyF5shs643dW2LYMpSoinxb4SU3eyM4HRjqqL2Nv4H7UdLcM4NDw8MYGgusmp6LE",
  "key19": "4nFU1nDuWHoqedSG1gqADRBo1KkmJyZuoy8pfT2bwXh8fwrZakznTCTwq4W4VDwhso1jTnRwaTnYtMooHX3bdHMf",
  "key20": "47ZsEyhHAmnFJcEBgvgRWfcED9E5J1v2ZnSPqPEWcCymuHuFCY5DJBPwshgsrvyyQFFPBo4nmFDd9GFotGKGaXLj",
  "key21": "2PAb7ZnsoR8uA5TYva6Awd1fNkJT7FpRciWMrEWXfGnv5HX1me8ab5xTEcTo9Gfx8VEYhqWix2y2Cw6qHnDjyBvy",
  "key22": "5hyCzzxJu3ZERcGzHvVeB1XhpZh6DvX1Yg3XSRTdiGVjSiGNanfhYAg2U4u6Ty4kCYUDf6oPVv4aVpaN8HSgZ6FV",
  "key23": "3iyyfBo72jaDEwq4Rr8xiDXntGGgD5ezbGH19dv54jmdRHNR1kRczvq1h1BHfqLkeVqbDBdudY8YNm9gZFYySRnw",
  "key24": "5ks8DSU2inG5gN2GEUiYa4EXdVom7EjVAUKunCwaM94PqPK77VGBrBsHDgRHLAqiEqXHmapZ1cDDU1HkXwwXW1sj",
  "key25": "fnXzjJoSTkCmJWZFqHz8cQ7ht1gwYkB4QH5C3WNL2QM1Ld4p3j8RyHkPTCdm78vE17rmNen8SBaNRra5r5MJCoT"
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
