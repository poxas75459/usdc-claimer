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
    "5CxCW3hBJgTfqZwKbWtpsTJjVfccUB5PGFzxhZzFDxLCjzgKGBRmN9C6iidPZgp32vP39aBE1vNRsXsLW2sGqx7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z6AvJNXMYshXj7GrtNQEi78LBqPQEDZD7VYTC4McpQfi9yPCyb89TJd7fZy37hN13HwM3ic9rWzuNrSKEiifBxf",
  "key1": "3GspiutXhsnumnt3HYgUK1b5e5sWY2jtZYD7krjNSK1ht4nS3s9rTx4yd3Kmx4GLmiSKqLtXFpRwycUzFUkueyK3",
  "key2": "2EA2zidVomBadmrfugougm2C26RVEBWn3XUEzwweix5tAgzHAeFFZFqUf4Ez1q7N4xMf4ohVuVEsdRwwDZYvBxRt",
  "key3": "5ytknTVJUQsFbf4QtSufWUMAJfrFx1fnnPZQFzH13yWsHvvRB7A6hyrbLHctVPoXW273HDoA7U6RewCwxwg5s1U9",
  "key4": "5HKE1rRG7WUdaoKSDUJU9QL9RvLQJCssdMgXuA1jCSFN8xirjY3ZgMjGmSyhBgk25rz2iYpeRcCHQM8BDDc811Uc",
  "key5": "45iaMqUnbMBypyoj7kEV3V3dmuXnq84KxukfZpXmeMEoNrUX2GNT8hH3gJKcu3toMxGtH9LoQYQ8woMEAmsQEFqD",
  "key6": "g8XRTh2BVAcHJiKtkVq1ESLSQVPjfWk54e4H1oWMMLWxVa6SMj2EnrxpjjwBPoAbCQMJsQCjwq7LnU5mygUPnEQ",
  "key7": "5AfPG6pAGYsReBeXi4Wz3s1dKYwV5BFRFbdEMWKQifmwafN4j4PFp9c3UyCzKtvh5Hy932PxJsfx7q3vSrgMdzx7",
  "key8": "4H5HXDDYohW7s8brsFUUmJKNybfRNpD1BvXCiLjENFTASDM9wzuHVWEYbJChjJykPfbqUUQ8PXTyC6WNfZZAScWi",
  "key9": "5v9dxHK8oTBLXhCZxeGxLmT4VxynACxaXpw7UBGoD8zdT8N9KsLm8CiVfdRdGbHu3GwaGUnwMpjPCZwtNguXoneg",
  "key10": "2pgWRFR28Bzd3QkbF5b6mqqkhHUTNReKQFBPg9bRdCRMwMdYJSFAXfsJVKNFFPHZNzb6KRuEDQVAhQPQntUVWxqY",
  "key11": "dcMoyD32gx2sADyHKM8rUoByZkrfsxYaN1mNToFaNTiui1w5xVLQmg3Ep78dnQGW3Rt788gGFwcTc4LFNz6LtMV",
  "key12": "wfxvqoijqHBqtVpG5rXU4ExAEvnXC4zCUm368w3nRZybg6noknDRqPF3kgyRfbvZjDxBLoeQCWtaPgRjruPF8DA",
  "key13": "2XhUQ2jnRt3QGLze2QX61tXhgEsycMKwYdFKcyWwD7jWWCTR1BsZUg1rC9pdH5vBfSWYgCBjZLUSdCYn7q8AVygf",
  "key14": "41GkMwAaqVZ8Hs9MWgxBZBLyGSChhwXq68gqhUBXVmgXkD8YcCrgGLvVmuR3wmTKzDRHN8E2iSx7XJWTSB2ehJjK",
  "key15": "5s6HfTZtCnL8B4QbNphzwUTxvab6Nuej2WoayHnRuC7iBtYzPfWoRrJNiJ2NFANVzjwqbHR2mUEMnFveA7W4Qydo",
  "key16": "3iFtS95CfoFX8WEH2BLpPj2v4kBufKUgFTxoE1c3pJxnd9ojX2kQxNo3vTyL2ocWRipV1w7B39W9Sq4otU2TmjE9",
  "key17": "5XgvJD4TNySz4RHJkNThSw6hxBAZcAcg3uCb48x4VRxx3KKv5fVPjwmvztNTjJwaWU7m2nT1zQQeatjKieTj6Y8v",
  "key18": "EZAT5aWWwMaA2kkAXAtFwEP9KeswxxpvNsQVPpozJuhsmJMzo76mYHZWtKCsF8bpZPGKD85YFh3F8SPfKj1FGMZ",
  "key19": "5LAUmgUTrMDrC64P8XfBdrmHH7p32dnDtY6DfbKtLZg1YrNpknCqszYywR3ftG9D2Yy3Dum7AAt6A4TBca81zgjY",
  "key20": "5Qa6vmahML17rEPyERoFxAPQ8CF924Hq1X6d11wDSEb4D2rdCAStuni1SbKVsfxUDeYqnzp41Kxa5RyM1bfFafsS",
  "key21": "3AqmyYZTro8aCVn4n5x7QdwHkaX59fGWfiTYCPPfJSqrhuwtqBpycDP8KtYu9nbsFKRNZGrtKxnoKCvEmywUz92L",
  "key22": "NtHCfkLjmFF19Y2Jcn3WbNNVQWumhpZFonLQGBdNdy1a5xniUPzCscqUXDhsannWeKV3QRgKyzMNYUiRY7LBhUF",
  "key23": "3Lni6CC7Aeih54UnjbdV7vj6PvrLhxjZRBPLiDxeBySi8v2yqGGB6DHpfjcZ54Ad1zBcKdF9hD6KTNGSGYGgE7Zn",
  "key24": "5DKuXvRRnxqnH5bJEH8fZJKtTGTBxMH3fcjhRZK2pMEACM7v8RQqcobTB5PBhktje4a6EUuJVVcEdk2Q8SJVy4tw",
  "key25": "4jFyGpCwBPdxfsYZv8cXsktPpfqdBcicBbRwN4YP66oDyu4j3ErXTvjoH2kgbrHHYgBwUiBg75qcem5jpCpEeGn8",
  "key26": "waCK9BNwZ1bqJymCNSnYGpFg5CycfjQeBHEYZzzGfQGSyPnyLp5FzNDH56MJjkg54BXmdktZ59FnU7owBky5NRG",
  "key27": "48fj1WrQKPACfNQPxNK25cdHry2PFGGgvbC9enAe1Nc3qQhMxaECnwub6aF1JUw9ZooxRnW9qQBuarUeH9wxzheQ",
  "key28": "21Jkdc13gKGkfGrtB92n2e6Sw69eDk8tL1EtDc3rKnLVP9ZJU2Ue6YKtsqkc72F3HDoqDcApsckNkA29Qq2RAwZC",
  "key29": "2Sn69Y4bztep41W4E1oQybrbmj8LmwNuRNxaDrFZwoZ6A7ScXSEh71ibUQArXy84DTPQ2tXSVf2B3G8SwrSKEive"
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
