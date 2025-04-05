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
    "2J91drkM3hSKueFh2df5cwgWgb3FvyE3F98545KB4vqCSTT6A3mFfZWZHBxxpRGfrNEPuSESfZzNvKrn8VDfZepF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NvRhrZhRCTFt8C5mhq3LxvDJpEcDjM7yiujuJpyswycs3aYgVirgxN42bmLjs7sxuZTY33ysxpQdN6QuHkfWUWb",
  "key1": "32QWyx4v2yy3wDtCeAhi3Sg8czhW3DLcEuRhZsFeQdkvjA8URnksTgARA2bGPUp5aVbktuM7JjQKqe3dCPsLbAoA",
  "key2": "5UFdFngx7B2sCoaLRkgt459etbh9eKVZXZF7bdhbmNXnzQQy88JyB4hE545GG3J4DjFeNXbDYYzCMh2LJWqDBcn9",
  "key3": "5VyS4GXJWJ7TkRUpKg28irBW34XaCzqqf5JZCWcJrgmZc45B6168nXsZunRc4kUMC62r4YreDZkVp25CULWLVUvs",
  "key4": "S52D5x74usMiMntCLrPPyBnf6bYEM3THVUkL1TWnHHfpzcvceghdv2yGnF52c1f4uDY1pzGbFQGdBoBHiDwAN6A",
  "key5": "3daSKU4U938JzBTv4buHxSH2Bj5Mpua3L78u1HagLS9S8hvofrytbcYFXSTtbLCeoaYqjYYc7MZYmco1rsAAHUmB",
  "key6": "HmXbaYm2rFpjJLfbtzbKkukamWqavxXk5nZcSKnxoknVnmct2RWAuCSn8on4uFhr2h6JUBQZ86WnUZ63KF3PDp7",
  "key7": "644JujmiMpGZvEhub6c5YtV91fZ3CLw1wTJangr18bpyaF54SKnue78sxJeLtXw6DC54avxZBLkFp3dK7HLtCLXM",
  "key8": "T9y5xtvuM8xqaQ665mpo9EFQCq5NmZZsKfWqusnVat3y2qUSGqDGXLMPKzrsiUpBk3u1qATqwDmrDmy1PAyydcS",
  "key9": "4wTd3YFsV1DwAPsHujete2bE4H3UzZYN2rkRN867e4hdhTiQwnjyanaLVYSiAy7wTHM2PCycEY3ETpH5eF39LCpv",
  "key10": "2GcThhCwScb8PYDT4XWJaKjqHY1Q9d8SzQsYkHQc5WAjkRkXMr1ZM6eVP5ZS2JvLhWeWuyxz1229R2madwgTSqcM",
  "key11": "3jKBpbY2nCgkpG3kGh8tfxrozeDwR32CFckveWDbRm2UT8oCgabN5q6ixCdnZJFM8MxmBHHV5Z1X7R4FqS4Y67pw",
  "key12": "294MtfgKbZsbdXnbeAGRNai9KetL68LaM7qEo1ahq4MUYh9n51Jr6EvMQTtmCViay6TcPoxg83wJ94faPhyeziVw",
  "key13": "5nUxoFTkioqgsuMHtBUAJoFLsXHKC1jY7LEmv7EderXDsxq2KJyZkxBnj7jwj7xsvzoxny42U66yePEsiYTSvAtf",
  "key14": "3ZB4dNdmJR39nZQnYejPMTfH9hZNVk2FNqk7DZ8oB7WfUsgySxRqRdeeDtsPDDYoViQcTtBnCFWHTKYnKwfwGUGe",
  "key15": "3J4VGnhmyq4JQ5MscrVKti8aLHTsLiJtVqCxHJaqJY8VqwvaSKJcYzQVWfzNK3qVurEFc33gBGLAawHvt6fMGggk",
  "key16": "2kXyMCBEhcEETcgvgDvspXqmFnKkBaLGFfAdb7dUQrahbGeG1gr95y5NSzrepDZLZ5rNVnuJjk2nGvZX18jPhHJf",
  "key17": "4FLsGE9PesjDsRyD7YDJdd9tCqWsXehkdzk6cYdbaV5oVhnxU8R4pGDqrviPrQC11HAyQC3R9FxVrsqRLcoBK1EZ",
  "key18": "BrmkPRd5yGGstYJFH9beLHeFNHxi2U1ZWb74tVLhQBCqYoDnupiv9iacjQtWwLMRBiqgL5oPLDcFXiXoevvTsXq",
  "key19": "5r8wnvfe9HQ35tpsTjbfskUZ4XKrLtxeHPbQCfL23vFGG5cpayzw7Cie1YMeSrjgnRdd3t1yRu3H6t6Z1Lrk82jx",
  "key20": "3i2WKpPNDwebMmQBKYEfGh9NPwhFWGg12KWT8XMAQ1p8bEwNrW2tp5K2PCXQ7hVLAPo9S8hzZ1e9NYUorPXaHzqC",
  "key21": "5KQ8utaS9nH2Pv29y4RX7zioCh1gWpDm3AuyzSqHADmjXeEav51crnkZkFyWAxZ6wtLyNCZmnMs4DMz2KsuFAvzx",
  "key22": "2NHjpUSbNwncjWSgrRsiVuZnrTQd2W9WBRTmbExCnD9yRSq6MHUCpN4CGJ58rMwNVLg6p73t7FwviDwA5dkr6jkF",
  "key23": "5zj1hSyWzPQavFdMgggvZirD5gcMqrJDNQLo5rg6CPt4nAvZLcRiNe3wuwBZE5wiupB7Lkhj1a5x2S73sSzLdtY3",
  "key24": "tRL8iZXrCPhKDHBNATRYAym5NhhhZeyJuPNUzBVaZVJr8HzXZMHs3zoS9Ts3z7etdhdFeLsNztXTRcq2Fkz82C1",
  "key25": "5tKASsvpUDetqYFbb4Gb33VW2sUgvsvvYqMFpCtKSnAGvFjzCsBEqbKgMLx1trgbXii8tyfCuGXnZMwZZZrKyN1p",
  "key26": "2yW1jFw4LTETEYacg3qtzckUpajXGU1Bp3JfPxMxUgoVuG6gvh92T4AoVwzX2MWxUha2JjqNgYeQ8Em2Px1JvDBT",
  "key27": "2fURbkpBmWcojCmkC1JXYCKZZH3c4hHu9Eco2RG6FaWfLK5Qc9qZ2M6vbURuer72QJGubk6yuMKM2PNJUM3CrgHW",
  "key28": "5EefEQDBaX29dz4is3BG5wvbGCbUJKxbNhs3jey8zZHNo5RsWUTeEybEpm794naWtXkox7UxnQ4zXFYRUJoXsmPe",
  "key29": "5piEhNWKsd9ymo1KpshNd12jiGBtoWc4UtRMcYaETcTzZxfFEkSefSMbSFeoWhur5EtCzoHE74DfwrHkMoGDPc6S",
  "key30": "RsamKmrmXbNMxAaZda7T1KJNDNJhQ3r3BF7RoYtc53geCmCfXzuQoLAjU1ugPx41NDXwhZFfZDzTgTiAhf1x9Qb",
  "key31": "2jLcQFTtMKwMWZhjy8FMXHX3TmbpUeocZxhmtXGf9wLmjrM3DP82nU5mD2G72DwKfjvNkDGsExwo56d5srtRg5RK",
  "key32": "469TWgCRq7MzTuUoTcRwp9rkgFwoay9t4dwPrAppYFxQ8LE3prFtg81qj8Mvzk7mdCxR4o5wegj3v2mZW53qbpWY",
  "key33": "2njRs3bPRd9icz6R1Swfbw24RYT4rJT32JiXhKr7Sys9VqBbfAoiWh3r4RYYEiBnQCwW5Fk1QaB6AHXAX5nygspz",
  "key34": "3Jtn2Ryn1kGQVhq73K3QdLJtQzt7epYcbbi6mUDw4ruiZWWXiPf6MNxuRGHp3rM2htM4wB7A7CPRGbEJXLgNDHea",
  "key35": "572fRBLKr9iN4YtFiMH3DxPWTqHN1eD8exGyEVGyYgt7T9QShGZMeYUhuuirDVLj2YSkE6bn1m3wkP8g6xUjgS4Q",
  "key36": "4vU82DCnoi83CQpCkT8BTDrWPKLC821H9kUddsXwA7zQGS1tMdN9qGKg5JuuFWj8c8RPfoawkFTjwU5qEPNZD1HQ",
  "key37": "4gVdwJb1DHauS292trTUpGx3P9ZPSNfiNNZ596wZFAAjwkkYcTQpJpp3RevPprhL9kQkKuperAdGEMgiHRcTHaRW",
  "key38": "5QirTXPDe4xPDn6oJjfzomBkYGvQ8UD9CGdrhbeYrppYCN31BhKSvmE2ah5uhY7h4kP4KhZ6g6QtivpMq6U3DYmy",
  "key39": "3XmEkVrzvKmADFJPMCCeQoq4CX6EF35xCFfyFj1YX5zqQhcVEdwTssUmCaB6nDNq5tseCSNYbcvB6DYcrWkG1By6",
  "key40": "4XQBeYpZ2nKGaHpGcM1EHjGLy856g5rMTh5oFWyEbMTeQbatE4DVb7UaShqPgKBTGzs37gzNJu8L7EKTmpypoBvq",
  "key41": "348bk5Pk5H5iAm6bnG8yBtFyRY2ErfEgVspA8eQqG9L5o3Ccqm3c1cKJ1HHJ8BrTuQBSxz5ep9sjQYv9zePby9Jr",
  "key42": "3HqjdLHzJBPXZr5YUrhXKVHj4yE21iBUAMtV7QwPA1mCsj8zodDpfWppErKa49FMY1tM8xEyrBrPPkXRkrN15Vy2",
  "key43": "3KxiVK8armBeka2YN1bbbgHcsPMAn7qfDaqw2J6Vd3Tbq9bSHM2gbtXRZqeJDitwtukQWUxPMXNFYiQ6XV8ZFjPY",
  "key44": "WchQgCdGviFEUFaPLj8cMupB3EjJvGiV4zkwBE5LC3XjAxEpxkU6EfNNMVr2hCPfbUD5j1vH9kCp3ABj2xXPtGz",
  "key45": "5fXsdABcT9pK5acEENxraV3hC54mrvJ2w7yVaqpbcqAjaJ8fu8icfF9akuXQ8tKsEU9b2KPqAB5iwtTPNAhCrjQQ",
  "key46": "5HeuNP88atBPULEHojhCMH5VJbeqtVjtG2dFn1F8jCGGFz32sqQxqovYYGQ5aVXMSb7QA6wUvWdTpUxsJCESgaUM",
  "key47": "5rnzz1aMDixinc4jH9DKPb5JXvwR82Eyic65eX4KRsXqntJXtcM4iRWBtS6MLrcgsp9Q3xZ7a6UuQx5mnNcpbYER"
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
