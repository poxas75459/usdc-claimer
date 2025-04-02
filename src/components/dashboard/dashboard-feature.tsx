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
    "5UNU9GMbkKobJDqTEJjyc2a9JYMHMp79Rfm14RBPRva4KbbR941yBh6KTkpgYSF4bxqzjiW3EBPU69cUSCMHyHh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U8hHaWadFo7uyuauhbxLToS4kcYUTLE96nyRAi5iAxRNghG6qmrAuAyw3BWP3tcz4Vzfa6JwXvh9vjP9tyPprQd",
  "key1": "2ZfMBBYPxpQeCSbFfALsBF7Hmbec6hPptcKbMTNxVEpqVo7tnD8M3Vb81KP8EJcvnKdo1dCZKkiXKwRTNwkTZKcJ",
  "key2": "2ijKM4ecqzLByNgnQmwwka2PhCzyC5pFGPoy6tpqTofYHv4zh7KnsDZfdxpYYUy4WZHotQXMesBBeMQUGnEEGXxz",
  "key3": "5UwCAMXQoUbnpHW2AKHPb19c3jA8FKekn9Wdrg6YRYsr1xuw7xxXNvVJWVJpr7qZtHbR7sVJN8DD61sYdFazVdgJ",
  "key4": "5yvZrnBvauf2jE38tpkfzmMudJek8RtfwYyCeipBkz4CnyRBX6ocz9oDmqTSdULB7zTKwq9Xm9G79f4cKhfF73WR",
  "key5": "5g7aYWwYzjvPVgPbCY1SQZhw5U2dn9xnHv5bQvkL2dbvRra2CftRcE4Z4GAqQV8A24NRuFUnLcMSRtWoQUWS8Gu4",
  "key6": "5Jg4y2Wtm2QdheAmKCpnxKxxp1vsJK5QwyZGR2WugubkmtjCpfV2BYjwNpkdBSogUivgztdj9r8Cde2cmWyBejQU",
  "key7": "dqv7FDqHbE9sCoL2aa1K1UkwFm5f9Lpf2CEzvGGjEUmHNw5Z1r7jAGVArSdWjQnPD9cMwSd7Q456nizYUdtF99V",
  "key8": "5BBmJRxu4DL49HxVJxVNkevkTriWSp4mdu4RgvwuCSqg1Yh5pCpC5pChGNt8qFbd1kwDGYrbCuZuHyWJoW1FvqX9",
  "key9": "3FK5xrNrx5oYnYASQ4rbGqcs4YS3Xf1CLRXM415vnshzdHQpdgib1hN48dQuQbARfQVupqe3vXZEDFBPo5GnNSYy",
  "key10": "NuRmyR6KhaNz4xitNW14tJPGNMdxLRvsEFHnBtcP4jJRZsyYTzVqfwHNhAhc4izK9oLj4jVVw39exASHHHjE5EL",
  "key11": "3wxCPwb6E9bnUbMSrnq8k4jWK79HeXFnNpAQAcgNisuZSz2PMykkEtnjcQhkppnARMGbVec8S6qHKT3B1WR9p3Rf",
  "key12": "5KB6eBmWywPxsMG7wXUSkx8CC9VdcnTr2vEuTGqHxffS6MDwJxRVWEnDDKU7ftUdo813yq3XqtwjisGHEKjMy17H",
  "key13": "2PDozVPr6ySnoqiekD7j3jPqagxrz9FCPbVduE55gKoJGgdNMBDX17RhGmxZ6cgAxLCVtLfbEBDU9TGvdsb9j4Us",
  "key14": "4sUmsaBHSpqBi7yCNw9szDMJG6TryC8jEQGwkyyZRrdAcAuvmMbZYANyr6htvayV7fvj7ahuAi9EGqDKVwUdao5u",
  "key15": "zkn8mrgYkbxL6vz15Up3k4ahTkLevMnvvzVhm3ETbp2VgSo7LtTpybpJyK8EFk9XdoCD3nq1wqMUFxP9zSqJqqk",
  "key16": "2xLncLcxYjAUkUETAehgBfdGtP56JXN9zDEkAjEsXsi9wEaHP4qsQxsqbs9ypvBbjGfM285hG5GT8DdPC6ykjLjm",
  "key17": "3d73XZjrJxUvxX7vi7haDiKPfCQmA3h59xdszYzdJsFm2Rb6qGRqfH8YNgoYp23s9pLtdxzfyGhqJsDPZWHiWbTK",
  "key18": "5FU2yc5w8ktsLrWxFtVkrcYRYBZ8LqwQo3BWWaDoPG4j61ZtEQ5bhc3kBByAWP7U7BLhUAw33EZjgZemFXGC7k9F",
  "key19": "5zG7GjDHLQSdrRHw6iNznrpHS8PngxAdynw6BE8jPzmErnoXP1KcQYvG6fCXsnCcZZY2xPtDuAjinwC1Wp59Bg2Z",
  "key20": "2Nf4SDQ1n7u1oA6s7HBZHBrGXFzapSRgFDXd1KqRfkgWjWoEzXMTzzsoboJJRZ4VNgewnakieW891WV6y3hTCSWo",
  "key21": "3KQLZdyEzrwNHYi1TcZLzP8vWCsrcTHRsMvR67FbPfaBEZQT7YLNyiZRxzDT9zQmvD7ETnBptfsphFR2zoJkZ7hq",
  "key22": "5u9jtDKMatBpzyH6KEbScwHHpd8EHKKVs2ynKPyj3QS4DAxa5bDtM7ohykwN4YiW3ndHiZTUoFNMH5ksd2kkNLY",
  "key23": "5j3FzsjuPAvLebbS9jus8gn32aQfxnexVTnx7ZrQ4p2Ec56gEAGammDu7tHpTzE1PMZD8m3n9kYUq6sRF5bh1hxR",
  "key24": "31drKAfm4VZCm9Cuy7ZUCBNE6U8HBxc9brbA2dd5hdsdHJrtrS7VgBT7Rek3wMGee81MdLvURXFmeF6ieKsvsd9P",
  "key25": "4tuoZhnoDJNKQyaivAUnGLDc4MCwkyXbtxtSrvdcN9zWMZSkxCjTBrgXRUfVCAXqA5PjT1wadcRs6B5EehdEdKoG",
  "key26": "356CxxtjvERustV1H1z83NKgSGDL3J758ojbzptkqV2jD7NG8Qj1PWyD4Mqy98cmK6NZEQEpVdPWbGpZ3AWa2fU3",
  "key27": "3qTXdZ6964rCt4oaNHt8Fc1Frw5iVUxcq6vQYvkpfRoeWJV12bmDqZ84wXQ54WiTsCmVJU42NiwnLNHtR8n5vMR7",
  "key28": "4cqkDa2j25LDZGMUfom2Fddg7KVk71y7Mxctao6WG6NXkYAU4VYVZMgPKJn8YhysxP6DxchRbwVqh2mJYfJWdpnC",
  "key29": "XaShokbaeDuUxJGiv1duGqBahvHpCk3M8diGoX7w14Y2pdY6M3cCypj1jKdMN1cQRjgire6h6ZXmtgZTy3gEpt2",
  "key30": "3dRzvcHcL2gTZwh9ppHW666o14kM14BGCCW2NrKgtMVgrVoMzLizNmdbgurhpMuCrGXa8XUJ8eZ24bcZVuiepff4",
  "key31": "oGU8wxsZ82PB4cYXDNsPGSfwTiA9WcrnxdRPCkGwnDFfkBGYz8UWFnZFTY1drDWWmAXrfVgt64WYJPUtU46v3Nv"
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
