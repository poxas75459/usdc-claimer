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
    "9UGeS5jstVKtBDgqtC89JeYzx54mvC4ubqtJq9o4Mt77Hjj8U1pQrREAq7MAAmNxSKhktpaEDyyL7LvuNyV52wg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39swXNDRfgZyu92JqQQkZBkWACFbw8nfaqtiE4zzUPqyv5m6VVTHHdq8cjyc9wyxdJzyzZCgau6qhU9f15NS23L6",
  "key1": "7FVkns7Px7tzdipKrs7ZppYkBkdabiwiXvUipYufRDF4voTqT6BgkaMDG6hVv9RX2nDNYhvq8ChuSAcB9zNTKJw",
  "key2": "3ihuRCGsYUkwXWskDtL7UXbtHJd5wtw2H3sT9i37K3n9Ygd5HDPDsZ8hoQNY4sbXc42UfK9Lpde4DAWbM18FUjk6",
  "key3": "5cjT2xtJT2Ck1vKar9NaQN8eBmSoMx9fh3J8zWH34w1WqqxPNscqHBo5m8K8HYLugkd99so2gcf8vY2d6BMfaDFh",
  "key4": "52rom8mWFy9c2tcmkYRmavVvsjG9m1q8i3MpaQM52GfzBp4xQtRYaUnbhKjNLQfSPX25hsKdcQmtg7NdV24CyA37",
  "key5": "2D8UiFJKY6qJPqxCRG61PD2cfxZfA27noTC4ks9N5ssbuPvh2HJQtkd5MkLb4dxU5Jv6epj8ptbC4PvUbfXyw1tH",
  "key6": "36soWJz8nCH2Bd2KcXxbiJBQdTjaSGgriAhFiXvuSqjJu5b1sSmogSADfdAQiwSNV7uqhPjSqd2iCNqvTbGmXm15",
  "key7": "32Nc74BqTdz5CM6MCq6qphruSQCKnhBvGCoNob8J14EmVKNi4KU2Y3ZoednhqJGDiQ3mbfvigPtieowVYA29tevz",
  "key8": "5zmRGGHYSD3ebaDp8JyTPLEAa8841wMXHbW8eCWRJFNd7ab2JqhxnRvkq6sJz1wdC6ixDYrZm1FZUGfBp4osbVdD",
  "key9": "2MCSrAk77TgSkNvaxMznGzZgg1rSqZYo9XvnGfVRpSC9mjRBbSxDtPLFS7pDHLVsnM9KGXFFNB8QyJGzHLye4sQQ",
  "key10": "BKCcxY8u8wL8sRpqYd6Q83PLmnHByMNbeyFa1Yjn2WNAKwxFKVHtHXEjRWKdrS7KeLqXwnSRaepEquCDMnzvBbG",
  "key11": "2eP3sXZU6dX38rEFjW8B4AHu2yiiGj57LbxZ3HwzTXzLSWzbGpVJxW2QZM9cMYxBnPHBm7ffbqVP9YoAbbPA61WA",
  "key12": "4tP6pm6KmZnurNPwoE4zc2jvAGVAfsUjZ9AAqTsrKv9LLnHL2ZxAPdSz187n3HbZzqWY5MStBeBK5Xurrs8D9HBh",
  "key13": "2CgTR4y7fFaSNdC4Ku1C3f411gmQvfWZik4Xdq7hTFWaqA6xA4G1KNThp2qxXXvRNn4pJg9S7Aw2FHDH9ymjCVbB",
  "key14": "3F8EPsgXdocr7zdvPntKtaGACiHBPPZLb1cc3GGDyU5YE93iZLZ6CpTGSHQTWobDgAtDBjTpWmVsgVP83zY5coAj",
  "key15": "3GxRjz5HSHcXfx1zLJgqPFB8KwSNw3rKxkSUM9Ldx8srayAm3NaDxLVYq6gHtn6k2X6uDPedgSKFBqTQggvnTLa",
  "key16": "2P1C4cJptbgzU1hLbD4QupNZUYM9QzKjd6A4ZjKPt185wMJ3TxcKYeoebiDmk1UEtDYCMkXiskrnEFtwbD6R9D1F",
  "key17": "36UmstBee4uqyQ7Zy5gFo2V3okq4aj6qTEq1PcV6pFN5od14FMCUZpR7fZ13BWjJDAopQFgm8G2r6go8Rq2urYqS",
  "key18": "3hQQkdCqxmW7K7pbTz1oLcLFXLiSq4MUEbPGhMWnuBNfMgTjt61ixDKCQcbfiV87S7ziR335WrzezbPcZdLY1qxj",
  "key19": "3ecFyMDrSk74JrHawqojgUgEbwfxVEfkVt6a27PveqJNGg9uwMDfKtZoQ5f96veXSYELvig9ZwzHeE6L69Z73igf",
  "key20": "2qw4AhevQScJ2s4hj7d6jDkf3vK6cJaJ5woH8hbimwxdGQhDKTTYxuydPkt6U9LK6znD3CcGKc5RJxqbGLJ27zEe",
  "key21": "U2wVgCg43FK9xEA9gnRdESgmoxkNpZGdZJXKd15oYSZqJMwoZHpifqNmxzPcCb2DCMLJCB9B4QyD4Ha2fdZXyH9",
  "key22": "2nGBEGRgSosNDacQbBNTnmvujTr2tKse8F7dz5QXmSfqPjt7dZRm3F6jf2Vnh7KpPVVuwaSapW43sXSkfWYkLa9p",
  "key23": "3WSbefBtq8N6gUMThnxW6T1sRD6mCy1zpMhfys6xKjXi7ouyFC5YepgKYCAEZX9A2mGpFioWu5kVdEMogkyu4wbM",
  "key24": "2xvMgRdMyqu3a6dWJS1GFRGXkhTtaoXbE3bNujnwdCbsegXAMUYZPqqL15sfkUwhKHLcnafWp3TaPJVbygvAocTS",
  "key25": "3Z8dDTRaQ3pUjSt11r8YLiiVHHNSDMymR5WiLBPhcoGdK9KbTajJrkdwseQTxtSLy3fwyzyU9vL82x3WozLWw1Qy",
  "key26": "5ZKRU8adC4imZZ8m8jBRg96sf6DELfw7TSTKeRNjDyL41EwvU9R1sMhjW43Qc4ctehds4eSD6ZdFyfGDJK5z2yp",
  "key27": "5CciQ3TBTM1jx7aEidpVX4oWBEu8xnJ6W3EfJa4snd975M4yJzEhFpKTiw2QepJBGYBf8k93rpXhJFSBDN3z9ZBo",
  "key28": "4JnrLJemxjrJd5VcXfgYmmx2iYLnZr4HtCzmQs9XQc2bv2mXWE6TA6jy7o9282Mtd42V7o4T8juU8e6zDN9RDSp2",
  "key29": "CoSPforddqD3djesmWwJPgoaUWSJ6T3CP9rWi7ycsSZ3ikiHhYUEGPR6dvfbdTBqSzWzJ8F7EKLJz37DyTSMj74",
  "key30": "4QLyK4H6FYwxfcZpMSGCsj3i4ztizNh9P5tXjnBPx3mHSjiXJrU6tnX1RRMdLYnWx478DfYxHxHZsvBoiJaTvAab",
  "key31": "TPb8SSkeRj7JxhxDtoX8SDuzpPKeze1GMS4H2YvYpyRGMrx3tQhuvmRL1Wfu98fV3jh4B9AWfEtuBocjmy7MUJT",
  "key32": "5MTeM2RiVwayVdfpThbSavYEUuaUM4tUdXXAhZ1tXD2Qr1sSRFg1sEyi41AQZzJBP8BH1axJ6vXFQD6WgSUPnvfE",
  "key33": "57kECopspZU4otHGa6jCNTqW6hgFFg3tv1WYNEW88iA5vBeQn9sHRVALskS1fw3oQxQoeDikReDbcWt8m2nRpoun",
  "key34": "2djouABb7JpLpSG5QHW6ss6ijLE7uUa9c54Gy7yGxPbX6kY3S5YczrPayo7y9hGJq5H77mvHP3rCvkb8pdagxZP5",
  "key35": "235sAM8j6FBbXN1k3ncx9KJji2gC7U8ARGgKbnjvBn3YWBHXPobzXbbHRUmf2NEZbJZEnbEyXgwcfb8G9NF9oSKF",
  "key36": "3DC2fFGghLwYwHnQeLBx9NdDJPtAURjoqmTXdET97tEDh5yV4yv23xgCD8Cdv62MFjo4ExwSQa2Hu2xVC5UnhL6G",
  "key37": "4dBAgxafLxNhZN9pjJmhAFqXUXLgfxTVKm6HejskG64mp7FeLgpFLMJEXWa52QfU8paUcsvCW3SbHZ7nun7Pz2Es",
  "key38": "3YCehu1eaZmsqbVbcMaFNuTMyTVvutwCGaokcmqfSgfuGBqjawZDt2v7cp3amHW7Z1JVR7z2MHcrgWE6jyxYPubg"
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
