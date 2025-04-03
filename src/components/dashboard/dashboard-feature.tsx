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
    "5Yi2WYRZnhBzPtGwfhnfZZBKmWzPLjdERB4iXyimyGzRQDpVdBGqjMajdiramtN2UckgTaNDxAMBubipa6ASGUu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NLGqoAfx1GRgXYoknc9Au15aJBK2TmQN6yAP6h8NaTk6NWp6SH84RyDSuUs1sxrdFA8HZGUU9k1jsQSrBxh39RB",
  "key1": "8crWL4GFovqZBgHj12EcwWjnzBtbXBbD1w8xsQt1J4doYfcF4gC5xhSpUjaRjU6c5zRW9q4rvFvNtUqFF5Tyj5N",
  "key2": "2brn37uiUjAMbKkynqddcyMtMoQpzXJ4BmmS45EdYXWptoNHvfkbLQgZUGKv6cn6SmX3baMUT69w9MVCs3mC993e",
  "key3": "5gzRZeHhsw415z174jPQNq4dpeCRm1ZnPhKFWAFpMtJRA8syqByby4SUvaLaBRVwUZaUsoB6CQEnENyGiF4cjXpi",
  "key4": "2yEy7Crqn1hbcFEhJWs88j8cd6rE5FNbbMMnFYQ53x33R9k2qwxtMbR8PqYqx7LoEZDc9biapnQXYTehuLFeqs2N",
  "key5": "3Vi4TfUrWiyB3QDZ8JZ9ct7QMvasKMRh4mzunrB6udTgtdXExxPAwZjeAogMxvCgTgn6vQCkW7huJFDcQo4botkb",
  "key6": "66WWYVWFdY4M6PxmJqJAPQ24sGv6paf8PgF2QgysDmLWFJzHGt4Vzkposy8dvTgRBBHKDmw3dXNH7AYd5AFnxMS9",
  "key7": "4byzArDFAoEseBpngYUcjVtpAKMHqmNGNK29GGQTiKvFZPLpujFWsFZmR6eeX54Gt8qxLdawZ7YbGzp84AT6rycE",
  "key8": "2z4kRBgzbotzFgWkZ77vyvZHDHRr8YQP5xHvgiGAyHuB6CcCLexb5RXdzVxJ2R6jP13t7ZAQMX46KY8azdjysCso",
  "key9": "4ZhCBeiYb8Euhh6xSbbvD3K3zk25XGk45BJNaqNgMDeMS6wDLKAVhMqqA18kS7oErGHfsS3Y1bbSUWj9disaULuJ",
  "key10": "39FQcXR4DzFkXeqhFaAuHyPwuGxTjadEQx1GbK8z9LfLPEaiVViFuTwhSsatfhZiHQ5skGh7GgZL6ZWoFt1Zqxzr",
  "key11": "2n84NkKik6LnpdBK6tm1XXEHG1CWsoaNoFirgxzGFobJmjtuAvvgBo1aFiz2owDfYu47x23fZ14NApvGgCtKVqHR",
  "key12": "4vmZkay4oon5cTtAkyHLuEuSeLLwr52ufznar384aWxPBhezt95nUU2J7E4LrTTTGmeWGZRVAbh2sAYVqSCJJLch",
  "key13": "53GFyh2UMVM6pHw9a4xkZPXP7C8k4NJ65CbCcfznJh6c3qwXFHgzDSi3xr1QwarJCtETmKuN7wjFYWb2Zmrz5Gt",
  "key14": "56o8Wkqk4fiban4S9AABdZAy4gGUZYGRsFkxs3k6NmXEB31k2SW6TFVCat9dPgpW2CydcLPEp4pK3qgNHCztEWZy",
  "key15": "2w8eB8ACsKinAcKzbP1tyvFUoLEWk4ogbJjhVRLPAbjhVU6h3Jai4QisyXod8DxLdLqSv7yZ2owZLVCa9igvRUob",
  "key16": "5RrfUZAnCx4YBCFAf14Pd1vux1EkAf34PwcQaWtZ8cthnXvCzQLhWA3QzfYkNyqEwijLEgmSKsutm4KxPTBisiey",
  "key17": "5JZoPBmrATN3trNBpaRXS4AGvmfcpSnFuqDkPxWqT3TqZjtQZ2ekoWykx3gqp9n8jN8EWf7ECB5eBNPDrY1EU5Hn",
  "key18": "5DcRZBLcFNgrCDQhJ7sPmzQ1DSwoH2MNoxzh3CduCeDEo5KAZFwetUW8o4XeUFySMhHDUKeMbTpj1oAXQhJh1VKG",
  "key19": "3DYfU9VAu2k9atSVUouXh8KUcAsRAhaV4QsA96pRYhKp5xJrAaTuCjm1bMcWw3837XNAUD4tdbyLanTm58WcjeGr",
  "key20": "5TFHbXrF6dzUGN6YPwhEeFdbdNiuNPvLJyL21eYUyPsHPCQMfT6eUUkGsGdyp4BLGoabNcWcVpFePBn9oMnUFZzw",
  "key21": "4X6dc3kaorR2MBF6ZCFVt9nabHoZYwmURVDDhceMD1RmTDDxyoy8KFrAZaH4WDRRe1MM44GmoSFBthLsWyfQFkyu",
  "key22": "4Q6inHAQb2SsLymrmtM22QB9qsNeTGsprZ81Ygo5znRSjTedAzBhFyFSPPHVecDNj4wA3WCYiCk5Bnaf4v1sMfT",
  "key23": "2Y8VupBnMqNtMrkBmcFN5NAPu6md3hscXvdkLZongdeGFWtYF22uz8yC1b5w6H4oTr9CYa6p3EvEJUwkfxR7KTa2",
  "key24": "3TbowNsRQooRfqmM1GdNuFck1ZTtnWEx49MB7aA7os5YkqB51tXSym6cJ5hHZyPS8VyV3JgHAZ8Rin3fBsfXcoYq",
  "key25": "2iJn2v5ss5KaLqGjEJCjtWtrXscdaJc4KpBTQS8dkVyBai5jgLoHdbfgc5kY6mHhYQEKqyKyGHktdVhDgpgRKyTi",
  "key26": "3noYzErySnqJ7xM986zffZZNeZw5WbEZkXwndf4HuByLUdE1543k2wgwah4UjMbJVwN3zF622LoHj23UnuHYHFpD",
  "key27": "2WMieBymX6fRqP8J5UeZod8RMKHRouTgEi6MtXxWW8divyEedPgZEK3RFULTQpypeRcZYvzo4oofCgEEFaYTR9fm",
  "key28": "YnHMApuW4KMxk7bi6HCKpzj6ncxw1oV98wMBGbDboxDpAqfL52X1FgwGvwXZQiyKAw4YwQFcWA6PUrHMedxGXiL",
  "key29": "5yhRPqm8GZMMTauvfoyqaFrEzgWuZbkYeEwwepTrKjFvTHQKPd3ao1nSwh5AwX4ytJgRVwZpazKADP5PsPqTWfA4",
  "key30": "4cq7hshGrnmQZKqnHQxUdMbBsvSYcQjveB5cfnx2miiTCeEqoiSR5TJEy8RK8LBhWv2UjEyyeWXNYjyBu6BNFHf3",
  "key31": "2dEtMMaPf8US5u7JYcHs2vPUVtawkhAssFgvL52V6FMvaMjvTfE4xRdxEGhwu7huy1o396zy1C3niH1BDApoxYxq",
  "key32": "57U8Q8ufmh85DctzSaa7VdV1Da4oy5SkuPwS65NCF6WeofkwwYufEHSGy93yY5Z3UyTzTSNCYAtmNhAbqh4TPBWU",
  "key33": "3eUXwKjNegWtVvqtcd9AZY2wuaB7KgoNaucvviFXwy7BiZeqAX4Jm53rBo9iMNy8ahceR1XFAByqJdkee61yHWkb",
  "key34": "3B35D8ugFwddhKEWE3nsHAYTWX3o4FubXpo5AZcDyGRt691SgVY1qXChRTcweKd1mntjWgCpggSUq6GnqiSWdBvq",
  "key35": "2WZu4dRV4yAJP4AZmGzpN3GtoZoa2qChKvKnhQXrt5VyzfvGe2vMW6pMXQX4pgQuZAmPrz4rTQbR59a4o5u6QsK5",
  "key36": "598b31osgcUXHuWK4Xdksa8FyHEpzuxphWH32S7EacnCbxGGCKp3kqvmhVnrxSBw9MrZ1t1zCiN9C17ijHBcr1TN"
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
