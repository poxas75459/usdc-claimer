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
    "5rhTKydGHaPXhPYdQNtb6qZgYpgM3HZKFUQH4LEkeH7esTFHtj1k4aa1Zu5B7C5iJdpcY5ndxsrGJUgpFhHRyr6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JVwfsdCkL5Sz4xJEjiV6uJNo78Pq67hFN5Xa4c9oAKkhrvjmguAugxJKpYVGGXBPu2UMNdUncJJw1v1u1bq3AV2",
  "key1": "4YqgRfWEcB9p2LTev6cYPNaFDrsMrGDkeiu7drhGroVvZRF6NN2UE7R2GGRjEzbTdmwKzv6D7x5YFH1RqWBe3Sp6",
  "key2": "2MsngqrhFakY2ywU3NPoQYAYmb2C6a8618ytLmjWGN8feRYsn8a79TTTcSF6hc6qiNmMBJNRxZ9sJcT5qYBKkiVd",
  "key3": "4MLtS2MuHswANgCxrXKi1qGAro8JjHh3JPFhq3nFvmesHHHatYKMe6BydE4VT2tBCNo6CHuFZuKVv3MSWD7bb8tX",
  "key4": "3xynJn61eMPK16iPkQopMct5bQhZK7PSrcJyaLkQ24Ub4yihhZSZeZgjpyhZAGYutuaHa3jBmpEye56nTJhZUiEt",
  "key5": "jV1AUvCSaU8yVhoj5jf3S4GVMn4BNsbXVQJxWkwcg3vmwNJEVwTT9hqcMCfEdpoDotMVrj4oWoe9mamANBa2FBp",
  "key6": "2QqRJ5Ua8xo2RGdjsynRKoTKokuwGAwkZzbumUf2Yb1F1kbs3b6riSZ8BC1FBVnrB3b3SjUhDC2CwhaP4AZQ8kXP",
  "key7": "3KcZHbe7tu5N2MQdNYKT3ZTV7BktB7tuabwAMhwye1cFWt7MvCPoFd3caLqJNvt2qENCCP73SigLAJtbLrgQjq9u",
  "key8": "2vV1pYwVkqnFU1VLTicRviC1cWvWSLeqeS67ZQ1TdyhncVY4o7CvEn8Q5vLXFcxLJ9d2TQde1Gpk1fiZXnjxM4bx",
  "key9": "33T2TcrRY7gksseNX9zg1xnpUF9MLk44EAaat97ebcZT1L3fmtNViqyPPxiatjNdASJkmrxyvyFCWiCWZB21TqSq",
  "key10": "Zmpj4mRH67SvYE6zEaNwCD9Qe3rGqbS3wkkZa6BQWSKs1EXJ6SpvG3cZBfsuigtYYFgUjU7AW7CKdWHpuvcHD3J",
  "key11": "5jedmJT8PzchNG1ThNLgmCdzx2BbsvVjGvvftyXLqy7ha7PFg9s5bZCUz66g3V3LB7cYg9qf3z9U1NFZ3tznadng",
  "key12": "5ta55aa6pmvobrzhyyBgpj5NwZjmNKYWnBiFifao7MZv57KXsdUU6Hm5r8fqA93iJyfL8iJMjUMwiCm1A1zP4nWQ",
  "key13": "59ZcFrqYF1nzctX8ehrMmh8L4sMX1RATi6Ww3jCZZGm9pgUfc8NQAMCSrzSKqNY7XXDYvGUC9PfUDNehhrURkekw",
  "key14": "3WR7QaCNjwuF2Z5sF3d336tJQ3cBqMGvMwB3fiADZ2UQSZhMz3bf6Xi9FeJkuKJjjm1uHmJSU2bs8dtmW7S47Muy",
  "key15": "5WbGKdDwwgZiVciH6EU6gh97C6PwL31qqB3mV9UsYNi7Cqt9HCcn7UKTCUDNe5zyjnXGyBFFM64LEG9VtM8ySS2S",
  "key16": "CZ4vDAxVR1v3XvicKMsQsgdmXviEgLA84iY3wk9E5nPZYQeAGa1iRuE9S4Y81Drkav2Hv9oatB8zBiHGoXbE61n",
  "key17": "2ZQMAWSe6tWHQAm4N4y8zSkJKHyU61jkvvCkPaTXjAaJooFqUSVyo2SsCpJcZpApfVZqwbp7veMFzWvauAbL7jad",
  "key18": "5F8mAUk5fKEBEg7Za4PcAn7vmL2vfY1UtvRpCJkHkiCyGCZfKKk5iCYH6eWEJqcYGfnVP8sFHu5DxPHvsQG52wvV",
  "key19": "qXF4WdnvgZKTecQzwFgpthbrb3NUdRzAYtgPFLWthbaHZ9FV4WpknXQj4abGEZYJTcWvRwhMHGFt2KaXJZWC79Y",
  "key20": "3cA2cfi7i9fhiH5fPy34WsDdCHKqgy3XH7BnFvUHWe5E1rb5z8og7qu7sdbtQPWiwYj71wg8pGfU7NYQDvtwHG1L",
  "key21": "4S7orAmAo7qEQNGs4sdBrC7Riip1HY5YuQ9ePkFJiuks8j13nbKV3toeWA6bG5PzEggLDZdcZsjaaxn3oPYXtYW5",
  "key22": "3waL1KfXj4USTHBKyRwtKDn22KhCYLmgZknh8JTFALrEwcYFpB7FCQkSz8sBRPGyNDmHHDMZ4TBg4ofmZvYQ1Zvj",
  "key23": "4ttXofZr7gnnuPmy9Jt7iFU9F6mdwTdYGDbZa3oSfKGHRBbYomNhKSqFCHcDv3g7VidtnvSW8x7B3dCpWw48HBn7",
  "key24": "4JsrnFgRb8CByNaFskunDZTFp4bW8NaGygDqATTT41u1cuijvxYeHmHzoy7DwzmfLCSYnMNZBJ2N4zQT48mVD8JV",
  "key25": "4Y1jCwxCUd7r6nya5EAFhPYR2mhGaBVJ328SckM6wYnsQMSXG2AZuqdC2mjvmDGJqSSHBV6ha17cisWuyM33XaFr",
  "key26": "2SZrYdG8MoamuvzMm4rVdmCvH7nb5M5DpU74k3BjJMKMe9k86GQoqNCH3AY5yubksohxUru4nz1w2cc7Zz6YQ5np",
  "key27": "gXZqpvahrvfHhsijKW91eyD5z1ircG5fBzdKp5PRmjnArqLFhN7sG4NXUv4XE8hJSbFC7DVLagAu4ctgmf3xU6U",
  "key28": "3FV6jt9MHo4qeo4mzRKDTcs5auUDALXSEMNM5bzvPfAwuFVwKq2dSLZXZ8nPJCmcdsEfQWwJQYFNYCbxrScsKXmF"
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
