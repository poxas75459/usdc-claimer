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
    "8gWQnY66MiUodgPdTQiHU3mAiRR8SvS1G3ku5wzStmKhFK8ze4UD6QWQuHtJ7apwAzaRx35gfaaxtC9D6RKutkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zeq6GoSCz3vx5ahw6fintVZTT9Xm3TDhiqRHbSEYQa1Efd7Ny8G1XT9NbjrbzRqf4PeAeEGHxFrFZSPiMpfMxpA",
  "key1": "8EmqTWxNLuJPSaC2uJBztpgzVC13DKE5KEzLyPyJmaDadXLBCfBW2gaRHTmdW3SKeqAAPrSj9DwPgKS67gkwoHa",
  "key2": "wr3JTqtThgvKFcFxQzXdVmZPN6Wbw481JFNeAb7v7d5wBm5y63f9PPX5UoYdqeYxLMSeHLoD8ngk8bz47ztEkiN",
  "key3": "4vKPnaGpUawUFPqtN87krPy8HnPqTRcaQ86E8Fu1ybcuCgVmJMk5RLvdiU458HPdxo9XNKFcLAnq5JegPX8awS3j",
  "key4": "3XhKPLMvjto6Ww9Bf2w6Gfs97FVjYAgNyc59LjoUufjMhiYA9vHZ8r7HJApdU9YDypTxZ8TRz7nuRfGsiDRkwD7j",
  "key5": "4mnYxUaAHNDpPWHorP9Gy9DhqorPVZegoqMrj1Xf5TW1fdUifwMXtt5ETfz86hSvZf336nn5KV6g7fR11kAQvxtU",
  "key6": "26ooyCZAjJj3at3sZKfcJuQL2r95sB9gDtTfCJrh2xYok9RQ5BL1nHqhmh6pk5168hDJC5YDtw6pqP7vR6zuYVWh",
  "key7": "2eJ62hzJNmnppKSgrnEt4ZUYvC58zkSyGezrDjtuvimusCfRoi5MsMj9ogYrBTQknaPtpUYZgxCTUKjGavxbkJ7y",
  "key8": "2Xewe2k8R2SEevCrzMsMiPyQM7vmtwosMTYYkLvfUtaBAf5KUZ8H5MMTsNJdzKBXD6dBk3ToopR5PF4ehAvCczkD",
  "key9": "5Mq2y4gKD9BWacWAsVz6b2SCnVkXtyKxkfTeb7TMfyi4zAEnFhX8deqmh2BbUQQvPt4BDqN2CaEWCyznyBPr4wtd",
  "key10": "44zgTi1jK2Xp8MqugeHvLiXned1X97YYdVegEk2cExr2Mo3dM5RueT7fEWNDqibC6H4YumMXWyYc8nsMN9xUcsx7",
  "key11": "2ShTT3ghETm4c5Y2E4WUPS2Uh3Npe1Gx8i3efxRpoLjMD6fpgEpaXs3PdirxGkQqA75MiUdUtAaYMoK6xtdWgAum",
  "key12": "2EXtggxQTcGAkQMJqXQB1jk2qYXi3ao836QXruDjjpQAodieBN6nkwecwJ2QjFGgaKxqqs4491MjYo5Hn8bjJ2sn",
  "key13": "4zU6xUGTdbgA784KWUx3MKTuQmUbXKVfLWrPxd1v4aJtgfUUcaK7JtGXxrKpoaXrjHYzuEb7snAHTUMEQN2UnB3V",
  "key14": "637QZSBSajTx2T4qtJtp9rxo19KDHTaG4PzhDbB8kUf222FmSwBLCorGhBWjpw1wrB4KccEaNYWcpjdmqRHUQN2F",
  "key15": "5fkW9xUqPvm5F11nPUvms4bZBjw15bN3m6V2bakqiQaAjCi15cPtiqxD96yzHgzMUzaH25E9XEzrchmwV8S4xWgy",
  "key16": "3SjPi7egSB4FJit8Couzn4DXg8CJez49FZZua3GmrYCN1wEZwi7GEZAe6UixvMbRweEF23ufT9TZfJaq6xY4S7jQ",
  "key17": "28ewuw2XfuUFgULG84hYztvTCsKPQmirQqUyQTiH2yFMVw9cWzPnYcg7DR9yCQvbqHFkzmayBto4eRUMhuTdvGpo",
  "key18": "4gY379ygpR4ERTUmRSJBPDj3KbeWMw4BQxSxHzU7nsrRhDRMfu8QJR9uh4pmKNFiUCV1FKmUWvyw4x8dfE7ZZLtf",
  "key19": "5tw9yJ1siwkEzuc6DGk6p6oPbg43ZCjLAqoNBbZTtYEi594qpgkJux7UPUnbfyXsvnnc4vVty8GjnVsZorjhGjnU",
  "key20": "2B7Tv9t8u2va9zwyjGucKTaRUTh7EULDMu3UXXuWZ9rMU1NVe7UFS69VAaxySMvG1u3AxG8Fcni8pNk4Sn7hTuNn",
  "key21": "ZpZZamwfjbv9svALJFgTyctC9yaiGoijny7rrZZ9799xcgpDEB4r9ZFu2mXip5BbTfieU22ZEKJjrZReNYRstas",
  "key22": "2q8RM7C8S2XSafhiJJmYgsw756b1LS8k5PtBaWfEDJbzN1dW2JSdNiuhbhAnK3X7Bx9V8xKpnsQUgRmAx2hykgjJ",
  "key23": "HhbSx8CnVhiGebd4syXMiSVfCj96S5jMeJE6WveEScuZDNAyqakogpPXLXwFTrXQ2dUjgb7cv667TX2v6f5Rh5c",
  "key24": "FYXJiByodLvbVw7VcPFG2thnv8CrpnBWbq9v6GczPEPwzVYD9PPRRNF7q9vJvBbBCwLS5rYWLyUS4MdcMaBtrn1",
  "key25": "A79WD2kk4uGrBNBwT2EgFBcE1uQW1JTMaqkKmeKJtQaccb8W1y96ik13EpFijZHgsJgaLwBFG71H455sT6mb4EC"
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
