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
    "5521XkF9wNbe9FnZvYwj48U3kWSm98NfvsybkPqRx57WeirXCpsNMuFdEH1Cxtjpzwb6cu2KQnScSVJNyhuH1YNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S8MFVUtEEgC26goTgDt12xFdmVFQz6cwZxQmvG2Vqjk3he5MyM4Xq2Jgaxmt8RgAN2VcSZXU1m6uiS7hQKPZGBE",
  "key1": "26LA2bB2as8gP5UfpTDVr1n96RFmqwW6k9XJgYpzxaMBJE4wiR3NU2d47rQQLfFqLYfiSkmMMxEUqijPseqkPWYx",
  "key2": "4u5vMy4YBKrodXW8JKFGWQZKrstiU3ZHpNuMMGCCbHTWWjj7c6XPzDee3NACYUhScxTDsvPLahVaPRChDCAmMfjL",
  "key3": "5WyR7hBJDARjXUCgBQM6XMuLfyHSzkF4dwB5icXUtjSa6E7fdgCmW1zJxuJZzqXsc4U1VcQPAXspdVSsBFYE7fYC",
  "key4": "PovGdBgFRDLN7pLmHHnTdtYJEgXZzgjnALtFSKKySMpGPyi4dBNTKDrBALttL6bR43hU6BHwSYPcztifdmcTekT",
  "key5": "5Pfi4pGH4LUkQU2fBBbtMWjsKFmu5eNLeaXv1tueNLNvMKZRUedUsHpS1qd9TX1vbK7DgwSg7e766bjc6MagzHsd",
  "key6": "3Rk7AgjXGZh2SJcU2YNHgNJhRAkzZSF7DHVUwmtJhZmT424HbTLrhA1yELemYHsyjUxYH55qCHxhg71kr8yR2v3h",
  "key7": "4NkoarrCGJZgbmcSM7h2Q2PCwoxY2ta6QCtXU49XbLT2bhMbv7Q7JHXDv564wMoZRayk1rEvbHjHRvL7fh4hyY76",
  "key8": "3gcBYFkZitot3TUPh1t3TqBdzc79CHXaumtrJ8LyLndj51big9p3prBR85UNM1kwh2jsgyKmUnip7KiGDb1onxUw",
  "key9": "5VLZ2mpFUbWcEjcn8yi3VSbitJmhy8HbfhPBp5dRkjJgGPgHonzHE5dnVaG5GW2hmsxcCdGqegdAGVY8UheAdPR8",
  "key10": "5o1BRg1reKfEoPRM4wfcsBMZJeLC1KAdUHgGvbFApJna1WJ19KFBsmGpN5b2755WgxwYwkkdpEnVcLEhHb2QxeGY",
  "key11": "2nprUNfZejbrAe3VEKJNqZGKBd9WMWvRPhZL5Wgx3i6eaxwq4rrR5JjeFq8KnqPRNHKpJBHyrytez5wD9qvBmge8",
  "key12": "5WBT1VoSmBstugig4CoWuFo2m15QCQsvfjNLHyagPXaSBQARNe1x5zah6EkXGAFFMEUhpFtCQU5wHa8iJBZaXQrQ",
  "key13": "3iP6GdAa6jRHynhCdHC6j9DWsaGEFVCfTmnH1ngu1rHWxNgLozm45LA278PBRUVgf7ML6Z3wdE3f25wr8GcVTZMu",
  "key14": "2XuJ8PDjM5UzJvEPsmoWk6sNdQUf7YsGJSyxbtfgwwxFyMfCcPBLBNAWeX8UcvMPiujhMVNMSovXkaFpJmDhaaqq",
  "key15": "4exc7VBFgPi4pBqn55CLzeeMQDkk7wH3haWqsEEdsAtEqP6VofHHkZ6ZpkBumYsbtLUm5731tvfyAcuVYzii3SNU",
  "key16": "2iHwP4TnMM1f1ADhoptkmuzJiR2PuussUG6eBdHX8TKGEPVkrU5L4AJcxaoLxdp3TerhsajCRa8nYy2b5NiRwnZL",
  "key17": "2tDrEbSS5QojrzYjAUs7ThhShbVxW2zzxuQzTaQ5yQxvYbh9fDQ3rDq9tJkdyicdAVWWmi4L4hDP6LjkqLSCcnkS",
  "key18": "2ypYN7ub9sa5CAihjoa9rYDsxtFbNgqvfLBa57r2tFtXp13Ni27jVT4DEmZj7f8BQZNem7sCjZ3nnCmBucQ2mvdj",
  "key19": "Qwi6YpyRNBh43X7TAEhG5Y8oZGvP1YHFUi6vHH1iWG8K9ADDB28DKnvELfcAhrrnZg7QwP9bndxfksnQTmJAatD",
  "key20": "2L7Hj25G5N59fHBW36fbWPgwDHJC7Dka4kyKZd4B7zkkFFgWP9JpnUkhTa4gHuST9KonYSH8f6ui6QyZKuEQTgSG",
  "key21": "qN8tzZaBcfPsyvWtZPFJWN1dcd8xgvmDchnXC2GKZ1CHc9HNbvKvLYdBX8JvMJq7PiZALtCjuejk6nRV4juwx65",
  "key22": "5heauA96nJf2Hzk5gbr2JDg9pjsS39WCFWnoHPpJ6YCqqfmvG3xhJtQZ6xYdEAdVUNPPkQkzdKbKspTUa1WPN9JY",
  "key23": "5WnPakS5oHvi3xqf2iNZ5RjyFmuHnrPtPo86r3xP5iKSUwEfG3fXuv9fJ38AtceH1uciNSbVA9uyAWjUphGsHVV3",
  "key24": "5WwobC3j1mgbjkgRSBwwSmscAdrVR9LM3jKBAEuAjJU359HWXirtgHjyXDCkX8KauuE5aMa7ktnqs8VgZeWQtmMn",
  "key25": "2Fr45oLhq3fLN5FqNDsSqAHrJVY4Y6RzY2M4XEJgtajZwuMKygqyaMYZkwnrHNUrUtxNwyt8G1AxBmT63QBuDUis",
  "key26": "3tDHL7tfENaWeqQHEVVCtQQW47fkF7LCrbq373nejLf7zgQu17fXTSFGcutyXX7pZ6zZucB2uccfVGjR4AmGbvuk"
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
