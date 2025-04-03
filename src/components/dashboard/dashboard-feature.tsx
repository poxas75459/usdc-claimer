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
    "3UQvCZ4hbkXhdAjgshdZ29M2LrAa1L6mHwm9GMTNPQadp53gn5P3Un5qWz9yG3cWcRzUSD1fwHqzk5Qz2qdSWqvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RGDQzxLohaEQy8YWujyt1XRFYn2cMq257MCidx77HWuGrbhEKee9Qqs7E5PdmjDLgG2MGQdChgksEpYcVuS3LEh",
  "key1": "Mjj3vK9nHJbXYhU3KfcY7DmcLypokDnEmBonW8ddhBJAMPuyo29Ld9W84Zp5ftUFziB6iYvgiRZ6nHYNp2ZCNB4",
  "key2": "62ZoWJEdhpsS17jGh9Xw1JChJzYxqYB7hsJu98cEEw6UgvXyAJQbkfP4e7MGyV8iAo5BjjMuieiB5YKYfgkV8eWp",
  "key3": "4BANw8ewp8DwZgg9tDNGhWY6t8vE4Lq8X7wNUkdcWhtVZAg8Th5zUErMNztDoEu2JvgQAjVzaWJ5jPgPMWrvnFM6",
  "key4": "2ojXSA4r28Yyj31MW6oCDoA1gvwBesHboUUfXmRmMadyNEXFaNuAcx8JRx8dXxZQkrALnExgD1fNWy5Mrh5FGBU5",
  "key5": "5AtouLEBMoNWhKRGzc3jCRFzjAHGS5r73mjyfchWXFSdtWhCf2r3Kvbg6FrjxeSYY5VEwADWnhU2XABEJdUmzWFB",
  "key6": "2WpHBcRTtjEpZw5i9d3JwpPp73ajiGk6LHdDukBDTx3TozTeCXRAc3XzocTcRQGnkpN3P3esnMYtszTzPDZ7Cez1",
  "key7": "snv8zxFAjLMEb5sbuy2WGDwNWH49Z117fZPpfP3NcfGYrnvQUmwV9SAKj6BGhGRiGNTmsRN7zPTyedDbSu5TUSp",
  "key8": "4s6XUGFPo1cf13C897Ww5vFXHcA7rjvh5C1i99yCkz7ZdTJHdFpT5DpYBxzkAkyaJkFZ8DhrnydPWYRK9WTCmESe",
  "key9": "4fpVVoxsPAdLqePTCiiLxhACAAeL7d4mW7YeD9bc5eTEK7aVuDSEXeWHdW8QuNL8kb9aYrPYoY2jUUot6s7uSSti",
  "key10": "4iwqZHQLGXzcwkkYqPgW3fzsPDcXz43s4yvLGwsiRXmVTP3nBLuNrbFvBSyfYpNx8EiQgG973jxM99bYq3XKvoeU",
  "key11": "6ocATiVATVYWRHvZoNHBv6vVsE2RGrHWSVMUDP6JNyes7mRtCzsHCVg7HMZvx22MWdUH3uwtQz12BvGKFEgB1ji",
  "key12": "2tzhsdMiiHiNmhAKvhsAS4JpyGaT5acnQtNH9AnVygKsuL6tPRvptxaaxN5zdaTiQCHNPKBdsiy8j5dtoSejpA9E",
  "key13": "fFff52R7wLUDfYPCiSrouvRJ3x3Pj8TxWF71UDVAEP2ga4hdoTRDhqEmuLfqdsGZNHbVRWgB18SQEgPck5qh2pX",
  "key14": "4pZH46xpoiBniJfsytKzdsejbZbisRCrCAo4xeNQpfm3qwaKSVxgJAmXgKunGN4DU6LuHECQW2S6ADr278e5gp6v",
  "key15": "3rbFaV7UuTNEmfZJESyprK1E8GbQSi1Ste2Ukf4DGjfN7mRJaSWEAgCrXmaGuJinUzK3WvukLoCMxRvMLytoBHGf",
  "key16": "4mbXwG7RYg5xXgmLi3jSyELRPQtEN4vxVZDJrGBzPDcBy3yHRS18Jp2AC3R3mXtto1uN5ykcF66NpdurcUasdDEt",
  "key17": "udZkX9kruEyYLZmfaGx6425GJDMrrrmGo1JE287JmD7HgtTU3Qk3XDV5hpFgG5Hkw1bZ2Z9B2T5kEi4eH4YBvS7",
  "key18": "4m2GB6TdT8dhapFkFRiURQsJcHWkWkeG88eKEVhYsswXUrATcphTZD6HnwdB33btYjqARSHq5vdH1i9My7Cfwzmg",
  "key19": "TxtwmeFLboHPVyVdkmi7xwUMiAAEt1MwuD1fyRy5uYCDijbgSLy9AMk9rhSVtiBBKT68uaiXZk836tAFjZZMgAw",
  "key20": "4725CnLucpYXsNfLxPrus7FBrqKUFGDUEERn2jbpnGaxnAyD5DpSLPYA75bFXfzCCPsP65qi4nx1qq55RUUKrQQU",
  "key21": "2Zbgx3jzjcVnCAW2AwTsWUVh1TPujzeM259WmibwT2cYP7xq55Hzkg9BU7uYSaDQAHLsV4X1ey57bQ31SGUpMax4",
  "key22": "4TXzADrwLaVPUY2ndSy5TJMGoAoVNsXATctBcPoESRD23diYBb2uAxzyZZQvVjeBQSgLm2PwPQB8CDxf77hVdFN5",
  "key23": "2BJcgK3jaLaouwcdmF2LzNA545YutmbmVJn5BC53qDnwpoaunTUrMnTmW4eiPrGw9r9RkL6CxCXsKjQax51T2UpJ",
  "key24": "2eUz7qWusaP7GkH8K86hLhcoaQ8u9ZyqPQGSvwFrEx1PDuqLABpJAw1YrZti5apZdpJXir1hfotRQjd5bHTdizF8"
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
