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
    "5WANSRgHjp5P5oqhsF5d8qsAAifaBsRzv67ripd8fiHm8jN1Gy1TXc1RkvSijz7GqeBYt7wMAgDZmBs7cDksHF8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RVCDBVscWH9qZKQESBp9mPanJVdhC4Uvk186pEhnPMtv2jrAvguj77JPbkw2neRHZbznrCKAPx9NZoqA4m3bALY",
  "key1": "5tnHATgpGLAQrHZQaFt7P8Zv8yVREZJm2EBJbqQqLBCEneHbRtzxBBtXrvukLBKT478C8NWKBk55SWJDtSGjPYHu",
  "key2": "3igkvT4fNk76zWjnLfwry51AZLJSs3KQc12MtCzYYXNHut5sEoRkep9WyKzRhCjKKuP9Rvd5TNmiBSYLpvNHSZYc",
  "key3": "2P59j7CdP31GPEyJ4PQKfhXqKBJFpcRFNtnLRSj6XwcDUJ4QaeME3Cn7GQ3MwPF1e3m7ZZUS9r7h1iqUK3dMi8fj",
  "key4": "64QuXAs8Ugj5rqvC8Rfa7ecfyfEogaYmdxWhthrGoizDbFDiHikcSJtSMU8ijzxX3jb7L2YbMzrvJooPg1siiz9j",
  "key5": "55dURHP8pezxPugFysTvZxmKdfSW8FqJQUJvDutB2gsseq5B2h2hijTvrGYQvRHomj9eiCArsraYERbnQnfBTvsB",
  "key6": "5DBfDfg35AvdQkCwkcKLBNudD4nh1Em5VishD3GNkvx13RaSftEgjUz62Mcw9RJZ6JsCdxtBrdVV51LoMnGwFje3",
  "key7": "2E22FpHYT2shcZM96cJQKUdUrZHtx9fVe3UM7GttnZGX7BRKKs5TuXNFa6cEFhx3NnkF6vVFj52SA89vhELHLA35",
  "key8": "2AUvAqRDe94x3ueazWt583HyvLT3cpDBNHMYc4DFKzEaGEy4V2pEt9f1Tt4R3kc8M78VNSmcFbfm8xR2mDL1iowv",
  "key9": "HGAFABLFpjmQKXziFeyDW22jvaa455SPW3wWEh1ehdjmUVA2oHhSMrxhHVSdPsACv6RkTUf5oFxikY7cyC91dZx",
  "key10": "4KgUtSoRAXLnx9vSPvUuHrqHjoJeVg8rVk1E4VXHCH3Nqdi9237cVZvWoBw3q2a4kkRPQAGcggxmgemE5HXznaC9",
  "key11": "23cPp9A81pd3JJ1htFpTS8AYqv3jLtcMQA28Nu3LJXF1vzsj6ni9XpdQBiz3Sk6bPMUDsmv5bwejjJkE6wZg4iDH",
  "key12": "VoVQhjFJa2LSem5doEQQiMtDZxDYZQm3NMfERvd3PdJBaxUGapAaERB7aDdqNUiXyC3yLox7DgLTnMcJiRku8tU",
  "key13": "2x5g2cku8VpSaBeN5wMY1TrZrqF89kh4MngNgyE7HERvBQLq3hVHFv9nC9UFy5BhUfGAtgsYgiMsGFw74PoxhBHz",
  "key14": "2nmxZWzJmUFBmurGQ2yTvt95R4GdjqyLyuNqNrZXoij8faLkJHdtFuSzC7hzp6NmEWNCHcdAXowMteb7MGwbe9Gp",
  "key15": "2zZMkYxtxRazxs45eWU1XcF5oFcxLJCAHua9euScufvx9mS61opxucTY54v8Ajska8HguYyqY7E8QTKcyuf7nLMz",
  "key16": "2KRVSmy1maCdwWLCWWdBNL4D4Qe2zu96CzqtqJJ1oMnDTGxUZZw7eo6Kg369wVbGijsfp45X5sPQ76E2oxWKWWXk",
  "key17": "2Pd7wGs5vh4oEXE7ELeZDGkKpQqpGJEMzhtqSsGQwUya3xCgA5FMUcrFNbxiUHhYBNRb8hS88spdvRASZEHjjpxK",
  "key18": "3f5gZQTWusmma2kwVRUhA498fP59FgdaQDJhNrLfAeYYcmhzpa9c7BSd2Wm7NCUDYchonj4jRxF1w53Ht5yDk4Bh",
  "key19": "4aY4CGPaVKpG7Ezy1xgjpWrw2CsoLtGHTNYg5kBQi3BMFef4tX5fSqjhcXQRd1peRPporAerT8PUtxpW4KknShZN",
  "key20": "4keBuexagN1u8kvgmhEiDgjDJ5721oPYTFEZ6Ybub2eMp3HoFjb6TbWtkfgBwstJ9kfqwxewvrDL2zgUipHZuk14",
  "key21": "e9Yrjk8ss7KvavNnsjAS7HMnt7g6ymEbdj6sE1h3Ywyj3X5RmFhe4KARNFeVgQtwAaCTqBmzNGSagEJuixo2Je2",
  "key22": "5R5DG4GvPYyvTKfmcrQ29PU2w6YYj194Svma4z41v2uFRfpEhLTbdw7TcHSsDiDUVVGDoNwVRHeoq31ozVC7Urhi",
  "key23": "sHVL5sD6sqjbeBLMqHoR4uGgRBzrqE1rQdqqYW8bGBiEEz8vNacaT97QcWHn1UGGtnNA3wprJ6EWRc6vuUrRDK6",
  "key24": "3HQZDBbivCya52feYW8AbbhU1y7CvfpRUJgZUUi9MZmqn2cgdCUEo2Ys1k4iw3oTeWaWJrrteJNdRDmhMhTBsmHy",
  "key25": "46eY1tDxbDySiAXU33ezRKAj88eeRZmEpNRvrbruPF2rF87pnZGgpfoYqERAd1feSqtASTECvwTdVqfgEsxhsCqc",
  "key26": "2UqfUSM5RQ24i3Q9w4Q7WQ9PhxhZGpxQEwT74QZndMvsgs6MPAidmxEuEkVDpZBe8aUXXJytW68iPd3N4pDhQUfK",
  "key27": "2jf6TkArERNWmonf9DPYGDeogLJ3pHBSrGpzm4EY7aHD4jbUqzBHRMm9BL9HQEv9C8KwNk8SzaqujbW379p4FH5m",
  "key28": "2SEroZEeJL895veyKcxoMgKJyUVBudWTPQVoZqmagcdZs4cndsNGHnP92a9MqoNdTAH5abzZ2oyMQ5hAN6Gk7pRF",
  "key29": "27GNCSvfYqFWLd3GMkyPF2EL3gdNXTT8JJVEeZsi4Jhytd6zaYRugs2yS1EyJCedtNM8uskVUaUPMRfjpqKqgxQf",
  "key30": "3MCDs95Cibywh3zLJNLAostKcCj98JGmTzhEnXgkrLkMmDe1qtATZMN74CVswx1T7zQS99AvniRkjLYH2i4u95Wo"
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
