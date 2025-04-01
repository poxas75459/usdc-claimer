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
    "52StApAYoT1aUJ9qPDptxr8UfodvxfbJE3axS6V4AhPubVZcgc5jfQzooNognR6jfQqSrGwjibzguHxQXmqxKRqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ah5Z3Y5W9ALjKLcz6wbwtDkfv826zudpKq8Y1MR71w9oi5dzdJTEDLsLXDdPxBSbGBNoWoT9Lf9C9rGjhw3XfWz",
  "key1": "6M83ScJLETLyuGpnQJMGzUPih9v5WeshseiJkH6XyLG14WbtUJGArfBUfsWBugCbSJXdgp5rmMJFbzuxvFMyjik",
  "key2": "4dRMD5Vyvdigbh7M5GuT8ZA8oit8yZ7S7zm1q6MVuutkjFeqbKpsSKGpuVFnSr9SDkbgjeRp5PRc6kreqPvrvznt",
  "key3": "cGh1zD4RHH9rvj5QoqvdMRLzyomz5suSF5MyV39Apk9rrrXFi86apHptwXbDkizFJQM4m4oNB8QRXkS6fr4ktwL",
  "key4": "4P8BesmcywKntEYYvomQrL9WigU3xkP6w6HyGrQw93ptmkVrcqTaLhiBRMA7GwZBvbbQLkCtTwGDoGfAbwBvJSYj",
  "key5": "5UmfKKDqGwwvkPjXtCoqg5nVL5T1qiQmUsb4enEEgBHPJj83yckqzoaxhHWHSpiQVtNQtGpgtGWxjV28UArHTczF",
  "key6": "4xR61gBv2yNxQKdQak2dtuv1J6vCGHFqUdrinU5Xng2U78eroan6ReKp1U3bNxhvocv2AsuWUjC6tvMNqEaPLv1F",
  "key7": "2QzRep9ZnTDQXdRfB5cLcs5cV6qv2J3L2mfE7YmwyEq1bfCWunYyXqERX9e7dW8tMN9zVtnvjgznyc4VLct6c3VL",
  "key8": "2boJhhuGHQLLY9Ei4aHYL1eCsejLsZ4TsH5Legp9pQiakVZyDuhtooDivuxu9HP1xBpAPhAcdtGXZW18suQRbSyj",
  "key9": "2ztguDnp1CN5uih2GeqEafw7jxgjUNSce6wFtXwXgTfirjx2DeSmR5KsE2eYdqA7ubi2WQkyTHam7eNZ6M9ZRcH2",
  "key10": "3g2iNh6YPxCZLPUmAq5vmU94f2k9W2jvix5TVMcyZjk3rfuAWcLq4KyNj9V15F5rqbhFGQw7Ctzp3ruwNujMkjSZ",
  "key11": "SZTrXMcEchntnQdcEb9ZJHvhDeekVxupsbxQyArE7Sm5Jbdy5KE4yuAQwvxhinW8nsfxjnxP6odoFcGgg7uM4gm",
  "key12": "4vnuMnQYFYCgznZjZU4kiwkhiPWMJkLh7CrotDEy9W7jjK5Yd1ojibAWsboF1VSUgG1UtrozTASbDio5pbjCC59W",
  "key13": "5X1Briuj3pf6TKTLYmWpaMQcgH7fZMiuvDWVLVYcAE5bPjUXJq9nDcjKvUkmL89ajtvQdU1Uibhg3As2ar4tsmqh",
  "key14": "vMEPD4SBag4DUczs9i87U18yVV2Fbb4nrTxTZ97UX9j6D8CdkpKESvy6mrZco1NwSSimSZ1F5X1YpKTgyLhdCx3",
  "key15": "4xtk4vRtK4LR1sxTb2msAWV8KYmEuitZWe8BbZMQPgpQaZLNk7rUaeRfmNEbeBcqfagmdz7jxrR8bry5EKWBUHE5",
  "key16": "3BDAnA7AEAC22o1BCrLyD43DVDZv1BE8Yy7ytDAVGzgAHef4iX3fDV8pEdrjwdevci9jcFRhApDoeYYQ7RiDUhku",
  "key17": "53kKjFn5TWbJrv7ijmaXqVbSs1cd6i1rriVY3GhRvDXcrE6GViyh13G5S9AqWqRrzWt5xf6ghneLuJ43XtNaJcRb",
  "key18": "54bbjZMyQnNuSvahriYtCXdqqh4FskYq3AYXHL7EsxK5YbXJ5Q7XRR3Dp9mLhwjBANiNPwkhk4isL55iMUBDovS6",
  "key19": "5cCsVgMx7gk3bHUfCSiK9PwnxiUSyQdrKwGSaJuUXEhTEBkep62mDDWV7oTRreVNyig6g8F4rBYW8tHdPoV9Lkmv",
  "key20": "6gYcai1GY9eepq9pwtju6utg7H19fdc3cGU6jTQokffWVtGZPs3vTgAFAt7gqtrpQWz6PRtNC8LGB7zPJUN3Yyd",
  "key21": "5mGArQ43ix5KhxvJYRfhCSnD1ZDwrmWmcdLTkQ8cQZZveeK1gibzSgrZSJ5UfkDK7AQftL7rwRY9PBmHfwGWFj21",
  "key22": "65WwLHPfRqhsxp2NebCXH4EyqKHqjifV2RW41YQBbXJsNTEyxJoaYMzXj9u9eURvuPJCgqFdXuczGXm9geQnRLeu",
  "key23": "4rhr1L5fq8qmVD1fygSMFfNPWb78YJc9mCXukvpnBeT2yqbD2CXTm6Mk4tZA3MTYssYFfbi6JoCq9Lw2bA1kFgQB",
  "key24": "5nkv77Nrfa3q7y2eALKkt3KSYVUzRqQwfW6jhw9oBXd8Y1TDCnzWwQBt8jfw6BAwKrWSiF6mXNPW3dvQmbnZTema",
  "key25": "2z4mec8zm4pMrnJwSZDb8tLUQKkPkabLhhisYrxGKbEWY4K4CqYNmUV5wpSEzkPe5EBmQKDecFMrJn2GSzUCCvcM",
  "key26": "3sGKi1yzn4rT2HWbmZSm3UUdWMSM3vBjYNBydbXiSxfrxKLMxqKBhCT7chWWN2G9iWhbgGshSud7cYS1QFAbBzqn",
  "key27": "2fUXvZxgT3MtYZfNSKN1ijB9jbk6KZYkpHzags1h96hhvgfg2eLBBiauWW2yYNQ5u2WYphNuaSCPMoCTGsjFT3n8",
  "key28": "mz8EceL47pXGaQeMcHv4EvCr48znBLcYxmVS4wSx5kcGcVbdUavYetQv3Wbnw9sZZWiHeEFUQvCEbz8cDaqN5s4",
  "key29": "5jurJvjRDXvCncgk68CviU8jgD3raCiTiYm6sG3Qt4Gfgjty8zAix6qpHgox2B88Y5tz1sCSbv41c5ZDbtNPGsBv",
  "key30": "41VZroJ69AXTZrqyck9gSnbPRUoA4SZ9SLkKNu7Q6i5aYwBxN8V7FCm5Sd8RzPW7nruRXfkZnW4Hu7DL8VV6b4UV"
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
