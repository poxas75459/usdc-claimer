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
    "hKWjSmPb7yLyGa7uTGPQjxmHiD6mUXTvenw21A3RUEbhcjqnYusQ2mcNSzg1xJ8MKWkKbJLaqHUVzVUf3RqfuYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i6AnVULLuPLaS6Z6GM37Xp1eCcJHgGuGqsiXa18vTuQ84WUmX7WHmMm1medPKuypcG2Wr9WejU5JihaKfnz1ec7",
  "key1": "5MtQVMD5s8YffymDfEo3vxdhpw4bv5SeYSt9ZHREY3EcQ66bDEszai5Ax1MJavCfUrCEHRfSwCEa6fRtqcjKEjqy",
  "key2": "3fyePSn8hTJiWdj1DoZyt5XARFmFCAMcDpHwCYyeFo9JC8qGpn6wcLHsMmRZ7sWGqqnp4JHgKu77GXJmKdnpQ1Xe",
  "key3": "442Wp8uuq8WfdJ1xWsBscMYZDZqdiWFsyQu4ScsGFQ96g9Gtqpr9sEqkHEfFWQUYmFEMcFXikLYHK2HH3h2z8EKC",
  "key4": "5FdcszJv7fM8cCAQHuxvnQwG1jWEn9zkz1nPi6Mpwp3MvW76FvLdTEcijUsp4VMukUiAKduy1ujnUtvffaqvm24R",
  "key5": "5QKb1MCxedPLc44gb92jamf21uvrWsyzuhYVuS9eSBNRLk7dbCXBGAojwvktpY7PCDFbvVu2tQLJFA6D2v7nsLqH",
  "key6": "3AsXnWH4mYbFVaUek97jg4gtujd5c2pTje5wJ2n7fPmziv94zFsjEAeTY4P9hvLUbp5fVxWTkfLHitb9S3yiNuaP",
  "key7": "41ZEMJrXrRcxo92itCgg6bxY9MMEGw4gXEqCGYZDEfoacmoyDp44gMS4bV9CVExXT4hXGbKfUSzfq1zT1AynUTmV",
  "key8": "58YBEC361r5N2T6eJKfcbffP5Tjo6DSpA262vnEAoGVwBs2fA1dpKMH1odsqwUBZtTqapGqUAbeggQ89W1fPwoDt",
  "key9": "2M8kchcC65N22LWsVNL5MaUjUbT3j7kJh4P4E9D7T8FvZpuFuodECYrNGHN6R97emFUwntDx81iHzLATu3VcaqQU",
  "key10": "5cmjVbh1swikBsGEni3vVeVgKEeqZ4S6eQsVzpRuBAeSJy1PPQfpmdXVyamufwMtpcgYpWaqHmZBLxVbz4rkb4Wn",
  "key11": "22L3QU4G8xDFnmasKhpn8rVonijfjiu4kW9vwKsme7KwHZWiHr1h3YKEMCTR6uhyip6He2UePeqUfDohghKxM2za",
  "key12": "5rcYe6Pehq6gKfTE6om1JuD9vdiw6kd8XedgvToQ8PRfdPN1vqramfx1bQvX1UAkEu2vbzJKYRW1qQbyXvzpcMNV",
  "key13": "414McYK4dVB8NZag7kDJ3a3aRNjy3TqrtxvowBBUduirgspwMCDkzCKezAV5gSJ7hRP3huRkYG5meSSwWogNUXtC",
  "key14": "2rDTBmSgKxiiJEZRtmNd3CxRk8Eo9aDKTcR2qqA6yzvFyN5FKX8PGPmiPiS3ZZkV1jmBNK5m6e7yDNGhp5Zrkx7q",
  "key15": "kds7GZj68Cc592H237dZt4XBoxgHarSCRVnxeHUQNA4dDESQE2ZHDxWAvSA7YU9VnkxqUM3nYDTiCKnvxc6Ujaw",
  "key16": "3FpK29tvmDQhXukUcjLGFrcnJpaYNrB7zJjgU4hfeg89WN6uJQLcb8JZCkU18yJM4DWwzEMDTM9pAkseT8UdwVVx",
  "key17": "3KVn9HbnrLkUte33j6FmaFRkbjpYsvq9WhLUqVekz3A6RnBwdCp5cu6bd8GdfxSj3usXu2LvNnccc7dN8Qs9bE75",
  "key18": "2xJsghW2U9bqet49Wn4GuxccPcdwYUN6vdTrXBjeZweybsT6SdHhEQ8zgLzdiKq2ntKdNGisFwnZY1dFmYRcoLfG",
  "key19": "4D6L2z1Qa4ydEubG6AkY3rPRcqhLfAyURFAk4wX8dFL2NsN97rUgUYe8fkoPhQKjsLY4siDo95GtxnvAsYNEC2An",
  "key20": "5D6hmrqNhbTKaEVuNiKsoTuytkb1yF5bQCQ6r4MUTJUM9vkfXumVfzRbNpwUk1UC5YWf5afGhBsX3eLuCJuiiazB",
  "key21": "2TfpsKvuSRhi8NmNdssnmt6ufriWHEGHLzZiqLgbovyihLfeHzbZG58doB1bPZTcm7sLDxuEuDLnMZSh1X4FLLxD",
  "key22": "643msJbw7X7PE7J9sC8cTWuWoDN6gZ6QKqhaKrGPH281B7WB4NuqgwsxUBnJeHWhjXCW9qdEwmRGt6sQcaypYncy",
  "key23": "5UVXxqZmq6W8LPKAtFjgfBLPEVmBVDeKt33ijybrym4Ym8qFDnRZYcCMkvi3nH2Zv8zx9P5UQeDkPHBfLbVKJWo6",
  "key24": "JR5ydEywdHwnEqaAXiHsQp5kMTpA95fBZ4e9RBciSzxbyG9zz5QgAs1qEviB9qAFVwz5RHe9dF7j9r1XcQAfLwt",
  "key25": "2nTrUd84Zcmnc8SGo1H7rLxHft72m9QiGuTXJxAkHgYk89awBUG1KG8skubWuWqKL99b5aJkXWWVcaHWnEVb1mLi",
  "key26": "649bGbLWJQSLQvmQ9B5b4WWEDTvMcvjUipxUNyjo3XtA1nEM5obNnhESffExwPXKSjeJcfvCB1LRoJhHvN36pueR",
  "key27": "4t6ep2FvLfAfxSYUJWdXq3kyo4ZsR5qsSmrJgGSd6XScS7b9YybopR2PvbjWZST9TsF5N6sQjbGskZHFgiKXjvap",
  "key28": "5Y1tDx4vdvBDjivEiPbtz9mEhd4DnHfyC1wAAAxsJeM5yGLRwKwRTA7e8TEEAEJg4AGzqGYTbiK2HzQRiUfJgVfn",
  "key29": "URfGP6WwA4GceMEbMBHKJQEDqGkkQn8y9DGCv9QsfGKDdR2Ge6wL19k71rssCWj9iDRfjskwkzq7HQdSFmHHDyn",
  "key30": "yodi8SfmdNCZkrd1Xp6P7ms6F2xXFVHmzhdd3sYRMMATiKoVcEHW6CvWibaaYfvveDaWy2rM8qLWo2jjv593cAK"
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
