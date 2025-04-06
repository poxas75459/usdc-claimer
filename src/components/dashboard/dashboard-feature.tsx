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
    "2aPnwoz2K18xG9s8D3xMyoLuB4tPzy6X4ZR2J5P2Msr7nUj7Z15sg85RB2FrjsmJLzSJ9A3CbgkN3js6MtyuXRrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B2zcpSeuy2iAU7189hTW3ZU1E42cmejt2h6Wx8M3sQvmxb4RRw4paHi4emUeGpv1kuTEBCLQsftZRtEi9ZvaWiM",
  "key1": "3QoDQXVWhpFxhGcexpV3xj8ycKTwbeiF1aFrBbUS12Y3qwiZtz1T8nXxi5YjhYRtpYDYig34XZHREKmrSXLE18GF",
  "key2": "52jjVyFV28NNXj2ixd6SW6L4aZfLgohJQx2H4WpBngBCjGZuHjyF4Z4XuUsK1MRhXCiREpQCDzRYER5VDqL52xfR",
  "key3": "ptLjs2xWSJC5ncTGgWZ1WSzcjpzsNS58taF11P8aQRvQg66W2tLrxVJrUfanMHb4PyKGBiDNMi5YB99p5jhE1EN",
  "key4": "4WY4LaTdcXA92G2mnz15kH2hACpCwNCYd5V43Nrr2gv4zhtmNZ8CAZ4F3kVu6s7FpVfJDhQowxXZEbEC7p1zSJ1U",
  "key5": "3q46zYnmvYkmdHnUgGxtrwyZDfJrww9uEX4H8m3K7LdoWfAkJxD6zzanDQWgoszA41DRh2gnaM1HANkcs631RhuZ",
  "key6": "65eyP7ou1wMTYgHd6QTLfxj59VbSmgrgniK24pzrSAM48FbDGNNQ8RRk5YsTSVY5Pzvsf36uKynoMsmgFdkru5kb",
  "key7": "A57qDyPHyehvczHdr6NKhHhQzNVo33SNNQ5j9gwBKKmYDfvccMyiqUS8E4xdrPymBfnpLnJb7KspWWE6jbPZUop",
  "key8": "2gfoEQ95y7t53A3rQkmE6bGyDjSKHjTLgmsZUPRK8bJvFEtUTPjVWCbMsPJ2NrJ27ds98JMM6QYKqEAL2D7soL42",
  "key9": "zJjt82GUtqtTLEASGEnRaG8nvULY9KquU8kPxqQJwvmxtemEpWGXPqHwHuGVVjuNKNrCYDHZvaLSyXzPcwFuo2c",
  "key10": "4PHYUzZjUSyyz1xqko8LuhQyUfVkNo5iN4ZcPsobc8f5p13YcoDqT188SM2HHsMdT5DXDVM5zVGwiarSUKx4FfKP",
  "key11": "2hXn8rfcTuSkWKgHfhxjqHnVPYLSzBsYfyiK6NCybFgYio5A4KEcDBgaB4TYN5yAhE8KCSJ6iHZdjPf4DLSyBeMV",
  "key12": "46DgWyS9m3HH8BRzRwHnqHWKKmGSATcummmTAkVpGX36r9Uhykra6uUGpqPvMSCGbcQpZ9qUj2usmT3Qb3XEwLAx",
  "key13": "jZFLZWxZvM4Eqchp2ZjUjV9hEKC4GzX6ukQUEvynoJhRTDdxoXTg4VmbzKcFhnYaBmgr45Z5N8GLtuqHSD33EZ8",
  "key14": "qMnXzx2jbYMPbFDum1hznVtobEc2bkTYXrqi4Gi9aazi2ncxfoUMSwtk2bY8vSxdzvaciEPBovFLznPJiwDRvqU",
  "key15": "2fxnPAavsRuG6AkX74DpXbSkFZz6F7heGt1c5Fo4ZbViukGZFcauJwLswGcgkC9qT4pKfiecRo5KQqUbBMdkKjPf",
  "key16": "54XGMRM5qkE5rV1rAMBpr9w9VffoeEoRxGf8b7FoEAnjCPD7NbtTF4gnk22K6LZwAyQmK7tDfsu4kQ8VgGrjRMVH",
  "key17": "4inPxErF3JAm5AQRoiLpc5DqqoyfCXwripqD4MBAJ5eMFCyCJyQD31LpPi8zC5WWjGBLaUYycNSgYNSi6t41Z6oT",
  "key18": "KT6hxWvys7s5TGurudXDRDB2PnXQmpwhFGmQ6PUcyjsS744kkob7V2eTaGwNGebijy2PS1eAphy4F64nqtwYF6k",
  "key19": "4HnZ6m9mCrvD7EaNXHd4BB8AYC3N5zAmGbjhZQ7WBLGRGe3doNnHovDfvB5UyGQGaX9FdoS6eUr4ba9NqqeKDNKB",
  "key20": "5ztFqoF3GcynPHcKu1AXCtWVTmR6eTT5QG1DvjCMsT4fuDSXcxiRHwgY2qqUgPi9vavqHphFHN6MHheej2ejRqm2",
  "key21": "2iRoKKMGtZ9VGUkCMWDfRn9rBnPeK4SYQ6BNd6dVEypziSTHrRx68sG2V4g6wmW6DSHjUZ9L1pqKKjiuiETfyvxB",
  "key22": "679DimRGuPzndrpoQp6s55ufPLvtJkqE2G4WXXBkrBwhh3To66qon5pVvkV8ezYuYG2zA8cMECcCwiRR6eziJ7Ka",
  "key23": "qkyMSU3tFwddeF5FUtr4D3vwcwurEbBgFNnm9DcDTKiq9CwLmvszEbSomMueWREzRuvJntm19FSb3bvsT8q4XQq",
  "key24": "44ftZ8e8bk9kTDG3wB5Eva8UnsDrHQtfpnEtUoqyAyreJhTopHZgtRaqa8ubvteHovfXCiCVHu2LQwkgKY2yzCxZ",
  "key25": "3C8wF8bCQ4hE73NjZirPB9znucCbV9zrYb7DBLH5rhCVwnumzoox9E3jqHLxEnnTSovob1FXJUGTQX3r51Muuytt",
  "key26": "pn51KWeVY74JBJEUTUyFQTk4uXBfDw2QSdsfkyr54uoLED9uMmF3TXZ2KpVyFXyAnWg7ntEXCvPn4sKQiUcuR1p",
  "key27": "4hDEHV1DVuV4anwXq1mPRm8kEEdG3KXAy3cmZc5r6LdW4wHqmFb1P4yZbMFpKLYTXRo16rrtAMSanYHmZbYxvgW1",
  "key28": "eCR9z7FYSmF2NXueWhAUnnKb8WVS6pdXhkLARhenHtrV1LotkBhyQhXRXfF31dBpHAdWDBHUsGvCQptebqSfLCz",
  "key29": "5mmu9NCc8q8dAkojobiC3SZ8hwa8WuQdgxSCdaXUUGrkCYMyzVuestGvhBgpENDkTGutWKuSZqv7yKqUGuWeaHvL",
  "key30": "2j92ak1pSUL9Y35vg7qUkrYb48C2QLTwAtuRFuaKpxwEMCep11sQuDR6b94mNAtmxDEyvicikA1uaAk1aRnHF1s5",
  "key31": "5j8GEAma1fq6UKXNmbD4o9MEbjw4tZR9euwPtZRvXwB7CKPhtyAYXvKh5C1YAEy75yXJth2auVjw8M3R2xEpqAjt",
  "key32": "cdjL3DroTh8Ju3hTqiTKfFW8oJahxkdHS2GMEZNgxFHUTqhi6axkQaBvsZ7aBq14imxKQYLhpSazH8ft6cB53wt"
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
