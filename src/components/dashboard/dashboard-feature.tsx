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
    "4jibYD8fs79pP7w17cakwHK5DCCyNY7kiLatkCjtYSgsBTF6qJYYdSjaMbSxUSJ1oc7ZEYKafZESBfSxeRv7ZXwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mTNVYPMub98zANJky6Fbj48o5GRiMh1tN4tqf9d8K79q4GCtoWZ5FuE6cdbcAQNAEsEDP7UixdnteCN6gteJc7N",
  "key1": "2huPr1MdhNq8umyMLiabeKGZoNvvFWp4mANAF6QoMRVa6NuVPE7SrZCxzUm4Xz5JM4svtN4wfubvdViF9BJFyKcc",
  "key2": "4DcF71SADURZQMwTcH4UWknzjDLfm6pdv7awQ9sHR12Z7HrPmTn5kWq923unXtL3BLAXVvW3TUhXHrPim4gptnuP",
  "key3": "5UTNtP5EXabDFYCSiUjp8MZUN28FSudBkdrx1NnNT7Fm3jqxU568Sqg3YdZsxUc2Z7BX4sT6Kf4mVuiMWZytJm7U",
  "key4": "VSTKqsuu9Kg7dzScPAKcSx3RmxxS8bY3KGUDHKSXaLMAHYJtEQzgHiqw9nZompr42HF2CX1xL44vV81dWnJCon6",
  "key5": "4QKMdkSmCR1qjV2nLirtK5cg8tmj1VgqF8q89YhWVuAdnjYFjs6jQadyAu3KYvT2jJzyY4STK2g7QTB3nKF3G3Yf",
  "key6": "4SCs85hP7NyRP8U299y2vRmRzFsE2sWxRbaP2znn1BBu1XfPp89tXBrTF3VJ7Dcs62Q9kB61vNYP7rkt5bEJD39H",
  "key7": "3p9xeqKBhJNUnRJAvhsgFgi5if6PfHeNL15h1q11P69uGKqFr5xuNbW9fqP1zAzhNWF36rBiswcgph7ksF9ebWQm",
  "key8": "5YjSQ26ddozssikAqms2GfJ33VqVyoHPV4oZd9zZw7jq8vKZc1YrAnXeKfgUBpmDvxMJUjcLv8WuRX7roCXHdfGn",
  "key9": "3oJQ6RovDLgzhewf3KsEEM2k7voCkHC3JgafK1WEk3gxaP7XDsKvzhTHoMR8uLK2cSXYCVFsyaJPvP87dDxiZjkM",
  "key10": "5hYjcJLzJL23BWUMRAxxedbjGbgX6xejB3x9KNvTUGBhhT146hJMkTmogqfZBjyN1jshPvHbaLq3to9xGS8xCPC8",
  "key11": "5GAPUgQ15HoyUhtPqpiNK5GMLJN8Dg7GAFPKdidL2V8ZEVHHnNfZXDd6bUGzwBBJ5tvGuPznQzwtsL8rjCuCt1Xc",
  "key12": "2EaVNAQaJvjZhQVB4U2GetfQEchdaDohRWVWVyRFFk8yXzBxbFW9LtV9vQXmdgTt2dQTpEHXoUboE25yAWyBRtnX",
  "key13": "63ZLqUwpQwptbpj28aLcvG1gG2Sdu1fyNFHHiPRVSPHv9j66hizpL8MnkVqeVE5NqyCFxgbmVC9QpvsH1A25tX8m",
  "key14": "3qdNXsudEBHwVL9bDpvToXEsgFx9C5upJbVn3G4o8AiH2RQg1E9cLWSxs7Q1EHmBALadNaunkP6VMC1z11HyCDdA",
  "key15": "5hxMsTAbfNvZ6Fs66WtD9eNKaxsWcidm7sd6LrqNST7B8SGJnm8Cuxgw2p15pwJTsLaekL6zruwDi15r6tRbkJoA",
  "key16": "s774dFTq2H1ThKhDdgYtHZSLEpdHg78pX6pBRXrxWcuFURvPbQ7RyJUa6vZeVzSQbc67eQ8t4eu9m39DY3DP9cr",
  "key17": "2MFg2GMvsFuvizP9Ucrkwev7xj2xy8ivmbJMp9P4WAuDb6RDWQU3sFcc8UeNv1nhLPU7FUkESvpjKJTJsaN1ugBp",
  "key18": "662oWbe827cQQ3PrMfhRhjPzqjVSnxNAC3s2HvU4jsCPDhoRuyRDmwBUYvdeQCVQ82m1C4oBvKqaivBwoQ78Xawf",
  "key19": "5gGDNXxcLEvSV1CUYouFx7Apy8i8TmkqfNjiP7RZ4yVAumkFSeqtYhdurGPb1kJVE6R2HaVwD8Nmh5YEQNNbj5NU",
  "key20": "kCR8U8JwK3ba6dQQdT5HxVK23VN2GC2vSfdpJNYUQAW3HYx8nQsiWQJgwrRixupSfxbSnmRoJiYHjDjzLqSe1PU",
  "key21": "2AfvQkkMKLQP9hfr53VAnSgzfb6JS2CRm86b6zsDupJwxWQ48pzZvG54fZiZPH8yDGgpNtYwwRUX995ovxmrZ5jC",
  "key22": "2PVPXgQr6VW2jAERSGBpwpUidWmEVHesPn4ofdqQYjxY8hJ3uaCUaN9m8s1A49bTsT39Ke2M9twJk7p3WndfuZ6s",
  "key23": "2D8sLQJtNnyhDw7ZwzapLWtTAHm2u5YHNS3aby5EdPqQ68myR8giauDBFHfZqe2oUDZ6E4jMoEhFegegsGveATsZ",
  "key24": "45am79dxUjGWY4GdC56E5NzGVD74xYDsExKsfcHChrT2n1MpwSK9Yd1m2cWfUBgjwDdp65QdPMafyZocFg5L2DM",
  "key25": "5MmgMwP7qBdk6SczBHuxNe7s2SqRXJ9iu54qRrmKJAvSsQpByQgb2qz3bJiy7tbSjRzSDC66dvSkiPviiLYmv1HE",
  "key26": "3yF8zHdMQYQ3a3esb1ncqJauoBZNLN96ktv4oNvytt72HB9kSoTpNrLbNi32joW7bMN53R7UYwzk1vDYpcETxJw5",
  "key27": "3qzMGaSnxEhKgW56gDZxE5D9TszduXBXEanXRZTdSY44Xnkn6X1uVjqpHs2pJbUBLXkc7fvauWYp3wgnXjMrhcaY",
  "key28": "5LgosjFTUUK9bcXBtH6RDSwCT3xw9VjaZBrW9MqHzLwcTWL5FLQ4pm4S14msA1mikCgp6PrHXs57wYSecGXs3rq2",
  "key29": "5Bgy3K89FyFfhKUB2Es8UfGcHU77da1AkRYdqhRnkfiCGLuWwLhiJFjtZuU9yNt5MZYi7dSGCmLEzpLmnp9jtuwB",
  "key30": "3Bqo8hYQVawNa9V52v5ZB7QXTKyJDkhQ1BS1YXD5sJE821yaBqonrWGda4JAyRoWh7AS2oiwHMV7xLYwFUtq8g29",
  "key31": "3axHPQajzuipDn4Mboq8L9A3YrdxiVGVzCZHtN9tg3f5JCZmcXxGiFN2NEZfQbDRDMpCNxUxVuXtwLoc9bMx8Y3j",
  "key32": "rRoWr4Taf3YwP9FJt3CmCaTHQ74GFRxJeb2etJk4hFQ6PrduREmKpyGTDyX1S8midDHbdQU76YYNugMCkY1wRhy",
  "key33": "26hKWaZEePohviZt1cG6S3BJHxL6qN29KnwapNQpinPkWoYL6wPXeLiBSRttvtKjH7zjNYK55gsHaYouCPLz4uM2",
  "key34": "2gugxMMFQebysDkXFZ6M93RvPKNzAAjx13Kz4196b3fx73CwUPUgqwHH4N7qXQfUokViuj8VjcDZaxgSNgSK2xxa",
  "key35": "3QiNxiC71UCt5MxiCEjiTkJfBoxuUBaF4VedEPX8xizy59MmWc3W7jF9XjrjZGkf6eToMkjiw96Vnb4XXXdQ529p",
  "key36": "3bHbrREPqEks3GFMvHTfCnELGM5ZzmN9BtVsLkiePeHDHL8wKFrptrbVj7QCk8Sf3bSWhTZSATGE1gVWRBRZ1Yo6",
  "key37": "5sog19HsFBSG1rBYg7obMNdYqwAWm9b5EjmVUMHdPrZ7u9hqmpP6y9ehTrLetbvySUCqYEfFsahSiN9aDj5QH1C4",
  "key38": "396znjscWDqqQpFUvzynWy4Zx71kgjpDi8HHfen1G4fFEVB7HJ5r3RYD6iDA4qB4yE3UwvtAsGbUbQu1hwnhQeEp",
  "key39": "5YXZHCWFSnG6U6BgR9iDLoNvkCSMPRDJVHK389N4X3d1CQexDoGgBk4AXMh5e4mQTfRNvFr1gKXgCLxgCGJbp4yH",
  "key40": "5y4gBXcGzdHmXHZLkzrL7d3zqjUpj1aNTYebgTrVPWMrU35NbPHG4ZZCXUiqNT9aB5wdCkBtQwD6FRMvTep1wvWo",
  "key41": "5MM3mW5JNAbmKBVX226f755ThyZTsVin8DSHJhTrzXrKiztDjCsX8ZJN1hxPF7vQv6vu9XEpZHCbComwaR1khseG",
  "key42": "575HEbCSwGnFBgodthyKpbvbkRcKX8YdUfsmqbrceCXYjfr36vVvBvox6yUFEGzvEN3qKD4hAgGpLYxCXcmsgWW4",
  "key43": "51fj92GuH8SnKf1NkVp3gdCopt6maQWesniHRzW5DyF9fMx8roWHaTC4XVaM47KFo14xnQy3DXesGKDLdJaGU6nk",
  "key44": "JDYRa9iyqehPQ5rNGabSDksd4wNxcD4DBCwqjcdkuEVQj1Ss4cqgQgzfQKo7C5g6mmox6hRRcqQSFCAZQ1J1qy4",
  "key45": "sCoLLhH4NfoBaWGZ8KuGn2cpiz8u1yPhb6bNNH5guhvFQq7Mvoz49h4kRfgj9C5GZUaTejUnEob72jpnvc1v88m"
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
