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
    "4RUskFa5SEJAFfvpby9qdnGkD2Csr229beohBvEoPdPbecwrAKr59uPETs3uziEoBTtcMV9TLz9V1ZLHb3SP31u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f3DDpe6AfjTx9T6Jg6amyAMSEMKw4ZXCkiKUJabFzESH9RA2ZMbuefcGD75Ktk2mjwPpFCt27d2TmcmgeLSS4v7",
  "key1": "32ZsfvvHgGj82TvB8WZUgiZhrJnj4tSYnmzTgf2UjDLQVUdGKKY5PaTJQnCmLEEveA7jJB7FSYMM32kmX4jp1z8B",
  "key2": "3ENMUwLfABhD9hNjfgeLFk4GQBP7UjHSNmwytH299QPVioouctUYgq4U6nsXfnYajpnA9P89D38CZ8HtezWKMSJG",
  "key3": "2aN4mbtYEPbs1XaZMbD5qpWu9MLWbdwAMbhmLoQyW6NN5PMgNKSbJQx6KBocJGkdPvbAxGqq7dXrr6iF2T4ZTEgS",
  "key4": "4oUpNVtfdkycyZT2uq6avuZLEXspa9sa1bFDF9XBCeDivzHFVmWKGaPM7cJdvVynGyxpCs7pMCxdrhRiZMePspZC",
  "key5": "4S3tgGzQ4EsiWp7FdV5YeVXJZ3kh35emZPg9vL7TaFj57s7tH3unkhafUVr12GY6GQPD3ZFSrrZjKLLfdNbiXct4",
  "key6": "41U4iDQ7BGSP7t8eNYdicTjffUBa8kHLRTP7P4DwgXdC7VYG3NPYKAaHyc3g42wVrMfGx5ktQunf7c7CivgKmT1v",
  "key7": "2hEaq8RzX2Y7B8WjYMspM8nrePJxUMDqFJHn74ZrJyhzmhxZ2w9jRN3kXGoJXCETYdhxt51qTEZ7yXLPsBjjY1TP",
  "key8": "ec5HBoimAqy3RDxHEzqGdY4pX4tDrx6FwBfEuazJftBGk3W6RFVojZ1oihcAXV46p61pzMgBtw3yomVqPYLAwg8",
  "key9": "4xz9UWehiZNah3MoKnhCagKLuudwnmeWCBjYamEsJKv9NUhSHKmA9pHLT3uozXn6Pft4ryK2Wid8h4zEfGroDDUJ",
  "key10": "EVzo5muYeoPBXFEwz9AfBF4yHfoKpQxadcyKz22yGPsjtAD8J2B19mGa8MB745NXJ1FqqJAAoayVx1JRwzbJA7V",
  "key11": "4ko6B41N1DgFLkihktcmdh4QzNZTVHdNM3TkxcuJNEVnegRybHnYL19EmCiqUsMVyvVmkSoXC3G1RFJGHAfnhge2",
  "key12": "weEYTuQMbMq9ZhNkTsQXJuGWdKnvWXZ4UWUCDQrMMmS8eVn1pkX218ZyQJshQoJXArGu1KmnAJiGfHQCjQBgzVh",
  "key13": "5qwCPu62iM2yo1F1tZMFpoLP3x8vN6vgHufHT96c38zS4yeJiRWRzsTnisAdGJGrD5tmsh9bQMC3kk4gpiehgymd",
  "key14": "49mm64R13dmHbikxWiv2q1aeBBdQ5NDR9DTDghGKcvRhjbwjMCQ1HcQ5UF52M1ZCFG97JqdVEHKRfzoSb4esYiCf",
  "key15": "4V1XkgPtTQKtxEaDF9Yvt951wZt1YwuyoyY9Bbr1zch5UUGUKR7M3mcDBqgYuNRKcVJ5HgKZaskdC9fjrTvtQM1F",
  "key16": "5aABeeAq5TLCHyv9oHaH1jmC5RDvjT11QsdFp63Y2avJ1ane9j5XHzRNdFGeqqTL2y2e488P6YHxRjocp9E469pd",
  "key17": "3xssraFD7r97kWaLFhwCetGAGcHkaAjhHTanLKKXZxAQvdRSnm7zT72DkmCYL3qs89dtGzrpmLU3FJRVg48bGdd7",
  "key18": "5VLJndaG2DFHGd4kLZ9bNdzeGYzYyAW5gMEXoFVQxTxX8giG4dRWicaxDUyqJfzsney4UwWAVSsBzf6wqtvtVZcT",
  "key19": "3139GHE7RGsUxKAMdVeTZTzJpFHSidhyC3qjD5YG9iQ1CKhFwpZ3F8gdxsVHkSFvM9ysggA9YqPbUKGAGtnKXbAS",
  "key20": "637DjmgqrFUZ75ihXctaCv5nBQJVdeojav4b5A3rKCgpfrTdAbgcSDcDzyC7Xs1ZJ2nwA5S6jgNPmXGRcX4AbJL8",
  "key21": "2rLiY3a7YCyhgeMjSEa6wPFyXhWYSX6pBYGMhQCqRV37CmqQGh8Wjucqz4L5fbvX3RuPd11SS2BsTfTjYgcypEBo",
  "key22": "36pcqEJdFC7WeBGiPqVPptNLLrdwZrWmhq5U5zdKECaKnxP75qggnLMDRfPr6TcxGv8bZAtxeGeRo2v3Ku8V5zsK",
  "key23": "4y4koBMPGmM2cPRBx5JZfBhiopzyL5nTDFX3Pshat85wkEvYRERSG5aFRJvuKWhXWSywdaA5sBmgWaK6UrJmrvMy",
  "key24": "5fJcHpeLEnxdG5LkjJDB94GxSMjoLoJBC8VzS2MR9hQe1P5qWhk1EfkY9uyJ12UfBtgzrLd8pMsQiMxvif375btL",
  "key25": "59mCcVVf7tNvfFnbsjSGvb9LeqZM9ruWUY1BHYun3z4oGgjE1Yt2Vcx5PVxfS8NFzfGpxwcFKD8icpEKFqnoHqCY",
  "key26": "4h5zvQUS1jgnHiLboM7PSD1ZcgCSTCojcFgGCiUmomKsQLczUF8ETpFc4NsLKprTePKTdnV9KxDDteuiQ678SfGm",
  "key27": "2H19qnS82egb6TPH9b5DkZhidxwTtUn3Ki5KFN4G6YaBrjmmWjSay3Vdnd4sYrA9j3tpuWTUwBRX5fSVq5km7rqQ",
  "key28": "4vazCDYKRVc1oQVVGjvtFLRFebcPMbqqRTPHBgqCyvKUDDHmsN2nNew5mMBpwrdhJs3XDcLzRUUyJPoJ977Ct2BF",
  "key29": "4DiCnmizjd4M6vwwWewDkouC91RebBZCoYduAEYPAJEjxFpiCWCrQLSUJex25ayZjyicvz5rYCSibeq4ZvDuNVjE",
  "key30": "5BXpTEJhT57uJWCxyXqCQCLezSBhGw5CkHYgJssneApADqwMYo8qH4PnX9RiDxfDoMqkfc3XFjrrhMddR5w8kmWj",
  "key31": "3mDx2w7yzq4jkZ9JgjX8xarQvHy8h3rU4iDhQz6E5K8emxKg3To8z2MMgyWexzxwRjYMHKs26vSgSkev5LpPXzLJ",
  "key32": "2vJWpeSXYNmw4LwnL93yGinndKxyHRAgirhjy7i4QfhBQCNDTkWMwnxcyHCFS6zFZahv4xrv7Krm94rtUZzTKmkU",
  "key33": "3VReqHcsrg6uUjESnpEez8dpcXwQ2kopkLwVacCcyyMthKa9toWXncu2BwGo2pHd9YUrMbKNgRaWFep8o2LmcU2z",
  "key34": "63yfMBvg74duG46agLHFFoX2FXuz1Ca7NweRCDLrMETMxEmEUTUMd6MQgvsDgkFpS6pQepWAkgT4aM411UWBcxYW",
  "key35": "5iqzbZFzp6gi6VJ6FjXaemCcZ9TYs3nDodzUoHQS2M7DF84aUeM1G38seCzqDCDVtRcpF12Kxazj6y8AHjQ1moMV",
  "key36": "4nmC4p5ge47zsjB3SyX6i13S6utA2RLrm3gvUN9iWN4iFL3SZSBDHchtQDaREBJQZdhCaj2JVEacyZ17ff5JCzLn",
  "key37": "4FtRtZSwqUH6Mq1U4iprSXRDFhKtSzhnKygbGvUdexRYP9QHMV8HAiwDxvo2UUFrR38i6Qre5zwHybTfwhMMb7FD",
  "key38": "2mWpZBdDJCX3YztnK43Mb48X1eG5XBZk6rbdyGauXPSsqcSZj3vWtNQyHYiZKDcq3srojpkU1gtpdBNg6nyfa3ZP",
  "key39": "35hedxjjXh3cDaw9CzUxC2h24LHBNy9niyKpXUpqxpUo27SJJdF7qietHXP9VHBJC6qpHGTcRshqf4cACw3rE9CW",
  "key40": "55HpCdzeRcMdFXeK6TxA7uMD2VnCyXggqkCWFNLtpFsRHRMqe7mNxFuMw9gLsgFYe89D4NE5G7hmvsT9ussNo18z",
  "key41": "4qjgmNj4GjA3sdJS2bXkXn7WS6gjCQk4Q1d4C8jVsgpbBWgFJ4NCmskDAG3fcnkbmvmWHSApEvXCMWsAwZmBMBUH"
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
