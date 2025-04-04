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
    "7fh9Q9BttNw5ySphd8xB9YYikAbsrRrivd4YQ1syqPvhsvd5c4vvdtm5bgBXtVgpXtwV7QGueSUzztK3VHr2mV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q6D5FsCo9QyPbKQLr9vegfy3c4Swc9xttjNC9Szqa6WE9TmNVLy3nLHpZp4TornUQu1um6JBpzspHeKp1yaTQKG",
  "key1": "2QW5oC7Mdyx6opXKLCmJZRdhMnTmKn4QNQop3yNAQqGMxpbbguKLWLmd3LoDg8mGLFuAhLWkWvtdm9WsasoGbJuQ",
  "key2": "jkguiA3PiwhbQisEG47Dys4EPUotJPGxF6buvHzzRvUtzQKtC76msLhvPkVMnB37VakyvCREZeuLsfkuYcPJEWb",
  "key3": "3RAmfZdDS3mpj7eEcBcVMRuUrWMu2WDCDyfR1hrtnhaXV6dcrYiDv6BQPXd8fQzrZdnpS8aMLb8ikiXNLHrZzMxw",
  "key4": "3A62onrun1mGwwbgqdyud7syHRDsGUyhCYuBCGh7mawgjLTeNQm6meTmGLQ161QLGb1ComSmH9p1yFnUfx1PuLeB",
  "key5": "46P2xu1XsqBxrTGPkux4MyR6fZmXms5EFYj75s6pPDQZtHtc18eygK8oLNnBswkVMjNxSnE1AmEW1TGAkwvCpjwK",
  "key6": "2nkTFA7d5wc8YDitVH3FXusGwb3wFVz54aenN16hC5tVWVfTvo5Bersp4XV56RDraFvoQWzMHwrP8FeRtxcAkFWq",
  "key7": "33f9y1ToSwHutXa7cSUo2Pn98QLa2oUS4Ca2hZtqtUzhHAG74T77F2jwZiE8EuVp3eGpMDY7Tj8Lt7bvy8MYkQvh",
  "key8": "mhBU2Ycc8cHQtyPwxbwxvuk82zpq35ipCw9TFawGDgsKJ1ZY4JaSbQhWrV8zFdujcKRAsoFkJSxnKTtqKXCdMtw",
  "key9": "2xtiWJVyBMusdEFBza18gkfJvVYE7e3JYbtawENTx7vPfbxrvcAR1En6FwcaXiKdr34pUd5pYDMTg3j1A8ofr7WE",
  "key10": "58dhjMN6t3MLr3WrpBgJ4BDP5oFzvLgb2M2mih9tWcBpexxrbzNvF2DMe22BJq9P2NWbVJhKake1PfuwooitpUqH",
  "key11": "3amndLorohkTVx4mNfMNjiATWDXHSLpUPocBGEH7GN2EdGETgccL6crJqLfVTpxXzy9WR2m9vNVT9RCkhuNNdzZH",
  "key12": "47U5TnsCd1oZ59MZxixuZhKNAmJ5i8fkgGu6QwUNNzpzsXXaEPT6qXJg7sf6zmhyCf97hvD9Vi3Hvg6s6zdq7wig",
  "key13": "3QqodyxmEEB3BSKkTgqgXB4xpYESG1cJbQfhaK97UHetu5W8hG2Nmx2rTHpban6p6NEuy4rC687t3BTBQix6Ev8B",
  "key14": "2zTx8DFky8DgxwaGRKBUmnJ1kg8bwJGaZYGWjH1feas4PtS8ozY88grxkeESHA5TbNNKuuG81BxSeBMpcsPNPMtd",
  "key15": "2G7VNayAvnLChKs4zeKrxjRAvWXGoZ2Fj7xzEFGhXRPUBVFggg2uPECYZdzCas5P63eqS8gHJpKww78EYWWnYicC",
  "key16": "5iWkMKZRy6AAUXa9DBMGPQDFJadmFjZ1aKp7hcGsdQ6gcT7hXcCxHUCYLnv9X9F4GspDJX1hVBcUxEhqEdVfvEUN",
  "key17": "492dgijxhUbd8nB4QENPeM7UEbrXgNmHDsaUTAPMkDbXGCVg3DmSyxeuo7i6R333KG7442BtKKFjbVye6jQ2Gmrx",
  "key18": "4PfYJepg1JgxkFTxSBAXC5Mzz8Fdo6KDq5KTRt2amRXYgfepBypMsfBwHExNQsuA6fTGSMLXkkXYXYuKVkHzwzok",
  "key19": "3JbRz3coCngpUYEoZbzkq7LrgiNoJ7A8S8uhtKaQkZYsSsbggY8z29MXxhdqSFYWavwqAZAZnrjQzHP5fJr1adSi",
  "key20": "2sPoBJ5x6nncQ4vf2XsYgNFcbPahz6NpSCFLicFeuX4fsWvLh9pULUjcmCfvobkfDxD8oJWsoknjaaHh7B9GpU12",
  "key21": "36wmyxpbMsQaArERLDqcNMnoNHNxuLMU6h7EJjM4a5fUvjF358BNojNJCtgsfgMexWRyCM8ywLkou7vWGm6qyKGy",
  "key22": "5LCuxXRaCJ6CWBUJoun1WbooJ9aQ3DG4tp9r2rmR9hNPU9uGW8oqNDnSfnPXkjFxVpa3cNQdJnNR3ua8GPpV4BD4",
  "key23": "2sFfyqNdt5dsPodxuMuG5VFV231dUSaJNUmQHKnvWsekiuroEexHeFsFLtw6we1jtuUaZZcrSpYnaEn4F42SAnod",
  "key24": "3wCqZigxTH3aZmM96zh9RBFd864XWa1VYuqsmq3eRD9F1bm71kjfhs4eH2hsrM8wMD6WULfFyft4SRbGAyoSsoCx",
  "key25": "3u991WmgCbkwCZmPTKjfz2cuzTfR89jsxJLc2dzkLQfktPBAGnJ6r61QFdxTMJpYoCewwX9nFCE95ZiBcLKGM5wj",
  "key26": "2JKRe5B4XgLTzANNFi1BrkEbxx7Ro6YTzyD4uUxAZw5bndva24vt3T58vubEXRBAgDddxWucXcMpibNxQGz9XeQM",
  "key27": "4kCqA8ePQcvwoAm6JTLwmZ8xxELSSqmx4t2nF7KV2qHU98sZMXmJCwstjJaDN2ENFftB1M6rp3cXBwepzv5pD1vC",
  "key28": "3cKDKD2cAWRcNGdkLu7nYYAJvzn3cT44yZScesZo8e7mtA6undCoZgCcAqmPUoFwiNj7zDqHELkoMcfatgFx9s6F",
  "key29": "2pQq4q9dCfwd6RpEBGHU7d5AyGE9eMkvBXQwman6J1RPbxu43y6iqqqZzALxJ4zvVgeC1xbTyKvpiTn9GXVxBKD7",
  "key30": "4rsg5zGoa4m79BkMB5TZk8fhRnzqYGuQZEY2cjH3UavATtGYAFPgb4pDdHhxhzUjBojftdgFYEktNEpLYeY2pbrR",
  "key31": "3FvMjSzzZ5jSVtGtSzegcbpRmVTyy5FHNiEWe7oguEwMW1WKLJPXEsa4VzEM3EVnHefszzPoEhC111aRwfP39LsL",
  "key32": "5hJ7z9LtfuahhQW43nHPyiCirexSWGZTy7EZQu4dDzQv4mHHyEHFnnyDX5rx1oPKpJgz5wmjbrnn3wzc6heygDdT",
  "key33": "3RqMTqANBcgx9jRt6XK1aaRXPiU4TTv2fN9Sm1UJoeQEFmMWqwR5UbczXDygF4nTzDjzrrPorBNgDvUa2YdomWz",
  "key34": "4n38ADBgvpXM2ro2ZTyFV2CUTGfdziLa5fR6GhtwUXNhrUynKh4KTvPTEMSfA2jLG6yyAzxEeBzTgQ8dahnGXKvT",
  "key35": "2ZrWJ1CMFwyagb3786phupVEJvpMrNFDmECjSGatEnkJ6pobByyHaQJnWYp5LXKSsa5wUkLDUWfTAzrVNt7rQUHT",
  "key36": "66SetiUihxCfejidh7RWdEZ98wFCmjy4Td7BPLZSBSMRsSpFt1ChSLkMct7WrUS8vu5vLpRu9ynY4SN4nbXP9cYf"
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
