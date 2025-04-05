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
    "4gdoGjibYEhf3j5rP7yJdPs8eGBRgxfzQSUR7tPPwkhp8gVCkYQULJ91gLpoAiKsGCx2CvQ6q5zULdfgnf5TtT6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NwiJPZoCgMJiSQVg6eUVX2zBmCiJxriFqf2c5rNxECDHa2iM2oUHSu3osLfe8KUc4YNzCcoGteYWevgg4DKF9fo",
  "key1": "gw5iLLD6QtJMnLZJGTDyeUtboS2NbvNL8rVLDpk1a51abbrCGs7pkzqwG2cZzc7bcYiUNopgpb1zRmhhjzuHkz2",
  "key2": "5DzPKZYc3E9eQKKLr4yereE5MLga8ztFEdsssbBMQdcXuxJU7QG5kiDc47LC3SrpgqgsbSLkDo4gKqrLgQYHStQA",
  "key3": "37tc51Jt6hJa9eZpzNVBrhm7G9VwUVVjYcAmcB9HRUpwAPHQsyy597PUhLUMN2ajwWjXch4zE8JxpHmKvGzHdS3K",
  "key4": "56ZKtt3FRCsyMXV9Hb8iNdWguEU44nN8KFF7zxMoMsUPPTssCs5gRiLb5zQEmHpYdycmVrJwUikHtuQHvyqBSmLp",
  "key5": "qc8ZmBzA3VADxMs9XYDWZ7LEvavsLJmtr6bn7nRiDbMbfvcnoboNMRmQPRjpyFS8F5rnzhNmC9M4BRVjYcZrmPL",
  "key6": "4JE3R9DZgU5RCBo7Y7k7DvKNGucFDpjiB1RV88X6EzM78YoUabNk2RLLt2S7hodmwu5XqWVxUjADtiB6KCiNiTzj",
  "key7": "36Q2YeuWgh1dDDm9GR9rMJ3gZm2Lc2D3LGiTt6Trq2fWSJrmSYrA1yAJfst3cBmnH6zjCCb2xYYAnx1JqJSacFAs",
  "key8": "qbqfqF4rokhHAmzPHu3nK1igqXoWZ1sTn4ZeTMea76QS9QBKsFRusBd1PHB9Srg9DWUxYZMfbMLs4ZnhvStu5qq",
  "key9": "2ywMzSezqAZBuJB4PBthrfQK2fRzPfAs2KbRKXE6EttVBMW2rgj2mWanzu5m4Wzk8P2AGHmP7VtNzwXQ9bAAu79U",
  "key10": "59GaVWxa3Z5kqVZShurbmpKrkfvwWiUvVtRx1VsqufDo2sr78n6eF1mrVFvW7grgFKhgjHBC18ZBYTXyScAYtthw",
  "key11": "56oD4P4WyfEGfBAuw7EGnxCqHQiirwENx32QrnhfrzN2sdHDwZpuGnqfmi8qSVBKYchczMB4ES4tVdN1zkfRwMAT",
  "key12": "3Nxsz4oUDxXSptU6DeoLoXepipYMmCWShfuTbP47F99t7Fq9DueCdkzweF6KrvFH6nj9MdqzJ7vxtnHLFJTGcv4w",
  "key13": "zopMpT84NVTqCAtA7eXDQoQASqPY2eDoZEg8NajNSXfCmYMxN8AJjNrLaP2FQny7NdhqJy9CE6phQEAmKZXw5nt",
  "key14": "3Kdz9jrxu87TZyhFDq1PKmc3pMfGjfe9B4p8GsV4az1bgE6TR21Ud6cHzdK7RRo1MsLPpa1znBJjvAjFaLgV48QE",
  "key15": "34UJ3FE9Sop8derbkgfLkRD14nFzfjVXMrnQLyzyTGjsCjucW7Zf6cM95hR47PJLEXGjuZCpTFf1nRdL3uhhDgyF",
  "key16": "3MvuzgJyASPKYhTWQr6baLx5X9coSvDnfiLxMAk4g1pXkjpG7bWQVUHnuhqSpgPEkmLnm8Zu2y8Frppk31bEh27k",
  "key17": "2nHtypFa3VfBqcfTULWk69u64izbdfnX2YfR9CRhzkF8AieZdm7ERsMWehhYaLEechpJ36zbv1EFyEDCoXBEnr9y",
  "key18": "2qoF76hCFqNL3b62NR1fTWmNeNMVrnnpPzBc5JW5MqcVKA5ZR13RY1wdZj7UNYckLZohe1KVJGxzoLiDfNAZnjzE",
  "key19": "ueacAwd5kLVw23qZzoG4LUiFgin7Ufize36z1hiSwKQYzUALnS2juauCEywSgKZnZVXWJSvmVbRccJJmaLwSyrd",
  "key20": "4tfqD2pvaHqii5qoDH9SYPNz4LP1zkgZxvdmp2meGv3gt9qbCeBD8AydaF5sDtZj1dR8e2JtBbfgWozLhyn75fMT",
  "key21": "25Tdtgx2djhuCgtk5zbKSvzixU3NzEiV7JoL1z98xNUg5Vw5zZJ8Ztgq3kmcL5AvLjLSR4MwGEaD6YK2eSFJhiXH",
  "key22": "2LtXk7HNR1jQtZ8yoeBpS7pTEhicLjBvrvvNcU2yBCU2ve9poM73uTzVPbnCra2EWTTpbWhWdTA2dVCXGoqyhbKz",
  "key23": "5D1eUfoyVxSno7EdERxGLMrMqwy4RLDq5N9zxh3joMqjexCKyGaZggeL7qqQFSkJT9gStiqsf5sPTXZcHDMjcPci",
  "key24": "Ais412Yh6z6DazRTQqPRTDU6DSWizwD9enxStZ9NMQ4kdQg69MEwpZPs4xMtTcXziFHrHypA2RNCSFS7kdTYcYC",
  "key25": "4KosZJ3yHhyfP6ygxEyNExJpXP5JVd8Yfbxu5wVkNsdJMvLVhwo5XksNyPTBd8ssjY3HY5TcanGmCfNeyNrrL9s4",
  "key26": "2H3HeL9qYLPdP8hCTgD7k1BzitKu9aFb8CiAHUnVeSF9DhxmyfjLKjPNED7phqTDA6SsbjVcXzEaYQ4oHBQW2cuw",
  "key27": "2AcP7Thp4sSQdRRd1D7tL348aBcZGX7zzjfPZgqj5W9phBeCiuDrFP4m8B6sS17BXgxRESJshTH6RcjqJ6T1PUWW",
  "key28": "bk7a9QdQLAgGm5GQxfidHvqoadBuXEvXmgpR7df3r3gnqAtAQcXwGvSV7gTVogSgfLYY585BqVz5Q2iNHP87UxP",
  "key29": "rQMKLXEeQQJk2eeFux973qCCSNJ4qvtxCgxVF7umqGjWDhneRG737Rrhx2WZ8T8PQRpCBG9PmxJ7JNRtyNQQ3gq",
  "key30": "2xENH5Qdi2Ks2hkEAr4NXeFhpmS1EVBiZbKmgZroCiCCWLDAjqQp8HX7bdhsiZn36PasBnioFAfh9qLuuT3qijPE",
  "key31": "5MV7QAmy3HWJptfzm6Bcx4nY1LDHRZLBVfJJLZAXK299y2sfdVHyqQsj1ab1hay61GycT3t63rXxPAPMkNz8QXTa",
  "key32": "qbcE1c57QqiAxJhDn7Qrr2nXX6aF4UCWQJEpu1gfVVSFEYeCKL3gyvis5n9uCpjx4vEE7Bxd1aP8oPzwKAZGjjL"
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
