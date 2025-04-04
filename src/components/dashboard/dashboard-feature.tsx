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
    "5Hk1M1ebVKvwCj1c6TVswFNRhgeRmcJKZndSsSBvZSqYEV9iHZfF7xSiozSBwSojANttxpfhDven8KF2iSdZyK6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39yT79XP5osWHFf5pkrBGZrtAdZTWQ2yxDEANKcFyTCTvSvpoBvJmSmX7nw6zmUHokXEiPTeW4V2jYh3AYPNW9i",
  "key1": "3fcqwfi4th4rsp8XBFj537z3CsVGbwmsdTpzJ22G7CYvMDY3Zp9Z1TBDGLEAmDWPHJh2bCom2jLE2KdKxsUt1qdF",
  "key2": "2jb1FWn1F9KH1vAn36iwrgsZeD7K3JSvRvfq2PxveEghLMM2RiJQCSZVSsHnvF3a3DKBddz3Qzn6Av8AFY1gv82A",
  "key3": "25CfPQS58pbiwXHfcCyzD9fpdW87hQKgyuuD3bJnFxqfSSNjKJ9dYs9oSWi69cBH8uKK1dAXRqUnkkrdRJfpXd9Q",
  "key4": "37og8zTDKRoqjRZX3TpshFbEHtCD8maA76VWMViWmo4ukqQoJcJvwJBygCUzUGdNkEuXidYcuDDFQNzff4C6vdZP",
  "key5": "4VYn8VYuwQkjKgRhJbPSLyGthRTuudGEA9Car7SiaKY4PJi53Sm8Z9fWouxgwQBey666zne35zQJQRxV74Dx6PXB",
  "key6": "2SZhmBBh2G4khNBETyW2tDUeoBavAzZbVjLdrkp6ArXvbRwBqW35L7ffXWAg9n11V2A6LZDDRRXRffexsngy8wuN",
  "key7": "3HLA11NzJbzr96HyZJLHVUGFstEGhzEFuUxMnSBfnSPq7rZgc1WZ8k7yDnywkDDfHDm6jEz2P4y8Ro7dSwP1irJ2",
  "key8": "cRCrZAbUFztGCaJmmpicjucad3cBThxKWAaxVs9qA3U2WVKihBtDBECrbuP8NGxGLpTHhgFToe6WRa7HGi9oZN8",
  "key9": "pvCYLDV4MWBDrQPsEHLgYjePH4pF5GfSTy2tf7WpWDv1tfUkLcV5J4cmzpxyspAvB3Hfkb2UpF9nksQpwbZkJBt",
  "key10": "2S2vUtt4SPPrWiJP8vpn2xMt8FTVaweyHcwx4BV6okHf48KZV8QHfqheg2GZy6jTwc8jtLrb9AV8WTtvhyTkdMnX",
  "key11": "51RSGxMC93SvZnhVKTaTnE99ZTksp1yAsBvTTouVkNvr27NBPo8nrh3oFh2r8Szq8L8NqwrqkXj4zSc5yuB8bLKc",
  "key12": "4SajimHedc514zMN9u2deuxg8j44u315mvLwyEfXzfxStNDJuQeVjS75ncD6kVGKMCLEw3HstPooxVhmDqkGH33p",
  "key13": "3sxH182nijN8GQKioxKm7UGQ7ECdm4o7AnMvVR9oRbcc9hyemDENrgc2LP5td4LP3goc8Jfv4t3tZNB6dLvNyY4V",
  "key14": "2DLAzxPY9yZmHXFRjew79ZDHWh7SdWkKKHGSiuFEsgM2mMQ2g2ymwj7ogyxE1UkbgZa8jcmQEcAh52DEgzHAx2x",
  "key15": "5NVx6PHujGNKHSnxLiSfoaiLfSMUe55M9URAWYopR3e8K8cbNdAXguGGEq9Dn7rfrj5NCnt1DqSvKu6VM5XoSWbY",
  "key16": "f2aJdcrWM2nX4V8nVqx8benCsjvfK9igQyQZw9jZsmFmdxhoAbTDqiPbisz9C78uuwyUbiM3t6TboDqdMr6PqST",
  "key17": "w2Rwra2psb9Xz6NNoaaRZ9Jq5NHXNGoDmE3xFqoHLNXnoRADKyrdXxDrRR1oEU4qjA7yUPRDE3tWAWBYKqtA5x5",
  "key18": "336rqu3Kh6qqdf5TDChPDBC4tWV8eBeR7imXqR8UzfCE6d9HqbpU89yRVwyVHxZRJfBMrBtXxseHosBHkGxUnhei",
  "key19": "2obGNDyEC1NiV9tgS5nNLQFmV4HoNiZu2xA4EECbeBCtrGpdyJJV6DE9TUfGpWTdBuvMWtfKXx8mqLtCw7WFqR6S",
  "key20": "3arCeqjx2aRpsvv4r2F3tderdCjaLfjf9Ft2wWYYNngg1JApHZ8MnBLzscFQuyybufWHXE3KQ8oPgSSot3xK6gEo",
  "key21": "5W5EhdqQzrExuSEEhzvYrZmKq8VP1PBBhbYsSukJd7BfF2kEVhhDTBoNCWK4MwPNF9UXWG5tAuhu34J1r7duxFuw",
  "key22": "2V2JqbaJQz5dXgqcTM9LMAFbPxpbyNEr955kq38s6u3rncvmzPsTZF8Sy9bMLh4fu6pzwA8gchmjLUEYbWL4K5Bq",
  "key23": "4gSCebnKM6xQbQF9i64gy3a7Pb8Awjvcy3FaiBMF7BbLm5Q8PMpKEyMVi5diDWvnGZdFtc9tHour2rcZE4yQv2nB",
  "key24": "2hrMRTbj5GWW3bxhByebQZuhH7MijPGrBsg2kYpj9WM9hXQ7eTm6e65tGxD7QvMSp7Jx8Qcf3AsEs4kSWaRwNa1m",
  "key25": "4W2S99cvpaKui8np5QyWHNcBYNbtLo3Vn5mGTxowEXt3ufuEccjCYesR7J9ZedSF5SmegksKoXost3n8Ymd4szNe",
  "key26": "5A9MWqMk1q3qkipMfTUYXRekb5uxTovCTKfLnhBRftgHL5ME8Y6pFwUMwBJvRZqtu229A2XTr5M8RhDkqJWZiMYV",
  "key27": "4AugapKRAd6ND8LghjEiVD2Fi1WKMAYytAhSzUB3gK5MCnaUVqbG5L29mLe7jW9ZFn2K9n6ps32iTAodXXWBGsEs",
  "key28": "3xt6XKr73mFPN34xE4f9H18KC5dYKdUPRBQ6GRdJkBtHN9Wj8tSSFieraGzErxGuWJqXps87MFKAaYhgVCTsDF4v",
  "key29": "2tHcYVKvSmU6tB6VQQfoUKVV7buwmBiVxFCaQfZ1zfodkmHaNsbiLiWv55d1Mn7XHu1UJgwotjY1R6yDdH7KYipW",
  "key30": "GZdHqsmMAHRDY3D8DR76ePm9qKRSButcd9kxFd733cacj7WP7AGkvthNxy8FqPV5vJTh3WwC7eHktVdD6QtZzW1",
  "key31": "2Gqh1sixqrptpxEYyrnByQ4hkfhS8tffNytarUAiNtjJdgVifw25Jr9YLZjX4ZZY7KfCuCg4FYtAGqpowrWka1ab",
  "key32": "4CP7K5jo6RXXch1V1aArPLGu1oCPZxwJx82pqSEsVrndDDrz1NwCHJKprAH9vbnoVgSWTXeWebPgp2nDY3pzEpZ1",
  "key33": "5D3DDVcnYFbmx7aRfDohbuHHiKKvMDdtL6o8FAzQEVyhTEcWiymwvDhTqv1cfadWjhXCV2HMWumn23YToXAywk6d",
  "key34": "448LZpWeCvrkDYGWrNNZMiiExZAAnztp5VqRitFu1tXbjoTNZd9anJPJKuYDUUrsXhM7VFEDxTk8whdacVX8YEBZ",
  "key35": "297M9SCDKJ86rd5Z9VGdri6z9sQ1E5k5mgbBSRwuf1Eb5SJ5pysLnQUwJvwictqSdsuBFU9QAebvXm5cLPQBKrXN",
  "key36": "4Fapkdoi885NRm9LjHwMqDu26vFgNh3RBnNgwM65wHZE7z8Kq3JP6QPMAZwr9mWdRU54XaLc7ypJAafpfxfAtZf8",
  "key37": "3ECcx8jD6QLaVNYkRcewtdLyoroy45odcz2qpdG8YLXsvEYUd52NCzrZhEZdGAcMAaUURixr2h4qixoU2nhi2EZe",
  "key38": "51NTTy2UL1TQWmD94rzJkq92FkogNDJA59SwpXnY73vEyKtqcwYnXK3H4gFTSfVAsWuBR9cMRGL1MMHMFkCrnNR5",
  "key39": "4xi3Lt6WDABjSssdARm8uDXi1TsqErEU6ATc7qbSndZuobm4JGYJw6sg3nNXN2nyoRyRVtdzoc7avzPvcSq3tmpt",
  "key40": "3JVF6T7ce8NcXtA9WJmdBTZpptLvJWDWfip2xToaHPsCEnMhQZQgxwVaR3x5SV4VH8yoqjjs2rUqNNAYdRumd1yq"
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
