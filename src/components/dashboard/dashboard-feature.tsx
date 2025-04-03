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
    "41Uqn7vGY2rwACExP5SAsmAgmWJLNsjbn2kZL6qMUHXkcDfLoDoPaZZMqeXRUWE3qpQonMpGGXv92BgFyVegF6tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RfUsj9GjHdY9pHJGM6sLeoE455Y5ckNQ4AVi4BCTGEEHqshtGtVXkje8AvCGH1vdzGjcN68R7SwYyrCnfs8yZBR",
  "key1": "TBPLtYTdU7aaXRUvD8xa1bsJUCZk65rvQPPazQccx8UtQqasA3kugN5eNQkCKCDZouvwphuBDoeQWjJXYznaoP2",
  "key2": "4yXNPmBKFhSKbAht1T1ZtkseHzoqqCHPhBmTYuwgp1WggcjduMx6wgiZSMg2MQhBB8vekRXNcEYyyC7dp9aFDZG7",
  "key3": "3Zj8DezNopDwvXKAeX7MyU1XQPcWrhHxeggtC34obZ9aSwm3HCRJvoMJczk7cDSKZS33cpcoYTbryPN445MA3Tn4",
  "key4": "3dsZks9uMyBwZ72rjAskxC4HeyMyfRGpwWqkW6zXKQiYqZ2UhW6FmxC2zytFA8Dvm8qRzBN7wwTbtRr6we51oPFW",
  "key5": "37kjtaS58hxg7AHZjKuELPu1tJMZKMeafBztnMChqvmr9xU5Cr3LNAiEE7CtAvanqBCPV7qZuKCw9hh7DgL7MZh3",
  "key6": "5eesgh5Ct9GGjrEYXZeRDY7reXAezm9rRMqofhjk2VL5tWmUvEWXh94YkjReJa2JpTx2T3JguAE1jN3T6PvogWtB",
  "key7": "pscfC8FUTk3xMV1zciPeUkSBtfMFbeRCvK9q3dusMmdgxg3BTmNLmy4trc9g5agzUEqdkYHsmpBReTyLGreFeo6",
  "key8": "5LxXePUx2JUQoCS6yzfWHAu776FLfJHj4X158ABbsedfHsHyDDPaPLBeBynL3u2FsqFrjxVFnXivigndLnBTK1Yj",
  "key9": "2rtnoCVP5nCfEcqRdZJgFuLrypGAysmD8EDzoEyDjaYVdTYjUHtK7rmmnn35ueBrPCATxRidUuoy8HxvejVyje7m",
  "key10": "3iQQPKtRDUjJbK7AUYqAZTyRg8FwpuyXiPcJC7w5XZkPPUMEjYu2iNQctFebVTaeaXfcjb28pdUMqRhBFZjFKQ11",
  "key11": "3TjDQYtJ2YqCTtZiBS3avrroriyFcVj2CFnXS6tyVWtouov4VGUQrzxDMHspKVFLGXKH2ESE8KCcSnig5qLawCjs",
  "key12": "4CisCvRvvN6gUeexggDQphmAK4nwThqrcyhSKQRaE4VRuMNwe7VUiU6RPWPUsHDNNpxr5FuznjV2Atuzx8aNqxzu",
  "key13": "4JUb4E94o2k7JaQSDn1WyKaRGTXxNNsAJnBDrdZRmwJDNB9mQhiE4fBMqNCnp3gHR4YX8kfjibBrBNwJFrd1Kv45",
  "key14": "4RKStWba5AjRgZ7XZKgxAWePeXfD3FsLCzSopWRRTtJA2wWf3kcTRGsfZWAhRBkNT1jNWi8knhj6WwN6FMTeXabE",
  "key15": "GF1qiDfuPCzmvvyEHg1chGVj2LW368xck2s2dUJ6X4xyaLKkKeDB5oBEYLDpnu8vZstn7AzFWLZdpCfT6YqEtYT",
  "key16": "2HVrGpdZVLsCuQB3CWy55WhfQdEc6XqGT3mW15BCay28NJmHWYe5E242vvQXKhX9rvDGzH9P3xJK5YNRN1Eza2Ux",
  "key17": "2SjyJj3AUsviTsh8enqdocEGNCL7qL3o5HiauuVbvWP4x3wNqNMjWGhrz5vyJcTgzJNh5kwuno64HdV63BAfDKix",
  "key18": "GbFuERUPdLDdU6crfSyLHYAEgsCiaF1w1TDu2ufc2hFTaysbtHUqydvFe2rzfw4EMMmQTh14Z7NxvFan6zJ49BP",
  "key19": "5kaUMmLVN7yVXbnpXHit5MiYRVVKhAJpnwnF85NzsB1UjRxaDwgwfG7MQGYXFoREgNkR1B9tJP7dFjNvY2y1gjdX",
  "key20": "5HBpvQRi7Yn2wzBA8aAr2LnugnCbeN8MdmmhQdG92VUkvLf71gLm6o2m7KUSfZZGtgBEfZwd93qxVwYxsdoH1pZe",
  "key21": "37AC8Tb65jXg2BaHp4zGgVorKGYX2iVKE2KfYzYPENwHq8jKpea84yEkAJGFbKVE3zmdLtZv8VrFZ1cnX6hmGzCj",
  "key22": "k757Pi3yRS9yEWY5m6jNU1TuqnPkqgzam4N5j3TBj6mXG7f7VsTneyqpB4tKtSxB75s7zELSQBrwaXEecwHeoAY",
  "key23": "5uG1dLzii4N1RGXowRbA3cLFvw4yv59xLmU8WCq12Wq3gxzUptYYKNBjKy6ScXTEMpLnfuizQmwBqpFpSoGhAftp",
  "key24": "2hS7ySmPKZKkYVYvGUAxKSgj5477GuvBqufJcYMCyYtFKmsRD99W3vdRawELCsJnF3uJFbzvENXZgS6xVfrmjvGz",
  "key25": "2f4QsEBHJSfjE4u5oJDwuzDfQiGnPZ3aw2myWAqte4g7iLRLgzWFTemB7NvPJoPVxoU2bu3UdixkjqKBJnxbR3rx",
  "key26": "Rf4gL88LyMmKQuDCGcKAMpAMzciqav8gCCCEHcytW2bfRvbC3AKE3pG1yLMq1UCY2gX62AQdgs5nKtEF8LKv4ca",
  "key27": "3V1juv7H7RKsdyNTeFesn12StmPdPqyAW1r958fqmkKkzaYAQtwV2jbaQFZWmpd6uNCzGqRCcRThhRiVXW1hibjb",
  "key28": "4J5naTgBi3AjQEdG2FKVwxVZCZeQw6L7b9P3xcrANio5P4ZkzA2cK5nLXgEByFA64oFALUDXDNUrXNitRS2MB1Xe",
  "key29": "2RmwWWpfPFv2zKfRMNiLnxqZvdN5SjNEanYvRNWmAmQizVjWiRHp2e4FcN1TwMaMHzQK6h2dU7waSGB9rGjnfoAF"
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
