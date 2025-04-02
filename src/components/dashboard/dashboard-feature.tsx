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
    "4VS727U51s1hcBQWhovJCqp1Mjvj3Wz3UX77hkkQuem4HmkseqCZKufLdfivuCjpUKDbYhZ21CnPS8EqKvLsAGv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B7JNN62eLnA5HsvPJrWUkL3cvPuuvGJXUjQJB4SdsYEMonc2SE86idVeEX1rEGRTm8fT6h4Lzry9bbtXPH17HkE",
  "key1": "Ru84qBRD7akmqdhDg95UgpnZ8JAeUrxKj3eNFrSC6aVqqAmdmGML3xoJhoaCZ77KfHfUJ3417KDnYWWQTxiNFiK",
  "key2": "5ZtYt9H1LEQDDPLnsPAcC2DpR6PdJ6BtVnnxtq1kxkH98PLUxVtY1bWDp6jwAhDisZf7Wa8FbUNX1ScvgFjEikiY",
  "key3": "2uCi2DNt7WRyJe3iV1shuFU2iPC8jyHvuMGtAw9D2rBoyGHyPuuVJ7GPyCgSmLknEdt2bXNqSHwHyNjhgnTp6r1P",
  "key4": "4rvnXyicSxq5Sn8dyKR5Q4Q4hKwNCs9BVRyEnjGy4Knv3asxif9M5njS6srZ6X8WTeSp7sWnxNoGndpz9VFuurNS",
  "key5": "3RSmYK7EN5dCVTPiZ34CN1JauaMuvwGj39mhvrHF4pS3D2odqWTqfCVQ2eSdw749ZPcVggKiRfWeWqaUds9hwtBc",
  "key6": "4SdZag1ogDBbkzn9WR8NwNoC9HoRBaRfwXeY7NHzgsdRGjtipLqfx92bshRQ3vBCketayaPuy1RHRWsN9iWfWTvd",
  "key7": "3m1HD6Y62TizMhE9CkwzR1ihCSdJbHpvH36GKMZmwFHHxg4kxiK2YhxHR8WmPauSksMtDbV9YvqVzbajRXHDGqE",
  "key8": "66Qbv7WA4Fp5bGayeKVueamWT5RCgHCXUEerkzVqXcjSU7brZGPmTSqd4b4HyeQahaaX3ow7Wavc1EgTEnWo68vA",
  "key9": "564A7EARX9qBE48sgxg5YqSn1G4cSc375sWZp2oBS1HDH7gwu7A2ttwnbD5Z7McStHRsHjECMPjGgvGHMqpSPope",
  "key10": "5McM7dxPpRuomy1VQas5tRTgpC7poecnUsjUKxXZUhFg2vRyFptQ3rtNLgf8PkH7pGs692uWSbWWzdWFyUa559KP",
  "key11": "4RPrCtwtd2GMc8Tm51RaBJEJTvJiWCze2zAXeeL3PnGa6WLgWKqi8Uh37seL1JbqA8tVgHShjskYu2roKJScciZW",
  "key12": "R6mgtjxDrfZS3D2CGuygrhh6dcwywdCZocD7hc9i4wpcBTz3qkRi46YREMMbqY7fx6oepxUuUtbkektdz8xffig",
  "key13": "2jbn3tHj9RTMsmCZYrsjvSbAQBcx2nEZAQ3g2RCz7T4fuJybYqcGTY8fh9YQBQ2V6zRNKYASeumrJsxVJiQ6hGMn",
  "key14": "23gcuyVcVG2uAjkfwL3rfMzwuGdgBDx9mUvbmPp2A43Tn9Kmh1ZBekbUAVXmc2KjbPbodkX4pUTd58AYwLipbhjA",
  "key15": "65TtYw7GDAsjMMwAZd77vrJWWcvQ3bSafQwQ8wCkux91kPW6r5wbsm56vM3e3wSxcRiWSf5jMXMGHmg816FnXMNj",
  "key16": "3Sg7UdBrbGXpcqa1WVitbVbumf4qsdE6Tet7jza4fL3cuk6F3ogkJMcKLSbPEXYejGbgQCVQwUvmrLwiGvxQs4GZ",
  "key17": "4bWGGdpvhsgTdS9esdj6bsNXSzSA2xLFhpWAV6vcENJTghabCxV1LWDUuhNq3jwZ3q3TYNmYugXEwjFCTa9pyfFk",
  "key18": "5NAmBEhtyuCFRFjPRwEUb3r69zfhptp9dRfxtPay36zDxidatkbSi6tTqWS4rsQohpTYzhNsyNfNuGP4gBCznsAt",
  "key19": "2wD6vERQVyp4wjyDLcdXiTeV1qUDWfarzEjTSZfrYwfkzvUhgbBsZwUt7aWjp48JnPxYGrUcSkbnSiJ7hyyi5LW7",
  "key20": "4zftVLHKgW282CKu4CPn6GmCY18fUritH7SemM3i9VmFVKUXdzAUFxQ4xNFN6UESm7bgdcWAAsXFDT1KDxMovv3Y",
  "key21": "4TiTweeoxBP5U3eGHnJDh23vHfgBSs3uTkX9nSGkt1DEJNYcrnPQRiRFwXEvLdyVH28DViHTuFuzTDoHacoKpyxp",
  "key22": "3SYHTQmyoyR4ndxMxKSmoVR9ZusM1oAUwTgMiXu2WgKM49iXhxCdUHrMf1RQNz6QFnFtu4NdJEq7tvnKVgZesjm1",
  "key23": "3yryV1J5CnmqarSpLw4ziBS4vnS95vF4ZVTqueNoVsfLrKbJCRaeNM9bDW4dF2uZoMmAAYiiwpQHy2V8KeYZsAwR",
  "key24": "R8MycH3hr7CDskxb1XQ47pvi4wZdF9h3ybB8ierTiqWVVKUUXbc5atjTsyGmLeLS8Pdg7QHRrZXJyY1xy74iAHt",
  "key25": "ArgJR4Jqzvv14RpQLdVkWgv7JHnFcVQP5zyVu9VNYVAyUiCem4yK3yMK8R95U95gFm7H8vf3D4pbPthxuYSFUkW",
  "key26": "3F7uJmiCtH3S3EXYqrroHgKKBTnP9xe88ZCAM6CLZFqpXzAYtstimCBEWz5VVAvKncRYJirDRsepsjRDn412huZf",
  "key27": "2nUMGFM1GXv35XBzPNDKi7ciutT13izowQXAuzQLh69MTpTVTH6c2gwJ5hQeupXZGArLbD5Gqu754kvLXFHXwfPH",
  "key28": "BVErhmVmo7CUAVqRHS8E1vsQGehnAXVWU93xKvqJcv1NN8VviWPEkJ2uEdtajx33rT7T43igYCf5CB8oaGvehwH"
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
