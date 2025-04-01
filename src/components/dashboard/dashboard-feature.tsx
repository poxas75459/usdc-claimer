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
    "2y6x7uDF54bAKJ4JNxB7ZZzj1GkQgfBeW7Etmi4r9LTQRkbDShkiteMguoawqn2BDmgMZC5q8dzFwecp92ZRUTMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JXYRjL5wtEwQbUPxFcs7f9MZXoEPbCd1FsUaoJc6t2UPdtz2gjtj81Yrij1uRaSWE2b2vsAyUk7TFVEtd6168iN",
  "key1": "4czwkm8do97Lnyu5RCCqU2LM316cYVTw8QArbeQLarbEvyMVgfyhPsG7bK8um8noe9z9riTmAJKiAKZ1h9WGYgjJ",
  "key2": "29ycwMEYYpFx95fTkdeN8mGJAb4SHwWMCTpf7Lca54svqgg9QeHNBbtr5pPk2k68Mt4RUt5DTEyeBjtKYwTVFfqe",
  "key3": "4yKug2L5BgSpBxMufKcXeme1bMbU8w5VeCbFhXkbqN8EuYNkesCMJ24zFGoyKtaHhPT9Yret1ZDfSLbhZ1NN4G8",
  "key4": "23uVzfyo3g7P15NJwR41TCdhGpZ7yDPVXYhE51oQXs9vjJFeaRQLqTgBTbKxLEFt1TKP69wF6K1JtA2oWeUt397y",
  "key5": "ujHm8Epch7ffzC54EsjcJerjNWGdz9NzJVE3UXM4xFPZtC6NtN2nftaZ7JpW5hNzCYiMRZ29JBpyrx7s7prujgr",
  "key6": "53pWmLQpe5Hi5NS4HhBu4w7SL5ypm4UmZKgLtxmsqKBnKqBFViXewpuJwdwk9AQxwc82ENpAQkFtyM9q9Lvvd1pc",
  "key7": "64B167dsLwX5fUrT1fzk4AzzbDcdSoR3aeBKdLPGsVcZbEmKSdZwrpztNNkZUVDt6FG6QmPfFEnpYM2pueYcQLmv",
  "key8": "2YPVojABQDm5B2PbmBmUTvMbCiMo5e1Lxiyr3ibxdAJfbcrhaPdJW59cmyk2A2pFJDNuKESoBTaKBSc5d1NJ1aj3",
  "key9": "WCMw9DGpFtMfRaoiJkqGfVT9pBdgSEVLM7LR7oLL5WxWty1LhK52kYTBxWF6yQ7VkDAYVdn5UcpXijXRKF5EYMz",
  "key10": "4xGpk8aXmK5s9tork4UYxZHosUZBZsWcJZuR3a18r1oDGwh2VqHQL1wNS9DD5gFdW5xujxbfmKT9SS9DyKduNYsh",
  "key11": "4N1srraXvoAgBeguqMk3EpnzGP9613G2NF5gN4E21po1BzRRciGm3w5YH4NBgcXSAPQRU3YJxw8uACm3MyZ6X71J",
  "key12": "38v8wnwnsVpFLKm2tEgi7zt1GAEtmcz4KUqUMiMTzHr5aYSSTxTZboZie8cuoByufrrhBfojwwoDLXibsEJfy7Mz",
  "key13": "2qW4TChNPBdhJjBGKXmi7wDPmukWooG74LpS18R1XSWYpj41qfbjMB7tZXSxsYVNtbSKUAG17aArzeqpbkf6sZLF",
  "key14": "2Xz79VQCL4LgP8LaBQh3VB7AxnvJsEt3AwpV9xe9TneNJbKC8qDwHaj2J8pRTGhrrH9THCUiAMjMvHQryubL6w2F",
  "key15": "YTko4kkVFZeaUa1TZE4eXzzyh3jR5otozUjyKdMG7n5vxyKcBqe84D2WiecpyHd4xas1tnAgPjd7nDRYpyPDD59",
  "key16": "4pGD1KS4QEMi59tk5Yw1s53zSzRQx6trnh7KyvnZtxpH4sERYtKdkXx9gjNYEgyif8sBxYoAmdGdWALKTjjW1jwk",
  "key17": "5wqxyfTvHTdwprkypBGkSha3Tcs9kUQ28pPaGJksgY1C4mCRwkJYMem6yLaQsLP24w31MqxMq8mVw2qPGC1BaHuC",
  "key18": "4Er9Qonsqu34cbj3sPSjHrre7M5mb95js74jAkBBRKumKzxNf9JdhvP6KN6KQrYfSp2hKDnDtPun5ZfAZJM8qpnn",
  "key19": "63jNmz5nHzjW1vm1ixBH52fzAsoCYMLtSB4BwqWAzsKXdpS4ocUAwoKQkVNdQBpU9SLf7uCyDPX6UXSjfTtvxGTF",
  "key20": "3SHMfiu2iVkChhMenD6qpWzoUhJAppAe4eRPriTLfqHoDvGtgsBHXGZmbzUeHFvYfYzynjMpEgcdorfQiqhZtTn2",
  "key21": "2UFuHRfAJvcGCzCvodyxs5j5f8ZZ3DBrTuUDDFmbtU17SuQ3Jg4GAvQ1N41qwLozqHpJViHv4LZ7uAZGqzEdYo9o",
  "key22": "4TfmjGynVyposvAkzvgFYaVyPqFo4GHLohwURNNf4YfQJMQpBWUZZqVesjfeZcEGwpLCED6m3dCHMSq12od9qLWN",
  "key23": "32XDxuwBbJaBxqHwvTZzVLzTATZorv8RpEC35Fn39A3RhXtBhRtTceKRv9ecWJ52LGw97jbZXBm3qvqRXhKfVEEP",
  "key24": "zkSYsLKxS3w75dtbqG9J2PpUciWFDdgA2XWY9XPycWj2EYdbQBoLMZhvK2KzoNXJ5Kr9GxnXfcgDdwxXwNzXjMb",
  "key25": "2HB6xd19AjWsfXbyNMB31SH5Ad5nn5mLZ2cLSsvnGzaebm2fJSJDiVk6jMYC9vjBcd3J3cM374GZwjQAKoAMzaDU",
  "key26": "5iUqU4VSB5e61M7n6qF6G6TQm2aEMRT68rhdVGAYXY9edpVGyj1Npqs4gvboXvBxPaYejQJGh6JynwyBLLykiVR4",
  "key27": "xNHs82wHeGXE6cE5F6cUfDSFzHrV6hYampH9dKXRKqD3btfcuosU2NGu31whPP2hJji9Ji1HCmQ8VTwgfbp51xN",
  "key28": "mmj4aPpfSmaLP6Aa4FWCwWVd6kcZg2a4fQL3hmDYPUpMDNmD9hvpkaXgRG8ekUyi4HvTYwey3369kzAU8YG1f9t",
  "key29": "3mV5zyoqciCNFkYGuy2PaLNu6VuNpMeSvozg4RsSqwGBNYRWw2yWtu97cvu3r3FsARz8jecrjpXzsR3Uzt4tZcbu",
  "key30": "4oKuQNUAcuSy46NoUijn4zRfb7EZKFNAzt3pAS78miZoQKVRHYYGQw6bDzddcNeLjLnmWg5fUnC6jqRqS9h9GTAx",
  "key31": "4jzoVjHPxTt36ywPfFP2PdsTqkPCLBpesxAQJZjdJigp5snvrWzz5Mv63jSkJeNmD7P6fxQua9qLF5ErtDo1oMC8",
  "key32": "28PLw8RjJxtV1nUdAGoYBWcJ1jU6DgegVwDB2hFknmxL6GhrrY9qPmpucbupazs6juGhaZnHzmHoMjG7uRXAJzyh",
  "key33": "5JHCJ1MM4r2qd4meSF5AqxumBkwGc9VskHwxyqunKX6E3cm8rMUKf7DxGJQmYFXhmsY5f7cgRUAjyPxfEspdkS6J",
  "key34": "4Go3BSvGGeVWpAor1aA1JBo6rEAbxk3i2riSBWqaUdJcZbwFHyCm4Pt7VKNrCwLWdt5eC4EgddbmyLf2AqrpXYo9"
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
