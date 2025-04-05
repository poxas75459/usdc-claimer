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
    "3ZgDA1Ut8pkt7x7dQ8rUMy7HnCTmNFcta6qzGe8LdfcCYKhgULwcCCZZxq427Y63H9W2SGRwT5f724SDTWhQt7sR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P4yHucXDGMgLijPWqyrhragEAfPe1mdb1kk3d35wQeXYwcAMjrxxdAg41N1wskhUkANhuCh2sa2yDEcxXqi8u5r",
  "key1": "yyoKuE2W1EA3MNjrJgBXPxbEpADSYhbeLJCsVWmnd96Q4891UTcVtSrrbMuLgi5B6b2Hm15Vs8WFTNPcJ2jGLX5",
  "key2": "nXdvRHb4BHLsvKmgFh7kbFdiJVE9UZ3pjTP7bGw63A62uQ3YEFRMPAvQBpd7Rqo4y7QhtjBVnjNy1UtF9QJH8xt",
  "key3": "67JBwsJt3F3FP38ViZS3szjzoMpf5pUtXETkbjheqCbMdPacHrMQEstwNzQXA5uorg9Fwt9FC3ELYmVRU5z9yA2N",
  "key4": "5gF5q315jTqp5PaHgfLosBf76QZB5eMcXnLihJHThUVd5VYi8tUEpRkKt97hmAGYmkXwizpMDF2ixp4sHDFbaFbg",
  "key5": "4j2Q6FnSn7aQYUmmXHsrkiqvQbH5G7z9bQzBizfe2KzqTMcoBqomaUqqs9si1u5WMWYpYkY8RbakJo1r3bHvGTSi",
  "key6": "5qQtQoiDPpR1dcqeA4i9AAq91SRLDUthSRaxG1BmwNkJbxsY4o3xx9oSzn7DFopHpkusQxbywomjPHC2zNq8F6ks",
  "key7": "UebcPHLqXZG2GiegnaZxgYMXksvmuVNktnczGnCQD3nCBNNfqEx4YX6gijvnRv7bEnV3wrobatsPvnA5jfVFFnk",
  "key8": "43MWQzCBjkNwuJm31Q8acMr3gKwnSfN72WbZumZGED1VU2ZkWtgndVUCfZF3XShYANe89pzi3tjcgNGHG2PZ97Gc",
  "key9": "2mhapumKs74CfZDwvYQtFeR4Ttnd1zXsZxMj6evUf3tEFHZhmpHQ3deRrxrsuUTnFqkhi5gjETgFhwaEU1KVwUkA",
  "key10": "2jWwGJSGNUi6t5bVXyDM7sDqcwQo9eCm5cHdNtzHd7d8jMf2eYpTJ4zdx3KJN4QofQg8y2nSKHpxrtwHvsa4nfBF",
  "key11": "4bSPssWgusTBgPbvn5J2Dp9KE32x9PK3sm5VjGG4YucsmXjue4rPNEwJri42YxeAjMeBWescvC2jVYVqCjf9UZ3C",
  "key12": "5wosa67aEfHGpBqFv5LaLBcXUBraR4DTzLBAjhZ7U29MtnfHqz3xPbqVuSxmPqpBi5WeR4JVHhugyGqXYNZeS72V",
  "key13": "4kQAEsAHeL4i3dhXeZqBYpnfMsqYvxbyZtm4PiAyTyHarNdwcesMSAonWLtKQ2fCw8bvamVLD6hbZkzFAPJGrCLe",
  "key14": "5yHoTM2Si7rXkRN7YrjhJbPHn6EbyTdZn8mXj1MNFrze1nbiU8bXFkKqJ3BLvX5GWAqnbjNwat3rt6cHZ3oF9Ws3",
  "key15": "Hk2AdtPhj9YyJJPSwu4y3BZ27jN7CsfMtANDD6TjhXVx3McfcMh8kbe4oVK5yBvdAdgy2LgNn2b5ajp8CzsNuyT",
  "key16": "3SXC5C6bYrXsHmrccYCQVzRmTRZ9gBbqWW6JLm7Wq1xkAoXHoWWcKqSNZZfE2YM7MzQjzrudhSBzXVWw8GJKQntm",
  "key17": "4GnqBx43QxV1aqAJXXvh4E2kKGRXLhT5X5CF6VZGJRqsa1WEZ6iSmWuagYGkac9mnLQQQaxoxW8Hok3m9zMSS2ca",
  "key18": "3pRtnUg6FrXitoKa2hyQuXuzfrNmS96Yr5ujghbDovPXn23xCVPQGeVYFXH1cTx1hdd183o39ajKw1eMTCPXoLxo",
  "key19": "59FZEzU3JTZA1KcPbbgGXx3HnJqpNYrxh8BVLqyaTxXLozUwnbw57VdpNrShJj4txr2TiZUDXGqhNmYZqH36JKav",
  "key20": "5s3QidUdgMize5xLDSBVn2c29EkbEGHVpavrR46B4kHJ7128YLexFwMj6SG2Jd82FPGGtfrxhMZUyeSqZyaHTjbR",
  "key21": "4hQfPMyLw5sChZWzbLJCpQzhSnWoMnFJpBjUDpgWeaHm9gCMhRzC9j1Qmk8GnBzzs7Hyczs6uN3dDdw31jsYGXop",
  "key22": "V7UGnVff3U8z72RAc3ogbf3YfDpka8gDrDjCtZYw7B4Skq1aqUnuGsmSZmMbG2fCTF2gRfoTKXsyu7ZNb2mSwkD",
  "key23": "58hTVCQhQ7VEZsDRqxMLJYt9yaPVZujhNHJVciG3aojUWofVwyQmGtA9E524TZRaZdFTnXppvTgi35pk9mKXRk3E",
  "key24": "3cehZ8qKWuecj9qyvnG9QG6DNcVWTdMMmkAiuYfJpxEfJMLcU4PJkKK4RiTDnoHqzXBLe73cViyUQrKZwd6ngAKb",
  "key25": "4UZTFdJBHg7sGEPxNQacdsFetX71grugC5o9GPAisv8NzvBhQwBVvoTuAHQNVLeTTcFu9RpGAfrhZ1rELnoKovka",
  "key26": "2TQcvL1L3VyZjrqzr14MPtCyWBVEYKZ2aGg74GFR3AYMfs1TguZg7xb5vfakebUJm2VdkGZxaiiJqqujXdpBk7ZH",
  "key27": "4aR5nRmdYkR2baMsjTinwzWLEgmwuNjDuv8gGTiy1t9HHRs8v121Dg89TadvvqLqQR2iTre8e6BAJaEsLMjPVpPc",
  "key28": "2yoFdrf7qC9y8rwreNTfS1z6sx8x7XS6mpzGhccBV8d8PjNYCvRYXi6bYNAicRaqfj8sXvbMjKAayKx4gNtGt56R",
  "key29": "2TEoa7ncYVAS3YpRxwFG4EoLj9QSmJmDJ88ikiUFkoevdvwyRf2Dh8DcHFmdKVKBnKh5tvYSaiSM3bRV2WMAzXFN",
  "key30": "5k4rHwuc6EpHU7fEawx5Vh4xWkz7WsmnHfNXckToHsqRhs8S5r6eE1iCgRGiEHefF7avk1oRzzcNqT1hxgJ55H5x",
  "key31": "5LHWKiexuPvJF9wKT3VkYLBnsewuL1WjxnokG9QKGd4R1mZa683jGEYyhJxRMbMWicxKsTMocPaUksR4w8DWniWB",
  "key32": "25kMqfxpLHvGbw7kmDauEYiTrdT13gDwM4Z4ty19Fi1SnF3XUkJ9xxDJKBXuLkNhzDs46usiYhqXFQvorRDPiLQE",
  "key33": "4KPPQTVz1UBcvngLscjPFKrHtnu6X8NBbMNhEfzQ4Gj8BSU9JMjT83FjGEp1qzkiUpNMvQEwJVrWgFHhPSx2y9pe",
  "key34": "33zJK4D1p4D4K7NcXJ9C8z6ysXcRQWNXSSz2BeB5fp96gEYk2FwoxtBPsakULpuhVJUuKuuZGqSAcHPZL9gEwmYY",
  "key35": "5EuYyovyYVLutAyGedeCiKJXsaR1CxQz453WQxgJtE14pCsirTuc2WR2DJLmHk2Ck87mKbLa5w8bkUiYUxGy3kgX",
  "key36": "5frpMmrtVn21vHaLTrpXa55dsAHkfFZHtEWmwXqyDDjrwMW1ojLBcid5dUiQ8aX3x17tBG45sZMsJftf39JMrHm2",
  "key37": "4zhqJBrH99quh1WRccKtNXWyQA1tj7XVB1xbNVMcezwMSezC1zuNLr3gYHJeXKr4czUcEN4a6uX9qqjkELzmtfb8",
  "key38": "3EHBcJgxdX56ugdXgg3mAgeXY196ZQzBrnCiQHL3wbpGDSv6hoitVev366qcegqUbGPokkBLvAHnY9DjJVHZpTvz",
  "key39": "3TULkoSVaW5BrT6pPKj6hdi8wMEWZP8zYJ9MBxubNkiui8nai51dGFBDhHLXQVv6fqLorcDtTNvDHyRoSC7ExozW",
  "key40": "55Ftk7V8JYQDH1Zc7vV374qQGe4P2uJ3vdWrKeH4pL9DLuZYvjW4dLHzWDjzrs8y3Wv3jf2yX3CsVha71TwUurBP",
  "key41": "28s6SdH9X2TRphxA4VnktFMwhckF2kqYGHFQYWmtM6fRULabtymPVjxAVKXjJRr5Pa6fC3U951GGK1iLmE8yZ8dD",
  "key42": "2zKWhsUqWhbD333XyR6RegFHjuHvq5f2eRb814BU2VqgTPaUdhFg4pERCVRCLWzXSwsYk4YuSppRU9TjkAvmQJd4"
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
