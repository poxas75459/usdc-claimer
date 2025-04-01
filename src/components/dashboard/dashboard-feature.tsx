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
    "vxPyA79TxL8pfQKSsmcoBgZp5yydsBgAKTf3SijYd2ZFVXPy4nqvpoC1KBjfrLiQ8f3G59JmKTuJHF7p5HQDD17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vWp2jw9LSzko8tFavdXfmXy5kSdQExBdiUy8CxeFhhHkkbFpc9NugBL1d2YRPW8S2w8FdzTx6fK88pcUt5rJxhp",
  "key1": "24bX2tYWNXXi5fYjM4RtRxEJp7a9PHAQmccx5UnSopA9YkSUFmf78cZ5H9XnrJzSL3ypc2yvrXyZ9N6Sxor3rNZs",
  "key2": "2HMrqLCybfqzXfowinhKc6VSP8wqNeNGpDsYcAKoqzbXAtGkArCUfAndjQitiEe12NEi5fZyHoSEqmFBHhjecHW4",
  "key3": "3rKC3TbdcH7qDkxuKFsGK8vn2qjQ1R4N2E1dtmToGQnubNZBbcV7ttgir8hUbSKA7FQULCQjtSb4LqYNx8KcdUZf",
  "key4": "RBeC1PbG72sVpav5cySDGqRxzZSK1wpneyB5KhiDjhxpZmn38ELy4NoFnASDrTBuxfNPzzeBkP8U3EvYn6zCx6T",
  "key5": "43tMKwG4xe5DU8n12ZtM34QMdxzF3J4nTYrkSvq1bXXT8qnitZhQzaZvA4vSGrSbw45ESwjeZGBs9Mn978XzcDiZ",
  "key6": "3f92HQwJq1RU8hAbBYBELJjpRipt9FYrX5mHFBbjkjXqMLKYCVQCgGKuqnRyS7r2mp5J8X4WFceNtVLYAPztk4mi",
  "key7": "2tNWEdodg2uwTCz4KXbeWJuMecsax49Mh3nFixqD4ks1Vmu6qjLZBJFtZBfp5LsBHzoMpkMuorhDiz8V3eepv4DC",
  "key8": "4kLgb3F9Us5LFWfSuKSnbiayXGAiHhRCcftVQ5wX9FzGDdg5fXwwnTrFRUHcRSputT9jAUmQKeQ6AgpnvnttsMeW",
  "key9": "2AZdbzrs1pWD3Rbq8FWjVd1CtXhuaxtnbiLWQvFkHSEuX9wK78BPb3LGoXGeXZ9isQyXwtBHg2jVCnu1quW4BKG4",
  "key10": "3jGwLmKWSTvmZghKEjpCoV4fpUXNFoyVY35n2SRhwsvoapj7n6dMQD8zN4TqT6VUEoMGu32zTcxk8jQLTHdmot1H",
  "key11": "5xbmJsGuNPrDQwFb5RVq5T4WWA3uQrCuekGXVfBSS5y51iJFcoRZoxGbHuFkNaapLjxwND8SNEBy6naQZbLnUy5i",
  "key12": "3TDdPAXT51ZfeGMRKk9hzVftFYjgx3JSjfss7A61ECQvqixfwRDGskGgTeyJnTHwz3vbnWuXBVczxUzMnQLTNuS",
  "key13": "2Ej4gg6mVYs3ZSRfYUabhPZUA1btkD469aqf1V3sAsWKNjzyWGsg9BqdzCwJzhjUJg1UVau7Q7WEwdiVP921wtwR",
  "key14": "2iTaCUNEFnCTaFzngq4hYyDL76KNBZ6q7Nd6nas8ZS7ZX7PUJ56T4uhAxnQqum9Bsi1LeWYVWpGbeqHQycuRARbW",
  "key15": "3jGkdveFqTE3dniGjvtd5K2x9Cg3gAxDfXbrsHVzgdkbPewaAGuF1w9tNdJJudKiq2xrBMqyokW7kCaforYDmSJR",
  "key16": "DC8jwnYX7iWvLRwkPsxVLRCQNJLzs77jxr5HTZ5sQBvNq29XFHNoCsZGebsqSN8V6w6rFwjwVe3mF5ufrVAM7f7",
  "key17": "57QxzgtQoAfpRQtuqCFj4tpz7V3258f9ooaxSjfWtQQr6g6f1KkWSpKBZ3WA9bm1eYrX6ftpYhdybBdJtyxXKa5A",
  "key18": "5enW4KXjhdBywKo1wHWEASDwEvx8rvi29PFNYMmgpqrL5GNsKJiFxjE4Q9gE1fj81S9PjbmNk3TuEHso5QBWdpVM",
  "key19": "8pnyWcCjExXUXp4kWBPSnky4KpqpvgULWpkcuwqePbozTryBdxf1oLo9UbPebQpBnqSzLvq8H99ujiLGFgk7jde",
  "key20": "tDGAt1ZNvaX5g1MYh8wNPT23r8tE3uhL8oM2zbUg71Dgwzq5cSockEgNtoUBjzABdYtgnFueMZnEXJ1vSJAr5n8",
  "key21": "3Xn4b9wQ8fMYaZDTpn5mBvj3YKHa1GuRA69xW551DLrz4q6Y7VKat48J54YjJcEpmdaiWHbgvcxrPe1uCfJNveBy",
  "key22": "2AWbntsnZfS3J8fBXeH3tgzujZHVLim4vKf1Kh2YLaU5B8WeG8LMpCBFkzZEsdWcJeMVnfNnHBL9GjcwMedm9to3",
  "key23": "3t1GmRmF4aNL47Pv1MsiDjAap5Yam36J2vkct2ca4FZG4L91HvjqD4HdR8Q4SYX5g17iXDRYeUBbh57o3e75t1S8",
  "key24": "4oob8x5umZWyATMADxdSihdop34KBr6b5RUXWQgUjKzb342VwEWoX4ka6pxLHJHb37ABo1vQsNVAsoCgZQ8UjymZ",
  "key25": "4m6Y2FxCgayjEWDfgbC9Poq579JWSzDm9V8yzapsLA6kY56aQSyDC4L4cU4LxPxg6fnLTbzLuu5ELmG5KaDPQTfH",
  "key26": "25X9pJTBSH4pjdwHfpzmESMdEoAidyN2okyTXSkv4Mf8Kj3LcRqR2vPMqGoGw9PSs9m4rrm7yibLpLQG1jW73b1Z",
  "key27": "VHPEYCK5giM2EtZ97G3xMTzuJJg9BmJLxzN78hhpX7BbpwQnrEHBRMzQrtDZG8k6eesfzk8xGKC7MmmmxFrAPnG",
  "key28": "5pgpYcHoRGB9BSvP8rnfrJFNuw2PzHPqGkxFjMAXEUKhxEHFvE7GxWznpXS2vEa7qd2TgFShf8KfSVVGWFLg5Wx3"
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
