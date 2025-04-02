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
    "4RSRbygQduTR8bjtWEK416L8rvpNf7LX4ZN6jYFoB4cuBRxi4ovYwY4v6U9Z4FKYnEc2abE4xXEG9mVd23VpcRn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rSjNmhcZDQHcMFKeFvAprV88D6M5QE2wsiEfNHxNpCCA8LxTSYFqedjHw71id2cg4a3aj1jyCH3T71zyAQfZJK8",
  "key1": "2ikXh2snv7hWAu6DK1mw4C3qkQisSgxRExDzgNJ94JETxYCjS6zHN3LnbFHQj8vinQbu1E1XqKMkZu9CbMr51JiS",
  "key2": "3buy69NTWQGGruVtCdA6T5WCR2hzBcpQYfkJqAVeavqxsWFHqruyahs42p1Wb7hyAZSpauuu1FyMBKHGCQwGSQo8",
  "key3": "2TP67MfsCTU9GZuxFge7ygXK15zJkb9gVgfCrfChxtQFeiDc9Xs2tB76UE7MC5STskEkHhTJtmQ9FJV6eYMbquTf",
  "key4": "We11KXAjNoGm5NkDsor9P9g2waUj5GiVgdnNnjxQjcbCb4kntv2NKLaXE66FoE5n2hxSvT18xRLyRyTMr4kxerh",
  "key5": "2s9coVd8ZZbVhDpT88zPEzwxe8wRUQXjSMCKj7e1d5cvV96zbCoVMoX9ctUA1KQsGW1DiWxfYvAkyd1xFGDdH64n",
  "key6": "3VmSLLNL8RY1uu6sc76pcM99b3vR8FDMvPQmdgSabHTLHY8NbJcvdzNXS5LXkfoNrCVfiywKkLUHUNyVYBe9itgr",
  "key7": "cXGQwbsGhVmeo9ex6SLPndrKgCNubts6vVbKRpapz7WJfgGzHQuL7CgsgDv2KK78LtLzNtsKk7LygBavWDDL4CT",
  "key8": "3i5gaUTZc4hjoHK7dZ2TTzooE3ruAKJZzjpsLnTmerntWV5WSFjzKTx5HMe6ys8QKPye6ZH9CsQ2oCsdBEWx5DqL",
  "key9": "2gZpT55y78Uj6anBwuZZfzyKUxL4dE5Q3WF7w3GbJWbBLvkrgq9VZdSEXbd8QhdwZkag97f92LEvo9h2nYMyxpur",
  "key10": "64UZm59ByWexTgA12pRZg5BkzFfXuTpdtvE9oFJMQBuGbFr5xMcmjGfpeTdh636QTpJLAQXwuphxtQ69jRSRazGj",
  "key11": "3X2WLt2vYjb1gUdEQVQNP7X6Ru6AjdEq5sBU8ULCYTq25LUnyhEQdEE6864HqFGiGY5PJnMSNBUk7Mc8gCP5eX5t",
  "key12": "5WpY8PpU2h44q89ReG4kwdCwV9bJB5tvYmskvchPboS2GS9mE7xMfxt3xFFdceyD3y1uU3dNcb8DBhdgQ8fi6EWp",
  "key13": "472d8C12PgbPw2Dsn5n7wfmrLW7NFvBRUWL1F5PmAjxX5VchD4AVeoAGHbfAAfhzBTE7NXNaSwKs3NuauGmHDEcs",
  "key14": "5KSu1WtF3uScTUs8w9t5zgfJdoay8kdbKxHv5vVBXKyhM7GJ4kRu2iaSWRfXbDE4rZ8uaa3zBJ2etDstxe3sp4aj",
  "key15": "36jpAN7JQGMu98Z7mipdhNKgkDSqXQxTxDx5BMx9Y28T5oh3qUCEpk77yfLhxnDrtahTshDJp4vZgigYNhg9B2KD",
  "key16": "3VdmGkQ8S7J66jpTxaqDAdmkybJmXrQmFrtyxFhF7b9h2UrwfBhsFdp3jb7DU5YVkcyLqpKSxxeBzkmaAThamKrU",
  "key17": "3PEXRiioRsFDearNX2dm1B7xbX6ph9eKxxe18skEqTrbE2y4Jrojd9d9qU3ThqfDRHsd21yQFLSXD2aBxYQDWwaJ",
  "key18": "4nGUehhgHWheDTyuf7RYC4UP8VFssbcL4mAR5wDHPsGW3VpSaenbeM9RhEPqQ8iWWHzd3bMYrkBrRmj1yzAQjzwL",
  "key19": "4Lnn53r65RxKN733n1nYWocLXBHaQ3Rg9kMmdEq6L7t8Uf5jiebAS9Eo1cM9PsCDiTp3XMYHRNbfaJtYJ8CrMARL",
  "key20": "2LRqKKGbb8rxCtBZkaKVhe1tHpfqBio9nkVv6wNe7yarnTtZnFEiAQoq2hQcwtH5fMgMxHmQXEBWpLeJv1pW3Fnd",
  "key21": "3jwv33uCWG7QFL1xRRUiLpdZvp2CGzch5pUUC2tdiCSysWdXejwSg7HQdgkfCu9ux6hPF8GR2aRuaqqBs54ycKqX",
  "key22": "5KpjmVbTAJqYsoqwBzQRPT2MCuGxckaUQsQbuyGJDUhK4FA6SRMmTTJJitkQdCqHDfkXr9ZkFH5UJPgBHyBAb8dw",
  "key23": "2uPCRPGnvXxzPoN85f4crDzMj1WYvVq2cgwZ9Lxf4GjhmWwJvqUfpCzUT5eEsu4wnKcE31EndJHb7RNuu1xjh12i",
  "key24": "52pSrPz4w2WPyDdRa54nLit9R7dkC4xt3kCfGDqyBEmZBqhM4Q5SZmCjb9hgaurKTKc62ASmqEnwugo5Ynym5Cx7",
  "key25": "2n2BzLfKLDx9FWmxKniZV6LDgmoDwNYGVr5y6ai43RxzND3fHqKVK6b9cRuLhFGdB3VqoHWgh42k14PCubo4bMmz",
  "key26": "2QkSvw25fHEmyVME5ACd2ABk2n9Z5Rj1eXAZaFUofT2NVhjUaZRPp1RMdiQ4QRprZ49r8hfGpMyKxFaCfQRbvcdG",
  "key27": "nu8ATynjE3JbKq2pUd4iLcHB9jZBhRL91htzAL4BRPH3HbVNuhGQkJXMELqLn1ezJsk1ikEvLo8FqgMJtdXCt1T",
  "key28": "2CJXv3Gch9L6sagHWebRiF4E38JBKxdTT8yYwc2Bp9uFFgu2J3Wnw1Pq1dpfv3NddazvFP4TLq8jXD3wU3zaPUCE",
  "key29": "DP6coNNnVDevJnZSDMvo6CY8UwHQs2R8rD5ieCgG97JhAuybRii2ekTTZNM8pX8Dbhgbx1XEFnYtCWzAQNwWGbw",
  "key30": "4qQvzsmoawjbaCVgqx88igFfvMtW9DDrsN5CWfHKNv3hR5VVDHQWUFF56Qt9yihTaLYGFhsT5uGZBnjD3Ex9fhnQ"
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
