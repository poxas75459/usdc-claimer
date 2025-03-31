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
    "3BRb3uwDu1g8LtCbX8NyHJbCc9knoe2pwjcThYgirhVXkShg8NyCXkuVjtEJ1phQVGRFMqjH4kaZb2sZrAt6wmEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uD8iqiQvX2qM3a2HHrhyTVcEVy18MzNevwtdmp771MT6dnQwSb1Tb4oE57K75QRNiWBZgddPdp4myKUkgnjYqtG",
  "key1": "352ukeNAT5nJEyjUQD7yTWLFqeoFwGi16uMHesqLqkeN3nF3NcxHqxAob3MRKTXphWiuwExPbgTQvaFN6wmpPrJK",
  "key2": "BqtJBFH3jNE9eECYKq8dk9Jhfruj5F1zDbo8YazChiRpAwDJwa2qGyu6wiBFdvBhc7PpGJGWZAbJNgRwvD1uCz3",
  "key3": "5cWBNagiDpxPsM6nAkkXt1VHmuCt2KYPtWGUb1HoBaNSqGnJSEU4dymug4pKCGVxKXPsTmvLyE7PjS3YaqmJWPpa",
  "key4": "4pUvtYFmGi8fVDgB2QFsrMxJ6BtadvoGVohW9s9sEW1Sn77cYficpZQno9sEuScRoz4kwnApCKF6Cw2QCgxQNyVP",
  "key5": "24c1wW4GkcZ3VYpzCEJp8NQiXvHUjyhcfvjMs3baCGXaZTpeSeVbZ1mEZdAiaMpN13UnMMgedvXwBorcxLvuu2ay",
  "key6": "24VEQkjkxQvgGp4mJYEMMX4KdCqra2fdNofjPs1fRQ9Wj97iDyPct2RboZSnxTs5UeyP1bxG2nEoLMSeoRnXJuTV",
  "key7": "4qoT1Ba4LHoPJ7av3DPMn2KBsg1RM1vRGizF9EnrsALzP63ejTPHneVig96hopEakJd5hQ3oFunjj1MNSWcwE8Tn",
  "key8": "3vsujUGq2oPqej7zSq7pPrv1DmuGJntgzfonSCbfQkKuiYtnfe1QDtWpC1idVv7F4psdpPtbwQaXdoVsx1AMKv3B",
  "key9": "4hkB9NfWSXhBrR36wkrYGHgVbozDjkZbGiZFbygm6sWc3n5PsFQ2LZNGfQPJcYpcSyzsNs8RTEeHhkdWiw1rhcmu",
  "key10": "62iABbZqvPKztw7jbLHMEi1tAAEn2maAG57uBHvhusigXBPkrU3EVHPtszNYkxRGfKqtj9kRYeWVz3bFDEVqUPCU",
  "key11": "2fL8rYDi3FQuzet8drZBdzxejU8aUE1ZQQB5KVnqPwNuiLeytKEkMpia97ZYwQVaTzYkXMKYDydCxnbZqwNenKXX",
  "key12": "2arw2CdK71oquFzkUGCrf1wLLXaPwWeeQFskHqgMNH9sJiGmghDYFoEabzygjUsABRFHHL8rLe4fhFfBzg7iA2L",
  "key13": "2tU6UTLtQLiCmnrPvnDZ7tHwdb4ZLdi8tW1qspuyfCor4kkuYDvAU5oCKmsLFicdBzHccVgP6kCfdGHfwpFt1RCi",
  "key14": "3xR8583uQFMUVUSgZrq9Ze2utrx3mfS9oNDPMn84De61gkdFGQCyNZFVo1WDaTH4nXXmTjRUGiXArvT6rFw4Vtu6",
  "key15": "7qo7UB4CdX3YFxSJf8zjwVSTMwiJxFVzeHdnqC8kqV38CktczQGKGrjEXffWntYMzQHMF3pMJopFNQgVTouBfij",
  "key16": "whNCSfqEVzsP32Zqv1YQtxtTVjHH2qm4CetgzvhuWNXej7P8GTr7SVdYxR9RddK5LYupKzPeQvszXkiPd2eV9ki",
  "key17": "44daiNv53Gwqs6VXMW9qcvNcBPBarQW6EdBtrzscM4o4LsJzMu49x9JSeWXk7Hwx3WEmPqP7zUsNxQ8sNYPtLRqf",
  "key18": "2A9hUM4HDXWdpCtGS4yzRT4Nnrhz4xFbiQyMvZUmxWUMC1SqzZmEe1JSadkpWKkz6Nxwt3xNgDbpLWuC26EiBMDn",
  "key19": "54jJRdsJKnePMUz4XEPbm2sv7PYYyajKxtHfx7mVUZ8hFfGs8hE4nsrn7u5wPgiK8vdo2bRKbHqX7d5Gcb4adnrr",
  "key20": "5yHr79BUJxvyZMeDresvWe7RAw3EtZSYpcV5FRpuwgwuiMgarNQPQnip5GCEmjcyRRkYs55brbCH9wQfMGue1Wa6",
  "key21": "vzA4PUjKzJfWfHBpyFNvbAsMTMCv1Mu1Svysi72mLjZMZFJzQbuC6x5jUeoSrfhitoUP5VJs6QyH1DnYVuRAdAk",
  "key22": "3VQm7EkiLrJTCQHAWWHZLAVMMsCQfBUAoEew6ArM1ZxQMy3U3TsjBcHTaFtAe6bktQS5AiPqVeFW4MANc739AzUT",
  "key23": "5GxAvDTix5kkJNZCDKMr2W5RmzUN8fmz9soVXBSAUZXD9YgDoFwK6FArPCcXUqF16uz8XAspDN7eaorRWsSszCbx",
  "key24": "2WY6U76Beo5cDCW25GFfZekpEea43drVN1SMnxFAmuyvk5B7VAFsM3on6sUbFUms9MV675ikyaqXdev5jUTTfiq7",
  "key25": "t5zfUZfsYDtiGeV6wep3GWbYhEr3wLCuHidDddgrtLLoJLCY5PDnXzZ1kuXBnDmTijKeGx7hxPBDsWkghqnfKVh",
  "key26": "3XzEJ8129QiUQZ1q7LFV2a7sSxVsu1xjXNHr5GuZibPZicq2C61VobA2k26L9dPoApGFoaDmfzSQ6bdUoeA9ufzh",
  "key27": "4tQLmTsBaNHWNwioA36hppagEiJgz3FSMU7ykyKqQ1p8wg2vmq1pa64kcTdcYXw7xvBUAg4Svzo9ngEZBxVVNCwp",
  "key28": "63yBZD2XuWjU1cRra3hV6zSfx1HVwxQ9SZFThpetTqTu5Scw2WBT4efir1GUYjqPZFmKaekFbmWvHf7rJYp3dfxc",
  "key29": "512JJyMjwzguRydkCiG2k1XZS2bWXzga1eZApPiY7sNpgfrnH3KjqF7985djewiwBLzKrw8qVb81aABhjMrZmnV",
  "key30": "591EPpiCkzkFzkLCdGjjU8Zs9d6HGaMgCk4UCuHkTTFpuFcw4xB3997THbXXRJWgQwaLrbDxTebKDXwUUuWboEiD",
  "key31": "5q3HreQBd67Xo2K2e67zgTkexb2N6ss4W6hvgi2GhJr8Q9tbYfw529ojRjPGzoKds4zFMpANVxv57ZWruBkYUxz9",
  "key32": "4Wp8pt2e9LRKMkfhnryhJW1XQBKrkHBPnkPpmA6LfG6GpqATo2LePJWmdZF9uxj8ShM9ALXf8mKHsyK3sifD77dF",
  "key33": "3Wja5CVSkMcvJ2kUXgypthfZSnTUqtWRUHBv87SVbdHze1CyThvy2bkZLxvtsRG987g2HRdNgcucbNxXKEABdjKS"
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
