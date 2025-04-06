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
    "QgYrdcFXyoKXQcmAp45CHPG1ePkSSE5WPQHHZkwitSiKtmJa7VWvvZq5kTJZXp11mv1cErZLcgyCvQZhMMyfDgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9oqcTjjevWPxjr7YhwtfBUQabJHtioHYByhZh3DvLQuVQUUBLyU6jPTzJ9Z2Mg9eheaEnhLEYB8KCmr63H8tptE",
  "key1": "HQEmJevWojiaJHcUkKY7YWwbAZp5T1ECCm3CkjfHKKdatJoF573pbfSARixKQ3KngAMRLnWNejkyU6fL8H9pCB6",
  "key2": "2Db814wkaGQd1dqvJmzoymrjutTHKX8pgBxgfLzGPSqAw95wc8fmmwj6c88aH6ppSV5hCex6QbpJwMnK1Y9h6gmM",
  "key3": "5uUv3kXMNhnYdNPx9X6LnpKGgntyeLEahishJfDvVJ69vdSAifZHCNpEv55oKoGChCq2fUrY9cZFqoSK8A8sp1te",
  "key4": "4sWWqsgaY4gP81Y7od3fa8Ea8u7f5QqWWCCrnb9FEQ1vwQpozi3hbBSPcCzhMjo3tZjnbNMwCkiKCy23c6frP3fq",
  "key5": "5NCjik7oFfRMsL2FoqmvhRzCeQgVYyWZxfZn8EA6gy9gtuR5WycQawXZvUqgcJfLFkSxPFGnXzENEVWXE6ZzC64E",
  "key6": "2xNYyoP3ZuZ66Nn4HFZ7jUSKUWKQm8JxVpCs7P7mPUjG5hC283gNgyDpQyVQaaP34dTrNaXbfgyUDgWAb9ottFdk",
  "key7": "5rJPxEUedaBwg7H9bFA3L3YQr7QTQxGvfMQMJHYVjaCD6k1FCjU9sbNhn7nAeWZNgMqAe6pf3JGgvm6pfdVCDXqp",
  "key8": "57HYWpX6h7eQ7uKts4nJrZnZm5ozpHQK3zQZPTCqozXC9qteUYERqpQk48FDZH27KHYMja9ix65ThwH5shA29hpy",
  "key9": "2EfAsNJusNdxCm4JYRTQRFqozC2M7nieQkf4xDVq6JkDFkenr5VekPsHhZszVrg2YGMQUTy2YnaqfXRWtRB2ExEy",
  "key10": "3XeLNYYcug8DhLkKz692p6kbvNf6vSTciPqZ48CqtZSwaftULMKeAVbu37WRva6axBVFpmGcHKkH6YungK2be2rp",
  "key11": "4GhBrnPFFRxoHePnfm5db61Cj6UkDJA5PBcqb4Je7Q9PP3H3md7TzembS9yitTcsK4Zjb6M1WfonJrfnhEbmhZH",
  "key12": "2EZPLAB4GjVm9dU1yNx9KXjqtYy5bT2y6ExzqTkxoobUoEV5v3ArpwqP4vLvnn3UsNTBygZTLW6iaCFYbRaDnAjf",
  "key13": "43QAeHDCqvCPJrVV6ALC5HwmQAqXvMKgcijwbgwPj93s52NjE3gHzLRK7Q7JjZmrZm61sP1qnvFX9qmpD2N2FEuf",
  "key14": "5DKFz4ZJs97pGsJdYdC8bcT7yiNeCrvns9eVbymSyPwqMg9BiSU3AiF1BAi6Bgd59mRNCnq6eM9PuvGUtA9y6q4r",
  "key15": "3AyTT3ha7vLKEEqQ2YuSTpDsstwYmKDsxjQMvTEstp7W8mpaTUtR1Aoi9CZmrUD9j6kvYHf3aUrct8263UoDZK1R",
  "key16": "2cMLMimye2AgzX7h7thyjjJMmKtv9H88qTAHq4e4eKkjWRUE36vhF9VxD5RFMJSpje9Mjv3AUFswBxL2mn9UgwY3",
  "key17": "4Vf78vLMkYLMT5eQUtNYZ4G5vV3xtBuhahzGDffeXGxTHUMm4DJARZ4icaD2sxbuQt4N37w7MUZDNoBbwQ8eMnc4",
  "key18": "4ST26N8inVDTKTRnSKryxyPYvhRNngKqLZVNPPwe9zvUjW4E6XyKRc672DeataAgT2gAPkbBuTeGHU4SbPPAFKt9",
  "key19": "3WNwEAsjUhV3XDm9Mow7VJeXss3YQujLLRiKtH3ipz4cRyY8EXiqAYnAWn8BktiaeJXsajeiFXZfYAfZ5ytezJPJ",
  "key20": "3gUk2i537Ek9UV3tTqJ2k2v6jyp7DNJwUTRxtMiAQ7JvXoDGXTHPvS2LuLZNbP4Wqo9ZApYcgznWXmSVCni5etuX",
  "key21": "4x57vqgvVEYAUdYRGt4cGhaZQSgumSoh56ZJTqs1Vy8CBfK5WZrifv1FKpW8DW1Hb1bK824a5oc1UFAwRZeDvVke",
  "key22": "4gGqwedse89CeWaVZt1BzPxJNX6bxdaMi1s9t61PTq9UVWgEwi7d5pnCum6nRjArSv5LM3P2EEeRQ1aZuGatCbLB",
  "key23": "GSrguk5eDJisK1hsLmuc1pHy9gdaCVTXY8dmeTu8gQpqhphKWHuvcUWzeRUZK3mw3BzRr8fDBdUoZumvcnej4cX",
  "key24": "3FvAP8RN4sVK37H1phhXbETRyUBsstC21C78y1wi4MpMptuJduUJJrDndbRzDvheSMqoXBJpRYcC1V39P5ZxGEq4",
  "key25": "5Nvk5TMvxMfjNBx1vUrXduPboYJVjFv87gZrEotYTN3D6VqMB5ZdrxLVKCvXgXgJkDo6XAXaAM6JtcsrprVPYb7q",
  "key26": "5s2SfZohxrSTT2HADfg6rMARPNKxPdg3J3i6bRKmuqGeZ1GKcFNhEQMvDonsrTxZQP4KYLEUzi97TitVR75DYLQL",
  "key27": "4T6ysrdQ6nMvBs9bTK5knsQdWNjpmURmxnxWHUouAspEJvqBrghs5ePvuTXEwZBJfy2t5h8AxGVnavsJ2ZiFeoKL",
  "key28": "5mcsRsGCJpJF6ijaFwe2L44p92qFmYQyznrLbfceDQYDwsjWR637FNgUr8cNv6hMi6bNoJEqZmaKUKPv16cnTq71",
  "key29": "2m18mpjm5MYJTrdrQB7gFwMHmfLZbhbEAyzEbqtgL7yaMTBWUhaz9ipgpXRnoPbUk3FGVLrB7zPmcYGuuJo4HgEu",
  "key30": "5ZxyvKFahkK3ouRWkYFFSBhWSTTzUsdzwFUQiEMJENtDoQhtpBvitz27j7RaMqv2hbuiq1zsRDtLbxkXP1RibvJf",
  "key31": "3QjyEKi5egzGzMu3AD3hJ6EPTEuCGM42EwDWApgpuQfBy1osLauKY93tggEFzwBZ9ECA8jesfNL9MdcqrPLUsFq6",
  "key32": "we17soB8cC7vFsymhJ6R7VnqRKoKBGDJHQYheixa1Q8L3QN39P3EbueyJjfcTPd4XYb7DfH1tsHbmoQRaQkdsc4",
  "key33": "5dz7Ybavm99CKC775uP1FEVpfCPdsWhyXthUmMed84MK37xPP9ZAoxtbugFse57ufGgsak2YqLatWdbSwZECs5aK",
  "key34": "65zfTgPjzbTj2XXThFGzKkZYcdcqXJ6bBSGG1pWRbU2me3j8FCJDDA6pthqwZJcM1sLeB2VS4JWMAjF3aB2XzodL",
  "key35": "2ttTZDzrH3sqPhMxYwHJgzVfwMXmXmXF6jYmWEhpxjRCtksTsVs9DsPN1rfCbAH2juVBC5GiGzScdv5Xc3n3BL3H",
  "key36": "5vDE6tdjg55NBkDDoSFKv2NzS9ahxhf1XAkqsbz8qdWt7fzsaoCb2cTujvL3hWG46HLMGfQgEZR5aHV7xbwdRWHK",
  "key37": "2SoVP2N1bH4BAeUSt5TNGXwDdnKEXhnSwFnZSuGpfWuAV5F7kMR1v18wBD4aLd5tNx9vTeGYHdhsQJfdx5T9sMgH",
  "key38": "4Dk6SDSiaPEZjPwpZnMHoVyBqF8SUEvQ4hLYdBrfiqSq58eVeJoMUmTczQSo1PoV4PueFsbCDhmTpqgPJRA7nZTx",
  "key39": "2npcEiJdYL5UnkwLXPJf7ierD8TmtFKiZD6oYZmDZNMQyv78uNcKwo1kSJGCkJwe2MRmjzQ6yXpeZxZtYPymD5FQ",
  "key40": "4WAu7VVDyrsCjksshUNzU49ee9xUu7jXyFbK5iWyBwhebXCeAaHnRmMAd3Rzvda3hNNUucHrZJh3vUbR66kmE9of",
  "key41": "3hAoGGHMApQmhU8BfTCN2z34zWKGE25M4GokEjuvx73NJoSxyjCBWo2oQL59m2c5LJYHzPz5iixyPJTRjPndbPZN",
  "key42": "2pHLUfUE21rnM6P8JZJGaogbVwSTG6V9kb1hEw2j5SLWagZNLsKBUXvuVTEPsYUtA63sUGB9upWucbYxRd3Jt65o",
  "key43": "4PuLt7WkWY8iZcMFzniViBVyEjGwRdReUC74oquQBwmW7KLAg2UXMCDmQKJrVHShLLFXHkp222BbzK9Py4C4B5pG",
  "key44": "2y97BW6AYpunRqooapq3CkaqgP4eaeeygs77cKyng5bDNJfWbX4ePj5ZKPNwDZPkB2Qcr9VCP5bDdhX15xMf3Jfi",
  "key45": "1GzNKCp2Coa9EXUaSgoAFazS1UcVsXAzsVMj6e7v3suumSoTAJvagiwnJqStGX81uQMHztM1w6LCgB2NtgfGtXY",
  "key46": "DDuLiUScbjr9sP5fL1rm1uvxNKFGdSsbBHm21iowEWkHvpeSFjNZnFzU5gTi5Bx61a2tqyR8qWW8pjswtdubkpi",
  "key47": "4YAjeZNedjsCUAh2sjzs1hkQoNyf44ZneQqeAzAL7QwfvW7SDUF2MEDmmkdQxwjDnhCMFtf9mCoTAZB299wTiske",
  "key48": "HUbfZGUVyh2MqixzgqoLPA3MYJ3kKaTPLE1YHXdTnThYyFQHF5dGtsShaDf4ejVKzFHcYLHnEtUKQ8GiLBMuuBd"
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
