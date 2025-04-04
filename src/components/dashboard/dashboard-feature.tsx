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
    "3ugTUwU56ALG62AaRRrrZABCnWbmBTFqZRrGLQfLd8fhV2bf5be9fDTGthEhmpzGfL4Bxc39TZWHrcxHmvqUkc2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Thwkak9pxr94NtBzzrVH5R4JBbjz77LFRN9KUYwjXouLK2CpKYbgSfJkgwPyobJzMSkiFTAGRDkkwrwsQBDKYiT",
  "key1": "2VuWyo8zbRH7T3XVaXB47EF5p1CEszQFvTcqdnSzSxnhaPLWjAfXTrCZNH2zTuNDpB6XCSgE1VFJRnf1fCYfAXt3",
  "key2": "349KT8Rph4dyqvXTVqxnGLMFQuT4a5uFTm3TQxcqhvgn1o1DdHmYjLGJS66Xcte1eSRAWTMntgEgnugzGCZS5t3V",
  "key3": "3u9JZ79sGjG5gHZdauRuSowFA5Mvpu1LVbgeATmWe5oTniNDmXJM22by7wEvUsqB9zcHCkF6AF6tyeHfsmLDg66e",
  "key4": "3PgFL3Ys4rjvrRuBzxUCF6Nbm8KsYy4Pawxmi6CFYd8F15pQNH9oAS6RzbyE27oE8bSt9NExHCvX1STpX6p1dq4m",
  "key5": "vFZDKA76N39phFSQaNgcD8Qf1MTL85NuBQAGhpaC1SbBUqStgymaVVAUhwF6TupvWiNk6qRaqUKH17h8RN6ePzM",
  "key6": "4MAMv3rZAGUdgpq5ZrBrvyTMm9zJdQSGhTg9JJTTBR6VfteKxNGkuZezwCVNeNiA8KLAqn6iibwnq9zHPyXsNuvL",
  "key7": "32v3QrVhn9r2nJ4WTMkbMZLj5zKgEYymPtPbFy9qNus669AMbYeT6SpNe8qs6LEkapSyUhrAg5diir2sTPfJztuZ",
  "key8": "3VjEMpbZ25aUrFnQG3hffeYviqo9ZCJi4MgxPK4t6cpswjERa56pank81cKuYjuDvuGEm1uqA6r4SHLeQ99unDnq",
  "key9": "5RyRLscNwjgky97oqYrYZCUcVEpQNxvcXgasCyFZ9fqRqRDrRe7pDmKL13DHiT34EhPwiq63uqhvcL3SkWiTEfAi",
  "key10": "3fxcR6MJhfsUvrRWvsKMufzg27DUMUKpXCbw3K1rssBLQ76qfECfUWM6TweF53uoEXeHRer4j8LZah3SpU2MCTwV",
  "key11": "3jeu7NnSEoTpNJf2dytoLvXqEQdHRV1bq6o7bSqmyPqR667DWmuxirYMTcQxZ9fSwpP2JvJQBmKsRDs3u2ajbioE",
  "key12": "3t1qZf7dS7oocfWpGbpGKcjHwy6Yr5PX7AXEuDP1S1o5Cg91YS5Pw1fQC5huKLZHF4Un8SXJaVXy9QWgXCNGmPz1",
  "key13": "3SyPURYkhBvqvrW3uFUw7zTv3Z21Y6p8wXNME6L78FvkLHJxy8YmEMrY6XdLAfzZYCEUxD2rsjmBiLUYJnCzeDaS",
  "key14": "5ve3LagB2xoBLSWmHLAvovQaHfFMJDv4PSX5Tdj4Xr7yPJCjPgCCDFZAmyrsMe68eafECLtXJpq3BzwEzT8EKS4D",
  "key15": "2iiSPurT8mAmHRrkYbrQzq7MqV96Sjy6pkCz6PUVy7iSBwjvdDJB2LDmgxpx2GSBp4i4dffmts5SMjCxbXjef4UN",
  "key16": "NzZTuhE18aE3Dwt29KRx64egZfVhG3LZsfhwisjT2uD7LkY2xScg9pnrUu4iGa1ZD5ngVXjedfv2Vs4LhthwfJq",
  "key17": "qJDx4VgUDwLS9M4nr5xk9Za9J85eUonCEF5u33dMtaRGUD2YQQK46s6XTvqAntiv8efWfBTYbaD4P4pydhasg4p",
  "key18": "3qFZZ9CxEtLHJDyPs565jhzKYziFotynmoMrakFceD6KKmjTEWdWjufZNpoBU88suYoFvKLVq5DVnaWG5LmDCeWh",
  "key19": "3yT8h7HTE2xsHtjthNd835aw7k2sGgBnFrGUTWiaUcx6vKGo1V73qz6fV7TtWxpquVwN7YoCCsB8rzkUBALxGKQs",
  "key20": "uNjKSe1gdnrUedJdNHKwFoP3DPfmKViHrD1Nh2MQE6iX523MSekEPLh9MbnqJDsBgQ4uVT36YSQiVa7657Diifo",
  "key21": "5cvEkxbr1hpBuJ4DCNthEh2j8ihwBrfXrWGqhEH4T3K8NdVS6xFwyGpSkVyANY6ZpQbyZ6vJpo4UZqrcLZmTvHoP",
  "key22": "2pqJoqtft4gtTxDcQYpB5B9L4KeTypFC8k1XmWmAc55vzRR1jswfk53GrFHm4CQg6jkTobkzvXVYxu1tUZ1hQLUh",
  "key23": "CiqECWxAMad7ti1oCV8AGbPvTyGLTQi8izSiYTqmBiP5UgUSqRYP1o26qFcySNjiWzJgEToUwYU873eqrySSh3F",
  "key24": "3BxYQxrYK326BJjGC39Tn4JnBZKTK3he58WUzEiMu8tX3oTg64pKAmBnZsnLZGN5tgG25K8DXL2xz5EHokcMf13W",
  "key25": "2i3jpDBAet98XTY8EVYEE6XC2rgwMKZM6fVyHLTnasGecrF5ETz7Y3NaAD57RMi8pP4KkXhg6oBpwb4DgQNPdU3d",
  "key26": "678cW8xywG8ZWGhyHmcMYJ4jtyk8rsESHkdcYXEYxr2BzR3Krttec5Y9QQaYRW2ciVmvQYoHr5744WTqjdZcLwRr",
  "key27": "4HHAWCENQqbSANHrm6Shi13psAMcqLppiWPS6paQkgin4Ljw9gtBBSESJhSWaM5mmq7CvF949JwvfoVU8czX76ce",
  "key28": "2Kd5GptVVVEjNeMqBxYDCBs3jvmQ5d78PN9cWSUJiZBaYFyNHt5nXxskMZXvnNj4A2ECztDv9gZ4SK13dMQJDsas",
  "key29": "4zXm8eS2xvtjWT1H1YC7nbodEga6e5RU3v6Afn2rmKkEqE19YeSRWRSV4JPKsumzFZ5uAFQdqmi6EYXLKZRAr3bw",
  "key30": "2scxBqmLES9QLab9xmAMSTC5oT5xXYetWCPv3v3PhZqTEC59pTaBhBHzbmzDH1fvwiRQa1RosYtcA7QpWFn8cpUE",
  "key31": "Hsd7DjApALxNusLoUXFabvqBeEFoUkbSaRcgSMqtuLF7kovsEnACdyWG2q9gGSYvm4YQZR3NioP3En623jJeDed",
  "key32": "nTi9GP57vgsJgjrPE1Qo47PWfPwj4ayd8Cfvt8NNiDza8fVfLJdgvDTN1Wr3gq4jFk7iNf34WzXhtK3upiKmRVo",
  "key33": "Y3DE359Byk3xFoRLJyBdiNecn5ApMrqjp5S5kwCTbcuSTQNriL7KDr5cRcxgwGVVgFQpLt9GzpuTfHbUJCSdtqr",
  "key34": "3EATkupEriQtDmb7TCyMJ4BQbYkjeFyhcYMCk2sMFrmBYDaYYHU9gGmcjop14TiBDdLTeFkWWodhWk1GXZ2A8ibs",
  "key35": "4FsgFvGvUVoK78aaq17ekb8uS99uttRYiJb1gjo9PRJHc5P9eJ3G1zoTEQwHBx3Z6m96yRMroeUvYgbKQr8TvRHV",
  "key36": "3tGXBhE37DBeZKP5aeKMJ7u42Lg71EF7kGRLxMTzGjr49KGuavhztxUnQuSm9WfBYNfB6f8uoSmFX1C19yfhbZFG"
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
