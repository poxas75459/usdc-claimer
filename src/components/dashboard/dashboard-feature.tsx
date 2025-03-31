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
    "g7cDx6bwyAt8xGEHV3saK61v24RJMkjxivPTjRp6JxZjdeJHNKJsbr4MdQGwE3pg1z4ciK7r2h8fFM1AMB2GspX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DCMHfnaEFuNxoPPodJaX72sADzpy2HjgFYGSZDrKt3eZ6fx1sJ7uUo2cuJByMe6oQLbniNPFqa3Z6y84wyEcY91",
  "key1": "2mGBeEp8BnnTQBTK2BerYjq6YZT4a577ACnJBvLi9bUKhxtqihsQVpf63QSNNT2xbumAH7Q9KXPeAzsKPpBQiGRT",
  "key2": "u5UovXcQ59kd4jTFr8qzsfm7WQuV5hXBwvDwUVfZLZMopM9Gb21pDdsc1kjaLa9CHNVKP5ComZpdV6fvJTyZXRC",
  "key3": "61Xu4ssL9bKwwuioQRAC7uw8DRDTw2qhEWRaiP2Y3w2i4mvpMUf54umwWNtXMhLg4C7yNgMNxHVLtZBEkjvxWCTW",
  "key4": "4tDPW9nq1v7TkSCj6qHw7UcxCNg2ipsDfPqgRWp6jWuMtz6GmNQ81sJJt4jAFyZdwEKk6WXajXb8RWFs16n6MUMo",
  "key5": "5kTHAgafzQyvDCxZz4K4LxErgmnwtYGbfBGVsatpyQPJJKREqehYqUjcoBhrTBCocyZF1caot7d1DxLdQFGkNaXs",
  "key6": "5gFqWAu5iGMmfV2xMPhNAga4LBXStF4vDzU5Xv5RRGCnDxpJS6pdgEbzGFzeqxy1GhYyvXL2BMn2jC7mXxRp7n5e",
  "key7": "VPH7JVNR7LekYdJBiftyUhPsgejBmGys7vGUSZR31SF6hsJqSVnLQ3hkpQ3uTT3onJFAE2xBBoSXMGQGZHk2vpB",
  "key8": "5d9QnhFP6iJfee5yTVQwQV95ZEcUvGH2di8P3U8jpWQD6Sxb7EJfHndfyA9V4Ei8kCEAL2XdbRTpvyTJEDde9H5F",
  "key9": "5MQ7mAN1DiWK6Zb1634Kk6Xy2aGrqZh12sPhCjErfRT4errYVVrjYK2ScM4aHs3HKWfm3tRYj8Hnrjfvy7kHiPsS",
  "key10": "3YL5Nq515uVDLpNFR8BNiG28Un9JHDXMDc3NUPPZyu362WkjNf3VdbDJwvgmtLEo5gCjTBM32iPirCQa94JVVEWR",
  "key11": "tEXT8dMzsUUxxEiyUJTjdjKNuyWqeMkVJyBTmLY28AGhcH2tce5NzyPQiu34FTZwKrWzuVVc15AHJcot1kizBXs",
  "key12": "5TyvLXkwEFx4TRgS39n29vXGrtLfZQhkw5yXHW4X67Fs4PBFZCnj2CTXe3MhkfQVwmkABuH2hFF5Hw7YkH7tnUsB",
  "key13": "AyeRw425Ei9FYrNteWM8ECe4mUrExiP2Juo9r7KRkxPavJCjJij9ACA8dnQ7AG6n7D71UBJw9BT2n6dqaJPfvQj",
  "key14": "5nr7JpCMag4bq2KAteV4sPHAoHW2BeEkUoHg1Fk9WcPADu7e6GGRTpVhdFMkcPZGfQf7Su52JzXH6jz8xRLWLgRa",
  "key15": "HYhG45NeMLTgeEcRC9kB5Dz2ffcadWBhfBrGqkv7U1qX5wUksKpktAhh7n8XjmMSW2mGwZC3LHDYUzJJ8QBYdEx",
  "key16": "Zs2oiqsXrcKPE6KLhqSJCVHtuxdiLFR1sm1DSy4FSgAAZbrrVmAAGWfofY3TUNFnPH5hp9TQY5TXcbq9Kv96mE8",
  "key17": "55yt5rg72xoWyV7mEHNCkGYXLVAFvLe8KKAcqdrBjvzJfUxUZHKMAg1fS9AZhNTEDDMCfvcYEFwRpr2QwuLnpn7A",
  "key18": "2N3hxt9Mx4zrNajcbKbaqZX6FZT7W5ihnicJ9P3VtqX6qf2rx1oEVYNNhRWJPquVWbVVEGg3MDwjrgP9bMZArWjD",
  "key19": "2ftZuXFacegWTf81FwJDQ3FWDicZXq66ei4Feaoo6fn818siwiya6UPjQbSpd8K1pP6qwSCFUatGuqNaktpv8mh4",
  "key20": "43Sfo7f9A3YdidkyB7BhE2YeB9EZ6dCYqjNVKcyGL9XdRZp1MXU6rEpHhGWwEnhU42bshC13DuWhzULrVHmx2bzc",
  "key21": "akJG39NF8rGVaZ1oZTrdGZuCvHDDFG5P2VZ1Cp6uDQYAK5aFWWpj9qPHCGYS9dyQS5f3G1PEqg5P4Gvw87TuJB1",
  "key22": "5rvYw3R8PmBoRYJzqtdyr24rkuNwjU8Mr2a9476tQ1SfrdsSoxrzvG7tXB7vTMTHx4oy2MF1Ab6vtZoWwjfWgXQQ",
  "key23": "5S8KQwuSPmJzceD7m6ZzZxjyamZTNbspjCyVNwWn8E6ivaRtPm9WkpVQZBfeh53yyYV2Ac3RWZWWfMNyey2F9XB8",
  "key24": "3TZ4RWLfbWS9Au9bYnmmDutCvgyB2xda5md1bwH3qH468iLdfbaAQ24BmAgZiwj26ByVrhFiomzyW3nMpoGJRcWe",
  "key25": "2so5MgJ2XZSx89PWz3pPret51oRxmnNxArx4kAa6QFCthhQqDVi8Pu2qxcVXmRNc5v47TL9TVNhRSqcGR2GgoSAt"
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
