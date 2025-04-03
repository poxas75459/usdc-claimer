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
    "36SRu1xcWjSWCnaD1t6NjQLfiwt2cj1ZHoVtGq7j5nCnx1SxJfWPD9pCUgUhXnkvfDMF8jhBu6pjHNFYLJgZ5oV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SNej17CwqhusDprEueu22zfeCBXsTgpjcVUZNdeuZYjwDy9WSp6h3F4Pf6V1rs2bQcjBWjKfyi2D8QTiafyzvtR",
  "key1": "28jAFpqRL19oAVtrmQv6aaaNAaEvykw6KKfXiYthNnszFfad6FndLMUJhEKBUBCoMnvPxbKuAzqRzQTbQnfqBhLZ",
  "key2": "3bGdNvrHVkFjaDusuUJ9VxHEiRjSVtPyLZCBAeXMP3a2Xqkr5YapJt5CLxw4gmoYgTcitazwgJcda2WKquHyBX2M",
  "key3": "3TdNKdjtR72E3besvVaBzdpou6t99KD9NeNErmfeTtVHptQCdhc76oj8HRr6bJuSzPBKakhdBFK7Wbqh3pSvp9M",
  "key4": "5p58qiLMRES6kmr4r2ELQ9MLd1iAyP95ffdD1618bU53K5U8Kvkkzw1Q18qXgnPaNc4roiqeCNJ1GzDvodw5m4an",
  "key5": "58FsckhDfi9uayywPMzsq3g6zRLgEoD9DK6qz1odkFLhAHsZ1dZ7LorNarxrxWetx8TL8LHvEikMv24pujbv9Apb",
  "key6": "4isWweWV53ih8nVh1Yq4LYqfCBwzy36E6WMZLXgwQrvW28UnuVzbkgxoJGJ7YNdCiySpjWGB89FmYsYKpjivsHBh",
  "key7": "48aCFA2M4HaGLJf7mvQGbsUvNhQHq1hSoRc2JkJV5dsTewyE6ErinkzbK9Aq4k7WWi7AyTHcvDct9ZTo79tAnnJ4",
  "key8": "3kMfuDMgufU73W9xdw5ZocfAvNbesBdcotzedKJyngXfU9UDLT9kMdi9Q3YpeQRSWvtm6ga6EbYjxPF7KwT5sPeW",
  "key9": "2gWSAMUSbFME9eufxz93qyKTFRDTr2t4PW71HumMzWPqez5VcQkD6muW7XreAtLkWuztkACegyA8ytZ5r5fafZqd",
  "key10": "3cxAjW4L7fGunSeuLoaEbuFuFWnkNaUc5pSayYb1xQGe6kZQvyxmSC8C34uEWmR4DMBjYrYYZyzJBHAVFaHZBo6D",
  "key11": "3x6uJ7wrghG3xXJyiT9xfRJHbVn5DQswNU9uU3RfxzKujCDd6UDuMYsNB1Hvt3GmDg9Hiascq4uzh8hnU7PDChNw",
  "key12": "2XD7kjv4XNgUgtv9C3zHxVuD326NEhymiXPep87gwizvr26XHhirGDefVRAfRjZrVxnQdvJU4qgwjr1vegRW8FUm",
  "key13": "55cb7pWWH9YMu17aMQJd442XkY1K3LcevrWgRHDut3a4eDeae6RL8onAdCZobLA2SCgMPbP5b6qzBrcYcNVi1T8k",
  "key14": "5bNV5SVKbCyYo2g1LiEevH3xhTVFrfqzZYSoLLBFi75XLJ4zjhPNesW2NFAn15pmMc8Anvsavv6q4Q9eoNYmiR77",
  "key15": "5x7mwxXjmUV7xRiSwAksNQP2rwhsCu7cNeEU4bRE9h3CxmBPqfj1aNR4VJUH1HdhoHqMgyjyYbeAJ7ZkMBQbSi9m",
  "key16": "3xssbfUKBx2EYiPaNzuxU8apuLVfRzKqRwUb8bYPJbHfLANZPD2QTeNox9ydULwDQSf1tK7LtcYYYaWghNyXibNi",
  "key17": "24H6YYKCrfpV5hwnCTDb6XmJ1dpJuQ9jrYMH2NoTk8adaJJUMqZGi3omE6UmYgUCJN3s4Q37pgdhM8k55fyRRrYx",
  "key18": "2BpPc4kUex799hTt3ETztZSjCY6KN9sEQuFJHVCvEZh2gcU4rcauaKjq2rRsMBbpYtwuVqzs1BHNusQQJ6nihQ7W",
  "key19": "53ouiT3DbjZMykZRtvzxC9i2KuLQG7bBgZhKKMovJgeAGjFZXmgqhNELLy75atsuw8qU5KoFsnm7yYv6DYCEModc",
  "key20": "epAnY9sJnrdwmvAN2KrAPnvyu4t1V8ZwfPJj1zSPjkb639b9uWPUjCz8ts8QanRMSAxWKRyRXiSCMgfRPHdRsfe",
  "key21": "3ZnCyNBPHBcXJfV88XxNxifZr3AUyBAKeFbjeYUgNrkWgunnChrFFvGe7Fu1aBQL1SoeLFppF18b6REWVwqF3nLb",
  "key22": "51bzyXXFmahwqmf3kkEssU3sLwgut5QNTT11U6WXU8FbDQoZestpviZCM5fRC4AbeeZAdUnfVE13NZ4P7LxNCq4D",
  "key23": "3K5bUXKe6LpVQxLaeforsuRTLML7b4L7cqUTm3owmGs2iMAbgN6GYCRXmNakdrz6G75wjYvtT41fZbk2iSBypKW",
  "key24": "3aZnQk3DNZUaDxwSNELMJMeVP1zuoDMfk9biYfWZpWpEtarWQDapk4ovLLosaKPjXTecvJAPvGgiEVYuzymmWUqH",
  "key25": "yUaqZYmtP17xKKP49WgpXbs3Tr6S3piBc5Uc8g8m5v3bZxUAzxZthu4dnJ63kpyhYgR9DftXg9XqxHSfy1sqGyn",
  "key26": "5RrA4rUCsk9mSGD4aCGDMsL87M6hkZFmhs2NNbT5pyQjb33GPXxycv9XWDdKWGj6FK6mk3RsGWhhkkz7va8kztAG"
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
