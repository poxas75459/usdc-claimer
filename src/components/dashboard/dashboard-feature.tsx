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
    "4b9hkwZPQPyA6P5thvDYa6jvACJHMcFSZ6qadjnDP5gP4T7hxaWBtofrD8fkHPT4Dr6PFdWoCJvpJtDTWjemVksh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LtjqXgQ3v1Ay4bBvNt7ikgqJ28b7dCeDqdm2wtdT3BDCa5qeBG3JAzrL5TKLmYLGSQnsGtjaz4Wrsnr5GUbbvB5",
  "key1": "xREipdu4hn8NYzPZ18m9cL4siyipGGFAQ6HwMD2DNnd9aEFs7iB3qzrAQi8ZexbTV5cy1czjGEtbKoHQ5cDvmqC",
  "key2": "37HbHgJRV5BbyQttuJAwLFrhCKeJC9Jg54FgboHtmKJk26kYxjfJs6M4wL22f7cee9asJXsxykCVWhcf5Z8czzWZ",
  "key3": "5EmHpNHdsuzFdydZo9WDhsfv8HhgBJZZC2J45ya6ncD1ZWbENPLcvU9nN94JgN8eJ9BkYFWyWFNdG1HjgtvtyN92",
  "key4": "Mn2XzznHYszRjwwiYyzKoqpY3tpPM8Ww2QFM3t4dg8mjyDtGd9H6bYVfpM1M4Rof3oojWkhp525i3ZkR9gNfmw1",
  "key5": "4eKVkpoQz3Bud5ztimJsub3dwXztgoHirwL33X5i126KnWTmWXMmpFzh6aUA59V4wyEjisUUv6cvKfFmx8q5MsE8",
  "key6": "3usYkeAfLAmaiRUJrBYvD5XYWCoxLV1Bi3SwQGYzSqzHz8S2sF7s9gwbt2ivozKVisuaCbuFcVgPoWzXKfGQgEW4",
  "key7": "4BbKNoGHvPb6ojF2MqbW5bBUPLBwG8btUVL5VzF2ZfRBMuvrfMFPm9U7ERjtbR37ky8LcwahVqGGWBQFVdWqGt2u",
  "key8": "257wAZq2BJVtx8DqhtaKmbjuAero8hhCLAzvFXmNjL8gwSkAq9kNLVr3i8AJnA1zt62tGpMpHjLdErNwtKaWJQs4",
  "key9": "4QELtrorHp1a4o2X6Ra7LPLFyrZ3DY2fttTfuDDhXPqHubEDEXWsyTyXSpRtShijPgQiipBj4EiAWx9FYFGckz86",
  "key10": "5vupqJeN5o5sMTKM7iXXBDvJEDCTQMDGTyeCrGWLQGaLeBqb7iFXYJXFr97gEjUWtAehjsjefMGpjuDXtdGowbiM",
  "key11": "2NUfj7zU1kTCgg6xaF3yQKC1cASFEPChr5CRL7Tgny9zEkjkMikJpuaQEXvfwhAhc7LjuAYjc5EQoJ2veXenA2Qt",
  "key12": "2JzpbT3iWMCErRsD7QoaBZihevGLmBH5dFFCG7Eu4eqivVH4hBkaGrfegpfcSErTBZ5Lardh3Z8uiDXdZqs1z3i8",
  "key13": "3jdP7EG4ZBnzzrSWSmh7WbcqC7swZ51oCiezQXumoNxF3DGcQD4mSqSDKBtSoY3tj9iRzQ7bmFkb37SSC6cad7rX",
  "key14": "3RA3chwyeDWVWTL5n7aPpLVTZ5qjMSqzLProJts4WjZwuuQ4RRet1VTC5Yjh2uE3K6G6qvqYEPM61c9mj199Luve",
  "key15": "3Tws6dEqCPpCrkAzuCaHMwyus7BfzX9YWoZGigbM4GBuMudJ5TA6y5N1vKn6kruiAWw3xb2NfQLTxL1mr5fkX83N",
  "key16": "KLTmdWZidgrzPU4WS8dAM6nyZ3T7CScpdWKn2BPxkp4goV7uJHj33vspFFqmi3Vy7Re53ZYULzjwYXpdu21tvai",
  "key17": "3dJcxkziFhUsGC3GHNVv5yJMWpsvfEt3712EgWXysGQTgpyAbNuweZq9a1qGik1MAe7HsGbeHLGhD5E365oMxeRd",
  "key18": "3PDAUkJQNkdAEGkBozL8vuUN7QnTL6VDHTafpkDkwfQbydHsWSH3LKyHcnkNDd6cQdvhUmvbjYStRiDRpH4E3xTr",
  "key19": "28SiPqbv25NABg49AdMMawjwKbg6BNfNcskMvjnq7Gyw5USQtNtNtxhoEkBoBtjcx2SRoKJv6m8RxcaEdyobFhFM",
  "key20": "4oNjfWeWftE8KDooSFSsytnCV3Nvq3FVHKXNFF6gcv3dNURQm78kUtmXHzr6b3sHMVDNUU5ynT16AcYehjMMx15Q",
  "key21": "5GaBzFdwdrVpQwM7ko2UooUhyRNbAtfQFtdkF7D9RG8NrVhsDEmxxF9FSzTjsn9mfUKzgJB76dsDhAWsPtjbTj5a",
  "key22": "5Cw3VkXnUhCsTEdMMjRrEoX1xc6rcutv61Wp2eHVW6Br47gzVqp767963y6QHfdFk9iKEzmPK1xrpfacZuMaTj1x",
  "key23": "5GVtMWtzzMMAekHJeiBBk2jDuH79vZvApwT9ZYYFNro6A5S1Jo4uk7JVCY8kJbTDz5Dgqp2JBnKthy8em7nt8WcH",
  "key24": "u8f5T6oZ151rJZDf6dpbXJEdv1hMS2EYKu5XTkyKecqAVRg6kY9PmyP6TuqMd6PWENjA1a4G8tCrP1sEKEs8Pao",
  "key25": "JXCB8SPKGMdvfJQhrqBDQnVeXX9xjxeEvSThWjh3pFmHxN67tBWccAYPHpPF2re4QniXbkM4QhvJZfJYDaVDL2J",
  "key26": "36MwXovWNAYj3NrZpTFrREi2uEZi1uxWigzwjpjn5md2QrrtRoXjFdnvC8dw1fMaq4yggTsDgLWo5HJPvVSNdTwC",
  "key27": "5sHTwAPDUmS3BFfGkHBG45YWevQ9zXWwGuW3CYz4peNyc3x8CV4PQ5g9KybAfYgt73qfxShM7cvNorM65mUtBrxh",
  "key28": "3YpcGUaE7CoWgpaQHfafPUinAHRnB1pdpmkrUAe1LyAhDVXHiF58JAmQxUGYFF5NM4igdW3TV5djSNXhZ9SNctqL",
  "key29": "5UvsbEWFjnoAWJ2ve8BK76iDq93ppDnwJweRn3vqzku4Le1aWk8pVcUZWaHRC2teUZqiG5YQhvByZtGpDMZufnh1",
  "key30": "4eJ3QkSGS2n5o4mXNYtY6pASSwEFRHDhR8YqefWFbMWKVYgyUYirrSBu3kvTN2mnwtt5sANUAd9N8WkXxjJfopGD",
  "key31": "3wThehtKSJxRPsqRi18DaxNnAkLm1nUckKpW6vycyj5Z3JuwZaCbGrA4pJ5m6RewDdD2BCS3rQEorTM4DwJJeeo1",
  "key32": "2DkX6sUbPnRBu5hebMPwZSnqnonDMBbYApXVNxF2DYHZM1qYLMYA35vJsTDpApXKRNxiATPkTkuDWbx7LxfWs9kU",
  "key33": "4NNLbPZn6oRE8bq7kVMgYKEdQNpvBW4z37coTxWYyNTSdga3PmKFPAP4RVZ6BNMaEPgZXhH2hg41U9hmJQnGrkES",
  "key34": "3Nm6ALgu7oazKMUwsrYxh6EjzrdHJbcrqgMinrxUpqATw9oVtHjHmbHqD4qR2cBdvRDdNRhsHxM1z3kXSeVBUXYw",
  "key35": "63VuqsQEaNtHzSWY7NrRo4j569oQPNvLbUaf9doPNMaemajVFJKR72sY6X5gUoY9QgGG7Le8HghwA8n19dhp6jMJ",
  "key36": "3DxR8tfQSCVXffifVyHVUo6AE5pzi8EVdGrS5JrCuzpRH5vTmVMF3qKF7XPLJFALnxbCxH61MWVwHAb27E2iQqsF",
  "key37": "4DuGkfF74FFyAdvv1jGYysh7wzBtGKZ4cUpStLZiEDaRJLpnt8nk4aq5mSMBksePu9R5qXqoeZ5j9CHYpvtskLm4",
  "key38": "2qVNnju5zkuL4UAXYHA1C4sEWPeutYxeWPjzxpWzHy3hg12j6BPm61NrCH2mcvQN53fkdaHEHfzXfS71JPHXK3xc",
  "key39": "uH7cz2ZMPbnTKcaap7AFwA8RCKYRKjRNfpxHPge7E5DhTFNhvgoERt1ujkQuPZpVUYEQBcMCCAwujbT3NUT6ULq",
  "key40": "Gt97f5p23Hf9K1q4Dh5H8dA5vtHorwrrh3xwwYVthSyBgNRizWyvVhQ42muSk56dsiFmLFwvzYyfDKTjMd4Dfij",
  "key41": "5B3rrSwdbuC9dc9VA8Ho7yN5C8GTVyQ7yDzHSFmWM4gpRgMVkBx85xna31JsQ6GRANXPi9B44MmQRY1TTEpebDyj",
  "key42": "3YhguvcrWnDsdrn7gdWrFjK42dxLQpkVJzsMyVLqma8FNmJnr78sxWkTqqesTrXRZ4xrsibVu6vwufKstcTvPnGv",
  "key43": "4UU7md2ST3GGwzS9kvtQtdyJS5MpqY8exbb3ffFj2wwWHDUXETbznp38UJsC8Su48XsQMjZ2B7hHecoxsaZrbiQ7",
  "key44": "ThtdXeUvn6TY1ZWXAdkPV2Cijrb9GvA1M3CZM4i2Sh6QwDB4bTk5xZkKrJ14HsJi97KviTRNEZzFh1GxzC8fJ5Q",
  "key45": "4bSzybrRs6qhLwfyiB5CY16Vhipo4SqjTpUJcgaiq9yPa4t5zr6qcAYCE4yxznoyHtacse6J7fxXCZuWRJWGZ8Wi"
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
