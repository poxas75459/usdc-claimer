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
    "627kREaMDoJ36rjqGV1U3bm9ZNMtaXH4DTs4F2PFZgZnnRi8uxB12krFqiyRWAigK5z5VHH9LP9CedkHd8xWUnrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eL9SrvPb99f2cZKtAvp9PPctASFmGK12zpuhKoDdCR84wbNcRFhDsWkLv9TunVFNPqkDo7Tdx1nnbZwpzor5Wgj",
  "key1": "4XiukEVhQY9enFbXbntzH7VRi1X26ZVa42tsHRK7GQfmpMv2wE9amQ3bRSCXi5aCJiRfsRpWXKAbA2pZn2au2NYM",
  "key2": "3KjAqnSeMJRKas22Bnr2UTDeT2yQoChVBXSTZdcqEENPu7RYRCfeWQjpgr3jUFTvdfKa1fErcjAHVDxVLfRqoHhR",
  "key3": "4vSKbYUoXh59bqqqBF4PNHWsJXwDpY4cdetMRFSdztnm64vB1P5icHVvGYH56phMhNJy4oooD1VMjxyU7E7BVtnL",
  "key4": "5Lezt98vD2t9RPKFYkiDLw1LbWn74rXJb6CkVhmzHvP4qB52XigNiRd3tTKFmbmj8hvZ29GjN1bCirFghCNq8TBv",
  "key5": "5Q2ZvNuqoa7rXL6Wm5DBHotuyLvxts6Xn1SjSyXMkN5ENiuNBVA7mgmwkUcK8SJxegRrqHgMruEKjGojvXcqph1c",
  "key6": "61gmaJDQfzk5UJMGiT9z68ADG3sKKF4fw9LrEAzEedSzemUpbbH9emkRWGd1xfac7CkGkSBcb7f1MQyigxu1bncC",
  "key7": "4R4KjQVrbVAko4iqeBX6PvoYRebgjKN8tcirzKtf93jaqcXYLtLN9VQviBzLzUuYRNStxeneJAtGYdzud54FCyAz",
  "key8": "udP8awKA9c8VDRwqgbKCD3a94JXcz713KAFbvTnBKLAV1CyhRvCX1zMpqaZicVvth17CBqutRGS9XLQ3Fu58QUk",
  "key9": "5yM8KVJhVbudRcSaJVjsp3M6DMY7F9jSz5hD4nVsUKUgZDcCtiUmSt9qL3E4BjqETNUf7EuDWSPRMnQyzpgiZPHj",
  "key10": "631qUKFzTedncRT3ZQp4fLUDhcf87tk2HdVbn9hK5Bj6b5uGuWj7EZb477LhXmHDXQYhDSfQtiCP6zcxfyLPqaCK",
  "key11": "4DhLWDyq3nnyUwCwVfnxMsZfzagwP4XHTFcSTuysHnrJqeUU63xcmBoauCFVE3rLTSRtnQgNcDCmLFVwNerwA151",
  "key12": "3UKVmJkkeVUycWWv8GoA22jEZMmFf9YMAGEFhFijsxTPj1YPhJTZuAeqHGe1wPgEnnb1QVfjqnvCT8PK6rAXH3SR",
  "key13": "45Lh1C7p628DLjCtw87DxfYv5gesUfckZuZSBPQYuwLryNHnTw3y677tWf6HYK9VEyMVKaqs2h7ipFRgJKCfV2qJ",
  "key14": "gi17vnEkfjqRdSgJ7zFq7VDh7LAbMgB6ULAQtfdCzjxfSkM5HaYqWTF8aNEKgxB9sNype9UPDy6ovgwDUN9HU68",
  "key15": "3jfvX3Wk9AvDDbC1zAR4KFcHmJVxKDSFuFzXwNRm7as9sFUQtChXsk2xmauUUMqdb8R2XnWb4eetPVNLvqqHEtJJ",
  "key16": "5aEBjHHQBm8LtdBAZympx2JLzBZWqGjbesm3oxM4zje6KZ4xo9YBHStCyhU5VCabA8AviD5WYFBRNGVxzW8jRECx",
  "key17": "AhZbbV8jeyJJM7LeypCxeNiWNRbywv6N1JT5LB5htCddsHey6Vyr6oEqMHad296qYRVeuiPP2XqKxQ1be1MgTsG",
  "key18": "cV1wDdXCsZjN4Ss8z2KiBtXdA8cawefMJigktrEx24EC6dXYWVGdxf6cpu2pFHFw7c7uNaMQWvNMbhPMC31CNmf",
  "key19": "4wWFsCmMgwu2kfdzPeep5CzwJ779ESUCFXj4L7TQriK6Qakz9z5dV4aRZp2GGntDNFGFjnNxhrEwkqwaKLaNPWgy",
  "key20": "CA1MRVbAyeH9wGs5HjSgWs8fRYjNsJAfduzQm2a81egobpCWXEkFrhD8L37K9eBppKaXnNzb2vPMBLQQWn4Dbk6",
  "key21": "aC3hgqLC5WptGD5qjhnJPnmPsBgoJDtH9t8tQDuCfSqomjqcFDKaEHubpqxAnKuoSCcFjh5KUPconULB7kqvXGF",
  "key22": "KANfXNre6Bq7rAwRNnumsESezqwdhjKzKYsbdnBjWCqGCpCHctCuf7gFsHv5f8Be41673csdFNZNwNGyhowwwWk",
  "key23": "ZPkWJKXoszFzMsFRt45mbpEFkVCfUnTjPBnvSMbsU4jwnBmyy4DPFUk3iQNVL23rWTd2iUSqxFFVsQB44QqXQfT",
  "key24": "2uCqwC1cX7Lftf6Dvn2yiRcidYj532NCYwBQrYzBjTjVNg5EDBfoDXkYVMKjjA7zWLXRCtG492U5a9cKVJWqU6rx",
  "key25": "2L6tJnjBAKvWxQjxZkJJA4mJvMsjPS2cB8ZxnP2uxCpqyeNPpbu3pKRKfS8dvPhXF8pGnNy4FiV6zPckgPdG8Tm9",
  "key26": "3cSii28G1rYGXLbw35NGxDrn6H8kHxt1KoHkAbErauLCrjUhHA26FJ9VqEHqFq6MbSxk7xHfkZQ2LBaXRjgS9qjH",
  "key27": "34SfwyE371LdpnYk8zCxRf2F5aqJ5s6qXDcjcj85oACH2Tsb13yqopg5n5a799zSTn4ZY648jgjy2jB5uh7pu1cz",
  "key28": "3L9cPreGqywLWZeHvaZLp2ofdi7Y483wzicpRFXNrKw5XX6dqEBWtxMzG6hKmWtDZ25VoApnCJjXKE7BdgYEpojc",
  "key29": "5rh2hR6iZzzn4gvk1v4Mcc1UTJuvmqXZNFpJZW6r5s49vwqkGv3TbXzLSMakvNGdAa3RBPocDifZ5A5cKuLMJQtM",
  "key30": "4uh5WDABoQ88hNLLo8zyzmsDv2GmsubHsb1zV8Ck3TvMUqNuJUnD8qJv8Ro1X6Zvn4nXpoenpGqx5pVKhqMRvqne",
  "key31": "9FGRtrj6GDQXi1qjPLUtFYMnFMGo9bpfB7C24DNBSEarBKKNXo1zzzipnbXTxFFYFrcPr9ZUec5Ec8gvw45jYku",
  "key32": "2ZLgUwQdS2BUpqjoKK42bnmkzLwDjpDDuKaESX7qHAWVxop5yMM21XqWLWtqN9irkfMjn4F5baiWbtVunvCEPa9U",
  "key33": "3YccvQMVtGzYxXFfZfvNNGL2tCoyREKZC4edQy1qzJ7fwkeLarX9yj6QZt7QTiFcFbSM79jncCsXFhTK2S5kfirE",
  "key34": "653tnec5EwYKNTdwS7YBGaP1xaZhSSqqFLsQYTjakyM3nmR3vFhUp8JF8kaWeejanQJir3RHHkxkhXAq59ZSVsNx",
  "key35": "5s3owW68RGNBDVjQfNWpsn1tiRdoJ6T7W1KRTbYJZh6Yp5Zprq1G9Xunoi9DWDZgRqyqPJWUZZCJTg5VEDqBXRcr",
  "key36": "3mayqpgQXZ7ZQ67gPE1XqxCw5XPgoL3atmWDThjKfQkqxsHYTUKwPNPLbiUed42LH6Zb6PAQW9w5dyfPc4ZZv38s",
  "key37": "3HwRtZdvC39mPmeaCXbKa8kDjkETAbi41XETyKxJJ7MANn8pdLkV5c8ep6m2A2Re4CfJkmyxQh4GZvtfMduf2YTC",
  "key38": "2YRmhD4fmqA3ky95stjq384osVFEPdtL3Tbhvk9sy95PQuRZnwpcTcJdrE6cykyMgL2tW2MTEheH2EHv7XvizcUe",
  "key39": "4TLRu6xXzYGZfUrQYoeAyMPEmnLLpgoU3DgcEZyiLQQfzaiiKsW9eitTQLz19Nuo4GajQxPaQGLYs7W2fszTAEGN",
  "key40": "uGZmUq95yxSVVXqDeUmKQfLj3JkkfvERqxr9jGkCYiww2xxfKdmNXYdWhDx1xNUiTbhN1CLKT2Tdk5zSnHNh1VE",
  "key41": "5zHVFPXsLw1Bciv5q14KuobivK9dyRNKXSph8uW65Y3ipL2o8Xe733jrQjhA2XqAmvwA3f5P64FM5BymG2JQXzjn",
  "key42": "4N2fXGwmH4L5CM3Nakh6MXAdtQp6wiKiEvNkmJMD69PsuhTRq1zumXrY9JXprfW681U9TfuVcuxmcjRQKKZQXav9",
  "key43": "5YXZxzas4VcgXa4BeC83hCuUDq8mSVMQ7RjMd9EMgt8nVAcuPbJ1JrkDaiZRPJyCMGkUBBEjh3JTmZyGuRqdqusa",
  "key44": "4g6fzHbakrNBWBByhzi4edYPTXq3VfWnKkh8KfEy6RhPHYDwy7bn4ZjPrawUC8rPjtBVNSXNzpWNVmfzmXwEgdFY",
  "key45": "4kFYpZh8bavxkAfyqgdeXNA2SzUfZDjRmmRFvBK4sbKLW7c6WYGVwcRNynRFstcmtdH66gAydd21LZ21hwsTETDu",
  "key46": "1NWDYMc1ZSiuWsDiePBFFctQYcxrqgFkVqmW7G4TfXNcgPyPouKH1fvJjhUUPetRXumx8k4jmLynGAfi2VJewRt",
  "key47": "46ppQDCu2sWEf9xergB6kt1xHqWqDvNF1WU7yWGjfrBrG4Kt8ULgmcMhkax1jM8b8NEGrS1rv8oS7YiQRUfQ3UHy"
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
