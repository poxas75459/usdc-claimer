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
    "2wuxXUch1Gt3Y16d414Ed1fMS7mppXTjQqiA2UchRs1AdLBzBxk98YPaPMjYNoBaFrQYFpbM3aCXF1ok9iX5FHnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47txwT7943SuNMA7Y4RvvjnwZgQPmDwwaUqmE1g3VV5PYXp6ZvFFZAYwZ28TJsKbTjLfHg4qxV22dc54mYVaGGQb",
  "key1": "9jfTBReGPWddRKZBBMvm7sSkoihc9AmrZ3Ak8JdattyxGdu1xGXeGDMp79zeeiUJa5BMoVqTkKoXMc8RJtJfooA",
  "key2": "EfFkwXKDbDgzzjbk2CJyLLGXkAC4JJP1KJ9fThJiZTqtdZamZ581LS5EmTpBMotFk6jHoMpsa3s9t3YMH9bbqJ3",
  "key3": "4ATrELD3b69hB3NCYQSFk4YkRCvDZ22YjSi4wN1DQQEbku2ptzEPhR1V8XyNitrbeT6ePbLBYhSznpScMyUHhQ9h",
  "key4": "5Ki4E2JYy5NnJchaity6q3p88nrpC9nd7Pk7YruJFvFntDSffeKVhnncB2ZmfuYkyCqDfGzErAEXpRUatLsPYAh",
  "key5": "3ACLQz9YGMYoPcE4rNqUQuSpnHjrA2No9hAEigMVfnraEBkBJGSjBhfksLr8vXukFuvFpfCpap4NAo5rRJFA76so",
  "key6": "4iqhGtGpVjf8ZaJMMzbFwoC5onnkmqMHQyM2eTg8WqZ7JV11qnRoMyyJ8BmNJjbb4fiC55MGKfB5EPH4TY33xmrd",
  "key7": "4eAtszDetsW6iKzvLD84PJX29HgQebUz9RdkXzaRkgF6463F5DCM6KgHG3nyTbQELBfXL6AA3MociPpHS8yVbjaw",
  "key8": "65jcadSrTE3KCaTYX7myGteEbCKCV1wQGSk7UsTEnf9tVeXgnG3venvh5tJoLQ398QA6TqmHRtGSC4mkDsnQQqrL",
  "key9": "63u9cn4cLXQ3vVoutCzQjoNRVEK5E4s3XPxkNKwizLFr8TT9ce2RdGi5T1uW7fVNB87KZrNmT6naGAMyEST92mCj",
  "key10": "2mDUj4DND87ecC5bTDm2oh2k55qagCWs876LNXgMpRq6ZnX4Z3bD3Wn6M3fcirkLuF6gBvBeFjQ7FiyVoWLqhVVu",
  "key11": "4qZcMvstCfr1wqsWMuH9dT91cno86G9xs1s6wzmuj9sjVzb6S6eAJK8BhxiKR3fJQBCefi1D1yCweKoGYK7y74QX",
  "key12": "V1awnqqmEgG2aBziGmEF9zzWdHK1kZ2wfrX9fzpNfn57oa5pjYomVU7dJbBgMnJxWV4aBd511icLMJb3ETgxDJ3",
  "key13": "2TC1ZDgqewvY4jq1SkQDxi6LLuYAFg7i2DXsnZg8RdJJnxzAnXmjd5JDdaFgSC2TCfEWttsTHcqrn9uNSVBMdLt4",
  "key14": "5w9pg5BWKfPC8PT59T7utpx9AaVgqU7NgLg3zR2DpH6Uz9AXuT6gu1815EsdF6Qc2yKnXRGmh4T2Hz4HpeZ1KXic",
  "key15": "49ZeM6cEWmMDtSUzePCF3F7DsqtRLtwnqx5AdwLfoV3LnpEc3EZW6dZzgZsAs17iX3Jj7GLturH3wCLH9Ppr46Qg",
  "key16": "oM2RS675HCZskYiUe4NrHiMhSobSyeL2bXbCNs2xPwNjgj6gPPxanamQXnjurbahRoDXLeV6TDa4sRu6Waf8V7b",
  "key17": "4nzMxhLnfxiHjqgSaXrV2CtaNxeKuyFr2HPkiQNS3pNCmjdAvhCVCiuzChiKUAv6ZuLSdyer4UDScGdDXgZEvsL2",
  "key18": "4q3fXLNeediHAZB23NVQjdNi6bDgpirMBRrW1HbzXRFioyJ5RuPxuKHoWHdokY39JouV5v3P7cWRRKoFu2jUXRCX",
  "key19": "2mnkcfKz2TaQmrSsiDqGcUBERSY2W6v6H3kCrwjwdCZqfp2ymFyzKSECx97tkAKzhyZ2EAHectrLf9i9TL3v2UJF",
  "key20": "2KpJ1MXF4JVrYjZEyj8Lau1EexK1o26t1niFCtpCnJac9GXWbNxGbh3fyLr3Xmh4AyCDcefY9DEzGWveM3bxVehD",
  "key21": "2qZ6pMQdBuYuKJ9G9KXSzgJqFuzRVaZ8awthhfPxo4xUjcNafme9fatkeVguvCPXy9v1weHp9C6EYwPgKXnoPS5b",
  "key22": "4UtiTmDhKHiLNDDvqiF74MsZbvzD7NBMWpcZLy4tc9Vq9UDjGrx2vhua8RepL6HwetYpoCUfutCDYZs4YPxQBEne",
  "key23": "2jxv1khFhdt8AdLThkrJvqq9qomBpMST5aeGeLpBb63deEpbF28mXhn3nF7LXJV7nd6aRNiW9GFtCdyujYBLQFNS",
  "key24": "4KqMV5tgcoKgrxDwAVehNtk9k57LYZsEEPoG2J7gRkjkT2fuCJ3EgxWVDFDNVQd1vdR6BkyGu7Bwor4NqZabTJBD",
  "key25": "2HMRJHVpP81kvgooqhyBfBStB5VqBeR1U8TJbgHh1uqVe8eGQSCpizKbgddHqXUgm3z9tBHA7sfbZqanwpdCWLSC",
  "key26": "aMWwMRatsu5ywhZbrAPdJzSrtbPt1qeUc4xiwbh49oaaMSokW59trdP2yYT42tHKmsLc45MkWQeCSfZX2xoy5D5",
  "key27": "5vPP57unaB6XN5ra1GRTPUnE3r51CAKshUnqopCyY4HhcmiMEbR88PrxcGmzExKE7sRhNVJ9uGtVbTMAEAD8XUjZ",
  "key28": "4iChHdpw8wBGT8wW9hYYrnxxrYFFieyqZvnDiNMvD5bYvVKtBzaxx6xxubSTfJDWpxtWHt8RPDG1Yo3awzPMEFQh",
  "key29": "5uuWR2GZW3wVACnGN5tBurPbtZTYGD4C17Z2yYv7bLitZcYugkBWbF9AsgjLG3eBCg9eir9wUaCAT7ZhBDsfVon4",
  "key30": "5Kp59J7Ahx9MeZwNzt6kuD1P8WiXz5DLNbbfTHZZEa4ZrezAC8f6U534uMUEFgnQntFygpUNXhXQ1mm7Te37NVmW"
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
