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
    "2ZwvJLinwqaaJ1Pwty4XwappYX7bWDoErpBT6iFNBF8UfuyZeFs1hYWJd42EP3DUBZ4NYDMxV1rkzfgiKbgXig3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "561z4DmtJgbMYVUbAG7sNcUwF1oG8H6z1yby64pJVc46Lsf1zjPmssF8xX88ZPmK5JeeuG9q3imxkqVbQAUSm5WY",
  "key1": "2TuyfcnQTSem3r9ukamao6k6iLNSP8u9SiWfBYLxD5FD8YySu3WZsNnkmdMR4EXfSTHZCWxMhy1Vt2GZ49evAEkz",
  "key2": "mNXkaEs2ZvHHymAfzpA9DfTmdfSdMjZsHpHbkpRnP1NxojjBdcp9CGxs32eouRfjx8rHYmRbD4qWT9zvA53kAQN",
  "key3": "3MxFUNACFsPrZvdbn2y79ohWKgjSvuZ4F1Wp8kPxZxiePst3NDKLbw3bBCpjXvkggDwmJqwo2oZZ8Z1wbTLtVAeB",
  "key4": "QevR9UmhaWWrV1DKfnLfhejfMEFZjWCHgBEKhoW9a2apSuAbj17y13LEtyA3uHbkjRMLSkAMPPd7YVSP6oxf3AA",
  "key5": "3mvWjRW7oogj5msJ4tPWJTKN9MhPQWYjCqKcPwDmmBtXrLcwfVas8ipeGQoirVmwzvBwDTTpdFHz1dy5b8Fyhd5x",
  "key6": "2pvTBavtyvc419e1LKCRXGh2wqe23Mu67cKRTfPKw7BR6JyQQ8HtSDkfZ9uidkT18Ev77Q5rGZzpa4ox4R98zF9s",
  "key7": "54o9LhMCQHTDH1SECJYpvRXCY8swutCavZ4YyRHSos6SE9D5VvKXk7x5kT58UXBoTdTGwd1Z6JzjHGp4vrsEVRPq",
  "key8": "3RxA7fNfoBQc3dJka5r6BDw71v79BYU8J5b72CYLwDzP6pMEnAaJy5kEwNTbx5cVzwytxbxkGRmevLUon12w9n6y",
  "key9": "57gCDGC76AzpyCP1W1h3bUZo2QKs2N2kLLQLWNn8S2MPQoyYQQETVyBe2FGqMweYYbBUpbhgLRkyTswTKpnhetbb",
  "key10": "5sbrwWsjkANt3JegzoWrZJ2JviwenajXPVHghydnMysPhAFh8q3qPdjxRxYhWTHTnM5Cykpqv1rwyyyTvwiaAJyL",
  "key11": "5nz3mHanWNDtKRaeCGSE6gm8QJSNxErqoveuLHHgUYzeRNaGcaVhJeNL3bXd6wcEKPjmrhfsBkm2F1ps64oFVCd9",
  "key12": "M3boovt8r7kfaRKWSj1eBziom6KqortS5jpSPwoBjYXmGPKW4BUq8zbLC1yA6hnpJCMbFC3WqMdMWsAKrdvwpbk",
  "key13": "5qvLNFSNzc8ytpioZuA193dPWvkBPzUwVo7W6hgL69rtGoXvJpaMJX3Qjk7L7dkBYMVL8duwo9mp7ECiAFBkv8Re",
  "key14": "4EvYpgb2DnBimm65Nut7fUjn57F5DNjdz1mZGcV48NdcfP4XzNq8sGpoiGg6NbTHWrWGfCFiYMDX8Zq35hTP36wX",
  "key15": "2NxQjYKzJDVsGykLmzobz5qumMNoCEAzGkSENyDc2WziGNenWcNgSe8RHgyQgSm88F7PpzxR8VjRZSg3Rhwv8fhR",
  "key16": "4Y9cabSGpLWQEtECrkFPAo3YxQTmSPTiVAmLQHp1VFdP4GtHWJxD6FFx4qL8Cejqk9qZdUkJUyX3vmPubMmjZyco",
  "key17": "5vf23CYgPaepKK4knwZMUZ1hA6LZDJQE3qVwoXjxY1KbAnGM3dHYtU2PiQq429NBQaUcLhvtyQgHWTD4N8sqfXZY",
  "key18": "3ukXiEJh5ohHyLU9tP4i91kyPkwv5EuNowQqQDDrvaapx7P7vpeijjKFxL2V35W5pccLAysKwXqHM8oPA2Q5XZke",
  "key19": "3UFGwtV9F1kquLmY9ggZrqJSirNkDJ3eVzisHPs6XieFFRhqNKGgkCL4t6jNWeAf5SpQA6JLhGA4JWax98vJULqE",
  "key20": "4hC32ka9dMPUr3Pxwtytteb9onJYE12qVyhv7WaXiEmrfYLRQ4WMbFXu14oC7DnDev7MRoVVWXztWXtoLMZeMUrH",
  "key21": "3PPFotMHEC3VVeqEbZ5fuTf7oAujq2CGcwiQCzWbjM5RejGeQyEVMBttGueCfBgzxRhxe3vf3wqD7rqD3Rqz7aBh",
  "key22": "2LL33dh9yq9efcLXNZLy7kQfWj215iYaV8Tj44hJjTju2SXthTxAhABhgqvb8BTpTaN4V94ty3ZuT43gt9GGHu6T",
  "key23": "21Gq21YpRsLjcVLdpogqeZ4T95Laue5RqbaeuWJf7n8Bgb6bR4Cv3DNe4x3pgWYX4uv9Nd5imxCRV7yToJddCyY9",
  "key24": "4ibJQTnxkPPRfeXSYRnHvPvhhHP95nqFkwJHzQcx9TvUkc3FaJTL5ewoVaf6SdyiTvcxn6y372fkGGUa6sLYygu7",
  "key25": "3CuEA1BHesrrE1kkKgKLBbwd3uHdiqo9tcmTZMAvXg66NVjVghFmWg8wwQPQWgx77icgjSWC9f1451H29NTGEZLM",
  "key26": "4gZB2JFP7wYCQ9Y116GnAc989rfND2qzdnjotDSXnHVWN9Eye4tycgnE8cruizMHUrpExqTUytgXV9J6X1Zqc3pD",
  "key27": "2aNdbRRE5xxoXx6XYsT9v2jPB7kQg5EUcBpmVjzCHfR9kChpBdv1tDgR1ygfKLzm9pkkVUqjS6YhBFWca5jbUj4N"
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
