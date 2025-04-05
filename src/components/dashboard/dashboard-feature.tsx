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
    "4fyg8wyQ1RvpGWpXgVkfBwJDiF58PxmpG6pRWz5c8EewoAjjSJi63XWQ2FTnsuLcoAHbK2MMiuXRxKMvASde2f1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v3mv1jgLU8YMuRCxhcaaA1kS3CzRoE3RnQ5aknWQ29E39a5wKSCFr1JQaPcag8SSmt3pFGgfZeoXvRcuXCwFHFC",
  "key1": "ZDdT2F5rEwoQaErxgRfYjU7DRSiTdNrK9ii1Lci3wW4WgryLuiNLQyLBQphV34HHp3tozpm8W5uiPiFeLACrygM",
  "key2": "NUWzqtLw9L8bBqJ9nXfnQrr3jNzSozEBvmBCUwkvUr9eRLrxWqBzyqjzkzHJsjMTPrH7yXZ4FWv1TsvsDwhxJiQ",
  "key3": "2nHuM2xjE8LPy3yvPxBmDDwaJUXuiDCiSb4mT3MAou24b4RFkg9Ta66L3CR6k5VrK3m4Ky45MNEK1S3No3VuMkB5",
  "key4": "44ibqiJ8gDo9zc9XorzF6LoGM2Hj73j4PBgVxjuVKARu584xKWWunnNjc4faDmzrZwDYWUk8WNpH7Vx8dNEjzRod",
  "key5": "4TwmjEZ7TzCsixK4Gg7QBkKPGDYVttGvQbDB7kd7oqxtnVpdY7uTCKWvruZnGxYrv6VELWyp8GXFJaM2E2qHGkdC",
  "key6": "5A9g8jrwwbo2b5SKk9SE5GpZenoi7WMazGy2QVarKLMYdoFsxuMfTkNFTVQ69TVrHHNTwuYobSFUBpZVTy5cqbcz",
  "key7": "3EZN8y8q5iL21xY1ud4jgMc8bFW9CahLsj1fnRNoPRx3SZ9oWo3az92nCbRDVV3RRPZuEXeHxEt4cAR1agWKSsar",
  "key8": "4nabMCkuSYPvYmE8BYhJg1MqPvar19oRbiezTVksWWJUkKSwimzbRnD9K1Q6jatSJLGgsWUG6QomP4HqBrEWbCf2",
  "key9": "3tKG2GWqmW7m6Z1HThsUgTY3VX1oaJRe7E7LMp57UbwmtHWGAtPRQPLPjBjoJ22DzYnZURv1LzAMF7dniY8bo6oR",
  "key10": "2gvjS926XNoD2DQoQHUVqA29eEoaiWYeCnQpr9ULX9dpbVSUZGVGB44rU4NvRfhkY4zQHDEJdnovKtFy53Jyhxsg",
  "key11": "GQjGD1YjaH6XHf1ahU51cZe61XNCazvR61yHC9XJkEhVRbaCPSaAEbvJ8dgHj98QzFjYmH7xmCxqjE3FzixWreV",
  "key12": "5U16G9mZ9SNGbkNJ1RgqEWHoH7gqfSLT9f4dqLXUrHKAvwsGtZiEpoBVSG7RFajojFr246Y2seeVTR1krrCFFBrK",
  "key13": "5C8hD8cHcMY2WpSQpwjTzfXDXyfqQFuPYkZuZr3LvyBMmxHrEcKo6Magw5dpet6i9Hu8gNC1JtBsdV9sbw387UM9",
  "key14": "52YurQUij9DExPnJ9KK4AbEoACRDUL7Tw8zPp6VUDnJmuxwKDxnsQQc4abvaRH3BJB9Wc5KAboQymyhbzMq1qK5C",
  "key15": "4KrthocnLXKfqksDbF2ZCJM24jBX7M8aZUkLrBRezVwX3vokNhiWw7uEXEMZjgj1afKjmFXyBU7sAKGvULgyLfYt",
  "key16": "21mExYvKHkLGswMJYp8LrCoFGrTJcBMUTzEULnvZkQ2XiftUdtnYdzfkbxhj1q4kTw874mCfWgJZdMnT21XrWjLh",
  "key17": "4DJqegebyfGrCjxtJZXMiJmWGGNJSmuF969fnsXdbPEHgsx27MZyttfLpVW3aFD8RcLXFgL18JPKcFYcRbBmBrf6",
  "key18": "2N1r5PWSs7xNZv1fpAyGuz5LqSXtW6er3roLFVp1c65KC7EVWsicmqGvXcnqkUEpt9c8WRcNNbD8Gnmkac8YRzUE",
  "key19": "582iBeVEGjFnqsGBCaeeWDkn9iGDd75dotuwvJn5eBJKg2zmsWXyUaRy2vjyFxFqgt6L3TMDACoMh5Jv6R7ksW3r",
  "key20": "3YrgFbH3P6F3jTXkB8zXFF5y6WP2CCFLe2rNF53iPRHfaXzEpgCsNLspDtyRjrJbgvGmyGt49zq7h2HsebHZKCiG",
  "key21": "3HbWuZa3CTaiV6Z2ekCno4SMS11GsqWohzGTSAzZQi9Q5BW5D3Vs2fro6dZnn2UaXMnaXoP6jpAJ34P1P3bmCqEX",
  "key22": "3A4JoiPFqL5UqG4xomVepQH3yq6bobRj4dvQctokqh2unQkfPvEV9VJS6fnVt71x4S2qLduZZDHFJsAsV6Af9dfy",
  "key23": "5PgRN4UhRB9feMuPKLNN887Eh3xJRQPVbHeDANt4rEtqWciNJqt3GM2sn1HbYwGW9t7mFHUped13TrBnBvS7L9Nk",
  "key24": "2iewXYG3nodvQom8SMsJJr84Bp2gpMTL9XujmTQhpYKYk9GS1ufHTazDHnJPENYBzHwJdCeTmoJYTu7FfR6LZZa6",
  "key25": "28Xr5QgNvWfrYbtB3Xn9kKt3AzV3Krjcac12xF1dCwLPjnzWPn4pJSpwhTJNi98zhsd9wjF5ouZ8Ta3ohpR7s2pQ",
  "key26": "263DXoxgFs6wnbGjCoi1oSUHDCpLM3LJYzyNmTFXzMnewaFrxzFpXtLjvciaHSxUNDrB19b3qveax3zhsTfkQvD2",
  "key27": "3SZ4R4NixquNXwD62PPQ2KMg7EoQ5FQkL62jVPauAc4NbBg3nPph7G11ehfuz6HfyjzHYH2yyPP7pxKuc5C3LnQJ",
  "key28": "XsG33WPHeVQeEkKhNA6tdU7QdvUTiV73FPxKTeTV8nBTAoRgEBCw7Er1abZkqM8hLE65ZE9itnKnsknwEW2QJm5",
  "key29": "23ukYUEqU55JKHxeJYxBXqDmnufKajjAs1DN5u5N2WDccBVM65MSYjuojSEtjGjLidpgm6w1xUEgR5Gw8npacbGZ",
  "key30": "4LT8Er5zT4iobQjTERE9KwdwH6K5E5A1dExCNtsv2KXWiKZqmP1CiYYju8pCX4WR8g2Zo3YgdW9XuRqvcipbFp3c"
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
