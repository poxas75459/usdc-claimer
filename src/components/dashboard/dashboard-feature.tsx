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
    "4ZJX6L8r82x2nmRr5Ayk9PsbCT7T3rU2uR9AsYi7BaS6JkDYMm31964nAkesiyJkLaiUWFejvuLEF9YM74nvPQJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y2dWJMZEej7GWAUVkirDerD88DtMduNg8RFch6gVXfeG628oFeJZPkfsieTDMTH8t8pTE1DeFhfhf5C7v8p6HQB",
  "key1": "4KwevB7F2zNKyiga32zQoCbjr6H6WJLSd1H7Qa5XMQqUJocVJAENdHPpSkb3n7WxaQBuqc95ufWbtw8G7x2T5UbP",
  "key2": "3QrL4S4WnThrPP15BCpRiuyuJv9A6rEy2GWhZaL2euHdAzRC687CTLcmGJiMzprf51hdnJVEFnuEu2AaxVRRgMF7",
  "key3": "23vRV8quaiR3ybXU5bnntT7X7aApHArDo1fPaox4g7Xob2gbJkJf9p1QHvo6UJMmH546LCn2sauk5GqZny9aDXfx",
  "key4": "5ah345wrxHLhTumXBcAv6z6djedMxu2jVMsaUT5gr82KGcNjiWYXRMVhNoeZL7W7TXKBEv5dbEkeJepRZzFCEAb6",
  "key5": "AFb2yPpX62vTkPNMGPoJwnWu67gb9qNuKu4QeXEk24YhYNZXeFcJjxVgn5ZgSsiiiZbYBj4rkm6XhZ9t3VrkKBu",
  "key6": "4VwG9TCw8eotSag6i5EYPMUnckF4R4wpskphJKh8Mz2RM7k6RGENoQiLnNHFEWUEUCmUvC5r6JVY5Xn3XXbmTkhK",
  "key7": "3HBqBDSBMEfCMZdPSHHsoSvadyW1h2mkeNsYbkL3NwW4qh3FKc3H944eEzmHc4WFu2gZSa6gxAg1PMdHRodukMvX",
  "key8": "28qkZsVAXtuXbTqKgtZbHFxwtAdZFhcj151LyzX5PexKW7LVBWpeVz69LRFSWVFNNqoXr29yaysd482szvVHVsWf",
  "key9": "5SBCWFh4XFWdSBFoAVCdcCUspqW8KYUisV912GwgGVWi7B4zGWq4cpQQm5uUgFHVuRWN6FSWJWYeb67rUvvnd4dD",
  "key10": "3HWzQeaqgRkJxvSySaT1mcjD7RcDp1YBr5zfw33BzDwd2BcKutzbhg9R91saLreTKz2t4ej1GQzERbbbTbzHRduy",
  "key11": "5Pziym152dPd5w91ePgsA2DTF1aNvG8nM3VTbsSakeQg6GHr2HpJwiNs3CRkNpaqVFPvkuzvM2dpHzNsKKYphqwC",
  "key12": "4diYEik1zougiAqEqCSmFHoPMb3GAnCR8rujySF6DA5bPz7ErBxBH1S2fPawkjtMbQy9rrDyorfNCsmXTy3Zj9by",
  "key13": "4f9y238wifhSH6vNG3p45CRsL972Zc2Y3Mzrgitq8KMZGt93EEhgUqfU7uxbmySaWPgB4cmhNNmeJeea7SHnXZL8",
  "key14": "33R579aCzp4ANcSxVYubgTpTwaiMW5d2K7ksYhrHBVyQEcymqH8SBrFneCQbp2HbhZqwKRtcQjj4MEXUjqnuZUtZ",
  "key15": "35iHQffMrTV5v3LVqs1WSdkkqkTdYZg6j4VY9GHTTgXbQFW7AVcr2bEKX6xnX2EpfPgvEVujcp8vuBYfN46eBVwU",
  "key16": "QntZsuccPPWDR4zVgvn2hz4jCmmPdoFSXb2maxgN1kS41TwAmNKchSoviysQTr32FBaxT5MjRe4qEHonG2dCW9D",
  "key17": "2TRCGgCSdzBku4Fw3TX96BT62XNMLsQzuLPfkFRnADQSQvRUp7VTvPo7wCfgyhGeRfgCDrNhfSd1R4LSgdTpHyUV",
  "key18": "5xxWMfaYodrtuo6F5quqAsH6EDQrdFP7fbcxmvxxX8nr2PdSCt7LKbYngks8zVqX58yeb3htVcJrgNJCN4cv9Wyg",
  "key19": "5r2k5499ZEQch7eKoweG9msqmYKERFkCYbHdYj3fkXmf8zSXAb1sfwuxzzBpqFD2v9vHHLz4BmLUnV4gqfT4kk2N",
  "key20": "5DUKoXhaEY3w6AB2FiUBrS5NY6MGYchC3nJAzFMBhrb6Dd41gAGg9iZemfc9ap8QzuRyDBuoTpXtZ6frNMTxLV5D",
  "key21": "4icdfry31uu8S55azYmc6mpkTzh2T9cPgqiUJAivSq3kTuBGynGSwNRHokyfSewru898SKAfLq9BhZfkVgFmn3vd",
  "key22": "31VfJzfEh9gkKwkTF8a8uasTPcAwQVW6FGZVM9VaCKtSrd1VYoy9PnZEwtvffx1JqVLuW2Wmo5CqZXRaPLmFo6Ye",
  "key23": "4iEadqx7Mhaj1bWfWddJfK9DRjoDdbPm3iHKe5UKLKaaxZGmDEypvyAXp4HSd5Xpnsb3nX3q9ntGqsLMg94F9oGs",
  "key24": "24MrMgym6U3vEHfNN2WPZxTy4qRGa3C18EUcAS5CyvCkkUMXfV5cNu9q7g2PRALQp26ZK8xoeR7VGuYme6BT9C24",
  "key25": "5igfS9hPyoC9LU1NfBLPQnYQwkY6tPHVbCs9KHBojX97gN8KdGAvyW6gUAbFrwX7omEipp2k6cAhXaoCgXztgQtY",
  "key26": "2UmiT88juHPx2D8VmE7NaX92rPYzzQknzWjy33fnCYQtj21acsUmDMVhiMyKBz44jE7Zm17ihS2TjfjCJGDEA5nf",
  "key27": "5invfLp8FaVYWC5LRvbmFfPZzaNSddQ9pnFhxV7v11k7pRka2kCusMRorf4pbyEqJXwa7DD7duETndkrhwoq7iqY",
  "key28": "2Tijcu8F4yyu2zJGdXS2A1JmEgZp5HqXpbgY1KqdGXTPR2kNXZHG19SCvnE7kZc4xN7E7vR5vEmHkxXUjMiGQNyP",
  "key29": "2Kzzf4VccjBbZrnTzXx6MNBzS4PXhM8N2AXrykTSs85USZiqDdeL8Dy6TADSw8pEQZ9Lha3gu9MiABiuqwsLM7t2",
  "key30": "hftVHgpripuaBddiztfi1M4XNMaGPaxxguPfCKhUFXa6ZZx8iKLUNTNwdNhcdamsrd7mUDnNqqnEHCPJECdJf7K",
  "key31": "2t8GUKnfujAC9Mw4KJsWHSkme5zUp3tuXMFcM3ZhWa7rSVgAGAFiV5p5dfpoUtBu4MdTivhQFuq9eVodtexUHhrb",
  "key32": "1fM7aERZbY8KpE5NhL2afaZSriTWNT1NxwmhHzWuvzSeRnzaFNVCeRtaiAHwnN39vr1xWuPP3ALVkB8zh8zVdQU",
  "key33": "dKRYYMDSc2bti2gATxzGmy65ogi4xfC7BSGzJV5inTJiNcH482osWKCmmCY7v1N6x9yzzy4pG8ffAV5GED87Nvd",
  "key34": "254oxEcrPdpSuoA68iCGNfJL7QTPS43j1H5fFuQX2duQCdh73vnDqvXzdcTuv9HHQi6d2wzCMMZHT81vu7mBeyTb",
  "key35": "5mwLYhBkKubFLnCyu1SqiGffcPeASP7yDCJPU6RTP2Udpp4RQsSAqo2YyAnzJg1LvXbvRurXdw7nQqJLJUrCZMzp",
  "key36": "5GNUiAY7fbe44pcfVZVHTjXgT54tiVYiGCFTa3KH1g4yBXj5dqm3H6JDkmb6G7a8EMMA4HdYPfd9dhAFev31Lk48",
  "key37": "4FJ7UgGRevs84g8W7qTbUdUJkddAn1gwcAHjTp8UqobAWBFuGE2B5jVgvJkoBFAqG6eV6HeDLfkhSdmXrpodbWnm",
  "key38": "EMq5ECHUyXGmJwD8cNCEEfvEVQwYEjDL7Zyvtzar9rtq6B45VSVwPccmpUudvFJSoCHNpjDnUgQdJ6cLCkH4sN9",
  "key39": "4ERxazbvCwK6gu3WN7ZTfU1BAaTpmQ1DfaLx2EkZYa2UGhKMcLvQBNQr6J7oWtRebnLqwR5zuwJPEid2pz1n2enT",
  "key40": "3L8PkFHQDvN9QdYrdmwasB9N2BiVd2jpvmsZStE8BfMhaywkAFQdxqYdphmLXuQRTH9BA4SCxMjEkMNp1ruCSHdm",
  "key41": "5NcGsAqdXUC9Ya1yq5hqw8H14hiGCKXHmVEyoVY86REyuAKTGhDujKyLkag4rtFXdHDiNa7zDS2sf5UdcKqS2TV4",
  "key42": "3H5nfDUG1zWcFBTSQaJ2fFhybs54mAukJK4ycd3wueo2uc1G1v4iNuV1r3nrn8pFpP4gMmVSgUoV7hrkc6kxbrpU"
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
