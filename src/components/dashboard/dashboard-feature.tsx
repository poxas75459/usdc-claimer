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
    "5geZT7o13SRzjoKhhDrsHzcxMAHZoiqteKBsELQ51zPCuRZQ4LhGP2gzZkZw15XkxuUdnjun3kd1wM6P4kM7cycR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YeCDyGkrXDe5gD67zGePcUnyXkgyHT8p2NFvjp3PBSqZ52Nao6ayTJjPVmSR5Tp4ehc6afRwfZwBPvmwqp2wXWx",
  "key1": "3ZHNHcMzUwFWv17pBi7Uhiv7CiZshXB8uesbdnaWiCtMjv59szKZqJpK6Gy311xFrbxjFgKxPPw7x1tKBER3GsPa",
  "key2": "5zJMq94vPqCG9iqXrjwrBq18FWUTFwBWLD4i2wR88T58UxWTCpfPHQ6wYSiioRZjVduCgZSAo6JYqFVpWPooAFXG",
  "key3": "4TNJgXcdbEXf8YLmb2pNDq4bV1BtpMQPD2cMrCw72Q4DqEQWvwS1992n4aQkGkCznWEusVcUQ7LVHWNVjB4D3fx1",
  "key4": "eeBP8UUJkjPTcxBvGkqey2GFQnvasM8ZeQhSbxyWwgpydQDZWtGQWsuvDxGDbgkjRVAL46EB77yw4vogPUg3mwa",
  "key5": "F7nhUGWu58TJyJPCtN3fD9uEia2Z518rC6sQB449LaBhdtkpcqU3u2kk6UosFEAt91nxteRFfwcXhwYbzsAjY51",
  "key6": "5qbcdVm4Vph7zjV62QUtEa6XPmD1FvPMAURqoTfLkgemznEH3ShkbrJEU1xrNSxasKBUG8PVMzXXCXdG2ZmpaUZ7",
  "key7": "3cfq2VyaRDiBgh9mn3LSXAvTwAMvXY2iVhb8bLNak9YP2fQcMB4GDPR63bqFoVDtrswZBN6e7oXucR2hmKQo22BE",
  "key8": "DtzPTQ2aaHwiGDNJtb3A9hFnfp4Z8qtSgAMrgqxZ34hyda1C9QpBczcDHANTCi7As79t3ZXGFHDgQxqsLym93MM",
  "key9": "3MkTDtkphMp8AyuUR39B93YhBUuU6QZ1LXsq79QWAJE2EDac8GoyJoa21xv2wnCPyLnufpbM6KyBi1Q6aWXum2Ds",
  "key10": "F2C6tgCmiLPeEHRmdZHLwZD1dYeXnKeV21T6XvLu8iJMAU8mzNYaABSLWRVG4sKx52HRuCTX98FkfpkmwGpPK73",
  "key11": "2MyFrjU9Ss6mB6Qefb3NDYnz9ZC3pHTUcJuaAqWKnyFqkgKYByb8jycG3X4okMmVx9i8vw2hBziyaogzJsQ1hmmq",
  "key12": "2ZW4SgX8TNtXGn6Z1YbJyTAnDHBmwMDBMKSrxLtNg54SQELiUvRGRKkpdm2ahV7m5ncxi9EjL1ntUeuZ1ztxraMp",
  "key13": "4vVAhYVZr9fKy8KkMnpsj9r9m69kJ2Mjy9VabMTmp1Bn8bn1C3J2yzaSVYZhnrmzKuqvnVgP1Up19T1CExuLtxUt",
  "key14": "5kYdVb4g7kwFd1DDTjk7YVY4EZoK2hodZKr8oGBHDPHu3EvrCg5WgTKSayqx79EHeAdhmqGzbuqhBtET6WB6TJkk",
  "key15": "5rRmKDpRXnvtV3cK5Ws6vNpjd4z2fkquHfzeXd7zPJMNDbmKUopMjGJLYjMSr8ZXHBfUSCiepg9kQt2LFzsrV3kx",
  "key16": "31Kzy1effBwkGFCx1VPDxFsQLA4DRftpYeDHooEq38yQAmFCic98adUCSzFzLpor7HfeaNzGQPkavQjJgczUHMgv",
  "key17": "94eV7wxc7ESFJaH7j3BkZVySWguizeK3SqZyEvRgxsTShaDMSy3EAWRknAuun9MPVPcwwL9hdhExTwNyjRM7Jsi",
  "key18": "C4RRb6aGLwW1FrZ7F4hqFVV3ri77Nv19i9GLsbjZ2M5osmLVLRKMhwD9G9zJstoQ1MA3RBMp5YSNz3DXNALEtS8",
  "key19": "5RPBoDwA9tkYRe2UFd5PD6RroMaqyBZ3yuVRNSf4bEkDYHtezhciDyJBDqdA6tNyJJLPZxiBeuumX2e66WaFfhJu",
  "key20": "5xJ7ZguiWdb2XR2Z1XwDwPWJF6DqMnrSKtLD7TR63FHC2zmKK3i9QFCPFt8zwfY8JRtXD4eDc48y1itARBdc6uHB",
  "key21": "3NSqqoPoZf6YnAkcX1j6etd7Q1QxNj486K1nhnDLQYXuuZhUorTk4cGoHGgQdzbt7oqK1iGzDW8WWQ8wQLToWKxw",
  "key22": "29Ymw1695E6r8DTQD3iCTmVEnRnVhQMfRCk81MncVPEQeSdoTccVr5V7Lbu9hDThDb1TDAGQAcbPtGkNpGtYDVdq",
  "key23": "4NhjUgNtQ8b3ngdp92DvR2ALpg8UGK38hs2JiJXLBnb7vF92UMSyo71D14P7rj42dZwZ8QzH2YRjEGN6UmY8pNYa",
  "key24": "m3oGVBNXBbkNo1hNNTTSzZ55z1mTxG9U4bT7HMbQFLWkZmPGJAcit7WcNenSHZmt1sm6D4jnDWxdZQ28nXd1QQR",
  "key25": "2WKBh5yCq1yg9kBjcW3HbiKyYSQANsFLdEPkKVrJAqmgxH3hHv9hdFvnbZN4dQUpzvGY3ZwZexrjSUvKgwd8oRyo",
  "key26": "3nfqzsS7fkkL44YcNVSs5tYJVbtbnLwLiuYryeYdD8ZjV9wp8HKQ6gtJq7aBLLkNQ9Q8X6WEchnKMJdjZ345YfU4",
  "key27": "5MJLT8koLsW7xeVhDEbzsHLmCmfRESfrTX5ei76vwRgpYKKg6nKV6Pm5n3PuzykQVaWzKAKS5g4iCurbZHSzMXAm",
  "key28": "4toD7aEDhNeUmcD1b52hvqUaV8LeEjmWBpLPug4dVcHq26w8U7jYpeAoqe3GmuXmuGdVE2MUuhNJ1bQE5vC5WiFS",
  "key29": "2bS9ghSj4jsJ38HeX6FhBzyi1dzdBpT83NP1ex3e2XEn3XjF13VycsevH8p91F5XDRDbcQBRaDaozmNp5qR4QtNp",
  "key30": "65b9jfmGH1VghUkTQ6DesJk4m2hGrSPcH1ynm7iyKKVrWHk1dpRrS5pQaPqVZrAr8pCeT4vN46328njrLRDSfShH",
  "key31": "49CNg3V5xn25M8pW33D6dc6GvDb2tZW8ddGfeZcSBiFjsfdzyzS8488S9DxtnoRX9yrv43pcYQ2zHPRZzFFe8KoL",
  "key32": "5mE5jedz1E5cTK5geSCGjhYPEZa58TrZWvRzTVMBKGAfTkA6H32CLuo9rfwFphTBc5t3K77hphfj6LSrb26LP8eS",
  "key33": "43onR6MHfHqwhJAjcKc7LJe34FieFsBsWL9djuRxPsiiLmhoXBJmFQg1zDkh6DicSCfHqsxiQXfYkaZe1j6PcTvG",
  "key34": "cgKZ28XCoepSdF6ayQRnK5myfoeKXA6s3Pj5YogGkQ5yVy6eBxRGWSAkaCsoUoYnUz3RodwNWj9TMHN2kR9wrHG",
  "key35": "dqkWFMnqmk6DHmZLwGpBY4dFuEuYMxU8PBb6r88rmYBdMqNxz19nLbGztXuRJbau7JMfEP4gaya5JnaeHov5L7S",
  "key36": "3RRRBwWSeGz5qBSxTPmDArQKR88umQ8ubkuZeAUAevdoZcNfjNFDiZEUL6mMt2hz1Z472PLWUbneYYRfTxEfVdjH",
  "key37": "QDaR7WCmRcZHjLsNNzcv99x1u7mPyo2FPJ9of5iZLk7XG85FcMMG8F6cpGwq8wzXXVb9F5WzaKJxVUWGx6QVoYQ",
  "key38": "61U4Y3zguaxemSB3cU5d3SNCYxvRAj5QhtdV1eh5pqyVMR3wNjYsbWTQnUvRBrYZ4zDiLYBdb84ykkGr3n8CAHTT",
  "key39": "3GdW8Wsp4JB5Kv6h5xCVn6zMNqBQscEPdWZ9vN73p5UjuJuFZ8bh6UHh5dTNw3qGBZN2SQ9sD1Hx3J91PYPS3avJ",
  "key40": "4Jkgv5MaKpPRRveomKhX3tAwWQNaFqXtY9nfhoZgsZRpzvF4FuJccFEJXSjEja8foC9ySG354bL6omFiAFB5GsvR",
  "key41": "3UeQCSUzaRPQTtrsQw9wmsP1LXn82gTCCRd7zvqpN4YJ72NF5wDSPEQQLGLGPM59WkpqnXhwhTtwAuzMNdfCndgo",
  "key42": "4Qf4jQpEw1hrk32GkSqkPqniZLHuuh4UwPnyo1vZV5eJJtdwh1HLfAmu8iewfQDhThrAZdFTZnYDkPy9w7Hh32SJ",
  "key43": "2T2z8sznB7pHP9oPoyYwojYZzibLZz1bsEggAgzAJCxqgBKvw8w79MkBShZtXfkDxfgWzHKDGAh1mo2eL9Fh5XWd",
  "key44": "QgGxvSE8QUvuBe5LgN7spPESxTHmiVzSP5hUEepMiaNRTC69xgNwNEhex2Gd6E17dMVBCqvWCMPJYMxxBN9hFFE",
  "key45": "4CmcvW2c7ksUdQuwP7wL8or1FEhk2q4zCaFnHutA15iGFEnLPU5Ltz6Aupu4UMpGcFFz6hBJ6eywRV2nmDcitTrC",
  "key46": "2pK1NMSEDjhA9U8FvSiLVoafu1ikkgm5PuzAJ1teZgXEqJGaMqxvCzmWsZPkBZ8235RVpGjpvzJmKh5pgXzP2eFn",
  "key47": "3oM7RJYHirZMPesfjkk8dKBvCZFE8sNN5owi7bkuTcHjNR27P8yKqQLp7YzN5a8Q8zAjtWioSmNb1rKRr7Br5rDs",
  "key48": "3jj1Vparn9v13iGMpNGB1jwGBSqA65FHgBRUNzCsDWx3Ycr6gyvFc76rx4zfJdUmVATmtMkWDbmwbcsb9g36FibM"
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
