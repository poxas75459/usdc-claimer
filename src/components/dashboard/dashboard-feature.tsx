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
    "4deJNZ8owBzU8K3pevnXmhdDwRAPZNs3qmcM6XTYkuw3Ky99nMAtPXZEN2NGNzTdWLg94sa1A3mdh9pcKausVbFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BJGepAztLQ6vRQwA6tpC2dULBcpFUkiLA3qDMu6YhCkJnbBGaK7YSZrHPD9AhW4uCiAM3D3zoSaT338dqta8AGg",
  "key1": "4zg3kCpcAZh4fvLUGqSzGa8KcMZ6wfU23Azywdz1JFshqwshcYC2J7Leme3GdupKj2v4NwG937MLCo2YuDtTmvS6",
  "key2": "3PerhP2uN9cpxeGUSKUoQ2KuRCz9Q71y1Cuyjb66wj38uLwtcYVuh3asTbTkg1FWPjWvHPNJGHcq3TqaZFXurMmY",
  "key3": "t5NGYmLHmd9xVxhYz2Je5z6PFNBJfWtZhHxF7cwyAEEMGiGRHhZ5kQ5vumvLmfxzvd1YS4R4ekNjRLwgJmQFxLz",
  "key4": "PWFxcki3ukQRntuZLur8mwC5quTfDGBDGodfaLStzGVFH2j7U49DRNokmL6eUG1h7gsjrxNGCxaS1hoHkRXydxV",
  "key5": "43i6UXhAsErNpKqcrqjs9bMmsrJvYciAn9TahdwQXhxzeAmbzmfNxyQKrLmhgYLi393QfRVUVxy9MyQiDtZA3sF5",
  "key6": "64jD91V9aS6myi4vWEL3yb4sqxiksPFf4p6AhtmK3j97SczxZuvEx4hpTrkWGsFwcvS3Cqb7oHUxvesAEXjRfv4x",
  "key7": "4vXu7YBFvWgDxCgTE7HnBNhMy2UVZVcQxjTxYKUMXv4S9LLH2HnJw56ZkXBozY4xXTpLUY7J4H6qXjFjsP4XoSxB",
  "key8": "2jbNmEHbRs1GFTqCe5vKUCzXNVosWw8nUWaiguHLzv1DTg8KHTVSioBSUSbgMVTtgH8UaGAemvxpXT5uTupcBrNx",
  "key9": "3vXrV2tXbvhgZGAdBybEpUCShn7V98rdaHPKduvhVK42jm9zNCE8cHd9EV4qaKsFndcau9Z5qz56yRzxemmZYj18",
  "key10": "5oz19JSsNjmNCFyXD5qBJs4gwKxqRWCwZXxpahBjXW2umPGTLe7ePwam9vdosotr1oYpYbFwGTiykhPxrUMTJp48",
  "key11": "2c1RWZ86RKTjVfcWfuCLR1ZKTAvgdixkeYsYX87v3iYtdXyWuFwj1crezjiiuchtDyXhbkDfQoAAQkAbe2Z5BFEZ",
  "key12": "2DuZtpeqGLJSYeVp8xsBzvQSVdyBhG9PYXHg7J6eM3PdbM2tR7ySyLjZdGDrDFsCYaQDYMiXSUnk4xoo5K4Qaeuf",
  "key13": "2oQN4Cb99wJfKRPhXeUT1f5r4zX7n6vMnqnnuEMdmqn9fGKCZ8zhG6XF1nwwQDsyQiVKbZZCs15XGP2rjvvjAefu",
  "key14": "537dyPgug7R9sWSPjLpLC6yPfPKxXt9TD4vC4m6gDieTJ5bycqBWanWD4DfEUV86b5mVWxJiEFu1mdfc9X8hDxEr",
  "key15": "DfQPTnKnKNH5yWq4J3cofXH2hFaCvRtjB8sKYLPtR1qEYbkCQ2DvJ6eAV7paDzYNZ7fWXVJ4P554Z6qpVaPSXbr",
  "key16": "5jYTEGk24pooLTfYmqWYnG5tqgr6KNmk6hzU3iQFZ6YYHdsTXWKsiqEebD9oZeA6VBEDW3eyTNDZ5t4rkT5mJpBH",
  "key17": "56JPr57FJc1774KuKB3s3CmuKbmp6H6Vuqegyr5PEDAMhiYvfNq6YX7VzFseNhx3wbXsLGAFECqYPX9MtpPnSzwe",
  "key18": "4ZPVxBbtJxZaZPgqjVSqenCYNW2W4zchuvBS6wTZXFx7rQJoMu2HGcA61RBRGhAMWykgTze9wAiRtLseSpf5CQ8J",
  "key19": "4Jt1vuBpQkU4CiqSL8T33KAMB6y7u6jXWyCH8aMdxLJne2nBJtayWsqzfY9W7ABykwpEpoqg4hhfFWN3SvHnUVT4",
  "key20": "4UauFw75ZLw3k3XmxG8EVsMQhqfQToB39LrLMKJkLyoKDCFHUSyRserFYKWsyNDQJVH7jdDP5655ZYSd5hSHxX3S",
  "key21": "2PrfBtei8NuUMfgEKrKxpUbC5TPaQVHm1myJa4KPJJd1BhhhfaTWoHAaDkHLw9ud5rSc2b2d9GJ4BWPijh695W2N",
  "key22": "2Q3Yujgabzd2vx2PWAGRZsgbVJorcDhePFk6B4uAKP8DDRYZguiFVDH41ubmNQSK65aRTQR8eAErLfN8SdtudZFy",
  "key23": "39w4YkkDFW5bAiCa3G8Jgpf1CKb6U2dhNu41DrWFN4r2HN824J4zCMoaFo9xZ6ssxbetG6GGSHN99kZUupYKEMgx",
  "key24": "ckuqZHaTbW6uPPoo5vq5mQ5rM7xo9ryCQiX7744s9C9VwyZQU3c1JavYJu4AxTGMWiJXbGk2qmSoCuhP1DA97Ns",
  "key25": "5ag6dWr5RR9txgJuZqekatWFNnB45EzZb4D6uQK96wYp8ucCN3JrT9er8vgwqS2c2aVbXiW98p4iZSLMKvuCXiis",
  "key26": "3vwAyKmuecNacuU92uavb1EsdYaxY82QFTpSyQX4BLGUr2EzQLfu2C2LnGo1QZ4bHWgL1PsXBYtaGe9j5rxZgvKC",
  "key27": "5tNMpNG7esCMfV7XFVwxrmfarjZYp7sgvoH9sbraobJcs9d5fLa9newas6d7VYAbH1inTpNfeMEF6tbLyF1emngw",
  "key28": "4BYq8H6yxZnpTc9Gb1yAY3GYSPxQoiiP4SkDqN17S2NxFKypNb64ZE3kyRKEKUZfrn3ZqngAMu63BrPMSygFy9Gz",
  "key29": "2yLvgi5EtbB2m2t9UFSGxhbRqc9eYPk91dED4STULj6692FmivSW3Ui8fW2cJdMAsRZ4x6tfyskyZXithzz3wwpg",
  "key30": "3naAgfmTAnvWtYmzuBFek7HEaY8rotWcEyZeKLY3xYBd758knx4oX6c8wZDCGspDS22r3XcrPQ858mjNdjTq5tLV",
  "key31": "5mP2givXE3Fd9TU77F6enTwntBgbFkcDmkX5PsWZMRERnvsmThondeE1iLVDU1XHtJksKZWoootcz1D7gPzhJ4tn",
  "key32": "3G3edUXEwrGMh2VueaPpQXpQXHKWwqfFM2Evh1jwwfps5G6RhYFEhBtPjgFzr8FhQVaTD1k5vd2HEdPhbScZsevk",
  "key33": "4UWSaM8gtaJaRgGdDzrQbH2FGgN1rJUej1mjcm779JxXr3FJ34FetMExaHXAnaN7cNWE4dLPSx2g5cAfp3umyfvE",
  "key34": "4okeGDXxoaL2RMnXtK4FiqsDEsAgLijABWQ3FBzGX4xrDoiq6otqz3849q85hVkfdTuqiVKca8NUUWvswJCy7FBe",
  "key35": "31zGtfUsigCuaytBNKXnvynBkt1grhZ1CS6an9HS11tMmSBAGk7D3BNePqYpf7rgsrRedvBDddKz3v8kRv125w7D",
  "key36": "2kNRDthg2EeYtZNE8RXzopeRBpcwTSidNK1aN4TJgt9URxEPVPWmbpuBR3pHsar3NnJGfuZ55YnzGZhwVYPB4mxK",
  "key37": "3ytLKiqdp9b9zJ1185Wgy9tqausS3EfzVBLGXgqEe6gMq8TD8fRiQQ7kXmE2hmoYi3xPGxNW5zTgk7zEuSvBAFaK",
  "key38": "5SYAnFm1Sv2SmxLEuQD1L7sQ3A752NKjwbdos4WtyQ3q5PKNGzy3c7HrbHD25VVvxNv6ztiNohVLf21jUZQkBFzZ",
  "key39": "TJntTeAk91E9x9Dd75SNka46X53EF9HUVM9hXH7nda3fKP5zvCCNiMYeJ677owN6bwydYpdWMhE23SUM2wb3N5J",
  "key40": "3UEbEFFH6tAB9HDSakWv3Fr3KpCkaVMTnpzMr7HHb9bRUDL49Qo8UJAbJzTnd5BnrjyLmjwwFZP8DuYRak6HAYUt",
  "key41": "CSKfjKzDL1mGFjoW1rvT1oZsskV5nxXgUrNJghGCyXkoBF8196fgPTgSTQWA1DrZ6PnoU48gWBZ7axhEkPd8Bdd",
  "key42": "dhohogcJUK4Uo92uaPMrWo1es1v6btMDYZoFTzLdCDjpE7g5MMWM8XMfhqCdh5ZpR52Ug5MJEPmY7bHae61yjLU",
  "key43": "5HvDFEcwnZFVbyGPEL7XomSyRhLdzZSPoJYT7jdzhkxKZ7nNHFLsXBCGz4hdRpPmsgob5tg58edrywiw4Zc7WfF",
  "key44": "63Jy4RT5v3riTjM9AfVCjknKWp31WLXvfzpGJz9xVDkL2CNz97SqZXYxzC8GR8YhUsPCJmEvxtNvG9koMorF4Y4S"
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
