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
    "5EvvSpsXn5zDEjfWqPQM4VtXtjqME1U3kjFjoBDbjNTHiV2XnAtowj46TrnNsx2JtbNc5BWAqebtcxt2wQ3fw9nu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aPpN1rhPfsAGVD494yjgoKHkhpuhq5zLMv2fsvzzUnWUtt6CAECytoUd5VGnSBLE8Ciqi8TbPWgtYbMXmqxZnHb",
  "key1": "58Knjh8cFwjmKNjmcKw4pspYGW361UfwpcWprWZqhdSb3o7QThpMR41AtSY4NriEwWh5SLZ68TmodCmZjiXhNszU",
  "key2": "3YjoJ5ytN75B266zqMQLvWerQnoCnXZcufXqs8GwB5JJJGX81z3BwdPMLmHTC2E5L1NQiMQUwYrzsNyLPRWRdoz1",
  "key3": "5YLRLqp8C1pPeYQpLjPWwAiu3W4szwWyBhunpJRq73wLCPHkdortL5XbuzeCZGfPNu9zhvwjt6WtJBJrFMkCzEGK",
  "key4": "2ZtjgGT9ZKamNe77Hu2JB5Fkdj74UZ4FVRGJCMZn18FqSNftfpaem6Nv2pb8que2dgxFPKE3tj7joDUNnNkNeDq1",
  "key5": "32MB3D8GgnRyy9TJuMgiWrCM6LfiKnU7uDcjY49kraD14mFdWo4wDnxq7r9rxZG1R9XktgofbrYC4SBMnSX1qCV7",
  "key6": "2ukU5u6LGAQLxcDfLt14zZVwTqvg87N2b7QyRRmd9jfsTKHdrpr7nDvMDMqQT7p1hEQ5tvgbNx2g95YiXFkDFXb9",
  "key7": "2o7YVzcn4gMVyudd6JFy8GbFyNdrMj8StqwXt76Dy3gTbfzWuu9WTDiiLPcN7vBDwruVmcne5fcjmVssBTPmvXk3",
  "key8": "292yji1P39mLuSwXUXmgqoiK9yspgDwFSnkrirT7nmaLA2SaguBCkjH9SM8vfGRTSJDsF9jA372sb1Kduoub5hoJ",
  "key9": "21kwbUn28SbJodC2J4pRfXjha2DhKjRwt6A8Hm5Kt5vCZKmCtUV9X79hne5pq6YbKQPc1sjhBSciN246kQrLovvj",
  "key10": "kjChxrUqzre9g2P47t3XZcxzSkFMrZaHVnRhTUD8mfznAyuWQQkBkUNcGYnVw2eAsyLTgEsGnk7nc2LaMSRzzKB",
  "key11": "pfZkGDpED6XrdmEtLmzaGXk8JEMqH2mx7e3o5EcEzcVV3r9wrF35c5nnp2Jtvy255Gc6pJjU5LM77FHv64e2XFC",
  "key12": "2hcEnFSKGTq13R2qs61epU53WCYAgexTtF1dyak7GqhiYfGSB3gmMc9JFKcL6iAJ95cE5QUnKByQ9j6sfR5RsYVt",
  "key13": "6mibM6Ax8xanqpDqJEs1JzHi4Epe4WugQppoSS2CcaHkV21656SWgqzWYR3dduhZwza6tYv2fn5Vfqk6Ca9SKNs",
  "key14": "4eWduzcozfqGzmdU5fWAC1oDM7jqMjyLfPr2WdiSATA8bjHYoSpgGAYa2YpN8SCCMW6nqScX8ybUsfJGezgayoUT",
  "key15": "29sEiLVA1ptwgAwDDQ5Tsk9s4qYvGhGJbB87wucFzguCJE5rHi3SgvnxnkaTPbPTTxMGPgvL3jkztKsKmhiDpNBb",
  "key16": "4eEeCj6T3sPE7tboh9Ugktrjz3jzfwr5WV2QxHns6MJmj9Ps43r2fJXXBausxCLJtXDTCgNEH2xEuX2G7whmkdA6",
  "key17": "xLZUT2edjGjkgPq7Cbxj856TfgrDqn2RQpU1WBHJyu9ZdqPvuzrSXSijnYzuVgAfXQTkJ72qPGZC92f5iYHcqga",
  "key18": "Kj2fppY82rHUGb2FpUYN39CNYCS3wCyN9GpHE7byow3iJv9J7vJzat4CwsdUz8BRpKRPweogyAcpqhzbgcBb3JQ",
  "key19": "3NeBy1C4LLWSUdJ6pav9fhT6X4fFg7YLHBFwjh215R2SAQmvgMjrVosZqv7sGLN4CPLCoax6F8XbHYTUtrdWqqWB",
  "key20": "LAaF8WGhmBrnG7Rcd31Jjff9ePrZUVupUfqoaTHrYzynW1XwVz2QbakriMwgty4jRSupNBM96caWB6HwhAx4ZJy",
  "key21": "4naUstzB53rXfG6yuRLNDZvRhELduGSXQVwDmdJvqWDuBXEc67dEtd9qUtLUZeakkSkoZhUeVEEneSML3qj7CcJT",
  "key22": "1ypT7U6voJcyyuw6DseCj7b9oBkHnA1pmKLD5jmmmL54mBiQNsy6rw1mGht1SqyptXhvMWGgNBbqxXRkMGVUPoE",
  "key23": "3dmV4W3gGQXtfL8CGFZZVbtvjxqhDW7oAx7ZvBWbJJ9xiXXVu2znGdziJQZn8ZeRSR1h36CcbvisVLg2UtGQB8v4",
  "key24": "tCTCt9VwVJazdCLcRPMwZ4Ekqdi2Wutb9dzVpyuQNNyH5SMSRpaLBKZBL6g8vXgNGWE2efFLpfr1gAHeujp5ANu",
  "key25": "22oM7dUUTaaUa99WK27yCjVD6Zk7LrMkZ4gEWTDkJSyjXMNkSHNvDTRZpmQfUTaPmXRGkTRCrg9KGY2rsPxZSFQj",
  "key26": "2uE41E92gCNbqAykvFWTR1ZwgeYiMy4tNLhftLgvjHe21ZjRW5vUHTW5MfLEDBsXfuC91b6NMzJT1UUA7oiynfDq",
  "key27": "5gRKsbMjG9yWbBMLdU9zeGUcN6PTMrfBwxSEWzVoX94Ne1Fi1qnFzuACiJbPooqM4sNWZ1FdzYhhsCsq5YSAAvGP",
  "key28": "4r54YHqjzDi5fUPkr71FjUdcekK4FDRcBwNyU9Y6UVYvVAsSuXwdoexWap2WvT4ZsZnmSRJM8fJ8wJGVfUMif9z5",
  "key29": "2b4UMK61qV8hQLMPASqcAsRBzA4SuLHDmSzEfUS2CiWU4exMquqfJSN56oTQfqBcjdDPrcpmtDSRLS4nESoMFPsm"
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
