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
    "4E33LHikEEDe3BBRGM8cTFCMfTiLWahBwAfVQQXMTu3jg1oeQgUn6P6u5jYdAvnUggtVBETW1V7o48p6q8gxvT6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T8Tkidtbt4uyL6Zq3vHB2kbU2H1joJQmGhhc68ebNB5rs9CHj6y6U7coTZkm6eX3fxrKdSRVTRgTEcwo1Xxiujr",
  "key1": "4qeyo8QCjffUu4Vv7dio7yyDunJhUgmbPWYwe7Gvx4mtUw5NZ9qJVgmESaEEQ4Ks9cLKVt63SY3dUh3ytoAJsAmP",
  "key2": "35zBRXTP89dxY1r18sdgzrVwDZfVDCQGeoqqpCNh1C8jcC1DHQpTL1hteddPutNXB2v2xv8Ty9iLghZ2f8UsqdrP",
  "key3": "2Z2ngNimTEP3S7PerVSTw1xqfybAAJTgn9MJJapp9GnaTp4uBmmk17pogSQ8Rgfsaw1RcfPYSaxzvdGXWpMNRzrS",
  "key4": "5BaXe7KazbZrRK6NzrzkVrCQ7JyADSWGGRCZPxGvCHykv3okvyfFuTJv1RmdeHpekgvRC8vDfrNypYa2k9dpoTsx",
  "key5": "765dYpN1MXC3vUUWw1rPsWcGh6NdhJsKrv7VG8cpsG9DySWJ49N8VPTD1tdjCwv4MqsHtoUo3wfzizkRD3pVYqj",
  "key6": "2dSpUCwWvktoDAf2ZrNLNfpUo8usixNh9TAks4EQxsAJj8dgBXV4PfdJh7xBvuUhGajrv9MUhhxzfUrrSMjydpTK",
  "key7": "2SXVUvZSZnwdmcZ7iQ1G66kFiF9DBRpeW7ZtC2jFQUqbqRh44KpCieqeHgRvcB7CoSjffuWB13Ph9HZy52VnmVSD",
  "key8": "3YeBczYGV4FjnGuifT24T6SJAm5nqUPT613uLReMveDvguDCvzBEcsc8gVJJ6Zw2Reb3Tjt6oqz8DMB2bDyDtA3u",
  "key9": "678QFAZQmiHD1LFNtLCPJWicWN1qbi5aUJ172qFY8Ei4WzvHoaGGbaewqVRvU3htdN13QFaEXngHb9eAPLHaBeu2",
  "key10": "dxxzQvFNkoVHT8FwkGjJo27aZ5NwMpJktDZR3SmGM9AztpevSS5ZEfkJeK3k1PVLeev4g2pgryenoHTMKQ5q1mo",
  "key11": "MJjZGcfTPedibCJXjrsE2FAMwKmAALvSVSYU9q9T9GJJVHouDAb4uf1xtcY4D33eYi1gyvfmh3qPPP7k2wqu3ko",
  "key12": "FXfMPu1gt56tvophbMTxmvkZCr2DicXC9FVAGwGzF5oov6m4hJt34c7LoncvHsPRDuXdVav2UnqQ8UJGc2Dccb8",
  "key13": "3rc3KUDQ9E6MzH4gSpPBdxyZya1ag8TVYQMTzdBkWmpq4rNTK7GQXAY7pRr6XBy6148TZbe34GpqTNtKWhqPv3kz",
  "key14": "2SVo5rijfUc1gW2R6xwQknsWWcAWHKuZ2XCUsi1gLFAyiYXuniw3mSNh4UDi33EpJpsshEfYBf3Qi2yysH69EKVq",
  "key15": "igt13CPFZyrjReQCwXSa2uMAVabxQhYBVSJfFY7k6ybFRhub3HN5jMb9J7rkMWSZeMHAbweVc13KX7kESbERrma",
  "key16": "3vFqEoF7HJuGUu256LJw4uBuXQyXf5jbAcokSpVAdP7BUBbaxPi5hszgzUkGTy2rVeQ5DWzLyZGLPPqNt2f3Ffbp",
  "key17": "3XGbvMPHLt1WFW88NZ8jj8ddcK8bbyELKJfbvw7uLrQLMs9RicmNT5NUCqm4m6CGyD4Fm38GECxveQ1brt2yfn8q",
  "key18": "4X6NRUWRRxmuKywWso9DeBUbZngohL8qpjBc8FYCA7MVb3sxedZD68HB2GNCfiL6kLuZ793nuBNqcDX1TbZtXU4X",
  "key19": "3NupiCdyGbVSkB1vujeoye6Fv7NeVWznjUXJioTko9K8jy3yhiJ4KNudtCrMGLVPohWNpa1dZZn1i5P4WYVNnp7G",
  "key20": "4kubLpzNTi4Wq3seAKMxULF3rhBj9aF7FQJ3137A1NKgVjAYoeQ71AW8ZRdxhWbopv15GhzcsMC9CeVx7Raoq6Vx",
  "key21": "33TeTxxV3U1uxRrjmcbb9uxZDkiyjCKUHypHXgVssLDaGcdyVjXUhvURjvm2VHZNNvbJbpDHTe9ozGm2RPqvx2M7",
  "key22": "c11H1UTHsSa2cQJdJdUFQPHM5MnAr1GmoG2bNuMnTsSv8eTP3gP9WkLJ8RPG89hAsjFB4XoJizQnbNo6jhqPm64",
  "key23": "2r3SsGhE6ScKgbyJeG12Yy1HzQi1DiQjoMNkPAhzQtxAznTgTkqZtqD7n5J3SKkAV3KLaZj9PvfAwQG5z2Z3rRRz",
  "key24": "4oJoE2AMpRLquUkW8JzNF5STa3vbDzeUtjitbrkZ82jQS8NMiHd2X18aA5V5aLqzeyFyp5sYHBPbbCHw7yaC1xuW",
  "key25": "3QfBKUFDErRNeVcsD5D8zXYMbaAC1csYwFkrxdQdAGcbX7Fv7tPXiNyKV7CriN5pxgxMAr7m2imgutkauPTHhrMM"
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
