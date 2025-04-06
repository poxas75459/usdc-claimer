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
    "NXMgsHKmsFCcfzMGCsRmaTJ4JtbKKt44JYBBVP3zzPRz47e5wXjZHjBepghkFgbaDHuGdNagZYqBjVoBMVxxJD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p4UuTZNnexVw77bnePUtQNATnGTefrHQUDxkHwiSAH9NMZe2QNNxieXu24ox66qkxakYgE9ejQHouyyDWsmcqUm",
  "key1": "2knuakmRPdcnExrUidKps7qm6Q5x3oYtbipZMQtTYwi5vwDN11qctiY8Z5YpbmATFxaQYnTKXympSXy7WyYrMdzm",
  "key2": "5z5WMrh6vcsJHB9dorapwJtUiZjKWjVpmqFJPYh3k4ZoGvPWGT4EUd5n6TiwDjtJmN4jvH215vZPAWhoXz1huxgR",
  "key3": "5yVSU2QESUUrm4vwqvoC5NMWMWpaPkckiqY57E5zNGxbFVfjMdJpKDqUkqT4CFSKVThF5v1GXomXefSKxbS87Tz7",
  "key4": "2EEdyCsNdAybBwLo7RXikNymcT2jRT8pirD61WJir3FRkeZggN4g1pNHSKTAJaMvc2d4N9VfHwj2Dk8U1Gk8ykFg",
  "key5": "3bQSKrLKtds9WJMMZKrDJbEiwkSzx15fU8DiCEqeSJWas6BaN1dE6tJbNgUm3Wd7CjBBzcBKQFRngFdP67A3CuBV",
  "key6": "4Jw7T6TrFLRBWotsGajbuAcHma5NpWPUye9Z9LJSADWeoJqqnGYmyXNQRgfXZhEzy3tTyQR2BKMC3Hvb8Fsn2zmH",
  "key7": "iZCRmcZsUCHXRPu8pi4nZqyx3WXYa99SZzgkGGCCCSjaj6jBCeWsPe3iVwjKhXppnMbChjTQiWnXLoHrDbftJsG",
  "key8": "354qS1Zr6W6UzLcGCGA3TZEQ9kxNbUEP7S27PrGuCEiBqt2GwA6Zxg8gPygcErk2MN1R9DYMGzkXXSomB8AboiKn",
  "key9": "5vCmAUuj5Nr7qdWHzxUXd7t7wjXcJQiZqTwdEuuJfnof5gZsAcZiJuoePsaukCCKCLBbNjQjLebRJReS9SMGTnLy",
  "key10": "5yAentuswLvYo5fDFmyxcZPC1qbGcri9exn9Ui8Mi8xFY1V9NUX89M8jG9ribDSKYhWjJkX67fJfK4qVy1vZKEqA",
  "key11": "5M4GKE4SAYvUHJcrNsKXaWE3VRF5CQmz1ui1ZmXwCNzHop8brD5VrpqvVgDoFhedBeDSsc2TUhEryVcy2Dce6REJ",
  "key12": "4Q8g9uE5SEY2Pw3wrxQZq6i6DP7BpZdH8nBojPSUhobttf9mLesmzHnquTQzCS9CaVq4oSd5jTcLx3sSN3VjYWWE",
  "key13": "41AwLQFXuLobWXzLMfWam1ShPpAr7Je8T7XBsHAvRVrBUpapU2jgzVpdyAUkApWUfKv3vfLdGQVG3TZ84n1oMTeQ",
  "key14": "4bCFyu8rzvYvznXik18x7XdfdxcQF77xWcDBt9o3CChPbwttaQ8NgqhTMsEwV5ce7kXibiG1ucZ5njEgs7xw2pNM",
  "key15": "5t9r6VL2RTMsGMcGS1wB6EsxfN6aAAUCUoY8U2AqJDcTpZGZgLB6MuNxKBcMgpPbVdBerQD7M4CpfuNktJmX7NaY",
  "key16": "5fAvKFxpuxzY4UeqmNmLqq7ZQY4DC2ioNJ6UQP1Ensf58E5zFSHeJwRiP9t9Y7V7U6ex4h5xABodxd35NeS4keNU",
  "key17": "67VFaLjRCE4vDeUsg1jVBy8tWa7Qn34RgbuiBo45dX9EWksEDWk4qbdTRgjR81ohBEtEYVar9tncyZd8bd8NdTXz",
  "key18": "5trM26NorrXUQQ5q49qogfGHny1LFbqHNXS4zVf4NFaq9p6L2dLtnPrUzw2ogVF8EdVpA48crbHPjdzNQpDk23sY",
  "key19": "3CcTmYR4FBJqT7Xwi2UDyGF39mdXvDvCemxFaJCMcu4y9XB5VqanR1tJbu93KUm54DsDdesbmgvnWzC53kpSzLy5",
  "key20": "3uZijXkoRXD8QXzJxJihnkUKEGKgR9dzzVYuzbhoNyatg3Pd6RLnrtweuUhEBsyXUJnGKf7rrvx89nZQsqWDNnCN",
  "key21": "57NPxGDMMWbj9jybNekCSxKq6thKTNwagXWvKAfBHHZwLifcmdFmdWkd28QsL7RNnXRujYaVSSLxwFZSDSDPyZhn",
  "key22": "4E8pNyxkMK1oAYB6FzLWZxiEEEaRZPmJQp83cmGQy2ZgHY35oh5voZGeTraueNZeF8b5hxiPw6ZnJ7VqhboXMC2g",
  "key23": "gpuRvj73dab74YnZ6Bwn7p5MaPiNp21KSfSc2LzzvNNMf5o3kWJcy2Ly5yiCxdt9AG4EHkMBXEjXM5x3qNMczzb",
  "key24": "5GDarHEipbQqAS33YFcn6jdftcKPhSJoK7Vt6iSAWdM5nDaJqDc7j5bJsDesCYyY3UBjRGa83vFAH5QniVND9Ytu",
  "key25": "5nLxZNVnY9rQJqwLRqGH5UjT5ab4y5btme6DnqcBBM92PE2Yru2PwUHjx243vLt88cddxQiEXkXvKtXwL8QcNwQv"
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
