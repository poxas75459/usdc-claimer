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
    "55DgTj4QUij4CxTX8ZPcnxioxcQnXoDS7FaLXfyBC3PWJsPYJUd6w9ZJk7rXVaLff1nVMHB7qZdoWoXnPpxCGsXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CjTwaB3mD5ZNS37X6ouRwcEicHW4vXpK19q3RDjNxjnxYyx8ZqBV3g9zxDtqeJA7wa8pPUuWSgHWwEu4dttDGgq",
  "key1": "EHMmraExAiayXJP4q2PYbzKatDuposTrMA726gR7L56UpFQaEqR3efpZ4DqLZFmtUAtFxr5a3CQQg4xvHUrWksQ",
  "key2": "2F53XfDqLLrwC6sf5bBAkEAngVwbQskLCP6SAkiEsLqtazSh79FYWX83Y2hiBpbhBkWmW9BpEKQfDvFkCJYW5FpD",
  "key3": "45zGF4qU8JvBac23WGVjDufWQisgxr53vcFyvi4pFdjuWSfoGkfowqjYkBQgMoX2PY2FYvU7Mz5hGZjun9UeSm89",
  "key4": "3AUg376yzSpzrBSGq887SPZZUkajNxn6ageENLeYpJH83tvyPGkqzPkbRXGV3U5c7nxUPNZoCsLLp9Wvc9W8zhbc",
  "key5": "2yXhtYxcNGchxnJbH8sFVYtCVxAkchSGks7pqGeHW88wT8Twc4gKBhF7oTBGcrStE2puiP7KUzs3HSoqtoHJEDmU",
  "key6": "2gAwJs9Ltz28w7irq1Rp2tvJ3Gs8QHuRpS6B8hX1kk6NjoUhtfeXfkUzxeqnwrDKPPaHbKtZ1sGRQPSaj2aYtZPP",
  "key7": "3Dw2F18wSFPKQL3VjooeZis1zqsJsbAApD4bqWKjAxvctzTtBB481DNkGdwWiBq8UxmE4wy8LAjgazP96q7RXrmi",
  "key8": "5gG3GWyytQZ3rUDUW6nEsyi55nGX7RZEhbrXoK8JhuW22n1Xnj53TY5jkqn9feYfS7a4hFzU3roufzjYR3WRVsvU",
  "key9": "4G1gRaJhseht8Yjmh9Mk4FmpKXfDXeVSPyx48CUvTFA6Eyuo22NQk3wEPfxZN8RjmENiSdSGp7Xq1pBkdUnshswX",
  "key10": "5YYkES2eZPD6L8nk5fjfprz5LvjqDUN5LXxsQkauMS92iKTsMMTSxhDNQk5pkum6ACcNrfBpWmca8L1iFPQ2ZXbm",
  "key11": "4c9w2ktfJGeFTAjBUEwvfJFxq46A1NxVr8t9wns2mKVaYFb3nfZCY4R1daivqSPb7BQbX9nSbS5FypBWJgKx32Rw",
  "key12": "3Mqwkgpek2FtjaAVso2mr77HpsYFikaXvhhFFtHd9FoGeHs5BXiMVG3Ftf1VHevJaEVTVMJzAk4XKCd6rvcd9K9D",
  "key13": "5Kds9D4pqRBkwE6MY5ZyGByy7wDHGFjtiaHtZQExepzrnVGxN8FZzxDxHHJJnvzbyUZYyqoDwNNc4qEDXYAnAEYm",
  "key14": "iNsyEiitLpgfYLQBBRJHu9SsRuhbBVTx8U29eLT7HpxdYhqcNQ49dq42aR5pMfkfZkhFNdw12AHeBX7BPWViSVL",
  "key15": "RwwpanEdEHyvgjx8fQ6LNvs94UwWLf92q5GeffCUs8zbobYG6UBwhnyzkGa6WRjwmyJ8rBG8cVU4N3X84h5bUoA",
  "key16": "5XWaBjbUpBWvxTRneswPfbYBWWT5WCUpXUTXRJssrW2pBLtGJ1txvjjSDkM2rXspBKvczPLBpWKYLMzaLsKi3gSo",
  "key17": "5ZAHSBbb8vb81HZYtxqssaTzeRsVdhcCGqxYT4BRUeUvuMHqxKRz8KA3dRweWYn1pXxuioS5KMhRUayZ8pCneTyN",
  "key18": "1p53DEAFMUD3rwoxphvdQzxJ5uQo1XVyP5TT5tNMt2zMdn2HpyVYEfR6QCh4WanxZfdT4xfJzvAyZjAuvSRh22z",
  "key19": "17Kfi5rQwZq9cAg1j8T4dLJ8TzgHFPo4z6rdPb1DLzyb5w8AYzX7fnt2Qre57QoxMjyNTzziSwwDL6XdoFUorqk",
  "key20": "4PQZ268rDi4MjkMvK2Z6unvHryidWEehyYyPkaJCoqTDQpj76pdLdtQQsJg7FmDNMy3KwqqfeY6VK4Ph1CES1njq",
  "key21": "2WGsEM8m7rMkaMrpGUW15yKo2ogqMKMZGdFk4ygpsBwbGZJF4PAHAXTHtupWkpFuvKqG8N69WVtVdFEJ7mrj3SQh",
  "key22": "5Ruq3smtFG4dAvJkEADzyaKkMk4Ypf21W7ecWxxTMKq2Y69oPGr8EZvFkbDRoFVKUZHTWBPxmwaAoUhFkmzsFKH8",
  "key23": "5qzN1TYZTN6qnLB8tU4GGz8Dku1wtNMSavk2brsXRtomp3A4aqwyTRCauCUZZVaope6ATVvPJATSSSky3eA8CMAj",
  "key24": "ZubNxtU1xyNkJ3fhqsQU8V5QdjWWKTeMffDyS5MQ3WwcQ53zwSAm5ADEwhGNWoQDLuMqLoptcoBYWvHNx8g1B14",
  "key25": "5K8FNykZr9wYkPpN6QBRbdyQZLbuKZhW48mZqzCT7y2DGzkXWVZp16yjHeitQy5SpyWcbZbZWP5KHpxfEtqaEkAe",
  "key26": "5YYd5pAsn5xDWSGVFxdziRWNjyDVTFGdwX7bwQ42TE21cxop98afYGS5WMqVojgoBtmJhhxgGKqGhiBpuiCDysXN",
  "key27": "57j9wmc3zYY2iZUKnmbozpqQxbfgv9rshxTtvn7GAmcVz8gfRWnguja3UDZtxh3eAbEtBYeu1MLjnnbwkdTqv1t1",
  "key28": "3bpsawCixdd4S1hVxBS7B8r3ZD1yDAT6dHdtZEEczr2dCaieWoA3fHo6XS9Vii26zKJzwYA32QNrGhrKHss5HFaK",
  "key29": "5ZR9qswdHA8EQWy97TMCvdYAP6t2273xFpmdTvCbfH2WpmRJgiyjvVYDRyJ4Wwwjdxt8M4mXniFZ4fVuMnxHcyLV",
  "key30": "5iTWjQPmDfVjpUU4zrauVoCehZd7Urv3k8MZMs1r4arb3gGS8HTHBwXngmMcB4L6dRA88eh6paQuwobTaYKGwGuX",
  "key31": "5h5YNGpPZSXviQo5XrnNt3iVh83pEHdkhJvjiTZXv5hnpvdJkv17tkHYhuZySVJrHEwTk6sV2u1c8W8fsan8Ln3x",
  "key32": "2KEkdKdXW9oyYcgbvtA8BVfLPxnQZkhdYqpuYHeEApDy3jaHMmgRBsKRuC17U1HyeukxV5rxRbRrEtwrpXHDwU7p",
  "key33": "PSwP7wbPQvt7vGSA3kN9k2DSmh4GHwnFJGz65MuYqs8cP35yZ5BEtbU1PFVNY5T6s3fC9T5P1a4DjnKkEJDuaMk",
  "key34": "48vPKbosmGCi2w8Lo2JjG6ptLwAotXUBWvebnjxMDJ2mRArGk7c2fPTEnJTJtcMyddkeL5e5wpjkxEpUNNpAUqWb",
  "key35": "5H6XW4S6o2kwVfjeJtgUGai4yPNx3kLGkBTLQNaBfWYV9CS5xyfgnhggNzv71ax2obBqVau3R4jmSwtaCeq48QRR",
  "key36": "29VZsWW9VrTQaBPh4qHQ3j7WioWLFLTwE5TY21z6MYM2PQ5Wa8PGheioxTGKqnxrrJXj1Cst8ZhD2PwmcKd6fLyV",
  "key37": "2yBEri2tq1XFKB1cYRLa5cn86othpnfuZpKa52EKibWvqBokVVmBZraf3R3iuen9rCR5n3Cp1dZMTMZnwuza7xka",
  "key38": "5Fy4A3WxhKX6u54Me7buRcoHG1D7vHcetwwBYV8fKpmzCQZx947i2KvPd55ykC4ngh5FjE79T5X7Y7CPXBe4U8LV",
  "key39": "4SSPksKswGEsMv7vAALbeLCh867tHQ8fF5ucLAAeBsACyZkmVPf3u76uVTmdvYvBuTcaGibyyGGPJxe9rDdXBuJz",
  "key40": "35UC74StRrp97xhaKah8sL2jbSokp6qRYmFZ4dhNCCjhbLRsjnBnS5YoKcFs6UV8DhC6r6tEtz7gaQqKa5HSoSz8",
  "key41": "2Q4qKmBNYbfG1Nse8cs8A3SoavreGR8MTC56wAn8kGdCe5kvne9SYLmPosGay1d4LGwUfxG5G55pS5wfnHLNHp6F",
  "key42": "jYjFAjvY8BEVttdxYi3LmjrpZEkFimtoJSeucaxqSC5DFaekBb5XkY6zRymgbJJGYrwVQnVwJCqXVMnrBW7B2Vt",
  "key43": "5K6EeqeKLKfiTU3E9FHrCawZBecFmBWeZN2dJG1VkBibapMYpKv2r6mGEo1GqLYUXBdgu39tWjZSMhbuvjrUcybS",
  "key44": "fGhmP4n2ATYUYiK1Uz82ctP4spmLGVTa9Wfd4Lfe4so5wmrSLRJ5itV5faXWpNEr66GHoqBfBBbaH95fNuTTkZg",
  "key45": "4wosSbqJRy4kRGdeBQGE21iZbkhkc7P1nHpJL4obDYgvTGxw3HwP39etbDo1wMM61uxgoK9dQCNNTD1y6zeWL4Lq",
  "key46": "2RD8nVguRVVD4Qf2h7XMY2i3KbCcwcKjjPmBjSVNyJ4CzHLevv9e4vknq5YLBgdN4DjLoL8xMUNWhnaNGmRD9Rip",
  "key47": "3noM515iTMhsGFUMLHM8LVWTBkytUXfm8CdTHwKfTHxHetXdTEtHd9VHMmHYCAbiWe14M1gH9m8qQzVBFDkbqgv9"
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
