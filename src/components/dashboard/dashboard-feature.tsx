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
    "4NfZSEF5yhgNNEee89NPe7QzCCuWfEYwqc3pKJREZdxkDZddV1ViTE4BnFkxYrvH33zprYhQVi1hPXGxxEHomfS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HPuJhHx2gcoCgoGiJU2rAh4EgJSRXJcTuYTakoceTjBbpBmiDuDJL4665THEGX4gMhZEoBKQ2Fca1NJadncEmbJ",
  "key1": "3VtnZVawxEfThrPoFydb8VgbAWWrz6RqRKNk6mnmLxsC7mxzKnucMzpfa6DZ5kuCygizWYww9gNGCiEez3PuwrhL",
  "key2": "639RrB5EgB13w28XEUSiSuwFkttpkxKbEp3CRrDDmwWqwmWTfAUU1YRU1By3tpVa6BaNsiRCNSVxguqZwdTs6FSg",
  "key3": "y3sXoFAiATgzKw2kxKsw1XLKgorrT4uZjJJtdEX7j3HL7EHEYgJwgZCEhoieVtNVUP6CdEVfFzUm3K9nLED6Db2",
  "key4": "uLWTabHhfVTGjHGVVtfJSjJoDPfUKhTpc7EAhy43BAReqs6kr5Hj9BFv4DSp3F7PkgZqPPgNET3WY3AbCwxs8nN",
  "key5": "3vv3JxGHukNYsBvb8zSYME1pCZJAYuh6pA7MHVAmgvnY6de6fDJTBYhYmqnU9vShsT7MTusCcU4a3VwX2RtvG4mc",
  "key6": "5fXGBGs6hkHhKWkd5BQ3CgnNkCtnqe6jcqWendMfL6qWAoKVeTgzg4hXwHf9AJUcd6LfMYxmDd9GHLBX1VgZXJZN",
  "key7": "cZULQS7S1EcwyMofMWFwdrkb7HmawW7E5uhMcJ2RU5XeqvqawJPUWmbAivMRU5WZdDctgYQCJV5amj8C4oRzpTP",
  "key8": "2ya8Ss8JhH8QywWTN3QvceBAaosDeCHeFgFHXVc8w4Gq83gDSHTQ4YXnVho3Hryn8t2u7isYfytbVk8aewBQKiSL",
  "key9": "3TwT4PM3vqQ8VX2S17Vw5RvL8tgC2VQ1baRDg5sAZJ2p6btQZUdeHT7oSDePCJAVbwZ2VEUjaPr9MBdhvALSrTX7",
  "key10": "3r27aYQLhDc1cAi2cTF1TZe7jyJvFi9AN7vYNkgJZXtUxYSNrsfiWxDp2ymBEMNKYNv2jnLsdYYVkb1u2XFtzRaR",
  "key11": "439SD4gKe1oDuB1Ceffov5oiwaSRpGC4XMJkZWjbFtGStEtSd8TtAKxJRvxiLksSCpfPaPoXKFzEoYRSWdsHVU14",
  "key12": "2mNxJqk7e8SaY3HRcRWxvZJgZXadyPZCPGKk2iMnve6K3qv1rK8bsx8fRmuLiwnz6fCHmWXS8xn9MXwQqC2YyJkQ",
  "key13": "5SDnw759kwEvVgRx5L2jnU7bpXYmGJDkDtSaF6yeNcFniJiXf2W1PoFsCALmgBrFcLCFSseQYdv31SbA3w2SScKG",
  "key14": "2PbAoRFD3s6mpkNJmaW6wQpKVq1EUiudsp16777ECquXY7gwcxDqVSsm7YXGbGTPMFycwyZfu5Doipa7ndj3GvQj",
  "key15": "nThTMooCpSYeqk7JioW4ApV7gR5b8G6ZRN2hQMN3JhbsxjHALmdp6kvzytFYuqcZ8m5vTD4nz8xmcwJP5ByeiU9",
  "key16": "8tnzo5Ts9dNLQoDvCvptMEgkqouA3xA91aqvzvCwnESrL7Vq7vYx9yowiwfPTCcsib7L2KHcadspXAekeQXADwu",
  "key17": "4EA7DcvnLkTVBs7owbx3bMB573o7mFMcSS9NRohxa7v9GF1Qqp3N62B7cfPetDaqRaEkVWAi1fWwqCqMfW8hTePz",
  "key18": "5eKmZmCzgXYT5HrzmRcZaoJoXpE7wVwCFC7XJURAbEVuyHXHpBMLPMpHdwqrz3SRKzRfJMerBCnqqwcD9yvHvFSU",
  "key19": "2VZdDARS4sPBodcaPSnxHCSEkXZ7rVDLkazUocQtP9EkExyCeAtfEhSsjMrSb2EC4oiYujJbJX2bZhztMQvK6xSt",
  "key20": "6iTREhmXMzuWcRHrSPHnqAm8CrdenoeedB5hYNJdYDqNsu7GKUEBxpkNZNeook6QAivZWQVbM9p3FM8MCkHzkCr",
  "key21": "2NXpPRUBLp4FuQfUDLcRFZbcSKcxyFKTRLGvU93KzmWDdrukpHeMjHtXrFivdfFrALGD1VKcgSpfXmPvvnib3ybR",
  "key22": "4YX8NWyhciaCUnP5zTCf3jWowR4eUECn2dyZ7XqHX9oAFQ5MLHnarnaiEAGEUPvf1q8Wi6H6XJnqhYpiC9ivtyMS",
  "key23": "2a1wcEyYQpCJh5Sam9vBymdVVnrHLgnzDzRPn5TPhoEDQos6xmTRXDBpKJvskzcpcLHBhq8Ajm4P5uUsSrZqrsfK",
  "key24": "59bfFx3yJJV2dTqi1rFoGZ1gxZFTSFfb4m7EgqhETmJ7dM3BxRxpkw1m6D6F8tx98ZsK4uwAe3ezynjQcXddScFF",
  "key25": "2P7jR5eQRM5EsNAGK9BQWMBvWH8Dy8Up37n4TUw5EA2q7PCbUj82XpzaNvmzcfiaXjjtYLmVrjsDBhbu6M7Nky2T",
  "key26": "127Tczs7GqauVM5NudY8e8rE9YtJaPvVWzTF7edpNPdQjBTgVhPwvhmVvXuYcTZ1hsy6t1ZRt8eukrp2qkioKYsC",
  "key27": "DgoURFECjBe3Gfn6LBu3KVHyCNCwbt17QwTriNANHMprmFDJCWHPRC1QqNgHELuM7XSSMrSbYpksEu3ske9SMYN",
  "key28": "5xmCmjydBtUZK2kJknvZh2SYsYiwYf8U5XFaTvqjnXkBLmFeYXLMUoP8RhyR49JJLNruty5xsdcCS9Ct4k18DbeG",
  "key29": "2gBe1ST9uF91E9rNe1Tu3YxBVML9EY957qnttXAExTQfq1yEamrafPAQkigDf1X8r4R8AtyMenMf8u7CNk3WAcFB",
  "key30": "5y6uGp3X3k6BKSCE7h22vqQW8BS6FVWnT8ekuePHPoA6KgnDKuhmtPvPrkb31sKLjcA54ZfyV1u5rjDMK1dyoauj",
  "key31": "3oNUgDdgNY4LV4SQuRuB9nBocs5M5g9hqMyDosrA1qKRHMitS2N913SQFM9CnY8QHgzzBVQUDGcKfjNp7nWRrUWu",
  "key32": "2nKGYA1mzBGVobUWpemxtwJm7hg1GCap4YUTx11JRMCwBBPHRYtJPiTx3ftEASiFjjVKijYNE5zjinMbMhMKTyyA",
  "key33": "5uCkAN2bJjbStogHigpJxd16gZuuHJoALtYtJTLQMjRarEmSLtfxjwxNx2L7nGYCay95EMPvKwNDiquob1PtzeTF",
  "key34": "3WSpp3p65NkVzXx9zdBhiScxNgK7ZxSphWKxkCvwhcyWDJrA4Wzvf3tWdTmoDNzQYJPnYPxQup6y23BaigMJvUbU",
  "key35": "sGiDtLUutop1y22XTtUtViYJZpWnbv7ikLCDi3PcsqqHguHrFoCdTXEFx3pYXh79bSsk4hbRqNUaW3m9HMDkE24",
  "key36": "2p6MDAjDR47zQbrpVcae1eEniNA6Grbbi919TRd9Ev4B6ipZiJT47aze4SrN1Xj382AXLzT2akrne59H4Uc2t19W",
  "key37": "3hP1Kk3fcCRe7adozaekZ4ewscHhsk2oXyJF22P39AUSGXZDfE4qrJuoT6j9o3XM3cJScLj9V1VKTiGJE3LUh9ao",
  "key38": "2eNpBddxT61D3frDencyMjnG18JvQYUnkyBJfFeSWhd44saatT1nU4LH8Zf9xgqbzyZ7CPFggdqyAZ8NWQ5Mykd",
  "key39": "4Y579r81eBgnnPW3SZmwNBvjppyDj2Z5REmtRFkBjUcdN62vHGZDPS8n76W8S1sKTdCmmMxgYNF38uGGG68FUJzz",
  "key40": "4A9EHsmXAG1egrJmdB6W39yF4cbATZRQrGDLNv6D5RQ96B3vVe7kNvismsUAaYeXMtV37UeZAXXUxmNppguy6dsT",
  "key41": "2JYLqgEhT2GD9k97QJ9AVRkJLFXRyW6Q3aE4qaMWfLSqAvL2Sd11cGzv8qa2vK6fXvgN1LMRzB8dZQPPmBVEJbUG",
  "key42": "2qaT2k9HhgcAmfQJ3Aq4EaSh86MNusHMnvhUtSDe62YkBbutPNVQt1vCMjkN7aXD5oFSanPRHyCCgysc8PXxNm8d",
  "key43": "rw6of4vq5yV3HMKnsgMfSVJF37G5wT3SBbJMhn2njG6vUnyAqTPAX6JRwPZzyvEEwz1QrfKrHw5mk9mT6keQrur"
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
