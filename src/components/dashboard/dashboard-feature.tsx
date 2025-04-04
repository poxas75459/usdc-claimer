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
    "2b9C2Y7CAUQNVRS1XxN7Q6dfFraXminqhW3cTJ3jzvdprZXm3c5oyginsrWFujGR6AkhDGU4bK7tPfFiedKKFaVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XHrXnUXj1YYXimVbegMpCrbevvAtDSKppM9uRfLk7C6vhiF44FqMKq9YUQ4VTYTcHDmED1AFuJksYePQsUqX2wT",
  "key1": "2qiE8JiHe9cZFS94hTCmTkkzJ2ghMimSfNZet1crUqwteaSM6HryPpBbDdwvx92QkBnKwMociivWjREsnCvf9Q6S",
  "key2": "4pPLXQVgBZQNBKfwsciiSM3abbMNXarokcofxoH3BzXM3yhGvjNE2Et2XMwoN1bj1NeGJUC9V1tT9wc9djt6wpQT",
  "key3": "3kov6YJGjAoJvxCvHwcg8YxekVkZo4NELU3X7Cw9igMzoo7VkYapVqzdYCusyQDYGRKrf1Rqeq1bad8SZX73F4kR",
  "key4": "2y3TjTqFgMkcTGx8yEAYk8WEQA4KFePJX1AgSyyKgMWWTE5CqchZGLXo7fNJVvW8jVqvdthHT21J69s7vK9UkHic",
  "key5": "58RK7L8dWBEVktJ6sUUEUc73tAmtQn92fpK4uuRReA7MpucXcjHxn631Zz2XBR9v2qDGP2vBqBbArd7CiL47GnuF",
  "key6": "4GUjJJaMZQFAEsTrovU7yKuzTQWJJwnVUueYCZMeGgvKjnYeExusgsK3NhHvmr9eCVfgANKxRPUaxYUkotaXetgm",
  "key7": "2NPFepVdPAD9Lv6nELyTHcv1PUWoaFbKnxTYzEheUqm3cuHGE9be3munEvNkHjH4byxuqtDBm9bcUE4K26ARB1BZ",
  "key8": "2KjKP4LBryWdHC7RxropsHCoVCBcDbgZDdaz3FFUvE9wnmGZ7oLZqMaxxSzzc1dieWuf9Lcc9SWTxZEjTSCwELaw",
  "key9": "3fA5T9QfXRpB9HPtTddJ6YqNMmeoZJuazr3W4C3ZNZSeqthZYNL847qh7PsTLBfWtMys1bMbBrm2SfisiZUA9Mdo",
  "key10": "5q9sn7qu8gfYR2ASdstxcRRqDWe4RZQVHLKGUdvMkAy3gEqWxaMRn5GuE7LjW4DYLAzzVTJfgzqDwW1umKGbwryW",
  "key11": "4ESCtqDBhwUh7NJwfmmy7bARSdntWCowqZpEtuQLwhnbQw7jW5Q4rNGECrqE5bsV5Vhss5gRRz1jvDziy6grCvqe",
  "key12": "5sY3okZUvAsSqtQUCDXNm7T94YaVUisAWJA7gwrFBYWPYqPcVsTQJ5B1n7qfVPAgJPwFRYzHwCxs2cWUyyKMgUtx",
  "key13": "pnmrSsHx1WxR5G9hjCUoeY6HWRmu224VuaiH3nuhEhbVpz13Ugyj1wnweadrPdx2kYaoWb7jK2mQkor9x6cyZ8B",
  "key14": "aEYQwncwELXZXBm46Pm5mAtffTzDsNoQPzeeoauku4Vg9bUCuUWiDwGNsBWgJCC1zfrfbD1U8jGXPad5Cs3ma6U",
  "key15": "3Sb4WPfp2mRTkqg7UgvWzPRXH6wsaZiociUYQuth73nwecsQEhBP5YBM4V6hKtXMtMffK4VhqiDzpaaDW37fGczk",
  "key16": "3vaZp81rUFBdUTpsV2qxhCrKxhFCW9K16sotTKunLEreB2WGxeoQEGzPLgEZzTyhoL36q9HZ1K3RQgq1BVkgR7Bg",
  "key17": "3Dr3peby4h81kdVrfAsyTQGfosS748dn9djQXb8Huk3xdSL85Xpi75a8mgQfe9mQicXiXLewytnqLJsePX6H9SHH",
  "key18": "4o8mA7j5SSQxM4HvqpvfgSdm3st4REhjy9Jjx4MkmTVnfJUZAFmzMwsyJXFNKLLZPEmccYz3kbkwj7S14mBFCrFN",
  "key19": "5uoWZCw6gCEG18A8Bfnq3EnPgkciMdFJw66wHVYTTpkcB7eB3TF2FquWqBbAGnvSimGMPUcrMRz2cANbUjs8Gf7h",
  "key20": "3WjDN1gDp34mfovGW9zd6KAdXEMxCQHBHsK39wTP6RCyc7xVAqSpMSVxetNjFypkotdti7b85NXML5aL39EKZ2jt",
  "key21": "55wDEJFXvifMku4FTusqvms5A7ndZ6Rn6zGvEecWqLoryVE6eFGkdVsFNhwqp4gkXJ9Uc9X9V37Gmfw2usFg7CFh",
  "key22": "2pYibMbJuro5FnvpqpUPqeJz9AQXAXXWo65HkPY8mUSpfnEBqpWKS2a5wAY6SxPuwQivQUircHGoe8KphH6WS256",
  "key23": "5pT7id79ZfNLPLJrLmBKvMUU6cuSpyzgbmVUtW1czMLrjmuVc5fA1eiktsLczsacTdPje1xi5acn4dFnbW8DfZZi",
  "key24": "5GKzM9iwwhydx8pg8fs395AVBRLq4gahCmbFEhkcYY5HL5CW86om4MRALWidKSuuWxc6zk7VHmdoN9stetYY2hxQ"
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
