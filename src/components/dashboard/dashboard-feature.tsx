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
    "5SPTT9Ews4ED9bg66GRs1ZVme9kA7Sr9UumjLq7N4LGEqfofaUvT5VHmTNcptscGL1VLWcNXaL93TPtEHgx1dDvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sbPgJRH7qiP2czKf52ta2jP4puk4zGzuFS9SFfLG21m3QpU2GD8S4iGjc12oPgEAgGUWad86W11y8HULeNFp2yC",
  "key1": "5mwzCAXaVYQUzi4bawsf5KwjvyhKEFU9ZiVqwC7aTmooDe5RsHaUpEdreDnxRUtYd37MFRyeYXT6f3k31rNS24hg",
  "key2": "QPcghzUtsxckU5vb6RCwnwYLuHLasav2KUHj1qTYQLnQi9h52JvktnDYucKM8QLmtv9UWYX4dZsTtsChHfce9Rp",
  "key3": "P2mpjuVWieckQ7Hu3mHAXPY8kXVDA1ANiNrYnHd53xR1evsQxNCn3dDSWj5C7E2ZZySXoMrLpSR1TcqUnVKFe4r",
  "key4": "4M5o6RQM7rZCXu43SopbpyobnTBVjPzZHCK5wb3EJ4TX82ERMWaH5cEvh1RVD3n11RgWvaj9kmBteSRo9v9LDTzy",
  "key5": "HtS27GgJ9NiNrFq3S6FvaAhFxYUPkSbQ827VBWfzSbbRoNvXVfw99hTWqMJy78CRFVEkvgSj53nmkTmwLNvcTmL",
  "key6": "4jM9sh4B6TZMQGBr6FHo7BPZhi7JALXmAkLzZYcBMNYXwREaaTuaA4KWav1jA5nE6ebsjS1NfMEFexiLY1mg2ouK",
  "key7": "cpirLiGhyxDvJ25APHM4Dks9SiMtwx2VKAKMMzxV24hhAG8U9Wyh8oUDGKrjuEjEZsE29HNdKuFwSAnJDBaGbBV",
  "key8": "3vfrfo1YbZBH53HYNEWC1ZT1gWGo3yjNHtzg5iCKXAEzbibLkD4N7z84kLQpRXngMHAkB6nz4rgzLjTwPrVcAKtV",
  "key9": "3VBx6n3CVftPtTiSrJvh6eCvE6VdFTFd1i6L9FKKgpjhUTGf3CbieuhWSFu8JYMwWde9hR9bApEVCCY2HK2z7cf4",
  "key10": "64wnub4vYEuZcKVtz7CSRysny8HTPZEfHwt84jHE6RVzVY5Da7MbF2PEzYJHgHjmzvFJESv1WwWXzeUjexa49Kja",
  "key11": "3mu1javMtjXnRu7PvutNfT2VzswxCBJBsg4ATc5Wbg94cMKmSuU9RKaRNPbSZm7cpFvwAuFHCSyhPXMHotrqaDAK",
  "key12": "dtWcnXEEr71Xz8h6x8zJ6LmeoyaxfEwXxdjdTDMbgqJDuDpnRtPLbGFPE25VuKJsgQQ4zB7vaJhzXjdXmujmJA4",
  "key13": "2nvsT8J99Auw7GBYiWdTvEX7cv4DLqUpdkHUTbjZd6PDFV2uVpkkmgw3eNtDkPYfspRwBtqZxacpuwjzLoKwpoJP",
  "key14": "5afKrFsezTEPSg69MJ7VU47wFxmdWiHc4KQ9GxoQwfUtoYYfd8tAKPhZTFHQSPNR88Mkddo6SmDoWZndXzeYnSmL",
  "key15": "2NJE5aRL6chqJrNMYpge6R6dTjQrcVNwa6p2hVQ33LrcTfSwhXHNnTps1CFuMUYwH1FHXCw3itWv5kvvQfcEamCz",
  "key16": "3rCQ4FsuwCF1aphCEJcoTPZKPhSqRmJdr4HB5Ki6sVJTLnpJKK8Zbu25W8wLoW3VRZky21RUZxvdSSZyp9Yq9K61",
  "key17": "3VXCReBK3Nkbo8YM1gGMrPnEYU4vtjhEMoN47napseHvTQsNtdcjM69gSTbHUeYWFomjyGRmptrsn56P8PCBqUKm",
  "key18": "5xiZy864NGDq2B9L4HfCX5xQgzCD1eA2Kjk3zXRY2XuTfitviv8hpVg3maQu5e9McpowRdB1JLe6di2c5kyi3dp3",
  "key19": "4iq1Kn8PCZZNiKcPWV5fMgrqXgT42XJcJMaiy4BZt47GzvNQCAERp4fnQwF9giB1pq8oGrh41xR7qmS6LeXSbRsr",
  "key20": "2oRAqSr9C88irrkm1Ai8FDGWVQ8wEnmxDmSx1WT8jBGDpU7CVTTK7uyJmnAsUjoLktv9T1V1uBSZpx7yszhM3r1c",
  "key21": "5tcktxrVUB5PG6j4n2GYe3ytoZjVHaLXrFAbnk2d9cAyDNsUsiXGg1CrWty5PmchXUtvekesTMETRh34p9KMS3pD",
  "key22": "vCcZpCYH6rccNLmDrpchxBWSmyoPuwJjCi3EPc3aSPcGCcDSBS21iVQT3kyPJiDyXRQyNYjPq9giM1WuKmu2pjZ",
  "key23": "5rxdQqKJpHynxB34FBatdKD1sUwM1kPP3erAoEW6MfSerKXkQnHircbzZCsH5WD2XxCF45iWfQQPHb7moqxMPXNN",
  "key24": "3PvYxzrB4Y5Mm3kKWwxoreQ9dE1gGuwnrWiChRRv3GhP6Rux2wGsz4vb4avgiFp32ixnk89QmkSD7KnSxXp6Nfxo",
  "key25": "2yKUAohcbQDRZevV642EmKJKpqfjMeuMV8qCbeyV4ASBFFt9jY2ymtS4joCQk7tUenA7FxaFsCEpBSaT71KJTy2J",
  "key26": "MwL3PnWZ4HYxnqmSTTiSomxc3M8NBJ1i9Dv4DAmJPwnUi8QaJyfUyG8BDabobCipFx5ofArnhKVJTPiW8prS9oD",
  "key27": "2mAFGTzaMKoVtBoCXVn83k1vf6EhLijf3tdcktcPvtNsnBtPSEPY2KUNzgpqzArB1wm6kvYJb3MWYCGLefqEKpte",
  "key28": "151ncPNQQsjFDUhZYwhTB2ZWi1t2dNGBQjaYHwVeGGkPvqS4hKfAEzmGgBwwHpD8LbQggWV8QGfbWUYW9hXTMiG",
  "key29": "3Ny4VLuzT4nCaqHequDAPeGEakFHQzPg2EEfZUqARzy26dB38budJFWFgZbSFMaDYf2q421QdG5FqRDY8krR5xwj",
  "key30": "5VC1ZMfp6fBA5LqaH4ShoCq8H77RjNteKFVB3GT58rWYXpW4SgE8s1vNioM4EpayvdG91euUz7WmqjSMmCkKFg4C",
  "key31": "42wxDpcDTzGGKLiM7YuhTdqQ3opwKmFb8EDK41dAZBm5xMV6pxppmsnUVKiCCPsAmCoGdg5Ydt7KikLeK7jGbHCi",
  "key32": "y6hxhC9GYLm5KipUWynmj5TaYF773VuEC5KDrCSjQtZ2Xxgx3KZyURoEuwxDUwCWKQqna3UM6c26oBHUMvBzC6g",
  "key33": "3sXZsBCK5sUPyeQtXtpBtoYF4GCGbTDun762fK31v6y37DhHD3cixJBa5izyPgPHomax7mJQCS1ztcoxNsVoiNgo",
  "key34": "5sBwMMMkrhRSkCiDTKx92hyGK4shXEQCJycY2g4ogkF1dpwn8RDsEyP4EAG7MVhd92cgJFkKjw4mEkqU5wXwgzwZ",
  "key35": "21i8bNVjdELVakvW8pU7q1Br4kHwneZ3SeZB1VEbxak929xWWQjoU8xqfojzXPzUVfY3RNxWyEWHzQqcUkT7wPti",
  "key36": "4u9HUBueY3uyhkp7givcThdoDwfdgXQiqXvkJpKmN8BVaXBPCiWs6SdJjHZuFcBaVRYJ5Eag1nj9iezZJGD7uHRL",
  "key37": "2ib8hSLSTWqEyG6LmzRAUM8msYeMKPbx7iu6XyvF3N7vMJHksZCPsDotPMAa9rnqZLwVo4Mg2J9A9JQnHiiyXcMZ",
  "key38": "4eRL8uaRLbfL5jfZW3NcLpPHHC8Hmi4jcBEiyzacdbtNu6BSTjPNhwAmWSNeLKQPohGKvThjWtGfwP34i3rafzaM",
  "key39": "5AvvGvhaHHnWRW5dnj4gxk4M6tKLx9WUL7ZHH8gTYao6s8xseqb9JWcv1bPevcBM6rVdaqmextNovhFAetaGPhQS",
  "key40": "3B3ZfchmHjyx2RuDN81kMsgiq8bAwGtCpyhz9KV5XUGWLnxMCcQPuf8itRt4VvfYu3Q1kMtHqJkgBdwQ9SqTP8hS",
  "key41": "3oooeQSEAUMsjX4qzsA5TPrduvAmCcHd9JBZoS9NjyAHJ1svDpEUQxMas2MGKfQ1nZnwvjx2cWJn8asmtJcmww2V",
  "key42": "4pBuQ8sMMWFbxRQ5ixpDoX3tfPf6zbjvhAJ9fiybJwnB1VaMgqxZciDupcVgC9e9bxSHbHVRXgZDnyeUiNvR84yX",
  "key43": "5iCCRmUgUha5zTbCqEV7GGuQycGu1bmoxshYfu16UtetSTjp5iZ5k6VpjRYxjjSEcxTdPTBRQeZgqPCXZCavwzVF",
  "key44": "37tnchQ89btiDKgW1WqsUNVvCz6yUz2dPB7TnctpecW3Svj7iLEZaPFoEWWzyDykeksVP7wwtdWBwj1iqrgPnnqn",
  "key45": "fETaYERSSNfGYTonWrYR3K4aFCwhDzeWJzEMxtNQFaPYermJnivAZPr93q7WwW2FQ7xXjiPHuCCF6RvGLrWzFkA",
  "key46": "2y8f6n8GW3TkHZQmuyrHtHVEMqMWp2d4EADwruBsy9N7j4JDnKQf3wtQic4TvMrrPK2AkPSg9xZeGKnK2vNAmC1G",
  "key47": "GPPCDcRLzjEYorTti8urqBi8ErRitygNbw3MsfTeEf1AxYdgnzs5PH9WRV3w9BUk9YMDs1YdSuaYiAWzmQvUchL"
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
