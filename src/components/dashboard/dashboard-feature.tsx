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
    "UDd5g8DQsseZz3qJT1mDtGzRi4ie9Co1ZDEtGYu1TW3s9HLwagKfthV6g7iCMsRJo6Z1oLAZGoYkYPTmisMi3Xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fjXVHkMx5XR18sXNbRw5tGMYXUP9ssh3Datm1JiZqh7g4inmse1SshgSVhR8qYdqwsbDk4JdJ21cE9mm5UN3SQT",
  "key1": "3AKHmBXwaNvgVPH6yHrNbFJQsDbAa21graHDxkd87aYKA7EYQSyvmJ73KJntdQCyqdFyS9XfrAjbfKjLypByyLEu",
  "key2": "43y9Zb2Qy8bVVeGvbaoZdFybvzFT1W14pNvK4LmEzoPF1Auk6aQcqZXsqNWQ9XdVSivWmyzTVaA53Gm91pQhnYNZ",
  "key3": "2Xyv1CQVnEEEvyVKRejPX9Uj1bGw6esgBwJ4UH59YfPypwSQEuaNHEGpCaNmfoxAYFRUXCb93LHvfoAsQu9AB85U",
  "key4": "5tqBmXMfSD929z37bjuoJe6yKUP1exXazR3BJrCfV1J4eoKaTSxb5b7unFMPN8LWUyok8R3UVKzDKGSRxhPdGBgU",
  "key5": "4b7rXq51RqQ9m5xMwVJCit2PjAK8RNAuLe3i6yb3QFXpWEompy7ntn11FV5NfHL3etLTtxBfppQZXXQmYJWsdpdk",
  "key6": "29xahvc9W7emQ15mRycspYfFSi96WiiKuTFfKz21rcZbQ1TiRx5UF297NQSK8JsE85cnQjuyKs5ngc3iRr3DksBC",
  "key7": "gMbeTWqzuQfFAj1kMTTU5czX6U3vJPs8gugsJNCnmAkrLZLsAGrG8LzPnDLLsdtTce7jESA9s7kbsi4uFzF1cfV",
  "key8": "3A4ryxNwbMwsz1A11QLJLUq1d4F5zk5xqr7PgQYzLD5xpFkdiDVjoRmFZQgrC8YwNRqGfrJ6jYsPkeUehcW9P4nG",
  "key9": "2MmJUGDoJPoihFwp7FzZxt7uTALKrLMyu7ZsECrSYX626jBetUmfc821VrSSQ6ZPRc4BHfXQaLfsLXNdmcEuS6Dr",
  "key10": "4pLCxWiKp2zbw9CvmjGMKa9s2AgXSrsxcHiLwfAY9m1M7UaLQ5ZnfZPZ7NDsvB3SLohn2x6KLRvrCSVdLahtVKEj",
  "key11": "4VXU9RutJLMKrSoLpmS7vWosuMJ7mXFaNVP8KasVGod1F5m6S4q8Z33MdQMrajTa8Hw3CbdLPSBivGari1xB4ct6",
  "key12": "4zY6LUHKWHGDuJNyPKzoUJ9i1rid4pBxzno8EQ9wEm2ToBDuo8KNVxKzPiVtxNn4vLXux5emYuzjR1n1Y3jHF6mm",
  "key13": "3jYFt2BDubyN4EJocTabdVTAxqZyAmZ3cnYgitmbdgNh1c1f3UyXc3omrAUGz6E7YxU2kc2v5JmkU85ncJmXEXHz",
  "key14": "2kpBiugJ2ULigQAFMqeGfQMEnBLf2RcK8G5Fb7LgYckq9x2uHwkZTA5RUzLYZTKdNieYiFWDVzCM6nBxVqHh8e4L",
  "key15": "4fg1fbNK5RqEfjZPdcurVLKCoPB1cCrPT6YNqwSjWYD7WoQYxgzHxjMNfVzxVJNidctKhguZz3bDyBudHntHoTUr",
  "key16": "3o8CRu4MsvPhp5kWo1QD6ej36ELjNeeqNktSZVWpLxdEmTVhrd1pQMm3bpoFKMzWVMJGgNQnr9nzv23bPY1p196r",
  "key17": "4KPFuHY665cCizLCJ96tgP7n2QN3fdgjywAr9TxTjbFNYSsN8HoPwbLmFsfvjxPznavQ9gdJUU4TbkkweW29L7go",
  "key18": "2iYsUKzrppmr5b2Ug3ef1NWvkVq4C6nGhKx2SEHxNoiYq7aqHdALmmERkxbjBiP1MKWqkpsFGpCisTFcZKbL25Tk",
  "key19": "jo27FCNfMPgBpyjqNvf7atFoNw73T5ACMiBDrF8qL9ycPQefmMWhhjari4YgAZ2xKJqMxbTKjHG9UmY29qevGsy",
  "key20": "3ck4qTYqREVNVneyNaqJmcTbeRrXnDSXnsH1v7jTvGzbFRWoqexjx4eAS5dW7Kd24uw2T99vJywiamfP1puT1UMh",
  "key21": "5s81tjKpNNhkgHEtcu8bfDzHwxjwbVN4wMAS1yHY1QQxoe97bkB95chUTB6U8rWNXqJmBnz3EEqu2yVjgEYirGSn",
  "key22": "53UKzXDniktKwj1PH9iPydvVTBPx98fg3LRPatiSSpRxza5by4v4vGjBx8wZA93MyvNKRRJMzfcRLYbLnQA8eCXM",
  "key23": "QUFLTjkdztPyJZVFVU2P5XrmcfFeYkqogYPXqKZ31uLSt5PnA6t8hA1SfVjmeWeMR476NxG3JnJsajr1XZmrv5h",
  "key24": "XHyF4XZ4ckxi9dNwqtRouFy9jU9Tke471UYRh8VFESmL8ZaxZ1cGGybovVgJ4U722aKas9pQwm1XzG9iMLd9gpu",
  "key25": "rfbvi7PTq4bddYHk141LGfjD8PvYafWDMLeWjVwzNDtppX1NzJmSZ676VJc1MstwCRZYsnSXiSM72XDg2Z5crrA",
  "key26": "3Aw4C1ZaxDvHXMsN88PqTt1BUKr5CwsZUd3zNBNukuLAoWy1vmVz7Uwtah551ktHZ5NYcg3g2youzyVDiRFB6q53",
  "key27": "4aqbCR94DYacxzU6JKGCxfiz6uXyWwSMYp5wrNuoyhqF9GnF7aLUCmDSc4mhSSkNccZ2SRUXaMGqaQUgbxFcWX4W",
  "key28": "22qW15xEmyzNqb5JSJ7pwp677c5Jjibtvn6krz5zP67GctsjG3BYUfAPNF5TGFhRuYNQepofvq9Pm3VxbrkF4SCD",
  "key29": "4mTd7s2tbdpVYjV6GqimgVjbddh9ABWnt6xvyi2hkdCVMSM3CTRc8JWQMGL6hSn7gNtsXC13WiqkpzSjK1tAZPxk",
  "key30": "3Gp8NeDYr2DxZrij5YgkJVFnJCKVj1Vkn3iiwz37TRLPc7D1LSxUHnyvwcDB8s2groFi9qz88dZ6UkguJXpLo6od",
  "key31": "5H9nTEaxXPfzWoKnyErpzC5M11jVfLJkd6McqDrPe8YfcoerHvJ7xwj43mBsj4FRbjV7aGnhDHHLkZARqzXn9B5H",
  "key32": "5i2RMRU8FtvJ2xdi9b51QMdcssDKZCgzTGRDVUyGDtx9XtEFhUzrjsux3cdCJZhPLGt1VM3YC5xH6nN4LpgpcFeG",
  "key33": "q28Znxi3d3crjr8mJzZUoasQK8PqW8NaZgv5SY9dduRokCLpX11vtmYzSx8zZPo96duotq8NicwEomx9Hd6A18k",
  "key34": "qkNXVouEP1RCNyVt4XKEvbBhMiFRk3vyoBz3M6VFBc7M84C8p6MTDf1PqwmyFGtF9VMrf1kMSqFT65ANh3GDghz",
  "key35": "2GQSwPj3LbAF3i7WeMuXNa4rA8peLMXGa27XySto89pzqSUw85BmS86CBoQ28GPUAGH4qFMEXw6VREYT98rVmw61",
  "key36": "2rykbPHH79d8MLqEK2nR5NNEWg5o7LP3VjE5XVgTn1qi1JXs4jwrmzeUhHTX77Tp7KM6amRz9GEtU7yWDW3Qgmoq",
  "key37": "3hBVxuEP7sPhFzEdQj9Kdi7wC4MA7BFMfkYZBgo1P986yAQ9FMGnvxhKWT9SaDTHNjePiZPP7PKSXZDEKVMwPxrn",
  "key38": "AULsfcXF89GqEWDWK6B1GrN6gXXLVZmVb2EhUoQpMCeC2eZvScWAA1aawCwDevPMDVjbs6MDQXoHXGPFHueb1ex"
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
