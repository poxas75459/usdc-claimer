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
    "55FFWMSuCorberMYsjPGnp1x7WZ36L7Tezgq22xvgt2yggjAFcFs6byBxELtvuqLKqwXuP9RFwL9CBQT8HcPUty3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tu6XgLDtXJNWzeraGsGkFhZ5U1dmujbJL82pdEodVtF6CikpLnvyWw2Uod3kG5GQhB7DotJ1asGgM98VdT3QY1z",
  "key1": "5RuhAjj4yqXyMgtk19E5M1HsPxmNzhdBybXFLNAeBhbj7WPTBTxvdRsc9nWTKP8x3fisFnCW8wLbFBa3WS78zfq1",
  "key2": "4JU6S3ivnrEtBk3aa8S4fooTdB3hNE8Wen6PiUDFiuZF3PbvLbPw7yBLzpnzfWQo35oHF1puX2dpq1Kuj3cFQ8R2",
  "key3": "3Qdzi6Qu2EgemjLaXcLUcNgq2yDGW4WeGbLdGVLS5Jpeq8iP2vMaStwTTBbfR9bXDHzy8sLphx7nXgqN2o7CnwsG",
  "key4": "38gnsKURTUYHck2W7k1cr9J4VtdwjEu18ZzGYi9Bc5d4ANTkxKe3yxHCBAEsP5ZXGBYpvsdxZtk1RZBNwubXEor3",
  "key5": "UGd5TsMNCVTSFxkK1ifYYT129UpuK1MJcVXEJkUr64A2nfP3g4iSPKhAvDDetxdQutbwUsSuW8Gc8GLaPn3Yqyv",
  "key6": "4UvhJtBM6aAGW3g7SJ7BtU87xuTyiVRFJxsWCYgKHQfDt6v7ongdoxA74LYdMmLWPofs3ZyPySR9asvahfX4Mcp1",
  "key7": "2yCaWEjLu4x8oNDMppSPXLghU2MXGtGQNVSaFbXYrxLEPrfaStYxPtxxaXhNRfy7RMQ65GtCXWE6dv6WTWnAr1na",
  "key8": "5tzjrDAdogA55yuPepDcmTUy9ft6w6sTMZ8dJujvSGzNpm9bpEkbc5dkyQUz5SPsLgiMa7HJDybwztftTpQaBPpf",
  "key9": "4dbup6gScbVDdpxFVQtyX62HLJnfaXpzgMJjCFbWW7m6jbVViUkrNWhd539FxWFiRQvoREWgnsRgwRyrGMtbiVxP",
  "key10": "vAxkCQ1G1uaxxfBAtP93Nhz8NLaJ5LhyPqVSVNxKmsHe5rqFzhRtjbpT3FK1RZ2UUx2joLYcLJPjdJML6XdtvsR",
  "key11": "2LfqRhHa2qrHvkNknaXMqEw4vVtR2t3LwBSFqTnt24Pe9NLEo5aR1AXRHWKNw7kDAEZdo1sA2RiqQyNVG3FiAFBn",
  "key12": "52UoDWsrw3854NQccfvt1yf7j7gvBoSREEVUsriPsZgWaVDmGMMu3eH8HY7mzNRqEdaeuje2MxhDKYAK2mjF8cZD",
  "key13": "2AK8SzQpcGikEfaiiX88LDz312bSiiXhcNmuF3UJ8zbFwdJ2jQANk27jWp588EeZc2wCTByHG61VedwhvuKTQZsK",
  "key14": "2J37hzyFFgwGEstiRoDhsWBx9RPWK12sVB4PRyc6BBuCtcgjQrG66etUypF6FukAtSYFdyd7QTmfkaGJ9VwTzaZG",
  "key15": "3t7zVCtLgcVTXwgjbohDqAViMQnSPz9dEG94YiDaoffeVj6Yd6ccW2ZwtW42Sdaj3TDUhLSRNgsDQPgPYe4YQhMU",
  "key16": "66M1rd96cQeppEibZnaPyH38sa3gBQsA1di3oUbczBUfFbE7LCT7Cm7Q5Zm6dGH1VA62vawdiX5gkKMgunrHXZgp",
  "key17": "2zghhNT1dCv6nkhzXHSiB5majMsafrPDtY8wistZgsFADQKSFGqmwLStNUuNgUwLFUEZNdXbySqD5kyQ57srtdfB",
  "key18": "4DxC83R5YhBGm812qjGKmbG5t4XfKmnNyn6ThMXfdLGAxtPMHJ3mRiAG174GEcjvXpquutu5A3iAsCcUAs7PcK8Z",
  "key19": "5e4oVdXPHpmWNmsNdijzMXdq2sAqwoUqBE4iZHC6s31sYM2Qdasj4AfDN76m3EH4fzNdBYnnTGrXCW4QaohXNE4w",
  "key20": "4mSTZG3UAx5GJwwFf6ZZjZg6ZUL1mBg27QSdRZd9kFHX8W7TyUDb3C7ssymCNBPxe75Vidtz12VtzGRPSJJyeByR",
  "key21": "5HJz8ypJW6c1byGfLGqeWcBKYHWSm1K4GzVK7LzHGCFo2Bk98LpbsywWD6Cjtmia28rwTZcHss8GPv8XAWVuQf6W",
  "key22": "56qMtFTymNDPgXhyGejKq2sMNDzTBcsbmLov2vKGAkR6fDYHKeP7LDUKzWYRqSx4kyFzH4EvKwLLJ1CTUsDX6Tdi",
  "key23": "5itmP6cr6qcMb6GLhd4xn6ymnaPucPjgfN1g4FWA82zgnjpEYTr5XQB3tv97sQ1A8ALF2cc5BiRQZB4gZZSFjBt2",
  "key24": "3i9WABVnhVDr78dbzrrimRq9fx2KYSYDvacAfB2H4KyYvhR6QJQS8AaBKhDrX8yUSoxd7T6jqDcrpMH6fxMYHqLA",
  "key25": "SjseBsfReHtc7yAp9SMFWLkVDGS4ceQRREknCJ2vAGpCUQCUH6ADR7siGq2b5QVy2xMZuFqkSJkGSA8gZ9fHPom",
  "key26": "52Lu7jVnRumKYitHzgBAne6mF1twmQ2JYCr8DSJeL9YvbJfbSXhJU4wXAHGfHaAuAAeJKsE4xfDgQG7dXHSxVk3H",
  "key27": "2WndMkesdKHGpdywFtkPDJaj2TPLrX3M5XKVxroYUMPGHX6xH6PNKQAWi4uTmxY3N65UKnMn639tjVN6r6xp6wVb",
  "key28": "2KYLrqtupasUMg2KVkmigBsP9BTWxQPc4qwLvVM4b2N3hR3ZtbffTphBVkAwvYSy5ogEHzVi9HyKg3MkjTKCDPyk",
  "key29": "3jy8Wd5ebWC38rsrtke4Ny3sdS1Rd2U71r1GPQmx6H8i7d1ZKSa2TtNXHEuDVgPv3MdzDhkTpthWHdwcqHmNbUVg",
  "key30": "3kQ1NcEpyUNPUMwCqFerehMSJfZS9BwRovZKrhQKFEXWchQ12tBA58XPmqB4oCrZtD61BNfK21PzAMJvkYUhf8G",
  "key31": "2CTeASGFKjokedrLeDxsv4QqPyfyt2DXcU33uabTcf4uFJohdPWihofEecem5W3ePRA4mnrTYpTuGYrP7GkP7C4n"
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
