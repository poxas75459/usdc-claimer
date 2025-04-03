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
    "3ZQTJddxnp4MA24yF1NJwc87yLn5xMpK2xRLqmjmiRczKXLGmmUzoRvTXm8Jyan9V3FNVR5isJbxmsrSwWRddtML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gb3XPf3zZmc2zsEN7MksacNqTpAscWjPYy3ntPxwdMxshfjUvRWzuMpGBxuFpuL8q2gVoBspqpEuTP7NwaLQLdo",
  "key1": "5d5Q8YsLJZgVxSLEbgn7pz9eF3wZNrrWFUiL8fmiqKS2LgE9ZRP5E1NxnXBMnk1L5yG5DA51mJKfUNNRea5ezPhf",
  "key2": "24sT2HEPD8pSQunibqypK1FDQY4tiNs5yVHkbobbAQSDq5cndh1Y4G7eoT9Jhc5kg6UYkj4XuF6uuedRMPsWdNvR",
  "key3": "XFh3jhdLZUYssNBAU18dtTKHeAzkr8guEZbW5dqRnk5tky2vhqUEfTpu5NTLxokoKkLwyHYGpaXcZVwBdArrp9H",
  "key4": "5mVT38twuyVgVdmAmQiW7aSzDXYq96cCGAHm7D5KmUUip1DdJreCVdM6L5DgEhL4f5CsdrnnonSBKEwwEqY1qqjQ",
  "key5": "xr2pJJTLeH7VqeLzVhkL57tdwkwnGfT7ha2kcVcPtmdZAa1yWRXWyU9Sih1ktaSotk5FCwq3mMC9M8tENXocNf9",
  "key6": "wt4CBD9NMvufiH4UzyndNRcJ3BrXwdndjgjbaTDzuZHu46h2rT2oFhpT333ioUiTj4YTPSFwfBiae7Uox2ojbwX",
  "key7": "gMa5qLMEHAiezSRacMnVndMrRZ4pJP4PWwYC9emt2oE6STKLLvsoZi4yzdkB6w1Mxau9HrRktRd8aR4WwmSSv29",
  "key8": "3XUZ8EaKtYCgRabzqqGfYATY18cXTkAcMnskJdXMBdYorWxss14habXuSgcbLzWoMfYFtwT1gXnFx41vMJU5dUDi",
  "key9": "44rHt6UwLnoeehPCUcSi6N1resnV9Gb9izF6d457isRvHVi6NpTGFporqtCP7sXAYJQbarLHkk2WyTvDP1sxmL4S",
  "key10": "5AE4fLVvLcKQY9LBUUmBjkC3Fs39F2L6wbeKzyxQmg5hsisXD9pAVYpWLfWttQP7o3FNUMP4NCNv5LMSY4DVTWe4",
  "key11": "27cEmZvtBUo5S9buq7ymwN4AhcR7avGbLYXkvUcYyvJUdahHjQipa1TnboPQKE1z5bRrybVJAnBLTCmJ7sidbzir",
  "key12": "NZV82tKpDKnJF8Pr7TnbqcYqLTbGfhkn7h9AL3mkWcgiMAR6tsaLBf2Lg9yfLhb8WRWFUvM3wWJfZDvjtNGSZT7",
  "key13": "5VRZLERuBS8Whnd6kkstaFEFkpQojv6WZswfp81kU5Y94no1u4cvE8j8y9dPK8ds18rHeHvNSrA9XkjQymQ36w5Z",
  "key14": "27SKRs1po9RkUDEJWuNrUMoF8wt3rhRk33W1wcLdLUUhd7JWQATy6hP5bWkNvhm3E7gngcazR8fSCw5tasd2udtQ",
  "key15": "66pk6mgVUuSK81CJ7uekusuYAKntPzfBvRWrFoNwcbtPmVUZRjGraQnGY2HK9K2Whi838vmtvfzbLxZaPHGJizKw",
  "key16": "3fv6ytf7idJBe2YqeF3dHDnmy5RpjUR3LcYJKRQ7qVLy23pQts3ZG1BNSWfcbsHdo2t3y63d5XsRjQhcxXGpKr13",
  "key17": "g8MHPr6iHMH2SqCbiDJUEf6W9dP33WHB6B2FXKCXHJRP7KBKXTc1XfZULu1BEuRjQJzo23tF24rae8vazoiaCnk",
  "key18": "QXBxdtvTxGXeQepNYDqPMAXdNxamvCM7i3pUho47R5zULumdbRGZuRRykcFzm4KXNH1pstgi5Fz6wnUgobsg1eF",
  "key19": "KUki5sSkgBMiNkB4EQGCaPq7ZSUbnenB3GEDK8UP5hYkTbo3dZvBMqzk35AZLZe9pbKh6yBkgLuH92c7omqTHjg",
  "key20": "4YMnf1pPHbUWc1D5Wsty7ZiM4rxXRi21PBRuj6eHJpwUDm9VNL6n2DemAaEmHKNWhE2P8bMMLr7dL3KweuMv3UFM",
  "key21": "4yDRcVg9tADUgRXYUTd5UPgZt8rPDEZNGFkUFZetq3CQPiEkpAQPw8ndTxCt8gSHJ4T2oyEJRDNVGVkRBzbsz7c7",
  "key22": "37hownbYTGT24oCSnK5DsUZuDCGrv11GTrcrM53C6eFfDSJjKaQWWdmGHGe9tA7qwQPqQWiNHj7JJTdmdpZtj6Km",
  "key23": "4TvRusfQ3n4bkU4e4FyeZhsk48XaNM9z44P7XzR545UeUveLYYXkpvPDXcwV6jpUCR1J69BberzYdkftgDabRS2N",
  "key24": "4G2Z1B3hQ1YDt5q2WqmYNo2QfV5LEkKEp7NwTkDVJ6sUJdxYDa49aTvTKsFq1dfkkLNTvPfJrv9jNGHfzmHXTGFb",
  "key25": "3tpezbdCzD7SSXjy1zu8NocmELyCrASd17qt7xfub14iVTo1C3Mu4hZjYfsq9p2zAaG7xbismyw6LXpRRGtdKYjY",
  "key26": "3hoQGbPsQTJGYb2JnUoiuunwqCQ8wJhJRyLbGbCzFrbUTsbkQHwReDpUgWCUhFwUm6VKh1rpBDnTCSB3HvcwZ3cg",
  "key27": "kNQDTDofZGs5YnZybM5oxdPxwc2Fa9NsJ4YJZEXoX5NsvGC75wUrad1snBefxGbtzv8A3Vvz3GGuCo7Lke2wh44",
  "key28": "AgF3iBbcxwqAYNYT5kvGCRdfNe4iMUqQgrrQqbusFe5kWnX9A4PQb4C7kpk3djL5nj3jLzEegFyE1wTGhP9Mgfb",
  "key29": "5UNwiRGsBZysgF3UYeJ4Eob5PjThmWdfdm8AgbsBL8KAHRgMp5qaFkvwFkuWDdFivGKSsrqX8msrzLBeMr1nMpLZ",
  "key30": "3GbyStoZGkQRPs988mKTnk4qnuPYmTWENM5g9YxFwEKzEMEq6q7TCTjVdeyFVf5ZkwEt68o3wQ6xyqoXZ7nLtuxm",
  "key31": "2VEmSYy2qcw2h8MgQWo8RxV967H6HpSvpjhLQahPe4Cvy8tvib1jCDvA8ZTi24j1xU4pAXY8FVKXs9w7NEGTEC65",
  "key32": "4MpNQDDvbC518ygFVVntxTQPGDCpvgSMx5rFKCaZuBjAzrmZGv4M5ZSFrjbjTuBXpzsNdRyMHoxkPDNJcrsP3LTw",
  "key33": "3bNDPjkHRszQwBVqwXD8K7UzVJ8MrV2ZUGKRgctJn2XsvDrhZYiwXC9przbP9WbwdzvfZwknunHFU8tMATwr7iwJ",
  "key34": "T79SsTdz8Lq6j6Y7AYxQ1qNzo3b3e9PvabnkagjTknMh7Gk3yLpaAammPbET2PUd8NaFSfHUX44Y7J2fyXjH4Um",
  "key35": "3iuyrPtaZBDwmUuZ66xMWx26EcuvnzaDHRDVQPYVVGPaEPsKn8Z1mCjTHzguLdo2B4nJWHvmFCg6jeV5P2dCwSD7",
  "key36": "FTiUSeJgqxyFYLC3eE7sc2NkFMBCYqwj723ePQiXPC2LJcm3yNmRoQGVoJh5vWDzBh3KBki2Ja3FqAgzzT5gfyo",
  "key37": "2RBcbyDqmXBhpbEhVvqnCgGbrw7RG1u6r7BScbN5qoinhgmFDoUzJTm5CYGRjvvgGJ1mQmik6LNtd26GofAxEKS3"
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
