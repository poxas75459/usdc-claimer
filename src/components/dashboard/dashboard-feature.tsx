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
    "4htZLvfzFJ4c9Avd59NeZZfdRKh2fjrZG3S7LoEYtso3KJk6NUb1aPfVbtyD41BmVNcW9wbDPYu81MweSdoTYn8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KnPWUxha6AeVopTZyXdL8UtQSd5uiNmwrP1ivL64wt7HHm41Y3PuZnge7yg9nvXURopAbmRpyFndB3popzfYKJx",
  "key1": "2D8PsGcBDpNuJrSoWso6sE5QmDwfKoxzijaeiDNNVZ1tj1F7UvZg5TbkeBjyQkvaatBoMG653qA8G9MftoyFJxt6",
  "key2": "5stmmE4nWRJ2aoLHdRAq4UJxnQCRMrAoqndxhadkAs2UQzG3MQZR7fBqwM2Q9QJd6vmB3J9bepKrVPN38i4BoftN",
  "key3": "3mV9RqoYCbnrxXWqHhrzXSMWUA7qMiRCyKozaLFc9t7q4sn6e6Tje1PKtajBfj8ZDY4kfbkRYsiFH39aP1UxxhcZ",
  "key4": "5J1NqvL7uecD1E7cS6M1pw75W1TsAC7KPCmV6wafkVrRTrKpBa5hXPtgQtqYPs6uUMYbwcWBGkF6XQkks77ugXxB",
  "key5": "2qxkZHe9Emh52SWjGtUUrZFDiGgJZSaXdr9cydJpLpCVgHakJ3n9DFhFGxWq4mE4JpBfGojM6LxYMckhWzmYwBc8",
  "key6": "2dU3vQUQjVRu29bgYid4zrosPyuizd3JQUqzdioQh5XqYrWFaPFbXBCmU9eYnHQjwtKEtfh4bTbGESHwQNq4CKSA",
  "key7": "46NT5VSnrww456x2Z3WsY8V3Hx1PVPXCwV72gUgbR9R5FaayBjTeC7uRhyYA7TELff1XbCBPzW6ouhGqzMXjj99V",
  "key8": "3CxtxgcjvY36F5zjo5rJZwhHSGtMZYryC74axMqLfXXDP3triPo1Nmc4DedjV7DPNnje4s7yf5gdAj1hwKR5ZiMR",
  "key9": "5vpjms6FVd7dpDq5PNSHPxMHak3HGVwkBiLRoN3oU9u9i3UbaJzQyyG7YjAYghQxS4v6XkbLbNRZBS5FmKdn7ZvT",
  "key10": "edQ5QWV7h82PBNfibtLnKBcxSQGd4BqPtiubNCnwEUAEK3AzDNx8R7tXrBLsuVJmtxhVBTB6LmRrYd6Cj3k3aid",
  "key11": "5rLtif9viMjQFAeDqZE3TRQ5feW7qDcC7NJSxvvMXJyCZx7TWqkhErXBzqBrAVHDfF1rKU6ySSf5oZZ7FVWSRnHK",
  "key12": "3B3sfNZpQRhxEPQ795RabaksUrfFwsnvGsozDYez5f75XTbPAsMcRqmPrsokfaffY3A4Pxet1Ev6EThCQvTh3S2u",
  "key13": "3mWKbaXpfzivgezbBTGsuYGiELT6mf2UiP34Nq5saexhqwqWBsbMnzwdKtVWketYYBWSUQoxnjqLSyfUKFuM5qSC",
  "key14": "hUB5q6j5vwLdjjhMKqRnvBsPnYyGsQdDDr5f7i27YiejDoP8RimjXMKUSgtzUzZPLsRASwYEHuAbQ18bsdwKfVa",
  "key15": "3WZHTEFahCsbANbo44eULaTQUT4vShckpKW6FVhmgpMFcdTjC1L99a895usZVu7e6fbhRqNWC5VRKgzRc4tHFUJB",
  "key16": "oABuD56EUjEELmheE1crB3fJ2fzCNrGASxqvkv8t5pQTzWhSDSV5b6byie7Xtg1ecMLnWJz8vxWGyGMps7xfSsu",
  "key17": "638E8Fi3VTAFxxf1GPFbD4dxJcaNJTTcAspPdLrRpoRGREmV2PtniPEFPPxgTc42XP1FR43nY18ksPWUAN5h5DPP",
  "key18": "5p6EfXx5QxBzGzTHSs18Q2m5dnrDnjpr4NoXe2cTyCM49ft15qM5Wn7hDDTDHC1hFnKue92r5TtH4VsXqyweYoC",
  "key19": "4WuRyxXS93V5vHw2aT46qEfD157SZytew93RHBx32FasJYesef7n7iYrT96gmVcNnn7tQK6jvdAzdQRBPdeDruPu",
  "key20": "3yNaErDuzcN1h3Hu9KJnqjDcoYJba6jhMaf3F4dD7HNFkvEFPJndLwCSHNmjDxJn5jabkBknart4RSrGdzQ22dv3",
  "key21": "4soxBQNBhqNz4WKDsTUwkBuudE3ddiRyNGeE5fgf6NVNscs9W1Bvqn4CgWsYinCfr28oGU7VFeB3BDZmwwLWuWgL",
  "key22": "5YFT2Nfs8SmQMhLMeXQtDnt4Em1VcQBottBZT5dT58khp2LtAn8DJhnzUD4ce9aX55xbDuskWA2jpEVuhXDHcuZs",
  "key23": "3u5u3ehYMzeGyzX2voV5fzYk4HRTZLZLi7CAb46S9wkYSQ6g9sNq1kxowdRsG2A8zi5uHHAsbs54etGrpPvfFhYo",
  "key24": "5g3WhR1fEsrTVMVJm5DreujzhACjjSjr7SEysdiKkrs1fgCcWVof7jNhFSqyQxVoqyyJEkNAY7E7DjMtaysvvtHo",
  "key25": "63o2zZ8TmusZs7EmYN6Tdyb6i5EbRZUhjG5b7PAVdChWxfc7A9cFFahJJoxWzpjw1iKVhbDT4oaFn2pSh8h9BfxE",
  "key26": "37mnAD1cDYK6ZbGYV4NbT3Htry4pvx1ZA9uUnNGUFK1cfUx1QJ4bvhVkHV7AmgLVoUzV1Xdo8UH4vjRZczcs3guB",
  "key27": "4siMWXSxk6DDJwYFLLVc5PfXBKNPvLguLt9X1QAYhdjJdZdAtdGWTFjLNaorvhiTn4SjLoaUbFNYA7sosnXAEuVA",
  "key28": "GKJpRzv6PTYFwj428NBa5EGpanjTPNhEwHJq1KcwD4dsJsujGwXqZdqDosZ9bTXPruLdfU44bHY7mT22PnSwbvL",
  "key29": "5zBrx1rATJSCL1uv8xpfKNytwtmQNtHbvCwZ46Ko8yxLBab7RGKCxu1kY2oNiz7AwnKN4oCFeNyDPryeXv6aBjka",
  "key30": "3C21YomKDotUvGFvA97D6eejvWd5eyBAud7MZbrZccJ3VqSukdycwpRG4YfcDpWeEVboNoZvJRnX78F3cXWHHrUg",
  "key31": "UW95vhtiYXWyAAtrCWALufeuj3avGYJaRNo36m3MGCvnR2ykkHCG8MMEULTGq9Yht3cCz4d8jyN8ZUBdw2vxwWh",
  "key32": "5NcgjyZzet3QufD8KkkRtFoiuyRXuf125BaYUM2UKK2MQoLmoGfdmecFZ34Pk7PrGZWq6xF3CwGzEjXtQPf3Srq2",
  "key33": "39sBESvui4yUGovKaEbVcW7SkHv9ALX8pKGPWptYps7GDpmfvevC528pQmSYfdWpiRBqTa44FMi22KdyEvVWUWLa",
  "key34": "sZ9aKcrFnF4v9yoetfSykcrh95fvMHXPjCkCQHhxq9iVvk5bzvvPvCWFHEf2aVZb2CAFDfnuEkJudFk4CtBk3M6",
  "key35": "4XcHi5FG6evvvtwCMUkFndEV3UPU3yUY8MBQwhxnzCXscG57Ppw3Lix5qG1u5YvzBR27M8TnBcE5cxFjLZoHzjAS"
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
