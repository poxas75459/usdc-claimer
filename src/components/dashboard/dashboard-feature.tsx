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
    "27aUP68cVuSMzuz1YJDQmddLMLUHxzqaVgdvcUWmYd4adSEC9uHzEkwVFeffH8BntMY2DTBcviiYD36FKepR9x9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zFZa9McAp2j5TW827sHCij7HWjphaBDeZ1SyfKj8QogMo89bjh92d6CSDT4EEZ8xVyNntRmE1h4e88C8rNzF8vh",
  "key1": "2HLJTxfYMNjseJYuMatf3KmMg2pUnRsUAPZV94kT9HHbkGsRY9VsLdcWtM7B4QbKDQ8qPQWcfVaKDYYBJ5ozY39r",
  "key2": "2KUuVrTbuMJ1uYRJNVohu5oQg9YZ9t1vDbbK13Ue7UjzoGwhwx8sPukCy2wT4WJfg53auwVdJjLce5dJ3dQHLaqo",
  "key3": "4XfVfjRpNH8NGTzQH4Qyfm2bXwz5TUXe8iLeD5Z6Sfkkz8XDLxT7rS7AdbP3YzAP754EPx51fzzyQdtxNiFi2GWn",
  "key4": "4s7VWU5JbzM3sBPNPeTp61QPE83Md4fQ4p3Uq8pjxYYKupm7bL5vtU3BbJ7Dg3N767xcnJBLXzhQX3KXHFvPzRMb",
  "key5": "YZiMTiexZRt427k8z3MrAy9WHNiweVSydTVSKNeXJQNUvFY1h7NkkEsbQs7UYavsRWbVriDzompMV9Ao5akVBJe",
  "key6": "5o8L69AngSHrbYDXSFyVQEH6C9gjBcKkQo9v52woFE9YzHY7kvSXiqVZSPcByJo557jz28LTEfhTBsm78piFdX17",
  "key7": "4zeMJYox8m3URDzwMYDnTEcx6x7LqyG9jFR8vwnwLU2RkFuXMCgd4HRcpBdEDDt5RTKZnvRye7wU2sSaiWPZ6MaK",
  "key8": "3LccWzc3qJtKbKYWJCQknV5m8eygf2ATB8FBSft37MWn45PJP3japnfxAcXcBR646w7dQBAqvdt5ZhQfqyCPpVhS",
  "key9": "5SSHZEfQMHtnLPHz99TV8NAwP6ncJKGvrB83yW6esg6FPwCvb9qFf8GUM3TnBQFcNnGVzR9TdTjMRNJpmBgCXSkB",
  "key10": "3YDB89EgYudxLmX8mR2Sn1keEoxUgr5BNVNqevRVpKvdWBKw97cWYoAPQD3kYH72kFHf38PTc32f6obhcBWrLjX5",
  "key11": "2D9f8EKHK2aSySRfbHt3gLyNGAX7GJyZD4KSS6LS2netxBzFUzeCAKDxnr4nz3HfB25ntrjYyKiku9P894ykwQ2x",
  "key12": "3Gxot6uGwofxzgPQrcfA9pwbNeivWUmiuXqxRq5PnwbKgJD2XCKe7mU26MqKsWRwgH52uiJUxWEVh2D8GDu3XnLr",
  "key13": "3JzPJza8QbZjfXwFjcPam7BbEwJqGufZb3zNr55A5rX7ujxVQkW49kUhuLZfY1xsVKeMZQoSYEHsYnk6qM5bjGLU",
  "key14": "pKh3j8L6qMeviefvq73DZBJKGTZ1cnEc9gMEoE5FC2g9rQ2ZBdWWxxRPBeCpTKPpji5R9iuMwGtZtNZRyHH2Pjd",
  "key15": "fyPSUv1DF1cKZuxYrcoqGSKCbP5t8TjDn6m7gZEpKBNHRmjpiXWg9Kpqxm7QVTjVVa2vnAPrxknPRj7jTwzLfkJ",
  "key16": "46g6GYZEs8PeqLiohmVFLHnPXZTqfqmCSh1QEGcQL69YRahRW1NePbozbrJzuGUS59J19Xfquk7tTVuhdnubKLUp",
  "key17": "4NS7zEpsVWsRx94QtAbaBV4HLkjRgh4K5hTF8sn4BtA73mHbHBjJBwmAkjoQ4vcREyTiai4oir7G6Gm2rJ5DX9bd",
  "key18": "2Y6HuAg9HLcHkKGYFjCegqbKCs3tkA6Zd72wKvRxAezNRwvfFKx7y1Uu8H3UHaabgTJRaiBhBuHiRUvgqqZ8i7L3",
  "key19": "5Qya535xVXaB43LMS3xwxwTACBYSLu7gZQXt4fekskWoKG5haunsxwSsgh5xcax5KbvaJjBNjWYP3F81o3n89ycA",
  "key20": "5pyfTackd6hsfSzjTK3moptBMU6bNWu5fsR5zfNiRKTdJD8tmLXanf8yKnthvrAG7Sj2RJcHbjMA3B2NvihADos3",
  "key21": "3wfmo7QRT4Pj8R81VFoXpgFTxcyhH3vjt8YPNmp2nW8PRfspJpEVxFwAKkY2wKrHMtHShnymAhmjSPt7cDWAh6Vm",
  "key22": "3eVNEMUy6k63zF5gKhveS38ASuZtshsMEAV66K6y2TQp6BkZiELivcefYh13LKe7LX95LY9YDcvyueAUJEDu6vkS",
  "key23": "2fLNBJeCBUavk8zPZjRyFLfa1NqXc9BQgAXNw2rwFogq4KDxC2sZibP8j9xUU3QLRE9CiaRZxNb6iCGoRtPPUMRd",
  "key24": "4JQTUz8poi29fchet69ZHuY8uQJ6snLVx6RhJU1E1aeq6xTd2aef9byXok7za3EKcmNMfbAXXQv2AWs23GHkHp9y"
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
