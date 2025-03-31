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
    "58o7bp7aQq5cxLwB4N4XStmSjQHyRodgTdS89uz6XDM27Qo4Jrb8xHTGJPmVeMKBf7efPa2WqvzHuCTztmY9nBkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33YCfr128hPwKA2X3P3fmt4qap42BeYjwjQD5ygpqF7XDxwuhszcLMs5ZH7xt9MM54i5roqAG8mjvX7hTVXQ4JxJ",
  "key1": "4bCbcqEsnx7rnoaHZJi9PUcWXTHq1WbQ9V3ccfiaGdjwvcGFhJVFhGpPQ5MHFDjWqNNwMTTG3gxTMKQDwsZwom7R",
  "key2": "5pJXZkmkzmGd3vTtiPzE56sXf4c2n6EARPRBwNFqLtd8PUMYhLofiuqhF7LhP3y5trfFry6SEaqVsbQKhQQA3Amn",
  "key3": "M3fEmogzd8ZVnSgBVN8u5px4gu2x3XYajFW5j5xdYfYEFURGbKZnZ6WBGLNZEYpWH3G8TTo9xdA1nVSJnAyXZgS",
  "key4": "2RtnDGYyKjmFwZv25S6P2fz38gXJumykxvtqo4MLPpQ1n1vmaVHsuxhvjAmgwSe2wmdwmWaaJKdrvqM4mJnNLh7R",
  "key5": "2ohF3zTtDrMwKu1pKrcHbXh7EUWNweyoz6JvY3evY2xh8ZQYnMnWUHDCM92bFW7npfuEDsPdzWfNACGWMxJLR4fp",
  "key6": "bQgzgcxQFGXfpoMboZFkdaMphPaNU7tL4hGH8Tjnaxez99sjQ2tr6bhDUeYem3HFFbqpryt9msGEFHz6hVwa2FE",
  "key7": "4PuQAnkjnciw6QfKUWntUdN62C1PKH2akQ3dv2hpvr6aw66z1krUHcgAwZYKDFYHi9u4BiDgFqhFkeZS8rikHGEK",
  "key8": "2uWnPBZtNdwwFVk2nvn9ouuMJDE5guArR2DktPyky8J1cQF1mrVRexPetLsDBPxUt7afPXBK3RvpSUMXcoduXNFB",
  "key9": "AQYmPTNtQNnmUfQ1s9n3H3H6p6UyoQJH29qq3Z534gvSFhBfepReHWxZNCvr7XaHaNoDy3CEJYCsWArXoBuLnhS",
  "key10": "6546JgRSPLoGSStq93ec3Tt5XjLVSZCm2Sg4Goyu8wexZ32aFSfPHPt7j4PV2uJkLSrNuJS1ZEbBKX4aN8MyamZh",
  "key11": "27swuaGKQtq2gn1eLidVDn2BEBCe2Pshw6usbsWwjyLjhdFVGSWhDUgPvfAEPjZAwGURD6W179N2rjdhHbBgqwyy",
  "key12": "4VTniwPzqjdfRNGpczzKN1iwjE1Aj2tA4tbgteXj6QeFZNHDmE67rfZJ9heTyUQtSN2C8oB7s3ojyuXAWugCmU1S",
  "key13": "47bqu6SEfC2MuuVwEaB6BTqrAdSMAws3dUBaFcdcjaG4dZ7RDsk8yUQ92EMeM8WRwmAGShegQ1x9uYDFXASDhRKd",
  "key14": "4t7dhVtRQzgGwbL4QcbdK8Amdr2DpubV6nnZbdYsc6HgsELRFjMyV8H1s6UuXtqdhhtZScAX2XbfKNHd7cDDSK8b",
  "key15": "3eQHFYfqraXhJTY1vqGkRwMtNvidZgN4WCfex1FeSTPLSNLZPQ4TY3ksJ1YmAq5ijxWuPiyLmaDBfHPBDtvGewxo",
  "key16": "5V7im2hx6k8UQLuNBMqnF8LEfpbNuPRJLvt4okeSvLkkNFixWdaxpnrYeM9MHaA74Gm5n3jvfcsv9deBYyuu5iLz",
  "key17": "3rtEJecHW6kdSMNmwNj77ywpQNE2cpHZouiWNj1k4QMghe1YCHpedJa8Gi6ZUmtUq16pdFcaMcrrEDKaniwzhiW6",
  "key18": "51bEC71fW91xZrjyNgqurFrVtPPFfe3JenuD5Ya2Xt9KAviTUjsHYKaXi81jn41WkyznhvbUgisSaKe7VHXdgmpy",
  "key19": "3Nj1sMiZNfuMBrhWAAJN1gT1hkKwFZ7842wMYEFqqBUJuv9E82PafiLnHeDcm8uDYxjhn2B5bHmAc48VpQHMrAU",
  "key20": "2q8zA7bgTTFaFXAdYmZFx4zH7FCA7kdBCaYSfnPKKRnaGydiqZ76jgRvEvuJvdaLTK6SXWsdjtF7Ztbi7ar3od8M",
  "key21": "5BPwE6E2xtDurVb8UA2VHmA9sYNpLrK2DbNmo6K8d7ZY2t7NsYSLEWT5QqoAeCM6ZsKwDynmb98D6mnktjK6SoGq",
  "key22": "3RyLx7cEhtagwifr8YP5jwcTtu9w54mZxmn1QLcaNwrii18S1JEetyUqhJFYRjhewTdj3Kwx3NHd9yrHh315rrTE",
  "key23": "2g4VfSVg32S2dQ75FJJadvsVh5kG5HGkjEWDSprjjP4MvD7w1uBh68gUUNor31tTwXJ67cVRsepydNhuGRBGJJoz",
  "key24": "3CgGYeKQFjpLQZwsnh8MEktePrfLVAarBzRTfoen1UgW6NZLQgH1SjVBqVKpZXSj8UVPjFPSsL656UBWkVKBWW3s",
  "key25": "38Vb8JbpTM6PwUsNnaPWRGjrc4CunWVAjWuwiXJTXuJSdpd2wzSpNoUpU2XmqG9CeSbCu64bPXWYYVs5BJ4kTzAV",
  "key26": "2kxxKKdQqz2iXbFASLx3DhFjGSMKcqoCByypHxkdUFEx26U4eDDumeiw3gUqguWCphFWN8XWEDu1Nsxh21osAYnd",
  "key27": "4Z1UgsWjDPnHNamC27zLtCDc9KuCiFysN5jaow27H9WrqynzmVd1KZ1k3bmZqhdJa7ZAkGKjUdDwGP6bfT9GQgRm",
  "key28": "k7hivekhwo3YLYrAPhvkNte1vE6pFJfQWPPAV2yvpsGwUSifWyP6ZKAaNDKsPz76TM1iV3MjHN1LTYJcoZz4boZ",
  "key29": "f1FDmQBBMKKCpGmHnp95Y9f1K1kyMEUHBvCQKJovUWmZBK4R3Gy5Wtscg1LgPafe5vCpapHNnZtWLLxYWeeaWj9",
  "key30": "nzYKx3gpLLbKPvW3vhWCu7P6czToApRxxm9A7CfTuiN7DpFCbqM44AYLRZ6fUSL9z5bDpc7eDnvWiMigmPpxieP",
  "key31": "4csr1TmisqsdFce3nMyAhFCN1rxvfgQrRD6HTNzdcA52SHsz9mWx31MkA4XqXnKbeub1FTQ6ALRzAh3DKGVGkFTN"
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
