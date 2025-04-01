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
    "6471y5XkYtP5CLKJH2jwjSU6mSDtXTeo1vF5aGr1tVv8fRgmpn2YncniefJ6NsDAUZS7bCW1YPx9MWcnKfm9Co13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61EGgF8J9A1ggjPoiVahhSnGsdEXFNXDfAXu1mkh49F7tcGdohGiVd8bfB2yDgBvdxubz2GxVWqCJM12QzpgkorZ",
  "key1": "5Mpy2LwuB9f2VuqHoezrw3pkNqzrmwpaWV236FrpoUpZcC9D3LiX9PBKtYJPmphXSzqugaci6dRTZoQ6prZtP5z8",
  "key2": "3MYwWqwNxJzRRxPHbszZQyUe1ksTYcdWiXkHvNNoBoczeUqoSo9R7RSeceAfpnJm1JcboXr81y9WzRUEaRYagHmQ",
  "key3": "MdxWEUt2tfu1XBvovnKbf1AuM2VwVUGUUPMmdsPWR1fXP6z99Z2avKEVbg2s4zBmdBTauTkz6enmKBqwdMiC7Qv",
  "key4": "4zks3EcLqwHyquzPwWrQsxDAw9NmhaYoKSjotLUokbYadj1gYBP1Bn9RG6A9ukWBiuh54zHhEHD7hCnLaDGNVUPz",
  "key5": "5TSMDUxotPkEVGJR2ZmXsCsJYyboQsdmtsoQjBUoYdjwAyw1zHGzCTutwcxZ9zEw1Xag7RQ6MqE8GyEzmKZ81a4E",
  "key6": "4f7yJ8ywGjeNjWXVNsuGejkKcZky5vqVseskrpR2JaUTBeY54jhdWdUzcNyUyUgQcm6eKr7cJePGpCWiskABHt5Y",
  "key7": "35GsKpohFZYYmeMNZs2bC1oGZ5z1hujR3V9MjvrwtGFrBZoZ3jGmKquotsFZwsDK1RrAfoMv9bjD49sQVQnNwLKU",
  "key8": "3rZ8jhWCffteTjqAnAYRAXNs2Hz529TMhTdD3jLW9Zra3qKYgZuKE3C6k28HcQY62eM9kM5KZdrNR75Jdkq7mb3n",
  "key9": "2CaYBChE38cXwsMNtXoTw1rDoezyWUm42TkYzd4DuRmwW6dWkqSNdsKUBe6VtkbHAETdRfSPypwSYUTNBuYZZgAD",
  "key10": "2Dy8UjBaF2T93z1EM7DZvdEihqkYx8evUqsAW8DAMuDiLiTS5asCgAJYYi47MYPVWcJ3w1aWnQ2VmvPKTBsnLgUn",
  "key11": "vQx4g853Jkm6pTvNaoA8VWuE7DB2enCj6yDL2uHMhEkVXNdJuE3LTQBKxZE2MXD93PaxFdaiRLMJ68au8zcJ9pC",
  "key12": "3iyRzEK7gedLFfha1PEWVSMMbUWfKNS4bYQf3JbHrNrrUeroWWn3AxYD6knExcRxjMLhQDKFr5yokbZwMpLjDo53",
  "key13": "56Aex4K4V2wNp94r9M1ijtjKgwqYHGT9VDNj6tsY96K2JD6gELAn6havXefNzZkqvuMD7cRoCZx5shnMWBv4Hkuj",
  "key14": "4HEubFovPJR1JbLJX2PVaPoXmxs9ZVrTTFpqZJsPjchcFH9HgSpSEwobbVEgQeTSJfF6TUPuRSKdEB2GmqfdR1iz",
  "key15": "4uG9Zry3aeAdBsdP7wWspxSksCFJ75uSHUWr78cYN4KgsDXUYmLKTkNtA3ZgsvkJivE7mFU5vJdZtviuAwPuLJ47",
  "key16": "5JMAR7rUmdiPYsTbGcxTopNGxUAGfahfN6Zc1fxWPjeYK32gN1gPyYQRw7pZGu8bG86Vrzkwk6bSC2JMpBb6iFyP",
  "key17": "3zQyYSWSKZbnnrY4PTnkZzMj9V5vXHsJYqdRdBhyA7kA4JSLsj2xn4mZVXYDjxeATK2NizdNfZNnkUV1wPjKDiKg",
  "key18": "4cFuiTR53rges6TRwT1smJLsPUjyahUgE2ZpreGLrEqNPJTMgVdmH1GVfbYkkZz3LuKyCFL1VpA5ErWhk41JQexr",
  "key19": "5TiRbnPRXNhe2e8tKmn8ggybVZ7DmkdU6ugsdxxPeFGP9DMU4nTZXnz5Am1Ur9K7yygMgNw3yyHueGTUxujYeGTX",
  "key20": "3pRq3Kz4FyvT32566Gt7H7wQj3ZsxLXa51boNVrWBdyysdPF7DKxsmc3K5MzeVqRgsZ22Hd7ScZXTxKLpMzEFSf5",
  "key21": "cXGFMJHeyuqnaBE29BMwAEEkBviLTzuotUxnDeb9WNBqrahuRw24cZLNtAn5iSQDrCdWrZ2gmUAXuyaoHzFeJoc",
  "key22": "49cpvWPW54iaJ8jvgRcaFKU34vQKoZDttFVaG1nZav4LrTq5UQonoU3pxG16AZ5uPAfT7T3xybBUfftpB2dAHUKK",
  "key23": "5HCo78LtEBf5yaUZhAjyappGt42GdtvSNan1NrVEUMohXWcy8zkpW5XWqJePhx3AcZGd4i6EVrDoVR8wT7EQu3uk",
  "key24": "4rvm9GkDg5SvwnvofoqS1L6YMv14arSaVchuyCTkjYzZw3bejYvZVDf9LmxFW4zgHnz5fDoJMzhTszh7osm23mDc",
  "key25": "2kiNyAffyo6rLioPzwEMtv5dYXtoVDcraHs2Ym34Br9B6D8NmPzPeenPGzVNGwkWawFfwgq94MbpwhpKEWWPZ9AJ",
  "key26": "3gr2DD7dXJ5wsoAmt7F6i9cnGmWFfFj1shyjSMjB5d6wZj7YgXXD6t8cSFB5o7vJzf3rPXv6i7WWx2yDFqhph2Ls",
  "key27": "4HtYCMtbLkR7LUP2LFr4RD5GLLoydmnryik5KewUtuHWPUcrzPwfZW4bC2yaRBKfRpCcMycyDa3fBPPvdC2mZ36G",
  "key28": "4ahnRMsuaD2BJ7wAEvPhxtKfudF5iX55k4iGdQTgyDZsDw5WTgmrCRS6MqoMoUuFT1yz4dCw3z6FWH1qxCWP8xZJ",
  "key29": "5SuWiaKQXNSQXTnaWxgZVqTz2JDt6ABd9jPMTYMsqCU9VsvmEEu9gTwayTYWmDPWbXokCN2prwma6cTjYk6mNSZa",
  "key30": "3kKbHBvtEz2TBk4Cp69aMFSkWnLRRj3hmgLJaW8HbMExgqp6qVWQqb5rx46eQTBWP7qSErm6kz1NAmJ1MY4QKGea",
  "key31": "58Eo3w2hvPpPxnRyhAzLGbShBx8bA4xzGP2SrW8R49ah522PN8aPWSNZHmVQzeaThspSuaZJ7MyUeuqoGNZUNKEv",
  "key32": "5XjJf4CSzLi3HM8FewL91gWWVzDAdEJSuBE2RLeV3HNTZMx16edNy3nWQcNNQPig54CfzaQAHKErPX2iajNJo5W5",
  "key33": "664h933ZWEs3cH4LruGwvJX1mSwS27MCnWoc7xDNLv9rSp32oDrPxnrWHnBuiUF6PBK5JuSM3Gy5q6DM91Z8sy2v"
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
