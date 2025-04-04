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
    "485eJ3DzLXLSXMn7uGxNoKMmuUn7GPVU92zYjdggtSf1eddwbCNkUztY5FhRfzvxsAFAKqCfKVtiBcoBCx7Mmmb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dFUeBqfYq5befCAKnoCmtBqCH5tWrbuXcaM4mPCNCA5s429xdWFa6qfvcb6iy3tQzz2wnTrrA4uFu81N4ejF7yC",
  "key1": "2Xs98vKDzzBwEGQmSDWR7McMJjWMBQYw58DoLPiJHo1mvE56trLTacLrFnSnFnRTcLACE15h24S9vHwunu8MKbPK",
  "key2": "5TBzCCQDyWagBqoYAx7WkstULTEmAfesyWVGtS3cG3vdgHbNq5yXpmCFEe6Y3Wtz4GPpAYZn75sViddh92nTqFuj",
  "key3": "LWpphn2fdktKvSQuGJe6Nw1nFZupCzxMdxMPa4DsiqR71SFvYakByGgEvFFjBQ6PwspWJgpUhaqQp6XEbDYSF7F",
  "key4": "vPdoSfYDFuZKN8vEWGMJZDMMfZEyRGX9NSfB4yQRPt4FutrYeYuqwr4YdYV9tkdQv2vmrpB6hbTWaiR6xNNnSpt",
  "key5": "49oLQGdd3LfMKjE6DZ53oWFZbqnSgNgJKEmadERrkB1vj4MtjAQHyP6xEAoU1Y353pheJC3ZUJiKjPb9Jw288QQ5",
  "key6": "4fmRsWGe7M1MazB346KmNGzhfP9sJttT4zjRWVaG6A7obrFLEf3uXo36vrqy4KmueWSpfMvS3YggodUkJEW4TwfX",
  "key7": "3ncoZE8LcgqpA7Ssuuu4aA8QHLMctJjEeByUpUscou8ZxgYZ4rpXBgozg6g7utzR6jXJJM6KS4JkgQXK4fQyYQjJ",
  "key8": "2p378PP94B48DbLXUSWXvQs9ctMP4TFShZqghm83k6SzW11LbF2ygvtSCND7AqtppL5NtSKskwV4fczya7JKkDRM",
  "key9": "6pZCiXbLMwn2gaRuNLwHbQTQmjDBUGptJNNN2gpJKoTL5V4BFwvRRbqvUCdBYTWFMCiD3RMeASq6edqQ133hX9b",
  "key10": "5JS67LpLCpmu7CBkKJ8r9QX2SW6reich345jL2cQD4g2bCfGkAgibjbHwmNNaFZzg1FAm3JGWqSMZhVrMRQ9xetV",
  "key11": "5FawTNRdQUhoNdTF2aWNZxo1BVy7QB8ynbxBXoiLed8ebrLMYvNejnutxQAHNZAbw7JpHAixgeoouMAt1FRGXVGM",
  "key12": "hNkz1YVSuBvuAjUmEdPD6FVQjfW5A9naBiYyk96tnwbErhaUC3EFvKbLbMzqfaxifXAwwXdNzWR9ggdCAjYwBws",
  "key13": "36WaAn8cCfiTtfRK8hh72413LgR2pLVXsfzBP3nxwCh9uWQ3SHyyXCoPqxopRZo9FQhFPRCLYPR6JvYEhobHEEmq",
  "key14": "2ToXTEMc8ZeRkjQ1DwiVN5thcLdCJ1b9816b1iZ4r7cTgEg4JLt4bGGp7rR4iSP9dGv2hekPjeSTVMWGnE9L8Unk",
  "key15": "3fwXbhF3tRjg7HZtnEiDjGa3fkScsKkbWRvsZDGZt8t8pQwEjbuXFnsoTN9aiyvzzseDPtUKFrSX67nm7LUFQ3Qp",
  "key16": "64hiREbgzqH2SHA3Ldtu88nbDtXABo4wdbeR8JKoqg3YMWaY7zDFdpVbKz5LvsJEzARFphF9jcpUu3xbWAJLxvBJ",
  "key17": "4ddJ5WZh2zo7sNK8mGXbUgaVAx8651R5x3Yuom1ZHRXHc8uQPZCWPgD55AR6KmoJYsSp1kRJXAZeyGhNXJYWnmxx",
  "key18": "4nNDhJB4qgrvyMonnq8UhfjmctqxzwEq5tRoPM3MqSs7NWKeQCwc5MxiSTWARJHeJaTAeJ8FTf4iUqqv2wQNLfW6",
  "key19": "5a2RaRoWE5158QYJadCymo31m8fKTD4F711GE9XM38TGj3FeV5pjKgT3yyqMRLaP5f9CXcqZt7299LBkxUcv3D6Z",
  "key20": "NWZqcnoWo3LnrzRXjHQ6qDLP6pxwMhY2WvVquAXvCJLSi9hKdn6E5CwBMgvGnahhVSaHkKiUNvNKkTLnxaqmLeJ",
  "key21": "5g5E2g1eS96jstvjDfpakjqpaGQcov63jY9GeyMdvLARUUFfp2C8hFbWMe31K8vHB4JxfyqvCxXHHr46eENeWszE",
  "key22": "4TWufXrug2h6x1LAmGTUS5cxUNKw3HBPwMWuNtuy3ap7jsrcxAe4iJG2TJt3kiVXxTFfEUJSUTQGG1SVGdAJSZwY",
  "key23": "4Gs1LMHwGY9G3XjV1cLc8GMf6mS8nhdCDYZ9taZaHzRjk3dzax7y7dgjZFTfhnPkK18czPFc2qshfo3R1z1T8Kd4",
  "key24": "5mnKCJxgHcH7QvsVeQZzesE7DaxBdeA46ScU2yzpN1rppDfPong4MXRCnSCWpddb5CMhxcTn1PrHRFDTrFmFKXhq",
  "key25": "2GNfiaoBCBGbgjoicxrM9j1yhEJTdTJXQJ4AdZ9EFLmPk13EpjDzWbaSwFVPwkN8wDwf411HteueqQahdBHSRaNa",
  "key26": "3FZULFncpMLkvGtGwXD4Q5Yd5Pu91bZpZVm69LQg584Yygg5WMFmmfukvQtSSvDe3WhLcLUecFTneSNgU1Xpq9cj",
  "key27": "3DjdGc8R6TBbA8W3kTJJKq3u3gXaSpTmBng8U7X7BRpBCvQoG138eoRpTRE8Bu8vbgSBAenCa75u6CbUxPn98s9Y",
  "key28": "37vyDHyoFdEiGZdMXGTnjqCp9eHhnX7KLBjPeznGgufdofQJpTmrnqzahzKtKJmqVwAMN7uCrzEfHMWBezc37Vie",
  "key29": "28GUcRvAKU5EktWgXRwXAHaqNjLvf1Sb5J7KbaHarER1kb8WqnSzbWMtmrTmKhJiJkxH4NPPE82rzcGa6c2c8Ebq",
  "key30": "2CSPVKVn4N9VDyKhZv6ABmg4NccXZf6n1PrekyhP4RJp4VTEMtT1d3zTKtjde8vhSw2yGenzDLbpufmDn8JCovkX",
  "key31": "27YVd2YtuKe1Taqsk7QiQxfx3wbb4H7cLw5ar1WzG6C3TxnPFqrQyBTV3Cvv4GUim42AdDC7jUcn7cHJ8YuCsrvr"
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
