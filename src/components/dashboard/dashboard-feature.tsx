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
    "4ry7GsqPdH6ytxtqRfjQBTem7aWMVnBjjj3G3Ksvi7zarjzBoaq2uuzsPKPY77TQuupDdjACkppfcofFfbqQFykW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EV8tjWXpj9T42i8xSbsPAHnaQcQWBdQ2mk4miTbEKgnWCGxpzxsRW6LbVZufcU2ij6XZyhx1e2MV8zcygCtna3q",
  "key1": "hFNEfwifNAaA4RY9pbbkEft5U4CL6YiuhTku9P6Uzoor9gFzHUTwVu4fdyUmWsbNjFcmFS54wP6qMgy47Sh8Ujp",
  "key2": "2NxDR8NgADwFUbvMq1j2NSu9wfdp8DJHVWKYKEeHHpANGy8CxGeuEonKjjxVoXNX9msBTc9ozgnm4CxmdaDUQHSq",
  "key3": "3VPWhasVski7V8XUbCWHYefyCtWJmg2zjs2DarzYRiTTL76m7LPtTLBd6XhBZSaZUirgWfyvecZiaj8NcKibzEaV",
  "key4": "3t5ts6jKYFqBsi6uboXus9W52cbuMcvtvsVYD4kxNYjG1QuA8omfXmA5zra61wuzFfY4TdhR5fwa27w75gqPvTX7",
  "key5": "4R5uri28T1ogj5SMHyDrvQxQNNGnm9DtDtYYDVmdooRxmeqKAa5c2yC9dJiNzSiWms6TyTNGSiFJw19ksnfKJ9ZS",
  "key6": "Ftvp4TpXL9g7oSDpmBT2dZy1D4AQy1LT7xUprhhbpTLyx6AZEFtBQP499wKPvv2ufTQT4xyz9rw7ErdMdK5Dz7q",
  "key7": "31fa9isRV2LLVxwDs7GhrU92y1ufvZLZ77c9AMFEDb168BG41SLE5u6J4QZZQ33dE5e2g1CstZ48fvWiybNdJxxX",
  "key8": "t2fHjt4fzn888vmUDuinyn7y4PjRbgwN5TTDVgGBj1zd1hCCzS9UhwZkZwxE1p9eqHwVFkbj3zQ6iJ2a4gyhBoq",
  "key9": "2FfNuKDHbuatfULx5azEK3uogHsKvnbmqHc8o15yAtwJhgAewt9BTTvs1RgQeMkNyTq6b7u1s61xNwnKaXm1YZQ6",
  "key10": "55iConWLePNVTzjLUVAgwUta5wN9HwDBPZcSstDAjGaB8H99uQ5zuNduogEJ554U16NMt2qamvEhDMDe9a5WVRgU",
  "key11": "1ni4LSiyUofKwyN8cmzYSq7c6P7CxB6NjhvEm3DCZbQYu5XtGk4cBehbvBvm2L1A6staTzovBWTXCrjEYGBHfGL",
  "key12": "2LegH4NXty2VjUdshQDA2fvXfiD1Q2Evz4dnCMGNrj6L9MJPHV8d1s54J8gWEbmMQ3xUM96ekW4MGjZe14N2FEpy",
  "key13": "475F7Cy9DjJvM9zCxQxTFyDgyzuMMYiWCbCd3dPmXfNj3avJnvagUSAeJe2w9JgXChpX3uHnz7ZDqj1FoXtdKSBz",
  "key14": "2baM6tP8EJgS5shTz7ckU8ZafngLQd8UD8oT8gDUF9dLou4vMNwGJgLngBnpmQ57QxZhywv7dEVyq69XTEJxXMhw",
  "key15": "5TrgCi1D3KxuVhSM7G6M5Lw9JzTYyJY4Hc8XFu2i2BjbMXKxeWKfyZjw6bscHG8J9moY3nxzvEcHCYHscjRJu1XQ",
  "key16": "3afG4LVipXq3jLudqGX86CnuobR2ojYrQU4AtBJPLAZkDNyTW1gnknfZ9aiQ8CdogGgp1G4Xp93avioG598JJgeS",
  "key17": "3iwZdhMAFGdFRYqrNydmdAPK271yt51kfpKfS8wXD2Bv94EeqTDEHmh7NEPmwQWGAfLzxEM1t4U7XkFK4B1npFuY",
  "key18": "4hzpNoMQAg1bmVN2wHSnR6vgnE8CqZdkWZb59q9YnTKknzpb13Wxc7N5qdGsE6uM1quTb5L4kryVa4XkpWKHq7Ws",
  "key19": "39ZCXK7MHd1VYcSA9uEwJR2TW9DSESZs2AiGfw2YqUGWJEhNycKk2fpDqGmr6FwMrm3W4EEBRgunXhd5xjJJHmfe",
  "key20": "5X7oMTPESZH7xgp75UubM33h6cFZ7TPPjUgZTWdZsfyQKa3V5Xi4Dni8Aad4iiGqG6E2tJV6UiXpq3vSWrcXMfH",
  "key21": "5bMaZfkHq7Wd2xN4QhKTuSEJnb6W7jqHxBFYMdoVW2gmqhtS2Vohnhp6EYvuUX8qt4GUPzEyRFzywyQqn9hrGhKm",
  "key22": "35aLvjoEfDwss6LGZDyLF2GxJRprU3L3Lym3Lx3Mk7YsrW4782di53nYffHFqwW1jepCAfWVLq3o1yZHpmEvhUph",
  "key23": "22ztkcAnEAjzpW5RkysDRFTMQBdWu3FJG8xeAXNhkp1oc6Ki1uL3RpBwwjHFhqMqpZKJc55pxSRvPZWC777BvjDX",
  "key24": "4exY4VGegEjL8midyKNhXEVmN4cFmXz2UkaT9TxBGkbernAN2FtbVLFMALtiNvCFhSBNU4YapvacWvByFBKpSnQ1",
  "key25": "5zn9V1ybLQFgWeY5ck91YXDQZaEJHh3q6DmeNW2Y7Rtf62nM1mPQCaByGkqWQvTh8VkUoxRsZQTihPunCwGJMpRG",
  "key26": "4RsBLHAy1xQ6wjGNjvnSsK3aHf8sK1smMP6HaPejUoTn6gu3T9mbATESL8DPwvHNH5evHrjYavpSF5nw7Fi2mE3R",
  "key27": "3BAd8iA2UjiMsZGCHubfpqopfp3XuaiiTQgqmCsoFejaA7neB2ntGPiQQHPoeBXgp5hdSeUcX3FpwLXf1uY33oVK",
  "key28": "3u3MTqcKGhgtd8soa2hd1Sdc55ht9GwU6Q9hXDgkieGVse5DpeWgV1dMxZg5WVQQsvRSHPAUzQvhYtXc9Qhh2EDp",
  "key29": "DiR6XafTTpgPBg6P4hmgszWdWs5JYpauZ6uY2rh9wamvpRgg4jHr5jxLbr2MfoGWUc7HMNBSigMhh1FKe4KhGMm",
  "key30": "ensa39zNidvid5SW6bJb8hn665GGMWoJoWqGgqwVjP8bJeVqAKbmCgXPsFPNvRRHH1AuhBcBJkc2VS8FmiVtHAM",
  "key31": "455zEeCA7NFXAYEcECLnWBTAai1ehy2VsqDeEPjz8c9ZeBsrYWtEofjvwb3x8iYTpzQHDFZUa8GoMHkS3yAEmZb4",
  "key32": "LLXgtph3SRFUhFX7SeyL5ZSbwukYRoBxAn5L74WgmMeRqQoWKSBGCCmFH294QbUPG2m2KMtvZmUYwVcT5bhvTYt",
  "key33": "3B7gXRChv7QbgC9e1RKvhpnj6bVQfjsK5m6jyMhZ2VV1qQXG1z9ignYTs177oA2NbqkwhSmfNA1ETsW8BztmpzvN",
  "key34": "EGqAhGgJiScrKnkRHXoTcvxxiVcCZfWSstgQAp2NMZsSLGGSd3m6A6k7rC6Co4UWWNVzRnDXupXAEJTVpF2nqEK"
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
