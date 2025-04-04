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
    "4cbyP3JX97QRnT1qnYRi486XCRdcdojSEAjB4qEepxZUhuCVWdRbKX6WsxyZA2JGfzorzbA2eLVhut8RYgQaDgnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iQh2fXkARCC8jZjhwVUAyQkwuujH2fTC31KPiHUbwCQYzJ7PNYttjREZkUdG1E6wXmCRqYg2S6PxdER4jCBNPXp",
  "key1": "2pajKPGniCw4AtW7TMtJ7FfBDArdDAVBv39ktnwCnErevd2qFqAkNt4ycRYtnocTmHEx5gMdjq7arGQkxuGiwC2a",
  "key2": "2YzjGBmYGRLxJ3JuAWD8Z9pmdqAiotXpk4ugc9cdpgSMohSVjZYavk57nsR1xHHEwpPDSdhkYD5zUPwzYoMFboMY",
  "key3": "4MrfCFxTLxrKdcSgBiE8psZjAwyMrc7J1szsMD75U6STr6FCtBffDmhCfvcna6Yyt6HPjBwqTRBZdkAEYwXU6oeW",
  "key4": "3MHmWm16X9KdyE7ZLQZCcQxqpCd2VWKUZPbPYLM39G3qT5CA5J6KohqRWAxurgkfqpUBpTv3CgmfubdeLENTfky9",
  "key5": "63MxtJHkr1CWkf85i8Tkhj8ApSWNRdFL2a85vRJ3Vs3cjS4znfkpxLi25iQCyei3VF3jSKf26pdeR5TZHpbV96B3",
  "key6": "2i8nRLRsgGbx1ovvRB4stJi4bcVC8TSCigBr37eJsWZztxUuAdim8hYRrFPXY3iE7qo4fTkCDfpBf32HUzMyxgaP",
  "key7": "D3ZUbwZWEmJNZubHVzupvTQRTweXBFrowsYAFYDHyTQSBgtoGNbKjMxAk1kZc2GPbeKYE2vyBaWsMVSz1PUBTYv",
  "key8": "2A2UW2iumKdXqR13e1iEkF9jCnrN8af9VTiHHFmj8z1ChRAwqRh3rDzpGFTJZPQnjfptv3fF1dfg7j1m43baWimT",
  "key9": "3dnCsdPqehkzxvnzDoanpanVnfRsFWi1gfcoJmxaEPtZqFqA7Hsim325Gtc48D84ZPg48HHfdSs23xfPTkA1P5R6",
  "key10": "44Ds8duqT4LikjDYE6xHcsMfsuaSRLPnGm6UQaqDSXTkfCTR8eiKDeNbQpH72xD7neYsjUnVFt6wCbEWxzpqreG",
  "key11": "4eWkCZPzJsx5icuXnysDFLR4KukYwD88UBdZ5q1XmqXQBsgQCfKKBZk68RdfRxqXEhhj8zp9ryzBoztFwDqi3Joq",
  "key12": "2Y9RSSZSFxNPbQMSndCGiTvp8LUPUTWJEV7V7Zs1AiZDSWtXabySwiiQJnw5z68G92cDbSVmy27NJe9zw7sEkCmz",
  "key13": "3N3S7HU8gL5qvUJfWjXc6sCUptovTXYtw5uo3iarkgm29aWCzD64FZhJBJXspjZGn2WWZpQJV32kfxxcMvfibcYN",
  "key14": "3fQC2YUieMPmiuBAsA2c6H6NSMXAhB1aD1V6gPthNeN1kaVZho9D19fmm7ikJtV2J3cZiaaNunGCYCAF4FXDRCM4",
  "key15": "59MwnLaSq4ZFumB9zng6cPoSScHutJbhsQjjitzFtcGfvmTquyziKaL92mjcSMAjZdZNiCaEJtkZdUqjmh71m2TP",
  "key16": "4B3W2vBU3HtpnTu8D83ppvKQ3x8GZoZrMhVS9WmQX5DPMN8SZXE2F5zqrLWmbcLeWpqUFMBnXuvUCqzmPfLjiPmn",
  "key17": "4U6xAaZbhtWBbvaRJ7R3bFggVsU3biS8GjkBm9eLn2LA3ym356DtdcY2ygHXHZ34FsXec2E1rzJFzZ89fkuQxWzz",
  "key18": "5p1dzB6KLy32eYmvQSbKRVcwycuiQvUDG29BJFX8dvdCH7MMj39qz1ct4GKmMTfTERzUEbCkTWrkJf1ktmUrTyAq",
  "key19": "4krvWu5hhsYoTxqZzyuKGcqRn6pPJkgR8NPjWrTXiDNSQ9YVGajFGiPz9nA8xk1gWuDQMXthgxLHG9Xuxb4E8SQj",
  "key20": "WydgXBf7gQXagFaaSiAt3uoSj14eKxEXv4rgK7JjopAsMjGK8yaqiATtciGBRFx7tY127eiCxKHkQPXcPnYjP22",
  "key21": "5RJwWCvyqAKoyCKExSWFtFFWFs9XEfrAtVJBwUdHiwHHtzZs53FtKxd431NfLKA57Fv59UGU2Mb2qQk4eVZcaqCn",
  "key22": "3t2obbeLV5crGKjXjhJLosAJizBqB3YyMutXne2dDzw6DW8mYAhW1vMtrZmFnT5mgptotttxsCYY5m476sfoNNVZ",
  "key23": "293Tg7vBEFjyVeny9ZGtJpimwgvn8haDhLRHzHrFrpMvxUyrzFNEZfCx9Sv2RFNHqNHzkMbFE2LgAHMDAmbEcwQm",
  "key24": "4CmnTB3Cx9eVxSn7pGiDXnvVoW2e1xUs7phGX3sd8F87p6QaUmfsayXdkDXNxFfKGBWa9hatz3KqivuVmjc1u6VV",
  "key25": "5mGfsdf4PHyLmWtFTuYNWpGCkpkrvtLEuLqKK5w8pxHQtUUTz7nDv1S4gYdfYGGGn3ZCxaMTLpXJ2xEJqLdNifCa",
  "key26": "2PvBdRktHakn4ognMjXLU2FK4L4n6BrJ9ybaK2uzGJ1kDSm2SqnZz7BfK4BXuGEKjTNPmFFL3MBRd9imoQbwfNe",
  "key27": "3b7LzhSEi74sWSSRQ5kfUWu5fTvKpj18F4FPbGJsi4nEPnsC5Huc91WA1Ez5FHX12yV1Q74WiJvbhMbTjmAseV6r",
  "key28": "kcNTogeqBXHDbSdQuzWd3wBewe4kB2kzQrjq6VkHQmRKD3oow92fyrTfhQ6mstaWNueCCb5BSX2B88cMCDbtff6",
  "key29": "urGui5btfBh446YWAXk8bxGMdx3sXqdazvBkMY17ZtW84oitJewEo9qSUnZrfNi3Po2b6n3wByMRRJ4KdgxQ1Vy",
  "key30": "5j1NVV7B7HuX6LpojL1GgNXzyaov8CLuxTQ4KNpqMJxAMouBGJWWBF2exWQCo8FpmkChPo8pZw8ZTjGMWRKF1REg",
  "key31": "5k38uSTmfCsi1vYFeVcJcsyhhgXxMhRDWQ2MC8Jn69ZVxHWpc1JsgND88Lj9j6eZoKddYTLaoZVB5vzoxUcStMrc",
  "key32": "4wwNBZ2bYoU2EzJLcJh2DP4Xmnf8yPvNFPask7UJRQ6HtJEfB1iBf1JJk4mwxyaWQLrU99HbArhNjHsajoGbk4v3",
  "key33": "thpCsTjVWGsbexHy6Bu4zwL4nGgMao5vQZtLvSEyVUabnJwWCrGBoQkJJeGrbZNTtidLHmTWfgBwASW4U6twmbw",
  "key34": "4428x2zb1PYD5SqHwk4NzHkJqnQYTPWPajbgZJjDh7kvH4Yy8cNhDrR9PncB13PxA2b9duaUiHfGZEZwKMej9XVr",
  "key35": "3GC1aEWzssyVm8cKmcktk9y7xVBTYybTL5ESEvppUEdEu4TV4finh33DbW2cQEbAKFX7orrho4Ssh63w2HK7ksyg",
  "key36": "FBGGsU3FTByWkGTwMatZBkhh4TYN14KboYT9iUMvsKvMqikWULeEkrxBDuFTdVA3Qu3SBE4s68ERccbGULkTDDn",
  "key37": "37q6g8kQmsCA3faiznjFPiuwAPB1j1PP5ZEfRD8MCzW1V2eAXw8ik5ZkvaSvZqp3wQzYmNNfX6jaZ465ns5PGe4n",
  "key38": "5vzqamBZqtkeUavAuGCw66Aq44WmKh18TowTXEuZ7vXuWtdmw2JWXsdy3tRmCE4VuZqeuoJiKR6aadCJoSJHGaSE",
  "key39": "5RJs9Kffzky3q3TUcn5XkAMaZZ4TASGBkWV62xofcM3DNVHPnpEWLGZZFD18xGMCNDjwnPEk8xs6HHGUVaLqXU2K",
  "key40": "5cZ17qcQ4M3kYm25Xw9mbLBXsSDHU4j3TPkAZJ81vFKyr7ywaphBtXsJgYtoXiP6ncur7pweDWD3m8Q7MgnsjNt4",
  "key41": "G2taDQvGFhuSB4fJuA5s8AqqVXJUGpNE5kcFhcaKzdJeXNiaaXqhEe8ZJ2udpBdunruCqX6o4oNTXTvqEZgZjdR",
  "key42": "5dh8N4WDjV3WUWj6GeHYX9VVL7gYPRqwYundmvyZAeN2EyZyWPJinVE5KCJScHSqUzF7fmcgrvadJefv2KViFTjk",
  "key43": "4xM8RaKXsWsi4ChNDYBoQTRZErVmQKEXD9rGh6Joy5BPHRV3AXuzrL6vGQEX6qXJjvS6YzG86JxxtMhHUuFHUGWm",
  "key44": "ZXtcEqo5HvessB9SZQDoLKuK2AbNob5UNtF5CP7CfVhmdYYGM3L9tbzGUUj4MzduVQx7mHTG8hbqetn7BfBo2ey",
  "key45": "7F3u6t5NoV2CEgTQMpJpx1TRNopuCDwvHCGKeMzqKHkon4LXhsHhB9ZLSaXeVLoUqVBjC8VMVat3dGnvyTxMAZD",
  "key46": "5ibK95SfxhXwCMGN9qdsehCQGovmTX16rx4YwBLcd4UmZfWp97Tj2PHF59m94jXNsogjSEvhEdEsZ1tgwqKwAn5V"
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
