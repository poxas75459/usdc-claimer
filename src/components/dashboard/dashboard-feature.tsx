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
    "5utxu5KsJfRVrzFZmEGUDioR8kFSqyHDeTuFXL1rCmzi4pmGpUeV2zC5ayyq6LBxV9CgAqQjnP831zyupnNtsATQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "252ENRuCUGmQWuEJJA85CCEVXCMredrU6EF7xdW9UiKLsUjcSMrordm8iYQESvPdeGCxNsW5wwAcsVwQpY1ZcaVX",
  "key1": "5DqRZ9QvXpbMBFhBNZdffU2TwFBjyGgZkZnEcg8BvqBokA8DwjYtCfz3vVZuFzp3LiDaoGGQwrX9hjnoDZnyiWAG",
  "key2": "2BPdevFY44TPcXw8DU5FbVnJBMPhk942HUMLXWitwJmeGsdZBVRVvZDzvaGA5bcaiYAxDz3r6JDHedCQd2wyswB6",
  "key3": "2fcSwv1pDPFgDow6bsVswrkDXvYDpjaHDYqb1eV7Kp3hmVzgg2LYeU232perLbsFeGycyuGPsGWsiqZWoVJ4iXsF",
  "key4": "3fnjRbAzLWvBLuFWJg8Kk5HA3bPF912VsudUrs5uvoWgfGx2ehLpuRRQi4Dm3se26tpYsr7TLBdaYaAjgAcktKCN",
  "key5": "54Vmk6nYjXrfXFtHb75X5sniQ6TurEJQqjudepMq5PgHrDTEPdFBDkWYiCspn2y2J4CvEq3qaWv8K3YWTa712AQ6",
  "key6": "4cDwHxuSNicNY6UW4MQdZ5LiyxYG14kuk4TGhHMrNZnKqKdjqNjGFxMw8joevpSrNbTptXMB2JS9wLptaW9ETDbS",
  "key7": "32zns8AEbd1HLeZ8LYtfwu8D3CajguiJX5a3iMifiNvUtkTbj5Asc5dMCMYLRMSGCSRMqxMah7yxoQA7W9ZA17CN",
  "key8": "pKGG8t7RBte5f3nkiBqUyFaYq6sS69PKQXMnvwfgDjkessTcbvCUXKocejH9G2yU3oAD4VdDrhJV1cyuGLJ8bRM",
  "key9": "gi5CVAWcrMBisrvc7VcJb5V9KSDhTQWkRTypPHtnqPFfa3woK9bj1KvMQjS5WM8oUwdjUvMCSmhs5H6wxXRrA6x",
  "key10": "3JF7cXXFA491uKjAMnbstrpWbJhT6nCXiAdV7SDEv8RqyyR72w88PvkSCKzwqsDcaFJb8K5TpqkTcHhvQf8D6f9i",
  "key11": "51hp4weUKBYxdnFScZHxPjpQwrDpXqmQ8qTBb4g1Yh2kHWFeMG8dvTDmbSN41S7ck1qf953jaKtsa21sjcjePrHB",
  "key12": "4ziBu9stGgDYJkbtAyLwq9vKLZJEqCiELd9wL8unpdr4SDU88pdLEtWghca7PNi4SyJVD1ioZY2kJtQyqLaDK9iG",
  "key13": "3tK44s4DhbvykpHCj73iwwKNatcDQ6YCebvc1aHRH5hfiPg8qe8gkojTvr3vvvPpk86VuLQM8bXFmJT9aLXW3SVi",
  "key14": "4UVYqSv1zJ8rXxWyCYTN2VjjuAvrDUjjn2jKKzKyr5tWVy4iKf4HgZi915cTZ3y2CEkGyuyhdx7aBum596kbyaQh",
  "key15": "2Kc8BQi9AtfyGgFQGGioTFYfQmGSxBn5fwN3ksgggWewRLGZs5hpLQUVCHGpZsk4Xvvr7soPm3cmrus43b4g5yqu",
  "key16": "611zaanGbwmAakMtYsF2Vbb1vSK22xZnYGRE9rLgiWfLaNnboUsbSVCza5tTrfzmjwStkHxQgAZjpMuR3XwoQjnq",
  "key17": "2WFmdmZHhTjoTn8zthZYvieaenwKTY8pq8gYEqvKBs9NYC7D8hkLcqqM7jRk7pdEydATnh48WKT4jYazJ6KRuFo",
  "key18": "5TaJ6Vwx7QXXVWKUKnYb3yU2NCofxuFt7e8PfjBbDXofvHTSGosuaWiFEMru7WafBu5tY1zPLZA2dRLccCewAsEC",
  "key19": "4tjEAxdw8aKcV5inJVgLh1HtWMYGNxvSQ976NM4dwGJCtbiGMEf3LGYpqDj1xxWd2vmFGrQ1ZGsEMNV7r3Li3RUp",
  "key20": "3SxDHVcdYiEuL4Mrm7pT2W6uwkQfsjEA9QaoM6eN8k9eWHXRHmGdp1FKXLXxvqTFNAQqoKXAg5eMK4ba2S3D3QwK",
  "key21": "ZveC1iBLRTihJBVUGKqTu6yfZFvr3VLVscJ5tmgVHv71ohQUnqAaPkRTJTznUBaoeNS7rL3SzYvNWPoaHdHo9yj",
  "key22": "rgigDKnzebbwRicuT8mE95bu5WTgLvSJTvWbBgJg1duy51wxRhZ9FboGkHnb7P6n78iU1EUL5TtXx3EJEArJecY",
  "key23": "5CZrb2kxS9KUA8FGwir1TjVTLyfWxKMnfC13kdBp9LW2uJztp7CmEsRFYTXuCkN6eageDbthBET4Tuu32NPb7xms",
  "key24": "YdK9tsyv3qpHHVa2jHa8wjVZAtrwgj2nr5jcHaMNGbQHitrjrWMpF3mAFv9V5EiFg35R2afwucZXDxuyRKZubzf",
  "key25": "2SmyKGB5hKyi3S1EZ3Jy1wzcpZcuntGEYnfY1JX6Ybt6JUB6u2gtHcogU17UZDdMUqgqjDftQpMK7fixUrfxn7yB",
  "key26": "3hAZ9QwPDtpKuTaT2ffzAP87a7eQjizrDNsggEUQ2dtwsmPRQVjNqAL4HzEK4Y7Cbky7FuVMdpzMRg8b3Q9XSXhB",
  "key27": "Ftkzei9r7bEmx2eDibWZDNccRM7jLgtWmpdpiZ9pon8J1GhKX4ULa4ZXP2DTYfWCy1c65ZH7eRumHSzdHtpVfAE",
  "key28": "56um5EspZQgxwUuBbu1AJbN1GAvkbrMrPt21s8DYjXywQusU4oimwyrm3Ctmmbr5o2vFp5bWwJR4eJmczRBzw76p",
  "key29": "3Kr54ZR5qAFBwi3TX1rgnYifw11WrQrNT7BThsW6f4Xs4KqJK4uMnhmaJr22d5BvRzk7AKCcgFV2niefZnp7fPAK",
  "key30": "VndnQNPTKD2kNjzn15tp7uZR2B7njcvwvXFbnbvi7jcwP6XV1ffi1VcjhpgiMQh3qis6gZtss78RkYja8ZB1Uxo",
  "key31": "4sX8fd17z4honcP5uJea7Ed6v2db5As7hVnPGYa9muewFm3QuYPXYXiDwWVHyhtHisgz5eSBTAcc5jPB2Apy9aBk",
  "key32": "396hfptCUaH1w6TcBsqe81ehRkt8tcMSx5gWBQ8kKkRtzWiAJLsKnbtru9sbz2GxkuNzFq5ip3NFUq1WfGqH7EkQ",
  "key33": "2SsXY14MwWikuawMMy1m39pmBk5HEMW2hWDxdj7g5LpvNxpytRQ76ZSj4xw2Jzk8EG7HPtRNi28jbfFeVRowBhar",
  "key34": "46bLsWRGy14VDFzXzeGX3orhsaqCrLxN2eZaoa3QhCwyEFXe1UaBtHREWaKG3aGR51g4oK5F65RgAwXNyYgQoucF",
  "key35": "5dYgxbuAhBDEWdB84u8jbLXqePbbsHv4N2VniHkVhNqZkptLuX8hz8LoiPVDAEJJ7no2G33jBcFonb6KfoceySbS"
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
