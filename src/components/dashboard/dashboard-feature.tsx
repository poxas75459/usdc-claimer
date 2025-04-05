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
    "46jyBYCuHbNFHenWpYnE11SGv3TSbAByZb2YzqHhJRDtgVB47mhGdhuXhQMpFtMbkeyyaYeaTD9Loc7qfmYF37H6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JeckcdrH8Pob1U5TGk7iGKYD6qY9bfYtjkEM8UJYENPeohYfmFSwemf13DY93qNiUvhNDUUp4iT2WD5MBVuvS3Y",
  "key1": "2sGSXho95EmLZbF2SDhS5biQGpDXpyGuK9rGgHT6Hf9MNmQ4yMRY5BjBWjp9GPZhUpNuDNNoTLQVP8YHHcD44MPM",
  "key2": "5XBFHKioicVJ165LoEAFLR4ZnafrdZbVsxQY2Edd7UJ3Mrt2Mbrv5Y48KGTt2mM331g595QF4UKEG3EkFh3Nb7B7",
  "key3": "2ptXYZD8a12KdoanLTMwoP4v7ShrH98FYNnHk5KvhST5sTNjJ1WQXT24GpwmhuinwZm6sfE8oyqJivd6LLk5o3C5",
  "key4": "f5eEsRbRJLv82tbXxgTvNzaZps6LyhfnGVciase4ratcqcKxLgaUcfsrwzJaeHsTJvdpkZfNBw9xraLG2weEyTJ",
  "key5": "45NXY8FhvPMHTYhiwFqCHNVcVQzjtePyNHLe1GieiWDGyAsfd6QZjR6RdSdceQGDT3w9gdqEdMo5HtFpfVtpcjVt",
  "key6": "3Wb1fgXFAveFSPdwSmwRzHnpypRK3iY6owPg3uFrms93vPy5vqRGqE5xkRgGG1LCihD2V3juocbuuimyfTR62qfY",
  "key7": "2zvyAQHcJPXYDpH4WZP9vkkz8gr8vncavhKChA213hND3bqcQufhCxMCAfbERHLZJyiqNAtwQ8Ca3htiMxvXNtk2",
  "key8": "5wWT77PTy881DZzeRGP6nUiCZtToeGk2FPYXZmaJhGyteuWGLY9X9oo43HcduWTQKVPi1dMLKfkGrcDc549Hoidv",
  "key9": "54Y9EmJkVtMYDLzB5WfH2LT1N9De6kS6pmYU2pY8GXrzntu7imzd7wL5BQqPXjtZCzpZaBbcbcATnrR2Qdk3iSB7",
  "key10": "z6JoPEMzDSMAhcRd9jpg4we1vyWmZjwW4Dv1ArF1FfR9j86GjNjfSBvCy7mb6ejs9xErXsqtYa1jsp8dDausHMH",
  "key11": "4QuunU44TYmAhPRHNsvFjgsrSMsR1psoRMW4rccB1N39sV7wmJkCDUU8b7wDh6nEx5Afm2uXYsoY53MKR9nSzhwQ",
  "key12": "hw6Tty8yA3CoaXWDFueZiTWaNX9qraJkAP1WRWJuMGCAt2Vp9AjqPou3MUTsBMNYZmLaGxMFGsZjuhXRuZrcWjX",
  "key13": "3nqjAjFyZGbzixvFNq1Cf9txhMpmjsKR2721eb8cBvLxUNRQq6RYBTakfvqwd9t7zGCku9LHFrDd3Vp8Fcm7jPki",
  "key14": "NYKH5U7csZMvNxaR8DCwHR1EG9SiCr7jqyhCvumbn7jvsLn86XvU9JWzmJn2GuWehwRK2YdggL2yqhNggJajgze",
  "key15": "4a8YMfhfSkGKdwDYvpZyvzcHbtqc8go9SqpXPYvgFDu1W1vLTLTNCDM33PEZCYxAPZNoahKYh4zYazHGGj8UJ8HG",
  "key16": "hLURwWhUkmJXcfBe4axe1k69bj3Hq18zB9z3QoLqevwLHXg1CCb265fJ6EMrfjCxsZeUqE17NcX3vA8cyvduftr",
  "key17": "vn2xqmmvCuWYBvXCYYW8H4ynDjnoCRUKyE6ciB9tmMY1B8uCfE9D8WFSkWPrQ55BFViDrDApPRJbUtKMWMJV4N8",
  "key18": "2JNkg14xTXd914HjRq2ZwTjAEYTkGo4titGk6pU8LU2Jm1ry2i1p1thoHpVJ3t37qcqsg1vPFS1zn9a9B9EcQWeA",
  "key19": "4BP5dXEYRjmx4okzivXcqiT6eLs7CbPTNoVDLCG1VrV9N4Uh1FX59vWYPGKL9CQKSiUJLD8WL61SFYTmJcDo6cwi",
  "key20": "3gi679fQZVhkDGe79hgQFuX2yKLt714wVs1Z6WHEkLQGDcWVaaEjEXn1xMqC54VEVMGVsFtArCg5Tep9WSs9gUNa",
  "key21": "3hAJeci9RrVuqKCj7t3mVxA6NtjfTzHn6G5SrG7JLG7UimepbvJuVj4prh56g7XRCCWn6izbFXqmZNUgrRSQx4sL",
  "key22": "2JMQDV2jS5omu6VPVMkJJzCmHN8J7QA6cVnoLdxycL34BnDhdkV3EBgQBp1jqUU4W1CdvLq42oa85avc9xGHTufi",
  "key23": "2tcj4e7ZVQT1Fs3sffmCV9CCeppjZifydxGcdXTy6jv9tm6Tsk3JtAtvvGbe66qN51EShqWDux6NjPc5Ku2tcX7o",
  "key24": "29swF2MUhzwWqjAZQcpB1XWcHEzUjgZv3P2LS7WUyXymCzetcfwFowt8n1vsUd3KWZ1yGmTt4n9w9NxkH4367WTp",
  "key25": "47RY1JApgCiVvjauW5LobzPtMLnfmZD3iKTK3JzgNe8f16T16u7sEZEmhjNHpLv8R6387hgH7D5QwwUjgk9wNkMU",
  "key26": "4hhKJj9rKJ9qZ8SQgZyKnUzcRkSWRmbVF9n1mxs7S7bCqVWtRgZcagwobNdFa6mtiATpRCwbTyJvAJeh4DbbphHJ",
  "key27": "cobvshr3ZWBUxcw33eFF1BVJ3R34qXVTPSdhKHX6mozQMz5dd4sSbX37gsEX6MyAKoCEEoYdSa8Y2zJ1C9yNwta",
  "key28": "2FES2CAvPNYaC8GhzDJ7rSamdc918PNdnY4WcXqFN5FiXFFkVE7TZCw2vfMfEgNG6osiS37y82eFW2aa1DZGTRAY",
  "key29": "3WBDVF4TqGSAz3cTZKFg396Bw8R8NWBSW9BKezYV4H4r3cKrEG5X96FgcwUxmFdpwqWekTEdHNAM79mUJ5SdeAPa"
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
