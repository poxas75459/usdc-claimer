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
    "eyTnnBUzrsDJc7qsjt3t4aMCpCvKUqYrJ5jrH7WhuAhsi8gEs2TZmVko9fv44k21RJSVsycSQJgwcmpV4gVTxha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GDdekDfJ31rmrDbdKTMoSSHDmPRBr2GrYbGjaQkXpkVwYwqjJNJEA3eb7CTbZZuzr8BXH6Txx3uxcLXgAA5urpW",
  "key1": "3YnMvzpcNga6DraoyUVWQoBPeBrcj1bxhchMNxLb4ZKrXdnuMfKniPLi9iMotQVmecvJihFcS7hy7S8XwqmJ97SR",
  "key2": "2V9Cyo4Heq1iguPHWDD9JFZjqQVf3gjzho3iCCcfXNkuDYMvYDq7pbZjfCtDikVnWRF1kPhNqbLFkPbuRZawwJzY",
  "key3": "32biQs6KwxQpoJAUt2ndxGix17yCA5T8TkRoxtT5y2nUAzS66FrKTRcMrQ9fzjKDAhCmT2JvnoSR86jzYLBfVfdC",
  "key4": "yw43UY5D2MWxHeY5re6MowxRQjWzPjGcbnNUhUv3NLVVYnDzFXQbesLVHAvBm3W7NowLpPqiiTeyXP6jZ1SWrM3",
  "key5": "5otLLzTUid23pxkPz4whQtaMtGARVJ17T2YCRizW96dig8XLPY1SRoH2h7XgQ8HFBR4Xrr8uN5ZtHi7evyr36SsA",
  "key6": "2f531xb9B45me5AfgJzidVVe1dvZa5hb1mZdZdsFPN8p7KCLnHjCM6rpd8Uc1BwM5W6boqpHtcS8TNB2ycQ65Tv8",
  "key7": "3jFgpPRLb14RS2nmx7L87CBfXAMCTm38wVG4Lxuaq49X4bZUzs29XdBnMLKLbrGx2revTRsohtDRYGkv2c9QPgBS",
  "key8": "5niRoV41vBBpx1yXJ85iJ9Ga1C27iTVzMLiD32qqrfs5Mb7U6ZFCxi9nDXpotV7JWS6qHm2RT6JnRUE8ss7bwfEH",
  "key9": "24PXxxLb145xzjtmm1avj5cNnmi3uAXPPSpCpwdGEF3p15xnoPYtygV7LM9RYpEd34X1Z4pAWtFPwgNTgZ1o5XyG",
  "key10": "3VHQEeCG7XTV1vqMLtrVpop34DtK1voiniFnAXc9dJZm5aGzWP9QbU3N8WcV2RZXZdQvf2fu8omPyXSsydqtgZJW",
  "key11": "2xbfp5G72j9VmNcSQhZptiygzR9VMaBejhR2gvAk4XWB2UcMvCzv1JM6Af2BfzAx2uTU5pPSsA4didnAGGkWwMpR",
  "key12": "2UVSTfKwhwTsUECr54ko9KN9Z6prvPtibftDuPEanWQoNm7MKA4nwh9e18bUSPRqTyVYTTKKmKCGLpGhLhPJwq4V",
  "key13": "42A3fueSftJYFsiFc5ckGuBHZfJFhJpsdLAiSMxZmHVifHCmcbvG2heFRspSJC5QE5qUE4zUsdhWZxWdwRGRoUMj",
  "key14": "4BdDE81nnKESZFAXwxQQkwh6pFi5oZc3icRvPz9jPY2YtM9UE1Ti1NCGXPqvU9c55YRVXZVbgGtYzDz7cbLPdyvH",
  "key15": "4a8UkR7a5pfVCH6MWfeDS7jvyBw9PcQDBybwdZ9j3XZnryHVHPz2HNke5C7oxvaWeiA1U9DiP8CfJkw42GaZbTw3",
  "key16": "4VdX2V2nX3n8R22hTyUHX6D4awLh7F2FWVDhShy7dKkEePs74N6Dnbt5nzrzoPnpQwhzGvJb7g8aoQ8ntEYvKFW9",
  "key17": "2JNSDCFoNCWXsQq72QMJWHAHDA5d1NGMjxjm1gwZSSgm4a7gubkFzKTgRmDMtRDrnU9J8fD5MEgSFwi3UXPJ9Hub",
  "key18": "5QUZ5MWhF3B5NTQ2hYNzEmzkGNVXicWNBL6dyNJq8jm3WAL8sPDirkeVnGtbYAjohiXsjSN3iM5JCFmzpXG5rpbk",
  "key19": "2f82tJDGSUeWMHZfMCh7q8tBV5NDCZVN4awLwkXrkGq2wEqUVhvfB747GyLiefUnvyFFihyWnZmHKNaPtJbKEhEy",
  "key20": "41iBcmyWxB2GXZD2vA5fHFhHy4bp8nJHWLRqrjHAUtkFHikpCTim2CJfYUYkitGMhCJ1mAfZtExK1nc28uqGFfjz",
  "key21": "3kuCQjoWbTNmwpi6UgDiY2GS9SRHej6M3CwVJrcw9d2WDAVLyZ3rAa47aasqDZV7TK98Nbt4DPBaQkmT8wpXCU72",
  "key22": "2i79ThuuawY4tmPXm7boswXsWEiHmkmmx8UJCeMnPg8r7yRT9yRYH6pAndF8cgTWjPyjVzjsHM3Qf5AwJ6jQQBM6",
  "key23": "x5Wf7geZy3iwzw81EgCUFTRAiz2YpMXS98eMtN1Qb8PPysAU1p2GzibYMoxnKusa35reYMKAYjCYHdMj4zTdJbx",
  "key24": "78WZnQcLPDVLfUsNGSuB4UJWLDJpMz6ft625bV6nqVr2KHKMkuGoWwvUFaw8NMdk7E8HpZY8wzuNA14AABoV7Dg"
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
