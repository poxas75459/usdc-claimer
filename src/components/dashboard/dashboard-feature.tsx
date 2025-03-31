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
    "4pv6QbuZJS2BBNsumr4J7LTj6ka71Rbpe3kRcpHvFBwVW7rjyxbexiF84i27mEMMyz6eAtXPKx27sfpXHZJCFRW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y3zGz2CJhkTEYG9oLrsqyUo9ApEfvRfd7X6GTtqe6YxWvFepg69PmoPyD9LLf71k3mfLoweq6S8trQKSBVpDRaw",
  "key1": "49WAahDypxDX48DourfmUFrv95JNm94jmgZaLs7yBZ1idiEt8R1EQ4j3AnAKAu3iW2G9acHqVq3ZRLPkrRn62eoG",
  "key2": "4YC2VTassvaQUDTZM2de2bM6gWz4idrkujQLbo9qLkoVbv2ESWGsURpJtARZdfwNN6vW3zCFcRGohYBZysMvC1gW",
  "key3": "2SUm36YWuXzeSspzXZPR5VbpNm1azUFcebnvzEua9XbnJ4SJuoaT3FSGv9BcYYHRDAXguFaD5G9iE1ycozDJJLCU",
  "key4": "VchivmyS4hR1USCZqN3fnCRuMz927kz1FduQj5EEyhq6YbYnpdTouyM8FyhaGZpHp2PBPtcSYdVpjdB1SrXnV2K",
  "key5": "2MCvSEnf3wUVCMRYKEpYDSXyvdh5YbZMp1rSW9N4S97vmFjLXynDFyRnDwJ23rMtsxwGz7nBCaXeu8AiVJDWR4sz",
  "key6": "2kqcbJLqDfqG3H76py3xxSp1vbhCZiz3oKzn2mgCvvqpjT7XK51VMm556USGxAacH7CTXaZybV3skisUAcyK6QCR",
  "key7": "JXVQA5UR3n6DWoyq3ZT5Gijwj93Yh96ZScYE3GMkXHiQL2kitTbuXAgSR4HWyYzPZgmmdVHd5iTjgViUvoovymX",
  "key8": "5nRsyd1S12xyMiE5cpFTbWUuoRkibgq9ryFJRp5T3FYDmAWtjVcmsGoWJeZWqYnheh2iZzMLy1QUpiN1acdzyNzw",
  "key9": "4ywUytzQQPaUHYahuLtgRX6TpdW15f51mDzN5nrjsc5fdhAXeq5w1cvCYXKVA16EsqEdzyG182CjVK4dFTP83oBz",
  "key10": "3nBM5wbmJQB29D71dxSntQ6dPGf3BUXPEEQYvzUo6C3mWDzrenBKsJdypwYSyvvyWUBXW2USzsovtv98s1sUoAcU",
  "key11": "4WG8AeU3aDU1k6L13hdhGqfv2wFEHSghvPTioGyjNv43V4tk5YFX7saSC8EX28H6MsMvw2mKRe1kowWpX5o5AZMW",
  "key12": "5M6ojCPr7UBMfRaTF9M5i3n7Z7U1ok4ZNrZazDF8NmtWC9bvJrEy3URvBs3KgbtYtxWCgCWncYRGXpZtFPpLCg38",
  "key13": "2wvUbj8vJiA8gucsyymS3VkuFpPNnfoFb9Pz5Bhar9wddKYZstwEssRJJesGcH8EVjXjJodSJrZDXz51WSUsGruY",
  "key14": "3oGUpg7MkBi7PNarhoxdVNgP6RVtwZisQjhqK6qyuezkFRWVjwvBwfThUFnuK1oTFDSvGc3UWxNV5Rd8y6HHr548",
  "key15": "5E8qL2VEgUpsXpZCVZ7Tj6KBqHk4qCcXLoopyZMudvG4BMmwC9mJvA3nvZhy6yG54jae5uN3U2PYczfwANovrhS5",
  "key16": "2y9MgdTHLDrZ2vgHcauxEzyqFuV3oUJ6Kn274qZNHQ3xffhXYDVq1gcKrDsCkajEHkMUZBo6trrCda7knC2Vua8q",
  "key17": "4gna926LBtFow25GmkAyTcLCtyWLKAW8fRq41ah2y49Fdkpz8VwQMqv1vh6fqqiwipYFMdBLPTozv4NxkVPnzWR3",
  "key18": "3xfnkEqvRFdU44Hj4yqqzebXLdNKFynhvTWvC6cgGDAT21cKo1GW5TKWypopoUz8tctBPTASn2FBHZFEyVTvaKee",
  "key19": "46jdffhygJ8N3V3YKxWZWNLcWQK1K2rRsCcpftjPa3Lorz76Zbn2jqA7gdh9pa2areNmwXJrVtqp3S8u8DcKYPEN",
  "key20": "532xCGJkG67U4szBcrYCwwCt4xMWqxXf9tEuQ5oeuRkk4GYh2E11xwUyEQbbWWMLksvkCrvJTPprmVHfShwnYZQ3",
  "key21": "cLLYabBncceGn9GqkD65BrBq7RUj49WbyEqsAKbEv1yMwAoYECsz8hiTPmWu67PXcNJigEn631w8XfZtxztaZ5n",
  "key22": "4c8t1UbAoNWFoSg4BgYm4M6SH1kYe8mSjk1ibXcQzD8tKe6LouuG6xmBB6ckGtxypQ9x2puaFohunptsTBBS1DSA",
  "key23": "4PKQWK7dfSvMnRZBj6u4vju1FKndYsiLJknM8YMxSz9rdkhcA7ZSTchjnMPP22hvpKuQU5A79BAeHwNCpaGL8zWH",
  "key24": "pLafTWjjnZoK5ABvBwJYZ4BW7NHcgi5ERsaePw5nWfKfEmYpK6LBvvgV55sdXXT3jJTsRMKme39uBBnTwXcELH3",
  "key25": "4f3tPBYzAf1UNd3KPzWqHwKSeqkyrkrxpUu8b6LZdsDPFEHK394ZtH7zRNTeuVvSmTA7JPMqNkisXCAgCdgdUyAU",
  "key26": "2D7vNEGTtiwEwzWVBZnX9XQcPp5VVS4qpsL6oBWf1WjBAFiUkprpirT4Cnhejiw6aaWKtz8rxJMhK5797FbvmSVt",
  "key27": "2NDhncBk33YpVovicYD3BtGTwEKYhZeJP56r1EtyoDLsa3bgZeQkM6nWdVEgTuKFAsksKeqQHXat8VvYb3boLszf",
  "key28": "3uuLfvDgnVuuEqeKo59zqtGTN8xq84cgk1iHeoRhKjk4fYkR22kgY6gMyium8Yoezhr2KkYrYa1CQqzBzfujEvYy",
  "key29": "5j3QPdcfhkohLfsrbJHZHEhuLjhkYiXGW8Nj7FMZQpkxmZ1xaqJaceQJRUuUgsavYE6WoLT1HfNyzyQPUjiwYxAV",
  "key30": "5w9EPR4VFkJh1KFmFR7gMaCva6vVsPghdxYs2AGH4tVLQMNwbjmYz31itiLbZapQiP13PbdRpKLZb8Xk1dQk5jhi",
  "key31": "3oJRdsny9sqowUpzYuXRx6FESFDKu8CAdjg9Lx1jr5oWhwJVc3AvUKyfd5peXnXwyH5RtUwMGmXKSBgg7tvYmD99",
  "key32": "2zpZGpnSWAp5P5fJQwKY4wQF1snVaXRCTKz9giovpF5eg791LpYN6mwSN6Cey9SxSRyK4MvD3NvFbrUpC7qAyHQk",
  "key33": "5JRnPQyrYzTHW49Gx3Rf9Lz3oawba6GiaJZrYH9ATJfzERkhdCP641aJxTK3w1MS3NDQRqUDKuF21JzrLromMNfa",
  "key34": "2pg8diNM7U1V15Ls8dGcsvA2wNz33i5ZwXdAw5qNQy4QCsqXPwKhE8M1KX3Cdh27ZdpLHKg5Qi2ThKg2VVRuf6p",
  "key35": "SVnU1vGDu85y7o6hQeqKNzYkvDS4MjkRcank1pGKiHDZTCjTxu2XzViaTJXrQY19daKb6kdLAzt6XNK9aoLn47G",
  "key36": "2tJRRP4cH2VhCwS3yxmMKBx1SCcfysJeth1XbNXxN8LhietPWytvSgk2AUosxgUu3LQK5doAENPSJY8RtYxXfhja"
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
