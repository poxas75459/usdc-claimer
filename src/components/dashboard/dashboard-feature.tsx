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
    "sT68c9jSPUzemDWe8spv3n57VEJZhvywtEgoiwHwmU1XNN1gfUaagCXpTxHNYb9vFAD92TmGqqnuhBZGuBHvmAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jo1NJ272khJWt7xfawwVubFY9sr3u2iMiAC7hEnLjPtPuqrSNjbnibZACjtj5b3gvDYwC6mKPScoCUkduCwWqfU",
  "key1": "4SRMS5AcbFYUtxfijkAAKM2ttCE42cU7iK3qWQ9rWYcUGXqg5g64PsPMmUzXJCSWB8k2Xg2EMK2fXSz5mQpz84mc",
  "key2": "4fPemZZy1djDa7nF8kocfGNrGrbNG8GX5sM98tJ61hMQzv3cefTypv3dYXdx7DKVCuKErA9khWJM4YhjmRbXsvvo",
  "key3": "5158FH7uLRrxNEVFNnnsGZgBHyHbz3rgPSdqdhzUPJyBWDfx38ptTn495yAVnCsQAzt8nfSUU9LBVCTZodsQSYzW",
  "key4": "2yUGUhJ1N7nRo3zoTWEtUQ2qtntPUEp4hSpe9k1igoqq3b5ohwrJQ86X72qjyJKM4HeZFwN5Y38XBjjpnxgiHAB8",
  "key5": "4frWzNKFv8sL7uGfYssFRCahm7Y8FvPqbcg43ScmnVZDHYuvzF7Yjh5XhM7AFJYN8yxsx5RRpgongNkpK2mRGwL1",
  "key6": "2rEerUTwaHsgJdGkRFoWqyaub1VMkEQtRVob4qvyVTF6fWuEhBERqyv79U5r6Jdwvd572rjRy6bLX9FGrUz5Hzcr",
  "key7": "3ZT9zrz1HNDDz2YZHgukmPpCxGSPg8GpkxSeodVHYTWyz6H96qwZMirDFm9HKLJsqJGUb7QmYFHt3Dy4L2HCuJsA",
  "key8": "BM2rUvbm9hh7FxXG58hgE3mJBohQ7tpFaoFPqpYmgHnaPQeX3VhWQXXyNLb1juieRq3JNaMDvnBW9YK6NX6GGvv",
  "key9": "2upqUnyaaKS5F6dSgxjrM8bfbZuphrFZeqCwWBDhAd7AAYiWwxkLAvCibRoNUiY9CHCHuUw5ErmEChsc2Bucwk9H",
  "key10": "4VwcwsGh57kxrEdGC7gUobLnKimJT6k4oCMNU3sfphbJvAn666C5avvQVcgvRLaDRF7Sg679KbF7QSXA71xUxNuM",
  "key11": "2KNuCFTrJqsyqUwdmifWa9AmBcTRqLYU12jA6fCjDUN6x2xYRjMwahKSwM5FnHL8g7J1wJ97HwSi8mpuiSaFPqC",
  "key12": "mZ5hxUwnscVL4kjajKC3ZZPE2oM4VeLBbRuNu3e8WeovgKVLzQ8dmX57UzWKAWxwEPw3cz85FYHBzMCwV9zf3Dr",
  "key13": "4MxBzYca1xev1YVy3URJhBNC4aWZU96VcS6innt2a1PKFzmmyo5T4t3x2Hg39b3xYrpKm4zVZbbqqdzE1sTjcsxF",
  "key14": "HvvVPumtAVBcVrmUE6nSLib1Mn4oHe8yG3frurEsQHT35u24EjfZ9CiVWVTSYSzmnrvg3uKgnP2hYHuEMyxLVeJ",
  "key15": "2iuYNmHUcFuEK6LuZpD9txREKDipQNhZkXUPguuWF5anax16KVsAEwmq5Zi9tHiy4p65ahsw1pJyGJRfquY1ZgGw",
  "key16": "2XFMdrnp4fpJhaPQBMBdK48UUTSne8yqKk4xVK86V1ipForVj8Jzks2VFX9ftTiZSQDfZ5pKyzLP36EM7Pj4WP96",
  "key17": "xchFjAvpg4NvxqcJyEmQhd3o9AxxEZQCsWGgFRD7xUhB1EXduwvhAs3S55g5AA3sQ2jsnwpnboXvfFZ9D6Kxhbg",
  "key18": "4yzuTbF17LGQmxKFKBoW2chRymFeccg18KXuYGBbX6VhqTteSivrmLinzrWVC5Zr4erKPRqDdar7H5RZibiNcMke",
  "key19": "5bvPYjBw2CxTGoxKv6yGoyK8DPooUwjQ91QjSiXHM5VQg9FJeUpD77sCqDinLG2MXDKYtzDJa3trrcNcW3rtPjVr",
  "key20": "4wTgQr7ZiPTAuPYSeFJHDkzJzK5oMmX3v3vzXpHhQZeSTD1gfNGRprpLBYYdABFSbZsNgeqpqtRLrprNj289Rnp3",
  "key21": "5gPdTjCBNuXazxh4uEHdV2fQWGNYYMD4tv7cT1si5qSpArHekM8UbM59S1QictafiTmf4JFJyWSZcCfw4FBr6vwS",
  "key22": "2TgjPoLy3LXjrc3UqGQx2TgpJcnV59WBk4tU78Y8JDhKfUba4A96m3BtpFLsKHR2VD8PJW1zemffgro4L2e6QFVv",
  "key23": "5fwS3Zq1rqpm5wFkb9AJHeC2Ajb9GYgXBbY9rAeJ56EgyRTmK4dcuaXxmhxc3RgWU4UinM8fjR5Ha4FhvbiqVBRJ",
  "key24": "3QaQtYD3aoPHNkNujmiRYGNmYk7hPPYf6FaNvv7yeBJSMVxi1aTdP3xJcLTT1NQSeb7HWxEe5pffJicpdioafvCC",
  "key25": "34K7CBwRzZga8br93ua83CUuyKHpjwF76YeaEcmLWpy7ZijRXUddHminTRjcgD8CnU5ncXUVUvWd3h6uLZ9otPXs",
  "key26": "5PccBefxFD7QPBEwUx7fzzQCkpT8RUWapVfVumWeNjLU9xYihMh8JcpfeK9nEA6jJvZhai835mkDTYYyf14qkSHf",
  "key27": "2AQGJz3ZUwjPS1Xr5gKB9RtyxerjzmQ2xUet9baCgUfs2XLZJroZ6SS25hw1NPFBYQSSXZc4HzWw51DRvahrHffJ",
  "key28": "52DJBfsAd51raqsYd8sLw6Q1JLUX15rrYvKKi87KmsRGCcmL6teVD2iP5AxYzLzdVqUTxgqtp4vVghZhXghWRNth",
  "key29": "3yvk45QgnvxeUc12WURHVi1d6Hu9Bb6rkLWNQ6DosRuEjoRvT6r1DGDK5ucYQetwxg6cwuMkMfMmby3hdFg8YznG",
  "key30": "CQH3CzMNT3zTY1c8BeWukxNnA2VJvVqpSusc6tev8jKpp6XzY3JGFUFXgpqpxAoMfsuuM3s9Y5TAYuP8bNsdQnG",
  "key31": "v1kfHbRrgmkd18Z4fAr2kr2p9jZb3bsFrXnFtVg2XYJgrRUH1Bndv3R7uFbt6RLzhW5AkiNtuy2RDT2s8DyJPyB",
  "key32": "DbmHeUNVqpabEp3hprWvJmqofcf2FfZ6xc46v2aUX3EKakFfs9Y9cGRDBCPaSof5bVaFjr4Tvn94aoL8AGia84m",
  "key33": "5Xpz9bP2PTJrYXLtgdFdH1Mvkdj4dW8gNh6J2oC1tY6Nzq6fXkDQfnggLTatbCPAQfBsPPwbTkShZB9esRpWzYk8",
  "key34": "3C12iHoA8btcdsWjnvFhXwJ8Wc36ktCTAbytS58TrsR4XGWi1zDPanz65ZnjrT1nJLTqvD63yFdAbBBhjdhUYb6p",
  "key35": "5rESw5c2FPggwaoKJYBDhp7btNVBFMQt2aCqSg6mSF98xfG38wDrouCDsgbWe7eokKvVpooHg7KFy2AxvSzkLUgw",
  "key36": "2bp2meSn124W9s8xEBXGzCuvvxszDoXsBQxySUvbd1Xcc9gfbCuQ83FyTAXor4ve1puHZAomLW4hpYDHzGow3w3x",
  "key37": "2RGVY3pWkkLeSWEDcMM4DWF9z7KdabdGuZJH2hsB6Eiq63uRi8epxR2gSSgjdB5bDESstAiETbNKJ6S4LHzFK7xx",
  "key38": "2H2K6DZnxBNQmETtoPtEvQir67EA9FSmbvVT6B4CXT32fpBjaXtDzGEGCn8erP9wcWapQowR6bWY8FEU8FBM6e37",
  "key39": "5h1KX4rUKEVimRQaTBpHm7kTLBpJWGxHXrwGmb6qZcDjxYwgDkc3MNayPVKwHTf1U1qkEfn34sn4QJPMfmHNpseL",
  "key40": "4gUUSbr4ZKxWPpnvw25qDoMHLteN7okDg4zoaXEizejzGzPTJb34rtht6xA4jtrvUt9pssSqgfvF7XK9pqdF1kw8",
  "key41": "22FqJmzUQFFT6w97vhmYQbXmoC2xms1dsPmzUTvdmKYVTM1V83QkdL6xyG8wakKDNzUzSjMvLH1nkgrvbHKEU3sN",
  "key42": "46WDoFLRzgZ9V74MwvjauRisqSDU1LZt1AhLnzXJemutpHNsf3B7Dyx5ancKRdDb6rB7cn4BVbCKA8zopWcLzKWj",
  "key43": "3okxFSNfzoheeLkuazMUP8rkVuYd4yQdctiZgaMGykEEGGGK9iQYetVbwznzyY935ht7iSBg7WV8Afi3WeWE8kfc",
  "key44": "3PXFppJgdXwZYcRjVRxhm3GqmWhnRoDQtzJsMdoEfST9fbiBzbRyf5ocXjrJEZqedUBR3jwYCk66r7w6VbtUJWkJ"
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
