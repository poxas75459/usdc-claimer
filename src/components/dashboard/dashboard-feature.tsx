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
    "2gy8z8urWkwsTMcn5cDhJ2ztGaU1nDoG9Zae8uQukxZNQkjJEvvvnSS2A18YKNwTzR5bAuXqaQGVYDmftnV9yPHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27HBZT5m3wPSsi27CAtX2zxZiVsg4DtYP2a2S75mnoW9uP5iyRhNWpCDHtmoD1oGdPjBYGirRaQjZRdpHg7i7RUi",
  "key1": "kfC4YrWSNc3CPJ9ZhDJ2HvX6uZUAsUuAmoa7nqRnecQX8KX4VpkqfrtfNvCPMiMf5rWD4u1Ys7DKKsgutMymF2z",
  "key2": "4NEWaCjSPCwnMAG9zKFdvU3pGuHoaShvzYFNLnxwgZeaE1gdvA9NzJkUowFHenkpYEaBHA7kKFGbFmkhdBau1pnm",
  "key3": "42x2RqibviEEgoZYjFFwQFCimBAHJHGyNc3SzTdzV2AEdVmBPPEKb6FSK2NCoSBbJB5v86VrmnwBn5LCwzQvNj2j",
  "key4": "3TP5ttctmct28an9N46ouhw9VXJDUxSuVKPbP6ixr3ZS1X1xTRxCmmR6bYzdQSwvw5AJxbwHe711yaitRzZ1rn3w",
  "key5": "4wi3bhebBALKMVbzuTVuLui7UAgFHv8CWpz8GtwyoqnHGqqFSRVNCDPR3Pgx78iY42ijtuFVMjfbgTB4aMDQDiYg",
  "key6": "2Dt9mBNnBusfxsxX3F9Z6miUmns7Aj8GxYsdDSk7D3BCGdMqya896raRzo83WJdsNf2bqjeRV2NLtrjUfTx7q5QR",
  "key7": "4XjxN3ecH2rug44b75jpZMThq1RmhZCyAEQGLzTUsnT7Bfi3CdsBJhmiR1cJeJdj9mBetFc2Hkmih1Yigb4ZWFhL",
  "key8": "2reRSaALYJGRCkgcNWXDtHsvv2Qwp5DZTMsAzTgrwUTJ51yqJvq5D9dW3wt3qFJhvXr5gjwBnz3APTtxvSBGxsGt",
  "key9": "5TCrpKu4LKHCAXQBeJrbbFB9TRNNaDfGaczSw5czA3BBpXypMZu5KTYTJjNFR2GLZsUWyv8AXVRogAwa2WiJNEBY",
  "key10": "5DCcCrTfiigVD2qfHVSY63V8hKPZnMiHzxev8P7rDxRmD7yKtRjKoWTsrassfQQC3a2dLjQ1Y2wyXHF5JUcHA5YA",
  "key11": "31fFHp3L87MQMEpwq3C6ZURKTymq2Bu3iqyiAeaJFN6hPJWFv22a2EwJdUrNsw1W4YyzHmLDwUzEjVxQBp2JApKz",
  "key12": "2MQS6Fee4Et1dB1AjBrwjgux3h85wfttbbfuQrD9D8qbjWM1o5WQgxCNEfrzE59ULnMdAgf8tJWc7r7Cj9R76KCN",
  "key13": "3C4QTgupxNFFWpof11UeqzSDaujunUPKzhfwWewnzHCLTP4hc6urNFSUcuBcfufbZw8jHrKnwfZz2fZvfD6dsLDa",
  "key14": "3LeDs4FS9TudFfJoiY3Ei76dgwYZtxK9eQXZ15dWAmFXzxJvReY9WFvrmM1kwh356EhcvK1TzyHRFWsLaHQAAJWy",
  "key15": "5vSQvyHR9nPSq7tkZLx6X71vWoFmscmppinXCQKAXUu2uFwiHRNdCnnuG4yCvp3VXeRYwoCTuphvv72fcEgePjuX",
  "key16": "4UnvCxhuBupaEiuLvSCRnB3Hnq6vy8C4CLjcD8JYKDpdLSAXNiQ2RWQN1nT3YBqcLH8cE9RFwZJtPWDXdEpZGivz",
  "key17": "4axx4EVy7QR6sqp21BWF21WGeqiaQtPEVHAN5Ve41GafKnyEShGmiqy4La9fxZJ4gjp2zJVDcTyGr6zH4htEj2Ak",
  "key18": "46PpofxLpFzf9ecXtNpodyJFBHLb55rdRyo8yU7eU9Eo58DcirJAAfZ1wtjs8X7cxKv9kZDiEU3CURZMmza8VW4W",
  "key19": "3SZU7zhYNas8gmomScmVhPnNTDLmgETTaYrjPQh5NFs8TBedLB3qepR16jwWP619uGsEvFg7zdCoJM4iR2d4Bym5",
  "key20": "3CVTJnX7Vth891tmQZe2ioiuPdXyggS8PznznmUw1sBfKwMqZn85pMpxZ7UZH13oJLyvyiWCWkfvkajUHPE2t2Gq",
  "key21": "2dM96W1oyaeaFzjpn5R85yt6Cxc1DmmT3Q97Nd7a6fCvjxEC7KgsPXEcBV67JEZW3ecUWqbpoYqAzEoQQpDTRuoi",
  "key22": "3onRTr1DfxqkLSjmBN1JPDKuNNnh9NCXiBydodRcCHUeUGwL59wyTNb9fqFHA4PxkZvrvQRU1nYJBGqY9uzE2ULj",
  "key23": "jHyh39dq97eNUVDEGDWNgoiHFgoz6pv4jtnJKEjspnWjwXmL2ipu3iewG9Z87rfyAQm5WzGGEC14uHkKQBYVRaF",
  "key24": "3VGUk2DbUFTDpqPuTufAEL2UYQWEDpgL9qYwT31NU5siDuNHmCzxKQkFMprqZVG8N9giEsiknAMm4UQp9gQTNk2i",
  "key25": "2YR1pAaXfJXpqx1u2DakNfrmr77gyw1PAZNBkigmYwR5mzGAPBNYLahcYXifW5yVd4kGpnsJJ5jbMyANSt8snhzw",
  "key26": "4nLsA3k1UJT13XXP57ysFro211wszagqdk6Qsf6BFSZH7rNVFZ2azBFzvZ2HNPrDqrDbrTgAJWe8UmNpcQMUg4pA",
  "key27": "5XSdkSLzRXcoQoK82L62asg5pqZFTbYPCykf9r1464F1BBAhZk27PXh2qWRAvJB8FSmnoxNoxC68D6zsgcbUNYhg",
  "key28": "23nGGRNtJbq1KdcsiNT1c2XA2uq84vWxCmCPox5oSSWhr3nMZiHvag2CVBuDhYUJvRBnHBSXjJji8AAAiuCuJpxh"
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
