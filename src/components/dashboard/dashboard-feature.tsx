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
    "2ZUJCUiD9U8tYY6ZeM49FB7YdtPiJRsta49g2q25BS6yzxAyaK9vSrzZkpjwMCZfK4HnZobhY2H8uF7v5xSkZskY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k9DqQQB135hXP4QMK7B51MRLeJwtm2hBofMNDpcSJswmqKrw7F5XHgjCdWuKhgdbNPX1W9jUcaDnp13RGSZR4yR",
  "key1": "FRmJQ5iDrrNkBVZnPqjFvSv2RZmVv2HawFzdXTz55dNsSTbSxt45VxWtmJ8DckUZspLejhRWkxeZdfRB5TQfLz1",
  "key2": "5DP6Z7uhkiisPFUoLDYTLB2jajgGWNTMmC8Ju4QmGV98WJdYyZw3s8BrBe4iu92rjQpDbGjg4mxJryTDJVwMHgSo",
  "key3": "3U7jJMbuuJGrHy43UNYgTADCSaiBggsBe1dXCTihUGmFL9pSHdvjP1Lh9UjLSMoYBDsbtreyQCbsRkHvMHgb1exP",
  "key4": "4CjaJx5Ys9dPn2DkXSC3GxWLNG2EWPkawvRrfnrHXn4RA63ftsYrH5c4XRxYPKZaUhjR7EEv8EgpafpVRqfEamR3",
  "key5": "3wKWsuosSYhZtFs2C5WARDKfSXMxDtmY7dd8BvhKvWkXmqqeSaAcDm5CeGZ9brLoFxRLUPPBtMFBQovhYZ2s2i5j",
  "key6": "4JekAQqeVgRwzs6mJfjMpQAxc7qngZLkd3P2HeHCAYsgDjQJMb3FwPzuPL7haYG61CRBD3GsknSSTpQ1XCNNooHZ",
  "key7": "2X2SewrmsN1L9sSR258wyNoDTzC4SWmhQZYYG8tAv7sGqmGVQaam8kFnNJ1sRe26PZX2C1nnWX9MWMedWZNwvGxf",
  "key8": "3PThrMAZ6FrXX6tHB3nVDgfjBBNmkPN5xdTRAaUkFJBUVVJKoiBeMp55ymWk7saJa3DixULbPdWWBot2jpnpcTJ6",
  "key9": "64mBdfQpGwiicJi3RmBo7jhivkqsbp2ZbDVMstDAaEEtDyQJyPsXoEDv4GSnTDpHb3UyvDHYugX2exyswXBMYvYm",
  "key10": "UdBURsYhPb1DbZeTjSEUkoVJaFVQExK7LwFrR3QYa1dLv2mkWfCQG2mcFEqqX5wutJGVwpPag3ThhC3EhCizwg8",
  "key11": "2oZGTm5sdhmRRiBoUMtz1TiH5JUoqRyWEMGKLtgJUw39LxhLtAyj2LFW9gYGQPVvUoLxXcpRrDDiCqokesA9jtSt",
  "key12": "yM3dAnJZHoC7AsbJyX6vTtuCcXJBDa7TEBwZcnKQzS4rcXTt92NV54yVxQePJftXxiQddJ2CT5uFhNWATkrPYqk",
  "key13": "27gTEB9hKWoreqVMTCq9pRgCVaMkRTiHYtiL4aUTobZwC78XmgBUrXDQNXW6Ww8Z94vgVeJ6XBmhsjJnRx6XhBTG",
  "key14": "2eup8qEPPUxeWgfY8gwJtGEmb41kiAFYeRk2qV8wEL3QzCETHxfs3Xhy58DtHa8DnZE16Q7DiVb4EqckzgWv6ZHW",
  "key15": "esURAKp1EdUDDyaHHK3ZYgfZrrzs6ihUcDuact4iiXFw2FN5XdexgPCTSAqbLaa2xBWCaWcdJu8AraJ5EPzjZJR",
  "key16": "5K8Vj7cRdWT29j3L5C7RjbNEj1rUz18KZh9WuxstkNToUfDsAuq21MMphqaRQZqW9Jz7ZTeUPQ6VXe5SvMtSGS5m",
  "key17": "4b8AUHWYP9ntWkCmtbAyQJPQke1Xxe9Xr183ZvBmhu2MAEqe9g39g3zd8ygycY5NyUauhpC17bza4qp75wTNmQQJ",
  "key18": "ZkYpLcAVai4tkpRFcbv7KmcW6HbKrg3v4mF5vA4Zqg371RTN8mW1PcWoNdpQXBmBgSB8QjwGVEU2puB5Z6QPAgB",
  "key19": "66HcHjBdTi39MB9CRzETJkL1G9dmzn6guogoe2M1iDQ2aYvy1nFhmDcU9GMULuiJ13bf4pBBLCA53kLmeb9kkhir",
  "key20": "3QP2fb7Vc2yYD2QH8LnL7mRTq9W2KfERSc1TYC4LTM3itWzXGDdEnhe2F9MMkZ2tKyMEtFyC9mcyufn8ejq7segX",
  "key21": "dnSVuH9X8tQvLQBmg4z82QwxiKzhynzXRQ14QA5RQoE8dVyP8FFcMtoXdFuBkTQHiPx5gX5W9FRHBsr12MqTHbi",
  "key22": "21hV4Y6Hnr7zQzQZ3yiB2ABNTuMwziqXHXLdcE6yu4D12qnK8qBMroQcbRTz6rf8bVgFnj4onULGQFWEDp84KtyY",
  "key23": "3SmkHi51S8nK3TX3csufuHfavdZKuRmX3JDKwjdagzVDFwHh2nSFge1accmFSinCShMBeqJzwwJec1acRPgiKxKn",
  "key24": "3oNawb3RApp2KSVUNUu1TU73isgFb6NxSdWyJKtPK7Ga1PS44FbxYQwKVXuf1HzNFpvCyaU7qf9nVWYNvAuzwCeE",
  "key25": "4SR4RQ2PQtuJpau73PaFNZrF5cQbw5vdQGQGLhs82DaEyXqLTAjj8UWkVhRphXUjLVxKaeGzhuf8AiehMgjwRgjF",
  "key26": "4FhQ8mDjdngT8nuXauuyGqrsTUWBuR2CWNZ7r3oeW7a1NegJ73S76WeQFbaUDTo68J9sSJjgG6BXmv6PAxB1Fvet",
  "key27": "4z2V13YLpvYYSsQsXiC7P19maDLb7ADFvxRTVBy4HniaKsGpQ8okPAszeTf653tbE45J7XUG1M27WQbJvyeibwKd",
  "key28": "2bnMYF45f1zrrPRUbaM51BFwfkLVffu8reXpkbXqQrLJxUtbJSUbYVFgCYuRuoUEiTvoQTWGT3Qq6jL1Gra5eTgq"
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
