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
    "3oLH51mbZgfnqArmLR8x12HXq4Vb2bBmH8YGr21Q7FeUgdqTaSoa1Gu6rSE94JT8t2hiNUctQ345snvvy2c36CVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jsC4BLzrzv9Yv8uxuk2f2TP67NRojV5AcmhYpSTCqpBxeZdR6JrzapvGL62Nt6Dx1J8kcUbG3BVKEd3gAsUcThU",
  "key1": "36CEYz2nXTEn6fXd2ZnWRW6yByTCsyfJqiQVQubkGRNeAbMAtWSgTzdH9cciYgzbZXzU66G6VekvEdshPUaHspjT",
  "key2": "4UGHiZVnjjgiLBt8MiERtqdrxT82oAgEKDxj7Xthaw7JUgvtiMaxoJvANQAP2HHZ5jxWGMqJzgjr6sCgRoWoJ49e",
  "key3": "zWdhUXMrCsu2yFEoqBWA6gZi47nsmtx3Wz5r3wi7Rva3WPAzy6tBYufhQKjanVjpPf6uYYagaa6UstekTJttAzg",
  "key4": "1ophbGV92xR4KF6LMGpJfihs3D4iHNAzJWHCj7JhFv7XvrM19a8xyAGPQGaU7Zw2rziigXiLygEUrjDWpoUDas8",
  "key5": "3tWfHsZKrFXKpN2f5ZCsohkyHyfvh45pLZxNJpFVrt9NyiMEqRJieCzS8dEyc7Z19pVgV5Q4L81rCfhdoAM2RYhx",
  "key6": "3W9hTUTcLN1B2RBepbmBJKoaYm8Dmian9PnqUsAfNVXrzzfvDDLngXwt9VudNBkQfU7p9dMeYZMDvwXUZdrstc6i",
  "key7": "uPX73FgKD3zchz6UftbVTcpYt7PFCbm21xN357hRZPXdCrGU6D3rbJRScuhsV9KFXidr3TihwvVpBAowDsxYgau",
  "key8": "3NDH1ds1KtkxJ4tr5B8x6T4yUfW8FWhpSSdtfF9Z9mNitwvRifM7fTG5XaAhEk8twdWyi37q2btaM4pa9bjC6bSr",
  "key9": "5GvevM8eyNC42PJnFncNZbY82LHHrMjpc3B8jnbvyL2dDDb6pVs1b2NregHbq2NxJqhsirGDWvfVX3tEd1EjXZtL",
  "key10": "3M1RApQSj57MKUTYJMVUXyr7EntF1SqJqo8G9a6gqf9n88MQhDCyhukDRux1J4u9dogZwB3U2zaYoPrXE2dM87pP",
  "key11": "JJz5zftH1g3jZX4zof8Sak5439Gt9NGq5MqvcPDVDJ3Q3pzWcnEMKaeCvxWnB2Q6r9Nkakay94SGYk8Gy6JUWtK",
  "key12": "5P5afWx5bXNfPJQSKokdMrQ9gFXyMwUF2mKxVenH732LZXpiyiDjvToQv3oc8xedePRtH7bGCCwzdrvkD28E2pgV",
  "key13": "5kJcyfyiKDdTWAyavNdj3HTNSoZUrUdwweDQFvcNBmkNBgTyNpmYtr8KjHMSUcQb241GucKLY5u66gen1ceeCM5z",
  "key14": "5adS8KL8QPzQgCjdHF7Nrsp4R8QVMjL3iMBCHQc8W2GkkAWbPk23SQk5ubqgqKLRxG8Mp5Caub99BRMLpF5nFm43",
  "key15": "HtNa4jLu2r4e9v45GnREscCGGLpn8SPoCg2gsMy2EzwVvpLfJ46coc8ppsqt6s5EqtWZHwvYT4NWAy3jHMK2JVh",
  "key16": "hifueLS1iSvqBe4iDHiSg3RrwQiU6TX4Qn3XyG4QyoyMTrNrXUjfmKzVopj8KC1FEvuFvk5stzuq7ziNZZucthj",
  "key17": "2buVPngBoo5MuauhQKRgRyGuYuV73GCDQdYcXaBPwi4qxGxssZ2ZtKcqPfDuNv3u7RYE6R1AoFfhbbBZeehQ3CR",
  "key18": "uE547P8VgqePqyApYJUb5Jr7x3ADt9soi1NqApQ5fmmLfEEBEtgvQQhfNdPDKeYfdUaqLUo2UDpt92sGX4VZK4U",
  "key19": "5Dy8J5RQyf8CVqXu3DwLxmXPjWimu7ZmV7mfctUvSUTMEqnY4S3BeKfhLMVdogoP7TnPbrR7Zpoh3cqYTTQnRJ3B",
  "key20": "2woC6FQatAhgEKB7f44oVcFnDqaudE8LKJSJfjPNEAhbaTu5Ng9FAUDx1riTg6W8uXFGurXbLd7N3E9UM5tLHZh9",
  "key21": "3rDAWDTjP6qDBKuupGuePLFnPhZiHh6qJnWUHQM68S7Eg1Cb1wgqHAMh7hnbEFhnfbGyEHhuTdSC5V4LaYvq6vYh",
  "key22": "415hoedKnSQKpjD84ydBxTdLME5yc6SWqDLQLdohPSvmWu7HSitRTrsJu2Yyd21TFcVH5o3CNBPMcAzBpN1kWiWy",
  "key23": "2DLhNZyX9k6vDKh3jPnpmcnUWW4Voz4AfpVxfskwdcriohqFb5ZtDXJ5MpXwPVTWBiTHCGuf2NnXvDGRxa9YC8Gw",
  "key24": "4V7bDTrxi29FtsDyBuTUFAGL5u93eJGh6t4qV99ob6gPZ89xqQYtfFS23HERYtcUpt3jPvERa4ZFX5A9C1gDX2D6",
  "key25": "5AFbKrnbXp6NbjHkZ9VH7kKvU3GxQVNeBrHTdV7h1EDW7Tth59QMPVKApYiS6Bp1uHnNWq5beneUTGvGAbLbS3iE",
  "key26": "4FUpEiw7osNE3dSMnCVSQ2UatDXfjnSamdfRxNtQjGLwpY81Mfx7oFm7qj6XgcxJ4AfedcEfVz3Uzah5ap4UNTm9",
  "key27": "3K9MKxF2XkX5wvAgu5gABvw71ExaxdjvFjUo4v4UEmLc5eb89xxtV3bLrYxh77Fq4HrYFYJSLnej5GsfWbAL5jkX",
  "key28": "22tQMKffXUJJLPw3kHg2aJNCp4mVNdqs4mNJeGcNw2y7mrLdFimmx3Bi1Z3yVdz7HLa82NL4tibGvJdisSWhMEER"
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
