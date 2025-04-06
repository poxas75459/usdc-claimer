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
    "2kPhQdYn1FdXtuUDaTCFAQwLp4sSMHP51tWMHXiQmJkzQVnrJjxhhSCuheiDRUUF4NswTvEprN9snJ6x6SY8viRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RkWQrKAz9YStuF9KTcAcA1jbMorUJ7dhZUXBqwZ5fQsVE5sAqW6BUsFDUQsDFLTNeojp5hsRsaaSKGP18EkmqFG",
  "key1": "38fdZ9V5LPT3XNFBqmZkjoFuHvtwykDpL84Xq86HReao2KRXi3fWuGZ9m1ZxyVSMgQUuDUWbbnxfUZHbkcnyDaAf",
  "key2": "5awPbqw9vZttmYXpGFC76WjE4c3r3DwvMauRZfcHZwbnrNR2vkjGdU5E3QvJwjxVPNv8UTbbhkoop5WVDAaTKkv9",
  "key3": "pkoSQPCCTEHE2bhNbH2WehDVnWnYu9xD7ci2KWEPNDGDp1vrC4XuvZSAB71SpEMFkyJJAcpJgVTMGHv87JqJLc4",
  "key4": "2QTz35aTkKDMH8mHus6mEcT7miQvjDv6nohVYYUwsr7Nf3WkAFYGurzB7zBkk7GsFiNzn1A3ewq81YTrZrDhEHjr",
  "key5": "3z1JWeVTPEW56snnxaGhzAMh7VGvPh95Spf83qNr4DP2dX6XZEDedDG7ZTKGyPBqdzMtfCNo3hBmkqrB5N5pcdCj",
  "key6": "2x6wHGkfeHiWD1cXbpro2Anvg2EAsUDp4vn7ctkg4fiPCSxyh1DAWP81oL1NZsqF2PFUobqLxU1rQmr8tUtfV3zn",
  "key7": "3ciLjH8BRERZ1CbrUtUV8qpoXU5bquxViEnfbFb8Y9VmdHmkJxUu1MpZHY5as59mRGV3ybfGqNC49xfkaSvrajti",
  "key8": "4msTSUMrHfhRFoRsQNdKCN79dQW2B7cysC1A8aefFg7Gv4oaJ6YEHkgVGGF1USYZR3onBFvPoT7t9oNPoug16S5V",
  "key9": "4zMQX4C6Py3s3o33cMadLWuYBtdfLrgNYLNubNmcmTmXgera2YKVrZewXNAw56K5y3cbL1dCr3DAio2qkSxvytQS",
  "key10": "4HFfqUhRXBmD9g3bzUVmW7AxmDdCQcD2YqyfvS1KEhFh12SwQPxtvo3WzjukxgB6DN1DqdeShgpJYAEo4eCWEjZm",
  "key11": "2jCuaXDWQzw648FPx7wbKhjLu1D6AVcbp4f46ujyNAUHGX2cLqgEN3FfYc7dwsWMFPDMu2dJzuEKvgdUeKUpE262",
  "key12": "5Q496fdF6uYGT2kPwVysZ6SZMeJ33L1aMGLm39NFEczas33KuG2LrLk66vKmV49CgzQBTEwcDjaan2QiWde9isux",
  "key13": "4ivDAGAnabE48xEYMfRKky2z3ARSmggL6EPwEs9UENn2dNSteac3vbFhdnmvknb98NUYRWGg4JP6kgpzk1diSVk9",
  "key14": "2xpr9DrZwnNtQnR3A3WHGDYnpFawZCrWSgyFCFCdA1CwE65gvCeLdiDDuAD1eNHGQesLVoqgD55jMSopoDFLCMDa",
  "key15": "2GaCf1whjq5dtM9foKvaLMTUhfT4F9XqFVLgV536VcAhu1iUL662w9qZyzzJqdbkisL8LjL4j3X1SqptuE2gkcqs",
  "key16": "2YxysfjhZHXGGkn9eDzip7Fsi9SaCYgP3994z4f7VSyUVk4tZ6JNRLh4PwCgX9Jh8dVKYHfvj2zMaZ3goVhwjf82",
  "key17": "3Mp4ADmdakw81enm38QBjbhRXpZ6TpXiMVwaEhCTaxrCaRm2S6NokVcSzfKbmTGjdAAqMf9xBgvBF4EXDgawHk5h",
  "key18": "2mX2kceoibUFaLj75e6HRX3ZLywck1zkqZx8xznEzThguV9okHz5YP3TEAZXr4Pf5JERWnVvtmWBHQ1gZMZLN9s8",
  "key19": "3RYXs7nFBR9pmy171C5VdhiAVBpgAxvH6M42sLxEwfnfwFA4T68kPfx595QZnoU7ejbCCMc9Vn3fKXjNiDHtnkVm",
  "key20": "4HXGCoNzUGzr2WWYezGuERU1XbD1gvLmLj2W3mU69vrZUNDHUHof7MtAmorLEYr6RdeZdGrtDPPPrNkgJCAn5w8Q",
  "key21": "Phv7KMYsxJoJ6cJa6iMq5ARmb1hFMFBKmSo5FjfdYWfUVvNTwneFMDvgSFkAPZDyN2MixjAnyj4awwLph6Z6e8w",
  "key22": "2PtpZ7px157gkUz2z2dKSWm2SGhqhnfkvFCMzWkpHUMQojoYWP2qXub4h6ynDdzZBkGDgRrgqDUsqQTxwrFy1ri",
  "key23": "3G7i6QHLtRgzNBZ6Hbx5HLcSoNYvvpPvDu5KS22REwvb5GPAQm4Yk1hVrVYvgWo1Kr2M5MkTvMMJFPKxCLTCpvSD",
  "key24": "3vVxv7NQ6y6BaocmbFLjLSTqKzNUgAsCanBr7BcRkACatqrjhAe9hhNx3sXcoT9BuKS4Y6pcGjxMQ9pB4M7GxVxH",
  "key25": "woJW4uctyrR1goe86ssQwf3iBHWM71fGoQNCQLgqAf353hhhX6ckLCFyeaKrvXkmPN6pV42LZssqyiaXdrBMEGz",
  "key26": "4EhztgVqQAZ7cEyNDWBXWPbNNFPrGdbKDoo3izdbbCw8h8tTbC9wx1eVUY4hdvDCuq19pYvanDvnfqnMQbA3ZumX",
  "key27": "3emRZ6bK7ewdAG1GFPLmwScnoUBqtsjoYr2D2TQAttMLTF1xHJ8X7uHHcW9YRRafF2Zca7ma9eEAUD6BqjVA1PhN",
  "key28": "3Xf5RZNdr8SQMyiqGNrYFnNNc68zHrKoKx5HXsL3znj77BWPEao4vNzepv5ypp6KNjHiZYrscFB92A7quCY4tzHf",
  "key29": "qLdEnPTLNsjpFFn736QpT9hNmbU3SdfuxZQSbfphj1iCoXPs7ZSKmgmgUs2aFFHyBous4c1u3HCCy4jykQXjT4A",
  "key30": "b72YXKAefwvBbYH6ZCUgPv3HciAsZ6c6f1ym1vAVLMenTqpnkmxyHta3MKubBr46e9SMjS8ihP2f9u382w3smbP",
  "key31": "u3yQPCeMPwuZzpjUi8Jtbq7xasATCnDBaaanhbvcJMMc54qwp3QVPi41phf1cFz5xNSVrw5wH4w8QLhK1WFES9R",
  "key32": "2xqL7pAPRC36QD4DQF6JDonjcrpMyCBaugSpifQEU5DMVu1tSDAqvhm38b95ArJXR2L3UT379DVSwuDUFa8nGumz"
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
