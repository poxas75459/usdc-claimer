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
    "pGrJsP3NTBYA4GgYxWZmwY7LhGRY2UG7gkAskpJWoThY5p6xqPEurW7cUaWz8PG2oEUVv6PterRxpQK5n13gc26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aGf8tQAWAEGDtyfhKZxNmKceLRqKyvjFJ14oXjmSfaQdeXD19ewkML81N8wGhWgsQUaNVUXvkHwwiVebbovtsyM",
  "key1": "4VvPiBquKCE1AdsYuTCMUbe8U74Y8Wb6KQMsADgDNS2TpNSAkX6c6bnhV6qXwqvBhrwa9VNF499T2zeTaR5v9B1h",
  "key2": "5d5Gq9hY77itmNN29P8nmxgwrSh2dHAWHXxiXsiTzFKNpqHhqWmEvDkAVzeNGd4zcf3jbksWjFvgW5fCaUzzTr6G",
  "key3": "7n9ggxa3JPKT2dxcA5Sjx8GiCryMYi8CkDoyf176mL1BktWJFFsTdZfh2TRK41rEqUX7MueHCAbFjjjacXgP141",
  "key4": "3JHqM5RZBtugYNwSX2e2FBEZwth1dC2gebrYkE6yWHMfec42Q7QMTCXNESuUVtjMMmmoRc14bTVPWBioywqTkTZr",
  "key5": "BWBZKzk1Jbua4ZtnhpgvW7cjXDB6soPYuasnFBZAC9pH5dv7CNZj36KVVgYRDFoxcNcSjCWDp9M7pdjHzHGgJVU",
  "key6": "2z6toEGLJHC37DqyW98AkF85ZyFZnXj9Tf95DRgVxSPXMr6ByeH55Spx3CGkK4PUxo3cF3mC5Xg6q6exm8NnvQKs",
  "key7": "2Ah3yjZYZjVimiZFXXukNcc3rDnGVfAKni8ena8S9cXzjnT8PfFdambqUiQgMjjm6AhGxAksGpxcw3Fr8uXWjWhA",
  "key8": "4vDciP1Gx5n6PsSJ2J8ynqicx5cDHF8Sm4XkCZ4v9abttMvrxhmDcoN1DseMfncUFimYatjABU9k4cHhjVtzWK9r",
  "key9": "3cAA8nLFiDLZCGUh2y8XWWb13wnRYZ47LQ5Vs1AZhDoqQSpM8aaaouqXpzRhM3F8v7SLMyHrG56C7D7XTVkLwXdk",
  "key10": "3LJg1NQRb6g2Dd7iSjSF44wiAywf1hpVXR6iDUzURyCACTctZ7g9epWCPu8MJDm3CgAiDgaz5tRUBohdojNAQn4Q",
  "key11": "4K2LZPF8n3FVis1Z2q9y4R8Uyn34W947Jr3gf8AXAvdZiCHGsYfR5YJUNuPYRcDSBm74rqhgXxWBbeNxesNFmrbW",
  "key12": "4EjTcgexUxSgPzci8zynVQtdC4mQdryZsWzQG4AbGfaLZKEprJYnoqnSjad4vG8vhRxW1MFLcRg4QvmaHnCwmbhu",
  "key13": "4FW9ykTdcFkMVqp9cxANoYdi9nAtU4F8NwVR5zoN39kdT66ZMBgFnfvax2YxXnhDc1iBfzSEC1axPd1bv3UK7wGe",
  "key14": "5Vb2aenikMnwErXZnT9ZM2hP51JaApiA4D2Lv1xP3aepJNcNPYigwNhZcuY1EfHeahy46B9fTgjWGzkmv5A2obWJ",
  "key15": "5jsCCwpQmfRu29Qw89jcaNusbJcVHYgLqL4N2bFuER7cHNVaF2XeX7TUrfj9pwpfJLP9sTzmXaiXBRDBTULkH6gS",
  "key16": "3EbRNs1yuBNBHSkZBuRKD4WQLYxtKABboJbn9RpheXB4HXEtJnfXghzsaxVaAQFcwp15NftyuH1SKgMZGSUEW58y",
  "key17": "5NRcMsqqEKyVQa2WbnHtrryCGtaCbbd9R8qQ4HuzYv7AuZ2RCFxXJcCJvzBeFAdzdYeyBn7GA2jra8hxt69dS7hA",
  "key18": "4hexGfw1ifxGFGVMnaRaXpbGMi61m9B3ZpkPmKznVvQWV9wVzKyYv2SsTUd3GCD4cuLSMAVE6mKqxHbzDLLh3pws",
  "key19": "nAhzLF1ThuusEM5PT18FxrBoRf4mpygjcQibhUuP7m8S2vPQyDNbWnwoaCt2bU2Pkvd5cybZfaT9SjkbZVU5UN1",
  "key20": "53FihXjqFgCpcG6KtoqXD8x7VCQhHJSwCV75FHBdA6knm9QwZRvKM3kyiFoNu7br8qNzyfNnbJmD3BtLCiLqYXuV",
  "key21": "4Mv95RZjuheNY42K4CPRvo7jzCrVW1RL7s2tJ43RicSXNHMABegHyqQfXdUSGBUthqyS9KqAn6oXQeyc3x6TCwcy",
  "key22": "5RxoLpF1WmJ5nFcnc8GqSn3yjtLakUDNaEzsdeWmeqf66caBDc3kUjN8SmXAFJZY9b8naE9iiSC8iNezPkuVRhfr",
  "key23": "2Xw3YPpVCuRDiMaf4D8PtM7TWsxv5d9n1tNGHdKhoTnwVeggncNmq9zTkqJ4gnqSM945A9kLKjmU89UtVFEkQuaH",
  "key24": "CvCmty32E2KeSGxVjhhT31QPAnfBJ1aykzGjcGRBVDTzrso2AxF2Wqcag1HEcZPTSxKaQB8YxsRWNbL3CPdE3VN",
  "key25": "3dYUbXs3Pne6cnoCRqxPb4ZTyHvc6Ap5SL39St3LqYtRFsPxk1VJK8xNSZgGWBD27eCqN8QGYotnrmpgvrWVMJYG",
  "key26": "t7aVn2a7D7sTk1dzqkYQAWPEKLg9kvRXEz2YcXkDfS3btrSz1VdmvkQQzTtxvTjgqF7Jiy7qXGaNrQvmQiJDicc",
  "key27": "kWyoL88GeaQxozyAupHwCAhYS3y46YgMrGJWZLQKQoC2jQ38Yvkro4MuBVERCHCkd3fbZqEcdx23DRx7rrQeBXW",
  "key28": "5cGmfNpnMTBh3rV4GYNSDPr4nMypbNRsBsYfKg1eEB62c72cjoJ2fZkAJoqsqdsmAcZZyhmBL7no2PaBkE944pP",
  "key29": "NmoaFCgqQ25Dc39hRw4UThjxfKQRhHaQ3VnFGXsYDqdRoUNiJW6jttTp6443jkfgaqeNGjP9sC7UCN5iUMbJQvH",
  "key30": "2vc8CuPv5vyxCiApDVJdd8mxERBecQE9tWYmJVJmJ2pCdWxPBY5EPKwvCdTEg6nDdAxmRraMHpmYSnnAbqjLkaKZ",
  "key31": "R1dbiXGesecXt7crUQpf9ncyqECmAhmCM6GiwkEHfGcxACPZs28o2akLEhqencPF3mPyEJiuozbEK6xDtvEXvjv",
  "key32": "4n2uZJ7DwnSpfstSZzNv9iDp6JqX5kYNJFkW8kGMf3WmpZpSp2G2aLnyCtYpY9aFfpAFHNFBvxWBLZiUULmtkfqn",
  "key33": "4djfqq1DLy1BdMCFXR73qsitqyDPz2GtvEkDfwRpGEPjvPV9qnmBszyYE3ND7kJgNUVBiPfcCBNF5kZwrFFJCBZu",
  "key34": "uFyozyY5qHsTzZdW7K1Gm9ssU6TZ5Dt1AksbSDNxy26D9c991M4gE14XyroQvFeuHZua9QYsv7MeSaQj7baXftV",
  "key35": "3Bn1XSB12hGBz1BeDRL1Pem869W51kMDvLUVRU4yCALQaRcnJbU4H3mm8BcNYeSegSJyCGt7FNbrGTq79VkJERbz",
  "key36": "23cu2jWPLVzqSSNNDVh3ghT62T7jFxo7mZYcHTDx45YKjJ1NnwFGUAWrFP4woxt7Ln2rPwjLsSVowm6FGr7fJBAc",
  "key37": "3JNSCQKMUfhKjjJu9SqQe9RNWEtCWiwBce86s91hHCYG7sVS91maJ4UBffa49FxNVYFSbeLjLWfekC4gvh2T5JcG",
  "key38": "2qLWVrJkhJUWGhemyFrQnu7mA4JaDizzQzn8cgiaUManXSYziHMsK99PiEgG7GCcrNvnadx6M4ktVNPMs3kC4Rve",
  "key39": "5hku86G6xMZmMMkLRhSbQgwb233HHH7g9p8GxUVNWgpbuAZfxdwSzQqyCDj99UHyafp8EL4dhJHjwefS7PNNW8Za",
  "key40": "3C7nskoH78o26HqBpSjSb8SRK42U2no1yFLUJAgU6UhUZ5RvomxQ3xvUubTqrx8RFXrrq8REvbXTSPC2RdXqY3Q"
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
