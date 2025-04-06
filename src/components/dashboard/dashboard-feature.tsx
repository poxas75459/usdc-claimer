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
    "53zKtH6mSfcwovjzpqhmc9Syg1dKbS1ctZBxyneakcnQfJ983xhKKpmXx9L2JKWwNiPpJpByJ7sXAamKMMnCf8mP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eta4RhuN2qBrwsmWbqjKhQYg22GzX55LtB7tqNzS9v7efMLvZ9DJaYoR8z17bGMrvsR3WNA2dz6SddpgQj962M3",
  "key1": "4LPdepC8c6j6sCvGNWt1m1YWsCcfDtMTatp2p8FfLiFTcacaMcoubRVHFST1M6nsZFTLDRwR1JpTjJE96w7JDLxj",
  "key2": "4JN1ZNqsA29KVR4CzqkDdJinPNvuYPn7iup6YS9CtSF8oDZncxtNEVsn7NZBbC5XmsecakDxpU1HCuPTriZn714M",
  "key3": "2sS5uk6nmQ32tKwArzvHrM1eLT3tg8Xj7HLHW7qssDYsie4r25XoaYAaXQQqA79wUad88cttc1c7AW5to5STToNQ",
  "key4": "2iNxcAZxyuaRWksmTTmzqMrpyUkaoLTknzkhQACSfMyYCQxqqQhvtuEjxSVxRWWVA5yoLWcRCRg7UNHNkqN1dHYL",
  "key5": "2WbibpPJXrgdGvTHzkGNhYt22uHUgXKEXGEFftGqhYggxMitGLpQzAxXKYwaQAdB5Qc9rXMXhuTxAY5wh5HtLCPj",
  "key6": "28iALDLXQ58jQnYTxi7uTAbechDdAETAJYjbyb6snhmxgJevA47uoR3foG3nu2do3aB31vhy3HcdiFf1Dv2Cncbx",
  "key7": "4DriRoK4mqjVrui34AqepvB17QhUeZYQYb55gmB8twHNXUXwg6kS1GbMs4JYupwvUqEdtVhTJrrc9m8mVFggPa4D",
  "key8": "3YLpHQmPor3WsCbPd29VeECLgMqZ3xhaG3TT9oD96nGXvXVUq6WxCHRg47WERcGwVPJ3WyEQEy77GZfMmMBCnG92",
  "key9": "5QqfkBx6ZxQTVwWF4gSM82TFUTKKVV5ed2b4z4WxdXp4i1LKpVzwsbkSurh5CZp34eushmoRrVCqqg8ojBVFS6pq",
  "key10": "2xr8gF9xZjF8sRgM2THyh4a2r5cqxNHhfBFgdmSrdjpqenGPbTm7DCKCb6B4EW2bar4BRGwBCNYVGkBJEE3zn28z",
  "key11": "3DfwWgLsZVWz8iPyYLjwuRVJhs4doisiQkQEghLy4sobqa9W7WUkn2pLV92MVdiQ3VFka2hMfCK6hrbEFrx8CAaD",
  "key12": "QKYzfRC8XEAsbwCVEB512zJHGmW3pUVDzn7rxuJFQ5rYd5F6VADeDC7uWV7MSgPi3CZHo4unZDZ42YpqjA4Bgud",
  "key13": "4zsK31wNAsdiySZXCciU3EvhMp1JXAyqbDRReEPiE84VyKnQQ4LjLghbuUVAvn46Y55xzpHye8PwjochkgRY56go",
  "key14": "47VSjhsUh3vpnGuh7ppGNbuUDrMeqB4N1hVUvuztcafPPowoBqZGQ4KX7hHPSzYZPPEcWvPNH7Dn2EoMpL6Xatwz",
  "key15": "5yKo1NT97coe2Vcq7mRqQTdouuUQUq7j3aKRvfXxNBYWpZjvTyES2SJ25c7UHMBfBeUSzFkS2691kHZmBUXNkMaX",
  "key16": "5VGhGHBp3k2weddrXhSaw1tYyTQMQEYHCEK6N163r64BQsX4yXmCRouJctNSu9DkWUUVyQrUUX71cHUozbz1iqjy",
  "key17": "5afkttPXVWiGB7qVPd3DzUJGZYWdzkUXkfbo5s5Tm6NNxsvyXHWzgj4km5QcpmfrJfNMF1KGFfDrwisaBtusrp1n",
  "key18": "5L4aCtJx4LX3Z6qAxmwfqcVumXyBuWiKbRm9Vx9d5RhzrzjsqiB4R2J4tRT6LuB2qUV4gJmCiMoDPDprCBzEXeGe",
  "key19": "5wRWE5Djmd5pkZxvLQFedUPRn33fPXnidjkaZVb4SozbVaC6ZUXWB6EokdGPtHi4Uy3ThPDDvLXgAetF6eNEaNtm",
  "key20": "5W225MEFXk8hzUdcH1EVms2B4JirJCJmEi2c7dVvX3FC68TQRWKgWTPYUbu6gbFSVLkzXSk8aitNmcdcKJiuR8Sb",
  "key21": "4ubU24r3euVdT5xwhgBgXmVvMwynPpAhsGuRn5R1NHhmnXnxKzoWFPJNSMhoWqAAhhAD7XLPhZ4EAVT587czjbhX",
  "key22": "5aDFCxYN8VGTUEKddya7oTbXJm4CpuJy2ZDfk7gUhGR5yad1io7B3xXdp16f8F66b46ikWSmnrtmZgjPsnbWJDVL",
  "key23": "MBMnGZDgXDxNz73XF1UKmqau2HnAFuP9iVZ6XL35UXLavMa1pKLW7igQ4P93s6UEhpVify3URs47k6QnQex7Niy",
  "key24": "5KGk5qbayhyzKvC4fZLtzddmS42JGG5FkX3DaYKVEencgpgjbaTDpxz1aTdt22VuacUaRHYtyTr7csGgdS7KXjv6",
  "key25": "4TZbHMu6D1ZndYDyUzZTM6NkvV2TWkp2Fk5rtv3tymkNPeAQrBLWya1xrb9jUmZnmkVkUGiEtXJPzdD7MxtY5pN9",
  "key26": "2nYA7enEbq8wFgUJvaXatXUcCAgPiA3r6KJyzgoV1Ag1N1sKTM1PbrvYq9B3zw7fqPFxRSmRUx9c6Z7rMuXGVkKJ",
  "key27": "3Fd243eHcpKVBpRMWXWWipZ7jQUajhc3YJMrBRwkEGCu9aGonKJ16fsQ7wQPzHTczTK51NhvrSBHJUEMC2qXJxzQ",
  "key28": "4f8VHAJmC8XqySn67arTsjpz8oe12MjysF4kwLvtiVtA7th12fAEJdc1aNWYWx46ZNCWeQA3CyDjo7eTpotMtMYs",
  "key29": "5JJ3EpEVBFpjUPDwzUPnZJLXt4iQVUfb4nTgc2xXaEF7GBJpXK2VsncszEZ8VvQ45zvHPqgFjEAfs8CWyuphSTxc",
  "key30": "4NBA7WeYmiDJaJtMeWgbivnEYztHUBpy7VqXqbLaS9txqaf64NTqWmXeui23h1ekR1dUE9tb4Rc9skyTwTP7TGJK",
  "key31": "3vKh35gggWXDqkscZtDpQAy3zpj39cddv1poR2aR3EEQ9VaWk3DcG5tXfkSZWiewwV5x8nX8qukjhCf9iYHeBbBx",
  "key32": "29PFCkCFqNdBh7rCffwKxhA67EgtYb9Zi6eSFgyWm1xDuKFb1jtb53D9Wmpi5S4Mr4z5ngJB56gTQcAykoF8Gbzv",
  "key33": "n1kyBbkRUh46fq5cWFEEtv9yMoNs2sXRQzjJGFv1UapfQes75jS8JM52a3ystiVTY7817ZV5ZNcaLtUyWimDKhe",
  "key34": "3HGH66Miyji198iB29NvaGHPdgiZ4JPEvQzqonQBheoeynMkx14w4M4wTPHDHtaCoAq8Pcu76asYb1ZVbc19gFv7",
  "key35": "3cpd7vyeTvvBdkhiBBeQXD8GEzheHWe7vQhidbCE1saiJKGy3Dv6rgxyu6iNxXH5cXtYFU1hX11E45EvDXnZKYuh",
  "key36": "4TubXt2tJUpMWR8X3rGfhXuEqEKQ631HK7TMbTuCMzQDrSHZKCU47eWFxto7vLF7jWp2uPLQwtABwFMyZaEgNZfM",
  "key37": "2pFHqEQDFAgb17z7Zai7EDF1CLcBjcxMKJSpVEvgZTefyeZx6M21hdU5Ztx4F5yejTTKzPNhLAYAAmoQzyEXsTgc"
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
