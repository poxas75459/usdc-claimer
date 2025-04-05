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
    "3Ed84Psv5ukThEGfgenHBdyYn2oirTAhThpU8Dh2ivn996CL18oQW4ayPEMK1RqCYo2ShYHN4mmc7SEVB5DbKU3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YnQneoPuGuAo21YYKRWBFFFAav33J5Lbix3UsQ4guZnZywyYZNDQeYh8ntn9xB5qpkfJ2p7vYvmKUkwUM6CyBa2",
  "key1": "H4z7zSHxBRj46uTdCaGMLQyADYuXyKHXWHR5tuvnvwJJCvfJXQ24ym32vwLkszd4ws61xRxPxfYX9cq8yqitC1K",
  "key2": "3TfmG6XU5vfEpKm4U1Rm8VAU2WvjHeNq1FSrGnP9T77uEqExyoWdV7XjGQhtFF6ao5WMKXdnUQPHwKxyGZqJMPTG",
  "key3": "4PeS4vhM6KN94N4PEeC52jcy6WeJu1DaGGXxXk4svMsUTqBwmeioCcXeDprKtANt2oJpdZrRkURz42tPDNuDFsLc",
  "key4": "4XKzzdxszHDy7yJcQZHkFhvHDMU2wBLqxBYaTx7ZqXec1qMCiGzbsHmrE6ueWqYSP43d26snQUdqn55hg1EpGNEQ",
  "key5": "46Hs1vNB79ZzRDe97DeDtghNxHEMasWUWA61Y9tZpj7TpgeTA9WXin8trBoEg7uvfARJRR9eNP4UuwuAavPSp5uN",
  "key6": "5KVnVEb13gLdJneLkAaFC1Bwz7N1TWQ6NvF5UuE6aH7aVi2a1nDrj6k2EBqyNkj49dPbfTQ2sz1DhKVmjYGDZtTa",
  "key7": "4rtJCCUPYW7YExnNrBdtkeQdMM7gTsewZv31BfL6HePz5axS4mmwJgFMM6hhHiX1cdNypmSX2RCHQZnJdGfxgqgS",
  "key8": "3YTEAkRrbxz7AzdbD7f4ycbXnQFweKAv3W1q2C11LxwDq21Pjbzpnut587TjQ4YcXjLKU3kMxY126W69FRKtuzkj",
  "key9": "5TunfreQBgaLpTtjfxnXF1tGw24aJi6irpGX1pnU68i8UUgLBNt26SVCxWdwkuAcZcHgBdAmbqn254wLvAFqXiTy",
  "key10": "4qtwaxBu7HLuW8dcxJWL1xdLasdL3HF6nJsiqTDo7XYL9aPExW36du1UxpycoXuVzfnCp58Uqh5qXYg9ZUGAqbrL",
  "key11": "5he5gAA4GALhPet1ihuffyu4FfzndAu263uBR2bt6M4qMvHQddzix5LpJNoy3WbVUBqQY7HVsdtoWCSL5wxyB95d",
  "key12": "xJQuBgkZzJxKtRj1kMLyjMZ4S1US8CBeyqLYLfkLx9TNLcGgYFwoNXBMHLqsbubj1XFfiWBMaUVUyTAmy23tcPv",
  "key13": "r7QsikKuYr9B1NveKtrGnyxidnZZx3HTfKJadwSPjF2bK7biy55WR7KkUNbEQ9zfHnHzas26JUsT6WMM9XBMFS3",
  "key14": "5zm3tTETkFtGtn684J2JAZoRXvpErRzaW4YEWQmjuESn7jFkdYsstT8paURmMhXhVY6dJdi9B6rxfLQp5pmZbf7t",
  "key15": "25yxXCoqcvxa2GbuQ4mjDpQCrKhwWbkCSDqLRrpSXUZL8EKUX8szZbRnZ5Tzjci9G59nJLGHJD7uBMLfqmZ3cdDd",
  "key16": "3x8YHAPV29ajNow17RcTpH2yQz9C4kdhgyPP8rZWnqhwipNcfFYSA5KKVseFqythUeXreeE3ufdosbejZZZxfwNy",
  "key17": "2RD6vmSuHqt4TCLdLL95ySY9wjy21z4QxiEQkzWTA1sASPR5KTLRvUrSy2FQqvKe65gdruoaoZEE8c7uukC4iMjU",
  "key18": "2JSq3axscDyfXLxzAdq5NCvUf9V1Bnihk6XnA2MQCBsLpPoQHw1fJqgvx6zKBrRid1CHKPmCU5PKz7zCPBwjoTwu",
  "key19": "3XRLxjmJegEvrTMEGPAE6BJfcRzcFSW1uMm2Qfx2rL94LwGANpk8Wxf4HcJLUG46iFTo1bY4QVoG3yt1JqG2AYZH",
  "key20": "6UNR5uKNQbden1JTLqaB4Z4a5SDUaXLupyoDmqt9AnfoNfjDTJvSe4dnGqfrSiCwWztjRbaEM8kuu7kx6tXFmyk",
  "key21": "5AzvRuvDjx6cgaHGptaa5z7G8FLAG52oAU4LxHU7gyoJ2fUaSsXWqr3pH6sGWRPiSWSteHm3H1Qrd7ZW3c8dYpdf",
  "key22": "4S9We5PoQqm8YoydUZtDhDwmaSwc4uvwyrPaG6Q7YrWzR2Ntt16BNyZb2kxuDLW3HUyb2YLpDXK6PX9X88c788Lv",
  "key23": "4NCdcX99RuxRGnzvC1LEj7XHx2CqqH1uPoZVQBTgnAKgNtstFVTJskmzkuhdpQPDwah19CFes6WgN3pgRwqhyxob",
  "key24": "3t9cJffVUoF9vnsr7TbU8ToBzALNCER6pncmLcYLbyk6NoqnmsxpQro3FV4mJ5DQZvzwYjsZGsaWkJdkpibY7jaN",
  "key25": "f8jNQzxHJPvqQbS5EjjxEVbfdhQ7r3MWZQh99dsbgBA8R3hq6MWMmGtrqDn7ughm1pbVM597rNP37NAf5pxhHPo",
  "key26": "FsT51nSCNkN9oJtVUHnZsphCaPhBW1X4pZ2w1tzAHMMtwg7YkpUifrGaAG8vfx5mF2wfLLbPYxePD43na8uG8ZT",
  "key27": "qwLyzKyAbfvwyqQZkyPNyGctPUzhGNWAqDKxnx1SoUyc5ZroG3okgYpkrfCsGCk3c31YxtM21T7MXnwtnfL1vrt",
  "key28": "5CUKoZUfc6Y5AX9x23X2Uqbw7gtnwETZAxLW9nuc8soZwzwzEFg4GRwiKqS1uQgbTfgwcUQkBXfd27CFJ8H5Zofj",
  "key29": "5y1YgZzQLt4jiVhfeZcukYa3KoBK7kpP3f98Tstkmu9rYmNERwnc6YSjtBHJVoaKR9tgG8vPf2sbyKDyT1Vv8ZyZ",
  "key30": "5dZk7vaXwuc5mztbgjJWJ2DVpQ8485SUH9654Vfi8oqkfJT6DyR2stLVG9N3QkbjgxVG3hMmeBWcEhLnEHe4nYTL",
  "key31": "DDiw4mKScqDofGhh13UDMTWwSwJ9GcEVKy2pgtZ8VGKqrYLA2qww97x7Dw1sicwrTnSYhghKcaZDjQSesFFyHcr",
  "key32": "JvBtRdzPRvPqYyiCUAdoreGzMgWhxavo44DKUYjoY8frLVYMNzmAE9keD8PJH4MCxbUS3XYNUzxdTxoByPLBHXG",
  "key33": "3t9VUrRQLJqsSobAuTJkrA6TvXo6B4mcn8KYFhWDwpg4XPmfdkW8z4LDLdbeN9hPpsXv9a8DaNonLR6KEVX9Y9Kx",
  "key34": "4WUbex7PTtu6M9bHKqY4VXjbvv9PEC2ppmcdK9xUYrhYshTcSmvwKgSe5qzFdbv2ig5bXDWMhgYt4pTtv42FpEeT"
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
