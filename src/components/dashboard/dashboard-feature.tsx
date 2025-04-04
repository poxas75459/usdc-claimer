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
    "5zjEbZeY7AcHPQQ6Aas78RsREEgsg9oJTARDxTg6KTQJuAJ8Vy5JpPPDxs6PfpFJj97qne6mhutS5Mt8b4P3MggP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uXc2UtugpCEBf4gu3U9ixdzXamXDqTSXGqynGpAdK2j5MGmpSoaWNswuBKSgeihyaeA16ULRiZRQdAyPYkuk8g7",
  "key1": "2M9G1HzE4hsHWVsxBQZRmYypQM7TvU5f9RfcQmYujicarCrAXD3c68wdZprShz36TQNYJiSGdMafDG8StNszEbbV",
  "key2": "3dEKxvn4tV1G6NwHRB3oTQr3cBFHfoLrKizExS45yXaYzopxbFntDDd4ohhoVv73MZ6NGV2Zsp5ypdEiS6AzcgCJ",
  "key3": "3KKFqguTYqGYRiU2XUofba64xnYdX9oGWAN1KJwuyzjNmq68ZvFpyPveSJYwHjER7ah1igYBpqk1tVfQm7r35B8e",
  "key4": "53azT3CwGx8UW9jhE3QGfZzo3AjyyXzoFf1xoZ2in6wyTBGCr7ZwcrvJ5pvEMi6UDyFavzVC98waCjDDnYSPuSCr",
  "key5": "47bbas65EpPSft7ZdQ4hYdXz1k29u3PEYnnPvoYeMeWNkBbqxWTkEPsJSrvYqoy7HwopigwKyXLoHBD4myR1NKwE",
  "key6": "4m3pVZgoukmu6azscTfbbhKwag9Xra5Ydvw77gghBQwDe14eVecckfn3fLnGhbWKZxqj5uq5GtCxz9nQfKeuX8rU",
  "key7": "4MhE2tWN95Teo4B7aEsDkn6YqhGiDLVaVjMr4eUEpciYmHtD2Hei91LvzogT1kg9jpN6NqgrwTMdQCARCw5BEFht",
  "key8": "2kmfD5vauoAV3W5LSGNWdjGWxG81s9ME4qMvjKw28dYAe1fgR9KEod3fZbjoPAGiWBp6SPkzYa9aNfeFZ3B46RJv",
  "key9": "5Sh5ay2EdeziXvCfVCxYx8BgKkDxeCAGbTuuam8s2iXqFeHMeNzpoEA6LWu95nM9CkUzGjmFeJFojdUBogDYfUnH",
  "key10": "4TWjkBLNVsBe4uLQ5YnJjJp4wtVjwi9sEm8VKuhdixXi2FKjw2ttaUcxS8v3Eqvd2hLp5X9a8vCjjbC968KKVfmk",
  "key11": "3VM4P3jr1rFdoa6giK5CLgtkxECQsnY6Sfo5SK3mEVX9vNCQBDGggDsY5PXiV39FsnJqPC7kNCXsqRyEKPGUdErM",
  "key12": "4anz27EFPLim39TVC1d8gMz63FnNu3oNxA6Gtsffyk35cP43qZ8Nv2zF6eRy2C477tEvJnKQEuDH9z75u3vCU5q2",
  "key13": "omCwiTSfmwgE6LPBjQg7zRbeQKRKKiG5pfpMfgjLeoEykFFYVhpCpHxdn8LBPYXhjXabWxEfK7Gsv9LZapPfKbr",
  "key14": "5jQx7ho91RrQNZSJTmgUV7Up3gmgvhsRbcMGpvmDzbrxiB9pDq8Q7HXx461yfLioKkNz3wcU1C7oSFJrbBmdsoFp",
  "key15": "5mmV1d1wTDUDW4nc3LHWLGubmYAyZgn3Hg1GibmMoaanMWEHsyJtTVjEChL2V6eZTeAsBbZY7YtT1RJq3GVcQAgG",
  "key16": "WT81TS8QDmZr34GKB29fjmYAFvpksfM9sQcjnUpXuV3rA91wbFaZkpMZwD5ewD32LJC5R8xusqcVttpZtLNhzZb",
  "key17": "3PXbF25VWikrwuePoaLXraGbt5rW1kymT9aXjtVv29xb2LPSd83eMsJAw7GiZgotjqGKUYrEH8gEagDLJmoo2b1d",
  "key18": "75ThEbqfiMEAsiaEZSHbAedPczcsyL4CUpUX3EtAAMh6Qqp4zB93NEb6PRCbXyr4hnGitLQq7G5w3wmigaerXbd",
  "key19": "4sZpwN5ZhiqrEbH8pnaFhDrGNVMYm3isF5DUc94YTdPyQEpscJU5Ayo2sAAKGUW88iMD3MLxaENjRUY74jxMo69A",
  "key20": "3SS2tRB8Dzbdpsved67iZ79rpKtxqViHJTQUqmspwHkaJd5bbqq7hdb3TFfWWi2B92L7g5NS5NVknLrjfSkFy9F3",
  "key21": "3SvMracBXag2jaDYGxgXRnByuDTfbMuPbJBEhSDd21gjkMiiGJCiPPi3CyGYX6aQG99fj3oK2EuXDJT9irhG9WUm",
  "key22": "3D4gS1AmriedL7d176Bq8bJJfJ2kmQ6Sb69NG9ABsrZGcfuMEN9gMDJqXGAPfHzKXSD25QYMrJuTRzSzAPrW9EnS",
  "key23": "37gkmRAoc9bjXGKriW2FM2HmbKbjsH8cY5uTjfPPBagwYKJXiGxYVFtyctJ8DzQ9KwsEdFJbpZTDDvvCCQf7WXhc",
  "key24": "4NFc4o3JTXGAZF5AdCg4dZjHaWK6yu5UVctE7aKwy7h9TvH4QHzDQmQy7FvuYmK3vvQuhkthcKj9khbFYGeV5td7",
  "key25": "2f4ygDSsKgmUMb7Vih4EyyaGVmckbu1cnPvgixoCYdpae9FZeb8BpPCUmdQCfnAoEfGjxaW5LFyj5EDpA9BM8AGs"
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
