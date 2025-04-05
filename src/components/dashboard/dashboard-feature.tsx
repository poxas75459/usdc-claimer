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
    "QKG4BR3FK38YstYEvhhq97nQrt8g9Xdg1V1vNtzaEr1wrjafKHFqHnB4DCTYJ3VpYjBw8pcDTqmaaSSSWRfbKG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UA7b2rU5Htp1ftsW7NfjgGPXKjpBdKWs1LCtVc5Z7Bf9XvZcDNHVuvxy4QikwGLSQHJzb8EFwDixLC4bou4vXuh",
  "key1": "4kcdGzHdEP9WxL8e7tkEV8PUPjp1DXQFHarY7yWo64dFupH49XmzdGKYNVZ8Dn19C4psciZsJk8d71JUGyxz8QMM",
  "key2": "RPg3wKBdw2CXyxmsC1KrHvgmRjHkmRkZRzMQy7NxHxi4dReVx2g1DTA7JLJDVRLPWrTdHCGtNjjt5Ykfa6ewL9Y",
  "key3": "Cb6WNR1euRWCDbfhnXmkg58rtQPwL6GeT2Gh4espgJ2Xi2DwoEdpUsCSjbAByXcUDSSDycsAVejwQ3MyrsdYPXK",
  "key4": "43Xdv73Wr9W3E7QKu8hq5TBgX5KF4Mad8WaFuvHooavQU2SPcSvSWNbarkG277XqY5sYPaAWcikJca1k3daWPA9n",
  "key5": "52FotsAzaB9cHKw1h8poitiTU895PWWu1AiCMqdnHaq8BzdLsh2LovqH5gDw3x1bcVPR4mgsLy1KjC7RYqdfYExs",
  "key6": "CbkiGJusU9MqWXMYgKnikVy9m6S28gefbZFcWYPQSU37BPMJub8c9kXcfgioJ3q1W9zESbFJTCF6fBuBzsmmU1p",
  "key7": "5mmgUNuHa3fTuvMxgNYYP1eZdCaCfs3mLLNtGu6qK6E7NjYWsn5vJWqoykiksqeeCAneqPpLq6yMs7gnKTETsV4v",
  "key8": "3csoY6SuiNhBCqnab83KyBW5i6tsGeXsHLM9uuugMNmCckeafJ6Uffw4okKx1i71QprimRdVkRCn4Krnw969u83J",
  "key9": "2CEL9LULrPP1VTuNQ7A3LUq5y5AozXAQtKeMwAwspGFBX1ELScXjRnYbsTweatV8PYS7BFhzTNGy7hF8dpeddEYf",
  "key10": "26VgZcLDhjxodrm43Pb2hMatkruB6s7ZdL5j4mgCEsQPTUaVBTtNcwK7mvci66uhsfDc3rmRG7Fucp6xGAFEgmhW",
  "key11": "3coi7hVvoKSZBGw4ZGzUvwwYt1dYMjJNW86zS6nHka1dtCUFU3rSEf8CNE8A4hfAH2ZJYkRgZghGtHao7CEZE2LV",
  "key12": "3RJcvFnk2tnzXcHLrbgSR1rVQagxg4XvFagEW8uYT9b2ifdVw5TkauDYmSDxsVb3YBiJbbErWz1oumebJUuGrh5e",
  "key13": "3bR7WfQs5TjkYeSczjBWNCys8XVQw5gp1aR9D1mFPJs9tWH5YwAjXsBWgAG3Mws6iNMd2g1n26ve5rEWFMYtLJKr",
  "key14": "3BJ2aUwrqyp8ds6AMhBUVP5crwfo44Cpze13KXbTtNj8o2pbWxyyM6PngNZJnCz4NzXSp5fMsQjuih1oWip9aRZy",
  "key15": "3dtfTrLJFxTAsjTVyA15dqct5Ke1D4RqdXNX3DVATeyWNHU1cumz7XzWEp5VY3LoNatXL8zREGGUwbEDJoE46zcP",
  "key16": "2zX3wPvveQuuAwXihb3rBFkAptAgAgnMjNTUhnf1rEmAMREG1cw6ZRizuMrcvd5Yk8LVXtY7p5uor5qXeoYUiTgt",
  "key17": "4BhL2driaC5WiJqJfcr2B9XzmamU9sbEjnRRWi1e7tU2yHAK1VG2CaJHgxgwRRJYFhfgDE3u47kMBAdgxxaGHfi4",
  "key18": "4QNf3Nz3B415sonHsyemRBgoHgWfJCJ3CJbneAAw91tVyYRJbEXkJrSyPEEaiF3CLAh831TcKtYv69Z81TX3re34",
  "key19": "2XMvrqTerfTGDAdY6GPyFJ6qDrt6c6VVNXQhUw1ntA8bw6fjWJRaKHZgTdf976o747ArHVaXXYwKRxatZF1LSP1S",
  "key20": "r5L69HyNx8BeWdM5KBQjN3B5ZVQHxKYYkMU9v4CLjbTAikF8j8YqufVZxzejdmEYwqWjgAg8g6CmeXUVC2fRWaF",
  "key21": "2iQoFEEmv8DUaAF9BDgQtLnvw1T91MmBp7YhqRhAo9UPBUv8ue6KSDuQXYgNSA1Rm1iYPErgzm8EdZU9N3mPXd94",
  "key22": "5hZCBuawLog8rCpoaiTuHqhhHPiRSSq5z4jJjggJRFyhWesNveqDPxwrLN56x2xRjcULckk3FCkZ3ZNe9D1XgNfv",
  "key23": "4g4ptACtgeJT9N8S8NDyk2WWnBW4jHwiC28Espt9TRPM7bMKUAzAyBhNFcZtewxgUsYJqFR1C8khC8Tprg86exMb",
  "key24": "312nEpveiKSVhNndP31yvd9VD36yZXYiJ2SkZVcXPGeQxiAZaTmS9ztUmnqq1hfDCNKJLgfTXepBn77zuh2MCPC7",
  "key25": "bMb89fvUp6GL9W5o6sycgtppXzxoD4pe3qqwVcJ5jiQW7UHqbyLzKcMA1o8zYcrz6m2Jo4cfy5eDdgcZwQKMnWj",
  "key26": "CXzC6Zrp5q7wFtUjqNT3J1abnXr4JpL5EinApu66Z6VVZcAMamkkpzSVoPXWrSBmKuVgCwqDPUibaPJEfWfBzad",
  "key27": "2LkHfpcsF4KUR7havqh9HK4GubTZeqY9RLf2px9NxCXPhEeHZJzXuV6FdcqsDmva8jse2AmigMASG4rSWNMtzKm6",
  "key28": "67C2sRFbqDNwqjGLcCAuL7E6MMQLCU143e9suTFUwwBLb5PpKJuca57jZwanUvRq6ULvyePrcnrf9cj5Yu8xkp4Q",
  "key29": "4qugvNdSYJB6kwSzVCs2owWUayQotFzjnJzSUqrNmAYUVkUb4R1Teffe159ZiKkpyqCo83eET6gPRrzavTLLYAHX",
  "key30": "42afK5hR9XRGYqb9CNCHjb59fnALAfHYR9PnXjJ1hjBWonm96xhcwd1LWH6A49fqFh4hynRuKoRijMmDjgLeAfp1",
  "key31": "3HeWRVLvcci3FVny6SPvGo6KsJX8HnowMctVKDPArpNxD8Fca2T7TXazzWVUksN7VAkj7J4G9oHHwtmeT8sbmwGb",
  "key32": "5Ea5s2iHpPLxxUPatR7u9yEPdiNP7VQiaxNcAh8W1LefBHfqiKqMVpEgKfZuGJGwddypMHYV3tPgYPCQCH8Pw8Fi",
  "key33": "2QSSCxVkNiQD8oQFFT7Qp4G6btG37VyDNzs3wuQ5JmWVD2cePkCAgY6yP544CRe1Lc7j6hBJyuP2ZPNV2xwfue3c",
  "key34": "5AKn5gaNbVawAtVb7UnVGuUVgicsMTzAg8qF3vdLKhPTP62vKCp7672d73fSsRYYpLw42R55SPiRBcm6GA6EtnnM",
  "key35": "2NmGT2TRFAKbhZqEH8ijAFEQh63yvcS44agdaJo2WdG9Tth1kzLWoo54bGL4rMisGdjMEtweGPPtZGqRJxt6w5yu",
  "key36": "35zKTUN7Rr8hQsybKXo16QRGNvEPggCdu5aUDtATD1tBGdiH4K3vH6RnTWDXjq6TXtfDVj5sTDmHTSchc8cLdhgK",
  "key37": "538SVn9H6ZM1rvmTaP7Eh3Jrs7gyYFzomXDa9QSAieKtBoViZhKWpEUUY8fNxAytj5bZoaD3azLF9CiBxoshmTZ7",
  "key38": "2oTiSjv1ZKswQKvCrHTPDjn6quhLAfVbvft9Jm2YAnQ4HGvdHa9v8a4NatomsU8TCLNTQPKd694eoigWGfaB16FN",
  "key39": "AXx8j5pz1HATkrSdvotoJsiuqdUWhw7UQHra35FsC6haFLxxkTnYhuDf46rWQZAvLi7Q8YhLdZarWcnYWUkfnmJ",
  "key40": "367WbK4k6gimmZ2eB6XzbVh5roHwsqjHhHnzCHVTCAFrvNocitcLEQA2zzqBsnY6LuxXprpwtoGeaafyHbs3poZN",
  "key41": "42bFhPk8kadwseD4kwStCPUjVLSiZXrKHNjZrexJ25SUhAzftoJ1mSeKWCYatEYMNyWKpuZEWzNwZusD3xBbZMmd",
  "key42": "2WBUik7VwpG2WHKDRz2cL2GgWZmFWqqScnoWjTLTTdzXcSVnKyscN3ggADsZkgzMZCyPWZQKBaTJavbBd8fXjt26",
  "key43": "8gnmCjhqU8cnkAfbPHapHYoGhCib1W6yaTbfQijaqy7iX2tXArJVSHyPKYv6hDM5PVA7CKkeiojMB9dm8hXJx5w"
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
