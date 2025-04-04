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
    "4DiGAEL6u2GnxWtYz9c5ADdstdnFdhiyURVnbrKjhcYVcCbwAY2aTNytCwwsbtKPMNZDAYf4ozfY88B5mdDv9TZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QprQRMYQFaKcRfgwjgVE88wCYAVyGUm7gnzCwggLCnFegWR9bhs49eCuvo3u2PSMdxdy1kaDSTrravBpBgP3HVt",
  "key1": "4A4DyZSDogchegjU7CqZ3J25C3QrvU75V8VWcGRpPPabtaXR7tyWyemuSgBaAJvVV48TRuoGJ7T7ikZBuvWp4zrL",
  "key2": "5GsvrQSdFUUmkeCSwpBJqrkaxEDaU7FPsnN1mCAKfR3UfeBzRSeQ1YZV2Djg7hXpR8QkP8rWNSYTucWLDYTDpqVj",
  "key3": "5yqGNCQjftLV6jjZsqWmsvMYJyujY338eeWinogQQDFXQGQcoKqWbE1uHqh7HW3KW12Z7C1bGM3EowwdsnYWkewi",
  "key4": "4DVfks1Lqq42joLYaYYB1CEhQSUHKSpABCRoqT4eY1yZ4EyT7k4o86y2X9vx79PKkfUeYLc4vooECBdrnMWGVnvM",
  "key5": "rDEEtiPRgA43DRYFAif6uKPKRpqsfiAyP14KPL6564kQm618b8PZjPmc5st1SfvEBYw2WsCdNPoYP3Pd15R5Q56",
  "key6": "3psZLV3VYx38of65nSB69NtLacr4w9scLkopw9z1qo5f8P4TQY23amY7YdGjXyZf1virxJvxUy6vDWe5e2Um2e15",
  "key7": "2kAE9EXXiKDBdx3uhz1KVxtN4cLTWTLFn5CnHaZFery1YrBocCReAywYnQhK2LWY8PnwxfaZEUNy5SqahD4TEUfb",
  "key8": "4EJQ3yX7V8Rd3pPVZC6aL3HknmX2V93BQmwxXBPLsdJmqDMtbrxsfRWL3WnHo7bUUBw6LvY4qzSwPeZtLTcEHZ7Y",
  "key9": "3MpTpwrdLYBgZ7XM7U5EaeGKCo54WdV3qo3FdZV9K1VFTM4cueQFo4QY5T3zNqAufxWUn5bgikWeqSqHQ2sT547h",
  "key10": "QnFzgVrrxfeQv2rn7gFGtv5jad49ry7QXs8Hvzt8AHvp5By8rsg4A1U6QpXp6Yud51EgotYaEN6vRnYJtfeFz5o",
  "key11": "2mvt7dPMBP2xA89xu78BTGkozScR32xXoXgqaCDkmNZ6jwceJm6fzEH9NTkYtPVK7wZGUoJkCPh33LFkwbBixCn6",
  "key12": "4Gyrw9vMDCEfG1KYYWPj3sUhU9D5FWw4zXC7GqK6Ennxd1sNkq7RqUBpoVaEDjVudZnfw1kfTBx7cZJg7zdauR7Z",
  "key13": "56Wf66JYUxjhYN4WFVmsoqucVeu1JCT3tCRSAr59HsipJBC8Fs2AEJEVD8RS2GfpQwNNE58iuYYgATZL4sZ8mfJP",
  "key14": "4bMyLGrLeaS3FH4HtddjBgtHxDeKFUFVs3RKSFHeBYAPBdJLD1qUExVNTH2kwtnyN9CVZSd5YW15aagCRecZaomX",
  "key15": "61J1jvwcGdqq8SAhfmcD13gPNqtXViPJRmhNwJz1WnZ3hDqNAX2gdxtMH1ByoLyYZYyvjAVg76r4b4bPKsebMotE",
  "key16": "5GEn9UszvMccWDs56XFMeduLAip7esPbZiR7RVSkcbsBksN1oG9MosVrMYQwNeojefz6s2KQC2QrPaN1eznWADad",
  "key17": "5B4yCPd124aZFcExf4Y8aCfM8ySEVisMuHy9vky5uvVgZdtWf2NJsi9jKBtaRSTpMv3zjpfiLnQTSMT2tHGGH3Pc",
  "key18": "2Np6GCqreZfGAxxj1XfRBzdF7aithCxdhwo3YdgQiXpMpXis2gRfMZJwbJwfbAHuo8LazF2HK5qSKZqMonB6qrGS",
  "key19": "Yq7F5VtRpTRwzKJRE9FDGN2TJvcomQov8sUqfmTwejFrSPnRtL73KqEb89Lj6S8B4LSBumnQ13gzA8GyozAM9t9",
  "key20": "DUeDNdMs7WDVeZNjU4rpi8uMLx7gTMFWw5dRv3zfnW8HXpzNN2ZMrXiMdAHwCRgBa5xzhYBDTdFuKSvfGdRUHei",
  "key21": "KUhSUT879PGdxA5vt7B14akPn97sK7Vo5CDF7cvwwNpzKhUyM3Qp38d8d6BMgH87Fxt1XhavBxjWj9xWJmCwSX5",
  "key22": "4so7fEkpJnP6899X4JV7kMVtbDmJJX4yuH2pN2Dmnz2PjgWA3jTFAXZnXnWFJCXiGgat89ZV4nm5f2aUezZSHFRX",
  "key23": "3grHfvAeeNWJRsu2yAbrM9RBcqfJpLgcKFjsbeLJVuWwbEeUpx2Na7BqX7SYdrSn3jBB2xch4L8o1th3i8MyhGZk",
  "key24": "3at1VRkSzPiQ6yR1qwUAS3QvV1e3ayfozmQ4qieQTbeHpTuk2AcpCrrTEyf5Uuyd7dgdoJ2FRyeT35xgqSgiWs5r",
  "key25": "DaPbtvosziDN2UmHLDh1ZjVxQwUcutQe3APG8EVJthoTNDWB2rdmnf3eie2qAr2bD3A2fsmKk9jpyJFp5dh3b6K",
  "key26": "5UeDXowvmQN91EDsEWeSgzb6icuishCGBHUiNgQXfrbB7MY3ecx6wpx2mAwkPJywG6LRTnojevtkkYLLRG3gZYYL",
  "key27": "3Y5Ko4Xw8atbJDMyPNZzZDhQkbPZzsjQVQiH1YtXQUeQgJfmhQEdUUHQFsNL51huXew12iptiBkfL7jorbZ6x87V",
  "key28": "yZ874x77SRJqWnCTqBNquLmub8tEqLb2dFnQUobDfMMA2WjiEDWt6qziVBMi7W4cVRgtAeK9kqPpZoFW6wcgAZM",
  "key29": "3BMmNiVAs7XLWoeKj9seFNLZYEbg5gUsJri93Gkjia9Vtev9TMUZ6h5LjC5z48XuDk4T53FMABmJJRCb2nZK8WsV",
  "key30": "31Uah9Gi2zvzDcbP6eMHCaRvR1YfdvXpLpWB1A1N3AiMrDWUgSgGegStXfScS3efHdiA634LvepmKTBSgqPxd1Cf"
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
