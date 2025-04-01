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
    "5q1o8Rb9VxV6VVhQiyH2uNZtYxcT2jK1QpYyrAs6KqbqNMK2jSunhFVspgsKVF8R6T6uPmJ5H9Mq18sXbe2h8WBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LTgHX88Mf9n1JvrLyMPAkSxLRfQeX5knJ3EyKJrxNoWBKHu4vb8ZK4sPQVeq92aZb4pEfE3uwmiJqeeDpAbRE7s",
  "key1": "2m8HX7xMy3oMBQmv6ABoEStMe9KdZ65y6FbXMjmP8qHsQbFSfPPD8yZWsns3zfooPgQt7SsEp4J2mdWvRfvnGDMy",
  "key2": "2VM42DUDyaoY8qTmN17WAnG4PV65XVTgDdEQ1MszaKgSRZmotcqCwfDJmDSMNUfCMKc68jiN9wvUqVr7AUxaUaUb",
  "key3": "TuzA8E3w8iDv1tr3YhkY9GqZ9fZFKgg1Ksr198sBk3NFirewwJe6Q5biVT6LmrUhPNbA5nDRTeET3HE8rXhLHV3",
  "key4": "4sCsmwEWTATyGpkYsRxeCwSUf7b1tVodJR6vw9fZH9ecomLMLUgdaJ91BKHejvsXXzEzE9XQQ7LszsX8SgPSNQcW",
  "key5": "MrgnxVPxXQWuG1ambnTfaLhEf8g9cnY1L3RGF24J5FFwRfZkJNj6GNEp8TobCuos9Ut9YUDtFgnQLcHSb52NuQH",
  "key6": "5MugBu6gmGBavye8sVBwygpthauUZDpNmjCGqmNqUfCKhmg2ddAR7jYcCk2tvWvGpyS8L5PsBbfdJzjQRA3TFXzG",
  "key7": "2GMvv1ezahsLxi8uUgSndzmkQGoPRBvzPKC8cK7U1swQkwDP87qc15JAtammR7sAfwu31szATLvntUo7GE7bzq6w",
  "key8": "chVUroHF92esqJXpdSeKPgrgGHDVhhgNKuEvepcCt6iECwqymbjHZGb1BwDKt3ZoWASjLDPPTgzW5xZv14RBwPY",
  "key9": "pVftn83eKcKrT3p1rtuKB8w9RSf4Dkjft8t5oXS9ziutRn1dsWSJ6Gy3yekhyJ9rJP9diUcELJd43QTvjTfzCwU",
  "key10": "2cqevjSkRCUPLpUKV3xqh7ocpFzsFHAd1euVq8XqtQjZ2wG1J2fs8Ai9UfKgjaov2JRPkfgqYXsSN6NfhmMyG3MA",
  "key11": "3ZiKVhfVD2EHHTos2ycHQdzg4CBpnMpBv8egYdPqRu3KT2PnGotkY9wMVEsXfUa1GhNrbj4uKfF9W9LhyTsvT3n9",
  "key12": "PDH5WLVCKzVNRpS8simP83ZvW4E42wumLRnuJegVdCYTfv2bmhkkzt2MBCwsuMenyfoygGD3BXqiDX7bmMTaJaD",
  "key13": "3QhfSouBEANhYGdaCA9nyZ86Kg7LDnQrJKmj63poKedAViLqj7drrZJdDD1dMPPvkiXEJCZHE7maTNSJXvBZ4iEq",
  "key14": "4qy2wE7zkYSYib41AczvHAvWLDRfioGqYgn4149R9i35pqjsCW7vqnKg2ufQzMjciQG2DWgnzRVkpWvDWZyxuVRG",
  "key15": "5ykaYCBfmBAsyFs5D5Sc1opNyDoKKPauzM4A6xqseWdy1fAauvLtjgcEkBUamzox1MtkWewxAUvn8B862GLuAE2g",
  "key16": "5byf3fLweL2mdLRWoo2s45FvJEzd6BedP7GbUa9XvSvZdUk2ayrxf6MDiYcvrWM751khYhbwR3Kiu2R6c4rDcUHR",
  "key17": "57GtFCc9dAXDeb7AwabEAq4issGDoHHCaaqvnJodE1JQtbCSZCFi22sKHYoXdX9oa2rwWMLmeWZ3dpdTBJf7cENR",
  "key18": "5JJ5AxgkpV7G1cBMeNyhpZD2qj7ZujsWPb5trwRgEhNnCLmKLuBFbiSyXWPdX5vpHexMowiq7j1V4rurXwuZVQKa",
  "key19": "43npyvVczYDY53gWPmY4Awf1SoFNnTEzqL4JSfPJNzLCRsfdS2D75jPNbhTH1mwpt1QLu6C8o9c5Z4UAprmsw4va",
  "key20": "3bFWMBonxCWf1JUeUJhZ6AQBEf6sVNTQF6H1ntDLdpBUpYJNT8sZwK5sTiua8T8JjszBj2AcZEdjs5CzJeWRFyNK",
  "key21": "43uHCebEvT1eNgRao6mHrN6A6iwRz9mdxDT88BNj6HGfcoFmQvvsuqqjWQiwufAX5BW11DwKAHcSxvMLeKqvzQ9b",
  "key22": "VrYweiUG4Eou419MyeTm2r54VSrCtUhjqUpbWbkv5nmZoRnborArfodUqpkGq1pA1QmkXeVDeawVYjBAjk38zJg",
  "key23": "3PNN6Y995Js1GFRakwZr9oQFyDPWtYWt9v9y7JxJ4W9XTEvd7KQ7Sxuw7MpRP8eJvS5f8V3PbCSj1LGeHbnvgPmr",
  "key24": "33cMQ4CnbapY8sYcYrLPtpSmKqFvxv7DZQCLAui7r85cafdvcv71EadEJCFnrSvL8MfxsVr6E1BmDbzpPZL2EK6d",
  "key25": "2yaJ42ugsEzQgy2HUphrmE6FLJe5wAtBBRBfF57ChhSCECthoFyD2n8ybjfaJbwn2A2TT6BaNumKQ9W3EXk3ABfw",
  "key26": "3RjWRP1oSU7mqsUiAB7AzyvnYg3axv9XgJPTxTgcUhTaHFrCoX797sBQk4vsxSvVDJxRj7E5LwxXMZcJehhu6H5Q",
  "key27": "3AJLGpd1vDY7f1hxs8KbJakoepsWM3Qrh9H3Z22kvrBXbeyiddzH9mHsFfYzFJYz3YWvNjES4ky6mjpM7ihK2h8v",
  "key28": "4i5rHVyKcjtaKv8oZjT3JsSKtjhnrT268uhBrGkLF6U7NbTeC7JExB58wUWxhBLpGeDEpHEzGAat2zTWdDTjaSsM",
  "key29": "iHM6kkfakDWLsvbrRinbo5MW8Wxrq5j5fYLsj2asTTBfmV3hyPbYpqtD5jxKM6gBrNcbWoSzsGAvaEM1iu1XzYd",
  "key30": "4sYw2TcJ1cjGLH6eR2L7EybgF2p8uFf3JccbroZ3vTQCw6wT2EgnK5Bm2gVdpYxMaw7nJK9BkbEEeggYGcGdTuc",
  "key31": "3j23gomRxZDtUSh6J5gc5igxkBVe1WfcW6Rupwm3Pa5APnbwFUZgvHaaBi6YDTvRc5k9yakpZRf9kzqGaBA8XajL",
  "key32": "5Y3W2PQCu7MqGHE3enns887CdeKipcKEMxSRRdraSZQVxq3fYjiqgG4BDP3czuxoRz6sUZGnVMEWkHUdtv2jzTom",
  "key33": "121iEzYUuyZoTUaRjDaWUgmjF2rD8yE6u21seW5APGHC7NnnkPjEmR4oW9YYxNHwgLR92f9aQqQKusEims3yafFo"
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
