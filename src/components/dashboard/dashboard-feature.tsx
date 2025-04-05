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
    "4nVuHSKY2ZTaG4mnXhsJhbmZGA5NmnuZyaRMqrciuZZ64hoG4rmDs2KMHPe39oJyrw8x4rQa1cEDVPzCGxbri5eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zKtjiJxxbFuyPawW1GvJNQashegCbEwwux7nHfPWwUvGzZ1JhFmLgp6s52pYGE7s4mbMacwduv7pZsouFJXuUfC",
  "key1": "7DKWPjWprCYTecB4bLZ3kmawg6urfg9cDNHMzby6deLwNZbbafG946cajfRzp5uKmvkWzPgpWMXyXxwGwhsDKsG",
  "key2": "6482ZXCwi34vbKnNsmJXmVpfD1rp7vELx1uGCWxLNxeTnGGVwuxL7Ew9mnEXZRptdxsiyiAJQo78ThGd7cyxR521",
  "key3": "54KuMyKuCtsYforG6STXTWVkSEd51r3Wq94Wwsz7RDh2C41T9fUj7xNzkSoemnMehYZaEJ2bT99iSXbf6URzZ4wN",
  "key4": "oYf52Kr2JERJM7atQwCF1mfuzGxGuEoxsabHw6ng8m8P4nbLWqBvzh2wR6bsrtvddcbFPjhPCpin2CaGtVMKH4w",
  "key5": "4MrjciWfHHtj3cembAAZuNAHG2aTetdSgHibMvmTEgsgzEfD2Py7xfhXu29RP171dMSjxmB6dwB5dRwj73YuiS4G",
  "key6": "Vn7pm39momnZQbALaEj3viKgkMx4kcsNbjnMRbTMKKj63dPNpNmF2oYoiCfnabxDopzV2Eqc7axFjs6G39PWA9S",
  "key7": "5qzi7CNFkLfp2y1WiMJQLUd5QnpQZjSeLSz8w3MhxonQ1DwW236Thph5yCkhgfKVus36U5HcmLYsjKXc5xpxcarw",
  "key8": "4x5YYa1YCTy7hYc47yUmAk1FR2ARoHwFJu72BMBqACF2m2pmJ7rtUf3fSzxzKKXSNGc8TEzoaFXNZHjYE9SQpN1m",
  "key9": "5MPoHNpKgrG4j5wtUwUp3U81QUuHM67TiQPPmBSDsJQSnPwUMGFwGbK7fUwzR47yim9XHnwywBvM1u4xU4Rh7NcE",
  "key10": "64HgJuxd5dD1ko6wZ5yfeKqQbTbyePSoeMycPBQNudXiuYaTNroRj83fJjPbFpy26sbMpZ7QsAyuBPaFM835qaC9",
  "key11": "3HF5x5qJngfgwTeysGiVTTKYq97J5ediVnvURtD96G8kTt1hLak4YHQTtDjVsygbbHiTT8e9Sci4mTyogJwoUhEt",
  "key12": "5KDhbYAGyXP3v6CuBZ863SmYkLgtGgub1ZB7LPGt3c5i5CCUhi9tgYAcKyFZocN9TQimRrBJPP8rqLQJW8t7ucXR",
  "key13": "679VDzWCv8f56RbGd9M2HC3d9kFj7xgRxDFePYTodkHBAQn3SN15PzZWdxLbSxenV1QNHX4W7XbzKhrF89voKhv9",
  "key14": "5Ab388e2aub1VH1guF5cwadWS3Smcp2r1KqWx1Ea9p8XobXGGo8vnhjYBqKvG55jcC9S6HDrc1MEo9v8QhEeZpF6",
  "key15": "5XKcDb7x437fjRZFtf1jWgJrq2nzwSacfQizLTAbMn2vzWcByTaEvvcsr9qNGmst2NCAqa7SNPBFLQqPPizy9324",
  "key16": "63H65Br81fx99TUf46FTKjLzsgZnWGW873tXDX9eMq1wz3YHxic1J6SpeL6Qii97EqddRERLQir4j5d5K4vpf19C",
  "key17": "2cYoAaVh8TvmJYXAn6mtCTyEpjMPRjU4pa6p76vKeXR36nCz4ZEU1onjGLdU3kcBTJ6twmiWkzt5UEDw8EasBoFs",
  "key18": "Da7r8NDe6hq5ZKrTzgk9KNtXC8xtd7E9jpqytQbhyGa4r8ibpEt6UEtBtm2vChkHk4TiA2TctwZCPZGZW4PYFJw",
  "key19": "2krGkM6rFM7GVeCyRWqFMASpjkYBqk5cnH4rpBYAxuvJhkEna1Tpg7wSZaGf45R7NU5qkq3rsz76AK1AMxurMtwb",
  "key20": "2bnRhzmHMgnULN21mdATXF1he7Sp4fGsEUw1dauzmmwA2T8gTQiojMteMWkw5j6RaETfaLv4yn6a8Zx8sgajEC7D",
  "key21": "NYyxR8fggddkcEL7ESkRaFvjZuwereos7BTXTHZWi6Cy7PZ3k7dNEetNBTH1PMmmTnyST8UBbKabi72ZbknPCc6",
  "key22": "4KoKRJdudjuBczEivTt6KrtEE2Gypm2YFdKbL9Xp7xdMi3apa7CsVUah55mdQ6ACtiGxjYyAUcms5GGnENPj1qcV",
  "key23": "3bHiXWVCjwyCRa4BxDEwi8sNFUAxWVK9pJJF5PRqDfC9NiDTjJkKdC2icXeHcnt48ugjMz1WsSXewHkeqdyqUTR3",
  "key24": "2aidtTLPPnzsWgWF8rAs8DJeEmeX4XomAQQhProcndyugFXavnbEyhA9RyYCJ9UJHnukMdjBbUMqikK88aZc3Gap",
  "key25": "66RjcyPdRsny2cvfVTv7BqxJxucVj25qgPoxFhekkNcSe54b34S1FD83c3tLymhmV9zpHDrBKA5ACqeLdN6E3qFL",
  "key26": "5yLH8Tuby11qTbmVtxyEf6LYpyvPQKW4mjsXWpNeHV67njyaunxrLiVichE4qs9Me7QvGkDEsizw2xpaEkJWZjP2",
  "key27": "24kgzahwwa2pYb61pRQkvLMPXNMqSjR5hkqyq5C1eEaiP5vuLmXVDSWRXydE7Ft7THjvNXFHk6CgAbZ9dZNTey3E",
  "key28": "2NE75sdwQw1EonpjinwDvf88MFBPuW7NgenDMt4zTu9RHaeGRY1v6L9NK3LRgcUeo5MYGcMo1pZbuPfAEKCLi4LB",
  "key29": "sty1vYJ67TovrL49yubvLTn49eGszvKGpVvbQ5ZxDCKWHJNgbA3jP5TaCwSBLLk7t2gSBUKs7vVD31bbd6FDBQL",
  "key30": "RkFYLJTzGCy11zmSy4e9x7Ukxt7HmwGVoeicJhUbsFBme4A6NGU2zW7LJD3RdQB6YG2VrBDE6vRPQadFm8Nx6Cu",
  "key31": "2XDzkuvPap3DdErV8vB3JSVcrgJqBbXcCH83VGcFP99EgAeraStUuvS5xoBj4q4hAHvdtV1NfQXLqs1GPSQJPFik",
  "key32": "2Yf1D6SbmVgvw32HcdmgP8yHor41nqxT9qeFPEunqTHfzgH9446GeeQKL1Lr2Z1KT2JWmvQCYC3mxhPhnLbCFSnB",
  "key33": "45tkV8UePn4wBrrYU9KngNzv4gtXsYq8PKGnwLhktxmc9iABMRgnTgCHdYXJLeGnuNfJLUHpivwoceXAoWde9Af6",
  "key34": "53Nmw6ygg1abu7ZNhGqGNYoEXJVR1TAvRH4amFi9oo888UiyYrzJ9tgVJXPETe7iFUH49CN7w64xh75bHDdUkanK"
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
