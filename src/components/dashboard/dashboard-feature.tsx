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
    "5MeetdF5gcAYotsFmqougz2VpeQuFCEpc6yRkz8bqTcKwmhoy6WAKXexNTmU8Dfa8nM4eQtdsBdykrmMKuwLDPb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dNWa2DdZ7xWAeagPugWWade1NiWrPyGU9yK88DpgD7vaCSoEh4NgLs4G34g7Hvz7BzrqnJuKBTFMX3CrAziojCa",
  "key1": "3jzNf1MhSDk3RPafDecZLckPiCMHf2FuLHG5RcpGAahd7CCwqaWkjxaqdCTXsxQCsxB2EtspNQ1ex7Hx1yLLjMDh",
  "key2": "2s4J7cp9QVcfQy38uTrmRvpCvAAuj74uwMH7e2CPByyJD2xo9LdztpDt9rrA4zYRVRM5xobo38GQT8sEUBqxsvD8",
  "key3": "38dxPgPQdUu97bXjEG2Hnq1P5EgzqY4DXbBCxzogi8k2CwiUF4MRSMt91r1VvcxSJUDLRhvz1GFPZE7kjqXf6Dis",
  "key4": "3Lv4Qvc7dZJHwr2UhA78JaoytNLHTzHdwXfKBqCwQ6zRLD1sJkwWudn1T4C3BgZKqYV8WCDJ4moEJKqHYvCoMZwm",
  "key5": "2gbJz49gCwLLDhSkDJBvMyFxNH3C7D4thDVG9uKmJNJ2prVRAGtgQsVt8GD6wnxpkiqZeDBGhNFgNNBK5HgrJnpJ",
  "key6": "3gtnckwxSgQF49VEmMbBQ1FdT1v2PcEtxZBtwsD3sZ9PduSB85biKySCCsh6FFW1KZCzwhjc7Z4YYFWEKhYp1nbw",
  "key7": "2RXAgEHjwjwQMrRjqH1mgJWK7U2aTsy9jsys5CdXJr2yrY6LzbArzYaEG99YYjFszw8NQexzVmsCExVEXFmbCZMn",
  "key8": "2vWr55QsNNWDkddekpBNBktNBZpztS6YbvS5he5PhTLp5nAboV14bbqVxBtvFx7AbUfheWomeVZUTDEq3YeXWf33",
  "key9": "5HtjtJfptFtt93ddekA2CGoNWJQN8eH9Sj4WMVQtJV2EAGJRQcyidCcyUHWaajdbHHiZk4mz4qxYRPTvWLq61V9f",
  "key10": "6gayELTtE6tayHFdxKuc2U3x5DeQdBch4DSYDSNr4kAPKb342ZdVoRVEggqASrYPYfSeMrcEwWcSw5kA3zgKAQi",
  "key11": "5THoBdmVvqAgdUmkUnhAd7anDdNG4idVgSTAnV118wRKpKKMTcUng8dRkxLzWy5d7tmehq4MVozh8k49ySyfEmqb",
  "key12": "TTjXRgvLok2LfR4TSBZaQhcbLg1nWnxV9m2TpQ7uC2qEeTsexTnw9UVBavHDg5M6haZXrMCF8k6MGYwfGcDT2yb",
  "key13": "4fqhG566JAJ44XnssjV1aKDeX2qvjTu59Lf289yVJ4XMEVpziBLQEPKLq7xw6YvgYyXcDqvZc6KyyL5mKKEBxkcQ",
  "key14": "3RvWsEEg2zHEtn9hLxtFdJdfMbEHkxpXkp23nFKK66CRyzs3BFwVJ1VTf6HUs3Ueiq8P5tcXGUCNKsB9sSbaxcba",
  "key15": "w6yyRGfcCqzSMQQakMRf3tWEzxnzC4DEgNxSgP5yqr5z5GJJ2DjqTreEQpjWu6J5V7ockYgQwk4NnsBiJVcfwFo",
  "key16": "42BmPj6vWV8rKv8FozUxS4XXmeT4eiw74DM5fkfbptXf5cs1q13B8bvKSBKte8TKqwe5gt5NKGcdm8S4bGsgwxtf",
  "key17": "2MA4rKu3udqpznYq7y2uAQnNLD9fuvKu51c7ZdoVupYgieZU7MnSYKHzkuppRw1sxehY3PKEP63G9BCGFmWtJJwg",
  "key18": "4TWYNCnoQvxHUWvzkC1DGmCvn8sVkzAfg1shCzVnZpbTx9wPQjkWtmkJB25VPTSbq2MUqf7tic51zagtdy7J7tYZ",
  "key19": "2mPUNeGVjcgMfYWBRdh9RUKSao91zix2p6TEezD6x1W6QmHPFzUV6NbKXNV1qr1wV5mJkkbeTCVE3DuUpf8hSJb8",
  "key20": "5g3JfZoN9SnDj8ij7kq2r7qbjF9B6ZHGUoW1iwY25mGrZLm8BNZJUdqxnzceP4sQwtED9kP1J8RxWTQ3piG3HaDn",
  "key21": "XiY9HGXS6sZdXxjLoNFweYNShEMZhxqWv4vfFNqT6Pc9V1z2JGdPtA4WdMhNGqcb6moDPnpAgqWcDUBrYuCs7kn",
  "key22": "29gsDfhqQBs4X7ZutRTmRLwiqvYDpFythtsQNRsjRCKHKuocQgE4Lk6eQVMh5KVDnU5Xehuwv3VnVn5LifxKGoZS",
  "key23": "2ziFdmurChxfBAXD7poDDDdNTqQHD6U1SnFsYxEdxyLy5bds62q9Nn2ZqzYtQrAFB7KHLL5ZTEp6rhwc8qNMfCDH",
  "key24": "5t73JBMQiuSKtwvpC6J334d1T3CJmTBTXgq1vXTLmwMfBgHkXf6gekhzgXYQL1G2938LwGtdg2xHpkxYyeydHUCi",
  "key25": "UkW9TRZUBmmkcW9ZNWbNBbhiGH4AqP11zy6cJV176m3QxVWpWLKrq7cbCd4pWVK2dYCppU8vz8QwqxXYvXNWdhq",
  "key26": "3KcgYcTrFTN6xpUin67yE6zkzqiNxmEpMfrGmve2c5atwQvzc9BkX8i3JLKPam7XzgZXSR8vibtQuJTMfPH2fqjX",
  "key27": "4oiivSPi2KMP3sixQvtfonnLFvGhtowtyrujwmTx8nmjymd2NwmbHNMxGowDd3iVQ6VbxGurLwCgMG5DT19MgdQt",
  "key28": "Xa25AZRGbKjrtwi52UDNXMxJ7HDsZA2KdRoif83bZ4YXy3Rwk9hrwdAbZTq479WPbthH85jGa3cizbAB8ofhXj9",
  "key29": "4f1mpjMwRofkW3rwzUsiAd6msgWX3c7Mp4XBtux5EP1B6Afopanzn3LWtZsTGDJWidLQVwRtba55nyeGVLQcKKYt",
  "key30": "JwrkUPCoH9bDfLMKqNAnhVFfr3ahzm2r9GmmQtr6hLWi4jZqJcBPyfkVAZGF7wsJR85TKWkeTX6EPouoofCRxar",
  "key31": "mbisLU64sWuwVJ7onrgPDZWPhHEoLBYc4H7f2ZX1TrWdgSiyUbFS2JhzhCgU2vp8rwk8Rtmi5fRkws9cpLXQYxJ",
  "key32": "33QYs5fEVkDx95fdtvPbrfrFDDBzhocNWwYzYB1Dd55ttSE4gGgC7Fww8MKGWFDxm62rFeiQj2mhvtJKQF7xTmo8",
  "key33": "2JT6eoMdrMFD9qeAgiidCBEwwTuNTM8kdHCywtCUXv4ykEseTnY4khdeRbk6M456km63ZVKB1MVvtjrqZC1pBYex",
  "key34": "5Ty7zN79i9C4eZErxyanoZimuPR4SxbH1CJg2e424Mh2yNYQHPGdtLaMY1FjehvEKLbNhsbnDC8RELs76JcAWgzB",
  "key35": "3fT5vpKyrULWM4YDtgEejeBEihhmYhHtA1zBNZxRxpEAHgiMbW36zxwmrzDZ5JibaPKKFz92CyNLqgwy92HY1yUU",
  "key36": "57rHcHqW9sUsjni9voUyL3PXGYHoygMK93VpaeCm3WnnpTmcG6irRXZae17eakohYeFzM7m653FaZeb6rgcSENxi",
  "key37": "BQotdj9RzmrCsVz9Gmj9MUTmyHcSQMo7bkKpQLZ2RRGHdRwfjzsvun3tid5kFy2rNjGSQLdtw2zo7C7wCrkPhBK",
  "key38": "2XsAEypcCodaa1twGH5CHAvi11xvQ9CM7Xhv7K3J3Nkm67URLT34iwTaT4LefcsoxZmP1FPdfPNCMMALFyd1BeCx"
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
