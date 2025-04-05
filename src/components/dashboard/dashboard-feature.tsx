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
    "iww27kYr43pnrRJUnxz4ELf3XG8QDMsXVtcTmgNZKa7FvFrenWRNofK6Jtt55agvUAaLbrbDr78f3NtdNpbitVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "519AqvxM9QebRwEU9YqJga7RpXYccVjcrF7e9STo4ZUpg2ZHgTxybgxNurM26JEpswuRtgmr7BqBF8J7mAc99JmA",
  "key1": "4UNn3ckeE9L8BPU4r8P5itKheX8tYZg1RTp3UNpePSfMnSWrtvoUFp9Fm7wfCyXkXjQNcZMNCYLKofwXny8aqjbH",
  "key2": "58xPb8GG2Zmqzeuvq3JQyZ5FeZN1JmvMw7mEbknGSTwnWFAbtEePJUVjXJsYG18hC7BX4ikuziHbo641tRg2GCzj",
  "key3": "4VVSwb2U55bStL3iDkStbc1eSEiMJZBkS1DFSiR6t3XYxTVtuhChdKbXQK1LEQSUnk2bMZdkNP7WovxZCCY3yXeX",
  "key4": "52TZRhwh6jtE99KejBLp6QQ6GLf4XS12MbjTPghkAuyzhbrEPXnS4oStb1aoFoaH77U63mG9UkeEc1c8bhojMKYc",
  "key5": "2nEz9ZSxgQgXvgbfK9TtuQQHeUTzs4D6JihPChSf6TXdxRZu8nRpqmsR6GHPnfPhg8QNHnT92mrVPwQvZ4vrvjGk",
  "key6": "Y2xLDLA129bueqkVWWjgtLBH5gZmpsyDe8xnQUoCBr9jN7HGjTsYC2a4LyDLDAE2An1qSrmNsB7oWFiKSyRdcT6",
  "key7": "RUeyZzSC5d5mUzJBpx1H7aibtqsJLrWJvpvfvCAy23WsTS3DR6e6Vt3CWB3k6uXkpASDPgoi83V9pVWoNbp3aRf",
  "key8": "3muuoycVdXo2vGHE6DKujpPApHHiBKGcbnMXoJzatfXvMiMQAo1VDLN2rFm1im41hNjnwnGUw9ZUXMhrtNs8REpF",
  "key9": "pUAgLkVrrgoBKsqHhGeTgUEzDAbpyhTAMzQbQ72X1BbbSEpXwD5K3TXeh8WAyNsxAFJ1iV1rgg49zzmPdWKj5Db",
  "key10": "3nuV6e1RVokJJAqMpmtbuDeUSWn9oJnAd45HruxquVFmVtyZaroFDdcYH2ocCUDvpT94FNZ7iR3aG3Y2dpY3RdN4",
  "key11": "cXM1rvpZVivW7pgTPK3x3FbmuwfWVMbwL2Zbc68MQmT5dbhSXRwez1iKfzF5X9uMCbCN2Ex8jEv9dkmc5qGcjW8",
  "key12": "Sxqh3J7pArPn1QxJiG78Z9ivWvAKaYP5msaSpQQyFUFXdkyzxAY9Bn7icB3kcDHnGEp38yjvDN8AETeq9xFrF3c",
  "key13": "3NXrwBCCzLUTSGqHwQPerBtqWHzguvcAGiiJ9yHW4L7GYRR4fLsTFSo4avW2gcMZbtXixh8nr8RM3KV6m7CzGeCs",
  "key14": "4jEqN8vdL47r5XiTY7AVe9DQC7yngD8yJg8Q2VajUB9Uca6xCW6hkhqdJVgibv8xmdXRsz6LiK2PnbvpmpG4zMDo",
  "key15": "3iMMH1vSTifMyHCGKzqwQmQBsvmoumuNsnrRtUvSrszZZc7CoQaJ3ysRu2wF2TBRJWZeeGyj54qLqzEyQyyHnciq",
  "key16": "3KWRAhXx4RN2XBt9KqTv3dZ89PwmqZF5La5pGEbDp8Q7B2PgJjuJjkqPaQQGMdUZsnjpDjf2Qi1bWtaB5NEaTPes",
  "key17": "yUF9cX4NAqtRrPuB1sQJKN6sEs22yLKArBHMGgzfjcj116EK5eJQQ2sMUCr9nzP18DMVVb74xZ197X9fjBJRqBh",
  "key18": "5xCcLPP8cy1zCth4SdshnhsbLnvSNjqUfMPYcx6zkBCcDxYLXkPgkUncZjxBnvzgzMQi4scjLtzVmYEDj3z5LcMv",
  "key19": "4Geug14AXEdoRNPxZSLbLUPorQfWobLxU2a4VU236kh35HEhABGtoioAnjypk7EcjnsvdZoWUhf7o2zTauzBxmZP",
  "key20": "2Q2u69a47r9LVX7zaHrbq7tB2kzCrsQ7HQbBuu3URHbWcJMUPUiLtTEgCqaLrV5CL31eAdDvJ3rcCRRuJcR3RMiL",
  "key21": "4PMbBCxCw6e2kRi84AxQVqMQK5yZXE8vYRPkF4VD2Zw7jKKc2212Zx32Jrm8cEuoXyhdFYnKbfFq7JATcbTLQ67M",
  "key22": "8DksR4Pk6puFjvXdNK6fyZLDLHpQenMU8kaaXzkVuv9f4vr2jUhXqGJhSP5PVQ18B6zyW1S2aCBvuB9N4jmdc3j",
  "key23": "3SFhSCDbNs9tUUqCpvVyxCSmgCGEsdbEdQA1FgZ2QyzoiBK75mp3rRqquKY6NECzBTcLFtivG6AYPscgp48q7Db2",
  "key24": "5NQfExUbBUPRRenmgwbtNVjrthM3YGDU7PzcMm5XXzRHnHZ2ycQuwaWQNdefvqmbAej9kr8RfTS6yuoDy79H4xM1",
  "key25": "4FrnZxtBRKxAyLanfk5C2wva7HGh6mfAa3n1x29cezppqPLJegaTyarcCt7i1KSh5UqYWZJipANscAjG8izvBMSK",
  "key26": "5wUx7Uk9KERirMVVrkn6uU9DBQskETe9xx88GZ1NyA9Fr7fyd2heNfxPCgdGVrrbqv8pKDujQn8e3A1j5MGd5Cm7",
  "key27": "56khczv3QMJs8DuPDTk57Ue85MrTMeVV3fhqry8G8eindieGrMV722utGURDsJ3GEcTCZ48QtwfDKA4mWqAmooAi",
  "key28": "j5MaR13YqVsphPhdphpv9A4X9xqQnuyDZfKEnLoxXKdyCdeRjDZU37eMnS318DGeNExz3g8TBRM8xjcSSoC9cLK",
  "key29": "3mhSAruZfe6n5STbEzxaQAkA8ZqMWbSYRUKikxhk8Bvg314ZfauoL4agpbXrd1QAcnSeG37nCtsDQVsQfJnE942V",
  "key30": "36aQjguJgMGRp6f8h8K92izBwREQZXD3B1wK96AU8moXn8ER2bE6kCmFSUXmraYmjH6Fb3XVbNc3Q3rcvc3DjNbr",
  "key31": "4hYz9vq7m2P6MmFpMASj7ypfxWydiZrywmWekJeQVx6Hdhbxq7oeQrp138nfxQH3BobmdYUbYzgLuXdRYwWJMTqj",
  "key32": "2aK1fUNrn7XZDe9tpPVyi3825nx2urkNFoFtjVC1KfUwEAp6Aep4E9EMY7y9Wrzi6p5GV4nksUwQhSwRQwcamX2e",
  "key33": "wNnx516H3jbzKkWPxnottuFd3rK67C2MEDXks2JjM1qrUpYsyA5QXhjEjTpgX8RpgPPHFCyhbbSSQfRDRGwcHxB",
  "key34": "5qF3nHtR1exWHLS1tXLWKgQGUZPHsWYERJA6pVxLBBwQQHjkaz8XnNCT7BPFX3zz5ysdX3bpsv6Cbeev82NWVJY1"
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
