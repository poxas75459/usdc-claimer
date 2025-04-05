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
    "4kFp7Uzyx9AtkUkq1uMFiBFJJ2qzT2dwQTnnMgewZnWbh8dk8BJx1MrYXCKgEaJt4FMroAGAx1V964Um4Sy1zeKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PnBSKG1RFtTY2ftoup7kGsHXWXG1YXXiroDoYNH5zLkWMDJnCYzs9qQvgwDAsAvkWuYtdeVZxuzEoPQAMaBFGCp",
  "key1": "5DGezTgDbZT7LCzAPy2a91vHbVGXDL8DfwicoTJCaB67ifLkh4yP2PXRqZKmNnwrcuKUbkJoKomF2zmWBBmDsvmE",
  "key2": "5wpr5GcBQ2UJCs43y2PZQWeLoQA2nBLzG5b4QQbTTPDp22ufVnbbXiYR4NJhzEbNPr8fxZ7nvLdsVVjCCwUX9hfv",
  "key3": "2LPxCxyAcGU4nTPjTXQLCQZJDgvL4g67VsRzQUoYoHtSUWvNSkgHzCWzvsEvbGEJE5rNFcBxsEYa2aNVDYkBpyA2",
  "key4": "3r4V5mbmXuCwhqehvDRyvNktxP8yQ1SDhMW9WpEjNVEwDkUdR25uJY53Mg3ZXCRs8k9pnoXphSR5mDRk4fUSqW1v",
  "key5": "5hGyNdbfznC8nzX3nzJxKbhHzpq8T8H2aBUrDBB8N562LnfUPMU6Z31tTAdqvR1tzpXp9qxjmLp298ucAGRwDxdB",
  "key6": "3Tj5QvpBmbZ8tqEqshZqP2DsdzTjx1Pqa2Gkx7kwzaq5Upgu6QVYLgmNkMHRhZaJ5uUcdeXGTxiAMPNjF5oC7Fb",
  "key7": "4xpbSn2EtaaYW6opJm1wYx8hr4LNjUKokkv3o4bHqi9H4D2wor7XkWhDbjestHZ7SmvqgFGizfxcwgLeTcrVqyKa",
  "key8": "2nbtNBTefXMSmES68zyFYHFc56nTpTAcoGEiCXQKFzQJmj1dm4R52P6i42wdNxtf7GeithFgP7wp6xaoo9rrjdRx",
  "key9": "4ePFftAKZPYwaXF5vdrKG87EM4rpPwjXKVV4gTBBBX5Ykc66jVCQQJPdbrkZBXDvJT4XWNvAWAmujGyEYg2SVf7f",
  "key10": "4sdHKUTtrkLNML4jMqs9BM4m9N2V8yeP71hH6f4JF3dJuCetDDWf4mYyge622BgDyEjgpAx2Zv4zvQ3hbBspWJ7D",
  "key11": "qWCjwrBffd2wK4E64ohgU9U2mwDDCZjUQuHw2kyw3ojrcLSGMrH7PkLTYNfwf5K9DaoudYgMXfoGznuky8fYyis",
  "key12": "6gXwu6knW23ak3DatupNbC5B25DLd9k5hx8Y3kSth1SZqRnvvA1uSTN4wrnb3tDLzgec8cXBuxBqXD7dSVhjMDm",
  "key13": "52YGFtMzRMMeT4S1Tmi7R31CK7YDjVzmEG2hkuiSojZuT24Y27bW4svztgD36AnAsw3ALEvjFbjwy9YUsJNJwykR",
  "key14": "5AH1WjGUMAjAGae2mmfYZQLvVsTMu5FY3P1fk2FP3NabgEkBhhjYz8DJMAUjWHstTsHyj4NfPx4VqTHjZnfKLPg8",
  "key15": "4nJbrf9MVH7nB6uQgXDZ4yB9NLL7AvUfMuBj2rJTCDcWe1r8FC9knQtpwSrhnWvkatAhgHTe8taEC6UREDvGehGa",
  "key16": "2x7NVA4kU9ZsJnXowhRnuWVp7kaRnG1SjTt6HAXvHNCiV4G7MB2be2WXXhCx1wW7FCy1pcH78oBGNPJDhb1hJB9K",
  "key17": "LLdJ4aB3RiUJJNwqcfA6D5o4qW4CYDH5qYBx7QF91EFEiCNZy7nuN78B9Tu2NRoLuncw3o1mnzyc42ZG3VPLwKS",
  "key18": "5nMEW5TVCZQojmG7fe8ipPb3Ekjv156pKudbb7BgVtM45piaiVjhhKhdyNLZrNSL9jLb3QpNMYbi1cR1BpxGVXK4",
  "key19": "2XrejLrVZf1Uss7AWRWu1Q8pC5eJP8RRNbXvzsdg8NMREorwvReKiM5KvkkhARHtiVSCrmZyQbz4v1erYKXj1apZ",
  "key20": "28RN4VFoBPH7DF6fkZLxW1Wj6XHkXRcbLuNKKXVrFUNpW4zf9B18eJjzXbAkubGouKEeKrPYGC2uBmVNmvKhQztw",
  "key21": "2ZxsFfUUnKbcJtyiGdnnJWsLhQnsGsY2EVhG8wSpbzmHa8sMjVLH6QTTWFVpeHQqxphcZ6af7ExjxSf1HPpDDWhH",
  "key22": "PFWYctNnadFD5ZGoLcqCj5V2p28bEKCD7iUtD6SzZiWoiR8NbEFbjfX1GhQvtzBLDxHDBjaAm8W1DNgCizP8jvJ",
  "key23": "xbVGBYhEnjNTKMwb1CCfLp3XdAckSuYhCznuwpkBgSUoVbQw172c2MYtd2PRBZntvwBqwUz8cVzYheCYjhRYdJg",
  "key24": "35Na61WqJTqzGCS3P1mg2Gx5V23s6jcqedVpBJv6C4JhTsQ98xXRVctb12MU8RLvXqcxdrTwqkDEGoYtBsmgYTyP",
  "key25": "5Bf8z2Hww3JU7Sap6x1xfeLs1NYk9RWoPRJZ37rtDReP9NgUkZc1tozidyBqsYkk6nc16frHJt6masL6q1g2n4Uz",
  "key26": "62tQJCzu3hoNHdk7NNH7dncwg5guBtNVxoLt2Z4xj5eRVkpBfnSzRcGY65q4gmbVRJGhptiq6ejuU53HkFuboJ1w",
  "key27": "G79mT7KUsFKeKZr49qodnWBkCJjFKPyQAoD7xttFi6hUsvrJCgTU9d7KoqYxMPUh5eDrj66GuwtZKuM8bZtwp8t",
  "key28": "3ToPXXuYsyhxvvR7yh6dZkZ8B9LAo5S3o2LpCGeTe3HoG1ySUtAL5T17yKRxo59PSEUjZdGTc5QLTzSSL8uaXxQG",
  "key29": "5u9YhAGSSohMS4FixRSPLNyR7MDMZEe2QehmBDUsbMznz47jHhDLLWW3xNVkXTfV4KTTV9fZagNr9wHGxBgvJ32d",
  "key30": "5VRaB1x9mtSsCbAvaahNokoufv7k8oWUFkqGYZzqNpGqvLN4QbkdUWnwwXRqNJHUUC4WoUWrdgdLSiVYaZSPD3QB",
  "key31": "58AVnZbn8shWRWvTWwFSZZKNNMwKdJG4F4m9sqxGJABj4YXb6sb88nmem6mfqARQAPauSqhRusnXtX9gG9ecVuuo",
  "key32": "5LtTehCKQLGd1aRJoZUeeCBZ6oPpsTp4HB9QiViqZk6Pbv1RUfVXXQCwj5vf1KcjCJzZzXoLA8tRhRtvs3oszSKU",
  "key33": "2wWGUQYWXyoKGL7mZWZ8qgDu6dyPueGcxNfC6U89GxNzzgj7xscfxadTJEVQ6R7BP5hvAZqCYjvZb94nzE2rezJL",
  "key34": "3HAtV23x8uVABJkfeKMCGSEUGRgfAuFS6rJXqsT4WcFfeSXoKV9iuCxZQsSxPVfomemFYAsRebWLmZEj9DQMzs2v",
  "key35": "KFHVTqazvTvNC4CQ237hFZtWoY7vh2yMop4a4cpJRCHjwrxeq6a8MmuYkcj8E8ipWfrRnRiSVyFGb9wrpTCcxea",
  "key36": "3VQdDFWYrZVT2gDmikEZ5cCWjUB27n8oWQdE4DPR7Tr2ph8Mxd4R8oDoTGcyFJ7gCHrk7oA12UXtuxPFV4trFk8b",
  "key37": "54ALLwDDnKNevHv9cGyrSpVBVpTNuKhiuWFfi41SxBzrG3eqUYTZ25DCKQAcKHQrtQaj1ih6P8d5qpjKiV1PZsAi",
  "key38": "2jsWLCYMBcpPryzGTeZgrtu2H3AcbiiS1KpXGd5tbYMVesNTQu9z9w8F6UP3z4n6AyN5gx4jPpLo8bs8Rj1Shjc2",
  "key39": "269Q7dQc9mK2X66fvvUb19XUCXLP2KCJPZfGtWkBbArbiA2UUj2S6MCbu7DbNQbSuH4Qz2nPCZfesCEykdgKySLC",
  "key40": "3s84j5MTAoZFvpEZZE9cznZFb5g8RCkAXmt64a5hCKFmzr4LYMWZN6rUmjuYR3YJVH7ekyg6Uk75c96rCJqNc1Rj",
  "key41": "4wev8Qp87BVnDLn7Gcchrzo219xgq7KjqeDqeZ9pgGtdikQDmHGmABdDUPz79pQtNsyfxDugSXWNgEGCYe7VgEht",
  "key42": "53kCPKwrxJVhG6yXXvdG1QrM5ujPuJ6mDRXZ5mjisTt5Ss4zxkN1gLQjrTLfrxDjPW9q3mqNBWxTZz2F47twAPDv",
  "key43": "5z4e5VMr81Jw9hkiFKse8SUCPHWnngBgQUeMJjKF7pf4DbEAJ8ThzQPc7dFP7AWdx85ARh5yUs1tt8RVLLkyiE9q",
  "key44": "538rkrbaMHKfqrVyDzptCavqoXMJ9ymeZd3gVDgd8mEDzLssyWbrykmdfunHBq8jGe9KhGnsBFNwb28WAyhoa2Rg",
  "key45": "4ALrS5g4StLFruhBi6JwU2bymSAquT8KKr8FZu7ZdYa93KPsyZRcty5XcWgpExLCYgpd9Brj2kjmN5zff3FUKcTc",
  "key46": "2muSe8pbqxgFUjw2ADwHXW3hHnDifV8bMosopgM6oeXZcRm8nVwFB1weRuBa7e1aFRLtGypwcUkJnn2aa9QEQWSh",
  "key47": "5sT8yVZ5FQctnZeXmY9TqKRw7587cMGegryb51W96AnB42Yf3QxBjqyXJ1buafSZK4mKvMVMXQTT18akGY98AYdX",
  "key48": "4cDQQuPU2i77WhpWEqSw2eTtczZYNCMkbGXGkkoT1UuDADpfQ3Si37YxKmWz3ds5byoc5pnH8bkHKYQR1MaY4GHA",
  "key49": "4oQy9mCutRYTdHDQ1RPka9GDPHHvzXzkUu1iiGZKNy53EdQdcsfXLbJgv9MxPKdepYpchf4KutZ3Tq8BoMYDkhux"
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
