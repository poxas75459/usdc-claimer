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
    "2R92zxc6JW5NWKErAyY2z2Z2AB747oow16SxZqzphxE7entVJwaGKpuPr79Ei9GpXC5LgPGe4WCk9xzMKafwmZPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PLGwXooVRVnPTzMxwUrSjSQ22jHfkTeWy68wkwWQF4wwHFbhCtrkAk3bcFsvFiG7J5nUs8PynbDHBHNx2fBQkUr",
  "key1": "5GqqZNdgUv5K9tUAMRv6CkvikBcGy7RBApZQE26vuC1RTFxmVMp63jsKtmHQqux4Cb7wQSi25LuiLhQ6DBHYNU94",
  "key2": "3fuRFMmpvQJrRgqfXgE1GbrZ7iiV1btHMVAFCkpv5CuQyKoJpVtatFGkcrc3G9taDhmp8aZqHibCfeyZVzVHqZUc",
  "key3": "5xdvgttrUuTz2PhDCfj7mbK7USQwicp8GLMhUTPmk78RsVRq7Yt8EAx6tPkJpQ9RAYBgihnXReSBm7u2LP4dcfV5",
  "key4": "2oiQhKXYrTc3DCci4iBEH2Ha77o8dbd4CN8CANRbv8RCxGzr26YiMLVkKHwmZv9xjaYDqDjVYB2sgqsRoXGzUKdW",
  "key5": "31PThHZusy4JZFXPpxr3cCQFddGxL7zBNeYnMLLEprHttThukN1BRiUW542jUDv7tZNT6vXmoVZr9jpBDEPKgiac",
  "key6": "2igiqXBq4nTEYMjVByn4NaVRipPEi8vBdPNRpni28ewKejBX4L3t4tpjepc2QipjThNRrWp2ar8ckoPUPYyN5s2U",
  "key7": "59c2TSznnTKoTVA38qjMsqf968osVLUQZTE53UbfHczDCHZhrfmzNkpM7UVLSFentDZ5CTPFzLDutfwuu8pyq8or",
  "key8": "4tJh3TTZrkSABmaWuMUjhjjVizAa5UAwuWsRBSkJdyAMhRo8JriN7DJVN999yAVG8WtrQ6sHr1Yq7pPbWWgNMDss",
  "key9": "2tHSGF3tEdbySDiHHAEpcjuVmvFcKFngTWbSCSAxSAmn5Ao8W9yZajmhPig5j7rxnES94o727B6XLSH6fKMV1ADB",
  "key10": "2A7RqtvBTjTKSGGzPA5whFHBgPa6orLkfcird86xsjoHDPoVqr4jK8fJWLEjd1KuMYVXx6hV4mNGnFmcZvcFgdVj",
  "key11": "2hqzqRJoaaNhwXFFGavhsN7nsA4DLRq4VePrNZrDqBXisNR7MaNABzEsEHmgE5fDGq26WX1SXbgsPx9VBFzEmm5h",
  "key12": "2ZgjHd4i5UuxYBJ6CQX2qxQqyRV9vxf8Z5So5cLUxdGW5VYdaDYJoksEKwDRDtbVvpDjWgef1vfxwiLvWdUXY9w",
  "key13": "3YPHdba7xqfpij8e71Q6bZmmpiraVoxj87xPSt7zCNxksXuVWkstz5emMC7XHX9djYfPW4UoK7EBCLthvWXiezL3",
  "key14": "4DtnLbXzvU5pNoyYPD37wvQRipANwTPfhjS83sfMLVufEvFUjwUsR5DJsZHs6oEEtB7RD6HffxtjDAkAdHdrqqU",
  "key15": "3bPYXxC4skJJDGEQHL2BC3pJq1qxXgqEYzBGFTRwMEtS8vW3EoNXuFd878wK9P4PaLNAFgrsBz84QU7f7D44e4jv",
  "key16": "313evoUXim3mH73XVCj371e3JPU2ypTVynSX5oZiQ2BbFazpt5t74qXQjzYQVZkZbanpjDeNH2rGJkfq9Y4RYXj2",
  "key17": "gepUcRc2X9w6LvWdUmfKSTtbo1sPwxzfdc6HLHX48cdWkDcDzUHoDdcurLNitpLBAQGPN86BDvnvSsB6Y3e9Eae",
  "key18": "3qgiR2RPcGbSh1rFHApb1WdyWRgRoQsggEMQxuG7xgMPC63WQnMcPMfjLJ8hYuVKL2XWBSGniV2m6YjrTowpz9Pm",
  "key19": "32ZJwmu7xQdY4uoqAgidtQ9RnjRF4E67yArX9xqpHEoeFfPE42hPZQU7bqSE3kfeVzBKMY5igKjpW9NjRAzVo1Av",
  "key20": "bGCpdC86BbEFnbQRrHMo45pp2xjN5EvBuqqQf4SGg2RijGS3Zw2CaZJSDoEosKafyCLz6YTXwyUvG7LuhXj9nFC",
  "key21": "4rqHSkmzyDHCLRoNEFEgDo58SvShg5deuyx4jRqeLaaMhqSeXdjwA8pJ52jraVNux4grj6SLyq5micm2cQAsCegi",
  "key22": "2gt5fasnym1xcwbfeSj6sKNEFy4gUyUbjdtXWuhUA8AeN5zLEg2byg5e3B7asuKoNdazEpToiLTtU6a6rVNdaWFS",
  "key23": "4bKMDUr4GA2wg2S6L4Z1nhbU2mNt9Si4YvAtonJeLfp9LF7XrWDJLcrifRMtcpx7tf8949M2sx6UyDuBwPJLEGnf",
  "key24": "56Sav3Ym9Xu9toujHFzXUgd873d1sMwk6WLur3hSaNn5uK2RgcFLmEaNEprqgCQwbuqAfWDMX6xEW73t6VEy91tT",
  "key25": "2ua76v88DLqHdoNGFsJqU2FFnZCyBLGvzvuLCjVeZDXJAc4hLKFL3zUw146U5JLgi3vjp5A2vJnLtc6MAXYrKyDh",
  "key26": "3fFzamn3fzgvhC4Gxwg6CwJEeFf4cpe1vZ1embcVMr6MFkFzXGdDKzdor9BAjE4XUFH8pQk4NTozptspGBW2oqQt",
  "key27": "51KJYHfFNWfhzfx2T8Jqi76AyU26Vj7R2uLS659JthGkYLy4s8sxhU2HquedRkCrPNgij29XWhStenAxRgZahiCY",
  "key28": "MQ99FWXxmzc2WUGiWbdVtTzjZFSsiwznNdpeRQT53Unj59tH9HREQNGAwnCF6cRDVMy8Fkkbc2RXKWUqJK1g1ck",
  "key29": "48rDPygP8GTosjHRkEmzVPeQ6gkQDQm9TLcs8FzF7CoSstKMSJTB9pwoKbVDyJH9u7fU1vBmivCpu4iAkFJUVxLK",
  "key30": "DLF9oHxBpQpgJNoX3u6SwPLoDEUo5h4wQoJUCSKFagx2iKH6qKu9kMsPak6y3DsBjURDSkdikDPiPNJgHrLqJYK",
  "key31": "5miseJ99GTwKtQDKWeX6pvJWzmxpZJGJ4eYDvGwd8fiFjeLMUYSw3Ddq3E7fXKePzncwGZ9jGkwjbmVv6ixVSHW",
  "key32": "41Esz4GTfsJ7LkNK9otLU8d5B1ZxgndvBvPZ1ARGe4ek1prNqG98Dpe1yn9hNBLvLFACRmCNwpVe2oRwZXDQUL3M",
  "key33": "LpG44qBvez4bHGMn8bfJzPF6DqaGyE7KDxyPgGyQ1Se33Vu7vjMLaUWaUt1WdvhzX6qm7NpYjjsAAqnJzSQRW1G",
  "key34": "61fGe3uhKRWPKhrhUqqtsDa8gUmV6tt3HCBAXHgMpUdWUcFoue8yPmsApWriqAp5t9i1y22SsQpjgshqCzqzUz3p",
  "key35": "3GucXAY1K8zjgwkAy8F4STrLjwzmBoZNJE8NQbEEHD8Fn1HBNg8oiYBpNxjegHWb9GzT9WaHoRErjeYGocxHJu6",
  "key36": "UsVE173mVy7ABNcyXvEavnitjXgJMoaZ3JYrTA5Jefa4dmdU4HXw2MCdoTdRzK3SvxNezYBT6kBopX1iTz2JuYX",
  "key37": "4z9uRUT9zXqgHiUX3zz5n9jHFAYY7BuhPhMLLfdv5Ex532Lm2FDJY7BTU8uJp44VUcYwNyRSCK8rBXFiYyz4riDR",
  "key38": "2p1PPrs4P6cBttK7JewXjfUpuhHy1P35XauYaakzu2LTPDfReo33x5PUCuEXMSuQFQQqgvjG6yegUXBiuav8y9Qq",
  "key39": "2U5NVn4Cm8mMu5ooi1UiqxXwQekPbcXcvCz15V2yDeR4Bz8raxivH8STZHN1iaV5VZysxS9jEENnCpZQxnHsFmMh",
  "key40": "4PdFaNDiCtM8W5iP3dPgMBz5zAN47qBeLpjyW77x1FzaX9YUnWKyM5iA8jBDaL4LUzypjK8nCKMFh4chdyS2Gj8b",
  "key41": "3BSzNS91J21efkCHbAtGjPrj8a4Lya3sQ84a4nMQ6rzsJ5QYUWDKfg21jWWcRSxaMDn3Ddmi3BukG9ajHdF3J5KS",
  "key42": "59ZVbb8WJPSAap8GCphRWZokHxLmQCQzY4CVnxn4QKASv6D3ytFaJv9QHyJQNWTi46tww4tSxYJte2QEK8RuQMtP",
  "key43": "4ATLJZsJL6UN9uKFpBaN2enShTgw8kgDPjVSMKYtHp4Bz3gsto6b9ByrWGmdEzQS5b9LM2NbssFXZ9642ZDwWrFy",
  "key44": "4BeJVuDbum5WZb42NRzREnzsT9qzNVUqmJ1wtjqZMSqvJsoEqH7hETcbb87E1n5jHJb3q8F1SeJuPQBebVkZpNGM",
  "key45": "5kdyXvKnRyqpfS9cgP5f1dtgjz5bMsMhiuio8mbfhfxhRJsm9B8LH8RZ3o5PZ1aq3dk3eTLMvLJTkf82z6aFLHhF"
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
