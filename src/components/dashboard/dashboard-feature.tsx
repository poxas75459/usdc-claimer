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
    "RCpa896k5wqJAR5ngo6MzSChtXNvx8hQQyB9ZZCc2tLtosadyJpJ1vjzpcQMNSaMY8xXCh1mszh9h3U1eUJaaHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37zXw1gGYZjgB9zkMZZPMuDu4XvjR1Tv9VV3p8WscbG3XXwYCFZWwKwGgzBqvHfgSnhsT1MZeCjjBm8sEo5FkRbV",
  "key1": "3tqfBXnVT8oncP7mtjBDNQJVdpwwhTVbcDKc57M1ZWuzGZ9hYrsGEe1YCUGFgi86hg5PVV58aPpZM88YEL38zUnP",
  "key2": "4MKq5eyDh3pK9Fnd6a6nMyL8QL38XojewULcDuiK7TjWHU8Eq8HEvSvfjoU6gT4uydrBpXipL32W6dqp9Q9eYpzT",
  "key3": "2ysLnhANnxv8dRP2RuR7rNLRZkfEuBp1nU4yTMeggn5NuU5U2FaPjgjwmurBD51bqyReKMRHuA9VCFQWLANQtpoA",
  "key4": "5wmZus2p2DKmzYCzaJdex8Eg7psGQyBLnPNSctbFUrf11o8JCwg1ehj4Ji2QC5R8xsAkkoraNxqVqHzCEi3FPPZE",
  "key5": "3FNuVCmRy62DiHmab5EwEgYCnXbtaH8Lo2EKw4tTtnuQYrbgHACts8SNLuQBURY2XECzaskogng3a5Jz9unBP7Ue",
  "key6": "4X4PecdM98hC7fay4eK5evbXer6RekUYgxRkyfYdQ4Tah1a1KkzZschf2hPizzGvnNz3YXkYTZGtMeoZGAeeNf6b",
  "key7": "3oc6umniFmJhS7xDYfvgJkstDJ7ELqsmgvc3oSU85gZJwufhhvkKjQkJrc3XjTvCQsHR9GUrqCXkXfrwbB23UE15",
  "key8": "2nw7daWxbFiS22L5rdLpk4ZdvyYLhnSuaEmoTjLiZXbzLsJFDBJ6iYVNtGyzz4NWvp9RB5FgsdxFxrbTAbD5LdeC",
  "key9": "5RfAY7X4z7tvFD9mFNCe2yR8scgHXmy57u4LcmFepCoqPa4g84UdfPc5dDXZ4ibmvKPrzWiCmqWggZc9zndeH979",
  "key10": "26USNvZJunCFnKPascYE4zQ1Ev6iXK56PR95VgkP5fuBubyADMp22ZJLzKTyRXL6oRwQAhpg4aLKkSXjVXJYy6Co",
  "key11": "2MYKefMwr1Jhcrt1Ert2aHEZx3GWUYv5qWk12gynRrgeduNq4K124yP6xYyvm1AZYLibxqBMd89ob2CAZEZcpf2",
  "key12": "28r87sYTxe6Gby9RyzEcfrLUYorokMGuccpXtgYXjyraQzoFGKpi38uMPYDxt3Pm7zRfhcqNwGL1mPRBe2JinfSk",
  "key13": "WURw8BefXfvbCNBQgrafJfHrqESZuiVCAu7K6Hu9bnHYmMuFkxSpieL6XJ4LZs62wS9TywyN8vHRU2JjbbVtKvx",
  "key14": "sRHUR64mXhe96bjKbuTe4YH3CNxJsgfxtFiMcSudb194HHaWDtAZckBiQBCWjodap35Xc94fQAZG89NuBmNtHMv",
  "key15": "YLPawG7YLQcAmV4r7zFcwsrduU2fvH2GpkLoWyhLWspSPVSAYYyvvZVkxf6ci3tgoiXxgo3SSvBJuY1mHDfmmnL",
  "key16": "3kTKg9qNBfvvJWMy8ZrD9mvj8qusRXqLN9yTSeXVS8iCpFNiH5NTREBWt6ca4UKBsPZCkspR3HkvTX2K9c9pQXkG",
  "key17": "2AuZKmsoMt1GBNRAhwJnfd1YteoxhEUvHqjEAaRU9GCo4eS4J2CTXHHsDUinJwLEJQGHpQCbHbWkyCtU8DmAepeA",
  "key18": "3WbzFXH91driY5CcAEoihpeouCqFsaAG593XviQgHWoYty9ubYWBMvarkAPF9dpeDBUW4oixnf9jT4N1p36C77LM",
  "key19": "RqSj6UST6ZrXAmciaatyEo2Hueh36XyLrTjxZpug3RhA7HJWcjobJHWv8myrH9bKAadzApuS2ut5DKvp69WnqtR",
  "key20": "5V4DGZSbwvw6T3hbwyPnKm6feziZsgYJfuD1GQCMLMicsi1wPMfPnBH82hwdhsH9y8bLT1VWHWPTvBBCPA7nSGsp",
  "key21": "2QcUdi9k9W2sC2BZzS6znEbVn6Vm8kE3adNsGiPqsCFNm8DKDpYxPDmddskb1N86tqqvBoWy5oMSuKj6RhtU7dPg",
  "key22": "61JWe62dN9BPAGpmVR4sc4TSqAWUJ7J14kZ1rYQ8YFrEBvaGUeu8BLjgi1WC1iVeLreYrHwnFvjo3xyMoGxMQEwU",
  "key23": "5BozMzHdqPjjj3yX4tKJYf4FkAZ4UKCvZy3yKgtnCYB3gCLspQ99bqxiGiHTYDGnCV6c8nYtNgrAGzSvJcEMoRZ5",
  "key24": "4K2VkZtTFjGV2zfKPz5JBv9NrC7cU6gwrv3oPPTFj1PhXfJc5iS3rTxTEa8Nujts4CCT82eG5Pfn6pX7aKeiYhhG",
  "key25": "52zXGEyD5Abnk252Ga1PnswGVMwMLHp53uvZ2Mbo9m9xLrozJPwLdVkjjAic2D5LoCWnJ6fKDamm31wSdZG7HPro",
  "key26": "5E2EwEjrJcoUf7CT4XbsA5GZ5kba3F4yAzqV69C2LrqgpL6hAU8Bf86NbEMLofpTP4qTR4UvHWbZQLChWKhia6uW",
  "key27": "ku855VjkbXhqY2B12uiki6ua9mL8mUJ7zgVGFW2kJs2LgKidpoZVjrNLadUiTY6iNavMtKeyqcxpFb5nZUywmV1",
  "key28": "2SRrzupR4ie1sGN8HGJxmwm4gwbepN9e79VSg6GgpRjyG7WLH8u5m1SNzHefoeTYLPYqddFpmiU3K7P2t7D78d2L",
  "key29": "32F1BnJSkFcPESGkF7zSxPMnnYiiif2paa9kVsTk85RycfJRWv8kQTu5r2HrKpWn4XkZZkeAHrgBVLE96Sheo2oQ",
  "key30": "4HnWr2KUFjPB6AnvmbZmVa9w4AdDahyi4WHte8F3GedapUcYc1kdRE74Za3LierC8bCLkh25G9bpbB91ezPqDnsW",
  "key31": "2c57x6zxoCLXCTsv8ViqqLHhcgw4XFWNAaemzLvfQydoMApdNtos7Dz5BuQ82uFAbSJ6QtJiwGGQth3C41FJhMUq",
  "key32": "UdnZLCTPUQz7p3VUGZwmdryuAz7ERWBiU6XxKJtMCReK2gaPSfnhvYc3PAPmyqiZZcxHHjqniwzKoUj8phat1Zk",
  "key33": "4JtzANbkVbSkBpT8n13hsKCVA1o2ApDy26z3RAUD2oHTdceEnYJJhpFNTWi8siDWPxZorhhRY3afmkehRZvEVvMG",
  "key34": "677tU8jgrh9hw3nuVy1tsm2iadJ4WCABnMCL77EeLC2B6mN72F3jsnkTQh8V8j5mDb4NquDhU5P6hB1NqHtazBSo",
  "key35": "ca6MxFjFZquSPAh8WtsfTFxVhcjM9spyeCUtPsimpwKTgdv4aYM8xjLPvFwK3JoRsm6fz3ziZ2U5GrdLqRSmnJ5",
  "key36": "2jS5yHh7fMssx79hF7WreUhkYXNBbggxYfas3xdtVfjKkfr4ofZNgAzH9HUGRZDQM8yBCn64TMwjmwKxXEEshU1v",
  "key37": "aHWW6ULH7Ji8xtz7EPV75wxQu7nWAMvKq1tfn9RUjmcZrds77mgMM5mo5WUAKmh4BLFs1nzd5uAUuDpBxJ4xJXq",
  "key38": "4EnptZby718s6xPDgijGz1Ar6tzf7v7ZCXzgnd733tbFw1ta9VJ4fN1CDnv3w5iCaDZUc29e8H5R52nTrFJmTCQj",
  "key39": "2aNdA1xP4nKB7wMSiUvqawR66RvNVUgAgUQA7B4iUT9PnEMcrsuBWQwoDwCR48zbghdLGPwhpHbpDdgz8TcbysQ1",
  "key40": "63pRmeDGZRX4GzD9fF2PLJkWQdjoZ9bvcqfbJB3JTDJKgdinR4xYDAw247VzbtuYmesRoKjoP5xtSYDQUW48jAN7",
  "key41": "57cE8AQwDexb2XwxLMCcubnpvt6ZjGDLm18PrEcne676TmvQSiuWRTpzRFThEHxeHCnAAX1jo4Hz8d8HnveeipMy",
  "key42": "4DZN2P5zotwohj3DXpywtWeeL9iPYcq6LuBR3gHv1QjSisEMUNyM6LX54rpXdpf59CemeGzYEakQEhYeXmLf7xpa",
  "key43": "WLBW5nNV71YHGA4xKwHvFqzMJ4m6K7u8oBdr7crj8i3Wh5QyvfzAJcY2kn8W2kmaV7WXsUdeNMVYQrikuRYJZdd",
  "key44": "62vwEX822q4HCNa6zdpRUHkkRvXz7oJpXGoQcELb7Z7tHsRpxeqUJCSdCKRsnihzGYPnqfJGsMRMRE4oUnxPkUi5",
  "key45": "7eToSTStQ313mkMjFScpop2ErE5AghiDhCmq2r9ooXWZxuNxgampFzwicZkX5usg6tXYcosaNc5fk8swX7iEVbu",
  "key46": "54a7rA2wJdLAL2jnf8StS4jQB5ePL5bzG7mL6kv2ZUKrEJ2tvCsAVoySyAa8UAuk96Anp6ew2knTbSYTxE8L7tZE",
  "key47": "3E9zYCgoYn59RbkPSDj9KxXP1vtjdAs2WKEwUxaLDfYpVe8VMU544S9KAawjCGPVUey2kKLN6d5YDuEkfZMSaNPu"
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
