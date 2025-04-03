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
    "299FmKGsneBU7779L95nbvVu4TCN64cN5i1qRXzgVDLUptXwASzD5g5pg8asbE4XuhXbjjhCwxuYoGQdXUPsQXaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tN4Tbkc2THYVM4HaPQAuX41TyH2L6eNzVHiHLrnXfLUCixRYtwXxeyu5RaX9HASuKfRa3RBDBHyPQetWspQ2xkG",
  "key1": "4wJfwC8WwkgUa1XvuthrU2xeCLCgNCQJtmcn8gPtm7F8R4asWPVzeG1FpFLi88xjM6QwD3C25BsBSZsgTYVdnAAk",
  "key2": "2BSg2yLENd6TAjhTyEVEv4eULUtSPk5NoRi43nezyh7FuwAbQa7dP6qiAKC9zN3McZ6caJLxXbgVcAij2dfsFv58",
  "key3": "4nvPzfAY4fmZu6p6LEWzzkn3x72QjBLPNZ8aji9zAYDiTx24Cn63JVA4Kk57F2tB9Jn8ooMGxxhhqTAMjzvSNFha",
  "key4": "4Xn3nZxGyPLi9SSndR3GEBGo98xkpERjwjPUMs8Jrnc16eG1D41DJ1xiR3nwRcPd3G6VjkT2TxzpwZbwwYAcWvge",
  "key5": "5uBa3yXRbJZdZwZ9E9iNJEJ3ztNwMmy24oV5DpRDcn6hsekT4SC2VKJRXeLGoWpCJG9ErykK1jtQj8TEdXLZo1E7",
  "key6": "gVKrsCWeM2m13uxoHdRDfXSyq6fs8hKZpbpe7kC474jR354pahQCbMgvy73vucYNTph86g6tszdvWsBFiRBwRjW",
  "key7": "YWLgjMSfyAKtbQEvUTytpCtWYsxhqomdUmjMKc8Y9ZT3K4HybQLWDhz6v4kZzHJbK665oTyHMwrsDzGmvxvcNne",
  "key8": "356vdjhKkytofAgnUH6D4BD4GZv7XXPLqtFA5ACJZdw1Xpmd6PVV5SYdUh1HT7LzQsPW226wTqziH5mZduwvjEip",
  "key9": "2DS4wV8Lh9QsE6Df7Kum2f2nQirQSUTCgb4d2piS5iUApkWqrt7UpjaCNmg6QA2L8gJPrDrdCsgaD2J1gVrVuWBR",
  "key10": "2i2Sqg1xki5G6Gfvvy2r8LkuEbbirph4UVwM7syNqBhCTW9GRXzmXPDS1d9tXhcSdvHz7pvFiHqdHz4vgJjPpHtv",
  "key11": "55Bfi8HrhK9NhQgNDizSBCEaMZGAY5pzGicwfpb3qnuEqAtqGbEE5xkbTiwLBhn92jhnjyzurYmLSQheSTwACmTc",
  "key12": "5Wc2qQ8Q8xL59ccgCsbD3ToHFhiyZJ6S1QBn5919ZwLa1wVr9AvoiY9vAhcgakTXkGMMBAnKjVziMSJ3pDF1EzWp",
  "key13": "4GogejsPq6ifZmbWcZr5H6otCu3Jpo7QLMQcfQJt9jYcuxSZZkC1BTxmbzcJFY5adR2N4V4RUybziYrs4UUc9iAR",
  "key14": "3cpQqQXdx5bjLbmvuUU34qnkwKijYQc7ESD1K5mxr88yh8mwHZKYbuGVhqN3Ydvbnm4BRyTT15A5PXnby771Cw4x",
  "key15": "4feY1tBkMoHcXHuQDaJsHMCypBA3bCaZ4JMhVyd1sP8WXYkhLTnR8VZVN6MtsGgmEWUxqn4PmiWgfYafKJF22VKy",
  "key16": "4ns9p4tLNfQDnsm7sHGoKKumLhyzG4Ms7MXUsuxEhjgcWHmWKsUrKDjgBFUkmUWY4BpK4CKUphmNPKRehdZpFyEL",
  "key17": "2toYqY6vPrV6PCuTtNhygy1n4Reaiswde8bUM1VSiGiKuWisVDSMiFeP6CpguP23RNbYDVPVg2e6SabUPxnCnES1",
  "key18": "5CetRS5ZYaG6wwfafm13Gf5oGGmqwm2szPJr7tcBh7M7eMdcBcjGDDb54XAFzZifhn9AthzFHwMvNwaRfxMDYFEX",
  "key19": "3qmBgpFmUgv9p6eoDfRhM4f4rr966ngWq4C1PBCB6hirFdANSGczmRB3rNZN7eAWeN6Qe9c95mrgFivz8yC6h8wg",
  "key20": "NqRocag8xxiYMSRmHAmswtzHCQZ675V9fG5oTVEUmrKyZcB9qRAaANRCy5GVmovWSEsvrcgRhg9vwANKZRcQGGo",
  "key21": "3HjDSuB8eZYQCtDVxLz6dtyrpub2UMXVVmEWA6eLmT7AEEaG2PBtYUGSJYVpksQunL7LPKvbCWnpcd3A4uUAKNSL",
  "key22": "twY4zBfvMozNRtuPtSnTpm9C28LQxJKDWoLCvfcyqjcKNwUrd8ViAxCWCTpGSGSCh3Mvd9QuQ7PD1uPVSm9HRYT",
  "key23": "2Jhq8fsxroGBfj2mnWKyX91YNFeqAj5jGQgbQskr5DpTBduvq7oAoJc7XAy7Cy4V5APyrHqEaFeCbijrJxvFmGim",
  "key24": "3Hcnph9FypdnzTSEnUTntCXuyzmPAVsynLa8YbNFfndvz73Sf433FUqo4BuukUQkmWzMcBqb9613QpEwvykY7MgE",
  "key25": "5iqUh3AYaApDr4Zccbum6b8eQGMvhVMuqEAnHSmbCJqF77sMCEvwRoD3UWa7FkJ7z3yoSzqdC6m4dTZKoMPFCDZQ",
  "key26": "HeAaSMEBgsosPwhJywVRMoCE32NKSACy6vZxWppe4YWHJYbheW9yroo2z7AoNgBH8yY1aSqdr9EeNUuUWDeFMxX",
  "key27": "3kL6phgfCDCKuBcbuoxgYhSDJrRRh2YnniD3M71Xr9KAqvhYF1TorWBjyxsEsVnncbbCGTAGb2rkETjtCunVHAGd",
  "key28": "4bcQ1L6UtbuMV6pxqYeLeSXrbfNxi54Ym3PcLfG2RAgd6KrogWE4TBLhoPMrEY4RA765vujcdQNSLYeuRJrWkcxk",
  "key29": "NB7VvFUkGeueAv6r8RypPMk8s9pyrQg5TG3jFeZwCqCDusCZRGKzCqWV9MgcbcKi2CRAwG9KFSPkhkHcgKDeSk4"
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
