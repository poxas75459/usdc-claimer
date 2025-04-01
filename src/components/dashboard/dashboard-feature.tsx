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
    "23DJqCgNnFLnsBbF5oeqtGuXwFXupAYaC5SDgDnGC31tidvC4eDcR44kf7J9z2pQMcMSeRGi75FSBWf1MqgGkgeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NxHsiAF5TZadNrQ1GcN9xojejU8JTLuseixeZszdY4Vgy2nztM7Pph1fz5sZJ2BjcfbXw5EdCWQyCs7ExRwvx9Y",
  "key1": "2B64BhMzdxnbLRMm5H6yx56ZNKe3GNGYWQwLGfiGPgY4nhQnQSpQZUNaVJUyW3Wvz8U5qgfeLDUXg4g9C98HuQqU",
  "key2": "5XLVQznYLMkEM2zk5kyFCPr4ujLFfxgb4C4rhoeXHTaY2A7YwuCa5nyWc4EBaBsVjAWQg23CC7uoh9ZsZqG3keSS",
  "key3": "3ojAoez8B62cAxMEyhP5fi1rpgMoQTiTM937ops9QAWLjGZbyx8rvff7GkR4chR4tiNmjYkuQs2xmapcGgVvMrKA",
  "key4": "39fW63AhZfzR5WjngvtqA3ohPLVjbvgwxQTd63GW6SkF9A3QSonkPnfGFDddRVd67TFgVcpX3j8CMaRWbewtfeQ8",
  "key5": "2jfVboj5FzPnJmUKRxQBKVfFKqBMH9bvcVpNc9VWHZJG9jEFbrKJBUD1yqS5Gd1p22nvKhnPu9kdjM1Y73mKef9R",
  "key6": "8j9HRBw5QmqvZXLBpuXYhepfv2zaTSnt6oUN4w6bMkQNDQ9WMRXrZkqY1QdmVXzcCBrHgmTgGzeAJYTvTyLQ4NJ",
  "key7": "37dWXACkmxqswQ96wcDQszMccW1vYBAi9x4RwzCfXozR3YgrLqoqXdNscc7JnBfweaHtkkrRkj4NUFz6ERTwjCYA",
  "key8": "3tvDvzyQoMkPb6MVKfooqgwsouf2AUvBZR49tKUq5bCRY2UE1hPQWVtkjpcyt6fagALw2ZVyEwk25rBbPTtEHFPu",
  "key9": "4ByPJmPpSUNQggsBd146JNjBcmG82Xegceg3qWKe2KQvcjTZp5REns8PRBVZPHBYZ9vU2ZXbkmGTRvHRoUgSzW86",
  "key10": "31XrwtNtzPnySJq4qtpYU1kB1Abku9NaA4oPfNaWhyRBFbaMnjvhsc7eM6bT2sQiUG5r6GaQFp6LqgQ9khPrg2sV",
  "key11": "QUWtrYy25XrCVUJFMQatSH2huM7PncTsQXAisXFdTZYtjYCpLZHfuj1MB8SP2JDCnNRPzP73QxVFCCjTXRp8CrF",
  "key12": "2ztMvPnc5QL3aFmTCQnvtw48dWpRANjjNjJLbh744JcBhm4xwJK8cz7PouMPma8HCce3tGxG1gMShpN1LM4LNnQR",
  "key13": "yf1DneZi8muNmrDCgzzgmkdTVCcU1yey8MwRYCy6ZW99f9cZZMyzDHbFhq3BhEPuP3VgA4g2XkcedLFmcAkjE3x",
  "key14": "3wkmjvXZFq3n1FTuzSMWdF1iw8bfDBH1fdgVt1zrcNuU1RSfzy6PLevYZho5ksZPgxwFkE7dMMQNddLEfHfXNatB",
  "key15": "5ixUwiLKAzbhM1JU4eYdsFgX9enCV2ZcEvjVv2HECCXtsULTkMDo7ZAtYo9Ry221ferCK9kQWRkWz2XdYGykaSwz",
  "key16": "3umpPUfy6GZGNx4WGHUnd1TujdTm4oVHqAG4MLrHw7MMByFexqwJFdTzxzcJdvqyiuDkmSzddG3Ly9UVXTF7VSi5",
  "key17": "2UgGtYqK3DP8wkMVw789GpKL9KP3xzfqZ9omcZE41V6TK95h4KRsGuh9fGnufqJuTV19tQmKSNdhK7rAkXKShEvF",
  "key18": "23i7ZrgW3DTBYWAHtcqD3tivcWLnjESPSVXwTrzDeZjvNGahi99Z8EqE156ygrvgm9hYhxkV4hV5Tq48vRem1wA2",
  "key19": "3FbB6GS318PXdP3EdFHG5H4u3vbk74HEfxfDxBmVCgEFdE51BCB7DswXzTvhrZYnMUpdEgA2PUXwcvWfFMhyjfpo",
  "key20": "2ms3kr7HZKBtbhbVHkEakKoaoTk3EhU2BTsKJkbzRd9ezKfBr5EbFfPzagGgNNHBcgCbUn66V7zmqMvDPVtS5a9R",
  "key21": "mpQ3T7H3poJu8P37EqZBgbyHmyqM2r6GwueAPHS5ExQuGA36EH96d3ewbgJpZ5Jz73bPtiE6XgLVnkAK2sT3Gps",
  "key22": "5nLTCZbipW2PDvaGskMQ89P1RvZQ6CP49v2LWjK5uwWirue9833h9rkk8CAZHSBBuFDUCbwMUMMsemPd7jd9wBFW",
  "key23": "3rQ5LS17shkpByAQ1ro41VEihKz1kA6rtn81UpJTG7rvGwYT2nT2mAoS1NLSwGZQEZGd81ocLp1G21FAte7aGdkq",
  "key24": "4BTr2fmpYYRZzZZFd71nG1UumDVq73mBpjRGbMRHSS3Bx36cnpmP4aAEPBk1Y2fSyfmAhxSgFseTWS52P68QHG6",
  "key25": "25zXHqiDtqmG4rpqZZz1kr1b8hW2KT9XuTT71qfEwjodMAi3znwxJ1yVEBk9jWFSdpfX4Zy1BtH4Mm2wayVvxBYo",
  "key26": "4GeAKJdm76ga28yeHDZzPv9MrT8b4h4SR4kvTVvjBV2x4SHBPbNdkaWTubqZ3fr9gTJ1PdskH3fBHmjh3XA4Y9QM",
  "key27": "3Zc9GdU1jQwvLFM18apTeqTx6EkM9JQVugBQdYpPrBZeX1YfqrtW3ANxVQJvGFNyTj1J71K8Pw7Rp4aNqzGBcevf",
  "key28": "3ASNsoJXWTuTB8uqevnnvXmFsizTRVyJUjspFKQ1HMn7DEmtuWofoZrgNUGLrmEbNY774Z3fnE9dXkLh6iqPEBB5",
  "key29": "5ewf64ssUtTbzFFRstm1AHJbYFMgXaPaxH8HDgAwN8CM3qtNEhXZiV3RG9wKEia5YZfZvkyzW8dz1wDEbw6z6VLT",
  "key30": "5jSmtaeN7abibMdkN7oQfcbJWiZiLsn4XFnGjpQA7vDPS5iCr4jrmirWXvMuBbMWkc6iQoBVxPGoP4BBPn4ZaGY8",
  "key31": "5uqBZ3itEydAtbnR2Nb6c4qUFnuNw8n12U2hhq5XrYR9zWMynzykDG6NoLVvaxknmpWPAv9Xf7qdKcZEheJqtEJJ",
  "key32": "5rh4PLJxnuD9Gn4HzHRdX27W8h7WyFEhQ2AnD65EZCxokcPsXKtGr1ooMBSMSSCpR7Yb4HRjwsPma7T21vW5Crw",
  "key33": "4pnFDYqfctJjcQygUvQnJyFXBMJexkaW7PxkwdxYcXBEkh4uRUQpsUxhjLcneBi4tDhtJktQ1USyQEvZgJrjivaX",
  "key34": "3gk4V5QCc6d1MVkx7J5HeW8zowYiehzpmcZ2EYW9K3eQyrE4DQVpDjcj7jKXALRqJtkx1D46kqHxoJpRTkLBM4Bz",
  "key35": "5UZncPMjFSy5zF5VUFQxTbRgyXetM1nfZazMoZ4XNHe9AVJ3LoCvruitcc2FKFd1RGrbWZBKiTr93HyuK46uRTt6",
  "key36": "3S9X3vjS2L5143CybcMRzXmPnTdcEQHkTSE3DNKgNNGkiADrRYNYcUe2JvictvWQwfc5wP7mdhmakkbcqAEKFZVj",
  "key37": "2iRPvXXD5in2Geat7Zv9e6f2aR1kB7URo2QsN7H4vQS3dHeid5xDpuq4oD7FLVxzxNxjyi9q14KwbUv96EYR7Kjs",
  "key38": "4KVyv7wVHcztisZT4emywpnHWAQymprRce67RGywPkDPkgVBPHAXwshYDpJNFhZxJXweTLYDSWrDcAcxgAz4E8w1"
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
