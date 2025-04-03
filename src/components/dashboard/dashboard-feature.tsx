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
    "5WSnkYbJXhL87Ryn9KkDyCsociXuiNQ9o3o23NRgz9TDcm8EbsphRgZ3X68idB4dokkKvg3b3EVe42jaX6N5e76a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TUmWKexmjZuqVfZvSbsmJSFmjFe5mpXCbKNx76ez6qsXBmwogD1rXKJJ9ozJ3tV5tJVv151R1vE3SUVgRQLyd8W",
  "key1": "5F8y68LK4MC2gzGem9XCLqLSpbSVvSGhS1oRMZ3f5B7YkaCrDMCdgeSAM71FtasSqieMbzBWSzV2LvpRdSJgbX1",
  "key2": "amrE7EvrWAJujWa3aFpAfanorMFGkKk7WegLWd8hoV4V9kRKKpcXea4Y4mmEDsfSbxpSJLdpTxrZuT45H7iFmQ7",
  "key3": "3U2kpFx1HCZuhs6JVXidKvBABV4AEkcvSNXxxhPjKmxQ8pgHx9VyXkahvTpBaQXTzrWroow1K49uMXr6hzPHLNUS",
  "key4": "5fF4RCRLqqEUr9daptMKLLHtZ7KEL3W5nTE4ahJ6i5fZwSi2vhULemYJA9KAM6w4yBa4u8VyDGYAjTK5B7gWypue",
  "key5": "2KtSCewcGxeZSBSEKhbheBAaowA2Zjxo7VYPctt1EAAimNRKLkdiXeEwjZy1Gi8WfZaeoW8sV6eSqKtU3jJ6H4dH",
  "key6": "4u9oYoDfK4x6qMYrzp4PuU42WWGzPqKdSaxcYibrbh1TsLYrLBgNdZhswHX2GXekUbpc8riCX6zPEfV6CZ4SGiyj",
  "key7": "3CxRPRuZN94SVaxSS3AuvfFbU8qZvJX8nvbiSrnasgQvoXqYdcb587E8wohVkn5EY1dhwGcSMjTrMoUCvCgvBYAv",
  "key8": "4jsdVFUiSvutGoUzziCZHPZZdbbjzFp9z3ufkrAApNxBJs4EHNCW86RuXrzvaW541LXzognCav96gChm847zwMrD",
  "key9": "51nxdLPeG7ZfRn9r1J7vatZR2TxRsPejjLTVSbRPq4aL2Ep1UE13MDDRX9KwH3jDSekGryy8VLcLrrtJoipqsdmu",
  "key10": "iaEmEyYxRYx2vmm5MHkaK3bz3XvYHnZAgFUGKyHfT6RDXWknYs7URjBSBDtThyPMJ7ukdWqCaTkv7wCoD7PtJLu",
  "key11": "4LFeoouK96kW7WntXMtACouMa1vPn7GJfzX2GuiPuvtVogJbNumzxo1cq5YPkDBu4FcUqeYhdDUG7u8EE8SVPHUD",
  "key12": "H4gxJ16yCZetaMTASZoT6956qpHPb6TF43DjPJG4LaVrRqnGszgtUkh3k8peoBJzUAgDMbEtMKp75pFzE1UEExp",
  "key13": "5irgFESnPz3kdpnwjeTeuBKWjcg5rinJEaBL6BgKk6CeuFPmHWeir2AGKTKE6vQpyNeHPPENC77odf1Na6foiJNJ",
  "key14": "2cAYrFmSskz6WBKcWnE7P4wSRApAUKho8fw9eCJc7HXEKu1ZTgGB5SZUWDjmhP7xpsoaup4vwq7Nw2NeUoJTq436",
  "key15": "3UbdfMtaWdB9FryqhMZfhn6vT7DXta41WsLakZZ2roM8eQbs3AUZU9fVdVMfejJj3vzRBkayXerbfxPDybr5XRXi",
  "key16": "265d9Re6MLLbPzMWf7GumZvnB1V7pYpSheGYxaZej5UJbTkA19W3g6bfFSp1qADKxgduY7uzAb5HtPa7CMv9AANf",
  "key17": "52E6C2kHaYkS9xnU3xgmDdTZoNyBpNQ8nRmJMZ92mKWVhvEwc3Zdz6bxtBhvnU88KuxYkU2sZsN8rKLUkD9CD3kN",
  "key18": "4upEyfAqQWFQrnVU2EGNubDuYq6EAFusywEsH1Y8mjhpfKKh55P74A51d6uBi861rAD7fTHJdvP8UU1stYeKU5J8",
  "key19": "4doV4VezAEYvNaGXg8iebiHkVULWtAAqQyAuFHotRjn8pq8kFqxWzPU1qp42aoE8jn5XUdJBk79w5Ak7J4NCPUei",
  "key20": "541AWqW33mnWSNuTBMmzPGTZJLv43dWZUjAq36hHkbS3kuTWuHkihfcxEwzwj1ZaFhbavHogvHEiE5YEHeoNiBEM",
  "key21": "4gkwEaotrPZY4nThpcq1m2W1LHJcRXh83dMpv9LnMiV1vdnfMusAwUsNd85TN11XBM61ApKDFwvSLoJmA18JTZqs",
  "key22": "2KQbqiNoCmkRko9zRpZihH6MeXJLUZHkALDfwPDSCUhz1N6jGdELTRiC5GBVz59Svvz2WXJ4bDC2B4Ki2Rww8Fcu",
  "key23": "4bC5PsbzuQzkQEemA2sRYDr5GzcuMKew9ZHJaLanzS6H5RfHiFYkv1upN35aEWBLfELPJn3ksiNrMzNuNcSZcj5w",
  "key24": "2MqU69Y241tXCEPbfT3G1jK49PSTjaGA1AH7vPXDtYcCyCdYxeyUTjZeoCgyQxvCbdrQ45FiTv4i1wPujx9EcxQn",
  "key25": "3baMe6Jx6SprThu7fUt2Ax9TFRTHizT2jLD3gLM3CtTx2esCKVVpJyg8NWSFr2WmRS9hXWJMtiVR9SR4NGWtaaU7",
  "key26": "yyMspK4MXmevunKdSn4qrMW69pCoxgP2KbLKnJxHR2GPFzErTMt4HAtYZycTTHDPESrHgV1nF5E6U8pD7Gybxhq",
  "key27": "39YM9z9EMCdeCdUFQcXqRLdHwhHFNo9TBA8cQ5sa8xs2Uj6PtqvFADqjJXNAHBKh8dADGVEqTx4gd5X2AgHafh4B",
  "key28": "3qwd3SszNHtzQLbUq7JhYEgmM7Q7qFbdPKBcWRpz11wSRtU79iwekcbhJJCw9nKi11XwDXak4KMQheFYXD8QbYhB",
  "key29": "3Z2ArV1nNrTmqQHstaLH8uMXH7zF7psY7CCiPtrgBHEZqL6WFSazc3vSXuy3rdjHf7XAwwwurpgRCcyXgRixxcRE",
  "key30": "3nvGnhmFaJ4enPMQ5vtmhTbLHSA5X2frPjW1UMXhWhNYhpYwDJTXYBQMqpwK2UVGXYcYKyfUuKT53EFcEodKPc6u",
  "key31": "4yntxEg53kPuaED7moC653i4F93HJABwrHjgWyWVcfU4AEK5yFYNLuw3cunL6hLwFzE1hBfP2ZGijyEiNSbMbJDw",
  "key32": "2hv8K4VGafzYBqQBkiaFxNdT8YwHExHZRPZodCNu1XxtGuvpoTi1t6SgazkoM1aEkQU2WvTiceSDfCq2fkVZGNV6",
  "key33": "dFs7JjqKeRnmc1CvNbsU2b2ghCuipeg9RvKis5kRvXY56sW3XmdLZ6GNwds4QMMtCk1y19hSFYa6SznaWUspjNH",
  "key34": "5fQZ4Eow3L4DsXfS1rASEUb3zEAjkXcWmxtpkeqz68j5cad7LEP5jvZVsrdToEWJPucXNZfB1G9wH4v8FngyFFZZ",
  "key35": "2WpAtfCc2qWJBmLPmBxsL5nmSNcvpaDQKMFqVNYpR3GVinSpZrPd14cRe2QFgCJWnMvXHP8tQamUi2HxTCo9BYf9",
  "key36": "5mTYCuSsX55mngADMGr6JAvdgeFcTjiDhXT2vWxJQLqCrHFLiVhX4YqLXihaRX59VTidrjjRjUUiSVgJicnnwUSr",
  "key37": "5uE1zAtLwLAZ4brGQds9bWkBieX2tfw6HeL9tToBxYYBWFzdQto1qMuJyXh54u3B1mmm5J2MN5Ru6HHpEAnn9aAK",
  "key38": "bd8iP8YC2o8w5tUX7hntUnErt5WwxRsEzAdiDN1Aqv9Lpa8nyfi1hkQHDG4dTKUDNrKM28JqaMRhHHijTusMPkJ"
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
