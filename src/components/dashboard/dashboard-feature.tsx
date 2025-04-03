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
    "5inbhqREpCF2N7yDMYmhMzFaN2fy9EyLC6ujxDMerSXXfygAvTUJv81NU2zAzDrU14QWYnxV1a9892P7PaCC9S4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PdM1JiXFUr7kqfvB9Mvkxhz4wkaJsYBjt4qgCJ2EqFJX6M76WZQkaCPJERDJUbivTgkJiX6M3oYjsdnHc86Ys4o",
  "key1": "2UQ1mpgGKa1ozHNavSs8mxphtXfKJZLt4QkvZ2UV2oczEqjzc27PWzviTsQxrpH31nXqfmMpvnoHqEoy4Gq99Qaq",
  "key2": "3PEMKgZQUoMv7iRmFkta2va6C4apNsN2viCWTavfKri4w2vT6jhB8FaB56irHAaNXBn2Zs4vZK46y2GK5LrY2QF6",
  "key3": "VaTDSQFSiLcN3Eej2Rf28D8CvXNeHVnoMhPmC2TQmmToGVwcfFJcm2R2qCdvdw3dV6V3YKyz2BaC8Xh5B6LBacy",
  "key4": "4RfoutGEiaZy3GRSmZkERi1pZstAAoH3p9dLSrfka94XWUEPupBj1euYMRzr2NxrpN77HDCEgeJbBDtRc3QhYxpp",
  "key5": "Sw5q3X1FMeV1QzrTdZeEbsZwyYX3dKEWdBBvsSvA6VXTVAaSPPC4uiGPCkUbYav6TmgqRH3GAW53e2TrDyKNdVx",
  "key6": "bWwdB4ggenYTqfbmDd476CacP3ikYtgr6exi1uFJHzvaGAB4nrzSg3AnCo9Go93BzEupbUoaBoeNn4ZXZ65rxSP",
  "key7": "BPv6upyDLwLdiyQXsuQnurmZDdnNPE3LaXjELCgVukKSG5wZEGnnzRJWwofJSW9dE8zqcFSfwF4i6Y1oVRMVE1c",
  "key8": "5Z4mfi1KbMf7LvGrtHr7zbBup4CEZfq5XJp3XBE5gw9Nhb1cwonraqALQZrccc6HjyKCvHtKSw6ispykW64u4tbK",
  "key9": "3aq9oL7MaQgXWaZz8vWTzdvGb3izemeipPxCpJgtkz8nrrF6kSZrJXVDkvWqv85eGHwcBdXd8vYiChfo2sq7sun1",
  "key10": "42LgxjnBhedpi6X6dxMguLjCB7hvjj9dmtHzZUEspivTubUzGswfb7VJen3CbJYFJWYdwKCx23L1xDJyP79MHvnP",
  "key11": "QJGF6ErfZ6XeRzPZrnreBH56TTcevzcFz8yrweSr9bjghxU6MCEKVfjqmu38btNNrBJJaggAXVkDjzzmaRF9CKV",
  "key12": "5L91yHnoe64wTsu3s8EEzV9kWnqnGu5YsAiJg5patNCDn3x4o6oCwdHYMhR5pb2xWtwkQXNB7wcYny6ScqRfRBHX",
  "key13": "5UnuZG4pyZ2iXQddDgFRnwJykbxNHc8cCxBPcMCwcLqhkqBWg32H1r8u25pCYayUATsC9RFMRSqQULEW7uGoGgN8",
  "key14": "5vACsNG6G95yoS6FdvGAS9s4v4QtPjYq9WMAaj5WC3zaDZDwMMhb1r9Umu9Ei3yhgBgA4HJQW5RfWLKiLMCBZ5qy",
  "key15": "3bHWQGcS3G2E4a6jifShtuEJUjADqFE6meP2HthJqqth5FNguzyS19Sgcbdu7zyjXbfKL1Jb1wdPavNTJEMsvaFY",
  "key16": "53DiRJT5wKNYnBu44gv7ngQQHtw72r6Lr6TzaLYuffrm9Ku3votcHE7wgBzaYVMHzzVQAYbUMqmzmQTzebEsTiCq",
  "key17": "3tKrAdss42cbKis5VoLkSjwbySqTqCgvviF8CYNZZ4JUxTkZ2oRbBFNrgQgcexiFPgyCE7FiBCb6znFqVAvjYBF3",
  "key18": "LxMLh88quPdosK6dDMqiqJ7LUaBawDxL8naotvxJgF1KgHWGJWfPypwMckLap73P3agSB4yo9Cu3KkEzB6iAoEN",
  "key19": "63hmzKrAAgPVupPVF7grw2k1siHF2KbaE2Jt9iee9TiiLP6MRQ8XT3sCDLBnr8GiLZj4ftetHJF3ZnFV85dzyMxP",
  "key20": "2gAUCW7qsuqxg2EWsPzJzLLrcVrBhNjCb92sTSDSyJSdFFeMZy4iaG6BmFi3B4GkS4S7YzmCZiT6D1M7nFh74Zn7",
  "key21": "3fkbxGJqzatTq1Tae5h811dbYaTJzfdwnX5iAaj8nvxDtp9JeGa7GZGJz9iaFqWNe8d7qGUcJhXuqqQJZMkJkUUd",
  "key22": "3H6u355TiSpnq7LpmenKhivBLfKtSR4aeviQZizPfxA25v7ne1TTtuaFWKyACdYpN1SZhcLhB1Ywa34Q41QUs46e",
  "key23": "kJ1dQEbqxvhkb4APm3STMQzEW58qBnHmkiE8x89uZMSbrArmB9n2tBjuzYyWcv7JjZhhKF1Ui7AHXS7JQYQWLVZ",
  "key24": "3rEf8L5vwfzro5kmbkQTBjtQJRNatXPkhR8Y4MoEShjEVeRSyQzzqoa45Hmij8yDrgJgkgg2SFAyFw5JvrTY9KMo",
  "key25": "a6Ec4QVxsdupSz4oiKgfMxSKM2YFeUeoLwvgGP8AatEKtZZP5JGs5p6ehQkLdcLCmojh1ZQNkriGSzeEB3UbW3B",
  "key26": "57VE1otWCxuAts38Zi4E9SA8LgBy82EvE9oKGtcFMQjCt1t4jdCormcEFi7ZAugCVkBFU4TvvGiRrSqdMC8Cm9Wb",
  "key27": "4bmiSjdDZdM44PQWboYFBbF3cRw1NueetMksyU22K3pMjLBbGaqXysibrw4W9oRqRv9PJ3PyHnPw8TRn4ofzhVMo",
  "key28": "5zNsLLaZUnu5seUisgBUng7MiiGSDvbWzwAdakHyXFhFtEZvuzgzLhx8YynR2VcnXPHKVesCKuw7ZtYV2oLcezui",
  "key29": "2LKiJnS2ZX74u43kf2ZmHJ9kuc8oyp5vif9YkZY6VcArrZJgGrWDucsQXvU6CSSqLsCQM9xgVWJX9g2skDxB9DGi",
  "key30": "2MxCdwtkppvxmwC7SSUniGxpagrF921RJhZ3Y1JEhEpWHUXhT5bFHFLgh3cuJCWGoTtL4TzeV9YAWcdwWgTMJpPB",
  "key31": "4rDyFLGRiyZ2SDx3Wrfsn7q3vEkVw8Fm2NdLMDjfkHqT27SMS55NkPuePNrhcQGXwnC66T1wcPZe6dFACNbnSp4y",
  "key32": "5gAp5AfhdCYhcxNc5Mh13H4dgpfFW8uPrxGfFmF8yYdqYgz74XERWbqc2YgbFCMQLtfVCQQ1iqcTkQaVvWU11gz4",
  "key33": "hcnAEjGx2PvfkeoB5ifohBXeVWUhZx4SRMnjq5vHazD1ZtpiwrXTuZ1zo2ccGw6cDDNqR7Mcdt5oiFiFEqMroe6",
  "key34": "2pv7XdtjUceYMxTEPNN6JRD82mWBTZb7Jrq6nn3opzyXyCEsNJhX7YPUXLwrDa7L2ys536fNa13Vy8KfH3M7ZFuq",
  "key35": "3aCK4tDkESBrunU8dvT9zWrTbgd8DzABi9JWWmSYHQ8FWBJBMSc78Xf5vHtvyKEkMxKENa5p4KyJgpBLxe7j5WmS",
  "key36": "3JHeKZL1jJYw5yLvoaeNr2LopNUFU8u4PNyGrEtoeibAbL1nNy4iSgMTchTLvMzHZ9ZBPeGYNauxc2sfPyM87msn",
  "key37": "2nQAQuJmUn6ggnmL68YhpEqArbXSrrRwMJnJYTkpxciVLATAFEVr5BEQPH9H9611gTtNfAYZwN9w9fghwAvb4UnH",
  "key38": "3RPUnBtpzvW4t6hcfktuKbQiUQT6BpKuxKJ7zuTtz13ZdqbkZczC68cywJWXT52NSwicY8deH9U4iuyUm7Y1K9Wy",
  "key39": "3ZDK7DtWLt4SvoNiGjXwT6MwFZmcfpAQF2MNZL2F2gxWyMPVTGtFKFb1Wf5vWmvm7sJXeHiLCtcBJKQp5iShz4i2",
  "key40": "48EtYG5fwx99kuZNUrbQ4P2To12vrygC2gzQsweH54b3zziycg4NLzNwxk4dEp58ZMLtZU98uB368i1yd6pcaRQo",
  "key41": "4qj4mWu62HVvCP8mr1x3LiQZrymPvWsNGdfP78QV86UrmspLzfNFz1d4Pwvwn3jRuW4TKLcpymyShVFFwbJyuzWn",
  "key42": "3esSeysYHkhw7h6qWdspUKveuig2PTzfqmyTDsCHyZrQLCARZZVbbT2enaDvXmPGx5iLYoc3MCmxFHMKCfUD6Qgj",
  "key43": "498sRr4qMTkKhKsqoamjAUqfC8ihnUmJiCm4nq7cqAMyaQWjaE4i6iDPSwKSGkf7Rr2jVykoRBizjQxo4WsL6fwX",
  "key44": "4gGh7bf1w7ro3FkqiEN8sAHK3JHnXxzLjLhkZLnsHVRC6NjK5WPUCvHE3LERWYchaTr521t6zYmQmYpvUEp65x14",
  "key45": "5XLP4XWV3MfzbNdtQZkGdGSFaDW62Gs3nnecQSkfodtx5hEzMwcquFZX8ZzDJrDwx2xhjn5bQ3bc5LqRRfsNLpMs"
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
