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
    "5KoLsoGPYys7QetvCvjBANVttB9h7UwQAZry2n8f1KNHuiktBjYZztF6FakbxUYViwoMCYENjJVdoZ3K78sLrDuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uSBWXQTTB4yHVThCGNKJTtuSBa59z7urVBAhoqPpaoJqwDbf7WPLFZiWqDB6jXWEzLsyn64AHFCGXtK9FK22Ycr",
  "key1": "4wJohsgzsKVn5PSgCV3QEWYn69yuqCkNm7JK4Cqu8DV6A4YSWzVNq67c9g6yQDnQ2vvCDoT5PYaMo2QGUYkDaM9E",
  "key2": "2CmTw9fxYQtnnC2RPrtztCSbGU65B3xmVVEMiiANSCb8xxTnSzeVbtRs7FArNKqUN6GZWLRNZPPbeHgLdXu7wLDU",
  "key3": "4ahgSLvidnCJwQyTHo9P6XZqeBiAU4wz74c34JiGcYeQnvPvuPA4QTgoh4Q4X93pcVo9VSM8Go3vF9Ek6H17U8r7",
  "key4": "5m7c5uaNL6gnatW8GqhG4MgkWcDURDufKEZFx55kHQzaQCDEFHM7qzZP3NZVa9V2etQRJnJyBdSBJwPa757bqSfd",
  "key5": "3LMUmAryfyjj4CFfxVQySrAng1AypXZD3UckJDi9RuijtiaK6McPBzPsjdNxi2XsWYWqkdHjD2HfhJqDVfZ711Wq",
  "key6": "4K3g3r38FQBWqo1zxRv2DT7jdoMRxsoGec6TSkYBXAfWrVEPTsMH5a9KdtDynp2MXnaoHiNvtop3StssAMr7FyQp",
  "key7": "5AuiYukGGDVSpwRQTU88YUhWbgppWh1ajBJ5MeZvD9BiwcQ6WZLZcDhJGj2YEX8xhE3HDWPkMZEDSAWNXoaFFZ7b",
  "key8": "4aTPKQzy87wr4LXDZeBrcMZGvjR7LcyLbt2jZNQQQvR1C4GMZ37dCWQ9z6XfiVGDxKyLx2wqLRiKqXU8LgQ5GtN8",
  "key9": "3aAMvgBfHbaHnHtrmYUCrZHvFqsZTZJhFNnVXaGXAuxG5YgxSHb9aVwHTXNuUGEiTVMxmcBdBrngUC566YCgRALM",
  "key10": "2Atr53HxTgWoWeUwtkC37sukKRyfFaqoms4YQozuSmDiSacTs1KFQYGZzUoQhEGDsBLYVLKokuG2cYZk6Z17frbR",
  "key11": "cLYnsnihFD7YrGixo5DouPBZhAYJLfzThmEsVvT9ujjEZCphWSrpUBuSkUK2vHoxfzPMG1wN126pwzZ9x6ZAj93",
  "key12": "3kMoJNmX8oxUUxkiF9FaxDV5Xi5th4cCNnLhDAiyw221UWtWF1tQBe17aHzwAcjQpUtnUdGMJCsjhoM9y91ZXo9T",
  "key13": "hknVzph2xZqbbMN9JUR5Sikea8DYjVEGBAyNmxURSY7LVsnnLuCMr97pptTkx8XKTSuwxQu7xUV1tE4GpLRGhiQ",
  "key14": "3Wy4EZeaxCTe217xVwyvewherhSNigmd2XyAoB9BidkDonYCQQ1nd28RZRxM39MicJ5Yb7dk5kuhckwHLE1EEehv",
  "key15": "4GzXdVJYKKqFGWsAP1GpsqMP5eLt2goKo3PcqdJqHMhskUWEKZa3yg53qr5k1CcfPedSvm9hw2qc1ZxUXJoBvia1",
  "key16": "2zxjifrDTkCMV2Xxp3bJUEX9uPrBkC4vLa9zDtU6RKM99AF84pFVrTQF4NWhzygBezDGvhi7sAdcJsKQTrsKLuN7",
  "key17": "2fCt5QS85E6cgYYG9v9aLYbEMDsw61ZSzXK1XHQHtFi1AzhnkZ55iKpPJyS3wYEbV59VtgYxeUfradnNjFYyvWzh",
  "key18": "38Vcc3cu5n91v83F6RjuBtR8aCsg6ZiPfBTVR3mKpZid99mCJU4zQmEDQVPzrcGBjvCfgAeQi1v2MCuUjYKBT54w",
  "key19": "2MEaik9RCebcQx5MpJXRv8VSpMGogMqsqMWnU8iuXVuzSJLnc48hmaNhQrTdCVb3LQs4MdiN1oLScuW2WPLSaPW2",
  "key20": "5WV8r5wnPF9GphEUtYmWV6zUsxn85uqd7skKTQvTnTEpAYkffmh2QC4XssBCVuSX9bthKVGv7bJG7iT8wQVBmafZ",
  "key21": "2syKFeyxBYL4HSxQPTFCwVUUQVRhY6iD1ZgreKurWC8ciPZZ6pb6642jiaimVRRGwKaMnNQvrDz9CQYcFAmxCt18",
  "key22": "fPRoF4y38JJ7Li9tesRNcrwkA5T5CUDs29ymj9XAceNJ4uNuAUUk8Ld2Ssm33RbKNyi68APuq82tPztAbKnLngv",
  "key23": "52jropc3w2XhEmEqfRz34xKw7FDtXC6hfW82uTD9evvYT47GMP8YMafmTqSoMGbxZcAFQhnoHGDysopq1JhLGxSX",
  "key24": "4cshfXRARo6yHRjSCP6ofhHGcreTJUXqGQhjJPgoR41LjSDzwnEFHA6sq72JovW2RrDacoXJXp9KNyYQCnRVsqKx",
  "key25": "5NMTB2AsaTPpako2wkfwm3SEmPvLfiyxwje1JRui7fZDvtXM3pawN4p36iX7BQH1g8Cr8ekSkFL7if31LwP7kpJW",
  "key26": "3ALHVkk1WS54NkYjb91Rgaix3T1eZh9fPXbsSzdGPeybYsAVsXMiEmLrXAHtS9xK2jrkjJEzTrWTktPS4pPpzJ3W",
  "key27": "5xDp3QM5sAARctcL3tzMa7nJqSLUKqdijDyk565Y46zG634nt3N2AE8zWs8h5WqgwuJ6mLivV1ebBpCJLG25uggF",
  "key28": "3hVRyj8J1EpFFMkmFmbxihjTBoYaa39qV6Mgti74NGxLCVGGz5qvcdyUzrh8iZqRiudXW8YZJwDHT29PxqR5GHmp",
  "key29": "4gLaq5ubT733XanGVzuMRgbmAJ52bnpHWFLDsZoPNUDY5Yp1oN9VE5AFdACQAsTwJqriyR1N8ccoDDEizC9Gh2Yb",
  "key30": "5xNK6RyA5Uc7e8rXVWTMxSCQcB4Vg8GVmAZUcFmoYc4qKKHod8ea7qrqvwfWkj5TnvjS4TuQq1oFRK4DviX7LEkF",
  "key31": "5ntAT62EtKxuw8utcE6H8xt9Z4R96iBCVxori4vMehuqhobqwrV3hthv1FKPcjqRq1i6fdaVisy2KCJiYWhZ4ZDj",
  "key32": "5w13zrtednVnqbrE7TTbUfq6HpphzEpmSRUMeUb1AV2bTYCf6nBdAbj9qU8CCXoxmdPjBFSnPEz63UyfbiB8j8KZ",
  "key33": "3KgB4B4ugJLKXHsCde8bUJaAgU1UVr142R7BbUcjjhSZDtaW6eRbocf5R9cF9tNECTE4up7TYnUgjUrGZwJWocEZ",
  "key34": "5oB6rqWzUBpNGZ7LeCFcMVFv13HMsGLSmmDJc12SAdsV3w3LXtHzomwLV9LfLHfUs1wR4rRtiViWc5vGBNBSeyco",
  "key35": "485LBSK2hMbcbVn47PmccByJsPmHrcv6r3qnVHVreyECWjbWeVwYb8sbdKyE4dheBwxZA7W8Ta3RzW9izdiMU1rT",
  "key36": "RHB7iM6V5rtoKAMrFPE36xbqF8qeARQWKXtC33ecnwPcTa7b6iLHFmzXwPKER2Kynr8cYWWBnWhWxcw5JjQDieS",
  "key37": "5ufBTvnaGWsH3fyBF5NG6Z8WdEstjckVfpxeeTSxcgH882LdKnn9sHju1DDhxoesY8N5USb2N4rmRkhjcAdC9evg"
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
