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
    "5pvQkatCy3wzbd8syFwN5zjgoxNEFzt9dJ4UU29fMsTt1YS4xXQNaTo2sjrBddoqkLDKYmrQjJPE8CuvQv4mKqwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NmDMWDQZaQg7DbebmmNwgckdcGzKFPead8yuNySTfFTY9T7QcuhDVw1Zk1ja9gS5e5e6ZpUW5HLqJZwHakSQ3DC",
  "key1": "Aqmb99sqkuQc5fgyZ1ksNNFJvAojTyuDYrLvyJGRixbEp5BuJudq6xKf5Tc531zUBsVeQ4Wmb9tBWTZYHJ3z5Hb",
  "key2": "3nrQZEGUjCLAgDJAwAFYCQtPoLRMCqu5ZQG17KVjdLkFkdtLbPnjqZucuFNKK9pHjbGXVQefkQjXTyswSpdsQnYf",
  "key3": "GJ8Bgxbtvvv3UCNvmhyLeU8vJ1DbrCHv2F8nP4DWHbe2k6TQ6wFNkqY6xNvdqeXeKiP5EK1oea2rRuX4EqzeGzP",
  "key4": "35xz6QzVijMePvNcvjX9ELRghdqp8rKHSRyN1BHtm21bVyCeFmyusJJaj27z7NNRT9LAoKoERWtkHSBPy12GLwLJ",
  "key5": "4XNK4Ey65iyqgFAHkbS65w78jEbhc4R4zKbih3CTXLbKkvvsg5k6S8WY4zWRxhNEgeqDdPSC5CTE7QoXZe2icmFe",
  "key6": "G7V96MzkokbzdNdFTfa19PPeCKXoWcA6FEmwHMv3AdFYMfPPLi1jcq94xYxBHdcPc7uh6F5tExR3Jg3eK9VPHWJ",
  "key7": "2to6Gr2wADF6bDWyssp3bWkFn8zLeZV64Qv6411etGordL4SGJbpG5jhmT8NDmLGfgQ1RNhvA9v1vDWxmwbXDvxd",
  "key8": "5bYfE38dpLgxZ88gg5fT38RjGnNsHR7pSAcHbYNbidsth1GRGkaGA2tLkkBNiy1mWmQeYSJ6evnYuYTPug8FFMvH",
  "key9": "2MvrM8HXJL1FUWpWYkQ97mtkebxDpacqKz1GGc7yhmZxshgCgRWkfNAXdyo3ZpKzQCujAFRPfdhiJWN3SwoQrczf",
  "key10": "46Q9i3NaTjWPTUwnEiQoBTNppQ4xehwgcHNiVcBSyi7b5Scyw7Xp9fxYUmibQMN2CTcGkFJAtVkw7BXuXM2p6Dzb",
  "key11": "ep1ZKxcb55SPqhEtpkNySBPiM5LrakW3x4pC8Yg76XvE5qqj6uZvUmfBKs1DUGJK2UGWwvDUVzyf1TVKu9z2Qdu",
  "key12": "4yxYUq1Diitee3M9Mab9PUy2vtt6Yr9jT4q1yiJC4K65pMi3n634dDCGn6rCzjiSxoX7A44Su4BeJdb6z5MipThz",
  "key13": "2SCw1CjZ818rbhXD6J6jGNTJyTx7a4Svy7ZipFuupQ3vSb6ZK7vdcN1MY5e4gDjP8Z46AdVyHEb643cYGuTMJmF7",
  "key14": "2pRqGvozQd6oqRYbU36QGTbMUoCJE3Lno5vwpUNj8pj2pChqX4QLHEFDbXQTWjk3YNT65PbTZMCbcw55oDYj9oNL",
  "key15": "2e1Cg8Q7Uf92LogD8quTxUXcKw4mzEpBkq7azSUYuLFDA6WEXm2fqRaGxHuMoSpGpfwwk13TtRf1Z4fqNBFj7BRD",
  "key16": "3RsuEAzWA5iuZ7VL7xaHy36W8Uo44wTywVR8GT9WorjRBFx7YYbkhdispHVEzpjMnncfxt57Sno7cAt95mUFSub5",
  "key17": "5LcFTxEWvonHw58YUX9ekXCX8eDu4QNwEiMkjBTBBPSQZ5atooD3ibokoRJi9Lwm6WNTKhk7a1CBUugz25CRgaU6",
  "key18": "5jHTvicMbsshxybtrBgFBexQA1YHtfWUC9qJzPktQayJkCBwrnQNUWnvqC3zmWsywpQ2oFJjfeuu3XqyfH7gptfM",
  "key19": "57EEYJRhWdP77L4XyxNHD84qJ33NPiJ7apEtAYsZmSPV3FVhcoFBa9QmS7TgBNqMwpC3ixJSm3peYVZimSrZg9e",
  "key20": "5zZZqvhdZG7p8uJMRkuwT8xfMZFfDpfAFk4Dg2fjGeu9SHMt7vWS3gpyDPGopEBVKn1pArj57WAB3bPFjLGjM6yr",
  "key21": "5dVgUPXjQCkyG3Rkoaxs8FFXYFSGcmBNMy3Pb54qJ9cyFNVrukiU5N17a5gdU3u2MJbRsuVWFBdspo7M9trnDUUQ",
  "key22": "5y6Uc1PAn1tew97NtzbHmd7kRP2hgnGLKiApycRPfFXWyVzpTnMGFkrgH4BwjUTmS6Wbnat9QwGYuZaihpdZerkn",
  "key23": "7qv8ojaM44NwHpnyztGmpTzgvmkGwEDmbhQpfCvcMCo7LQNFRtdzoZNaadt7i5JJo5MacaSNM7iBgM5hkKpL6fW",
  "key24": "2Q8PQy2zmPm2CzyuUnE2X9H4SnEmRuVWBoMKEUB4ZwQqWGf7bCJghbJQkz16QDqLVAVne3wZy2JXcMWzfKFRt37w",
  "key25": "52oCnLwqNRasKBGpydiT49vLjuZxbx2Eo3N4MpgSicpfVH5ag9CGwnr4RetWQnPK1Q7cZWmPNiyxGPeBxGfHfXeo",
  "key26": "JiHRHoh8CfYtvsQs9KY74uyxiCdx55KCSmMSuDyd9tx4z4eMZ9AGMtXCRsW7FAARh9TJePqwwxrRA77iRG2esHs",
  "key27": "3zfYn5X2bqJisUT196P9Pq8TyZ8wg8yPc6v2tHkhQ47cqwGXXGKrxSQ67mvG49hr1K2PT8cetYJR8XWq3CAvd4nR",
  "key28": "3vnyiU2gKeGC6mymEdHGkb3JnsYsqdeo8vWiiQCrqn7h1jkUsHbHPyhNbjy78j6Hm7NNqPmcCXtrQ9egHiw67vtL",
  "key29": "5KGc1pSqyqouHGUFqD6KbeetWtjENuudtRon2SEhSuTufysqiAForKbkctqMZ86WkVrk36S2LM1BGLC9JaxWsWtY",
  "key30": "2aLiAKVwFYga2aAnfMRz7oZD1bAcHMhg1f2f2Xy5pG5L8s65AtSouTLNKx1TtzEBzWos3yY76sV8kSN1BGHM5u1h",
  "key31": "3tx4ZgxSD6uWv64fD4hHbtGXoNixXSg3KGrKFTtVRJ2G4qL1oChJxHTs9tHpM8NX98BUPj5RtKHH1iuPWTPHW3XQ",
  "key32": "4hSmrKrVzhSR6zaxvDhjtUa5RYWB1G268Lc1feXjjvrCSqLz6BsY9jbXQLkmre9uZBACpdX6xPqawPq8UBoXVZ6Q",
  "key33": "4mANtUfVgPhsKXBYtbEiB3vbY3Ajq4tBZyiVGK2FNtgRiocYpFXGzUvDDfsqk7CgYix91q8RqHfAWMbD5kumRbRQ",
  "key34": "3MyYVBChU3ZD6KEUBcKAdsnPnkD1yVeF4TFacLgxwWXDMYFGvNVGxVtXLP5uT8rMcg7EpWEGRufLnZ7SUvxS9dDu",
  "key35": "2yxzXv5fXkZoWYNEsqJyUNetN6L4kAoZErz3uLg2o5ADdHRFwJFkyxhd9qU8kNinCqdp8zj5L9dmnqoF4xkV4h4v",
  "key36": "3HTUY5Zcc9a2Xfm43wNe27NRmEWCvtBi7XXwSrh8GegiBvoeJY4x7PGFMbRdtig2eEL3KPjRpj3WzCnoegZCzBd9",
  "key37": "5hK88t8QBywqaUe1QG2oecjxCQvL4sHdPr7Ckcejtq1EdSioK2QuBedwYRviH3k6BugH334mkXa6VXBxXSibGhLd",
  "key38": "4QU7YQVvkpS3sGphy73ZkX26ZYdh4bGdTkCW9QpXNB233ByGAXJeJsz9J2B5uuRGH2byH2gbyJo2skZKYqbxCFkg",
  "key39": "5TrnZ1HfSPMfLphJGeSLLw8xKf4PCGsZ4AgLXt2sqm6Fkbs74NopE5FKuRdMUBXEsa1a6qm4dMSXGKtpNxdwxJjZ"
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
