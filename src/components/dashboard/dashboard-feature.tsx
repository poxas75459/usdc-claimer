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
    "5tS5zFVxcThYyqvLdiPTV1i4Ysj5ejJr4Weo1r8PWEHf8RZHK2WssH294KVVBDEGp72VK6huM7nmd8cNYxnFb46r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VBVynMCG36aNsEEPuWh5fyco3RED2JMsQUeqpSqpvveA6WBj6wTrrGMRhivA27cSm1DVzoQPPsim3FQQmwQMmXa",
  "key1": "5mbgqkLUFYv6zq4z7t6vMRGoBcyoPm6jguXp79WjirAd5F3touTmeeG72L1pKNKZCJeoSV6Dy74GYxtFKNZ8xad",
  "key2": "31mPTcRX1rEoH1ckNrUvK1y9HMJj72vBVcXqS5nFWY8qBz4fY81zkr4KcutuogAqnrok5KwHyWHaSiTPM7mLn4S2",
  "key3": "4UK4Tygnn8UnBcCA6gG9PXba68XP5FRUD5iVV3m13hBbpukcHdAHEdUqdAwMFo8kpyXMv7ezwEQgk3isteUdbw37",
  "key4": "DP5xYBTjYntnTxr6hRLhwANv3rKrm6p81hFcseQGa4NY6ifmH7TJVFW6NVN6m5BfFCBhzUNRCsaYwhqvDXk5hUq",
  "key5": "2dU7dKR6o3TRryhvPwEQAiXe8mhCiU7BKgxvXk5WrTGyQQaw4yEwcY1pRJW83grYH4XgYqzvmhY2s4pmiX7whh8g",
  "key6": "4UFJcRvEYhZuRetwVBm3i8rQnJW5p4w2Pai4PhJQfhQnfjnttSL41q68BwZxHG9qMqTE2n9CCFkQPhWfPJCFF3ot",
  "key7": "Nnvmpuf9LrsKg1ksBvWUaW5ET8nRDQmU7hfoVMYhUU1UZvv7kosmPsWtvC9MhgnThZ8uHxQ6da8ZgpJKNFKxoVv",
  "key8": "4vE8749G7fHRcrJ4nVRSAku8H14LsEn8osEwgNLrMAkgp5XbuVZy9X89WwQ2i34X3RtNRej1btiEUsnP6EedVrD4",
  "key9": "27FBRhsQdgqba2P6ekX1T69zi9M7npcknoNtw9Pn6v1dYM7TvU6mZdUdQZZ4LwA2nWftFfTFjc9zX9kMTP33MyqE",
  "key10": "4d1VWmkyHJYFfXff9jYmRn7kriHDN5ih8jqtQdPTv5edpb3tgrsAkmseg5Qfhyv3o2jjyHTw9xJFREFxLsNoKdZM",
  "key11": "4qxTUJfH4ZusQR9o2RJxffp1J8EnijTAQCjowf2TGPQR5GSkpV3pmAKMXMv5KyJnTJjyBtHswUgty9LoJoZDjfBz",
  "key12": "5gJeA75N5Vayk9AbGvmFx81WY6CMN1Jn9idE1F3K2i3FSAKJD3wh27hqGJYBHYWKUqqxaXbhijvzCHMuVzCyDvX9",
  "key13": "5jiEDUuZvYRFUHVMBrVYSUpniQcFcFkGXcWwN9vRhwwM1tqBZhcSTzUj69XsoBgJB79NsxdHmVPMPPjLM5J22kQr",
  "key14": "Bdqrzcs7VpeUCBBjzcqyf6dX8GEosbZmVCX2tYdmywmXoiK9FzUzxn4kZjzm63iRuwqEkaGbGeiKkngLe8XF7pJ",
  "key15": "2bnPe3J7BrhkZtnXHzsDDkWeFajF5eTLvdfcmkR6vSTH8jGzQQUByZCEAVwdnnfT5gC2hAWy5NCGbQ5i2EyAEL3K",
  "key16": "fSDsv9Gak2Rtcg5qj2gxTck8fgwUbLfn9e3FdBh9m563nDcMfbt7ckYCSpRGMY4BMie4tU8RW3CSryn3b5bSAFp",
  "key17": "39tp4qXkLgro43TyrNehgYvXHmfjfzftehXrYoT5xDJsgktVm2JvZdjf2VBQW4okLN8YWioNK4Ndkzy2WeKxWQ6a",
  "key18": "oAYn7ofg2KbDfuf3guRy1Swi4dnAdpZGibYJb7y4jQbiTQytdCPQMCKPf3yZczm1t3JJkzzCqR71QTVa4ypLwm5",
  "key19": "42AjMJdraeXk21mEmvSuH9QmcTWPY3Uki2VnaLMb5rNuqQQNwSkA4PnxD7QbPjjFpCfMVgctTknejwW8R6cPqTkE",
  "key20": "5uGqS5JDj6UgX1JLeuZQiitnqebDNnqwQQpL27xHianw3abEa6uL4Hhg1yeXceL9433M8kJLK3uuLR3QTYJA2eWk",
  "key21": "2AJQoUReKo3EmfdiUFMqKrY8K64NrysDKF1nq7s75ogpdNTDQTciJ9j9vs17XwLmM7pSBVicQDy4awVhs4MRkZ9J",
  "key22": "XwxkzrWwdnK3Egh77TZQCge7ZGbnXnsrqf97vJP6NAQ29bQ9qJiF71w3cHszoefNvib2TtEhNfSL7Lcqc1PZCaD",
  "key23": "frntud8tHQ8PPvXUQqpa9DvT4uwjipP1r3dWnHxEHUUags58LQNwa4PTaLf3LzSw9iMxp33h4ST1UhGkQHAb5MK",
  "key24": "5jmn59vyXv1AhawhHPs6AWekSPq5Q9Z9ud8ZmWuod7zVzokqGQvzSyAyV2DKE6aTePZpR3haK5sRKYzQ1rVAc46D",
  "key25": "3UaiQNpQKZKW6HV7VFV2eaAWY95uGVksDhK4L78khXwgcnuwaJ9aiVyf1uCpoGucFHCuEbCDgKBuKzGNbRteDcdj",
  "key26": "3WnbeaaiL4bVW8vfN64BFf1EBqAtTJUjYR2T3UwGrAkVBwkqHgDnXji6g4Zj7GM1p9MVAyoCe2G5a4HBfxhDdawR",
  "key27": "H33J9RxfbXxtC8QLagr2UywVhEmMbeoYPkciHEAU7S5wkGtiHuJJGuvJKWcnXjCiLppL5csL5GZSYLJ5DHABUcE"
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
