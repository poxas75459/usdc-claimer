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
    "5uLx8WASNKUWFoA6yHG5fLDR9cyw4zqrxyddAyueQfCsZuyGfZ6k5WYbM7vWZrA5KNwQzY81oP8vfQb2wisGa6Sc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ywVbzdKmEPqNcCqeT8uzajz1xwXFfeqFaiagYoLhRs4gQdd3JH1nLMveqNoLSjsk88PVz4frd7shoLeWfVdYAm",
  "key1": "2Qp7TmvbC26jK84WoN4cb3R4cfqgQbJaDi4sc71MkvgXnb4kKS8TZBpVt7t2fj8q2FX19avVaNM57ZwRxsGVH3Jx",
  "key2": "5ajVztux2MLNz64jJcEUP9skn9vYDMs2LY1Xft7bpCAGVqDyxjPBS1x1Eag7QktrSki8j2D3b3VnRS3BbSRUt7Cx",
  "key3": "4PyxRCvS1YU1dPqvY8AhJ3JcSUp8bTE1b5ZGvMwEzCeNv6Y3GDmSXNYw1pr1qQ5e2qCxbqAtoVidVdVV64jL3iF4",
  "key4": "5rcDdeWNiGdm4mM3uCJn695XzNyHjyTvA14LcyZcd4kR9LRaFg8e1yRRYVNtjrNS1zmPxnGY24ewqqNtRjE2iUE3",
  "key5": "2Y5NmQZyfURfHRXPCYMc9ft4t2afQkzbTfFnGyk7EQbERE3wzUtqxMeyfrJzFCmoPgpkwK1xL7FMiNXDBjovEAJc",
  "key6": "5XFtgbEvhkMduLuPZKTpRsD2CdECu2ntw51hZAN9zDiCpXDKibwNjqBPmdTZCAiysn8h4ja9cMWaKJDFC3z3UqCV",
  "key7": "3BoxMEGovrVdCyX6szMB6TArLHSECCAxbRBqv8H4foJDM1QW9BFKyVuGePZSooWG798HJ9XvxVbCHJBPfTsb8Yn9",
  "key8": "64hia1g3BWGAgVo8ixVecuKaAUE2hqKrWA41s5GEmovD99MB49KvBz19rgRF3yd85G3FMWBEiAXDpGueUgn8qi41",
  "key9": "HTCjLnaMXLAfCcUNzLSGserEXSRp5jRppZ4VYmgnHpwCcoi1JHvm87R9jjT9JuDeJuqTckdTzreegJk4uDojMDA",
  "key10": "3mAkmHMEycHUeLbXUBtDtsr6Sj2jEaUZzLcaxjpEwxnr5EQeQUYhXXby7y4HNeXELWh21rU9bv1DPbU7fxW3wvvP",
  "key11": "5RctCV1GPCJfwFs9c4gXxSJBtocYzVjRB7bzLVKjVJZXfF6DGQzHx8Sw6GssfgZ32Q8B4LChnbaFqsu1J3naDD2b",
  "key12": "21dJy5FkpEwijNpQQcP5nPqN5bLnV1ZX247yzmJ9DhAd9QJnACgAihPKQVWmfNNRKDnkVMzYuwTJphq8gmNjrUxq",
  "key13": "21uMh5R6jReUQKr2HSdoKtidLNYPjQdEuk1MGyiF5ysy9ekQ3JyAzzyx2yfVo6f1pZ4nARoYdS9Ncq4bzqyU5HJ7",
  "key14": "5n7uX4BuGYHahwLJfvrgcFHZN8VerVcTgNPujkwRta1eNsm8Z3kt1tNERYeyD2bSFNVqGxCS8A7dgNvVfWSLAztj",
  "key15": "hpw32rYcDMcrA4dH1NU6P3UVGMKebciB8iakxCkmzdzCPHBhwX44NPpS98Ep7UTguoGMQKC4wkSiavSc5TvGMd2",
  "key16": "3NXjeKrsxNsykBb6gGvbkRiaFXC232QquskgGHEKX6WUbjDnAhQEv8qw7kzapGDeMayCec7jxpazdLF8p3RQ2u4a",
  "key17": "1dhgYrAhd9f8NrmANegBXmi8U7f3drW1S8abjzJgw3geYu1hdu3qjGwyrfVySDSZh3ymV7RCtJjHCxDcpFfuhqW",
  "key18": "45rFq2mMr1qPdvXoNwm3xDMHY91viUE2nxU68izdDT6pDmoTaxqEBcZgPkm38EZTGsKhu2TqzHNrXTL4W9n8NUhF",
  "key19": "4HzcAsub24WTYoYgbRYDMYX8MMxzVCGV6oQwaQbQFQFwE6ajpXLtkEtQugMsdKBpZVRN8zX2Mm1dBdTgXg5SzMZQ",
  "key20": "5P8jVxowHxP19WHJxYiopsoPLSy8G9AVMU7dKdVjLUVWfGRmG7reSZxYR8BPCGLTJNMiSgrs9dbeM4s91X9KYd2Z",
  "key21": "98WXwjjXwJSL99DoKdEqKbA8rppxdexgmmpVbfJRhnXsZzoJqcBNBFSiykpWoQ6gYL2APtBGDiTaYqJtHu9oL7j",
  "key22": "5LnBZR6ZiCuM96V4AfsVgTWjfvqhNbP1mvHzRAibmQZPk5vNTqYbqD5U6aQeqo4XBDVJBMadP8gFVoTwa5NgdBnH",
  "key23": "5t46boRMrA7AgC7U4g4qrgiy28Zy86hKaRuEoTvRb9puW3x4DcvUo1yfGyzNg3UTMsq5AAtars19FZnjM9S8iQMx",
  "key24": "42LXEmmB39af2ZykWDW4cY31rR29ooxPkSpY4pFpyVbrkNg7BePXjD3ZhBqjMMQ4Ua9q43kRZwAt2vzzzyrpbrQc",
  "key25": "3KHXGMxhJc3SFzC7Jaq1oy5EeH84BEba3qRAMRPFoB7JjNuLhQuMavKe4vtmsSzHCiGxPJECSdLoJbhKQhZLQLtR",
  "key26": "3aUDh8aCHA7aMw6PY29VKyZyXbecZegLCgNhv8gYJRKSaBBgGutAFKEiT7rLjcy1UAhCf5EpGJiHNavLKWygcK2m",
  "key27": "5gvwCGZQoz2e1dW22ahDdvadZZbpeDLVEpKK4onhY8rCCoPUa8yrqFdd63mLekF5TGZprKmEmrnFoGwLmMSYbSwE",
  "key28": "21ceAXe9MkjLZdTFkKCtXNydvYqBexfYtCsXtTxQLvA1rBNUD8prrv2uf7zWQiB1xRs1726GFcMAvZHQLLLMRAh6",
  "key29": "5tUadGsVZuNpC1Ee5HAAKj6x4afuSzxdQSfGg5Da7YaR9KYtuQ9QYSW75Epe6QzHvhpUCZT1viMtm5Z1rxzgB9YF",
  "key30": "5gK3JUEx9HXFWL45Ct6dR4Wfh8p3Hb14Q3GEWyEuHbp9ALwr4dxN5EgPvsucYnDAKEUcWr23MqXULQ4Zq2XRJH7Q",
  "key31": "3NqDLPczsr2SEvtR4wreXNfXWvsZqJAYDV3HkFD7JnRYAnnoAkThAagEEbdUB2qHNmBN7kCEfn5VQL9N7XpTm4h9",
  "key32": "5xVPNTE1NjBKHf1eRq3YMJxLXzafByS6KrutTB3DyWWRwgrRDzwQJVeziXN4A91hhMeYiPxAjv76Vkt6E9dYE9NA",
  "key33": "5Ersi3GEPDuLEUwn4JZLeAXWmw5ax8XMCtWfB2iDTnr9RWPvDgR5a9xCDSqRjQbaZHWxwJPKxFQ3j3oxb2KMjDBB",
  "key34": "5uGExaHRGnJJSZUjsPGHrxyyaUpxE71rrTfD6Au2Boc5QNuYyDMmtgJpaaYtNVgsohm7VLTGGAuc3NAcWWYWv9G6",
  "key35": "4LwfGHLBLX7REuMuVMypcqFNUYbuHPWTys3MBFdkfA6ZnhuxKmoqdV4qedvrQDvwFzGm2Jf3AUEPK4EbcrDp8KBe",
  "key36": "A5SeA1vJ9EaB7wDXszMtYneBQn7X7ucij5icQKK6Frxurm68PDcXKikVXXCfTScPr1EUQy2uAmoN5DMJzkaxF9Q",
  "key37": "24ZaLu4QC7Cc1phrPSmM9UXCopRc54wtPTqLRcHUhBVfYX4qhWcnmyu76UCnb9Hv7oVoENuFNyrX73zgzcytf8vh",
  "key38": "494GvaFyV1M8gTqnNfxsCUhUpfJnGr4f1U9sxHsM29VCpg6PC4zbCyH4RSYcVKeTwz3qcdN44YorLT7iTpG3ECEw",
  "key39": "4Ge9VwkddQHDNx7skpKiTvh19x2UhwmTPwTcXe3cdr6eNgdijbvmrnn8aEqwdazee5j9q1szR9oAwMAoJBkM1WhK",
  "key40": "46Cjo1HQiPfBjpvz9Gha1x6GLLFxzkSt3TohVV1KFr9t7TTdch86Uyk92jmAg5wwCTbiBFsE4fEHEA7uymt45KxS",
  "key41": "3nEEpsQHk4ZrCoRz9vMPDCSjWKob4qFLxYQKpAaVCUvKCPWsgpu84726gcYmmhRqPVg9yWDaMqYZHM5WVoYZcEsB",
  "key42": "NZPjZNLL9RTqJQupNo1SsABto2TSB7VKXBFquVphziNCHFNERhZKe3zqxVgczaY5ePmesPVjYu2NV4KDxxffHkt",
  "key43": "4GM61Bv7zDcBEGmrBZUYmYfYv1M3oEuniTNJUde4uVeqakyEvxvFNGXjGCrAg2opSKyNqbVH9DCNAyRW52MB5RjV"
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
