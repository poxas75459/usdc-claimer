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
    "52jNn177HYba8JeJRSh7KhZhyoQLKo3JtvLPbLntY83p5T2JfhN1A2GeP7738k8qYp9uiBwxCqcdPNLyJqXe7PKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uf6pgyGkQmu47m9edBaVWrAoVDuyJN6BashSMDphZkwfnNU67BzFgfmcs7LhUueXG1RESedDx2rcD4o8JyMPMSV",
  "key1": "3wRdWSBmwZsLzcwvx3vG1nh422ATdkRSgg68BM2K6ZZkLc42Nz3ARn6xbfdbDVwhvtHPuJTxTvL21KFuVsrQA2qB",
  "key2": "63AYrTGW8pfkLLoUggiTH2oAJrK9ucrKA5qwGgjE5rikkWwgTZ2hz8HdBiwuYmUGXhSLZAt9rCTLoK7H5MCSWw36",
  "key3": "2UajCriH7kd3qABpEzrGhKb6uRw9d5jVBrUq7ZNZwxfaCyqZ2NTs1j9SFYhbobhSUum69wUHQ4ViTACj2ZmRefbc",
  "key4": "uuS4YfCXcFMyDgkf7xdgY8gFTNosB3SM1bcUWP46aA7HnaXPFwGwHJwxi9yWauJ6VEfff8dUu38abmVZoP7HqDv",
  "key5": "3JFkT1CsktMSTJp32KwoxdeofXxkuQnnZz9ASk9cJKpGnz9nr5x3JpDkXhqLBGsdDtZpXA9mt29U2qJ4m39FexHG",
  "key6": "4JRbDrLiRXrAC6ZgP5TonwKWfKUprkJf95VjWCPE4GwMHAwaSyVfaDsrqQ9mZWYn4zK8QYuvAdgwN9arY3uc5uVm",
  "key7": "5GWiSQJsqJXN2AkLXYSmrRsFu5LJDZFdrLjA5d8NeDk91Xqo3d3JHDJ4gXdDw9MnVSa6uopyw4GZpcC83acUV6tr",
  "key8": "3zF6WByv1FLKudEPEWoG3RD4dv8BozxGg6wE3QuF1FTiyWupVqfHvq4jeR4gmY85rQ3SxajX6R1MDmmPRcQruAe5",
  "key9": "2MSu6RXVPX47LTcDpvYy7TtkJ7DdY3Pfs2KAJH5pQnYqZAbKAnSzGWJyRU5RTFNYTYBLHwxLeKo2NT9SHSQUvpCF",
  "key10": "5D1mXz3qdgfkvWh38vj56WQmq1ueKZeMsaJnYRCibia4dfzv57UmoETmjY21m44uHZRfuqVMWZZmpqWdkDebsB6e",
  "key11": "3WyQFyMk2WJWyg4mcmVaH5yqdE1oQYAU7Z1RULZ8Q6NVWH1nZqJgk89cT7F4ipR3rDjrCoEoxxGw8agt1bpmfNT6",
  "key12": "2sHitkFFjLHKtKqpcCP5ELvQDsDr6ZV1wuAPJNXPSTKZWyXgNJoTFbRNKdhLKDXFp1f3iwRmVM8EfVp5Ev73C6MK",
  "key13": "4diYBzetK1UmSKpqBPfo3Q7Kk1aZ6xjncwMnxozfgpCNLDGVgetdoEFUYc6yySoVDdZfa3tmt8qVaaSvM6DZLPaQ",
  "key14": "2Cad9AYpAjdVd3xQc5J4bz2AhZFDwY5sKdRL9ZFxs8kuygMBjnweiSSueehR2SsDDCDRt3cgo9oPkmSsNrKRSFXc",
  "key15": "5cVUc4wyAmkPJ8F9LAopxRkuTx8q6CYgsG8nsZBaG1nrc1TFiqf6dWeKd32riUqUwWTMEtYJu9hF5c6V1UnA1gJL",
  "key16": "5EEKgoSs7smSZsa1JUFzY2rGvkGforcRcMGgfgD5LbKyQNCyVeSbhKPfhkDQTuZtCqdNfnMH8ZdsSRUTX5pB98o9",
  "key17": "65kjHbxDcKc9VoVKGztBJ6o6evYRFpQcP6iVKzqdpa27mQ7fZx1bn1o8mcGtvo5viouzxX1nZavawEEqGQxzj7d",
  "key18": "5Fch6fjg2y23uRHtsN1R29k16Pqrer1QdQRj3vasZkhbiKJDZfs8VpiY1pKUzXd3SDKGHWQ6nRsYme7vazE1XZjB",
  "key19": "5f3MQ55TpscfvLWCmxhbugnUKAuESVozSLg6iGCGBDCJCusTNytpdo4rn3M9U66zRNfwNFC3rTNYHezvgkXV129B",
  "key20": "2BW1Es9FJYzW3iQh371nuZ9FUErHgjbt5azmX8tjYoK2E7TGyRVSQ1cGFCkNH9R6fmf835oCRfbL8tJW2mkKhcSP",
  "key21": "3vbiYukeMeAip7gwqx1YY17913MGhiqZJDbn2anzHf9JRBmmz5EFSLzRkmcXzonn6bNPgTneiVAVaySPz9hdZQ6t",
  "key22": "2G8uFGGkE6dyv3zJB45FtmqiYr2HzpJFPZo4m3ZNSVn8An2ZbCxEP6G9aGpvpqRBjT5ZbKdFbTawSjhkCLgJrGmY",
  "key23": "5Cq9Z13xkcqNtGC1XTfGPUp8bMk4CadfdWurvgpmP4nHR3ym4EcC2sRitKhfWu9EG5GJ95aU4RZrgDDrZBGogKqe",
  "key24": "4BMgv7DoAPgAyBGDumVx2LupjkRFFcx6iX4NVZmor421jxjWF9sUWzJxVgtd7YegaeubTSRDUo4HiFMu3XADZpgz",
  "key25": "4DKvSW6eVPP3xmNvukF3xBbXB5mANREPPtZE66NbZ4ws3cozz6MULAAd1R6YpQ7jJeKZx45WK2ePB9YoySZN8wAd",
  "key26": "575QSG3B2X8tYG2KAkLEQLxxPqSDuU1F6r1zF1yJKHb1N2t53qswX2knF3rEKdyoWez62gurLNBKcZrSxPzhai4X",
  "key27": "B5XteWmW5pM7zx1idF4w5M7QVzRBa9HJPuM9QkoeqtJeJRpNskzeJtfHk5F7qRUj9eyAtGLDQv3S8o9iYK9x8e6",
  "key28": "62aRMwpqKtf4krqz6UYA2Jjc7TGZKEWkYtkRDhwKLeDYxSPSdn6ztXvw6rMdZbud2TQWgYUTKDasRC3XD2QZVgx5",
  "key29": "28Kx1DRdQiUU39cHySH87xBjvoTNv8mzBLRF2p6t33VCQUEfqGSJ6hDf93qxLNhf3JdMTXVcgtfWj5LVXK8ZM1ke",
  "key30": "5GvDapjEvPiRoTi7bvCyCEtJAEt1yBXpyngqRzJbmA8Tu5zmDZHz7hkZSAnS9r6A6SLPdPBXcTSWjHniJmE9CuQv",
  "key31": "54mJNU6nzgYrnGsS9DccagZsk4bKbC2xiMrvTv1uWtKDLqQDdJSorYvG7ZYs9qp9WNnKYzsbhD3RftPb9PZsb5jQ",
  "key32": "25B8WgvAJJngd3iUj1jxzxJpbim9YprS8a9ix8wJjnfrdeAve16qnfgmfWkrXy6ZJF7ZNBxYwUGkoTZE5LJNsqrU",
  "key33": "5zxbQVMLmKAfy4nZ5JZhaWfHZQL2vnB4iAEMNDqMPNgwaUMySZ6AxVd5Xs6UoP9ZRtxPKEgsTzySFC7YSyykjDVq",
  "key34": "2mPWtmiCxEyZjMKBkw79Loogsb2JmUFGb6hKAvxvXEnDcadrWu5XULGT3XHwWbyvXDagxiq7ouswSUhEr7nLRTTw",
  "key35": "4pDwxVpzgW6XUV2F6eZJEs1DrxtgPEELocHiiE3fCkQRgpzhQJCbXSJD5MRh3pozdKros8MobgcurVD3F6qfrDdR",
  "key36": "2XxRyhdtNNG44RJVswXosETsK3jdE4MJR75LJ8wSGo7x3ePnNbsgXeufse652xovpnBkkjXtM9vxAZVTFu1kdb5p",
  "key37": "4byR6KgotRbKfYE2iGF9bkyvHSgB8qT3QmvyvTPci6odN6WAJv6aLERu3YuKFzU5JvPEwMoKrq6ectJjzKKVRxEC",
  "key38": "UgXWJJbKPFzZtouoBsNmJ4mxMUNhPHJrNvMrZvEu1f32kJE5sg4gJngyNuuEb3WeFf3zRTWyzpMjLUswC3bTV6X",
  "key39": "3n6jHGSUk9Q4QPNjigRvopx11s5qR6hrHCke93Sx7V56sCDZz1WLSz4kCrn8jwXDXddye4i6G4cJwUtzpi1bm7U",
  "key40": "WQB5yYEpHiso3RiF7Cd22waPJJA2LFzb6obi69SvA2U4vjZG3YKbXz9xGQrSYCqR4LV8Sf9hpPth1aoZxM4e2cP",
  "key41": "1nyDS17VKgyFDPq9B17JCpAUneEL2URtMDRzuz59AtUyJPBuiDsY8tq6N7QAPFqbFtXYB5VEe9zXeV9A9qwLEzY",
  "key42": "23sML7uzvQT6SjqC379xaF6Uz9FNPJHdQpxQWrFTWVKXYah7pnxBrmhzbnBH1WKcG1HbmoNnGPKPmaRX1yUDiH1M",
  "key43": "23iZSszbhCLWhVs8ewDKRotjAx8EipkR2PvjRAkKWNDSEozeBmvPszkm9Sdt9Z9XKXCHTbEWDU5ySTAoexav5uCJ",
  "key44": "9R3XeyZrxEwF9QDdEJaBQ9G2wwXdYzm4Kq8iJFvbZeiQPWsjmwXMKyd4tJdfWKRiuPKe7QzW5mczKpszPoxgF5Y"
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
