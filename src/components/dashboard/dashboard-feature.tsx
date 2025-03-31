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
    "4GVTqXigEv1UR2LTbyVUunDsnqUfGZTJXmwjBATtVucQSCej6K8NCx1Aic71pm8nTpPvPzRTS4FoJMHexKioDVJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JVktFXfNQ26FBmQ3s9HsDuCgMBfhntroACo1PvhvCXAbpjFAX3hDMiwrnCS2ucgMgVvqJfnGZwmVeG28b6i42XK",
  "key1": "4kAfMZdz1qAxZZp5P9qEQnodpBVRM5287R582qm3e6jduvRds7YpzEsfnSZnaiipNcSAV6fcXy79PkJHj4VKbtmL",
  "key2": "sZowXLzTA4UMCbotCYxBVh78RTcKV1JQxxQt951vt4mtmXmon272yj6zF2ZSr6nxyC89iZBwtepdfkYQcQCbeZK",
  "key3": "5ayz8C5j5TQtw6g1B3UZF6qYVK6SKrrPaZtsz2ADyj7gAuRVzLJ9RvRWgMUSHE5kqP8FpWHBtH5TWXinNitRH9eF",
  "key4": "5ML419cwHhf6jutqvVcMMZeiBov5dRmnMGDbdndTkEeQ2b8jyDkUTTN1WrizwKZEf12jwDjdLGe7gCTuAW979r4N",
  "key5": "253gUUVYAwPdeY72K1KLUss8wS2yPSsW8HJZAJaDYTkPxF8cAK8Pi8smThgU7AN6M4a3SThRTyyEXFLLvDFK3xTY",
  "key6": "5kYSvKHAgP7mrJmC7bySCSMJNgvSsiUGWf3KRb1BfrH3LQQ5qoQD6KaFjUigFvk6BTyc6sLecUGxjeSCJ2FrJZ2h",
  "key7": "wkNVNPLDVKqimvwoHpUoE2RhnrpqVih9zZjQ688ZuiTDr3AqqNcv82eALikKKwYu6FDLxgae5tgdiNx35wotoF6",
  "key8": "4UGsgw6pVzavtgDfmZeXzve6xJ8b8qushsX95BZQum7deM5w4c9pHB1qVK5gYJVp8Nd983oY5FUUMSz8ruK4MRy2",
  "key9": "LH5PDQRf8WSF51DyPf39mpUUgriUszkFX8nVxba54Zz3iuUJzDNgY9yHdRLiQ4h2tMNdWmDhvb3eLYFko9qiNL4",
  "key10": "239VtLANAPkVAxXnLvgdFxf85cP2ch7jgK1B7vQc2SbcBwcFP6J3xXGSHYFZQUxVTupL2UTxYvLd1yw6FxZTHVrb",
  "key11": "fxfjq9hdZBkTLRLSLH4qbVtTa17oHewK1CymyapBkTHuDMcicTJXL2nhousDWkLqiStLch9TgRveJYKyUshbW1o",
  "key12": "5Hpa2ssgEVQFa2nxiL7SsDMzCePtDZQH2z7cTVwagQURePYpWTXeA5nq7Byim9WBu1F9zVBvGSFCxDw13wWmWnmW",
  "key13": "42ULdbjzANLUu949B36M9jQxBQYBKhgeRwvTMJq7E1yovHbG8j3LA5oYAvskmsn8NvrFzNiVrWpagdQnKQ8g8DY3",
  "key14": "3eVNWaAW6xKvQnwQEo5EhveKNNXyG9jpkMHjh2z9UbmZoyyGQ3pYioDFSoPU5yBBP2UWyGxWppMULeKSzGEFuDqE",
  "key15": "47rAgYm5qPcQz7Z5PWEVjdEY79YtysjVYAS3pP4582RxwLJtfR6szxcHA5bAmx6pXwYcEswtot7ie6fo7u7vGW4Z",
  "key16": "3p7SUxDVq9ZmEDV5PmNCK89diZCXfkmkytv3H9FosQxEG4emUVr7oDCgSkD9Ys5SPxDc4mZWwQC6YhMpJkDHB5Xd",
  "key17": "5vFsWFpQHsuVc9BJ7jU9zAycKdbPECvTHCLFdsaYp5pynfdXvVeBEvWMoKkvF3Lzs8aqZc5X3PgDw74N6ypqVGQq",
  "key18": "GMYWsWe8Z4SvC47iVmicohpLgVeDEsKQWQKDVT8FsAtkiYbiDoWXUAWBRT7SKu6dMLRiJojERu3pfABxpRrKUuu",
  "key19": "9wHWiKQ8LR3Fp5JaCoR6Xo7fByWmwX1v9rXVrkRAGK8iGhECbcx62ucgTEya5shBjvU1VvTgdjTi2KrWgnmwwgr",
  "key20": "4aUC5tZkuJd5K2WBmUXxgUM8iBrA5CM96VtAZVEaYHoejB7toMVmkRQjFwwodC6z3TcbisLJuqhZYsNu4NuDJQZR",
  "key21": "qp6zsSb1Gaog3n93NVTmCefHXcPQoFiEcY8FsxH5ammBtxGr5cGVhdKbhuqURrLP3dMKovtUy576rZXJyjPVGMr",
  "key22": "3T5n1iFVRQe4Vts53rK96hKfVGciLXcUGMHwKGxTGaAgVRh3quCyRpxFQTEy3MgUemoR2vzL1cvsRj3VgDhMVsyJ",
  "key23": "2ZJLHzmVme4LHJ2CFjgVadcY16yupxPu5jRBkgMGjMjxE4JJfDUZctbt816oQxSRcBNuzuiDGdpQH5nJMJh1fgiC",
  "key24": "uVLak3BV9qKnuvJti3wWZBUdshRA3q46vYKisPFfwYA2J5jnw9jRuTgj8rLCeiKEseaGuGKa3s68rYet4wiEcq3",
  "key25": "KAeMzZdQQfQeiBs7ikvLJkYmmSebGvTym9YUDYX3vNrjaWMJyfoV43ueauwL419tcELZn1bpM3za8X6TtSbRf4j",
  "key26": "4eeL7XqdQodRhPDJhEUA13HU7vGx2fEUBQuWzf1WvnyjKvYSXgFjq2vVxq2NykBvYeviaAhGd9bL7F6PeTjxfdnv",
  "key27": "3aVhEc1wSA8TZPLg29pWfPteZ8xmbNagAwwKmwEWxfLN1gRCAEFStkbhZ3MsQTTAnLcWzz5nrFp6bFhQx6EnrcH2",
  "key28": "4gciGULQerhQmxyP4C3th5c4V7EKQTkuiEoyJF8Cf1QGDYbu17KHpyu1S23oqubW16kV5qpGiYZcExatWk6Ay2Wd",
  "key29": "E69E8mzLBXHdejxf3NjDm5fKz1kjJNS5EumAEMLKwWnMCfEvZqVnvzQxefkvZ3RoFbSiSpCZ6kCyfHSJgHwEVTX",
  "key30": "2EFbTGoQHf3qnNz1758UEW6nGStuqBAEiRfxxAJfDu81kV7Akzb9n3Phx9Ta4dUuonT8nzSAbQXi5ozbXAiVAFpV",
  "key31": "4EeiysN6KC5LFznRnKJNJnwaYYVcrEbCnVk1uirWvZHZ8qhMxPTT6MzyEgTYN3q4tCGu4wA2ZVbSYYqmrhH1rwXp",
  "key32": "45ENv8Gy7oYd9gEZo8fwCogn3VxtRm2TrcZfbAW6WCLB41XFiSwdovrV1u3cMb9mqjEYQnK4Aa5QY9BADdmVpGnG",
  "key33": "MZn8naWrzRGrek9QUUcQZAvoJZUaUXUC7ydCnJosLqzWTfhbQ5wStSan9GkXQ9W2FtQtjH9YXd8sAjgQfoepry9",
  "key34": "483AGz9md6zKeXr1mgc6rTF6SKk1Xfd1objARjexnotCaugQCLeUq3BNzqr9HGGCM7iY4G8U9dxDxGaaueTJH1fw",
  "key35": "4msbomo9wpQz8gwFKHSjLmtV3Z2isaA8xrYFmuG6dMeJBcUuuKAkJgXQKP294mgMXv2Nqm3cqeKbM6jS4xqKLsCi",
  "key36": "4JmCvFVxb8VDCKWc344FyAANeSSJKiiF1DM7MyXXq6A4JxQoGSEAoj6MCuyQ6TBWzznB7tb2fx9zhLbpfoSR9Bd8",
  "key37": "3gfqc1qMc5wBAvLMitaiBZbB7wproX7y2XyM2ttyoUJ6oo8DxpZUKN4Mxb8toiKSv7mSmbMVuPM7jhXX2oQGnsBq",
  "key38": "2tSgajuxN9oN4vCuaQZAg15DdT6tra1iN3kyy4ChJTaWhsRs6Y5a78tg7pDD1iMThAsLXDSQBYhXpqVYadNvNv8U",
  "key39": "4RWKwPEVvmu5BUDMnvxvhaNwSzzRfwuBT4swvrN9a7UAPFFhqoV4aqsYDYyvbXmjqw1SKEpV4UzzPqYUddqXKHjX",
  "key40": "gE54cFyiHU3i8NyZTZXvLtbW3HPTbh4ZitfgwxdzZn4NmTFRvZVuKc9zJ9v56mcorqSZX7rKaCkstanAuEEw5tS",
  "key41": "4HxFK5XQgVK6gYeUcQwXVQui35hb16EpZqx4b3JAtfGcqpjk9Lx599SdfGJpmLeZU9p8ekmgXWyW8gDRdfHgajNe",
  "key42": "5in5anCWLCSFyyZVjWybTTVbb4xraTZPEDcdVMmnQEU9JBUGMHLLMTWjNcmDXmhP1RsFCHMiBBNGqrkCRxSA1DAL",
  "key43": "36knRpqoEp7apuQDfryP2v8qoSJtmUrv5WsELjWwEv7AwdX33bf4ajTUL97cNVD83PVfXmrG72D1y8B8h3g5BjFr",
  "key44": "f1wUArJWUTP6ZRHdaTJtyWDHvLx8gJU7fgxWXJw4d3D8aUVqu1Z5vgrsoU4bQZsbmYWyJS6Bzp2JYSF7QiDwNwf",
  "key45": "3qANYsSqTnSCjovQeyXeGhPB7HeV71oG2guDwgHYxA1XFP5HuDG2FPdmNLggPRo9xQBxvyZQU3vdGVTsRpm1jjZa",
  "key46": "5dcxTBUYp9QL31Ne66r2GUoarTEK8cVPRetTSJd1Knb5EVtX1upZV5kpyEB5BcboHneSJwZCRadWvgCVxYL4JdM5",
  "key47": "mekfKraUnAoYEe39ChTa3Gu5La29asU926qWx881wyf6QRLm2PEoV1a742XgiMeSBCgMHg3fo2XtiLPSGLBUvzk",
  "key48": "34Dym6UdAehgaZRDZSqvLsYdE6MBG8L4NsK9wDSqY7vxepT2m92SNvsFaQQPQgWZZzgLUd5BaorVCWkPMuWYCoEz"
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
