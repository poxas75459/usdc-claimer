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
    "2awabQYqEymsD6sDKQHsGCqDkCrzivfxRxmyezqiAq9UoSd23CABnfJ6DotUzwTf12B9FCiE5q3wHAUS5iraPbEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38MdBqs2vCgBywgKMJk6m2xKVcvPjPsLzN9LMJmFSZMBQ3yAc4Vu9n7ZzxF1JKRBMGxvsgj3aLipeNPFBZc8WaR9",
  "key1": "2NXUUNfHr9ndhCWcr6zHz5x35tLqEqFKXahyPgi2Tw8gaPNf3GTkRxKQw8TLbnmN68qvQvJGJ24jYcKE41W93VgC",
  "key2": "23ouzUuwYF2QDVcEF4fXouHBNVv5A1Fyeu7BmpUWwz8T1t5Dod7zfrbNuH9s7CYdw3fDb6vUYcn7pThHjWve4t9K",
  "key3": "5yJz9gSWmkVCtY4tpgGe4w1euYKxVLMyFuQgEFN1WTpYNKGPkvYn32MVZzoG4UtFeYDrja4YzGBJsjqJjgdE957f",
  "key4": "5yU7KsKgtf3iP6cLYUVHcREvRAHgVmQafbXGXfBrUjxrAfCrzVWSfNJckibbTk9s1dqxoHMGJK1AhpBRk8gK3J5K",
  "key5": "4mc7RVfUK84erMckUkmMQm8ZX1piAQAc2KBqACvEhP6gLTMZx1xgrbb7KfWrfc9joNHhZyq2WMw9JCEJtekVzRab",
  "key6": "yjecx7TbDp3KUEQgtkfupCukevzuHkTTGU5zEaLFmYi7c1W6NLoWkYi8gM6xSTV7ik7BfStiWCawJtL4g8utbQQ",
  "key7": "34xt2vB3FkevoDDQZ2QvKnT8aUaducAMdH6mLKpiXK4scoj5bkH12KcPkfwTFEp211j9R8M8RcztMQ52YgJWYJ98",
  "key8": "DmFTnmbyNNVVFbQRD5Kf8yPQGyzaHWiuuQRAUqPjVz4mene28G9v2itEYgnRsJPg7otgitvJeVH7ZPjRQaSjyfG",
  "key9": "3QqNAtWBKR4RMhSQK3jj2s6getJHTh8WdmNYNwfv2kDyqaMHBbioCMUcWZdcQD4Hi3H3d5LrusJ4Kn5ocyrLR75C",
  "key10": "3inogAWjbixMuCZkE9gERC9s9owRu2hgCAUfYtas9rRUSPYZNUXoTzgL93zsBDXN7y8HmLuCEQPUqYpkPE5h3np9",
  "key11": "1281J92poQAmzn32hXg7qnPTUAexvfsnDoNHH1rcHcdjS3whM6SV1EeRtWSgbzUzA5GfXufjFvxezTFHLPgSkYMu",
  "key12": "2ShnhF2ssYe3SUVLg9Xi3SvoHfqdVrMCV4xdx8oY7uKqEszXbKVzhjF9tkzk8iKeMj8qURLCob1epVA8BhvDpfaj",
  "key13": "2Rmyydr4aySLDE27rERVwkgmTUWvdpWf6uNxvBj21vZdjLKhGPs1viZwJfhzHLwDbfEZ1p3ymM7cKyLVtz8SaYxM",
  "key14": "5KqWfE5XDCm27CMwuxkrBedvWjY42ohgxtPzbF3axTDgHxLf4435Xx92gkYdQdbKGEstpQo15dqDjYn2vfAbBuF2",
  "key15": "38AmaX3tm85qppxZEyWmpj7BV5KVZRtbsxVEt8jFjpMa9KEXTyQBgJBcYkiLcUTN3L76ZfpZf4n2xmB5KhLhcPaM",
  "key16": "oaUQF3mpi5147ZFfAKeGWbHebuYEaoaShXkr7doCLnxosxwt2C9V5ktuicK1grT6Gnaasffp52io8qTaj92m2rB",
  "key17": "4fxKUg1h7ZKf9Rp9ev8Hu6pCQwRTV9VCouckDUwKBa75vmEC9SZtGGVEFHdNCQHGX4QrtLnVcUM4vLsrRTb2zYcG",
  "key18": "3BRnYdAAYGRof9mLdCzKuKwuhRydBiyWWzWS1bNDLQ7fVdumnSxWAHty9FMXKpVvc9FcevHF8qopjjPqeWSU2svh",
  "key19": "5v92siyRKgoJwpD8ekkmwhH1GwkN1NS4owDhoc1j9hiaxpmkXozq88nnTubXMxDgedZ5jddTiTqwSG2XdxGQZpbX",
  "key20": "26EMESHuRTSAM4u7JMSGC1yWkQYxeFTQEaTyGZZRjnYKMHJu1bwBMkRcCMtZz12X2cbnr3CAGvPNPjqM8k4iJAnZ",
  "key21": "4ac8irG4Tcdy3QESndh19Em6nmwJf4tbDHoCNzcMonJk3B3a2dZ6EV2ATPUBDYxMnB7YM6Qyi9Jn31bsbfmD8WeF",
  "key22": "52JfG58VpEADUsszrYmUPfxSVgJUNsTKJ5TxtYPydBxYuT1qcAMJjowPQqah2v5pTWdqFXZXFBDyEd3A8wuSL75f",
  "key23": "5dHF3rggsGpZjt7YUfRqTASeQvt12AR4Lpmw9bsvqcWra6YMk1hZHG8tyaVYqnErgVHP7nVYpwHiduebRxjsrpWt",
  "key24": "2VKDBeHish4Q3MM15VzxE1FhSQPhthoMQsDRs87Mdqd8DKBz8598rA5XS4NyYP2Zsn6j1iuxUGccG493Fj69bDPG",
  "key25": "iDcyjJR6yzoa4LA5JoNpRhdzxkouGnwn98feiFzzYeb4BcK58GJTSYNwp7BucrsWr5utYuxQ5XeDXAj2JtrAij1"
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
