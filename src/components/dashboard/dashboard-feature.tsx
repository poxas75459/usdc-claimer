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
    "5bs71fxSuGNL5VHAD5VEzFHyVbnxHbE8ktbfWp5s13KKM6AxRwWmHjQWWNm5sVj946A6A7jtHqApBX9Y2N1pz8mh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LAaCaZyTtg8PRGbgraBhHWprqQqzBfbXGk4wYhWzgipT44HZuC3JmTTjnqAmUFc6TAEHCr8wspEXBQtH6j4LUHY",
  "key1": "3ueXJck86bSBP3tNf6Kzm7UZtTC8sESiKUvCZTVbhzcU3SRdgdXvpwardYMGunnQXjDYRCXk1BvfT52U1mtPiMz3",
  "key2": "5qAVqQTzsEFjk4YLkTnZdL4do71aY1rExjvym8oS2pUGbedbMRHZfuA8ZsXyuQQn5hYBAijAyTs3M7dAeDjKV8vJ",
  "key3": "5QJJqDzeBDsuNGqkZuSVHJMcmqGvHrdGotqmMVjPvks68kZDFWqKfdwXnD1rog8dNxFbuX8wC5uSFeE5GYnPgSK3",
  "key4": "5jDkHye8FQWvAZFewfN8VY9ee58Gf3XCmExGGR1K2U8uG2wybZpdYdYNciF8zw89sw4bVY2W6AGJkHQuX3KsuXvc",
  "key5": "42iz5invkNGxzmmsgZYue91DXajtECVSbL2cKtcKyErnN2Tqtiun26RULHSe1hBUe6mrZjJLBeLeUz6x8FAjbaXc",
  "key6": "s9cMW7UVjJdgQk3PiHCTcTGGusunG94gfWN2TVRjee5ZLNvFxsc7aubUYeDhzQf6sffnk241CopUUGx26ZAWA45",
  "key7": "cSC7HJqWAqDUgi8EFthTnzQHdLcE3sGqF8ofLcQnJfvMQ74UJw9p2BGskTxBehYBYQF7CxWaXfeGFL76W9ZHbLz",
  "key8": "2hi86V7ZVFUKnpoD3T1q4Rg4tUb5MRiMcYVcYxKsTgad2jUs5doq88GeX73SKyfMSMmJtjrHUDmHsb2anQdixHoR",
  "key9": "4PWLHgaZkeeJqcNDtnBariBQ7zytgkvWvt6S7yKgKnwKfgvyxxZijWszxrKNFmMQ5R44qpEarNjDBmpMS5JkZ9g9",
  "key10": "SdGSzV5uYpgL5UaHpYWrhQkPQLzyoXAu1apyhsiCPf94qNvpHVVXd3Dx7HwVsZJE4SAjeRxPR7aGjzmYL9VSU4W",
  "key11": "SR84wDhDcWbEvjzUQ9d4a2S65eJC2g7JKLYVgSYmASs97vwnWLAqGzP3zGAzKV5B1xsEZ7JYVkR3ijXD8r5T4gi",
  "key12": "3N9o5yxMRGZaYYrtUkksRSH5N5dgA6Kt2y3yuLUA2np2manKJZtoXmJYwHnnsef6aTqhX3B2Bu5LU7qKUjj53XNt",
  "key13": "3F7U7fisyWKph9jvYyiXFSeMCwRg1T27mYgBLFBW21h3YfNpVd8ZxgAPocqkjQAiZMA7qKtHA3Tv4cwLy55QAwSd",
  "key14": "3vkjH5oEYsfK17uisjJQDgVYRcyaNDhSuz6XfsLyhgdBVLP3zE7MaMEvYGdAcGW5rH9tQ5icrNeToZSPhnwPAAtj",
  "key15": "67Pp2SQTC7zvQ13SxyHHMzTZCatyouuEGW1iSYuY75tn9zynH2N7XK4rdg6EN6Lah4diK6sCr8TndnWowAT7CRXQ",
  "key16": "3W88y9Wb2PG1qioVTPTKfKKsf8S27fD9i2vnfNeLAohUNhvv7mMWQAEUuwQe7Dk4oKaR4X16djXTLKM2X1ei3XU1",
  "key17": "2hwgpXjV89K8GfLYj8z1SMXf5PJ6EYRBBNFNzzxAWFcFJaBiDCEyphwgWYMJYq8U5NgEvKUxBriPmXBjqjtgutzo",
  "key18": "4Aoeby353vhXmVYgv7XCDvWqYtR5EsWJHr3sZGCY6XukuUmE6TJQnHpEwyWyKLDkVoyq84Cz8rb8S88DLYYuh3Po",
  "key19": "4wA2Lef9q2PMkoW9PThCCkLJbt6WYjVmvHZ1tGQ7NhZSaRgQ11oRhrnZfNFu5ADQyeMWyQibswiNVXsCgHxD9EPN",
  "key20": "2QcgaEQ78w2KUJbrifNJY3ukH1bqnVAQz3er5CU2QpZ83J4EVQ9aN2kPLDZ71h8CJdyxXdic1t43CR3XvDAqNT6T",
  "key21": "5AtJi4zV1sf14tk74Xr4zq34PWJkGMWuC5PH7jepQacaJzpNqXvGiz9PmGPwbq6pjTKSArfC1yajYwqwH5hm5mYv",
  "key22": "MHtKoYjCJdC7kyccf4Uo6f4qUUWgALpFrRLA3LYsQp8qx8J7RuHcg6mUU9qLLLsMskZjMbLCTY2vjcwE1VaJmDS",
  "key23": "5D3q2LVaHvLRbZYDcuTBzVyLXaj4Aasm6J2d29FC7pgvy8RHDf4JSZa6bHe2QtU8bpM234BfdCuRgZLmGKiBLKHr",
  "key24": "4AD7zyYgcT4XAYjA4m9Es44agKwYqBnvuDacgqCWV5xkSi9aMw8p7qaxQ3uewRSSo99DNuLszctD6L6K1xkRFnrE",
  "key25": "66HWEC99quWtqqDGort7noigjcPW62honkzgpPawZybfm3RQSjhDqkyrddr9ECxRDYNacKjFVeUr6uCDuZ5R9bhe",
  "key26": "2kd6uvo8qZpTZtHrTyssPSm7j8vt8Gu1USD8JvvmRAQQuAJBdamPGSY6mZ9YRJEjKEMJxs3jC28YD7BZoVZFDEBN",
  "key27": "5yj2gvG8ZSaNSFs31jiTQb73mbkpGZXcukiwApDesXda62HMsfsSZMyrrGKuVQQm1JdyamBLjmFxrVLAbU7RGaBu",
  "key28": "3jKkCYHSryeg9GuutvdNskRm3rDkTNK3HHfNwSKCpnm5T8bukNEw4mbUTtNB7zpxXTojb5hBMxMzYLDK8orVEWaY",
  "key29": "QNwK5FkoLigAkS2ZTaiy1VkmYppgnBZz4wYeBW7E1k6RLfcMSU4p9KH4ts7NxR6fR3JRdqX57Pk6J4tcGPn34bk",
  "key30": "2Fa5dfgKEsB9sLNSZb179ShD8Y13zA8TxhDn5NEC1jBZcwHS5wnaaJFGUtF3RL1eLZxUcaWfgm7i7Z7ziX4mxtAv",
  "key31": "3GRxqSPP5JKxUnWQrGdLoHJnbWamFAetDCqnYyPLRxYtahf5SNZWjb7ab2uVJaxREeahcQwhYDmaGFQKLWdKF9Ci",
  "key32": "2khNd9EaGjKpYSHGbHJCxYhNnbVM7eYaTD4WomWZpKzs48WDCjEZBkXCCGZzaSznzSyhjSF2FqbCTqyq6uVog2sJ",
  "key33": "41HqpcvbEALa1t3XAV8NDzA4y7rBpgEXwcaBs3hcVNvTFP95QUKZHdGZDs1GDjfgXet8W5Nptry99PQNHTT8VkaT",
  "key34": "4e2e5ex88REWbpykvK2bJ4pk6MdwunwsZkF5j4Hs1KvXotTNPZHTQS9MQHfbegfUbBcgN7PdKyS6Wf5i3CjWGTfJ",
  "key35": "3F5Wo5Fd1JMnpi5uPNj8r4hVDHCNaPA33J9dv1prXastkP6snc7DQwxregtxuyjCjo5mCu2sJdRdSMHCqCHwtMWi",
  "key36": "RCcgkiCFniAcjtyoFQs1LW4tLig5DsoLLNDWG6YPfMMUP6yrKf23xUT7EwnzmFfgzFCUUKFtMaH8wxAAYzetHSW",
  "key37": "4abY6e4V9yRHXztXRUR4cdoqkNvwo9vSq7kbQSeGcwJzt7r2ffgWM4r1WBBQ4PFuxTHddsUsh9ayH1fs31NtF5xu",
  "key38": "27v135nTgbDwdotNW8xMu2n6TBUobtU5cA7XySqXhfWybzBRtJQPDw2U3YziCcfkNTxWzpkSJVj9b65EpDiyvBef",
  "key39": "4n3SHqfAtyGUebvNPXt86cCUWYV44WNJVVhaAmhJBjW67ubbF1Yeudud271X2kus6RsJUgCLwUDzqQLxoJYT2nKQ",
  "key40": "3G3Vp2YzqKbstu6wfrXZz7oAdkLxALBVdfnJvqE5ZPdkKRev5Qjiks6tKziZcQT6R9ov93CQ1nii8KEPMYnwNWGd",
  "key41": "5a9hE7L8vVNk4LUUwG9xGa9pyqVPBcT35RawCFdDzTJXzBzxKgibNw4fa9dsEpCUzGJUvqorqgcU7qmVYK3oFUvd",
  "key42": "493X8ty2jynn6Njv6gxtuKLRFErgETKqGKrGcQsixH1nCmSrRiccysAxh9GXY65QHiykz1yf8NhX1GgDEo4ZFtfC"
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
