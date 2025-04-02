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
    "pWRbDjPGAjKSqzLpbjeWWBWe9MuDHKBmDoDwLDfiDnDZdM36pnhgKAZ7rEXfxdEAd5MWbXpCvu51UzwLSeVZ1Q7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G4rmeNdBCq2u2WmqD7s2FtUh8ttPv1WC9sSpFnrZvoe5ccYMSRYns1rMWYYhLiYXkPUAcimpbjrg8sNe81PTQKv",
  "key1": "22ykxY1ysxGKvjZY8ZkhBnCRv4LZuR377rtWLA8MeJLkTcogmTjGHUXmJfRRtzRQw61BuF8gB1RWM9WA2oVpuXUo",
  "key2": "gay9rik6e3tSjrcSt4EDphzQ9cJJXdgUwmkr9vi75x2NEB58zDYR7Qb8Zo58jqfnps6mibjuqwtmtANUGzoHhYV",
  "key3": "3YuQnxWb7yQouPgToHnP5tUzYCUHs9w1RbDTsj4oUyACkfNTZ54pDwJuEc24T2TBcWWBoMbaoejWSLYdjkc33eoY",
  "key4": "E4wRUWwyBPX9tLkbK1ggZsWiSGnot8jBCAEmg3TZBmiaKXUeQUpTcLeShYwQZja8ChRGGGCgvL2jA1rfHn9ESsN",
  "key5": "59vM2P7xFBWeWTbdfSh5rXrxNhLWLfQmXbRwuGrcRefDq3kWThKzNsHZo7kQWh2Ypfho4VVZTkvnkpGzweAv86ew",
  "key6": "3Q6vRXBszVNWwY23mM3Qu5zZVXPVrhi2niAoZarnVCtAcJmTfA8776k915XoGcaYyST1pLYyz3sk6phQZwar9f3D",
  "key7": "MHCyBsknTxXWvVgVPSwHqiCfWb7ize2kPytTv3mNJYLeTgFwYCAgvLULYcSFwTv7fd7c75KYfveVo9tLSxxq43w",
  "key8": "3DBirQxnqRBBfvisbaSmHrzGLBU1VeHvhz1gU6vT72GcdcoGgwUbRjnBdXGoiKjeHQRfpwaccufgoZaBxCYeijjK",
  "key9": "3rJChKQCYZZHxXWMHvctLZQpw85eA8M56XvBM6wDwfHDMdL2NUPaS5vyakR2xR4pxfkx5zyrj2SqnRgywNcj2AtY",
  "key10": "XeAf6rTBGN4VcUmQnV6U6AXpLXsQ2He9ANpN3bekZXTdHbuzDax7xPQ6TeWeaLq2PPKn16XFgjSzbzEVLq3dPRW",
  "key11": "3ib6uYRA9MugpQcFwsnRWPoDpcxMTKC9BdGXReooPGX5MnviJfcWXUKWUFFZQ2vpTEqS26RCy8QHcvvPMW8jNCxk",
  "key12": "Z1NzuobDwj76RxN5puqNPX4ttb1T7KNXUvJHBnSgw6V3kLnUKYazRzQXRsZEUMDaB2n3ofkYpaWsYpwsrdQxVVx",
  "key13": "5RmJF8eFvUmeFJtGiJtQSQgkuYL8xBxLLJCP5gDivyq2fnu86aLJeTSG6mihs3xBohww4qQF85623tjiy9quRaGR",
  "key14": "4GZiuBjFb6AqyjWhwCCzoiTL5npQDruHJ6NeSmPASvnzmFM8Y4CfzdH2QB1JVwQMau6Y6W1XRBWN28rt8mBUGfXx",
  "key15": "2XKCyqCARu65TFzPDCyTm9Zc3TEG8nbZyyJDQyLWhmLJQC5whNn3RRuENLmw9TikHRmy5E9n4frfa5Ki7kZmxn5k",
  "key16": "2gFEqxGaS9x8pnwob6TaJU3utftKuZf6LRKgfYuQCneUZStyEY161HYxJxt1PM2u4m2RTUVZzCXn3WwBVwAKzHx8",
  "key17": "2GcNDD8B7ieYeDHCn7iQ4wt28rbjvihDR8Gua3XdJUXb2fdokENiHbZbMYNjZdcGt24L4GzrkEjRMQg78AaqNwp5",
  "key18": "VWMUkbLgPaCr3Bvvphxsz3ATziv3Lm3FdZeVx4b9F7rBLZHbXiQFVf1gnrc6KvbVR8BMCNEXewEunwUAbSBaYWh",
  "key19": "RpRd3csjr1vvH55FC9m3kK1WwfqKEXPqssw5ssw7cUJhKgfRgXiX2FtSyVm3XXY2BFLU7fmEbJPJZv7NdKByB9m",
  "key20": "3bqukU32824bw2fznqkB3nFGoAATkoWBeMxTAaX29EhJGqemkpmGyEtvwg6FzVmtfmAuZAb2RJywCB24kxzYmq64",
  "key21": "5oKBkwYSutCVYhtbEugkBFB3gfgwT89kv6HoAJ2EWhc98jqmK68nBxHkmoCfckrMSkW4M5w8AeqemnaY88mWdFBQ",
  "key22": "3iB1PiJn8bb2W5thD982vwRPvAPcDtHXriLtu7KD2dHaZkk5GAXeRSuH6vdRYKgCwqtLMWsxceBvWRd5WzZB17qb",
  "key23": "2KE8Ldui3dFiHYhTq3gqUDYQ1QZwv1HSyH9geXZy3dHinoNBxR2AZ8zfpStvi93cG2LMGMYPwowDHVL1UVNKSw6Q",
  "key24": "45u2VFaSsamxJgCxQSHq7wotMEuEBgms3Z8ikFhLayNx4PZ2bcYTbJgPpe8xkxw2nFmc5kGvKqAJF1gtKgocKdd7",
  "key25": "1RU2v7gFLZ5UV1bV8HWAgL61sXQQnp7tLhv2xgJJmzCNCjrjGu4rkoBfgn1TqyBHrp27P2DqeYNbjS4R5DdjhhV",
  "key26": "3Uo6CW8guUnf2gbS4nkyrkAmWHo2pKxEJJPNZaLRHU5gLftKbqvqdv5tmz9zRNmXkRhApSZPYQan2Xindqg1s3R5",
  "key27": "28dN3rM2VCsDQ38JyA2zF8ddPPAXRo2yg7rVerkKfF7o2gaCPyEwNkCiZf4PRsVyf7faP6o5TyjitvDedprGyiwX",
  "key28": "3pQo93eB3CuU8Dzic3Aos18Pmj52Hb2s2hwfYoSib2K9vR9WUZhoWEz3uH3S55hHQJnkeZBrS7MaHTH436tXaSHH",
  "key29": "63xNVbbqc4Mo7HM91izxCzPd6Ub4rTJ3pTdehFUEqfrZMc5oWDiYhtusv34bd4qhzene6jvoXBPyasBZiso53dca",
  "key30": "4GEWZF7WgKqtzNkwJB5LnJNVPSqxfSeUUdFJvjXNoBaBTv7riKhSH2VrUqocXjxqt1dWd5ygBe7sb79NUAE5LEY6",
  "key31": "3AHi7qe7dqFQGGFSw6qGd2TMHp4xPW2SK5tVzvH1DHArZa1dERyVA3g6cMctZTjsou6GTfkDcbNzvsSACSgn1rGz",
  "key32": "5oXWtUrUP7Qb3y55AzJrMvz8QYdVXSXLet1r7J8Hk9QzEBzSu9PbkPaDDtD1cVKmmpvRTgkf13U6iGGjcKFhGwEy",
  "key33": "2NcNGd9Q2ScaB7xEJBXPnUDRXHAnLKGCJmxWR9mmWbd1m9jKJDDLnGqq61hqLzyNvr1BafCEraWoHhiFVNmmrhrA",
  "key34": "2C3afh6JQvz2VnB85AEzo8txL1BT36SSyaTMe6gqcyYB19aLv8PpGCE1ipnevoRVgAKX2Cu1q8ZHrqaKMQpE9k7o",
  "key35": "4UwyknRckocBVQPBkxvkSQgWCaXLnUWntaNQfeAouEd3pQ3avVtG56JreDY2SWtjPsz7YDrPceKSPJyRHPLkH3to",
  "key36": "58WyqkSMwnyosr7u21hDKt6DKfAosY72NiD4yqhGak9kemnPWHpaPsBnDxxtzrXyUw1FHR868AW6CtMQFKBaAd4q",
  "key37": "BofQ7oiceiFWwdxD3VF2uGJrjMPNgVdexTrGgB1SYXq8ijJRSvaR6F49mJyvMu17aBah6kyLanSEYJxy5Kq6X5k",
  "key38": "3zip6D8UjrVmUBkuLUp259MCZ447pFSJQpViZRHhBu9XELPV4wG1oTbYGbDCNNonwZM6cDM2SNCYcW4m9U4CqY3V",
  "key39": "67dbVsfVyr6xbAETwv8wFZXJWvw62Jw3LkGBpMHE98SuqqcFfhdZGD7D6YfUMrH2cj2MinGyJNSTVcv5dVLR7Y6f",
  "key40": "4MJyfwhrYwrhaDDLt61jsPUknGE6z9v2QhUXJUoUDTsywgKioqyYpTPKfo7BhgMWwCxxzbAh4bmSbbcbxqwuemqq",
  "key41": "66kTo46pbai8EPQRzbDFpr4nDwZqEmyGSYLEWBre5HShYkASzCXHYt1Y24C1z9NLB4jiUyCMxUeK35EE4HWCGbgU",
  "key42": "2LFoSwMActE2KXVvhogH2zA6WsYWHcPdVChq8vnAJAQMDo3vbWFYhajRp6U6E4pKYcgeeQfdUYYYimxsL8Htwagf",
  "key43": "45PieNySLWefpHvvj8TKNrq62ZSqvTL5ebi2gLNj4K4SSYWkmpK6qKrh1zvCBPws3XkaymhVm51ZBF37EWU1zdKt",
  "key44": "2Bqyq8ahwmUTKXVZ485aj5RNDoqFAoHK2M2YR99GSGKDcqFuNWugriKpK6L8VQ2LCG2iNTH2qM6QbkNro4283Z7X"
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
