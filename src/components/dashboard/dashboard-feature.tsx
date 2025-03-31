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
    "2UC9oh8JtbjDisVF5G1ZotwxfXPXgPKszNZ7NSyXJ4geoRRkzT4DmGvhjMS1XbTDijXoVFSAN5LdrXAUrYsFCFPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JpueVUzybqhTh4qR38PZyCuhEAeYDpZ6AFVXGbtxrqycp9LoLA8vCtEqKHtGMBhJbqFCuWkZywKTv8kd9e8Vb8V",
  "key1": "XNuKmWynJ6oquYfBfJX1XY3w9hALnnbdJ4a8xP5HMBM3ZuMVV3UGeQ94eVh1YS4Y2pZaxLxcywwpWtRqK8ijzmJ",
  "key2": "5N2PkJHxYnoxxzyHMnXcXvM7W9gm8unK335WR17BJCEb2K6zmBQJ1VovFZnBVnj7qc41t5XYQZazMCWUxXf7TAyT",
  "key3": "qdqAvkgoxE8W9MiNU92HNkq7giPfg97Z4pxugviPptj4ijhGGFxB82bRJ8btCjtmKaB7soEFAbbT5zgJUBoztFF",
  "key4": "4qUjdJmc7m98Fr7EPerhrijCinqh8Lxd7rzjB1Y9BXMCFvfXQJyZ88FruTYMnQwCteVnUJF3gcmfaaU8EVdpyHK4",
  "key5": "7guVXmox9S8mc6AUKbJ4xgh8wq8b3ScTPaTLdUxUmRQT9EQnRtZadhktLBw3WzwQiVQsCnZ8d9hmvZwGD6LK1ip",
  "key6": "4pzjfXboQxw9gwCc6DHs73EsNfrk8JoEHYvNqnjGTCHfLdLg2WBwaBVYAtU7ToLJSYYwJUvR74Mpn87xfeK6hoit",
  "key7": "3yms2bzyymYDEHwJnBocF9YExTvq6dYta9Kf3rjfxACsMC6FjggUL7DmCaDWifmL6d7PtBDgVFLBFsoRrDfJpak3",
  "key8": "2zQpp1BGBmQNBbnMMyW1Bp6VYosKdM6HPNPQsA3HKU3i4BukzAezQA9SwahmwU8tTaxFRY8YJdXw46CuEXDDpmpd",
  "key9": "2wtJATLyH2DyFpqGf2FodSq8t62rW8TeQ4DA6McZMCZVLurXTpLp8TvMgieZp635vvRB8kW1XMduEmmzd8Mpqqtt",
  "key10": "5t7pzfdJd31HmLaCTkbvHriRW5D7sC2zH88Vi5ZEQMuj59iwoA3BjUJgfNcNDzJ5GUUgT3nXZvH7QJbjSUx5DeaQ",
  "key11": "ivGyihKVJneW4FuQFtHoGxNE2MKbsdNtMEXzqWgj1Fin1FEdEEPoMf17aLJG11NwdDCz6JF1NDzp3TipvSanZnA",
  "key12": "tpcEQ1SUyWeMYyZwHeNzKssW7dsUvsvkMCGiG4eqdweBnm5AM6W6rh6hKcD1UQcjSQ4mhqhJ7LDb1wA4U2kKvCH",
  "key13": "u4wWCndDSQfSjTpfhJMhpmxGGBC9HNtxtqn7HiSiqmJjKrUz4Hgqpy7TdwnabZsT76R2CRp8KRL5duPu8UDxPrB",
  "key14": "41C6RfaMqbAjyeWY7NVM9jnepMRgSDLj8eBWk2WzFh67Dc2bexaX3wUiD8iw87iz1inLD8gDQMiythBQhT55kW4r",
  "key15": "2Fxxd9E22cUC7tKmdFP2hwBvsJus1mL9WyuNwBL84Xf9WtP5yV47kjVVPuQ8nEKruCQtm4tJmQkg7iGeJzatk2nJ",
  "key16": "3GC786G5tfFi1Rt3QvV5AYeKm5X1ibBVQfwCRJRHPSgvYHQxJHDDP6x4ZPiKvAU9G5YrS4Sr4AD34ypUQzcN2VoL",
  "key17": "2SG9XAK2NsoNeg4rjUPXf3yjqCFDHgq79xVaL6F9whTuFE2L8JsawATYM588T8yfz7ejqgnPQyXF3LiPdjyvj5bE",
  "key18": "d3LrcgFabXFTe4HxyekKDkeMqX7hXo4p1eW1BFi1rg3fxUHS3UzuZHBB93rhsXHm3eNxNroeGLaBMWr1Patrvhi",
  "key19": "aHt88Z8XiBrk2Y8wnwLjX79wGYxMM1b7cuSGVcFX9YfZnZ7SdiWD6h3xFffKUuMixbpGpArSmLXxgGNJZHSG1Da",
  "key20": "nssB9iwFoFuWc7HmBNqw9SNpwEWTfesSogMMR64vb54ZT6DqFANHdk1u7rk4KH7y1DteRvRE9B47fQReUYN9asb",
  "key21": "3r2LT97JzNkt4uDhJxi3avfTK4EHp1QtKYfuHVprM7rHQ7QXN8ZFMq4bqPZLB6UkbuntNWGBoBYvrHbscAQnatM2",
  "key22": "3v3goaAxs2aT1CwCgBB2xxvJg3sxX8R1PY5tuTuSkgq14NgU7sUV7vzg5e7STdx68eykkk3hPyewKEu32PgAcmCU",
  "key23": "3cfEiim4vZPCp2F5Dw5gq9PUR4weUSAkTVHAwmQuDivAnLszaCG3VmjSUfVTmtgVoiZx8CGR7zbKAFAoWruZ5xXq",
  "key24": "GKQVVZK5CsFsU5GFWZ6fiEaPQRhM2uqjHrQ8VdykysHkfKXvWtQNysUbkekxhF4Y3fdG4sbbf9QsgJHJWwwcrBz",
  "key25": "3f3FV6xXUbwqdFG417zqyhi9m6PWLQ9eYSfYjvSSEqsbwtb9m3mbnC5Et3xvrKMfE6yokcRmj8MMTE4ipESKeocE"
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
