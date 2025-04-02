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
    "2NJetGtPsqpxTJbgbMMBMv8cJ9dEHGbiH4akn9ZmBejKgqAEAuJWZNpzUH7EYYpnDFqS91pGNLEYETkAfVNtYRZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mEXkaoqy9gifXAYrNXbTAL2XophzmNJz3e8n73UtipUvAbhs97cixZnmETC7zFygQ6sNLc96qL4eUprg6gtTjwC",
  "key1": "5Et83SPZNKurY4MPcTkR3QPJFPh3GbJi6jLLLwSADGhasN2QPH2XmtGaM6SXJsMPv6A9cTubgfmWcGNHUQsNoZ85",
  "key2": "4o9hzcPaA9WkP2pgVvJr9eT84Q5bvwt4TrpTKoG2M22vJvfxFuEaUcTwZxgxmTxS7b6Z985nbBM8dgswwBPTnage",
  "key3": "71djazpPoqR86EwStW4VpyWwqx8nMNJjjSh1Nck3vfnG4Q1QmfEkfrXQfDkEamR4PgqHjcD7mUaoGPTAZtUPCYu",
  "key4": "2Rt9ghkK7LxKvxNzAK4jZgRV2naRhqMbGG6A7w8M9VQG9tCqKucVDGaVQk1Zioxh1XU2pkNodZ7apy84dyEbzyNK",
  "key5": "4fnQwpTmkz7Y8fAovc74am9ZVK3T2BBK7knjeYgyBBoXPpJX5bgQGApEUoYBK8jvSrtZG6tXRS9ecgCFc9HkN6Sd",
  "key6": "fJcah6up4SvuRgAhMyYJ13JFbLPDmKU4JExrJM4H6zXi44GjU5SoWwzbVxSahk9jL4HuMn2VMnxY1XPL93Mha7w",
  "key7": "4RbLtNm4g3SorfeCpucJCar84dmg6tcJg4hCboyVgRwuUzPR5RqmZkFcA57C1nVJraWWfWK3SYKMKEEcDEuNWe4f",
  "key8": "65fpZzNfPVJ7kzEVgFJ2ewNWmKyaruG14mKxzwg6MEBFU9HoxRGXcnWGvd97PRFu4yrBi6po7jAydQpA2EncXJJm",
  "key9": "4r52MAETaguMYxPN9HoVhCDpYbM8KC8XU5pL7foy8XzDzBNaE2k1PGrGDEzUFV2KuBWZbz2ZTQpry5tS1S7sacA",
  "key10": "WM2qcvTXFkTe5nZiHorhbERKXWfcwwfBqUckgDB7o2fAYmt2ALjq1fFaeT5kb1SwsAt8wen1YSULNJAaEWWH852",
  "key11": "2G7gu8CuQpuhhwdQom458sDwJomzinj8zLY7hpQu9tyA7BgtQZaJLZSPRgHvLMZp5g2NaZU52q4g46o6uHzK8p4p",
  "key12": "5QkXe23ACDcHti8eJnYc1q6mhWWxHDLnYNBfSRH6vC84ETGzkzBVzy2tDfCDh1DcthCuEHVtUvYMnSHm7TCP6Fm7",
  "key13": "53v2XUMA1akSNFbnPbEGhSoWUYVU78unCuJPNQ3Sw9i2dgHV1aSzYro6t9FTLCi8Qa8HctJxkrpw3u9F6hcks6Nu",
  "key14": "2q53uRLFRGhSNd9Cu3gXAktwmi7U9uYmiV3B1vqXVSojodGYn2PZ5GK9PWMH7XK5ii7K92UjXFRPBi1FPgCx5LkR",
  "key15": "YCZY5hm7GWZ2yttywCwFsh8PL2M2mnCJxy44hM9ycbnLKor7hphA3rNQWdaBzJ5goAt3ofBAbtJQdobA6JNvoGo",
  "key16": "nXRJN3jWuhAWc7FG1oJ8ep9FPmPYq3R6t2BJYNDKRpvrxHv97gavBYsrdt3MbdqywwtFhGYzgMP2Fq1LhcDuhqB",
  "key17": "QV9xpWYHTMF6fupy9zYzMmoGhCUwJhnah3uCRenm7uZWHRLCXP2pDr3iBTut6uw3qd7btRBdtA6jV2yvmAKFEGR",
  "key18": "61GWtMnejPJ97Y5A4MQ9XLP9HxvE27nXPQHCHocksUHUHKBh5M6hUhPh58ZyHLyejaD2YpEo1dxuRYgJHMgyHecu",
  "key19": "5cAs2jwD7WWxajjzyTzA6pctMe5PpLhXGXuMXY3CCgV8DNyPXcXPabZK5rMm2HAyqzsSvx1NoLYDG2phomrJcqd",
  "key20": "3qg2ZWoh7gzRpjApLAQY4u8bMVZrhA2cSjubmf1nNeVvQNpKgqg2rdLQ5WWrud59wEBTQtcA4KzmsGcBz5WbTFud",
  "key21": "3ooMXr8j7aDsYTxXGff59ZwadSM6YmJUKwvJNYX6hF7zb9AQRL555Urgw4NubYpvH7R42G2XD49x2tBnJ7BSiYvD",
  "key22": "3pTrpaVA4sg3FYqEePerd18bfwRaZuM2obpDS42AjCVJg9rPTUTNwRWnoqCug6wULnQ8GFDvJAF4KbMafbtvZEGh",
  "key23": "5sJW1W3z7e9tnhSncnpnDtTuEufQYN31fweHNmSifqNLqVdGw2Puun93U9kVujbB9JCt2Lew7gLDPSZoH9kWfMHt",
  "key24": "24PCqbagCPMkXK5pzGoD1APe3LNNq9FsjjMH2PZcUNMSSWA55tx3uudFYqzpx3SAvMroUxWCjYzySNwhSy5BpkwC",
  "key25": "ZBMXn4uFq7Codi5RCG8U7ZKAiBGg9xR4prb6MqpNygJJtETyQQ7qjpF6MsW6EYRHdZokmwWc2jeuSt38QWJZ6xu",
  "key26": "44zFQmQQ2g6i6EA3gqmbMdEdJKuj2WkXH7S27UhzfWzgQuWXqLK9Xhm6Dxp8KqE2rhhUQ3XfP7vXvhBAB8Xva5Go",
  "key27": "33hScMYZnXqiF8LPqQCm2W5yriJNMW1ZsUtLfZmQTkAS6ntsJxfTrbPs2Vca5c8GYAaoF8bCf6TdFBudtUEi1C8H",
  "key28": "5C3S7wg8W3NZwRA3bK21Pp13vn5KfRf41BJoku3mar9yqDKVEKZQt3yWJ9jPRaHuFGwwysC8bFb2dDdsBdLbr5Yn",
  "key29": "4atwU1hkZT3zzfN5neGd4yqbieUUSjhVjFWFzTgfh1oUEAZJUD7xmLF8bGEMRB8b4CFCrnPZndHmdCi9W4g8Nb18",
  "key30": "4yxoPi7neSc4NaWsTuHQtyBRKWsYQG3sZZinvEtYkRZkSkxEABihWA44ntRguEqE8bHZfQxkyRSBmRBd4RSgkGXS"
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
