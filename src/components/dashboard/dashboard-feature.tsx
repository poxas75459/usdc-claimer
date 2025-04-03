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
    "A5n6YhqAqwz8Y8gsgj9TLeA6ygrSDyUPXtpvVx8H7paFz3KjykheS6XwjD9DXH6Kcp2Q7YwcFR2JrX2QcdgFcW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44K8bYZeYrUws8zMGx3qitrtPEckheN3nEc9Fa7PkdRoHUH2xHr8XUq5Ey1USei5voCmvseUwEqjHDY8mz8fiFpo",
  "key1": "YDQEtE8S6MoJup2Vyt9bqPeDyxApU8rZCRicmA7NK4QjNNAder6YTo4URjqkVUAeNWz88LfxM6vqKyyMe2ABUZg",
  "key2": "127FSVXmt99mgnhXVxASpnryWfAPNcTQ3BEm2KVL712jxkdFyj9H7JE2VigEE9RmcktoD5znd659sQPCmhgG83e5",
  "key3": "3r37ZGQgCXMvTWzu3PaSquWdKp9d23nJNYRrC9E1mHyBYNsCdquaPF5zHPVjDfgZQ3wt5Jek5NiEtpsvsPJWNZCs",
  "key4": "4Ztw5XGFSqjt3spVxzWkG1YuHBjh53kNtKwFngErHRxLT5eT2hJWf5tiL5UEVgHuWT9TWNK7PvJQiC51rFiXoUES",
  "key5": "2SAz3w1US8M2u1JX8FyWFemDknmRd9FYWx8jmoPMw8TU21dttrt3c2JPqmr2KubfxjWNbMkW3Lhvs3dJYAaHdh2A",
  "key6": "5iHNgXHA4EwKpz4QP9TTd8m7rJGr88VtHDY8VziUUY246JGG6yKCbYJ1shrgXLz4AnA6mmRj5dVQWYvrfxsQvxm9",
  "key7": "5pbzt2bXooiUjr5mW4oZBVCRxQjGrFeXH9A5gVGnpUJjkmhrRn8awdsUjVRBm2bc8ecu7kSMKVUE2sYeHuGW9reG",
  "key8": "SwYzoTCzwTPDW5ooFGf1QByFm8fS1LjeN8zg3wVsK7vYqdoQWDDxkkjrFjKfsN6XwWiHi4ad5KTzEnzmir3eohL",
  "key9": "4ag2ubbQ9PojGz4DwF6B6EC1NgikmXXFwcKKnwepy5vEpupErhdBJPb7ih465zVuYGaNUeepN4v9Uq3WwXgmoRGH",
  "key10": "2idp7Gv1SMgz1SUsm4JnVYFMs2VaRcqpEPt8FPuhUuY7CXcFVppPsRa6AcCXNPRUheJKyJTsCevXCcx9XQ7onkHn",
  "key11": "4EEx8XnoUQ6Bzxp2RcmJAkouAPA5PLyWzMbn7AMxRecMd6MVK3dbTXmPZVpW3rM2fDdmkC2aAYtW2SUAzKA73Bv4",
  "key12": "kkR2P6Y6ch54oTBa1qGHJSZRjJRjit6mWwX9zEAiwE1XC6ksLLUQpeE9msLz3dYCfSWq9T5KhCcAjMP1KiZnbo6",
  "key13": "35FrH3DdN8x1e3GMPWTXRs3pZq1Lz9EW4cMUPPhiLDCEeCSN6WdynDmuVZx1ozUVaHkCwk35RkWR2J7L8BnpsdAZ",
  "key14": "2S3nLpSyrnsX8n6y56Z6KuvjN9dwmDGLdW7Wfx7jDBkRhcktVePK4xyjnkwKCgarWqkJaArQ6T7yA3kRHKvPMmJZ",
  "key15": "5AwdgjtscK5CRk427Z3Ewz1i1fzvtBsG2yxdnV543iB16Qwgd9rFpsjh5YcMtnts8DM9ekMekDpNqxg1o6z5K77H",
  "key16": "2DwyyrXwtTwWPsg2nmjsqmPwvFA2GEgfnjx1QVmbDfaA5RNYJCbQHVU68y4FotNssdAMPYxJXpZf4RqnX6rKHVME",
  "key17": "4fjGCRvLmYv3qKEgBGkvzjFZMEhTAZXz77Xo8bvbZZTAh16LTzsMrYQqCwpRJFCgpprK9FKeyQhZeCNEC6dqzLV5",
  "key18": "4Tg2v27wP57QJERCEyw1nsZkn7Fqb29yPwdAmuj7JEzY6UJpfq4qdRJWAjtXSqdbM6qdYSrgGxNYLzaS9z6RQDAi",
  "key19": "5sN2JQwqsSgvs9RAnCP3vJ9qGXan9LHs6hcCLbDGpJqjm7aZBWSTmsL3av1qavg5KKLDBfAd4P4ekvAuknYgyVLS",
  "key20": "uxV6HwuoFzzLoevB6GjJg5iFMdrYBWVWfkpZvYKUdghwfaGb47cMXaG5Hvg9SYgnYsbSnpN2QUH3Y3cLgPKMByG",
  "key21": "3dJQ85wCVaGXyTb2iCtydwv93DYCQCMWa38QM61kE6XjC3VbFGrc13rDfiTW11bUfVN1UgU47Cb5K6cFvDFPM7pY",
  "key22": "4wtACb6csdqpdXhHHvPuQ8pZujcrfSXjPnCUZBSVj774cUcA5ZnMec4xGM27odK81wFbq389DcbXjnrtXaxP5bAV",
  "key23": "2hYn6UPm1ZJMnbCnWXRiaD1QSsAxbhwrbfoJv4nibFc1oGz2wQcfBcRcQBWagXT5togPTCkgVVHyruFSQi922dsV",
  "key24": "3gx8swanQHYdpegAhvQSEGoU48k3i5vRMQPPzeDz8Bwy812kEaUZEV2VsYxq8SK9JYTVo9nHGLcFuMsmKi1yuqhK",
  "key25": "2N9HusUqKa8VXA5qY3XyYFb6ZCzmBiYxTGqPZn4o1bnY6TBRfzKLmG8yeFv1eMysj5zn3dWyMLmuwXxp2LgyBCHT",
  "key26": "416uD2fread4bspqDDszQTAcdc5dWkYMApUs8snybAANPfLNKpT1VFd3K4fe8XBz29FsmA4B6G7H7NE6y6JqDQTi",
  "key27": "42uafpMqoAUkpB3xmZApeDisUvGJ29mLa4TtSxt6Vog2oUq1Ak6fBBqUPkoSy5RJwEsk4TrBg6L8jjXuUEtgaVtR",
  "key28": "5wpgaWWjgoUFqHDcmrL8GJ7Px8xk6tJdMuN388sLKonkuheXhceKD4YKGsESjsYxxE2oqc2zhixJPiMpnA52GDf2",
  "key29": "3WQFCJggWWF7hyPj2Fs1jst9qR5qJ9WP5XhrKPbs1wKmTNMaNXKXxSDpTxxtnUmaTWuBoKHxqS4kFwy8EukRvEsS"
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
