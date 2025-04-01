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
    "59dM1ffzAHp2VxQDudh63rdZdt8o59q5pTKS2h3tdhegMoiShMQvgGNcqq85DPXAWzdj4P3vnGP5vBko41tWFzPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EdtUkdRzy5RTpkbZQ6gdMzE9s8AeJyx4UNU3VhVbwtrd12mCQCton8oVPMoZdDnGSZ8Wrf3eq1vKiYt2YtNPWZ1",
  "key1": "4wcmgi4J989TBkHHCYhU6Km4s7RPUi8fH4jqCSGDQ6SLKw2UFTPGdqfzoKTKYEgR3bSUvX3osSZw5xkZULWWRtyL",
  "key2": "kypLgFNHHKHJoRUzGabjnLa94GggQvwycpeftzpP2jrF7YyjmaLxn3SUinDJ7QH2BjiA8nNUNCEzwPzPK4gXd9E",
  "key3": "5KdWYdYWVxq9gVjwb8oCG4XrPw5FNXqHdhyXWkLW6XiWmPqCQG4svpW8k7Px43bpvURg4gTmVNCD53NXiT2XsQgp",
  "key4": "gLuM3MbLrRRj553YxZCmA5oi3GjRNV6GMfZjCwe7QmNh2tfLQSUCRCAEQSTtFEBhrxdp4sdYVLy7i8rEVKVSWo4",
  "key5": "3UVbLWt9bRjDQwJqXSVz9QTfRCiGcfTCzdYbvqDvAu8ZCRA1jbXQjnSkrxaoyBcwDecFs6FUYdoLRsg18KhH3QSr",
  "key6": "2DkUtm9YvxAeNJ4wxRs4wcGyi9SZaQ4A2mKp1wCaHMvrvjtdRY79jj3FSRAY2LajCSDbxdLrXmuM5QtH8z3SSHD4",
  "key7": "4aUnV53aNJ4KDjsZDHKspW4Zmh8efC6GqAeF7h8kHMPRFZtBsNfVNY2BLUBgmtJ9nYVwcnZHcYy5LnZMGGbkTs7R",
  "key8": "27oZjdW7vjTrsU4BwUHM2kcXWV57uKhVRGqBZCehZMQMhzSvZz1ri2Pb7naZsmPWgrKoawvQZQf4T6eVtsL5Uubd",
  "key9": "2BwDEPfZeAXfZXPMLH17Sq2a5fmBRWmz1qP2KrQbJ9miXMxLpTdT8AZvF1wqQE6XRKw1aFaGvAkhEhb6xQPor8sZ",
  "key10": "24qoMKmKJrdpjys8sayUcKkxbWrtyiqu9Z6ihZvUVApqjYppVs9E8WTcDXXNsEUcr39cbWnfpuoNTcmio5W5PVCq",
  "key11": "5vG1z6DZrq54uWc59obf3o6T9HCs3Gq6Z2FpxgCeP6WCEiTPkQ42WVHMPGkS4cyP6xcbsZEidP8Dq12xEPfGsxrY",
  "key12": "2CubsEyXy3wBabt9u1Lgw75cSeipcPcWUim7icEcmmx6TnosoKDyABNEDNM42CXjF6YZnAWADrAmQDv4mFop4uVE",
  "key13": "57PDxZGcRitkuvAKj4dZpGH7kpexiwR5tSpT4vNePuAoBDgeGyFp2hwGUL18fnKyMNTVEazpmok4K3XCSPqj3x4y",
  "key14": "678emgDR6RAbbXypteBM5NZiRkZduBnEt94zUQFE3ghCZ4VxWjV47LuEYKYrwEqYgjwfaJkn87prHKJNwk84uGGG",
  "key15": "5ZfohYA1fBB76DZbcwFvo2yWrzwPAn6pfLn2rgWbHfoLj6auJLkSYUrTTWVvsgkQThhpyVGbqAmez98CSLcXw9cE",
  "key16": "MiNFZWLL5yTwFUnK2kfxmjTuLx4ZPJMpFeb7dkQEUhec7oKuxfgqGULj9xJwovJDUZCZUezHsK8cTJJMbLULQXc",
  "key17": "4MULSh7LquAteoetYqF2YUc9H7uyUp7oULxL4RdsFYeCukUNC1TQyFPE7tDZLoH4x7ZLCMzDFQEGmSX1bryzKnnk",
  "key18": "2aFbNW4ZKj8dadpXeYMJNqyEh89sLZPBTAfXvVJAPSmi8bJkBvQLiayB9FU2The7HDoDWVQbvG5P51V7oiqwdNjC",
  "key19": "48oeucRptqqFdkkY6dheMv9PTz6mnVX5mVnreMNMqZtL3yCqrSfHapKDK7jWF25NusM9cvqF8x9U7SDYJyDvHnU4",
  "key20": "5hynbwuJPDFLZUBzXTxCGKf68Ke54fdq1uCGDpuJVa73GZUpaWT6vPUJJwEa2nVBvoUREgEDZviyZArF3hJRQ3fg",
  "key21": "2B1KTLz2Ra1zjBMnUQevzF3aCdWZnEPUFUGUHietLkoPsisNao4g6PthhiRPyucSwwDP1HEhbg1WBZCAaZErxnwr",
  "key22": "2o4bhif3bJxYTDiTYJQHedNgLdpZrPWPkTe3Hv2E9xXgTvzo9xGYWNu7hBUZQ4icymfBwHeExR8eD7MfpuE1PW2V",
  "key23": "5Z4SRfScAQ7VFRMwuhZ4Wh7FJxp9Apb8m6uYEX42TUSCvD6C4ES2rYdyyv7zn8ZG7DcumtRX9EhaybMqrKSfN9Ni",
  "key24": "3Kp2rta2h7zjVSDTdrLEhtZrT3nAcAgDqyr7zukhcfBY3vHBUJAkACmpYq69ctMHxcio48gjQgApRC2tTFjCMTZ7",
  "key25": "2rdtWn9zPeuu2sE3bwQeV8ZZBc3d3cSShEULTZscYQ7eSUArH9hZ2CuyYWPdn9cZPLnCkN1uCjVPSdcQQHJvYhX6",
  "key26": "63kEMWoLEfxBywkJtskoSR5S67FrZED9rC2oXLRmhMAY9rW5ykLNy3CTP9xj87ZFxvKQUvnEAPou5x4DxThpVV5W"
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
