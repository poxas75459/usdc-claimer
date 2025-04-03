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
    "4WNpJQzPBZZyWc4LyrMNZGTv9EzAnNySBVUiRPL476zbdetjR2uLN3mBqhd4s6y3dWJzKWtRY555j3wT7vAVTJo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3svhFkWqwMomAawR7m5DrJfqui3Vymu2jrxADuKy2cKEH1dTZeD65ToXUttoX6pZWr7myE4RrJtfQRw47bnvSaEY",
  "key1": "2cMxfxhSreV2ttdCVtWFLCKLDkAyTw3MbeJ94wGGYRQeXKyauTsqbKsbhEvD932auyxe9SVfUWwc4fpfR37DnHAm",
  "key2": "3PNnWnk7S7hbkpwKJfreE9HKdHZ7FcDwB82bg14SsjrwXRaRWKHYdtsH6sejX6oLNH3ezGcTwvdgL6ScxsDu5k4P",
  "key3": "5xULSM9juSY1nFiD67Ecf3yUMyu38f5WjndRovWYHrguZWfSuqPDQh7afevca7MJFbdTMJFQ2RYyKrp9GpjziaFr",
  "key4": "5sKqt2gJ816NVNjvgb32EsueemGDjsYSAPy8Ry583ma6xaLL9GH9izs1W46ppv4RoWujwCYFTtW1ViZKySx1QfSw",
  "key5": "5tFfAUHkJ6YAKMjZXwa8gwSPLLveKWkm8dgwj8cmm5GTRXjuvezTTV8QeWckEiB4oY5pR7ypDt5azKZB94ZRFFzk",
  "key6": "rfE5kB24QL5zoLFg3rajxHFeCwBtS3WunpCVVk53btANo22BSWpc1t8o8EYtj9ukT5DEbexxQHzz8gTRg2tJ8or",
  "key7": "2rfY5hCuMQvFi6QAmQkgtuuWJ3dDebzEBEk6SowKyNQPM6HCpCDeM9xC7z7mnPBbbxZppDj5neMRmUHPR8PvTheS",
  "key8": "5Vai3mfP8PWqRithBjCtquPxxxWRMhh2YqQ6suxhQY9dFj876ZQSDbxrYH4PLzxRLBcxGCBpvk5j92fmadJ68Meh",
  "key9": "XJ5BuQzGJHntsLJSr4z9GHcfT2onoEvyAEXoaeRuNVo8tvxQ2VoepdTuddX6PEfMZR12n7pzycpNDWspuWGcjsh",
  "key10": "52f2R1HAMnHcRdJmCY25LiBDnBMmH26RJDUAMGiEDANrqMCqBmhb6o21rvoifjQWNgLyb8e8vGENrrnkwJQvertL",
  "key11": "mrgwkceRAgZju1kDmnfiQTrcqkdSckh6Za2KFdasvEuwSVt7Q1rRPhfYV751Lmb2rV7wuv3NZNanxjbx24XqXp8",
  "key12": "5EPAVKhQGUwLjgpmguGosRQtGw2pJzKtBka6wU4jbUQhfssp9knJjJ7gEMk6BQ8TFzzmxr53E2KczHS3WpoUUQtx",
  "key13": "42ow5i1TY8EUEfuLy2wgHbCrVHV5L8aM5ahHG5fStjHrVCcV9SMiUjXXSSAWLdSfZAoe2fLJLRmMc7vGEg9JHeyy",
  "key14": "4Gi43ignTzrVmBRGigXQjMEBNP2fbVFbN9Z8fjHBYtzhF6aRXmJYcvjfGuzj2ukjdEKLRcGWVSVjJ7w4DTMbj17J",
  "key15": "38SHRw4Qg5jpFyFBQsBWvsvusJc7cgeSRQjYdDRbAB4baDe5CFfhUcVH8ebVKoyb1sX1nMs9ueXqgDbcL3rEYfrz",
  "key16": "4MMiBNVSVYeW7QZUFSqtrt1mnq4qpAB39iXrZL3S6LfBeHkJzVLk1oaTi2rrGNvcmEq29zCsQPJfnpUZUpgc6rgU",
  "key17": "FuAMkiSajEkVRvTCeC43kP6q3bPLMCmoWkvwKjM3crZsoqLAXGi1wSmLoS5bv7qUvnJJEuiS8R7fNm7PbsHMdhy",
  "key18": "43Y2dby56z64wuzJWBXv2ffaR2pcAmqHSK8TMqeXjiwetKfRzMgaFRaSduDFuV2oQ5FRMQ75ZFu4rXygUS8tC49v",
  "key19": "4R4ssfoWhamm3fqk9q8Bo7U7CPmvP4LbmuYqC86FUCa6LT7ZjmBRwi52e1Ed5mvpinShGuHGZLmaXBD6PUcKYgLh",
  "key20": "5YMpxvNmdd46S41d8FW3P4cETvqDdN9u4hfSuzSmacuuuY8zVntpLQeBUdsEeYt1kN3B1GCNn1y4Cu1vAMWVe4Ku",
  "key21": "4wd6tRNTHKeJ9mDioFUDYYQtVCMf7X1inYqU49zfebt7Mev8hbwqtAHNC29mc6WTkDZtgJTzwkFhT6hH2vkkYQpp",
  "key22": "616cBJvkFztdsmQugwDLrvN5N4vXr25Y53DuquJ2byRbdF145ZxaYehPpRSNnjNC3qi3hcM3nWxPLtZL7VYU4p3r",
  "key23": "3oEUH6Ghx6Cvdwwnvi5kTEmTqGjq1gZyJYrRkCjkc8Z8MRJWhvjSpPRq2SoJnRFHEA2LFLTL19PpA6YTXTkxjuBg",
  "key24": "5vcK8PKTeXqN27WFXbvRjTR9bEe3Aoap3B5xA9MjKj9KLBoEW3e76jmDZnJENZeXcRMzEptEhtfY6CrL1is4cghY",
  "key25": "N1hxLCqa4x2BQ1AVHoffFpUjR5TYf54wPRBq38pVvj5pRVWWLkZmoPkTXkQT1z3bFtGhPBkn5zxs1hXQ8yqTeas",
  "key26": "3qJ3vnAv38eimxXK68wkKRdhbyuCwdWpa3XhrhadmFkS1F6XPcNpUekjtgxBgoJGg9X2Qf7NQV9tkhSz9DCjsw6y",
  "key27": "4GB2EeZQ69NkcUiGkisu4Eo1AdMtVfSBEJYWd3pnkX9oDF85S2fbVhNqngkWBaa4Appnkvx625Vc1CQHf1xSJcUA"
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
