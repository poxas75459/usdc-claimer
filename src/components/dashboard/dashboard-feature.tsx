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
    "2XmVPxpnDJPWSoKxPvvDStJ5nH9Dag6ipumwdy95DsV9J3RJL96BnyDQroMpdV639wFV7BB3nZU41Y527PKyz4UJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KGN6knh35YjtQuBXscHBcHqwfwxsmjk4ySP7xPF3XmZFPFLmWMK9am8FSADRZzSjbUzPjihd7aDFnFTU6PSaZYo",
  "key1": "3o8zy1FS5hShwGR63FSLoamMHUFhPGbZEnu844ptd3pwu7eVU6tpRt7qqewTQBuwYhU34HPsu9BacbemskF2gGEk",
  "key2": "5KwkQYXZXdRLHV5j6wesQMgeMWtFoA8HWmJJ2RsC9ScByE6GsrYTtDhS7i4VuNYTJqPH8GHN1YcQVXyuXEyStMaK",
  "key3": "NAPP6HcUjnaLGvJ2oTvPS8WgMBi486bfyKiyGBJFiNx1uXwrUbJZWSAzLaxBD9gMDR57UyByN6rZYpuB5J4fDyT",
  "key4": "2zuqBpu68RpdefREtw2HyDcSsoym72v4534c8tdS5673NqR8QtxZ54a3fmed3ox3W6aQNAZhhGCf9E9SVf5NNZ8c",
  "key5": "33R17QX11ykrgqKyigBk1bw8gvdprqgr2s4QnGaKNghiMAuTnEXR5WkSqJq91ahKpDQA7Re5kGvwEKsTQsFPvgZv",
  "key6": "4jarqoxVHh9cXcHqHsyUAPAsYBa2LU6EogtTNDXpq2RtWZMpAjwss2U8JJb8hfAKDrdNRhjYbWMZba1P4tKxYbDD",
  "key7": "5GKdTEjqhSsKGdbZm3Pje8e2J25sY38NFAHAnJXFLL26djcNaBGmR5TiGQiFh2TxKsR2fqCK4WGcPj5cibjYPVYU",
  "key8": "467YvQDmu9qS9HL4sDs9MW8R22aLyJbpjnMbpHEmwL2zCMhV3EPUHQsDmouanCGQiALFAjHJvctkAArE7GbX33MZ",
  "key9": "3mF7jeA2sKua2RJRj4tLxSCkjzhQbCDJZCpDQnFiQTBPsa95UPkxJEqVwnnzrfVUGu8eLCvhuZm44gmydJ633FQ2",
  "key10": "2LpVw2TDqCjkWScCmmVSGWMiEBXQAhxs4Cet8wyR9zbZfR9rgwkRxZZdqGJrMpFU1vE7pCGjZJ6FWuJLVqeJwyNz",
  "key11": "25F39pPBYEjEBNTgSQHHd8Js2RRVAFoSDHW8KKpBhmRMetUKiWCknwLNcpyqZk2tgGqKgjMLuWyMo5pebo5JWt4Q",
  "key12": "5FyYhPKYS4u1aZASzu4QjFEf155ZHsh32h3GE3rbToN1j4ybn7dUc6KqDYNDkarTfzwbAueqjP6G5QwnUNtajicH",
  "key13": "44ALDxuWM84zbv1piUYyZSzeAtCwg9Y7849c9xukU7RLaohHU97cnzaohLPnAgVPqudnf5NW62Lb2uz7RwBerH89",
  "key14": "4gKmU1hsrKAVR8hJ1m7P7hbH3Acsitsb9GVtkNs5Rz1uT8Yrj5Quyz2cK9nEsTdtoCu8BHsU9XwNuv453HV29wE3",
  "key15": "2D4JbkUPsR6vrcf5tWzMtzGifNJf3jPBnPEGJe1ePjjSb2YrXRit3KMKTo65NQasf96JceEaQUk5NtBq6XpsmVRL",
  "key16": "5fc9z5nhsKeqJa3xNV7HjvkiMvWT6R3cNzjJvtU3rzdgHPBczQNEQcgsw6coLZe5iVjp25PfeNn6Yo52MdGxVAVY",
  "key17": "5ekhV5cTQPUNsspGRq2Pc2Y6Wr3QbqpA5uczypmrnZNScy97seLo8e4611mNrA8o3NjMkqB5rQ6piMeU1KoZbWiP",
  "key18": "tRczgihBwthr3hpPd73DZGKxd1pAyhHszQQagqzTV3xXmsJY5yZFpzsJ2PqzNZ8NLuxhAPLYyagzcLTW1xS3vEk",
  "key19": "pm5fzXkDoM1nJiRBE81nxUvZeZebGSyobizdCkTh6f3cZ9bJ6QLR9Zuseev6415fsTn22QtSY4W8cHFatYQosSH",
  "key20": "5CeNscL92yX7y5wTFixXe732PGkA6ksXKkvDtAtop7RNFsY4oD7iRvjTi4PQm9f5HZ17GvZZKTiDtYDZmzhxGomJ",
  "key21": "35SrhwmDCyypNmpWgVEgCMxyzd4qGxJqMcgSmo2zhKxiSc7LH5mMFmMrjLwzpXUqFFyWmcbPUHAAgfbfXfgBhgmS",
  "key22": "4bMwT4N1wvpdu4DpzNDW3Rdyjue8r3UitzoHrfafMqvkgtULvUWoVXBYZYKRbaMTPYHCpN6CxQDz4jXFsBgJaZng",
  "key23": "22LEX5iMe286sdsV2mWPoTuMGoRxGgbKvfCeBPFZvDmdohu8vsT5qWuJcoz5BA7NiGvuCkp4NUz8HDe8vnapt9i2",
  "key24": "5DtgGJwtkUhhjjNFiGxKoG5bsCNUf7bxpxau8UWZYVXFSA1u5pC6LnhhQ68L8ReYq5V5DooJDbVdFL8MUD9yZC51",
  "key25": "2XMFK91JquUw7PMC65EPdQkfQmTorwcTm6GrAuV7LNuLhoNG2eNgeaxBhgwoda2o8TBoJmw3h3JzV4dYQBAfHxxu",
  "key26": "3MSXNiCE9pgBm3APHrYo7wJB2m8MLAgYjaZKS1cTKk3Y2eMbsQBXw3sB66xaiqSXMoBuVmeaQetmV5kwesnedNow",
  "key27": "5ATZ6D14imQXNMH4ikApKYqDdtiAxsSmynhXXFJfPhfwnqVDEt6M4mY2TdFuVanRhQE7zpRkhpRG1prEjN8wPD8W",
  "key28": "3chJPZAJUPZp9pFJpfHmkeZRifR6PnKUG1FkecNNtinPXFrjb999Jpsgi9xwAVvv8UiLGGxwteGkz6tfTgQUPyXp",
  "key29": "3HxhrQRMBUUDLMhqDuiF1wpVvvZmZh6iptG82bpCLsn4SMq5tPs1BPto41Kc3t6As3Fp2JxRUCmoDeyYJUJy3EDM"
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
