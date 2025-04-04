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
    "2mZzxLhWLxjKgti5ZKSWzhZJ75gVwcqD92DtBmZrYSdUAp3a6JuyfqAuJYPHNe2c5gozXvzovtC3YTj2xSs79qWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cZ6T1L12tb5mDNPUJBxc4TZDwjVLpnDm2sDr9NrFKtWrMXJ5ZCJBGwbWbDHx3cn772Zp4MukFpAioCh8KUjG2MA",
  "key1": "61h8uephrGx6GmrqbsuG7msLQZdPppurn5wBYvBm9JNFTUYFxrTSnncxHepMRBYgRoEiiybiJzzv3cXXQtFXFgyo",
  "key2": "3huPquGgwuoe9v9WJi21RkXFHVv25dZaeeTqshjehqkpnvzXpSSLFDmoc2dHmuPbBFvJd5Zb8teNR6KYoW7aAb5C",
  "key3": "2eamtonDXn8ChcD6P1S6C9EtrJnHjvvhsdDi8VpavY14nZDBrGYLUy3szaBEdTZC1ds4W3aEkY75i3kZ3e5TSe1p",
  "key4": "cLpB7mBpffFEe9XDBHWnkwAx1wUqu5HS5SHJyYHJn2PfATnzHyLpTg8EmbWtXbGmrN7cjUXXBDEHZ8sZjmEZ6iq",
  "key5": "43174gVjSu6ygBx8hHxwyQEYy2c36LMiZdaEwGbujVZPApNT84GToLwAweVJfLDWyzCLEVwApcJSwXdQUQmrp9P4",
  "key6": "5gGn7zHYJVKGSMWpRfT5NSTL2z4oWChwNmAUFoafPFnPNCbWgEGHksB6M3LEYit3bHAyTeeg5w4cZbdP6xnGjssf",
  "key7": "GVWDsCaXLnLYoBxc24SKjBTU7bfviaHhTEZzCozHpN3nyqPjK31vnZUpGzsUNeW2R2QKqHJ4XSAebNTT5vjTcuN",
  "key8": "5RV4spRuN31o6gpznUpffDW7n6uTineGTTxX8fDWdXFCjwyWaw2CrmJRyazif1onf8nvcMyFSz94uvSosuzwAZAF",
  "key9": "nGNe7oJLmHMbT4d3DsUbj8xM2faQnn5PqMm3U8od9m1D6sHV9t7Zo9ygToiAEVEsBntMFuPwidVJzoLWs6wmdeT",
  "key10": "28LTeVAxdKaRVotuuwfqcoi5VMgPiTrRituaF7vgVipPyqpo7BY1uoCpzNmqUY5nAiYK4Hr1sDmknhbKZ1mDNu58",
  "key11": "4qTEFep1KFGGoDhKTBrLFTfCvchwDL4maJgPgHNRe4uw4USu6SzPVT92tZ7y5csNTj31pKwV81u8gJKyE63oXRJj",
  "key12": "22JS9Mmg676Rfc7CNM4zNRrAG16XG8ywaN3BWUN6TFwBVAiS7HeitLTxiJHfrXPFHoTtFG2kw83Qofik51dSudBZ",
  "key13": "3E9JarqQ8cM7yAAUSMbursnS7YLf5RYKhfdMnarBUXt5UvpnxpzQPqab5VbqhGUPrijSDDXjN36ZADnFwyU43gXN",
  "key14": "2eG2gozSfzEqpgQWG8gZsoCcxqJZ6LUdZru2JPzNQkshkppmsF4L2kPUhCvEEvjk6xoTf8pzxfwR665ZWJPjmH9f",
  "key15": "49w9a3XoxKqaHceT9e7JVWrrSJH3UfYjScbJAgb2WFGr4PZEUrsLHzUeZ7Lf3vpBYURwjz31t8KrApKo8ftpjdzf",
  "key16": "4LAhCXjnbxVj4P5VXBmVVNAtqyw4qj75Wp16svSXHafK2DEwPj3MmzEFEJ7rqo8oRxczynHwZLsocPWnmLQjrkGd",
  "key17": "58YfBXPghthTvX41tnwr9HiyVyDgumSp2gy2rSHD7XxmRUBAERBLf4YP769wcnNeaNTdvC7Ci8JeyCcgR3Saae7i",
  "key18": "n8Xw5oA17kfVuhTnLCkzpBJJp4qbFAisWtz831yuS6Bx1RyGsu5Eoe4Sa6KuecgNZ3SaNYujSMSy5RMmvKuRGou",
  "key19": "5Yt4Zxy4EWNycGjiHvTkYVXXAKvEjdwUD7iuNUNZT6b6YNnFcDmiV8BsRd4pHdX9hW1CXVAaJypWzeYtRZ3cZ6m5",
  "key20": "4NKgn7fs47Y6yHzJ8r5wLNqcKAxx2bDGy9Gdcyd7SinQTpXz1fRs1foqAto2DTJhYWzLn6vq8gi6Yf2eMi53yibW",
  "key21": "43DNgcbo2csDW57SjX61NnU1ZayEJFuRzFEeTgXo3qniC573jSS7oChT1EZ21z6LTT1fVTPx4JASYDnL1VGovSkC",
  "key22": "KTeBqCGG9FHcidsgtRcgiM56jTv6D3EGZjvdJpttdgpNvqPLXDfELRjD5NaoQuesHo3WzBtNqZmnCP58UbD42LD",
  "key23": "5ig7cRPXB5AESF1tgcPpnnKzvqWsCby59PGpY29eRuSt8bVFfipGVhCR3XxDbo9EWwBkX4bAL2M8nn2Av7XR2T6y",
  "key24": "rZBhM4p1M3jSUQAvQtP7VFn8h3wKnuzdTkRE2Q1ZXXXuKFNyn1V71jDj4munUbpyjtqeej5ugD8z2W7YmycFA78",
  "key25": "a9RBnxByVT17bHAvEnDrLbaDfFYPzQ6CaQ1FFJgNMzhPBsJ9REjpZVRR2KsAZienRN8mDPqm2VLJFattSPJMgH1",
  "key26": "49LiSg2ckBSEXjT9ZWJwmhw2tUN2tNRAE8nYiBfW2zE72qeCZDoxRCjKGvY48TUM6VXrV2G9KkVK2FY6yG1ijaRu",
  "key27": "2UqAKwpgudtnWW8xMMqLqPajkzx5upyQvSGNpBBpuUAyBXXcpp9JRSaVTFsWFAWBUKX86SpE4ezbzaPpcFDqE78G",
  "key28": "3LtXSsRjBQmWBERV31suGC6REFYxjkmKTh7BKYiwL6zpCA6BcGjS9gpn3jqDVy1rom1Q4SFd4XJvLaAu4kHuH1gt",
  "key29": "U37rXvjW3g5QyayJFCvW666ojM4b5WnSTNMup1dF45dChb3BUw5BuB5uHZ795zAnX26Y22X5jDb9PqNoNzQ2pxM",
  "key30": "3p9Ab5gReWCTybzJNNMJeq2gRCfc5yzCyqamNN8dqofNdk2tcpLgjkyVeJhEHawawFstnYXmFp8qW9Ws3udAUE6g",
  "key31": "4AsJuukbtTgpZ4QpNSNQuqSamZDxHhQ7i2SSq78ZNUy41hUdk6uAc9Tay3dyzJ9yw3eVBuyNSCNwcvPWTbuh6GUL",
  "key32": "47Scoy3JWDcnpZaLS4SBJ7wsjy3pHbHMGoXSXfzSG9U2MHNmxoHgHaatHQZ5YwHvTS36ZbAj3x9X2P8Q9FWo1E2a",
  "key33": "4R6sSorTTkgdKaVTpiDUEBDTNdNEtMHcRA5vcXvBxVGJgmYxBrTtJFUTwfuiu4Yb4kebGUkBTgeqk8wtE2MLrqHz",
  "key34": "2ZT5jiGe9eWb2nHAMa1GirbvPdvVHtgVHwcJ9nAeq4ZXhcmnFjhTEayxS5fqVEYJGGc7JhFjSmEXhNfUGqpo8Lut",
  "key35": "5ZNAQ7XzhNRAmga4nY3RMLggJorTcX5eezDMoLzQR73su4xsFNAo1hwfab5t1YPVatz1wJ4YuqxZHhJ9sapPgLBx",
  "key36": "M8Rhi3PZKeR6MYesj121wBvgxDcB7aNnzqR1tRNPZQ3b8guKi65L6s1iNVmFKcSdLnmELePW6nfkj1BNvQ2LZQp",
  "key37": "27bddBFu1gUDkXxvfdMk4GSXWAJ39Wy8afCzJEAkQJnmtLr1wMxCs2WWtRu4parLnFBCQMr75JAjEEcysjqffHPd",
  "key38": "5NknCLicBUAeKMMhSgpyiznqSbnkTYshcMKPBpBsAjGd2zzt4RkSqFVMyef44vpad7eQQQ14d9swogMTyrGcqPpe"
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
