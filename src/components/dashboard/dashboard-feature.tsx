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
    "5S3RxMZWdRLVbYuPNzyrbdmw2Up6fYJ9r9xpgwMPqa29tiKDL8t22pt6Q4QpU7X8yPSTWHvZT2Wv4gCjtQ6AUQCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5frpGLxrR7jz3xCcdAKpAzfG3K3nbXhc2D81QhVHV9RPszfPNf5qe2oXGaSFwJibCgU2WKYmbGiBY84AGhVq42BB",
  "key1": "eyuPR81QJMEK3iWgMbZj1XdTj62E2Ti3gUcJznt8siJxXW4PXQbbigC6a2ZvvR3sv8uX9jEdgkeoibT1euj99tr",
  "key2": "5Jv9LF3p5E5cwzqHbRbeuFJpT1jqy7awJqAycsrC5zumDnk1Rxr7j8pFtVWptYyqPCshn6J8N73Ut3eBFEAvZBaS",
  "key3": "412tN6Tbfk6wYAak7uV5gUeMZycCcsbZC5K783UnUzi8bZW2rg2a332JqiMfHFaVqqPvUUAAK5dG8f1rKZhaSVcq",
  "key4": "5N7wkdnPKJnuU6HkSYZDyYWFai4mQqRFhnDXKsom7VUhZRA9EhwfLcqzUYNEfUKQyfstosaXQahjPi4wQHa9ytu9",
  "key5": "3ThNHAbYWRGdW5UUtyU2cuqRkHXrmLoEVnyhi1y2d6jvrD4oEp6sXcMerh5Wx5RfUSjy8gPAUZcazrEYwDosHz9U",
  "key6": "3uJi1iE9D4d8BjDvhJ1Jy3neqmBuAsq14zTU25p8TXZVeDsiL6HcvrWrQjC6sHjhFcn4zR5G9azLEgAcYXTWcpem",
  "key7": "5LRrdqDQ5fNokCF3nXva2yDhPi3UjJkxdNJNSg9WFp2D4JPiWJ8icyru6tSL1bwsMkb8WWvqEVsghZ5NUtjATurr",
  "key8": "5vxdDGv6NrzECTswKKTNJXDhYAUBsigQqXRHjD1z7NniHawbE552MuHQNq4kvUrNzPTMo5Apyear2ykZmiWu3uAZ",
  "key9": "2Q9M8d12fYaLJivMfWuasLTKMKknCCodQ5xsuF4y2trtGycB2dQtxKeXjcY3CGNkLxNqSPYfd7bxCro9CWKTBrEG",
  "key10": "rsco6zuASSbCwDMssXbiSTFGCF4bJcJKiAvRqyxLMLtdG7xXSqECJ6EPjCkuurjhHaUwQGKwC3Mg6EZPYoRza5Y",
  "key11": "4fZDj1Tbgof53nHa1KjeQPz2NDMHz2eMkXXHEwdopJ9K5R78S1VjsuskqrKhgiohKfvdQUM4YoLB4vL5snHzHvWY",
  "key12": "45shcivg2uXMBX5m8wJCwLGLooYDFibTbWtmGokc3adVgRyN79dCdiS7fV8tfsZtMEQJuJFBSRGLfxXLkorjZdXP",
  "key13": "9D391g8b2EuRf17adg51M4NiBnTbi3FecqB4NfJVhajvQD5vCExAUu9oxY4vRcr9Gxrn5un5pMvEr2tewpsZUPo",
  "key14": "UZcaiKMPUWEo44CTzeeE2U2jNqjXEeeQsyxLD4Ud4n7PJKNDaaUuBZo6qcd5ekkd91YD9cboaoeCp9xu45AKT7B",
  "key15": "4iRYpimdy6TCofyMddetg9RLAi6DfsM9zibxoodEXa3yoztPBQ7hyMm5aquCgfenXbmoS1gbwPogdTpbJti9zzUd",
  "key16": "2C9xRbWMFtSXts3s7HvQS8PPRWw65km9SqZgNvmSh6a7Y7U9b36ywhLE7oD5gJbCxN8E3fDJ896JUvYADKvcjRUM",
  "key17": "313ZSgkEQKgNx74pCfSYTrmhRKcYkrdjtYyuGcpCCPJVQNLZD7ZaaorRiXQwYoXFHS2JwefWdhbffUMZKyQgHr3J",
  "key18": "3RP8EDL4vvF1tS7PQq6UuQqUQ8k53ygHezJQgCUnuY7w2C3Nj3eovdn2nv6zsBpRmNZfoSqUY1smuTrbKvdpLiqT",
  "key19": "3vWqPo7jZ6934CM4tvnjqihSA6cPiMQrDWMpsmNEpXDpHxbjw836wdrRzTYqAUXs24xumSX6Q5gmZVKEM8948HNx",
  "key20": "3G9BTtdkqGpkH5bQTYokDfLmYPChBvMjRGCXc7QBMZjHqsk6A94uESBCwZnrU62P5Q3YJHJgZBXquVuaVMYbqt4q",
  "key21": "4TmBn67gKzTzgG46E3uJjyrVN7ChNYuHbCGrPaXtMKL5WzPn15zbqcaZWyvXmChwkCauc2i2FG83XayLsiMNwyz1",
  "key22": "2dT1zHsYx6R3Z76Lgz7Fs7DZBWpjZeBLnefz9ig81MrrSKqpHGgqEb1AYDt5ECjjJy3ZBoudyJ6J5F5akwXgBjwp",
  "key23": "44iiRjoonkjoNuuGf8xsg7d91tGvXmqiB4SLLY3t5DVpae7fo4VDvugfZXbAL423RYu4AFdtUjbdFh3MFjWZYC7c",
  "key24": "2ghUesnRFnW2R6SjbxkBYFuHMK6D6pB91PXhTjFw4HQpmcpGptdfqzhvdZ4h7X4ra5LF5iB3F6KDxviCgUses8HE",
  "key25": "5rbiyDkZmZiyrERiNfVTsztjM4b8q4uKDWV87TgAqsocTrR6DCHuddJBAb61qCp8xXvXkpQpfhu3Z3txS4vMb7zm",
  "key26": "2JhuoLd19mCEYCVMr1FC4VKre75Z23CiqgMRi83eWN3XHx6mTpB1XuPZ9tPUiM9QKfMUU8BMckkCmPLPK9RgTy51",
  "key27": "66NT2Mt3WF2PsdHZrndbG9qJtsU8KJSc6EWr56fkyRvWbNUkY7EfKi7dEywz5oxQvZqWiVgTN3bfaW9xJ7znGRKp",
  "key28": "62v368Argv8frxE8MmjgwJ9Rem6rtuZMU9bPr4eUnKJwpWayRJ7Vcv6xXCv8i2turApgbrVYEeo1eV151Ta8wmX1",
  "key29": "4KPwGxmwBgiHut1ssXN7MQa1dyrFTEojdEhEK8vFspMcbyEnL86TPJxeYMq2DppgsS1FoDcme5S6ZwifiLeLcDeo",
  "key30": "VnWyaEc5SWBkDMryk3VPkE5dGPsMnbwBDZ6Speh6FvBF737RWBbbtKPhqWUNhUUpyS1hd13VaCehzFHE8FsBbQ6",
  "key31": "43ytpzG53iY4wvkgnKHozix2swKWzskRA8yLM7s2tEiMYVwDXHjz8dGFCxMfABXvtTPhcp2i2heB5uGVYv64AtdT"
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
