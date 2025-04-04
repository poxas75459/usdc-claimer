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
    "3pyyKsLUiD2sq6dST6Kiwcw9sw4SH3ydhqqb9BC9jRR4Rs9HKA8mVpgyBenTj9EhLqkaXti5YGgKeshATtTCk8qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tVh4FCsXpuADKtJBPyMUzgEJKLZnGqwJ9XkNeFHHqc1GWr3CjCsLNzNs73pXvHRYc3GrSmvhZLvAuehULyhuMZ5",
  "key1": "4WbaHKFMd2Bn7zGHe75v8MyAPhmU2Hcmha5fWKZzmNEaRYGCQYRDbTscycRCMSoHaxeCB2CS855P4T5PZopKmwHK",
  "key2": "4QEJPB1iBPERgLwvNTcKDSmhu5Nz68UhWwpRpjTGdkdGL6VvXCKcreybMBiraXLa2xKZdwcyTJcJs99NanbjSQM4",
  "key3": "QXC5h9UV7uvEdt7XikAk43cQEyDethCwg8dZqpCR6cW9VbBhmTN3vXQYcazssAvFaRJVy9NC6eV2RV8N9hXrK7i",
  "key4": "2VMdLy1dVaBouoCUUm4MCuuyq1QXSkG6ADF2WCFgxM9UeViEA78Qx8pVZcyhZXBwF95TgBC8KV5Ds3aTkCbqeGX9",
  "key5": "5S8rEcMYtkNsRnZunjsY7K9SuXF1yWNEVJccgXgxxzq8EYnkpgCqCsQVRRmHxMgMvc4zbq1DLwND2KHhgmqeqpyn",
  "key6": "2q2hDK5DMwniTnz3pPFoo5Y8DAthrGYW67kg7ukX3VwWfMEqZ61pz7wiGetB7AoKKwTm5YbKiUsitgcTfb77jzFU",
  "key7": "2sMmFZU9Jv8KLqZa7VKJLEqcFjnPEh5hJPDmssLepDU4atVVkz8DTvRrx3tDKD24r1jV3WkF5Ui8D6fp3kgS25x9",
  "key8": "3hp5gYVaEfZCdvVzTsRdcWabPZ7hBqAhnWA34nppuCi7CKBVnPAf64Fd5k198vuZRYi9U9xEz2UQnfMLVJGrUT97",
  "key9": "AiKB2G1LrdMLRFMW7oqXCQbdJzzQih43yWmTsNsBivNmDPTn8YeGGX9KvK4S8KUFhYjLULt487eJGcTDkSYetXM",
  "key10": "4C1y5r49QKdysFppeEgu5KYUddXXTtcrc2vvUSrJAwnuBoRjdMtafLQH29EmapxnLomCHEDRBxnh1iDyt5ZccoQe",
  "key11": "5TmSxaiF3KBdAX4tDwm8AqMC58zq9evUXzENYHrvRoWWZVR9tEiYu4KSWCaRnTeE7kZo4L4vMA2E1BpYpHsEgUgd",
  "key12": "5n6CP7THpLZo2T7fu4NDx6eB2TYxJUup1viHUYnhCbSu5tTy2doAnWKWrFpVd9XLifjtoPwKKntKy3ox66nxRBhB",
  "key13": "5takXkmAJ6G7CCFP1qtA4HePGoEUr4ygYJfRAM1tTbF4khPMYLwMPhMB1Tj8umdKcJTVyfgZt3T7WxGexHyB9MD7",
  "key14": "5ZTFoJj5uiSKmwPdfS4d26oJg34fLWnwvUBtWahw8dZNjfWStHGiXDCfJRkguTyWvqk7C28j5nRqn8x2XH2zF4iP",
  "key15": "bo55sD7ftJcSEXw1SxG4Zerq29qFwJ3ywVzLGmjEC6WzQW4Fs7moV8LjjDsNbV3sBoUc48cGkmvqNK1iPmCdLGG",
  "key16": "619yxiqgzvoEPurvkTtRvuuAi8bjvgBSarNr14Zz5tZ811kEDgmadPrCPKfu16L7N6LyCwv13YLjZFGeJvzQBDzZ",
  "key17": "2DHPC9meo2WQ6xh9zCbF2RFUHTE3M36MbuNJ8Dont694BmXHjtwUmsNjJyWstqtyi4Gqu5EgxVQXykeHhYfSMhDT",
  "key18": "S7AxwopZCEbnPFbavVXQEmXHLHi49FVXUCGWto5DHxef2v5Es9cb4BerAUXggtuSaosv9qgxU2yHVQDXxzWXpe6",
  "key19": "zUm1bs8PGFkvQ5mgy3aRc4NCV9cyYFQVFpNtGqdLLAmuHzJwYqeezZijdYsGiDsvR1h8dC6QySFscCJdzRXzwPi",
  "key20": "3HnHXfqs9bU871eXC47UVzzTvhSyg3BSL73TTQ7fjkiupbrQGcReBonYJJx2NnYhmqup6PeqzdcotdUHB7mfacNH",
  "key21": "3XT9QRoS1f9BSeYbYK7v5KHTA4k6GoKYkJhuSNLLQxUavcXiiZ6QWzYnUcS6kCc3Y8NnmSWd865PBRypursJEyuD",
  "key22": "2nAduvoYmjEnupComPhZaQkEJxpD3njd4uUYdHo3ZFbRKd62dgFGS3kZyJEYBtx3BA3JYQiYi2vtfL9wxRTU5xQc",
  "key23": "2bA4ofTj9cXEYR1guHxDSua9Gf9gBQbg8RwQa7vQFD9BWYTXe3RRia6ofApxVD1YXdKBbkYPA8yKvP5seJQT9snx",
  "key24": "3akc8WBXDceHPVaWg6iQZzMPk7fuGqsfscwLEMsD4v4mncu3Qh4uEjP8R7tmUvZnAr7dkHCJ2pNDicGK2H9wz6Sn",
  "key25": "5tacYogXF9xK9dXNDtyhDgNUTbj2ofKowJSTnGra8X1eSr66AGxcj93bWbxpTwjx5jPpgi7cAVvCGeEL5qaLxPpy",
  "key26": "2in29PK9vdfAoUqwfxrmdzY7QYbpT4wzGBHPEynxAvzQDKx6HfJr7BhnFDoKFAw8gMFjdkVQGFb1WxMSTpT95o4C",
  "key27": "4Wx6fixCaVc1Quy8NNeW7HCV6AV7o5Zft2nWxy8Soqdhba4BFm1Ho2nbmorQhHod3N6gZ6DcFsXEuztceUg9h8Gc",
  "key28": "EjUkaWhdS3BWoycvsxUN8aKo8jJ7hJrC87WEor2AjXypJt9nodW6kXH6yXSDxhJgVynJdwKFJQBpPcDffe9Fxpo",
  "key29": "29WijmsxV6YTV7849JDij7z2kFUgws3gLZhnSukkSkcXgG1KmMyMTwDxhVxu2j3vDMgoGL53djwwK4WcFBMUCLAe",
  "key30": "56pfFcPAcDs952NhyABbiegX8ftEzaKkEazN2txEUpqYMFEweFofEVmujHD8Uho4EUbVZ9RX6jiwsR2Vdhb2d11h",
  "key31": "2SBQVDSkvPUv6sxKKBXvqdz3AnKyVF1pJdeBoCTbCrw8d9qWS1pRzcNMLV5KSx8cLNqZtLnTobSb44E7MTuDJaUZ",
  "key32": "4EHngLg78whCgMUfQVVwyLjwUsecRAVdTrPzMN6WyixeRJHk1Z9hGyRVqBhMWeWiXX24Gvcy5FaGnEPjtbHkMzFV",
  "key33": "nWq6XCcCwhQaJsGeUtY4FK8uURThMhZq4xhfWa2pspVbgxo4mVcz1KEcx52p2PBBPmcKvfPe5F2rDD91tyycmfY",
  "key34": "3L9MM9cfeii3c7XNEfy5CQf2vmNwF4cmQhMXdLq2ass7Y5UzDkKNeYQBBTx2Fm4fzfY6bbv9tTus2BQnQzYyzBjp",
  "key35": "4aLXHiJfZYLR9NpR8r2aRhdDfwSeBvMQUeuLT9fVJKALmZp1f8wv5EofmjGRYKENuHx59DekH64kpy31ftJyRdby",
  "key36": "9hNcteppg1mX1TUGnQhQPTLP5ahdthVwS6NMnr1ht5sff3evx4kXocNXUNu8Nz12HUT7PRm2derNNdxS9idDsHP",
  "key37": "31a8iZx7TmEnQomqv69nn71Tiux75FzM2kDRXGdzuF62GaDELFoiXFG8bRbbTV9jipYE9XU6ksU1WC5pxQg3ACSg",
  "key38": "2xnp3LCUP9rNDYrh8NNnqwL5jxBH5YipWordiTS6KV2H17NXuZKV98GZSLbPqi1E69bDKfjvEyxKcjbc2SeYec5S",
  "key39": "CQSF95e8qFDShDKFRrBodCRPHCYdfRngUPMFFwAdLNRFxDEcFzNuXMtYZYzYwkEWFnzKB5aXN2XARwhfYgCSnuw",
  "key40": "4RWjNyJXZqLy55N8Saq7w5XGDnL7UE3vNzWesUq7hL4NdUu1xd5oTY17JMXm7bHo1reP1FdqFWo3GhM4p79gc7Rv",
  "key41": "5HGo2Dr7aXabW1uVXkrsvNtCo14TdAh3Er3DWaJCfsZHPQP1kofjSpxv1E7ZoFpcseftv412fGNfrMGiZ1TCZFho"
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
