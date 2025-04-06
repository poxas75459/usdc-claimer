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
    "2BHEtHQnes5VmQCBZGrweP2DykKL8c86CgNgUrU5Aw8hHfYdGAvnU2oDZU9DCqXRRVNGWQxgdwBfNsgy2nL19RdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q21e74xTe8Qk12kqFBTCUj82dKfhjwwXTqukt9dTXJboYm9GGx6TPpjMePQqPX29XHh94eCU9MTB19Mahh399oT",
  "key1": "5235D6zojCpaXNABVAfDgUTPGy7csM1TZvZz7bJLoGxyWWz5MwY2uiXt9gU8n761fTf2RhDtpDWZPD2vTmBvw92Q",
  "key2": "2GLp56sVLiUN91fn22mEbAU7YTNWQCmgnQuGtF44rMEh5XVJzHe8vt5akwhZBQqjzc7k3CMpZ8qsqFHmoQTub4zf",
  "key3": "2vC1pncx6pi66taJveHgkx771vUCbD8o7JMqXVZhuHRNxgkYob67adXrMpRgEvQVtLMepvMi8XM6oR6b4Btmi9cE",
  "key4": "1YkEj6pk4RgBfmX2QiE8fRa3XCCjj3vmZS4NKzAwR8v1XAC7C7E9AFxZAtM1eNS7Xd86U9k1rjpTLgZ6iDiqt8V",
  "key5": "2spR5Tb2LNaxyWMbKzfUYXqrcKFEredrZjbdFPft5Go2NayPDQpTvXDMWL7G15dVyMyiAmrijv5ybhmPVbQPBBEd",
  "key6": "2jo3qxekWS43V3wk7DzbXgL9fMtWBBvy5NLobHQLpzAKFWGZ3iraXjcUYNvSyCPPHUaJphHcoUUWuw7UzSp7Rd4D",
  "key7": "3EGj6CtxjTcV9CEbhTmh9GVHtjeiNUy5X4oZq1TU6N7cCCJrMDBcCSxaPruLSiGLYaYs6ceJ6me8K2QZ4ypLmBTm",
  "key8": "3LZ377whfmPyxT2RqwRe9owoXVFdehnnUX8EjrVvAz8Gn2yCLtgvUoSyCV2sexEwS4LVvtsku5fyWByjjq8A8TSb",
  "key9": "2PkfRZ9NaVc4RXxsJpRMoYezLr6mZJp5dWZbN9xCg5cRmGPRuFb8Kzz2qDPZ8PaKcgmHeWSkJKD14YdW5bRC7bUc",
  "key10": "RLAFg2rNpwi1jn8r775DY2W1Ef4mV1sXKc7XQGtmRrBj2EzoqES3YGhLeToffpZS4r13ZdSV8ptT59UbG3nb8if",
  "key11": "3e3xLsvVA7zxyCgoyh38XTDhHVdPumAgnjyyhp5P7tsGnHT8ztRcCBRidgVdvQN7rxwvRkEdQ7ji2aZmGxCBejZ9",
  "key12": "4RNptAUKzEPi4K1WUtYUD8NdpKza8K6KS3y1UMGSTFNwK9tNyjgT83jLSznjp1ChLzvvxb77Yw8Tjdt7cYKBeNLu",
  "key13": "626wfkTHzHXj9h9FxJ6pmaQdPMbJfLFRSwBZbMDVyKZrNknaFK2AtnvgowpZECd1LnxbKPBtHe6CPV97XrwzDuze",
  "key14": "4nG9vU5AoH7wEkvadTuYXg1PJYTGEPcXgMtHnughG68sHCNHm87yhBbBsk1vfnAMYkU5Q6KBPJEkUrpvwRfpVFNX",
  "key15": "3jbg3YzZ3deAmCdad5KtaeWXEvAc7PCG1dgkqcpfQ5xVVGh3MFwVTxvjWWG5MYAHgotD4BAvYjChn8MhJ2J2dypS",
  "key16": "4GN7PJ9pqhbYkG2SFRP7YeiZaKyRvtHLr2TaHPMMSsTR1MdvZ4tfknj8kXfogz3t7WnkifinVjctqYy6b2qff3ij",
  "key17": "33bcxQRLAnAbYKJKuXTFaHJn1dr5WMaLKtCVvhhMN2rm8rqPefaxJtSACstoPSMYhCL9q47mEjsS96TyniGjku7u",
  "key18": "4K8K5em461MdrZpFYiXWPeq4tzayxR4SPHBBQs7qjU643EyPuctpR3VKmLSNFdC62SQA7mj4vTyCV5N1BpRvYbyK",
  "key19": "5oQDU5ajuGWb63b8YNdcq4rVxwzriZqA1hqCF3sqDcgCrRPJjXWa4GKMXqtgPCTzqZfrsNUjp9vLibUqPpZW6v1v",
  "key20": "3TWKUZzCPrELLmDd5pFvpYttrLcLfNChZyLkABFPn4LNQ7Ha6mXdVcmVQFNzbfPnmZYeLS6VCrMy72Fmj4YvjtJH",
  "key21": "2vCddq1pn6H4dE8CYJNeJAjxfZ2f1b3Sd3owQ3dWmexdxZPmNLH6e4hVgQBnQJjHa4RHtDEMYVuiR8tzpadLKg1",
  "key22": "5bi5drL6Sfknw93vYr8zGsytqQ9P8yrpHVTYuxXmZnA2uK7wVkxxJkAXrrndufnHs5SvYFzrbCkT1qvUYq343hvh",
  "key23": "3NryGfFadVhYe9oMHH6kdxuBdoLHAWNJQ72UL13fpxHToECcZYecKrzmn3KGZNUpGYR8PfLsocZQ7vfAXngChETg",
  "key24": "4eFGMNPomyhso2extZn1agRH7qCJaye49MSEoKpVf8V5pV7D781da1wjKw96yymhKT97wPLsY98dvBRhqsnu9xAe",
  "key25": "2JYbAdCFbN4hnLsDuNJWBwKTqax6X7Rr7HipJYNkNMQS44L9k4iJ8KP8KXyMrHMaXJAUZkSRZhmdArdfLF8kKXTN",
  "key26": "2HmrSvkFYVAUerVN7onbZFMmkZd16KFzdJTZ94YqKUHBB2tPcc2uRQdsuJLbpE84FfxHjvmYzrXgcQAE4rLFyuLY",
  "key27": "4TYuMDbTCZzwNTkvkG6pY3FwVXR2xusetqb2cL7hFFztaK5NHVKjDzmxayNBV5GYtcDmqECUL1QP7rgXn2UjpFMj",
  "key28": "3deZLg3cDQayL3LtxvNwm5QZJK1CFwT93vzF8LUxRi7XEAYdwrJRUA3tCUYExcPrKXKdPL5Tma8hFz6Kzo8a9bA7"
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
