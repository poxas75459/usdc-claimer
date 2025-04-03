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
    "5QfbEpeQoGqo6T6QSDdZLmB6XL4K6LprsGCWV2YmHWXpsGmMvHJiZwwcRdtS4Y8NCXDa1L1ncnNVm37rq1wE6jsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iawyXiQ22XMd73vnF9e1FHZq5Z1hbFfGm6JmS9Yag53euCWGcqepPGQQFUfkShtsGiaARCCuxofCFwisZDjiCXc",
  "key1": "3maUA19nRowpNhawm5yqDQbx51CwUD2sGh66NJeJF2NtMnJETo2uV2uBxcQYqYPmmBLhLrRZLB9R7TofuSHWE8xb",
  "key2": "5JWAhrTGUmjxNtsHdJAzQaS7GctFFKgmyxDwwTp4TSwBuyEBZfzbDk3u8XWtrJgmioZrgn46ymKze1aa99UK6PDV",
  "key3": "3hBJFTXv1K2hsBGmWzyjks7gvHwzt323kgCQFsMfXjGaXW9ytKGGLDrkXRx9JkUMntb5mpE61upfxVnJHDSR3jx6",
  "key4": "25Z2d3fB6HnqQcKrQqkStSjmHYsF9xVwDhPK2EHUnMvCAKPR3NzretcGrMiFxUe8e5akEYhhnSrKvKTMN96UN2zz",
  "key5": "6mXwoR5P52NA5Q53DpXtYF6XvJfbmfGnWd1eFpWVMyHUMgY5pKbj3gJQ4NWzCHr1q6QY8cv7uAWLoLkGzEdpfJy",
  "key6": "5fHCEcQyFNJwBZNfenywsdsGNuBDMUWazvwBC965z6iKLuUjeAnbQwi9CXZ2UruEHtAR9sMLqAMeoYsNkR3xDJSk",
  "key7": "5MW6TGZQUU8TiPufV36Duod4SWFTUozGdPe6uTF1dkaC347mEYpuSuM94CtyjV5urmNXc2q144TFcoBM6b4hXofi",
  "key8": "5jce2xHYfqFPus7hAcmuX5y1st3j8GNmEtdkiTdyocsx1YKLA9SPGU93CAtGPupx1su6VUw91rbATDTxhYBgLbxd",
  "key9": "5MuC2X2Mz5xv2gALvpjVZBkSf2KtYc9rrGBfBgS2LU5U8rpKZEFQui9sShvwrzUdQ7oMxuGUnB8RQGbzhMYvkYJV",
  "key10": "4rFEGPCk2x2HVVkHjn5tTcgRdc3oeEcjFMNBcEUvLniQ5M4ULXc7K6BajVX7CTAVBqVrda7gRxdif9F8YFWTSrA4",
  "key11": "4DVnBdXrKUDNWwRza2JrKDy875Vm462mPrzcaCiyJgENctNthrJBMCpHiqfYum4J9RKUdjnLs8hghL6aH63FNxAb",
  "key12": "2jsJgK5DsThnVu1m7FeBW7BB4AHdr541uSRhdrXMWaGbgVKvMnxuj1ftx5ZFF2Zsjv328HkJWrTEz9e1jw4qXCUg",
  "key13": "2RTxHmVaVtmwkyQhpQu5PL9m4RuX3nRjwsMAM6n81EDKGC33evhdL8LD5jLDBP2bdC3ii84kjBoM5ory3xjgYWzs",
  "key14": "pKD6n3yunbwrjJpWG15rj2YjyZocpM3tYbc3jVBWc7AeszDe2kZKD87p8t4uWqsrYwhnNnc5UGVwy8Bphi3nKmH",
  "key15": "3oiKZaRmtU914NAX5YfJqYZUYZrb23D8VsrnutH9vg6fdNdTUUWWW2Ech4haVdqk3sSDg3gEkrpcrbBhJoPZhr4D",
  "key16": "Vw4F2sEEDwaAW1e4fPYjE483vHZE7jRto9w25ToUPfF3EKo7dNHacPPmg1HTXXuLwBvoedapLQUBKMCETegBz41",
  "key17": "4cQCpp9z7k3gbdXczqihdJQTgWygyZrAzv2Qk3W6d8mPhgpQfGBoSGidoJG6Gj2ZsD7FqrzGWjKbdzyvcLVit9rm",
  "key18": "D7Jzu7qurwLxhe9ymnqJX4AFscVGKApPM8uS2g8yxW5mnmHor8dFArMBEQVaJrVy2rF5q9A8ERYUK5RtX3itCQs",
  "key19": "2XW6yUJb1MHz8ESpFzfDY9jwaXznxCg7oGTShGxeNaJzeSQtbqZKJguvpuTPjPqgEbXzCpUbeMkq5ocLn2FS5G3M",
  "key20": "3vbbg3sFYn57uo1s6SsWvZ31cA5kcxPZUnEz1VSLdx6c8KZPo6PksBiS8Z6HHXm54bDR5WCVD5BZRyX9nJgbGrVw",
  "key21": "wHK8a2nxLvSRAHCMoVBSpP9Q9wGoHULLNyxKotYY4cf3BecKPEF2tKTKQJo1mrDSFuXp5wPWAFu8shDFZq7N8Ci",
  "key22": "27HynvGvquvMhSmZPLjn8SzpNC31eFFZ1BMssfHhgDENtXSxTsG1pjpXugtm8mwUXiVgs3kQU9b68fqMfxdWA3tb",
  "key23": "3jxaqMi2xLGYzEjpuYeZkhucKdU3HaFEZmJZTr5iLM4onJQuENejcAxQYYbvn41dpbzPKvMKc477F65c9CsNuCD9",
  "key24": "5oSKpWAQ8RCPk2vMr1aK5RsTzLpKvYd3ExoXGgS1EguNbTCyjwhXsNpgZbGSbh4zrXGLgxDiJaD1oeFsxSnhpau2",
  "key25": "4ZT26c4hwmXcamVqw359QabmKCeQedou945tQxvkhmTGpdsVRjSnwS8TL39uq135P9VoiLB3etAoX8Y2vcHxXECq",
  "key26": "5CC9r2LEgwMUXFFN8SaRspgrYU8rRhiTEqX2hhZyxso1UxBjhxSJBd2pNJsZTx4FULemgW1m4YPxH5xPnmM8sAGj",
  "key27": "3FPshAxBrT5Ky1kfxf3kXP8exFfprujf1tc9nySd33R1KnE8NUQtbwXgwrsNFzPRYFCD69rHLp5cqGxfrRU2U7MW",
  "key28": "5yepXzoDoZaC9xoSkWaUsoF9BpF1XcPdEE8g5Wt5Ai7MMXze764xcc5TXnUdcTLckFS7KprF4xJddnyV41WKTg68",
  "key29": "2oRqbLe6J7H3BqCS8wNZWvTteqEAbaQfrEhQa2B4nmMDKvhgm8Z7n42DYS4zBA951KVAhofyRaYv95i9vkr9CvWY",
  "key30": "2idptPfDtQsDDFi8XPCKySwvuBgeP8D8kgeAMronjxubohEEbxY7dWj2iCkfT8xAxd4eSEduoDP86TQDvRLTkkHb"
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
