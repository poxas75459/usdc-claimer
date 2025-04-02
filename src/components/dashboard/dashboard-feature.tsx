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
    "4bdSPmvYoGn1vRuxF9MSjDjzgUNmfug2J3dC4jUFpWT516bECxwHbfMYPqiKmu7mxk7rtbwM7P4tEapQFyvJCynM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hxWdExPdrxZFZSmxjMd58XsGiRTnqmKom9YZBw9KPS8df1ciSqFx8pzSgcYUhbY1q6FcgHNKL4bgcshkBMzuWPe",
  "key1": "3apNpVKMravanqyNehbzFobwsJKrVsdxorMHy7BkcgPExRqjEXf5Bi525A47LP7gwGJarvwQanQV2aXpUNDzF7Ci",
  "key2": "2sUEj6uZmLj72wc2hALJbgebmVDDxPMkRDk8A4QVWJYbm69mfNXp39Xa9bPLFsDM4De3DvBBh8J1UjfbXfP98gUe",
  "key3": "67fVU2RDgeXEyDAEaHW9tmDFzp2tBjMoHdVA1pAshcSTno7GCiQqtNnABLFszFNMZtCNXzhoih3E5NDXaBQxVu9G",
  "key4": "44scunRnknU5BdrCDYAvgJ8CBbTL2BNZEHA1kMVWv8Q1jsycpWmPZPBG7ZkK1c968skLH1m3CGKYJhpZcNJp7UTv",
  "key5": "gPNSLTgLyfJq7Nwo1sk9VoHvwqfhMNo2g5ZjbPxLTbkqEUcUWAPQFVGtxWgXqWDjQ4pHcSTnrVpvG2PWNP7fcrW",
  "key6": "3RrCxmk5UzAgpGwa3qjra9hTfNWqAYNzejRpMRUY6K1Be3qxToLHmU2yqJkdUy5eetaSrMuhkywMLdJMhNN384Dz",
  "key7": "1z6CeuBTh6BUkVECvpL2JJ1bSURrbPWyD9fbbWN5f5c4DXpNZU3fH7vPJjS5QmpPgoG4UaFaV4qEQ7qARakjzvS",
  "key8": "iZLHM5Fig744upfMRKqKyYjT5MWtJ92Tk4H1K1bPNiyiN7fWri2wYBbKAw1yZUWBpUdSbkNcMz6DR3d1mHFoNFD",
  "key9": "64DGG1wNd31jJYhdZJam2QtYdveLYtZsxjQ4TJBJVPNooxhuNyHto3FxC2r52UR6BHNGWGECL6fsQ7W46ax768a3",
  "key10": "aTYLuKPmD1L2tUtE8nzpJ9ujnuzAz48pKxE8xfYyLuwNerRoFZmPn2akd2bnWFtuCzhZTVXDFjPEMdN7hwRzhZi",
  "key11": "3bYEWEyf988T9845mFuByGEgU2e19wMPTUUMfUjDMiJnQZF6rnFxuhJA3mAHdAUigZ2AiV9NLs9yWe5gEi8xkWba",
  "key12": "4PjMKEMqdA5mnpvUPb2HDsTzP4txcnBKmKaszNbGYVR4sZTUfaZapSj2wq6E5MGieovGUZ598dkL5Lpey2L2fzTS",
  "key13": "36diUnnsUGtiz5s9VfJSnrQoDN1BKbEi1VmmUvDLjDYd8bxMw21kLR5EbcR59LvooUSMx9vunmYfT9SsaBYQNnMJ",
  "key14": "3DutbTpvoaA92CeaLWUCKMytQsJC8Ls36cCtRp9P7Ds4iapPx736SDZvKmGuXkf1VcsKL5oLVinH6AVUCtyNUoUm",
  "key15": "5L9NkYFpmU9ArjJnicAs4n64rjfgfMm6Fo7NdeBk8SWQAc1hPsTXHTznGhUgaSwKXDpk4BneAeC5GTwiPLmGWdNg",
  "key16": "2tGp5Tdf9UtUBM3HCrgszFpHmjxRMbH627GqRmcVpAwi83vGjQDpkFaUXDjHY4FdfsbyUegALdrHA6geR4FvH9aU",
  "key17": "3UkNsheqPqKAWdYLVeGUne6Qc1RuuhaMUxB57Rdk7fVyRCzR7zRmBfEHByqpRncUgGrXWmac8CB54NL8NCtE627m",
  "key18": "2hg7ixSCRN2BbBkqr5yLBjr9X16Nb1iWw4QicFfEnB5fVogiUwiD2XoB8QzKwhzXKX5GoNAv1pDz3kPZJ4ugCjH9",
  "key19": "5wcBB6AsZwhmWYTKKZg8zYM1jmoDDxvsX7TTHKXGQ4YD55RrQan1oSm83U9NWowqf88Z4erNVWVbpqdG2PfWC3J7",
  "key20": "5rcXjo7HPZjQh6yzhBsfsDpRqpwkPy1xuiZhJatfk7ZwMBmrzt6k572r8DSvXZW52jJX3oSCbU9UjRv47ps372eR",
  "key21": "67Xom1SbQQfVEkBRBd3cwNtCAsBqV5Mj6gP5uDhy1bTPkADma6EMQYSHfZ28AARFXeQUDdoXTtnFGQ78fRZost3n",
  "key22": "2b9NFDarangW9sJ9zKhH3WzgPatE2zkV3fQnJfLncmaU3Kjs7EQPji4TVwrvnx8V4236eLT1ytHZiY1oodEEmFA7",
  "key23": "66cTSnq9VmKyB7jbhr2JH6wxE1aQe7wJbe9EiZXyte8tkm9azKLpr6PdKsWLMHwDJ68fjY4oNGWki7nQSkFULXf4",
  "key24": "3Ce8mZuKqAuLKcRi8ZQYCnb8mJbSRz9v1KSseE6iMnL8JmsHgJq7uX6m6LnwUcMKXxggKgE3TXPdomN5gRKX8N5r",
  "key25": "R3MSmdkLodaTi4Vee1NskYnuALiRsZzWcnPnqvJ29Bt8CvqSfHmdK3ckgxvHiFfNxpz5qF8c3jts58vqNrmeJjk",
  "key26": "5u5z6h6nhMCYdmCw9GqDAYT4VnzEEKgZZuFRyEbGMagZmGnyhdiptaZkeSmgVXTcUpjc7T4MUGSvrcQA7HT1kbTK",
  "key27": "raPGphExcXTzSJ2LxM6YGXmCd8vzyAiMVRheqBiN7tV9jALH9PetL92X3iq3ZjGd76gZmzMbfaH336kHfNwdF9j",
  "key28": "54rNTaRoKsMS2JZeEE5fSKQXmg5ccfBSbSJy3pxkhq8YJBJH3NCqCarqijwk9ssphj5Q1sdxbaT3YQ3KrfvqcMEh",
  "key29": "29HuXTFWdo2z9HLF2sm7dqsbrRoZ61bGWmd2PJLNSGTKqeWrnQL7pXH3jDmufNdFu3tfEfBfGV856kVosPnmoTs7",
  "key30": "AkHTnr7aw9F51MLqGTBzWozZWPLKyj92DNdpetGvJn9qKUGUJH66wu1ht7PuNTdKhHpE1kC6zRpCLPEH8WfkJ4y",
  "key31": "5Emv12JCadLzKbb5t6xoUMMYsVtdUBXVHppAuYxofFejQTRRnoY1H8GA9VXqiwjy4BQomzjcKDNVdpzYGo8CaQ2H",
  "key32": "21QNKy6nzuPDpBHqTaam8SrwFPZqbBWmtB7kpSEhhjgUDyzwryCTYM4rsp4Sz3ZYAugzXZvDuKwz9GNWu2HUhbQj",
  "key33": "4B9ZTBMCzorfWh5aGki4noBhBHcEHGSty28YPzLx8cqVQ9JnLSFCnhcedbKckurQEE5pv28ngZxvS33fAgkkgq5J"
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
