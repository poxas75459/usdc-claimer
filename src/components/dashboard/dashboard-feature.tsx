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
    "c3EcW3hvGte8jWgXde228hP8ciAhFfAofEUgCwMokZ8NSPtXUaxaFDRU1L2eT8zkVFuncSJxp2KKaQReiRNSoLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8vQiKjx3qGgVSfjmzdrMCUV7Ryv6qYH7K493AWvqWCdB61J1yEFLNWTzJP5UqeGo9FdM7v4CmBm96ikQavYEy34",
  "key1": "v2AhtCz7dXnTXbqQrXXVSLaw1HMC8yaHrDzR5WaEmdyHQHGA2WNPgw2izZMb7ynQdfsPxDjcxGRyRBbTvAfYc2U",
  "key2": "4cdZx9qLGUBATdHv5rJDiFQvVm1TP85AMRPvJnRJgviYgsPx3GPDUBrxg9pWofynx8ZYR2zjzspJLTXNrS6RHfHC",
  "key3": "LdjTxSD6wfzPPYkNfCCqj4oFkDZ65C7VjKB2ybdkLfTVxpYXwWJjJPAFP7uzr82ZFTCEBg9uVAZoKYAux4PEVD7",
  "key4": "DAJZqTcirRUkzqt5j5TNFQ6K9hB1qm1Xo9cWDx95S9EeFPuNiQrWoMYviJPZmhjwKV8YGJHcRx3Ty5TNtTEdxWA",
  "key5": "A4gK9hZ98tpd5KpN9ZUugPGeWaNUwYToCCoLxUmXukhGQ4FfdkmK6aZujYGDQbRsAP3BFj7rPhecEccvByzdSpF",
  "key6": "643WTwpxkkjjk6di2mJRPniwNSDKns2TN1WhKFafQVTiA3eqPZdZwAY21ij3g6rfgLkfAYUALKkiuMh8szMAGoTv",
  "key7": "2DtPN1k1H7p6rybW45m7SXfJkckjjNjYurFavM5puvCuTxjTVGYGPjuKh8qarp6hcRQDY71Cn8U1tib3L37BnjwU",
  "key8": "3YToF2cWG54jFfwgt5UWHbxqBg4zJK3DLZhGdPyV1cXMgrR6B2qfhMVneqhnBUAuh1LEHjtaHsCEXZ86p9jnorba",
  "key9": "4sGfyXN4CC553u8rTBr4td9ovYEpgz3x3e2iF48hs3ngSdmw8vundUSpZknwCs7xRFTPKMrxjmxTh3DiTUUTFUdZ",
  "key10": "2SkS6hPTuViPc3iGutxfNrVyE6H3DHE9mHKvfaHm3KDY33gr3xADfRfPeHmuK1SkZhCcrvhUzvoNLNx1k5Z53em5",
  "key11": "5bZDw2GU62pEfPDwANzyqGe8cpKGkwSXHozgsoMhM8t3NPpUBvBQav2opwgdLbyRw1Ruuh9douo12aSCiudRLcJ7",
  "key12": "56gkRJqZtKJgeWr6cQGaLmFgoRzKqb4nBcH9K8TMWRCspeRbxneXMb2KoBwwwgwdE6pZanfM2qVBr9o4Y1vLruuP",
  "key13": "5ErvaKHUNuDWZGJkMsR6pQQw3aYwM5NRbnFFG2kYvGgQjMa4xyzDgXYymoaqVB6g1qHdZFRz5dokeRM6gkRnxNi8",
  "key14": "5gm7x3WarKX6Spyrmj4YaoAPceSSUyXfAF2us1R7hdYPSFiRqnHLXsW9cR4NsJFEVoHKHk6TZUmGLiBRVbsd5Qrp",
  "key15": "5V1zYvbZ7PH7BFuXCUbejYWoFNgsyFAZ3owgJDbFVCp4yPRQ2qn5umVXYUPaFRoxQdEJoS7QCSSPoLD6DUB9JzrX",
  "key16": "58eKdxKX7MGhkYEVEWDHuAxUkT2DtvwSNaeGnNLVJ4AnXYyyA8Z8btXta2AYCr2pgn73xB3bqEpLVyfiBH2YxUDJ",
  "key17": "yT2C5fd2uRLYwehzT3F5GhMWsvwjThTbv4g1TG1eHp875j7kRkFrzSJ5tDt1sXRGnKuXL4iEVfks7SPEcd8MBD8",
  "key18": "5D1rJe2k2NBGcugcGGYsjLViv5EcFfJgf9PUz6b7ArjoUhNFrFfHs4zQvSTJX2rH3Qrjmmntp65yYNcUBMomWfby",
  "key19": "3PdMKG9r43JEoSKquYs3o934oH3mMT9s26qwMAtAkER9Fdj2hx6n3pgTrfDPcyUYpqr2i2VKZtBbY3tAKr2cdCWS",
  "key20": "4akuCQuUhgpA75y3RCG4PCbrzcVeBMesUeNigeGsL9aMZKobw6Ex3FruiYTqrmFxkKjR9Cwr945LxxSsV5q3G4db",
  "key21": "FSfvJhNVcGd9G7wx4YBtJy2G8XFjrW3UviCYj9HY6LQNrBuu4GiwpSw4Qabg8Nke8iHZMpAW6cWU2fiGFcQS1p6",
  "key22": "48EY6GMED7izNGu1nXb2kovR4z3AMc6ApCLJ9uTwKoQwLT3BfFZboTpSqgkGAY4SFRKke4mND7vZsCqya9xgTF3h",
  "key23": "5mruzYNs6iNcZmmWrHdQZrigkz7yeydXXNGkLnbaRPaEoqJpJvRHnqozDrbMfNVB9E4kmcWptc9HqUYkdrkKgbec",
  "key24": "5s5LNDy3T9yK9q2UkmkmZYthTLrow3pq6rAs8ByNXrrvdRdM6P89tMTgqMwEhEuCioE42m1ye6X2vdczbbw5FLaC",
  "key25": "5wTcetPoENXcd79dgJ2bszZ2dzrc2QxRYm4rX1ptFYHxERQGvhXEDHUe2gfrqjnkvUGvWmWJ5kERdUwVgyKmFpLu",
  "key26": "6kfe82X7jUWKcnNy35SDS2Z8yw8kZ8wNd6X1mE5wm7jU4U5gb99z4Tizh8Z95WFCcgW9GzQBkzvKPcpQUNMTmnq"
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
