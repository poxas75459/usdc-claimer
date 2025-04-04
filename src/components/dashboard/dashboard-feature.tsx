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
    "27p9oh5njmiFgkun2cAmjASfvJHJXLg5veS7cU7GCZNj7Cn1U5VHqAnysnkNbYw6oe1QKKjfqDLxFjTzMbHyMGeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FKA5J2aBCK25p3JS7jdtaBKo6DbmkoCVyGkG6yAw3yajjUMZHSG12QJJAUVdfoZTQ89zgm1VppAN2isjFeQ8uhF",
  "key1": "5whfn7Hx37uZNtajZEVk7TCJAYntbnrag57gWiwMVEKJmhvN4zpFeCgdrsaQgrRYWuFJFibMqcxeWP97nLe4FXyy",
  "key2": "29ZeQwLzXLgw8Fv3LKkja5cYfbEf3smhhHLettNMM6o2igteGdA1bQvFWF76FnU45j5peNjfw47yeDmabBpx5aS2",
  "key3": "3waUr2kvAcJKxQdLVTArexvboHuqiszdC4SeyaG6wyD4MmHQTURBTZ6GJG93nHQAeRjc6yLGwsmkacnk5ib7J7oD",
  "key4": "21opg4ZL2CrtZsMuFhPy3aSdsrxEG9k2veoMv64qbNVX6fc9nr45jTpL1wCUXNGTUEVXG32voigcYsae9kJKbbWf",
  "key5": "2YKVA7xKVYBXBo9cGdHcqSxPkcP8aqwgNsPzKizkB2c8eDzBDT4Vi3WunfXiCeKF5nog3un2xq2bBNS62iesHWZz",
  "key6": "2UtxPLcxUcFMjmZd7GHkmwULgpfiH3nmUannM86NoPYUxXkXyucWrwipxc7pNbrfhqxoQRYGzHhhD3XTeK1pkvoV",
  "key7": "5oQXx2kDgV5FtF92Nb4xUY3QFj5qL4ziPwdmdtCYvMdtSsNocH2GTa3MD8Wzxoci48WjCjgTekV7TBp7ye4JxCtj",
  "key8": "CQRC48cNxGrN8ZnC19YViYNw4qmHy9t9FDfBqLrqdQz7UZdNdfjsZrr4QuFJuJcQoQJRpB7UdxZn7NfbgW5m3Tc",
  "key9": "iVkuubtUAuRpaHhkgb3HWJuPGa7wzGjLqbJXHd4jxzGSPD9iBqDsfKXeMCPjCPGZmozCDq7w9L1AL7CD4hDcaR9",
  "key10": "5LbxUf84iHPDSSARaq7oxbeHTUepBmwshsRCCpuzoL8n3kCzcwPKaR4HMMWKE2VGesJd75BjNurg5JQmgNoaUPtg",
  "key11": "424sXMT3Qr3ytL8GS1UgDHoTtSedgkFwsjacwy624GVbka92hifu65f3vUZ2Nmsi7V7rtXfLP6hQzj7WYdxhZppy",
  "key12": "4WaeGZTxwKcPvtoinNFdHubypGmEaMttJ5YiKGxEGeKVxhqdq4ZxN1EA1sje8MygcTZXZdG3gyXsZKJLxR3BVgX3",
  "key13": "5rYdEqVEaUzP8HKMCF2RHJM4BTMUxJ39jJq6D7ZBuucPkfS3yZdoCNsvAfF8P7PuTFWRawLbY4NeY7u8DDB6xxdT",
  "key14": "4mNkSBQAxn479GpKyhsbDJ2nuYawT1gGo5xuHGA7io2aHKzxTqy5DdvXmGfp9KVcSKh8u4CUZTbegLLGbqCF9toE",
  "key15": "4VDaysbdNaBo3aHpVqmLgerEMmu22afqtANi3AkHCnUTLfrYqy9QHHSxuafy3j1fEsWEMiY95TnGibH5i1B6Apeo",
  "key16": "5R6WJFyjxJ2Ujx4LGF4DGAgaLouaX78LtG2r7CnxKXSMEBsw1Xo27PD9qe1jfLVBY3SYYTQYN4rcndaXhHGv8cFH",
  "key17": "3CnxQQFcVjSZPSMneEnaiFGNkVU9ZRaKVMtafH5p4SGo3iDgd5hXftnBt6JBKQ2VaT16LvUDTH5w6yRJn7ktqGXu",
  "key18": "5rsF7zpQWjqXWN7ACKZfSATY7ASBAPxhV2Bk5WPiSSxMvJXHKJzYRjeymDnCydhNn1tUKzksSfRwS7Agry5QGP61",
  "key19": "2KgwBaNkANczJEZNU1HnTKvhbqWEL7GnqSpvNDk1NprDrp4saMJY6V9ZkbesL66M8arM2axCG8LQL4kssPt82wui",
  "key20": "gEbC98G1wacLu6VndHh3i2PyzjcYVNPwwfJd9xXyA1xr7vufcYZPpCXse6danL4V43m6o9cKP3H12cNXA2Xp4Ti",
  "key21": "vfA5dCHqAWRUazh3M8BqpzrXBwk4xuaeC6TttymqDGvPnqWrNA5kbE18FeG9mazrUwuLT9ttJCJoYYBCQ4HsnRn",
  "key22": "4ULUZyXqXEQiVrMexzzUv29qxEYr5JAxXD2HppLVMnRdSL5zR2qw6PZzReHXS8bdkNVrDgG2uXB9ewsWUdqGYbjG",
  "key23": "3A6c3yMVbdJ3N5sMmdPLUVvyCnHLBhcMg2qmr22BBrVMhKvhXYUDgxN4HtejHxmDVyYurae55KCLrNWnrTaEYLtq",
  "key24": "4riQJHZaZQgP8oBYK83zCFXPAQJWshdVLwDCVjLT4QVUKyRJBpWhLs6SGT2AVoAgPdkYshUmpxNDit8xVKU3oHxx",
  "key25": "3GSqUAmFzmTcBq6fWQaBBZWYHsfdXjb7EX6R8oYtL6ppjsa4tYCxmDR5nwNmEH2Zj8ABcdkvz6uuYEVGk29G62GN",
  "key26": "4zA1mCyfWJMKcsQTabUR6sJzSHKvBEPabeL22P9bkzfx5LqreqkECi8maYQhFNEgQLeVPAihJF3Ms8pg7caJR3Qu",
  "key27": "57YWTWRgUN3gAZ9Cz7tCjtezoFrhS8DZqo3USWC87zm4RFw9qzKAgkN64LchCwqxxEEBkp4dzPvQAx1DjCgoLmya",
  "key28": "H9fTY2qNY55A3yc6yWfEQoE1vk5UMVDzn7yV9L4TjBCNF7ouUkNM6vjTMCkVFa7wFzgmHGjDcHpejsdGn9oRTWM",
  "key29": "szsZjGe3f1wtpNN87oY1rCrWDani5tcZmCSLvEsc7NyLHorTNmddLkgd9YsFspTHQwLgHXs64A42NHSyxnrXBjw",
  "key30": "5bcyC2CwTkJdrz66uuvCBQggjHpmytPtRign8APBLjzhqdshMeGkHNEq7mEsTLWWsnwFeuUvxQrX7ECSVZzF7mwQ"
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
