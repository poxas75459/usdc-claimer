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
    "WVqG6wav8eTWRPM3otUrUxcvidju2yUorQ4kWAvfZ4VnBCPv3RQimsahkTrA4sdYVWKkLqwnRiXug3TojxTAYDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cTb2xw1z8aa85VvHLFFnRZn5hTNJQvj38UHjboyGYSpt37jALrRSr52ZwHgvhkqgXLQrLsoNUsWuEfZPvjqoJnm",
  "key1": "5x71ELsWzEjsyJWkUMrUtVXBBE1deo28EPfGqq42KLFm4GFH5K6dg6MggxNr1xWRcrZHVR3tCnTxVcUXPbqjBzf2",
  "key2": "WjEMYwDx5PMCFdmaERthv166efsdpn3VnWsuNxs3Kvtku7Mdbhczb6T5hHotTa9bJimLboT4QNrf4wMCrmakrJm",
  "key3": "3csJ6ieSLhL5G8ePQ1LrMUhwLPhQfFDpgZiwu8KxMLYzQXPNug4EKAY5NKRDxokB3kve7EpjH81p8NPUP754bEtT",
  "key4": "2gLy4FcEZV6nRPrsggUpHwYgrA2rsDaT3DjuTvTUHbHVGZUXQkTUzzCf378rHWhoBy97yUveAcpo6eycgB1D3D7K",
  "key5": "5cTZoh1YHiUMpKnCb2DbE6MuschAatbaDfCVeEjgbuWGaqzj1XsGNwzdFe1S1ZLAAovRAVh2iDxJtL2eSUd49RzW",
  "key6": "5fmancyLx2r5vB7c1jCXm3aAQqGLhwqMKEZu3zqhhrB1CpzLK1gCD3WS8fAbb5iL3pkLSxoPzh7ukCirqPHnSYYX",
  "key7": "3LmCbdTjsLp5yyZhkUxioL4QPJwZvbxBy2zGV7hBaXvK9yySUaxWK6A5gDrH1ZNfg2uvxMrVhFaKoerKJ3zw4i1K",
  "key8": "26QVDT14QNeSETeJhVGJQiTFg14JHMU8yDaXYLCZ3beEcHCHRBs2yHAU2AFduddAgT9vj8z5RMQn2ffnBnyJeNCy",
  "key9": "5K1oRvWmU43KtiFxcREWH7KmqgcMzkStG8kNFoZ2MYjHyFHW7rAzqr8YVy15bSivVscXaS4TSAVXVnjNfhigjFrN",
  "key10": "5z1LxJc9yJpD7hmNRPwuEqjujMuPM5TY2DSPtL27M8WjBsNJj2XT1gVbA7kDrQZpoRq8kmyE3q8p5LrKFrtre1DX",
  "key11": "465YSF6q3D8pGeY3SjXPdPTUyafkACBSmM3D9S4Dh9dXhvucViP7RKVM6BssxhqBjKRUpb5q9jxFb2UXf52e98sD",
  "key12": "5CZgvNnGSQ81dKPu6LDYXV3Rx1Y9ZpgenvzSgBeV3uQ494hg7kZavwCjTaGZumthrhhfPX1rVjBRDJZLUXpFLbmy",
  "key13": "5iYvghmm2Hz1szoyzcVgJRyYUyLDLwctk4W4KutzewSVqSTqYyPeViknuN8yFdC2xtQsyqtju1JFsHeMXDfQkNhG",
  "key14": "2fyrX9TxZDc3jsJNwGH9ceccvSxvJMEUaeGJuUnNxn5EVWUQkEyq8ve99VMpNmxBPzVXe65163SDeHwQX5Kb1HRN",
  "key15": "4nsktVCcgY1SEyTp32RVLvhVajs5stHrAQdrqc4UKdaoNPwW1tz3K7La2mpXX8HuJSbpfv5AtTQaR61hyi6h4xUg",
  "key16": "CcXvMupJWLB4b6vKMVqn4gC8aU1wuPjiPoGhdnfuA8U1MuQ33sFduakDQ63P4RX8vbQFAAbikHfukydio5Wop1Z",
  "key17": "BnmynjP35FDfSEycrst3DvRGoMXHqpAqSnu3UkTpcEXZFCBtkAHfJeqtHEQcEXz7cYszTKTh7ZcsX2o6862U61V",
  "key18": "AcurxDz2F53uRbbc5nSn2tshgDJsoWU14cmfezmLn7jjvNicZwAjnrapLRkrZ1f46rtSvYpDhnStN4eCQ3fK5ch",
  "key19": "56jnSkZR7tEJhsZN95GtKQqQVZtVBUawYWfqBLX3jWx7KcXBLHFkrkaqXGnNk89nEksZ1jW2tha1DjJ1nNbEqGBZ",
  "key20": "3tQFqcpcnfTYQPmNNyUBbxq1MSTqHSj2WyhETNbrKQwBixEKWqDDyiPuBrLjrM6HAPHitBpou8q4p6ziecop4Pua",
  "key21": "59TJuuJdswh6SSFsXCpki63X1jrK7SRPzHUXQH4qC29cgqVU3ihUYKuCW3Am1bNUshm2YhwvaPzhBbNHi9UrUpnb",
  "key22": "LFUPdghADDYbYc598MfyesE9imcaQBfQa5XFJyuZXb4HEUoV6TRiXS9oioHbwDEkzjqaNswHqc9iUCDdfaQN7wo",
  "key23": "C1X7rs3qwxhiXQRc753ZdyKkXjio1F8is7KeDfVQ4NsYX6RRNpqvjbEBdhh569pv7Z64Vp2456KeiTHZMpX91Jc",
  "key24": "3ztS3836s34ci5kMhe3jMEDLUESWTESFTKMypmArChEfdpsMsUQ37Gn3jWtNDt6eA33uBTM84RGF2QtPQad1zEmj",
  "key25": "2zyxoYM9TyVXKzkLnVLDso7pSbBkhcgCvQZku9MvTU2BPU3mMpMNtEVCDvd5Ta9hSiTQJDgfgifKEHHKaVq1YQR2",
  "key26": "cGxjXzxX2FxP6tXHpLKwxksiFHjhBwiXCZg2pZDY5A2wpwz63k2GESpv3xL3K2NSvpahUock9CAbwvVo2VTHEJ6",
  "key27": "xC9HVK4U7BMpAVHtPQhjkZdgJDZLb95xLHS7QcyjpmRsRSgwQj9j2LDWPL1AugTE3VcpcvUgc4MKqQekQDYwvwR",
  "key28": "5KdNEVrvCajk7L7HSfgzULTGmSAfNWGFwSngJ6xk25GbcbocNg2R3coCZFxFSkNb91eSnwi3H8Z6JRVcXyvZqDB",
  "key29": "3fCoUZQiTQwqgfYBHEAgxD41CHURrnSgVJVy92QEZrESR4Wu28z8Lytjj5ZiUdMfYNGSnrjvuos4ywCeSZoXdJVM",
  "key30": "4qcQJ3TatcgmmCQCx8fkfjbX1iWE89Y395JoqKHCHxJ73UHMkFWgp76bdj61XzL3Ho145LuRPv2Dg6zgaC7FuC27",
  "key31": "5QYNjGRrfDbBouG1FbTZwJLKgJa8cEm7uDjjvJZsHWAC4a9bf7PF8T6vsX5CE1P49nWmEiDUZhuDYHd7o4jZThxY",
  "key32": "G8x9AmeGGbXhPrWfboPsePtVPigwwfgNavhqKGMHExQASvhCScnJttuRGibnVcpa8TtJYFKhNtUsNMoCZ1znq6R",
  "key33": "2aATbmLTUAPwkpp681Pn4wRMBhc8tqe9XHgAHwPDC3ccgGysbegUaNwLDBHUdFUYdiPzSA7usYEyh1W2DumuKGJZ",
  "key34": "4SmMSjMVFH1G4fwqM83MkdH3zc5rkQpeC7xbuPn8PVXwfn4msueerQsC2QdaDL1UPpuQbQgQp7Zb7jZiYzvPvzPS",
  "key35": "2XoDNPnLZ8w842ct6VTwJ6ud1q6eHjgYGeNQbWjEVHHYC2gV1aEycbRwuSF8eiYNFuFKspHnPNQarX3gJdSmNU9S",
  "key36": "2Syak2YmqWfXpMDogu9ZU1E37WhQSL1aLfaReyXP7tosLuXmvyX6e3g2c2e5MReWSswSxP7zF67CmFQzpZd39TLn",
  "key37": "2j8FU8CDFNytaxDmiHtuMu1cBC8yTuLEe6LZ7N8hHFZvJaJUGuiKZWnGKAXPjGVfAvQsi8kDTcEDbSYaCVRoWDtU",
  "key38": "4tVnjTVaAXVyRNjVztD51fKaSTrQiGzv7wPQsEyWg9PsPHDqSu9L9VkaEJHeN8f8MeWuxdcC5PnzVnQCNnUbzFMP",
  "key39": "3BR1QeHYvmd45tj9TvgpgYZR5FTmqssYN3DJ6R98fRCdJgrKeskXKjsmLz4FVapLf4P1yr5VGNLQSkJiCDWJQkzW",
  "key40": "2mk6AGEkqhfVcbsx4rponywQtbgYJYka5HLSL8VFau4rDM7685vdRRAex3kAdwT7b8hSE3Qdj5LfXTbNFbAkEo8z",
  "key41": "5Na5wYcCB2GQnLMRcSspmKn7E5cYP6LhSABLTsopq7yzoF98s1pjCaj9dMYcZW3DTtsJPkUuJujigmaEpZsgtBZv",
  "key42": "36MwrUShY8WwQQ34QaKJ178F4XSBX4NFXMq8fzQNYRg36te9D8Fp85uM9AhiATJWVertbAonjSLSnQq6j1JEMmwn",
  "key43": "3pDRmdeARSViHX8SuKteaCpdDc3pcj2GVVhRpG9ikFuqPYczHbqoSHHCQgvheeNQKZEarLm7WXW3xTYrwyARzi7w",
  "key44": "2eYD3oNAoZzBALmK1w1xfZTFcs1DYNtv6Qs4tCaSBSZVvbzVFCJW3sKyTDb8yqVWr7yZCvckdXEj9df9EsFjWqWP",
  "key45": "4NhjPbPbLr6pPtRwb18EymgTHRMfDjBngzmxXZAewjgaLSUNLwzr3557dc6YF1RDkjQZ91Bjkbtitjv1BrC1C1fb",
  "key46": "4yeaNK62VTJF5C8fbWWxGUtpFC7CGiDTsjKyF6NAStwVK6JaxkwLJcKbZmdcfgf1Efy1Rwrbojx8bepmVXJRt3sm",
  "key47": "2cScjV58fKPyZN8bftUcHZDf8GAvd6zMyzyLQpZqkrDAnabmZCZ9gn7To8nzZtrkMZYsZDejkahS2tcskoXi2aRc"
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
