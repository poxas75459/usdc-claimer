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
    "3jJjZL7qrfmBb5sV4TiLTyizh7xCKhgcLgVSg2WTrndDMirVXz1UUNXvRW1ZDB8zgEfcCLLfrbaHtoSng2YyKnrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EnvZtZ8EDnpHA4jfnB82ttEixoHoh1UWnihdD2YdqjpNRfjfhuvUSqv33goT51EvxVKUuuPgcj2x7dDmVvYcoDG",
  "key1": "5fEeo5CR4Xb8L2dz7pbmCT6s9LAH843vQco5PC2GdbNgdxxpH6ur6rB3HE9VjcqyoxSseCzxxZq1ZVrXb3oPsHuZ",
  "key2": "4aH7ForkdZJfE7ZRaDurFPAoo8MbP29N3NW2VWXFgpdxhFWG7Q3oBsWbuLcv3rbN4TdzPmz9ge4ZL41h5eVzsH55",
  "key3": "3KtnipAj42BaRaqQ6SsaD8Lz8ZTy4PNE1MBtAFvTTBspc4v9UpWHDQGpoyn3ijW6VvrvuQcGK4pZmnAA6vpwf5KC",
  "key4": "3GXWkoWKZVdJzM5xXZioYXpuKWwMmyBzpps1hxJRznRWBJUmTEENzQkXoTJ2eYBQwMhQVqoLNqQECyBKnQ15XYhB",
  "key5": "3Z47q4kmG867jSQhxTThCW4GxfLhuiN7brpbeipfRy8EQNNnhTKCHx7QGrKMnYhjVGdSq5MxDyWDGgk123Lf3MFY",
  "key6": "2USkV34CZuvtKD5iRH9rLihcy9eZoT4YvsvXmhy32FSjKgn9P2TcXDxknmrZ7NTWRaxXMs2377Um3Dp8L9RzHuMW",
  "key7": "2znrbr5y4METLtrvFQ8RR5U2izX6ZGQPRAccyS3rFjjmRey57JzPfxWeSEr9ZWrFQ14LfeSQbFof8F5hv5rREWwh",
  "key8": "4sPJDTSNbFkH1NdsTavRUKSj6qSs81xy4gCXzKgvLFNaG7UoAWtxY5S9ra8P9jxxLkUej3JPMtQYKdB3QFMedWpn",
  "key9": "HhyrJiyBXHjZbWYuBh7DMboGUnW6gHgjoJWrugg8LhNBEDJPS7U7zzXZnVRDp3DtNohvyZRGn1vy8td8ykSC235",
  "key10": "5cJADgwTmb7XBpEPh5DovnU54aCYn6YFLeRTYNk3gRsum9odrJEBHPAgVVmS7EyRZsknhdwuZYVuaBXZgVPsHZXM",
  "key11": "2XL3mtwGFvFUGksiV8BY9hmf5DYarZfBG2pE35oTwQM9RKofym727SDs4cJZXnL1X2rbCDshStPLZ9sFMvEUQ4Y6",
  "key12": "56N9cCuYLdPSNExjPuCtdRoqdiShdmunuy6f482EWjLsqhLyasiS5kAwqRUqz5sPKtL4YtqMQJjEPXw4Uaqi1Pve",
  "key13": "2ri6iQtuAUM5MDgLKeKRi7HY4S7F4ss2r3eU2vGFszWrB2xZuy5aoEqfx9jddbtZwfbAaiStkroy17FtF1zsWKLp",
  "key14": "3vYaE7qpFbRa1PXXPZvATZmYy6qfJcMZ4pwtSEMPkAvSG3em97BDSmu5svQAjjqxBduMgWyBaZSyXXcYXet8ToaM",
  "key15": "5dnnW4o1o2jX8Y4QrHWFtFksRRhYyziyCCCNDSjF82QMRCJuwYrWsEAMPhxdWmPmBpxp1bR6PDuHyzy1eyudSVX8",
  "key16": "4t3iAEXp7BqFPQQvtTmNa3hpTGrJQKeLBPMpErThmWtGZ6ivMfE9rbfTGsgyEzAFdKh2BR6uTPFFSt9AV3V3J1va",
  "key17": "52KTPMd86CKY8R1niMerjuMQwHf2TkLUpNjjpy7mkZMQF8uNBBN68Z7YqSUibhydKeBkZTaZ1pGepC6z6T2wAEsF",
  "key18": "2dgPW2Tz5wrxnu5GWN3bWfnP5E59JEb9otoFMAJphuj7vGM29gGQKx7YPp3v6P9Z67RG59mopffCwe5qn2WC8Qhd",
  "key19": "2xAGGd35vi3mMBFC3xUbFiK7utscDCu28EvLnuwRERCYVxG86cKBgiEs5FptuYwTb9FoEiVTR7DFQBqMu6yVBEKD",
  "key20": "2gdM7HR4NexY4bKAceunV8GivHQuVXfXJviXUehpCZhkyGgMWBSmTnQCYFR7ra4zzhM2SGAevQEsMvo8jzpVHfvT",
  "key21": "4VHnUneZkXtAY4fJWWqaFUtxE2e1scuBBdkkmtNbvgs86TRBVei8zhPGDWVJUx91A78rNJj1aY1RKitdyvRMNkpo",
  "key22": "D1n81g5Nx2qHb9dD2EETq5B1iMxZVqoKPCkAvFXV6uVUA8UXnjyLcywZZcXWcpF5bNAmPRJQVRjR7v626oUnzZP",
  "key23": "5ywVX8TNZfhaPhcEJmqzkj8FxtsVQ8LAgscMmVsherhw9jYjKa8yCoYJrDCcTnHAfEU9wokyDWYeUfYmu68XaxBq",
  "key24": "3myEeE9MqPwM8D9XKSYzNUUvDB5gqohVeTy9DjHhWPjiHW8DzbHzpfVKwV9gMMxHqi48ukNdLdpXGZv7Ecko5g55",
  "key25": "2eZodCzXiBFhL5SvkeZ5Fu5wazUu9NAkbBUYuYVENbje3S1Y5uwVseo4iEzpyRKh6q9Jrr1SKiiSNSgHMyC9PNFa",
  "key26": "2Q3EF1s1Ki5z5pTHuqatDj3QUnB5P6fJyQsL8LrVowNeJZdt8zXSot868LQR3HA5bTdsgzQeeUfAsAdRU4eSKK22",
  "key27": "5NsSR6Ejii5b89H33NY2j1FBTPMB7xLZFm7mP4oR3ttH4ZREzLxAaYZXMFtWHzHfZiaUuQbbsRF2id32xUSBJff1",
  "key28": "2torosh3iRPaS29GqyUL7szCdzRCdYNdgpc3JyghVGPr4HaKTKXEMBKBZ3nRoEwhPzVSk48QVykf6vesD63sHzXe",
  "key29": "3ZqSLphoJ3U2vZNCvjAgfxUDPWigY2jQWkSKXgumhth64MD9cze4TUN6o7awmvHtsdsAhJK1PddMWQbUJ7JNcjDZ",
  "key30": "4u7Zo3pYNH1FnX9uL75SJmcrbuSbDtvWq1tCnMD2LJZmMhbXAG41DvB3KP5f2B949sfcZvvkRrvsSagGVv1tQTB3",
  "key31": "4HTYTGwG7wsNWaU1EoPtH6nJhpitGp612oYixmaBnsebLuTJcjJFNAhTEWJMMyHnKKuKPAueTH7wh116msFHqLPR",
  "key32": "3QXtqzy6SV6u8a7LoeU4me3vs9iJREgFErALksY8BK7UaLnDkZhCeo9VrddfnxPuP1btDYxK9RBgXaZ1ZwKnZNLP",
  "key33": "4k6KmQFnkia5p8q6meGaXSu9wutSJKooRNc44UMRHmRqFFwnRBhPZnmQmG99ea3VQMEp7eDZFHujDohh7ma8P94o",
  "key34": "5KJ61cf9j6uph5CXTRk3HU8NrNLJSvJq1MdRvFDxtYSQXyh4E32duNvRfQwWstvN2p426AdenJuqBnGfCrUi5hjg",
  "key35": "4GUNjZ18qwXgKb7ArJcpgCGjXxepiAdzFJAmXWbFU2cyNR1SjS9keMif9nrQVSWPgtzGrGunEfnEmJjAaA2Hj8oQ",
  "key36": "ZnaMxt1e4M67xsKbbWkzstroFsyZfxXtwhjN8WLfKBgEDG7sEWzSc453L5iGvwL1xZpE3iWpwEjEefpXUwcvLA3",
  "key37": "5qG93X4v44dXY7mN9fkYfnDcKJCdR8PbkrJGiKQhD9J82697Luz6zhKwX5WWK1shDTYnwnBMtkNvitiBMhfXMDjq",
  "key38": "2tAGvnZ1s63pdz4nbePzFHohKeGwphLdKGxfMBRHZ8QyjZHaZk8dHCCCZYZrUuXE69Wgxq6oaEvQagAmSfgSzTeF",
  "key39": "636LqHmSvT4PEWenmyaAyRaZcPf7CpQh1GzjXEQ5YE9qxRaNMo6wH2V61auuh3Gfcxp7MHFrcwiUGxSJMSGytVCG"
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
