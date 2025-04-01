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
    "4ndb1rp5DdXbcQdskz3JgNDW8DowWizTbD91wrZNXb46ZKG6KLNNiwCfiwiHW3FCSSJuk4stDSo3ok7tk5ytpf1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KtxieqooDknHVGM2Lm4TbJze6PyF7dugRwCXLVcFLRUq7n8UNgu82DjRYLLWsk6ZSYgWvzqFuidZGAqqRh3Y9is",
  "key1": "5fCYrvSfQA23HqijY6JePAXxnGC1YbBXpPA2VDRz49EfhJtgT87Lz6pi3n9ZU9VdjgrTdk6YxcsrnZNNArBy9ihs",
  "key2": "3KTgZ2JTd9fnySK7yXNyXUmVBy9QpJzY29DeEC7RFeSKm4uqRNSoy9PAgr7nhDtPKCtW3MQ1o89o3nijtT6ipAh7",
  "key3": "2MjowEiGAAR6gnxp8moE1drtxwnnVHv3xaZo6DyWvuSqSA9iU3YNMUhABF9XMe45AbvZd4UXAV9YG7dKtJohQcMp",
  "key4": "31gdXzgmREisuWTj664Ze6ryBciB6FJvqCuc2YffGe647BDYGLPRWaQkacabgYZ7tgwAM4vPHSBvthnd68KRJLun",
  "key5": "5Q8PQ8JajKBTunERq3ruGrJDPfgct3aJx2qh3YSY6dA5RRseo8E3ePWKLPwdDSqN9SBpNoW7ZPGbk8XV1DE5Mie3",
  "key6": "4gtQm5nGj97Ek846U6y12PBdZzhqb5BvKe3EYWpFUeHubeFpvSZSzJeZWknniR39Zxsk2BQLtGE6bPv6wiHAA2b3",
  "key7": "4DSZ46HtMW8cmUBUkJnCZZJkhPUn6cQ6yZgdEdvbffCH1FhdoPGsWsrMmCt6ZrogEshreAdYDeasV8VgkrBYNvC2",
  "key8": "QXZ6Hdo7dTVoFXxtLPH5ka5hdsRxX1LC9nkj8AcPpYmG4KWkovZsgb4V7pj8pkoUs63y7eyKyXH7hqYK13VAFiv",
  "key9": "ZbFCJEgyuFxak8Kah1ex5MtYiUwfe1JXKyA6TcksBkg3whCGEk6RQXkmArFzZCBjxHDKEGqH3S4LEKSy7MMWwm6",
  "key10": "64wa2xFHGoHVeK3DXFmWQx2n2tfNy133GiFmvK15UDzMqhjW5D8YB8YfaNf9vYf5DtwfphberNjmGsoAWLEpGsCt",
  "key11": "2uGEqRmC89o93qyqCKjCBaZdu5XubzSASmQpojAs4XGgSn3HUVCeVANYNuYqVTHrYaqyY4AyEFz7NFxwcCsciuEA",
  "key12": "2VmXebAVJbxLghpTFJVbEApmgS7xuLxBNG5tBMWs733o5tCzftsQRubFXgvVSQtFsrnmZRorQJdPGaQAQV8EXaNy",
  "key13": "5E622fX3XTtzdBZQqSM1DckSXZ4MV9m8PafJy7A6Hex5oT4ndQDGzffjnPQygqvhFRGXeLFRd7mJUDjPrxBP72iT",
  "key14": "4AHhDNuSA8PMQbjngtpDGA2ifrxdTFcFSMV3rHWLxsijvKFmxokhkue3zoYp9RiiYgm5HCAuXsSD119o3kUtkK5J",
  "key15": "5vzKVXckboMzwzZa4KYDVBGFX1XygiUJVAgN5LskWcvJ77q3MJFCaSKMxYKK843cn46CYu1xy4z8w8kQ3zcv3m7H",
  "key16": "32J2iaNZ32cTr9Kji6W1KW2vURYYRogpVdghC7JVdnfDrf3AZBzTFUrMPaymsyvbrQ13ZeZkxbayBSEatHJDzevQ",
  "key17": "3cM3JLFsvq8tBHM88vM2RVmU1VQqNo9RDuRp7K7XieQUuHwc4SqpssbZtFiEmugqWF85tDH73KsYHpxz9ke1EvzP",
  "key18": "eQZiwHusgBRACEGy3Aztvuz6SSiKUShWjHMDm9QtjsawsQePG1yj7qMqr1N9oBnzf5WLfX1pfAuoAXsHC8Np2DM",
  "key19": "4QS79GiXfsxVjEcZaEuRxGJW6ehGU2PtShoL8tmUkJYc1i4pk9PBSkHhdgQpbk1NM5Ak26H2nSSvqTamHrsu73cC",
  "key20": "2fDY9DLxvbEXYKtN6VTshWfZdYWVEBPWe22vrptCfw2WSmcvZc71cXXLU3PrcbkZcrTtqg4Tuwr8nRaVj96XkFuj",
  "key21": "4qr4dbWRgTHtT6jjTdLjCmyLNzANBay41nVzVUmmZ7TVydf96sQJEASc37A9UY4NitjvzdSGSbURidtL2DQFrUyA",
  "key22": "3H8bcmFZR9zhW62AnZpKdxQCT5GvEGFZTL8SUS2NS9iBLdrjeEf7L91poWuas43k3X6KCeRvtTZ6sWbAE6qKJC37",
  "key23": "A74soBktCfvxvXsL472kg8j6qpSYsD3swyzXprLeP47kgdR32ARQk8gRrqR4qMtNvViwG4NZ1T9bfcBxh7neJQv",
  "key24": "46Ht9PpafPkz5WLfi84Bsfb1Z2MMMVVUeWVZCt74D3Bm6RWhN6pYCdn8oj5oAR1HQuG5BZvigJ56Ap3RvyjrMSjW",
  "key25": "ZQe6Qe31Bgb6N31jtUkbpVNcnTHPWoU1YM3hV87G9uT9JebM7V94NSxMkX1f3d9LHufNuGgaTN9dNDia5UcCc89"
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
