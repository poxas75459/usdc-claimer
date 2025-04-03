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
    "5e55PMYTzK2odzpqnnRJ9H2BrpCB5QpCRZn4yspR4KPsc2HGYRNvjG9GabUUqxE8cxNJwzoxnfuLH67k9CTHu9M3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZtePVtwjexEvyqY8dQKaVCEchEnjHWXuQ7KscQfqNjBS96wXfv4g6FTM1a9ShvvF8TPWnXtvLUpxutsBf3FBFar",
  "key1": "5D3voywnR5pcXYj8tMAWKw2yyXL8TnrNmFH4i4VRnmyRruzqNwYuEJtkUJNcHK7TMip8KYZx8eexLoid8ZPz6G6a",
  "key2": "3gEKYYeLeTe6ZcnF6dJMz8ekhXmenypn5VkhXv8vNqktZX5cDDFJEiCCwvBiNDhRhY4A5CGqZPi5kWe3ZgfmsRB6",
  "key3": "26KCrAgims6fmrF3xbhXXqo61GuZxCUJ4nbnkUqpTREZmFbCLa6Kf1XAfFWszXL4oes31Lwnr65FfZPF7D71vRXB",
  "key4": "4muQScBf9VgWc44eM9VqBxewTUdXAtj6uWRMU2x3qR75yQADNL1naejkFNzKP3y23PkmP5TYX9CEeLVr5kMrHNua",
  "key5": "4tYR96hyzdqG6c2PR8QEJhm228CcXNsFNM24ovtP42EjyhCgt1swrmnvmCe15MnLfQoV6qHsv2r9f1aipfxcuxpF",
  "key6": "25QjRgMvEnHKtrNSNYaZatm8tmZYELBWmqFuyXc6xpju4PfBh3GojDDNkCzD8erAebvcKXF2ZfjRvkxT4cEo94N2",
  "key7": "53Tb6MUqvunXyk1TMSeyQgLhWF5wgcN3nuHDk6dXKptkdA6Y9sLdcUHuqA8jTnGrT6b9XKt9H4UJsQdWrWBaZnrq",
  "key8": "qPVL12tGbm9HVXMB9M48JfpyhPRpDtfmWm8gAHdYfacnQ8swVu5A9Qx7Zc6djhJyG7MXbbHgdMgHPtuv5tyjPHd",
  "key9": "3fsTZYvTbtaoQ71iReh9NKwXVtY5vK73XgCdsAeU1jCAtLG6VvNpfVA8QsFX1UEceknn2BWDAoXHRyybFEdsMB64",
  "key10": "3uNFNRzyLv2vwM8Z12TLxmTrU1ZYVpd65vXNJ3ht3h4ng4DsW2CqV1LvuK472AAVAYA4ZrtcMiRn5GPvgoedxXDD",
  "key11": "3ggKADgsEodpTuKvkVHEXhCiLjnn8Pt8iyue5Lpab8TgmDypYqysDDbWGwd9UwsGksvtWLg6CBAN88CsdgkprQ6Z",
  "key12": "435X7R84WChyDZq3tk4D9w4Euu6bpG6XhMjzyvbnRQ7J9B1Pi1omckFasJexz98Mkp9ztenq3KE1k1RqHCbyX4a7",
  "key13": "5wSn6uFmNbdWZ8mTDB8998KTyXmX9SiMo86SbQum9a2gznQ2jKLVjhcWGP7pWX9PYNxs88NbHk2mxWNk5kAyrEyW",
  "key14": "62AEuFkUs6m3c5iAzfq5pPU525aTSctXkKSRfXnD4jP95YkaaLqS4VH6uz84tLNrtaKEwn5Mc35DrUMMkf73HQUj",
  "key15": "4VEgHaESLrNSUUQFfGad4XkRG8ehheRSHx1yFWE8yNYz2vK3vACuxugqfFNMft6TugKk7MnxPui17xSBrf595nga",
  "key16": "3czmd4pzdUT5iymXgABna6L8TCZVFhkzH2yRtJ6TjYZu7tGQQFxPCYo7LuwQsLbnLqfS9GhHjA4U1u5cDLm3uuEw",
  "key17": "XzMQfKi4h2C3nyQHK8mhWh6v8B3yvNJ3vr5FstCVSKN9YRSwPyZ6JkeVX1RRDrqETk8Xx8PA79BV5SadkEFauYh",
  "key18": "4XdNAZTSVYcVaaD7XSVtPuhxsEm1XroeQrLhNBedYqvj7Yefi6VTpxWULwUE27t6SMxg2cY2s6j1gFTLiiKcGjsj",
  "key19": "2DQ5ksELr1txCkx3no1L5sEHtrHyu1JJ2b1vxGsgVwE1d18ZDymozSLZyNZqdy2NRn8sqyrjwy4zZCgZRmFrVfVz",
  "key20": "38vDQD7UWUuES2aBSfDdXxdxNd8hNe1FitxgM9hsFcq55M9xi1MzCiFgQQqxurGais9JJXEopUzUNmNR2UMN6Vpo",
  "key21": "4C4sJVidBj43dEWTS2nW1kcVD7435S6UhGmeFTdEQxxRiw1paXmN9xZcsC1rdSQhk5os5BL8pM2YCJyDbVf2rN11",
  "key22": "2XoJT6ZbDioWuXqQpxkc5Q9Ht2sSi1eDBEbkz2vkbpHG3ghKRivyjQMhYcmbqbfDmWjxVSQjG8FWmdW6Yge2Naif",
  "key23": "BgfXXDbfKzatTq59tbZzGqjwm6sVcQyTHGAPSrnzFeob4CPEXesQ1YSkMHE9JVdXPSuSmKKgcXacBiHkUVdB43X",
  "key24": "4rCrYHz5KNJ6behBKxodwPFfmCr65jQFPbaWwtBsPHAXCLWuFrE27tfMwe7Nvywvbk8njHZFoZHVzutqfQKt7dFT",
  "key25": "NGiha2wTLxCKmGWmQKK4BWDcHeqBEB58hG9K2CXisafzLXzdEtm7Meh2MFUk2QxEjke67NXgEwMVCtDGvhJN4qP",
  "key26": "2GCLjYL1MgpC6Czzy6GsZit88wPcuBkr58THDP2wHrisfV4WKQ7FjZytdVbR65FRnd3Co8M3hniAKxPoiEwY2Qsx"
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
