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
    "5bFhARabY85Q5SZzayt8iVxJK5AQF9jpjgS629D7VQFEuD2Kygto7zHioDCF5gqhGC23vqYfmCsnmtJxcjVL8f5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q789FF6Zx5HUfUp3NU3em6pKmx9HeN1Qmz7ohVbfLpMocuBAcLxtZvqK5YoFtCsAuwXkfU3MoC4BpEsoXLM3bf3",
  "key1": "4LbunMSVuCvsJwyzjj8KLe9Jm9GLhdiqqY32dNFNPpqehtinWX1ZiqaSTMD127opmZfZLjgaTVGqtSgFcibVr9Y2",
  "key2": "3dbiu9DrmJ6wft18owD4yJhy4M4ijZ66fMfaQevkd3KagNZuCUhFtYPJZVsgNpJq53RCuii4k31P2yeucfowwoT9",
  "key3": "s4x4548ZaXHC4Mdz9ebcJBVn2sqiHxf9aXq5ZLJbfCPCEgz8NA7aSKTC81aovBdSF35igjdbZFAX5WEHzr3C2iu",
  "key4": "3vY9Tz4j5WrV3CafKH5AtPkpwnBxVZ5b518vBQHUQ3k4nKZaTqG5J8vY71jMghB6KEBiLYRzg6C8DEHnUsrgM3wh",
  "key5": "2Vo7SbCkmGon2M48yQ8PkSFYjBB8PnANHTPawv2ChXaoyVrTkNtmwCbbbiB8RxLGRZ4eULD3NxsBv9iMQqgJUuJx",
  "key6": "66RpRBgrAJYu4gLpVV85VviquMf2S1NgFtBEP2Ch8e78Q8PMu7f1YW85jWUaXC1TEKqeysmFoK9cTjWgp5v336CU",
  "key7": "vruxDecrALVDhyMUwDcjz2g4cQAoTa2wNVPPnwE15S461qvryujgLxFSiqV8U1ha3rKyfkMxAAFKLZY2TQDiz32",
  "key8": "3uEmDLT21SCLCRWLwcPX1cPGiATZSvF4xdi49n3uuyyc9DuQAyFtTAnd7sHv9AcCC5Ppcu6uqq8gcYALNGvJfAjp",
  "key9": "5KQXxVBXj4BG73YHeWxHbWWUCK6MCyCM7FRqjAQAUQTpafhNkwcVKLiKABw5wKwMbaqNVYfe1Yh6ziopaCkGEHNo",
  "key10": "3YKBafNUrQmvfwf2XbmRRm9m934A4mwxu1zjz89TXr9oNaE2ypNtpdfgEFMD1xKFxX1rRDKF3R6bANpsePxPxg2E",
  "key11": "Lfwowchdn9qbgzT4hJ6sYibcbGZVxrx5pcpcPSnRuCuK7Jr6SFNsruSrSbUq5cXK6ZjQGAjAp3x9Y656em8zMJg",
  "key12": "Zb7717AeYiyVuyytfxvqbTwRMTTjPyRWqLfERN27FgB4nvemY4hjE1RRohAhGPMAHFqknSMC1i9qwL8sSsLttod",
  "key13": "4VqJFapXxNZYTucmxFCTMWVPBMr5wk76JLpXbnid3sBpRNAxAZtEwrUUDm8cXfP9HxtUdnhPrRRQ3LhdWkY9Na3b",
  "key14": "33T8hpthbaJaUEYkMfKg6cxXo2izZBbMSGMaBqRCEYrKV3xihzxdQ83WQ4HFbYeaVzcxNJpysUmorTTeheTZ3A97",
  "key15": "5iwkosKnXWV5mE8UvTbmnXxDmpuKJSZcHDFXQTi1Agq2gT2KtoV7h6SMAXJwdZrVLtZyfsFHsj5dzW4TTK48kZjL",
  "key16": "NnXQkvbBNFvTBa4JLtZMeE3kfgBmPjemqoatbz8PKhZZ8HGXTfS8vMq9j38x9XCFy5o2UZ24jbd67astathBdEZ",
  "key17": "CxADDDjqF5Ev6Wfy7XyNzuevSZy1nsdVZSfnZnEsMwjJrz38Uqr6gfxdugreh8ykFtrZBquWonaoectTqP4iVof",
  "key18": "3iazdm6g3ZJQobgdFoaxn4JVo48Bvo84BxV5uVisuxxAfJpJwmRJUTVGsk1RFJYa6GtiMd66Hfdzim7cS72ym1ug",
  "key19": "2npAoSzxYfdkXJb5W7tpGsGNCrVmQuPJckyV6o82RSpTZLQgkYhC4ALpBoTwrkka8cvk3a7e77HnW42B6YzcPjMi",
  "key20": "3eNtKzVu29h8BzCMMDJKUgP1SW67Xt5Ru1oTTX1PFVL6PWBcJxUfasnfB6s61CNnfEdhGEvJCAeAc5Hj4Dbp8xqf",
  "key21": "7prL3vKfWuQGWDGGnc2b7214c1gka1HZafB5LmsX8YWK84P1cKpU6oSKn57962JdBzVQGkyvZ2Py2BPWtsiPmTq",
  "key22": "4A788XEo9Cufdu1NZoNKAWQ8M22kGvHVa51VnKMyAE1cBCr7hgFzFrybjyVEvrxZVxeAihhKx2tyvkYUaNbwmkXY",
  "key23": "a6XxAhyS18QwL2VJo8k1EJY6nR3kuBDvSzEVs73dyTYhyuNMVvAjeHDrDf8SCVaJARt2vtFzRVK3Xwac7D6SA1R",
  "key24": "4YWeDmVtMfKot72nSiv1w94GvqkLGWLW1hWzQUbQ75QQZpf5EP24AUNUABJj45Xy6FSsayfZzwCrXJCeoWF8vLQL",
  "key25": "3soCYmpgDFLv5M6gjN7j6tLaCMLiXeDtiSrZR3L3yUNFS6MjhuBKtLafKUMfKVtH7UpUGdrijxzcknDsHJHiMMog",
  "key26": "RUxm1UpWbJWXg57Cs95Lmb9Bv7LyC8jPvekZZUjm7ErBArxMNY61HicfPxffNA1b5u8jCZtqph84MLyN8BFxUWH"
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
