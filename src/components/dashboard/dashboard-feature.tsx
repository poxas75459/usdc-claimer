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
    "66iimtcVn75cHTjGZremWEPFEyyiE1WbmHjqV8ExmoJe7s8fwUjsNLyhsjFYNMCEXRNtgqvm366UHUJYzjctKc7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cNixKz2VMZWkZDiUwMdao3ieCJLPHhBkw9A7WVUcakiBDmRBjzSwuJsxJZdDvNsPQoUvMskC2mTugV5jan6FXCb",
  "key1": "5GAucrRUb85xHy1de3UcZ4UU9S1G461Yv5vqiQhEt3Giwp2LrThiVQ85iZ1VUWCcc51SZ9kxkz9CtYr1aJDMiQee",
  "key2": "5jptzmnH3FrJgSZXMXuQDqcQgBC3hzz6dcv22f6v8ALLC8ZripuUThMKbQV7Zka9HpF4E2LGbY8iURAnuEiNM6Y2",
  "key3": "2FfmPmEjNoKjqbQJeychbMCscMpogyEzShuzc5QitfNH8NiQmrKdvz7MQatSg3jqFX49xPZLSPbbZR1dh8Cz7QHX",
  "key4": "mF9V7XxoFrJHuiXQgQTsB9QaM5WKk7nHUKCA21iHoiEvKg2yEuvjwZ184LKV8FHRL5LtNVHjuUsdpbdHFsxKV5W",
  "key5": "2Fzos3vX5jpTxXHCbJi4VzbcJaLtQjhZZwvDj4JVaVogPnLtrYqyVELvuiqg8V6ZJV9hcNoybHASRkesRvZL9Hcf",
  "key6": "4MjyFgHdodWNNVsmyEGf3rmQAxvbmf6E252TiaW2frFdNaHoRCAeUjFrymsygVWCxCBQtLB7d2NikdipMECXzYEq",
  "key7": "124mtJN1VsgfdQFGGePioZNjW573Li9yPYhQbpFY6RaCPcCGQWCc2XrRgFMno7fFaiEHxUQ7CgK3L6H6SkTBPYHA",
  "key8": "GBo4e4hiHPbW6VQZpYXcWJCL5PfoA6tqqtFG5vjoaqfW7YVe6itXaQSYZi19cPjNNKYFpLZRBJv1AwASH8L3YtA",
  "key9": "3ZXPFPfYB3VMnF2VXqx6y8WJ6m7miT9F7QCKiryt5u5BFirwqbu1Qz8vFsLw4mLyMaPkF2et1axudNi935U9RukQ",
  "key10": "5evHomZpvaWxVQTkgYmLxXzqPTH7Kjee2B6yR6MAfA8GbPBo4rrM421KY36LfFGz5674akVBw1pvBeTtb4d138UC",
  "key11": "5XBauEceZDY1YnvJXYr7SEDTniigVqb3kjAdsBCF9RPmwLm1eo3h6Qq7XSPS2GvoYHkMhipqSLYzi8NrxBrBaxE2",
  "key12": "2jv1gh3HXRiK34vTWEkGaLwXVY3hppdwj5LpRU8KHNJcXngYKg6qk9Au4oLQfk7XgNQdasb1FQk4VX1afXpQkhH2",
  "key13": "44Y1YGPj6RR2oqBP2ZzpXL7y69fEszcf8HCHsHe2M6RSKFE2mjHzBGY4dcvUauq8RDTkjGFwCrSRJDhQKs3Hg1ZR",
  "key14": "sVGdZfWRggxUD7pABsVBXD2HG9dQnwbrR8panZnd5SYtBfPBtc3vBJQgNyf2HiV4ne8HqFbTC7UsFbCmAwTaVNt",
  "key15": "48BfBpUdVxxiDf8UENDrFC9ZE4596pw3US9LmkBhLpNqjui5NqCHG1mgkyjiD9zdvSyNdxVfvWgTAddK74wSztVo",
  "key16": "b7EqWuTtD3Vhb4C5xXBWucSA2iyjaXZkDkkhEAE1UXq5e3q51pjsEeG3eedcpZWDLiRPVvxBezbLUtLFhiA5KFQ",
  "key17": "5jF9TLFfaTt4N9EZ18jfB8UAHGNDb7qMUoiqqkhrQ49PVs7X7TSXfeweWnofnYYy9rX9yNWic4KMfbmvJq6G9pUt",
  "key18": "28Z2qkBv416vyrodHRJnX7rDGyPSUfCQ54FYJVSGxmnnKGeJxYx9xfji1ca7QgyXhtwkhgqTkTgQDH8ckHdgjZ3p",
  "key19": "3PTGuLqzdeBYv1BanHN2LAMbjDiQ3rYpieccijqYcpE2rHvwsKq2BRVmyK4A35ziYZeY3iXEJuBwQ6vpfxKwvgcn",
  "key20": "5pxPvqdrzzEyvNLsSirRtNbX9dHnL8C5gS4Yzr8ijwfzDHNK1koVmBCZ1kLTDpbtgK6gB71BtkrnobRbSgkbgYuM",
  "key21": "31xY5BPLGLwY5TdntR1Jt7T8dHScFqtUmHuBWcWqMa4Ahc9BC9TGZHhN4JMJz3iRywRV3p26nnN2GpiuBF42UX8Y",
  "key22": "48dvTLw1nwH3cLr6nTwtmdFRkp3bSV33hXZnnt6y9mn61icjYR2TnHbZYwepiPhCg1HCAe99LsEXjiNHuZPq2Ajw",
  "key23": "4HkqimR4E8B68j268noHjQ1sdThdXobWRipLwQk9eGuSMKEVfsMeNrYPfWCCTfzSf6NnwfzdCuApXE1Dt5kzmbyX",
  "key24": "UKtMUPQrhC57jrWibLHPUVQxVsZW7GpN2pWDvM2ChrDVz924Gc9LT9AmdewgUjoqQGKX2eC9KXD6ppEKvcMfojx",
  "key25": "2mmVTQru634BABHyunorGTHuEwAHhiWZy8i68a2L8cD36aAKtN1VYCVmiitcbYsyCV7NyrPSSCYE1rHpmKyLu2os",
  "key26": "vUZNJRhxiPSnfsAAPQrMz35MRr6WyuiLyKWV7AV3S62j47XJwTd3kSXdZLpXxepgoA868kXDGky7P62LMJ2H4Vy",
  "key27": "4DEYAxaJ4wHyi6dNLCbkTjKBLct4RSw8xebPJwbpdcxMaRdkAcQj4XhyPNJzUAktpUVbsKuE3bacRWTsoe89sK1t",
  "key28": "4MSXs8HLo8YLWw83swZ85Vh42DcnWLS8H9bhm12dtQyQ5MEjNqRGNJXnYZzri9RzvDV2fj3U6Qx6GD9g9sgEyEfo",
  "key29": "47vi8CFt8iaot4fVpo2DyXWj5XAPtkHfMuAmPXLpE3QqQY5jhSWxBEsK2KnjssvkmsM38XTB4Zb7mV2FoAVVvSvm",
  "key30": "2tueHXuSaRyuxs9518zgykANG4WSxFYiw2xDwqU1LgDT9HSqQGysAxFX8LNYjqFMtk6gaUqjDXaL76DazVFgm5V3",
  "key31": "3QusmntHb7HPxhrPa6odAt7LHPBTGgM5EPPiF3c42s8AnjGDQrdQiWGxCrAih5J1uXFvm5n4LJMfNnt1pVLA2Gu6",
  "key32": "48tQ7bexBF9dRQroeeweWTGg47A9uLZC9JwFo1am9Gdf3B5Babu5qzQvxnWmyGwSEKqHrZx95oJvSAso3rR4cb6U",
  "key33": "46eLjB4HyNL2QCcCxVeaASnzNa42CUfUtYW1CeoxFs5iSdWuMb1U56ipMvDRVcrsJW9dN7iLLjiQ9dr493grzUau",
  "key34": "5bfZgjRmAGSRvHj2WpgAcjbbEQLUDxH25QvPUXXkwuPvBWjAPTxrHQAwicnkjmsD6YPh118m8sCzzJQLq4h3mq3L",
  "key35": "2zPJZrwoerE61C5SnFw35ZCNEjczfHbgYBqKjv4MJami2u2Fzgdoy15W3nCT4vJMqwVK7iACXgmyajNH2SaSuRH8",
  "key36": "2sDBKBeWXQibiZbpyyXkzmT6tbW235fmDfuMZPhvhVP12TBdA9VTQhtZtBRRndcm2mNQH9837zerK1YvQ4vQY5BW",
  "key37": "E3ZfWkWEqL2rvzZ566qnRoPCFHqrNNvMFtL9pg46MJudbqCgmBLz8GExy222WTc8dfzV8oSUh2vnKLyhyPDNzec",
  "key38": "2uZXnYWQKG6ZSWtFWu7DV7yi1fyDsA4Q9eZ9t7NkbKZguLmo53yTJCkNg5tkDgNkdPYwZk9SkM4EqssLFySVw2AW",
  "key39": "46bEL8gVPR9GGNQbcAKkwGDVJedLjHqvnqwWbLzrpqLzY5z9LvRBxd9LFPJhqKiMQBdcSxpsTSsqMGtr97xHPoKq"
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
