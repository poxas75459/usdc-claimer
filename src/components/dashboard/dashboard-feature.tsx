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
    "AuuymNyVn26KkRtL2gskkeqapJgr2wqCs3qmnwh4NkQETfxkYi7kAujiy2u5S1NMxWNZ79teqd1u6nXJpB9USmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YBuMQ1UpJXrV23Zo4DCpqPEopAfCZ1VwuZ6xFhopuU5GkiUtZHox2aL1NMCbo843BJfaV9A5XMspB42anMKhuch",
  "key1": "3CftuVUEa31gEvBBMuKnz692rZPD2PVbNLbSfZUNQZ2JT8FJ8tuwhY23aS418JXQvXsvkfuHaXY2PQdbdQbkyx4r",
  "key2": "58n48FBhP3ye849UBikhSeTCgE9iCmRhKRTGBGL2SkLUU5FYTuN4ByjcsvdzF8ijgfzC5Nu4T5H5GoYvamBTnjZJ",
  "key3": "2CYvfH39Pq3aBDwC5Xu5sBtVso4YmaNUxKyCma8cFNWdSfULcs2jwbEnUgv8fMAr1XS67pijipbbdb1YGzSSTzG8",
  "key4": "5kKmWtVdQ992oioNHinK92HPNswehyyBXLbwmxGhxWnLDjbmuHZBVLwRPXqUCLjZ3DrJB2BN1VfUvKVVUouyfwwM",
  "key5": "584AbFTPZ3DdxCgqtK4SBnu8grUZThgPVYW6ZiPBSv8LtDHpQNA8zkoLppuEE1PC9vEtrBzom9MnQiPCYDYraBun",
  "key6": "3V1iQV2vRReVvH8dtFPTEX4mADxW1ksJDQZqE5phbYCXvY63J1YeZMfVcjWrkHMoDun1NDTjp9xN5j2GUp4EHcQc",
  "key7": "43rXJCJ4vdnf8CgV1EWRe11ZuxoEcseiuni7nBSfQ2PgRLLBjpLmB6NVYhszMEfdwnuWeJDjnYqYkkkvPj73MsyV",
  "key8": "5zafwbQVfaWrava4gGvQbumD7uwuBwiNo7uwtxRqnNJ9GX8UXNtaRzCutRfY3of7kQtwiPF83PGJi2snecYzueVy",
  "key9": "2t65JMvKXp1pUr7uNz9gECHts2ESyr1asvcoDuymhr7zDCeYcpjKDCgDAaQP3kPRmrc2Y4J9ahdohTwykbnZqJSg",
  "key10": "4KFR7MUw8BDxGdSopSB24kbDhrmnoktxLHZ7bWh9uuEhLK7yL63ira7EtLkmX8GSo5u9gGhiu9PbPSTkWeF5rEas",
  "key11": "3Kwega589h2K6cVh7VT2jeduxxQsf6QkDLcGkcWRjBb2tPHfGv1paEYzahwz74GNqTaFutUm2CQEj1heF6vvigHd",
  "key12": "5zbLDqMxyhjCHDQnXQahETanzdSwq1rv2P2v9AJDKQXSan3AcQTTGWCjqdjnexg2jcH7Lpv7tQQ2EQCp5pNJo95f",
  "key13": "jqtZiy8DneRaz5LRR3mWxCWtkoearf8ZEU6vSj9hxv52j8bykfc1feUP7LHGSNVJWnn6k3kxkitcXXJsvLmJQ7B",
  "key14": "5X9T1ZoQCgftubW6qb4QHdRwG9QU7PegmXcxbKRb49NuJgr4dFBcWzW9778MvqRcouSvoRmmKcAtBPP8fiSyXDdm",
  "key15": "3diMSkUhvPX2TsT3LtueorykRiYodifd8qzqNj7u8Jgeey1u8JRpaW79w6y2qo7ZMPNQDwxjcPZ7VhFqPF2CtmdY",
  "key16": "33D1hw8vbaU7N8kPdLKLER4qGkbpWM5XRkpkXYZPNTzeR5Cjr5w648MiXXGWdt7yUZhCH4nT8kMTYJEcjtwNQHFo",
  "key17": "361mPFEyCwj4LtDwMGTRRyFvmWZXMznpzkKf3GmLPeGjFVNWrQ1BN9JemJpUnvFMzoQE2KhwAgEZXJCaGvfakjJd",
  "key18": "xm7oShXokUbKqQipyvvqoNR5junbXFicQ6CQi27ricRs94yg3VFUUubzCYau55qQttDDepFJSAicN1HdxU6gwLq",
  "key19": "wxjzw4So8izKqquYT4qKQeAjKqhyKoX8BCHxwvsK9DNdmCixRQQPfze9tmE3DiqDwsSRynHE6cs7UJbygccw3TZ",
  "key20": "J9pcjDR7kSAm5j9v6r9MsDftZhm9ghQENPTwcGquLPNABetX4U6xgcQE4fsWCp2qVxxAuL3bJFBhuDCCVUjuhK6",
  "key21": "8BjXQujfe11WABfieS3t58zjwaq1TRqDeAmLrECDVyRP65C8wLSKHfyjXdPfLpYmg65Gr2vKXRY59xyqBqR7tqg",
  "key22": "3zEEPAyq9ZmhvVYmihuQiZdaJYY2cQonQ3oQcuYBjXkwRJhuibfWsgthbRW4UWL7F68bY5pCtUzNXL6knNBASDaP",
  "key23": "2wDsUDGdB3xbpEfbkmttYzKukcGauTmmtKznfMoMcqVAHByUBKLoPHstWQfdYkN48MP9hoH5jSSaXD8vtHsvr8AV",
  "key24": "4qashtWrAPMDVwcRGbgvNwUocuyGxmu8uZvJNb8CXaRmxMdHYXoxZsSy31cTQ4hTKsKt6LJR7pmb9qHazsrKw5ft",
  "key25": "zvXUw8gvH37pHZFy3PdoKVfrAVneDqUZPZrsz53AG5WqWz7MUXxgx3vpPCwPpKfV5Mj4tmomfo9TJa2utoBURFg",
  "key26": "23p24vBHPHgKhsTtyp5YhfuWDwdeZe5j1zgyaMUQy5iG3bz5hZ9Sx2NxP7e1gGjyGP4ewoFVT2iSygUiWhkhRtGa",
  "key27": "44Mj9Kpny9cWicyD14n17eSy8TpF56Y7UJSYuK3JHi1Au3g1rEd4YDacEcfjLDxstHDXj6Tay2CyV9gJjyakairr",
  "key28": "Esc6CnHpq6yg6CnrWXzn7MqpmGS9PsMsUMFCHe84K2Cq8gc87yiuFGAvM4zaVrcyWUbcWW8JMzQX2DPXsT6vE4w",
  "key29": "a75L7gPsZCvTMDWNb5y2qZSNyp7vYf7t3wZS9FrXbWMy1joCcZZgwQiycqHiDvWLHKRsbYPtPXVCBHCzJJw6g6o",
  "key30": "5uYjLNLPnf9cgZme2BduiRP54wrUPmgmpqzr1HLRzk5Ea29kbejX8SfZhCkwCrB8Wy3CJQ7caxmdcbX4wy3UNeno",
  "key31": "46SrcTiPWraat5buH5khJzKE4hM8XHuSgCkWebGTxigvuJh3EY1MbdGmYAn8Caqd6qoHXfRau8kcSbYfXgzsdvU7",
  "key32": "4Nh5nXFaox9vyZ7nFQBT2fUq4SxBgghn4gUouAxD8AoDwUAHRmGfdrqygxekc8us7CXjkvGpGCj9PpdzLyhjAd5g",
  "key33": "4xCdMuSEqfapZ6Ecdg3FfV7iafgHgSgGfeHMFsyiLdkyZqHZ9wTRHGaownuVHV6uf3EJVDy3wsTzQ3vWWYsQ2NSU",
  "key34": "5igV19G3kpgFeWupzmBnq1cxSsL5eRXZnTq9Ayfyh7ZE3PWDeFGp1chhdExCsuX7fYCyvLGy3JfKwK4Jm65LkHfg",
  "key35": "yhTRnqFbNPTzMYk1dGFYe5HYUNCmGmbXFDNNq3BenC3qjDMKVo53uicnjLQBfAekY7zNWGfoWNS9RECF2sZzFNt",
  "key36": "2dqhVJMp3d6SJrCHJ5emUZR21KNDpMi1fTFBz52LP5vMu3Gf8FfrNo5GEgT4MSza1Nu6LriqgghtQGirq6yB8yv7",
  "key37": "4XMWqYnbhnzsi9bPYtAUt7FcpHfugqcwWZ5452y2dE1yh77DdYLKGUYoo4fVJ2vcrvWW7kYyCE7DgKKXBZK8acAe",
  "key38": "4ozDX8i1K9azsJkajYcj2TaSbAxXpJ6uDCDGQPTeRkTTu144jH5i8THuHVD6juvdgBW89Aq5tnNmMRqXtb26Pv6Y",
  "key39": "2qeYZrL1kv9pPuKzaCqxaqi1rT2mJZyRdGups8dfVfy6DEv9g1UkpAZR6oCqUqEQYyB3nmfFGjySCDk6PCCshnsd",
  "key40": "5AEPXMX1zxpvr3C8X7wtWVNc1fbpFAeeTNZ1u1PZkvzUSRNhe1ggLERCkz5c2qzHTNPiCufGjTH6brjQs2Xeeqfa",
  "key41": "5uiJFd7ix1z1R5UcD9pHJ9TgzsfthxuxyvAgTUYyXgpEkwxcXPtJCAT6gapbVcE8uKBZimyfeEGs4DGGXHsWMnDv",
  "key42": "3oeeE79ogSaBsfxrq93m53A3TWSeh1epPNEcBvqKV91dbt94BFwQS4hsaXuYj2FkEeLvdkfRfLTrBomJ2Ez7kN8Y",
  "key43": "3fVZ7Bc7BiqDbSYo9LgWfCAebqjfiQ1KjQr8uKTCMLJPny7nVSyg6ZQYsupA2gQs2BoemJGHfELivq4GdtskKgN7",
  "key44": "32zm1XruMtDZt8KnV5cR7S19rzDirYeuBGBDV7qDvurJyE4qVYbtjrHpYQFbtEGk4yq71aHzJAtMBYzLrYULZ2PZ",
  "key45": "3pp42uSsU1E3MAh2M2UkeKyA6XcsteQLo3qe9818rTLwTLQe44g5FiPGUtAYXau1ftjTvdpPbX6pgXUreGcRYoRr",
  "key46": "shtqeWDQx9FFmYxbxvTKqYB8LVfS8XBAnrbHv2WqDKb3BjaqmKpddkRKe7xRyFR1PeFP6n9bg9szrb3EJ4Gzs3H",
  "key47": "YzwYHRoCSxarcNgeWpqJzieC7MsqunJJ4ShZMXjCKCp2KxoWW4P5EnuTCNn1GavfyCzmb3KcH9nRgxwgmJBmkHH",
  "key48": "3QDjpMt7qe62USj4gJAWDu94Ynk7kPTzvUY7MXNT7q1DRKo194PuoTVgFYdK74icHmrTRbqT9ucLf7me4khpmBQN"
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
