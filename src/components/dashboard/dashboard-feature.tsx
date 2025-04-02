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
    "4FFsykZYYTE93dqLBDcpebwunzrSTMbg8q6qFtijtjaqYagYf8Z4pEEdT17LgHi5rGcwFYcPD8kVj5fHawBsdzQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h9hUD9qQ6KpqjnViMmTFDe6MpA3DiGQAJgrRxQy8RVktfM2ei4T1wK4QnE4m3aR58D2w3kqSexfasekAypR1RYa",
  "key1": "2HS3BhMDEiBDxaCKevKRAmusK57Rg6LimfabvyVCLs45nRn3jdD4xnMV463FHSNQ1mQQnyuzCqrBKQppizieKtUi",
  "key2": "Lnbt7gU4nPFfUH6SZmQHeDGUpR8Xfu6caU33gxLrB9JtUJvXha1mKVdkm1KbzgEac6tjXxcs23su8frga8drf8Y",
  "key3": "j9bByyACmtPiqUNyuNFte7uaibKrbdSrXAWsimUb1WK5eQzns9ucP1QEu2ZAcpGNy32QJQagZmSuci8V6Stbqmi",
  "key4": "4mTe1jTJ65RMb8iGtNQN2WdUsB3N5L3dGFMHwtPmmRPpMcFS9fVespwQs3uWHWLTLvaD54DDHUW1dxsootTsSjLk",
  "key5": "3CaX88aMLLKk5DPBwD1W9AxVGeyQhaJrZpcGFhbCEWShaG9nQR91Xcq115xJ5ZAzA3L5HfGjnNuxGgenNfKmQbvi",
  "key6": "4j3bkdtUVEzbUpy2CeyvXQNGP1uoMo1Xs6y4xzHXFxoNDWBVit5RZGNfQGcFt1SXZKHuWiRvdBgaQm8iUowRWzJn",
  "key7": "2XRgy3L9jCJqJzMu96HrAoH4PpDouBqyri75bvHwfQBCVF3DjsgGAgGunBkHGUhDKtdb7Wae7HgNczoZ45W7W98",
  "key8": "3yzsy7hbknL7vjre64Lv6fWLJcKr1i7KF3devZHpcBHsJKrnMMnZfFkz1BTj8FMRH3PhJs3rS5SBHmfe9BQdXQcG",
  "key9": "3vaCWphXrWQ21mso7iRepWHr76S35Xnhg5FgHfDSH4yexpYoHpEfJs8bDpcAAGzgkccvaWNoKDRGhZw23uEZncqz",
  "key10": "3BfGCincb1b1bevSWT5s8fTYGPufzbq9xN8zbmbkCFdNAFFUCwQ2xWAsqJpis3eB9eduQdkgKFs9wWNRidQ5LA8f",
  "key11": "HRnjyJFDc71TP1Zooc5Q7hHRiUf5oX5TGZV78NWzRQdN2ibK38mE6yxYZK8X7upzbSUjw8LsfkVssiXuij3gXb6",
  "key12": "3gGJcchf8Zz5HN2ZB5mZcfGY32eoHotbipZX4W1kv4wmNcqkuYuho5fSUusXdzQ2jKRFi2KGvDRTEmhV4Z4V2LYz",
  "key13": "43M73GmNyKYqi3DaFZSKu5GnUqjrUBXRpV46RR4duTMrugg1SjSr67xfD4RAomZeEAdHvRDf3Q2R2TeRdHPvUDmM",
  "key14": "5y611fiHJik56s1ACkmMMbbqjv4zSfE7X6RQaB71qhJsLsmME2jVdiuEtWH77J5oYMpAUNtt1zexaFfZmoUB1RCc",
  "key15": "5mGbAXjoS4evJNmaTZPhZTZBGCgBVxhsnjkNJCrLDGYfDV3z5HesdGGY4qoNi7AMfGSbNxjBPsCwcHY2eY7A6x2p",
  "key16": "22ojqX6H5jWimhDvZBXfhwNvK5JG8E4KDcKRFPbqERt1oBW9Ar6hRjCzBcyz8cvXQCDpry24BxfirmekTZNzdvVF",
  "key17": "42JRT1zFo746676jXAGtdoPTBPAK3t7r4DwDzXzxshh7uvzMhzN7gryhrqei8hRV2DgF7ejLQKL4ZVa8hjPHsoQL",
  "key18": "47g66cwYny5chkt4uqupYboEWxLzYLatFr9kEGxu5sekJDfQtUAJinyjFXJ7RycSbL1tAX5vLcRa4jXdZvFis5Qy",
  "key19": "5HDKxAqbmSu2XUx1SBefGcZqXreEA1hUPcAMPaCcX5fGVSt8h2xH6kKC3JtiKtMfbXSH1bUSpT5xtUDj2mX2fhws",
  "key20": "5FMv4FXghJ1mtaPX4bL5ti9tVgdG5C8Wqcx6pKZCGG3W2axBhfkcuvy3mYqNnGNYiRqr3k3fjxwZSvVHbmpq3JaS",
  "key21": "rnVbPP8jAHjgk5bTV6Kz2nT7ygjh6pRKKxQEUb3DBDEN57yut4oHDFdEgNHKQsUNhs69UKZwJYor4iZoEMe1x1u",
  "key22": "3kmY3MXq9hL6UedTpDhxHaiLrfmBHxwxJHyVLjMdUyufFV64Ff3bmcnte54eTMJKAkFixrPnZi91bJjeac3QLU17",
  "key23": "5FcpCYMfN2BFt3kfcVhCauv3nkfxX9inmbifDduYa3dyoyhsGCUjcJGhNmRtPW8YxF2GY1EbYkMrnWztCJ8edoXn",
  "key24": "2FqoQ748wcnesmR3xAHYv2BqRXJVJ2JtXCQk4Si1oVte4uU1ZH2Rrn2dZWWPzEZCVQNFNr3Pt1dra5cktqAUHfG4",
  "key25": "2cYYPWvgL7a23VBNM7XrhzoqGo68shjzwMhzAw5TASn71cEH4kJZmVgseERMCQ8M4WrgCwmckyEFUHGsEkMFjFc7"
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
