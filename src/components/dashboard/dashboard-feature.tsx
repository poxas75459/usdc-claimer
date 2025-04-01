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
    "23LbD8eFhVGmMLuCFxFMRTFadzxr872QzabijoJYngi1D4FDRQpJf7jSQo6dBPyMffhJpseCRxbDCkaU395Q6LPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mmbZ4xDk7Vvi2EcU5gxV2TWXNiyE6uXD7mq4noBTDEY5D5BVjV6otwDybjtCD2rahp7MYEnQ6GyujT8dgiTbiha",
  "key1": "3nbFjzyuMDeCZ2P3RsSMpbxxCm6VKqgdXUpqLihdFjp52qYuhj5FvUE5MbYcSLiPrNS1JgbYLjogmbAaaqyF8iX",
  "key2": "2G6gR9H5M5KKrRijYHiRDEoMgvYtk1vB4wzdoPjcrnFTnGyPCGuFx836MmzuxobUh2xqqcXeb6jmv8f8fRCyDt78",
  "key3": "n12nH21anSJ28TnB5cGfNgtk6hHD3PxDjQx8LkXq59yzcTRr59M8PXq7EmbX361m3wu4xmSssyYXiN62fDzBAdF",
  "key4": "5zGTJ52jiESosL85VYgkMFf5fJgdZ3e5HWTE2qy4BpGriLp5TrNjcBi9iXXmAan9NYg8cpBsHhXsMFJsUPZVhdDt",
  "key5": "2dR1rCG7Wc5AKy5FG35ZMWPj1Bu7nvenrqDq6rFrnzGeixnYb1MA3KWbcyhmwm8PJnbcMVHtjvCyU52y6w8ydvuQ",
  "key6": "3gfv3SSQ3XMRH5czNaNG5hURyKQY4WK6wP8CutUWeAHS7qj4xiSaWRpF18GgfGoBrvUxGHVXrkFftrY3mia3td1P",
  "key7": "4mo1pFiQAujT4AJRLpyZBuvPJvqSwuDazMmo732HF4nzgq9KkDguNLqcBrd25YpMq2Xa1vWg71WYHntcEta6efPA",
  "key8": "4jDiZ3KGkeN2pN5Bk1EuVoEcbnBgMo35mKHq3832zxJRw1wofpFcREwtahCUmn9STTqjBmCLbpV1JDFL7eqqa2re",
  "key9": "5uUEJrgkRckK9oQ89qbk8ybjPUXS4ouZykX8nVTEXujXaMFQX6v5woQfX5rgdW5Wk1psHZ74yAuKCqs7s2wrJ5bm",
  "key10": "494WvfShyhKNhvJAf6M9UEUhkmcBu8BkYsThcjMvtm6XNfoaGBS1qiPQumXZmvdGw8LkMS6hv14r4CfHdaDjcubm",
  "key11": "4c66vXk9F1vjFFAdq4gwqcayH86ZGWBMFqp2VMKWWLs4VmPMt7W7vzTjLtmi2dPojhPgJ576AtkeCQf8a6WMcHiA",
  "key12": "2B1xZbsMeMFPrgG8tss2Dbyho7qzHNpLCqfb1ZfutfJUcA9nUfJkP4GDi5eoEiFb3Fm94UjFo7m2KSKmotbUZoFW",
  "key13": "5gLBdM8GdL7cuc4Z1HUxvmDm14WSFa7De8Q2XNTFnMNSRL4ASLkmSL7JXcvFmV5zrgKhmmk3mZfRKF1PKQjhqCA5",
  "key14": "3WmF17Mf6ceSPiMZj3wyNyoGWqfCViHRUF3GempR1bbGF1VvQVFqtBNKzrNqDjYpdEeQw6QBWfryLDXdL9u5VHhz",
  "key15": "38T9LoNvgxedfU7db6PAdtndAYRi2Hkagev7jSHe7HbJbtyWg9RPn5yD4ChUfH9ikN2W8RFu9EusWjHyvzAG6zDZ",
  "key16": "4uYGj2JMx55KnEJoHabWrnu36wh2nYgkRw8etTdpJsrtpYKbyc6kWRhpxMUfrdtpZEVMxWHhjoJ5ZKt5gn9WhzuB",
  "key17": "5Mzr9x4z3tRAnRxfvwDja7M3g8EKuJid6xwyak7FvbTGNPtKDcXPEgygETFnHxZjnNUh65rHbu2MWPmEXXJj1WRV",
  "key18": "4vYeP8EMzEgDSLK3DgKRTsWY6zSiaQdHYz4g4kEEWSnPbWmig1qas1oxdr4fqeCuVrCJ5LWCJRTAh6KYDsAVEACy",
  "key19": "41wRj4KkCuWUz1xDrLangmQP22HJBVSfw6SV5kseiXxPYuYWdJFP9zHvaW2SGGmLki7Mb6aKWSL6NmNCk4E77Ri9",
  "key20": "3srPjvVF4jWtLKV7gnR3YcTNbC4myQ4mikimjPzZNYcUJnxSYRqcE2ZmfLzjaBF8quBkWD6PUQy8aXPivPY7SQFo",
  "key21": "36WeQiPLUrD9orhJidni22NMqEUixFQnhLgMoG1qi3WDY5oQMzdHG8EaqkxuVGXHdcnsVSSz98PV8ruaG35vf9BA",
  "key22": "3NvaEtr4B7xAHpKatitinDp7TmtZqm3haoj7Q4tDaFedaFccMe4KV7Wb2TVebrseX91P2AeeqQH3Doc3n2z6dTkp",
  "key23": "5SUHg4dXdo9mXKfEc36KtRDhpBRZWboXhf8QJzWdioZPNuLRu8QYst53VyXFJcRi2esiYUFJbwWPCDg9463nRMk8",
  "key24": "3Dr23Vjxo8pjNyRc6XoXUQd6Y5fY7a1oET6K1AwGnjhKQcNJybfddGtQxAU6dtjrnYVdcDYfy9Hwn8uvGYUbFAFf",
  "key25": "33gMLW26KFHS1hyGGKJbmozGg4oMxnVb7YWaJW6javs9wJoqKn5nWuugcmwDssnDxNN385yyaDSi2A7czp5UeB5o",
  "key26": "4V9a9do3h44XHraZKk9Zp7trUqTvuW6jr7Nxzfdwpw1WDpRZuAwGEmkorquHTgyfia5RCdht5hiWDf13MLo3aYt2",
  "key27": "3pjiELSsTQxD2z5hRA75FMt8DXTJTp12CKtB2oUeikhJ6JBZUHoL2EC8kywzN2hrm2i2YyT4byMcAG8aHVhTF8Dd",
  "key28": "3dcVSZ2T26jVCLwUnBiY1b4wUBoYT2WnuWQEfjfuLsu2crj8bqa9Rpm11mKbnkfLfj9qKgFyzouv9DsEq2wVR5Ne",
  "key29": "wDTzjtgGyC4QnDfHqsTFbvoeYeRf2f8kyujXhZAjoTEfQtRukxTmbzswA7Tj2FtCKBuHfgyejA2faxVCLepvCWd",
  "key30": "2Q7rzDJFeLQAYjZ7h7Gk9HNuJPwq52z3fsVReKoTmhMHrDLdVXwAbeN3dP44KmyYFEEeTuDunDQJXkNxSxJuzAgG",
  "key31": "PChap8Qn7fbrXiMihrEimqqx8pVxKeRo3GAuYXGiCRfhsjWaJhEseNcoYTd7J4WKCkqNNs2dSbPb5ss1zxV1PrP"
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
