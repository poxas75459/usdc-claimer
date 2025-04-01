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
    "3nvN4kqEd7xGWH5JUjfisqHT1RMPc9r8GGGxR3FTmdZYJgNGhaBKSUd6oVmHYsKeNdKcoWhqhdw2vd14AYdi2SSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3irv7dH7fCqAoiRQ4bN3zFxRhGk428XnZ4nGfKAuF93fYA3Na2R94QtpEWHPX2gw2S5ZaVPSx5AEsmkYHpsnQqev",
  "key1": "2Borib7sHnH2QQiWhwqrEDYfwooYWgs4xf9mRfAGxaXAQuoi1AfxeepFHHy6ZeTJ7j2VYqkHqTqR36mrtBm3THRS",
  "key2": "2bY4dUjbWEWehMxFp6a1ae7eD6LpxJ7ZntsmKNGnzZBth9J2xwq4G6xu5UKx8YcYreA5yDarT74djkkZy6NSRuxb",
  "key3": "4E2PE47z1WsfvVPHsqQSubJKFq4RSATJLS76ZAsnnGj84NavBMzrfoZL2mqPAqwJhR67hb4wY8LmNrQGrRdmo4mQ",
  "key4": "26b3SZ5E4pKpRPVZXMP4szCpr2TP91S2G9D9k1WkDAEMuc8fNLh83zDFwwQdAPi5aPogfPiG9JLZckhYu965Jujg",
  "key5": "5PL3CdZvNNMqtd2zMeJC9ZSgNcFharuSU72rRfB6Bn5bBLCdcxxLebLYM2KVq934jPtACY3GxN7ZVyCo3nASaWrb",
  "key6": "4xnQLAHGA1z2NNbFqjdaagDTgT9t8BrQnsdiFTSpYpMA889bugZAfua9SxTUMZW7WxgpZdjG8vUfJ7BedrBJDmdA",
  "key7": "5sCxrARc8wDsD7j6HkwATHmCTEmmSMioWLRvL4M2moGXbEALFcefwJNE5W16egLChjjoVxoJ4uL7yYkKyeA8SneZ",
  "key8": "79jTbhoCtpVpLSdpEPQiNiayebvLyfKNeXz4jXvkKikndgeeud7wM4jY5sNyfQFyRXzW6D8rGoWzno996eXEZdu",
  "key9": "3URLhd7h2EVs2pXDHb6FBcv82qYY4ZAJM9AKktH3ej3jma91C72FmyiPt3KMkBq2y6fGrRMZCNZUkmUHNUYFjorW",
  "key10": "4rfZPfvMrABejmeiKP7XFrH6aN6V99CYBKd41eBUR368CAUhUoG77KnuPT8J6K7iPDKw9THSpbEaamn1YQKv5Gac",
  "key11": "3s6cAriVgirMQxrivvKivKkVC8B62KoPBpqLjwrFisqHPzyn5kQVscwtpuDK8ePo5x5FgJqJoukfrfxrHWtAvH8s",
  "key12": "e6Ju7UAnF8hVm64Q2eoxsnKpp9M9KN1qzYiUKSJVyX1noxLwSkUedV3EE8Wac49vqtTd6qduQDhuc3uESu3uneE",
  "key13": "2gVe5pcqVuocL53MLmwYPuZoRdhA71NicCLDRHY12eCfrb26jQLx4UB4HafPwe9nLyQ9FYiDbgiVTrPzyim5CEyd",
  "key14": "3Vy6ck84jJqVtPksepzYYjH9NA2YhBAZB2PS8Muuqdf5d7GmmKseYSW98EEni6WZF6zb7n6KGuACSq7tQCY1rFPc",
  "key15": "2wxSf6KtzubygPb1GEVxJXns1hWeJspkMjf6mbVycqVyyF33ceDtrZWWP87a4URPjwLi6wMbkEenCwimZkzzdbVf",
  "key16": "2rk4a4tX6rwWvJu3FJ68LB9xBwAm7XDGphjQcc7EF1dHyn857oaxKQVohRwrL5tG2TZPzPTq5ijZjorcWerSi3DP",
  "key17": "3De7qJq2pMywyx1gMMp2ZeRBdf6WkGxc3HoyYtFq78asvXUodKmJrn7Cwq9QSYnc4VAoBMgLeZ2dAoFM7kbRapd",
  "key18": "zq5vGyEkKL1wREpU39SQaeaUrMTSRQSsWmAGHMkYMV5VVLKJiy5G5XmMTwJyK5nUAcwyfHJjAzZ3coHz8cAoX6M",
  "key19": "3WYpdazUtEg97ZkgjKGTi2wjBYMTdDx3F55hArhm9hvBvJXJcXVBgpCxzg9y8qbTQwJ6kSP2BvwReAd45MtknSfF",
  "key20": "3arCKF8gzn2nJ8MQKmkygx4Um3E93JaWqNhV9VxfazLFwR465rqTDob8AqSEq91DzJcQizvGPTF7ByUCuGAJQe5L",
  "key21": "4G8SJgCwm8fd5RHn8F5t6E26LV9Ci74MPT9zN6UaXmfbqZsZTqztJVDGZTdC5gtPjY2mSAq44XwkDUDadB88t4et",
  "key22": "3bJ8gtKTbiJYdPVn8TGXe23wqrZokGxtqSzVkynBRzSFXgQkYpeLFDkQk3Z4YGCcLzKeYkPiRGwpwwcJJ1xEWDnv",
  "key23": "2UV5D39yKHoNTfrAJ372KftNa5ZYbn5cH3J7oyMoaftbsEmgMvkZY8PKX4kp5k7H6c3EkrZst1oeuvvQGoDpJcep",
  "key24": "2YAKUwbb7wMTxNxinxK29cQcHvb6h7zcVRTUpfTPPofxfRsSGZpNbXjkG4e3x8Bvf5FYbuqhNLEBtQc7nJaNsDYA",
  "key25": "5zkVbLAckfUGS47HfVyWiMq2bxbnnfTjcDwkLB13xDJXEK8CwewQ1qcW2G7ivWBqgc6d8MA4PZ3mNFHuzBLHWQS7",
  "key26": "446LSPSzkVz8nnW5L11cwHYLqrMUcQKs2F7jkPXagyG4DLxVqLGyYhWPENhDSnXuYgLSFqzrv5BX2QDNG9KTaYT8",
  "key27": "5G51y18nvJYNJVi22BLNByWY4AipsQyABSYySAxrmwhhC4NX2iNG1Mi5Zaa41Xgq3t7pcCsCNfvUNQ6dNMxuW4Vm",
  "key28": "22EmLrkVSUFMNmeTGfyGwxbHf919qxmTywipbakS9dRZFszcj5feUYGi3ssv5n875a5SAUvE35TLv4jYXDo873Ny",
  "key29": "3dcVunke2DFbVSX59zzDegmQMQJR5WjEV74qtSdvNreTFNbSGxazQFdc3PBRhFR7ymzAV1tE6WrKkKXNwTSKNvkH",
  "key30": "52PS3XtVUPVQqYsVBhisc3inSidYBECCUNK9miNKYGG2hU6z8B1b2K8BFXrTjMqRJ5x1QB3vDJmtiNbTbMg1RjyK",
  "key31": "hHZbRVxzYUtRE9hogW76d4QvuKP5u9eGwPKAVXZj6yQVUbTN6meRMEuCwoZJrwiDiokE9vEPEYh4U1eEwvwqip9",
  "key32": "2GnmiSzYczYFw1FmXM9YWvuMNBGnjsWKkeC1GTwisgBPnQsR9iNDjLdSA3DtivhxP1cZhxsbcdCrt1YGwamAwaEx",
  "key33": "4GDaqoMtH1BJ3HZL7Bcd9fBWXi5xgsJDU2pMcpc4csQ753kVn286KnfZtYw9Y77QCenYYmwwkjMdaUTvAYbxE6Fj",
  "key34": "62kmyzi3UDDx2hBHb9SPKDYuFyAP8TwzQpBa872Su4qDDFSHNakczg1fbDSZWga1TxE7mEvAoPsqQNoYSNandG5s",
  "key35": "25uMuz7xJMMuAwumGiziYe8GhkaXkv5vi3GSCaowzhXt1MsbkvxXxrhLsuaJ4b4NWQBUedkMc58bNQm1eQkspo2x",
  "key36": "3Hm3hZgE2dZEhYtH8aJTzGr4raeyzAtsGfsKYuF5J6vvdEBP1L5Rf2YYiwVFQvjtPEhCtwfzg6tjbHg4tJpLHQCF",
  "key37": "LL7ZYRuEjKJiNhLGSUPtUudSqYfHVfzPhXyrkhrtLd16SsrzN5uNnVttGBqChwUrHhTpwt4mmkJPE7A7KaedxFF",
  "key38": "62U6pd5rAAdvxwtWzpdrgkj3DpLNujuGukV1NxuKVd8sm3iuK2tQioZz5q1X4GcXP9evb5o7NbXrhjp6FSueYKxS",
  "key39": "243Se5gBvzVCuSaeuYiy7GdpWV9LXUyzFpFdjfZNFGBGVQedF2T3bQh7T1Bandh8xWDL2oSf3QC5LHiUXt8dgpSz"
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
