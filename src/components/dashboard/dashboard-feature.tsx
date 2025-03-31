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
    "37EcrtA8euFykyPWY7hDYbcw9kagts5S4apFUTqvc1Axxi9muXSSDAWzTgAtCyV8V1bmxGxpth8gikeebhfbqeGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4crHDYvdUp3AGGmyZwT23eQqnu1jcXe4vTsAP5G4CrKiLZkapxjnxYXRJxdRTenWxgvfBak8E3i5e2yEDgLrb4Gr",
  "key1": "2yWPNLdkZKvmXJ8XnaH4ziibCffPLjhLZ2E6dFSsdwd4QxxLJERDKqDU25xMVcDPy4Yaj83zB65Gakan5P7pTiKx",
  "key2": "KT3MymAtCWiQYYcQzzgKX2fbvi75PuLUWNc13XALAzzxWJubyxSu85TsCHFhbhW83tGu949syYhURtQGGg4treV",
  "key3": "2BYMcZ7TFbnrUSs46gWwoLJsiEhw4C7WiKtPQvNpXPQghCGzW5CMbVx6KiE8dVRQjTwVdYfiA52FGuG59Zr71VAG",
  "key4": "5VKGhHdnKFHvH9NAXNjfFFgTDU2Nk46bCydZe5DnqK5XToMAQM8HS5ghtPvYUhQxWu7QyrXgbU7iN2TQumpjpHGb",
  "key5": "4xQ3pZfPEFBVqrj9GxGXKrQQ1HikscZeVnja7ptyibBcuARSFZuaS1jKdbfJbZF9VmLVK53JCTAEma28iwgBMH7v",
  "key6": "5wJgVewskJ3bE4nCs3Ffh5c2ncuaSSqiM15Dohe53uR5FZCEmP5cK94BbCRtDewCdE1AbtgWqxfiBgo9ppLhaD33",
  "key7": "4MuupYN6QKWnMbg24QamXtFtghBSTDsuxT7yGrf6bTV7w4k9ifRbRF9W5XgDbXYS5tYkf8SfF4PUV6cetPzc4wms",
  "key8": "4xeyjKnDr8DupCxG7Jrf7nawcFDGQae4G4rSSj149oyhdNH8ckpHvuHGS3tuCLJAi6WsfcHVHghhuZMhCJzKu2nw",
  "key9": "E39f2tBV7nj8A4Buw6xEUs3C6jx24wVEgqnqbRqmkK4LT1uz45jyAgZJ7vts5pDYzHFMk8ZpWa45ci8kv1TZN8A",
  "key10": "43gP5dL6wKjMNj9cWhvUs6hMJHtV1kU5C7TQxnGkAGVQM4tpo2HpaG4Cd9LqNcf7tSNKTsj4sAyWwA2SgvNVz8TU",
  "key11": "4qwZxxmBzk8RLcwDoLS24EDLQZ19JdfoxsZ7bfPvu4KXgcQaqax9cCaNqRHS2YYnVSGGhq1f4VZW38aafHFrCk1z",
  "key12": "5Pn88nUt2v811NHWwRzyZWQ1ABkMyHt3h7xiz2G1NTNhfvJfH4bfwNkwqd1NDsojancPhhxT8vGMdypdYebYzLMD",
  "key13": "2EQpK6jc5YEX5zVZaTc9icSUZ9jNwQXzjZa7AFjsJveJ9otvjRta4wQip1LDd3q5n8sBdxzmJUDM5iVYgJBjV1Hr",
  "key14": "2bM2tH8AYdF1QR1oqc6sjr6nAyRtHvUNKnaT8xtV7Te9hiA1m4RAfmVEd8mMUnVs1kfz2aWE7N9Sko6QnaCmUsqD",
  "key15": "yMDKV5tVdGJeUbzcHHyQsEX6GcitPFtPRAXRQUTRwqa9pVJMJEJi4kHoMUGYqG6UgpeK8uznTjZxmce85MAtdGn",
  "key16": "5HCHMiToTbqpdb43TTxYmdGx294gZG1RrKebc4SXhNScMKWyXWs9ATfFC8uAMMWUDPaQZXJrm7LAqsgNcYkYs5sS",
  "key17": "iY1L7Nbw3qiCVbggdLEyi7BP1LVHzycejaZAUJhmMWDQMcdqY6PkmPfh9P9DgnTeA1HZUvFzLYSQNbeYvExt4ma",
  "key18": "2Lj5mQKnQKcU5Bc9mfLfsmFU9GdoHEkAYi2QW19YcfBzks7zB3nJzcRFziBChwqhquG2HZUcAi69oHsBvNXFWfZp",
  "key19": "2fzWpyzVMUCV9CYQosiULVqHah9Nbf24iNRPnyAhMEdCEgi8TzN3P7FouU5smQvM1mG4HJdrpYd7QMquiYVRVF2S",
  "key20": "3m6pa22etSFJng2WNgEs1hxh1fckFkQ6Cn96KFC1e1hfHXZj5RC4429KSbKqECWvNa4mtpLVVeypjrErXH6ZVrMS",
  "key21": "3yho5qcWVPtdb2qXZpFM1AuGSKJNybyazBkJAt93DMWsYrWrfofBi5gxrHpJT3tLm8JgtDkbbhLJjJ3cuVBghzFq",
  "key22": "5yzR3W7axMbtYPTZg6a7eAUPPh8ywzyWh42gfxdW6tKyjk4DwWgcGWu7nBbJm8HKkv3LJv7zY3jEHH3aTtSp4mCE",
  "key23": "41C3DFHR9VuZEn1DiRqF9FWmRi7a1obWEeVDLfAYFUw2NXCyYuP9QxacCNuVjMqFj11j4yi162aiXWr6g168PXqf",
  "key24": "4C23mTW89r9FEzYMU6vDPJY1yBBqVP31uZoW24Y3rQryu6bbNx9wcTXYhTzMxi2umyVHVT9a2aj2BzG8pLwCEETz",
  "key25": "3dG6ywrvx93au41qjftjhXfnSaKbYPxip2WjMzsvFfrCyeyMFnj7bgQg2BEzwXLZgWHCfXqZjhy99pRy8pvUozoS",
  "key26": "2DU31ZewdXAMrJVFjPUC8uCmsDshd6Qgo98GPXX9n5N3QtSzr5x19aKV7ezkF1onxPQB6oRdgoFzLokE1YVT1hAB",
  "key27": "36qr7eD5uRGQkVodFZSAQ7zRYKuWNZ7cJyEZdDb8aFmhYcVN8gnzMovQUSNK5VWPByjXZuEDKtbsyVEwrHWgbyeb",
  "key28": "bnLfvLnQ7dKGkBd5VmfRcigDDs6CJZiXq7rcWAD1zFrs56TRJL5A3BZ7bKtbU3FLUM42z2Uf9tQWLpPRGQWu4ZJ",
  "key29": "4UA7m1FDsq1MUxnQmsFdv4yTMS6zz9N9zoXboy2YtNv7rYjFCDGw1B27keRdUsvm6tZTpwsHJ7rvvqMVPkxFyCuH",
  "key30": "aQukRMHf95nSv56oixFoPWy8if492ShuFigEPbR9xKyjTHg4wCseYAEpVrFFFPqfBSqkiesvRq3R7kGdEbT9urB",
  "key31": "51saAaRpncqU4tREdx4fFxyuNBWaZMruT4vFXm5EbojMKGyGfSwKtNZNVKAFcfAwUByutVGri9QwrnRJvG3ZNUyS",
  "key32": "2wH6PLuCaUXrzwmXGkxnguYn28ALyQHU9BAaK7jCL6JGY62Q9uSZz6ZdN1A6ZGutwbUAQBuGdMBkz9QY2X9xDAfr",
  "key33": "2G4qRUG1oCQs8mS9ps6zp7ujcP57gbpD1fjPjg88uqbj3wNrnJs7HZkTAUKjHhmVxtricM3GUAkvDh7JHpfFYpSj",
  "key34": "omS9ZnG76k3REAkWEUovnFwfVocHFg4m2MHcVVXXaJbhAmKmmk6byRvH3KLagzRZethUUbZkVTY3UPQUjQZPqiX",
  "key35": "5xQtYds16HGmmxkmCrdVj6dB5EL6NXP5DvmVqyHJQ5dxqFJPKq98WjKKdTV3JbFU1KE4kWiSf5FmjDWkLXgZP1Bz",
  "key36": "4gsZaT4GuLx6bmeTvWZbyXdmXmG6ZnRsfS9rPeTu6ZXdYJ72n5tH5eD24cKkRcheC2CJdHy5zUijLFbsPvrP6tgB",
  "key37": "5GSk5fFga5Qkj3Q56PmJ2LEdg4f7UHia3Dh6VShQ9MTpTnFHWczDgCDWMJ2od1tzcNHKbCiwb4TGEj6yFy4UFACc",
  "key38": "4fWp1AojpFG9f2kgdMKiECfBFxADDxqoHraAHXyqUmQ43SQykZtgG7afGtQ6bb8fZEPCzEV6BtPo7ChvoUWgKNBz",
  "key39": "59EFMzTiEd9Ej7PPGYy5vWCy72FSPnVGudHYZNrjCYJYsV44e635objM7vAMAGq3jTHM3nQedB6NmCedDcthbwDb"
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
