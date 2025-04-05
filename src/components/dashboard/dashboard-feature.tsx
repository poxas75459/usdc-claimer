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
    "9cZHiUfjhFfxF3npYByDzs6Dp89BLHgBBWuzmNdHEiepvFhWDCWQTgEfwzXyBsSfZwtyexrUvQTS24pDnmNo2dE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DL7VpABa9qHUHT3u7UpQndGf3dtvL4dphSwpyk2oN9aTQiauFL63K57zRpjAumk7QNfUD4ExNrYKxgC21PwPdxQ",
  "key1": "s3cZ9yxZW1Edaxrj1NCvM7Xe9C2wxxmNGupqUZcKqHWH3EZAihPZo8x2Fj5zu1GkmqV3uLj6spVehvK5MBDLAeg",
  "key2": "4NFutPpGcDX2MPzqAhDDDwRDTZLuQhnyPyYWJWNmufami8eARUGoReM4WtzB4fWdkFS4ZZUfpBKCBi2nXGkZRmXM",
  "key3": "35xnNGTrwCYdKotVZAcE56iLZoMyRkXqc7mjgfYoZ8G76skikS8ALwMwTZV5QJU38Tv3Bt8S2Yery9KgVEicaaLR",
  "key4": "5vzYVMQBFrQsbCekqLjwiW1Qyc14Ho641XKgEh5SFqnpNPuU5nkfPrUnZRU2NtaGtpGGzqtFUJskTGQjWvSko2dG",
  "key5": "5hiHv2Kz9KgjUZPrVvAmTc1zEenhSLbFefvWuMkWtkXMWMMzuZrtpUcaq1W4fw8EsJsgCzPakSByJWQRVCisBAmc",
  "key6": "49qSY5zpkkLq6Q6PctcNSPU2f5zw8zwJuznaf2DxfDqkSHh84QtdmDFeow14G5mU7QQeWkSAmsGn6NDQphJTKgKD",
  "key7": "2oqgFmaU5L2ayuFyvrGieipzDAwfUgng9zkt79dJsBMxzpdE2EEKLazU4gqWR5Kk6o8Eqm2zssub6seTkD9sDeZi",
  "key8": "2Z1oNV2qvDyG8mohSaxBC3aP9KeXqNNpVFEpiPMeKgrXsLDxHu6Bi5QHCsD9xbtLvPKjowq8udxdXfnwVBKp5hDG",
  "key9": "3XxAprjGup71vfA2AUTXqadNZ9t6FtXLUm5tUbiJZx7P3B6CdiXEMXAWj5FcfxBBUjbvhnrNVHSpkWCCTRgCRvqh",
  "key10": "4xuwyL3fwYowFNXaTet5W3fGtiuT2rciphHMwBiaWFWpwxucYmKwGd5LAzPksBjh8M8DDkGoDoaHfC2eyQfpEroK",
  "key11": "37rZGTxT132mFumWm6b7mUAe2rR8jtt2JbP7mrqUW3cFjLC4NTafr3WAhpf9NYjKsXK39SQVT1GG6sNvVHEVr4JR",
  "key12": "2PNhsE3cHwnik74pU8FTyw6h8JAuhaA4cFLE5BJ3a1nfokK8dyYzHTZeZCXHYEerP79eAZWbX7n1nkhfNxsLEZ8j",
  "key13": "4RPrFZUdn7JJeoYCmhqF73q4YmTZsFXuUavVed6M16PmD38s41BxUeH4Wp8E1kzrjDbhW6NGx37YD1odYYxwAb7B",
  "key14": "26mu3BGitGdaj385ExefTjpJedZF3cykcBnaJqmEoni1meNV3PXhcYp8xWB6pMt5Db8wwPmk1gs2JDGzDTah3ynh",
  "key15": "3b12688u8EMG2gNEqf3JL5DUpPBTqwinLtKjRzhNSMmYXtTBEGfKMKZFQBUFnsxXfpSHoThiCVugLnx7edWYR2N1",
  "key16": "5hXGrbddE7KKVUmjfy1qN8RN1XnyRxJFxqCNe9oByH45DGxym6ixBs1VvexCTEhU3WDAaTmT5e3quDHGLxRopP5B",
  "key17": "3DyqSgrrZNkLTzXRpRjtkLrxenTgemsdj7w2YbNqde838QLoouQXEwiV7y4FZDHAseHJv2yatV2ZWTdurHPcpQNn",
  "key18": "hprBsjjHeMWGjQSZDZ2zhWEs1eNPEMbRxiKHUvjPtGK1gpg6HqvVsySfAFHafTwPib3z9zDvCa6DNuYeLynTGgn",
  "key19": "5ZTvLBdLJ2qCH4KCht21FWWBvRHWrHDLFk7sYTi9vxwEUVdF5PLFFaGyuKKj1cntLchdh8WRVuuudbwQgFw9Dbsh",
  "key20": "3yjfDP83DGGJvj7VjjFVLusa2znVwY9rJghQH8FPXJe49ByFjvwRAJ5L1wf2g8cKwtrNhTAnnP7RPV5gQqfRt3q4",
  "key21": "2fxuBZqQakT6E3KBi5gXpiHv9cKRDFhVcgXaBFZSz9zJvSb1jJaGPZCdeEzeG4aCX6sJ22z7JbNenahmkhd7fzrA",
  "key22": "4M62TsXAcoYymEoEvhV3zMc4wXZsiaoJwFK1xpGPSS7cwW3KbLpoHpCtxaQa8LzzZTK3ZP4rUAoGU3G8W73Cqkzr",
  "key23": "27rxzwbLtoNomJipRynqG8op2BGTkSqY8J6m26TFkuyNCcpwrqikoG5bTjdQt5HJHch4wJyKJoVPBsQPsBgASrPd",
  "key24": "3xhDgqT2334hvEkYYgaUZE6gmXk6QxVjDCBQDjqQA4fEzaW3PRSpoDp1ag3k3Pa38jFT8GR1mNdPzA8QsEjtw87S",
  "key25": "5cW1h5bYbaoKU9x1jKxUizsTjvG3CeiWvJ29qYFvfcdrbFfcjLdEXiHuVujNjYwNUsMxWwS64dxrE8zkETJb9L65",
  "key26": "54uvHfuYo1Bsi1KQApnW95KU5oENWesMygB24AdytKV8UyYLsJu3E5Y9wuLaLF8QDbFXjok4XBWhobLVupSc1gA6",
  "key27": "61xEQ5fom12EC23YyeRSrUd3ZJ31fnAnpPMmX4ZthBUW4vPHpVL5Q8khiaS12eTrEnpLzN9t8ekUxEZbJEQdW1yS",
  "key28": "3ChZWoC3PJRLfVTJ5yzBu6QsCcLENvrmWjrXXLruNNK29xZ7A3ci4rWWg23vT6ruqktUiKqQZdUzDzjeLokkaAPF",
  "key29": "2t2BvqtCQVDqe6sBJmiWUzFoMPFGjPZTjwj4qFWRbYA51UnW95sYcQLrNqae6osnHjY1XiyoRxwZEcxapRZ6UuLn",
  "key30": "25PkHopfuXjD7pwHzpzqQ31nEPM6o2vF4iBXETYzGVb14dNFHZeaNuMzvPMMo7c6jDn4vVCCCBoRPiWAsonFbca3",
  "key31": "3LcLrhSQZYCCk3WHpNbcBUnZmXuTYB15cifQFv7JyQ4Fcow7rTB7PTfed39Mw3QQyYJ1xG3rL4cFbkE7Rk7RXBTK",
  "key32": "3HaLe7oTuXRk31DPLM6KNnp2pQnLZa9Wb43qugzm1ShVAqEMnF3GdbYVqgPZ2QmM8qi2Yf9WAX17tmSiNEYnAPth",
  "key33": "3xK7MCQMaYHo1RXKon9tEeJgmJXFzJYGKQbYHboZocmui9tGXKmPEZVzPrLX9xi2VNsC35rrZGAGE7xZi3LyzYPN",
  "key34": "5oyu5XNXvi5NJTd5ms3GvoLD2zWGUyNwC4ELefRVHVV8qs3U14BrofRX9Mu1uRg5pUoR8j6hfMBRxoc3DdCjmSaQ",
  "key35": "3Visx3hmLjpQnuNeD3kZFx29q5qKhL7cFiwo32PDqDSSXNjPSR1vqnV89PHe7DU6WFuRAvnhHEqnKnET3CTXScjC",
  "key36": "2NbYWj4T1QYWMRQqwxnbGov3gTSj5NP7AjVxzFEzgxBgvEhqjjoLtvRtdnkp5jhyZqyvaU9YQfRMvsz3ZM2c3K8B",
  "key37": "RrBqnWhURFVMTG8poyPGHeupQq4cUfndwL3LiXuT2wKKbA68Rj7sBv3y2jzhikUJkSzw3s3xUbvDzJBU7Bbg125",
  "key38": "2m2xcFGzTdAqfPKgio3QJU5S6yXKXVBjkytnoMHMheXmoYbSva3LpLYghzoQgEgbGhKuQu8vgbQugxgwGsFtVJTp"
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
