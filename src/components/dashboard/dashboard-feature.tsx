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
    "3riBekbBL2aqQQvMjjLz9ALRDb8GDa68sLwPTz1NcPXiEH29AzWzWxRJrEBpX1Xh9qN73NZCYTu1xCaPrULXfYho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "587WiRCb3zCYpBGGZ6VpBPg9S6qjLrPbQLXM6ApMfFdxQBhSPVjbhjy95oRTSaLqx8QDvXBPnEtKXsRpqGXBVbGV",
  "key1": "5tk2Pu5pp9wxeVBc7njRbydaXHZicpm7ZsyZjdzycdYETEapCrRs8NoTbSg3mY8on1PouMJqaVNPtXiQwq1wSzYD",
  "key2": "nB8CCXHN3NZZit1dPqoxNVKR6L9N7wsuftPznLS4LGrN9jyaJwgeujLsAVNx9G4dKthkmWoENPFeJsn1Pd7VUff",
  "key3": "TiUpBHLqM13GWNS6xQ6hZM2VxqguugFEXQPHgCwVWbChXWBKjzFcSAybB9wtxeGxuxuT43uQbPLUEWvDryHZU4a",
  "key4": "4p9xoMw2dAKV7VMSVGSCQj6sMnHauhi6iXwjPH6PoFqgvJPFHmkMLurChJvPm8nzwaaBt15HHrZtEgCBzQ9raYfc",
  "key5": "hrpBQYRVM6nNKePKQCx7skXagRqpTcifbZ2SiCBik6NhtLQFodc8UgXJx3q8Jygz1xNomYRkTyqPrDcbqUq2ovg",
  "key6": "oLHSyJ14RpjzhVSftFvktf57gRezVgcx6rVrSHrXMPxXrhoA4hAZjCWvocu1EKs86yjd7JTJSQTvfM8xVSYM5Rp",
  "key7": "3pLQskBKXaxhJXbRGvBrrHWLa52NgD5f3G2vZXYYnbZyEeCFe8b7eNrzV5bcG7gMFbC28kwAjKa4sQkjcrpHDMoL",
  "key8": "1YkSG4Toay19A1Pah8WmrtJPpmp31HDvh1nXKwDa39P3EQwP5iwTt2nsdi3ssnMVVjrtMcyCyA36Nu9bULjBG4k",
  "key9": "3UCoPtQ5ff5HLfZENjc7HUiaLo1vSK5STaoNUz9gzKU1rn4AHTCE9qJZrs7nnvV2g3FpSt7eFX1trPo6TrRTp8hD",
  "key10": "555JdGk84ZzKjPzyxGcxYySzchJBun4EQHCbku7awmTRuRMSsiB9tkZLA4DvN287mJjoUDd45Fbr8yyMrJeSoBvg",
  "key11": "2m1fuLvT8XUHxjX8UpXzgTHvL5K52BSjL39obBTdcyaeqEcFy5m2PH15qgWKNp1dP7XbwuZDNp76u8oPNuPy6VFo",
  "key12": "5EV2na3Efy1cBt5o1R6EnvdYRetVEYRKkP3UPMc2zMH6MYysTEEEzdeRHyTPtaWyRrMkSJZ6RHGuSMoANtPmoGBg",
  "key13": "3pfkEPkRQzuwSSK7AfJHU6UUq7n1Ts62tgzMcZLvwz8HrcB9MpmFaqeULBcX3UMj6vSkJ74DxM4MxZY3unNYNmuv",
  "key14": "2okFHU4LV2wppP1qwH6yPwiRZkUmghpXvyyaS4WuKyBHmbTMYQcex9dr8PM6DQssQSNfntgzKUZKyT84TvGmTtNJ",
  "key15": "5X7ddfS8b53vUjB5D8ciiqFxsbWUEsioabYEVTLkAaJgHP8J123XMemmoaWqbKSKhtZSb8Y8Wf6vpVv9drcCevtj",
  "key16": "3C8NtUnDQ41adRsh4vvTnxXiXMdW1CuPxye5K4ArVqPrU94xJ6pvWPgxHeNTcSKqzgpTShGVPo5EK3WTMWq7PF3h",
  "key17": "5ZJ5f42WcwkEgMku6SZmZsgTpMJ1KCCX8V4TunQimpauYwAboeQzVz3JLQe7nBSXffeoRoLWh5XAgAVs7UUEx6Dh",
  "key18": "63yrFihbWY5fYhHqdQwgHg2ktq8BU1wZgeyiUQWuTNGvhYJVwK53mGKvrHyv25XxWjXhMrhq2LL73eRWSkwVcxqo",
  "key19": "3ooGtF3WxLMjM75qea2NLXuSEHyFqgEzZZgQD3PQDHnDipuhSnmhYeS6Qm78Y7CXHKtXWaY5rLwENNBWNibabtvB",
  "key20": "UUiPFurs7vYo5yK7CDknWqkdAn36Hb81ZAE6XpKeCvGegSa7R2Fz4zcDswWFpM5ueweNW3osH1VxoBwfLSV86aa",
  "key21": "3Nwg4BZaj524CGLXirw9u1NjQH5Jk7333HNq9zzXRfuE8fyzDVHxMH3yc9koUw3mWGB9EhRkCsZigqXXPtzrfKU6",
  "key22": "VdQfsajorYYh8XdKvNfuPNXUxhLd7cGSJxAuB8Xg7uGc5hXgLdwFQ1m86b4qpqDKG3tLe7dh4PBn7zUrMeSukFw",
  "key23": "2PfAnemb96yLgUk3MXdnQwtNrhQKJY84yNnriKWytmER5GDYvJCcqxwy7ki2XBmre89aRT5D5WiQrYeVSm8e2cp",
  "key24": "RVbew6Rxs1u3GdpYGanza4HHK5ehJWLRcF9HE18AZHyyKG8qpsfsNoEmapbZqMVgtfLPm5Etx6FSh3wC8AdrX8X",
  "key25": "33ixrkoNwRv1y7FmPECZxau7rcyPLqWGrWPQGwbxmGLfXgUWyKtpACHeV6PXDt5pH1aMkcPXr8a1AKPM48FxnwEp",
  "key26": "54ASnYtMsixWWFxt8iRGLMBxvnyitwAfFo9jSu6iWZ3awYhLkmPcrQYQ3DYcTC2B4NpoYsrrBJQ5bmBHLGhcMUFp",
  "key27": "wAaZatiwcHTjZMfGRdRaoYuHuUy2GHMPaGiowW92F4HPvXBFY9E1jLmSo3ACKwPjJz2DNXz7nGPa3N715YP6AAx",
  "key28": "jG18upyqDZb331w7ho3haS2V1hAsWSaka3dxRNumhkmqyFqJZai2Wa9TCaFmB9bWokt5Efv94zPRdQrCKac6vRy",
  "key29": "678q1hB5jXX1ZktJKBQu2rGPVy66dFz51Jdk9htRRnpdJdxRYW5izuGF3afS1TQi5Nf87SGwztFLcafHqkK1B6PE",
  "key30": "3E2etch53Sd2BKURmxxrXdw42ekd52HUByaKwpmUMyQVFhpka83rrX4iGsnt4yntHgLJz7gDKJap2eAvKsDJSFs1"
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
