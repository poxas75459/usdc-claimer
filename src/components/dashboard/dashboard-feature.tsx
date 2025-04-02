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
    "3LuQqnHFdmXfT2NJsw2qkuvnJJpsZL22314GDCpnGUXngLPfMqpxmBEa384UfNctPsUz51o9RT6y1rKbwDAtCqW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xP54kcTZnvJcPWJBNZiH95idb3v11V5AgUnQsBCBPRsSsANBLr9QqViNmYmf6mmbWfAedAVBKp5UB8g9b4hQNnq",
  "key1": "629q5xEguJcxsoU6GdE9MYnVHeuBbs9Ae2v5Mfy7bTQ69s8ZcJFCvc53YHxd7rUKjstwCp7xkDN3ZU9cvas9PGVa",
  "key2": "2nwv6EtUnNPo1W5SKB8NGK61g91LxbCK7sAsudHKfEWRFFvcS2E5gKMexBejXT3bpbu3UbR2gPzEivzKJor3nxTX",
  "key3": "5BhMwknUjSzNcv34wUQrefJGTGrpkkk5bC4ZRPpH5ZS5pmLTNjKw9voYLSHGSsohMdgTcG6APWa3drHuT4KrLz3b",
  "key4": "5MvGcvLtr7PW8NgatEJT9c4YCqMbBURsevAwjyUdzT17Ufo2s2pTwAJND4ubf1R7BpAS9SGYKnwkMyneeHaf7vaK",
  "key5": "UbeomfJfqKZfyLbSwHdT6AiJPNNzrDyo2bKehk8ZJ16myrUz83oD16EawBVKmKA2tuYsN6mBrSTYpqyJqxfFT5w",
  "key6": "27T5GY6qYfJR1nEwBU11AevB1T91TD4JDBUfh24yywbAsHk1KrcUcYaVST34v2wrdqmfmdG3GnyATMwy2zUpsKdU",
  "key7": "2yWzHqaEdVezPPE6YEZG86PKA3g42L2bLRgU2zgBSbSKvst68uTXYkYbgvLpZinzD2ShBqrz1dXwen7hk1Qh9xjv",
  "key8": "3zviQwDfkh3c2FrS9uqu8jyb5imxeav8RaCio3j3YidVJycot5kGfYHQxWBkzbowQDjEsfaDFQmnJ1dnKW12vZVs",
  "key9": "3ZBmvmpcHpiT9PYofGs7LcGGUauJvpP1G9UpAhTxAzZHoHfcv7X1JfDexgzmESLjzDLToVvNo6me3Uz3daVC68mw",
  "key10": "4Te9uDrUzdoEhAQFVhbUxSDp66VzyUn8FW58y2uoj4Ckw2xqXTzjCatKxDdiTqzvVW6pkSiYg1TFJnnahGN83urT",
  "key11": "3CpPqb5Cza4NgiZRnbczosRjAZJNxrHZAyqvTwctpqEeDAhgjCEBEuUeHmUp7QncZJUgYG1sQC5wX2pCsV37w3Fm",
  "key12": "2N6BiMSfn9ctFi5PifLcP2dFBhLNaNU5Xf2gejpgYFVd7WBch4pRYKAzEttzYrAkjUTc67GtTzweVAkkf3xKjGtV",
  "key13": "2U1NTmKkAmdtv6zZLHH1HryTk4QpwDko3TxkZUTdmUx3VvqmXZLLEd29vDKDSeZ3TNG5ss8dhYnuhAx6K7YGdoth",
  "key14": "4fwZeSFmSmeb3eNenhed8mEpj3MUMpHGY7R99StpFgfyuK6YXnxsV4fQb1F1Mrri3zhCHT3ddEsjxCKjFpba7YWy",
  "key15": "4KhCHrLUVwqZDeExjQDpBmNdRkuTZxaa3N7Jrt6JELZ82mT1mcWhDR9cUbVZgzMBhB6nYLFgb8492FexPgTEkZq2",
  "key16": "61KbWfPBp1eBSoPwPbbfM6t81wzQTRJqtVMfNMxGzZ4vLCt71AQgMq44cLx4jY6Mherz8NJMAc86BjfUd3A327Gx",
  "key17": "5GPkNgePLo4KxPXdBNqBvh4EKpK1PzdWCuFDBJ8Nqn6K1P1M1Bh6Rcn65P1gtSHVg4SWQNTcWXji7C1KgxMf3WVe",
  "key18": "44hvycgZSReRF2vh7Qrw6JmFepGjE5EMerEAufjYrAXVzQ6o96Xh2PG7or4Nh81eRWfitj3NNC5B9dQmpmSf8sg1",
  "key19": "UdRYyLBo2Y8Yqh87B77dW6GfxHSzMTPSw2tcrRs7oGhkmVcaEjq3oaQ23NaPiSpgaaBZUKCmP5vTFMswJDQ3JZS",
  "key20": "zjT1uGsNsYkgP9HzAQoWJGSvmmAVRcPdx9D73MqxBERr8A4BdGTSbEVTzEyfYRptiSnYs1mHx3VUmueiSdM3Sec",
  "key21": "3sRUJ8xbYab356CBrvqhrSkdEMXPtcpk3Lpb3dLkMUXKPuu1iBYPzVX5VCpnbPq3Hz1HqVTCZBCJ4MGueemYeWMV",
  "key22": "hF1v1VPS4NiL8req9H2Pgsv62kM6EvuhyQpsjRQUJ9wNhH6XMZ9LDZ5QhLqSpRmDihJib8s2AJ8pt84t9EpazPj",
  "key23": "48uq9AXcwEovT9XnYfGnV3Q1n6KWAFaCRYckdUcbJTNUv4WaPLqZmGjzvqLpee2GtWA7dBzKqwmFVhumcHVeJfU9",
  "key24": "3kJA4iNjV6syCGs2FXzU2u6yv43iZY7SjiqXUYQGSaJeBGheKv6bwGfarwgYHJvaQzPzwN2REWJYYVFyh5uaLgft",
  "key25": "FvatfrFFSiWkXvCbZtfZvJowzNaXZkkfj577NTmDCvN7Mb1BXyTFuSjDuDUGtizKdfMfh6H3QFBvrHV9r8E1vRU",
  "key26": "5ZwoTW7a7vjYp67vuVkP4WdExQuNFRENzEd14589CeT4AWYyCR7BxKfoSM4GeK1xRVFzuGAaEU39hT1JZ8jTzjmY",
  "key27": "2y9UQw9nQJ25dCfp3moSoX2nYfSr98syZzHJeA6TJYFCv9DDhDX8ZdsWV7SvGuFShBb5NWgyfBSyaE8qQDoJyJAy",
  "key28": "2NYCxFMrZbyCmoAzBZAchUXBPPg8qiMcAwuvHaHpSmRt88Kvo5EBfaDvMpmBSqBJhaXdDyyEA62TvSBo7EdcKJq1"
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
