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
    "2fp2XLHypR5SLJ5ow4sXikPQ35wwg36ibVSBxyqxCbpAyxJAVDdu1746TkJrt82xyLtGkoBmnAi7zvayVNpBA7rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bT9bAPe6fPRprJPvQAahESbjvaN4P6d9LZAqF37NaC121mxuYF1JsdBqxbfCadHvVq4ZtKpqYL1NrRgQj431NCh",
  "key1": "5sB8zNAHsxyK1325USR7SkAd8WpNCkN8PvKJAoyJNPse1kc4wjySzhgyjqHVJTZyK8tFHaQY9rqvu2sX5UtocC1z",
  "key2": "2onqYify4Zt64QBWigC8zyCyK9VYyER8SwfwLQFoeFBLGQrNeFs8ZxgYvKodhdTgSHfvhKsnBQ1ebeoga1WbDFNg",
  "key3": "5cnHc5A1aXPvnUAya3uaV8fWsggya9yUpcwRV9j3cYg8gobZ1fRNVX81fuZ62WNYMiYegP5ckVKjA61axdqHm4qg",
  "key4": "3djy8ZugTZHbqyeFSHUoeAuVk1FbR2M5b22Y5LLafoRBcBpZ4AqtYGLTeY5CL4LA7dTB8eAvChjgkKSkckHtf9QJ",
  "key5": "h14Y2cGE6zRUbHrmvgFiT3rmMxwqfePm9FgghUDTeDjbNFPcTDh9R9BJPNta1SuGCbgny2PFEttKbZhJq1Gdw6o",
  "key6": "5yoCDSd5kVSenUWWTKEkVSe6umu8tAkLWq6dAcZCkggwaetKpsM4rUgcDi22c4pbdzPNJqgfuLjNL7DrCL5L6uXc",
  "key7": "3V3UThQfFDSfwxNn94dyVjNahwsCcbQh1mWu8oQoK7GRT88YTDZV24F1PfkPRY7qNju9c591jSJPKPQCC5K26RkZ",
  "key8": "rzZLpp1gMELTfZDwLZ5AM5cni5suW9XPjAj9FKa5SFPvc9m632PpSKcQvESAujkNpLttEKzuxiURAnt4HzSA9kP",
  "key9": "2mgr6cpdNuG6En4iJmYsV4U7xhanCj2zroxbE1HbNMcAuogqoedFJHiWbCdVfcGPsAPFkjSxcJofUpDBgmXRQoWt",
  "key10": "5SLz4ay9YKYVXYWrg1HFhzoSHskwj5yf3buv5cEFGexAQjcA3codm8i8xMHrKyuxFSvQUygRA9UG6488wwVhLW73",
  "key11": "4ZSe2ZZQJnat6bT5pwNQSGWuGS21yeBJdwWGrsksBTygej2bk7MwtVHDYYUNjVe5DeTLyzoLWV9LnPyDvrzoqhYB",
  "key12": "4PSNeu1uhDrF8xYRKW2UF7YHNAKs18e9CGHs5B9DA2DQBCeH44f9FkmUvoVaZKhbeB6viPC6LFmbqgB14AMf7frM",
  "key13": "29RTqBSFWCcSSQec7CcUyHza8zEzBERmhAwBVKenBwBw4SUcSbo2YEXhj3izbnPytRdhviLhizyBetFsDddF3jCe",
  "key14": "5FrFSomkbKwzm94xsbae2f4bK1pk1TUGpijhNeiveFriXRP5w7iNotcUAiuhKcPEcUapZ7zuyNwqcuPwPmkeNFp9",
  "key15": "GKA7YsTjzXze2BYPq8xMfnFgDuAdLvjLRUW8mnwDiGLZBXT8WgZfBaBUchVcfR95vN1mYbG5infK5yj4NzUzhVX",
  "key16": "4YybpV2NtGBTc3ToThPmWsj1rci9RJdg4fr8cjxb5LgDqwtpRGSaiqboijG4sk4g5S2NHb1pB6jDitKPJfkC8Udb",
  "key17": "4UEDPLg4mrguFueA2kb39WKbKwut7usbr9Dm2WGRWVu6FdgSVZkNzPRBgGh3Arb9QvnuJHn4UX5qUct6pB26Gk6h",
  "key18": "5oM8sSoTPfpWTTGt7ksbFqTuCPP53JwaWNoFZmcqZccUTGiNmdNutonaTXwKv4pLYas1hg5hAgWkX77Q2GYiuZsa",
  "key19": "wYYKVeiPQcXJ8BSgFJnyrZeVs1a4GTEYRkq8TFu6ETnymYD3NfUYvtCy6sBgGB1szwjzJnbbsEc3tPVb7d5ioiF",
  "key20": "2DGiCREt8TKQejiyMDC3MF41bogYKVJGNyAacvxUtvYUgNNBpg6CXs1CPMRDaUiZZUwqBK4Zv4qVdg9AeKSXSY38",
  "key21": "Dj4Ah2dx5Pdoaj6SRQxDJmn3BvVHnbEiLJaQWjtBuviGzCd9mczd1Xp4L6B31gvFxs2LGTUU9h1QiS8jb5hZgL8",
  "key22": "4TKPkdfwswQJYNk4kjev3zNuCybcHYNJRbcuM4KZkPmDU8S4uFA5hJc8x2oVTrWHw41pVQvmnv3CnnbM6rH14uSd",
  "key23": "6MpYEyo9UHPtPfchqsXP61GYNUq8vgcE2VhvhJBxZ2qQM4MbAhXP9m3EF1mL5p5nKez3LSpJLU8QWpp8QALDFGa",
  "key24": "3fyt51ULrWWQ7P2s5ZwgnoiK2zPM5jhfBKVRmQu8DPLFLVUe7H6rMqjDE3j1qvR5dT8XyAcdB8ruirzmHBkpx3z2",
  "key25": "4m9oYehRXn7fi7AzNYNanKddZhPRPQkgmeGyVnXnyyMdvyWbebSXWTpLd9nPL4PtrJQYEsvT1u3MFKpbQghf9SpC",
  "key26": "2F1wMw6xDsFF84MrJ5HpGrt8zM1Q5xJG9HMJ6cGoPSP71dTFQjXEBfHdyu2cAm7u3sHzSwywP22NgHKVQmcRWdx4",
  "key27": "4RoFNGi39toFvF1EaaGACfc71SLgkw1BHNLcXFAe8YHTqXs14aHsDjERz94kAuwoY2SwXuC63TAqwGB8FGhsuUwP",
  "key28": "5pNYtmDFWwr9benvSkZQfziKCWKTXimaGLj5DQqkJhRzofx2mkVNBFBeBjeE8hAmtBCDGy1scJDZ3chmTAEe3zFi",
  "key29": "3pLDn5Km7EjMX4FYBcFTfom2qdgd7dLxuDPkcPduS8NEkEoRFkvJ1kZP2bL1XPuBApTBoNQxFG4MwABEy48VBdWR",
  "key30": "3g46USfRf5P6dzcVrWMi7fUpy4FTArVDcPoTm3J9heT5LatEr9AWcp3W6kr2rZ2biJH7NjW4pPBeS3Uvm9d8GyDq",
  "key31": "3F4WHy7F4fhpN5f3WH5kwPa98wvWKVW7R3qyKnPVegnhN1CupVimJoT6Wh2NS6imr6RFqS9FyN8bRY6Pewuvj3CR",
  "key32": "2goYoQiiZSbqf7MPVCtkG9AdFE4nhi9P8KCcGQQkD5AMhcDL4TcgFijP5MCdruANjB6kaANTWFZRobXLkKyMHSWM",
  "key33": "etHC7bfSCbQvDWFk4zNuYipqhJ2Jq4p9VXbtSVVRo3obpttYUTDP5jMtv89Z9DofRyv682AW1xNPTcNX4gpd4DP"
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
