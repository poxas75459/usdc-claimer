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
    "37dhYjPKGWkbo8zs1V6d4BxV2baAJSZj9GX8n3sfSTvfJ2PtiqG3qM2cdaKTQW4PUoBEiRh5oWXoVMkyYbKjfT3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67f4dCrtJw1DcqFKaky9fiYy4yfYYLqQg87FCRVErByY9W3VaTgYoeEg48QRPBhvv9K99PNZ7MuDC56WruWqs5W5",
  "key1": "5VygDtaZ9Ts7HpFKFng4ZFScem25mXd1bSPNaNj6QWyxbMHgkgdeLpPR7A7fvc2NtEoc4wUtFnKQsUPtHHP5SAfU",
  "key2": "5uizXQSsgCMteSKRvaDqU8cwPoa54d3j3B9gQmVPsqRUrGt34XcgtcaUgxuW3K7CXMxgQs7zeAqioPVTb3hvZ7mY",
  "key3": "4gW9XcS5G7fUqXTVEUzXWBQ6vKUphanFKumjr58JJRAbWbeD9PCav6QUak2LBh8BNiGs2JcwSsQt1DA7tWXxEAjd",
  "key4": "4GbsFtACEX9wF2HrTYuomQrAFzw8vp8bhu7v2BdLDycVFLzYks2wwGtU7i7baDu9vZgZmChDLP48NZuabs6QspLJ",
  "key5": "2mZgpZh64GbF8HQJtUQZYYE4PSrkVimZbLH8HuhhAtJwYixUuBbR5x6quMQrUtKKcoTJb7gD8YXhB8N4puYtqn98",
  "key6": "5XDwSdyBYsLyyyTXhvSWgLZkBL9enpyvKypqNQscQHQpPqqz7FzPjxFayaHWM7N3NtoP9dbkQhGMqVBEGZX8JC5w",
  "key7": "2aTK1ewoCor87gckeUhTxjnoCVTQ3QCV2zwYrG3sAEMGuLqWyL5wrF58W5HHzVJEQMdroaB7EgJa36ZkvjVFapxB",
  "key8": "5T9LZWNScceEPax36qrKqB6FrkT66XS9e4Hn5UDQpvorHxtFj9JqRpYTvrWYZ2p9x3B9wtmh4MTN8Lxdfmhyocoy",
  "key9": "ErytnicUMMDfHF7YVM1fiYomm9uAEifZyxvGkpd1fbvRLhB98z7BmQw67nutkZvByRdPvjizUSvwa1kCFWoPe9Q",
  "key10": "5VnxjNXoA1JEkbS9tKSktajpk7VRX1aEHKVfKtB1dyabNGatk1rmKVzbieRiLKqBbkuEVkUESxB5XL61s8zQFVuJ",
  "key11": "2WBCc3J1q62pxeNKVDP4gKbW7RDpqFQS9dqya8cMnMWi38cNbpbTSDpFmowXvTK1xFckJwpjk1hVsiFmJtodFoJR",
  "key12": "BvZRTvWs3apQyac1PKgnLyvBA79s32n3fDHAEzCzbQSrVLu5MiFsLXAvYosWu5EvxS1Fv4XG4KTvifTf3ET3TCC",
  "key13": "2mZ4VQftYfa6wR4HoVbxuVhd2unVc4X3WmxUbzzpGK4XMF2ytrsTfEEW8BypyKupwAMeo3KgKsxBVUFQtx72ujXk",
  "key14": "4VS9YekA4xJy2bnPyEwtZfqjpamYGCURjfvUj7JaBDuC4EvXrWnXVAb2B7HvCAeELfZiXz4cEsSYoTMTP3GderWX",
  "key15": "53y8gtqW5tnyKwo515avCCnvcrMDnHMDDjhPpRtqM37yCPiNM6fjpKn15nw4mTemdpggh2JqxWoht8EUXCFT3vsQ",
  "key16": "22hVSEg67CuZrdPXRQ8xguMgxvaibQic36jk2E5aiFSZyPDnXNvr97NfaWdSKoWVwmoxH7emKQP8xbvq1xbi8ZSj",
  "key17": "qU4RUdSrdLnpJH9SbTHWkz8T6g5tvUjGm1iLn6Md1nv35vNTnvcS8a93HBG2y1dEhMNruDien5f7Vm68pFkbAmB",
  "key18": "yWg5EYD9dvLeLLjva2o2Pg51dZaufKiFHrPB6qwVjuERqMnnYcygjLdB9DKPbiE4MXvn8vdpiKyTzf15Juk5bEs",
  "key19": "3jPHGttZk3tRQdUkMzcgsDX5BHafqyjvu3fuQgshBC2ekLYfnUZfP9LAmg2dD5jo8ez3UPZRdqsXKxyVijnPEsBh",
  "key20": "4PhmB7oCMTsBCKtzN37UR3ux3xFBkCWVsKioUSHkYdw5ZqtxTjx9ambF8hZLv69EcW4NCHz17Vo7MHto1dngAj73",
  "key21": "CJxkeiXL9BZXicBk7VmgTT6TKAvqeHMNUbtnrt56Sdzd5JtDLZ2GHKfGwCGf75Lfjbt6PehAKrQxAHJNzXNNjEF",
  "key22": "2KAoFGocpgvvvJ5qNVxtggRxE7sVaa8pAgTKeTTZLpxuBQJtUDgYYt5W3grgvJoHukMpfGSoeKnKt6ou4djWv71A",
  "key23": "4W4uoqMjTsNLERkEjhMzu1xMYuH4R7wvczz5DnpUY4h1NwZus8BMCA1TMedF1t1VdVVBrRjwp3dNBnAiYvEij4u5",
  "key24": "3HYkcVNXZZTuvPgaVCneY1eSFySzAtyZrjS4Ff8i4KgGVFoS1E7zA8pdGFjZwuf27z6tXMx4CHYczJTy1ttU1wfd",
  "key25": "4oexXir2Ungcd4pSCJqgLJw9M5oicGfqhuov8E9ofTBmJRgUQ2aLuBwtpgejc2CZC3DwCjtgeLGzkx1Pp8VYPrxs",
  "key26": "UqpHZzVRFEdreWUnkrocpKkHVVidXqRNFRecqEp7AgPxxKNvnvD2ai7QZTqmV9k7v84jLLip393qMW21pW8JnHN",
  "key27": "3G8EUkbFkbs3MVeSSTYRrGdVDR5oJcmTFaaxBAm5PtP48MaCSVCgMgNVY7heCwXB1dU52chdpQiqSfRoVGtARxB8",
  "key28": "2DBUyT4eRa6ueRZECiCKHqc8t5dw3YtkW52d5MMwurdwbCMyQo8UbNKVSewv3Hhh8NcqDLzNJvXxQngpRsmsRNj6",
  "key29": "66boABHuPZJkmMWYGHWdUiRN5cThxW6CugJW5GQWjmQmaPZiz3KT9WVmPYK1mg1s1B5zrVFjHE11vMy1qKyNF1kt",
  "key30": "2M97EjrniyS3Yi9YhyNke3N2XYJc5TG9Cx41G9Jc4Xw9BQkbssU5xUpp7vUL8Rwn7ufgvY1h9dNaPWMPLmYzHxfU",
  "key31": "FPM28muAvav1NCjLaVmRXKwZuBFoyn6RqzZtwdi5Vhy9fMHVNCx1HCjLqsWnigxEXphThTJD2xTxLdeNM7GSDkb"
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
