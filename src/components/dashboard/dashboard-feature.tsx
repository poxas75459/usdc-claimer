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
    "57Ev8DJtXHUHMhdniDHdtBZX9v18Xup1UnGLgRsJNpbiJGBqDedUDV3GGn5peWMyEQZ2Lp3K2jqUyURmUmC7rDL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wJeb6S2eQDbLuj6mfjD7Sn9CYBPtLB6bmu8EUAWusLeqzpm46tZagduqDfqjn8GrMiwoQjQ5fYGPUjkkvDpisee",
  "key1": "4VXFs9pZbpaQ4tCPsDQBkHehPrdWaZekW5QcTbwxZweaBxcXj9nf5HBeKyowXAsEzUPWVtA22N7qmzbXm9gciM7A",
  "key2": "67mnQNzi3VnLCDojJeUumpPuzC4EBET5yATAfxMXNrabvaiYDnnXWjaw78NjGF5JAGnvf71MH6VnV4o11xTUSz2x",
  "key3": "2JSmkYJQFSzxL4ZyLYVhYNcjjTLvPRfjyYmHxTzAZMSVjY4VjnUc5WDUn8yVZeh6nKcFRFkbzzeXWA3KWreMP2nh",
  "key4": "2KNZERPc5R4yym38gDqGvtZdxkdpBcdFTS1cnnENo1J7Eqq2fEhEMRzFmqkZZ2DkcxwnXgDTwSLfS7GXcbE1mxsd",
  "key5": "2eDxY5kZFJ6KLfT8DkxhuYSozizM69SyGWKHGDUbH2wKVyuQ6c2EPrxUtpcjHqC1vybzKbjVYbcaELf8wjkxFDbQ",
  "key6": "5VYE9DZ5n4RWt29x9M13zqJ8T5BGXzPuev66fpSyGgEhQkGsKYv4ULtyxRASd3mSN7etSLe1kLKazhT9AUn2iZBe",
  "key7": "2dLsQiXCQt2jHp1tk9kfh2mm1qvuVULrck1WqGnDyRx84A2fbPQkrvXgaf7QJbNh6A33XbwtptXtC5tCkjmd4Wze",
  "key8": "124GVsLS57cSVoGf43FhmHstnogKUqknEDEKFJv4i1UjxHBKh7QvW29kGCHkidRMjBYmtdL6getVjggBnwfbdBcX",
  "key9": "3zhUPh7RVGzszkYEJbrcEdLYtyzj25iT97Qy1Q7fCQyMbaa86uUCXYENoTL31zshpaxDmw2KzMNmvve4uTYfaUsQ",
  "key10": "53iWoEWganov91Ybf7xnXSaMZ9KqRFptirTUX9PzBNdiEwgQwrG1rkaUXGfD5WXLGceNJwgKYYy5QTUgRsEePHwj",
  "key11": "47DvKa2r1NGnQ995mxuk8TruSJ4dMEu7ESHLRgGLC9znPAufopyeZJqA1n8wHhvgEEgnBFu1cScKcogmoLSqZcHZ",
  "key12": "5nR59U4oEKZZqfonftmvhcUtoh3nvKeBNPFmtbxr4RMjuEAbk5bwQTCrWjfoPvU4GWsxyDbPJDEhoou1Lp18HQjD",
  "key13": "4znoyVYX7UYCHV42o8VR7cHufHK5LNuJf54wcueMXKM1h8Akt4uXqv2rQ76FaC7fyLBBWN1DAHSMWNydyLNh62ZH",
  "key14": "5aaCebgMmkTggEMXrjZMJFBaeg7dxSJKz3FJU38X9T3M77uL73EPF94GDkhhyjd1HBNJyJhpcehNG39sra1hd3G2",
  "key15": "67BaAMt1pFuTrCVLM1MNt1JPBgL2niiFP51sunERBxWjiwTSTsnCzeJavG8ZUzo1Kxb3aWcJx7vtY4WvqtNjnkLm",
  "key16": "514i6DzPzBvPUJD59u9zfRN8QWKwjm1FZvZ61YzSnTXB3CKfjigvQFU23P8UtWAGpxPZ7SURW9DG3QHvz7AXzWBS",
  "key17": "2bvuhJVHkrZFMXz4HrwJrq3priTFhiuYso3sDJWfoZwa9EMFdN4uoxeByoPCvsE6YbikrBQK17HveujgdZTfZyqu",
  "key18": "5SkHpmWRX3pY5q9dZCfWLzeiwJNnuhguNYuqzHFb1wf2hANTGSXj4myr7RyLfjEg1HsV4oiRf5GobhAPFoFVeUGB",
  "key19": "33WEE6PLzhCp9iws54jJrT8vUdpRoSSfuUCybMR8gSZZrVBnMmAAp47Dbe6bfPimj7tk8uusBvEQojGDoCfUSrob",
  "key20": "3YvpiXfjA6VCLBhXNpC1f1nzWW2FKpbDZMTyjsWoxW1DHGjspe1jJEX6emM49ANszG7Gt7TJf3PmNnQHNk9MNeLN",
  "key21": "4rMh8A3jjfKcXD4PE9hkNSkEVbZxvxXZoSch5VgvbK1D9eD54D1PZyb79xSbyFZ55p7NtHo5ZXTAuSgekYpcom2v",
  "key22": "3XyQWPgvsE8HmmYMv7F93UgRygyM6Aiad7FB7zkS4g5itfjsnaxwTYf6e8M72TGCt11RfTqPqyRLzJRGwDVMtEaZ",
  "key23": "5UULA4o6WYv4ez42X27yooAe9BDuaZPcTE3SCKmd5kj8pkveyG5rRiPUMyeLQL688rngYPRsqrNV5c2yMrYByN3t",
  "key24": "63Y63vjEHP9ExTGdg1BWhNPgRi1DUZegLrodAdkNxdB2R6WfY3F53rfbmWvzzbSfa5U8MD56AFr2zoAUypSeinGq",
  "key25": "3QgC9grDGf2g9ziu2PiN5XsrXVJN5HbyHEaQusPDnX47UNHunrLQXD6SMNMJY92HzXPfQZeioxDgDp54pvaQokA7",
  "key26": "3CDfnNvjYj5GEhthmvAgdCa9wv57Wjn4igzcvYDi9UVPEQMfDcH9H2N7Q83Z4myjncdjxL9WWKxDqE47cA5tpbKR",
  "key27": "eWWCCQus5L2f2HtA3dyAzwaen3twwGkT1NpoL5f4uApnzVq5g7yZAvwvWMkj2AoBuAvJNVqjqJAXykv1b4hbr8F",
  "key28": "5gxvhjGtdFPwa9bqdXsk5C7SBwocbAHntVDRKaJokPxxrqzWXX3ViCWM67YWinsvBvTudJAxLLrcp3Wy2J7rDdHB"
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
