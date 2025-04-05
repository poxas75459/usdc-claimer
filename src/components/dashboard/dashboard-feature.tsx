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
    "2hEUZCqaevpFvZ2AwrQLNJATDgjs3z3oKmcfHtF4JpqkR4H3ewXXpf7MYSMNtbfZfxGH6Q9MUejHFLCYZTMkBmFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xq7236cPsrpPDwJBVXFEuMfioAcv7HMSQErKoJgm4iSkVPARigu54tfJ6nW1h99mt6dZ4YNCikZ7tivsXtH9bVN",
  "key1": "4SKm5dhFLZg4yWkfJ9acycBtQLvvv7KHERBZSXEjvcWLk72ASvH7uUwpSWzSCrC12bWU9xeLUyEdDonwUzciL9cm",
  "key2": "3kLcV4aPmXNcJcp7aSwYqRzeEJjFT6whAT9mggAAcvyk8qftscs8Bvh5294WF9vz19AR3Mdo41C78NXEM3rEw3GV",
  "key3": "2vs8E82M7EMVDVzmAoJFYhs4Z57LLd6XAd3HMMobXmFHoFrWu4HbSUYmwn9JbwEgsdjobzm2gSg7LdsPN3U5WN5a",
  "key4": "4M1EUs5qZ4UE6NAVL8GpEQfYCEReBG5W2SYftWAtFZMNqibtptkyHrD78tqRJ4Su5auWww6bAZ2c8KupD54CaCay",
  "key5": "5YSRBL6oN2xSAMbNGw2en7eiJfaHPQgqDzD2kJmp6gXCV2RSB4ot61EFVc3UfR2NHYHkxmeCt81oBdrS1PEhjtNz",
  "key6": "2Uy8uskdZAMzJgXRri8KJXTsoNjG8E4PW6KLciaST3YWRxtr8upN5egEBHjNYBkrZVVce2aatu5dDExtKd3sTx6h",
  "key7": "4FKaDHjymTBEcgh3rdedjXaeGRJXKmF3i1XVsTAYEgJjzkELzXCXN8hfBdxtgDAcd9jW9ZriGsTXJCoytGXcnNfU",
  "key8": "4XWDu6UBD7VXyiyCDrqmfHshruoec713ceXpXdyuDCdkKQHm5j1bdEDxtfD8eXySi2jY8L4ugDM3CBVPasbMvKEn",
  "key9": "4AvEvhJSmtNWUDRP2b14JhZsFsSikeH5a5QqXA92a82zdFdqsr3u4EAbPqrcFv1HUUQ1jtqce9eWs7BEnFDKX7xM",
  "key10": "3tekzMXF1QHPf9ZPJKW6pyad2bT3wbAPNpYzHHt5fkenhXDB63gVtUG4m3YJGsyDKPKw1HWi4NP7gFGCG7BdT4s4",
  "key11": "puq3wGsDhmcA2QL8A4CnigqSoBPPoYqq4DszjMy7j14wtFgyVQHQEVGdqFx3gUXUKRzWfKvtgxNepSAb69FEVM1",
  "key12": "5QMEbXhrrepqY3V1Qo6A7vfaMHQ634eNuvd6UTrjPSpoUawKEwirb6GsPC8SX8TdZajHUCUkRH8Zi1nEg2FhmJMS",
  "key13": "3hje8PqKLpaTJeSYf1TdrGPYQk8oaYd4ApJu2Kby4GkfW94ohEnaEVLYwTRDD7bUU1fmEujzewV2HjvrAxGrP2by",
  "key14": "K7Umx6c7FvpzwEkPtB2MPnzG4FMsjPVEU91w1LbY1zsAXjrnouJbRfuc6qZuj5zpQmHykzak5yHTz9fXW2QJtKw",
  "key15": "4UPmtZEZ2X3EcTATUg4X99vCRpMnCqkbkAAk5Wh6ZVnD1tkPxhiPTKTjeacwn4J53paaTaLyDeaDxjPL7ESuVspA",
  "key16": "4LBJXMq68UWHSK7DF4wuUnya4uT6KMfepk2CGMtz4byYg1ofQW5epxSUem4tzdP511bsbJutFAiG5bPQe553DxE2",
  "key17": "5CsyZCF2CXzBBLk74iazceaPg8CCjpkAU8bAiVYRNY1Yp1of46fNJHVQ7LAE3gxWWFsXmq7QSNMmnj3iZP3Lo7XR",
  "key18": "2P3nrbiYMou3g79XM961jXYkvK8voN5sqLqs6fCPHxvewhiy7yDm3KAGRan3FBKHex2oVLKKC5RWbfTcsb5QgW5S",
  "key19": "2ZtGsoDSNe5VFSYJPS7LEozzav8EVdc2E4iFm63vbrnmEYgYiJec9whpLGHtTQheWRrb245znVEYS1CzUwByCiZc",
  "key20": "646EzPSPih76DJaR9ht5AxsnXXpGicrDyzUAZPZQpUDrbHYpWXSJR7G1p3KpBQDWDETySeKwJ3P4qzcV2GhvDRdH",
  "key21": "5Fo7QVTLMDDkRTGtfVy7b2WufMS3w3mrKsGHqvaANsusFBtkrTkLVxoMaT7Nyw8deuB6ViWFAxUKVduzuJtvkwHx",
  "key22": "2RAnCeqTSmzTLKCe44DHJTTbdpWJfbnWA4VuyU4La3Dswa53GRwscbyyzZbYm6ahkKo2DaiSJzgrFDvr1YycQ4Pp",
  "key23": "3it4jWqb8Z4FjnSJjcEWpDjzJiiFncLa7LPEBxkkQcdMSFQjpaJFjNyyUShKGfWnPq2XvTzG5oc5UzZBG4syFXVK",
  "key24": "4NnQ8LSRMrE9dGhkZLpchv25hC2irXuihzd4kUHHNRfuADrrWLjW17y7USbDfQkTtNaGNbnDqQQGYwThHrD1FVzC",
  "key25": "2avFQ3aTo1RDGNzR3KRntDxzy3PFyQ7sumY5F4zvY47pvePXVufsDnv9Xhxu44LF6ECh9HLUiBNEdq6QUMtcaJaX",
  "key26": "SA2SCS6nZiVi7ywjatenkhgAiVU93DmwcD2dkdXxJoqkbEXfcgEvHrEVAe4qcD33A6Z71aneCEJiYEo36XwXpit",
  "key27": "22QmPzSots2sRzRTpTT991MDSj6nQxRh18bi8wdN77qAczqimc6hvMHLxMf1SBH8JqCFfEtW7cnZevstrk2PQky3",
  "key28": "3ofbR1YEaxnGDZBgZhLtNNJ3nPK5rtc5TQRX2ztJRvJH6x2Bc2HYb8RYu7RxXdRdNZmJsXQPiWDQwJvVopLJJAPC",
  "key29": "35xZC6q7MYqQjeBirKrohveUZPYNB9T6GQFRHAG7jJyDYjWnJYv1auVJCLaed56WxRcAHuDqAKReUT4Xd9n5GPHB",
  "key30": "31GLBQoy9QLPTFFdnmaNfBs3g1GttxW5PrpVJ87z6XRhes28xpjRVDRY4iDJdY8H8re9XfhUUjt3xHvEziwLQ9co",
  "key31": "3hEekQzSiG1ajYMS5TsKg5Vxyg5PGU2WW8g9pJ6NYPbNS4LUY5YticudskLqM4FWhTw7m4HBnq2XiWPsUbz49M4o",
  "key32": "21ky7iooyktPkHxvmJGWRZGVzt4VpHP2DdbFoDPnc3i6r61sUam7oYMqwWSy56eUKxyhXZ9zvXCmCb7YQU8tSx1h",
  "key33": "3Zociwk6c4QPiXR66QoQEFg3KtFhug8FbcpwwxL21R3hENDJuHSjYRdN6TcGLTkbYSG6QJowWKXbrHv1pd77og4N"
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
