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
    "3auHwAzekXNzQ9KVfxqCWn2A5uEXS8XaWYyLKzYupqQ6f3JJ1D3zd7AfgPrCTQHNp2QecsdzuWXojJsu2y7Srr3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XLPtE7k4XbRDPGg6r54yxVL9NEe3aBzCSK3s4ASBjvsKRxk2r41Y6Wj7CF1Mn3QuRhuzPomJKhhvxhYNqXDFAGT",
  "key1": "M2JK6GyHzCEGcCJ8TVFQfu2U6sGV8CWVwS5GBTGTLRiFnCiWh2FaLFJQoZzg4fkTVfJAGV3bH8Mzphe1THpXKer",
  "key2": "2vTFMBKguAy3uAv9rdjEECXqNyHHhZBNgzv6iUz2Pf3Xzn3THfWVL9aYLuCDvBkB7HzmUz6MchYgbyiwCM9RR7sb",
  "key3": "3NcoTPN2ShDhPmUTxgnbicfmgvc4raQ9SGCtGDPd4FxASre6EjbQ2KqKeXx93uo5XjW8pDddAnnVSCEc3kMoyzcA",
  "key4": "5Uh37YFLsmgT8aSQKKCzvGFq962Kbw9czkoYXXkhENhdkyZx9WpDSASVYueGRGHHhg3AX9eak3A24wiyP9mn6tkb",
  "key5": "5uhv4VJFFvK7GhikN2AHiZmskLgpE47z9NttXkVXspC1iGzg9LUd12N3QH7jdgsWtimVA6MYZ2DevbFr1uBbf4Eb",
  "key6": "414i5R66tAM52zwjrR8KVzBcz55t6HfciLvWy2DsVrbMBdKvSga4DKBV8dJSpE3psBJRuB4PXvs1PobWvLCRT9jt",
  "key7": "u1EYXqBLapuTQyhqPAnoeo3WvJcBpJm7sDmfHVDYby7wcPnAPeM4vQ7zv7jN5CQ974uadTdjq5cQfyJYJrsRgo3",
  "key8": "4ip9QAd6wcd4CSJDSiBMgDq71GPA9HVEwKobj7nX6VcHNrcaMCydaGjG7tTkWvrNqbRs8HeDiMWr2Y3fs8fKcPFh",
  "key9": "2je38imLeYNDuwSjZwAHxfuGwN7azDYCwj5Bu83qsgcWxTEc4xLLecNX9e6RvRwWieL93TWzrTpKykmugzVCp1ej",
  "key10": "2PYkBsYaACAEC4Einxtss2DgBc32oL7p5D6w9g2DFnNFGxumuVVT5DEeK1csvdBpSKsQSUFtwrpHpv71mB4argi",
  "key11": "5SneqQZ7B4cs19Yn4MmJ6WF7GZwSHm4Rgpn775HoXJiRS11o6Hvxa6j8uKWJUETe4HEAsU7A5rwGdVypxwfGj7QD",
  "key12": "5VhQeG39r52q5SWN53rQQxqLzTFg1hAJY1xMfSNKvQzcucb2pm86Sb4QyWBC7MJdHtB2GgBBhnpQPJWLgeEPqS4a",
  "key13": "NkWCUYnSp33PUapPRUCLxsaeZqXbwhN9phZyzRntdttv7wvNbcRF7FYNHNTSuBTAJ5fTovvuGzdw4etcnfFfUYM",
  "key14": "5jqX28nUQ4i9rxxNrp8WJaPdnK9UfXKvac71zNUBUJ6yBXBD7ukVfVDxDNnKTv157ZGphmgqjcmWWMnYYaPACYzK",
  "key15": "ms34yTef9RHvqhXyefV3m1JtTdhCMP2azcdXqLW9AK7TXVZm2WMMrP8utCpsp3GjzzRahyAPncvuPwTf9nepGaG",
  "key16": "535mFkrHwHyCPuTdipqZu6DNrNb8H1hCqNbevyzmUQKyMHxcoXyH9xxw5Lyx2aQmf9TWV97GK82Mj7KsTtD2VcRh",
  "key17": "oCHsGbcV4wpfvNRWVLqj22Q54zRYJSnt4NJUfEsBKXPi74zpUkHnuNPrLtUwYhhscw53KKbcPDYAepkfY2SczLQ",
  "key18": "3bzguerRtr8hAm26kMjCs7L8YGDr5bDwr2Yt8KKysweXE11jjeBDuuuVUxUQQbFLQgiXnwcmkB9C1d4Ui9xQJEW3",
  "key19": "41wSDPMsKom8rDan8BxrBJicNHhbzD23Tiyc54r2GQPXSmvgJL2urciQoh79masyofK3YxmtmGNk1dqZ8efG2Cdb",
  "key20": "4j6MmPPoT5icXMt2jz5TZLHP2ySfUmjPFhm8NmekaoJimxVxQWidGfzpNdq2AEQoqYcri6n8ZJTKJ8taXe7PWesP",
  "key21": "4Pwaspox5PNqwwVxM2k87vhtUfTJ337ENBxxp73QKx8MxvgyHMsnsDoRAnM8JTjcEx6ZvvxX1qGJeSZnot27XU3B",
  "key22": "252Ybh2i8mYwVDyRx1xEiGZUvWcCWc82Av9tabwV9iMnzmo7bB4ZbMZPzUdmH96ifiGm7X2fgLgLS6xq7VzhtXbo",
  "key23": "4xXjr4zdKbWsZo3cg26rzkvRDSG1WS1x5gKXDMBrTcdtFgZkHmUTyxTdc8DUFQN72Fsya7VhcNog9fuYBTgsNNoH",
  "key24": "2ZV8ZxQprMfbA3k6KxeV9ocopB7uDxvL18PsW7waL5c9LRi4yfimLwnpWZi76SXuroWyxzucDTwrR18fbSPEuEGj",
  "key25": "635gztwoquVMrLS4qJJon1WERsn48U8oAb9U3KXydUghvjEcXdAphbRWk8SqJypJXrQDUeJLWQ7yDYyZmofR2dMG",
  "key26": "3hgTxufyQU9KuYosp9HNP1HY4zivffRyhzhvZv28CtpXfEbWQiBbsWfiQpUB3TYCAkDrWTHdWwZxXMnDButrpKed",
  "key27": "3dPbjVUGKdgg92dXjPEy4e9BAhq2JnS762VvVRkdq4Gmh5KFntCAjfD2Jzt4PF2kJKh1kX1TTTYwjvyb8nEPYUKQ",
  "key28": "3a8vEYcXtHhrvVK1SedL2yb8Txv1v8wVua5vMBfqAkcdkE2ECWbVGT56YDAEX2W9ARSFQEEJLaRWEs687qGvX9kx",
  "key29": "2iQ1xiepQJu5mLo4QBA3uckCW5iquid6rKX3D3Yn83F4dKYkifXfDmDtoNMfn6axvy2ugwmBu68PNMJTtWXYhsZv",
  "key30": "5aWjEFAmCn7FRj9ZLZuTF1UfxKMwcqK2UpYCuqZnN3GYz12DMK7gxEgXv4zkkvaku7MGpujGoMvxqEx2YoMHtE2v",
  "key31": "5FzvzdmFTKPr1Q6oARqqw1TMbP2zmz5vSPiCEH9LotwahhFnqxHLsFXip3gw3HJEmTk6DAhNXV8znPieKhfZFE4D",
  "key32": "4hJUSzsmXtfqiXXFqRDuG7jAqAM7dr6b5LqHg1AZkNHPbWe8uQiN7VcahTeGhRtYvMBHHCBB3CztJU67ET96K7dy",
  "key33": "XdMPcx1Wn5FkC2rH9vpTMx2pJ1ogzbxsvYWnwLQ9Ja2rWfkGbBF1KimndLKvEWcJY6PAhgW2vN9LDdgKBdeFnqJ",
  "key34": "33MXQPmTKNfWMz4P6F4djMPSbdVMa3DH5FzwGNbF6gNSonEdUZL7zGwxFJFM6jzSSayEd1cWNSZKRTSXfsuSf4Bi",
  "key35": "2hHkA2ubo99ZKeZpqgDD2RbPqoyTqPzFmAYesBVBwHRFPqcmQqQRqzS55kDkLHSjguq9LhajAj4Wo49mqLRWBgwH",
  "key36": "4Wixtd5wzJXFPnuQM1ZNRAyp7Hs6ZpFeN4kq45NFmRizXPF8mnnLukBPNg1TaTcLRvKZiaf5yqZ4VxcWqYWGoMAh",
  "key37": "GiMhEHgB1VHBdjg2ULN6G7ojhk7jPeoHNPyG8FbyooxFMkhM6YVhEvDcHEpF3zNvTnjwxnLBfJkS4RRyo8MXuZM",
  "key38": "5wE2FGXK34DNUfYeHxpjbzwE4yUyiSyaA99iytFJ1TSEeSeTQTi9XdNUSbuUdRL8fm2B2yXgjQQzEL3s1CGSw4Ke",
  "key39": "3BcnMgHMwt9HcFtueX8ybJD3znQA3xnuWoWCNUsdmWugMKnJ4Xe6s2SraYFMyQxdRC4FL9h6aJCAn62gASvR2Cgo",
  "key40": "VRZqWHSGWCDBjRJAahsnSeVJaif1EvUde3QWrqgJ9UBNUqVetZWLJUh11kyaYq9WJj8sXN5PLeBXPxpDKxTmoKb",
  "key41": "auEHzRcAA4ScoVhEjznF4yyqNUBv2H9VchFFT2ZMVRiuTyTAXwpRbMPEbVcRyTzPY8eBXsK4PoWucgSaPu3X3v7",
  "key42": "26vcZurFCQ3seYaxeKqf8GqsdYpzZo21yf9dN3EXJ2FRhdXCtc7swvQh7Xp1sTSKKRAvgMizUFz4QqDWfah4oePw",
  "key43": "3zpw34NB9mPMbsV1FQsCqBRyxVoc9BwfbffzHsJUWATXzZVKFFGA2PLU3i9KQjNWaCKVyLGKGtYswFtxm21kuw7A",
  "key44": "WcVRyK4zpfcHs1Kg6GkqJBtF6wzbQNVRTUrgp6ETsyQt7c7P7b9x8sW4hx8pwCLNgpxrLRo7HM3X1SBrWvdmPEk",
  "key45": "2oYgsHWHyZCh4jJD7DPfUEx9DDMKHnUcZmizm4RGm9XLhwML9JsPLW6z5DKiyZXMjXEEWmh5F2QLcmLR88MTcaTk",
  "key46": "4P8cshWCdiD6TYaWTiQMgDGVmbZjAobGn2EdkYkwokt5Ke816SgLzAEF1T48ri92PHAr9JBDT2dkrki3cjFQ8CHE",
  "key47": "48UZfDFgzgK3cHLqtBTfPmrv8PDkEehXesYR2L7MuyqUsAcKyQYfirHQ1op29DjHVMB7jG8x39HQuMt7oAG9LrYU",
  "key48": "4RwqLNTeNZR51AmSpbtk6555cUT3pyvwGxjF9bHK2XAG2MmJFYnTkhM4dBdzBgHQqwhJmKNMEuFfa1WCvhs1fEgB"
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
