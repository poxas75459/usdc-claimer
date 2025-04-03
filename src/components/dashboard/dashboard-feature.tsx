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
    "3fUZKupJNiXSZPuFbdQmGUX8XVx1JWaYUXHwzry7Yp1KmHH19XS7HLBpb8c9x8swPHew5VHKeJKkDShCAAe764ee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24dFM6W24okWhxshMoNkBnNzgopjo2VfgMeigVETbJHR971skSt16mtBHUG6ApUbAYZRPzcgcamXoL5b8rxYMqrm",
  "key1": "3aFKPJUiXhkRLruNJXEsao91MugTxPW4R6uJ3wVq3qK9X4SLi8jDoYwj7iFtTRhu75CutH9evgeqP9TG4EpAG59A",
  "key2": "4vWJzRCPCHvpk6Egob5wRd3D7t16yLeZHE41GFk9Ak52KmN1xsH7bihkbmGRYMVQhB3iJR2w78SvanvVqBeZjrqf",
  "key3": "9BT4j6RfYKRfKhFLPJmsLmL4yQaRhS7Umvqqt3FoYXxPjV1B6e9NMV1XMAVZGoE8mHTvXmZWEy9Q29iR54ghEAJ",
  "key4": "45sWujpaeDfeiJJyTxqHWw9fMQ8K1p7U3MN6QB3JUHtcZC9FAn6WyJ73hH9iK5NG58QkXW9AstQcVFmPGtpRmkWo",
  "key5": "2Z674V4GYmmg2Egh1pEhyhY4uRqEqwJYrrsxt5AUPgLyVRQ7wQBYAZX3Szmyug28HorvCuTkVN5RXVmjETGpYHDW",
  "key6": "9dYxQKEF1bSZyXzcLudQPhVnCYRbZQkJZ6pMSQRLcNZrkcs79VmYJ1jTMct5y6PUYHNWUDfNC85i5WmjDGphyR6",
  "key7": "55YzJv2FLu66Tz7ACesg3To4wTPGhZCfoMfoApb6C462WFU5xLe9KUxchaYVYkPgnKxvS2D9Tw7g9V919kyABaRw",
  "key8": "Gin2JP25USt52HEBYaCDxhbQ3XWamefA93SBq44epVTDPKbSc8CP39wVJRKs8etyT3caB2pDzwpbUG6v8xp2Sdb",
  "key9": "5ykfaCG2TnRN3FJDfMFCK3EHcJPFVhJfYkdnzNbjAEzDU9Ee77ZGAAXay63TEFxqBktwW21yDHAxQbp2K1vczc6v",
  "key10": "2mFbnCjq86SRcvzdq22sZ5tRPFH6f8YMKefm3iMboUW8xRZnGooLZHvNJwPbDjDr4pEqDFURvPi8K4BfkEHzp1vU",
  "key11": "5f7vff9uAgakDcLGEPPwpzwGWJFpaceFHk2aVsBsNraPZ1LsMGNvyuE94Wxi2Rcmfi8cymKHriPGRPtvqZH8rsXF",
  "key12": "3ZTHEjuqvubNep9zLXawRn8oa4ZoW36Amf1L2SuozNWMJJpmmJ9j5EQbEFbWi7A5yfX1ThAfs9C51xeXVGSt4VWV",
  "key13": "4Twe6MBJNXYzwFkCA3YNPn9dSD3oiR1CCnyrRAaFHVcfkdb4tP6UN5B5GHEJc1BUMFvqdW1sd127DPcJKrTugvy",
  "key14": "7hVwafffndpXeLvQGQ46LSKRX25kKDXGE8RTdbUPATtGdB6tEbozGkAc2N515MLPs7jJ9QPBq33Hpq9czZbqst8",
  "key15": "2KDaXLrhKpFnpwbEpGDzweprCUKbQPfXGdYCYxDBhKE83Qi75jRmEVhaEdur5MKqWdby9ttQGrGE5APyGdDDjxzT",
  "key16": "4QkP1mNvWzDq3ywzWkRSrcpy5oEgF6S3593wnoC3oTm7hCEFgKQ4Au7QBcAzx3aCeYvp4u4FtuRb8XakAjypQtRp",
  "key17": "4MDH4chxBKXjgh7YPUEv1Xz4W8LKyML4jykhQjxcYuEz6YJDnVL6RH7T6xGfCHSpQT2PTv4EfgpFZyhBZfVr1PEP",
  "key18": "3aotcHhhXBEatVzzirESmsgcyo5T85w48YFR6Fz1wnUXLJVMfEDLMtLvVFdQYXdxahon3ZLN9CDY4U3jakjrC63b",
  "key19": "3pThgfkoJK1YXurmbL2ytBcBwa39bbUA9GyCvDHTsq6bQveRyjzADUMHkbpV8jeZ9V5ikyhtP8G2chrjBtA2sm7o",
  "key20": "5azWzH3bjbTDpytPtD3yrBddbFQEBMGcVayTSXcyfhMjJMijdw1y7FFLVHKhxH1ZS8oA37zWf1saDdTvc4Vubdfm",
  "key21": "5N4WWEpAq1jFK14nSq5mUGbZfidX67c4Vj2gT3XdEJ1zwmin9TXd8zQ6MrqhfQCJZtcaA8Q1fY5wytav4H5bXrsD",
  "key22": "3WBKp3bwSzzdJwL9bxszPkbBYPKLaxJjM44JyyvJDTiu5qioh1bJM3X9pqgmrkKWvhb4HsmTvo1fDjLM25nLXMNo",
  "key23": "otAUqYqSHxjkK3QvTeDxwCJLw4FCWFSjt4ETqkwTmgnAgnamCyP1MsridU54pteNL45JhqtZUKShRrjYWP6unU2",
  "key24": "26o6vEy5QmLSnhQ87W5eva5cHesKMmuewRL3HsrXtdx8GsyZDrv1MS4H6EkkNfmHGNWPWwNtuJuTStHT869CQ5kq",
  "key25": "4TziKXWrUBnRpb4t4MTGkVZVN4gH7dkUS1ccpeA7Z8vd5moii357FJQ13CAjhn7CpWQgDPcty9BRYMJ9diYTyQds",
  "key26": "5GLw2TEzy6g3WmfgzMo7X8BEdm6rJ8fupyzoYnVEejJ3zwKYUNaUqSMGbTbbwSFKyncisjXQ5HMaK7hEcJEdfLfu",
  "key27": "3uusLh5TkuN1ts15wrokeVoUwuszkt4FjREDrfdRWqonhUVB4S5L2Fgj4kyix6pojCsxUKPsjPrc4api2BhyFmTS",
  "key28": "3xmMCbexpVWHYqvXLqwS66hNrgv2rRvq5mK9xwdFDTfYG7AKmceje88mrRYNcAKtcQyaJJavEvJYn1gatztPGUwb",
  "key29": "KtBpWeNwT9v92FjtJAhyUrDukkKMAcgNnVJAiiymapuiXcD7FENb8LFe5c3ECc46h4j5zYmKmwepHTE8qHcSuDR",
  "key30": "4m4Hx7nozQtviRtv1MgQ7fSMH9JrUjgamTkv45WtGN9b7VdxZEZLt13Lc3pdoYiYjSX8t19N4yxjDeTmhGhphPEr",
  "key31": "4oTzXcTDRW5rDMBCcV7BQRB6h8PFsXJFzQ3QgnfRATUX3cznJrEkcw8JJkRnvJA77kesWB6ZcwpNK8scva6AfAuu",
  "key32": "2cYUue54ThxexKzT5h64nF2WS8nFwWhi2FXecNrNCpnsPRsTJ8hMwwH5ZXSYFQdgnA5JCLyYKt5KbafPrmuUcenV",
  "key33": "bvksVgmfzKedizDHPuDrsNGhgy5NauiRMkcdMo7dAtVy9XFcXGjy6SZWVJBD4Jv8LGKQN6SLCt2aRnWoyrHhT5M",
  "key34": "a7KwL57brBCVF1ELzoYwYxPc7DeohFmpCHmjxyXRdkVeVG22NsZPB6GFKo3kNcHGnAgJQEZztePrJXKbVZ8YaJ3",
  "key35": "29EPEZ7suA5nq7dZUatsrwunC8iERMFadP5risXGpGmRFJx2SwJ7fD1WCFRcQCLJSTSQmb9BNEBuQ96wWZTgk8Pm",
  "key36": "58xgzg21S2WSoNkbmUkpsNuGJLzdzgnyuC5HUJ5oHJLjqbUKh3Wfj4ZPyz1QpFctaQizo8mW7hTJjfkstFfthYHX",
  "key37": "2Pg5t9e9z6PZJJrAwhiAiRKh5GCc25FfXXx3zJrse5JNhgG3U319gMPu5hWAjvzHD7kCoyaCr16Yy5ZHCPV2pNB2",
  "key38": "5ZMy1y7hfAs2nHfkrWgcZEjk2Fjjn27ZRRypCiaBav5vZiDLhrXQ3pnaGVjCT85KgsHN5BQ5zNiXikhD1mLu3KNw",
  "key39": "5MBpBGwMy1EJQba5K7h8oiEajaaXRogLCKFH9XFxwVa9Db3FT5tpjUozdCjuSBuA9v6vPqPMeETpGitTW9uJYqiJ",
  "key40": "5MdYbtGUBKHWELARo2FtCH6e2TeXYB8HsneM7GV3NjM6s9ABWirnEoVBh2UivBnmzya4sRpUkTj9hNdsCuMp625h"
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
