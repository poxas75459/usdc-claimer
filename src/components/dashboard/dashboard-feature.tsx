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
    "3maMv8QNoPinh7FRAoibbZHZwgCgGVwftheVVgrLRS2SDcAHCcfBNVAdPNnCuucChMHYRiFvKVpHRUSxmcPjaFVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wTy1FV6cfwnK28mMXrYSEPYuuYLnRP4wDeZ8TjpJauuLxdCHTfGMD2iTNYmrmVYUGs5fWordrQQ3du7ieWw5xdL",
  "key1": "2bn3rS8GripNJqwdnnC9bqTwTxZGALwCgeerh4yFUp5RasqRCDFhX9aWBF8igjghMyoQKAqBTyyHYxL87YrzH2YS",
  "key2": "63Jp5GgFQKfwwKN4miF3yD76JrZfLbb3ouomr5hBtkDwcW6YrK8o6sUj9N7aNfVz8ajZT62RDdoaveytjLCtpBzp",
  "key3": "AsayQdgTaYgms8FRtJ6qXaVDCf63Kcecrr7P5NhYSd3mNyVgwEVfTQ1WNwRMnJMtJ2YxfDCkgCTuNZ5kUASNNGs",
  "key4": "45fB5VdHC3kJrpnJr3DWPtrdkvipQ3kScAwRcD82PQgY5gzhuRHLaZphk6pye67jeNKQJgVT1PLLW7YSQbMkpqPW",
  "key5": "3xPyHghfH3aqJTrazLN5HS7r9QqfCcj3oRRoe1x6LvN4PF9iP9qZaZHcthbkfZDUZ6rJtctzavCsmf2Ec21FkSvR",
  "key6": "5PkwvDetQaU1vrrApHxGPmRTdcjsZMxBhqPgn2EWteMDpvBDZeD8Up8XopatehcN8bAkDfMUnQh4qab63f1Nqn7j",
  "key7": "5V4m9TK7bWC9D8LrMoARjmf5PQFRP3XM4ZHk8q2Wt2QriRdcYGQzePFWJ7DTTZdNTRW3sEpwF36e62xq472V36Us",
  "key8": "zPWS9qApjw5SiMrvD6NNUEE8Bxb8LFMHMNSj6dZ6CUUGGkWeYMobw3k8jhzhhMLZ2Wm3RmS2Yc94u8i6rFerVLC",
  "key9": "3Whqr5ya5Pa1dVp8ZqVbjMZrqNke8fstV9xUf7PCh767ua276NxV89okWe7VDyXqoMu8gPRNrTo9iDjqNqLi21Fk",
  "key10": "5J8ecRHv1jiG5YxQJYMkw6FCiU78FmDNQ9YfLtVuxR8Fcaknw5p25hYvk5guVkvmWptQDyihH5E7nVeF7d6DBQuf",
  "key11": "9cfDaJ5XSFhxctfa1ZyRZMTQkYjyMLBtK3H6Xb1RZdyFnwSf8VanBEhmt5653hoye6FfxANWv3kfaNPda2Fmjw6",
  "key12": "2YwnW3E4o2FeKUfFrtmfVPpYWf4nXcthpqsv84bqGnEq4E3Buu8pw9WqbvcmUZaUiGtXGtLpsrDe1pU1jRTm6R8r",
  "key13": "Gs5c9ie92v1aUPRKxwa7V7hjXAjVQTbpeJrWWY6uhpN32iGzCKwzfDnyiD8qpqZY7vcTXZMntehQt8gga9S8i1H",
  "key14": "5ZGjC2xBFNRJaBgSqYqYgHeiCwxTiz1jpxNRn7hV4hMY2HhQHYzKyKz12ctQMCW65KLyoSTTGHj8DAtPB4EHVKaV",
  "key15": "4pjzLVkTvrLcQSWKzm4uvEafvLNPogH13Agudi7EVH3NT6MZwsb4pzcU8XfxinC3dPJYqBnX5TDPTUNSrLx7ogR6",
  "key16": "4UrWDh3wzcbK1DbkUySoeLkghjes93uqBViDZAyRU8Fu6r8eJdhPZwffaz8rWJz7rvVzVc6BL953d1DQPD4sqFdF",
  "key17": "5SGsSRateWPECE7gVDa2LK3kQ8tiDL68f1qKLEkoyHZ21Eh3Tobeqhud1eiH5FdvZu5yUYWWW7igYs5ErfNrKQTF",
  "key18": "65vjhEQVrQMyqx71XSoKt6mBScUD3K5AXggW3jJdyu7GW3F6pTeoGJs3bstnvjVucapF1nsPSnYhdKCKe5aprAH2",
  "key19": "2DW6jqwToYmsPpBZxu46bwzDsv7LXWiBptum1Uw7sXPgDxHjxaBxcy4ZixoSHaf4fnsA5c5JzEbzDZ5yubeSftmf",
  "key20": "XBH7f4W92CXBoMPyEH1JnnQ1J1aYa3LmX7wMgcvBK8rFtpfLd2UFUJ6sC9oHx6fwLLMmpyfHTyxgvbKprcNg8gN",
  "key21": "5dxcoEnFp5QBu3XzefCwo3GuVzdnu3ho3vWjzon4n1RksfskjYHgnNzLgWRF4c5tAnCcBKEmRFGfbpV9YDczJEMX",
  "key22": "4E6L6kZ54KezecLyVAK2E2p7gy7csxDkPiCQZKwnM4Pv7bcJ3Q1jFSuYLe95iXLW3jtze9c8KTtJUVGrauq449t5",
  "key23": "5EbqjbePwMBDSnGqBLkWth6JDjvazKmfMeQYLLJvnVVfErDbRwSCP61kMxXMgTNZBAeCMSaWZCXoHuaNhCgN2sHg",
  "key24": "4aDT1oaHPyDnCCtrT98aqkZpgDDaLAKz4tVszsCait1kuwuDR1bYEDgJJD2vPJMExwVuBYAN3wWbCNw9xi4U8AuV",
  "key25": "4sd7bH3u3TR6VjKrdaF1RZxVV62KHuoJbs1qBUz13xqLLABYbuvTdUx42KFfQ26pHG82L3gBqBnCtBeyAND1HJdm",
  "key26": "5yRQAjBepgar9tGwCB25hKc4JXbkfb8DGVBP1ujzbVb7Sm9LbK3Cocn8gtA8WHBj1SCEgYG6NzzY6Atj5vzRBU8D",
  "key27": "4NbRHQTybLhHXzGBgTEq1fg264ATuPTHEQPZr6R7RymkcTKsLPHaGb3vjMTW8nKq7n34gwfwT27GaHaoHVorjX55",
  "key28": "5cZFkUNzs6nB9dA4DShU4fVvC5AdfDZoMAHj2DgLQGviGoFQMwXhf9CbP45YJc69mJtaPQnDDxE3W7B9RNyTeRix",
  "key29": "3D6qQiCtSXn5vyj6eqCr9wKBrGKiMJyzzShGnLsZwMEPj2tYAL6djDtyU9UgA2aS8vFRxsx4ruyPAfHVBdZnBVqe",
  "key30": "3cCAui2rBgNe7q8un7ihRpDQa9WzEJ6CE4ESVy2ujy3T4mYfacyrrXkpCYq1ZzKBwR5yJVb7zStpdqQSW6iFVmvS",
  "key31": "jWY4JAxPKngjgmgJHurSRNGJxPMKmb3Nz5NhxY9oc1MMepFV978RJvszg4tR1gwf8h33rfHkXqmWcvi88eaJmT6",
  "key32": "44WQR21stubPSkA4icMRojQj1UzMiWvcakGq94waXVTNiG1jw4WnCqj5p3YwdH5gpar5uB9eky2WsHCXxwD3Sc72",
  "key33": "4v4FK1cYinjozgx1MGTjuQgcEpAZsn5B3LbS286g5q2iSk3ZNEBBtZmJdAvEabiBz7Wrcdj7m29QDptdPAqfArtK"
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
