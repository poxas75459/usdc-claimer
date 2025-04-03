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
    "5RfoauBGvkiCEJ5ypqjXefq1C7sQ8c3a6HkEhh5epRt39nvbUNQC1yg8566m8Ct95m1FogpDCKmJdyCL7yZEidbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XqxfMis3DAJzya5MRH31i74dALbyrrA1jDzbWDSZQWyHgp7zwtQzSsJcKgS4HYAPMWT8BShWsdUiDWavk2nUCwq",
  "key1": "5TMjg3QxVKqZEgLoKGQWTeDt5US2LQRpkJ8D72iFyxTYB6DyYTyV8Mz7EYNjX6iicuRK7FYck2kStYFCPuk5Kkho",
  "key2": "4T6EnH7MwLKp5kqvQ2KMrnAQMmhsKcbUqnw7eCiNiTrK8g9UxDcXEomPg1LpM1xVUcjiGFozcwisZrBWR8veqy1a",
  "key3": "3nDGHmEaoQNZZ6Jx8rTPezPyFY3todScFHmMadvXYHxqG5L4uxVtCEm4c5fQP7m9sAe7fhZrKxBN1zqZ9oKchZNs",
  "key4": "3989Y5ukZKJJNfyAs7FeUKzLxYHg4bRb6zEMXZDoHgfsFnsKq5VizmvHz4qGUEqHt1RD8EznkdALTajCy6x7oFBj",
  "key5": "DXwGhZvjUoZvDX2T9uoRJQv5q53rJp95SbmnJ5vrBuLkQTZgLWJTrapgErE9eoBy4F1RTjgQoeBRE7QvybPu13x",
  "key6": "2q9RdHgho91CNFHcjwfNtjfeYtEJwY4zdqXfed7dgMiW7WMuQ6mrBp64CcuB47njCoQK75CZqT9J1jBsGjT4hTcG",
  "key7": "5ZxZsWmGsWRPDhmTdmzD7XTb51TUddtwm6FJpcY4Njz2GQMc43bMYft3ZLZK14KpGVeBojkJ5RaGN2GpAuMwgDeC",
  "key8": "5xFhdBKtyh4txw4XykPTT7TfrJJnUN2Z9pjtcdEj3y5Y9pabRR4PTgB7PyRH3N4xYrcCBP45RqcS546DXNyZh67t",
  "key9": "5gCvV3vMD5a2jfyDGAz7wY3LdsNGFb53Tw5PCsXuvDwc1Qd7KsHLabX18HHfqVtX5aEu321Jb3Tasw15gcdVyPwA",
  "key10": "2f1NGDfKEZ4AA6ftSVCo8XC5AnrcPSd38tnCrwehS9xthseR6xfg4F42dEnz2CfZYAagsWCoa4yuTWceaCeNcPgp",
  "key11": "51zciyF8f4J315keKQH6pDZCbYmzvRNmtKgtGGAxm6J1frnLZaKhf8vvVp8Uqd2D8mzcySboMjchmJNEstvJc1Rk",
  "key12": "4PSg2VuPAusyS3TcLGkPvduFsY8WRopXfzDjswPJUNx1oT9knGdq9pgtvHoz77PhbzaGBQc6cjcDHtM3xqs2NMVi",
  "key13": "65ccmAdZtGTEHiM1ikm9EpSCU4534B2FQLeqmFVGxXJzjjUaFaiwM2B997wUWRQWxovyW2T5Tmky3bYAmJyMtdLS",
  "key14": "3AD9jRu9DFZPrV42cYPaPqLoARM4xs1TNwX9USgjTHXNbKUo4rT5nsPL39XKL16cpQt8zdBLut1x5WzUdoEubNtJ",
  "key15": "5f8aLhqNwRQuLoHQz4TAD3gyYAeUHBJG17ErkswNexkKHPwu3XYQehb3zXRV16LYNQy3PFSa8Q8HA6iBV9a3JKAN",
  "key16": "ZC2ncS9n9c5qbfN9vrPin8oad9vAUXYjxFwGgBLfj1Nvh18ksVS8EbuKRJHnT46cKhRuL4KxrEv4WesAyXGvYtT",
  "key17": "422LTJbjHW1w1Knno5jUcxV5f4veG7nMBEVR93rZjnsYEjMigipWFe8VFyJpBcKYHvbjqNzqVT31GC4pCLJ4BeAo",
  "key18": "5zxjEgxFNB6YPNHYnhtMWTQMruVg42RKPHmranymTJ6hYWaQmaBvCfPtPUNguMcsWqsHRpQV2dwMsAC9jg8txZFP",
  "key19": "2Rh6WtHKn8PooXeNSjQT6Sdks99djazocbbBjM2tZgxVLNd3AgCgw5hCCQreqSFxm8s8LRBtjeot5YtL5Msx9von",
  "key20": "28PeTsB8nTDYj86a54HyyvNCMGFWVaqMZ5yqEZqCA2wsigdtM312djtiKJwCyrp52n5Qt384WnG2tqN9D3RXmrM7",
  "key21": "3NYNHXujerW2z2jNoFjMewWZXeQTUstLf9jyKNN2ULaMdWEp78aTNQJn4wi2PtAtLg3xXzk1axr9q1FkENcNFBck",
  "key22": "swReDt4rAY6VPqGhVQBZsimaK81Pmbw2tFumkF4Z5wbFmFXXMSaGLfjscbpXh6KyVB3sKLpjKcCh5SgdZqsPyz5",
  "key23": "38QTKkGFbVKhWHqHAJhf4hu5Vbce7zEqfoZWLGatR7vQrF6mHomFgjV89B12NZcJrnwyWMMeVksYMjQLyW1qc38R",
  "key24": "2pu4ynxMCdb9P6yRQwCJTpwcaamXKeVTfL1TQHGLg9LK2NAiWyEwkhVJ5Cknr3uBw83J5RWZipWorDGD61sTXSok",
  "key25": "5fwZKRMmpMpLAGPbZQ9iftuGKemeXbrYop1abq62Pr88JXJEJDqSVay3GSmaYcDru4xLKhmKivtnbb918aQZJoUp",
  "key26": "46bQSPGhnGpt4b4genQ6MEAEUuabNyuoWh5jmG2E58TwsZGtNGugNCYF5MSW5c8ZLzcjC4PkaURP12EAFT1MYL5a",
  "key27": "49BACm2Td9TXdqikytSite66u2gPpj3ZJHmXKXn7azfuPhHd7RipukLcfK9M2gGbt9MxYqwe3ToZVRVb6TRZEiXG",
  "key28": "4s1oZSUTGe5xPqW331Mw1516XwMJ1g6rPvhJZQndRv2v87nKPhXSDU3igSuRRSCnYFGQVjrzmdRSeoug7c1kMjCz",
  "key29": "58njdArm2s8maeNuXMzyP9D2EKBWfUC74jF8fRo9PvYbeNnYWaTtb5hVtrQP6Vz6fktTonyUoZbyobLVQyg9AL6e",
  "key30": "5kc7SEHvp7JG1m4v4pMu4LFBxqsnGhwKfwE1Fugr4TNs2DwTfgUyvuYuMATPH9stfx2SU6iHsUpY614fXCD4N7Qg",
  "key31": "4nJadxmwZiPNDQbXCfYuPxVyXRUeCvLAE3mV5DnaDTktcvVWDGe1RzbKLQxmAEhVLFv2tENjWM2tBRPpFA24UbPA",
  "key32": "h1mtWvS6Qfo3FmQykM1WndMCYsr6ANiTYdMaPa5TrsiWeCL8vmarCpXqtLPQqPPRmDYzxGTHCS4uJiFB1qdcyZM",
  "key33": "126i7QNzaxonuiibFFXiiyGj6tR19BYFecdRVkpjUH5Kvu78eb1yCHNcfTPNAfTy2J9Wehr2Hrjvet49yTTh4BuV",
  "key34": "4v9aaPMTKzbwnsYkGTJAyJ8Kkom97aVtmEvQGhZVEpLqnnuRg6yU27vXbsMPytYvjNFRjxRk8Th1wx2J55bJZJb8",
  "key35": "3nhHuzHzqZLYVYiLKMQhzwLevazVWQ5VrRNkechpLT19AvLo8Svdr6dJT7GGM18HyeMUm44Bq5ztZUX5w4LQTp6",
  "key36": "4Ei1ubMZyKK8rU4GsEGm4xNFCPQEk2ZFzBXveN2S4DLgpBY9p6fTPXFbjyiMoMmn7BWTrwFH7f5L7HaNGV9Fz6fQ",
  "key37": "uX8cfkk1upF5rSYhvmZfTCY6AMemgZdEAnLPAU9TwNZmMHJCVGAee6XMvXYqbBDbb9TXBc5m69wwB2QNwGG56G3",
  "key38": "4haAYY2sz5PDCkx75yDKQdCaD8nuHHhcxFDsuBNhUnB9RAVwW4doNEGtNRHReEhBwcqnj5BuWkpYxdfwxFXNnYA5",
  "key39": "3ztdBstgxTKK8pFJnqAiEqQvABrrSEFzDs3E3V1u1thegaiSLPJq7EGv8UYUixiB9eW2Hw7sb5Wced2DyPSh1LgX"
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
