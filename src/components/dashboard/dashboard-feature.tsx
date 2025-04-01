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
    "3PcAdNiq3bXyyVGM94FF1QkZQViKQZi6vfy7K5yxS1wQMircQim6CxTJBA12HJC5NokmNio9RdNrtRGLC3nmgiJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g2ZHn5x65E9CEMVGULmYLrSWKDpGA23LSgnED5if4s6yth3WmTkiKKJTWqJKFYfhB8GZ2hcFdQkAJrJopoMM6Tc",
  "key1": "5LrWD7NTkgRFsNsKQqRL4Mu5pFDabFjAxHtD4Y3QEjtQ3UT7TAppkDUq9KdCjZsE5xesuBQfYQwL4PTiYSeqrEid",
  "key2": "35j8yDwWeqcHMHfq58ysrv9kiUyPUtrxYLjh9aYR7tZC8m9qbrBFCSf3AZuYKp8FNwpEQp5c2SSxdiYsfsuPn7w7",
  "key3": "3mcoHMaVw1yXtNNTdKi1zHahVFoQAkfM3y38qRjNCThspfLSmShPKQ4AbgoUk9qCogHLaVMNySpv9L16WYDhdYKG",
  "key4": "5HQVfqDhG4QBcFsP1H8pocD6gPcnSdCa9gBnNrGNYJoMZETuJtPfz96td5V3p175bbu9As77FtoGCL53sspBa1gW",
  "key5": "sC9pE6uyWbWXxmU3k7sKNkJNgYzhbbWGPHibvb94cfdpohfPiZjQj2cjhqj84Loasj84WMSLzejRhKjhGeQdkWC",
  "key6": "2rKHbKSgR8oW8VdNrFrybsnkR63dTwFHoypK2a3XXumK9fCgKnzzmkrk7X65hVzrr8qEPa1V5mQW24EtyhZKfyzv",
  "key7": "35NLBLqiFx8S44D3zo7HKTf6Wk6R3VvH1L3LUvXjbCULYHBGrB76MndzUV9JifR1KtvrsYRNgwfUu5SFFbZRNeHP",
  "key8": "2PbixkbwNtmbWwna4dFxDH4K4vgAC5cRjvCGAcELS8JVAJPQrXXhANaBjDtkcz7kbJexv1XSq16CsyyxzLomgbR8",
  "key9": "25vy3ftUbTWG2b1AjuzmRu9XvsGHiFVFnTUZPgTzD6cmeWmRkf8YsWbEeQEgyEjAuroavABEKD5kYcwxdo4vBKp5",
  "key10": "5T5RMgGMaPn4cKYPfK5FeYSKxMsx7hdoyVpxFby5FgqmjRDF2CcyC23kULyN6LtR3q6D3HNSo1eWxn1LTLYqiJyD",
  "key11": "65VggoNzn47axf5NpYTC4iCbNzEzAb9KzCceJPwGfyApCKXVX9qZ54P9o3rnz3aRxR4zRwUSxPV1WNaD5Ekg12gv",
  "key12": "3JUrxvHXKUdvzrCRgLJ5vssZN3iN5kdeE7JABgWRrM19i8Eduh7GDzRSzALxBc2BLGNuodQ7SG8GbF4QxPwaGGeu",
  "key13": "48hmid6WCAFQUcKbQEe1FhYHgSfouLA8vsv12XtteE7bQVJz6vsvCr3m9nvXCjgT6KS5yT9b8V8ixP7gfLgBfgMp",
  "key14": "26XW9yBuzXVf7iA7uvuX6vGx5h1YAX638bvtmsFBgf4EDBah4VWSL4jsBgj9CGHZsQjWS1DtsEYcDaDiSnDcwtey",
  "key15": "4btaD614Qwffhw7tfh5b4CTnm31xwjc3PEHigWZABK8B5fvV3YiNviHrjBLQiX8JLffsZQbk3gRAq9gWeeh6yGhu",
  "key16": "PeBkbELQs99K8Y66E1ndts9BToKHhEbVSsy4tqUzoUHGqzh2GjJxJLA2ZsKeLkrXriKdBVeAhixGNBYbE4G6Whe",
  "key17": "5xVocU19eG6LQXnZRzKzQehaMezQFgvKvm95ZEx5GmAJqZvPEHFk4iSfh42fxfy7McTpvWzcWTDpSGXVdRaG2g9X",
  "key18": "3fYjavBhiMU4uG8mjXTSSNMNZE2rPJvXr8ZG3itoWV5XucfXY7XDu9Tsbp1sXFnBGkZL7S1Mephtk7rmrHsDuems",
  "key19": "2hZmPg9nhuju5f9QGHoDgtBXdn5PZDb2MSoCQfeYSVJNiewd3UrDDRwZdJC6YJf4vzDDmeBj1WRL9XNsxWxYnLVf",
  "key20": "tFMvVhhdN14rgJ1oNG71ckxuPEJJwsKhTEyU2obqCJkCCK61LjkHAXcFTekW2u76YGu8NvCyLjruVKNbBLh7521",
  "key21": "65SSdLeJ9g5bVroTvzJ5pMb9Cutzkd1e4RQswrReoW54NRJwSnyvJfKB5xmhg9RuT1kdxeSYN3T2NqG5UK93sSj9",
  "key22": "3iaEZihWoAUR7RF9gyKDXMh7cQ5WT6NsrQBYvqz4zHZwouL4pGc5kEHNnnTNUittML8DGfesYPw4iiXiL8CJGaKp",
  "key23": "3JxwzHQL3KZGX7ZkJSbnba4H2pW31xpj7HYG31UyBGFnkJwnwNKxYBxYsAbLLzcTETg7swUN2FAzXL4RwME78KRd",
  "key24": "MWqJuNAD2YVATJcvNyc9efgxzXcwbQH5VdnsY7etB2ZprnHC4oXeU31wVXs8GafcZnYuoKUbEdvTL8CeSsYUSXS",
  "key25": "3sP9aPV89RREMVMoj25hdEXuYDo46wLNG9r4EnoG4YCGN2TiSNNxUCHwDHEajpXPdywX7dW1Z8zC2nSyFjuJCcRg",
  "key26": "22wWvXMXNvrdzpFUa9rMPAdNSTLLqg42rga4EAn3QGzpaATKMqqUy1475fj8Ra9vrC8eYWBNDyd9Yfyhfhr3dHKc",
  "key27": "5JVv54PEWVaPvyvDanBaZqXn6qdwzSTSeKAUskEnUY61Bpq1DbjBkboUU9SVrCjZYRHJSyuwVPSQrX2bHegL9XZd"
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
