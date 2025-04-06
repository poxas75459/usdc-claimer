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
    "S9Dp3ra9WYwAeENxtatzUBw53KLeVAEn4mw8zxaLAm1VH1VeG4iJZx2HEVJfMfMhRf1q2hN7MKzZksNx5RFTSig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53NMoJRN5BMos3NFCaoweBgkDJCofNoXCE5hS76CaVLq721vBbxDt6cTP1hGN5pcZ78i1ddG2AA3kVe8fSg3jfnk",
  "key1": "5Js8ss8XSs8aho78iu84mG6tCtUPoho51HvKnvvgSk3ogtW1nRZAk8Xb664aw6fUrgMZNoovnM6iNVBjDGxDkA9H",
  "key2": "5xrtzYmxaEsTWExY5K4b3oi4KFHsdJTGTLc9R8D2fQCM9GaPcZ4g65n16Z7TG98uZBUdK6DyC4YfXkcgT3ERGpnT",
  "key3": "2s7mt7WsZSDx1QX9PfsYgwHjj9F31S262wd15eVF3DweF1YPReomhMrtqh5HHDUWmQnLnDGwNwTSXm8h1Ey6w3KY",
  "key4": "5Fi2itatVjkfsWKkp7dAgFnoRtqsYKP7HhgbhsRSh412NMQnWzaXDosEDK44FskYr9k81v1UGfmxYikANar2ubK1",
  "key5": "3dgfPdwre27qijKK1Lm7kxAVKHhpVVq95qrbCz2oybV9sbaHGVvFdG9ZEJm9SALEmrne5WZHYp72ZZmfhDAiJMnm",
  "key6": "7GqjWhthZFryYXbbkKnuLmZxCHa2Aa7kMxVV1tzqBHiEguVE2A2YivfmC2HnuSifchD17wXjinxmmHJH6zcekKV",
  "key7": "3vtZ7VNKz5uaZHVix2sngJ7qYNm4oE4d1FWzJYfu4tFkZBo5Xn7ebYPi9g2VAhUfBTQhxUFmWJNUwhy56PeZTGxa",
  "key8": "5KGGCE4GknuB1NBHM8Gck6S3ajAsRuknyBMB27WW1ruqQqq8nFW3xaZdnopSf2JbX8tMKMTJQ4mLKofvg6YCuAnD",
  "key9": "2k4vcEbZyL16d6P31bo9sKV4wXXTjUQ2S71GrjD8SgxgtAvcHNxn5pgE7BUmt7hNRm8jhvjcKJwqxCoxKVuuW4MW",
  "key10": "3Aqbs5aKE377PpHZi7P8emCDU7cQAgxU4fxw7S6adckWuRMjZxScpEEvNjYhqVnEANF7z8bhPrgJLggHtRCAAmzn",
  "key11": "5XZbCgByDGZWE9hXNN74NLBat87BZAA5kAR4gyBAa5ccy22rUChzAsPLfZH4SF8sTtEBm9Doq24bdvkzumPEpzQs",
  "key12": "4hiCsrLTnuk9KmkmC2rKiYACVNYtw2WiWP5wwmicrSzHFLz2vZWLMEa3wsY89vR4Z97RFamtwBmY8UvPuryqs1wg",
  "key13": "4PGLEMCY2u9o5rMwn7i874EVk6zwTrKHyyRLjcBAiDEcEhm2GXNRAnZ1AJf55pFBiMkaCUJQXvouY7xiTXkG5BYD",
  "key14": "5nrDoK3Gw6e4DMAy9RpxiUiMFFMcz8KpQX62EGoEa4UAhjG97Royyi4u5EvDpcovs5fT8GN3CgNZwjXMZhHfFNJB",
  "key15": "55E5L16qXw3KbvhVnibapXUFaH6mueL6MfqQgQCzmsKuYHWSzCqEesFDYZFp1hijWpr1bXZcY223fBTEUArPXNVr",
  "key16": "2BKx9AGQ126sJB1kjgAK4FUxSaeqzE4KNU5PfbwUgF6ikvdW93uHRC7625WSMKz7p52GkfD3KvfgAXmEQHDmcsn8",
  "key17": "3PcPhPZp524E9LsQhoaXJJzH69JrJr69C5ExKmHSmwF3CHgDirCj7zJXtNtZrJbATtNUgCn2ZuJvUqER7J71KVbT",
  "key18": "5JdgsvKufdEGdu81y4dmsjJ9WhCCgequpMueASYK7m2EFhY7J8CeDEV82UZT1vAovbhYuWK4MzPWjz8AuvERmy7J",
  "key19": "54YPLs8i2NSDNKnJNXAhmVgEYaH2vEFLgoZryNP24wRosBHnsvyPJmcEs6NKaTMDWXaBPgtawWBBPf5kji48UfbS",
  "key20": "2J7cjDuW52twYb4Ki4pazJizLCUZu3d2CW4vzcxS6aeeF9ygMLdJL5MUnpPisVN3JqvDM617rTHX36bHBBPMC2Xr",
  "key21": "4c1KwFUtPa6soyV2KzBWF2jFy8iucSsCtJc4JqUCfGdgP58LEtpBGL2ewKLqMbACHhTpT8j2bA775vJaZ7KCdR3Q",
  "key22": "4tSVJYrDmCXe1iKwd7AKGQLz6266LQ4mtBbGuBziqCVPD9ZzGwzYGm4BokwVem5wWFTutsmKXXjn8BBVVTCFiMix",
  "key23": "3tUXHgdjzaPorb9yPsp4GXQ7LNyt2qLYsddNnQucYnvnsJG4hcnbzTurr9GcCjig54MSToESQLe9JEksEcvDRuZy",
  "key24": "2htYYv2yzxo3GFJwP8uz9QZgvxpBqftcZvvH76wuYqfkBKXqGuoBhQYcEJf5t3dpHgJ2ZEpQ58dEB7AgCqdk2YJG",
  "key25": "2ktEPDsAa1sK8cEbX88EwCEsT1eBrDBDNH7omm73T9AABNhoGGztDzzAUjQAyz6pUcCtWCkAJFgNG1itxcXcc6Da",
  "key26": "4wioyrgihh3JCqM6LjE5hNwL69i3nwHyJUdP6kczdnnTcgbDKaF3hYToxenipQ4KKTigdDd7qf6htYnVdZeBReYf",
  "key27": "5kkaCC2typixMmUQBpkXjMNtUM74wikjbSsYbMb6EjMKF1SC5L5vjBW6UXzz6kv3eVY8ixEB2xXsCX6u3pcLYgKc",
  "key28": "39uybCy1adABe5qey459BcE13SX1stBbi4SBE9Ui8Nr39dgVtTDvgsqWRAqRd6UrnaawP8j7Z3Gn13sM9eq4oEsC",
  "key29": "5zuxejGr85SBWrdEEDyGcboVc8fUqguzDwWhDojh4fht9Z9aBpv8uvgNG7oRiNodVznJ8AvGc9EjQaGvmq2yqWdc",
  "key30": "3ybxuHenTohw2Scm9iNKjAAyjRRfsPbLAASXhRmai7k4gkDjQaYa5J3j8YjAPZMeVLmAFwxpBcWbxgEUeZc1QcyH",
  "key31": "5BWXbMTmWoYpFDmiBNyqr9ci2DreJeqHWNKbX8hrckLLHTbJpJGoncbTM6S1VVWshHRTpxudQNtVb71KV3STVKDx"
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
