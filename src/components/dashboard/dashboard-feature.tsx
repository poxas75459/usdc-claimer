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
    "2HfVd9H8KyCXsx4Q6cepXDxePTB4JsRszTcYhdrhqMxWYb1ZAyPEQoZHGa43ogF5Z5AWKovtup8zf5U7uWZCqC8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aqdJawUjjeBRQHosog5iJ9vSta2mCNtyUzUBPPebnj82W4hg4vLGWvtRbMmxHHekKeEdxrdWW7jJiEiGsbm52mN",
  "key1": "fUh8uVGWENkTj3sK5uk2k9a4QtaAdxmCgzT75UjEtxGo8rbFGFztZFmUth6qGvYNtczcmuSUrLU4nJkbUSb5cCR",
  "key2": "4tWfxNTyeZwHbDAm7XVqfbyM8cnDdRmY2QctsGYhjN3yQmJmJN3da2V53J6QihV7shBPLKitkqDEbrZz5QTFvtYX",
  "key3": "4dRxKh9zTwXhYtK9LLnTnsh4rGUKdhFgtDZhGREC9MBoEU2FySz7vLyTDb5RWtW4W9pN6tDxrXqmijMLKPmcxt14",
  "key4": "3N8ckHuxsTcZNkkimky9YYeL4ThvG2RGupD2ApX1NUoHdEFcCErNjUCqWZ9wCmH8eGsZPoqRoGcugBLMtt3iBEcu",
  "key5": "2m8CULDtmf8WepJg8qQu2jhgti6iHXatQTzR8psAGCTuAM8RMFaWMR3uPHPAVLbsXSSvsQ1J6oLP49t9QvYT8EYU",
  "key6": "8PCUfCMXV2xWDEnsfqS8eZLJPkZ7EUpQJFnvb3tvmBkJHhKx6587qmb6jwY9jRFcRzN7WvjSHE81QNHevA598T8",
  "key7": "5pyF993gpemogLYy1sjeGvPtUJkd3aHMYtLajd8gw3BjW7hVaUdhdWJEVAfQB4gUrSJYmwigfjv6XzLUy1PvshYG",
  "key8": "eqxpadRLxX4kKHTkW2WgBhPaqHPmU4ertf1bUgq37yukwAgyshHAy3ibk5SfZAccLB56D9dohfecG4NargyS81h",
  "key9": "2DRDR1eyeFHw9aoHyWmXuFp78KZzuQsyKqj9WEt5t3AmNepsaiLG7fp1s38J6ZQ998kcLFwQgYoN57zc3rDUtsuu",
  "key10": "2Hg91fvwaVFWK1ccobdNmtp9P1yW4f98oB1ARx8vi6pMeJUjgSBzuUnQEQRt2cCrpjvaFZ4CTodVDdiLmuPUyJ9g",
  "key11": "5RoE1hXKUX6uGNNUexQ7F3LW46UcvWk4T7iYpuCCvBw3zmNNbiUo4z5PYgDXujrnP7i6DQghEGkwusVt8MGiVZWm",
  "key12": "u9Q8Gjx6YGbfxHSmfaj8qepC9ELcyaPerNr2XjUVWR2qLUzddapTpvCnaJeUSADFHgJqEDfPRCc5AAVbLVr7NqK",
  "key13": "5eA6Qhfqae8QbDoFXV4Xifr43VVLhmfkN2sS7xeFZLbFspz41RPaj4SrMEpWh95RaKqMzoMaZPwnPVnzPtQ9i64E",
  "key14": "TCwy4GrNNPmMDAaZAjv4fCfpPSBfuNoVHe6p8thJ5KcHez2ThL9nruAzC61HjC9vj33JV8jRxUL15KBD7duu2zS",
  "key15": "58fGmTuFjFuNGEn63UmAv2PmyBKbdFjXhJTm6kQxnH8vBi5ExT5VT9nVMFcntCS352Pv6Zi93Wj2uxitKLXbNbtY",
  "key16": "4WPXVuUufe5p8TYUe3UA1nRJir3JjgPpUeUyeCBos8pqwpPqZAXJJ3P1kVBmNNabAnT8U8srBXzS7amkSRogLVAF",
  "key17": "3bn7jMDYS9obuyhEHyHu3mVufY76urEmW2Cf4nRBJNKcG1CucTa6LoYWvxEVRccGbmjcpHrjndTL5RtvYHBwYHsQ",
  "key18": "5bEpNukDQNPYBLxUndCu5KUQnyLSTm8BMreeimGh3DCJPguyHTPDjMtzE2qvhhMXvEoPvkGKC8Ho8go2iQ2BZGr9",
  "key19": "4vfaDzByHHWSkkrKD94Nk3pYhCNA6cm8nCqhGrH61s72cpZivoUonfkJLghwTREDKwNUY1qZmw5AZBx2dCd8dDbq",
  "key20": "2Z1413SYFQyJi1rLvEXbYTn7EhapP6aUtL64sJPfJC8FQHNGQeBnjknLNaCUzpcC2qJRt18s4fhbKtgGwgQ3FHQB",
  "key21": "2EM8komE8oxUDJjx4eGjggmPVUF5Z4ZDt2Bc8nzeuUJdeByMymkfYYWf2cFk44jhn6jsUYrAi4q8Pe284ZFofjSv",
  "key22": "59AeNPnisrE7LnfdBGda522E8iUHxtpmkRCxqqo8L969DuDYmpkit9gkTgZAhm9T8WKa9CpxJSPFUZvm1f4Rd2Lh",
  "key23": "4aQkh3Jv7PhzJBc6DXRLw53jtJbA7ZSsUm7rpPocxDscwHfpui2KffPRc5XMVMQtsbuZMLnttexE3MMpzsgXGUcg",
  "key24": "5GCfunc9YQbccF6mgmj92PnqURqA5RXJWeJBVV7HtCjzKq5YEpeUxCqePnEEvGhEkB1hX2mFcJTHShfyWapqGTdz",
  "key25": "3gjPBaJfDtpKZKP5J5v6aCYqEtjoLR54FyLYa2gqLUMGXR5XR2ZD8vUQWHYbCYyCogZ2SwvdoDXZSEgoYLiSuR5n",
  "key26": "36mdzgSGcc5WnASMsCCdTihekgKdbDpvwne46NaKPQnTdsGLjeozHDfh5M8zRjUAnqXttdKzDs2LJiWTdfJByAM8",
  "key27": "4ZAct2pHG9cnsAbvubPGQrREAPobMM3E7FQziedSJAS4dw9uLnuwsgCmrAHhUm96coEp2KW9oiwBzmJStjnrWLLv",
  "key28": "5RDxCsV6oavoC8rrr2yhWCA1pWdf1H9zYoWc3ZmHuhb5sweb8nJisFDYMvUNeWaKZ5yJApyD16kUnDNdsm3XeCxi",
  "key29": "W2e2Xj8LjhoWtPc5kzRzRaN76YxmgrZEGWN657f4PDx8WtvjtCoRxfBDVzL5V1QHv2xaTosUf9ePBCJB6X1HPdh",
  "key30": "LWLDrNYoCham6eTgddkuBvMrSh7SoMi61TdooAiUr9dgMcxpWsHR5YourxPo7sq4VkjSiP9b6SdLYxLwxf2tdxg",
  "key31": "66GEq1ZZmhWE9WM33tatfai3hr3zR3p98NX6jPrCnn6smcTzZb2MvJNoWw5vPLEMxAJukGV977GrdgZxQX36yLFh",
  "key32": "2a1zs2D2XxqNkjHqKGgy2uxi2p38f9p6suoyU8jFSxQcqSqUQSYiTWRjedbXr5JUZ1tfopLfCvkFDPZtbrGtJ1iV"
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
