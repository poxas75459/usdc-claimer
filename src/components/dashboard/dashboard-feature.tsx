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
    "4t8GRQvocQZZ3fnKyTrHJNoKck1mpffvMc3nM2cMzDPCJX2b3Pt13rq5WKnasqqGtoXLKqHY8c6ABng3qmhdqXQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4swAP16ApxKNtxykcPFLqHn9RYiiVzzDviGsWVE6DyvRdQkyRSRYhgvD65DuRLTb4hGwG2xjgrvgYHU87GSR6ZoS",
  "key1": "42u5D1S2quNo4FvNMuJNtZ2E85EPU6fLRqVe5qmqtRtCVwzjn3rM7KHBSkFQ9WP7J3JThDHBevZg8A5Xc18r37xG",
  "key2": "4w6Bc937xrhW6To73wzMeborNDXyMh7nkwmi4pWuTQ9JsRUvPRyeeptBHEwJ2E2j7qraQUSb8TxReNjZzvn4TwxH",
  "key3": "66oZiydK1Nt2R31qeFNdBqXYoomtwGogbtdk5ppPS9d8wKsoc6gNRA3u84YZAQkaWEBMmGvDAPynqK8JrVdGt4g6",
  "key4": "2A3xZhkUPzruugoNbYeeicHjd3T4XkawimNCc1Eo2nFxR9Zkh5Kj6AMsmGnMuGxMpiAW6wxTQKhoyi2Hw5fr6PmK",
  "key5": "2MLSeBpzS77QZNwxX3dgHzabGCtdU39vTgAq89RikhA4Nx7ZRTd3TQaxbwDgWM8en789WfCbXbjHtjtyJMTcATBr",
  "key6": "aMcDX5FRsUCDTgZPpZpF2FTRbh7XMPgPKd2u5WKRZ5rWRLF7xNj14N7zb89NB2DVFegXc2gzjFYfU4cnSyCgGXx",
  "key7": "5bu27wk5YA2S1R6GL9LNjcWXsRcdH2QgqhH2jNoVnhmUdPvpWsoHkik8E4CMBZMM358QccsuCSGfxoYUah2JXvXu",
  "key8": "4AvMJ3mEFEiVXdXCekVKHpKLnLabBQS559vasUNcfnhM1WHkM3cJsspj2Wt5eZXCc6usJTjULxT2WWQGZjkpuQgg",
  "key9": "5NiL8uzs3AGsSfDyqdh4MnXtwsHPVVB58wSoicjdL6aW9G5KN2nLMc8xmum9ED4B48BdqJaXoH6pYAWjimig4XcG",
  "key10": "3WMK4BhojKgvA57EmWF7SAZXJWs5MZc1nCda6mqcbUpKh9GEQ3azodjVXwthTrLDhcWNZdZz1Nh1Z7gsofkLJ6QD",
  "key11": "85dkdizVBDUXFtsgFFDeJRXjA7ZBtXRQvsJuQtM1HkQbPwphvS6CBwRm31BZF62CuDK5wwSmT4ZMjYFUgdwWNC5",
  "key12": "3DupcyL3stV7MAdomcewbTJT7y7bKjgk237SMLu7g7CPnH4EuALZd39L6NPqYpQipVHHkB1b4FWPriscSe3NvJXy",
  "key13": "2teRaniWfgDNASXSCNuiyYKnpumvCdCJM8J1447BwYrDVfPSPGSU2DmPTtD8izAcYzSoz9xp5apob6PH8yJMoUq3",
  "key14": "4tKpxmtga5dBJQKGb2gbRw8ZkhyNTsvhDS8AD5PKF8LhiEqTWrSpHoFXJDKFEEp6bjJffoPWCsjFyaXyTEubheSC",
  "key15": "4V8S6HvGEGkTPosAzwnPHP71Wa4Ahf6eBvRJajtDT2WGYut9F2gyBR3ZHuMSqqjRrY7BGcf8GiCZikckVcbkHdqh",
  "key16": "5mEPssfPLM4S19ifFTc9xYQ1x1c9U9JNJb4CfGJLF2xpwBvgykU3pBN1KJVNoC154TaWMJWLWQ2RwZmEi7sya7TY",
  "key17": "55jDZ4vDjYzkvA437uYNtuiv2LSVrUF5ksthEqFsHmRCin9XkF2SfCFdfFyhVax6p7QuqnrHsMXBryyYwvZa9dfJ",
  "key18": "4HEKGTBBfw7ekJDrNx2ivUhpmQXbpZ9Bpd3G24qyvAkfgcVDV11m1WiXnxYUC7wXxKrSimN42cQw91SpWjZBwr5S",
  "key19": "RKPruPLx7VbKq2NFth5ouuhgnAhbMdUprqPDAeGqxC65houKVdPxWLbBEWXgkxzsgT8x8cjjLrGV1rSpQ879tn1",
  "key20": "3QX2e6tujYNYM8vfQe5YAYGrqM87SUdpqjwDg5aHuurn1hT59zV56smM7b4H24dHaXeJoLuQc3E5oozUzbmKouVM",
  "key21": "2RjpQDxUwu5QfJTMSFB4jDDn5aeC6GWwHDNSHTAEFR4kJNmbF3MTRs3KjK4oNoa7Pt7sAa9JBBo8T2Hh4qb9P2ZM",
  "key22": "2YvGidXVFe421hQzVxxm6Y6MqneAgcG7yQXcZA4sjGq8eidrs1FFzF9Q5MZUuTQ2ghyTqLUig5baYUEvARPn5Xjf",
  "key23": "3ezmqHjrygabWHiTxWtVzYQwEV5gxMNSfbs46WBted9Tg6QcivqaXqC3CRNmiCgBgtJ73EUUD1uy8TbZT4vzv7xw",
  "key24": "3zPHc6pvYMfZHrvPQFCwwxN14PPEeZoEV1qBfCo4AdybxCPXbsMYz8JEjzHhfh2C6ZgMKdVYpea4xr4kTeBLnP2K",
  "key25": "2nQPbEoxKEKmiKS9BKNoDW2zgRJ3wrd6rHcaQFdieWpsM8tfaJSa8ZfwsnujrazVngAQJjF3M5AuHCvpyHfp5Fy1",
  "key26": "3uuqFPDHYZ6xR6jJt5eRHrJVsQnVzXM8xwy5q15aGwe7deybp14VFi4Eyo75zdQXVgv7QUAhYmiohmYGMb6DzkLL",
  "key27": "26TX7TodLtSebskWivQ6NdeqBomZUS2NxXvTdhdttEX3oM4LUNKKd6hkFUofmWJ5EnbYYxVZJGW52agngchvj27t",
  "key28": "5KFXg5Z79Xg793fEwHgDtZ6vswXDJPkjyEo1rwLvJAXvrLWn28mFFc6EsjbLKo5cJCRbteomCGTTmUJAG5kMRPJm",
  "key29": "aNtN3JivNF3HJUbF8iCWKEdi9ym1tDTpKrAq6ELPYVZQBk8qGfvFfjUkbstTTz9cMHF3nTrr1NTEMnk2WsUTTBN",
  "key30": "g2HeAN1C93cMK3otaDeSVU2fMnCazgnhaiev4gMntdQ2gcmEwGESy6XdD51sQS8hYjXRjYrWgyDh7sVgWyLn58y",
  "key31": "eQAHsCWMs53XcEyixCJaqJ8pnKng8c1SJ6frggUxiLwPYL3iQTfqxe8SvKLGQGJnd4rgEGnA7umBVoJanGdMEA7",
  "key32": "4QHnjm7CKugVHdx92Cg2koz4kyZpEKssKZ1PeX8pHMU7MbyBb3s1swetjMjXohb9TfDDCPXJpLbUy434c1GQEy5S",
  "key33": "3Sk1wQAon2QvTALS6qTmNncjhvZ8JtWYYUSKLPVnLV5nEsdFjggqbgstZRk19Uxo8V4us2uGsD5u6k9c7dZjHeD9",
  "key34": "3RGTFb27NYtg6qh4S4BQZeUDoGomgczt7kNKPpjTXQa5KVHweqsEkZtsCTjJzaLdyfXr1sJwNtT283Up2c2M4g42",
  "key35": "u7Ze8CXGjxU1JVtx8sKghy1ijEi8NvFYZDVehZ418inhcpGBMJRidbUs1wfVdPDbypeXCyTbM2dWhi4RK8aM5am",
  "key36": "rhANTgngThB5TgNx36UDtwZY3cTVxHzd7a9tMJ3BbrcKgMBXNDNPbPZoU3s2weLXFjVbwT5YriRSXS6E3hQxjsK",
  "key37": "Vn1jjSmEWu7z7nMxmsRhfqDGVDLKoNMmk3CcZJxmZZmuZKyQf5TupH43hcd3Ym7bZ8Z4tszkDmLj1WWPDBtaEqu"
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
