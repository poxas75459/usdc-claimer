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
    "25Fwhv6ZEiTq9txqSb5k9vy62XfH15k7EjvKaqJ6aKKkNNhHZUHnc2m4p6iyozCDq5y6DGxtXujmaAjqS59ryNEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGq1X6xuZToGrv1Hfis8aRoxr7e12E7y5eikosWtEoz7N3h6zwWj5a2s6pURXPW9p7kc3GTGmbKYzGuf5vRMaKU",
  "key1": "2RN1EAitTZkjTPqM4qAQ35gJ5PxDBnJ7kTfYTmXt7B1gHZv5gBMg2cF8dbTLyxLY9imtfZR7ijuaKGfNjFYHYjgQ",
  "key2": "3EnqkZAu2m6e8WpSy4mj94WQp7RYBd8UjuES1C9gV2r9uQWEAaq3U8CYVYD7GAg6efdEcq1LXniWmpmYfamdt1rZ",
  "key3": "4CYJfggmegpDsvhBULWs5mXgCPB9h72N1vP9HRdESQeRNLg5mpqfnjQuJbejgLVUTP4YAzbPr5Y9ZGeTBm6sHEai",
  "key4": "5Yvx5FSnbf9eyCCYJFtvbw12eHDazm3WJNpSVkigyE1r6sd6xv2rq1PGnX5AD1yWsk99ujnb5Xif89f3axWKBaAT",
  "key5": "qhtyRePDB1TtRx5LaVoSt9Gv5LCFFH74iKQTfLJ84oRp8s41hsacQ1PSBC8mMMct76CaiYtGS5NGQt5CAmVbuz9",
  "key6": "3Gn8Go4APEqDH3Wri2Cn54peR8fb6TbsD4tRRcNJwDgKUioLif1Nkhd4UpmrsNPuuXA3UHSSrE4qBKUUh9JQgfCd",
  "key7": "5WETh1kuKvZbA9T79LZPG75mw6n71Up7Y366SXZPM7x4AXvQzNsR4S88CGHmJ5uUAdbkabFrnxtS3SsstsSgV1xC",
  "key8": "2QeqQirvLAByQMx4iK9WaeccWcBwmnUrWPAjCVXnziV3xmYh9HJW9HWrVXwqZkVUeKBBcNK13tahBBH4XCkPJudK",
  "key9": "4ZrnET7w1X1XtWJFJa3dUf8jAFWGxYuSG6a48KrqPxhyWyMxHf5yfTrqE8L4VZf2Lv6powPcNygwZg5wLjBwbBPs",
  "key10": "44YSb9WH6PuiQZwPHC2bGyzDSxKxZivu8RgNq5gSNq3DyjA7hgn8LqUsA6tkL6jstyawfZS8qi7WuqSLkK9QnW4r",
  "key11": "67GhZvKUCmx8FqTqmCqnLZ1NHix5pQa4KKknnb1KG7ohr3jbutCMU8CLt9nzMi4MWo3sW9DTkue6xrHccdSsriZu",
  "key12": "3viwbT8wEYuPgrPHKhVTYdUNiZxFuSjbDBUAFTqDM9w2spYJC5tnK2WuwKcdnLPAcEypnPdQvfMLUL3ydduUG21h",
  "key13": "5rwjd6TVb49p7QZETuaD8KDEjSCGJzYsmtEPpf24tCbKuFQZPoxbVX74KNJSjRRoPkDB2rA7ANt29disv2dH68GK",
  "key14": "4U9ffTbXomkXMLPM3kpprovzxbZ13dx8WmhmeMCwFSmBbFZ4g1EXUnAd3ghdngRsTcwSKTrEBYLSCwnLXtVewN9C",
  "key15": "2ypE16dy6YQwkgoAZGbFk331N9JDXZZEjCP5kUtnmPXT81ZHyDg9vGrM9ayzZbbaDfJvFU5nv5ghsPayY6L8sVh1",
  "key16": "4MfgMjZHdcHQqasunacvJ6WvYEk3sNMaRwewznkMepTDEbD6sJ4u2RuEkFqsKYvQsCsc9M2mdbmQphmUQzwoDzpf",
  "key17": "4gZrNWpWix3dB6P1fEfHj5R3gUao1XHjjp7HzSWoJkfbC2uPz1gmkuP9voiyF7ts6FTsvALuTaARs8TbhqoAcsT2",
  "key18": "5anNymQtp8kFyRLSC4aezAjC9auH3ZRjmN5GzizJGDtQFdcnKzeqfWPz4fMdrDdqYvyPVu1wxaAZfTJD4jTneC9H",
  "key19": "2gif7k54dsEF4ar6rWaDGUEH2Qi6mmjjTm3hT9u8nHdoRv8hjKMJVmUUmVXwFqZtFdQ54sTXXD5RqL61p37eejBp",
  "key20": "5jwjXd9SrevJrBCxBJfyR1VPJJ2t1Cskmc4uCgb3jQ6QsXA6egt5h37vBiMT1DdARJe8waKp2ME1yyCY6WUqRLPC",
  "key21": "MviUuJMg9hnatHxbXRWs17RfZR99APXV55oxZw1QUSeCUvTMSHRwBRuZVZ5BEVNBtybZjeKSwjTQiYPW4FFMQN7",
  "key22": "3Q6za1sBBCJD9JJiCGpdzTTCgHGqWGcdjk7xG32ARbchzm6dyBah3Zo4FJ3YaoyxGNZdXiL5n9TF9ga4C9oqa7hk",
  "key23": "4yo3U7urNudT6pzWj4TYLLBX5TdvR1r8epd8dx1CwRaoKFB3EB2aaPXSx7X6UH6QWyT4Xx3sQpaAAk8sYhwQd4bc",
  "key24": "657JDRnnqFrhEnSwHxW1ZzdPaFe5y75w9hxestaUPADVgbFAVVGnq5QYsqVR3eun9hrVhSXkRbEBeH1idyVZddTq",
  "key25": "CdekJV4bxzcsrztFakVY6u9NnsLBUVia9xWKbAJAMaSQ7KFkaVBCYoZRHpwNajPoPcEKqRCnXRBocFqQzzxwGns",
  "key26": "3CAjG7MutaUR3XAPdvuHNy2TU6udA3Q2T1FE8GJ3dnJ5L9jbWfA1NbqnbxsqorcDjv9JMYzcs16nd3jvA9osfcqv",
  "key27": "FDrbjh3UAottfCK5Gym3ofTJyE7mdrtmdvF9QYhoY5cAmuMqEkeogpoFnnkGgiThaPPhAYfFgTMRk1JrvvgYKnF",
  "key28": "4SaFbRDwffJfjoCppRmE1q6t5Bs8nX9MFy3Gv81sLp9MPyCsQ6rim7b998C1hkmX9EEJCLB1cPvE1CvKUTtQCKUF",
  "key29": "rx7d9BaYKVvtSko4isP1mf7Zhce2fWvEVrj9xiAJ2n9YNMmN9EHBzsR7bdKYJPcEQSVfzTVAaSENrVEoP8weyEQ",
  "key30": "5mxrygiZGFWMJidKcvJE8QeUjqDzXaRSRJwd5e1qCFWRfVvFYL6J2HK54p4Ub8nvi26s5qPLzqHMV8i75QNSJBfS",
  "key31": "32Qbuqg4NedoLuo25G6zi3bfaaCTPWFJZgZyDYjLpb6rUq7GXwDF36hX49z4KsfuD1hNzoRFpYJrhgmMwzwaRtBi",
  "key32": "4QC44zsw5geDe3KysMJUGoRr9cAoYuRdFxbqm8CE7BhTC1KsH1DgSiaJ3WRMQUEoHndh7suqA4oUxS47ZDaexuuE"
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
