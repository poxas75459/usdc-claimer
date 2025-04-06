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
    "2SvcwUjY4i42C1kyboSDJZpA1F4HSnbkUQ1NY5B3h4YHJfBmzH4wec8Xprd8Ehce8xs2TYGeCF2h5EpdpDhD2DAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CnLD7Eyvi4birfH3mfMzi6hrJkMT6kPeYAajyXqqvWfEQbY8HNN2ejLvkds3Abmw2CmjCWii8SsHGpEd7Wmox1n",
  "key1": "3ZiaBg5VRU66meL5HhDy4LWmz6DMh1phQt1KgTEZh4p2php8mqbaZPeGXcXbHoJbATT4NV9RfrgJzVUpstq581wu",
  "key2": "4ZZWu4xFdA2gbS1RykXu5f6T365SWntzs1hJzKup2H8jK4T7zWkGVH3F4BxWdmtr5ZV6cMTuhdeHZWQzjeX7V1bJ",
  "key3": "2xmzvE4igjetSBWrEWekKtwoTMFFjMHjii8YdZnqRtfK7tvhUsF6sFnMztzw2nHQVo5hZUrCuKa9h4AacjbD2ZFs",
  "key4": "5H4csYhGDhX25MQ6vmS5kMLWQBAu6gp1AR5TuCzVkTUnqQfq6Z8awrRCKbCpYiFnhZWwX3wbe7Yu2Nn5J4ci3KeP",
  "key5": "LFRwHBXfd72KZS4UVLhaxurctzDdnvbXmFvSUfRKAWVVrcmCBHzbVzKJ3cSLy1G6hmJAk8D4E9wXsd349nMeNKL",
  "key6": "EJ71NwHKWsTYxrpnKA3SF7TpqexWwc6ZyHQFQR6eoQHduZ7pFB7pMqq6LmR3DhCzNrAJhpvbEquhhkYUPpzpBiv",
  "key7": "5rGkxY6Kx7Lst3FT3BXDEentahjx9WvHKRu2hVN6qfccpb2DfHEra6rWcWJrXe7stw7vXLJiHAsaDFHBc1gr2Ftt",
  "key8": "NhTZqx4HjRiEAuZJcWWo6LBndpnp1nQaodV8LDrMAocjknYPGdoRbd1CSHoBgZDYrpwEbN3ikmtFhsVNQHteN6T",
  "key9": "4K3QBZh5YHgC7PQDrrFssgoQLobNK1PeLyo1u8jDMDDVRXbEMNvfdYEvVX3NBj7PyAPGovbeBH2uBZgehnmVzHYq",
  "key10": "4wHnRq7X8uZTK2k4ckDGvpDP2MvgAN3sAjUfGaH1KscQ6vgXfnmfcxxbrsMyJMdAsVAHTXjLAEHP3Rh4uVDUyS37",
  "key11": "qt9iQ81xEzGo5CehjFfVEvVbeNhz2FouAH53n7faMD6jTDYtTEChshG2HKzZ8DRGE4rF7eVE59fvGLNkYzx432S",
  "key12": "5vCA5wF7qTBQENrbmAcP2aoGdVwCMUnAwjicdWGeYXwxXTbMDjRBZbfEf3iaSoa4cSqUBHDA2pLwtNq7tf2y6tQH",
  "key13": "5MgbjAF8JDydzGTQdb1nsX6F657nx9eKehUu29oLoE8N7YGF7ooeJZb3oGcHetjcJCzoqWBUoacNShUvGUP5B5Kg",
  "key14": "2jEcU2apCLyVSXmGobQzTuWKqfYW2DFvXao8GN3wN6JpcFsR2QgpHfs1XbUNmi1F8VExg9wtg7yCfSy5ye4FCy5M",
  "key15": "2YqLozAwaik1Fw87o5s8ULMK9YW5PR4HcD2Ut2Snf8UgLR3MwhTrBrZkYwuBDEBSHnftkBJenLtgLwZuTgVP28Ak",
  "key16": "5fiLnW769KKh9FPi2PuUksMacNNxnyiYsHfK6e4WKgP5EK7ErQ32ZDXtKRcgicP2wC5FYNSopxm9kW7ddw1tfVwV",
  "key17": "4u4w3YwXKVHgVCXfHK4ZVKsV5Eh9hfDi1zgi5Npt8Da5nwPjaVbp9mrRXmjgxNiWG16hkRSX4prU2w6Hs5dd2fZa",
  "key18": "2NDULVt1CcyeaZpfjqZKowtJB4r57Jywf1cXZCGaRKNsNzuR3jGR2nB3wvKrDSm5MGFYuZwvtNK6m3fBFf46fjpu",
  "key19": "4N6daSW9DC6mWFLXQLweKu395r4giiLQUgaicdBpsBT4jiGv1mLf22UzEEcbE1f4nY75EXjk42DRNHheepfguTfA",
  "key20": "38EHawXuJqCmSf6ekCb7BdLU1YosRWoAqDKZSR3xgYcR994eZPcQdTSGF6rgVb9FdYWxSbsYSbMtnvosdAiAg7m9",
  "key21": "52EQwoVmSKYxzCx6tQ4xnwy1XsBUswYr3BVfksnG33xMfKyCZherJ86FBvZYqNdoSEptyBAe1PtasBHvR73HJ9F4",
  "key22": "4DGpceSQxidPhovPBcCbVf5SXZ1yvdpryhJNrRQV3Ds6M8RDZhQv95izFvA3NZHMEjJVDgxpgRpWjVjhGyykFMdF",
  "key23": "3LEzNRzJfhuvadvbcSE2T6UgYkyasegVpCymG1zvKuABBRU7E7QqutRkodAY96iwnCgeCSME3WHMzecgxc1m8Kmn",
  "key24": "569VJL64E2ZVQbrhXsmnKdHgisM7mUCai68FEjcLCAYjGvBMULsMbWP2DHmcJkQnnwbSNjCSWBPpZgibxXhhvu5h"
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
