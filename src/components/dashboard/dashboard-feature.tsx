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
    "2wLFUVfgSj13QLNEKHnU86mTV6uPHWcSt9ko2gAmjTKYtDcmEjVWmBhfwioofBMqNK4iQ2Ltvea5tbegMG15BdY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RA9wpdrEEfxCBXvZprR9GjgrPxmxg54pw99hsnwBZGBkQ6owmyJJDJYPJsKhn6BjZR4qM9rLTF52cgnf1pCmfiu",
  "key1": "56k9Kc1RX8BtbFxS3RztnKNVoX5Xw1gJ8SZ6SopcUCbNjxvooSbnGe24uFZXzfw7V6MXTPkMw91STCfY1XUKpHPC",
  "key2": "L4Ae1X9UCswKE38hVDVt5v3V8k5Dp8uhRBkYDkb2yspBL4zpRXcjS5AMcfviL5MGCUbQKugdvZaBSLaz6wtMYqh",
  "key3": "AwinxNMbFHtJj6jWfDt6UfFCFoaxn9hJscHptJj8ri6Ffrjphspu7Qitu91sewa4APnxGFSaJ1u1c9ihCYt6p6c",
  "key4": "5y5uKAEUt2r5fffiD2TUwgFwWNTVQHt6wTGK4eNHSTCDi1dDWpmceQFQDZHoQXTgMVieZJnYNQQ266d9TqJwZtK1",
  "key5": "494T17nB4LRyxnMRperNsuqH3azEHVb8nvhynxVmmoYNFDL66QyJctvx6gAd7LQHwNdGgNAF35p1bNdoQ65wPWkN",
  "key6": "5iqcz6kpLfxwa9tUMtXrEjRPJ77K35S2ArL8JgfyaiRgE2WspFXxNNtYAHbmGNPCXPnJMtCCSc52cK22fjMguZdE",
  "key7": "Pk9YJsWmHShDGgF3vhy7rT6sfYLJzvFJHGGc7BbZo8yGW354bQEfxfvGcVPAUN7jYCiwEmeCvVK3LSN94evQUgJ",
  "key8": "5YatwDmvWfzuS9v6ob3CavMtH91Mt8v6whtp8QyR21bdCmVQf3ezQuJxTFZ4zK18WPCMVXrjhCJzpYotoJLK2ShT",
  "key9": "2UbhiPovxoYiBz4TX49L2g7eWNwywdZj26nNi3tjjsMFp7Tq5Y47E2kBvCFV95tZJ4Tjc6gSK7R1pezy13Jjqc5K",
  "key10": "4YttumF8ZxziXGTRyf7JoidPTAsnAiAcR5vDakvzDMdW8yVcADU4Lk9oiS92f9KGrQ3X7hHRUYQ7QvTviBk7ixAo",
  "key11": "5uMXmt1Gho53oaRzM5ZWdkpgT2eKjjFgNjvZ8R53wza5vBabmmC9BUMXKECh7jVfstWbGZQoxfRxjqWAGWELesnK",
  "key12": "5FJ8XW7ofyCEs3EzSknfeXhfYScqtC2vRYYTnxBH5DQ7ZqMF8RpCS2vhMc29LGd9D5jn3GFyCUZanykawxsTFEDN",
  "key13": "6eYEzM57WYYTZFpXcmnmbqMmPjsmeBMfhAAhUwqh5LBP5jhfwBzUgjdgEmsXqh49s2m3H6L6bnXaEV9cDy3aqqC",
  "key14": "5BtyG4BWzzN2GBZzyka7doANaoQdLtdKK8V5tDXApHhNBGzrq5jKsUAUcuFWb3ezDs3R67cZk4THotFk81xXznuz",
  "key15": "62vK5EatLcitDJT867E1rVHgdyg6Mw9afxPM584ekepM3JsU5UKXiUY6CNU8Lbpcu2Z2kNTzfJdhyZyfcUa9hEFM",
  "key16": "2Ao4z9Q7xc8qCz8dCzdrcMR4cJFuMeJGdDB8z4w6FjQtkdx1Bow4sXfHK4MSZaapWbCgCqeLb91eriAUbd3zW7Kx",
  "key17": "43wxLRcdAtRx2TCU4tUBrofyV8yPdA8w46Nu7TYLFfwidGj71YaS4pabje2cbmER4H5VPBPQETZJbKUsJWgfUUBU",
  "key18": "3Wxj5mCoUwv4Cg5Zxden4G6UXXosMLhC3YKLZHYS9gZV8SDsF9yPuPhrZUkmQM44kDFKCnAD9rBDzWK15PRvq6p9",
  "key19": "TtC2r9kjXzVTtmhboQkfwj2Dv8tR53Vp1xnUBxoAvQKH5tRoBrLFQBePN6ehDRcKUsCAUtzDbujJDmYPBMrAZvW",
  "key20": "61DEdEcCTpS6JLkjxjhWtk191ZcPeP51uRkvXgadZ8dLn3syHhkDmLhuTXhyJyBXifipCenj2YTdg3ZHXYMnBj2m",
  "key21": "3ryLTWaUygFVREad9AFknXAz9Bw28sT8xrGC2NoixZxA3Mzj6aN5Sgva3QgLRzX7aVPaxwcciSjWjaj5GfxkygKM",
  "key22": "5pC1wtTpgYWYkL86weqhgCdRM2Ggr17Zupq2NyZXfmJfEUfETNYpCE4ppbctjYzNqKF71VrDgb15vKLSeHqyhGie",
  "key23": "21qgL6oUWaz1tenrTNiWZpLHJeCTgvdq5oPU65eySnayyD1H4okGZbeqExZHTqwRyqnEVEjAE22kqF71TfTFTfvq",
  "key24": "4VsfMxq5EGE1NfFHuX11ua2vJaQxBWRjpXgtnQgUMBjobVAPU5iWTgqKNnWZfN4yfNyq2AMEeSuyJvkXyxeUNhfw",
  "key25": "3PKy26npVdBKxMqmcyeSj8iRqHGz3Ut6m7TGWwRjWSSFK1TSjpDPZrnNuZf4J8pyxnFPB85XFKneWz4neHS6gzgg",
  "key26": "2ctb5GgQkqrTxF2y4h6kdZJubCzypKkXWHeLukCwvj5Gtv1SSNm1Sv7ohAt5E7wpE45jpjuh6LkVQQLdVdZhHqFh",
  "key27": "3aSxZY1w2mKA38SjHQbqsqquVGcpupiSyg62rT3fuomUQMbd2vjYGXehiaQ1TCMB8xT4wWXKXD7rsjHKVy5P6EJG",
  "key28": "2w5a16UoxAWsg9nuKiEmuJWVfcPfHDGNkEdSYnK3uEZidqFhyMgVYqfstbKqNPAfy2CfpyxLHFh4dtgLUZMoYVCf",
  "key29": "4qqRRRNqBxrbbkHaAWhfp7EeRH4SDDXqmjK5rJtVkVPHpaFR43fvao2kGWfdtz9bKPUhyL87qBjddxfpZEHY98nw",
  "key30": "5F9f6zSDomUT1dPeVpFYsXCUErn4CnKfExtYJFzmvVYapZuaod1sGeGPUxdsooRUxrPNiHxThUFcrzqampK4zzNh",
  "key31": "4Tqz6ndarXvxqbn4KhwMJYBa8ChbSBKtHNdTd9LCaexH8Ci8E3NwxSGgnR5xzKsmMN4igJapTrdff6RHDfjzpGNi",
  "key32": "3cmnLRSHYzjJnM1yQU3VfA7Tyd3azwiPnJJxzVuUM4p82azaBrUsvT7qweyxZy68TKCuzchGkdCMAEtBnYSFfqSp",
  "key33": "5vkDroxhJWhk5dAjCx7AH2fBtr79dob445VWdN9wB1c464s1ZXHaS7RfdypP5jZK5ooTBeRTz6swqqY6ZNvP3yWy",
  "key34": "2gjnVt9VBnedpsKeUvbQTcR56neLmw1zewbfNYXFjioH9Bo3JvUcRQpvnQUbHChSVDWMD2s2y4zzwLuoqoyE56Z3",
  "key35": "2SvwoEn5EbapA7arVTE5EeowNpPD97zQUra4ivDmENp93pamn1VcmVCf6iYCu4r4PAeYWEJHwh6Q7FFMiiUULyYj"
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
