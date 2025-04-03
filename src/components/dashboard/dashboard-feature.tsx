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
    "6GYmauZ2Pgm8ffzxo34UZbffDFCERfG4Dv9K3krAyNueseLeitSBP3BegyjpZ95xBX6VTLtHqyP5owrvNRfnPJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ATJeEAsNhp1YPiDhBAkNaDKyUtmeeggrzRYDpF3kMdN9HXZhaDj5B79KEUjApu9Rm2F4Fu9Xp15AUfqDMFeY2eS",
  "key1": "3Wb35kk7poAiaFfyfEUG7LC5v6tSkBcTijPJkQAeMm4KWYX1Ry7p3ENVb27kBkjuk8koVa9pNeEKt41rLWtoE9fj",
  "key2": "bS4uYJethvaC8CjdDyD5AwkgjY4XBy6pt4sczj9ar95KeaWi8zPP1tpFxBXrC9rmpJC5wpnf8cLxifCDj3Pei5C",
  "key3": "3xW98bKwe9qmmTcpjTbbUHAfA7sKWB5HBQne5ptRaX9AhZFzEK3LeSTC6bcNoxtpBsTQdZhzjCHnCxTdMiisqUZF",
  "key4": "2Rc4CUE8SgUnd4Dcs1Puwwb6jyStHgNb9acLHmLHz2fYfw7yPhC5Qd5fDda9jVkhaSEVkbgN4zbpXmsSFX8nwiU1",
  "key5": "5GLNa22KsUheZUHJHLPf8T8uUGujDLJozYTzzFo5WMe1Q7eAuuM6mCVDXdKSvsRY2vc6nr2H4AqGcuVBsShLQq4U",
  "key6": "2MKdDruRbesxbXoCcAo2Hv2eUF9Qt2S9eGZvA4n5CHzNNfG2g2jQLkW4Vt63tyoQYsiooZ6L5fFtsjVUdsdcA5E8",
  "key7": "5WamkyLtpijM1SFHF92WUaXRbQcJwpV76VGE4jzD52cVq9U73C3CEEbRV5HEkMwywCHj7Q6YVWWTohj9XKCRS7Q3",
  "key8": "hdN3qFqa5GyxLjgfqSSmCuBFjF9o1p62tyzgikGCdrwLrn1HXuaVyqWaayHnRN1YBfGZwn79AWM8cHdNwp1For7",
  "key9": "5MRWY2x6xZTX46PW7HrgrWZysiFSRQwR7FDYUHFPKyjcoTC8VsQZTbdk4LYvjr8ronftGTiQruuB9uAFW6KupSsc",
  "key10": "4BrevTLtzzqE43FyTmaYtjjrGcc91nCCEPtmpVM43Uss8sgTQz2XyDPzx4i5eCkxmztt6JC3kaPiDuUNgKL1AwbN",
  "key11": "XTEu6imAsU1mHsuSxSxY7razw11WL1m3Qkv2aL39jHnWzskpoVCpsQnoXn7k2c8LS63YygEUyPcQA5eestSuKv7",
  "key12": "55jFdiHgkqvFkvVJhiRGC3wCtveMCrRLHZmgek1pDwwPKxTpdUPN2LkXQPAG5UtNbktfZgdNtwJkbJBDFT2gdbaC",
  "key13": "4PM7KbDQgPUi7fYZex9nfhVx4HtLwawj6DZXtdu22G8dXAofrAvtBqu1dqanPNKw5WkzW1LvxSpueEeHhPSWNjXu",
  "key14": "2AVPqb5MeMuy1fMYX1bcJ9SZwuZD5ZBEgeKqYWBmHhuwCvy4mSDVBjjkjgKdGZCHzrwFphSbRAAhH6YvLJ2pSnWY",
  "key15": "3wnjLSWpJS2JxiM8buiUVwcCGbdaMdmSA5qsVbbvUT2vTkhyXVNJ5mAxH11kTQLTvTdk6i98QsgciJ72kYo8KN1b",
  "key16": "47srLKVUYxX5vZJ1Vdtp2UZV2KK71MoyHMt8bxaiQmG9Y4WmKfJ3oz1zyRyUjbG33W8RbB15zDLzNnQRSSyFcoWa",
  "key17": "5NS521QPqLWyDrvFKRyGtjbSyZsRVdTBoWzU4gC4EkNqVnfq7TAERTTAxGnjVusZNHHGAFQMmC7GwyigNa1zdJcr",
  "key18": "2qujFFkyzhVXF18icYRN2p7KSWD6aM4MjNbFkuPpPc25dq298h6Z2usncNXr8L1zXdf6zLmLiXmvVjoD6cq7vcDh",
  "key19": "4HvLZ3YDYj2Z5tKWhmZRDb8qrESNRqvU9NZezBmTmcMgcbWoDnoyRopEVG8JAxfxW43ZFeRrhisFTKjZXrseaPh",
  "key20": "41dKRtvXNJa8Q8HAQofJzGd3uLpPG33kfQDzMQjTnfFGHUHLEqkTJvZmM7Fj74eJ9kkFqEHQpibagsaA7aVkHyHQ",
  "key21": "5cejR8SN86Dk975jUWV7gv3yFAV3RHGG8ffPimDjCMKX2NsoRTy772FBQBVrpxPCuGzSKPQtC9RchVvuAcbumiU5",
  "key22": "2LAiEP6PuFu7idSBNTbj4BshFQUa2b4gdbSPCPrrtGRbhUCUSxAuJs8feBDdKGVR8wskjhFUSz9LZvBNjq7YSLK",
  "key23": "4CBKyFLnCmvsvLkhdRzNU7T48URfVmBcGWsSmceQCAEokvaCwbhEmg5hzrqT8G9vkh51TALTSsM9gfteooBM8c8r",
  "key24": "66DpLj9SVp4udChKj89DymKHuXUj3oJSFFtbUQ2YJxi5uXUJwtLyaji6Ac8ndSbaoApTuxzGkdKZDxhv7rhemwBv",
  "key25": "48wuM7E6xqi4ZYPKnyRbXRybUVUUzeqPQCm7SWKU8Vdcn8xgKiEpGNiQ7mrYPb2EfdE1RanCx4dac78Aomj3v3US",
  "key26": "2h9A5hUBvdjS4YZZxDXeNEAsEBKLTVBGggdFM3SaA2R8XktGGo1hJvGgnSThkLGSVnD9m4KF3abZFi3pmtaWz83F",
  "key27": "2Czzo6Dt4zMFEoePNUAFAvaBpz63veidT7areCPPrxmkmSu6SeSHTgg747KtLvNGTDgYRzE6D4PJ9zTdTxmXZHsU",
  "key28": "3UoY6CAjZ1YUBq2dTFuGqQioo6hF32BwC661pvXeNJ1guLaz7zjpGhR8Yxpx8tGRpxDQWQmTKdT2inFvM273R3pU",
  "key29": "4aia9TpFKpQJAGk4tuUuTa8cM1EGC1Vo6yKwuVMEf27nQmWBSq9pfn49ijcHSFbQy9BK9fM6DZTHpU2QLTgFk2KZ",
  "key30": "4WRAogu5mZCnNgd2kET36c2M98nPzuqJjAJBiM5EyVGonUQQKVQAMMerhGuAWvKApXi5VDeoTZXt3o6C2Nj33Goy",
  "key31": "2isKafT2neCGZ9LXFsnnXHAThXo4VumCA75VnurwpTNah3i7L5tXH85jMFHspMogTQPfewmHudJ5gwnNXPuFUMbk",
  "key32": "v3TtL2FY1q1KGNa5hqwAGxp1wgouS8RPPQZgT6w97g2MFWPxBi3Zcc6NTyfUfXbWyFjj3P4aMiqWRggQ9DY71bp",
  "key33": "3A3fLprNmNLUGQBj9EmyqejcKVnN8vJrEFshSjmQuYj5RRsvVHrXhQFXB6xipEYoYpVdoxNK1W3MLXFwZunFgbsy",
  "key34": "2swFztsLoUEZ4WBUiYvJwqPEBF3qHCwtZFzUb6EvDsY6tPXZCV7SqkyZ5XhqiNQjtoY46Dds9G2t1WdeTqHn6Bx5"
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
