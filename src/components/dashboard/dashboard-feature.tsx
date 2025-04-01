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
    "aiVHSRmzotiBp6avexUgrbed38ksmmv2m7aZDBbJkHSmBWeDp6ibn5AVDd3vhiAFxsovQtrABSj2FQ71yiAA8NS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L4bfrkJCL5ikSLt1tRbV4Npzgb1Ag89G2apZNqhosoUy4w84VDS4SY8VTPBrtokyrsBGJnNrmYQ27eXmjbNVR4M",
  "key1": "3PwupTYQy7EGQkBfnKEquikkmyGSecYqs3djuiPDorFS7W9x6ezB7oLxwqKVFeMDWi3Gwo3433rSrBj6KchNVpDJ",
  "key2": "2H5p6kXku4FY1BwBCRQnjXGaBqJ9EygxT2SnADjHuUaG3ruWzVhuzcx5JxdaAzomUPCeX1P7WNvwGin7CUWVqPhj",
  "key3": "2nrKRQNQGrKeb7Jn7E6apmNwa7hhBBYyMndcosTaPKG6hk55c5jWXdC4XUs2mTj6i1Q7SVtVWjGhpibxiK33pWxC",
  "key4": "5JwLq8RVqKNFoGDDRQvfFerh6zKFzzgNyzyGmdC2zdS27QFTjZbVQKrG47FhYf8tBAXSRZtczJW4qifVH4SVbrTN",
  "key5": "5TYAwEsVjtAYWzowAxunBeo9DB4EdLWcMXJppiodEVncyjyJuaeCAPFYhHGAqRGHrGjgvvwML2HSnEKc3ymqqDxN",
  "key6": "5fzx43K6UqPKsNHUbMbn98dyhcPu3g6dqpXXexrHPQKaJ9h342yvkhgT4WMDXCPgrMpdRC1HeQ565uVMdY4gPKvT",
  "key7": "3UBukqhZBCSJUNmMeMUpzuabAhYg7g14VUSXumTS5ub6oWuwsj4a3JcyaKWbqvsqCFWmB8qKRMaLUPKWmvBv6RpV",
  "key8": "49NrAswjc6Ayc4XptUNivDa93Sfi1GhiPBP3Mqow7etfEZV2itS4yC3bdK2R3hazdJqZwvfXELL6AAeoY3KSNgLu",
  "key9": "4kaDF79UVUk3kBMmZzBa1R5NFmbnfDfMMVZHyZ9VvdSdp83WRcYxKLyp8jruchFSGgwP3TWpnYAWiLJP8z6ic4rq",
  "key10": "rXmLM4KjHRNUtsorAwnWUzY3LF65cpdidvnSUWzgdZzuPrYAYax2UYxjWcpU7Ytta6rYJbH9aRcuyPrWDsB798X",
  "key11": "2rJ4EzQ37WHyi3nDLyBPzhd6kk3gWcYsFzqZLW2egkEkKT2D29otGWeTkZtRBB1tFDj8VJWPqXp6coU9ddZvy8gN",
  "key12": "4mVusKT7QGJCegNAmofZ1wdpDJDck7fPSZFEaK1xnNUBLDWB4mx15eT6TLDWStv59GCEDeUf5NMYfxnmmTQ7UReE",
  "key13": "EGMhFkxsSSEU7Zh6whMyMca6n8L7iwGMFaW7x5hSevW6f46BjPszEA3nEcCPKhk8ha3r3WqUBQvHYcvVRe1HTpz",
  "key14": "5F5Tb8PHYmg4Gq4pVyEQnwzPHkte8BKHSvrAf1aftHddC6YniPjk466oZdVrQzC5nzph4MDaeMuP2w7Numwtocvb",
  "key15": "3z4SN32DVe9yQBaWPK7Wira57Rfbb62CopYYxJFoTovMJzSGD5hJVHn76qViHnh3dZ1DQ8ogpRc3BpTNzfS7VTWV",
  "key16": "4tERfMmQUZrHQQ5GhhQ7ofgwnJhQhTVixCMWGbrjSVaEaRj1fuWkkR5B8CGnFrcrTSB3ifguvUJEBqTy1rTxMJTp",
  "key17": "3oaDcmRQxGHpqaXYR2Xmvj76jdfoNzoMzX1u1d5VbFshARgSZvN5p1e4R7vytZkdfJghRFizy1fv28XjS3rztdqJ",
  "key18": "4Y59vz63Ta6ASVDsTRrDGqx3SUbzhaJAYjShrritWjVSLqbJRYbxTqe3AJmVArKw8A6m8ydWQSwFgpHJ5Ktmhne5",
  "key19": "Y5i6tExd8Gj8t3EPvehmewWSpAxWcif5bWAZbHnQtjLvpTDywS4kWK4tPJNT9sV9CeE4UAPhpJezYwV3HfAqSgx",
  "key20": "iNQo7K3DuzCnn3BntvVW5amiCnFcT98RTX5ibneRcNjFMtoZYWnJbMYPoboDHqh75bo2GnasDgzWxR7EohvxrZS",
  "key21": "39JWnEeAFJ31WqwPfgZQQQMbeqADMgvvS62JvcSgN1Kwa7MWSQmq8t8Xi7cbWa4msSrdXyERLhxi3iGgvCMyoZbR",
  "key22": "3wZB1jEgg5rccEhRs31j3nwafs982HbbMVPph2LUquJzChdajkH9QpBaWSPmFPUBNbWjG2RxmAp2KsZXyRWfHPwn",
  "key23": "x883xoJK2drE2kYMMitFVwgnsTt3FNGQ78L4zsSMP9BvHc5tJYSJoLgckUMcdcjx7pE6G4vzYXJKhg1rmtM5PYk",
  "key24": "2gox2AqZyD72jdp3KSsFtXUJpV8WN5swRHfChTRT3h76QANU4s4rNJNWZQ5BoNqY8quQ8ZvtyHhp6ZYFG6kMJFCd",
  "key25": "5vsMN45b8tMWFzGtDBy7Gfor3tJvUVyFjXPqi2D3YWuCkfXRF7RCHL9vgMoTJWpKz1JEFnWZmfL6KfPhKjQeMMd9"
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
