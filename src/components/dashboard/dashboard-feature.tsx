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
    "46ptAVh1rECVAr6dLex1QioyNcMgKpWZJ32TLX3zf221JtJdbAPe9fF7PxHq98wsCXiePP9PpodQcJZt2rC8wzFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CYsbhM15p76ztbWRAMh1RUf446yto4TUJZa7wRTX1e48vaB926jEZYAuciuhrC4BGCtmrs8hutYwgXnaz9Fx1Gf",
  "key1": "3HzB89HpimgafGxcnooBq4VjL1mTJdNoxDKK38mWv2RDkxsPY1BNAA1DPmRam5pTaff94d1rJjpeQf9DUmTanFyk",
  "key2": "AJjqWDQpTM59GviUQ3FL7WFTAtH1hc4BUNhXXnb9o7aEAtqWQHYSyYpJG4T2tweRg9x1KodpJHN8oui9kkyXLEe",
  "key3": "w1eysJuq8N4J6mQs2ojXHPU8nbbvrsKXPfV2GUzfUX2Ae6VZG5vZ5hdqwsPGFiEQWQsDjT9UofZUoChh5RAA5Ze",
  "key4": "2EEsP3QsNSZhGAdfs4Rp5xqKedhHFoSoqLEa181RP1ZLeVZ433Vwvce7Hb8oyKVcmGGhp2N8Jny2o3yoseETUvwh",
  "key5": "qBccp3MWUt447kBbXahoKGS1GtuxY78Prokdy18uwaVs46Xq7s3e1LZ1wMBAuZtrUE3azgLMjwVhjsMWdE3EMwb",
  "key6": "5N1RCPtk5k2BuePQtgfhhkoJ5pMmBo6VV1iDjB5kwjsXzajkdZuN3rETayfTJUv91MCWy3zCVrEoiQEpjGfxpo5U",
  "key7": "4s2jYPqWeCD1VTMyabScmKLQ6BmrM7NXEyg1iX3cQwp5gBg4mn2DURxzkSCJhxvBoCEbK9gpr7Z7Nd5BW4zKXBPh",
  "key8": "zQhCPVBhABRwo1vmRNUteLma9UZgqtt9soK3r62QrTDvt3u2BKf4AXGAg4kYV35ESSzjUvf2zS4HMhhoFswYaA4",
  "key9": "2M2EwAFukMTC2BqZ4gpdR25C1Fe6xfBrr8vgGD9NGLtoayFFV3GBBRUzXMF5ZAakVkdMRvQVwhz4Za1oRGSbDbdR",
  "key10": "DrgpGUHt3Lf92j1iDd3ubhJYoepy4rJ8UmT7fnUVdWycHT4cUoBZJiqHiAPkU1Mq8eRuS91Tym82QgnoQUiLC4M",
  "key11": "4fF5wv9kE3SDJVuybzXHUGrxjTvfKovwkzjoKtcbspMroT2VZpRrpMhN4KhWo5uydCm8HgWSTj9MGxZ9NZybAx6Q",
  "key12": "1TwtDWPqX1ShraL6BNWHaQNNFeC8mEFbKCMTAT52pMbWBjGS6qmt5xtZJXQvgpwssdnW14YqRVfMp3iNjia2nyf",
  "key13": "3BWtMrC2ZPcNd3ZD8MeeUzubRsc1Kzy3madRKZrVbhMN6ombPkGNSfUFj3Etps366kDXEMiH67m7NCBfeQ8HRe8M",
  "key14": "3waEFLwKU1VucepjT9hdkJfKwTXnkjSWVPBRadvKqdP4XubXdqp1a42KFdsHEQ6MRWx5QUGXAYH6q4pK3kPJst3v",
  "key15": "2nvTU8fUagWxYquz3EoqZGhgkB8Ly7AqwAzP3YbFkb3b5ZBQzmeZZf7W1QPawzEgHFc6iW5BL4pVAXE2iwWPty58",
  "key16": "24EfTj7W6nQY5AcPxxZG3crESHZvQcUhnEC3Us16cFo3Wb4TCoMuxpQ5UpW4Y8jV45crk2tZmkahuGqCh9R59f2i",
  "key17": "5wVxukCSsXGSfjq94JsQAYr9yMfFZ81UfhBTFp59C3XjYdYgK1FgMrZEaPkpckMtYzovi4naNPDCSwPrduUQ9JcG",
  "key18": "39gMuJKax5GxSEHQa4xjgjuTx6Hx58NAo3F31yRsr4SBKexcgjxTUS347vTQprcmx3hZDpK7tvTzwEpCGSRSjun3",
  "key19": "nk6xK6XC3MVaDThimb3gMPrgMQjSK2WuH48zLtS4y7zG6kcVcx3EB9h3Wkfsnbfk19LdrxBxiAEGHGRGLtFZEGE",
  "key20": "5ngB3y4X8hziW7MJiHFVasjs9JfdzNmHEp4rB96La46tmMm7YnbaiBGSoTAojQgKtK7tWwrGfMnwL2ox9TdBhgvN",
  "key21": "52uTbeR5aoiube6kKy78HnHHmKyaDLzv8mL4xyVzKtdN7aj2r9xfb5E9G2mxZBPPenR4ECR5DqAX1XvgPieC7xH6",
  "key22": "1KVfJsu2stLANffWE6kg8nRreHW5cSfZGY6G4xBmjrGDf7eax4xrbR1SzfBywNbzR1Lvaruuy8NBuzq4vWmZh1o",
  "key23": "5t3yLneNXqUwAsV9Zme9ap3DB1NVNVnf9mMLxY7cVuWZ4VNMfCxNZSoXX6yuNU8jf925ZDFJJaxZ1WkH7Fy4n9ZL",
  "key24": "BNn6xBQNvYoDDGpTuqWuM8xrXwYhfUMqSJ2Dc527qxd6tEU3TajFXdvPmp9mZ6E9CZgctbnG7nYviLak2eQHJWN",
  "key25": "63JQUHcHfRu9qcEWw5JrbXWWZ5x5YRn8pEkg63TNwqqnCFFQCYhZReZUXrcqUcBBjJSMPiciRY3FhnKsTcEuqase",
  "key26": "6fjEUKRiuy4XDt79JT5cSjvT8PixLUKyygRGfS96EdAahuL256QryBxSG19zjfARcboP2WHKoM1CM1Zo2DnwyMv",
  "key27": "5UVKvj9JrAZAJB9GdWzrDHze1JZN2ZtzMK44cTp1GFQxsw1UePjADwQ2m7w8TV6TDJ4nGagLQdakzZw1kKb1ULBT",
  "key28": "2xnoL7XBPUkBHMoAfvDgRGDF6WefaswzrMLJVm9nZdoMB82MSsfksWZu8h1hc1ZCozfhmMrhvnsyeMQUVR6DperS",
  "key29": "65hTwDgY8Fb7EP4aAXX94JncTqE8SsHo8JzcdTdoJJzjxHDFViYnmRgsTx7gWbsz9poLU3Q7kp7mchCnaSJwznni",
  "key30": "q4kbPDXh5eYmigRQKoMUTMvkHpPGt1YgyZAfjcyarGCfiesAoajcudWa4BWc9gqBLyJXmnUnUmdymFx6T1AkpdN",
  "key31": "2SS8ZgFovhg8LHh94ZQsxHi15kSMcqr7ioCuHcomYjs8kvSgcKfdD2qE27ozdXsBRrqVxMmK7gCmNqXErwFNPkXR",
  "key32": "4PyZ2vcz45aDcXUjWjtjZtnjYzdKjTjZqmzz5Rq2mUsyezPybknP5Hs7YG3q6um4sSit3gwj7Mt5unWjqwZ9RPoB",
  "key33": "59kZ66t3K6UhqNo9YV4y5SHwV8NJrgTnBy8FcMtyVw2xfupvPeAkN5M1avooaKRupCKsbYEevytsowdUWqv15kmJ",
  "key34": "4UQtMPHpGJrDL5CZg492RihjsUKJKCApboP1TFgvSxUSmXoE2fqr51RrELAFE3YniJQDc1YjTwjHPyvbPyksthvF"
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
