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
    "47qQPehzosRLDtrmWjxjAMmiZ2xoCdjbWVNYD5o5FxbHbGwLX6td3FEMk6pAbtD8AknQKU5nobpe3Y6GbckACYYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eyKmmL6EcwBS81gQujwN58VSL88KBvc4sTmk9ZAsFtBwSrifACARREZ4ChdBA2bzfTY2PG66ei6RA6WUCuM5Zdp",
  "key1": "3UEV7aLCUcxkXKb7rKzSD1fjmhLFthYhdzo2XJkGgsKPf4wWH9sxqsBv4Egdbhs81FZwFqwVZ1F58UVU2yY123tk",
  "key2": "35bV5tfT1WMKLTKiMFc5zwaTdk7UerhjRjtVYmdyVZoGbNYbSMqHctkUtRRgWmECfiUejXUKAUymBYo19CqCQVus",
  "key3": "3LBY4pbqtyqd12bqwfpwh3zSrhEHGMPpvBhHnVcMRRopCdEGqUVMBXBf5GyTjX2VbWVCX7ZHicxnp5cAyV6NnjwC",
  "key4": "3jws5YA8Z4tFtDZr5TnuDF1uCCbLLQp1GL1grstzhnQEbA7vaMHmLJ9sJs9wPz8P4ehucYM14eypcD9PJXT1vNqa",
  "key5": "5EuFVf4MkLAoE42XusctC4bUzG1YTz426W7E54sBS4a4kPhHZMR8zstLXJ16LLbfdjt1SRaucHcBKCYgGSSVhsDK",
  "key6": "39MHxERRtHaWh5FCVtbkhdvvq4QB7fYUpMBFjw98L3xwjuUU5pZmbFofkViyAosWnLsQEJVZkVx5YCGtXZDhbKwE",
  "key7": "2vYpNC4AzEKjYsWMHin793QJiDdazt5tn354mvEFhUNzZ8cq3jTS6C9L8KE8e9S3D1YmEm4hZFU778xTcp152AWY",
  "key8": "63MMt4RuXSb9QTdky8JoAUa4LLMCGdRQqwzpBCnpdeq2fNyKYGcsYbdE2UCXE7ZrMW2KGkZFAhXqMPjMkXSGYEJ9",
  "key9": "4yoXie1GAmmpnoMuRfmUVHeWP3c8kjEhvE7o6nJNzwLPNqNLLWTrRpKuEsUjgfRfHjXDpdsd2bYk9TmpR4D1Rk7g",
  "key10": "ojNQ3yQ8dAwevNEyYmvgT3gZkywe66StbwuZh1RLswXar4ABm3bbXF3p2YddDWaFtxXvKC8VTE1fgWeWYx3FYca",
  "key11": "4t9XjPYnMm69g4BJBPa5xJWrh2GKkg3BqoNCv1eCcPdpasGo18BQ9gVBe4puhhDbjA6cVQw6PF3XGKTs17kHsDvN",
  "key12": "zH5BrQ7eZKpx9SHWsvPWhMSHxhqnjXzXrZSqKSUFFkLkGxCauT61cLVuf77X1ZtLaQn1rNKCok22ii5AVvRtUpi",
  "key13": "5FWF3qpEZ3ioMaTZxGRsxCU5dpg6s4ppPGR6na3KcWTYiXpcRvbfUj39pZawqCqAinkHQjzG9et4PaWroF2Nc7Xz",
  "key14": "38K1yYk1mtmewe9CqYnJPXDzaaH3YVJjJnj7fNWfWnUti5LcU3R1KNQT897FX2oCV295tPB42FpCii1wmXXub1ew",
  "key15": "5iYEHz9JTRRUzj5gxXVW4kKn372swWnpu9z4NWo4X2Ni9Wx5RLR1NuusifzHE2y9yonzik4F8okiiLRqD7Kv79u8",
  "key16": "59sZFiRtR9mPAS8wxe1SnWYX7uu7R6841S7dXMKi3eKorSPdTYvwQ5a55bNKaEodhyHMpsMy9ZPK2d4SNNFoKqJK",
  "key17": "spZBPCkRdPih6PgjAKiM4dMvGP8TzrewNinjjdUzE5Z9S5NX5yPy4BFPnj76yMf77foUJffHkmTifQjVjN2X7hh",
  "key18": "3WbRN84WDAfDUvKypnoSHn9FAYMkJkCdUrfhWpABxK356s6SqRSiB38xJRRaSNu7oNwbNhamxqayfzZk7aG2EGEa",
  "key19": "beZTMEiS5nXrEfRC3yEU1D7RR5EfHyM9HSA9zMHrrw7gQ86BH6V5PjxxjCSUwVFhxqpdPpRLV5nZKpB6FBUTGTN",
  "key20": "aNf5ACT35p9guDG3z91dbQKniQfrfEXQQ56vPWyYLCeP6vwYeisNDdr9Rd8QWg1Kx7bPwc94sEnRih5UH5n54R7",
  "key21": "2uB2kBZvkjKri8HPQGaC3vsy27wpA5A1ehXRjPtCibNfmrX7jZvozeStgh6ya8KcQ24t8c2PzxTdpiXvS5TZsrRE",
  "key22": "5mupunMDbxSSSW7w4HttvZJPkXc7cJP3KE8L7BsW7fweJyubMonjBdiTU8sRTrTBv1XGPnXouWnZWXdSaTGuDv6N",
  "key23": "4Mkd1sjJbBdyFxqtxGDtz4N7DUfyc8FHE7ZRknKuddoxAtGMUwtQXySdKckzqJLVDUKnw5qeC3QLgYSiwjjpkZ6a",
  "key24": "2Gt6GPEaxwDvArGS24z9ozTw3QNXurQxqEWE8QZL4emxacwgX9tgsYEe8pfL3VdFkszBhE7vtzRsobVnuHBWeEhc",
  "key25": "4NwbEJJu47tnAM5yfttjm1EUAuKXwoCq8Uj4YTATkdeeKG1zjZdyn63gUHDNwSZaUKWAUvA5UnNKV3rzcSyoWqJ3",
  "key26": "5kZdEffSxZSDR1jh2VEYtLJGho2ff8H9Q3P1kk2APgLgDgvYABHYomyrPg5AmfY3eWbUtyYqGJ6BijeRvYK9hQrd",
  "key27": "3DZtudJJgNs8bNcFXDWq5PhmZC2QS4BCT21mXcSk5V5uwnrL4haEfKxGcks5vDCA3EWE5tdJK3NJPgTTNVWWdQxH",
  "key28": "5Duyii5J5RjbgVQkZJRFAhm8r1ZxVNZ5Z6RjbVrT4ZYkwX4zL9NBKQbXmTCkcgDNeJ3fc8SZ8fAFaxH4bFaiYkGR",
  "key29": "4MUrvJfdgPbwk1ft5H561dFdtFNX8Hh2bt8LsC1joYhhZ8PCMGsA3rZZBXCbrPZYv2ZeYhzzxc24gHJaJQFMYKSj",
  "key30": "5Ljd379JvQvMG39Egrj5uxvn9wyz5aF52Kug9VtwNAvd4PYa6Tv7nxh4TWYWzYEg7vReBEJC8CKgaGn5GbRkiymS",
  "key31": "3mxaQ4bcPzvGsU1vScDZWnoZ2xkctNmDqsGCt8VYLgqPrggtd5x1LwgeBAv9TGyWotvFGTCoMcXYbky6Mqg89hHv",
  "key32": "5JZqEAeNQzn6L1zTnF7f7a5mZuX1hHr4Nt6QqbNHm632VAhjmitJf6KsiCvXWBX34mWxmYqxjocaoeaLt3VVrp81",
  "key33": "2VxnTJWPVvdVz7vPbLSePMaJSiSZLqJtuGajU36Tc7AG8aQjynhXsViHAfxvkPmyHTJ43bWiTJCehmco4dvCeXrg"
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
