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
    "2k2nUMThbVWDR8rgrtrTbMib42KhWdePG64M19nxZbRC32UmdYdhsQ8TiY72PdsSFiS1cxCKqboGhCYpAqPMXM9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wuTR4tDSmjs379Mk56LrNvy1qVvopq97AF3v6hSaLzAEW8frRwJirWFiqRcJcbmtb8jSk7HvFZiWKhED2vNS9eP",
  "key1": "3Eab7uUfaj4UmJmL16Pn81kouWSCXfsSodcrYMgVcpXc3Gf1JZpaHnAAT1aDSZmM1XVijsjga8shK1EeSZatU7ew",
  "key2": "2TqiryZqjAxnGqnHZkuwDnBiqyPpjD1JsMUysE9fCDHywfSK6Y5rWQdcfPpdmbvPwDjEQrXUmBZyvdsAsYfEEqVZ",
  "key3": "HsTAGKoowPX6P6LNgv6ePFrExQLBdSEUx7Yi8nS6Feiths6C7qRwpvLdtxDtJwSCPKMZoPdZ3ekz3B9aXsquZ8V",
  "key4": "Mn7mGuxSGoqPt4xVccjfiYNqjBkbshqatvSijsQ3xnRwpWGsWPryXp7YoSUiQm3ddkUAEj8WKWKuwm6LxsT6h1R",
  "key5": "vsiKpLGwjCigwUgtpdhcGcPQG3EzDeGKNxx1D4sruih6ZhdLNyVc7CX3jwQWgDY1dxAkT53tbQhyKSP6Sd7rWjn",
  "key6": "2M2gNGTBfvprvfmkXKP9JHiuujjKyKospPVWtWPycEe3FyUiEVCnsASKfySAtVgYTuBYgwwHEper7VauiMdANCbo",
  "key7": "2cG97Z1hksaJVgESkCtg9L5Lw4QtF9MR621h2z4fp1Pr1PcjkVoytdviWEF9oBEzJYvwuaZJZu2b2DNaaa6rvWH7",
  "key8": "4AvAKGJn4fdex1BPmNSe77GfckydNjF7FNh3KVCiR7jqYbQqNZ6EgAQUWU7CNSpsFMRTcz7AE3iJdfdNwR4oFjoa",
  "key9": "3p25TervCfeLCSWLHxc59SXvvrjnzUy2uzDdpRxH8SXRNJxUaoYuD1ZYvFbWashe427j3nAf13kJYH5dZKfWoKiR",
  "key10": "5r5c3aNdtVyCVFCvwV65Qq1qQsEfsXAEF6LeR7Jpd9pw1vvF2zBR87F1EdV3YdcCtL9fsTqUwfmJeJszd7UG9HbH",
  "key11": "627r7kPt6WUDXRW9qkJqrRzGAi2LzK99kfk89m4tuWRrUcvsACz2xETRmSe7uC3aGxGdakwVmioLGZGf5GXMx93f",
  "key12": "4Xi3M5t5oZ1z8DCP8dHd4U1xTDZSzBm6dNcjJjq8JhKyEF3f94tctR1TLQAq4r1k18ZbazUUF6sECx5AwaMFFxwJ",
  "key13": "fQBhfE3YpsBkDbzgWFqp91u7DaPtJcAxePGZkvW21FrvbHQzPqXJJKoCE4hwsUWaqskYA3QoB2WJ3ouWm4T4NTS",
  "key14": "hfBJTXBEzxShYDkhz69KQzKcsWtPAJ8LzZnk3rEpiLUCXb2JL7v6prGXm1ZFFbPnq3LGtNBeFMB39Kp586k1LGW",
  "key15": "3m1BwNdfrrLHUASxNHJmpSyKPqvTwkKQDVC2kJbAfTbkjiicrYFUSbbRrvxP5CGxnQvfTJbW4o8yxPzTpSr8jBGU",
  "key16": "NYh4SvaW5Jy5XX3PqSJUYV7BUvwSiH3QJsYGWgNaty2BQ8pnyQ4mJZyiw8YtrmbWtseaoguaig1hfHJQyhXAW39",
  "key17": "KF8NRgAg4ppQLeXmVQjNDipGNNrg8dCMijYNdztac2gSKk9yJTVsLxSogvrV3tDmZLdV4yf9qSrFwWiX4iNt6ep",
  "key18": "zYMSqZULoCXQNxMnVBxWabczrcEBcDY5ShCxUdgruvtJcppZp4B8XLdiobAKUds38kNn36bYFCFvnqbgCRAFKfs",
  "key19": "5wuA5ceT96ACnCxvjrSNG2hdaSS853C5ytXARaX87cUJn6hptYCwsWm6r1ZaPFbmBAWpR937dwciPUGbotvmUFh7",
  "key20": "292ATxBfxyzahuGV5NJJFqpXRmNgSvYGotGHxoMuGzQgcJ73cbJnho7db6RriM6bxDfsL3k8uSHBnEPsip4Gt9Cw",
  "key21": "4kmo9g9LEHw6zcNgihSirq89Fh2kscfcNzdPtsqP8D5ng8pP6sL11fYt2kJKB3EX7i4wCPgqrHz27FdPswhqcnN5",
  "key22": "2VSy2Ft3LpVo918B6ARKewCoV2QtPcrRCwFdDZi5yQZ3iAThTLZtJwJgZaCZ5xjhvj6LPpyvdtn4gZ6J8hUEvq5d",
  "key23": "4t7tpqeX34yLNUvCqamEhYBXJpvofGpd5573xvBsuvix5qx2ggzBu2bjDdtvApNyvFjaAhw5ucHxBiefhKaAGEJq",
  "key24": "3W4buXHK2PbbUhfA8CXXntkacgSNrA5HmoNvUwRFRMzz1wdpYrc18v2Cyjvm35rYLfHhQBdXDk18z9CyFTijGYe8",
  "key25": "4PxvxTgsqt4onauTJH3SM324qCzYhv85brujLsMiVeU5x7cthCMFVuGjgYJh16hMKEwetuoQM5W91XqzrAJo84Ae",
  "key26": "4Aj8tZepmuZdBz6jxuVUK79WvZSwgQiADQ3TdrLrtasaddNhfYdLQoDEm6gxCit8aGAjqxDe5CyeYSoXvSdL9q17",
  "key27": "3gSJxuggJLNGDQ7cub2sdzLng7Sr8bLoortZ6djrQa9S9fV98TJzFqkFpfZwPUxfHULnXVpiCQRu1ZD88KohUHzw",
  "key28": "2FQPePUajcv77GwinYEboxn8H2Xz3KpUeeBp2Uwu3h3HwFrt4qoFFT54TZGJu7y2gioejZApBh6HcnhAFcEacch9",
  "key29": "5BgUwSaTv2XZSRLRyYCfwGr9FPWwUrNn56BGGcFQEx4VL6tP5wRZAaS9UasxHyGD7QjfZoWu3LUqj7VBRiHRyANr",
  "key30": "1kJNJ3yqwDz6XVo8SrXANF5SiRHfG9qp68aogyi8C862pWBgU2q7HFwjYaGt2Ye5U9vzTDfr6YuDr1s1j1hTg5D",
  "key31": "SRRPd3N5YQ7wJ1uVFbs1udY824jdjAiKrvu9nQLfNRUQcFbWom4ojUoYmMU1Dkeg3Ck8bD9nzPF8BbJK5fF9wao",
  "key32": "4XwQS7Gjtr8Sfdh1kVxZc5ZFWX2tkeQsEB9AzWPr1Umh8tyPnB3Yaf4nseHs1ERP7RuL5Mu3HwS5U7XsiqFgUvDK",
  "key33": "2DHpfexwp59pPNSAD8RHEtwksHvUNkWZgFMbBomqonaQ71Yz44rQQ6AxSXFDFY9tXwm2JD78Qad4u6pioN3eCFm1",
  "key34": "41yf7FFvmUbwFEZFWtXfRif5tQq53fqMyW5HmJFhqiDPRnC9hYpMNNNeJ3f2JR2dQXX15vrjDXwnx7tKh9EgYzuE",
  "key35": "3zNnmVgmDv3keLUWArR2z7rdu5j9ULP3zSmdddd6thPHEiUeZ4LyTBrJPYUwMBtuAZFsoh3jTQAJWLxMBxk6fydJ",
  "key36": "46rUjVsCcGBdfAdwQFYHFMWTFdK2pSfhsQBhJ6zc4vy6WxMej9EFWkkMzVzVPCnL9fojVHAGUGHisSLCGWfWVKdM",
  "key37": "5u54vEf2bY77heWUFKS45QrHnfF4H9m7fGGPYEY47hMSVeKfrsSdm9Lxa68xHTwbbKYoHEdmLwiVzXnZRbVL9B6q",
  "key38": "2hYrqqpgQ9GuziLPPrvU29djpagD6ToAkNzDFk5fTBfPAJakNAM6or4jUg4tsYokdRMgs7XrxWvnZWGdcccZtUiM",
  "key39": "6495KRTUkAqLjUchpLGhrYTiTav6dHnUzvesnEGLjGocnTDc8LeLy5kqK4bfQbMs66X8v3EpMssVptcEqZXFFmNY",
  "key40": "5RadpwpnURwqUeLW5nqPpegTowwUMT92fhNLKGxXB8LdjAWHbftZreZc2nKreA57LGXMcg3FfdPtLtWLehHzTFK8",
  "key41": "5hshSPcJmNG9RXYXcvVhSC2h3qEz2xNMxqpJZB4NCPcoPoeEfga8GYKsx59XX1uRSdao133SCSSZdXhkzoN8yGzQ",
  "key42": "Quocp4WwDDKBhLocYbYDp4J5aAzAnSRxRC1dToKmugtWS9jAHC2F8MBRGNFEuZb2Hn2XTExRNjfU8cQfGTFVe1e",
  "key43": "2K1AMyeRdXmYPNcnDuvumPnaH5pQujUpcx5YQc9gQPk3DFtf7Na9GSNpYmoVoBFCSTabJx7rqcBwBz2xk4tRaUTs",
  "key44": "4JuZCkda8bPWdxYD6gAGugdiAtab1yJGC8pBQ98p5CDZqjWez71B6kV6K5y1Eh8ba1kQTYCHxHwRxpKXyzvYttzT"
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
