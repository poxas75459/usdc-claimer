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
    "67rooNBzgJskeL1bYdW5eXyHJchpEs8FnspXUPcC5D9ekCPZb6wKrTPQxTEXXvZiVSZw8285jcQW6g4MzvAXb9Vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pks3VDxJgHw747pSoXTwFu6F7AuLHXTRVcrkedPtbr7GdKbsBYVxVpTSdT1dZeVoCaxE1arWtkX2HiBrHnXGvKG",
  "key1": "66Fz9VPvBofYtnUHpNJXkLcDuDfPEDV76DEmBdRq6bruDEXtrNxJJ2r2QQ6ph8LbZnZwTKxWp7dHARfW7Z8pEVog",
  "key2": "5Z6F1fjFNAXpn8bGDHyj6JBcyspskt4Y3ubw43arKuVzKBk6nkr56w1nKg4Vmgt32wGqYhXUMeRBzQRxPHTSsGAS",
  "key3": "41jQcFt48xRkWSGWbkdwmvoB8jbsNfpBaKfa3sqYEfEci4dAZytiKzQzQFAVfUcae9frqshYWnChYgCtZUEPsGDr",
  "key4": "LvncofUPABWJWvcnKoAfqTGEHzDAci73Zb3HVRfjG1AbZ55LqdtTi6CEiKM9ivGktyjZYoJRKtfbW5FhuSNfsPk",
  "key5": "2g15nr1yTgFTAt9cngNnzfiNreivGrrbScrDeGWQroieE3YNs2pNys9Wi3GWYB8ynCWGoknCDrnpcEEaBy94tSMX",
  "key6": "5NXY6PnabdLQM4qSA5jQnDXZN1kbknEDs7TQJnf6tVyVRCWhi3DA5RZvaFg84xt1Eqxynbh2Sv6Qj8hyCvo6TFp8",
  "key7": "3Wi15QhqoBUuTCxj62h9uJ2193FcyvHJoeKTck7u2iEMiUYibNEvEoPZqESSQkZeNSwxreeLtKaFcqAkspMx7KhS",
  "key8": "3tcFn6Yi1ik6rx4SWncVvVJV37beQjjLAbA2A7ZXyYaGhPB86z1VNiwDQRNa1CAMf3XE2W4y6EXNmKtpdaYqnanX",
  "key9": "2ta6VTHTUgHz9QGTFXH9wmYyxu8vWckv7TBStp3ooYLNCow9YtAzYcLRAR3wCzTwncPXnsm1BV1wn1MMVxMXs9YK",
  "key10": "21iXmhApkqFLnP1btoEkkiKc9VMXhQXYSz2WNBVkkeqQP2yWg6VXUfEoDASM7muFdj6yiZ3KR1KUBWMR9S4QLnQk",
  "key11": "45D8SGgde4EZ7oj9dzMHKAC8xWn3mzTkgc4i9xku2CQ61MF629mZ7aTWZQTN8D3wBdTtSmJjUieXRYsj5VJwxAoF",
  "key12": "3VEThq6TeyTKaE338F5TTw7k5bp11J777JAG23QDD8sWTMoGH9Uw59sGvhkWw9ARapXC57PPFAWxDQrzrRK1VC9y",
  "key13": "2bQrxbexq3HExeRAKfpiFsptY6ZmSRMaSBe5Atj3xGM8t1FyfTMffToAyPkVK4RQGmEDhP8kMnLDeVM3pqLL8AVu",
  "key14": "5PJRW6Yt99NVCUKNNH2FYJDomyzK2TNgspMbuHZ3P3hgsUHxB6gP5oSLwaM7X8JmDenfqyMa9q4114oi7sBpmCjU",
  "key15": "u5HQM4CXiVDYDCLNoYr1BU7tKoZM5ymTBfCRKySKG3Mkr7cGWTUXR6xz6fq3e2BDe9Y7xDfwFChKio6tF12PVmr",
  "key16": "fC7YUJLKmf7nBoHRNT61fjrPabLaDDvMWP36TaKqywP1P2Zfy2aiACe1dTESCZwhdTiZFgupLyiJvT7Nwjqf1Us",
  "key17": "5ULpB6TTo5tF2SUQji37Zx3eXeKNM4Mmd4sWZNSo9zDTbVtrLcnciz32wmUid2HJzozfBwSEgCnrK7ENWmSnbk2h",
  "key18": "3jzrPbmC6b7zk83pYykYHoM8j5jrp8QetGz8HDHnjDx9wDjwqvkCq9WoXKY3krb5kkSKpTQEKee1YG14ZaVkcUDm",
  "key19": "5ytdVw3Nft6YfsD7UCtpD4CFDEhcWM1iRQyqnxsp66HnPHLaBvxRR3gkw7yz7SR2Phdq13JiGeSPb4w3ZfHt2u2r",
  "key20": "5rVwosfUKUs6UZBXHUmfT91iNTr6juADLPTSd3psF67qJW93Rd1J8629VhtrSXpvrXMxUhLvgJf6GQWq3dZMNDqY",
  "key21": "21qDeyWjXhN1i83i7jiBYUuiZ4zFiMuhSXSsByd4NYsZKpzsEVfGtvcPdqkzroVM9bwzKXUpbY9842YQ846VPmaY",
  "key22": "2rApzksBAkif5jzGHkPxmJGsktP16KHkS6zhwo918j8DWayoue3FVcNqZ21pMjEmnosvzMFhdS5FRfGqrcxedPDr",
  "key23": "23jJwMMtyHspGtWL15EjfshxT8fnvFNXpkmexAAJmonZrpJDicfUmXx7NzeGdZamjybgYvT3xfmwYE8iWz378oXT",
  "key24": "AbEh9gpR7bR7qJmt8ptkYtd6ujeo7B4CGLExLxaWL7Qj8n5SKuwBMfRXajbFTnr9HDAJechWJEg9wa8fmsRXLdW",
  "key25": "2P7axB3yp96icDBGVt7tsWrvqXidVxaHG3r6kkQsgwtZew7akKbthjQoFFndbpfMW37xRRtEdu8C4UdN1uMMP3SW",
  "key26": "2Q7KRofFPdWYsXFxgLUa4pA9EGnV1PiTvWF2HGptH5XwvFPf7YtFTC4Pv6yXzBE2gVcGucCCqoBfosM8Mpq2KUvP",
  "key27": "211umsSWTnPoQ2uXooQawyCnY16HoRv96hLzUjLJDAs4CcBs2pcZTMdter3jgCeW8uDFG9utwjfd9c37f3FCyvhV",
  "key28": "3gZzMM9KytAz8fiwLciR6vVsYjQ3QD33AkeUPYBe9NLAubq6NwzpFDGaFbkxqfgsgAk2WbQAcUG6JWpffTqoqmsW",
  "key29": "5AJAHkJQis56UdyMj6LeifmS6xJV6w6ynHQD3R1xeCdgNZAiSzq9M4oPo8MK8ik27XqGumj5CDe75aetL1ZFnQVr",
  "key30": "39mFieDSRK97pNVvWqbZJSDubLbBkwX1zZc5SxrhMzqY3tfYNpvfDnkwMhJBCAh1h7MUFxkT2RpWQvw9Unh446hh",
  "key31": "4C5ZuoaLggFGurYjn3NCnPWfXMLoSQnnrM7r6EvAqucHBTCQNdr2NAE88DdVbMULPgqBpq2v8FYjqGbaBt3swLBG",
  "key32": "5iGqicW2HL1g87KL7dktSaK6oEgnMGM6Q8BFFMsWUKoxCyPpBybQFAhDQC5ZiLrrxbb9wYCdYYxUH8LYuqW9cUkY",
  "key33": "2ahHBzEyk4NYPzDh4xCbZ9eCyQDEt8Qa69UgDMw56QV8RdfHUbHRrBBCjsGXw6BEg5sdbSZj9USsfN8HtaUkRv6e",
  "key34": "2s3CirCXGmerFQsuH9ZNphsKpBgyu2pEDmsXhBW4as3BEnaWDRmZUH57pYbcqn2iyMdLqtKt3v9hJk3C7LZWfvXZ",
  "key35": "3hQX3TqMXHcH2ZMNhqXgjaMW7eBvSLZ5dJhVhrGJuVu6QXatLKiw7pSYLBoHX1yf5yxoGiAk2wvm7bSH2gXUTAH7",
  "key36": "2QTLzGmiFZoXWA3RnNDSiNkRczbTmKis1EE18Brj2YT5tbPGvmNWiN13SzzaRgKXpmftEeHYduDLmDxAo7rvCTwq",
  "key37": "5CDKN6nQK2pwNwZQJtsixpEQYDPteWFBrHNtYobN3NFF5edGsKs8LGiRKwBLHFhLSYmrMWn6PcGNvuUrQTpw3FPJ",
  "key38": "4nShvbGcfUH1pXV6kqNkvvfa6vpFy56PxCskss3q3pdkngWBKXAm74ozTYENU4VZmrNt172SFAKGnZkJfx6NTyMT",
  "key39": "64pTq7LBETFMSzSp3obBMApHDbUM1RMM8rYxp9uQ9CWy2A1PppxtxLxxVqSbFiBh37yb5EygYn1XVTFPcnk3pQ2d",
  "key40": "2KDkLfj9kQ9F1dT2rhsqVSeHpQvrs2AtZJ8ghYmH3HuKkyervCCpLL3VsUQyURwf79BbggKGkQuCLstS2YSuYZU5",
  "key41": "2EoBQiBtbNFyqoGKjW6oB8WqQz3Wv8z6hqpFZSEbbTocNg4BR2aPXHJdxcBaDxcy1n6zMCWsb2vwQrcxKC2uVAJt",
  "key42": "5nTMNKP2CD2bJX8gjNcSHUGvoA1KUknM5C5ReH4NfkZm8KRjRc8x8QpM4DwrEDpMMiiNZRdg2JBJBv3GUhdqtzj2",
  "key43": "2qvyj78VjeypQqx3K7wwR1xTAkH1N9Db1x4R8SFhW4WWtDCzFM9t1aDe9YeprndjbkCXHLCUow9SbruZNuJMRfQw",
  "key44": "3rLP5y569YsgJG4UVbFtHzX9GUTedDrjbP1npcEydWSvtgSuTFE9quhkazcLu8RhAw8EJjpEPpsWen94SWXfvpqr",
  "key45": "4FLs5rEg4nqF2dubpNthB3XxCqZTiVHcr7cXXqadD6KkWS2FmS2oS1z8TmyjZkyy78KJfK5TzX2BwF8AzL7Z9XZG",
  "key46": "23hGdH8NrhDgL74FgU7evxNjKb6ajzSMzAfZXY2xCPUWuKB7VzKRwD9uWaJdNrSKSmCkTshNnFpWnpYniXZ9frKS",
  "key47": "3EW9n93nUqcatmi4v8V9L9EHtJYs5MFnad9t9P4UTxn2Y8TDwHn75JS4yMdu4TSfVt5WU7mTPu492yMLbFjVxQbj",
  "key48": "3CgP1FMQdJgUubMAE5PbD4CM44wkLJrH12KN3DewXvRjjYuPjBZV9Aq4fTd16PZJd1Tx6dEBSsHNrwPJdp9A8Fwf"
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
