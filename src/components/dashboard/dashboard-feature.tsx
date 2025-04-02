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
    "q2W4LnVbZWg2PwB9Y9uTC4kd2UZcYok2csJmBm2Po4otgs1zFRGwxnGSMPfFFnitHnQ8e4igcSbDkywCq3jm6YJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M4kuPj21LNhxyuCCyynKEP1ctjtGZtH9oBmAVdPB5SM1hBNHJDzm7X16ECXKHLFCyqf1Jdsxgu1t5RYdvBN5ALa",
  "key1": "4FdscxtzjvmkPQ9VuTRK9XncmmSLFK2BopNb7cbiLk9qPUpFFB5X8rcgpvr2UFfXScfoaFfUNgap87mduwWNfWpw",
  "key2": "4hqrRf7CAG1XqHZyfBKG3S39Ndni1tzN2hj6SZKFQTSny74CrYUDAqJJrfGFG7hciMzDeq2XDYxCmwHTZFzy9U94",
  "key3": "2VVuYZ6ubzAB1mNMrCzCim9qKdatBZ1JxeRfSfgyYURPKWupd5wJy6afq1p32Tj4g7KtnKF38LdBdFZqzzh7rWsF",
  "key4": "Px2rSeAgK4PQfnWgcW6aAD8yBR3k5BPrfvvAKk2j6z4ZtdoLLy5nB2rgUte5N9HHFnd9XRHK3y1PzF1DzGMGYNg",
  "key5": "2pZuLnUJkUTjRV7K7W4int3o5G49Phsj3yB5MUf2ZiUTjYzxZN8NJHpDmf86KF2i4sYyq6XLkKtExFFJjngwpaUL",
  "key6": "3h7zLaiME5ka9HMQqF3fDeowFXHLQPYLgRm6dpBi5j7EGJi4QAqGzrterzE7FfRGtyisLPbvfLerpzSauARDEUiQ",
  "key7": "66Thpsp5vGDP8MV1qADxFooCt2hUVMxCQB1WeF5CG4gwybN1HmYCYYq7SWna1rvkeHJiPXhzYdj5RxZ3mzpMjj2g",
  "key8": "6vQzu79Exyx736uwXXnUeU7fyK4xTutMpUX8PfUZ2ALmd1fTsLYXwE9VFas8duPMhaV32sQpUF7Tsw1wpe6seY8",
  "key9": "5c48zBUJPr2cDUJa73wAJDSv2QpPbBk1DLFRSHVVyHTikTND2kWzGQSQuaht7yrBmAnUhci4hn4BCSsUTSyALiLN",
  "key10": "5q5LqsEidaNiXMtNwxRwQP3YttqE97j9Zj5xin6hT4VXisfrvnozLR8L15LsNguVMiQPpWnqqNtbBrFgbBX9yRWF",
  "key11": "9DF2q8ZPN3BujashGNMp2e5MzoqnZuWyeT1ZQvFpYrzMi5oCVvEP6YFqp6Ke2ewkaZ4w4rG4d5QFqYgzy1fb6KB",
  "key12": "2aekptXPSncGbLXKbxT5pjcrT6izRPMYiTCgtGwMmLns8EGcwfABGRzuoLGNVJdgcs2EJv3Vm7dCMJE9g88XAvGc",
  "key13": "3wwmGtmkLrq9AWSGwpD7uasW16RPUmLe21LZM6TLXxLzDEZXArVo9V2JK2zhh1VDkBNyEoEmwFm5QuKWqU1iSG25",
  "key14": "4vSzUBKwZNfSpoaKwJfTSvyLGW4aMvzJ8r2s3CRfEnypiiKmRzGDJgkUYcvTtx9mV4xxC6SPCWaiosbLt1aN4pYu",
  "key15": "3PhvftmzdR9B9WVqbfozeyDkDyn4UYXCmxqPumBo42mtvb634VyMXQtVkyxhGUwEcrS213Y5RTgL1oThfJvJiwXo",
  "key16": "a9R7kwW4mTL1hehsqVdRFJQtJhnYq6pm43jzh4xu83weJufrY5DGhENZsetDFcQkK9V8YchBhhEiRKDVntwDqAk",
  "key17": "2tLMkk1Qy59UQu6FZPXtrkkZAwXeY5zKFXGE6d5gcC5YEpMmrFwUKpJfM79vxsfSEHjxKCfwSTrT7EGvoFyn5FNE",
  "key18": "35QcxUrQom3NYCx6guJ4jQRbUmNi6S6tfjEni6v4i9ex4GFMN3tzb14yHA4PkFi5948FEpdhWih27DEdpW1S7HYo",
  "key19": "2TbEDazq9NHAxv9iwhNtSh4KkqLsuDwUorUxHDGkPMmH6GZxkjPFzJBRhA55dwcaaHoT91kdkMSmg85PJUNXBGHA",
  "key20": "4XTKiDhDSNSvy64fbyQDWwKBppT2iFkrqdZjpxLYYyx4WciUsyf9HD5m9sef3FaB1RyziDutLRvtFiyakYJGFKsg",
  "key21": "3HpnJfc2NPN4Zw6yWRq5Dx49dB4FAxLobLgQ4zSzFKADz8sSytaNELbxLEJWUkM9Q3McvduCGU1v6Woh93j8Ugk9",
  "key22": "21iAscw3yo4h4ug2hC6KwEf3f6s44wkbw8BRuGN9eh4NZUMYoybPDQTR3ptFAVy6aaWLyn15VKVx7bccyqDsgC12",
  "key23": "4LsKjZwjNQFTnsZxvwaewj8zoVTkjx7N6uWYZQBvuwuYKfMs6YWJFwAnAU9sbJeN5jgxdzH28kcd2yLvi3gsbCND",
  "key24": "3m7rW9pjNkZBsFZu5Q6Exk7cMUGXJBoaQk3eG36X9yA9eGidVJTctcidTLM1APCp9HmrWGsdM9r9nU2fZHkb2mTi",
  "key25": "3VgmDRx3bmk8BkTgssYbWSF1hbUJocr8dJ1GhsKReYYh5hvT8YjWnkdSAZHPVHN1zkUzassomXSrm3vskniDa1CJ",
  "key26": "33VsbpXuSFucAwUAtrT1PLWGumZwpmeRA3nBfxw77CbYaYe75fD9bZGkGp5XYunvuAAcaCXcw46Lr6AFuzaesLu8",
  "key27": "eqosEwZoUM9xVo2362uF1mF8X2AmK7CmgQkz6EFAxNUxPyspQjUcm63TnehYFz4N5D9W3uqsahg9dQNtH7PuW4o",
  "key28": "38fkdPPyyx28AJoDNUHzbkWQetETHTkKZWUoANs1nnZGQVqm6AxsBVvw2Ntg72ZheqNUNuiJq2b5gMDemKn1PerZ",
  "key29": "3o2NyVXuz9HtcwWkhZssdNDCCctDjcvx2eZQv2K48Q3YNjS2ioLjLqroXoZuEkdYdNbJf3jnbgEJk4tTiBpvAnvK",
  "key30": "2M17VeLbUVPZr34ut6VsXyffw24vwNsStCZroc7frgv9VVt4XFGArUKTHsi18HJRrbvLrE1JiZZoEpAHBktQziQG"
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
