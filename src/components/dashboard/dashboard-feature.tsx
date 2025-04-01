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
    "5FaCJTUTTWS69GVpYC2xCFsuiby7Az6E85NJvTgGc9ws3Q8hNJG8jaCs6QyctcCb58PtqbY541kdjC3mbqdDc728"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W3KAGJ6LE6nXzEgFuqFm8b6wwzdyjDkbX5YMdKUhRjEtvYesEa6dVnVwHiJ8AezA4mtfUAhVK3cZLarkFp5VT8T",
  "key1": "24tSLEVsSP1oQ5DYZks647RXrmw4FkavekrMuKsi8xLsPWwFkFLtPz5VWKtS4niDfMvk9HGn2Vuii9ZAo3gECmcs",
  "key2": "5iwWv8u3Px6yCT8NQCfdpTPQTLsKSJJUbkMKaDW35iaPyGbJFxgtbYaepMxAD6cb3DcX9sgxkCj4o7UFLqGF6P4c",
  "key3": "57uZv7gbUhr2yeBGX9aqeYHWkthF1dnHyDfgzXsyMzdwMhrob7fHcRu8YnVrs87LbFGASMUJsuu9T3DMH8Xz62cL",
  "key4": "2hrJ19DGshHutACkBPLD3GmLv7Lu8HTHGpL2Buagf4icfSk6gzL4KHoXbVScqpwxiBrCaeQsHTZ2HxAG1v4gzTwx",
  "key5": "44xQs2evwwUxxaQHuct494ZfiaCZ7cRNJokXDMoRDe3S6ZaV8c5PHwYsHzAyAdyrS69QQLmWpUVh3Lnph5tqQbsy",
  "key6": "5GRkhAe5ASxsNkAqUgq6NUULajmhEno27ais9qntCNVRsXPUWSN59yNFPiphpujfaZCdLSqarYZm4wPpufkaNvwG",
  "key7": "YZZDBvrvA7ULz8g3vJXEYi4akNg8yeniCTSakLcHCyF1z97bJX6xD4cxKjDs4X9uNmy8uq2bVuL7cQiVuKHpdjW",
  "key8": "5SUQzGRFkSaXxxjPKyzutHutRpYZNMbqu1KY6kQM8tmhw317Sm2YvjNgugWqZEYjs5B6qV1XrLU1etKLy3GNGMyu",
  "key9": "2zoihjx7HTzZoKaACtQyWuFpsC1GXC866fhL53rces91SPDvTuKdXmZEtWKAiA3tJBj3EnUapQbx5A8QHjNfSrBq",
  "key10": "33cye3agSZDrRB2H7CZwYUk6BBDBfc41ziGXmLXu39FqLfKuiLL2yFLtyLjtgUW6hbdBCn8KABbJfowrN9qS7tJb",
  "key11": "46tHpx7apNkk1x43rAMtB3jMqod6y7bq1hnfaU6kpuUmLLngqw5zKMogmZUeRYWKwQnVp4MhkdTLkPDuwD7t6J5n",
  "key12": "5n1MBEq2Q5michnMPYhVSsqufin916ojHh6npm21xVNgRepVAYE1KB88jXg7v2rtpLvV4Z3d2MMq8qQoP7nGBY1X",
  "key13": "45pv4CY99XqDfpXcH7jXCgs5rGjiYFWFowFGHmeahaphbAUjnZ6CFHrrGsac8jyvFzEeCPL1p1CLiKKz1TP75Rj9",
  "key14": "5hxy9yphinu8JFh6e1YQWXopPKWLc6Xjp5Gs1vR1vXcoJRmgEsvpJdgTL8FQbNBY59o53CWo7zieYwQgEXo1fTYM",
  "key15": "33sHFKenYzu4ebm7FCAnVZnCdU1EWyDHzPjCF5RoVzvXX1m3FZiifDhvv8qY6SMxJ1Y5BCb5MGU8b4AuitpS4XzL",
  "key16": "3Bmt21PbJcWeYZJTpHYx44arcMVBjD91Q4AcPvH3tFg69S5PWN9L4C6neUqhRS5dNvzSu3XqEmXR5MjET2izq59W",
  "key17": "3WwZuzXU3vLcaQhKXFBdwrcBotktnmqX5zDqMQ1t9DL4DDykseEERGpUb3dwJWcofBrSJRDNcwYHN9en5J5VpC9E",
  "key18": "5fY8hBt3zK7sAu1MJTosYMo8yoyxwnpAKENJSFV9qFm6e6AaZ9PRqyaLyBizDoVnYPkD4ae9xz2LqL4ayfXmvMib",
  "key19": "285YHL9NbPg4koFtc8ZtfP45XKwVUrnrZMyFpBAYD5ir6f7551X6ZHQyAuZvp2gSxrMgweJ2TqMUMsTchNKm9txW",
  "key20": "5aHz8kHiqhWqXaQA2HzbRnCjo2pEtgjPcaZaSCyK2noo43VES6WBGDHdxUdwAbGySBJZkWTcG1XV7pRz9f117UTa",
  "key21": "4DaUCT3Ud3s3WsNM6zTuBKPL778v9XwMBmQzFSRBPZqVZBpL8k29kjehrSUnAmRi1n4StLo6jiu3soL58i9M7nEu",
  "key22": "4UmHU87cPExMB24aj7eGquT5YZ2aiF1pz6J6MwBk6JDAgYq1acaboJEu9P3E17MdA9QM8C7H9y6TahsMueVxA6UM",
  "key23": "2ppuMQTNk8uyHRx3rpHCJFBeYSS9PkWfmLqsjKFAaaiJigqvDkUWd4gNUMi98EQKGHfUo5ErfSVhyRiW1b1AZPYJ",
  "key24": "25Y7zcQvow7dnQoaeSNdN4D4DuKckieJsYHvJf9V5WPsywdXr9Jhq4m1E599TSPtKdHUcXncTXACcQgamJWQfUiF",
  "key25": "79cFr1WUvJSswE78zq5PnQRCYRN5o6X9wB9c9JRozYGJEik3W4nQPMfExaTdBpbDXRJRJVXbarnD9rAEMkGNVhr",
  "key26": "3xD1wWyntwL5KvN6VEaoRaUmB4GJxqiQwKiRBgJADq6zvfsHBtiBZbMqA1rYoPwDUX12UCLJJjykBJ6QMPcxC1by",
  "key27": "3f3PBo6qFnLhkW9jX8p7MUMvQriQ7TbGdXjUa9pcvkDgnuRbQjgic5Qg7QhVNsgVJ8YEc67E8LK48X336CUBzJ1a",
  "key28": "yNwjhVhotLGcmDPa8seaZkhP2aNTyLHoc9FVkpkG1KPy8jz1WTvRY1qK4gEzEJhhwwdXFqGCash8GpqGLZ9nQ5F",
  "key29": "XBtENcJrtLUFx4WSA5Mz5zHVsYqLHuT5XrYNqb1BL4e8L41gbdwmHE3b1z1H8qHmJ2cHuwhadSgxuzpisBPCgq8",
  "key30": "PvMTRwbCM87uMvtdZB72Kfn3oaokChBa9nuGnqCRwwZCFwzy7TCY35JLwJHmV9D5bTYpWkM9Gg55N5SaLtYpWvv",
  "key31": "5EcMmsvCZDvcRXfZucJHS2Up2SXcsEdwdE4FhjNYTUKFtHok5GxnjXoE5ssRTjSUfkqXktKU66ciGv4wuVYY9uf1",
  "key32": "E47jQokURE9DAtxhcf3Zm9UgVLShhJMUg9aTjKVbkJ3mpWWwGzdyCkhhQWZnXJgg5Q56YVtFww9XF4XGaKmYNYR",
  "key33": "2uczk3CWoHByAQcR28qhGGNHTn495RGFXMd6Cxnors3W6fksfBVLqvayynko4j3GvRWchiHWpyv6EnbvswCWXwDB",
  "key34": "24mt3WhEAMfnoMMTHe3PFJMH7uTyBadkFjPeCsUUpdFMUmKTxEEDgm1PwNMdnYMuxp9yYJdpEMou64a6ULVsBcXo",
  "key35": "4aDQJYrcAbtrarkDELnQJ8Rvyd8wmUxXNnzaB1BRyTYdF9SAkgvi7YBNqCYX9aUL3Jh3JdQjk25dzMhZvts6TFxy",
  "key36": "2baYHSYL9nRowNPbY567npuyTmdz69dNAtozsF7atb9RAzaLzstYQwa5QxdThfttpTDcp6NtpkM5KwVHgoxqkp2a"
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
