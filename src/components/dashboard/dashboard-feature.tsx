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
    "5jVNeuutbuv8VbfkkgfW8gsTtrPZf9TshpJD2v5WiZoh99ntedN6kcRW4Nm2ZAqhFECqRpzkej4FDHzMv4tBcRPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33sZwaV43RXUt2EtQxCnfMYpSVKS6H6g3LuvEte2LeLoztvXzs5N65kYgd5p4eS23RB9yToqAo8abRtoBZ55jpHY",
  "key1": "63nzWRAxUhQWidMFNvQWsRzm5PPx4pVqec1JjKSBKtR2SmGNcbWjq9kCuHrQaSF4dNkp5DNPGtw7MGQjEBDHNjXE",
  "key2": "zvQ93yueYLoUioDTDVBWaZ2EUpuxQV5AnBW6hW3HaUHCryVNAGq7mtHT29BqojNx9jEps6eSFTYfrwZmPTo3FyE",
  "key3": "3A24NLyVJGR8reoQQFSsjSYrGMPY5xzbUE3gFZFs5Px6MNuys7hYNf9bS8BXVRRSTEwjTWZqiFQnw5odBofyGqhx",
  "key4": "3x4hcidfM9SnQc6K675bkBDxecKtnn17dDNEs6e6i7bqMpuc4koZjGvYGAHTb8CUr63nkTMudkSVi9NjTx9hh1Nu",
  "key5": "35YuLv4wMKjadfo8mYwou64SzyfZyWtqVH5MwbfRxfqhkv94HDB3AZrqq8v1pSes1QDQjBDbk5RzwnvaCgtkh63D",
  "key6": "5KS83BnkqQLLFJuyMqW6n9nfyTj5Z5H99ri1LkchJsNE56sJZZaHZiktkKGVYinkGGkX3VnzJ2c2WA9uo1YZPGtx",
  "key7": "yA15m1LTccTTAQtm1sT84rG9HAdYrJy3xh5dBCrcXNg6Khg82WC9NuAwLoN9GTWHfepAEtGoPRua1HZh4yGsH7G",
  "key8": "2hrWwZMVq7dWWC5ZomN23pqj6bjGFdvyc4wi3XpbCkZEzX9aRyF8jbuAuvpwCr6DT1ghceoDRNMSKapqGkM9taig",
  "key9": "5iDsduofiWPd4SVXBRJVZjLmsPh1hL9qgnKpxYK3vqEuY55KFttsDkEGSu67WXCkGTB3wz5d4HCwvkVcBmzRQXYC",
  "key10": "58PQhuW87TaQ3nCWmJHov1ahzx3WvctR5VgMA6UucJhPQeQnW9DdKmRxUGA9NPGQ8aCgjDZLCaGeLVCkEYnbetmr",
  "key11": "61VMPe6EQC1tADrUgNvRr9wb9T61YVdEuRbcj9fadWmif4hvoEi3pDnKBYUSj57FXZtu9ppZYSDqrxqp8jzDB8JE",
  "key12": "8qNiTjuUyP56W9W9VitPBKB1oaBDaoZr43DXypMzgY7tkYiomQYfJLBFqmTmP8jQqPku4GKNKMPg2wbBn3hSBRw",
  "key13": "3kRDHWNcyBQtjGAizqBwBNwsnnijVxzUvm2VHDBtKLLKd6ReD9ZfYpZGhcG4sLHRKYRpRAAkqU13ACLqAgTzApu7",
  "key14": "HQ8NGBv4A3Ndg6DSDuXM1aRBrNBFFRYmYCqMyHmvtHXVpETx3b2wTQyusmyTBkzYbBVLpHVU2ciJEU8NbFXn2kU",
  "key15": "3yqbk2j5kusNT5xuvAqs5emEAgAsX8H3ton1fVB2kZFMpS4BEfmr2t3ESKPiyzgRkYpXrF5uPhp2VEGkFHaazTaZ",
  "key16": "5RpcAvZErujYhha4BMtw7vZxg4RkL9HT2XegUVh6kgvnUpmCvQip5PW2cSBsByH9q54KLfnUaiVh3mVeChyEDHjS",
  "key17": "4KxkAwhSwhmh2JkVFDC65bWP9nrW7H5bue6VYVNpoDZPX5dTyrYLr1C9BKk9xQENLD6JUk117hVZFitYvQt9zGL7",
  "key18": "2MUfdPTR79KveEtH6VfWdefhMspgXWHmRhqnWmrn4CvWYStSbUMxcEYRp172bWUCtvgcMTSJMLosKCX7Yp9tvnHj",
  "key19": "2CbHEFzgJzt8eP9gkexMyfENPchcwDbxB2nnG44bhkYfXaVWPwXosEMY22XrsJSHfMVHEW6fXVX99o6AyGAT8YNM",
  "key20": "4oxL7T3gpwtkZDR5Q46XavQres4YR6irUvz4QsCwaHgaVbh2zQ4YKzg3kxcWno4UQgRQnCqxJEmZZL5ccsdGT2vR",
  "key21": "44A4dtCYWQq2kQHgF9XymqKSE48qExf9AwzrJr7qmcEozWTSpuqspNyKuCixCmDPHVJkZvqFvAMmYRUQBA4iKpSR",
  "key22": "5NQRnc3ZM1BqxiAM2EJuWW4q98WAbrFrihFR6tXxHJP3newJaNEeV3MCmhcM3kZWvEd7z9y1czMXtQhG9KrFhtLk",
  "key23": "3mmxc9G2YWUe3tXrLpHcCvZvWn2BBtaVJgSnrh4cGRbGRyPyBJhVq2VGHii2H5tbUhZJgwqF3tfugLCJyskBdPp4",
  "key24": "4gy24rrfEr7bHZ7aC5P5zGPizjHfo73B8gFjdGmU4DEK9E75roPvB9EfBtoYch2o9SUMbGREyJZJbVj9sEK57kgw",
  "key25": "4k3WWZC7sRwPycPPTAsD2njcCLx4SPEoZfMYtqSg6zwZeYpTzhakaW1U5NVLpRy5DiGMouKajM4TBPpzPUBQJynV",
  "key26": "2WECWqC2HDwDTuSHyKEq39GM55XSz73KVsXf4nDc5oziHopV1VNtsYhUxJm55gxkZqcrB2K5KPmC4s6HhNPkKG5G",
  "key27": "3bf933xG5F9MDSjLkV6Yicytz6o5rjSD92sd7wYpycfhRitd9AZSQUUU5rDUXKAgwkuvp9Cgyf9sXmrNQBS7V8VX",
  "key28": "2fD3J7fa3Q7wJdPSBPrvs3w9ots5tFtCScNdV6oujYQaa9x3sSpYHoepH88J5ARMHoHCSUwE7uT6RC5TsPtxeyyD",
  "key29": "3pM7Vni6paKFvNUiSo7qihKr7ro1wFf79sEcdwtxEUhwwmHiHsjzX92c6eryYcfqUXXDVSBV6dFDacUCeUDMrQ81",
  "key30": "2XZKxZZJG35y4FqgYcgZ6tLWSHEDYK8Zmirk1GdDNtBmpQLb11XQHdNBqh5tjuspPqLTZNyHsuW8STKAhcn5FCuc",
  "key31": "3ui3j7WnaWpun3b5TLrTs78vTFjfw9MPdFfys124eo8Bmzx17yCdLtRowS3m7MxTWK7Fjk5PZ4fq6TJQ5c9VkNw5",
  "key32": "33utSWPQpP8TTy4YLNoyrqBb47fC14r7pxvVQTGNmEqRUmXrJFH2MedmQLFwd54zhst8KWB2ZSwkc1DmD5Dmr2hp",
  "key33": "qNcgt5npQBheA8FyXoipQcFxvhFRRFqRcwpf1bGrJBy3nitD8Eoroo72XPvAQGexGqbRuJrNKD3oYQ3waXAJbms",
  "key34": "3ai5ikz3cn1cPC3TdzNYZxy3HAKbbFupeB6hifbb8TUPXAaSEiBdyFKtMFaTDNnYoTAcGS85phVK54RyC9qRL6LN",
  "key35": "27YAzuzH2515WA7ovBeXsD3BdqZMPQvwnkz6MSHV2RM1Evso2ehssooKcR2fTFk9dib6cMd6B1U5MmG48Czfeg9c",
  "key36": "5AhTM9EC3bdaixYqZ9MRPv7Q3eqS61qAFJk5SFWw2P8fiBkLiQg4JzBjdn6TjVhae3ace5ropoDWk1xThK81Tr8m",
  "key37": "5uZRJQ7rx2qxHXREXuPuNhsciyVEMLBhPW3XbceMgqbkqzZkXtVvpv2dYnhvwQp9z7D2B1ZR27h2yhTs11Twr6Ss",
  "key38": "KKVxYZAyi49vRgGCedJfbaMnjYzEL3J6u5TKF96mjJCgobKq4de5tQsEYaGpuRovWvBMSx6vhe4H9S2N9duPXLc",
  "key39": "55FfZTsiANDWH2HaVZsmgzSLtzZ4vdvZgNy6DoAd2T8GyJAcR2GjiVZitYU7rzPfAfMPYrhGPhU6GhfaCWHs3sUF",
  "key40": "2h4qKzGGcCCtvoacwT5EbEnvbusxPz5DQ5gxFHzobUUXPaexqbL5ZvqwxhSj6dCWi6VGV3TB6dgVDiBNWWsfNajy",
  "key41": "9sRxNAKqEpG8HjrNmNedNuhpTMXxL7KZWUdhoYgRtQ1mE9sijFRUWTmDp4Q1gH1obwz72kSzm6D1PnRfyLnj1Si",
  "key42": "5ssK8EJWfWxS25D2KunrNjGyiMsHSsg1J7cQMT8vnYGS9sVevUAqHc5CJxDgveV6DQ5LCQCv8TN7KdURwFsz82rC",
  "key43": "26Wf2f5fZCKGpxyCkY4CKWGwBwKhNFJ51xMrU9rypV1CGgCrJWX3ms2wdSFcR9ukNZ4M9rv6xjTpQz9rU93roxdD",
  "key44": "39f7E17XR2pXUJYXdZKQLoTjBYpq2V2XzjVLUx8cK4vTeNfuXaCTD8ehMABDyF6sNqnrVnw4Cufjvb3dWVEsNQB6"
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
