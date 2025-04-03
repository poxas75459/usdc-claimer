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
    "5UyPMTKqiZFpN8cwiy7Tj8Are5N1LUfv71Fip9JdBxwqd8EfTmG9wdaKkww5LBzYJUbQeHuiQumHrLfnnGepEZrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hMrXjY1mFN9cWtMTaTF9vZWNTE2wG5k5GSnbceXZ8ZdAKfNhdnnX8wGqcS1YiYrbpm6JC7NjR3bXpZC7cLyLYC2",
  "key1": "24RfawQ7G1q3wUNNvpYSfWRpyF9zD26oNtTLfW6LJrzdMtT9oD42HkSqByJ18esRgjfNRJeFMML4iaSXm7oEHn98",
  "key2": "48RRMSw5ufwatXNURtwdMej5LPYzxJpqUmiwQkK4u9bdVYxAn4GmKREjb7Q2rjNxGaSMEN54NGYbUBBmzSm2hTVY",
  "key3": "3RpF9uvgEwHVnYSJMaAAYYSNg5C2zNNjVd5Zo3jgRwQgD4Wc43smeE9wD7i62obr1ShW7K9i7z2fKmCwwYh61rw7",
  "key4": "5AmD8UEbSN4M5HPCL7HUwnEU7iZdYK4PKHVZminp2rDSvBbvhkcmqQ6xfLJXpjLBBBYLWBLNyTcMdZFArXLn8rVW",
  "key5": "58wq8eCnHj7RUnMbpZ3zHfRgmk54LPLD2ZHszhkxZjwwKhCbb3zb6Vx4r8maxX5fMaDwQJwk2yQdVJo6i92WFzur",
  "key6": "4BxypuorNLAafnzBFfPzSU9uYgwSeUBLrPSkBiPjs6vHWEe3VC7vx28A6Efo4npn2TfMCFz7KZGzBpcY27xnmdK1",
  "key7": "4ZA7wd6yXheyoepbMvUQFx4j2a4ZR4Hje3wpbfnmGdTtW5NrdQ26LwPwPsJVC5geRfTxFX1sM98Jrya6JUQ2M3Fk",
  "key8": "TPLh83r2mro4RJ4T7cFscMXXecQn58HCbJ81onrQaVt2QL22bim3CGSaFqvJbMPbrnKhPqGuyTEmaRjeamyQXLn",
  "key9": "65Xf3ny6cWrqNR3A432doNLZWBSchZnxhF7Pd518MK32ZEN6rn8fAnjUPkzKEsejxDYcLDCia5auYdpYhJQZXLi7",
  "key10": "3tq5LbkA2sSLj56QuGHcYdgBsDaSfnTw6Nw2rg8F7DqoBv9jQ78ecr2XBbHNRFWC5GP6ZVaBeBqnEXRscLVpKq3z",
  "key11": "2DeNV7B91XBDGifuyGhHqmnCoMzcJQKy4i9A9QsuAZYvAsQWepHRtinXvqspAL5wEHiKANsGYdfKxHmnXYuWC7ao",
  "key12": "3HLF1ALXM84SVafhXFQagy8JzH7zi7YuewWL6qtuTU2i456Ax5fZC6Ni7xdqELiPJUFqckCFnXcZ781Lafqzg1ey",
  "key13": "49PRaLZbVYGxjeN45zZ2HzRAz2NV3U4n7eVjiFgjHMEhFGP6pY2iFmukvGLNGLLYCLDunQHSsg3tEVghMPvNQscG",
  "key14": "62xXagaDNuSGFBHwSNXtwVHMS9Fj9QC466wqoqqjJgfiUhFXmkLszdnDaXiGRbP6nGxrxp7LuS365G2mbZFGfRqA",
  "key15": "4FdgoeW9DHArj338UXMd6ehzi53tWBafnbgA4uezszcb3Vcq7pGmDbYzD55baNkv5MPQoz6uHEcxjoo66RYbi6GE",
  "key16": "38m2UKateKFnn6fWSgsckFbu8Sorkc7xZgLNxnrmuXDwLfXVWJ4ouVAeVGb7Cq6rZvZjxUv2c9Nn4f2TAG8zBu6v",
  "key17": "5XgHtJgBoCe2RfScacah5z8VRQWdeQNrjkRSRirCSJ3cifGWqsoTwmzySZ6svgqimAnoxR8cuzpxUhNAtspU8hMH",
  "key18": "4ih2DhFfMSfiEZ1Mqa275rvBoYT2ScuFdNEfCzq5Zmi9YWzjPaRqFQSaZKbuaXCdTT1YBATKAL9egg9NCt2vhimN",
  "key19": "2S7dMEALKMyawXDBimSJochZ6GuH9LXnmZ5TsP8WvtNpQ4jYsS1NrB5xtqTMNKAedGtA6yWkfUh4CWzscH5HAbXP",
  "key20": "5sYWpH6CpqkH1phZKfFXBcYRoUxvu9edjapm1mSbUD7t5SvsuxyQT9DEvaUmrMriAhyapz4J3XccT2KeMaF8Rfwc",
  "key21": "7jd8L3NnAUwdDvZSuE88QPoSXXsjZr7k14QUfFotwsJiGjgKid24FS6cYYcGf8o7xNQmVtMCaNCMFBUn3sE6Joi",
  "key22": "3CoJyV6bqJip2HYEjUJYvtYgN6EuWGHpteGQFs8Jzx9JSg2rfMRcxabYwd6hMSMW2tpT7Y3sNLpo83F6C7VPyAS",
  "key23": "V7oDi5HwZ5GQk8pQuzkWB9KJ4S1S37XxXeeWHxTTT8P8TYstAESd3oJjewG2vQ2CnDtJF6YqMeuTdMdZeTqpNng",
  "key24": "3qymtHjkmDtfzoWyxAAnkhoEQoq3gFTgiEdF6efJRgeyq2rQ8TkL6fWM1ABPPiobUak71Wq4Ub6iEWmfbZieLwBq",
  "key25": "32Shiy8sciy5iLLwkSCKuB82X4JFm8Qod7r3oTvZwkqXEaTiX6t7vBj3MgynZfPANTzMHo9z52X3CSvtdJ2asfTo",
  "key26": "7K3K6W9MgsNNPot4reZbR2Rjt9rqUSk6fE2ghyS2e6Wz3kBnt6LKjKFyD4omv97FBhZ7sVdfNxk2jWwrQsPR4Ne",
  "key27": "47AJTRRod7EFRAoKRbxFULyTxD8uWY9TYiXhG99XyUP5wDggH58GwC5efSCE9sxsM31MF4ZTd6K9rGmUTa8ayDff",
  "key28": "2pkCWSyDLXFNtvm6YajuGNUK93XouEwGaPZ63TqhjddS1fyTnysqPpWWvZFDqWdQFmWC9YMfVCzDwAVKqCvifCC8",
  "key29": "5Ejja5aW8DhzCVP2BktubhuuzRJuw1mdZacVdZTt83Tt1YHNnRp1u9mfJLaK7fTBMM7T4npR1VdEMJCNYGXiG61s",
  "key30": "345PkftP8zQip1j8zQqX2NPujEkA6AgzB95fuS5VdboEGAV6oSG113dEZBU3wv6G83CHwYNra7CGdDy9CwKR7Smw",
  "key31": "5Ww76eahtLFZDpVsUyoYYtRKHXk4gnaCULd55k9rWdhKjR3wA1XEQDQ3EqdeqJ539ZBSvJTEi4AhS59CCuaR3iN4",
  "key32": "4rXkNtm5Ap1S12aTt2ewkSwv5z9ba3EZPGksfAth4ZQjjNgeXQDEGKN43LMtx8ugmTAWyzbBYBoFmjpucaA9FUoX",
  "key33": "4H3j65kJdn6VKrMTqG4WixU852pwRs1vHzkPjcYaYFWW1drGWSTk4aeEdqmVxrrUwBE51UuF81ZLYMp4fPpyhriC",
  "key34": "5ZPPRtTyn3mrekyMR5KZVy2SrW3Byu657j51fgoQ72U8qq7YxTxAWMvmLrVtwPnyGsuruoi9oEtuaqVfWD9VEDqd",
  "key35": "33MzXbkMghPKGW3KFaGZdwm1U41KbAj5s1SZUCKSE3TJSqVj9cyD7iuCvivc2YpAs4kLwFSWKjAnuqGQoCvRH8dJ",
  "key36": "5kvvKgogFLsva4KTBEmuhYZGRxtrQ3w7M6QBWVRt2eUz5PcciYyoU3AVKsVUwX8in9ig9AK4mfcpdL1mnqJ7BtSo",
  "key37": "3akUSqD2iSqcRzH9uMkpCudsR2Wpeygn8U1YyU8q5kYPW1CExkYZkCAhMhdHyxWEmQmiDjZfgDbwjcuAN2pmPfHG",
  "key38": "3aPG8CHQyS2H68HmbtaxyaCCAN73kV7ohESxAzfUcy8tFhVJ5XmUhTrs546G4sJS56G38wJj8C1Mu6R5V5E5zJbF",
  "key39": "2zVtobt7ic5qr1u6t382M1dJ7qnUBL3PZCRXioFJEZrBZ8Rr6AyEssqRtFZ7ju62f3ZGxcGf2SxqKWao2NKfj3s9"
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
