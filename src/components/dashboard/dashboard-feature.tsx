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
    "2h5QNQKLVdM1aPAefhmQuLvFtfTnTuen5PzgRsjnUCteqS5AqjvRgWqyzyn6E9WaN2Tt4KPpjyVtv8HD6Uo4oPsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jU62tWs12gars465ku9ux6DgDMjJXnB7rK6fTX2f5QXwz3hxBoQbGXE72rNQSNqV3vC8PFcd73AS34ik6uTjwAC",
  "key1": "5V8NXSucyTxxp5SWSAjS2p49xFnANet6bg3CwP5ATg2teSsNrmSqJaEivcBNo4rLcCLaeEFBWAsMpgbPwPRCMhre",
  "key2": "4xiTHxpFy2hcCPRep18ujtbCSfPAy7rLeggEKABeMD5N4mv8WHXE4RyLND4r82ZX2uEkNs6ucpsUsfdx1VWPFoYq",
  "key3": "3Ur1ty4qzcsf9TmEY4zJjKGGmptpU28SobeVSNYRFdiH9gvfY5EzUWbK1TZAReeyqLzo8jaEigEtDvtYuuDzRQjx",
  "key4": "4hJKZBVkcAwKTkvP79Ywq9n8Fys3Soau8Bmk8eBioPtVeQKCi61URPbhmdmimwS7Bn1w43Bb4a3P4o14PRdcijGQ",
  "key5": "4atjhRpnq7KfwoTfvdyds7jQzq1kDFuAeShapfzLxTYGQ9ZezCLyJsCfL1NAokUGTYmQ4SEQqUhqqSLBJFqhtQqo",
  "key6": "HRKWGhD5NXGvHErqpFyMhckV8h7LMyRhEjuEBDz6gsq72yDAH9xZPMe9SkzfhcYYZ7DJacC4RMZVQ1qtBjit253",
  "key7": "5KiYWKT5kKjEuB3UWKefww6W3fn8iAJP8RbAbCiF4Hc9cpvnmyztAdcq13xYxfies6MACwD31iEnFjp3WQFkWqgc",
  "key8": "4giDutPc9zbwc9VWNhHqyy1cFJx8exbWLJ8UtctcNr3ZqP34qG7z1HodVbgdH33haQgr3rrut1QR49rX3joGwwCo",
  "key9": "2UPo3QDMubHNbq9QZXZW2UB6s9evWtMuqn7yoRqgM7QAvinUFgB8EQAuxurrs5gEpeDU8PM15LLvb8U6KA41BAvZ",
  "key10": "4MWkGE2spV4gC64k81mWjgcS6P1eckWheiJe9vbKHaXwfqrzTDVx8LxoYxJv63J7u8QDzD14b2yR2LY5EZgAMDu2",
  "key11": "2wMVGL36b4HvMwxR65EcxDR17LDxLhh2NkhaR2fkisbU9wwaMffXzgwk6ruSHGRTooSn7aseNfr9utinVy6poSEZ",
  "key12": "5k4pqTtv3BSpcqtrPco2RxeSxCVgWHm27gZ8nC94zxtT75pWLbuLHMyPN9ne1tYrEFwKgmWECVt6UewMmhc1bogt",
  "key13": "2hW3Aa5zHbt4goa3zLEc9FsfmY8HWey6cH22FxwoUBoHkE4ohPLjDBRoxxecJPn4ukuGRGyW6p5yLSrggF8jrGYM",
  "key14": "2h1TXN6mUQEtLnLw7ArCiRD7PwNZpApDRvtyDwMKeQFxYtSq9KvsyKionuJANuDfWKWqNvFCoRMwwzCHnSvF1zvn",
  "key15": "5w2mgZAjhGDw2Bx5GVxXoovgnaPJgRTdkh1QzpDSe4bL18MJd2YYAcxSj5RERdicfryRiabyNvobNEe8B8rwH5xa",
  "key16": "5iGvTA7cAvPHmErx8eNcTF3WLL1mQxovN3kT9PJa7k1QVKYpvzMeH7Xys3V6FAMvYxjrMGpxvKYMtxYCJqLTYxeZ",
  "key17": "YbgdVQCQ7Kje9WLvSxL6HxBaD7XRDUiemxm7PrSy4Tvw9QonU9mCSrqDuSRjDsRj6btqZMAQcYJDyX3NdVSNocK",
  "key18": "XBiHUehB7R4LDWWHofe6gmhP7rE82cN8sDbSVSpDaXkz7YnFPLtQ1QJuksLAnD2Mv2CkXwyC6thymXaxS3r8WcJ",
  "key19": "4tnKuFndMKyavEzBP186Bcb4Wk5nAUHqX9rUid6xA1We2x6xcvRoad5mQZPhqK1BmcCwdB5J5GX1jAiYLKCf66Hh",
  "key20": "46GS7FpApers9Tcmw76fRTVKo9dfEbRwC9z4FhQpNayMqUCboeEpTTdY9bXCbPMEg7WqiaxqpbtmoqVK4TDpMJni",
  "key21": "4zwtrhqjR3nXbTnjBf5CdiwYNoTdxZiXep6B9ZgkKyehwyM4oyx3BAPYRQmqFC3saoUwLgnbb9j6prqp1Hj6CX1x",
  "key22": "2R917mkoXpxN1TjeN6syM7bQdhJXbdmp9jGeWauKiR8uNfSpiMM1s83qNtpACXwqQ2dxX21CbXoBY7g4aMCjh9Ln",
  "key23": "2AREQvp7JRiDctgvEo9sY8rWbABkvvWAfSyckRAJijEtxG2x4EFY2kchkJrUw4qWrTLvgBxxZFYSX7z7CtswXTEc",
  "key24": "2ZKiYQGAyvqwnfb4FkFGbfUVcMaSwJBh84pN7eP2Mv7JJfzGoXAcPLifK3rd8CBFKyc4kkfXKUxhaxKSrpNiVQ7d",
  "key25": "4SeqwoSKfhx46xD5AoZYPzYtuzX2kgZHo4857236uWFY6YUwCRDNK4wvEjcGvKm8ba7Ef9F7Qm7VYQPbjfgxgXT7"
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
