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
    "5Eunp2MrmSzGN3XEFLNneiwU4nD7rLaBYRTeiCKXw4M8eNzmmQFDrWSAg9rFDkhPVXoRLBQAAsm7T27YmaXcYDvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "326nB4bFeu9Y5cW7EeWiRBAaPEWe97ogipZzwWtusUfPooijjwyRgEragLDZjPnUBy1A6BVmsx8fzy8Vx9iYcwfD",
  "key1": "5hs6jRVYVHhQuXbDSmFzEmtL9628wLfNpUVoaHzWcYhLKxpyPtdotQ2N3pM6urPWC6ouwHAnnmn8cc3yvQCHFqNd",
  "key2": "3ymBLRM8daZ36eUknGUod7rtiR4CLWYmW9rcBYsCjwhynPiCSo3WdBgaBbx1wZE2YvMJD9MEY37aViDqF1eNBUfC",
  "key3": "JdWRBMPV8SmvTMMH9MZXEYG3AqinPCHVz6Cb2fBwwCWrhkjNkTMruTzon9jyP8mxy6UtLDGSD9mTQXwr2rVettH",
  "key4": "3R83TCojvd4zM4Bqqd9qyoFTELk3oyAu6xoCtG7QbZAdTfiQ2HJmbnUb4ZDAjhjfHcKtsNLSkCNm72EE42GSx8Cz",
  "key5": "56mJbXQTDs8gKN7kGbwbvBgaBi6fKfMdxkGfHyJkzCu3gqxMFZUqL6nqju7FNe5hhzKpEw7vqPtN5EB7NjPNLJRb",
  "key6": "2vLgXqJ4QTPz4zH77SZf9En7cJQPUib6X5fBeUDRt5XexRMUaMVgUejRsZfVmEHS43h5yXRrCRfayqdAK4hS2N6J",
  "key7": "57kN5CAddoK3rD3VHTdYdp1FMHZx951d31PQdJXzmbzgnh5XG6Q3o3je8mnLhqGZrCtUPBUwgugoHcWViYawUPc1",
  "key8": "3adnGmiXCoiUeGAwfgbHXzgjmT4vye85og3SFED6p5G4mupaAn5okhak1wMM6GNbMTQn8aQpPCvGtmfVsX9t2HGJ",
  "key9": "TNAzPN98AN5sys9bwmZ3XgcE9jqqWrKFjUj9i4z2EUj42qDDSykvS9PsJvaqn9gN2H5XL7M7HNGGS7GzfKWhPgu",
  "key10": "4vEgmZuoKSJUegLEjk2ADHadHz495iyntCjpkhTsFn7KVa5KLG88Py3bd9AQ9GDPbY7g7GbK7CQtCBz75onPs8Ye",
  "key11": "5Tax6BZRd3VmSvSTwC4NpHvQnPEpANXy9zXkFAYj5PHkngdr7ZkBU4boQ8UuMinHp9KVjoMFeamHR3aBEPFYcEFx",
  "key12": "2g9BwCiJWYzEWNnuDAozWpCb5wFMLwHtzG7nU2qjgJP1abbiMoUUFcqNvQ7jPdbwY65yGVpp9QzdQ4LGNWTUEkBY",
  "key13": "5qkbwLsuVAvMShd2mq3iWvkdES8sQ6oJ8u1yxsNFNt5YX24Ht31SEckdJAmd2TiaEQUMoPFcetzvDZSfrchj6Tf4",
  "key14": "3Q9YX4ce2UhpTyrjGmwG1ivfGp8B2ppo5vK275zgRAMgLsQg1L28P483jhKXcjyGYz9fqYh8LMeJqL55keams823",
  "key15": "4qA3NLjDdjij4HdJeUrePEiz9uFYVwCAsuEChdXcoUUyDvdKC63ew7hz1s3tbYpF37CtogFcQV8VKsKYCHB5MUAV",
  "key16": "4D1JDh2RQabJ54Aqope32oyrtYGu32m7ywaMq2YQV8vAAK7X5SJunHjwbZHqnDgfsFjq3hWjr61bWgCNwysBZUFN",
  "key17": "4RbovtnijdpCPmVskUDnoeXE7tsyXZ2tVhS7iGokePbMY3nFb31GNBVsgV1yGNqA63CktiMSoJ1ctUPTSTk7jmsw",
  "key18": "5JgoaS2FKM3tVx5Ei3JCWKC2ZcXiBCJPqWuuSXPvoCBtDvPmLQF58nNqGEV7ZtYsqNhvYj5m1XAe3Rrf7r4DDRGL",
  "key19": "364GxkKof37CCevEZcH1QeCVSyioVsTdLq4whgaTkgwQ2TaUiYZ8DTdFNFSzTLKrzJVMbv1CkBePSHb98sFFuYj9",
  "key20": "45ELzZgob6KATL1V4ej4pkRG5L9oEFuYPg5Gsjz2Q6sSpEutzGS9SzN7nbMBhxBjXaqzi7Qh6owdg5ErJwXrbHqo",
  "key21": "643CYgzd6KGTtpWccVSioq7dJVHN2BorPFTK6icdFKQ29jY6jxadHDVQL4XkaPyWFjh9BWN2NDTZjEr298AzYUhm",
  "key22": "eCGajsAubSe2xoEaG1griqJPqof7PhCA7FG5hu7VK6tJuotgttRAQX5VbXdC2CDcfyMJXKdPwPoppoE7p6e9F1e",
  "key23": "5HLuy74yUTMTyVKsdBfQmGbR6knnDwfEd1cQtpfxfxgATAdL33aai8kabmPH1YFZHvHYdjgaPC1rWixRH7z4Yd4r",
  "key24": "2d93UCjuikbyKtgGuWTGFwGQ4HmoVxUjDioPWVyhMrrUkzxvumniqdxg8UAGhBWZch6XvBnbNb7YF7uSgb6KEUnW",
  "key25": "Z7EwH6wSC9BGTzne35LWSuWT3Gvy9odhrsLQokrFpqokRFYD5vfxMyCn2H6wcwFfDAVMsdY6ZP36cTPFeC21sZx",
  "key26": "2PGDjx9mffX3CsYMwRRx4KanuPzkVQz3jg5NVug5duXVGm2v24AjQZqLKqYmhoMngtUk2G6a5X8N8zMyJmjcc4Qu",
  "key27": "37sXrvyZbmWyH8R4BvsiVgTc2RGS8VMiTz88i1VQb8TmGL7aASWJtEpLGAkfnVmJrRWCJ4v5Bx6r9sHaf4MtSCDt"
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
