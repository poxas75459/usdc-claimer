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
    "4diSh2mYCtCZs5w6yDTAVKvjj2rAoJvjjvUzSv9twUi3VAZcYU1GGa84uPV9TuHoP9nuuPZHV2HbQBCgSycr4pbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7xbnDB4YvYYtJKsCBcvVcpyHGQK7pGCxMCzhzUdczD7sf7o6cmZYMRfQHVkfK76ii9DqxBdwFcrJmMZgeRcFpkD",
  "key1": "2eNz2RnHp3S9T6mtfwYNK6Y7jVt647k1QWJoFa9Zg4LBCUFmkU1L8GHCeaKfY3DBkkhEood8eRBXH9fnc3wXVXJb",
  "key2": "Ur3mjQivrxm8ZtmwUoDm2Hf2m9Sc7jnworNnbJAZKEJKMCUJtpAQVeUDYb7kGhgwsPsTgecHGYUnfPo6nUDVsGc",
  "key3": "5rzrR2GsVxahB5xC1xX33qhC9cs9Xq9X7gL3mpvAP3CyXdZEMcqQQyXQNADivHdQL8nibswQHTSV6a5EfhxxVU7a",
  "key4": "z4UbDZVAMj5QxkaRxeRpbwe6oyZLtcqSh4EkYxxGZSpTezkUJQ4A8rXBsLQgS4g8TvBhREa2dV16DebdkwWp8TD",
  "key5": "5yiLBgxbTvq7B4Z9PoXNowSwyHYN8RjNYiNnRG2QRsqo2qTZ1u5YwCYCrkmfJmsnRyAYzMxDbHWo8tftCAoURyBT",
  "key6": "55D2kP9d1xyxE738TfPH7uAmePmpJWu3nHHGtLt9yeSTKQ2AgoFyT6v44xsbPsoCJX5bwbRgGhJ8MsX4WBrCrn54",
  "key7": "26uEFVRK4622jPdVNZf9EcRijW29cRREuUMV9ag9oUMUMUE7sCa9shyRGJFTxAqUqrhUbxkjp9SPFnbGzV9NXgAb",
  "key8": "CvsLfmPXoe7dTse4qAWRXCts5HvcxVg9XYiSypEod7f5mHjoT8ningc9NnW1CYF4mgmksAdxPE8LtvBZPQM97V8",
  "key9": "5YdcxfdKHzYR2TB7EJ9bojuKJQMBPMe3ERh43BcbPJJfMHHFiNG6YLiXB6qmPk7sjc74TbohJswupMG7t6p7pG32",
  "key10": "2Espw2w3Q8xZgsUBLYzrbMUwQBYhtuc8x9xsfs7F6wacc2WZHBJd6fSoxamz3FFmUjEBz8eyGiiy6H8m7SwgQF9b",
  "key11": "6W8n5bsvn1m8paEUArx3nbQs44819nnJybdBzjF1uaqfQVufNxCNtTYXJk9DpuQERxMWV5sm7cctKadB9pLN5DA",
  "key12": "5R5DXrPEj66baGbk5YdrivikaSnVAtwxJJoAbBxQ9accHkDvYPAaYAZ8N8DNwg1a8gVK8iSewNKFuW1smMnqdECG",
  "key13": "5ewkfVvKnZHRhXao7HKG5vGSfThGBshroJjGpJB2qAkKHfiJwag4Hiq4RRM5tZewD2XDkhSgTyBAL5MkuBtVDK5w",
  "key14": "2SPzpbWhJTTGJvE6MAJCrkwzd7pB2cvTFSDBBFZbxmo9FKdRdPUCzLNQjxuHguNTmVWwQWJ1XqnLB3F7MRjKDDfm",
  "key15": "5K3b5jbDfUqBRyn5JtRHejfpQRcn4q9YKrdWGaYnxE5mNu3qhPe9oNL3Z5Q1AbteL2x69HdjTceFbqmDucgY7Y3A",
  "key16": "JuMPc4xChVdJzwYqS1M6Nv1W1kZiuD14LW8W5BT9rx1ZYM3H58vEGmsmeDefZuTM81WbbULBgLnfCDUc1bMaEiH",
  "key17": "4dz42giGRNfz344D4YW7nDKoswAeGHbvJJE3ajcQjgpuhaWGmDL6a4jFu7yvKPBNS1XuRKWDqUJA7kGwDLdGBFub",
  "key18": "4fDAcpNfQhYzUVKU4DWjn7eVESd9LAwq57gMdWHtbKtH1YtiVbbSGVtfZD7iRMztZGeRxWExKZmy7dnUi7Ybxzvz",
  "key19": "3FHstoG8dUkJ6nCo1RbSZ5gFo2pkkqrqqdGfir5BG64VH4KjQxSG6iFjhPkjLZnojRyPsTJs27qPhp2FdLsb713v",
  "key20": "2p2JE5LnZ7YGuwjxzgxQY6wrLBhiRZmPYiQku25utthC6cJneWuDbL47G59kmVU4mxjUj7ZYjaZPhJ7W3k6QKbSS",
  "key21": "33NEhNQysVmm3h49beHv3sMbjx78tKSZd1UjbGL4NwLDxNhryHM2ruo9FJp2AMtqh257c6Na3yZ72FawK4muSW49",
  "key22": "2tKbsbUQ5jjaLFAJrPfc5hqoKeoLC3LaGb5UfNFoJBHJBUeKXoCqtc9Sv7NhrjNqe3KjEkouGxhAMuVH3dm2s5Fs",
  "key23": "2832x1e1h3g7aiKFDway1XXeNbpLKvauBvjXywADZT1fBPjgb4jjm2goKjKwQZLtZxdtEU51h8MCAZGWbBBUQdRy",
  "key24": "Hh6dd6DnUqxsDKm37mfakmdQJRqT3mhdsU37zJ2zpc7497PPz8axfpCtTQWiC1CVSho6DLshEae1L5owZ21qKAv",
  "key25": "4CQSBrGN3TfKR8LpmbxrUE15KY91s6v6GyXM6x5NJtfokHADsbe2yyk9RUYpXkWTBvLHf1os4FTfoJHxUiHhcB62",
  "key26": "3tddxgydZkKV7AB5oowMs55Fx26X4opFmsp4rq58msWJN9VxwW6vEQ6AqfDL798RdHHrYzyRAY3w6SLkZA928G4t",
  "key27": "2mgEFPLYj8rywuMJWvaWvR4MPMq6xeMgdxUpTbWSJvDfbWfUKY6R8jpxd4RUVdvRHf5LonaEWoZbirFB2scaYN33",
  "key28": "3nGZSRPCpGQYWWRrTYq4SYHZnt2DRB8SW1c6yCrp3rTHQq6zRViDsP85k4GqLksL6LkyUKq74sDQxysGVmwQHfrG",
  "key29": "2RAhA23fzAxfMusiEbBDGEmQ64Px5pcmUQaXCJNMrxaXKkkwhhzhwrKtqo8Kx3oWRFou9655yus96WF4wfniHkJf",
  "key30": "3Tj34bGCkHJ9hMZYQsi1g32eXsbzsTzTjVfzCdRrqu65oVqCPCLoFFwfnwnr31wdCNdqJyVdXA9oaGYih5WLygQ4",
  "key31": "4CuM2vMeKwEepRpc1jsJf2u5eodvVx9W69dHH9pX57HdQyTt4Tce5sMHKkgiRkeBpzwHBd6BhhFSCFnj9XP5SoKf",
  "key32": "cd1JNpJhUGsEM444hvRMiTe57gYp3q9yHdiSLLxUJhR6z1hmTWpARXncyJz4YrA1ZCKAJQ3AmPT5Hucwu6YJghb",
  "key33": "5kTe5Eaz2TkcvMVtFFAMXGmaJihJVo9LVRtSQe2gV9Q63WzntRB1jC8757wHQoxxCQowGNCfRV5JxHpH3pB4VNyv",
  "key34": "MJC6ro3b6LDWaUvDBuy232eTFkW4BBpr9MannNfeUGyQuwWkttceC1eunc6eFc15jhsbsv9LzwHho5ynnMffdFw"
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
