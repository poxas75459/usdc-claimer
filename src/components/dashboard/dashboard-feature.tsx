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
    "262uVJoJWr851nRsVSebn3nJJd1NiTfKcpuESHKwa5f2iuBzWKo7RmcwkWcMXij3NSUq8n5Ez9LyLa229xCu7gba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zD2z4mPnMdGcXTjRyS1SESP7gSmveXymFD3fdYC9H4C6dLUnccLYnCUozjwYajLRLoUWR1oEnCy7tMBrHqfGjfX",
  "key1": "3GcLfKEPUxWaLstkQyxeFob3vdjm7BEynH11q6RUs11YjN5FN2QsPR7Apf6yZQss8U178j7sT7QPPtHccK6uHbjD",
  "key2": "2MNASJJ1sDwcSaf3TnGkHDtRudK2Ldh8PExMYqUEtZbn658nvZvKcYBVAob1E9XB8WyqG5qtqHTssq99SPb7RNan",
  "key3": "25yjzpVrdKansLpLMJJF3NTEb4R716r9vnxvamzGxhAhLGwhxMLJJ9oyYGJeb2yUswAjPuYxRz6jZ965pBzoRNUE",
  "key4": "5BnASCtgQbpLNKYRuxbp7hLbRvGctsTPxWom1AerZLpWZ59rWF1B5wxDwgRcyYz9yydqUPmJqdHehMHrfimEiYbY",
  "key5": "4aN8eJs4gNzYLmqX3vFqwBPtAo7imNSEirgJVDijfmxtBEWe8Bey1F8BQdZy5NvZwcY3a7KPFapJZEEzCY3WAqNb",
  "key6": "2bTWaRjkP7ryRApQ767yXyXRhzznaN6HtF1mzgus6EqzZ3mP9D1cdb9ni1AUDDUPv8b9JsKD84UCA1yNsgGDBhnN",
  "key7": "3KPG45Ro9N1fTAGiMtwPUL8yBRgLpvnQbW2UNPd4Le2Gt9XAv7eaT2Hg9FjSKoj3FkaqULAQRiFpPLPXwjBg3iPH",
  "key8": "4X2md3HKfom69iBHe42Zp97emcGpxQQrMpeWA8cMDXUyoYmxQGRTX8vPa9tWyQvogZXAdiT8qomxCEGu92SVgebi",
  "key9": "ow9C7BHJ3fUCT8ywFpsceZ3Unz4Q2i65JujryQv1PrZ5ALRQPfHiokaT6fXb7KVz7JEu7JTEMD59xcG4zEkkgaa",
  "key10": "63JZJ2pXeJKNfdmTeKB5BvYTkM8NkrkNeDQVZELs8bWfj8FCb7FehftC5fcVSpSxYLeng5bZZng4GpJV9Nh7jDZw",
  "key11": "3qvqszDTEkZzbKW3q6XRTXvpKFcJo7xSoPokmo9VyPgJiUAspiNyNPu2NFkmAbgTNZp5gtGrSQ4UesrcjoLHipqT",
  "key12": "4GgSTWs2W2iWewahx6rusLmJQWVgzbbqN1LUT24WbCq7oqPxZftWyVhZ99UcRxgf8ayDv26CxMCLf2rTLfdZ9yht",
  "key13": "9ixCLqPDVAaw71m4ipqPShivqu1P5uP7X1y9b9auGks1KRafP2pyexBbSQCBXUbwYzaPT57zzn5RJHgLJFJ82hg",
  "key14": "2t9h3dtYKJa5CPvCx79759YDKjpN7EqbzsyQQiiq4b3X5K6D6PDVyTB8fZ5ABZwD7PoJsyDxnm8FaQZRqBQZUP5A",
  "key15": "3twboQBp81vm9uKUj3M8sEG7u8sTRG5G6NoK5VXyz8W4S34iJBYSrgG7L4G5PoFHWS58qRUa29gaX59XGyMBHeGC",
  "key16": "5q1RQV472eK3zG9S8obpcgBjv3rYb1f15ojZhWqVFtDkBU3gBjQd8hLqRkgZAirwJJYo2FBJfvoyeUxL5HoUNJ2s",
  "key17": "4DrEH7vhBi9xzgP9Bq8ExFqyCBnHobaNcA2hrjPnxekTXJEs4NyY7QHNagdsSZkyVPbzDDfikrj7TLTLFzqx9Mgv",
  "key18": "3eBPLniWcPPNQmS2ktRfGWWpA5TWvPZjLPRdNEu1PvXgW2PaU6y3NFNWA9aR2vxWc6azuLFi9daUiFa7ZMCiExgu",
  "key19": "4igeQYKK71qMnhJ56rkLNLUwudetqVesb2rBMMZgs3ogskfyveTN9PSoHTTRNWNyeYykXkHjLuNMWxWTPHAFWG6S",
  "key20": "4y19x2YwTvbqrvqRxXoP983YLVFp7rsL2awwfUaUEcQeKoMWrqKZwbt8gK2dHynMDU3SmUAwL4RRmgWd1Luc9No8",
  "key21": "PvLTWgjCssDPMrXHcw5g6GuU9KQPcbpwGieMCrY6F9T19DpDBbNCMyMuwQNKVKUBEYAYz42fNZeU7ntZ1qi7KKp",
  "key22": "5PHPUELGs7oV39wWi5NY2yyedSJwep4a6ZSr2dMeR2vRQAvJuiAFvetVtKMCmTR5CFqXbgLt1d8aiXSqz94VNLC8",
  "key23": "2NEobHqKSji6BqyRjW8DJBkkAKre92oRit1tox6fQisBJ7j641Mv8TSmqNAsTi9ku3AnjdkRFrH3dF3J7xjgdv3r",
  "key24": "5yZ674Jb8E9U2mcshVTJ86rz8cegeA6YRDF6M8HGrBaFzBNB2mQxnRBPcGo4ge3U6L8Y8ZMT9qjWWS5TaAy9oYow",
  "key25": "5DdmYvMjBW81hzhKLRhFHVzTgQ8ZghvRS1UZmpQvV6tGEVpwxatpMLHRa8mgdij37s5xNxuQJXMyKejoP8wyR5Ni",
  "key26": "jg3S51g63wqXauRuqyKiDn4vyq1DNSUFGLonBoBqWTecRSyVMLD2QR9Ak4EHxs163DhtmJgZM7TLJ9vepU5tJyP",
  "key27": "5EPJP92w8SFZC7kNTwZ9tGgHcwXR6MuAqmhtoQgwV6JjWpp2cMVGwng3LdKE4jnwzu9tTMKGSnRKURDS8pWKjkkf"
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
