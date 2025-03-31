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
    "2RvtrkymQfPFYW6mJqkQ32dAgVKBSDzdoXx5xEQJNz3FXLkvuXCpb6bhcQJMs4wJuDUYo2afSWY9P7psjvuhRxu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hBWUMus8xpM2P8GtQ7Huk8GwHFcAWtsBsdmwSbkN5btZrMkWg63ew9EJfWoAWxTs4k7MxnSG4uUviFr4f3VxUZT",
  "key1": "54R26FohhRMVXyLCjfnrX4z1CvELy6dPwygW3wbFpkELUWbNpon8fiWEbPWse2eSSYeJdg2SsK94JEBARkYsyVuz",
  "key2": "4w1zg2xPWit9wpW9GJPa2LSNWMP252JXEfLhCXaamYT9A3papvLgZvNHtroyowtxzZZJfsWtso7KKugMhk5ynB4j",
  "key3": "5ersHRCzP1GyniHB7gLFpRKRkSfz2jbCWZDrngK5svJayAbfyVAfubjgvYEkVjLg3nDD3dRS9kLuAk6MXZrUADQS",
  "key4": "GZpBeAjYMZjuqiMFYWuov2SPAkeZyEmqn8FQNsVQybJfELf8GGp8Myrq68T4aCxZ3oSJD8fNJ9Jaaa9Nhjszi1d",
  "key5": "3RvYLWpLFgRiUwUD2v78it6FYj2R7RrgLEHKV8c5HwjcbmJRYoDHtj9CgE5sDN3Y23nDhrbqyEtkvzPMvYae1VcG",
  "key6": "2iiFpXotN3YHXNVrmkzpyaTXuiDUry1tpiyQ6HZmWa7VqCC6TQWM8CtQkRFvhwtXNGzvLHFtrJDu3jKqUMN8iJp2",
  "key7": "4r4dkcoxkFWek9PBQhSCREWESpd8Mfq5LKHbq6xQUfLJiUGLKP55UnrS8t3LE7jNp7zriJ7vRtuXjhzq2YA38PHB",
  "key8": "5tCh2wLyvtwxTDb3e8nke7Mm9rzhHZJeqS7z4tWHEPBJdfcpLumCDF3pHxXfr6U2GtYr1FzhvhzvbiUPHCwrUuhY",
  "key9": "3sSvomGv7XSr159v8FT3nE3rrYNpSmMDLHjq59qMU4FQrF24UR28ZAoExk8obijW3Z6C8gGq5DTiLPmt4FvwUXkr",
  "key10": "42iZHkTwMB4Q3eBET9jgC3HVnrC75GELmxzsUzVNJoGsMwQcssFPNCGfvK2xciJ33mLGGdYCdp1y9v1uFFneVfAp",
  "key11": "4HgS4yxoPVDd5aW45EkB6PcycyFkbNNQvZDyvBbaCG822N4w8idjYxgdJJ6LnwKmShBAodv4TgG3Re3VGReQAsJn",
  "key12": "4sP2YgQbhz3SPKx1zd8WB26BbkryVr95KQp2ekn3dFoA8GS1HGmoekwW5TE4hzWfahWf29uCH5zLnMoAeo6ZihxS",
  "key13": "63XwkJcTPB4uTq5UHWGZPhyurEK7iegS9yY6iPa5XZtk4ykLvbHQjsVCcqrx4fXbEK9Fi46GcuugzBAMoYtyc12x",
  "key14": "2kcJd8z6AtsGe7rQ85TRyQUVemJkinKshgn4fY6patfzEbuSLUPFHtjJJvi8TsiziEWwhfipzToq5kofNNsSZKEj",
  "key15": "2DUcZTkfmyVbAqZf2h2BcCn58GgdnQZfW5xJmV42k1du9tDfCohyYGeoijL1mKTbBGY1fok6u758j7nd8ZvuufLb",
  "key16": "3j162op6EyosgAK3ZQzSr1tuLMTtuAKCH2HLknFFbhUSWP6cEo9VGWgVJSb1sYtYyWnMQ9WWX37DHmhUv3SEygmn",
  "key17": "4CfxUqVhZcWh4WvmajiGvduZ3UBiwdFXEpUEVXxPrbudpec3WBz2Bd5iFyeLvSsmN4Hf9ny1HYpmddJPDzCw9HMy",
  "key18": "Sck2WceB9LB26SoDQnhg3KjtLQtR1F25py2wM4QtqCcnmFz3eQNEY8TvYrkmS5jZ2DCL5HfS41tW1b2rWrhp1TM",
  "key19": "3vgQphZmkMUfuUdHZqzS1ej4omX5ntmYtjeKi8YmbcuM7KgGBpBR8x4kvveK574amAVYtdw5HgcAqK257JQZKwoy",
  "key20": "63nZH72v3M7SANhR9MCgC73iMAQsfmjeNWsbx311T46isopryAyBCMtNTEjqsVdmn7Dmtz5SA3o9B5dkCZD82a7M",
  "key21": "31nJGgJZDQ6tZwhvMtPDacarqkK2WtPfNqiujYLnVDDM6MtJnxJajK4ZJLRtEmUnpTYe3ZesG5kF2DoUHibzCPHJ",
  "key22": "NLHGWjxZW1v7W46pYc58rtForBC8wq5KnCTr4aoUkLd233AYMT7HjguS9ZqxCc5nBnWKQJD7cnqVUwZreUa2isd",
  "key23": "4nLo4k9Zd7SVta5gmRJv8YaevCSGYmvkmC8oH7QQ7NqMJ18eh6N92dxgjxV6hUeSqv5DYe1vLZ15saMp48xNSfVd",
  "key24": "3EF1uhhQbvwWDJxk5rcgW3ZTe3LCDdy99Jexn5XUKVJ39Hof5FSad5n4W1n2ifcVwTtfiENzPgLHMVeAbRptjcR",
  "key25": "4rqU2rezouGKK7SCT8FMAtLvkJM2Gk4S6ek8XG1qaFLRtXyMk3w8TuAA616hcuyUc4dCBm3jjxd9SLvSY65qcKqA",
  "key26": "26qtKNYzMKNj39UptyvhRzDESNP1FYQ3UKv44MoTMppTuvWNhDB5a8R1VMNv2bWfteuaPZETTST69eXiFcSJxaPS",
  "key27": "4sqEg5FAxQq9Nmunsz45m768S31thuspmLEx8kMzEXMLwnbwbvk6jv7JFRRWL5wz4GjHbkh4QtYKX4RhZSxeaof2",
  "key28": "HQ93jqExgPvDm7WD6gyMQmRSFSDfVxnUpb2AZbtZC6F3JjYHQMxv3tEudf1tziW2qnPaq5vFHa8aKBnJ1ub84Vv",
  "key29": "5d1QzzsMSmmPsWb1nSUiLDyrQMWYGxoZF4KRS6Q64HtieJ2qXKRrjxqZLLSgpgvSe2L5GKkzBj7Si3ic28TURomN",
  "key30": "3sbPpNBacdyvBadDVXM6gpuU8DSMsoiFs3kZJNphk16rL9gRvRb4xVnNvNieD2xrEMXmFjRc2LAtkUFBgCX4Z7zF",
  "key31": "245249uMaBAoeMMhRWSn679SX6qFTdVm7x5GLKXdnW6CuwdAB5CiFDfHPq7zniRC9wpy1oVfH2wnJUcsGskRzc9q",
  "key32": "5FniTQaxLWRFQVEWXErC9g3KKRoXr6z1jgmr3EBjod5t7c1sWfgdCnbwf17s3jCBwce2XRJNUMmv6cPuGcaQaizr",
  "key33": "62iFDbqoLiarvtxJJcQFyhEDXUuBw7VcLpoKf7HJHzpNTzURAA5rRvQ8EYQswdi1ifoenhrvNE3XHQ9bdcoUaZk2",
  "key34": "5pwETFYSKZQ8KLLb3XUrY2yBorvZpH2Tq5dWfannVszvPBfLcD8hPyw6zq23SqbbuT4yabiyZsTAVBZQ9PDBXZkb",
  "key35": "4bHkniaQhzsxv79dufXBA4MSXL6pnAJvbq7dhwX7NbsL87tqQs7tBJgSqnvNrzuAb9f7zKLvfHoC6RcHNonmm1W4",
  "key36": "2KBG89JSdqRVGi4gAqmJ4SYtEbpa5jGfPkZWFAipGKZLXAMsJa1k1EFbWiNsi4S1pvWGaB116WSvTfCZK5u1q5Qb",
  "key37": "4v3Kiub1C9ggrRt49ns58U6F2gRfbUeXn2mrFankyfafkfyqChqXR3X1LDqk26jWVd63AwVpXfyoA9HhQKg8EvGj",
  "key38": "3euhWJJkBsz7t4fLL9bU8axEZmJwjaEmtwBNjHkf5RDyBGxNHAyAeyKp5FFiioXZvcqZMsAKpuDd7vJmJ8FyumXv"
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
