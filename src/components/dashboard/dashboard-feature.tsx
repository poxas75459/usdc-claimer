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
    "3PHujNVyL9RbeU42HR47DtHYkNPDiAH7jF4Mog2NXYnvQMDSdn7VSoq86QSAYSNw7FLNcvw3mWHkKgLwMBwvYYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dUDUaF6zYDGdTyK5yKMZEHXhhoejEgSZBYET2GXHrDLyUQArtsCci7RYiBN21J12YGNWZcRDZbe1KMbyUkn6nXZ",
  "key1": "3VVTRsFrm8hXjiyzb92JXLQaWTHtLZsZWNFMJS4aaPA4WhQnvi2mFX5X9w4jzehQDpy6ncBNx8Fe56PTnZCCqp8w",
  "key2": "Rx3bdAdxw1vXn5qChMta9EkLyinW46Mb5L39oQ5Zmv2TAZX4ckB29ukTLFcFa5AwHuU4HZkqZJiS4KMF1PNGxf5",
  "key3": "3CQMEuWepU5Lt4p18c2WJmtHQS2X6AUqWsoaCbHGAfqeVqSSFz63sfVJSuqq6oJDATrr1KDcEjN8gGz8LXtHHptH",
  "key4": "4kBc4LiR7m9N4cRx68vvNr1C3HeBj4JvTU9jePKYgvtAG1Xjgma6q4hzifJJaEiU9S3kBZSDzZ2z12vW4SygnXNw",
  "key5": "5DeVJoFCatBxiuQBd9bYTi72FxLyR6pdhdUEzncYSzrzDksswrARPgdFGbzwkLTpeKACtbcmGfNGp9Xn3Wf5ZGVd",
  "key6": "5gK5BDQGRpbKHcGCwb9j4P8MzYW5Kzx7Mq8p76FvPfWACw5r6hq4GouBuhyLYQGAcWKawYkhqY3DfUaHXh5uEXSj",
  "key7": "33AWcDyqqAJ6xWZKC4zpgJkwgQ5j55UmUE8cBqTX8kmbcgrxYwo6bdJXo2cBiiQV1cPwJCrobKwGjbpZivAsxMc4",
  "key8": "2BnRfMiVkG12wSkEKfqNEQqz6sSnkmAQQDGm1wb2Q54y58w3th8rYw7BeJEt2ACydLdiKXJTR9eHHZMebCgZ2qP3",
  "key9": "2NNtQA2HUv36rjP476rkvq6dR6LDf5X92kaBj32X64m27E8B4xNKKHZdzyTqjwdq2jtXfctsvJPb99H3NiDqAcvM",
  "key10": "4kg8u9ZX2kaR7RdWkbfxcR52qkcSUCkvssFb6hvJac6X6TFNkW296LCED14SS5PbHxft85umn44KfPzFRnsih9sD",
  "key11": "tpWhGesju2cPW6h1933v3mFi9KN1VrRFfQNKt2mrWNhDeovGxB7L7yPLKN2QgBig86AcMBKBrtWm8RNxzhXBGA6",
  "key12": "4zBnSBmexUKjVSoyYcnai6sMxiRQrEdnf5p6y7EDZscQXVT8rAk4GwAH88YpeuKWzaGXbD4sXR2sRDJTfaaxzB3P",
  "key13": "47Wv84ojk2bdJ9iGAj2rD5F2B3YP8rBikTCzsNTk9wgjaVE9PMcd7h9pt3wg68e3aJyMjPPfMxEGpHBNwvwkWTHE",
  "key14": "4rQSBa1o1pDQrBkq7kfozGWx47obS5AuRNUg9vKYmVdBiQq9xVfV8n54jESfQr5NopZSTKaYTMtXmfseC8VkYR1b",
  "key15": "3QcpMFgfiDHVEqfZErumepXZp7SN5HATjfZrxUw2yKQZ5aiiEvaHeCabZ2fcpz67EU9QeNUPkpc1T1PgdGKoxwCV",
  "key16": "YFGVdvNSgisVL7qEwUQvtwjeCkPnAPN6vEc6ju9r16F1nowSf1SYy3FPjf4uJJX63Vg2Zeppk8x7w1reZQGzHXQ",
  "key17": "ZrwHmUBCibuqZxeS21L2pGzrUDwiCx82aMs4dvaNhbagAXdspv3muuGFyuBRkUkHmXiNWa14Mww272MqjSUquqm",
  "key18": "N8G8QjbdXHuT8soXJvFMVeL8tnbHjjwdJDSe35EGUjmjRhcs31yUwgqJu5yDUdHEz78w76s4UHVzQYrXXD1dA2T",
  "key19": "k7HyNeStJaLofm6pbPNYUAseVH7hKPhLJxpyKLNt1dnFXZ8jCDWr3wxEreTpniPhamNvyofTscuj3dWARqnzKFG",
  "key20": "5MqVeNAzkFUNcawzrTobWBqb1tVeFVX8AKDv5FzN3WDnKPbMzntJ2k7kQh96w4DkmoFJCneWLYNFphRGEXBUC9VC",
  "key21": "3zjPGZLdSSSmeLa58LbsTDcCap3zLEzF8atfegsgiEiZMg4en2JWXSpPYk5JTAt1vYPKMYvBiJDDwDYnknEUxhG",
  "key22": "5SBXavmizBdgvDFpsHFmNbxAC4eg9UpBcwBvpYgkdc1Rj88RgUKBjr4jy7Csp7zFBaGZoKWpWFDKjcRZCyChAqq1",
  "key23": "3NoaALH6fhvgMyfxpSJpzx6TkUTj4XNMQ5g9dRi7Whgixpuaj8sCUo4cinQtChBxZFpN2dLVRZUSknwDSsBUS3cQ",
  "key24": "26BZhwtyGzTqJsHpDasC4RtVJUutCQr1cxs7CEivZPRuMvpjsjpVRuhiRoNUuiLKmbi8EvhSd4dAUwrb64CVuMso",
  "key25": "5eaEvXeP6jNJmGb248TxSYWBAKYR4oJEcKZfbRqttghVfKEfT9WSBEqVrpW1QZtX5HYkzLBR2Z91Bs8a3My6wbw8",
  "key26": "5Kp62PR3UxRJzCjnVNRQDN88Ym3akWT6xT44NpCvwRHtrEpZ1BFEcBuAr5pMDHgus4Ax3hJQ14kSwcDUMo8kouys"
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
