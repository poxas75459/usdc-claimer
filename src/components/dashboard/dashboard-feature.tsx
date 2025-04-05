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
    "4Bdc32sERujCzZebgNfhd9NJKrqDWrdZUsBej5efBd8q36PTZqHJncUiCJhp9M6zYvc7NPhgsM4mWi7xkzCoULGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x96pzfodtV9GU1BjqPFrvP7rn9uvw5mHvvhFkVVBvJEAH3VAf2JATrNuy2EBowdEuZNksYUxoPBFv7JpNAVYfMN",
  "key1": "4CjZRgYbceCroLYU7WwqXZG5YP543aHE8KTVAE2qrzq2LyupchrUjA1bfrxk8FxCx96Vdcrj816GWK2HctLsMKxt",
  "key2": "2ujWmVtycJThtyDyJUvHKZXmBhcbaSF1fZLNdwe3SxSJZ2yNoUi1yC9PHL6q58d9D8TWQoXRh9RfLDaMcthejvSW",
  "key3": "4UH3fZ3ovCh87ifnUFxysZPXjZ5fJktFLv3AdkW2JQM2g8PukPUU6mVtKSMSV1XCgTHR5KZDT6mg5qeQJPacALFF",
  "key4": "MqQgBqGHM5xYuxpDZUtY2DFgsUb6v4z5ymdxtneb8A3J89pyv6pimXYJuRF1r1DneVeaKQrgb11x4nTRwLFZYoK",
  "key5": "aBi9UWf6mks3Qo7VfzQAFp6UcZ9iFFTtMkCLboH8xemus9xrGJgEYbeMuq7F4A3ro24NPgsuELdKJowEVnC6Hyf",
  "key6": "3iyuphYp121crbx6124AFm8k3TWcnwS5op3ixTbNMwvdN5qfEsK7szk2mTCSoFjy49vPt3yzwP1Gjn9Y6gxN7Rx3",
  "key7": "4mnwmaezegeBxJL3JAFQAXipodbRixNRwn3wsRU5eapJfwSDf4tzyEKBjaWCNfALe6bYA9PWDthuMC6mpHFPBizn",
  "key8": "3MpkdNpvipH36dmVN3fvFTjUbeBWTFtRvm1PERiDEFm4844DioskRN5xaxnuCfLF77mgM8wyvjoEBYPUSaRkdmYM",
  "key9": "2HJvsiEWgWa1izVdw5ojzwgk32J7Qhusmgk2xpZmeXVYYZmNvZXVYXJZ2zzMbMZHknqzU1EVKS4CZU5xJ3xVj94B",
  "key10": "2tLPH7PV7AABeDpaCW6P52qkup5AgbyX6XZZSD7FvnSNYGe8jy3Vxo2qCeauDkCjDkEA3Rvc51D8TRN9TYFADLKC",
  "key11": "s7QcythB1RKVk4AX7QcLKZApVZe2tmVYd8HdHAvkioBFM3ZeUB8CNqcGWTbPSR1zQ5PHEe8brb72JLFrusQYPdQ",
  "key12": "2bQ9sMCNyMgkF49jd9pDsKQW3ZQMBieHq2j3SLipRLNeXg93KHykNEAHZuXYmjbsNRG7bjKoqYK74EDC7UoZVKqH",
  "key13": "4ipCnCvAdsJ1i2CTksSELpE7YEi2ctUwXk3orF3AgNhRVFw5ThmiLXjyEN9ji2z42qWsx7agjJvMp2xWMqFD8BvA",
  "key14": "yErC2LtQFVP7u2urQFzBCMt1CdZtmeypyFzvL4Qgk9u1CfyQkETx6tP3VvmeYRW53AT4eYwSMBq7wjJo2wjr2HD",
  "key15": "57uix35XVGtjYEKquJy5eCHAdJugyaTmnJ47qz8PgUmKCqVJhuR41LYSbBdrmzCQF2aay6AdhXCsKvrSKQuGcXey",
  "key16": "4oQMMBzN3169wAJJ5rHKLsYpYZzPfbv1J97DFBC38HGJ73iVAYMEFRcYzuXkjSmctBM7yNSAhebzDNs1CXa4xpGx",
  "key17": "4upkrL54zK7e5rYZYctzosUfKK8ozRZf6ch6CUnWuViXXcujuPcktXHpy7eA8XBDtbxs1sKC8KgBAWxqG5BRvUJc",
  "key18": "66Y5vmh8WPDRMFdcofrrbHHaEWrgNn7EhoYaA7ooiGnPjjFgNvBrbxM4mYxWxE9x1rjzAVxXimmJRmPicamTYMsM",
  "key19": "24fa5jc2z5uEGZTW7mLcPXzGMBeHQF9oYS822NtrhKPHSDEpvkyvXG2ZoJEERtpaCqyRqj6vpPokBFQ5xDMvtUQU",
  "key20": "3Fs1kNGtxKs6ME5Ze8dx9uLqeszVoyJbBShgaofhBGiy8ZV4vXsHK4AYdpKfyLRnpk2wqWPVfvKUtozT1YEaWMq9",
  "key21": "4uzNxEcVMBhzAPeefeAMrcWGCi1uJ3oqb1gyJUBtwcha4b1z1HH8LN2HXcKN8eXSw64bZHCZKMUi8WF5ALbtvaCb",
  "key22": "4uyW1TiQNQ7QCDErAcAevABKSZsDkYSXyxsm4qu82GDM1rMJbxgaPKeQQ9ab9RWKRAEfy3h48XnCxphMzGW3sVdY",
  "key23": "4cEVxUzRQ5G52n2db1hKd2BzwT6Kv1YEPbQwxVVmFq5oEng6PAYj21UenAdGmY83nTpFbx6PMEaeiiSyLPPHSbrp",
  "key24": "6GDfmGxxG3B6w13pfRKUMotonX2gmXz5o9Kh2JSEnW771BJPWH9fa5LTFyYwUweWTwtdZYZoWwtqTPVf7zgxGGG",
  "key25": "5ZZ3zXJnuyiNPtckcr5XnHZyBgoKWUTPCFxwoMFjyKgwC4DgZg4TC6PkNE3utZhQAej6bMTQsgDAmiD5cZ8xnXkW",
  "key26": "5eLBHE3Dr2YkL5VjdsCNeP7Dy9u8YwL78EzHtEoxZgHs9ENRU9ghjhn9vwaGnjCsXfWWpgrSWxpcYGw6ou3sRsgt",
  "key27": "23WTJKAschmqahzqip7hgEbgPGteTvYWyJP5nLqM6Zvj5ascbnZNZ1UWstxLsELMg8s4jsYShbUbd7yBDBiCt6GD",
  "key28": "374Fc4YfonxcL36RAyytFkTTc6qij6arDJGt558CBoKihsboJCXVYjSauzb3m1vK3upbUDygKCEB77XJuj5ZW2rG",
  "key29": "KM1HBRNcECgQ4Kc4SciwqoSWEN3RvRCnDA31HBtpWnydJcKnhnGK24EN9PbAXpApfMDwDc2vmYkDfcbdiJKkMmP",
  "key30": "4Y4dNTE3ayUShX1wMW39fGPAF95ziYWTy5CtTPqwmykNy2CA32WudL628UPq85M9qGGiXTSTtQxTq2k9MPnAqndy",
  "key31": "9QG7PnbHdmi9C21qwrR9VWY4n324H87dVrWRbKvwiEJu8wpvjcfeo4MEcKrjBDWuY22Cpvak2puyk17hV8JUuRg",
  "key32": "2icM6S7oCuHHU6rBV4S5nctggaShWeRpVigfiixd3sy3JTWS72Pb4fUuGBcbgrKSJfGLaTWcndrbHxutpf6k3WtC",
  "key33": "V3uXSNLM7xAYxHCtuTk5RzsaLc77DPt7CkFmamWMveA4wVjW6H54MVqcjg27H3cEiyp7FQLg1WEtTTM4pJP9TeY"
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
