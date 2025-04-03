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
    "BBeSahiFnch1mwTMay2aV84QnhysNgsdYUz2RWvu21jDQ5rngkC6vBq6q1TDpJdUyQX4T3ZUqqokzUeEHEPzGTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MjcXDhy326TjRoHvEZeg2ocAVsT6JwnPovnbY5GGPKt31YF86tkfuGzk1ALDQtALQGHBdzMwxpzGqFKSDybi1GP",
  "key1": "5ytx6ZiWKCwJaB4YR83Mm1ekdb5q6pnwPNfvrkM9ttoEMaKHEKkzmQC9rh48SALE1BCH81iKS3gztzP5xqyNBUBc",
  "key2": "2YMruQA4kNwfRsZEoYTxTDVvTmpeFK66hT1WBszctF9EoHqDTaWkqBEqgBMeD8as2twuEoicpGL9Bo57Voyu7qvn",
  "key3": "Mr6Fg4Pr2eXwKtu4MEdPXRw8aAMYMFudi6qjgDtVcbQ37WdtVJUYF9cWkJkwgCaaCFiFvtftwoLSie9Xab645v7",
  "key4": "WLvMJ22xbRqLyfY5JrCU6hAug5N7k2VWyuwM97mMFJuPgNUWRGkDAQazC8kuxWs4Ag7P2p9dDni8UZQXnux3jBw",
  "key5": "4gofrV9mYXDQdxANEqBPF1CvvxtFmTsMyV37oXjX3pRXjymraZf4tyysRb3F9AUD91C9QfPB6UyhXirmBtnZgHuF",
  "key6": "2bwCd8V7LumFjtgVzuTk62EZZ8DXhALk2n2yLk1UJF4NCtGa7GLKvAUrpR749NGGouD4udHyt5WF4XdH1zLp7ZJ",
  "key7": "5JqQiwJJjseCwsW5ftkZBXAjttiW61gCN7h6HZnVcgsedzm7nshUy3VmH7b5f5eDXi4nFVUEGJPWDjGWXCzy8Jgo",
  "key8": "BVsCfbxWXUDpmf82kae9fU6A7gNXPMbjPVEz5KzYVM3TcQZzjxxHbuUCr9MNuNfoPikttuxnK61fdqUUeRPyz2E",
  "key9": "2B5ihcN5Mrec55dhpirbMBjFUXtVRm5mddwmzeYzbpmZE358pBMMe92EqipYSosGqEPFk547x6Yd29v6Hw1NJNFt",
  "key10": "4wEztYUtzNTQZv5Q89J4nZBUMyKjsGKVTtaa3LF27mU7rC8MAiNFewMHS2CeQN5DkSrQ8xXeGQWx4Niu2rb9qdPY",
  "key11": "K1TrxCQRB3vzUwhfnaimahSCWJ8ZsJ6ayDFjwNNQ3JvZwS7eXddyBjGTLKLJR2EfbkcRg3GnTiKGiYWZXCZitYV",
  "key12": "2xodGmv5vRN8Do2ESSG7sUaAdCSywkraBGvNwVkKF2EePr4Qe9viiZ3Ew8LYJRB6jJpHHmLS8b43eKGPTR4xRFsz",
  "key13": "5jLbcSuqNfcAxAUU6FfBmkqaWrwYSZaF5So3ox8kjn1HZQmN7z6GEa3FvCmegfAhMtfvkHXa4gmN6FDNL1mxsVvc",
  "key14": "4JhJtmxpofkmX28xb1PqgeBA4AKyD655GLZEMPbmeK99g72HZJtUyiYyMktbKdvoueHtAkvuLFwjg1Kpb7FJ3bog",
  "key15": "2s3rgmrXogHjAxWjnTV7RhMad2bjB5uybkTwMfSGuXZBysvzkmjpjVwUGVtQ6Kz6wdjqzaaJz64YzSnqe6xjZ6SL",
  "key16": "2aUKnTqQ6d1RQyffJ8BCBX7zwHgiTxVbPAsVcJtHqekdQLZbJKRSMe43GmQjR3T2W8deydDpoP7KR1QBvW43R46E",
  "key17": "3uFfYekZVgSorQCgu9whPjLhaFieohzD6PPf4gZrHFRHM4HemD294AJTJuHnY1uj5PahNZqG8W5yq9FPZxtunj1s",
  "key18": "DQm2hL9PGscSqGTuuyQRZ6cSdd6M6ffJ2WRGSDbfyegvhs4LWDpCv7GLX4r1nc2ctF5t6sVecytr9vD1SBbvDRH",
  "key19": "3YUV1xtmy3DAGRsy3prwE2JbYosqGJKG5sLxXFGop2E87oa6GEZdeJdHb7c9AJiaJgjAzXBhhpAKsgyEs4eYtprg",
  "key20": "4cbprpc5X1wCngethbhx1DNHWnHCui57xmHJ8RWFS3YrLdvKtHoAMGY9LzpMozmsXB14UwouqTVeLCdiytyVxH8R",
  "key21": "4rXFrkUSj6o3ngzK5jdaP2vjWq1Kn5kzfMWDp9iUoeBXtPmfLTVfv5ryt4D8m3A123DQND3H2BeNEmhrTJKnkWmV",
  "key22": "2yVhPa4T8jApAPYqmf2mHxAeGD7KW6wDF3VpvC1kLCBY7RVo6ab6SzWrYvrGwYtiTnssVoa5rQfdwcptLmxLC9JJ",
  "key23": "zjX8SeSjudhkJ71xU5aLz7LobCswzRxVHnAdJwUW2RQThGk1E5vdt8Q7ijQonf9tbSeVtTm5YCBQHn5n7obsGtx",
  "key24": "2S2PPpLb9rrYSovMFjwfKV19YKQL1yfiJ2ffAcVnDeCX5FPDSMyczEg7J3DR8spp4CqgmbzPWC2sMJy9EoHUhp13",
  "key25": "2tNLjBuy2aQVfkwUZLpWTin8iZbrPn1M5wtzUx4jML4FR9LPvK2gTXPXuvnoK7trGmVoJDoMgRxqgxXRN8uurZWz",
  "key26": "21KvzZ3fvHVfcSYXPnu7RH7siDSEC7eBTk5VQrYgYzJ6PYMUszV34XXD7S17vAcFzFfVoQimuCN1vLwmuGAAwJpu",
  "key27": "3zh2atozSRUw9pgSbt6Arer54pH6xaMqhnMPfXGdj3o715GrHVxHSCgxMGT5AoGEjBt64VBXodsak4Rr44yk7w6K",
  "key28": "2buxzD6jubDhMt2FBSwXAoyfgmyyp37heB1FBs2gpErASDUJAjQBMxyCGt9SpRxwcAap7auEFDA85XVuSY45r3M4",
  "key29": "4ic2kY5RiHsSJDLiTQEfAxnRi5JxgKQtTbaGLSmHHrptsMmsKYUgfj7s9BvwfLv4cssvfL2bhxgnZtchDSrUt7Fv",
  "key30": "5umoAJF8GxbZxaHXHMXYsbZTRiev5NeKUAFe6tiWPrDZKNfSrFh7snE34bzSvaFwYKqttV9JRBtMm6juNTDJtJKP",
  "key31": "5g5criqN89wBE7CmXJT5ozaBkPNaq9ReWfta3XZUd1Rk55ZAC3brBT3sVLVZEXGfKN27YQHwLzdneUC1yNh1YFre",
  "key32": "4uwFKcD7NajQFM5FF47gnFEvWyz3kNkiM41kRZcf8EzQzhbpVdNk26ud3DWsjjnwDsDwELAFafpinSE89nayGo9p"
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
