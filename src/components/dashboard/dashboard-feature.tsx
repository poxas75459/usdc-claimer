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
    "2Zthmr7XhZTU2DP4actFdu5mJcBpdqaC4RHRASvQeuahSDiDqitLUsGK3WQDWfppxPKHDkeFETktWNsJ4EcLhD4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cGYcUecNy1cbfcEyuvmMvzCW88oDBjMnyy4c5BGbaKZUfxcAszVo88waP91sekr6W1GFReCu2uej6ctTNQGffpH",
  "key1": "57ndBPGRrChTrqh2AsNhyv3sn7Kb2CcV4H5RDXAcZYAEh7fAmDYWzrjHFAaLhASSX8wdX6XSqRf1KjALZMHwSY6a",
  "key2": "2Qyvk9JCdgADbYRYuW5AdSC1dyzEteJ7iccWqUjkk1MBvYgB2h3EqewaXkFGeJ4QgbqhDXFS2WFGBrxHtJzYkJ6F",
  "key3": "5PkmePV9Gw9W5dUrVvQUPwRKoBhc3ak8bREyQV4LV1CiqQiRjaEJrTp1XMGSbHwHZSfbnxe5eR92Two1QNALcJdB",
  "key4": "24GHCS9fZDgh19mDGqPJ25XisupSbUwRvD9okfSvX1rjLgvtQqv1jrKd28cWtKoFomS8jxePN2CcgGheNcqKhZCW",
  "key5": "4TwZoZpH7uZ55QHDgje1weNWqrVowf7xkmUcxzVd4KMyUHCy71GanTSzTmdkHJuBXtBNxxJxWcaXkJEaBf3QZeki",
  "key6": "5tfF3FrVxF9YWVFXD9DRVhL1CeyC2bEyDg57vuKWCxrAswsPwkKzj415pDMidqhKustdbGtsp7kX7RBnLwmfkcV4",
  "key7": "4BGv77aKEh7gi7DS3UVuXiEmYLyz3yN9Dir89iiLnFcGQ1qWypq8rsr1NywDMw3X1baFrEQ2qoYBPoh9Jomqrdf9",
  "key8": "34reEnk6uQr5SqW4sn6FCzrhBUW93Bit7vdvic6YeHLiXZkKw7h7Y8Vh7U4noZT9GvZRRDyCajcvQw9BFFfwzheg",
  "key9": "9Y27jAw1Xk9Se6nbp2HxV1DSFH3zUqSXAhHNrCp41j5sdMKtMEWYhxVZ88EsoQm2PX73STHubAg4vNZBHLwg3MP",
  "key10": "2Cewk5Z2x9EL2yZYWxB3sKdTitcCfjmRYw64Xg7qGuNeMBCyhuBY6uwZN477fB2u796UamnHvzr8LrS4yZqCdgZe",
  "key11": "4suyTWRNQkX5CUnPiC1cvgZvYKPBK5eXHsxnYWvjy48MjvUKd55NRTda93BGxBTo9qRWPuaFRmBqYX1DeYaz3ug6",
  "key12": "2Y5RJoyWqFJtCWyRxq1KGS6QH65x2ZYQZMPRbhrc6US8mNrHuAkfPFdmnr4Z5JeNQPngiX4x1Nbo99wxCLEqLPy7",
  "key13": "5aTi6vfN5QrgjGwgdNsg2ud7Tzqecqo3yMNr2vHsXN2Ag4CT9NoDLWUjnE28iT9y4iA1kEtQ525SfZ5ccZVegSVq",
  "key14": "5AwgbDB2h5XaK9JeZY8e2ZkMDAQ7tv51EUTVxxh2yNpXp4ijcy9qT91LnoKcvXfANz3quvXE7nSXwQiFSxJpFRkg",
  "key15": "2w3X9sW5S5q2XeLQSZfePVTYsjSwR7SRxXjhCCWQ9SJoPWw79Np5RsVjNNPfza8DLjHaKgcaU34TX44hmwSN1jnY",
  "key16": "2DjRvFoPVikzPWvaZDaSBaZPFx69myCRUKra1A1xBfzoqt4c2yBqMv7oz2KGQWfcocpHqnUrV6ugcH36uaJHQSRY",
  "key17": "vmSRHWUvWtr5aq5KTPRGcWdQHGbWiwZD78JNBJ8gpzSPtChQYbQFSm59L24GDNzTH48qo5ru2ctQz5c3jSbjrjr",
  "key18": "5yXXzhHzpMsPvqvqkoTRLxfaXFHt6ZP2AHr3ZEWCGbrAkpkwXRVCZJLA4usf581MZmbexvTfXXut6ezttcrxMJTr",
  "key19": "4bppSp2sXnXQ7A9HwXqsUDDXJHdLCncwYWZmNa4sfWWkwPYW9EsYbXDWWBxsuTNwhs5QL7PMPi6c4adXJS5KNqnw",
  "key20": "FhXfFejmQWVMHtN9vT76d5RBB44MsvMJZvzSWMgkjVdQrCsiJgTAcCkCinYvCUd9U9CAFyVPt3SLEt1yKPSgm5N",
  "key21": "3DgHHnnm2jKq4VjYjT18MEN2QLtdyvT6EtwjmP5JCxiVnNZjLsYQjnuwampaynA22sUUHDvVxZ7egEiQBJZVyg35",
  "key22": "4Ket6ThKaCJsL2q5BHJDnqgbHUuieE2nNUVXT35PjU4BjvkgGHCJfGrtCL1fsCr3bLdMZLCUhod3LNpmvMw4MjJB",
  "key23": "24Mtbqq65fCe1XbWLiCEgdfXtwuiZkjYK8c63e6vqB8eLdm44zEeL2azBCzLz9zm4bc8jhXTviVWv7ZmgAcaWvva",
  "key24": "5sHwLdJdCjEYp1AXzDCgELRkgFSdSiEfk27SoUPKkCUD3mJHinVigyNKvbTNnwpZ647yeCufVsKmxrQSeNgHFBpU",
  "key25": "5GmPVpbJAZtmbkphyH5UQuPfTqs5PRFTYfZ5KgztptqtjMN3pq71uSVbyhT6Xc6wqufi4qW4QvxGPNEQA69Ygs93",
  "key26": "296rCZicNDjsDHvFQ4m3M1ZSufZ9pg1cFHYNiCtC8Zs9vcwNg8EEFzuVheHCWnDGA9bSPQ5YkWSv7UPVazzqLMgP",
  "key27": "3eB22kcNZzHgn8XnhYpuDd911GK2VdELTRuTJSsPRKzMpnuadafYuJxWh6MetNHcaMG7qnMAeu3jfbLWChuSYWy8",
  "key28": "45PnC9g38gnd6qyLCyKHPAYX1wJ76QrriDFC1mAv8SERYHhbkqy2GWxcJqJHnJ5sme3qMXiB3KxBchE3GMDdVsaX",
  "key29": "wxEnontbkCdhFUY1fHPHcWejwxjuTyp7JYcnvbu75WjWmGn6rbEUT5diPKvWUHVYZKL854Qcfn8JLCpzY9ALm6N"
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
