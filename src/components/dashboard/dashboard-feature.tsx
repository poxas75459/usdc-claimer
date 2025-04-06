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
    "5hpi7DhBtHbjnR3zHREyUPPq87MvwpVdeQUd2e5ycEXXqyRspvENgyRymtFgu6EQKUZXeokZR1kLExN1JTpWpwSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eHZS6oEeNdwvyRvJKVGP84kEshosToDYVnb2JSspjUNWx6aungdYt9X2dYMvfJZtn5LA6e9TBGxcUbhPTP9VS7k",
  "key1": "25FoEyok63LsCAuDWewUSzJBkM5pweDyKTa5K8ZJBX58uTUercNYEbVm7ae7KGNuVSxQNZ4rt36bMC3J4UFYfc3M",
  "key2": "3czwJsBWsSvYyVY9WNkAB7jGBejk2HFo39hAat9gF1dd3TosqUv6VFktN6tfdYNdQjhGaKNiabYCz6vLaxS3t23L",
  "key3": "59y3coPXw719Qd2bkTzhT3WjDz32TtKBPSYFvhjVffSuFK3xMSExpUAHSxcS2ktbVKWrsMMFbzUPsHZmFQs3BKGU",
  "key4": "31JWX3a8Z1CmDteLu8UeQeUCcKK6b8YrXhK7AfA4K3FN8Yx7Q1yHa32pXrVjhV375M6Ajq2FwMmWYAhTM1wfkZaa",
  "key5": "xa7PF1hMocbbqAQjwiMv9GTKt1sQaLksbmvuca4yxFcm5YCw9HxALhfMrKP6DtCL7m6X1PYiA5Pa2mXamcyyGSH",
  "key6": "5NBHFewRfzkVCi8v5oyRoM86mtwQfpDx12QKUyJaWRtuQnFGiyVbydGzvPW3dMYtAj36kBWgvu8DVz7ArbADyjM9",
  "key7": "TcJ9QpWozzSQMfXjbeRBs9DGGGXn12MXM8ouZ1PbnTc8zNaoXYLbLaYu8N9VYx9tsxQtMy5PmJDDEvhkYYMPEY3",
  "key8": "5aqEeUTTM2YV33tnzjahirMnzrJVnbvmcoLhPTXfezmQ5J5qcTxRQbdMYq22v8YZcusT7ZtuCjfL3GGLju2i3Wkr",
  "key9": "267Pm16PhFM9ceGhH4D9waezpnYp1FemxGSSSgQnexBveeP9i8BXRokXhmafnz7EpdamGwZSQ8H71V9FBB4NNgSX",
  "key10": "2foCv1C3iBHmDqLAEnzG8BAJaBsqyD9MEW3e1hvmqEVQHxPcVL2fWfGyyRoTghFTwQAT5sR7JBjtGzfu35mwiT9",
  "key11": "eeRp7bPkWkJqWeSP6m3fWhCdAyeSBEj4cbKLe9crVTmjMvFJ3zu8rBwpd1XAC3f78dWdMaCCojtHCNzcxYzwBnB",
  "key12": "4DdvAmnB1qjxBS6ND9mdE8ApGtsvfsGZoyvLsuuR9NErXHJ422ZQRERfc1m9K72raBnGa2dTYVYdKBhwkFNb7Ahw",
  "key13": "5Do5g6yNvXTy2uMjCP8WGpL8MviZEU7KgKozgin8xsBEmxduyhSWTtcyVeLLPQLdkfZXRYLW3gaW5RQYJGsH2VgX",
  "key14": "2fJrBgCxwz6mv5gnpDZvgV7RKQ5LC8ThmRGi8mgxqSDjRwizDZ1gxNYhxBBGudovccRm16yYA1mQ5CZ66XgZQy6Q",
  "key15": "5Qf5TCt8phKYdZ3zf7oArMrDK9FYMw7fq4Y2fo7WPKwmiBxpEjgea24WPfqSxTsAu9ytabs9Q264GxmBk2BpmPec",
  "key16": "nUSa1dmdeQsvdPjSsRyiq7qjBYp8VyTjbiYy4Ewzccwb1q25tFQ8MaJXcDwA4ck9nzcqzgqUpqcUNoZ8TsboPuK",
  "key17": "pAXwZ1ceaqAFKT54h3W4qWH2xgqCfQSbkDFgVwDvH39qCCeTkHvBNGmK8iPort1fofWwK65cntr5koRgEwPzvWj",
  "key18": "5EBWPubTsLZXLXU5PCwwGDg5Ln8Mo5ByXLEiE7N5fAEKydhuUZqU5MgtvC2AziteNC1BCfk8hCd61ZVMKpy44cqR",
  "key19": "5AcRRQYK43R15AeuYnLYiNArU1BYxTMQYhkyqGrSZZn7KV7jPLqNM51nEtfsBjkJJEuhW9k6iSMmcGcNqS4dtFU9",
  "key20": "iBUDwnJSyxyUzvQ6ELMMZqnf5mbFh3f8dADC2aC8kLB21HzCinJg1H879oSjMdDEBEeE89ESXvxPuKE8zBnx2UB",
  "key21": "38MnbLM1czz9rUZxQxb23JWb6oc95JrewMqWsUuSU2hs89SHzNTJsEkK7tRWxhnqoBwwkPVUVCU3UkjCHFdgBAnZ",
  "key22": "3G8erCzoGtZPGSpZ9rzQtSpKHKWi59F1J1diVo9QyC5sjPEZaTqSdLyvqkAjAmJt2ZT4HAJgheDuAxLcc12bHgPz",
  "key23": "2aoG1vzochWM9TY6W99HEnLUc5kxzYiAjMvhfVXbuRfiknuFumBvwcKsp9qpvwVjdCfkTF74ewCWunut49hVXRMc",
  "key24": "5dh1EZ4GeV3H1J9jqA8sFGvfEzG1UPZdFmKigR89Z4A1Vi5FQjN5SFBqu1GGxc7BT3W79C3GnVACUm55H69kGUcn"
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
