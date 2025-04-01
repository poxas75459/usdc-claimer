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
    "65uNJCPoHC5tFYEunuCka7Mf67SJCQ5LgdEnGVP3beC4RWE1jZH6N8twKKfFtYMjE4SZywawmcT3NKP8rNfpUMtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tuthRDSUQFaxijXqoda6h1QLkcCvgBAd3u5DAuDAh1Gun2o3WTE3eurG771nwG3i21bPphb3V2FKcqRV8Pm3QxX",
  "key1": "5j5aSbppPAzqH94zcWzFkgcwTK7VgSuQ3Tvgwu35hv75p3h8c2VeVroq3t9UvJCQJ3RnWShCVU75egWbkMqf8oJK",
  "key2": "5xsbMM3f9vPsHjXUmsNHcjBngsxw9g9DQhpwZAFXHFSuQB9N6MxNwwHxewufjXTpCixSxZqkjWhazgQXBC88LYEj",
  "key3": "4JJYXv1JDp2JfAAPQ9oZRiD1fPGYRknx6fBRoDs4sejJHz3iroRc5gjv1mQ1mp7oVy9aSjDDAv2F4uXaJsHq4ieW",
  "key4": "2AuXqEBUupXGwRqs9axvbxbJo9JwUC29nh68s1WUBpgghenzmMq8Um1vrERDdzJh25F6Juha4tcKbsTmbDfFWRL8",
  "key5": "48XLKf5pSVdpoWKC2N5UwJMHUgKQUTqUoAM4cQBP77Ptd1dPsgnhztX1kS4M5vEGMSvzCGKXbytUgW8DkiMNggJT",
  "key6": "5YfKBM1icdUagdWqE4KuU9xSU8h9D3WUoZZif7iGnH9kuAcncCpnii4T4yssZVhwEmJpnDjRH8mctDfjAPbkPeNQ",
  "key7": "3S8dpqCGCjLesV5rN965Bs9CFk9USdev3HJgyep5mKyXavq5usDbLbkcy33D7rxe3hzJ5yg3Ja1zkdd6teqMLvea",
  "key8": "2pF4MjEySTbZDURnjkNHH4HjT7TEMDcKiwYmL6DNjMHomA2dPmfjtQFFTmmJtzwgkYACNofYr1o9NNFTdhaTLVxZ",
  "key9": "6mJKCzFKFXPQXet4QXj8rpSCEJGortMFxJXuDHMFxmbHBS51FHT7Z1Koms6Mjg4HuTyU68GbpZVqtdrnZGthcFz",
  "key10": "2ewGAWxhWX4v3gKVLcxj8wLsmNexwrWWK2HgAHReSaDMdSocNoBSK9GoTzKxdcgM7Aea9bvQ6GEbYcZd3ETGEwxt",
  "key11": "4NsBtWdeaktbk1AjH36JX7EJJBmhZFNM3X5mr44CeUfcrhtQH2gsKii2ZeRS4mbk1Xag4jnPj99GcULKf7uuys6u",
  "key12": "3NZwpSZWBKCwAxPuW9VpenTx4YH1CrUnMEeL73uUoNtjegvSqDnQDCwSUzqiKpQoz17BsYy79BijPc1UGoZxHTe1",
  "key13": "414XTNf4k4fhwS2qrhVQcBRY3xXhdAyRarPH8qYn213jG2Vrq2u5bYNJL3AnX83rAUM6x8uD49ofM6u1Ecmm86Qg",
  "key14": "45rzuWBULjPp7P16xxv8ypP8FzQGFtmBCcfvNMWCqJcw2G78SjU4oeEiDJktZZvBPwrYR2mJ3Kt7iWSPmmBJ9Z4P",
  "key15": "zE7svAxL9Xa5f47fvF4xp6Qt4WpcPD2NdqgXrv21zvuBFZ7T7GNqXt9QhsXei1LtqLiwcorRNdmLWJZ2v1NhYdT",
  "key16": "62EsNHcidQ8fzpfD7T2wAsRLtZkciwXNLMEFEbwNHKm9UPChh5XwrNJorWUYtk29Tnau8NxLzEwSSmYHajhVn2g8",
  "key17": "5CvYHhoAsadyUQWnaRZSRT4A8ahpEA8VwFb5LnHUsY6CbM9qkXoKyCAvUuxwQd9hAdX4RrKsiqD4WJwcc63eQsk5",
  "key18": "5xMcNhub619uKsWZpZaWzdjZQYEJW1XfDU4QavXzgU17f9JTdHHhk4Z84dTJAtZUdEFT21q2WeZ3Mi5JqB65777U",
  "key19": "3Kd1n1KLucG2wiiDXTHLJhmgXKo2qRqQhsyXKTbBcSC69vWAQH8btV8EXoqy7PMKaE2BYY1jiHZK3cj1KSRHcbBA",
  "key20": "PKtLTkmrzsPY3Bn2Vkik8imhqUWqfHCrX3FWR5QTMm5cS3dmAgW2SfCAZsipFpjPaqL3SBSkMZocUDnQhYDJTva",
  "key21": "2YrVvH1ksT8wipAN7MNBWi88sAXFgMcsvcN79CaDXVj3dKTMPrKwuo5LLZqYqi2Mogpn6siBzXGP6qMRqWsMZEd1",
  "key22": "4XMeNKroXNVQ56andyVKHmTTUKT1nLDyEXzJbVZVQwTAakTmwwQL35ph8JUy3mpubsJvD9mYmpdbMsd3aSHQdhji",
  "key23": "3dU9yMxF2zzLXy4mt1ioJb6HfP7Ab2rr4txhmEcuDFS82DYHdbuhf8qrmbCyyatdywFk262JAxtVP15kF9KijUua",
  "key24": "4J4FE9L5KbvvWSHCBm8w6XbQNoET4UGbja5DbiRbY8GBeVUdKU7S1heKbqf5HpQo6SfHC9USKa55ixWKafTgcjw3",
  "key25": "4RYLaPAYKzGLdkyFuSRy98NpfMp2eYbDpwvkbaG3hYHShgh1Xqr8yqaHVXuyNohqreMfGsaNKjBXXJYiTHW42Gcy",
  "key26": "673EPUZ6wd1t6h9RbfFP3umWgW7XKZVJjgpDCWjinLBaR64cuUby7t3pagiiJytjtDhU5AS2suVmb4s9JUg5BUm5",
  "key27": "xe95wGFBBo5vWLmFUnrAfPj6PzWizMyhcVCXWLD435pyAwq9WrS3jdKeXHz46jVJtv9TnDAHKHva6jxrwHqAPPF"
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
