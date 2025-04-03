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
    "EsM5sBwxCNLnVvt3sk1aAhBY6fVfTWe9TeVhwjHmrK3D52ycZ3m2kcaKhdRBhCzfPhhkDSMz5dcCA8AFtQzXWDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mdZdpPHbstFXjQ4rDM2MZCQCc8vH5VTXB4wEFPe4xUhxgk7EJ8mQT7BM8WdzLPdEzBwFQEKoRsh48XH6sA73zzP",
  "key1": "4dsYVYRjpPusD5MxtN7S5e2hrMXyGzsGoNZysSmN7w3PvMbrmvscoo5z8N2vr6bwnuTdLXZA5rKNW4fsz6PYn1MG",
  "key2": "2TtXH3igRDQPsG36eRnKKDQxg5mZuZaRviGUrWamUP7RygCtStPnMNWrFB1DdaRR3579z7m3F6SNSku63k8nuWZt",
  "key3": "58YaQQdTAnXHAguRXsugK1jqC1YaXAzX46ZgmCr7nka5umq2rXiQgkQNHTQDmP1bg24nUhBaz3UTdLEJhM5k9gGd",
  "key4": "5yZG1askLt4XgkH7aMX7y2djvw39xdjxb91ka7poKRRvnLojwCkniW3EGynhxUiWV5XpqW5eEJqGKZnUAZg9J7PW",
  "key5": "2m1cngCntRRKBARcwZ6DKzXc2f6RHQhSggUAd9Gg3KPwE3B6rCrmBYsL71wnEWcj5nyz1QvHM99Za5uz9nvQ4Uo1",
  "key6": "3g9rNW8AvJPHxCQvgdLS5x3AcXQJGRuYj2nWyuHxEPJkB4sVvk6qo51QEaAfLnoYmq32k9c9xS7wcqqnbTr3RTjt",
  "key7": "9PqPNvz1Nv8coLo6yAqzCsqkfHX8EL1M3j3ELZ3LBVMV2iLnWzR36iA2XbbFm9jzAwVDFnPBPHwGTTekENhM6bY",
  "key8": "3jYQjAvZgWGAtCpgGTkEmH7rtWYzEZTgtAhichB3LUcDqffHJeewXwm5NL2rhLZczXJ2qMhRF7DjvMAr3cQxmuwZ",
  "key9": "4VqBWJYVkcejednw4CEz7an8Wd7MVo87V3DedFf3epGt61ax5unmQF1xhnbe3MAKjjymktoTZ5wLr6oPBgFEXWmb",
  "key10": "5VGwVbS9cEtW2MWoCGgM78LBJorG9wjSuv2xeyqxutrjWCa4MoFSNXDiQSj3xr3VMMmwDPqifzcTt7NQS51CvCZr",
  "key11": "5SBT5yn9ZGeLTqY7MCe2vdsevbo92eeiyy1E7cnrD2ohes7qGAu6uqfMhjmeKuZ19Wpj4BFNd1E5SFoaoaNz1kDf",
  "key12": "4jLXsvipT7f8BL7Afdbufkqo39vJofwBdH65c4CvKUNESjhWnz1chkkqdwqtDNPMLCWEz3sNFrVR6pdRrsbTFD7B",
  "key13": "oGDzuYvnighDHSqKoMBAaWGVi66JyZTYSR9W1mQ2gxTHrKDmHJ5L6CaqxwBJNnSVsRvzN4nqRTyNALosRFqws91",
  "key14": "47iYXa5MugBWTreTzpA6sdPeRgL5AjJGfpMEQ5beJomkVCTukBmpDMHXHEWLHgDWvyno9u84BV1G1GETNKeJFate",
  "key15": "4vjQg4rzGNetXwTh6cdcmYef1TEETzrH8dhJnE7K8h1UJWNiAZ9kATdytC1VwZvPRPKTCepoieSBt1p5AAW4YwHy",
  "key16": "49ykmSoYWa1MyRJ5j47Nu7mXixjVPqNDhvRBNuk3qnsugTB8SPtfxbME197EPqTLNzg81WdpogzLrE4Yb8CJDKG7",
  "key17": "4AHbfCYbbw7bbmsiUnDEoCT1wmTRD3yYCw7YUQ97rX7XnYreWXMosVjEPPcwHj9HhR9CBMio9tU3JS9sHrh53dd9",
  "key18": "4CErxqg8wrbemvpqPPzuRY1hQdh9fBNcERUkfSoZJzDyu5VkTqkSKA9X2iN4CUzAsrN4ZANyNvpveAZk31sz7Wiv",
  "key19": "4uWZRP3HZoQfAQEkNJB8Mod1yBryiTLQrD15fT24qK5V8dD2DQmyRgJoFgfW1UWqXPBtAPM1YpmJzV2kWTcfKXiQ",
  "key20": "YXREWBMUkHoHEyqEdUK1mRzpRJJxothMLDrDUCB5G3EQ7SFTfybz9NAxgUHbU5QspthnufHyxZEEF325MeVNizu",
  "key21": "3ntkJB3WpyxhoU5f7BUn3fc2kq9dQfTprseY3zVebd5XdN7QwN7dw4LEraGF4mGuYCt3cz6wGZkakfYJCeAeTBnb",
  "key22": "HsKm6u2PX6uYD22L2nTs2UkrCHP33aEhkMLWrm5eYhX1y9mxUKa4QArakouki51Q9rADhA4ppvNbrqp3WWqddxb",
  "key23": "45qRSTAFszup5u17d5rH75eGctyaKbRgiKvXjdd2BRP6jEbNNdNSBYYxjfmF4gN8R8BAc3BYHqJV8FYjS8c7dquU",
  "key24": "2J7K7hR6ViDzfVHB2nEpULa9LyzFqDfrf2hU8tJyRC2W7Y4Sk9yWTUBsp1qqd3FnXLSBzyQK8sqGndbc59HU55wg",
  "key25": "56BkMkqPCZGvHXT76XVpEizHYpyxaWKAPArrhCzR87we1p2TZ35Ta4PyxJgUHvrG6pzFsGNExEPbYn19Sh6a6p9R",
  "key26": "5WQeubCFY4Ns8qXGQjcA5GKCw1yQcQnwR48eyaCebsCJeM4JPskaqSAp2TXaeZ1zAjEPSgPFdRcSWbhppSkrkkG",
  "key27": "4X5qVsijw58Ga1aD8rv8jT58pGoHwjyFtWzVsoZx52bt3AGvZZWvfQvz5u8b4C26z5aHXb5tC2HJuCSGFzpGjQGn",
  "key28": "2Ryf47tVm7Znxf2ucmQ1tbckcpyB2Yw1AGqnyZZHND8RAa5AqGCqgZ1L39VjTqR5ZNqjXeSuduvgCdSnHtrvSW7x",
  "key29": "4tmaEQCUkpBE2EBtVD5fssPWnizSLR2D7XnD2uKGrVXe6febuqMaEkaLtUwNvEg36k62RxnbGJ9RZwr6VGvejaRr",
  "key30": "3mgQkmcMfX9sSwRGDzPmJHsWfYYyFFEAGvuDLxeBJaSn6LFsgj7URe7KXuRgcXPE8kFkmLKNBVXwHBCfxtG5gUx2",
  "key31": "2sdwxi6i6FqwAFh63asHn25BLqiQLeoPKxXmAuzdzWwsU5tmk2tpJBCyM4nVT61eRnHKQY8y6bBwmv8sX6tU7uZg"
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
