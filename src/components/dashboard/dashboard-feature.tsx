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
    "2RKjhCUKav4tw4AJgH8bokEPyTEQYab7yovmE5jU4RPHp52xU8RM25TRAA9L87rk4PTqg2PMaraZ9j34RonJxfeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QUkqu2wtrHSsVpgpP7VPF7SMBRV4SLYJc4MDadJAwjwgf4kmFLbXt7Mrgwa1bicMGrxo2m4M19yhGAytNjxaxQM",
  "key1": "2CxLf8rDjBazhwnHAfimZS9tw1kzZYxS2tEkYHR5UEDvfLEqgHCeHQwFPSTMtKxuHTUZVTvf91qkw9QZgjkBEyxC",
  "key2": "4R4LTVhDMSKfa3ZAyZmD1HDz2Fmg6KdXjEtr12yiMmnLhjZnBMGdfXCJFpMPE3imv3eVVyHD4PaTpgZ3uAyHCP7d",
  "key3": "4EQKRPxWk1okBSGSQuFXGTmMidmUexRqK4V3yyfAbE6wJVqENYeUEKY3bG4RcntNfKFTxnPGJudbit7D4cFLw5jW",
  "key4": "2gv6ybRwgY8t5aBqaT2CrMBN1JNdTfWcW6TzDkXZS3MXJYqJszzwnz7dhD7M9QMypqU2ttsBn1JqAGbq6iDPQQ2A",
  "key5": "2rVThF5doVvgR8uPcZH9uFxhC87huEe6aCgnXLSzyMaYJntGjYAyaXFijCFWfCjzmUq7zPhMcteutPJf1JUYgirt",
  "key6": "4CuJwUX4ZP8JMiJ2K3fHnzjZcppDWajbBFbBKbHQi6gENjNoFEaJpBCZThn9YSJAYuYDTQ2goh9pTHjtWTFoS8Gx",
  "key7": "2WVgLECdhwmN9ErHR91oPGhuSzTKcGNSeXgSvAEtUGgeaVRXGRt8exZ3EeJYrfziPTLdeF5D7QZTzdXsgTdrP7rL",
  "key8": "2wsowJpzzUSqJSpQv6jfukRRrGY6oy1TsSbTNEZNymq4vm1jypaFnMzbeJJt12kU2dPREdyCUiWCJHAwdpWohdhs",
  "key9": "5jnXgZSCXgrMqooq8NGrLfGHturv2zkWuWsMrwz66GgsD1PyUYpUyCbEi4aFfPNvnUy65L583JvHQJjv8wPy3Utw",
  "key10": "5hwMFoWxqpbpxxEnV3evgwwTtJEEMahVqn9C5THwwku5VmDA2HizNdWAZ9KwK8G47tvgb7DHX1vSH8L2CMs6jxGW",
  "key11": "49fSPba5oeyXezVypYUijFRWQLdYmnunvVf4i5oKbQ4PYukKM2VeDB59X3c51PzWg8GcWDDhXrbq25vu2hxcQLry",
  "key12": "2XtS8jCgKXDwHJE7GQgqYaGTwCWHTFYoiLGe2SkwVq7gRfimZJJuGxbbz9wVSH3xGFL1aYeVQp3jNWJj7omtUPj5",
  "key13": "3W9T9xV96QAZhUjjGNrPvK6M53ABsZX9ZdK8GfuNXRyujhRBzk6sz2g72wS8s91UxkQfxjKwWVo3fMhhFmpQirnt",
  "key14": "4VdWVfUr4dPC7XWWHn4fiDWz8pC3WhZ6E9C5CWdU3JbpL6enfkWLmBeuWqJ9FgwA27GswrhGzarkdSuzBZzKtm9m",
  "key15": "3AmVRmXWWr4vdUSmzcMaknXLf9nf2Z2CJAnYwT8JHZmBkJ5uW9Yq9KKrdTxkpqmNMxm3RdgZn83JhurAivM92Y96",
  "key16": "4xEm5Uhh5BhiMsgGqtWtHnk6tYB1qnp3S9g1TaTQqisCofkrSAppZ33ME716xLfZKXxwKXvuX2pBff1NMQUbUpy8",
  "key17": "owqgYTfFHb262mmJhCAUUVv78ma8XnH8m1ZtiaeJs7C78qjV1qCyHR32XHv1yYjjbBf9sSdupmr5jNNMBsWCXRE",
  "key18": "3ss6ep2b7y4Pji1zRjJ6wSEnHRcoVkqWjRartMurE1y2yApiy9QMUPQ49JLrxuwe4ULJ4DZcvZsKUAdWAHSag3eZ",
  "key19": "43curH8nDTKDJJW3vgix7dgYeWsKzeuSfcuQRcj9hFzNMbEaQCpbjXiyFYyyQ6dK1BFYjCjzgAzS7eiPHVp7SkCR",
  "key20": "3QdAfMkWV9jJYx6gZW741eagZXcf9EZUCfzSTPHgQjTnABBANYgbEXZcyf1zDbtJ54HjrsLaAk33vZGEK6kiWNn",
  "key21": "3C75gmhiEk4LhYwCcyCeCEA4UT8m7yxjQccZepJCcbgpezk1tskWxBrAqgRaAuMRgSJFxpjWuvaGHLS5NXfqhASV",
  "key22": "5Q39hdgxoDDSZUAoS6mBz4hwB1hhdLPf2M7LewiwCo4oSwQKuhFrYHrS2anJaiyMtww2WBV9kR4qrZ433CciKjBN",
  "key23": "3WnAYtW6dbEpEr2CE4xkVAQ7Hfeh6f6JEsX3kvB3ZFoSkYZauJRMFTus5hcnjqBz2WtcS695cT4dPry84TGHHMWo",
  "key24": "4nveANz7EhBDnb9w7n6saSoiDVrpfhjmfJQk2T8kRdW82UPDwshRy3NkwjbtPQibA3rbaR5BNRCRTe9LRYZVA9q1"
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
