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
    "F64UmJdg9dvMVKhqAj7LvxKRQcXmepBNTCnorkZu7yHknQB6CHQBCKUTu9jaBMjaMjY1U6pMNPsuWHo4XKxuGcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sHCLSAq4BEMRdkwpdg4tvmtesv35DyLqjKWWYM531uyZYUPdoFSN7B6JmtQxftoF8TQCvo91EAFg7v84kWhCaJY",
  "key1": "uTPERDUxdimTBDiQf24NFs5qNmZnZZZr9mpv5osvGZAMecwmrBJ2BcjeKQMRio2EWGwwcEdNbrMwdHRY3NBq7xg",
  "key2": "63rzjiqNbWBc4fiT67Ki24njGExQPXy1Tn7vmpGaN6rZ4jaN8Ngd4WtwARZudKFEX7g9SVbd1X3Bq1EviwGchYXM",
  "key3": "4vpG61PexiMqiVtGqgmrV6Nbv57rpKPHc4Q4dzYg4stPrTxMh1WKw7LFq4g7aowsv4Qkwc18126Tr2od1tp7LeFL",
  "key4": "4Bpi8we6RK36rMFo4bABRBSvS5Qf7Mu6SGg63H37MKEjYAZzCkbwh1r29Dukjuj66MoTELyx1CDtmo5qE1kee2RK",
  "key5": "3UhZLcCu9CQ2t6pcKR2UUjbkM8wpfuN1wZQff17xoN1msuixkdPCbTE5DeeF4b2MyYAexma4r3CSvVr14md7jhx3",
  "key6": "2JtJT5VpTAzBsxMjWoGn2WtLFBcutF9Lu3nGcRhaACCpdpeMsYEGRAc9ARDPJYN3HLfaGZDjrfG811p9j7FSPxiT",
  "key7": "VoGwt2UZm5Peg1JvbJTtZKVa8fBGfXeiJvnsx8LmAgRrWQ4SPZdqvhG8SYbwRmoM1ZM2vAuddbTecqQcDTQhGdf",
  "key8": "VPP2V8nYbBDFwJM2JVRGBxLvBcx3H5jJFY1wKK5m1wwXUxVBW1DSkpT97eXLkHGDbSay3sG62N5ZCym4d1uXAqS",
  "key9": "4uGv6vy2PenzoWSTLkoCM4t9mcfpHvbrKmJckUFXXtSdKzBvkncqUDVF9UxZgNkwWzTV6KeNM6MgyiobsgxobHCX",
  "key10": "2k7oGXtWnNFrwSBuwzHq7uBxs6uk3zVEjMSeRchDcDcGat7xrTVT5jki4JBvFAQ3EDaFtZwHgXiVqm4i72uxd5Es",
  "key11": "5F6FD15MFUzAfKkF2Cg83NnqyqCq6aK9sVDfpWD8VWJs8SXVzDPB8PueFpNDD1sT17RPisKsA2i17p3GxYwwWALe",
  "key12": "2QaAJqJFUrNzC5GY5JrxdwhRizdS1k9fV5B16hjgdCnWwTQXvdCs7wvoXAo4bq2a8MFhhD7Qk179jP75sYnjLTts",
  "key13": "3ShX1egmyUN1WeqwnfbyTCoDqrSR5j3mbQ6DTKwwfhMhVBQgB5aVmkais8ZqzpRRL6yeWt2RwkJ2MxqzzUdmUggc",
  "key14": "3tWRxSEVNB8NCjkmwXDDhbz67cBDECduqQVFLvyzHERmx7FijgnzAJjWA9tzfTtgo1hfx3trT85owAf5an6F3nTf",
  "key15": "2YEUo7QNmvMmvYqnxcbb5fmgoSs4N741PTPRD9SiKXvZw4DFfC1wqAPGwhJEA9cDuJM5e7A6EcpiwKwRMqTBhjdc",
  "key16": "5T6oetCLKGJs3psQzY96WQ5osLwoV4RbJEpPsuJn8oxzDVqgvQ8zcsTkiRAMStSXovrNdRb9ENJXhkbdTfZ25GBK",
  "key17": "51LWVxbWoGCYMu2aXtyAQ6W2wvrERNJoXEDHGqy8KWVTGQJw9veWRSwzbZC6M2RXvgWKDqw9QgidC6FQDPi5D977",
  "key18": "4DofRZyohC6qL2vbaYBKabdEuiAz262Ma3aw3WcXKk38QGAPUeVwR34ST6jkYweiwenPKcM2bE7ktbAEbLKrBkZR",
  "key19": "28qcNmMxX2VZ2whbDtoeGQB3LS7FGJKb9rUQqnoRpRk2rXxM9u4h7gEVnrjFQhQuMUE3w65yg7v1A7ev8TEi1N5b",
  "key20": "3BRHzFgZLShbFzzdeygZNzqk1xQEPFjif8CYpFhqkn3G72rNUVLwFiCppaeh6vHvZDun46u5nfLnprV7CCuQtTdj",
  "key21": "3VXYkZr9Mzhm5MgMzer8ZV3hQbxysYK3B7CjC5Z9nZsPg7NkMP8gPK7p1fRtMT2kXXXjBoD2sxrrrNEnb2A93Hu8",
  "key22": "48bb7NZ8AZws4RZKHnqJeuWsLPoBMTDvcZG7QV84uwaFaYmXYPJsgj47vfDPUsQXDib73VY13vbWuFtGbzWn5zkL",
  "key23": "4jD3EsV4TqKkgknJYTinxya6QpF7KXrmrfo8F7q9q3uFw9yW3e3KxHHwGbmU8WeWvnqpKBZYkWirmqs2Zai64dY8",
  "key24": "5rE1yvS3ZGJoZSTRggzduzTWt2C977suSnCX3cXPfgjjk7ie3XTuCNMf8bTPRWoNkSixmcpLSeKioAy6VWVZCCov",
  "key25": "4HykiBAJb2w3A2bX6UokRyJTqNwEJeehaWmSpKPUh1AyudoztGwvBRbyDi8JU9LH3MHTz1UmDMeBYQRWkjzjBstK",
  "key26": "5LEs9jFtjYX4ERdKc9kXTqCVWscUSH7jpmC8KgdZdB6NXVPvQrmV9RbLm6UK5sbZ1qGdNvvdhFMeLmx41jdbCMq4",
  "key27": "3iUc87cC91JqLYRMaZjnAi93wzipXXbCTvC1or48AiXcwuwEtsaz3bGPg741KUNqehQp8GgkN9HHvRrpoZc8Wkgf",
  "key28": "3PPECYxPCnM5FQNRpqAFYuSwgKJRDFgBZr1jKgpEaaipWvF1JbpWK6M9oSRYicemEgyVMxRzeRygdpYEV6jm6CW"
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
