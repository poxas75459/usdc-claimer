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
    "5cti5N5jBjuHB9iPFoLixf6jLryDpUa59Lou7zX4PZaTSuMwAMBNgDevQGDwq5tpK7BnpXNA4CFPbYx5vYUYR7vN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aFjYsJimdnbRwuh5MYyNoMLpKFcNvktrg5VccmeJQ1ugZnZsLyNFoGrafUQgLF79aHmx6SeKvFucZBmeE4upBRg",
  "key1": "3St9oHRQ4NZjri8P816J23c446YDqmM7M3H6gKaYXq2rEArEyaVKRpxqNXY9YXKbPB2NyhE5xyU13JiNB1doer2t",
  "key2": "U2ZMrn7cwR5JnPH1bez8fmwAY4EPMLAR6enPAKWtZcgwUJkcQCXJZqw5nUWPt7sx3RB6Z1x4nSvMM4epGHjVBy9",
  "key3": "2zUgtyFsQfPupWRropUt3wJNVc1y4tvkCDTP1An4DiLoTCAMLtdYpoMKjHfdhhWMryMRaTw4n3EW9wGC7eCRBtpw",
  "key4": "3evCTCSfexbsYujufssrpBS1kAfHtc4QwFQ4oCHgaqByEpy6eg2nragBAdrK1AyRKS9v5WvNGNiA8ebqFSrYDxRt",
  "key5": "5Lokh7mb639Vf9RPLkgBqFzWfe7Vu3JPmHsPVLxZwDN5DAXHN4s1PubxxFqLDqsdsiRoptswj5JVZdWSdeA7HZqm",
  "key6": "4x9x1kMGU3Bpd9xv8UgtPy43NWza2D7aRro7oiAJm5gqgh8FqeH4yozBBrF2H7d4SRT7kpAAMXDZYVcecTZVuqgP",
  "key7": "5ERe69WwCxkCe5CgBjPgwH2rFJ4CgiVwcS42SC8mRxcCj12mgt5CjLBS2DkvN18fTkunBAfJhZCmAzAaR1ws3zX1",
  "key8": "4XpYVXdmEjwePD3UTJXVMAdgmAYEBNzcKkgjuQkwHXuZEJagwrf7LYjbKxo7Cpg3e5CuHyUr2shpD1nETX8oBzeg",
  "key9": "2o64tfJz9CRixUhDJEQJ5E6gekt3F75JHiRojdzitDDeFshHZMfvwR1joMQ5WAo8Q5EB2L9xN7cZoJm1LhQAao1P",
  "key10": "QLxq6Asr1QUXEtgdWqthy132ecbFj4BBp1X2nf83rXLVmsJeXpMS4qXtipKxn2ahKMh3WjKbLZfBu5dpvK97qPu",
  "key11": "5RbEpd32MQh7bPHN5B13qHvfLk8LkGYSeKcxHKABEWHg8V4RdpbtttHH1rAcjjxvB3n2ifc3jRza3tLS6hpKKJ8x",
  "key12": "3mj4AAAvbYxqJyzyMGKc919mX8JHj9MLWde2d5dsBzaKmSgU7LCeSYMF2aC3G8LwsVKZ5Y5A9ho1yfY47fB5Qgpu",
  "key13": "2mJk6u8uB5Ueo9d8AbXaeQxMz4y3r8vmWmwqZa1xaaVahaQ8He1PU2YaGdmdNxa7UPGJ6Wpn1HAGU7JxWmGqpQzW",
  "key14": "4yJ2hpE9G3c5k5U5NmzMmAuFQRY9mdiZCgEcrtNDa2X8iEh4CtmNK8MW6DiFos6s1To3p7LWCm8EnWRjAS1e83Gp",
  "key15": "23NJHmP2ax2xd1AmQDYiWn8en5bSMQCy2h9hhe4geDpMjsuqrXEnCHjqL4vFm1wwqf4HvkAeN5E96kfo2mraFyVC",
  "key16": "HBLh3sbVhdqpQwoi9WucjM4XueubUFegvsHbt7Y8z1PRiFBiRAunuz1pPEWCPuznvD7WFhyaKYPoQ2J6aszzLfq",
  "key17": "5WHmLKcHoYEvkwFcvsW4KPL1PnwMTuyb82UuGFN9PR1E2vrjs461tTr6ZDHB2HvWPHbzvKdjXmK8WBNfsq9dzvDH",
  "key18": "5CaKWCrLPZQdt3sAHZNMHC6JomA6oqKQoyUCmgXsSckknntBn9mze9ctqGPjpA8LVAhQZPxfxWJXTYt6KVDd1DSv",
  "key19": "NxmGMbRLtx8g3qeoG2imhZYG3uKxjaNonQxuutLgC7QoejiZDLyovnaix3pXnX7boqvxAdfaS84nzSvfYdeL1FB",
  "key20": "345PkjL7nkpwpNP9kvDVuBaNWA6wcsGqNGhkjuVU4xTVaxr5Lhg136GpFqDYW49kLYU7Sn8tvQuKVcuzTwqJMdSp",
  "key21": "ejkAhxyd2XWELXZDDGXhQuGFGjDUijzA1kPDZidQmiV8BgEqeJ6TZP5n76U3TWmZLJzyvkJmWwETnK7yfHTCfj5",
  "key22": "5UHMVA5tmBZYUtGqc9zZFgccXTKScBi1mxyqX6xjVFzNFaQ8AMqaq8LHUwfJXYeymqWmCCRhBr4Q5kQ8VmuCfHw9",
  "key23": "axYTurxwSEUK822YCZ78R8bm32uu4ryxoA3qY82AvvbyqZetfWgRzFJmAfsphsdoj19VjQw9P3KPyP9esxFEGmJ",
  "key24": "42Tjb95ThnsTSPm6aPDnixvb7VvdTmSomziQFsWm5BqwSo3E5gQekB5LKuPZah5o6T141YwkB2kqPycGEmGBPJ1f",
  "key25": "3iZJXNuJ44K3WR56VFYk11ckq9xeTfp3zwi7cfSjT4fvVY57R7rbN5TzjKtFybfdK9RxEfSooRqWjXpeWpokHujE",
  "key26": "2e5hKh4EucDobgakWtCpA55jfhiMUj7qCRPVjWP6B59cAq1yeWMv1vtcYFZ9UTEouDiRsVm78EUcixwJeEadD4aV",
  "key27": "5DW4SU3hkfmveCsTwmCeG6c4gMb8fYp4m9EU2QmbKU9H9UcVYKZsvxrW4XAuPiqdUz9Sea9wffxjSHxiaHKq91z",
  "key28": "4tvA4nYPiE6XzZfbYkpGayLq1EQX8dmodMHk1t8wsbd9astA8WoNGKV54hV9wPkj9CbJb8AaqNfeYKtRcawqp4TC",
  "key29": "4MxAJrpZAEt37fhfbpXQzbzDZofKphpz4bxjAanYqiPeMtqzUjUhrARoDECuxgv73W4L91Yco8sGx1ZPZLAz24Xo",
  "key30": "2QWZUQm6s6d3uzjvTd3Vy91XZGmV2A4E7J7NFgxM5JT32kjZqK6qdauJQZkAoTc2ZjPER8DvXSBuvBQgqBmiSGgK"
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
