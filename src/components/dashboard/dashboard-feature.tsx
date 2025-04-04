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
    "5GD6sLhoziEesdZdxRwSjJXJ5iiR8c9nzdFP9rCneaxd5o1HMcPNN7kLZQz3TJQ7XE9GW734xLatUJhCqqfgphhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mj7NFBVdz6EQ4iVZRHZJHp1WEkFoFnn9865dTbZbrV7bbjHTnBQpH6rsaEnZeWPTK3GhSghiznHKQYJ1ZUoBZxF",
  "key1": "2s1YJdvyhreCTpiFAsuuApwqEnsE1op1v9F3qtWUCEQ1sD6VxQBQUvxMUpbLbT9tNn5J6HGUv1oGuSJVA1cnYgsB",
  "key2": "4E1y4tTrL81YV7CFL1NXd7SPXoYtnGLYpNCVPsYQC43hg52sw7NdWNg7yazySjJ5S6Zx9EjCa6uX14LJcBfhUh3j",
  "key3": "5U2RbxmA33EHbZQpn1RVzBA5HoErid9gAkWSUK4hkxTTivSFQUBPjFhYMTzssRvpEp4CDL3r6D5XzNeHUMktXEVL",
  "key4": "4ZopRquXvy4MM4eZLqCoKML6XbCUTAgUVfkmDAXLMKVoQsQsbpGXYpsNNmZaN7HT7YDYGQzAE4RzDpkqPcr6a7Wr",
  "key5": "481dgSD3totR7cYggJddw96srHRRiv5Wc1d3SnhCmxa1z7J2xhNhjniiGkjjsYHTMqQMnx7FzGAu6idbX2DK3Ei3",
  "key6": "4bza5XGCgmDUUJfZvJ74ZgjbmK5CaEocJnduwwHVuAe4MRTi4LcBH8S442Z2HVJT9PfUtHZ8iJFPQiDvZB4Ped1o",
  "key7": "27zHJXpF6qM8bcLfFqY67i2fgoDstsUE3Pnaxykt5xrvjrM37M9Vq3b338Ye2hvfHQy62xSd13wU5nVYdsE9PV2d",
  "key8": "3yzEeCHHZrm2e7a3i2ZDNg9JvvuYTCH5XXLx4xid55foiBaz3jpjQWso7VTtBJ2TCK62tbXUqgGWv9iFHMGmhQhA",
  "key9": "4SguWg2GDrRPER77vhPLqS7g7SqbRiMMXVDwgDdncsRrzpnZYcGB4LDWG5cx5wF4mhSfm5atKfK3k2hdrnR5BoXJ",
  "key10": "LHTNQtyV12NCK57dqWk9beUKzwLBmfZyJQKsMWtWf2DCqfVKJpVcWwmwkqjmMMdsqfUbj3GaxHzG8FoENtVPbjX",
  "key11": "5VXe6kEXChcbbdZhWjBKgN5hYyqHERD9fo9cFod411hMqrDtXu7z41TpXSDySPX8xLJJ1bsk7j6wXZgwdxJt9M1w",
  "key12": "3zfHC229KUrpMNom6C1oixcC3kBfvHCMPfLhPDJYcGpagF91AUSVw31sWosruxjcEdv9h18EZVrifrLyx1D55TzA",
  "key13": "hwW6293wmhXPjERk4v3m2AKrc1pUdVUSHE4GaVHv3oGL2eUryMaRrcqKAY8e56xdVyHooqTk6StQJBq34qppufd",
  "key14": "5nmYk84zCegHkdUSV6a4Jd5G6BMcjMz6TPqQeBbupAJosLyeRXeDrKrickos4hp7ehJTVagmPZqBdUDYMK2xf1z8",
  "key15": "2MAyxdB2yKA18YJEQbdFsvwXPmeyAEkwea7KAhNE88LRtjWM4ycn136tEh5vR4xQy2UzFEd2F3wd6JkEzcUUrXbw",
  "key16": "3q7Jd5r48Asw4hQ6XtSdCJjmfQGmU5sXHBEwp2aNj2hUFmuN9UNaitNEGwvzK5aqZGaT49p1oeAscxetXNLsXLu7",
  "key17": "8yweWnxTTXfyH2yzDhsJaS6XYXCzMHFAHfyDjro9N8odo5VdyaHtBieFoG8RPYWnAPB67DVUkgYfDHrVsyRtDcK",
  "key18": "3F8xs37GnVBV7eehMbztWVJRQZBCakUxhaka6vBUn5XLmXCfk9LLt5CapmjKKsEs4kNTamTeckkHneUhKi2wbn1n",
  "key19": "55rnSb63fwkscQiiBeJjRUSRdGaW1P7ZotNaLmK8YyXAysH57bykHbKufNcQJUzuBBzeHjrvhmgcsLsJT8pM1HiG",
  "key20": "S9qA8rkTA8hStWBPnJPKVddkgRazUUcuUH2Dtq6Jqi5HKoJ1Ce7mm5P6ip9ZSkZZoFqwsowUboy887pvQiQpsLy",
  "key21": "2HrPun9uJmZwDQXspdagFAmGymrQAo6sBgGSNHScxvKhVdeXMzZ67ENGudVoVRQJbY7VUYR3kozkk9FBa9UjwSZr",
  "key22": "4nUcV8v3q8LAEcwNd962JW7TQESXBKJBkzJRm9W72T7q3VGZhsgHccES1vSU6Audn2zKkLbPJRaxchNr8t9nuUrp",
  "key23": "26Dznr4DCeDibzp3PLcK7CyrAonywffAN6RtQ3C6YpthBkyQPPxhUXxi1SjPPbGbqd3rcKnYAWFKmcnqLZ75Gk3U",
  "key24": "7Z4Mt4f3NsPHG8sYPVYNUJ2t17c4gKCr4wHMkW8AykAg2mQWAcqWVzBTuCB8dvCqQgir7kkCSYu2JgDq2LRxq8z",
  "key25": "5jUvrnxDCpj7mbvZbLNQuunatpTkFgTtwtTffTKoz6Tdq8YgFX6qCdui77xTpZR9PssnqV9JmxejB2V7uF7aaRR5"
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
