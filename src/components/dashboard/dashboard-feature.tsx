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
    "2iia3g7U48kDNeJZzLQ72sobM5RkNmBpo28jnnYBiqHkNWKsz4pTidTSoFfcczsezgk4qHLhjXtjH5D3uGDq5vCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PyHmxFMBMnyLaW98oZ1S29o1ZHWDeaVZSsH8Q2dsfzohj66rACLU95nruUraMajjpU64ZXD7znXnGZ1qhQqj96n",
  "key1": "4L35ycfofR3UpGx4poME7GqeMWrp2EENJQHqeXbLR2JeLbcdtDX5gyKvzjWF7kMNW6jCe9Xqe3LhZDV4PhgTrJQz",
  "key2": "2Eo7xbiECnRg4y4RkVJpoQaQZi9r1BwKPxdFwUFGhkbCd1UcAbsoC9jUtMG78cHKx6oxbrKBCcDHixzV1SnyfnAT",
  "key3": "3dNCumnJcWupgCYnXCNyUabunCwMYXW9dDhwxpi2uw5mZASKAEezH4XZQHdyqGVGiWg6AdA2z5tPzKD52qcgUzCM",
  "key4": "4n94ZJCCE3j1YPfgoa9QzZZictaxDfMqseYDSoqFH8w4JWU3SdguQGW6dJU7iGRPXnZxEfupoqN9FtUZ3ZpoCj6j",
  "key5": "4wSe28jnc7ZeSaRtKfGCbh7r9cC5b3DuRGtR5M6uhxzAwbgS9G15QqcdiR6WqpmLxe6vVYiSfnHmHmDU6cP9NYXW",
  "key6": "26MrjigN42L7ajfDeBw67mM8zcYgzXWwyB7qZEVpJem9KZ1o4wH37Eoohx5qXW3JVQC2itvSw4upjrKXXT66GsQe",
  "key7": "51yF6LSLpTH8c15uNibKTCDA9cmFfJZgeV8DnRyafQY42vJ9NEinLy5Rxy9taXuoFvJ52jnWByN7h1Ax5vFZrT9Z",
  "key8": "29zEmHr6vCKCWxDfXCCZFsfwTKVQQDuqTH1eg3bcd2UauxkUFXc4bYsJP4XBy2vKgtqgcSXyfCe8Wo4MuaQu2Noc",
  "key9": "39rDBwjoGENEjqaivHj2wtk4mZDP2FLCs4297nng8LCgUHNGKjeYudjFb6vxCFHz3zo3cyWAXue79Avd5dg5J5fK",
  "key10": "45nbtSWSpewv2GmKvfMmRF85nirmHE6z5hovasChXBtU1QrDZTXqWfQnGkYxcbpMHaNRxwPSLWVsTRYq7X4ZUAfL",
  "key11": "2XmFDKiVC17UjauKxzueyygPcA1t7DGKBaDGqAFxrP1i8JX5XpVUvSmyGzjcC84e6YtubFVSiZWu6MXwAttxZweU",
  "key12": "3e3kezZiFkH5xow2ppRnQ7y5n6R5B7CD8vqzgRB8eMUVz1deX9kvHVeagPGi5XjX9C1CwgZa6uaj1WQZ9pT1vxJ",
  "key13": "2fM2s36zjm2bAYbyjzDzoa7ixzuLGkg2JPgUH2VzEM8ukcGvS7YDKtzMHKHFdtfBKw9HFwcwhRvFqdonR1eGDPmk",
  "key14": "5umvcA5uRNnTCgcruERVXmxwZCbzJNgrvW8iHHNMMb7Woi9QTTLrWZhesk49eW3ksM9EqEJg3jzMCXNX53d9TACx",
  "key15": "sjt9qNoZypHAk5w2eRb3k9wJPepcQZuzRNCrGwUEwHSfYD34471wtXvUdh5Z69uUx6bUbg5md35LcQqxxsF3cQX",
  "key16": "3Qe2heuHtc3Cf1NYq4RiWnL1c6hj2LTBsb8JVPQR6bA5acnVKBx46TTnPt2xLW8qtLa7e121oekAYTyn2T89McGK",
  "key17": "5b43hZrPzkEbvvnym4DrKtvbVstEi4fvfCuM7QvQ3yhwhwvXxY4wBDnqeiuAn98t1wV5HFaQD2LqgDYyBNAmhoMe",
  "key18": "4gGHDXpBkND5U6jHtzMQqsyhudzNMr44JbPnf3Ft6uMsDLrRtGrjYMLaks1yYkaawNScH3hX2mwCeAWGhNj5iSJT",
  "key19": "obzvViK3Mkr5w9AsEMmAMzh7ymFAMFrxSj9SB83oDVptzfFwFVD2gT49NB85f7KdEHNEQi81bB7UNV5cTiG83BR",
  "key20": "31pv2pESeP3dc4MrGTZKJLFfxE5atRXtgELJvU4YvNWgd7G6wKq188svczMpxAEnPvnHF26U8ogda9uHnwwudR1f",
  "key21": "5845niwcVjij8Edjcr8pe5gRQjjdSKEsHQsouJqXgjvmotVFjG2bekme6DCNHDLdK39zrePMH3T88ooxADCTi68n",
  "key22": "3Qxi9Lh6tJ2mqTWLP2RbTY4hJy8HcdNofjWcb4suRNXnUpEAJMhwPyVpJaG7EBg28S42E812kFxC5dgDKyrLCi7k",
  "key23": "49pPD7JGLtrSpFyYFjEwzNsWsdUnSLJ6vVwcseoyU7hNTs7tjChVoNaSo4MvvbZab7FwmMX9z5mw6kKr1TapXhaD",
  "key24": "2fjHqpY2y43nLiWBryFQcG8dN6QDayNLJVmkawWHKnv1JkQ55bmsPZfxvAHYjkNAeo4qFm7yRyEnyKf1U7ybgRsg",
  "key25": "4XkQAWzgfKRkcdkpCkrTQdeoB5bYH4Hk8eZMhfqwSdnvesyNwHeLtV5xWvtLQqEs5HmHk4hKFZ5A9XcgVAberVFF",
  "key26": "5tjc6b5fPrDAMoCQxzRZMHcqXDJe86caU6X8Qsk23HmKV7QTWNSuvAaR1H5wbHJwU6PSSdz5srq5TuWuz5yc5K5M",
  "key27": "5pDDFMickTXBvcwrpcFpw4NkNhS3SMZZdjHaL5taAYPCBu8cP4N2HbBZLybwgMYCZrEXRuhA26x2yt488a9DQ8uj",
  "key28": "4g6i8cWAKZUFBBKs5voz67sAGenbpVcDrVefnx2FF7Yrj3aHWmPSX8DYdRsAS216SigCoxSeDakyEUSHuvvTGUk1",
  "key29": "47qmFpPkjW7vTfwwt8R5eCvG3A1mRKLuz35Msdxjqiq5Gq5tDapP5E4BWwYRAGoZvJgMDoPZuQRnRDXRKwaQr9bJ",
  "key30": "4yD9iPUwXi7xvCN5Nnvces3xk7MdtcNacm4SmTQBp8TUbDovZkpRtXNQsAu7vydKTwRhckrUXfHS5XKoQd86FLgG",
  "key31": "39kXDQN9g82fv4QF4aqjiLYfEzeebrVFTYkQuQtdVXApxetdYhCJjzhfnBPrfhoakBo6kj3Amub4ZSwdT5fE9EXi",
  "key32": "dHgdw8oRqLS6Y9uQDt1MT7ENEQUEyx39GfJDU4AdeX5SS2f4RBjGNoztBH9SLX15wzgRHdRj3WZCT36wJu9zyoJ",
  "key33": "5pU7821Yn6fK7J1MjK4tXs3smKGwDkzHRi3BZchrpefDWAGUJSjZhZBEskuSW9zKn4AQsY87kavjXqWFejFEPnct",
  "key34": "4QYNzL6c4jh1LFBkRbvcvr73kTL9rURHDffy4nyCTvtrGD79b68YhikpSDrrv9A8rS48EAGiR8xraxNQPTW6Z7ok",
  "key35": "3C6D1WQkLUAc2KRjYMHA9ZM9s3vnP7bZZAxthFJ4Muk769rooqGestCxSmnv86cUy3miAC3qM7zgFF4j9oZRXUoP",
  "key36": "21Dz87QUnxE9UVL8EjJgnR5Y5H8cea6ABSLrF6WyvxnDPdwo5Q9c9WRx3iaC2N2cq7YkEe5yXrFZDNfA27gMhQVE",
  "key37": "5k5bKf1UnbHUoqaZRGV2NJaQfWDQhppNcDPhJhXdrEidUwX81Q4PfWSSJUziW8nTwQdGQ8dtVDKrmHEYcazZQXg4",
  "key38": "3tcKzvrjJ3x2YvmcQUoN7usLbir6kCE1ocfro9VeTCXZKn7Wx8wK1fnWDFNXV53uGcbfR3SSfRPUnYfrCCVeiWvs",
  "key39": "Tk8nx7XkBZedFmVGs9hm1ykNegsxpV3NReT3anFUoWWRej33wPKojkdzrYf4Tqgd66NjDadPF5tnxgASxLHyNRT",
  "key40": "43pew2bkuDXiU6sE9x4L1Qi4PYbXqDGxEFQN6pRW2MHNuRwZbLgPw33fudGMKPz7Exi34dGjuYdEhg3vetjppUPb",
  "key41": "3UhySHEqbC46x3YbbB14AaiU1b2XeXPpt9PKHjBRrzPkVDLQ96ypULqsc7CWiuPeRAoXxAUetWSU3RJL9TvJ5moy",
  "key42": "3GmENMbhmcyifdDADxkytMALKR2aYfjVP5WSW7Un3mKV3nnq3AuuByUyi6jCzcMrEkx1ybhSDn6pSQUqkQaaatXF",
  "key43": "5yYtnw7iEYjRK5RhQTwCrktGTWdd6z12pEtsYVghQqFzXSGMhJJxCZZtMc5bSMx9AHKuYQZ58cpruHk6hjceZvih",
  "key44": "4eTnuXTBVYzkFK1xZ6ZyHTH4kasRtv3j4huBvcyJKiXx4qAeoBfmkB8P7A4Zdgd5wuye2YzU9TNs9z3gXMFU7ftj",
  "key45": "5zrm57W82cNVNX7rdZkF1c2k8GoiRSb76tdBENvTLnC782CBp6MPVoPCnDGLhSu7AWgPTeywD26c47v39uTtKxEs",
  "key46": "2hVsmMpPprmdwZtiBP2PQieU9Cnnd2dJrUcGywER9jeMtgfX1DiJ2mQyWh5kSZ3LLkQMdCAzCY51xnR5XRuKy4N9",
  "key47": "5HdybKo9wP29hijqD49JTtMguFtzphLqYpa3toEXbxvThfYqc6RysTBbPcSwNetqVdsQiXvV6a3ATFgdQxjj7m5n"
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
