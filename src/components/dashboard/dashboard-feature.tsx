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
    "3fGFn7CpLWJTCGy3XTvh8HmDvfwhTvKCNAGi6g37cDQYKxXe9rgEaMbLSG2WyUuWJmeLQD45Q7jBsD4rzEHq9rEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gcR4rwCTLaMGHiaYyLBMZAbTURMtsRwhCmEw4D2LtbN7q4hqTbQAq823TRTe9uc8QQSgTz2YGcc7CaAypECQds6",
  "key1": "36HsCaVWvz4CRxnA6gcA5ZP7vAABXe2znM7tkCVEDjZFoAHfJxJtyuCxALUFTApDCy2ZyLygAenTsQtSQaRmsfRC",
  "key2": "4GwN8mFrVe597KVjf6HtVypzRC2aNyZEa7WmsTY9eXuCoj6T9HbJEFvqhT8im2QJQFDNR4K9DH1Aj36pZB2HuxEd",
  "key3": "5pnGVtTBKdAfKnT22B1hVMh3FBa73zKerbtAEeWRXUk2uzfPoBLpZtrHZ47nd3XQWYXkfi5zYS8aivqRfy4H7j5g",
  "key4": "5WbpS7ZhY181Stk7CXwFYWPhPPABBMpN9Z6VxtoQUJTT125vRx7dpVLeK9UdxLGXHybdpjsgBDxosdu13Z8gvgdm",
  "key5": "SsFHfLyaPuDVZpUf12VETb6amyhfkrAR4Q6URESyvPdDXsCkzst9uQ3itAWFh3kTvwkRhhzqevfXEH9q7rU6i73",
  "key6": "3tQogCC1oUvLMwuwssz3hR5hg5128w9NkjD8c8tQtnRpZA3BfexW7JYDrJTVs5z5jFXdPuW7nB4gQgMDRrAvyGbs",
  "key7": "3JhfnVjRhokqr6LBVzdgVMtxNUm1GWmJLSzx9WH9tja5RdJhZLjSohr63ggS4p1CrVHZZYswmFcPaPfYWwQgemRJ",
  "key8": "2VEDaS1AeJEHpvAjap9ukuvsJHdp3cjtgcAPGuX2vrLzMx69T3BFHyztxFd8VE6TULCyqDDMFDxKLj8quRJ6Ypoo",
  "key9": "5eBkUqXQZoVV94a7WjBbBoXKJR8aNR1TegTSQ8Mh52Dcfg7GEjKeuCWGVBXzBF4mPV3QsX2Vau5W3tvEZS1UxkcL",
  "key10": "2B8g6go6Tw3tLriNrdZbZo4ao1y5rs4VZoYaZgaNejNS3ugwRYyxsXcU3CqihzMogjrwWFvbWNsqxqvztaW5hD2G",
  "key11": "5aTUGM2tp1gsengMu65uhH39xu4aEkAtVYhXLefR1MDdvJTrapQZc2jq1PSnFkGoETG9vGMYkQWG4eCRbfLcuA9o",
  "key12": "36xBWd1cnJM4rE29h25yJpxz24eQmx9z3aaidR97f2unpK2T7xXCt2XtRW24sWJXgDcuYJvdQCzK4jqgUWMc9QmY",
  "key13": "3MCbEH48ETdjGtqG5H89cNvmwmfnkHodtbnfvVK5XU3tyoeEnLx4JMhArqfZrkihFCm6JNajryS2HHXR3AfNF5f6",
  "key14": "2m6NJDWKRVh8VNHzVguZjdSAauhjYnwYMiPLnWWtrbA3xEhKoZ7Q5WmFP4abCcMNJoSac7Nnoh98JzbfNDNvAQRW",
  "key15": "5e4u7YfUbRY8dRBpwAmZS52Yy9mxrL3rLXwyG4fcLKDkESry3MfNba3yBQSDnYHgFVBQdnHoU62qPLq4p85dKfSX",
  "key16": "5aRDUrzYWjk3uVXa2NZtuRvWWfHxUJSAMKUSirMp4EUjWxpZFvgeiL8KvGGHeuYqr7JJCbxF3tic5ixFrymL7iQZ",
  "key17": "4qLKi6zeJ14VyhiCYfNGyGoR5wLSwdye7XXXc85ztjHSLPazswPU51x724cE4T4Z3snXTfE5ZxNffCi61ZeqPcxy",
  "key18": "3eFj3d1kNYbYbq6w29kfchmEyMMPHbU9ukSg3SZmLvpaamgEmCSHhkkDLofDJVAsQqwtCfFS2V1jN1Dkw86BXtMr",
  "key19": "2335ymkQYXLMNRhqKNXrLb83311GexPiHrk8LtPgGNHGEbd9qBsixBfGedQRLeietZP8FNXT7A4FvNFPbxgdyFZQ",
  "key20": "4ssdrCF9ZQx3ZjqNFA3kzBAwKx9J9EYvZiNgSW7ZYCpA43oJ4Wk4kKkS4Px5gKJcvr8pEsFH955E2pBdDu2PeWKu",
  "key21": "Fvu74aSb5bJJJCGcvVUkQvC2eqWh4dTmVDrGeeED4ca9MM6vHhsMCCvPgSHqZrSidF4eDss7C8GGS5q4DhqBiEr",
  "key22": "pWzxQgVcGhkmaL2X4a656fCu3qgYHzHJaSjQaAwxGw4pm4TdpfPWjxZscP8TUDAL2TET1sx7kN7NSzupjAdhk1Q",
  "key23": "RscVk5kZi5N7znYKp3k8Dbd3hLa662d35V43BFZcdejo2NdsKYYAQtguvZFsJRG7iAT6enyooiHc4xqNzGToXpq",
  "key24": "4kQozrT1XZFqVfLJQXY7YjDoFnaD2RbLrxh95orP28W7Gqn1wHq7eR2vaz2R4Z38oXibPPvUdkrqb2NxyBUHhycE",
  "key25": "3Lyjsa2PpePDu1enuQkCpCnVVNQqHBSDQYN1oBdJCnv2ZQQVRw4qevcVTRgKogVWQCi6uH4e1haEdSTDfms9NDGH",
  "key26": "64WQ5GDRyZ6imn86ZKZV7u7FL7traS35LcvmANE8TwwSd3FCtzbBPvNEJXDWaMYB9BnMBqpytCdi9Jhi4gnjTonJ",
  "key27": "FXTMZZ4Ax2Y7mZYVcC2tEh3nVLkdpmorMSZHvca4g7xZ3nvLZJSVAqmUncLT46qJWdU3jELjcKJJ9UneY44RudN",
  "key28": "5NL6oiARKb49t6AiRLaPbZb2vvJFDy1o3bzU4ygSJXPfuEGjGjDwVQbjetBt7G3iefdyHs7iyxDtX1Ro7mxrKcLS",
  "key29": "5nez1huoD7qRj7V5D5xhWDjzQnVbuEwyQ8yVtC5phk3PjgRco1wavyfbEmTNQPKWEXFN93vefW7hmN74J17a59yT",
  "key30": "65LqjmFC4456gUkWg3uezsPdaUJ8xvfwEfuHcHkxPznZEmJ9NkWh2intHxWK9RewDA24rKzpMxHKw3iHUUFKCLgu",
  "key31": "4mLqjyT86iBE3fsvCX7ppfSnoNqfFfrmZ4wb5eXH3dDoy661hvbGKdrfJVTdpA4BMei1s9yCchJxuKxgR2uvfStQ",
  "key32": "4YNmGT35VMP8iLb8NEVKMxJEctzcq7dYvu2grxnfG9jcAjxqhsfdvJYMurdSxCbsHkdwF33Ta8111SgpmuH6oN9m",
  "key33": "AEr3e6kRze6xavmu2BQTXj6EdUCuvzE7G5tB1uEahDyAbwgM7xHkSenytUyG92BGmnZUod5EYp3fN7qD4FgdJtD",
  "key34": "3gEeRoNL6aBHh328BiBCTpYdvNtVPgAKBxtiNJhucuHEcMrHtbuGYUX7SEtzKbygibgkH1ehYdKKr3cFpWKmkgif",
  "key35": "XdbreypKzT4GM2z4LHTJQbG7RLPboBKy5u71CAjQCMzDWMkLGVGeDTkkv28zVNF7rr4r9zDcWAMVkB8HMYkoCxb",
  "key36": "5W39ab3hjJrvXCbXTzuVewqC2Ae1L1YKQbe8ArugTEgc7cqXfUqVKxWvEnYNArGAQi9JTNHciiyQRHpZx5V8r6Y6",
  "key37": "sEaDPnwhgyhXEBgqimWn9xnG6x45orW4iFRiA8wAh4aSDeTqabw1bRNSGYqhAT2v2NTirqL2aACRBVCaUQFpLsT",
  "key38": "ftCm1XGYsrbckw8qECrXMgTwAuY7ETrkYEJxqmiBHspuxdkovcJ9qpnCkpBigaF7eQm7n6YQy5yEJrkhwcoRugK",
  "key39": "3enpSzGTmR8KvPUAnKFYcwd7B2q3EMtN4fNitti63sWWtoHs2Sge2MNeCwr4UGgxVcdHgbdQvKewpC2Jc9FxzAEM",
  "key40": "4hxiFWB16GPZgPju1yeXfk6sr2evXnXxpjb5euYSa2744QNt9ARMaW2fSzGCmT441WWdqNL5VJSJXBFncUHHhaJ4",
  "key41": "zviskYhbRspWX6QPEBjvj7RcCxMNwvzfdTwuGHq89CoP99eJtrVGgZ1k2ZFL56Ue8P6p2D4YBYv5TjWTNCDFKvr"
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
