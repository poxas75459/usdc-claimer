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
    "2aeRFCHdaSajEsYjjJ3QCABo4bwJwcnjurzJM6WR9oGxzhMH2MVFy5R6xsYS8jb3mgcvFsEsfyk4EELJYTvkptMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62WrjJgxFD8ueBZPRhbEsdF5H4nAmXgmHiMQxFeFnoiYEreJr8hsGVb9ShQ6TNBqWZenkW75kefrjoE1LYevxBdj",
  "key1": "39AsPSwnEttf2FjmBgubbihavuaGoABWQHRYundYpss87HexCum4VXXdyuPvejf1qh9G8ptptU5p36HUqbfs9wZB",
  "key2": "4NKeNw8aH7zggaJYybiUoqkT9zx7NrYoSyqZP6esmNWBe2wedpi6hnUE4KN74UDpFh6gBaWCsrHXShERDhkBHtmY",
  "key3": "4iZ7M2omyAGc1oLEJZnyE5HgJ7RYRBgcjqHy4G3gctLQ261ApgxVjUy6pxsfTaxFv1EZhcqzdQkwitxxbZ9dSDCv",
  "key4": "632NsxJRascPoCFkD8MrtXRLYf5QqMha3MbSa89SkrCfJkv7aChPuvXGDdGpyZaWzZ2n38tUCZmN2h16E3mFPgK3",
  "key5": "5JCdbRQifV2gUgPpVJKEP1oB3uMttHVs5yLmnX3R74i95aJuz45NH47Gp81W6xPkBT4M5JGJLnf7k5hCgnJwi9Au",
  "key6": "3oCsfqnCJUih9h4635zi1LcoTY1rSHt1dR7PAU5isbWtGTe61kph89YtG8ni8wxTN2AC9pn7E7Zdc68EoxjeB9D7",
  "key7": "4MmWat8krvAU65G3tsHUetd4Bp5tKdfwV65ut5axejSuqVZFeTRBiJgkxFr3SEAh2N1LhQekoewQE9ioP7jeHXPY",
  "key8": "21BFEN5VYja87tvXJ3CKmdUEY7TWyv9eUFUVySEf2uie7Y6fGtSWpDnkfqYP842YADTwfL5tFtSCCH8TMWkiAmjS",
  "key9": "3WppaXxMEWrFtDAorNWCZiU4d3jLuiHdcMuoeBvYxJhp3x1g2R9UM26ggk8Rwv9Qu7wNrvdfqXyz6nc4uoAz2Ucq",
  "key10": "4BDAfYF7osErqvrd1JvArRJ9MaXXeTWNBM7aHHMjuyXUQpCYWYyj3q1X59p6zH8JfGKQveyzDQLspim9UZ6ngnpg",
  "key11": "4g1ENSTuAiZbJ5v7LYGah5EFDfNsYXcUDzzBEe1Dsm8LgrWqwTLtcQCUbuXM9sWEhKCLHgZVfzg7PoujD9QwKnmQ",
  "key12": "5A599ihctFQxPSe4sYCzLkQiQRu4H8pwtauUg7Y9GnTaf4r1mi1gGasagufBJeNQd5M6yJUXDPCM77NhWkRbndUq",
  "key13": "2PMGxd5x6DtrEFamCJbSfquhHogX6htyAYkxGdu2b9wVKFnC1smAZ5XafdLyCb7ZMa3pFxCUJ8x1p61reVVZ8osp",
  "key14": "hA3bbkdZDAfMbfU2KeKygVwUHucTfhmFgjwS9nCvtpnx5Epu9F45kfxnAb9aLrGjnqAs6zrbY6ynUyjJuCvTsFo",
  "key15": "2HAhK4Fq9v8AzLaM4txjVfUf93XWwnnaVeCnbha7pYap8Gm2VSQeYXzAhbXd2i24ghZUdpt8FenbPpLAMCU4iM5d",
  "key16": "3pCMFP374HhuqKw6g9qhKLdqmXqvcJMpNA6r1i72UrJdsvYL21w9SxYfzvJF5wMUFjThGDsEufLEbjDqG18mGigF",
  "key17": "2TmRR6qUKfBE3vjDbyMaey7m7fSH6yHDa1e9EHZSFtMHinf6FgRdg6rA4SWybPwrYzG15fpzMamnSspugckrHR1p",
  "key18": "5n868hQXNghnFE6NPer3YYKSZ7fhpvpAuBJd8QNmwyNFFtawiaKMHTyz2pnwHdpwUYD2fZa5M3gwQDjqxgpZWRA",
  "key19": "2BA7iFVXicAbExcV2cSB5FvAtifEcywoPRZETEoQQ4gWm6kQ5aoRBUxB5DTWRRUyq2gwudH6nqiyDZWfs25MEnvy",
  "key20": "Df5ijPvdridNGEc6nWvVMvMzhuuQNrQMFvp8EnMfHMzKZVrtAT76qABXLtznBt7W9GZrvCLEwiTXGjGWq8g2Rya",
  "key21": "4zXhZsZ8TbR5AFtppqMbpZf1LRMM2YxjgQJoqDC2t7eKADRwZfzskF2DP3oKiErpWmLF9NNhJ5ec9z6mZK4PHi9b",
  "key22": "4qRgGSmsHK7i99FggEMGGXNbxpzmyHyEoZqqji13qZBYqc9EkWdxkKqyED9sunyu3Jefmp92HWEd29BX6emuW4XT",
  "key23": "UeRQyChgUpuZP67wZeUBTuw9oZKRVb6X27TKaTJ2ZpZEFjG5j8D6dRfdgjb1Wtsk3ZEZz28aak574X9NnCRocyk",
  "key24": "5P3U94uNRTdQo2gcGaaNTbU4sM1WGpkX7dUn5oBnPwjsB6SR2Fex2EGAdG93bgdGwVPfGKsxkaZvZjQ99U2WeDbB",
  "key25": "5i5whsFsLPhs3DasG5t4Bmh8DLq3XwDEaAzqRhjw8uET3ThjSTpmWKrunotGeAJCuRrcqVbUmnnCEW31RnWvpqP5",
  "key26": "66xdvHQmD59vZ9EvbodEo2sxTJLNhwKsvHH4BjBDTNcAPPCXo1G1qVhjpBkEcCKdup8H9J4fAXk4vzXEsLDq7Bbg"
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
