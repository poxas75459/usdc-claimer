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
    "626pvyX9DeZSH8KvtTXMZ5jJcveCC8y9sJHsyXX81CwPUCh9pnuus7kswL2UkoXKtcmYT1zdneqhRnpPBmc9rbX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mLSBg5w17apxFmGSTVvHVjjcqD8CsT5PXSpzvKZMucaktbxwUpnX1WKgwBSXATLFeVyWLgG3CbnPU3ZwbmA2Tn1",
  "key1": "Fjsamy2NP272K4mkFMw7yf5RFwmG52y2v22xDx7XHm9xffg6drC8BJtkDydEEPKS6niDQF3zapv3U3J1jTezyhZ",
  "key2": "BrnPyRMaG1LYiW88zronZF2kcFHPQCy27zV6HMxBi8K6rVUuUCyuaYFqMoJp9wXvtq1BSaHy6Hfop4tWCMNyX4r",
  "key3": "9TYTQFfgByimm5jCopSgfoNrRxkFB84VH2xjAzfxg97ZajADYgG9SF8iSdxguZzuo7qFb8oNfT4BvrvHKbgJ68v",
  "key4": "bUu4tdmnDfeMRouyF7hPa74rBDP4sKLWiUGnCVBrRBvMiybno13Qy38uWGryHcDjFeTBXRNoNd9T9b3YVosL9DP",
  "key5": "2BoY76BhNXkPhCtWuD7DPpQZJCjBxQuwYK1UPSXs31XXG9Tm3T1W3uUR5PU4HV7VdQrrKGb19uBQ6H9csmQA2ZDG",
  "key6": "Q6FSsVaHTozyG9cq72ow4Jbom284a7t6Atqi9KjGsr6oFGcuskdbBoSfanxpF6nygtqC1pKRbb6dnmmKRMtnFKc",
  "key7": "2jspFdHsz7REAc84G8i8vRwChwp2c5HQZfHH6tSksLVuTR6kHy4VantSDMXMqq5M5Dit4UBvLfg64FSvZfUYFWWS",
  "key8": "3uVeN65VgtG6QF4KAjz7WZbcRPfBtoSJowBfJ3hnPzbHTjLHsqM4QGi2Fw2hKPqvsjj4Y6Q4X9J27mf9hkcRpd81",
  "key9": "3NAceMfDotrXGiSTcjvyEfcD6TpiVrUkhVGAYMgMKBKAwyhdkmiMrzvej9Adop2anFR3HpoUar1zhZkpHeLHoP7F",
  "key10": "2eKmgpNrreWJUoYuHJtwP34z6xMirw6J1apQWjjXSJQfSLc2yi4wotd8K2rt3XHFtD1nPMmSJSM2TpfwKbzoWe5t",
  "key11": "E8PpXrdwkxe8inpPEeVhqatAB67h59Xz118gQRTn8GzHQtC4Woz5Eidjywi7G4aDmwAX655Tk24SWLQkHirGVkt",
  "key12": "43VrZ8x2DBbThLCskt7mq5hsMTAyzwj6Gro7SArubLcgXpjLQLqZutBCNPR4kJQ18tijFqCJGENt8akmuLBeK6jc",
  "key13": "4w8gcQZ7UWDuWLey8oP2gGmdzWLSumS7ye9MUyi11pPR6Pi3vhSBXi1ZuVxLyTpUxrmvDb9uLLj1JgKJFJiRygNL",
  "key14": "4RFFXD5q5SsAWVqLAGZDJUgMwiqWYd8cL3Ur22TTFZAsVk8oqjK1tucnumWpdFyWiJBeaX47DD5LYxergUzRBJQS",
  "key15": "hTB1LXf4A8hdjdiTfySVfb1gEUqVXdu6798nBPwQg4DMFoBSrjDPHWGyu9rDhgPpaACZZuqiyje9g3dHZiSdAh4",
  "key16": "2uYg8aAtHpnPyat5vt1HQ4hjpuvUFVUjP67skV7Ejf6h681q4yMoHWAQNfEpKDSWurrysr8kC4yBkbPN7k2rKmjb",
  "key17": "4gLuQT1BzxZ1LK7eojB4fyfuFsJwL1uzzWrZiSEQ2Ltg3Qe5BkgXpmv1cau435atmACLFhmUUr6x8DGi72Pu8mim",
  "key18": "47dyHHH52ugVtjKncRs72hupRGyiPMbk2qLfpJpXRMo1nj6zi7qjWLELYdKKEMYa3BPyoLuaScfM7BpRB3ZeFa7M",
  "key19": "BHCoyJFZXJxwcHpJ5Zb9WVzM6LLG9nrjwVaXAcjycqWiVb9b9DTtxsn9vTNnB3QmUF32ibgDyRRsNzu5DuKdGR7",
  "key20": "3AXY3kTy2YptuS6Q9zKPkbAbAo7RaSZDGsaFLwQzEtz4bbHGF9PbgU8USzcvisABEKsfcPjQNY2xyjNpF7NrbzZ3",
  "key21": "5X93S9vtL28YKqPzHxZ7ifyzXNKou2cGEQJ6EX1xYhKwT99NG6aHZffXKo1DWqnf2XnrxM4VpYxW868z5PzXozJT",
  "key22": "5ukSnENBUq6EMxozTeZJ9YTWRw88JiKSkvpcwYL9J74gEcxmtn9vFiGMdHLZ7gZf88QZBe3rKGry5LGfF7emNRBu",
  "key23": "fXmazxNepL4QSoWjsEnqSEX9h8CLmBHq39ik1cyvkQabhMM3if8TcUHv7idHRZvdJwsmb6sr9qKznJckiPDo3JA",
  "key24": "3Pth6t3Jh6JNsfht6eyAhkfd451fP8EM68Rt7mvQqXM9m8ZSm8xgUUSVjab9Lg3tbr8L8qXLYVnD3oMpuMuD99aZ",
  "key25": "3XBCi9uaaRfSzd7AUfmUkjRqgvBN19N1mUuYBr3MFpusECowGWEpgeNx8h6VP7fdEJHammJowRfTXkYbqpMj9AKL",
  "key26": "54CVwJKFQm1Dcvb91AkUDmWQuAQYZJvBjytM9mbmSYTU85Hkf97dn6WYmucFmt6DtPwVr63LGB35F5F3DzaQGiKU",
  "key27": "5tkYLqPg5bRLTpoG2SUUbBtBzzxwN2ieGvuRKsVvwcgFEcmg3j1JSWA5FwQPAkCjUxZL8PrZHoGNP7WZQb72pyaD",
  "key28": "5fqSVDa93du4Xv3hDzVYXjcY5g7yKXCXkncRazz5yXFZ2cbNhrdfnCJyxTcAt4yhimg167NeuYcVpxUKD1r4Esmg",
  "key29": "2jVJSUfCaGn2r27rnkJtSWT7cNodT5XjvKRGDnay3e8rHC9n1zCQPSS9UfpBVm8Rb5AfoCRFpvQnEACU5LSWbPAe",
  "key30": "311c7kcrrGN4XmHzc1zSVSiFUkDkxQseoLKULVBKwxhZw19zfpz2naKNPrQDxMA7ZMV2HAT97p3G3HdTNVF7E1X5",
  "key31": "3Wh7GWY6EGLGeJANfe5BrDws4YZFSKp3N5hQPLtUrLjZBXrQCJ36vwA65Zb4JyjBUEavAC4rKPCZNVYPrFZiWyY6",
  "key32": "4o5ALsrmqeq5CRqL5CfPTUgUDqkm2FF6RkBuc3wvaPxfNA3XGZZ3iFHGMhVJNKAccDRyf7qDNTe1p9Eypze5HbyD",
  "key33": "4Y13ecQikNn8oYPCBQtUSMiPJezujWtdqqiPuxAStkxzLz4ytnS9oPGWVc9JuX5yA5CEfSZmrGgEkPGM83mrW1Mb",
  "key34": "DGgib1VrPx75HP29dxXwjnoQHpdWZoYG67CQS3cC9By9MfRxxuybPiwbq4Rq8t5VEF2CUSdzgfa9kbmjznfsSQ2",
  "key35": "52Ek8HxXjkDk2qo3WRuf6wY1UQPRvqmAhWqt1DozhjV2zmkytywREPx2v6xKZYmKQMQepSYJk4p1u4Emb63KFDdH",
  "key36": "38mZL5ScnauWuXwSctg1LqtNjfmKB6P5V9NKQ7kK6Ys92WQMthUe95STcRTpKR6zLWLq97jV3ssKfKJsHPEWNi7G",
  "key37": "WAQHrKjeZwnoDedXinxLYyKxV2XnB9H4wCYJDKsD89aRHeRRF28yYrNxPyjBc8YykR9cnPci3Rqe14KSGScXoCr",
  "key38": "4Sr2gLexkzEX9CSXefQboWTkNTWhzNQdvYjt8M9Tw7poPWr7KXG3nRAtKSxG6BK39kygsDyKEbTpKQrgbmWKWPji",
  "key39": "2wbtqEBuQTNtVMTbobNNBA3uijV2bn5Dniep92FRMpDX5JtMw38SZjUDgjyot7tEJTTySFjuRx3F5nn55HTFAZfD",
  "key40": "4zuWMR3mbpeqwANfx8DaRjUvtoNmQKoeuj66V6uxQr1UKsxg8P6gfJUCPStquGVrkDMGqhUVUAFBYRvzwqmZ3ew8",
  "key41": "4UKM919Ad9Y3MfHFbiBAkWCBsjbtZNparcu3BJQRdfrjCj8oxUcem6YN2hWbEBi1pUxPES5fpaBJL41LLRotuPWE",
  "key42": "4Mh7JPFa8711nSLixu3Uybi3yTwjqcxJXDTGkQdfoCvnjSjEZY47hrCxEjgCdkLv1tnjRKQ9aHKTGRFoTLKhV7qN",
  "key43": "4ZfiF6fJ5CFcxucdAHTrxBSsQ5SwdRnzWfJY5358RXF8sUDYTigSRzsTPfKgNiTSvqSXsBJqyLguQjpVAoRAJxYp",
  "key44": "4VraqRXaZsUhcNY6W7nu5TEKMuyksZJYPRGXn2cG4JKoGYhdEpZMqDv2eGNe2zhajWaWPr8kjfKmAyCRJKvYsk4M"
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
