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
    "3eGJd5cKz3ZGK9TYWjiXe7YwpACaENFMu4yN63aE23jpSGB9cyHLvnv81SofwzmsUUvV5Bu5F41yHE3jUroRK3C8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6gsabXv8LMWdF2XFhd4v1ZPsU48FhVfoyB1brvoLTPuQNLiYJsVMgPZ21HSiGHxcr8vZjdvCMcL6rYAaDfcYmnw",
  "key1": "2QDWXnrabtnhGSWgrWsypzcZHG6jzBNZUE3C9ksmgQkpE8xSdhD6fQrrkoh4RyHD2XLMe9toZEQM1hGAZAWJh7CF",
  "key2": "RiBrYbbYzAeA5qgyRwQNJCbS7NSeYRPfqGnd2Zyt2cqQv8y2ArQGX6fuJLD2z8u1KZePdJC13cS7Uiw5w52u7JC",
  "key3": "649RpcujxCuAmkY6chh8YURHQ4UxAcpLdNcX2TmKgcKnqNJ2va3jQnnsngXifyVqAoaBSQJm5mBPRxQcPKgLszX6",
  "key4": "3f41HdTpTEyvT7Sc3rvSBho279AvnbpQNUJxVaPW2Zo4D9Rpg8jumtmVVDjZywA18yqBUoV6Eom8ZxMyFrkkSdEj",
  "key5": "4f928GGp38vbjmxd89uKJAev9WXHqzkeQAeRXiBEgRMYaBC6MWY4M3VQLuhb29E4xUAtjBFimTijhkVixCYXJVYL",
  "key6": "2R1tTsr7JynUgRyAsp7YTCAgaqMZR6TQjZDyDtuNye2N2W6YwT9HFnNY5vHutfp9i7Z9Cctw1q2BCqSXAkDT4gJz",
  "key7": "42ZH8s2s1h7LoGDGyJsK85oQn9Q8QGQK1C4myhUa8a1rav9yXi2atun8MWxxWcuk7gp4YvCwKwtMkhnUhJginqnW",
  "key8": "nGpkp7ZSh6yM8tWeLgK3cgxMZXhxMDChRHD9SnoN6VtyqKPEwEjEP4swHcMG9zvoqeQ3hgPBFTXrF8w9rFFZiU1",
  "key9": "22vr1nkKvoxiY8w1PSQ7ksYY4HYSXU379Ry6TYkw8979aY3YXHXrd6cTVQpBFJpAivwjy5yRn6UVymLAccyKgoCH",
  "key10": "CBsvb3X3GoGnzWVA1VVYiW2uEjwHwA6Ua4V1MfyEJNi63A9FSxEqDxzvKpdXKxX5dVYQkbWF25fNgAGkXKmYSJT",
  "key11": "3kGd3oY8Sj3APkW41BXjYv16BmdoLBjPYREffHvuY9HzJhWDDxk6UZvWMLiF6dUaZiwmkH1Mespqbzfcsfesr1wE",
  "key12": "obFUFZPUYCvy2Y1uJJAi215G4bcb7BMbnvvaTheqnomoNouQ6NQ86A4N1SdEHBAU8bo9t5sQ4vA7vs6KJvt4xjx",
  "key13": "3gRMPRkTng9U3ZWTkLBgZBDpnwoew6P9Fy5wQ7UXnTGUpeW7SLMjdzSPXJdJBVk3pRUgXFQBbsPiytnwjbMQF2X5",
  "key14": "22o7SETmrtLq8EaLavuhf6o9AnZDCEu7dFb2My1F4CZCNBK1kiTRfzj7iQdKN73qweDvxH9iSZ4rdUay62YRuSni",
  "key15": "M6nkwZUZ5Wf76TgTLZsX1HqTDTsunGtJ9yamxD2fRhSLXyti6haEmTWxKScJCBpybwV4s7bh1XZ1aj92Sibmxzu",
  "key16": "3ZriKnNqEsVdJaPBQv2gsDUBXbqieqRtHi5Dah8n1XAd9uPX6JBZ7bHhJm5ycgeJ1vNwAFidqYmaUYLdXiWz3LRo",
  "key17": "oLL3CP3jAzfp9u9j2hmrUVdvgoJs3YKtzpmPuFGKYd6ctWWeYw7g8rbJpnbGTA46Hxjp2kUAJLhsvfDfiqksikv",
  "key18": "3pV8AFEeKwGqbRBrvou1AsH3erRJLmCZT1f8GMtWGYEjt4STtrMEwKQbmvwqe5DpC7CjArfP68rtKDPCFJkorezS",
  "key19": "3xS5aX36WcfnEF4LVBPS93Lepukk6cgTj5UJeAdnNbkWZyzoRcZtjtAPcicrQhgJatFUfx5WMMbStGKzBNnrp8YU",
  "key20": "2VEaYdhzMh63JRtcm4MySyfGG6nibKdL226vUcbCVsXRjto2SKYhekXEwgDi3yHKpYvRS5HBUEuqnmEmCVKg3Une",
  "key21": "D64CzdjY9rGjhjZ5rh5y2KPMDVTDUMpAj8L5tZpLk5R9ducdtJoLbZZKmLcyBZPu4pABSkED2wLUXALwEucpaJt",
  "key22": "4k9KgxfL433sXDwJrJVA9pyqNw7RxSA3k8p2VdGTYHsTz9ZiQjh5j67jEVhyAHMrNe9cuACgLBacYogoWbJcPv3F",
  "key23": "5kHegTGiNXjANF21pok1hVCpmjTxYwmDecwHn7V9fhUrCf3EsURdAx21fLm5wTdSydRPMbgEzi14Jcv6GFGF1JYm",
  "key24": "5tZq7aC7BU4QwCTSTVbqr7Qnx4YnTodYFxY4eKnN4zoygbhemBeaceokszwGFF5s7ZrYAyRT2VR2pw8stoFu4Ba2",
  "key25": "2Wwq8JsNnzy9JkSRCaWRJZeZStcKctL4SHUNv4fYCNXcUfq58sBZdqPkyvB93QqjRW7e9VhF7Jpb1sXRFbdNVvS9",
  "key26": "3P7biLoMbth5B6uFTDfsF3kB8yfWC9CQJpjr4zJ8UrQNyDpLoFGjtFvCAErPne7SGZZGdaEcZvFQyKwtsya5LKHu",
  "key27": "W7ZZtMC8AZvXA57KSbx2aYQoN3fTASEKQkBMPc3vNR5dvzuYweANpAAqFFJTHDQUtSS3wELA3mNjjSBpBzSHHWB",
  "key28": "cnieoAUQLR2iC6TBwzyFDna3jZzYqY9y36tTgDefN1yigwUGKSgFTDehDcK4KjbfaWiBuHxwho9fDfYVBVaDrfG",
  "key29": "5wY1LpycPvNPk2795FQyWNLv4gUzRxkFZwvoDGBqpr5UAAoBiUvShDbi7kQGsZcXDiyGeU8XVAbYcFWxH9hiWU9v",
  "key30": "5UzB2Mowm7ypyFxCejVKucE7Jqcb8oLSJ2QA6B5KnV46m1HVmuJVicwM2uxE2yJxmWargphzsLR1b2bQvKYNphwC",
  "key31": "3LoPNxvSU8vCQfhfd8FFHRoeMQ3bnu3VTbtXL63jLQHVidLxyqGYkMAfyZoLdLUFHvft7t9onQRBxPgLaDsUx5i3",
  "key32": "4mnnvpNzU7zBtcH7MZi19KUefr5zL2xZTxFG3xM8dp7vjjCUzJmdWde9jUmeX1FdL8whXYDqDjYopcn53iMejvm5",
  "key33": "2psWqmQHBxsD4uLMVjv9UVicXChdNv8Y46dQyvQtLDkcGVNSjLXcJpJmQSipEbCk5JVc9se41tUqbectkgwyKSiw",
  "key34": "ZKEZNjuHkrE3hcsMSKNhM4xtFisv4AB631wZJxnPcDn9eDeQ4h95F4eE5NcbMPgYBgsTa2EMgxRJca8koM5bZv2",
  "key35": "5kffuvKjjNvURAYrtWFi6GBp15qLPztfumXwWxhw16NqHJEbyRPGB3MaeSXHdVwNzXzXB2VmZPArv6CRNWB6maSa",
  "key36": "5qhwgZEeDVdjLHEmdACMQJgHQ2MoNq34SarDFcNBMcFfotxCvzauZcDx5Gw6z44QKvgbfd6xmMFuw8mG3ze1PFRR",
  "key37": "3JoVb9LrzELZJVHuBbvX4BumF5s3NQprBHq9epweb3pELXfSfDN167aBsZ5Xr6HvqD2X6qH6bcXV8EmFzpnvsZBS",
  "key38": "5kPtsNXetJCfGgetaGejQm6z3Rv8x7VpiNgVfpHv9vbXTy5Y9JhJoDHToty5pMV89e64DndpFbSvdm9Svk3SrZGc",
  "key39": "5Jd7qpaTYRgjngyqCfEzm1FZu6CAZjJK4ek2aKRKAhgvpaWptpYxbQnuuc6rHJrxWEHePPkiaf2zXsohq4DLVZFn",
  "key40": "3AoDYqYWgc1jwhXt4Fe8yTUjQ5cmcHgnUS3UsiVrwR76UCeZYr2BctC76kuEqzGXBoqVbpEs1SMJUMTbuJKv52fK",
  "key41": "2zK9cgKeBQPtkcYXzP4owGt6y8phKhqd4YWZbzWXtq9Asb3RnDdbJDEWRe9idEUu1SqubpbqkFMRWnj5ajdiZhHM",
  "key42": "2uXGuV4X4rPJWztu4A6YK3GFUMd4pmM5v1r5B3fj8oMkzKyzWTgcL4fvxJEgs99zprgozk7TChDznMqGf4Fi5886",
  "key43": "nFqe7qFg6Pe12qW5wNi5fHRCV32FnBE7ZA4U54yLPE379qQMCXawbjKGyQLn6fL2hhNhHHai3H6zQ8vWRcugTeK",
  "key44": "42nEX13fNjJSRxuYCdnDpTNbJUhPVe2q7hX2ULQNvndCj9dYwYkhAkUMzBNBQVwZiWNTyntGuovngiWWed9rkqGs",
  "key45": "2xv7E7j7VfK5QL2fZ9n6VwHnfeefdfKjShjK5ybYt9c7kFr949Fm1jhtdWk5TuTtcdDZQb7CwtrRwgvn2AN7DhEm"
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
