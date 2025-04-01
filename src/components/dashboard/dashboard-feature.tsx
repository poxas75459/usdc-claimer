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
    "2cWpwfaCKFsjhTG8foDe2TPfGxokbQX3ZAWHeBRc4mTd8RNBjStdj8wwEq1vmXuTCXEs67G9C2m2GTiwkCQVytqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CbiYjCrMjUAXdHhX1k9t5h9bZ4SFZ6zb9NNiLqcpuEujBTmg7JxPfMRiH5Fx9CzMTurjgMyMBG6NhhVXebfPoDT",
  "key1": "MHQ5ZH8cRhm99HfQTRVv8dRPKDtPxvxX6dAhRwNiuBuwfD6NEMZqTuJZxsbfVdqFCbb1UhnVXzsmb6gyv5B8vzr",
  "key2": "3QtT9o3XUQceGp6eJnN3ceLY8sxRqasW5HukoMd2d1UKwf7gXKTZHRZPQWEEM4fSh8yxAmjR7wFNEutfHh7ogc1w",
  "key3": "fQDeC7RAqRowJydNkMfPUqq736roFUavqgkgdvu5SA1Cf232UBeXK6sBfbF7msu7WjqqVhyn61Z8uEgzj3m1VD5",
  "key4": "5PrqVGSL88ERPSyjJbBqLibYLzwwcZJRVmxp8akQgfozGpRkGxufvMaDwZMUvWWEXJZetL5YYVY43t1awnHAhqaL",
  "key5": "3JP2hGQqfThSj1eJFnykGU3LChe9UHmDRm6RoVfNc1L6K3yLUNhsTN1gVEgkKFdizVreagNA9Wx3GD8kFZtF7g5w",
  "key6": "3FA5Hr5Wt8U3hpEY5oFgmoHNv1yGuQ5ogdTBoV2YANB5EYt7NV8A7KS3nmx5KQkh7ojtaZc8AzvxDiLmnJ4oiRJk",
  "key7": "5mSLSxyqRC2VGft3C7ZMccaU5b7eQQZ23uCVMS73vg4E8datW1tAEdyyHGZjKSemBJ7VvPCu1gzr3Xt8Sj32DAgJ",
  "key8": "3wwiooroaPcHFoVXrC6i9TJC7BNkHdL83BwyUiFU79tWgj47Jo1zviTXHFd9S64vTfgsRbshHj5P8CbkjJDFzhk8",
  "key9": "XUyr6c7U6Q4pfx7EabDsUxJdazoRG6EpyjyfSJVYWaeqQJqsUGSGNyG1R4DfEC4dZddqTxZA8kaFA2vn3Jw1h9U",
  "key10": "2wn1QnhPAKAuBPyAkyUyYEyR2EC8HWS6bG48EftnyzjoAYYnij19kHc6ZCmoALTLdRyiR1BkjJHGEpdPLjdHwKVf",
  "key11": "AAtt14kubF68MndwddFBsFgqtQz7K7375XxwwUSTH9UG8j2ZinLuEAMrvec57VCXnV2QBrNQK8titYFWjLCrUtd",
  "key12": "4g8xEcPkRCWYrDVa1YXaVtvY46UtB1pupN8g7SDx5Ex5BTQ66RNqoPMvBb5Q9R2PNXms7dyHRoGp69MBB7c4ZiWM",
  "key13": "5hhx1DdYTdHnMHeNVjfsfJn6jxkzAGkSTrcuktxMX1xQxWBdYk54b2mscihH7h3969u8a2h1iMZZx46i6Jj9XZb5",
  "key14": "4BQbfFhno422q7AC7NZ3FbMS95sscGN4MXxm9JjN3zAvsi8NytHLAAEs5QUFxMHFRD47cBXifrrVoo4avomp7D7",
  "key15": "1bNP9evurtXAHmmQBGL2nYDFAFxLUmz22oPExg3bFAjYAwd2susfuJ3LXefwb3zpBSo3rXsJDznVUbnZsfhEKFs",
  "key16": "5Rf9PUTdJChb1vA6oq39a2c7ntPpzbqDQb4WzFqUTjNsb68hGDZN4VzRFdjfnf6p4J8988cfyXSZAnqjFu3Emhsb",
  "key17": "5f24JpGcnrn2CGDRZrXZ57h1YdUySPzXL8Puu6gWUxqH75G7N14w97gwcxCydzEwkEG3aw5FmM2EbvkiBtxKC6jY",
  "key18": "5z7rezSgS7jsyov8T9mYjdfwhGWFzVyU3bdeU9DMp4Vd2ZAbs3uNrbjq27zhHt7P4C7SfUvALrXLsa7BmfUJvE7j",
  "key19": "2m7eDwu8aemtitgEfykuoDeN2H7Xzz6KHdAENbbuTg6BJAkCHpH1wWywGmKF4QMrfwePLh7dJgYLDNMfFvUV2diV",
  "key20": "44BXG5JZbo7hSAW75uHQXyS8X4QnucXDUCqctWPVcYPK3vv1t2Ph3Dhw2nfJKU1srZhqgAw67jDCVKZnr6u8fHBr",
  "key21": "2jLYa2xY5aS3RtyQtmXvgnBdSGnyKGSXqdzLRm8PA2p1TiZxrVjn8A1YMwE6N9R9kfnp3ymZdprVEbfJg8cBZ4FS",
  "key22": "5vq8yetSAv4wYTEu3QsdrAuaoZGY8VYEXNyNERXaZcn5Uy1YQ9yvcK7E5A1hsa98rg8PAgYJscA4hWrQnQ34kwhK",
  "key23": "535da3LfXRjCwWoFfD68AAuJQr44kJ8Eoo58MR7Nby66pnnNM7S88ZX6iYjANJwN99onTu7nyExhZjRwWeNBx2R5",
  "key24": "4ZCNa79vv7V3oUYH13wTxVp9iqGbStWGfxSwLcATqiXNErjzvbV37hgfavZKNir3jjTTymou3bjmpmtdkddrHH1V",
  "key25": "48qpQmmXXJuuXsJM1uvq98Pao866yqfHcToaBJyy7tC9j8M5ZrNXX7beZ3mEXDwNjJ4NQGFBNcMWv7obHFtKiiSr",
  "key26": "4sewL8PmTKaqvFsjyxSMLSWdtgsie23xkqPgoFWwcCtpGwoiwfRhy4ZUtLm1EE6pNUcWcz4KtnQm5oAyhSkkYVen",
  "key27": "66ckZq1ViPSqGgDJqgt6TFcECcxVaGVHxJeD4Kv852Cspqba7Gyv1GzjiayqcM58By256VSDCsX4iThr6JVpbezA",
  "key28": "34THV21Lc6U9Wiqtt2QkggHYY8RBys6ezWof8usxoBBSpR1hgziZ684ZgSX21tpEsmyGwXRBZQRUwopf4yofgD85",
  "key29": "3NAryfZPL5LCpjKcJjuyX6ukB6kErBCrWQ9NFCGsSHkft3LFbtroVGJbFbB5KbwR5vFrhRhGrkGRKMkwCc47VF7q",
  "key30": "3xHHEpaSPUfw3SQaQ3AVbuKCf6ceMqW12vBD3sK5noNDdusB33VTPxFjLNwGc2VJmSWnMuRrBz2z6Wdmw7SXQTdN",
  "key31": "42R5pjAXnigZnUuW9qmRQ1SjN7C8pjFkCqoCoJWG23L1KH4AC4PLNE24Mc8VfxXc8T8xcYfy6P8gtteqxqxdRw9L",
  "key32": "3RmXkrukwYUCnj9CXVEnVsaUuWQNJMLxYPCxngm5DUpx1MZVhXmNEvhwkYWiXWBJsdLCYLVdzDedfFfWiBpZZTMt",
  "key33": "7f74m7m1DW7yT3APByMgzB4K58faNLkHx1b9RnrMfTA8UXGSudjiHPA4PMGHT2SrjazihYSbyQTH5kWLo2F6Cb4"
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
