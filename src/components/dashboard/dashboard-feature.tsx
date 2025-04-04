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
    "2jiUqLeiv9xdTarWqX8gtKYmNJrz8dAUtqsQJGETtSNJ4dYSovH9VSgCTAaUf6YwxcLnzkwkkhvcMbDL9Fuhb73X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59diZXakUPUSEWwsKfxbDFYUKynNFBHLTGRTGGpcQsnVW7KxJepiqyfbAbvdPKExbL78mqoJ1dgUitPm6ZSDaMB9",
  "key1": "2tAB4BT7gwXrJewfECorKG7fRM1W5TQ2kpDqwGsu3wdWAMTy87upSmBUTkcSceNCr2XpuKSgg9tZYRgnUJRppDpT",
  "key2": "57uS1RXwvd3XKa82PNKiB4ydo34afMSmeZeNLxQNwptjbe7wXSTJw8ri2XvAAnh4uV4PybnjXgrj6SFTvoT1XvL3",
  "key3": "25xUyJMQ1GSSsYTTifDkth8VVgQQXf77itB4vVzT6JC2kTvqaJ3nsz7orTGuooRQ1FgL35qQR1meabgFdMViNh2Y",
  "key4": "5VvbhCiPV6kw3YgSQnAMdZXGYXzLBPUPazTNxRSgxU2EKjSZq5Fq49dECG6Pmcb2oSUCTxeDc8ugBDNcXbspozu7",
  "key5": "3XosRQWdtMsnbyTUnVo5HVuBxdfiwLzwhecpNQEfcJKkVdLHKWfr5wcu3QcUCGiRpmWaDoYriXHaChyqcLcnJTop",
  "key6": "4nJhpEzLHn7DyNQtTYSNMYhagrGWx5hXjTur8DSgzX2QkqgFbE842KbeQXuxxCeVDrENnaaTXyYpz3dmbXGLfaai",
  "key7": "3Hk9f3tC7KavgTXbwjtvRnj2H2YX1uKNwvv6zJn9fVAadmgS1B198FGzpHqLKVkTCM73oqNCVfPKt1Ug19fPoWBL",
  "key8": "TVhKX4NNwVnKFKU2CH5tRp8mCEidP5dY3GJ698AjJxyuPWfuyqCYnnEkHsrYSnS4MMazTqcH9SczKNC11KMqjqX",
  "key9": "4Rp3pzpWMkg2TtAXtf61gkeczbqkFKYHejeJGkXFY4aJASGJmuaDb8LmLyPJdvEpiGcZ2fz7vRFK8nd7Rf9XSJwJ",
  "key10": "2aXhk7CDgY6x3vkfjaBeC8huDY73HB5SY1qsBT6adHrqeJrgn3VkTZFk14ASNUReQcERFurKjZgu8hJGZme3kU6R",
  "key11": "NBYAX9qsmDSSpUk6dtrVRo5wR5mFgSWabFNvqeSLRnY25qyNpwQoEL61qnfZpvogp4oR81vVgHQobckbDXJd3jm",
  "key12": "3UUsjxEEuwrWBYWw2K1nEQCSKKjnWtkGBZhxKdVs6P9YdTmF4qQ3cZm9oEgF9GGAVsc47JVdLZV8DQyxCV9wzWs3",
  "key13": "21UyWXK5eVeLA2eMNsp1p4yy5e5o38zmXtUH7oWZHcVDUEHBsnQfKi88m3pBfHUj1jUwHAiygfxqpyozjjYgGkHN",
  "key14": "5KiXBRq6Ee5CZananvYM2fcSfN9fsjLEDk8W8QzFwKA1NensxkdYmvoUYS1Y3aC41RbxWs7uMUckXwFYTp4tas1P",
  "key15": "2DmV9schjrqoUGDAjx5yxACyVYRsv55gM68wnUjZyR73angwkPdwFfgj64WLpwgaAZAGwNTuN6SFC3wh3csdunwh",
  "key16": "4Q4jZaqBRGoxF8vKNjPLbgDvV5ax4uLGBJUTQEw9t7awkepqgJsJBgLJdghQYAQTc2oo5pCXjk5Ua3Jx5Wmy3FfU",
  "key17": "3dSxpvewr6cCiKkuNRSBXXcbp9T3NyAtWJBCeSok1GdnMqEQEFMcMjARunC8a24G5i39Ha3u2mTjTjvXD4iyPM3H",
  "key18": "5hAniAsXbPC6fD9SV9m8phAk9PLxLUSFFRWZHk9Ug5fpCVyTtUQEdaRZTrKawWKT7QTo3ZmvPTKCKnuKtTYn4CPT",
  "key19": "7QTE6jVdDhEdjTM2nR5S4YQGgMGJc9TQZQK4NnYJhR2sj5nEkaLet66pcUdaMvZyFfQqSSP3hSMd8P4o3UnaA8i",
  "key20": "5548vgXsnWRUtgXhzAMUBvadYkfSbFWjd4V1DsSiP9Thg3AJgrVqzCRWRiMj2xWU4rv4KGAo4aXNVEePTjhMHUCJ",
  "key21": "5G5SXqbFU2uaVLQeZ5aFf1ksfPBofWyLoGTxpmXr4yem5iJLPHdDZYkPhCgT11754wdarnZsZmdFDWwUdF6nJCuS",
  "key22": "4cbzKG9ifqEZ1cXkBhVJ6sXoZPFJpoZVvPogC89wBNHJbRuLVrwcJcVgPrJSips7vnmNyZ8rMEM1Teojb4vAGKCm",
  "key23": "3AtRSXBx2RWn3FQHUKuhzic4xKgY7TbUE5S7E4cLimSdD4AtqaPvyHtFxKHF6XDBwVQ5fwu92e7AavfjeVqaYDKz",
  "key24": "63Dx3HKjmwtLghi5j28jb4pK8pZFk7XqrWNQTCoqSDt8QNXaAMJiZKoPpMvqJfQmK35DW3mxoCe8DhdjvY72ZGE8",
  "key25": "4uMJNLRByhVX2chgfYyfthpsuBws6BcgsmLcxtWYxFuZHDXWQG7F7WPAZP4abmsEQV2nsdpSeVqfz6nkHtMQc5Ka",
  "key26": "5theNTEUrvdGJs5EfpMokuGDM3EJuMcHUBm38uTiGbEiq9jFmX6KntX9UF5LL1s1aB8MJq5PduFEQsjx3xwhfR1n",
  "key27": "5rUHcmvxJ9AX1ABq6g4SbHc2yiZmZyoRAhEPiKfuTjh1T9Bb6xbjur1TNqawTqCTAJzLBbT5anj6Ch8D3Pcn3LF9",
  "key28": "3pqb8pS1xmDYbp8gk8yFbTjaX4BEdEdsG8NXN3DbQgHEgYh6ayhwgA3QB1B8CAj151oJjwMAEHcjY4dfzPUHGkGM",
  "key29": "HK4djysNQm5vnYRSC3NCPEVyLNCcJz7jQppVScjdYjb8nSgajKeVm4NpKTu2rTxuyTiDK694F3mpDaWxfpnJdKJ",
  "key30": "4msrVTYG1riy9PG8VcEF1ViCee89LEkr8StAtDi9LGEM61diLCchiSLUjujxYDTu7FDuHNjrDU88rX4vNyzU4gt7",
  "key31": "5rAZXzJ6PLXk53oXXv96iwHZfmLeysnSjNTjpKakaRgbHLqbqhf5YZBLjS32cL1Dvq7xCbkmBkLErVbK3kyRtGJA",
  "key32": "288EAtqTwRL6fLw55h7QUAx8pVJAiuc3BvsEAK2DmwMFa1ZqTvmRuHjND6WNGF7BNyqhwJrEDyVuUQ36LXhvWrpD",
  "key33": "4NfJS5Fmih5m1iASxFAUWgh9oHAxczakxmJnHW7bcpsvcfFyEG5hJAYeCKRb1FshvEK4gzobZ96HeuSgdYawtwvZ",
  "key34": "CEd49uojCjtjnyNB8ZgwcFaTrTJWiAgDN45496FCNxLWKsMizdnQshfmYsjHsvk19mtxEZsBH6Qiz9nbD53KutS",
  "key35": "2BCzYmwbnrxCpsNpkHjLrQiVH5GzP8bjdKcfjVSEX2mxoPsLFQNEhY6AisLeGBGsiKiRxBafzcaRrv5VQQ63BgAR",
  "key36": "27U6FjxTA7PgwjJRqYGPRE2EVFPEqXzNKKaNyqbz2tgMWCRf57jrQU1aFm45hZrDW8B1voyaTGujy7UKaLerYpNj"
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
