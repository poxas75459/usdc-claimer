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
    "voDb2GJBqY4XzTsuehoFAB8UVRctT95xkxx8wfvfkkmrHeAWoysdNCMxL3EpD1ekE83Wg3z7qazxWtUkNuTvWWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23h1ja4MGBoaAmwKrXuMnoXCWEnMKMB3WiptUa52X5VoF5WD8GtytG5Q72aL1xXWvE8zwMVYVmT9knsS2zYkCfub",
  "key1": "187XnnM3yFQFGmrsvAiFAnwsATnysYn1oob4wnKudW74T13YS9FQ5hfXQzTVbPva2es9S8fgJqeQaPJZtJ14ZK9",
  "key2": "Q4BVUEskjpdtbC8pqrsmtn3f7UWXbW3CPiA2bdZoYEiS5bUDYXg3JHFQSyvn85VoJ1nUMjnGZZDE5hBeVTsFwwT",
  "key3": "3HeZzghFnzKHZd8r8SA62HVtLUTksyUqXNKHdKVoMA7MFhzuMJyLWicTqRvkmXpbFLzzK9Qv72AtqztkxWBGkQCn",
  "key4": "2tZ4zTYDQMNMtNYJtg3eGAVcNDtooN4YztwgyCuuXzc8pUT1TfZj9wfgxwinLggk2neanBq1L6eSfhfYjmFRmLSx",
  "key5": "5ZF9YGYkDrEFM2RkczGFD2y74iMSdkvpeHJR8e6A5LLKqx1WTzudLiFxAU9v5nC7HxzgDyiFNgL1V1xJhHZQxeM",
  "key6": "2j2U8Wwsx16ooV8gYvGLebTXVytaGbgTwdTYyvfEjhmpDrgjU7qDVmvCrE93F3snQNPyUgVRvFtsvZ9x2FNg8gtb",
  "key7": "3DZ1xC72qP243cwMkVYvmUbGHVqdrQEYWh93MNTT6ZfLNBqSoSwmNVRbRx8NB884QFLtsbGGJAALaSstoKJMo5yB",
  "key8": "3kT8ioef7vafevGKoFbWYqzMAFwsaE4uVireGyur9VrphsbX7aovDHBV1VsRVpetQLxei7Ec2BcZn3nFiL5KUqTk",
  "key9": "4iNH5Rj4NNtDsmxpap6qCDw8oM7wWSs1xTFop2wFxu3G2QVzsUjGLXR7qKgRgnnnwkh4ijxqitB2zbp8n3j7zrm8",
  "key10": "2XsRgufLsacgCn9kapr4jQ5Fqpe14UCFYkS1ACy5jv9iHfXeKxCzTz8cFyz1An7Ac1fRcKTbiKsUyUpgGcf1WTUs",
  "key11": "fRJz1UV3M5EZe9c9AszVFnKiix4hZFjFCxLisfABBSur2pHQGpzvUAef9wfjfW6QTCowVYfwPPapoxeYLBKJUPt",
  "key12": "5ZwUqA3VttByuss7Jme5zxdo76cr93TwLLiU5w2fFsun5W3RGu8LdSrXq7TCw3JMCMSQ9FSGK3p721yo8kpN7jgk",
  "key13": "49sh9tRWSuRrWs63EnD7FUD6hithtFUX1rGvZroGaV87gix7QsWu4m61WENJvunB97bVpnbkBv4JbmfGfwYqASHy",
  "key14": "5jPyjpXbnjvEqFUNuEhh5i2CoNfvbgi5LBTrqFj7FarfJfhDU7x69n3VobGSjV4w8eyuSRS3Zz1AZpBMvtrBQT2T",
  "key15": "2xjB12GX1bVBWYMrm4ZCxXvk49g9z5LkHnuT3m9aTozHBvVqJrYagzUx112tJckKh1r89YQwiVKqN1XsdLGjzNDF",
  "key16": "3cDJmefXSYEXNcXdNAYGyhkPBxmzJ8ytoZ5GsQg3FDKkzanxpw4ovZ5nCBniEhsx8pL4vMcnVgPfTQQNREa2xYe3",
  "key17": "5XFVWerAnuxw7D6xKkGmHFGQ6XUor7LSUipugqP22gVfK6dZ4Zn3jXyyfoof6qGMHB7b3YLLWY9GqSur1f6ErXpc",
  "key18": "3wmtJ3RYYwtUxvhCx9tLqU92Ny7f57PdG5HLpBUyugJVg3hPezs7BqZctyku5dAKRJDGZ3GNkfvD1PooxJirk3Zv",
  "key19": "2T5MtU7f9CSELPsjvdeKcQNs8YTPXx7ToAVWqFqkUB5VfEgwFVJttiaNxWEoaJ7SAJiUs6XSwTEqCJaBxKaAgtY5",
  "key20": "G9QUeQExz7DHbsRf1wqXVAZDzhfgkNHnKz5c7dWbmgCGSscSuWynyUPy6Kj5j3AfMztTFhPApE8RgxpRv8ujAom",
  "key21": "33eXvDqeKJvS7nUMTebrDriyAgsG7NHfcnt6Q7oi21LbV21KadWFPVqmSD35oWCKboQ45gw7crA9ph2fv375M7Md",
  "key22": "5vcvcKq7DLgUvCTX1Dw6oBY3us5zuwbnEfYdna4t7YjLPtCkopqnSt78t1GxmxQMRFeuRXxwuhcenQLL8eJPGTnN",
  "key23": "3kLZXfnuGHGiidvGuWM3AkSWtVQu9Ay9NwD7FPJEdcLtr8H9Xf3JygaUZXp5HjtCYFTza8ymVT5BCyJWPw6gVsRb",
  "key24": "2JvFjGVEnMuVQTqkVh1c26BAAut6WD16HVcNFNkvggmEF8FhhCfiNMX1JGoBKZ7dhYAy3xqYKrHxWN92A3nDx2hq",
  "key25": "3PcRVSbyiECVG8NXom3htUX5Uey7bdXoycNheEa9cBRNMnueijikWnmLfadQCjsxRaYAEv1XczgSwwXQL2nZREP8"
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
