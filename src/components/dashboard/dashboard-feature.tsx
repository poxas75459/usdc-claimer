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
    "5XkCyaToKbTHszV3N4wGCaCbRVokRYjyQeF61MdpLnjaMgRm1D4K76Ji5tberHfRohUg9hWx78ky9aL8NpQzEXN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BkaLVq6QPG8cz45MY94LRGBUz43p2spVnvVhghahqePKhgPk5FNoBAB4EsCKxJy7LpzW2NwM8rdyLKXbKWGdU1u",
  "key1": "4vWmvicZqub4AQw7uUjfEPtjEwmxsdvh6SBK4L5toyUzsKeLM7zxwrrLod9b7jPUrQnC8Tu8tL4Lw7tXhyzuYWgn",
  "key2": "2s1eTMqkaQyxpgEnRXcQV5ouCAwaSsxAcPWbwnuVgMVd3oxePry2w3B6e4zRj4SyQL5okz8XQvvbAHKzvNhoiwUj",
  "key3": "44LTh48iDFCxkPQsFQPaJUMhrW4pqSLyNNPMMQcrbiQieSUd1AMaHqHWo3k7x1ebv5BQkmpyqFThHtmW477AeATZ",
  "key4": "4MLr8nf6qFM4vxx8QHhJXtuh81BrfFwSdWHK3btGLsjDXimEgYRwJbQ4nziYMBLKqrmjb3mM5MvXNYsLxTpoLARU",
  "key5": "agY1iFqwFAGQCLyeqo3H4B6n453BWwNbmfT5hnoSpTsuzaXM8ocRF33wVmfizyxh8mYLfVq93ZVj2p7ceH22xpf",
  "key6": "5SCni487gvcJgwh88aWdQBQyVzx4GGJakeiVNHPzzzkHbbFQFXz1bgQpXeheSMQ955Y4tVmc9PkcaoP9MxvdC699",
  "key7": "5VkRqYNmTwUPKg6PuzDx4Ff4WteQkXjvsNBspbbAe7cnow3NK7oBWN9bgUwLyxEB7tzuP6KqkGVdKuYRvNNt8usG",
  "key8": "5HM48SF74agkjras215rf8uLL6SSTAiHfv1SSBf733fv2XbgsyNbG8LRhzhERbB22ibod1A4SNbwMooyDKCyVefo",
  "key9": "5mWTQ6K5xPawVjgVzvrMu3jURj39n9Dmrto2d3g93RCF2Y85f7EgxRCAgs8P7AAzRnWjVgc5gf8WkGEGjfNsK5CJ",
  "key10": "5fB7csXvyHidqQwNBrSKuFg8qTKMFxhRxuSRZBDMjUke88BzvvNP1gyEfEYyc5ybFbWCxazPR7iymUJntL4XfrUY",
  "key11": "3PdXjB8J2a918KsxNUeRdRMYdtasD4aLGv35t9UPgo7x4ayhfeeY3umYuatC3i3CthBzqrjkiFjXJDqCjvApD12a",
  "key12": "b5qX8mWcWQVxvvTgQAHv2FkbaJmfdRparsCGavCUpnFC7GRE1zuV7QbpQKKb6KVcN3prg9QmorHR7csLdbMCWVL",
  "key13": "4RVs8JJjBQPuMAa1AFDzRt2emdDc9jMsRmURM43MTv1WC95cmmpsQia92ENW3W2yfmbWztYSGEnfwtRTuHDNHkaz",
  "key14": "3YQgXT6MqcXaPihnX1L5DRFY1oTqDFi2gbLePb2kvfWRYRDaxbotj15CLTRxwVJcpKzhWNwwMtSokQxMGVPNeci1",
  "key15": "4AjciFAnXnVVv9ifQ3gCqgfeqQHugkPK7JDCnnczP2muh6CTLQz3hmY882DNuHeY5K2VNvMvE3YgeHYLLdWRuE6G",
  "key16": "2SbvyZPT1j2op8KCBCf1jqC7KYZgAeRmGkZkaTKenfFDfzttRyvYykyruaU8KfLC7zRaqt5m64QWfAwtbVNkBoNg",
  "key17": "284ZTk7gEMyA2CKGcsLNSHfYyU6YENonbQKQcaeMvZY6ciotE4VuLeLiDnQ2AMEFcfUvySjh67hFk1UuRos9icjX",
  "key18": "52N1wzroc5uQvKVJcFAHyd2PktNGY65F67Gv162zzDaq9HCZTYBryY9kACoeksUGsGUEGZDcYrDhgqYgsQwhCq6U",
  "key19": "5yzVgHosDveoH2RvQok9PdgsKvfzk4ELiJkku79GYQ5yVKKv2vyMRAdyWRng5nipULU5r2L29XYu4c7dbpkfTeTE",
  "key20": "5rYWgT1TVr7bF2AYezQzK5cQ42STHxpiRA2DFEdvT2NWrDGoHE2vxsHAUxHvXch3JKAiEsaamLLwe8Jpn2SiWhnz",
  "key21": "4HMPVM1yDv3ZPNifKuxtaGoLq1nbCGKvsngj6pAzgzBE2XCevw6qbK13ywKoD5iMvGVjhR1anbjtuS7SjsnZpCid",
  "key22": "4hZ5tUg6oaEtY5h9rduoLt4pjpBgvzKUxyoUSyv8H1iuFLMzmX3WNASAc51TRc9Bm3tVBeqwSee9D3prifSuUwwA",
  "key23": "SiG97HYQ3Eh2hYMW1UvJspJJGVAoonU1qC2VrFYG5shAatJL6iwrkTs1g7kgpf68FjdPHFqTUpz4y9641w7Ez4A",
  "key24": "4RB2RFR4RLsY459uhhKTtojW7kJxvgL3ANTBceBywtChysGUZsCtNwjJjTgEmvcDLaSyDFVTz89FXfPjFbtx4kHF",
  "key25": "qTEaQbrkb6ZiwPJJTUBugRhAGEd5LawkUkTzoC4qmC2XgzqPf5dsNWKVRs9PCiqzVeApAqGsU2YEwNks9qbX8qZ",
  "key26": "5beWzeBfesKTzqVfhCpMKa5m2hS6DZFfxqDhqiaBDM46dC36GyaRRyhL9D1Fwwg2Ep9u9dBTmz3xCZVhu149KyoA",
  "key27": "23nH5SnUVAKyJWCQoXjTiJbtL2h1TimWv95nyLbzSZ64KXBCzn1Gt4rStdUqcnNs7qiWVatEgcYtKhMzfSm2tRLh",
  "key28": "QEbuxpy9xm1f8LkPt4JocXSVaxTyhQERaqzetVwo2PKdGcUoZjz416TyhLdQfNbV8hKHTENY8jhx2MhaoKM7Bhp",
  "key29": "5wMon9hqeG6EefcVYK1GTooW4SHf8yhy2j4FTHEmexQHN51VM1c3d782pFEeApK7Ad8Nq7Hve4nNQqwPmQprXsQM",
  "key30": "2hPxGvcY8nFNnSNaau6RW726E9JYtKv34kaW32AvAyCvukq3LbYS6XdKjHmcHDnJkg9Yq3knYpoMatZPVGKYopxc",
  "key31": "32AgfJ87uifXh2ipKKjc1KZggUM6AzZYpjcSmurzNNtgjFkhUHvcEGnRg9nNLnfe1DebFzWaLKnNCYNQFfcJ55si",
  "key32": "4FpcVYm1YTJqgUnwKc9ECqiFyhfrgFoeo5Ax6f5BEMZFD18SqbV2629pYNJyk2gmxmTqVDzeyY553mioTZsCwBLX",
  "key33": "48DbUBHt5KWftrXaQ3ywZqy6XA3xu3Y6qTm4KawGobMmGynkM5SDRdaCrUBDCoyC1PrAsMQrGsDQUpwAS66AKpzQ",
  "key34": "4vYpRWmfd9oJSXE5bZycZhqub2m563mFiM838z5DxXs7my3TUrPDvnRnX9ND3tMCuq36wz7wXgty6CXhLBovtJQP",
  "key35": "3vvgr23no172HnkkcnqCYpqhAFhSrHFekgSNgWvCtefTEYiPTESBJvGfZjUS4z43WTgYfT8AqgtAKuzJ5YHfSs7d",
  "key36": "5VUcvcs7hfW8ovgkunXh7NYYZWLpNj9d3UtYewJCTWPCUDbcwX1FpyQyUZA36Dq9cN17oqoiLnDGMKUqNo66ayZo",
  "key37": "4mvWQHi8BRxJHRYejY169BxnT59mbhxKRcQxj2QR9UmQ9e3vWbFBxVj3FFhRgV2ZeN1GVQ5EgTiSaFryC5TwwWm7",
  "key38": "5Zy7sp1upsDqLV5NAsHPxpVt8m4R8BLoTKFKDVmmxfBXip7TSuUwwXQn3bA9JundPa9Gn7QL5d1ct5qwLa3ehEUH",
  "key39": "du374AWQ2AVb7oqcAkTvjfGqFeMVyJMihxFpyhC3HX2KcG47tw7Nc4XdAmbwsnVFW8P1X6msewcq7oUCwbZ1T4K",
  "key40": "BwL3SvpzXZyddG54Rb3KUxct2div6v9weaGT6SMFY2DfWWm1WKr9aHktB6PaeYiTg8jXtVKBJRc1GRt252nNYuk",
  "key41": "4uh85DmSDi46c3JqQsRBdBb92FTYrdG2e9CrRam88KEXdaNC2XSS9ybK3SeVzace6yRrg4tKWusaMzNdH8ufL2jh"
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
