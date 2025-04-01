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
    "5mcLkDGN1XskLV5DwAXqtmrcaNxU6iq8jyTz7qVLmH2QEsWcChru8Y84HnLj2CHMsVHmigiL5zNXLUe5jR8cCwq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SG49gPsfp7nZHGWp5SBV6vh4VBevRnURLqUdQvrJqeVVVrGSmwgXZ55t8KM7RM4YUBvejKNpsMmA2wwvSDFA6D3",
  "key1": "4Bcu7CEXAHrhDumNqpUvN262hbU4Cu7cbNTDb4bTZv5Zy3QjC73bznojQ9dsovswxWx4sZS12Uc2eQbrAVY3Us2K",
  "key2": "sY5pJiQk5E2CdPvdVJwMHCsGyzU8pdZ2RA6ojJ1iBcoT9F9bg9S4EFDExU6J1x7jzndCn4tC8nLPA8AEqAR6GF5",
  "key3": "3x39qLMLidqy9X4ju7ZJLydh15FXxX7BXmssCArAUADpmLaYij8SG1RrTWTAdvRL7chyPAVDnkqmhCE6wcvLfDbW",
  "key4": "8i4saAheHikGhNrmLKo7Q7F1BCZvRYHj9i4dDq6ru2opcgadENKkjfyfCECJFQkims2SKaaDa6R7mxNrnd64uey",
  "key5": "3UL8KRdzUjkEhx6bNEdAXNCsGMxxgdueiuF6uyCD2NJucvTgdLojScAmqmGo3QvxZRYNRm6BZwmaezLExALPAj8s",
  "key6": "6432keTLjFQHD6KT4hVfuSiWvoJLeaiHJVWpmSYwnpjfi5MosB8SrRncUbLFCh966Eo97NDt8Mn6RLaKaiUmPsUH",
  "key7": "wKp4Ni5zwmjMhmshTYj7V6iEKF2nKnUX7fTFBJUjarjxobRmoXCqz1e4VKqcSzyxzCgQ1Wc3Dd4yb8vmjhXRJFz",
  "key8": "5a81Z3Cz4FffevsqQMftgFhHdf1FEh6FZ7BiP1xtv1nogw1hxrsAymiqsVW2wNowgJLC6PhGLJVjqTfj3xtRg6yn",
  "key9": "3fHJfeMznRUSzKfWHA743rY6onjRrujcmATLxD7aBUZTsP7UbGr5fLsAhNXkg4pe4nqnjxs3nkuaTWe3e6g5EM8F",
  "key10": "4mqeALMPPxTvXveciv8qhULRX3G5EmmNkh6xLQqPFuDbysdWCCdwG9qsDxdn6kRjVpDAxuM4Ar5iGCPxNUduRkwa",
  "key11": "4Uhs8p4ASABoDoyyZCoSg7LNi8ZABjeYJ4c5bngGfX6vtVwtjVbvmmah8Ws5FD3FX9xsdTXKouogBGapEdg4Lydy",
  "key12": "2LFMJgGL84z5EP6FKUraYR1gz1mguSFW7JdTCS2TwS8ubN39rSARQ5Gww1WDmbx7L32LzGUyPrRUsV3Z5aXWhWh7",
  "key13": "smiJHe1ZAgNoikKDG2KqwWcJ549jG3gcQPxyaKMvxb5y7JzjL1dPhYfebCguAAN6FN3wkLTMiuGMJMLgtqZc9jU",
  "key14": "58PuhEqaMbtZM9zsYLzdiHHXUFo4ozwRsxpwr6Sw9nuXgQRMzD2MhjYbU9bkcrzsTnwEjFJGQ2Ce2Tnv328sDh9J",
  "key15": "48WPwniLLy644J7iZDRsBZvEK8svW8TswZrSv4k2zzvFzc39NCUE34dxeivpXqxQavxkzhrYqcVYZkJ5mbpHsrJc",
  "key16": "3ZsYKhFLJsWJy1HhradLoYMDCved7xJtYjVmCvtvXbaBriD3bwHnHAwvyUFVXsP4yZSY29PpCTskVz2PpYYnekx4",
  "key17": "2Db7RoXPmzBfkiVpUTBfaUHXgbfjxWRdiidJUem7thL7kkxPY4HzRSXwvEjybqsfmNUHPxCVt6z31dN65ey7J2t7",
  "key18": "EiDbg8xLihFwXcZvhB9Xu3BTj5gt6CtqhuVF1GPfZdWRr8JrVVHweCEcgeRPYmWdtk2dApnvXESnJsa7MhxfK75",
  "key19": "4YUgi3wLBrNCMwiMiJtUtSCDzhQ6dUwPecZj3wKVFRKBTM8sHGMkn1NXqQjZkUkogaC79ba5uabtM5cKQcwCoxTX",
  "key20": "5QRZ3jPFa7U27tJVJELZfxXrn4ECdiUnAbMH1ubFdaqe56Wogc35hCUvZpunBjDSRTgbf8HtPR1RYsExopTMJtjL",
  "key21": "4LUDBQ5M4WM8KH6XNjhg4dnsmk2BQSRLsHNWDmpXFKbnzyX89Y2dunHDfEfBVGNNJoEUzFjN9juAhLciZmjxgHfT",
  "key22": "5KNbzLtZMGcMk2L1QiLsovzjjyNAJpjPicYsPndqtn63tKXwCUgdgtqeboiF9idCi87ab6vumNknZ1CVD1eQcf9n",
  "key23": "4UbREnd77k4VWfd4UAxnjCHM8sATGNUsHL9r4opmevmMUJB94dTNQV55P2j21umtHZYUPbYmjcQRC6SxvEqq7jN1",
  "key24": "AdC5yzR1dE1jfFtMyrRefqCMXB9chcy6ApAAatNGSqsL38GTNc6EJvPmmfAKzjSyr5XViD6MZ2NZ912kd1FxA1U",
  "key25": "3g8MrqiQmDRyYReCdU7V6ceVVnHMhgsgcNGVY34WjA4bEatLfUM2jJ7bXedFqMtT5173EJp2SrMhSYwSgVAg6Yjd",
  "key26": "21G2SkB4rA61f1xvUXdRtZPcGS5nvSDBqbKQ4bXAiPNaaArrwTt6LsLC2h1vagUd68s6u6hy4G9RSiNFncd6MyWQ",
  "key27": "2bpZja9AbtqtPiwEzuNrhQ9o28BVW6zuq7nfBtGbfaVnpjCn4QPKdWjYpD9ej9bZdqZaBqZqggRWcYJCZEAdDEmz",
  "key28": "587Ui8BkkRjooZr7JkjEMf5jwCtHUdXMWa3kBFef79jGr2ymZbsb5rpbTn7M3jh3rVXKVA5cLAPUmVeogYJPZENs",
  "key29": "53y3jH5D82Uiko3vFr6xgqHWjgt9pb7HKtDXYT4oMsEcZR13BFkshpkzPY87dP66n3KoRhJPfhP4W7cbMAuqHy3E",
  "key30": "2Yg1QFwHgMqhWvJ9mSQybHtBFFicGztdCq1dEHAMGKaYo63BguY3bQmdLN8w186yw39XP1AkW3EUzXdtXqq7pk5D",
  "key31": "42Gtfa4zdxxmBH9GAsX9jsjb18dUwhHfmaD5Kit3VmWKGSuFNa8Jm53adbuEt4tL8e7psFoaonC98AuD8QmdxQoj",
  "key32": "5oqWxFsEAMaK1ekVd87Wnz8db1RrhaR5jgyubwzBYV81biS5s1GzwcVdQhXT6yL5gfb2ZRnghL49gtkxgBesH4CX",
  "key33": "9AkAxidymhxz9F7k8y4tmTdyn551fd4annA5KrtQ4sDXPY1BXgbw5PXf1prqqKPyGxC1WsQqJzmKxNy2P7s4GPg",
  "key34": "2XLF8cUy2oAoq9QP32H5H3WsmNK3nJcaq1ZKb3E4hVZdaf1U7iV6bTvostggDck9JPt3eefKsExGjkhJMLThzF4p",
  "key35": "3uc44Vc8jZHc7ek2qTjVrYxmK8v4yRxjKvdzK1diKndx4e2xyskVTLwdAsPT1jGwMFvQurAdgB5w8Gy7AMq4tifb"
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
