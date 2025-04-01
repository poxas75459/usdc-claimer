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
    "5wX1r54JzE8VoXmfLEjAtwL9rn2Ff478VufenwMXXubvgsnnRtJGLddQA9fFa6Z4ueNgkY5FK3sbJ47auP8ETRaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dMrw1k7dCPKXKPgB7kcyfHT1VpDW9DE5TFUPVxkMGQtmnzzfntC4XScH6uhD8T86bEbFShR1w7Mygcej259oK7x",
  "key1": "4L917JYc8DPYxFfDr3cqZgKe91Z2rdWE5oVvGY4iovHKYFD7tHZZf6U4Kqu9zhcVaBYAeosJauE7dMoqQXy3zeDK",
  "key2": "3ir3sKAceocBV899t8N7Jk4TCNZo4Rbrtf1iNX2Na6WgX1ihZu7XBZ5GTyWiZYq2K9nEft7B6FCjd4iqQ9QNa714",
  "key3": "2GxaDRRpeYFBQZRX4g8zKFWYyYkZmTfJLefFhRtMbWSPk9Ht885pczfsvQymrn2QSSJxBeoXTHdZR7eiXuLQ1845",
  "key4": "3bzQuZiGThBsJjNK2RfTFKxQenkz4RGGsUAkektc1aPFrYPVgLe5FWR6cn1enuJRwby1Q3hP9WE9umdFU6KwgAsp",
  "key5": "3JrebXEQpz3mhucG2ynh45jnwFcAKfhFSDQms6vqxsBncQJqaNHna2iXVnrZPswVs5QC8tRbu3fXg6FgeCE8iX6M",
  "key6": "5ZD9kCzzy2UmURUC8A6qxb7ofAuDYXt8C71khoSbqSiNRgnYcdGnMmEwShasjRao9qtzXUgbcAtMZPe38iGBH5Ud",
  "key7": "2kQ5jKeaBwz5iu1gCqgzKGCUeVTxtiHyEPCFodZCaGWuTaKottcGJfpSD15mbrgGLKo3dbKemxCdh5f8EDbRVCaR",
  "key8": "fKtmzpWENFkkdQnubuD6vbiBPrEdrGjJcVTpGNWEfqsVNEYxNp166mpdqF3H9A3X9wssfJWkYmVeMptQ4f2CM1o",
  "key9": "527TzMkdzHrBFPzTvQzC8WrTJyFzAAmypWBsQjHj8biK4SKTnp4JwK5V5mX51SXEMaebAzaFtHy3SFU7zHVqmTXx",
  "key10": "63z5v4G2a56dzdLzSxJRU3eEQP1u6bnZDjr6KJz6VK5Qex7otN1hKxAdk3S5oBidQ9jRs2DLJ1jNP5fGDMJtQkvE",
  "key11": "2EBWniGSczrFLHF1YZ7vNE5iNA53F8AHfRFpMdbLWDCK4hRtykFE2cQkQ4Vmhb3GrbeediryYyoyCngLXS9nctiq",
  "key12": "3Thx1kA9Xh4Whc4eMPaq5kDhukWUXk4ePY3ffbpYCMYzSWBvHe9krFtzPNR4Tj3qgPtwsCHF9k33qN8zmWrPsy6W",
  "key13": "4imqEDzLciatUqiX1bjtBWYy2DHM2cgTbhZE7CGkgLsVzYWw6YZCyrUazb7Zyf7WxvvEEpDYvvktSEsztnwKqNw9",
  "key14": "4taYeo4UN2byatcHoWYR3j3Coobq8ehU88iNZusVsgBAsSdBXTNebk7v2s6pj2sHtvn4A3o6ALL32jpRDvbUuVda",
  "key15": "5ksYk7fAK9J9QiuTtSBERHbq4BMBdmq9qBhmYQ938PwbNrRd7Ldona42D6v3cfro3SCWzDEnYqjJM8VmsT8NYdhZ",
  "key16": "2Vg5tsgEazxFwe3Y3kFMAwRCqFt2YiA6No6sL3KfRioBM3nL7jN3jYYHKQN2rXge11VUbHFULTWX8qFYhdMWWMEr",
  "key17": "2PXjFwX6VCVq8qqGzeytPBoVC5fVx2GQ3brzEXQmJrnzW25KcMweDC6BmaJY7gjBx5qzWo7SUqKErKDhTyp4XHWm",
  "key18": "2h6uPe67dnJiLGH8Ro18EiCzGA1BMhEnmjcaMmQ9TQwWHTpq2ju1H6YrpyGV4dfX63nNmYTh5Jvgo58fB1bjJMtA",
  "key19": "3kHihUk6A4nTM6GzJsZbnsjrX2BgfT8eiSbFZM2tqZq1q22CKsEXBbXKsUg8At3oemKKPxun2pHAQRVMzxWGkTCQ",
  "key20": "5AvTHrWkiS9kbsv8BLuCLAafdBNKpuczQQuEqiRgCLBKgwyZosYKjjBuZxihTeq6qVKZMu4ApGZmS21Lt1Ve16bk",
  "key21": "4HXyFptxn5mV2GCrjLVbPZ9vpyAs9sy73r68dkntVgSewiD3yAns9KgiaHxTVAtGb8JthRCxjoTLdLfnxjwaBZ3Q",
  "key22": "Jd6HzGfYZ1AgcMMDY4mKJ5kG6obpFSuLq5xJb98ffaDzjJfL4vASLG1g7fFkDvQzYaWSnEPABxoEa1DSYkr12Xa",
  "key23": "232kYGefPqdpHqj5o39tFPdmV93YFqqGphJJ7hFjTjH8pJhKbcWPxPFnujBx4bYwCdfGi4ohLRmxWGKx1qZTmkc5",
  "key24": "2hJLmhMEqpd6pJZGDg7FddEFhRzUgM1zMbf3RNR1PgoLH9ubJYZhCtouHb6pVm841vZUpR35x2x6iPu3PrLxM7GM",
  "key25": "4GfQX6aWX4cdro8X18oCUtyVru2UWN5hnrHU7a9zx4j9Uxj3ur8LfoaZqmDqMioizHgmqugg7kmfgzb3dVrcUXnW",
  "key26": "2khqZSmcx7vwv4sGVD9cQMpJV3jqmJhNpRQRGtrdpPWwFWMqjnA9SH6sSeUJFxaUeK63DgdQ8KhaWrrAxcQE9WeV",
  "key27": "5Vn8wKMWDMgpaSrLPEa3rz97i8GPpqKqYLhmARkoLEMxF16ubPkZpX2E9t3jCzCsoY7cYZPcBm2mHoYvVkturqA7",
  "key28": "5HbdWiS5CU1ypz6evimHsUEYhQNHgwwNQxWnvJyBa5QNZ5sCKn9xSQHgkRNo5x9GCN3zVZ8hN3CriWWWSvt3KWr7",
  "key29": "3fXCPAKu7Qupdna24HxJEd86rY9mDvsQ6akncBBc1Zmq3bBu76rPe4Z8nFJW4iTSxuMbAULQ7HBuFZHuiAp3MGxo",
  "key30": "wsb6XMgax5HDoqFHpiWYa2i9bwJeSGAdEruzMYXpxEvMY8KqfhwCV8Lk93uPj7AVtSN9hmzyGzJtZDaLQrjWH3J",
  "key31": "3Qk5hgGJHXLh3mgzDFAEZceaG4wWd5bGuMqgrZHH9p2FZrTzA2y2pL8cZTH3izfAmHWuv3EqBWK8dQmRRJUJ1fU8",
  "key32": "4c88sGBFxaYskzbCrjDBESQntzUQmf9fGJXzM2B94jvj9zMkGuAEdQBQxTx9kwnD76js7QGrtZRAwkPjaa9WqKRA",
  "key33": "3CxeQTqTQ6UqbXqjJqNSmjUcwMExMs2tA3oHeSJ5nAD7owsSMUqt9x8Gb5BK9ZU2YJ1egwHL4st7J6fJPGNeUme1",
  "key34": "5afnbg9zRogPCtZm5XKDXdULQW9jbB2bedJUxTTyRevmQ1TpP2T6Xyk93n2F43yLWiBPKcBVF61cDvuisYeyyYWw",
  "key35": "r1bsn8u14JHECgVfLieHyKG5KwzxKhnaKZxXxqaeJRkbZbYf8BKeA1TnCvN6EhpkMvtFPsFMciLbUKLYECDkicA",
  "key36": "26BJwaH9kCEiMMfywTyo1AVnxebS63dckAA3Au1UVH3mqEsjvydCeEWMKgk4npjscmMirCSFGH171oUoKLAtssUz",
  "key37": "55Aq9KdFMgWYDotHz4TjnKDmXuD4uRubVqkUtLS3A2LudWyxcCNdMV7sekidFKNN8tbL2i45cJa4E3wsK2Kq5BXz",
  "key38": "5z9wLsAnRoeZcdCqFwLHAZTSoBrgzc5FCybSKknhCiV7FDd9UE7cpELL9BigtaMRA7XcKmxawCyECrzExYoji9mH",
  "key39": "4bionJyqNKanLo6kfrn9oxwi11f4XhsGZGkar59M14i8QMGxyD3vTutZv1EG2EmEGZeR3iM4eATUWiNPDNNEX6di",
  "key40": "4k3hWbgyWVZkKhgv4sw2bv3aTTkJke1vaEowKpuP1YvvCkznwr17L3EkFHsFUu8U3JTdQ4YmN3V5f611rgJKHsBs",
  "key41": "2QiGo1jR12JNmQ4SuQHLF3kRcHJFDqMbhJQ8M3Bih9RwseBzwG5fghZxw3hfU3gHk2WYGzLzAmMUiBFNhi1av5hX"
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
