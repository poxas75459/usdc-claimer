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
    "Gf9WjbHYmexVRmCqejX3iWYCnDMcCw4pQiXXHPcr13KxQLQi5djS22UU8aYuaEVj1cAxLQoNcoyjoJnQx35EF5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sgCq7ts9AQYr3EXVuvSJWWNiyURZZBe3iVQpK1ss7VdurocosDfKze65ArrxmjzUj2fUPgYCr9jgW1uZZNRTZoC",
  "key1": "2BKtQ8GBCwdwp2k8rxsq67bAkH6HKXLVgvV4eSvxN5rACTxJJx98pdTw5QpckM454bQLrmz8jdYeTZwLnVoGBxTn",
  "key2": "5b3Zmzqhg5r2VMuKMLE8BZRcng9qdZzjAytXSCZ9MwG3M6YfXD6NzSxmg9xxUBAkPX7rwerAUgCd7XBtz3NcWjFy",
  "key3": "4cK7tQXyMj79mgRAN6bEgeHi8ARvF77xogsa7ET2Yi3K5Dyr8HupPe47PxsTgooYeuLEKyeeECakq8ryd6JDHv2r",
  "key4": "5KsCgEZjEXHVHmxK4nTbat7kXroaMme9uwKTZ7d91Dgb3vB1uNEj8fzErofg5mZuNxWL5CJJwnq9ETryT5T6qTM",
  "key5": "5p7B8wXxS37AMxgqqmCZUVcrxRqc7ezEDfn1M6Kb4P1AigXWPoX3RdhSnNAppnpiij9Y7b5MBnuyURmtPbt8zjzi",
  "key6": "2gYSvX5shpeHhMGb34QtvdPrpiv4wdiE79CQEiaYF87CgWaCLSTnNVjfLskjXWGbd7e7bb27YwLcKT4QpDXEM2WW",
  "key7": "2ZNsHw4vpKNnSC8sUXRLTiz7Z8UP1CEJx2GZeKyCwn1RtprvfgFySczoHcDP7YWjtZW3hhcvp6r3JCh1RyNj4Myb",
  "key8": "to9X5T5Kt2n4HXUsqHTAh7Y9cVyYhi6yaRTxsLhJJyXLMd3Esz9fP3qqT8yyync16iGvwVsyKBVAAp1jNK85TtN",
  "key9": "JwjdVgNGfKnHgT2eJ7KyMGiPGr2JjcSf161ZyqQMREijNde7BA3guduRD635dqLn4PuMKHPzUyi8RfoHi9Exgxw",
  "key10": "4oZLcoRmEvEULqjgPNdAwtDhjKzCfhpouptawwyjPccmhnMaZM3DPa3Tq7jHXnA2FukdRUM32AY6DRFyACgebjEh",
  "key11": "5z1nWtHo336YJSSc1W8PXLj4gAcVp11ZVe488F4BJpp3tFthaeLu6rTB7qrYStwqy6WsKCmh552t2o3SD7m6Tsas",
  "key12": "433nSs1Y9aXR69vVhYYLyHW1McHCx8uGbAUFGheM5cL95Au2ymTxzqHL87NaE4Vyjk5A5xDUDf2QCk22mSDczkg4",
  "key13": "2y1Zs2ME8AcjREiVmcri16UB2DhWeQ9P9GEsSiQymtB6PkevEw5THvexP22zBbD2yiAAhmvAwbjq9JD53KDP5rDr",
  "key14": "3chj3VjNPNf7VxQnKwHdkkQzJEyhkFtKw3fgchJV5WSoV66FLzQBb2KXiTfxZT6gHjye9UbwBwa5Mej8qw3EYxj2",
  "key15": "izcHoACKkqsFHq2YntoeVFCswxsDdQyXkftgdM35LWYSZLp16FVvGyzkv3Je3xymRBVf3E9Bi63MQkLw5Af2LYV",
  "key16": "EUzaUNWhiCQe2WwkcXTk6cDk2Qg5AyS7sCnbca9BPSHw5ec1vgtkMsfS1bovracw54JTUtfs5QMkKxwVmF585Ps",
  "key17": "3Jj6W5KxtFk2DA4h8cb2dbcKAwDdP7Bu3McrhWa7goPEcw7URnjcEpKFMMwj29fmPsGjqGxu9UyFc1HkZzCNUANF",
  "key18": "44fNm7KoKjagRzswNZ377PxiJJ5HnMHpGDxFhd5qJqEWBEmfPcKMy3bWtgjWo5A4eQFKD3vNaeAKvyRW1oAgF6jJ",
  "key19": "5aTozbrUdusW7MEFdygqxW5PXeGU6wd3D7RxkPXWNscqhPQkvhJ8ngUs2yrgkmgmTr5qPWZSYDD4Rd7owEf48prv",
  "key20": "hkaM6zBsnmbLjjT1hKPxHJrB6XSuVfxotco4iV5M4gxwYSP2MqJBqyDfgW8w5tA6JAAAzfCVjfRLFpyxacHB7Za",
  "key21": "3RDntiuFkqe2u7VU2QHAkyT7s6HAG5EAZ9wvKqd7tkj286oK4NxRstJmwtLDedsWPBpp3DwB7zAf4dQchFXBdsfQ",
  "key22": "pacLN4uNPV6gxozmv2aBwyAsuEt75uptwpo1R6hirfg1ihJttYHfWpd8KBBSQY5NmbiEab2Tb2jJu8dmwLg5u9j",
  "key23": "4Uy6LT7pB7RrKtjzQoysBxG9Zg3Vwm8cjz1fhqUhESvaEeRiPTyp263Fy6tmbj3qNme5wmSE4JWJ4pGKNCbaA1Ag",
  "key24": "1SAbxfdq6KbhcA8dZgB7QSsfkR64sXwLxksrAnqMvCspGUbNXvvFrf2xpHsUzirMmWTQ3Gyiu2NBdMrBFMGBfyA",
  "key25": "3afKBDeiycomP9xm49kbd7V7hvew4CLQhiC3qLXVNSShYKgmevbhTd3kYo2jFyRLiwRjroxvXe7ewXgixv1dGTTb",
  "key26": "4ZziQRwqR7m9RXD19SHkvb9r5VAzVUmSBhGbuDbLWjdkJVkWVgWAauReQeLmyV1k7eqHqR4er61B2HPGjEJ7hJ6y",
  "key27": "4h8QNjd1tKQSRPaQH55sQc1UErocVw6vfj47TbqtqA33cpKmQNBnx4zoP2faGeraHzs3buktYUJkBsbgCCHyji3m",
  "key28": "3dtcxovSLo5s612wKXMR6NjepHzbFtR5tv3cGgpdf9SpUqUe2HpTmGPNM8jMkyqJ6ndp2CDa9fSau9CiGSB8Lwwm",
  "key29": "4Gza6zzkDNg1hHbLC3gV316AQ9pRtbqLqvEXpEjiq3Tw9SxitL9nJyjJZVmjQWF9WqyUVBSk5KrBhjKxCNb7fNx4",
  "key30": "5QCFMtboeRXRSTpqFemURXgnC1LMMkYH9A2S3E5uB2GC5ktxn7TSbdEm5ALHGZmRRohqdgGDC9xqQpQN876MHxCn",
  "key31": "qGLpHjfTE3SfSMrMUpLLTtnfPdQmxECqWpF62YJG5a8V7RYJFxYJrcwKf7UUT6pFEqT5RhvsEjFyCdsdtNxeJM4",
  "key32": "gDUiugQmRJgP7PcCrAkpBzSMxAJjpkUVPSKJmakn43aao8KiVreU4VZaBTcgimt7SxVLiUdYssN7B3RFsC5hr8D",
  "key33": "2JzKSjmUxWLouMguatsDDG69ikgNMVcEo4shMPT7uF9Y8wbP7P1cLfsBhjgy9YxbH5KQDHe4MctejZ46No7Pcxtf",
  "key34": "gd6xyYWEGjvxEasNDmbJ7uVKAqnE8RW3tS7RwPDA39seU1FUBmpQyyAja5w6A4BtcaiVbQwFFkriBESodCjiWyk",
  "key35": "4vg6ZiTSvT6U6mDbSfv7iF1DGgj7wS6W27HLXg2ULTvgmNHn6WPtNxC5yPP5tfyiSqKgQzut9FrLVkvKPec8z3Ve",
  "key36": "RQp532VaQ4CsWuUac2SYKFodKfw9o8RiEgnCc1w25cJsETsvRraW5TNFWgypx6v9moVKpoAAVdFdyVL6XDya2Mx"
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
