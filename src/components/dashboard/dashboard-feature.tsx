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
    "3h9pmhfRe11nf9hYz3X2Bwzqsa6gSfjWfBnkJQepjtxmV6R7fLPQWtFhXD4ApnWmgGDfkBfdT1y2m41gDdYxk7or"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VHhSWWrSh8QnoDuKWr4srmMWbefJreub61D7XWpTnxenPw6NnfPiR5ri23ucw4mzm7dE5f2QWyPGiqmiNqM51aC",
  "key1": "5G1gvCEwX4nSMiyn1p9y7tVy7om3hcTPn29pUWwftMdRMwqAz5nVEJX6kb7NXVw4gZzweMAvGWVCzfQnHA9A3R7x",
  "key2": "5hUg32dzJKc9jAoShvfAriypXe4uSz3VBjgpB8gt3V2imPQmDyH7Q8Hr1NPXdpK2eioTusyTWJxAo6FjAxzJeH5s",
  "key3": "4pVh7NLNfXHDFgJfeMkUWB61z7JzwXiTsGSTKVsgHenn2irosL7X2hHUDvb2Xm7hYmxdbP9Pt7vFWoSTkpeaVqoS",
  "key4": "batrSMxEhBiHd6Ryy5M2M8et9PPHmQMz4ysMVKj4UFtD9jH2RNF84bD6MdEC1Sq4FTDBTErw7AFfZJZ4Ebf18Dr",
  "key5": "59F62NV78h9cADynryhFi9rFbdC6ymzz5nHEqeAJ73aY25uUcRhxZthB13awafUFXbXRcDkjWkvumCq3y6JSVfos",
  "key6": "2GLTkqFag6qq2NjDnWrYhHkXscs5GABa2jh6hSR4G1D39fEsg4tDnL3txStUi18EXMrZ3kNQxR9qmPbAMxyhk5TZ",
  "key7": "3D2XWzzcXnRhgDX2X6seA3mCKsJMrwDV7XCeUCVYcGSYi52BF7SpYR8Xz3Sp2BFmRZ2xz4qir5JycEWCLnoY6WYt",
  "key8": "4GSyBb5Ay6mQvx4sZRufJvaxQ2zuu7N9FZ6LCaXimbF9CEQst7JafPdtxcqPeEUdmtL8B3cNzQvcn5SDC44hPLoE",
  "key9": "2yVcwgFQT9AmNtUUvjjCwzrWLv5pLfQnAEZ3D6RQdF6kXYKs237G4RAzCPDY4yBM8wdoL3fKzrhvsV6YAJXBH4xk",
  "key10": "5NumM8BsGXGjvN7ExSGTWsuTjaemNtKbPLAVo4pwPhTLoeTFq6MhgS1rRfS2Ytay53ALteksRTyMNwUCumFujswJ",
  "key11": "5YPY5SH38F9HNEEEJW7tJfnzpXd1j3J98XbwtkdCKcex34xhMWxHU7QN37HXNmKV19RRY3bGAwWhE1n994kF6n6v",
  "key12": "47ggPRBW5rKDa3UK2iuXd9LQMuRXHDwN2J6EjCVKnrXQURaJtmfirUPyUvdA8debydsbqVB4bMZvQe6N8CTnGrZW",
  "key13": "efnf8hMLdRzTRKjVhcqqw12xWoumD6jiE5A4bbDfADkR4apzTZV12GD552bEnzdZBMNW2MEWdx4FJ19VZBvx3js",
  "key14": "676QAr9RJdjusuYmZpjCFrcj9yPknPqk5XToCNY8QatMFiu6HjtzLEMRZtZAzLvid7AZqfUMyWKk8a1wPzLLBMSz",
  "key15": "5t16eEyPLFZDNDfgi4jZMXWBw1KbLecEs98a7HHVcD24cpk3JuLQ2nyiTGAYDhfYzuWj1yKYjTSvpwjWgQUZAsix",
  "key16": "5AkFjXJFC9nB8MasbjLtzbBFnYkzPx7dNKffCDMXSoTXrjmLuGfadLYsoc67AuJsoKEv7FcTTkBZWyJQuTRjijbC",
  "key17": "2nwiYnh5XWLJ4qKFx7VBY1L3Bid5ugiW4Z6moiugxrwbZ8SPY7uRc27AT3XuBffKX1Qva6WMhSyq95YjkY8w9cF5",
  "key18": "KkLPJ3X32vMzRWXNbxDSq7o2S4ugkEMPUmk4mtqNeKT7HzqjcipgHJt3mUpc5SzBPFVvVNhJdTaBWdr4y4HSX5t",
  "key19": "544LpsGYiC6w35VNngFZSXSYE8yozNyJMLfByQMSvXkAqcfHFceMGdoAipHT1pjqzMvh8k3gTBvAEod999RgYJ1Z",
  "key20": "2f4R3WvDn3SgCqDaFNvjarXuDNbQSEvKoLmbezH7wp1R956zwFvJ51jcpU4NPifTk6uzsxaTTsmsJxWPwtAFQe6C",
  "key21": "sAYfV6C67vXq9H1kRizL8fNKCTt6hS3nxUecf2byT73NFsdabEKppe9V3CC9iuT7Xsci6bCe2YtPW3g4W2tYJD7",
  "key22": "5zbLBrTWfZMcVDL55YRuMvTfED5tNQbzrRFaX9HrH85n6xNDHCNYjEwn7pVYpoRSrgvSSM4yfFRnx5iTmgsvMS3b",
  "key23": "3zoxyLSBXwd5aFe6GkWVvZdJbhwnWBaTinZGNCWKx7K3tpawDnvuSdtKaqqFzFbHp8fHJbT89fkACSj1bnFnJSek",
  "key24": "5nYX5m2e3ZZkChdq6rdjtEPujtT4zszsswubgcwpFHCrWU128qmQxZdM4PFkjcjH8oNkvFSK1i5gcMeLR2bTKCmt",
  "key25": "4ZEUAUrM7gnebdQZMpcRHvZvdbdpBf8GdUBnuEwojCMyuEmE1ge1J7iAQNgnkdcXyXM2kEiG3X5jrCuXLDiQrnyi",
  "key26": "5vdctX5bZnvKUkRMDKbPE1bUrVKomRV8YM9Ea4p89qhwR5H3CzrqdmxNT6uX5W2ZkNv9KnA8XyerEzkZ7NQMhATs",
  "key27": "5d8tw2f4XUwKA7MYhh4s9Uy7kaHSnAgcNBeM5XycNAeH7kHWTvhWriydFqzZ23NLUn8kBT5pXwnzrgE4BiHxBfun",
  "key28": "4HTNoeVvZ6qXWhDrebqFkkW5ArrSjLb6eofcKijBbVHruqoBNJxwuthJ2YoWL6YYJEbwFT54hgsKaWr87H7VTRYG",
  "key29": "qghRLECopeVSYhZa5DwfeDJ3ihzXuC9XXRF6N8xFe7FgNCn6g2GosZjKgz2XgzirmVDpMwDDhvazJucnfL6LGNi"
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
