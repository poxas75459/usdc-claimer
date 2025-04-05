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
    "5kgL13AeA6Bu588hJkU1Q2LLSSpT9WRBHPpx5VkfLnVRYs3KCrwar4udeCwKKNW5F6EaiFUVfvGczmviSKWTiaVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fVq4zGNFcFFY2KQjHXaMaWuriug4jvgKbaoEoeb1iSwzze1Us9yAG9VuXTpDy1nWovVApT69hppyQzpfAa4Unbe",
  "key1": "EkdiEjzZ3gQ9bvLHsSMhrTQKgBg3wicv4aA6SSiWccDYsRxcrYwRbu8nwsQ5Ct1YSTW13fodq1C1bRZBRoEi5VD",
  "key2": "59BbjE5JTGCMemg37uDropXup8PtqpzrjXCW3QNrUSc1WoEs8EVZQdTDzHe51ueeGLWXcr3hcr7PigdsjM6XgBXE",
  "key3": "2UF2YiB1gf3Pcb9CLp3CiMPGb4LWYmX2iYCmXBJ8H9o6U74TbJH6zLThAuJofqYLQLuGWsZWxH74ykkNFi48vJAq",
  "key4": "6GBgdiYKcR3JivRMHBb9hFKszvHewuRL9cLhwoRWPXBf7PAgMAzSpj8rgzkxZ63MQnL7uvXLV9xF3U17Q72HuWk",
  "key5": "4Xd6o2LSyCLx2cy1cYR8XbJerRc3UACKWew6NHaaxuHvbV3fUf6AGrjqEqy5htNBfXV1wFVhSqT32EX4fuA6MZYN",
  "key6": "38LuA2nGsaHURjbJCzR8hZGamBReDiSLsijswbwagQhpaoPLoN2q1cFsNeLJ3DFX9h7xm2NWPiBQrVULHQzdxZk9",
  "key7": "5vxKTfPc1WmtjL4MFfmCYWoi4S5s41AjWo5Se2hb122bY7dem8ipwSMzobzq9LCCoKeprfiQZq79zjkUf2PonL1a",
  "key8": "5XNDvNtPcpNKEU9gbkbPATkVEvykcPbPKpCcWnYUXMjjL6BxXii9FKtYvebmZJswf5tyQweu5kAi9fRoYEjT8RzC",
  "key9": "4SBf9DUSnqaUHhT1mPuDsJ1MPLHWjiqohmLABvHxRp6H9qc529ibZVWsADo3t2cDuLfNLN6DDGMChdDdBVF3nPcw",
  "key10": "2HJbcbFEWQ8E4Hx7SMJ31jzohTyz6ACMG76wKeCyXS615gC8PyoZtMD4vTZH9vKqnEpRfSZxMnnWNZy1bZkHDurX",
  "key11": "22yFwBn37JeYtTWRwTtVW3guk4pa3R9es7um5v6RtcZd2d7rrDtz4sGzsjpGiadkcJY7UakRbpqP6dAwqXZQzX4m",
  "key12": "5b53wDBPq5Zt1hPAznkkJNRoxaeLRPUDMAvTxe2EerJgDtQ6SxtUkJAFaXLAR9PMetTJxyaNzLnGWjQsJr4PiRdz",
  "key13": "4TVmpeFHY9jkCdDs5QU2VdMEq4DSxMWdmmctD3vzAQ7rtgTMyN37KPLYAjZHMK3K89LVVwMp1vV1osd9eowPAyQk",
  "key14": "Lp2cMcEHuPnwHgxnqrBG7BP96i8wQyumyXMn3KPrZrnhkAGDjfz6CrVsT9ux2jTE6e2SQW68rmFqxZrRum2ry53",
  "key15": "3bVpWafU6H434Mcc86jkBgdGkpyXWarP482nHmduXtXNk4kCRpBodfXHHTJFjpU6YQFsGJ94pnSStXzkAKVaqf84",
  "key16": "5FTgpbAMJfsVCfjHhNQ78ua5M9sd4UwgYNwtz1F1P1iq77kQRj9v4miff6sVJhfAz9cUyCG1dXe94Bk6bE82wy83",
  "key17": "5Lf9qKwLeuyGBmu87s8bbAezupwA75RW3fGEetcK2CvTkjcAHuEqMeU2YccgQ8QXA4jzaMxkEydyQbDrmQZBWAW5",
  "key18": "5dysy7LJ9LehwgQRwc5gox2AD2UEue6tvX3FT9CQ33v4AvmWipSUQgLFEYRUpxMjQE3oaWpeg1MU9yUJmAkPvW4k",
  "key19": "5pHa73qK65suc7cXESoRt5k825d9qKmAyHExHZcsoQzNskzSGcvweLHY33ARw9WAAbcwQpYedVYXLFSCNX54q73z",
  "key20": "22ckETDhBier2uEXUnAii45grrFf2xA4Q76qkB4ijfNJS8QCvLHLNiTGSDH2EhAJTLnubV645gy6N8RGDe8uFKXL",
  "key21": "5CiK9DYEf3f9iFQ5aXCE8LmepKQNjxxgzwBnEubRJieWbUEscYtCXcAe8JyCrAqGkKe1SE5qgkdwNNfwC9Vydih1",
  "key22": "5SmGDJnjxKpXmhEnW6fYa8p8EWCF3Pjw1csirHWv7Git1sifiEQ4NHY5mjwPKdXY4kKzfM2zDHnJWzogELLSP4zn",
  "key23": "4iZNt4vHahBwZF89eWV7mweX1JMtmzPWXwVtyPE23KwAdAmEwEB88XgoyP72d1j1UeNs6qNER3F7PYdBf1ykGnK4",
  "key24": "43tNCLqHwwKUkozJkcEBo1X4zhQvmz9uoeDzs6c1N8EYHkhj3dViZq66fjwuBhGoLnD7dwoUMiQf3H9nbDQc4f21",
  "key25": "3yUxAJfuKjFajQEgzc2z6HoHD2PrVVaPS1kP7zzhMjpcjRwdH2T5pihT8z1v51fYU8P97hu2qxbW64XGbhzFNhCN",
  "key26": "JwGb64UETGkMZKwTdKwxbHfNNCezjfod4KYXHQY7dQmHZA6pwCm1rUFM8NqmJuBZpzoXAiD4zsudhKscuoe9rdj",
  "key27": "SBoFZAdK2M5CPL89BXSrSxCnMr8Z38Fgbaw5H54o5SH5qVhSxYX2gtnJVcWWJqdh2G5N7gzwhYd8s9h8Ua2YdiE",
  "key28": "57YNjnZHBX1NnJMvzXbhdWFun6B1aHvze9xKBZK5PnncqTHUNxeq7GHmUNMULKixLLdC56yPggfYQ8ecWaaYXasA",
  "key29": "62y2oNoz55yPJNhMXuGksZo1FEETm4fv21PQi6WqbdZyXjWUGDWXeyhXMTMkkVkXVm9YUbstWMMevrh6RgMF9wmQ",
  "key30": "WiUEinVgmiMVJVLLquU993sTNDKj4ydRSNqVmzMDAkqVCfPv6PfjHicq7s5VfyChakMCz1XX7UmEHN5dyVN9Wm2",
  "key31": "35JFV5pnFYzxZh4xH36UnT8nucyxT5wpT6pWqU7YrFUGuAbpufs3gAxSAUyAxUVB1ZJ3ZMb1KJk1He24LJjrGNaf",
  "key32": "YcedCxMnSe7mpNTrjTRCtZfHMCbJj8F9FrbmFJZsQPdDVvrxpSFyk8GwoBLnHxz2ywJkyotpRPqJSqTVyJNkFTe",
  "key33": "3igPC5ounrWGVb3JsMEZzu9JqsY2LQdoYDndcgymepmP71goLzKc429WnmgbwfXozAMnCBrEsVPGCqJAt9wL5ucy",
  "key34": "5cNDBVqm1FQqZSsdvYubdAVRc3DVmr6Ksqceqv4cdxeUCppBMo85YD1gVWGFHTgYqcxmcsLNx9AbHnwbauSQzHaT",
  "key35": "5dqWtxTegUFitiRkSnyruefBfm9VKTMRt6NbjVY9nJugx9wgpNXDy8VGYvywPJ1XRzYyx4h5YrapyrddeigGHAjX",
  "key36": "35kZp2keK2HyZ1YokuF4nRRDJiiReVbtVXwbZng7KBMjFEFjVYgcHztkW5934srXnt5xYuRUQzDZ33tpJYZ9Xoss",
  "key37": "4XfbK2TXtrB8dTmzgBF6cVEa49fNBzj7QtfRBMKTiMAu3YfZbZsA546hRDJ2JrCkrQLTnR6SXYuoMtiNAa87x9YJ"
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
