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
    "4Bke1AdW3uXxrm6zwbx4aJdFMih45zZVT9KTzkhrCWvFJ8hkH99d39A3GQKo19vK6ALWi7SVprjYouENW454YqcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eb7ERfyFyUC7xPZzF6YqM2E8dnJdqh7GZ64Nxx4ryQDPVyC5S4EDCenUntx4rHvnrJPUQkJqW6uAQgMWPtFjXrH",
  "key1": "3PtQHZPcdWrWnA8RtuME7yM43sy4s1WDV2qAx7EmupPW16gFsbAyXreww93utwLiXfedju5vwzrrHu5UjUqGiK5Z",
  "key2": "3oFuHnXjfQ1bSwdSkkkhSpaDAQPncGchvLKCphpW1yCrZi2xpzgg4GvEnJCQN7bbTVx3wYd7vFfTkyRRNtehncvm",
  "key3": "2koJJBWeeHKQ9kYyyq5zvERsYA3iatFrndNMzTgL6NPgxTfEiBGWPXskR51ixNJmW6XKs6WYsgQstkwo6ApUzjH6",
  "key4": "4wgdLXk3J3FZSRJ4S5qQ3tHcwqFy4GwjEgjDfUUTkNHTq3FX9Crtg5f2gNhwbGiBH8RS4Pjev89LPKRizbVcM8fK",
  "key5": "5dRhkoy1DoLXrzUoJbaBz9LsmQJAmENEpQ58jX94KGqz7AwrSMDARLv8HaZjwCRMpgXZXKhcHaBy9E3Acd5rhDFW",
  "key6": "62E2BBiLyYkVzAPwa2Uk5uaAZG67GrReMho73rBUBX2NK89QRvbY5HN2MfDAjXe67TPAtSYkuEqL3npFN1g5dS8H",
  "key7": "2kPyZ6EVp7WvwqLmWXmu8DUtFhdvgJzpM7sakopmjk2y9ogcWdLs4tbztSb64B9KHz9G8oTXK52vyMNu1qGmmpxR",
  "key8": "7jQo8mr2DR4FXp5j8HBcwcCfuDS8gh4LLzjkaGj4NU76kYPoBckeoZeFdnyV3dw3VM3VLfRfiZ13DoaMFmftfqx",
  "key9": "2J8rdTL4iT6UDAVowRsmW9txmoqxjMnD5APVpSZ9b69CyAb22Gv8qFmigFbFDuffeRimxfJ9XDEnNMdJHjsftfxr",
  "key10": "oJJe1VejuVMZu514DFe2u67vtqJSy5YtKcci6S376hJZfMbEVwbPPD3GxKJpWZEKQTgLowTXvK321ZZeQjd6mHw",
  "key11": "41YCxpj1XikyAZCRMdz2e2zKEPp6VpRKikU7hQR2L1th1Li4f6xgnuwVAj23EyLcGtbmfoghn92FcMA1m4RQDh63",
  "key12": "3GavVA8E1REb4dtk8fx91DsrdLn7Xe4Cd6E24NGAvcujDv7mCpGTF5eQ9LKE2nthn8QiEvsR7aNJdAuV7sMrZC1K",
  "key13": "3B5Xhryu1TRgKuHbZ31Ze7ijDPdtdmJLX4Vj478NNo7scvhDLroXPYGVxcYcagBNNt3cJXiemTdrcWeH9KPnViqw",
  "key14": "3afyFyHWuBqhpi8HYCbNPKcHg1qG5t4b6YF8n8LfCT9SEkQmBunyPnKA41LpiUa6ugnEDwGazH1Ryt6Qim2cEcmd",
  "key15": "9MzGrcApqzH7rMUdHH3fgmidMVJAswdw5zJYTCYqgDa1KM6PfzyPnjycJtTzPF12BcafRCpp7EEkYyjmADZB9RQ",
  "key16": "8BjnnfhzuPJRxhrD7NAW9cxjAvVzJnzBPhitEGXx3XVBMvRQzirHWaBHoyYKPvDTW8tG3HZvfBaczLftqXLFdoc",
  "key17": "5T1EorAtxFNzeaWedWmNGzfvkjvztPUffde4egncuFxs4HJg688k7qzdnjiFkLuxJKmnjrzBX6m6GWRqjhvTvTza",
  "key18": "67iqjT9PQDAy1iKxT2Y9mC4mJkK9eEBhtRm9AH4LVMkLaXxbJuQCyabnt2aZPCQ8j9xJxPZe6pkW524Qx2qJgHXq",
  "key19": "5oRQmynJFDXhLNRpfLckG1Nv4s7STRbkFa8t143DSbv38BmmNyxDqyPk9dwwpm5oxevwxDxVk1At3ESLF693zUY",
  "key20": "trgVzd5bGdoanZkxoZW2tucw3dSZ1LvycsLtJ5CjroKHbS5qVpNJdoejVz3D6EiU9AzVBCo66rqssWD18kJkANj",
  "key21": "4AWPw9S63VQUgj1BKfP3FDVQQjMiqC5NJcdJNsTjRtLb1wg1LztEGQM8J69yxvZ5AGNAjFRcqoVpCWn4TQf4KmcR",
  "key22": "26FprKEgycZSmWfdnpx8qU7MjjWUvnHniZJErqY1YQ5vwj1ZaNdHZSFnqM3sf6fB36xDxi7xztaRCZFfaGxZwvBH",
  "key23": "3emeFCYrxaV8FxrJYGk77ARvwDKHkZD4FFBhXAF9LkAnuCvaFb6B5ZC4ryoARpLTbkJ9LoMdEGf3Laa73ZXWFdcm",
  "key24": "3z8ARZkEUc5tVWj8pZS3HX6pfd5TAWZypFi9Vp7wHoiFPJeZEcjDUb6BCY26WvwRo5m77SPPmTgDcixbLAm3LgLQ",
  "key25": "2jas63SFfFneuD8Q6oWJJ4RmgU1Wb3ucESnon9abYu3mVRQ2fifxb9mvCvdjmFaQgSbNU9QzuLng4ruLWA8Y1M8i",
  "key26": "QTPW7kTsaGfBD9z9vsn2mU7LZxtRcuVenMQJcopQhX8WXcdYNHz9psu77aM4LkbezyXiBvVSTr1ufNCYuVy9UpA",
  "key27": "3hsYrG5Hj9BBs4FoNXtcfGfSXQc2R9tevd8FGzk98Ht2XoFnM7TjKPKVmg85wDKYRY2rUTgHG5WSComAiwSXYokH",
  "key28": "4JzJxESw2L2Ja7yfXdsqm88fTbVcTkVj2oqcGSRhJvHrhBzHr4zsSGewfpGyM6LJ6Z78wXFaBt3orRYpHGRzzpY2",
  "key29": "49WXQY9SKmtcW9wZ9xujgLuZG1aQWW6e17GxAtNcde21Lsk5or4hBvM1fUdHbM31e2zjTvYYFt6zrfLL8K1pm9i7",
  "key30": "47oVX334Mc3FaYjt3QQeRPNqJCGLWRnGmkW4Qt9oswmbj95fzgJL8KEse5HrPoJgwXevDnmdti2FgVeYUqgE849t",
  "key31": "2XiNgqiv7fVvU1F1GxB3FjoDHYerPvUJK7QssuzwQASjpp6uzvKHoYEgmKeyZnLfGFnQdbKum7Xa4btzsfMwGWbq"
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
