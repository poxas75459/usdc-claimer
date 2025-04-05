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
    "b4SJuzcNAf8RW1CqsCtmRNvVUfCj3xgxAYg3BSYTMTHgkKhhHTRBetes5DeK7Z6ibkAyDV6zz7VePNtyKR9r7Fy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YdRz5HdSycDmuoigraf7RAPDk2HpKMzNvVbytRzi8aLGXCDfCVCHtXukvGyKKiUxGTcvkZaMPkb5p6P8MW8hgnb",
  "key1": "WWTyysvpGDdv1op8Z4mB3cmPfT1YX2WspuvYgn4sZN5JnKYytqgg3Uf9A1dVcjqNAh7JLWYHrKvBCkswSabqhdU",
  "key2": "2y7R3NBRtZg2jcSkBLYsDiRYh6frHYfR7nokThUwaX8A5Li4zc7RLJayKVtnfBDAypAaq7gFTJgYH4sX7zsYmeuF",
  "key3": "65nwm36CRFhwDGArdvFkkBhqvt9746DbcVjdZsobF5RCkv92gM9bmnadMwfbS4aHUZm3sgSroe2CND1hF3ykEj3a",
  "key4": "5op5CA2U87G7Z9Xd1AojbceGCTAzw3g6dnHjTpQZvp93Xh6oZJNaJmXTZW5izQpc3q76Ho2R4mJzS8xgi6Wbxs28",
  "key5": "4QWNv8j5Un4xkCQf6ekAbChrU5XCnwjtdP23BSTeGLP7wJgoF3J6vuKYMfYjMSEecQo1aquSLKafsbe7MABCynxS",
  "key6": "3GHeWaHCEqQA9kAbf64FVLsJJEhqrt5LZ2qf2Hm8KXVRcp1dTrnJUrNnBzFRkNhkyf21xe1MxJTzMfZwm5tx3yEk",
  "key7": "2s2qbbqjfs4n92wDEipHJYD4meSrUU5ZwzEtHF7nyZN2d1aBWcHhbrYvy7wmmjmBZWNxBpGghtCy4eCSfmsVRx1B",
  "key8": "2gCbK7eFNNGooo4qrsVzt5HJ1NixRk32FrirYtRnDnE8gaAerUatGLmn43puf6cegzxFpC9kEcMvYRg5MCojki9a",
  "key9": "5gT2t4H9oR7NroDRfjqF5qxumRRT394M45BVXk8a9LEWdbGHauCtrfBaFKD1vy4mo4wiQap62J611SsE8oLuG1Xv",
  "key10": "2CG9gPgQJREQ1Yqu2GYEdZMJfp3u3erxZpzFNqFGFSWT7o5Kjc6w2HRAE69H9zzpBZutSFSUXorn6uW6JjhRg3FW",
  "key11": "5dECf1TY8u9VJAg53ibQEiFA3D8Kgih7XhXZhVK1a2dvTEtKUR31eWCSpqsX97XG8PNjk5eJ82A6ZMagBuGCXccM",
  "key12": "2XjVyYuFz3roY4iExZ3qCZF3FcPmivDi9kH1mrYhpHmb4HBsk48i2sv8RAvZhHtvXzxy2n8nxYy3hJGH96EhHTKY",
  "key13": "3qfm1fd14tbnZg8teK91KepEydWR4w5pbxKcqeZ4XK5i6YTEyFTendrSHEwRCVAvTvWcNQLzLxWGMvPEjygXrhpK",
  "key14": "38QfVxJB2MpTzUKo73nQnm6ndaTKNVEoPHuyETwHRxKJXwGcRQ2u4SUWGczruXyCWbCarmS7Z5j32ZzUVtoyTGLQ",
  "key15": "5U6t6MdrcDa4ErVnJKRQfSKAJB3PLtJA3uzEhw1ZkKi3BDTPUeac6tQVTrbx6Xq8hiLFFcuG1Z3wq2SiBVUAAzr5",
  "key16": "35qmZEPyLwht9fzZwxT3P8MgWVKLnm9f11UAHV6n7RGYRk9ZrMpDj8Z72MQdDq4Agb1NvqRpxrfbZbYoQPERi2gu",
  "key17": "3p8DFScDKRpVX64saE4Qd41NLW2vuCjF8zuYBbKrrLhsfsYizULEcvTrVuBf2Czksij6PG7k4q2FhDHCtVsiCoYc",
  "key18": "9MY11gUiizNaqdpngpcDqqb6iHxyWMf8zvDiUWff4BifS67KAjJQHY6U4vXw3iuwpdNo98GtNgZ7EQkMkwWHvmv",
  "key19": "aqx2KYcfeRZksVTzasn5FyuUxLFFuYA6LsdtR9dsVmydtvgiPvY6nQdTyggm6hjxZBjArrdsf3B5LDCfeR8Z2vz",
  "key20": "4kSLmCYuN4tnGUzKsDK8GtpNapWVVzbkvbjUiauL36X3XdRKPMY69NbSDoxixXx2RrYUsZCfCWzB615FNQnQfcAa",
  "key21": "2JxqGNoUxFEbbQQ5UzFLw8wbRrsugfLwNH2yDZaTyHxAYd7g2G18qcQFewzgHZN5VXSeSEJcC3ne56Lm7nNfbeCw",
  "key22": "5LEj8N3M3rGw9d1ayidYngC7t4zzNSrp5gjDVBDjWiLqgTxwAG5MNw9JafyGR2w4dUSPiA2GiuLvcfhZLz8435iU",
  "key23": "3h3C7BWASSxzRwPD98qm1mAs76xikBc2Vg9cXSMYQqA5AJYWHuAe5z3PUMwN4JeifwpZmg5LR4uzSLtexRXwXNq6",
  "key24": "54onZVxkv513qbk9o8aoSYB1DaKLKzvgmNtYNe6D8YWyodGfndAcZNfV5Pb9Myf2PvZPGL6EmAiC4h14tGQpnMJZ",
  "key25": "5FTAwoz1nMG6EQtsPnRgagNnMRhgWuZADW2r7yEt5vmU3vedRdMZUtDMqpYmR68cyLckpCAVZNALRiCfQYoeXUjt",
  "key26": "36zXCnXoxLURK3tjJ6hAQHM5t4E6N3ZuroNyJ1gppiwZCVRnf1X3WsKGFcMnCJ1zFFLrKgtDnE8pNYMzfLoBAjCN",
  "key27": "5Dn4qzsKtjTR648WZM9XajuESGqhp4MGst9K3PDHLvF7t1cdnvaupCHKMNRaSG5jYcALCF6KYyuoX94okXqWcbZV",
  "key28": "5gAHnt86YyYkaBc5SvCEnjyKKdD4uafpuRcToRrYxfSEsjJjp62R8npUNyeeAVJhF33R5XeTmczwKiEtqkDxNe6j",
  "key29": "23seS4dWUSJ2Lz2AhEGLXuZBuiNh2Pu2JutZL6cCAf5p4NECfP1LauximH6xJwiDjdcqWANy5q6badRLW1uBiYij",
  "key30": "NjZkocsYTvynDqgxF3o7EH1x9coPSPp5FXCZemvvBKnGCBKUtuApsJUKAyrzsGsB3Q3jwURyZPu6m3QC2MYKC1f",
  "key31": "4NhFTQC77A57F1exT88wASjr6PV9x5pavjzhXNiz5gWYjVpYFWnSpT2r5iWSGttStcrphjzgxQpyG89kobHdF1VJ",
  "key32": "jNFBr284VCv5Y5xyS3NhATRzWdy3qRcgbssdLFU4ZP7JU2muhApTJWwTCaskAXCh4wMY48mBhfFgNrMsPEeGeda",
  "key33": "KNEJmH1i2isKXh6tJBE8oLwWLMiAiHi6NX3sVb22joZ9BLB5ZprQjaiNhXUt6oVeY8mNk4wyz57UGgZLCE6DaZN"
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
