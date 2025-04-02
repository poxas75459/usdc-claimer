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
    "2UkEnGiFQSHGAbxpwF29FY7Uj4Nsig3e2cyPYtavWzkWcoEpxib2RranARQ3pFnANky2VRBMfvcxpkHignnkJiYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JeY4rHatCvbM1sDdSnA83S4ayqvrPEnK3Gunyvu8jn5JZN6PaXp98cb3qb5MCQ34RmZpMtwwdwmdqixKi46T88C",
  "key1": "5ZPqcFuwtTACxe9W7L4UQM6jsfQVcfdBumXr9WJN1mYMBqqeQXGNEgqkCynzQR6UJtVgfAs7nYjUvPsnWgjLDbub",
  "key2": "3nzD7WPEBLg913hYorXGttv18eBMQGQJVLYJnaULqeyt9rtEQSLmB6CysC7joUWFpeoyumS6PZxxP2XSpYDjEW4X",
  "key3": "PQn4YEWYqprC7wUmXSFegdXEAo1MABixp1n73CpzKEiJ8Qrnwwrx8DSHk4zRWwq7zsTsThbTB4PDs2a5cFH3m8J",
  "key4": "3bkbAzDESvH5hL6xnURRsnkT5pU9xJMsQixet9NAYg8XpKLDzGw5jzcP7FxwTSrcZoatfFStu2drfJrcU7ajvy8Y",
  "key5": "5LKeijvMUBbJSGHY276GMqnNM9JBSmxfchiNg6aSbfwh7vfMA6Q9EHUGLe9om4Lmc25LHsKMZyCdF2dUF29ia1hi",
  "key6": "2uqZhKa1rK4kniUeAKk2zjN8R7rWvmoLW3Z599Xn1FDzqXQaTYBvCxDcP9QSHkgssaGMSujKa59b2Z9QpfVki8Rn",
  "key7": "5V1pB6RjQ1VcRwCSiXAUB9uKfNBdCSP8LjjtqfGR9jFkxKmsmxrS9xooyywuS4GFAbKZvZQRMd3AuvGh7nCMcUs4",
  "key8": "BjWRAPteLg92eHJUQcDkfuPHVh2EJmtrAfHjDDzTEzz2SeNx7jtrkyCrVv6DPTtBog4JETpBuW6xFRjAWDAzTKQ",
  "key9": "2fM7M2TZcha6J4u2Yw9JVv5LfT7eP5CEDdpsVMuT23PxzUMDQU4ZBEmXqnZDijsHeXZMiDakDHJZmXrhesBNj74o",
  "key10": "5ymmRYRP9qx8EuB7cZmFqXq6CAoxACWdVBveyFa49dFJLucmFhgQ2igyd6ANfEF7hSirRUZairnwodYDimUTqV9Q",
  "key11": "61icbygrH5SfKygd1Krqk5fz4A7qT5Jtqi1DNPn5z2T8vrsVmdpALmkFJjfQTXqa34H2WpxXuU6EUemN6tKFK9PT",
  "key12": "583eW7xeEiS74ySoJBRKZ4xnHASCtSDrJPNcysh6cFuHuDBM1yB9mG17PLR9pjS7yUhU3GGjwfaXiURQuowNWbwY",
  "key13": "5qrcoeso6n7G4mJqgXrp4XTSBnRFn46Nweq8rRvP4Avw7E6cQzCEtqhsnYL8fF9acvzmMaa1uNLyiecFJedxkezv",
  "key14": "2zSUFN2EWMiXgtcF7cb84u8oHQaLxT6jLv7kvcfviffCE93WKaRFoqu37shxTeBNmEAagHwudimqd2jtkUEiWwNo",
  "key15": "JGdw18txnutMzY91X4yeBAVk34dVc8gKPP8rgjKghfjDqfSaWPBWdgDEEsrQTerrwvjatFNkeU81Tn7DCwtx15v",
  "key16": "2czmb1Hsu9HzAsPRKW3EhibyHfitaKzEvXEGnt4T59AMuXcjfdHgNCSC79mHEhfdz8tWAjzeAHw8WpgiirtdqwA",
  "key17": "3wjvkDmkKgcDu4q9zevJeYZRFXUTmwHiNb9fLoBKw76or84A9eMc6brojGtWvQuP23d4RXUYix2RwUH5yPm8HH3L",
  "key18": "3yz4SWUSSnyTNSR9TtkP2PZT6sqAuPrJD2taGvNKhf4CVfdanBtGC1pJHXg4vRMsDZTQAeWNN9F91FNCEokbtzb9",
  "key19": "atzym4Pn2HyrFZzaTwKoUzSj2TCPRPPBgCAFjdYduguZQQGweFqg5mjqw2UJ7BnH4jFJXZdoMHNC3ixxyDo2s4j",
  "key20": "3bcUKoh1Yr4ioKKgkdxyiEBhHttwzvdbvQ2BJpnbq4vFG3pHpvNGJAPYCHC4jkuE2AdtLJxFDs9hwgBZjGi9Ci9t",
  "key21": "5KQKgtzFhPKDiRXaWLqSeiHoEqMZyXurPmMJ44msxQxAxiDw6cfwTw97EDUNvnFuMcEzFKHKuhX3njbzKyEZLV6E",
  "key22": "34JxJJWLcNW6RJMQ3zugqj7jPQrrP3FaEuyRQv1sEBv8zuLitAfRz27hFXYMiUYPnYJ4cx1nNKRFXxaJRmHhoYPD",
  "key23": "2G8pTRDSBTvsz9byB1mZLm5cUekttAm2SJVkVfbjs9cR7hVP3WgFevMHDJy67Y2zYqrUnpQiQPefmJ5kicFtCZ2h",
  "key24": "vrxFxGeKLpLESkvhtqNxoPFVZVREjem2Y1LQ6fgePEp9EKof9vU1yj9nc1NqK85QyVf7zCoC9t2g5GUnhmJDADb",
  "key25": "2x4iS9RALu8aUN69acrfG6paDpswkQ89YvBNCevLW2dyEtzuyPQ3dWepk91jfpTv6HD3NdFCCZvQnrFfTRZBmsZk",
  "key26": "VWtgh4fVqXj8BsXmA4MpF45q3AebBkLGm3w3yp13zVRoVLbUgzQH27p7xyJ78ck33Z7zPXdwbMnBTtHyPdfQDSs",
  "key27": "4SwdUvEHsN2mWTgdFg6nz3VqR1riaEQkKxpxjV31LKBjpqU3u7Pz4wYufbg3ivHHN6ugZxB1M9vbH1owCDzbkzoC",
  "key28": "4bg8nuELPpfQWVALuqaDx7UXXC6gDep2LsN5HrQWKdJyo8bxadpnan23qK1nAmL9ei81TwDYuDjNt4pUAGSQMqma",
  "key29": "2h6uh8pyNurwDJCFHf8ej2WYyKyAv4LJswos7W2QVtHSVvR96xodfrQe3VvmzW81LmFNR6duVEKDbmhbqBwCTX44",
  "key30": "3LrDLkHCEGQN3kKxc687VoCv138WKm81nfNT1PxKeP3W5omfnGMcf23SoU3rWQHqKxUJLwW4ye9qsVjr6RFY47Ng",
  "key31": "4BwGNfjV3KrxusDs6HnH4oWb9oGtEHypPwgfgnmBXvvsx1MioVPSitBqjV5WoJTCY46haSFWA3VQBxNdSZf1p4N8",
  "key32": "23NjQozsB3u1rVKWoMzHwNdpeYdocmQLVjcMBvQGeeS95WcKhq7GdEWWtbQS6Gnq2Th5XH7jYphEdy1G2gy2FMwf",
  "key33": "5KLdKqJ6UUEk6mLGGUjdSTP8SztQkGiu2XxYWcNGAg7JyfEuNkyAY5BDvnnY6MptcDnyGQg4fim5J2KryQyckC6",
  "key34": "2QwPLxDfBbff8a1ER1g6nJ84V2FPZriMA23Rs1Qe55STStP5tFX65EztpDaSNAz7p4Wn54wCB1UQMbZMnogn7gqg",
  "key35": "5b5Wi4dKB3ngpQ6HQ9XUzvAvkNe6MAALtZWaAbHxGQMzueDjZVoGmTCckMweMJrQeQ5ykzs1gskhHy5Nh6V77yVM",
  "key36": "5XEypat6qAazm1WsiHnvcrBgxM7QA3tnGhCc3h72HyBrrACXpXh4R3hCXB4WTfaQ6wBQtfHbb61nGKFrMTt8g7qf"
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
