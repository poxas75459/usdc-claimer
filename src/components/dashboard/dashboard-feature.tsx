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
    "FXwHTnogDjvwijij4cbsKbGN3nH9s2FEUUEGyBy3EdhQGePRWM4bn7rzBaXJXdVigJCcFSKywvh28LKYeNmVd1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yTgLS1CNSyz2KXLtZqc3BHtQ5VjYaMv3WfGjLAWPBcLe16Gd4BhqT8SemCUodVnNuUnunkV3xyaVceSMLebPnMN",
  "key1": "3xW9sE9DtJFYUj4bTBoup6PimHgVSqm7yxtnUPHGTxnseCAXPteatk6fiGEGvW7B8EW2kcCfkrEQC3avU9ewvEcz",
  "key2": "2BHpEtJ1DPAxkN7DZhLsGPNVB12yy8BjHofvEVaFMxsDs8m1KKFo626H9ZNLNjcUTVSYp4S5HW7U8wzxER6KUdWm",
  "key3": "2xszpJmGayxfCQBKK2DEvSTDYUbHCzbKzXT9MHFQK6pNhRBLMVvYgEbBFMno9zntzRkmM1k8z9RbiKJCCUoqQKJW",
  "key4": "2h8KCRivgKRSB49aZBLU6vKGZ4qj1gtfM2saYZjVqsEJJ5LXKcs1hzd623r3eTJLQvBTHodDXfB88R3JWq842tKz",
  "key5": "KY6cp8YxXbuiDQLG6eHmnDs1cDmMPLH9B1TzPa49R1mxfb6MLebfapG3kwuZf2SHkjxHSrjRFqvhQFhSLU8skTr",
  "key6": "2azBkfoMh2iPD4Tc1k3jnWzp1XWBeZ3KaVPBxEAtiuiEsQPVbdr7nFbZz4Aahw7jwwLKQDxn8MjfagZRfTdayXAE",
  "key7": "9JZADAUcjnsaHNEsGdrQyrrGmKtttv9C9kf2BLUE5SyCk4DnTyE61XdnWdofUr4eXZnL61zVAbhXa1VNiCQ6Trc",
  "key8": "5aXrsVpahFZMkUVzdW4N2YTUPKT1vE7Biv5SGsPEmvJjfGRTz11RPBtJUo2QWEZyGU3tSFBzKUVW7coe2Ak66xBY",
  "key9": "4AYwPwAw2P8GDnJ3wJoc4xUQYDAmogKULj6JFLTHmt47gDzbRDNcfFRHrB5FZNKSdAJHUgc5FiFUW8URTJStjvcE",
  "key10": "sMbVtXsipk3CJGHXfDSS71EKSaaBpgPsJpDzgHMZKX8G4mQc8pmTY2ctBz4GKmsgwDizszDMb7xsvi3j8zgUs4D",
  "key11": "2VUmGyrB996vpGJkTcpH4Xo76jiABFMC6fnbuTX21ZjeTgMfhBLAMRRz2NNkxT8fGoAFYxvvxqin8qSpXsBq8dG1",
  "key12": "4DM7yp9ATfE1NyXnzBEt5voKeufZtUrkiKgZxvDvCzDYHahJbYq9XMUHDi2qnpgZPCgedckjJ9fWHY5wkyFGWwxW",
  "key13": "3kPzuKaArKNwYbkAGLgoxeKYhMkqEBTReQWmNCqwQLquxBaBJ9U6zcKkky1DeY45zTfF7mKoyD69YQMFzNNiBhcp",
  "key14": "pofH7PVm4Q7JckwavaPhJoviPCeNToYn9JTiycg8AFmrREWLpuGz9vieHpXWdDHzXbyGFLK7w2Jx2ex919WDzT2",
  "key15": "5Py1PmZBEeyR69zAemL3qkmZtkUZFwmXFR9hJHRv7DrPqNr23TS7WoV5FCAbEjs4tF6iNmT4LBFJPDKFsmWM4nFW",
  "key16": "5Q1er2kLt62NfxtwPz5oGz9u74r5YKzESoB7VfnRVzktyKjzBQEbWtemeiHkHqKixQfcGUgaGKEEPUygcjSbWbLk",
  "key17": "5rwVD9i7Nr23dx4BQvY3hCrG3a2eTimRhGp4c96KHzrLdmnupJQ6ateHGqahfWQWJJUHhKcV2T8H4CpWhV6AK8p1",
  "key18": "4XUrcgVpRrS6Gay3qZ6E8wWVq25P4PRiSY64aQL5FDFrgJwbBrS4aiBj2vCLQ3TQdovBsX16CH7V5dwaU9nXrWay",
  "key19": "49SW2vwNfLTVzqSZVXznUYRgZYsYeurh2Pbwj4UfYBRw34841yvxyfaFPNTWryY71eu9e4ALgntJXMLaN6wBxQVu",
  "key20": "4avZiD6RSCmctuxWQ3X5FyeT5AbmTx7BMtACrodUj6hkbeTA5HS9qNTtTxGxcnw1SwYBSD4bivKaZjcdkWWCvLRH",
  "key21": "2JgxaL3fLQRa6W69L85iA6dfJAky4vc6sBw3BRNq3frtpDi3eHJrit7JxKERsKoEcChdT1ta7bCor5SnEfJBb8ir",
  "key22": "4AyDdTns9Kza5HpzpuQc3zibEvYiiZX3z5U5uwsye7Mr1p6CEf563UUCrP92H6zZDWFhnVeCdtB1nWYTbB6CHtKn",
  "key23": "4Mp328upzDhCrkdrL3HjXCJCAJSKFk3GsAywwrah6pv74Um9wx4SSXyG3WiWjmvgTSbJ75QVdjYY1WbWDNC3FwRe",
  "key24": "2QdfV7VvGi6XRC8cJAczWjpnkTMkTZsKKaWa6fh5HquRAHDP6idBt6ibMqEWsfUvwzBfhBQz1ZkV7NHMUYkA7fhG",
  "key25": "2FYCfWXDFjC2yqy3cKEczwHf1WXRPJ5qACgmAJLZF63kg4W1YzwNeLcGtxVk3tk4bG4Cdx7NYDRmczYjyz2jVsfp",
  "key26": "6bJFyAYycuLWwfuubxq6pmv9RtTokmVejFwSbHpbgpWQ5S5hmSnn85HgY7JdiowYACYeyEw1Z8J5DMyaWgWSYyd",
  "key27": "5EuxUWhjbQwMrihopf25yJddWbVwPkfF97aT5fekuTiwhA1MW1ywG1XGfjPnADfJ6x4eHJnwyezMPLfWXP5iJS4U",
  "key28": "4WjsxLE3uK6udUygSFbZgynJfxqs2f7Wmz4Afb6kQfN4krTqrdFYKh6dUS2mjUdPEY9YWUmaNYxuNCuQHEicuoYi",
  "key29": "2fbTeKMepnhem8s4KRoGR7J1Lsxja9NNBsxxXsWaFRbC7Y9DwLnMhVgFMTdsVWw7kLh9XbNHRjN9SsCA8CbKLvVr",
  "key30": "4WNeq56EzooV6xkkKDEJgvrEDe3Sa1Qzuc9SzxYKsBQEHtW89FZbkRJhapHT2SuQNU63YJue4XqajtkgY2MMWH8Z",
  "key31": "32ahh5tHaKR6NbQq9gbMqQDobVgdBSyBXx73hjuBw1c15i1nCE6A5N7iiksEd2kZ5WRzRZZ8utz612pbB5CUXwGQ"
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
