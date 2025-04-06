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
    "2kWawGNGUAjNsMJkCxUiNeA9zdqA4x4jAmwEn11hQcnd18kdc2JXjGxPtmMVhFxQeKxukeLVd7esQnsEi8goewnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fKigSYKmdFTG3p7ezxqTjdEAWbd5RU9BDP1o85w6oCnkSSfTqfvTyWTQQHzHVLLFTGC1P8bN2FKSPY6NCvXZ4eu",
  "key1": "24rA4j9YLJBq9pj1zvkWjwv32hmtQWkryUxJVVaehZSH7L1pQZkhoAjqo6oo3rpXHa92L11F9JCR5LdWvQ5reHZQ",
  "key2": "2SiXgYj4qMVjRRY4jUbHtatp3wckD3rSCkjZmJcEYQxtbdpR4Rpb8fFyohxZb2i5L1gA4Zra2rz1FGgn44GCHj2U",
  "key3": "42Vc6D1ncLBcG6NGM9YwyjiWTYWtttZH2N3LBhcdNJwtjwuvhZYUPhS1i65Xhd4oe1VvANh7tUANJgpmfmZ8R6U6",
  "key4": "rJLAYC9Jhx9L1YGrtLWVzoArBkdn2Qb1jZpLPjSu68xS6HUNUUNMGBJ1WgHBtPacBNtJwRBVh9cwWjuWraVUnPj",
  "key5": "54h2EerrQXSMN9Gz6pxhC514djru4BWNwQCASPKfgSnNz8WE2Zq2FdcBDujT64HEeU3ZMNQvA16fqsQhx8FhYcFa",
  "key6": "4mN6njnuLFpuaCAaAZW2T6iMh1gyhreJaaEdzZ2hWQEBiznXAKWhncgfQM6spTRw6Da7y2xQiDBbrNTXqwtsJ5TM",
  "key7": "3nAeB2nUHYWT9acc1ZF5NvkNkBurE5VGbxRy1Pensf7sk8Le5LXCaThSfRUdM6V4LYpTLRqe1XdXhvFHp2zCaY1K",
  "key8": "2hjqTWuzhqTAVYWecvycYfdmwZk5GQo5Xt3UcZ18xXdQY4XhVsSGhrqhskbg3kRpySoREiPK2NVtK3g2DyF3xSUk",
  "key9": "HqG2abFhMu7D56qEoFsvBKULJFqeV5a2oQ19rM51DV43T1ihEXcmUfGL4p3zScpmeYdsHDLvfTzSZzrs2kBih3J",
  "key10": "2hMZqcL8QCTpZ8kDpgDxtdVhA3Yec1vhXkRxMRojgkGuqbcLE8UiEvik9kHKbAcDRoTEm74SDr8Jx7o4ziDjcMwX",
  "key11": "3zRPcNq3GQm3rRfEssi3txSDZDYEZAosGa7531uwEJmiDu1KnjLRKHT2y5FGeRLx1J4R6mobM42K7nuU2gYeK5ov",
  "key12": "4qG6ZrTwXkvqE4BgioseVrCRKrf6HwVGhG56cJScoUEyS2cTB2mKZyoGboxH4uYyJjAx1TqHkz8kMxma71gVYCop",
  "key13": "m99B2SwJqTHRWxPrY7M6QzEFH7KPm7xDgWuy3r66nnrNthkpnfcefZJMHh3GaYgFFSQQjBmxjw8DU72nefbQrPT",
  "key14": "3wRLcXBoJaY6S77WgeVamz2RrGu9XUpAwWWBM4CvjTjz568MUWWT99uKuCLSMAtgoNfD8aKGH4vh6iZ7wdPfVst8",
  "key15": "4FbV7Jc7fUY1Cys9UVN7ykrB15uFd5VYkLhFfk1xmMuRZ33AKcfWX1kU5HoUcKyiZYv3JrqmoHsHKnQZgkuB6FXo",
  "key16": "5PF2pM9E5nFbzRDoZE9KUMYKxwjkKac9VCBeLDJ8sbjmn2WNv3nfSwwHZyrMMByXbtXJqAg7jkVSvk2h1SsGxTG2",
  "key17": "4Lj39yHSfY6WKGadWqsBvHdsLqYUEEzNvKWaT5VgnMvzcihnJ4FjuYhEXPL2vQawBns1wkMP6VySqGGmW2W95JgW",
  "key18": "3fw2cFrEYxk78duFcAHu27Xmurhvcn1SvPci2zp3ZG6YpdbwL7Eb1sHSZyzkhzBY1X33RUDiTVVKN1Ce4e6NHifb",
  "key19": "2J2nu9ZV1WUtjaDC7eNzsCe5tPvS1qpUFkYp4Dwo1nr35wGZCQ2w4LeBmPjeNMsLRHh6wXVaPkcCVbEnG4mmKA7R",
  "key20": "66VPkSuqDEz6fbqS725CGfhT3c8YuGHb6S4vv4phYV5rfZKiSj1mk3RYzuYpqgsJb1U6r37R3hb7SFeGeJFYJmRT",
  "key21": "mrdA99rGhwJQy7M2YkcNaDcbiEVUXogqcW8CkYTNKw8TKuaspmYwHFFVB7rtL39eUrdigZ4dtTxogHPw6RdmSUh",
  "key22": "572K9YrzHKb5BY86DgyN6EZbQkL4Gf3XceXupFjJ8ENfHrtoeUcS7e2zKefYmjPnx3XgHuPzqkFvYEN79YNdEj9t",
  "key23": "4d45ouhWZakUFZKHfTZjN9Wpt74tLobtMv3hX9ZMfcCeVAoGcGubWQQX1Bn3npoTrWDMxjkhmGC3xjQJqKTk4N7z",
  "key24": "3QBic3c4ecNMbphF5HhWJi5yXpGaePpFdo8bGS3VdAmxKNSa1g9o5vqLdeC4VUALTkm7oEwx9LY8VyYfC5Pc2V95",
  "key25": "6191ipYb3MgPWxRdKgm4xFxZtNaeo6VBvtf7HvvprCmWkHSfPJgPY9e7hCFMN4mGEJiWcq7C79b7XzVyfdMpty24",
  "key26": "D9MVBvqGfW96GcqUPMdWLdaoJUjdZvKS9RAJDNkvCw9yN5VWFrFqJD5BaErFDG2XYDX1vEZjSD9L2zUMXboEuWU",
  "key27": "NSHeBoZ8L6PdXWz46xvUNjYP61XWXdJWHjx3SM1FHZTvYRGGVyLMEupUMTFZp8398V5KEZugX3wYvxLA6y862Vb",
  "key28": "3f2RBVUeDTom7QcQXWno2u8RxjKD8GooHXsH3bFmykKFXax1JgY6JxHyD8xsw1FLzqfNXAPgLZ8sMAPH7svwQaty",
  "key29": "2V1LheKfkwqNoySJNKcH8rJxJ6Zy1ymryV2jEVTnEFCqMum9Ym5xZYkJcey1z4jYpTGDcXDibzbs6DWk2DMUb5sF",
  "key30": "5bLQmuidpsXnQSbFYko38PdbrbZicwvVPdrJJJCt9QwPqgGxU9Y8s9SmUKV2a4MnHmHQTrd8LJVFczzC2xXFvf7i",
  "key31": "4jD7w7gxJMQH1FzacKZh3GKGNVBKayKgCXWAsfM45Vbvt7oMF6jujBf7RMFuLVGYqr1cZ7TXarYNpwFrndyoNDec",
  "key32": "3m4eR1jQwCVcxd1oiBNtA5oBQ429B4hdw388QDqKxNtoyVkeQV2jSGrLJcNeoRWHpKAoNSMwT2aebvvrSi3qEERF",
  "key33": "Xgw6VRWuR6y7wummcH5GFcwKY8gHnQzoY4PM3cxYqsw5cCX8RzEwA57EJ6C4QQqw8PqCHZpuYkGKAhfr57tBPTs",
  "key34": "39JBKfMJFKZ4yzHcpQ8J6tAakREj7T4NzUXaEgHfXDbEdj7CYNq93G1XmccMkUpSGrk4dcFxNf6Ba3VSkpFNTzim",
  "key35": "4BGMy7PWgrJnK6fPQnqPg7cGkvYNaM1K9hG3cqSrEAKLa1hhDqBq29Z3Hcy6PvUgFpnWUVuXu17rRj7qVUQp69mC",
  "key36": "5iVRETMRWdukjfu5MZknKirRBXrLLEZyMph1q1ucR5veDcsrUvLTmVK3u6sMRBnxQsQmtU2LG5SVCJwQHAfM876X",
  "key37": "5aPqWy3T7Du7j9FKPDARAEFCT88PADF1H1JwAnagLzawVcnKAGoZf2i7Q4MpsxxmGBQYkP6hb7vabs7CoTpzJ9Pc",
  "key38": "4G64HsU1btrkGEtumeyHELJE4TsSm1fyuCZYdtKanqpTHgqp1JNpNu8fxmNwB9ADNAp7D1eb8c4JcosaZkqJLDM8",
  "key39": "4szhMW4QXeGp3XWP14dGpoRGuyYFwSts2wHTZdeRp9n8qzSVT7UgSdJbFLaTM1CGMTmNEUeHpjiXS7Bayah8vf2S",
  "key40": "2ZiSvocL5PrXQAqp8u2ThCShNYdrAWsQBKaFxirbCe59aT2kwEPS72C3W9QaoeJ21gCsf1NnGasMDXh4X9jc64Ko",
  "key41": "2p6KPznn56kLpbEkfb2wBJrdqWNLac4XH5vQrP4SzyRMWqeiYfKm5q3gPBXJ4PSmpn1xfUjLTs4PhrspA929BvGG",
  "key42": "2qHb56DHBnwjpu5AQVX6qRk22JcVJBjP4pF8qswT7NkBme8cR4KFrdS2sBKxC6nTx6enjSS9tF1jRfoTgbHQPihv",
  "key43": "2peu3AkrR6My5EMJzSLS8reDjfrR26vRUwMdWJbaRQYBEbNvASrTu4uKD8EEWsCwM84Afc4mD2CXNxHCJtUGmz4i",
  "key44": "4WyWJPADRrPYKxcrExFQK9QaoNYGPUKdFs5VZDjUm1GQGFWHGJbnCGZEJ2sx6uiHgFaaWmxZZ4qr3n6rYhENHaEk"
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
