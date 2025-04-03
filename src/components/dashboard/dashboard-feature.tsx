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
    "5uchafu8BrooXjwXyDRkbP4HtJcn9SUXmW6U7SVvY1WsC8HKSpKsW5qYrX7wBmVJ5DrqWdbjws6cQhXyT7VBgS9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1nM3LJWXuBS2qmW28XoBLR9Zv2VDQA1C5RNbm1hkFp5J8wNQ6piB7fDKV6SaQqF1TpNB68FDpL8yG9gQZqDLGa1",
  "key1": "3aPQrdTVNPSyRun6axW4VSuXkpuAu2tHW2YoeGX8PqCyJBgUiq6qAAEa4nmV4QoV7NtM34wCyhaZPTftB3NrpM6j",
  "key2": "VLM3Scvtky6qmMzae8pQfuB7uuctTLvNJ4Mwvm9vJtNxMMQHsd8kfFKGD5AvjtbPDoBrVhJ5traN9eSCqgTYddB",
  "key3": "4N2KVD2iC7HyyS6YeUw7bKqMVZaddqCQpuWkf9UXnYbmKgdDZwpPzsev5EH9ZZkLmCQiQWGHXXqH17fqjPrQ2TmM",
  "key4": "ryRLMz93A8niaqw9YGTEaMj49eKp99UMSCEASumkJuWA9bNc3FbCP5jtgM2tbogE5h7b73qYsuwPKDkKHcRPFww",
  "key5": "3vTbEuoktjFMqGKNHTgCmHkL9bHrbKfie7ZWsabfoVxLZQXZgLxHP4MGtmdjL8rVqUoS4z7diWsWRrqsJUoFgvLw",
  "key6": "3fqETBSJYz1TF2PP4Ap88A9Wdx4vXLqfnxErNi8uHWHP2NYFHCSxitpUY81N4pryvJ2rYUrDUcZuGB2FzkTQdUoS",
  "key7": "28GYT3Dw4PfULwwAPXA7ps2BMgwhadNN6mFLQ6MdQE4xWZNtHhHiuEcLBaNAYuHyvDHAr2vFEihFpFv4QACxUw1X",
  "key8": "5kK432F1wGsNcSNvJn3SbpHwPR88P5nHM7joCEwbJBz6NbLV1tVoiVXPV5P1NUD1a1SVBwL4acTFFjqZDubQdHe",
  "key9": "3j8RwKLRJ5V2Tv8F5YAXmiSPTxbhDsVHav7Fj35BoWPp8WsGS2xb7sJgVVPRwhq5yvpojeLFP5xhxBryAcdhgsoq",
  "key10": "4nCqG3D9X1hnBE8gffojdtGAWcGm3WZEmwybAdE9WYK5AYZgyTZVdhQDcVkyUaqVuYWfiizMCYWufpzFyxMgsbHC",
  "key11": "2167F2VdPh8GpUytcEWnqHRRkDi65gcbdqsSvAVFiv2o9svdsn2SkU4mf8g22AaR2YWFCpoeRtgLx57Y7vypjJLK",
  "key12": "5Nv7gwDiu1FvrhU85o3GrebAEW2m9vj4hzi4qiVYxSXs2439vtZioRcYwXGEs4y6k9NaKh4UghzcagE8u8x7fPki",
  "key13": "4Sp3G7nubT4NiYHPVSjuE5MmmtDWYF7S9BYn3xmP65d7LrJkMRuw8GxY2yuHkn9Lw4ZS1Gi7Evp3biMpBMLP3MJJ",
  "key14": "34iH6fwEZAjcdjgcf4rvZHdEh2PzsYdenoyyn5fhZodQu1hRPNpbTCzomBwhVjemaQc7SydT3H5xtgggRvXbead3",
  "key15": "3JyzZP6tbd7TSY3ZHtCEy3BQmgnrXSnanumkLg8dEgaQAyU4u6e4QrehuEmWzthLQyjTH2JUPVF6kS3HU85bMVAq",
  "key16": "2CP9pQfKYbga12YS8HxQTtCP3MpgwxCK1M6ZkLPFZdhh1hi25NPaD1JRzW7ZykPC7NLjxYNSMpoR4LaxR1hpzQN5",
  "key17": "2ctwEngEKouUBZPj5MiRGM7Zxvzjq6R4nzeXjqdvnEC1MyeD5sm9zP41tA6krPTzPrx65jB6euCHktWSrxdhNzty",
  "key18": "4dyQPXFAnGVib5d4QxSS6Ya95zdqCULUsMv7Jh1HFdYqNMSHXBFg8GwrU2m1tRv8J1DZuWs83RbSRTC1bK8ruA8P",
  "key19": "3QhyiXMharL62Sm6kt1dNdWgxt5bPg9xjumNz5ZEVzziN5HVP2SH9u57Ews5aSTVXbnbjpMTPDgF8z1orvBg3uG3",
  "key20": "5wFoZr2cBCtpRbu1dZmMo8Qms3XE3xt38wSG6sFGJSKCP5NpWQtgBnnEX11PEvfiH1ZUca8ZfQFWsCSbxYcAczsD",
  "key21": "2pBzjUqMijg7u7zVgeMp8d3ombdBR7Zt5mo6wykAU7KRV9bLEPsKXhsNWB8KGdJakJNNoR8tsp2GC6YgpkLB4UTq",
  "key22": "4JtVMn4GLceDbj2xGqxCFc1hEbfVCXsua9VYzgWWMysmvD5xBAWduepQXK1L1fq5ajs5v7RXAfKfUj3VAQxWiyvk",
  "key23": "Gu8n75StJ5woEG9RJLrz1VsffXoScdFxWFk1cbELiAqZy6PVqoyCfxVqkf4NsJttxJei6qQSQeQofZMszWFUcqw",
  "key24": "3nnrYjGtCzUt9iS73yQAxLAvs5KUbpEUXcBgYFW5isn3q28UNYntAruWaM7FJeZFv2cJUBP3fsu8nynCiCnx26dJ",
  "key25": "2Q3wyEi76JWsqj8rNBTaPpoW9HqD2Y7ysW9JghQUm2CrDmnc4ePMb5wqR7RHQ8g2gWHvKe4fP5V8kEgxBt25ZebQ",
  "key26": "3LuSfugiawcZhQrWpkR1XUsfDDrjw6u3NDP45mgtiR6HSgHx1rBBC2V3VfbVZsnAVVQPfEkv4ZnkL8iHvRVhGyXy",
  "key27": "4rVi4npPKqSaxCZiKCJjwA3JZ7ihjYj4i7msSSRzeGzaBMo3u2H3tQvfNf7C8pbiW59y2kipsv8FdK3g5cBmUqLQ",
  "key28": "Bv9kBP8DrAPk3QyBpQhfSWkpfKAh8VtZZPeeMvrns8bvfyqCxj3i5gqHCnSfedjx3H8K2gP82aCVjgCRBnQLSDN",
  "key29": "3EciEGbsSgJKVte3gwmvzgGopLgrVTTFn2LSYBsyjPidDh36QDX4cTUJberFwQAcXmwNU1hWpr4tmqLynadqoVFW"
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
