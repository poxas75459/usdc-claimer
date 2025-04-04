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
    "3WaeWyTbCS6siZ51vyR2FhW9DK5HNZR3MhoiqZ9RLqSGmq3zZPpnRrryz5cjoqomkVnVKqTh92Hg4iVCUAYKP2hk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J4sUGG5bABcAUa1znAGrFDS1tGU14QvJchgHUMTsqnBDBseEr4KTPQYtRL8BDNoUswP9BWRC27V3qufHpMYtWcz",
  "key1": "4qz3xu5eU9wxQ1EwfG7mWgReCE38y7yL4GSmvSYwJrnV5tF4K6pGqPa8BpiS7L7qjJG4NySoQkoNz22u9xZvmbRs",
  "key2": "3A3LfuqGHo3o6n7wFrPdnqPENQLFH9oQBJTEuSXLeg7pqmVgmigDCCJV9qpXCHFXbATa5fpUJ9N9ddq5SW8H3Sxf",
  "key3": "5UtUcLmqcapey9KMiu5Md5wHzaQiJvuKPBL2eMDZBBvHhHQUkCNVRmRbUxYHbQiMu2rjssgCo1zCcjg48DJ2YnV8",
  "key4": "65yaMxcMszmhsKuXAgMGt4LRtaaSDBa6zNQTMjaRNMho4C2H9UTmo3Lkyus5MgnvGu7GBwQTTGAf6XFjg88bvJ4s",
  "key5": "3bHvAacA5rvCSgUWtcKsn5ZikNzJzFx8d7VMrpHDrQhpsVBLmDCFnDxAyk9LXrdzb38nYFpg6UKvtWiayMhQH2Bj",
  "key6": "4koLKvemVg8wCJN8HNabSCHtXZnwhfuCiHJQYGjqVAgFboS3nssFpk7DnJYZkJroPL8pMhCUe7GvREAXRkuNW34c",
  "key7": "NUQLPLiPZ4C6tMEcrrGMT3SWwZfDdQSaqkPMdRjnHeaR8wGgy2ctYEAG8a1474NnooSkq3tqQXNmk1vBisZqJut",
  "key8": "5bBYzujgG75W8RvmkPdxHgh3XGS4wx1ejwLhhscbnmUvWRA7Tw9CYKs9z7kUHPhkKz5UF5cbafEPUs8ij95pzobj",
  "key9": "ErakwoFghUtKFYAk369bYhKmQrpGRrtHaeu4rLF3RqFaFucGivxQ7Vo6zhixgvQnLoYea8WJFBcoz59Whcp2AiL",
  "key10": "3u59kYhq3t1H9BkK2eGP1hiREbx7AFZShBhb7uJMVNFPqVUy43Y5nTowgJ77hUU5GpfrhTf4tCcpJ6nES96DUY89",
  "key11": "29Nbp27awbLEyoDa3y3Dw5XfjUJqy3HDTtQ64dra8M3qS3ga4iEQqa9WEsLoPy5EY9F8NR9BBS5rGYqSsWDXWAoA",
  "key12": "2MZRuYZdsWGiUm4sL6Ss4xaDwcZgKMC8oFySbMYqN9vL7qPZnSd34g2gKH888eLCLJJ5bWV37LuBUXjhBeQz9D3B",
  "key13": "5WGyfweP3WLq5ei7BgenTiGfoKDGmo7jH3inhey3U7es58BrmGJpZmDZWZbYCdjY8dRLNweD3TBmUzfk7YbiSGAm",
  "key14": "34F5ZgwPEiKNL8h9NtZTpBaDfZu3sEqTPwmqFPL4VveyZCxpfwyYDbDcALmcBMW8GE3YvsyivVgK7QwE1jiScEnn",
  "key15": "5hDWAkSSWS8qaMfErfdit9kiM6wGL7RCxPRnMGeVKyyQdzrZvdMRSWYjNjZ7iVRrjB9DFqhHUdC1P2itm7L9UYh5",
  "key16": "AtsHqwUuuweZnwuFbuu1Ey4s4hc8e5pfeH412cB7Jppd3qx2vb4VjD2KoSVxR1FWqcHTnQWez6iriLPEbeCLeGF",
  "key17": "5cZvem3YFhCRQuN9LB4pUknhnkRjqwXNMQXxQNLTa2zCh7k2p1AMPeVcqVNgJWZ9wnejBVWTMkPe7jn31dJS6edW",
  "key18": "VqpTXSTNUE9DyrS17QAWDDP4TJDccDL65WLdpYV178QJTeM4g5YYySduFU6i9Mmr6EuCAoFJoSEhtjbz1oKKKkB",
  "key19": "2n1c6rKvqJGemazYaLxBjuvSBrr23YEE4y1aqZof6nm2wiNjsLLqJr2memHZPFJjaFPipJC3MyRJpZc2HrGiE3SP",
  "key20": "2FUvEUYUzg92YyNQQMMFMYqyp2E6sHhcmRRKBkkpNVHHArBZA6rJ1hzd96aSbCuYUmUuPgrkQH3dMYuALCjaYgCw",
  "key21": "223Gdd7zi5tX5pgxSGdVxz7BojY7tVCYTSz2kDdZ86Sn1bs3XLb9irmxoGGkhMmwvuT714q53uLrdVwfeRLHsntn",
  "key22": "3mwxiZvRTUHFX2ZfK9JYR74ziVmnSj8RsDpZUZCd1zPTTmrhx238ayWvryr5hZ1wp4ETVk5nFrkZWfTVchb9QFff",
  "key23": "DF6FJMKmhh4hsGxiLrvkRepSQQ6FktzDQszBnHZ12NWhHtsdXvfc9XmLcR47ThvQUth86ioPHLcws6nGibatiwB",
  "key24": "YJ19cLsr3zNtgR3QyXf3LYmPmdh9mcirs1eBLwDtff7P2GiiXU4533wtKmqBkHmPZx4q3mtw5CDkDstozMvtnoq",
  "key25": "61cuhc1zuVTGdQihVz7URtGXfEcs47b439pGYJG2xgXRyzS82upSbvi1D7yx7KoewNMSDV67LDBqnBb9Tf8LunHH",
  "key26": "2EtAUezKEwrfmF4Z15SrthnmqmTQwEtuU2CjHXxEYBrMrnKbxYzMhrC9drmpXb7wnbhLxMDEXJFi47PD8WBjRDKH"
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
