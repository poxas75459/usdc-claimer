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
    "3Jhe8uVC6vCPPS2fmd1MPhBFhGQF7rETdwQSxxgsHpkNyXrhNcS3nkcAsCw9cjCcGMNMawCCHUcEoS6ueLoJFWJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uxZ8jYgHzFW2V71atpByyde5nyUxoDVrnN9kR1JSnL9ubZUme965Pxsc19D7yBQS7Mud9wipHdCUvwfue7VqPaZ",
  "key1": "2peDjNgFf8y2r8xYyWz8GJnh1rfXWAb7PYUvoQqM6NRd8rTUuoWcj7s2ngSBaW4hvEdZ1Uv4EgQQwcUpbZ7PhGvg",
  "key2": "3iEKL1mnw8sudiVHU94XwzBMfiGgpxRgFTEF1eXhXY7Jv978JQNuuBuNZBrQUkpRtUGbikwkanZMxoFyQ9haERG9",
  "key3": "3Ku7iUoFuhaZunXfF927kLppzdib8WZzmMvF2msfaGq7Cvbt4XSkEhEwVdVgEJ2fB2sxnC7ZsgDNwPqhR91grsDv",
  "key4": "2LYJ2gL7nzmRU9ZQzXiqWqRxphqHxQfCoWboNsaossCq3Y5xRA7fJMeFMGEYCnuzKLLy1mDGc1edqGEVLeK9x3au",
  "key5": "5K8PX1hT87GVzL23FTvL3bVmbTrGgYxWp3SXXRfjE7axkwfe68Xu3Rs3bSd1o1gPjof7ad1w7yBbnsnhGHji822X",
  "key6": "57mpMPXBRoQe9s9FbU674rDA6hcFGUKirXZ1QZSSda4onxeHhczVUK3szTxJas1zBfU1n2NGJLJ4TQsTZNDDohrN",
  "key7": "36Lr2kh6cLAJHsebzapW3orWQ9vY6zt7aBUuNPZBDd9otNWhuUVPE6R1UAXgcF7A2W5nnkzQsBwocNzPUsCsToE3",
  "key8": "uVrgMgVCqKGVcJkqA97rtsi63KeeSmEcuRD25ddvVUKWqYUfPAV8hhtJAksuK89arcR13KeJHbEMjL1uE2G2MPa",
  "key9": "2LsoTuMwgtvTPqVsXw7izYvKZHCmyeE1G6wqJg57s2qfX1S3X7H4JX5biU2X7J2fouzQbAF5aurRLea7RAv1ZUDk",
  "key10": "5NTuho8HUTTVa3gj77R32narYucnJg4oPqJ79wegVxK1CrfAzaV6om625D3cL75HBb3F7bmBtgzhX6LCma8zuYTX",
  "key11": "nLJMS4RzrZiAM2pUXqYLVGz7sTBGm9M3fUoaNKQUiEBWtp8JC6YLdg6vTJ2GtMEyYEb894YfhTa238zd2QBkkoY",
  "key12": "NuwuBzcm557jxRUyqFeTDCsKdzZWESZeJgyokeCwBxgqygo3hUboBvbfuBXwnGK6qX7xGb9HuNBGU62CeXrNVoS",
  "key13": "YVYsmLcWyv6pu5mqJJsKiNnpGv3QgRYZa6y6dD3njvoR7m8FiiRwHxuZ6wfwEX32EZR4TgsdCRGb1aQq9PCzPfj",
  "key14": "3cDxoLzUNcRWin7GNBbZjXBbQa7VLAexGXLJAnSMFMxuyktf9RLuvqern4JhynRqdt69njntBt9mj73GPjcWepLV",
  "key15": "62auB1C3uDdkAc4jpT8TdxNgAKH219UgakeVpfAPFiV2Qze718wJtrzvDFQCsRjp9bxxL2dCt86YHQjYRkewUjS6",
  "key16": "3ZHt4zmEdW2vQrRiF1ZL7KDRiNPRBSyytY9RMZuskuyk2fR9dgLi5Rwx3ELjsrgJXDvi4HcysRGbLzk1oSgWHtet",
  "key17": "5PUtrMS6QMpQi3NWUsXsMY1TE2oTRUosS8ePAeerkseXEBU8xnFGBRGdpgVNJN5wmEgj4Vc8gyqD47wU3zYScvRo",
  "key18": "25y3pzRnhmin8V7TKRwo3Zasba8TU8eoZwVRgzG9bgFGY6MgYy3ekjMDwX9VDRr6eJu3aVsYmGa2JiPzXLAQw1LP",
  "key19": "4TH6qkas9E7YJL4vrk7sTxp4vjpxV7TiCNGrjZ3Qi1h5qdHAo9bD26Ar6MBAWTWGms8ufaCZNmZjt3uiDpRHDVuv",
  "key20": "5DnZrxVKGJU7Rm6NZwxuh21xQme95siFZg7HDEe43AswpET5DmtG5n9QYV89sdm2cTZu2zCeHVysABhUWA2frDrQ",
  "key21": "4GzH3BGrodLNuHAttd3yZ57nSV9fRuNdVF2u1FDQpPtoEzCU1AFNsSRFTJwCyH2nNkuvb9rWa6e2nns94jXoPW62",
  "key22": "X9VyeTDDmdr3K9YcxYV3eqGj3msSR5RMf9V2KMupf4azyr8n8ehLiU5uRGrW6QMm4vPUBQW3SVKUdKW6rLHimPh",
  "key23": "7LDy7wLHWR1sZwgfqLCwXnkYYpMvpVVV2K9qFbnsPSmEgeAdBmZRnvhDy5pcpqotoYKERCoE51W9VQ4grTmUTfP",
  "key24": "3WfYYU8qE8gJeoQPXnd5iBNr5t1TSUk8K7xB6phz8uYKMcqzkwaeVxsSSfKmEnpNB1ayNcxHuYYdEdTCTci8QLJm",
  "key25": "3Z1VYeUuJX9xwmKgW6M47QnqpyAvZC9GMZMkCMN8yRfGYWmakcuhTLbwdPiXkG2KAtCYCnUuUbJNKCH4jQB1hyXz",
  "key26": "2DfZ5mHxM3Fjv5zYo1g1Yv4xW6EorRywfWzHSoACnTe38UWcX9Wue3oxhKX5pgGTo5LAWVpUHjCGiHAsXMKG3wxs",
  "key27": "xfbUGGCRfcLcd3WqoJfctuzppTU34ASoCie2BNB1ChycrurSeY8o3waZbNUH7At5MuiU6a7DAvuKzoA44kdWh2W",
  "key28": "dBxD8pamfABL5W5bkJWQPL9gnacnFfgeqNsjYioPB9huaK29x5FV1bV1RQLU1ZzPRRLwxE8nYJ73yBrKmdp3BHB",
  "key29": "2nBbGQh2HdyvXpo9BPqJYyTGkhoStASBor9nJDR67wvYr2txHtBtfESw4yiLStEpYrtd7BkFTWnYqpTh8Ra66K7F",
  "key30": "4ykzUFDX47B3z7S3Bj9c9c4qMT4Wt8EDJPqnLR8tAAftWVMJYtGYsJ1zJzotqUKPSkmoJcNX4WDqewBBDmL9HdgB",
  "key31": "4N7wm7nMfyKRWVR9qw4NbVKtWgnVvcenodnFsQt3kuQwDtN74ngTQkQMBJJkqzPUtRvwB4KM6oHRtbWSqANMVgC6",
  "key32": "2J4FmwKdvXvnv3oN4S24dXbNbJKNJcLkosX9dq2ob7PcT4yEhemyHwMVWEg1YeT7jYdY3w2DghN3JkhGEV91knMb",
  "key33": "mBy7ZpVaodJVi9se6oNwHA1sMrQiTihyJiAV2rvFUkrf5UPgoYmav1Gw5LdcyayKTXWosoYF3RPeZuyPwr1AiDS"
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
