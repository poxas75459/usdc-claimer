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
    "PdQ5Zj1a4J33v9jrp8e9zYaaNrW9v3qTJriJz3LUTBUe1nB7pe9VXHgB6Wa9FhmP8j42jeHS8oBrvsk1H4f19eB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jajj9aga79YSz5UAoDuzLKEfMz4u4Ej16P2vq9BEDiE3qypFMw7kiWPf4HuGynCpxxPs2caQBWZUKAL69Wn5X65",
  "key1": "3vCdLNBWqPvF7RWvVMD2wVL8pmZcNSsjY1MxSnyGrDhxXxQ6GDUcLbdiXxE5N4S5M3eUnfpipDHyR4fsCr1HCmux",
  "key2": "WHz5gLXUs9mTD3ZfpWi7doKwhArCs4dM5zNR5KcCRXSH1gD7LCxiRbniw79opQ5BWDC792SBHRyus2y5YqqekYR",
  "key3": "2t8T9JKDscXP3pMJx5NnvkMwWbZ67YxF6afn8auRm9Fgd2zEVAQPR9Gpvb3k4DEgzByy5K1dieezzakk7jQ2wpAi",
  "key4": "5P27zqch5auyudtrVs7dbMtacBGpSmSEN6C8PRe3bB8cZuLGinkLPWTSB9jXnJqxzPWzTEtkMj1s35hks9t9jrg9",
  "key5": "2aZAdwr76CJ2BHULCktkVxz7ViambxEybketimUpzTKyBg4Vx8jw6q1hLjDGEwYHbQPrygjFQW6SJZFA8poPebxt",
  "key6": "5Tza72dZ1Z3m1Wxuc2DfwQxKBYdHxzuWWfzr4GTD8undfoApvfGDDGF8jMMoDkmWEDi5BS6Yd87i61F1MrHE7WuT",
  "key7": "QWC3A24QnQsxvAuodqq53Qaxjqr3GYGjvUWp7TxTzFcWECSrVXy795D6u9wvhv13p6PJs1yzvKKwWLpLZuVDtBL",
  "key8": "2dvSAbmuDfRKhNsfcwtVrLbUfUPeggSvNFF4PZstfX67TweYvtRaPNXeBMguJyZbFhUPpvsvunyy5FYayBwkFw2P",
  "key9": "3gy5qgavoSyBiNT3S2QQYSrWAmbbwaKtsbLr1hE6HhZWm3jat8MoUhAv4ZAJaQFC113qStvr7WdzuwHXmnf4RCkE",
  "key10": "hoBL2uzMTxyZzwjbcNoKQcVDg3REiM61YeuhRv99CsbdMGcRX6tEtx8X4yP5VELxreZpV4rEmAUokhUsaWAT1iy",
  "key11": "5kHZGPpKsNhkkUmTZD62yLcHV8KPnybUSntNGb1rYZN7qJfRgSTw8SH3SgMBGsttjyDNSHLase2Hv15hh1j31XR8",
  "key12": "2tgeMmBeaMHA986TwKBSSgxLhBSsvky3qsDW6Db31nXtBxxVuopwTSMpJiGEuesEBAdc7QJ5UvpzshYn5hQHmz2N",
  "key13": "3yVqcL4kJiWYQBVjAS7PMEamRe7gfKjvFiFQa5mZn2WzAwWdN9zxHcS1Kd4GLh5TXmTxQfGnyNBPxxz6e36Frn2c",
  "key14": "58D8muwfSUE8unR4PcvdAEoWa9LEVgWRte3zocyHwahCaaZBq7uKTTAuzUth9NtG4Y5abvzABFweyxPhU2hC4w4j",
  "key15": "5ctKoZPvP9LRfaMwzLZt8xs2F41ybLM8KspZo1GoyGs9iokvhXypBVRLz4ejFgtbSPSCwt1HefbBgLjGgyJVrEzG",
  "key16": "5PF87fBHhsH1MAa7U4dmfoyWjdHAc4tu5wrcACdn2Ak9pCg8r4vcU2u3ZSe9xz7NeLXZrA9MFuPjaJQ52YaP1ja1",
  "key17": "51n5DYw1LvMH37pFPu8sSXQGjewwDrimBRtke4z1N4H2nL63nw5ASnxGhYBJFttxPt2k1XnWMGqVLAJTuvbjwzKf",
  "key18": "5szHd9KUFdc135PeDk6TXNmi5TdSnKU8E2ZaVUAZ2JyPJrJfhbHpLX1Fg5M9GT259D2enanw3EWmcE6ZX2if7PBQ",
  "key19": "2aUxjFjr2rkygUm9dWK9jkBFwSsTUGdNn8YksvNnR22owXWpCJwfNsB18sCnZDXp6wazXssjgqGWt76PMMskiGcP",
  "key20": "iztbQ3vEgqY1dkZVxF4m74qkYoHGKP5nui9WT2bSy9UxCUA5pu2MPEjswzLu2hwhVHtEnr4Hcfc5Ka7P2D83VYG",
  "key21": "2M24VztgJEptgSpmh5nMDBk5mMSsWF4YsA4VH1k3tDeBHyUFUFt691yDufiHEgCJSYEnd2E6isZUu3FogouRCdp9",
  "key22": "59EEjRKM9uXbW6rL6dgZtJtTBygEvkLgAyT25SpL3uUoarSjd67hwpGVeDssCfXaE6NTRiRUB2VRRDLYSmAzghq7",
  "key23": "5jAJo9SihSEqXZFQpfNdN6s2ZVDPDsJW4T3k1cYxqDjKduj6wMGYFM2VT4W2CdCNy8g9Y26BNB9k5eXJSZW1Hdx2",
  "key24": "5MTgWMrtNuoNteTW5thKy1xvC8JdX1jbmS82dL9Mvvbr7SiVYHhRk9MrQMiMk7pyp6YkfM9Wm3EaUVFxcopbQ3nr",
  "key25": "E3CaXZtfeordifm3gqh9mSv7sQ9Rxx8Y66yzkwD8mFq5bVVUv84BD1uQbLqaSi6DxHiX8YF5Qcs3bgzqvd9vUpT",
  "key26": "5QzCA7B4GtY8sQc1WLPWA7K3d53SWPXRC5yKKHRfatZsR8TEYGyHKonHTzj85k2X7qS1KEzCinfA7YbztZEBNV2C",
  "key27": "mvHLq4rvgHu7MPi4eQC7GKyLX5jJg9tbGPZnozHAH1PGNDpB1ZjF32ynzqBBpmDbe8fq3unG9ogANWfJSi7U4Rq",
  "key28": "2WAsHGaJnPyrQu5Wp7Cfz4LkK9DnmeBHhqSNPwS5bbttsMBhLyMgS1Gk2BYtepujHp8wf8uSpojhZJrMwYzsmX2D",
  "key29": "Kvf3Q2ceb2UYBs9BJPFRsXyVRRvVeDvoCeHC26o2upsfwKqsJiMQ1gS1H1ZapQi8XWxYz1aFEVLRbT3XjJNLJHt"
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
