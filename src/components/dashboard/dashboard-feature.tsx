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
    "2erBhToxTRHzcH6dWkyizNkrWTTtXhp8Pk1dUx5EU7K4xUsGJgUMpzm8AxcKLaowRHNKBtkqyhFJUBFVa8vFLKe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P89GAr97eXZCFoLDTkiKQQWPjytzR9hD5jUDw43MbWbrbtrVtU4WJGAiy7uidcAWrGHn6FBBNVmLue8FNpSZiQG",
  "key1": "ezTYtFHnQbrkyTFWmocEy5kGZJE5ULcUWNHS5t2UGM3aeSKzcbapjgXFnpoWv4oeZ7TGmxWfUd5peXUEeLzoxYq",
  "key2": "5KZeqDJUdAsJ5cRoKYdRw36ykSgZoVGWpU4evjhV3DoimYDAH8KvAidpabL6b3tBEo85fF3CVzf7eNRTkJdJEg6X",
  "key3": "4McbtvohqtXGmAjeKYHK8ZuQAw9RYDfU7AWD6Cfmvm4rmQ28fdY2dzhU1wNywqL5xnE8b7b4rN3KUVGwb5e7mK9d",
  "key4": "5LMDxzE59WJevgWHECGzyyjr5ArxRrG6z2DsjS8V7qgWr8CCtagSGJ3T32isvf8K2N4qoc4NkehiFH6ZEYo17baf",
  "key5": "4CVm3qpCHQeH8dCUDeLrNPcnV5hGKYxRgWodBhKYT2v3s4fyseUze3pfUSA8KWUXLjnyNB68fgX679fvbAu2bzp3",
  "key6": "5ZDu5bDYXcghrfKn8XhWDhGhqm1WAt4YSYJLZD5KdgcQnGVxgFbxM5xui7AoqUZuqdgWWBrV9eiaaj8YqG9g3c62",
  "key7": "2CRkeAnXxG6q2KHq2jAFsaTCwQyEvVBxhdWT6jg11yWvDeNYePomjJ5trVrU5Aij5SR4WeP4EMg3LtScATU75hLg",
  "key8": "3fFnrMv5MzUAmDesnduGJCEnyg7wgm2AkkHj4G1tnXWLraZa8MsRW18bnKwNAWW6WXx3DAgMXgmtzAopR8begfMj",
  "key9": "5ZF7seuDqH2LSKRTovCjp2Wn67S5YyTiAMPVfvG7St222j8AoGz8apcCLEkcKTzDvrEqEDzDmCtaKdzWiqw9PjUZ",
  "key10": "dkVQXeSnNFS5MJsH7oaj5oQBUEFnp2YEEhJSs6Aqy1fUFSuBxHk67ipc8RgHYVmQ5TiZDZztVVTWhaRavziSstx",
  "key11": "2oD96xvADN5JJsr3Qt2qaHfVde7o7SxMJVGF1cscx8cqxU1KVSuohGBxbcBnvjJ7zKx4f2do3wH1kMrbogK76Eh",
  "key12": "2XTVQFiSxXyQja3RPsY5Ae5EXDWAhGynViVNmbUwy4qMM4AgWDNT3ezNNjoJnXPRVRS3asNQrHaZbq9ddVqydUgH",
  "key13": "2JBwRiLu3go5Bp4FJLqwBmSmdLY36D22s6H5HAwpSpW7MfW8M37RgQrMVFPggYsVVEPHymUSgQvJeVrPtAZFLMJW",
  "key14": "2rif4odMGFzvofmzUPQwLi3n9gDwXiXKErRc41w9k6bfCCG36VdxQVByyiUJyRcRryFcXpx1kS77LiivWWquJMxX",
  "key15": "53pquCvCNLAKHNCg3dcbzrwWkhM8JJk9ug8pKaXDPKCLvin2DdvkzfePSNB9JZHbke2Ta5hc7haWy5fDiQRu5pkY",
  "key16": "3Pb1FRjhxSBLibv3J3yioZuCLYCzFGY3B5GTGehDR49GkwV95SN6tQL3iYnQxzTR3V8ASbqh5RsEMQJGMW7QACFN",
  "key17": "2jx1qtMkUmxnJ5s11GwNNhaXrGxYYnmFu12CCcRi2bii69zULhHoUJNtmqorE77UdSoDpMmCJRjbJhmmchrJLC3t",
  "key18": "2wxm1KXd2swbTnXx1rqGVr9dQcG5ASoPWMfLVviCVZGaAA31AdBBxddTn1vDwb9dswfLx9GzuX57WM6FiViasLEF",
  "key19": "4kqWZLadzRgmBQVBTbT1ysVjvBWZkB5Kt23jEJ4TYkNio8wjHNSouBqvJ4VP73ri1hg9gSvMdBzeoxRZg8at3ZKk",
  "key20": "5SigGqgFEosDLkjweqwpGyfNoqJ4dLKGCQSazjYvLuSNPqaevdohXDGZRxqbDb21CW2yRqPCdGE474VP3ZfBmKwk",
  "key21": "4xzQyQRw1U8BW35jPxaSBhiEsBZMM92GZEmB8sJPehU6hxcyznFwuMNpHbyEaUNYj2wzRKfYefW9cfRjzSw63CSY",
  "key22": "2ZQdPS8mTnyA95xgGkjUMSuLQaVrdQFYLvF8yDedP436vMLM6vVgkvJCntJkZzyyZcmDtdJBJXPdKfJWXZMv9nQn",
  "key23": "55Fez2TUVMUR7ZuotHKXgNck4ZByD6xaThczAWNa5LRLRLvQ6DDmELSDshsCxTgEU4MUa25UmsWj5gsWLzHXWB6Z",
  "key24": "21HeDfnvB9XRdmsXACmXEruJiEgLAyxAHrav1MuaJcgATExX4LF1S6oovjxBC8mxsgYaZdp7tXBtc3hu71V5wcXE",
  "key25": "2owuyktHSdQukS7LZTjGL9gXG9Rx9oEr9u6h3UetZMZEjPLNRLapZEji9BZVnhfmcpyuSDeQj67vncb2CVsYdc9u",
  "key26": "CfwtFSeFNN5Fgyao3onwDSxBs2BfaDuw2QSoc7TQAKNo7pbWu6mX7YBqTr6Z9ZkdZYqsRPhSk2iQgFNmR74SxTh",
  "key27": "4NB1BZQ8tXZuRVoTScgjZmkw7bNsBcY2H1TTE6T2x4V99TXnohMM2N9xPPi9AYprT9HiJGsvL1Yee82xH8ZFdQev",
  "key28": "b7J26tXHex7DsDybXHeTLhwYbK4h6aY2MQwF15o54L2Njqw3ooGpWrHwpPBxKyTFmvRAFg2fKJjYRSZWauKvwx5",
  "key29": "5oPZRNh6KiEhpQDBpdkSSpVoVRLGDDJsuopVvcVmWxivhVi4Ep1spJQ8VCh46TSkkqbyoX3PfKMxQ3esiKdQh2aT",
  "key30": "2U85tYu5ZrNqJQRoxfgetidgcSNpbrodjK5J51LAi1kj9JAxV8aFC48bKFH7QEtL7mD3ZDrk4KVXeB2L3VPA1wzo",
  "key31": "5qELkzL1jA66y4NTNuBevJxHh313fcvyFNnJw1zWFs95tefm8PKvEZw2q2EF4PvKvStBvrdcoTZeY7kwMA6Hoe47",
  "key32": "2GNZ22Kws4aXUKpANnhKxVfVgGzVUUynX5RfXUvBsTBjKBfKVFFZMJR2xPJHrp32bjxLD6ufiynedoRvE7L6nQ46",
  "key33": "33K9bb7xgeXKRDWtWG1dr46gUeEtbP5KNTTQgeaxt9siBBH62x8NWQCdZ8pWAwYxQck2tQPpWgp6usqyWbJAidfh",
  "key34": "3E5SWRocQe6oLXyGMz4XAHdbfJaGML897ijhg9rNUQYk7bckrEnpUzveKTHDP8yGursKZ5QtRzxerQ88z7cLcoLG",
  "key35": "MbwKLvUswgtF4dbQNGUqtzeFZ4Kt75t4jMMe9GTbgo7ucBH2XDaR2hBoNE2hsFtsim7QDbFfpwqxSrzCwqfVad4",
  "key36": "4DFjo44Wt8jmxqcwSvHnZGVurkhMyVDxiDDb2rt68Bj81GWLJEUEWbccrDUmPAhQVSvF8EgEGFY1ZxAY546iTLF8",
  "key37": "5n91kimnW17HwGofbE8PejghayswzJaBUAgVVrXRDftgmazTggWH9sVrm4iNdi8MqK7n3tNvkz8tt3mQjiAaUrN9",
  "key38": "3K9jYWL2U6ku5s6WTx8LGLf5T2PcX3EM27wrVGo6k2gGmxdm8pirtY8SinCAsFS6G8xDMXDbTVUiXBqTcyn1tqYv",
  "key39": "3J3Vam4uTiQDdRa9Ra5LAkm3HBrhrSxs9MTohBTeVwrQ5Q1TpiikASMY3Kwq8z9rEnX8Ddr5meSD8T64sUqzznfR"
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
