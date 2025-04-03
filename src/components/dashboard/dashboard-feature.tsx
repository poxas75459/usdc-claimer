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
    "4WUd38zRdX5GECAbqD7Re32SaWUQ6gdFdn7JXPqXYsNe8hoKyMLuzE6XBuRFuyEdcEkv9JJKVJfzZkUCzka6Wgis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BHn9iqqzfQrippMoQcR9SUt2My3XYp9HLUt7rKcUXa4rhKrWKXALAo2oGrFA1iMK7BhZVFSjYxz3jxZZcJo8w4M",
  "key1": "byzXerszRjtQ77w8ta3Yb8FjhrfbYphgpto5hsx3NrQKQwQh8pebfJq5zUHF7Mvb2Kej323mJJaUC5eELVtbJHx",
  "key2": "2X7GzrhpPUthRZNHqE4sSX228jaufsRd965APdgRsmYuZRKRxmbuSV9bSV4qNu6xG89crAKz6Y5ZFBuz5F4NFoeM",
  "key3": "DhQacaehtXvwXEa559VNWmJ2DkCvprzoBuYPXgZ3ni3kC2ejwEHW8AnUwGv2asAPGjC1tmjikFv2B9jFHR8XWZh",
  "key4": "TGaQW9Z8PqJR7cLAUneTYT1LyTU39paL1yUuFcenVksodSSxdquQ5G7gnGY2kAxHYbxSA4Ckuq83rDyvsM9kT5Z",
  "key5": "mkE1YGC66koi7pjaLZxF6HFGLFRJLVv13bLSJnjLBtuHhbPQauVpgcGuAGiqMwdkVQNhPiYq47oXhGRDfxJs5xB",
  "key6": "59HPrZwRRAcD3YJGs3cwtZQw4phT6ap21NNn4o1f9NXjETgLosECEc7FdQiftVpcr7kt4q6HihLvimEdDGxfb5ox",
  "key7": "3HMiSjLpkidsM4PoGYDSz8dmjXXWYNH5d8bnEwNkqmk7VTEr6nswXBcmkqVbv7iStHdaLxxcbfVYegjzF72SmYB3",
  "key8": "3yE4giubsDhW2MpsBJtEWDv6dmCz9XQ2FLTRWUR8YUSYP7eEEeYsBLUYw4oDfTgADHH8obkhWrcpcsf9dF34uJqq",
  "key9": "5aP3ygcHF5VXFUGP5Z43JL2aLmSy6ct9PNkaJLEU8F6NYHwzm9xz9EDcToo4d8vHQVZaJvNVEozAhKWKYXeWcFib",
  "key10": "2TcHtjN72uLLZsnmiMuXF8Roqu5Bf5m354GtZtqJXgUTDXGBJLrqGRRX4CFTLB71FrqCbwitFbaXn7twNtmwX16t",
  "key11": "5Vhc13SbYRAL6nQEo7xNiS4wVTmhCBeNsm8B1hqdjhSxrR6jcRqp8z5UpBrSByL74c31jgaUWAc5GHFjMKUDvTv9",
  "key12": "3nCK5Hp6MWER8MYLQV5aVjKwUQ8i4nYSZngtEqa4E3GqgGAgiAzPdSBCo2DWE7rnPsyDUuvhbJYJrvuSJSq3Drbt",
  "key13": "3zd8vB98m8qeaEdUGFzvFcz3gedFyaBugzg7XhEx8uXvMUiPbbNhmvQowSx7HLUaFX2b7wAKzmAP347q4xEQj3mg",
  "key14": "55trbPh4zoA9d6gbEoLvEdZn6u6aFcNn7C7rVAcveiAq4caCtYr25TPgGoN6nsNR9bNA3JmnAK6EWPFmJL8tPrnF",
  "key15": "DQZGbtUQog8PaYnuBUhSsdQ6wZRwkTPsg6f4w9ARcNxXt4oCXd4SokLsEz32Te4zoLHb6HEmEzyH7f3BikyS6FC",
  "key16": "5EwmE3k6iwKeU3m8zZkQvN477oQY9SrrjQHz1k3Yf4uNcsa6Ga87LuQaUTEw3KuqqS6UTmbKauhV89SKpgH22Urt",
  "key17": "2k1cLJa4GNjsqxfffBJ3u9bAEeWA1xqVFQbB6NrTGuHwkPjWvnPLLSQemhiRwtgmVs2Tf1JAFGCQBwiZ4EfuWNPa",
  "key18": "pWBxyEWoCz28DF3jn26PWVzokwwBY4braCMSxczMHZgScBSjXwpZjfrK5PjsYGANCjJAYcEuQTMjRa4QyUQu3G1",
  "key19": "JVALUmz5yHRvypLoEBKzioyny47oXF9detBqaRiovwHfuupL5xQAq3aNhQd9MtZRAnXDapTgx1eoRfXEoD4S3xF",
  "key20": "3bcLDdCULmHCRGhtdAtp1FsB2ZQCFpcrJw94knkkV724kMNgaaqAegSwjXPxGajq9YXkDt91CJaK1jfEh6YMAgjU",
  "key21": "5JYpbUD6v8a3U1twp6d4nMHNqAux9asayE39c7ZB8PQyfwigD9udfZuoNm4akciUv4Kqecqx8ChD1DXJZwpgBii4",
  "key22": "aq7tNxHmVD7R7KVE2TVSxxEYgnz1xgJoEoRWMQbhc5VuhwUhaQ4W2X6xxwo9EYjwhNeSQA6y5BH8ExdRmoF2P1r",
  "key23": "yikErQrb7xFhhgdHDSkKs6z64QNCgYcKD6nxorauapmYuxEd8TYC5YDD6JPNManoS6a7g5Z37zGQqQ44DSTcmd5",
  "key24": "5az3HoAr1FhjkG9ZX1bYGo3L49ivgML6sMqtr8vvJ3wLdLkmfQmhEYqwpRG8NcNJ1azSVYNECLAQzBzSF9kC4AYa",
  "key25": "3m6cmJJuZfqFFyh7Ssq8pV7DE16h2HrLs7TTTDtj4cM73p8NzsDW74xSoMbMoPkt2jtymstxPUFVxYM1mNGh3KWN",
  "key26": "3C6AL7xAR84aSEjztrYCRkKtJQd1sd24xpiHE66wyitxQTHKhdTEhmHme3NmFaKhqQRQmsgf939mT2hzdCWaLUNL",
  "key27": "hKDduMtmDsFpHEueUUZyyWXmXkUWN19aWAnA11fRKmNKqSkNKvGjscyi3f6c8fxkwUw8RZekH1Ahs6bg6sqwhHa",
  "key28": "C6Cghgnes76RD27i56UPLrJea6LGSAydxcekEjvDJew3QkScysPb4mviBXKexDaK9K1UYRaSc8yk5Fbxpf8uu6U",
  "key29": "odK1ZxQTbLx175U5qaR5Ch8c5Vx87XNYiwr3QDQxnfYy24Epkok6QxkbeUDwAEhyxvWqkvR5m7GxUC1P8qwkpNV",
  "key30": "4u4ZnTDPzYK5zBaWNgb8AfRYL5eEPQ5qLawUJvHWSshET2NYxL5DcjC5Mecem6abjtSCzhXyuDcxDHNsaSNr1HTw",
  "key31": "TikfNxxbYJX2u8AQ8r1BuBs3dy12cKVorsDScPnhXeVaHBg9Wzbho2uuHiBS2nfhjT5YyAGZVsZK651khGFZfqx",
  "key32": "qfvvVDi7XESkdt3JPeKSmB8Gyh98KSBx2dgCsRLW5xpCoxTwFKaf6K8d3v1jfgjPyKZwfyo41z7X62JW7HeZmQr",
  "key33": "126uKVVgsfnxmk8aAJ6io9uTEaVchREqRfmsgacuEU1AjrkGwj5S5iRR72SkcEEmz8xd3S9ce2KDMRz5dDSx1gno"
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
