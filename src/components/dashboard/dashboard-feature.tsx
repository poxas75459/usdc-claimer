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
    "3tLv98zG5WWkRYDva7HP4gw9zAEGDRZALS7HEJLD7ZByHPh5rd6HAsvBJ1Lske3PgGdsvzdHjRtnb47XT4YM9cWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vs5JMfTrRocCxRzv8zEBm1SdGvAVsxmj3J17BDbjqihphvYWUocYi2b3nnU5PVKSrdbJTzeyCFeRZneb3WkyTEw",
  "key1": "3i64JDcmfyv8wcffGzow5kFtQ3KPHzBdLuUDu1iYqzSic77o22fvgZssuYfkaee4S2Db7QSDF1Wm3Pb7TQN4eHq7",
  "key2": "28KLVGJEkdZb3T6SEEsRskDy7LovxQG9mcX5H1Jjc5iRjsYNJswdoeXaJzwtvUmPeH4H5niiGVqmhsBhzX9Mqd7t",
  "key3": "5aK4bVWWX3YmwvKRMmjQPyhihHSa4WtPdpnJT8e96VsbP6Z5bCknzbQvpVeerAs1KTVYukPQYg9nu6FbAf8Q6nzy",
  "key4": "3tMhR5kcTGBf9s2gYZmj6bTgmtJekRqYf6oe4ZiV7CoztKvUrg7TvMsDHJ1fT2F9aqKuSfFUhKCpEpgorGe2g4hw",
  "key5": "jU74Sv7he5mzSEP2x1HLjNV9gS5NBEgnDePwtFtCS1MTzVHKocM6PLVgySxTyU5kXAg4zyGRgnSNv8Jmd2U4Y6p",
  "key6": "Uz1a8JycNHkGE1kvpcX17Txp6A1ed3ihJppAncDhTQqtCWFuF2d4hcKdMNzxULNUcNPZ3RWgEUtjAihpxZwuJqY",
  "key7": "nMxcd45LeHgC4kp7wwkXdPHcdhMcUNDsp27kisonTDeotiFD2gFbr1bja15NUZ7NSNSgzE9PMzUCBK3M2hnuvLq",
  "key8": "PEVUDUeMs4vg64TGxLKbanbUHoHjyonz1iwBSHAQbUz271ubing2MSHtZZH7NUh74SUKiwWrbAQATHAYDZ3NX3C",
  "key9": "5hPKgjjKdardhS8Kpwe48WMwDP1fWzxrqxPAQwjMgDuieXJyQr9PPcNNG1nurHv8KiaLFsCC5HsNwJUyeTKzFD1z",
  "key10": "59NF1G3eSykbsrsJSyw7YAMcBvG6NbW1CYDdCuwWSCM6JjEAQuBiiPqPoGooYTTCGAEZUduJVqEeRGRXpXUYBfBF",
  "key11": "2K6X3rFCXfCxQHn1e7WA2A66ZJNqT3Pqb8ijnFwqPBKENiJRwLF6E3stT6fWN5Nh8ysfW188Qf67djrAQHZrV737",
  "key12": "WEqRc5ZGYgkuHxwpqnpJwWH4XzXn9TXaN6W9zESfcxrtDvCpeiNZaE4ia59vdyK37dT1bwrQwwYten27euRafWo",
  "key13": "2HAYMShHaxAxR8kTMoYD3kunTMv3qSbKyMNrB23VDaSjwn71aj4dzhz8yUv7M5BqDBfpsghrRcL15ESPyuJc7shG",
  "key14": "2zKCp2MRzSYWmEh27L263jt1QwVFLEohAzCeJVcVpL6mXBJHJGt4XmZVfxYQzi3zupAjgcjVvjUQFFv15rzfjAzV",
  "key15": "3aKYPtx6X1wE9X4nbehKqC9fbQWcTS3jpshQNuZmDQU33nvfq2MBdZXZpvustwQiPWrmYmCYUYWE6rY9Qmr5b5Kc",
  "key16": "3WUxKUnXurbAKpv7yjo9JTsXVMRp29V3tbz5Xiwd4bhxoTCFaonVrZd4aGKKmVDKATJTDqo35vsyzw3BrFtfwiwf",
  "key17": "V7XWkxJyXWM3BdrY3JrNJJcNcNQVwYBkn5BLdRifcD1bTMcnFLCqSmX24U2uKQwgMz5aSGaqUhtwm9NwaFcB5Mt",
  "key18": "4ekBf8mEhZChyaxwZgeKAPYjAvfFCZ1p97EBuGZZuDfm2BVNJ8ow5HaLxCms9oZHeQ6munGLkqAy2JivVP8CLKzi",
  "key19": "iZWLRpxRoaNEf5FfvJzrLk3ZrS4fQ971b9AaQjnU1oNcz7kJgwzpHwrBJ6Uec1pVwKF7sLMVhZYph4eEgWb8nze",
  "key20": "2Q1PP6PUxcphJoV8EW485evsx1Mxz2AsRCRTFf2oXxSoyk9Ep9hncRqQoyCzbdrZqrnLLYhKwBboFKy371ijGm79",
  "key21": "45WzDai2pDBAVsEd51eYnt3k9XXNu39dFXJbMDHAdwAWdCoRjaRsbjncVmrJksBA3ZGSR3nNBJr318fE3UiCuCsb",
  "key22": "2aNK8uJSVKjqMoCbT4nsYq92WwxFbeQztbvYWg9qR1eHovnRLwWcunwi52j68Gn7AXETxpQSw6x6xRaoYhERA8yT",
  "key23": "4B1WauSTMQERYwgqFVkY5XjWYdHniHoqFdvvGCHgpZLPoYrB5PLc6SHY6cciNd2CuMEY3U37ZwAnPeD8Fn1eh7CP",
  "key24": "3L4wDzAz7fTtuzo55FMqgvLEwNvKJ4LRNJF84FLPXTQZem6QjSqZJGRVX6YkSEJzbw4oKJk6wMtgx8mDP8SL4xkH",
  "key25": "2AGc6TSqqWi6Ya4sasGSPtrU3c93Wf3e6EKWSRoz3cKtRnxh6jPQr1V2C8gcn5UBVFWidzdSTmJYVUP9e8GRAZRv",
  "key26": "39BDvuPHJqW8ea8Mtagv6WenPheRJzcZnKxBRJ18GHac8z33XhycNQKK3pagvMTgnyBqUuYrBLQYTbvNkJXfXLSR",
  "key27": "4w6ePZ2KwSvPRTQYds9sLWFoTSRLQSv5SRXiuUYpL8gNYDYVydwcXBpSz1empAA4VeeLFGUR8avmfCTLR4Ezpt62",
  "key28": "4gANT4MB8yDtDu8Wd4mnkvxxYQhpGSoch2PMzeSFo2hpypFP41JoC61rb79iAykH4mvZyck5afqxrHkkcHUG9SXt",
  "key29": "5THzctJk1eT6RfgVpErfhctRaFwH85DQRvfFWqKBYiAgFcV4KKo8qdJgkZzAVn26GQREDcLxqEicEHnCpRPQFzMw",
  "key30": "3NWzKNpoAhEhopyiADwYRyqtZ4zsnr9io2VnXP2ui2ekgEChC8iDawb1szfCy4kNSdHBbx7vdDVkWMkbHj6RmF68",
  "key31": "39oehLEQXTeRXUQV8VrDKZn3WD8MmSE2gfW1ukDBadNLGyBmxfXPcDmFDJuoedvbvBXQGEo5hsSVksZSiHvo16eG",
  "key32": "WzXiH8wfAF9fUBvtBYbfhKX4AEg3HCz8RwofmRRFMc6WwPAMbYKcbaYZLJdmGha3MxWEgzXuV1ijCbtYynZzyZH",
  "key33": "3kbdFkXGqk8YoGYwjDgxSn6UcjXouXE6Vu2LeCmedTjeL3xDripdTjsSQkPQskYCXUkFtKTLy1FzhJJqaSKXC7fP",
  "key34": "3cSc5R3fg81mp8sFDL23x3RrqtFZf366Y2Hp8CWqBmxU3dS8N17M88wU12Fd9dJ8SBkSM3TzU8j4U26PWKuGTH3Q",
  "key35": "49dGU2Q2nmSq7AbETdugtXFY3MoPPbkm91ZVy3FHWvmkPfcE2rKULsZykrbFfngTAiBnQGfdexi3utdjGiE2ja9T",
  "key36": "3b5TzjnV8X81tsQodiS64u1p8kRHdMhdgZPyUDnGcRciFkkRcMj9RPYaa7CwRouEDrd97HWAwc7xik8c3sk1E2jd",
  "key37": "2y9EQo99jKqEMNFrohXoQ98HZz8a6pYjrrd2yVFN5CbrF3KPKKSQ1aSieG99nbDGWwqTqapkeWXhPN1pZ4rPhYt5",
  "key38": "4BrDDwo7MPzyNNTCvtqMAWwjtXkXmQECNg9G26Re729w29ba4FtxYhkPE1cYTgEdMpPHqquvoZSJdHNQ32juttsL",
  "key39": "411riJJXzi6ZK1taDHPRcq9hmWgnaLm7opuqt84JWQLiFGW1n9LpdYQ4X5ayejc3KakhHVLDVNBYJNULZYWKAyxF",
  "key40": "2cU5qvgbJPm7SecTvXLC2tnTnaMiDyLCdT7oNFUGXTzTuBF8NXguF1UKRj5qKyZJFZDyfSWWuMENPWorzodwFX1b",
  "key41": "2XMxRum5YmC2CGX7XF9rRhnoTg7HixGTeXnT5jgvEcxfwj1JrwGK5hMgR3ykBdAJmVVhnEdHd7pQc966qQWgCN1z",
  "key42": "XeMBE6axWQvjUkSFiBfw5HfxKVQkMBfP7NRLXRGB1wHC4bazURvAvcE2aJRA2K2KXvtPBPpFdZjeB1eBNyevyf4",
  "key43": "7oQSfjcPHahGPU4BnDYCH4Dpy5ExDrBFatUoYD4CpcRiWABAGjWvzXpsb2RH9NLhZ6HF1UYyqQemR8uQ3TRWbrc",
  "key44": "2wuNVjiWLyV4TMPui9Z6gJumD8CtghEpY1oiX4eBFWA5YV4D67oEfp4ffUUJ54mnBuWfar8LVHJ4oreeCH5MrsGY",
  "key45": "3X1P5QGHgRX1N33t25Wo6cAtQcqmMxCneco7W4MRensP21P1j1mB5LYew35XY6jBV3Z8NCWVZRQJS7Ef6MiYb3u8",
  "key46": "614oQi6j7rUJgAZcmQmtZUAqbDrF1ojwFxWrZwGXDXY6yCo9M2mnZaVEJrD67xCgbMUQfQY89fNapSJ93t3i9rHa",
  "key47": "Q8HP3qAxujSUR7nuPnxSnRDdFCnazTfT6yMYas7mdagR3rutVfVtEujdtrnc7BPqyA7ES8WRCqYkdV8s73kAnKw",
  "key48": "56mqdxkFyNPJTbTVyfXsLkVdSVGMYk5Y9s5KbNdHSgi2HfUN7ZBpBCDYApeJDXZCJqJw7Czj4iutpbs26bmyv2GK"
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
