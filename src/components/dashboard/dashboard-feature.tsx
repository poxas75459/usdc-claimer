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
    "x7ALf56i72Xnu84sSA2cxaLsAzLX77MANNuGiKjaArnoesCcaV2LSsnKKzSP5JKjZUneoVMXtgQ8eLhLmRkffHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32iJsXQ54GAi2mVMB6N5rHkee7NkqCtgKk8ivbJJcLDdAwJYNfye1vjUWjNbZ9gm9Wzf2qti2e9BpeUdREtNP6U4",
  "key1": "ZdfrpQ4r6g6vMAnJg4HguP2N6anM9NF3WsYyHpk8MgSz5RYYuH4FK77QiYQqMjXgLZJGn1c7dHHsXgFJr4J9CPs",
  "key2": "29ZA9hDzv9GSscHn3M2J9X5BZguShH2tMEeKhzZAG49w8sLPEGrboh5tQm7P6X282kZM76PqFhHyNWADQTFrN5hG",
  "key3": "3FeyPM2Ke9s7EwQpKDHa3SUS3E6SZFnGCxchSkPcUo8Jon8F5QBUviqkWBVMFjVYwUq7TrtCPLyaeJQXZPDT8Q8N",
  "key4": "4xF9ZPLLGG4htfAwHDcLGJNVFjf9PnuyZmDRkC1i6FoTZR6DNSFobYH4D313F8RwjbyXbQbraMnDMtqZYU6pNrsZ",
  "key5": "B77eBuWQbQMBDfLtMdMND9obDU2jQoshGS3gCzeuHmeBsx51eWwo1hJ9FiEyzRNcKh2WsznCVZuZiWB6Cb8HAoQ",
  "key6": "2YsJaLuFM6Ep2U5oG9a9oWTYio1rvYHsmfWxbqx8JzrikjDGwcedwXReYcc1VPKHSugVUAqZyJxgB2CD9UCXYEW4",
  "key7": "33eRQwvMCtQ9tmNLayAsF48EtpscdbJL9g3HxX1F5j3oYz5ezv3Uqz8TNnyHVAnHeMjbVJhXvigML4ozuU5rnmwV",
  "key8": "o4Fx14yVap9fF9Sa4r45EJCdCD8zz8oG8DnJ5AvPkPmL6s1tXDB43BnGR4xq8M7sH61bk17QFa3MA956sU1pQDG",
  "key9": "25sDbdjhymLQsCxbKFe9627sipGVf1sETUG4xDx66Zdh9CEY2VHLiANRGS9ugAGyJATquQ8VutUnPGHLEViNzXmN",
  "key10": "3YDJE43nYi5NR1BpqrjhmHL1eTqsUWxcVEqdbJAKgMXtZmA4k5rWM3TkL1SsQEVX3uv1Vh9ktiaT1iZoxzjwduec",
  "key11": "3P6XqFQYSsmHKFScfNZtw4NUNLpPumw1PT6X1JiviRumwYvEXemeFVzjNtjvygzLPzrbGmwX4CLrvpSo8ZgPefMX",
  "key12": "3yjeJnY5UZZMRyBA3C2s8CMZyTgEEQi36hWA8Zq7XipDq2aJzrGz574vSo7juT3T6BsacPrXMdrBaQB6rbEg5B3H",
  "key13": "3PuXGMYDi3vxMravJRAeY9buJQbqRAjKUg9L9PiibSJWDoXK9rLDTCMFmotuQ31A3xmsyb5zVqdabALZXFisPkfa",
  "key14": "4h6daxckw646rZRWX3cs6JpY6KSjk3VWzwbHzqpCM2BLyxH1oCAV8AutF7Q8UHqLMP2SBa9wYnn5vZB8XyqfZZY5",
  "key15": "2PudqTwbkRVGmoJXw19EfrukaCLeqpnYcRmE6ZC6eNsqEVGVyHHzGpRqdvZeoEQPWGGmCFDvG6isnnFzUswkp1go",
  "key16": "fCvsPwomeFYeQfXFMKYEknj4m1SCkxJmjdWyowZujEr2DL2858LckTvu51ReGrPqXVsMUFGnC5FtQphuwghegwJ",
  "key17": "gDvuxoebuYPYTPmUps97SL3sCX8UcXtinAC3ZZyaKb5D3KSoXe6s6n6bFy3kdu1h2vYXpvHbPQbpTHTWGxmcohY",
  "key18": "48eQKcmXR9h31zNButWEy6QYEwUhAPckFMnLs8pbwCUPLvbGcnHt2W7nZzXoRYMhGmsd9fGDY7Eay9UbZE4VmyUL",
  "key19": "3QfmJ9jMNsDQaMNoxFn1sp7xbspPdR1eHZ15HBMmLwxLiei8EfRQZtjoyJuBpTmUr5uk2nUbEmR5rKPbjMaicWaW",
  "key20": "4bYd5zZBomBrk2t7RXKWfxgWj3XswtXqmLmpHx9bVKf6yubnmNDe3nLo3EoH87wmnPAeUchXsMYYZLpynTAp54EX",
  "key21": "BN4wJMoUvTZkLMG438um1tDJi4zKYgdeeVZbK7mKt8DCiycZw6yL2L4ga3pGQ5etXdkV1toUfYcs4a9KjqdDrQF",
  "key22": "2uCD7vSnCWni6f89P67DdRgdzemU75W4d8CaKqvdQdZHBpHUeMZPGaUxriNzybj91EF1reHi8BzkrbSfMjyhJRet",
  "key23": "33aga3cQHiSxRAcbKJ7wJJfwQuaz4QvhmRm93Pi7SGogfnD1vXpDwiFfcbQwAVgVB6HPc6WCs1DuVLXRF6ubACwj",
  "key24": "5ybCSH81ZM5k6bCVTScKDptYwCkDzGToeuK6WuQ8KhxmVD9TCEyHk2vC3o1VVFVQCivkgt1wZgcHNYdXbMuqmGEx",
  "key25": "4GiHkwxBWgTwquFiq9mw1fC3cdbp2sAU9HYz9LvokLiDcJ2H93gZRwQXAaxDxP382hjPJJxMfQx4MZADQFGKvsNf",
  "key26": "457jRvVAvXQovMR56boCN4yvyM4NmvRFgFmajq7xGWCqZE5fvSqw5xc5SWuRRJcdbvAtCnk7WqsDoNuZxsbsAa3p",
  "key27": "5CJCpU6Nc9Z879wW74wqLBmeoRv1VhTpCo61i1zfqQUBCyfVpH4oCaakmUkyaUJ5ogfGimn4g8yyoZfU3jZ8j1bz",
  "key28": "4xCih8bYT1mjgXUZVL18zh5jJgEhLdBHmLfLxGN21BHDo9xkpc8jMJPirEsR7TxFtbQbBSYQtCprjaTs7Ykzz4iC",
  "key29": "4vSmBh59Bo1s65G9Cbry7ypbQXpc9Y5Phd9p7kjLrdGFDuJrCWD1JoTknxi6ETv53o2ko1Gz7ycc16dq7MrjhPjR",
  "key30": "3twGPiLxkawqBZSQQgEV4t9duyBUaWF3J25Zq7eEW5HBcJcfAhRt5HEsM6MCyRQJ53vn5A7PDu29LLx5wd3Evx94",
  "key31": "5hHU9neVoo1RvDvC9j1UkwaEqGKycgvyaoodgDs39k5rr84FPM14DjkKow5EgHBAWGiCCCAzzB9KFWAScRCThLPv",
  "key32": "2QRdvUbUmHymhoDHeGvc3Z1XZ2MpSPgM2wTAVDqaoskj6VrVu5CX9VnJu3gty9wnsh1NQf2eaFHuVU1iJ12V4u61",
  "key33": "4otygwtiU628ZpSSjKKQBdmqVh56EoSQwpMStSwpxtZ4nSQ2mqQVzZwMhhZkNbP9wLEENWEN8m9Acz3oZhAvWeka",
  "key34": "EtCQtTzozc7BafCtSFTpixAEuAnUFc9rkuT5jSwLG5dC4fRgnEfbpumyAFH5oCuDXcaprMmYqoacTGaKbJMVYNz",
  "key35": "4wVu61GdaPWgkmdU8xsvVr44ci633oggMt6MHBxHHkPwLaE1MirHvkAtYiZSsYb7WrWpUKkZykHCNLH6Ks6bb2dp"
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
