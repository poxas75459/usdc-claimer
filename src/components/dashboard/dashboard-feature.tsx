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
    "vnPEjFP3JDDsABSAZEcJE7b2VwGDsfABqMnRpJMJRBpw5K95ozdKNh4yEbFi9XXe6sugzyBsDND8cFT9KWHEzaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4byJt5LhwbGfikuKjx39ya15CHW5As7FFtdGcnR73bXJf27CtdW4uMJoSpRVoXmhsTV2Joy2AbxZ67mLJ9nE47vQ",
  "key1": "2eZsN8QcoAJQZn9fq388xqc61HLyZwsGGWFywcNQ6BySoFjtmnHgLWTJn5c7vfJcygGS2bt5QjJfSZjPS9F96pGf",
  "key2": "294oAYjCoW1zfJPo3Y9oASEx5gpRta3wRLnGeb4QXvS9etbfikeev6jRx5Pwyzkw1V24BXsbYcWF2AoUyahRkNyG",
  "key3": "55RF9T7xvxPwwUmXUcCPZfvSU7VkURNSg4b9o7nK9L5b727tYB6gxib6D8XzkuJpWHF3kwUmBE2vu3LsHqNr3h7a",
  "key4": "5WjesJUn4UZV3CVdo5sJxVN1kZ1mcWWY2hHmCJW1RUfyyLaNnsFhLb9ak4s9va4s5z5KpPrc1ERaCVpDoCcx25MH",
  "key5": "5oxfSoz7NSHCNB3FvkFEamikJZ85AAGsv2vbHXzaiWEgDh6bkpvjSUEo7rTQBJk1d8UNd5Fk8MDnxtmLZe7HfXb7",
  "key6": "VmjxUR61J8YAi6FTDHFEwxXVqjNVQhbgLsud9mVCC9WXvZccTbeyvwGvZ6VG9pKRkwUCWGx1SMCeJfjGPnx7Q8Z",
  "key7": "47XS5dtdZ8vouvVF921hX1WP6EYxErxkXPzXbWHSNCY4wo9o8KRTVPHRE2KkmgMBPcXZbCqZXjKCUJfkew44EUjr",
  "key8": "3p7PSc1EW4bKT1KGkqmGf7yXPZLeDmzP56ooaN67mEAxMGo36HwQ2K9pSAu7dw5aDpmN3su3DLH5tS9CZ2FQeK95",
  "key9": "62vmfTH7qzF7yGKgHGKt18aBaATbFXTnyFEqC7ESHC1tsDeSB3gnFre9s2hk7TFqj9pNNqsgfysmaGSkobyupCLX",
  "key10": "5tKrdJ4FyK3UQSVKdibfSh774ussE4Xd5ecUJ4c1zm251yA7VR4Fc3QQdmKCgBW3GsG9o3JsSSCTWKXCm5SPEtzR",
  "key11": "3bmMJeausoHrkJkzfVmtN6XzFYYHv4sZo4Z6XT8jXbFTACm5Ko5KsLqrSsyYKn9TkZAc38As9qVRrm34Mobh2WkH",
  "key12": "5KfGKER834HB9nZGqjHW8v6a8NpszmRZfSqYSp7CCVRcXVrw4aYfckAy1CDXZ4PHEuhvShrnyv56iZY6tebM4GaA",
  "key13": "2sEsetiwR88Lb6p1fZLfyHDbx75ug3PZSPwmRo9y7xRtdp3bKyDikso4b27AR2incpuYpDbBWEHYrcAmMBcxpGqp",
  "key14": "4eCh5Wnntaj8awBit7kURCTFJpFm8mN63JzoCQi5g6EU4CpRZxdodwzATup1gfbni2X6GBBK88QHf5jyKVpKBJ85",
  "key15": "3YgLUZP5Q66NXMVXWoc6k8yboaEcic8rgS4f9gzZrCoRGxYXdTQqeUio8VdVTnDzoQARPxiz81ERD4wjsrrNEeu9",
  "key16": "WZFk7F5iWaT5csFqAgAiaMMGZzTTrXgQHyMk3F74q3pKno3odiJGCzMEboyGSdHKjYG6p8yY9kSs5uvyjizobo9",
  "key17": "3yNubp2bpRcW9JynAhsaDQS8d8hqLjbk6gb3cWzWexp1Y2YEcDSMpdL5guaUsrKo7h3fgRXtTripSYBoWiLb8Apc",
  "key18": "2pWMKsw6SFnEorPzmeNyUfcj9SPi6SgwxKMnGqSmVNKMhCJgy69CNyuUjy6jodj3wpqtrvN4pBWi9eTAm6oG2yA2",
  "key19": "4WYNZ4Y2KAcJKEeEHCxKRLDZFSihrmh72pwYsUM4z7eMZ8U3zzZptarm8DHusFnRbaY4kenxjJkB3uWfC3jcSGnq",
  "key20": "5F37kPYtJMCafvimhSvViAdb9ScbjfRycmfBh12evsJH16CrurAEBxLcRhgND2xji7yVWQyWZh9uVxAxXAPH1MLT",
  "key21": "3gv7o4Tgxw8TcZGPyUSKyVWJbpbgMM6yewgv2kh1S37hDbCMZGQ7Rsubsp9DfV1wkoaCuuFfQ1v6CFezAoL3upwh",
  "key22": "5eSCBmnapEjc1mj2CeGWqS9xGhsdrkRTGHmCXbdWwAYqKcLYUDYg7k6o69MEo56DaDYKiVqDsAuUHFij9BCvRFdN",
  "key23": "42YwytSw7zwNy6Mkd2zh9TTqXise98navGbV4ZzGm4dDC4aaL1yQkrM6ydeQRbDpeAkdbUeYx1bo9pAVyGcfksNs",
  "key24": "3LEPsdTaSRcehSz4NZpDXWgAYLRhZkXCqjUq355UeXqpVdthPdtfGsXVk5os72g18VNnhbHdw8ShXdovfEjfY2rr"
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
