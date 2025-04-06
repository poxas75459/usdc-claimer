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
    "27ecYhFWmXrVDdKRTQFgRvDg6tp4Hf8JE3zUsVCxTmVFcKYVJL5er3XzknEgc3dNUXu77ogAbcpTB61H6SWwZL1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vCHdwHxHuTbCUi6Xw4GPv9hNFFrHNqLvCfnNZb8ffTXXxVrBHuLX41nHyt2hHhzKQn5FGVL7fEAb8NmDdMrq7EF",
  "key1": "38rFXSGzgw9Vps9iySDji1ja2Wxy6mVc9rozVPrDp9sMwk2HbiRKhHKLxWEnaT3GaGE3eqSNHAKdSuyCqVt8XQwn",
  "key2": "x63bZwKNCV7EY8zby3y5qUZCUGToKUBXXZAp9mvTkkc2wZvoR8iMNkLw5Un7sZpTvReUJJk8NjRGkzcaumeFo5k",
  "key3": "cbZ8CKU9BbhkR4jGqidjChjSSfXiqNYh84xKJBcncWcoHX53jWxoaKvWXMMk5CuGVq4khbRPzJD1bSTC6vsYCgr",
  "key4": "64b8eLy7B5u4WqPgkY5VQ1TGC2wpKmBEZgduRq9ZWBPisvvvaS35eHtumzrsNo5erAEWUzFSJ8S9efWdHNAPD5w",
  "key5": "4hNKsYSFpDbqYBcvTo1W1UrzPVtFrcbMFghze7QciLPHH5AnrpgEq3tD4oMRNLiQabCZCWLNwtwTLrsWdG4JycEN",
  "key6": "xkUtrZyeaL7oiFoeiNhP7Kpcanktp54WP8WNWAzYGbXrBYRVtG9VB64XfiydLDUaBdxc4Vu4opekYuW2XMhxq3m",
  "key7": "5cuQncPW7wj6ZxQM1joabKaPQj8P4d8jmmcUoEghaA1RHVUHE3sgUyJzfihrrVp1ERharh5rZdSnRiaJVxzAQvKQ",
  "key8": "4miqfSCPUZfz6j1ybfvqo6PztgBMJDwM2UffHctTQf2NV9ms2hFuATD4pTLeMZUatrdvtrwtyeCzbun2DzHnG58C",
  "key9": "4DmeXfzqAWoPhHUck4EQN2s4Sy4XtdLb6bmebMiEvbaZsNEBZGFmwwBLZ8U5zBMLpkiEKBVuUQWgc2FVewZtvVR9",
  "key10": "FEkFp1hSLk96hDWV4x4YFLMo4cdv9CuDuFn5yXU894CjvvJtEBhvNGHpwvvaXSLMitcdCCfr9DiAuUGpSydFVha",
  "key11": "7VnRmTnFuQStP3f3JEEL9c5Lg1dBVPCrZiTYV5mcvv2dRPvrruhTZHucGTJ5PyGbZeXFaLzCdnxa9juTGxkhm2a",
  "key12": "4YqTQ7ny9qC3F6dAXZh9iuzeB9qPwBeHNWoB9vPp6dbyj2LPEnrc3ZbK8gUKYfchyV3sN6nrSf861dxLxcurwL62",
  "key13": "2VbEiThX6TfB6ERqKz5D2kGrt9TL6Crytkcq9raV1hmre2X1thZ4AHb8X47p7L7csHG3QZ3tB9CfrSZvgDsmku2c",
  "key14": "Tqvv9LgBKonc9ThYcX2rdMmRDwGgyvjs5uex7Gu2x9YEKnVepNJfAAX2xgQjmrgskMLEic4frz1KFNLBaZQG4Cy",
  "key15": "1BTkbtqV6N4urbsTWrcg2mMhXiEXp6Px5iA91RT89vGsfxjiGnhN62u8CfbRz38NVNWf2azAH2dRf4ug5BP1Gq1",
  "key16": "3nuqJSoEH4937qdLf2DK7uxMmmYbskUQPNQhCYTe7GLrww37YDuHHtusRrHGNtTFUKr7U5nM2RYNCKxiq9QQDWMv",
  "key17": "2cBRG27Pb3e5D5oYsNpaD2QiuMGuiKeUXviX3qhqZdkKSLg7U78koEzg9J1LdAfdbchsAuMQLvQP63eS6NgD9zYf",
  "key18": "49vacvCYMfGqiXPXTU1VqanJKEuPwiJxsEBT12HPjae77xL6XjuvCmza8RhJPTn3jU2ex1x41FMAJPEDawDt3PdQ",
  "key19": "3bHqdkJNNtKSSUvzqeMXMQZMoEHf5MytTCtxWbv7mSoNiCRanbfixxf1rzRbvHwi4JYps94M9XdnZ1gddHrtodya",
  "key20": "4t3PVEdsySev4JWohBeGceBNKVWqw2ymikQ8KAR9i6XM9YPQmiyHw7WUT5hZjsbq9xfe8SyBVqgWmHYiRKv4krbE",
  "key21": "nDh9EDyrMcUM27ihuRFaFVqCwVGvmcogKx89KPCmyWYSqybakp2pSuGhb3J71ZzTHzbiRqXTXr2SYbRHp1vhsgT",
  "key22": "5jygkwNSXrvbjDbcXcUGe3rkSxhtovnfuJ3MKrPC4SgfHU9zBGeUB1kb11iHaZcQMVwbMCQzD32KxATbxRn8S3Pp",
  "key23": "5cBn2uiipLyDA4GEgg6n2uZDYD3Ym8i4Cwk4aiDatG23yqS4bYD3WSg7doDizF3zkJWFoPBmW1yu6uDC13jVqiAX",
  "key24": "4GFfVfZeDtHP1z461DhXWoXYi178jwtkTPFCtwyaBtR9tUXHqifCjXkBEUVgiqPAkghYBnrVZNk6j9AqzD7Xw176",
  "key25": "3HRTnW4qKk4r3eLQY25dsrKi1i8TudGtmJEUbHnkRDaoNdCsJfukLXzNxrMjjyqysrfMtKMQQzfNUNeW523LhWhN",
  "key26": "616s3zpSVDQUA8w4ebD1hTdSV1Ep7RmGLCLPpcstYwiKfdc35s6Jf2Vx69pp1MyDrqZ34Eb8hNqS6ZTV5QSWV3t3",
  "key27": "39iFHrjvPKiyZhmHwQB7YJXmLpvyJetVxmLamsfvFwuHcAwftvHQi6k7BNHgMJpFwyBrPZXaUjGptcvvY45StcZd",
  "key28": "5GYahpfF4aHKkj9qs3Yhr1wEXWa56EHdgbbYBV2CFv15cyPVToiHtnd7fsH9UG3StdUhGHaYo4X8cLZjWJj1vZRd",
  "key29": "C1tFj1HrQ1R9u9AwVyvZJuFwLwtYTxsLpjNuzxWmNQA5zYrhRQKHhSSfPLYbrsmWLHdTF1LR1qMTid4Kz2tUNMt"
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
