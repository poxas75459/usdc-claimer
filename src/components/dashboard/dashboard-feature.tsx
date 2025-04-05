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
    "iGkEuqMkivx6SzVqBgzfY96tGDqp3P6C5iZg1MRo5scnL5htk7Qb8Cx8dW7gRVs4d7LwdCUxoq7CoUJVbghNGtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dy3yh1ySm6oc9mgcUjBvHgxxirpsBydCQLfEZdY9e7t6qLHD79cxfAoxSfyyWFQPqrDTtz6i72iwDh4FD2mBahx",
  "key1": "3kJnPtkBJwdTVyQxwYPfvVHqCpvATzKyFtCZxsv3wQkrh4c6m5x5QcgfZqWyjoQB8GxXhkVmhHPu6Gu7GuaaPbV",
  "key2": "2BXHoUXafVmDNUb2gH8GrrbMhrzP5RqC8ZN9FoKB77hN848k8ocpUG9WKaZ45uSJKMRGm5QBd2SrbFhXadpPkhEY",
  "key3": "3XQexqjP6fHhSVC5D4uWzcFYbsE15a42SEb1Mgj8jKjPfDt43JZbkSxbWxipjeuga4J7KZ3Y6fdxK43HQbvKiv6i",
  "key4": "392q73sPcxxsv1Zpw1kP524EJKyQS9onazLF83KPeHkXipwdyyqkYYXxbwinuJ1jiZN7dV8FVMzMTgFvQs3mRSfv",
  "key5": "3KERPdDCRKpb5a8xy5ourYH8EmD6f1LXCagkpTYJL2sVA3s9fR4qv18om8dHcy1uKWpFndNRyERVEE51Kcf2vGy4",
  "key6": "3DZWNQD483RhNRk1MkXr4465fj4NPppNYZCpi1soYVd5XZdSNbEokZEJyFJNjLRkE818R4VASXXnrLamMqD8FQ6u",
  "key7": "5rz4kMmnMU2feMLWmXQKLJewNGuiA6zKnBZAWLi8VA13EttKNbX35RSGWbbbqFsVjPnxePdrTsdWw616GGJiy7XD",
  "key8": "4UULJMHK693yiazXaK4U3gH2pEt1BkVyLevdankTkEDWiH8kzh3K4d6UQzZBFmmjudVMRLLXFA68MQbuQ8omwQkm",
  "key9": "AxnyDat6TzbDR6XFS6v6AvVRHEv1irX4pibcV2g2MRnqrNpgmFuerwTUoVLZBkzAybC1imYMSfVUC7fJmQAf5R4",
  "key10": "31MeGx9JhKNT9HZacrAy6Guj9CShN1f1BW5owcYZhP9o9ZdhnHc7fCLiWyGr1q3EcTYB6tbmBvAm97gz3Qh6DMQx",
  "key11": "4GKf8QrFXMYrq3rPAuYM8w6AP41v2CwHoMXckQnznA28HiXzmYzLHKnJmz7RTNbY2SX5aWEswErBW1DJTFVcFBEx",
  "key12": "3N5HfyETTbFj7xHo9Gnw3x7auhxVNzwcdZto5gJgJYF8RKvMtBkmoVe2S7cJjLgSZKUaEt6MNSpBynGjqDKbw9YM",
  "key13": "52WQJNPwwzVr51Jt4qtJLCkzuvBbwvCe9rrSqygZDgSxVivbuaHFMEKZoy72ckY27zoDiaCJV5VqYne2ms4aVBNE",
  "key14": "zCkFDnUFFrksAjLXLF97T79mPeA4za41BywAR24cwvjY8jqy4kUskHUAPgeT3CZYCgXiCopLyTz4my5G2uVnWF3",
  "key15": "2xk1PxpSt5NuVGREuYABkmVdBkcdtJsHxwEtbo9apRudysoyoysRjVV2rhBBRSpAFWkqfrS4k1T2kh3XqVnPqmQ3",
  "key16": "TB63Ksr64Hbsw6Wn221tejizJVxg4UoE2V1sWnL1skY7noDifoQtqi5bp1s8LbkctjJiLtWa6NFUu2W1hv3bFe1",
  "key17": "2YSGumanaWWjoZW5w9D6J8DKURbnAcqWvhx7rueA72CBzZ4BVZzbokQn8trpbXAKYC4eDnmF7QKXwXfY9EG8g2H2",
  "key18": "33qzYjtxDn2CjjtMqnA6wiyXYFcyzBurCpwhokYc94k4EKLEn6RphL7u3ikXWZBsmQdijLFafRzSkjH5GPfHJ6oP",
  "key19": "4j7sqvPzidBszxVeeTTH3rSq8Fteyey2zJkWaETdieMeh45yzg5wrevVRJkvAqzHMZimSqhY1Pn2y4aab72ngtif",
  "key20": "5yKVmW9XHqyU2u39yWjWy9BdP5w1aWQov6WDpqUzYb5BcBLRRwemXzSsqic24HHFArGir2u4kFx8byGDZRLjAmFu",
  "key21": "4zheYgK881HnGLu1CWmbyUnPHZbP41h5wDV9MuM1F4AEK5VoYz5Dyqw8LDv5kxCuD1Evq46NAZgKy5gcKFj3DJXq",
  "key22": "3xBGjr7NBzDzm7rffx7eSAY2ptYott9C9axg8niCH9koiJyAG2Gkix4HeuZfvSp19yjywkp4Hb7aXfsGY9E5zdFn",
  "key23": "4NjmjhC7663Atq4GakgfntUywV4hhxiV6JfgJFb33EhmYgVsCzdtSrfP5k5CBToZiD4jgXVYu4WgZ7h15RFAWmmy",
  "key24": "4sdJVjNXt34DGQYkev4oqAGa4dSzGwTMomVbw6DjfMwTN8SuAubDi19t77vyNBRHFnEkqmFMSJf6mwsQBcYyjixZ",
  "key25": "4h9MsrhzyvuwBeupv1gpJhsm3CdQC8NBqX2y5zWnFT8Wx1KopjoVhKxFpMKAxp5fERfZJESzUaxr3e1dRoc3QWQ7",
  "key26": "28j3B6hsJ5HwUfZCF4dJ9n2EJu8wV788uKYe7GczZgsn3YQxzx4i7RDGRVSxeJ8HnP2Mn5y7KXCfkjvzAwcEH7tu",
  "key27": "5h5MRhhn8Fd1oga4tK22hUq5waFcpRFgy3M1He2fTKU7h8m5Uxrrog88j8o3XH25QAchF63gDsZtqjUoi57JsLAL",
  "key28": "128TfNWYB41QeHrGEV2vHaaTfoB3PhiLbZA5Tv4yC54P3FS3FnS68CM3ZH7qyfYneZmAn8bAjC5S1kGTP9sJWLo4",
  "key29": "KNoHqVHs6gxMkYiztcWF9utLXpsh6DxyY3BA28kj5fxxL4X3aEP32YLSU7SAho8WCGrWMWj5MrYdD7dJnWqjapB",
  "key30": "2DjyhfHxLqjBdJaR1WNjNYDatMypAa2TFWgQNGHJAR28VRfrnHGkZbr3e4i2MfX6Ey5ZtVXy8pbTCur4ENFwfTfW"
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
