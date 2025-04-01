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
    "36UixJKE7xYJYM4JuKFbikcyNtVFDLB99eYUbG2xZ7aVXbGRWwuicQu6ng5GtZm329Kuqj2X2zTuPgptXMULkUE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s1CfXyrCD5qv1nncZDnajHiDUPbr9Yb9hWbLFpbRRdrfP3AUwFMwxfA58WsRBeqqBRteFdXnH9RMKZuJobF1WRR",
  "key1": "3TKcG1hLj1Fy2MeCHHW7GKbRPZ8hm8TFmNTSRTvLMmuUekMuRzF3znq3WwVUs1SEsD6RST6jjADYHDpRGVeFzJk5",
  "key2": "4ogrfuBb9Lmae2j4krX74FGRoChi7tPD37pPto6Wh3Ng8zNNNkXtxXTeJZ72vsPUcS3xUhrNQUiVKi9kUn9DJerq",
  "key3": "2hEzdzBbCFYbiVaFjtrM8qJehWqJ9QA4PGEm3cupMNvoXW1Atp9D8PQWpt8VJkNrSt1Ts4dJZx5UPqJeMYrXNY3j",
  "key4": "2j4J4Kvv59EbbVeGt2kXYoWw3zyrFCjD6HdXirqt3PZjzPmLSoEQhTSSVrQhWNPKyYHGqYdHLMq6EqgAGTff1yHo",
  "key5": "4TxuLnihDn2heTLQTGvmfYgL8xDneXLzStfFBfSubQQQ7eANrrSzLNNQXmk1AYVsvVweLsLpqv86krHjFUEMR9xP",
  "key6": "5ji1beJijJwbQcNCMfV76gFTsbtzzQZEK6QCQgLWJjiKymbej7rbduFyuCfrMnD8UXzx2y3jiabW9sEX98QagRvv",
  "key7": "AtnD8w5VpzGZUPnM2UkWnzmiSmd1H3GbBYGrTB9CyUYfUdV3ggr91gzu8xKzMkdhT4KNNBXpwzE2fk5tTWRQdpX",
  "key8": "Q3CH6CiGG1Qw2R6gt7rtui6vNYDzENvDXG87kjAY8WiaRgGoPXjX8Xe7MczkQK33bHvNVnx2KigHmhLcY98R7oa",
  "key9": "5ighndrfeDswMn12rPWpozr282F8sosw6rNJsuCcUSMFAoNeN8uJnZ6Az77SyHUfSB6WUjhspaWFwa9eAiVuwBrC",
  "key10": "3bu4i3EhmZResBHUgTaqkkStkFa1QFZLDsY9ezpbHDkasmgxN93Cb2x8RikaVVAqUYc3gMEeLxUVeYNJauBPSDok",
  "key11": "RZaxzEUjaQkMcvAYv7Xe8TxmBa9zCbnT1XmwfdP7DbW2JKa8k3vspBmyUfJDe9kwu7eHRGTggfZD3GA5a2auHRP",
  "key12": "uVb6r6CpfDrZLfjk1zFTaQokLApVg7TZvGU4Z8b4x1KPBSiS395fyCbMXZx4sqEveNmBUjru8EYkLeEk7zXjQh8",
  "key13": "5FM9XLk75E4wCy3v9F3qNMLV2xgFrM4Dfr4HxwNN6XURXfHiRQ64yYyWqT7ZG4aEmWPTp8fbqH5DSkMuxf2anMck",
  "key14": "4KGe8iWmSND1icxj58HegULj4DDRDFr4WYKW3T4tCRhgWtc4PZUGeuMFCQSBYFMSVFv6esKPuHvFRYkqGYudKbro",
  "key15": "5uUKPqg9PFQdsEUe2BQjmzMSggEoergJfn3SoLbvctp6y2SSD7EYha3xrb8zC6iZomY2HaGQ7FMVuVRv3TT91h6r",
  "key16": "ypJN8beEtRQSV8x88rHz8mZScptEaZyBrqFDc76xbabJVM8mewTxiBRzBtWgvCdPosi38iE8WUJjr4sFni69TsQ",
  "key17": "4gYGKXXtESemohxFv3sgqujzEma1hS11wSceeucnDbP5H3Jt3Npu2TRQ19fe4cdMpufBt5615rKMUB2fKYocNkqu",
  "key18": "8T3JjhKH3wDeChRjSBTeyvuthQTdSYECZfoBqJm1NRFDnWkh64sP9XiGjhxqebgCzSj6EU9ZzW2iez7LYS8Qq48",
  "key19": "2Bwxwv5FKVBHX4FwgJx7994fvhBjbynjqUiaE56WU1NrEUmMKeJQbZaFpHbAZ5XmTggNWZLdKQ1a8NnufYe2Q46Y",
  "key20": "48h8meMKqGKcv4Rdvc6R4WmyegYhWCU44FXcgPghbW7Q1b7EcDgxK6pbbKNEymNnZJd4JCw6d1R1ZLWe1MVLYXGP",
  "key21": "598APCy5Qi1rJJpLhM6MyPfCPsvUwB85cS1X7yJf6fcSU4XP41VisNgdLewL9Yom2ZfbBbp1Za6gVE1Sx6zKC6zv",
  "key22": "4ACfqxPutRPunXHTPU8D4vGG4wgPGzw4LADesBTudFa12LahvMfGbRoJuQz39JB1QVGEydZyJF3BnE1rRfSoXUR",
  "key23": "2QMHDe4pLhFEaaU7NhBdJmu6hxTNMjTtoDqc2LHsKyxx7UTgt6FnEMk4Wq9cEujCtKAW5Eq3tE3YY28UpSbE8y85",
  "key24": "5LyyjK5vDa3oiWuvbv4nzaXrQCRuxvjum5weY7HjvQrhbjChRSBREpfMPzPZy2fvCwFLQMjS55xM5h9sfsms8XVr",
  "key25": "2V9yobi5SodNNfsacjcnCU8SSo7zeLjJMmriPrBzhsyMGqPayy4REMg8QnU45pSc7fXbgFqfJxp9B3gpYLpFyGem",
  "key26": "2qyjzuYZXfGYJQoNpwtnmBt8SSpFAyjy45n1Q6k2URpreZY9uDevS2Ta7WkKZSjDXSEVUXqsbpW9UtN9ViULhRp9",
  "key27": "2fJT5KA1ejrULVuZYFC81aEGQWPQdaWiU77hhSwSRAEPvyibNLb6Pa89bkitxhmwDbyGakZJDAT8NdYFGA91M4vA",
  "key28": "5NdxqMukGG58JCTNDeFNjTwJXpswPE6QqEJNPvvjvXnS649RHYW24BHnCW1VwdmXzHPe8P8kB2XA8hNbqPCXxsSX",
  "key29": "4kXAvL7vazk9n7Py7QSSNEGX5J68oPzrgPm6SMFjh7gTyneGFqRzQyK7qvFCvqEzfqj3s7E5Cg9rnwC545RAhtvz",
  "key30": "HRhMAkm6ZakFGNPtrkSTdFsR8Z5sH37uTWWDehNkpkednw2JMCZsw48S3VikJe28PwbmFC6nvLFWnCPM2LjXG46",
  "key31": "5NNcTYXAKNtikYNryQ9XPfMu9ZZyqGfWCA95beo6zWjuX1K6Bd2HcZRF22CDr35tHUozmq44FGG3TfeSbqhJeas3",
  "key32": "4vzencZAJKM5LSZvwFCLqfSDxChDmbL9ZYLiMFmDTvxHzPG1qc2EoG7LHDcmdN3jZ46yWhzKJWUsvDsLc9HGMDpQ",
  "key33": "5s9WFHpwPAkaPP3gnekLaaUSopGZuCDVQJW7yYyVWPFauTDuVYFcN2ZZWXqN8RLiZL79134MbRKVoRPSjRbJB9z7",
  "key34": "4nPE353KeyNJE159bs6yGDNmzDRWbJs9w7WzfZBBJKFK2Lx4AQ77HYvuaCuTx4RvonjXcMGWntiZ8MRpKKQfQpb9",
  "key35": "48fU7V8YmeBQPGMQDphgWsYeq3J2QCBytB7EpoV36nWtkUr5tP9kP5jN7NtrtR2yzUQtMG9EnonVuPuNdefVrzbR",
  "key36": "3cPcaqoD8hmdrz4YcyAncVyFq8HbXBhK4XJ1HncB4kyEwjmSNRmQ84B1hB7iEzkgy1rhJL5AGmz9TKMNyuY7mwam",
  "key37": "q4hpPSiJn3HJSbt2sA1tiSWiywJfo5r63EqaKWFxCz65Q3VYdydX6NQEG6XJy1hefyThp9mBjPZGzXgnsuAMSBC",
  "key38": "3AY1bqCqeiwivcWRLgvvjdMpjkrS347j9MrWSMWQLTftjrdKSnij3U5QFtbw2kECgtZws4hg1HtvRyZHurY3wYdW",
  "key39": "4i68ceDvPb2MAmdT4XHXtFp6TGQX4Ts9r1L5FrqAN7wCtHqkxQUXqrSY32T2iJDWa7u4RZjNRi9x797cobAFn7m7",
  "key40": "4jiyAFS5FQLcNrTCdykBwSdBSXAuj6ZvM3oNBicim2ZiQC5VBDBZwFgiYa7YybxknHUJcUB1P3mUixhngieTqarS"
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
