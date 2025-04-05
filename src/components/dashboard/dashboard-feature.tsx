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
    "3bKpAey54scy3hB4b4h1X8Lprf43DDnFU8TShPAK95PmfGUHfADaPA22Mn5TQRUMRPZckeaSd2S8qp1bNLnFsFoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nD7m1qWZePHro5SjNFiYGUjp7cMsyQf6rutJnBYMAYK2cfvKZtr6omoooPeGXk1Qy6wVraHe8hYcLfmSy7P69LW",
  "key1": "2XB7TVkNEAqTgzVUBybitxgn28VnVFFEqp6fPu6RtQqsM6BbUSDXEUfLmZZVrxxL5edynmw16rfVNsbc2HBkHkws",
  "key2": "5YBzqxHFhB9NBsZE7pJaziJbUDWSJpWXDqk31uTFKpRaoHwcUUiNCbnSxi6swqR4Sq6CqtLoHwVy4eCA65cbMw85",
  "key3": "5o9sPzSrrfb8nzDm7wHtJZxMiscFXja9jPhmu3pU8BfgnrwFf9zGBN5CPEKzMRd1KVeh1mhmGLz4CeYxHunT2tfd",
  "key4": "3HNXJRYRtUa6oNauapZrzY6iako1Ct7Cr6xMdPUAkrPJA1dEntCzaoK2rK5p3u4CkTVzRinmimaocrVJuNJHXcdQ",
  "key5": "2yNkL6vmQqPipQBQP4SbnHuJnrzPVS2Qmv4HVEJkkgeRrspREJrKXj5eDn3YyBUqat3wjteBPJSd6swa51d1So2m",
  "key6": "5PzbFnqgv1adkcxKfpa9U1RvFGpnpPjKWjTp94SbgtQKZTiwG5ZnDUyS8gpnUFofeEiTkFVTtZLEr1E5zKjj3SMz",
  "key7": "2qhoUYpntf6rjm5UqsNij3ALNfDZt7PWTqDHncKU8ULQFfAVZqoZ1SxS2ui8jVDHHHWysHzYtaPbdYRvUAs7yM8G",
  "key8": "3UfaeZE1uxW8bRZ2MoAkWQkzskS3mGyGAsEDeiT2fm4Pi7Xz8QiXbk1xCsokMG34zvvNg9aDM3o5U3ufqFoBAeBU",
  "key9": "56xsoMHZRFFKGkH28H49EM6mRLGSaYyMyaBZ1Bdo3yULFXybEX4yKRaJ3BfQ5brXGZH1xYxbUUz6j6Gvf9Y6GsZF",
  "key10": "43Cp4kCz2WgxjnuVqc71hRapAza1Rrn6mWcK3whSRin3xQJeYWkyrrvbdWzbMk1VFDAcW9CtqxuNQP46y5XMGmug",
  "key11": "sYMKhptz2xb6Q4HFbFrwBQ2FLzS6wdRQpcgpCuxa32xTPwo5HaF6CuCYRqA5pwDvWTvn41ebVVLqbav1MFpRfnE",
  "key12": "PZzkqQ2EbuV2vEdfiqi5SHGVdVKVAZtsti6yytYiypFFEPU74MN17NJbaXPxJfL72Lq4T3ewzVE8cawdj7WiDyY",
  "key13": "2PsXNLVM7Ro6oD1y29kJQHD4yVbxc6EytPVCDfVFzgYLWw3f9KRfnVqdfaTZfVHDH8CwNuoktEtKFw4WKWW3QgwF",
  "key14": "5iCQccTQeDKWNanwuBnVBTkVXEpY1dXKbuWCk3s5US2s6ByCVXd9VJK1tB9y2wwev95KM51GQny2NV96dcwVkLG9",
  "key15": "2HHvJgJgqumKwrhNz6jEMDMpoBtjjQv6wQLQQCGtCrdCSEhq4afhFuU8iTMEAY1PNAr5cQNhVKEJq9ecVrKJ19yk",
  "key16": "yry1dERLpK71fiuS7GCBaM8e6J1b2RWQSXiw7WMhqB1HMZNW45bVsk9nacRtrHiybtDvRdr6Tz7dqH64uBb74q2",
  "key17": "yXpRcpE6VApfjAvFNJGtVDQhgtfxMduUNszJ715do15mGBXin7NxPqt7AeGn5gHuSJLHjtNyUNxiRhWRdzjaDLR",
  "key18": "hTopH2TWWtTZ7PxmoV9FWkfcxGFMWWJDkXfpXhxt1L6EUW4XjNbYEeXet5Kmx2rS1RAgkD3tkgZQYYbp4gvYErn",
  "key19": "4KeQZgd3iYhvwn49yKrpcrsYQh19zTQMGgnDETBCZmL6MGHXgwGHmfcsJqppEQdSiU1dG9YGnYtGFjMVDGFg4PqW",
  "key20": "4viPHg6C4RcPHnFWu5AUYbYzvZd7xpx9AaEJJ99VMB2mYNyAEo1S3vXEwQz9cipmx66XRQ2DU2bMA4ivQMTbukGP",
  "key21": "GwzrM5B6nvTALgjs3bqwMsPQbPKkg67DAoodN4d9t2gj2MmZaobC3orkxKyH8cPgE2Y23JVE4cegEUy4aSjmwap",
  "key22": "4vcinJLq79iuBftF1gb6mznE1phwWjvuyn32DcvDPsUvQTdvw62mZ14xMfKMnHWUyUQNsAhsKA4KT1NZKpMrZE3i",
  "key23": "4cirB67s31zWYLBF4ZVU5zHSVoA3yLCPgZYmo5SGK16FhqmC6kuS2PSa3d6KdBRAGHxC8VCxJNYc5mT1o1mYD7QR",
  "key24": "43u5iAgtqqvwz178pzLvC64zMHHKdguiQzGiYpYpzxe5YntvHjh78Etk8cGVrjPBYF5L8hBM3i89YGEXNKQfAYfJ",
  "key25": "3PcthAQ9ofygd6eqvrPZYANXLBs4h4ByqocTHvU1oz7JToBU5MHTxS7v6GanBg4Ljm4M6CxnwDpasBmByHrhZgXf",
  "key26": "55ZbB7KbsuWFUapvdRCQoGMbECFCauTHBkruy9zu1QrkP6SkgNuFeb8ppa8ZVDr9jcArt8bja68NhMuSSwATfLHV",
  "key27": "3ypCRzhfW2UNq9qBVDNB3k2aHJTeBqTFpjLdjFwULEMei5wrk8brAx7oFN7JtJQWwwpw5YCWtqCYJN2YmJFYQRgs",
  "key28": "47P7UMJKKNF1FyxpdEtNC4iRgs1hKv96Xnt33FE83p8XmVMeH1csdZpbMnm7EsRJrGnC9Sw4Qaoxzhfj4X83vcWj"
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
