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
    "54AWu5LwCi7Qg35JbMTHWmNpjBhycyhLKevmsr1TfNZm9yN5FyDGeP6XBHn6A6tzAf7eQEySTm3x1qkzVb9VivUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yBmFU8Tvyo7NsMzAyZxxQzxjjahmvyyuYL52HkAp852yHtNeURUQ247htURba2QHh4DLaL2AZQ8fAhY5gsexy7C",
  "key1": "4mQTS16yhQQJrhRE8WCugWHgyDvXuTGWgmwsDixAc4whDVCQSqnDGtLV9rc3n8Esrt8FjfBja8Ardq6zi1ZtCw6B",
  "key2": "2Mop8LpkJscoZTTyGV1VyKUV2M64ZqnWhoMoDbodSmn7UqJVDUUHZNHUj7KPwZQtvMLxUCfb7rvDZa5j9NW2dNAT",
  "key3": "5DGv9nGnoRix2F9QqoqPm9552hqgGpf1gyzeY2nWxyckaGp7KiL5R1bzb4U2rXdYYya5emhLvML1R1DpQrX7BqKs",
  "key4": "3dDtvks1iop7thUBNKGj49gxYTpSfCAhhQS48mQ9yB17hCYn71ze8x1NKQBXyoXFGmetUB9DkVmosQxRzhizN5eC",
  "key5": "WPbUiFiBBnkpYe58qYayojcKnratA59JmptWMcD6viyiXjez9dP9h1K7wNaWiPxgNdq12eHsQUcFb7sJGbYYfvR",
  "key6": "3FfohboyETkiqig53BzUwF5Vzcp8HKBMMn2pfNgQxKyQqLHeF2Dcwqbw5jiRaKLWQQnrqsvUPWmP6oPCTZuBaKtg",
  "key7": "4h54GmAB2dPB9Dd49AgKpuZXjD3QbVyDHdBW1e1eKjvT6GbS12fMmhw3ydjsDb85WehvfToRoD6QX7VwoLGeobPY",
  "key8": "4MuBhmuW7ZDRZBwaALiL8eB9JwgY9iCiRgTtULX2TEQQsrw4Upe4rHqcmkr7JSeSWRqfUWB1rQFkr6Pf4JTj34eb",
  "key9": "4HpTbYwwGdD7qNojw98SiriF9fBuEQ1KbN1zGcoPDixfD23v6SzhTRLQ4KeREWwxvKx8pcWRcasJSCXeMm9u3i8a",
  "key10": "239ZzoUUoc8fesatfsVc9bMECi9HVmF9ZqXQ5WqQ8KaF1Nm1X43s1Xcb1gNYYyrE718GmpD3nJpiR9phzxr2q138",
  "key11": "22fERs5PEVwMB4igWpq4nYB8DwQTQMgTx2mT41ysNWxkxhLSF6FLpwoV9deP8rupz3QvEUWMjouUMMnFpcEL8WpN",
  "key12": "5mroAMsHDygLuzBHGiwMMtPiZEzMATLBkku3BGT5vbFJoeCaw3oSXLuASvFQkaagPLETxCNMEUsUCv65ADUkBCaK",
  "key13": "LiLLrkseFsqwV4XuTSv5Am1pxugcY1Swx49T73fbT5oSq87wwpXhuDdKhia3yz8DZsqn25H4foUHaafTfu7wqxs",
  "key14": "2wgnDFTc18Vsjy9PNwS4y4DYkmQnki9UCrkgYUwEEH7wQYRWdzMWGjNyZ58d2shNwdhMPTKEVStMbWtWRnsvrsZZ",
  "key15": "2sBoQXgAMVpjXjQgPVJWXeJXKaSWZYv78sFKE5R7Y2UuZvwuehaQBUjVAmepi7nPAC6N1wkJ3m8qb65TYmFrQLkB",
  "key16": "5RTaR4QbxEDSQaXxsZdPccxEungs3SdU8YLJEHnfJkKvQitazQitT4avMeSTB3BZXk5Xs4ZhbhnVawxyMrFtjrRx",
  "key17": "2jCy6ry9JqkZHaJ2C8h8eTBzS8cx1VbTANzqRu4JohENRQLdEaZMkGXG1adiw4z7MUjEH545xBd8bob8oMd2HLzA",
  "key18": "v42CXs2aqt4nAA8F54QvUXRsAjj8YUHBeftjGp7zEiSNEP4oLJPGgxU4D1LnmLkpCo72yj9eBb8d2edm2VVk5M3",
  "key19": "3HbevGy4j85QQMixNKTkFYDesxdrvcsK3XjqEAdyUxTABBaBmRo7YR1anRW1UpC5UvrFS13DDb89HCisafn4BXwt",
  "key20": "22SRLVEegc4dMCcpauBTyrCpqqwPz9uUAPJhzvfJjbRF1GW4EsTVYa5zdwSshHyZ3LwLJmqxTHfNNPYSHYzZKSkr",
  "key21": "P7rjKwdH1xqEk2JCkVrSMyhtorgv8GDVNT14pSfdSEJyswrXpE9Xt45S1oK65aXwQPL7iqSa4kCKzw5uxJx7iVD",
  "key22": "5G1zCP6s7aXqfAUnZG4MB5Pc1TQr8pRoa8wFREuUnwkK4ZcNtvD3sBbvjs8q8yvBcw5r7KKeikBDPkzsxjBkWhuT",
  "key23": "4hV2sEkFJiRBBkKvEuucDv2wSezD2NhWZEpSQXkE8oqshrbEdftfvMqtPMBpc32uJ3FawTW1y3Xe5i1GPjR6uNCT",
  "key24": "3vUrY233VuWozWnPp1sq6FmmsiNbcwV4hVtYmyS6qodwtGN2wKBT77q3Ht5A6sNNtwWoZg1YBr7JXr6o5kWD4JFY",
  "key25": "2NUf6dLDcCoKLSzfg6D7QFxodHN7JD69WWpvuVZ5v5G5HNELpfNkXH59djj4RUPxvJtgvVkY2XkbjY3WtDKWnneH",
  "key26": "5MJzxzAuNGNL8HrnoziD2SLJ8gXeCfa8xMs52KF5FdanRZoK6bynhDPUUUDCyNTMi8PzY7fGc2LUjsoCpsEWqMcX",
  "key27": "j297Do7uVftWmj6252xfb8QGo5snJfRYaApa9cKEuTVJVuFXVkEuiDz9MvNUg3MYCBywUaZV5ky9uL4zshAUTsw",
  "key28": "2bDCNFoEhWxD8dWucKDFSfUVUuZybbLuwX1DattTPoNhMB222JUxrddBnxYqfCv5DQ6EV3E6BrRgf1qjzSQNxjMj",
  "key29": "51UL7Qnaw57pyh9nH34nkoiU3vGbbkQsHZoxF2NZxeGFXg3gRyHXKRbTughPQvtvNhGu7WufxhTP9WGYCsDFhBap",
  "key30": "4gd4h93Ucf79b6KW6whwYqP3jRNHUrD3kF1uFFjaaoNq6mEUmRdf9Mist2vrfCeGoSB8xmQwdcKacF1Eyr43oZFU",
  "key31": "4XxE8wTf1NNg92Xr7Pj6FeQ4oAW7GsVf3Wm4ZweDSS7U3pesr6Zz3GpTwwpuwwW9WHLKTzLbT2n1kfa4bGue2p6R",
  "key32": "2mNkppwveJHntG84he3NWXZARSyRfJFo3iyEr5gzaa4XQi9CiL12Ro8pyKW2Pp7zvqMQKeeZ4Ks7u2LYACBezHDv",
  "key33": "5tU9iUTQeaHdZ79esdoGu2Vu6KUCJsjcUJT5UXe6CLQZkSzLANpKyjd2JkzvX1WeXh7ppM7qtxU2xuXwPYTtK4rv",
  "key34": "2VTJd2RK6uKSqoWbNc631SUEmjjpfXioh6ZhJKaH5nZRUh3P1aKP7o3FjffhEdu5mceCXHsTuyxRj8GcyLQX9KPx"
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
