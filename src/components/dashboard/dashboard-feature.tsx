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
    "598KC1b3WpXzAcH1pEbTp5ytF12UvAkkyAsY9NG8oTW2rLBuxLAmEf71rRXRcq7CMh1UzRP7whicYLQfBuWB6mJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PYC3eRy2jvTxCbv45Gyxru8LuvG4fb434RUGi6J19Y6SxM8cQtsTbdPN8q5fRLTL2HhECbMCSPcNdVacKoWZve6",
  "key1": "4LPwKLeyfmnhtp9n2XDsokL1aNGC6WqLdk4ihCbbm8PTzMXoZV8X34Xxa11FePP95s48Rnb15LLSVXw6LfnQ2ykQ",
  "key2": "3MpYMDj5nd7RXtCFQzGUJuiRLpq3yF9xBt62CP7VUEQBHrVj726BDruqMx62JtYsCQGwUqpB3CctT5oqpYgNNrSB",
  "key3": "9XBZnTnb7s1ikz22SNtwCDdZPumzzAa7XbR2d6DsvWmAhpMggZyesWmzXgC98ioU7scxmfUfojeTAaG3wu7vwHs",
  "key4": "2XkathCkKmoJq4X4Uj8oH75F6bYH47wivprEbp4hTRQXWyAnmvCG9c6NXZcauEXixdXvbdTtYAKxn9XbNyDvwA5N",
  "key5": "5z9XbNTfw5RmKtAq2crGGJUnTQzScm34nKsDVfrDRLEe4jWhnMH4hS39fJ6wzXhBnPfiLBWZQf8F5EUh6iTGw8D2",
  "key6": "2RU9RirAS5SZKZVU1ZUoe1Mi4G87tKiKmtCShnVFSXbGU1dh4pDWVecP7hCs37JTJcw9uzytTWR8GCqeuihH3as8",
  "key7": "g3TRSXdsgQEUWNCJEa37ypYv2qbtB6g8KK2SsLp1ubHr1jnu2X3nMWgSuPjdKQHN7zssNDjvybUrhdSqoY555Pf",
  "key8": "5NCZHzYck71iqJiyi6GG8AZa6kGkKJde14KTrYqse8VdsZ5YMgHfZAwg1x3Ks5enhbms75gPCjnWePyGBHVtHCnc",
  "key9": "37FD7A5vmoN8mwdchcYN1PCCZY8DPeMjKkfgMjJ8nxpfyT7EtLs2MRQVyhyEAs3R4R7BKdVL8jDh7cjHENns8u6s",
  "key10": "2St3xTQmMdwJ6EvtUSEqbChVtzpZf6gpEFSqvAddMAdXGCLpKy6TE6WqWV5QXzuqzPChBZdrLmDVAas6JsyfKLxD",
  "key11": "22GeEpaBVLRAKBEiMSPrmoByqMkZWkWeiN71KbRmeRdT6m91Rfo2X8iiPyNsqqpjB7VT8r2kVn9HSBKQGBkaPdcL",
  "key12": "5bBEnXJxxpk2Tp68Ux52Lb7m6FXsVBPshBQD6bWzh4qpBgr99sXaWYHHfrEscLZERnqGq5LmEEgm45GDFUmUGmM6",
  "key13": "5fGPGeP6uyteYoygN6NeUYuX3f1KtQ3sm2RA578FPSfv5fdHsxuoiYjhxMiMsss2Jf6f8EDHyV5qpWtPUAnWEWLw",
  "key14": "53AWvKg1wqW2zXVHaY53gyqwrpGMXhwitwicM9x2e9cJRoQVECkjGotgnXwVguX16hetLr86U5EKt9A2diLRFEsy",
  "key15": "2X7HyFfGohxGFV9xXDhLjcXnyv46ag7FksTqCibvifi9Q1PYJGomjURRyreHeBCqMYniyMhLtwmEeLsK52L8i6a2",
  "key16": "6t4DTrGzcxkKyE4xpPKMtziJVBQUffNUkShwS335vHEyqFpd6JTpAvyiont3DtzVzPWjouTUdiZySoec8ntyLWG",
  "key17": "2NUW3tm4QTRr9kwUdWTid3fNeaXwFExju3tGWLxS5JvgWf2Y334UbhreNtcGTskHqTaXtRLBdpASrjLiCwpHyWfu",
  "key18": "39Whh7PvUPzXCeehhdanNKEDT3iyGjkQ9SedW3daGQznnri47NiCnDkhpYbicQQ6UYrWpskWCqcssT2sSkh2Gzka",
  "key19": "3YzgVW6XUevSSJVthdGUqnVEV6ar5wo2onEWnoUGMJb5ej8PLRJJLdtXYmA9LYJrTTcQxJjajpzWSqYw2hCYq6M",
  "key20": "4g3mC3Dc5J61G7HcmvbfhN1y5QGTRXL2JbxK7FmCuWXQguofG9TWC5guJohfYngnHvN6UgLBBoEBTpMk7cJHeNBq",
  "key21": "5BVEVekbfqLvxNhiru8RiMLB2Ls2kaQrMSSREiYPNcD2mgpk6U3Z4RBLR2TN4y1AQVKjQEHwXj1GqZFjshxj3p9L",
  "key22": "28sSuoTntyV9Yrs7V4RGU3vDEyZrtcwjWK6uBdTYgP96VySxoVnpj6JSGHHoYaQkpzVkf35FvVMpjyeCKGqmQpjC",
  "key23": "5Kkk3NgdxVTW6ArUekRrGw1bvnVecJXTKkK9yhbeeCVKxJrM3ivsRxAZZMCYXkNtpaW2tRABgdnE1NVvbTfUPYS3",
  "key24": "2UWiXFtKBcp1DFKLSPN1VFBwAGwDQ8nZMa2whexjuJb5cHbSa6yQaQSBEuoQc4v2QHyTzmYGQQaUvM8aaJyFetWp",
  "key25": "2QphiErGhGCGYvRWdbtJMdF8xdgkd3eLwciphPNXV4AgLJNPvwPVWKadgqSiXw42j4dW8r7GjC9v5cip7dSvj45e",
  "key26": "3EQc7YQGJgeBJ9FxBDocmpTShaWY4eczDkpYometLuhuqXTq6ttYysSHaun1KZ5F2EbFHPCgzi4MZ2r9cEpNBdj2",
  "key27": "3QdarQ6ECaqNfXSH6u5ZWeMrEeY81PPADtLqeqJ3uXnaqkE3gMVhHV7qDzekUMhRKzEsFRLhTzpN72Fj7q6Ru55s",
  "key28": "4fXP9CNUPXcCMEkihc3S7o6UbCbkocWoQrWzWJud7eAkBXCrAXCz9YQJdZ6oNpKJmaxqb3V3sESBfqH92m5JRCzj"
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
