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
    "4xwGWTjHNzqg5JHyAC9Pq1jsws58vnbN2HnTCmcB3DeGAMSYiCmkNjZFJvedniB6M8RD2fq3wg4uWYFzXMaovwav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2egsSPN86EFskyx8mSciuiCxYAseEhtMT3UE3bAKUWdovnThbWib4c6C5JUFYDz7kfbnDaFs6eYncom9u82VhrmT",
  "key1": "2xq4sxGBJ59hHiFqiA5yHNbZd2gXFtXQkRTYGgAj8NM6xaLKicN46QJJ7a2xG5cua1qvcYNANA1rGvQk49VVuuf",
  "key2": "d29JbhQ7WUoT5hKRGeaMNAKhpVwVaTH2XBqny2W6ohGN9LbEhfwxyfJPLdu43NfKiiupd1Tc9a8PKirMCXpLdnn",
  "key3": "5YjorMcmjJK6cSFh6H83Bu9vZSoaQvU2QAtvV2nbLeKBNrTkqns5h8uvsPvc5uVXb4vV3i2bVTSN1mtzkgv9mDdS",
  "key4": "9RAKRcXr3z5k78vDKjmX8Zw2BxRTQhwytiZq1QPuNoU2rxAQ4Lr4sDLUnMGjQAVNGX49UKyB2MyDKMxMUsYb3K9",
  "key5": "2aZtQ1YGLvGHh77SezH8XXUxjzgq5Qwnj5ePBq1WbtAPjuuXQV7KT1YdxFkLjK8QTpXrQmQN2BtM9cBzMcuS7Gwn",
  "key6": "2oFXK3y5Lu7fsekRwu5nwLa2HD5b3UEvqcKHVoefebeZdzaLCp8L53RD27pYMwWx9m2vQrNKtV1CYYHxjwSjgPEL",
  "key7": "2VTVTrbkRxBA4MMcV3gz62JNrsgF66qbmmZsJ8PeWVpNQbSrtgSEHX9pPMfib52QTowJxkgXfJDSZPozvFLsgDwQ",
  "key8": "5vFZiBCo7G6p7Li73FUQVbX54dxbMUwKEP5FHffQHLWhAb1oaLDd41vCeBRgqY5Eemuh8eQsUC2QGXrYxxzRJgo6",
  "key9": "3t1z8FEYzCAPN6Qx7qBGU6zy6S9hhVJiJttbRpMZkhb1at4eze9JUQ3K5NptYniS1ryTsDeB23LJp9AQMv5zk76x",
  "key10": "2eNYR4hAsc5dk7pVCREgUj2CgHFKMuNjcf7evE7QvkPQLsm2GJ19zP9mmLQcRrvJXAFECNX3RdiSv7XfJ3AHx9wZ",
  "key11": "3KTdxNBT9ZgXCaAoJ712skr6H4cxJDgeEvnaeE4AK2t4nL2C61AbWfUv9BVgS1LBNHQtpdAYbQQAL2uXPpcnDxDu",
  "key12": "4818CiW2cwTNvHffK9P5dPVutzKwF1HpXqGufjwpUfWkuejpoZSgxz43oGsMxjSp4Z234db3CyEjQSPRVYdet4uz",
  "key13": "34bh9t5PKbhagP3z5bmh6fHWn4aGWVLsXwY1b2na6qeZerB73iFtcM2FRApNmQrtL1EpRaGWoi25Dnqw7twDFPrk",
  "key14": "3hAhjvDPRUUXnfHkoPCjZDoczbWmiqWGgmf3kepFYXkNzaH39HDPhYoMej6Tfk6uaYjPbqEBz8QBjvPMtZMuMuSJ",
  "key15": "F428J9gDoXPGS95saNgYSZJBuXtmDEESUBWcc3tqmVM1MwTNnqbcCwFecgtadswkVgaTbfK7pTLPNJo7M2ZWPiQ",
  "key16": "3BtFG3Ci98Wa3wWnmaNjnZbjwwBZCdNr8wQgfztnTo81mCtYsms7nFdSegMRsDPBEqzrNrweMSHaTN7bJGBwyHcN",
  "key17": "5xDNgkKj524Rjkgimrojaa6Qh3pumMbcscu6NQMppP3vAZGXMg1NXy8jY4gdFGDtdRaYvrjyRk7kMXVXJPJVGEkF",
  "key18": "32m2ckBNDJ4J4zmUqf1GwbRkmw7V9nTMk2aj651M9uUUEzDW8Mew683PMaKD4kaXTAcREqSSkkT3P8fDVEB8ZE83",
  "key19": "2bdqdERpsoZgfKvdvt53ZKEyzN6b98RWcs5VhZLXp9UCmMTwsdwnMz2GhhKnurxooLjffmS53skdWFfr93sWyAE8",
  "key20": "4ZZs2noZqGDj3rdrVjMVhp8CVndaMxUejbKwuQTfXhDRETfx9HrDYUxNMf3e5413mmMg8UD2dnn7NLpQuUo13YdL",
  "key21": "5uSPFp1EB3CBBiiQkTUVmJryXjtuhGAYdp9jvynKzUeS5tqp5PdrNP8KKsC4kPiRQehzwbh3vKyfJuwFofNe92tU",
  "key22": "49zqcNSqWcvCtfhZr3RWW5Bqv4B8z21QcU88cujmRPz2A7VrhskUteW2sYp5178zqQCxo8vRx24Cp7gNxfGwZXfy",
  "key23": "42e26QcWgMmbPU3vzexaChYc6mkWre7Nmzi7JUQY5vxa2aqY9ecs8EcTLVfkPod2kHHTXaBV1S6kNZQjjD6dmgdW",
  "key24": "5AuTZH69RVAFJmo98iHBjmaQa9y9pEwjWwwePwqvkqvinXttHhj5yyBpoPspze79HjP9Wr11aNJAW6sBHw8dc2Vm",
  "key25": "5HDPyVqYXYZCiqyFj5BSbGaJhkshQ2S7fhJCFcUxKrpGY7QNnEZgefhmnvdW2KQ4Jr8qjLmX5HC7XQtMEoQrug2q",
  "key26": "2WoktwiVdzjawS5HbG16sUV6kf2Fs7rYVdNp4RVjG4ZTy8TC7KXApXomLv6BRcMd3QYhQzb2mvmBVrcN4Hsnyy4R",
  "key27": "33zwsG2PzZyFMhfqYbU5YFwhot6tMhgwyeVwz6kFgYMF94hVzH2ruPas1ur1Axf9DkWRrEsnrbG2245mcSj6ebQz",
  "key28": "4J5siuCLgN8AdztNdcYVWG7PnSS4u9Z5vHE4hf7MWNH61eFo29s7gNKTboobQHU7RePF9xULoHFK46VA2diXTKWc",
  "key29": "36DhgWFK1xqwcedb8XeW8VWfy8dXqmb2FhRDNrhFggHtmWvsX7ioi4Crmyd8d5Vso1HYfiiEmsqGZScMLXqbg2CE",
  "key30": "5KLEZU9HS8Th1wRv4iG1kQEreNk9q4AEngHLC47gFDPEzjVYDhQ3peYSzxeKzugQuYh5Mqt9JBeiJ2HfFEeeKfhn",
  "key31": "5n4eGpBoGQ2Zz1v5B65ydjujmsXAo9M1xfRTSPzZLFquYL2b1y5RkhZxgURzY4R36huqMLwF8MRxMSP7CLBiVrgz",
  "key32": "GGXpEYPrqgrZu8bQ7rbDC2sZy5XQD864TcgonvyuAe6gFRLDb6Q2AU6fh5LjzPQBkchtqdzHkUz92KY5fR5LFfe",
  "key33": "2aJsavc6AzUwvLGR8anp4kswrAj6SjY2yM9MsoTaLzntRuHMyRyy89ejKMMxyfvYLL6EGMHwuzh2ufJap1PU8gna",
  "key34": "9muRgVJZX4pvcCqvMyRwrMdgdymbC6jZBkczyrxx1CoR1akGixdQjvtcFHYVszgeek28bkwsfVhHs9k5zSuJAuW",
  "key35": "4J44zEeDtZWtyL4ZJZsrhwEi5Je4w7ys3VmKWTBRbaoXMKgYR5PTMD8nk2frWPfpHWUzBhtrE4F4ooxiHwoK2Lxf",
  "key36": "3hvDZwB8dapQ1wJ8JU3YJjeGa48B72jHGw1vsG1Ah1gSjDkbjn4RpB4HGFB5LoJwJFpgsmNLaPMvFxgjqALMHwj1",
  "key37": "iHcvcQ6A5DTt6xknfCpECTGKvKApSiPdygtfv3Dkx1gJm14t3EURtd5161vuBCKGXcf8NbDpUJd2SyRRvw4XCcm",
  "key38": "4ooLgx9zKPvtZVMfH1tUdimKxxYpA7f1QPem3eNNefHNBG99mXSxLpXPFZa6zyjLE5LUePU9f6D3s4NgNWAXEYxa",
  "key39": "HLuVFWcx9x9jH1MrB4DFrJ8cKy1GsAR1PXiP6hbcbxJQzbPJnfYRT8EcSFJoX6Bnaxp983WauutyxQzQ1HizqVM",
  "key40": "46SPgjVYWRuoEjU7PfNApBPAeYtcuXeDBodbKqU4Z6Q4paMfpcZMSS5w97ACDBPmMT63Rgoc94QaRXAFMzbS5TCY",
  "key41": "33NYUXFutTYGPz32fVDxLeAuHEzrDsLRnX1Aq4X6MRZVaWUxQWnS46U4W1UXK31VdgWcqLN6Nq7edkwc9FRK4pr3"
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
