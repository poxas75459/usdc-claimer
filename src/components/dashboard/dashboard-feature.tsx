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
    "4mNN9DzAAipJ8fTdWYGfhQThJzLyESH9LjTpYeshFpvCyMT4LRM7b86q9wPcot4wN1SbKShapiVptZo5HUr3ipCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sAPZVAoQFQ6DC1m4xsFdb8mDYW1oC5Pvb8SNYLUGPSfavTSZDq1XkFUsTKWyWwaBoSHSQGvzCgiX7aNkwGdXK6e",
  "key1": "3U284bKmYXGU96zVDTrSirML2sJBdPmKMpTiyRE9aBfjHmzi94Cgwr6iuroynqPo4SVgwUFp5j357oEXKFNwBq7P",
  "key2": "5mwZ4KeSMDiCrHATcJdk1biF83qRd4hB8iDXsdyB4egErU4a8StxccQCJEP9yCdKgt3zntEiXxVia4uvFTmyYBaJ",
  "key3": "ujwAUuZqbYge8yR3mWmJSeFjWi31oJRrVHrxXEsr9FKyVyuHfmUdJ66w9RoajWccZNaJ7HYdMkt7YnrVj8JwSxC",
  "key4": "XTpJqho2A57HXVLWzNS2sNrGH9ubpwv49Sr26ryF9YpzT7pCHcja4UfjkXgj7pfeS62iS8f7d2obyC7f6Az6g85",
  "key5": "2FDoeC9fcjj4ef9tYfDdavUzU3hqV5JFDP2PRZFBwWa1tDtA1qpWjyEcFVbMRw77j3bhprkAAjsPiFVGohmwDBCc",
  "key6": "H9d1FmFzu9FAZLtuEDVpG9jLayfRbTav2L3GpMCqDikHZfSHd2icfRCQzBPEPeFbEgK1zw3mKyrA5tKBYdyVQMH",
  "key7": "3wACtZWYJCLb14JWFzDgfPqmgxmvi4emHA6wVhUddJ1qZNdZW9y57XZ7hNDeU56kAPrUM7cyYW781FQMK1wpcK3e",
  "key8": "4uxUWg7afioPQFRhZNNR8yVUzac7QzWivxhVzwdfG3tcJUKgJMJbqNSLohcNzqg1e1BpbbjidMJAnmkpToopc5VM",
  "key9": "annzyi4q4qrzRUhXEd8QnMQZKtgc827XUY4MSKkogwd3eNpyDd5UdfywNYFXLxkR2wbV5cKt9zimfKcSMJP9tiv",
  "key10": "2kDDPvSgVknH3ZyxGNjQeaifBSPpuZa4ujWnV6di8SyhT55zb1sqUEtdDnKm8WFcbSFyp55SKAJ5wBctERXeTCEy",
  "key11": "4gLYDc2GkpH52cNqokTCK9GRoF41DRGAF9LgqmWb5gx3MTjfu429ggqBAWGz3hBfcde32iu6bfDp81EAqCdqBWmS",
  "key12": "2dbn1o8BXhqX5XLLpsdBnGDcjUw3C5Hz1N6xeJ2YWKYarEetmy4S5ZDrmiKh2WV3cssiR2bFoCeyTPMRThAgvCvr",
  "key13": "4qXYLoEdoJ9iMHZWmYV14cbb59uTTFVLSfNsrMji9UXyNgEPv4TLLBpRL9JfamiAMovLVedBaM5eCAdD6Z6xhDga",
  "key14": "2bjJvPqN2aqUHeoUPuhnbHQbisBsNmPjAMv6NwJZ6e3MmaqM4NHxHAHsoxVY8Xf1LYHQpyM4i95aQRqMvXcUqqiz",
  "key15": "PjaWjf3dW4ZbWCnxd4QsxHLa6u1ia2xfE13Wzd9iogpC46JSSgUozwGXj8EAgZUcYNiGBBGerF9Rt5BcbAbffgQ",
  "key16": "4Prnhjhzq3zYeb6DfTrWXqK2ZZmqre6i7eW9bpAWg9Kx8YUuYBijVnNtUbgKouP3xXY42kWtkF3xeVG3x1LbbxeA",
  "key17": "3VDUUjoZQvJcbhyan5cyYuyK6J5yGAuwA9S9BSeQJi38mvJ5zGAhNQDNRjAn1YizZmsEZ6kuHR9vaPVXBbEoKRer",
  "key18": "2UEr4g58WYZjejqBDv8MNunoPbJJbejrDeoUAm8o3EDMK7MxcQ4SmAK7tcsxLL21zqnvTiJqDS2eAGbixhkQYGq",
  "key19": "3Bj6huhvif361kgKcrpo9uMBkYLHKkfiXB7RFvu5eWLN6Et1TRF175Wf5e5rnvAPxCGZnUowychzcZ3cA4sBqsAv",
  "key20": "4TpRUG1RjFBw3SXsRi6oB1ajj7UzijW2PtA57s6mRFVMYbMnMvz81B79oMUD3pGYhnrhcCNVkpbbMhyYMWoAuctJ",
  "key21": "36xKNH9n13pWmj9iWWBRNZWrwGcFyGyWN63PF1iaZXj1MpVEQ2fBj7dyHmSQCSUo2fGMenNEMt3imSUuXgfNC42n",
  "key22": "4xRRrpsPKc8RomB7QBXmHnqXAek1jSNC57dQ4rXMi9PFxmjEog2T3ShyDiLJxRCDbjutFKHUFhrpcqnz6CbX8tvr",
  "key23": "3J2WJtMAns3XcdEJX365hN48E7zsNz7qNipQ2Hg6wo4de2UDSCQihMz5hrrcY9arzycucoPLV7tPAt3XdQM4G693",
  "key24": "62sYzSSXuoeUbhgugnxkuiEDEiuiTCiJttJ2SE77YhFR9iUfPfn281qQ4KBqWoREUwogfsH9foavpCp79epcW1mt",
  "key25": "egUMUtq7prYTBzgXFvWgfmvYJUxh1F5w63temWdeyPQWHDxnwJRz8SSXUm8qAS7VLdDZkLjshb7ReqHzi95e8Wy",
  "key26": "4cJ8qCvmwrejiY8LvF7612tBa9p9kw7x4NKCzQoFwqyvepap6H67zCqokAVyNkKvr4Gc1FJyth5gB73npSuKZZp3",
  "key27": "3tk4mwB1UbuDfbX5jrEcV26d8t8WVvDCFEr8H1j6Jw5yBTFV7rrdJbrpPbv8v577Mudpwjf379L2sZfV6i97HT8",
  "key28": "4AwY5jgYBk31oLnC8GMz7oT5jpvuyE3XdpaUCWJrh7ZLFqhBbrjK5achurSXe9w5QVfo3E8nx5xiyFQqNFhUnPnB",
  "key29": "4Gdd99qUb2PC99APqtd2BGiCYXdRuuwbUgFjSuj7uqUivsDrkohvivUCc1MNc5Mjq5pUxmamrfxvznJJbw7eaFw2",
  "key30": "3pyLzzLfvdRUAmsfVYxM6tAMo9Yy4Bt6RPhKkSYApY9h4u4rMck6yhDditW8V5sXvvgXGA64S7SioU1i1yNrMJ1V",
  "key31": "GCrXAUKGUZX9YvQqLLQXRtMcBpZRjjf7fCQs1TJQUFr7Qg3q1tcoKqGUZ74PJ8KNpbTgT1jXs77Ge71jhATrugG",
  "key32": "5jEprb7HrJ3bu1Z6gATp2d2U1eLrEsvpSv6oNXFxTerWsi1uf33v37GJZXodE9xCGPSn2MUGTjvdXQUDdmSTqtyL",
  "key33": "4fpnMYFsVh4dfa9tDEe2b17kWrzGtzE94NBzCr1KKdmABvN9CtiF7DN6V5wuxbobGqNswpqSGimKZMrUfseqFtMt"
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
