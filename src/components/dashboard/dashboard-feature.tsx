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
    "QhuPEv8rUkeLnZ7MyKzqzKdsREyExup6fh6YXWE4gbfcRFZPAKxKcoewXsorNFaeJyp62kwmSQ1QZE2jKbBbZf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tsokaFMbZKXyVXvggsEhnfPmuBzvTpouqV6TvgEfRPFzaMaqveoXfj6ErUSg65ewjBFoLy6RkqCv2jnpvohmqYT",
  "key1": "5o5VacMSMASfY4XaLyz1k3Mc7K54wniX7h8a9oJgT1GgWgE3FSVXbAsgswqU5ZMuV2Cyy5VDjNjm5jMbZFvg6WaR",
  "key2": "4ArRAa1b1AaCPPiECxoWPPzwwgjU7j4i2rgo1Cdn2aYA6o5jw7GWs6qDqQ3psXSQU6hjpXE3NziyDpDtP4bmhhjK",
  "key3": "W3MfbHTo2po8PKwK9etTrpDPDnpGHPyssLKjHZfPRPE2WN2mi1Bmt5qYP3keqNva2tyVvvj6joKxQ18m7cwwV48",
  "key4": "2uwgV516kmnzo3MpzC8oi31cKZncjj5CtcS4fLZPxLKjXf5fRMjXg7wcyyixhywznv2khwU4383JwrfW347ZbKDU",
  "key5": "EJFLFzBnesdnNwSfAgLkoxRYLpqPoEJGvMD9iKGsxieqc5h791EndTbGVM99ssBrfAGNJXC2iRgxRaMRXYQ5q5h",
  "key6": "2z2rAe2gdofzntcBgd5Cay1aiHsqqDb4P8aGQVxWksZZDVAyqKK9Z3A8p8g8RsKdLkTkGC8Wdv3weyYDXLr3Fu2",
  "key7": "4BJAC5wd55cG6cdyjDaqz1UniWur9VKCQBiVyCLAjap4duu2dQMuc4qgQkWqqi1wtsC4gk24DQW7ahKyCQajd9Pj",
  "key8": "3xv6JaSMEkBH4Q6g6pCWx87GEZbQRkSd3bZ1Djp5f2nWeREuGomQHEFTP4vevSk1h3CdGuhHN8nJmCjqBB9eMtph",
  "key9": "51wkwWfHMFv4R8yQfNtzu2cGopvPHkZFPnz4TuXicvAHNYfKudap7G9gxJzbPw6S4RU6KrwtSn2rdacR4ux6WUSo",
  "key10": "46Vd1MhCCyhF4Tanpek8gSTptQUC8xyMT34RhEVUHo1EtTDfKRaFdv9mUecicaFqpq4m5T6QRjfBCfhLzcDotKXF",
  "key11": "7haQqRmzxYqRgx7iHBDxztq7tYUPQXZkqBP8RuzzNQZkJbgYLswevEQoxGDggmP31NRNb2ETazcoQFgyH9zx5N6",
  "key12": "58QCxFe3zRcbrNGWaysrH6cD3eHfXCz6TDinj2gRU69YawUpnUNeGE7RwW5KsuRA1cn9g7qtukM5DUCHaKBMHvMG",
  "key13": "yPfKL5wjKyfRTcZrFT2EjhUXAbxDJ45NDFaXUM9K9bFGUKb82NP2fY2rhWtDG8wv6ZF9qyEnqZZBHnSbrho6mJB",
  "key14": "2GHzPxhVEV4nxCQNFrvugA66bSKDscsuUptMJ5huZ9d5aq7gGt1QSRwKkYACCsDLdTfsRReocaVfgZAcA7trDEpW",
  "key15": "4xfNtNDx9JVkRTc5ZYS2PSHHQkCmciL2Fe1kXWzPyA3gYEaDkYTJHhnsJChx7waG9nTAWdkM1CBeGqrku9rtdwKq",
  "key16": "H5hb1TcZjURRvYyUmYpHiPRXXATyFUgAUTsUq8cardMwXSf23UBmvtLHMn9PHETG4byXNmevebVNvumU5nh93CA",
  "key17": "3voHnhTdx4w11PRSGDuV38HnnpYDKoBfDhdSr3DTcAJgWMJhWJShVdKHeZ2TtVa5DuUYQ4uDJEKLAvyPex8EhYvs",
  "key18": "2YYmvBpqqaMwpr8nc18NeCPi4wRcUZrLcGdBu3h7QnxaHXZdWQzza6XteHPm7eqDss2QTNrQzmkvf6f2nCR2sM1A",
  "key19": "56UAt8CP9261A9JNoXz2xoag5Uh5uQp3Y1WZrvBsie2pVFR44v6h49C4ptCaqkxtVBT2ViWvR17isXGQUUjgGnLc",
  "key20": "65bQ6KUkt8rXpiSve6xq8ACs1qpye8e1JiDo7FcyqJjTjfw6U6vTwih68k4iDnFYUZTTZUmP3q75T39URvCbGcgq",
  "key21": "59PjUPVCcdF47FnEMPsXDyiwxPhTT1QktMqM8nTNC2WFsKzarGv6opeaAy8GQWqvJkSQavTfw1FJCKno2pAwnbXg",
  "key22": "TL88E84Jedra1byZxxZTG95TFkjyUcuccQFNLdP5y2Q4DruGXDWCHQMcr55Y5ZkKQtdRZvN4BFee7uuHAj5gqTp",
  "key23": "2cSJ3wM24VieBtk38A6YbU1kGSuDtk4uH9tFqepr5HvCmPukz8JTnH7gtZ815aMUcwmeKXpvEWEZthi7MQVapxUh",
  "key24": "sULMoExeZ7j33MT7jst6QapFujfeKd7yLbhnqUt3oSDex1WdEw5gnBeG2CkQVKgbu7dVyF6m6gEdUW7Y5EvXfoi"
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
