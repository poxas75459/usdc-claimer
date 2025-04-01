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
    "3MKZSTdd61VFxdeVb6mEcJdCisoMsqDdBoK9K3mWFf7nu5jN5eYLptSPgYQdvQgw9LK2dwufshaiTixiTdHM7ZaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x4f7bt6nY19X5HkGgBJX5VP6AkNSZX5RrcB6SyEzMJf1XbH8aphXi3Qe6PuWtyMwRmh3R2WtcsR3HASxXG9VGTu",
  "key1": "2kt27SwHeGjzdY22V8yYMqd1ieZC3E4bmG47AbzkhewvPWMZTNmjoBBDnJDqq6oUXPoiKUpDX9cn7TnM6RkEpcLa",
  "key2": "bsHHNZid8YVt8rL3gDbSnrwGctgHhjEajxCYnJ6XStWet6wvR1C5NshVt8hKKkzhUMQkihjRVMXh1QBcjcJK6Dx",
  "key3": "3smNxDkUQhCFagrjQMGq6V7q3v1JYUn4dRMtbtarpRFntHKZ1YQXR2FobPz4bAGeXELGnpa1duyUW3NKaXE2fT7J",
  "key4": "AdptTrP5JjHFoAcHRrL1hUjPRrq8WnpbrPZ1fUgHUoQfohJPmznD8N8jnWXmQ9kAD8xBHMtth6MpNAiCwz8bjRM",
  "key5": "3HuZxK2im2aQ8sjSurMoGHnntJaL14s33wv7BAVGSHVeZ1f64trrDF3tDSh7jgAvX6e6zMcXMyXLwa2krMfDXLpg",
  "key6": "23b7rcy4d29PKc8Z6g7TSBz1KqL17jMvoaqsmQg2Ts34gqRqPhAxxRMP1mthe5ZLhd8tCCqanDNoq9tPimzFkCDf",
  "key7": "5jAym5HkrNjWx242sgC5z5GvFSZY2vm8h61xBLZ3r7mkMiGfUMofUhb3Y8Wm1iCJthyKNHo2b4A6DsdPhxk6985s",
  "key8": "Dq8hKXNEF41PxxPnk7uRgsNyxhb7EJnxtfF7y8gREdbUrt7wVQjjk78gtgHMx81NJwBmHgQQg9Qp7hsUeDcvoqn",
  "key9": "52iuPufwsAAuGk5vCog4EQWgWorCd4SAEPnEW9uaBgdAKPgBKwJGcLPtABw7c2sBk2zQQ9BFrzoEcaFmG5gwBkCE",
  "key10": "tFLHxKDpL8Qp1jkfhWKcjPZQvRPEFXkxe5snqpyCmx5HxKzgBk25uwyH88JgFaGwutt7iqbHDKZkjmzQ71Nn5Z5",
  "key11": "5grrQgezkUrHWiTDF33ghc8EbKbS1FPfSNAxWLTuoEnstCFF1KxPcbQZk14eTLkUKiBrAUXxQyyWmkwHcWPhyXA3",
  "key12": "5NCKG3n5Rd6yMfwFM4d2Qb26AJdYQ952y3TCjD9wPwHqRpb8DyXqPxFU2WE1TnDpcUTXtDnvGbo7MmGQeE54ktSx",
  "key13": "4mxNFdoCEKvCnXPK47m4zSTLzWkdMY187PwjgJqyGmCpA7dozXNCDB6nHKu99Gpfu5k8yHNvuZ8k4L6rBbfzYYvE",
  "key14": "5N9qujQpRR5NTJvGvriT3hUWhwu5bsGVjsz1GivWztqHuB3o3KiBSVfaeuuqPWST1fTDZ8896r3Q8xZtP4xeG8mZ",
  "key15": "VvFq6aCSd6TpC2g5RiLxk3EjTU3ERLCAmeyt412wYnLwdfvN9cii8WyJfcmv49zUbTqAMdUyqkJxRJ6W9Tak51H",
  "key16": "iGbHadR4QtPhmDBAF6VgsRgMqT3wwFjQfXw3d3AsMfuY2hEADbYj8wgnSYvfwhn4r3uakspYYjjL3HHThwBsfZk",
  "key17": "2WqZCpVyJ3Tg1mCoZX3DF4A4xynRn42xTYJ1VMzoECCpHrSb9KdEWbfNeTTTXMdkQG4bhQo7oh6ZdwrnMnfJj2eM",
  "key18": "enHwLQXHDnRTU5E7w4kawG8dMxHXLWqKq1dVKKKfAVj7bTR9fkva56KHgwt1t2CRxUmY6Cih9DBXWnCmp48NLCL",
  "key19": "NAStxjtjbF6hFUgc1MdsnU56nq22Dvswcb2y6w4emSy6rHLRMMsJXR2iefqRjaE5uu2DH6Wfux1H4P2QzqtpNk2",
  "key20": "5zYq2a7ACrAhxV4SSRBUUMeB2SwN5PyfvhtDJ3GJELMqP4FZun6c53FxR4UJMgzcVULEX8JCHwawgMWQ7ACEidMY",
  "key21": "3XrbNFSFuVuEvmEkp3APZcwuL6yS2wWGBpXFbXf2AH8WoJLyt2Pdh61WDgAorcWkpg7pMAQARbyQ1Pa846ux9kGb",
  "key22": "2MkbTS1Ro55ahivr9pPcyezB3RUXAdYLaPgQ9JESv2HggR2AGoR73tbAoCCRd5Bn9QVxok5vtDjzvBi4yGb45sjq",
  "key23": "z3hu6Mexpmx6zswgZbUa3PYYsHgPGV9QBVT8wyoHmXbsT5RvXjauPvvKToQfByZ3PbdzhRdBQkkTN3Sfhga9Pjk",
  "key24": "3cPnwMJYWbknVgoiusTeHZjMjxG6THDukGDjqJZNDYjpQzAdkp73oyM3SvSmWEtCu7wWdxfoVMWyNhs4HKoyiBsN",
  "key25": "3RzcBxHLPC67P3RJdoRfFsGQr5DKUgnsDR8kJM67tLH6bpSjq2RRxTn4eZq83P7rghh6428pSsQ7AnZutEJFUrDG",
  "key26": "2EbAE5Z6aaRkS6ws9cVrRMCwgFutuNVD528THNTAtoMyAJGic6EG7QhrTAngMcNDsaxc1CUpmZQCZbGrgJvXYhx2",
  "key27": "3LpVxH3EQbiSGZGN83TqQqrk6PkSeEnK16fhqmU7TpESYJzALsGYRL4d3oUspQPzog3v9D5xY5bhjQn6UkjMbnmn",
  "key28": "5fTTuEzsPPdTUtyGYRgiQsxMopUaTAkLnWu665t71ShFGVudjBffGzhoJhxSeet9TjLs6e18X6Cb9pPjrpBMVPRv",
  "key29": "4mTyx6YbDhcHarmPkeWHF5SqsJTmGmbAw3QaWVJHDrk1VqTsTsbzA67SzDTzsMrV5fN41mfn8wAMD4wbDV9eNm9a"
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
