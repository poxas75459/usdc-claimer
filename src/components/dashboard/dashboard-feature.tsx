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
    "5Rso5uZ5ViZSksZkiFt25AXfH7czkWYRx6DSogw5q3jW3adpZAUfUaySV7JJmho1b5cDUBzYmy4CpKo6xVRF1tEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zyRN7UvrMxKeNFAHiPMy4s6LpBLWAsFR4RTtAmtV2iw9ADMCvdXmtYyut4UYFh2VyY4Z9L5BMQmCCmzRkTdxifP",
  "key1": "2iExqeeqUxeAbs2xV8FSvsJHnVuUhRZLjGAn76fq3YCkJq5wnZgLLC3dP7kF624CYzaM4Zppr8m4rW11hcD3HgkN",
  "key2": "3JtW9CeGb8KFHQVQNeFr2sAbaBbNbVJDZ3SqTd57EPAPtNWVsd3kDCFNRUY1ibs3fU6CYgP5ooSb7i7RfjiYcStD",
  "key3": "4QgWN61rMKpGrMoWVAnfpM7Tc9JSnmv2WCx36r2bYdhXLkxTgXBqrTVkbQQTVxYZMYoKpTCsZxKCnNZLKsxZS8mr",
  "key4": "4yPS9cpGjBGVzhpee18SkSdzWyJY5gT85MCP47a3uiK97oieDkkAsc6DayxDEDWcLjc13JCZH29o7k8M38gWtWoW",
  "key5": "3L1UD7389PM5PBRwaBwJB4oYKzyu7DouhUq5awRMB98WAT53q8b9bept8oDefg8VcabJ9WFXWzLqgg2GRZzDkNgt",
  "key6": "3m8xfxHjywwmYRcP48ewGq2DPbUpUqrFVF9dwJKknzDTnLmdbvRtSN64WAdtzf4GbkD7ejMYgrMtfmoiegQDjzr6",
  "key7": "3s3372kopi1XwnFt9QtS2BgsREeevceHPYNkUixDayCVizppMP54jE1ZkoXxkWBARfqu4BKpMp6rR16WUPEd7Cnr",
  "key8": "QxG1ePGe3Lu2cfzZZov426PLHVsLK6yGB8vcPJVLNycZZWpEn764T3qAt7aJAppou4ttqovArLdHKDK4ZAWXwyo",
  "key9": "2cpNer7veELAJz3YYxt2bSw8tMw2n4KczE2472NWioFDuSMaTD95eqy5dtqWJoTYoJ2LzvbAUgWfeHLaB5wAtqr6",
  "key10": "3ABqDTtq9J36DTSbytHqovH8G3QC4FFoznvDU42s4RtPWe1KAg8YgTR61kvtN3cVydaDtbj486kTabU2ZLXubKVL",
  "key11": "2a6HBaJhU17wuNYj4UawggPouWT5ASXrNuZKXBedJTWM3EyLBGFfpdkWLVb4emyuRw1m6DhMTtnj4y6tDGx7XMR2",
  "key12": "4oNjgLj6GvocjaSpzUGRwWB5vzL6KVaiuoHpkLHbDY8UUuhK68pftKnmoz8aeJmbkCstJSYPZ2wPPJjMr4df6eMV",
  "key13": "XuqgBHpSfrEd2SttNao5cR3QKTcgd32ATFNwJzHKSvZGsqmG43UdRFG3mg59Sn4oFbwkycv5Hmo2g6C8S8VDxSj",
  "key14": "5fqWCA6hp5QCQhX7TVB2X3Mc6gEhw91p5oP5DNp3nkPqnxC1BuLe946ZhXcF15mMTrJ8V8fUjZosZfyGnHATSnvD",
  "key15": "2puEnjVqigo9t1KWBaBUzVFPgWt2jSqsNQajUbagQXvFdGczMSQfLpiRiSPq3XbQNKzWk59XNoFhHWeVmzkK3SfG",
  "key16": "54upAtM6RE3H2DtaV23CqkW4yCSNHvTZmDyx57TrNmoK2AzjyvpcjjaVpv5xP3entzfJtWytYUuACQRbr8r6XKqH",
  "key17": "21pPvEMUXKnBM8pyYndGEXkGWUmppFfcrkcjcW1DctrKxrT6jKBkeoYiQCbJpyqkfFqm2QRU3KgW3GkZLtQBsPcE",
  "key18": "24zRhhE6KDDoy7qbdSWwp48kdqDbnTaKe4uN1EuRGGWbXef4Jvdcj518ZiHZcNUNqzGcyeKQgdnvGHpmt4q9XYPk",
  "key19": "xrWbZaxq6DYKvMq1RVGSsUPidohXjfQEQpFTUKBZF7xWz6Rv5DPeUieN6G142nGbWm3YYVDiKNW68X3ZAM1Rgo3",
  "key20": "VT3BmRmRAuddD9XZb2V26nn6FrKZoqxPksCQS7iEPp5DJ8gvNVAaYPPR7YDm882PDid3TP5m7Kru8cnFrSq2bF2",
  "key21": "4rsP1C69M1tYhhu6SZS38NCbZYXpBzjjnyszjTKvffcUUkEvCzNBDtK1NggByomw4V3HpPT5aHbLMmbSK13ZacGU",
  "key22": "4LzbTRNbgBsPnudU9Y2ZZeHci7cbC2VrMi5KaxQ3n7X4oo1ukzCSp3ZDy5WCuQ6xGAdJLAiRg9XJoZHCZhwPLJ37",
  "key23": "3MQnrHZycXi7UghqRJs2TVxGsQRMncEPMbBd7sPpuWgHPZTs1FTp5P3QKituHcyoypqPmva5B5vcgBwSxThtyfJa",
  "key24": "2ZCL7Rr4v4qDZWWqCee4mccX7yKgqtwxZZfHPVRSi1xQMaQMCohFssw17i1JLzcZSw9f8PKkYbSg5szCb5ZfSve1",
  "key25": "L6SPqAq1q9FErUQXWhstxjPx5pQuSQCnsTrZTF2XQmKj9xxmCVnHhbEeGYMKtS4vrg5bf2p7tKKX6gDo5sgPdA8",
  "key26": "4S1WSo2gSPaFkZQNeEj5VPYZA5dJdLfizkc2rEnDQXz5ud3vTVuCFuDTx89vk62LuzzLBF943kcHGYubkcidSqNH",
  "key27": "3u6Ttg8Ctjzu4BXkKJE4tem5wYJJmxjNysWcEZPbZ5Z8vKMSiUMRqchK1MyhneyWdgbAv41iy7xHLUeTb2NTDgAx",
  "key28": "2gHAK1SG9yj5YjDvFHomUuW1zQib1f2GNb67SpmbUNvbfA9JwKum3HEQvWCrguhJ8qJxruNRGZjHGx4eQ9jts8MR",
  "key29": "xN5NHKiGqRT3GmHu6ftuHuCL3NYYA7GPhJZSbWNK2TimS9UshbhXMRedNg3jpMjvBKXkZ8NNXvbecsT69NHyD5J",
  "key30": "4cj9ZZPtn4GNtonXnwzpZ7iJXpDmTaNa9HZha93PbJYNGMkZFRLtxXmjURSJNXcKqhYfMmSqpqGr8wvAkEJKtCYT"
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
