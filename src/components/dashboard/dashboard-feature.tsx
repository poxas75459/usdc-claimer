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
    "4b1ivpRXphgqT1ni3Fxo4KfkJXvBu7U3DRbkSEig8WMCeF2BUkY4KVeDFT1qU6mkdJX8zxfhfEtt4DVrbGvvRxTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EEnqBnfoBjwDsU61EEqtQ15wZjhicwf7ntxct7b1u2pgTPAjb99XFwUPXDoepjxLyefJw26q3YrGzJKbfqGWH9N",
  "key1": "5ypa2X6sG6rAesD51V5jUj3RsgWsa2AHcMS6nLd5w7Qk53jnm3wMAVvD3EpHEEXat1B2hzFvv2BzX1hvZPgmiUzv",
  "key2": "3oCHPnXcPWyuR97qXLprvgTAXmnUnyTR27aJ2TwmoTLFsW1SSwDHnW184G9n8tMQxnZxGz8PC9itGTas19yYv9PU",
  "key3": "3BGW729DMKnhPy63LX7w7yogHVbDCfwgbJSRu5bk8bxTLWSWttcEVruiJtMdrdDKcNxA75RtzAo8JGHkxbUYCTcY",
  "key4": "31JwoZcC3iJvQddkob49dFuXabE2hNkUMhXZQkbzv81vooqwdmoRarFWvJMQe5w3M1yerdcGRpPjEHaoQD8EoefS",
  "key5": "57AwJwZw8JHUvsMdKdNH1GYkHhWB2Qwc5x29zY7GEVqiEa7L63J14Ax5LFNraB4vf6bH33deSaN5VSNYxxofBbcL",
  "key6": "2NMSXKTeYzdAS1eTBQxGY6fqygAtNf6hf6WeUGhDAisvfuMwqv9aTeBcPeneDNDPQbimQovY2AHhQ7z9YaSiuELA",
  "key7": "2EP85qKohCXhvXDPCd6R3bLU6hWgPuecpStQ2h2yy5vt6DRprMujM3y9aRts4Wm1RKVJkhDSCEPxf6HPH37EBRxW",
  "key8": "2R3wvLp7oaBcP6r47MLva41hzEg9G1CsN1kj9dUukXeEqt82cUdoJ7BUNJYgRSrydwx7rUao5UR6opnHDyQohD7L",
  "key9": "cekpsBCbt7fTpvc2tepLjeT17x21X4WjPUbbbBoybA1V9C13x3Hh9pU3fo9RKBcWPq5ZiH5zqyAYC2mWfZSQ45V",
  "key10": "Ud8WzaDJ2WdewsopRmquq9XJkGMWPar8erWvhs1bUHVTFvogCHBB85mjCvbMh2Xn8kwpv3YfH7F1cBL4GHAaH5T",
  "key11": "3ihPL995JsKtwDBbeL7ztZN3iS4UNucazuwm3E6Tgt79EXe3HGLNRHirrd6Z4Lt8xZtjTCSUgqdaff2CMULT2fSk",
  "key12": "jVq2rjPhsETDaDanWRrfn62xNHtGauRkgGsbAWrqJCrJ2ZbbZfiv3iWHr6xnxjgk2tyktWMizj59je4pN4rXJNL",
  "key13": "2bFWoXuAEwm2nCHnt4WjmewHaBjsNVgJXxL6S1YqEywQWv5NbXp2tHMvTr8C3vxtbaHhrHg65mpB8tmieYRdSMki",
  "key14": "4zW9ZW612bURbK5yaGnjWE8TCwKzS69cmfnCUMHuKgbx4cbUrXgUBuVD6YJ7hC7GNbahf91Pzdgm1MTBk6aswffo",
  "key15": "2oLabi4QZHNd3M6NRDezLnPUkhzcdPaN2ifxqApkfimfCNToEYVHJxEDry2bSY8meA7pmBwJx1AUuyecPwAm1Eso",
  "key16": "3TGNQuG3x8QHCBM2QP4yh7gmd2GErdUxrnMrLevNTPDkGuUYzhgUVQ7vSzSbdVfpQc8cGCW3PMRNyb676riVXHNT",
  "key17": "2dJZcnnG21z29mGEhpNr9JADz8XDkQdGx7TirB1Tu4FoVVc5YVS6C5AYmsmvt8PSt6zh2NspKDVdGc3x2ZPamcTj",
  "key18": "5Zj6TQ7uPuaJpR9wg8bCgUuSjoAkBh8XBmhbXwSzxqXUA1eNahag51Wg6MiDyWrzo7qAyxDJUHUgpxwttXU61goQ",
  "key19": "4wxVH8Wigk2Q6cW9q7s2gFpTsJmyv3e45MwH2SXi6L691H9WY9pdr1ZBgdnYRjKUJ2Edd7HsaBKbkRrQhzp9yL5P",
  "key20": "2bCfu4KCpjU2aF3CpYJ2y8ZnGVRuBjQi6QKXiQY9yk4BQuYvxYfM7SEzdDNvFZvAm8Y1ADyKyMsMBubwJRccBNks",
  "key21": "5SfjZ1VqAsPy6Y9aP2ypUTYx1J4vcEc3iLHQFnFzs43x5B5BULcJaxWvMFCJDfVkJ915ZHmzwvPMTZ6k5KBBc1yP",
  "key22": "395Qgp6ygF5JTrpMqHhtTWWVCBELZgadXvHakpbqQjRqbL3QeFoY5JRWLva72RLrFWcskHRuuNt6DXnZAkYo2jAt",
  "key23": "2Sd8VW5eKhHY2twe2vKgoSw1vuQSsxcNjqvTjSkwPFaHJSt1pwBxuudAmMnzTQscShAJoVqi8QRDmXJR6i4xaX4q",
  "key24": "5zNtLHU3VzptKxzCeskjQiuavZHtPoukmuVhdkd1Xezp5PhnKgWiUj6p2JmTpmRTpvWHUsC96DjgNhPXcBUug7gN",
  "key25": "4DDRqic4KdDNJNskHEN4muX8LdsHR786k8ZxBcmxHN3TsivFdzCgd4fo9akBiDyLPgLPWcvotX6xEjW93noBjT25",
  "key26": "4XPobd6gRGohvWcU5EfJjQHP5sXKdCWrUnPBwj6HPU6RqiBhqaWqDBEn49KysC9gMoZ31o7DQy1EhUyfV5H7agD6",
  "key27": "pqAGWocfgWhvbsrjyvLymMMBfrMwHzGWnE49TpX6mYdKyijZxdx1mmbLkk8UqYt8VmaQMKoEJTZ4uXMQES5hVxK",
  "key28": "4TPoLBwxpHfnZNqFCp3wmjkTbK27pDTJfmpKJk5uk9oMhPi3uq7nSRg6Qs6JiF21AQZ9R28zGG7fHxZrPDGCTJcD",
  "key29": "4zTzivVXdpDvsbMHttsAGMMqFjs7CsLCNjo1erLiCHzjD8XRuHQL9vKHmqq7ySgp9i5B1n2CQnNWaVC9Lc6eNsD6"
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
