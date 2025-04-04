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
    "4coC1C2G7GBU6S24DWRDLsyJALSnGj6ELVShFB8PTxN8oShfwQEiRhGTz8kC32cCEibijfjrSDTy1MvbXY9xzsW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U7EqxVimntd84FaTsG4cWZmqm2w5v7uHabacojeVCfHMdSmnLZYWYoUtkkBSVCovNwjv9R2gne8AhDJvnG7ZKYN",
  "key1": "2PEad2cFEgSjsuLnGidvzRY8DD7hhdJuwCJYu3f2mpmwivcK4soRHmL6FJrNGhcVRAtb11GgPysiSvADyAYDXrya",
  "key2": "L7c2Bhyc5VaZP72de3Uz7uB8h9a3Kq4zEbyNpPotf6h4s9wvRySwydKMyGia9rwh6vd613FbmVUo3eW29oHAGm2",
  "key3": "47ivhaPuRpAQNuTDFWceAwrKHBxJxKLFcq4V2Fhoqr5UHht6td5S3SbKwfBXCKUNwo3wgxjwcdpuhRyURpbD4CTr",
  "key4": "2AWZrsrud1ydr3HpeGGJou9CkjwkcoD6KZ72JSGfBPHnxi9XQEoVrsNXkkEZWwsRcWfuwcZyT9c7f6ka7PQiEVDN",
  "key5": "5MVsZZqvW9DhPmgbCYGdixG6TVzU8JAef4kWWp5LALTLGJnL3ZkNzLFa43njbyQocDLmyNGFCGJT8a2W9LqyxUGx",
  "key6": "31S1Fje2jFxiDhV9S8vs6DPY6AhYCtdqjvwBy4y8zsJ5nNkfvrYpXpgtcBLZFJzXA1GHgg4jz39kxnSGwDTiRxVb",
  "key7": "5K3zh2mJ63i6XaEyXikbttp5v5MnSL17oPa7hhnF2wF2fFtxQaaJ87aiufXES4c4EGZ9mLFvQtFzqxCqy6VDueT8",
  "key8": "7H3pWG4S2o7oLdFsBgdP5H5sa54R3BFY5B5XFTC9gRgwiZgGosRUgS7NUvHHaiZmaeH6Bd7YcvSM8hCf6ys2V7X",
  "key9": "5DW6kBSy2V8V9hDxnm9yXxETqkB8KEQ9Dgm4CP1rWLYn44tGFDg7SEMEeJdSGS7sG68yR7CV2ZKFUiURsWkUTTRL",
  "key10": "8hGemYNDex46u4pd1ejYAFYTJEdL36fr9KqtwfPW6j3EXodgb8C2V15o7Bjm9HscU9LamPSJMWisWQQVF2cKYGS",
  "key11": "3qMzBAhYmti9syWVULn57dZPHgzUb5mGFK2CYPtQvfYmmPJPHkn3DhJvHSfxcBcFKVo4jaQ2s43GZosYSM3weqfA",
  "key12": "2mkWEBk3bLZqmYyckpr6TcGHhza8ia68asejrHtSS3gEXHZfkNEU7CDfzUp5Ncc4rgMbkEj9aT9JjeMqYwsoeYgp",
  "key13": "2gNoBY4SiUykzknyxn2aawPPJzxHed5eXyvak6rp7nDpogvVUM9vk7YQv2HZGnfabvUTVtVeYjAnXhVwsesVKxoW",
  "key14": "2d1vm8wV17AH8prUcWsB8Gyn63ykxQXF2qg3fQf5fnwB5HMbsnE6RFk9HqRKcF31dBKVtpGMr5qZeYTFyPsgCEob",
  "key15": "4wNupKBLHWTiyT85k4EYeqF8fokhJtT83pmsoKDZQk1p62rYsiTvBEt6gVZjtQ3sAwkoKVtCGjcdmPec1yqpvjh5",
  "key16": "2kDNzkpavczB4mTFwyP1aXLFsNHomW81xC2jSfZeeoyXMe6PxP3BLpikWtLiyRtomPi6pyaab5A2QjVoFrG4GBBP",
  "key17": "327AoNHJDAgGc4VoAAtpcjRbQf61vjaRdwf8uQZHPb9A878TAQmqkjwLCZTXEQzukJ71esHzHoJAUoCf4EUeoMd3",
  "key18": "85QZ8gk5RXN6m2aQPvJWusiojT8STULCuBnHXUZRdCJmTjNNNg11ETMnmVPaoU8B2u9zGV7a9pQnDekUqd649jy",
  "key19": "4o483fv9HfZUpuoWcfVbfkZeCTKL4hK1zas48ADtwxExv8EYEHXDdT3hFg5LfeThXZMSivT6sTvRCjDPNPapZjFg",
  "key20": "4A1DSKgukHTZFMCaYtRc5tonjTemxXfU1siu1Pw8pv67s3AxCuZoPm8aQxTHUdBrT3kiy7guho9ULFpn3HQ5jww4",
  "key21": "2nSTgxEY2dGdnGLxkv3YBu23zc9HUY5M33ViEXao8YdDoCGCxSnyPFvkZD6sEm1kZzbgSUPWZeMxzuNGJquRpdAS",
  "key22": "NBF9EiCn5QRWr3GC9hgXCmsC9bKJG9NXwofVW15fzzT6j4qipezHeYgnokxT1yWoAR9Tk5whcfrbt2ss6s2Jgjt",
  "key23": "34SVUTfy8NvEqjqu8bX18izcgvF4Y93Tb1VSgysTezGfrzaGnCVtXze5rQeZErJYFet93meDaf52oqudRpERPsS6",
  "key24": "33gQh9qNLN82LbpmvtnCkeZBBU6g71bXea7bC4GhbjXMHRok5QkMEUFsgsG3mWnKYvvTgokmiReJ8ikE3d7eepRS"
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
