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
    "3rhDrUWW9sXdxKgzgiC9wSE88qkXo2YT1Jkk3PLgXcPLdterKkXAUhKWnUqkGGSMKDLxwNMrCCmCU6pE9S47h2nv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7yYMHBtccvkjJnVQhdbJ2gksmGRMgnu5o7CBPPyzin8bhXpzGYqf3Lxc8wUCS2XYiTSAQ5yrD61pGDQRAaVSfdK",
  "key1": "67MEh4vYEiz1VQcbH8MKBJZV4E19kaWsYDeTDTAX2W8U34SCcMgh6R3nN9ynqGt4SiZbe2NwL7YJauh4LD4MQ4wR",
  "key2": "qyM1bfTgR3Uu99565dYzpt5ApqbKc4Gk2GnUha4LHXq7EE7ypUVHXHwnGHTVWkDHUm3fuwZ21FgQYbuVFKfTgvm",
  "key3": "rjhbM8eu5paH1MqSxk9XdSWx81djZBnZvxctJd2323w9TypgA4GuXW9cWoP3wyNmEdhFsbinKANszbWGurdPVBB",
  "key4": "gMZY4FTKhHbLPLyxjRswJqi7nsQu7ZBXnp7tegiJP2aLycDPmcXxrcGn83NHca7vPFJLy1sSPY8U5GRUCn1J5ed",
  "key5": "2p6ng9L5fnTMeJzrxYBY5EpbVQLKQ6gFWmWfC2c2W4JFCc9uU9sHuAFQmp2nmgXKKyDdmzV7NU92ijWHKgyk3ww6",
  "key6": "2LZ6LD2Nr4kyRDFE1ZsLEm81cComyCqDTzwSQ97NxRCTARbL5AoWAS7hLaoNb4A4HRaYyR2GgVVNX1XL7rk9Sica",
  "key7": "W917LbTnMrwpSX6CFeq9yyr9z7pco7QbTVAdHZed3kCFvgDbTVnrFeqdEYQVspQqFqNxgGvy3Df9cR4Xc7cRG1j",
  "key8": "2ekMtEashQ9HFdZhxwrPvynzP9ziWLbUYteqrMZzMw45c3MKxHWBg2ebsADwiFsHvHWzDFdjA6G1mSNbYwQKufWD",
  "key9": "5vSjkcKUUH7TZjq643zBaoe2ZpnAzJ7bVnYABqmrBY8YDE1buAKdweLsgCRBg9xZVSETFKtvVt665pwdkEXomK2a",
  "key10": "3BhcR5rQ8xnvkzXankspwoWvAtcuSQGjpf3Vom3zT6ns1GV2qqRsU5UDcXFT8WLZtJCrWZo3MtrvPgimfxctFPk8",
  "key11": "3RrKzGWyqXZwBgQV6Gd1HJiu3V1YUSZWrKKUsq8NB7vcUJm1M9GzV7E5cmyqxG617yVTfzt4BGcaEWZxq5JJMwR3",
  "key12": "2DC9utaKj9Fvse6xPk2gEJohsdLKr7JcWA2Ho3SNd6vBXsoKTjSpgDqvEdeKYWbpHxCK5qNaKPSBuMqTcsmKVTYM",
  "key13": "3t6NDtCFP6njXnPashFqckauKYRLzDH67VRn7sL5JGDBQtQ3PwGUzEYYDxzfywpzDn88tVFN4NDA1FRVnvgrdbXW",
  "key14": "5THHb8J58out8hjSMCUG7KnS98xM1PkaMaX6AJYh9HNKJZjjvDmzosD7bS267k6M3KVjTLb8rWCiSNV5LbNgV36b",
  "key15": "7xcotPjJHB8uNLZFpwxVVbfNyA4gb6JBP3bgatazQWpyBFgUvEGjcZEeerzhG3RFBPRoPeRuZ3VL662mhpLepVk",
  "key16": "3NQiFSr5vn2Hbms1iAmFDX3R9t6ZmHgozjPyRsqU88oDXucfpXH91RzbrqheU6fWUWfJBmDimQS7chBnNy4vEAWk",
  "key17": "5BCcL3nPMVazcQUvx4bEDHrR8zoxSAXNKP2iWVNcsaE1psMUzv8ngBoftwar1erYX7EUXBkMvGPRgJwBtxjsZiAK",
  "key18": "fUkJch3C55tpbKRaMBN1WnWXayBqaqM8r9VYd2jWps3SCzH18h4TN7xvh3B4i7VT6rqVXcAgo4cd4eQMi6FMVSD",
  "key19": "3MPpfTq5FbVQ7yGq37MdNsuMYjTiv1gQ88TLSWKbQrspHjVDnukD5cjz5CJXmyQp5yfNUsuyzN7gnoU2pHJPmGoC",
  "key20": "3bb13YrLkv4XkVemzUCNva4x4QJRDQx64hJ29vuyKAwxbrJoZHWrUELas886izo5nmVk5yD77n4cdfFz4vQpaLcN",
  "key21": "4i9GSuYRLoMuphLgT1BuFGCx7JKnaPFmTAbXprbAjJecmYaJ4YuVoWjLLBEMCdQsj3zuCy1iRqekh1d93yCxbxbT",
  "key22": "2YLM3wrVQmiCDQqJPvwbF87VSXZQFixYRfDx6PXtiqxFoJwRCveQ7ENKRmUSfz7Bfq158MnzZhUi6ex1pc2SouHH",
  "key23": "5b24ypu5wLQ9DqH9KEM3HypmYhuobPCFDdwLSTBrBACXe4TFFmW6x1Mde3nHbvQejCuEjYoUJsgqSHjNQNVw37LK",
  "key24": "D9XVsFQR7cbyXv9NPxnLaCVoXj46KgygxpR3XzNnW1dSmLEL5PiZbUS4ZhtT9k9rA8qMPXZrfrMJrJdLZBZCrms",
  "key25": "2QWUYGEoeJyVtWKU4uPKWMuvExB8cwd3VqfnCVUh82YDdVjpTRRd174Mmw5s8cNA7zvymqCKrDVHfkpGNNnrW6V8",
  "key26": "EGMZBesRZk3pRXNhd8d3vwQUBb9T9HFi8jj3kmxCHFksSgMRF9EScq3A2atSBt67Twpe9Ziob7xv55WXQAtKZKH",
  "key27": "9RdZLovxyAB1WkH2ZsKTnSezhAV1irnMq1XECXzdR28yRBB1DNvCzVbJYtZPFU5xKRSZjzF1BWtrnDf4beNHq5G",
  "key28": "aVt8dqjcvipycoLyoBLc2dCR4bpoihEz65PJ1G492CsvX1dp7Msxs3AewwtzySAEoKKccEiDGWSKm7MB7yQCzAK"
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
