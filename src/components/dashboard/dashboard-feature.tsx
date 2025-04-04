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
    "59cBwSUZysQD5nog9dbzZkP12tJxrwJXEEQRzUs8ZtzDU3vjYtMMiX9faa2FAnqFdUGkUGMtTimGadu52AZua4R9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "597Md43QZBDWmz5PT5AdAEMnstrmRajATPVg3u1zi875NaNVWcugKBpx3ehfkXdeFw2HpaYaC3kdg4osN9kEB14e",
  "key1": "2oaQsfo3xj5zwD5L6APgNqr4aoUVPQkzbKxeFrtdh1Ctz4uK13TeAmKFosE1aUCCruyvbd8Tu8gckfiDndo594WA",
  "key2": "3qeT7nFRVd2nujuXCc7C2NTypdSGvYN1GwfPpnKmU5bih2BhTwG67WvUzGh3jvmfUVKjdnLnTDTmnoUxQWEuCHPC",
  "key3": "DVUXdYEQkGKq1z3Pabhcjr1V8tnvzmBxFnSF71H8ZwaBeQTZNGnztmHAoBzPVdpDst4AXXJybmmX3NvYDeavdNs",
  "key4": "3Hk3a25Rs3ZmxSk6xmWtEAQ3c8kTcUmKygdk8zas5a6uZ562u5SD9sTVLb139wh9eH4jC8Ln2VbJDQSk63QMHfcJ",
  "key5": "4MFR4zQgPsQcz7z3rU35ZsCPxw9nuHfFjMKyzXjQw38W7vuz8KuhiPsqZrkzZ6mkaMG8qNdkyEXAm1t7PYE2dtrh",
  "key6": "66NLozX8EN2SNKCFzMvtKbJ2fqNbP9PxrmpW4icm6UabQbKiVPRtnaHon1VD3cH2kDP5EYdxLr8JLY9Nr1rBStbT",
  "key7": "2evtz2ermCBudaSE84hUBrVEG97mmBe27hM4j6oMtN4jKX4Z9tzmitZ7Bp7wzdieVDR8k1qBZX2ZirdrtQVxzN42",
  "key8": "djz9UL68PgYr3kaYLsLZfHxZqDUshABJsv2bX2pBWZefEzdBf8fVTfpoXZ7Zy64bj8UNNCHpu77eZh6eeo7PV9J",
  "key9": "wokGYS9j8Rx424rGi9ZL8aA9VnW52AjynzH41oRh6qP9YCStMjHqrDTsvLHb1qUMBoD3EfJNeyjj6e7M8JWmVAS",
  "key10": "F8LgfSrF4DCNG1HAq2cWbMvHjZahSA5ZvrJ3Ef7emT2rQiCt7uotmqzaAXQk1mcbNyRQ2d8XWjXZjRZpRazPdHF",
  "key11": "3zkA9XP8VxBuLwFxmg9Qhy5XH8shxDRW9vzPo4gDMRRdodVM3utPuVhu873DaEpRFZWUWenxCyu7HSe3Bq9prT3w",
  "key12": "64UEPke3TRZT13W1qkNzhmj5Y3kgfyw28zt624GmvXGdDaGb5jSDQ6phRKiq33AoJKNwHg6GP76d8tT6uAdmWoDy",
  "key13": "4paCRXtr7x8S4Kq2F3V7mhWcQXWm3Mr6vGtZdEFFzFsMvYpVqcADpBBPLsStbL7D5g4rBvhcfPbLzed4ASzEhTA7",
  "key14": "tU9bxBFcg5Jr4iw5sX2HvWSmFG6A1nfu9fYUucvLvtUevjtFmDTV4itX4NsPpVMKGrk4SZCphAQKJ4NzPcM2cex",
  "key15": "3beJJZbExLkUZ5kMpS38jV9KruZAdJNzJQgJPssBt67LUQkDZHFFMmwB3AQpc7cWTR8m7MK7AxzVpVp4iVcTHhkD",
  "key16": "3WXRB5XrXwx86MFRfSZgS2imaeFmkQGoTaPpQJfwhVGHJh5WY8t73Q64PvXyh8euZva9aiJQHihvtyoGqPyWdncL",
  "key17": "ssdrVFjTtBW34q2nB9SoWZPq5UA3vrhvuTxDQNd7PB37qPjYz6BWgMeKHcndmFrmKhhakizyS7CrzbBKknV7x96",
  "key18": "3dPxY5pfzZVDU9Wshdq6r9q8yv2q3UYBvuHw1d36QfELdxRB5kedpvtcZr3XAXgubjRxp6F8agPk8NayqCfUyLm3",
  "key19": "42AZpfbfStnNesuccD7YPm1ZasERdScsmRSkeouPfPVmJzXyujvE1LK56kDeUSGQbcYjCDiParXtasdwYfPhBGsf",
  "key20": "2HboW2DhLN516zSngfhGZQvv28oZcMTtUXvd7pEhE7StzsCLfA2MDGeokMt6YrEDgS6LzckPGDb1cHGdBTV5Cb7S",
  "key21": "X83DfbiPKVgGuGyk9tinjQKLkSrRACCNZAcpHqrjcEBbQoC8XYiqtKRcPeknvb2SUTxcA4UWoNX2wcXeKFAK1PG",
  "key22": "2GJodQPdjHRiQxmZNjXwrw6XUccgU9Ka6L7ysoCbjXthEoE4M9S67cmEEcHqrag7Fiy3QShTZE8KNhc6UDSmS7Fa",
  "key23": "2QbCsDGHxEThKo556fwEXJKv7nSYxBv51Nr4Wsqw7JUL2jHf4j2HjvTcjEMstikTSn8Uw3WwEUd3MtE3nid63tBA",
  "key24": "2Z4gg24Tc3R9rxGVc6HmoDwAJhtAxxFEySBMvAnL2M5zGdSc6Lk6F2RXiM6ZVuBviZpQjbgwNZf2niEUbNyd22hw",
  "key25": "3yBY4MASaVy3qv7xxPUXQxMhUAvDAHn2x2t1x2aAX5kNAPjfMyTbQ1UiYWCb5RweYs7GWJU5qABm5WnbfPhrvSXz",
  "key26": "5Lnfbb7itWUfeL2jccs36PphHnTD9mo1hehAJoG3CzMwFMecVrUEaDSJEFZL9h9yK7XDsfFGQNNm8t8Y99PWTGXq",
  "key27": "4274edbT5qMGi3qWzzyPo41VoL4X9RD3AxDf2uNVdFNhYpDyXa6DQ1PiMmcxo3AWaQJ2cKJ4UY5wGG2ym1kFtqGk",
  "key28": "2mtdB6sxgEqXjAKBzta8SCoYPx8qjN7xRbZDPekezYApGZU9qsTKPs3A4kHuMP9sBgd3wwr1Tfu9KMmakjSKvWcJ",
  "key29": "2pLkQvwK6tUpHxhbTNoNGsFKG4phyRzYTMVfVkg3BjLEA9rPNSc5hfKkV3kqTpQofeSp19kCxPWoL4pmzvPKJeJr",
  "key30": "xD1JZSnA2VeSAL6mzcowezco75thXZ4kGddtZ5Zegu7PAkdga7uJDJhWZv8ga5RFkz9QpRask1BG9zv6Spq89Tv",
  "key31": "4D4S8z4Zuk4jSEpkGGzZrZRacP778JzMZuyXmC5MWKHMQAreyG6Qn2jyi4xBvx1UAnrnawC8Qiv8HAs5EFVdkLfy",
  "key32": "3DshhWShHnFKDmaa3WeZJTswioJu2J8VPCgSQYM5UX7JfiigogHor29uDFzmvsfNFv4ybgNFmRqF7BNte9fvfsUg",
  "key33": "4Zxny3BeGpsQuzKWi4py5TxdLa7bWEfnzwk5RrmsLVWVyUmaHF9AqsUA1pJBCj9yj1cC6SdzWV4htPQo2NMXinrn",
  "key34": "3wfLBFskvMg1cKbe7GDXZrCfR5mr9GkrVq195AcCbq8RxAogqN5Yx3LKQeVUQtzG7mwjcEZSmLoFP7qa6XQieYVZ",
  "key35": "2hzQ79jxzGNKDwQpV5gtDGXuwSFhXAgsVCUnkcoVnbv1Vp6s1Kig2Hxpwg3H66jz8aGGTyHeoy3hpd3oSx2TYHkK",
  "key36": "5aQ7JCqPAV3Cd2EkvMcMbrUMaXPxKPeMrXoiLV7kRb6RqSSz9aRGdrRh3vgfDP7C71PJB3QPN4YAG2ibYAsM4cfq"
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
