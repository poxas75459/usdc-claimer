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
    "3daq4qzYFPoazYtZeQi45Ryn5BMZ2GESkx5aQxMtrbr1Md39i8rSmq9n7C9mEYmvyFmy8jhtDh17g15FD84CpGdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZVqgbocHfpVNhvrEDMYFxTzKoTbLSR7pfE6cmoLdDqoF1cKT2EA91bpkWZVJKYRGi34hiVqSixfWRAZF115xcEi",
  "key1": "3jod2DTd4ZQSnHByjdgiRuUXTepBC6SLiPZmM8Hg3R6ijq2ZC7XLkWaLYa8eNtKAzaHHNf12hR6ABdYDTdJZnNXP",
  "key2": "5BtD3rqGRQm4VgnApLRPtXvZkHqwV3zmzZFK7mPXKCuD78Y9uG3NWRRdAUZBntQ69XrbJyz2532vNow9s4Egax8x",
  "key3": "4zQaPCYNTsRqpCf15LLY6ptTy5JXSXoMYhZ2pXe54uB4zguUkN4DKcnRr1jhnvH4xcCLkUVP7HYrd17G3krKp2Bq",
  "key4": "2gTCuGz87BUMfW67z6yJHATADdnW6BowDPTfgtYscEaZPe8V27taiFoQ9uz2EZvdhEHQiVB5UvPpiZjhCKPVPmNg",
  "key5": "2bvFgfuyP3ZcbcXMJnfBy9NsW96uPyvqrgz9abxhKAXXqtom6NMnJAhAat2RezLamgz5ThTBkr4Bysaaoez19Uqh",
  "key6": "4FtUxD3HWwRjNBCtN8xaSbg1MYpiknhs1Caab2PLCtMMLsG7Pf4sKY89BeP1Bygd3uSmCr9eCUYFsr4vtKD7XYb4",
  "key7": "tRp9yHbZJSPP8dnfYS2UoDoreRDsN4Vtad7jwbCM2PpgYmJuJ8xjwxNQNVWy9Sr4oVigbStpJbN6KahAhTQxDsh",
  "key8": "4y11yr5SEHv7hWprmF82ASYNytjwScTXkzn4fzJxXY2UJzUch6RutRRn2xhWy589ijJqfJErtdqUYi4LMSorunbJ",
  "key9": "3CYqTw4MHgMePzZn9Li694F4x1H9d2ve9AXA3VB1xgCSdnVvgmcwZMJMUmpZ2kAu5MNAirkUStCix8sx2XZGCRWW",
  "key10": "4V4t9w3X2MmC9cHfE8tVGr2zGt1MzDgxbU7J9CVAaPHXsFw1uqaPEuMTGznaULLBQVTeBbJ5ekCYPsfg21SUwYG",
  "key11": "4QNKFjybxGTcWQJSigDbGMAzKKShaSR19P3ziowyJsDLdNKsApyVJoX8BKduNqX22iCyshdPUUjXVJbLzSZw7YCN",
  "key12": "2NkgEjiVM5c96oEEyY7SUPS14UAnDmGFBnaJ6jMBSuVznvCsZToVVVDUP2hbwXLguFPZT95MhCtTifsre5VKKsS7",
  "key13": "85VkDTuRCEL6z5wQvorASMyMDSCeqvqFSPsQekfQ8ds9EdLAhoLrNmi27neEh8SaXutTD4XNmf278kXPLiVSjNa",
  "key14": "4Cwsy6a3X7EVPbd6Effonjy2x7Kim9sReHEg1AYUoUoNhA7vb3WUVhn93GnTfyGPFZZWRdqFG1ypCtYneAybio4s",
  "key15": "2JWJNWLggQtWrjvFu3Sxu73Wxg67FTWjKK2jziJrsXxdffQm8GGqBPPgeDKN39gaCXGFFcobUE4zHGpRe44EwuhN",
  "key16": "3PSJ3tpVXPtQniUeavVqYvHUnaKKZybbWGN4QyBAWBQVuXBMNF8MJgfPGv6aCa71u11MZMScB8pBNW4PYJxHdDtf",
  "key17": "44YazFiKYmBQRDnAusa5kjnyArbCDRXNRsxpR3GFj5obt8AxoxkvPB4z8tv4bd5HgVjsbjhvj3Rza3qEmWZCJ7bf",
  "key18": "23t95LhtivaFYprRqHeVRUZFJJTgAeKco51y6rrmL4VPhmDHGaKrBsrUhQh5G63ugNoC4ra58pgh9Fspth9rLw4o",
  "key19": "3fjFsK7eCbmY58dRjbFBJ8zQD3A4Me8TPsNAGN4eizerEDakVemYRqQJNxVRot5YE7WLTi8qpwbZG8pJiLJPMuWs",
  "key20": "5HGTGukYv19Xn373EPeCy1SwiSZLFZtZAhXkWzPZSzf8szhFshgus13DCZbbFGW8jJno6Et5cQY1Hoz19Q9rRJ66",
  "key21": "HUmjoHDY4ZuTLCh3g7yof9MU8Nx9pERTwBnMWXUmUcjxqyVtjKSXPLvawKrnsergt1RX6P7td2UQHj197bWmjWL",
  "key22": "2LE1Qo4AUkpULsddvyxFm83mkPMX1bXBe6J5YcH5gBtKCgfJYmURRv5BKHigTFSopRaV2YJAgj7moFj2rekugBvG",
  "key23": "5FvALK3jGWwrdFyuHnHEwEXYNWcfUa6UYnwi6TLA72aDfaJbA9tqLxuF2M6UZtzrftAUvQ7D2yz3V19SNKiXNfto",
  "key24": "3m5qccpbMXwPxyyiyPUMEzw5JE135W94KWpE1aBCgQ9xBkGsnG5wjTRtiy5hY5w4YBoTfcqcF8HAfSQTuHA9MrD3"
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
