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
    "2zSSb4YmTVmqYWPDeqf8uExKqXVLj7h2FhLZuvFXLsynTHoQbWnVQRXBxK6K6CRfAmFHDox5GFk8o6z4z9GPWf4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sJKuMQ94dUgEYLHizhzXrDR93D5J3jrqURwupTqYu2drLVGyajpTLpju8WkFYp86qZZUEqXThijV9pBw91xWssx",
  "key1": "5WdMLgg1Btr82aDBf26FvKt5TLnkgS8iw2vq2h417ZrqVgo1tykJgw3En92dvb9X37z5EWjQD16QoPQrF4ydZz1G",
  "key2": "2bQ1Tgue38zc2KDFWHnbHNhYJ99BSZGJVPnjd4mphMw3vpo5JoVBE34FWJiJLw8tj5e2FTC5Jd35rZq6qdWUDG3x",
  "key3": "5Y44PCbS34uznGj1sKfJx7LMGpntvzV8eGwSaFFMAjua55sSzXeABrm2qGqLefbiaQ8GKQxkgy7cLnrXHLuMw5dX",
  "key4": "27iYxmvksTHv9zC7R588afeAtez4Q48DY4CX17Wb5RHjw3CCb8FzeaX1tnwZ7ubfhN9kJrt3KoYy6ULrs5iQEaeS",
  "key5": "3e5WhPGF6y3LjMZuZW8vxfXKq5ZVbfFiyn2FN4hvdu6vhJAyjfCC69m59W1GQBwT7yk6tjyDcxt1o97QLV5t6D65",
  "key6": "KWpnqTfSLMhFmxEbiQM5ZCLtTvGhFvk7h4EuAADdupPNkdhWHiQZDxgYSKPDffnxfDUKxxMsEH8XwQn33xaET1y",
  "key7": "2RXHcKc1mHxWXiBtDiq9idPRVUPGRoDc1HKGkDCLtcmLCWUPR99j95d9CaGAFeKHNyA67Pm4Cx9exWWyVVFj8MuV",
  "key8": "4286t6EMVSukhwaiQY6v8yx7785YvY3K1vq7md1oBVpc8DrMQyNzWiSj5SnxTSoABDiGMk9VentfpQ2e7eYUve9d",
  "key9": "qErKFSTcJut14Zsi5SubSGWhyPKdVB6JCetWvUb59JEpS5rCUFfpYhEXLUaZJmFrTqrWeo72b47xjhEJuejcnYa",
  "key10": "4RKKsXDwLEeJGBg2vmCjck7HHutG9Jkha5StC1Sv1soY4hmpY9EFaoGiLtBviCrWsokfnDb8PkUJMoZKAYuc6Ft2",
  "key11": "2eJLG7Zs7prnmFP1BNtFMqBb9vrHnK99ymWbWXBLHX2cHvheTQbehDv6mRDN3GQTr3ZMSCoUa1se3V5neyfihpK1",
  "key12": "2ggMoBYW9Ai1oZb3Hk9BWDQts9SaqB8dWAUiTzeFormSch2oFpheiDrFCXpdV51JNMVwjhCMuqrBBB94soguTMYw",
  "key13": "3dfh3tmTde7sRD3jgswthjrjJsUn8c1d3HkEX2tdZW494hjfYoqyBz8BFjpsgLxt1tTSqStfah9FvnmY8URw8u5e",
  "key14": "365yq5uZn2Gv83wFS4exC6m4WjczwWo1LiT9KGVo8C49Ho7G8URFnsxj8qW5G7SNLx7LSXZJvaA8ameKCpT3BjN1",
  "key15": "VN3qnHpTPskvdbSLBedyxqjbt7qXgdTkqAss5TvNMR8vd351MiSpvVVPsgq3khdQ5ERcW9usBjhtNSNvt7X3XVo",
  "key16": "67JA5xWJKbqFbrVGKEqsDXmwt2qgZewUv576f871hZQgu3r6ye1reDu4zU71KSqjnrD9Kwkzp9HcxjfUyG8zPTZb",
  "key17": "2aaXt8ny2X1KFQB82kiChZvzHpeUsXZ5CFaFjmCzSdnC1w3K3jx3xn6TP9J3hTXCb4TeQr9H9exRJjdGuVfMJaFq",
  "key18": "kQkmPM5dCNCm2ghzB6GLLiWyTqL6x9bokZzGPX7yg6A7ncS8t8vsGFUzPKJerrmzqKxoQdHH8a9Gi7oahNso3SQ",
  "key19": "3Yj5VLkPwYmRu7hQvHbF4Jm7V7t3LYcfWWMMLEazzNuY2vUwXcJ9rANmd1creLEAGdKSDcVgnTuiMJ44qzMrEKjh",
  "key20": "275Jt4Ndvjp5YM1TewMrCSM32zdLTh9Qv7wfbVuYYuRoggRHvjMghM1dGde7mVWxBGLWX66eVtepsuAHgwDQm2UW",
  "key21": "3eTuJ1217bwDv4eZTUnMrVhFx935ZDDqnhgDJ7Egde3yRjRjLu643v5LkiaQHXH5qvWgGDQ4czVBi1LfuqFHarC2",
  "key22": "4TZ4AxMWsb7yMGzcKrigTcEASPBvT5uVupcNcteuaENKzGU1d6S9SNF8Ai16Ls7ZLe5792CcJrNw8tvBiNA6aQwM",
  "key23": "2reCb6J2tA4gZxgUozm5Qf95PbLxNLxghaKsswwuQ6citHT9WJMT75LMkDmHNUmUdd4wS37aPxmRv7j5Muf88as9",
  "key24": "5UdVUUHAMxHeMewWZcnZzNP7G68CxwovDYEDRdYUxzfhpCZNqMQpctjWmNs9goDvJcQx4Dp2FJ6cfuSDk2eZSXeB",
  "key25": "TkcwBmxER5Pc75ph2ZkLycdmFTLtwDBzkwic7ANymwYnW7z2F3btL8AATavcokEPnuddT69qnAFTa1sTvUxQVrn",
  "key26": "3oGAtdfmfRbuJLXLehABjP4EC6WdUbb97aKauSRNXwL6rqnxhZ4PXor8Gosq59qeebpzhtCPXyQ1TXxupCEBMw8r",
  "key27": "3dSrcmTEcMNvwxjtophxp7SGMah3jq2vPNnrVaBxF9StHfxWdkZPbd8dZgWn3kFerRMYM49XFuhA4cEF4H1Q8QYc",
  "key28": "5BcRefpJr9xgk8RRaBe45hxaH9DxvfhFqo8JDg6RPikPwLWdU9J5gQdhebCzV5f9mbYPULTRAZZx3RewcL3Sd6iG",
  "key29": "2txbognuEXqu72ibKGqxYQEKFzaKWhQYCHge4aVP99MZTCqbB7pPVHhQjYx1LmFSRMSnTZWTBQEp8M3ifuxDm19p",
  "key30": "4c7bwNDfcoivxTHjbNC7PPxnKf5mqKw4ya93RWq6kxuP5eQC8rkRW4AbBErmaqVw8ga1gPN4Are3p2wTW3ZhcqGW",
  "key31": "4QVGaurk5U4xcAEoS7wXrEanqnJyrQk6GuhZu5EbJmshW6XUiC4vC6Uumbd3NPRn3csn2SHdaKR4gVzrHas1pBv3"
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
