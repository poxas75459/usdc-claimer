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
    "3merX437jcV5cERSbZUkTupFRGrz42xoZL2RSEVgvg3nFBj47Yu5ur1UarF8pouzqS8yEsQL5ShJQfSybmNmQP9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dkQbiZSxzdj8wpc1k94NQA1GhZKhbaju85CpUPaicvqzxAh5p6GTEdjgK3S5yuwfeK7b1gaF2ozQ5q8b8KJEhP4",
  "key1": "5T1vynmvWiEKx7jCqcbMWq8GYgu5jSwXHcAeoV1vVY6deacQUwBsJT2QRUZmZE3FRpwd2b8vY1DBatg3EPTba56S",
  "key2": "ZhH1TQxN49Mo1RzfsrQ1ZK9QphiZYW5poUUsMzoSkYuJoX6qgBeTKCchgcJP2gywZ6LPai4kNYLZWFDwvKwWVtH",
  "key3": "2o9rk42eU8whwbV7apKejbUrLsBkwz6KXPwcLGAqjyud443DjnieHFLjvHabAnpHTtsAwBFKAZGQJ2muorNZCVha",
  "key4": "2myNQLB4hpjorx3rsYsqG9Tc9WSnmHVjzrPHhC9NhZXsAoyGKG1pPL8C8h9MwG8V8apqEHuPmuzNqW3NpgAV7R3k",
  "key5": "fSaFWtTwsDKXwoEaYZL8YfmPc1bG2ZuPBC9bBzdY5iQyUuXr9vvMQ9G8yUeXisMp5wQ6CwrzTGtCcazBty5bV3T",
  "key6": "3Pd3ZMcbJ7M3996Yac4W3KpYxMBcN7vj8ceF9Ujxngj5o5XyE178JjbSSSPrQ83w33W2ihB6WWJWhKiu6LXkyd1F",
  "key7": "4NccFnpYUmezBaJWMEnzPX4V3zjVbMKRPaANncQoB1eVpCsAiKHGG194XwKFxmKsv4AhA83f5fqAt2u1Ae5Lw5uM",
  "key8": "2ZNYqzKxyS966fthDR2qiM1y78swk5Pg5ycJ4SfdqAU8uWRhFSfPzWPKBKByZ75q3FcTSKiifLgA3Dy7hMA4hwxC",
  "key9": "32KZCsnG9L33WRUHQajmo3aMXrT6CCxw38WJY5oR8buDjE2bPvSvaJfC5Ck1F2HdpPsb2Wg4F8jRNpk8ZEkxJ7eZ",
  "key10": "2hthbwWsz5F7WGTPMAWTLGw2tMAx3f2WUB16L4vuZuVVQYmzhNtEWGUiLvLTfBniQV8azHDsJ4gcRERQbAQJ9DNz",
  "key11": "52JY1hPHJo8HjvFCiBcAn56MQK3bBspewVejDKNcypqTpUUHnNPSWuFmW2D386YttDWo1D6E6rWzvtL4qoCb6zi3",
  "key12": "4vNb82bEEd7jEEx3yXT8161m4ikQfqKWaPakpxaEKoHdKLGULcWidC3hkhFXqgwoojxVcg1eMYSNYVHHejvENvyC",
  "key13": "66psYLFtKPBt744YJDTEyzvV6tdQqXVsuDkKYYPPhzYTR3ty7gCBxHC5u6TVBz7PKuiL722auoU8T1B13B9kCVzR",
  "key14": "3cw6KZwEHPJMmmtxzBXz8vvmwozkjKJY1KC7BRrBynZhpFh4kYNRHuL3QY6gefASu37xu27iBDitJJSnJ8aJCcaN",
  "key15": "46i9kbrwZp9LCXAAroHMYUmh7pauE9WpwvrNtVeWhjX9nJbRcFopqvAg5dq3vCc7qPFczfyn3ZyqcDLYhbyr1CVU",
  "key16": "463uwEiCx4PyZzn6THH5NSmndoXbz9c1U1jR6hgnHxTciNPVRrdKiP8xuRkdyK8Gra7N3zCgoiP7zBCcMFWkEETf",
  "key17": "5C6iPWx3dUP6btBiPeSHWv9MCzHpjHKeD7BK8Hiixw4RYrMUEH6oyFs3hjxvCba6GFv7aGutDAsoj8erHj1xjCrj",
  "key18": "2iFeAdA1DLoUcf6DBn5fbRoQKT2TNDJMqq4eh3JJBeM9Rkk6bFjccDgzvtA53GBp6Tz2c2Dh6MqdHdpCneHuKgt2",
  "key19": "4ykdEoTwmZsSJazV6gkHRPaX4BQ6zP83ASoLTFHbaRtohCLScGmXRD4DCzTVEgzaThJXGRf51PjJvf5ja9nbZDqV",
  "key20": "5J2vLeAqZNiB6P3gmmpLmf8xz5Ps7WYwbTs9Es73bz5R3uA2aMt437W1AmeaVJsABQSzQ7oXXw4EpK2KC6x2NfK",
  "key21": "3WKvwL12C2V1QNHbH7GfoAENwWEBiu2h4K4zezpAY4VXCgu8SmoTFtzhmXSLUqtKvxCp4UwB3E58tUWX7GtpAbGN",
  "key22": "cbgz6iC8JBAT3FegtSwSbaDKaoAWdnY8mKA1YABzbVTvBiKLhHAcMhAJMkiz17cN4Wc17XHtceFaZMZoNwhm3oC",
  "key23": "2ELq1WWdbtHVTE4Zs2QwgrAgEa7x5p7bLeKKwLMMTWc2uwCwM2ifLHx4mSsbRns6o3sDhHa3sJ6n2g3gheaihtm8",
  "key24": "4rroFV2eQH1qafj3NvoApmNLK4dCDVr3PvN5b6ZxJHpgUz72o7DTFSbfW88nAT8kAVp9RMLF86jbs6uM9zQfaaDv",
  "key25": "5X89GMjEr1MytCeGABEw7EqmF4t8kUna49xfEczUcGN9a9QJKLtny5aJUD9HdAHptfUXFxVBuz8cbeWHPioGHnez"
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
