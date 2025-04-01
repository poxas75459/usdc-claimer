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
    "3iYoeqq2nbu76mj1g4rL27KVgzRNbjrnJhQpog4Hedp7BL1hpACk72f9h9mTDyArQmFca5YHfWHcU14vmQrivxMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4djMdLtaUMhwBAzqvsubEZbpgoPVNRCfz2YADV5S65qDvJbNwTXLUtDdYkPicjQZmrDHoY6pRF488FBf4Bcb6mK5",
  "key1": "3P9E49owHU7x2e2FeTM1HoC7imLm2KjpxLMKGWtVyWmqv7xxY6hbVN8ttf3rztHLTHRedN8hqJzdvoj5NFhWoxKd",
  "key2": "41ukeBg4kDAWS8pVUUpzYefKfhfnpBeRzdy8a5qZapkBndDtvUQ6CyCMes3CsdSUgaTvsRnAncRneY3F6bRiDiCW",
  "key3": "2EvtBkN2Y4YJvsxGqRirXUMh6wYufsaAjx2s6ZpFRKAQtyaK3aWjPXqK1Hob9H4Pzn3HwubAfjCHT17LPVChbaTk",
  "key4": "qB3XZcpyN2NuVZ9kFNNNPAJMDMcWcvrr7WZvpPScB3h5TJViXLUafvEz3DkHzcuqjeCTU1SqyH97SJPtgyfvzLo",
  "key5": "4FRw2PfHzqUanrds4Dndvx2vvAfvY9BzZ4rXRK7AsbCmCbRCFdFCYQfsePKbsjMSDrJxjBhYSYf2RW8r3QXjDV1P",
  "key6": "2fFofnZJ36zYNeyJ513Np7Q1fXYFpHw6yshHPE51xxUcBXEnsfDfiShntTjNomT48XefKDiSvT7ChoCjjyBYkNvS",
  "key7": "3Cn8Lk6mRGkFLrCsrAH4caqxJphbxdDJDAaUjn2s4sS8xa8ZoNKf2WRo8pfHkt2DX7L3GnbDzdCZ2NxPTEB5W2Ht",
  "key8": "18uZ2yL5NmBcQNXnXL7QQEnimdidyEtSU1HL5H11aHXTezXUKS754RoHvFcXW67sRsFcoCFewboE7t63ABUwADX",
  "key9": "Zg25nXKnRPVWiyaBqghQ8ymr45AFnqJZJLNfSQL4CSbuVreV2NSBAU1n4pAXdk1w3fUEs7UmCobqproixqgS8iS",
  "key10": "LWkLjkETPew1ooXRjRsB9F8eRcyKn8FLDZqQZnkwui7iRdy5uYXVu6BKN5JAgY3maKh5mK2GC7Yh7HXSqUaCYHc",
  "key11": "4M6UtpfxayF6uhxU4DbAwWZZ6Qqo9W4J7B2Bsj261THThJgP5bJHzDduVL9msvW4TDRxCntbJgF9pgGKrMzNwpTp",
  "key12": "2hkzvHCDYims93Ayw5EcLsHK92WP7a9a8DhU4PiwYKvdj11hg8pN4RUtJPZWZgNyv6fZMYbBFFzKYR1WFjWoJhQE",
  "key13": "2c2vLG2xPevB9TKLmdZNHKtyZTRArm57Vi2xZVErJgmE8B4xR6n8AcBdnVwWu1unVmA9Rfqj6qAyzAgWrUMzcjJD",
  "key14": "2f1L7u81sNNGFnwD7HSkfVbd3ZS8niAu12p9RDeWEL6stE7pMvdJ3yDSieLk5Vc4aUAnYwLHHERXn8zgzY19Dxx6",
  "key15": "3urniRjaAkgUn391Dvs2rwGeSsNSn5q7CNtW2fP3FWtQLoZseR2ANxUoN3auq13aGUNFeDs4jJEkWGRS39WQpt1y",
  "key16": "4W36RQmR1VGnpk7GbgWZHZ8BPd7TuAEZfMNSG3HDBBYnU1bk4zaUguEzLmquUZZvAkr6uypiexQCHjqUyhX82WFm",
  "key17": "4wAmLdsJ8gih4uucaPLQ7afX8wbEqY2UaMh96TXCqGiLKNzYZUvk7FamqJbNVBkrFwpg85qmiF3axqSBFm6ZvjP9",
  "key18": "5ZdtwEvQQ5VRuCLYwyk2CwuGLPCH4T3Up7BTbmT9MU6whrG7JDnbgKjJ1s7pyhFzqggLkBoizrVHmu3odh6TQiqF",
  "key19": "4c8D9S3QEdm4eTiAxCFaKbmQzBj5u6rGn3pYWJbZPKcdy1SSq8LvBgHHGGYwaLpJTQB6vdHLk3goV65u6uCM9Z4Z",
  "key20": "ptFFSxiQToLCgXVVjzu6aqAbnkp8qid99WwmybhunZ9LdsW7W2z5K7eGsnKyXdL6z5cXMuRp7ThM2ansNtyLf4G",
  "key21": "4ymGUh3eLmEnYUms9Q8bhHam5mt4HJavAnRVfH3U5K9UjHKTNG6syNS1SzJdZF9YohqJWk3npms379g5K8vdYvwD",
  "key22": "YFpZB5tYZoW4Sbmq1zBTJmdxyGRLiv9TWx9MPyRKLkHwNAsY6NsyEJoydhFoHpBWaBNLVNyJdc9JRt7iGie6poe",
  "key23": "2rYjxGcqgLDENRCRTqiUEWLEAwwrxe7NS7yGDA9nYGEsNPezWjXUBMtYfz83saZnvB5fsu76bHwtid2MkQ75Mchg",
  "key24": "2icitS757zo6qmqgK43qxZ2v1mBJXrHHuLDTQ3JPjgLnjEDLYTGzyGLUvmx91ajC7zRedojKseGS5cTMVgbKTju2",
  "key25": "2FV5Vq4n2XPaWdmBrcNE1nSjrv7gGiQMP7m6w7YNeToTZ8DbjFNsnXoNyijWTwJRYywUyyrLvYTKpoq2uy5kYJgt",
  "key26": "67Y8GY661YNUh2Jb5CNBxGvn6QBjER4h9axyCTNLgDbvNLNoo9bTbF7pvBmpkTs28ng32MD5AZxMqUB4uuoDsmuo",
  "key27": "4wzMQbQ5fpctxQFGymoZn63qMBBPZxAAoaKYFTmZExr4S42hJnqJjX6kzoaRsXCraTrMmzd5MTmBV3sqTuF7r47S",
  "key28": "4g26Z3WH5i8MzarZxmFnSxYCRGwCGCbH1DQkGku3cuGAVt6oC4Xj2DMWJe5Av1gvyQX3Y9brieePdxNsRwqspkUv"
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
