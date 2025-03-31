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
    "2dCgpN47BvvhCPRe8cHsww6jU5M3SYc7fn88DXR4AgkXH93xDF2xVnjsZdw6uWLFBxxHnwyipLaqN2sDWVZZxPyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rgQ9zXzKEA5GrLQnVfpQNAv1MtYcCKcx9UHF1qKQue9eyR6uzzZDAEBb4YSLofjZWY9A8Lv1H8NHWdu4tNah4ur",
  "key1": "4ELKk96XpKtACQ3wtR9Tt5CymFyjEvii52zvNwU6817iTMa744erBu6FPRMynecCta4h4gsy8uEmbixgmZNBVJrs",
  "key2": "Wgw8MvVUV5hNxNCAUU7ZqubcdSvzuuViD7uNForHAgVKHnJqBbh8k9XwJKCoy1khtQmCx6pT3aXH5Qk3NCVrNKF",
  "key3": "4VWG6JzxzULaYvi7yMBhxy6hKXjwshSDn22oGn8i7u3JTZNLmA2QPbwDzQpy856uf2nteSYYZNDfe4wsVP2aCPzo",
  "key4": "46KZ5tRqU129FoxWjMw8TnGWmkfwY2HP8SPveGtQAxXjdhvVUzHAzE6bWdfW5vNMmnMVakn9kG978813nxD8zKBt",
  "key5": "5SpubFPuYGZskuqGkZEEJ7MqXypvPnedhwHqcg9K8ezb47WB5gfMjYQ966uNUdNo8raxPr5KhWmoNYWispGaJ7t7",
  "key6": "5wLurKhpVdjrk8XHF1x8Vho226kyYSCG8t4xDAxMeckzCFqhzd2XT4A6iBbhBZ9d9R33sG1J4cLVS9nT7D9Smo7U",
  "key7": "5bDiLFQQhpc1QrPS2wwvxqMEccaqk1q4Xd7X9yzTvjtmNx2Am6hPDhv7rJy8Jo6NeHN98g8B4DEJ1nyHeD5RYYYT",
  "key8": "2muaw7Cz6xrGPRGXksrobCqY144xac2ef3XoghK3qYWA8DqgFGnAJj23t981yfZrX25MZie8vFE6nGof3UEZKoEh",
  "key9": "5N9XhfT5YYvR1G4zLt2gUNBGkBB2HfJDpBD83JSERHfXf3pYMvsZ1EQvdcrD4aK8VNQFxTujvkcKsscvdcyzLd8W",
  "key10": "3F6RDz2hoQ3J5S5Nr1HESpNTjzw77KXxeXQRbcwGzSffbSJcb1GrkHREDKwSSJWv3Y3bb3pvYnTjrafTEY9jpbBL",
  "key11": "CfvZwVTAQ6WNceD79NhEjamaZcmMuDowvKaVkA87rZvLAujmBu6vvaYizCkhn1vBRwVdKLnHeVAermproeQb9Ux",
  "key12": "zkGZFKNsxjWfn9UhipMgWmBsVQUKyykuBEovE8YZ1ncWVuXw2ceXV5FSpzwzwR5QHSLrxUGbFsGUL2ik1AgV14w",
  "key13": "3ecmn2z2eAA4GQhYF6VQGLftuYZdVkef55CcED2i9JEaiMNtNt9dqEDbL1sD12n38HotGEmDgCrVCr5pi3wjED8o",
  "key14": "2WTv3B7ihg2KYq7wwkHqL89wNxs7r7WFnBjwj8jjoU6CvD8sKeVEBnW1oiZCNwVZf74hH3rBS39koxEKUwkKekRC",
  "key15": "2U6yzoxYZBCZhsypRXcyqZdzjyddUqR8gxMqwunwzgnA1bphZZiMsziHSg8Ki7H9qMH4RuUXozHaGTBSR6T5FCBB",
  "key16": "4uVqDXttXm1RT8cep7nSf4AKWtWKn4PR7cEkcgiv8ER9qiACTnjcueadyQ3Y9UWxtJsGXKv1TaBANmndVBYaHfYM",
  "key17": "5YcNfc8zwyB8ZtvRgUmKhYhAg9Nn9agQ3gp3heC2uRmcyqsQB38AL13qLBtfdAwQZomk8GkuXyg6foDdthg2PTZP",
  "key18": "2uPri3K2gWHY9nrPeyRvdN3a64CaR4irZyc1epnsePvt6tMFKBG4PGGXbp5YSH67kCdoxL2H8XYpjQURbVukpmSZ",
  "key19": "2UDBFgPxzTRSnMjnNMstRbsBhsdxjYDJDKBZHLBBYDtriLBrpnERgPhDgwPbiVvWgoJMDGcC6Bm3SughP7vRBR23",
  "key20": "5CpTddYnPmgxDmqhawptsXSfvwMTAq57hDGGUD64cDzHSTUmkZrdtMnHJZ9skyPEGVNNYMnCqMifJzaVVtA5vbsr",
  "key21": "4UkSMKrzBfcNn9kiVDPkpj426JM1inK4ZFPH4SdRx3ULBCWNE5XyXMuRyzg2GpzaWiyw9iKCvk4BXAwykC5dvWiW",
  "key22": "ZR3T2obS8V9uw6Ac7bAiwPb8e833z21jknnxZpJk5NDR7he1Te1MfGRcmCMHn5s88piQhZbMEHcxBsifGBEfyz5",
  "key23": "h5TKX33vG96L6ByUD3Wk27GYCvw7MX9NSHUoGtUu6Hebp1YwFCbiqB7GdtZNMRjvyKrg3F6bTMUGx9VTcosvhS6",
  "key24": "2r9bmkCBLqB6ox4TDyVQtEU2S4ag1v6w4oxLZhipuBQLop8ss2BFhHKCwojvRL5gsEgSSqWGKPS4savnbTsetQm2",
  "key25": "64j7oy3w3Kk7PtT2v35QCpzXYs6dyQ1uMN5xTYTUya2NdSZdGyt9jxaQmMpycvx6Xroi8Ye4XhdoDPjXrmbUp29M",
  "key26": "2gqEKg2ScX9cCHLerFfdUX8itnu6qe7YuLXyUCDfQnuDJCLi7H1t9wYYb5DUP8UQQo96m6CDMYn2Zan5x58S96N6",
  "key27": "49RSAQ5L5gcchgUTeQ25qu1voKDvXr3uhCH6jXfKhoRcUbUi2dP7j4LE944Qtu16FRMefb6RYFztsuATSQNWmf3C",
  "key28": "3AUAQxAVH8MQNPh4DoAtEKqoy5rMsPQ29f6wD1159snjM3bDqifh6R5Q6NKPwR3X9grrPSUnTmnNfrqRiew28LX1",
  "key29": "4jDehBCEPdBTjXQDTMxeZ9i5ert2JswvqiZFNo7VqZVRMr9XCWDYLNNcLXRHD1AzXpAFqSHL7qWgFa6QrnjD3pWp",
  "key30": "5C6NhNoci4tVGhp4TuEwYFr4Fcr6y4k8tNVHquhtz4MUmynTgFKGCksY9jLFF5DEgB8Dau8mL8Mp5WebJMSNAQVa",
  "key31": "2HTiRZsez64KmTzhwPPT4XFWWZqrvXRfr8E9jMVaJFSMDvb4npthhcUdLWEgVPYbbuWBZSaRRc3kuNYK6xGLdfws",
  "key32": "5zLuw5rjjYfVQx1j2wcKrBSz8uxVZSBnAp8v662pWxJw5wgXGD33J5QavuTftfnSo2NCF17FfZbiMtakCo7bVjgx",
  "key33": "4RuCpRHo4UxUAjVMg9fGP6UMxEg2XxG2exx8GV6vzoYify1MhRG48E7Jm4LjVbJN1roTeXXYx2vKNPvSmZNKDM6s",
  "key34": "4uDV6TiReDsPUaNcgEhHsCHzLgAbma8B9gHgP4ZTZN4Wxf9FK3vynqYkfQ1PxZKCy4dn4BSHm1tKXPDRBr2bZNCb",
  "key35": "2FikQBNNSBRkNXpw9exbx6xAZGxWtKwfDbSKJ4JbYBkREm9aCyiC4rvZrMjsztHtc7yrLsAy2HueDW2s6YYzRtN8",
  "key36": "3TU1YEt4TsbBL6xnS9xfVTSJ7htErASFYQvhPxyqL8TBusezs4eJXoGfhykoHsfz9gJ6QjHNSLhHr2h52BkA2h3U",
  "key37": "43VjZ441NMC5xz9QgnxeD6Lf4NkUgEbDUB1pB2348jDonCffhYNzxD7T9XGBrugvfLKQtbhALoCHxALjJmMZEQm8",
  "key38": "4woHyAfjdrzDM21U766To5wmqabMTXYtW4NuNj6s6unRMptzLZt7jT2TazLGf2NMxpzhrWPQKcf2qXf2v5h6ia3G",
  "key39": "CaPbGYsjUebYZzC9joPNuXqq1TQHmQfQJzxk8MSV8ArZT9kAQm2xfWTgX5kHj69465f9zcpgaLW64c9wQ6qNCRJ",
  "key40": "4h9N3jimM5BQJ7g2DdRUTnfrrA68i3BtPbgWNw239Kbr7sJGrbNoYEZuFuFE8faWr4ZrCu3ZaTNoZdypYC5MtWF7"
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
