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
    "43LayA8VyTEeC74cYWf8fkCydxKznTCwrqUMZDaFcyNffgZLBiQmskNBC328vRRH41wP1VctbpXvHvijtZqc8hTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VeYuPPA6WtibFmD62TzQuC63PvkiwT9FHJjnwX1tVs5S24yste86etSUHVM6GW2UN6Fw8ByUonKx1LyHdALerpg",
  "key1": "3e2ivQYPkjUJm49uwa8VDUqNzb5hWQnCnbFAkutzxk8i4aUgKTVxKfwKAkoCkYDc4uBCwqxTivcMc9v4DgDV9o74",
  "key2": "yKaXx6hDVr1FK5H55wDfcftuFwEZ48MCquFXtczSmCjk9inu3YST7YsK5zP89uKtpHUqnqDp6JAsJ43HpSM6MhJ",
  "key3": "6MMSxkCvKNSqQhS9rMD4JPc3zz8p4wfgTgnbN6g7ZVmZgihWQkrgpRhvsP11VrJYgVbrectsTrTnjab3tFAJxkj",
  "key4": "3pgRxYuRev8kqtqteHmUzp9g2Kcunz1wBe3PHyPjkfhfQfpczbREVo6v955xpNaqzFHUPcVhGRSY8orJde3LqSC8",
  "key5": "2tDYriM1TDutNd8jbWY6PqHzHvKPpvpNjV2Z9dSX3ru7dKRSMPvRWqiUqWuae98htByWPBkwXAjPHnG2FPwrnfUx",
  "key6": "2F9tYxNC12BDVx5vfU5XfzfubzteH8cQmYq3uA7vQR3YYPvxVktG2JhgzcBhC6CztJQKtm7sULJLKqyjk4wcjTyU",
  "key7": "5vfzKAfWawUu97Vu9p8QtkeQB7m63NSVFYqch8SNKdrTHeej4x63zNYAnPxrtZHBt2ZASYdi3XFMotkmpvYKFJH1",
  "key8": "2urrGkjGkxkAEes7ZqXxpJBd85z8u12Z2RgQSGoj1AV75Hc9y8p16j16n7WcK7uavvSe33GhgSTb7VorkpmtWHeL",
  "key9": "2WEsteiG8xhSBMHTK4zzZeAoPVUojxeVpBMaWkLt1PWGcKvXeQDmqbZCfttwVbz5qGfdjEtMgrs5zNAg7nKc3ny6",
  "key10": "eYCpfZbgDVWFZe6pGkc3wFSCpbDKKEyzxECLA8m39XQRdckJb4GYGvcTM2YitkgS3FH4aEWPD2o9MjirPHeEdg6",
  "key11": "4k39tgtmGaqMYt2XoTbBSNySCEVXcZrDhuUbazbBmBdkXNjhDi8RaFA1WjqqR4HPWn8Nv7Hx7cirv432FNKdwRuZ",
  "key12": "44nm8L7sbcCoxnwJTHrWJLPE2dcHYex5yk1qYxDwAZN3pbbr7cYgbGxA6eEpaTsYNAeeAVDJpJA9koZswqrq5QkV",
  "key13": "3wCBAtoeZhvDBWtC1frQspzx7QeH36uFemrebuQYLvQLBJefJebnBWTMVSjJSLAM9uhUgwfsLnKjbJ2gjoL3Mseu",
  "key14": "UpPbcJs5oiYW4wo92eYuYxL19VJheavNHfoUJXK6YR1s9SFUZQCtRjxM6RhZyQr12TeUsPfvv5KcB6DcdeZaHhw",
  "key15": "4HCxMdztGkA19Au1iSEm7HeEzo77W4M6oxcmvTdxQG4gqBZfepfeAyRWznYin3CMoweT7aLYHZZQiBxnifUgFLYj",
  "key16": "3t5944G7T8QDcjHno7RzyJVkDztzUHWtF6JXkXKwYu7C6yNS7VvPgtnd11rX4MfttLQNTvMvT92sWu9rcRej8GDe",
  "key17": "2jmdcLzPrrjx3ebX4BApNt2XzCZiLKV2af9P2eymQ2NTm5bj51spM6TJxiLPfat6XTtzoo16mXqaB1eoiRMKVFA",
  "key18": "41KPHR6nuXHgfZ6nptGCQL8GpbL4v8r7MWPmMJBwS3a7ZJP2HjYhAmdRint4Ef6UcJcXN9PNfcFNSEnRT8VzuKeq",
  "key19": "2EmKihzDCAkctbwzhaPWsjNHwPpmTH84ZSG82qVZbG8Dabq4RmmJXAL22zJ7HNyF5QJberU1b7KQojU81bxnh8K6",
  "key20": "8mMPPPcw8q6CQqJRMK4WjD9UR3xh7574LAvTwGRfV5tM7xxuvCXJoKgHDdPR2mbV1FbMKycygCXFET2CGQLz5ha",
  "key21": "3U4CCUE9hZe6Li8d2gYnHU5Hky5DBftA3Ud7G8mZFLF1tgeFRwSuPTZwkSqvLJTPKhGBjjbxKqGyjyVQSodbu12Y",
  "key22": "5SAVz9QyKDFDBino5k6cvBbKg3PAWyvk2zZu35WBAgVeGiUb5LcmRGjMA5RKFkgiWSwgpZGS2tDy4EsUwKYwbcXD",
  "key23": "35PsBZtttfipeYtSZJKB23qwZJsZ1C9CpAYziAwYrdxgTXke8k4zg2dQ3F3HjkPoXAsWuYTMayLjuLhr3Nnv97mX",
  "key24": "YRUbviuJ5vgJCxCuMCsfzYNbvBwokqrmKpahCNkSfkCrwbT5ift7DBnJ3oTuPoAv8rLYWH1GA6z6Y2NEi1bWs8V",
  "key25": "2AifUV4MDHfHx82jnYZRXm6ERT2qMNZw4kKAHdchdxVtJ7wDwRh6fj3es5w1dfC6MXBvTuqpicrZak4mjfdVfZ4o",
  "key26": "2TxBWXwgBKvid4sU77hZep5g1JXh6dqDqJdBdhLY9XpoX9Di5aLRULKL8NXAogRAMu1YBkpuJruQTqRSb2rKnqij",
  "key27": "3h8cygf6qsDuRmmf9sNwEcb7dnn7Gu1Qkkfs1DKtzD86tgrq1cC3h95yDnyiGjeXBfoBENBeEhg1faCGmz2jR1Ux",
  "key28": "2KjE4W2Nh8rkSfisagrBvoHWfDBAgkDrLEDA9aMiPDMo5iFWZLUe89fEVTS9f45bYYhPCfoUpyQFY2xfCVUZvxHu",
  "key29": "tiU8vZx6aJF1aAyssCVpHFtmbv6g45P9sAPZMA63fLTC665jHNe4V6coYU31Soogbw8tpj4Ruco5EK8jpvMsGgq",
  "key30": "32pmCqQD2eeqQdkjw1YEYfEp6RV1BFbUNhDbWRfwDJpMRVKQ57BJKpGRHDxVfsY68Nk6iTRWFHrt4SHc7nxL7Hn2",
  "key31": "5vr1Pn8HEUzEuXKtLvJ4L62oLUePSwnMXTF9AWepZmDfTq4b3dApEHaMrjyhTdqQKAzQ9m5WAS9RGL7Q5ow4hMuM"
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
