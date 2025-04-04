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
    "2RSizJGS4A2QyytcMoKG5WrowtYkYCfu8ZAyaTjFXGLr3SasePJFZEUSbXHzXzCfYnyhAtLYGANn34BfxkcywQS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ts5T9v72cGf3qx1EjWQb8Xh69chtVzaf3cGs7GbvAacXh6e5C9AxodicehqXPKwX7cS4P6SzKiWL7WmpRCuZYLR",
  "key1": "5vTpFcMVC7Jqd7XnNaQmCgiNWNgSJxX1XeyUmSKqYjcTEKaH8fnWWUFtkyG73M3tmgruPcbijweBxJnCsXTa1Uky",
  "key2": "5pN5D6oz6ZQA1o2FUwDdXiQbKf8n95314uHy5KJyM1n7XjnkB2xY8r261XgL74k9gaTPgGLENo5be8MUknTxrLEz",
  "key3": "dkhQpcd6JS5yjNiVmQUN4QhcSN8bMUPpCHA58TumFN4X4N1Fd6vaNnDjK2a5kEKErgZc2FJhcCG9HX6DpbHn8Py",
  "key4": "66ndXPfQRuLrByM8ReMnGm9MZbT8gg8ZELzNgrUrmp5WF5dZ8TnqhvYq6sKJqzhfW6HiYXXNvtsBArWg35bD7UHr",
  "key5": "2zHuMn6TwPLSaVeoZRVqm3eHTgiSUEhy9mXoJnmn5JfWgn2Ah9rje5TSE3YuEUshiug5Dst1DLjxUpSpSJaur5Da",
  "key6": "2ykxHxwmCY9Hi524YFG6NEqpFWmHSuhs8CtWgT1CudmZmTSBLVXJ1SV6W5Wfk2FsU2nRLHRbw95yEAVp7MjTNso7",
  "key7": "2WGyck3tn4SS1itWCoyaY6sxNjniN2PrT5RnBuqFSzbXiYhaSeSBr2yxLPGMwiPg7NZx5c95q3bGz2SCcSLHwbDr",
  "key8": "3sDbB73nSExikoCuzNnPCtCkzfLJPyke539z9WRhDd879uAMnNVZhUpsqZvifh1Zd9RzNoUCpq9gno279cem8sKM",
  "key9": "31S5pPyw1nP9wX8AfExtBjeSZjgAwuQxBYoLvkirgUc3j4FJKTW4ZqaBCd2JHQ7YNudeTQYHyo2VcUFcGbYGKc82",
  "key10": "4Wa69Su2R8EtQ9YGQMopERcaTFu4Fdhq8p63uw6CSuMTZuhRhFrxnJZh741XU6orzTJ51y5dWnbLDyxVeQT55Ni5",
  "key11": "aHYi1jJpgGmACQeSM6xjqbFcXZhBvEBQWxBkDA6FRYUbUEWfamHxPbs1m8u2N4rBgdaim9cqm7emFYemGEWwRfT",
  "key12": "3UMs2bBE3PNnEm8nUXSPJm6exyh5Z2AbaPBgjLjbMUe8FDCPm18aV9vY65enHHCvVnNJ1WjU9z8b5wzcRdLy5X64",
  "key13": "39UjSMevBjBTso9hghh5Rn1RHaW12rmvmLFp9eB6wQXQYbSQUygPene4sGhBkNJHVDvr7vH1URHZ7aLuiS682FNd",
  "key14": "4xBd4ctb8sNERSy1hpf7LcVm7NbU6862LHGFWmFDa3uCAY3VpKdBc9AFwqUHJvywwp3hWbTFQosEA4DQpWjf6AJC",
  "key15": "4DNXPSMU3L7naLChqcdLvyUzEJhCntryxqhgEiXGNcL4ZSvSWEM8dGTMy6ofG4ocJGHu6D4GsJYJsLAiU9T7SCGQ",
  "key16": "FWFBaRBdzggP3h1FQf6QS4bkFXPSjmLzbtRqZz1aimyzSuWZ1gMsVCNrCFqKszEEFYe8dwP2tt4YWFQj75j3LTT",
  "key17": "2E7dEC1wpYu538dDX2DyNZYkWhk6gkyEpYp5xQ1ANms6949DUZGwzf4H3QUQgC6VGLMEuNUjyzWV4VVNHGMomxus",
  "key18": "2GixVQ28j5JmJUhHpTSDrcPTH8pBDCk4Md8fSbwbz1BDXyJFej5pJvNHXcmjWdo1wPfa2MXKGyY3fsNzknyQdfA6",
  "key19": "3viaYmZY9BWRUyWB7fTngxEDfzhyMnWV9jS3og6KzAaAuvAoM1QSTZPBzS2JEqwcoh7Tf9Chh8P6WnoibMHCq3N5",
  "key20": "3fiQe4fpQKUJRoGjoeA6d4nxf9DSZT8ab5MHnKUMPpsTtgpqPvPeVLcHdicQkfgodNZjs31YotYkPWYpZqVq3o7s",
  "key21": "ro7Y3AugibfXkWpvrN6YRfmtyZHYn51g7a1M7WKF2H3BLJ4kYvXDfbQ1vxdi4A6Bw5VcLHxDnVZEXxmWe9sCvVD",
  "key22": "ajkqf3c6Ky8QbELAu2EE9Wex4EsPZwiWUPeqBrVEtjpy6KVLHX3erpUacXgz4MoAV8oRQVTw9DayE5HLkC2HfJc",
  "key23": "5QJGsGFTRbv15yshkpT1xZsmSBEkVKGtsdRUaGtLjpHTFTmkL5tU65WkW2DNvkWoFcJH92CEWHpXFs3rbKYCxD3v",
  "key24": "5rGnZ5p44p4fpEBqN2sZaLCiqTDeZRnNg62shpcYwaV4isC3kCJLDAZYqUBS7Y9831hN5NeNPC6EKxM1kyzX2u7p",
  "key25": "5fmyWxyXePP2GD8nu36h5BL7SChmNpNmKvoumbAiqEYS41QbexkTK7Uec3SZi4vpNXvTavYTMVRsofaZViShudLn",
  "key26": "FK9J3kynKFDx4vVz8kLUDG2KEpTFBBfQpBFs95aiYRa2FxdMXJ5PFBhYd7S6RCcoVHAS7FUa6rJvkQq9hcmReUH",
  "key27": "4RACo56URWbFq8DYG1Kpo5Sj3sw4ScTFwLQsSFKGxUZCJbL9rjg6DDzSXnoBqiE8YLC5KysjvysjMhQVvbfY33w1",
  "key28": "4w3WwfG4FE4akxSQ5iCYaJ9nqBWtoDdSKimiNPVk2MKp733er8SoB5Y8k2occBQaxiBk1GAJMtMF8kXnXFSr2UJW",
  "key29": "2sdAMLPibBJBRTLHxNc7vrzWM9h8hmbv9gn1HoTrBnjfmqieNrrBsSqZX39ZysN4h7REKwn4QLT6L9mXjgN86WEA",
  "key30": "DFagqMy4m9swrXbbvPcDzTB1A91LVFwpS219Gmo7dZAUXR46ZUh7Ve6SR9e1i5or9af31Z6ZZE3bWsJvFRCPjPZ",
  "key31": "5C6fVAc68i1eSawyLdWaJpjbWzcVra67mVnYLkFnkv3TejCtSckboXSW5fYaeqHXUgPjH44maxGaTNQBuBqUQ2zR",
  "key32": "5w1E6jLjhFNKEHGmQ1Ri1TFKVim8sK9czHyqG1RRU4A8EaBZf83P4NtNW6FaMTY89pdbgzVCBuBG8NxDtFWYgqoB",
  "key33": "4Cho8bTigNnXq1JiKmn61TsSX7HLmF4ryjYJyWeSDCRBxjtv4Sgnk4ZtSZRaQTuzWGhZsZzvbxsJFTLPZGKnfq6x",
  "key34": "553yQ4wKhNPuXVeUWY1d1HiRprJpjj6Hpqc4VjqpgEdZEkgqLQXrXnaWbnLCVtbkEr6QhVmfbWSaB5DxXeCry4Kr",
  "key35": "9sL48obKK2LHaQ93NL1x3RYB1wt8seyvfpXUHtr2XAWb76GrqLfNcsmCD2ctYgfSaF9cVUhiX3aqriumdwzUJRj",
  "key36": "3JxiFJ5DoRxgVxBKCGEGBDDSWHpxGzLffF6mDguyomKmMKrLYZTqAg62K61z6BeBpsuC63vW3je6Z8W86k8LGUZv",
  "key37": "98hrVPRDiFtG9k9jY5yzJwMmob6VeC4sT9tDH7Gooxw7cCGBTrP77qEAsTvM1BY9oE99UVbhJ43krmQe7mXxMrk",
  "key38": "36dDtdLXgjwZg6hnMtMDiuv8e4SvHJc7UsWtoFPW7wvEGLv77QpEgjduco5pP4ehsgh994hnz7arYdjZ5CW1xXJJ",
  "key39": "4UDPGVLAwPEaQKaZYvtUF89jXkvb2mXLZsNp6UpWh4WGLRFQDHjGjoucUZJbyyMtphcQcSgaZwQaHXMpuW2fvu6h",
  "key40": "4X5RpMFZwKpc7x1VubfaqCj2qdMP4YGV7D416tXgkBvGLArgfBuBGNpbt76SRMFhdwT1gWYb3xkQaLqvtbkjgH15",
  "key41": "3Naj42FeyWSDbHhjkP55w8x1tWZEZchR4jZnNswzpzUn9Bek2XXKdtoskmyjLPKPt2QmD1YcfReAy3dcjKZ1bd3u",
  "key42": "5pkiZx2zCNQQF4jP4F2Ay34oG1KCHL5bgFe7RBk3PJhQJcUE67X71mGipwtVWzqUH9i7sUoBiNWYsUJEYgtDtEib"
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
