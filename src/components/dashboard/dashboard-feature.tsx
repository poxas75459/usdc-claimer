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
    "3BVH7yqYdix76iHGYuf3Pf2yjbhUXRmMcb7NdsHAKgf8V5vJyS6zXXVLnWqDDJRCTrjHr4me74DhqAZ3ZqY6YUVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W9MHr9iw1sPZB8U2mUyW41tdGhhrHbEqWUWtShmGniJXxxxwL1S2ADChT3p6N6YZMp75ZBK3Zn91WubGtnRNAjL",
  "key1": "2Yea3Wws4SuF9N8Hy18UnCeaXkmpwR6QNEHgMCTAhA77jSuZixZhrmCTSsE8QmJRknaqnwGXdA9M5TTx7RKNkAqX",
  "key2": "YV4br1Q7wQKnYajmiYw5Jc4H1w4sWFFCzD9eX39hya8cBKKhkamQDgaZkHZkdhreNK5v6Go2CPfd4SnfChZqfvR",
  "key3": "5LeHgMBtSfTgXmY7eZJVRyk1gMPHWP4eCSEs3fwVtkpeAg4kQofFZUcDhniTyB4QNC5auXLftmYWJiMJTR9Wr6iK",
  "key4": "5iH8KbCDSr95GaB85BLRDFq21uKfbvgZUbWLAebuMfKSTZeFVFD1kfNSmvx1KNB85kC4FCPhVavjyvn7waqjburj",
  "key5": "3767zAS8JWSJU8j89MHm9h6jN3RvFRTyPaLtgXSrHuPpFikBsCvj9YWfEPLQRxv4zADeP3SB4sJjEiHs2FFafaZU",
  "key6": "5p5bQgdBC4q72zisqdkVUHjkyy3mYwsfao3Lm2KK1RVgdv7pJ3khvQ8fbsfMZ1p8pJpa4agxqfatC8KLcXA9zAzX",
  "key7": "3PeL71wdpu2F31iSxNzWtnsBojTCiTDuJb8LD6m3ZGviiQRdNLXLYkCYGKzkQJj2kLxJUBJaH97ba8AuxpRZYhsi",
  "key8": "5WVduQLgg3p13rvcA5GUAPRzexSea7kAcojvw2rXcnLyatah3XKGThcgAz6oPNN3LHC1SS9mW4eU2bZhNCnKxg91",
  "key9": "4yKwmMJzszqizbzLoa82gcYwsdbgbcF7MYsKHjGo1qGCiCvFpD6ZyF2LzHDxgctVh7V2pgAtS49SXBzy1akNGLWX",
  "key10": "2PQm5SWSEYC8UTW3PMzSXDPULgWRc2o5KGbfLqofYwHAfjjrqVYJGUuHEsnW32qjwGrtMMwUs1uhEQuDkkUzyiMX",
  "key11": "3qvs5FY8zVd9cSSr2MojZYoVhf4ZoMoaNYEqpahR1sz2M4FmGtpTEn4UBzMBuczZEeBgqz5ZADf8j7ckFbEAnodq",
  "key12": "2iLNakocxitE67ZXb6nWVR8co2snFnxLXSzkr5V2kGS2FWkZzS98BuGGdVNmxRwvNwQapPgaUXGRMqqvWdSNQXYK",
  "key13": "676ua1bTpF6J1RMf5VjDD2t3TXiusg2xxXcyqkvCuG6jwp9gZyghHiqxjApo5aC8At3HBFuBBWr38TUYETTa7DUd",
  "key14": "29q5BYmbznEFaD3tS6qj5zGSb1h8JoZMtUrgbQkvXVitSFkRPUP1wfwznYKYc9TT6E3uCs8eQq1ZUik1UdqYTJrk",
  "key15": "4D3M3eFh3RJ1uXY9xnrafs6rc7pAH3d6B4zoiVksoguevt22bkM6LnF3xHD9BEihoV4QreQchrpLwiHDrUe9ZDYU",
  "key16": "5mV1JkGMVNZWqZz9WHQEt2uMGrELTuigY5XPNjbiP8oWnyTXndLze5e8kaaNaGi6EvAujxfYMtcFGwMzWazmkzvb",
  "key17": "43jHfLHNegM4ZYLphH1vkGoRoHpVDEAKb8MBAhHpn51VMuMc8gFBVSWvd2Gtur2xavhBPvxZvJ7aawGhpDb7PpWo",
  "key18": "4i7iRiVZCNRkQBrER8CsHphwjSwkdbPdcjiFRS66hU7xgtyFwcXAAfm3fYuWLjPRdRt4EUqF5i8nmRPXpFeh8yYm",
  "key19": "4zqsT8H7aujorroECPgxreUb65V6wAFnD9eZpukVJBVQUMqmmgx8xMLVxMwUbrANyYQVFzFLXsJbkNhtiPhB1Xsf",
  "key20": "5gCc1YG7fkUenS6Eh8Q8GzPaZQbodYnvh6jNCg4R2xcXttrJ3BgF4VmPEoBqjV9wVbzZ5cusTs4Q7AgG5m4WgNmh",
  "key21": "3TQp6eMwjtWwuUfWpgVZvVmncWFVA6vQUrtjxed8z6YXwgmBocZH9EgREbSh1C3n5CjiUvzfDn5tcMc3JdQGp2MQ",
  "key22": "24MJ4iewsn7DT9F31nBuP7s8eGs8WMEqLgAjuAkkEmoKq48EQNeHTZFTNcfMTpNGP1MeN4MMjuNcT4HaUSsh2HAE",
  "key23": "vPNP7mWkf1cTE53hyiCPTP5rcrxZcZsU746Jr1c9WVH1y9GvAD4Mbs3nVdFnvPxmqecD645BQ1Mq5CVMdkCtYK7",
  "key24": "3PR99Aqb7o9ayyePcB1LcxPyz6DmJDVQR17VNpENsXegnyFZcEVvdr3PLwyWPnYdgZwX4cVsCN6Eb8LaXoCkS1B3",
  "key25": "4mfrkpxWReYdih6x2Nzhw74Z1StC5WefmQNu54NntjN94vtbHs2LDjPX2qWtemKnSfvEyYJ8ekHbB5v7kfdJRgb8",
  "key26": "BWoAYKx7Yubgi63BAZdzrhK2o6oLi3b9S84JvY9PbkKpdB1yJWai8HkjbJJCvrKFzRqWg8CaTpdSH7ZoKQKWkNm",
  "key27": "fvUBgGUmfWogt36greBngyb7m9fbixJdfhWwThdKT4uzCNz4VEjeRrP1BcprMfFSLsKcFmYxKyLrtfLB5FMWw3s",
  "key28": "3FbuNR7XH6aPDGtK4ZoM4ctu1NBburiWne8oMwUUTUffec3NbhMPagPwMsxMynQ8CZnhu7DR2tPK9Y7wY3caDNzL",
  "key29": "3u9v69T67C5cJtARFf4seMNQa7bU6kXSyTeA4dwCjF4LufpMNLhFsJbVbEHrZyLWFYzpyeKRgLofJWhJCxFSxyBd"
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
