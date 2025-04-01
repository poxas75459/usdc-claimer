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
    "3DUQSs7FgZAG5HMYhfJEupWHQzZmMDDBxZYpRumK7hhwy9A7qFXPRAyKf9qu4R7inskZ9PFJBfjchtrL4yNUx6ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZFtwSKFBeUm9ojosv44Fp3mVhLJx8tGmVdybqQKxEPScQ5HDkChyFsG7YniaXGBfFt9E3ACsG54FUTMhMFiW83n",
  "key1": "2yaDArmwagJLURXDXCzCEh7Xtq4NSNvaEry3BjSFLbLiMvjgebHFm6YXZ8VTzr9YncjEamYrQAPDmrPDkav2aYro",
  "key2": "4ayfLspPB2ST181uy2B1vmhnbDEj3kPZ1DsEDBUxLJnJyiSpXbveEFd1R76ApoAzkZZbsFxDV1HxKkta9RNvbv7Z",
  "key3": "5TUdf5oPBfhZuteTSTmBoA4jwUnwwr2ogD4dLFCBohsayrHokbvnHheqDTkDC1EnTnJdurUCc26jDMMN2FiU7VbT",
  "key4": "4sHG1Xho2eVbtKpq4SK6fg7d1HRGXTYSBP5pGURJbGdUFp9m1z3Ltc7pdbFezsHvmpBx4uR6UaoUVzwBBUN2No2n",
  "key5": "5xKnFjCfuoJQoaLDxq3tVw9Zdcn7ZtiHFWXCWQetCrwat8GfFgGP3bebcCZxY9z5hasfK9Q4M2xujoXnYJe2oFxU",
  "key6": "54dBYLgRvjdV4sPKsd7iQVMeHntBpwX3u8dkYqs8CfF6tnbuX86aQeW4XAE9MbGwknXp2oJUDUSSFY4VsvyKsY7f",
  "key7": "42GZqFyWzUBQdtx1didkCFbm6QAg9F1Cvc2PScpNJk8ZDJe6VGpFZWbS63GcZsws1mR15ABV5cxE5hbmiCnzzScJ",
  "key8": "4gFUBevzee2UnKF7723nVNzRQg6dDeuyvmaqiZWcnPropVLYkdEjHprvjhb4srFP2z3Mfh711X8EToq57pdtcGEC",
  "key9": "5ed5gzDQkY4BJYW99nWis5t9ccuLEk7oxVA5P7Z1sXUDKL5F1MPTbT6PS5HSmibaZeEq5og3Uh5pbcTfKGT9raaW",
  "key10": "A4tiEJohLw1SJXmXeA5mAFfWnjX2pHN33NfhavHWmXQws2fDpHs6RrjTCXpqd6kUnpi3QgyU1CZQwbyegkWZyQt",
  "key11": "48qGwWFrECxzyMUD66GQw1R5LgPEMQhwjhDk2AxeYAvMEiUwhQbuvs1uqTapioSEFZsumZhEzVAXA4V5HyG6heth",
  "key12": "ZFXp5B67e4Ho36Atg6d8PVfYzwsKPm6xmBtEy3J6HtTT95TzTiyHAJX8EkEBxMZZXC4j3fRkutAK1NShke5ENbD",
  "key13": "3dTi86NyqLQj19hkh7TNaaXER4Nu7UsP6wZJZ1ictznT3dPdzst5nz4C61oFxMMvs87nhgsswAkriA2TLLPiEyM1",
  "key14": "4ntoGRhNozcrUWP2LPwARn8LUJUdeuzWMmhWP94ye9CTPmG1fGVgDTmT2nbSZk9aFWnCw5E3cRaNsn2NWp9BWnvP",
  "key15": "31XAMiJMa2PJvEaVmFWM8mW39UeRk1hgHb64ukYCgyyjAEBp3PkzE5A5yvSBJQhiWihxhMr22tQ85x41qn6qymg7",
  "key16": "4Ah3Wn6rCC9YiNxWnxV3MAzZcpqCUTK7pT1sz3SQ9UWmKyc8wbmXxNBexgVvB8Fept7vx9DpQY3JtruzUa4WVz3i",
  "key17": "4EVzwPfBDK8wKpKvUKSBRYnjRf8C3pbbrz1yKN7nbvWyj5eVcwNZ47Bdnp2EB4eG5imk2maUxDuZ5k37t2a8wkZH",
  "key18": "4qYHnJXu9SbkBKc74XCEnXggom9r97hYe44KvYuuLrhD4LQgpsKTTRhx7vtYwuYyMjuthUnFuzXLjJuzWCcp866s",
  "key19": "4yUyA7J59xegaRHmFXeaXkK5rPTh6qqkNktSU3R4Sip4hkdUfFzLsQphwtnYG3VvT6WCN198xRCzRgjUBsdSUnSs",
  "key20": "qoogj8q6WoqDoRcUUZ8W1WefXkzGRcto624EfbdJ5f4uGPEKgCWZgro689ek39LpTF3V6dLu2x4ithggm9FaJJF",
  "key21": "4oe2JmKTxfbX85pH4S8NoptTNazFg9FF5SiAFZcQVpXF8UuJ4nPMPHazcjiGt5MvYCF4enwEYKUYc4PcnBsKtt6h",
  "key22": "4se2z37MEftH8wC5BL4fEWAXn4zM52ESCqbsgsNwcSw2U8DqM2jAc7eKhwZxu6WAvYRndBNeZouCmTnRcFAWWqBR",
  "key23": "2wfnfuhVJcHrRqrPPnGAQdXG3ZkdUxhQvTwaRkKF3RkSrKDseq4oAtcrzpusmtdUnnhahuVLMZBpsxpi3hm6iEHH",
  "key24": "V7xUpjUXzNxqS2SJNMjazsjGCmCPoiyWoEDpSwFw17PKzNWh2GXN9AfESGbxxqS6vWL6xPtx2V5K5d2Kn5xkBDA",
  "key25": "d5yAm25eZLkFPdHNXoyA4WzxD9G7xroi9rsvvqw6ySbtSNSwv4vuBCQSde89rgo8jBDB5j8dN8KkGw314joSFpZ",
  "key26": "4j99DM7JNkbmixy1h8cFMiJGnFELU8YspGdUgRwayxLgqsv2fcsjzRNmLeUuULFB3BZ5Be63nSeyfixQTHScS1pV",
  "key27": "4qU5jqzXwZUbqjMeVg2m3p6ZXJAp8ocHBrnzga3PFoQz2HhcxQPp5DSoX5QzQCSR53RLzTx8AupKDv4m73Ti1nw2",
  "key28": "tgkFZd2pnt5JxafibG343ZFCpJyJvEPFNZbTgrXLXwEU2dDPa6eGSNdtRuavEp5YmCLLfkaRSky2pUztBVsFPon",
  "key29": "GM2SApoPuutNqCktqNTvk9eyptrLGgQnjdMu1FwGSv7GXL73jUsY8M9yWwTLRYn5QUrx1vUp1H6MDqJRUEUXmQA",
  "key30": "4sB4vaLEStQAvys8r4k27JPQYrk71ybCuDdN2JN3ohoDbU1zwtWNhiqZ87jnByJhH5yZVfi6Czf5rY96jK25DCTY",
  "key31": "38FgPU9hws5nzHrJSPS5xFRXRUzFJKYUNhipTgwLCcySkuqFkSYodPX6FhB1wD4S4ZZZDSEmWFJZ1xq3w6jRyYw6",
  "key32": "4pfKMeeBbhLDRGy1aTFxhSbeekKYpbWLU5eCogjQmu4uyRBh3GczS2kKm9PmW7RZsrw8a7eDyPAGxzm6dRjTcAgr",
  "key33": "2VDpFqd2FxSAgxHPGREGNka1qKL91WfAxm9dRf9shgKErURiZ5zCfbcvC6MtbXGH1UBG4yyBLEeSvwJ5ag5bB2Lf",
  "key34": "5oEUpSYvZHQ84q6hoSPonfmgnu4sKLgM8mS9h11cAHJRfyoK7DVi8KGjVXmypiQYDdiCmjoCSJyC9JV8gHmsnQgF",
  "key35": "3qwFWJfzQgud34Ei8XfixcsSM4PirbBKvnPr4CTvceCpByN3pRaxXhYE5cFVpDGptddtNpRFE9eqaoLwTMHkBwYu",
  "key36": "34mX9ifTz1Nwi7xqdFgyBNgfmH3oo5w6jtWZgxQi5vw921afx76LQv9188QirfguE63Z5sDrLa5WYF1Wb4ds5Xxr"
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
