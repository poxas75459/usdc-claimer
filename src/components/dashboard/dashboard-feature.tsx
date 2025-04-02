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
    "3eyp8NyWZ8jjUFXTprmPRcr9TP7HqXwyMc4WZArWHCQ7stZ1dVBhYUo9cLQ5gvQC6g1FSBKFaepAkQKn1LqZ2wqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sKCmqbpGz94GmYV1s9RCFXKJ1ojZwjAPQp4xofN8H98gC92i582aefgWJWaWeSfU89vazAuKaf2JcJR2sCmE8Pm",
  "key1": "zQfdtGDHWaEQf54Uu3pwmWLNjwRrrT9JQPn73wY2GiiXND3c4du2bDrbij9u2SkYLN9RgxpKXqt5s13LXj2rWbv",
  "key2": "66USuQCxQf5jbUaYfPKTHyiJGFjwvLpFS3y4xP6JopPyT3NDUn8KErNbLdHKGLG8sxm4TgyoEuXPj78NDMkHEf2K",
  "key3": "58c5hLQsejXcb1G2pVibgumHZHAr887wYG4KoizaDSTCreNGA5hxzWtwDV64XRi25R5z7Tw63k4e8M33pHqRHcof",
  "key4": "XUzcKmQtX5EvKhKUJbL1BH5LKbcRsopvcMdseEc1KTgBpq9Dnw8dbgnACxC8FyqFJBxg8TVtcHGrDxaE29zdftU",
  "key5": "2mvaW74PjhkNDSaTFR195SPSbsg1uEz7wVcjA8t61w4iGn4NLtEdV9oNx2DtB5ZZMGoUiu9Qr7Ei1KxZ6JTvkhBY",
  "key6": "5J33bXGyRkmif4gjhzePZsrVKtC9RnZhLFojhQijSZqxtdLW1qYMaB18p84XHjiRLBbN2DSUVW8G9qtStY1fSvSg",
  "key7": "3QoVqTBU57hUfcXmeBxy1339dN662SYRpux3QjEsTbLBPaENjyKnpBtNLgei5H3yJDT7kHjsZ8JVejME6SVsrp9A",
  "key8": "BTFxHjaw5kpsMaoNRzN2EiGA8WA9aVKZ8SDHqxZKB6RpQF47oK3bseivuJ3AtwF9cAuhB3W8qcwEUkdX9uUazXp",
  "key9": "Gpwh7zj9XfUZoZVckhhCLewV1LyqcYyjb5rgc3YWgpTLh5mX61xBu81TGaf5EQb57uz2GUfKWAkCGinBPPz4zit",
  "key10": "3HTxnJnYwQWwTeCzLNpUUhj4D7zsYDLuYZmxhQhRYfopySk4jnEnMCJCgyZLwuvZcQ4ViupUWBmX53NMQjNVYvRf",
  "key11": "VTUnkGNZiTy3qv6jxZfSULtn82MoiYVVpC7NRonPeubAxrJA2nDBHFJiRHt9HYFzuMbi1BXapy58wB7PaecQPMh",
  "key12": "Uusp4Jk472b976TpxPfdEZjvdJ18ASo6hyx8sMLnmMBkuyYDeAdvaSb7aYAd9gJ4yWRemVV15C5RCQsvWz4m1hn",
  "key13": "bWTwy4e6Cv5Nf9x7m3mW31M8JePWttKXLeXsZwWGSTR1Mu223RT83B3yHF1SjAQA2tFivTu3CCKAojpxWHfsVRN",
  "key14": "4CEiEBi4yMymBkKsj7rHe6o9MWDacitea3zAfV5LzsXPTxrSoBSXrWgxBHBsTi9Zsm85NyUb5imV6QbuaYgBx89D",
  "key15": "67bjbJ77ZFYwCp6hyoKEKKLyeBrZ4iS9vLZfDB9AAW8KhM2vNNk8kmpvHryqXTnoc6qiPRyLZ9GDFZpM2uyjH9sZ",
  "key16": "5zXVGqbvrJaXMHrtteTWThd9vqvCpHXvo5JEYSTj1km6r3b6TLgkahGEXd439yCg6QyDRLubvvtqPYgMKSFmFCav",
  "key17": "453ocyyuRyRruDCpkqA1iNCd8mNPimGbWzyD6xn8MrVuNvnGtQaBiQQD9kLRB12eCeCwL79Ppkg6TeSLLLpoSMQB",
  "key18": "3XGGVe7Cdgm6gDRJ3iUarLtejx8DWQycPJX9EnvA1VaJGE2hTSj5cFkPiNgzrxAkcuURiHF6zc4pYWmQvwrTCanE",
  "key19": "255ctFYjFteJaMjHuLqtUjzysWsXqeB1numWQ2Cm9JVMM9mK1MuefK8FuDEL1UZJqJ9mA1HYL2xyUsjMFPhjgHLW",
  "key20": "4y6K61SrT2Uf4ixHSh5eDKAEJnmNNXjWDhNiL2La2rLKSjmgxqYZLrsYeggLj4S6i8vA1HFJ9o9AJd217ZbPeoM6",
  "key21": "3VtGJc2eKYCztbxWDX5LLz6NTUbq9JGpbyR5Zgepqa5zfGH4x7gVddzztyQ1G8RF3ARZkD7cj5hPkSN21GvJmDxS",
  "key22": "4Kk4mU777cdVHeSzZaPeP2jR81gfCWjq9Pd1eJ5cnyp2WPtQWvuztWwssGXF32wfki98GfL8155ySwhJw2EprvU1",
  "key23": "2ogpZtA9VjWHQtjgpsyUZdVvUiDHC4QVeoEat3bNePd7tXxKoxELQH3oZch8BPUAaPCf2dmXb9FwamuMFkRXH1GZ",
  "key24": "5CKoqwbSAJoeFVb4DnZm8CEYvuy1KiZ8w1znEwNhVeMiMRdZZNe5fK2E9w12iVGpnQRzJ4qAWVmLD8VXfgM1XFpG",
  "key25": "121U2BTUCbfgBYmKYaesPcqsVo6CThkHDAWGP81XNnxosB9hBPQZx1hnSi4WTbsV1nrwbNi9uXm38tDYvxgXQVhC",
  "key26": "4tfKUW9exFeSHubiJevx5TT8gp5FdD3GoDWnQRpUTrCTsZkDVywFgxnjVsntemwFCDDDSDoukCXeUTg3vzytWNoL",
  "key27": "2Gw8ehzunEKH6r2eGZ6PA9YQFja7Jx5oJRqFmASHD5mLv8v6g1QpQyaTNFiJ3AvttEgmVc5bETYnc45N8PqXnfyf",
  "key28": "bhGQGcVDnaAdNg4KmK5nooikUvFnAGFVY6SDyX8DaCNWjUyLUBPH3sTp3JGtuZcHZHQkQ3VZqvK1pihP2ZkbGgy",
  "key29": "55fCvfgSYfx3UWC1ADxXWLzqc6m5DZ8TbPW161AkGoXNuxsCwynEF356YAcu83raFdWDA41WNErVFeyzTAfBuMoF",
  "key30": "4AxDGkpjgexPfeVvheVxDwZ1b5e6NLjdDAYBocqg8XeCXzFTDXEq5W35Wykappt7uLzVbPHqQAgDs2NLMzonCb7m",
  "key31": "3J4Yf5kfBfanzN6Ejzow4d2j9Z7LoZUbUhifnsVKit3BubzizkPiawPFEbnZYRLAwshsXDyw1bALD4ZSyj9xX2ix",
  "key32": "CzhFZXeZUEykMEHz4PLZWW7pXVr3vnp4rXNQgBkbRW1X4ZZ6Kpbg6B7bx9mmXDUab46joAMpVnmBSswwsCr4e3W",
  "key33": "5HLDUKSUvu1wfYDLhNbJQPDEjKsivommRBCUB7BMA271753ZbrWX6L6fHnZeSHG4Ujm23sq9ajZ47kgoGD2feG5M",
  "key34": "2arF4TT3TafwyCPk2oLKVxnhqXb5vP1vtbp1CQSe9bq6V715F6T6HmP7SN8XBNiGhg55Wi8m6ea8fHckeLnbizMe",
  "key35": "51mgC7kwsJ48LVcaLGkrqyE2F16ymcpWVit5LTs6tW6JcmM72Qa5ynuLwr8uNy5KGooexpPPkkZrLJC2EH4oenR9",
  "key36": "5e222FGDF3wYQ6pyDi77CFx5vERDLehuPZDCN7yTb9pfWhMRQjax4vyZM3iVpfHPgQmHEX3Ngow1Jsc13g7tQ3YN"
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
