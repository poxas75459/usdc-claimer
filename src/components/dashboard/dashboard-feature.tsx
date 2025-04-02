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
    "5bdaxYpN2cLX7F51xjmLXv3ZTa1MGdMzhS2Munmaev8Tkun9PwStoiV6GaFtorx9NwHmMXTXshFE33YFa5qHsatt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28qXpvuH6UweGtyf2LGLZD98sNRnxTxSCMzmKgtN2z2nz9SR39vXdxizswehuusFXhjTQZQHHvoPyJSTuejeAQbh",
  "key1": "4jG4L2SdjjaKKbTjfFV7Y38SRoMXuz6hGVs5QUmbQgng9AzkuLQX379hoQ55gS53JhBWNJh1hjYpbmz93ywymSjq",
  "key2": "4GZ6Cxnh9UtUg6uXqMAUKbejxU6Vz7cq3cy2tTnX9s55ybfH7tZvj35kDhjmWgzT4xsGpd3aiLQh7NJT3r7pvcnG",
  "key3": "51ncoX9g2dgsj2K4zjHSVWWtgXsQEtJZSnxE1zHoWCLbxoXqKoCHCiHwaQUnoLhEWuTSRrgeU1Lw7L7ZqxM7D3gK",
  "key4": "58foGbZ8DQFBjYm2krqghezWWcaxUMR6ijQx2ziPrnwinCfvFmeCTVyZyVZC4Y9d77KLneyoRiAXxsiv8X9gbkgv",
  "key5": "5SK8XyEhbpaANmCmXZyQVG5QQwqxh3yXtd8BAL8BqghD8Ejy7QMv6GR4sE2sx3hF83uVA8B5ZoLf9TyunGLPxR5m",
  "key6": "jQZpJdZViDmDou1Zy8crWe76Z8D5cydanC5AQVk6CkCEr1LHFHv5VU7srPdd2Af7mcjp4SkpujUyhNGjM1ihmMH",
  "key7": "49J68cgT31K9sdQvZcFk15zkLeDY2dwdDP39Pc6hPFhDtyi1M66G7YdaQSK15pKmqPJj3bCDmB34oAAgEwUkSBPn",
  "key8": "5VFdZFXFc8qX4irWvQFVHNQPS9FB1YasGKtjigmQEczLPjbcsyYkJ1N2R11oFAaFbHSKgAd4GTevJrKQ9kdUr4ew",
  "key9": "2DgvEQhyuUv3CZ5Hq7rBtr6hb2ewq1NP2sSocAtmfb6BEkfP5MbzgqzFPrwHbmPbzmkDRMnKCKCaAMbYRrhxLCQd",
  "key10": "4dVUhaK7rF6XzoHdzMu5k5N2fCc1E5sm5jPAwpofA6uVBPjzAkuqN62q5MqqEtBHKv7SwUnAPXPf2bD4NzPcGmsK",
  "key11": "5eFn2GLa2Uf9RJaJGgkEL9Avt2wdKte6LaUmNdVqR7rLU4Xijb85dZ12Xt8HwrXMuHN4TR2NyJ77GiqtuowT9omk",
  "key12": "4mxbUM5kZqCXJ1moYQ1p1b2d6ZX2AmaYV48HAFdmnnAsmJbtnE8n43Hc3UnvcXL7xq8N8aT6L9qA2yCwyZ5L56Hu",
  "key13": "5PQnFfjd66TyJ7bKeZWEhNWeYanVqnP7H7pZBizJMaLqVmJcbeVQvGbYWhqFkqXVCbGkxXvoqmzMZreE98JM8BkM",
  "key14": "zUB7GBVqUHTBG21YMjiavdJMfEMiPer2HKauFasnBL3PzwfyQ4raqg8yC9mju13ikF3BxChuNeDhM34GgcjzcB3",
  "key15": "2hyTy6uzY4NTDvp5VtMTLc71tZuJPGGiKUy792sSkZGXtmpLRmk7sKpVRT81Ni6rtn8fLqkT36tX2qMingSae5Ng",
  "key16": "4E3f9oi3nJLrjGMJ4xEpTNZWygii2KnFAhk5XSnA6GYBA6CNyjuiDTpdTwYEx1kdeSujmK6GGFwVGgUDgpXUM9Se",
  "key17": "2pPGJc2iU19KKZixhH1CYDPc1vdoC7jmHWrxC23vWs6KRFm5JnhxVQB6D2rJ2ozV6ZKu8hHNQ78RXhVWTVds4LPb",
  "key18": "4SGaJvxZNkffX7S52pEoYJJfhZjwDkH1Uw4YEJzK7QznAo2HKhthyXwfn8QbjN6oh7GsgkBRTEiw2REN5absxTGg",
  "key19": "3DafCcikYkqS5eVmXmByDpprbU9nQvw27468VthAXhKNXEmqW4mfn7A2hQ2pMX5TyAET8Jrx3LivMCVd1MvMt76Z",
  "key20": "5FXVzxmRMfWWXzeUcXiu2gNPenhwegaJyAPprJ4vuNeGLNpwiAbx2GxYKYutUPPr9Q4BA8MuE1okW1gDiQF1PugX",
  "key21": "2bbvZqEbKaBoCeGKQkK94KLo2fmcH9CRCX8Vy4XhCnmYXVrReqpJ4PkX6HKLDVesf48JEyxDZRQ3mixnGL2TAAS4",
  "key22": "59vuCj355t1vDzNL2QWWnjw9w212Ut783o8vG5zPqztBv3oitkjbo93pNuJ3efBro5nAqt7y7vP2D42xbzvPzC1R",
  "key23": "5c6GxuwWQtdqNJvPw28cyhoCcwCpZtAy3LibLACwhgXy6NdDvHojJPFZ1vtKzJr9ui845UJrf2JnFY1Ae9AdmFqw",
  "key24": "65mWGsVALGBPknmsye5se1oygfAhuN8YutN8qWkbc6KWmPWKEnMXsyd8qWnHpHN9pkmvDVeaxgD9c4zXVhU61CDm",
  "key25": "2figjKAcAubERsRBg1mryoSx8MW6Y4W4fNpDje2DXRy9GYQrbuUFQ6mSTF81e3ZCRYTRxEd2CbRDvaEXXaAozv6w",
  "key26": "3W3MHaa54xuBUf79M6KNimSvMB1TQigivtxnFeYR3adi5gnXftXVZj34qVDvYR8VffEynfif9YeqvpoLbj7aYKcV",
  "key27": "3KgH6cnEQ2eJzQQEqDhBnrwB9xSQTNdEasTdp9BwKaH3AnxDQM2iCzJW2JtzxMkMiiTkbXmR24CU8vUx99Q6rKQs",
  "key28": "365tFDpzSL55kvJdn3Xs4kvBi5FrHriF8KrRCWrNA7LYK4vYjsJqB3YTpUpNgn4ZPNHyee4Lw5VmVyow3Si1CdCh",
  "key29": "2SqoHNrGUDZUXx9cvGFwzcPtmogNTZogbYFPXXrwxuvowkCJvgf1tBmrTXhyGMECV4FbXEqxcmnhS7MwYAoDaZCB",
  "key30": "2UnCesn67bdVoK5NoEiZUGJwb25MnBB7TiNjcSeZ26SV3WK4wDLDZstpGH1ixefc1ajegf39uDFA6pfq5Rh4ejYL",
  "key31": "5ZfJr1TPJNdas48h4EFvqLUcgWpnqqoQTFcijftALaRDWvisBfD9PGYVogx2c7ks78bwFxJuvyVyrQqyQC6mnUMQ",
  "key32": "2jXu3H8faqaFqEpU9F3YxuWmexYckeqy4sSqRKLdai9SRFzPQirRgC4LUs8opgx5f2eFK5wg6yiB8Eo3Mywwo5jF",
  "key33": "8jVmou2jw93JQyfBxkeCBZgfxttd56mv8iVcnndAhgAQXjvBk2iekA4tXo4bomfbLqJNvXBAERWrTqjxYEfPKQW",
  "key34": "7vWoni854PZwMmz7b8U7JvhgeNeKJw6qJaZ5kz81V5N6nr7BujeXAu3JvMwoLUNJ6rsouyqMHYeMdLB6HZQ28gz",
  "key35": "4xDEPsfSMJuQV1DVXvcXj3vPKpTNqtGwuivNRz7edcVj9JZcGFu4rNoBQBeJedWsbAHaLDmZ8JJHNZyYKLXpWx1t",
  "key36": "4sEJaaug25QFcqbEX6CLpz7kqxX1EkxRyxcpuZnuoe8XuF4eMpMPZHqprZeiZEKZ6x3J9CTWctyVPw3fHLgsrnjF",
  "key37": "4aiBLLyokYuVvdqVw2ip9r9R13khgxaQXrqx93EWDZccYCwxZxoWLMgfYdEE4oA2fU84tf1USPr5jC5twrd2QCpS",
  "key38": "44r6wWjqJuaQuWupe3XpFAPM2gLNiRtvUcUan5zEVZ5FJr1289RERe3MNxKetUY82yQv3fxjemKVHT6kiiUBR4XJ",
  "key39": "4tKByAAY1z4yW2fHoVtm6eCorEn5gsAhxFWtCQC5VQvPh5gFhMc7R6iX6TUDY2ihaLmrbWN7v1zbCCzr63wM9TgG"
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
