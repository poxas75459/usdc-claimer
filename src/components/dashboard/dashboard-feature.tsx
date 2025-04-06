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
    "2yKXVshrHtqDWfgcAuAzt51xhtsjrtQtG3Z93UXXxdfiDw8kXyaZqB6MTjxWwSRQ1H1CKxJgQeqZnxxmT6Xeo9c3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "488tVAwohMnf1R8qUxmrbqFu5pCEgcS3yvMmQvzH8qzGAhuuMhPrpTEQmiACG29uGis2yVXH2JnSoAf6PeXXEQWp",
  "key1": "WgoJjEA7gv4NSdDZAe1HxXh5yFY7cBFako4Md3dCFRQaX63LAF7D8R6oDvcfaLEuQftCrK6LNK43MfP3ksomSh8",
  "key2": "4nLfhDHovjRBULiXgkqbfHJhmJUwfJ3SU22p54Unk7VBEqnAX77LyNfkc5D2V9iBxwgjWVXtGzsT7zA7WLyQA4J3",
  "key3": "4iq1dQLCb4i3WyJ77NxSomyNxRQwHtUET4y5nnF3NdLbsUu7NUZnVMoLVuq35JMQYFvP55mE1Tuj2sa9yjxDNc1a",
  "key4": "4dyQm63o4v3SPj8nbQzydY31dTWpyJWT3Rmm8EVByMcwjoTtSym1jip8iycMHS8rSBKJNhR8tYF2t4W9DittoY2a",
  "key5": "5DHfK4Vpv7tTk3TZ3t4fhjVJw6PueaGNDjMxqhPCMaZsWqQt1SNovQVHYtsu3xWppneFit55Q8yejhFs5bQY8pg2",
  "key6": "3pMUtAgsX28oaX13HqCfmJ6fevDJ5q4nx5qmNnkvwqqwsEatzyGXiscZDbcVYgcmSJLJWSVsQSeGByM8oeLC99aV",
  "key7": "WSZDWSgRYXo7kfFx5zsGkuAFJznUVw4CUhJsK39afQCRFbFLJRJ64XmcWDjge9u9tfrRWMGm2sNJDJVJk8xYJBn",
  "key8": "chNT1NTw2eUV26Fbzik56jpDLiJiAtcJhWmvSpu1thqG5uwnwh7sszrrmrseq6BR8yojXj5ofLesZBGfSW912xQ",
  "key9": "5hRCigrUVkZPfMPmY5u9p4cWGrcuVSDYC8KQbuZ2Y8jgfQCfftTtDsddjsvjck7DrTVr5F17RfXP7ZEe2Lrm9yrt",
  "key10": "5rJkQpheBKDprNrRQNaYywFSJW84AEuw4oK2i2tjx5q3nL4L4pB2Nhb3dY41SCaxVCSuPtdskHLp823kJaPXxS3j",
  "key11": "39NUVgzNmfimL8cjbK61vdcmfyMfQXfpc7WdmLsoXpkCiQwhBwnKqqZeEEfTfftbvnS23gzwp7YpgTiu6V5sni2e",
  "key12": "4xdfniDrBLDhaDgWAmKNkyukwSEFLvqg8zwgMxuqFZAv3eNFxn3GBzzLzEeifQoKx5yYDEnpmMVgvKjSeJWEpTK8",
  "key13": "3Aq4DeHMi4YgpQMnZqjmFVQhCPdeTBwWN8DNZDfzWkCviSAjuPWJAqb6W2sEABZXUvYx7J4rndNadKgusvNL5Ghp",
  "key14": "4iPULTrVKKHQBUR1Sjj2jGfpBp14bv35jDVkYngTMpCvmH5L6aWYen7zRJuSoCsqokuCL4bb47hRg7asPMWCPMKy",
  "key15": "44Gc7fKf6J3VEH2xb6XdxcBcHeVhapXdA7kowUgP78uu1uN3tLX4TCvwDKTVU65fCwnSCyksY5E6PtFGiHX9MWTB",
  "key16": "3C3kKnKJ8iRXeMEhxCUNkNr6YUZhzwGSAe3Vxq1KTtFFMo39eMCXXLBXxzY5gYujcW8s6V7dcHRUyQyfLG3C8Er1",
  "key17": "2amdCPVkbJHbHbL8mncWYuzfbYmGtL1a5yXdKU1WgPqroP7pnZxdbnGC975TvNevpeLUFPhJQ5rYjqMHqawnWAdx",
  "key18": "MPSUmAUz4rct9Aao8VbDCWba38nLxm2wTMcSUNNfideFRG81m37LS4AKA93woTSdM823F2DUhMQyNjnZvJ86c2b",
  "key19": "4kKRwkAcMU86t4BcSVbJoebs2LEg6W8qgPDDnZitaCKMD1NYHb7j1qyct3uzXECHKurmbkhhJNZyDFFRCdVe9udb",
  "key20": "zTVF2upEhkfDy9W1X8jFQyX6sCLDYEkGMzUTW4tTnfAUoCsyD6owwQKvq1oNcSryjhRoy8B4hUnb3VqJ9MeQv9d",
  "key21": "3CtThRv9AnARUZZNE8y2yYXX8KS5TNs1TdGPPoca4NWvajNFTvhyvotn2KWrjys88vUxP7QqnmU9uVBrE8sw2e6u",
  "key22": "5YgpRBa71Nfr3JUX29o8wcaYFdNYJvFtsn2iefZkjXsjmsJNM3RhX3VMFGpR68Vm83kuAxRf8AbgF8DHcvpWTvsh",
  "key23": "3ZppNGRURyubdcuwi3oL2VM5jvYdfCW1Q3PxXZJqz1u3HPxgEqcBLzQbqvgWpXUyLYnGz4xJgNdwR4a7Bbg6Rq2j",
  "key24": "eHRkE9SxuzoTWQAiN4pWntxrnwWJhmpz5AQFnRAViWePez7DCtcjSjETBfJRqd7J3sQyoves55JiYDqavupsiQZ",
  "key25": "WrrPFjwA5QWhFzabPSd1SZGanWBkVT5f1tzFdWfuqYUNkhbYUBZjVHhFpL3PxVfV51Yoqba27LvUrpEbMrR6GwT",
  "key26": "5y5CUZuU3dJkvCMioDCjQ3a52VVhaJkZsWLzC7iDLX5LAYeWrvsYQXRHZU7FbxA471XjKWqs5ktr6esPPXc9RmP5",
  "key27": "3hhDagkaNbpMB7v3Y9EsFJcMFW9uNrPpuVfFhUnSRs2oBseb6yfrEL2krtdQFN2b3Dmj72hyQJTdmSWP7qemTRHz",
  "key28": "zMARs1YTFnafhbVprUdSswgF4Ky8fheNcmPfyHScGisvW6euDXGHc3dGsgDBeGEP1shAden6kqfVw4rRkcnzjJ9",
  "key29": "517GzQ7HoxnWzvGN9GzZMx6Z8zpKfDDbY3JytC8qCvPM1wGUiUmYJiNBfKcCt7JesP2WBNnTneabaK6HHF3yutqw",
  "key30": "3Re7J5ntiFN7od1SCvb5qh4nKEjc3bqYdzenmGduByt7G5oxnb188Z8icgxNYgXAVbMYPCtEA6C7m7a8W6DdTkab",
  "key31": "5o9jno3tppz9bNa9BTTs2Cuq2UT3cS23ddvDNfxE76YrHXDa3Ni6J6fhjam7qW2aHUPhJeoqJniJar6mErKRapiP",
  "key32": "522gQdnqsWGU3PGoPL8TALB3akV38WqosnkY29z5hyYasxnjy5QL3aW6QwzGruYkUW6zRbznX61gEPzgAY76Qzyu",
  "key33": "2RkNbaEeKG7rdVkzacjkRDytU5x7FuBmA1ppapuo59UkE7CrCDEr7ScHE7naRsfAUrbus9jkkitMngAuPdhFyMwZ",
  "key34": "4i9xw754pfLBi3PMJsayoTjUTW1W2i2VyM95dy4W9JCzr7WDAQ6x2VyYb8y2XoWyApLKEbjMAhEomBeoKsmwS8RU",
  "key35": "t99BXfZ6axcXCRWC7D9ufHFLBzbGqzowsqYadtEUmd1ZYksVDvRJ3KP9KP6UQmcTjLjoWfCMXy7DvE3jTc7Tcfo",
  "key36": "3wwuCnVp6K94uzgPF4BG87ZHdDq6hBpQwVNGRXsw3x6xpk1PsMsjDFXTVLAHNFwZwy4eWSiQeySnm5VDQiPAdbN6",
  "key37": "M9dGW6F8tcuqUkEgUJGnsJMPYcDVxWr5noicmarezTrw7JfdjMf6z7XT1e9zEKSsd2QKjVDRDoGJmhax6GBKFGC",
  "key38": "3cSrEkUf7Vgbca4iz3NewsvLeGSvctDi2s6BN5EV2Tn7KneY4CdNcvpsat8D5e8DUjWviBRBZ1MPavWoV8XnZbwo"
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
