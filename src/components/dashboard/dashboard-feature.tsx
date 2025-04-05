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
    "23v1GZ5nm2kWMtzHvJ3rn97wnxHb4cLMsVnqfkX6dcyLjaGHQ5e8KCSrS758ona5x1KSpk7BTNbXksuvuPkCVyuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5swkNSijUnpL53xUQqhvHzPS1PQsbxjhEBwAFExu4ZiP15zSg4k5u86RFp71UCwHb4mUWuW2CgpUkEfRrL8qGCE1",
  "key1": "5fN6uMz8D9NqNcRoUYc7RnNaKDfqnUei8hUzwdP49EUi8VEDUsCwSnrMkoLRtoafWq8GWZnU4fDDtjrroPM5t1Zk",
  "key2": "44YnWqrFt5WixemCttX6pck3gvNHPjskNwFd5wjwUWJf1wihAJMEFpKEajr9ABwTLzM1DT642ZFZh9FDYjvd6Yaj",
  "key3": "4yjLaAhaG7HAGGXYGGEv8UV27V3diowNq47vwDSBz9Aus82QykYGFgVCK9FkWWtGFjrn2eUsrwT1KPeTXvwdUoAs",
  "key4": "5YtafVaRRMRbozw3ScgdJq8eMcwfp1o4FdQDfXYMs1uJofwKF9BL2SL4tE4xWrM3oM5AvyrTkm41D7nzBNDLxo5d",
  "key5": "4pwSaG6bNiCFBQfSbTwnxhNJqjT6JJ2gBwi5kwEjhkYNYWWbrkne5mYkhb8Vb9YogUynaf7PBQMVMssuwJy4GT5V",
  "key6": "3E3Uht9vRv2fUF5tCNiznE6RFi7h3HH3KWudrDs6pb6yTvtoBK22PCmjQCFjxW8tcHVHuL7fnAD5mGau26iVBeTG",
  "key7": "5JtypDCx6KyBFmWk1JSvWxqRnRFtkciYYC21QLRzHBrWhWLAY2qA9kX9iZHsP9GtgTMiDxHTjLVgMWkoFWx6R9dA",
  "key8": "63VirmkgjxBsq6ZRpD9cLkKnspFDbxZBg9PGV75vEbxoHvGn3YRKVmJ8sdDuMgaF1ysTBasCvbm8A7tPrwtT65S1",
  "key9": "4JuwFaeMueCG1MC5c6ogTQSCPZwuhfU2vJ4mWKd12hv5fpYNeugBtqPsmCudzGyXM69RAJ2PDnt6p2op4ES6c2Gy",
  "key10": "4jK66dKb8thmNYZFPMQ4PxAapytS8TnZDFpGDnt8aQS51vYAxkJAiQp8U8W8bboqGZANfyYWDxjR1GMZUbdHUPXD",
  "key11": "5rzoU5sceoEGutSxo5Xhbi8paY1cvHF1vCAbzcqbdSQ7opXwBbSQpX1Yjz36NKfDVLMNQCJAuQxtAF24nJgkpdGV",
  "key12": "4hDKqZHRXMByC4LwbRLC46E7ub7eDwfG1BNUpUvAnWbDFVtJrD4TYfyuDoV3ndvpGdnXMTFMwtWL59ZvVEUaqsye",
  "key13": "5bXNML7U3uq3YLS1wXCCMu2XwwhHCAGVwdeD92AVo4BwBzqwgeaKT4SZXNj4GHXK9WMSuAV6zaaZx2xpLdYWaD8A",
  "key14": "5GvN6NKgKctbou42VeCajgSujqPzeqmgK7tZZ1Z753YCVd68NJJXRMQkVyJK2zsemehcLpVxkyJCj4g9JuZNHnFs",
  "key15": "pJ31kgXuDBJxgsh33MQZPxgJnTLcVDFQWECVqyJdUcvaagFqiYtT8gsav5WXskCsQPemjJpiZT8bfyRabwDXgVU",
  "key16": "4cux4EwaVFAM1fd9DqqH5sHMarz45a4vkS6MVwAKt5xnGLnrucMZ3hUTobG9TzAAtEr6mAYE5dyYbwy84HyjoL2a",
  "key17": "4Q95QdJDY8zkDbxhcTV9CM5FsHjuTFr2fe74g5H9JC1gDeUuCGCkTzARrAzj21vLjhvCHz18134kjchuhHFoLJHU",
  "key18": "5pe8H8H26gY4dYgKZULN6NSLsiRBSCQ2iuDwQTJQedpqx7EoqDYBeMguEUqFnQt3t3o3H48GvPUVGXzjWp4p7ax2",
  "key19": "3TnNAJpyzWco79iaHebtz97L9JQxpMYPFqDEFJuxgbtXc7UXrFmjRVCcAxk1VPRhrzZ3GaR6fGqvsHWYZUDJU1ct",
  "key20": "3BJYMvqTvZyC3GNJXZ7u5DH8hvEc1sUvNDV49nG8WkjNKjWqZXgT45nxu9iExSmJUQ5dr78CJoTYZ6hfewLp1eAY",
  "key21": "4ZkLeto32StV4HnvkaANAbUNuiTXKosvc6U3bpiJpTTWwQNhNbCKiNUiScrigVuwUEcVzpZs9QTX2gyDTYWkqPJw",
  "key22": "5oVBATgqw22m41NBCGDpzcM7Lm77gYpAQkmCtjYv1egrTZd7xN1g7KKtgf2rxJ5njTZoamPn5B6FpmKsTaX9xrMM",
  "key23": "3K4agtNoiwQGm9JJvaHfj8GcsHhk1iNnvnqXCKJfqnxLPeHEKwPnVzAq1WUCtZcNFjUVGoq4KqX6DQKYVHKuaUfU",
  "key24": "47pwpSA5zaUXvMyPNXKuwfYnmhLXJFNrgoCKB1Muqx1yvzhZ6yCwmwJoiPYgQeror4fBkn4r43MMj27QG5zervCE",
  "key25": "21fUSyXXfxNnHpHh6VwTTB3vP8U47Dx73q3uNpFkzNEKKpgZiL1ho3y3mrprrKsMmKiJtTk7TVxTnzeGnM8F5feZ",
  "key26": "2KJif6aaK1fq4uxzLgWyhJJS3x1mm7zni32xk8PcwbfN8x9aH4h2ymNjQveYZuYYyhKpdzdRzn6F6cMSFHtqXZZR",
  "key27": "61uC7Jrw6Q3jGymjqrxSY9WvAs9xXGh944rxyrJTQFYkmBAT1iB4w635v6W466952smpLpgHqw1iQDSdJSd4ymrh",
  "key28": "25Zq55tP2VLS9uHxjPmPC85pfXA6u4vTSxUTRsnirq5rUSHvMNL96AYyyQBc6qKES5G9JcMdg6h1hP3PH3CUGi99",
  "key29": "33ETiJbYAYWhdTaNZADQWBLFFrjR8cN7X31qDmwffnFxNhrb1dwQJHi1kohwjSMCya7tu1Mp2N82rSLeqVphTMum",
  "key30": "3uoefHKkSNq2ErM4iHrAWwncSMeyhtKZfmdigEm9j8j4hJUbspVXbWZNzmccfJ3DBZS352TvZn1GMsaHTEaYmqFr",
  "key31": "2raaTQ9eigqRpQYBSQjFwZRGNTF948ESDA8rS6pbJEadw6x4GcEKgLLNTLkb6GpKsiaruwxAWzm1NsfoPJRSSrSW",
  "key32": "4JMpbAqWVXy3Z1xw7Raz53efsEjgigFF6ycsN7LNbfPybgHhxk7yMgje8j33Q84Xzayswh9obtUzHR9FhSFDjHYt"
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
