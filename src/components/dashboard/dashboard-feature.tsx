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
    "5eARVVbkX6BfAqM3gHPkFPrm1BMXnBzphi1TDcpGzxFmUfGpYgWvWMQJ5z37iwszfZPiEkCiKKMirhUf7FSjhEwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fepTpSQqXXNQMwCEq3eras1ihF6Ks7Cac6GfH5JH8CwLSpA5cz45mxbAt9T3RBtWoVtvtsairx26MX6KGEUkr5J",
  "key1": "3QKgvgkT2y6fHRXuzezFZBSsiAzvX62jkWo21pnqcb85GBDzHr2BBVLQMebsJLB8w3gicYbv6wBj4TUvcpku8bbN",
  "key2": "2eZDnnKdi2KEQ9NKR1zQr3b882RrD5CEkttSwiy53xk7fMJjhgRXmvBqvwZwKdaDpWiCQ9Vka9iSQD8ceBARrBk1",
  "key3": "4sAKCteh6NcY91vi9GSkvqofFE2WYzpEdHifyZPXXTNMYjBYJaW8XWzEMMH7J6n1EXeBxGVn4sPyP45jDUEweWam",
  "key4": "3xHKBZDqGrxcs5WWmdUGBAhnGmQ8LHzbHADfem6cU1hAwCxJtwm998J331dGLcqYL1VGDQUNu9TjJbrJdqiQ9igE",
  "key5": "26Ug697WxSFcMQ5k9EqWFqo7chC6WxrgAXKaFNmGb31VPLXKDu92YUnH1BETRFL52Fyi8rTmE49iPHLjZCzUEw1S",
  "key6": "4ndiVbDovdQyQ12MMvcr5ypJ23dVenN8pd2pJQ8S3WraAkjC1YnQdpLcREkbE47ohd8fHK1WkucPn8ndNvcPWJDW",
  "key7": "2hWc44BYpi5n64kKRyWJmScr8kV3kTxm36tzbHRNu6oaPAVY3Pf6KqfDEyRpdP95WNxUEwCduR3LK6HdggiQJzLM",
  "key8": "4gbQmoXxKRTiLHWDE6zDUSFHPJRHgnfZKxc1XNumn9nMe5yQjzCgCifSHA2Hv1fBDvQ5naU5PV24BP88Ay7gi7Rb",
  "key9": "ehQK7HrXe8zqayt7n3GcPdS8SmzzMjnZ9GytiY5rDqdLFTdYCofa4hSgBaZiog73BYEeN4V9j777uDp5mgjNnWW",
  "key10": "4CUxdH6EyoVDYFJDwWA3QPM2kMe1zFdX6CCUJx2WvG3WpPgatmn71ReWKnSXqfhC1YCx89hH7MmeCtPuxCcagvyF",
  "key11": "3mJsHUjPzwaa9z3VdH5f6pZANxbrVpyaoNvc2J5jyeSSAiQYFfhzU9D1pYWa6bjTUFz9MxbYTe37r4tR1i6G75Nx",
  "key12": "4wgrFpmVukJCudbgvuRmWyXdkaX63Cyg8j21UwaL3nBXdJb5K4oeE613H752os9wTdpiYVBSu58LjTGsRUGXBZP7",
  "key13": "4Yszt8YfaY6Ae1NHtTtLiEpTrwteRLbGYTH5fygsE11vAMu3p2ewR7RFfwcHQXjhJnWYAJs1FuGYPCSzx42yEExB",
  "key14": "5HMrFW2zt7DsV8FgGDBVc39sPQ48GAk89NQe1ymy2LWjhzqAcznJfQDYKVKSmiAAJvbKU3NHiWbfzi1AtdtMcsqH",
  "key15": "9XzSLECcCvdZHWwk4sn48iN1kWzvjzBLWExxaWCFLCvWe56b7KjuK5sigtVCQv65uv7PCCuQTfqt9LgM7qaD78m",
  "key16": "2pGkx2DL9b1DyndXbvn9udYbiDSYcg6pdLnsskrChdBQ5WsXHfNyUvsVCRz9A66nsGF2PccqWTSAT1ipcw298EEY",
  "key17": "5Lta9dSjui6HWC7Y99WREeHDJJjddastP2c5vB69EGDcm1x2TuReFvWXqggHVXqbSddcT1h4dEwQXBJ3mkPKBvrP",
  "key18": "4ki2JmyDoyzE696km2BJniQJXeD8e7FsyErrseQVHtZkQxB6jBiKCckQ2Zd67KvKhpFD55VD4ppqSRrM9nqLeisk",
  "key19": "3nvppXooeoTsLSn1oB5QFzucCHBov3vt24XEb1Zyupg1w2m6SphepomjW7ixTXEV6yKs5kwxpZeBoUCszy5jTHWy",
  "key20": "5be4dpMk9aShGVpRyuzCt9pWjUBi6Gq9GymPpNhMuxdTqpLj6dZ9TRmgVWLygYUwebdR4FMK54gaXbtUKN4zAwYw",
  "key21": "4gxdP14iqumJhVe1fTBTE6W2WJCNfw8eCM4tckecEFgL8UE4jmg9DkKX7vEqkp18UzNsjAwN6iw3FyhHgSo32ZdP",
  "key22": "5GtotFa2EHwiRKKQKntTSw3meE3EEvX8LFK7Pa3k5GizpJWF98hga233aVjpiC3JhHfp4YyMNR53YrcZKhCQfr21",
  "key23": "2foL3RojA1NUCQWZRGqM6drqaEjtL24LkTGXTTsu3gsnczL4XqyzLaLPhQbYNk94cU814yWU8gM47Ynq6cDubbKY",
  "key24": "3rcwuqVF3gBKgwUWPBUKXdwUzFChWv3jT8hghSBZvfpou8454xXqV3hRtvTVz8skuQLBMUHQ4NA38ZCsS1Dp14yQ",
  "key25": "31DyKCxLabjw9stc199zM4qA2veesxTRy3UHbnYRemCnqVohtqt7C336FGAXwmP713EnyKpY42rq4jgGKWwKhb4K",
  "key26": "2wH9riTQKDVdtLTTAytmfQ9paJgrCjPdbt7sH6zGaoApSQnJw2HLrAkAj32NTMyecuLdovC9nqCd7E27ywr4hJnf",
  "key27": "5JBnsBhCRkNkwk6rKtuUgKL29YyLicTnAbEJha1gQbtKS77CAJwNurJLqt8EpDZZnz9Zercouk4tUtXKGBWYZ8du",
  "key28": "3h8vc4NkSfoftVALx9GmFHNwYLyHPCGtmJr9qWDMA87ryXbY5uA49hXgCV4uf3vV2yHYLPMFXC5ZcFDy365qwfWn",
  "key29": "5rckN75UAXAnZhyXx6WuD61P7UFRQYjp2NL8Geio75nw3QVLpwuRHFmGxbc6m1xrTkwLS7U1jWgZft5DwUphEqd",
  "key30": "3XBjECXCLrkdGR3a3AD8qVfFaWHVzCskSgYFVxqkbUpZNMEwS7Csg95edCG2mDZNVepaVTTrQarZmFjuxJvKr4Hz",
  "key31": "2aNgF6Amvd9tQWGw7cwoBMQFTxneF9ZwA5vpRLKGk1osnTo4Q6gYobah2S3z4qzjxmnbuc3MHJUEVZN93RiWw2Gt",
  "key32": "5kAaRa3dUqZTYFgGGtLyAQk44c2Gur3FRb8r2hCVqDgJdQWKrpPJTG6AYxCNNUZrurr8bE7JaopPryYvZngxu9rE",
  "key33": "2WRsaNfYu7pXegFWve47DRikMzq5RyWmK7fGUrbxRyhpA8fkX7QJXrPXD76zSdZSyVgPbPiDQYMFJxKRtFvLd6af",
  "key34": "4h7xUnZ73kbYDdssbFuucuWvkCZBzNqNzXzU9xRvkhMSNye25msWYDHAxAbKvifdQChtNraxnjShSwhFU3VDVZGd"
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
