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
    "4NwgSfupXgBkmYJcrBUrvbWT9SQrzdk4qUwvq4jZ3VE7P3v9EHfhyfWV1uguvHLADBLy4AStxsdjdBrUAaGx5fcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DVpFfKrhhPUoP1ASXsmxh9hVsHJ6PeKhsQ3Grg3ByrBxazfwycLcbDUmvfbDB9dQ2FmfY64LjWLcuVgRWr9Fw7c",
  "key1": "UAraqJZpo4VaKcDFRqvSE4EsEWHzE1kxufn7MYSRAagSLQnLpYFZyKaQQ3FuRxHgeMfxCgQtj7HLSpCrTKowv1h",
  "key2": "4m5YMt34y7yWh1FNDpjDzRAP55me8N2FhPttFji6Yx6C8x9Mz7RRSFoTLnqYB9MAohxUhrZ8HqTfSUq9vXFkpXo4",
  "key3": "3idANXXBUn5iDG6uZF1LctwXd7RgEdn7FiWLe7RVjRj75A5RSVkAb8DdRi4L92PrUdSRR8qPc8ZGPscdpUuNbeQQ",
  "key4": "eiC4K21x7GNETJRMPJuXqwwDgE7BdKR6Mmwm4EdYh9YgDXfxU1if6fSQBhAfaYXYmoDFNnTGjavJqmj7r275A8j",
  "key5": "4brLrk9EAbAroY7msDcBeWvsPwh3NoNRTUy8NnpDQiXaN5wSHFcxRnEgaBohtrvJuxdnoCnnuPT43cnkq2m1jid",
  "key6": "SoQ1BCvHHesYsW4LLyMTbJ9788QtPLqKRaWVFsjrqNQCn5fJCRbxwJRZLpixbkHAu2ikqR4j8SMpVJjrpcHu1g5",
  "key7": "3JN8U5ppRZxqFi48ewYYU7fYd5iv6sZGLLa5f7ha8k9siew8LxeGDJ3c8gGkVrvTd1wyPkbZV51Ug1wn9uq8J7BZ",
  "key8": "3x85YyrWbqGLGBciGw4Ad2KZ4n5HHzjMpCTbU15SuESJ1z6zxcTBY8JB2vVgGM4EzydZhyjsTKLZuw8owoREd17v",
  "key9": "24aFpr6zh6QEsnXAEkdCpp77amVzHQvWcpGyaPb6icMHPGF5PZzNBMXjbUsiEGS4ZYWWFFmgFRbZb4Yp6MwmwBi7",
  "key10": "5dXerJLM4kFnVp2Ch6YsgcoHczcUPH6jMjCznkxjgTaakLAJrpEbtnfychkTsz7mA3xoUSWpFkQmyffs2pnZzsma",
  "key11": "3QRhYnkJDgJK4Ef2Qio62QH4cEJExWQmiarnA2Z3rPNrb1p8zAeAgncKvPNmw3QgYnDjcWvXbUorKbBSmxAMto81",
  "key12": "kL8KdzwxFiivgNVH3nTAuBTx9fZ8S3m8gLfVV68kbyeXpYVEDmuyaXTv383c6EqNR88KLv4fKBLNAEHBvrMA4ip",
  "key13": "3i3CaQKKSt4f2QT6bWJuN1bTHDkmrfDe76DnshkEtqxQp2KVxo6azH8KDKdBpGRzXTFg67JdsrpGEQhoqqtRndPb",
  "key14": "349ywDX2z5WWdq2ZNVPYAznLHtUVxnNgGEhDpCzTs7oBF7VdZkEVZm2Bb1SwcZDZPxBYPRNnFGj4YsaD2RmSjpqY",
  "key15": "47Mm7zwULGVVgzQdtYhHN5Y6pu78ce8YYPYWfcPb2qksAsAfraLjjHJa8sA9MJEprYisoWUgYP22ih7hchgQ1GHv",
  "key16": "5TtPBd6ALTCqU5TmCvfGHESme7zg2mfkoiSiGeDLYRR6CWNUD2vnqsYEoRNvuEGa252XhFw5mv8JJczfgX6YpjUe",
  "key17": "2evUmX6TUK7yDpwZawPTDT4wWt6SvM7knn6AkmtuckuVDiGfLFwm3FPmATbjqKa6FGVJraGsoiFXSGTYrAK23w9z",
  "key18": "4Zz8MqdaiLxWf2Ju5oTgvyT3AkGCuZHyKQiHq7M1U7NdnELaXzbn92QHxooMt2ivsXVo128PQiNx1MZBn6ALEzKG",
  "key19": "3HrtFYc5wZZZ9jG3RCexZoDBs4ixzj2M1avC1DZBhnCqQL79S1A3Mra8eQSwk11MgSRTecKfCufimphgsxoFAKTo",
  "key20": "5K6nkMie7a67AmgFBpMfhX4VpzWNh2garCjVpj5G6aNCaGXnUZq86KqCGuipzoxdS9jZiSbXrF3XkX4GKaJQkL8M",
  "key21": "2ztTfjPEu2psZEh1oeLAdkqhoPyP6B4LtCQfwmtvCDtZLj1HU2sRVJEoxT4f6BVQEVhKoUBGmcfRkLiA37Bx2AdD",
  "key22": "5GwDPoy9RD3E3vFLSdLywbQFuz5pzFJXx1JtNqcqngyu4i2WmXkrHFsNaVRtyWLiQXHq3tS45w74ZiG9yf4FB35b",
  "key23": "zcjfxWqnMx514AST3HcMLCG1FdfdEdzr5dPn1i7PhWkUg3zq3ss9BKsVxKLBPtUP2xiz6LJ6ZGWr6hHURzxRoho",
  "key24": "3dkCGGU4i5N1kAQziHvTDfsET3qVdU7958aSnArUWYSCuEKMbhTjjf2hGCgc1M42dig9Vkga6TewPMySb25ozSDW",
  "key25": "3CoMLdbjL95WRXSGhwBt4dZZ81LMo46o9H1NQsov5CDVfMZzRARcmediE1UasHDgMBZvUMUKkz8NRu1DNK3CoKTq",
  "key26": "5rS8DeF4WccDKDgzsiifPQ7TDNKL2RGvU5WZ61PPcUp6Z6LQGWdH5buZUnCAzaAzX64WtbXbFizCtqJAfyTuT8q",
  "key27": "667SPXcaouW53Du2wPT9SKZ4vvNfdynJ7yM1Jkm6vxHLfTqWLBbMNZqHLoRojiq6DaFB52yYy3xeQPgiQtZT3C48",
  "key28": "2EQ59rNZ2HBh9EeHiL56yzGbnSrPjezbL2xP5hKGkWd1h9jUrL9aoFzbwThnDUyd52GpGcpqYppG3gzdgVej4e1y"
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
