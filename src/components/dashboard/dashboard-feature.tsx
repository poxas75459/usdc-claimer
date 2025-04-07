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
    "3Y4MuS9P5zMTq3ZXYkZLNqTmNAfvdqrcWW6WZpxo9FjnHSszxsbFrCW46zDyHRg7CnHtFkWRT3sLSEuBz5ReaZsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ky4N7hmcPG4rd2G9CxdJkTNfuqzfcJQCJjKoNJGKzbXGxFJhTSxMzbHKo1j22b5oeCVvkENRcrYUgjwY3zXBEi",
  "key1": "t8L2bB8KWjYat9ayB9mqTnU9Ba8ygkmEWA5WjZ2JAD9ubvptgxraCxSWpHE4jYUTrLHV9gfzz9VdHqYCmmPg56H",
  "key2": "5HUHTe3gb6f53oJFr6HvVMiaMFqoUXK9r5W3sGyzh3aRPQQSfUKB8PUJNRH64mNMytWf6Gef7hcr3J3CvnEoJqo9",
  "key3": "4wbfVGBaJt21eK7vSxE96GUc7dRZa84e2pDWr7LoDiqmp6TCcEywmrVr4DWGVKhUj19ztmxMCyAc4MCqC5DUWkGP",
  "key4": "58Y1yuLTaw3ucwiSuRz9WEPgkuV69iiQJrurrPNLhjBWJ8vbeb9xqS8MsKMRMxjmHxyMKMxgjxWEfR8ybcXT8MZY",
  "key5": "3RLKyRsBgt5QHJBPbcYMmdEpyEbNdxf7mUnkWs5szcTeBQLZcvVRnHY4fioQmpWQUCRxsf9R8z9wWqCJPGWvmY5",
  "key6": "pYUMkt6gk4V2YYgQUta7tBAvvxYupzdXQL1LW4BV9iEjDrg2rupeaWVjuc2sbZbpsZLQbjp4UjPvY9kr1t39NQK",
  "key7": "3FYKPEQjUNxKZz1pPR7RM6t6e7vFT7ZyHhuCiNMTvcffkHsYyhz9aLcKSBJQ2XBxr31W3bFDrfVuwa6PgRVHRxHX",
  "key8": "67D3LsujxUiW3NSGrvk66Tz3kXyhyioBwmzvvLnqwuogeVpoQgMKhU7TsSko8BZx7gNssVJ8PUkKJ7gCZsTxJL2Z",
  "key9": "2e86qMXNiegYi6u3e8HG16dVWvLAy1ZPwS8fBFuiHeHzmefXE2YgKCDSytugZf3evoeCuFxTYbEr7CnPtvhZSwR2",
  "key10": "5RNrsNkkkjkMhfRDbArX3fiZDAjaSZyX9PcSrqs4tJufGHZwnL6vFTPzuBKPDhcotVVT73r4nHW1BvZw6izsJ7vD",
  "key11": "42PdQZG55KCoD99QrdpLED2GdJVeaSQyeERnq7x3Gv8ordbrgguby3iR8fVqiz6B16eKPpVz49uoHfkgkWCBYi5Y",
  "key12": "XfFogJcrXUe1qhmnkSVFFakB4MxKAqDfo9ngEYFPi67GKsCGvzhLUxrLBzmwD4eSmo7PcYuBRBuScx4nxDXkmqr",
  "key13": "2i7EYUMZcFmtBG68krrzZ9ccf6CF3YoRGtvJ7GWNC5zEsc3TvmsSsrWZCKhok4ZLmdtQA2froZD3oyiMgt2qTaYU",
  "key14": "2DZN8uMx6qEf33qzuaap4pYh22aTjYuCv9p9Zwpm8ittWgtyKrN2Tb4dF14zKvZEm7LwRLsK9m3KZwf1mh47DPTd",
  "key15": "4ayYX94mEDBijXbb2npnf37HopYGx3QF7XZULTmotwsL2wb8zddJumbvRf7iqbb62YViNXnhuxizWYHBkioiuKVN",
  "key16": "3T9TqCxMNKWqdHdvvLesnTCevnmfXe6Y1CLtt5yteFkjS68vwXx9S2myxZKAvkcFJ2UeoNUL8JCi7LL3XPMM8a2m",
  "key17": "4hwGPv24Zz6JgSjr1MVN57Q1RnSs9jjsRF7UoGhXnQmEgNxhuKBAbrJUuEF4JioU63pG55fTSNBbPX15q7tUnueP",
  "key18": "ztqsoc6h2XysjrDGvfB3AANrKirKiiJAyZ7mCGgQuypKuzfsQUKaH1MovM2AVsWufJWHWepsofKTSetRAPZ2Nph",
  "key19": "4NniiatG1ZpNK1mVsZLox8dJtwCeKsaUggCbW2nZak5SvaRPW4ETR6BbPNGtWSFvTAG75R9HovKxt6naXMrma8A6",
  "key20": "5PvhSMYfgRmWkWCG1b4H6LKjRCvCpdQim1UTR18DDxjsB2ur6ghAMEyUQdChiVbTZRRx2K2i6hti1trUkzrrQwUP",
  "key21": "2ygAksn8jbt9SA2FXLhZJou7nXBJ8zjt8fCQWopozEh8Yqb7k9US4BhLv6FsuGt9Va1ofVpDNf51ZCmSCpSuEQ9d",
  "key22": "2dJQkKPqgHsYuQoHkzA2x6vAiCigWLjbGk37uphRYPyaSbq8bGy4YhFww39LbTMgHCsXfbtaXHuuzMFEY9B97anj",
  "key23": "4dn1fxRE6a55uxL2pDvhTvRPHDc1ffJ7N8QgesQtGeXMs6fSoWTNQxZwi1Y4duaa8jvAzMsxAWi3x2STLuKKwMPS",
  "key24": "4Q57JGXV2EQayiv8qpbHALMV5VmmUWBUk5MKhBBVSc5iJFizXC3qkvEkLUkC5R3zUxwDXAo1LsJvryWvRtZ55iEF",
  "key25": "45iyrhJseMupmyMo2xwybEgJRARUEdZkvdKD6ntQZdhnYBHHwMYxAdVVau3xUER4Puh8g9LqNA2Sqg735GemSdNF",
  "key26": "jPicotH4Sk4f2F5EvGNkd7YNhQKZnW462zTPvezvdmCoeyEkCv8c9XzJaw1m4nbP7oP9yabhaaDos8BBLEXfH7J",
  "key27": "8m89f1hpiH24X5SjeGrF5guCze7f6xGJ3eRvPDn7qzXS7fYPwDZhAnTMxCNVhnGg3ocSMbVBBsZ82zphVffxBFV",
  "key28": "5VCrcD5Stew3vnyC1WTymYG3YhhhEEW4oYxXP89KqeEatNJ1Ej8nAPC2WAegVZjrhxDasDatHFTQAGKUTLKfpmdC",
  "key29": "4SvCrDCcZPgtzktNuKRfU1EWPe1BFLX8HQv8CKvefmHwnWjQ6ENHfShBS5cXfpfpWaY5K7oJz5Gycda8y8iAzRFN",
  "key30": "TRaMYNmESj9oCaoFGgq5LoqXNokBNNGpuB2PbPwtNaicjo2uGJcF6nPp89xguG5C8JeG3TnDaPLbqh5417aMyb8",
  "key31": "2vGBCwjs62vx4tVC2udnMK5GJ128K5wrRec5rRv7PMjovtJbsfGEFeDBkh9NcF3bm6C7HxH7E3HK45zZnkEeoho",
  "key32": "2NQV7jvNLhUU6YpegNVJ4UgrrWdt6cQbqZYSq4A4uXhkttnfeMupB2m2ynXzNoNfUiX5SQmZPUNoXn7uFZNQause",
  "key33": "CGswj7g6J58yJr76Zjv3PQno7WeMDNkKbETh5cQpkancGPdjqkzRv7gwzrDX28DpDjHresJyey21vRzXq8QR3oU",
  "key34": "kDzrhPHgvnhGHddHmViBmXb6MDjNUfCDpeCrNFU6dQ3Tm3WUDEZ7Emvnw3eDEcUapBD6oN3WNmZrQWMngorAPud",
  "key35": "2B1iWKHFDdCsoQgWVt4Vc5rHwkYKqgSuAGsLxeK9Ce5Lm2U7LwuspoMgcDd1diiTKyJDqzqy4wzjJq5aUsdz62uw"
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
