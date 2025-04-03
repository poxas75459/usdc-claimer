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
    "29TJRWFaPFQ5jyZMxrmhHpq7JBhhDH2wHQ6WvHgcA8na289itVBYFJAmCGhicRCiWRbiKGXq8f7SuY6ELvgwNvd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AGjD5ZqMUjAbhPxsuDj8y4fwA3WNzFd9f9UGX2k6N5qyb11d6WaBUV6WZAmHSHQpmjWsC3uW6vwDHYM8U4nFy7s",
  "key1": "51dBvpRL1GLsnW7KQLTogQ3JTbB5v7AU1hKnfMSvGpKzZ7rwJi2aSZSF6ejjtsxR5xoR4NSHurhXXVxL4SqePGGB",
  "key2": "3h2ou5jPUVmnERhkMYTnutTh4nAGAQXSd6BsaRs4nmSchC3RWSfYAb8h3zCVWQg8qKcaktXHYwncGUshv1SSLnJo",
  "key3": "3DFss3X3vY7qftTC8gSjyVwsXT3kTdt7tZHyY6QPGhbnQixHx2fihNLmgaqr28vGVqhv6JE67d18f1mTYrkWWS4o",
  "key4": "54GKtAxcQVZPxC9f75d6gxzAKspXtQRiMzR5EN6RgHHDzuztFVH3h3Z2UkE5ehU5bkfyGovibGN8NnhW8DXjMUrS",
  "key5": "58df7tjeBPc2rwhY9heMN3DpWJFR46baymnk2ni1SSjeG1RAzYP55NrdRJ6vxbnqi6FBREzvqLicuLcVgNebuNJf",
  "key6": "XzVnPzYfDZfcaAePpfph5QFwz7fUbvyRkRmG6E9YqBbywu1nMq26WeExtbc3bEKYscoeH4zf5Y7nvNAEmLhTJJD",
  "key7": "41AgKm3RvzySMyUWXFLBbA9SirFXWScf1DcdUhP4dYubPS4o4YLBYGDmyzokEqGpaFJCWHYFYWU3VvdF2wWdXjh6",
  "key8": "2hn21dJ2h9WYbGjUgSWB96wQrcXbrLNc3Z4TjcvvWZ2uXAE7b7NhH22NW1eNsLC3N1TqK64RE3pL9Y5YmhSkNAyn",
  "key9": "5piwbemJ7wHUWjqXRKd9Y5BuVU3cDkXuN4PJu9M9LA7rJAYFqy6BtGYdNSDQUZgK491eRzAw2yspu6Sir3UNp5gC",
  "key10": "5KSdrg1c23Eqp7NyrarSe7wdKAZDippkuLbZDP9qhEE4vumqcKgoV5VsG2JDLnQ9YJo78Yiua1iMRrMrvUUjrHSo",
  "key11": "5BCb5ccbQjnh1nVTT5i4CDUdgfbX1cRkwKX7SFSnXhaLiTUr64pK3FxRn9LWNXEw2sRREEx1QQLHCX5BBxorut5o",
  "key12": "2XE45b1yAVtbrFDrWLuuWEPpBuM3TcYMf9h631xeBopwd2HxyCNowefyd1Uv9MoY9jQz3d2KbiBKDSeFgbDrW8AF",
  "key13": "2Zxvf6u2PmKcgs7zTJj6h3CaWu6CJESm3uAneZED4jfeizhTMN9Gep2f9J7RyUR1L57VHFsJ6K2HhsJYFbhZXaKj",
  "key14": "2GLmRpofrMMscQqCNFbH97aoUqQtesdR82qeWAK3G5X3Gsjzc2Cw2X2C2wvMpcyWDbyiLGsvpngMJSYWtQQrxND",
  "key15": "4XPEpWbQU88huYqFEtDsciNg7bHGQ6jZ8LoWnJtxRvmt84FDP25PyLoUUCJ2E492JbDWiyjTjPi36RAndidEkmQU",
  "key16": "4o5bqAXR9GB7zspUhtoZXWMZQMrvxk4fSwZ1cPPX1gQAM8LEvgF1x8bhp72Rn1yv3DMg8MT6v8DLPAN8RLdcbYFB",
  "key17": "2jSuBwVPMqPhy8L4oas8qbymzQgNFL5YXbBTRXrsdu7juTA1vnYJChsEsKzN8UpvkHk6BqpXwrrUT5y3r3G6WTZG",
  "key18": "2moiexsZTY6CrsnufPLCeWo7ppCpd3CS2JM2J49BV5zZgB7yiHWnPPyPzN4J9hG7RFwt9VPJwt6x3wi5LTfDRZfU",
  "key19": "5NW7qjaQ1DuB4eLBB9qrxVb2z2fTVYWqhKkHXD5j2HniLxRFQ1W4bAvcvGt7vNyhsq4poVEUsX5osAqPikTqe2hr",
  "key20": "5Y4deHYW8okNkTSRMpyeg6nGb3K6HVK4nsK1fZNHdemugRWGTYdeY94R4wmzhYjMwCGs8eiJvbMhWvcVwK23kYcd",
  "key21": "27d2ZSDd7S6QAajpB2YMsMZn4tX8c2XnJFeYDmEbBnuU6mA6QP67maPZpMZaGMQ5FSKQwZwUHPRgUX66ckfeJXhG",
  "key22": "M5YV2S3ZQnb6iP9xt98v3bz6WeCwvU8trCHwH3n4BzigqRFUpJFM5euag4SFnAtpVL1JNfjSdycAxUQmMzwmnDe",
  "key23": "5QQLxTedBTheeGsCbZ5w5JEvJSyLPRJn3RQ8a2xGtoZNycEwTRr1e26nA56nWcVKEufeZVzm5TemoDioLZoLftvQ",
  "key24": "4mVyKzcXtfbxWiVMh37A9YX4cBdTHXz34v1cBDkd1wnUsQt2Z18qKqs1FNuNsTsvh1HxvVugqxycna53ZyhmXc11",
  "key25": "tuh5sEtwdTAQi13gp6NttSeUkkvos7dJTz3jAR8fmxSgJ7Vnn72sFz77vP4RVvEyVrCfSWPp37Kagy5cGaWi9ZN",
  "key26": "2irUutcsjnaY3RwbcB5kCwPPjRyXeuiAAHWUjVTtQzG7gy7Hh3Mz5jgcqKWaz3C3gFNJP1bjqMYpRmaULoL7gibR",
  "key27": "2cmBw4LkyTuc2m9omfAwWjvE7gCHWs376ECmxHitLkBAngE2CLK57hA8jN7SwtvdEUxJNwzwAp53ESo42qCZwhzY",
  "key28": "QMGj96UfJ2Ebfdazd2yf2yNnWSiLw5gVxhu6XaXSG5vmVWDyTKY2Fr93yAfoAxj31VSKn4N7rgEX9W6EcALLNTw",
  "key29": "3r4xmdxs6LdTtbBF2DepVuotXEryVPKVvN88Zftgu3YfNMUSjbi1PUkfneQYQMGFPvHrpkhE7bPKz3zFsJdpehGF"
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
