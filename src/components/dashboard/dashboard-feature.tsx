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
    "ibGg5nkaazU55TTUwHxW9JZLGL7C3jErMHhFqsmKnuAeKYvy71NcrxjBMrqsVBaRCG4TnaeVRwNV9yNz4o54fp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xpxtozZjWeDrao31JiUSKeSX74EAVvT7AZrgwgiUyqbEMeqguyGsMsoob5TgL5AJDFx3GFbf3837VFfwjZJ9gPE",
  "key1": "4qwVS8K9yEUPABZt7T5dL9CPw9CtWMCJj7yCmFtANVryiRAnoZ3HRBfwoL8hnspAC434HxevNNUvihEXPjeApfAh",
  "key2": "5rAx9TM2AueFAp4zQoouZ92VXXGXEbcT4AiqeUvw8kzLfyLUmSDrfTPDN88AhEyy7KmBQhgb9G4Z14fWWrJQi4dn",
  "key3": "j1iUumzbL8jGqfhZKJHdv7hZXNR2MuyhDYuTB97MCdqbmtqGYztfKYGR1g1ttm8Wz1kDSns5wBXeed89dmGqQCr",
  "key4": "2zjuCm4oDU1Q13CdC8Rdf8QSGFw47EsWo9VhkLNKHGL86LZAsoYhUW5zVrBfAvu7xz3VLNQFGh2VvjEpWnswUca9",
  "key5": "2NVFv72bJyCpUwP4UWysBozNGnCzPnp67fR9PivW6n5BYDyoFvosaCubnECtrAgZrsZcgGKyumkicvacW5xZowWs",
  "key6": "547x8P2TYTJuRfFZqNGmwC7aM8He6mNPfaoPiFfCjd8dwtXDnP8aTA5zEa9BEoTXvZtqswWnJcJ2hYvVsmEHtm3D",
  "key7": "32W8MBE7ohFgepJN7tAdLfz1twM2JPptVG8msiHma7qPK4xFGA81BvBASusXizyr5onEifDSDVKCWKEttsYk4WvP",
  "key8": "4nXFt3v3x63Qy6iZy9sGLdLB34UtcRWi3gLCSfwjj7W2u5DUb2dC7YSJa9J3nrFziyDe5HZxD6rYQKEpQnoMQN8u",
  "key9": "65C1GUsMrSCkYxLYhw283SC4gypjTXMuhUDUhBMYcqq8AUDH3HbnB4SCRB3VVcBms4X85qMqm1mM12Zs5u2dbrZL",
  "key10": "5FubKUm8RW6t47cZqKFPUcB5GBHpiwsAxFKManRaH1HE7DrEri6y9dfNpBbtV3dpVVvxtJxXJ7YAcTRdPCvTdntQ",
  "key11": "5dxtz6FzLSz6dXPzQExXfrFLmnHws2FNeNH5kGq6CCwK9dTx3A4RGmwzewBp1JZ7yTxmbQPce6FbJyS4PB4QQuFe",
  "key12": "4VDpBU3XcPH5rx84A4x7F7MtSsGL2bqu1wK3WoUNGX6bB3Y3Z1vrqg3VKz7NXV2pna2KGThB4KwK2NE9oHTSvzCY",
  "key13": "pFQTEw3Q39anvKG8JZw6nPz6VaU41GwuKcSbYa2CQ1R4AGtUpC3gCc5aK5rWro6XrqGnr73WcNw2Le1RKmxU221",
  "key14": "3GWDEEYGo3MuYwmjEwtbwdudNHWMbhtBg2imjmcniFvk9vjKrSPYnA9nd7sxmomQQMR3QzuD4jSeJ8nRdCZFBNDr",
  "key15": "36RocapYimksCpEzaH1g88A6rDEuuaoMAmEd5qhWz1Ki67k7b787b2RQ8zjyck3jStDKvje1a1GhjTSsE93YQtha",
  "key16": "3To13d3CZo6DvMptx3fD2fsrYDZ9yFzKwaL6yWLtiLYzXfnw7HmdqiTW13rR11iYAWj7xWBuXQQV3Lm4adzoURT5",
  "key17": "4dzUtvBDkpmpWwESJU3V2bUPzHcvZTpJr12LsXMBk3EqU7VwezBdpnvm2X3WpdnLMJvknHKvqkF1VJ9LHDivqZTe",
  "key18": "4JTvdD8m1ifJzAjo8rGneiCt3TUzyTQfYzDPce7E3zE8YdVPDRQjN7Ur7cuC1Ao56LvXf6bdEefbvsCNMBVMpNoY",
  "key19": "2c6prgYd8XH8EebAQPmLEGAr3igesF2tV62p26R3aue5LRmNojXjE1cpgWtcL4ZTd8Xskfq9N8j6mWpUBPGXoi8B",
  "key20": "2uvHPeCmvqhk9gtb477dDFqX8mN55U4phuvezNeBGDQagLBxYpQbfMd2oeJkrU1f9SEhGqcQ5XkX7jHtfyw7YbGt",
  "key21": "HJDo5r21x44128y1EqKGMNKuYWhXKwuDZ6qD1LWReUi4Jt92G8S2GJqWzg5oNkLMSedTytUcbyyNGFXRNu1cARc",
  "key22": "4zBjisThzTX3vSScdBNdTYM4nRrYTUm7HG5s4euP96sNgju85Uiq16hpnc4JctmXVdYUo7GJfBk8sECdtSLvK3fM",
  "key23": "55X3oaCm21adFLqzB1ipPE8X6n1cUeXjhMt4tsQbYgnxx5LNLn7CVUPVbb87Vut3afFCBsctrRj6TvQeydKG7qrU",
  "key24": "2GWB6foTU41noay36pWdC1zSmjXMHrVDiWyVh99j9fgotv6N3TMs8GdjdsvpKnncR3vkbUL8wpZReX6NQH4yiLjL",
  "key25": "CrMy5WQGWXudhs1d23eRY4jKwHFMV9TwRyMU4YdLisnPgQ5515U7Mb1YzNDBJFQFVyX5ZmaKWrLhK22uRQ7Jjvs",
  "key26": "3uVJRNohS7APGnho9qci3PuQD5Dpc9dSamJiq3NrPWRuXHRxKZhpPTFA8cY613Ccysh7HMR9mNvWm37faiJGezA8",
  "key27": "42W9YXWHn97BDJcxEmDNjZt8LTUCMdYCL5srrncn6GK6UuzkTKTkzBm1CH2iVq1nsdTpuSLpjFb5K5SiqbSWxUek",
  "key28": "4vFPnLLYVHHofTxsgPgUsokGvgky3T8ecvLASkUe9SXQ2tyEY9xb2PqBQnHeBYAHRupWLsvzD1JMRTisqrzGFeVX",
  "key29": "4ta8UVV8GsTVjKuQtVw1r5oBnfH97itUGdeY6G2CMBiJaM7wkrfcc5e2tLqSYkggJUfLjPatf2z4VjbUzr3urvfb",
  "key30": "66FLZUgaficH8UJUXBjTBeUNMyP1yt9igJZMvyE2YGYgnFC9ZVRpaFXL4C5cDeo3cQ8tTvhWgRYdbPFhUFLbC9zo",
  "key31": "2nqxA8QQY3kseLA5qtRdviTQw9NXmpAe8MYJA1NTTpzAPiBX69M8nX7CveaFYE3UQ84D446TUeA9iNKeKfvq5i47",
  "key32": "5t9riaiHBftgN7rLoXEfT3JEqU1UqcdMX4n6HtxuoLDDsfbmgx1LJMhj9wHpMe9r5o17WayABeGd4B1BM432K5VU",
  "key33": "4iH7jceLWsdPtYko34xjFbdmG1tDMZLvhstJzcaRU8FYktupnQUoLX6nCzegwSYxcgjUdRpnZDSXGcRhrGLrEQ6A",
  "key34": "5HK1ZMa5VWeTshQwXUH4r1rycpRtg4rhEx7wSf81TEH8ZKgNDsxEcxrSf7xe7uu1iNwuTUtiNZmhJY3csaQcmPki",
  "key35": "3QuLhYDN3c3hv73EJmyjUdMQS15xuS7sLLDMfT6n5Bop8rEM86FHBd4BDspdpN9m4yYeA28MUbQuo2AzbRgBPr3t",
  "key36": "2k6jGGLaGhkR6UrcKncGfJDUz5X8bozhzzFJZzJuDBiRw7yYNCmLzP4jBxuU7yVDsa2R3hpdAeqfBZg5ptg2SAo3",
  "key37": "2WwbPQoNDANm1QR6p8ocMyxPj7QS6kuFZYbcc49kuC7TTbLZ9GA9FfkBgEJ2DJ2a2dLXU4TLWCHgjmw1HWUoTMPA",
  "key38": "5zPxZXngEv2B4uHptzYZmZQrFAABLV2gQehCCg6LyoahX9EVzQQ1gFniqy9mNEtQTkH6nFeK5GzCsPYtTmCotc1H",
  "key39": "5vqUQUDGtYBfcx1BK5QjXBm6yqAstN3WwdV1efj3xki4hoBCYdVkoh8QiZe2S4Prg1Tq252X3deC1PpvDH9cbbZo",
  "key40": "5pG4o83XCwP5jRJv3RUqhD1QagrH2FMMcoFBNR4MnpN94kQMY2avgvMtPSBKbQnf2DYdV13ZCPwUuTDrT6wQJ16d",
  "key41": "4eyAH8JFFN9vZakgz6BGyDzmKt3LbtRHGJWDSvfwdUp8ZF5nzwoD1qwn2s52magg7ahGoehMxqsMNg895ohr2gYE",
  "key42": "2VfnysYjbH5W37rLdbaUzXSfaaz1WCaqquBY4KcGG2Ta36LWQ5ZTT6sHfFstSqY2aDvrUp8iLoEAYSaKoKrdZua3",
  "key43": "3N8Gi14BniynXDFsGn8VyZ563wBdbMAmHCTgv4n3wzwk9o9e8YiwKVtYGCY92FZLmYjY2zyc1hXzq4uohWKBDk5A",
  "key44": "2eWCMmbsi7pJ6ciQXL9S9e42j5oLU7GeWKz3aGBhZyAAAStAFod6g7emu5HD31UGs7BsHWB3XRTHmTssdpzf43Hp",
  "key45": "5BZUo7huyQciuoevoHz2o6Nm8UUnYAoj4YTmk4NkPigtLvKuMopAnYLom6ZmJbLkiLstZhzbeNJ6RMvpc2JSYKaf"
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
