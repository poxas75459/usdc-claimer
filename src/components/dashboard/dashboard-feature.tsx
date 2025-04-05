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
    "4qXApdnefhUcUDYUeBnmeYPUgyroW3HVbWDUduUp7UUwF6oaqZvexrzqFguFM8d7GKSwjhR8fqqLBNp2mbMvxSJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BkpTfvPH5ZgaW1DTZFTa8r3eUjcbm61imUYmsLqMGm9tmo4bf1BWfqMNe1tQc5GKzhmAdhbhJEV4fufryLfBCcf",
  "key1": "s1yPx7gqf8V47fkFjhji3X5zqj4FtvCrs4qxUKMVuExVV5pTq9jX72V6H7u762BiqCzepheFkJujSXuj5Lb9USG",
  "key2": "2S968Y7pj6GEmNtP7EbJJBgrQAY6LSS319t4XhDNVfTvPcpnYQkqSwaAEscAh1YBja9v82UbMbXmoT3RMH33pcJe",
  "key3": "2hpeKrds1n9v9wa3fLHgHhKjfRSZwAVvNVF8EhCqfqH98DMLX2ykCx8ZhyV9WVroPPFdEZME953Ws5yKqJSBSJWe",
  "key4": "38U3su6zmvZxK5aH44c8bHtUj7bJdz9SEtqitUPW7oLmszPGViNSvz45nEE19fEPxbdPwymHrjZ15gAryzxSB2kX",
  "key5": "4SaRQYGXgA5jEd39x4L4qaBry76v1fn7NzghnVvwU9tso3gVx96mWGN2mNCkxUy7JjNwu4AvFfkyzgnXGkXHo7ms",
  "key6": "45sejk9xDM7L1JmznXmVJYcBVxKx7eaXUCzhQCrnDfibSq5QM4y3jpBuAdq82muqstNy3Cwnf8qYgPYm4p6gcLNh",
  "key7": "2A1mhPbaTVxzKmBjF1Fai2dh8n4VM1DiqD65FavLwekQPfWuLwxA99kss8cxF4wt32SeWj5nRurzgb5DmM6ysGn8",
  "key8": "3CEBaKBAJ8HC8UmiQPwa8RegvMoYUKKc8C6jZa32u9oqc11ypRFtFAyX9qAs1THcRaRPwYnk5PFPKT6SFPcNcho2",
  "key9": "5ATt7jRzFsPZuxZ2ueJYGaeSwv893mMonUdJXJ1RFkmpH8GX68x27acdxNVyN51S5rfhMUxPx6wwaLaLow9oBeEw",
  "key10": "2omc2BUJD8aNvGobHP3AmzPbuPPTfsFh9HAYDRJGtviYcbcENv2JZbagFhjKYHtYySZovPN2Mo7G2kh5vdfkbdU5",
  "key11": "2CWttjNShDkNpu74Wg7HNpnri8x6QKKosNGwwT7RnGYTRrsaFNkevgxCDr8aueRsLdEKvstT8SowBBxeb7s3GHwc",
  "key12": "4vGAe1jNkVzExrdVTp8dXTsxFNQ7BMmotUC5qBLBSYxDjFLiKE3x6YkBagGFRadi6vDNhfCqtsqZhLdeKj84mPbZ",
  "key13": "5qwoNukyiozgVBJsPYg4Q1qF666axc7fX11QpiEXL3B3roMwsuQ48UJbkt8M1qGHAmG6rtHfjdfggt7M9h416CV",
  "key14": "7S1UcxjNeystWmdxBU1Lz6khnfC4ZgqPnenBzAuiV7PAKvoyp8QnVHFGUQj7UrMvnPM6nAgjp7q6QVSCD6UYGc2",
  "key15": "5YjHVp5FA4YdD4evSuG1pZiRu1fLb3UFpDZ9hAPwmpBBoVYP8tgzpBqGRKJ6rATsTAx6hMtNESrYRDKW5xaYmT89",
  "key16": "38TCf7rV9dskQW2gxpJ1ZTB7XEMGewTH9uMBv9LaRE15631RTv9k7NE8rN5LgA4qrwtK8uktgpx2pJPYVmvWY4if",
  "key17": "25BqXrpZnVhZMT48QAUxQVjhkV4Hpoj8WBxQkGGzMzdxy6eoaMsAJrLm6iHpEbBxaiFP2c9JJ17gq6uXgqdSqb5D",
  "key18": "2KYc5ht6TMB3vQLu4gpA2vFwHobFUnGeTuVz4r2zzJPP8EBD14f2Q1BS3czao9Z9bMC5sZisy8G6u3RDMWrFswK2",
  "key19": "2tqvwmXAAYsAitfYYmWc5ng7MpqvTNzQJcEb9qyLED9EHPgMeHTcF6xByANhSgJWfGx2Sx84QWJ96QDoDnEbC7J5",
  "key20": "4jDB3VDaG95hFd37PXv4gQR6AKtgh1oGEVtTcAq2KXTKDeLpNh14r3mdUUHybXMoqEJ3oxoSG3uNPNuAxTehnM4",
  "key21": "4T8GhbAKgGdDbtpwqDVimmzPFvwQsYMVCFBqdKtjq6f4Xx7qWfmuWGALg3V8zAF9W4CWARC5c4TDyoZpJHgaqXHS",
  "key22": "4sPt1t3NRgs6oomr55Lkja2LDoRy2jXFWeZk9ZSHfVcmzsunQeV1hUz2QrLuyzzzLHt1MhBX2HbHoG7JL5s2fRvk",
  "key23": "2Es7ooxofHJUV5LL8vHx1HfwnoeG3stAvLMfPHjwSZhKP4iHhSaXesp1RtNdVq6qxNxpuFysKqofZ2FArmMg37mM",
  "key24": "585wS7LTNegpa59ARHHq59B2sCfaqsuwSNzB1fGZFrudmS6F7DhwbQYmtBgeARCMdTuXzN4k1PwFvjqtkUNoygRW",
  "key25": "39tih9PxrBJ6UgPErzCzapCNsyTpDM9cn3PHC3VQKBXdvyG2N6K28o9caozHGLUKzFDwV4ooYXzXPEgnYsU9aKfc",
  "key26": "4jW8bKHdtFg2a6oGhWwTLBwceGqwz3xNiRTdhb3oqAWqsr6LQFaRwfMY1xtriEVUrhdH8KxVtRpZX5txXktzPm2h",
  "key27": "3GiRTbYii9RKu6SyBpowysGHuYuu7jQsQhTX5yZsxzqQKs41UWYzdYmZ4xeF7r64yk9k1NG9rqLWH5eeUoHFAhph",
  "key28": "2SoqtVGtyiDywt2zZPyb1BFbocwDBhAKZn7Uh6dm6yJqXdne2y8KqixLVotjgVSiDb1hd8RiDKkiJh9oFcT3Vrgw",
  "key29": "pXqV21AHJmUdMFeaVJe4ahRabfNaPbcbdCq1yia6FAxCzf5CMnKMj3ycMWJXzBfn7xaFNsPQcVgt6Zn9GwDjK3c",
  "key30": "46DCjzZPJrYuKuxDosBnHKg5zt1mwaS3zCmp7AWtsRwtwWhpCc3qU8aYrXTxgu6GYgUfmXnyTckUqCvGWVHK4kvW",
  "key31": "5QC1aGXfKqfbGyjsDyQBjrS1YaqZAeYR9d4mKNqDdUt2Ad7UcHdTognuVoxuJgZcSrPB8cmT3oruVzPefmUCPVDB",
  "key32": "5seYDNgBaBYMHrZmAUEcsUi4Zkb1KgUdUKABcD9vaCpWwtGogmEq8Vi4if4xpkdysR4NzKhDTUjYAPgNvmGfKbCY",
  "key33": "2kX3XUWVVo3cZyFq2AHHeAv3mdH9635h5hfWpH38DMNVhNSvSZiZnuprpUSAQ6jZipUoqjTHwQVjMU5CueNvxDxq",
  "key34": "2ADftt4gRQx7zLmrbuZRuzEz3oHzQd3deXVfqAyiot2nG4oCofmyf5g167Ye25SeaPrz4wgnRa2ADF4FXpPiqFid",
  "key35": "WMV6ZxiwSHXtSTp9U5jkLekz7UfJriL8QgGspDVFkDAFGU2xqQ1mHSypE8dSKqrsYAm3fB1BEUmNtgNNq5mGesm",
  "key36": "2buJPBJcz1hMmRXN956fQLxVps9Pw9Pn7nDuyczxuzFvqdSA64qqqZdd3b6A7LHsfSMxmwvNURwpqoCmzX7qRfoL",
  "key37": "5FTaYaD3CuUMLMr9tDP72ogAwMJ9TAXbrFUwRMmcdgud4ZkyLAQ7NtkgN5MYQxJwGgGV3RGvaHNpohDztXQDd3qp",
  "key38": "bq3wYRSL3adJ6qQvF9pzxmBJskzs61YN36gNZfFNqr43wfAFKLA2MwAiBP3uHVkRgWrZLjUZofmNCuFXzqAYrMX",
  "key39": "WdaR6ethTQB5bKtuhRGj2gmv1394kZMN3gg1MAEV6siLYt9WQTw3GNL95fNhX6bAgonRXouFD1mm8ZAgy6MGHx8",
  "key40": "2foYbWVkJMGftDid2rP9yFf4pJ6gNfXnh3goYXt1FSpDafJasrpYsJUdjUtUWRTybnYhHjwBk6tUriwpC3ZXptmb",
  "key41": "2i7jYVBP1cVe2Zq65Y7h2VzWwcKaZ46XhqsvUfYBRrNvPvBc8Z1SJcMwzgfNkxdYNsDVwcT4yCK2Ni6BDmJodKC4",
  "key42": "2HvYVwUE8NnnB4g7nWj52ArZWdM8s96AqYaUnuD6mbNfDbSHwaDyrVvk22h21krgzx35UV3xfi4EchPKvuGR2nnB",
  "key43": "fsgF8Sw1zSEsCcpcP1pDZtkdHm3F3fBTHRRi1zvsaD7pjQKHa8ipJbUFsec8y1HzgBn935eedgcaK1uNijHVrWC"
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
