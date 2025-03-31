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
    "hHnm3RThigup75vUGMahG9tUpBSY8tNduggWSk5p14zjfxhog2WSJecQ1L5wdy9U2YYmQjrnxb7q1MeHyNqj8n3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NzpY2XVC2CXZZAfWeTX4rz8Qsns1YMSvpkxtPEUthboSuPYMp1DHFYNBPafhuuLk3CVn2hTqYdmcLRJh5i33Y5D",
  "key1": "4cwW2QkUjRrJkCL6STVQuLo7rHK9hkgHYHTW5F7GJJLbn4ixWTttNw8zBy8wQiyrCLY2P59iHe6aCNR9vNX7RFnk",
  "key2": "PsBBF83WQUkKAmPqA7Ncj8wTBPLZx23ASiwDzGEy6NBnH4fQSvimm2eAcAKs9CwJSzVFVZ72km6wZ4awtScxkb9",
  "key3": "5d6411Z4B9rmhSnTZ7cjrSLhUyyQcoog3uMafucTKZzwtSz3PGN6pWifCjTMtuu5QzbSRzVshHqFAnxcAQvATCDF",
  "key4": "3KB8LQL1D77HXmsn6Xwy4PJZvtKKBY3bJsxeEunFPM7kfgPYXcasB2bjHXB6qiY6jA2QNjyDx5yeKjsDbn4wTCd4",
  "key5": "5SXn5gmAaW6Ci4tRonYJri5TYDafM8szwQz8eZaLdhivRc7d7Eh8SeEWM7ircfWyxgVfySeuh9GY8DWpskuHT3nj",
  "key6": "48h9DfVQyWmu4z1HYiVDtSWN6FRSfKcPDosQxEVjMVgFyJ1Wz4S5BJ6miJm1F4UaqtFHiwa1w3Pk32dXhdzuZYb6",
  "key7": "4MNpgVwe4AxrWqkCjWc7NVNxxFj3e2efekmoSwWEy2TpUigMy4XW5a8ybYDS49NDuZ53LSJEYhPTtM8Ymk2jB8RD",
  "key8": "2HKoqDDDAPYW6TDwXGmZw71vKXXC3KzxL5ZfgL9fQHTWwuLk7R5iJaK8ZknnzAvZa7kSAEJBsSBzvscrh7kyebeF",
  "key9": "5zCJak8aeWbyDbdQ7ArGASWCKAwrg538AA6Nwph8rAFm43WBiNPcFmei7B2Jig87d1TNVZF17pSBA6fYaCYKqSUt",
  "key10": "5sXvAD9zfBohvu4p1ZzZtm5KHTD2c3cpPeU1NMgpfbGtZ7LwCykAt6NtXkaiWyaNbsH3GeFXv2TVhADDDTTpnsKM",
  "key11": "3PVYZigY8e4E8NWyF6oB96poinFoZowGeAoDwMyg8mmSF4jtZDePvM5xqnbcx7Rrr4q98pKwRgwFh7WTzfbEK9tJ",
  "key12": "5vuqo2bt1M9TFsZWrUaL3XUQNUEQnu3VQVwg5e22G5rP6pgdmY5Vafu9QLAj2jgnhnfRskiRy1aUBQaNpFr39ZJG",
  "key13": "4sbhaKmx91URSrmJ57F12pAtdeBLDwAqpeL9TqKrkJUAnagCYL1QBbLb32jiMF6X8PscRPzDrvBXQahZuj197ZYV",
  "key14": "U3XwTtFR16hnRjGE6nTp3QmjigrRWrX22DkYmyCwz6GDA1QZ97pxMc4PXV9EuTQHdZQRKB1dRK6Y73rWffy4N4T",
  "key15": "4GrqaL33wQwtgWhLxb6wyXeRsxeQKc17UHkz34fwv2dXVDentXbYJ6tFCaeCAAhGyp1PejFwu5vRDGe3PSD5cRWV",
  "key16": "i3pTmWcwN7fVqRYHEFjT3TybD1snf1TKvGvf1vRq5SMtwYtZxkAerNPpUKz35Jgz1n41oebNU46HhTrpfJ1Xm2B",
  "key17": "26aj7bvUkY7D4Bh81mnEj1VaxosDVC8QnUE2YShjLmrPRidoTvtmmtnHgf69Xda4u9zpFb2Jqjr3nEiSCE5eXgFj",
  "key18": "hRrfzaX7YaxzYtsGmPqn1Vo1PdVZ288zyrtZwTuruHHahC9jyNpVmpPSVVHMh43N8HX2Rgq4mzZwUdyGwcNdWND",
  "key19": "2VXj1PrFzwg3ziih4KtgFUJrewS7SA8Dn6Jm7zCTYvZ8SkWJ6j6kmGsyzfVQr2aNrxzpCRNJGo36hedMDpgePfu7",
  "key20": "42N6ZcUameVz5gGT73HqCkVg1DP6niZmeVR3o3PRXPQv1V8ZJUV8A8mLPbWLvjKZAZd67V8Huhn6LbDvYpJX5tNo",
  "key21": "31X5X81prG8MtXJRoubGhT6nQUvJRnFBxYzkEzYuVyaNXLcDf1rk4vXReoNoMccxCCu8ZWLjWY1U1bwW7gG53LPb",
  "key22": "4ofqF9E3xN3iKQYTa87T6TxkEEX5k96UfakjTaiKGURCvTuimfcFhA5vepiSp8P7BE2DJt6nJKuC8e8fJiZkWtH7",
  "key23": "5ojkiQYSNDMrgoqkuz4cV3jgiYyLRHL6vCLy3nApyS2AX4tfA8KUtbjuyyArD4J2xxLmxRB7YxLCtJKnavjYfDR6",
  "key24": "3ZrdFVmt4VrmoXrsmEmXja5yGeZjVzbQRn5bg8uxZDcaH69EzLBYhGpAFUtgbvDBL4yxmpn4uC3377CCxHuAyQta",
  "key25": "5X17DcG5Zw4YsxDVRyL2pRvGNaziFgPzuJxJAJvbrG24Mub6TWYtgJGRphGKDhGZXsKZGeTUJtPma48kCeqzrjpc",
  "key26": "2jzmftKsWhVFznSp3ue2jk2tFSz47UsQnVHVMXPZ3Nwms1Q3sb1jtGjjnUq1ERHYTNr2bX3Q1RPex2K135mBgSDt",
  "key27": "2SX4TouUpCM1V5v24x9zmLWm5s8iTBwLFGcAEBPwVgmzqmpiCpqrKEhfksZR7XKX7sYe8vBwC4to4cxmfVVZc1kH",
  "key28": "3kTbMTAT5Jb21FQqXPe2FGpvSm35xdGeVfnGpYd6s7e1gsQ6raqs7ubdSZUrNubq87yTb1ewEcgUtmR4CATnUXTX",
  "key29": "5CeaBkkFnF14ijLgxnXpi9F2TWpWKSWTEBzAhEJY7NNDsAjSRzcSf2gZjsYUcS76KkkEgxAoJyS6TD7fXCCZqj9G",
  "key30": "4Cmh9x96PLC1N74QFkptR3U1NbRYwSDTgcrVyM4KUKRmZsAE8gmvunZ6sp9AFnMJvisqN43gZ2KBm4d574hu4MVk",
  "key31": "5d3WaJDgER2AGP7EgZLTCxn35RqAfvf9wrWRq13sMKKdgaT62JCQ6f8rjKvgxQPh4r4ZMPY5SqiApvLUBWvBUEeY",
  "key32": "2nnpCzteSR1YRnNuxSBDAfTHXgWtY5ojhsCLJDhSWTJ9gMiYiduaf7VNbi6ijoRKFTvJuiir8vP2eVoTrHangpov",
  "key33": "5N2yQSSsJZusQLiwssakXAhoYkiAv7Jv77Rma3HME1MTPoNVLCLHjcA2eiC2qesqtrrEsdfwuN8HQ6vURST9nzkn",
  "key34": "2m4c7hFqXGjn563WvH3YLfz7zxt8VLg6HYkqyKpYpFBJEJLY6hS6oPYUhZKGYeQMNPdfqpkgeKdd2ujnQdZtmRgx"
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
