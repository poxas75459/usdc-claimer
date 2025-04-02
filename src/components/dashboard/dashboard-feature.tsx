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
    "sDbXMzwGSu3Y8Bv8Q24GU2GdUqxeyPDcHbdGChnZTTp5QhrsLMgKwZAPsnDz75JoowKVVheq6YhbjF3WNPGwrGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Q52qbKiLdUyX586EwnkcPrx8RX9LhYmBjg4eH5r9v8fuAHUXrx4QqaNkepK1HyBLRMJPcZiF3okArQvkkfHkpU",
  "key1": "2LndXfMCfbF2rtQFr4xHdWqTcRSPafZireNGavUapXQiiHpKPER9vwaRLo4WuRCgHbLdG6kcETmJUHuFTmwQQyEU",
  "key2": "2z6DZ9ymDCAtypjB8gMWEgSHeUqbJpYCvAmXq3MHKpkr2a2cV7CE1sTq2LvStAvX5nNvdyqaYFPET1V6S9PonHd7",
  "key3": "s1sePoCtsnjBW8SPbSSYmBCobRPsk2vMmGnYK3sTGnYLXA7ZwLaZnuMm5TfxS8cmuaHvSCESN6QiGCmif1tSPHf",
  "key4": "2MU9W5kcSsASf67fRa1fNAw41UMBgVfaLPK4njFKA2hPtYzdP1UChJYDZ9qThk8oCeRQ6rGExGizsZ78nt84gSrj",
  "key5": "4fZadzXgJcPwFZ5kyGN6NhRrKMJQgcpaA3nip5g7kRbrkgMCXUYx2jwa6JRoxc1LotFSuEubjKPXVsgRNWHNfoNc",
  "key6": "7zNSpR3RhUBENbtdKjPW9W9wjYFasjYyz5F8gzSzauTeAtzNQyMV5kLvuxknUJRnPV1YWjkUj5ihdNrvEiw9Qan",
  "key7": "GhMioYhBMXR7ExEmhbCFNgTCHqbQHnDt2vpeUW7sGJVabWekzKmQrN8911SgWwbbDyfjS817BSqmfsq5RKvKduH",
  "key8": "4hcCcJAU8ABkT1m2LYPyQaj8KhXQ7oYKtsKLwRrP53qxtrivMSRyQ2dV9QewEGSNb1koaWBqhcH7kVrCpmSqaBsd",
  "key9": "AMQteA44A6QJeGmGFXfZswhxHnxDwivJ3vSG7ca5aUaPxTtbeyNvzyXUvFpVMpr2h4PyivKax68rPnYwpxhre7d",
  "key10": "3EHBgzF5xetYHbQj9qeNJjYkwHrgeef8aYQkpTepMV66MvkVEREbnKrGqwvKTUfhg9m5t6aYG15qxMqpnnfNtkPo",
  "key11": "L61ojojpZRjgmp2zaitq397jegJZowEHGY659o5pAwtyGPMte9KFb4UMQUifrJThZDyL6RnZ6xLy3JneCZpBayc",
  "key12": "nUx6FxW9oavsPqVT4nUepHRvLVELDvtus7kCPteW3Qa9AJPQWGaF3zQJN82qvxoxZuF5eVUwGgby5tPZpzx6u7M",
  "key13": "46Saa8YVaqusBmPsoLChH3KPDUDRtU5Dcy6p7wY7HJy2oNPf87i5F1zXRHk8TGHwg79GY2CDU96vy9Q74HMvfUGj",
  "key14": "5v2P7yNQ31Co3rr1bxuUNxRfaoodcDtgHgkUgH3BPHXmfMubwAUZvNaAkG6KjtaMwWN2GVGanf9FvznwfC9WzKCm",
  "key15": "2ZfRVawDMbB5WuLxMJXcBrUvKN4LDs1xifFvgMpXo3DMTk6NMKSgRS226feKCGVgnFuGep8rajtSZnH9JbTvTJ6b",
  "key16": "382Cd7716tykb9XdVCUGq5r2i2gMjm8o5VZT4dPGFGWDuJXsAWq44jC2nwE1by4qsA2wXpfVXiUUuSD7qSNXQGjj",
  "key17": "4M41zw2Z53f4oaWMzAiVW9gB2dLZ26K6npJz6pWDXBr8n4GqieVppMpS7aPW7ojfw4x3XRzET4vn3D1V6oPmqAVS",
  "key18": "5FxVurdVAXPALENCSRbdEqu5haXasMYrfGsB6VeTfmdyRSjf188MMarq3fXp3LAgqcJeHcQ7krjYqpNv6XpfCy3o",
  "key19": "3oboQSGjiWpUuWFGgLTftxvXmNuHjHdNdCZnn5jmcz3Zw7z9FmAmMGuGWqxZ1seXVhk5rkJftAtYqnWRCQapBe5s",
  "key20": "SWQBK9nxMZYFAY71oNVe3E6dfbc8R7yF3zUmXYVafGvMZcXEjVubmTMZbNLwuTz1MVJctEAqKM8yQc8c63x1qF6",
  "key21": "2KCq7nNe5Uy6SJha1REPR4H29Uv8UqzwEopYcY3BkeBTDFsWkCcwtBHR3iS26U542WUSeJXxf19xxou1QPkg6Xpo",
  "key22": "4yQtJ23PQiHmhn1NjX33Y1HtZer4wLkHnxLBqi9Vj4i7aZq523yf837X3skRTRGA117FS9ysvpRdfa2pcdeKG3cq",
  "key23": "5GCDJMBFKmJpx9c41ovWXv83GsCLRmtTyZvqm5MA2VQRSj8bPTGJz3A9CsioSUZ47NteYTF89CC9vt4CpthdoBcR",
  "key24": "2i9xubQ3kTJMXZayVd9biN6oA3WG3btnzWZvLgrGtG1xip7nLZiEssFWuLdUoUsbMRn5PS7pqC3JYKENqj351yzJ"
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
