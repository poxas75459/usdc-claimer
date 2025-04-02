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
    "5wqp3ud4npkFDkoW8wofgo9x5LN2gMpjvPP1u3EEdMEXwQzC4wj91u6F9eNC8PFG2YfzczoYDKBU5bXzT7Z93NGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M68LcW6335wG7WLB5p23dJA4mS7pmzu3XQvmY8fVM1gGXzApvQt93Fc5TAiY9cSWsZFWc7At1VptrJpFtzGrWeT",
  "key1": "4BwkLsMsnV24ZiS4594fsDtDFCA3DQ9LKysEaExkjeWRksW9R97hA14KEABoELxcNyM4wrB9zwfCgHZAPY6gjKeU",
  "key2": "2p4sFuksgqTYM7gQ81DT1BZD16PuhmBqw8TpzX8MVXftkP19AFkKFw4v9hUum4Xy5woENDRCtv9cX2ZScSZU3ULd",
  "key3": "4qQprtWTyXAQxQaNJ9u3QbuqmBPW4wTFj1qtM264HUep4orkCuNz8Z1X2HUEdGNsMjKtsZDCZxRQVbg3kmKNMv2m",
  "key4": "5eaqq5RzC3KyHbGepN6RTsVhXdDMW7H9Z6gwYRKLFid71NHwuQgDbCAZnfW8Pai7kKaafjizHKa4E21nmpbNfMbb",
  "key5": "32nkz5Nag5iJLiA86EQ7PKZs5Lyu3fezgFXCqgAxHHdhdseatB5aYELrQRcQN782PsWEGXTTBAeUinECD8WurokB",
  "key6": "4E8H7TVQXsDqxJJN1q42JCyDL7jg6GhJkgWjHGGmMpM7pPotXFVKxDa44cGmS51UkPLKHLXWWFMsvGAcEKhgdr5F",
  "key7": "345bQRRjVz8oFzRuZJGdWNPjw5TtY84BLQiDhT6r3TQYbrB4Y7PYkKcddF1LTTiimVX6egWCMdXiEa2ECrvgBeHG",
  "key8": "5JZzR7yVhACUtFKEGL4nft3CorhcPjrR7YH4yzDPquXqsZLneKPBpsguU1xpdp9QrKCtLUKXKUpVtboXzHgqF7q4",
  "key9": "nVB7cSerWfVZaDQx9ZRswAAwknVaaVHrv1WKdLxRgvksePqNvuPYpTUpNcuA5d9TorczvxK2ETF4jgJo9YcMvj5",
  "key10": "27UEA5sMCVNbWSbxXtGWV9tcBAw2ATc7SQ76BaQqcC4f3n4sL77NjupvSsFXgNHAFx3LjGmQuVSqxEcdZhAkyh6g",
  "key11": "4W3jgXUPq4LoaKAu1sZyczw11oXB7aN28gRvu4hWW8SLi1vmAn5m4b1iXnxMfXKJ8xvpJkRkpg8byeFn4RdHAS9p",
  "key12": "3aJfzohRtyDRoWPfRKYR5P3cey7Moa88Ljj84P2qsLUxkVyGZecAG4UCsSGDQ7KS5PKsxE3kBySh8YY8kU7ag8Ak",
  "key13": "2dNsdNxTinjUhr2ieFND7CGcFeuVgv6BQ5LXpHaDxHKsxAGC95ScezqySzdL7wHfWhSkHoJhuQw2vYyUKn4eMo5L",
  "key14": "2Rvht5Tqpcm1AKroW587GmhZo7LGdfebHbHd42c9dJ1ckNhvGuqZLmi6Ah6eFkT8Knp62nkAsFricjdnGrZaPCor",
  "key15": "k84yrFLDcxj73NDNtWsMe6gHTzqDQ9ThTWBijnVcAQ9PWqsAs9ue5BjME6GDEHvzyjyAZoGCUjyFDbJD7ywu7GG",
  "key16": "2a6LokUGJjEEmNJw3VTQ4qKb3skNcarPDXkGgtbPD4ESF9JXVXjp66LaKh1LsLcXQ8V3W4cT9v1CqeGxiCrpVXdN",
  "key17": "2kxiZhk2u23xk5k85RjquuVAo7u93UacUJBRMTSezAovGGorV94C2zQiQAv3hDF52g2KmT3Pk7xruT6kck4sd6aL",
  "key18": "4ftZdDnRMzMCg7YDdAKJs8fjwpxZ23reUE8aXco3zegXBFxuUHxdvZK4oewepcDjhZStJcNGReq6ctgwbvfkiNjG",
  "key19": "3iQ8UDKKpJ2W7XTFXPLATtzZMCs7D5H4knbBQeKUCEJcTtDPRHpbcBzU5pNaQatf3Yu6xps6cuQjWm2VVwvwJJn6",
  "key20": "EqYWKe4SCk6PSUZ2z7KubxLvyuLtW93izsJMhKN4qwKnZCfcnrHRJnmenCGCsQ7jcp1MpeF4pEydsayD1XL2fbU",
  "key21": "2iXgtgQ2uf6maSd29ULnLV9FQXUNsSpqyPfGFCp9Tv7d9wgDMpLwadc3yhCPk8YTJFg98mdaocbwnXCZf6zdZhkE",
  "key22": "2MSBZwmhKdC2u381GsTV889cGjCcrm1uxUXEK8ZE6HN7A5ELLB513MCdTWnzvywRZaSNB9JnHKfbdrkdN79Q3tet",
  "key23": "3n6mqUncKPEp5e44wzVJAmy6neRTRp5SVPnPRe9gTtwAmt9FAR48yFG28eZRtjKf1qRQnFG8B8wzD9sP7YsLH3Ag",
  "key24": "gV92SWwMrMM3ybfgo6a8AanAhFH79yYhbc63wmAoFEhcpyjA5yr6LBy7s23AUDdNRze4W6iC1kFrhMzen6BVEFQ",
  "key25": "4tgG2AH883LuQGSZP1sq5tFzk7PvnRAxZMdRGVQhPS7Qa4R5wS1QweWST5e7UXhvSp8xP3VraiAf1EUGHaFE9RF1",
  "key26": "29FN8Dz9CXBAGKEha6XX6oZZrapTigq5kXJqh3rrNJQDHZFw8tNhXPyAU78T4JG65fQpJ3QsLoG2aEpApp4hTXFt",
  "key27": "2oaJZDuNXCa9RuP6dnWSv8FPtca6DPj62ByDwwX1UWZrtCdAx9PGPhLWK7X16JEiEMD3JuK3t4ksBKT8ydVw8ZAs"
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
