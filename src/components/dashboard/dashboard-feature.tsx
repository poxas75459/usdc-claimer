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
    "3ryC21bBiCSbDD3e595ksdUvGJmhULz7CkKor7TwyuB1NdLRSBwAzX6GvZzyd7Eht32hpymsHnpxgvWr9FHBabnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zyhJN2WSanZ4PYdiijxoFTqhNfmDUWAuffet8SMqTwQnqrd37NHobG78pzY61XmkvUwhb4YaVatQ5CZuKDmGwko",
  "key1": "5tRFAzifHxo3GyUuDECPtsMVAseN2DakaTn5Ysxmau3MGfWXunfKVdcn3S39wuz5YmxfPD7oVbPohYoGSiN816tB",
  "key2": "62ma7EmwKHkNx5KoEZcxoYZ43RFYGGrmwUCgw4PzdjkkbR9DQa5rRCuiG2Ak3nsJfyhB7zfB2FSvEzgo6D8NcxLC",
  "key3": "2dkbBtkn4HSRrsZ5KufxTkT9axA9WYob8nGUeKwEzaJNw9eJ15TzA1Fwd8RckH1NEoJ6Pow7cbVbuxDbEXvpTXcM",
  "key4": "43osZSLZ7XkZJ1i7xxDRkw5joJQ7oC1GMaqEFxcErjWejSfubjqNSoZauZVVrPhBdKdAR6VfvHSvcX7WrSMKsnYR",
  "key5": "2CMtwPsso4SmqCo2AjQgyEA8vbUvNrTsssGTZLchh4XtLKoRyFXcDMwmmdMJXcSfz5W5xUFgE7V9jzaYP6N22wbR",
  "key6": "2EYZS3yg5ggrpEiUZuphkzULuLsZw4HsuswSGCLtELdwJj1bEi8PpqDatGvX3wisyzcEYuL45sZGLr6qNA8MDsUd",
  "key7": "ugvjSFubQKHwX2JyuBCsyc5KN7Y2DFNhHGg9WvaGVnWffrisLN7QacaiJd76HDL4SkWbLsJie9uQ3ae31XJs3ZD",
  "key8": "2c7Tm9DWU8YWmbZyJD1f8xKKxUDvxbDPngBnJ5VA7nCLr2aWwU4ndq9pNPWgrWzEK8fQ9PVuXrPQcjWqDjHzmcAi",
  "key9": "2p7wMmGHpZW2e4NkZ8pGh38wNmYWFVnVur9h25trto4zsCBcdTpRgYaGVJCwnSNpdydLVX2PNTKi4RjpT68ppYFv",
  "key10": "3tHS2hfpkZYi4do8PHahLrjDisHdbpcMuXcLbSxZWivfD27x3bDLJ6AKYNe93siTSm9sNqK4C5uWyQVH2rjL3zMG",
  "key11": "62JLgxmpaN89M3esDNVTjoCbagD6JFemkcw1E1ghgjyZQbLi18RNNzmzP58tXzX23gLV48H3Yf94Cc8hTEYNtXLG",
  "key12": "2r1VNFegvC41D6QYRXoPQ8uaMYzBWSju2Dk9CKr5pW6NnjoRokpfmUJBJ9gQTLVgsPQfCRwNMQvSBTvVpd1HvoYB",
  "key13": "4Ma7ALPeBxrYZy4FUTL5LhvMtqLZJsQD4aiEpDCenJGaPCzBNwPL95wGTRJxVydBWkPw1FJvL9ZVv8Kuw5ZQvxXE",
  "key14": "3wYX5PZyvVbGMyaf91pYZMCZYuKgLkmY7BPMR8vRxFtyhAStZeMdgwvdoQoWRBBicb1wr9ph8C6CX3nRkaFww9p1",
  "key15": "r1Gir5kYZciukzPjTiX7vbuEWPwbcxSjCcjtXbXriB4Hic4Cgn4TAwwEigZaEQr78ova6KQ8HwZ1ipBTVz5D2eH",
  "key16": "GLmfWEBPkGM2nN6jvh3AYWFd4JWmJSShbmDhBKKV77uLUDcN7HaR3ZrGbVQGAisSjaFg7VymWZKRQndBrNNkJLx",
  "key17": "4o4ks3PVYADhGxZETJG6PCDht5aQKCHRkDSrV6HUaViYfd8NXZuTrhDLsXozmaK8hH1FTDeE2A7GtJK8ZKDY1wmj",
  "key18": "5MaAx2Y67naqfJxJE8wwnNfR2WSVqCMNxAp9QHGzAMynPus9Xpbg7NMXyiV6k1QNsZPZ7UwPRvSwmZaxu7mumgRN",
  "key19": "3uXA1EWyf7Z7sPu73GAYFgxtgo7sFLdYDX5EagMFuFcifQMaUpehkkyAg6AmiuiymBBHaALTC8tgzDCUWW8vRt69",
  "key20": "2ipVEpKvhF7iSFHnUPVdBaaiUehYn7h79xmSNyxCxbQNzM4gy7qFUimXupeUS6DBEkzEeAKBFGZfBbgv6MG2sCFS",
  "key21": "8a6LH1BKf8b5XbEG7GpHumNysZQ27q3TW3BYDq8A4SAQhdAFQFSwvFNsFCsqveKBJheVXHJS2cdvmsKCP7Qm8ia",
  "key22": "5UyoTWFcajiHearrp98Haf3KZtwojF9GfmrpTQaLGrVZFGbLi5ExMsZ3LLCEwHFdvwADth6zV2LTRv684d2G3kqv",
  "key23": "4rtAkMqn6FLd26zqUDbNvzLsHjH6rgEJx3KaPrFY4swoVq1NMczCx74gnqDPXdboxRsFS6oVFrnwSBgXFMFiodR",
  "key24": "3gbJybdXFZBUsCZPq6W43Mq9x3zoM6ye1CvsnnyTUDaJ3kWDhRu4kV1kmCnERXy7vMhUBp7AMxQituNs3v5FdMSt",
  "key25": "6catGKGvwJ6MW87g4oA86nr9vSeTTRXsgqS3xZ8XXquWJbYfKQDQN1aGzvVAP5K74Y1To3FMPBnMEaCRRSoAerc",
  "key26": "5gowp2YcwZUoXfaVWYv3fJV7RUdyaFi46u6AJTq8Jae2KSWd3d48asaLLm7xiUFSnLh6gyMvQXfXSDPgBFk7hLkr",
  "key27": "3kbjSHTKqLK8v3QqV9ePbJLQJmWT2BjfVPQaBzUSdJJBy8eCiuiZU9LP19Nqasw6tbh3CpNQpfvuES9Zz1dK7iXt",
  "key28": "5Vo23obDrUiHwjqb2Cf2N4yywWgpV1F5hYcbhBn8yNYRgvyjBZGeGM9AFR17PHPboN2XumFc4eS83A7dPrprrafZ",
  "key29": "2R3Ph7zLG1Hro12pzPQgXpoeY7UjrDNZEVDUPK9AtqyXs7kSTrsG6nJAvSuTusMR3Z6odhecyHB2r1LpDmLuE4Tm",
  "key30": "3xkkkUmQqX2BZVron4qCwRbZoeKqu1ufckoT3Aw1Vf9fNsDrLhex53wjj9oQjDXTaZ3NUQTnbLCeLtHimhcxtJhm",
  "key31": "4hKSc4Xv97U7KiNZbeqdAb8hNtW9wTTrGaa7Sz8UtW2Ho8epUGRLCNCeER2EapNwm12S2KrbKzoMJR1z1DBD8XJA",
  "key32": "4UBKjRjganDxWEZCaTT2NN5a5g8mJysjnD9aymVK3MqSyt2mAxV4E6afeQch8JXq68v8FrBNDYn73ThbZVFFFkX5",
  "key33": "3HzASsCN68yJB4RvofTV55VXrY9pFaPdkUT995w6UTeAvWkS7HhRApTLBpj5qbkR3gcvAo8dmmsy7e9r3Wiv4t2J",
  "key34": "UneAhLaSzJuA2g5FuLY16oX3pCfL296ASvxqhTW3sGPYojz9UFzSu3Z8zFP67zWZ6xnLJP9pCZVJ9s9zsgABTC9",
  "key35": "5mkb15zZmWATuSUiiTxoMSoS7Kg4ameqJPmWZsNMNhHBoETAseSTC5yq8KkoD7k7DpcBgN2fzf8MfiFMUQqcMxL8",
  "key36": "5vaN3Qj2yfQEvaXRo7VxuVMB2aj3EMvnYcrsBxFCkAVGBHW1C7Pohqvtd6JGNC3qGnwkjn7QefUmj1MMieT94tvs",
  "key37": "4jaKwrtgs5FeZ97ELAZA2cZemA17EVa3PjXuTXXUZexgjJdySAcVz4MLXj2AYWQPpQvb51LbyEtc4T2GLZe2pbL3",
  "key38": "5UxGxY4C8tqEz33EgmtVKZN5opk3AHHVsswkYLgSFbA1iRcvzn2SqF2p9zU9r15tbhWfqzxVkJCu3Uw5GyZBc9yU",
  "key39": "5UcwLpmwc6mFYkCtxJs9tgc16YisAQqMTqcY1vTuoGt1b2VeQArfPC4U7tKC6fcUbqkj2BP7GvZtniZ1j9aLuEyf",
  "key40": "5zWWheXdxYxCLdyJJx7EMPCPywxRwvABWvkrf4RANhpLnHn3EA8qbGPi7jpvWjxygVXfz4o7yq5vnV2bCu3B7fnp",
  "key41": "KYgR13F4fmmvv8kX1BC9zuQ8FuQAz6B2dh9Pw78RcLrYTYorH6Dq34BoiYFKHuJWLSXi2M1o9ov3s5v3Wr5Qrtb"
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
