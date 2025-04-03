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
    "wU8cDAm1njMs3HNcLGXGfmJ3sn8RSE1yUiLPEB4htyLKFcRtPVY2nCWrHHPDzUSUWwSPaBLc5GHbYRRQ3hgYpph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ekQZdhAx4F34AFpx8zkLCdcEKMMgLQ8s7Tk5uoFX6bTZ1Xj7N9XzNnSdVBg7RA7shkkDuPP8eXJoKHRKBJ98fds",
  "key1": "4GSQUXuzxhQ48HsiecTUuPijvo8r4a3drZfG58GWgdJ6o7chrFtfKseNpA1bp3uPpwSCuhUTCEjEP1F67oc5vWNY",
  "key2": "2ykwMSED6C7cadXXWQyxDZySSYkxne7Y7KkTiRDBUySi8jXdxc9uWgsMWBEchmK9RiFGpwUniLoHVkBAVY2GHHaC",
  "key3": "4hfR4P5w5MQmV4tnpQEntSvg6V4a7G9zhTbYAwiJhD8DVjVyHSoGMKRB6kK8BXUGmH48LyEDV7WX2RbpmdB6hadu",
  "key4": "3L7d6ffuKyezbGZViexrrLQGLiUTX5mFFtVCB1hfdfSSj34BTxLSy5kR7FD5ULWcMnChguBS6Q4Lr2gr2nXjWxZF",
  "key5": "3cPtmiKtyRDKTmTfZJf7Z3iMd1dPB47dSmkGHwRbjqdrdPFjnwJoezCfc4SHgCKwH93ibkzhmLkSFNqi5pFg1vBb",
  "key6": "4kf1dCoLxpdJrccMbiE5bKNtZADKj7Lkz4dcWnTQfGTpNfEZgQ2hdkY3DwptRA7DutnbPi12nf3C6As1UEHu9MZN",
  "key7": "3ZkbPE9BLxNsCgmv2JDQWs6NfckmUMgrN4v5idv33SN5yDWcxDnccTjSQCpyUFWKjaKjkJbK14LZLM8drrWgitMF",
  "key8": "2pQS7WgEz2XqMUcCnHodDqFDQLdgZim5cipAete6cD7hxexvfHq8NobbnDXpeGZxhrjy3qiHacVFsoRwVfx8xU2v",
  "key9": "5efnL4HQqbSbRue7D36Nk83hz5hvBjdxDFXVE4bM98RRVjpJFRTdLg2DjhumdHFxHQH1RStf2kMHcYbV43x8K413",
  "key10": "4mDCi8cTUtqPL33qcxqdjY1kcAh4FvXaLnUcf8GjSXMtE14z9EqXTmgzQDUPjgDY7URLWTsfiyBtVXP7V1mLyouj",
  "key11": "2rWLGKD5AxciyTCTrnWALWdbu87RMLBct9okHWQsYTP6zpg7rDAA4HHUoamju8k1hNqn3PvETxQ6rj8hGzQpY2ne",
  "key12": "3drGTtukwK4dAQAsmS1g7vLsucuVFd3i7cdpFnSdffALguFVPVpPeToDbqZJVFucGzkyZD1JxJMNBsDrU2LenBop",
  "key13": "4ytfmRBFqqkcDnk3P9mhxDAPNmAtnbG7PqYq1PCUhGnDNJ1QGUhJKG5EYADyboperupRYCac4BKteekLKWB7162L",
  "key14": "5UvhESQVykyX8BzqekbuVgnycN3gWgX5qnVkCCuttCki7Ni8rA5guaphEtGE2SWizyZ5KZEs8GxoN8Byo6wNxdb3",
  "key15": "3KMi4DkqnLBRoBNU4T58v5QgwwAuPvMWTpZA5ReXREGXJpEJATmqfGeh8DMJGsPHMyBiDY5KR41Rypj818QFTEaa",
  "key16": "3pvAxfWwK2tytNvtxEj4iyPXH1gKEiZJ3yjjScdQmstAoTJAaaFnBso47W8HwvQWnS71WJChSVjsRTzaMsMCHvey",
  "key17": "5r8safKM7DN3cmveBcFdZKGUqtabA8UEHiRNrKsAqGTJSRVUoaxnREy4ecd8v9diiVKpBgJeBkbgLmgdHJZsbh7e",
  "key18": "5XFPGirpRHzhJWXXSUU5GHQWaty8aAjQ7DiQyHHQyaAZxCaXbg7A1wPCDAMWTahxxskdp71yWbtLyX3M4e2URvQ6",
  "key19": "1b23QUrP7FR15GMCHTUSRpiYqMdpS89MXZGt7rSxC4qcosAtQVz3d3XLhRG7AnpaVTtwqDaj7w5wUjCtMHKJzFf",
  "key20": "3U7QSHSVshTrdBPCMCyo9appFRjo3sbEA2pbHiS6aBUsxiFuCUxrnUHhkms7KaRy19DiSVcSs7WYgx3WdBtDgykw",
  "key21": "2Qb1CVAQkiFDxSLEZnGZjgiTew216UsVYK5tmmrKwTmQsyhNchreGm63GMk8YSBkW9Z4B3sayREFZBZs779kKo89",
  "key22": "3qgWDemVAKgXSckZEGZdJsNzd6FRnyoMeC47Uux35JdyUbPxHzjkc1mcefFzjWbgwXkPcHsmWLLWAWvkztrFbvyQ",
  "key23": "3R7VJhjMELVgGva7xKDp7veHtXsenT1iS7gVGSpbQnVGwJkoSAAkVeNa7p9yRzyx1BURQ9WqEY8xkJVXQ4m1bmAF",
  "key24": "4Bcd2n3XfdvvkCaTPsTs4b9ZNQYzFYKrt8gTVbJwAPqEt43c6xH1FraiAYTqZEbRQhSP1covQhbpuvbX3CoJzEUW",
  "key25": "21cSkDBDxYAiKFuu3ytB3g9TR7TdrjYTsK1PBH9AnAYBaxCz3AJFftcmqhucU7j5avXJA3juJZDy2sSk8xPQ2fn3"
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
