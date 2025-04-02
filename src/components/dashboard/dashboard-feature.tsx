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
    "4ADM4oRJLisaiA7CKA3zF7cFQZyuy9EmuhTYva4xneKrfccxV6nHGMsnFgmkdYNu45gFF8DA9ecsCTeNFMUusQHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sZkwgKGfQWb3tvW52RsdDd7DNPsNHHG2qp6qZq39qknAcWPdwCLZm5kawuC7EwLtBs3dk89n4StarR1cVA37zEi",
  "key1": "2A782bYM2vTTwNbHaishZ2wou8SYCVd7wCpFtd795JD4BHwEFG3E3TDAx9x71Grzj27kxw7mfJXF644NTuyZG8mX",
  "key2": "3QmrithAsPpEc7eqyiTHSjFr5ft7xqv3JpYPS2RgMrPK8LpuN2E6Lrz5uWJGsuzGaLtpsjobT6cuijKc61wbj9ps",
  "key3": "3VFhrji6KUSbZBVk3QpbMzMJJWPGqJ3u2iQfSGU7UT3W5MgYXQUeEkRpG4yLgPbUSjT92h4jsJNq3s81bmmMyUe8",
  "key4": "BiVTJFaZLhTcuF6RYdJ9oxtpvPLX8e7vcjJbmm9TfMqWA2BxX8NoKDE93x7VfzPZCvrmDbUvumri5iZzEVDF3hN",
  "key5": "4wAuYtp756wmUXk7XzczcyjkhsqjNv9ZJ4pobzqQkUrcLEr2ucno9trURUeUCJG3aJjq3z78oBRVMu2QmHZHTuUh",
  "key6": "Fqi9uujc6FR8aaAhFfAthaLcx757whmRpnoMTXoB79FjJdeyEd6ZKLUumtjotj5xRYAmX9kmc8UVcDng4TzjmcY",
  "key7": "2KUTiDzz7Nu7vP7RiFveWMniBQwnoAsEQUqPsAVr6WpMkJ7ZpiQ8vsHNdei1ybhvp1yJnVm4x9BCtkqyJ6UvaX6g",
  "key8": "45YeDH9mXhjYsU4akHUhUasrL8bRiF8Cs9wjhGXLEFDsen3SQXvScjAqQnL9ydyfkqfM14S3Q3mdrpi34mDKCCJq",
  "key9": "3K7yDHKtjrmzb6dQNHftNcZKKkUPesS4XwdU7eHXb71NEZL7Bq7nXAiuMJKM9mVJY1t7N7HFSpu2aCytCAAfSESi",
  "key10": "4G4bydegSZPNH6SB48iJ9KuvRqfQ8JoPmtUmX6R8Ve5vwACsB6gbQFYszJnwrkLZGuQDSgC729ZxPaS9obCBxRYg",
  "key11": "2JPzagsk8RKDpGCrwkpYtW3UeCpRtq8bt6XnctjyKA69afD3EMwLHQpB2vZbaDEyM4xFZXmF8cnGgfeys7F83hhs",
  "key12": "3TwRoNGCn12Vt6YKDcSggZYkdqMnDeyWstu38szAT7hP5pY1wk643BFVpnoW7WehV8zpdxcHByBHzsbADM4dKdSS",
  "key13": "5Y2UdDPXvR8mn8szhGKs123CvQ74yQxEh9PUQp2yFeJLy1PGNTFUB9mjieuge4TD5PQ8dGSbC7h6ndx4TrRhgKbX",
  "key14": "3DA6nTcH8zTbb4wvEtiNRinMhoA5o2wF18CiGEcTJY6SX1PDyg2BeWaPa6gUAwkSkgKqTqdq6VEB1xT3K8EBVPGJ",
  "key15": "4NErocapF7R2ZpDi9T6SuhqAgrgC1BuWEJw1Q64gqapwBrQFyCKk2MNaz3gdJAXRh8DXgBBsNZbELuug6WCkPAok",
  "key16": "kQH3f95r6xyW7FiFUtkJdgQ6nGFeoAqJemimemKhrN4p17C9UfM2KsDE85iEyijnLZ3xv3bcgcmP1hD1zRzCKmd",
  "key17": "5uuazHC7KZhe266ShBSvmpnd6tj2oMnp2hwCda7mNRGd8BqDTssRrZnv4LRSCeWyWci6CQowSchDHXsKUJVsVySn",
  "key18": "3Vd7TnWmmKqNeG8hnMK4p1x2axkde9HWevWHbKVMdumTqcziCftUwB9R4LbC9m6BrPVD2X8SbnfiTu9YMC4u6U1q",
  "key19": "5yxXLWaeZsdXmZDhWeocCtq8DKvUhryAyC4fcFzvbZDPe6vpdRZpCuuPPsqsg6BVqJTsmEZhWCEsbYRmaD2H8HUw",
  "key20": "5rXM7ANPzgXr3tMw4nj5ABtgzUVPTQ1vh6u25XysdDFsiDeJW3RDwTSnkTNxNe3eqdv75KizdCbXEbbwsrT2hzb5",
  "key21": "5vbXDWMBk3DYCgthpXcg5Wrz9ue2VLgLJ2a6QZk9GrTE8wNmDCXGrgFaJnKiABC9FaTP7z5kw79WU6Z3V9YeujBS",
  "key22": "4H8TN4xamD2s1tN4FLZhAQc6whuoDuESXzNFPzUNbSd4s6QvLeZb2sJ1uQhnchn1JETJjL34N7PjmtKvK3SQiMot",
  "key23": "vkj2Gbf8JW4QSjf3GRcirJ3UM1VTddqwbfre7dqRzuFkDNFsD3hAsLsRabT2PNyvfDk5W9jezjoaApC4xrpcDBM",
  "key24": "5NwwsnrEmWwrVdeBAamYC3DzGkNH5ARaaao65j3UVgsYPHjJbF9GTeHMVK7fKffkpdf8g4Y4c9ysUQoeLarxLpr8",
  "key25": "4VYL2GorhoBDLKQYLeJWzE7aNrdXcdALENjG5zwm7KgeBfXB7ee968VVJQ2HcGcN4QS1i1n6hKkv8yV9gcqzMXmo",
  "key26": "3f6sjt2DLFm9PULdX26GeGoPn5q1iDbVujJfroRh1W4ZsV9H31kGyrLsRNcHzdiYzvMuKrvPSDsdp5nL1QgD64ut",
  "key27": "4nFKxyYyGq7zXXDQ6bgAcPxa7axtouFcZWydTGAb85gXYircUMd5F6n5DgsKxkiLsYv3qmNDzFwcMH1zfkF3o6zZ",
  "key28": "2mB7F29cipXNaroptNP2sehyRXX9zPK82vix9XphoVDzXbMXKHCxMqv2Egc9AZwt49fC9YBEUXL72J3nqa2kANX4",
  "key29": "9J6HBjTXk1N9yNdmbENG25RCd3FagEqWZv2jT2YuhNDkHDuVz6WxTGwQ2HVybEzMkzKMALaDh9vvUM3FFEAgfPN",
  "key30": "Hvws2BEKafNzDX1pVN8HcAu7tDGjBeeLEG7e5GsBuxT9sv1NSXXNurtoEJL1xXfhE8Tmc5jar1m6CeoKosvxz3D"
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
