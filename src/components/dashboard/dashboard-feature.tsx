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
    "66bSNHLDv1nLJA4pYVDTqMxE28mK9PFQfSTRrQHmTpEHPGKpdbTGFGU5iDCKHxjW15ja8QjPJPhwkAAjQ3CB8oFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H6a1tqYdDKMXuwfi9Eb6LPTAmFeHTYdRqTwrp3hLL7aVr2wEcW5SN4kpk78rwG3aAYZcURCoA8URQfHGrkpS8YP",
  "key1": "5KWHy9Rw1V96UEeAV1SDqJRtu3XASRCp5U8SnMyZVzvurqEGkaWRwSzx179QFahnhqrCDpBiwF7CWTpkQofRMwkL",
  "key2": "4UibqFDQGGseRa6A4GSMr2z7YinUh3jvGiZmLjCHTnUMeb5howXRvCiVu5h5UAwphjSSkg3pka9Zei6MHonC7yv9",
  "key3": "2fLzP7Fqg4fJApw2KKqZLcqECpkcxyWmZEmrY6ZgEwB1BWb4wpkxpKdPCzbm5JEbbL88iFcgfY8kJxDU1FW6WMkZ",
  "key4": "2BTwjCbG4pJCAtg3YvStHDtHB5STJhi7DFo2Z1RKoWQLHV97CRwy6njEwKpYmjBN2KS1HCz7tjNe1ZotJn5NKQfe",
  "key5": "5ZxxvBqXiBwLifu56TD6fL2Poz8VtDvipaAt6wjAN7pPV8DYNtXMkEuSrHdGTwMJRbgtjkHH3nB4zVe5ujzjdN2a",
  "key6": "4LbEP6qUSQRP4jv2oAumQx8Ckzyy8gKY1ZoK6Vbu2RVxNENUgkwJXXW5BSjsRj47BsfDCxZJBoGD3MDtkxaXhTES",
  "key7": "4Dp25EGGy47s8BRZudps3LTPAzVa7uEcF3FQFj46FoxDUxbPpYV9K72nDwS4R9Lcxap3Dq6hzctZ1aAX4FJ8vLEv",
  "key8": "54HmbN9ZWTJToKL5fX9TazJ3hDBTkVHPFpyCGhJvJCLvsZd1NGAm2CZTMbn3MRzgfGnmK35mPKAmiyTVyfEKsRq2",
  "key9": "3AYpUjUDj6yvSwSi19dx8cnEocsGcc7zRoD1gJ8nYnteJygtSzuR2q75ZQQWLw34qBztbokyivqTRc3pyeRwb2dm",
  "key10": "5kxDtqb4L7c7SGYscsq4hohcGCBoxsZMEnE67iQvaaYyDCfyGR3dFbCDb2LLQNFXZqF2zjVAA9MRP4FoX6r9X6A8",
  "key11": "4i5SrkNG4eRTwz8U3sbNyQ11qaeLt297defsXuVKCQUXS4w3V1UFmLPvtnr1zHv2zLaYE8DthyPibMnQ55T4k5B3",
  "key12": "vUi12EkwYGyRhSXJyu7Q8k9YwLQwVx8qFCKXnzdNiwZmw7ZGUemoFFMq95D38p2ut46Xq6pT9eGYrckeV8c51m1",
  "key13": "4oB7UquyQiGm6gDqgg2q2FChJ7ZE9CYajWyv4BbBbLgfisdX2JPm8QLtMKTSg5yLXSWHKqsV8jWcghEgAuVseopk",
  "key14": "HUs2q5ZLsnuTFYb4cENv6ohu9B3wbZRjSAeZmuxZAJLbGPpgUSfKLznUSH5uynYSE5rcR6249YHYGxgekd9b25K",
  "key15": "2myfuFLeH7y18ncCiZZDn9xax4AemgqFTiazQH2fd6ufU7QsA2Mgp1JXFmeCUp3fLGhHZGLBJMbx99cdaonQ2pKS",
  "key16": "3DDLEicpsVNbFotDhcm3mwY6gUkhv4HaRtFEUhasMcbBR9Jp3413xuQpJhanYNAcDvMNhzAFh28A9nKqwRusUHDi",
  "key17": "2mnAuSaK6oH4tqKvYwat6CBvPUctyFrq1XEC23gZ6TC9vcjLDXzbvSuB5DSMtM8PYGnvRBz8yt592RMpcBidYygH",
  "key18": "GbchtFRVyUvPYCTq21noaPdJBaJH9mjbh6xH4af4UfV5Y9S93ub2Y9dJwyTnki7W6R7VyucDoM8vTgJuZyZuXDB",
  "key19": "5SnyfNU2UN5VrxF1KbGVCsgmmtMitkem18wH2V84UF7ywAkKa4qbb4gFKa3nTGzZ2MmEPGdZDbVqbBNk8Wv6tAa6",
  "key20": "3tUxP6xwmKAehHebEYxehy1tQVcq1uGQYmXKdqwACNbWf1bf888ZNGTHCFT9M4yrRud7iUCxovD98L93fKWuYLBt",
  "key21": "3riaATyhbYP61HxKkpeT9e45SEJa9RyxdQoPyjHQR3bccmX5uepbvdRkwA8X5GdPDqo5ceHS3pnBSJvzhMY4m4k9",
  "key22": "32DYdf72ccRuHW8NZPLLfBNKrTA8gAz9grD1K6b4vmQ38ny2YKRxytBpRNct2r6r5pECAubHyaVRGFUN7tV7Mrk7",
  "key23": "3c5T8HyG8k2h6pEL2wX7J3pnEwXBhDo9HRXRkajzbxDChvkwHYLvjKYoCfKAGK195xhavoggmS9hGfxEWpWX7jUu",
  "key24": "3miq7Yj6aZtNzmaQ6iuqHs5QPdhSVbC3DK3MuM2WhcVb8U2zxRmjHRWVyWX5DQLGTzJScQV17BjKhUKdYD7aYGJ7",
  "key25": "3Z3VK4nwij9EBp3JhdY441RngpF2hRUQu9aru72hN9uvwNCxovNN43L68gLQmzYCNYDENqaR3cZbX8saMhbPhZpy",
  "key26": "26nZU6C1ZEGniyriPrDvLr4S2vxKyFSZ6uj9RvzHMmGrE6Luv8wydR7xNwsbbVkSwm2C7AGGmkUGeMwNGY3eByX1",
  "key27": "2DLh2GSrnkEvsyunAvoVpFtRgaxEj4BTfZJhuJyYKx6b63y3V8u4CqGttnzpwMozLKJDDWKMaCAgATw5wCG4frmK",
  "key28": "5jnyG6PXMMpWN6voN3FBt3Zbp9iHkHzXBgPjgrYQN6zseAoDEwJrZVk4YjbUcynDcnh87ZHrshhfD5dFS4ysXbq8",
  "key29": "2MMFhwnQcrdaYrUSjxVzwdNT5qhHQD6XGuJ685CZVLJCNqhqt5bGQdHkYv9cT7nMeXUAma6Hs95jUBExK2onQX3s",
  "key30": "3YtruzpGz8bq1gKdvWxzLkwZn8CkDb3MX9hUgnJsVoqqoap7PV83J9ERmWrePweMiDcgLDvc7pPeKEHuHqGX3A31",
  "key31": "2oLXLNXDdw6kGKY1Ldhr3zGeidCbfJiwEUjU3Z3TpYA5xk2teGMfn694MoTgiYRW7r6jZHVprkATPtNV79k8HPAW",
  "key32": "46dsRTZKm7XqgseokKv7yG9vXWDTSXzCSn9mxhG9LNscEPfqpcKCgnAZKzk68kKeCzGKudNCrMSjamQYqa2at4ky",
  "key33": "34WKCziBatV4cpnafi12J92885ooHckMNEnraKtjhPmzRwYGAwQUJA9d87pSqj3uhFiyo7x9ggKHWM1Tgr1hwGHA",
  "key34": "35YcxDnxwJLrCPwK8zy6HDzst5BKa3cfVb8MfLp9CX4efg1zZ2fGhLtQEMFh1bYMjo4Sk6etNbYLbi3Lt2DiNkdn",
  "key35": "3AQ36QiG4gtakofVGkvDFA3WfQ3tHJmtxL713HnMBCMbj2HhSZW2HBkwBLjYmYC7uaeY6QDG6ehASyfpSoFuxQpX",
  "key36": "2ZS1m7RRE9RPGiXM3hYnmR24i1k8a3ECNbCX1vKUKHjJWmFgSNyKUBzz7cyp9w4VAuPrBR1WSSfQ36jrM9Xft3dq",
  "key37": "4PFmGWctqUFVHwVW3nVGDCMT77U8nJGWbJ486oqo8cmxaS2zqtDh2Gf5agnsSNgAxqE7HikFtSzq5qEzSei9BBNm",
  "key38": "3qx1nUnxfDqpGteoSfpaN6JBd5kNedtZhYLhqRo7Nbqmy4bLTiM86NynN2zTiGitFioVaVkL5pRaa3piKeuPkB8y",
  "key39": "5XjKmPzgPJNk3kZ3QY19aVzkG2dE3cw1niXHdFjb6VgKf13QwmS77JgzJvYtwf1E1aQzLEXspXiFnjnZK3GPArUv",
  "key40": "2Yzqxxh96nD7HvM3nxvwtiLbmx4HFjHdvXEfcu36te9oZdFqkeGtmcwWyYogJvsPQP6DDM6TgfPLeGVSSBjJex8y",
  "key41": "29KFEg9ZBfh7pxSgKfqUrax3DQFhmrWMBwFUMPDSFie1cTwCBSqMcWXcvGiQFMJ8J8hrXMiNpkG3X7i5nB8jyUgF",
  "key42": "NFwc3zVfP5HPzjSfwwRBWRiy7KpotJr9PwWEqbfdyzKqKfhvm69q8p7s6qfxo6VCctn8x9ixKDfBdFkBoVEcyXp",
  "key43": "3F3L7WngenWJyHpbzjtxsg8SzXdWnaDd16jayupssdx9ed7gckFhpMLEfaTrwor2S7NbU29dwWR1DaANHvMgC1eu"
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
