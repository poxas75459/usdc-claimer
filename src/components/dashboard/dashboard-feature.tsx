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
    "3T4WW2uFAUxzDzCRyDACaWLLMX1889xtKExYCDCSBXtPgFSfXvAkRLUPLvth8HeoDaazZaheySAZR5aqDWtXJtZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mCbXjyqRa4e7tibPiPcziEnN6m7EHE2XvAXrqtQTX2AYqs4fUt5Kw4iNeBek3vBKKXFPYtQSrDheN1AaFPrgzTe",
  "key1": "2mS7bvEq7Z6cX1WGk4D55deRAJ18tYm2xzgwYvYkXYLGoMwvEBUbMjXZwqZFF1z1RTfCs7CDD4tabreiQsUdL12Q",
  "key2": "4JsaKQwAXDPUj8DwarU19UibP68k9kdijwRPh2tCJFmgDNFegYzfCBsFSdLwW1sbJ7Pq9sK1DDASoJ5ZR1ZY3edt",
  "key3": "sy6cfZgkRryYMq4sy2yVcEnEM9kUN4UBVcs7EGwJPdkCSs4bpz8xX979jEbJYijj6fbA9MiKxvKtPcLQHrREU4W",
  "key4": "5EkTvzyLc8NbnVZaB6un2ezVorcf9XbDtaH3jHrTBynBJgLU1mpGHnUBoSzwdsoD2QrNYWRw8B3GafnkdDasAakr",
  "key5": "53ECLsNccD3wZCwdciYAS1wcZX7dSW97UQkGfegqjaKF2FFVDL1DGeDxZUWxDBfxB24Wtho5dQvD1aY6HnKubJsV",
  "key6": "24SB8kj3yxMXAPLDimG8XwLfzHDaZ8Y6dtQzURZpbweq23di5igF3TYu7RQK6Kcz14Bd32wL62nKnJ9r2U3KwzVG",
  "key7": "9NpfcQtZrYnaRqtkFy5We2xKGnsGQEcc2TVEaE49wRng27yUBExJRvoq6wRTNtC3ZXYpqmGpee4cZrBTW7cTQfm",
  "key8": "4xTt64SLXokeCLCDZG55G3Rva9faq6xCPcovuPkhhoQ2G9s74d6xetB2NjAqACdRK2B2U8XeteeNo5JNxeYEHNRu",
  "key9": "4TN9XKRTrm8GtcgY87PTppAfyqpnNofSWMKCYNu539EM7vEGSxpWkaKr1EwKVeMYu8bFdADqXRp1dcpEhvcwvvQT",
  "key10": "2Ec2Mw3iuQUQQrKNa8kNyiCTg6VHBfDpsocJrdR6anDCPEJH2dvjmTWjsCsBkTxwBe6QrEJ8GciPis9pgXf2QJWC",
  "key11": "2S1UR6Gav4zjwEyy7REbP3Zw7act4aKenQUk1peQnx9LimkRdXTzDYxbG4MgxgPJg4hSwZ7X2V9NTMAW9hZUuJ4n",
  "key12": "4fbEAK3eChyQFsk2FzWSGp5NTpdVGayKJmtT7vuTK7AQc8TFPVke5sHfmf1fSQaDnD2VRRmSpMq4DG3Vn6n97jqH",
  "key13": "Kr4HqCa9PtuyjSMqgsQfJrjrYfwJHX45y6cc7cAARgFbmRuJtT3LNhXJDmZDjZk5iRAvFWFtX2iGkxMgfNiAA56",
  "key14": "3zhrYpbS1QrUafW7n6VnjHRy6x6rL5YX3U6aYFpewSZzVYPatf1VcC2RGNf3dWNZXWeT6u5A5B2hhdSSmC4CiqEr",
  "key15": "63L7m4yDBCCEB8WFWztuvNhnLY5S8kU7tyQCjSes8yJzCsfXcjHu9H3JiVNmQqpDMcVR6EEPcrMYrjHS3PSyq6Lq",
  "key16": "5etEfsivn2ic9a81Hh98CZRghANHnWK5PgCedE29JXKWn1gdc21Ajc5VJf6U5eVPdHuXXttZBPNJkmkFsLEZ57At",
  "key17": "4xDvD6A9rAXJwfH8BzdpiPRTbZpqYV5BwfYS9uJqnVT28AAzXwLNo46HqSNFahx1CvZ1gzTLxHTzSReXYD74S8qa",
  "key18": "4Wx5h3Q1tNVro7j2cs4GbM8V6C58sXm53ysVYTAoQ7rSJf3xTY6BTySNSYw2qpmzTkXMv1Aw53bVW3Lan8snZ7Di",
  "key19": "3LGbimGDc1mm5DsQcv254ukJEb9hj4iTjejR3XvLyUhTZahyfJ3GHP7TrEFzHLBRKeWtupZEcKbySQM21hAtAsmq",
  "key20": "4zWJA1cmgZAjfuu2a4wMgMndLNxK5Mu9EwtNtHSeKn2eu8PKnydz6sxNsjTeNQ1Nu7ZZ6gkkwdXdo7v7aJ7fBYT5",
  "key21": "23kHan5uW9vXmVn1ZXdyd9vHgRFFw2scEZPfUHQ8zezGpQmrx5ca7xBgAf3vWEfgphiQZqV4BTyRvaQcjzE6mt4y",
  "key22": "3a8zLaEZeaGhGX2LD518Ti2B8XEsrerR6cGuVGLXhj8N1g1dTvb7CHEjkbcVRWhNQMZwuVWksp8cm3MWPkKP65g6",
  "key23": "FVvsZpWMTsXcm79Qvcgyp3ov2hdhSduQRyAQZ9n1fHfPRD8jDyLARcQfSVHp1LGEnTpVveRGRfo9ji1oWGVs9B7",
  "key24": "599fgt1QbnRucLvKP4NeuAUzUhex1dGV7eacdGKNh7X1fbsczAA5xdxdrisi7yvWX84cd4U96t6nzzWt6NTCBoun",
  "key25": "4WZEi6LLuNDhX6AGJC325RHkBEtDNuyE1XnNoLEYALrswDD5H2QaFBLjxbYbbKwSSaVDQhUBrFoqRFuWQfjFqssr",
  "key26": "52UwxEftKribVVav4JxqLSo3JnH8UjKwb1rWNVojTSU2aK1TM59FM2D82e1vcezgqrL6LgtiUqXL4bBSWjwCQhvh",
  "key27": "3VJfgfZLUTFY9AqwNw6KiuSvasUfh66tfs1Rk6J3Y3mihxiZjamP1wHKtddwE2hdXkrm3fVJ2pq9YPeYqAzrvzkh",
  "key28": "5wKzfXaaozGTgtWG7NNcQoLhaaJN3K6p2bX85oPkYLLx1xv1cfh6aAEdmNrJ7kkXNKP2L5WPqFFUnkzPJ4ykU448"
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
