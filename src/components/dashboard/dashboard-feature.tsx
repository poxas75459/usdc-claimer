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
    "3pMCfCT22g85YxRJE3g4aaRknxfnZUBAzsEzPpWeTL2sMeTwfYESCv7f8DucySMnqZqpHhmYX6LYoutHHqnwaYdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ndfov8Dbg9bywKNcFQFXPuHaqEa84irt3PsfupxqQYgShsCyqiSYPGAe1GMMXpcmZB1KxgHfvA2jXYVMbPWRPif",
  "key1": "54qRkbUp5qBpaJUFBRRQrZ7z7gqCkp5tcAe5Ziu9HPwRDnjLcyTSk935yEiVvvTurTYN1H7DtRt5U5FcF3xw6SLM",
  "key2": "5ajmsZviYrfpaKbzSTn4DSR8idkQ9NJvEMFP3PCnwU5CRttXqUcaAGWU1Hq4eExCxx3PTtfnjUv42K9FgqmbptRQ",
  "key3": "zQ55qvXi6EjzTw9a4vG5ruykRo6JsL8WkRzGDtLKVbWTn2rbhirRFJHdfDmUxQXwnk6bJcEWcn5zyPAg4vvqPDu",
  "key4": "33HwYhbmm2kCWHiTJZhpyyuuSJqiav3MLbePx2LHLwRjNLR5qvNm9EhMs9dPPvMrs9qB1URB9ohHdHkHkokWAN98",
  "key5": "2mFcHWdwfM27cWoAP4pqZkDGBA6Z9jNgHTBMpzUbstmQ6Vcizb9keUFxoAPtr11fvxgnbxsfWoFx72sXBqVHNU14",
  "key6": "2TjiA7kyEL5KgduRSFV2bzykRaeREhbxDKHCVJeKUU2NDZPKjL2xRA8B1EWtphBNZmySd9G53JQfYZZVzCnZpaPt",
  "key7": "2rgk72SF8RD9ewhjvNWkNnGvyjezz2eeBDS4qwsDfZo5Adbs6dHwtWJpTkSDxjMpvS7HfHizvSiYCRBy7DBwzH4x",
  "key8": "xJ3ddkhdAfwpUtDsNnVLuUjV97k1Cmpn4Pa7qrwfsDW4UJgLffZ7CyTXuBByszNNPwxzASoLiAmvixTXHHC5qkv",
  "key9": "5Y5ABftL6AWoP4RVoMgkaWGeDM7Ai4fGofCQNQdHtGjNpDFmfBiqPjZUZJ1dfJmWdDHcxdGbLXsGGgEyfXBVGpMZ",
  "key10": "XhQvi6bHBq18NxWPLjtJyXehTmzt4kye8BaVDfLxJMkWYqg5D3egZsG299L761Fyv1fjSEdM7DwcdG2MSHGzT7Y",
  "key11": "5XgTiZzdqFWqyjVK3e8ZEC1KCZidgjtKFnLBB7VJcamPTx1g5XHUezbyaP4NXE2UaAWxBfwQkfg6cqzspy2WpqzL",
  "key12": "3hL2Najc3jTxc5KyK8fv4YVisc44xAomfKbLLxGB8KwQna8YpbpVigvg9vfmgV3nzxmzqq15oevZDJNZnMo4uLbz",
  "key13": "8UYG1D7jbPJGotbzkHB23mJnnRApYLUdjUmEMREjXTCrexkZpxjxCbTQ3XoWHXfPRbbKFMTfop5s7GeeEnc3nWE",
  "key14": "V6AGpTPpdrAZn2DJoR9CyEBUe8uRZ9kGMG2xpxWZaBeDfdjKHn7DMRYQykRn5T34JzQXALxeuLBqrZrpVb9kjeF",
  "key15": "osjLK7Nnv476FgNjkjBX6i4MfL9eACSscnZ89w3puN7zExUHquziJT48pVf6vyByQLcyJoKQdDbWTHNYJhbXEu5",
  "key16": "5ZDyc3bc4iH8Let5YtqfR9KVGeL3ozP3EiNzcgMR4Z7yxV6ubbkwztYdHuTLdSG5sGaWLAfVXxt9nzqpsGcUUZSv",
  "key17": "3pwGDXiA3FUdWdAbB36GfwBAvPoiTVSbshXfFKsMJ8rY1oHkFN1tJqWoMD8wgyAKhzGWgyvYZMZZ3TkYpk3cGmiB",
  "key18": "2wsz9kcCFKfExKcFqFmdJEsqqgkuT45zPKyzMsXWCLPAAx5nRTQGPdfM4StQ7GH8srngYKXyoBZdVSqbdBwosLFy",
  "key19": "sAFSxiY22w6cv7htJtchHL37P5Xj19oS2DUhYXKnvtMuSQQze3hNLqCFmHqJyAyGov8MhCoWuPaDrgsDy4b2dQd",
  "key20": "5SbMaS4KvobXKHn9h3pSyDRHc5d6PHVW1LoLfrdwiPurcmnjUDy5Se8DxgAGmqrdVq8QCTGFt1n5aA7sKubv6Ee7",
  "key21": "26ZgwmDjfm9XLvXGqqpT8waKg8yk82S9Ym9reRCLkRabnKSyZWu7CcWXCwwC9sQhJSAFxdPVh2dKEfW8iGYbQ56m",
  "key22": "2cP99mafmwx1Pzt9pAhHAkkJN1FoPBBQCbRef2M9Lv6K9vYWpQuyXW3ZYX92kT24UW22F8LhMdxawNFxcXjbvQfU",
  "key23": "2wmJHU2Y6WVRii2HghkWUfXw9fR7yRr3nWejvPPZveejxge4n775CsPzHPhCXAm5ujbms4P6vTte7T8K3oPfHqKB",
  "key24": "U5JWsULpiZ5qBGvdBA7tHzsALNomzyvg3YcTs3GsAmTjY2XD9dHu9QCNDVHgJGTNCmrp8grxrktDG1FPbyLDH19",
  "key25": "7vahHsHG4dh1nDqM4nATF7i8D7fuwfqPaxiAY5DzMGxWNbvyzRu3fy84YqG16mKjFYdLrnZh4WV3cHcHr6i69Dx",
  "key26": "ZphCN8nhtWhZ14cAp6aSTWNFHFtmronhkmSBNi46jkaFGvsTfqJ28qwjFRSeJdiRCv8VjhN3vSZKEU3WBmFkx9F",
  "key27": "2yMihtgmCJPDkbWrYg4vp8UZYdK2t9v6ruNVCGGiReKKddn7YB1VQpdjmiMJ4mMCGvy3KQ51iv3Y7XrZ9qkHtJvp",
  "key28": "29sRLG7DG4NJZJTM1dMFzJeGG7vf4BcvKmR8mXDSo4WrSBsrw2iBopTZguVqc9g3iFwouiJPkr1q8F5uD9Gye77m",
  "key29": "43Y5Aq85oEf3nHRps9bsMsV61QEd5QJioUuXse6brc2D5Gd6xQSMyeFsYLTVcDNzZEfnNkMA3JYRPeQrdZ2h5zwo"
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
