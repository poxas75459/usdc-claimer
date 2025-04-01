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
    "H7mQYYrFxbvJt6jMsurPgkW55RiRbvqED4oqZ1aka5Ee2t6eMbSUNDSwEFtjWxVjPensUEzQwF1WtzDAavtbHMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dicKJjMZWDK9FWfRCubSQtvqSmX9nPFR7pkmeVRNZyLzKXZwkFww1U6iVM2FbS3GooPmj53WnXFjsw1VBjQsJuN",
  "key1": "4AV6aDA1ReE5FNoQuPyEGn4kUNAZga5ihwT3awK5Kwo1eax25fnxkBDSfUP8oV4L8mFmQrtKERUgooztVWoyZoz7",
  "key2": "43W9u683wRm34RQJkURACjBrdZuaLMsVV2VpJs4wEGyYbqVjQNHoE2vQxgerBva9W32YCUtvZB1RFqUaY9y8dBvA",
  "key3": "3ipMp5v6p8tQHTYoytAFv6Nk7MEbMx2BsJpTS38jLTrbHNz3W593iuFu4p22XNCu3Dr7KmJ9CSo4jryaoL8vX4Hh",
  "key4": "2AhESB4s5P7ozd7LH3YVrWbgkmNEsN1EVptqwzjy4kB4W2mvVaCN3zWap8jadSaszVk8uQQ2BXycn8xUYSBCymDu",
  "key5": "3ELrcpKdZuaj7LUTmNnGcxUyVW45NvwCLizdDnAiLKDyJGbL4Eag78Syer22sWLuFpGiqzTKYysuedjKE3zA2YWN",
  "key6": "4uFCfQMVeqpJZp8QXFweLu8CheVvL6cweN7WJRKxGmxY9hRCLSkxniCKRpRRoe5gM1eX5BWGLYK4m5YYohfgircb",
  "key7": "31hMbcdxBuHn82FBEDVAay4Mgw2L1T6AXE2UrTid5EMxxxQpMZBDorUqvwPemQUM2E5z69P9UpV5LZch72QPcqa5",
  "key8": "416jMR2w7x7GUyZMZevdR5SN1BvjMH3EhkdC4cEPnA4xB1ZYSCBrdArBc8yUS53efct85EPtejiDPdWF9Xda7u7r",
  "key9": "29b4F3VifN3DJ47a9hgMdWW4NLJvquSvHTTF2i73iukGULhQeHhqwLkGXcUhmLBdSQuE2UDwo994xjsm3mtKGYuy",
  "key10": "293kyab1muPmH6rvsYVtvjmG3xdWBa7usQx8Cqks8dfsSv1WVm3pZbDtkFxjAqfzZS8f4gLqjFvcammo5vuaZAvg",
  "key11": "3upaNQ1eaoGvrdbhN7aosAwA48JXkmGmUgSJX3eVu34UWmDM7TBb3wqLtZ3sBhRAN6injVqX7wqqqDR32EnbhMi2",
  "key12": "5REDVhkidvUzK3ThsPuaLwcbW3WXYvQWDnooURSB2uGZFMHpEY7e15mtnRx1Shk3eqWzJFf3ufwNiMU4WFbm3DAx",
  "key13": "559uDRN9HdgJBXM16jWLQokNyaZyu7ApbJvshhtNa8eq7AEbcLwUF3wqpwSq5MkmZYR6yFSnivMkr2LfeX2uHC7H",
  "key14": "2QoapbPLpk4irYvZ5FJ8spcnAhqiN574qo1pnKWEwJDKmF9Wzav8KKRmgAE1Zc5Qgn6xtSaADQ5eBpjGPHnU9uWL",
  "key15": "2DCnqpCSa7Eq72Nh2jiVcSimLsG1XfJegrEYMK4vebz9mahjUrVHXidM9htpVGXE7x7vMc7cmNoYW2rDcw2yNY5b",
  "key16": "3WhUyUNtgBNfnDdtEBPFG1nFwMx9EPh6CuUFXf2xdbnKcaTzUvoa6V47KXLnnNLZ2HPB5MJJChA2jFqAs2xMia9G",
  "key17": "2BGa6hLTHzbJ7686khkbqCH89NXQDTF99cjaKiYvWY366jAMGpp5pztAotcudZR4koNKjHa9VJB8Bsr1mcH5aWHa",
  "key18": "4xEuXoJbmn9qMaLUBayBaxNLrzo4csEnqwnj7vWrWeCcQukyP8QJF4izgJjoABWR24xVSQ4KcbY2x9XZ7jkfWCeC",
  "key19": "3qeZLqonhAhHavCXZwaKeTc8tiweXKwVtrLs4WBzXGTx4YpTpYxdeqcoLzSd96pLUdkEC7pYT3hYAcmrK9yZy1h4",
  "key20": "5LDSJ7Uh8REvCfDeCRgKnoaodr3raxje1F3HKD4RqchF81yD6Z4TLFWaS7xynhWcAwNQJ1i5vhMVDuk5Jk2eafJZ",
  "key21": "3Vfjs6cD7cYQMEiwUcfxx1vAb5Tj9so3D7p4eDuxNrBEz6pG9AXRtPyisDJsjSi9D6wzeDSm5eG6yahaqtnU4nEQ",
  "key22": "2zMUcox6GdcK84SFynqhkNYDqoRyiwgp5WNq1G4ZH797XNEMYJq83MSrJ5ELvkyWkTX3MTQJGRdWitX25gotHzQo",
  "key23": "2zHLACfNbf8qUhhZmZa4dZepxNu79H8uogudFq7QY7u9yDkf9NpsWuY9dCJymMt2GdsA3hicTgW9nYHr9HTZbztL",
  "key24": "44C9VNYw541agJJRTEPHtq7hvdMu8X8bpUFpkX9FW5fVeRkKaUZLK2neo6jnJGkxY1yvNdsy4TgMMTu27netjNsF",
  "key25": "5rVBcRCeL4tP2CiFwFkKRFekS7REppkfFewBSjrecrfg5qpDzeyjwMWYRxLyMSgV88WtgsiBPicXXLAwFN8zBL6E",
  "key26": "fpPqN3VQpMz5TkEeUtjrEb2k8NWch5sWcjbmUdfJkQfbtjJ8XMUMUyqb8USMQr9ejp4qSWZFVdkM5NNi3FqZvAd",
  "key27": "5gzpbxw9h1LGhx7aHPEVgMUQRoxFbdtxJ3VZntsW8vFVSVmhs1DxrbaL9VwjMNz9dsuwcaTDtZSP3SCqb4BgbcSa",
  "key28": "4FV1pD5V4WDk8V3etCf162fnigsqJKJZJ14MZtSFmWhrRPakQ7BdV9Mu6VJZoVGPuM6r8kbM93SafyN3HWHcDNSB",
  "key29": "3KkzhyegVV7Hbw7k6jhiD3udFU3dwWNeaY3yw7J4JSKnVPhpqTYc1HCHmTQS2FL1PtnksEgsqyhSqfHPP1FPGYyz",
  "key30": "5e3nPh9zd6pMJ2Mct4JZEBaRxN4sZLfpfsoaMAVMQphe4aNgikW37PgEKY8QjzXCRPW6hbJPa4ZEXCZQ37bNGeTg",
  "key31": "4zoDN3uJ1ZZJNKDFojQtYy5MutcTP8GvEnxgUjcZ4ekNkYL8WwUWKeJwGucWQXrwhApiKyKgrkGSvzCPMdd3H4wp",
  "key32": "2HMfD9zXNjWa1x89YkEuxJnSc8CM6Ytnzfz6yjKnRUZzsKzfoBKNwGVmxByQk5U4gUQWRX8RfDGXEK1mBddMXUHb"
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
