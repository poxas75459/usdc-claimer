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
    "4BGc5HeyPbu7ahTYxyYfhg8JJCPZ3W2xPUsqDoAE7AfQFfiVN2pVib3qxaNCE1daEEjxScFxWM3wavbbK7pCK3v3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gs8Et1QvKyQduK91RtEx2BAQ53G7a5r7JbULe55auUa634R3L6V41d7zoEcWzp6J8amZGjkWJLgUhfGReaD1VMs",
  "key1": "4U3cFHH7fmeNqcHKp8U6pqKZN7Fx9YX5YLZKsrZfYTYmPGoCJqYvn4wfLTfdyoW7HDs6V7eu1yz3tDX1zhvcmjfT",
  "key2": "16ULZBeQWGuV65HRfemHTUUyQWWCkpyRhmxcQeAuS68paj7ZEDSmXcec5hmS9jAZuK5uGUXCnW6DQUvtxVT9HNZ",
  "key3": "45LuADZJ96kRWSeoBMbDjkPfwQEBHaSHgY15Ljr3nKZucdXfw4RS8h18rmK7bx5riRiEu6MMUZEmqmPNEkTLMPQL",
  "key4": "4PdzH6d5VgEtAkDenwG4Duw37uGFjPnohaiTaeJc6NESrok5WgPPmZs29q9ZsW4UT295NcNH9qQyxXZ4r99fQAsM",
  "key5": "5rWmRULwX6LGLUG9RAySPtBU7BBszB7qPWQd1m3fWJM81C5u4vrCTLUq3TN9gkoEJKFkd39XsiDW8ecRSTa5q85n",
  "key6": "2Gi9tJQAQsMmAwPWbXnZostwPn9GxzckJS8riEffwqGo3NhRRHb3ZsjyH2fH72bsrCNS9kAXhyy8iZmV44jjQhor",
  "key7": "4zkip7mVNn3Gkowwp8g5gYXvi7ye7PhA8ZR2YX1b6RBnpnzcEcLeR6Rpq32NYKZN4YDpnjDy3Ni51UcLCBrpmJr6",
  "key8": "3nhMy8HFwc5aWH1q2rqyDWRFd2CiHtxtdJyTZyfyZrMiJGesro2LJffC6vAr4h5RcPdpz4FJ4ycusH9QTA5Gw28B",
  "key9": "5aHkcr3ypEt3KQJodFKn1wcxDFqZnrA9nZ553E7dD1FuZ5CAPhtuGtVCpQ5PCvv4v3zXkURDBTurzRztPRZhjPk9",
  "key10": "5wCsYwF2yHKV9dWjyfAkqfwEJL8eDeniX8YbeEGajUNxvbBPptjypELMbBEoTDLJG2iTrhJvBovqM7unjffkUref",
  "key11": "5vwQR1A1ZdQoaAcfXejj3SXeigW41v8PSUF5Em2iKkN2PECQXr5vU6XyCQA8bCWSSGZP1QPanvsNE8oDmtvuc4L9",
  "key12": "3DThoeCapJuxokVhGEY9ekCB6cLqk3tAGt7URhLad4BZ8mvEU9J1oGgsvFerPaXhNFEHuXLkAhL1pwpWweqvv596",
  "key13": "55kUJNXcrMdRPFymdA8YdRoXdCZHkPR16hpCzTRcvxZQzprS2CmT4AY3ZAHFbvdjnGu6NGtDxMFoisiY13Unkv26",
  "key14": "KF1Hp6f9WK835qqJF8XoqBD4y3UAa6LK7iBTDXs8DUfaELwz6chmcW81pm8e4JvgjhMVsiXzbwUehS91z3FyvLu",
  "key15": "4xCCNU7ncVSUJDAxEV3zdtbafkcrwbxTGszBYs5FQEDHGPT1W2Nq6x2eKMRiAerrrd4xZcQzPM4KdUhfTdyrYDs4",
  "key16": "5nYc3vQorfpVKe2syu6Bbz8zbHCnaipfaA7ySx8LJ3hcrK3rePL5io8JExPTxvatg173SzMQLHZpXyRnw1SYvQmo",
  "key17": "2DyNsL2jsMRPniSxPJJjEvwohXi44R2CrmqGWohDcRKi4N6KHyDrZjK8Wc4roK4NFH5MYuYJWxn83MLerLRB1pt6",
  "key18": "2yTFRVqqMRiWo8aVn5YpM8sVXkYjkSmDmrz89C6mSaVPS4DtDLyC2bYVNjsYfjHan1BqX3zc9gicG3zTUCFH5G3H",
  "key19": "4Sb9PRUCUVy3rLgkAAwmLYbU1pxgkiA5jtiDjDLPzoQzy4shLReiALirfccY44MUxTcCusZNh7RV6QaNhaudawyo",
  "key20": "3mdtyWpnJDQxofEYqy5g87VwjSoB6X5VGaVFMwdA1AdQFLbC3ZLYkHcwYoNy3rkiR5yb21VsAf8cpwh1aXJvThqK",
  "key21": "2F5LfVhPL1yz4hMQjaFt4H9wGFV75f132Gd9eocJze4wkDC7YG5uUmUVZyJrbrzJX5dcyK9ZmsBbtRLZ2VYEfaFN",
  "key22": "rrnAfENJUcKspyPxGqnEFCMRqCZQPRHaBNtbkFN6k9ompr6K3jcd1dHPDo4MaLsVPKF2PjpdQ8N2mSq49C4EASK",
  "key23": "4v7ywkEaPsBrgPysWwNe3GT3umaX5hoApmteMz5JKSc7jv5iuJzkR2AiqJD1qKfByVMNiNQDULdQUsZ2rZzjhk1v",
  "key24": "294Xf8K2x9fyFEU62K8p996FHXtofFpaL733e1XCEVGFdDLzHsFWLdLRhEfGncUsb2abPsw79UHyY8kVZZQJe5rq",
  "key25": "1uLysQEA19XEkMr9ecoN23ZULo1yJ3aFwt89Ks9QUKnLHDnsU3yCz7qoDp1kEe8kyhGS2CbzAgP4hjfBAnztwBm",
  "key26": "4JhMJmhaeJYRV3rPY2c3GNcSBGHnEmQb78C2hTaoACNmR78f9tKCJLMNY5gDn2JNRLivQjmzEdRjG25ghXw3gaqq",
  "key27": "2TgyuBazRwTRviwdtKKwg7pWpoYQMmYP2zWYCuJ3LWPqosp5opeeNJCjHo1s1WkY5FYwxMRioNqgaTFciMx6c6ud",
  "key28": "2axzqwEf4o2rR144P7taFJt1ecT5umDigC5N9n5VZ4KkbLSVcDCwCmHzEcCwpvwzt8m7zb6mwBdct57uGFqxdPC",
  "key29": "39rPFzPSTfWxUHW4Meijq6LmBrBSQ3YhHw2yusqMFA6twnozLex6cmhMN1DhSSUygSfNgoyXKXkub3eSH4o68xge",
  "key30": "3SQZm6N69xQXJjaiQkhGX4rAyik9o5JbA1WjNtPLWjFem7zStFeiCpie4LZUck3C5agE32Qu9pYD7LKsmxPFskrN",
  "key31": "2xNbq6ndaAgvdNguLkXzXaiPEqRPZ4gLrZYMjfisnQRcd8HQ3CX47hWVyv6Kn3jhYSoacdQ4enpwBJTNrwt5Cmb1",
  "key32": "55FZ3GkfHxg9mU91t517TiAL37hP3ozRwo5XV1cz24KJRgUrxdUmDTua8JYBMFgfugmW1MRWEEv6S9g7CXFFNzbk",
  "key33": "3eiXNdV3XHeb9yv3YYTfqqJweeVR6RdCUpQFx2f1LsNtVMo3vJZmH6zTsmvQ8WA4aGpv24VwxuxkEe3AEwW3tZUN",
  "key34": "3q1NJ9BL3KD788H8PT6Z2SLwTv4yCLwBzHSHwFtSN4rBpWjyb9YbpPZ41gfxV2F3tA8jy1h16i3PZCRjPJt33cwb",
  "key35": "J9Pnrbi1KDjND6FrZjT8yijoJAsH1DeXiteKuF37ADffZVELw3wrvinZjMxFd4Chr5ba7f2muXy5Mu5jZGS6cpA",
  "key36": "34Kr3RMMdF4ZTvGRq3HfadkmQ5CGGo8sVrmjRCfHPcL6UgV6SYoywEfHnZHPJzrMry8zhtRR9gS4Mv7v6rGha4tu",
  "key37": "2wU2BYizhLCG2iCecZVdLGfubH4Vd27mWQDVzhTV8gKxqjNRVX2TJK825muL6Y57vbNB6AgQZ1m8eqoUxpXAedLJ",
  "key38": "5tw2RzPMmpjWePL89rkoG479xvfmKHS36RdLpZVb5RGBGXDDzkqBEeeXbPtvqaT5P5AVPnG4nWCzcwZ3xitqzXxB",
  "key39": "53no81mTDBXdcTNp63UNiVBtuLov1QT9o3R2YXZKNRnjL4GSHZHZ1XV9nWvKYFHhBmHaDLEgJqmmqdJKrgqJTDja",
  "key40": "497LBxCnVnX1vpyziBL7HiSZRe9joFWfK9QX9sZAJ1k98s8w9HBxJ2dbEySrvLAmkaGW7juqB6Ec1vd7Ki8niwty",
  "key41": "2cfGajpM9kdx5BhRm8Hda2jWSAjGhbALgCBV42PBA1bwoJgy1Uz6VsyMKt6dJtpdUYsMaR21DVPuNXqQMTuRF4Tb"
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
