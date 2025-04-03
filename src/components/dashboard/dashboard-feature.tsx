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
    "5GEaeBiQPJTdPu78NxX1VFEYNR7czcoF1iAs4QS7UP6uG5krUbEfcirwV7yJavqMk6jG4e6enYmxje9enab7WANB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46qAxFa8FPUheP8gJEXRmEJfqfRbXFYHN7k47JpKnXgGerwY46VHBJ8wZRjgc3wG2k5VtVMxRU6fMBwBDMpH9PrP",
  "key1": "3ACi3AhusDB4bkE8mK5bXZaPpF4T3doDMeNfDcBTYciLkCQvtKwEAU3Qji2bAEPBHeUFn4gdmiNch9cDJ4MP11CA",
  "key2": "gqqqeY8Q5wPVUaB9TpEotEcMYCAG8huTcYpWvr2JrjQfMeYftNRusexn2FyupxFSfQNhBmkHJbogDv8gRQaGwKV",
  "key3": "4RXuAk7sEL6YbqoDezu6VkceicDhT4uV5S6guAjopJ6TspkC1QnjLYmBqvQj1B8QwLzvdYTbGk6bPoKYcRJLqrMY",
  "key4": "25diKaHgnsaZfpg1zys5wjoexk6modZYFjx1WfVNkyqR1owDSpE7xKfZoCM5Q2iyJHMgUYXrvS2xBRmUX9CwUYhG",
  "key5": "3qaesGtEi5KgrdC3f4dTaviTd3T6JK65T4sDFmuQbgusFdXRJemd78hbHKu3skHHuMt6tVYqdRAF6UsdGoLEt8Hu",
  "key6": "dA6ExvQP233NmASQuikm4xobaEQRvcmtgC71GWtC44UmmWCexZDGYePphe1hLx4wvSqBHGdwLk9NZcjabCX7eHQ",
  "key7": "5WZ4tLan7GV87Fd47J6MuWpDV2rAFq8f5WZGLjiqsMvtnodH9V31RkMfKpXexaT1KC4Q6MF8eGvRKkRJWmFinh9S",
  "key8": "bUbBdLuf4njVWZQLS6j3K1ogET4ZsqTnsV7TPzmcWLPMoMhkLD7pNG1ah8wjPLWwMEKmfEnk17e7q9aaejEtQrq",
  "key9": "eRCPo5yUWkht19ewLBEVKou3cp5VXXgaQ1i5gBjP3eiFw1JN4nvEDZwpkcS9TY5x6FeCobPzRT6PAMKMdaTPwJN",
  "key10": "2A9KRe1ZbZQUtEGDGxUhUummZSnEMdYShJGLJyWLuwoYWKxyeLx5Pg8P1Dxi1igcpSao9vhgEyh2ksgqyuwpmrdh",
  "key11": "4T8LWigThuSa9TmKR2pDTMBpd5JUUG7CqzcK3Ppaiuu4pcYujgNP3AnSDu4xpFxyAtgRWGU48wBY7ApEpn1MZ7r9",
  "key12": "QUVSMFGa6WZu5o73NpZ1bJTXGG1XTNGF679wrKrLj616HZknoVsBiYNXktah3Qb4GJ4sq94ekiaJNVBrvSbRQMx",
  "key13": "5fy7dqYVXqeXUHeibRuNf9YRxdZHYmUy6hwaBAoW3YvwjTHQp3YGiF18gWT3sjJuBRNBJ7VpteTgoZQk6AyyCW8s",
  "key14": "5Vm5vWjTfXmPmPfzUcRZVo5rDmkJYZR2PMnLNFv39m4zD52Us1NMSp1ehTxtLFjnAhu8MNxgNjn5dUusaZr2JHPv",
  "key15": "5RxvXQ1Fox9mQm6h1svaiNDnspyGDdNDs6dahdYZom7y6ZsFKQw68GkyscrzcpbpLEo26XGFvFN7M5ys5u2C7g2e",
  "key16": "4aLofHXLqdPKVX19V51dFqBgkfbkrmBsxRMr3CDSb9azUfW5fktZ2M7EPsAfhoAGU9HxxPUZPQ5tx4jxeNhFFAYE",
  "key17": "3hedJNmqvzrxghbxvUa2SdCGSxVGaeysrcPZ9aau3xSwS7qun13tAN3FUxWvhu9MaKKFUjXqhRKMEUCz8dDb1Hyn",
  "key18": "3UPj39M5KnexhFB3nnSDRijGPQhhAV821VHtADqSKQbe5aXvRmgoQwRmnUyh4awMjYSCZGyZjsxetyVW37bjb6cX",
  "key19": "5F3A1PReWQLmbp16sBB989FBSsUmvsuZ6hwizF7JpztnDupeRsjUAiAbdKGxEa31WWJUQgJS7WpFczNQ5nbyuLEP",
  "key20": "5LYk3GtXRGAg8dNh9oyVQa6pwXWWc6vEn5EynKPyd1bqiQMMCt24h5MXFZ8gACh13SacQb2Y1iMce37Rg7p3abTY",
  "key21": "5xLk1BrZEwmfMbqV3fx8vVGeTmhniryeuGRQoTsd2mbCVDWrWxec6mJFX23vDExAVPX7oPaKnF8L74fUorYfqwx4",
  "key22": "czPDmFZW3Twsk7EpzNpkgPZ4aZBEK79yg6DbyHNtQCaRWSUFWUBqsUkdngYdWvvWBmmiSnyDwksveBJd2hTYGuC",
  "key23": "bdRgMcF3xxrJ7TbdaFsvNaTkEH4N9mXv8DoSbGCACUu2CRrcosRwurWge1GRettkpaTGzRFCpMR1xWJknrzwTbZ",
  "key24": "3qsx7bqPPWgvdoEo8jZvoR6HdQT7zf8rcDtdgr3L8rX92o44fiiHjPxgHbwD2v7QWB2vvVHkhb5Wjk3VvSavumAv",
  "key25": "EXVKBGmCP3nEhKAyVyzDFwFxiWAhUEjn61JxAfjiNwexvY1Y5GrVgt24RCdkm2offiR5sHnNaSgBCWGUrtPL4fb",
  "key26": "3RhpMGNrGYxmWS1kHTMVt7aeoDRtSmtGiZ4PfXVujE7PHzrKknBcAzYgQEVpXrLmtSc2VPtnYF7zNh7RKfhbcWKz",
  "key27": "52CH8Tzd3rHbTp8wxR9qC8kZ6P4hEpCANNu66rKGZdb4xMSkQWsZmST5JbDtr572TeDBZDjtWMvyjJYYvzR9HKgF",
  "key28": "5LZNBHf5HL7jkiwt7r3rTWhH2zjKinvCAwar7DRbrJfj1T4FQ8Z6xrSmuG6p1G3amexaxePpvsD5SNKyQF7XBUjM",
  "key29": "4f8R7yrd3vY1z8hMm4WPaXZDkDeSvah4uN7UV8ftwEeYDZj3wy4VcXXicBbJ4wXVodPXtqQTBHeKeNY5o9WUaMYM",
  "key30": "2JrUaFanTaELUNqeX3QgzAH6dm7SbD7ntq8M5RDG9xji8QFKX4nrG69E82WCJTWoVWqDFq46Q6oRRajqA61KHftL",
  "key31": "3dBXWkuaWtBGVMPZ19H64YnTXeNuYG6ZygwPtDQNAacy7KhnHWRY5ai1vfnG3wH5eNW6vA3zma1c9MaYkabQxAwz",
  "key32": "5ZQcDa66oUkxfndq3VCm7uGrtBUZZQqRZqWvvmKbjKZ7kPBUrYKRLD99ksrdTgkfgXXxCjquMTxvkCtTvbEuhGkN",
  "key33": "5xLw5dHEXSZmdMeHiLGLDvJmUdjfdKrA5jtDHjB4ReYfKBSwC7sK3h32WAfgcyqRxSCSAa1UdWwnH6rpH67SXRvo",
  "key34": "5jN25bhoZLjUkJHTYF2NW2UpbCK1NK7oVmCp6qjLECBSrQMoezeUVc7AihCHC81un8mRJQQUb4i4f8UarcoSxAsh",
  "key35": "3CpNdDptzVNoaaEJFeT5C29r43sZ5Q51FW6xD9jsCbgmfmF71XxwYvhGo2uXLSrLTZ8Vu5BCeyo4YPgaNfki2pEY"
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
